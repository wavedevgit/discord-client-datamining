package cu;

import au.k;
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
public final class g implements au.d {

    /* renamed from: g  reason: collision with root package name */
    public static final a f20953g = new a(null);

    /* renamed from: h  reason: collision with root package name */
    private static final List f20954h = vt.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade", ":method", ":path", ":scheme", ":authority");

    /* renamed from: i  reason: collision with root package name */
    private static final List f20955i = vt.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade");

    /* renamed from: a  reason: collision with root package name */
    private final zt.f f20956a;

    /* renamed from: b  reason: collision with root package name */
    private final au.g f20957b;

    /* renamed from: c  reason: collision with root package name */
    private final f f20958c;

    /* renamed from: d  reason: collision with root package name */
    private volatile i f20959d;

    /* renamed from: e  reason: collision with root package name */
    private final ut.j f20960e;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f20961f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final List a(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            Headers h10 = request.h();
            ArrayList arrayList = new ArrayList(h10.size() + 4);
            arrayList.add(new c(c.f20858g, request.j()));
            arrayList.add(new c(c.f20859h, au.i.f6113a.c(request.n())));
            String f10 = request.f("Host");
            if (f10 != null) {
                arrayList.add(new c(c.f20861j, f10));
            }
            arrayList.add(new c(c.f20860i, request.n().s()));
            int size = h10.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = h10.e(i10);
                Locale US = Locale.US;
                Intrinsics.checkNotNullExpressionValue(US, "US");
                String lowerCase = e10.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                if (!g.f20954h.contains(lowerCase) || (Intrinsics.areEqual(lowerCase, "te") && Intrinsics.areEqual(h10.j(i10), "trailers"))) {
                    arrayList.add(new c(lowerCase, h10.j(i10)));
                }
            }
            return arrayList;
        }

        public final Response.a b(Headers headerBlock, ut.j protocol) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            Headers.a aVar = new Headers.a();
            int size = headerBlock.size();
            au.k kVar = null;
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headerBlock.e(i10);
                String j10 = headerBlock.j(i10);
                if (Intrinsics.areEqual(e10, ":status")) {
                    k.a aVar2 = au.k.f6116d;
                    kVar = aVar2.a("HTTP/1.1 " + j10);
                } else if (!g.f20955i.contains(e10)) {
                    aVar.d(e10, j10);
                }
            }
            if (kVar != null) {
                return new Response.a().p(protocol).g(kVar.f6118b).m(kVar.f6119c).k(aVar.f());
            }
            throw new ProtocolException("Expected ':status' header not present");
        }

        private a() {
        }
    }

    public g(OkHttpClient client, zt.f connection, au.g chain, f http2Connection) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(chain, "chain");
        Intrinsics.checkNotNullParameter(http2Connection, "http2Connection");
        this.f20956a = connection;
        this.f20957b = chain;
        this.f20958c = http2Connection;
        List G = client.G();
        ut.j jVar = ut.j.H2_PRIOR_KNOWLEDGE;
        this.f20960e = G.contains(jVar) ? jVar : ut.j.HTTP_2;
    }

    @Override // au.d
    public void a() {
        i iVar = this.f20959d;
        Intrinsics.checkNotNull(iVar);
        iVar.n().close();
    }

    @Override // au.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        i iVar = this.f20959d;
        Intrinsics.checkNotNull(iVar);
        return iVar.p();
    }

    @Override // au.d
    public zt.f c() {
        return this.f20956a;
    }

    @Override // au.d
    public void cancel() {
        this.f20961f = true;
        i iVar = this.f20959d;
        if (iVar != null) {
            iVar.f(b.CANCEL);
        }
    }

    @Override // au.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!au.e.b(response)) {
            return 0L;
        }
        return vt.e.v(response);
    }

    @Override // au.d
    public Sink e(Request request, long j10) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = this.f20959d;
        Intrinsics.checkNotNull(iVar);
        return iVar.n();
    }

    @Override // au.d
    public void f(Request request) {
        boolean z10;
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f20959d != null) {
            return;
        }
        if (request.c() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f20959d = this.f20958c.c2(f20953g.a(request), z10);
        if (!this.f20961f) {
            i iVar = this.f20959d;
            Intrinsics.checkNotNull(iVar);
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            iVar.v().g(this.f20957b.g(), timeUnit);
            i iVar2 = this.f20959d;
            Intrinsics.checkNotNull(iVar2);
            iVar2.E().g(this.f20957b.j(), timeUnit);
            return;
        }
        i iVar3 = this.f20959d;
        Intrinsics.checkNotNull(iVar3);
        iVar3.f(b.CANCEL);
        throw new IOException("Canceled");
    }

    @Override // au.d
    public Response.a g(boolean z10) {
        i iVar = this.f20959d;
        if (iVar != null) {
            Response.a b10 = f20953g.b(iVar.C(), this.f20960e);
            if (z10 && b10.h() == 100) {
                return null;
            }
            return b10;
        }
        throw new IOException("stream wasn't created");
    }

    @Override // au.d
    public void h() {
        this.f20958c.flush();
    }
}
