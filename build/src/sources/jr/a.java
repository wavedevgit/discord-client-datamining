package jr;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.text.Layout;
import android.text.style.LeadingMarginSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements LeadingMarginSpan {

    /* renamed from: d  reason: collision with root package name */
    private final hr.c f31206d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f31207e = h.b();

    /* renamed from: i  reason: collision with root package name */
    private final Paint f31208i = h.a();

    public a(hr.c cVar) {
        this.f31206d = cVar;
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int k10 = this.f31206d.k();
        this.f31208i.set(paint);
        this.f31206d.a(this.f31208i);
        int i17 = i11 * k10;
        int i18 = i10 + i17;
        int i19 = i17 + i18;
        this.f31207e.set(Math.min(i18, i19), i12, Math.max(i18, i19), i14);
        canvas.drawRect(this.f31207e, this.f31208i);
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return this.f31206d.j();
    }
}
