/** chunk id: 133580 params = (module,exports,require) **/
n.d(t, {
    GE: () => d,
    a: () => o,
    ff: () => u
});
var a = n(530493),
    l = n(985018),
    i = n(833450),
    r = n(5678),
    s = n(623915),
    c = n(616276);

function o(e) {
    switch (e) {
        case a.h.MIGHTY:
            return l.intl.string(l.t.aZej2g);
        case a.h.STRONG:
            return l.intl.string(l.t.MLxnSg);
        case a.h.FAIR:
            return l.intl.string(l.t["3f19KA"]);
        case a.h.WEAK:
            return l.intl.string(l.t.jtVgSh)
    }
}

function d(e) {
    switch (e) {
        case a.h.MIGHTY:
            return r.A;
        case a.h.STRONG:
            return s.A;
        case a.h.FAIR:
            return i.A;
        case a.h.WEAK:
            return c.A
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