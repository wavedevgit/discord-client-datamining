package kotlin.collections;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class z extends y {
    public static List S(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        return new v0(list);
    }

    public static List T(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        return new u0(list);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int U(List list, int i10) {
        if (i10 >= 0 && i10 <= t.n(list)) {
            return t.n(list) - i10;
        }
        throw new IndexOutOfBoundsException("Element index " + i10 + " must be in range [" + new IntRange(0, t.n(list)) + "].");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int V(List list, int i10) {
        return t.n(list) - i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int W(List list, int i10) {
        if (i10 >= 0 && i10 <= list.size()) {
            return list.size() - i10;
        }
        throw new IndexOutOfBoundsException("Position index " + i10 + " must be in range [" + new IntRange(0, list.size()) + "].");
    }
}
