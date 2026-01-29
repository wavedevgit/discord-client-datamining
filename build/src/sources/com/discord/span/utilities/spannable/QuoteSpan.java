package com.discord.span.utilities.spannable;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import android.text.Layout;
import android.text.Spanned;
import android.text.style.LeadingMarginSpan;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\r\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\u00020\u0001B%\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\u0010\u001a\u00020\u00032\u0006\u0010\u0011\u001a\u00020\u0012H\u0016Jh\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u00032\u0006\u0010\u001b\u001a\u00020\u00032\u0006\u0010\u001c\u001a\u00020\u00032\u0006\u0010\u001d\u001a\u00020\u00032\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00032\u0006\u0010!\u001a\u00020\u00032\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\"\u001a\u00020#H\u0016J\u0018\u0010$\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0018H\u0002R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u000e\u0010\u0004\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0013\u0010\u000e\u001a\u00020\u00038G¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\t¨\u0006%"}, d2 = {"Lcom/discord/span/utilities/spannable/QuoteSpan;", "Landroid/text/style/LeadingMarginSpan;", "stripeColor", "", "stripeWidth", "gapWidth", "<init>", "(III)V", "getStripeColor", "()I", "rect", "Landroid/graphics/RectF;", "radius", "", "insetStart", "getInsetStart", "getLeadingMargin", "first", "", "drawLeadingMargin", "", "c", "Landroid/graphics/Canvas;", "p", "Landroid/graphics/Paint;", "x", "dir", ViewProps.TOP, "baseline", ViewProps.BOTTOM, "text", "", ViewProps.START, ViewProps.END, "layout", "Landroid/text/Layout;", "draw", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class QuoteSpan implements LeadingMarginSpan {
    private final int insetStart;
    private final float radius;
    @NotNull
    private final RectF rect = new RectF();
    private final int stripeColor;
    private final int stripeWidth;

    public QuoteSpan(int i10, int i11, int i12) {
        this.stripeColor = i10;
        this.stripeWidth = i11;
        this.radius = i11 / 2.0f;
        this.insetStart = i11 + i12;
    }

    private final void draw(Canvas canvas, Paint paint) {
        Paint.Style style = paint.getStyle();
        int color = paint.getColor();
        paint.setStyle(Paint.Style.FILL);
        paint.setColor(this.stripeColor);
        RectF rectF = this.rect;
        float f10 = this.radius;
        canvas.drawRoundRect(rectF, f10, f10, paint);
        paint.setStyle(style);
        paint.setColor(color);
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(@NotNull Canvas c10, @NotNull Paint p10, int i10, int i11, int i12, int i13, int i14, @NotNull CharSequence text, int i15, int i16, boolean z10, @NotNull Layout layout) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(p10, "p");
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(layout, "layout");
        if (text instanceof Spanned) {
            Spanned spanned = (Spanned) text;
            if (spanned.getSpanStart(this) == i15) {
                RectF rectF = this.rect;
                rectF.left = i10;
                rectF.right = i10 + (i11 * this.stripeWidth);
                rectF.top = i12;
            }
            int spanEnd = spanned.getSpanEnd(this);
            if (spanEnd != i16 && (spanEnd - 1 != i16 || text.charAt(i16) != '\n')) {
                return;
            }
            this.rect.bottom = i14;
            draw(c10, p10);
        }
    }

    public final int getInsetStart() {
        return this.insetStart;
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return this.insetStart;
    }

    public final int getStripeColor() {
        return this.stripeColor;
    }
}
