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
    public static final C0565b f43052r = new C0565b(null);

    /* renamed from: d  reason: collision with root package name */
    private final eu.d f43053d;

    /* renamed from: e  reason: collision with root package name */
    private int f43054e;

    /* renamed from: i  reason: collision with root package name */
    private int f43055i;

    /* renamed from: o  reason: collision with root package name */
    private int f43056o;

    /* renamed from: p  reason: collision with root package name */
    private int f43057p;

    /* renamed from: q  reason: collision with root package name */
    private int f43058q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final d.C0315d f43059d;

        /* renamed from: e  reason: collision with root package name */
        private final String f43060e;

        /* renamed from: i  reason: collision with root package name */
        private final String f43061i;

        /* renamed from: o  reason: collision with root package name */
        private final BufferedSource f43062o;

        /* renamed from: okhttp3.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0564a extends k {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f43063d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0564a(Source source, a aVar) {
                super(source);
                this.f43063d = aVar;
            }

            @Override // qu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                this.f43063d.g().close();
                super.close();
            }
        }

        public a(d.C0315d snapshot, String str, String str2) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            this.f43059d = snapshot;
            this.f43060e = str;
            this.f43061i = str2;
            this.f43062o = x.d(new C0564a(snapshot.g(1), this));
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            String str = this.f43061i;
            if (str == null) {
                return -1L;
            }
            return cu.e.X(str, -1L);
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            String str = this.f43060e;
            if (str != null) {
                return MediaType.f42920e.c(str);
            }
            return null;
        }

        public final d.C0315d g() {
            return this.f43059d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f43062o;
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
            return ByteString.f43214o.g(url.toString()).z().q();
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
        private final d.b f43077a;

        /* renamed from: b  reason: collision with root package name */
        private final Sink f43078b;

        /* renamed from: c  reason: collision with root package name */
        private final Sink f43079c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f43080d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b f43081e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends j {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f43082e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f43083i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, d dVar, Sink sink) {
                super(sink);
                this.f43082e = bVar;
                this.f43083i = dVar;
            }

            @Override // qu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                b bVar = this.f43082e;
                d dVar = this.f43083i;
                synchronized (bVar) {
                    if (dVar.d()) {
                        return;
                    }
                    dVar.e(true);
                    bVar.y(bVar.m() + 1);
                    super.close();
                    this.f43083i.f43077a.b();
                }
            }
        }

        public d(b bVar, d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            this.f43081e = bVar;
            this.f43077a = editor;
            Sink f10 = editor.f(1);
            this.f43078b = f10;
            this.f43079c = new a(bVar, this, f10);
        }

        @Override // eu.b
        public void a() {
            b bVar = this.f43081e;
            synchronized (bVar) {
                if (this.f43080d) {
                    return;
                }
                this.f43080d = true;
                bVar.s(bVar.k() + 1);
                cu.e.m(this.f43078b);
                try {
                    this.f43077a.a();
                } catch (IOException unused) {
                }
            }
        }

        @Override // eu.b
        public Sink b() {
            return this.f43079c;
        }

        public final boolean d() {
            return this.f43080d;
        }

        public final void e(boolean z10) {
            this.f43080d = z10;
        }
    }

    public b(File directory, long j10, ku.a fileSystem) {
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        this.f43053d = new eu.d(fileSystem, directory, 201105, 2, j10, fu.e.f23765i);
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
            this.f43058q++;
            if (cacheStrategy.b() != null) {
                this.f43056o++;
            } else if (cacheStrategy.a() != null) {
                this.f43057p++;
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
        this.f43053d.close();
    }

    @Override // java.io.Flushable
    public void flush() {
        this.f43053d.flush();
    }

    public final Response g(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            d.C0315d Y = this.f43053d.Y(f43052r.b(request.n()));
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
        return this.f43055i;
    }

    public final int m() {
        return this.f43054e;
    }

    public final eu.b n(Response response) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(response, "response");
        String j10 = response.Y0().j();
        if (hu.f.f26548a.a(response.Y0().j())) {
            try {
                p(response.Y0());
            } catch (IOException unused) {
            }
            return null;
        } else if (!Intrinsics.areEqual(j10, "GET")) {
            return null;
        } else {
            C0565b c0565b = f43052r;
            if (c0565b.a(response)) {
                return null;
            }
            c cVar = new c(response);
            try {
                bVar = eu.d.P(this.f43053d, c0565b.b(response.Y0().n()), 0L, 2, null);
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
        this.f43053d.x1(f43052r.b(request.n()));
    }

    public final void s(int i10) {
        this.f43055i = i10;
    }

    public final void y(int i10) {
        this.f43054e = i10;
    }

    public final synchronized void z() {
        this.f43057p++;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public b(File directory, long j10) {
        this(directory, j10, ku.a.f35585b);
        Intrinsics.checkNotNullParameter(directory, "directory");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c {

        /* renamed from: k  reason: collision with root package name */
        public static final a f43064k = new a(null);

        /* renamed from: l  reason: collision with root package name */
        private static final String f43065l;

        /* renamed from: m  reason: collision with root package name */
        private static final String f43066m;

        /* renamed from: a  reason: collision with root package name */
        private final HttpUrl f43067a;

        /* renamed from: b  reason: collision with root package name */
        private final Headers f43068b;

        /* renamed from: c  reason: collision with root package name */
        private final String f43069c;

        /* renamed from: d  reason: collision with root package name */
        private final bu.j f43070d;

        /* renamed from: e  reason: collision with root package name */
        private final int f43071e;

        /* renamed from: f  reason: collision with root package name */
        private final String f43072f;

        /* renamed from: g  reason: collision with root package name */
        private final Headers f43073g;

        /* renamed from: h  reason: collision with root package name */
        private final g f43074h;

        /* renamed from: i  reason: collision with root package name */
        private final long f43075i;

        /* renamed from: j  reason: collision with root package name */
        private final long f43076j;

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
            sb2.append(lu.h.f36825a.g().g());
            sb2.append("-Sent-Millis");
            f43065l = sb2.toString();
            f43066m = aVar.g().g() + "-Received-Millis";
        }

        public c(Source rawSource) {
            h hVar;
            Intrinsics.checkNotNullParameter(rawSource, "rawSource");
            try {
                BufferedSource d10 = x.d(rawSource);
                String H0 = d10.H0();
                HttpUrl f10 = HttpUrl.f42899k.f(H0);
                if (f10 != null) {
                    this.f43067a = f10;
                    this.f43069c = d10.H0();
                    Headers.a aVar = new Headers.a();
                    int c10 = b.f43052r.c(d10);
                    for (int i10 = 0; i10 < c10; i10++) {
                        aVar.c(d10.H0());
                    }
                    this.f43068b = aVar.f();
                    hu.k a10 = hu.k.f26564d.a(d10.H0());
                    this.f43070d = a10.f26565a;
                    this.f43071e = a10.f26566b;
                    this.f43072f = a10.f26567c;
                    Headers.a aVar2 = new Headers.a();
                    int c11 = b.f43052r.c(d10);
                    for (int i11 = 0; i11 < c11; i11++) {
                        aVar2.c(d10.H0());
                    }
                    String str = f43065l;
                    String g10 = aVar2.g(str);
                    String str2 = f43066m;
                    String g11 = aVar2.g(str2);
                    aVar2.i(str);
                    aVar2.i(str2);
                    this.f43075i = g10 != null ? Long.parseLong(g10) : 0L;
                    this.f43076j = g11 != null ? Long.parseLong(g11) : 0L;
                    this.f43073g = aVar2.f();
                    if (a()) {
                        String H02 = d10.H0();
                        if (H02.length() <= 0) {
                            okhttp3.c b10 = okhttp3.c.f43086b.b(d10.H0());
                            List c12 = c(d10);
                            List c13 = c(d10);
                            if (!d10.n1()) {
                                hVar = h.f43187e.a(d10.H0());
                            } else {
                                hVar = h.SSL_3_0;
                            }
                            this.f43074h = g.f43179e.b(hVar, b10, c12, c13);
                        } else {
                            throw new IOException("expected \"\" but was \"" + H02 + '\"');
                        }
                    } else {
                        this.f43074h = null;
                    }
                    Unit unit = Unit.f32056a;
                    bs.c.a(rawSource, null);
                    return;
                }
                IOException iOException = new IOException("Cache corruption for " + H0);
                lu.h.f36825a.g().k("cache corruption", 5, iOException);
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
            return Intrinsics.areEqual(this.f43067a.s(), "https");
        }

        private final List c(BufferedSource bufferedSource) {
            int c10 = b.f43052r.c(bufferedSource);
            if (c10 == -1) {
                return CollectionsKt.l();
            }
            try {
                CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
                ArrayList arrayList = new ArrayList(c10);
                for (int i10 = 0; i10 < c10; i10++) {
                    String H0 = bufferedSource.H0();
                    Buffer buffer = new Buffer();
                    ByteString d10 = ByteString.f43214o.d(H0);
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
                    ByteString.a aVar = ByteString.f43214o;
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
            if (Intrinsics.areEqual(this.f43067a, request.n()) && Intrinsics.areEqual(this.f43069c, request.j()) && b.f43052r.g(response, this.f43068b, request)) {
                return true;
            }
            return false;
        }

        public final Response d(d.C0315d snapshot) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            String c10 = this.f43073g.c("Content-Type");
            String c11 = this.f43073g.c("Content-Length");
            return new Response.a().r(new Request.Builder().m(this.f43067a).g(this.f43069c, null).f(this.f43068b).b()).p(this.f43070d).g(this.f43071e).m(this.f43072f).k(this.f43073g).b(new a(snapshot, c10, c11)).i(this.f43074h).s(this.f43075i).q(this.f43076j).c();
        }

        public final void f(d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            BufferedSink c10 = x.c(editor.f(0));
            try {
                c10.q0(this.f43067a.toString()).writeByte(10);
                c10.q0(this.f43069c).writeByte(10);
                c10.W0(this.f43068b.size()).writeByte(10);
                int size = this.f43068b.size();
                for (int i10 = 0; i10 < size; i10++) {
                    c10.q0(this.f43068b.e(i10)).q0(": ").q0(this.f43068b.j(i10)).writeByte(10);
                }
                c10.q0(new hu.k(this.f43070d, this.f43071e, this.f43072f).toString()).writeByte(10);
                c10.W0(this.f43073g.size() + 2).writeByte(10);
                int size2 = this.f43073g.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    c10.q0(this.f43073g.e(i11)).q0(": ").q0(this.f43073g.j(i11)).writeByte(10);
                }
                c10.q0(f43065l).q0(": ").W0(this.f43075i).writeByte(10);
                c10.q0(f43066m).q0(": ").W0(this.f43076j).writeByte(10);
                if (a()) {
                    c10.writeByte(10);
                    g gVar = this.f43074h;
                    Intrinsics.checkNotNull(gVar);
                    c10.q0(gVar.a().c()).writeByte(10);
                    e(c10, this.f43074h.d());
                    e(c10, this.f43074h.c());
                    c10.q0(this.f43074h.e().d()).writeByte(10);
                }
                Unit unit = Unit.f32056a;
                bs.c.a(c10, null);
            } finally {
            }
        }

        public c(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f43067a = response.Y0().n();
            this.f43068b = b.f43052r.f(response);
            this.f43069c = response.Y0().j();
            this.f43070d = response.O0();
            this.f43071e = response.z();
            this.f43072f = response.I0();
            this.f43073g = response.E0();
            this.f43074h = response.I();
            this.f43075i = response.d1();
            this.f43076j = response.V0();
        }
    }
}
