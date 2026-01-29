package j0;

import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class z {
    public static z j(Bitmap bitmap, b0.f fVar, Rect rect, int i10, Matrix matrix, a0.u uVar) {
        return new b(bitmap, fVar, 42, new Size(bitmap.getWidth(), bitmap.getHeight()), rect, i10, matrix, uVar);
    }

    public static z k(androidx.camera.core.n nVar, b0.f fVar, Rect rect, int i10, Matrix matrix, a0.u uVar) {
        return l(nVar, fVar, new Size(nVar.getWidth(), nVar.getHeight()), rect, i10, matrix, uVar);
    }

    public static z l(androidx.camera.core.n nVar, b0.f fVar, Size size, Rect rect, int i10, Matrix matrix, a0.u uVar) {
        if (i0.b.i(nVar.getFormat())) {
            b2.e.h(fVar, "JPEG image must have Exif.");
        }
        return new b(nVar, fVar, nVar.getFormat(), size, rect, i10, matrix, uVar);
    }

    public static z m(byte[] bArr, b0.f fVar, int i10, Size size, Rect rect, int i11, Matrix matrix, a0.u uVar) {
        return new b(bArr, fVar, i10, size, rect, i11, matrix, uVar);
    }

    public abstract a0.u a();

    public abstract Rect b();

    public abstract Object c();

    public abstract b0.f d();

    public abstract int e();

    public abstract int f();

    public abstract Matrix g();

    public abstract Size h();

    public boolean i() {
        return b0.q.h(b(), h());
    }
}
