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
    private final b f45835a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f45836b = new ArrayMap(4);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends CameraManager.AvailabilityCallback {

        /* renamed from: a  reason: collision with root package name */
        private final Executor f45837a;

        /* renamed from: b  reason: collision with root package name */
        final CameraManager.AvailabilityCallback f45838b;

        /* renamed from: c  reason: collision with root package name */
        private final Object f45839c = new Object();

        /* renamed from: d  reason: collision with root package name */
        private boolean f45840d = false;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Executor executor, CameraManager.AvailabilityCallback availabilityCallback) {
            this.f45837a = executor;
            this.f45838b = availabilityCallback;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void d() {
            synchronized (this.f45839c) {
                this.f45840d = true;
            }
        }

        @Override // android.hardware.camera2.CameraManager.AvailabilityCallback
        public void onCameraAccessPrioritiesChanged() {
            synchronized (this.f45839c) {
                try {
                    if (!this.f45840d) {
                        this.f45837a.execute(new Runnable() { // from class: r.l0
                            @Override // java.lang.Runnable
                            public final void run() {
                                e.a(n0.a.this.f45838b);
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
            synchronized (this.f45839c) {
                try {
                    if (!this.f45840d) {
                        this.f45837a.execute(new Runnable() { // from class: r.k0
                            @Override // java.lang.Runnable
                            public final void run() {
                                n0.a.this.f45838b.onCameraAvailable(str);
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
            synchronized (this.f45839c) {
                try {
                    if (!this.f45840d) {
                        this.f45837a.execute(new Runnable() { // from class: r.m0
                            @Override // java.lang.Runnable
                            public final void run() {
                                n0.a.this.f45838b.onCameraUnavailable(str);
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
        this.f45835a = bVar;
    }

    public static n0 a(Context context) {
        return b(context, b0.l.a());
    }

    public static n0 b(Context context, Handler handler) {
        return new n0(b.g(context, handler));
    }

    public a0 c(String str) {
        a0 a0Var;
        synchronized (this.f45836b) {
            a0Var = (a0) this.f45836b.get(str);
            if (a0Var == null) {
                try {
                    a0Var = a0.e(this.f45835a.b(str), str);
                    this.f45836b.put(str, a0Var);
                } catch (AssertionError e10) {
                    throw new f(10002, e10.getMessage(), e10);
                }
            }
        }
        return a0Var;
    }

    public String[] d() {
        return this.f45835a.e();
    }

    public Set e() {
        return this.f45835a.c();
    }

    public void f(String str, Executor executor, CameraDevice.StateCallback stateCallback) {
        this.f45835a.d(str, executor, stateCallback);
    }

    public void g(Executor executor, CameraManager.AvailabilityCallback availabilityCallback) {
        this.f45835a.a(executor, availabilityCallback);
    }

    public void h(CameraManager.AvailabilityCallback availabilityCallback) {
        this.f45835a.f(availabilityCallback);
    }
}
