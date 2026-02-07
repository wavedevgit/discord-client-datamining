package r;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureFailure;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.CaptureResult;
import android.hardware.camera2.TotalCaptureResult;
import android.os.Build;
import android.os.Handler;
import android.view.Surface;
import java.util.List;
import java.util.concurrent.Executor;
import r.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final a f48365a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface a {
        CameraCaptureSession a();

        int b(List list, Executor executor, CameraCaptureSession.CaptureCallback captureCallback);

        int c(CaptureRequest captureRequest, Executor executor, CameraCaptureSession.CaptureCallback captureCallback);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends CameraCaptureSession.CaptureCallback {

        /* renamed from: a  reason: collision with root package name */
        final CameraCaptureSession.CaptureCallback f48366a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f48367b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(Executor executor, CameraCaptureSession.CaptureCallback captureCallback) {
            this.f48367b = executor;
            this.f48366a = captureCallback;
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureBufferLost(final CameraCaptureSession cameraCaptureSession, final CaptureRequest captureRequest, final Surface surface, final long j10) {
            this.f48367b.execute(new Runnable() { // from class: r.m
                @Override // java.lang.Runnable
                public final void run() {
                    c.a(g.b.this.f48366a, cameraCaptureSession, captureRequest, surface, j10);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureCompleted(final CameraCaptureSession cameraCaptureSession, final CaptureRequest captureRequest, final TotalCaptureResult totalCaptureResult) {
            this.f48367b.execute(new Runnable() { // from class: r.i
                @Override // java.lang.Runnable
                public final void run() {
                    g.b.this.f48366a.onCaptureCompleted(cameraCaptureSession, captureRequest, totalCaptureResult);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureFailed(final CameraCaptureSession cameraCaptureSession, final CaptureRequest captureRequest, final CaptureFailure captureFailure) {
            this.f48367b.execute(new Runnable() { // from class: r.l
                @Override // java.lang.Runnable
                public final void run() {
                    g.b.this.f48366a.onCaptureFailed(cameraCaptureSession, captureRequest, captureFailure);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureProgressed(final CameraCaptureSession cameraCaptureSession, final CaptureRequest captureRequest, final CaptureResult captureResult) {
            this.f48367b.execute(new Runnable() { // from class: r.j
                @Override // java.lang.Runnable
                public final void run() {
                    g.b.this.f48366a.onCaptureProgressed(cameraCaptureSession, captureRequest, captureResult);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureSequenceAborted(final CameraCaptureSession cameraCaptureSession, final int i10) {
            this.f48367b.execute(new Runnable() { // from class: r.n
                @Override // java.lang.Runnable
                public final void run() {
                    g.b.this.f48366a.onCaptureSequenceAborted(cameraCaptureSession, i10);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureSequenceCompleted(final CameraCaptureSession cameraCaptureSession, final int i10, final long j10) {
            this.f48367b.execute(new Runnable() { // from class: r.k
                @Override // java.lang.Runnable
                public final void run() {
                    g.b.this.f48366a.onCaptureSequenceCompleted(cameraCaptureSession, i10, j10);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureStarted(final CameraCaptureSession cameraCaptureSession, final CaptureRequest captureRequest, final long j10, final long j11) {
            this.f48367b.execute(new Runnable() { // from class: r.h
                @Override // java.lang.Runnable
                public final void run() {
                    g.b.this.f48366a.onCaptureStarted(cameraCaptureSession, captureRequest, j10, j11);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends CameraCaptureSession.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        final CameraCaptureSession.StateCallback f48368a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f48369b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(Executor executor, CameraCaptureSession.StateCallback stateCallback) {
            this.f48369b = executor;
            this.f48368a = stateCallback;
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onActive(final CameraCaptureSession cameraCaptureSession) {
            this.f48369b.execute(new Runnable() { // from class: r.o
                @Override // java.lang.Runnable
                public final void run() {
                    g.c.this.f48368a.onActive(cameraCaptureSession);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onCaptureQueueEmpty(final CameraCaptureSession cameraCaptureSession) {
            this.f48369b.execute(new Runnable() { // from class: r.r
                @Override // java.lang.Runnable
                public final void run() {
                    d.a(g.c.this.f48368a, cameraCaptureSession);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onClosed(final CameraCaptureSession cameraCaptureSession) {
            this.f48369b.execute(new Runnable() { // from class: r.p
                @Override // java.lang.Runnable
                public final void run() {
                    g.c.this.f48368a.onClosed(cameraCaptureSession);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onConfigureFailed(final CameraCaptureSession cameraCaptureSession) {
            this.f48369b.execute(new Runnable() { // from class: r.u
                @Override // java.lang.Runnable
                public final void run() {
                    g.c.this.f48368a.onConfigureFailed(cameraCaptureSession);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onConfigured(final CameraCaptureSession cameraCaptureSession) {
            this.f48369b.execute(new Runnable() { // from class: r.s
                @Override // java.lang.Runnable
                public final void run() {
                    g.c.this.f48368a.onConfigured(cameraCaptureSession);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onReady(final CameraCaptureSession cameraCaptureSession) {
            this.f48369b.execute(new Runnable() { // from class: r.t
                @Override // java.lang.Runnable
                public final void run() {
                    g.c.this.f48368a.onReady(cameraCaptureSession);
                }
            });
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onSurfacePrepared(final CameraCaptureSession cameraCaptureSession, final Surface surface) {
            this.f48369b.execute(new Runnable() { // from class: r.q
                @Override // java.lang.Runnable
                public final void run() {
                    b.a(g.c.this.f48368a, cameraCaptureSession, surface);
                }
            });
        }
    }

    private g(CameraCaptureSession cameraCaptureSession, Handler handler) {
        if (Build.VERSION.SDK_INT >= 28) {
            this.f48365a = new v(cameraCaptureSession);
        } else {
            this.f48365a = w.d(cameraCaptureSession, handler);
        }
    }

    public static g d(CameraCaptureSession cameraCaptureSession, Handler handler) {
        return new g(cameraCaptureSession, handler);
    }

    public int a(List list, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) {
        return this.f48365a.b(list, executor, captureCallback);
    }

    public int b(CaptureRequest captureRequest, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) {
        return this.f48365a.c(captureRequest, executor, captureCallback);
    }

    public CameraCaptureSession c() {
        return this.f48365a.a();
    }
}
