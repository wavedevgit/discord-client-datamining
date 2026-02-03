package g3;

import androidx.fragment.app.Fragment;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class o extends m {

    /* renamed from: e  reason: collision with root package name */
    private final Fragment f24952e;

    /* renamed from: i  reason: collision with root package name */
    private final int f24953i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o(Fragment fragment, Fragment expectedParentFragment, int i10) {
        super(fragment, "Attempting to nest fragment " + fragment + " within the view of parent fragment " + expectedParentFragment + " via container with ID " + i10 + " without using parent's childFragmentManager");
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(expectedParentFragment, "expectedParentFragment");
        this.f24952e = expectedParentFragment;
        this.f24953i = i10;
    }
}
