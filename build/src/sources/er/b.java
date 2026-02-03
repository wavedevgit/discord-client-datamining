package er;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.os.Build;
import android.text.Layout;
import android.text.style.LeadingMarginSpan;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b implements LeadingMarginSpan {

    /* renamed from: q  reason: collision with root package name */
    private static final boolean f23123q;

    /* renamed from: d  reason: collision with root package name */
    private cr.c f23124d;

    /* renamed from: e  reason: collision with root package name */
    private final Paint f23125e = h.a();

    /* renamed from: i  reason: collision with root package name */
    private final RectF f23126i = h.c();

    /* renamed from: o  reason: collision with root package name */
    private final Rect f23127o = h.b();

    /* renamed from: p  reason: collision with root package name */
    private final int f23128p;

    static {
        boolean z10;
        int i10 = Build.VERSION.SDK_INT;
        if (24 != i10 && 25 != i10) {
            z10 = false;
        } else {
            z10 = true;
        }
        f23123q = z10;
    }

    public b(cr.c cVar, int i10) {
        this.f23124d = cVar;
        this.f23128p = i10;
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        int i18;
        Paint.Style style;
        int i19;
        if (z10 && ir.c.b(i15, charSequence, this)) {
            this.f23125e.set(paint);
            this.f23124d.g(this.f23125e);
            int save = canvas.save();
            try {
                int j10 = this.f23124d.j();
                int l10 = this.f23124d.l((int) ((this.f23125e.descent() - this.f23125e.ascent()) + 0.5f));
                int i20 = (j10 - l10) / 2;
                if (f23123q) {
                    if (i11 < 0) {
                        i19 = i10 - (layout.getWidth() - (j10 * this.f23128p));
                    } else {
                        i19 = (j10 * this.f23128p) - i10;
                    }
                    int i21 = i10 + (i20 * i11);
                    int i22 = (i11 * l10) + i21;
                    int i23 = i11 * i19;
                    i17 = Math.min(i21, i22) + i23;
                    i18 = Math.max(i21, i22) + i23;
                } else {
                    if (i11 <= 0) {
                        i10 -= j10;
                    }
                    i17 = i10 + i20;
                    i18 = i17 + l10;
                }
                int descent = (i13 + ((int) (((this.f23125e.descent() + this.f23125e.ascent()) / 2.0f) + 0.5f))) - (l10 / 2);
                int i24 = l10 + descent;
                int i25 = this.f23128p;
                if (i25 != 0 && i25 != 1) {
                    this.f23127o.set(i17, descent, i18, i24);
                    this.f23125e.setStyle(Paint.Style.FILL);
                    canvas.drawRect(this.f23127o, this.f23125e);
                    canvas.restoreToCount(save);
                }
                this.f23126i.set(i17, descent, i18, i24);
                if (this.f23128p == 0) {
                    style = Paint.Style.FILL;
                } else {
                    style = Paint.Style.STROKE;
                }
                this.f23125e.setStyle(style);
                canvas.drawOval(this.f23126i, this.f23125e);
                canvas.restoreToCount(save);
            } catch (Throwable th2) {
                canvas.restoreToCount(save);
                throw th2;
            }
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return this.f23124d.j();
    }
}
