package z2;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
import z2.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {
    public static final d a() {
        return new a(null, true, 1, null);
    }

    public static final a b(d.b... pairs) {
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        a aVar = new a(null, false, 1, null);
        aVar.g((d.b[]) Arrays.copyOf(pairs, pairs.length));
        return aVar;
    }
}
