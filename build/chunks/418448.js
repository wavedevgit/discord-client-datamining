/** Chunk was on 47841 **/
/** chunk id: 418448, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    bN: () => b,
    jr: () => h,
    nx: () => f
}), n(896048), n(65821);
var r = n(73153),
    i = n(157559),
    l = n(198982),
    s = n(591552),
    a = n(961973),
    o = n(734057),
    c = n(403362),
    d = n(863694),
    u = n(107795),
    g = n(655943),
    m = n(539916),
    p = n(985018);

function f() {
    r.h.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET"
    })
}

function b(e) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
        channelId: e
    })
}
async function h(e) {
    let t = Array.from(d.A.editedDefaultChannelIds).filter(e => null != o.A.getChannel(e)),
        n = g.A.advancedMode,
        [f] = (0, a.ui)(e.id, [...t]),
        b = (0, a.G4)(e.id, t, g.A.editedOnboardingPrompts, a.VU);
    if (s.A.getEnabled(e.id) && (!n && f.length < m.Kd || n && b.length < m.Kd)) {
        if (i.A.show({
                title: p.intl.string(p.t.iLdiqY),
                body: p.intl.string(p.t.JOT74c)
            }), n) throw Error("Chattable channels with questions requirement not met");
        return
    }
    if (d.A.hasChanges()) {
        r.h.dispatch({
            type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT"
        });
        try {
            let i = n ? (0, u.xR)(e, {
                    ignoreDefaultPrompt: !0
                }) : null,
                l = null != i ? i.map(m.SA) : void 0;
            await (0, u.YN)(e.id, {
                default_channel_ids: t,
                prompts: l
            }), r.h.dispatch({
                type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
                guildId: e.id,
                channelIds: t
            }), null != i && r.h.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
                guildId: e.id,
                updates: {
                    prompts: i
                }
            })
        } catch (n) {
            var h;
            let {
                fieldName: e,
                error: t
            } = null != (h = new l.LG(n).getAnyErrorMessageAndField()) ? h : {};
            i.A.show({
                title: p.intl.string(p.t.iLdiqY),
                body: [e, t].filter(c.Vq).join(": ")
            }), r.h.dispatch({
                type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED"
            })
        }
    }
}