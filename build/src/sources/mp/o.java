package mp;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f37151a;

    public o(ActivityResultLauncher openDocumentResultLauncher) {
        Intrinsics.checkNotNullParameter(openDocumentResultLauncher, "openDocumentResultLauncher");
        this.f37151a = openDocumentResultLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f37151a;
    }
}
