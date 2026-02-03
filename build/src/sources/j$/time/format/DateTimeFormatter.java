package j$.time.format;

import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import java.io.IOException;
import java.util.HashMap;
import java.util.Locale;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class DateTimeFormatter {
    public static final DateTimeFormatter ISO_LOCAL_DATE;

    /* renamed from: f  reason: collision with root package name */
    public static final DateTimeFormatter f31098f;

    /* renamed from: g  reason: collision with root package name */
    public static final DateTimeFormatter f31099g;

    /* renamed from: a  reason: collision with root package name */
    public final d f31100a;

    /* renamed from: b  reason: collision with root package name */
    public final Locale f31101b;

    /* renamed from: c  reason: collision with root package name */
    public final t f31102c;

    /* renamed from: d  reason: collision with root package name */
    public final v f31103d;

    /* renamed from: e  reason: collision with root package name */
    public final j$.time.chrono.j f31104e;

    static {
        DateTimeFormatterBuilder dateTimeFormatterBuilder = new DateTimeFormatterBuilder();
        j$.time.temporal.a aVar = j$.time.temporal.a.YEAR;
        w wVar = w.EXCEEDS_PAD;
        dateTimeFormatterBuilder.h(aVar, 4, 10, wVar);
        dateTimeFormatterBuilder.c('-');
        j$.time.temporal.a aVar2 = j$.time.temporal.a.MONTH_OF_YEAR;
        dateTimeFormatterBuilder.g(aVar2, 2);
        dateTimeFormatterBuilder.c('-');
        j$.time.temporal.a aVar3 = j$.time.temporal.a.DAY_OF_MONTH;
        dateTimeFormatterBuilder.g(aVar3, 2);
        v vVar = v.STRICT;
        j$.time.chrono.k kVar = j$.time.chrono.k.f31092a;
        DateTimeFormatter k10 = dateTimeFormatterBuilder.k(vVar, kVar);
        ISO_LOCAL_DATE = k10;
        DateTimeFormatterBuilder parseCaseInsensitive = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive.a(k10);
        parseCaseInsensitive.appendOffsetId().k(vVar, kVar);
        DateTimeFormatterBuilder parseCaseInsensitive2 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive2.a(k10);
        parseCaseInsensitive2.j();
        parseCaseInsensitive2.appendOffsetId().k(vVar, kVar);
        DateTimeFormatterBuilder dateTimeFormatterBuilder2 = new DateTimeFormatterBuilder();
        j$.time.temporal.a aVar4 = j$.time.temporal.a.HOUR_OF_DAY;
        dateTimeFormatterBuilder2.g(aVar4, 2);
        dateTimeFormatterBuilder2.c(':');
        j$.time.temporal.a aVar5 = j$.time.temporal.a.MINUTE_OF_HOUR;
        dateTimeFormatterBuilder2.g(aVar5, 2);
        dateTimeFormatterBuilder2.j();
        dateTimeFormatterBuilder2.c(':');
        j$.time.temporal.a aVar6 = j$.time.temporal.a.SECOND_OF_MINUTE;
        dateTimeFormatterBuilder2.g(aVar6, 2);
        dateTimeFormatterBuilder2.j();
        dateTimeFormatterBuilder2.b(new f(j$.time.temporal.a.NANO_OF_SECOND));
        DateTimeFormatter k11 = dateTimeFormatterBuilder2.k(vVar, null);
        f31098f = k11;
        DateTimeFormatterBuilder parseCaseInsensitive3 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive3.a(k11);
        parseCaseInsensitive3.appendOffsetId().k(vVar, null);
        DateTimeFormatterBuilder parseCaseInsensitive4 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive4.a(k11);
        parseCaseInsensitive4.j();
        parseCaseInsensitive4.appendOffsetId().k(vVar, null);
        DateTimeFormatterBuilder parseCaseInsensitive5 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive5.a(k10);
        parseCaseInsensitive5.c('T');
        parseCaseInsensitive5.a(k11);
        DateTimeFormatter k12 = parseCaseInsensitive5.k(vVar, kVar);
        DateTimeFormatterBuilder parseCaseInsensitive6 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive6.a(k12);
        DateTimeFormatter k13 = parseCaseInsensitive6.appendOffsetId().k(vVar, kVar);
        DateTimeFormatterBuilder dateTimeFormatterBuilder3 = new DateTimeFormatterBuilder();
        dateTimeFormatterBuilder3.a(k13);
        dateTimeFormatterBuilder3.j();
        dateTimeFormatterBuilder3.c('[');
        l lVar = l.SENSITIVE;
        dateTimeFormatterBuilder3.b(lVar);
        dateTimeFormatterBuilder3.b(new g(1));
        dateTimeFormatterBuilder3.c(']');
        dateTimeFormatterBuilder3.k(vVar, kVar);
        DateTimeFormatterBuilder dateTimeFormatterBuilder4 = new DateTimeFormatterBuilder();
        dateTimeFormatterBuilder4.a(k12);
        dateTimeFormatterBuilder4.j();
        DateTimeFormatterBuilder appendOffsetId = dateTimeFormatterBuilder4.appendOffsetId();
        appendOffsetId.j();
        appendOffsetId.c('[');
        appendOffsetId.b(lVar);
        appendOffsetId.b(new g(1));
        appendOffsetId.c(']');
        appendOffsetId.k(vVar, kVar);
        DateTimeFormatterBuilder parseCaseInsensitive7 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive7.h(aVar, 4, 10, wVar);
        parseCaseInsensitive7.c('-');
        parseCaseInsensitive7.g(j$.time.temporal.a.DAY_OF_YEAR, 3);
        parseCaseInsensitive7.j();
        parseCaseInsensitive7.appendOffsetId().k(vVar, kVar);
        DateTimeFormatterBuilder parseCaseInsensitive8 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive8.h(j$.time.temporal.j.f31193c, 4, 10, wVar);
        parseCaseInsensitive8.d("-W");
        parseCaseInsensitive8.g(j$.time.temporal.j.f31192b, 2);
        parseCaseInsensitive8.c('-');
        j$.time.temporal.a aVar7 = j$.time.temporal.a.DAY_OF_WEEK;
        parseCaseInsensitive8.g(aVar7, 1);
        parseCaseInsensitive8.j();
        parseCaseInsensitive8.appendOffsetId().k(vVar, kVar);
        DateTimeFormatterBuilder parseCaseInsensitive9 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive9.getClass();
        parseCaseInsensitive9.b(new g(0));
        f31099g = parseCaseInsensitive9.k(vVar, null);
        DateTimeFormatterBuilder parseCaseInsensitive10 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive10.g(aVar, 4);
        parseCaseInsensitive10.g(aVar2, 2);
        parseCaseInsensitive10.g(aVar3, 2);
        parseCaseInsensitive10.j();
        parseCaseInsensitive10.appendOffset("+HHMMss", "Z").k(vVar, kVar);
        HashMap hashMap = new HashMap();
        hashMap.put(1L, "Mon");
        hashMap.put(2L, "Tue");
        hashMap.put(3L, "Wed");
        hashMap.put(4L, "Thu");
        hashMap.put(5L, "Fri");
        hashMap.put(6L, "Sat");
        hashMap.put(7L, "Sun");
        HashMap hashMap2 = new HashMap();
        hashMap2.put(1L, "Jan");
        hashMap2.put(2L, "Feb");
        hashMap2.put(3L, "Mar");
        hashMap2.put(4L, "Apr");
        hashMap2.put(5L, "May");
        hashMap2.put(6L, "Jun");
        hashMap2.put(7L, "Jul");
        hashMap2.put(8L, "Aug");
        hashMap2.put(9L, "Sep");
        hashMap2.put(10L, "Oct");
        hashMap2.put(11L, "Nov");
        hashMap2.put(12L, "Dec");
        DateTimeFormatterBuilder parseCaseInsensitive11 = new DateTimeFormatterBuilder().parseCaseInsensitive();
        parseCaseInsensitive11.b(l.LENIENT);
        parseCaseInsensitive11.j();
        parseCaseInsensitive11.e(aVar7, hashMap);
        parseCaseInsensitive11.d(", ");
        parseCaseInsensitive11.i();
        parseCaseInsensitive11.h(aVar3, 1, 2, w.NOT_NEGATIVE);
        parseCaseInsensitive11.c(' ');
        parseCaseInsensitive11.e(aVar2, hashMap2);
        parseCaseInsensitive11.c(' ');
        parseCaseInsensitive11.g(aVar, 4);
        parseCaseInsensitive11.c(' ');
        parseCaseInsensitive11.g(aVar4, 2);
        parseCaseInsensitive11.c(':');
        parseCaseInsensitive11.g(aVar5, 2);
        parseCaseInsensitive11.j();
        parseCaseInsensitive11.c(':');
        parseCaseInsensitive11.g(aVar6, 2);
        parseCaseInsensitive11.i();
        parseCaseInsensitive11.c(' ');
        parseCaseInsensitive11.appendOffset("+HHMM", "GMT").k(v.SMART, kVar);
    }

    public DateTimeFormatter(d dVar, Locale locale, v vVar, j$.time.chrono.j jVar) {
        t tVar = t.f31158a;
        this.f31100a = dVar;
        Objects.requireNonNull(locale, "locale");
        this.f31101b = locale;
        this.f31102c = tVar;
        Objects.requireNonNull(vVar, "resolverStyle");
        this.f31103d = vVar;
        this.f31104e = jVar;
    }

    public final String a(TemporalAccessor temporalAccessor) {
        StringBuilder sb2 = new StringBuilder(32);
        try {
            this.f31100a.r(new q(temporalAccessor, this), sb2);
            return sb2.toString();
        } catch (IOException e10) {
            throw new RuntimeException(e10.getMessage(), e10);
        }
    }

    public <T> T parse(CharSequence charSequence, TemporalQuery<T> temporalQuery) {
        String charSequence2;
        Objects.requireNonNull(charSequence, "text");
        Objects.requireNonNull(temporalQuery, "query");
        try {
            return (T) b(charSequence).a(temporalQuery);
        } catch (DateTimeParseException e10) {
            throw e10;
        } catch (RuntimeException e11) {
            if (charSequence.length() > 64) {
                charSequence2 = charSequence.subSequence(0, 64).toString() + "...";
            } else {
                charSequence2 = charSequence.toString();
            }
            RuntimeException runtimeException = new RuntimeException("Text '" + charSequence2 + "' could not be parsed: " + e11.getMessage(), e11);
            charSequence.toString();
            throw runtimeException;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:131:0x030c, code lost:
        if (((java.util.HashMap) r9.f31159a).containsKey(j$.time.temporal.a.SECOND_OF_MINUTE) != false) goto L104;
     */
    /* JADX WARN: Removed duplicated region for block: B:101:0x0277  */
    /* JADX WARN: Removed duplicated region for block: B:108:0x02a1  */
    /* JADX WARN: Removed duplicated region for block: B:111:0x02a8  */
    /* JADX WARN: Removed duplicated region for block: B:118:0x02c8  */
    /* JADX WARN: Removed duplicated region for block: B:123:0x02d6  */
    /* JADX WARN: Removed duplicated region for block: B:126:0x02ea  */
    /* JADX WARN: Removed duplicated region for block: B:138:0x0364  */
    /* JADX WARN: Removed duplicated region for block: B:142:0x036c  */
    /* JADX WARN: Removed duplicated region for block: B:144:0x0388  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final j$.time.format.u b(java.lang.CharSequence r27) {
        /*
            Method dump skipped, instructions count: 1068
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: j$.time.format.DateTimeFormatter.b(java.lang.CharSequence):j$.time.format.u");
    }

    public final String toString() {
        String dVar = this.f31100a.toString();
        return dVar.startsWith("[") ? dVar : dVar.substring(1, dVar.length() - 1);
    }
}
