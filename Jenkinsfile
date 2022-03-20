
pipeline {
    agent {
        docker {image 'docker'}
    }
    stages{
        stage("build"){
            steps{
                echo 'Hello Jenkins hi'
                sh "docker build -t bendevetJenkins:v1 -f Dockerfile ./"
            }
        }
    }  
}
