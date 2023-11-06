# -*- coding: utf-8 -*-
"""
Created on Thu Nov  2 18:33:11 2023

@author: kelii
"""
import random
from colorama import Fore
cards = ['skeletons', 'ice spirit', 'firespirit','electro spirit','goblins','bomber','speargoblins','zap','bats','snowball','knight','archers','minions','goblin gang','skeleton barrel','firecracker','cannon','arrows','royal delivery','skeleton dragons','mortar','tesla','barbarians','minion horde','rascals','royal giant','elite barbarians','royal recruits','heal spirit','ice golem','tombstone','mega minion','dart goblin','elixir golem','earthquake','valkyrie','musketeer','mini pekka','hog rider','battle ram','zappies','flying machine','battle healer','bomb tower','furnace','goblin cage','giant','fireball','wizard','royal hogs','goblin hut','inferno tower','barbarian hut','elixir collector','rocket','three musketeers','mirror','wall breakers','rage','barbarian barrel','skeleton army','guards','goblin barrel','tornado','clone','baby dragon','dark prince','hunter','goblin drill','freeze','poison','balloon','executioner','cannon cart','electro dragon','prince','witch','bowler','goblin giant','giant skeleton','x-bow','lightning','pekka','electro gaint','golem','log','ice wizard','princess','miner','bandit','royal ghost','fisherman','lumberjack','inferno dragon','electro wizard','magic archer','night witch','mother witch','phoenix','ram rider','graveyard','sparky','lava hound','mega knight']
availablecards = ['skeletons', 'ice spirit', 'firespirit','electro spirit','goblins','bomber','speargoblins','zap','bats','snowball','knight','archers','minions','goblin gang','skeleton barrel','firecracker','cannon','arrows','royal delivery','skeleton dragons','mortar','tesla','barbarians','minion horde','rascals','royal giant','elite barbarians','royal recruits','heal spirit','ice golem','tombstone','mega minion','dart goblin','elixir golem','earthquake','valkyrie','musketeer','mini pekka','hog rider','battle ram','zappies','flying machine','battle healer','bomb tower','furnace','goblin cage','giant','fireball','wizard','royal hogs','goblin hut','inferno tower','barbarian hut','elixir collector','rocket','three musketeers','mirror','wall breakers','rage','barbarian barrel','skeleton army','guards','goblin barrel','tornado','clone','baby dragon','dark prince','hunter','goblin drill','freeze','poison','balloon','executioner','cannon cart','electro dragon','prince','witch','bowler','goblin giant','giant skeleton','x-bow','lightning','pekka','electro giant','golem','log','ice wizard','princess','miner','bandit','royal ghost','fisherman','lumberjack','inferno dragon','electro wizard','magic archer','night witch','mother witch','phoenix','ram rider','graveyard','sparky','lava hound','mega knight']


win_conditions = ['lava hound','graveyard','battle ram','elite barbarians','balloon','pekka','lumberjack',"hog rider", 'giant','ram rider','royal giant','goblin giant','skeleton barrel','miner','wall breakers','goblin barrel','electro giant','golem','elixir golem','royal hogs','goblin drill','mega knight','x-bow','mortar']
groundsupport = ['knight','battle healer','dark prince','prince','giant skeleton','bandit','royal ghost','fisherman','valkyrie','bowler','mini pekka','lumberjack','cannon cart','royal recruits','night witch','mega knight','zappies']
airsupport = ['archers','minions','mega minion','rascals','dart goblin','musketeer','zappies','three musketeers','mirror','clone','electro wizard','magic archer','mother witch','phoenix','firecracker','skeleton dragons','bats','minion horde','baby dragon','wizard','princess','ice wizard','witch']
splash = ['bomber','firecracker','skeleton dragons','valkyrie','wizard','baby dragon','executioner','electro dragon','bowler','ice wizard','princess']
antitank = ['mini pekka','flying machine','hunter','cannon cart','inferno dragon','sparky','fisherman','lumberjack','barbarians']
bigspells = ['fireball','freeze','poison','rocket','lightning','graveyard']
smallspells = ['zap','log','snowball','rage','arrows','earthquake','royal delivery','tornado','barbarian barrel']
buildings = ['cannon','mortar','x-bow','tesla','tombstone','bomb tower','furnace','goblin cage','goblin hut','inferno tower','barbarian hut','elixir collector']
swarm = ['skeletons','goblins','speargoblins','goblin gang','bats','skeleton army','guards','minions','mirror']
cycle = ['ice spirit','skeletons','firespirit','electro spirit','spear goblins','bats','heal spirit','ice golem','rage','barbarian barrel','log','zap','snowball']

