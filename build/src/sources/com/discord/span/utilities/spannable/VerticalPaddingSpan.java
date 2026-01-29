package com.discord.span.utilities.spannable;

import android.graphics.Paint;
import android.text.Spanned;
import android.text.style.LineHeightSpan;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\r\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u001b\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006B\u0013\b\u0016\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\bJ8\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00032\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u0018\u001a\u00020\u00032\u0006\u0010\u0019\u001a\u00020\u00032\u0006\u0010\u001a\u001a\u00020\u001bH\u0016R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/discord/span/utilities/spannable/VerticalPaddingSpan;", "Landroid/text/style/LineHeightSpan;", ViewProps.TOP, "", ViewProps.BOTTOM, "<init>", "(II)V", ViewProps.PADDING, "(I)V", "getTop", "()I", "getBottom", "initialized", "", "origTop", "origAscent", "origBottom", "origDescent", "chooseHeight", "", "text", "", ViewProps.START, ViewProps.END, "spanstartv", "v", "fontMetrics", "Landroid/graphics/Paint$FontMetricsInt;", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VerticalPaddingSpan implements LineHeightSpan {
    private final int bottom;
    private boolean initialized;
    private int origAscent;
    private int origBottom;
    private int origDescent;
    private int origTop;
    private final int top;

    public VerticalPaddingSpan(int i10, int i11) {
        this.top = i10;
        this.bottom = i11;
        this.origTop = -1;
        this.origAscent = -1;
        this.origBottom = -1;
        this.origDescent = -1;
    }

    @Override // android.text.style.LineHeightSpan
    public void chooseHeight(@NotNull CharSequence text, int i10, int i11, int i12, int i13, @NotNull Paint.FontMetricsInt fontMetrics) {
        Intrinsics.checkNotNullParameter(text, "text");
        Intrinsics.checkNotNullParameter(fontMetrics, "fontMetrics");
        if (!(text instanceof Spanned)) {
            return;
        }
        if (!this.initialized) {
            this.origTop = fontMetrics.top;
            this.origAscent = fontMetrics.ascent;
            this.origBottom = fontMetrics.bottom;
            this.origDescent = fontMetrics.descent;
            this.initialized = true;
        }
        Spanned spanned = (Spanned) text;
        if (spanned.getSpanStart(this) == i10) {
            int i14 = fontMetrics.top;
            int i15 = this.top;
            fontMetrics.top = i14 - i15;
            fontMetrics.ascent -= i15;
        } else {
            fontMetrics.top = this.origTop;
            fontMetrics.ascent = this.origAscent;
        }
        if (spanned.getSpanEnd(this) == i11) {
            int i16 = fontMetrics.bottom;
            int i17 = this.bottom;
            fontMetrics.bottom = i16 + i17;
            fontMetrics.descent += i17;
            return;
        }
        fontMetrics.bottom = this.origBottom;
        fontMetrics.descent = this.origDescent;
    }

    public final int getBottom() {
        return this.bottom;
    }

    public final int getTop() {
        return this.top;
    }

    public VerticalPaddingSpan(int i10) {
        this(i10, i10);
    }
}
