/** chunk id: 984742, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(938796);
var r = n(627968),
    i = n(64700),
    l = n(241524),
    a = n(775602),
    s = n(21161),
    o = n(163437),
    c = n(490744),
    u = n(594508),
    d = n(156312),
    p = n(166532),
    m = n(19311),
    f = n(534479),
    b = n(482132),
    g = n(921925),
    x = n(376747),
    j = n(985018);

function h(e) {
    var t, n;
    let h, v, {
            showBenefits: y,
            handleClose: P,
            onSubscriptionConfirmation: S
        } = e,
        {
            updatedSubscription: O,
            readySlideId: A,
            selectedSku: C,
            selectedStoreListing: E,
            application: T
        } = (0, d.P5)(),
        N = (0, l.A)(x.Y),
        {
            createMultipleConfettiAt: _
        } = i.useContext(s.x),
        w = null != (t = null == C ? void 0 : C.name) ? t : "",
        k = () => {
            P(), null == S || S()
        },
        D = A === p.pn.CONFIRM,
        I = (0, o.bg)(null != (n = null == C ? void 0 : C.flags) ? n : 0),
        R = null != E && E.benefits.length > 0 ? j.intl.formatToPlainString(j.t["+IQQVM"], {
            benefitCount: E.benefits.length
        }) : null;
    return y ? N ? h = (0, r.jsx)(u.E, {
        title: j.intl.format(j.t.ea6tZr, {
            tierName: w
        }),
        subtitle: null != E && E.benefits.length > 0 ? j.intl.formatToPlainString(j.t.HNepft, {
            benefits: R
        }) : null,
        onConfirm: k,
        confirmCta: j.intl.string(j.t.nlkywz)
    }) : (h = null != E && null != T ? (0, r.jsx)(c.Uf, {
        icon: E.thumbnail,
        storeListingBenefits: E.benefits,
        application: T,
        title: j.intl.format(j.t["Q+qktS"], {
            tier: w
        }),
        subtitle: j.intl.string(j.t.ECKxXU),
        description: I ? j.intl.format(j.t["MAtQk/"], {
            applicationName: null == T ? void 0 : T.name
        }) : j.intl.format(j.t.vHkMF4, {
            tier: w
        })
    }) : (0, r.jsx)(f.A, {}), v = (0, r.jsx)(m.A, {
        onPrimary: k,
        primaryCTA: m.t.CONTINUE,
        primaryText: j.intl.string(j.t["JtWl+a"])
    })) : h = N ? (0, r.jsx)(u.v, {
        tierName: w,
        onConfirm: k,
        subscription: O
    }) : (0, r.jsx)(c.XG, {
        tierName: w,
        onConfirm: k,
        subscription: O
    }), i.useEffect(() => {
        a.A.useReducedMotion && D && _(window.innerWidth / 2, window.innerHeight / 2)
    }, [_, D]), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(b.dZ, {
            children: [(0, r.jsx)(g.A, {}), h]
        }), null != v && (0, r.jsx)(b.UX, {
            children: v
        })]
    })
}