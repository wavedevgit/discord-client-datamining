package z2;

import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f55279a;

        public a(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            this.f55279a = name;
        }

        public final String a() {
            return this.f55279a;
        }

        public boolean equals(Object obj) {
            if (obj instanceof a) {
                return Intrinsics.areEqual(this.f55279a, ((a) obj).f55279a);
            }
            return false;
        }

        public int hashCode() {
            return this.f55279a.hashCode();
        }

        public String toString() {
            return this.f55279a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
    }

    public abstract Map a();

    public abstract Object b(a aVar);

    public final z2.a c() {
        return new z2.a(o0.y(a()), false);
    }

    public final d d() {
        return new z2.a(o0.y(a()), true);
    }
}
