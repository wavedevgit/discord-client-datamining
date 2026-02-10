package dp;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f20940a;

    public o(ActivityResultLauncher openDocumentResultLauncher) {
        Intrinsics.checkNotNullParameter(openDocumentResultLauncher, "openDocumentResultLauncher");
        this.f20940a = openDocumentResultLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f20940a;
    }
}
