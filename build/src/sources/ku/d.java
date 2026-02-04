package ku;

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
import ku.g;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.WebSocket;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import wt.j;
import wt.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements WebSocket, g.a {

    /* renamed from: a  reason: collision with root package name */
    private final Request f36180a;

    /* renamed from: b  reason: collision with root package name */
    private final l f36181b;

    /* renamed from: c  reason: collision with root package name */
    private final Random f36182c;

    /* renamed from: d  reason: collision with root package name */
    private final long f36183d;

    /* renamed from: e  reason: collision with root package name */
    private ku.e f36184e;

    /* renamed from: f  reason: collision with root package name */
    private long f36185f;

    /* renamed from: g  reason: collision with root package name */
    private final String f36186g;

    /* renamed from: h  reason: collision with root package name */
    private Call f36187h;

    /* renamed from: i  reason: collision with root package name */
    private au.a f36188i;

    /* renamed from: j  reason: collision with root package name */
    private ku.g f36189j;

    /* renamed from: k  reason: collision with root package name */
    private ku.h f36190k;

    /* renamed from: l  reason: collision with root package name */
    private au.d f36191l;

    /* renamed from: m  reason: collision with root package name */
    private String f36192m;

    /* renamed from: n  reason: collision with root package name */
    private AbstractC0460d f36193n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayDeque f36194o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayDeque f36195p;

    /* renamed from: q  reason: collision with root package name */
    private long f36196q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f36197r;

    /* renamed from: s  reason: collision with root package name */
    private int f36198s;

    /* renamed from: t  reason: collision with root package name */
    private String f36199t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f36200u;

    /* renamed from: v  reason: collision with root package name */
    private int f36201v;

    /* renamed from: w  reason: collision with root package name */
    private int f36202w;

    /* renamed from: x  reason: collision with root package name */
    private int f36203x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f36204y;

    /* renamed from: z  reason: collision with root package name */
    public static final b f36179z = new b(null);
    private static final List A = CollectionsKt.e(j.HTTP_1_1);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f36205a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f36206b;

        /* renamed from: c  reason: collision with root package name */
        private final long f36207c;

        public a(int i10, ByteString byteString, long j10) {
            this.f36205a = i10;
            this.f36206b = byteString;
            this.f36207c = j10;
        }

        public final long a() {
            return this.f36207c;
        }

        public final int b() {
            return this.f36205a;
        }

        public final ByteString c() {
            return this.f36206b;
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
        private final int f36208a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f36209b;

        public c(int i10, ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f36208a = i10;
            this.f36209b = data;
        }

        public final ByteString a() {
            return this.f36209b;
        }

        public final int b() {
            return this.f36208a;
        }
    }

    /* renamed from: ku.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class AbstractC0460d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f36210d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f36211e;

        /* renamed from: i  reason: collision with root package name */
        private final BufferedSink f36212i;

        public AbstractC0460d(boolean z10, BufferedSource source, BufferedSink sink) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            this.f36210d = z10;
            this.f36211e = source;
            this.f36212i = sink;
        }

        public final boolean a() {
            return this.f36210d;
        }

        public final BufferedSink h() {
            return this.f36212i;
        }

        public final BufferedSource l() {
            return this.f36211e;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class e extends au.a {
        public e() {
            super(d.this.f36192m + " writer", false, 2, null);
        }

        @Override // au.a
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
    public static final class f implements wt.b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Request f36215e;

        f(Request request) {
            this.f36215e = request;
        }

        @Override // wt.b
        public void onFailure(Call call, IOException e10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(e10, "e");
            d.this.p(e10, null);
        }

        @Override // wt.b
        public void onResponse(Call call, Response response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            bu.c N = response.N();
            try {
                d.this.m(response, N);
                Intrinsics.checkNotNull(N);
                AbstractC0460d n10 = N.n();
                ku.e a10 = ku.e.f36219g.a(response.E0());
                d.this.f36184e = a10;
                if (!d.this.s(a10)) {
                    d dVar = d.this;
                    synchronized (dVar) {
                        dVar.f36195p.clear();
                        dVar.f(1010, "unexpected Sec-WebSocket-Extensions in response header");
                    }
                }
                try {
                    d.this.r(xt.e.f53572i + " WebSocket " + this.f36215e.n().q(), n10);
                    d.this.q().onOpen(d.this, response);
                    d.this.t();
                } catch (Exception e10) {
                    d.this.p(e10, null);
                }
            } catch (IOException e11) {
                d.this.p(e11, response);
                xt.e.m(response);
                if (N != null) {
                    N.v();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends au.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f36216e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ long f36217f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, d dVar, long j10) {
            super(str, false, 2, null);
            this.f36216e = dVar;
            this.f36217f = j10;
        }

        @Override // au.a
        public long f() {
            this.f36216e.x();
            return this.f36217f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h extends au.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f36218e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, d dVar) {
            super(str, z10);
            this.f36218e = dVar;
        }

        @Override // au.a
        public long f() {
            this.f36218e.l();
            return -1L;
        }
    }

    public d(au.e taskRunner, Request originalRequest, l listener, Random random, long j10, ku.e eVar, long j11) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(originalRequest, "originalRequest");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f36180a = originalRequest;
        this.f36181b = listener;
        this.f36182c = random;
        this.f36183d = j10;
        this.f36184e = eVar;
        this.f36185f = j11;
        this.f36191l = taskRunner.i();
        this.f36194o = new ArrayDeque();
        this.f36195p = new ArrayDeque();
        this.f36198s = -1;
        if (Intrinsics.areEqual("GET", originalRequest.j())) {
            ByteString.a aVar = ByteString.f44307o;
            byte[] bArr = new byte[16];
            random.nextBytes(bArr);
            Unit unit = Unit.f32464a;
            this.f36186g = ByteString.a.j(aVar, bArr, 0, 0, 3, null).d();
            return;
        }
        throw new IllegalArgumentException(("Request must be GET: " + originalRequest.j()).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean s(ku.e eVar) {
        if (eVar.f36225f || eVar.f36221b != null) {
            return false;
        }
        if (eVar.f36223d != null && !new IntRange(8, 15).contains(eVar.f36223d.intValue())) {
            return false;
        }
        return true;
    }

    private final void u() {
        if (xt.e.f53571h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        au.a aVar = this.f36188i;
        if (aVar != null) {
            au.d.j(this.f36191l, aVar, 0L, 2, null);
        }
    }

    private final synchronized boolean v(ByteString byteString, int i10) {
        if (!this.f36200u && !this.f36197r) {
            if (this.f36196q + byteString.G() > 16777216) {
                f(RNCWebViewManager.COMMAND_CLEAR_CACHE, null);
                return false;
            }
            this.f36196q += byteString.G();
            this.f36195p.add(new c(i10, byteString));
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

    @Override // ku.g.a
    public void b(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        this.f36181b.onMessage(this, bytes);
    }

    @Override // ku.g.a
    public void c(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        this.f36181b.onMessage(this, text);
    }

    @Override // ku.g.a
    public synchronized void d(ByteString payload) {
        try {
            Intrinsics.checkNotNullParameter(payload, "payload");
            if (!this.f36200u && (!this.f36197r || !this.f36195p.isEmpty())) {
                this.f36194o.add(payload);
                u();
                this.f36202w++;
            }
        } finally {
        }
    }

    @Override // ku.g.a
    public synchronized void e(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        this.f36203x++;
        this.f36204y = false;
    }

    @Override // okhttp3.WebSocket
    public boolean f(int i10, String str) {
        return n(i10, str, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
    }

    @Override // ku.g.a
    public void g(int i10, String reason) {
        AbstractC0460d abstractC0460d;
        ku.g gVar;
        ku.h hVar;
        Intrinsics.checkNotNullParameter(reason, "reason");
        if (i10 != -1) {
            synchronized (this) {
                try {
                    if (this.f36198s == -1) {
                        this.f36198s = i10;
                        this.f36199t = reason;
                        abstractC0460d = null;
                        if (this.f36197r && this.f36195p.isEmpty()) {
                            AbstractC0460d abstractC0460d2 = this.f36193n;
                            this.f36193n = null;
                            gVar = this.f36189j;
                            this.f36189j = null;
                            hVar = this.f36190k;
                            this.f36190k = null;
                            this.f36191l.n();
                            abstractC0460d = abstractC0460d2;
                        } else {
                            gVar = null;
                            hVar = null;
                        }
                        Unit unit = Unit.f32464a;
                    } else {
                        throw new IllegalStateException("already closed");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            try {
                this.f36181b.onClosing(this, i10, reason);
                if (abstractC0460d != null) {
                    this.f36181b.onClosed(this, i10, reason);
                }
                if (hVar != null) {
                    return;
                }
                return;
            } finally {
                if (abstractC0460d != null) {
                    xt.e.m(abstractC0460d);
                }
                if (gVar != null) {
                    xt.e.m(gVar);
                }
                if (hVar != null) {
                    xt.e.m(hVar);
                }
            }
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public void l() {
        Call call = this.f36187h;
        Intrinsics.checkNotNull(call);
        call.cancel();
    }

    public final void m(Response response, bu.c cVar) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.L() == 101) {
            String D0 = Response.D0(response, "Connection", null, 2, null);
            if (StringsKt.A("Upgrade", D0, true)) {
                String D02 = Response.D0(response, "Upgrade", null, 2, null);
                if (StringsKt.A("websocket", D02, true)) {
                    String D03 = Response.D0(response, "Sec-WebSocket-Accept", null, 2, null);
                    ByteString.a aVar = ByteString.f44307o;
                    String d10 = aVar.g(this.f36186g + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").E().d();
                    if (Intrinsics.areEqual(d10, D03)) {
                        if (cVar != null) {
                            return;
                        }
                        throw new ProtocolException("Web Socket exchange missing: bad interceptor?");
                    }
                    throw new ProtocolException("Expected 'Sec-WebSocket-Accept' header value '" + d10 + "' but was '" + D03 + '\'');
                }
                throw new ProtocolException("Expected 'Upgrade' header value 'websocket' but was '" + D02 + '\'');
            }
            throw new ProtocolException("Expected 'Connection' header value 'Upgrade' but was '" + D0 + '\'');
        }
        throw new ProtocolException("Expected HTTP 101 response but was '" + response.L() + ' ' + response.I0() + '\'');
    }

    public final synchronized boolean n(int i10, String str, long j10) {
        ByteString byteString;
        try {
            ku.f.f36226a.c(i10);
            if (str != null) {
                byteString = ByteString.f44307o.g(str);
                if (byteString.G() > 123) {
                    throw new IllegalArgumentException(("reason.size() > 123: " + str).toString());
                }
            } else {
                byteString = null;
            }
            if (!this.f36200u && !this.f36197r) {
                this.f36197r = true;
                this.f36195p.add(new a(i10, byteString, j10));
                u();
                return true;
            }
            return false;
        } finally {
        }
    }

    public final void o(OkHttpClient client) {
        Intrinsics.checkNotNullParameter(client, "client");
        if (this.f36180a.f("Sec-WebSocket-Extensions") != null) {
            p(new ProtocolException("Request header not permitted: 'Sec-WebSocket-Extensions'"), null);
            return;
        }
        OkHttpClient c10 = client.D().j(okhttp3.e.f44264b).P(A).c();
        Request b10 = this.f36180a.k().e("Upgrade", "websocket").e("Connection", "Upgrade").e("Sec-WebSocket-Key", this.f36186g).e("Sec-WebSocket-Version", "13").e("Sec-WebSocket-Extensions", "permessage-deflate").b();
        bu.e eVar = new bu.e(c10, b10, true);
        this.f36187h = eVar;
        Intrinsics.checkNotNull(eVar);
        eVar.M0(new f(b10));
    }

    public final void p(Exception e10, Response response) {
        Intrinsics.checkNotNullParameter(e10, "e");
        synchronized (this) {
            if (this.f36200u) {
                return;
            }
            this.f36200u = true;
            AbstractC0460d abstractC0460d = this.f36193n;
            this.f36193n = null;
            ku.g gVar = this.f36189j;
            this.f36189j = null;
            ku.h hVar = this.f36190k;
            this.f36190k = null;
            this.f36191l.n();
            Unit unit = Unit.f32464a;
            try {
                this.f36181b.onFailure(this, e10, response);
            } finally {
                if (abstractC0460d != null) {
                    xt.e.m(abstractC0460d);
                }
                if (gVar != null) {
                    xt.e.m(gVar);
                }
                if (hVar != null) {
                    xt.e.m(hVar);
                }
            }
        }
    }

    public final l q() {
        return this.f36181b;
    }

    public final void r(String name, AbstractC0460d streams) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(streams, "streams");
        ku.e eVar = this.f36184e;
        Intrinsics.checkNotNull(eVar);
        synchronized (this) {
            try {
                this.f36192m = name;
                this.f36193n = streams;
                this.f36190k = new ku.h(streams.a(), streams.h(), this.f36182c, eVar.f36220a, eVar.a(streams.a()), this.f36185f);
                this.f36188i = new e();
                long j10 = this.f36183d;
                if (j10 != 0) {
                    try {
                        long nanos = TimeUnit.MILLISECONDS.toNanos(j10);
                        au.d dVar = this.f36191l;
                        dVar.i(new g(name + " ping", this, nanos), nanos);
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                if (!this.f36195p.isEmpty()) {
                    u();
                }
                Unit unit = Unit.f32464a;
                this.f36189j = new ku.g(streams.a(), streams.l(), this, eVar.f36220a, eVar.a(!streams.a()));
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    @Override // okhttp3.WebSocket
    public boolean send(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        return v(ByteString.f44307o.g(text), 1);
    }

    public final void t() {
        while (this.f36198s == -1) {
            ku.g gVar = this.f36189j;
            Intrinsics.checkNotNull(gVar);
            gVar.a();
        }
    }

    public final boolean w() {
        String str;
        ku.g gVar;
        ku.h hVar;
        int i10;
        AbstractC0460d abstractC0460d;
        synchronized (this) {
            try {
                if (this.f36200u) {
                    return false;
                }
                ku.h hVar2 = this.f36190k;
                Object poll = this.f36194o.poll();
                Object obj = null;
                if (poll == null) {
                    Object poll2 = this.f36195p.poll();
                    if (poll2 instanceof a) {
                        i10 = this.f36198s;
                        str = this.f36199t;
                        if (i10 != -1) {
                            abstractC0460d = this.f36193n;
                            this.f36193n = null;
                            gVar = this.f36189j;
                            this.f36189j = null;
                            hVar = this.f36190k;
                            this.f36190k = null;
                            this.f36191l.n();
                        } else {
                            long a10 = ((a) poll2).a();
                            this.f36191l.i(new h(this.f36192m + " cancel", true, this), TimeUnit.MILLISECONDS.toNanos(a10));
                            abstractC0460d = null;
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
                        abstractC0460d = null;
                    }
                    obj = poll2;
                } else {
                    str = null;
                    gVar = null;
                    hVar = null;
                    i10 = -1;
                    abstractC0460d = null;
                }
                Unit unit = Unit.f32464a;
                try {
                    if (poll != null) {
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.x((ByteString) poll);
                    } else if (obj instanceof c) {
                        c cVar = (c) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.l(cVar.b(), cVar.a());
                        synchronized (this) {
                            this.f36196q -= cVar.a().G();
                        }
                    } else if (obj instanceof a) {
                        a aVar = (a) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.a(aVar.b(), aVar.c());
                        if (abstractC0460d != null) {
                            l lVar = this.f36181b;
                            Intrinsics.checkNotNull(str);
                            lVar.onClosed(this, i10, str);
                        }
                    } else {
                        throw new AssertionError();
                    }
                    return true;
                } finally {
                    if (abstractC0460d != null) {
                        xt.e.m(abstractC0460d);
                    }
                    if (gVar != null) {
                        xt.e.m(gVar);
                    }
                    if (hVar != null) {
                        xt.e.m(hVar);
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
                if (this.f36200u) {
                    return;
                }
                ku.h hVar = this.f36190k;
                if (hVar == null) {
                    return;
                }
                if (this.f36204y) {
                    i10 = this.f36201v;
                } else {
                    i10 = -1;
                }
                this.f36201v++;
                this.f36204y = true;
                Unit unit = Unit.f32464a;
                if (i10 != -1) {
                    p(new SocketTimeoutException("sent ping but didn't receive pong within " + this.f36183d + "ms (after " + (i10 - 1) + " successful ping/pongs)"), null);
                    return;
                }
                try {
                    hVar.n(ByteString.f44308p);
                } catch (IOException e10) {
                    p(e10, null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
