package gr;

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
    private final er.c f26536d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f26537e = h.b();

    /* renamed from: i  reason: collision with root package name */
    private final Paint f26538i = h.a();

    /* renamed from: o  reason: collision with root package name */
    private final int f26539o;

    public f(er.c cVar, int i10) {
        this.f26536d = cVar;
        this.f26539o = i10;
    }

    private void a(TextPaint textPaint) {
        this.f26536d.e(textPaint, this.f26539o);
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        int i18 = this.f26539o;
        if ((i18 == 1 || i18 == 2) && kr.c.a(i16, charSequence, this)) {
            this.f26538i.set(paint);
            this.f26536d.d(this.f26538i);
            float strokeWidth = this.f26538i.getStrokeWidth();
            if (strokeWidth > 0.0f) {
                int i19 = (int) ((i14 - strokeWidth) + 0.5f);
                if (i11 > 0) {
                    i17 = canvas.getWidth();
                } else {
                    i17 = i10;
                    i10 -= canvas.getWidth();
                }
                this.f26537e.set(i10, i19, i17, i14);
                canvas.drawRect(this.f26537e, this.f26538i);
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
