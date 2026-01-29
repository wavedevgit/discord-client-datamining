package bu;

import bu.h;
import com.facebook.react.uimanager.events.PointerEventHelper;
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
    private final bu.j K;
    private final d L;
    private final Set M;

    /* renamed from: d */
    private final boolean f7893d;

    /* renamed from: e */
    private final c f7894e;

    /* renamed from: i */
    private final Map f7895i;

    /* renamed from: o */
    private final String f7896o;

    /* renamed from: p */
    private int f7897p;

    /* renamed from: q */
    private int f7898q;

    /* renamed from: r */
    private boolean f7899r;

    /* renamed from: s */
    private final xt.e f7900s;

    /* renamed from: t */
    private final xt.d f7901t;

    /* renamed from: u */
    private final xt.d f7902u;

    /* renamed from: v */
    private final xt.d f7903v;

    /* renamed from: w */
    private final bu.l f7904w;

    /* renamed from: x */
    private long f7905x;

    /* renamed from: y */
    private long f7906y;

    /* renamed from: z */
    private long f7907z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a */
        private boolean f7908a;

        /* renamed from: b */
        private final xt.e f7909b;

        /* renamed from: c */
        public Socket f7910c;

        /* renamed from: d */
        public String f7911d;

        /* renamed from: e */
        public BufferedSource f7912e;

        /* renamed from: f */
        public BufferedSink f7913f;

        /* renamed from: g */
        private c f7914g;

        /* renamed from: h */
        private bu.l f7915h;

        /* renamed from: i */
        private int f7916i;

        public a(boolean z10, xt.e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            this.f7908a = z10;
            this.f7909b = taskRunner;
            this.f7914g = c.f7918b;
            this.f7915h = bu.l.f8020b;
        }

        public final f a() {
            return new f(this);
        }

        public final boolean b() {
            return this.f7908a;
        }

        public final String c() {
            String str = this.f7911d;
            if (str != null) {
                return str;
            }
            Intrinsics.throwUninitializedPropertyAccessException("connectionName");
            return null;
        }

        public final c d() {
            return this.f7914g;
        }

        public final int e() {
            return this.f7916i;
        }

        public final bu.l f() {
            return this.f7915h;
        }

        public final BufferedSink g() {
            BufferedSink bufferedSink = this.f7913f;
            if (bufferedSink != null) {
                return bufferedSink;
            }
            Intrinsics.throwUninitializedPropertyAccessException("sink");
            return null;
        }

        public final Socket h() {
            Socket socket = this.f7910c;
            if (socket != null) {
                return socket;
            }
            Intrinsics.throwUninitializedPropertyAccessException("socket");
            return null;
        }

        public final BufferedSource i() {
            BufferedSource bufferedSource = this.f7912e;
            if (bufferedSource != null) {
                return bufferedSource;
            }
            Intrinsics.throwUninitializedPropertyAccessException("source");
            return null;
        }

        public final xt.e j() {
            return this.f7909b;
        }

        public final a k(c listener) {
            Intrinsics.checkNotNullParameter(listener, "listener");
            this.f7914g = listener;
            return this;
        }

        public final a l(int i10) {
            this.f7916i = i10;
            return this;
        }

        public final void m(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f7911d = str;
        }

        public final void n(BufferedSink bufferedSink) {
            Intrinsics.checkNotNullParameter(bufferedSink, "<set-?>");
            this.f7913f = bufferedSink;
        }

        public final void o(Socket socket) {
            Intrinsics.checkNotNullParameter(socket, "<set-?>");
            this.f7910c = socket;
        }

        public final void p(BufferedSource bufferedSource) {
            Intrinsics.checkNotNullParameter(bufferedSource, "<set-?>");
            this.f7912e = bufferedSource;
        }

        public final a q(Socket socket, String peerName, BufferedSource source, BufferedSink sink) {
            String str;
            Intrinsics.checkNotNullParameter(socket, "socket");
            Intrinsics.checkNotNullParameter(peerName, "peerName");
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            o(socket);
            if (this.f7908a) {
                str = ut.e.f50564i + ' ' + peerName;
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
        public static final b f7917a = new b(null);

        /* renamed from: b */
        public static final c f7918b = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends c {
            a() {
            }

            @Override // bu.f.c
            public void b(bu.i stream) {
                Intrinsics.checkNotNullParameter(stream, "stream");
                stream.d(bu.b.REFUSED_STREAM, null);
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

        public abstract void b(bu.i iVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends xt.a {

        /* renamed from: e */
        final /* synthetic */ f f7931e;

        /* renamed from: f */
        final /* synthetic */ int f7932f;

        /* renamed from: g */
        final /* synthetic */ Buffer f7933g;

        /* renamed from: h */
        final /* synthetic */ int f7934h;

        /* renamed from: i */
        final /* synthetic */ boolean f7935i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String str, boolean z10, f fVar, int i10, Buffer buffer, int i11, boolean z11) {
            super(str, z10);
            this.f7931e = fVar;
            this.f7932f = i10;
            this.f7933g = buffer;
            this.f7934h = i11;
            this.f7935i = z11;
        }

        @Override // xt.a
        public long f() {
            try {
                boolean d10 = this.f7931e.f7904w.d(this.f7932f, this.f7933g, this.f7934h, this.f7935i);
                if (d10) {
                    this.f7931e.W1().V(this.f7932f, bu.b.CANCEL);
                }
                if (d10 || this.f7935i) {
                    synchronized (this.f7931e) {
                        this.f7931e.M.remove(Integer.valueOf(this.f7932f));
                    }
                    return -1L;
                }
                return -1L;
            } catch (IOException unused) {
                return -1L;
            }
        }
    }

    /* renamed from: bu.f$f */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0125f extends xt.a {

        /* renamed from: e */
        final /* synthetic */ f f7936e;

        /* renamed from: f */
        final /* synthetic */ int f7937f;

        /* renamed from: g */
        final /* synthetic */ List f7938g;

        /* renamed from: h */
        final /* synthetic */ boolean f7939h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0125f(String str, boolean z10, f fVar, int i10, List list, boolean z11) {
            super(str, z10);
            this.f7936e = fVar;
            this.f7937f = i10;
            this.f7938g = list;
            this.f7939h = z11;
        }

        @Override // xt.a
        public long f() {
            boolean c10 = this.f7936e.f7904w.c(this.f7937f, this.f7938g, this.f7939h);
            if (c10) {
                try {
                    this.f7936e.W1().V(this.f7937f, bu.b.CANCEL);
                } catch (IOException unused) {
                    return -1L;
                }
            }
            if (c10 || this.f7939h) {
                synchronized (this.f7936e) {
                    this.f7936e.M.remove(Integer.valueOf(this.f7937f));
                }
                return -1L;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends xt.a {

        /* renamed from: e */
        final /* synthetic */ f f7940e;

        /* renamed from: f */
        final /* synthetic */ int f7941f;

        /* renamed from: g */
        final /* synthetic */ List f7942g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, boolean z10, f fVar, int i10, List list) {
            super(str, z10);
            this.f7940e = fVar;
            this.f7941f = i10;
            this.f7942g = list;
        }

        @Override // xt.a
        public long f() {
            if (this.f7940e.f7904w.b(this.f7941f, this.f7942g)) {
                try {
                    this.f7940e.W1().V(this.f7941f, bu.b.CANCEL);
                    synchronized (this.f7940e) {
                        this.f7940e.M.remove(Integer.valueOf(this.f7941f));
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
    public static final class h extends xt.a {

        /* renamed from: e */
        final /* synthetic */ f f7943e;

        /* renamed from: f */
        final /* synthetic */ int f7944f;

        /* renamed from: g */
        final /* synthetic */ bu.b f7945g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, f fVar, int i10, bu.b bVar) {
            super(str, z10);
            this.f7943e = fVar;
            this.f7944f = i10;
            this.f7945g = bVar;
        }

        @Override // xt.a
        public long f() {
            this.f7943e.f7904w.a(this.f7944f, this.f7945g);
            synchronized (this.f7943e) {
                this.f7943e.M.remove(Integer.valueOf(this.f7944f));
                Unit unit = Unit.f33282a;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i extends xt.a {

        /* renamed from: e */
        final /* synthetic */ f f7946e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(String str, boolean z10, f fVar) {
            super(str, z10);
            this.f7946e = fVar;
        }

        @Override // xt.a
        public long f() {
            this.f7946e.z2(false, 2, 0);
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends xt.a {

        /* renamed from: e */
        final /* synthetic */ f f7947e;

        /* renamed from: f */
        final /* synthetic */ long f7948f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(String str, f fVar, long j10) {
            super(str, false, 2, null);
            this.f7947e = fVar;
            this.f7948f = j10;
        }

        @Override // xt.a
        public long f() {
            boolean z10;
            synchronized (this.f7947e) {
                if (this.f7947e.f7906y >= this.f7947e.f7905x) {
                    this.f7947e.f7905x++;
                    z10 = false;
                } else {
                    z10 = true;
                }
            }
            if (z10) {
                this.f7947e.R0(null);
                return -1L;
            }
            this.f7947e.z2(false, 1, 0);
            return this.f7948f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class k extends xt.a {

        /* renamed from: e */
        final /* synthetic */ f f7949e;

        /* renamed from: f */
        final /* synthetic */ int f7950f;

        /* renamed from: g */
        final /* synthetic */ bu.b f7951g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(String str, boolean z10, f fVar, int i10, bu.b bVar) {
            super(str, z10);
            this.f7949e = fVar;
            this.f7950f = i10;
            this.f7951g = bVar;
        }

        @Override // xt.a
        public long f() {
            try {
                this.f7949e.A2(this.f7950f, this.f7951g);
                return -1L;
            } catch (IOException e10) {
                this.f7949e.R0(e10);
                return -1L;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class l extends xt.a {

        /* renamed from: e */
        final /* synthetic */ f f7952e;

        /* renamed from: f */
        final /* synthetic */ int f7953f;

        /* renamed from: g */
        final /* synthetic */ long f7954g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(String str, boolean z10, f fVar, int i10, long j10) {
            super(str, z10);
            this.f7952e = fVar;
            this.f7953f = i10;
            this.f7954g = j10;
        }

        @Override // xt.a
        public long f() {
            try {
                this.f7952e.W1().C0(this.f7953f, this.f7954g);
                return -1L;
            } catch (IOException e10) {
                this.f7952e.R0(e10);
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
        this.f7893d = b10;
        this.f7894e = builder.d();
        this.f7895i = new LinkedHashMap();
        String c10 = builder.c();
        this.f7896o = c10;
        if (builder.b()) {
            i10 = 3;
        } else {
            i10 = 2;
        }
        this.f7898q = i10;
        xt.e j10 = builder.j();
        this.f7900s = j10;
        xt.d i11 = j10.i();
        this.f7901t = i11;
        this.f7902u = j10.i();
        this.f7903v = j10.i();
        this.f7904w = builder.f();
        m mVar = new m();
        if (builder.b()) {
            mVar.h(7, PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
        }
        this.D = mVar;
        m mVar2 = O;
        this.E = mVar2;
        this.I = mVar2.c();
        this.J = builder.h();
        this.K = new bu.j(builder.g(), b10);
        this.L = new d(this, new bu.h(builder.i(), b10));
        this.M = new LinkedHashSet();
        if (builder.e() != 0) {
            long nanos = TimeUnit.MILLISECONDS.toNanos(builder.e());
            i11.i(new j(c10 + " ping", this, nanos), nanos);
        }
    }

    public final void R0(IOException iOException) {
        bu.b bVar = bu.b.PROTOCOL_ERROR;
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
    private final bu.i b2(int r10, java.util.List r11, boolean r12) {
        /*
            r9 = this;
            r3 = r12 ^ 1
            bu.j r6 = r9.K
            monitor-enter(r6)
            monitor-enter(r9)     // Catch: java.lang.Throwable -> L8a
            int r0 = r9.f7898q     // Catch: java.lang.Throwable -> L7e
            r1 = 1073741823(0x3fffffff, float:1.9999999)
            if (r0 <= r1) goto L18
            bu.b r0 = bu.b.REFUSED_STREAM     // Catch: java.lang.Throwable -> L13
            r9.t2(r0)     // Catch: java.lang.Throwable -> L13
            goto L18
        L13:
            r0 = move-exception
            r10 = r0
            r2 = r9
            goto L88
        L18:
            boolean r0 = r9.f7899r     // Catch: java.lang.Throwable -> L7e
            if (r0 != 0) goto L81
            int r1 = r9.f7898q     // Catch: java.lang.Throwable -> L7e
            int r0 = r1 + 2
            r9.f7898q = r0     // Catch: java.lang.Throwable -> L7e
            bu.i r0 = new bu.i     // Catch: java.lang.Throwable -> L7e
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
            java.util.Map r4 = r2.f7895i     // Catch: java.lang.Throwable -> L43
            java.lang.Integer r5 = java.lang.Integer.valueOf(r1)     // Catch: java.lang.Throwable -> L43
            r4.put(r5, r0)     // Catch: java.lang.Throwable -> L43
        L56:
            kotlin.Unit r4 = kotlin.Unit.f33282a     // Catch: java.lang.Throwable -> L43
            monitor-exit(r9)     // Catch: java.lang.Throwable -> L61
            if (r10 != 0) goto L64
            bu.j r10 = r2.K     // Catch: java.lang.Throwable -> L61
            r10.E(r3, r1, r11)     // Catch: java.lang.Throwable -> L61
            goto L6d
        L61:
            r0 = move-exception
        L62:
            r10 = r0
            goto L8d
        L64:
            boolean r3 = r2.f7893d     // Catch: java.lang.Throwable -> L61
            if (r3 != 0) goto L76
            bu.j r3 = r2.K     // Catch: java.lang.Throwable -> L61
            r3.N(r10, r1, r11)     // Catch: java.lang.Throwable -> L61
        L6d:
            monitor-exit(r6)
            if (r12 == 0) goto L75
            bu.j r10 = r2.K
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
            bu.a r10 = new bu.a     // Catch: java.lang.Throwable -> L43
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
        throw new UnsupportedOperationException("Method not decompiled: bu.f.b2(int, java.util.List, boolean):bu.i");
    }

    public static /* synthetic */ void v2(f fVar, boolean z10, xt.e eVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        if ((i10 & 2) != 0) {
            eVar = xt.e.f53825i;
        }
        fVar.u2(z10, eVar);
    }

    public final m A1() {
        return this.E;
    }

    public final void A2(int i10, bu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        this.K.V(i10, statusCode);
    }

    public final synchronized bu.i B1(int i10) {
        return (bu.i) this.f7895i.get(Integer.valueOf(i10));
    }

    public final void B2(int i10, bu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        xt.d dVar = this.f7901t;
        dVar.i(new k(this.f7896o + '[' + i10 + "] writeSynReset", true, this, i10, errorCode), 0L);
    }

    public final void C2(int i10, long j10) {
        xt.d dVar = this.f7901t;
        dVar.i(new l(this.f7896o + '[' + i10 + "] windowUpdate", true, this, i10, j10), 0L);
    }

    public final Map E1() {
        return this.f7895i;
    }

    public final void M0(bu.b connectionCode, bu.b streamCode, IOException iOException) {
        int i10;
        Object[] objArr;
        Intrinsics.checkNotNullParameter(connectionCode, "connectionCode");
        Intrinsics.checkNotNullParameter(streamCode, "streamCode");
        if (ut.e.f50563h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        try {
            t2(connectionCode);
        } catch (IOException unused) {
        }
        synchronized (this) {
            try {
                if (!this.f7895i.isEmpty()) {
                    objArr = this.f7895i.values().toArray(new bu.i[0]);
                    this.f7895i.clear();
                } else {
                    objArr = null;
                }
                Unit unit = Unit.f33282a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        bu.i[] iVarArr = (bu.i[]) objArr;
        if (iVarArr != null) {
            for (bu.i iVar : iVarArr) {
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
        this.f7901t.n();
        this.f7902u.n();
        this.f7903v.n();
    }

    public final boolean U0() {
        return this.f7893d;
    }

    public final long U1() {
        return this.I;
    }

    public final bu.j W1() {
        return this.K;
    }

    public final String X0() {
        return this.f7896o;
    }

    public final int Y0() {
        return this.f7897p;
    }

    public final synchronized boolean Y1(long j10) {
        if (this.f7899r) {
            return false;
        }
        if (this.A < this.f7907z) {
            if (j10 >= this.C) {
                return false;
            }
        }
        return true;
    }

    public final bu.i c2(List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        return b2(0, requestHeaders, z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        M0(bu.b.NO_ERROR, bu.b.CANCEL, null);
    }

    public final c d1() {
        return this.f7894e;
    }

    public final void f2(int i10, BufferedSource source, int i11, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        Buffer buffer = new Buffer();
        long j10 = i11;
        source.T0(j10);
        source.read(buffer, j10);
        this.f7902u.i(new e(this.f7896o + '[' + i10 + "] onData", true, this, i10, buffer, i11, z10), 0L);
    }

    public final void flush() {
        this.K.flush();
    }

    public final void h2(int i10, List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        xt.d dVar = this.f7902u;
        dVar.i(new C0125f(this.f7896o + '[' + i10 + "] onHeaders", true, this, i10, requestHeaders, z10), 0L);
    }

    public final void i2(int i10, List requestHeaders) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        synchronized (this) {
            try {
                if (this.M.contains(Integer.valueOf(i10))) {
                    try {
                        B2(i10, bu.b.PROTOCOL_ERROR);
                        return;
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.M.add(Integer.valueOf(i10));
                xt.d dVar = this.f7902u;
                dVar.i(new g(this.f7896o + '[' + i10 + "] onRequest", true, this, i10, requestHeaders), 0L);
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    public final void j2(int i10, bu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        xt.d dVar = this.f7902u;
        dVar.i(new h(this.f7896o + '[' + i10 + "] onReset", true, this, i10, errorCode), 0L);
    }

    public final boolean o2(int i10) {
        if (i10 != 0 && (i10 & 1) == 0) {
            return true;
        }
        return false;
    }

    public final synchronized bu.i p2(int i10) {
        bu.i iVar;
        iVar = (bu.i) this.f7895i.remove(Integer.valueOf(i10));
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
        notifyAll();
        return iVar;
    }

    public final void q2() {
        synchronized (this) {
            long j10 = this.A;
            long j11 = this.f7907z;
            if (j10 < j11) {
                return;
            }
            this.f7907z = j11 + 1;
            this.C = System.nanoTime() + 1000000000;
            Unit unit = Unit.f33282a;
            xt.d dVar = this.f7901t;
            dVar.i(new i(this.f7896o + " ping", true, this), 0L);
        }
    }

    public final void r2(int i10) {
        this.f7897p = i10;
    }

    public final void s2(m mVar) {
        Intrinsics.checkNotNullParameter(mVar, "<set-?>");
        this.E = mVar;
    }

    public final void t2(bu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        synchronized (this.K) {
            Ref.IntRef intRef = new Ref.IntRef();
            synchronized (this) {
                if (this.f7899r) {
                    return;
                }
                this.f7899r = true;
                int i10 = this.f7897p;
                intRef.element = i10;
                Unit unit = Unit.f33282a;
                this.K.B(i10, statusCode, ut.e.f50556a);
            }
        }
    }

    public final void u2(boolean z10, xt.e taskRunner) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        if (z10) {
            this.K.h();
            this.K.A0(this.D);
            int c10 = this.D.c();
            if (c10 != 65535) {
                this.K.C0(0, c10 - 65535);
            }
        }
        taskRunner.i().i(new xt.c(this.f7896o, true, this.L), 0L);
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
        return this.f7898q;
    }

    /* JADX WARN: Code restructure failed: missing block: B:58:0x0038, code lost:
        throw new java.io.IOException("stream closed");
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x003a, code lost:
        r2 = java.lang.Math.min((int) java.lang.Math.min(r12, r6 - r4), r8.K.F());
        r6 = r2;
        r8.H += r6;
        r4 = kotlin.Unit.f33282a;
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
            bu.j r12 = r8.K
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
            java.util.Map r2 = r8.f7895i     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
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
            bu.j r4 = r8.K     // Catch: java.lang.Throwable -> L2f
            int r4 = r4.F()     // Catch: java.lang.Throwable -> L2f
            int r2 = java.lang.Math.min(r2, r4)     // Catch: java.lang.Throwable -> L2f
            long r4 = r8.H     // Catch: java.lang.Throwable -> L2f
            long r6 = (long) r2     // Catch: java.lang.Throwable -> L2f
            long r4 = r4 + r6
            r8.H = r4     // Catch: java.lang.Throwable -> L2f
            kotlin.Unit r4 = kotlin.Unit.f33282a     // Catch: java.lang.Throwable -> L2f
            monitor-exit(r8)
            long r12 = r12 - r6
            bu.j r4 = r8.K
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
        throw new UnsupportedOperationException("Method not decompiled: bu.f.x2(int, boolean, okio.Buffer, long):void");
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
        private final bu.h f7919d;

        /* renamed from: e */
        final /* synthetic */ f f7920e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends xt.a {

            /* renamed from: e */
            final /* synthetic */ f f7921e;

            /* renamed from: f */
            final /* synthetic */ Ref.ObjectRef f7922f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, boolean z10, f fVar, Ref.ObjectRef objectRef) {
                super(str, z10);
                this.f7921e = fVar;
                this.f7922f = objectRef;
            }

            @Override // xt.a
            public long f() {
                this.f7921e.d1().a(this.f7921e, (m) this.f7922f.element);
                return -1L;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends xt.a {

            /* renamed from: e */
            final /* synthetic */ f f7923e;

            /* renamed from: f */
            final /* synthetic */ bu.i f7924f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, boolean z10, f fVar, bu.i iVar) {
                super(str, z10);
                this.f7923e = fVar;
                this.f7924f = iVar;
            }

            @Override // xt.a
            public long f() {
                try {
                    this.f7923e.d1().b(this.f7924f);
                    return -1L;
                } catch (IOException e10) {
                    du.h g10 = du.h.f22444a.g();
                    g10.k("Http2Connection.Listener failure for " + this.f7923e.X0(), 4, e10);
                    try {
                        this.f7924f.d(bu.b.PROTOCOL_ERROR, e10);
                        return -1L;
                    } catch (IOException unused) {
                        return -1L;
                    }
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends xt.a {

            /* renamed from: e */
            final /* synthetic */ f f7925e;

            /* renamed from: f */
            final /* synthetic */ int f7926f;

            /* renamed from: g */
            final /* synthetic */ int f7927g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, boolean z10, f fVar, int i10, int i11) {
                super(str, z10);
                this.f7925e = fVar;
                this.f7926f = i10;
                this.f7927g = i11;
            }

            @Override // xt.a
            public long f() {
                this.f7925e.z2(true, this.f7926f, this.f7927g);
                return -1L;
            }
        }

        /* renamed from: bu.f$d$d */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0124d extends xt.a {

            /* renamed from: e */
            final /* synthetic */ d f7928e;

            /* renamed from: f */
            final /* synthetic */ boolean f7929f;

            /* renamed from: g */
            final /* synthetic */ m f7930g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0124d(String str, boolean z10, d dVar, boolean z11, m mVar) {
                super(str, z10);
                this.f7928e = dVar;
                this.f7929f = z11;
                this.f7930g = mVar;
            }

            @Override // xt.a
            public long f() {
                this.f7928e.k(this.f7929f, this.f7930g);
                return -1L;
            }
        }

        public d(f fVar, bu.h reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            this.f7920e = fVar;
            this.f7919d = reader;
        }

        @Override // bu.h.c
        public void a(boolean z10, int i10, int i11, List headerBlock) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f7920e.o2(i10)) {
                this.f7920e.h2(i10, headerBlock, z10);
                return;
            }
            f fVar = this.f7920e;
            synchronized (fVar) {
                bu.i B1 = fVar.B1(i10);
                if (B1 == null) {
                    if (fVar.f7899r) {
                        return;
                    }
                    if (i10 <= fVar.Y0()) {
                        return;
                    }
                    if (i10 % 2 == fVar.x1() % 2) {
                        return;
                    }
                    bu.i iVar = new bu.i(i10, fVar, false, z10, ut.e.Q(headerBlock));
                    fVar.r2(i10);
                    fVar.E1().put(Integer.valueOf(i10), iVar);
                    xt.d i12 = fVar.f7900s.i();
                    i12.i(new b(fVar.X0() + '[' + i10 + "] onStream", true, fVar, iVar), 0L);
                    return;
                }
                Unit unit = Unit.f33282a;
                B1.x(ut.e.Q(headerBlock), z10);
            }
        }

        @Override // bu.h.c
        public void b(int i10, long j10) {
            if (i10 == 0) {
                f fVar = this.f7920e;
                synchronized (fVar) {
                    fVar.I = fVar.U1() + j10;
                    Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                    fVar.notifyAll();
                    Unit unit = Unit.f33282a;
                }
                return;
            }
            bu.i B1 = this.f7920e.B1(i10);
            if (B1 != null) {
                synchronized (B1) {
                    B1.a(j10);
                    Unit unit2 = Unit.f33282a;
                }
            }
        }

        @Override // bu.h.c
        public void c(boolean z10, m settings) {
            Intrinsics.checkNotNullParameter(settings, "settings");
            xt.d dVar = this.f7920e.f7901t;
            dVar.i(new C0124d(this.f7920e.X0() + " applyAndAckSettings", true, this, z10, settings), 0L);
        }

        @Override // bu.h.c
        public void d(int i10, bu.b errorCode, ByteString debugData) {
            int i11;
            Object[] array;
            bu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            Intrinsics.checkNotNullParameter(debugData, "debugData");
            debugData.G();
            f fVar = this.f7920e;
            synchronized (fVar) {
                array = fVar.E1().values().toArray(new bu.i[0]);
                fVar.f7899r = true;
                Unit unit = Unit.f33282a;
            }
            for (bu.i iVar : (bu.i[]) array) {
                if (iVar.j() > i10 && iVar.t()) {
                    iVar.y(bu.b.REFUSED_STREAM);
                    this.f7920e.p2(iVar.j());
                }
            }
        }

        @Override // bu.h.c
        public void e(int i10, int i11, List requestHeaders) {
            Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
            this.f7920e.i2(i11, requestHeaders);
        }

        @Override // bu.h.c
        public void g(boolean z10, int i10, BufferedSource source, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (this.f7920e.o2(i10)) {
                this.f7920e.f2(i10, source, i11, z10);
                return;
            }
            bu.i B1 = this.f7920e.B1(i10);
            if (B1 == null) {
                this.f7920e.B2(i10, bu.b.PROTOCOL_ERROR);
                long j10 = i11;
                this.f7920e.w2(j10);
                source.skip(j10);
                return;
            }
            B1.w(source, i11);
            if (z10) {
                B1.x(ut.e.f50557b, true);
            }
        }

        @Override // bu.h.c
        public void h(boolean z10, int i10, int i11) {
            if (!z10) {
                this.f7920e.f7901t.i(new c(this.f7920e.X0() + " ping", true, this.f7920e, i10, i11), 0L);
                return;
            }
            f fVar = this.f7920e;
            synchronized (fVar) {
                try {
                    if (i10 == 1) {
                        fVar.f7906y++;
                    } else if (i10 == 2) {
                        fVar.A++;
                    } else {
                        if (i10 == 3) {
                            fVar.B++;
                            Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                            fVar.notifyAll();
                        }
                        Unit unit = Unit.f33282a;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            l();
            return Unit.f33282a;
        }

        @Override // bu.h.c
        public void j(int i10, bu.b errorCode) {
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            if (this.f7920e.o2(i10)) {
                this.f7920e.j2(i10, errorCode);
                return;
            }
            bu.i p22 = this.f7920e.p2(i10);
            if (p22 != null) {
                p22.y(errorCode);
            }
        }

        /* JADX WARN: Type inference failed for: r13v1 */
        /* JADX WARN: Type inference failed for: r13v2, types: [T, bu.m] */
        /* JADX WARN: Type inference failed for: r13v3 */
        public final void k(boolean z10, m settings) {
            ?? r13;
            long c10;
            int i10;
            bu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(settings, "settings");
            Ref.ObjectRef objectRef = new Ref.ObjectRef();
            bu.j W1 = this.f7920e.W1();
            f fVar = this.f7920e;
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
                        iVarArr = (bu.i[]) fVar.E1().values().toArray(new bu.i[0]);
                        fVar.s2((m) objectRef.element);
                        fVar.f7903v.i(new a(fVar.X0() + " onSettings", true, fVar, objectRef), 0L);
                        Unit unit = Unit.f33282a;
                    }
                    iVarArr = null;
                    fVar.s2((m) objectRef.element);
                    fVar.f7903v.i(new a(fVar.X0() + " onSettings", true, fVar, objectRef), 0L);
                    Unit unit2 = Unit.f33282a;
                }
                try {
                    fVar.W1().a((m) objectRef.element);
                } catch (IOException e10) {
                    fVar.R0(e10);
                }
                Unit unit3 = Unit.f33282a;
            }
            if (iVarArr != null) {
                for (bu.i iVar : iVarArr) {
                    synchronized (iVar) {
                        iVar.a(c10);
                        Unit unit4 = Unit.f33282a;
                    }
                }
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r0v0, types: [bu.b] */
        /* JADX WARN: Type inference failed for: r0v3 */
        /* JADX WARN: Type inference failed for: r0v5, types: [bu.h, java.io.Closeable] */
        public void l() {
            bu.b bVar;
            bu.b bVar2 = bu.b.INTERNAL_ERROR;
            IOException e10 = null;
            try {
                try {
                    this.f7919d.l(this);
                    do {
                    } while (this.f7919d.h(false, this));
                    bu.b bVar3 = bu.b.NO_ERROR;
                    try {
                        this.f7920e.M0(bVar3, bu.b.CANCEL, null);
                        bVar = bVar3;
                    } catch (IOException e11) {
                        e10 = e11;
                        bu.b bVar4 = bu.b.PROTOCOL_ERROR;
                        f fVar = this.f7920e;
                        fVar.M0(bVar4, bVar4, e10);
                        bVar = fVar;
                        bVar2 = this.f7919d;
                        ut.e.m(bVar2);
                    }
                } catch (Throwable th2) {
                    th = th2;
                    this.f7920e.M0(bVar, bVar2, e10);
                    ut.e.m(this.f7919d);
                    throw th;
                }
            } catch (IOException e12) {
                e10 = e12;
            } catch (Throwable th3) {
                th = th3;
                bVar = bVar2;
                this.f7920e.M0(bVar, bVar2, e10);
                ut.e.m(this.f7919d);
                throw th;
            }
            bVar2 = this.f7919d;
            ut.e.m(bVar2);
        }

        @Override // bu.h.c
        public void f() {
        }

        @Override // bu.h.c
        public void i(int i10, int i11, int i12, boolean z10) {
        }
    }
}
