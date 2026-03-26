/** chunk id: 131935 params = (module,exports,require) **/
i.d(t, {
    A: () => l
});
var n = i(559633),
    o = i(430452),
    a = i(954571);
async function l(e, t) {
    let {
        rating: i,
        category: l,
        reasonCode: r,
        reasonDescription: s,
        variant: _,
        feedback: d,
        analyticsData: u
    } = t, c = o.Ay.getSettings(), m = o.Ay.getInputDeviceId(), b = o.Ay.getInputDevices()[m], p = o.Ay.getOutputDeviceId(), g = o.Ay.getOutputDevices()[p], v = o.Ay.getVideoDeviceId(), f = o.Ay.getVideoDevices()[v], O = o.Ay.getNoiseCancellation(), y = o.Ay.getMediaEngine().getAudioSubsystem(), A = o.Ay.getMediaEngine().getAudioLayer(), E = await n.A.getKrispModel(), {
        output_audio_route_type: F,
        ...C
    } = u ?? {};
    a.default.track(e, {
        rating: i ?? "no response",
        category: l,
        reason_code: r,
        reason_description: s,
        reason_variant: _,
        feedback: d,
        audio_input_mode: c.mode,
        automatic_audio_input_sensitivity_enabled: c.modeOptions.autoThreshold,
        audio_input_sensitivity: c.modeOptions.threshold,
        vad_use_advanced_voice_activity: c.modeOptions.vadUseKrisp,
        echo_cancellation_enabled: c.echoCancellation,
        noise_suppression_enabled: c.noiseSuppression,
        automatic_gain_control_enabled: c.automaticGainControl,
        voice_output_volume: c.outputVolume,
        noise_cancellation_enabled: O,
        input_device_name: b?.name,
        output_device_name: g?.name,
        video_device_name: f?.name,
        audio_subsystem: y,
        audio_layer: A,
        automatic_audio_subsystem: c.automaticAudioSubsystem,
        krisp_nc_model: E,
        audio_output_mode: F,
        ...C
    })
}