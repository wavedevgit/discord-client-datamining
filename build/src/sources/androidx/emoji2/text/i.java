package androidx.emoji2.text;

import android.graphics.Paint;
import android.text.style.ReplacementSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i extends ReplacementSpan {

    /* renamed from: e  reason: collision with root package name */
    private final o f4442e;

    /* renamed from: d  reason: collision with root package name */
    private final Paint.FontMetricsInt f4441d = new Paint.FontMetricsInt();

    /* renamed from: i  reason: collision with root package name */
    private short f4443i = -1;

    /* renamed from: o  reason: collision with root package name */
    private short f4444o = -1;

    /* renamed from: p  reason: collision with root package name */
    private float f4445p = 1.0f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar) {
        b2.e.h(oVar, "rasterizer cannot be null");
        this.f4442e = oVar;
    }

    public final o a() {
        return this.f4442e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int b() {
        return this.f4443i;
    }

    @Override // android.text.style.ReplacementSpan
    public int getSize(Paint paint, CharSequence charSequence, int i10, int i11, Paint.FontMetricsInt fontMetricsInt) {
        paint.getFontMetricsInt(this.f4441d);
        Paint.FontMetricsInt fontMetricsInt2 = this.f4441d;
        this.f4445p = (Math.abs(fontMetricsInt2.descent - fontMetricsInt2.ascent) * 1.0f) / this.f4442e.e();
        this.f4444o = (short) (this.f4442e.e() * this.f4445p);
        short i12 = (short) (this.f4442e.i() * this.f4445p);
        this.f4443i = i12;
        if (fontMetricsInt != null) {
            Paint.FontMetricsInt fontMetricsInt3 = this.f4441d;
            fontMetricsInt.ascent = fontMetricsInt3.ascent;
            fontMetricsInt.descent = fontMetricsInt3.descent;
            fontMetricsInt.top = fontMetricsInt3.top;
            fontMetricsInt.bottom = fontMetricsInt3.bottom;
        }
        return i12;
    }
}
