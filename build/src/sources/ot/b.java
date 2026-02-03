package ot;

import java.util.Collections;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import nt.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements mt.d {

    /* renamed from: g  reason: collision with root package name */
    static final mt.c f44568g = nt.a.e("PLUS_SIGN", String.class);

    /* renamed from: h  reason: collision with root package name */
    static final mt.c f44569h = nt.a.e("MINUS_SIGN", String.class);

    /* renamed from: i  reason: collision with root package name */
    private static final nt.i f44570i;

    /* renamed from: j  reason: collision with root package name */
    private static final char f44571j;

    /* renamed from: k  reason: collision with root package name */
    private static final ConcurrentMap f44572k;

    /* renamed from: l  reason: collision with root package name */
    private static final a f44573l;

    /* renamed from: a  reason: collision with root package name */
    private final Map f44574a;

    /* renamed from: b  reason: collision with root package name */
    private final nt.a f44575b;

    /* renamed from: c  reason: collision with root package name */
    private final Locale f44576c;

    /* renamed from: d  reason: collision with root package name */
    private final int f44577d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44578e;

    /* renamed from: f  reason: collision with root package name */
    private final mt.n f44579f;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final nt.j f44580a;

        /* renamed from: b  reason: collision with root package name */
        private final char f44581b;

        /* renamed from: c  reason: collision with root package name */
        private final char f44582c;

        /* renamed from: d  reason: collision with root package name */
        private final String f44583d;

        /* renamed from: e  reason: collision with root package name */
        private final String f44584e;

        a(nt.j jVar, char c10, char c11, String str, String str2) {
            this.f44580a = jVar;
            this.f44581b = c10;
            this.f44582c = c11;
            this.f44583d = str;
            this.f44584e = str2;
        }
    }

    static {
        char c10;
        nt.i iVar = null;
        int i10 = 0;
        for (nt.i iVar2 : kt.d.c().g(nt.i.class)) {
            int length = iVar2.a().length;
            if (length > i10) {
                iVar = iVar2;
                i10 = length;
            }
        }
        if (iVar == null) {
            iVar = st.f.f49649d;
        }
        f44570i = iVar;
        if (Boolean.getBoolean("net.time4j.format.iso.decimal.dot")) {
            c10 = '.';
        } else {
            c10 = ',';
        }
        char c11 = c10;
        f44571j = c11;
        f44572k = new ConcurrentHashMap();
        f44573l = new a(nt.j.f42086d, '0', c11, "+", "-");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(nt.a aVar, Locale locale) {
        this(aVar, locale, 0, 0, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(mt.x xVar, nt.a aVar, Locale locale) {
        a.b bVar = new a.b(xVar);
        bVar.d(nt.a.f42031f, nt.g.SMART);
        bVar.d(nt.a.f42032g, nt.v.WIDE);
        bVar.d(nt.a.f42033h, nt.m.FORMAT);
        bVar.b(nt.a.f42041p, ' ');
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
        hashMap.putAll(bVar2.f44574a);
        hashMap.putAll(bVar.f44574a);
        return new b(new a.b().f(bVar2.f44575b).f(bVar.f44575b).a(), Locale.ROOT, 0, 0, null, hashMap).n(bVar.f44576c);
    }

    @Override // mt.d
    public boolean a(mt.c cVar) {
        if (this.f44574a.containsKey(cVar.name())) {
            return true;
        }
        return this.f44575b.a(cVar);
    }

    @Override // mt.d
    public Object b(mt.c cVar, Object obj) {
        if (this.f44574a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f44574a.get(cVar.name()));
        }
        return this.f44575b.b(cVar, obj);
    }

    @Override // mt.d
    public Object c(mt.c cVar) {
        if (this.f44574a.containsKey(cVar.name())) {
            return cVar.type().cast(this.f44574a.get(cVar.name()));
        }
        return this.f44575b.c(cVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public nt.a e() {
        return this.f44575b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f44575b.equals(bVar.f44575b) && this.f44576c.equals(bVar.f44576c) && this.f44577d == bVar.f44577d && this.f44578e == bVar.f44578e && j(this.f44579f, bVar.f44579f) && this.f44574a.equals(bVar.f44574a)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public mt.n f() {
        return this.f44579f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f44577d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Locale h() {
        return this.f44576c;
    }

    public int hashCode() {
        return (this.f44575b.hashCode() * 7) + (this.f44574a.hashCode() * 37);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f44578e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b l(nt.a aVar) {
        return new b(aVar, this.f44576c, this.f44577d, this.f44578e, this.f44579f, this.f44574a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b m(mt.c cVar, Object obj) {
        HashMap hashMap = new HashMap(this.f44574a);
        if (obj == null) {
            hashMap.remove(cVar.name());
        } else {
            hashMap.put(cVar.name(), obj);
        }
        return new b(this.f44575b, this.f44576c, this.f44577d, this.f44578e, this.f44579f, hashMap);
    }

    b n(Locale locale) {
        String str;
        String str2;
        a.b bVar = new a.b();
        bVar.f(this.f44575b);
        String a10 = st.d.a(locale);
        String country = locale.getCountry();
        if (a10.isEmpty() && country.isEmpty()) {
            locale = Locale.ROOT;
            bVar.d(nt.a.f42037l, nt.j.f42086d);
            bVar.b(nt.a.f42040o, f44571j);
            str = "+";
            str2 = "-";
        } else {
            if (!country.isEmpty()) {
                a10 = a10 + "_" + country;
            }
            a aVar = (a) f44572k.get(a10);
            if (aVar == null) {
                try {
                    nt.i iVar = f44570i;
                    aVar = new a(iVar.d(locale), iVar.f(locale), iVar.b(locale), iVar.c(locale), iVar.e(locale));
                } catch (RuntimeException unused) {
                    aVar = f44573l;
                }
                a aVar2 = (a) f44572k.putIfAbsent(a10, aVar);
                if (aVar2 != null) {
                    aVar = aVar2;
                }
            }
            bVar.d(nt.a.f42037l, aVar.f44580a);
            bVar.b(nt.a.f42038m, aVar.f44581b);
            bVar.b(nt.a.f42040o, aVar.f44582c);
            str = aVar.f44583d;
            str2 = aVar.f44584e;
        }
        Locale locale2 = locale;
        bVar.h(locale2);
        HashMap hashMap = new HashMap(this.f44574a);
        hashMap.put(f44568g.name(), str);
        hashMap.put(f44569h.name(), str2);
        return new b(bVar.a(), locale2, this.f44577d, this.f44578e, this.f44579f, hashMap);
    }

    public String toString() {
        return b.class.getName() + "[attributes=" + this.f44575b + ",locale=" + this.f44576c + ",level=" + this.f44577d + ",section=" + this.f44578e + ",print-condition=" + this.f44579f + ",other=" + this.f44574a + ']';
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(nt.a aVar, Locale locale, int i10, int i11, mt.n nVar) {
        if (aVar != null) {
            this.f44575b = aVar;
            this.f44576c = locale == null ? Locale.ROOT : locale;
            this.f44577d = i10;
            this.f44578e = i11;
            this.f44579f = nVar;
            this.f44574a = Collections.EMPTY_MAP;
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }

    private b(nt.a aVar, Locale locale, int i10, int i11, mt.n nVar, Map map) {
        if (aVar != null) {
            this.f44575b = aVar;
            this.f44576c = locale == null ? Locale.ROOT : locale;
            this.f44577d = i10;
            this.f44578e = i11;
            this.f44579f = nVar;
            this.f44574a = Collections.unmodifiableMap(map);
            return;
        }
        throw new NullPointerException("Missing format attributes.");
    }
}
