package gr;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.text.Layout;
import android.text.TextPaint;
import android.text.style.LeadingMarginSpan;
import android.text.style.MetricAffectingSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c extends MetricAffectingSpan implements LeadingMarginSpan {

    /* renamed from: d  reason: collision with root package name */
    private final er.c f26532d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f26533e = h.b();

    /* renamed from: i  reason: collision with root package name */
    private final Paint f26534i = h.a();

    public c(er.c cVar) {
        this.f26532d = cVar;
    }

    private void a(TextPaint textPaint) {
        this.f26532d.b(textPaint);
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        this.f26534i.setStyle(Paint.Style.FILL);
        this.f26534i.setColor(this.f26532d.n(paint));
        if (i11 > 0) {
            i17 = canvas.getWidth();
        } else {
            i10 -= canvas.getWidth();
            i17 = i10;
        }
        this.f26533e.set(i10, i12, i17, i14);
        canvas.drawRect(this.f26533e, this.f26534i);
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return this.f26532d.o();
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