allgroups = [win_conditions,groundsupport,airsupport,splash,antitank,smallspells,bigspells,buildings,swarm,cycle]

buildingcount = 3
cyclecount = 3
swarmcount = 3
smallspellscount = 3
bigspellcount = 2
antitankcount = 2
splashcount = 2
airsupportcount = 4
groundsupportcount = 4
winconditioncount = 3

allgroupcounts = [winconditioncount,groundsupportcount,airsupportcount,splashcount,antitankcount,smallspellscount,bigspellcount,buildingcount,swarmcount,cyclecount]


def getvalidcard(group):
    #print(group)
    pcard = group[random.randint(0,len(group)-1)]
    #print(pcard)
    if pcard in availablecards:
        availablecards.remove(pcard)
        group.remove(pcard)
        return pcard
    else:
        return getvalidcard(group)
    
def getvalidgroup():
    pgroupindex = random.randint(0,len(allgroups)-1)
    pgroupcount = allgroupcounts[pgroupindex]
    testcount = 0
    testcount += pgroupcount
    pgroup = allgroups[pgroupindex]
    #print("pgroupcount ="+str(pgroupcount))
    #print("testcount = "+str(testcount))
    #print(allgroups[pgroupindex])
    #print('initial group count: '+str(pgroupcount))
    while testcount < 1:
        testcount = 0
        pgroupindex = random.randint(0,len(allgroups)-1)
        pgroup = allgroups[pgroupindex]
        pgroupcount = allgroupcounts[pgroupindex]
        testcount += pgroupcount
    allgroupcounts[pgroupindex] -= 1
    return pgroup
        
    

p1deck = []
p2deck = []
p3deck = []
p4deck = []

def draft2v2():
    playernumber = int(input("How many players are there? "))
    
    for nums in range(0,4):
        group1 = getvalidgroup()
        card1 = getvalidcard(group1)
        card2 = getvalidcard(group1)
        
        print("Player 1, pick one by typing 'A' or 'B'")
        print("A: "+card1)
        print("B: "+card2)
        choice = input()
        if choice == "A" or choice == "a":
            p1deck.append(card1)
            p2deck.append(card2)
        if choice == "B" or choice == "b":
            p1deck.append(card2)
            p2deck.append(card1)
    
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    print()
    
    
    for nums in range(0,4):
        group2 = getvalidgroup()
        card1 = getvalidcard(group2)
        card2 = getvalidcard(group2)
        
        print("Player 2, pick one by typing 'A' or 'B'")
        print("A: "+card1)
        print("B: "+card2)
        choice = input()
        if choice == "A" or choice == "a":
            p2deck.append(card1)
            p1deck.append(card2)
        if choice == "B" or choice == "b":
            p2deck.append(card2)
            p1deck.append(card1)
            
    
    if playernumber > 2:       
        print()
        print()
        print()
        print()
        print()
        print()    
        print()
        print()
        print()
        print()
        print()
        print()
        for nums in range(0,4):
            group3 = getvalidgroup()
            card1 = getvalidcard(group3)
            card2 = getvalidcard(group3)
            
            print("Player 3, pick one by typing 'A' or 'B'")
            print("A: "+card1)
            print("B: "+card2)
            choice = input()
            if choice == "A" or choice == "a":
                p3deck.append(card1)
                p4deck.append(card2)
            if choice == "B" or choice == "b":
                p3deck.append(card2)
                p4deck.append(card1)
            
        print()
        print()
        print()
        print()
        print()
        print()    
        print()
        print()
        print()
        print()
        print()
        print()
            
        for nums in range(0,4):
            group4 = getvalidgroup()
            card1 = getvalidcard(group4)
            card2 = getvalidcard(group4)
            
            print("Player 4, pick one by typing 'A' or 'B'")
            print("A: "+card1)
            print("B: "+card2)
            choice = input()
            if choice == "A" or choice == "a":
                p4deck.append(card1)
                p3deck.append(card2)
            if choice == "B" or choice == "b":
                p4deck.append(card2)
                p3deck.append(card1)
    
    
    
    print("Player 1 Deck: ")
    print(*p1deck, sep=', ')
    print("Player 2 Deck: ")
    print(*p2deck, sep=', ')
    if playernumber > 2:
        print("Player 3 deck: ")
        print(*p3deck, sep=', ')
        print("Player 4 Deck: ")
        print(*p4deck, sep=', ')
    
