/** chunk id: 963765, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => C
}), n(321073), n(228524), n(896048), n(492834);
var l = n(627968),
    i = n(64700),
    r = n(110259),
    o = n(158954),
    a = n(311907),
    s = n(933681),
    c = n(421380),
    u = n(397927),
    d = n(155718),
    _ = n(409200),
    p = n(568185),
    g = n(219444),
    h = n(284738),
    f = n(95701),
    b = n(769765),
    x = n(71393),
    v = n(147036),
    m = n(488926),
    E = n(499785),
    A = n(652215),
    T = n(818348),
    y = n(985018),
    w = n(205285);

function C(e) {
    var t, n;
    let {
        guildId: C,
        transitionState: I,
        onSubmit: R,
        onClose: S
    } = e, [L, k] = i.useState(A._Ee), [M, G] = i.useState(A.rbe.GUILD_TEXT), [j, D] = i.useState(""), [N, O] = i.useState(!1), H = (0, a.bG)([x.A], () => x.A.getGuild(C), [C]), B = (0, h.R)(C), U = (0, g.Vf)(H), V = i.useMemo(() => (function(e) {
        let {
            canCreateStageChannel: t,
            canCreateMediaChannel: n
        } = e, i = [{
            icon: u.N$i,
            label: y.intl.string(y.t.pnuRXC),
            value: A.rbe.GUILD_TEXT,
            description: y.intl.string(y.t["Hf5Lb+"])
        }, {
            icon: u.HKD,
            label: y.intl.string(y.t.Sx55Oh),
            value: A.rbe.GUILD_VOICE,
            description: y.intl.string(y.t.pqfkoF)
        }];
        return t && i.push({
            icon: u.qux,
            label: y.intl.string(y.t.pNWst0),
            value: A.rbe.GUILD_STAGE_VOICE,
            description: y.intl.string(y.t.VPAwgo)
        }), i.push({
            icon: u.bSJ,
            label: y.intl.string(y.t.eAVID5),
            value: A.rbe.GUILD_FORUM,
            description: y.intl.string(y.t.iZ5pgg)
        }), n && i.push({
            icon: u.xfq,
            label: y.intl.string(y.t["6x6fVg"]),
            value: A.rbe.GUILD_MEDIA,
            description: y.intl.string(y.t.JyCrwS),
            isBeta: !0
        }), i.map(e => {
            let {
                icon: t,
                label: n,
                value: i,
                description: r,
                isBeta: o
            } = e;
            return {
                name: (0, l.jsxs)("div", {
                    className: w.OA,
                    children: [(0, l.jsx)(t, {
                        className: w.Kk
                    }), (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)(u.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            children: [n, (0, l.jsx)(_.p, {
                                isBeta: o
                            })]
                        }), (0, l.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: r
                        })]
                    })]
                }),
                value: i,
                channelIcon: t
            }
        })
    })({
        canCreateStageChannel: B,
        canCreateMediaChannel: U
    }), [B, U]), W = (0, a.bG)([b.A], () => b.A.getCategories(C)._categories, [C]), K = i.useMemo(() => W.map(e => {
        let {
            channel: t
        } = e;
        return {
            id: t.id,
            value: t.id,
            label: t.name
        }
    }), [W]), q = null != (t = null == (n = V.find(e => e.value === M)) ? void 0 : n.channelIcon) ? t : T.FX, X = "" !== j;
    return (0, l.jsx)("form", {
        onSubmit: function(e) {
            if (e.preventDefault(), !X) return;
            O(!0);
            let t = {
                type: M,
                name: j,
                parent_id: "null" !== L ? L : void 0,
                permission_overwrites: [{
                    id: C,
                    type: d.r2.ROLE,
                    allow: m.x3,
                    deny: A.xBc.VIEW_CHANNEL
                }]
            };
            E.A.post({
                url: A.Rsh.GUILD_CHANNELS(C),
                body: t,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.CHANNEL_CREATE,
                    properties: e => {
                        var t, n;
                        return (0, s.e0)({
                            is_private: !0,
                            channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                            channel_type: null == e || null == (n = e.body) ? void 0 : n.type
                        })
                    }
                },
                rejectWithError: !0
            }).then(e => {
                p.A.checkGuildTemplateDirty(C), R(e.body.id), S()
            }, e => {}).finally(() => {
                O(!1)
            })
        },
        children: (0, l.jsx)(o.Modal, {
            transitionState: I,
            title: y.intl.string(y.t["fUYU+j"]),
            onClose: S,
            actionBarInput: (0, l.jsx)(u.QWc, {
                text: y.intl.string(y.t["13/7kX"]),
                onClick: S
            }),
            actions: [{
                variant: "primary",
                text: y.intl.string(y.t["R3BPH+"]),
                loading: N,
                disabled: !X,
                type: "submit"
            }],
            children: (0, l.jsxs)(u.BJc, {
                gap: 16,
                children: [(0, l.jsx)(u.l6P, {
                    label: y.intl.string(y.t.vHCZwr),
                    placeholder: y.intl.string(y.t["g/Rr2S"]),
                    value: L,
                    options: K,
                    onSelectionChange: k,
                    selectionMode: "single",
                    fullWidth: !0
                }), (0, l.jsx)(c.$d, {
                    label: y.intl.string(y.t["7ZcXG2"]),
                    options: V,
                    value: M,
                    onChange: e => {
                        let {
                            value: t
                        } = e;
                        return G(t)
                    }
                }), (0, l.jsx)(u.ksK, {
                    label: y.intl.string(y.t.PVbHDl),
                    value: j,
                    onChange: function(e) {
                        (0, f.ke)(M) && (e = (0, v.an)(e)), D(e)
                    },
                    maxLength: A.Ign,
                    placeholder: y.intl.string(y.t["bw/b8E"]),
                    leading: q,
                    autoFocus: !0
                })]
            })
        })
    })
}