package er;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.text.Layout;
import android.text.TextPaint;
import android.text.style.LeadingMarginSpan;
import android.text.style.MetricAffectingSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends MetricAffectingSpan implements LeadingMarginSpan {

    /* renamed from: d  reason: collision with root package name */
    private final cr.c f23133d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f23134e = h.b();

    /* renamed from: i  reason: collision with root package name */
    private final Paint f23135i = h.a();

    /* renamed from: o  reason: collision with root package name */
    private final int f23136o;

    public f(cr.c cVar, int i10) {
        this.f23133d = cVar;
        this.f23136o = i10;
    }

    private void a(TextPaint textPaint) {
        this.f23133d.e(textPaint, this.f23136o);
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        int i18 = this.f23136o;
        if ((i18 == 1 || i18 == 2) && ir.c.a(i16, charSequence, this)) {
            this.f23135i.set(paint);
            this.f23133d.d(this.f23135i);
            float strokeWidth = this.f23135i.getStrokeWidth();
            if (strokeWidth > 0.0f) {
                int i19 = (int) ((i14 - strokeWidth) + 0.5f);
                if (i11 > 0) {
                    i17 = canvas.getWidth();
                } else {
                    i17 = i10;
                    i10 -= canvas.getWidth();
                }
                this.f23134e.set(i10, i19, i17, i14);
                canvas.drawRect(this.f23134e, this.f23135i);
            }
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return 0;
    }

    @Override // android.text.style.CharacterStyle
    public void updateDrawState(TextPaint textPaint) {
        a(textPaint);
    }

    @Override // android.text.style.MetricAffectingSpan
    public void updateMeasureState(TextPaint textPaint) {
        a(textPaint);
    }
}
