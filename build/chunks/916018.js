/** Chunk was on web.js **/
/** chunk id: 916018, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(355418),
    i = n(658809),
    a = n(996483);
let o = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class s extends r.c {
    innerPattern(e) {
        return o
    }
    innerExtract(e, t) {
        let n = e.refDate,
            r = t[0].toLowerCase(),
            o = e.createParsingComponents();
        switch (r) {
            case "now":
                o = a.tB(e.reference);
                break;
            case "today":
                o = a.Ec(e.reference);
                break;
            case "yesterday":
                o = a.jI(e.reference);
                break;
            case "tomorrow":
            case "tmr":
            case "tmrw":
                o = a.uf(e.reference);
                break;
            case "tonight":
                o = a.A_(e.reference);
                break;
            case "overmorrow":
                o = a.AV(e.reference, 2);
                break;
            default:
                if (r.match(/last\s*night/)) {
                    if (n.getHours() > 6) {
                        let e = new Date(n.getTime());
                        e.setDate(e.getDate() - 1), n = e
                    }(0, i.Pl)(o, n), o.imply("hour", 0)
                }
        }
        return o.addTag("parser/ENCasualDateParser"), o
    }
}