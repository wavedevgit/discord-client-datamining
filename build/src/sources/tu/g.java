package tu;

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
import ru.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements ru.d {

    /* renamed from: g  reason: collision with root package name */
    public static final a f50225g = new a(null);

    /* renamed from: h  reason: collision with root package name */
    private static final List f50226h = mu.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade", ":method", ":path", ":scheme", ":authority");

    /* renamed from: i  reason: collision with root package name */
    private static final List f50227i = mu.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade");

    /* renamed from: a  reason: collision with root package name */
    private final qu.f f50228a;

    /* renamed from: b  reason: collision with root package name */
    private final ru.g f50229b;

    /* renamed from: c  reason: collision with root package name */
    private final f f50230c;

    /* renamed from: d  reason: collision with root package name */
    private volatile i f50231d;

    /* renamed from: e  reason: collision with root package name */
    private final lu.j f50232e;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f50233f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final List a(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            Headers h10 = request.h();
            ArrayList arrayList = new ArrayList(h10.size() + 4);
            arrayList.add(new c(c.f50130g, request.j()));
            arrayList.add(new c(c.f50131h, ru.i.f47773a.c(request.n())));
            String f10 = request.f("Host");
            if (f10 != null) {
                arrayList.add(new c(c.f50133j, f10));
            }
            arrayList.add(new c(c.f50132i, request.n().s()));
            int size = h10.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = h10.e(i10);
                Locale US = Locale.US;
                Intrinsics.checkNotNullExpressionValue(US, "US");
                String lowerCase = e10.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                if (!g.f50226h.contains(lowerCase) || (Intrinsics.areEqual(lowerCase, "te") && Intrinsics.areEqual(h10.k(i10), "trailers"))) {
                    arrayList.add(new c(lowerCase, h10.k(i10)));
                }
            }
            return arrayList;
        }

        public final Response.a b(Headers headerBlock, lu.j protocol) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            Headers.a aVar = new Headers.a();
            int size = headerBlock.size();
            ru.k kVar = null;
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headerBlock.e(i10);
                String k10 = headerBlock.k(i10);
                if (Intrinsics.areEqual(e10, ":status")) {
                    k.a aVar2 = ru.k.f47776d;
                    kVar = aVar2.a("HTTP/1.1 " + k10);
                } else if (!g.f50227i.contains(e10)) {
                    aVar.d(e10, k10);
                }
            }
            if (kVar != null) {
                return new Response.a().p(protocol).g(kVar.f47778b).m(kVar.f47779c).k(aVar.f());
            }
            throw new ProtocolException("Expected ':status' header not present");
        }

        private a() {
        }
    }

    public g(OkHttpClient client, qu.f connection, ru.g chain, f http2Connection) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(chain, "chain");
        Intrinsics.checkNotNullParameter(http2Connection, "http2Connection");
        this.f50228a = connection;
        this.f50229b = chain;
        this.f50230c = http2Connection;
        List H = client.H();
        lu.j jVar = lu.j.H2_PRIOR_KNOWLEDGE;
        this.f50232e = H.contains(jVar) ? jVar : lu.j.HTTP_2;
    }

    @Override // ru.d
    public void a() {
        i iVar = this.f50231d;
        Intrinsics.checkNotNull(iVar);
        iVar.n().close();
    }

    @Override // ru.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        i iVar = this.f50231d;
        Intrinsics.checkNotNull(iVar);
        return iVar.p();
    }

    @Override // ru.d
    public qu.f c() {
        return this.f50228a;
    }

    @Override // ru.d
    public void cancel() {
        this.f50233f = true;
        i iVar = this.f50231d;
        if (iVar != null) {
            iVar.f(b.CANCEL);
        }
    }

    @Override // ru.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!ru.e.b(response)) {
            return 0L;
        }
        return mu.e.v(response);
    }

    @Override // ru.d
    public Sink e(Request request, long j10) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = this.f50231d;
        Intrinsics.checkNotNull(iVar);
        return iVar.n();
    }

    @Override // ru.d
    public void f(Request request) {
        boolean z10;
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f50231d != null) {
            return;
        }
        if (request.c() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f50231d = this.f50230c.E1(f50225g.a(request), z10);
        if (!this.f50233f) {
            i iVar = this.f50231d;
            Intrinsics.checkNotNull(iVar);
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            iVar.v().g(this.f50229b.g(), timeUnit);
            i iVar2 = this.f50231d;
            Intrinsics.checkNotNull(iVar2);
            iVar2.E().g(this.f50229b.j(), timeUnit);
            return;
        }
        i iVar3 = this.f50231d;
        Intrinsics.checkNotNull(iVar3);
        iVar3.f(b.CANCEL);
        throw new IOException("Canceled");
    }

    @Override // ru.d
    public Response.a g(boolean z10) {
        i iVar = this.f50231d;
        if (iVar != null) {
            Response.a b10 = f50225g.b(iVar.C(), this.f50232e);
            if (z10 && b10.h() == 100) {
                return null;
            }
            return b10;
        }
        throw new IOException("stream wasn't created");
    }

    @Override // ru.d
    public void h() {
        this.f50230c.flush();
    }
}
