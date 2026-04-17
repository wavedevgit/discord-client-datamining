/** chunk id: 877923 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968),
    r = n(64700),
    l = n(417597),
    s = n(451988),
    a = n(397927),
    o = n(775602),
    c = n(21161),
    u = n(67414),
    d = n(147036),
    _ = n(888675),
    A = n(652215),
    E = n(905792);

function m(e) {
    let {
        giftIntentType: t,
        recipientUser: n,
        channel: m
    } = e, I = (0, l.bG)([o.A], () => o.A.useReducedMotion), T = r.useRef(null), {
        createMultipleConfettiAt: g
    } = r.useContext(c.x), N = r.useCallback(e => ({
        size: {
            type: "static-random",
            minValue: e.confettiSize - 6,
            maxValue: e.confettiSize + 6
        },
        velocity: {
            type: "static-random",
            minValue: {
                x: -180,
                y: -180
            },
            maxValue: {
                x: 180,
                y: 0
            }
        }
    }), []);
    return r.useEffect(() => {
        if (I) return;
        let e = T.current;
        if (null == e) return;
        let t = null,
            n = new IntersectionObserver(i => {
                let [r] = i;
                r.intersectionRatio < .5 || (n.disconnect(), (t = new s.J_(1e3, () => {
                    let t = e.getBoundingClientRect(),
                        n = N({
                            confettiSize: 8
                        });
                    g(t.left + t.width / 2, t.top + t.height / 2, n, 60)
                })).delay())
            }, {
                threshold: .5
            });
        return n.observe(e), () => {
            n.disconnect(), t?.cancel()
        }
    }, [g, T, I, N]), (0, i.jsx)(_.A, {
        contentClassName: E.o9,
        iconContainerClassName: E.zc,
        iconNode: (0, i.jsx)(a.XFE, {
            colorClass: E.Kk
        }),
        children: (0, i.jsx)(u.A, {
            innerRef: T,
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, d.DJ)(m),
            analyticsSection: A.JJy.CHANNEL
        })
    })
}