package vr;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.text.Layout;
import android.text.style.LeadingMarginSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements LeadingMarginSpan {

    /* renamed from: d  reason: collision with root package name */
    private final tr.c f52349d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f52350e = h.b();

    /* renamed from: i  reason: collision with root package name */
    private final Paint f52351i = h.a();

    public a(tr.c cVar) {
        this.f52349d = cVar;
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int k10 = this.f52349d.k();
        this.f52351i.set(paint);
        this.f52349d.a(this.f52351i);
        int i17 = i11 * k10;
        int i18 = i10 + i17;
        int i19 = i17 + i18;
        this.f52350e.set(Math.min(i18, i19), i12, Math.max(i18, i19), i14);
        canvas.drawRect(this.f52350e, this.f52351i);
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return this.f52349d.j();
    }
}
