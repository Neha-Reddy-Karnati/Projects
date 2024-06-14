import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
import xgboost as xgb
import pickle


data = pd.read_csv('N:\crop\Crop_recommendation.csv')


features = data.drop(['label'], axis=1)
target = data['label']
Xtrain, Xtest, Ytrain, Ytest = train_test_split(features,target,test_size = 0.4,random_state = 2)


XB = xgb.XGBClassifier()
XB.fit(Xtrain.values,Ytrain.values)

#RF = RandomForestClassifier(n_estimators = 5)
#RF.fit(Xtrain,Ytrain)

pickle.dump(XB,open('crop.pkl','wb'))
