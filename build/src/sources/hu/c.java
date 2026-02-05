package hu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f27013d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final ByteString f27014e;

    /* renamed from: f  reason: collision with root package name */
    public static final ByteString f27015f;

    /* renamed from: g  reason: collision with root package name */
    public static final ByteString f27016g;

    /* renamed from: h  reason: collision with root package name */
    public static final ByteString f27017h;

    /* renamed from: i  reason: collision with root package name */
    public static final ByteString f27018i;

    /* renamed from: j  reason: collision with root package name */
    public static final ByteString f27019j;

    /* renamed from: a  reason: collision with root package name */
    public final ByteString f27020a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteString f27021b;

    /* renamed from: c  reason: collision with root package name */
    public final int f27022c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        ByteString.a aVar = ByteString.f44060o;
        f27014e = aVar.g(":");
        f27015f = aVar.g(":status");
        f27016g = aVar.g(":method");
        f27017h = aVar.g(":path");
        f27018i = aVar.g(":scheme");
        f27019j = aVar.g(":authority");
    }

    public c(ByteString name, ByteString value) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f27020a = name;
        this.f27021b = value;
        this.f27022c = name.G() + 32 + value.G();
    }

    public final ByteString a() {
        return this.f27020a;
    }

    public final ByteString b() {
        return this.f27021b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f27020a, cVar.f27020a) && Intrinsics.areEqual(this.f27021b, cVar.f27021b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f27020a.hashCode() * 31) + this.f27021b.hashCode();
    }

    public String toString() {
        return this.f27020a.M() + ": " + this.f27021b.M();
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public c(java.lang.String r2, java.lang.String r3) {
        /*
            r1 = this;
            java.lang.String r0 = "name"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            java.lang.String r0 = "value"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            okio.ByteString$a r0 = okio.ByteString.f44060o
            okio.ByteString r2 = r0.g(r2)
            okio.ByteString r3 = r0.g(r3)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: hu.c.<init>(java.lang.String, java.lang.String):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ByteString name, String value) {
        this(name, ByteString.f44060o.g(value));
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
    }
}
