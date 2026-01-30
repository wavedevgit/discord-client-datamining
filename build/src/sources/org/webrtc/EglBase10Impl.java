package org.webrtc;

import android.graphics.Canvas;
import android.graphics.Rect;
import android.graphics.SurfaceTexture;
import android.opengl.GLException;
import android.view.Surface;
import android.view.SurfaceHolder;
import javax.microedition.khronos.egl.EGL10;
import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.egl.EGLContext;
import javax.microedition.khronos.egl.EGLDisplay;
import javax.microedition.khronos.egl.EGLSurface;
import org.webrtc.EglBase;
import org.webrtc.EglBase10;
import org.webrtc.EglBase10Impl;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class EglBase10Impl implements EglBase10 {
    private static final int EGL_CONTEXT_CLIENT_VERSION = 12440;
    private static final EglConnection EGL_NO_CONNECTION = new EglConnection();
    private static final String TAG = "EglBase10Impl";
    private EglConnection eglConnection;
    private EGLSurface eglSurface = EGL10.EGL_NO_SURFACE;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class Context implements EglBase10.Context {
        private final EGL10 egl;
        private final EGLContext eglContext;
        private final EGLConfig eglContextConfig;

        public Context(EGL10 egl10, EGLContext eGLContext, EGLConfig eGLConfig) {
            this.egl = egl10;
            this.eglContext = eGLContext;
            this.eglContextConfig = eGLConfig;
        }

        @Override // org.webrtc.EglBase.Context
        public long getNativeEglContext() {
            EGLContext eglGetCurrentContext = this.egl.eglGetCurrentContext();
            EGLDisplay eglGetCurrentDisplay = this.egl.eglGetCurrentDisplay();
            EGLSurface eglGetCurrentSurface = this.egl.eglGetCurrentSurface(12377);
            EGLSurface eglGetCurrentSurface2 = this.egl.eglGetCurrentSurface(12378);
            if (eglGetCurrentDisplay == EGL10.EGL_NO_DISPLAY) {
                eglGetCurrentDisplay = this.egl.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY);
            }
            EGLSurface eGLSurface = null;
            try {
                if (eglGetCurrentContext != this.eglContext) {
                    eGLSurface = this.egl.eglCreatePbufferSurface(eglGetCurrentDisplay, this.eglContextConfig, new int[]{12375, 1, 12374, 1, 12344});
                    if (!this.egl.eglMakeCurrent(eglGetCurrentDisplay, eGLSurface, eGLSurface, this.eglContext)) {
                        int eglGetError = this.egl.eglGetError();
                        int eglGetError2 = this.egl.eglGetError();
                        throw new GLException(eglGetError, "Failed to make temporary EGL surface active: " + eglGetError2);
                    }
                }
                long d10 = EglBase10Impl.d();
                if (eGLSurface != null) {
                    this.egl.eglMakeCurrent(eglGetCurrentDisplay, eglGetCurrentSurface, eglGetCurrentSurface2, eglGetCurrentContext);
                    this.egl.eglDestroySurface(eglGetCurrentDisplay, eGLSurface);
                }
                return d10;
            } catch (Throwable th2) {
                if (0 != 0) {
                    this.egl.eglMakeCurrent(eglGetCurrentDisplay, eglGetCurrentSurface, eglGetCurrentSurface2, eglGetCurrentContext);
                    this.egl.eglDestroySurface(eglGetCurrentDisplay, null);
                }
                throw th2;
            }
        }

        @Override // org.webrtc.EglBase10.Context
        public EGLContext getRawContext() {
            return this.eglContext;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class EglConnection implements EglBase10.EglConnection {
        private EGLSurface currentSurface;
        private final EGL10 egl;
        private final EGLConfig eglConfig;
        private final EGLContext eglContext;
        private final EGLDisplay eglDisplay;
        private final RefCountDelegate refCountDelegate;

        public static /* synthetic */ void a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public /* synthetic */ void lambda$new$0() {
            EGLSurface eGLSurface;
            synchronized (EglBase.lock) {
                EGL10 egl10 = this.egl;
                EGLDisplay eGLDisplay = this.eglDisplay;
                eGLSurface = EGL10.EGL_NO_SURFACE;
                egl10.eglMakeCurrent(eGLDisplay, eGLSurface, eGLSurface, EGL10.EGL_NO_CONTEXT);
            }
            this.egl.eglDestroyContext(this.eglDisplay, this.eglContext);
            this.egl.eglTerminate(this.eglDisplay);
            this.currentSurface = eGLSurface;
        }

        public void detachCurrent() {
            EGLSurface eGLSurface;
            synchronized (EglBase.lock) {
                EGL10 egl10 = this.egl;
                EGLDisplay eGLDisplay = this.eglDisplay;
                eGLSurface = EGL10.EGL_NO_SURFACE;
                if (!egl10.eglMakeCurrent(eGLDisplay, eGLSurface, eGLSurface, EGL10.EGL_NO_CONTEXT)) {
                    int eglGetError = this.egl.eglGetError();
                    String hexString = Integer.toHexString(this.egl.eglGetError());
                    throw new GLException(eglGetError, "eglDetachCurrent failed: 0x" + hexString);
                }
            }
            this.currentSurface = eGLSurface;
        }

        @Override // org.webrtc.EglBase10.EglConnection
        public EGLConfig getConfig() {
            return this.eglConfig;
        }

        @Override // org.webrtc.EglBase10.EglConnection
        public EGLContext getContext() {
            return this.eglContext;
        }

        @Override // org.webrtc.EglBase10.EglConnection
        public EGLDisplay getDisplay() {
            return this.eglDisplay;
        }

        @Override // org.webrtc.EglBase10.EglConnection
        public EGL10 getEgl() {
            return this.egl;
        }

        public void makeCurrent(EGLSurface eGLSurface) {
            if (this.egl.eglGetCurrentContext() == this.eglContext && this.currentSurface == eGLSurface) {
                return;
            }
            synchronized (EglBase.lock) {
                if (!this.egl.eglMakeCurrent(this.eglDisplay, eGLSurface, eGLSurface, this.eglContext)) {
                    int eglGetError = this.egl.eglGetError();
                    String hexString = Integer.toHexString(this.egl.eglGetError());
                    throw new GLException(eglGetError, "eglMakeCurrent failed: 0x" + hexString);
                }
            }
            this.currentSurface = eGLSurface;
        }

        @Override // org.webrtc.RefCounted
        public void release() {
            this.refCountDelegate.release();
        }

        @Override // org.webrtc.RefCounted
        public void retain() {
            this.refCountDelegate.retain();
        }

        public EglConnection(EGLContext eGLContext, int[] iArr) {
            this.currentSurface = EGL10.EGL_NO_SURFACE;
            EGL10 egl10 = (EGL10) EGLContext.getEGL();
            this.egl = egl10;
            EGLDisplay eglDisplay = EglBase10Impl.getEglDisplay(egl10);
            this.eglDisplay = eglDisplay;
            EGLConfig eglConfig = EglBase10Impl.getEglConfig(egl10, eglDisplay, iArr);
            this.eglConfig = eglConfig;
            int openGlesVersionFromConfig = EglBase.getOpenGlesVersionFromConfig(iArr);
            Logging.d(EglBase10Impl.TAG, "Using OpenGL ES version " + openGlesVersionFromConfig);
            this.eglContext = EglBase10Impl.createEglContext(egl10, eGLContext, eglDisplay, eglConfig, openGlesVersionFromConfig);
            this.refCountDelegate = new RefCountDelegate(new Runnable() { // from class: org.webrtc.i
                @Override // java.lang.Runnable
                public final void run() {
                    EglBase10Impl.EglConnection.this.lambda$new$0();
                }
            });
        }

        private EglConnection() {
            this.currentSurface = EGL10.EGL_NO_SURFACE;
            this.egl = (EGL10) EGLContext.getEGL();
            this.eglContext = EGL10.EGL_NO_CONTEXT;
            this.eglDisplay = EGL10.EGL_NO_DISPLAY;
            this.eglConfig = null;
            this.refCountDelegate = new RefCountDelegate(new Runnable() { // from class: org.webrtc.h
                @Override // java.lang.Runnable
                public final void run() {
                    EglBase10Impl.EglConnection.a();
                }
            });
        }
    }

    public EglBase10Impl(EGLContext eGLContext, int[] iArr) {
        this.eglConnection = new EglConnection(eGLContext, iArr);
    }

    private void checkIsNotReleased() {
        if (this.eglConnection != EGL_NO_CONNECTION) {
            return;
        }
        throw new RuntimeException("This object has been released");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static EGLContext createEglContext(EGL10 egl10, EGLContext eGLContext, EGLDisplay eGLDisplay, EGLConfig eGLConfig, int i10) {
        EGLContext eglCreateContext;
        if (eGLContext != null && eGLContext == EGL10.EGL_NO_CONTEXT) {
            throw new RuntimeException("Invalid sharedContext");
        }
        int[] iArr = {EGL_CONTEXT_CLIENT_VERSION, i10, 12344};
        if (eGLContext == null) {
            eGLContext = EGL10.EGL_NO_CONTEXT;
        }
        synchronized (EglBase.lock) {
            eglCreateContext = egl10.eglCreateContext(eGLDisplay, eGLConfig, eGLContext, iArr);
        }
        if (eglCreateContext != EGL10.EGL_NO_CONTEXT) {
            return eglCreateContext;
        }
        int eglGetError = egl10.eglGetError();
        String hexString = Integer.toHexString(egl10.eglGetError());
        throw new GLException(eglGetError, "Failed to create EGL context: 0x" + hexString);
    }

    private void createSurfaceInternal(Object obj) {
        if (!(obj instanceof SurfaceHolder) && !(obj instanceof SurfaceTexture)) {
            throw new IllegalStateException("Input must be either a SurfaceHolder or SurfaceTexture");
        }
        checkIsNotReleased();
        EGLSurface eGLSurface = this.eglSurface;
        EGLSurface eGLSurface2 = EGL10.EGL_NO_SURFACE;
        if (eGLSurface == eGLSurface2) {
            EGL10 egl = this.eglConnection.getEgl();
            EGLSurface eglCreateWindowSurface = egl.eglCreateWindowSurface(this.eglConnection.getDisplay(), this.eglConnection.getConfig(), obj, new int[]{12344});
            this.eglSurface = eglCreateWindowSurface;
            if (eglCreateWindowSurface != eGLSurface2) {
                return;
            }
            int eglGetError = egl.eglGetError();
            String hexString = Integer.toHexString(egl.eglGetError());
            throw new GLException(eglGetError, "Failed to create window surface: 0x" + hexString);
        }
        throw new RuntimeException("Already has an EGLSurface");
    }

    static /* bridge */ /* synthetic */ long d() {
        return nativeGetCurrentNativeEGLContext();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static EGLConfig getEglConfig(EGL10 egl10, EGLDisplay eGLDisplay, int[] iArr) {
        EGLConfig[] eGLConfigArr = new EGLConfig[1];
        int[] iArr2 = new int[1];
        if (egl10.eglChooseConfig(eGLDisplay, iArr, eGLConfigArr, 1, iArr2)) {
            if (iArr2[0] > 0) {
                EGLConfig eGLConfig = eGLConfigArr[0];
                if (eGLConfig != null) {
                    return eGLConfig;
                }
                throw new RuntimeException("eglChooseConfig returned null");
            }
            throw new RuntimeException("Unable to find any matching EGL config");
        }
        int eglGetError = egl10.eglGetError();
        String hexString = Integer.toHexString(egl10.eglGetError());
        throw new GLException(eglGetError, "eglChooseConfig failed: 0x" + hexString);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static EGLDisplay getEglDisplay(EGL10 egl10) {
        EGLDisplay eglGetDisplay = egl10.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY);
        if (eglGetDisplay != EGL10.EGL_NO_DISPLAY) {
            if (egl10.eglInitialize(eglGetDisplay, new int[2])) {
                return eglGetDisplay;
            }
            int eglGetError = egl10.eglGetError();
            String hexString = Integer.toHexString(egl10.eglGetError());
            throw new GLException(eglGetError, "Unable to initialize EGL10: 0x" + hexString);
        }
        int eglGetError2 = egl10.eglGetError();
        String hexString2 = Integer.toHexString(egl10.eglGetError());
        throw new GLException(eglGetError2, "Unable to get EGL10 display: 0x" + hexString2);
    }

    private static native long nativeGetCurrentNativeEGLContext();

    @Override // org.webrtc.EglBase
    public void createDummyPbufferSurface() {
        createPbufferSurface(1, 1);
    }

    @Override // org.webrtc.EglBase
    public void createPbufferSurface(int i10, int i11) {
        checkIsNotReleased();
        EGLSurface eGLSurface = this.eglSurface;
        EGLSurface eGLSurface2 = EGL10.EGL_NO_SURFACE;
        if (eGLSurface == eGLSurface2) {
            EGL10 egl = this.eglConnection.getEgl();
            EGLSurface eglCreatePbufferSurface = egl.eglCreatePbufferSurface(this.eglConnection.getDisplay(), this.eglConnection.getConfig(), new int[]{12375, i10, 12374, i11, 12344});
            this.eglSurface = eglCreatePbufferSurface;
            if (eglCreatePbufferSurface != eGLSurface2) {
                return;
            }
            int eglGetError = egl.eglGetError();
            String hexString = Integer.toHexString(egl.eglGetError());
            throw new GLException(eglGetError, "Failed to create pixel buffer surface with size " + i10 + "x" + i11 + ": 0x" + hexString);
        }
        throw new RuntimeException("Already has an EGLSurface");
    }

    @Override // org.webrtc.EglBase
    public void createSurface(Surface surface) {
        createSurfaceInternal(new SurfaceHolder(surface) { // from class: org.webrtc.EglBase10Impl.1FakeSurfaceHolder
            private final Surface surface;

            {
                this.surface = surface;
            }

            @Override // android.view.SurfaceHolder
            public void addCallback(SurfaceHolder.Callback callback) {
            }

            @Override // android.view.SurfaceHolder
            public Surface getSurface() {
                return this.surface;
            }

            @Override // android.view.SurfaceHolder
            public Rect getSurfaceFrame() {
                return null;
            }

            @Override // android.view.SurfaceHolder
            public boolean isCreating() {
                return false;
            }

            @Override // android.view.SurfaceHolder
            public Canvas lockCanvas() {
                return null;
            }

            @Override // android.view.SurfaceHolder
            public void removeCallback(SurfaceHolder.Callback callback) {
            }

            @Override // android.view.SurfaceHolder
            public void setFixedSize(int i10, int i11) {
            }

            @Override // android.view.SurfaceHolder
            public void setFormat(int i10) {
            }

            @Override // android.view.SurfaceHolder
            public void setKeepScreenOn(boolean z10) {
            }

            @Override // android.view.SurfaceHolder
            public void setSizeFromLayout() {
            }

            @Override // android.view.SurfaceHolder
            @Deprecated
            public void setType(int i10) {
            }

            @Override // android.view.SurfaceHolder
            public void unlockCanvasAndPost(Canvas canvas) {
            }

            @Override // android.view.SurfaceHolder
            public Canvas lockCanvas(Rect rect) {
                return null;
            }
        });
    }

    @Override // org.webrtc.EglBase
    public void detachCurrent() {
        this.eglConnection.detachCurrent();
    }

    @Override // org.webrtc.EglBase
    public EglBase.Context getEglBaseContext() {
        return new Context(this.eglConnection.getEgl(), this.eglConnection.getContext(), this.eglConnection.getConfig());
    }

    @Override // org.webrtc.EglBase
    public boolean hasSurface() {
        if (this.eglSurface != EGL10.EGL_NO_SURFACE) {
            return true;
        }
        return false;
    }

    @Override // org.webrtc.EglBase
    public void makeCurrent() {
        checkIsNotReleased();
        EGLSurface eGLSurface = this.eglSurface;
        if (eGLSurface != EGL10.EGL_NO_SURFACE) {
            this.eglConnection.makeCurrent(eGLSurface);
            return;
        }
        throw new RuntimeException("No EGLSurface - can't make current");
    }

    @Override // org.webrtc.EglBase
    public void release() {
        checkIsNotReleased();
        releaseSurface();
        this.eglConnection.release();
        this.eglConnection = EGL_NO_CONNECTION;
    }

    @Override // org.webrtc.EglBase
    public void releaseSurface() {
        EGLSurface eGLSurface = this.eglSurface;
        EGLSurface eGLSurface2 = EGL10.EGL_NO_SURFACE;
        if (eGLSurface != eGLSurface2) {
            this.eglConnection.getEgl().eglDestroySurface(this.eglConnection.getDisplay(), this.eglSurface);
            this.eglSurface = eGLSurface2;
        }
    }

    @Override // org.webrtc.EglBase
    public int surfaceHeight() {
        int[] iArr = new int[1];
        this.eglConnection.getEgl().eglQuerySurface(this.eglConnection.getDisplay(), this.eglSurface, 12374, iArr);
        return iArr[0];
    }

    @Override // org.webrtc.EglBase
    public int surfaceWidth() {
        int[] iArr = new int[1];
        this.eglConnection.getEgl().eglQuerySurface(this.eglConnection.getDisplay(), this.eglSurface, 12375, iArr);
        return iArr[0];
    }

    @Override // org.webrtc.EglBase
    public void swapBuffers() {
        checkIsNotReleased();
        if (this.eglSurface != EGL10.EGL_NO_SURFACE) {
            synchronized (EglBase.lock) {
                this.eglConnection.getEgl().eglSwapBuffers(this.eglConnection.getDisplay(), this.eglSurface);
            }
            return;
        }
        throw new RuntimeException("No EGLSurface - can't swap buffers");
    }

    @Override // org.webrtc.EglBase
    public void createSurface(SurfaceTexture surfaceTexture) {
        createSurfaceInternal(surfaceTexture);
    }

    public EglBase10Impl(EglConnection eglConnection) {
        this.eglConnection = eglConnection;
        eglConnection.retain();
    }

    @Override // org.webrtc.EglBase
    public void swapBuffers(long j10) {
        swapBuffers();
    }
}
