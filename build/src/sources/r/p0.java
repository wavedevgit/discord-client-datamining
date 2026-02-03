package r;

import android.content.Context;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraDevice;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p0 extends o0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(Context context) {
        super(context);
    }

    @Override // r.o0, r.r0, r.n0.b
    public CameraCharacteristics b(String str) {
        try {
            return this.f47974a.getCameraCharacteristics(str);
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }

    @Override // r.o0, r.r0, r.n0.b
    public void d(String str, Executor executor, CameraDevice.StateCallback stateCallback) {
        try {
            this.f47974a.openCamera(str, executor, stateCallback);
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }
}
