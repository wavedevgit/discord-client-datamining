package r3;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i extends a0 {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(u database) {
        super(database);
        Intrinsics.checkNotNullParameter(database, "database");
    }

    protected abstract void i(x3.k kVar, Object obj);

    public final void j(Object obj) {
        x3.k b10 = b();
        try {
            i(b10, obj);
            b10.W0();
        } finally {
            h(b10);
        }
    }
}
