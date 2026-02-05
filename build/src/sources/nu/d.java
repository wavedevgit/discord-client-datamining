package nu;

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
import nu.g;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.WebSocket;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import zt.j;
import zt.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements WebSocket, g.a {

    /* renamed from: a  reason: collision with root package name */
    private final Request f41985a;

    /* renamed from: b  reason: collision with root package name */
    private final l f41986b;

    /* renamed from: c  reason: collision with root package name */
    private final Random f41987c;

    /* renamed from: d  reason: collision with root package name */
    private final long f41988d;

    /* renamed from: e  reason: collision with root package name */
    private nu.e f41989e;

    /* renamed from: f  reason: collision with root package name */
    private long f41990f;

    /* renamed from: g  reason: collision with root package name */
    private final String f41991g;

    /* renamed from: h  reason: collision with root package name */
    private Call f41992h;

    /* renamed from: i  reason: collision with root package name */
    private du.a f41993i;

    /* renamed from: j  reason: collision with root package name */
    private nu.g f41994j;

    /* renamed from: k  reason: collision with root package name */
    private nu.h f41995k;

    /* renamed from: l  reason: collision with root package name */
    private du.d f41996l;

    /* renamed from: m  reason: collision with root package name */
    private String f41997m;

    /* renamed from: n  reason: collision with root package name */
    private AbstractC0543d f41998n;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayDeque f41999o;

    /* renamed from: p  reason: collision with root package name */
    private final ArrayDeque f42000p;

    /* renamed from: q  reason: collision with root package name */
    private long f42001q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f42002r;

    /* renamed from: s  reason: collision with root package name */
    private int f42003s;

    /* renamed from: t  reason: collision with root package name */
    private String f42004t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f42005u;

    /* renamed from: v  reason: collision with root package name */
    private int f42006v;

    /* renamed from: w  reason: collision with root package name */
    private int f42007w;

    /* renamed from: x  reason: collision with root package name */
    private int f42008x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f42009y;

    /* renamed from: z  reason: collision with root package name */
    public static final b f41984z = new b(null);
    private static final List A = CollectionsKt.e(j.HTTP_1_1);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f42010a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f42011b;

        /* renamed from: c  reason: collision with root package name */
        private final long f42012c;

        public a(int i10, ByteString byteString, long j10) {
            this.f42010a = i10;
            this.f42011b = byteString;
            this.f42012c = j10;
        }

        public final long a() {
            return this.f42012c;
        }

        public final int b() {
            return this.f42010a;
        }

        public final ByteString c() {
            return this.f42011b;
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
        private final int f42013a;

        /* renamed from: b  reason: collision with root package name */
        private final ByteString f42014b;

        public c(int i10, ByteString data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f42013a = i10;
            this.f42014b = data;
        }

        public final ByteString a() {
            return this.f42014b;
        }

        public final int b() {
            return this.f42013a;
        }
    }

    /* renamed from: nu.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class AbstractC0543d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f42015d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f42016e;

        /* renamed from: i  reason: collision with root package name */
        private final BufferedSink f42017i;

        public AbstractC0543d(boolean z10, BufferedSource source, BufferedSink sink) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            this.f42015d = z10;
            this.f42016e = source;
            this.f42017i = sink;
        }

        public final boolean a() {
            return this.f42015d;
        }

        public final BufferedSink h() {
            return this.f42017i;
        }

        public final BufferedSource k() {
            return this.f42016e;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class e extends du.a {
        public e() {
            super(d.this.f41997m + " writer", false, 2, null);
        }

        @Override // du.a
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
    public static final class f implements zt.b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Request f42020e;

        f(Request request) {
            this.f42020e = request;
        }

        @Override // zt.b
        public void onFailure(Call call, IOException e10) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(e10, "e");
            d.this.p(e10, null);
        }

        @Override // zt.b
        public void onResponse(Call call, Response response) {
            Intrinsics.checkNotNullParameter(call, "call");
            Intrinsics.checkNotNullParameter(response, "response");
            eu.c N = response.N();
            try {
                d.this.m(response, N);
                Intrinsics.checkNotNull(N);
                AbstractC0543d n10 = N.n();
                nu.e a10 = nu.e.f42024g.a(response.E0());
                d.this.f41989e = a10;
                if (!d.this.s(a10)) {
                    d dVar = d.this;
                    synchronized (dVar) {
                        dVar.f42000p.clear();
                        dVar.f(1010, "unexpected Sec-WebSocket-Extensions in response header");
                    }
                }
                try {
                    d.this.r(au.e.f6001i + " WebSocket " + this.f42020e.n().q(), n10);
                    d.this.q().onOpen(d.this, response);
                    d.this.t();
                } catch (Exception e10) {
                    d.this.p(e10, null);
                }
            } catch (IOException e11) {
                d.this.p(e11, response);
                au.e.m(response);
                if (N != null) {
                    N.v();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends du.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f42021e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ long f42022f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, d dVar, long j10) {
            super(str, false, 2, null);
            this.f42021e = dVar;
            this.f42022f = j10;
        }

        @Override // du.a
        public long f() {
            this.f42021e.x();
            return this.f42022f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h extends du.a {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f42023e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, d dVar) {
            super(str, z10);
            this.f42023e = dVar;
        }

        @Override // du.a
        public long f() {
            this.f42023e.l();
            return -1L;
        }
    }

    public d(du.e taskRunner, Request originalRequest, l listener, Random random, long j10, nu.e eVar, long j11) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        Intrinsics.checkNotNullParameter(originalRequest, "originalRequest");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(random, "random");
        this.f41985a = originalRequest;
        this.f41986b = listener;
        this.f41987c = random;
        this.f41988d = j10;
        this.f41989e = eVar;
        this.f41990f = j11;
        this.f41996l = taskRunner.i();
        this.f41999o = new ArrayDeque();
        this.f42000p = new ArrayDeque();
        this.f42003s = -1;
        if (Intrinsics.areEqual("GET", originalRequest.j())) {
            ByteString.a aVar = ByteString.f44060o;
            byte[] bArr = new byte[16];
            random.nextBytes(bArr);
            Unit unit = Unit.f31988a;
            this.f41991g = ByteString.a.j(aVar, bArr, 0, 0, 3, null).d();
            return;
        }
        throw new IllegalArgumentException(("Request must be GET: " + originalRequest.j()).toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean s(nu.e eVar) {
        if (eVar.f42030f || eVar.f42026b != null) {
            return false;
        }
        if (eVar.f42028d != null && !new IntRange(8, 15).contains(eVar.f42028d.intValue())) {
            return false;
        }
        return true;
    }

    private final void u() {
        if (au.e.f6000h && !Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
        }
        du.a aVar = this.f41993i;
        if (aVar != null) {
            du.d.j(this.f41996l, aVar, 0L, 2, null);
        }
    }

    private final synchronized boolean v(ByteString byteString, int i10) {
        if (!this.f42005u && !this.f42002r) {
            if (this.f42001q + byteString.G() > 16777216) {
                f(RNCWebViewManager.COMMAND_CLEAR_CACHE, null);
                return false;
            }
            this.f42001q += byteString.G();
            this.f42000p.add(new c(i10, byteString));
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

    @Override // nu.g.a
    public void b(ByteString bytes) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        this.f41986b.onMessage(this, bytes);
    }

    @Override // nu.g.a
    public void c(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        this.f41986b.onMessage(this, text);
    }

    @Override // nu.g.a
    public synchronized void d(ByteString payload) {
        try {
            Intrinsics.checkNotNullParameter(payload, "payload");
            if (!this.f42005u && (!this.f42002r || !this.f42000p.isEmpty())) {
                this.f41999o.add(payload);
                u();
                this.f42007w++;
            }
        } finally {
        }
    }

    @Override // nu.g.a
    public synchronized void e(ByteString payload) {
        Intrinsics.checkNotNullParameter(payload, "payload");
        this.f42008x++;
        this.f42009y = false;
    }

    @Override // okhttp3.WebSocket
    public boolean f(int i10, String str) {
        return n(i10, str, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
    }

    @Override // nu.g.a
    public void g(int i10, String reason) {
        AbstractC0543d abstractC0543d;
        nu.g gVar;
        nu.h hVar;
        Intrinsics.checkNotNullParameter(reason, "reason");
        if (i10 != -1) {
            synchronized (this) {
                try {
                    if (this.f42003s == -1) {
                        this.f42003s = i10;
                        this.f42004t = reason;
                        abstractC0543d = null;
                        if (this.f42002r && this.f42000p.isEmpty()) {
                            AbstractC0543d abstractC0543d2 = this.f41998n;
                            this.f41998n = null;
                            gVar = this.f41994j;
                            this.f41994j = null;
                            hVar = this.f41995k;
                            this.f41995k = null;
                            this.f41996l.n();
                            abstractC0543d = abstractC0543d2;
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
                this.f41986b.onClosing(this, i10, reason);
                if (abstractC0543d != null) {
                    this.f41986b.onClosed(this, i10, reason);
                }
                if (hVar != null) {
                    return;
                }
                return;
            } finally {
                if (abstractC0543d != null) {
                    au.e.m(abstractC0543d);
                }
                if (gVar != null) {
                    au.e.m(gVar);
                }
                if (hVar != null) {
                    au.e.m(hVar);
                }
            }
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public void l() {
        Call call = this.f41992h;
        Intrinsics.checkNotNull(call);
        call.cancel();
    }

    public final void m(Response response, eu.c cVar) {
        Intrinsics.checkNotNullParameter(response, "response");
        if (response.L() == 101) {
            String D0 = Response.D0(response, "Connection", null, 2, null);
            if (StringsKt.A("Upgrade", D0, true)) {
                String D02 = Response.D0(response, "Upgrade", null, 2, null);
                if (StringsKt.A("websocket", D02, true)) {
                    String D03 = Response.D0(response, "Sec-WebSocket-Accept", null, 2, null);
                    ByteString.a aVar = ByteString.f44060o;
                    String d10 = aVar.g(this.f41991g + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").E().d();
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
            nu.f.f42031a.c(i10);
            if (str != null) {
                byteString = ByteString.f44060o.g(str);
                if (byteString.G() > 123) {
                    throw new IllegalArgumentException(("reason.size() > 123: " + str).toString());
                }
            } else {
                byteString = null;
            }
            if (!this.f42005u && !this.f42002r) {
                this.f42002r = true;
                this.f42000p.add(new a(i10, byteString, j10));
                u();
                return true;
            }
            return false;
        } finally {
        }
    }

    public final void o(OkHttpClient client) {
        Intrinsics.checkNotNullParameter(client, "client");
        if (this.f41985a.f("Sec-WebSocket-Extensions") != null) {
            p(new ProtocolException("Request header not permitted: 'Sec-WebSocket-Extensions'"), null);
            return;
        }
        OkHttpClient c10 = client.D().j(okhttp3.e.f44017b).P(A).c();
        Request b10 = this.f41985a.k().e("Upgrade", "websocket").e("Connection", "Upgrade").e("Sec-WebSocket-Key", this.f41991g).e("Sec-WebSocket-Version", "13").e("Sec-WebSocket-Extensions", "permessage-deflate").b();
        eu.e eVar = new eu.e(c10, b10, true);
        this.f41992h = eVar;
        Intrinsics.checkNotNull(eVar);
        eVar.V(new f(b10));
    }

    public final void p(Exception e10, Response response) {
        Intrinsics.checkNotNullParameter(e10, "e");
        synchronized (this) {
            if (this.f42005u) {
                return;
            }
            this.f42005u = true;
            AbstractC0543d abstractC0543d = this.f41998n;
            this.f41998n = null;
            nu.g gVar = this.f41994j;
            this.f41994j = null;
            nu.h hVar = this.f41995k;
            this.f41995k = null;
            this.f41996l.n();
            Unit unit = Unit.f31988a;
            try {
                this.f41986b.onFailure(this, e10, response);
            } finally {
                if (abstractC0543d != null) {
                    au.e.m(abstractC0543d);
                }
                if (gVar != null) {
                    au.e.m(gVar);
                }
                if (hVar != null) {
                    au.e.m(hVar);
                }
            }
        }
    }

    public final l q() {
        return this.f41986b;
    }

    public final void r(String name, AbstractC0543d streams) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(streams, "streams");
        nu.e eVar = this.f41989e;
        Intrinsics.checkNotNull(eVar);
        synchronized (this) {
            try {
                this.f41997m = name;
                this.f41998n = streams;
                this.f41995k = new nu.h(streams.a(), streams.h(), this.f41987c, eVar.f42025a, eVar.a(streams.a()), this.f41990f);
                this.f41993i = new e();
                long j10 = this.f41988d;
                if (j10 != 0) {
                    try {
                        long nanos = TimeUnit.MILLISECONDS.toNanos(j10);
                        du.d dVar = this.f41996l;
                        dVar.i(new g(name + " ping", this, nanos), nanos);
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                if (!this.f42000p.isEmpty()) {
                    u();
                }
                Unit unit = Unit.f31988a;
                this.f41994j = new nu.g(streams.a(), streams.k(), this, eVar.f42025a, eVar.a(!streams.a()));
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    @Override // okhttp3.WebSocket
    public boolean send(String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        return v(ByteString.f44060o.g(text), 1);
    }

    public final void t() {
        while (this.f42003s == -1) {
            nu.g gVar = this.f41994j;
            Intrinsics.checkNotNull(gVar);
            gVar.a();
        }
    }

    public final boolean w() {
        String str;
        nu.g gVar;
        nu.h hVar;
        int i10;
        AbstractC0543d abstractC0543d;
        synchronized (this) {
            try {
                if (this.f42005u) {
                    return false;
                }
                nu.h hVar2 = this.f41995k;
                Object poll = this.f41999o.poll();
                Object obj = null;
                if (poll == null) {
                    Object poll2 = this.f42000p.poll();
                    if (poll2 instanceof a) {
                        i10 = this.f42003s;
                        str = this.f42004t;
                        if (i10 != -1) {
                            abstractC0543d = this.f41998n;
                            this.f41998n = null;
                            gVar = this.f41994j;
                            this.f41994j = null;
                            hVar = this.f41995k;
                            this.f41995k = null;
                            this.f41996l.n();
                        } else {
                            long a10 = ((a) poll2).a();
                            this.f41996l.i(new h(this.f41997m + " cancel", true, this), TimeUnit.MILLISECONDS.toNanos(a10));
                            abstractC0543d = null;
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
                        abstractC0543d = null;
                    }
                    obj = poll2;
                } else {
                    str = null;
                    gVar = null;
                    hVar = null;
                    i10 = -1;
                    abstractC0543d = null;
                }
                Unit unit = Unit.f31988a;
                try {
                    if (poll != null) {
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.o((ByteString) poll);
                    } else if (obj instanceof c) {
                        c cVar = (c) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.k(cVar.b(), cVar.a());
                        synchronized (this) {
                            this.f42001q -= cVar.a().G();
                        }
                    } else if (obj instanceof a) {
                        a aVar = (a) obj;
                        Intrinsics.checkNotNull(hVar2);
                        hVar2.a(aVar.b(), aVar.c());
                        if (abstractC0543d != null) {
                            l lVar = this.f41986b;
                            Intrinsics.checkNotNull(str);
                            lVar.onClosed(this, i10, str);
                        }
                    } else {
                        throw new AssertionError();
                    }
                    return true;
                } finally {
                    if (abstractC0543d != null) {
                        au.e.m(abstractC0543d);
                    }
                    if (gVar != null) {
                        au.e.m(gVar);
                    }
                    if (hVar != null) {
                        au.e.m(hVar);
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
                if (this.f42005u) {
                    return;
                }
                nu.h hVar = this.f41995k;
                if (hVar == null) {
                    return;
                }
                if (this.f42009y) {
                    i10 = this.f42006v;
                } else {
                    i10 = -1;
                }
                this.f42006v++;
                this.f42009y = true;
                Unit unit = Unit.f31988a;
                if (i10 != -1) {
                    p(new SocketTimeoutException("sent ping but didn't receive pong within " + this.f41988d + "ms (after " + (i10 - 1) + " successful ping/pongs)"), null);
                    return;
                }
                try {
                    hVar.m(ByteString.f44061p);
                } catch (IOException e10) {
                    p(e10, null);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
