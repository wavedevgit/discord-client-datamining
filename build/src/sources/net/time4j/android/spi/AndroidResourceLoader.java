package net.time4j.android.spi;

import android.content.Context;
import android.text.format.DateFormat;
import cu.o;
import cu.u;
import cu.x;
import cu.y;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.ServiceLoader;
import java.util.Set;
import net.time4j.tz.r;
import net.time4j.tz.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class AndroidResourceLoader extends zt.d {

    /* renamed from: f  reason: collision with root package name */
    private static final Map f37807f;

    /* renamed from: g  reason: collision with root package name */
    private static final Set f37808g;

    /* renamed from: d  reason: collision with root package name */
    private Context f37809d = null;

    /* renamed from: e  reason: collision with root package name */
    private List f37810e = Collections.EMPTY_LIST;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37811a;

        static {
            int[] iArr = new int[cu.e.values().length];
            f37811a = iArr;
            try {
                iArr[cu.e.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37811a[cu.e.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f37811a[cu.e.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class b implements eu.c {
        private b() {
        }

        private eu.c b() {
            return c.f37813a;
        }

        private String c(String str) {
            StringBuilder sb2 = new StringBuilder();
            int length = str.length();
            int i10 = 0;
            while (i10 < length) {
                char charAt = str.charAt(i10);
                if (charAt == '\'') {
                    sb2.append(charAt);
                    while (true) {
                        i10++;
                        if (i10 >= length) {
                            break;
                        }
                        char charAt2 = str.charAt(i10);
                        if (charAt2 == '\'') {
                            sb2.append(charAt2);
                            int i11 = i10 + 1;
                            if (i11 < length && str.charAt(i11) == '\'') {
                                i10 = i11;
                            }
                        }
                        sb2.append(charAt2);
                    }
                } else if (charAt == 'h') {
                    sb2.append('H');
                } else if (charAt != 'a') {
                    sb2.append(charAt);
                }
                i10++;
            }
            return sb2.toString();
        }

        @Override // cu.f
        public String a(cu.e eVar, Locale locale) {
            return h(eVar, locale, false);
        }

        @Override // cu.f
        public String d(cu.e eVar, cu.e eVar2, Locale locale) {
            return b().d(eVar, eVar2, locale);
        }

        @Override // cu.f
        public String f(cu.e eVar, Locale locale) {
            return b().f(eVar, locale);
        }

        @Override // eu.c
        public String h(cu.e eVar, Locale locale, boolean z10) {
            String str;
            boolean z11;
            String str2;
            String h10 = b().h(eVar, locale, z10);
            if (Locale.getDefault().equals(locale)) {
                cu.e eVar2 = cu.e.SHORT;
                if (eVar != eVar2) {
                    str = b().a(eVar2, locale);
                } else {
                    str = h10;
                }
                if (str.indexOf(97) == -1) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                boolean is24HourFormat = DateFormat.is24HourFormat(AndroidResourceLoader.this.f37809d);
                if (is24HourFormat != z11) {
                    if (is24HourFormat) {
                        return c(h10).replace("  ", " ").trim();
                    }
                    if (locale.getLanguage().equals("en")) {
                        str2 = "b";
                    } else {
                        str2 = "B";
                    }
                    int i10 = a.f37811a[eVar.ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 != 3) {
                                return "h:mm " + str2;
                            }
                            return "h:mm:ss " + str2;
                        }
                        return "h:mm:ss " + str2 + " z";
                    }
                    return "h:mm:ss " + str2 + " zzzz";
                }
            }
            return h10;
        }

        /* synthetic */ b(AndroidResourceLoader androidResourceLoader, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private static final hu.c f37813a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f37814b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f37815c;

        /* renamed from: d  reason: collision with root package name */
        private static final Iterable f37816d;

        static {
            hu.c cVar = new hu.c();
            f37813a = cVar;
            f37814b = Collections.singleton(hu.f.f28288d);
            f37815c = Collections.singletonList(new hu.i());
            f37816d = Collections.unmodifiableList(Arrays.asList(cVar, new net.time4j.calendar.service.b()));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class d implements Iterable {
        private d() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return l.f37818b.iterator();
        }

        /* synthetic */ d(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class e implements Iterable {
        private e() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return m.f37821c.iterator();
        }

        /* synthetic */ e(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class f implements Iterable {
        private f() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return c.f37814b.iterator();
        }

        /* synthetic */ f(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class g implements Iterable {
        private g() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return l.f37817a.iterator();
        }

        /* synthetic */ g(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class h implements Iterable {
        private h() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return c.f37816d.iterator();
        }

        /* synthetic */ h(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class i implements Iterable {
        private i() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return c.f37815c.iterator();
        }

        /* synthetic */ i(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class j implements Iterable {
        private j() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return m.f37820b.iterator();
        }

        /* synthetic */ j(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class k implements Iterable {
        private k() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return m.f37819a.iterator();
        }

        /* synthetic */ k(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class l {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f37817a = Collections.singleton(new hu.a());

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f37818b = Arrays.asList(new hu.b(), new net.time4j.calendar.service.c());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class m {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f37819a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f37820b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f37821c;

        static {
            iu.c cVar;
            Set singleton = Collections.singleton(new ju.a());
            f37819a = singleton;
            f37820b = Collections.singleton(new ju.b());
            Iterator it = singleton.iterator();
            while (true) {
                if (it.hasNext()) {
                    r rVar = (r) it.next();
                    if (rVar instanceof iu.c) {
                        cVar = (iu.c) iu.c.class.cast(rVar);
                        break;
                    }
                } else {
                    cVar = null;
                    break;
                }
            }
            if (cVar == null) {
                f37821c = Collections.EMPTY_LIST;
            } else {
                f37821c = Collections.singleton(cVar);
            }
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(u.class, new h(null));
        hashMap.put(r.class, new k(null));
        hashMap.put(s.class, new j(null));
        hashMap.put(iu.c.class, new e(null));
        hashMap.put(bu.s.class, new d(null));
        hashMap.put(cu.i.class, new f(null));
        hashMap.put(o.class, new g(null));
        hashMap.put(x.class, Collections.singleton(new hu.h()));
        hashMap.put(y.class, new i(null));
        hashMap.put(iu.e.class, Collections.singleton(new net.time4j.android.spi.a()));
        f37807f = Collections.unmodifiableMap(hashMap);
        HashSet hashSet = new HashSet();
        hashSet.add("i18n");
        hashSet.add("calendar");
        hashSet.add("olson");
        hashSet.add("tzdata");
        f37808g = Collections.unmodifiableSet(hashSet);
    }

    private static Object i(Object obj) {
        return obj;
    }

    @Override // zt.d
    public InputStream e(URI uri, boolean z10) {
        if (uri == null) {
            return null;
        }
        try {
            if (uri.isAbsolute()) {
                URLConnection openConnection = uri.toURL().openConnection();
                openConnection.setUseCaches(false);
                return openConnection.getInputStream();
            }
            Context context = this.f37809d;
            if (context != null) {
                return context.getAssets().open(uri.toString());
            }
            throw new IllegalStateException("'ApplicationStarter.initialize(context)' must be called first at app start.");
        } catch (IOException | RuntimeException unused) {
            return null;
        }
    }

    @Override // zt.d
    public URI f(String str, Class cls, String str2) {
        try {
            if (f37808g.contains(str)) {
                return new URI("net/time4j/" + str + '/' + str2);
            }
            URL resource = cls.getClassLoader().getResource(str2);
            if (resource != null) {
                return resource.toURI();
            }
            return null;
        } catch (URISyntaxException unused) {
            return null;
        }
    }

    @Override // zt.d
    public Iterable g(Class cls) {
        Object obj = (Iterable) f37807f.get(cls);
        if (obj == null) {
            if (cls == cu.f.class) {
                obj = this.f37810e;
            } else {
                return ServiceLoader.load(cls, cls.getClassLoader());
            }
        }
        return (Iterable) i(obj);
    }

    public void j(Context context, yt.b bVar) {
        if (context != null) {
            this.f37809d = context;
            this.f37810e = Collections.singletonList(new b(this, null));
            return;
        }
        throw new NullPointerException("Missing Android-context.");
    }
}
