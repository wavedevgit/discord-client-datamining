package com.discord.p000native.engine;

import com.facebook.react.modules.appstate.AppStateModule;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
import org.webrtc.VideoCapturer;
@Metadata(d1 = {"\u0000¬\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u0007\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0014\u0018\u00002\u00020\u0001:\u000fdefghijklmnopqrB\u0005¢\u0006\u0002\u0010\u0002J!\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\bH\u0086 J\u0011\u0010\u000b\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\rH\u0086 J\u0006\u0010\u000e\u001a\u00020\u0006J\u0011\u0010\u000f\u001a\u00020\u00062\u0006\u0010\u0010\u001a\u00020\bH\u0086 J\t\u0010\u0011\u001a\u00020\u0006H\u0086 J\u0011\u0010\u0012\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020\u0014H\u0086 J\u0019\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\b2\u0006\u0010\u0013\u001a\u00020\u0017H\u0086 J\u0011\u0010\u0018\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020\u0019H\u0086 J!\u0010\u001a\u001a\u00020\u00062\u0006\u0010\u001b\u001a\u00020\b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\u001cH\u0086 J\u0011\u0010\u001d\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020\u0017H\u0086 J\u0011\u0010\u001e\u001a\u00020\u00062\u0006\u0010\u001f\u001a\u00020\rH\u0086 J\t\u0010 \u001a\u00020\u0006H\u0082 J!\u0010!\u001a\u00020\u00062\u0006\u0010\u0010\u001a\u00020\b2\u0006\u0010\"\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020#H\u0086 J!\u0010$\u001a\u00020\u00062\u0006\u0010%\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\b2\u0006\u0010&\u001a\u00020\rH\u0086 J!\u0010'\u001a\u00020\u00062\u0006\u0010\u0010\u001a\u00020\b2\u0006\u0010(\u001a\u00020\b2\u0006\u0010\u0013\u001a\u00020)H\u0086 J\u0019\u0010*\u001a\u00020\u00062\u0006\u0010+\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020,H\u0086 J!\u0010-\u001a\u00020\u00062\u0006\u0010\u0010\u001a\u00020\b2\u0006\u0010.\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020/H\u0086 J!\u00100\u001a\u00020\u00062\u0006\u00101\u001a\u00020\r2\u0006\u00102\u001a\u0002032\u0006\u00104\u001a\u00020\rH\u0086 J\u0019\u00105\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\r2\u0006\u00106\u001a\u000203H\u0086 J!\u00107\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\r2\u0006\u00108\u001a\u0002092\u0006\u0010:\u001a\u000209H\u0086 J\u0019\u0010;\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\r2\u0006\u0010<\u001a\u000209H\u0086 J\u0011\u0010=\u001a\u00020\u00062\u0006\u0010>\u001a\u00020\bH\u0086 J\u0011\u0010?\u001a\u00020\u00062\u0006\u0010@\u001a\u000209H\u0086 J\u0011\u0010A\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020BH\u0086 J\u0011\u0010C\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020DH\u0086 J\u0011\u0010E\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020FH\u0086 J\u0011\u0010G\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020HH\u0086 J\u0011\u0010I\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020JH\u0086 J\u0011\u0010K\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020LH\u0086 J!\u0010M\u001a\u00020\u00062\u0006\u0010N\u001a\u0002032\u0006\u0010O\u001a\u0002032\u0006\u0010P\u001a\u000203H\u0086 J\u0011\u0010Q\u001a\u00020\u00062\u0006\u0010R\u001a\u00020\bH\u0086 J\u0011\u0010S\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020TH\u0086 J\u0011\u0010U\u001a\u00020\u00062\u0006\u0010V\u001a\u000203H\u0086 J\u0011\u0010W\u001a\u00020\u00062\u0006\u0010X\u001a\u000203H\u0086 J\u0011\u0010Y\u001a\u00020\u00062\u0006\u0010Z\u001a\u00020\rH\u0086 J\u0011\u0010[\u001a\u00020\u00062\u0006\u0010\\\u001a\u000203H\u0086 J\u0019\u0010]\u001a\u00020\u00062\u0006\u0010^\u001a\u00020_2\u0006\u0010`\u001a\u00020\u0004H\u0086 J\t\u0010a\u001a\u00020\u0006H\u0086 J\u0011\u0010b\u001a\u00020\u00062\u0006\u0010c\u001a\u00020\rH\u0086 R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082D¢\u0006\u0002\n\u0000¨\u0006s"}, d2 = {"Lcom/discord/native/engine/NativeConnection;", "", "()V", "nativeInstance", "", "configureConnectionRetries", "", "baseDelayMs", "", "maxDelayMs", "maxAttempts", "destroyUser", "userId", "", "dispose", "executeSecureFramesTransition", "transitionId", "fastUdpReconnect", "getEncryptionModes", "callback", "Lcom/discord/native/engine/NativeConnection$GetEncryptionModesCallback;", "getFilteredStats", ViewProps.FILTER, "Lcom/discord/native/engine/NativeConnection$GetStatsCallback;", "getMLSKeyPackageB64", "Lcom/discord/native/engine/NativeConnection$MLSKeyPackageCallback;", "getMLSPairwiseFingerprintB64", "version", "Lcom/discord/native/engine/NativeConnection$MLSPairwiseFingerprintCallback;", "getStats", "mergeUsers", "usersJSON", "nativeDestroyInstance", "prepareMLSCommitTransitionB64", "commit", "Lcom/discord/native/engine/NativeConnection$MLSCommitTransitionCallback;", "prepareSecureFramesEpoch", "epoch", "groupId", "prepareSecureFramesTransition", "protocolVersion", "Lcom/discord/native/engine/NativeConnection$SecureFramesTransitionReadyCallback;", "processMLSProposalsB64", "proposals", "Lcom/discord/native/engine/NativeConnection$MLSProcessProposalsCallback;", "processMLSWelcomeB64", "welcome", "Lcom/discord/native/engine/NativeConnection$MLSWelcomeCallback;", "setDesktopSource", "stringId", "useVideoHook", "", "type", "setLocalMute", "mute", "setLocalPan", ViewProps.LEFT, "", ViewProps.RIGHT, "setLocalVolume", "volume", "setMinimumOutputDelay", "delay", "setNoInputThreshold", "threshold", "setOnFirstFrameCallback", "Lcom/discord/native/engine/NativeConnection$OnFirstFrameCallback;", "setOnMLSFailureCallback", "Lcom/discord/native/engine/NativeConnection$MLSFailureCallback;", "setOnPingCallback", "Lcom/discord/native/engine/NativeConnection$OnPingCallback;", "setOnPingTimeoutCallback", "Lcom/discord/native/engine/NativeConnection$OnPingTimeoutCallback;", "setOnSpeakingCallback", "Lcom/discord/native/engine/NativeConnection$OnSpeakingCallback;", "setOnVideoCallback", "Lcom/discord/native/engine/NativeConnection$OnVideoCallback;", "setPTTActive", AppStateModule.APP_STATE_ACTIVE, "priority", "muteOverride", "setPingInterval", "pingInterval", "setSecureFramesStateUpdateCallback", "Lcom/discord/native/engine/NativeConnection$SecureFramesStateUpdateCallback;", "setSelfDeafen", "deafened", "setSelfMute", "muted", "setTransportOptions", "optionsJSON", "setVideoBroadcast", "broadcasting", "startBroadcast", "capturer", "Lorg/webrtc/VideoCapturer;", "soundshareNativeInstance", "stopBroadcast", "updateMLSExternalSenderB64", "externalSenderB64", "GetEncryptionModesCallback", "GetStatsCallback", "MLSCommitTransitionCallback", "MLSFailureCallback", "MLSKeyPackageCallback", "MLSPairwiseFingerprintCallback", "MLSProcessProposalsCallback", "MLSWelcomeCallback", "OnFirstFrameCallback", "OnPingCallback", "OnPingTimeoutCallback", "OnSpeakingCallback", "OnVideoCallback", "SecureFramesStateUpdateCallback", "SecureFramesTransitionReadyCallback", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* renamed from: com.discord.native.engine.NativeConnection  reason: invalid package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativeConnection {
    private final long nativeInstance;

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\u0010\u000e\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u001b\u0010\u0002\u001a\u00020\u00032\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H&¢\u0006\u0002\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/discord/native/engine/NativeConnection$GetEncryptionModesCallback;", "", "onEncryptionModes", "", "modes", "", "", "([Ljava/lang/String;)V", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$GetEncryptionModesCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface GetEncryptionModesCallback {
        void onEncryptionModes(@NotNull String[] strArr);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeConnection$GetStatsCallback;", "", "onStats", "", "stats", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$GetStatsCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface GetStatsCallback {
        void onStats(@NotNull String str);
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J \u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH&¨\u0006\n"}, d2 = {"Lcom/discord/native/engine/NativeConnection$MLSCommitTransitionCallback;", "", "onMLSProcessedCommit", "", "processedCommit", "", "protocolVersion", "", "rosterChange", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$MLSCommitTransitionCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface MLSCommitTransitionCallback {
        void onMLSProcessedCommit(boolean z10, int i10, @NotNull String str);
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0018\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0005H&¨\u0006\u0007"}, d2 = {"Lcom/discord/native/engine/NativeConnection$MLSFailureCallback;", "", "onMLSFailureCallback", "", "source", "", "reason", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$MLSFailureCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface MLSFailureCallback {
        void onMLSFailureCallback(@NotNull String str, @NotNull String str2);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeConnection$MLSKeyPackageCallback;", "", "onMLSKeyPackage", "", "keyPackageB64", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$MLSKeyPackageCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface MLSKeyPackageCallback {
        void onMLSKeyPackage(@NotNull String str);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeConnection$MLSPairwiseFingerprintCallback;", "", "onMLSPairwiseFingerprint", "", "fingerprintB64", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$MLSPairwiseFingerprintCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface MLSPairwiseFingerprintCallback {
        void onMLSPairwiseFingerprint(@NotNull String str);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeConnection$MLSProcessProposalsCallback;", "", "onMLSCommitWelcome", "", "commitWelcome", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$MLSProcessProposalsCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface MLSProcessProposalsCallback {
        void onMLSCommitWelcome(@NotNull String str);
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J \u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH&¨\u0006\n"}, d2 = {"Lcom/discord/native/engine/NativeConnection$MLSWelcomeCallback;", "", "onMLSProcessedWelcome", "", "joinedGroup", "", "protocolVersion", "", "rosterChange", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$MLSWelcomeCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface MLSWelcomeCallback {
        void onMLSProcessedWelcome(boolean z10, int i10, @NotNull String str);
    }

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\bæ\u0080\u0001\u0018\u00002\u00020\u0001J \u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u0005H&¨\u0006\t"}, d2 = {"Lcom/discord/native/engine/NativeConnection$OnFirstFrameCallback;", "", "onFirstFrame", "", "userId", "", "videoSsrc", "", "streamId", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$OnFirstFrameCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface OnFirstFrameCallback {
        void onFirstFrame(@NotNull String str, long j10, @NotNull String str2);
    }

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\bæ\u0080\u0001\u0018\u00002\u00020\u0001J(\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00052\u0006\u0010\t\u001a\u00020\u0005H&¨\u0006\n"}, d2 = {"Lcom/discord/native/engine/NativeConnection$OnPingCallback;", "", "onPing", "", "ping", "", "server", "", "port", "seq", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$OnPingCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface OnPingCallback {
        void onPing(int i10, @NotNull String str, int i11, int i12);
    }

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\bæ\u0080\u0001\u0018\u00002\u00020\u0001J(\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\u0007H&¨\u0006\n"}, d2 = {"Lcom/discord/native/engine/NativeConnection$OnPingTimeoutCallback;", "", "onPingTimeout", "", "server", "", "port", "", "seq", "timeout", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$OnPingTimeoutCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface OnPingTimeoutCallback {
        void onPingTimeout(@NotNull String str, int i10, int i11, int i12);
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0007\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J \u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH&¨\u0006\n"}, d2 = {"Lcom/discord/native/engine/NativeConnection$OnSpeakingCallback;", "", "onSpeaking", "", "userId", "", "speakingFlags", "", "voiceDb", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$OnSpeakingCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface OnSpeakingCallback {
        void onSpeaking(@NotNull String str, int i10, float f10);
    }

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\bæ\u0080\u0001\u0018\u00002\u00020\u0001J(\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00052\u0006\u0010\t\u001a\u00020\u0005H&¨\u0006\n"}, d2 = {"Lcom/discord/native/engine/NativeConnection$OnVideoCallback;", "", "onVideo", "", "userId", "", "ssrc", "", "streamId", "videoStreamParametersJson", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$OnVideoCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface OnVideoCallback {
        void onVideo(@NotNull String str, long j10, @NotNull String str2, @NotNull String str3);
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&¨\u0006\u0006"}, d2 = {"Lcom/discord/native/engine/NativeConnection$SecureFramesStateUpdateCallback;", "", "onSecureFramesStateUpdateCallback", "", "stateUpdateJSON", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$SecureFramesStateUpdateCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface SecureFramesStateUpdateCallback {
        void onSecureFramesStateUpdateCallback(@NotNull String str);
    }

    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\bæ\u0080\u0001\u0018\u00002\u00020\u0001J\b\u0010\u0002\u001a\u00020\u0003H&¨\u0006\u0004"}, d2 = {"Lcom/discord/native/engine/NativeConnection$SecureFramesTransitionReadyCallback;", "", "onTransitionReady", "", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* renamed from: com.discord.native.engine.NativeConnection$SecureFramesTransitionReadyCallback */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface SecureFramesTransitionReadyCallback {
        void onTransitionReady();
    }

    private final native void nativeDestroyInstance();

    public final native void configureConnectionRetries(int i10, int i11, int i12);

    public final native void destroyUser(@NotNull String str);

    public final void dispose() {
        nativeDestroyInstance();
    }

    public final native void executeSecureFramesTransition(int i10);

    public final native void fastUdpReconnect();

    public final native void getEncryptionModes(@NotNull GetEncryptionModesCallback getEncryptionModesCallback);

    public final native void getFilteredStats(int i10, @NotNull GetStatsCallback getStatsCallback);

    public final native void getMLSKeyPackageB64(@NotNull MLSKeyPackageCallback mLSKeyPackageCallback);

    public final native void getMLSPairwiseFingerprintB64(int i10, @NotNull String str, @NotNull MLSPairwiseFingerprintCallback mLSPairwiseFingerprintCallback);

    public final native void getStats(@NotNull GetStatsCallback getStatsCallback);

    public final native void mergeUsers(@NotNull String str);

    public final native void prepareMLSCommitTransitionB64(int i10, @NotNull String str, @NotNull MLSCommitTransitionCallback mLSCommitTransitionCallback);

    public final native void prepareSecureFramesEpoch(@NotNull String str, int i10, @NotNull String str2);

    public final native void prepareSecureFramesTransition(int i10, int i11, @NotNull SecureFramesTransitionReadyCallback secureFramesTransitionReadyCallback);

    public final native void processMLSProposalsB64(@NotNull String str, @NotNull MLSProcessProposalsCallback mLSProcessProposalsCallback);

    public final native void processMLSWelcomeB64(int i10, @NotNull String str, @NotNull MLSWelcomeCallback mLSWelcomeCallback);

    public final native void setDesktopSource(@NotNull String str, boolean z10, @NotNull String str2);

    public final native void setLocalMute(@NotNull String str, boolean z10);

    public final native void setLocalPan(@NotNull String str, float f10, float f11);

    public final native void setLocalVolume(@NotNull String str, float f10);

    public final native void setMinimumOutputDelay(int i10);

    public final native void setNoInputThreshold(float f10);

    public final native void setOnFirstFrameCallback(@NotNull OnFirstFrameCallback onFirstFrameCallback);

    public final native void setOnMLSFailureCallback(@NotNull MLSFailureCallback mLSFailureCallback);

    public final native void setOnPingCallback(@NotNull OnPingCallback onPingCallback);

    public final native void setOnPingTimeoutCallback(@NotNull OnPingTimeoutCallback onPingTimeoutCallback);

    public final native void setOnSpeakingCallback(@NotNull OnSpeakingCallback onSpeakingCallback);

    public final native void setOnVideoCallback(@NotNull OnVideoCallback onVideoCallback);

    public final native void setPTTActive(boolean z10, boolean z11, boolean z12);

    public final native void setPingInterval(int i10);

    public final native void setSecureFramesStateUpdateCallback(@NotNull SecureFramesStateUpdateCallback secureFramesStateUpdateCallback);

    public final native void setSelfDeafen(boolean z10);

    public final native void setSelfMute(boolean z10);

    public final native void setTransportOptions(@NotNull String str);

    public final native void setVideoBroadcast(boolean z10);

    public final native void startBroadcast(@NotNull VideoCapturer videoCapturer, long j10);

    public final native void stopBroadcast();

    public final native void updateMLSExternalSenderB64(@NotNull String str);
}
