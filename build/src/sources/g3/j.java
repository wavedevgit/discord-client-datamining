package g3;

import androidx.fragment.app.Fragment;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j extends l {

    /* renamed from: e  reason: collision with root package name */
    private final Fragment f23646e;

    /* renamed from: i  reason: collision with root package name */
    private final int f23647i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(Fragment fragment, Fragment targetFragment, int i10) {
        super(fragment, "Attempting to set target fragment " + targetFragment + " with request code " + i10 + " for fragment " + fragment);
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(targetFragment, "targetFragment");
        this.f23646e = targetFragment;
        this.f23647i = i10;
    }
}
