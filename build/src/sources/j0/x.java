package j0;

import android.graphics.Bitmap;
import android.opengl.EGL14;
import android.opengl.EGLConfig;
import android.opengl.EGLContext;
import android.opengl.EGLDisplay;
import android.opengl.EGLExt;
import android.opengl.EGLSurface;
import android.opengl.GLES20;
import android.util.Log;
import android.util.Size;
import android.view.Surface;
import androidx.camera.core.ImageProcessingUtil;
import java.nio.ByteBuffer;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicBoolean;
import l0.d;
import l0.e;
import org.webrtc.EglBase;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x {

    /* renamed from: c  reason: collision with root package name */
    protected Thread f31351c;

    /* renamed from: g  reason: collision with root package name */
    protected EGLConfig f31355g;

    /* renamed from: i  reason: collision with root package name */
    protected Surface f31357i;

    /* renamed from: a  reason: collision with root package name */
    protected final AtomicBoolean f31349a = new AtomicBoolean(false);

    /* renamed from: b  reason: collision with root package name */
    protected final Map f31350b = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    protected EGLDisplay f31352d = EGL14.EGL_NO_DISPLAY;

    /* renamed from: e  reason: collision with root package name */
    protected EGLContext f31353e = EGL14.EGL_NO_CONTEXT;

    /* renamed from: f  reason: collision with root package name */
    protected int[] f31354f = l0.d.f36283a;

    /* renamed from: h  reason: collision with root package name */
    protected EGLSurface f31356h = EGL14.EGL_NO_SURFACE;

    /* renamed from: j  reason: collision with root package name */
    protected Map f31358j = Collections.EMPTY_MAP;

    /* renamed from: k  reason: collision with root package name */
    protected d.f f31359k = null;

    /* renamed from: l  reason: collision with root package name */
    protected d.e f31360l = d.e.UNKNOWN;

    /* renamed from: m  reason: collision with root package name */
    private int f31361m = -1;

    private void a(int i10) {
        GLES20.glActiveTexture(33984);
        l0.d.g("glActiveTexture");
        GLES20.glBindTexture(36197, i10);
        l0.d.g("glBindTexture");
    }

    private void b(x.z zVar, e.a aVar) {
        int i10;
        int i11;
        int i12;
        int i13;
        int[] iArr;
        EGLDisplay eglGetDisplay = EGL14.eglGetDisplay(0);
        this.f31352d = eglGetDisplay;
        if (!Objects.equals(eglGetDisplay, EGL14.EGL_NO_DISPLAY)) {
            int i14 = 2;
            int[] iArr2 = new int[2];
            if (EGL14.eglInitialize(this.f31352d, iArr2, 0, iArr2, 1)) {
                if (aVar != null) {
                    aVar.c(iArr2[0] + "." + iArr2[1]);
                }
                if (zVar.d()) {
                    i10 = 10;
                } else {
                    i10 = 8;
                }
                if (zVar.d()) {
                    i11 = 2;
                } else {
                    i11 = 8;
                }
                if (zVar.d()) {
                    i12 = 64;
                } else {
                    i12 = 4;
                }
                int i15 = i12;
                if (zVar.d()) {
                    i13 = -1;
                } else {
                    i13 = 1;
                }
                EGLConfig[] eGLConfigArr = new EGLConfig[1];
                if (EGL14.eglChooseConfig(this.f31352d, new int[]{12324, i10, 12323, i10, 12322, i10, 12321, i11, 12325, 0, 12326, 0, 12352, i15, EglBase.EGL_RECORDABLE_ANDROID, i13, 12339, 5, 12344}, 0, eGLConfigArr, 0, 1, new int[1], 0)) {
                    EGLConfig eGLConfig = eGLConfigArr[0];
                    if (zVar.d()) {
                        i14 = 3;
                    }
                    EGLContext eglCreateContext = EGL14.eglCreateContext(this.f31352d, eGLConfig, EGL14.EGL_NO_CONTEXT, new int[]{12440, i14, 12344}, 0);
                    l0.d.f("eglCreateContext");
                    this.f31355g = eGLConfig;
                    this.f31353e = eglCreateContext;
                    EGL14.eglQueryContext(this.f31352d, eglCreateContext, 12440, new int[1], 0);
                    Log.d("OpenGlRenderer", "EGLContext created, client version " + iArr[0]);
                    return;
                }
                throw new IllegalStateException("Unable to find a suitable EGLConfig");
            }
            this.f31352d = EGL14.EGL_NO_DISPLAY;
            throw new IllegalStateException("Unable to initialize EGL14");
        }
        throw new IllegalStateException("Unable to get EGL14 display");
    }

    private void d() {
        EGLDisplay eGLDisplay = this.f31352d;
        EGLConfig eGLConfig = this.f31355g;
        Objects.requireNonNull(eGLConfig);
        this.f31356h = l0.d.n(eGLDisplay, eGLConfig, 1, 1);
    }

    private b2.c e(x.z zVar) {
        l0.d.i(this.f31349a, false);
        try {
            b(zVar, null);
            d();
            i(this.f31356h);
            String glGetString = GLES20.glGetString(7939);
            String eglQueryString = EGL14.eglQueryString(this.f31352d, 12373);
            if (glGetString == null) {
                glGetString = "";
            }
            if (eglQueryString == null) {
                eglQueryString = "";
            }
            return new b2.c(glGetString, eglQueryString);
        } catch (IllegalStateException e10) {
            y0.m("OpenGlRenderer", "Failed to get GL or EGL extensions: " + e10.getMessage(), e10);
            return new b2.c("", "");
        } finally {
            l();
        }
    }

    private void l() {
        for (d.f fVar : this.f31358j.values()) {
            fVar.b();
        }
        this.f31358j = Collections.EMPTY_MAP;
        this.f31359k = null;
        if (!Objects.equals(this.f31352d, EGL14.EGL_NO_DISPLAY)) {
            EGLDisplay eGLDisplay = this.f31352d;
            EGLSurface eGLSurface = EGL14.EGL_NO_SURFACE;
            EGL14.eglMakeCurrent(eGLDisplay, eGLSurface, eGLSurface, EGL14.EGL_NO_CONTEXT);
            for (l0.g gVar : this.f31350b.values()) {
                if (!Objects.equals(gVar.a(), EGL14.EGL_NO_SURFACE) && !EGL14.eglDestroySurface(this.f31352d, gVar.a())) {
                    l0.d.e("eglDestroySurface");
                }
            }
            this.f31350b.clear();
            if (!Objects.equals(this.f31356h, EGL14.EGL_NO_SURFACE)) {
                EGL14.eglDestroySurface(this.f31352d, this.f31356h);
                this.f31356h = EGL14.EGL_NO_SURFACE;
            }
            if (!Objects.equals(this.f31353e, EGL14.EGL_NO_CONTEXT)) {
                EGL14.eglDestroyContext(this.f31352d, this.f31353e);
                this.f31353e = EGL14.EGL_NO_CONTEXT;
            }
            EGL14.eglReleaseThread();
            EGL14.eglTerminate(this.f31352d);
            this.f31352d = EGL14.EGL_NO_DISPLAY;
        }
        this.f31355g = null;
        this.f31361m = -1;
        this.f31360l = d.e.UNKNOWN;
        this.f31357i = null;
        this.f31351c = null;
    }

    private void q(ByteBuffer byteBuffer, Size size, float[] fArr) {
        boolean z10;
        if (byteBuffer.capacity() == size.getWidth() * size.getHeight() * 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.b(z10, "ByteBuffer capacity is not equal to width * height * 4.");
        b2.e.b(byteBuffer.isDirect(), "ByteBuffer is not direct.");
        int u10 = l0.d.u();
        GLES20.glActiveTexture(33985);
        l0.d.g("glActiveTexture");
        GLES20.glBindTexture(3553, u10);
        l0.d.g("glBindTexture");
        GLES20.glTexImage2D(3553, 0, 6407, size.getWidth(), size.getHeight(), 0, 6407, 5121, null);
        l0.d.g("glTexImage2D");
        GLES20.glTexParameteri(3553, 10240, 9729);
        GLES20.glTexParameteri(3553, 10241, 9729);
        int t10 = l0.d.t();
        GLES20.glBindFramebuffer(36160, t10);
        l0.d.g("glBindFramebuffer");
        GLES20.glFramebufferTexture2D(36160, 36064, 3553, u10, 0);
        l0.d.g("glFramebufferTexture2D");
        GLES20.glActiveTexture(33984);
        l0.d.g("glActiveTexture");
        GLES20.glBindTexture(36197, this.f31361m);
        l0.d.g("glBindTexture");
        this.f31357i = null;
        GLES20.glViewport(0, 0, size.getWidth(), size.getHeight());
        GLES20.glScissor(0, 0, size.getWidth(), size.getHeight());
        d.f fVar = (d.f) b2.e.g(this.f31359k);
        if (fVar instanceof d.g) {
            ((d.g) fVar).h(fArr);
        }
        GLES20.glDrawArrays(5, 0, 4);
        l0.d.g("glDrawArrays");
        GLES20.glReadPixels(0, 0, size.getWidth(), size.getHeight(), 6408, 5121, byteBuffer);
        l0.d.g("glReadPixels");
        GLES20.glBindFramebuffer(36160, 0);
        l0.d.s(u10);
        l0.d.r(t10);
        a(this.f31361m);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public l0.g c(Surface surface) {
        try {
            EGLDisplay eGLDisplay = this.f31352d;
            EGLConfig eGLConfig = this.f31355g;
            Objects.requireNonNull(eGLConfig);
            EGLSurface q10 = l0.d.q(eGLDisplay, eGLConfig, surface, this.f31354f);
            Size x10 = l0.d.x(this.f31352d, q10);
            return l0.g.d(q10, x10.getWidth(), x10.getHeight());
        } catch (IllegalArgumentException | IllegalStateException e10) {
            y0.m("OpenGlRenderer", "Failed to create EGL surface: " + e10.getMessage(), e10);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public l0.g f(Surface surface) {
        b2.e.j(this.f31350b.containsKey(surface), "The surface is not registered.");
        l0.g gVar = (l0.g) this.f31350b.get(surface);
        Objects.requireNonNull(gVar);
        return gVar;
    }

    public int g() {
        l0.d.i(this.f31349a, true);
        l0.d.h(this.f31351c);
        return this.f31361m;
    }

    public l0.e h(x.z zVar, Map map) {
        l0.d.i(this.f31349a, false);
        e.a a10 = l0.e.a();
        try {
            if (zVar.d()) {
                b2.c e10 = e(zVar);
                String str = (String) b2.e.g((String) e10.f6244a);
                String str2 = (String) b2.e.g((String) e10.f6245b);
                if (!str.contains("GL_EXT_YUV_target")) {
                    y0.l("OpenGlRenderer", "Device does not support GL_EXT_YUV_target. Fallback to SDR.");
                    zVar = x.z.f53042d;
                }
                this.f31354f = l0.d.k(str2, zVar);
                a10.d(str);
                a10.b(str2);
            }
            b(zVar, a10);
            d();
            i(this.f31356h);
            a10.e(l0.d.w());
            this.f31358j = l0.d.o(zVar, map);
            int p10 = l0.d.p();
            this.f31361m = p10;
            s(p10);
            this.f31351c = Thread.currentThread();
            this.f31349a.set(true);
            return a10.a();
        } catch (IllegalArgumentException e11) {
            e = e11;
            l();
            throw e;
        } catch (IllegalStateException e12) {
            e = e12;
            l();
            throw e;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void i(EGLSurface eGLSurface) {
        b2.e.g(this.f31352d);
        b2.e.g(this.f31353e);
        if (EGL14.eglMakeCurrent(this.f31352d, eGLSurface, eGLSurface, this.f31353e)) {
            return;
        }
        throw new IllegalStateException("eglMakeCurrent failed");
    }

    public void j(Surface surface) {
        l0.d.i(this.f31349a, true);
        l0.d.h(this.f31351c);
        if (!this.f31350b.containsKey(surface)) {
            this.f31350b.put(surface, l0.d.f36294l);
        }
    }

    public void k() {
        if (!this.f31349a.getAndSet(false)) {
            return;
        }
        l0.d.h(this.f31351c);
        l();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void m(Surface surface, boolean z10) {
        l0.g gVar;
        if (this.f31357i == surface) {
            this.f31357i = null;
            i(this.f31356h);
        }
        if (z10) {
            gVar = (l0.g) this.f31350b.remove(surface);
        } else {
            gVar = (l0.g) this.f31350b.put(surface, l0.d.f36294l);
        }
        if (gVar != null && gVar != l0.d.f36294l) {
            try {
                EGL14.eglDestroySurface(this.f31352d, gVar.a());
            } catch (RuntimeException e10) {
                y0.m("OpenGlRenderer", "Failed to destroy EGL surface: " + e10.getMessage(), e10);
            }
        }
    }

    public void n(long j10, float[] fArr, Surface surface) {
        l0.d.i(this.f31349a, true);
        l0.d.h(this.f31351c);
        l0.g f10 = f(surface);
        if (f10 == l0.d.f36294l) {
            f10 = c(surface);
            if (f10 != null) {
                this.f31350b.put(surface, f10);
            } else {
                return;
            }
        }
        if (surface != this.f31357i) {
            i(f10.a());
            this.f31357i = surface;
            GLES20.glViewport(0, 0, f10.c(), f10.b());
            GLES20.glScissor(0, 0, f10.c(), f10.b());
        }
        d.f fVar = (d.f) b2.e.g(this.f31359k);
        if (fVar instanceof d.g) {
            ((d.g) fVar).h(fArr);
        }
        GLES20.glDrawArrays(5, 0, 4);
        l0.d.g("glDrawArrays");
        EGLExt.eglPresentationTimeANDROID(this.f31352d, f10.a(), j10);
        if (!EGL14.eglSwapBuffers(this.f31352d, f10.a())) {
            y0.l("OpenGlRenderer", "Failed to swap buffers with EGL error: 0x" + Integer.toHexString(EGL14.eglGetError()));
            m(surface, false);
        }
    }

    public void o(d.e eVar) {
        l0.d.i(this.f31349a, true);
        l0.d.h(this.f31351c);
        if (this.f31360l != eVar) {
            this.f31360l = eVar;
            s(this.f31361m);
        }
    }

    public Bitmap p(Size size, float[] fArr) {
        ByteBuffer allocateDirect = ByteBuffer.allocateDirect(size.getWidth() * size.getHeight() * 4);
        q(allocateDirect, size, fArr);
        Bitmap createBitmap = Bitmap.createBitmap(size.getWidth(), size.getHeight(), Bitmap.Config.ARGB_8888);
        allocateDirect.rewind();
        ImageProcessingUtil.j(createBitmap, allocateDirect, size.getWidth() * 4);
        return createBitmap;
    }

    public void r(Surface surface) {
        l0.d.i(this.f31349a, true);
        l0.d.h(this.f31351c);
        m(surface, true);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void s(int i10) {
        d.f fVar = (d.f) this.f31358j.get(this.f31360l);
        if (fVar != null) {
            if (this.f31359k != fVar) {
                this.f31359k = fVar;
                fVar.f();
                Log.d("OpenGlRenderer", "Using program for input format " + this.f31360l + ": " + this.f31359k);
            }
            a(i10);
            return;
        }
        throw new IllegalStateException("Unable to configure program for input format: " + this.f31360l);
    }
}
