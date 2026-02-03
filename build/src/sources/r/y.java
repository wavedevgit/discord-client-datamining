package r;

import android.hardware.camera2.CameraCharacteristics;
import r.a0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class y implements a0.a {

    /* renamed from: a  reason: collision with root package name */
    protected final CameraCharacteristics f47993a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(CameraCharacteristics cameraCharacteristics) {
        this.f47993a = cameraCharacteristics;
    }

    @Override // r.a0.a
    public Object a(CameraCharacteristics.Key key) {
        return this.f47993a.get(key);
    }
}
