package io.sentry.android.replay.util;

import android.text.Layout;
import android.text.Spanned;
import android.text.style.ForegroundColorSpan;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements m {

    /* renamed from: a  reason: collision with root package name */
    private final Layout f27840a;

    public a(Layout layout) {
        Intrinsics.checkNotNullParameter(layout, "layout");
        this.f27840a = layout;
    }

    @Override // io.sentry.android.replay.util.m
    public int a(int i10) {
        return this.f27840a.getLineTop(i10);
    }

    @Override // io.sentry.android.replay.util.m
    public float b(int i10, int i11) {
        return this.f27840a.getPrimaryHorizontal(i11);
    }

    @Override // io.sentry.android.replay.util.m
    public int c(int i10) {
        return this.f27840a.getLineStart(i10);
    }

    @Override // io.sentry.android.replay.util.m
    public int d() {
        return this.f27840a.getLineCount();
    }

    @Override // io.sentry.android.replay.util.m
    public Integer e() {
        int i10;
        if (!(this.f27840a.getText() instanceof Spanned)) {
            return null;
        }
        CharSequence text = this.f27840a.getText();
        Intrinsics.checkNotNull(text, "null cannot be cast to non-null type android.text.Spanned");
        ForegroundColorSpan[] foregroundColorSpanArr = (ForegroundColorSpan[]) ((Spanned) text).getSpans(0, this.f27840a.getText().length(), ForegroundColorSpan.class);
        Intrinsics.checkNotNull(foregroundColorSpanArr);
        int i11 = Integer.MIN_VALUE;
        Integer num = null;
        for (ForegroundColorSpan foregroundColorSpan : foregroundColorSpanArr) {
            CharSequence text2 = this.f27840a.getText();
            Intrinsics.checkNotNull(text2, "null cannot be cast to non-null type android.text.Spanned");
            int spanStart = ((Spanned) text2).getSpanStart(foregroundColorSpan);
            CharSequence text3 = this.f27840a.getText();
            Intrinsics.checkNotNull(text3, "null cannot be cast to non-null type android.text.Spanned");
            int spanEnd = ((Spanned) text3).getSpanEnd(foregroundColorSpan);
            if (spanStart != -1 && spanEnd != -1 && (i10 = spanEnd - spanStart) > i11) {
                num = Integer.valueOf(foregroundColorSpan.getForegroundColor());
                i11 = i10;
            }
        }
        if (num == null) {
            return null;
        }
        return Integer.valueOf(n.j(num.intValue()));
    }

    @Override // io.sentry.android.replay.util.m
    public int f(int i10) {
        return this.f27840a.getLineVisibleEnd(i10);
    }

    @Override // io.sentry.android.replay.util.m
    public int g(int i10) {
        return this.f27840a.getEllipsisCount(i10);
    }

    @Override // io.sentry.android.replay.util.m
    public int h(int i10) {
        return this.f27840a.getLineBottom(i10);
    }
}