def mega2v2():
    choices = []
    for nums in range(0,6):
        card = win_conditions[random.randint(0,len(win_conditions)-1)]
        while card not in availablecards:
            card = win_conditions[random.randint(0,len(win_conditions)-1)]
        availablecards.remove(card)
        choices.append(card)
        win_conditions.remove(card)
    for nums in range(0,5):
        card = smallspells[random.randint(0,len(smallspells)-1)]
        while card not in availablecards:
            card = smallspells[random.randint(0,len(win_conditions)-1)]
        availablecards.remove(card)
        choices.append(card)
        smallspells.remove(card)
    for nums in range(0,2):
        card = bigspells[random.randint(0,len(bigspells)-1)]
        while card not in availablecards:
            card = bigspells[random.randint(0,len(bigspells)-1)]
        availablecards.remove(card)
        choices.append(card)
        bigspells.remove(card)
    for nums in range(0,3):
        card = buildings[random.randint(0,len(buildings)-1)]
        while card not in availablecards:
            card = buildings[random.randint(0,len(buildings)-1)]
        availablecards.remove(card)
        choices.append(card)
        buildings.remove(card)
    for nums in range(0,2):
        card = cycle[random.randint(0,len(cycle)-1)]
        while card not in availablecards:
            card = cycle[random.randint(0,len(cycle)-1)]
        availablecards.remove(card)
        choices.append(card)
        cycle.remove(card)
    for nums in range(0,18):
        card = availablecards[random.randint(0,len(availablecards)-1)]
        choices.append(card)
        availablecards.remove(card)
    random.shuffle(choices)
    
    for nums in range(0,4):
        cardcount = 0
        for rows in range(0,6):
            print(choices[cardcount:cardcount+6], sep=',')
            cardcount+=6    
        print("P1 Deck: ")
        print(p1deck)
        print("P2 Deck: ")
        print(p2deck)
        print("P3 Deck: ")
        print(p3deck)
        print("P4 Deck: ")
        print(p4deck)
        print("Player 1 what card do you choose?")
        choice1 = input()
        while choice1 not in choices:
            print("That is not an option, try again.")
            choice1 = input()
        choices.remove(choice1)
        p1deck.append(choice1)
        print("Player 2 what card do you choose?")
        choice2 = input()
        while choice2 not in choices:
            print("That is not an option, try again.")
            choice2 = input()
        choices.remove(choice2)
        p2deck.append(choice2)
        print("Player 3 what card do you choose?")
        choice3 = input()
        while choice3 not in choices:
            print("That is not an option, try again.")
            choice3 = input()
        choices.remove(choice3)
        p3deck.append(choice3)
        print("Player 4 what card do you choose?")
        choice4 = input()
        while choice4 not in choices:
            print("That is not an option, try again.")
            choice4 = input()
        choices.remove(choice4)
        p4deck.append(choice4)
        print()
        
        print("P1 Deck: ")
        print(p1deck)
        print("P2 Deck: ")
        print(p2deck)
        print("P3 Deck: ")
        print(p3deck)
        print("P4 Deck: ")
        print(p4deck)
        print("Player 4 what card do you choose?")
        choice4 = input()
        while choice4 not in choices:
            print("That is not an option, try again.")
            choice4 = input()
        choices.remove(choice4)
        p4deck.append(choice4)
        print("Player 3 what card do you choose?")
        choice3 = input()
        while choice3 not in choices:
            print("That is not an option, try again.")
            choice3 = input()
        choices.remove(choice3)
        p3deck.append(choice3)
        print("Player 2 what card do you choose?")
        choice2 = input()
        while choice2 not in choices:
            print("That is not an option, try again.")
            choice2 = input()
        choices.remove(choice2)
        p2deck.append(choice2)
        print("Player 1 what card do you choose?")
        choice1 = input()
        while choice1 not in choices:
            print("That is not an option, try again.")
            choice1 = input()
        choices.remove(choice1)
        p1deck.append(choice1)
        #deez