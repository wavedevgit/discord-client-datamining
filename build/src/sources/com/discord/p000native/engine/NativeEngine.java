package com.discord.p000native.engine;

import android.content.Context;
import co.discord.media_engine.CameraEnumeratorProvider;
import co.discord.media_engine.SharedEglBaseContext;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.EglBase;
import org.webrtc.VideoFrame;
@Metadata(d1 = {"\u0000¸\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0015\u0018\u0000 V2\u00020\u0001:\u0011UVWXYZ[\\]^_`abcdeB\u0015\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0002\u0010\u0006J!\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020\u000fH\u0086 J\u0006\u0010\u0010\u001a\u00020\u0011J\u0011\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u0013\u001a\u00020\u0014H\u0086 J\u0011\u0010\u0015\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020\u0016H\u0086 J\u0011\u0010\u0017\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020\u0018H\u0086 J\u0011\u0010\u0019\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020\u001aH\u0086 J\u0011\u0010\u001b\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020\u001cH\u0086 J!\u0010\u001d\u001a\u00020\u00112\u0006\u0010\u001e\u001a\u00020\f2\u0006\u0010\u001f\u001a\u00020\u00052\u0006\u0010\u000e\u001a\u00020 H\u0086 J\t\u0010!\u001a\u00020\u0005H\u0086 J\u0011\u0010\"\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020#H\u0086 J\u0011\u0010$\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020%H\u0086 J)\u0010&\u001a\u00020\b2\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010'\u001a\u00020(2\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010)\u001a\u00020\u0014H\u0082 J\t\u0010*\u001a\u00020\u0011H\u0082 J\u0019\u0010+\u001a\u00020\u00112\u0006\u0010,\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020-H\u0086 J\u0011\u0010.\u001a\u00020\u00112\u0006\u0010\u0013\u001a\u00020\u0014H\u0086 J\u0011\u0010/\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u000200H\u0086 J\u0011\u00101\u001a\u00020\u00112\u0006\u0010\u0013\u001a\u00020\u0014H\u0086 J\u0011\u00102\u001a\u00020\u00112\u0006\u00103\u001a\u00020\u0014H\u0086 J\u0011\u00104\u001a\u00020\u00112\u0006\u00105\u001a\u00020\fH\u0086 J\u0011\u00106\u001a\u00020\u00112\u0006\u00105\u001a\u00020\u0005H\u0086 J\u0011\u00107\u001a\u00020\u00112\u0006\u00108\u001a\u000209H\u0086 J\u0011\u0010:\u001a\u00020\u00112\u0006\u0010;\u001a\u000209H\u0086 J\u0011\u0010<\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020=H\u0086 J\u0011\u0010>\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020?H\u0086 J\u0011\u0010@\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020AH\u0086 J\u0011\u0010B\u001a\u00020\u00112\u0006\u00105\u001a\u00020\fH\u0086 J\u0011\u0010C\u001a\u00020\u00112\u0006\u00105\u001a\u00020\u0005H\u0086 J\u0011\u0010D\u001a\u00020\u00112\u0006\u00108\u001a\u000209H\u0086 J\u0011\u0010E\u001a\u00020\u00112\u0006\u0010F\u001a\u00020\u0014H\u0086 J\u0011\u0010G\u001a\u00020\u00112\u0006\u0010H\u001a\u00020\fH\u0086 J\u0011\u0010I\u001a\u00020\u00112\u0006\u00105\u001a\u00020\fH\u0086 J\u0011\u0010J\u001a\u00020\u00112\u0006\u00105\u001a\u00020\u0005H\u0086 J\u001b\u0010K\u001a\u00020\u00112\u0006\u0010L\u001a\u00020\f2\b\u0010\u000e\u001a\u0004\u0018\u00010MH\u0086 J\u0019\u0010N\u001a\u00020\u00112\u0006\u0010H\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020OH\u0086 J\u0011\u0010P\u001a\u00020\u00112\u0006\u0010\u000e\u001a\u00020QH\u0086 J\u0019\u0010R\u001a\u00020\u00112\u0006\u0010S\u001a\u00020\f2\u0006\u0010T\u001a\u00020\fH\u0086 R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006f"}, d2 = {"Lcom/discord/native/engine/NativeEngine;", "", "context", "Landroid/content/Context;", "logLevel", "", "(Landroid/content/Context;I)V", "nativeInstance", "", "createVoiceConnection", "Lcom/discord/native/engine/NativeConnection;", "userId", "", "connectionOptionsJSON", "callback", "Lcom/discord/native/engine/NativeEngine$ConnectToServerCallback;", "dispose", "", "enableBuiltInAEC", "enable", "", "getAudioSubsystem", "Lcom/discord/native/engine/NativeEngine$GetAudioSubsystemCallback;", "getCodecCapabilities", "Lcom/discord/native/engine/NativeEngine$GetCodecCapabilitiesCallback;", "getCodecSurvey", "Lcom/discord/native/engine/NativeEngine$GetCodecSurveyCallback;", "getInputDevices", "Lcom/discord/native/engine/NativeEngine$GetAudioInputDevicesCallback;", "getMLSSigningKeyB64", "sessionId", "signatureVersion", "Lcom/discord/native/engine/NativeEngine$MLSSigningKeyCallback;", "getMaxSupportedProtocolVersion", "getOutputDevices", "Lcom/discord/native/engine/NativeEngine$GetAudioOutputDevicesCallback;", "getVideoInputDevices", "Lcom/discord/native/engine/NativeEngine$GetVideoInputDevicesCallback;", "nativeCreateInstance", "eglContext", "Lorg/webrtc/EglBase$Context;", "offloadAdmControls", "nativeDestroyInstance", "rankRtcRegions", "regionsWithIpsJSON", "Lcom/discord/native/engine/NativeEngine$GetRankedRtcRegionsCallback;", "setAudioInputEnabled", "setAudioInputInitializationCallback", "Lcom/discord/native/engine/NativeEngine$AudioInputInitializationCallback;", "setEmitVADLevel2", "setHasFullbandPerformance", "hasFullbandPerformance", "setInputDevice", "deviceIndex", "setInputDeviceIndex", "setInputVolume", "volume", "", "setNoInputThreshold", "threshold", "setOnDeviceChangeCallback", "Lcom/discord/native/engine/NativeEngine$DeviceChangeCallback;", "setOnNoInputCallback", "Lcom/discord/native/engine/NativeEngine$OnNoInputCallback;", "setOnVoiceCallback", "Lcom/discord/native/engine/NativeEngine$OnVoiceCallback;", "setOutputDevice", "setOutputDeviceIndex", "setOutputVolume", "setSidechainCompression", ViewProps.ENABLED, "setTransportOptions", "optionsJSON", "setVideoInputDevice", "setVideoInputDeviceIndex", "setVideoOutputSink", "streamIdentifier", "Lcom/discord/native/engine/NativeEngine$VideoFrameCallback;", "startLocalAudioRecording", "Lcom/discord/native/engine/NativeEngine$StartLocalAudioRecordingCallback;", "stopLocalAudioRecording", "Lcom/discord/native/engine/NativeEngine$StopLocalAudioRecordingCallback;", "updateFieldTrial", "key", "value", "AudioInputInitializationCallback", "Companion", "ConnectToServerCallback", "DeviceChangeCallback", "GetAudioInputDevicesCallback", "GetAudioOutputDevicesCallback", "GetAudioSubsystemCallback", "GetCodecCapabilitiesCallback", "GetCodecSurveyCallback", "GetRankedRtcRegionsCallback", "GetVideoInputDevicesCallback", "MLSSigningKeyCallback", "OnNoInputCallback", "OnVoiceCallback", "StartLocalAudioRecordingCallback", "StopLocalAudioRecordingCallback", "VideoFrameCallback", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* renamed from: com.discord.native.engine.NativeEngine  reason: invalid package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativeEngine {
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int LOGLEVEL_DEBUG = 1;
    public static final int LOGLEVEL_DEFAULT = 2;
    private final int logLevel;
    private final long nativeInstance;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeEngine$AudioInputInitializationCallback;", "", "onAudioInputInitialized", "", "info", "Lcom/discord/native/engine/AudioInputInitializationInfo;", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$AudioInputInitializationCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface AudioInputInitializationCallback {
        void onAudioInputInitialized(@NotNull AudioInputInitializationInfo audioInputInitializationInfo);
    }

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeEngine$Companion;", "", "()V", "LOGLEVEL_DEBUG", "", "LOGLEVEL_DEFAULT", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$Companion */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H&¨\u0006\b"}, d2 = {"Lcom/discord/native/engine/NativeEngine$ConnectToServerCallback;", "", "onConnectToServer", "", "info", "Lcom/discord/native/engine/ConnectionInfo;", "error", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$ConnectToServerCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface ConnectToServerCallback {
        void onConnectToServer(@NotNull ConnectionInfo connectionInfo, @NotNull String str);
    }

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J7\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\b0\u00052\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\n0\u0005H&¢\u0006\u0002\u0010\u000b¨\u0006\f"}, d2 = {"Lcom/discord/native/engine/NativeEngine$DeviceChangeCallback;", "", "onChange", "", "audioInputDevices", "", "Lcom/discord/native/engine/AudioInputDeviceDescription;", "audioOutputDevices", "Lcom/discord/native/engine/AudioOutputDeviceDescription;", "videoInputDevices", "Lcom/discord/native/engine/VideoInputDeviceDescription;", "([Lcom/discord/native/engine/AudioInputDeviceDescription;[Lcom/discord/native/engine/AudioOutputDeviceDescription;[Lcom/discord/native/engine/VideoInputDeviceDescription;)V", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$DeviceChangeCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface DeviceChangeCallback {
        void onChange(@NotNull AudioInputDeviceDescription[] audioInputDeviceDescriptionArr, @NotNull AudioOutputDeviceDescription[] audioOutputDeviceDescriptionArr, @NotNull VideoInputDeviceDescription[] videoInputDeviceDescriptionArr);
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u001b\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H&¢\u0006\u0002\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/native/engine/NativeEngine$GetAudioInputDevicesCallback;", "", "onDevices", "", "devices", "", "Lcom/discord/native/engine/AudioInputDeviceDescription;", "([Lcom/discord/native/engine/AudioInputDeviceDescription;)V", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$GetAudioInputDevicesCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface GetAudioInputDevicesCallback {
        void onDevices(@NotNull AudioInputDeviceDescription[] audioInputDeviceDescriptionArr);
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u001b\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H&¢\u0006\u0002\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/native/engine/NativeEngine$GetAudioOutputDevicesCallback;", "", "onDevices", "", "devices", "", "Lcom/discord/native/engine/AudioOutputDeviceDescription;", "([Lcom/discord/native/engine/AudioOutputDeviceDescription;)V", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$GetAudioOutputDevicesCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface GetAudioOutputDevicesCallback {
        void onDevices(@NotNull AudioOutputDeviceDescription[] audioOutputDeviceDescriptionArr);
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H&¨\u0006\u0007"}, d2 = {"Lcom/discord/native/engine/NativeEngine$GetAudioSubsystemCallback;", "", "onAudioSubsystem", "", "subsystem", "", "audioLayer", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$GetAudioSubsystemCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface GetAudioSubsystemCallback {
        void onAudioSubsystem(@NotNull String str, @NotNull String str2);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeEngine$GetCodecCapabilitiesCallback;", "", "onCodecCapabilities", "", "codecs", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$GetCodecCapabilitiesCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface GetCodecCapabilitiesCallback {
        void onCodecCapabilities(@NotNull String str);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeEngine$GetCodecSurveyCallback;", "", "onCodecSurvey", "", "jsonStr", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$GetCodecSurveyCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface GetCodecSurveyCallback {
        void onCodecSurvey(@NotNull String str);
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\u0010\u000e\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u001b\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H&¢\u0006\u0002\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/native/engine/NativeEngine$GetRankedRtcRegionsCallback;", "", "onRankedRtcRegions", "", "regions", "", "", "([Ljava/lang/String;)V", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$GetRankedRtcRegionsCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface GetRankedRtcRegionsCallback {
        void onRankedRtcRegions(@NotNull String[] strArr);
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u001b\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H&¢\u0006\u0002\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/native/engine/NativeEngine$GetVideoInputDevicesCallback;", "", "onDevices", "", "devices", "", "Lcom/discord/native/engine/VideoInputDeviceDescription;", "([Lcom/discord/native/engine/VideoInputDeviceDescription;)V", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$GetVideoInputDevicesCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface GetVideoInputDevicesCallback {
        void onDevices(@NotNull VideoInputDeviceDescription[] videoInputDeviceDescriptionArr);
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H&¨\u0006\u0007"}, d2 = {"Lcom/discord/native/engine/NativeEngine$MLSSigningKeyCallback;", "", "onMLSSigningKey", "", "key", "", "signature", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$MLSSigningKeyCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface MLSSigningKeyCallback {
        void onMLSSigningKey(@NotNull String str, @NotNull String str2);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeEngine$OnNoInputCallback;", "", "onNoInput", "", "input", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$OnNoInputCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface OnNoInputCallback {
        void onNoInput(boolean z10);
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\b\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H&¨\u0006\b"}, d2 = {"Lcom/discord/native/engine/NativeEngine$OnVoiceCallback;", "", "onVoice", "", "level", "", "speaking", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$OnVoiceCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface OnVoiceCallback {
        void onVoice(float f10, int i10);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeEngine$StartLocalAudioRecordingCallback;", "", "onStartLocalAudioRecording", "", "started", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$StartLocalAudioRecordingCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface StartLocalAudioRecordingCallback {
        void onStartLocalAudioRecording(boolean z10);
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H&¨\u0006\b"}, d2 = {"Lcom/discord/native/engine/NativeEngine$StopLocalAudioRecordingCallback;", "", "onStopLocalAudioRecording", "", "fileName", "", "durationMs", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$StopLocalAudioRecordingCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface StopLocalAudioRecordingCallback {
        void onStopLocalAudioRecording(@NotNull String str, int i10);
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0003H&¨\u0006\u0007"}, d2 = {"Lcom/discord/native/engine/NativeEngine$VideoFrameCallback;", "", "onFrame", "", "frame", "Lorg/webrtc/VideoFrame;", "mirror", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeEngine$VideoFrameCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface VideoFrameCallback {
        boolean onFrame(@NotNull VideoFrame videoFrame, boolean z10);
    }

    static {
        System.loadLibrary("discord");
    }

    public NativeEngine(@NotNull Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.logLevel = i10;
        Context applicationContext = context.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
        CameraEnumeratorProvider.maybeInit(applicationContext);
        Context applicationContext2 = context.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext2, "getApplicationContext(...)");
        EglBase.Context eglContext = SharedEglBaseContext.getEglContext();
        Intrinsics.checkNotNullExpressionValue(eglContext, "getEglContext(...)");
        this.nativeInstance = nativeCreateInstance(applicationContext2, eglContext, i10, context.getSharedPreferences("MediaEngine", 0).getBoolean("offloadAdmControls", false));
    }

    private final native long nativeCreateInstance(Context context, EglBase.Context context2, int i10, boolean z10);

    private final native void nativeDestroyInstance();

    @NotNull
    public final native NativeConnection createVoiceConnection(@NotNull String str, @NotNull String str2, @NotNull ConnectToServerCallback connectToServerCallback);

    public final void dispose() {
        nativeDestroyInstance();
    }

    public final native void enableBuiltInAEC(boolean z10);

    public final native void getAudioSubsystem(@NotNull GetAudioSubsystemCallback getAudioSubsystemCallback);

    public final native void getCodecCapabilities(@NotNull GetCodecCapabilitiesCallback getCodecCapabilitiesCallback);

    public final native void getCodecSurvey(@NotNull GetCodecSurveyCallback getCodecSurveyCallback);

    public final native void getInputDevices(@NotNull GetAudioInputDevicesCallback getAudioInputDevicesCallback);

    public final native void getMLSSigningKeyB64(@NotNull String str, int i10, @NotNull MLSSigningKeyCallback mLSSigningKeyCallback);

    public final native int getMaxSupportedProtocolVersion();

    public final native void getOutputDevices(@NotNull GetAudioOutputDevicesCallback getAudioOutputDevicesCallback);

    public final native void getVideoInputDevices(@NotNull GetVideoInputDevicesCallback getVideoInputDevicesCallback);

    public final native void rankRtcRegions(@NotNull String str, @NotNull GetRankedRtcRegionsCallback getRankedRtcRegionsCallback);

    public final native void setAudioInputEnabled(boolean z10);

    public final native void setAudioInputInitializationCallback(@NotNull AudioInputInitializationCallback audioInputInitializationCallback);

    public final native void setEmitVADLevel2(boolean z10);

    public final native void setHasFullbandPerformance(boolean z10);

    public final native void setInputDevice(@NotNull String str);

    public final native void setInputDeviceIndex(int i10);

    public final native void setInputVolume(float f10);

    public final native void setNoInputThreshold(float f10);

    public final native void setOnDeviceChangeCallback(@NotNull DeviceChangeCallback deviceChangeCallback);

    public final native void setOnNoInputCallback(@NotNull OnNoInputCallback onNoInputCallback);

    public final native void setOnVoiceCallback(@NotNull OnVoiceCallback onVoiceCallback);

    public final native void setOutputDevice(@NotNull String str);

    public final native void setOutputDeviceIndex(int i10);

    public final native void setOutputVolume(float f10);

    public final native void setSidechainCompression(boolean z10);

    public final native void setTransportOptions(@NotNull String str);

    public final native void setVideoInputDevice(@NotNull String str);

    public final native void setVideoInputDeviceIndex(int i10);

    public final native void setVideoOutputSink(@NotNull String str, VideoFrameCallback videoFrameCallback);

    public final native void startLocalAudioRecording(@NotNull String str, @NotNull StartLocalAudioRecordingCallback startLocalAudioRecordingCallback);

    public final native void stopLocalAudioRecording(@NotNull StopLocalAudioRecordingCallback stopLocalAudioRecordingCallback);

    public final native void updateFieldTrial(@NotNull String str, @NotNull String str2);
}
