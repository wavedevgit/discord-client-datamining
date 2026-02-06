package ju;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f31135d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final ByteString f31136e;

    /* renamed from: f  reason: collision with root package name */
    public static final ByteString f31137f;

    /* renamed from: g  reason: collision with root package name */
    public static final ByteString f31138g;

    /* renamed from: h  reason: collision with root package name */
    public static final ByteString f31139h;

    /* renamed from: i  reason: collision with root package name */
    public static final ByteString f31140i;

    /* renamed from: j  reason: collision with root package name */
    public static final ByteString f31141j;

    /* renamed from: a  reason: collision with root package name */
    public final ByteString f31142a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteString f31143b;

    /* renamed from: c  reason: collision with root package name */
    public final int f31144c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        ByteString.a aVar = ByteString.f43166o;
        f31136e = aVar.g(":");
        f31137f = aVar.g(":status");
        f31138g = aVar.g(":method");
        f31139h = aVar.g(":path");
        f31140i = aVar.g(":scheme");
        f31141j = aVar.g(":authority");
    }

    public c(ByteString name, ByteString value) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f31142a = name;
        this.f31143b = value;
        this.f31144c = name.G() + 32 + value.G();
    }

    public final ByteString a() {
        return this.f31142a;
    }

    public final ByteString b() {
        return this.f31143b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f31142a, cVar.f31142a) && Intrinsics.areEqual(this.f31143b, cVar.f31143b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f31142a.hashCode() * 31) + this.f31143b.hashCode();
    }

    public String toString() {
        return this.f31142a.M() + ": " + this.f31143b.M();
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
            okio.ByteString$a r0 = okio.ByteString.f43166o
            okio.ByteString r2 = r0.g(r2)
            okio.ByteString r3 = r0.g(r3)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ju.c.<init>(java.lang.String, java.lang.String):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ByteString name, String value) {
        this(name, ByteString.f43166o.g(value));
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
    }
}
