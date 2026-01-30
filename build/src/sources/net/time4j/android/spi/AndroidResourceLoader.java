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
import kt.o;
import kt.u;
import kt.x;
import kt.y;
import net.time4j.tz.r;
import net.time4j.tz.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class AndroidResourceLoader extends gt.d {

    /* renamed from: f  reason: collision with root package name */
    private static final Map f40377f;

    /* renamed from: g  reason: collision with root package name */
    private static final Set f40378g;

    /* renamed from: d  reason: collision with root package name */
    private Context f40379d = null;

    /* renamed from: e  reason: collision with root package name */
    private List f40380e = Collections.EMPTY_LIST;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40381a;

        static {
            int[] iArr = new int[kt.e.values().length];
            f40381a = iArr;
            try {
                iArr[kt.e.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40381a[kt.e.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40381a[kt.e.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class b implements mt.c {
        private b() {
        }

        private mt.c a() {
            return c.f40383a;
        }

        private String b(String str) {
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

        @Override // kt.f
        public String c(kt.e eVar, Locale locale) {
            return a().c(eVar, locale);
        }

        @Override // kt.f
        public String d(kt.e eVar, Locale locale) {
            return i(eVar, locale, false);
        }

        @Override // kt.f
        public String f(kt.e eVar, kt.e eVar2, Locale locale) {
            return a().f(eVar, eVar2, locale);
        }

        @Override // mt.c
        public String i(kt.e eVar, Locale locale, boolean z10) {
            String str;
            boolean z11;
            String str2;
            String i10 = a().i(eVar, locale, z10);
            if (Locale.getDefault().equals(locale)) {
                kt.e eVar2 = kt.e.SHORT;
                if (eVar != eVar2) {
                    str = a().d(eVar2, locale);
                } else {
                    str = i10;
                }
                if (str.indexOf(97) == -1) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                boolean is24HourFormat = DateFormat.is24HourFormat(AndroidResourceLoader.this.f40379d);
                if (is24HourFormat != z11) {
                    if (is24HourFormat) {
                        return b(i10).replace("  ", " ").trim();
                    }
                    if (locale.getLanguage().equals("en")) {
                        str2 = "b";
                    } else {
                        str2 = "B";
                    }
                    int i11 = a.f40381a[eVar.ordinal()];
                    if (i11 != 1) {
                        if (i11 != 2) {
                            if (i11 != 3) {
                                return "h:mm " + str2;
                            }
                            return "h:mm:ss " + str2;
                        }
                        return "h:mm:ss " + str2 + " z";
                    }
                    return "h:mm:ss " + str2 + " zzzz";
                }
            }
            return i10;
        }

        /* synthetic */ b(AndroidResourceLoader androidResourceLoader, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private static final pt.c f40383a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f40384b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f40385c;

        /* renamed from: d  reason: collision with root package name */
        private static final Iterable f40386d;

        static {
            pt.c cVar = new pt.c();
            f40383a = cVar;
            f40384b = Collections.singleton(pt.f.f46230d);
            f40385c = Collections.singletonList(new pt.i());
            f40386d = Collections.unmodifiableList(Arrays.asList(cVar, new net.time4j.calendar.service.b()));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class d implements Iterable {
        private d() {
        }

        @Override // java.lang.Iterable
        public Iterator iterator() {
            return l.f40388b.iterator();
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
            return m.f40391c.iterator();
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
            return c.f40384b.iterator();
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
            return l.f40387a.iterator();
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
            return c.f40386d.iterator();
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
            return c.f40385c.iterator();
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
            return m.f40390b.iterator();
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
            return m.f40389a.iterator();
        }

        /* synthetic */ k(a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class l {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f40387a = Collections.singleton(new pt.a());

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f40388b = Arrays.asList(new pt.b(), new net.time4j.calendar.service.c());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class m {

        /* renamed from: a  reason: collision with root package name */
        private static final Iterable f40389a;

        /* renamed from: b  reason: collision with root package name */
        private static final Iterable f40390b;

        /* renamed from: c  reason: collision with root package name */
        private static final Iterable f40391c;

        static {
            qt.c cVar;
            Set singleton = Collections.singleton(new rt.a());
            f40389a = singleton;
            f40390b = Collections.singleton(new rt.b());
            Iterator it = singleton.iterator();
            while (true) {
                if (it.hasNext()) {
                    r rVar = (r) it.next();
                    if (rVar instanceof qt.c) {
                        cVar = (qt.c) qt.c.class.cast(rVar);
                        break;
                    }
                } else {
                    cVar = null;
                    break;
                }
            }
            if (cVar == null) {
                f40391c = Collections.EMPTY_LIST;
            } else {
                f40391c = Collections.singleton(cVar);
            }
        }
    }

    static {
        HashMap hashMap = new HashMap();
        hashMap.put(u.class, new h(null));
        hashMap.put(r.class, new k(null));
        hashMap.put(s.class, new j(null));
        hashMap.put(qt.c.class, new e(null));
        hashMap.put(jt.s.class, new d(null));
        hashMap.put(kt.i.class, new f(null));
        hashMap.put(o.class, new g(null));
        hashMap.put(x.class, Collections.singleton(new pt.h()));
        hashMap.put(y.class, new i(null));
        hashMap.put(qt.e.class, Collections.singleton(new net.time4j.android.spi.a()));
        f40377f = Collections.unmodifiableMap(hashMap);
        HashSet hashSet = new HashSet();
        hashSet.add("i18n");
        hashSet.add("calendar");
        hashSet.add("olson");
        hashSet.add("tzdata");
        f40378g = Collections.unmodifiableSet(hashSet);
    }

    private static Object i(Object obj) {
        return obj;
    }

    @Override // gt.d
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
            Context context = this.f40379d;
            if (context != null) {
                return context.getAssets().open(uri.toString());
            }
            throw new IllegalStateException("'ApplicationStarter.initialize(context)' must be called first at app start.");
        } catch (IOException | RuntimeException unused) {
            return null;
        }
    }

    @Override // gt.d
    public URI f(String str, Class cls, String str2) {
        try {
            if (f40378g.contains(str)) {
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

    @Override // gt.d
    public Iterable g(Class cls) {
        Object obj = (Iterable) f40377f.get(cls);
        if (obj == null) {
            if (cls == kt.f.class) {
                obj = this.f40380e;
            } else {
                return ServiceLoader.load(cls, cls.getClassLoader());
            }
        }
        return (Iterable) i(obj);
    }

    public void j(Context context, ft.b bVar) {
        if (context != null) {
            this.f40379d = context;
            this.f40380e = Collections.singletonList(new b(this, null));
            return;
        }
        throw new NullPointerException("Missing Android-context.");
    }
}
