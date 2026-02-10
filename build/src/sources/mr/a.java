package mr;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.text.Layout;
import android.text.style.LeadingMarginSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements LeadingMarginSpan {

    /* renamed from: d  reason: collision with root package name */
    private final kr.c f37420d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f37421e = h.b();

    /* renamed from: i  reason: collision with root package name */
    private final Paint f37422i = h.a();

    public a(kr.c cVar) {
        this.f37420d = cVar;
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int k10 = this.f37420d.k();
        this.f37422i.set(paint);
        this.f37420d.a(this.f37422i);
        int i17 = i11 * k10;
        int i18 = i10 + i17;
        int i19 = i17 + i18;
        this.f37421e.set(Math.min(i18, i19), i12, Math.max(i18, i19), i14);
        canvas.drawRect(this.f37421e, this.f37422i);
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return this.f37420d.j();
    }
}
