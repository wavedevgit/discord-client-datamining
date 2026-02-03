package kotlin.collections;

import java.util.Collections;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y0 {
    public static Set a(Set builder) {
        Intrinsics.checkNotNullParameter(builder, "builder");
        return ((mr.h) builder).b();
    }

    public static Set b() {
        return new mr.h();
    }

    public static Set c(Object obj) {
        Set singleton = Collections.singleton(obj);
        Intrinsics.checkNotNullExpressionValue(singleton, "singleton(...)");
        return singleton;
    }
}
