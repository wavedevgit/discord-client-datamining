package com.discord.codegen;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import fb.a;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class NativeMediaEngineModuleSpec extends ReactContextBaseJavaModule implements TurboModule {
    public static final String NAME = "NativeMediaEngineModule";

    public NativeMediaEngineModuleSpec(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @ReactMethod
    @a
    public abstract void addListener(String str);

    @ReactMethod
    @a
    public abstract void connectionInstanceConfigureConnectionRetries(double d10, double d11, double d12, double d13);

    @ReactMethod
    @a
    public abstract void connectionInstanceDestroy(double d10);

    @ReactMethod
    @a
    public abstract void connectionInstanceDestroyUser(double d10, String str);

    @ReactMethod
    @a
    public abstract void connectionInstanceExecuteSecureFramesTransition(double d10, double d11);

    @ReactMethod
    @a
    public abstract void connectionInstanceFastUdpReconnect(double d10);

    @ReactMethod
    @a
    public abstract void connectionInstanceGetEncryptionModes(double d10, Callback callback);

    @ReactMethod
    @a
    public abstract void connectionInstanceGetFilteredStats(double d10, double d11, Callback callback);

    @ReactMethod
    @a
    public abstract void connectionInstanceGetMLSKeyPackageB64(double d10, Callback callback);

    @ReactMethod
    @a
    public abstract void connectionInstanceGetMLSPairwiseFingerprintB64(double d10, double d11, String str, Callback callback);

    @ReactMethod
    @a
    public abstract void connectionInstanceGetStats(double d10, Callback callback);

    @ReactMethod
    @a
    public abstract void connectionInstanceMergeUsers(double d10, ReadableArray readableArray);

    @ReactMethod
    @a
    public abstract void connectionInstancePrepareMLSCommitTransitionB64(double d10, double d11, String str, Callback callback);

    @ReactMethod
    @a
    public abstract void connectionInstancePrepareSecureFramesEpoch(double d10, String str, double d11, String str2);

    @ReactMethod
    @a
    public abstract void connectionInstancePrepareSecureFramesTransition(double d10, double d11, double d12, Callback callback);

    @ReactMethod
    @a
    public abstract void connectionInstanceProcessMLSProposalsB64(double d10, String str, Callback callback);

    @ReactMethod
    @a
    public abstract void connectionInstanceProcessMLSWelcomeB64(double d10, double d11, String str, Callback callback);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetDesktopSource(double d10, String str, boolean z10, String str2);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetLocalMute(double d10, String str, boolean z10);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetLocalPan(double d10, String str, double d11, double d12);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetLocalVolume(double d10, String str, double d11);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetMinimumOutputDelay(double d10, double d11);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetNoInputThreshold(double d10, double d11);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetPTTActive(double d10, boolean z10, boolean z11, boolean z12);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetPingInterval(double d10, double d11);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetSelfDeafen(double d10, boolean z10);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetSelfMute(double d10, boolean z10);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetTransportOptions(double d10, ReadableMap readableMap);

    @ReactMethod
    @a
    public abstract void connectionInstanceSetVideoBroadcast(double d10, boolean z10);

    @ReactMethod
    @a
    public abstract void connectionInstanceTriggerOnSpeakingCallback(double d10);

    @ReactMethod
    @a
    public abstract void connectionInstanceTriggerOnVideoCallback(double d10);

    @ReactMethod
    @a
    public abstract void connectionInstanceUpdateMLSExternalSenderB64(double d10, String str);

    @ReactMethod
    @a
    public abstract void connectionInstanceWasRemoteDisconnected(double d10);

    @ReactMethod
    @a
    public abstract void createOwnStreamConnectionWithOptions(double d10, String str, ReadableMap readableMap, Callback callback);

    @ReactMethod
    @a
    public abstract void createVoiceConnectionWithOptions(double d10, String str, ReadableMap readableMap, Callback callback);

    @ReactMethod
    @a
    public abstract void getAudioSubsystem(Callback callback);

    @ReactMethod
    @a
    public abstract void getCodecCapabilities(Callback callback);

    @ReactMethod
    @a
    public abstract void getCodecSurvey(Callback callback);

    @Override // com.facebook.react.bridge.BaseJavaModule
    @a
    public final Map<String, Object> getConstants() {
        Map<String, Object> typedExportedConstants = getTypedExportedConstants();
        if (ReactBuildConfig.DEBUG || ReactBuildConfig.IS_INTERNAL_BUILD) {
            HashSet hashSet = new HashSet(Arrays.asList("AVAudioSessionMode", "DegradationPreference", "SupportedSecureFramesProtocolVersion", "supportedFeatures"));
            HashSet hashSet2 = new HashSet();
            HashSet hashSet3 = new HashSet(typedExportedConstants.keySet());
            hashSet3.removeAll(hashSet);
            hashSet3.removeAll(hashSet2);
            if (hashSet3.isEmpty()) {
                hashSet.removeAll(typedExportedConstants.keySet());
                if (!hashSet.isEmpty()) {
                    throw new IllegalStateException(String.format("Native Module doesn't fill in constants: %s", hashSet));
                }
            } else {
                throw new IllegalStateException(String.format("Native Module Flow doesn't declare constants: %s", hashSet3));
            }
        }
        return typedExportedConstants;
    }

    @ReactMethod
    @a
    public abstract void getInputDevices(Callback callback);

    @ReactMethod
    @a
    public abstract void getMLSSigningKeyB64(String str, double d10, Callback callback);

    @Override // com.facebook.react.bridge.NativeModule
    public String getName() {
        return NAME;
    }

    @ReactMethod
    @a
    public abstract void getOutputDevices(Callback callback);

    protected abstract Map<String, Object> getTypedExportedConstants();

    @ReactMethod
    @a
    public abstract void getVideoInputDevices(Callback callback);

    @ReactMethod
    @a
    public abstract void initializeEngine();

    @ReactMethod
    @a
    public abstract void rankRtcRegions(ReadableArray readableArray, Callback callback);

    @ReactMethod
    @a
    public abstract void removeListeners(double d10);

    @ReactMethod
    @a
    public abstract void setAVAudioSessionMode(String str);

    @ReactMethod
    @a
    public abstract void setAudioInputEnabled(boolean z10);

    @ReactMethod
    @a
    public abstract void setBroadcastThumbnailParams(double d10, double d11, double d12);

    @ReactMethod
    @a
    public abstract void setEmitVADLevel2(boolean z10);

    @ReactMethod
    @a
    public abstract void setHasFullbandPerformance(boolean z10);

    @ReactMethod
    @a
    public abstract void setInputDevice(double d10);

    @ReactMethod
    @a
    public abstract void setInputDeviceById(String str);

    @ReactMethod
    @a
    public abstract void setInputVolume(double d10);

    @ReactMethod
    @a
    public abstract void setNoInputThreshold(double d10);

    @ReactMethod
    @a
    public abstract void setOffloadAdmControls(boolean z10);

    @ReactMethod
    @a
    public abstract void setOutputDevice(double d10);

    @ReactMethod
    @a
    public abstract void setOutputDeviceById(String str);

    @ReactMethod
    @a
    public abstract void setOutputVolume(double d10);

    @ReactMethod
    @a
    public abstract void setSidechainCompression(boolean z10);

    @ReactMethod
    @a
    public abstract void setTransportOptions(ReadableMap readableMap);

    @ReactMethod
    @a
    public abstract void setVideoInputDevice(double d10);

    @ReactMethod
    @a
    public abstract void setVideoInputDeviceById(String str);

    @ReactMethod
    @a
    public abstract void startBroadcast();

    @ReactMethod
    @a
    public abstract void startLocalAudioRecording(ReadableMap readableMap, Callback callback);

    @ReactMethod
    @a
    public abstract void stopBroadcast();

    @ReactMethod
    @a
    public abstract void stopBroadcastWithError(double d10, String str);

    @ReactMethod
    @a
    public abstract void stopLocalAudioRecording(Callback callback);

    @ReactMethod
    @a
    public abstract void updateFieldTrial(String str, String str2);
}
