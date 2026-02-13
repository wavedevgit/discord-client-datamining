package tu;

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
import tu.h;
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
    private final tu.j K;
    private final d L;
    private final Set M;

    /* renamed from: d */
    private final boolean f50731d;

    /* renamed from: e */
    private final c f50732e;

    /* renamed from: i */
    private final Map f50733i;

    /* renamed from: o */
    private final String f50734o;

    /* renamed from: p */
    private int f50735p;

    /* renamed from: q */
    private int f50736q;

    /* renamed from: r */
    private boolean f50737r;

    /* renamed from: s */
    private final pu.e f50738s;

    /* renamed from: t */
    private final pu.d f50739t;

    /* renamed from: u */
    private final pu.d f50740u;

    /* renamed from: v */
    private final pu.d f50741v;

    /* renamed from: w */
    private final tu.l f50742w;

    /* renamed from: x */
    private long f50743x;

    /* renamed from: y */
    private long f50744y;

    /* renamed from: z */
    private long f50745z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a */
        private boolean f50746a;

        /* renamed from: b */
        private final pu.e f50747b;

        /* renamed from: c */
        public Socket f50748c;

        /* renamed from: d */
        public String f50749d;

        /* renamed from: e */
        public BufferedSource f50750e;

        /* renamed from: f */
        public BufferedSink f50751f;

        /* renamed from: g */
        private c f50752g;

        /* renamed from: h */
        private tu.l f50753h;

        /* renamed from: i */
        private int f50754i;

        public a(boolean z10, pu.e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            this.f50746a = z10;
            this.f50747b = taskRunner;
            this.f50752g = c.f50756b;
            this.f50753h = tu.l.f50858b;
        }

        public final f a() {
            return new f(this);
        }

        public final boolean b() {
            return this.f50746a;
        }

        public final String c() {
            String str = this.f50749d;
            if (str != null) {
                return str;
            }
            Intrinsics.throwUninitializedPropertyAccessException("connectionName");
            return null;
        }

        public final c d() {
            return this.f50752g;
        }

        public final int e() {
            return this.f50754i;
        }

        public final tu.l f() {
            return this.f50753h;
        }

        public final BufferedSink g() {
            BufferedSink bufferedSink = this.f50751f;
            if (bufferedSink != null) {
                return bufferedSink;
            }
            Intrinsics.throwUninitializedPropertyAccessException("sink");
            return null;
        }

        public final Socket h() {
            Socket socket = this.f50748c;
            if (socket != null) {
                return socket;
            }
            Intrinsics.throwUninitializedPropertyAccessException("socket");
            return null;
        }

        public final BufferedSource i() {
            BufferedSource bufferedSource = this.f50750e;
            if (bufferedSource != null) {
                return bufferedSource;
            }
            Intrinsics.throwUninitializedPropertyAccessException("source");
            return null;
        }

        public final pu.e j() {
            return this.f50747b;
        }

        public final a k(c listener) {
            Intrinsics.checkNotNullParameter(listener, "listener");
            this.f50752g = listener;
            return this;
        }

        public final a l(int i10) {
            this.f50754i = i10;
            return this;
        }

        public final void m(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f50749d = str;
        }

        public final void n(BufferedSink bufferedSink) {
            Intrinsics.checkNotNullParameter(bufferedSink, "<set-?>");
            this.f50751f = bufferedSink;
        }

        public final void o(Socket socket) {
            Intrinsics.checkNotNullParameter(socket, "<set-?>");
            this.f50748c = socket;
        }

        public final void p(BufferedSource bufferedSource) {
            Intrinsics.checkNotNullParameter(bufferedSource, "<set-?>");
            this.f50750e = bufferedSource;
        }

        public final a q(Socket socket, String peerName, BufferedSource source, BufferedSink sink) {
            String str;
            Intrinsics.checkNotNullParameter(socket, "socket");
            Intrinsics.checkNotNullParameter(peerName, "peerName");
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            o(socket);
            if (this.f50746a) {
                str = mu.e.f37233i + ' ' + peerName;
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
        public static final b f50755a = new b(null);

        /* renamed from: b */
        public static final c f50756b = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends c {
            a() {
            }

            @Override // tu.f.c
            public void b(tu.i stream) {
                Intrinsics.checkNotNullParameter(stream, "stream");
                stream.d(tu.b.REFUSED_STREAM, null);
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

        public abstract void b(tu.i iVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends pu.a {

        /* renamed from: e */
        final /* synthetic */ f f50769e;

        /* renamed from: f */
        final /* synthetic */ int f50770f;

        /* renamed from: g */
        final /* synthetic */ Buffer f50771g;

        /* renamed from: h */
        final /* synthetic */ int f50772h;

        /* renamed from: i */
        final /* synthetic */ boolean f50773i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String str, boolean z10, f fVar, int i10, Buffer buffer, int i11, boolean z11) {
            super(str, z10);
            this.f50769e = fVar;
            this.f50770f = i10;
            this.f50771g = buffer;
            this.f50772h = i11;
            this.f50773i = z11;
        }

        @Override // pu.a
        public long f() {
            try {
                boolean d10 = this.f50769e.f50742w.d(this.f50770f, this.f50771g, this.f50772h, this.f50773i);
                if (d10) {
                    this.f50769e.x1().I(this.f50770f, tu.b.CANCEL);
                }
                if (d10 || this.f50773i) {
                    synchronized (this.f50769e) {
                        this.f50769e.M.remove(Integer.valueOf(this.f50770f));
                    }
                    return -1L;
                }
                return -1L;
            } catch (IOException unused) {
                return -1L;
            }
        }
    }

    /* renamed from: tu.f$f */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0685f extends pu.a {

        /* renamed from: e */
        final /* synthetic */ f f50774e;

        /* renamed from: f */
        final /* synthetic */ int f50775f;

        /* renamed from: g */
        final /* synthetic */ List f50776g;

        /* renamed from: h */
        final /* synthetic */ boolean f50777h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0685f(String str, boolean z10, f fVar, int i10, List list, boolean z11) {
            super(str, z10);
            this.f50774e = fVar;
            this.f50775f = i10;
            this.f50776g = list;
            this.f50777h = z11;
        }

        @Override // pu.a
        public long f() {
            boolean c10 = this.f50774e.f50742w.c(this.f50775f, this.f50776g, this.f50777h);
            if (c10) {
                try {
                    this.f50774e.x1().I(this.f50775f, tu.b.CANCEL);
                } catch (IOException unused) {
                    return -1L;
                }
            }
            if (c10 || this.f50777h) {
                synchronized (this.f50774e) {
                    this.f50774e.M.remove(Integer.valueOf(this.f50775f));
                }
                return -1L;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends pu.a {

        /* renamed from: e */
        final /* synthetic */ f f50778e;

        /* renamed from: f */
        final /* synthetic */ int f50779f;

        /* renamed from: g */
        final /* synthetic */ List f50780g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, boolean z10, f fVar, int i10, List list) {
            super(str, z10);
            this.f50778e = fVar;
            this.f50779f = i10;
            this.f50780g = list;
        }

        @Override // pu.a
        public long f() {
            if (this.f50778e.f50742w.b(this.f50779f, this.f50780g)) {
                try {
                    this.f50778e.x1().I(this.f50779f, tu.b.CANCEL);
                    synchronized (this.f50778e) {
                        this.f50778e.M.remove(Integer.valueOf(this.f50779f));
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
    public static final class h extends pu.a {

        /* renamed from: e */
        final /* synthetic */ f f50781e;

        /* renamed from: f */
        final /* synthetic */ int f50782f;

        /* renamed from: g */
        final /* synthetic */ tu.b f50783g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, f fVar, int i10, tu.b bVar) {
            super(str, z10);
            this.f50781e = fVar;
            this.f50782f = i10;
            this.f50783g = bVar;
        }

        @Override // pu.a
        public long f() {
            this.f50781e.f50742w.a(this.f50782f, this.f50783g);
            synchronized (this.f50781e) {
                this.f50781e.M.remove(Integer.valueOf(this.f50782f));
                Unit unit = Unit.f32556a;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i extends pu.a {

        /* renamed from: e */
        final /* synthetic */ f f50784e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(String str, boolean z10, f fVar) {
            super(str, z10);
            this.f50784e = fVar;
        }

        @Override // pu.a
        public long f() {
            this.f50784e.z2(false, 2, 0);
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends pu.a {

        /* renamed from: e */
        final /* synthetic */ f f50785e;

        /* renamed from: f */
        final /* synthetic */ long f50786f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(String str, f fVar, long j10) {
            super(str, false, 2, null);
            this.f50785e = fVar;
            this.f50786f = j10;
        }

        @Override // pu.a
        public long f() {
            boolean z10;
            synchronized (this.f50785e) {
                if (this.f50785e.f50744y >= this.f50785e.f50743x) {
                    this.f50785e.f50743x++;
                    z10 = false;
                } else {
                    z10 = true;
                }
            }
            if (z10) {
                this.f50785e.H0(null);
                return -1L;
            }
            this.f50785e.z2(false, 1, 0);
            return this.f50786f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class k extends pu.a {

        /* renamed from: e */
        final /* synthetic */ f f50787e;

        /* renamed from: f */
        final /* synthetic */ int f50788f;

        /* renamed from: g */
        final /* synthetic */ tu.b f50789g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(String str, boolean z10, f fVar, int i10, tu.b bVar) {
            super(str, z10);
            this.f50787e = fVar;
            this.f50788f = i10;
            this.f50789g = bVar;
        }

        @Override // pu.a
        public long f() {
            try {
                this.f50787e.A2(this.f50788f, this.f50789g);
                return -1L;
            } catch (IOException e10) {
                this.f50787e.H0(e10);
                return -1L;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class l extends pu.a {

        /* renamed from: e */
        final /* synthetic */ f f50790e;

        /* renamed from: f */
        final /* synthetic */ int f50791f;

        /* renamed from: g */
        final /* synthetic */ long f50792g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(String str, boolean z10, f fVar, int i10, long j10) {
            super(str, z10);
            this.f50790e = fVar;
            this.f50791f = i10;
            this.f50792g = j10;
        }

        @Override // pu.a
        public long f() {
            try {
                this.f50790e.x1().Q(this.f50791f, this.f50792g);
                return -1L;
            } catch (IOException e10) {
                this.f50790e.H0(e10);
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
        this.f50731d = b10;
        this.f50732e = builder.d();
        this.f50733i = new LinkedHashMap();
        String c10 = builder.c();
        this.f50734o = c10;
        if (builder.b()) {
            i10 = 3;
        } else {
            i10 = 2;
        }
        this.f50736q = i10;
        pu.e j10 = builder.j();
        this.f50738s = j10;
        pu.d i11 = j10.i();
        this.f50739t = i11;
        this.f50740u = j10.i();
        this.f50741v = j10.i();
        this.f50742w = builder.f();
        m mVar = new m();
        if (builder.b()) {
            mVar.h(7, PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
        }
        this.D = mVar;
        m mVar2 = O;
        this.E = mVar2;
        this.I = mVar2.c();
        this.J = builder.h();
        this.K = new tu.j(builder.g(), b10);
        this.L = new d(this, new tu.h(builder.i(), b10));
        this.M = new LinkedHashSet();
        if (builder.e() != 0) {
            long nanos = TimeUnit.MILLISECONDS.toNanos(builder.e());
            i11.i(new j(c10 + " ping", this, nanos), nanos);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:104:0x0070  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x004d A[Catch: all -> 0x0043, TryCatch #1 {all -> 0x0043, blocks: (B:79:0x0027, B:81:0x002c, B:83:0x0034, B:90:0x0047, B:92:0x004d, B:93:0x0056, B:111:0x0082, B:112:0x0087), top: B:120:0x001a }] */
    /* JADX WARN: Removed duplicated region for block: B:96:0x005b A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /* JADX WARN: Removed duplicated region for block: B:99:0x0064 A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final tu.i B1(int r10, java.util.List r11, boolean r12) {
        /*
            r9 = this;
            r3 = r12 ^ 1
            tu.j r6 = r9.K
            monitor-enter(r6)
            monitor-enter(r9)     // Catch: java.lang.Throwable -> L8a
            int r0 = r9.f50736q     // Catch: java.lang.Throwable -> L7e
            r1 = 1073741823(0x3fffffff, float:1.9999999)
            if (r0 <= r1) goto L18
            tu.b r0 = tu.b.REFUSED_STREAM     // Catch: java.lang.Throwable -> L13
            r9.t2(r0)     // Catch: java.lang.Throwable -> L13
            goto L18
        L13:
            r0 = move-exception
            r10 = r0
            r2 = r9
            goto L88
        L18:
            boolean r0 = r9.f50737r     // Catch: java.lang.Throwable -> L7e
            if (r0 != 0) goto L81
            int r1 = r9.f50736q     // Catch: java.lang.Throwable -> L7e
            int r0 = r1 + 2
            r9.f50736q = r0     // Catch: java.lang.Throwable -> L7e
            tu.i r0 = new tu.i     // Catch: java.lang.Throwable -> L7e
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
            java.util.Map r4 = r2.f50733i     // Catch: java.lang.Throwable -> L43
            java.lang.Integer r5 = java.lang.Integer.valueOf(r1)     // Catch: java.lang.Throwable -> L43
            r4.put(r5, r0)     // Catch: java.lang.Throwable -> L43
        L56:
            kotlin.Unit r4 = kotlin.Unit.f32556a     // Catch: java.lang.Throwable -> L43
            monitor-exit(r9)     // Catch: java.lang.Throwable -> L61
            if (r10 != 0) goto L64
            tu.j r10 = r2.K     // Catch: java.lang.Throwable -> L61
            r10.s(r3, r1, r11)     // Catch: java.lang.Throwable -> L61
            goto L6d
        L61:
            r0 = move-exception
        L62:
            r10 = r0
            goto L8d
        L64:
            boolean r3 = r2.f50731d     // Catch: java.lang.Throwable -> L61
            if (r3 != 0) goto L76
            tu.j r3 = r2.K     // Catch: java.lang.Throwable -> L61
            r3.C(r10, r1, r11)     // Catch: java.lang.Throwable -> L61
        L6d:
            monitor-exit(r6)
            if (r12 == 0) goto L75
            tu.j r10 = r2.K
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
            tu.a r10 = new tu.a     // Catch: java.lang.Throwable -> L43
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
        throw new UnsupportedOperationException("Method not decompiled: tu.f.B1(int, java.util.List, boolean):tu.i");
    }

    public final void H0(IOException iOException) {
        tu.b bVar = tu.b.PROTOCOL_ERROR;
        G0(bVar, bVar, iOException);
    }

    public static /* synthetic */ void v2(f fVar, boolean z10, pu.e eVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        if ((i10 & 2) != 0) {
            eVar = pu.e.f43784i;
        }
        fVar.u2(z10, eVar);
    }

    public final void A2(int i10, tu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        this.K.I(i10, statusCode);
    }

    public final void B2(int i10, tu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        pu.d dVar = this.f50739t;
        dVar.i(new k(this.f50734o + '[' + i10 + "] writeSynReset", true, this, i10, errorCode), 0L);
    }

    public final void C2(int i10, long j10) {
        pu.d dVar = this.f50739t;
        dVar.i(new l(this.f50734o + '[' + i10 + "] windowUpdate", true, this, i10, j10), 0L);
    }

    public final tu.i E1(List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        return B1(0, requestHeaders, z10);
    }

    public final void G0(tu.b connectionCode, tu.b streamCode, IOException iOException) {
        int i10;
        Object[] objArr;
        Intrinsics.checkNotNullParameter(connectionCode, "connectionCode");
        Intrinsics.checkNotNullParameter(streamCode, "streamCode");
        if (mu.e.f37232h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        try {
            t2(connectionCode);
        } catch (IOException unused) {
        }
        synchronized (this) {
            try {
                if (!this.f50733i.isEmpty()) {
                    objArr = this.f50733i.values().toArray(new tu.i[0]);
                    this.f50733i.clear();
                } else {
                    objArr = null;
                }
                Unit unit = Unit.f32556a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        tu.i[] iVarArr = (tu.i[]) objArr;
        if (iVarArr != null) {
            for (tu.i iVar : iVarArr) {
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
        this.f50739t.n();
        this.f50740u.n();
        this.f50741v.n();
    }

    public final boolean L0() {
        return this.f50731d;
    }

    public final String N0() {
        return this.f50734o;
    }

    public final int O0() {
        return this.f50735p;
    }

    public final void P1(int i10, BufferedSource source, int i11, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        Buffer buffer = new Buffer();
        long j10 = i11;
        source.U0(j10);
        source.read(buffer, j10);
        this.f50740u.i(new e(this.f50734o + '[' + i10 + "] onData", true, this, i10, buffer, i11, z10), 0L);
    }

    public final c S0() {
        return this.f50732e;
    }

    public final int V0() {
        return this.f50736q;
    }

    public final void Y1(int i10, List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        pu.d dVar = this.f50740u;
        dVar.i(new C0685f(this.f50734o + '[' + i10 + "] onHeaders", true, this, i10, requestHeaders, z10), 0L);
    }

    public final m Z0() {
        return this.D;
    }

    public final m a1() {
        return this.E;
    }

    public final void a2(int i10, List requestHeaders) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        synchronized (this) {
            try {
                if (this.M.contains(Integer.valueOf(i10))) {
                    try {
                        B2(i10, tu.b.PROTOCOL_ERROR);
                        return;
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.M.add(Integer.valueOf(i10));
                pu.d dVar = this.f50740u;
                dVar.i(new g(this.f50734o + '[' + i10 + "] onRequest", true, this, i10, requestHeaders), 0L);
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    public final synchronized tu.i b1(int i10) {
        return (tu.i) this.f50733i.get(Integer.valueOf(i10));
    }

    public final void c2(int i10, tu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        pu.d dVar = this.f50740u;
        dVar.i(new h(this.f50734o + '[' + i10 + "] onReset", true, this, i10, errorCode), 0L);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        G0(tu.b.NO_ERROR, tu.b.CANCEL, null);
    }

    public final Map f1() {
        return this.f50733i;
    }

    public final boolean f2(int i10) {
        if (i10 != 0 && (i10 & 1) == 0) {
            return true;
        }
        return false;
    }

    public final void flush() {
        this.K.flush();
    }

    public final synchronized tu.i g2(int i10) {
        tu.i iVar;
        iVar = (tu.i) this.f50733i.remove(Integer.valueOf(i10));
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
        notifyAll();
        return iVar;
    }

    public final void l2() {
        synchronized (this) {
            long j10 = this.A;
            long j11 = this.f50745z;
            if (j10 < j11) {
                return;
            }
            this.f50745z = j11 + 1;
            this.C = System.nanoTime() + 1000000000;
            Unit unit = Unit.f32556a;
            pu.d dVar = this.f50739t;
            dVar.i(new i(this.f50734o + " ping", true, this), 0L);
        }
    }

    public final void m2(int i10) {
        this.f50735p = i10;
    }

    public final void o2(m mVar) {
        Intrinsics.checkNotNullParameter(mVar, "<set-?>");
        this.E = mVar;
    }

    public final void t2(tu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        synchronized (this.K) {
            Ref.IntRef intRef = new Ref.IntRef();
            synchronized (this) {
                if (this.f50737r) {
                    return;
                }
                this.f50737r = true;
                int i10 = this.f50735p;
                intRef.element = i10;
                Unit unit = Unit.f32556a;
                this.K.p(i10, statusCode, mu.e.f37225a);
            }
        }
    }

    public final void u2(boolean z10, pu.e taskRunner) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        if (z10) {
            this.K.h();
            this.K.J(this.D);
            int c10 = this.D.c();
            if (c10 != 65535) {
                this.K.Q(0, c10 - 65535);
            }
        }
        taskRunner.i().i(new pu.c(this.f50734o, true, this.L), 0L);
    }

    public final long w1() {
        return this.I;
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

    public final tu.j x1() {
        return this.K;
    }

    /* JADX WARN: Code restructure failed: missing block: B:58:0x0038, code lost:
        throw new java.io.IOException("stream closed");
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x003a, code lost:
        r2 = java.lang.Math.min((int) java.lang.Math.min(r12, r6 - r4), r8.K.y());
        r6 = r2;
        r8.H += r6;
        r4 = kotlin.Unit.f32556a;
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
            tu.j r12 = r8.K
            r12.i(r10, r9, r11, r3)
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
            java.util.Map r2 = r8.f50733i     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
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
            tu.j r4 = r8.K     // Catch: java.lang.Throwable -> L2f
            int r4 = r4.y()     // Catch: java.lang.Throwable -> L2f
            int r2 = java.lang.Math.min(r2, r4)     // Catch: java.lang.Throwable -> L2f
            long r4 = r8.H     // Catch: java.lang.Throwable -> L2f
            long r6 = (long) r2     // Catch: java.lang.Throwable -> L2f
            long r4 = r4 + r6
            r8.H = r4     // Catch: java.lang.Throwable -> L2f
            kotlin.Unit r4 = kotlin.Unit.f32556a     // Catch: java.lang.Throwable -> L2f
            monitor-exit(r8)
            long r12 = r12 - r6
            tu.j r4 = r8.K
            if (r10 == 0) goto L5d
            int r5 = (r12 > r0 ? 1 : (r12 == r0 ? 0 : -1))
            if (r5 != 0) goto L5d
            r5 = 1
            goto L5e
        L5d:
            r5 = r3
        L5e:
            r4.i(r5, r9, r11, r2)
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
        throw new UnsupportedOperationException("Method not decompiled: tu.f.x2(int, boolean, okio.Buffer, long):void");
    }

    public final void y2(int i10, boolean z10, List alternating) {
        Intrinsics.checkNotNullParameter(alternating, "alternating");
        this.K.s(z10, i10, alternating);
    }

    public final synchronized boolean z1(long j10) {
        if (this.f50737r) {
            return false;
        }
        if (this.A < this.f50745z) {
            if (j10 >= this.C) {
                return false;
            }
        }
        return true;
    }

    public final void z2(boolean z10, int i10, int i11) {
        try {
            this.K.z(z10, i10, i11);
        } catch (IOException e10) {
            H0(e10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d implements h.c, Function0 {

        /* renamed from: d */
        private final tu.h f50757d;

        /* renamed from: e */
        final /* synthetic */ f f50758e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends pu.a {

            /* renamed from: e */
            final /* synthetic */ f f50759e;

            /* renamed from: f */
            final /* synthetic */ Ref.ObjectRef f50760f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, boolean z10, f fVar, Ref.ObjectRef objectRef) {
                super(str, z10);
                this.f50759e = fVar;
                this.f50760f = objectRef;
            }

            @Override // pu.a
            public long f() {
                this.f50759e.S0().a(this.f50759e, (m) this.f50760f.element);
                return -1L;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends pu.a {

            /* renamed from: e */
            final /* synthetic */ f f50761e;

            /* renamed from: f */
            final /* synthetic */ tu.i f50762f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, boolean z10, f fVar, tu.i iVar) {
                super(str, z10);
                this.f50761e = fVar;
                this.f50762f = iVar;
            }

            @Override // pu.a
            public long f() {
                try {
                    this.f50761e.S0().b(this.f50762f);
                    return -1L;
                } catch (IOException e10) {
                    vu.h g10 = vu.h.f52584a.g();
                    g10.k("Http2Connection.Listener failure for " + this.f50761e.N0(), 4, e10);
                    try {
                        this.f50762f.d(tu.b.PROTOCOL_ERROR, e10);
                        return -1L;
                    } catch (IOException unused) {
                        return -1L;
                    }
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends pu.a {

            /* renamed from: e */
            final /* synthetic */ f f50763e;

            /* renamed from: f */
            final /* synthetic */ int f50764f;

            /* renamed from: g */
            final /* synthetic */ int f50765g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, boolean z10, f fVar, int i10, int i11) {
                super(str, z10);
                this.f50763e = fVar;
                this.f50764f = i10;
                this.f50765g = i11;
            }

            @Override // pu.a
            public long f() {
                this.f50763e.z2(true, this.f50764f, this.f50765g);
                return -1L;
            }
        }

        /* renamed from: tu.f$d$d */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0684d extends pu.a {

            /* renamed from: e */
            final /* synthetic */ d f50766e;

            /* renamed from: f */
            final /* synthetic */ boolean f50767f;

            /* renamed from: g */
            final /* synthetic */ m f50768g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0684d(String str, boolean z10, d dVar, boolean z11, m mVar) {
                super(str, z10);
                this.f50766e = dVar;
                this.f50767f = z11;
                this.f50768g = mVar;
            }

            @Override // pu.a
            public long f() {
                this.f50766e.k(this.f50767f, this.f50768g);
                return -1L;
            }
        }

        public d(f fVar, tu.h reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            this.f50758e = fVar;
            this.f50757d = reader;
        }

        @Override // tu.h.c
        public void a(int i10, tu.b errorCode, ByteString debugData) {
            int i11;
            Object[] array;
            tu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            Intrinsics.checkNotNullParameter(debugData, "debugData");
            debugData.G();
            f fVar = this.f50758e;
            synchronized (fVar) {
                array = fVar.f1().values().toArray(new tu.i[0]);
                fVar.f50737r = true;
                Unit unit = Unit.f32556a;
            }
            for (tu.i iVar : (tu.i[]) array) {
                if (iVar.j() > i10 && iVar.t()) {
                    iVar.y(tu.b.REFUSED_STREAM);
                    this.f50758e.g2(iVar.j());
                }
            }
        }

        @Override // tu.h.c
        public void b(boolean z10, int i10, int i11, List headerBlock) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f50758e.f2(i10)) {
                this.f50758e.Y1(i10, headerBlock, z10);
                return;
            }
            f fVar = this.f50758e;
            synchronized (fVar) {
                tu.i b12 = fVar.b1(i10);
                if (b12 == null) {
                    if (fVar.f50737r) {
                        return;
                    }
                    if (i10 <= fVar.O0()) {
                        return;
                    }
                    if (i10 % 2 == fVar.V0() % 2) {
                        return;
                    }
                    tu.i iVar = new tu.i(i10, fVar, false, z10, mu.e.Q(headerBlock));
                    fVar.m2(i10);
                    fVar.f1().put(Integer.valueOf(i10), iVar);
                    pu.d i12 = fVar.f50738s.i();
                    i12.i(new b(fVar.N0() + '[' + i10 + "] onStream", true, fVar, iVar), 0L);
                    return;
                }
                Unit unit = Unit.f32556a;
                b12.x(mu.e.Q(headerBlock), z10);
            }
        }

        @Override // tu.h.c
        public void c(int i10, long j10) {
            if (i10 == 0) {
                f fVar = this.f50758e;
                synchronized (fVar) {
                    fVar.I = fVar.w1() + j10;
                    Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                    fVar.notifyAll();
                    Unit unit = Unit.f32556a;
                }
                return;
            }
            tu.i b12 = this.f50758e.b1(i10);
            if (b12 != null) {
                synchronized (b12) {
                    b12.a(j10);
                    Unit unit2 = Unit.f32556a;
                }
            }
        }

        @Override // tu.h.c
        public void d(int i10, tu.b errorCode) {
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            if (this.f50758e.f2(i10)) {
                this.f50758e.c2(i10, errorCode);
                return;
            }
            tu.i g22 = this.f50758e.g2(i10);
            if (g22 != null) {
                g22.y(errorCode);
            }
        }

        @Override // tu.h.c
        public void e(int i10, int i11, List requestHeaders) {
            Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
            this.f50758e.a2(i11, requestHeaders);
        }

        @Override // tu.h.c
        public void g(boolean z10, m settings) {
            Intrinsics.checkNotNullParameter(settings, "settings");
            pu.d dVar = this.f50758e.f50739t;
            dVar.i(new C0684d(this.f50758e.N0() + " applyAndAckSettings", true, this, z10, settings), 0L);
        }

        @Override // tu.h.c
        public void h(boolean z10, int i10, BufferedSource source, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (this.f50758e.f2(i10)) {
                this.f50758e.P1(i10, source, i11, z10);
                return;
            }
            tu.i b12 = this.f50758e.b1(i10);
            if (b12 == null) {
                this.f50758e.B2(i10, tu.b.PROTOCOL_ERROR);
                long j10 = i11;
                this.f50758e.w2(j10);
                source.skip(j10);
                return;
            }
            b12.w(source, i11);
            if (z10) {
                b12.x(mu.e.f37226b, true);
            }
        }

        @Override // tu.h.c
        public void i(boolean z10, int i10, int i11) {
            if (!z10) {
                this.f50758e.f50739t.i(new c(this.f50758e.N0() + " ping", true, this.f50758e, i10, i11), 0L);
                return;
            }
            f fVar = this.f50758e;
            synchronized (fVar) {
                try {
                    if (i10 == 1) {
                        fVar.f50744y++;
                    } else if (i10 == 2) {
                        fVar.A++;
                    } else {
                        if (i10 == 3) {
                            fVar.B++;
                            Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                            fVar.notifyAll();
                        }
                        Unit unit = Unit.f32556a;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            l();
            return Unit.f32556a;
        }

        /* JADX WARN: Type inference failed for: r13v1 */
        /* JADX WARN: Type inference failed for: r13v2, types: [T, tu.m] */
        /* JADX WARN: Type inference failed for: r13v3 */
        public final void k(boolean z10, m settings) {
            ?? r13;
            long c10;
            int i10;
            tu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(settings, "settings");
            Ref.ObjectRef objectRef = new Ref.ObjectRef();
            tu.j x12 = this.f50758e.x1();
            f fVar = this.f50758e;
            synchronized (x12) {
                synchronized (fVar) {
                    m a12 = fVar.a1();
                    if (z10) {
                        r13 = settings;
                    } else {
                        m mVar = new m();
                        mVar.g(a12);
                        mVar.g(settings);
                        r13 = mVar;
                    }
                    objectRef.element = r13;
                    c10 = r13.c() - a12.c();
                    if (c10 != 0 && !fVar.f1().isEmpty()) {
                        iVarArr = (tu.i[]) fVar.f1().values().toArray(new tu.i[0]);
                        fVar.o2((m) objectRef.element);
                        fVar.f50741v.i(new a(fVar.N0() + " onSettings", true, fVar, objectRef), 0L);
                        Unit unit = Unit.f32556a;
                    }
                    iVarArr = null;
                    fVar.o2((m) objectRef.element);
                    fVar.f50741v.i(new a(fVar.N0() + " onSettings", true, fVar, objectRef), 0L);
                    Unit unit2 = Unit.f32556a;
                }
                try {
                    fVar.x1().a((m) objectRef.element);
                } catch (IOException e10) {
                    fVar.H0(e10);
                }
                Unit unit3 = Unit.f32556a;
            }
            if (iVarArr != null) {
                for (tu.i iVar : iVarArr) {
                    synchronized (iVar) {
                        iVar.a(c10);
                        Unit unit4 = Unit.f32556a;
                    }
                }
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r0v0, types: [tu.b] */
        /* JADX WARN: Type inference failed for: r0v3 */
        /* JADX WARN: Type inference failed for: r0v5, types: [java.io.Closeable, tu.h] */
        public void l() {
            tu.b bVar;
            tu.b bVar2 = tu.b.INTERNAL_ERROR;
            IOException e10 = null;
            try {
                try {
                    this.f50757d.i(this);
                    do {
                    } while (this.f50757d.h(false, this));
                    tu.b bVar3 = tu.b.NO_ERROR;
                    try {
                        this.f50758e.G0(bVar3, tu.b.CANCEL, null);
                        bVar = bVar3;
                    } catch (IOException e11) {
                        e10 = e11;
                        tu.b bVar4 = tu.b.PROTOCOL_ERROR;
                        f fVar = this.f50758e;
                        fVar.G0(bVar4, bVar4, e10);
                        bVar = fVar;
                        bVar2 = this.f50757d;
                        mu.e.m(bVar2);
                    }
                } catch (Throwable th2) {
                    th = th2;
                    this.f50758e.G0(bVar, bVar2, e10);
                    mu.e.m(this.f50757d);
                    throw th;
                }
            } catch (IOException e12) {
                e10 = e12;
            } catch (Throwable th3) {
                th = th3;
                bVar = bVar2;
                this.f50758e.G0(bVar, bVar2, e10);
                mu.e.m(this.f50757d);
                throw th;
            }
            bVar2 = this.f50757d;
            mu.e.m(bVar2);
        }

        @Override // tu.h.c
        public void f() {
        }

        @Override // tu.h.c
        public void j(int i10, int i11, int i12, boolean z10) {
        }
    }
}
