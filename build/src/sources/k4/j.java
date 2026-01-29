package k4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class j {
    public abstract i a(String str);

    public final i b(String className) {
        Intrinsics.checkNotNullParameter(className, "className");
        i a10 = a(className);
        if (a10 == null) {
            return k.a(className);
        }
        return a10;
    }
}
