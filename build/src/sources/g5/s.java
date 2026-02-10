package g5;

import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class s {

    /* renamed from: b  reason: collision with root package name */
    public static final a f23590b = new a(null);

    /* renamed from: c  reason: collision with root package name */
    public static final s f23591c = new s(o0.i());

    /* renamed from: a  reason: collision with root package name */
    private final Map f23592a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final s a(Map map) {
            return new s(k5.c.b(map), null);
        }

        private a() {
        }
    }

    public /* synthetic */ s(Map map, DefaultConstructorMarker defaultConstructorMarker) {
        this(map);
    }

    public final Map a() {
        return this.f23592a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof s) && Intrinsics.areEqual(this.f23592a, ((s) obj).f23592a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f23592a.hashCode();
    }

    public String toString() {
        return "Tags(tags=" + this.f23592a + ')';
    }

    private s(Map map) {
        this.f23592a = map;
    }
}
