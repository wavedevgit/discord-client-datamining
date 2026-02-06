package lr;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.text.Layout;
import android.text.style.LeadingMarginSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class l implements LeadingMarginSpan {

    /* renamed from: d  reason: collision with root package name */
    private final jr.c f36570d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f36571e = h.b();

    /* renamed from: i  reason: collision with root package name */
    private final Paint f36572i = h.a();

    public l(jr.c cVar) {
        this.f36570d = cVar;
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        int i18 = i12 + ((i14 - i12) / 2);
        this.f36572i.set(paint);
        this.f36570d.h(this.f36572i);
        int strokeWidth = (int) ((((int) (this.f36572i.getStrokeWidth() + 0.5f)) / 2.0f) + 0.5f);
        if (i11 > 0) {
            i17 = canvas.getWidth();
        } else {
            i17 = i10;
            i10 -= canvas.getWidth();
        }
        this.f36571e.set(i10, i18 - strokeWidth, i17, i18 + strokeWidth);
        canvas.drawRect(this.f36571e, this.f36572i);
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return 0;
    }
}
