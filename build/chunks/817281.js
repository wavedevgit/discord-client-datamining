/** chunk id: 817281, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => y,
    u_: () => E,
    um: () => h
});
var r = n(873298),
    i = n(406935),
    a = n(582754),
    o = n(73153),
    s = n(47671),
    l = n(284016),
    c = n(973654),
    u = n(544028),
    d = n(253932),
    f = n(594061),
    p = n(652215),
    _ = n(185928);

function h(e) {
    return f.wc.updateAsync("guildFolders", t => {
        t.folders = e.map(e => {
            let t = r.ak.create({
                guildIds: e.guildIds
            });
            return null != e.folderId && (t.id = i.j1.create({
                value: String(e.folderId)
            })), null != e.folderColor && (t.color = i.ol.create({
                value: String(e.folderColor)
            })), null != e.folderName && "" !== e.folderName && (t.name = i.hU.create({
                value: String(e.folderName)
            })), t
        })
    }, f.Sb.FREQUENT_USER_ACTION)
}

function m(e) {
    switch (e) {
        case p.NJ8.DARK:
            return r.Sx.DARK;
        case p.NJ8.LIGHT:
            return r.Sx.LIGHT;
        case p.NJ8.DARKER:
            return r.Sx.DARKER;
        case p.NJ8.MIDNIGHT:
            return r.Sx.MIDNIGHT;
        default:
            return r.Sx.DARK
    }
}

function g(e) {
    return {
        backgroundGradientPresetId: null != e.backgroundGradientPresetId ? i.ZQ.create({
            value: e.backgroundGradientPresetId
        }) : void 0,
        customUserThemeSettings: null != e.customUserThemeSettings ? {
            colors: e.customUserThemeSettings.colors,
            gradientColorStops: e.customUserThemeSettings.gradientColorStops,
            gradientAngle: e.customUserThemeSettings.gradientAngle,
            baseMix: e.customUserThemeSettings.baseMix
        } : void 0
    }
}

function E(e) {
    let {
        backgroundGradientPresetId: t,
        customUserThemeSettings: n,
        theme: r,
        useSystemTheme: i
    } = e, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Sb.INFREQUENT_USER_ACTION, u = "system" === r ? _.Q_.ON : _.Q_.OFF, d = null != i ? i : u;
    if (o.h.dispatch({
            type: "UNSYNCED_USER_SETTINGS_UPDATE",
            settings: {
                useSystemTheme: d
            }
        }), null == t && "system" !== r && (0, a.Mw)(r) && (0, c.NA)({
            [_.Fc.DARK]: r
        }), o.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: {
                appearance: {
                    settings: {
                        clientThemeSettings: {
                            backgroundGradientPresetId: t,
                            customUserThemeSettings: n
                        },
                        theme: "system" === r ? void 0 : r
                    }
                }
            }
        }), l.A.shouldSync("appearance")) return f.wc.updateAsync("appearance", e => {
        e.theme = m(r), e.clientThemeSettings = g({
            backgroundGradientPresetId: t,
            customUserThemeSettings: n
        })
    }, s)
}
let y = {
    overrideLocale(e) {
        o.h.dispatch({
            type: "USER_SETTINGS_LOCALE_OVERRIDE",
            locale: e
        })
    },
    updatedUnsyncedSettings(e) {
        o.h.dispatch({
            type: "UNSYNCED_USER_SETTINGS_UPDATE",
            settings: e
        })
    },
    setShouldSyncTextSettings(e) {
        o.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: {
                text: {
                    shouldSync: e,
                    settings: e ? {} : {
                        inlineAttachmentMedia: d.X6.getSetting(),
                        inlineEmbedMedia: d.hD.getSetting(),
                        renderEmbeds: d.rs.getSetting(),
                        renderReactions: d.jW.getSetting(),
                        animateEmoji: d.Sf.getSetting(),
                        animateStickers: d.S0.getSetting(),
                        gifAutoPlay: d.kt.getSetting()
                    }
                }
            }
        })
    },
    setShouldSyncAppearanceSettings(e) {
        var t;
        o.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: {
                appearance: {
                    shouldSync: e,
                    settings: e ? {} : {
                        theme: u.A.theme,
                        clientThemeSettings: {
                            backgroundGradientPresetId: null == (t = s.A.gradientPreset) ? void 0 : t.id
                        },
                        developerMode: d.Q_.getSetting()
                    }
                }
            }
        })
    },
    applySettingsOverride(e) {
        o.h.dispatch({
            type: "USER_SETTINGS_OVERRIDE_APPLY",
            settings: e
        })
    },
    clearSettingsOverride() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        o.h.dispatch({
            type: "USER_SETTINGS_OVERRIDE_CLEAR",
            settings: t
        })
    },
    updateLocale: e => f.wc.updateAsync("localization", t => {
        t.locale = i.hU.create({
            value: e
        })
    }, f.Sb.INFREQUENT_USER_ACTION),
    updateTheme(e) {
        o.h.dispatch({
            type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
            changes: {
                appearance: {
                    settings: {
                        theme: e
                    }
                }
            }
        }), l.A.shouldSync("appearance") && f.wc.updateAsync("appearance", t => {
            t.theme = m(e)
        }, f.Sb.INFREQUENT_USER_ACTION)
    }
}