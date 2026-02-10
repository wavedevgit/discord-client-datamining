package vr;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.text.Layout;
import android.text.Spanned;
import android.text.TextPaint;
import android.text.style.LeadingMarginSpan;
import android.widget.TextView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements LeadingMarginSpan {

    /* renamed from: d  reason: collision with root package name */
    private final tr.c f51803d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51804e;

    /* renamed from: i  reason: collision with root package name */
    private final Paint f51805i = h.a();

    /* renamed from: o  reason: collision with root package name */
    private int f51806o;

    public i(tr.c cVar, String str) {
        this.f51803d = cVar;
        this.f51804e = str;
    }

    public static void a(TextView textView, CharSequence charSequence) {
        if (charSequence instanceof Spanned) {
            i[] iVarArr = (i[]) ((Spanned) charSequence).getSpans(0, charSequence.length(), i.class);
            if (iVarArr != null) {
                TextPaint paint = textView.getPaint();
                for (i iVar : iVarArr) {
                    iVar.f51806o = (int) (paint.measureText(iVar.f51804e) + 0.5f);
                }
            }
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        if (z10 && zr.c.b(i15, charSequence, this)) {
            this.f51805i.set(paint);
            this.f51803d.g(this.f51805i);
            int measureText = (int) (this.f51805i.measureText(this.f51804e) + 0.5f);
            int j10 = this.f51803d.j();
            if (measureText > j10) {
                this.f51806o = measureText;
                j10 = measureText;
            } else {
                this.f51806o = 0;
            }
            if (i11 > 0) {
                i17 = (i10 + (j10 * i11)) - measureText;
            } else {
                i17 = i10 + (i11 * j10) + (j10 - measureText);
            }
            canvas.drawText(this.f51804e, i17, i13, this.f51805i);
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return Math.max(this.f51806o, this.f51803d.j());
    }
}
