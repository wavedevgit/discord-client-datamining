/** chunk id: 505417 params = (module,exports,require) **/
n.d(t, {
    l: () => l
});
var i = n(985018);

function l(e) {
    let {
        isVoiceChannel: t,
        isHubGuild: n,
        isOwnInvite: l,
        isGuest: r,
        isStage: a,
        isStream: s
    } = e;
    if (t)
        if (l)
            if (s) return i.intl.string(i.t.N85DCl);
            else if (a) return i.intl.string(i.t.TJQcNv);
    else if (r) return i.intl.string(i.t.mJyBir);
    else return i.intl.string(i.t.lxTgP9);
    else if (s) return i.intl.string(i.t.Mnvc3C);
    else if (a) return i.intl.string(i.t.FdPNr5);
    else if (r) return i.intl.string(i.t.f4gmrf);
    else return i.intl.string(i.t.H39rEY);
    return n ? l ? i.intl.string(i.t.UxmnHx) : i.intl.string(i.t.sigPEf) : l ? i.intl.string(i.t["oU/lsl"]) : i.intl.string(i.t.BoQUFf)
}