package com.facebook.hermes.intl;

import android.icu.text.DateFormat;
import android.icu.text.NumberingSystem;
import android.icu.text.SimpleDateFormat;
import android.icu.util.Calendar;
import android.icu.util.TimeZone;
import android.icu.util.ULocale;
import com.facebook.hermes.intl.b;
import java.text.AttributedCharacterIterator;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements com.facebook.hermes.intl.b {

    /* renamed from: a  reason: collision with root package name */
    private DateFormat f10292a = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f10293a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f10294b;

        static {
            int[] iArr = new int[b.k.values().length];
            f10294b = iArr;
            try {
                iArr[b.k.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10294b[b.k.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f10294b[b.k.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f10294b[b.k.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f10294b[b.k.UNDEFINED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[b.EnumC0148b.values().length];
            f10293a = iArr2;
            try {
                iArr2[b.EnumC0148b.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f10293a[b.EnumC0148b.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f10293a[b.EnumC0148b.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f10293a[b.EnumC0148b.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f10293a[b.EnumC0148b.UNDEFINED.ordinal()] = 5;
            } catch (NoSuchFieldError unused10) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class b {
        public static String a(String str) {
            StringBuilder sb2 = new StringBuilder();
            boolean z10 = false;
            for (int i10 = 0; i10 < str.length(); i10++) {
                char charAt = str.charAt(i10);
                if (charAt == '\'') {
                    z10 = !z10;
                } else if (!z10 && ((charAt >= 'A' && charAt <= 'Z') || (charAt >= 'a' && charAt <= 'z'))) {
                    sb2.append(str.charAt(i10));
                }
            }
            return sb2.toString();
        }
    }

    private static String i(da.b bVar, b.EnumC0148b enumC0148b, b.k kVar) {
        if (enumC0148b == b.EnumC0148b.UNDEFINED) {
            return ((SimpleDateFormat) DateFormat.getTimeInstance(m(kVar), (ULocale) bVar.h())).toLocalizedPattern();
        }
        if (kVar == b.k.UNDEFINED) {
            return ((SimpleDateFormat) DateFormat.getDateInstance(l(enumC0148b), (ULocale) bVar.h())).toLocalizedPattern();
        }
        return ((SimpleDateFormat) DateFormat.getDateTimeInstance(l(enumC0148b), m(kVar), (ULocale) bVar.h())).toLocalizedPattern();
    }

    private static String j(da.b bVar, b.m mVar, b.d dVar, b.n nVar, b.i iVar, b.c cVar, b.f fVar, b.h hVar, b.j jVar, b.l lVar, b.g gVar, b.EnumC0148b enumC0148b, b.k kVar, Object obj) {
        StringBuilder sb2 = new StringBuilder();
        if (enumC0148b == b.EnumC0148b.UNDEFINED && kVar == b.k.UNDEFINED) {
            sb2.append(mVar.d());
            sb2.append(dVar.d());
            sb2.append(nVar.d());
            sb2.append(iVar.d());
            sb2.append(cVar.d());
            if (gVar != b.g.H11 && gVar != b.g.H12) {
                sb2.append(fVar.e());
            } else {
                sb2.append(fVar.d());
            }
            sb2.append(hVar.d());
            sb2.append(jVar.d());
            sb2.append(lVar.d());
        } else {
            sb2.append(i(bVar, enumC0148b, kVar));
            HashMap a10 = bVar.a();
            if (a10.containsKey("hc")) {
                String str = (String) a10.get("hc");
                if (str != "h11" && str != "h12") {
                    if (str == "h23" || str == "h24") {
                        k(sb2, new char[]{'h', 'H', 'K'}, 'k');
                    }
                } else {
                    k(sb2, new char[]{'H', 'K', 'k'}, 'h');
                }
            }
            if (gVar != b.g.H11 && gVar != b.g.H12) {
                if (gVar == b.g.H23 || gVar == b.g.H24) {
                    k(sb2, new char[]{'h', 'H', 'K'}, 'k');
                }
            } else {
                k(sb2, new char[]{'H', 'K', 'k'}, 'h');
            }
            if (!da.d.n(obj) && !da.d.j(obj)) {
                if (da.d.e(obj)) {
                    k(sb2, new char[]{'H', 'K', 'k'}, 'h');
                } else {
                    k(sb2, new char[]{'h', 'H', 'K'}, 'k');
                }
            }
        }
        return sb2.toString();
    }

    private static void k(StringBuilder sb2, char[] cArr, char c10) {
        for (int i10 = 0; i10 < sb2.length(); i10++) {
            int length = cArr.length;
            int i11 = 0;
            while (true) {
                if (i11 < length) {
                    if (sb2.charAt(i10) == cArr[i11]) {
                        sb2.setCharAt(i10, c10);
                        break;
                    }
                    i11++;
                }
            }
        }
    }

    static int l(b.EnumC0148b enumC0148b) {
        int i10 = a.f10293a[enumC0148b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            if (i10 == 3) {
                return 2;
            }
            if (i10 == 4) {
                return 3;
            }
            throw new da.f("Invalid DateStyle: " + enumC0148b.toString());
        }
        return 0;
    }

    static int m(b.k kVar) {
        int i10 = a.f10294b[kVar.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            if (i10 == 3) {
                return 2;
            }
            if (i10 == 4) {
                return 3;
            }
            throw new da.f("Invalid DateStyle: " + kVar.toString());
        }
        return 0;
    }

    @Override // com.facebook.hermes.intl.b
    public AttributedCharacterIterator a(double d10) {
        return this.f10292a.formatToCharacterIterator(Double.valueOf(d10));
    }

    @Override // com.facebook.hermes.intl.b
    public String b(double d10) {
        return this.f10292a.format(new Date((long) d10));
    }

    @Override // com.facebook.hermes.intl.b
    public String c(da.b bVar) {
        return NumberingSystem.getInstance((ULocale) bVar.h()).getName();
    }

    @Override // com.facebook.hermes.intl.b
    public String d(da.b bVar) {
        return Calendar.getInstance((ULocale) bVar.h()).getTimeZone().getID();
    }

    @Override // com.facebook.hermes.intl.b
    public String e(AttributedCharacterIterator.Attribute attribute, String str) {
        if (attribute == DateFormat.Field.DAY_OF_WEEK) {
            return "weekday";
        }
        if (attribute == DateFormat.Field.ERA) {
            return "era";
        }
        if (attribute == DateFormat.Field.YEAR) {
            try {
                Double.parseDouble(str);
                return "year";
            } catch (NumberFormatException unused) {
                return "yearName";
            }
        } else if (attribute == DateFormat.Field.MONTH) {
            return "month";
        } else {
            if (attribute == DateFormat.Field.DAY_OF_MONTH) {
                return "day";
            }
            if (attribute == DateFormat.Field.HOUR0 || attribute == DateFormat.Field.HOUR1 || attribute == DateFormat.Field.HOUR_OF_DAY0 || attribute == DateFormat.Field.HOUR_OF_DAY1) {
                return "hour";
            }
            if (attribute == DateFormat.Field.MINUTE) {
                return "minute";
            }
            if (attribute == DateFormat.Field.SECOND) {
                return "second";
            }
            if (attribute == DateFormat.Field.TIME_ZONE) {
                return "timeZoneName";
            }
            if (attribute == DateFormat.Field.AM_PM) {
                return "dayPeriod";
            }
            if (attribute.toString().equals("android.icu.text.DateFormat$Field(related year)")) {
                return "relatedYear";
            }
            return "literal";
        }
    }

    @Override // com.facebook.hermes.intl.b
    public b.g f(da.b bVar) {
        try {
            String a10 = b.a(((SimpleDateFormat) DateFormat.getTimeInstance(0, (ULocale) bVar.h())).toPattern());
            if (a10.contains(String.valueOf('h'))) {
                return b.g.H12;
            }
            if (a10.contains(String.valueOf('K'))) {
                return b.g.H11;
            }
            if (a10.contains(String.valueOf('H'))) {
                return b.g.H23;
            }
            return b.g.H24;
        } catch (ClassCastException unused) {
            return b.g.H24;
        }
    }

    @Override // com.facebook.hermes.intl.b
    public void g(da.b bVar, String str, String str2, b.e eVar, b.m mVar, b.d dVar, b.n nVar, b.i iVar, b.c cVar, b.f fVar, b.h hVar, b.j jVar, b.l lVar, b.g gVar, Object obj, b.EnumC0148b enumC0148b, b.k kVar, Object obj2) {
        Calendar calendar;
        da.b bVar2;
        String j10 = j(bVar, mVar, dVar, nVar, iVar, cVar, fVar, hVar, jVar, lVar, gVar, enumC0148b, kVar, obj2);
        if (str.isEmpty()) {
            calendar = null;
        } else {
            ArrayList arrayList = new ArrayList();
            arrayList.add(da.d.h(str));
            da.b d10 = bVar.d();
            d10.f("ca", arrayList);
            calendar = Calendar.getInstance((ULocale) d10.h());
        }
        if (str2.isEmpty()) {
            bVar2 = bVar;
        } else {
            try {
                if (NumberingSystem.getInstanceByName(da.d.h(str2)) == null) {
                    throw new da.f("Invalid numbering system: " + str2);
                }
                ArrayList arrayList2 = new ArrayList();
                arrayList2.add(da.d.h(str2));
                bVar2 = bVar;
                bVar2.f("nu", arrayList2);
            } catch (RuntimeException unused) {
                throw new da.f("Invalid numbering system: " + str2);
            }
        }
        if (calendar != null) {
            this.f10292a = DateFormat.getPatternInstance(calendar, j10, (ULocale) bVar2.h());
        } else {
            this.f10292a = DateFormat.getPatternInstance(j10, (ULocale) bVar2.h());
        }
        if (da.d.n(obj) || da.d.j(obj)) {
            return;
        }
        this.f10292a.setTimeZone(TimeZone.getTimeZone(da.d.h(obj)));
    }

    @Override // com.facebook.hermes.intl.b
    public String h(da.b bVar) {
        return da.i.d(DateFormat.getDateInstance(3, (ULocale) bVar.h()).getCalendar().getType());
    }
}
