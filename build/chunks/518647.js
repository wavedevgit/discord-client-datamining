/** chunk id: 518647 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(73153),
    l = n(272355),
    r = n(961350),
    a = n(430452);
class s extends l.A {
    _initialize() {
        __OVERLAY__ || (i.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), i.h.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), i.h.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), i.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
    }
    _terminate() {
        __OVERLAY__ || (i.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), i.h.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), i.h.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), i.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
    }
    _playSound = function(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && arguments[2], arguments.length > 3 && arguments[3]
    };
    _stopAndClearSounds = () => {};
    _handleToggleSelfDeafened = () => {
        a.Ay.isDeaf() && this._stopAndClearSounds()
    };
    _handleSoundboardSoundReceived = e => {
        let {
            soundId: t,
            soundVolume: n,
            userId: i,
            channelId: l
        } = e;
        if (null != t && i !== r.default.getId()) return this._playSound(t, n, i, l)
    };
    _handleSoundboardSoundPlayLocally = e => {
        let {
            sound: t,
            channelId: n
        } = e, i = r.default.getId();
        return this._playSound(t.soundId, t.volume, i, n)
    };
    _handleVoiceChannelSelect = () => {
        this._stopAndClearSounds()
    }
}