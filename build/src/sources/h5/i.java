package h5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f27373c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final i f27374d;

    /* renamed from: a  reason: collision with root package name */
    private final c f27375a;

    /* renamed from: b  reason: collision with root package name */
    private final c f27376b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        c.b bVar = c.b.f27359a;
        f27374d = new i(bVar, bVar);
    }

    public i(c cVar, c cVar2) {
        this.f27375a = cVar;
        this.f27376b = cVar2;
    }

    public final c a() {
        return this.f27375a;
    }

    public final c b() {
        return this.f27376b;
    }

    public final c c() {
        return this.f27376b;
    }

    public final c d() {
        return this.f27375a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f27375a, iVar.f27375a) && Intrinsics.areEqual(this.f27376b, iVar.f27376b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f27375a.hashCode() * 31) + this.f27376b.hashCode();
    }

    public String toString() {
        return "Size(width=" + this.f27375a + ", height=" + this.f27376b + ')';
    }
}
