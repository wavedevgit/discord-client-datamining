package androidx.lifecycle;

import hs.j1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n {
    public static final j a(Lifecycle lifecycle) {
        k kVar;
        Intrinsics.checkNotNullParameter(lifecycle, "<this>");
        do {
            k kVar2 = (k) lifecycle.c().b();
            if (kVar2 != null) {
                return kVar2;
            }
            kVar = new k(lifecycle, j1.b(null, 1, null).Z0(hs.m0.c().f2()));
        } while (!lifecycle.c().a(null, kVar));
        kVar.b();
        return kVar;
    }
}
