package com.discord.animatable_underlay;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u000f\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0010\u0014\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0000\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J%\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020+H\u0000¢\u0006\u0002\b,R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R$\u0010\b\u001a\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0007@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\t\u0010\n\"\u0004\b\u000b\u0010\fR$\u0010\r\u001a\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0007@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000e\u0010\n\"\u0004\b\u000f\u0010\fR$\u0010\u0010\u001a\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0007@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\n\"\u0004\b\u0012\u0010\fR$\u0010\u0013\u001a\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0007@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\n\"\u0004\b\u0015\u0010\fR\u001e\u0010\u0016\u001a\u00020\u00178\u0006@\u0006X\u0087\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0018\u0010\u0019\"\u0004\b\u001a\u0010\u001bR$\u0010\u001c\u001a\u00020\u00072\u0006\u0010\u0006\u001a\u00020\u0007@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001d\u0010\n\"\u0004\b\u001e\u0010\fR\u0011\u0010\u001f\u001a\u00020 ¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u000e\u0010#\u001a\u00020 X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006-"}, d2 = {"Lcom/discord/animatable_underlay/AnimatableUnderlayBorders;", "", "<init>", "()V", "path", "Landroid/graphics/Path;", "value", "", "borderTopLeftRadius", "getBorderTopLeftRadius", "()F", "setBorderTopLeftRadius", "(F)V", "borderTopRightRadius", "getBorderTopRightRadius", "setBorderTopRightRadius", "borderBottomLeftRadius", "getBorderBottomLeftRadius", "setBorderBottomLeftRadius", "borderBottomRightRadius", "getBorderBottomRightRadius", "setBorderBottomRightRadius", ViewProps.BORDER_COLOR, "", "getBorderColor", "()I", "setBorderColor", "(I)V", ViewProps.BORDER_WIDTH, "getBorderWidth", "setBorderWidth", "borderRadiusRadii", "", "getBorderRadiusRadii", "()[F", "borderStrokeRadiusRadii", "drawBorderStroke", "", "canvas", "Landroid/graphics/Canvas;", "paint", "Landroid/graphics/Paint;", "pathRect", "Landroid/graphics/RectF;", "drawBorderStroke$animatable_underlay_release", "animatable_underlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AnimatableUnderlayBorders {
    private float borderBottomRightRadius;
    private int borderColor;
    @NotNull
    private final float[] borderRadiusRadii;
    @NotNull
    private final float[] borderStrokeRadiusRadii;
    private float borderWidth;
    @NotNull
    private final Path path = new Path();
    private float borderTopLeftRadius = SizeUtilsKt.getDpToPx(0);
    private float borderTopRightRadius = SizeUtilsKt.getDpToPx(0);
    private float borderBottomLeftRadius = SizeUtilsKt.getDpToPx(0);

    public AnimatableUnderlayBorders() {
        float dpToPx = SizeUtilsKt.getDpToPx(0);
        this.borderBottomRightRadius = dpToPx;
        float f10 = this.borderTopLeftRadius;
        float f11 = this.borderTopRightRadius;
        float f12 = this.borderBottomLeftRadius;
        this.borderRadiusRadii = new float[]{f10, f10, f11, f11, dpToPx, dpToPx, f12, f12};
        float f13 = this.borderWidth;
        this.borderStrokeRadiusRadii = new float[]{f10 - f13, f10 - f13, f11 - f13, f11 - f13, dpToPx - f13, dpToPx - f13, f12 - f13, f12 - f13};
    }

    public final void drawBorderStroke$animatable_underlay_release(@NotNull Canvas canvas, @NotNull Paint paint, @NotNull RectF pathRect) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Intrinsics.checkNotNullParameter(paint, "paint");
        Intrinsics.checkNotNullParameter(pathRect, "pathRect");
        float f10 = this.borderWidth;
        if (f10 <= 0.0f) {
            return;
        }
        pathRect.left += f10 / 2.0f;
        pathRect.top += f10 / 2.0f;
        pathRect.right -= f10 / 2.0f;
        pathRect.bottom -= f10 / 2.0f;
        this.path.reset();
        this.path.addRoundRect(pathRect, this.borderStrokeRadiusRadii, Path.Direction.CW);
        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeWidth(this.borderWidth);
        paint.setColor(this.borderColor);
        canvas.drawPath(this.path, paint);
        paint.setStyle(Paint.Style.FILL);
    }

    public final float getBorderBottomLeftRadius() {
        return this.borderBottomLeftRadius;
    }

    public final float getBorderBottomRightRadius() {
        return this.borderBottomRightRadius;
    }

    public final int getBorderColor() {
        return this.borderColor;
    }

    @NotNull
    public final float[] getBorderRadiusRadii() {
        return this.borderRadiusRadii;
    }

    public final float getBorderTopLeftRadius() {
        return this.borderTopLeftRadius;
    }

    public final float getBorderTopRightRadius() {
        return this.borderTopRightRadius;
    }

    public final float getBorderWidth() {
        return this.borderWidth;
    }

    public final void setBorderBottomLeftRadius(float f10) {
        this.borderBottomLeftRadius = f10;
        float[] fArr = this.borderRadiusRadii;
        fArr[6] = f10;
        fArr[7] = f10;
        float[] fArr2 = this.borderStrokeRadiusRadii;
        float f11 = this.borderWidth;
        fArr2[6] = f10 - f11;
        fArr2[7] = f10 - f11;
    }

    public final void setBorderBottomRightRadius(float f10) {
        this.borderBottomRightRadius = f10;
        float[] fArr = this.borderRadiusRadii;
        fArr[4] = f10;
        fArr[5] = f10;
        float[] fArr2 = this.borderStrokeRadiusRadii;
        float f11 = this.borderWidth;
        fArr2[4] = f10 - f11;
        fArr2[5] = f10 - f11;
    }

    public final void setBorderColor(int i10) {
        this.borderColor = i10;
    }

    public final void setBorderTopLeftRadius(float f10) {
        this.borderTopLeftRadius = f10;
        float[] fArr = this.borderRadiusRadii;
        fArr[0] = f10;
        fArr[1] = f10;
        float[] fArr2 = this.borderStrokeRadiusRadii;
        float f11 = this.borderWidth;
        fArr2[0] = f10 - f11;
        fArr2[1] = f10 - f11;
    }

    public final void setBorderTopRightRadius(float f10) {
        this.borderTopRightRadius = f10;
        float[] fArr = this.borderRadiusRadii;
        fArr[2] = f10;
        fArr[3] = f10;
        float[] fArr2 = this.borderStrokeRadiusRadii;
        float f11 = this.borderWidth;
        fArr2[2] = f10 - f11;
        fArr2[3] = f10 - f11;
    }

    public final void setBorderWidth(float f10) {
        this.borderWidth = f10;
        float[] fArr = this.borderStrokeRadiusRadii;
        float f11 = this.borderTopLeftRadius;
        fArr[0] = f11 - f10;
        fArr[1] = f11 - f10;
        float f12 = this.borderTopRightRadius;
        fArr[2] = f12 - f10;
        fArr[3] = f12 - f10;
        float f13 = this.borderBottomRightRadius;
        fArr[4] = f13 - f10;
        fArr[5] = f13 - f10;
        float f14 = this.borderBottomLeftRadius;
        fArr[6] = f14 - f10;
        fArr[7] = f14 - f10;
    }
}
