/** chunk id: 984742 params = (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(241524),
    a = n(775602),
    s = n(21161),
    o = n(163437),
    c = n(490744),
    d = n(594508),
    u = n(156312),
    m = n(166532),
    p = n(19311),
    f = n(534479),
    x = n(482132),
    g = n(921925),
    h = n(376747),
    b = n(985018);

function A(e) {
    let t, n, {
            showBenefits: A,
            handleClose: j,
            onSubscriptionConfirmation: v
        } = e,
        {
            updatedSubscription: S,
            readySlideId: C,
            selectedSku: N,
            selectedStoreListing: _,
            application: y
        } = (0, u.P5)(),
        E = (0, l.A)(h.Y),
        {
            createMultipleConfettiAt: T
        } = r.useContext(s.x),
        P = N?.name ?? "",
        I = () => {
            j(), v?.()
        },
        k = C === m.pn.CONFIRM,
        w = (0, o.bg)(N?.flags ?? 0),
        R = null != _ && _.benefits.length > 0 ? b.intl.formatToPlainString(b.t["+IQQVM"], {
            benefitCount: _.benefits.length
        }) : null;
    return A ? E ? t = (0, i.jsx)(d.E, {
        title: b.intl.format(b.t.ea6tZr, {
            tierName: P
        }),
        subtitle: null != _ && _.benefits.length > 0 ? b.intl.formatToPlainString(b.t.HNepft, {
            benefits: R
        }) : null,
        onConfirm: I,
        confirmCta: b.intl.string(b.t.nlkywz)
    }) : (t = null != _ && null != y ? (0, i.jsx)(c.Uf, {
        icon: _.thumbnail,
        storeListingBenefits: _.benefits,
        application: y,
        title: b.intl.format(b.t["Q+qktS"], {
            tier: P
        }),
        subtitle: b.intl.string(b.t.ECKxXU),
        description: w ? b.intl.format(b.t["MAtQk/"], {
            applicationName: y?.name
        }) : b.intl.format(b.t.vHkMF4, {
            tier: P
        })
    }) : (0, i.jsx)(f.A, {}), n = (0, i.jsx)(p.Ay, {
        onPrimary: I,
        primaryCTA: p.ti.CONTINUE,
        primaryText: b.intl.string(b.t["JtWl+a"])
    })) : t = E ? (0, i.jsx)(d.v, {
        tierName: P,
        onConfirm: I,
        subscription: S
    }) : (0, i.jsx)(c.XG, {
        tierName: P,
        onConfirm: I,
        subscription: S
    }), r.useEffect(() => {
        a.A.useReducedMotion && k && T(window.innerWidth / 2, window.innerHeight / 2)
    }, [T, k]), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(x.dZ, {
            children: [(0, i.jsx)(g.A, {}), t]
        }), null != n && (0, i.jsx)(x.UX, {
            children: n
        })]
    })
}