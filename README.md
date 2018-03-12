# Machine Learning Demos
LIVE: [demo.jacobpolloreno.com](https://demo.jacobpolloreno.com)

##### Current Deployed Models
* [Cifar 10](https://demo.jacobpolloreno.com/cifar)

## Description
This is the **front-end** code for my personal machine learning models.

It uses [Preact](https://github.com/developit/preact)  for the front-end and javascript to communicate with a local rest api. Afterwards, the REST server sends a request to a custom model hosted on Google's Cloud ML.

* Code for the local rest api can be found [here](https://github.com/JacobPolloreno/Tensorflow_Serving_Hug_Api). It uses a python web server and Google's api client.
* Code for the custom model(s) can be found [here](https://github.com/JacobPolloreno/Tensorflow_Serving_Models). They are built with [Tensorflow](https://github.com/tensorflow/tensorflow) and saved to be used on a [Tensorflow Serving](https://github.com/tensorflow/serving) host(i.e. Google Cloud ML Engine)

## Examples

![single] (./imgs/single_pred.png "Single Cifar Prediction")
