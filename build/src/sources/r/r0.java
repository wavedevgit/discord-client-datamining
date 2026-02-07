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
    final CameraManager f48422a;

    /* renamed from: b  reason: collision with root package name */
    final Object f48423b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final Map f48424a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        final Handler f48425b;

        a(Handler handler) {
            this.f48425b = handler;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(Context context, Object obj) {
        this.f48422a = (CameraManager) context.getSystemService("camera");
        this.f48423b = obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r0 h(Context context, Handler handler) {
        return new r0(context, new a(handler));
    }

    @Override // r.n0.b
    public void a(Executor executor, CameraManager.AvailabilityCallback availabilityCallback) {
        n0.a aVar;
        if (executor != null) {
            a aVar2 = (a) this.f48423b;
            if (availabilityCallback != null) {
                synchronized (aVar2.f48424a) {
                    try {
                        aVar = (n0.a) aVar2.f48424a.get(availabilityCallback);
                        if (aVar == null) {
                            aVar = new n0.a(executor, availabilityCallback);
                            aVar2.f48424a.put(availabilityCallback, aVar);
                        }
                    } finally {
                    }
                }
            } else {
                aVar = null;
            }
            this.f48422a.registerAvailabilityCallback(aVar, aVar2.f48425b);
            return;
        }
        throw new IllegalArgumentException("executor was null");
    }

    @Override // r.n0.b
    public CameraCharacteristics b(String str) {
        try {
            return this.f48422a.getCameraCharacteristics(str);
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
            this.f48422a.openCamera(str, new b0.b(executor, stateCallback), ((a) this.f48423b).f48425b);
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }

    @Override // r.n0.b
    public String[] e() {
        try {
            return this.f48422a.getCameraIdList();
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }

    @Override // r.n0.b
    public void f(CameraManager.AvailabilityCallback availabilityCallback) {
        n0.a aVar;
        if (availabilityCallback != null) {
            a aVar2 = (a) this.f48423b;
            synchronized (aVar2.f48424a) {
                aVar = (n0.a) aVar2.f48424a.remove(availabilityCallback);
            }
        } else {
            aVar = null;
        }
        if (aVar != null) {
            aVar.d();
        }
        this.f48422a.unregisterAvailabilityCallback(aVar);
    }
}
