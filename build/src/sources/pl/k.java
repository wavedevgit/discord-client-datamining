package pl;

import android.opengl.EGL14;
import android.opengl.EGLConfig;
import android.opengl.EGLContext;
import android.opengl.EGLDisplay;
import android.opengl.EGLExt;
import android.opengl.EGLSurface;
import android.view.Surface;
import org.webrtc.EglBase;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class k {

    /* renamed from: a  reason: collision with root package name */
    private EGLDisplay f46130a = EGL14.EGL_NO_DISPLAY;

    /* renamed from: b  reason: collision with root package name */
    private EGLContext f46131b = EGL14.EGL_NO_CONTEXT;

    /* renamed from: c  reason: collision with root package name */
    private EGLSurface f46132c = EGL14.EGL_NO_SURFACE;

    /* renamed from: d  reason: collision with root package name */
    private Surface f46133d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Surface surface) {
        this.f46133d = surface;
        b();
        c();
    }

    private void a(String str) {
        int eglGetError = EGL14.eglGetError();
        if (eglGetError == 12288) {
            return;
        }
        throw new RuntimeException(str + ": EGL error: 0x" + Integer.toHexString(eglGetError));
    }

    private void b() {
        EGLDisplay eglGetDisplay = EGL14.eglGetDisplay(0);
        this.f46130a = eglGetDisplay;
        if (eglGetDisplay != EGL14.EGL_NO_DISPLAY) {
            int[] iArr = new int[2];
            if (EGL14.eglInitialize(eglGetDisplay, iArr, 0, iArr, 1)) {
                EGLConfig[] eGLConfigArr = new EGLConfig[1];
                if (EGL14.eglChooseConfig(this.f46130a, new int[]{12324, 8, 12323, 8, 12322, 8, 12352, 4, EglBase.EGL_RECORDABLE_ANDROID, 1, 12344}, 0, eGLConfigArr, 0, 1, new int[1], 0)) {
                    this.f46131b = EGL14.eglCreateContext(this.f46130a, eGLConfigArr[0], EGL14.EGL_NO_CONTEXT, new int[]{12440, 2, 12344}, 0);
                    a("eglCreateContext");
                    if (this.f46131b != null) {
                        this.f46132c = EGL14.eglCreateWindowSurface(this.f46130a, eGLConfigArr[0], this.f46133d, new int[]{12344}, 0);
                        a("eglCreateWindowSurface");
                        if (this.f46132c != null) {
                            return;
                        }
                        throw new RuntimeException("surface was null");
                    }
                    throw new RuntimeException("null context");
                }
                throw new RuntimeException("unable to find RGB888+recordable ES2 EGL config");
            }
            this.f46130a = null;
            throw new RuntimeException("unable to initialize EGL14");
        }
        throw new RuntimeException("unable to get EGL14 display");
    }

    private void c() {
        EGLDisplay eGLDisplay = this.f46130a;
        EGLSurface eGLSurface = this.f46132c;
        if (EGL14.eglMakeCurrent(eGLDisplay, eGLSurface, eGLSurface, this.f46131b)) {
            return;
        }
        throw new RuntimeException("eglMakeCurrent failed");
    }

    public void d() {
        EGLDisplay eGLDisplay = this.f46130a;
        if (eGLDisplay != EGL14.EGL_NO_DISPLAY) {
            EGL14.eglDestroySurface(eGLDisplay, this.f46132c);
            EGL14.eglDestroyContext(this.f46130a, this.f46131b);
            EGL14.eglReleaseThread();
            EGL14.eglTerminate(this.f46130a);
            this.f46130a = EGL14.EGL_NO_DISPLAY;
            this.f46131b = EGL14.EGL_NO_CONTEXT;
            this.f46132c = EGL14.EGL_NO_SURFACE;
        }
        Surface surface = this.f46133d;
        if (surface != null) {
            surface.release();
            this.f46133d = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(long j10) {
        EGLExt.eglPresentationTimeANDROID(this.f46130a, this.f46132c, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f() {
        return EGL14.eglSwapBuffers(this.f46130a, this.f46132c);
    }
}
