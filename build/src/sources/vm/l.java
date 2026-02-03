package vm;

import kotlin.jvm.internal.Intrinsics;
import um.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l {
    public static final k a(q qVar, String key) {
        Intrinsics.checkNotNullParameter(qVar, "<this>");
        Intrinsics.checkNotNullParameter(key, "key");
        return new k(qVar, key);
    }

    public static /* synthetic */ k b(q qVar, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = "";
        }
        return a(qVar, str);
    }
}
