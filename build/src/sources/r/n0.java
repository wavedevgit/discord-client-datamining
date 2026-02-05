package r;

import android.content.Context;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CameraManager;
import android.os.Build;
import android.os.Handler;
import android.util.ArrayMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executor;
import r.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n0 {

    /* renamed from: a  reason: collision with root package name */
    private final b f48275a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f48276b = new ArrayMap(4);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends CameraManager.AvailabilityCallback {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f48277a;

        /* renamed from: b  reason: collision with root package name */
        final CameraManager.AvailabilityCallback f48278b;

        /* renamed from: c  reason: collision with root package name */
        private final Object f48279c = new Object();

        /* renamed from: d  reason: collision with root package name */
        private boolean f48280d = false;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Executor executor, CameraManager.AvailabilityCallback availabilityCallback) {
            this.f48277a = executor;
            this.f48278b = availabilityCallback;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void d() {
            synchronized (this.f48279c) {
                this.f48280d = true;
            }
        }

        @Override // android.hardware.camera2.CameraManager.AvailabilityCallback
        public void onCameraAccessPrioritiesChanged() {
            synchronized (this.f48279c) {
                try {
                    if (!this.f48280d) {
                        this.f48277a.execute(new Runnable() { // from class: r.l0
                            @Override // java.lang.Runnable
                            public final void run() {
                                e.a(n0.a.this.f48278b);
                            }
                        });
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // android.hardware.camera2.CameraManager.AvailabilityCallback
        public void onCameraAvailable(final String str) {
            synchronized (this.f48279c) {
                try {
                    if (!this.f48280d) {
                        this.f48277a.execute(new Runnable() { // from class: r.k0
                            @Override // java.lang.Runnable
                            public final void run() {
                                n0.a.this.f48278b.onCameraAvailable(str);
                            }
                        });
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // android.hardware.camera2.CameraManager.AvailabilityCallback
        public void onCameraUnavailable(final String str) {
            synchronized (this.f48279c) {
                try {
                    if (!this.f48280d) {
                        this.f48277a.execute(new Runnable() { // from class: r.m0
                            @Override // java.lang.Runnable
                            public final void run() {
                                n0.a.this.f48278b.onCameraUnavailable(str);
                            }
                        });
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        static b g(Context context, Handler handler) {
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 30) {
                return new q0(context);
            }
            if (i10 >= 29) {
                return new p0(context);
            }
            if (i10 >= 28) {
                return o0.i(context);
            }
            return r0.h(context, handler);
        }

        void a(Executor executor, CameraManager.AvailabilityCallback availabilityCallback);

        CameraCharacteristics b(String str);

        Set c();

        void d(String str, Executor executor, CameraDevice.StateCallback stateCallback);

        String[] e();

        void f(CameraManager.AvailabilityCallback availabilityCallback);
    }

    private n0(b bVar) {
        this.f48275a = bVar;
    }

    public static n0 a(Context context) {
        return b(context, b0.l.a());
    }

    public static n0 b(Context context, Handler handler) {
        return new n0(b.g(context, handler));
    }

    public a0 c(String str) {
        a0 a0Var;
        synchronized (this.f48276b) {
            a0Var = (a0) this.f48276b.get(str);
            if (a0Var == null) {
                try {
                    a0Var = a0.e(this.f48275a.b(str), str);
                    this.f48276b.put(str, a0Var);
                } catch (AssertionError e10) {
                    throw new f(10002, e10.getMessage(), e10);
                }
            }
        }
        return a0Var;
    }

    public String[] d() {
        return this.f48275a.e();
    }

    public Set e() {
        return this.f48275a.c();
    }

    public void f(String str, Executor executor, CameraDevice.StateCallback stateCallback) {
        this.f48275a.d(str, executor, stateCallback);
    }

    public void g(Executor executor, CameraManager.AvailabilityCallback availabilityCallback) {
        this.f48275a.a(executor, availabilityCallback);
    }

    public void h(CameraManager.AvailabilityCallback availabilityCallback) {
        this.f48275a.f(availabilityCallback);
    }
}
