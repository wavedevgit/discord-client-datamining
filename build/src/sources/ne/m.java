package ne;

import android.graphics.SurfaceTexture;
import android.opengl.EGL14;
import android.opengl.EGLConfig;
import android.opengl.EGLContext;
import android.opengl.EGLDisplay;
import android.opengl.EGLSurface;
import android.opengl.GLES20;
import android.os.Handler;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m implements SurfaceTexture.OnFrameAvailableListener, Runnable {

    /* renamed from: r  reason: collision with root package name */
    private static final int[] f39591r = {12352, 4, 12324, 8, 12323, 8, 12322, 8, 12321, 8, 12325, 0, 12327, 12344, 12339, 4, 12344};

    /* renamed from: d  reason: collision with root package name */
    private final Handler f39592d;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f39593e;

    /* renamed from: i  reason: collision with root package name */
    private EGLDisplay f39594i;

    /* renamed from: o  reason: collision with root package name */
    private EGLContext f39595o;

    /* renamed from: p  reason: collision with root package name */
    private EGLSurface f39596p;

    /* renamed from: q  reason: collision with root package name */
    private SurfaceTexture f39597q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    public m(Handler handler) {
        this(handler, null);
    }

    private static EGLConfig a(EGLDisplay eGLDisplay) {
        boolean z10 = true;
        EGLConfig[] eGLConfigArr = new EGLConfig[1];
        int[] iArr = new int[1];
        boolean eglChooseConfig = EGL14.eglChooseConfig(eGLDisplay, f39591r, 0, eGLConfigArr, 0, 1, iArr, 0);
        if (!eglChooseConfig || iArr[0] <= 0 || eGLConfigArr[0] == null) {
            z10 = false;
        }
        t.c(z10, w0.D("eglChooseConfig failed: success=%b, numConfigs[0]=%d, configs[0]=%s", Boolean.valueOf(eglChooseConfig), Integer.valueOf(iArr[0]), eGLConfigArr[0]));
        return eGLConfigArr[0];
    }

    private static EGLContext b(EGLDisplay eGLDisplay, EGLConfig eGLConfig, int i10) {
        boolean z10 = true;
        EGLContext eglCreateContext = EGL14.eglCreateContext(eGLDisplay, eGLConfig, EGL14.EGL_NO_CONTEXT, i10 == 0 ? new int[]{12440, 2, 12344} : new int[]{12440, 2, 12992, 1, 12344}, 0);
        if (eglCreateContext == null) {
            z10 = false;
        }
        t.c(z10, "eglCreateContext failed");
        return eglCreateContext;
    }

    private static EGLSurface c(EGLDisplay eGLDisplay, EGLConfig eGLConfig, EGLContext eGLContext, int i10) {
        EGLSurface eglCreatePbufferSurface;
        boolean z10 = true;
        if (i10 == 1) {
            eglCreatePbufferSurface = EGL14.EGL_NO_SURFACE;
        } else {
            eglCreatePbufferSurface = EGL14.eglCreatePbufferSurface(eGLDisplay, eGLConfig, i10 == 2 ? new int[]{12375, 1, 12374, 1, 12992, 1, 12344} : new int[]{12375, 1, 12374, 1, 12344}, 0);
            if (eglCreatePbufferSurface == null) {
                z10 = false;
            }
            t.c(z10, "eglCreatePbufferSurface failed");
        }
        t.c(EGL14.eglMakeCurrent(eGLDisplay, eglCreatePbufferSurface, eglCreatePbufferSurface, eGLContext), "eglMakeCurrent failed");
        return eglCreatePbufferSurface;
    }

    private static void e(int[] iArr) {
        GLES20.glGenTextures(1, iArr, 0);
        t.b();
    }

    private static EGLDisplay f() {
        boolean z10;
        EGLDisplay eglGetDisplay = EGL14.eglGetDisplay(0);
        if (eglGetDisplay != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t.c(z10, "eglGetDisplay failed");
        int[] iArr = new int[2];
        t.c(EGL14.eglInitialize(eglGetDisplay, iArr, 0, iArr, 1), "eglInitialize failed");
        return eglGetDisplay;
    }

    public SurfaceTexture g() {
        return (SurfaceTexture) ne.a.e(this.f39597q);
    }

    public void h(int i10) {
        EGLDisplay f10 = f();
        this.f39594i = f10;
        EGLConfig a10 = a(f10);
        EGLContext b10 = b(this.f39594i, a10, i10);
        this.f39595o = b10;
        this.f39596p = c(this.f39594i, a10, b10, i10);
        e(this.f39593e);
        SurfaceTexture surfaceTexture = new SurfaceTexture(this.f39593e[0]);
        this.f39597q = surfaceTexture;
        surfaceTexture.setOnFrameAvailableListener(this);
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [android.opengl.EGLContext, android.graphics.SurfaceTexture, android.opengl.EGLSurface, android.opengl.EGLDisplay] */
    public void i() {
        this.f39592d.removeCallbacks(this);
        try {
            SurfaceTexture surfaceTexture = this.f39597q;
            if (surfaceTexture != null) {
                surfaceTexture.release();
                GLES20.glDeleteTextures(1, this.f39593e, 0);
            }
        } finally {
            EGLDisplay eGLDisplay = this.f39594i;
            if (eGLDisplay != null && !eGLDisplay.equals(EGL14.EGL_NO_DISPLAY)) {
                EGLDisplay eGLDisplay2 = this.f39594i;
                EGLSurface eGLSurface = EGL14.EGL_NO_SURFACE;
                EGL14.eglMakeCurrent(eGLDisplay2, eGLSurface, eGLSurface, EGL14.EGL_NO_CONTEXT);
            }
            EGLSurface eGLSurface2 = this.f39596p;
            if (eGLSurface2 != null && !eGLSurface2.equals(EGL14.EGL_NO_SURFACE)) {
                EGL14.eglDestroySurface(this.f39594i, this.f39596p);
            }
            EGLContext eGLContext = this.f39595o;
            if (eGLContext != null) {
                EGL14.eglDestroyContext(this.f39594i, eGLContext);
            }
            if (w0.f39657a >= 19) {
                EGL14.eglReleaseThread();
            }
            EGLDisplay eGLDisplay3 = this.f39594i;
            if (eGLDisplay3 != null && !eGLDisplay3.equals(EGL14.EGL_NO_DISPLAY)) {
                EGL14.eglTerminate(this.f39594i);
            }
            this.f39594i = null;
            this.f39595o = null;
            this.f39596p = null;
            this.f39597q = null;
        }
    }

    @Override // android.graphics.SurfaceTexture.OnFrameAvailableListener
    public void onFrameAvailable(SurfaceTexture surfaceTexture) {
        this.f39592d.post(this);
    }

    @Override // java.lang.Runnable
    public void run() {
        d();
        SurfaceTexture surfaceTexture = this.f39597q;
        if (surfaceTexture != null) {
            try {
                surfaceTexture.updateTexImage();
            } catch (RuntimeException unused) {
            }
        }
    }

    public m(Handler handler, a aVar) {
        this.f39592d = handler;
        this.f39593e = new int[1];
    }

    private void d() {
    }
}
