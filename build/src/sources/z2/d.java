package z2;

import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f56065a;

        public a(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            this.f56065a = name;
        }

        public final String a() {
            return this.f56065a;
        }

        public boolean equals(Object obj) {
            if (obj instanceof a) {
                return Intrinsics.areEqual(this.f56065a, ((a) obj).f56065a);
            }
            return false;
        }

        public int hashCode() {
            return this.f56065a.hashCode();
        }

        public String toString() {
            return this.f56065a;
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
