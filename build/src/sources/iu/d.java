package iu;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.reactnativecommunity.webview.RNCWebViewManager;
import iu.g;
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
import ut.j;
import ut.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements WebSocket, g.a {

    /* renamed from: a  reason: collision with root package name */
    private final Request f31179a;

    /* renamed from: b  reason: collision with root package name */
    private final l f31180b;

    /* renamed from: c  reason: collision with root package name */
    private final Random f31181c;

    /* renamed from: d  reason: collision with root package name */
    private final long f31182d;

    /* renamed from: e  reason: collision with root package name */
    private iu.e f31183e;

    /* renamed from: f  reason: collision with root package name */
    private long f31184f;

    /* renamed from: g  reason: collision with root package name */
    private final String f31185g;

    /* renamed from: h  reason: collision with root package name */
    private Call f31186h;

    /* renamed from: i  reason: collision with root package name */
    private yt.a f31187i;

    /* renamed from: j  reason: collision with root package name */
    private iu.g f31188j;

    /* renamed from: k  reason: collision with root package name */
    private iu.h f31189k;

    /* renamed from: l  reason: collision with root package name */
    private yt.d f31190l;

    /* renamed from: m  reason: collision with root package name */
    private String f31191m;

    /* renamed from: n  reason: collision with root package name */
    private AbstractC0420d f31192n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayDeque f31193o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayDeque f31194p;

    /* renamed from: q  reason: collision with root package name */
    private long f31195q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f31196r;

    /* renamed from: s  reason: collision with root package name */
    private int f31197s;

    /* renamed from: t  reason: collision with root package name */
    private String f31198t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f31199u;

    /* renamed from: v  reason: collision with root package name */
    private int f31200v;

    /* renamed from: w  reason: collision with root package name */
    private int f31201w;

    /* renamed from: x  reason: collision with root package name */
    private int f31202x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f31203y;

    /* renamed from: z  reason: collision with root package name */
    public static final b f31178z = new b(null);
    private static final List A = CollectionsKt.e(j.HTTP_1_1);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f31204a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f31205b;

        /* renamed from: c  reason: collision with root package name */
        private final long f31206c;

        public a(int i10, ByteString byteString, long j10) {
            this.f31204a = i10;
            this.f31205b = byteString;
            this.f31206c = j10;
        }

        public final long a() {
            return this.f31206c;
        }

        public final int b() {
            return this.f31204a;
        }

        public final ByteString c() {
            return this.f31205b;
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
        private final int f31207a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f31208b;

        public c(int i10, ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f31207a = i10;
            this.f31208b = data;
        }

        public final ByteString a() {
            return this.f31208b;
        }

        public final int b() {
            return this.f31207a;
        }
    }

    /* renamed from: iu.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class AbstractC0420d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f31209d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f31210e;

        /* renamed from: i  reason: collision with root package name */
        private final BufferedSink f31211i;

        public AbstractC0420d(boolean z10, BufferedSource source, BufferedSink sink) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            this.f31209d = z10;
            this.f31210e = source;
            this.f31211i = sink;
        }

        public final boolean a() {
            return this.f31209d;
        }

        public final BufferedSink h() {
            return this.f31211i;
        }

        public final BufferedSource l() {
            return this.f31210e;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class e extends yt.a {
        public e() {
            super(d.this.f31191m + " writer", false, 2, null);
        }

        @Override // yt.a
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
    public static final class f implements ut.b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Request f31214e;

        f(Request request) {
            this.f31214e = request;
        }

        @Override // ut.b
        public void onFailure(Call call, IOException e10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(e10, "e");
            d.this.p(e10, null);
        }

        @Override // ut.b
        public void onResponse(Call call, Response response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            zt.c N = response.N();
            try {
                d.this.m(response, N);
                Intrinsics.checkNotNull(N);
                AbstractC0420d n10 = N.n();
                iu.e a10 = iu.e.f31218g.a(response.F0());
                d.this.f31183e = a10;
                if (!d.this.s(a10)) {
                    d dVar = d.this;
                    synchronized (dVar) {
                        dVar.f31194p.clear();
                        dVar.f(1010, "unexpected Sec-WebSocket-Extensions in response header");
                    }
                }
                try {
                    d.this.r(vt.e.f51536i + " WebSocket " + this.f31214e.n().q(), n10);
                    d.this.q().onOpen(d.this, response);
                    d.this.t();
                } catch (Exception e10) {
                    d.this.p(e10, null);
                }
            } catch (IOException e11) {
                d.this.p(e11, response);
                vt.e.m(response);
                if (N != null) {
                    N.v();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends yt.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f31215e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ long f31216f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, d dVar, long j10) {
            super(str, false, 2, null);
            this.f31215e = dVar;
            this.f31216f = j10;
        }

        @Override // yt.a
        public long f() {
            this.f31215e.x();
            return this.f31216f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h extends yt.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f31217e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, d dVar) {
            super(str, z10);
            this.f31217e = dVar;
        }

        @Override // yt.a
        public long f() {
            this.f31217e.l();
            return -1L;
        }
    }

    public d(yt.e taskRunner, Request originalRequest, l listener, Random random, long j10, iu.e eVar, long j11) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(originalRequest, "originalRequest");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f31179a = originalRequest;
        this.f31180b = listener;
        this.f31181c = random;
        this.f31182d = j10;
        this.f31183e = eVar;
        this.f31184f = j11;
        this.f31190l = taskRunner.i();
        this.f31193o = new ArrayDeque();
        this.f31194p = new ArrayDeque();
        this.f31197s = -1;
        if (Intrinsics.areEqual("GET", originalRequest.j())) {
            ByteString.a aVar = ByteString.f44507o;
            byte[] bArr = new byte[16];
            random.nextBytes(bArr);
            Unit unit = Unit.f33074a;
            this.f31185g = ByteString.a.j(aVar, bArr, 0, 0, 3, null).d();
            return;
        }
        throw new IllegalArgumentException(("Request must be GET: " + originalRequest.j()).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean s(iu.e eVar) {
        if (eVar.f31224f || eVar.f31220b != null) {
            return false;
        }
        if (eVar.f31222d != null && !new IntRange(8, 15).contains(eVar.f31222d.intValue())) {
            return false;
        }
        return true;
    }

    private final void u() {
        if (vt.e.f51535h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        yt.a aVar = this.f31187i;
        if (aVar != null) {
            yt.d.j(this.f31190l, aVar, 0L, 2, null);
        }
    }

    private final synchronized boolean v(ByteString byteString, int i10) {
        if (!this.f31199u && !this.f31196r) {
            if (this.f31195q + byteString.G() > 16777216) {
                f(RNCWebViewManager.COMMAND_CLEAR_CACHE, null);
                return false;
            }
            this.f31195q += byteString.G();
            this.f31194p.add(new c(i10, byteString));
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

    @Override // iu.g.a
    public void b(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        this.f31180b.onMessage(this, bytes);
    }

    @Override // iu.g.a
    public void c(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        this.f31180b.onMessage(this, text);
    }

    @Override // iu.g.a
    public synchronized void d(ByteString payload) {
        try {
            Intrinsics.checkNotNullParameter(payload, "payload");
            if (!this.f31199u && (!this.f31196r || !this.f31194p.isEmpty())) {
                this.f31193o.add(payload);
                u();
                this.f31201w++;
            }
        } finally {
        }
    }

    @Override // iu.g.a
    public synchronized void e(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        this.f31202x++;
        this.f31203y = false;
    }

    @Override // okhttp3.WebSocket
    public boolean f(int i10, String str) {
        return n(i10, str, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
    }

    @Override // iu.g.a
    public void g(int i10, String reason) {
        AbstractC0420d abstractC0420d;
        iu.g gVar;
        iu.h hVar;
        Intrinsics.checkNotNullParameter(reason, "reason");
        if (i10 != -1) {
            synchronized (this) {
                try {
                    if (this.f31197s == -1) {
                        this.f31197s = i10;
                        this.f31198t = reason;
                        abstractC0420d = null;
                        if (this.f31196r && this.f31194p.isEmpty()) {
                            AbstractC0420d abstractC0420d2 = this.f31192n;
                            this.f31192n = null;
                            gVar = this.f31188j;
                            this.f31188j = null;
                            hVar = this.f31189k;
                            this.f31189k = null;
                            this.f31190l.n();
                            abstractC0420d = abstractC0420d2;
                        } else {
                            gVar = null;
                            hVar = null;
                        }
                        Unit unit = Unit.f33074a;
                    } else {
                        throw new IllegalStateException("already closed");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            try {
                this.f31180b.onClosing(this, i10, reason);
                if (abstractC0420d != null) {
                    this.f31180b.onClosed(this, i10, reason);
                }
                if (hVar != null) {
                    return;
                }
                return;
            } finally {
                if (abstractC0420d != null) {
                    vt.e.m(abstractC0420d);
                }
                if (gVar != null) {
                    vt.e.m(gVar);
                }
                if (hVar != null) {
                    vt.e.m(hVar);
                }
            }
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public void l() {
        Call call = this.f31186h;
        Intrinsics.checkNotNull(call);
        call.cancel();
    }

    public final void m(Response response, zt.c cVar) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.L() == 101) {
            String E0 = Response.E0(response, "Connection", null, 2, null);
            if (StringsKt.A("Upgrade", E0, true)) {
                String E02 = Response.E0(response, "Upgrade", null, 2, null);
                if (StringsKt.A("websocket", E02, true)) {
                    String E03 = Response.E0(response, "Sec-WebSocket-Accept", null, 2, null);
                    ByteString.a aVar = ByteString.f44507o;
                    String d10 = aVar.g(this.f31185g + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").E().d();
                    if (Intrinsics.areEqual(d10, E03)) {
                        if (cVar != null) {
                            return;
                        }
                        throw new ProtocolException("Web Socket exchange missing: bad interceptor?");
                    }
                    throw new ProtocolException("Expected 'Sec-WebSocket-Accept' header value '" + d10 + "' but was '" + E03 + '\'');
                }
                throw new ProtocolException("Expected 'Upgrade' header value 'websocket' but was '" + E02 + '\'');
            }
            throw new ProtocolException("Expected 'Connection' header value 'Upgrade' but was '" + E0 + '\'');
        }
        throw new ProtocolException("Expected HTTP 101 response but was '" + response.L() + ' ' + response.J0() + '\'');
    }

    public final synchronized boolean n(int i10, String str, long j10) {
        ByteString byteString;
        try {
            iu.f.f31225a.c(i10);
            if (str != null) {
                byteString = ByteString.f44507o.g(str);
                if (byteString.G() > 123) {
                    throw new IllegalArgumentException(("reason.size() > 123: " + str).toString());
                }
            } else {
                byteString = null;
            }
            if (!this.f31199u && !this.f31196r) {
                this.f31196r = true;
                this.f31194p.add(new a(i10, byteString, j10));
                u();
                return true;
            }
            return false;
        } finally {
        }
    }

    public final void o(OkHttpClient client) {
        Intrinsics.checkNotNullParameter(client, "client");
        if (this.f31179a.f("Sec-WebSocket-Extensions") != null) {
            p(new ProtocolException("Request header not permitted: 'Sec-WebSocket-Extensions'"), null);
            return;
        }
        OkHttpClient c10 = client.D().j(okhttp3.e.f44464b).P(A).c();
        Request b10 = this.f31179a.k().e("Upgrade", "websocket").e("Connection", "Upgrade").e("Sec-WebSocket-Key", this.f31185g).e("Sec-WebSocket-Version", "13").e("Sec-WebSocket-Extensions", "permessage-deflate").b();
        zt.e eVar = new zt.e(c10, b10, true);
        this.f31186h = eVar;
        Intrinsics.checkNotNull(eVar);
        eVar.t0(new f(b10));
    }

    public final void p(Exception e10, Response response) {
        Intrinsics.checkNotNullParameter(e10, "e");
        synchronized (this) {
            if (this.f31199u) {
                return;
            }
            this.f31199u = true;
            AbstractC0420d abstractC0420d = this.f31192n;
            this.f31192n = null;
            iu.g gVar = this.f31188j;
            this.f31188j = null;
            iu.h hVar = this.f31189k;
            this.f31189k = null;
            this.f31190l.n();
            Unit unit = Unit.f33074a;
            try {
                this.f31180b.onFailure(this, e10, response);
            } finally {
                if (abstractC0420d != null) {
                    vt.e.m(abstractC0420d);
                }
                if (gVar != null) {
                    vt.e.m(gVar);
                }
                if (hVar != null) {
                    vt.e.m(hVar);
                }
            }
        }
    }

    public final l q() {
        return this.f31180b;
    }

    public final void r(String name, AbstractC0420d streams) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(streams, "streams");
        iu.e eVar = this.f31183e;
        Intrinsics.checkNotNull(eVar);
        synchronized (this) {
            try {
                this.f31191m = name;
                this.f31192n = streams;
                this.f31189k = new iu.h(streams.a(), streams.h(), this.f31181c, eVar.f31219a, eVar.a(streams.a()), this.f31184f);
                this.f31187i = new e();
                long j10 = this.f31182d;
                if (j10 != 0) {
                    try {
                        long nanos = TimeUnit.MILLISECONDS.toNanos(j10);
                        yt.d dVar = this.f31190l;
                        dVar.i(new g(name + " ping", this, nanos), nanos);
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                if (!this.f31194p.isEmpty()) {
                    u();
                }
                Unit unit = Unit.f33074a;
                this.f31188j = new iu.g(streams.a(), streams.l(), this, eVar.f31219a, eVar.a(!streams.a()));
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    @Override // okhttp3.WebSocket
    public boolean send(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        return v(ByteString.f44507o.g(text), 1);
    }

    public final void t() {
        while (this.f31197s == -1) {
            iu.g gVar = this.f31188j;
            Intrinsics.checkNotNull(gVar);
            gVar.a();
        }
    }

    public final boolean w() {
        String str;
        iu.g gVar;
        iu.h hVar;
        int i10;
        AbstractC0420d abstractC0420d;
        synchronized (this) {
            try {
                if (this.f31199u) {
                    return false;
                }
                iu.h hVar2 = this.f31189k;
                Object poll = this.f31193o.poll();
                Object obj = null;
                if (poll == null) {
                    Object poll2 = this.f31194p.poll();
                    if (poll2 instanceof a) {
                        i10 = this.f31197s;
                        str = this.f31198t;
                        if (i10 != -1) {
                            abstractC0420d = this.f31192n;
                            this.f31192n = null;
                            gVar = this.f31188j;
                            this.f31188j = null;
                            hVar = this.f31189k;
                            this.f31189k = null;
                            this.f31190l.n();
                        } else {
                            long a10 = ((a) poll2).a();
                            this.f31190l.i(new h(this.f31191m + " cancel", true, this), TimeUnit.MILLISECONDS.toNanos(a10));
                            abstractC0420d = null;
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
                        abstractC0420d = null;
                    }
                    obj = poll2;
                } else {
                    str = null;
                    gVar = null;
                    hVar = null;
                    i10 = -1;
                    abstractC0420d = null;
                }
                Unit unit = Unit.f33074a;
                try {
                    if (poll != null) {
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.x((ByteString) poll);
                    } else if (obj instanceof c) {
                        c cVar = (c) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.l(cVar.b(), cVar.a());
                        synchronized (this) {
                            this.f31195q -= cVar.a().G();
                        }
                    } else if (obj instanceof a) {
                        a aVar = (a) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.a(aVar.b(), aVar.c());
                        if (abstractC0420d != null) {
                            l lVar = this.f31180b;
                            Intrinsics.checkNotNull(str);
                            lVar.onClosed(this, i10, str);
                        }
                    } else {
                        throw new AssertionError();
                    }
                    return true;
                } finally {
                    if (abstractC0420d != null) {
                        vt.e.m(abstractC0420d);
                    }
                    if (gVar != null) {
                        vt.e.m(gVar);
                    }
                    if (hVar != null) {
                        vt.e.m(hVar);
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
                if (this.f31199u) {
                    return;
                }
                iu.h hVar = this.f31189k;
                if (hVar == null) {
                    return;
                }
                if (this.f31203y) {
                    i10 = this.f31200v;
                } else {
                    i10 = -1;
                }
                this.f31200v++;
                this.f31203y = true;
                Unit unit = Unit.f33074a;
                if (i10 != -1) {
                    p(new SocketTimeoutException("sent ping but didn't receive pong within " + this.f31182d + "ms (after " + (i10 - 1) + " successful ping/pongs)"), null);
                    return;
                }
                try {
                    hVar.n(ByteString.f44508p);
                } catch (IOException e10) {
                    p(e10, null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
