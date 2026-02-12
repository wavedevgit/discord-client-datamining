package xl;

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
    private EGLDisplay f54929a = EGL14.EGL_NO_DISPLAY;

    /* renamed from: b  reason: collision with root package name */
    private EGLContext f54930b = EGL14.EGL_NO_CONTEXT;

    /* renamed from: c  reason: collision with root package name */
    private EGLSurface f54931c = EGL14.EGL_NO_SURFACE;

    /* renamed from: d  reason: collision with root package name */
    private Surface f54932d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Surface surface) {
        this.f54932d = surface;
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
        this.f54929a = eglGetDisplay;
        if (eglGetDisplay != EGL14.EGL_NO_DISPLAY) {
            int[] iArr = new int[2];
            if (EGL14.eglInitialize(eglGetDisplay, iArr, 0, iArr, 1)) {
                EGLConfig[] eGLConfigArr = new EGLConfig[1];
                if (EGL14.eglChooseConfig(this.f54929a, new int[]{12324, 8, 12323, 8, 12322, 8, 12352, 4, EglBase.EGL_RECORDABLE_ANDROID, 1, 12344}, 0, eGLConfigArr, 0, 1, new int[1], 0)) {
                    this.f54930b = EGL14.eglCreateContext(this.f54929a, eGLConfigArr[0], EGL14.EGL_NO_CONTEXT, new int[]{12440, 2, 12344}, 0);
                    a("eglCreateContext");
                    if (this.f54930b != null) {
                        this.f54931c = EGL14.eglCreateWindowSurface(this.f54929a, eGLConfigArr[0], this.f54932d, new int[]{12344}, 0);
                        a("eglCreateWindowSurface");
                        if (this.f54931c != null) {
                            return;
                        }
                        throw new RuntimeException("surface was null");
                    }
                    throw new RuntimeException("null context");
                }
                throw new RuntimeException("unable to find RGB888+recordable ES2 EGL config");
            }
            this.f54929a = null;
            throw new RuntimeException("unable to initialize EGL14");
        }
        throw new RuntimeException("unable to get EGL14 display");
    }

    private void c() {
        EGLDisplay eGLDisplay = this.f54929a;
        EGLSurface eGLSurface = this.f54931c;
        if (EGL14.eglMakeCurrent(eGLDisplay, eGLSurface, eGLSurface, this.f54930b)) {
            return;
        }
        throw new RuntimeException("eglMakeCurrent failed");
    }

    public void d() {
        EGLDisplay eGLDisplay = this.f54929a;
        if (eGLDisplay != EGL14.EGL_NO_DISPLAY) {
            EGL14.eglDestroySurface(eGLDisplay, this.f54931c);
            EGL14.eglDestroyContext(this.f54929a, this.f54930b);
            EGL14.eglReleaseThread();
            EGL14.eglTerminate(this.f54929a);
            this.f54929a = EGL14.EGL_NO_DISPLAY;
            this.f54930b = EGL14.EGL_NO_CONTEXT;
            this.f54931c = EGL14.EGL_NO_SURFACE;
        }
        Surface surface = this.f54932d;
        if (surface != null) {
            surface.release();
            this.f54932d = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(long j10) {
        EGLExt.eglPresentationTimeANDROID(this.f54929a, this.f54931c, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f() {
        return EGL14.eglSwapBuffers(this.f54929a, this.f54931c);
    }
}
