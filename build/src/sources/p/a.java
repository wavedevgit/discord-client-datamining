package p;

import a0.q1;
import a0.r0;
import a0.r1;
import a0.w1;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CaptureRequest;
import w.j;
import x.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends j {
    public static final r0.a J = r0.a.a("camera2.captureRequest.templateType", Integer.TYPE);
    public static final r0.a K = r0.a.a("camera2.cameraCaptureSession.streamUseCase", Long.TYPE);
    public static final r0.a L = r0.a.a("camera2.cameraDevice.stateCallback", CameraDevice.StateCallback.class);
    public static final r0.a M = r0.a.a("camera2.cameraCaptureSession.stateCallback", CameraCaptureSession.StateCallback.class);
    public static final r0.a N = r0.a.a("camera2.cameraCaptureSession.captureCallback", CameraCaptureSession.CaptureCallback.class);
    public static final r0.a O = r0.a.a("camera2.captureRequest.tag", Object.class);
    public static final r0.a P = r0.a.a("camera2.cameraCaptureSession.physicalCameraId", String.class);

    /* renamed from: p.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0555a implements a0 {

        /* renamed from: a  reason: collision with root package name */
        private final r1 f44828a = r1.Z();

        @Override // x.a0
        public q1 a() {
            return this.f44828a;
        }

        public a c() {
            return new a(w1.Y(this.f44828a));
        }

        public C0555a d(r0 r0Var) {
            e(r0Var, r0.c.OPTIONAL);
            return this;
        }

        public C0555a e(r0 r0Var, r0.c cVar) {
            for (r0.a aVar : r0Var.b()) {
                this.f44828a.K(aVar, cVar, r0Var.a(aVar));
            }
            return this;
        }

        public C0555a f(CaptureRequest.Key key, Object obj) {
            this.f44828a.V(a.W(key), obj);
            return this;
        }

        public C0555a g(CaptureRequest.Key key, Object obj, r0.c cVar) {
            this.f44828a.K(a.W(key), cVar, obj);
            return this;
        }
    }

    public a(r0 r0Var) {
        super(r0Var);
    }

    public static r0.a W(CaptureRequest.Key key) {
        return r0.a.b("camera2.captureRequest.option." + key.getName(), Object.class, key);
    }

    public j X() {
        return j.a.e(getConfig()).d();
    }

    public int Y(int i10) {
        return ((Integer) getConfig().e(J, Integer.valueOf(i10))).intValue();
    }

    public CameraDevice.StateCallback Z(CameraDevice.StateCallback stateCallback) {
        return (CameraDevice.StateCallback) getConfig().e(L, stateCallback);
    }

    public String a0(String str) {
        return (String) getConfig().e(P, str);
    }

    public CameraCaptureSession.CaptureCallback b0(CameraCaptureSession.CaptureCallback captureCallback) {
        return (CameraCaptureSession.CaptureCallback) getConfig().e(N, captureCallback);
    }

    public CameraCaptureSession.StateCallback c0(CameraCaptureSession.StateCallback stateCallback) {
        return (CameraCaptureSession.StateCallback) getConfig().e(M, stateCallback);
    }

    public long d0(long j10) {
        return ((Long) getConfig().e(K, Long.valueOf(j10))).longValue();
    }
}
