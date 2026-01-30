/** chunk id: 921661, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    a = n(688810),
    o = n(557158),
    s = n(573435),
    l = n(954571),
    c = n(486020),
    u = n(652215),
    d = n(307731),
    f = n(788868),
    p = n(985018),
    _ = n(692433);
let h = 3,
    m = e => {
        let {
            emojis: t
        } = e, {
            analyticsLocations: n
        } = (0, a.Ay)();
        i.useEffect(() => {
            l.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, {
                type: f.e.EMOJI_AUTOCOMPLETE_INLINE,
                location_stack: n
            })
        }, [n]);
        let m = (0, r.jsx)("div", {
            className: _.gm,
            children: t.slice(0, h).map((e, t) => {
                if (null == e.id) return null;
                let n = 2 === t,
                    i = (0, r.jsx)("div", {
                        className: _.rT,
                        children: (0, r.jsx)("img", {
                            alt: e.name,
                            className: _.Zg,
                            src: c.Ay.getEmojiURL({
                                id: e.id,
                                animated: e.animated,
                                size: d.L4
                            })
                        })
                    }, e.id);
                return n ? i : (0, r.jsx)(s.Ay, {
                    className: _.j3,
                    mask: s.Ay.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                    children: i
                }, e.id)
            })
        });
        return (0, r.jsxs)(o.Mr, {
            className: _.UX,
            children: [(0, r.jsx)(o.oC, {
                children: (0, r.jsx)(o.dB, {
                    children: p.intl.format(p.t.uEky42, {
                        count: t.length
                    })
                })
            }), (0, r.jsx)(o.Aq, {
                children: m
            })]
        })
    }