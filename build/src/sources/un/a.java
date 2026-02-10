package un;

import as.v;
import kotlin.Pair;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final Pair a(tn.b event) {
        Intrinsics.checkNotNullParameter(event, "event");
        return v.a(event.getEventName(), o0.k(v.a("registrationName", event.a())));
    }
}
