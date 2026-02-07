package h5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: c  reason: collision with root package name */
    public static final a f25848c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final i f25849d;

    /* renamed from: a  reason: collision with root package name */
    private final c f25850a;

    /* renamed from: b  reason: collision with root package name */
    private final c f25851b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        c.b bVar = c.b.f25834a;
        f25849d = new i(bVar, bVar);
    }

    public i(c cVar, c cVar2) {
        this.f25850a = cVar;
        this.f25851b = cVar2;
    }

    public final c a() {
        return this.f25850a;
    }

    public final c b() {
        return this.f25851b;
    }

    public final c c() {
        return this.f25851b;
    }

    public final c d() {
        return this.f25850a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f25850a, iVar.f25850a) && Intrinsics.areEqual(this.f25851b, iVar.f25851b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f25850a.hashCode() * 31) + this.f25851b.hashCode();
    }

    public String toString() {
        return "Size(width=" + this.f25850a + ", height=" + this.f25851b + ')';
    }
}
