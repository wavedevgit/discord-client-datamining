package rt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import qt.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements pt.d {

    /* renamed from: g  reason: collision with root package name */
    static final pt.c f49017g = qt.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final pt.c f49018h = qt.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final qt.i f49019i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f49020j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f49021k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f49022l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f49023a;

    /* renamed from: b  reason: collision with root package name */
    private final qt.a f49024b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f49025c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49026d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49027e;

    /* renamed from: f  reason: collision with root package name */
    private final pt.n f49028f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final qt.j f49029a;

        /* renamed from: b  reason: collision with root package name */
        private final char f49030b;

        /* renamed from: c  reason: collision with root package name */
        private final char f49031c;

        /* renamed from: d  reason: collision with root package name */
        private final String f49032d;

        /* renamed from: e  reason: collision with root package name */
        private final String f49033e;

        a(qt.j jVar, char c10, char c11, String str, String str2) {
            this.f49029a = jVar;
            this.f49030b = c10;
            this.f49031c = c11;
            this.f49032d = str;
            this.f49033e = str2;
        }
    }

    static {
        char c10;
        qt.i iVar = null;
        int i10 = 0;
        for (qt.i iVar2 : nt.d.c().g(qt.i.class)) {
            int length = iVar2.a().length;
            if (length > i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = vt.f.f52414d;
        }
        f49019i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f49020j = c11;
        f49021k = new ConcurrentHashMap();
        f49022l = new a(qt.j.f48146d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(qt.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(pt.x xVar, qt.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(qt.a.f48091f, qt.g.SMART);
        bVar.d(qt.a.f48092g, qt.v.WIDE);
        bVar.d(qt.a.f48093h, qt.m.FORMAT);
        bVar.b(qt.a.f48101p, ' ');
        bVar.f(aVar);
        return new b(bVar.a(), locale).n(locale);
    }

    private static boolean j(Object obj, Object obj2) {
        if (obj == null) {
            if (obj2 == null) {
                return true;
            }
            return false;
        }
        return obj.equals(obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b k(b bVar, b bVar2) {
        HashMap hashMap = new HashMap();
        hashMap.putAll(bVar2.f49023a);
        hashMap.putAll(bVar.f49023a);
        return new b(new a.b().f(bVar2.f49024b).f(bVar.f49024b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f49025c);
    }

    @Override // pt.d
    public Object a(pt.c cVar, Object obj) {
        if (this.f49023a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f49023a.get(cVar.name()));
        }
        return this.f49024b.a(cVar, obj);
    }

    @Override // pt.d
    public boolean b(pt.c cVar) {
        if (this.f49023a.containsKey(cVar.name())) {
            return true;
        }
        return this.f49024b.b(cVar);
    }

    @Override // pt.d
    public Object c(pt.c cVar) {
        if (this.f49023a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f49023a.get(cVar.name()));
        }
        return this.f49024b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public qt.a e() {
        return this.f49024b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f49024b.equals(bVar.f49024b) && this.f49025c.equals(bVar.f49025c) && this.f49026d == bVar.f49026d && this.f49027e == bVar.f49027e && j(this.f49028f, bVar.f49028f) && this.f49023a.equals(bVar.f49023a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pt.n f() {
        return this.f49028f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f49026d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f49025c;
    }

    public int hashCode() {
        return (this.f49024b.hashCode() * 7) + (this.f49023a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f49027e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(qt.a aVar) {
        return new b(aVar, this.f49025c, this.f49026d, this.f49027e, this.f49028f, this.f49023a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(pt.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f49023a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f49024b, this.f49025c, this.f49026d, this.f49027e, this.f49028f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f49024b);
        String a10 = vt.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(qt.a.f48097l, qt.j.f48146d);
            bVar.b(qt.a.f48100o, f49020j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f49021k.get(a10);
            if (aVar == null) {
                try {
                    qt.i iVar = f49019i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f49022l;
                }
                a aVar2 = (a) f49021k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(qt.a.f48097l, aVar.f49029a);
            bVar.b(qt.a.f48098m, aVar.f49030b);
            bVar.b(qt.a.f48100o, aVar.f49031c);
            str = aVar.f49032d;
            str2 = aVar.f49033e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f49023a);
        hashMap.put(f49017g.name(), str);
        hashMap.put(f49018h.name(), str2);
        return new b(bVar.a(), locale2, this.f49026d, this.f49027e, this.f49028f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f49024b + ",locale=" + this.f49025c + ",level=" + this.f49026d + ",section=" + this.f49027e + ",print-condition=" + this.f49028f + ",other=" + this.f49023a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(qt.a aVar, Locale locale, int i10, int i11, pt.n nVar) {
        if (aVar != null) {
            this.f49024b = aVar;
            this.f49025c = locale == null ? Locale.ROOT : locale;
            this.f49026d = i10;
            this.f49027e = i11;
            this.f49028f = nVar;
            this.f49023a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(qt.a aVar, Locale locale, int i10, int i11, pt.n nVar, Map map) {
        if (aVar != null) {
            this.f49024b = aVar;
            this.f49025c = locale == null ? Locale.ROOT : locale;
            this.f49026d = i10;
            this.f49027e = i11;
            this.f49028f = nVar;
            this.f49023a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
