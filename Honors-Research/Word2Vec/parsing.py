
# coding: utf-8

# In[153]:


# Import Dependencies
# Import os
import os
# For word encodiing
import codecs
#regex for file
import glob
# Concurrency
import multiprocessing
# Dealing with OS, i.e., reading a file
# pretty print
import pprint
# Regular Expression
import re
# Natural Language Toolkit
import nltk
# Word 2 Vec
import gensim.models.word2vec as w2v
# Dimensionality reduction
import sklearn.manifold
import numpy as np
import pandas as pd
import json
from nltk.corpus import stopwords

from graphviz import Source


# In[2]:


# Step 1 Process data
# clean data w/ nltk

nltk.download("punkt") # pretrained tokenizer
nltk.download("stopwords") # words like and, the, an, a, of
nltk.download('averaged_perceptron_tagger')


# In[27]:


java_path = "C:/Program Files/Java/jdk1.8.0_144/bin/java.exe"
os.environ['JAVAHOME'] = java_path
from nltk.parse.stanford import StanfordDependencyParser

path_to_jar = 'C:\\Users\\tangr\\honors-research\\Word2Vec\\stanford-parser-full-2018-10-17\\stanford-parser.jar'
path_to_models_jar = 'C:\\Users\\tangr\\honors-research\\Word2Vec\\stanford-parser-full-2018-10-17\\stanford-parser-3.9.2-models.jar'


# In[28]:


dependency_parser = StanfordDependencyParser(path_to_jar=path_to_jar, path_to_models_jar=path_to_models_jar)



# In[3]:


def clean_str(string):
    string = string.lower()
    string = string.replace("(", " ")
    string = string.replace(")", " ")
    string = string.replace(">=", " greater than or equal to ")
    string = string.replace("<=", " lesser than or equal to ")
    string = string.replace(">", " greater than ")
    string = string.replace("<", " lesser than ")
    string = string.replace("==", " equal to")
    string = string.replace("=", " equal ")
    string = string.replace("00", "")
    string = string.replace(".", " ")
    string = re.sub(r"[^A-Za-z0-9(),!?\'\`]", " ", string)
    string = string.replace("if", "")
    return string.strip().lower()


# In[141]:


df_all = pd.read_csv('final.csv')
# for i in df_all['Trigger']:
#     print(i)


# In[142]:


df_triggers = df_all['Trigger'].values
# df_triggers[:50]


# In[167]:


count = 0
for trigger in df_triggers:
    if count <= 5:
        result = dependency_parser.raw_parse(trigger)
#         print(result)

#         for i in result:
#             print(i.to_dot())
#             break

#         dep = result.__next__()
        for i in result:
            dep_tree_dot_repr = i.to_dot()
            source = Source(dep_tree_dot_repr, filename=f"dep_tree_{count}", format="png")
            source.view()
            break
    
    #         print(list(dep.triples()))  
        count += 1
    else:
        break
    


# In[44]:


# import os
# from nltk.parse import stanford
# os.environ['STANFORD_PARSER'] = 'C:\\Users\\tangr\\honors-research\\Word2Vec\\stanford-parser-full-2018-10-17\\stanford-parser.jar'
# os.environ['STANFORD_MODELS'] = 'C:\\Users\\tangr\\honors-research\\Word2Vec\\stanford-parser-full-2018-10-17\\stanford-parser-3.9.2-models.jar'

# parser = stanford.StanfordParser(model_path="C:\\Users\\tangr\\honors-research\\Word2Vec\\stanford-parser-full-2018-10-17\\stanford-parser.jar")
# sentences = parser.raw_parse_sents(("Hello, My name is Melroy.", "What is your name?"))
# print(sentences)

# # GUI
# for line in sentences:
#     for sentence in line:
#         sentence.draw()


# In[6]:


# for trigger in df_triggers:
#     if "AND" in trigger:
#         print(trigger)


# In[7]:


