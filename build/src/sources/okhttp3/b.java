package okhttp3;

import du.h;
import iu.j;
import iu.k;
import iu.x;
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
import wt.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements Closeable, Flushable {

    /* renamed from: r  reason: collision with root package name */
    public static final C0539b f44217r = new C0539b(null);

    /* renamed from: d  reason: collision with root package name */
    private final wt.d f44218d;

    /* renamed from: e  reason: collision with root package name */
    private int f44219e;

    /* renamed from: i  reason: collision with root package name */
    private int f44220i;

    /* renamed from: o  reason: collision with root package name */
    private int f44221o;

    /* renamed from: p  reason: collision with root package name */
    private int f44222p;

    /* renamed from: q  reason: collision with root package name */
    private int f44223q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final d.C0729d f44224d;

        /* renamed from: e  reason: collision with root package name */
        private final String f44225e;

        /* renamed from: i  reason: collision with root package name */
        private final String f44226i;

        /* renamed from: o  reason: collision with root package name */
        private final BufferedSource f44227o;

        /* renamed from: okhttp3.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0538a extends k {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f44228d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0538a(Source source, a aVar) {
                super(source);
                this.f44228d = aVar;
            }

            @Override // iu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                this.f44228d.h().close();
                super.close();
            }
        }

        public a(d.C0729d snapshot, String str, String str2) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            this.f44224d = snapshot;
            this.f44225e = str;
            this.f44226i = str2;
            this.f44227o = x.d(new C0538a(snapshot.h(1), this));
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            String str = this.f44226i;
            if (str == null) {
                return -1L;
            }
            return ut.e.X(str, -1L);
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            String str = this.f44225e;
            if (str != null) {
                return MediaType.f44085e.c(str);
            }
            return null;
        }

        public final d.C0729d h() {
            return this.f44224d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f44227o;
        }
    }

    /* renamed from: okhttp3.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0539b {
        public /* synthetic */ C0539b(DefaultConstructorMarker defaultConstructorMarker) {
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
                return ut.e.f50573b;
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
            return ByteString.f44379o.g(url.toString()).z().q();
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
                if (!Intrinsics.areEqual(cachedRequest.k(str), newRequest.g(str))) {
                    return false;
                }
            }
            return true;
        }

        private C0539b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private final class d implements wt.b {

        /* renamed from: a  reason: collision with root package name */
        private final d.b f44242a;

        /* renamed from: b  reason: collision with root package name */
        private final Sink f44243b;

        /* renamed from: c  reason: collision with root package name */
        private final Sink f44244c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f44245d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b f44246e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends j {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f44247e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f44248i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, d dVar, Sink sink) {
                super(sink);
                this.f44247e = bVar;
                this.f44248i = dVar;
            }

            @Override // iu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                b bVar = this.f44247e;
                d dVar = this.f44248i;
                synchronized (bVar) {
                    if (dVar.d()) {
                        return;
                    }
                    dVar.e(true);
                    bVar.F(bVar.n() + 1);
                    super.close();
                    this.f44248i.f44242a.b();
                }
            }
        }

        public d(b bVar, d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            this.f44246e = bVar;
            this.f44242a = editor;
            Sink f10 = editor.f(1);
            this.f44243b = f10;
            this.f44244c = new a(bVar, this, f10);
        }

        @Override // wt.b
        public void a() {
            b bVar = this.f44246e;
            synchronized (bVar) {
                if (this.f44245d) {
                    return;
                }
                this.f44245d = true;
                bVar.E(bVar.l() + 1);
                ut.e.m(this.f44243b);
                try {
                    this.f44242a.a();
                } catch (IOException unused) {
                }
            }
        }

        @Override // wt.b
        public Sink b() {
            return this.f44244c;
        }

        public final boolean d() {
            return this.f44245d;
        }

        public final void e(boolean z10) {
            this.f44245d = z10;
        }
    }

    public b(File directory, long j10, cu.a fileSystem) {
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        this.f44218d = new wt.d(fileSystem, directory, 201105, 2, j10, xt.e.f53841i);
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
        this.f44218d.y1(f44217r.b(request.n()));
    }

    public final void E(int i10) {
        this.f44220i = i10;
    }

    public final void F(int i10) {
        this.f44219e = i10;
    }

    public final synchronized void L() {
        this.f44222p++;
    }

    public final synchronized void N(wt.c cacheStrategy) {
        try {
            Intrinsics.checkNotNullParameter(cacheStrategy, "cacheStrategy");
            this.f44223q++;
            if (cacheStrategy.b() != null) {
                this.f44221o++;
            } else if (cacheStrategy.a() != null) {
                this.f44222p++;
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
        this.f44218d.close();
    }

    @Override // java.io.Flushable
    public void flush() {
        this.f44218d.flush();
    }

    public final Response h(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            d.C0729d D0 = this.f44218d.D0(f44217r.b(request.n()));
            if (D0 == null) {
                return null;
            }
            try {
                c cVar = new c(D0.h(0));
                Response d10 = cVar.d(D0);
                if (!cVar.b(request, d10)) {
                    ResponseBody x10 = d10.x();
                    if (x10 != null) {
                        ut.e.m(x10);
                    }
                    return null;
                }
                return d10;
            } catch (IOException unused) {
                ut.e.m(D0);
                return null;
            }
        } catch (IOException unused2) {
        }
    }

    public final int l() {
        return this.f44220i;
    }

    public final int n() {
        return this.f44219e;
    }

    public final wt.b x(Response response) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(response, "response");
        String j10 = response.Y0().j();
        if (zt.f.f56129a.a(response.Y0().j())) {
            try {
                B(response.Y0());
            } catch (IOException unused) {
            }
            return null;
        } else if (!Intrinsics.areEqual(j10, "GET")) {
            return null;
        } else {
            C0539b c0539b = f44217r;
            if (c0539b.a(response)) {
                return null;
            }
            c cVar = new c(response);
            try {
                bVar = wt.d.C0(this.f44218d, c0539b.b(response.Y0().n()), 0L, 2, null);
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
        this(directory, j10, cu.a.f21437b);
        Intrinsics.checkNotNullParameter(directory, "directory");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class c {

        /* renamed from: k  reason: collision with root package name */
        public static final a f44229k = new a(null);

        /* renamed from: l  reason: collision with root package name */
        private static final String f44230l;

        /* renamed from: m  reason: collision with root package name */
        private static final String f44231m;

        /* renamed from: a  reason: collision with root package name */
        private final HttpUrl f44232a;

        /* renamed from: b  reason: collision with root package name */
        private final Headers f44233b;

        /* renamed from: c  reason: collision with root package name */
        private final String f44234c;

        /* renamed from: d  reason: collision with root package name */
        private final tt.j f44235d;

        /* renamed from: e  reason: collision with root package name */
        private final int f44236e;

        /* renamed from: f  reason: collision with root package name */
        private final String f44237f;

        /* renamed from: g  reason: collision with root package name */
        private final Headers f44238g;

        /* renamed from: h  reason: collision with root package name */
        private final g f44239h;

        /* renamed from: i  reason: collision with root package name */
        private final long f44240i;

        /* renamed from: j  reason: collision with root package name */
        private final long f44241j;

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
            sb2.append(du.h.f22444a.g().g());
            sb2.append("-Sent-Millis");
            f44230l = sb2.toString();
            f44231m = aVar.g().g() + "-Received-Millis";
        }

        public c(Source rawSource) {
            h hVar;
            Intrinsics.checkNotNullParameter(rawSource, "rawSource");
            try {
                BufferedSource d10 = x.d(rawSource);
                String H0 = d10.H0();
                HttpUrl f10 = HttpUrl.f44064k.f(H0);
                if (f10 != null) {
                    this.f44232a = f10;
                    this.f44234c = d10.H0();
                    Headers.a aVar = new Headers.a();
                    int c10 = b.f44217r.c(d10);
                    for (int i10 = 0; i10 < c10; i10++) {
                        aVar.c(d10.H0());
                    }
                    this.f44233b = aVar.f();
                    zt.k a10 = zt.k.f56145d.a(d10.H0());
                    this.f44235d = a10.f56146a;
                    this.f44236e = a10.f56147b;
                    this.f44237f = a10.f56148c;
                    Headers.a aVar2 = new Headers.a();
                    int c11 = b.f44217r.c(d10);
                    for (int i11 = 0; i11 < c11; i11++) {
                        aVar2.c(d10.H0());
                    }
                    String str = f44230l;
                    String g10 = aVar2.g(str);
                    String str2 = f44231m;
                    String g11 = aVar2.g(str2);
                    aVar2.i(str);
                    aVar2.i(str2);
                    this.f44240i = g10 != null ? Long.parseLong(g10) : 0L;
                    this.f44241j = g11 != null ? Long.parseLong(g11) : 0L;
                    this.f44238g = aVar2.f();
                    if (a()) {
                        String H02 = d10.H0();
                        if (H02.length() <= 0) {
                            okhttp3.c b10 = okhttp3.c.f44251b.b(d10.H0());
                            List c12 = c(d10);
                            List c13 = c(d10);
                            if (!d10.o1()) {
                                hVar = h.f44352e.a(d10.H0());
                            } else {
                                hVar = h.SSL_3_0;
                            }
                            this.f44239h = g.f44344e.b(hVar, b10, c12, c13);
                        } else {
                            throw new IOException("expected \"\" but was \"" + H02 + '\"');
                        }
                    } else {
                        this.f44239h = null;
                    }
                    Unit unit = Unit.f33298a;
                    tr.c.a(rawSource, null);
                    return;
                }
                IOException iOException = new IOException("Cache corruption for " + H0);
                du.h.f22444a.g().k("cache corruption", 5, iOException);
                throw iOException;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    tr.c.a(rawSource, th2);
                    throw th3;
                }
            }
        }

        private final boolean a() {
            return Intrinsics.areEqual(this.f44232a.s(), "https");
        }

        private final List c(BufferedSource bufferedSource) {
            int c10 = b.f44217r.c(bufferedSource);
            if (c10 == -1) {
                return CollectionsKt.l();
            }
            try {
                CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
                ArrayList arrayList = new ArrayList(c10);
                for (int i10 = 0; i10 < c10; i10++) {
                    String H0 = bufferedSource.H0();
                    Buffer buffer = new Buffer();
                    ByteString d10 = ByteString.f44379o.d(H0);
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
                bufferedSink.V0(list.size()).writeByte(10);
                Iterator it = list.iterator();
                while (it.hasNext()) {
                    byte[] bytes = ((Certificate) it.next()).getEncoded();
                    ByteString.a aVar = ByteString.f44379o;
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
            if (Intrinsics.areEqual(this.f44232a, request.n()) && Intrinsics.areEqual(this.f44234c, request.j()) && b.f44217r.g(response, this.f44233b, request)) {
                return true;
            }
            return false;
        }

        public final Response d(d.C0729d snapshot) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            String c10 = this.f44238g.c("Content-Type");
            String c11 = this.f44238g.c("Content-Length");
            return new Response.a().r(new Request.Builder().m(this.f44232a).g(this.f44234c, null).f(this.f44233b).b()).p(this.f44235d).g(this.f44236e).m(this.f44237f).k(this.f44238g).b(new a(snapshot, c10, c11)).i(this.f44239h).s(this.f44240i).q(this.f44241j).c();
        }

        public final void f(d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            BufferedSink c10 = x.c(editor.f(0));
            try {
                c10.n0(this.f44232a.toString()).writeByte(10);
                c10.n0(this.f44234c).writeByte(10);
                c10.V0(this.f44233b.size()).writeByte(10);
                int size = this.f44233b.size();
                for (int i10 = 0; i10 < size; i10++) {
                    c10.n0(this.f44233b.e(i10)).n0(": ").n0(this.f44233b.j(i10)).writeByte(10);
                }
                c10.n0(new zt.k(this.f44235d, this.f44236e, this.f44237f).toString()).writeByte(10);
                c10.V0(this.f44238g.size() + 2).writeByte(10);
                int size2 = this.f44238g.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    c10.n0(this.f44238g.e(i11)).n0(": ").n0(this.f44238g.j(i11)).writeByte(10);
                }
                c10.n0(f44230l).n0(": ").V0(this.f44240i).writeByte(10);
                c10.n0(f44231m).n0(": ").V0(this.f44241j).writeByte(10);
                if (a()) {
                    c10.writeByte(10);
                    g gVar = this.f44239h;
                    Intrinsics.checkNotNull(gVar);
                    c10.n0(gVar.a().c()).writeByte(10);
                    e(c10, this.f44239h.d());
                    e(c10, this.f44239h.c());
                    c10.n0(this.f44239h.e().d()).writeByte(10);
                }
                Unit unit = Unit.f33298a;
                tr.c.a(c10, null);
            } finally {
            }
        }

        public c(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f44232a = response.Y0().n();
            this.f44233b = b.f44217r.f(response);
            this.f44234c = response.Y0().j();
            this.f44235d = response.U0();
            this.f44236e = response.L();
            this.f44237f = response.I0();
            this.f44238g = response.E0();
            this.f44239h = response.V();
            this.f44240i = response.d1();
            this.f44241j = response.X0();
        }
    }
}
