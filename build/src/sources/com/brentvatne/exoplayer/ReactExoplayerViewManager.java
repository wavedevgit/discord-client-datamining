package com.brentvatne.exoplayer;

import android.content.Context;
import android.net.Uri;
import android.text.TextUtils;
import com.discord.jank_stats.JankStatsAggregatorKt;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import le.w;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ReactExoplayerViewManager extends ViewGroupManager<g> {
    private static final String PROP_BUFFER_CONFIG = "bufferConfig";
    private static final String PROP_BUFFER_CONFIG_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS = "bufferForPlaybackAfterRebufferMs";
    private static final String PROP_BUFFER_CONFIG_BUFFER_FOR_PLAYBACK_MS = "bufferForPlaybackMs";
    private static final String PROP_BUFFER_CONFIG_MAX_BUFFER_MS = "maxBufferMs";
    private static final String PROP_BUFFER_CONFIG_MIN_BUFFER_MS = "minBufferMs";
    private static final String PROP_CONTROLS = "controls";
    private static final String PROP_DISABLE_FOCUS = "disableFocus";
    private static final String PROP_DRM = "drm";
    private static final String PROP_DRM_HEADERS = "headers";
    private static final String PROP_DRM_LICENSESERVER = "licenseServer";
    private static final String PROP_DRM_TYPE = "type";
    private static final String PROP_FULLSCREEN = "fullscreen";
    private static final String PROP_HIDE_SHUTTER_VIEW = "hideShutterView";
    private static final String PROP_MAXIMUM_BIT_RATE = "maxBitRate";
    private static final String PROP_MIN_LOAD_RETRY_COUNT = "minLoadRetryCount";
    private static final String PROP_MUTED = "muted";
    private static final String PROP_PAUSED = "paused";
    private static final String PROP_PLAY_IN_BACKGROUND = "playInBackground";
    private static final String PROP_PREVENTS_DISPLAY_SLEEP_DURING_VIDEO_PLAYBACK = "preventsDisplaySleepDuringVideoPlayback";
    private static final String PROP_PROGRESS_UPDATE_INTERVAL = "progressUpdateInterval";
    private static final String PROP_RATE = "rate";
    private static final String PROP_REPEAT = "repeat";
    private static final String PROP_REPORT_BANDWIDTH = "reportBandwidth";
    private static final String PROP_RESIZE_MODE = "resizeMode";
    private static final String PROP_SEEK = "seek";
    private static final String PROP_SELECTED_AUDIO_TRACK = "selectedAudioTrack";
    private static final String PROP_SELECTED_AUDIO_TRACK_TYPE = "type";
    private static final String PROP_SELECTED_AUDIO_TRACK_VALUE = "value";
    private static final String PROP_SELECTED_TEXT_TRACK = "selectedTextTrack";
    private static final String PROP_SELECTED_TEXT_TRACK_TYPE = "type";
    private static final String PROP_SELECTED_TEXT_TRACK_VALUE = "value";
    private static final String PROP_SELECTED_VIDEO_TRACK = "selectedVideoTrack";
    private static final String PROP_SELECTED_VIDEO_TRACK_TYPE = "type";
    private static final String PROP_SELECTED_VIDEO_TRACK_VALUE = "value";
    private static final String PROP_SRC = "src";
    private static final String PROP_SRC_HEADERS = "requestHeaders";
    private static final String PROP_SRC_TYPE = "type";
    private static final String PROP_SRC_URI = "uri";
    private static final String PROP_TEXT_TRACKS = "textTracks";
    private static final String PROP_USE_TEXTURE_VIEW = "useTextureView";
    private static final String PROP_VOLUME = "volume";
    private static final String REACT_CLASS = "RNVVideo";
    private f config;
    private float lastSeekPosition = Float.NaN;

    public ReactExoplayerViewManager(f fVar) {
        this.config = fVar;
    }

    private int convertToIntDef(String str) {
        if (!TextUtils.isEmpty(str)) {
            return h.a(Integer.parseInt(str));
        }
        return 0;
    }

    private boolean startsWithValidScheme(String str) {
        if (!str.startsWith("http://") && !str.startsWith("https://") && !str.startsWith("content://") && !str.startsWith("file://") && !str.startsWith("asset://")) {
            return false;
        }
        return true;
    }

    public static Map<String, String> toStringMap(ReadableMap readableMap) {
        if (readableMap == null) {
            return null;
        }
        ReadableMapKeySetIterator keySetIterator = readableMap.keySetIterator();
        if (!keySetIterator.hasNextKey()) {
            return null;
        }
        HashMap hashMap = new HashMap();
        while (keySetIterator.hasNextKey()) {
            String nextKey = keySetIterator.nextKey();
            hashMap.put(nextKey, readableMap.getString(nextKey));
        }
        return hashMap;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        String[] strArr;
        String str;
        MapBuilder.Builder builder = MapBuilder.builder();
        for (String str2 : i.f8267c) {
            if (ReactNativeFeatureFlags.enableFabricRenderer()) {
                str = ViewProps.TOP + str2.replaceFirst("^on", "");
            } else {
                str = str2;
            }
            builder.put(str, MapBuilder.of("registrationName", str2));
        }
        return builder.build();
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public Map<String, Object> getExportedViewConstants() {
        return MapBuilder.of("ScaleNone", Integer.toString(0), "ScaleAspectFit", Integer.toString(0), "ScaleToFill", Integer.toString(3), "ScaleAspectFill", Integer.toString(4));
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = PROP_MIN_LOAD_RETRY_COUNT)
    public void minLoadRetryCount(g gVar, int i10) {
        gVar.Z0(i10);
    }

    @ReactProp(name = PROP_BUFFER_CONFIG)
    public void setBufferConfig(g gVar, ReadableMap readableMap) {
        int i10;
        int i11;
        int i12;
        if (readableMap != null) {
            int i13 = 50000;
            if (readableMap.hasKey(PROP_BUFFER_CONFIG_MIN_BUFFER_MS)) {
                i10 = readableMap.getInt(PROP_BUFFER_CONFIG_MIN_BUFFER_MS);
            } else {
                i10 = 50000;
            }
            if (readableMap.hasKey(PROP_BUFFER_CONFIG_MAX_BUFFER_MS)) {
                i13 = readableMap.getInt(PROP_BUFFER_CONFIG_MAX_BUFFER_MS);
            }
            if (readableMap.hasKey(PROP_BUFFER_CONFIG_BUFFER_FOR_PLAYBACK_MS)) {
                i11 = readableMap.getInt(PROP_BUFFER_CONFIG_BUFFER_FOR_PLAYBACK_MS);
            } else {
                i11 = 2500;
            }
            if (readableMap.hasKey(PROP_BUFFER_CONFIG_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS)) {
                i12 = readableMap.getInt(PROP_BUFFER_CONFIG_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS);
            } else {
                i12 = 5000;
            }
            gVar.Q0(i10, i13, i11, i12);
        }
    }

    @ReactProp(defaultBoolean = false, name = PROP_CONTROLS)
    public void setControls(g gVar, boolean z10) {
        gVar.R0(z10);
    }

    @ReactProp(name = PROP_DRM)
    public void setDRM(g gVar, ReadableMap readableMap) {
        String str;
        String str2;
        if (readableMap != null && readableMap.hasKey("type")) {
            ReadableMap readableMap2 = null;
            if (readableMap.hasKey("type")) {
                str = readableMap.getString("type");
            } else {
                str = null;
            }
            if (readableMap.hasKey(PROP_DRM_LICENSESERVER)) {
                str2 = readableMap.getString(PROP_DRM_LICENSESERVER);
            } else {
                str2 = null;
            }
            if (readableMap.hasKey(PROP_DRM_HEADERS)) {
                readableMap2 = readableMap.getMap(PROP_DRM_HEADERS);
            }
            if (str != null && str2 != null && w0.X(str) != null) {
                gVar.V0(w0.X(str));
                gVar.U0(str2);
                if (readableMap2 != null) {
                    ArrayList arrayList = new ArrayList();
                    ReadableMapKeySetIterator keySetIterator = readableMap2.keySetIterator();
                    while (keySetIterator.hasNextKey()) {
                        String nextKey = keySetIterator.nextKey();
                        arrayList.add(nextKey);
                        arrayList.add(readableMap2.getString(nextKey));
                    }
                    gVar.T0((String[]) arrayList.toArray(new String[0]));
                }
                gVar.r1(false);
            }
        }
    }

    @ReactProp(defaultBoolean = false, name = PROP_DISABLE_FOCUS)
    public void setDisableFocus(g gVar, boolean z10) {
        gVar.S0(z10);
    }

    @ReactProp(defaultBoolean = false, name = PROP_FULLSCREEN)
    public void setFullscreen(g gVar, boolean z10) {
        gVar.W0(z10);
    }

    @ReactProp(defaultBoolean = false, name = PROP_HIDE_SHUTTER_VIEW)
    public void setHideShutterView(g gVar, boolean z10) {
        gVar.X0(z10);
    }

    @ReactProp(name = PROP_MAXIMUM_BIT_RATE)
    public void setMaxBitRate(g gVar, int i10) {
        gVar.Y0(i10);
    }

    @ReactProp(defaultBoolean = false, name = PROP_MUTED)
    public void setMuted(g gVar, boolean z10) {
        gVar.a1(z10);
    }

    @ReactProp(defaultBoolean = false, name = PROP_PAUSED)
    public void setPaused(g gVar, boolean z10) {
        gVar.b1(z10);
    }

    @ReactProp(defaultBoolean = false, name = PROP_PLAY_IN_BACKGROUND)
    public void setPlayInBackground(g gVar, boolean z10) {
        gVar.c1(z10);
    }

    @ReactProp(defaultBoolean = false, name = PROP_PREVENTS_DISPLAY_SLEEP_DURING_VIDEO_PLAYBACK)
    public void setPreventsDisplaySleepDuringVideoPlayback(g gVar, boolean z10) {
        gVar.e1(z10);
    }

    @ReactProp(defaultFloat = 250.0f, name = PROP_PROGRESS_UPDATE_INTERVAL)
    public void setProgressUpdateInterval(g gVar, float f10) {
        gVar.f1(f10);
    }

    @ReactProp(name = PROP_TEXT_TRACKS)
    public void setPropTextTracks(g gVar, ReadableArray readableArray) {
        gVar.q1(readableArray);
    }

    @ReactProp(name = PROP_RATE)
    public void setRate(g gVar, float f10) {
        gVar.g1(f10);
    }

    @ReactProp(defaultBoolean = false, name = PROP_REPEAT)
    public void setRepeat(g gVar, boolean z10) {
        gVar.i1(z10);
    }

    @ReactProp(defaultBoolean = false, name = PROP_REPORT_BANDWIDTH)
    public void setReportBandwidth(g gVar, boolean z10) {
        gVar.j1(z10);
    }

    @ReactProp(name = "resizeMode")
    public void setResizeMode(g gVar, String str) {
        gVar.k1(convertToIntDef(str));
    }

    @ReactProp(name = PROP_SEEK)
    public void setSeek(g gVar, float f10) {
        if (f10 != this.lastSeekPosition) {
            this.lastSeekPosition = f10;
            gVar.P0(Math.round(f10 * 1000.0f));
        }
    }

    @ReactProp(name = PROP_SELECTED_AUDIO_TRACK)
    public void setSelectedAudioTrack(g gVar, ReadableMap readableMap) {
        Dynamic dynamic;
        String str;
        String str2 = null;
        Dynamic dynamic2 = null;
        if (readableMap != null) {
            if (readableMap.hasKey("type")) {
                str = readableMap.getString("type");
            } else {
                str = null;
            }
            if (readableMap.hasKey("value")) {
                dynamic2 = readableMap.getDynamic("value");
            }
            dynamic = dynamic2;
            str2 = str;
        } else {
            dynamic = null;
        }
        gVar.l1(str2, dynamic);
    }

    @ReactProp(name = PROP_SELECTED_TEXT_TRACK)
    public void setSelectedTextTrack(g gVar, ReadableMap readableMap) {
        Dynamic dynamic;
        String str;
        String str2 = null;
        Dynamic dynamic2 = null;
        if (readableMap != null) {
            if (readableMap.hasKey("type")) {
                str = readableMap.getString("type");
            } else {
                str = null;
            }
            if (readableMap.hasKey("value")) {
                dynamic2 = readableMap.getDynamic("value");
            }
            dynamic = dynamic2;
            str2 = str;
        } else {
            dynamic = null;
        }
        gVar.m1(str2, dynamic);
    }

    @ReactProp(name = PROP_SELECTED_VIDEO_TRACK)
    public void setSelectedVideoTrack(g gVar, ReadableMap readableMap) {
        Dynamic dynamic;
        String str;
        String str2 = null;
        Dynamic dynamic2 = null;
        if (readableMap != null) {
            if (readableMap.hasKey("type")) {
                str = readableMap.getString("type");
            } else {
                str = null;
            }
            if (readableMap.hasKey("value")) {
                dynamic2 = readableMap.getDynamic("value");
            }
            dynamic = dynamic2;
            str2 = str;
        } else {
            dynamic = null;
        }
        gVar.o1(str2, dynamic);
    }

    @ReactProp(name = PROP_SRC)
    public void setSrc(g gVar, ReadableMap readableMap) {
        String str;
        String str2;
        Uri buildRawResourceUri;
        Context applicationContext = gVar.getContext().getApplicationContext();
        Map<String, String> map = null;
        if (readableMap.hasKey(PROP_SRC_URI)) {
            str = readableMap.getString(PROP_SRC_URI);
        } else {
            str = null;
        }
        if (readableMap.hasKey("type")) {
            str2 = readableMap.getString("type");
        } else {
            str2 = null;
        }
        if (readableMap.hasKey(PROP_SRC_HEADERS)) {
            map = toStringMap(readableMap.getMap(PROP_SRC_HEADERS));
        }
        if (TextUtils.isEmpty(str)) {
            gVar.x0();
        } else if (startsWithValidScheme(str)) {
            Uri parse = Uri.parse(str);
            if (parse != null) {
                gVar.p1(parse, str2, map);
            }
        } else {
            int identifier = applicationContext.getResources().getIdentifier(str, "drawable", applicationContext.getPackageName());
            if (identifier == 0) {
                identifier = applicationContext.getResources().getIdentifier(str, "raw", applicationContext.getPackageName());
            }
            if (identifier > 0 && (buildRawResourceUri = w.buildRawResourceUri(identifier)) != null) {
                gVar.h1(buildRawResourceUri, str2);
            }
        }
    }

    @ReactProp(defaultBoolean = true, name = PROP_USE_TEXTURE_VIEW)
    public void setUseTextureView(g gVar, boolean z10) {
        gVar.r1(z10);
    }

    @ReactProp(defaultFloat = JankStatsAggregatorKt.DEFAULT_JANK_MUTLIPLIER, name = PROP_VOLUME)
    public void setVolume(g gVar, float f10) {
        gVar.s1(f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    public g createViewInstance(ThemedReactContext themedReactContext) {
        return new g(themedReactContext, this.config);
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onDropViewInstance(g gVar) {
        gVar.u0();
    }
}
