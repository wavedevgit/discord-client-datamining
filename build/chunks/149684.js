/** Chunk was on web.js **/
/** chunk id: 149684, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(355418),
    i = n(996483);
class a extends r.c {
    innerPattern(e) {
        return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i
    }
    innerExtract(e, t) {
        let n = t[0].toLowerCase(),
            r = e.createParsingComponents();
        switch (n) {
            case "agora":
                return i.tB(e.reference);
            case "hoje":
                return i.Ec(e.reference);
            case "amanha":
            case "amanh\xe3":
                return i.uf(e.reference);
            case "ontem":
                return i.jI(e.reference)
        }
        return r
    }
}