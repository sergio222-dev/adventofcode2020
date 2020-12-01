export function FindOneToSum(iExcpectedResult, iDeep, arList) {

    const stList = [...arList];
    let setCoincidences = new Set();

    arList.forEach((value) => {
        const iRest = iExcpectedResult - parseInt(value);

        stList.shift();

        if (iDeep === 0) {
            let tmpArCoincidence = stList.filter(s => s === iRest.toString());

            if (tmpArCoincidence.length > 0) {
                setCoincidences.add(...tmpArCoincidence);
                setCoincidences.add(...setCoincidences);
                setCoincidences.add(value);

                // arCoincidence = [...arCoincidence, ...tmpArCoincidence, value];
            }
        } else {
            let tmpArCoincidence = FindOneToSum(iRest, iDeep - 1, arList);

            if (tmpArCoincidence.size > 0 ) {
                setCoincidences.add(...tmpArCoincidence);
                setCoincidences.add(...setCoincidences);
                setCoincidences.add(value);
            }
        }
    })

    return setCoincidences;
}