# temp_df_triggers = [clean_str(trigger) for trigger in df_triggers]
arr_triggers = []
for trigger in df_triggers:
    trigger = trigger.replace(" and ", " AND ")
    arr_trigger_and = trigger.split("AND")
    temp = []
    
    for phases in arr_trigger_and:
        phases = phases.replace(" or ", " OR ")
        temp.append(phases.split("OR"))
    
    arr_triggers.append(temp)
# arr_triggers        


# In[8]:


temp_df_triggers = [clean_str(trigger) for trigger in df_triggers]


# In[9]:


# temp_df_triggers[:50]


# In[45]:


new_df_triggers = []
for trigger in temp_df_triggers:
    word = nltk.word_tokenize(trigger)
    tagged = nltk.pos_tag(word)
    new_df_triggers.append(tagged)
#     print(tagged)
    
# print(new_df_triggers[:60])


# In[11]:


# new_df_triggers = [nltk.word_tokenize(trigger) for trigger in temp_df_triggers]


# In[12]:


stop_words = set(stopwords.words("english"))


# In[13]:


filtered_triggers = []
for trigger in new_df_triggers:
    temp = []
    for token in trigger:
        if not token in stop_words:
            temp.append(token)
    filtered_triggers.append(temp)


# In[14]:


# filtered_triggers[:10]


# In[15]:


#ONCE we have vectors
#step 3 - build model
#3 main tasks that vectors help with
#DISTANCE, SIMILARITY, RANKING

# Dimensionality of the resulting word vectors.
#more dimensions, more computationally expensive to train
#but also more accurate
#more dimensions = more generalized
num_features = 300
# Minimum word count threshold.
min_word_count = 3

# Number of threads to run in parallel.
#more workers, faster we train
num_workers = multiprocessing.cpu_count()

# Context window length.
context_size = 7

# Downsample setting for frequent words.
#0 - 1e-5 is good for this
downsampling = 1e-3

# Seed for the RNG, to make the results reproducible.
#random number generator
#deterministic, good for debugging
seed = 1


# In[16]:


triggers2vec = w2v.Word2Vec(
    sg=1,
    seed=seed,
    workers=num_workers,
    size=num_features,
    min_count=min_word_count,
    window=context_size,
    sample=downsampling
)


# In[107]:


"""
CC coordinating conjunction
CD cardinal digit
DT determiner
EX existential there (like: “there is” … think of it like “there exists”)
FW foreign word
IN preposition/subordinating conjunction
JJ adjective ‘big’
JJR adjective, comparative ‘bigger’
JJS adjective, superlative ‘biggest’
LS list marker 1)
MD modal could, will
NN noun, singular ‘desk’
NNS noun plural ‘desks’
NNP proper noun, singular ‘Harrison’
NNPS proper noun, plural ‘Americans’
PDT predeterminer ‘all the kids’
POS possessive ending parent’s
PRP personal pronoun I, he, she
PRP$ possessive pronoun my, his, hers
RB adverb very, silently,
RBR adverb, comparative better
RBS adverb, superlative best
RP particle give up
TO, to go ‘to’ the store.
UH interjection, errrrrrrrm
VB verb, base form take
VBD verb, past tense took
VBG verb, gerund/present participle taking
VBN verb, past participle taken
VBP verb, sing. present, non-3d take
VBZ verb, 3rd person sing. present takes
WDT wh-determiner which
WP wh-pronoun who, what
WP$ possessive wh-pronoun whose
WRB wh-abverb where, when
"""


# In[18]:


# triggers2vec.build_vocab(filtered_triggers)
# triggers2vec.vocabulary


# In[19]:


# print(f"Triger2Vec vocab length: {len(triggers2vec.vocab)}")


# In[121]:


nouns = ['NN','NNS', 'NNP','NNPS']
routine_count = 1
trigger_devices = {}
for trigger in range(len(filtered_triggers)):
    trigger_devices[routine_count] = []
#     tagged = nltk.pos_tag(trigger)
    tagged = filtered_triggers[trigger]
    for i in range(len(tagged)):
        word = tagged[i][0]
        pos = tagged[i][1]
        
        if pos in nouns:
