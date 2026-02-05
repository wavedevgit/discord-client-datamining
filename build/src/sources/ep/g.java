package ep;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f21695a;

    public g(ActivityResultLauncher passportNfcReaderLauncher) {
        Intrinsics.checkNotNullParameter(passportNfcReaderLauncher, "passportNfcReaderLauncher");
        this.f21695a = passportNfcReaderLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f21695a;
    }
}
