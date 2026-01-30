/** Chunk was on 1113 **/
/** chunk id: 667285, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(49229),
    a = n(258367),
    o = n(343328),
    c = n(994500),
    u = n(954571),
    d = n(975571),
    h = n(786051),
    p = n(652215),
    g = n(559868),
    f = n(985018);

function m(e) {
    var t, m;
    let {
        channel: b,
        children: A
    } = e, y = (0, l.bG)([c.A], () => c.A.isBlocked(b.getRecipientId()));
    (0, a.A)(b.id);
    let O = (0, o.A)(b.id),
        _ = b.isSystemDM(),
        j = y && !_ && !b.isMultiUserDM(),
        x = {};
    if (_) {
        let e = O ? f.intl.string(f.t["+KSnWX"]) : f.intl.string(f.t.hvVgAZ);
        x.message = f.intl.string(f.t.Bt2N7D), x.subtitle = f.intl.string(f.t["n/Vzkw"]), x.buttonText = e, x.buttonIcon = O ? i.tfB : void 0, x.onButtonClick = () => {
            if (O) {
                open(g.Do), u.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
                    cta_type: "chat_blocker",
                    target: g.Do
                });
                return
            }
            open(d.A.getArticleURL(p.MVz.SYSTEM_DMS))
        }, x.imageSrc = n(388668)
    } else j && (x.message = f.intl.string(f.t["9T6N5/"]), x.buttonText = f.intl.string(f.t.XyHpKH), x.onButtonClick = () => {
        s.A.unblockUser(b.getRecipientId())
    });
    return (0, r.jsx)(h.A, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    }({}, x), m = m = {
        children: A
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(m)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(m, e))
    }), t))
}