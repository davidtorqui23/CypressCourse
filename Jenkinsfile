pipeline{
    agent any 

    tools {nodejs "NodeJS"}

    stages {
        
        stage("Cypress Parallel Test Suite") {

            parallel{

                stage('Slave 1'){

                    agent {
                        label "AgenteAuto_1"
                    }

                    steps{
                        git url: 'https://github.com/davidtorqui23/CypressCourse.git'
                        bat 'npm install cypress'
                        bat 'npx cypress run --record --key 99482c4f-0b0d-4694-92cf-3ab0d1823803 --parallel'
                    }
                }

                stage('Slave 2'){

                    agent {
                        label "AgenteAuto_2"
                    }

                    steps{
                        git url: 'https://github.com/davidtorqui23/CypressCourse.git'
                        bat 'npm install cypress'
                        bat 'npx cypress run --record --key 99482c4f-0b0d-4694-92cf-3ab0d1823803 --parallel'
                    }
                }

                stage('Slave 3'){

                    agent {
                        label "AgenteAuto_3"
                    }

                    steps{
                        git url: 'https://github.com/davidtorqui23/CypressCourse.git'
                        bat 'npm install cypress'
                        bat 'npx cypress run --record --key 99482c4f-0b0d-4694-92cf-3ab0d1823803 --parallel'
                    }
                }

            }

        }
    }
}