package h0;

import androidx.camera.core.internal.compat.quirk.CaptureFailedRetryQuirk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final CaptureFailedRetryQuirk f24834a = (CaptureFailedRetryQuirk) androidx.camera.core.internal.compat.quirk.a.b(CaptureFailedRetryQuirk.class);

    public int a() {
        CaptureFailedRetryQuirk captureFailedRetryQuirk = this.f24834a;
        if (captureFailedRetryQuirk == null) {
            return 0;
        }
        return captureFailedRetryQuirk.c();
    }
}
