package okhttp3;

import eu.d;
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
import lu.h;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import okio.Sink;
import okio.Source;
import qu.j;
import qu.k;
import qu.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Closeable, Flushable {

    /* renamed from: r  reason: collision with root package name */
    public static final C0565b f43004r = new C0565b(null);

    /* renamed from: d  reason: collision with root package name */
    private final eu.d f43005d;

    /* renamed from: e  reason: collision with root package name */
    private int f43006e;

    /* renamed from: i  reason: collision with root package name */
    private int f43007i;

    /* renamed from: o  reason: collision with root package name */
    private int f43008o;

    /* renamed from: p  reason: collision with root package name */
    private int f43009p;

    /* renamed from: q  reason: collision with root package name */
    private int f43010q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final d.C0315d f43011d;

        /* renamed from: e  reason: collision with root package name */
        private final String f43012e;

        /* renamed from: i  reason: collision with root package name */
        private final String f43013i;

        /* renamed from: o  reason: collision with root package name */
        private final BufferedSource f43014o;

        /* renamed from: okhttp3.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0564a extends k {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f43015d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0564a(Source source, a aVar) {
                super(source);
                this.f43015d = aVar;
            }

            @Override // qu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                this.f43015d.g().close();
                super.close();
            }
        }

        public a(d.C0315d snapshot, String str, String str2) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            this.f43011d = snapshot;
            this.f43012e = str;
            this.f43013i = str2;
            this.f43014o = x.d(new C0564a(snapshot.g(1), this));
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            String str = this.f43013i;
            if (str == null) {
                return -1L;
            }
            return cu.e.X(str, -1L);
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            String str = this.f43012e;
            if (str != null) {
                return MediaType.f42872e.c(str);
            }
            return null;
        }

        public final d.C0315d g() {
            return this.f43011d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f43014o;
        }
    }

    /* renamed from: okhttp3.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0565b {
        public /* synthetic */ C0565b(DefaultConstructorMarker defaultConstructorMarker) {
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
                return cu.e.f20036b;
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
            return ByteString.f43166o.g(url.toString()).z().q();
        }

        public final int c(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            try {
                long s12 = source.s1();
                String H0 = source.H0();
                if (s12 >= 0 && s12 <= 2147483647L && H0.length() <= 0) {
                    return (int) s12;
                }
                throw new IOException("expected an int but was \"" + s12 + H0 + '\"');
            } catch (NumberFormatException e10) {
                throw new IOException(e10.getMessage());
            }
        }

        public final Headers f(Response response) {
            Intrinsics.checkNotNullParameter(response, "<this>");
            Response J0 = response.J0();
            Intrinsics.checkNotNull(J0);
            return e(J0.Y0().h(), response.E0());
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
                if (!Intrinsics.areEqual(cachedRequest.l(str), newRequest.g(str))) {
                    return false;
                }
            }
            return true;
        }

        private C0565b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class d implements eu.b {

        /* renamed from: a  reason: collision with root package name */
        private final d.b f43029a;

        /* renamed from: b  reason: collision with root package name */
        private final Sink f43030b;

        /* renamed from: c  reason: collision with root package name */
        private final Sink f43031c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f43032d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b f43033e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends j {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f43034e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f43035i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, d dVar, Sink sink) {
                super(sink);
                this.f43034e = bVar;
                this.f43035i = dVar;
            }

            @Override // qu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                b bVar = this.f43034e;
                d dVar = this.f43035i;
                synchronized (bVar) {
                    if (dVar.d()) {
                        return;
                    }
                    dVar.e(true);
                    bVar.y(bVar.m() + 1);
                    super.close();
                    this.f43035i.f43029a.b();
                }
            }
        }

        public d(b bVar, d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            this.f43033e = bVar;
            this.f43029a = editor;
            Sink f10 = editor.f(1);
            this.f43030b = f10;
            this.f43031c = new a(bVar, this, f10);
        }

        @Override // eu.b
        public void a() {
            b bVar = this.f43033e;
            synchronized (bVar) {
                if (this.f43032d) {
                    return;
                }
                this.f43032d = true;
                bVar.s(bVar.k() + 1);
                cu.e.m(this.f43030b);
                try {
                    this.f43029a.a();
                } catch (IOException unused) {
                }
            }
        }

        @Override // eu.b
        public Sink b() {
            return this.f43031c;
        }

        public final boolean d() {
            return this.f43032d;
        }

        public final void e(boolean z10) {
            this.f43032d = z10;
        }
    }

    public b(File directory, long j10, ku.a fileSystem) {
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        this.f43005d = new eu.d(fileSystem, directory, 201105, 2, j10, fu.e.f23765i);
    }

    private final void a(d.b bVar) {
        if (bVar != null) {
            try {
                bVar.a();
            } catch (IOException unused) {
            }
        }
    }

    public final synchronized void C(eu.c cacheStrategy) {
        try {
            Intrinsics.checkNotNullParameter(cacheStrategy, "cacheStrategy");
            this.f43010q++;
            if (cacheStrategy.b() != null) {
                this.f43008o++;
            } else if (cacheStrategy.a() != null) {
                this.f43009p++;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final void I(Response cached, Response network) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(cached, "cached");
        Intrinsics.checkNotNullParameter(network, "network");
        c cVar = new c(network);
        ResponseBody n10 = cached.n();
        Intrinsics.checkNotNull(n10, "null cannot be cast to non-null type okhttp3.Cache.CacheResponseBody");
        try {
            bVar = ((a) n10).g().a();
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
        this.f43005d.close();
    }

    @Override // java.io.Flushable
    public void flush() {
        this.f43005d.flush();
    }

    public final Response g(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            d.C0315d Y = this.f43005d.Y(f43004r.b(request.n()));
            if (Y == null) {
                return null;
            }
            try {
                c cVar = new c(Y.g(0));
                Response d10 = cVar.d(Y);
                if (!cVar.b(request, d10)) {
                    ResponseBody n10 = d10.n();
                    if (n10 != null) {
                        cu.e.m(n10);
                    }
                    return null;
                }
                return d10;
            } catch (IOException unused) {
                cu.e.m(Y);
                return null;
            }
        } catch (IOException unused2) {
        }
    }

    public final int k() {
        return this.f43007i;
    }

    public final int m() {
        return this.f43006e;
    }

    public final eu.b n(Response response) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(response, "response");
        String j10 = response.Y0().j();
        if (hu.f.f26500a.a(response.Y0().j())) {
            try {
                p(response.Y0());
            } catch (IOException unused) {
            }
            return null;
        } else if (!Intrinsics.areEqual(j10, "GET")) {
            return null;
        } else {
            C0565b c0565b = f43004r;
            if (c0565b.a(response)) {
                return null;
            }
            c cVar = new c(response);
            try {
                bVar = eu.d.P(this.f43005d, c0565b.b(response.Y0().n()), 0L, 2, null);
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

    public final void p(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f43005d.x1(f43004r.b(request.n()));
    }

    public final void s(int i10) {
        this.f43007i = i10;
    }

    public final void y(int i10) {
        this.f43006e = i10;
    }

    public final synchronized void z() {
        this.f43009p++;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public b(File directory, long j10) {
        this(directory, j10, ku.a.f35537b);
        Intrinsics.checkNotNullParameter(directory, "directory");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c {

        /* renamed from: k  reason: collision with root package name */
        public static final a f43016k = new a(null);

        /* renamed from: l  reason: collision with root package name */
        private static final String f43017l;

        /* renamed from: m  reason: collision with root package name */
        private static final String f43018m;

        /* renamed from: a  reason: collision with root package name */
        private final HttpUrl f43019a;

        /* renamed from: b  reason: collision with root package name */
        private final Headers f43020b;

        /* renamed from: c  reason: collision with root package name */
        private final String f43021c;

        /* renamed from: d  reason: collision with root package name */
        private final bu.j f43022d;

        /* renamed from: e  reason: collision with root package name */
        private final int f43023e;

        /* renamed from: f  reason: collision with root package name */
        private final String f43024f;

        /* renamed from: g  reason: collision with root package name */
        private final Headers f43025g;

        /* renamed from: h  reason: collision with root package name */
        private final g f43026h;

        /* renamed from: i  reason: collision with root package name */
        private final long f43027i;

        /* renamed from: j  reason: collision with root package name */
        private final long f43028j;

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
            sb2.append(lu.h.f36777a.g().g());
            sb2.append("-Sent-Millis");
            f43017l = sb2.toString();
            f43018m = aVar.g().g() + "-Received-Millis";
        }

        public c(Source rawSource) {
            h hVar;
            Intrinsics.checkNotNullParameter(rawSource, "rawSource");
            try {
                BufferedSource d10 = x.d(rawSource);
                String H0 = d10.H0();
                HttpUrl f10 = HttpUrl.f42851k.f(H0);
                if (f10 != null) {
                    this.f43019a = f10;
                    this.f43021c = d10.H0();
                    Headers.a aVar = new Headers.a();
                    int c10 = b.f43004r.c(d10);
                    for (int i10 = 0; i10 < c10; i10++) {
                        aVar.c(d10.H0());
                    }
                    this.f43020b = aVar.f();
                    hu.k a10 = hu.k.f26516d.a(d10.H0());
                    this.f43022d = a10.f26517a;
                    this.f43023e = a10.f26518b;
                    this.f43024f = a10.f26519c;
                    Headers.a aVar2 = new Headers.a();
                    int c11 = b.f43004r.c(d10);
                    for (int i11 = 0; i11 < c11; i11++) {
                        aVar2.c(d10.H0());
                    }
                    String str = f43017l;
                    String g10 = aVar2.g(str);
                    String str2 = f43018m;
                    String g11 = aVar2.g(str2);
                    aVar2.i(str);
                    aVar2.i(str2);
                    this.f43027i = g10 != null ? Long.parseLong(g10) : 0L;
                    this.f43028j = g11 != null ? Long.parseLong(g11) : 0L;
                    this.f43025g = aVar2.f();
                    if (a()) {
                        String H02 = d10.H0();
                        if (H02.length() <= 0) {
                            okhttp3.c b10 = okhttp3.c.f43038b.b(d10.H0());
                            List c12 = c(d10);
                            List c13 = c(d10);
                            if (!d10.n1()) {
                                hVar = h.f43139e.a(d10.H0());
                            } else {
                                hVar = h.SSL_3_0;
                            }
                            this.f43026h = g.f43131e.b(hVar, b10, c12, c13);
                        } else {
                            throw new IOException("expected \"\" but was \"" + H02 + '\"');
                        }
                    } else {
                        this.f43026h = null;
                    }
                    Unit unit = Unit.f32008a;
                    bs.c.a(rawSource, null);
                    return;
                }
                IOException iOException = new IOException("Cache corruption for " + H0);
                lu.h.f36777a.g().k("cache corruption", 5, iOException);
                throw iOException;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    bs.c.a(rawSource, th2);
                    throw th3;
                }
            }
        }

        private final boolean a() {
            return Intrinsics.areEqual(this.f43019a.s(), "https");
        }

        private final List c(BufferedSource bufferedSource) {
            int c10 = b.f43004r.c(bufferedSource);
            if (c10 == -1) {
                return CollectionsKt.l();
            }
            try {
                CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
                ArrayList arrayList = new ArrayList(c10);
                for (int i10 = 0; i10 < c10; i10++) {
                    String H0 = bufferedSource.H0();
                    Buffer buffer = new Buffer();
                    ByteString d10 = ByteString.f43166o.d(H0);
                    if (d10 != null) {
                        buffer.Z1(d10);
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
                    ByteString.a aVar = ByteString.f43166o;
                    Intrinsics.checkNotNullExpressionValue(bytes, "bytes");
                    bufferedSink.q0(ByteString.a.j(aVar, bytes, 0, 0, 3, null).d()).writeByte(10);
                }
            } catch (CertificateEncodingException e10) {
                throw new IOException(e10.getMessage());
            }
        }

        public final boolean b(Request request, Response response) {
            Intrinsics.checkNotNullParameter(request, "request");
            Intrinsics.checkNotNullParameter(response, "response");
            if (Intrinsics.areEqual(this.f43019a, request.n()) && Intrinsics.areEqual(this.f43021c, request.j()) && b.f43004r.g(response, this.f43020b, request)) {
                return true;
            }
            return false;
        }

        public final Response d(d.C0315d snapshot) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            String c10 = this.f43025g.c("Content-Type");
            String c11 = this.f43025g.c("Content-Length");
            return new Response.a().r(new Request.Builder().m(this.f43019a).g(this.f43021c, null).f(this.f43020b).b()).p(this.f43022d).g(this.f43023e).m(this.f43024f).k(this.f43025g).b(new a(snapshot, c10, c11)).i(this.f43026h).s(this.f43027i).q(this.f43028j).c();
        }

        public final void f(d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            BufferedSink c10 = x.c(editor.f(0));
            try {
                c10.q0(this.f43019a.toString()).writeByte(10);
                c10.q0(this.f43021c).writeByte(10);
                c10.W0(this.f43020b.size()).writeByte(10);
                int size = this.f43020b.size();
                for (int i10 = 0; i10 < size; i10++) {
                    c10.q0(this.f43020b.e(i10)).q0(": ").q0(this.f43020b.j(i10)).writeByte(10);
                }
                c10.q0(new hu.k(this.f43022d, this.f43023e, this.f43024f).toString()).writeByte(10);
                c10.W0(this.f43025g.size() + 2).writeByte(10);
                int size2 = this.f43025g.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    c10.q0(this.f43025g.e(i11)).q0(": ").q0(this.f43025g.j(i11)).writeByte(10);
                }
                c10.q0(f43017l).q0(": ").W0(this.f43027i).writeByte(10);
                c10.q0(f43018m).q0(": ").W0(this.f43028j).writeByte(10);
                if (a()) {
                    c10.writeByte(10);
                    g gVar = this.f43026h;
                    Intrinsics.checkNotNull(gVar);
                    c10.q0(gVar.a().c()).writeByte(10);
                    e(c10, this.f43026h.d());
                    e(c10, this.f43026h.c());
                    c10.q0(this.f43026h.e().d()).writeByte(10);
                }
                Unit unit = Unit.f32008a;
                bs.c.a(c10, null);
            } finally {
            }
        }

        public c(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f43019a = response.Y0().n();
            this.f43020b = b.f43004r.f(response);
            this.f43021c = response.Y0().j();
            this.f43022d = response.O0();
            this.f43023e = response.z();
            this.f43024f = response.I0();
            this.f43025g = response.E0();
            this.f43026h = response.I();
            this.f43027i = response.d1();
            this.f43028j = response.V0();
        }
    }
}
