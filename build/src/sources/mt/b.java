package mt;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import lt.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements kt.d {

    /* renamed from: g  reason: collision with root package name */
    static final kt.c f39213g = lt.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final kt.c f39214h = lt.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final lt.i f39215i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f39216j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f39217k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f39218l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f39219a;

    /* renamed from: b  reason: collision with root package name */
    private final lt.a f39220b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f39221c;

    /* renamed from: d  reason: collision with root package name */
    private final int f39222d;

    /* renamed from: e  reason: collision with root package name */
    private final int f39223e;

    /* renamed from: f  reason: collision with root package name */
    private final kt.n f39224f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final lt.j f39225a;

        /* renamed from: b  reason: collision with root package name */
        private final char f39226b;

        /* renamed from: c  reason: collision with root package name */
        private final char f39227c;

        /* renamed from: d  reason: collision with root package name */
        private final String f39228d;

        /* renamed from: e  reason: collision with root package name */
        private final String f39229e;

        a(lt.j jVar, char c10, char c11, String str, String str2) {
            this.f39225a = jVar;
            this.f39226b = c10;
            this.f39227c = c11;
            this.f39228d = str;
            this.f39229e = str2;
        }
    }

    static {
        char c10;
        lt.i iVar = null;
        int i10 = 0;
        for (lt.i iVar2 : ht.d.c().g(lt.i.class)) {
            int length = iVar2.a().length;
            if (length > i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = qt.f.f47887d;
        }
        f39215i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f39216j = c11;
        f39217k = new ConcurrentHashMap();
        f39218l = new a(lt.j.f37686d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(lt.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(kt.x xVar, lt.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(lt.a.f37631f, lt.g.SMART);
        bVar.d(lt.a.f37632g, lt.v.WIDE);
        bVar.d(lt.a.f37633h, lt.m.FORMAT);
        bVar.b(lt.a.f37641p, ' ');
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
        hashMap.putAll(bVar2.f39219a);
        hashMap.putAll(bVar.f39219a);
        return new b(new a.b().f(bVar2.f39220b).f(bVar.f39220b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f39221c);
    }

    @Override // kt.d
    public Object a(kt.c cVar, Object obj) {
        if (this.f39219a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f39219a.get(cVar.name()));
        }
        return this.f39220b.a(cVar, obj);
    }

    @Override // kt.d
    public Object b(kt.c cVar) {
        if (this.f39219a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f39219a.get(cVar.name()));
        }
        return this.f39220b.b(cVar);
    }

    @Override // kt.d
    public boolean c(kt.c cVar) {
        if (this.f39219a.containsKey(cVar.name())) {
            return true;
        }
        return this.f39220b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public lt.a e() {
        return this.f39220b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f39220b.equals(bVar.f39220b) && this.f39221c.equals(bVar.f39221c) && this.f39222d == bVar.f39222d && this.f39223e == bVar.f39223e && j(this.f39224f, bVar.f39224f) && this.f39219a.equals(bVar.f39219a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public kt.n f() {
        return this.f39224f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f39222d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f39221c;
    }

    public int hashCode() {
        return (this.f39220b.hashCode() * 7) + (this.f39219a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f39223e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(lt.a aVar) {
        return new b(aVar, this.f39221c, this.f39222d, this.f39223e, this.f39224f, this.f39219a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(kt.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f39219a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f39220b, this.f39221c, this.f39222d, this.f39223e, this.f39224f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f39220b);
        String a10 = qt.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(lt.a.f37637l, lt.j.f37686d);
            bVar.b(lt.a.f37640o, f39216j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f39217k.get(a10);
            if (aVar == null) {
                try {
                    lt.i iVar = f39215i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f39218l;
                }
                a aVar2 = (a) f39217k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(lt.a.f37637l, aVar.f39225a);
            bVar.b(lt.a.f37638m, aVar.f39226b);
            bVar.b(lt.a.f37640o, aVar.f39227c);
            str = aVar.f39228d;
            str2 = aVar.f39229e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f39219a);
        hashMap.put(f39213g.name(), str);
        hashMap.put(f39214h.name(), str2);
        return new b(bVar.a(), locale2, this.f39222d, this.f39223e, this.f39224f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f39220b + ",locale=" + this.f39221c + ",level=" + this.f39222d + ",section=" + this.f39223e + ",print-condition=" + this.f39224f + ",other=" + this.f39219a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(lt.a aVar, Locale locale, int i10, int i11, kt.n nVar) {
        if (aVar != null) {
            this.f39220b = aVar;
            this.f39221c = locale == null ? Locale.ROOT : locale;
            this.f39222d = i10;
            this.f39223e = i11;
            this.f39224f = nVar;
            this.f39219a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(lt.a aVar, Locale locale, int i10, int i11, kt.n nVar, Map map) {
        if (aVar != null) {
            this.f39220b = aVar;
            this.f39221c = locale == null ? Locale.ROOT : locale;
            this.f39222d = i10;
            this.f39223e = i11;
            this.f39224f = nVar;
            this.f39219a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
