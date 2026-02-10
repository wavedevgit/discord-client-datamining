package ku;

import iu.k;
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
public final class g implements iu.d {

    /* renamed from: g  reason: collision with root package name */
    public static final a f35373g = new a(null);

    /* renamed from: h  reason: collision with root package name */
    private static final List f35374h = du.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade", ":method", ":path", ":scheme", ":authority");

    /* renamed from: i  reason: collision with root package name */
    private static final List f35375i = du.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade");

    /* renamed from: a  reason: collision with root package name */
    private final hu.f f35376a;

    /* renamed from: b  reason: collision with root package name */
    private final iu.g f35377b;

    /* renamed from: c  reason: collision with root package name */
    private final f f35378c;

    /* renamed from: d  reason: collision with root package name */
    private volatile i f35379d;

    /* renamed from: e  reason: collision with root package name */
    private final cu.j f35380e;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f35381f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final List a(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            Headers h10 = request.h();
            ArrayList arrayList = new ArrayList(h10.size() + 4);
            arrayList.add(new c(c.f35278g, request.j()));
            arrayList.add(new c(c.f35279h, iu.i.f29666a.c(request.n())));
            String f10 = request.f("Host");
            if (f10 != null) {
                arrayList.add(new c(c.f35281j, f10));
            }
            arrayList.add(new c(c.f35280i, request.n().s()));
            int size = h10.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = h10.e(i10);
                Locale US = Locale.US;
                Intrinsics.checkNotNullExpressionValue(US, "US");
                String lowerCase = e10.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                if (!g.f35374h.contains(lowerCase) || (Intrinsics.areEqual(lowerCase, "te") && Intrinsics.areEqual(h10.j(i10), "trailers"))) {
                    arrayList.add(new c(lowerCase, h10.j(i10)));
                }
            }
            return arrayList;
        }

        public final Response.a b(Headers headerBlock, cu.j protocol) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            Headers.a aVar = new Headers.a();
            int size = headerBlock.size();
            iu.k kVar = null;
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headerBlock.e(i10);
                String j10 = headerBlock.j(i10);
                if (Intrinsics.areEqual(e10, ":status")) {
                    k.a aVar2 = iu.k.f29669d;
                    kVar = aVar2.a("HTTP/1.1 " + j10);
                } else if (!g.f35375i.contains(e10)) {
                    aVar.d(e10, j10);
                }
            }
            if (kVar != null) {
                return new Response.a().p(protocol).g(kVar.f29671b).m(kVar.f29672c).k(aVar.f());
            }
            throw new ProtocolException("Expected ':status' header not present");
        }

        private a() {
        }
    }

    public g(OkHttpClient client, hu.f connection, iu.g chain, f http2Connection) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(chain, "chain");
        Intrinsics.checkNotNullParameter(http2Connection, "http2Connection");
        this.f35376a = connection;
        this.f35377b = chain;
        this.f35378c = http2Connection;
        List H = client.H();
        cu.j jVar = cu.j.H2_PRIOR_KNOWLEDGE;
        this.f35380e = H.contains(jVar) ? jVar : cu.j.HTTP_2;
    }

    @Override // iu.d
    public void a() {
        i iVar = this.f35379d;
        Intrinsics.checkNotNull(iVar);
        iVar.n().close();
    }

    @Override // iu.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        i iVar = this.f35379d;
        Intrinsics.checkNotNull(iVar);
        return iVar.p();
    }

    @Override // iu.d
    public hu.f c() {
        return this.f35376a;
    }

    @Override // iu.d
    public void cancel() {
        this.f35381f = true;
        i iVar = this.f35379d;
        if (iVar != null) {
            iVar.f(b.CANCEL);
        }
    }

    @Override // iu.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!iu.e.b(response)) {
            return 0L;
        }
        return du.e.v(response);
    }

    @Override // iu.d
    public Sink e(Request request, long j10) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = this.f35379d;
        Intrinsics.checkNotNull(iVar);
        return iVar.n();
    }

    @Override // iu.d
    public void f(Request request) {
        boolean z10;
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f35379d != null) {
            return;
        }
        if (request.c() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f35379d = this.f35378c.a2(f35373g.a(request), z10);
        if (!this.f35381f) {
            i iVar = this.f35379d;
            Intrinsics.checkNotNull(iVar);
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            iVar.v().g(this.f35377b.h(), timeUnit);
            i iVar2 = this.f35379d;
            Intrinsics.checkNotNull(iVar2);
            iVar2.E().g(this.f35377b.j(), timeUnit);
            return;
        }
        i iVar3 = this.f35379d;
        Intrinsics.checkNotNull(iVar3);
        iVar3.f(b.CANCEL);
        throw new IOException("Canceled");
    }

    @Override // iu.d
    public Response.a g(boolean z10) {
        i iVar = this.f35379d;
        if (iVar != null) {
            Response.a b10 = f35373g.b(iVar.C(), this.f35380e);
            if (z10 && b10.h() == 100) {
                return null;
            }
            return b10;
        }
        throw new IOException("stream wasn't created");
    }

    @Override // iu.d
    public void h() {
        this.f35378c.flush();
    }
}
