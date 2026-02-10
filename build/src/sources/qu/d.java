package qu;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.reactnativecommunity.webview.RNCWebViewManager;
import cu.j;
import cu.l;
import java.io.Closeable;
import java.io.IOException;
import java.net.ProtocolException;
import java.net.SocketTimeoutException;
import java.util.ArrayDeque;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import kotlin.text.StringsKt;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.WebSocket;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import qu.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements WebSocket, g.a {

    /* renamed from: a  reason: collision with root package name */
    private final Request f47235a;

    /* renamed from: b  reason: collision with root package name */
    private final l f47236b;

    /* renamed from: c  reason: collision with root package name */
    private final Random f47237c;

    /* renamed from: d  reason: collision with root package name */
    private final long f47238d;

    /* renamed from: e  reason: collision with root package name */
    private qu.e f47239e;

    /* renamed from: f  reason: collision with root package name */
    private long f47240f;

    /* renamed from: g  reason: collision with root package name */
    private final String f47241g;

    /* renamed from: h  reason: collision with root package name */
    private Call f47242h;

    /* renamed from: i  reason: collision with root package name */
    private gu.a f47243i;

    /* renamed from: j  reason: collision with root package name */
    private qu.g f47244j;

    /* renamed from: k  reason: collision with root package name */
    private qu.h f47245k;

    /* renamed from: l  reason: collision with root package name */
    private gu.d f47246l;

    /* renamed from: m  reason: collision with root package name */
    private String f47247m;

    /* renamed from: n  reason: collision with root package name */
    private AbstractC0641d f47248n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayDeque f47249o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayDeque f47250p;

    /* renamed from: q  reason: collision with root package name */
    private long f47251q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f47252r;

    /* renamed from: s  reason: collision with root package name */
    private int f47253s;

    /* renamed from: t  reason: collision with root package name */
    private String f47254t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f47255u;

    /* renamed from: v  reason: collision with root package name */
    private int f47256v;

    /* renamed from: w  reason: collision with root package name */
    private int f47257w;

    /* renamed from: x  reason: collision with root package name */
    private int f47258x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f47259y;

    /* renamed from: z  reason: collision with root package name */
    public static final b f47234z = new b(null);
    private static final List A = CollectionsKt.e(j.HTTP_1_1);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f47260a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f47261b;

        /* renamed from: c  reason: collision with root package name */
        private final long f47262c;

        public a(int i10, ByteString byteString, long j10) {
            this.f47260a = i10;
            this.f47261b = byteString;
            this.f47262c = j10;
        }

        public final long a() {
            return this.f47262c;
        }

        public final int b() {
            return this.f47260a;
        }

        public final ByteString c() {
            return this.f47261b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private final int f47263a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f47264b;

        public c(int i10, ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f47263a = i10;
            this.f47264b = data;
        }

        public final ByteString a() {
            return this.f47264b;
        }

        public final int b() {
            return this.f47263a;
        }
    }

    /* renamed from: qu.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class AbstractC0641d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f47265d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f47266e;

        /* renamed from: i  reason: collision with root package name */
        private final BufferedSink f47267i;

        public AbstractC0641d(boolean z10, BufferedSource source, BufferedSink sink) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            this.f47265d = z10;
            this.f47266e = source;
            this.f47267i = sink;
        }

        public final boolean a() {
            return this.f47265d;
        }

        public final BufferedSink g() {
            return this.f47267i;
        }

        public final BufferedSource k() {
            return this.f47266e;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class e extends gu.a {
        public e() {
            super(d.this.f47247m + " writer", false, 2, null);
        }

        @Override // gu.a
        public long f() {
            try {
                if (d.this.w()) {
                    return 0L;
                }
                return -1L;
            } catch (IOException e10) {
                d.this.p(e10, null);
                return -1L;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements cu.b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Request f47270e;

        f(Request request) {
            this.f47270e = request;
        }

        @Override // cu.b
        public void onFailure(Call call, IOException e10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(e10, "e");
            d.this.p(e10, null);
        }

        @Override // cu.b
        public void onResponse(Call call, Response response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            hu.c C = response.C();
            try {
                d.this.m(response, C);
                Intrinsics.checkNotNull(C);
                AbstractC0641d n10 = C.n();
                qu.e a10 = qu.e.f47274g.a(response.C0());
                d.this.f47239e = a10;
                if (!d.this.s(a10)) {
                    d dVar = d.this;
                    synchronized (dVar) {
                        dVar.f47250p.clear();
                        dVar.f(1010, "unexpected Sec-WebSocket-Extensions in response header");
                    }
                }
                try {
                    d.this.r(du.e.f20987i + " WebSocket " + this.f47270e.n().q(), n10);
                    d.this.q().onOpen(d.this, response);
                    d.this.t();
                } catch (Exception e10) {
                    d.this.p(e10, null);
                }
            } catch (IOException e11) {
                d.this.p(e11, response);
                du.e.m(response);
                if (C != null) {
                    C.v();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends gu.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f47271e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ long f47272f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, d dVar, long j10) {
            super(str, false, 2, null);
            this.f47271e = dVar;
            this.f47272f = j10;
        }

        @Override // gu.a
        public long f() {
            this.f47271e.x();
            return this.f47272f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h extends gu.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f47273e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, d dVar) {
            super(str, z10);
            this.f47273e = dVar;
        }

        @Override // gu.a
        public long f() {
            this.f47273e.l();
            return -1L;
        }
    }

    public d(gu.e taskRunner, Request originalRequest, l listener, Random random, long j10, qu.e eVar, long j11) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(originalRequest, "originalRequest");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f47235a = originalRequest;
        this.f47236b = listener;
        this.f47237c = random;
        this.f47238d = j10;
        this.f47239e = eVar;
        this.f47240f = j11;
        this.f47246l = taskRunner.i();
        this.f47249o = new ArrayDeque();
        this.f47250p = new ArrayDeque();
        this.f47253s = -1;
        if (Intrinsics.areEqual("GET", originalRequest.j())) {
            ByteString.a aVar = ByteString.f42341o;
            byte[] bArr = new byte[16];
            random.nextBytes(bArr);
            Unit unit = Unit.f31765a;
            this.f47241g = ByteString.a.j(aVar, bArr, 0, 0, 3, null).d();
            return;
        }
        throw new IllegalArgumentException(("Request must be GET: " + originalRequest.j()).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean s(qu.e eVar) {
        if (eVar.f47280f || eVar.f47276b != null) {
            return false;
        }
        if (eVar.f47278d != null && !new IntRange(8, 15).contains(eVar.f47278d.intValue())) {
            return false;
        }
        return true;
    }

    private final void u() {
        if (du.e.f20986h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        gu.a aVar = this.f47243i;
        if (aVar != null) {
            gu.d.j(this.f47246l, aVar, 0L, 2, null);
        }
    }

    private final synchronized boolean v(ByteString byteString, int i10) {
        if (!this.f47255u && !this.f47252r) {
            if (this.f47251q + byteString.G() > 16777216) {
                f(RNCWebViewManager.COMMAND_CLEAR_CACHE, null);
                return false;
            }
            this.f47251q += byteString.G();
            this.f47250p.add(new c(i10, byteString));
            u();
            return true;
        }
        return false;
    }

    @Override // okhttp3.WebSocket
    public boolean a(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        return v(bytes, 2);
    }

    @Override // qu.g.a
    public void b(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        this.f47236b.onMessage(this, bytes);
    }

    @Override // qu.g.a
    public void c(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        this.f47236b.onMessage(this, text);
    }

    @Override // qu.g.a
    public synchronized void d(ByteString payload) {
        try {
            Intrinsics.checkNotNullParameter(payload, "payload");
            if (!this.f47255u && (!this.f47252r || !this.f47250p.isEmpty())) {
                this.f47249o.add(payload);
                u();
                this.f47257w++;
            }
        } finally {
        }
    }

    @Override // qu.g.a
    public synchronized void e(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        this.f47258x++;
        this.f47259y = false;
    }

    @Override // okhttp3.WebSocket
    public boolean f(int i10, String str) {
        return n(i10, str, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
    }

    @Override // qu.g.a
    public void g(int i10, String reason) {
        AbstractC0641d abstractC0641d;
        qu.g gVar;
        qu.h hVar;
        Intrinsics.checkNotNullParameter(reason, "reason");
        if (i10 != -1) {
            synchronized (this) {
                try {
                    if (this.f47253s == -1) {
                        this.f47253s = i10;
                        this.f47254t = reason;
                        abstractC0641d = null;
                        if (this.f47252r && this.f47250p.isEmpty()) {
                            AbstractC0641d abstractC0641d2 = this.f47248n;
                            this.f47248n = null;
                            gVar = this.f47244j;
                            this.f47244j = null;
                            hVar = this.f47245k;
                            this.f47245k = null;
                            this.f47246l.n();
                            abstractC0641d = abstractC0641d2;
                        } else {
                            gVar = null;
                            hVar = null;
                        }
                        Unit unit = Unit.f31765a;
                    } else {
                        throw new IllegalStateException("already closed");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            try {
                this.f47236b.onClosing(this, i10, reason);
                if (abstractC0641d != null) {
                    this.f47236b.onClosed(this, i10, reason);
                }
                if (hVar != null) {
                    return;
                }
                return;
            } finally {
                if (abstractC0641d != null) {
                    du.e.m(abstractC0641d);
                }
                if (gVar != null) {
                    du.e.m(gVar);
                }
                if (hVar != null) {
                    du.e.m(hVar);
                }
            }
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public void l() {
        Call call = this.f47242h;
        Intrinsics.checkNotNull(call);
        call.cancel();
    }

    public final void m(Response response, hu.c cVar) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.z() == 101) {
            String Z = Response.Z(response, "Connection", null, 2, null);
            if (StringsKt.A("Upgrade", Z, true)) {
                String Z2 = Response.Z(response, "Upgrade", null, 2, null);
                if (StringsKt.A("websocket", Z2, true)) {
                    String Z3 = Response.Z(response, "Sec-WebSocket-Accept", null, 2, null);
                    ByteString.a aVar = ByteString.f42341o;
                    String d10 = aVar.g(this.f47241g + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").E().d();
                    if (Intrinsics.areEqual(d10, Z3)) {
                        if (cVar != null) {
                            return;
                        }
                        throw new ProtocolException("Web Socket exchange missing: bad interceptor?");
                    }
                    throw new ProtocolException("Expected 'Sec-WebSocket-Accept' header value '" + d10 + "' but was '" + Z3 + '\'');
                }
                throw new ProtocolException("Expected 'Upgrade' header value 'websocket' but was '" + Z2 + '\'');
            }
            throw new ProtocolException("Expected 'Connection' header value 'Upgrade' but was '" + Z + '\'');
        }
        throw new ProtocolException("Expected HTTP 101 response but was '" + response.z() + ' ' + response.G0() + '\'');
    }

    public final synchronized boolean n(int i10, String str, long j10) {
        ByteString byteString;
        try {
            qu.f.f47281a.c(i10);
            if (str != null) {
                byteString = ByteString.f42341o.g(str);
                if (byteString.G() > 123) {
                    throw new IllegalArgumentException(("reason.size() > 123: " + str).toString());
                }
            } else {
                byteString = null;
            }
            if (!this.f47255u && !this.f47252r) {
                this.f47252r = true;
                this.f47250p.add(new a(i10, byteString, j10));
                u();
                return true;
            }
            return false;
        } finally {
        }
    }

    public final void o(OkHttpClient client) {
        Intrinsics.checkNotNullParameter(client, "client");
        if (this.f47235a.f("Sec-WebSocket-Extensions") != null) {
            p(new ProtocolException("Request header not permitted: 'Sec-WebSocket-Extensions'"), null);
            return;
        }
        OkHttpClient c10 = client.E().j(okhttp3.e.f42298b).P(A).c();
        Request b10 = this.f47235a.k().e("Upgrade", "websocket").e("Connection", "Upgrade").e("Sec-WebSocket-Key", this.f47241g).e("Sec-WebSocket-Version", "13").e("Sec-WebSocket-Extensions", "permessage-deflate").b();
        hu.e eVar = new hu.e(c10, b10, true);
        this.f47242h = eVar;
        Intrinsics.checkNotNull(eVar);
        eVar.J0(new f(b10));
    }

    public final void p(Exception e10, Response response) {
        Intrinsics.checkNotNullParameter(e10, "e");
        synchronized (this) {
            if (this.f47255u) {
                return;
            }
            this.f47255u = true;
            AbstractC0641d abstractC0641d = this.f47248n;
            this.f47248n = null;
            qu.g gVar = this.f47244j;
            this.f47244j = null;
            qu.h hVar = this.f47245k;
            this.f47245k = null;
            this.f47246l.n();
            Unit unit = Unit.f31765a;
            try {
                this.f47236b.onFailure(this, e10, response);
            } finally {
                if (abstractC0641d != null) {
                    du.e.m(abstractC0641d);
                }
                if (gVar != null) {
                    du.e.m(gVar);
                }
                if (hVar != null) {
                    du.e.m(hVar);
                }
            }
        }
    }

    public final l q() {
        return this.f47236b;
    }

    public final void r(String name, AbstractC0641d streams) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(streams, "streams");
        qu.e eVar = this.f47239e;
        Intrinsics.checkNotNull(eVar);
        synchronized (this) {
            try {
                this.f47247m = name;
                this.f47248n = streams;
                this.f47245k = new qu.h(streams.a(), streams.g(), this.f47237c, eVar.f47275a, eVar.a(streams.a()), this.f47240f);
                this.f47243i = new e();
                long j10 = this.f47238d;
                if (j10 != 0) {
                    try {
                        long nanos = TimeUnit.MILLISECONDS.toNanos(j10);
                        gu.d dVar = this.f47246l;
                        dVar.i(new g(name + " ping", this, nanos), nanos);
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                if (!this.f47250p.isEmpty()) {
                    u();
                }
                Unit unit = Unit.f31765a;
                this.f47244j = new qu.g(streams.a(), streams.k(), this, eVar.f47275a, eVar.a(!streams.a()));
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    @Override // okhttp3.WebSocket
    public boolean send(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        return v(ByteString.f42341o.g(text), 1);
    }

    public final void t() {
        while (this.f47253s == -1) {
            qu.g gVar = this.f47244j;
            Intrinsics.checkNotNull(gVar);
            gVar.a();
        }
    }

    public final boolean w() {
        String str;
        qu.g gVar;
        qu.h hVar;
        int i10;
        AbstractC0641d abstractC0641d;
        synchronized (this) {
            try {
                if (this.f47255u) {
                    return false;
                }
                qu.h hVar2 = this.f47245k;
                Object poll = this.f47249o.poll();
                Object obj = null;
                if (poll == null) {
                    Object poll2 = this.f47250p.poll();
                    if (poll2 instanceof a) {
                        i10 = this.f47253s;
                        str = this.f47254t;
                        if (i10 != -1) {
                            abstractC0641d = this.f47248n;
                            this.f47248n = null;
                            gVar = this.f47244j;
                            this.f47244j = null;
                            hVar = this.f47245k;
                            this.f47245k = null;
                            this.f47246l.n();
                        } else {
                            long a10 = ((a) poll2).a();
                            this.f47246l.i(new h(this.f47247m + " cancel", true, this), TimeUnit.MILLISECONDS.toNanos(a10));
                            abstractC0641d = null;
                            gVar = null;
                            hVar = null;
                        }
                    } else if (poll2 == null) {
                        return false;
                    } else {
                        str = null;
                        gVar = null;
                        hVar = null;
                        i10 = -1;
                        abstractC0641d = null;
                    }
                    obj = poll2;
                } else {
                    str = null;
                    gVar = null;
                    hVar = null;
                    i10 = -1;
                    abstractC0641d = null;
                }
                Unit unit = Unit.f31765a;
                try {
                    if (poll != null) {
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.n((ByteString) poll);
                    } else if (obj instanceof c) {
                        c cVar = (c) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.k(cVar.b(), cVar.a());
                        synchronized (this) {
                            this.f47251q -= cVar.a().G();
                        }
                    } else if (obj instanceof a) {
                        a aVar = (a) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.a(aVar.b(), aVar.c());
                        if (abstractC0641d != null) {
                            l lVar = this.f47236b;
                            Intrinsics.checkNotNull(str);
                            lVar.onClosed(this, i10, str);
                        }
                    } else {
                        throw new AssertionError();
                    }
                    return true;
                } finally {
                    if (abstractC0641d != null) {
                        du.e.m(abstractC0641d);
                    }
                    if (gVar != null) {
                        du.e.m(gVar);
                    }
                    if (hVar != null) {
                        du.e.m(hVar);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void x() {
        int i10;
        synchronized (this) {
            try {
                if (this.f47255u) {
                    return;
                }
                qu.h hVar = this.f47245k;
                if (hVar == null) {
                    return;
                }
                if (this.f47259y) {
                    i10 = this.f47256v;
                } else {
                    i10 = -1;
                }
                this.f47256v++;
                this.f47259y = true;
                Unit unit = Unit.f31765a;
                if (i10 != -1) {
                    p(new SocketTimeoutException("sent ping but didn't receive pong within " + this.f47238d + "ms (after " + (i10 - 1) + " successful ping/pongs)"), null);
                    return;
                }
                try {
                    hVar.m(ByteString.f42342p);
                } catch (IOException e10) {
                    p(e10, null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
