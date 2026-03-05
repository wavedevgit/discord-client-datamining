/** chunk id: 71441 params = (module,exports,require) **/
i.d(e, {
    A: () => E
});
var a = i(627968),
    l = i(64700),
    n = i(735438),
    r = i.n(n),
    s = i(158954),
    o = i(397927),
    c = i(154672),
    d = i(198982),
    u = i(976860),
    _ = i(652215),
    I = i(985018);
let E = t => {
    let {
        email: e,
        guildId: i,
        transitionState: n,
        onClose: E
    } = t, [A, g] = l.useState(""), [h, m] = l.useState(null), S = l.useCallback(async () => {
        if (null != i) try {
            let t = await c.A.verifyCode(A, i, e);
            t.guild && (E(), (0, u.pX)(_.BVt.CHANNEL(t.guild.id)))
        } catch (t) {
            m(new d.LG(t))
        }
    }, [A, e, i, E]), y = r().throttle(() => {
        c.A.sendVerificationEmail(e, !0, i)
    }, 1e3), x = async t => {
        null != A && "" !== A && t.charCode === _.Ks6.ENTER && await S()
    };
    return (0, a.jsx)(s.Modal, {
        transitionState: n,
        onClose: E,
        title: I.intl.string(I.t.SJ3Lxc),
        subtitle: I.intl.format(I.t["b+W0oq"], {
            email: e,
            onClick: y
        }),
        actions: [{
            variant: "primary",
            text: I.intl.string(I.t.geKm7t),
            onClick: S
        }],
        children: (0, a.jsx)(o.ksK, {
            label: I.intl.string(I.t.rpWT1s),
            onKeyPress: x,
            onChange: t => {
                null != t && "" !== t && g(t)
            },
            error: h?.getAnyErrorMessage()
        })
    })
}