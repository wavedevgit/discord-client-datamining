package eu;

import com.facebook.react.uimanager.events.PointerEventHelper;
import eu.h;
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
    private final eu.j K;
    private final d L;
    private final Set M;

    /* renamed from: d */
    private final boolean f22737d;

    /* renamed from: e */
    private final c f22738e;

    /* renamed from: i */
    private final Map f22739i;

    /* renamed from: o */
    private final String f22740o;

    /* renamed from: p */
    private int f22741p;

    /* renamed from: q */
    private int f22742q;

    /* renamed from: r */
    private boolean f22743r;

    /* renamed from: s */
    private final au.e f22744s;

    /* renamed from: t */
    private final au.d f22745t;

    /* renamed from: u */
    private final au.d f22746u;

    /* renamed from: v */
    private final au.d f22747v;

    /* renamed from: w */
    private final eu.l f22748w;

    /* renamed from: x */
    private long f22749x;

    /* renamed from: y */
    private long f22750y;

    /* renamed from: z */
    private long f22751z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a */
        private boolean f22752a;

        /* renamed from: b */
        private final au.e f22753b;

        /* renamed from: c */
        public Socket f22754c;

        /* renamed from: d */
        public String f22755d;

        /* renamed from: e */
        public BufferedSource f22756e;

        /* renamed from: f */
        public BufferedSink f22757f;

        /* renamed from: g */
        private c f22758g;

        /* renamed from: h */
        private eu.l f22759h;

        /* renamed from: i */
        private int f22760i;

        public a(boolean z10, au.e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            this.f22752a = z10;
            this.f22753b = taskRunner;
            this.f22758g = c.f22762b;
            this.f22759h = eu.l.f22864b;
        }

        public final f a() {
            return new f(this);
        }

        public final boolean b() {
            return this.f22752a;
        }

        public final String c() {
            String str = this.f22755d;
            if (str != null) {
                return str;
            }
            Intrinsics.throwUninitializedPropertyAccessException("connectionName");
            return null;
        }

        public final c d() {
            return this.f22758g;
        }

        public final int e() {
            return this.f22760i;
        }

        public final eu.l f() {
            return this.f22759h;
        }

        public final BufferedSink g() {
            BufferedSink bufferedSink = this.f22757f;
            if (bufferedSink != null) {
                return bufferedSink;
            }
            Intrinsics.throwUninitializedPropertyAccessException("sink");
            return null;
        }

        public final Socket h() {
            Socket socket = this.f22754c;
            if (socket != null) {
                return socket;
            }
            Intrinsics.throwUninitializedPropertyAccessException("socket");
            return null;
        }

        public final BufferedSource i() {
            BufferedSource bufferedSource = this.f22756e;
            if (bufferedSource != null) {
                return bufferedSource;
            }
            Intrinsics.throwUninitializedPropertyAccessException("source");
            return null;
        }

        public final au.e j() {
            return this.f22753b;
        }

        public final a k(c listener) {
            Intrinsics.checkNotNullParameter(listener, "listener");
            this.f22758g = listener;
            return this;
        }

        public final a l(int i10) {
            this.f22760i = i10;
            return this;
        }

        public final void m(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f22755d = str;
        }

        public final void n(BufferedSink bufferedSink) {
            Intrinsics.checkNotNullParameter(bufferedSink, "<set-?>");
            this.f22757f = bufferedSink;
        }

        public final void o(Socket socket) {
            Intrinsics.checkNotNullParameter(socket, "<set-?>");
            this.f22754c = socket;
        }

        public final void p(BufferedSource bufferedSource) {
            Intrinsics.checkNotNullParameter(bufferedSource, "<set-?>");
            this.f22756e = bufferedSource;
        }

        public final a q(Socket socket, String peerName, BufferedSource source, BufferedSink sink) {
            String str;
            Intrinsics.checkNotNullParameter(socket, "socket");
            Intrinsics.checkNotNullParameter(peerName, "peerName");
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            o(socket);
            if (this.f22752a) {
                str = xt.e.f53572i + ' ' + peerName;
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
        public static final b f22761a = new b(null);

        /* renamed from: b */
        public static final c f22762b = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends c {
            a() {
            }

            @Override // eu.f.c
            public void b(eu.i stream) {
                Intrinsics.checkNotNullParameter(stream, "stream");
                stream.d(eu.b.REFUSED_STREAM, null);
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

        public abstract void b(eu.i iVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends au.a {

        /* renamed from: e */
        final /* synthetic */ f f22775e;

        /* renamed from: f */
        final /* synthetic */ int f22776f;

        /* renamed from: g */
        final /* synthetic */ Buffer f22777g;

        /* renamed from: h */
        final /* synthetic */ int f22778h;

        /* renamed from: i */
        final /* synthetic */ boolean f22779i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String str, boolean z10, f fVar, int i10, Buffer buffer, int i11, boolean z11) {
            super(str, z10);
            this.f22775e = fVar;
            this.f22776f = i10;
            this.f22777g = buffer;
            this.f22778h = i11;
            this.f22779i = z11;
        }

        @Override // au.a
        public long f() {
            try {
                boolean d10 = this.f22775e.f22748w.d(this.f22776f, this.f22777g, this.f22778h, this.f22779i);
                if (d10) {
                    this.f22775e.W1().V(this.f22776f, eu.b.CANCEL);
                }
                if (d10 || this.f22779i) {
                    synchronized (this.f22775e) {
                        this.f22775e.M.remove(Integer.valueOf(this.f22776f));
                    }
                    return -1L;
                }
                return -1L;
            } catch (IOException unused) {
                return -1L;
            }
        }
    }

    /* renamed from: eu.f$f */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0306f extends au.a {

        /* renamed from: e */
        final /* synthetic */ f f22780e;

        /* renamed from: f */
        final /* synthetic */ int f22781f;

        /* renamed from: g */
        final /* synthetic */ List f22782g;

        /* renamed from: h */
        final /* synthetic */ boolean f22783h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0306f(String str, boolean z10, f fVar, int i10, List list, boolean z11) {
            super(str, z10);
            this.f22780e = fVar;
            this.f22781f = i10;
            this.f22782g = list;
            this.f22783h = z11;
        }

        @Override // au.a
        public long f() {
            boolean c10 = this.f22780e.f22748w.c(this.f22781f, this.f22782g, this.f22783h);
            if (c10) {
                try {
                    this.f22780e.W1().V(this.f22781f, eu.b.CANCEL);
                } catch (IOException unused) {
                    return -1L;
                }
            }
            if (c10 || this.f22783h) {
                synchronized (this.f22780e) {
                    this.f22780e.M.remove(Integer.valueOf(this.f22781f));
                }
                return -1L;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends au.a {

        /* renamed from: e */
        final /* synthetic */ f f22784e;

        /* renamed from: f */
        final /* synthetic */ int f22785f;

        /* renamed from: g */
        final /* synthetic */ List f22786g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, boolean z10, f fVar, int i10, List list) {
            super(str, z10);
            this.f22784e = fVar;
            this.f22785f = i10;
            this.f22786g = list;
        }

        @Override // au.a
        public long f() {
            if (this.f22784e.f22748w.b(this.f22785f, this.f22786g)) {
                try {
                    this.f22784e.W1().V(this.f22785f, eu.b.CANCEL);
                    synchronized (this.f22784e) {
                        this.f22784e.M.remove(Integer.valueOf(this.f22785f));
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
    public static final class h extends au.a {

        /* renamed from: e */
        final /* synthetic */ f f22787e;

        /* renamed from: f */
        final /* synthetic */ int f22788f;

        /* renamed from: g */
        final /* synthetic */ eu.b f22789g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, f fVar, int i10, eu.b bVar) {
            super(str, z10);
            this.f22787e = fVar;
            this.f22788f = i10;
            this.f22789g = bVar;
        }

        @Override // au.a
        public long f() {
            this.f22787e.f22748w.a(this.f22788f, this.f22789g);
            synchronized (this.f22787e) {
                this.f22787e.M.remove(Integer.valueOf(this.f22788f));
                Unit unit = Unit.f32464a;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i extends au.a {

        /* renamed from: e */
        final /* synthetic */ f f22790e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(String str, boolean z10, f fVar) {
            super(str, z10);
            this.f22790e = fVar;
        }

        @Override // au.a
        public long f() {
            this.f22790e.z2(false, 2, 0);
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends au.a {

        /* renamed from: e */
        final /* synthetic */ f f22791e;

        /* renamed from: f */
        final /* synthetic */ long f22792f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(String str, f fVar, long j10) {
            super(str, false, 2, null);
            this.f22791e = fVar;
            this.f22792f = j10;
        }

        @Override // au.a
        public long f() {
            boolean z10;
            synchronized (this.f22791e) {
                if (this.f22791e.f22750y >= this.f22791e.f22749x) {
                    this.f22791e.f22749x++;
                    z10 = false;
                } else {
                    z10 = true;
                }
            }
            if (z10) {
                this.f22791e.R0(null);
                return -1L;
            }
            this.f22791e.z2(false, 1, 0);
            return this.f22792f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class k extends au.a {

        /* renamed from: e */
        final /* synthetic */ f f22793e;

        /* renamed from: f */
        final /* synthetic */ int f22794f;

        /* renamed from: g */
        final /* synthetic */ eu.b f22795g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(String str, boolean z10, f fVar, int i10, eu.b bVar) {
            super(str, z10);
            this.f22793e = fVar;
            this.f22794f = i10;
            this.f22795g = bVar;
        }

        @Override // au.a
        public long f() {
            try {
                this.f22793e.A2(this.f22794f, this.f22795g);
                return -1L;
            } catch (IOException e10) {
                this.f22793e.R0(e10);
                return -1L;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class l extends au.a {

        /* renamed from: e */
        final /* synthetic */ f f22796e;

        /* renamed from: f */
        final /* synthetic */ int f22797f;

        /* renamed from: g */
        final /* synthetic */ long f22798g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(String str, boolean z10, f fVar, int i10, long j10) {
            super(str, z10);
            this.f22796e = fVar;
            this.f22797f = i10;
            this.f22798g = j10;
        }

        @Override // au.a
        public long f() {
            try {
                this.f22796e.W1().C0(this.f22797f, this.f22798g);
                return -1L;
            } catch (IOException e10) {
                this.f22796e.R0(e10);
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
        this.f22737d = b10;
        this.f22738e = builder.d();
        this.f22739i = new LinkedHashMap();
        String c10 = builder.c();
        this.f22740o = c10;
        if (builder.b()) {
            i10 = 3;
        } else {
            i10 = 2;
        }
        this.f22742q = i10;
        au.e j10 = builder.j();
        this.f22744s = j10;
        au.d i11 = j10.i();
        this.f22745t = i11;
        this.f22746u = j10.i();
        this.f22747v = j10.i();
        this.f22748w = builder.f();
        m mVar = new m();
        if (builder.b()) {
            mVar.h(7, PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
        }
        this.D = mVar;
        m mVar2 = O;
        this.E = mVar2;
        this.I = mVar2.c();
        this.J = builder.h();
        this.K = new eu.j(builder.g(), b10);
        this.L = new d(this, new eu.h(builder.i(), b10));
        this.M = new LinkedHashSet();
        if (builder.e() != 0) {
            long nanos = TimeUnit.MILLISECONDS.toNanos(builder.e());
            i11.i(new j(c10 + " ping", this, nanos), nanos);
        }
    }

    public final void R0(IOException iOException) {
        eu.b bVar = eu.b.PROTOCOL_ERROR;
        M0(bVar, bVar, iOException);
    }

    /* JADX WARN: Removed duplicated region for block: B:104:0x0070  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x004d A[Catch: all -> 0x0043, TryCatch #1 {all -> 0x0043, blocks: (B:79:0x0027, B:81:0x002c, B:83:0x0034, B:90:0x0047, B:92:0x004d, B:93:0x0056, B:111:0x0082, B:112:0x0087), top: B:120:0x001a }] */
    /* JADX WARN: Removed duplicated region for block: B:96:0x005b A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /* JADX WARN: Removed duplicated region for block: B:99:0x0064 A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final eu.i b2(int r10, java.util.List r11, boolean r12) {
        /*
            r9 = this;
            r3 = r12 ^ 1
            eu.j r6 = r9.K
            monitor-enter(r6)
            monitor-enter(r9)     // Catch: java.lang.Throwable -> L8a
            int r0 = r9.f22742q     // Catch: java.lang.Throwable -> L7e
            r1 = 1073741823(0x3fffffff, float:1.9999999)
            if (r0 <= r1) goto L18
            eu.b r0 = eu.b.REFUSED_STREAM     // Catch: java.lang.Throwable -> L13
            r9.t2(r0)     // Catch: java.lang.Throwable -> L13
            goto L18
        L13:
            r0 = move-exception
            r10 = r0
            r2 = r9
            goto L88
        L18:
            boolean r0 = r9.f22743r     // Catch: java.lang.Throwable -> L7e
            if (r0 != 0) goto L81
            int r1 = r9.f22742q     // Catch: java.lang.Throwable -> L7e
            int r0 = r1 + 2
            r9.f22742q = r0     // Catch: java.lang.Throwable -> L7e
            eu.i r0 = new eu.i     // Catch: java.lang.Throwable -> L7e
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
            java.util.Map r4 = r2.f22739i     // Catch: java.lang.Throwable -> L43
            java.lang.Integer r5 = java.lang.Integer.valueOf(r1)     // Catch: java.lang.Throwable -> L43
            r4.put(r5, r0)     // Catch: java.lang.Throwable -> L43
        L56:
            kotlin.Unit r4 = kotlin.Unit.f32464a     // Catch: java.lang.Throwable -> L43
            monitor-exit(r9)     // Catch: java.lang.Throwable -> L61
            if (r10 != 0) goto L64
            eu.j r10 = r2.K     // Catch: java.lang.Throwable -> L61
            r10.E(r3, r1, r11)     // Catch: java.lang.Throwable -> L61
            goto L6d
        L61:
            r0 = move-exception
        L62:
            r10 = r0
            goto L8d
        L64:
            boolean r3 = r2.f22737d     // Catch: java.lang.Throwable -> L61
            if (r3 != 0) goto L76
            eu.j r3 = r2.K     // Catch: java.lang.Throwable -> L61
            r3.N(r10, r1, r11)     // Catch: java.lang.Throwable -> L61
        L6d:
            monitor-exit(r6)
            if (r12 == 0) goto L75
            eu.j r10 = r2.K
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
            eu.a r10 = new eu.a     // Catch: java.lang.Throwable -> L43
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
        throw new UnsupportedOperationException("Method not decompiled: eu.f.b2(int, java.util.List, boolean):eu.i");
    }

    public static /* synthetic */ void v2(f fVar, boolean z10, au.e eVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        if ((i10 & 2) != 0) {
            eVar = au.e.f6153i;
        }
        fVar.u2(z10, eVar);
    }

    public final m A1() {
        return this.E;
    }

    public final void A2(int i10, eu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        this.K.V(i10, statusCode);
    }

    public final synchronized eu.i B1(int i10) {
        return (eu.i) this.f22739i.get(Integer.valueOf(i10));
    }

    public final void B2(int i10, eu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        au.d dVar = this.f22745t;
        dVar.i(new k(this.f22740o + '[' + i10 + "] writeSynReset", true, this, i10, errorCode), 0L);
    }

    public final void C2(int i10, long j10) {
        au.d dVar = this.f22745t;
        dVar.i(new l(this.f22740o + '[' + i10 + "] windowUpdate", true, this, i10, j10), 0L);
    }

    public final Map E1() {
        return this.f22739i;
    }

    public final void M0(eu.b connectionCode, eu.b streamCode, IOException iOException) {
        int i10;
        Object[] objArr;
        Intrinsics.checkNotNullParameter(connectionCode, "connectionCode");
        Intrinsics.checkNotNullParameter(streamCode, "streamCode");
        if (xt.e.f53571h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        try {
            t2(connectionCode);
        } catch (IOException unused) {
        }
        synchronized (this) {
            try {
                if (!this.f22739i.isEmpty()) {
                    objArr = this.f22739i.values().toArray(new eu.i[0]);
                    this.f22739i.clear();
                } else {
                    objArr = null;
                }
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        eu.i[] iVarArr = (eu.i[]) objArr;
        if (iVarArr != null) {
            for (eu.i iVar : iVarArr) {
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
        this.f22745t.n();
        this.f22746u.n();
        this.f22747v.n();
    }

    public final long U1() {
        return this.I;
    }

    public final boolean V0() {
        return this.f22737d;
    }

    public final eu.j W1() {
        return this.K;
    }

    public final String Y0() {
        return this.f22740o;
    }

    public final synchronized boolean Y1(long j10) {
        if (this.f22743r) {
            return false;
        }
        if (this.A < this.f22751z) {
            if (j10 >= this.C) {
                return false;
            }
        }
        return true;
    }

    public final int Z0() {
        return this.f22741p;
    }

    public final eu.i c2(List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        return b2(0, requestHeaders, z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        M0(eu.b.NO_ERROR, eu.b.CANCEL, null);
    }

    public final c e1() {
        return this.f22738e;
    }

    public final void f2(int i10, BufferedSource source, int i11, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        Buffer buffer = new Buffer();
        long j10 = i11;
        source.T0(j10);
        source.read(buffer, j10);
        this.f22746u.i(new e(this.f22740o + '[' + i10 + "] onData", true, this, i10, buffer, i11, z10), 0L);
    }

    public final void flush() {
        this.K.flush();
    }

    public final void h2(int i10, List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        au.d dVar = this.f22746u;
        dVar.i(new C0306f(this.f22740o + '[' + i10 + "] onHeaders", true, this, i10, requestHeaders, z10), 0L);
    }

    public final void i2(int i10, List requestHeaders) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        synchronized (this) {
            try {
                if (this.M.contains(Integer.valueOf(i10))) {
                    try {
                        B2(i10, eu.b.PROTOCOL_ERROR);
                        return;
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.M.add(Integer.valueOf(i10));
                au.d dVar = this.f22746u;
                dVar.i(new g(this.f22740o + '[' + i10 + "] onRequest", true, this, i10, requestHeaders), 0L);
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    public final void j2(int i10, eu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        au.d dVar = this.f22746u;
        dVar.i(new h(this.f22740o + '[' + i10 + "] onReset", true, this, i10, errorCode), 0L);
    }

    public final boolean o2(int i10) {
        if (i10 != 0 && (i10 & 1) == 0) {
            return true;
        }
        return false;
    }

    public final synchronized eu.i p2(int i10) {
        eu.i iVar;
        iVar = (eu.i) this.f22739i.remove(Integer.valueOf(i10));
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
        notifyAll();
        return iVar;
    }

    public final void q2() {
        synchronized (this) {
            long j10 = this.A;
            long j11 = this.f22751z;
            if (j10 < j11) {
                return;
            }
            this.f22751z = j11 + 1;
            this.C = System.nanoTime() + 1000000000;
            Unit unit = Unit.f32464a;
            au.d dVar = this.f22745t;
            dVar.i(new i(this.f22740o + " ping", true, this), 0L);
        }
    }

    public final void r2(int i10) {
        this.f22741p = i10;
    }

    public final void s2(m mVar) {
        Intrinsics.checkNotNullParameter(mVar, "<set-?>");
        this.E = mVar;
    }

    public final void t2(eu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        synchronized (this.K) {
            Ref.IntRef intRef = new Ref.IntRef();
            synchronized (this) {
                if (this.f22743r) {
                    return;
                }
                this.f22743r = true;
                int i10 = this.f22741p;
                intRef.element = i10;
                Unit unit = Unit.f32464a;
                this.K.B(i10, statusCode, xt.e.f53564a);
            }
        }
    }

    public final void u2(boolean z10, au.e taskRunner) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        if (z10) {
            this.K.h();
            this.K.A0(this.D);
            int c10 = this.D.c();
            if (c10 != 65535) {
                this.K.C0(0, c10 - 65535);
            }
        }
        taskRunner.i().i(new au.c(this.f22740o, true, this.L), 0L);
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
        return this.f22742q;
    }

    /* JADX WARN: Code restructure failed: missing block: B:58:0x0038, code lost:
        throw new java.io.IOException("stream closed");
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x003a, code lost:
        r2 = java.lang.Math.min((int) java.lang.Math.min(r12, r6 - r4), r8.K.F());
        r6 = r2;
        r8.H += r6;
        r4 = kotlin.Unit.f32464a;
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
            eu.j r12 = r8.K
            r12.l(r10, r9, r11, r3)
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
            java.util.Map r2 = r8.f22739i     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
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
            eu.j r4 = r8.K     // Catch: java.lang.Throwable -> L2f
            int r4 = r4.F()     // Catch: java.lang.Throwable -> L2f
            int r2 = java.lang.Math.min(r2, r4)     // Catch: java.lang.Throwable -> L2f
            long r4 = r8.H     // Catch: java.lang.Throwable -> L2f
            long r6 = (long) r2     // Catch: java.lang.Throwable -> L2f
            long r4 = r4 + r6
            r8.H = r4     // Catch: java.lang.Throwable -> L2f
            kotlin.Unit r4 = kotlin.Unit.f32464a     // Catch: java.lang.Throwable -> L2f
            monitor-exit(r8)
            long r12 = r12 - r6
            eu.j r4 = r8.K
            if (r10 == 0) goto L5d
            int r5 = (r12 > r0 ? 1 : (r12 == r0 ? 0 : -1))
            if (r5 != 0) goto L5d
            r5 = 1
            goto L5e
        L5d:
            r5 = r3
        L5e:
            r4.l(r5, r9, r11, r2)
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
        throw new UnsupportedOperationException("Method not decompiled: eu.f.x2(int, boolean, okio.Buffer, long):void");
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
            R0(e10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d implements h.c, Function0 {

        /* renamed from: d */
        private final eu.h f22763d;

        /* renamed from: e */
        final /* synthetic */ f f22764e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends au.a {

            /* renamed from: e */
            final /* synthetic */ f f22765e;

            /* renamed from: f */
            final /* synthetic */ Ref.ObjectRef f22766f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, boolean z10, f fVar, Ref.ObjectRef objectRef) {
                super(str, z10);
                this.f22765e = fVar;
                this.f22766f = objectRef;
            }

            @Override // au.a
            public long f() {
                this.f22765e.e1().a(this.f22765e, (m) this.f22766f.element);
                return -1L;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends au.a {

            /* renamed from: e */
            final /* synthetic */ f f22767e;

            /* renamed from: f */
            final /* synthetic */ eu.i f22768f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, boolean z10, f fVar, eu.i iVar) {
                super(str, z10);
                this.f22767e = fVar;
                this.f22768f = iVar;
            }

            @Override // au.a
            public long f() {
                try {
                    this.f22767e.e1().b(this.f22768f);
                    return -1L;
                } catch (IOException e10) {
                    gu.h g10 = gu.h.f26650a.g();
                    g10.k("Http2Connection.Listener failure for " + this.f22767e.Y0(), 4, e10);
                    try {
                        this.f22768f.d(eu.b.PROTOCOL_ERROR, e10);
                        return -1L;
                    } catch (IOException unused) {
                        return -1L;
                    }
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends au.a {

            /* renamed from: e */
            final /* synthetic */ f f22769e;

            /* renamed from: f */
            final /* synthetic */ int f22770f;

            /* renamed from: g */
            final /* synthetic */ int f22771g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, boolean z10, f fVar, int i10, int i11) {
                super(str, z10);
                this.f22769e = fVar;
                this.f22770f = i10;
                this.f22771g = i11;
            }

            @Override // au.a
            public long f() {
                this.f22769e.z2(true, this.f22770f, this.f22771g);
                return -1L;
            }
        }

        /* renamed from: eu.f$d$d */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0305d extends au.a {

            /* renamed from: e */
            final /* synthetic */ d f22772e;

            /* renamed from: f */
            final /* synthetic */ boolean f22773f;

            /* renamed from: g */
            final /* synthetic */ m f22774g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0305d(String str, boolean z10, d dVar, boolean z11, m mVar) {
                super(str, z10);
                this.f22772e = dVar;
                this.f22773f = z11;
                this.f22774g = mVar;
            }

            @Override // au.a
            public long f() {
                this.f22772e.k(this.f22773f, this.f22774g);
                return -1L;
            }
        }

        public d(f fVar, eu.h reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            this.f22764e = fVar;
            this.f22763d = reader;
        }

        @Override // eu.h.c
        public void a(boolean z10, m settings) {
            Intrinsics.checkNotNullParameter(settings, "settings");
            au.d dVar = this.f22764e.f22745t;
            dVar.i(new C0305d(this.f22764e.Y0() + " applyAndAckSettings", true, this, z10, settings), 0L);
        }

        @Override // eu.h.c
        public void b(boolean z10, int i10, int i11, List headerBlock) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f22764e.o2(i10)) {
                this.f22764e.h2(i10, headerBlock, z10);
                return;
            }
            f fVar = this.f22764e;
            synchronized (fVar) {
                eu.i B1 = fVar.B1(i10);
                if (B1 == null) {
                    if (fVar.f22743r) {
                        return;
                    }
                    if (i10 <= fVar.Z0()) {
                        return;
                    }
                    if (i10 % 2 == fVar.x1() % 2) {
                        return;
                    }
                    eu.i iVar = new eu.i(i10, fVar, false, z10, xt.e.Q(headerBlock));
                    fVar.r2(i10);
                    fVar.E1().put(Integer.valueOf(i10), iVar);
                    au.d i12 = fVar.f22744s.i();
                    i12.i(new b(fVar.Y0() + '[' + i10 + "] onStream", true, fVar, iVar), 0L);
                    return;
                }
                Unit unit = Unit.f32464a;
                B1.x(xt.e.Q(headerBlock), z10);
            }
        }

        @Override // eu.h.c
        public void c(int i10, eu.b errorCode, ByteString debugData) {
            int i11;
            Object[] array;
            eu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            Intrinsics.checkNotNullParameter(debugData, "debugData");
            debugData.G();
            f fVar = this.f22764e;
            synchronized (fVar) {
                array = fVar.E1().values().toArray(new eu.i[0]);
                fVar.f22743r = true;
                Unit unit = Unit.f32464a;
            }
            for (eu.i iVar : (eu.i[]) array) {
                if (iVar.j() > i10 && iVar.t()) {
                    iVar.y(eu.b.REFUSED_STREAM);
                    this.f22764e.p2(iVar.j());
                }
            }
        }

        @Override // eu.h.c
        public void d(int i10, long j10) {
            if (i10 == 0) {
                f fVar = this.f22764e;
                synchronized (fVar) {
                    fVar.I = fVar.U1() + j10;
                    Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                    fVar.notifyAll();
                    Unit unit = Unit.f32464a;
                }
                return;
            }
            eu.i B1 = this.f22764e.B1(i10);
            if (B1 != null) {
                synchronized (B1) {
                    B1.a(j10);
                    Unit unit2 = Unit.f32464a;
                }
            }
        }

        @Override // eu.h.c
        public void e(int i10, int i11, List requestHeaders) {
            Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
            this.f22764e.i2(i11, requestHeaders);
        }

        @Override // eu.h.c
        public void g(int i10, eu.b errorCode) {
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            if (this.f22764e.o2(i10)) {
                this.f22764e.j2(i10, errorCode);
                return;
            }
            eu.i p22 = this.f22764e.p2(i10);
            if (p22 != null) {
                p22.y(errorCode);
            }
        }

        @Override // eu.h.c
        public void h(boolean z10, int i10, BufferedSource source, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (this.f22764e.o2(i10)) {
                this.f22764e.f2(i10, source, i11, z10);
                return;
            }
            eu.i B1 = this.f22764e.B1(i10);
            if (B1 == null) {
                this.f22764e.B2(i10, eu.b.PROTOCOL_ERROR);
                long j10 = i11;
                this.f22764e.w2(j10);
                source.skip(j10);
                return;
            }
            B1.w(source, i11);
            if (z10) {
                B1.x(xt.e.f53565b, true);
            }
        }

        @Override // eu.h.c
        public void i(boolean z10, int i10, int i11) {
            if (!z10) {
                this.f22764e.f22745t.i(new c(this.f22764e.Y0() + " ping", true, this.f22764e, i10, i11), 0L);
                return;
            }
            f fVar = this.f22764e;
            synchronized (fVar) {
                try {
                    if (i10 == 1) {
                        fVar.f22750y++;
                    } else if (i10 == 2) {
                        fVar.A++;
                    } else {
                        if (i10 == 3) {
                            fVar.B++;
                            Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                            fVar.notifyAll();
                        }
                        Unit unit = Unit.f32464a;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            l();
            return Unit.f32464a;
        }

        /* JADX WARN: Type inference failed for: r13v1 */
        /* JADX WARN: Type inference failed for: r13v2, types: [eu.m, T] */
        /* JADX WARN: Type inference failed for: r13v3 */
        public final void k(boolean z10, m settings) {
            ?? r13;
            long c10;
            int i10;
            eu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(settings, "settings");
            Ref.ObjectRef objectRef = new Ref.ObjectRef();
            eu.j W1 = this.f22764e.W1();
            f fVar = this.f22764e;
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
                        iVarArr = (eu.i[]) fVar.E1().values().toArray(new eu.i[0]);
                        fVar.s2((m) objectRef.element);
                        fVar.f22747v.i(new a(fVar.Y0() + " onSettings", true, fVar, objectRef), 0L);
                        Unit unit = Unit.f32464a;
                    }
                    iVarArr = null;
                    fVar.s2((m) objectRef.element);
                    fVar.f22747v.i(new a(fVar.Y0() + " onSettings", true, fVar, objectRef), 0L);
                    Unit unit2 = Unit.f32464a;
                }
                try {
                    fVar.W1().a((m) objectRef.element);
                } catch (IOException e10) {
                    fVar.R0(e10);
                }
                Unit unit3 = Unit.f32464a;
            }
            if (iVarArr != null) {
                for (eu.i iVar : iVarArr) {
                    synchronized (iVar) {
                        iVar.a(c10);
                        Unit unit4 = Unit.f32464a;
                    }
                }
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r0v0, types: [eu.b] */
        /* JADX WARN: Type inference failed for: r0v3 */
        /* JADX WARN: Type inference failed for: r0v5, types: [eu.h, java.io.Closeable] */
        public void l() {
            eu.b bVar;
            eu.b bVar2 = eu.b.INTERNAL_ERROR;
            IOException e10 = null;
            try {
                try {
                    this.f22763d.l(this);
                    do {
                    } while (this.f22763d.h(false, this));
                    eu.b bVar3 = eu.b.NO_ERROR;
                    try {
                        this.f22764e.M0(bVar3, eu.b.CANCEL, null);
                        bVar = bVar3;
                    } catch (IOException e11) {
                        e10 = e11;
                        eu.b bVar4 = eu.b.PROTOCOL_ERROR;
                        f fVar = this.f22764e;
                        fVar.M0(bVar4, bVar4, e10);
                        bVar = fVar;
                        bVar2 = this.f22763d;
                        xt.e.m(bVar2);
                    }
                } catch (Throwable th2) {
                    th = th2;
                    this.f22764e.M0(bVar, bVar2, e10);
                    xt.e.m(this.f22763d);
                    throw th;
                }
            } catch (IOException e12) {
                e10 = e12;
            } catch (Throwable th3) {
                th = th3;
                bVar = bVar2;
                this.f22764e.M0(bVar, bVar2, e10);
                xt.e.m(this.f22763d);
                throw th;
            }
            bVar2 = this.f22763d;
            xt.e.m(bVar2);
        }

        @Override // eu.h.c
        public void f() {
        }

        @Override // eu.h.c
        public void j(int i10, int i11, int i12, boolean z10) {
        }
    }
}
