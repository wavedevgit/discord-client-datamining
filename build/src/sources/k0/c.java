package k0;

import android.graphics.SurfaceTexture;
import android.opengl.EGL14;
import android.opengl.EGLExt;
import android.opengl.GLES20;
import android.opengl.Matrix;
import android.util.Size;
import android.view.Surface;
import j0.x;
import java.util.Map;
import l0.d;
import x.l1;
import x.x0;
import x.y0;
import x.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c extends x {

    /* renamed from: n  reason: collision with root package name */
    private int f31512n = -1;

    /* renamed from: o  reason: collision with root package name */
    private int f31513o = -1;

    /* renamed from: p  reason: collision with root package name */
    private final x0 f31514p;

    /* renamed from: q  reason: collision with root package name */
    private final x0 f31515q;

    public c(x0 x0Var, x0 x0Var2) {
        this.f31514p = x0Var;
        this.f31515q = x0Var2;
    }

    private static float[] u(Size size, Size size2, x0 x0Var) {
        float[] l10 = l0.d.l();
        float[] l11 = l0.d.l();
        float[] l12 = l0.d.l();
        Matrix.scaleM(l10, 0, size.getWidth() / size2.getWidth(), size.getHeight() / size2.getHeight(), 1.0f);
        Matrix.translateM(l11, 0, x0Var.c() / x0Var.e(), x0Var.d() / x0Var.b(), 0.0f);
        Matrix.multiplyMM(l12, 0, l10, 0, l11, 0);
        return l12;
    }

    private void w(l0.g gVar, l1 l1Var, SurfaceTexture surfaceTexture, x0 x0Var, int i10, boolean z10) {
        s(i10);
        GLES20.glViewport(0, 0, gVar.c(), gVar.b());
        GLES20.glScissor(0, 0, gVar.c(), gVar.b());
        float[] fArr = new float[16];
        surfaceTexture.getTransformMatrix(fArr);
        float[] fArr2 = new float[16];
        l1Var.M(fArr2, fArr, z10);
        d.f fVar = (d.f) b2.e.g(this.f30708k);
        if (fVar instanceof d.g) {
            ((d.g) fVar).h(fArr2);
        }
        fVar.e(u(new Size((int) (gVar.c() * x0Var.e()), (int) (gVar.b() * x0Var.b())), new Size(gVar.c(), gVar.b()), x0Var));
        fVar.d(x0Var.a());
        GLES20.glEnable(3042);
        GLES20.glBlendFuncSeparate(770, 771, 1, 771);
        GLES20.glDrawArrays(5, 0, 4);
        l0.d.g("glDrawArrays");
        GLES20.glDisable(3042);
    }

    @Override // j0.x
    public l0.e h(z zVar, Map map) {
        l0.e h10 = super.h(zVar, map);
        this.f31512n = l0.d.p();
        this.f31513o = l0.d.p();
        return h10;
    }

    @Override // j0.x
    public void k() {
        super.k();
        this.f31512n = -1;
        this.f31513o = -1;
    }

    public int t(boolean z10) {
        l0.d.i(this.f30698a, true);
        l0.d.h(this.f30700c);
        if (z10) {
            return this.f31512n;
        }
        return this.f31513o;
    }

    public void v(long j10, Surface surface, l1 l1Var, SurfaceTexture surfaceTexture, SurfaceTexture surfaceTexture2) {
        l0.d.i(this.f30698a, true);
        l0.d.h(this.f30700c);
        l0.g f10 = f(surface);
        if (f10 == l0.d.f36221l) {
            f10 = c(surface);
            if (f10 != null) {
                this.f30699b.put(surface, f10);
            } else {
                return;
            }
        }
        l0.g gVar = f10;
        if (surface != this.f30706i) {
            i(gVar.a());
            this.f30706i = surface;
        }
        GLES20.glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
        GLES20.glClear(16384);
        w(gVar, l1Var, surfaceTexture, this.f31514p, this.f31512n, true);
        w(gVar, l1Var, surfaceTexture2, this.f31515q, this.f31513o, true);
        EGLExt.eglPresentationTimeANDROID(this.f30701d, gVar.a(), j10);
        if (!EGL14.eglSwapBuffers(this.f30701d, gVar.a())) {
            y0.l("DualOpenGlRenderer", "Failed to swap buffers with EGL error: 0x" + Integer.toHexString(EGL14.eglGetError()));
            m(surface, false);
        }
    }
}
