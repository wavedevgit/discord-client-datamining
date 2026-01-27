/** Chunk was on 77870 **/
/** chunk id: 965601, original params: e,t,n (module,exports,require) **/
n.d(t, {
    C: () => h
}), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(562465),
    s = n(990078),
    a = n(397927),
    o = n(147087),
    c = n(320501),
    u = n(652215),
    d = n(985018);
async function p(e) {
    try {
        var t, n;
        let r = await i.Bo.post({
            url: u.Rsh.AI_TITLE,
            body: {
                content: e
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return r.ok && null != (t = null == (n = r.body) ? void 0 : n.title) ? t : null
    } catch (e) {
        return null
    }
}

function h(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        updateThreadSettings: i,
        threadSettings: u,
        textAreaState: h
    } = e, [f, g] = l.useState(!1), [m, b] = l.useState(!1), A = (0, o.b)(), y = l.useCallback(async () => {
        if (A) {
            g(!0);
            try {
                let r = null;
                if (null != n) {
                    var e;
                    let l = c.A.getMessage(t.id, n);
                    r = null != (e = null == l ? void 0 : l.content) ? e : null
                } else h.textValue.trim().length >= 10 && (r = h.textValue);
                if (null != r) {
                    let e = await p(r);
                    null != e && "" !== e.trim() && i({
                        name: e
                    })
                }
            } finally {
                g(!1)
            }
        }
    }, [t.id, n, i, A, h.textValue]);
    l.useEffect(() => {
        b(!1), g(!1), t.id === u.parentChannelId && n !== u.parentMessageId && i({
            name: ""
        })
    }, [n, i, t.id, u.parentChannelId, u.parentMessageId]), l.useEffect(() => {
        null != u.name && "" !== u.name.trim() || m || A && null != n && (b(!0), y())
    }, [t.id, n, i, u.name, m, A, y]);
    let _ = l.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (A) return {
                icon: a.Dud,
                onClick: y,
                "aria-label": d.intl.string(d.t.ZF2oBs),
                disabled: e || f || null == n && h.textValue.trim().length < 10,
                tooltip: d.intl.string(d.t.ZF2oBs),
                loading: f
            }
        }, [A, y, f, n, h.textValue]),
        O = l.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return A ? (0, r.jsx)(s.m, {
                text: d.intl.string(d.t.ZF2oBs),
                children: (0, r.jsx)(a.K0, {
                    icon: a.Dud,
                    variant: "secondary",
                    size: "sm",
                    "aria-label": d.intl.string(d.t.ZF2oBs),
                    onClick: y,
                    disabled: e || f || null == n && h.textValue.trim().length < 10,
                    loading: f,
                    type: "button"
                })
            }) : null
        }, [A, f, n, h.textValue, y]);
    return {
        isGeneratingAI: f,
        generateAIName: y,
        enableAIFeatures: A,
        renderAiGenerateButton: O,
        getThreadNameInputAccessory: _
    }
}