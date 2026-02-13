package qp;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f46119a;

    public g(ActivityResultLauncher passportNfcReaderLauncher) {
        Intrinsics.checkNotNullParameter(passportNfcReaderLauncher, "passportNfcReaderLauncher");
        this.f46119a = passportNfcReaderLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f46119a;
    }
}
