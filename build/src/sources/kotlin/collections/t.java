package kotlin.collections;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class t extends s {
    public static ArrayList g(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        if (elements.length == 0) {
            return new ArrayList();
        }
        return new ArrayList(new h(elements, true));
    }

    public static final Collection h(Object[] objArr) {
        Intrinsics.checkNotNullParameter(objArr, "<this>");
        return new h(objArr, false);
    }

    public static int i(List list, int i10, int i11, Function1 comparison) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        Intrinsics.checkNotNullParameter(comparison, "comparison");
        t(list.size(), i10, i11);
        int i12 = i11 - 1;
        while (i10 <= i12) {
            int i13 = (i10 + i12) >>> 1;
            int intValue = ((Number) comparison.invoke(list.get(i13))).intValue();
            if (intValue < 0) {
                i10 = i13 + 1;
            } else if (intValue > 0) {
                i12 = i13 - 1;
            } else {
                return i13;
            }
        }
        return -(i10 + 1);
    }

    public static final int j(List list, Comparable comparable, int i10, int i11) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        t(list.size(), i10, i11);
        int i12 = i11 - 1;
        while (i10 <= i12) {
            int i13 = (i10 + i12) >>> 1;
            int d10 = tr.a.d((Comparable) list.get(i13), comparable);
            if (d10 < 0) {
                i10 = i13 + 1;
            } else if (d10 > 0) {
                i12 = i13 - 1;
            } else {
                return i13;
            }
        }
        return -(i10 + 1);
    }

    public static /* synthetic */ int k(List list, Comparable comparable, int i10, int i11, int i12, Object obj) {
        if ((i12 & 2) != 0) {
            i10 = 0;
        }
        if ((i12 & 4) != 0) {
            i11 = list.size();
        }
        return j(list, comparable, i10, i11);
    }

    public static List l() {
        return f0.f32098d;
    }

    public static IntRange m(Collection collection) {
        Intrinsics.checkNotNullParameter(collection, "<this>");
        return new IntRange(0, collection.size() - 1);
    }

    public static int n(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        return list.size() - 1;
    }

    public static List o(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        if (elements.length > 0) {
            return l.e(elements);
        }
        return l();
    }

    public static List p(Object obj) {
        if (obj != null) {
            return s.e(obj);
        }
        return l();
    }

    public static List q(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        return n.R(elements);
    }

    public static List r(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        if (elements.length == 0) {
            return new ArrayList();
        }
        return new ArrayList(new h(elements, true));
    }

    public static final List s(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        int size = list.size();
        if (size != 0) {
            if (size != 1) {
                return list;
            }
            return s.e(list.get(0));
        }
        return l();
    }

    private static final void t(int i10, int i11, int i12) {
        if (i11 <= i12) {
            if (i11 >= 0) {
                if (i12 <= i10) {
                    return;
                }
                throw new IndexOutOfBoundsException("toIndex (" + i12 + ") is greater than size (" + i10 + ").");
            }
            throw new IndexOutOfBoundsException("fromIndex (" + i11 + ") is less than zero.");
        }
        throw new IllegalArgumentException("fromIndex (" + i11 + ") is greater than toIndex (" + i12 + ").");
    }

    public static void u() {
        throw new ArithmeticException("Count overflow has happened.");
    }

    public static void v() {
        throw new ArithmeticException("Index overflow has happened.");
    }
}
