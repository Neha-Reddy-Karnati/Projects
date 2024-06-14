## About the Project
 <p align="justify" >Using traditional authentication methods to sign in can occasionally compel users to divulge
 sensitive personal information that is necessary as part of this digital environment. This is
 especially true when using Blockchain-based services. Since giving out sensitive information is
 not always safe with chances of data breaches being high these days, we have developed an
 authentication system with a combination of protocols such as Zero-Knowledge Proofs (ZKPs)
 and Multi-Party Computation (MPC) to surpass these issues. Through prioritizing user
 security and privacy, we want to safeguard personal information, optimize blockchain network
 accessibility, and transform authentication procedures.
 Our method guarantees safe authentication while protecting user privacy by creating distinct
 Ethereum IDs upon registration and using them as zero-knowledge proofs during login.
 Additionally, by integrating smart contracts, the authentication process is made more
 transparent and secure from illegal access and data manipulation.
 Our authentication method is based on zero-knowledge proofs, which are a powerful tool for
 verifying user credentials without disclosing private information. This solution represents a
 paradigm shift in authentication techniques by incorporating ZKPs, allowing customers a private
 and secure means to access blockchain-based apps. Multi-party computation (MPC) plays a
 crucial role in our authentication system as well by enabling secure collaboration between
 several parties throughout the authentication process. Users can maintain the confidentiality
 and integrity of their data by using MPC to collaboratively compute authentication functions over
 their private inputs without disclosing them to one another.
 MPC's incorporation into the authentication system improves security and privacy by distributing
 trust among numerous parties and eliminating single points of failure. By combining ZKPs with
 MPC, our solution provides a comprehensive approach to blockchain network authentication
 that fosters user empowerment, transparency, and trust in the digital ecosystem</p>

 ## Steps to run the project:
1. Start with installing VS code and also have Node JS installed either locally on VS code 
or globally in the system using command prompt.

2. Now let us install truffle in VS code. The commands to do so are as follows. Create  a 
new project in the system and open it in the VS code window. Now open the terminal 
and type in the following commands. \
 npm install -g truffle ( to globally install truffle) \
 truffle --version (to check the version of truffle installed) \
 truffle init (creates all the files required to develop, compile and deploy the smart 
contract)

3. Now, write the smart contract in the contracts folder and save it. Compile it using the 
following command. \
truffle compile

4. Install ganache. Now install ganache from the web and open the application. Look at 
the RPC server port number in Ganache and update the port number in truffle
config.js file in VS code. Now, write the migration related code in the migrations file 
and enter the following code to deploy it to one of the addresses in ganache. \
 truffle migrate.

5. Install MySQL server and related extensions in VS code and add a connection. The 
process involved is clearly shown in the video below. \
https://www.youtube.com/watch?v=wzdCpJY6Y4c

6. Once all the development, compilation, and migration of smart contract is done, 
create all the folders required to hold your html files and .js files. Also, create app.js 
to handle server side code of the project. Install all the required packages and writhe 
the whole front end and back end code. Use the following command to deploy the 
project using Node.js HTTP server. 
 node app.js

The project is now deployed and you get a link to the address where the project is deployed 
in the terminal. 

Clear explanation about the development, compilation, and deployment of the smart 
contract that is stated above is explained in the below video clearly. \
https://www.youtube.com/watch?v=b_k8yDC3hdM 

### Note: I did not include the node_modules folder since it gets automatically created in the project folder when you run the "npm init" command.
