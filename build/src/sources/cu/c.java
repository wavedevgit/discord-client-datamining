package cu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f20855d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final ByteString f20856e;

    /* renamed from: f  reason: collision with root package name */
    public static final ByteString f20857f;

    /* renamed from: g  reason: collision with root package name */
    public static final ByteString f20858g;

    /* renamed from: h  reason: collision with root package name */
    public static final ByteString f20859h;

    /* renamed from: i  reason: collision with root package name */
    public static final ByteString f20860i;

    /* renamed from: j  reason: collision with root package name */
    public static final ByteString f20861j;

    /* renamed from: a  reason: collision with root package name */
    public final ByteString f20862a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteString f20863b;

    /* renamed from: c  reason: collision with root package name */
    public final int f20864c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        ByteString.a aVar = ByteString.f44507o;
        f20856e = aVar.g(":");
        f20857f = aVar.g(":status");
        f20858g = aVar.g(":method");
        f20859h = aVar.g(":path");
        f20860i = aVar.g(":scheme");
        f20861j = aVar.g(":authority");
    }

    public c(ByteString name, ByteString value) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f20862a = name;
        this.f20863b = value;
        this.f20864c = name.G() + 32 + value.G();
    }

    public final ByteString a() {
        return this.f20862a;
    }

    public final ByteString b() {
        return this.f20863b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f20862a, cVar.f20862a) && Intrinsics.areEqual(this.f20863b, cVar.f20863b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f20862a.hashCode() * 31) + this.f20863b.hashCode();
    }

    public String toString() {
        return this.f20862a.M() + ": " + this.f20863b.M();
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
            okio.ByteString$a r0 = okio.ByteString.f44507o
            okio.ByteString r2 = r0.g(r2)
            okio.ByteString r3 = r0.g(r3)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: cu.c.<init>(java.lang.String, java.lang.String):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ByteString name, String value) {
        this(name, ByteString.f44507o.g(value));
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
    }
}
