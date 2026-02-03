package gs;

import java.io.Serializable;
import jr.b0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: i  reason: collision with root package name */
    public static final C0355a f27390i = new C0355a(null);

    /* renamed from: o  reason: collision with root package name */
    private static final a f27391o = new a(0, 0);

    /* renamed from: d  reason: collision with root package name */
    private final long f27392d;

    /* renamed from: e  reason: collision with root package name */
    private final long f27393e;

    /* renamed from: gs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0355a {
        public /* synthetic */ C0355a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(long j10, long j11) {
            if (j10 == 0 && j11 == 0) {
                return b();
            }
            return new a(j10, j11, null);
        }

        public final a b() {
            return a.f27391o;
        }

        public final a c(String uuidString) {
            String g10;
            Intrinsics.checkNotNullParameter(uuidString, "uuidString");
            int length = uuidString.length();
            if (length != 32) {
                if (length == 36) {
                    return b.c(uuidString);
                }
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Expected either a 36-char string in the standard hex-and-dash UUID format or a 32-char hexadecimal string, but was \"");
                g10 = c.g(uuidString, 64);
                sb2.append(g10);
                sb2.append("\" of length ");
                sb2.append(uuidString.length());
                throw new IllegalArgumentException(sb2.toString());
            }
            return b.b(uuidString);
        }

        private C0355a() {
        }
    }

    public /* synthetic */ a(long j10, long j11, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, j11);
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(a other) {
        int compare;
        int compare2;
        Intrinsics.checkNotNullParameter(other, "other");
        long j10 = this.f27392d;
        if (j10 != other.f27392d) {
            compare2 = Long.compare(b0.d(j10) ^ Long.MIN_VALUE, b0.d(other.f27392d) ^ Long.MIN_VALUE);
            return compare2;
        }
        compare = Long.compare(b0.d(this.f27393e) ^ Long.MIN_VALUE, b0.d(other.f27393e) ^ Long.MIN_VALUE);
        return compare;
    }

    public final String e() {
        byte[] bArr = new byte[36];
        b.a(this.f27392d, bArr, 0, 0, 4);
        bArr[8] = 45;
        b.a(this.f27392d, bArr, 9, 4, 6);
        bArr[13] = 45;
        b.a(this.f27392d, bArr, 14, 6, 8);
        bArr[18] = 45;
        b.a(this.f27393e, bArr, 19, 0, 2);
        bArr[23] = 45;
        b.a(this.f27393e, bArr, 24, 2, 8);
        return StringsKt.x(bArr);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f27392d == aVar.f27392d && this.f27393e == aVar.f27393e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Long.hashCode(this.f27392d ^ this.f27393e);
    }

    public String toString() {
        return e();
    }

    private a(long j10, long j11) {
        this.f27392d = j10;
        this.f27393e = j11;
    }
}
