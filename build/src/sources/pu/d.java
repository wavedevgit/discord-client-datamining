package pu;

import bu.j;
import bu.l;
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
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.WebSocket;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import pu.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements WebSocket, g.a {

    /* renamed from: a  reason: collision with root package name */
    private final Request f45721a;

    /* renamed from: b  reason: collision with root package name */
    private final l f45722b;

    /* renamed from: c  reason: collision with root package name */
    private final Random f45723c;

    /* renamed from: d  reason: collision with root package name */
    private final long f45724d;

    /* renamed from: e  reason: collision with root package name */
    private pu.e f45725e;

    /* renamed from: f  reason: collision with root package name */
    private long f45726f;

    /* renamed from: g  reason: collision with root package name */
    private final String f45727g;

    /* renamed from: h  reason: collision with root package name */
    private Call f45728h;

    /* renamed from: i  reason: collision with root package name */
    private fu.a f45729i;

    /* renamed from: j  reason: collision with root package name */
    private pu.g f45730j;

    /* renamed from: k  reason: collision with root package name */
    private pu.h f45731k;

    /* renamed from: l  reason: collision with root package name */
    private fu.d f45732l;

    /* renamed from: m  reason: collision with root package name */
    private String f45733m;

    /* renamed from: n  reason: collision with root package name */
    private AbstractC0593d f45734n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayDeque f45735o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayDeque f45736p;

    /* renamed from: q  reason: collision with root package name */
    private long f45737q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f45738r;

    /* renamed from: s  reason: collision with root package name */
    private int f45739s;

    /* renamed from: t  reason: collision with root package name */
    private String f45740t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f45741u;

    /* renamed from: v  reason: collision with root package name */
    private int f45742v;

    /* renamed from: w  reason: collision with root package name */
    private int f45743w;

    /* renamed from: x  reason: collision with root package name */
    private int f45744x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f45745y;

    /* renamed from: z  reason: collision with root package name */
    public static final b f45720z = new b(null);
    private static final List A = CollectionsKt.e(j.HTTP_1_1);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f45746a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f45747b;

        /* renamed from: c  reason: collision with root package name */
        private final long f45748c;

        public a(int i10, ByteString byteString, long j10) {
            this.f45746a = i10;
            this.f45747b = byteString;
            this.f45748c = j10;
        }

        public final long a() {
            return this.f45748c;
        }

        public final int b() {
            return this.f45746a;
        }

        public final ByteString c() {
            return this.f45747b;
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
        private final int f45749a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f45750b;

        public c(int i10, ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f45749a = i10;
            this.f45750b = data;
        }

        public final ByteString a() {
            return this.f45750b;
        }

        public final int b() {
            return this.f45749a;
        }
    }

    /* renamed from: pu.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class AbstractC0593d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f45751d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f45752e;

        /* renamed from: i  reason: collision with root package name */
        private final BufferedSink f45753i;

        public AbstractC0593d(boolean z10, BufferedSource source, BufferedSink sink) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            this.f45751d = z10;
            this.f45752e = source;
            this.f45753i = sink;
        }

        public final boolean a() {
            return this.f45751d;
        }

        public final BufferedSink g() {
            return this.f45753i;
        }

        public final BufferedSource k() {
            return this.f45752e;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class e extends fu.a {
        public e() {
            super(d.this.f45733m + " writer", false, 2, null);
        }

        @Override // fu.a
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
    public static final class f implements bu.b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Request f45756e;

        f(Request request) {
            this.f45756e = request;
        }

        @Override // bu.b
        public void onFailure(Call call, IOException e10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(e10, "e");
            d.this.p(e10, null);
        }

        @Override // bu.b
        public void onResponse(Call call, Response response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            gu.c C = response.C();
            try {
                d.this.m(response, C);
                Intrinsics.checkNotNull(C);
                AbstractC0593d n10 = C.n();
                pu.e a10 = pu.e.f45760g.a(response.E0());
                d.this.f45725e = a10;
                if (!d.this.s(a10)) {
                    d dVar = d.this;
                    synchronized (dVar) {
                        dVar.f45736p.clear();
                        dVar.f(1010, "unexpected Sec-WebSocket-Extensions in response header");
                    }
                }
                try {
                    d.this.r(cu.e.f20043i + " WebSocket " + this.f45756e.n().q(), n10);
                    d.this.q().onOpen(d.this, response);
                    d.this.t();
                } catch (Exception e10) {
                    d.this.p(e10, null);
                }
            } catch (IOException e11) {
                d.this.p(e11, response);
                cu.e.m(response);
                if (C != null) {
                    C.v();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends fu.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f45757e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ long f45758f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, d dVar, long j10) {
            super(str, false, 2, null);
            this.f45757e = dVar;
            this.f45758f = j10;
        }

        @Override // fu.a
        public long f() {
            this.f45757e.x();
            return this.f45758f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h extends fu.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f45759e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, d dVar) {
            super(str, z10);
            this.f45759e = dVar;
        }

        @Override // fu.a
        public long f() {
            this.f45759e.l();
            return -1L;
        }
    }

    public d(fu.e taskRunner, Request originalRequest, l listener, Random random, long j10, pu.e eVar, long j11) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(originalRequest, "originalRequest");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f45721a = originalRequest;
        this.f45722b = listener;
        this.f45723c = random;
        this.f45724d = j10;
        this.f45725e = eVar;
        this.f45726f = j11;
        this.f45732l = taskRunner.i();
        this.f45735o = new ArrayDeque();
        this.f45736p = new ArrayDeque();
        this.f45739s = -1;
        if (Intrinsics.areEqual("GET", originalRequest.j())) {
            ByteString.a aVar = ByteString.f43214o;
            byte[] bArr = new byte[16];
            random.nextBytes(bArr);
            Unit unit = Unit.f32056a;
            this.f45727g = ByteString.a.j(aVar, bArr, 0, 0, 3, null).d();
            return;
        }
        throw new IllegalArgumentException(("Request must be GET: " + originalRequest.j()).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean s(pu.e eVar) {
        if (eVar.f45766f || eVar.f45762b != null) {
            return false;
        }
        if (eVar.f45764d != null && !new IntRange(8, 15).contains(eVar.f45764d.intValue())) {
            return false;
        }
        return true;
    }

    private final void u() {
        if (cu.e.f20042h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        fu.a aVar = this.f45729i;
        if (aVar != null) {
            fu.d.j(this.f45732l, aVar, 0L, 2, null);
        }
    }

    private final synchronized boolean v(ByteString byteString, int i10) {
        if (!this.f45741u && !this.f45738r) {
            if (this.f45737q + byteString.G() > 16777216) {
                f(RNCWebViewManager.COMMAND_CLEAR_CACHE, null);
                return false;
            }
            this.f45737q += byteString.G();
            this.f45736p.add(new c(i10, byteString));
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

    @Override // pu.g.a
    public void b(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        this.f45722b.onMessage(this, bytes);
    }

    @Override // pu.g.a
    public void c(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        this.f45722b.onMessage(this, text);
    }

    @Override // pu.g.a
    public synchronized void d(ByteString payload) {
        try {
            Intrinsics.checkNotNullParameter(payload, "payload");
            if (!this.f45741u && (!this.f45738r || !this.f45736p.isEmpty())) {
                this.f45735o.add(payload);
                u();
                this.f45743w++;
            }
        } finally {
        }
    }

    @Override // pu.g.a
    public synchronized void e(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        this.f45744x++;
        this.f45745y = false;
    }

    @Override // okhttp3.WebSocket
    public boolean f(int i10, String str) {
        return n(i10, str, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
    }

    @Override // pu.g.a
    public void g(int i10, String reason) {
        AbstractC0593d abstractC0593d;
        pu.g gVar;
        pu.h hVar;
        Intrinsics.checkNotNullParameter(reason, "reason");
        if (i10 != -1) {
            synchronized (this) {
                try {
                    if (this.f45739s == -1) {
                        this.f45739s = i10;
                        this.f45740t = reason;
                        abstractC0593d = null;
                        if (this.f45738r && this.f45736p.isEmpty()) {
                            AbstractC0593d abstractC0593d2 = this.f45734n;
                            this.f45734n = null;
                            gVar = this.f45730j;
                            this.f45730j = null;
                            hVar = this.f45731k;
                            this.f45731k = null;
                            this.f45732l.n();
                            abstractC0593d = abstractC0593d2;
                        } else {
                            gVar = null;
                            hVar = null;
                        }
                        Unit unit = Unit.f32056a;
                    } else {
                        throw new IllegalStateException("already closed");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            try {
                this.f45722b.onClosing(this, i10, reason);
                if (abstractC0593d != null) {
                    this.f45722b.onClosed(this, i10, reason);
                }
                if (hVar != null) {
                    return;
                }
                return;
            } finally {
                if (abstractC0593d != null) {
                    cu.e.m(abstractC0593d);
                }
                if (gVar != null) {
                    cu.e.m(gVar);
                }
                if (hVar != null) {
                    cu.e.m(hVar);
                }
            }
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public void l() {
        Call call = this.f45728h;
        Intrinsics.checkNotNull(call);
        call.cancel();
    }

    public final void m(Response response, gu.c cVar) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.z() == 101) {
            String Y = Response.Y(response, "Connection", null, 2, null);
            if (StringsKt.A("Upgrade", Y, true)) {
                String Y2 = Response.Y(response, "Upgrade", null, 2, null);
                if (StringsKt.A("websocket", Y2, true)) {
                    String Y3 = Response.Y(response, "Sec-WebSocket-Accept", null, 2, null);
                    ByteString.a aVar = ByteString.f43214o;
                    String d10 = aVar.g(this.f45727g + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").E().d();
                    if (Intrinsics.areEqual(d10, Y3)) {
                        if (cVar != null) {
                            return;
                        }
                        throw new ProtocolException("Web Socket exchange missing: bad interceptor?");
                    }
                    throw new ProtocolException("Expected 'Sec-WebSocket-Accept' header value '" + d10 + "' but was '" + Y3 + '\'');
                }
                throw new ProtocolException("Expected 'Upgrade' header value 'websocket' but was '" + Y2 + '\'');
            }
            throw new ProtocolException("Expected 'Connection' header value 'Upgrade' but was '" + Y + '\'');
        }
        throw new ProtocolException("Expected HTTP 101 response but was '" + response.z() + ' ' + response.I0() + '\'');
    }

    public final synchronized boolean n(int i10, String str, long j10) {
        ByteString byteString;
        try {
            pu.f.f45767a.c(i10);
            if (str != null) {
                byteString = ByteString.f43214o.g(str);
                if (byteString.G() > 123) {
                    throw new IllegalArgumentException(("reason.size() > 123: " + str).toString());
                }
            } else {
                byteString = null;
            }
            if (!this.f45741u && !this.f45738r) {
                this.f45738r = true;
                this.f45736p.add(new a(i10, byteString, j10));
                u();
                return true;
            }
            return false;
        } finally {
        }
    }

    public final void o(OkHttpClient client) {
        Intrinsics.checkNotNullParameter(client, "client");
        if (this.f45721a.f("Sec-WebSocket-Extensions") != null) {
            p(new ProtocolException("Request header not permitted: 'Sec-WebSocket-Extensions'"), null);
            return;
        }
        OkHttpClient c10 = client.E().j(okhttp3.e.f43171b).P(A).c();
        Request b10 = this.f45721a.k().e("Upgrade", "websocket").e("Connection", "Upgrade").e("Sec-WebSocket-Key", this.f45727g).e("Sec-WebSocket-Version", "13").e("Sec-WebSocket-Extensions", "permessage-deflate").b();
        gu.e eVar = new gu.e(c10, b10, true);
        this.f45728h = eVar;
        Intrinsics.checkNotNull(eVar);
        eVar.J0(new f(b10));
    }

    public final void p(Exception e10, Response response) {
        Intrinsics.checkNotNullParameter(e10, "e");
        synchronized (this) {
            if (this.f45741u) {
                return;
            }
            this.f45741u = true;
            AbstractC0593d abstractC0593d = this.f45734n;
            this.f45734n = null;
            pu.g gVar = this.f45730j;
            this.f45730j = null;
            pu.h hVar = this.f45731k;
            this.f45731k = null;
            this.f45732l.n();
            Unit unit = Unit.f32056a;
            try {
                this.f45722b.onFailure(this, e10, response);
            } finally {
                if (abstractC0593d != null) {
                    cu.e.m(abstractC0593d);
                }
                if (gVar != null) {
                    cu.e.m(gVar);
                }
                if (hVar != null) {
                    cu.e.m(hVar);
                }
            }
        }
    }

    public final l q() {
        return this.f45722b;
    }

    public final void r(String name, AbstractC0593d streams) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(streams, "streams");
        pu.e eVar = this.f45725e;
        Intrinsics.checkNotNull(eVar);
        synchronized (this) {
            try {
                this.f45733m = name;
                this.f45734n = streams;
                this.f45731k = new pu.h(streams.a(), streams.g(), this.f45723c, eVar.f45761a, eVar.a(streams.a()), this.f45726f);
                this.f45729i = new e();
                long j10 = this.f45724d;
                if (j10 != 0) {
                    try {
                        long nanos = TimeUnit.MILLISECONDS.toNanos(j10);
                        fu.d dVar = this.f45732l;
                        dVar.i(new g(name + " ping", this, nanos), nanos);
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                if (!this.f45736p.isEmpty()) {
                    u();
                }
                Unit unit = Unit.f32056a;
                this.f45730j = new pu.g(streams.a(), streams.k(), this, eVar.f45761a, eVar.a(!streams.a()));
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    @Override // okhttp3.WebSocket
    public boolean send(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        return v(ByteString.f43214o.g(text), 1);
    }

    public final void t() {
        while (this.f45739s == -1) {
            pu.g gVar = this.f45730j;
            Intrinsics.checkNotNull(gVar);
            gVar.a();
        }
    }

    public final boolean w() {
        String str;
        pu.g gVar;
        pu.h hVar;
        int i10;
        AbstractC0593d abstractC0593d;
        synchronized (this) {
            try {
                if (this.f45741u) {
                    return false;
                }
                pu.h hVar2 = this.f45731k;
                Object poll = this.f45735o.poll();
                Object obj = null;
                if (poll == null) {
                    Object poll2 = this.f45736p.poll();
                    if (poll2 instanceof a) {
                        i10 = this.f45739s;
                        str = this.f45740t;
                        if (i10 != -1) {
                            abstractC0593d = this.f45734n;
                            this.f45734n = null;
                            gVar = this.f45730j;
                            this.f45730j = null;
                            hVar = this.f45731k;
                            this.f45731k = null;
                            this.f45732l.n();
                        } else {
                            long a10 = ((a) poll2).a();
                            this.f45732l.i(new h(this.f45733m + " cancel", true, this), TimeUnit.MILLISECONDS.toNanos(a10));
                            abstractC0593d = null;
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
                        abstractC0593d = null;
                    }
                    obj = poll2;
                } else {
                    str = null;
                    gVar = null;
                    hVar = null;
                    i10 = -1;
                    abstractC0593d = null;
                }
                Unit unit = Unit.f32056a;
                try {
                    if (poll != null) {
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.n((ByteString) poll);
                    } else if (obj instanceof c) {
                        c cVar = (c) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.k(cVar.b(), cVar.a());
                        synchronized (this) {
                            this.f45737q -= cVar.a().G();
                        }
                    } else if (obj instanceof a) {
                        a aVar = (a) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.a(aVar.b(), aVar.c());
                        if (abstractC0593d != null) {
                            l lVar = this.f45722b;
                            Intrinsics.checkNotNull(str);
                            lVar.onClosed(this, i10, str);
                        }
                    } else {
                        throw new AssertionError();
                    }
                    return true;
                } finally {
                    if (abstractC0593d != null) {
                        cu.e.m(abstractC0593d);
                    }
                    if (gVar != null) {
                        cu.e.m(gVar);
                    }
                    if (hVar != null) {
                        cu.e.m(hVar);
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
                if (this.f45741u) {
                    return;
                }
                pu.h hVar = this.f45731k;
                if (hVar == null) {
                    return;
                }
                if (this.f45745y) {
                    i10 = this.f45742v;
                } else {
                    i10 = -1;
                }
                this.f45742v++;
                this.f45745y = true;
                Unit unit = Unit.f32056a;
                if (i10 != -1) {
                    p(new SocketTimeoutException("sent ping but didn't receive pong within " + this.f45724d + "ms (after " + (i10 - 1) + " successful ping/pongs)"), null);
                    return;
                }
                try {
                    hVar.m(ByteString.f43215p);
                } catch (IOException e10) {
                    p(e10, null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
