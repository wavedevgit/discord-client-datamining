package j$.time.format;

import j$.time.DateTimeException;
import j$.time.LocalDate;
import j$.time.LocalDateTime;
import j$.time.LocalTime;
import j$.time.ZoneOffset;
import j$.time.temporal.TemporalAccessor;
import java.text.ParsePosition;
import java.util.AbstractMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class g implements e {

    /* renamed from: b  reason: collision with root package name */
    public static volatile Map.Entry f30469b;

    /* renamed from: c  reason: collision with root package name */
    public static volatile Map.Entry f30470c;

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ int f30471a;

    public /* synthetic */ g(int i10) {
        this.f30471a = i10;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        switch (this.f30471a) {
            case 0:
                Long a10 = qVar.a(j$.time.temporal.a.INSTANT_SECONDS);
                TemporalAccessor temporalAccessor = qVar.f30502a;
                j$.time.temporal.a aVar = j$.time.temporal.a.NANO_OF_SECOND;
                Long valueOf = temporalAccessor.j(aVar) ? Long.valueOf(temporalAccessor.m(aVar)) : null;
                int i10 = 0;
                if (a10 == null) {
                    return false;
                }
                long longValue = a10.longValue();
                int a11 = aVar.f30532b.a(valueOf != null ? valueOf.longValue() : 0L, aVar);
                if (longValue >= -62167219200L) {
                    long j10 = longValue - 253402300800L;
                    long floorDiv = Math.floorDiv(j10, 315569520000L) + 1;
                    LocalDateTime B = LocalDateTime.B(Math.floorMod(j10, 315569520000L) - 62167219200L, 0, ZoneOffset.UTC);
                    if (floorDiv > 0) {
                        sb2.append('+');
                        sb2.append(floorDiv);
                    }
                    sb2.append(B);
                    if (B.f30410b.f30415c == 0) {
                        sb2.append(":00");
                    }
                } else {
                    long j11 = longValue + 62167219200L;
                    long j12 = j11 / 315569520000L;
                    long j13 = j11 % 315569520000L;
                    LocalDateTime B2 = LocalDateTime.B(j13 - 62167219200L, 0, ZoneOffset.UTC);
                    int length = sb2.length();
                    sb2.append(B2);
                    if (B2.f30410b.f30415c == 0) {
                        sb2.append(":00");
                    }
                    if (j12 < 0) {
                        if (B2.f30409a.getYear() == -10000) {
                            sb2.replace(length, length + 2, Long.toString(j12 - 1));
                        } else if (j13 == 0) {
                            sb2.insert(length, j12);
                        } else {
                            sb2.insert(length + 1, Math.abs(j12));
                        }
                    }
                }
                if (a11 > 0) {
                    sb2.append('.');
                    int i11 = 100000000;
                    while (true) {
                        if (a11 > 0 || i10 % 3 != 0 || i10 < -2) {
                            int i12 = a11 / i11;
                            sb2.append((char) (i12 + 48));
                            a11 -= i12 * i11;
                            i11 /= 10;
                            i10++;
                        }
                    }
                }
                sb2.append('Z');
                return true;
            default:
                j$.time.c cVar = DateTimeFormatterBuilder.f30454f;
                TemporalAccessor temporalAccessor2 = qVar.f30502a;
                Object a12 = temporalAccessor2.a(cVar);
                if (a12 == null && qVar.f30504c == 0) {
                    throw new DateTimeException("Unable to extract value: " + temporalAccessor2.getClass());
                }
                j$.time.k kVar = (j$.time.k) a12;
                if (kVar == null) {
                    return false;
                }
                sb2.append(kVar.r());
                return true;
        }
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        int i11;
        int i12 = 1;
        switch (this.f30471a) {
            case 0:
                DateTimeFormatterBuilder dateTimeFormatterBuilder = new DateTimeFormatterBuilder();
                dateTimeFormatterBuilder.a(DateTimeFormatter.ISO_LOCAL_DATE);
                dateTimeFormatterBuilder.c('T');
                j$.time.temporal.a aVar = j$.time.temporal.a.HOUR_OF_DAY;
                dateTimeFormatterBuilder.g(aVar, 2);
                dateTimeFormatterBuilder.c(':');
                j$.time.temporal.a aVar2 = j$.time.temporal.a.MINUTE_OF_HOUR;
                dateTimeFormatterBuilder.g(aVar2, 2);
                dateTimeFormatterBuilder.c(':');
                j$.time.temporal.a aVar3 = j$.time.temporal.a.SECOND_OF_MINUTE;
                dateTimeFormatterBuilder.g(aVar3, 2);
                j$.time.temporal.a aVar4 = j$.time.temporal.a.NANO_OF_SECOND;
                dateTimeFormatterBuilder.b(new f(aVar4));
                dateTimeFormatterBuilder.c('Z');
                d dVar = dateTimeFormatterBuilder.toFormatter().f30449a;
                if (dVar.f30465b) {
                    dVar = new d(dVar.f30464a, false);
                }
                o oVar2 = new o(oVar.f30494a);
                oVar2.f30495b = oVar.f30495b;
                oVar2.f30496c = oVar.f30496c;
                int t10 = dVar.t(oVar2, charSequence, i10);
                if (t10 < 0) {
                    return t10;
                }
                long longValue = oVar2.d(j$.time.temporal.a.YEAR).longValue();
                int intValue = oVar2.d(j$.time.temporal.a.MONTH_OF_YEAR).intValue();
                int intValue2 = oVar2.d(j$.time.temporal.a.DAY_OF_MONTH).intValue();
                int intValue3 = oVar2.d(aVar).intValue();
                int intValue4 = oVar2.d(aVar2).intValue();
                Long d10 = oVar2.d(aVar3);
                Long d11 = oVar2.d(aVar4);
                int intValue5 = d10 != null ? d10.intValue() : 0;
                int intValue6 = d11 != null ? d11.intValue() : 0;
                if (intValue3 == 24 && intValue4 == 0 && intValue5 == 0 && intValue6 == 0) {
                    intValue3 = 0;
                } else if (intValue3 == 23 && intValue4 == 59 && intValue5 == 60) {
                    oVar.c().f30511d = true;
                    i12 = 0;
                    intValue5 = 59;
                } else {
                    i12 = 0;
                }
                int i13 = ((int) longValue) % 10000;
                try {
                    LocalDateTime localDateTime = LocalDateTime.f30407c;
                    LocalDate of2 = LocalDate.of(i13, intValue, intValue2);
                    LocalTime of3 = LocalTime.of(intValue3, intValue4, intValue5, 0);
                    return oVar.f(aVar4, intValue6, i10, oVar.f(j$.time.temporal.a.INSTANT_SECONDS, new LocalDateTime(of2, of3).G(of2.F(i12), of3).q(ZoneOffset.UTC) + Math.multiplyExact(longValue / 10000, 315569520000L), i10, t10));
                } catch (RuntimeException unused) {
                    return ~i10;
                }
            default:
                int length = charSequence.length();
                if (i10 <= length) {
                    if (i10 != length) {
                        char charAt = charSequence.charAt(i10);
                        if (charAt == '+' || charAt == '-') {
                            return a(oVar, charSequence, i10, i10, i.f30479d);
                        }
                        int i14 = i10 + 2;
                        if (length >= i14) {
                            char charAt2 = charSequence.charAt(i10 + 1);
                            if (oVar.a(charAt, 'U') && oVar.a(charAt2, 'T')) {
                                int i15 = i10 + 3;
                                return (length < i15 || !oVar.a(charSequence.charAt(i14), 'C')) ? a(oVar, charSequence, i10, i14, i.f30480e) : a(oVar, charSequence, i10, i15, i.f30480e);
                            } else if (oVar.a(charAt, 'G') && length >= (i11 = i10 + 3) && oVar.a(charAt2, 'M') && oVar.a(charSequence.charAt(i14), 'T')) {
                                return a(oVar, charSequence, i10, i11, i.f30480e);
                            }
                        }
                        CopyOnWriteArrayList copyOnWriteArrayList = j$.time.zone.e.f30571b;
                        HashSet hashSet = new HashSet(((ConcurrentHashMap) j$.time.zone.e.f30572c).keySet());
                        int size = hashSet.size();
                        Map.Entry entry = oVar.f30495b ? f30469b : f30470c;
                        if (entry == null || ((Integer) entry.getKey()).intValue() != size) {
                            synchronized (this) {
                                try {
                                    entry = oVar.f30495b ? f30469b : f30470c;
                                    if (entry == null || ((Integer) entry.getKey()).intValue() != size) {
                                        Integer valueOf = Integer.valueOf(size);
                                        k kVar = oVar.f30495b ? new k("", null, null) : new k("", null, null);
                                        Iterator it = hashSet.iterator();
                                        while (it.hasNext()) {
                                            String str = (String) it.next();
                                            kVar.a(str, str);
                                        }
                                        entry = new AbstractMap.SimpleImmutableEntry(valueOf, kVar);
                                        if (oVar.f30495b) {
                                            f30469b = entry;
                                        } else {
                                            f30470c = entry;
                                        }
                                    }
                                } catch (Throwable th2) {
                                    throw th2;
                                }
                            }
                        }
                        ParsePosition parsePosition = new ParsePosition(i10);
                        String c10 = ((k) entry.getValue()).c(charSequence, parsePosition);
                        if (c10 != null) {
                            oVar.e(j$.time.k.w(c10));
                            return parsePosition.getIndex();
                        } else if (oVar.a(charAt, 'Z')) {
                            oVar.e(ZoneOffset.UTC);
                            return i10 + 1;
                        }
                    }
                    return ~i10;
                }
                throw new IndexOutOfBoundsException();
        }
    }

    public static int a(o oVar, CharSequence charSequence, int i10, int i11, i iVar) {
        String upperCase = charSequence.toString().substring(i10, i11).toUpperCase();
        if (i11 >= charSequence.length()) {
            oVar.e(j$.time.k.w(upperCase));
            return i11;
        } else if (charSequence.charAt(i11) != '0' && !oVar.a(charSequence.charAt(i11), 'Z')) {
            o oVar2 = new o(oVar.f30494a);
            oVar2.f30495b = oVar.f30495b;
            oVar2.f30496c = oVar.f30496c;
            int t10 = iVar.t(oVar2, charSequence, i11);
            try {
                if (t10 < 0) {
                    if (iVar == i.f30479d) {
                        return ~i10;
                    }
                    oVar.e(j$.time.k.w(upperCase));
                    return i11;
                }
                oVar.e(j$.time.k.x(upperCase, ZoneOffset.ofTotalSeconds((int) oVar2.d(j$.time.temporal.a.OFFSET_SECONDS).longValue())));
                return t10;
            } catch (DateTimeException unused) {
                return ~i10;
            }
        } else {
            oVar.e(j$.time.k.w(upperCase));
            return i11;
        }
    }

    public final String toString() {
        switch (this.f30471a) {
            case 0:
                return "Instant()";
            default:
                return "ZoneRegionId()";
        }
    }
}
