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
    m = n(77729),
    g = n(839214),
    _ = n(98919),
    x = n(487329),
    A = n(419954),
    h = n(430452),
    p = n(353835),
    T = n(780964),
    f = n(652215),
    S = n(731854),
    b = n(985018);
let E = (0, g.D)(() => ({
    isUploading: !1,
    isDisabled: !1
}));
async function C() {
    let e = await m.A.fileManager.getLogPath();
    m.A.fileManager.showItemInFolder(e)
}

function N(e) {
    (0, o.A)({
        title: b.intl.string(b.t["7UXEF2"]),
        subtitle: b.intl.string(b.t.IYPrRl),
        confirmText: b.intl.string(b.t.BddRzS),
        onConfirm: () => u.A.setDebugLogging(e)
    })
}
async function v(e) {
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
        }), await (0, _.a)(f.Umv.RTC), e = b.intl.string(b.t["fKBB8+"]), t = b.intl.string(b.t.BvyxE7), (0, r.A)({
            title: e,
            subtitle: t
        })
    } catch (a) {
        var s;
        let e, t, n, l;
        s = a.displayMessage, e = b.intl.string(b.t.QZg0J7), t = s ?? b.intl.string(b.t.VzHcSm), n = (0, x.B1)(x.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode, l = b.intl.formatToPlainString(b.t.ejOT95, {
            errorCode: n
        }), (0, c.qfG)(n => (0, i.jsx)(c.VoidConfirmModal, {
            header: e,
            confirmButtonColor: d.$n.Colors.BRAND,
            confirmText: b.intl.string(b.t.BddRzS),
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
async function I() {
    await v({
        onUploadStart: () => E.setState({
            isUploading: !0
        }),
        onUploadFinish: () => E.setState({
            isUploading: !1,
            isDisabled: !0
        })
    })
}
let j = (0, A.E2)(T.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [b.intl.string(b.t["726JHL"]), b.intl.string(b.t.EbwFfR), b.intl.string(b.t.nuPtYi)],
    usePredicate: function() {
        let e = (0, a.bG)([h.Ay], () => h.Ay.supports(S.O5.DEBUG_LOGGING));
        return l.Av && e && null != m.A.fileManager.readLogFiles
    },
    Component: function() {
        let e = (0, a.bG)([h.Ay], () => h.Ay.getDebugLogging()),
            t = E.useField("isUploading"),
            n = E.useField("isDisabled"),
            l = s.useId();
        return (0, i.jsxs)("fieldset", {
            children: [(0, i.jsx)(c.AC4, {
                tag: "legend",
                id: l,
                children: b.intl.string(b.t["FjN+et"])
            }), (0, i.jsxs)(c.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, i.jsx)(c.dOG, {
                    label: b.intl.string(b.t["726JHL"]),
                    description: b.intl.string(b.t["/7ak9Q"]),
                    checked: e,
                    onChange: N
                }), (0, i.jsx)("div", {
                    role: "group",
                    "aria-labelledby": l,
                    children: (0, i.jsxs)(c.ButtonGroup, {
                        children: [(0, i.jsx)(c.Button, {
                            variant: "secondary",
                            text: b.intl.string(b.t.EbwFfR),
                            onClick: I,
                            loading: t,
                            disabled: n,
                            "aria-label": b.intl.string(b.t.aY1OH2)
                        }), (0, i.jsx)(c.Button, {
                            variant: "secondary",
                            text: b.intl.string(b.t.nuPtYi),
                            onClick: C,
                            "aria-label": b.intl.string(b.t["L/hFOe"])
                        })]
                    })
                })]
            })]
        })
    }
})