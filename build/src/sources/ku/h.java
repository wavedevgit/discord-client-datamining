package ku;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.JarURLConnection;
import java.net.URI;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.LinkedHashSet;
import java.util.List;
import jr.v;
import ju.c0;
import ju.x;
import kotlin.Lazy;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends ju.h {

    /* renamed from: h  reason: collision with root package name */
    private static final a f36736h = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final c0 f36737i = c0.a.e(c0.f32326e, "/", false, 1, null);

    /* renamed from: e  reason: collision with root package name */
    private final ClassLoader f36738e;

    /* renamed from: f  reason: collision with root package name */
    private final ju.h f36739f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f36740g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean c(c0 c0Var) {
            return !StringsKt.y(c0Var.g(), ".class", true);
        }

        public final c0 b() {
            return h.f36737i;
        }

        public final c0 d(c0 c0Var, c0 base) {
            Intrinsics.checkNotNullParameter(c0Var, "<this>");
            Intrinsics.checkNotNullParameter(base, "base");
            return b().l(StringsKt.I(StringsKt.B0(c0Var.toString(), base.toString()), '\\', '/', false, 4, null));
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {
        b() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public final List invoke() {
            h hVar = h.this;
            return hVar.x(hVar.f36738e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f36742d = new c();

        c() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(i entry) {
            Intrinsics.checkNotNullParameter(entry, "entry");
            return Boolean.valueOf(h.f36736h.c(entry.b()));
        }
    }

    public /* synthetic */ h(ClassLoader classLoader, boolean z10, ju.h hVar, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(classLoader, z10, (i10 & 4) != 0 ? ju.h.f32370b : hVar);
    }

    private final String A(c0 c0Var) {
        return v(c0Var).k(f36737i).toString();
    }

    private final c0 v(c0 c0Var) {
        return f36737i.m(c0Var, true);
    }

    private final List w() {
        return (List) this.f36740g.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final List x(ClassLoader classLoader) {
        Enumeration<URL> resources = classLoader.getResources("");
        Intrinsics.checkNotNullExpressionValue(resources, "getResources(...)");
        ArrayList<URL> list = Collections.list(resources);
        Intrinsics.checkNotNullExpressionValue(list, "list(...)");
        ArrayList arrayList = new ArrayList();
        for (URL url : list) {
            Intrinsics.checkNotNull(url);
            Pair y10 = y(url);
            if (y10 != null) {
                arrayList.add(y10);
            }
        }
        Enumeration<URL> resources2 = classLoader.getResources("META-INF/MANIFEST.MF");
        Intrinsics.checkNotNullExpressionValue(resources2, "getResources(...)");
        ArrayList<URL> list2 = Collections.list(resources2);
        Intrinsics.checkNotNullExpressionValue(list2, "list(...)");
        ArrayList arrayList2 = new ArrayList();
        for (URL url2 : list2) {
            Intrinsics.checkNotNull(url2);
            Pair z10 = z(url2);
            if (z10 != null) {
                arrayList2.add(z10);
            }
        }
        return CollectionsKt.L0(arrayList, arrayList2);
    }

    private final Pair y(URL url) {
        if (!Intrinsics.areEqual(url.getProtocol(), "file")) {
            return null;
        }
        return v.a(this.f36739f, c0.a.d(c0.f32326e, new File(url.toURI()), false, 1, null));
    }

    private final Pair z(URL url) {
        int o02;
        String url2 = url.toString();
        Intrinsics.checkNotNullExpressionValue(url2, "toString(...)");
        if (!StringsKt.P(url2, "jar:file:", false, 2, null) || (o02 = StringsKt.o0(url2, "!", 0, false, 6, null)) == -1) {
            return null;
        }
        c0.a aVar = c0.f32326e;
        String substring = url2.substring(4, o02);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        return v.a(j.f(c0.a.d(aVar, new File(URI.create(substring)), false, 1, null), this.f36739f, c.f36742d), f36737i);
    }

    @Override // ju.h
    public Sink b(c0 file, boolean z10) {
        Intrinsics.checkNotNullParameter(file, "file");
        throw new IOException(this + " is read-only");
    }

    @Override // ju.h
    public void c(c0 source, c0 target) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(target, "target");
        throw new IOException(this + " is read-only");
    }

    @Override // ju.h
    public void g(c0 dir, boolean z10) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        throw new IOException(this + " is read-only");
    }

    @Override // ju.h
    public void i(c0 path, boolean z10) {
        Intrinsics.checkNotNullParameter(path, "path");
        throw new IOException(this + " is read-only");
    }

    @Override // ju.h
    public List k(c0 dir) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        String A = A(dir);
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        boolean z10 = false;
        for (Pair pair : w()) {
            ju.h hVar = (ju.h) pair.a();
            c0 c0Var = (c0) pair.b();
            try {
                ArrayList<c0> arrayList = new ArrayList();
                for (Object obj : hVar.k(c0Var.l(A))) {
                    if (f36736h.c((c0) obj)) {
                        arrayList.add(obj);
                    }
                }
                ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
                for (c0 c0Var2 : arrayList) {
                    arrayList2.add(f36736h.d(c0Var2, c0Var));
                }
                CollectionsKt.B(linkedHashSet, arrayList2);
                z10 = true;
            } catch (IOException unused) {
            }
        }
        if (z10) {
            return CollectionsKt.h1(linkedHashSet);
        }
        throw new FileNotFoundException("file not found: " + dir);
    }

    @Override // ju.h
    public ju.g m(c0 path) {
        Intrinsics.checkNotNullParameter(path, "path");
        if (!f36736h.c(path)) {
            return null;
        }
        String A = A(path);
        for (Pair pair : w()) {
            ju.g m10 = ((ju.h) pair.a()).m(((c0) pair.b()).l(A));
            if (m10 != null) {
                return m10;
            }
        }
        return null;
    }

    @Override // ju.h
    public ju.f n(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        if (f36736h.c(file)) {
            String A = A(file);
            for (Pair pair : w()) {
                try {
                    return ((ju.h) pair.a()).n(((c0) pair.b()).l(A));
                } catch (FileNotFoundException unused) {
                }
            }
            throw new FileNotFoundException("file not found: " + file);
        }
        throw new FileNotFoundException("file not found: " + file);
    }

    @Override // ju.h
    public Sink p(c0 file, boolean z10) {
        Intrinsics.checkNotNullParameter(file, "file");
        throw new IOException(this + " is read-only");
    }

    @Override // ju.h
    public Source q(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        if (f36736h.c(file)) {
            c0 c0Var = f36737i;
            URL resource = this.f36738e.getResource(c0.o(c0Var, file, false, 2, null).k(c0Var).toString());
            if (resource != null) {
                URLConnection openConnection = resource.openConnection();
                if (openConnection instanceof JarURLConnection) {
                    ((JarURLConnection) openConnection).setUseCaches(false);
                }
                InputStream inputStream = openConnection.getInputStream();
                Intrinsics.checkNotNullExpressionValue(inputStream, "getInputStream(...)");
                return x.k(inputStream);
            }
            throw new FileNotFoundException("file not found: " + file);
        }
        throw new FileNotFoundException("file not found: " + file);
    }

    public h(ClassLoader classLoader, boolean z10, ju.h systemFileSystem) {
        Intrinsics.checkNotNullParameter(classLoader, "classLoader");
        Intrinsics.checkNotNullParameter(systemFileSystem, "systemFileSystem");
        this.f36738e = classLoader;
        this.f36739f = systemFileSystem;
        this.f36740g = jr.l.b(new b());
        if (z10) {
            w().size();
        }
    }
}
