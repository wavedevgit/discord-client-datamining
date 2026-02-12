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
    final CameraManager f45851a;

    /* renamed from: b  reason: collision with root package name */
    final Object f45852b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final Map f45853a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        final Handler f45854b;

        a(Handler handler) {
            this.f45854b = handler;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(Context context, Object obj) {
        this.f45851a = (CameraManager) context.getSystemService("camera");
        this.f45852b = obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r0 h(Context context, Handler handler) {
        return new r0(context, new a(handler));
    }

    @Override // r.n0.b
    public void a(Executor executor, CameraManager.AvailabilityCallback availabilityCallback) {
        n0.a aVar;
        if (executor != null) {
            a aVar2 = (a) this.f45852b;
            if (availabilityCallback != null) {
                synchronized (aVar2.f45853a) {
                    try {
                        aVar = (n0.a) aVar2.f45853a.get(availabilityCallback);
                        if (aVar == null) {
                            aVar = new n0.a(executor, availabilityCallback);
                            aVar2.f45853a.put(availabilityCallback, aVar);
                        }
                    } finally {
                    }
                }
            } else {
                aVar = null;
            }
            this.f45851a.registerAvailabilityCallback(aVar, aVar2.f45854b);
            return;
        }
        throw new IllegalArgumentException("executor was null");
    }

    @Override // r.n0.b
    public CameraCharacteristics b(String str) {
        try {
            return this.f45851a.getCameraCharacteristics(str);
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
            this.f45851a.openCamera(str, new b0.b(executor, stateCallback), ((a) this.f45852b).f45854b);
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }

    @Override // r.n0.b
    public String[] e() {
        try {
            return this.f45851a.getCameraIdList();
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }

    @Override // r.n0.b
    public void f(CameraManager.AvailabilityCallback availabilityCallback) {
        n0.a aVar;
        if (availabilityCallback != null) {
            a aVar2 = (a) this.f45852b;
            synchronized (aVar2.f45853a) {
                aVar = (n0.a) aVar2.f45853a.remove(availabilityCallback);
            }
        } else {
            aVar = null;
        }
        if (aVar != null) {
            aVar.d();
        }
        this.f45851a.unregisterAvailabilityCallback(aVar);
    }
}
