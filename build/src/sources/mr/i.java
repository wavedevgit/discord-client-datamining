package mr;

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
    private final kr.c f37443d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37444e;

    /* renamed from: i  reason: collision with root package name */
    private final Paint f37445i = h.a();

    /* renamed from: o  reason: collision with root package name */
    private int f37446o;

    public i(kr.c cVar, String str) {
        this.f37443d = cVar;
        this.f37444e = str;
    }

    public static void a(TextView textView, CharSequence charSequence) {
        if (charSequence instanceof Spanned) {
            i[] iVarArr = (i[]) ((Spanned) charSequence).getSpans(0, charSequence.length(), i.class);
            if (iVarArr != null) {
                TextPaint paint = textView.getPaint();
                for (i iVar : iVarArr) {
                    iVar.f37446o = (int) (paint.measureText(iVar.f37444e) + 0.5f);
                }
            }
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public void drawLeadingMargin(Canvas canvas, Paint paint, int i10, int i11, int i12, int i13, int i14, CharSequence charSequence, int i15, int i16, boolean z10, Layout layout) {
        int i17;
        if (z10 && qr.c.b(i15, charSequence, this)) {
            this.f37445i.set(paint);
            this.f37443d.g(this.f37445i);
            int measureText = (int) (this.f37445i.measureText(this.f37444e) + 0.5f);
            int j10 = this.f37443d.j();
            if (measureText > j10) {
                this.f37446o = measureText;
                j10 = measureText;
            } else {
                this.f37446o = 0;
            }
            if (i11 > 0) {
                i17 = (i10 + (j10 * i11)) - measureText;
            } else {
                i17 = i10 + (i11 * j10) + (j10 - measureText);
            }
            canvas.drawText(this.f37444e, i17, i13, this.f37445i);
        }
    }

    @Override // android.text.style.LeadingMarginSpan
    public int getLeadingMargin(boolean z10) {
        return Math.max(this.f37446o, this.f37443d.j());
    }
}
