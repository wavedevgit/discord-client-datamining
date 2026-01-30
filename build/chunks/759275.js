/** chunk id: 759275, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(322811),
    i = n(355418),
    a = n(658809);
let o = /(?:questo|questa)?\s{0,3}(mattina|pomeriggio|sera|notte|mezzanotte|mezzogiorno)(?=\W|$)/i;
class s extends i.c {
    innerPattern() {
        return o
    }
    innerExtract(e, t) {
        let n = e.refDate,
            i = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "pomeriggio":
                i.imply("meridiem", r.FF.PM), i.imply("hour", 15);
                break;
            case "sera":
            case "notte":
                i.imply("meridiem", r.FF.PM), i.imply("hour", 20);
                break;
            case "mezzanotte":
                let o = new Date(n.getTime());
                o.setDate(o.getDate() + 1), (0, a.Pl)(i, o), (0, a.A4)(i, o), i.imply("hour", 0), i.imply("minute", 0), i.imply("second", 0);
                break;
            case "mattina":
                i.imply("meridiem", r.FF.AM), i.imply("hour", 6);
                break;
            case "mezzogiorno":
                i.imply("meridiem", r.FF.AM), i.imply("hour", 12)
        }
        return i
    }
}