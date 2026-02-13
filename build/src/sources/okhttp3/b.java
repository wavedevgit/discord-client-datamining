package okhttp3;

import av.j;
import av.k;
import av.x;
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
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import okio.Sink;
import okio.Source;
import ou.d;
import vu.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Closeable, Flushable {

    /* renamed from: r  reason: collision with root package name */
    public static final C0557b f40998r = new C0557b(null);

    /* renamed from: d  reason: collision with root package name */
    private final ou.d f40999d;

    /* renamed from: e  reason: collision with root package name */
    private int f41000e;

    /* renamed from: i  reason: collision with root package name */
    private int f41001i;

    /* renamed from: o  reason: collision with root package name */
    private int f41002o;

    /* renamed from: p  reason: collision with root package name */
    private int f41003p;

    /* renamed from: q  reason: collision with root package name */
    private int f41004q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final d.C0580d f41005d;

        /* renamed from: e  reason: collision with root package name */
        private final String f41006e;

        /* renamed from: i  reason: collision with root package name */
        private final String f41007i;

        /* renamed from: o  reason: collision with root package name */
        private final BufferedSource f41008o;

        /* renamed from: okhttp3.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0556a extends k {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f41009d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0556a(Source source, a aVar) {
                super(source);
                this.f41009d = aVar;
            }

            @Override // av.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                this.f41009d.h().close();
                super.close();
            }
        }

        public a(d.C0580d snapshot, String str, String str2) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            this.f41005d = snapshot;
            this.f41006e = str;
            this.f41007i = str2;
            this.f41008o = x.d(new C0556a(snapshot.h(1), this));
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            String str = this.f41007i;
            if (str == null) {
                return -1L;
            }
            return mu.e.X(str, -1L);
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            String str = this.f41006e;
            if (str != null) {
                return MediaType.f40866e.c(str);
            }
            return null;
        }

        public final d.C0580d h() {
            return this.f41005d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f41008o;
        }
    }

    /* renamed from: okhttp3.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0557b {
        public /* synthetic */ C0557b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Set d(Headers headers) {
            int size = headers.size();
            TreeSet treeSet = null;
            for (int i10 = 0; i10 < size; i10++) {
                if (StringsKt.A("Vary", headers.e(i10), true)) {
                    String k10 = headers.k(i10);
                    if (treeSet == null) {
                        treeSet = new TreeSet(StringsKt.C(StringCompanionObject.INSTANCE));
                    }
                    for (String str : StringsKt.L0(k10, new char[]{','}, false, 0, 6, null)) {
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
                return mu.e.f37226b;
            }
            Headers.a aVar = new Headers.a();
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headers.e(i10);
                if (d10.contains(e10)) {
                    aVar.a(e10, headers.k(i10));
                }
            }
            return aVar.f();
        }

        public final boolean a(Response response) {
            Intrinsics.checkNotNullParameter(response, "<this>");
            return d(response.z0()).contains("*");
        }

        public final String b(HttpUrl url) {
            Intrinsics.checkNotNullParameter(url, "url");
            return ByteString.f41160o.g(url.toString()).z().q();
        }

        public final int c(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            try {
                long s12 = source.s1();
                String J0 = source.J0();
                if (s12 >= 0 && s12 <= 2147483647L && J0.length() <= 0) {
                    return (int) s12;
                }
                throw new IOException("expected an int but was \"" + s12 + J0 + '\"');
            } catch (NumberFormatException e10) {
                throw new IOException(e10.getMessage());
            }
        }

        public final Headers f(Response response) {
            Intrinsics.checkNotNullParameter(response, "<this>");
            Response F0 = response.F0();
            Intrinsics.checkNotNull(F0);
            return e(F0.O0().h(), response.z0());
        }

        public final boolean g(Response cachedResponse, Headers cachedRequest, Request newRequest) {
            Intrinsics.checkNotNullParameter(cachedResponse, "cachedResponse");
            Intrinsics.checkNotNullParameter(cachedRequest, "cachedRequest");
            Intrinsics.checkNotNullParameter(newRequest, "newRequest");
            Set<String> d10 = d(cachedResponse.z0());
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

        private C0557b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class d implements ou.b {

        /* renamed from: a  reason: collision with root package name */
        private final d.b f41023a;

        /* renamed from: b  reason: collision with root package name */
        private final Sink f41024b;

        /* renamed from: c  reason: collision with root package name */
        private final Sink f41025c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f41026d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b f41027e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends j {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f41028e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f41029i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, d dVar, Sink sink) {
                super(sink);
                this.f41028e = bVar;
                this.f41029i = dVar;
            }

            @Override // av.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                b bVar = this.f41028e;
                d dVar = this.f41029i;
                synchronized (bVar) {
                    if (dVar.d()) {
                        return;
                    }
                    dVar.e(true);
                    bVar.y(bVar.m() + 1);
                    super.close();
                    this.f41029i.f41023a.b();
                }
            }
        }

        public d(b bVar, d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            this.f41027e = bVar;
            this.f41023a = editor;
            Sink f10 = editor.f(1);
            this.f41024b = f10;
            this.f41025c = new a(bVar, this, f10);
        }

        @Override // ou.b
        public void a() {
            b bVar = this.f41027e;
            synchronized (bVar) {
                if (this.f41026d) {
                    return;
                }
                this.f41026d = true;
                bVar.s(bVar.i() + 1);
                mu.e.m(this.f41024b);
                try {
                    this.f41023a.a();
                } catch (IOException unused) {
                }
            }
        }

        @Override // ou.b
        public Sink b() {
            return this.f41025c;
        }

        public final boolean d() {
            return this.f41026d;
        }

        public final void e(boolean z10) {
            this.f41026d = z10;
        }
    }

    public b(File directory, long j10, uu.a fileSystem) {
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        this.f40999d = new ou.d(fileSystem, directory, 201105, 2, j10, pu.e.f43784i);
    }

    private final void a(d.b bVar) {
        if (bVar != null) {
            try {
                bVar.a();
            } catch (IOException unused) {
            }
        }
    }

    public final synchronized void C(ou.c cacheStrategy) {
        try {
            Intrinsics.checkNotNullParameter(cacheStrategy, "cacheStrategy");
            this.f41004q++;
            if (cacheStrategy.b() != null) {
                this.f41002o++;
            } else if (cacheStrategy.a() != null) {
                this.f41003p++;
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
            bVar = ((a) n10).h().a();
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
        this.f40999d.close();
    }

    @Override // java.io.Flushable
    public void flush() {
        this.f40999d.flush();
    }

    public final Response h(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            d.C0580d Z = this.f40999d.Z(f40998r.b(request.n()));
            if (Z == null) {
                return null;
            }
            try {
                c cVar = new c(Z.h(0));
                Response d10 = cVar.d(Z);
                if (!cVar.b(request, d10)) {
                    ResponseBody n10 = d10.n();
                    if (n10 != null) {
                        mu.e.m(n10);
                    }
                    return null;
                }
                return d10;
            } catch (IOException unused) {
                mu.e.m(Z);
                return null;
            }
        } catch (IOException unused2) {
        }
    }

    public final int i() {
        return this.f41001i;
    }

    public final int m() {
        return this.f41000e;
    }

    public final ou.b n(Response response) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(response, "response");
        String j10 = response.O0().j();
        if (ru.f.f48328a.a(response.O0().j())) {
            try {
                p(response.O0());
            } catch (IOException unused) {
            }
            return null;
        } else if (!Intrinsics.areEqual(j10, "GET")) {
            return null;
        } else {
            C0557b c0557b = f40998r;
            if (c0557b.a(response)) {
                return null;
            }
            c cVar = new c(response);
            try {
                bVar = ou.d.Q(this.f40999d, c0557b.b(response.O0().n()), 0L, 2, null);
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
        this.f40999d.Z0(f40998r.b(request.n()));
    }

    public final void s(int i10) {
        this.f41001i = i10;
    }

    public final void y(int i10) {
        this.f41000e = i10;
    }

    public final synchronized void z() {
        this.f41003p++;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public b(File directory, long j10) {
        this(directory, j10, uu.a.f51838b);
        Intrinsics.checkNotNullParameter(directory, "directory");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c {

        /* renamed from: k  reason: collision with root package name */
        public static final a f41010k = new a(null);

        /* renamed from: l  reason: collision with root package name */
        private static final String f41011l;

        /* renamed from: m  reason: collision with root package name */
        private static final String f41012m;

        /* renamed from: a  reason: collision with root package name */
        private final HttpUrl f41013a;

        /* renamed from: b  reason: collision with root package name */
        private final Headers f41014b;

        /* renamed from: c  reason: collision with root package name */
        private final String f41015c;

        /* renamed from: d  reason: collision with root package name */
        private final lu.j f41016d;

        /* renamed from: e  reason: collision with root package name */
        private final int f41017e;

        /* renamed from: f  reason: collision with root package name */
        private final String f41018f;

        /* renamed from: g  reason: collision with root package name */
        private final Headers f41019g;

        /* renamed from: h  reason: collision with root package name */
        private final g f41020h;

        /* renamed from: i  reason: collision with root package name */
        private final long f41021i;

        /* renamed from: j  reason: collision with root package name */
        private final long f41022j;

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
            sb2.append(vu.h.f52584a.g().g());
            sb2.append("-Sent-Millis");
            f41011l = sb2.toString();
            f41012m = aVar.g().g() + "-Received-Millis";
        }

        public c(Source rawSource) {
            h hVar;
            Intrinsics.checkNotNullParameter(rawSource, "rawSource");
            try {
                BufferedSource d10 = x.d(rawSource);
                String J0 = d10.J0();
                HttpUrl f10 = HttpUrl.f40845k.f(J0);
                if (f10 != null) {
                    this.f41013a = f10;
                    this.f41015c = d10.J0();
                    Headers.a aVar = new Headers.a();
                    int c10 = b.f40998r.c(d10);
                    for (int i10 = 0; i10 < c10; i10++) {
                        aVar.c(d10.J0());
                    }
                    this.f41014b = aVar.f();
                    ru.k a10 = ru.k.f48344d.a(d10.J0());
                    this.f41016d = a10.f48345a;
                    this.f41017e = a10.f48346b;
                    this.f41018f = a10.f48347c;
                    Headers.a aVar2 = new Headers.a();
                    int c11 = b.f40998r.c(d10);
                    for (int i11 = 0; i11 < c11; i11++) {
                        aVar2.c(d10.J0());
                    }
                    String str = f41011l;
                    String g10 = aVar2.g(str);
                    String str2 = f41012m;
                    String g11 = aVar2.g(str2);
                    aVar2.i(str);
                    aVar2.i(str2);
                    this.f41021i = g10 != null ? Long.parseLong(g10) : 0L;
                    this.f41022j = g11 != null ? Long.parseLong(g11) : 0L;
                    this.f41019g = aVar2.f();
                    if (a()) {
                        String J02 = d10.J0();
                        if (J02.length() <= 0) {
                            okhttp3.c b10 = okhttp3.c.f41032b.b(d10.J0());
                            List c12 = c(d10);
                            List c13 = c(d10);
                            if (!d10.p1()) {
                                hVar = h.f41133e.a(d10.J0());
                            } else {
                                hVar = h.SSL_3_0;
                            }
                            this.f41020h = g.f41125e.b(hVar, b10, c12, c13);
                        } else {
                            throw new IOException("expected \"\" but was \"" + J02 + '\"');
                        }
                    } else {
                        this.f41020h = null;
                    }
                    Unit unit = Unit.f32556a;
                    ls.c.a(rawSource, null);
                    return;
                }
                IOException iOException = new IOException("Cache corruption for " + J0);
                vu.h.f52584a.g().k("cache corruption", 5, iOException);
                throw iOException;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    ls.c.a(rawSource, th2);
                    throw th3;
                }
            }
        }

        private final boolean a() {
            return Intrinsics.areEqual(this.f41013a.s(), "https");
        }

        private final List c(BufferedSource bufferedSource) {
            int c10 = b.f40998r.c(bufferedSource);
            if (c10 == -1) {
                return CollectionsKt.l();
            }
            try {
                CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
                ArrayList arrayList = new ArrayList(c10);
                for (int i10 = 0; i10 < c10; i10++) {
                    String J0 = bufferedSource.J0();
                    Buffer buffer = new Buffer();
                    ByteString d10 = ByteString.f41160o.d(J0);
                    if (d10 != null) {
                        buffer.e2(d10);
                        arrayList.add(certificateFactory.generateCertificate(buffer.s2()));
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
                    ByteString.a aVar = ByteString.f41160o;
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
            if (Intrinsics.areEqual(this.f41013a, request.n()) && Intrinsics.areEqual(this.f41015c, request.j()) && b.f40998r.g(response, this.f41014b, request)) {
                return true;
            }
            return false;
        }

        public final Response d(d.C0580d snapshot) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            String c10 = this.f41019g.c("Content-Type");
            String c11 = this.f41019g.c("Content-Length");
            return new Response.a().r(new Request.Builder().m(this.f41013a).g(this.f41015c, null).f(this.f41014b).b()).p(this.f41016d).g(this.f41017e).m(this.f41018f).k(this.f41019g).b(new a(snapshot, c10, c11)).i(this.f41020h).s(this.f41021i).q(this.f41022j).c();
        }

        public final void f(d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            BufferedSink c10 = x.c(editor.f(0));
            try {
                c10.q0(this.f41013a.toString()).writeByte(10);
                c10.q0(this.f41015c).writeByte(10);
                c10.W0(this.f41014b.size()).writeByte(10);
                int size = this.f41014b.size();
                for (int i10 = 0; i10 < size; i10++) {
                    c10.q0(this.f41014b.e(i10)).q0(": ").q0(this.f41014b.k(i10)).writeByte(10);
                }
                c10.q0(new ru.k(this.f41016d, this.f41017e, this.f41018f).toString()).writeByte(10);
                c10.W0(this.f41019g.size() + 2).writeByte(10);
                int size2 = this.f41019g.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    c10.q0(this.f41019g.e(i11)).q0(": ").q0(this.f41019g.k(i11)).writeByte(10);
                }
                c10.q0(f41011l).q0(": ").W0(this.f41021i).writeByte(10);
                c10.q0(f41012m).q0(": ").W0(this.f41022j).writeByte(10);
                if (a()) {
                    c10.writeByte(10);
                    g gVar = this.f41020h;
                    Intrinsics.checkNotNull(gVar);
                    c10.q0(gVar.a().c()).writeByte(10);
                    e(c10, this.f41020h.d());
                    e(c10, this.f41020h.c());
                    c10.q0(this.f41020h.e().d()).writeByte(10);
                }
                Unit unit = Unit.f32556a;
                ls.c.a(c10, null);
            } finally {
            }
        }

        public c(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f41013a = response.O0().n();
            this.f41014b = b.f40998r.f(response);
            this.f41015c = response.O0().j();
            this.f41016d = response.L0();
            this.f41017e = response.z();
            this.f41018f = response.E0();
            this.f41019g = response.z0();
            this.f41020h = response.I();
            this.f41021i = response.S0();
            this.f41022j = response.N0();
        }
    }
}
