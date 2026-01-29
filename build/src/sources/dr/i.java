package dr;

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
    private final br.c f22340d;

    /* renamed from: e  reason: collision with root package name */
    private final String f22341e;

    /* renamed from: i  reason: collision with root package name */
    private final Paint f22342i = h.a();

    /* renamed from: o  reason: collision with root package name */
    private int f22343o;

    public i(br.c cVar, String str) {
        this.f22340d = cVar;
        this.f22341e = str;
    }

    public static void a(TextView textView, CharSequence charSequence) {
        if (charSequence instanceof Spanned) {
            i[] iVarArr = (i[]) ((Spanned) charSequence).getSpans(0, charSequence.length(), i.class);
            if (iVarArr != null) {
                TextPaint paint = textView.getPaint();
                for (i iVar : iVarArr) {
                    iVar.f22343o = (int) (paint.measureText(iVar.f22341e) + 0.5f);
                }
            }
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        if (z10 && hr.c.b(i15, charSequence, this)) {
            this.f22342i.set(paint);
            this.f22340d.g(this.f22342i);
            int measureText = (int) (this.f22342i.measureText(this.f22341e) + 0.5f);
            int j10 = this.f22340d.j();
            if (measureText > j10) {
                this.f22343o = measureText;
                j10 = measureText;
            } else {
                this.f22343o = 0;
            }
            if (i11 > 0) {
                i17 = (i10 + (j10 * i11)) - measureText;
            } else {
                i17 = i10 + (i11 * j10) + (j10 - measureText);
            }
            canvas.drawText(this.f22341e, i17, i13, this.f22342i);
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return Math.max(this.f22343o, this.f22340d.j());
    }
}
