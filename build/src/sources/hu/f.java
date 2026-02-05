package hu;

import com.facebook.react.uimanager.events.PointerEventHelper;
import hu.h;
import java.io.Closeable;
import java.io.IOException;
import java.net.Socket;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f implements Closeable {
    public static final b N = new b(null);
    private static final m O;
    private long A;
    private long B;
    private long C;
    private final m D;
    private m E;
    private long F;
    private long G;
    private long H;
    private long I;
    private final Socket J;
    private final hu.j K;
    private final d L;
    private final Set M;

    /* renamed from: d */
    private final boolean f27049d;

    /* renamed from: e */
    private final c f27050e;

    /* renamed from: i */
    private final Map f27051i;

    /* renamed from: o */
    private final String f27052o;

    /* renamed from: p */
    private int f27053p;

    /* renamed from: q */
    private int f27054q;

    /* renamed from: r */
    private boolean f27055r;

    /* renamed from: s */
    private final du.e f27056s;

    /* renamed from: t */
    private final du.d f27057t;

    /* renamed from: u */
    private final du.d f27058u;

    /* renamed from: v */
    private final du.d f27059v;

    /* renamed from: w */
    private final hu.l f27060w;

    /* renamed from: x */
    private long f27061x;

    /* renamed from: y */
    private long f27062y;

    /* renamed from: z */
    private long f27063z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a */
        private boolean f27064a;

        /* renamed from: b */
        private final du.e f27065b;

        /* renamed from: c */
        public Socket f27066c;

        /* renamed from: d */
        public String f27067d;

        /* renamed from: e */
        public BufferedSource f27068e;

        /* renamed from: f */
        public BufferedSink f27069f;

        /* renamed from: g */
        private c f27070g;

        /* renamed from: h */
        private hu.l f27071h;

        /* renamed from: i */
        private int f27072i;

        public a(boolean z10, du.e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            this.f27064a = z10;
            this.f27065b = taskRunner;
            this.f27070g = c.f27074b;
            this.f27071h = hu.l.f27176b;
        }

        public final f a() {
            return new f(this);
        }

        public final boolean b() {
            return this.f27064a;
        }

        public final String c() {
            String str = this.f27067d;
            if (str != null) {
                return str;
            }
            Intrinsics.throwUninitializedPropertyAccessException("connectionName");
            return null;
        }

        public final c d() {
            return this.f27070g;
        }

        public final int e() {
            return this.f27072i;
        }

        public final hu.l f() {
            return this.f27071h;
        }

        public final BufferedSink g() {
            BufferedSink bufferedSink = this.f27069f;
            if (bufferedSink != null) {
                return bufferedSink;
            }
            Intrinsics.throwUninitializedPropertyAccessException("sink");
            return null;
        }

        public final Socket h() {
            Socket socket = this.f27066c;
            if (socket != null) {
                return socket;
            }
            Intrinsics.throwUninitializedPropertyAccessException("socket");
            return null;
        }

        public final BufferedSource i() {
            BufferedSource bufferedSource = this.f27068e;
            if (bufferedSource != null) {
                return bufferedSource;
            }
            Intrinsics.throwUninitializedPropertyAccessException("source");
            return null;
        }

        public final du.e j() {
            return this.f27065b;
        }

        public final a k(c listener) {
            Intrinsics.checkNotNullParameter(listener, "listener");
            this.f27070g = listener;
            return this;
        }

        public final a l(int i10) {
            this.f27072i = i10;
            return this;
        }

        public final void m(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f27067d = str;
        }

        public final void n(BufferedSink bufferedSink) {
            Intrinsics.checkNotNullParameter(bufferedSink, "<set-?>");
            this.f27069f = bufferedSink;
        }

        public final void o(Socket socket) {
            Intrinsics.checkNotNullParameter(socket, "<set-?>");
            this.f27066c = socket;
        }

        public final void p(BufferedSource bufferedSource) {
            Intrinsics.checkNotNullParameter(bufferedSource, "<set-?>");
            this.f27068e = bufferedSource;
        }

        public final a q(Socket socket, String peerName, BufferedSource source, BufferedSink sink) {
            String str;
            Intrinsics.checkNotNullParameter(socket, "socket");
            Intrinsics.checkNotNullParameter(peerName, "peerName");
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            o(socket);
            if (this.f27064a) {
                str = au.e.f6001i + ' ' + peerName;
            } else {
                str = "MockWebServer " + peerName;
            }
            m(str);
            p(source);
            n(sink);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final m a() {
            return f.O;
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class c {

        /* renamed from: a */
        public static final b f27073a = new b(null);

        /* renamed from: b */
        public static final c f27074b = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends c {
            a() {
            }

            @Override // hu.f.c
            public void b(hu.i stream) {
                Intrinsics.checkNotNullParameter(stream, "stream");
                stream.d(hu.b.REFUSED_STREAM, null);
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

        public void a(f connection, m settings) {
            Intrinsics.checkNotNullParameter(connection, "connection");
            Intrinsics.checkNotNullParameter(settings, "settings");
        }

        public abstract void b(hu.i iVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends du.a {

        /* renamed from: e */
        final /* synthetic */ f f27087e;

        /* renamed from: f */
        final /* synthetic */ int f27088f;

        /* renamed from: g */
        final /* synthetic */ Buffer f27089g;

        /* renamed from: h */
        final /* synthetic */ int f27090h;

        /* renamed from: i */
        final /* synthetic */ boolean f27091i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String str, boolean z10, f fVar, int i10, Buffer buffer, int i11, boolean z11) {
            super(str, z10);
            this.f27087e = fVar;
            this.f27088f = i10;
            this.f27089g = buffer;
            this.f27090h = i11;
            this.f27091i = z11;
        }

        @Override // du.a
        public long f() {
            try {
                boolean d10 = this.f27087e.f27060w.d(this.f27088f, this.f27089g, this.f27090h, this.f27091i);
                if (d10) {
                    this.f27087e.W1().V(this.f27088f, hu.b.CANCEL);
                }
                if (d10 || this.f27091i) {
                    synchronized (this.f27087e) {
                        this.f27087e.M.remove(Integer.valueOf(this.f27088f));
                    }
                    return -1L;
                }
                return -1L;
            } catch (IOException unused) {
                return -1L;
            }
        }
    }

    /* renamed from: hu.f$f */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0374f extends du.a {

        /* renamed from: e */
        final /* synthetic */ f f27092e;

        /* renamed from: f */
        final /* synthetic */ int f27093f;

        /* renamed from: g */
        final /* synthetic */ List f27094g;

        /* renamed from: h */
        final /* synthetic */ boolean f27095h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0374f(String str, boolean z10, f fVar, int i10, List list, boolean z11) {
            super(str, z10);
            this.f27092e = fVar;
            this.f27093f = i10;
            this.f27094g = list;
            this.f27095h = z11;
        }

        @Override // du.a
        public long f() {
            boolean c10 = this.f27092e.f27060w.c(this.f27093f, this.f27094g, this.f27095h);
            if (c10) {
                try {
                    this.f27092e.W1().V(this.f27093f, hu.b.CANCEL);
                } catch (IOException unused) {
                    return -1L;
                }
            }
            if (c10 || this.f27095h) {
                synchronized (this.f27092e) {
                    this.f27092e.M.remove(Integer.valueOf(this.f27093f));
                }
                return -1L;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends du.a {

        /* renamed from: e */
        final /* synthetic */ f f27096e;

        /* renamed from: f */
        final /* synthetic */ int f27097f;

        /* renamed from: g */
        final /* synthetic */ List f27098g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, boolean z10, f fVar, int i10, List list) {
            super(str, z10);
            this.f27096e = fVar;
            this.f27097f = i10;
            this.f27098g = list;
        }

        @Override // du.a
        public long f() {
            if (this.f27096e.f27060w.b(this.f27097f, this.f27098g)) {
                try {
                    this.f27096e.W1().V(this.f27097f, hu.b.CANCEL);
                    synchronized (this.f27096e) {
                        this.f27096e.M.remove(Integer.valueOf(this.f27097f));
                    }
                    return -1L;
                } catch (IOException unused) {
                    return -1L;
                }
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h extends du.a {

        /* renamed from: e */
        final /* synthetic */ f f27099e;

        /* renamed from: f */
        final /* synthetic */ int f27100f;

        /* renamed from: g */
        final /* synthetic */ hu.b f27101g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, f fVar, int i10, hu.b bVar) {
            super(str, z10);
            this.f27099e = fVar;
            this.f27100f = i10;
            this.f27101g = bVar;
        }

        @Override // du.a
        public long f() {
            this.f27099e.f27060w.a(this.f27100f, this.f27101g);
            synchronized (this.f27099e) {
                this.f27099e.M.remove(Integer.valueOf(this.f27100f));
                Unit unit = Unit.f31988a;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i extends du.a {

        /* renamed from: e */
        final /* synthetic */ f f27102e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(String str, boolean z10, f fVar) {
            super(str, z10);
            this.f27102e = fVar;
        }

        @Override // du.a
        public long f() {
            this.f27102e.z2(false, 2, 0);
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends du.a {

        /* renamed from: e */
        final /* synthetic */ f f27103e;

        /* renamed from: f */
        final /* synthetic */ long f27104f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(String str, f fVar, long j10) {
            super(str, false, 2, null);
            this.f27103e = fVar;
            this.f27104f = j10;
        }

        @Override // du.a
        public long f() {
            boolean z10;
            synchronized (this.f27103e) {
                if (this.f27103e.f27062y >= this.f27103e.f27061x) {
                    this.f27103e.f27061x++;
                    z10 = false;
                } else {
                    z10 = true;
                }
            }
            if (z10) {
                this.f27103e.S0(null);
                return -1L;
            }
            this.f27103e.z2(false, 1, 0);
            return this.f27104f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class k extends du.a {

        /* renamed from: e */
        final /* synthetic */ f f27105e;

        /* renamed from: f */
        final /* synthetic */ int f27106f;

        /* renamed from: g */
        final /* synthetic */ hu.b f27107g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(String str, boolean z10, f fVar, int i10, hu.b bVar) {
            super(str, z10);
            this.f27105e = fVar;
            this.f27106f = i10;
            this.f27107g = bVar;
        }

        @Override // du.a
        public long f() {
            try {
                this.f27105e.A2(this.f27106f, this.f27107g);
                return -1L;
            } catch (IOException e10) {
                this.f27105e.S0(e10);
                return -1L;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class l extends du.a {

        /* renamed from: e */
        final /* synthetic */ f f27108e;

        /* renamed from: f */
        final /* synthetic */ int f27109f;

        /* renamed from: g */
        final /* synthetic */ long f27110g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(String str, boolean z10, f fVar, int i10, long j10) {
            super(str, z10);
            this.f27108e = fVar;
            this.f27109f = i10;
            this.f27110g = j10;
        }

        @Override // du.a
        public long f() {
            try {
                this.f27108e.W1().C0(this.f27109f, this.f27110g);
                return -1L;
            } catch (IOException e10) {
                this.f27108e.S0(e10);
                return -1L;
            }
        }
    }

    static {
        m mVar = new m();
        mVar.h(7, 65535);
        mVar.h(5, 16384);
        O = mVar;
    }

    public f(a builder) {
        int i10;
        Intrinsics.checkNotNullParameter(builder, "builder");
        boolean b10 = builder.b();
        this.f27049d = b10;
        this.f27050e = builder.d();
        this.f27051i = new LinkedHashMap();
        String c10 = builder.c();
        this.f27052o = c10;
        if (builder.b()) {
            i10 = 3;
        } else {
            i10 = 2;
        }
        this.f27054q = i10;
        du.e j10 = builder.j();
        this.f27056s = j10;
        du.d i11 = j10.i();
        this.f27057t = i11;
        this.f27058u = j10.i();
        this.f27059v = j10.i();
        this.f27060w = builder.f();
        m mVar = new m();
        if (builder.b()) {
            mVar.h(7, PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
        }
        this.D = mVar;
        m mVar2 = O;
        this.E = mVar2;
        this.I = mVar2.c();
        this.J = builder.h();
        this.K = new hu.j(builder.g(), b10);
        this.L = new d(this, new hu.h(builder.i(), b10));
        this.M = new LinkedHashSet();
        if (builder.e() != 0) {
            long nanos = TimeUnit.MILLISECONDS.toNanos(builder.e());
            i11.i(new j(c10 + " ping", this, nanos), nanos);
        }
    }

    public final void S0(IOException iOException) {
        hu.b bVar = hu.b.PROTOCOL_ERROR;
        N0(bVar, bVar, iOException);
    }

    /* JADX WARN: Removed duplicated region for block: B:104:0x0070  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x004d A[Catch: all -> 0x0043, TryCatch #1 {all -> 0x0043, blocks: (B:79:0x0027, B:81:0x002c, B:83:0x0034, B:90:0x0047, B:92:0x004d, B:93:0x0056, B:111:0x0082, B:112:0x0087), top: B:120:0x001a }] */
    /* JADX WARN: Removed duplicated region for block: B:96:0x005b A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /* JADX WARN: Removed duplicated region for block: B:99:0x0064 A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final hu.i b2(int r10, java.util.List r11, boolean r12) {
        /*
            r9 = this;
            r3 = r12 ^ 1
            hu.j r6 = r9.K
            monitor-enter(r6)
            monitor-enter(r9)     // Catch: java.lang.Throwable -> L8a
            int r0 = r9.f27054q     // Catch: java.lang.Throwable -> L7e
            r1 = 1073741823(0x3fffffff, float:1.9999999)
            if (r0 <= r1) goto L18
            hu.b r0 = hu.b.REFUSED_STREAM     // Catch: java.lang.Throwable -> L13
            r9.t2(r0)     // Catch: java.lang.Throwable -> L13
            goto L18
        L13:
            r0 = move-exception
            r10 = r0
            r2 = r9
            goto L88
        L18:
            boolean r0 = r9.f27055r     // Catch: java.lang.Throwable -> L7e
            if (r0 != 0) goto L81
            int r1 = r9.f27054q     // Catch: java.lang.Throwable -> L7e
            int r0 = r1 + 2
            r9.f27054q = r0     // Catch: java.lang.Throwable -> L7e
            hu.i r0 = new hu.i     // Catch: java.lang.Throwable -> L7e
            r5 = 0
            r4 = 0
            r2 = r9
            r0.<init>(r1, r2, r3, r4, r5)     // Catch: java.lang.Throwable -> L43
            if (r12 == 0) goto L46
            long r4 = r2.H     // Catch: java.lang.Throwable -> L43
            long r7 = r2.I     // Catch: java.lang.Throwable -> L43
            int r12 = (r4 > r7 ? 1 : (r4 == r7 ? 0 : -1))
            if (r12 >= 0) goto L46
            long r4 = r0.r()     // Catch: java.lang.Throwable -> L43
            long r7 = r0.q()     // Catch: java.lang.Throwable -> L43
            int r12 = (r4 > r7 ? 1 : (r4 == r7 ? 0 : -1))
            if (r12 < 0) goto L41
            goto L46
        L41:
            r12 = 0
            goto L47
        L43:
            r0 = move-exception
        L44:
            r10 = r0
            goto L88
        L46:
            r12 = 1
        L47:
            boolean r4 = r0.u()     // Catch: java.lang.Throwable -> L43
            if (r4 == 0) goto L56
            java.util.Map r4 = r2.f27051i     // Catch: java.lang.Throwable -> L43
            java.lang.Integer r5 = java.lang.Integer.valueOf(r1)     // Catch: java.lang.Throwable -> L43
            r4.put(r5, r0)     // Catch: java.lang.Throwable -> L43
        L56:
            kotlin.Unit r4 = kotlin.Unit.f31988a     // Catch: java.lang.Throwable -> L43
            monitor-exit(r9)     // Catch: java.lang.Throwable -> L61
            if (r10 != 0) goto L64
            hu.j r10 = r2.K     // Catch: java.lang.Throwable -> L61
            r10.E(r3, r1, r11)     // Catch: java.lang.Throwable -> L61
            goto L6d
        L61:
            r0 = move-exception
        L62:
            r10 = r0
            goto L8d
        L64:
            boolean r3 = r2.f27049d     // Catch: java.lang.Throwable -> L61
            if (r3 != 0) goto L76
            hu.j r3 = r2.K     // Catch: java.lang.Throwable -> L61
            r3.N(r10, r1, r11)     // Catch: java.lang.Throwable -> L61
        L6d:
            monitor-exit(r6)
            if (r12 == 0) goto L75
            hu.j r10 = r2.K
            r10.flush()
        L75:
            return r0
        L76:
            java.lang.String r10 = "client streams shouldn't have associated stream IDs"
            java.lang.IllegalArgumentException r11 = new java.lang.IllegalArgumentException     // Catch: java.lang.Throwable -> L61
            r11.<init>(r10)     // Catch: java.lang.Throwable -> L61
            throw r11     // Catch: java.lang.Throwable -> L61
        L7e:
            r0 = move-exception
            r2 = r9
            goto L44
        L81:
            r2 = r9
            hu.a r10 = new hu.a     // Catch: java.lang.Throwable -> L43
            r10.<init>()     // Catch: java.lang.Throwable -> L43
            throw r10     // Catch: java.lang.Throwable -> L43
        L88:
            monitor-exit(r9)     // Catch: java.lang.Throwable -> L61
            throw r10     // Catch: java.lang.Throwable -> L61
        L8a:
            r0 = move-exception
            r2 = r9
            goto L62
        L8d:
            monitor-exit(r6)
            throw r10
        */
        throw new UnsupportedOperationException("Method not decompiled: hu.f.b2(int, java.util.List, boolean):hu.i");
    }

    public static /* synthetic */ void v2(f fVar, boolean z10, du.e eVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        if ((i10 & 2) != 0) {
            eVar = du.e.f21258i;
        }
        fVar.u2(z10, eVar);
    }

    public final m A1() {
        return this.E;
    }

    public final void A2(int i10, hu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        this.K.V(i10, statusCode);
    }

    public final synchronized hu.i B1(int i10) {
        return (hu.i) this.f27051i.get(Integer.valueOf(i10));
    }

    public final void B2(int i10, hu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        du.d dVar = this.f27057t;
        dVar.i(new k(this.f27052o + '[' + i10 + "] writeSynReset", true, this, i10, errorCode), 0L);
    }

    public final void C2(int i10, long j10) {
        du.d dVar = this.f27057t;
        dVar.i(new l(this.f27052o + '[' + i10 + "] windowUpdate", true, this, i10, j10), 0L);
    }

    public final Map E1() {
        return this.f27051i;
    }

    public final void N0(hu.b connectionCode, hu.b streamCode, IOException iOException) {
        int i10;
        Object[] objArr;
        Intrinsics.checkNotNullParameter(connectionCode, "connectionCode");
        Intrinsics.checkNotNullParameter(streamCode, "streamCode");
        if (au.e.f6000h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        try {
            t2(connectionCode);
        } catch (IOException unused) {
        }
        synchronized (this) {
            try {
                if (!this.f27051i.isEmpty()) {
                    objArr = this.f27051i.values().toArray(new hu.i[0]);
                    this.f27051i.clear();
                } else {
                    objArr = null;
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        hu.i[] iVarArr = (hu.i[]) objArr;
        if (iVarArr != null) {
            for (hu.i iVar : iVarArr) {
                try {
                    iVar.d(streamCode, iOException);
                } catch (IOException unused2) {
                }
            }
        }
        try {
            this.K.close();
        } catch (IOException unused3) {
        }
        try {
            this.J.close();
        } catch (IOException unused4) {
        }
        this.f27057t.n();
        this.f27058u.n();
        this.f27059v.n();
    }

    public final long U1() {
        return this.I;
    }

    public final boolean V0() {
        return this.f27049d;
    }

    public final hu.j W1() {
        return this.K;
    }

    public final String Y0() {
        return this.f27052o;
    }

    public final synchronized boolean Y1(long j10) {
        if (this.f27055r) {
            return false;
        }
        if (this.A < this.f27063z) {
            if (j10 >= this.C) {
                return false;
            }
        }
        return true;
    }

    public final int Z0() {
        return this.f27053p;
    }

    public final hu.i c2(List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        return b2(0, requestHeaders, z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        N0(hu.b.NO_ERROR, hu.b.CANCEL, null);
    }

    public final c e1() {
        return this.f27050e;
    }

    public final void f2(int i10, BufferedSource source, int i11, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        Buffer buffer = new Buffer();
        long j10 = i11;
        source.U0(j10);
        source.read(buffer, j10);
        this.f27058u.i(new e(this.f27052o + '[' + i10 + "] onData", true, this, i10, buffer, i11, z10), 0L);
    }

    public final void flush() {
        this.K.flush();
    }

    public final void h2(int i10, List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        du.d dVar = this.f27058u;
        dVar.i(new C0374f(this.f27052o + '[' + i10 + "] onHeaders", true, this, i10, requestHeaders, z10), 0L);
    }

    public final void i2(int i10, List requestHeaders) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        synchronized (this) {
            try {
                if (this.M.contains(Integer.valueOf(i10))) {
                    try {
                        B2(i10, hu.b.PROTOCOL_ERROR);
                        return;
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.M.add(Integer.valueOf(i10));
                du.d dVar = this.f27058u;
                dVar.i(new g(this.f27052o + '[' + i10 + "] onRequest", true, this, i10, requestHeaders), 0L);
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    public final void j2(int i10, hu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        du.d dVar = this.f27058u;
        dVar.i(new h(this.f27052o + '[' + i10 + "] onReset", true, this, i10, errorCode), 0L);
    }

    public final boolean o2(int i10) {
        if (i10 != 0 && (i10 & 1) == 0) {
            return true;
        }
        return false;
    }

    public final synchronized hu.i p2(int i10) {
        hu.i iVar;
        iVar = (hu.i) this.f27051i.remove(Integer.valueOf(i10));
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
        notifyAll();
        return iVar;
    }

    public final void q2() {
        synchronized (this) {
            long j10 = this.A;
            long j11 = this.f27063z;
            if (j10 < j11) {
                return;
            }
            this.f27063z = j11 + 1;
            this.C = System.nanoTime() + 1000000000;
            Unit unit = Unit.f31988a;
            du.d dVar = this.f27057t;
            dVar.i(new i(this.f27052o + " ping", true, this), 0L);
        }
    }

    public final void r2(int i10) {
        this.f27053p = i10;
    }

    public final void s2(m mVar) {
        Intrinsics.checkNotNullParameter(mVar, "<set-?>");
        this.E = mVar;
    }

    public final void t2(hu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        synchronized (this.K) {
            Ref.IntRef intRef = new Ref.IntRef();
            synchronized (this) {
                if (this.f27055r) {
                    return;
                }
                this.f27055r = true;
                int i10 = this.f27053p;
                intRef.element = i10;
                Unit unit = Unit.f31988a;
                this.K.y(i10, statusCode, au.e.f5993a);
            }
        }
    }

    public final void u2(boolean z10, du.e taskRunner) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        if (z10) {
            this.K.h();
            this.K.W(this.D);
            int c10 = this.D.c();
            if (c10 != 65535) {
                this.K.C0(0, c10 - 65535);
            }
        }
        taskRunner.i().i(new du.c(this.f27052o, true, this.L), 0L);
    }

    public final synchronized void w2(long j10) {
        long j11 = this.F + j10;
        this.F = j11;
        long j12 = j11 - this.G;
        if (j12 >= this.D.c() / 2) {
            C2(0, j12);
            this.G += j12;
        }
    }

    public final int x1() {
        return this.f27054q;
    }

    /* JADX WARN: Code restructure failed: missing block: B:58:0x0038, code lost:
        throw new java.io.IOException("stream closed");
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x003a, code lost:
        r2 = java.lang.Math.min((int) java.lang.Math.min(r12, r6 - r4), r8.K.F());
        r6 = r2;
        r8.H += r6;
        r4 = kotlin.Unit.f31988a;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void x2(int r9, boolean r10, okio.Buffer r11, long r12) {
        /*
            r8 = this;
            r0 = 0
            int r2 = (r12 > r0 ? 1 : (r12 == r0 ? 0 : -1))
            r3 = 0
            if (r2 != 0) goto Ld
            hu.j r12 = r8.K
            r12.k(r10, r9, r11, r3)
            return
        Ld:
            int r2 = (r12 > r0 ? 1 : (r12 == r0 ? 0 : -1))
            if (r2 <= 0) goto L71
            monitor-enter(r8)
        L12:
            long r4 = r8.H     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
            long r6 = r8.I     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
            int r2 = (r4 > r6 ? 1 : (r4 == r6 ? 0 : -1))
            if (r2 < 0) goto L39
            java.util.Map r2 = r8.f27051i     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
            java.lang.Integer r4 = java.lang.Integer.valueOf(r9)     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
            boolean r2 = r2.containsKey(r4)     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
            if (r2 == 0) goto L31
            java.lang.String r2 = "null cannot be cast to non-null type java.lang.Object"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r8, r2)     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
            r8.wait()     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
            goto L12
        L2f:
            r9 = move-exception
            goto L6f
        L31:
            java.io.IOException r9 = new java.io.IOException     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
            java.lang.String r10 = "stream closed"
            r9.<init>(r10)     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
            throw r9     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
        L39:
            long r6 = r6 - r4
            long r4 = java.lang.Math.min(r12, r6)     // Catch: java.lang.Throwable -> L2f
            int r2 = (int) r4     // Catch: java.lang.Throwable -> L2f
            hu.j r4 = r8.K     // Catch: java.lang.Throwable -> L2f
            int r4 = r4.F()     // Catch: java.lang.Throwable -> L2f
            int r2 = java.lang.Math.min(r2, r4)     // Catch: java.lang.Throwable -> L2f
            long r4 = r8.H     // Catch: java.lang.Throwable -> L2f
            long r6 = (long) r2     // Catch: java.lang.Throwable -> L2f
            long r4 = r4 + r6
            r8.H = r4     // Catch: java.lang.Throwable -> L2f
            kotlin.Unit r4 = kotlin.Unit.f31988a     // Catch: java.lang.Throwable -> L2f
            monitor-exit(r8)
            long r12 = r12 - r6
            hu.j r4 = r8.K
            if (r10 == 0) goto L5d
            int r5 = (r12 > r0 ? 1 : (r12 == r0 ? 0 : -1))
            if (r5 != 0) goto L5d
            r5 = 1
            goto L5e
        L5d:
            r5 = r3
        L5e:
            r4.k(r5, r9, r11, r2)
            goto Ld
        L62:
            java.lang.Thread r9 = java.lang.Thread.currentThread()     // Catch: java.lang.Throwable -> L2f
            r9.interrupt()     // Catch: java.lang.Throwable -> L2f
            java.io.InterruptedIOException r9 = new java.io.InterruptedIOException     // Catch: java.lang.Throwable -> L2f
            r9.<init>()     // Catch: java.lang.Throwable -> L2f
            throw r9     // Catch: java.lang.Throwable -> L2f
        L6f:
            monitor-exit(r8)
            throw r9
        L71:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: hu.f.x2(int, boolean, okio.Buffer, long):void");
    }

    public final m y1() {
        return this.D;
    }

    public final void y2(int i10, boolean z10, List alternating) {
        Intrinsics.checkNotNullParameter(alternating, "alternating");
        this.K.E(z10, i10, alternating);
    }

    public final void z2(boolean z10, int i10, int i11) {
        try {
            this.K.L(z10, i10, i11);
        } catch (IOException e10) {
            S0(e10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d implements h.c, Function0 {

        /* renamed from: d */
        private final hu.h f27075d;

        /* renamed from: e */
        final /* synthetic */ f f27076e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends du.a {

            /* renamed from: e */
            final /* synthetic */ f f27077e;

            /* renamed from: f */
            final /* synthetic */ Ref.ObjectRef f27078f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, boolean z10, f fVar, Ref.ObjectRef objectRef) {
                super(str, z10);
                this.f27077e = fVar;
                this.f27078f = objectRef;
            }

            @Override // du.a
            public long f() {
                this.f27077e.e1().a(this.f27077e, (m) this.f27078f.element);
                return -1L;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends du.a {

            /* renamed from: e */
            final /* synthetic */ f f27079e;

            /* renamed from: f */
            final /* synthetic */ hu.i f27080f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, boolean z10, f fVar, hu.i iVar) {
                super(str, z10);
                this.f27079e = fVar;
                this.f27080f = iVar;
            }

            @Override // du.a
            public long f() {
                try {
                    this.f27079e.e1().b(this.f27080f);
                    return -1L;
                } catch (IOException e10) {
                    ju.h g10 = ju.h.f31441a.g();
                    g10.k("Http2Connection.Listener failure for " + this.f27079e.Y0(), 4, e10);
                    try {
                        this.f27080f.d(hu.b.PROTOCOL_ERROR, e10);
                        return -1L;
                    } catch (IOException unused) {
                        return -1L;
                    }
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends du.a {

            /* renamed from: e */
            final /* synthetic */ f f27081e;

            /* renamed from: f */
            final /* synthetic */ int f27082f;

            /* renamed from: g */
            final /* synthetic */ int f27083g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, boolean z10, f fVar, int i10, int i11) {
                super(str, z10);
                this.f27081e = fVar;
                this.f27082f = i10;
                this.f27083g = i11;
            }

            @Override // du.a
            public long f() {
                this.f27081e.z2(true, this.f27082f, this.f27083g);
                return -1L;
            }
        }

        /* renamed from: hu.f$d$d */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0373d extends du.a {

            /* renamed from: e */
            final /* synthetic */ d f27084e;

            /* renamed from: f */
            final /* synthetic */ boolean f27085f;

            /* renamed from: g */
            final /* synthetic */ m f27086g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0373d(String str, boolean z10, d dVar, boolean z11, m mVar) {
                super(str, z10);
                this.f27084e = dVar;
                this.f27085f = z11;
                this.f27086g = mVar;
            }

            @Override // du.a
            public long f() {
                this.f27084e.k(this.f27085f, this.f27086g);
                return -1L;
            }
        }

        public d(f fVar, hu.h reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            this.f27076e = fVar;
            this.f27075d = reader;
        }

        @Override // hu.h.c
        public void a(boolean z10, m settings) {
            Intrinsics.checkNotNullParameter(settings, "settings");
            du.d dVar = this.f27076e.f27057t;
            dVar.i(new C0373d(this.f27076e.Y0() + " applyAndAckSettings", true, this, z10, settings), 0L);
        }

        @Override // hu.h.c
        public void b(boolean z10, int i10, int i11, List headerBlock) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f27076e.o2(i10)) {
                this.f27076e.h2(i10, headerBlock, z10);
                return;
            }
            f fVar = this.f27076e;
            synchronized (fVar) {
                hu.i B1 = fVar.B1(i10);
                if (B1 == null) {
                    if (fVar.f27055r) {
                        return;
                    }
                    if (i10 <= fVar.Z0()) {
                        return;
                    }
                    if (i10 % 2 == fVar.x1() % 2) {
                        return;
                    }
                    hu.i iVar = new hu.i(i10, fVar, false, z10, au.e.Q(headerBlock));
                    fVar.r2(i10);
                    fVar.E1().put(Integer.valueOf(i10), iVar);
                    du.d i12 = fVar.f27056s.i();
                    i12.i(new b(fVar.Y0() + '[' + i10 + "] onStream", true, fVar, iVar), 0L);
                    return;
                }
                Unit unit = Unit.f31988a;
                B1.x(au.e.Q(headerBlock), z10);
            }
        }

        @Override // hu.h.c
        public void c(int i10, hu.b errorCode, ByteString debugData) {
            int i11;
            Object[] array;
            hu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            Intrinsics.checkNotNullParameter(debugData, "debugData");
            debugData.G();
            f fVar = this.f27076e;
            synchronized (fVar) {
                array = fVar.E1().values().toArray(new hu.i[0]);
                fVar.f27055r = true;
                Unit unit = Unit.f31988a;
            }
            for (hu.i iVar : (hu.i[]) array) {
                if (iVar.j() > i10 && iVar.t()) {
                    iVar.y(hu.b.REFUSED_STREAM);
                    this.f27076e.p2(iVar.j());
                }
            }
        }

        @Override // hu.h.c
        public void d(int i10, long j10) {
            if (i10 == 0) {
                f fVar = this.f27076e;
                synchronized (fVar) {
                    fVar.I = fVar.U1() + j10;
                    Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                    fVar.notifyAll();
                    Unit unit = Unit.f31988a;
                }
                return;
            }
            hu.i B1 = this.f27076e.B1(i10);
            if (B1 != null) {
                synchronized (B1) {
                    B1.a(j10);
                    Unit unit2 = Unit.f31988a;
                }
            }
        }

        @Override // hu.h.c
        public void e(int i10, int i11, List requestHeaders) {
            Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
            this.f27076e.i2(i11, requestHeaders);
        }

        @Override // hu.h.c
        public void g(boolean z10, int i10, BufferedSource source, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (this.f27076e.o2(i10)) {
                this.f27076e.f2(i10, source, i11, z10);
                return;
            }
            hu.i B1 = this.f27076e.B1(i10);
            if (B1 == null) {
                this.f27076e.B2(i10, hu.b.PROTOCOL_ERROR);
                long j10 = i11;
                this.f27076e.w2(j10);
                source.skip(j10);
                return;
            }
            B1.w(source, i11);
            if (z10) {
                B1.x(au.e.f5994b, true);
            }
        }

        @Override // hu.h.c
        public void h(boolean z10, int i10, int i11) {
            if (!z10) {
                this.f27076e.f27057t.i(new c(this.f27076e.Y0() + " ping", true, this.f27076e, i10, i11), 0L);
                return;
            }
            f fVar = this.f27076e;
            synchronized (fVar) {
                try {
                    if (i10 == 1) {
                        fVar.f27062y++;
                    } else if (i10 == 2) {
                        fVar.A++;
                    } else {
                        if (i10 == 3) {
                            fVar.B++;
                            Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                            fVar.notifyAll();
                        }
                        Unit unit = Unit.f31988a;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            l();
            return Unit.f31988a;
        }

        @Override // hu.h.c
        public void j(int i10, hu.b errorCode) {
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            if (this.f27076e.o2(i10)) {
                this.f27076e.j2(i10, errorCode);
                return;
            }
            hu.i p22 = this.f27076e.p2(i10);
            if (p22 != null) {
                p22.y(errorCode);
            }
        }

        /* JADX WARN: Type inference failed for: r13v1 */
        /* JADX WARN: Type inference failed for: r13v2, types: [T, hu.m] */
        /* JADX WARN: Type inference failed for: r13v3 */
        public final void k(boolean z10, m settings) {
            ?? r13;
            long c10;
            int i10;
            hu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(settings, "settings");
            Ref.ObjectRef objectRef = new Ref.ObjectRef();
            hu.j W1 = this.f27076e.W1();
            f fVar = this.f27076e;
            synchronized (W1) {
                synchronized (fVar) {
                    m A1 = fVar.A1();
                    if (z10) {
                        r13 = settings;
                    } else {
                        m mVar = new m();
                        mVar.g(A1);
                        mVar.g(settings);
                        r13 = mVar;
                    }
                    objectRef.element = r13;
                    c10 = r13.c() - A1.c();
                    if (c10 != 0 && !fVar.E1().isEmpty()) {
                        iVarArr = (hu.i[]) fVar.E1().values().toArray(new hu.i[0]);
                        fVar.s2((m) objectRef.element);
                        fVar.f27059v.i(new a(fVar.Y0() + " onSettings", true, fVar, objectRef), 0L);
                        Unit unit = Unit.f31988a;
                    }
                    iVarArr = null;
                    fVar.s2((m) objectRef.element);
                    fVar.f27059v.i(new a(fVar.Y0() + " onSettings", true, fVar, objectRef), 0L);
                    Unit unit2 = Unit.f31988a;
                }
                try {
                    fVar.W1().a((m) objectRef.element);
                } catch (IOException e10) {
                    fVar.S0(e10);
                }
                Unit unit3 = Unit.f31988a;
            }
            if (iVarArr != null) {
                for (hu.i iVar : iVarArr) {
                    synchronized (iVar) {
                        iVar.a(c10);
                        Unit unit4 = Unit.f31988a;
                    }
                }
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r0v0, types: [hu.b] */
        /* JADX WARN: Type inference failed for: r0v3 */
        /* JADX WARN: Type inference failed for: r0v5, types: [hu.h, java.io.Closeable] */
        public void l() {
            hu.b bVar;
            hu.b bVar2 = hu.b.INTERNAL_ERROR;
            IOException e10 = null;
            try {
                try {
                    this.f27075d.k(this);
                    do {
                    } while (this.f27075d.h(false, this));
                    hu.b bVar3 = hu.b.NO_ERROR;
                    try {
                        this.f27076e.N0(bVar3, hu.b.CANCEL, null);
                        bVar = bVar3;
                    } catch (IOException e11) {
                        e10 = e11;
                        hu.b bVar4 = hu.b.PROTOCOL_ERROR;
                        f fVar = this.f27076e;
                        fVar.N0(bVar4, bVar4, e10);
                        bVar = fVar;
                        bVar2 = this.f27075d;
                        au.e.m(bVar2);
                    }
                } catch (Throwable th2) {
                    th = th2;
                    this.f27076e.N0(bVar, bVar2, e10);
                    au.e.m(this.f27075d);
                    throw th;
                }
            } catch (IOException e12) {
                e10 = e12;
            } catch (Throwable th3) {
                th = th3;
                bVar = bVar2;
                this.f27076e.N0(bVar, bVar2, e10);
                au.e.m(this.f27075d);
                throw th;
            }
            bVar2 = this.f27075d;
            au.e.m(bVar2);
        }

        @Override // hu.h.c
        public void f() {
        }

        @Override // hu.h.c
        public void i(int i10, int i11, int i12, boolean z10) {
        }
    }
}
