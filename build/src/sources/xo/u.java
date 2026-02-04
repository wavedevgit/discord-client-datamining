package xo;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f53533a;

    public u(ActivityResultLauncher requestPermissionResultLauncher) {
        Intrinsics.checkNotNullParameter(requestPermissionResultLauncher, "requestPermissionResultLauncher");
        this.f53533a = requestPermissionResultLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f53533a;
    }
}
