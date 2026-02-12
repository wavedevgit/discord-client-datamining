package h5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f26201c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final i f26202d;

    /* renamed from: a  reason: collision with root package name */
    private final c f26203a;

    /* renamed from: b  reason: collision with root package name */
    private final c f26204b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        c.b bVar = c.b.f26187a;
        f26202d = new i(bVar, bVar);
    }

    public i(c cVar, c cVar2) {
        this.f26203a = cVar;
        this.f26204b = cVar2;
    }

    public final c a() {
        return this.f26203a;
    }

    public final c b() {
        return this.f26204b;
    }

    public final c c() {
        return this.f26204b;
    }

    public final c d() {
        return this.f26203a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f26203a, iVar.f26203a) && Intrinsics.areEqual(this.f26204b, iVar.f26204b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f26203a.hashCode() * 31) + this.f26204b.hashCode();
    }

    public String toString() {
        return "Size(width=" + this.f26203a + ", height=" + this.f26204b + ')';
    }
}
