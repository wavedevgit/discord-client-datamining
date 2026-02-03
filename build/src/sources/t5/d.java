package t5;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import com.airbnb.lottie.n;
import l5.a0;
import l5.w;
import o5.q;
import x5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d extends b {
    private final Paint D;
    private final Rect E;
    private final Rect F;
    private final w G;
    private o5.a H;
    private o5.a I;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(n nVar, e eVar) {
        super(nVar, eVar);
        this.D = new m5.a(3);
        this.E = new Rect();
        this.F = new Rect();
        this.G = nVar.Q(eVar.n());
    }

    private Bitmap P() {
        Bitmap bitmap;
        o5.a aVar = this.I;
        if (aVar != null && (bitmap = (Bitmap) aVar.h()) != null) {
            return bitmap;
        }
        Bitmap H = this.f49741p.H(this.f49742q.n());
        if (H != null) {
            return H;
        }
        w wVar = this.G;
        if (wVar != null) {
            return wVar.b();
        }
        return null;
    }

    @Override // t5.b, q5.f
    public void d(Object obj, y5.c cVar) {
        super.d(obj, cVar);
        if (obj == a0.K) {
            if (cVar == null) {
                this.H = null;
            } else {
                this.H = new q(cVar);
            }
        } else if (obj == a0.N) {
            if (cVar == null) {
                this.I = null;
            } else {
                this.I = new q(cVar);
            }
        }
    }

    @Override // t5.b, n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        super.e(rectF, matrix, z10);
        if (this.G != null) {
            float e10 = j.e();
            rectF.set(0.0f, 0.0f, this.G.f() * e10, this.G.d() * e10);
            this.f49740o.mapRect(rectF);
        }
    }

    @Override // t5.b
    public void u(Canvas canvas, Matrix matrix, int i10) {
        Bitmap P = P();
        if (P != null && !P.isRecycled() && this.G != null) {
            float e10 = j.e();
            this.D.setAlpha(i10);
            o5.a aVar = this.H;
            if (aVar != null) {
                this.D.setColorFilter((ColorFilter) aVar.h());
            }
            canvas.save();
            canvas.concat(matrix);
            this.E.set(0, 0, P.getWidth(), P.getHeight());
            if (this.f49741p.R()) {
                this.F.set(0, 0, (int) (this.G.f() * e10), (int) (this.G.d() * e10));
            } else {
                this.F.set(0, 0, (int) (P.getWidth() * e10), (int) (P.getHeight() * e10));
            }
            canvas.drawBitmap(P, this.E, this.F, this.D);
            canvas.restore();
        }
    }
}
