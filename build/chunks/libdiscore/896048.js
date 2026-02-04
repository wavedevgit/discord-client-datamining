/** chunk id: 896048, original params: t,e,r (module,exports,require) **/
var n = r(860511),
    o = r(487127),
    i = r(712573),
    a = r(39139),
    u = r(706938),
    c = r(174168),
    s = r(380744)("iterator"),
    f = a.values,
    _ = function(t, e) {
        if (t) {
            if (t[s] !== f) try {
                u(t, s, f)
            } catch (e) {
                t[s] = f
            }
            if (c(t, e, !0), o[e]) {
                for (var r in a)
                    if (t[r] !== a[r]) try {
                        u(t, r, a[r])
                    } catch (e) {
                        t[r] = a[r]
                    }
            }
        }
    };
for (var l in o) _(n[l] && n[l].prototype, l);
_(i, "DOMTokenList")