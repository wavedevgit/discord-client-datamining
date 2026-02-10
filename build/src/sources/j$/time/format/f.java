package j$.time.format;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.math.RoundingMode;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class f implements e {

    /* renamed from: a  reason: collision with root package name */
    public final j$.time.temporal.n f29742a;

    /* renamed from: b  reason: collision with root package name */
    public final int f29743b;

    /* renamed from: c  reason: collision with root package name */
    public final boolean f29744c;

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        boolean z10 = oVar.f29772c;
        DateTimeFormatter dateTimeFormatter = oVar.f29770a;
        int i11 = z10 ? this.f29743b : 9;
        int length = charSequence.length();
        if (i10 != length) {
            if (this.f29744c) {
                char charAt = charSequence.charAt(i10);
                dateTimeFormatter.f29727c.getClass();
                if (charAt == '.') {
                    i10++;
                }
            }
            int i12 = i10;
            if (i12 > length) {
                return ~i12;
            }
            int min = Math.min(i11 + i12, length);
            int i13 = 0;
            int i14 = i12;
            while (true) {
                if (i14 >= min) {
                    break;
                }
                int i15 = i14 + 1;
                char charAt2 = charSequence.charAt(i14);
                dateTimeFormatter.f29727c.getClass();
                int i16 = charAt2 - '0';
                i16 = (i16 < 0 || i16 > 9) ? -1 : -1;
                if (i16 >= 0) {
                    i13 = (i13 * 10) + i16;
                    i14 = i15;
                } else if (i15 < i12) {
                    return ~i12;
                }
            }
            BigDecimal movePointLeft = new BigDecimal(i13).movePointLeft(i14 - i12);
            j$.time.temporal.r x10 = this.f29742a.x();
            BigDecimal valueOf = BigDecimal.valueOf(x10.f29826a);
            return oVar.f(this.f29742a, movePointLeft.multiply(BigDecimal.valueOf(x10.f29829d).subtract(valueOf).add(BigDecimal.ONE)).setScale(0, RoundingMode.FLOOR).add(valueOf).longValueExact(), i12, i14);
        }
        return i10;
    }

    public f(j$.time.temporal.n nVar) {
        Objects.requireNonNull(nVar, "field");
        j$.time.temporal.r x10 = nVar.x();
        if (x10.f29826a != x10.f29827b || x10.f29828c != x10.f29829d) {
            throw new IllegalArgumentException("Field must have a fixed set of values: " + nVar);
        }
        this.f29742a = nVar;
        this.f29743b = 9;
        this.f29744c = true;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        j$.time.temporal.n nVar = this.f29742a;
        Long a10 = qVar.a(nVar);
        if (a10 == null) {
            return false;
        }
        t tVar = qVar.f29779b.f29727c;
        long longValue = a10.longValue();
        j$.time.temporal.r x10 = nVar.x();
        x10.b(longValue, nVar);
        BigDecimal valueOf = BigDecimal.valueOf(x10.f29826a);
        BigDecimal add = BigDecimal.valueOf(x10.f29829d).subtract(valueOf).add(BigDecimal.ONE);
        BigDecimal subtract = BigDecimal.valueOf(longValue).subtract(valueOf);
        RoundingMode roundingMode = RoundingMode.FLOOR;
        BigDecimal divide = subtract.divide(add, 9, roundingMode);
        BigDecimal bigDecimal = BigDecimal.ZERO;
        if (divide.compareTo(bigDecimal) != 0) {
            bigDecimal = divide.signum() == 0 ? new BigDecimal(BigInteger.ZERO, 0) : divide.stripTrailingZeros();
        }
        if (bigDecimal.scale() == 0) {
            return true;
        }
        String substring = bigDecimal.setScale(Math.min(Math.max(bigDecimal.scale(), 0), this.f29743b), roundingMode).toPlainString().substring(2);
        tVar.getClass();
        if (this.f29744c) {
            sb2.append('.');
        }
        sb2.append(substring);
        return true;
    }

    public final String toString() {
        String str = this.f29744c ? ",DecimalPoint" : "";
        return "Fraction(" + this.f29742a + ",0," + this.f29743b + str + ")";
    }
}
