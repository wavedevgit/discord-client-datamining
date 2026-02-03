package h5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f27546c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final i f27547d;

    /* renamed from: a  reason: collision with root package name */
    private final c f27548a;

    /* renamed from: b  reason: collision with root package name */
    private final c f27549b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        c.b bVar = c.b.f27532a;
        f27547d = new i(bVar, bVar);
    }

    public i(c cVar, c cVar2) {
        this.f27548a = cVar;
        this.f27549b = cVar2;
    }

    public final c a() {
        return this.f27548a;
    }

    public final c b() {
        return this.f27549b;
    }

    public final c c() {
        return this.f27549b;
    }

    public final c d() {
        return this.f27548a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f27548a, iVar.f27548a) && Intrinsics.areEqual(this.f27549b, iVar.f27549b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f27548a.hashCode() * 31) + this.f27549b.hashCode();
    }

    public String toString() {
        return "Size(width=" + this.f27548a + ", height=" + this.f27549b + ')';
    }
}
