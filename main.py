def convert_list_dimension(sample_list):
    for element in sample_list:
        if type(element) == list:
            convert_list_dimension(element)
        else:
            one_d_list.append(element)
            
one_d_list = []

sample_list = [34,21,[0,
            [1,2,3],
            [4,5,6,7,8,[1,2,3,4]],
            [9,10,11,[100,101,[12,45,9],95],12,13],
            14,
            [15,16],17
            ],76] # Sample multi dimensional list

convert_list_dimension(sample_list)

print(one_d_list)
