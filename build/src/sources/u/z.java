package u;

import a0.d2;
import android.hardware.camera2.CaptureRequest;
import androidx.camera.camera2.internal.compat.quirk.CaptureIntentPreviewQuirk;
import androidx.camera.camera2.internal.compat.quirk.ImageCaptureFailedForVideoSnapshotQuirk;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f50333a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f50334b;

    public z(d2 d2Var) {
        this.f50333a = CaptureIntentPreviewQuirk.b(d2Var);
        this.f50334b = d2Var.a(ImageCaptureFailedForVideoSnapshotQuirk.class);
    }

    public Map a(int i10) {
        if (i10 == 3 && this.f50333a) {
            HashMap hashMap = new HashMap();
            hashMap.put(CaptureRequest.CONTROL_CAPTURE_INTENT, 1);
            return Collections.unmodifiableMap(hashMap);
        } else if (i10 == 4 && this.f50334b) {
            HashMap hashMap2 = new HashMap();
            hashMap2.put(CaptureRequest.CONTROL_CAPTURE_INTENT, 2);
            return Collections.unmodifiableMap(hashMap2);
        } else {
            return Collections.EMPTY_MAP;
        }
    }
}
