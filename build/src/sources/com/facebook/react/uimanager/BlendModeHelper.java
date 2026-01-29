package com.facebook.react.uimanager;

import android.annotation.TargetApi;
import android.graphics.BlendMode;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import androidx.core.view.n0;
import com.facebook.react.R;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\bÁ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0007J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007¨\u0006\f"}, d2 = {"Lcom/facebook/react/uimanager/BlendModeHelper;", "", "<init>", "()V", "parseMixBlendMode", "Landroid/graphics/BlendMode;", ViewProps.MIX_BLEND_MODE, "", "needsIsolatedLayer", "", "view", "Landroid/view/ViewGroup;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@TargetApi(29)
@SourceDebugExtension({"SMAP\nBlendModeHelper.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BlendModeHelper.kt\ncom/facebook/react/uimanager/BlendModeHelper\n+ 2 _Sequences.kt\nkotlin/sequences/SequencesKt___SequencesKt\n*L\n1#1,52:1\n1255#2,2:53\n*S KotlinDebug\n*F\n+ 1 BlendModeHelper.kt\ncom/facebook/react/uimanager/BlendModeHelper\n*L\n50#1:53,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BlendModeHelper {
    @NotNull
    public static final BlendModeHelper INSTANCE = new BlendModeHelper();

    private BlendModeHelper() {
    }

    public static final boolean needsIsolatedLayer(@NotNull ViewGroup view) {
        Intrinsics.checkNotNullParameter(view, "view");
        for (View view2 : n0.a(view)) {
            if (view2.getTag(R.id.mix_blend_mode) != null) {
                return true;
            }
        }
        return false;
    }

    public static final BlendMode parseMixBlendMode(String str) {
        BlendMode blendMode;
        BlendMode blendMode2;
        BlendMode blendMode3;
        BlendMode blendMode4;
        BlendMode blendMode5;
        BlendMode blendMode6;
        BlendMode blendMode7;
        BlendMode blendMode8;
        BlendMode blendMode9;
        BlendMode blendMode10;
        BlendMode blendMode11;
        BlendMode blendMode12;
        BlendMode blendMode13;
        BlendMode blendMode14;
        BlendMode blendMode15;
        if (str == null || Build.VERSION.SDK_INT < 29) {
            return null;
        }
        switch (str.hashCode()) {
            case -2120744511:
                if (str.equals("luminosity")) {
                    blendMode = BlendMode.LUMINOSITY;
                    return blendMode;
                }
                break;
            case -1427739212:
                if (str.equals("hard-light")) {
                    blendMode2 = BlendMode.HARD_LIGHT;
                    return blendMode2;
                }
                break;
            case -1338968417:
                if (str.equals("darken")) {
                    blendMode3 = BlendMode.DARKEN;
                    return blendMode3;
                }
                break;
            case -1247677005:
                if (str.equals("soft-light")) {
                    blendMode4 = BlendMode.SOFT_LIGHT;
                    return blendMode4;
                }
                break;
            case -1091287984:
                if (str.equals("overlay")) {
                    blendMode5 = BlendMode.OVERLAY;
                    return blendMode5;
                }
                break;
            case -1039745817:
                if (str.equals("normal")) {
                    return null;
                }
                break;
            case -907689876:
                if (str.equals("screen")) {
                    blendMode6 = BlendMode.SCREEN;
                    return blendMode6;
                }
                break;
            case -230491182:
                if (str.equals("saturation")) {
                    blendMode7 = BlendMode.SATURATION;
                    return blendMode7;
                }
                break;
            case -120580883:
                if (str.equals("color-dodge")) {
                    blendMode8 = BlendMode.COLOR_DODGE;
                    return blendMode8;
                }
                break;
            case 103672:
                if (str.equals("hue")) {
                    blendMode9 = BlendMode.HUE;
                    return blendMode9;
                }
                break;
            case 94842723:
                if (str.equals(ViewProps.COLOR)) {
                    blendMode10 = BlendMode.COLOR;
                    return blendMode10;
                }
                break;
            case 170546239:
                if (str.equals("lighten")) {
                    blendMode11 = BlendMode.LIGHTEN;
                    return blendMode11;
                }
                break;
            case 653829668:
                if (str.equals("multiply")) {
                    blendMode12 = BlendMode.MULTIPLY;
                    return blendMode12;
                }
                break;
            case 1242982905:
                if (str.equals("color-burn")) {
                    blendMode13 = BlendMode.COLOR_BURN;
                    return blendMode13;
                }
                break;
            case 1686617550:
                if (str.equals("exclusion")) {
                    blendMode14 = BlendMode.EXCLUSION;
                    return blendMode14;
                }
                break;
            case 1728361789:
                if (str.equals("difference")) {
                    blendMode15 = BlendMode.DIFFERENCE;
                    return blendMode15;
                }
                break;
        }
        throw new IllegalArgumentException("Invalid mix-blend-mode name: " + str);
    }
}
