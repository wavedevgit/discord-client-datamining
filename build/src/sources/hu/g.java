package hu;

import fu.k;
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
public final class g implements fu.d {

    /* renamed from: g  reason: collision with root package name */
    public static final a f27111g = new a(null);

    /* renamed from: h  reason: collision with root package name */
    private static final List f27112h = au.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade", ":method", ":path", ":scheme", ":authority");

    /* renamed from: i  reason: collision with root package name */
    private static final List f27113i = au.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade");

    /* renamed from: a  reason: collision with root package name */
    private final eu.f f27114a;

    /* renamed from: b  reason: collision with root package name */
    private final fu.g f27115b;

    /* renamed from: c  reason: collision with root package name */
    private final f f27116c;

    /* renamed from: d  reason: collision with root package name */
    private volatile i f27117d;

    /* renamed from: e  reason: collision with root package name */
    private final zt.j f27118e;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f27119f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final List a(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            Headers h10 = request.h();
            ArrayList arrayList = new ArrayList(h10.size() + 4);
            arrayList.add(new c(c.f27016g, request.j()));
            arrayList.add(new c(c.f27017h, fu.i.f23518a.c(request.n())));
            String f10 = request.f("Host");
            if (f10 != null) {
                arrayList.add(new c(c.f27019j, f10));
            }
            arrayList.add(new c(c.f27018i, request.n().s()));
            int size = h10.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = h10.e(i10);
                Locale US = Locale.US;
                Intrinsics.checkNotNullExpressionValue(US, "US");
                String lowerCase = e10.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                if (!g.f27112h.contains(lowerCase) || (Intrinsics.areEqual(lowerCase, "te") && Intrinsics.areEqual(h10.j(i10), "trailers"))) {
                    arrayList.add(new c(lowerCase, h10.j(i10)));
                }
            }
            return arrayList;
        }

        public final Response.a b(Headers headerBlock, zt.j protocol) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            Headers.a aVar = new Headers.a();
            int size = headerBlock.size();
            fu.k kVar = null;
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headerBlock.e(i10);
                String j10 = headerBlock.j(i10);
                if (Intrinsics.areEqual(e10, ":status")) {
                    k.a aVar2 = fu.k.f23521d;
                    kVar = aVar2.a("HTTP/1.1 " + j10);
                } else if (!g.f27113i.contains(e10)) {
                    aVar.d(e10, j10);
                }
            }
            if (kVar != null) {
                return new Response.a().p(protocol).g(kVar.f23523b).m(kVar.f23524c).k(aVar.f());
            }
            throw new ProtocolException("Expected ':status' header not present");
        }

        private a() {
        }
    }

    public g(OkHttpClient client, eu.f connection, fu.g chain, f http2Connection) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(chain, "chain");
        Intrinsics.checkNotNullParameter(http2Connection, "http2Connection");
        this.f27114a = connection;
        this.f27115b = chain;
        this.f27116c = http2Connection;
        List G = client.G();
        zt.j jVar = zt.j.H2_PRIOR_KNOWLEDGE;
        this.f27118e = G.contains(jVar) ? jVar : zt.j.HTTP_2;
    }

    @Override // fu.d
    public void a() {
        i iVar = this.f27117d;
        Intrinsics.checkNotNull(iVar);
        iVar.n().close();
    }

    @Override // fu.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        i iVar = this.f27117d;
        Intrinsics.checkNotNull(iVar);
        return iVar.p();
    }

    @Override // fu.d
    public eu.f c() {
        return this.f27114a;
    }

    @Override // fu.d
    public void cancel() {
        this.f27119f = true;
        i iVar = this.f27117d;
        if (iVar != null) {
            iVar.f(b.CANCEL);
        }
    }

    @Override // fu.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!fu.e.b(response)) {
            return 0L;
        }
        return au.e.v(response);
    }

    @Override // fu.d
    public Sink e(Request request, long j10) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = this.f27117d;
        Intrinsics.checkNotNull(iVar);
        return iVar.n();
    }

    @Override // fu.d
    public void f(Request request) {
        boolean z10;
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f27117d != null) {
            return;
        }
        if (request.c() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f27117d = this.f27116c.c2(f27111g.a(request), z10);
        if (!this.f27119f) {
            i iVar = this.f27117d;
            Intrinsics.checkNotNull(iVar);
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            iVar.v().g(this.f27115b.g(), timeUnit);
            i iVar2 = this.f27117d;
            Intrinsics.checkNotNull(iVar2);
            iVar2.E().g(this.f27115b.j(), timeUnit);
            return;
        }
        i iVar3 = this.f27117d;
        Intrinsics.checkNotNull(iVar3);
        iVar3.f(b.CANCEL);
        throw new IOException("Canceled");
    }

    @Override // fu.d
    public Response.a g(boolean z10) {
        i iVar = this.f27117d;
        if (iVar != null) {
            Response.a b10 = f27111g.b(iVar.C(), this.f27118e);
            if (z10 && b10.h() == 100) {
                return null;
            }
            return b10;
        }
        throw new IOException("stream wasn't created");
    }

    @Override // fu.d
    public void h() {
        this.f27116c.flush();
    }
}
