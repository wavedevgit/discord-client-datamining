/** chunk id: 133580 params = (module,exports,require) **/
n.d(t, {
    GE: () => d,
    a: () => c,
    ff: () => u
});
var a = n(530493),
    i = n(985018),
    l = n(833450),
    r = n(5678),
    s = n(623915),
    o = n(616276);

function c(e) {
    switch (e) {
        case a.h.MIGHTY:
            return i.intl.string(i.t.aZej2g);
        case a.h.STRONG:
            return i.intl.string(i.t.MLxnSg);
        case a.h.FAIR:
            return i.intl.string(i.t["3f19KA"]);
        case a.h.WEAK:
            return i.intl.string(i.t.jtVgSh)
    }
}

function d(e) {
    switch (e) {
        case a.h.MIGHTY:
            return r.A;
        case a.h.STRONG:
            return s.A;
        case a.h.FAIR:
            return l.A;
        case a.h.WEAK:
            return o.A
    }
}

function u(e) {
    let t = "";
    switch (e) {
        case a.h.MIGHTY:
            t = "#fc430a";
            break;
        case a.h.STRONG:
            t = "#9e00b4";
            break;
        case a.h.FAIR:
            t = "#4aa1ce";
            break;
        case a.h.WEAK:
            t = "#80b06a"
    }
    return {
        foregroundColor: t,
        backgroundColor: "#2e2e2e"
    }
}