package androidx.emoji2.text;

import android.graphics.Paint;
import android.text.style.ReplacementSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i extends ReplacementSpan {

    /* renamed from: e  reason: collision with root package name */
    private final o f4001e;

    /* renamed from: d  reason: collision with root package name */
    private final Paint.FontMetricsInt f4000d = new Paint.FontMetricsInt();

    /* renamed from: i  reason: collision with root package name */
    private short f4002i = -1;

    /* renamed from: o  reason: collision with root package name */
    private short f4003o = -1;

    /* renamed from: p  reason: collision with root package name */
    private float f4004p = 1.0f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar) {
        b2.e.h(oVar, "rasterizer cannot be null");
        this.f4001e = oVar;
    }

    public final o a() {
        return this.f4001e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int b() {
        return this.f4002i;
    }

    @Override // android.text.style.ReplacementSpan
    public int getSize(Paint paint, CharSequence charSequence, int i10, int i11, Paint.FontMetricsInt fontMetricsInt) {
        paint.getFontMetricsInt(this.f4000d);
        Paint.FontMetricsInt fontMetricsInt2 = this.f4000d;
        this.f4004p = (Math.abs(fontMetricsInt2.descent - fontMetricsInt2.ascent) * 1.0f) / this.f4001e.e();
        this.f4003o = (short) (this.f4001e.e() * this.f4004p);
        short i12 = (short) (this.f4001e.i() * this.f4004p);
        this.f4002i = i12;
        if (fontMetricsInt != null) {
            Paint.FontMetricsInt fontMetricsInt3 = this.f4000d;
            fontMetricsInt.ascent = fontMetricsInt3.ascent;
            fontMetricsInt.descent = fontMetricsInt3.descent;
            fontMetricsInt.top = fontMetricsInt3.top;
            fontMetricsInt.bottom = fontMetricsInt3.bottom;
        }
        return i12;
    }
}
