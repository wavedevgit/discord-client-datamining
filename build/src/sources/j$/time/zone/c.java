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
    public static final long[] f29833i = new long[0];

    /* renamed from: j  reason: collision with root package name */
    public static final b[] f29834j = new b[0];

    /* renamed from: k  reason: collision with root package name */
    public static final LocalDateTime[] f29835k = new LocalDateTime[0];

    /* renamed from: l  reason: collision with root package name */
    public static final a[] f29836l = new a[0];

    /* renamed from: a  reason: collision with root package name */
    public final long[] f29837a;

    /* renamed from: b  reason: collision with root package name */
    public final ZoneOffset[] f29838b;

    /* renamed from: c  reason: collision with root package name */
    public final long[] f29839c;

    /* renamed from: d  reason: collision with root package name */
    public final LocalDateTime[] f29840d;

    /* renamed from: e  reason: collision with root package name */
    public final ZoneOffset[] f29841e;

    /* renamed from: f  reason: collision with root package name */
    public final b[] f29842f;

    /* renamed from: g  reason: collision with root package name */
    public final TimeZone f29843g;

    /* renamed from: h  reason: collision with root package name */
    public final transient ConcurrentMap f29844h = new ConcurrentHashMap();

    public static Object a(LocalDateTime localDateTime, a aVar) {
        LocalDateTime localDateTime2 = aVar.f29830a;
        if (aVar.f29832c.getTotalSeconds() > aVar.f29831b.getTotalSeconds()) {
            if (localDateTime.w(localDateTime2)) {
                return aVar.f29831b;
            }
            LocalDateTime localDateTime3 = aVar.f29830a;
            if (!localDateTime.w(localDateTime3.E(localDateTime3.f29687a, 0L, 0L, aVar.f29832c.getTotalSeconds() - aVar.f29831b.getTotalSeconds(), 0L))) {
                return aVar.f29832c;
            }
        } else if (!localDateTime.w(localDateTime2)) {
            return aVar.f29832c;
        } else {
            LocalDateTime localDateTime4 = aVar.f29830a;
            if (localDateTime.w(localDateTime4.E(localDateTime4.f29687a, 0L, 0L, aVar.f29832c.getTotalSeconds() - aVar.f29831b.getTotalSeconds(), 0L))) {
                return aVar.f29831b;
            }
        }
        return aVar;
    }

    public c(ZoneOffset zoneOffset) {
        this.f29838b = r0;
        ZoneOffset[] zoneOffsetArr = {zoneOffset};
        long[] jArr = f29833i;
        this.f29837a = jArr;
        this.f29839c = jArr;
        this.f29840d = f29835k;
        this.f29841e = zoneOffsetArr;
        this.f29842f = f29834j;
        this.f29843g = null;
    }

    public c(TimeZone timeZone) {
        this.f29838b = r0;
        ZoneOffset[] zoneOffsetArr = {g(timeZone.getRawOffset())};
        long[] jArr = f29833i;
        this.f29837a = jArr;
        this.f29839c = jArr;
        this.f29840d = f29835k;
        this.f29841e = zoneOffsetArr;
        this.f29842f = f29834j;
        this.f29843g = timeZone;
    }

    public static ZoneOffset g(int i10) {
        return ZoneOffset.ofTotalSeconds(i10 / 1000);
    }

    public final ZoneOffset d(Instant instant) {
        long[] jArr;
        ZoneOffset[] zoneOffsetArr;
        long addExact;
        TimeZone timeZone = this.f29843g;
        if (timeZone == null) {
            if (this.f29839c.length == 0) {
                return this.f29838b[0];
            }
            long epochSecond = instant.getEpochSecond();
            if (this.f29842f.length > 0) {
                if (epochSecond > this.f29839c[jArr.length - 1]) {
                    a[] b10 = b(c(epochSecond, this.f29841e[zoneOffsetArr.length - 1]));
                    a aVar = null;
                    for (int i10 = 0; i10 < b10.length; i10++) {
                        aVar = b10[i10];
                        if (epochSecond < aVar.f29830a.q(aVar.f29831b)) {
                            return aVar.f29831b;
                        }
                    }
                    return aVar.f29832c;
                }
            }
            int binarySearch = Arrays.binarySearch(this.f29839c, epochSecond);
            if (binarySearch < 0) {
                binarySearch = (-binarySearch) - 2;
            }
            return this.f29841e[binarySearch + 1];
        }
        long j10 = instant.f29680a;
        if (j10 < 0 && instant.f29681b > 0) {
            addExact = Math.addExact(Math.multiplyExact(j10 + 1, 1000L), (instant.f29681b / 1000000) - 1000);
        } else {
            addExact = Math.addExact(Math.multiplyExact(j10, 1000L), instant.f29681b / 1000000);
        }
        return g(timeZone.getOffset(addExact));
    }

    public final List f(LocalDateTime localDateTime) {
        Object e10 = e(localDateTime);
        if (e10 instanceof a) {
            a aVar = (a) e10;
            if (aVar.f29832c.getTotalSeconds() > aVar.f29831b.getTotalSeconds()) {
                return Collections.EMPTY_LIST;
            }
            return Arrays.asList(aVar.f29831b, aVar.f29832c);
        }
        return Collections.singletonList((ZoneOffset) e10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:27:0x0064, code lost:
        if (r8.r(r0) > 0) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:33:0x0087, code lost:
        if (r8.f29688b.G() <= r0.f29688b.G()) goto L47;
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
        a[] aVarArr = f29836l;
        Integer valueOf = Integer.valueOf(i10);
        a[] aVarArr2 = (a[]) ((ConcurrentHashMap) this.f29844h).get(valueOf);
        if (aVarArr2 != null) {
            return aVarArr2;
        }
        if (this.f29843g == null) {
            b[] bVarArr = this.f29842f;
            a[] aVarArr3 = new a[bVarArr.length];
            if (bVarArr.length > 0) {
                b bVar = bVarArr[0];
                throw null;
            }
            if (i10 < 2100) {
                ((ConcurrentHashMap) this.f29844h).putIfAbsent(valueOf, aVarArr3);
            }
            return aVarArr3;
        } else if (i10 < 1800) {
            return aVarArr;
        } else {
            LocalDateTime localDateTime = LocalDateTime.f29685c;
            LocalDate of2 = LocalDate.of(i10 - 1, 12, 31);
            LocalTime localTime = LocalTime.MIN;
            j$.time.temporal.a.HOUR_OF_DAY.E(0);
            long q10 = new LocalDateTime(of2, LocalTime.f29690f[0]).q(this.f29838b[0]);
            long j10 = 1000;
            int offset = this.f29843g.getOffset(q10 * 1000);
            long j11 = 31968000 + q10;
            while (q10 < j11) {
                long j12 = 7776000 + q10;
                long j13 = j10;
                if (offset != this.f29843g.getOffset(j12 * j13)) {
                    while (j12 - q10 > 1) {
                        long j14 = q10;
                        long floorDiv = Math.floorDiv(j12 + q10, 2L);
                        if (this.f29843g.getOffset(floorDiv * j13) == offset) {
                            q10 = floorDiv;
                        } else {
                            j12 = floorDiv;
                            q10 = j14;
                        }
                    }
                    long j15 = q10;
                    q10 = this.f29843g.getOffset(j15 * j13) != offset ? j15 : j12;
                    ZoneOffset g10 = g(offset);
                    int offset2 = this.f29843g.getOffset(q10 * j13);
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
                ((ConcurrentHashMap) this.f29844h).putIfAbsent(valueOf, aVarArr);
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
            if (Objects.equals(this.f29843g, cVar.f29843g) && Arrays.equals(this.f29837a, cVar.f29837a) && Arrays.equals(this.f29838b, cVar.f29838b) && Arrays.equals(this.f29839c, cVar.f29839c) && Arrays.equals(this.f29841e, cVar.f29841e) && Arrays.equals(this.f29842f, cVar.f29842f)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((((Objects.hashCode(this.f29843g) ^ Arrays.hashCode(this.f29837a)) ^ Arrays.hashCode(this.f29838b)) ^ Arrays.hashCode(this.f29839c)) ^ Arrays.hashCode(this.f29841e)) ^ Arrays.hashCode(this.f29842f);
    }

    public final String toString() {
        if (this.f29843g != null) {
            return "ZoneRules[timeZone=" + this.f29843g.getID() + "]";
        }
        StringBuilder sb2 = new StringBuilder("ZoneRules[currentStandardOffset=");
        ZoneOffset[] zoneOffsetArr = this.f29838b;
        sb2.append(zoneOffsetArr[zoneOffsetArr.length - 1]);
        sb2.append("]");
        return sb2.toString();
    }
}
