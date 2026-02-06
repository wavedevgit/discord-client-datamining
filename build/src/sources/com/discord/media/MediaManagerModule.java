package com.discord.media;

import android.media.MediaCodecInfo;
import android.media.MediaCodecList;
import android.net.Uri;
import android.os.BatteryManager;
import android.os.Build;
import android.os.PowerManager;
import com.discord.logging.Log;
import com.discord.media.react.events.CompressionProgressEvent;
import com.discord.media.utils.EncodingConfig;
import com.discord.media.utils.MediaResolver;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ViewProps;
import com.swmansion.reanimated.layoutReanimation.Snapshot;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.CancellationException;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.i;
import org.jetbrains.annotations.NotNull;
import os.g;
import os.m0;
import qr.v;
@Metadata(d1 = {"\u0000\u008e\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010$\n\u0002\u0010 \n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0012\n\u0002\b\u0002\u0018\u0000 G2\u00020\u0001:\u0001GB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\f\u001a\u00020\rH\u0016J\u001a\u0010\u000e\u001a\u0014\u0012\u0004\u0012\u00020\r\u0012\n\u0012\b\u0012\u0004\u0012\u00020\r0\u00100\u000fH\u0016J\b\u0010\u0011\u001a\u00020\u0012H\u0016J\u0018\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\"\u0010\u0017\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\"\u0010\u001a\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J \u0010\u001b\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J*\u0010\u001e\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001f\u001a\u0004\u0018\u00010\r2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\"\u0010 \u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0010\u0010!\u001a\u00020\u00122\u0006\u0010\"\u001a\u00020\rH\u0007J\u0010\u0010#\u001a\u00020\u00122\u0006\u0010$\u001a\u00020\u001dH\u0007J\"\u0010%\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\"\u0010&\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\"\u0010'\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\"\u0010(\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\"\u0010)\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0010\u0010*\u001a\u00020\u00122\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0010\u0010+\u001a\u00020\u00122\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0012\u0010,\u001a\u0004\u0018\u00010-2\u0006\u0010.\u001a\u00020\rH\u0002J\u0010\u0010/\u001a\u0002002\u0006\u00101\u001a\u000202H\u0002J(\u00103\u001a\u0002042\u0006\u00105\u001a\u00020\u001d2\u0006\u00106\u001a\u00020\u001d2\u0006\u00107\u001a\u0002082\u0006\u00101\u001a\u000202H\u0002J\u0018\u00109\u001a\u00020\u00122\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J \u0010:\u001a\u00020\u00122\u0006\u0010;\u001a\u00020\r2\u0006\u0010<\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0018\u0010=\u001a\u00020\u00122\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0010\u0010>\u001a\u0002002\u0006\u0010\u0014\u001a\u00020\rH\u0002J\u0010\u0010?\u001a\u0002002\u0006\u0010@\u001a\u00020AH\u0002J$\u0010B\u001a\u0010\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u001d\u0018\u00010C2\u0006\u0010\u0014\u001a\u00020\rH\u0082@¢\u0006\u0002\u0010DJ\u0018\u0010E\u001a\u0004\u0018\u00010F2\u0006\u0010\u0014\u001a\u00020\rH\u0082@¢\u0006\u0002\u0010DR\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006H"}, d2 = {"Lcom/discord/media/MediaManagerModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "scope", "Lkotlinx/coroutines/CoroutineScope;", "mediaResolver", "Lcom/discord/media/utils/MediaResolver;", "getName", "", "getConstants", "", "", "invalidate", "", "getLosslessImageData", "uri", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "cancelResolveToMediaFilePath", "options", "Lcom/facebook/react/bridge/ReadableMap;", "resolveToMediaFilePath", "downloadMediaAsset", "mediaType", "", "downloadMediaAssetWithContentType", "contentType", "getVideoMetadata", "addListener", "type", "removeListeners", "count", "convertBase64ToJPEG", "convertBase64ToGIF", "convertToJPEG", "convertToCompatibleMOV", "convertToVideoFilePath", "getDeviceStateInfo", "isHEVCEncodingSupported", "getEncoderInfo", "Landroid/media/MediaCodecInfo;", "mimeType", "createCapabilitiesMap", "Lcom/facebook/react/bridge/WritableMap;", "videoCapabilities", "Landroid/media/MediaCodecInfo$VideoCapabilities;", "checkEncodingConstraints", "Lcom/facebook/react/bridge/WritableArray;", "width", "height", "frameRate", "", "isVideoEncodingSupported", "calculateImageQualityMetrics", "originalUri", "compressedUri", "getMediaOrigin", "detectMediaOrigin", "detectFileOrigin", "parsedUri", "Landroid/net/Uri;", "getImageDimensions", "Lkotlin/Pair;", "(Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "loadImageDataFromUri", "", "Companion", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMediaManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaManagerModule.kt\ncom/discord/media/MediaManagerModule\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,749:1\n29#2:750\n29#2:751\n29#2:752\n29#2:758\n1310#3:753\n12637#3,2:754\n1311#3:756\n1#4:757\n*S KotlinDebug\n*F\n+ 1 MediaManagerModule.kt\ncom/discord/media/MediaManagerModule\n*L\n105#1:750\n115#1:751\n212#1:752\n609#1:758\n338#1:753\n339#1:754,2\n338#1:756\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaManagerModule extends ReactContextBaseJavaModule {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int MAX_IMAGE_DATA_SIZE = 52428800;
    private static final int MAX_IMAGE_DIMENSION = 8192;
    @NotNull
    private static final String QUALITY_METRICS_ERROR = "quality_metrics_error";
    @NotNull
    private final MediaResolver mediaResolver;
    @NotNull
    private final ReactEvents reactEvents;
    @NotNull
    private final CoroutineScope scope;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lcom/discord/media/MediaManagerModule$Companion;", "", "<init>", "()V", "MAX_IMAGE_DATA_SIZE", "", "MAX_IMAGE_DIMENSION", "QUALITY_METRICS_ERROR", "", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaManagerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactEvents = new ReactEvents(v.a("compression-progress", Reflection.getOrCreateKotlinClass(CompressionProgressEvent.class)));
        this.scope = i.b();
        this.mediaResolver = new MediaResolver(reactContext, new Function2() { // from class: com.discord.media.a
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit mediaResolver$lambda$0;
                mediaResolver$lambda$0 = MediaManagerModule.mediaResolver$lambda$0(MediaManagerModule.this, (Uri) obj, ((Integer) obj2).intValue());
                return mediaResolver$lambda$0;
            }
        });
    }

    private final WritableArray checkEncodingConstraints(int i10, int i11, double d10, MediaCodecInfo.VideoCapabilities videoCapabilities) {
        WritableArray createArray = Arguments.createArray();
        Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
        if (i10 % videoCapabilities.getWidthAlignment() == 0 && i11 % videoCapabilities.getHeightAlignment() == 0) {
            if (!videoCapabilities.isSizeSupported(i10, i11)) {
                WritableMap createMap = Arguments.createMap();
                createMap.putString("type", "resolution");
                createMap.putString("message", "Resolution " + i10 + "x" + i11 + " not supported");
                WritableMap createMap2 = Arguments.createMap();
                createMap2.putInt("width", i10);
                createMap2.putInt("height", i11);
                Unit unit = Unit.f32008a;
                createMap.putMap("current", createMap2);
                createArray.pushMap(createMap);
                return createArray;
            }
            if (!videoCapabilities.areSizeAndRateSupported(i10, i11, d10)) {
                WritableMap createMap3 = Arguments.createMap();
                createMap3.putString("type", "frameRate");
                createMap3.putString("message", "Frame rate " + d10 + " not supported at resolution " + i10 + "x" + i11);
                createMap3.putDouble("current", d10);
                createArray.pushMap(createMap3);
            }
            return createArray;
        }
        WritableMap createMap4 = Arguments.createMap();
        createMap4.putString("type", "resolution_alignment");
        int widthAlignment = videoCapabilities.getWidthAlignment();
        int heightAlignment = videoCapabilities.getHeightAlignment();
        createMap4.putString("message", "Resolution must be aligned to " + widthAlignment + "x" + heightAlignment);
        WritableMap createMap5 = Arguments.createMap();
        createMap5.putInt("width", i10);
        createMap5.putInt("height", i11);
        Unit unit2 = Unit.f32008a;
        createMap4.putMap("current", createMap5);
        WritableMap createMap6 = Arguments.createMap();
        createMap6.putInt("width", videoCapabilities.getWidthAlignment());
        createMap6.putInt("height", videoCapabilities.getHeightAlignment());
        createMap4.putMap("alignment", createMap6);
        createArray.pushMap(createMap4);
        return createArray;
    }

    private final WritableMap createCapabilitiesMap(MediaCodecInfo.VideoCapabilities videoCapabilities) {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        WritableMap createMap2 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
        Integer lower = videoCapabilities.getSupportedWidths().getLower();
        Intrinsics.checkNotNullExpressionValue(lower, "getLower(...)");
        createMap2.putInt(ViewProps.MIN_WIDTH, lower.intValue());
        Integer upper = videoCapabilities.getSupportedWidths().getUpper();
        Intrinsics.checkNotNullExpressionValue(upper, "getUpper(...)");
        createMap2.putInt(ViewProps.MAX_WIDTH, upper.intValue());
        Integer lower2 = videoCapabilities.getSupportedHeights().getLower();
        Intrinsics.checkNotNullExpressionValue(lower2, "getLower(...)");
        createMap2.putInt(ViewProps.MIN_HEIGHT, lower2.intValue());
        Integer upper2 = videoCapabilities.getSupportedHeights().getUpper();
        Intrinsics.checkNotNullExpressionValue(upper2, "getUpper(...)");
        createMap2.putInt(ViewProps.MAX_HEIGHT, upper2.intValue());
        createMap.putMap("resolution", createMap2);
        WritableMap createMap3 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap3, "createMap(...)");
        Integer lower3 = videoCapabilities.getSupportedFrameRates().getLower();
        if (lower3 != null) {
            createMap3.putDouble("min", lower3.intValue());
        }
        Integer upper3 = videoCapabilities.getSupportedFrameRates().getUpper();
        if (upper3 != null) {
            createMap3.putDouble("max", upper3.intValue());
        }
        createMap.putMap("frameRate", createMap3);
        WritableMap createMap4 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap4, "createMap(...)");
        Integer lower4 = videoCapabilities.getBitrateRange().getLower();
        Intrinsics.checkNotNullExpressionValue(lower4, "getLower(...)");
        createMap4.putInt("min", lower4.intValue());
        Integer upper4 = videoCapabilities.getBitrateRange().getUpper();
        Intrinsics.checkNotNullExpressionValue(upper4, "getUpper(...)");
        createMap4.putInt("max", upper4.intValue());
        createMap.putMap("bitrate", createMap4);
        WritableMap createMap5 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap5, "createMap(...)");
        createMap5.putInt("widthAlignment", videoCapabilities.getWidthAlignment());
        createMap5.putInt("heightAlignment", videoCapabilities.getHeightAlignment());
        createMap.putMap("blockSize", createMap5);
        return createMap;
    }

    private final WritableMap detectFileOrigin(Uri uri) {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        String path = uri.getPath();
        String str = "";
        if (path == null) {
            path = "";
        }
        String lastPathSegment = uri.getLastPathSegment();
        if (lastPathSegment != null) {
            str = lastPathSegment;
        }
        if (!StringsKt.V(path, "/tmp/", false, 2, null) && !StringsKt.V(path, "/temp/", false, 2, null) && !StringsKt.V(path, "/cache/", false, 2, null)) {
            if (!StringsKt.V(path, "/DCIM/Camera/", false, 2, null) && !StringsKt.P(str, "IMG_", false, 2, null)) {
                if (!StringsKt.V(path, "/DCIM/Screenshots/", false, 2, null) && !StringsKt.V(path, "/Pictures/Screenshots/", false, 2, null) && !StringsKt.V(str, "Screenshot", false, 2, null) && !StringsKt.V(str, "Screen Shot", false, 2, null)) {
                    if (StringsKt.V(path, "/Download/", false, 2, null)) {
                        createMap.putString("source", "downloads");
                        createMap.putString("confidence", "medium");
                    } else if (!StringsKt.V(str, "edited", false, 2, null) && !StringsKt.V(path, "edited", false, 2, null)) {
                        createMap.putString("source", "file");
                        createMap.putString("confidence", "low");
                    } else {
                        createMap.putString("source", "edited");
                        createMap.putString("confidence", "medium");
                    }
                } else {
                    createMap.putString("source", "screenshot");
                    createMap.putString("confidence", "high");
                }
            } else {
                createMap.putString("source", "camera");
                createMap.putString("confidence", "high");
            }
        } else {
            createMap.putString("source", "picker");
            createMap.putString("confidence", "medium");
        }
        if (str.length() == 0) {
            str = "unknown";
        }
        createMap.putString("filename", str);
        if (path.length() == 0) {
            path = "unknown";
        }
        createMap.putString("path", path);
        return createMap;
    }

    private final WritableMap detectMediaOrigin(String str) {
        String str2;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("source", "unknown");
        createMap.putString("confidence", "low");
        try {
            Uri parse = Uri.parse(str);
            String scheme = parse.getScheme();
            if (scheme != null) {
                str2 = scheme.toLowerCase(Locale.ROOT);
                Intrinsics.checkNotNullExpressionValue(str2, "toLowerCase(...)");
            } else {
                str2 = null;
            }
            if (str2 != null) {
                switch (str2.hashCode()) {
                    case 3143036:
                        if (!str2.equals("file")) {
                            break;
                        } else {
                            return detectFileOrigin(parse);
                        }
                    case 3213448:
                        if (!str2.equals("http")) {
                            break;
                        }
                        createMap.putString("source", "network");
                        createMap.putString("confidence", "medium");
                        return createMap;
                    case 99617003:
                        if (!str2.equals("https")) {
                            break;
                        }
                        createMap.putString("source", "network");
                        createMap.putString("confidence", "medium");
                        return createMap;
                    case 951530617:
                        if (str2.equals("content")) {
                            String authority = parse.getAuthority();
                            if (authority != null && StringsKt.V(authority, "media", false, 2, null)) {
                                createMap.putString("source", "gallery");
                                createMap.putString("confidence", "medium");
                                return createMap;
                            } else if (authority != null && StringsKt.V(authority, "downloads", false, 2, null)) {
                                createMap.putString("source", "downloads");
                                createMap.putString("confidence", "medium");
                                return createMap;
                            } else {
                                createMap.putString("source", "gallery");
                                createMap.putString("confidence", "low");
                                return createMap;
                            }
                        }
                        break;
                }
            }
            createMap.putString("source", "unknown");
            createMap.putString("confidence", "low");
            return createMap;
        } catch (Exception e10) {
            Log.INSTANCE.w("MediaManagerModule", "Error parsing URI for origin detection: " + str, e10);
            return createMap;
        }
    }

    private final MediaCodecInfo getEncoderInfo(String str) {
        MediaCodecInfo[] codecInfos = new MediaCodecList(0).getCodecInfos();
        Intrinsics.checkNotNullExpressionValue(codecInfos, "getCodecInfos(...)");
        for (MediaCodecInfo mediaCodecInfo : codecInfos) {
            if (mediaCodecInfo.isEncoder()) {
                String[] supportedTypes = mediaCodecInfo.getSupportedTypes();
                Intrinsics.checkNotNullExpressionValue(supportedTypes, "getSupportedTypes(...)");
                for (String str2 : supportedTypes) {
                    if (Intrinsics.areEqual(str2, str)) {
                        return mediaCodecInfo;
                    }
                }
                continue;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object getImageDimensions(String str, Continuation<? super Pair<Integer, Integer>> continuation) {
        return g.g(m0.b(), new MediaManagerModule$getImageDimensions$2(str, this, null), continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object loadImageDataFromUri(String str, Continuation<? super byte[]> continuation) {
        return g.g(m0.b(), new MediaManagerModule$loadImageDataFromUri$2(str, this, null), continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit mediaResolver$lambda$0(MediaManagerModule mediaManagerModule, Uri uri, int i10) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        ReactEvents reactEvents = mediaManagerModule.reactEvents;
        ReactApplicationContext reactApplicationContext = mediaManagerModule.getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        String uri2 = uri.toString();
        Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
        reactEvents.emitModuleEvent(reactApplicationContext, new CompressionProgressEvent(uri2, i10));
        return Unit.f32008a;
    }

    @ReactMethod
    public final void addListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
    }

    @ReactMethod
    public final void calculateImageQualityMetrics(@NotNull String originalUri, @NotNull String compressedUri, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(originalUri, "originalUri");
        Intrinsics.checkNotNullParameter(compressedUri, "compressedUri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        os.i.d(this.scope, null, null, new MediaManagerModule$calculateImageQualityMetrics$1(this, originalUri, compressedUri, promise, null), 3, null);
    }

    @ReactMethod
    public final void cancelResolveToMediaFilePath(@NotNull String uri, ReadableMap readableMap, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        this.mediaResolver.cancel(Uri.parse(uri));
        promise.resolve(null);
    }

    @ReactMethod
    public final void convertBase64ToGIF(@NotNull String uri, ReadableMap readableMap, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        throw new IllegalStateException("Unused on Android");
    }

    @ReactMethod
    public final void convertBase64ToJPEG(@NotNull String uri, ReadableMap readableMap, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        throw new IllegalStateException("Unused on Android");
    }

    @ReactMethod
    public final void convertToCompatibleMOV(@NotNull String uri, ReadableMap readableMap, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        throw new IllegalStateException("Unused on Android");
    }

    @ReactMethod
    public final void convertToJPEG(@NotNull String uri, ReadableMap readableMap, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        throw new IllegalStateException("Unused on Android");
    }

    @ReactMethod
    public final void convertToVideoFilePath(@NotNull String uri, ReadableMap readableMap, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        throw new IllegalStateException("Unused on Android");
    }

    @ReactMethod
    public final void downloadMediaAsset(@NotNull String uri, int i10, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        downloadMediaAssetWithContentType(uri, i10, null, promise);
    }

    @ReactMethod
    public final void downloadMediaAssetWithContentType(@NotNull String uri, int i10, String str, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        os.i.d(this.scope, m0.b(), null, new MediaManagerModule$downloadMediaAssetWithContentType$1(uri, str, this, promise, null), 2, null);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule
    @NotNull
    public Map<String, List<String>> getConstants() {
        return o0.f(v.a("supportedExtensions", CollectionsKt.o("mp4", "mov", "qt", "png", "jpg", "jpeg", "gif", "webp")));
    }

    @ReactMethod
    public final void getDeviceStateInfo(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        Object systemService = reactApplicationContext.getSystemService("batterymanager");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.os.BatteryManager");
        double intProperty = ((BatteryManager) systemService).getIntProperty(4) / 100.0d;
        String str = "UNKNOWN";
        if (Build.VERSION.SDK_INT >= 29) {
            Object systemService2 = reactApplicationContext.getSystemService("power");
            Intrinsics.checkNotNull(systemService2, "null cannot be cast to non-null type android.os.PowerManager");
            int currentThermalStatus = ((PowerManager) systemService2).getCurrentThermalStatus();
            if (currentThermalStatus != 0) {
                if (currentThermalStatus == 1 || currentThermalStatus == 2) {
                    str = "FAIR";
                } else if (currentThermalStatus != 3) {
                    if (currentThermalStatus == 4 || currentThermalStatus == 5) {
                        str = "CRITICAL";
                    }
                } else {
                    str = "SERIOUS";
                }
            } else {
                str = "NOMINAL";
            }
        }
        Object systemService3 = reactApplicationContext.getSystemService("power");
        Intrinsics.checkNotNull(systemService3, "null cannot be cast to non-null type android.os.PowerManager");
        boolean isPowerSaveMode = ((PowerManager) systemService3).isPowerSaveMode();
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("thermalState", str);
        createMap.putDouble("batteryLevel", intProperty);
        createMap.putBoolean("isLowPowerMode", isPowerSaveMode);
        promise.resolve(createMap);
    }

    @ReactMethod
    public final void getLosslessImageData(@NotNull String uri, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        promise.resolve(uri);
    }

    @ReactMethod
    public final void getMediaOrigin(@NotNull String uri, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        try {
            promise.resolve(detectMediaOrigin(uri));
        } catch (Exception e10) {
            Log log = Log.INSTANCE;
            log.e("MediaManagerModule", "Failed to detect media origin for URI: " + uri, e10);
            WritableMap createMap = Arguments.createMap();
            createMap.putString("source", "unknown");
            createMap.putString("confidence", "low");
            Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
            promise.resolve(createMap);
        }
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "MediaManager";
    }

    @ReactMethod
    public final void getVideoMetadata(@NotNull String uri, ReadableMap readableMap, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        os.i.d(this.scope, null, null, new MediaManagerModule$getVideoMetadata$1(this, Uri.parse(uri), promise, null), 3, null);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        i.d(this.scope, new CancellationException("Module destroyed"));
    }

    @ReactMethod
    public final void isHEVCEncodingSupported(@NotNull Promise promise) {
        boolean z10;
        Intrinsics.checkNotNullParameter(promise, "promise");
        try {
            if (getEncoderInfo("video/hevc") != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            promise.resolve(Boolean.valueOf(z10));
        } catch (Exception unused) {
            promise.resolve(Boolean.FALSE);
        }
    }

    @ReactMethod
    public final void isVideoEncodingSupported(@NotNull ReadableMap options, @NotNull Promise promise) {
        String str;
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(promise, "promise");
        try {
            int i10 = options.getInt("width");
            int i11 = options.getInt("height");
            double d10 = options.getDouble("frameRate");
            if (options.getBoolean("isHEVC")) {
                str = "video/hevc";
            } else {
                str = "video/avc";
            }
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            MediaCodecInfo encoderInfo = getEncoderInfo(str);
            if (encoderInfo == null) {
                createMap.putBoolean("isSupported", false);
                WritableArray createArray = Arguments.createArray();
                Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
                WritableMap createMap2 = Arguments.createMap();
                createMap2.putString("type", "codec_not_found");
                createMap2.putString("message", "No encoder found for mime type: " + str);
                createArray.pushMap(createMap2);
                createMap.putArray("failures", createArray);
                createMap.putMap("capabilities", Arguments.createMap());
                promise.resolve(createMap);
                return;
            }
            createMap.putString("encoderName", encoderInfo.getName());
            MediaCodecInfo.VideoCapabilities videoCapabilities = encoderInfo.getCapabilitiesForType(str).getVideoCapabilities();
            Intrinsics.checkNotNull(videoCapabilities);
            createMap.putMap("capabilities", createCapabilitiesMap(videoCapabilities));
            ReadableArray checkEncodingConstraints = checkEncodingConstraints(i10, i11, d10, videoCapabilities);
            if (checkEncodingConstraints.size() > 0) {
                createMap.putBoolean("isSupported", false);
                createMap.putArray("failures", checkEncodingConstraints);
            } else {
                createMap.putBoolean("isSupported", true);
            }
            promise.resolve(createMap);
        } catch (Exception e10) {
            String message = e10.getMessage();
            promise.reject("ERROR", "Error checking video encoding support: " + message);
        }
    }

    @ReactMethod
    public final void removeListeners(int i10) {
    }

    @ReactMethod
    public final void resolveToMediaFilePath(@NotNull String uri, ReadableMap readableMap, @NotNull Promise promise) {
        boolean z10;
        EncodingConfig encodingConfig;
        ReadableMap map;
        Intrinsics.checkNotNullParameter(uri, "uri");
        Intrinsics.checkNotNullParameter(promise, "promise");
        Uri parse = Uri.parse(uri);
        int i10 = (int) (NativeMapExtensionsKt.getDouble(readableMap, "compressionQuality", 1.0d) * 100);
        boolean z11 = NativeMapExtensionsKt.getBoolean(readableMap, "isLowQuality", false);
        boolean z12 = NativeMapExtensionsKt.getBoolean(readableMap, "skipVideoTranscode", false);
        boolean z13 = NativeMapExtensionsKt.getBoolean(readableMap, "useOriginalIfSmaller", false);
        if (readableMap != null && (map = readableMap.getMap("encodingConfig")) != null) {
            try {
                int i11 = map.getInt(Snapshot.TARGET_WIDTH);
                int i12 = map.getInt(Snapshot.TARGET_HEIGHT);
                double d10 = map.getDouble("keyFrameIntervalSeconds");
                int i13 = map.getInt("targetBitrate");
                double d11 = map.getDouble("frameRate");
                z10 = z11;
                encodingConfig = new EncodingConfig(i11, i12, Double.valueOf(d11), Double.valueOf(d10), Integer.valueOf(i13), map.getBoolean("useHEVC"), map.getBoolean("createHDR"), Integer.valueOf(map.getInt("rotationDegrees")), map.getInt("progressUpdateGranularity"));
            } catch (Exception e10) {
                String message = e10.getMessage();
                promise.reject(new IllegalArgumentException("Invalid encodingConfig: " + message));
                return;
            }
        } else {
            z10 = z11;
            encodingConfig = null;
        }
        os.i.d(this.scope, null, null, new MediaManagerModule$resolveToMediaFilePath$1(this, parse, i10, z10, z12, z13, encodingConfig, promise, uri, null), 3, null);
    }
}
