package okhttp3;

import fu.d;
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
import mu.h;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import okio.Sink;
import okio.Source;
import ru.j;
import ru.k;
import ru.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Closeable, Flushable {

    /* renamed from: r  reason: collision with root package name */
    public static final C0599b f42179r = new C0599b(null);

    /* renamed from: d  reason: collision with root package name */
    private final fu.d f42180d;

    /* renamed from: e  reason: collision with root package name */
    private int f42181e;

    /* renamed from: i  reason: collision with root package name */
    private int f42182i;

    /* renamed from: o  reason: collision with root package name */
    private int f42183o;

    /* renamed from: p  reason: collision with root package name */
    private int f42184p;

    /* renamed from: q  reason: collision with root package name */
    private int f42185q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final d.C0361d f42186d;

        /* renamed from: e  reason: collision with root package name */
        private final String f42187e;

        /* renamed from: i  reason: collision with root package name */
        private final String f42188i;

        /* renamed from: o  reason: collision with root package name */
        private final BufferedSource f42189o;

        /* renamed from: okhttp3.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0598a extends k {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f42190d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0598a(Source source, a aVar) {
                super(source);
                this.f42190d = aVar;
            }

            @Override // ru.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                this.f42190d.g().close();
                super.close();
            }
        }

        public a(d.C0361d snapshot, String str, String str2) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            this.f42186d = snapshot;
            this.f42187e = str;
            this.f42188i = str2;
            this.f42189o = x.d(new C0598a(snapshot.g(1), this));
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            String str = this.f42188i;
            if (str == null) {
                return -1L;
            }
            return du.e.X(str, -1L);
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            String str = this.f42187e;
            if (str != null) {
                return MediaType.f42047e.c(str);
            }
            return null;
        }

        public final d.C0361d g() {
            return this.f42186d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f42189o;
        }
    }

    /* renamed from: okhttp3.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0599b {
        public /* synthetic */ C0599b(DefaultConstructorMarker defaultConstructorMarker) {
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
                return du.e.f20980b;
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
            return d(response.C0()).contains("*");
        }

        public final String b(HttpUrl url) {
            Intrinsics.checkNotNullParameter(url, "url");
            return ByteString.f42341o.g(url.toString()).z().q();
        }

        public final int c(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            try {
                long n12 = source.n1();
                String F0 = source.F0();
                if (n12 >= 0 && n12 <= 2147483647L && F0.length() <= 0) {
                    return (int) n12;
                }
                throw new IOException("expected an int but was \"" + n12 + F0 + '\"');
            } catch (NumberFormatException e10) {
                throw new IOException(e10.getMessage());
            }
        }

        public final Headers f(Response response) {
            Intrinsics.checkNotNullParameter(response, "<this>");
            Response H0 = response.H0();
            Intrinsics.checkNotNull(H0);
            return e(H0.W0().h(), response.C0());
        }

        public final boolean g(Response cachedResponse, Headers cachedRequest, Request newRequest) {
            Intrinsics.checkNotNullParameter(cachedResponse, "cachedResponse");
            Intrinsics.checkNotNullParameter(cachedRequest, "cachedRequest");
            Intrinsics.checkNotNullParameter(newRequest, "newRequest");
            Set<String> d10 = d(cachedResponse.C0());
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

        private C0599b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class d implements fu.b {

        /* renamed from: a  reason: collision with root package name */
        private final d.b f42204a;

        /* renamed from: b  reason: collision with root package name */
        private final Sink f42205b;

        /* renamed from: c  reason: collision with root package name */
        private final Sink f42206c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f42207d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b f42208e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends j {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f42209e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f42210i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, d dVar, Sink sink) {
                super(sink);
                this.f42209e = bVar;
                this.f42210i = dVar;
            }

            @Override // ru.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                b bVar = this.f42209e;
                d dVar = this.f42210i;
                synchronized (bVar) {
                    if (dVar.d()) {
                        return;
                    }
                    dVar.e(true);
                    bVar.y(bVar.m() + 1);
                    super.close();
                    this.f42210i.f42204a.b();
                }
            }
        }

        public d(b bVar, d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            this.f42208e = bVar;
            this.f42204a = editor;
            Sink f10 = editor.f(1);
            this.f42205b = f10;
            this.f42206c = new a(bVar, this, f10);
        }

        @Override // fu.b
        public void a() {
            b bVar = this.f42208e;
            synchronized (bVar) {
                if (this.f42207d) {
                    return;
                }
                this.f42207d = true;
                bVar.s(bVar.k() + 1);
                du.e.m(this.f42205b);
                try {
                    this.f42204a.a();
                } catch (IOException unused) {
                }
            }
        }

        @Override // fu.b
        public Sink b() {
            return this.f42206c;
        }

        public final boolean d() {
            return this.f42207d;
        }

        public final void e(boolean z10) {
            this.f42207d = z10;
        }
    }

    public b(File directory, long j10, lu.a fileSystem) {
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        this.f42180d = new fu.d(fileSystem, directory, 201105, 2, j10, gu.e.f24820i);
    }

    private final void a(d.b bVar) {
        if (bVar != null) {
            try {
                bVar.a();
            } catch (IOException unused) {
            }
        }
    }

    public final synchronized void C(fu.c cacheStrategy) {
        try {
            Intrinsics.checkNotNullParameter(cacheStrategy, "cacheStrategy");
            this.f42185q++;
            if (cacheStrategy.b() != null) {
                this.f42183o++;
            } else if (cacheStrategy.a() != null) {
                this.f42184p++;
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
        this.f42180d.close();
    }

    @Override // java.io.Flushable
    public void flush() {
        this.f42180d.flush();
    }

    public final Response g(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            d.C0361d Z = this.f42180d.Z(f42179r.b(request.n()));
            if (Z == null) {
                return null;
            }
            try {
                c cVar = new c(Z.g(0));
                Response d10 = cVar.d(Z);
                if (!cVar.b(request, d10)) {
                    ResponseBody n10 = d10.n();
                    if (n10 != null) {
                        du.e.m(n10);
                    }
                    return null;
                }
                return d10;
            } catch (IOException unused) {
                du.e.m(Z);
                return null;
            }
        } catch (IOException unused2) {
        }
    }

    public final int k() {
        return this.f42182i;
    }

    public final int m() {
        return this.f42181e;
    }

    public final fu.b n(Response response) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(response, "response");
        String j10 = response.W0().j();
        if (iu.f.f29653a.a(response.W0().j())) {
            try {
                p(response.W0());
            } catch (IOException unused) {
            }
            return null;
        } else if (!Intrinsics.areEqual(j10, "GET")) {
            return null;
        } else {
            C0599b c0599b = f42179r;
            if (c0599b.a(response)) {
                return null;
            }
            c cVar = new c(response);
            try {
                bVar = fu.d.Q(this.f42180d, c0599b.b(response.W0().n()), 0L, 2, null);
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
        this.f42180d.s1(f42179r.b(request.n()));
    }

    public final void s(int i10) {
        this.f42182i = i10;
    }

    public final void y(int i10) {
        this.f42181e = i10;
    }

    public final synchronized void z() {
        this.f42184p++;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public b(File directory, long j10) {
        this(directory, j10, lu.a.f36664b);
        Intrinsics.checkNotNullParameter(directory, "directory");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c {

        /* renamed from: k  reason: collision with root package name */
        public static final a f42191k = new a(null);

        /* renamed from: l  reason: collision with root package name */
        private static final String f42192l;

        /* renamed from: m  reason: collision with root package name */
        private static final String f42193m;

        /* renamed from: a  reason: collision with root package name */
        private final HttpUrl f42194a;

        /* renamed from: b  reason: collision with root package name */
        private final Headers f42195b;

        /* renamed from: c  reason: collision with root package name */
        private final String f42196c;

        /* renamed from: d  reason: collision with root package name */
        private final cu.j f42197d;

        /* renamed from: e  reason: collision with root package name */
        private final int f42198e;

        /* renamed from: f  reason: collision with root package name */
        private final String f42199f;

        /* renamed from: g  reason: collision with root package name */
        private final Headers f42200g;

        /* renamed from: h  reason: collision with root package name */
        private final g f42201h;

        /* renamed from: i  reason: collision with root package name */
        private final long f42202i;

        /* renamed from: j  reason: collision with root package name */
        private final long f42203j;

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
            sb2.append(mu.h.f37655a.g().g());
            sb2.append("-Sent-Millis");
            f42192l = sb2.toString();
            f42193m = aVar.g().g() + "-Received-Millis";
        }

        public c(Source rawSource) {
            h hVar;
            Intrinsics.checkNotNullParameter(rawSource, "rawSource");
            try {
                BufferedSource d10 = x.d(rawSource);
                String F0 = d10.F0();
                HttpUrl f10 = HttpUrl.f42026k.f(F0);
                if (f10 != null) {
                    this.f42194a = f10;
                    this.f42196c = d10.F0();
                    Headers.a aVar = new Headers.a();
                    int c10 = b.f42179r.c(d10);
                    for (int i10 = 0; i10 < c10; i10++) {
                        aVar.c(d10.F0());
                    }
                    this.f42195b = aVar.f();
                    iu.k a10 = iu.k.f29669d.a(d10.F0());
                    this.f42197d = a10.f29670a;
                    this.f42198e = a10.f29671b;
                    this.f42199f = a10.f29672c;
                    Headers.a aVar2 = new Headers.a();
                    int c11 = b.f42179r.c(d10);
                    for (int i11 = 0; i11 < c11; i11++) {
                        aVar2.c(d10.F0());
                    }
                    String str = f42192l;
                    String g10 = aVar2.g(str);
                    String str2 = f42193m;
                    String g11 = aVar2.g(str2);
                    aVar2.i(str);
                    aVar2.i(str2);
                    this.f42202i = g10 != null ? Long.parseLong(g10) : 0L;
                    this.f42203j = g11 != null ? Long.parseLong(g11) : 0L;
                    this.f42200g = aVar2.f();
                    if (a()) {
                        String F02 = d10.F0();
                        if (F02.length() <= 0) {
                            okhttp3.c b10 = okhttp3.c.f42213b.b(d10.F0());
                            List c12 = c(d10);
                            List c13 = c(d10);
                            if (!d10.k1()) {
                                hVar = h.f42314e.a(d10.F0());
                            } else {
                                hVar = h.SSL_3_0;
                            }
                            this.f42201h = g.f42306e.b(hVar, b10, c12, c13);
                        } else {
                            throw new IOException("expected \"\" but was \"" + F02 + '\"');
                        }
                    } else {
                        this.f42201h = null;
                    }
                    Unit unit = Unit.f31765a;
                    cs.c.a(rawSource, null);
                    return;
                }
                IOException iOException = new IOException("Cache corruption for " + F0);
                mu.h.f37655a.g().k("cache corruption", 5, iOException);
                throw iOException;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    cs.c.a(rawSource, th2);
                    throw th3;
                }
            }
        }

        private final boolean a() {
            return Intrinsics.areEqual(this.f42194a.s(), "https");
        }

        private final List c(BufferedSource bufferedSource) {
            int c10 = b.f42179r.c(bufferedSource);
            if (c10 == -1) {
                return CollectionsKt.l();
            }
            try {
                CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
                ArrayList arrayList = new ArrayList(c10);
                for (int i10 = 0; i10 < c10; i10++) {
                    String F0 = bufferedSource.F0();
                    Buffer buffer = new Buffer();
                    ByteString d10 = ByteString.f42341o.d(F0);
                    if (d10 != null) {
                        buffer.Y1(d10);
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
                bufferedSink.S0(list.size()).writeByte(10);
                Iterator it = list.iterator();
                while (it.hasNext()) {
                    byte[] bytes = ((Certificate) it.next()).getEncoded();
                    ByteString.a aVar = ByteString.f42341o;
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
            if (Intrinsics.areEqual(this.f42194a, request.n()) && Intrinsics.areEqual(this.f42196c, request.j()) && b.f42179r.g(response, this.f42195b, request)) {
                return true;
            }
            return false;
        }

        public final Response d(d.C0361d snapshot) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            String c10 = this.f42200g.c("Content-Type");
            String c11 = this.f42200g.c("Content-Length");
            return new Response.a().r(new Request.Builder().m(this.f42194a).g(this.f42196c, null).f(this.f42195b).b()).p(this.f42197d).g(this.f42198e).m(this.f42199f).k(this.f42200g).b(new a(snapshot, c10, c11)).i(this.f42201h).s(this.f42202i).q(this.f42203j).c();
        }

        public final void f(d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            BufferedSink c10 = x.c(editor.f(0));
            try {
                c10.q0(this.f42194a.toString()).writeByte(10);
                c10.q0(this.f42196c).writeByte(10);
                c10.S0(this.f42195b.size()).writeByte(10);
                int size = this.f42195b.size();
                for (int i10 = 0; i10 < size; i10++) {
                    c10.q0(this.f42195b.e(i10)).q0(": ").q0(this.f42195b.j(i10)).writeByte(10);
                }
                c10.q0(new iu.k(this.f42197d, this.f42198e, this.f42199f).toString()).writeByte(10);
                c10.S0(this.f42200g.size() + 2).writeByte(10);
                int size2 = this.f42200g.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    c10.q0(this.f42200g.e(i11)).q0(": ").q0(this.f42200g.j(i11)).writeByte(10);
                }
                c10.q0(f42192l).q0(": ").S0(this.f42202i).writeByte(10);
                c10.q0(f42193m).q0(": ").S0(this.f42203j).writeByte(10);
                if (a()) {
                    c10.writeByte(10);
                    g gVar = this.f42201h;
                    Intrinsics.checkNotNull(gVar);
                    c10.q0(gVar.a().c()).writeByte(10);
                    e(c10, this.f42201h.d());
                    e(c10, this.f42201h.c());
                    c10.q0(this.f42201h.e().d()).writeByte(10);
                }
                Unit unit = Unit.f31765a;
                cs.c.a(c10, null);
            } finally {
            }
        }

        public c(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f42194a = response.W0().n();
            this.f42195b = b.f42179r.f(response);
            this.f42196c = response.W0().j();
            this.f42197d = response.R0();
            this.f42198e = response.z();
            this.f42199f = response.G0();
            this.f42200g = response.C0();
            this.f42201h = response.I();
            this.f42202i = response.a1();
            this.f42203j = response.V0();
        }
    }
}
