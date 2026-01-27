/** Chunk was on web.js **/
/** chunk id: 898985, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    _: () => d
});
var r = n(64700),
    i = n(508425),
    a = n(559949),
    o = n(430571),
    s = n(927961),
    l = n(985018);
let c = {
        [i.z.SOLID]: s.default.OpWJ3f,
        [i.z.GRADIENT]: s.default["i9e/u1"],
        [i.z.GLOW]: s.default["Ra3/93"],
        [i.z.NEON]: s.default.x68b1F,
        [i.z.TOON]: s.default.otpeeM,
        [i.z.POP]: s.default.cjQOKb
    },
    u = {
        [i.z.SOLID]: 3,
        [i.z.GRADIENT]: 2.5,
        [i.z.GLOW]: 2.5,
        [i.z.NEON]: 3,
        [i.z.TOON]: 3,
        [i.z.POP]: 3
    };

function d(e) {
    let t = (0, o.A)(e);
    return r.useMemo(() => {
        var n, r;
        return {
            name: l.intl.string(null != (n = c[e]) ? n : s.default.OpWJ3f),
            defaultColors: t,
            previewStyles: {
                fontId: a.x.DEFAULT,
                effectId: e,
                colors: t
            },
            minContrastRatio: null != (r = u[e]) ? r : 3
        }
    }, [e, t])
}