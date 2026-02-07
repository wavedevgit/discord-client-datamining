package ju;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f31183d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final ByteString f31184e;

    /* renamed from: f  reason: collision with root package name */
    public static final ByteString f31185f;

    /* renamed from: g  reason: collision with root package name */
    public static final ByteString f31186g;

    /* renamed from: h  reason: collision with root package name */
    public static final ByteString f31187h;

    /* renamed from: i  reason: collision with root package name */
    public static final ByteString f31188i;

    /* renamed from: j  reason: collision with root package name */
    public static final ByteString f31189j;

    /* renamed from: a  reason: collision with root package name */
    public final ByteString f31190a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteString f31191b;

    /* renamed from: c  reason: collision with root package name */
    public final int f31192c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        ByteString.a aVar = ByteString.f43214o;
        f31184e = aVar.g(":");
        f31185f = aVar.g(":status");
        f31186g = aVar.g(":method");
        f31187h = aVar.g(":path");
        f31188i = aVar.g(":scheme");
        f31189j = aVar.g(":authority");
    }

    public c(ByteString name, ByteString value) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f31190a = name;
        this.f31191b = value;
        this.f31192c = name.G() + 32 + value.G();
    }

    public final ByteString a() {
        return this.f31190a;
    }

    public final ByteString b() {
        return this.f31191b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f31190a, cVar.f31190a) && Intrinsics.areEqual(this.f31191b, cVar.f31191b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f31190a.hashCode() * 31) + this.f31191b.hashCode();
    }

    public String toString() {
        return this.f31190a.M() + ": " + this.f31191b.M();
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
            okio.ByteString$a r0 = okio.ByteString.f43214o
            okio.ByteString r2 = r0.g(r2)
            okio.ByteString r3 = r0.g(r3)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ju.c.<init>(java.lang.String, java.lang.String):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ByteString name, String value) {
        this(name, ByteString.f43214o.g(value));
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
    }
}
