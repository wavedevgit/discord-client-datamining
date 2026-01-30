package com.discord.media.engine;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.media.projection.MediaProjectionManager;
import com.discord.codegen.NativeMediaEngineModuleSpec;
import com.discord.media.engine.types.Debug;
import com.discord.media.engine.video.events.ActiveSinksChangeEvent;
import com.discord.media.engine.video.events.AudioInputInitializedEvent;
import com.discord.media.engine.video.events.DeviceChangedEvent;
import com.discord.media.engine.video.events.FirstFrameCallbackEvent;
import com.discord.media.engine.video.events.MlsFailureCallbackEvent;
import com.discord.media.engine.video.events.NoInputCallbackEvent;
import com.discord.media.engine.video.events.OnBroadcastRequestedEvent;
import com.discord.media.engine.video.events.OnBroadcastThumbnailEvent;
import com.discord.media.engine.video.events.OnVideoCallbackEvent;
import com.discord.media.engine.video.events.OnVoiceEvent;
import com.discord.media.engine.video.events.PingCallbackEvent;
import com.discord.media.engine.video.events.PingTimeoutCallbackEvent;
import com.discord.media.engine.video.events.SecureFramesStateUpdateCallbackEvent;
import com.discord.media.engine.video.events.UserSpeakingEvent;
import com.discord.misc.utilities.activity.ActivityUtilities;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.modules.appstate.AppStateModule;
import com.facebook.react.uimanager.ViewProps;
import gs.m1;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CompletableDeferred;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0092\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\u0010$\n\u0002\bM\u0018\u0000 ¨\u00012\u00020\u0001:\u0002¨\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\u0011\u001a\u00020\u0010H\u0082@¢\u0006\u0002\u0010\u0012J\b\u0010!\u001a\u00020\"H\u0016J\b\u0010#\u001a\u00020\"H\u0016J\u0016\u0010$\u001a\u0010\u0012\u0004\u0012\u00020&\u0012\u0006\u0012\u0004\u0018\u00010'0%H\u0014J\b\u0010(\u001a\u00020\"H\u0016J \u0010)\u001a\u00020\"2\u0006\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020+2\u0006\u0010-\u001a\u00020+H\u0016J\b\u0010.\u001a\u00020\"H\u0016J\u0018\u0010/\u001a\u00020\"2\u0006\u00100\u001a\u00020+2\u0006\u00101\u001a\u00020&H\u0016J\u0010\u00102\u001a\u00020\"2\u0006\u00103\u001a\u000204H\u0016J\u0010\u00105\u001a\u00020\"2\u0006\u00106\u001a\u00020+H\u0016J\u0010\u00107\u001a\u00020\"2\u0006\u00106\u001a\u00020+H\u0016J\u0010\u00108\u001a\u00020\"2\u0006\u00109\u001a\u00020:H\u0016J\u0010\u0010;\u001a\u00020\"2\u0006\u0010<\u001a\u00020=H\u0016J\u0010\u0010>\u001a\u00020\"2\u0006\u0010?\u001a\u00020+H\u0016J\u0010\u0010@\u001a\u00020\"2\u0006\u0010A\u001a\u00020&H\u0016J\u0010\u0010B\u001a\u00020\"2\u0006\u0010<\u001a\u00020=H\u0016J\u0010\u0010C\u001a\u00020\"2\u0006\u0010?\u001a\u00020+H\u0016J\u0010\u0010D\u001a\u00020\"2\u0006\u0010A\u001a\u00020&H\u0016J\u0010\u0010E\u001a\u00020\"2\u0006\u0010<\u001a\u00020=H\u0016J\u0010\u0010F\u001a\u00020\"2\u0006\u0010?\u001a\u00020+H\u0016J\u0010\u0010G\u001a\u00020\"2\u0006\u0010A\u001a\u00020&H\u0016J\u0010\u0010H\u001a\u00020\"2\u0006\u0010I\u001a\u00020+H\u0016J\u0010\u0010J\u001a\u00020\"2\u0006\u0010<\u001a\u00020=H\u0016J\u0010\u0010K\u001a\u00020\"2\u0006\u0010<\u001a\u00020=H\u0016J\u0010\u0010L\u001a\u00020\"2\u0006\u0010<\u001a\u00020=H\u0016J\u0018\u0010M\u001a\u00020\"2\u0006\u0010N\u001a\u00020O2\u0006\u0010<\u001a\u00020=H\u0016J\u0018\u0010P\u001a\u00020\"2\u0006\u00103\u001a\u0002042\u0006\u0010<\u001a\u00020=H\u0016J\u0010\u0010Q\u001a\u00020\"2\u0006\u0010<\u001a\u00020=H\u0016J\u0010\u0010R\u001a\u00020\"2\u0006\u0010S\u001a\u00020:H\u0016J\u0010\u0010T\u001a\u00020\"2\u0006\u0010U\u001a\u00020\u0019H\u0002J(\u0010V\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010W\u001a\u00020&2\u0006\u0010X\u001a\u0002042\u0006\u0010<\u001a\u00020=H\u0016J(\u0010Y\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010W\u001a\u00020&2\u0006\u0010X\u001a\u0002042\u0006\u0010<\u001a\u00020=H\u0016JF\u0010Z\u001a\u00020\"2\u0006\u0010U\u001a\u00020\u00192\u0006\u0010W\u001a\u00020&2\u0006\u0010X\u001a\u0002042$\u0010<\u001a \u0012\u0004\u0012\u00020&\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020&\u0012\u0004\u0012\u00020'0\\\u0012\u0004\u0012\u00020\"0[H\u0002J\u0010\u0010]\u001a\u00020\"2\u0006\u0010U\u001a\u00020+H\u0016J(\u0010^\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010_\u001a\u00020+2\u0006\u0010`\u001a\u00020+2\u0006\u0010a\u001a\u00020+H\u0016J\u0018\u0010b\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010<\u001a\u00020=H\u0016J\u0018\u0010c\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u00103\u001a\u000204H\u0016J\u0018\u0010d\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010e\u001a\u00020OH\u0016J\u0018\u0010f\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010W\u001a\u00020&H\u0016J\u0018\u0010g\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010h\u001a\u00020:H\u0016J(\u0010i\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010W\u001a\u00020&2\u0006\u0010j\u001a\u00020+2\u0006\u0010k\u001a\u00020+H\u0016J \u0010l\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010W\u001a\u00020&2\u0006\u00106\u001a\u00020+H\u0016J \u0010m\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010W\u001a\u00020&2\u0006\u0010n\u001a\u00020:H\u0016J\u0010\u0010o\u001a\u00020\"2\u0006\u0010U\u001a\u00020+H\u0016J\u0018\u0010p\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010q\u001a\u00020:H\u0016J\u0018\u0010r\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010s\u001a\u00020:H\u0016J\u0018\u0010t\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010u\u001a\u00020+H\u0016J\u0018\u0010v\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010I\u001a\u00020+H\u0016J\u0010\u0010w\u001a\u00020\"2\u0006\u0010U\u001a\u00020+H\u0016J(\u0010x\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010y\u001a\u00020:2\u0006\u0010z\u001a\u00020:2\u0006\u0010{\u001a\u00020:H\u0016J\u0018\u0010|\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010<\u001a\u00020=H\u0016J\u0018\u0010}\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010~\u001a\u00020+H\u0016J!\u0010\u007f\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u0080\u0001\u001a\u00020+2\u0006\u0010<\u001a\u00020=H\u0016J+\u0010\u0081\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u0082\u0001\u001a\u00020+2\u0007\u0010\u0083\u0001\u001a\u00020+2\u0006\u0010<\u001a\u00020=H\u0016J\u001a\u0010\u0084\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u0082\u0001\u001a\u00020+H\u0016J,\u0010\u0085\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u0086\u0001\u001a\u00020&2\u0007\u0010\u0082\u0001\u001a\u00020+2\u0007\u0010\u0087\u0001\u001a\u00020&H\u0016J\u0019\u0010\u0088\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0006\u0010<\u001a\u00020=H\u0016J\u001a\u0010\u0089\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u008a\u0001\u001a\u00020&H\u0016J\"\u0010\u008b\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u008c\u0001\u001a\u00020&2\u0006\u0010<\u001a\u00020=H\u0016J+\u0010\u008d\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u0082\u0001\u001a\u00020+2\u0007\u0010\u008e\u0001\u001a\u00020&2\u0006\u0010<\u001a\u00020=H\u0016J+\u0010\u008f\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u0082\u0001\u001a\u00020+2\u0007\u0010\u0090\u0001\u001a\u00020&2\u0006\u0010<\u001a\u00020=H\u0016J*\u0010\u0091\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u0092\u0001\u001a\u00020+2\u0006\u0010W\u001a\u00020&2\u0006\u0010<\u001a\u00020=H\u0016J#\u0010\u0093\u0001\u001a\u00020\"2\u0007\u0010\u0094\u0001\u001a\u00020&2\u0007\u0010\u0095\u0001\u001a\u00020+2\u0006\u0010<\u001a\u00020=H\u0016J\u0011\u0010\u0096\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+H\u0016J\u0011\u0010\u0097\u0001\u001a\u00020\"2\u0006\u0010S\u001a\u00020:H\u0016J\u001b\u0010\u0098\u0001\u001a\u00020\"2\u0007\u0010\u0099\u0001\u001a\u00020&2\u0007\u0010\u009a\u0001\u001a\u00020&H\u0016J,\u0010\u009b\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+2\u0007\u0010\u009c\u0001\u001a\u00020&2\u0007\u0010\u009d\u0001\u001a\u00020:2\u0007\u0010\u009e\u0001\u001a\u00020&H\u0016J\u0011\u0010\u009f\u0001\u001a\u00020\"2\u0006\u0010U\u001a\u00020+H\u0016J\u0012\u0010 \u0001\u001a\u00020\"2\u0007\u0010¡\u0001\u001a\u00020&H\u0016J\u0012\u0010¢\u0001\u001a\u00020\"2\u0007\u0010\u009e\u0001\u001a\u00020&H\u0016J\u0012\u0010£\u0001\u001a\u00020\"2\u0007\u0010¤\u0001\u001a\u00020+H\u0016J\u0012\u0010¥\u0001\u001a\u00020\"2\u0007\u0010¦\u0001\u001a\u00020:H\u0016J\u0011\u0010§\u0001\u001a\u00020\"2\u0006\u0010S\u001a\u00020:H\u0016R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0014\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\b\n\u0000\u0012\u0004\b\n\u0010\u000bR\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00100\u000fX\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0013\u001a\u00020\u0010X\u0086.¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\u0015\"\u0004\b\u0016\u0010\u0017R\u0012\u0010\u0018\u001a\u0004\u0018\u00010\u0019X\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u001aR\u0010\u0010\u001b\u001a\u0004\u0018\u00010\u001cX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001d\u001a\u00020\u001eX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u001f\u001a\u00020 X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006©\u0001"}, d2 = {"Lcom/discord/media/engine/MediaEngineModule;", "Lcom/discord/codegen/NativeMediaEngineModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "appScope", "Lkotlinx/coroutines/CoroutineScope;", "getAppScope$annotations", "()V", "startNs", "", "mediaEngineDeferred", "Lkotlinx/coroutines/CompletableDeferred;", "Lcom/discord/media/engine/MediaEngine;", "awaitMediaEngine", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "mediaEngine", "getMediaEngine", "()Lcom/discord/media/engine/MediaEngine;", "setMediaEngine", "(Lcom/discord/media/engine/MediaEngine;)V", "streamConnectionId", "", "Ljava/lang/Integer;", "streamPermissions", "Landroid/content/Intent;", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "activityEventListener", "Lcom/facebook/react/bridge/ActivityEventListener;", "initializeEngine", "", "invalidate", "getTypedExportedConstants", "", "", "", "startBroadcast", "setBroadcastThumbnailParams", "width", "", "height", "intervalSeconds", "stopBroadcast", "stopBroadcastWithError", "errorCode", "errorMessage", "setTransportOptions", "options", "Lcom/facebook/react/bridge/ReadableMap;", "setInputVolume", "volume", "setOutputVolume", "setEmitVADLevel2", "enable", "", "getInputDevices", "callback", "Lcom/facebook/react/bridge/Callback;", "setInputDevice", "deviceIndex", "setInputDeviceById", "deviceName", "getOutputDevices", "setOutputDevice", "setOutputDeviceById", "getVideoInputDevices", "setVideoInputDevice", "setVideoInputDeviceById", "setNoInputThreshold", "threshold", "getAudioSubsystem", "getCodecCapabilities", "getCodecSurvey", "rankRtcRegions", "regionsWithIps", "Lcom/facebook/react/bridge/ReadableArray;", "startLocalAudioRecording", "stopLocalAudioRecording", "setAudioInputEnabled", ViewProps.ENABLED, "addConnectionCallbacks", "connectionId", "createVoiceConnectionWithOptions", "userId", "connectionOptions", "createOwnStreamConnectionWithOptions", "createConnection", "Lkotlin/Function2;", "", "connectionInstanceDestroy", "connectionInstanceConfigureConnectionRetries", "baseDelayMs", "maxDelayMs", "maxAttempts", "connectionInstanceGetEncryptionModes", "connectionInstanceSetTransportOptions", "connectionInstanceMergeUsers", "users", "connectionInstanceDestroyUser", "connectionInstanceSetVideoBroadcast", "broadcasting", "connectionInstanceSetLocalPan", ViewProps.LEFT, ViewProps.RIGHT, "connectionInstanceSetLocalVolume", "connectionInstanceSetLocalMute", "mute", "connectionInstanceFastUdpReconnect", "connectionInstanceSetSelfMute", "muted", "connectionInstanceSetSelfDeafen", "deafened", "connectionInstanceSetMinimumOutputDelay", "delay", "connectionInstanceSetNoInputThreshold", "connectionInstanceTriggerOnVideoCallback", "connectionInstanceSetPTTActive", AppStateModule.APP_STATE_ACTIVE, "priority", "muteOverride", "connectionInstanceGetStats", "connectionInstanceSetPingInterval", "pingInterval", "connectionInstanceGetFilteredStats", ViewProps.FILTER, "connectionInstancePrepareSecureFramesTransition", "transitionId", "protocolVersion", "connectionInstanceExecuteSecureFramesTransition", "connectionInstancePrepareSecureFramesEpoch", "epoch", "groupId", "connectionInstanceGetMLSKeyPackageB64", "connectionInstanceUpdateMLSExternalSenderB64", "externalSenderB64", "connectionInstanceProcessMLSProposalsB64", "proposals", "connectionInstancePrepareMLSCommitTransitionB64", "commit", "connectionInstanceProcessMLSWelcomeB64", "welcome", "connectionInstanceGetMLSPairwiseFingerprintB64", "version", "getMLSSigningKeyB64", "sessionId", "signatureVersion", "connectionInstanceTriggerOnSpeakingCallback", "setSidechainCompression", "updateFieldTrial", "key", "value", "connectionInstanceSetDesktopSource", "stringId", "useVideoHook", "type", "connectionInstanceWasRemoteDisconnected", "setAVAudioSessionMode", "mode", "addListener", "removeListeners", "count", "setHasFullbandPerformance", "hasFullbandPerformance", "setOffloadAdmControls", "Companion", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMediaEngineModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaEngineModule.kt\ncom/discord/media/engine/MediaEngineModule\n+ 2 Debug.kt\ncom/discord/media/engine/types/Debug\n+ 3 SharedPreferences.kt\nandroidx/core/content/SharedPreferencesKt\n*L\n1#1,877:1\n65#2,7:878\n40#3,13:885\n*S KotlinDebug\n*F\n+ 1 MediaEngineModule.kt\ncom/discord/media/engine/MediaEngineModule\n*L\n71#1:878,7\n863#1:885,13\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaEngineModule extends NativeMediaEngineModuleSpec {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int START_SCREENSHARE_REQUEST_CODE = 420;
    @NotNull
    private static final String TAG = "MediaEngineModule";
    @NotNull
    private final ActivityEventListener activityEventListener;
    @NotNull
    private final CoroutineScope appScope;
    public MediaEngine mediaEngine;
    @NotNull
    private final CompletableDeferred mediaEngineDeferred;
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final ReactEvents reactEvents;
    private final long startNs;
    private Integer streamConnectionId;
    private Intent streamPermissions;

    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngineModule$1", f = "MediaEngineModule.kt", l = {}, m = "invokeSuspend")
    @SourceDebugExtension({"SMAP\nMediaEngineModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaEngineModule.kt\ncom/discord/media/engine/MediaEngineModule$1\n+ 2 Debug.kt\ncom/discord/media/engine/types/Debug\n*L\n1#1,877:1\n65#2,7:878\n*S KotlinDebug\n*F\n+ 1 MediaEngineModule.kt\ncom/discord/media/engine/MediaEngineModule$1\n*L\n64#1:878,7\n*E\n"})
    /* renamed from: com.discord.media.engine.MediaEngineModule$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class AnonymousClass1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        int label;

        AnonymousClass1(Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.label == 0) {
                kotlin.c.b(obj);
                MediaEngine mediaEngine = new MediaEngine(MediaEngineModule.this.getReactContext(), null, 2, null);
                MediaEngineModule.this.setMediaEngine(mediaEngine);
                Debug debug = Debug.INSTANCE;
                System.nanoTime();
                MediaEngineModule.this.mediaEngineDeferred.J0(mediaEngine);
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\b\u001a\u00020\t*\u00020\nH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"Lcom/discord/media/engine/MediaEngineModule$Companion;", "", "<init>", "()V", "TAG", "", "START_SCREENSHARE_REQUEST_CODE", "", "createScreenCaptureIntent", "Landroid/content/Intent;", "Landroid/content/Context;", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Intent createScreenCaptureIntent(Context context) {
            Object systemService = context.getSystemService("media_projection");
            Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.media.projection.MediaProjectionManager");
            Intent createScreenCaptureIntent = ((MediaProjectionManager) systemService).createScreenCaptureIntent();
            Intrinsics.checkNotNullExpressionValue(createScreenCaptureIntent, "createScreenCaptureIntent(...)");
            return createScreenCaptureIntent;
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngineModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        CoroutineScope a10 = kotlinx.coroutines.i.a(m1.b("AppSingleThread"));
        this.appScope = a10;
        this.startNs = System.nanoTime();
        this.mediaEngineDeferred = gs.q.b(null, 1, null);
        gs.i.d(a10, null, null, new AnonymousClass1(null), 3, null);
        Debug.INSTANCE.logDebugLoggingConfig();
        this.reactEvents = new ReactEvents(ir.v.a("no-input-callback", Reflection.getOrCreateKotlinClass(NoInputCallbackEvent.class)), ir.v.a("on-voice", Reflection.getOrCreateKotlinClass(OnVoiceEvent.class)), ir.v.a("device-changed", Reflection.getOrCreateKotlinClass(DeviceChangedEvent.class)), ir.v.a("audio-input-initialized", Reflection.getOrCreateKotlinClass(AudioInputInitializedEvent.class)), ir.v.a("on-broadcast-requested", Reflection.getOrCreateKotlinClass(OnBroadcastRequestedEvent.class)), ir.v.a("on-broadcast-thumbnail", Reflection.getOrCreateKotlinClass(OnBroadcastThumbnailEvent.class)), ir.v.a("user-speaking", Reflection.getOrCreateKotlinClass(UserSpeakingEvent.class)), ir.v.a("ping-callback", Reflection.getOrCreateKotlinClass(PingCallbackEvent.class)), ir.v.a("ping-timeout-callback", Reflection.getOrCreateKotlinClass(PingTimeoutCallbackEvent.class)), ir.v.a("on-video-callback", Reflection.getOrCreateKotlinClass(OnVideoCallbackEvent.class)), ir.v.a("active-sinks-change", Reflection.getOrCreateKotlinClass(ActiveSinksChangeEvent.class)), ir.v.a("on-first-frame-callback", Reflection.getOrCreateKotlinClass(FirstFrameCallbackEvent.class)), ir.v.a("mls-failure-callback", Reflection.getOrCreateKotlinClass(MlsFailureCallbackEvent.class)), ir.v.a("secure-frames-state-update-callback", Reflection.getOrCreateKotlinClass(SecureFramesStateUpdateCallbackEvent.class)));
        this.activityEventListener = new ActivityEventListener() { // from class: com.discord.media.engine.MediaEngineModule$activityEventListener$1
            @Override // com.facebook.react.bridge.ActivityEventListener
            public void onActivityResult(Activity activity, int i10, int i11, Intent intent) {
                ReactEvents reactEvents;
                Intrinsics.checkNotNullParameter(activity, "activity");
                if (i11 == -1 && i10 == 420 && intent != null) {
                    MediaEngineModule.this.streamPermissions = intent;
                    reactEvents = MediaEngineModule.this.reactEvents;
                    reactEvents.emitModuleEvent(MediaEngineModule.this.getReactContext(), new OnBroadcastRequestedEvent());
                }
            }

            @Override // com.facebook.react.bridge.ActivityEventListener
            public void onNewIntent(Intent intent) {
                Intrinsics.checkNotNullParameter(intent, "intent");
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void addConnectionCallbacks(int i10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$addConnectionCallbacks$1(this, i10, null), 3, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object awaitMediaEngine(Continuation<? super MediaEngine> continuation) {
        return this.mediaEngineDeferred.V(continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void createConnection(int i10, String str, ReadableMap readableMap, Function2<? super String, ? super Map<String, ? extends Object>, Unit> function2) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$createConnection$1(this, i10, str, readableMap, function2, null), 3, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit createVoiceConnectionWithOptions$lambda$1(Callback callback, String errorMessage, Map connectionInfo) {
        Intrinsics.checkNotNullParameter(errorMessage, "errorMessage");
        Intrinsics.checkNotNullParameter(connectionInfo, "connectionInfo");
        callback.invoke(errorMessage, NativeMapExtensionsKt.toNativeMap(connectionInfo));
        return Unit.f33298a;
    }

    private static /* synthetic */ void getAppScope$annotations() {
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void addListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceConfigureConnectionRetries(double d10, double d11, double d12, double d13) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceConfigureConnectionRetries$1(this, d10, d11, d12, d13, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceDestroy(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceDestroy$1(this, d10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceDestroyUser(double d10, @NotNull String userId) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceDestroyUser$1(this, d10, userId, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceExecuteSecureFramesTransition(double d10, double d11) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceExecuteSecureFramesTransition$1(this, d10, d11, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceFastUdpReconnect(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceFastUdpReconnect$1(this, d10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceGetEncryptionModes(double d10, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceGetEncryptionModes$1(this, d10, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceGetFilteredStats(double d10, double d11, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceGetFilteredStats$1(this, d10, d11, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceGetMLSKeyPackageB64(double d10, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceGetMLSKeyPackageB64$1(this, d10, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceGetMLSPairwiseFingerprintB64(double d10, double d11, @NotNull String userId, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceGetMLSPairwiseFingerprintB64$1(this, d10, d11, userId, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceGetStats(double d10, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceGetStats$1(this, d10, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceMergeUsers(double d10, @NotNull ReadableArray users) {
        Intrinsics.checkNotNullParameter(users, "users");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceMergeUsers$1(this, d10, users, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstancePrepareMLSCommitTransitionB64(double d10, double d11, @NotNull String commit, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(commit, "commit");
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstancePrepareMLSCommitTransitionB64$1(this, d10, d11, commit, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstancePrepareSecureFramesEpoch(double d10, @NotNull String epoch, double d11, @NotNull String groupId) {
        Intrinsics.checkNotNullParameter(epoch, "epoch");
        Intrinsics.checkNotNullParameter(groupId, "groupId");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstancePrepareSecureFramesEpoch$1(this, d10, epoch, d11, groupId, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstancePrepareSecureFramesTransition(double d10, double d11, double d12, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstancePrepareSecureFramesTransition$1(this, d10, d11, d12, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceProcessMLSProposalsB64(double d10, @NotNull String proposals, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(proposals, "proposals");
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceProcessMLSProposalsB64$1(this, d10, proposals, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceProcessMLSWelcomeB64(double d10, double d11, @NotNull String welcome, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(welcome, "welcome");
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceProcessMLSWelcomeB64$1(this, d10, d11, welcome, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetDesktopSource(double d10, @NotNull String stringId, boolean z10, @NotNull String type) {
        Intrinsics.checkNotNullParameter(stringId, "stringId");
        Intrinsics.checkNotNullParameter(type, "type");
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetLocalMute(double d10, @NotNull String userId, boolean z10) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetLocalMute$1(this, d10, userId, z10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetLocalPan(double d10, @NotNull String userId, double d11, double d12) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetLocalPan$1(this, d10, userId, d11, d12, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetLocalVolume(double d10, @NotNull String userId, double d11) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetLocalVolume$1(this, d10, userId, d11, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetMinimumOutputDelay(double d10, double d11) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetMinimumOutputDelay$1(this, d10, d11, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetNoInputThreshold(double d10, double d11) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetNoInputThreshold$1(this, d10, d11, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetPTTActive(double d10, boolean z10, boolean z11, boolean z12) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetPTTActive$1(this, d10, z10, z11, z12, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetPingInterval(double d10, double d11) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetPingInterval$1(this, d10, d11, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetSelfDeafen(double d10, boolean z10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetSelfDeafen$1(this, d10, z10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetSelfMute(double d10, boolean z10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetSelfMute$1(this, d10, z10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetTransportOptions(double d10, @NotNull ReadableMap options) {
        Intrinsics.checkNotNullParameter(options, "options");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetTransportOptions$1(this, d10, options, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceSetVideoBroadcast(double d10, boolean z10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceSetVideoBroadcast$1(this, d10, z10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceTriggerOnSpeakingCallback(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceTriggerOnSpeakingCallback$1(this, d10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceTriggerOnVideoCallback(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceTriggerOnVideoCallback$1(this, d10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceUpdateMLSExternalSenderB64(double d10, @NotNull String externalSenderB64) {
        Intrinsics.checkNotNullParameter(externalSenderB64, "externalSenderB64");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$connectionInstanceUpdateMLSExternalSenderB64$1(this, d10, externalSenderB64, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void connectionInstanceWasRemoteDisconnected(double d10) {
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void createOwnStreamConnectionWithOptions(double d10, @NotNull String userId, @NotNull ReadableMap connectionOptions, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(connectionOptions, "connectionOptions");
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$createOwnStreamConnectionWithOptions$1(this, d10, userId, connectionOptions, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void createVoiceConnectionWithOptions(double d10, @NotNull String userId, @NotNull ReadableMap connectionOptions, @NotNull final Callback callback) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(connectionOptions, "connectionOptions");
        Intrinsics.checkNotNullParameter(callback, "callback");
        int i10 = (int) d10;
        createConnection(i10, userId, connectionOptions, new Function2() { // from class: com.discord.media.engine.b0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit createVoiceConnectionWithOptions$lambda$1;
                createVoiceConnectionWithOptions$lambda$1 = MediaEngineModule.createVoiceConnectionWithOptions$lambda$1(Callback.this, (String) obj, (Map) obj2);
                return createVoiceConnectionWithOptions$lambda$1;
            }
        });
        addConnectionCallbacks(i10);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void getAudioSubsystem(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$getAudioSubsystem$1(this, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void getCodecCapabilities(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$getCodecCapabilities$1(this, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void getCodecSurvey(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$getCodecSurvey$1(this, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void getInputDevices(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$getInputDevices$1(this, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void getMLSSigningKeyB64(@NotNull String sessionId, double d10, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(sessionId, "sessionId");
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$getMLSSigningKeyB64$1(this, sessionId, d10, callback, null), 3, null);
    }

    @NotNull
    public final MediaEngine getMediaEngine() {
        MediaEngine mediaEngine = this.mediaEngine;
        if (mediaEngine != null) {
            return mediaEngine;
        }
        Intrinsics.throwUninitializedPropertyAccessException("mediaEngine");
        return null;
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void getOutputDevices(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$getOutputDevices$1(this, callback, null), 3, null);
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    @NotNull
    protected Map<String, Object> getTypedExportedConstants() {
        return kotlin.collections.o0.n(ir.v.a("DegradationPreference", kotlin.collections.o0.m(ir.v.a("MAINTAIN_RESOLUTION", 0), ir.v.a("MAINTAIN_FRAMERATE", 1), ir.v.a("BALANCED", 2))), ir.v.a("AVAudioSessionMode", kotlin.collections.o0.m(ir.v.a("VOICE", "AVAudioSessionModeVoiceChat"), ir.v.a("VIDEO", "AVAudioSessionModeVideoChat"), ir.v.a("LISTEN", "AVAudioSessionModeSpokenAudio"), ir.v.a("DEFAULT", "AVAudioSessionModeDefault"))), ir.v.a("SupportedSecureFramesProtocolVersion", Integer.valueOf((int) MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION)), ir.v.a("supportedFeatures", CollectionsKt.o("voice_sound_stop_loop", "voice_relative_sounds", "voice_legacy_subsystem", "voice_experimental_subsystem", "elevated_hook", "soundshare", "soundshare_loopback", "set_audio_device_by_id", "set_video_device_by_id", "loopback", "wumpus_video", "hybrid_video", "experimental_encoders", "experiment_config", "remote_locus_network_control", "screen_previews", "window_previews", "audio_debug_state", "connection_replay", "simulcast_bugfix", "RTC_REGION_RANKING", "video_effects", "direct_video", "electron_video", "mediapipe", "fixed_keyframe_interval", "clips", "first_frame_callback", "remote_user_multi_stream", "mls_pairwise_fingerprints", "offload_adm_controls")));
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void getVideoInputDevices(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$getVideoInputDevices$1(this, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void initializeEngine() {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$initializeEngine$1(this, null), 3, null);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        this.reactContext.removeActivityEventListener(this.activityEventListener);
        gs.i.d(this.appScope, null, null, new MediaEngineModule$invalidate$1(this, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void rankRtcRegions(@NotNull ReadableArray regionsWithIps, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(regionsWithIps, "regionsWithIps");
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$rankRtcRegions$1(this, regionsWithIps, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void removeListeners(double d10) {
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setAVAudioSessionMode(@NotNull String mode) {
        Intrinsics.checkNotNullParameter(mode, "mode");
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setAudioInputEnabled(boolean z10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setAudioInputEnabled$1(this, z10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setBroadcastThumbnailParams(double d10, double d11, double d12) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setBroadcastThumbnailParams$1(this, d10, d11, d12, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setEmitVADLevel2(boolean z10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setEmitVADLevel2$1(this, z10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setHasFullbandPerformance(boolean z10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setHasFullbandPerformance$1(this, z10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setInputDevice(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setInputDevice$1(this, d10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setInputDeviceById(@NotNull String deviceName) {
        Intrinsics.checkNotNullParameter(deviceName, "deviceName");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setInputDeviceById$1(this, deviceName, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setInputVolume(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setInputVolume$1(this, d10, null), 3, null);
    }

    public final void setMediaEngine(@NotNull MediaEngine mediaEngine) {
        Intrinsics.checkNotNullParameter(mediaEngine, "<set-?>");
        this.mediaEngine = mediaEngine;
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setNoInputThreshold(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setNoInputThreshold$1(this, d10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setOffloadAdmControls(boolean z10) {
        SharedPreferences sharedPreferences = this.reactContext.getSharedPreferences("MediaEngine", 0);
        Intrinsics.checkNotNullExpressionValue(sharedPreferences, "getSharedPreferences(...)");
        SharedPreferences.Editor edit = sharedPreferences.edit();
        edit.putBoolean("offloadAdmControls", z10);
        edit.apply();
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setOutputDevice(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setOutputDevice$1(this, d10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setOutputDeviceById(@NotNull String deviceName) {
        Intrinsics.checkNotNullParameter(deviceName, "deviceName");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setOutputDeviceById$1(this, deviceName, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setOutputVolume(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setOutputVolume$1(this, d10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setSidechainCompression(boolean z10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setSidechainCompression$1(this, z10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setTransportOptions(@NotNull ReadableMap options) {
        Intrinsics.checkNotNullParameter(options, "options");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setTransportOptions$1(this, options, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setVideoInputDevice(double d10) {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setVideoInputDevice$1(this, d10, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void setVideoInputDeviceById(@NotNull String deviceName) {
        Intrinsics.checkNotNullParameter(deviceName, "deviceName");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$setVideoInputDeviceById$1(this, deviceName, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void startBroadcast() {
        Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity != null) {
            ActivityUtilities.startActivityForResultAsync$default(ActivityUtilities.INSTANCE, currentActivity, Companion.createScreenCaptureIntent(currentActivity), START_SCREENSHARE_REQUEST_CODE, null, 8, null);
        }
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void startLocalAudioRecording(@NotNull ReadableMap options, @NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$startLocalAudioRecording$1(this, options, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void stopBroadcast() {
        gs.i.d(this.appScope, null, null, new MediaEngineModule$stopBroadcast$1(this, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void stopBroadcastWithError(double d10, @NotNull String errorMessage) {
        Intrinsics.checkNotNullParameter(errorMessage, "errorMessage");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$stopBroadcastWithError$1(this, d10, errorMessage, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void stopLocalAudioRecording(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$stopLocalAudioRecording$1(this, callback, null), 3, null);
    }

    @Override // com.discord.codegen.NativeMediaEngineModuleSpec
    public void updateFieldTrial(@NotNull String key, @NotNull String value) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(value, "value");
        gs.i.d(this.appScope, null, null, new MediaEngineModule$updateFieldTrial$1(this, key, value, null), 3, null);
    }
}
