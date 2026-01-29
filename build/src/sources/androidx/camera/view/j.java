package androidx.camera.view;

import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.Rect;
import android.util.Rational;
import android.util.Size;
import x.c1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends c1 {

    /* renamed from: e  reason: collision with root package name */
    static final PointF f2112e = new PointF(2.0f, 2.0f);

    /* renamed from: b  reason: collision with root package name */
    private final e f2113b;

    /* renamed from: c  reason: collision with root package name */
    private Rect f2114c = null;

    /* renamed from: d  reason: collision with root package name */
    private Matrix f2115d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(e eVar) {
        this.f2113b = eVar;
    }

    @Override // x.c1
    protected PointF a(float f10, float f11) {
        float[] fArr = {f10, f11};
        synchronized (this) {
            try {
                Matrix matrix = this.f2115d;
                if (matrix == null) {
                    return f2112e;
                }
                matrix.mapPoints(fArr);
                return new PointF(fArr[0], fArr[1]);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Size size, int i10) {
        Rect rect;
        b0.p.a();
        synchronized (this) {
            try {
                if (size.getWidth() != 0 && size.getHeight() != 0 && (rect = this.f2114c) != null) {
                    this.f2115d = this.f2113b.c(size, i10, rect);
                    return;
                }
                this.f2115d = null;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void g(Rect rect) {
        e(new Rational(rect.width(), rect.height()));
        synchronized (this) {
            this.f2114c = rect;
        }
    }
}
