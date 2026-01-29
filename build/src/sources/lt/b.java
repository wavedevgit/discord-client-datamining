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
    static final jt.c f37497g = kt.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final jt.c f37498h = kt.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final kt.i f37499i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f37500j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f37501k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f37502l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f37503a;

    /* renamed from: b  reason: collision with root package name */
    private final kt.a f37504b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f37505c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37506d;

    /* renamed from: e  reason: collision with root package name */
    private final int f37507e;

    /* renamed from: f  reason: collision with root package name */
    private final jt.n f37508f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final kt.j f37509a;

        /* renamed from: b  reason: collision with root package name */
        private final char f37510b;

        /* renamed from: c  reason: collision with root package name */
        private final char f37511c;

        /* renamed from: d  reason: collision with root package name */
        private final String f37512d;

        /* renamed from: e  reason: collision with root package name */
        private final String f37513e;

        a(kt.j jVar, char c10, char c11, String str, String str2) {
            this.f37509a = jVar;
            this.f37510b = c10;
            this.f37511c = c11;
            this.f37512d = str;
            this.f37513e = str2;
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
            iVar = pt.f.f46214d;
        }
        f37499i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f37500j = c11;
        f37501k = new ConcurrentHashMap();
        f37502l = new a(kt.j.f36588d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(kt.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(jt.x xVar, kt.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(kt.a.f36533f, kt.g.SMART);
        bVar.d(kt.a.f36534g, kt.v.WIDE);
        bVar.d(kt.a.f36535h, kt.m.FORMAT);
        bVar.b(kt.a.f36543p, ' ');
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
        hashMap.putAll(bVar2.f37503a);
        hashMap.putAll(bVar.f37503a);
        return new b(new a.b().f(bVar2.f37504b).f(bVar.f37504b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f37505c);
    }

    @Override // jt.d
    public boolean a(jt.c cVar) {
        if (this.f37503a.containsKey(cVar.name())) {
            return true;
        }
        return this.f37504b.a(cVar);
    }

    @Override // jt.d
    public Object b(jt.c cVar, Object obj) {
        if (this.f37503a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f37503a.get(cVar.name()));
        }
        return this.f37504b.b(cVar, obj);
    }

    @Override // jt.d
    public Object c(jt.c cVar) {
        if (this.f37503a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f37503a.get(cVar.name()));
        }
        return this.f37504b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public kt.a e() {
        return this.f37504b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f37504b.equals(bVar.f37504b) && this.f37505c.equals(bVar.f37505c) && this.f37506d == bVar.f37506d && this.f37507e == bVar.f37507e && j(this.f37508f, bVar.f37508f) && this.f37503a.equals(bVar.f37503a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public jt.n f() {
        return this.f37508f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f37506d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f37505c;
    }

    public int hashCode() {
        return (this.f37504b.hashCode() * 7) + (this.f37503a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f37507e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(kt.a aVar) {
        return new b(aVar, this.f37505c, this.f37506d, this.f37507e, this.f37508f, this.f37503a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(jt.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f37503a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f37504b, this.f37505c, this.f37506d, this.f37507e, this.f37508f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f37504b);
        String a10 = pt.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(kt.a.f36539l, kt.j.f36588d);
            bVar.b(kt.a.f36542o, f37500j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f37501k.get(a10);
            if (aVar == null) {
                try {
                    kt.i iVar = f37499i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f37502l;
                }
                a aVar2 = (a) f37501k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(kt.a.f36539l, aVar.f37509a);
            bVar.b(kt.a.f36540m, aVar.f37510b);
            bVar.b(kt.a.f36542o, aVar.f37511c);
            str = aVar.f37512d;
            str2 = aVar.f37513e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f37503a);
        hashMap.put(f37497g.name(), str);
        hashMap.put(f37498h.name(), str2);
        return new b(bVar.a(), locale2, this.f37506d, this.f37507e, this.f37508f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f37504b + ",locale=" + this.f37505c + ",level=" + this.f37506d + ",section=" + this.f37507e + ",print-condition=" + this.f37508f + ",other=" + this.f37503a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(kt.a aVar, Locale locale, int i10, int i11, jt.n nVar) {
        if (aVar != null) {
            this.f37504b = aVar;
            this.f37505c = locale == null ? Locale.ROOT : locale;
            this.f37506d = i10;
            this.f37507e = i11;
            this.f37508f = nVar;
            this.f37503a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(kt.a aVar, Locale locale, int i10, int i11, jt.n nVar, Map map) {
        if (aVar != null) {
            this.f37504b = aVar;
            this.f37505c = locale == null ? Locale.ROOT : locale;
            this.f37506d = i10;
            this.f37507e = i11;
            this.f37508f = nVar;
            this.f37503a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
