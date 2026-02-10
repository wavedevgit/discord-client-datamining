package lt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final int f36040d;

    /* renamed from: e  reason: collision with root package name */
    private final int f36041e;

    public a(int i10, int i11) {
        this.f36040d = i10;
        this.f36041e = i11;
        if (i11 >= 0) {
            return;
        }
        throw new IllegalArgumentException(("Digits must be non-negative, but was " + i11).toString());
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(a other) {
        Intrinsics.checkNotNullParameter(other, "other");
        int max = Math.max(this.f36041e, other.f36041e);
        return Intrinsics.compare(d(max), other.d(max));
    }

    public final int d(int i10) {
        int i11 = this.f36041e;
        if (i10 == i11) {
            return this.f36040d;
        }
        if (i10 > i11) {
            return this.f36040d * c.b()[i10 - this.f36041e];
        }
        return this.f36040d / c.b()[this.f36041e - i10];
    }

    public boolean equals(Object obj) {
        if ((obj instanceof a) && compareTo((a) obj) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        throw new UnsupportedOperationException("DecimalFraction is not supposed to be used as a hash key");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        int i10 = c.b()[this.f36041e];
        sb2.append(this.f36040d / i10);
        sb2.append('.');
        sb2.append(StringsKt.B0(String.valueOf(i10 + (this.f36040d % i10)), "1"));
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }
}
