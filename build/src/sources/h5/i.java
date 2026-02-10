package h5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f26200c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final i f26201d;

    /* renamed from: a  reason: collision with root package name */
    private final c f26202a;

    /* renamed from: b  reason: collision with root package name */
    private final c f26203b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        c.b bVar = c.b.f26186a;
        f26201d = new i(bVar, bVar);
    }

    public i(c cVar, c cVar2) {
        this.f26202a = cVar;
        this.f26203b = cVar2;
    }

    public final c a() {
        return this.f26202a;
    }

    public final c b() {
        return this.f26203b;
    }

    public final c c() {
        return this.f26203b;
    }

    public final c d() {
        return this.f26202a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f26202a, iVar.f26202a) && Intrinsics.areEqual(this.f26203b, iVar.f26203b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f26202a.hashCode() * 31) + this.f26203b.hashCode();
    }

    public String toString() {
        return "Size(width=" + this.f26202a + ", height=" + this.f26203b + ')';
    }
}
