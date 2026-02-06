package r;

import android.content.Context;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CameraManager;
import android.os.Handler;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executor;
import r.b0;
import r.n0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r0 implements n0.b {

    /* renamed from: a  reason: collision with root package name */
    final CameraManager f48374a;

    /* renamed from: b  reason: collision with root package name */
    final Object f48375b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final Map f48376a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        final Handler f48377b;

        a(Handler handler) {
            this.f48377b = handler;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(Context context, Object obj) {
        this.f48374a = (CameraManager) context.getSystemService("camera");
        this.f48375b = obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r0 h(Context context, Handler handler) {
        return new r0(context, new a(handler));
    }

    @Override // r.n0.b
    public void a(Executor executor, CameraManager.AvailabilityCallback availabilityCallback) {
        n0.a aVar;
        if (executor != null) {
            a aVar2 = (a) this.f48375b;
            if (availabilityCallback != null) {
                synchronized (aVar2.f48376a) {
                    try {
                        aVar = (n0.a) aVar2.f48376a.get(availabilityCallback);
                        if (aVar == null) {
                            aVar = new n0.a(executor, availabilityCallback);
                            aVar2.f48376a.put(availabilityCallback, aVar);
                        }
                    } finally {
                    }
                }
            } else {
                aVar = null;
            }
            this.f48374a.registerAvailabilityCallback(aVar, aVar2.f48377b);
            return;
        }
        throw new IllegalArgumentException("executor was null");
    }

    @Override // r.n0.b
    public CameraCharacteristics b(String str) {
        try {
            return this.f48374a.getCameraCharacteristics(str);
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }

    @Override // r.n0.b
    public Set c() {
        return Collections.EMPTY_SET;
    }

    @Override // r.n0.b
    public void d(String str, Executor executor, CameraDevice.StateCallback stateCallback) {
        b2.e.g(executor);
        b2.e.g(stateCallback);
        try {
            this.f48374a.openCamera(str, new b0.b(executor, stateCallback), ((a) this.f48375b).f48377b);
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }

    @Override // r.n0.b
    public String[] e() {
        try {
            return this.f48374a.getCameraIdList();
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }

    @Override // r.n0.b
    public void f(CameraManager.AvailabilityCallback availabilityCallback) {
        n0.a aVar;
        if (availabilityCallback != null) {
            a aVar2 = (a) this.f48375b;
            synchronized (aVar2.f48376a) {
                aVar = (n0.a) aVar2.f48376a.remove(availabilityCallback);
            }
        } else {
            aVar = null;
        }
        if (aVar != null) {
            aVar.d();
        }
        this.f48374a.unregisterAvailabilityCallback(aVar);
    }
}
