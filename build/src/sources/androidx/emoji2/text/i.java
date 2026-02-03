package androidx.emoji2.text;

import android.graphics.Paint;
import android.text.style.ReplacementSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i extends ReplacementSpan {

    /* renamed from: e  reason: collision with root package name */
    private final o f4032e;

    /* renamed from: d  reason: collision with root package name */
    private final Paint.FontMetricsInt f4031d = new Paint.FontMetricsInt();

    /* renamed from: i  reason: collision with root package name */
    private short f4033i = -1;

    /* renamed from: o  reason: collision with root package name */
    private short f4034o = -1;

    /* renamed from: p  reason: collision with root package name */
    private float f4035p = 1.0f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar) {
        b2.e.h(oVar, "rasterizer cannot be null");
        this.f4032e = oVar;
    }

    public final o a() {
        return this.f4032e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int b() {
        return this.f4033i;
    }

    @Override // android.text.style.ReplacementSpan
    public int getSize(Paint paint, CharSequence charSequence, int i10, int i11, Paint.FontMetricsInt fontMetricsInt) {
        paint.getFontMetricsInt(this.f4031d);
        Paint.FontMetricsInt fontMetricsInt2 = this.f4031d;
        this.f4035p = (Math.abs(fontMetricsInt2.descent - fontMetricsInt2.ascent) * 1.0f) / this.f4032e.e();
        this.f4034o = (short) (this.f4032e.e() * this.f4035p);
        short i12 = (short) (this.f4032e.i() * this.f4035p);
        this.f4033i = i12;
        if (fontMetricsInt != null) {
            Paint.FontMetricsInt fontMetricsInt3 = this.f4031d;
            fontMetricsInt.ascent = fontMetricsInt3.ascent;
            fontMetricsInt.descent = fontMetricsInt3.descent;
            fontMetricsInt.top = fontMetricsInt3.top;
            fontMetricsInt.bottom = fontMetricsInt3.bottom;
        }
        return i12;
    }
}
