package com.discord.span.utilities.spannable;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import android.text.Spanned;
import android.text.style.LineBackgroundSpan;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\r\n\u0002\b\u0004\u0018\u00002\u00020\u0001BM\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0003\u0012\b\b\u0001\u0010\b\u001a\u00020\u0003\u0012\b\b\u0001\u0010\t\u001a\u00020\u0003¢\u0006\u0004\b\n\u0010\u000bJ`\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\r2\u0006\u0010\u0018\u001a\u00020\u00032\u0006\u0010\u0019\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u00032\u0006\u0010\u001b\u001a\u00020\u00032\u0006\u0010\u001c\u001a\u00020\u00032\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00032\u0006\u0010 \u001a\u00020\u00032\u0006\u0010!\u001a\u00020\u0003H\u0016R\u000e\u0010\u0007\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0010X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0012X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\""}, d2 = {"Lcom/discord/span/utilities/spannable/BlockBackgroundSpan;", "Landroid/text/style/LineBackgroundSpan;", "fillColor", "", "strokeColor", "strokeWidth", "strokeRadius", "insetStart", "insetTop", "insetBottom", "<init>", "(IIIIIII)V", "fillPaint", "Landroid/graphics/Paint;", "strokePaint", "rect", "Landroid/graphics/RectF;", "radius", "", "drawBackground", "", "canvas", "Landroid/graphics/Canvas;", "paint", ViewProps.LEFT, ViewProps.RIGHT, ViewProps.TOP, "baseline", ViewProps.BOTTOM, "text", "", ViewProps.START, ViewProps.END, "lnum", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BlockBackgroundSpan implements LineBackgroundSpan {
    @NotNull
    private final Paint fillPaint;
    private final int insetBottom;
    private final int insetStart;
    private final int insetTop;
    private final float radius;
    @NotNull
    private final RectF rect;
    @NotNull
    private final Paint strokePaint;

    public BlockBackgroundSpan(int i10, int i11, int i12, int i13, int i14, int i15, int i16) {
        this.insetStart = i14;
        this.insetTop = i15;
        this.insetBottom = i16;
        Paint paint = new Paint();
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(i10);
        this.fillPaint = paint;
        Paint paint2 = new Paint();
        paint2.setStyle(Paint.Style.STROKE);
        paint2.setColor(i11);
        paint2.setStrokeWidth(i12);
        paint2.setAntiAlias(true);
        this.strokePaint = paint2;
        this.rect = new RectF();
        this.radius = i13;
    }

    @Override // android.text.style.LineBackgroundSpan
    public void drawBackground(@NotNull Canvas canvas, @NotNull Paint paint, int i10, int i11, int i12, int i13, int i14, @NotNull CharSequence text, int i15, int i16, int i17) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Intrinsics.checkNotNullParameter(paint, "paint");
        Intrinsics.checkNotNullParameter(text, "text");
        if (text instanceof Spanned) {
            Spanned spanned = (Spanned) text;
            if (spanned.getSpanStart(this) == i15) {
                RectF rectF = this.rect;
                rectF.left = i10 + this.insetStart;
                rectF.top = i12 + this.insetTop;
            }
            if (spanned.getSpanEnd(this) == i16) {
                RectF rectF2 = this.rect;
                rectF2.right = i11;
                rectF2.bottom = i14 - this.insetBottom;
                float f10 = this.radius;
                canvas.drawRoundRect(rectF2, f10, f10, this.fillPaint);
                RectF rectF3 = this.rect;
                float f11 = this.radius;
                canvas.drawRoundRect(rectF3, f11, f11, this.strokePaint);
            }
        }
    }
}
