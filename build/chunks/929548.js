/** chunk id: 929548 params = (module,exports,require) **/
n.d(t, {
    L: () => j
});
var i = n(627968),
    s = n(64700),
    l = n(574381),
    a = n(311907),
    r = n(139033),
    o = n(314116),
    d = n(421380),
    c = n(397927),
    u = n(827343),
    _ = n(77729),
    m = n(839214),
    g = n(98919),
    A = n(487329),
    x = n(419954),
    h = n(430452),
    p = n(353835),
    T = n(780964),
    E = n(652215),
    S = n(731854),
    C = n(985018);
let f = (0, m.D)(() => ({
    isUploading: !1,
    isDisabled: !1
}));
async function b() {
    let e = await _.A.fileManager.getLogPath();
    _.A.fileManager.showItemInFolder(e)
}

function N(e) {
    (0, o.A)({
        title: C.intl.string(C.t["7UXEF2"]),
        subtitle: C.intl.string(C.t.IYPrRl),
        confirmText: C.intl.string(C.t.BddRzS),
        onConfirm: () => u.A.setDebugLogging(e)
    })
}
async function I(e) {
    let {
        onUploadStart: t,
        onUploadFinish: n
    } = e;
    t?.();
    try {
        let e, t;
        await h.Ay.getMediaEngine().writeAudioDebugState(), await p.A.submitLiveCrashReport({
            message: {
                message: "User Live Dump"
            }
        }), await (0, g.a)(E.Umv.RTC), e = C.intl.string(C.t["fKBB8+"]), t = C.intl.string(C.t.BvyxE7), (0, r.A)({
            title: e,
            subtitle: t
        })
    } catch (a) {
        var s;
        let e, t, n, l;
        s = a.displayMessage, e = C.intl.string(C.t.QZg0J7), t = s ?? C.intl.string(C.t.VzHcSm), n = (0, A.B1)(A.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode, l = C.intl.formatToPlainString(C.t.ejOT95, {
            errorCode: n
        }), (0, c.qfG)(n => (0, i.jsx)(c.VoidConfirmModal, {
            header: e,
            confirmButtonColor: d.$n.Colors.BRAND,
            confirmText: C.intl.string(C.t.BddRzS),
            ...n,
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
                    children: l
                })]
            })
        }))
    } finally {
        n?.()
    }
}
async function v() {
    await I({
        onUploadStart: () => f.setState({
            isUploading: !0
        }),
        onUploadFinish: () => f.setState({
            isUploading: !1,
            isDisabled: !0
        })
    })
}
let j = (0, x.E2)(T.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [C.intl.string(C.t["726JHL"]), C.intl.string(C.t.EbwFfR), C.intl.string(C.t.nuPtYi)],
    usePredicate: function() {
        let e = (0, a.bG)([h.Ay], () => h.Ay.supports(S.O5.DEBUG_LOGGING));
        return l.Av && e && null != _.A.fileManager.readLogFiles
    },
    Component: function() {
        let e = (0, a.bG)([h.Ay], () => h.Ay.getDebugLogging()),
            t = f.useField("isUploading"),
            n = f.useField("isDisabled"),
            l = s.useId();
        return (0, i.jsxs)("fieldset", {
            children: [(0, i.jsx)(c.AC4, {
                tag: "legend",
                id: l,
                children: C.intl.string(C.t["FjN+et"])
            }), (0, i.jsxs)(c.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, i.jsx)(c.dOG, {
                    label: C.intl.string(C.t["726JHL"]),
                    description: C.intl.string(C.t["/7ak9Q"]),
                    checked: e,
                    onChange: N
                }), (0, i.jsx)("div", {
                    role: "group",
                    "aria-labelledby": l,
                    children: (0, i.jsxs)(c.ButtonGroup, {
                        children: [(0, i.jsx)(c.Button, {
                            variant: "secondary",
                            text: C.intl.string(C.t.EbwFfR),
                            onClick: v,
                            loading: t,
                            disabled: n,
                            "aria-label": C.intl.string(C.t.aY1OH2)
                        }), (0, i.jsx)(c.Button, {
                            variant: "secondary",
                            text: C.intl.string(C.t.nuPtYi),
                            onClick: b,
                            "aria-label": C.intl.string(C.t["L/hFOe"])
                        })]
                    })
                })]
            })]
        })
    }
})