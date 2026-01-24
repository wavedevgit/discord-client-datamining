/** Chunk was on 33885 **/
/** chunk id: 962156, original params: e,t,n (module,exports,require) **/
n.d(t, {
    ApplicationCommandShareModal: () => S
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(158954),
    a = n(397927),
    s = n(155718),
    o = n(429913),
    u = n(223863),
    c = n(151054),
    d = n(734057),
    b = n(71393),
    f = n(403362),
    p = n(264322),
    m = n(545152),
    h = n(382731),
    g = n(392449),
    y = n(293588),
    x = n(985018),
    v = n(116106),
    j = n(119390);
let A = [s.kc.CHAT],
    O = () => {
        (0, a.OoC)(y.C)
    };

function S(e) {
    var t;
    let {
        applicationId: n,
        channel: s,
        command: y,
        onClose: S,
        requireLaunchChannel: _,
        onShareResult: w,
        previewMessage: P
    } = e, C = function(e, t) {
        if (null == e) return {};
        var n, l, r, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                    i = Object.getOwnPropertyNames(e);
                for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
    }(e, ["applicationId", "channel", "command", "onClose", "requireLaunchChannel", "onShareResult", "previewMessage"]), N = r.useMemo(() => null == s ? null : (0, u._5)(s.id), [s]), [T, E] = r.useState(!1), {
        commands: L,
        loading: D
    } = (t = r.useMemo(() => null == s ? {
        type: "contextless"
    } : {
        type: "channel",
        channel: s
    }, [s]), (0, p.ZA)(t, {
        commandTypes: A
    }, {
        applicationId: n,
        allowFetch: !0,
        allowApplicationState: !0
    })), k = r.useRef(0), [M, I] = r.useState(_ && null != N ? [N] : []), R = M.length, F = R >= 5, [z, G] = r.useState(""), {
        results: q,
        updateSearchText: H
    } = (0, c.R)({
        selectedDestinations: M,
        originDestination: null != N ? N : void 0,
        includeMissingDMs: !0
    }), U = r.useCallback(e => {
        G(e), H(e)
    }, [H]), B = r.useCallback(() => (w(!1), S()), [w, S]), [J] = (0, o.A)([n]), Q = r.useCallback(() => {
        G("")
    }, [G]), W = r.useRef(null);
    r.useEffect(() => {
        if ("" === z) {
            var e;
            null == (e = W.current) || e.focus()
        }
    }, [z]);
    let V = r.useCallback(e => {
            I(t => {
                let n = t.findIndex(t => {
                    let {
                        type: n,
                        id: l
                    } = t;
                    return n === e.type && l === e.id
                });
                if (-1 === n) return F ? t : (G(""), H(""), k.current += 1, [e, ...t]);
                let l = [...t];
                return l.splice(n, 1), k.current += 1, l
            })
        }, [F, H]),
        [K, Z] = r.useMemo(() => {
            if (D) return [null, !1];
            let e = L.find(e => e.untranslatedName === y.name);
            return void 0 !== e ? [e, !1] : [null, !0]
        }, [y, L, D]),
        X = r.useCallback(async function(e) {
            let {
                closeAfterSend: t
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null === K) return;
            E(!0);
            let n = (await Promise.all(e.map(u.pk))).filter(f.Vq);
            t && (w(!0), O()), n.forEach(async e => {
                var t, n;
                let l = d.A.getChannel(e);
                if (null == l) return;
                let r = null != (t = null == (n = y.options) ? void 0 : n.reduce((e, t) => (e[t.name] = [{
                        type: "text",
                        text: t.value
                    }], e), {})) ? t : {},
                    i = b.A.getGuild(null == l ? void 0 : l.guild_id);
                null != await (0, m.A)({
                    command: K,
                    optionValues: r,
                    context: {
                        channel: l,
                        guild: i
                    }
                }) && (0, a.showToast)((0, a.createToast)(x.intl.string(x.t["5WjJcl"]), a.ToastType.MESSAGE))
            }), w(!0), O()
        }, [w, K, y.options]),
        Y = r.useCallback(() => {
            X(M, {
                closeAfterSend: !0
            })
        }, [X, M]);
    if (D) return (0, l.jsx)(i.Modal, {
        title: x.intl.string(x.t.fuFvwx),
        "aria-label": x.intl.string(x.t.fuFvwx),
        transitionState: C.transitionState,
        onClose: S,
        actions: [],
        children: (0, l.jsx)(a.y$y, {
            className: v.dc
        })
    });
    if (Z) return (0, l.jsx)(i.Modal, {
        title: x.intl.string(x.t.fuFvwx),
        "aria-label": x.intl.string(x.t.fuFvwx),
        transitionState: C.transitionState,
        onClose: S,
        actions: [{
            text: x.intl.string(x.t.cpT0Cq),
            onClick: S,
            variant: "primary"
        }],
        children: x.intl.string(x.t.yAk8ZT)
    });
    let $ = q.length > 0 ? (0, l.jsx)(g.z, {
            rowData: q,
            handleToggleDestination: V,
            selectedDestinations: M,
            disableSelection: F,
            originDestination: N
        }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("img", {
                className: v.BJ,
                src: j,
                alt: ""
            }), (0, l.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: x.intl.string(x.t.V6nAfF)
            })]
        }),
        ee = x.intl.format(x.t.hajTkz, {
            appName: null == J ? void 0 : J.name
        });
    null == J && (ee = x.intl.string(x.t.fuFvwx));
    let et = x.intl.format(x.t["DF+q2l"], {
        appName: null == J ? void 0 : J.name
    });
    return F && (et = x.intl.format(x.t["/KhyPe"], {
        count: 5
    })), (0, l.jsx)(i.Modal, {
        title: ee.toString(),
        subtitle: et,
        "aria-label": ee.toString(),
        transitionState: C.transitionState,
        onClose: B,
        size: "md",
        actions: [{
            text: x.intl.string(x.t.cpT0Cq),
            onClick: B,
            variant: "secondary"
        }, {
            text: x.intl.string(x.t.TXNS7S),
            onClick: Y,
            disabled: 0 === R || T,
            variant: "primary"
        }],
        preview: void 0 !== P ? (0, l.jsx)(h.h, {
            previewMessage: P
        }) : null,
        input: (0, l.jsx)(a.IWV, {
            ref: W,
            query: z,
            onChange: U,
            onClear: Q,
            placeholder: x.intl.string(x.t["5h0QOP"]),
            "aria-label": x.intl.string(x.t["5h0QOP"]),
            autoFocus: !0
        }),
        children: $
    })
}