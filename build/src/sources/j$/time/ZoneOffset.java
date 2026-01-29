package j$.time;

import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import java.io.Serializable;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class ZoneOffset extends k implements TemporalAccessor, j$.time.temporal.l, Comparable<ZoneOffset>, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final int f31526a;

    /* renamed from: b  reason: collision with root package name */
    public final transient String f31527b;

    /* renamed from: c  reason: collision with root package name */
    public static final ConcurrentMap f31522c = new ConcurrentHashMap(16, 0.75f, 4);

    /* renamed from: d  reason: collision with root package name */
    public static final ConcurrentMap f31523d = new ConcurrentHashMap(16, 0.75f, 4);
    public static final ZoneOffset UTC = ofTotalSeconds(0);

    /* renamed from: e  reason: collision with root package name */
    public static final ZoneOffset f31524e = ofTotalSeconds(-64800);

    /* renamed from: f  reason: collision with root package name */
    public static final ZoneOffset f31525f = ofTotalSeconds(64800);

    @Override // java.lang.Comparable
    public final int compareTo(ZoneOffset zoneOffset) {
        return zoneOffset.f31526a - this.f31526a;
    }

    /* JADX WARN: Removed duplicated region for block: B:28:0x0091 A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:33:0x00a2  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x00aa  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static j$.time.ZoneOffset C(java.lang.String r7) {
        /*
            java.lang.String r0 = "offsetId"
            java.util.Objects.requireNonNull(r7, r0)
            java.util.concurrent.ConcurrentMap r0 = j$.time.ZoneOffset.f31523d
            java.util.concurrent.ConcurrentHashMap r0 = (java.util.concurrent.ConcurrentHashMap) r0
            java.lang.Object r0 = r0.get(r7)
            j$.time.ZoneOffset r0 = (j$.time.ZoneOffset) r0
            if (r0 == 0) goto L12
            return r0
        L12:
            int r0 = r7.length()
            r1 = 2
            r2 = 1
            r3 = 0
            if (r0 == r1) goto L65
            r1 = 3
            if (r0 == r1) goto L81
            r4 = 5
            if (r0 == r4) goto L5c
            r5 = 6
            r6 = 4
            if (r0 == r5) goto L52
            r5 = 7
            if (r0 == r5) goto L45
            r1 = 9
            if (r0 != r1) goto L39
            int r0 = E(r7, r2, r3)
            int r1 = E(r7, r6, r2)
            int r2 = E(r7, r5, r2)
            goto L87
        L39:
            j$.time.DateTimeException r0 = new j$.time.DateTimeException
            java.lang.String r1 = "Invalid ID for ZoneOffset, invalid format: "
            java.lang.String r7 = r1.concat(r7)
            r0.<init>(r7)
            throw r0
        L45:
            int r0 = E(r7, r2, r3)
            int r1 = E(r7, r1, r3)
            int r2 = E(r7, r4, r3)
            goto L87
        L52:
            int r0 = E(r7, r2, r3)
            int r1 = E(r7, r6, r2)
        L5a:
            r2 = r3
            goto L87
        L5c:
            int r0 = E(r7, r2, r3)
            int r1 = E(r7, r1, r3)
            goto L5a
        L65:
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            char r1 = r7.charAt(r3)
            r0.append(r1)
            java.lang.String r1 = "0"
            r0.append(r1)
            char r7 = r7.charAt(r2)
            r0.append(r7)
            java.lang.String r7 = r0.toString()
        L81:
            int r0 = E(r7, r2, r3)
            r1 = r3
            r2 = r1
        L87:
            char r3 = r7.charAt(r3)
            r4 = 43
            r5 = 45
            if (r3 == r4) goto La0
            if (r3 != r5) goto L94
            goto La0
        L94:
            j$.time.DateTimeException r0 = new j$.time.DateTimeException
            java.lang.String r1 = "Invalid ID for ZoneOffset, plus/minus not found when expected: "
            java.lang.String r7 = r1.concat(r7)
            r0.<init>(r7)
            throw r0
        La0:
            if (r3 != r5) goto Laa
            int r7 = -r0
            int r0 = -r1
            int r1 = -r2
            j$.time.ZoneOffset r7 = ofHoursMinutesSeconds(r7, r0, r1)
            return r7
        Laa:
            j$.time.ZoneOffset r7 = ofHoursMinutesSeconds(r0, r1, r2)
            return r7
        */
        throw new UnsupportedOperationException("Method not decompiled: j$.time.ZoneOffset.C(java.lang.String):j$.time.ZoneOffset");
    }

    @Override // j$.time.k
    public final j$.time.zone.c t() {
        return new j$.time.zone.c(this);
    }

    public static int E(CharSequence charSequence, int i10, boolean z10) {
        if (z10) {
            String str = (String) charSequence;
            if (str.charAt(i10 - 1) != ':') {
                throw new DateTimeException("Invalid ID for ZoneOffset, colon not found when expected: " + ((Object) str));
            }
        }
        String str2 = (String) charSequence;
        char charAt = str2.charAt(i10);
        char charAt2 = str2.charAt(i10 + 1);
        if (charAt >= '0' && charAt <= '9' && charAt2 >= '0' && charAt2 <= '9') {
            return (charAt2 - '0') + ((charAt - '0') * 10);
        }
        throw new DateTimeException("Invalid ID for ZoneOffset, non numeric characters found: " + ((Object) str2));
    }

    public static ZoneOffset from(TemporalAccessor temporalAccessor) {
        Objects.requireNonNull(temporalAccessor, "temporal");
        ZoneOffset zoneOffset = (ZoneOffset) temporalAccessor.a(o.f31648d);
        if (zoneOffset != null) {
            return zoneOffset;
        }
        throw new DateTimeException("Unable to obtain ZoneOffset from TemporalAccessor: " + temporalAccessor + " of type " + temporalAccessor.getClass().getName());
    }

    public static ZoneOffset ofHoursMinutesSeconds(int i10, int i11, int i12) {
        if (i10 < -18 || i10 > 18) {
            throw new DateTimeException("Zone offset hours not in valid range: value " + i10 + " is not in the range -18 to 18");
        }
        if (i10 > 0) {
            if (i11 < 0 || i12 < 0) {
                throw new DateTimeException("Zone offset minutes and seconds must be positive because hours is positive");
            }
        } else if (i10 < 0) {
            if (i11 > 0 || i12 > 0) {
                throw new DateTimeException("Zone offset minutes and seconds must be negative because hours is negative");
            }
        } else if ((i11 > 0 && i12 < 0) || (i11 < 0 && i12 > 0)) {
            throw new DateTimeException("Zone offset minutes and seconds must have the same sign");
        }
        if (i11 < -59 || i11 > 59) {
            throw new DateTimeException("Zone offset minutes not in valid range: value " + i11 + " is not in the range -59 to 59");
        } else if (i12 < -59 || i12 > 59) {
            throw new DateTimeException("Zone offset seconds not in valid range: value " + i12 + " is not in the range -59 to 59");
        } else if (Math.abs(i10) != 18 || (i11 | i12) == 0) {
            return ofTotalSeconds((i11 * 60) + (i10 * 3600) + i12);
        } else {
            throw new DateTimeException("Zone offset not in valid range: -18:00 to +18:00");
        }
    }

    public static ZoneOffset ofTotalSeconds(int i10) {
        if (i10 < -64800 || i10 > 64800) {
            throw new DateTimeException("Zone offset not in valid range: -18:00 to +18:00");
        }
        if (i10 % 900 == 0) {
            Integer valueOf = Integer.valueOf(i10);
            ConcurrentMap concurrentMap = f31522c;
            ZoneOffset zoneOffset = (ZoneOffset) ((ConcurrentHashMap) concurrentMap).get(valueOf);
            if (zoneOffset == null) {
                ((ConcurrentHashMap) concurrentMap).putIfAbsent(valueOf, new ZoneOffset(i10));
                ZoneOffset zoneOffset2 = (ZoneOffset) ((ConcurrentHashMap) concurrentMap).get(valueOf);
                ((ConcurrentHashMap) f31523d).putIfAbsent(zoneOffset2.f31527b, zoneOffset2);
                return zoneOffset2;
            }
            return zoneOffset;
        }
        return new ZoneOffset(i10);
    }

    public ZoneOffset(int i10) {
        String sb2;
        this.f31526a = i10;
        if (i10 == 0) {
            sb2 = "Z";
        } else {
            int abs = Math.abs(i10);
            StringBuilder sb3 = new StringBuilder();
            int i11 = abs / 3600;
            int i12 = (abs / 60) % 60;
            sb3.append(i10 < 0 ? "-" : "+");
            sb3.append(i11 < 10 ? "0" : "");
            sb3.append(i11);
            sb3.append(i12 < 10 ? ":0" : ":");
            sb3.append(i12);
            int i13 = abs % 60;
            if (i13 != 0) {
                sb3.append(i13 < 10 ? ":0" : ":");
                sb3.append(i13);
            }
            sb2 = sb3.toString();
        }
        this.f31527b = sb2;
    }

    public int getTotalSeconds() {
        return this.f31526a;
    }

    @Override // j$.time.k
    public final String r() {
        return this.f31527b;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        return nVar instanceof j$.time.temporal.a ? nVar == j$.time.temporal.a.OFFSET_SECONDS : nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(j$.time.temporal.n nVar) {
        if (nVar == j$.time.temporal.a.OFFSET_SECONDS) {
            return this.f31526a;
        }
        if (nVar != null) {
            throw new DateTimeException("Unsupported field: " + nVar);
        }
        return super.i(nVar).a(m(nVar), nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        if (nVar == j$.time.temporal.a.OFFSET_SECONDS) {
            return this.f31526a;
        }
        if (nVar instanceof j$.time.temporal.a) {
            throw new DateTimeException("Unsupported field: " + nVar);
        }
        return nVar.B(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        return (temporalQuery == o.f31648d || temporalQuery == o.f31649e) ? this : super.a(temporalQuery);
    }

    @Override // j$.time.temporal.l
    public final j$.time.temporal.k d(j$.time.temporal.k kVar) {
        return kVar.b(this.f31526a, j$.time.temporal.a.OFFSET_SECONDS);
    }

    @Override // j$.time.k
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof ZoneOffset) && this.f31526a == ((ZoneOffset) obj).f31526a;
    }

    @Override // j$.time.k
    public int hashCode() {
        return this.f31526a;
    }

    @Override // j$.time.k
    public String toString() {
        return this.f31527b;
    }
}
