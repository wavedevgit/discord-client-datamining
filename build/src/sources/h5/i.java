package h5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f26831c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final i f26832d;

    /* renamed from: a  reason: collision with root package name */
    private final c f26833a;

    /* renamed from: b  reason: collision with root package name */
    private final c f26834b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        c.b bVar = c.b.f26817a;
        f26832d = new i(bVar, bVar);
    }

    public i(c cVar, c cVar2) {
        this.f26833a = cVar;
        this.f26834b = cVar2;
    }

    public final c a() {
        return this.f26833a;
    }

    public final c b() {
        return this.f26834b;
    }

    public final c c() {
        return this.f26834b;
    }

    public final c d() {
        return this.f26833a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f26833a, iVar.f26833a) && Intrinsics.areEqual(this.f26834b, iVar.f26834b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f26833a.hashCode() * 31) + this.f26834b.hashCode();
    }

    public String toString() {
        return "Size(width=" + this.f26833a + ", height=" + this.f26834b + ')';
    }
}
