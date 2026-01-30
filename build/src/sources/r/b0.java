package r;

import android.hardware.camera2.CameraDevice;
import android.os.Build;
import android.os.Handler;
import java.util.concurrent.Executor;
import r.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final a f47699a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface a {
        void a(s.p pVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends CameraDevice.StateCallback {

        /* renamed from: a  reason: collision with root package name */
        final CameraDevice.StateCallback f47700a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f47701b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(Executor executor, CameraDevice.StateCallback stateCallback) {
            this.f47701b = executor;
            this.f47700a = stateCallback;
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onClosed(final CameraDevice cameraDevice) {
            this.f47701b.execute(new Runnable() { // from class: r.c0
                @Override // java.lang.Runnable
                public final void run() {
                    b0.b.this.f47700a.onClosed(cameraDevice);
                }
            });
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onDisconnected(final CameraDevice cameraDevice) {
            this.f47701b.execute(new Runnable() { // from class: r.e0
                @Override // java.lang.Runnable
                public final void run() {
                    b0.b.this.f47700a.onDisconnected(cameraDevice);
                }
            });
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onError(final CameraDevice cameraDevice, final int i10) {
            this.f47701b.execute(new Runnable() { // from class: r.d0
                @Override // java.lang.Runnable
                public final void run() {
                    b0.b.this.f47700a.onError(cameraDevice, i10);
                }
            });
        }

        @Override // android.hardware.camera2.CameraDevice.StateCallback
        public void onOpened(final CameraDevice cameraDevice) {
            this.f47701b.execute(new Runnable() { // from class: r.f0
                @Override // java.lang.Runnable
                public final void run() {
                    b0.b.this.f47700a.onOpened(cameraDevice);
                }
            });
        }
    }

    private b0(CameraDevice cameraDevice, Handler handler) {
        if (Build.VERSION.SDK_INT >= 28) {
            this.f47699a = new i0(cameraDevice);
        } else {
            this.f47699a = h0.e(cameraDevice, handler);
        }
    }

    public static b0 b(CameraDevice cameraDevice, Handler handler) {
        return new b0(cameraDevice, handler);
    }

    public void a(s.p pVar) {
        this.f47699a.a(pVar);
    }
}
