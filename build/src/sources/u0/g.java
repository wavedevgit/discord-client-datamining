package u0;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    public long[] f51168a;

    /* renamed from: b  reason: collision with root package name */
    public int f51169b;

    public /* synthetic */ g(int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10);
    }

    public static /* synthetic */ String b(g gVar, CharSequence charSequence, CharSequence charSequence2, CharSequence charSequence3, int i10, CharSequence charSequence4, int i11, Object obj) {
        if (obj == null) {
            if ((i11 & 1) != 0) {
                charSequence = ", ";
            }
            if ((i11 & 2) != 0) {
                charSequence2 = "";
            }
            if ((i11 & 4) != 0) {
                charSequence3 = "";
            }
            if ((i11 & 8) != 0) {
                i10 = -1;
            }
            if ((i11 & 16) != 0) {
                charSequence4 = "...";
            }
            CharSequence charSequence5 = charSequence4;
            CharSequence charSequence6 = charSequence3;
            return gVar.a(charSequence, charSequence2, charSequence6, i10, charSequence5);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: joinToString");
    }

    public final String a(CharSequence separator, CharSequence prefix, CharSequence postfix, int i10, CharSequence truncated) {
        Intrinsics.checkNotNullParameter(separator, "separator");
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(postfix, "postfix");
        Intrinsics.checkNotNullParameter(truncated, "truncated");
        StringBuilder sb2 = new StringBuilder();
        sb2.append(prefix);
        long[] jArr = this.f51168a;
        int i11 = this.f51169b;
        int i12 = 0;
        while (true) {
            if (i12 < i11) {
                long j10 = jArr[i12];
                if (i12 == i10) {
                    sb2.append(truncated);
                    break;
                }
                if (i12 != 0) {
                    sb2.append(separator);
                }
                sb2.append(j10);
                i12++;
            } else {
                sb2.append(postfix);
                break;
            }
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    public boolean equals(Object obj) {
        if (obj instanceof g) {
            g gVar = (g) obj;
            int i10 = gVar.f51169b;
            int i11 = this.f51169b;
            if (i10 == i11) {
                long[] jArr = this.f51168a;
                long[] jArr2 = gVar.f51168a;
                IntRange u10 = kotlin.ranges.d.u(0, i11);
                int d10 = u10.d();
                int e10 = u10.e();
                if (d10 <= e10) {
                    while (jArr[d10] == jArr2[d10]) {
                        if (d10 != e10) {
                            d10++;
                        } else {
                            return true;
                        }
                    }
                    return false;
                }
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long[] jArr = this.f51168a;
        int i10 = this.f51169b;
        int i11 = 0;
        for (int i12 = 0; i12 < i10; i12++) {
            i11 += Long.hashCode(jArr[i12]) * 31;
        }
        return i11;
    }

    public String toString() {
        return b(this, null, "[", "]", 0, null, 25, null);
    }

    private g(int i10) {
        long[] jArr;
        if (i10 == 0) {
            jArr = i.a();
        } else {
            jArr = new long[i10];
        }
        this.f51168a = jArr;
    }
}
