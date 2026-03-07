/** chunk id: 877923 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    a = n(417597),
    r = n(451988),
    s = n(397927),
    o = n(775602),
    c = n(21161),
    d = n(67414),
    u = n(147036),
    m = n(888675),
    _ = n(652215),
    A = n(944909);

function E(e) {
    let {
        giftIntentType: t,
        recipientUser: n,
        channel: E
    } = e, f = (0, a.bG)([o.A], () => o.A.useReducedMotion), h = l.useRef(null), {
        createMultipleConfettiAt: g
    } = l.useContext(c.x), p = l.useCallback(e => ({
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
    return l.useEffect(() => {
        if (f) return;
        let e = h.current;
        if (null == e) return;
        let t = null,
            n = new IntersectionObserver(i => {
                let [l] = i;
                l.intersectionRatio < .5 || (n.disconnect(), (t = new r.J_(1e3, () => {
                    let t = e.getBoundingClientRect(),
                        n = p({
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
    }, [g, h, f, p]), (0, i.jsx)(m.A, {
        contentClassName: A.o9,
        iconContainerClassName: A.zc,
        iconNode: (0, i.jsx)(s.XFE, {
            colorClass: A.Kk
        }),
        children: (0, i.jsx)(d.A, {
            innerRef: h,
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, u.DJ)(E),
            analyticsSection: _.JJy.CHANNEL
        })
    })
}