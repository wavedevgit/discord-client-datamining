package h5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f25672c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final i f25673d;

    /* renamed from: a  reason: collision with root package name */
    private final c f25674a;

    /* renamed from: b  reason: collision with root package name */
    private final c f25675b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        c.b bVar = c.b.f25658a;
        f25673d = new i(bVar, bVar);
    }

    public i(c cVar, c cVar2) {
        this.f25674a = cVar;
        this.f25675b = cVar2;
    }

    public final c a() {
        return this.f25674a;
    }

    public final c b() {
        return this.f25675b;
    }

    public final c c() {
        return this.f25675b;
    }

    public final c d() {
        return this.f25674a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f25674a, iVar.f25674a) && Intrinsics.areEqual(this.f25675b, iVar.f25675b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f25674a.hashCode() * 31) + this.f25675b.hashCode();
    }

    public String toString() {
        return "Size(width=" + this.f25674a + ", height=" + this.f25675b + ')';
    }
}
