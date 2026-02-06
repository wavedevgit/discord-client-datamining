package h5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f25800c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final i f25801d;

    /* renamed from: a  reason: collision with root package name */
    private final c f25802a;

    /* renamed from: b  reason: collision with root package name */
    private final c f25803b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        c.b bVar = c.b.f25786a;
        f25801d = new i(bVar, bVar);
    }

    public i(c cVar, c cVar2) {
        this.f25802a = cVar;
        this.f25803b = cVar2;
    }

    public final c a() {
        return this.f25802a;
    }

    public final c b() {
        return this.f25803b;
    }

    public final c c() {
        return this.f25803b;
    }

    public final c d() {
        return this.f25802a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f25802a, iVar.f25802a) && Intrinsics.areEqual(this.f25803b, iVar.f25803b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f25802a.hashCode() * 31) + this.f25803b.hashCode();
    }

    public String toString() {
        return "Size(width=" + this.f25802a + ", height=" + this.f25803b + ')';
    }
}
