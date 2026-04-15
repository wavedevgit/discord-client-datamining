/** chunk id: 984742 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(938796);
var i = n(627968),
    l = n(64700),
    r = n(241524),
    a = n(775602),
    s = n(21161),
    o = n(163437),
    d = n(490744),
    c = n(594508),
    u = n(156312),
    m = n(166532),
    p = n(19311),
    f = n(534479),
    x = n(482132),
    g = n(987616),
    h = n(921925),
    S = n(376747),
    b = n(985018);

function A(e) {
    let t, n, {
            showBenefits: A,
            handleClose: j,
            onSubscriptionConfirmation: v
        } = e,
        {
            updatedSubscription: _,
            readySlideId: C,
            selectedStoreListing: N,
            application: y
        } = (0, u.P5)(),
        E = (0, g.S3)(),
        T = (0, r.A)(S.Y),
        {
            createMultipleConfettiAt: I
        } = l.useContext(s.x),
        P = E?.name ?? "",
        k = () => {
            j(), v?.()
        },
        w = C === m.pn.CONFIRM,
        R = (0, o.bg)(E?.flags ?? 0),
        D = null != N && N.benefits.length > 0 ? b.intl.formatToPlainString(b.t["+IQQVM"], {
            benefitCount: N.benefits.length
        }) : null;
    return A ? T ? t = (0, i.jsx)(c.E, {
        title: b.intl.format(b.t.ea6tZr, {
            tierName: P
        }),
        subtitle: null != N && N.benefits.length > 0 ? b.intl.formatToPlainString(b.t.HNepft, {
            benefits: D
        }) : null,
        onConfirm: k,
        confirmCta: b.intl.string(b.t.nlkywz)
    }) : (t = null != N && null != y ? (0, i.jsx)(d.Uf, {
        icon: N.thumbnail,
        storeListingBenefits: N.benefits,
        application: y,
        title: b.intl.format(b.t["Q+qktS"], {
            tier: P
        }),
        subtitle: b.intl.string(b.t.ECKxXU),
        description: R ? b.intl.format(b.t["MAtQk/"], {
            applicationName: y?.name
        }) : b.intl.format(b.t.vHkMF4, {
            tier: P
        })
    }) : (0, i.jsx)(f.A, {}), n = (0, i.jsx)(p.Ay, {
        onPrimary: k,
        primaryCTA: p.ti.CONTINUE,
        primaryText: b.intl.string(b.t["JtWl+a"])
    })) : t = T ? (0, i.jsx)(c.v, {
        tierName: P,
        onConfirm: k,
        subscription: _
    }) : (0, i.jsx)(d.XG, {
        tierName: P,
        onConfirm: k,
        subscription: _
    }), l.useEffect(() => {
        a.A.useReducedMotion && w && I(window.innerWidth / 2, window.innerHeight / 2)
    }, [I, w]), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(x.dZ, {
            children: [(0, i.jsx)(h.A, {}), t]
        }), null != n && (0, i.jsx)(x.UX, {
            children: n
        })]
    })
}