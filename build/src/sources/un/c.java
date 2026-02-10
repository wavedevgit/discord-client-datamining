package un;

import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final FragmentTransaction a(FragmentManager fragmentManager) {
        Intrinsics.checkNotNullParameter(fragmentManager, "<this>");
        FragmentTransaction v10 = fragmentManager.s().v(true);
        Intrinsics.checkNotNullExpressionValue(v10, "setReorderingAllowed(...)");
        return v10;
    }
}
