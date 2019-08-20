INPUT_FILE = 'ilm-5'
OUTPUT_FILE = 'prob_' + INPUT_FILE
with open (OUTPUT_FILE,'w') as toFile:
    with open(INPUT_FILE,'r') as fromFile:
        for line in fromFile:
            if(line.startswith('-')):
                elements = line.split('\t')
                if(len(elements) == 3):
                    # print(len(elements))
                    # print(elements)
                    # pass
                    # print(elements[0], elements[-1])
                    towrite = str(10**float(elements[0])) +'\t' +  elements[1] + '\t' + str(10**float(elements[-1].replace('\n','')))
                    # toFile.write(line)
                else:
                    # print(elements[0])
                    towrite = str(10**float(elements[0])) +'\t' +  elements[1].replace('\n','')
                    # toFile.write(line)
            else:
                # print(line)
                towrite= line.replace('\n','')
                
            toFile.write(towrite + '\n')