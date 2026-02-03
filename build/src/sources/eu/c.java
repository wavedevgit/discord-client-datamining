package eu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f22701d = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public static final ByteString f22702e;

    /* renamed from: f  reason: collision with root package name */
    public static final ByteString f22703f;

    /* renamed from: g  reason: collision with root package name */
    public static final ByteString f22704g;

    /* renamed from: h  reason: collision with root package name */
    public static final ByteString f22705h;

    /* renamed from: i  reason: collision with root package name */
    public static final ByteString f22706i;

    /* renamed from: j  reason: collision with root package name */
    public static final ByteString f22707j;

    /* renamed from: a  reason: collision with root package name */
    public final ByteString f22708a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteString f22709b;

    /* renamed from: c  reason: collision with root package name */
    public final int f22710c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        ByteString.a aVar = ByteString.f44307o;
        f22702e = aVar.g(":");
        f22703f = aVar.g(":status");
        f22704g = aVar.g(":method");
        f22705h = aVar.g(":path");
        f22706i = aVar.g(":scheme");
        f22707j = aVar.g(":authority");
    }

    public c(ByteString name, ByteString value) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
        this.f22708a = name;
        this.f22709b = value;
        this.f22710c = name.G() + 32 + value.G();
    }

    public final ByteString a() {
        return this.f22708a;
    }

    public final ByteString b() {
        return this.f22709b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f22708a, cVar.f22708a) && Intrinsics.areEqual(this.f22709b, cVar.f22709b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f22708a.hashCode() * 31) + this.f22709b.hashCode();
    }

    public String toString() {
        return this.f22708a.M() + ": " + this.f22709b.M();
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
            okio.ByteString$a r0 = okio.ByteString.f44307o
            okio.ByteString r2 = r0.g(r2)
            okio.ByteString r3 = r0.g(r3)
            r1.<init>(r2, r3)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: eu.c.<init>(java.lang.String, java.lang.String):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public c(ByteString name, String value) {
        this(name, ByteString.f44307o.g(value));
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(value, "value");
    }
}
