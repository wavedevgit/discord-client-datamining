package net.time4j.android.spi;

import android.content.Context;
import android.text.format.DateFormat;
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
import tt.o;
import tt.u;
import tt.x;
import tt.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class AndroidResourceLoader extends qt.d {

    /* renamed from: f  reason: collision with root package name */
    private static final Map f38234f;

    /* renamed from: g  reason: collision with root package name */
    private static final Set f38235g;

    /* renamed from: d  reason: collision with root package name */
    private Context f38236d = null;

    /* renamed from: e  reason: collision with root package name */
    private List f38237e = Collections.EMPTY_LIST;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f38238a;

        static {
            int[] iArr = new int[tt.e.values().length];
            f38238a = iArr;
            try {
                iArr[tt.e.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f38238a[tt.e.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f38238a[tt.e.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class b implements vt.c {
        private b() {
        }

        private vt.c a() {
            return c.f38240a;
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

        @Override // tt.f
        public String b(tt.e eVar, Locale locale) {
            return a().b(eVar, locale);
        }

        @Override // vt.c
        public String d(tt.e eVar, Locale locale, boolean z10) {
            String str;
            boolean z11;
            String str2;
            String d10 = a().d(eVar, locale, z10);
            if (Locale.getDefault().equals(locale)) {
                tt.e eVar2 = tt.e.SHORT;
                if (eVar != eVar2) {
                    str = a().g(eVar2, locale);
                } else {
                    str = d10;
                }
                if (str.indexOf(97) == -1) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                boolean is24HourFormat = DateFormat.is24HourFormat(AndroidResourceLoader.this.f38236d);
                if (is24HourFormat != z11) {
                    if (is24HourFormat) {
                        return c(d10).replace("  ", " ").trim();
                    }
                    if (locale.getLanguage().equals("en")) {
                        str2 = "b";
                    } else {
                        str2 = "B";
                    }
                    int i10 = a.f38238a[eVar.ordinal()];
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
            return d10;
        }

        @Override // tt.f
        public String f(tt.e eVar, tt.e eVar2, Locale locale) {
            return a().f(eVar, eVar2, locale);
        }

        @Override // tt.f
        public String g(tt.e eVar, Locale locale) {
            return d(eVar, locale, false);
        }

        /* synthetic */ b(AndroidResourceLoader androidResourceLoader, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private static final yt.c f38240a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f38241b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f38242c;

        /* renamed from: d  reason: collision with root package name */
        private static final Iterable f38243d;

        static {
            yt.c cVar = new yt.c();
            f38240a = cVar;
            f38241b = Collections.singleton(yt.f.f55797d);
            f38242c = Collections.singletonList(new yt.i());
            f38243d = Collections.unmodifiableList(Arrays.asList(cVar, new net.time4j.calendar.service.b()));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class d implements Iterable {
        private d() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return l.f38245b.iterator();
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
            return m.f38248c.iterator();
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
            return c.f38241b.iterator();
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
            return l.f38244a.iterator();
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
            return c.f38243d.iterator();
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
            return c.f38242c.iterator();
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
            return m.f38247b.iterator();
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
            return m.f38246a.iterator();
        }

        /* synthetic */ k(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class l {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f38244a = Collections.singleton(new yt.a());

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f38245b = Arrays.asList(new yt.b(), new net.time4j.calendar.service.c());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class m {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f38246a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f38247b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f38248c;

        static {
            zt.c cVar;
            Set singleton = Collections.singleton(new au.a());
            f38246a = singleton;
            f38247b = Collections.singleton(new au.b());
            Iterator it = singleton.iterator();
            while (true) {
                if (it.hasNext()) {
                    r rVar = (r) it.next();
                    if (rVar instanceof zt.c) {
                        cVar = (zt.c) zt.c.class.cast(rVar);
                        break;
                    }
                } else {
                    cVar = null;
                    break;
                }
            }
            if (cVar == null) {
                f38248c = Collections.EMPTY_LIST;
            } else {
                f38248c = Collections.singleton(cVar);
            }
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(u.class, new h(null));
        hashMap.put(r.class, new k(null));
        hashMap.put(s.class, new j(null));
        hashMap.put(zt.c.class, new e(null));
        hashMap.put(st.s.class, new d(null));
        hashMap.put(tt.i.class, new f(null));
        hashMap.put(o.class, new g(null));
        hashMap.put(x.class, Collections.singleton(new yt.h()));
        hashMap.put(y.class, new i(null));
        hashMap.put(zt.e.class, Collections.singleton(new net.time4j.android.spi.a()));
        f38234f = Collections.unmodifiableMap(hashMap);
        HashSet hashSet = new HashSet();
        hashSet.add("i18n");
        hashSet.add("calendar");
        hashSet.add("olson");
        hashSet.add("tzdata");
        f38235g = Collections.unmodifiableSet(hashSet);
    }

    private static Object i(Object obj) {
        return obj;
    }

    @Override // qt.d
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
            Context context = this.f38236d;
            if (context != null) {
                return context.getAssets().open(uri.toString());
            }
            throw new IllegalStateException("'ApplicationStarter.initialize(context)' must be called first at app start.");
        } catch (IOException | RuntimeException unused) {
            return null;
        }
    }

    @Override // qt.d
    public URI f(String str, Class cls, String str2) {
        try {
            if (f38235g.contains(str)) {
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

    @Override // qt.d
    public Iterable g(Class cls) {
        Object obj = (Iterable) f38234f.get(cls);
        if (obj == null) {
            if (cls == tt.f.class) {
                obj = this.f38237e;
            } else {
                return ServiceLoader.load(cls, cls.getClassLoader());
            }
        }
        return (Iterable) i(obj);
    }

    public void j(Context context, pt.b bVar) {
        if (context != null) {
            this.f38236d = context;
            this.f38237e = Collections.singletonList(new b(this, null));
            return;
        }
        throw new NullPointerException("Missing Android-context.");
    }
}
