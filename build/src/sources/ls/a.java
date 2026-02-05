package ls;

import java.io.Serializable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import or.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Comparable, Serializable {

    /* renamed from: i  reason: collision with root package name */
    public static final C0486a f37194i = new C0486a(null);

    /* renamed from: o  reason: collision with root package name */
    private static final a f37195o = new a(0, 0);

    /* renamed from: d  reason: collision with root package name */
    private final long f37196d;

    /* renamed from: e  reason: collision with root package name */
    private final long f37197e;

    /* renamed from: ls.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0486a {
        public /* synthetic */ C0486a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(long j10, long j11) {
            if (j10 == 0 && j11 == 0) {
                return b();
            }
            return new a(j10, j11, null);
        }

        public final a b() {
            return a.f37195o;
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

        private C0486a() {
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
        long j10 = this.f37196d;
        if (j10 != other.f37196d) {
            compare2 = Long.compare(b0.d(j10) ^ Long.MIN_VALUE, b0.d(other.f37196d) ^ Long.MIN_VALUE);
            return compare2;
        }
        compare = Long.compare(b0.d(this.f37197e) ^ Long.MIN_VALUE, b0.d(other.f37197e) ^ Long.MIN_VALUE);
        return compare;
    }

    public final String e() {
        byte[] bArr = new byte[36];
        b.a(this.f37196d, bArr, 0, 0, 4);
        bArr[8] = 45;
        b.a(this.f37196d, bArr, 9, 4, 6);
        bArr[13] = 45;
        b.a(this.f37196d, bArr, 14, 6, 8);
        bArr[18] = 45;
        b.a(this.f37197e, bArr, 19, 0, 2);
        bArr[23] = 45;
        b.a(this.f37197e, bArr, 24, 2, 8);
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
        if (this.f37196d == aVar.f37196d && this.f37197e == aVar.f37197e) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Long.hashCode(this.f37196d ^ this.f37197e);
    }

    public String toString() {
        return e();
    }

    private a(long j10, long j11) {
        this.f37196d = j10;
        this.f37197e = j11;
    }
}
