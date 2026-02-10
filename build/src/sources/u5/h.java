package u5;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import com.airbnb.lottie.n;
import l5.b0;
import o5.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h extends b {
    private final RectF E;
    private final Paint F;
    private final float[] G;
    private final Path H;
    private final e I;
    private o5.a J;
    private o5.a K;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(n nVar, e eVar) {
        super(nVar, eVar);
        this.E = new RectF();
        m5.a aVar = new m5.a();
        this.F = aVar;
        this.G = new float[8];
        this.H = new Path();
        this.I = eVar;
        aVar.setAlpha(0);
        aVar.setStyle(Paint.Style.FILL);
        aVar.setColor(eVar.p());
    }

    @Override // u5.b, r5.f
    public void d(Object obj, z5.c cVar) {
        super.d(obj, cVar);
        if (obj == b0.K) {
            if (cVar == null) {
                this.J = null;
            } else {
                this.J = new q(cVar);
            }
        } else if (obj == b0.f35648a) {
            if (cVar == null) {
                this.K = null;
                this.F.setColor(this.I.p());
                return;
            }
            this.K = new q(cVar);
        }
    }

    @Override // u5.b, n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        super.f(rectF, matrix, z10);
        this.E.set(0.0f, 0.0f, this.I.r(), this.I.q());
        this.f51270o.mapRect(this.E);
        rectF.set(this.E);
    }

    @Override // u5.b
    public void u(Canvas canvas, Matrix matrix, int i10) {
        Integer num;
        int intValue;
        int alpha = Color.alpha(this.I.p());
        if (alpha != 0) {
            o5.a aVar = this.K;
            if (aVar == null) {
                num = null;
            } else {
                num = (Integer) aVar.h();
            }
            if (num != null) {
                this.F.setColor(num.intValue());
            } else {
                this.F.setColor(this.I.p());
            }
            if (this.f51279x.h() == null) {
                intValue = 100;
            } else {
                intValue = ((Integer) this.f51279x.h().h()).intValue();
            }
            int i11 = (int) ((i10 / 255.0f) * (((alpha / 255.0f) * intValue) / 100.0f) * 255.0f);
            this.F.setAlpha(i11);
            o5.a aVar2 = this.J;
            if (aVar2 != null) {
                this.F.setColorFilter((ColorFilter) aVar2.h());
            }
            if (i11 > 0) {
                float[] fArr = this.G;
                fArr[0] = 0.0f;
                fArr[1] = 0.0f;
                fArr[2] = this.I.r();
                float[] fArr2 = this.G;
                fArr2[3] = 0.0f;
                fArr2[4] = this.I.r();
                this.G[5] = this.I.q();
                float[] fArr3 = this.G;
                fArr3[6] = 0.0f;
                fArr3[7] = this.I.q();
                matrix.mapPoints(this.G);
                this.H.reset();
                Path path = this.H;
                float[] fArr4 = this.G;
                path.moveTo(fArr4[0], fArr4[1]);
                Path path2 = this.H;
                float[] fArr5 = this.G;
                path2.lineTo(fArr5[2], fArr5[3]);
                Path path3 = this.H;
                float[] fArr6 = this.G;
                path3.lineTo(fArr6[4], fArr6[5]);
                Path path4 = this.H;
                float[] fArr7 = this.G;
                path4.lineTo(fArr7[6], fArr7[7]);
                Path path5 = this.H;
                float[] fArr8 = this.G;
                path5.lineTo(fArr8[0], fArr8[1]);
                this.H.close();
                canvas.drawPath(this.H, this.F);
            }
        }
    }
}
