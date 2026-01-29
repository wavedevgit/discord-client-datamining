package u0;

import java.util.ConcurrentModificationException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {
    public static final void a(b bVar, int i10) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        bVar.i(new int[i10]);
        bVar.h(new Object[i10]);
    }

    public static final int b(b bVar, int i10) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        try {
            return v0.a.a(bVar.d(), bVar.f(), i10);
        } catch (IndexOutOfBoundsException unused) {
            throw new ConcurrentModificationException();
        }
    }

    public static final int c(b bVar, Object obj, int i10) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        int f10 = bVar.f();
        if (f10 == 0) {
            return -1;
        }
        int b10 = b(bVar, i10);
        if (b10 < 0 || Intrinsics.areEqual(obj, bVar.c()[b10])) {
            return b10;
        }
        int i11 = b10 + 1;
        while (i11 < f10 && bVar.d()[i11] == i10) {
            if (Intrinsics.areEqual(obj, bVar.c()[i11])) {
                return i11;
            }
            i11++;
        }
        for (int i12 = b10 - 1; i12 >= 0 && bVar.d()[i12] == i10; i12--) {
            if (Intrinsics.areEqual(obj, bVar.c()[i12])) {
                return i12;
            }
        }
        return ~i11;
    }

    public static final int d(b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        return c(bVar, null, 0);
    }
}
