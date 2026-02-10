package j$.time.zone;

import j$.time.Instant;
import j$.time.LocalDate;
import j$.time.LocalDateTime;
import j$.time.LocalTime;
import j$.time.ZoneOffset;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.TimeZone;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class c implements Serializable {

    /* renamed from: i  reason: collision with root package name */
    public static final long[] f30633i = new long[0];

    /* renamed from: j  reason: collision with root package name */
    public static final b[] f30634j = new b[0];

    /* renamed from: k  reason: collision with root package name */
    public static final LocalDateTime[] f30635k = new LocalDateTime[0];

    /* renamed from: l  reason: collision with root package name */
    public static final a[] f30636l = new a[0];

    /* renamed from: a  reason: collision with root package name */
    public final long[] f30637a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset[] f30638b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f30639c;

    /* renamed from: d  reason: collision with root package name */
    public final LocalDateTime[] f30640d;

    /* renamed from: e  reason: collision with root package name */
    public final ZoneOffset[] f30641e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f30642f;

    /* renamed from: g  reason: collision with root package name */
    public final TimeZone f30643g;

    /* renamed from: h  reason: collision with root package name */
    public final transient ConcurrentMap f30644h = new ConcurrentHashMap();

    public static Object a(LocalDateTime localDateTime, a aVar) {
        LocalDateTime localDateTime2 = aVar.f30630a;
        if (aVar.f30632c.getTotalSeconds() > aVar.f30631b.getTotalSeconds()) {
            if (localDateTime.w(localDateTime2)) {
                return aVar.f30631b;
            }
            LocalDateTime localDateTime3 = aVar.f30630a;
            if (!localDateTime.w(localDateTime3.E(localDateTime3.f30487a, 0L, 0L, aVar.f30632c.getTotalSeconds() - aVar.f30631b.getTotalSeconds(), 0L))) {
                return aVar.f30632c;
            }
        } else if (!localDateTime.w(localDateTime2)) {
            return aVar.f30632c;
        } else {
            LocalDateTime localDateTime4 = aVar.f30630a;
            if (localDateTime.w(localDateTime4.E(localDateTime4.f30487a, 0L, 0L, aVar.f30632c.getTotalSeconds() - aVar.f30631b.getTotalSeconds(), 0L))) {
                return aVar.f30631b;
            }
        }
        return aVar;
    }

    public c(ZoneOffset zoneOffset) {
        this.f30638b = r0;
        ZoneOffset[] zoneOffsetArr = {zoneOffset};
        long[] jArr = f30633i;
        this.f30637a = jArr;
        this.f30639c = jArr;
        this.f30640d = f30635k;
        this.f30641e = zoneOffsetArr;
        this.f30642f = f30634j;
        this.f30643g = null;
    }

    public c(TimeZone timeZone) {
        this.f30638b = r0;
        ZoneOffset[] zoneOffsetArr = {g(timeZone.getRawOffset())};
        long[] jArr = f30633i;
        this.f30637a = jArr;
        this.f30639c = jArr;
        this.f30640d = f30635k;
        this.f30641e = zoneOffsetArr;
        this.f30642f = f30634j;
        this.f30643g = timeZone;
    }

    public static ZoneOffset g(int i10) {
        return ZoneOffset.ofTotalSeconds(i10 / 1000);
    }

    public final ZoneOffset d(Instant instant) {
        long[] jArr;
        ZoneOffset[] zoneOffsetArr;
        long addExact;
        TimeZone timeZone = this.f30643g;
        if (timeZone == null) {
            if (this.f30639c.length == 0) {
                return this.f30638b[0];
            }
            long epochSecond = instant.getEpochSecond();
            if (this.f30642f.length > 0) {
                if (epochSecond > this.f30639c[jArr.length - 1]) {
                    a[] b10 = b(c(epochSecond, this.f30641e[zoneOffsetArr.length - 1]));
                    a aVar = null;
                    for (int i10 = 0; i10 < b10.length; i10++) {
                        aVar = b10[i10];
                        if (epochSecond < aVar.f30630a.q(aVar.f30631b)) {
                            return aVar.f30631b;
                        }
                    }
                    return aVar.f30632c;
                }
            }
            int binarySearch = Arrays.binarySearch(this.f30639c, epochSecond);
            if (binarySearch < 0) {
                binarySearch = (-binarySearch) - 2;
            }
            return this.f30641e[binarySearch + 1];
        }
        long j10 = instant.f30480a;
        if (j10 < 0 && instant.f30481b > 0) {
            addExact = Math.addExact(Math.multiplyExact(j10 + 1, 1000L), (instant.f30481b / 1000000) - 1000);
        } else {
            addExact = Math.addExact(Math.multiplyExact(j10, 1000L), instant.f30481b / 1000000);
        }
        return g(timeZone.getOffset(addExact));
    }

    public final List f(LocalDateTime localDateTime) {
        Object e10 = e(localDateTime);
        if (e10 instanceof a) {
            a aVar = (a) e10;
            if (aVar.f30632c.getTotalSeconds() > aVar.f30631b.getTotalSeconds()) {
                return Collections.EMPTY_LIST;
            }
            return Arrays.asList(aVar.f30631b, aVar.f30632c);
        }
        return Collections.singletonList((ZoneOffset) e10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:27:0x0064, code lost:
        if (r8.r(r0) > 0) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:33:0x0087, code lost:
        if (r8.f30488b.G() <= r0.f30488b.G()) goto L47;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object e(j$.time.LocalDateTime r8) {
        /*
            Method dump skipped, instructions count: 268
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: j$.time.zone.c.e(j$.time.LocalDateTime):java.lang.Object");
    }

    public final a[] b(int i10) {
        a[] aVarArr = f30636l;
        Integer valueOf = Integer.valueOf(i10);
        a[] aVarArr2 = (a[]) ((ConcurrentHashMap) this.f30644h).get(valueOf);
        if (aVarArr2 != null) {
            return aVarArr2;
        }
        if (this.f30643g == null) {
            b[] bVarArr = this.f30642f;
            a[] aVarArr3 = new a[bVarArr.length];
            if (bVarArr.length > 0) {
                b bVar = bVarArr[0];
                throw null;
            }
            if (i10 < 2100) {
                ((ConcurrentHashMap) this.f30644h).putIfAbsent(valueOf, aVarArr3);
            }
            return aVarArr3;
        } else if (i10 < 1800) {
            return aVarArr;
        } else {
            LocalDateTime localDateTime = LocalDateTime.f30485c;
            LocalDate of2 = LocalDate.of(i10 - 1, 12, 31);
            LocalTime localTime = LocalTime.MIN;
            j$.time.temporal.a.HOUR_OF_DAY.E(0);
            long q10 = new LocalDateTime(of2, LocalTime.f30490f[0]).q(this.f30638b[0]);
            long j10 = 1000;
            int offset = this.f30643g.getOffset(q10 * 1000);
            long j11 = 31968000 + q10;
            while (q10 < j11) {
                long j12 = 7776000 + q10;
                long j13 = j10;
                if (offset != this.f30643g.getOffset(j12 * j13)) {
                    while (j12 - q10 > 1) {
                        long j14 = q10;
                        long floorDiv = Math.floorDiv(j12 + q10, 2L);
                        if (this.f30643g.getOffset(floorDiv * j13) == offset) {
                            q10 = floorDiv;
                        } else {
                            j12 = floorDiv;
                            q10 = j14;
                        }
                    }
                    long j15 = q10;
                    q10 = this.f30643g.getOffset(j15 * j13) != offset ? j15 : j12;
                    ZoneOffset g10 = g(offset);
                    int offset2 = this.f30643g.getOffset(q10 * j13);
                    ZoneOffset g11 = g(offset2);
                    if (c(q10, g11) == i10) {
                        aVarArr = (a[]) Arrays.copyOf(aVarArr, aVarArr.length + 1);
                        aVarArr[aVarArr.length - 1] = new a(q10, g10, g11);
                    }
                    offset = offset2;
                } else {
                    q10 = j12;
                }
                j10 = j13;
            }
            if (1916 <= i10 && i10 < 2100) {
                ((ConcurrentHashMap) this.f30644h).putIfAbsent(valueOf, aVarArr);
            }
            return aVarArr;
        }
    }

    public static int c(long j10, ZoneOffset zoneOffset) {
        return LocalDate.ofEpochDay(Math.floorDiv(j10 + zoneOffset.getTotalSeconds(), 86400L)).getYear();
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Objects.equals(this.f30643g, cVar.f30643g) && Arrays.equals(this.f30637a, cVar.f30637a) && Arrays.equals(this.f30638b, cVar.f30638b) && Arrays.equals(this.f30639c, cVar.f30639c) && Arrays.equals(this.f30641e, cVar.f30641e) && Arrays.equals(this.f30642f, cVar.f30642f)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((((Objects.hashCode(this.f30643g) ^ Arrays.hashCode(this.f30637a)) ^ Arrays.hashCode(this.f30638b)) ^ Arrays.hashCode(this.f30639c)) ^ Arrays.hashCode(this.f30641e)) ^ Arrays.hashCode(this.f30642f);
    }

    public final String toString() {
        if (this.f30643g != null) {
            return "ZoneRules[timeZone=" + this.f30643g.getID() + "]";
        }
        StringBuilder sb2 = new StringBuilder("ZoneRules[currentStandardOffset=");
        ZoneOffset[] zoneOffsetArr = this.f30638b;
        sb2.append(zoneOffsetArr[zoneOffsetArr.length - 1]);
        sb2.append("]");
        return sb2.toString();
    }
}
