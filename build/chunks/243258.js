/** Chunk was on 87102 **/
/** chunk id: 243258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => S
}), n(321073), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(192308),
    s = n(397927),
    c = n(843472),
    p = n(573435),
    u = n(911269),
    _ = n(619517),
    d = n(451909),
    f = n(378570),
    h = n(223863),
    m = n(95701),
    b = n(734057),
    y = n(31717),
    g = n(954571),
    O = n(403362),
    w = n(661191),
    j = n(518960),
    x = n(372684),
    v = n(439818),
    P = n(399925),
    T = n(74847),
    I = n(696016),
    k = n(652215),
    C = n(381941),
    E = n(985018),
    A = n(312396);

function R(e) {
    var t;
    let {
        clips: n
    } = e, l = n[0], i = l.thumbnail, o = null;
    return "" !== i && (o = (0, r.jsx)("div", {
        className: a()(A.cR, A.JZ),
        children: (0, r.jsx)(_.Ay, {
            className: A.xn,
            src: i,
            width: 56,
            height: 56
        })
    }), n.length > 1 && (o = (0, r.jsxs)("div", {
        className: A.EW,
        children: [(0, r.jsx)(p.Ay, {
            mask: p.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
            width: 56,
            height: 56,
            children: o
        }), (0, r.jsxs)(s.Text, {
            className: A.mB,
            variant: "text-xs/semibold",
            color: "text-default",
            children: ["+", n.length - 1]
        })]
    }))), (0, r.jsxs)("div", {
        className: A.sq,
        children: [(0, r.jsx)("div", {
            className: A.FG,
            children: (0, r.jsxs)("div", {
                className: A.kp,
                children: [(0, r.jsx)(s.SfG, {
                    size: "custom",
                    width: 20,
                    color: s.LU0.colors.TEXT_MUTED
                }), (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: 1 === n.length ? null != (t = l.name) ? t : E.intl.string(E.t.Cyxddp) : E.intl.formatToPlainString(E.t.SJ6pPX, {
                        count: n.length
                    })
                })]
            })
        }), o]
    })
}

function S(e) {
    var t, n;
    let {
        clips: i,
        analyticsLocations: a,
        onClose: p
    } = e, _ = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["clips", "analyticsLocations", "onClose"]), A = l.useCallback(async (e, t, n) => {
        let {
            withMessage: r,
            transitionToDestination: l,
            closeAfterSend: u
        } = t;
        n(!0);
        try {
            let t = [],
                m = [];
            for (let e of i) {
                var _;
                let n = await (0, P.VO)(e),
                    r = null != (_ = e.name) ? _ : (0, I.cM)(w.default.extractTimestamp(e.id)),
                    l = (0, v.A)(r);
                if (e.type === x.nQ.CLIP || e.type === x.nQ.VOICE_CLIP) {
                    let r = "".concat("" !== l ? l : "clip", ".mp4");
                    t.push(new File([n], r, {
                        type: "video/mp4"
                    })), m.push({
                        clip: e
                    })
                } else if (e.type === x.nQ.SCREENSHOT) {
                    let e = "".concat("" !== l ? l : "screenshot", ".jpeg");
                    t.push(new File([n], e, {
                        type: "image/jpeg"
                    })), m.push({})
                }
            }
            let A = (await Promise.all(e.map(h.pk))).filter(O.Vq).filter(e => (0, T.t)(e));
            if (0 === A.length) {
                (0, s.showToast)((0, s.createToast)(E.intl.string(E.t.iufib1), s.ToastType.FAILURE)), n(!1);
                return
            }
            for (let e of (u && p(), A)) {
                let n = b.A.getChannel(e);
                if (null != n) {
                    for (let e of ((0, j.R)(t, n, y.C.ChannelMessage, {
                            filesMetadata: m,
                            origin: "unknown:clip_share",
                            requireConfirm: !1
                        }), i)) g.default.track(k.HAw.CLIP_SHARED, {
                        location_stack: a,
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_type: n.type,
                        application_id: e.applicationId,
                        clip_id: e.id
                    });
                    null != r && "" !== r.trim() && await c.A.sendMessage(n.id, d.Ay.parse(n, r), !1, {
                        location: C.Hx.FORWARDING
                    })
                }
            }
            l && 1 === A.length && ((0, f.iN)(A[0], {
                openTextInVoiceIfVoiceChannel: !0
            }), o.closeAllModals())
        } catch (e) {
            (0, s.showToast)((0, s.createToast)(E.intl.string(E.t.iufib1), s.ToastType.FAILURE))
        } finally {
            n(!1)
        }
    }, [i, a, p]), S = l.useCallback(e => {
        if (e instanceof m.YB && !(0, T.t)(e.id)) return {
            label: E.intl.string(E.t.iufib1)
        }
    }, []);
    return (0, r.jsx)(u.ForwardModal, (t = function(e) {
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
    }({}, _), n = n = {
        onClose: p,
        customTitle: E.intl.string(E.t.I8lglT),
        customSubtitle: E.intl.string(E.t.Ey7mOU),
        customPreview: (0, r.jsx)(R, {
            clips: i
        }),
        customSendHandler: A,
        customValidateDestination: S
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
}