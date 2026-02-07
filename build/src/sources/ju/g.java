package ju;

import hu.k;
import java.io.IOException;
import java.net.ProtocolException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements hu.d {

    /* renamed from: g  reason: collision with root package name */
    public static final a f31281g = new a(null);

    /* renamed from: h  reason: collision with root package name */
    private static final List f31282h = cu.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade", ":method", ":path", ":scheme", ":authority");

    /* renamed from: i  reason: collision with root package name */
    private static final List f31283i = cu.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade");

    /* renamed from: a  reason: collision with root package name */
    private final gu.f f31284a;

    /* renamed from: b  reason: collision with root package name */
    private final hu.g f31285b;

    /* renamed from: c  reason: collision with root package name */
    private final f f31286c;

    /* renamed from: d  reason: collision with root package name */
    private volatile i f31287d;

    /* renamed from: e  reason: collision with root package name */
    private final bu.j f31288e;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f31289f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final List a(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            Headers h10 = request.h();
            ArrayList arrayList = new ArrayList(h10.size() + 4);
            arrayList.add(new c(c.f31186g, request.j()));
            arrayList.add(new c(c.f31187h, hu.i.f26561a.c(request.n())));
            String f10 = request.f("Host");
            if (f10 != null) {
                arrayList.add(new c(c.f31189j, f10));
            }
            arrayList.add(new c(c.f31188i, request.n().s()));
            int size = h10.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = h10.e(i10);
                Locale US = Locale.US;
                Intrinsics.checkNotNullExpressionValue(US, "US");
                String lowerCase = e10.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                if (!g.f31282h.contains(lowerCase) || (Intrinsics.areEqual(lowerCase, "te") && Intrinsics.areEqual(h10.j(i10), "trailers"))) {
                    arrayList.add(new c(lowerCase, h10.j(i10)));
                }
            }
            return arrayList;
        }

        public final Response.a b(Headers headerBlock, bu.j protocol) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            Headers.a aVar = new Headers.a();
            int size = headerBlock.size();
            hu.k kVar = null;
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headerBlock.e(i10);
                String j10 = headerBlock.j(i10);
                if (Intrinsics.areEqual(e10, ":status")) {
                    k.a aVar2 = hu.k.f26564d;
                    kVar = aVar2.a("HTTP/1.1 " + j10);
                } else if (!g.f31283i.contains(e10)) {
                    aVar.d(e10, j10);
                }
            }
            if (kVar != null) {
                return new Response.a().p(protocol).g(kVar.f26566b).m(kVar.f26567c).k(aVar.f());
            }
            throw new ProtocolException("Expected ':status' header not present");
        }

        private a() {
        }
    }

    public g(OkHttpClient client, gu.f connection, hu.g chain, f http2Connection) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(chain, "chain");
        Intrinsics.checkNotNullParameter(http2Connection, "http2Connection");
        this.f31284a = connection;
        this.f31285b = chain;
        this.f31286c = http2Connection;
        List H = client.H();
        bu.j jVar = bu.j.H2_PRIOR_KNOWLEDGE;
        this.f31288e = H.contains(jVar) ? jVar : bu.j.HTTP_2;
    }

    @Override // hu.d
    public void a() {
        i iVar = this.f31287d;
        Intrinsics.checkNotNull(iVar);
        iVar.n().close();
    }

    @Override // hu.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        i iVar = this.f31287d;
        Intrinsics.checkNotNull(iVar);
        return iVar.p();
    }

    @Override // hu.d
    public gu.f c() {
        return this.f31284a;
    }

    @Override // hu.d
    public void cancel() {
        this.f31289f = true;
        i iVar = this.f31287d;
        if (iVar != null) {
            iVar.f(b.CANCEL);
        }
    }

    @Override // hu.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!hu.e.b(response)) {
            return 0L;
        }
        return cu.e.v(response);
    }

    @Override // hu.d
    public Sink e(Request request, long j10) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = this.f31287d;
        Intrinsics.checkNotNull(iVar);
        return iVar.n();
    }

    @Override // hu.d
    public void f(Request request) {
        boolean z10;
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f31287d != null) {
            return;
        }
        if (request.c() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f31287d = this.f31286c.b2(f31281g.a(request), z10);
        if (!this.f31289f) {
            i iVar = this.f31287d;
            Intrinsics.checkNotNull(iVar);
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            iVar.v().g(this.f31285b.h(), timeUnit);
            i iVar2 = this.f31287d;
            Intrinsics.checkNotNull(iVar2);
            iVar2.E().g(this.f31285b.j(), timeUnit);
            return;
        }
        i iVar3 = this.f31287d;
        Intrinsics.checkNotNull(iVar3);
        iVar3.f(b.CANCEL);
        throw new IOException("Canceled");
    }

    @Override // hu.d
    public Response.a g(boolean z10) {
        i iVar = this.f31287d;
        if (iVar != null) {
            Response.a b10 = f31281g.b(iVar.C(), this.f31288e);
            if (z10 && b10.h() == 100) {
                return null;
            }
            return b10;
        }
        throw new IOException("stream wasn't created");
    }

    @Override // hu.d
    public void h() {
        this.f31286c.flush();
    }
}
