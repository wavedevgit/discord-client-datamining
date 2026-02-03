package com.brentvatne.exoplayer;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.google.android.exoplayer2.metadata.Metadata;
import ld.m;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: c  reason: collision with root package name */
    static final String[] f7983c = {"onVideoLoadStart", "onVideoLoad", "onVideoError", "onVideoProgress", "onVideoSeek", "onVideoEnd", "onVideoFullscreenPlayerWillPresent", "onVideoFullscreenPlayerDidPresent", "onVideoFullscreenPlayerWillDismiss", "onVideoFullscreenPlayerDidDismiss", "onPlaybackStalled", "onPlaybackResume", "onReadyForDisplay", "onVideoBuffer", "onVideoIdle", "onTimedMetadata", "onVideoAudioBecomingNoisy", "onAudioFocusChanged", "onPlaybackRateChange", "onVideoBandwidthUpdate"};

    /* renamed from: a  reason: collision with root package name */
    private final RCTEventEmitter f7984a;

    /* renamed from: b  reason: collision with root package name */
    private int f7985b = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(ReactContext reactContext) {
        this.f7984a = (RCTEventEmitter) reactContext.getJSModule(RCTEventEmitter.class);
    }

    private void q(String str, WritableMap writableMap) {
        RCTEventEmitter rCTEventEmitter = this.f7984a;
        int i10 = this.f7985b;
        if (writableMap == null) {
            writableMap = Arguments.createMap();
        }
        rCTEventEmitter.receiveEvent(i10, str, writableMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        q("onVideoAudioBecomingNoisy", null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        WritableMap createMap = Arguments.createMap();
        createMap.putBoolean("hasAudioFocus", z10);
        q("onAudioFocusChanged", createMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(double d10, int i10, int i11, String str) {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble("bitrate", d10);
        createMap.putInt("width", i11);
        createMap.putInt("height", i10);
        createMap.putString("trackId", str);
        q("onVideoBandwidthUpdate", createMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(boolean z10) {
        WritableMap createMap = Arguments.createMap();
        createMap.putBoolean("isBuffering", z10);
        q("onVideoBuffer", createMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e() {
        q("onVideoEnd", null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(String str, Exception exc) {
        WritableMap createMap = Arguments.createMap();
        createMap.putString("errorString", str);
        createMap.putString("errorException", exc.toString());
        WritableMap createMap2 = Arguments.createMap();
        createMap2.putMap("error", createMap);
        q("onVideoError", createMap2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g() {
        q("onVideoFullscreenPlayerDidDismiss", null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        q("onVideoFullscreenPlayerDidPresent", null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i() {
        q("onVideoFullscreenPlayerWillDismiss", null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        q("onVideoFullscreenPlayerWillPresent", null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k() {
        q("onVideoIdle", null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(double d10, double d11, int i10, int i11, WritableArray writableArray, WritableArray writableArray2, WritableArray writableArray3, String str) {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble("duration", d10 / 1000.0d);
        createMap.putDouble("currentTime", d11 / 1000.0d);
        WritableMap createMap2 = Arguments.createMap();
        createMap2.putInt("width", i10);
        createMap2.putInt("height", i11);
        if (i10 > i11) {
            createMap2.putString("orientation", "landscape");
        } else {
            createMap2.putString("orientation", "portrait");
        }
        createMap.putMap("naturalSize", createMap2);
        createMap.putString("trackId", str);
        createMap.putArray("videoTracks", writableArray3);
        createMap.putArray("audioTracks", writableArray);
        createMap.putArray("textTracks", writableArray2);
        createMap.putBoolean("canPlayFastForward", true);
        createMap.putBoolean("canPlaySlowForward", true);
        createMap.putBoolean("canPlaySlowReverse", true);
        createMap.putBoolean("canPlayReverse", true);
        createMap.putBoolean("canPlayFastForward", true);
        createMap.putBoolean("canStepBackward", true);
        createMap.putBoolean("canStepForward", true);
        q("onVideoLoad", createMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m() {
        q("onVideoLoadStart", null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(float f10) {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble("playbackRate", f10);
        q("onPlaybackRateChange", createMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(double d10, double d11, double d12, double d13) {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble("currentTime", d10 / 1000.0d);
        createMap.putDouble("playableDuration", d11 / 1000.0d);
        createMap.putDouble("seekableDuration", d12 / 1000.0d);
        createMap.putDouble("currentPlaybackTime", d13);
        q("onVideoProgress", createMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p() {
        q("onReadyForDisplay", null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(long j10, long j11) {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble("currentTime", j10 / 1000.0d);
        createMap.putDouble("seekTime", j11 / 1000.0d);
        q("onVideoSeek", createMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        this.f7985b = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(Metadata metadata) {
        String str;
        WritableArray createArray = Arguments.createArray();
        for (int i10 = 0; i10 < metadata.e(); i10++) {
            Metadata.b d10 = metadata.d(i10);
            if (d10 instanceof ld.i) {
                ld.i iVar = (ld.i) d10;
                if (iVar instanceof m) {
                    str = ((m) iVar).f36753i;
                } else {
                    str = "";
                }
                String str2 = iVar.f36741d;
                WritableMap createMap = Arguments.createMap();
                createMap.putString("identifier", str2);
                createMap.putString("value", str);
                createArray.pushMap(createMap);
            } else if (d10 instanceof id.a) {
                id.a aVar = (id.a) d10;
                WritableMap createMap2 = Arguments.createMap();
                createMap2.putString("identifier", aVar.f28323d);
                createMap2.putString("value", aVar.f28324e);
                createArray.pushMap(createMap2);
            }
        }
        WritableMap createMap3 = Arguments.createMap();
        createMap3.putArray("metadata", createArray);
        q("onTimedMetadata", createMap3);
    }
}
