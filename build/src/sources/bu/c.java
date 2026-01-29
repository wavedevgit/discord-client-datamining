package bu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f7857d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final ByteString f7858e;

    /* renamed from: f  reason: collision with root package name */
    public static final ByteString f7859f;

    /* renamed from: g  reason: collision with root package name */
    public static final ByteString f7860g;

    /* renamed from: h  reason: collision with root package name */
    public static final ByteString f7861h;

    /* renamed from: i  reason: collision with root package name */
    public static final ByteString f7862i;

    /* renamed from: j  reason: collision with root package name */
    public static final ByteString f7863j;

    /* renamed from: a  reason: collision with root package name */
    public final ByteString f7864a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteString f7865b;

    /* renamed from: c  reason: collision with root package name */
    public final int f7866c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        ByteString.a aVar = ByteString.f44363o;
        f7858e = aVar.g(":");
        f7859f = aVar.g(":status");
        f7860g = aVar.g(":method");
        f7861h = aVar.g(":path");
        f7862i = aVar.g(":scheme");
        f7863j = aVar.g(":authority");
    }

    public c(ByteString name, ByteString value) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f7864a = name;
        this.f7865b = value;
        this.f7866c = name.G() + 32 + value.G();
    }

    public final ByteString a() {
        return this.f7864a;
    }

    public final ByteString b() {
        return this.f7865b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f7864a, cVar.f7864a) && Intrinsics.areEqual(this.f7865b, cVar.f7865b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f7864a.hashCode() * 31) + this.f7865b.hashCode();
    }

    public String toString() {
        return this.f7864a.M() + ": " + this.f7865b.M();
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
            okio.ByteString$a r0 = okio.ByteString.f44363o
            okio.ByteString r2 = r0.g(r2)
            okio.ByteString r3 = r0.g(r3)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: bu.c.<init>(java.lang.String, java.lang.String):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ByteString name, String value) {
        this(name, ByteString.f44363o.g(value));
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
    }
}
