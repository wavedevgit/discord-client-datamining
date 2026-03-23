/** chunk id: 474445 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(562465),
    s = n(397927),
    o = n(73153),
    d = n(147087),
    c = n(773669),
    u = n(652215),
    g = n(985018),
    A = n(923545);
let m = new Map;

function p(e, t) {
    let p, {
            handleTranslate: f,
            handleRevertTranslation: h,
            isTranslating: y,
            isTranslated: E
        } = function(e) {
            let [t, n] = l.useState(!1), i = (0, a.bG)([c.default], () => c.default.locale);
            return {
                handleTranslate: l.useCallback(async (l, a) => {
                    if (t) return;
                    let d = l ?? i;
                    n(!0);
                    let c = a ?? (0, g.getAvailableLocales)().find(e => e.value === d)?.name ?? d;
                    m.has(e.id) || m.set(e.id, e.content), (0, s.showToast)((0, s.createToast)(g.intl.formatToPlainString(g.t.Znl8Z8, {
                        targetLanguage: c
                    }), s.ToastType.AI));
                    try {
                        let t = await r.Bo.post({
                            url: u.Rsh.AI_TRANSLATE,
                            body: {
                                content: e.content,
                                locale: d
                            },
                            rejectWithError: !1
                        });
                        t.ok && t.body && (o.h.dispatch({
                            type: "MESSAGE_UPDATE",
                            message: {
                                id: e.id,
                                channel_id: e.channel_id,
                                content: t.body.content
                            }
                        }), (0, s.showToast)((0, s.createToast)(g.intl.formatToPlainString(g.t.FtVUqm, {
                            targetLanguage: c
                        }), s.ToastType.SUCCESS)))
                    } finally {
                        n(!1)
                    }
                }, [e, t, i]),
                handleRevertTranslation: l.useCallback(() => {
                    let t = m.get(e.id);
                    null != t && (o.h.dispatch({
                        type: "MESSAGE_UPDATE",
                        message: {
                            id: e.id,
                            channel_id: e.channel_id,
                            content: t
                        }
                    }), m.delete(e.id))
                }, [e.id, e.channel_id]),
                isTranslating: t,
                isTranslated: m.has(e.id)
            }
        }(e),
        _ = (p = (0, g.getAvailableLocales)(), l.useMemo(() => p.map(e => {
            let t;
            try {
                t = n(579832)(`./${e.value}.png`)
            } catch (e) {
                t = n(432706)
            }
            return (0, i.jsx)(s.Drp, {
                id: `translate-${e.value}`,
                label: e.name,
                icon: () => (0, i.jsx)("img", {
                    alt: "",
                    src: t,
                    className: A.M
                }),
                leadingAccessory: {
                    type: "image",
                    src: t
                },
                action: () => f(e.value, e.name),
                disabled: y
            }, e.value)
        }), [f, y, p])),
        S = (0, d.b)();
    return null != e.content && "" !== e.content.trim() && S ? E ? (0, i.jsx)(s.Drp, {
        id: "revert-translation",
        label: g.intl.string(g.t.JC9BXn),
        leadingAccessory: {
            type: "icon",
            icon: s.UaP
        },
        icon: s.UaP,
        action: h,
        disabled: y
    }) : (0, i.jsx)(s.Drp, {
        id: "translate",
        label: y ? g.intl.string(g.t.SVKIdU) : g.intl.string(g.t["6epDlR"]),
        action: () => f(),
        leadingAccessory: {
            type: "icon",
            icon: s.UaP
        },
        disabled: y,
        children: _
    }) : null
}