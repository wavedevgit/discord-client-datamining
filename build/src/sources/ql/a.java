package ql;

import android.graphics.PointF;
import android.opengl.Matrix;
import pl.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static float[] a(float[] fArr, c cVar) {
        boolean z10;
        float abs;
        float f10;
        float f11;
        float f12;
        float f13;
        float f14 = fArr[0];
        if (f14 == 0.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            abs = Math.abs(fArr[4]);
        } else {
            abs = Math.abs(f14);
        }
        float f15 = 1.0f / abs;
        if (z10) {
            PointF pointF = cVar.f45106a;
            f10 = pointF.x;
            f11 = pointF.y * f15;
        } else {
            PointF pointF2 = cVar.f45106a;
            f10 = pointF2.x * f15;
            f11 = pointF2.y;
        }
        if (z10) {
            PointF pointF3 = cVar.f45107b;
            f12 = (pointF3.x * 2.0f) - 1.0f;
            f13 = (1.0f - (pointF3.y * 2.0f)) * f15;
        } else {
            PointF pointF4 = cVar.f45107b;
            f12 = ((pointF4.x * 2.0f) - 1.0f) * f15;
            f13 = 1.0f - (pointF4.y * 2.0f);
        }
        float[] fArr2 = new float[16];
        Matrix.setIdentityM(fArr2, 0);
        Matrix.translateM(fArr2, 0, f12, f13, 0.0f);
        Matrix.rotateM(fArr2, 0, cVar.f45108c, 0.0f, 0.0f, 1.0f);
        Matrix.scaleM(fArr2, 0, f10, f11, 1.0f);
        float[] fArr3 = new float[16];
        Matrix.multiplyMM(fArr3, 0, fArr, 0, fArr2, 0);
        return fArr3;
    }
}
