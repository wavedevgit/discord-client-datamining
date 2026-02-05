package kotlinx.serialization.json;

import ht.d;
import jt.s0;
import kotlin.jvm.internal.Intrinsics;
import kt.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends Json {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(d configuration, kt.b module) {
        super(configuration, module, null);
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(module, "module");
        h();
    }

    private final void h() {
        if (Intrinsics.areEqual(a(), c.a())) {
            return;
        }
        a().a(new s0(e().p(), e().e()));
    }
}
