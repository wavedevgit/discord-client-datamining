package com.facebook.react.uimanager;

import android.annotation.TargetApi;
import android.graphics.BlendMode;
import android.graphics.ColorMatrix;
import android.graphics.ColorMatrixColorFilter;
import android.graphics.RenderEffect;
import android.graphics.Shader;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0012\bÁ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0007J\u0014\u0010\b\u001a\u0004\u0018\u00010\t2\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0007J\u0012\u0010\n\u001a\u00020\u000b2\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0007J\u001c\u0010\f\u001a\u0004\u0018\u00010\u00052\u0006\u0010\r\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u001a\u0010\u0010\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u0010\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u000eH\u0002J\u001a\u0010\u0014\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J2\u0010\u0015\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u000e2\u0006\u0010\u0017\u001a\u00020\u000e2\u0006\u0010\u0018\u001a\u00020\u000e2\u0006\u0010\u0019\u001a\u00020\u001a2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u001a\u0010\u001b\u001a\u00020\u00052\u0006\u0010\u001c\u001a\u00020\u001d2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u000e\u0010\u001e\u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u000eJ\u001a\u0010\u001f\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u0010\u0010 \u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u000eH\u0002J\u001a\u0010!\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u0010\u0010\"\u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u000eH\u0002J\u001a\u0010#\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u0010\u0010$\u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u000eH\u0002J\u001a\u0010%\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u0010\u0010&\u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u000eH\u0002J\u001a\u0010'\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u0010\u0010(\u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u000eH\u0002J\u001a\u0010)\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005J\u0010\u0010*\u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u000eH\u0002J\u001c\u0010+\u001a\u00020\u00052\u0006\u0010,\u001a\u00020\u00132\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005H\u0002J\u0015\u0010-\u001a\u00020\u000e2\u0006\u0010\r\u001a\u00020\u000eH\u0000¢\u0006\u0002\b.¨\u0006/"}, d2 = {"Lcom/facebook/react/uimanager/FilterHelper;", "", "<init>", "()V", "parseFilters", "Landroid/graphics/RenderEffect;", "filters", "Lcom/facebook/react/bridge/ReadableArray;", "parseColorMatrixFilters", "Landroid/graphics/ColorMatrixColorFilter;", "isOnlyColorMatrixFilters", "", "createBlurEffect", "sigma", "", "chainedEffects", "createBrightnessEffect", "amount", "createBrightnessColorMatrix", "Landroid/graphics/ColorMatrix;", "createOpacityEffect", "createDropShadowEffect", "offsetX", "offsetY", "blurRadius", ViewProps.COLOR, "", "parseAndCreateDropShadowEffect", "filterValues", "Lcom/facebook/react/bridge/ReadableMap;", "createOpacityColorMatrix", "createContrastEffect", "createContrastColorMatrix", "createGrayscaleEffect", "createGrayscaleColorMatrix", "createSepiaEffect", "createSepiaColorMatrix", "createSaturateEffect", "createSaturateColorMatrix", "createHueRotateEffect", "createHueRotateColorMatrix", "createInvertEffect", "createInvertColorMatrix", "createColorMatrixEffect", "colorMatrix", "sigmaToRadius", "sigmaToRadius$ReactAndroid_release", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@TargetApi(ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FilterHelper {
    @NotNull
    public static final FilterHelper INSTANCE = new FilterHelper();

    private FilterHelper() {
    }

    public static /* synthetic */ RenderEffect createBlurEffect$default(FilterHelper filterHelper, float f10, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createBlurEffect(f10, renderEffect);
    }

    private final ColorMatrix createBrightnessColorMatrix(float f10) {
        ColorMatrix colorMatrix = new ColorMatrix();
        colorMatrix.setScale(f10, f10, f10, 1.0f);
        return colorMatrix;
    }

    public static /* synthetic */ RenderEffect createBrightnessEffect$default(FilterHelper filterHelper, float f10, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createBrightnessEffect(f10, renderEffect);
    }

    private final RenderEffect createColorMatrixEffect(ColorMatrix colorMatrix, RenderEffect renderEffect) {
        if (renderEffect == null) {
            RenderEffect createColorFilterEffect = RenderEffect.createColorFilterEffect(new ColorMatrixColorFilter(colorMatrix));
            Intrinsics.checkNotNull(createColorFilterEffect);
            return createColorFilterEffect;
        }
        RenderEffect createColorFilterEffect2 = RenderEffect.createColorFilterEffect(new ColorMatrixColorFilter(colorMatrix), renderEffect);
        Intrinsics.checkNotNull(createColorFilterEffect2);
        return createColorFilterEffect2;
    }

    static /* synthetic */ RenderEffect createColorMatrixEffect$default(FilterHelper filterHelper, ColorMatrix colorMatrix, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createColorMatrixEffect(colorMatrix, renderEffect);
    }

    private final ColorMatrix createContrastColorMatrix(float f10) {
        float f11 = ((float) SetSpanOperation.SPAN_MAX_PRIORITY) * ((-(f10 / 2.0f)) + 0.5f);
        return new ColorMatrix(new float[]{f10, 0.0f, 0.0f, 0.0f, f11, 0.0f, f10, 0.0f, 0.0f, f11, 0.0f, 0.0f, f10, 0.0f, f11, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f});
    }

    public static /* synthetic */ RenderEffect createContrastEffect$default(FilterHelper filterHelper, float f10, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createContrastEffect(f10, renderEffect);
    }

    public static /* synthetic */ RenderEffect createDropShadowEffect$default(FilterHelper filterHelper, float f10, float f11, float f12, int i10, RenderEffect renderEffect, int i11, Object obj) {
        if ((i11 & 16) != 0) {
            renderEffect = null;
        }
        return filterHelper.createDropShadowEffect(f10, f11, f12, i10, renderEffect);
    }

    private final ColorMatrix createGrayscaleColorMatrix(float f10) {
        float f11 = 1 - f10;
        float f12 = 0.7152f - (f11 * 0.7152f);
        float f13 = 0.0722f - (f11 * 0.0722f);
        float f14 = 0.2126f - (f11 * 0.2126f);
        return new ColorMatrix(new float[]{(0.7874f * f11) + 0.2126f, f12, f13, 0.0f, 0.0f, f14, (0.2848f * f11) + 0.7152f, f13, 0.0f, 0.0f, f14, f12, (f11 * 0.9278f) + 0.0722f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f});
    }

    public static /* synthetic */ RenderEffect createGrayscaleEffect$default(FilterHelper filterHelper, float f10, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createGrayscaleEffect(f10, renderEffect);
    }

    private final ColorMatrix createHueRotateColorMatrix(float f10) {
        double radians = Math.toRadians(f10);
        float cos = (float) Math.cos(radians);
        float sin = (float) Math.sin(radians);
        float f11 = 0.715f - (cos * 0.715f);
        float f12 = sin * 0.715f;
        float f13 = 0.072f - (cos * 0.072f);
        float f14 = 0.213f - (cos * 0.213f);
        return new ColorMatrix(new float[]{((cos * 0.787f) + 0.213f) - (sin * 0.213f), f11 - f12, (sin * 0.928f) + f13, 0.0f, 0.0f, (0.143f * sin) + f14, (0.285f * cos) + 0.715f + (0.14f * sin), f13 - (0.283f * sin), 0.0f, 0.0f, f14 - (0.787f * sin), f11 + f12, (cos * 0.928f) + 0.072f + (sin * 0.072f), 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f});
    }

    public static /* synthetic */ RenderEffect createHueRotateEffect$default(FilterHelper filterHelper, float f10, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createHueRotateEffect(f10, renderEffect);
    }

    private final ColorMatrix createInvertColorMatrix(float f10) {
        float f11 = 1 - (2 * f10);
        float f12 = f10 * ((float) SetSpanOperation.SPAN_MAX_PRIORITY);
        return new ColorMatrix(new float[]{f11, 0.0f, 0.0f, 0.0f, f12, 0.0f, f11, 0.0f, 0.0f, f12, 0.0f, 0.0f, f11, 0.0f, f12, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f});
    }

    public static /* synthetic */ RenderEffect createInvertEffect$default(FilterHelper filterHelper, float f10, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createInvertEffect(f10, renderEffect);
    }

    public static /* synthetic */ RenderEffect createOpacityEffect$default(FilterHelper filterHelper, float f10, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createOpacityEffect(f10, renderEffect);
    }

    private final ColorMatrix createSaturateColorMatrix(float f10) {
        ColorMatrix colorMatrix = new ColorMatrix();
        colorMatrix.setSaturation(f10);
        return colorMatrix;
    }

    public static /* synthetic */ RenderEffect createSaturateEffect$default(FilterHelper filterHelper, float f10, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createSaturateEffect(f10, renderEffect);
    }

    private final ColorMatrix createSepiaColorMatrix(float f10) {
        float f11 = 1 - f10;
        return new ColorMatrix(new float[]{(0.607f * f11) + 0.393f, 0.769f - (f11 * 0.769f), 0.189f - (f11 * 0.189f), 0.0f, 0.0f, 0.349f - (f11 * 0.349f), (0.314f * f11) + 0.686f, 0.168f - (f11 * 0.168f), 0.0f, 0.0f, 0.272f - (f11 * 0.272f), 0.534f - (f11 * 0.534f), (f11 * 0.869f) + 0.131f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f});
    }

    public static /* synthetic */ RenderEffect createSepiaEffect$default(FilterHelper filterHelper, float f10, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.createSepiaEffect(f10, renderEffect);
    }

    public static final boolean isOnlyColorMatrixFilters(ReadableArray readableArray) {
        if (readableArray == null || readableArray.size() == 0) {
            return false;
        }
        int size = readableArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            ReadableMap map = readableArray.getMap(i10);
            Intrinsics.checkNotNull(map);
            String key = map.getEntryIterator().next().getKey();
            if (Intrinsics.areEqual(key, "blur") || Intrinsics.areEqual(key, "dropShadow")) {
                return false;
            }
        }
        return true;
    }

    public static /* synthetic */ RenderEffect parseAndCreateDropShadowEffect$default(FilterHelper filterHelper, ReadableMap readableMap, RenderEffect renderEffect, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            renderEffect = null;
        }
        return filterHelper.parseAndCreateDropShadowEffect(readableMap, renderEffect);
    }

    public static final ColorMatrixColorFilter parseColorMatrixFilters(ReadableArray readableArray) {
        ColorMatrix createSaturateColorMatrix;
        if (readableArray == null) {
            return null;
        }
        ColorMatrix colorMatrix = new ColorMatrix();
        int size = readableArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            ReadableMap map = readableArray.getMap(i10);
            if (map != null) {
                Map.Entry<String, Object> next = map.getEntryIterator().next();
                String key = next.getKey();
                Object value = next.getValue();
                Intrinsics.checkNotNull(value, "null cannot be cast to non-null type kotlin.Double");
                float doubleValue = (float) ((Double) value).doubleValue();
                switch (key.hashCode()) {
                    case -2114203985:
                        if (key.equals("saturate")) {
                            createSaturateColorMatrix = INSTANCE.createSaturateColorMatrix(doubleValue);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid color matrix filter: " + key);
                        }
                    case -1267206133:
                        if (key.equals(ViewProps.OPACITY)) {
                            createSaturateColorMatrix = INSTANCE.createOpacityColorMatrix(doubleValue);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid color matrix filter: " + key);
                        }
                    case -1183703082:
                        if (key.equals("invert")) {
                            createSaturateColorMatrix = INSTANCE.createInvertColorMatrix(doubleValue);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid color matrix filter: " + key);
                        }
                    case -905411385:
                        if (key.equals("grayscale")) {
                            createSaturateColorMatrix = INSTANCE.createGrayscaleColorMatrix(doubleValue);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid color matrix filter: " + key);
                        }
                    case -566947070:
                        if (key.equals("contrast")) {
                            createSaturateColorMatrix = INSTANCE.createContrastColorMatrix(doubleValue);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid color matrix filter: " + key);
                        }
                    case 109324790:
                        if (key.equals("sepia")) {
                            createSaturateColorMatrix = INSTANCE.createSepiaColorMatrix(doubleValue);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid color matrix filter: " + key);
                        }
                    case 648162385:
                        if (key.equals("brightness")) {
                            createSaturateColorMatrix = INSTANCE.createBrightnessColorMatrix(doubleValue);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid color matrix filter: " + key);
                        }
                    case 650888307:
                        if (key.equals("hueRotate")) {
                            createSaturateColorMatrix = INSTANCE.createHueRotateColorMatrix(doubleValue);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid color matrix filter: " + key);
                        }
                    default:
                        throw new IllegalArgumentException("Invalid color matrix filter: " + key);
                }
                colorMatrix.preConcat(createSaturateColorMatrix);
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        return new ColorMatrixColorFilter(colorMatrix);
    }

    public static final RenderEffect parseFilters(ReadableArray readableArray) {
        RenderEffect renderEffect = null;
        if (readableArray == null) {
            return null;
        }
        int size = readableArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            ReadableMap map = readableArray.getMap(i10);
            if (map != null) {
                Map.Entry<String, Object> next = map.getEntryIterator().next();
                String key = next.getKey();
                switch (key.hashCode()) {
                    case -2114203985:
                        if (key.equals("saturate")) {
                            FilterHelper filterHelper = INSTANCE;
                            Object value = next.getValue();
                            Intrinsics.checkNotNull(value, "null cannot be cast to non-null type kotlin.Double");
                            renderEffect = filterHelper.createSaturateEffect((float) ((Double) value).doubleValue(), renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    case -1267206133:
                        if (key.equals(ViewProps.OPACITY)) {
                            FilterHelper filterHelper2 = INSTANCE;
                            Object value2 = next.getValue();
                            Intrinsics.checkNotNull(value2, "null cannot be cast to non-null type kotlin.Double");
                            renderEffect = filterHelper2.createOpacityEffect((float) ((Double) value2).doubleValue(), renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    case -1183703082:
                        if (key.equals("invert")) {
                            FilterHelper filterHelper3 = INSTANCE;
                            Object value3 = next.getValue();
                            Intrinsics.checkNotNull(value3, "null cannot be cast to non-null type kotlin.Double");
                            renderEffect = filterHelper3.createInvertEffect((float) ((Double) value3).doubleValue(), renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    case -905411385:
                        if (key.equals("grayscale")) {
                            FilterHelper filterHelper4 = INSTANCE;
                            Object value4 = next.getValue();
                            Intrinsics.checkNotNull(value4, "null cannot be cast to non-null type kotlin.Double");
                            renderEffect = filterHelper4.createGrayscaleEffect((float) ((Double) value4).doubleValue(), renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    case -566947070:
                        if (key.equals("contrast")) {
                            FilterHelper filterHelper5 = INSTANCE;
                            Object value5 = next.getValue();
                            Intrinsics.checkNotNull(value5, "null cannot be cast to non-null type kotlin.Double");
                            renderEffect = filterHelper5.createContrastEffect((float) ((Double) value5).doubleValue(), renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    case 3027047:
                        if (key.equals("blur")) {
                            FilterHelper filterHelper6 = INSTANCE;
                            Object value6 = next.getValue();
                            Intrinsics.checkNotNull(value6, "null cannot be cast to non-null type kotlin.Double");
                            renderEffect = filterHelper6.createBlurEffect((float) ((Double) value6).doubleValue(), renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    case 109324790:
                        if (key.equals("sepia")) {
                            FilterHelper filterHelper7 = INSTANCE;
                            Object value7 = next.getValue();
                            Intrinsics.checkNotNull(value7, "null cannot be cast to non-null type kotlin.Double");
                            renderEffect = filterHelper7.createSepiaEffect((float) ((Double) value7).doubleValue(), renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    case 648162385:
                        if (key.equals("brightness")) {
                            FilterHelper filterHelper8 = INSTANCE;
                            Object value8 = next.getValue();
                            Intrinsics.checkNotNull(value8, "null cannot be cast to non-null type kotlin.Double");
                            renderEffect = filterHelper8.createBrightnessEffect((float) ((Double) value8).doubleValue(), renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    case 650888307:
                        if (key.equals("hueRotate")) {
                            FilterHelper filterHelper9 = INSTANCE;
                            Object value9 = next.getValue();
                            Intrinsics.checkNotNull(value9, "null cannot be cast to non-null type kotlin.Double");
                            renderEffect = filterHelper9.createHueRotateEffect((float) ((Double) value9).doubleValue(), renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    case 906978543:
                        if (key.equals("dropShadow")) {
                            FilterHelper filterHelper10 = INSTANCE;
                            Object value10 = next.getValue();
                            Intrinsics.checkNotNull(value10, "null cannot be cast to non-null type com.facebook.react.bridge.ReadableMap");
                            renderEffect = filterHelper10.parseAndCreateDropShadowEffect((ReadableMap) value10, renderEffect);
                            break;
                        } else {
                            throw new IllegalArgumentException("Invalid filter name: " + key);
                        }
                    default:
                        throw new IllegalArgumentException("Invalid filter name: " + key);
                }
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        return renderEffect;
    }

    public final RenderEffect createBlurEffect(float f10, RenderEffect renderEffect) {
        Shader.TileMode tileMode;
        Shader.TileMode tileMode2;
        if (f10 <= 0.5d) {
            return null;
        }
        float sigmaToRadius$ReactAndroid_release = sigmaToRadius$ReactAndroid_release(f10);
        if (renderEffect == null) {
            tileMode2 = Shader.TileMode.DECAL;
            return RenderEffect.createBlurEffect(sigmaToRadius$ReactAndroid_release, sigmaToRadius$ReactAndroid_release, tileMode2);
        }
        tileMode = Shader.TileMode.DECAL;
        return RenderEffect.createBlurEffect(sigmaToRadius$ReactAndroid_release, sigmaToRadius$ReactAndroid_release, renderEffect, tileMode);
    }

    @NotNull
    public final RenderEffect createBrightnessEffect(float f10, RenderEffect renderEffect) {
        return createColorMatrixEffect(createBrightnessColorMatrix(f10), renderEffect);
    }

    @NotNull
    public final RenderEffect createContrastEffect(float f10, RenderEffect renderEffect) {
        return createColorMatrixEffect(createContrastColorMatrix(f10), renderEffect);
    }

    @NotNull
    public final RenderEffect createDropShadowEffect(float f10, float f11, float f12, int i10, RenderEffect renderEffect) {
        RenderEffect createOffsetEffect;
        RenderEffect renderEffect2;
        BlendMode blendMode;
        Shader.TileMode tileMode;
        BlendMode blendMode2;
        if (renderEffect == null) {
            renderEffect2 = RenderEffect.createOffsetEffect(0.0f, 0.0f);
            Intrinsics.checkNotNullExpressionValue(renderEffect2, "createOffsetEffect(...)");
            createOffsetEffect = RenderEffect.createOffsetEffect(f10, f11);
            Intrinsics.checkNotNullExpressionValue(createOffsetEffect, "createOffsetEffect(...)");
        } else {
            RenderEffect createOffsetEffect2 = RenderEffect.createOffsetEffect(0.0f, 0.0f, renderEffect);
            Intrinsics.checkNotNullExpressionValue(createOffsetEffect2, "createOffsetEffect(...)");
            createOffsetEffect = RenderEffect.createOffsetEffect(f10, f11, renderEffect);
            Intrinsics.checkNotNullExpressionValue(createOffsetEffect, "createOffsetEffect(...)");
            renderEffect2 = createOffsetEffect2;
        }
        q.a();
        blendMode = BlendMode.SRC_IN;
        RenderEffect createColorFilterEffect = RenderEffect.createColorFilterEffect(p.a(i10, blendMode), createOffsetEffect);
        Intrinsics.checkNotNullExpressionValue(createColorFilterEffect, "createColorFilterEffect(...)");
        tileMode = Shader.TileMode.DECAL;
        RenderEffect createBlurEffect = RenderEffect.createBlurEffect(f12, f12, createColorFilterEffect, tileMode);
        Intrinsics.checkNotNullExpressionValue(createBlurEffect, "createBlurEffect(...)");
        blendMode2 = BlendMode.SRC_OVER;
        RenderEffect createBlendModeEffect = RenderEffect.createBlendModeEffect(createBlurEffect, renderEffect2, blendMode2);
        Intrinsics.checkNotNullExpressionValue(createBlendModeEffect, "createBlendModeEffect(...)");
        return createBlendModeEffect;
    }

    @NotNull
    public final RenderEffect createGrayscaleEffect(float f10, RenderEffect renderEffect) {
        return createColorMatrixEffect(createGrayscaleColorMatrix(f10), renderEffect);
    }

    @NotNull
    public final RenderEffect createHueRotateEffect(float f10, RenderEffect renderEffect) {
        return createColorMatrixEffect(createHueRotateColorMatrix(f10), renderEffect);
    }

    @NotNull
    public final RenderEffect createInvertEffect(float f10, RenderEffect renderEffect) {
        return createColorMatrixEffect(createInvertColorMatrix(f10), renderEffect);
    }

    @NotNull
    public final ColorMatrix createOpacityColorMatrix(float f10) {
        ColorMatrix colorMatrix = new ColorMatrix();
        colorMatrix.setScale(1.0f, 1.0f, 1.0f, f10);
        return colorMatrix;
    }

    @NotNull
    public final RenderEffect createOpacityEffect(float f10, RenderEffect renderEffect) {
        return createColorMatrixEffect(createOpacityColorMatrix(f10), renderEffect);
    }

    @NotNull
    public final RenderEffect createSaturateEffect(float f10, RenderEffect renderEffect) {
        return createColorMatrixEffect(createSaturateColorMatrix(f10), renderEffect);
    }

    @NotNull
    public final RenderEffect createSepiaEffect(float f10, RenderEffect renderEffect) {
        return createColorMatrixEffect(createSepiaColorMatrix(f10), renderEffect);
    }

    @NotNull
    public final RenderEffect parseAndCreateDropShadowEffect(@NotNull ReadableMap filterValues, RenderEffect renderEffect) {
        int i10;
        float f10;
        Intrinsics.checkNotNullParameter(filterValues, "filterValues");
        PixelUtil pixelUtil = PixelUtil.INSTANCE;
        float dpToPx = pixelUtil.dpToPx(filterValues.getDouble("offsetX"));
        float dpToPx2 = pixelUtil.dpToPx(filterValues.getDouble("offsetY"));
        if (filterValues.hasKey(ViewProps.COLOR)) {
            i10 = filterValues.getInt(ViewProps.COLOR);
        } else {
            i10 = -16777216;
        }
        int i11 = i10;
        if (filterValues.hasKey("standardDeviation")) {
            f10 = sigmaToRadius$ReactAndroid_release((float) filterValues.getDouble("standardDeviation"));
        } else {
            f10 = 0.0f;
        }
        return createDropShadowEffect(dpToPx, dpToPx2, f10, i11, renderEffect);
    }

    public final float sigmaToRadius$ReactAndroid_release(float f10) {
        float pixelFromDIP = PixelUtil.toPixelFromDIP(f10);
        if (pixelFromDIP > 0.5f) {
            return (pixelFromDIP - 0.5f) / 0.57735f;
        }
        return 0.0f;
    }
}
