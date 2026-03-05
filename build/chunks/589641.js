/** chunk id: 589641, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h,
    I: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(308528),
    r = n(171316),
    o = n(834981),
    d = n(558001),
    c = n(866945),
    u = n(933297),
    _ = n(12901),
    g = n(835002),
    m = n(985018),
    A = n(842130);

function h() {
    let e = (0, o.vx)();
    return (0, i.jsx)(c.e, {
        label: A.default.i284fU,
        labelHook: () => {
            (0, _.default)(), a.A.openPrivateChannel({
                recipientIds: e
            })
        },
        noticeType: g.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
        count: e.length
    })
}

function p() {
    let e = (0, r.uM)(),
        t = (0, o.vx)(),
        n = s.useCallback(() => {
            (0, _.default)(), a.A.openPrivateChannel({
                recipientIds: t
            }), (0, d.N)(g.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, g.YX.LEARN_MORE)
        }, [t]),
        c = s.useCallback(() => {
            (0, d.N)(g.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, g.YX.VIEWED)
        }, []);
    return s.useMemo(() => {
        if (e) return {
            type: u.lT.INLINE_NOTICE,
            noticeType: "info",
            trackView: c,
            useText: () => m.intl.format(A.default.i284fU, {
                hook: (e, t) => (0, i.jsx)(l.MzZ, {
                    onClick: n,
                    children: e
                }, t),
                count: t.length
            })
        }
    }, [n, e, t.length, c])
}