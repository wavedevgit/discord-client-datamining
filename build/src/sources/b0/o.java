package b0;

import a0.k2;
import java.util.ArrayList;
import x.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class o {
    public static b0 a(k2 k2Var, b0 b0Var) {
        boolean z10;
        if (k2Var == null) {
            return b0Var;
        }
        b0.a aVar = new b0.a(b0Var);
        boolean z11 = true;
        if (!b0Var.c().isEmpty() && !b(k2Var, 1, 2)) {
            aVar.c(1);
            z10 = true;
        } else {
            z10 = false;
        }
        if (!b0Var.b().isEmpty() && !b(k2Var, 3)) {
            aVar.c(2);
            z10 = true;
        }
        if (!b0Var.d().isEmpty() && !b(k2Var, 4)) {
            aVar.c(4);
        } else {
            z11 = z10;
        }
        if (!z11) {
            return b0Var;
        }
        b0 b10 = aVar.b();
        if (b10.c().isEmpty() && b10.b().isEmpty() && b10.d().isEmpty()) {
            return null;
        }
        return aVar.b();
    }

    public static boolean b(k2 k2Var, int... iArr) {
        if (k2Var == null) {
            return true;
        }
        ArrayList arrayList = new ArrayList(iArr.length);
        for (int i10 : iArr) {
            arrayList.add(Integer.valueOf(i10));
        }
        return k2Var.a().containsAll(arrayList);
    }
}
