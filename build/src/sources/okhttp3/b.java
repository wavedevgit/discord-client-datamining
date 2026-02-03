package okhttp3;

import eu.h;
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
import ju.j;
import ju.k;
import ju.x;
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
import xt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Closeable, Flushable {

    /* renamed from: r  reason: collision with root package name */
    public static final C0547b f44345r = new C0547b(null);

    /* renamed from: d  reason: collision with root package name */
    private final xt.d f44346d;

    /* renamed from: e  reason: collision with root package name */
    private int f44347e;

    /* renamed from: i  reason: collision with root package name */
    private int f44348i;

    /* renamed from: o  reason: collision with root package name */
    private int f44349o;

    /* renamed from: p  reason: collision with root package name */
    private int f44350p;

    /* renamed from: q  reason: collision with root package name */
    private int f44351q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final d.C0753d f44352d;

        /* renamed from: e  reason: collision with root package name */
        private final String f44353e;

        /* renamed from: i  reason: collision with root package name */
        private final String f44354i;

        /* renamed from: o  reason: collision with root package name */
        private final BufferedSource f44355o;

        /* renamed from: okhttp3.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0546a extends k {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f44356d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0546a(Source source, a aVar) {
                super(source);
                this.f44356d = aVar;
            }

            @Override // ju.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                this.f44356d.h().close();
                super.close();
            }
        }

        public a(d.C0753d snapshot, String str, String str2) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            this.f44352d = snapshot;
            this.f44353e = str;
            this.f44354i = str2;
            this.f44355o = x.d(new C0546a(snapshot.h(1), this));
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            String str = this.f44354i;
            if (str == null) {
                return -1L;
            }
            return vt.e.X(str, -1L);
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            String str = this.f44353e;
            if (str != null) {
                return MediaType.f44213e.c(str);
            }
            return null;
        }

        public final d.C0753d h() {
            return this.f44352d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f44355o;
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
                return vt.e.f51529b;
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
            return d(response.F0()).contains("*");
        }

        public final String b(HttpUrl url) {
            Intrinsics.checkNotNullParameter(url, "url");
            return ByteString.f44507o.g(url.toString()).z().q();
        }

        public final int c(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            try {
                long t12 = source.t1();
                String I0 = source.I0();
                if (t12 >= 0 && t12 <= 2147483647L && I0.length() <= 0) {
                    return (int) t12;
                }
                throw new IOException("expected an int but was \"" + t12 + I0 + '\"');
            } catch (NumberFormatException e10) {
                throw new IOException(e10.getMessage());
            }
        }

        public final Headers f(Response response) {
            Intrinsics.checkNotNullParameter(response, "<this>");
            Response K0 = response.K0();
            Intrinsics.checkNotNull(K0);
            return e(K0.Z0().h(), response.F0());
        }

        public final boolean g(Response cachedResponse, Headers cachedRequest, Request newRequest) {
            Intrinsics.checkNotNullParameter(cachedResponse, "cachedResponse");
            Intrinsics.checkNotNullParameter(cachedRequest, "cachedRequest");
            Intrinsics.checkNotNullParameter(newRequest, "newRequest");
            Set<String> d10 = d(cachedResponse.F0());
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
    private final class d implements xt.b {

        /* renamed from: a  reason: collision with root package name */
        private final d.b f44370a;

        /* renamed from: b  reason: collision with root package name */
        private final Sink f44371b;

        /* renamed from: c  reason: collision with root package name */
        private final Sink f44372c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f44373d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b f44374e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends j {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f44375e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f44376i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, d dVar, Sink sink) {
                super(sink);
                this.f44375e = bVar;
                this.f44376i = dVar;
            }

            @Override // ju.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                b bVar = this.f44375e;
                d dVar = this.f44376i;
                synchronized (bVar) {
                    if (dVar.d()) {
                        return;
                    }
                    dVar.e(true);
                    bVar.F(bVar.n() + 1);
                    super.close();
                    this.f44376i.f44370a.b();
                }
            }
        }

        public d(b bVar, d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            this.f44374e = bVar;
            this.f44370a = editor;
            Sink f10 = editor.f(1);
            this.f44371b = f10;
            this.f44372c = new a(bVar, this, f10);
        }

        @Override // xt.b
        public void a() {
            b bVar = this.f44374e;
            synchronized (bVar) {
                if (this.f44373d) {
                    return;
                }
                this.f44373d = true;
                bVar.E(bVar.l() + 1);
                vt.e.m(this.f44371b);
                try {
                    this.f44370a.a();
                } catch (IOException unused) {
                }
            }
        }

        @Override // xt.b
        public Sink b() {
            return this.f44372c;
        }

        public final boolean d() {
            return this.f44373d;
        }

        public final void e(boolean z10) {
            this.f44373d = z10;
        }
    }

    public b(File directory, long j10, du.a fileSystem) {
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        this.f44346d = new xt.d(fileSystem, directory, 201105, 2, j10, yt.e.f55195i);
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
        this.f44346d.y1(f44345r.b(request.n()));
    }

    public final void E(int i10) {
        this.f44348i = i10;
    }

    public final void F(int i10) {
        this.f44347e = i10;
    }

    public final synchronized void L() {
        this.f44350p++;
    }

    public final synchronized void N(xt.c cacheStrategy) {
        try {
            Intrinsics.checkNotNullParameter(cacheStrategy, "cacheStrategy");
            this.f44351q++;
            if (cacheStrategy.b() != null) {
                this.f44349o++;
            } else if (cacheStrategy.a() != null) {
                this.f44350p++;
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
        this.f44346d.close();
    }

    @Override // java.io.Flushable
    public void flush() {
        this.f44346d.flush();
    }

    public final Response h(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            d.C0753d E0 = this.f44346d.E0(f44345r.b(request.n()));
            if (E0 == null) {
                return null;
            }
            try {
                c cVar = new c(E0.h(0));
                Response d10 = cVar.d(E0);
                if (!cVar.b(request, d10)) {
                    ResponseBody x10 = d10.x();
                    if (x10 != null) {
                        vt.e.m(x10);
                    }
                    return null;
                }
                return d10;
            } catch (IOException unused) {
                vt.e.m(E0);
                return null;
            }
        } catch (IOException unused2) {
        }
    }

    public final int l() {
        return this.f44348i;
    }

    public final int n() {
        return this.f44347e;
    }

    public final xt.b x(Response response) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(response, "response");
        String j10 = response.Z0().j();
        if (au.f.f6100a.a(response.Z0().j())) {
            try {
                B(response.Z0());
            } catch (IOException unused) {
            }
            return null;
        } else if (!Intrinsics.areEqual(j10, "GET")) {
            return null;
        } else {
            C0547b c0547b = f44345r;
            if (c0547b.a(response)) {
                return null;
            }
            c cVar = new c(response);
            try {
                bVar = xt.d.D0(this.f44346d, c0547b.b(response.Z0().n()), 0L, 2, null);
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
        this(directory, j10, du.a.f22496b);
        Intrinsics.checkNotNullParameter(directory, "directory");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c {

        /* renamed from: k  reason: collision with root package name */
        public static final a f44357k = new a(null);

        /* renamed from: l  reason: collision with root package name */
        private static final String f44358l;

        /* renamed from: m  reason: collision with root package name */
        private static final String f44359m;

        /* renamed from: a  reason: collision with root package name */
        private final HttpUrl f44360a;

        /* renamed from: b  reason: collision with root package name */
        private final Headers f44361b;

        /* renamed from: c  reason: collision with root package name */
        private final String f44362c;

        /* renamed from: d  reason: collision with root package name */
        private final ut.j f44363d;

        /* renamed from: e  reason: collision with root package name */
        private final int f44364e;

        /* renamed from: f  reason: collision with root package name */
        private final String f44365f;

        /* renamed from: g  reason: collision with root package name */
        private final Headers f44366g;

        /* renamed from: h  reason: collision with root package name */
        private final g f44367h;

        /* renamed from: i  reason: collision with root package name */
        private final long f44368i;

        /* renamed from: j  reason: collision with root package name */
        private final long f44369j;

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
            sb2.append(eu.h.f23247a.g().g());
            sb2.append("-Sent-Millis");
            f44358l = sb2.toString();
            f44359m = aVar.g().g() + "-Received-Millis";
        }

        public c(Source rawSource) {
            h hVar;
            Intrinsics.checkNotNullParameter(rawSource, "rawSource");
            try {
                BufferedSource d10 = x.d(rawSource);
                String I0 = d10.I0();
                HttpUrl f10 = HttpUrl.f44192k.f(I0);
                if (f10 != null) {
                    this.f44360a = f10;
                    this.f44362c = d10.I0();
                    Headers.a aVar = new Headers.a();
                    int c10 = b.f44345r.c(d10);
                    for (int i10 = 0; i10 < c10; i10++) {
                        aVar.c(d10.I0());
                    }
                    this.f44361b = aVar.f();
                    au.k a10 = au.k.f6116d.a(d10.I0());
                    this.f44363d = a10.f6117a;
                    this.f44364e = a10.f6118b;
                    this.f44365f = a10.f6119c;
                    Headers.a aVar2 = new Headers.a();
                    int c11 = b.f44345r.c(d10);
                    for (int i11 = 0; i11 < c11; i11++) {
                        aVar2.c(d10.I0());
                    }
                    String str = f44358l;
                    String g10 = aVar2.g(str);
                    String str2 = f44359m;
                    String g11 = aVar2.g(str2);
                    aVar2.i(str);
                    aVar2.i(str2);
                    this.f44368i = g10 != null ? Long.parseLong(g10) : 0L;
                    this.f44369j = g11 != null ? Long.parseLong(g11) : 0L;
                    this.f44366g = aVar2.f();
                    if (a()) {
                        String I02 = d10.I0();
                        if (I02.length() <= 0) {
                            okhttp3.c b10 = okhttp3.c.f44379b.b(d10.I0());
                            List c12 = c(d10);
                            List c13 = c(d10);
                            if (!d10.o1()) {
                                hVar = h.f44480e.a(d10.I0());
                            } else {
                                hVar = h.SSL_3_0;
                            }
                            this.f44367h = g.f44472e.b(hVar, b10, c12, c13);
                        } else {
                            throw new IOException("expected \"\" but was \"" + I02 + '\"');
                        }
                    } else {
                        this.f44367h = null;
                    }
                    Unit unit = Unit.f33074a;
                    ur.c.a(rawSource, null);
                    return;
                }
                IOException iOException = new IOException("Cache corruption for " + I0);
                eu.h.f23247a.g().k("cache corruption", 5, iOException);
                throw iOException;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    ur.c.a(rawSource, th2);
                    throw th3;
                }
            }
        }

        private final boolean a() {
            return Intrinsics.areEqual(this.f44360a.s(), "https");
        }

        private final List c(BufferedSource bufferedSource) {
            int c10 = b.f44345r.c(bufferedSource);
            if (c10 == -1) {
                return CollectionsKt.l();
            }
            try {
                CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
                ArrayList arrayList = new ArrayList(c10);
                for (int i10 = 0; i10 < c10; i10++) {
                    String I0 = bufferedSource.I0();
                    Buffer buffer = new Buffer();
                    ByteString d10 = ByteString.f44507o.d(I0);
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
                    ByteString.a aVar = ByteString.f44507o;
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
            if (Intrinsics.areEqual(this.f44360a, request.n()) && Intrinsics.areEqual(this.f44362c, request.j()) && b.f44345r.g(response, this.f44361b, request)) {
                return true;
            }
            return false;
        }

        public final Response d(d.C0753d snapshot) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            String c10 = this.f44366g.c("Content-Type");
            String c11 = this.f44366g.c("Content-Length");
            return new Response.a().r(new Request.Builder().m(this.f44360a).g(this.f44362c, null).f(this.f44361b).b()).p(this.f44363d).g(this.f44364e).m(this.f44365f).k(this.f44366g).b(new a(snapshot, c10, c11)).i(this.f44367h).s(this.f44368i).q(this.f44369j).c();
        }

        public final void f(d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            BufferedSink c10 = x.c(editor.f(0));
            try {
                c10.o0(this.f44360a.toString()).writeByte(10);
                c10.o0(this.f44362c).writeByte(10);
                c10.W0(this.f44361b.size()).writeByte(10);
                int size = this.f44361b.size();
                for (int i10 = 0; i10 < size; i10++) {
                    c10.o0(this.f44361b.e(i10)).o0(": ").o0(this.f44361b.j(i10)).writeByte(10);
                }
                c10.o0(new au.k(this.f44363d, this.f44364e, this.f44365f).toString()).writeByte(10);
                c10.W0(this.f44366g.size() + 2).writeByte(10);
                int size2 = this.f44366g.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    c10.o0(this.f44366g.e(i11)).o0(": ").o0(this.f44366g.j(i11)).writeByte(10);
                }
                c10.o0(f44358l).o0(": ").W0(this.f44368i).writeByte(10);
                c10.o0(f44359m).o0(": ").W0(this.f44369j).writeByte(10);
                if (a()) {
                    c10.writeByte(10);
                    g gVar = this.f44367h;
                    Intrinsics.checkNotNull(gVar);
                    c10.o0(gVar.a().c()).writeByte(10);
                    e(c10, this.f44367h.d());
                    e(c10, this.f44367h.c());
                    c10.o0(this.f44367h.e().d()).writeByte(10);
                }
                Unit unit = Unit.f33074a;
                ur.c.a(c10, null);
            } finally {
            }
        }

        public c(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f44360a = response.Z0().n();
            this.f44361b = b.f44345r.f(response);
            this.f44362c = response.Z0().j();
            this.f44363d = response.V0();
            this.f44364e = response.L();
            this.f44365f = response.J0();
            this.f44366g = response.F0();
            this.f44367h = response.V();
            this.f44368i = response.e1();
            this.f44369j = response.Y0();
        }
    }
}
