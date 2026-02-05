package ap;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f5927a;

    public b(ActivityResultLauncher customTabsLauncher) {
        Intrinsics.checkNotNullParameter(customTabsLauncher, "customTabsLauncher");
        this.f5927a = customTabsLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f5927a;
    }
}
