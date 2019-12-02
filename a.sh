docker container rm nodecon --force

docker image rm nodeimg

docker image build -t nodeimg .

docker container run --name nodecon -itd -p 6666:6666 nodeimg