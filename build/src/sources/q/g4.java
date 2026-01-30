package q;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import android.os.Handler;
import android.view.Surface;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface g4 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        Executor a();

        ListenableFuture b(List list, long j10);

        ListenableFuture i(CameraDevice cameraDevice, s.p pVar, List list);

        s.p l(int i10, List list, c cVar);

        boolean stop();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f46381a;

        /* renamed from: b  reason: collision with root package name */
        private final ScheduledExecutorService f46382b;

        /* renamed from: c  reason: collision with root package name */
        private final Handler f46383c;

        /* renamed from: d  reason: collision with root package name */
        private final c3 f46384d;

        /* renamed from: e  reason: collision with root package name */
        private final a0.d2 f46385e;

        /* renamed from: f  reason: collision with root package name */
        private final a0.d2 f46386f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(Executor executor, ScheduledExecutorService scheduledExecutorService, Handler handler, c3 c3Var, a0.d2 d2Var, a0.d2 d2Var2) {
            this.f46381a = executor;
            this.f46382b = scheduledExecutorService;
            this.f46383c = handler;
            this.f46384d = c3Var;
            this.f46385e = d2Var;
            this.f46386f = d2Var2;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a a() {
            return new q4(this.f46385e, this.f46386f, this.f46384d, this.f46381a, this.f46382b, this.f46383c);
        }
    }

    c c();

    void close();

    void d();

    void e(int i10);

    void f();

    CameraDevice g();

    int h(CaptureRequest captureRequest, CameraCaptureSession.CaptureCallback captureCallback);

    int j(List list, CameraCaptureSession.CaptureCallback captureCallback);

    r.g k();

    void m();

    ListenableFuture n();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class c {
        public abstract void r(g4 g4Var);

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract void s(g4 g4Var);

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract void t(g4 g4Var);

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract void u(g4 g4Var);

        /* JADX INFO: Access modifiers changed from: package-private */
        public void o(g4 g4Var) {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void p(g4 g4Var) {
        }

        public void q(g4 g4Var) {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void v(g4 g4Var, Surface surface) {
        }
    }
}
