/** Chunk was on 82220 **/
/** chunk id: 231150, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => a
}), t(321073), t(896048);
var i = t(95701);

function a(e) {
    let n = [];
    for (let t = 0; t < e._categories.length; t++) {
        let a = e._categories[t].channel,
            l = e[a.id].map(e => e.channel).filter(e => i.kr.has(e.type));
        if (null != l && 0 !== l.length)
            for (let e of ("null" !== a.id && n.push(a), l)) n.push(e)
    }
    return n
}