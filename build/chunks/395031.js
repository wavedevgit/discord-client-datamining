/** Chunk was on 94857 **/
/** chunk id: 395031, original params: e,s,t (module,exports,require) **/
t.d(s, {
    Ys: () => r
}), t(747238);
var n = t(64700),
    l = t(311907),
    a = t(508675);
let i = /^<(a?):(\w+):(\d+)>/;

function r(e) {
    let s = n.useMemo(() => {
        var s;
        return null == (s = i.exec(e)) ? void 0 : s[3]
    }, [e]);
    return (0, l.bG)([a.Ay], () => null == s ? null : a.Ay.getCustomEmojiById(s))
}