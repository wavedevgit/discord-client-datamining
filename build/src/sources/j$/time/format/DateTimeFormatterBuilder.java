package j$.time.format;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class DateTimeFormatterBuilder {

    /* renamed from: f  reason: collision with root package name */
    public static final j$.time.c f30454f = new j$.time.c(2);

    /* renamed from: a  reason: collision with root package name */
    public DateTimeFormatterBuilder f30455a;

    /* renamed from: b  reason: collision with root package name */
    public final DateTimeFormatterBuilder f30456b;

    /* renamed from: c  reason: collision with root package name */
    public final List f30457c;

    /* renamed from: d  reason: collision with root package name */
    public final boolean f30458d;

    /* renamed from: e  reason: collision with root package name */
    public int f30459e;

    static {
        HashMap hashMap = new HashMap();
        hashMap.put('G', j$.time.temporal.a.ERA);
        hashMap.put('y', j$.time.temporal.a.YEAR_OF_ERA);
        hashMap.put('u', j$.time.temporal.a.YEAR);
        j$.time.temporal.h hVar = j$.time.temporal.j.f30540a;
        hashMap.put('Q', hVar);
        hashMap.put('q', hVar);
        j$.time.temporal.a aVar = j$.time.temporal.a.MONTH_OF_YEAR;
        hashMap.put('M', aVar);
        hashMap.put('L', aVar);
        hashMap.put('D', j$.time.temporal.a.DAY_OF_YEAR);
        hashMap.put('d', j$.time.temporal.a.DAY_OF_MONTH);
        hashMap.put('F', j$.time.temporal.a.ALIGNED_DAY_OF_WEEK_IN_MONTH);
        j$.time.temporal.a aVar2 = j$.time.temporal.a.DAY_OF_WEEK;
        hashMap.put('E', aVar2);
        hashMap.put('c', aVar2);
        hashMap.put('e', aVar2);
        hashMap.put('a', j$.time.temporal.a.AMPM_OF_DAY);
        hashMap.put('H', j$.time.temporal.a.HOUR_OF_DAY);
        hashMap.put('k', j$.time.temporal.a.CLOCK_HOUR_OF_DAY);
        hashMap.put('K', j$.time.temporal.a.HOUR_OF_AMPM);
        hashMap.put('h', j$.time.temporal.a.CLOCK_HOUR_OF_AMPM);
        hashMap.put('m', j$.time.temporal.a.MINUTE_OF_HOUR);
        hashMap.put('s', j$.time.temporal.a.SECOND_OF_MINUTE);
        j$.time.temporal.a aVar3 = j$.time.temporal.a.NANO_OF_SECOND;
        hashMap.put('S', aVar3);
        hashMap.put('A', j$.time.temporal.a.MILLI_OF_DAY);
        hashMap.put('n', aVar3);
        hashMap.put('N', j$.time.temporal.a.NANO_OF_DAY);
    }

    public DateTimeFormatterBuilder() {
        this.f30455a = this;
        this.f30457c = new ArrayList();
        this.f30459e = -1;
        this.f30456b = null;
        this.f30458d = false;
    }

    public DateTimeFormatterBuilder(DateTimeFormatterBuilder dateTimeFormatterBuilder) {
        this.f30455a = this;
        this.f30457c = new ArrayList();
        this.f30459e = -1;
        this.f30456b = dateTimeFormatterBuilder;
        this.f30458d = true;
    }

    public DateTimeFormatterBuilder parseCaseInsensitive() {
        b(l.INSENSITIVE);
        return this;
    }

    public final void g(j$.time.temporal.n nVar, int i10) {
        Objects.requireNonNull(nVar, "field");
        if (i10 < 1 || i10 > 19) {
            throw new IllegalArgumentException("The width must be from 1 to 19 inclusive but was " + i10);
        }
        f(new h(nVar, i10, i10, w.NOT_NEGATIVE));
    }

    public final void h(j$.time.temporal.n nVar, int i10, int i11, w wVar) {
        if (i10 == i11 && wVar == w.NOT_NEGATIVE) {
            g(nVar, i11);
            return;
        }
        Objects.requireNonNull(nVar, "field");
        Objects.requireNonNull(wVar, "signStyle");
        if (i10 < 1 || i10 > 19) {
            throw new IllegalArgumentException("The minimum width must be from 1 to 19 inclusive but was " + i10);
        } else if (i11 < 1 || i11 > 19) {
            throw new IllegalArgumentException("The maximum width must be from 1 to 19 inclusive but was " + i11);
        } else if (i11 < i10) {
            throw new IllegalArgumentException("The maximum width must exceed or equal the minimum width but " + i11 + " < " + i10);
        } else {
            f(new h(nVar, i10, i11, wVar));
        }
    }

    public final void f(h hVar) {
        w wVar;
        DateTimeFormatterBuilder dateTimeFormatterBuilder = this.f30455a;
        int i10 = dateTimeFormatterBuilder.f30459e;
        if (i10 >= 0) {
            h hVar2 = (h) ((ArrayList) dateTimeFormatterBuilder.f30457c).get(i10);
            int i11 = hVar.f30474b;
            int i12 = hVar.f30475c;
            if (i11 != i12 || (wVar = hVar.f30476d) != w.NOT_NEGATIVE) {
                if (hVar2.f30477e != -1) {
                    hVar2 = new h(hVar2.f30473a, hVar2.f30474b, hVar2.f30475c, hVar2.f30476d, -1);
                }
                this.f30455a.f30459e = b(hVar);
            } else {
                hVar2 = new h(hVar2.f30473a, hVar2.f30474b, hVar2.f30475c, hVar2.f30476d, hVar2.f30477e + i12);
                if (hVar.f30477e != -1) {
                    hVar = new h(hVar.f30473a, i11, i12, wVar, -1);
                }
                b(hVar);
                this.f30455a.f30459e = i10;
            }
            ((ArrayList) this.f30455a.f30457c).set(i10, hVar2);
            return;
        }
        dateTimeFormatterBuilder.f30459e = b(hVar);
    }

    public final void e(j$.time.temporal.a aVar, Map map) {
        Objects.requireNonNull(aVar, "field");
        LinkedHashMap linkedHashMap = new LinkedHashMap(map);
        x xVar = x.FULL;
        b(new n(aVar, xVar, new a(new s(Collections.singletonMap(xVar, linkedHashMap)))));
    }

    public DateTimeFormatterBuilder appendOffsetId() {
        b(i.f30479d);
        return this;
    }

    public DateTimeFormatterBuilder appendOffset(String str, String str2) {
        b(new i(str, str2));
        return this;
    }

    public final void c(char c10) {
        b(new c(c10));
    }

    public final void d(String str) {
        if (str.length() > 0) {
            if (str.length() == 1) {
                b(new c(str.charAt(0)));
            } else {
                b(new m(str));
            }
        }
    }

    public final void a(DateTimeFormatter dateTimeFormatter) {
        Objects.requireNonNull(dateTimeFormatter, "formatter");
        d dVar = dateTimeFormatter.f30449a;
        if (dVar.f30465b) {
            dVar = new d(dVar.f30464a, false);
        }
        b(dVar);
    }

    public final void j() {
        DateTimeFormatterBuilder dateTimeFormatterBuilder = this.f30455a;
        dateTimeFormatterBuilder.f30459e = -1;
        this.f30455a = new DateTimeFormatterBuilder(dateTimeFormatterBuilder);
    }

    public final void i() {
        DateTimeFormatterBuilder dateTimeFormatterBuilder = this.f30455a;
        if (dateTimeFormatterBuilder.f30456b == null) {
            throw new IllegalStateException("Cannot call optionalEnd() as there was no previous call to optionalStart()");
        }
        if (((ArrayList) dateTimeFormatterBuilder.f30457c).size() > 0) {
            DateTimeFormatterBuilder dateTimeFormatterBuilder2 = this.f30455a;
            d dVar = new d(dateTimeFormatterBuilder2.f30457c, dateTimeFormatterBuilder2.f30458d);
            this.f30455a = this.f30455a.f30456b;
            b(dVar);
            return;
        }
        this.f30455a = this.f30455a.f30456b;
    }

    public final int b(e eVar) {
        Objects.requireNonNull(eVar, "pp");
        DateTimeFormatterBuilder dateTimeFormatterBuilder = this.f30455a;
        dateTimeFormatterBuilder.getClass();
        ((ArrayList) dateTimeFormatterBuilder.f30457c).add(eVar);
        DateTimeFormatterBuilder dateTimeFormatterBuilder2 = this.f30455a;
        dateTimeFormatterBuilder2.f30459e = -1;
        return ((ArrayList) dateTimeFormatterBuilder2.f30457c).size() - 1;
    }

    public DateTimeFormatter toFormatter() {
        return l(Locale.getDefault(), v.SMART, null);
    }

    public final DateTimeFormatter k(v vVar, j$.time.chrono.k kVar) {
        return l(Locale.getDefault(), vVar, kVar);
    }

    public final DateTimeFormatter l(Locale locale, v vVar, j$.time.chrono.j jVar) {
        Objects.requireNonNull(locale, "locale");
        while (this.f30455a.f30456b != null) {
            i();
        }
        d dVar = new d(this.f30457c, false);
        t tVar = t.f30507a;
        return new DateTimeFormatter(dVar, locale, vVar, jVar);
    }
}
