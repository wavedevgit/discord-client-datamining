package com.facebook.react.views.image;

import android.graphics.Shader;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.react.common.ReactConstants;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import p8.a;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u000b\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u0005H\u0007J\u0012\u0010\u000e\u001a\u00020\u000f2\b\u0010\r\u001a\u0004\u0018\u00010\u0005H\u0007J\b\u0010\u0010\u001a\u00020\fH\u0007J\b\u0010\u0011\u001a\u00020\u000fH\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/facebook/react/views/image/ImageResizeMode;", "", "<init>", "()V", "RESIZE_MODE_CONTAIN", "", "RESIZE_MODE_COVER", "RESIZE_MODE_STRETCH", "RESIZE_MODE_CENTER", "RESIZE_MODE_REPEAT", "RESIZE_MODE_NONE", "toScaleType", "Lcom/facebook/drawee/drawable/ScalingUtils$ScaleType;", "resizeModeValue", "toTileMode", "Landroid/graphics/Shader$TileMode;", "defaultValue", "defaultTileMode", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ImageResizeMode {
    @NotNull
    public static final ImageResizeMode INSTANCE = new ImageResizeMode();
    @NotNull
    private static final String RESIZE_MODE_CENTER = "center";
    @NotNull
    private static final String RESIZE_MODE_CONTAIN = "contain";
    @NotNull
    private static final String RESIZE_MODE_COVER = "cover";
    @NotNull
    private static final String RESIZE_MODE_NONE = "none";
    @NotNull
    private static final String RESIZE_MODE_REPEAT = "repeat";
    @NotNull
    private static final String RESIZE_MODE_STRETCH = "stretch";

    private ImageResizeMode() {
    }

    @NotNull
    public static final Shader.TileMode defaultTileMode() {
        return Shader.TileMode.CLAMP;
    }

    @NotNull
    public static final ScalingUtils$ScaleType defaultValue() {
        ScalingUtils$ScaleType CENTER_CROP = ScalingUtils$ScaleType.f9638i;
        Intrinsics.checkNotNullExpressionValue(CENTER_CROP, "CENTER_CROP");
        return CENTER_CROP;
    }

    @NotNull
    public static final ScalingUtils$ScaleType toScaleType(String str) {
        if (str != null) {
            switch (str.hashCode()) {
                case -1881872635:
                    if (str.equals(RESIZE_MODE_STRETCH)) {
                        ScalingUtils$ScaleType FIT_XY = ScalingUtils$ScaleType.f9630a;
                        Intrinsics.checkNotNullExpressionValue(FIT_XY, "FIT_XY");
                        return FIT_XY;
                    }
                    break;
                case -1364013995:
                    if (str.equals(RESIZE_MODE_CENTER)) {
                        ScalingUtils$ScaleType CENTER_INSIDE = ScalingUtils$ScaleType.f9637h;
                        Intrinsics.checkNotNullExpressionValue(CENTER_INSIDE, "CENTER_INSIDE");
                        return CENTER_INSIDE;
                    }
                    break;
                case -934531685:
                    if (str.equals(RESIZE_MODE_REPEAT)) {
                        return ScaleTypeStartInside.Companion.getINSTANCE();
                    }
                    break;
                case 3387192:
                    if (str.equals("none")) {
                        return ScaleTypeStartInside.Companion.getINSTANCE();
                    }
                    break;
                case 94852023:
                    if (str.equals(RESIZE_MODE_COVER)) {
                        ScalingUtils$ScaleType CENTER_CROP = ScalingUtils$ScaleType.f9638i;
                        Intrinsics.checkNotNullExpressionValue(CENTER_CROP, "CENTER_CROP");
                        return CENTER_CROP;
                    }
                    break;
                case 951526612:
                    if (str.equals(RESIZE_MODE_CONTAIN)) {
                        ScalingUtils$ScaleType FIT_CENTER = ScalingUtils$ScaleType.f9634e;
                        Intrinsics.checkNotNullExpressionValue(FIT_CENTER, "FIT_CENTER");
                        return FIT_CENTER;
                    }
                    break;
            }
        }
        if (str != null) {
            a.J(ReactConstants.TAG, "Invalid resize mode: '" + str + "'");
        }
        return defaultValue();
    }

    @NotNull
    public static final Shader.TileMode toTileMode(String str) {
        if (!Intrinsics.areEqual(RESIZE_MODE_CONTAIN, str) && !Intrinsics.areEqual(RESIZE_MODE_COVER, str) && !Intrinsics.areEqual(RESIZE_MODE_STRETCH, str) && !Intrinsics.areEqual(RESIZE_MODE_CENTER, str) && !Intrinsics.areEqual("none", str)) {
            if (Intrinsics.areEqual(RESIZE_MODE_REPEAT, str)) {
                return Shader.TileMode.REPEAT;
            }
            if (str != null) {
                a.J(ReactConstants.TAG, "Invalid resize mode: '" + str + "'");
            }
            return defaultTileMode();
        }
        return Shader.TileMode.CLAMP;
    }
}
