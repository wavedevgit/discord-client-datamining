package uo;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f50525a;

    public u(ActivityResultLauncher requestPermissionResultLauncher) {
        Intrinsics.checkNotNullParameter(requestPermissionResultLauncher, "requestPermissionResultLauncher");
        this.f50525a = requestPermissionResultLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f50525a;
    }
}