#             routine_count_key = str(routine_count)
            trigger_devices[routine_count].append((word,pos))
            
#             print(f"routine {routine_count}: \t {word} ==> {pos}")
    routine_count+=1

# pprint.pprint(trigger_devices)


# In[112]:


comparitive = ['JJ','JJS', 'JJR','IN']
routine_count = 1
personal_stop_words = ['of', 'in','than','by']
trigger_name = {}
for trigger in range(len(filtered_triggers)):
    trigger_name[routine_count] = []
#     tagged = nltk.pos_tag(trigger)
    tagged = filtered_triggers[trigger]
    for i in range(len(tagged)):
        word = tagged[i][0]
        pos = tagged[i][1]
        
        if word not in personal_stop_words:
            if pos in comparitive:
    #             routine_count_key = str(routine_count)
                trigger_name[routine_count].append((word,pos))
            
#             print(f"routine {routine_count}: \t {word} ==> {pos}")
    routine_count+=1

# pprint.pprint(trigger_name)


# In[113]:


"""
VB verb, base form take
VBD verb, past tense took
VBG verb, gerund/present participle taking
VBN verb, past participle taken
VBP verb, sing. present, non-3d take
VBZ verb, 3rd person sing. present takes
"""
verbs = ['VB','VBD', 'VBG','VBN','VBP','VBZ']
personal_stop_words_verbs = ['is','am','i', 'was','x','are','does']
routine_count = 1
trigger_capability = {}
for trigger in range(len(filtered_triggers)):
    trigger_capability[routine_count] = []
#     tagged = nltk.pos_tag(trigger)
    tagged = filtered_triggers[trigger]
    for i in range(len(tagged)):
        word = tagged[i][0]
        pos = tagged[i][1]
        
        if word not in personal_stop_words_verbs:
            if pos in verbs:
    #             routine_count_key = str(routine_count)
                trigger_capability[routine_count].append((word,pos))
            
#             print(f"routine {routine_count}: \t {word} ==> {pos}")
    routine_count+=1
       
# pprint.pprint(trigger_capability)


# In[114]:


value_count = 0
for routine, arr in trigger_capability.items():
    if len(arr) > 0:
        value_count += 1

print(value_count/250)


# In[115]:


# Loading device-capability.json
with open('device-capability.json') as json_data:
    d = json.load(json_data)


# In[116]:


# Parsing device-capability.json data structure
device_cap_dict = {}
for index in range(len(d)):
    for device in d[index]:
#         print(f'device = {device}')
        device_cap_dict[device] = {}
        capability_list = d[index][device]
        for cap in capability_list:
#             print(cap.keys())
#             print(cap)
            for key,value in cap.items():
                if key != "desc":
                    if key not in device_cap_dict[device].keys():
                        device_cap_dict[device][key] = [value]
                    else:
                        device_cap_dict[device][key].append(value)
#                     print(f'{key}, {value}')
#         print(f'capability = {d[index][device]}')
#     for i in item:
# #         print(i.lower())
        
#         print(d)
#         keys.append(i.lower())
#         print('--------------------------------------')


# In[117]:


pprint.pprint(device_cap_dict)


# In[136]:


mapping = {"mode": "Null"}
trigger_device_list = {}
keys = device_cap_dict.keys()
count = 0
for routine in trigger_devices:
    trigger_device_list[routine] = set()
    for nouns in trigger_devices[routine]:
#         print(nouns[0])

        for device in keys:
#             print(f"device = {device}")
            if nouns[0] in device.lower():
                count+=1

                trigger_device_list[routine].add(device)
#                 break
#         else:
#             print("not matched ==> ", nouns[0])
print(count)
# pprint.pprint(trigger_device_list)
# for i in trigger_device_list:
#     print(f"Routine = {i}: ")
#     for item in range(len(trigger_device_list[i])):
#         print(trigger_device_list[i][item])
    
#     print("---------------------------")
# keys
# for i in keys:
#     print(i)


# In[137]:


pprint.pprint(trigger_device_list)


# In[ ]:




