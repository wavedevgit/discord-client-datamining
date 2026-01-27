/** Chunk was on web.js **/
/** chunk id: 532740, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(322811),
    i = n(355418),
    a = n(658809),
    o = n(996483);
class s extends i.c {
    innerPattern(e) {
        return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i
    }
    innerExtract(e, t) {
        let n = e.refDate,
            i = t[0].toLowerCase(),
            s = e.createParsingComponents();
        switch (i) {
            case "maintenant":
                return o.tB(e.reference);
            case "aujourd'hui":
                return o.Ec(e.reference);
            case "hier":
                return o.jI(e.reference);
            case "demain":
                return o.uf(e.reference);
            default:
                if (i.match(/cette\s*nuit/))(0, a.Pl)(s, n), s.imply("hour", 22), s.imply("meridiem", r.FF.PM);
                else if (i.match(/la\s*veille/)) {
                    let e = new Date(n.getTime());
                    e.setDate(e.getDate() - 1), (0, a.Pl)(s, e), s.imply("hour", 0)
                }
        }
        return s
    }
}