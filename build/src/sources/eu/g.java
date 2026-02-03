package eu;

import cu.k;
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
public final class g implements cu.d {

    /* renamed from: g  reason: collision with root package name */
    public static final a f22799g = new a(null);

    /* renamed from: h  reason: collision with root package name */
    private static final List f22800h = xt.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade", ":method", ":path", ":scheme", ":authority");

    /* renamed from: i  reason: collision with root package name */
    private static final List f22801i = xt.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade");

    /* renamed from: a  reason: collision with root package name */
    private final bu.f f22802a;

    /* renamed from: b  reason: collision with root package name */
    private final cu.g f22803b;

    /* renamed from: c  reason: collision with root package name */
    private final f f22804c;

    /* renamed from: d  reason: collision with root package name */
    private volatile i f22805d;

    /* renamed from: e  reason: collision with root package name */
    private final wt.j f22806e;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f22807f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final List a(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            Headers h10 = request.h();
            ArrayList arrayList = new ArrayList(h10.size() + 4);
            arrayList.add(new c(c.f22704g, request.j()));
            arrayList.add(new c(c.f22705h, cu.i.f19877a.c(request.n())));
            String f10 = request.f("Host");
            if (f10 != null) {
                arrayList.add(new c(c.f22707j, f10));
            }
            arrayList.add(new c(c.f22706i, request.n().s()));
            int size = h10.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = h10.e(i10);
                Locale US = Locale.US;
                Intrinsics.checkNotNullExpressionValue(US, "US");
                String lowerCase = e10.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                if (!g.f22800h.contains(lowerCase) || (Intrinsics.areEqual(lowerCase, "te") && Intrinsics.areEqual(h10.j(i10), "trailers"))) {
                    arrayList.add(new c(lowerCase, h10.j(i10)));
                }
            }
            return arrayList;
        }

        public final Response.a b(Headers headerBlock, wt.j protocol) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            Headers.a aVar = new Headers.a();
            int size = headerBlock.size();
            cu.k kVar = null;
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headerBlock.e(i10);
                String j10 = headerBlock.j(i10);
                if (Intrinsics.areEqual(e10, ":status")) {
                    k.a aVar2 = cu.k.f19880d;
                    kVar = aVar2.a("HTTP/1.1 " + j10);
                } else if (!g.f22801i.contains(e10)) {
                    aVar.d(e10, j10);
                }
            }
            if (kVar != null) {
                return new Response.a().p(protocol).g(kVar.f19882b).m(kVar.f19883c).k(aVar.f());
            }
            throw new ProtocolException("Expected ':status' header not present");
        }

        private a() {
        }
    }

    public g(OkHttpClient client, bu.f connection, cu.g chain, f http2Connection) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(chain, "chain");
        Intrinsics.checkNotNullParameter(http2Connection, "http2Connection");
        this.f22802a = connection;
        this.f22803b = chain;
        this.f22804c = http2Connection;
        List G = client.G();
        wt.j jVar = wt.j.H2_PRIOR_KNOWLEDGE;
        this.f22806e = G.contains(jVar) ? jVar : wt.j.HTTP_2;
    }

    @Override // cu.d
    public void a() {
        i iVar = this.f22805d;
        Intrinsics.checkNotNull(iVar);
        iVar.n().close();
    }

    @Override // cu.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        i iVar = this.f22805d;
        Intrinsics.checkNotNull(iVar);
        return iVar.p();
    }

    @Override // cu.d
    public bu.f c() {
        return this.f22802a;
    }

    @Override // cu.d
    public void cancel() {
        this.f22807f = true;
        i iVar = this.f22805d;
        if (iVar != null) {
            iVar.f(b.CANCEL);
        }
    }

    @Override // cu.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!cu.e.b(response)) {
            return 0L;
        }
        return xt.e.v(response);
    }

    @Override // cu.d
    public Sink e(Request request, long j10) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = this.f22805d;
        Intrinsics.checkNotNull(iVar);
        return iVar.n();
    }

    @Override // cu.d
    public void f(Request request) {
        boolean z10;
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f22805d != null) {
            return;
        }
        if (request.c() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f22805d = this.f22804c.c2(f22799g.a(request), z10);
        if (!this.f22807f) {
            i iVar = this.f22805d;
            Intrinsics.checkNotNull(iVar);
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            iVar.v().g(this.f22803b.g(), timeUnit);
            i iVar2 = this.f22805d;
            Intrinsics.checkNotNull(iVar2);
            iVar2.E().g(this.f22803b.j(), timeUnit);
            return;
        }
        i iVar3 = this.f22805d;
        Intrinsics.checkNotNull(iVar3);
        iVar3.f(b.CANCEL);
        throw new IOException("Canceled");
    }

    @Override // cu.d
    public Response.a g(boolean z10) {
        i iVar = this.f22805d;
        if (iVar != null) {
            Response.a b10 = f22799g.b(iVar.C(), this.f22806e);
            if (z10 && b10.h() == 100) {
                return null;
            }
            return b10;
        }
        throw new IOException("stream wasn't created");
    }

    @Override // cu.d
    public void h() {
        this.f22804c.flush();
    }
}
