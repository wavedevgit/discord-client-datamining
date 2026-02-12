package u5;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import com.airbnb.lottie.n;
import l5.b0;
import l5.x;
import o5.q;
import y5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d extends b {
    private final Paint E;
    private final Rect F;
    private final Rect G;
    private final x H;
    private o5.a I;
    private o5.a J;
    private o5.c K;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(n nVar, e eVar) {
        super(nVar, eVar);
        this.E = new m5.a(3);
        this.F = new Rect();
        this.G = new Rect();
        this.H = nVar.P(eVar.n());
        if (z() != null) {
            this.K = new o5.c(this, this, z());
        }
    }

    private Bitmap P() {
        Bitmap bitmap;
        o5.a aVar = this.J;
        if (aVar != null && (bitmap = (Bitmap) aVar.h()) != null) {
            return bitmap;
        }
        Bitmap G = this.f50451p.G(this.f50452q.n());
        if (G != null) {
            return G;
        }
        x xVar = this.H;
        if (xVar != null) {
            return xVar.b();
        }
        return null;
    }

    @Override // u5.b, r5.f
    public void d(Object obj, z5.c cVar) {
        super.d(obj, cVar);
        if (obj == b0.K) {
            if (cVar == null) {
                this.I = null;
            } else {
                this.I = new q(cVar);
            }
        } else if (obj == b0.N) {
            if (cVar == null) {
                this.J = null;
            } else {
                this.J = new q(cVar);
            }
        }
    }

    @Override // u5.b, n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        super.f(rectF, matrix, z10);
        if (this.H != null) {
            float e10 = j.e();
            rectF.set(0.0f, 0.0f, this.H.f() * e10, this.H.d() * e10);
            this.f50450o.mapRect(rectF);
        }
    }

    @Override // u5.b
    public void u(Canvas canvas, Matrix matrix, int i10) {
        Bitmap P = P();
        if (P != null && !P.isRecycled() && this.H != null) {
            float e10 = j.e();
            this.E.setAlpha(i10);
            o5.a aVar = this.I;
            if (aVar != null) {
                this.E.setColorFilter((ColorFilter) aVar.h());
            }
            canvas.save();
            canvas.concat(matrix);
            this.F.set(0, 0, P.getWidth(), P.getHeight());
            if (this.f50451p.Q()) {
                this.G.set(0, 0, (int) (this.H.f() * e10), (int) (this.H.d() * e10));
            } else {
                this.G.set(0, 0, (int) (P.getWidth() * e10), (int) (P.getHeight() * e10));
            }
            o5.c cVar = this.K;
            if (cVar != null) {
                cVar.b(this.E, matrix, i10);
            }
            canvas.drawBitmap(P, this.F, this.G, this.E);
            canvas.restore();
        }
    }
}
