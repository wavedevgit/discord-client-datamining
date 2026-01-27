/** Chunk was on 82220 **/
/** chunk id: 231150, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => i
}), t(321073), t(896048);
var r = t(95701);

function i(e) {
    let n = [];
    for (let t = 0; t < e._categories.length; t++) {
        let i = e._categories[t].channel,
            l = e[i.id].map(e => e.channel).filter(e => r.kr.has(e.type));
        if (null != l && 0 !== l.length)
            for (let e of ("null" !== i.id && n.push(i), l)) n.push(e)
    }
    return n
}