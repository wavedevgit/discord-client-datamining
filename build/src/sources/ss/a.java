package ss;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final int f49155d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49156e;

    public a(int i10, int i11) {
        this.f49155d = i10;
        this.f49156e = i11;
        if (i11 >= 0) {
            return;
        }
        throw new IllegalArgumentException(("Digits must be non-negative, but was " + i11).toString());
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(a other) {
        Intrinsics.checkNotNullParameter(other, "other");
        int max = Math.max(this.f49156e, other.f49156e);
        return Intrinsics.compare(d(max), other.d(max));
    }

    public final int d(int i10) {
        int i11 = this.f49156e;
        if (i10 == i11) {
            return this.f49155d;
        }
        if (i10 > i11) {
            return this.f49155d * c.b()[i10 - this.f49156e];
        }
        return this.f49155d / c.b()[this.f49156e - i10];
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
        int i10 = c.b()[this.f49156e];
        sb2.append(this.f49155d / i10);
        sb2.append('.');
        sb2.append(StringsKt.B0(String.valueOf(i10 + (this.f49155d % i10)), "1"));
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }
}
