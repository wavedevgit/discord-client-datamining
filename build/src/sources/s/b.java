package s;

import a0.r0;
import android.hardware.camera2.CaptureRequest;
import android.os.Build;
import kotlin.jvm.internal.Intrinsics;
import p.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f48721a = new b();

    private b() {
    }

    public static final void a(a.C0558a options, r0.c priority) {
        CaptureRequest.Key key;
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(priority, "priority");
        if (Build.VERSION.SDK_INT >= 34) {
            key = CaptureRequest.CONTROL_SETTINGS_OVERRIDE;
            options.g(key, 1, priority);
        }
    }
}
