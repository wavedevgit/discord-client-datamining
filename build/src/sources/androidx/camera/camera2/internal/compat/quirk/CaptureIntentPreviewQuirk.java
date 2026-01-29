package androidx.camera.camera2.internal.compat.quirk;

import a0.d2;
import a0.y1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface CaptureIntentPreviewQuirk extends y1 {
    static boolean b(d2 d2Var) {
        for (CaptureIntentPreviewQuirk captureIntentPreviewQuirk : d2Var.c(CaptureIntentPreviewQuirk.class)) {
            if (captureIntentPreviewQuirk.a()) {
                return true;
            }
        }
        return false;
    }

    default boolean a() {
        return true;
    }
}
