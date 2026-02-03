package ku;

import ju.i0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {
    public static final int a(int[] iArr, int i10, int i11, int i12) {
        Intrinsics.checkNotNullParameter(iArr, "<this>");
        int i13 = i12 - 1;
        while (i11 <= i13) {
            int i14 = (i11 + i13) >>> 1;
            int i15 = iArr[i14];
            if (i15 < i10) {
                i11 = i14 + 1;
            } else if (i15 > i10) {
                i13 = i14 - 1;
            } else {
                return i14;
            }
        }
        return (-i11) - 1;
    }

    public static final int b(i0 i0Var, int i10) {
        Intrinsics.checkNotNullParameter(i0Var, "<this>");
        int a10 = a(i0Var.P(), i10 + 1, 0, i0Var.Q().length);
        if (a10 >= 0) {
            return a10;
        }
        return ~a10;
    }
}
