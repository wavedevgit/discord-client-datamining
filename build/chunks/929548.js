/** chunk id: 929548 params = (module,exports,require) **/
n.d(t, {
    L: () => j
});
var i = n(627968),
    s = n(64700),
    l = n(574381),
    r = n(311907),
    a = n(139033),
    o = n(314116),
    d = n(421380),
    c = n(397927),
    u = n(827343),
    _ = n(77729),
    m = n(839214),
    g = n(98919),
    A = n(487329),
    h = n(419954),
    x = n(430452),
    p = n(353835),
    T = n(780964),
    E = n(652215),
    C = n(731854),
    S = n(985018);
let f = (0, m.D)(() => ({
    isUploading: !1,
    isDisabled: !1
}));
async function N() {
    let e = await _.A.fileManager.getLogPath();
    _.A.fileManager.showItemInFolder(e)
}

function b(e) {
    (0, o.A)({
        title: S.intl.string(S.t["7UXEF2"]),
        subtitle: S.intl.string(S.t.IYPrRl),
        confirmText: S.intl.string(S.t.BddRzS),
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
        await x.Ay.getMediaEngine().writeAudioDebugState(), await p.A.submitLiveCrashReport({
            message: {
                message: "User Live Dump"
            }
        }), await (0, g.a)(E.Umv.RTC), e = S.intl.string(S.t["fKBB8+"]), t = S.intl.string(S.t.BvyxE7), (0, a.A)({
            title: e,
            subtitle: t
        })
    } catch (r) {
        var s;
        let e, t, n, l;
        s = r.displayMessage, e = S.intl.string(S.t.QZg0J7), t = s ?? S.intl.string(S.t.VzHcSm), n = (0, A.B1)(A.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode, l = S.intl.formatToPlainString(S.t.ejOT95, {
            errorCode: n
        }), (0, c.qfG)(n => (0, i.jsx)(c.VoidConfirmModal, {
            header: e,
            confirmButtonColor: d.$n.Colors.BRAND,
            confirmText: S.intl.string(S.t.BddRzS),
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
let j = (0, h.E2)(T.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [S.intl.string(S.t["726JHL"]), S.intl.string(S.t.EbwFfR), S.intl.string(S.t.nuPtYi)],
    usePredicate: function() {
        let e = (0, r.bG)([x.Ay], () => x.Ay.supports(C.O5.DEBUG_LOGGING));
        return l.Av && e && null != _.A.fileManager.readLogFiles
    },
    Component: function() {
        let e = (0, r.bG)([x.Ay], () => x.Ay.getDebugLogging()),
            t = f.useField("isUploading"),
            n = f.useField("isDisabled"),
            l = s.useId();
        return (0, i.jsxs)("fieldset", {
            children: [(0, i.jsx)(c.AC4, {
                tag: "legend",
                id: l,
                children: S.intl.string(S.t["FjN+et"])
            }), (0, i.jsxs)(c.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, i.jsx)(c.dOG, {
                    label: S.intl.string(S.t["726JHL"]),
                    description: S.intl.string(S.t["/7ak9Q"]),
                    checked: e,
                    onChange: b
                }), (0, i.jsx)("div", {
                    role: "group",
                    "aria-labelledby": l,
                    children: (0, i.jsxs)(c.ButtonGroup, {
                        children: [(0, i.jsx)(c.Button, {
                            variant: "secondary",
                            text: S.intl.string(S.t.EbwFfR),
                            onClick: v,
                            loading: t,
                            disabled: n,
                            "aria-label": S.intl.string(S.t.aY1OH2)
                        }), (0, i.jsx)(c.Button, {
                            variant: "secondary",
                            text: S.intl.string(S.t.nuPtYi),
                            onClick: N,
                            "aria-label": S.intl.string(S.t["L/hFOe"])
                        })]
                    })
                })]
            })]
        })
    }
})