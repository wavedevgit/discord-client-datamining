package wm;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {
    public static final boolean a(Object me2, Object you) {
        Intrinsics.checkNotNullParameter(me2, "me");
        Intrinsics.checkNotNullParameter(you, "you");
        if (!Intrinsics.areEqual(Reflection.getOrCreateKotlinClass(me2.getClass()), Reflection.getOrCreateKotlinClass(you.getClass()))) {
            return false;
        }
        if (!(me2 instanceof g)) {
            return true;
        }
        return Intrinsics.areEqual(((g) me2).c(), ((g) you).c());
    }
}
