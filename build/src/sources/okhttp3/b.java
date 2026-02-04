package okhttp3;

import gu.h;
import java.io.Closeable;
import java.io.File;
import java.io.Flushable;
import java.io.IOException;
import java.security.cert.Certificate;
import java.security.cert.CertificateEncodingException;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.text.StringsKt;
import lu.j;
import lu.k;
import lu.x;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import okio.Sink;
import okio.Source;
import zt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Closeable, Flushable {

    /* renamed from: r  reason: collision with root package name */
    public static final C0547b f44145r = new C0547b(null);

    /* renamed from: d  reason: collision with root package name */
    private final zt.d f44146d;

    /* renamed from: e  reason: collision with root package name */
    private int f44147e;

    /* renamed from: i  reason: collision with root package name */
    private int f44148i;

    /* renamed from: o  reason: collision with root package name */
    private int f44149o;

    /* renamed from: p  reason: collision with root package name */
    private int f44150p;

    /* renamed from: q  reason: collision with root package name */
    private int f44151q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final d.C0795d f44152d;

        /* renamed from: e  reason: collision with root package name */
        private final String f44153e;

        /* renamed from: i  reason: collision with root package name */
        private final String f44154i;

        /* renamed from: o  reason: collision with root package name */
        private final BufferedSource f44155o;

        /* renamed from: okhttp3.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0546a extends k {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f44156d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0546a(Source source, a aVar) {
                super(source);
                this.f44156d = aVar;
            }

            @Override // lu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                this.f44156d.h().close();
                super.close();
            }
        }

        public a(d.C0795d snapshot, String str, String str2) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            this.f44152d = snapshot;
            this.f44153e = str;
            this.f44154i = str2;
            this.f44155o = x.d(new C0546a(snapshot.h(1), this));
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            String str = this.f44154i;
            if (str == null) {
                return -1L;
            }
            return xt.e.X(str, -1L);
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            String str = this.f44153e;
            if (str != null) {
                return MediaType.f44013e.c(str);
            }
            return null;
        }

        public final d.C0795d h() {
            return this.f44152d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f44155o;
        }
    }

    /* renamed from: okhttp3.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0547b {
        public /* synthetic */ C0547b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Set d(Headers headers) {
            int size = headers.size();
            TreeSet treeSet = null;
            for (int i10 = 0; i10 < size; i10++) {
                if (StringsKt.A("Vary", headers.e(i10), true)) {
                    String j10 = headers.j(i10);
                    if (treeSet == null) {
                        treeSet = new TreeSet(StringsKt.C(StringCompanionObject.INSTANCE));
                    }
                    for (String str : StringsKt.L0(j10, new char[]{','}, false, 0, 6, null)) {
                        treeSet.add(StringsKt.k1(str).toString());
                    }
                }
            }
            if (treeSet == null) {
                return x0.d();
            }
            return treeSet;
        }

        private final Headers e(Headers headers, Headers headers2) {
            Set d10 = d(headers2);
            if (d10.isEmpty()) {
                return xt.e.f53565b;
            }
            Headers.a aVar = new Headers.a();
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headers.e(i10);
                if (d10.contains(e10)) {
                    aVar.a(e10, headers.j(i10));
                }
            }
            return aVar.f();
        }

        public final boolean a(Response response) {
            Intrinsics.checkNotNullParameter(response, "<this>");
            return d(response.E0()).contains("*");
        }

        public final String b(HttpUrl url) {
            Intrinsics.checkNotNullParameter(url, "url");
            return ByteString.f44307o.g(url.toString()).z().q();
        }

        public final int c(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            try {
                long t12 = source.t1();
                String H0 = source.H0();
                if (t12 >= 0 && t12 <= 2147483647L && H0.length() <= 0) {
                    return (int) t12;
                }
                throw new IOException("expected an int but was \"" + t12 + H0 + '\"');
            } catch (NumberFormatException e10) {
                throw new IOException(e10.getMessage());
            }
        }

        public final Headers f(Response response) {
            Intrinsics.checkNotNullParameter(response, "<this>");
            Response J0 = response.J0();
            Intrinsics.checkNotNull(J0);
            return e(J0.Z0().h(), response.E0());
        }

        public final boolean g(Response cachedResponse, Headers cachedRequest, Request newRequest) {
            Intrinsics.checkNotNullParameter(cachedResponse, "cachedResponse");
            Intrinsics.checkNotNullParameter(cachedRequest, "cachedRequest");
            Intrinsics.checkNotNullParameter(newRequest, "newRequest");
            Set<String> d10 = d(cachedResponse.E0());
            if ((d10 instanceof Collection) && d10.isEmpty()) {
                return true;
            }
            for (String str : d10) {
                if (!Intrinsics.areEqual(cachedRequest.k(str), newRequest.g(str))) {
                    return false;
                }
            }
            return true;
        }

        private C0547b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class d implements zt.b {

        /* renamed from: a  reason: collision with root package name */
        private final d.b f44170a;

        /* renamed from: b  reason: collision with root package name */
        private final Sink f44171b;

        /* renamed from: c  reason: collision with root package name */
        private final Sink f44172c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f44173d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b f44174e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends j {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f44175e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f44176i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, d dVar, Sink sink) {
                super(sink);
                this.f44175e = bVar;
                this.f44176i = dVar;
            }

            @Override // lu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                b bVar = this.f44175e;
                d dVar = this.f44176i;
                synchronized (bVar) {
                    if (dVar.d()) {
                        return;
                    }
                    dVar.e(true);
                    bVar.F(bVar.n() + 1);
                    super.close();
                    this.f44176i.f44170a.b();
                }
            }
        }

        public d(b bVar, d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            this.f44174e = bVar;
            this.f44170a = editor;
            Sink f10 = editor.f(1);
            this.f44171b = f10;
            this.f44172c = new a(bVar, this, f10);
        }

        @Override // zt.b
        public void a() {
            b bVar = this.f44174e;
            synchronized (bVar) {
                if (this.f44173d) {
                    return;
                }
                this.f44173d = true;
                bVar.E(bVar.l() + 1);
                xt.e.m(this.f44171b);
                try {
                    this.f44170a.a();
                } catch (IOException unused) {
                }
            }
        }

        @Override // zt.b
        public Sink b() {
            return this.f44172c;
        }

        public final boolean d() {
            return this.f44173d;
        }

        public final void e(boolean z10) {
            this.f44173d = z10;
        }
    }

    public b(File directory, long j10, fu.a fileSystem) {
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        this.f44146d = new zt.d(fileSystem, directory, 201105, 2, j10, au.e.f6153i);
    }

    private final void a(d.b bVar) {
        if (bVar != null) {
            try {
                bVar.a();
            } catch (IOException unused) {
            }
        }
    }

    public final void B(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f44146d.y1(f44145r.b(request.n()));
    }

    public final void E(int i10) {
        this.f44148i = i10;
    }

    public final void F(int i10) {
        this.f44147e = i10;
    }

    public final synchronized void L() {
        this.f44150p++;
    }

    public final synchronized void N(zt.c cacheStrategy) {
        try {
            Intrinsics.checkNotNullParameter(cacheStrategy, "cacheStrategy");
            this.f44151q++;
            if (cacheStrategy.b() != null) {
                this.f44149o++;
            } else if (cacheStrategy.a() != null) {
                this.f44150p++;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final void V(Response cached, Response network) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(cached, "cached");
        Intrinsics.checkNotNullParameter(network, "network");
        c cVar = new c(network);
        ResponseBody x10 = cached.x();
        Intrinsics.checkNotNull(x10, "null cannot be cast to non-null type okhttp3.Cache.CacheResponseBody");
        try {
            bVar = ((a) x10).h().a();
            if (bVar == null) {
                return;
            }
            try {
                cVar.f(bVar);
                bVar.b();
            } catch (IOException unused) {
                a(bVar);
            }
        } catch (IOException unused2) {
            bVar = null;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f44146d.close();
    }

    @Override // java.io.Flushable
    public void flush() {
        this.f44146d.flush();
    }

    public final Response h(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            d.C0795d D0 = this.f44146d.D0(f44145r.b(request.n()));
            if (D0 == null) {
                return null;
            }
            try {
                c cVar = new c(D0.h(0));
                Response d10 = cVar.d(D0);
                if (!cVar.b(request, d10)) {
                    ResponseBody x10 = d10.x();
                    if (x10 != null) {
                        xt.e.m(x10);
                    }
                    return null;
                }
                return d10;
            } catch (IOException unused) {
                xt.e.m(D0);
                return null;
            }
        } catch (IOException unused2) {
        }
    }

    public final int l() {
        return this.f44148i;
    }

    public final int n() {
        return this.f44147e;
    }

    public final zt.b x(Response response) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(response, "response");
        String j10 = response.Z0().j();
        if (cu.f.f19864a.a(response.Z0().j())) {
            try {
                B(response.Z0());
            } catch (IOException unused) {
            }
            return null;
        } else if (!Intrinsics.areEqual(j10, "GET")) {
            return null;
        } else {
            C0547b c0547b = f44145r;
            if (c0547b.a(response)) {
                return null;
            }
            c cVar = new c(response);
            try {
                bVar = zt.d.C0(this.f44146d, c0547b.b(response.Z0().n()), 0L, 2, null);
                if (bVar == null) {
                    return null;
                }
                try {
                    cVar.f(bVar);
                    return new d(this, bVar);
                } catch (IOException unused2) {
                    a(bVar);
                    return null;
                }
            } catch (IOException unused3) {
                bVar = null;
            }
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public b(File directory, long j10) {
        this(directory, j10, fu.a.f24814b);
        Intrinsics.checkNotNullParameter(directory, "directory");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c {

        /* renamed from: k  reason: collision with root package name */
        public static final a f44157k = new a(null);

        /* renamed from: l  reason: collision with root package name */
        private static final String f44158l;

        /* renamed from: m  reason: collision with root package name */
        private static final String f44159m;

        /* renamed from: a  reason: collision with root package name */
        private final HttpUrl f44160a;

        /* renamed from: b  reason: collision with root package name */
        private final Headers f44161b;

        /* renamed from: c  reason: collision with root package name */
        private final String f44162c;

        /* renamed from: d  reason: collision with root package name */
        private final wt.j f44163d;

        /* renamed from: e  reason: collision with root package name */
        private final int f44164e;

        /* renamed from: f  reason: collision with root package name */
        private final String f44165f;

        /* renamed from: g  reason: collision with root package name */
        private final Headers f44166g;

        /* renamed from: h  reason: collision with root package name */
        private final g f44167h;

        /* renamed from: i  reason: collision with root package name */
        private final long f44168i;

        /* renamed from: j  reason: collision with root package name */
        private final long f44169j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        static {
            h.a aVar;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(gu.h.f26650a.g().g());
            sb2.append("-Sent-Millis");
            f44158l = sb2.toString();
            f44159m = aVar.g().g() + "-Received-Millis";
        }

        public c(Source rawSource) {
            h hVar;
            Intrinsics.checkNotNullParameter(rawSource, "rawSource");
            try {
                BufferedSource d10 = x.d(rawSource);
                String H0 = d10.H0();
                HttpUrl f10 = HttpUrl.f43992k.f(H0);
                if (f10 != null) {
                    this.f44160a = f10;
                    this.f44162c = d10.H0();
                    Headers.a aVar = new Headers.a();
                    int c10 = b.f44145r.c(d10);
                    for (int i10 = 0; i10 < c10; i10++) {
                        aVar.c(d10.H0());
                    }
                    this.f44161b = aVar.f();
                    cu.k a10 = cu.k.f19880d.a(d10.H0());
                    this.f44163d = a10.f19881a;
                    this.f44164e = a10.f19882b;
                    this.f44165f = a10.f19883c;
                    Headers.a aVar2 = new Headers.a();
                    int c11 = b.f44145r.c(d10);
                    for (int i11 = 0; i11 < c11; i11++) {
                        aVar2.c(d10.H0());
                    }
                    String str = f44158l;
                    String g10 = aVar2.g(str);
                    String str2 = f44159m;
                    String g11 = aVar2.g(str2);
                    aVar2.i(str);
                    aVar2.i(str2);
                    this.f44168i = g10 != null ? Long.parseLong(g10) : 0L;
                    this.f44169j = g11 != null ? Long.parseLong(g11) : 0L;
                    this.f44166g = aVar2.f();
                    if (a()) {
                        String H02 = d10.H0();
                        if (H02.length() <= 0) {
                            okhttp3.c b10 = okhttp3.c.f44179b.b(d10.H0());
                            List c12 = c(d10);
                            List c13 = c(d10);
                            if (!d10.o1()) {
                                hVar = h.f44280e.a(d10.H0());
                            } else {
                                hVar = h.SSL_3_0;
                            }
                            this.f44167h = g.f44272e.b(hVar, b10, c12, c13);
                        } else {
                            throw new IOException("expected \"\" but was \"" + H02 + '\"');
                        }
                    } else {
                        this.f44167h = null;
                    }
                    Unit unit = Unit.f32464a;
                    wr.c.a(rawSource, null);
                    return;
                }
                IOException iOException = new IOException("Cache corruption for " + H0);
                gu.h.f26650a.g().k("cache corruption", 5, iOException);
                throw iOException;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    wr.c.a(rawSource, th2);
                    throw th3;
                }
            }
        }

        private final boolean a() {
            return Intrinsics.areEqual(this.f44160a.s(), "https");
        }

        private final List c(BufferedSource bufferedSource) {
            int c10 = b.f44145r.c(bufferedSource);
            if (c10 == -1) {
                return CollectionsKt.l();
            }
            try {
                CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
                ArrayList arrayList = new ArrayList(c10);
                for (int i10 = 0; i10 < c10; i10++) {
                    String H0 = bufferedSource.H0();
                    Buffer buffer = new Buffer();
                    ByteString d10 = ByteString.f44307o.d(H0);
                    if (d10 != null) {
                        buffer.a2(d10);
                        arrayList.add(certificateFactory.generateCertificate(buffer.n2()));
                    } else {
                        throw new IOException("Corrupt certificate in cache entry");
                    }
                }
                return arrayList;
            } catch (CertificateException e10) {
                throw new IOException(e10.getMessage());
            }
        }

        private final void e(BufferedSink bufferedSink, List list) {
            try {
                bufferedSink.W0(list.size()).writeByte(10);
                Iterator it = list.iterator();
                while (it.hasNext()) {
                    byte[] bytes = ((Certificate) it.next()).getEncoded();
                    ByteString.a aVar = ByteString.f44307o;
                    Intrinsics.checkNotNullExpressionValue(bytes, "bytes");
                    bufferedSink.n0(ByteString.a.j(aVar, bytes, 0, 0, 3, null).d()).writeByte(10);
                }
            } catch (CertificateEncodingException e10) {
                throw new IOException(e10.getMessage());
            }
        }

        public final boolean b(Request request, Response response) {
            Intrinsics.checkNotNullParameter(request, "request");
            Intrinsics.checkNotNullParameter(response, "response");
            if (Intrinsics.areEqual(this.f44160a, request.n()) && Intrinsics.areEqual(this.f44162c, request.j()) && b.f44145r.g(response, this.f44161b, request)) {
                return true;
            }
            return false;
        }

        public final Response d(d.C0795d snapshot) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            String c10 = this.f44166g.c("Content-Type");
            String c11 = this.f44166g.c("Content-Length");
            return new Response.a().r(new Request.Builder().m(this.f44160a).g(this.f44162c, null).f(this.f44161b).b()).p(this.f44163d).g(this.f44164e).m(this.f44165f).k(this.f44166g).b(new a(snapshot, c10, c11)).i(this.f44167h).s(this.f44168i).q(this.f44169j).c();
        }

        public final void f(d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            BufferedSink c10 = x.c(editor.f(0));
            try {
                c10.n0(this.f44160a.toString()).writeByte(10);
                c10.n0(this.f44162c).writeByte(10);
                c10.W0(this.f44161b.size()).writeByte(10);
                int size = this.f44161b.size();
                for (int i10 = 0; i10 < size; i10++) {
                    c10.n0(this.f44161b.e(i10)).n0(": ").n0(this.f44161b.j(i10)).writeByte(10);
                }
                c10.n0(new cu.k(this.f44163d, this.f44164e, this.f44165f).toString()).writeByte(10);
                c10.W0(this.f44166g.size() + 2).writeByte(10);
                int size2 = this.f44166g.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    c10.n0(this.f44166g.e(i11)).n0(": ").n0(this.f44166g.j(i11)).writeByte(10);
                }
                c10.n0(f44158l).n0(": ").W0(this.f44168i).writeByte(10);
                c10.n0(f44159m).n0(": ").W0(this.f44169j).writeByte(10);
                if (a()) {
                    c10.writeByte(10);
                    g gVar = this.f44167h;
                    Intrinsics.checkNotNull(gVar);
                    c10.n0(gVar.a().c()).writeByte(10);
                    e(c10, this.f44167h.d());
                    e(c10, this.f44167h.c());
                    c10.n0(this.f44167h.e().d()).writeByte(10);
                }
                Unit unit = Unit.f32464a;
                wr.c.a(c10, null);
            } finally {
            }
        }

        public c(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f44160a = response.Z0().n();
            this.f44161b = b.f44145r.f(response);
            this.f44162c = response.Z0().j();
            this.f44163d = response.V0();
            this.f44164e = response.L();
            this.f44165f = response.I0();
            this.f44166g = response.E0();
            this.f44167h = response.V();
            this.f44168i = response.e1();
            this.f44169j = response.Y0();
        }
    }
}
