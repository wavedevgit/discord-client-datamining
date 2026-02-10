package h5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f24982c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final i f24983d;

    /* renamed from: a  reason: collision with root package name */
    private final c f24984a;

    /* renamed from: b  reason: collision with root package name */
    private final c f24985b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        c.b bVar = c.b.f24968a;
        f24983d = new i(bVar, bVar);
    }

    public i(c cVar, c cVar2) {
        this.f24984a = cVar;
        this.f24985b = cVar2;
    }

    public final c a() {
        return this.f24984a;
    }

    public final c b() {
        return this.f24985b;
    }

    public final c c() {
        return this.f24985b;
    }

    public final c d() {
        return this.f24984a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f24984a, iVar.f24984a) && Intrinsics.areEqual(this.f24985b, iVar.f24985b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f24984a.hashCode() * 31) + this.f24985b.hashCode();
    }

    public String toString() {
        return "Size(width=" + this.f24984a + ", height=" + this.f24985b + ')';
    }
}
