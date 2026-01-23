/** Chunk was on 48587 **/
/** chunk id: 550880, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => i
}), n(747238), n(812715), n(866193);
var r = n(833291),
    l = n(998218),
    s = n(985018);
let a = [r.ts];

function i(e, t, n) {
    let r = !1,
        i = e.replaceAll(l.A.URL_REGEX, e => {
            let t = a.some(t => null != t(e));
            return t && (r = !0), t ? e : "`".concat(e, "`")
        });
    if (r) return i;
    let u = s.intl.formatToMarkdownString(s.t.dZJpdG, {
        applicationName: t.name,
        link: n
    });
    return "".concat(i, "\n\n").concat(u)
}