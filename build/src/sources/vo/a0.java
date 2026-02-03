package vo;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f51470a;

    public a0(ActivityResultLauncher resolvableApiLauncher) {
        Intrinsics.checkNotNullParameter(resolvableApiLauncher, "resolvableApiLauncher");
        this.f51470a = resolvableApiLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f51470a;
    }
}
