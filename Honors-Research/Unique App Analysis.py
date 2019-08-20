
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import seaborn as sns


# In[2]:


user_data = pd.read_csv("Analysis data.csv")
user_data.head()


# In[7]:


unique_col = user_data[['Full Uniqueness description','Intersection: 0 = common; 1 = unique ']]
unique_col


# In[8]:


len(unique_col)


# In[10]:


unique_col['Full Uniqueness description']


# In[12]:


unique_routine = []
common_total = 0
for index in range(len(unique_col)):
    if unique_col['Full Uniqueness description'][index] not in unique_routine:
        unique_routine.append(unique_col['Full Uniqueness description'][index])
        if unique_col['Intersection: 0 = common; 1 = unique '][index] == 1:
            common_total+=1

# unique_routine


# In[17]:


common_total


# In[26]:


all_triggers = user_data['Uniqueness Trigger'].dropna().values
all_triggers


# In[27]:



unique_triggers =[]
for triggers in all_triggers:
    if triggers not in unique_triggers:
        unique_triggers.append(triggers)

len(unique_triggers)

