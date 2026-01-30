package hu;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.reactnativecommunity.webview.RNCWebViewManager;
import hu.g;
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
import tt.j;
import tt.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements WebSocket, g.a {

    /* renamed from: a  reason: collision with root package name */
    private final Request f28250a;

    /* renamed from: b  reason: collision with root package name */
    private final l f28251b;

    /* renamed from: c  reason: collision with root package name */
    private final Random f28252c;

    /* renamed from: d  reason: collision with root package name */
    private final long f28253d;

    /* renamed from: e  reason: collision with root package name */
    private hu.e f28254e;

    /* renamed from: f  reason: collision with root package name */
    private long f28255f;

    /* renamed from: g  reason: collision with root package name */
    private final String f28256g;

    /* renamed from: h  reason: collision with root package name */
    private Call f28257h;

    /* renamed from: i  reason: collision with root package name */
    private xt.a f28258i;

    /* renamed from: j  reason: collision with root package name */
    private hu.g f28259j;

    /* renamed from: k  reason: collision with root package name */
    private hu.h f28260k;

    /* renamed from: l  reason: collision with root package name */
    private xt.d f28261l;

    /* renamed from: m  reason: collision with root package name */
    private String f28262m;

    /* renamed from: n  reason: collision with root package name */
    private AbstractC0367d f28263n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayDeque f28264o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayDeque f28265p;

    /* renamed from: q  reason: collision with root package name */
    private long f28266q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f28267r;

    /* renamed from: s  reason: collision with root package name */
    private int f28268s;

    /* renamed from: t  reason: collision with root package name */
    private String f28269t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f28270u;

    /* renamed from: v  reason: collision with root package name */
    private int f28271v;

    /* renamed from: w  reason: collision with root package name */
    private int f28272w;

    /* renamed from: x  reason: collision with root package name */
    private int f28273x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f28274y;

    /* renamed from: z  reason: collision with root package name */
    public static final b f28249z = new b(null);
    private static final List A = CollectionsKt.e(j.HTTP_1_1);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f28275a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f28276b;

        /* renamed from: c  reason: collision with root package name */
        private final long f28277c;

        public a(int i10, ByteString byteString, long j10) {
            this.f28275a = i10;
            this.f28276b = byteString;
            this.f28277c = j10;
        }

        public final long a() {
            return this.f28277c;
        }

        public final int b() {
            return this.f28275a;
        }

        public final ByteString c() {
            return this.f28276b;
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
        private final int f28278a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f28279b;

        public c(int i10, ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f28278a = i10;
            this.f28279b = data;
        }

        public final ByteString a() {
            return this.f28279b;
        }

        public final int b() {
            return this.f28278a;
        }
    }

    /* renamed from: hu.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class AbstractC0367d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f28280d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f28281e;

        /* renamed from: i  reason: collision with root package name */
        private final BufferedSink f28282i;

        public AbstractC0367d(boolean z10, BufferedSource source, BufferedSink sink) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            this.f28280d = z10;
            this.f28281e = source;
            this.f28282i = sink;
        }

        public final boolean a() {
            return this.f28280d;
        }

        public final BufferedSink h() {
            return this.f28282i;
        }

        public final BufferedSource l() {
            return this.f28281e;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class e extends xt.a {
        public e() {
            super(d.this.f28262m + " writer", false, 2, null);
        }

        @Override // xt.a
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
    public static final class f implements tt.b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Request f28285e;

        f(Request request) {
            this.f28285e = request;
        }

        @Override // tt.b
        public void onFailure(Call call, IOException e10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(e10, "e");
            d.this.p(e10, null);
        }

        @Override // tt.b
        public void onResponse(Call call, Response response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            yt.c N = response.N();
            try {
                d.this.m(response, N);
                Intrinsics.checkNotNull(N);
                AbstractC0367d n10 = N.n();
                hu.e a10 = hu.e.f28289g.a(response.E0());
                d.this.f28254e = a10;
                if (!d.this.s(a10)) {
                    d dVar = d.this;
                    synchronized (dVar) {
                        dVar.f28265p.clear();
                        dVar.f(1010, "unexpected Sec-WebSocket-Extensions in response header");
                    }
                }
                try {
                    d.this.r(ut.e.f50580i + " WebSocket " + this.f28285e.n().q(), n10);
                    d.this.q().onOpen(d.this, response);
                    d.this.t();
                } catch (Exception e10) {
                    d.this.p(e10, null);
                }
            } catch (IOException e11) {
                d.this.p(e11, response);
                ut.e.m(response);
                if (N != null) {
                    N.v();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends xt.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f28286e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ long f28287f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, d dVar, long j10) {
            super(str, false, 2, null);
            this.f28286e = dVar;
            this.f28287f = j10;
        }

        @Override // xt.a
        public long f() {
            this.f28286e.x();
            return this.f28287f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h extends xt.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f28288e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, d dVar) {
            super(str, z10);
            this.f28288e = dVar;
        }

        @Override // xt.a
        public long f() {
            this.f28288e.l();
            return -1L;
        }
    }

    public d(xt.e taskRunner, Request originalRequest, l listener, Random random, long j10, hu.e eVar, long j11) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(originalRequest, "originalRequest");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f28250a = originalRequest;
        this.f28251b = listener;
        this.f28252c = random;
        this.f28253d = j10;
        this.f28254e = eVar;
        this.f28255f = j11;
        this.f28261l = taskRunner.i();
        this.f28264o = new ArrayDeque();
        this.f28265p = new ArrayDeque();
        this.f28268s = -1;
        if (Intrinsics.areEqual("GET", originalRequest.j())) {
            ByteString.a aVar = ByteString.f44379o;
            byte[] bArr = new byte[16];
            random.nextBytes(bArr);
            Unit unit = Unit.f33298a;
            this.f28256g = ByteString.a.j(aVar, bArr, 0, 0, 3, null).d();
            return;
        }
        throw new IllegalArgumentException(("Request must be GET: " + originalRequest.j()).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean s(hu.e eVar) {
        if (eVar.f28295f || eVar.f28291b != null) {
            return false;
        }
        if (eVar.f28293d != null && !new IntRange(8, 15).contains(eVar.f28293d.intValue())) {
            return false;
        }
        return true;
    }

    private final void u() {
        if (ut.e.f50579h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        xt.a aVar = this.f28258i;
        if (aVar != null) {
            xt.d.j(this.f28261l, aVar, 0L, 2, null);
        }
    }

    private final synchronized boolean v(ByteString byteString, int i10) {
        if (!this.f28270u && !this.f28267r) {
            if (this.f28266q + byteString.G() > 16777216) {
                f(RNCWebViewManager.COMMAND_CLEAR_CACHE, null);
                return false;
            }
            this.f28266q += byteString.G();
            this.f28265p.add(new c(i10, byteString));
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

    @Override // hu.g.a
    public void b(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        this.f28251b.onMessage(this, bytes);
    }

    @Override // hu.g.a
    public void c(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        this.f28251b.onMessage(this, text);
    }

    @Override // hu.g.a
    public synchronized void d(ByteString payload) {
        try {
            Intrinsics.checkNotNullParameter(payload, "payload");
            if (!this.f28270u && (!this.f28267r || !this.f28265p.isEmpty())) {
                this.f28264o.add(payload);
                u();
                this.f28272w++;
            }
        } finally {
        }
    }

    @Override // hu.g.a
    public synchronized void e(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        this.f28273x++;
        this.f28274y = false;
    }

    @Override // okhttp3.WebSocket
    public boolean f(int i10, String str) {
        return n(i10, str, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
    }

    @Override // hu.g.a
    public void g(int i10, String reason) {
        AbstractC0367d abstractC0367d;
        hu.g gVar;
        hu.h hVar;
        Intrinsics.checkNotNullParameter(reason, "reason");
        if (i10 != -1) {
            synchronized (this) {
                try {
                    if (this.f28268s == -1) {
                        this.f28268s = i10;
                        this.f28269t = reason;
                        abstractC0367d = null;
                        if (this.f28267r && this.f28265p.isEmpty()) {
                            AbstractC0367d abstractC0367d2 = this.f28263n;
                            this.f28263n = null;
                            gVar = this.f28259j;
                            this.f28259j = null;
                            hVar = this.f28260k;
                            this.f28260k = null;
                            this.f28261l.n();
                            abstractC0367d = abstractC0367d2;
                        } else {
                            gVar = null;
                            hVar = null;
                        }
                        Unit unit = Unit.f33298a;
                    } else {
                        throw new IllegalStateException("already closed");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            try {
                this.f28251b.onClosing(this, i10, reason);
                if (abstractC0367d != null) {
                    this.f28251b.onClosed(this, i10, reason);
                }
                if (hVar != null) {
                    return;
                }
                return;
            } finally {
                if (abstractC0367d != null) {
                    ut.e.m(abstractC0367d);
                }
                if (gVar != null) {
                    ut.e.m(gVar);
                }
                if (hVar != null) {
                    ut.e.m(hVar);
                }
            }
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public void l() {
        Call call = this.f28257h;
        Intrinsics.checkNotNull(call);
        call.cancel();
    }

    public final void m(Response response, yt.c cVar) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.L() == 101) {
            String D0 = Response.D0(response, "Connection", null, 2, null);
            if (StringsKt.A("Upgrade", D0, true)) {
                String D02 = Response.D0(response, "Upgrade", null, 2, null);
                if (StringsKt.A("websocket", D02, true)) {
                    String D03 = Response.D0(response, "Sec-WebSocket-Accept", null, 2, null);
                    ByteString.a aVar = ByteString.f44379o;
                    String d10 = aVar.g(this.f28256g + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").E().d();
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
            hu.f.f28296a.c(i10);
            if (str != null) {
                byteString = ByteString.f44379o.g(str);
                if (byteString.G() > 123) {
                    throw new IllegalArgumentException(("reason.size() > 123: " + str).toString());
                }
            } else {
                byteString = null;
            }
            if (!this.f28270u && !this.f28267r) {
                this.f28267r = true;
                this.f28265p.add(new a(i10, byteString, j10));
                u();
                return true;
            }
            return false;
        } finally {
        }
    }

    public final void o(OkHttpClient client) {
        Intrinsics.checkNotNullParameter(client, "client");
        if (this.f28250a.f("Sec-WebSocket-Extensions") != null) {
            p(new ProtocolException("Request header not permitted: 'Sec-WebSocket-Extensions'"), null);
            return;
        }
        OkHttpClient c10 = client.D().j(okhttp3.e.f44336b).P(A).c();
        Request b10 = this.f28250a.k().e("Upgrade", "websocket").e("Connection", "Upgrade").e("Sec-WebSocket-Key", this.f28256g).e("Sec-WebSocket-Version", "13").e("Sec-WebSocket-Extensions", "permessage-deflate").b();
        yt.e eVar = new yt.e(c10, b10, true);
        this.f28257h = eVar;
        Intrinsics.checkNotNull(eVar);
        eVar.C0(new f(b10));
    }

    public final void p(Exception e10, Response response) {
        Intrinsics.checkNotNullParameter(e10, "e");
        synchronized (this) {
            if (this.f28270u) {
                return;
            }
            this.f28270u = true;
            AbstractC0367d abstractC0367d = this.f28263n;
            this.f28263n = null;
            hu.g gVar = this.f28259j;
            this.f28259j = null;
            hu.h hVar = this.f28260k;
            this.f28260k = null;
            this.f28261l.n();
            Unit unit = Unit.f33298a;
            try {
                this.f28251b.onFailure(this, e10, response);
            } finally {
                if (abstractC0367d != null) {
                    ut.e.m(abstractC0367d);
                }
                if (gVar != null) {
                    ut.e.m(gVar);
                }
                if (hVar != null) {
                    ut.e.m(hVar);
                }
            }
        }
    }

    public final l q() {
        return this.f28251b;
    }

    public final void r(String name, AbstractC0367d streams) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(streams, "streams");
        hu.e eVar = this.f28254e;
        Intrinsics.checkNotNull(eVar);
        synchronized (this) {
            try {
                this.f28262m = name;
                this.f28263n = streams;
                this.f28260k = new hu.h(streams.a(), streams.h(), this.f28252c, eVar.f28290a, eVar.a(streams.a()), this.f28255f);
                this.f28258i = new e();
                long j10 = this.f28253d;
                if (j10 != 0) {
                    try {
                        long nanos = TimeUnit.MILLISECONDS.toNanos(j10);
                        xt.d dVar = this.f28261l;
                        dVar.i(new g(name + " ping", this, nanos), nanos);
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                if (!this.f28265p.isEmpty()) {
                    u();
                }
                Unit unit = Unit.f33298a;
                this.f28259j = new hu.g(streams.a(), streams.l(), this, eVar.f28290a, eVar.a(!streams.a()));
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    @Override // okhttp3.WebSocket
    public boolean send(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        return v(ByteString.f44379o.g(text), 1);
    }

    public final void t() {
        while (this.f28268s == -1) {
            hu.g gVar = this.f28259j;
            Intrinsics.checkNotNull(gVar);
            gVar.a();
        }
    }

    public final boolean w() {
        String str;
        hu.g gVar;
        hu.h hVar;
        int i10;
        AbstractC0367d abstractC0367d;
        synchronized (this) {
            try {
                if (this.f28270u) {
                    return false;
                }
                hu.h hVar2 = this.f28260k;
                Object poll = this.f28264o.poll();
                Object obj = null;
                if (poll == null) {
                    Object poll2 = this.f28265p.poll();
                    if (poll2 instanceof a) {
                        i10 = this.f28268s;
                        str = this.f28269t;
                        if (i10 != -1) {
                            abstractC0367d = this.f28263n;
                            this.f28263n = null;
                            gVar = this.f28259j;
                            this.f28259j = null;
                            hVar = this.f28260k;
                            this.f28260k = null;
                            this.f28261l.n();
                        } else {
                            long a10 = ((a) poll2).a();
                            this.f28261l.i(new h(this.f28262m + " cancel", true, this), TimeUnit.MILLISECONDS.toNanos(a10));
                            abstractC0367d = null;
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
                        abstractC0367d = null;
                    }
                    obj = poll2;
                } else {
                    str = null;
                    gVar = null;
                    hVar = null;
                    i10 = -1;
                    abstractC0367d = null;
                }
                Unit unit = Unit.f33298a;
                try {
                    if (poll != null) {
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.x((ByteString) poll);
                    } else if (obj instanceof c) {
                        c cVar = (c) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.l(cVar.b(), cVar.a());
                        synchronized (this) {
                            this.f28266q -= cVar.a().G();
                        }
                    } else if (obj instanceof a) {
                        a aVar = (a) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.a(aVar.b(), aVar.c());
                        if (abstractC0367d != null) {
                            l lVar = this.f28251b;
                            Intrinsics.checkNotNull(str);
                            lVar.onClosed(this, i10, str);
                        }
                    } else {
                        throw new AssertionError();
                    }
                    return true;
                } finally {
                    if (abstractC0367d != null) {
                        ut.e.m(abstractC0367d);
                    }
                    if (gVar != null) {
                        ut.e.m(gVar);
                    }
                    if (hVar != null) {
                        ut.e.m(hVar);
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
                if (this.f28270u) {
                    return;
                }
                hu.h hVar = this.f28260k;
                if (hVar == null) {
                    return;
                }
                if (this.f28274y) {
                    i10 = this.f28271v;
                } else {
                    i10 = -1;
                }
                this.f28271v++;
                this.f28274y = true;
                Unit unit = Unit.f33298a;
                if (i10 != -1) {
                    p(new SocketTimeoutException("sent ping but didn't receive pong within " + this.f28253d + "ms (after " + (i10 - 1) + " successful ping/pongs)"), null);
                    return;
                }
                try {
                    hVar.n(ByteString.f44380p);
                } catch (IOException e10) {
                    p(e10, null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
