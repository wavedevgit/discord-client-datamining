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
        private final Executor f45898a;

        /* renamed from: b  reason: collision with root package name */
        private final ScheduledExecutorService f45899b;

        /* renamed from: c  reason: collision with root package name */
        private final Handler f45900c;

        /* renamed from: d  reason: collision with root package name */
        private final c3 f45901d;

        /* renamed from: e  reason: collision with root package name */
        private final a0.d2 f45902e;

        /* renamed from: f  reason: collision with root package name */
        private final a0.d2 f45903f;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(Executor executor, ScheduledExecutorService scheduledExecutorService, Handler handler, c3 c3Var, a0.d2 d2Var, a0.d2 d2Var2) {
            this.f45898a = executor;
            this.f45899b = scheduledExecutorService;
            this.f45900c = handler;
            this.f45901d = c3Var;
            this.f45902e = d2Var;
            this.f45903f = d2Var2;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a a() {
            return new q4(this.f45902e, this.f45903f, this.f45901d, this.f45898a, this.f45899b, this.f45900c);
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
