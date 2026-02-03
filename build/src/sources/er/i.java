package er;

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
    private final cr.c f23143d;

    /* renamed from: e  reason: collision with root package name */
    private final String f23144e;

    /* renamed from: i  reason: collision with root package name */
    private final Paint f23145i = h.a();

    /* renamed from: o  reason: collision with root package name */
    private int f23146o;

    public i(cr.c cVar, String str) {
        this.f23143d = cVar;
        this.f23144e = str;
    }

    public static void a(TextView textView, CharSequence charSequence) {
        if (charSequence instanceof Spanned) {
            i[] iVarArr = (i[]) ((Spanned) charSequence).getSpans(0, charSequence.length(), i.class);
            if (iVarArr != null) {
                TextPaint paint = textView.getPaint();
                for (i iVar : iVarArr) {
                    iVar.f23146o = (int) (paint.measureText(iVar.f23144e) + 0.5f);
                }
            }
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        if (z10 && ir.c.b(i15, charSequence, this)) {
            this.f23145i.set(paint);
            this.f23143d.g(this.f23145i);
            int measureText = (int) (this.f23145i.measureText(this.f23144e) + 0.5f);
            int j10 = this.f23143d.j();
            if (measureText > j10) {
                this.f23146o = measureText;
                j10 = measureText;
            } else {
                this.f23146o = 0;
            }
            if (i11 > 0) {
                i17 = (i10 + (j10 * i11)) - measureText;
            } else {
                i17 = i10 + (i11 * j10) + (j10 - measureText);
            }
            canvas.drawText(this.f23144e, i17, i13, this.f23145i);
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return Math.max(this.f23146o, this.f23143d.j());
    }
}
