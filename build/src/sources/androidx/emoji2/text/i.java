package androidx.emoji2.text;

import android.graphics.Paint;
import android.text.style.ReplacementSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i extends ReplacementSpan {

    /* renamed from: e  reason: collision with root package name */
    private final o f3988e;

    /* renamed from: d  reason: collision with root package name */
    private final Paint.FontMetricsInt f3987d = new Paint.FontMetricsInt();

    /* renamed from: i  reason: collision with root package name */
    private short f3989i = -1;

    /* renamed from: o  reason: collision with root package name */
    private short f3990o = -1;

    /* renamed from: p  reason: collision with root package name */
    private float f3991p = 1.0f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar) {
        b2.e.h(oVar, "rasterizer cannot be null");
        this.f3988e = oVar;
    }

    public final o a() {
        return this.f3988e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int b() {
        return this.f3989i;
    }

    @Override // android.text.style.ReplacementSpan
    public int getSize(Paint paint, CharSequence charSequence, int i10, int i11, Paint.FontMetricsInt fontMetricsInt) {
        paint.getFontMetricsInt(this.f3987d);
        Paint.FontMetricsInt fontMetricsInt2 = this.f3987d;
        this.f3991p = (Math.abs(fontMetricsInt2.descent - fontMetricsInt2.ascent) * 1.0f) / this.f3988e.e();
        this.f3990o = (short) (this.f3988e.e() * this.f3991p);
        short i12 = (short) (this.f3988e.i() * this.f3991p);
        this.f3989i = i12;
        if (fontMetricsInt != null) {
            Paint.FontMetricsInt fontMetricsInt3 = this.f3987d;
            fontMetricsInt.ascent = fontMetricsInt3.ascent;
            fontMetricsInt.descent = fontMetricsInt3.descent;
            fontMetricsInt.top = fontMetricsInt3.top;
            fontMetricsInt.bottom = fontMetricsInt3.bottom;
        }
        return i12;
    }
}
