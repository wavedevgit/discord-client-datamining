package lt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import kt.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements jt.d {

    /* renamed from: g  reason: collision with root package name */
    static final jt.c f37513g = kt.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final jt.c f37514h = kt.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final kt.i f37515i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f37516j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f37517k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f37518l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f37519a;

    /* renamed from: b  reason: collision with root package name */
    private final kt.a f37520b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f37521c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37522d;

    /* renamed from: e  reason: collision with root package name */
    private final int f37523e;

    /* renamed from: f  reason: collision with root package name */
    private final jt.n f37524f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final kt.j f37525a;

        /* renamed from: b  reason: collision with root package name */
        private final char f37526b;

        /* renamed from: c  reason: collision with root package name */
        private final char f37527c;

        /* renamed from: d  reason: collision with root package name */
        private final String f37528d;

        /* renamed from: e  reason: collision with root package name */
        private final String f37529e;

        a(kt.j jVar, char c10, char c11, String str, String str2) {
            this.f37525a = jVar;
            this.f37526b = c10;
            this.f37527c = c11;
            this.f37528d = str;
            this.f37529e = str2;
        }
    }

    static {
        char c10;
        kt.i iVar = null;
        int i10 = 0;
        for (kt.i iVar2 : gt.d.c().g(kt.i.class)) {
            int length = iVar2.a().length;
            if (length > i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = pt.f.f46230d;
        }
        f37515i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f37516j = c11;
        f37517k = new ConcurrentHashMap();
        f37518l = new a(kt.j.f36604d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(kt.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(jt.x xVar, kt.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(kt.a.f36549f, kt.g.SMART);
        bVar.d(kt.a.f36550g, kt.v.WIDE);
        bVar.d(kt.a.f36551h, kt.m.FORMAT);
        bVar.b(kt.a.f36559p, ' ');
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
        hashMap.putAll(bVar2.f37519a);
        hashMap.putAll(bVar.f37519a);
        return new b(new a.b().f(bVar2.f37520b).f(bVar.f37520b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f37521c);
    }

    @Override // jt.d
    public boolean a(jt.c cVar) {
        if (this.f37519a.containsKey(cVar.name())) {
            return true;
        }
        return this.f37520b.a(cVar);
    }

    @Override // jt.d
    public Object b(jt.c cVar, Object obj) {
        if (this.f37519a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f37519a.get(cVar.name()));
        }
        return this.f37520b.b(cVar, obj);
    }

    @Override // jt.d
    public Object c(jt.c cVar) {
        if (this.f37519a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f37519a.get(cVar.name()));
        }
        return this.f37520b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public kt.a e() {
        return this.f37520b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f37520b.equals(bVar.f37520b) && this.f37521c.equals(bVar.f37521c) && this.f37522d == bVar.f37522d && this.f37523e == bVar.f37523e && j(this.f37524f, bVar.f37524f) && this.f37519a.equals(bVar.f37519a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public jt.n f() {
        return this.f37524f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f37522d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f37521c;
    }

    public int hashCode() {
        return (this.f37520b.hashCode() * 7) + (this.f37519a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f37523e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(kt.a aVar) {
        return new b(aVar, this.f37521c, this.f37522d, this.f37523e, this.f37524f, this.f37519a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(jt.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f37519a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f37520b, this.f37521c, this.f37522d, this.f37523e, this.f37524f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f37520b);
        String a10 = pt.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(kt.a.f36555l, kt.j.f36604d);
            bVar.b(kt.a.f36558o, f37516j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f37517k.get(a10);
            if (aVar == null) {
                try {
                    kt.i iVar = f37515i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f37518l;
                }
                a aVar2 = (a) f37517k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(kt.a.f36555l, aVar.f37525a);
            bVar.b(kt.a.f36556m, aVar.f37526b);
            bVar.b(kt.a.f36558o, aVar.f37527c);
            str = aVar.f37528d;
            str2 = aVar.f37529e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f37519a);
        hashMap.put(f37513g.name(), str);
        hashMap.put(f37514h.name(), str2);
        return new b(bVar.a(), locale2, this.f37522d, this.f37523e, this.f37524f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f37520b + ",locale=" + this.f37521c + ",level=" + this.f37522d + ",section=" + this.f37523e + ",print-condition=" + this.f37524f + ",other=" + this.f37519a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(kt.a aVar, Locale locale, int i10, int i11, jt.n nVar) {
        if (aVar != null) {
            this.f37520b = aVar;
            this.f37521c = locale == null ? Locale.ROOT : locale;
            this.f37522d = i10;
            this.f37523e = i11;
            this.f37524f = nVar;
            this.f37519a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(kt.a aVar, Locale locale, int i10, int i11, jt.n nVar, Map map) {
        if (aVar != null) {
            this.f37520b = aVar;
            this.f37521c = locale == null ? Locale.ROOT : locale;
            this.f37522d = i10;
            this.f37523e = i11;
            this.f37524f = nVar;
            this.f37519a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
