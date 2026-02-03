package z;

import a0.u;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.Size;
import java.io.IOException;
import z.o0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f0 implements j0.y {
    private static j0.z b(p0 p0Var, b0.f fVar, androidx.camera.core.n nVar) {
        return j0.z.k(nVar, fVar, p0Var.b(), p0Var.f(), p0Var.g(), d(nVar));
    }

    private static j0.z c(p0 p0Var, b0.f fVar, androidx.camera.core.n nVar) {
        Size size = new Size(nVar.getWidth(), nVar.getHeight());
        int f10 = p0Var.f() - fVar.s();
        Size e10 = e(f10, size);
        Matrix d10 = b0.q.d(new RectF(0.0f, 0.0f, size.getWidth(), size.getHeight()), new RectF(0.0f, 0.0f, e10.getWidth(), e10.getHeight()), f10);
        return j0.z.l(nVar, fVar, e10, f(p0Var.b(), d10), fVar.s(), g(p0Var.g(), d10), d(nVar));
    }

    private static a0.u d(androidx.camera.core.n nVar) {
        if (nVar.z() instanceof e0.c) {
            return ((e0.c) nVar.z()).e();
        }
        return u.a.l();
    }

    private static Size e(int i10, Size size) {
        if (b0.q.i(b0.q.u(i10))) {
            return new Size(size.getHeight(), size.getWidth());
        }
        return size;
    }

    private static Rect f(Rect rect, Matrix matrix) {
        RectF rectF = new RectF(rect);
        matrix.mapRect(rectF);
        rectF.sort();
        Rect rect2 = new Rect();
        rectF.round(rect2);
        return rect2;
    }

    private static Matrix g(Matrix matrix, Matrix matrix2) {
        Matrix matrix3 = new Matrix(matrix);
        matrix3.postConcat(matrix2);
        return matrix3;
    }

    @Override // j0.y
    /* renamed from: a */
    public j0.z apply(o0.b bVar) {
        b0.f j10;
        androidx.camera.core.n a10 = bVar.a();
        p0 b10 = bVar.b();
        if (i0.b.i(a10.getFormat())) {
            try {
                j10 = b0.f.j(a10);
                a10.d1()[0].e().rewind();
            } catch (IOException e10) {
                throw new x.o0(1, "Failed to extract EXIF data.", e10);
            }
        } else {
            j10 = null;
        }
        if (y.f55344g.b(a10)) {
            b2.e.h(j10, "JPEG image must have exif.");
            return c(b10, j10, a10);
        }
        return b(b10, j10, a10);
    }
}
