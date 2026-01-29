package u0;

import androidx.collection.SparseArrayCompat;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class u {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f50028a = new Object();

    public static final Object c(SparseArrayCompat sparseArrayCompat, int i10) {
        Object obj;
        Intrinsics.checkNotNullParameter(sparseArrayCompat, "<this>");
        int a10 = v0.a.a(sparseArrayCompat.f2180e, sparseArrayCompat.f2182o, i10);
        if (a10 >= 0 && (obj = sparseArrayCompat.f2181i[a10]) != f50028a) {
            return obj;
        }
        return null;
    }

    public static final Object d(SparseArrayCompat sparseArrayCompat, int i10, Object obj) {
        Object obj2;
        Intrinsics.checkNotNullParameter(sparseArrayCompat, "<this>");
        int a10 = v0.a.a(sparseArrayCompat.f2180e, sparseArrayCompat.f2182o, i10);
        if (a10 >= 0 && (obj2 = sparseArrayCompat.f2181i[a10]) != f50028a) {
            return obj2;
        }
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(SparseArrayCompat sparseArrayCompat) {
        int i10 = sparseArrayCompat.f2182o;
        int[] iArr = sparseArrayCompat.f2180e;
        Object[] objArr = sparseArrayCompat.f2181i;
        int i11 = 0;
        for (int i12 = 0; i12 < i10; i12++) {
            Object obj = objArr[i12];
            if (obj != f50028a) {
                if (i12 != i11) {
                    iArr[i11] = iArr[i12];
                    objArr[i11] = obj;
                    objArr[i12] = null;
                }
                i11++;
            }
        }
        sparseArrayCompat.f2179d = false;
        sparseArrayCompat.f2182o = i11;
    }
}
