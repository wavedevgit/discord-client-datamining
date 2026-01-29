package bu;

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
import zt.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements zt.d {

    /* renamed from: g  reason: collision with root package name */
    public static final a f7955g = new a(null);

    /* renamed from: h  reason: collision with root package name */
    private static final List f7956h = ut.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade", ":method", ":path", ":scheme", ":authority");

    /* renamed from: i  reason: collision with root package name */
    private static final List f7957i = ut.e.w("connection", "host", "keep-alive", "proxy-connection", "te", "transfer-encoding", "encoding", "upgrade");

    /* renamed from: a  reason: collision with root package name */
    private final yt.f f7958a;

    /* renamed from: b  reason: collision with root package name */
    private final zt.g f7959b;

    /* renamed from: c  reason: collision with root package name */
    private final f f7960c;

    /* renamed from: d  reason: collision with root package name */
    private volatile i f7961d;

    /* renamed from: e  reason: collision with root package name */
    private final tt.j f7962e;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f7963f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final List a(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            Headers h10 = request.h();
            ArrayList arrayList = new ArrayList(h10.size() + 4);
            arrayList.add(new c(c.f7860g, request.j()));
            arrayList.add(new c(c.f7861h, zt.i.f56126a.c(request.n())));
            String f10 = request.f("Host");
            if (f10 != null) {
                arrayList.add(new c(c.f7863j, f10));
            }
            arrayList.add(new c(c.f7862i, request.n().s()));
            int size = h10.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = h10.e(i10);
                Locale US = Locale.US;
                Intrinsics.checkNotNullExpressionValue(US, "US");
                String lowerCase = e10.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
                if (!g.f7956h.contains(lowerCase) || (Intrinsics.areEqual(lowerCase, "te") && Intrinsics.areEqual(h10.j(i10), "trailers"))) {
                    arrayList.add(new c(lowerCase, h10.j(i10)));
                }
            }
            return arrayList;
        }

        public final Response.a b(Headers headerBlock, tt.j protocol) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            Headers.a aVar = new Headers.a();
            int size = headerBlock.size();
            zt.k kVar = null;
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headerBlock.e(i10);
                String j10 = headerBlock.j(i10);
                if (Intrinsics.areEqual(e10, ":status")) {
                    k.a aVar2 = zt.k.f56129d;
                    kVar = aVar2.a("HTTP/1.1 " + j10);
                } else if (!g.f7957i.contains(e10)) {
                    aVar.d(e10, j10);
                }
            }
            if (kVar != null) {
                return new Response.a().p(protocol).g(kVar.f56131b).m(kVar.f56132c).k(aVar.f());
            }
            throw new ProtocolException("Expected ':status' header not present");
        }

        private a() {
        }
    }

    public g(OkHttpClient client, yt.f connection, zt.g chain, f http2Connection) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(connection, "connection");
        Intrinsics.checkNotNullParameter(chain, "chain");
        Intrinsics.checkNotNullParameter(http2Connection, "http2Connection");
        this.f7958a = connection;
        this.f7959b = chain;
        this.f7960c = http2Connection;
        List G = client.G();
        tt.j jVar = tt.j.H2_PRIOR_KNOWLEDGE;
        this.f7962e = G.contains(jVar) ? jVar : tt.j.HTTP_2;
    }

    @Override // zt.d
    public void a() {
        i iVar = this.f7961d;
        Intrinsics.checkNotNull(iVar);
        iVar.n().close();
    }

    @Override // zt.d
    public Source b(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        i iVar = this.f7961d;
        Intrinsics.checkNotNull(iVar);
        return iVar.p();
    }

    @Override // zt.d
    public yt.f c() {
        return this.f7958a;
    }

    @Override // zt.d
    public void cancel() {
        this.f7963f = true;
        i iVar = this.f7961d;
        if (iVar != null) {
            iVar.f(b.CANCEL);
        }
    }

    @Override // zt.d
    public long d(Response response) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (!zt.e.b(response)) {
            return 0L;
        }
        return ut.e.v(response);
    }

    @Override // zt.d
    public Sink e(Request request, long j10) {
        Intrinsics.checkNotNullParameter(request, "request");
        i iVar = this.f7961d;
        Intrinsics.checkNotNull(iVar);
        return iVar.n();
    }

    @Override // zt.d
    public void f(Request request) {
        boolean z10;
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f7961d != null) {
            return;
        }
        if (request.c() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f7961d = this.f7960c.c2(f7955g.a(request), z10);
        if (!this.f7963f) {
            i iVar = this.f7961d;
            Intrinsics.checkNotNull(iVar);
            TimeUnit timeUnit = TimeUnit.MILLISECONDS;
            iVar.v().g(this.f7959b.g(), timeUnit);
            i iVar2 = this.f7961d;
            Intrinsics.checkNotNull(iVar2);
            iVar2.E().g(this.f7959b.j(), timeUnit);
            return;
        }
        i iVar3 = this.f7961d;
        Intrinsics.checkNotNull(iVar3);
        iVar3.f(b.CANCEL);
        throw new IOException("Canceled");
    }

    @Override // zt.d
    public Response.a g(boolean z10) {
        i iVar = this.f7961d;
        if (iVar != null) {
            Response.a b10 = f7955g.b(iVar.C(), this.f7962e);
            if (z10 && b10.h() == 100) {
                return null;
            }
            return b10;
        }
        throw new IOException("stream wasn't created");
    }

    @Override // zt.d
    public void h() {
        this.f7960c.flush();
    }
}
