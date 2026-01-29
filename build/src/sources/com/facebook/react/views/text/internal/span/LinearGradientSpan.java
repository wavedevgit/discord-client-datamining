package com.facebook.react.views.text.internal.span;

import android.graphics.LinearGradient;
import android.graphics.Shader;
import android.text.TextPaint;
import android.text.style.CharacterStyle;
import android.text.style.UpdateAppearance;
import com.facebook.react.animated.InterpolationAnimatedNode;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import com.rnlineargradient.LinearGradientManager;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\u0015\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u00012\u00020\u00022\u00020\u0003B7\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\u0005\u0012\b\b\u0002\u0010\t\u001a\u00020\u0005\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\f\u0010\rJ\u0010\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0016R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/facebook/react/views/text/internal/span/LinearGradientSpan;", "Landroid/text/style/CharacterStyle;", "Lcom/facebook/react/views/text/internal/span/ReactSpan;", "Landroid/text/style/UpdateAppearance;", ViewProps.START, "", LinearGradientManager.PROP_COLORS, "", LinearGradientManager.PROP_ANGLE, "gradientWidth", "gradientMode", "", "<init>", "(F[IFFLjava/lang/String;)V", "updateDrawState", "", "tp", "Landroid/text/TextPaint;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LinearGradientSpan extends CharacterStyle implements ReactSpan, UpdateAppearance {
    private final float angle;
    @NotNull
    private final int[] colors;
    private final String gradientMode;
    private final float gradientWidth;
    private final float start;

    public /* synthetic */ LinearGradientSpan(float f10, int[] iArr, float f11, float f12, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, iArr, (i10 & 4) != 0 ? 0.0f : f11, (i10 & 8) != 0 ? Float.NaN : f12, (i10 & 16) != 0 ? "mirror" : str);
    }

    @Override // android.text.style.CharacterStyle
    public void updateDrawState(@NotNull TextPaint tp2) {
        Shader.TileMode tileMode;
        float dpToPx;
        Intrinsics.checkNotNullParameter(tp2, "tp");
        if (Intrinsics.areEqual(this.gradientMode, InterpolationAnimatedNode.EXTRAPOLATE_TYPE_CLAMP)) {
            tileMode = Shader.TileMode.CLAMP;
        } else {
            tileMode = Shader.TileMode.MIRROR;
        }
        Shader.TileMode tileMode2 = tileMode;
        tp2.setColor(this.colors[0]);
        double radians = Math.toRadians(this.angle);
        if (Float.isNaN(this.gradientWidth)) {
            dpToPx = 100.0f;
        } else {
            dpToPx = PixelUtil.INSTANCE.dpToPx(this.gradientWidth);
        }
        float textSize = tp2.getTextSize();
        float f10 = 2;
        float f11 = dpToPx / f10;
        float f12 = this.start + f11;
        if (tileMode2 != Shader.TileMode.CLAMP) {
            f11 = f12;
        }
        float f13 = textSize / f10;
        float sqrt = ((float) Math.sqrt((dpToPx * dpToPx) + (textSize * textSize))) / f10;
        float cos = f11 - (((float) Math.cos(radians)) * sqrt);
        float sin = f13 - (((float) Math.sin(radians)) * sqrt);
        float cos2 = f11 + (((float) Math.cos(radians)) * sqrt);
        float sin2 = f13 + (sqrt * ((float) Math.sin(radians)));
        int[] iArr = this.colors;
        if (tileMode2 == Shader.TileMode.MIRROR) {
            int[] iArr2 = new int[iArr.length + 1];
            System.arraycopy(iArr, 0, iArr2, 0, iArr.length);
            int[] iArr3 = this.colors;
            iArr2[iArr3.length] = iArr3[0];
            iArr = iArr2;
        }
        tp2.setShader(new LinearGradient(cos, sin, cos2, sin2, iArr, (float[]) null, tileMode2));
    }

    public LinearGradientSpan(float f10, @NotNull int[] colors, float f11, float f12, String str) {
        Intrinsics.checkNotNullParameter(colors, "colors");
        this.start = f10;
        this.colors = colors;
        this.angle = f11;
        this.gradientWidth = f12;
        this.gradientMode = str;
    }
}
