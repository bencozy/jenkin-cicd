
pipeline {
    agent any
    stages{
        stage("build"){
            steps{
                echo 'Hello Jenkins hi'
                sh "docker build -t bendevetJenkins:v1 -f Dockerfile ./"
            }
        }
    }  
}
