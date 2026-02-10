package ku;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35275d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final ByteString f35276e;

    /* renamed from: f  reason: collision with root package name */
    public static final ByteString f35277f;

    /* renamed from: g  reason: collision with root package name */
    public static final ByteString f35278g;

    /* renamed from: h  reason: collision with root package name */
    public static final ByteString f35279h;

    /* renamed from: i  reason: collision with root package name */
    public static final ByteString f35280i;

    /* renamed from: j  reason: collision with root package name */
    public static final ByteString f35281j;

    /* renamed from: a  reason: collision with root package name */
    public final ByteString f35282a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteString f35283b;

    /* renamed from: c  reason: collision with root package name */
    public final int f35284c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        ByteString.a aVar = ByteString.f42341o;
        f35276e = aVar.g(":");
        f35277f = aVar.g(":status");
        f35278g = aVar.g(":method");
        f35279h = aVar.g(":path");
        f35280i = aVar.g(":scheme");
        f35281j = aVar.g(":authority");
    }

    public c(ByteString name, ByteString value) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f35282a = name;
        this.f35283b = value;
        this.f35284c = name.G() + 32 + value.G();
    }

    public final ByteString a() {
        return this.f35282a;
    }

    public final ByteString b() {
        return this.f35283b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f35282a, cVar.f35282a) && Intrinsics.areEqual(this.f35283b, cVar.f35283b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f35282a.hashCode() * 31) + this.f35283b.hashCode();
    }

    public String toString() {
        return this.f35282a.M() + ": " + this.f35283b.M();
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
            okio.ByteString$a r0 = okio.ByteString.f42341o
            okio.ByteString r2 = r0.g(r2)
            okio.ByteString r3 = r0.g(r3)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ku.c.<init>(java.lang.String, java.lang.String):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ByteString name, String value) {
        this(name, ByteString.f42341o.g(value));
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
    }
}
