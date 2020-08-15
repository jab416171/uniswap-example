#!/bin/bash
network=$1
if [ -z $1 ]; then
	network="ropsten"
fi
echo "deploying to $network..."
npx buidler --network $network deploy && npx buidler etherscan-verify --network $network
# following lines are temporary until github issue is resolved:
# https://github.com/wighawag/buidler-deploy/issues/29
sleep 30
npx buidler etherscan-verify --network $network --license GPL-3.0 --force-license
