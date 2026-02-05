package g3;

import androidx.fragment.app.Fragment;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k extends m {

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23648e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(Fragment fragment, boolean z10) {
        super(fragment, "Attempting to set user visible hint to " + z10 + " for fragment " + fragment);
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        this.f23648e = z10;
    }
}
