const dict = '̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡็่้๊๋์ํ๎҃҄҅҆҇҈҉ًٌٍؘَؙُؚِّْٰ֑֖֛֢֣֤֥֦֧֪ٕٖٜٟۣ֚֭֮֒֓֔֕֗֘֙֜֝֞֟֠֡֨֩֫֬֯ؐؑؒؓؔؕؖؗٓٔٗ٘ٙٚٛٝٞۖۗۘۙۚۛۜ۟۠ۡۢۤۦ۪ۭܱܴܷܸܹܻܼܾ݂݄݆݈ۧۨ۫۬ܰܲܳܵܶܺܽܿ݀݁݃݅݇݉݊ަާިީުޫެޭޮޯްິີຶືຸູົ'

const w = () => {
    return Math.random() < 0.5 ? '喵。 ' : '喵呜。 '
}

export const encode = (raw: Uint8Array): string => {
    let encoded = '', j = 0, flag = true
    for (const c of raw) {
        encoded += dict[c]
        if (Math.random() * (10 - j) < 1) {
            encoded += w()
            flag = false
        } else ++j
    }
    if (encoded.length && flag) encoded += w()
    return encoded.trim()
}

export const string_encode = (raw: string) => encode(new TextEncoder().encode(raw))

const map = Object.fromEntries(Array.from(dict).map((value, index) => [value, index]))

export const decode = (encoded: string): Uint8Array => {
    const raw: number[] = []
    for (const p of encoded) {
        const c = map[p]
        if (c !== undefined) raw.push(c)
    }
    return new Uint8Array(raw)
}

export const string_decode = (encoded: string) => new TextDecoder().decode(decode(encoded))
