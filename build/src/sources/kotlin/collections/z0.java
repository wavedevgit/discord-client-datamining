package kotlin.collections;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class z0 extends y0 {
    public static Set d() {
        return h0.f33120d;
    }

    public static HashSet e(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return (HashSet) n.J0(elements, new HashSet(q0.e(elements.length)));
    }

    public static LinkedHashSet f(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return (LinkedHashSet) n.J0(elements, new LinkedHashSet(q0.e(elements.length)));
    }

    public static Set g(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return (Set) n.J0(elements, new LinkedHashSet(q0.e(elements.length)));
    }

    public static final Set h(Set set) {
        Intrinsics.checkNotNullParameter(set, "<this>");
        int size = set.size();
        if (size != 0) {
            if (size != 1) {
                return set;
            }
            return y0.c(set.iterator().next());
        }
        return d();
    }

    public static Set i(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return n.f1(elements);
    }
}
