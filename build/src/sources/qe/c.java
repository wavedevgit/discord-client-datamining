package qe;

import android.opengl.Matrix;
import oe.r0;
import oe.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f44033a = new float[16];

    /* renamed from: b  reason: collision with root package name */
    private final float[] f44034b = new float[16];

    /* renamed from: c  reason: collision with root package name */
    private final r0 f44035c = new r0();

    /* renamed from: d  reason: collision with root package name */
    private boolean f44036d;

    public static void a(float[] fArr, float[] fArr2) {
        t.j(fArr);
        float f10 = fArr2[10];
        float f11 = fArr2[8];
        float sqrt = (float) Math.sqrt((f10 * f10) + (f11 * f11));
        float f12 = fArr2[10];
        fArr[0] = f12 / sqrt;
        float f13 = fArr2[8];
        fArr[2] = f13 / sqrt;
        fArr[8] = (-f13) / sqrt;
        fArr[10] = f12 / sqrt;
    }

    private static void b(float[] fArr, float[] fArr2) {
        float f10 = fArr2[0];
        float f11 = -fArr2[1];
        float f12 = -fArr2[2];
        float length = Matrix.length(f10, f11, f12);
        if (length != 0.0f) {
            Matrix.setRotateM(fArr, 0, (float) Math.toDegrees(length), f10 / length, f11 / length, f12 / length);
        } else {
            t.j(fArr);
        }
    }

    public boolean c(float[] fArr, long j10) {
        float[] fArr2 = (float[]) this.f44035c.j(j10);
        if (fArr2 == null) {
            return false;
        }
        b(this.f44034b, fArr2);
        if (!this.f44036d) {
            a(this.f44033a, this.f44034b);
            this.f44036d = true;
        }
        Matrix.multiplyMM(fArr, 0, this.f44033a, 0, this.f44034b, 0);
        return true;
    }

    public void d() {
        this.f44035c.c();
        this.f44036d = false;
    }

    public void e(long j10, float[] fArr) {
        this.f44035c.a(j10, fArr);
    }
}
