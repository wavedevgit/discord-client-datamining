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
    public static final C0539b f44201r = new C0539b(null);

    /* renamed from: d  reason: collision with root package name */
    private final wt.d f44202d;

    /* renamed from: e  reason: collision with root package name */
    private int f44203e;

    /* renamed from: i  reason: collision with root package name */
    private int f44204i;

    /* renamed from: o  reason: collision with root package name */
    private int f44205o;

    /* renamed from: p  reason: collision with root package name */
    private int f44206p;

    /* renamed from: q  reason: collision with root package name */
    private int f44207q;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final d.C0729d f44208d;

        /* renamed from: e  reason: collision with root package name */
        private final String f44209e;

        /* renamed from: i  reason: collision with root package name */
        private final String f44210i;

        /* renamed from: o  reason: collision with root package name */
        private final BufferedSource f44211o;

        /* renamed from: okhttp3.b$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0538a extends k {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f44212d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0538a(Source source, a aVar) {
                super(source);
                this.f44212d = aVar;
            }

            @Override // iu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                this.f44212d.h().close();
                super.close();
            }
        }

        public a(d.C0729d snapshot, String str, String str2) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            this.f44208d = snapshot;
            this.f44209e = str;
            this.f44210i = str2;
            this.f44211o = x.d(new C0538a(snapshot.h(1), this));
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            String str = this.f44210i;
            if (str == null) {
                return -1L;
            }
            return ut.e.X(str, -1L);
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            String str = this.f44209e;
            if (str != null) {
                return MediaType.f44069e.c(str);
            }
            return null;
        }

        public final d.C0729d h() {
            return this.f44208d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f44211o;
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
                return ut.e.f50557b;
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
            return ByteString.f44363o.g(url.toString()).z().q();
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
        private final d.b f44226a;

        /* renamed from: b  reason: collision with root package name */
        private final Sink f44227b;

        /* renamed from: c  reason: collision with root package name */
        private final Sink f44228c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f44229d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ b f44230e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends j {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f44231e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ d f44232i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, d dVar, Sink sink) {
                super(sink);
                this.f44231e = bVar;
                this.f44232i = dVar;
            }

            @Override // iu.j, okio.Sink, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                b bVar = this.f44231e;
                d dVar = this.f44232i;
                synchronized (bVar) {
                    if (dVar.d()) {
                        return;
                    }
                    dVar.e(true);
                    bVar.F(bVar.n() + 1);
                    super.close();
                    this.f44232i.f44226a.b();
                }
            }
        }

        public d(b bVar, d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            this.f44230e = bVar;
            this.f44226a = editor;
            Sink f10 = editor.f(1);
            this.f44227b = f10;
            this.f44228c = new a(bVar, this, f10);
        }

        @Override // wt.b
        public void a() {
            b bVar = this.f44230e;
            synchronized (bVar) {
                if (this.f44229d) {
                    return;
                }
                this.f44229d = true;
                bVar.E(bVar.l() + 1);
                ut.e.m(this.f44227b);
                try {
                    this.f44226a.a();
                } catch (IOException unused) {
                }
            }
        }

        @Override // wt.b
        public Sink b() {
            return this.f44228c;
        }

        public final boolean d() {
            return this.f44229d;
        }

        public final void e(boolean z10) {
            this.f44229d = z10;
        }
    }

    public b(File directory, long j10, cu.a fileSystem) {
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        this.f44202d = new wt.d(fileSystem, directory, 201105, 2, j10, xt.e.f53825i);
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
        this.f44202d.y1(f44201r.b(request.n()));
    }

    public final void E(int i10) {
        this.f44204i = i10;
    }

    public final void F(int i10) {
        this.f44203e = i10;
    }

    public final synchronized void L() {
        this.f44206p++;
    }

    public final synchronized void N(wt.c cacheStrategy) {
        try {
            Intrinsics.checkNotNullParameter(cacheStrategy, "cacheStrategy");
            this.f44207q++;
            if (cacheStrategy.b() != null) {
                this.f44205o++;
            } else if (cacheStrategy.a() != null) {
                this.f44206p++;
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
        this.f44202d.close();
    }

    @Override // java.io.Flushable
    public void flush() {
        this.f44202d.flush();
    }

    public final Response h(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        try {
            d.C0729d D0 = this.f44202d.D0(f44201r.b(request.n()));
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
        return this.f44204i;
    }

    public final int n() {
        return this.f44203e;
    }

    public final wt.b x(Response response) {
        d.b bVar;
        Intrinsics.checkNotNullParameter(response, "response");
        String j10 = response.Y0().j();
        if (zt.f.f56113a.a(response.Y0().j())) {
            try {
                B(response.Y0());
            } catch (IOException unused) {
            }
            return null;
        } else if (!Intrinsics.areEqual(j10, "GET")) {
            return null;
        } else {
            C0539b c0539b = f44201r;
            if (c0539b.a(response)) {
                return null;
            }
            c cVar = new c(response);
            try {
                bVar = wt.d.C0(this.f44202d, c0539b.b(response.Y0().n()), 0L, 2, null);
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
        public static final a f44213k = new a(null);

        /* renamed from: l  reason: collision with root package name */
        private static final String f44214l;

        /* renamed from: m  reason: collision with root package name */
        private static final String f44215m;

        /* renamed from: a  reason: collision with root package name */
        private final HttpUrl f44216a;

        /* renamed from: b  reason: collision with root package name */
        private final Headers f44217b;

        /* renamed from: c  reason: collision with root package name */
        private final String f44218c;

        /* renamed from: d  reason: collision with root package name */
        private final tt.j f44219d;

        /* renamed from: e  reason: collision with root package name */
        private final int f44220e;

        /* renamed from: f  reason: collision with root package name */
        private final String f44221f;

        /* renamed from: g  reason: collision with root package name */
        private final Headers f44222g;

        /* renamed from: h  reason: collision with root package name */
        private final g f44223h;

        /* renamed from: i  reason: collision with root package name */
        private final long f44224i;

        /* renamed from: j  reason: collision with root package name */
        private final long f44225j;

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
            f44214l = sb2.toString();
            f44215m = aVar.g().g() + "-Received-Millis";
        }

        public c(Source rawSource) {
            h hVar;
            Intrinsics.checkNotNullParameter(rawSource, "rawSource");
            try {
                BufferedSource d10 = x.d(rawSource);
                String H0 = d10.H0();
                HttpUrl f10 = HttpUrl.f44048k.f(H0);
                if (f10 != null) {
                    this.f44216a = f10;
                    this.f44218c = d10.H0();
                    Headers.a aVar = new Headers.a();
                    int c10 = b.f44201r.c(d10);
                    for (int i10 = 0; i10 < c10; i10++) {
                        aVar.c(d10.H0());
                    }
                    this.f44217b = aVar.f();
                    zt.k a10 = zt.k.f56129d.a(d10.H0());
                    this.f44219d = a10.f56130a;
                    this.f44220e = a10.f56131b;
                    this.f44221f = a10.f56132c;
                    Headers.a aVar2 = new Headers.a();
                    int c11 = b.f44201r.c(d10);
                    for (int i11 = 0; i11 < c11; i11++) {
                        aVar2.c(d10.H0());
                    }
                    String str = f44214l;
                    String g10 = aVar2.g(str);
                    String str2 = f44215m;
                    String g11 = aVar2.g(str2);
                    aVar2.i(str);
                    aVar2.i(str2);
                    this.f44224i = g10 != null ? Long.parseLong(g10) : 0L;
                    this.f44225j = g11 != null ? Long.parseLong(g11) : 0L;
                    this.f44222g = aVar2.f();
                    if (a()) {
                        String H02 = d10.H0();
                        if (H02.length() <= 0) {
                            okhttp3.c b10 = okhttp3.c.f44235b.b(d10.H0());
                            List c12 = c(d10);
                            List c13 = c(d10);
                            if (!d10.o1()) {
                                hVar = h.f44336e.a(d10.H0());
                            } else {
                                hVar = h.SSL_3_0;
                            }
                            this.f44223h = g.f44328e.b(hVar, b10, c12, c13);
                        } else {
                            throw new IOException("expected \"\" but was \"" + H02 + '\"');
                        }
                    } else {
                        this.f44223h = null;
                    }
                    Unit unit = Unit.f33282a;
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
            return Intrinsics.areEqual(this.f44216a.s(), "https");
        }

        private final List c(BufferedSource bufferedSource) {
            int c10 = b.f44201r.c(bufferedSource);
            if (c10 == -1) {
                return CollectionsKt.l();
            }
            try {
                CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
                ArrayList arrayList = new ArrayList(c10);
                for (int i10 = 0; i10 < c10; i10++) {
                    String H0 = bufferedSource.H0();
                    Buffer buffer = new Buffer();
                    ByteString d10 = ByteString.f44363o.d(H0);
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
                    ByteString.a aVar = ByteString.f44363o;
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
            if (Intrinsics.areEqual(this.f44216a, request.n()) && Intrinsics.areEqual(this.f44218c, request.j()) && b.f44201r.g(response, this.f44217b, request)) {
                return true;
            }
            return false;
        }

        public final Response d(d.C0729d snapshot) {
            Intrinsics.checkNotNullParameter(snapshot, "snapshot");
            String c10 = this.f44222g.c("Content-Type");
            String c11 = this.f44222g.c("Content-Length");
            return new Response.a().r(new Request.Builder().m(this.f44216a).g(this.f44218c, null).f(this.f44217b).b()).p(this.f44219d).g(this.f44220e).m(this.f44221f).k(this.f44222g).b(new a(snapshot, c10, c11)).i(this.f44223h).s(this.f44224i).q(this.f44225j).c();
        }

        public final void f(d.b editor) {
            Intrinsics.checkNotNullParameter(editor, "editor");
            BufferedSink c10 = x.c(editor.f(0));
            try {
                c10.n0(this.f44216a.toString()).writeByte(10);
                c10.n0(this.f44218c).writeByte(10);
                c10.V0(this.f44217b.size()).writeByte(10);
                int size = this.f44217b.size();
                for (int i10 = 0; i10 < size; i10++) {
                    c10.n0(this.f44217b.e(i10)).n0(": ").n0(this.f44217b.j(i10)).writeByte(10);
                }
                c10.n0(new zt.k(this.f44219d, this.f44220e, this.f44221f).toString()).writeByte(10);
                c10.V0(this.f44222g.size() + 2).writeByte(10);
                int size2 = this.f44222g.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    c10.n0(this.f44222g.e(i11)).n0(": ").n0(this.f44222g.j(i11)).writeByte(10);
                }
                c10.n0(f44214l).n0(": ").V0(this.f44224i).writeByte(10);
                c10.n0(f44215m).n0(": ").V0(this.f44225j).writeByte(10);
                if (a()) {
                    c10.writeByte(10);
                    g gVar = this.f44223h;
                    Intrinsics.checkNotNull(gVar);
                    c10.n0(gVar.a().c()).writeByte(10);
                    e(c10, this.f44223h.d());
                    e(c10, this.f44223h.c());
                    c10.n0(this.f44223h.e().d()).writeByte(10);
                }
                Unit unit = Unit.f33282a;
                tr.c.a(c10, null);
            } finally {
            }
        }

        public c(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f44216a = response.Y0().n();
            this.f44217b = b.f44201r.f(response);
            this.f44218c = response.Y0().j();
            this.f44219d = response.U0();
            this.f44220e = response.L();
            this.f44221f = response.I0();
            this.f44222g = response.E0();
            this.f44223h = response.V();
            this.f44224i = response.d1();
            this.f44225j = response.X0();
        }
    }
}
