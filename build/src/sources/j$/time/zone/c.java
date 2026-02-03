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
    public static final long[] f31209i = new long[0];

    /* renamed from: j  reason: collision with root package name */
    public static final b[] f31210j = new b[0];

    /* renamed from: k  reason: collision with root package name */
    public static final LocalDateTime[] f31211k = new LocalDateTime[0];

    /* renamed from: l  reason: collision with root package name */
    public static final a[] f31212l = new a[0];

    /* renamed from: a  reason: collision with root package name */
    public final long[] f31213a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset[] f31214b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f31215c;

    /* renamed from: d  reason: collision with root package name */
    public final LocalDateTime[] f31216d;

    /* renamed from: e  reason: collision with root package name */
    public final ZoneOffset[] f31217e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f31218f;

    /* renamed from: g  reason: collision with root package name */
    public final TimeZone f31219g;

    /* renamed from: h  reason: collision with root package name */
    public final transient ConcurrentMap f31220h = new ConcurrentHashMap();

    public static Object a(LocalDateTime localDateTime, a aVar) {
        LocalDateTime localDateTime2 = aVar.f31206a;
        if (aVar.f31208c.getTotalSeconds() > aVar.f31207b.getTotalSeconds()) {
            if (localDateTime.w(localDateTime2)) {
                return aVar.f31207b;
            }
            LocalDateTime localDateTime3 = aVar.f31206a;
            if (!localDateTime.w(localDateTime3.E(localDateTime3.f31060a, 0L, 0L, aVar.f31208c.getTotalSeconds() - aVar.f31207b.getTotalSeconds(), 0L))) {
                return aVar.f31208c;
            }
        } else if (!localDateTime.w(localDateTime2)) {
            return aVar.f31208c;
        } else {
            LocalDateTime localDateTime4 = aVar.f31206a;
            if (localDateTime.w(localDateTime4.E(localDateTime4.f31060a, 0L, 0L, aVar.f31208c.getTotalSeconds() - aVar.f31207b.getTotalSeconds(), 0L))) {
                return aVar.f31207b;
            }
        }
        return aVar;
    }

    public c(ZoneOffset zoneOffset) {
        this.f31214b = r0;
        ZoneOffset[] zoneOffsetArr = {zoneOffset};
        long[] jArr = f31209i;
        this.f31213a = jArr;
        this.f31215c = jArr;
        this.f31216d = f31211k;
        this.f31217e = zoneOffsetArr;
        this.f31218f = f31210j;
        this.f31219g = null;
    }

    public c(TimeZone timeZone) {
        this.f31214b = r0;
        ZoneOffset[] zoneOffsetArr = {g(timeZone.getRawOffset())};
        long[] jArr = f31209i;
        this.f31213a = jArr;
        this.f31215c = jArr;
        this.f31216d = f31211k;
        this.f31217e = zoneOffsetArr;
        this.f31218f = f31210j;
        this.f31219g = timeZone;
    }

    public static ZoneOffset g(int i10) {
        return ZoneOffset.ofTotalSeconds(i10 / 1000);
    }

    public final ZoneOffset d(Instant instant) {
        long[] jArr;
        ZoneOffset[] zoneOffsetArr;
        long addExact;
        TimeZone timeZone = this.f31219g;
        if (timeZone == null) {
            if (this.f31215c.length == 0) {
                return this.f31214b[0];
            }
            long epochSecond = instant.getEpochSecond();
            if (this.f31218f.length > 0) {
                if (epochSecond > this.f31215c[jArr.length - 1]) {
                    a[] b10 = b(c(epochSecond, this.f31217e[zoneOffsetArr.length - 1]));
                    a aVar = null;
                    for (int i10 = 0; i10 < b10.length; i10++) {
                        aVar = b10[i10];
                        if (epochSecond < aVar.f31206a.q(aVar.f31207b)) {
                            return aVar.f31207b;
                        }
                    }
                    return aVar.f31208c;
                }
            }
            int binarySearch = Arrays.binarySearch(this.f31215c, epochSecond);
            if (binarySearch < 0) {
                binarySearch = (-binarySearch) - 2;
            }
            return this.f31217e[binarySearch + 1];
        }
        long j10 = instant.f31053a;
        if (j10 < 0 && instant.f31054b > 0) {
            addExact = Math.addExact(Math.multiplyExact(j10 + 1, 1000L), (instant.f31054b / 1000000) - 1000);
        } else {
            addExact = Math.addExact(Math.multiplyExact(j10, 1000L), instant.f31054b / 1000000);
        }
        return g(timeZone.getOffset(addExact));
    }

    public final List f(LocalDateTime localDateTime) {
        Object e10 = e(localDateTime);
        if (e10 instanceof a) {
            a aVar = (a) e10;
            if (aVar.f31208c.getTotalSeconds() > aVar.f31207b.getTotalSeconds()) {
                return Collections.EMPTY_LIST;
            }
            return Arrays.asList(aVar.f31207b, aVar.f31208c);
        }
        return Collections.singletonList((ZoneOffset) e10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:27:0x0064, code lost:
        if (r8.r(r0) > 0) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:33:0x0087, code lost:
        if (r8.f31061b.G() <= r0.f31061b.G()) goto L47;
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
        a[] aVarArr = f31212l;
        Integer valueOf = Integer.valueOf(i10);
        a[] aVarArr2 = (a[]) ((ConcurrentHashMap) this.f31220h).get(valueOf);
        if (aVarArr2 != null) {
            return aVarArr2;
        }
        if (this.f31219g == null) {
            b[] bVarArr = this.f31218f;
            a[] aVarArr3 = new a[bVarArr.length];
            if (bVarArr.length > 0) {
                b bVar = bVarArr[0];
                throw null;
            }
            if (i10 < 2100) {
                ((ConcurrentHashMap) this.f31220h).putIfAbsent(valueOf, aVarArr3);
            }
            return aVarArr3;
        } else if (i10 < 1800) {
            return aVarArr;
        } else {
            LocalDateTime localDateTime = LocalDateTime.f31058c;
            LocalDate of2 = LocalDate.of(i10 - 1, 12, 31);
            LocalTime localTime = LocalTime.MIN;
            j$.time.temporal.a.HOUR_OF_DAY.E(0);
            long q10 = new LocalDateTime(of2, LocalTime.f31063f[0]).q(this.f31214b[0]);
            long j10 = 1000;
            int offset = this.f31219g.getOffset(q10 * 1000);
            long j11 = 31968000 + q10;
            while (q10 < j11) {
                long j12 = 7776000 + q10;
                long j13 = j10;
                if (offset != this.f31219g.getOffset(j12 * j13)) {
                    while (j12 - q10 > 1) {
                        long j14 = q10;
                        long floorDiv = Math.floorDiv(j12 + q10, 2L);
                        if (this.f31219g.getOffset(floorDiv * j13) == offset) {
                            q10 = floorDiv;
                        } else {
                            j12 = floorDiv;
                            q10 = j14;
                        }
                    }
                    long j15 = q10;
                    q10 = this.f31219g.getOffset(j15 * j13) != offset ? j15 : j12;
                    ZoneOffset g10 = g(offset);
                    int offset2 = this.f31219g.getOffset(q10 * j13);
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
                ((ConcurrentHashMap) this.f31220h).putIfAbsent(valueOf, aVarArr);
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
            if (Objects.equals(this.f31219g, cVar.f31219g) && Arrays.equals(this.f31213a, cVar.f31213a) && Arrays.equals(this.f31214b, cVar.f31214b) && Arrays.equals(this.f31215c, cVar.f31215c) && Arrays.equals(this.f31217e, cVar.f31217e) && Arrays.equals(this.f31218f, cVar.f31218f)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((((Objects.hashCode(this.f31219g) ^ Arrays.hashCode(this.f31213a)) ^ Arrays.hashCode(this.f31214b)) ^ Arrays.hashCode(this.f31215c)) ^ Arrays.hashCode(this.f31217e)) ^ Arrays.hashCode(this.f31218f);
    }

    public final String toString() {
        if (this.f31219g != null) {
            return "ZoneRules[timeZone=" + this.f31219g.getID() + "]";
        }
        StringBuilder sb2 = new StringBuilder("ZoneRules[currentStandardOffset=");
        ZoneOffset[] zoneOffsetArr = this.f31214b;
        sb2.append(zoneOffsetArr[zoneOffsetArr.length - 1]);
        sb2.append("]");
        return sb2.toString();
    }
}
