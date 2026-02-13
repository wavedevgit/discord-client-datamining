package tu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f50695d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final ByteString f50696e;

    /* renamed from: f  reason: collision with root package name */
    public static final ByteString f50697f;

    /* renamed from: g  reason: collision with root package name */
    public static final ByteString f50698g;

    /* renamed from: h  reason: collision with root package name */
    public static final ByteString f50699h;

    /* renamed from: i  reason: collision with root package name */
    public static final ByteString f50700i;

    /* renamed from: j  reason: collision with root package name */
    public static final ByteString f50701j;

    /* renamed from: a  reason: collision with root package name */
    public final ByteString f50702a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteString f50703b;

    /* renamed from: c  reason: collision with root package name */
    public final int f50704c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        ByteString.a aVar = ByteString.f41160o;
        f50696e = aVar.g(":");
        f50697f = aVar.g(":status");
        f50698g = aVar.g(":method");
        f50699h = aVar.g(":path");
        f50700i = aVar.g(":scheme");
        f50701j = aVar.g(":authority");
    }

    public c(ByteString name, ByteString value) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f50702a = name;
        this.f50703b = value;
        this.f50704c = name.G() + 32 + value.G();
    }

    public final ByteString a() {
        return this.f50702a;
    }

    public final ByteString b() {
        return this.f50703b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f50702a, cVar.f50702a) && Intrinsics.areEqual(this.f50703b, cVar.f50703b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50702a.hashCode() * 31) + this.f50703b.hashCode();
    }

    public String toString() {
        return this.f50702a.M() + ": " + this.f50703b.M();
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
            okio.ByteString$a r0 = okio.ByteString.f41160o
            okio.ByteString r2 = r0.g(r2)
            okio.ByteString r3 = r0.g(r3)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: tu.c.<init>(java.lang.String, java.lang.String):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ByteString name, String value) {
        this(name, ByteString.f41160o.g(value));
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
    }
}
