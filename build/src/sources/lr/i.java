package lr;

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
    private final jr.c f36613d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36614e;

    /* renamed from: i  reason: collision with root package name */
    private final Paint f36615i = h.a();

    /* renamed from: o  reason: collision with root package name */
    private int f36616o;

    public i(jr.c cVar, String str) {
        this.f36613d = cVar;
        this.f36614e = str;
    }

    public static void a(TextView textView, CharSequence charSequence) {
        if (charSequence instanceof Spanned) {
            i[] iVarArr = (i[]) ((Spanned) charSequence).getSpans(0, charSequence.length(), i.class);
            if (iVarArr != null) {
                TextPaint paint = textView.getPaint();
                for (i iVar : iVarArr) {
                    iVar.f36616o = (int) (paint.measureText(iVar.f36614e) + 0.5f);
                }
            }
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        if (z10 && pr.c.b(i15, charSequence, this)) {
            this.f36615i.set(paint);
            this.f36613d.g(this.f36615i);
            int measureText = (int) (this.f36615i.measureText(this.f36614e) + 0.5f);
            int j10 = this.f36613d.j();
            if (measureText > j10) {
                this.f36616o = measureText;
                j10 = measureText;
            } else {
                this.f36616o = 0;
            }
            if (i11 > 0) {
                i17 = (i10 + (j10 * i11)) - measureText;
            } else {
                i17 = i10 + (i11 * j10) + (j10 - measureText);
            }
            canvas.drawText(this.f36614e, i17, i13, this.f36615i);
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return Math.max(this.f36616o, this.f36613d.j());
    }
}
