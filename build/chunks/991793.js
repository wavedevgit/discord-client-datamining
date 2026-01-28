/** Chunk was on 60449 **/
/** chunk id: 991793, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => D,
    G0: () => _,
    p9: () => I,
    q5: () => y
}), n(896048);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(139033),
    a = n(314116),
    o = n(421380),
    c = n(397927),
    d = n(827343),
    u = n(926919),
    g = n(233545),
    h = n(77729),
    x = n(235986),
    A = n(98919),
    p = n(709710),
    m = n(195043),
    j = n(111162),
    O = n(430452),
    E = n(412780),
    b = n(353835),
    S = n(698723),
    v = n(531525),
    C = n(652215),
    f = n(731854),
    T = n(985018),
    N = n(473169);
async function _() {
    let e = await h.A.fileManager.getLogPath();
    h.A.fileManager.showItemInFolder(e)
}

function I(e) {
    (0, a.A)({
        title: T.intl.string(T.t["7UXEF2"]),
        subtitle: T.intl.string(T.t.IYPrRl),
        confirmText: T.intl.string(T.t.BddRzS),
        onConfirm: () => d.A.setDebugLogging(e)
    })
}
async function y(e) {
    let {
        onUploadStart: t,
        onUploadFinish: n
    } = e;
    null == t || t();
    try {
        let e, t;
        await O.A.getMediaEngine().writeAudioDebugState(), await b.A.submitLiveCrashReport({
            message: {
                message: "User Live Dump"
            }
        }), await (0, A.a)(C.Umv.RTC), e = T.intl.string(T.t["fKBB8+"]), t = T.intl.string(T.t.BvyxE7), (0, r.A)({
            title: e,
            subtitle: t
        })
    } catch (a) {
        var s, l;
        let e, t, n, r;
        s = a.displayMessage, e = T.intl.string(T.t.QZg0J7), t = null != s ? s : T.intl.string(T.t.VzHcSm), n = null == (l = (0, p.B1)(p.iy.DEBUG_LOG_UPLOAD_FAILED)) ? void 0 : l.errorCode, r = T.intl.formatToPlainString(T.t.ejOT95, {
            errorCode: n
        }), (0, c.qfG)(n => {
            var s, l;
            return (0, i.jsx)(c.VoidConfirmModal, (s = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), i.forEach(function(t) {
                        var i;
                        i = n[t], t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i
                    })
                }
                return e
            }({
                header: e,
                confirmButtonColor: o.$n.Colors.BRAND,
                confirmText: T.intl.string(T.t.BddRzS)
            }, n), l = l = {
                children: (0, i.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        height: "100%"
                    },
                    children: [(0, i.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: t
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        selectable: !0,
                        style: {
                            marginTop: "auto"
                        },
                        children: r
                    })]
                })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e))
            }), s))
        })
    } finally {
        null == n || n()
    }
}

function D() {
    let [e, t] = s.useState(!1), {
        debugLogging: n,
        aecDumpEnabled: r
    } = (0, l.cf)([O.A], () => ({
        aecDumpSupported: O.A.isAecDumpSupported(),
        debugLogging: O.A.getDebugLogging(),
        aecDumpEnabled: O.A.getAecDump(),
        supportsConnectionReplay: O.A.supports(f.O5.CONNECTION_REPLAY)
    })), a = (0, l.bG)([j.default], () => j.default.isStreamInfoOverlayEnabled), o = (0, l.bG)([E.Ay], () => E.Ay.shouldRecordNextConnection()), h = s.useCallback(async () => {
        await y({
            onUploadStart: () => t(!0)
        })
    }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.x, {
            setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
            children: (0, i.jsx)(c.dOG, {
                label: T.intl.string(T.t["0CEP6e"]),
                description: T.intl.string(T.t["kBXuW+"]),
                checked: a,
                onChange: e => {
                    (0, S.A)("stream_info_overlay_enabled", e, a), (0, u.x)({
                        isStreamInfoOverlayEnabled: e
                    })
                }
            })
        }), (0, i.jsx)(m.x, {
            setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
            children: (0, i.jsx)(c.dOG, {
                label: T.intl.string(T.t["r6K+TL"]),
                description: T.intl.string(T.t["xl9+I6"]),
                checked: r,
                onChange: e => d.A.setAecDump(e)
            })
        }), (0, i.jsxs)(m.x, {
            setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
            children: [(0, i.jsx)(c.dOG, {
                label: T.intl.string(T.t.U4FgFK),
                description: T.intl.string(T.t.Lm72RU),
                checked: o,
                onChange: e => g.Et(e)
            }), (0, i.jsx)(x.A, {
                className: N.SX,
                children: (0, i.jsx)(x.A.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: T.intl.string(T.t.nJnOHO),
                        onClick: () => g.YW()
                    })
                })
            })]
        }), (0, i.jsx)(m.x, {
            setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
            children: (0, i.jsxs)("div", {
                children: [(0, i.jsx)(c.dOG, {
                    label: T.intl.string(T.t["726JHL"]),
                    description: T.intl.string(T.t["/7ak9Q"]),
                    checked: n,
                    onChange: I
                }), (0, i.jsxs)(c.ButtonGroup, {
                    size: "sm",
                    children: [(0, i.jsx)(c.Button, {
                        variant: "primary",
                        text: T.intl.string(T.t["3UB9ad"]),
                        disabled: e,
                        onClick: h
                    }), (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        text: T.intl.string(T.t.nuPtYi),
                        onClick: _
                    })]
                })]
            })
        })]
    })
}