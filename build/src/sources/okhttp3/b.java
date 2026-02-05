package okhttp3;

import cu.d;
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
import ju.h;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.text.StringsKt;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import okio.Sink;
import okio.Source;
import ou.j;
import ou.k;
import ou.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Closeable, Flushable {

    /* renamed from: r  reason: collision with root package name */
    public static final C0555b f43898r = new C0555b(null);

    /* renamed from: d  reason: collision with root package name */
    private final cu.d f43899d;

    /* renamed from: e  reason: collision with root package name */
    private int f43900e;

    /* renamed from: i  reason: collision with root package name */
    private int f43901i;

    /* renamed from: o  reason: collision with root package name */
    private int f43902o;

    /* renamed from: p  reason: collision with root package name */
    private int f43903p;

    /* renamed from: q  reason: collision with root package name */
    private int f43904q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final d.C0278d f43905d;

        /* renamed from: e  reason: collision with root package name */
        private final String f43906e;

        /* renamed from: i  reason: collision with root package name */
        private final String f43907i;

        /* renamed from: o  reason: collision with root package name */
        private final BufferedSource f43908o;

        /* renamed from: okhttp3.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0554a extends k {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f43909d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0554a(Source source, a aVar) {
                super(source);
                this.f43909d = aVar;
            }

            @Override // ou.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                this.f43909d.h().close();
                super.close();
            }
        }

        public a(d.C0278d snapshot, String str, String str2) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            this.f43905d = snapshot;
            this.f43906e = str;
            this.f43907i = str2;
            this.f43908o = x.d(new C0554a(snapshot.h(1), this));
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            String str = this.f43907i;
            if (str == null) {
                return -1L;
            }
            return au.e.X(str, -1L);
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            String str = this.f43906e;
            if (str != null) {
                return MediaType.f43766e.c(str);
            }
            return null;
        }

        public final d.C0278d h() {
            return this.f43905d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f43908o;
        }
    }

    /* renamed from: okhttp3.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0555b {
        public /* synthetic */ C0555b(DefaultConstructorMarker defaultConstructorMarker) {
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
                return au.e.f5994b;
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
            return ByteString.f44060o.g(url.toString()).z().q();
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
            Response K0 = response.K0();
            Intrinsics.checkNotNull(K0);
            return e(K0.Z0().h(), response.E0());
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

        private C0555b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class d implements cu.b {

        /* renamed from: a  reason: collision with root package name */
        private final d.b f43923a;

        /* renamed from: b  reason: collision with root package name */
        private final Sink f43924b;

        /* renamed from: c  reason: collision with root package name */
        private final Sink f43925c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f43926d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b f43927e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends j {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f43928e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f43929i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, d dVar, Sink sink) {
                super(sink);
                this.f43928e = bVar;
                this.f43929i = dVar;
            }

            @Override // ou.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                b bVar = this.f43928e;
                d dVar = this.f43929i;
                synchronized (bVar) {
                    if (dVar.d()) {
                        return;
                    }
                    dVar.e(true);
                    bVar.F(bVar.m() + 1);
                    super.close();
                    this.f43929i.f43923a.b();
                }
            }
        }

        public d(b bVar, d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            this.f43927e = bVar;
            this.f43923a = editor;
            Sink f10 = editor.f(1);
            this.f43924b = f10;
            this.f43925c = new a(bVar, this, f10);
        }

        @Override // cu.b
        public void a() {
            b bVar = this.f43927e;
            synchronized (bVar) {
                if (this.f43926d) {
                    return;
                }
                this.f43926d = true;
                bVar.E(bVar.k() + 1);
                au.e.m(this.f43924b);
                try {
                    this.f43923a.a();
                } catch (IOException unused) {
                }
            }
        }

        @Override // cu.b
        public Sink b() {
            return this.f43925c;
        }

        public final boolean d() {
            return this.f43926d;
        }

        public final void e(boolean z10) {
            this.f43926d = z10;
        }
    }

    public b(File directory, long j10, iu.a fileSystem) {
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        this.f43899d = new cu.d(fileSystem, directory, 201105, 2, j10, du.e.f21258i);
    }

    private final void a(d.b bVar) {
        if (bVar != null) {
            try {
                bVar.a();
            } catch (IOException unused) {
            }
        }
    }

    public final void E(int i10) {
        this.f43901i = i10;
    }

    public final void F(int i10) {
        this.f43900e = i10;
    }

    public final synchronized void L() {
        this.f43903p++;
    }

    public final synchronized void N(cu.c cacheStrategy) {
        try {
            Intrinsics.checkNotNullParameter(cacheStrategy, "cacheStrategy");
            this.f43904q++;
            if (cacheStrategy.b() != null) {
                this.f43902o++;
            } else if (cacheStrategy.a() != null) {
                this.f43903p++;
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
        ResponseBody o10 = cached.o();
        Intrinsics.checkNotNull(o10, "null cannot be cast to non-null type okhttp3.Cache.CacheResponseBody");
        try {
            bVar = ((a) o10).h().a();
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
        this.f43899d.close();
    }

    @Override // java.io.Flushable
    public void flush() {
        this.f43899d.flush();
    }

    public final Response h(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            d.C0278d D0 = this.f43899d.D0(f43898r.b(request.n()));
            if (D0 == null) {
                return null;
            }
            try {
                c cVar = new c(D0.h(0));
                Response d10 = cVar.d(D0);
                if (!cVar.b(request, d10)) {
                    ResponseBody o10 = d10.o();
                    if (o10 != null) {
                        au.e.m(o10);
                    }
                    return null;
                }
                return d10;
            } catch (IOException unused) {
                au.e.m(D0);
                return null;
            }
        } catch (IOException unused2) {
        }
    }

    public final int k() {
        return this.f43901i;
    }

    public final int m() {
        return this.f43900e;
    }

    public final cu.b o(Response response) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(response, "response");
        String j10 = response.Z0().j();
        if (fu.f.f23505a.a(response.Z0().j())) {
            try {
                y(response.Z0());
            } catch (IOException unused) {
            }
            return null;
        } else if (!Intrinsics.areEqual(j10, "GET")) {
            return null;
        } else {
            C0555b c0555b = f43898r;
            if (c0555b.a(response)) {
                return null;
            }
            c cVar = new c(response);
            try {
                bVar = cu.d.C0(this.f43899d, c0555b.b(response.Z0().n()), 0L, 2, null);
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

    public final void y(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        this.f43899d.y1(f43898r.b(request.n()));
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public b(File directory, long j10) {
        this(directory, j10, iu.a.f30386b);
        Intrinsics.checkNotNullParameter(directory, "directory");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c {

        /* renamed from: k  reason: collision with root package name */
        public static final a f43910k = new a(null);

        /* renamed from: l  reason: collision with root package name */
        private static final String f43911l;

        /* renamed from: m  reason: collision with root package name */
        private static final String f43912m;

        /* renamed from: a  reason: collision with root package name */
        private final HttpUrl f43913a;

        /* renamed from: b  reason: collision with root package name */
        private final Headers f43914b;

        /* renamed from: c  reason: collision with root package name */
        private final String f43915c;

        /* renamed from: d  reason: collision with root package name */
        private final zt.j f43916d;

        /* renamed from: e  reason: collision with root package name */
        private final int f43917e;

        /* renamed from: f  reason: collision with root package name */
        private final String f43918f;

        /* renamed from: g  reason: collision with root package name */
        private final Headers f43919g;

        /* renamed from: h  reason: collision with root package name */
        private final g f43920h;

        /* renamed from: i  reason: collision with root package name */
        private final long f43921i;

        /* renamed from: j  reason: collision with root package name */
        private final long f43922j;

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
            sb2.append(ju.h.f31441a.g().g());
            sb2.append("-Sent-Millis");
            f43911l = sb2.toString();
            f43912m = aVar.g().g() + "-Received-Millis";
        }

        public c(Source rawSource) {
            h hVar;
            Intrinsics.checkNotNullParameter(rawSource, "rawSource");
            try {
                BufferedSource d10 = x.d(rawSource);
                String H0 = d10.H0();
                HttpUrl f10 = HttpUrl.f43745k.f(H0);
                if (f10 != null) {
                    this.f43913a = f10;
                    this.f43915c = d10.H0();
                    Headers.a aVar = new Headers.a();
                    int c10 = b.f43898r.c(d10);
                    for (int i10 = 0; i10 < c10; i10++) {
                        aVar.c(d10.H0());
                    }
                    this.f43914b = aVar.f();
                    fu.k a10 = fu.k.f23521d.a(d10.H0());
                    this.f43916d = a10.f23522a;
                    this.f43917e = a10.f23523b;
                    this.f43918f = a10.f23524c;
                    Headers.a aVar2 = new Headers.a();
                    int c11 = b.f43898r.c(d10);
                    for (int i11 = 0; i11 < c11; i11++) {
                        aVar2.c(d10.H0());
                    }
                    String str = f43911l;
                    String g10 = aVar2.g(str);
                    String str2 = f43912m;
                    String g11 = aVar2.g(str2);
                    aVar2.i(str);
                    aVar2.i(str2);
                    this.f43921i = g10 != null ? Long.parseLong(g10) : 0L;
                    this.f43922j = g11 != null ? Long.parseLong(g11) : 0L;
                    this.f43919g = aVar2.f();
                    if (a()) {
                        String H02 = d10.H0();
                        if (H02.length() <= 0) {
                            okhttp3.c b10 = okhttp3.c.f43932b.b(d10.H0());
                            List c12 = c(d10);
                            List c13 = c(d10);
                            if (!d10.o1()) {
                                hVar = h.f44033e.a(d10.H0());
                            } else {
                                hVar = h.SSL_3_0;
                            }
                            this.f43920h = g.f44025e.b(hVar, b10, c12, c13);
                        } else {
                            throw new IOException("expected \"\" but was \"" + H02 + '\"');
                        }
                    } else {
                        this.f43920h = null;
                    }
                    Unit unit = Unit.f31988a;
                    zr.c.a(rawSource, null);
                    return;
                }
                IOException iOException = new IOException("Cache corruption for " + H0);
                ju.h.f31441a.g().k("cache corruption", 5, iOException);
                throw iOException;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    zr.c.a(rawSource, th2);
                    throw th3;
                }
            }
        }

        private final boolean a() {
            return Intrinsics.areEqual(this.f43913a.s(), "https");
        }

        private final List c(BufferedSource bufferedSource) {
            int c10 = b.f43898r.c(bufferedSource);
            if (c10 == -1) {
                return CollectionsKt.l();
            }
            try {
                CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
                ArrayList arrayList = new ArrayList(c10);
                for (int i10 = 0; i10 < c10; i10++) {
                    String H0 = bufferedSource.H0();
                    Buffer buffer = new Buffer();
                    ByteString d10 = ByteString.f44060o.d(H0);
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
                    ByteString.a aVar = ByteString.f44060o;
                    Intrinsics.checkNotNullExpressionValue(bytes, "bytes");
                    bufferedSink.o0(ByteString.a.j(aVar, bytes, 0, 0, 3, null).d()).writeByte(10);
                }
            } catch (CertificateEncodingException e10) {
                throw new IOException(e10.getMessage());
            }
        }

        public final boolean b(Request request, Response response) {
            Intrinsics.checkNotNullParameter(request, "request");
            Intrinsics.checkNotNullParameter(response, "response");
            if (Intrinsics.areEqual(this.f43913a, request.n()) && Intrinsics.areEqual(this.f43915c, request.j()) && b.f43898r.g(response, this.f43914b, request)) {
                return true;
            }
            return false;
        }

        public final Response d(d.C0278d snapshot) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            String c10 = this.f43919g.c("Content-Type");
            String c11 = this.f43919g.c("Content-Length");
            return new Response.a().r(new Request.Builder().m(this.f43913a).g(this.f43915c, null).f(this.f43914b).b()).p(this.f43916d).g(this.f43917e).m(this.f43918f).k(this.f43919g).b(new a(snapshot, c10, c11)).i(this.f43920h).s(this.f43921i).q(this.f43922j).c();
        }

        public final void f(d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            BufferedSink c10 = x.c(editor.f(0));
            try {
                c10.o0(this.f43913a.toString()).writeByte(10);
                c10.o0(this.f43915c).writeByte(10);
                c10.W0(this.f43914b.size()).writeByte(10);
                int size = this.f43914b.size();
                for (int i10 = 0; i10 < size; i10++) {
                    c10.o0(this.f43914b.e(i10)).o0(": ").o0(this.f43914b.j(i10)).writeByte(10);
                }
                c10.o0(new fu.k(this.f43916d, this.f43917e, this.f43918f).toString()).writeByte(10);
                c10.W0(this.f43919g.size() + 2).writeByte(10);
                int size2 = this.f43919g.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    c10.o0(this.f43919g.e(i11)).o0(": ").o0(this.f43919g.j(i11)).writeByte(10);
                }
                c10.o0(f43911l).o0(": ").W0(this.f43921i).writeByte(10);
                c10.o0(f43912m).o0(": ").W0(this.f43922j).writeByte(10);
                if (a()) {
                    c10.writeByte(10);
                    g gVar = this.f43920h;
                    Intrinsics.checkNotNull(gVar);
                    c10.o0(gVar.a().c()).writeByte(10);
                    e(c10, this.f43920h.d());
                    e(c10, this.f43920h.c());
                    c10.o0(this.f43920h.e().d()).writeByte(10);
                }
                Unit unit = Unit.f31988a;
                zr.c.a(c10, null);
            } finally {
            }
        }

        public c(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f43913a = response.Z0().n();
            this.f43914b = b.f43898r.f(response);
            this.f43915c = response.Z0().j();
            this.f43916d = response.V0();
            this.f43917e = response.L();
            this.f43918f = response.I0();
            this.f43919g = response.E0();
            this.f43920h = response.V();
            this.f43921i = response.e1();
            this.f43922j = response.Y0();
        }
    }
}
