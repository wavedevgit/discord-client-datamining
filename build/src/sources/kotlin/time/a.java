package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface a extends TimeMark, Comparable {

    /* renamed from: kotlin.time.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0466a {
        public static int a(a aVar, a other) {
            Intrinsics.checkNotNullParameter(other, "other");
            return Duration.j(aVar.l(other), Duration.f35055e.c());
        }
    }

    long l(a aVar);
}
