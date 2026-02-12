package zu;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.reactnativecommunity.webview.RNCWebViewManager;
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
import lu.j;
import lu.l;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.WebSocket;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import zu.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements WebSocket, g.a {

    /* renamed from: a  reason: collision with root package name */
    private final Request f57139a;

    /* renamed from: b  reason: collision with root package name */
    private final l f57140b;

    /* renamed from: c  reason: collision with root package name */
    private final Random f57141c;

    /* renamed from: d  reason: collision with root package name */
    private final long f57142d;

    /* renamed from: e  reason: collision with root package name */
    private zu.e f57143e;

    /* renamed from: f  reason: collision with root package name */
    private long f57144f;

    /* renamed from: g  reason: collision with root package name */
    private final String f57145g;

    /* renamed from: h  reason: collision with root package name */
    private Call f57146h;

    /* renamed from: i  reason: collision with root package name */
    private pu.a f57147i;

    /* renamed from: j  reason: collision with root package name */
    private zu.g f57148j;

    /* renamed from: k  reason: collision with root package name */
    private zu.h f57149k;

    /* renamed from: l  reason: collision with root package name */
    private pu.d f57150l;

    /* renamed from: m  reason: collision with root package name */
    private String f57151m;

    /* renamed from: n  reason: collision with root package name */
    private AbstractC0817d f57152n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayDeque f57153o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayDeque f57154p;

    /* renamed from: q  reason: collision with root package name */
    private long f57155q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f57156r;

    /* renamed from: s  reason: collision with root package name */
    private int f57157s;

    /* renamed from: t  reason: collision with root package name */
    private String f57158t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f57159u;

    /* renamed from: v  reason: collision with root package name */
    private int f57160v;

    /* renamed from: w  reason: collision with root package name */
    private int f57161w;

    /* renamed from: x  reason: collision with root package name */
    private int f57162x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f57163y;

    /* renamed from: z  reason: collision with root package name */
    public static final b f57138z = new b(null);
    private static final List A = CollectionsKt.e(j.HTTP_1_1);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f57164a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f57165b;

        /* renamed from: c  reason: collision with root package name */
        private final long f57166c;

        public a(int i10, ByteString byteString, long j10) {
            this.f57164a = i10;
            this.f57165b = byteString;
            this.f57166c = j10;
        }

        public final long a() {
            return this.f57166c;
        }

        public final int b() {
            return this.f57164a;
        }

        public final ByteString c() {
            return this.f57165b;
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
        private final int f57167a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f57168b;

        public c(int i10, ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f57167a = i10;
            this.f57168b = data;
        }

        public final ByteString a() {
            return this.f57168b;
        }

        public final int b() {
            return this.f57167a;
        }
    }

    /* renamed from: zu.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class AbstractC0817d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f57169d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f57170e;

        /* renamed from: i  reason: collision with root package name */
        private final BufferedSink f57171i;

        public AbstractC0817d(boolean z10, BufferedSource source, BufferedSink sink) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            this.f57169d = z10;
            this.f57170e = source;
            this.f57171i = sink;
        }

        public final boolean a() {
            return this.f57169d;
        }

        public final BufferedSink h() {
            return this.f57171i;
        }

        public final BufferedSource i() {
            return this.f57170e;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class e extends pu.a {
        public e() {
            super(d.this.f57151m + " writer", false, 2, null);
        }

        @Override // pu.a
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
    public static final class f implements lu.b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Request f57174e;

        f(Request request) {
            this.f57174e = request;
        }

        @Override // lu.b
        public void onFailure(Call call, IOException e10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(e10, "e");
            d.this.p(e10, null);
        }

        @Override // lu.b
        public void onResponse(Call call, Response response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            qu.c C = response.C();
            try {
                d.this.m(response, C);
                Intrinsics.checkNotNull(C);
                AbstractC0817d n10 = C.n();
                zu.e a10 = zu.e.f57178g.a(response.z0());
                d.this.f57143e = a10;
                if (!d.this.s(a10)) {
                    d dVar = d.this;
                    synchronized (dVar) {
                        dVar.f57154p.clear();
                        dVar.f(1010, "unexpected Sec-WebSocket-Extensions in response header");
                    }
                }
                try {
                    d.this.r(mu.e.f36665i + " WebSocket " + this.f57174e.n().q(), n10);
                    d.this.q().onOpen(d.this, response);
                    d.this.t();
                } catch (Exception e10) {
                    d.this.p(e10, null);
                }
            } catch (IOException e11) {
                d.this.p(e11, response);
                mu.e.m(response);
                if (C != null) {
                    C.v();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends pu.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f57175e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ long f57176f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, d dVar, long j10) {
            super(str, false, 2, null);
            this.f57175e = dVar;
            this.f57176f = j10;
        }

        @Override // pu.a
        public long f() {
            this.f57175e.x();
            return this.f57176f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h extends pu.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f57177e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, d dVar) {
            super(str, z10);
            this.f57177e = dVar;
        }

        @Override // pu.a
        public long f() {
            this.f57177e.l();
            return -1L;
        }
    }

    public d(pu.e taskRunner, Request originalRequest, l listener, Random random, long j10, zu.e eVar, long j11) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(originalRequest, "originalRequest");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f57139a = originalRequest;
        this.f57140b = listener;
        this.f57141c = random;
        this.f57142d = j10;
        this.f57143e = eVar;
        this.f57144f = j11;
        this.f57150l = taskRunner.i();
        this.f57153o = new ArrayDeque();
        this.f57154p = new ArrayDeque();
        this.f57157s = -1;
        if (Intrinsics.areEqual("GET", originalRequest.j())) {
            ByteString.a aVar = ByteString.f40592o;
            byte[] bArr = new byte[16];
            random.nextBytes(bArr);
            Unit unit = Unit.f31988a;
            this.f57145g = ByteString.a.j(aVar, bArr, 0, 0, 3, null).d();
            return;
        }
        throw new IllegalArgumentException(("Request must be GET: " + originalRequest.j()).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean s(zu.e eVar) {
        if (eVar.f57184f || eVar.f57180b != null) {
            return false;
        }
        if (eVar.f57182d != null && !new IntRange(8, 15).contains(eVar.f57182d.intValue())) {
            return false;
        }
        return true;
    }

    private final void u() {
        if (mu.e.f36664h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        pu.a aVar = this.f57147i;
        if (aVar != null) {
            pu.d.j(this.f57150l, aVar, 0L, 2, null);
        }
    }

    private final synchronized boolean v(ByteString byteString, int i10) {
        if (!this.f57159u && !this.f57156r) {
            if (this.f57155q + byteString.G() > 16777216) {
                f(RNCWebViewManager.COMMAND_CLEAR_CACHE, null);
                return false;
            }
            this.f57155q += byteString.G();
            this.f57154p.add(new c(i10, byteString));
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

    @Override // zu.g.a
    public void b(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        this.f57140b.onMessage(this, bytes);
    }

    @Override // zu.g.a
    public void c(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        this.f57140b.onMessage(this, text);
    }

    @Override // zu.g.a
    public synchronized void d(ByteString payload) {
        try {
            Intrinsics.checkNotNullParameter(payload, "payload");
            if (!this.f57159u && (!this.f57156r || !this.f57154p.isEmpty())) {
                this.f57153o.add(payload);
                u();
                this.f57161w++;
            }
        } finally {
        }
    }

    @Override // zu.g.a
    public synchronized void e(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        this.f57162x++;
        this.f57163y = false;
    }

    @Override // okhttp3.WebSocket
    public boolean f(int i10, String str) {
        return n(i10, str, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
    }

    @Override // zu.g.a
    public void g(int i10, String reason) {
        AbstractC0817d abstractC0817d;
        zu.g gVar;
        zu.h hVar;
        Intrinsics.checkNotNullParameter(reason, "reason");
        if (i10 != -1) {
            synchronized (this) {
                try {
                    if (this.f57157s == -1) {
                        this.f57157s = i10;
                        this.f57158t = reason;
                        abstractC0817d = null;
                        if (this.f57156r && this.f57154p.isEmpty()) {
                            AbstractC0817d abstractC0817d2 = this.f57152n;
                            this.f57152n = null;
                            gVar = this.f57148j;
                            this.f57148j = null;
                            hVar = this.f57149k;
                            this.f57149k = null;
                            this.f57150l.n();
                            abstractC0817d = abstractC0817d2;
                        } else {
                            gVar = null;
                            hVar = null;
                        }
                        Unit unit = Unit.f31988a;
                    } else {
                        throw new IllegalStateException("already closed");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            try {
                this.f57140b.onClosing(this, i10, reason);
                if (abstractC0817d != null) {
                    this.f57140b.onClosed(this, i10, reason);
                }
                if (hVar != null) {
                    return;
                }
                return;
            } finally {
                if (abstractC0817d != null) {
                    mu.e.m(abstractC0817d);
                }
                if (gVar != null) {
                    mu.e.m(gVar);
                }
                if (hVar != null) {
                    mu.e.m(hVar);
                }
            }
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public void l() {
        Call call = this.f57146h;
        Intrinsics.checkNotNull(call);
        call.cancel();
    }

    public final void m(Response response, qu.c cVar) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.z() == 101) {
            String Z = Response.Z(response, "Connection", null, 2, null);
            if (StringsKt.A("Upgrade", Z, true)) {
                String Z2 = Response.Z(response, "Upgrade", null, 2, null);
                if (StringsKt.A("websocket", Z2, true)) {
                    String Z3 = Response.Z(response, "Sec-WebSocket-Accept", null, 2, null);
                    ByteString.a aVar = ByteString.f40592o;
                    String d10 = aVar.g(this.f57145g + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").E().d();
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
        throw new ProtocolException("Expected HTTP 101 response but was '" + response.z() + ' ' + response.E0() + '\'');
    }

    public final synchronized boolean n(int i10, String str, long j10) {
        ByteString byteString;
        try {
            zu.f.f57185a.c(i10);
            if (str != null) {
                byteString = ByteString.f40592o.g(str);
                if (byteString.G() > 123) {
                    throw new IllegalArgumentException(("reason.size() > 123: " + str).toString());
                }
            } else {
                byteString = null;
            }
            if (!this.f57159u && !this.f57156r) {
                this.f57156r = true;
                this.f57154p.add(new a(i10, byteString, j10));
                u();
                return true;
            }
            return false;
        } finally {
        }
    }

    public final void o(OkHttpClient client) {
        Intrinsics.checkNotNullParameter(client, "client");
        if (this.f57139a.f("Sec-WebSocket-Extensions") != null) {
            p(new ProtocolException("Request header not permitted: 'Sec-WebSocket-Extensions'"), null);
            return;
        }
        OkHttpClient c10 = client.E().j(okhttp3.e.f40549b).P(A).c();
        Request b10 = this.f57139a.k().e("Upgrade", "websocket").e("Connection", "Upgrade").e("Sec-WebSocket-Key", this.f57145g).e("Sec-WebSocket-Version", "13").e("Sec-WebSocket-Extensions", "permessage-deflate").b();
        qu.e eVar = new qu.e(c10, b10, true);
        this.f57146h = eVar;
        Intrinsics.checkNotNull(eVar);
        eVar.b1(new f(b10));
    }

    public final void p(Exception e10, Response response) {
        Intrinsics.checkNotNullParameter(e10, "e");
        synchronized (this) {
            if (this.f57159u) {
                return;
            }
            this.f57159u = true;
            AbstractC0817d abstractC0817d = this.f57152n;
            this.f57152n = null;
            zu.g gVar = this.f57148j;
            this.f57148j = null;
            zu.h hVar = this.f57149k;
            this.f57149k = null;
            this.f57150l.n();
            Unit unit = Unit.f31988a;
            try {
                this.f57140b.onFailure(this, e10, response);
            } finally {
                if (abstractC0817d != null) {
                    mu.e.m(abstractC0817d);
                }
                if (gVar != null) {
                    mu.e.m(gVar);
                }
                if (hVar != null) {
                    mu.e.m(hVar);
                }
            }
        }
    }

    public final l q() {
        return this.f57140b;
    }

    public final void r(String name, AbstractC0817d streams) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(streams, "streams");
        zu.e eVar = this.f57143e;
        Intrinsics.checkNotNull(eVar);
        synchronized (this) {
            try {
                this.f57151m = name;
                this.f57152n = streams;
                this.f57149k = new zu.h(streams.a(), streams.h(), this.f57141c, eVar.f57179a, eVar.a(streams.a()), this.f57144f);
                this.f57147i = new e();
                long j10 = this.f57142d;
                if (j10 != 0) {
                    try {
                        long nanos = TimeUnit.MILLISECONDS.toNanos(j10);
                        pu.d dVar = this.f57150l;
                        dVar.i(new g(name + " ping", this, nanos), nanos);
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                if (!this.f57154p.isEmpty()) {
                    u();
                }
                Unit unit = Unit.f31988a;
                this.f57148j = new zu.g(streams.a(), streams.i(), this, eVar.f57179a, eVar.a(!streams.a()));
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    @Override // okhttp3.WebSocket
    public boolean send(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        return v(ByteString.f40592o.g(text), 1);
    }

    public final void t() {
        while (this.f57157s == -1) {
            zu.g gVar = this.f57148j;
            Intrinsics.checkNotNull(gVar);
            gVar.a();
        }
    }

    public final boolean w() {
        String str;
        zu.g gVar;
        zu.h hVar;
        int i10;
        AbstractC0817d abstractC0817d;
        synchronized (this) {
            try {
                if (this.f57159u) {
                    return false;
                }
                zu.h hVar2 = this.f57149k;
                Object poll = this.f57153o.poll();
                Object obj = null;
                if (poll == null) {
                    Object poll2 = this.f57154p.poll();
                    if (poll2 instanceof a) {
                        i10 = this.f57157s;
                        str = this.f57158t;
                        if (i10 != -1) {
                            abstractC0817d = this.f57152n;
                            this.f57152n = null;
                            gVar = this.f57148j;
                            this.f57148j = null;
                            hVar = this.f57149k;
                            this.f57149k = null;
                            this.f57150l.n();
                        } else {
                            long a10 = ((a) poll2).a();
                            this.f57150l.i(new h(this.f57151m + " cancel", true, this), TimeUnit.MILLISECONDS.toNanos(a10));
                            abstractC0817d = null;
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
                        abstractC0817d = null;
                    }
                    obj = poll2;
                } else {
                    str = null;
                    gVar = null;
                    hVar = null;
                    i10 = -1;
                    abstractC0817d = null;
                }
                Unit unit = Unit.f31988a;
                try {
                    if (poll != null) {
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.n((ByteString) poll);
                    } else if (obj instanceof c) {
                        c cVar = (c) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.i(cVar.b(), cVar.a());
                        synchronized (this) {
                            this.f57155q -= cVar.a().G();
                        }
                    } else if (obj instanceof a) {
                        a aVar = (a) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.a(aVar.b(), aVar.c());
                        if (abstractC0817d != null) {
                            l lVar = this.f57140b;
                            Intrinsics.checkNotNull(str);
                            lVar.onClosed(this, i10, str);
                        }
                    } else {
                        throw new AssertionError();
                    }
                    return true;
                } finally {
                    if (abstractC0817d != null) {
                        mu.e.m(abstractC0817d);
                    }
                    if (gVar != null) {
                        mu.e.m(gVar);
                    }
                    if (hVar != null) {
                        mu.e.m(hVar);
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
                if (this.f57159u) {
                    return;
                }
                zu.h hVar = this.f57149k;
                if (hVar == null) {
                    return;
                }
                if (this.f57163y) {
                    i10 = this.f57160v;
                } else {
                    i10 = -1;
                }
                this.f57160v++;
                this.f57163y = true;
                Unit unit = Unit.f31988a;
                if (i10 != -1) {
                    p(new SocketTimeoutException("sent ping but didn't receive pong within " + this.f57142d + "ms (after " + (i10 - 1) + " successful ping/pongs)"), null);
                    return;
                }
                try {
                    hVar.m(ByteString.f40593p);
                } catch (IOException e10) {
                    p(e10, null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
