/** chunk id: 16986 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var a = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(793574),
    r = n(688810),
    o = n(46054),
    d = n(753806),
    c = n(145331),
    u = n(195043),
    m = n(954571),
    h = n(253932),
    x = n(790174),
    p = n(531525),
    g = n(652215),
    _ = n(985018);

function f() {
    let e = h.ML.useSetting(),
        t = h.eK.useSetting(),
        n = h.SI.useSetting(),
        f = h.gs.useSetting(),
        v = h.SY.useSetting(),
        b = h._z.useSetting(),
        j = h.j7.useSetting(),
        A = h.X6.useSetting(),
        C = h.hD.useSetting(),
        T = h.rs.useSetting(),
        E = h.jW.useSetting(),
        S = h.Hu.useSetting(),
        {
            analyticsLocations: y
        } = (0, r.Ay)(l.A.TEXT_AND_IMAGES),
        N = i.useCallback(e => {
            let t = 1 === e;
            t ? d.A.cleanUpPrivateChannelSearchState() : d.A.cleanUpSearchState({
                type: g.I4_.DMS
            }), (0, c._k)({
                prevIsCrossDMSettingEnabled: h.Hu.getSetting(),
                isCrossDMSettingEnabled: t,
                location: c.vy.USER_SETTINGS
            }), h.Hu.updateSetting(t)
        }, []);
    return (0, a.jsx)(x.A, {
        title: _.intl.string(_.t["/VQax8"]),
        children: (0, a.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 24,
            children: [(0, a.jsx)(u.x, {
                setting: p.H.CHAT_INLINE_MEDIA,
                children: (0, a.jsxs)(s.nVY, {
                    label: _.intl.string(_.t.U68Dgp),
                    children: [(0, a.jsx)(u.x, {
                        setting: p.H.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, a.jsx)(s.dOG, {
                            checked: C,
                            onChange: h.hD.updateSetting,
                            label: _.intl.string(_.t.U47N1p)
                        })
                    }), (0, a.jsx)(u.x, {
                        setting: p.H.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, a.jsx)(s.dOG, {
                            checked: A,
                            description: _.intl.formatToPlainString(_.t.qjjvqO, {
                                maxSize: 10
                            }),
                            onChange: h.X6.updateSetting,
                            label: _.intl.string(_.t.VP11No)
                        })
                    }), (0, a.jsx)(u.x, {
                        setting: p.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, a.jsx)(s.dOG, {
                            checked: b,
                            description: _.intl.string(_.t.T0rbtM),
                            onChange: h._z.updateSetting,
                            label: _.intl.string(_.t["w8j+yW"])
                        })
                    })]
                })
            }), (0, a.jsxs)(u.x, {
                setting: p.H.CHAT_EMBEDS,
                children: [(0, a.jsx)(s.cGx, {}), (0, a.jsx)(s.nVY, {
                    label: _.intl.string(_.t.PWZOn4),
                    children: (0, a.jsx)(u.x, {
                        setting: p.H.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, a.jsx)(s.dOG, {
                            checked: T,
                            onChange: h.rs.updateSetting,
                            label: _.intl.string(_.t.xX0ZTA)
                        })
                    })
                })]
            }), (0, a.jsxs)(u.x, {
                setting: p.H.CHAT_EMOJI,
                children: [(0, a.jsx)(s.cGx, {}), (0, a.jsxs)(s.nVY, {
                    label: _.intl.string(_.t.sMOuuS),
                    children: [(0, a.jsx)(u.x, {
                        setting: p.H.CHAT_EMOJI_REACTIONS,
                        children: (0, a.jsx)(s.dOG, {
                            checked: E,
                            onChange: h.jW.updateSetting,
                            label: _.intl.string(_.t.Iv24sm)
                        })
                    }), (0, a.jsx)(u.x, {
                        setting: p.H.CHAT_EMOJI_EMOTICONS,
                        children: (0, a.jsx)(s.dOG, {
                            checked: j,
                            description: o.A.parse(_.intl.string(_.t["20dvuQ"])),
                            onChange: h.j7.updateSetting,
                            label: _.intl.string(_.t["79qal8"])
                        })
                    })]
                })]
            }), (0, a.jsxs)(u.x, {
                setting: p.H.CHAT_STICKERS,
                children: [(0, a.jsx)(s.cGx, {}), (0, a.jsx)(s.nVY, {
                    label: _.intl.string(_.t["6NtAuJ"]),
                    children: (0, a.jsx)(u.x, {
                        setting: p.H.CHAT_STICKERS_AUTOCOMPLETE,
                        children: (0, a.jsx)(s.dOG, {
                            checked: e,
                            description: _.intl.string(_.t["/eVrj8"]),
                            onChange: e => {
                                m.default.track(g.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                    enabled: e,
                                    location: {
                                        section: g.JJy.SETTINGS_TEXT_AND_IMAGES
                                    },
                                    location_stack: y
                                }), h.ML.updateSetting(e)
                            },
                            label: _.intl.string(_.t["29xPVZ"])
                        })
                    })
                })]
            }), (0, a.jsxs)(u.x, {
                setting: p.H.CHAT_SOUNDMOJI,
                children: [(0, a.jsx)(s.cGx, {}), (0, a.jsx)(s.nVY, {
                    label: _.intl.string(_.t.EHlAMc),
                    children: (0, a.jsx)(u.x, {
                        setting: p.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                        children: (0, a.jsx)(s.dOG, {
                            checked: t,
                            description: _.intl.string(_.t.hrSIhN),
                            onChange: e => {
                                m.default.track(g.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                    checked: e,
                                    location: {
                                        section: g.JJy.SETTINGS_TEXT_AND_IMAGES
                                    }
                                }), h.eK.updateSetting(e)
                            },
                            label: _.intl.string(_.t["CtYr+U"])
                        })
                    })
                })]
            }), (0, a.jsxs)(u.x, {
                setting: p.H.CHAT_TEXT_BOX,
                children: [(0, a.jsx)(s.cGx, {}), (0, a.jsx)(s.nVY, {
                    label: _.intl.string(_.t.afR0pI),
                    children: (0, a.jsx)(u.x, {
                        setting: p.H.CHAT_TEXT_BOX_PREVIEW,
                        children: (0, a.jsx)(s.dOG, {
                            checked: n,
                            onChange: e => {
                                m.default.track(g.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                    enabled: e,
                                    location: {
                                        section: g.JJy.SETTINGS_TEXT_AND_IMAGES
                                    }
                                }), h.SI.updateSetting(e)
                            },
                            label: _.intl.string(_.t.AqGrEI)
                        })
                    })
                })]
            }), (0, a.jsxs)(u.x, {
                setting: p.H.CHAT_THREADS,
                children: [(0, a.jsx)(s.cGx, {}), (0, a.jsx)(s.nVY, {
                    label: _.intl.string(_.t.B2panI),
                    children: (0, a.jsx)(u.x, {
                        setting: p.H.CHAT_THREADS_SPLIT_VIEW,
                        children: (0, a.jsx)(s.dOG, {
                            checked: v,
                            onChange: h.SY.updateSetting,
                            label: _.intl.string(_.t.AInv5m)
                        })
                    })
                })]
            }), (0, a.jsxs)(u.x, {
                setting: p.H.MESSAGE_SEARCH,
                children: [(0, a.jsx)(s.cGx, {}), (0, a.jsx)(u.x, {
                    setting: p.H.MESSAGE_SEARCH_ALL_DMS,
                    children: (0, a.jsx)(s.z6M, {
                        label: _.intl.string(_.t["NxjN+q"]),
                        options: [{
                            name: _.intl.string(_.t["t+fGsk"]),
                            value: 0
                        }, {
                            name: _.intl.string(_.t.MwlEGN),
                            value: 1
                        }],
                        onChange: N,
                        value: +!!S
                    })
                })]
            }), (0, a.jsxs)(u.x, {
                setting: p.H.CHAT_SPOILERS,
                children: [(0, a.jsx)(s.cGx, {}), (0, a.jsx)(s.z6M, {
                    label: _.intl.string(_.t.QgwmVz),
                    description: _.intl.string(_.t.TYnRkS),
                    options: [{
                        name: _.intl.string(_.t["KFH/me"]),
                        value: g.P6Q.ON_CLICK
                    }, {
                        name: _.intl.string(_.t.K5VTBE),
                        value: g.P6Q.IF_MODERATOR
                    }, {
                        name: _.intl.string(_.t.Pe1RbL),
                        value: g.P6Q.ALWAYS
                    }],
                    onChange: e => h.gs.updateSetting(e),
                    value: f
                })]
            })]
        })
    })
}