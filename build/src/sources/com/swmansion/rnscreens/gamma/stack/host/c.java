package com.swmansion.rnscreens.gamma.stack.host;

import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import java.util.Iterator;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {
    private final void a(FragmentTransaction fragmentTransaction, boolean z10) {
        if (z10) {
            fragmentTransaction.i();
        } else {
            fragmentTransaction.h();
        }
    }

    private final void b(FragmentTransaction fragmentTransaction, boolean z10) {
        if (z10) {
            fragmentTransaction.k();
        } else {
            fragmentTransaction.j();
        }
    }

    private final void c(FragmentTransaction fragmentTransaction, boolean z10, boolean z11) {
        if (z11) {
            b(fragmentTransaction, z10);
        } else {
            a(fragmentTransaction, z10);
        }
    }

    static /* synthetic */ void d(c cVar, FragmentTransaction fragmentTransaction, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z11 = false;
        }
        cVar.c(fragmentTransaction, z10, z11);
    }

    public static /* synthetic */ void g(c cVar, FragmentManager fragmentManager, List list, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = false;
        }
        cVar.f(fragmentManager, list, z10);
    }

    public final void e(FragmentManager fragmentManager, a op2) {
        Intrinsics.checkNotNullParameter(fragmentManager, "fragmentManager");
        Intrinsics.checkNotNullParameter(op2, "op");
        FragmentTransaction a10 = un.c.a(fragmentManager);
        a10.b(op2.d(), op2.e());
        if (op2.b()) {
            a10.g(op2.e().x().getScreenKey());
        }
        d(this, a10, op2.c(), false, 4, null);
    }

    public final void f(FragmentManager fragmentManager, List ops, boolean z10) {
        Intrinsics.checkNotNullParameter(fragmentManager, "fragmentManager");
        Intrinsics.checkNotNullParameter(ops, "ops");
        Iterator it = ops.iterator();
        while (it.hasNext()) {
            ((b) it.next()).a(fragmentManager, this);
        }
        if (z10) {
            fragmentManager.k0();
        }
    }

    public final void h(FragmentManager fragmentManager, d op2) {
        Intrinsics.checkNotNullParameter(fragmentManager, "fragmentManager");
        Intrinsics.checkNotNullParameter(op2, "op");
        fragmentManager.g1(op2.b().x().getScreenKey(), 1);
    }

    public final void i(FragmentManager fragmentManager, g op2) {
        Intrinsics.checkNotNullParameter(fragmentManager, "fragmentManager");
        Intrinsics.checkNotNullParameter(op2, "op");
        FragmentTransaction a10 = un.c.a(fragmentManager);
        a10.u(op2.b());
        c(a10, true, false);
    }
}
