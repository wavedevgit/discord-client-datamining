package ju;

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
import ju.h;
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
    private final ju.j K;
    private final d L;
    private final Set M;

    /* renamed from: d */
    private final boolean f31171d;

    /* renamed from: e */
    private final c f31172e;

    /* renamed from: i */
    private final Map f31173i;

    /* renamed from: o */
    private final String f31174o;

    /* renamed from: p */
    private int f31175p;

    /* renamed from: q */
    private int f31176q;

    /* renamed from: r */
    private boolean f31177r;

    /* renamed from: s */
    private final fu.e f31178s;

    /* renamed from: t */
    private final fu.d f31179t;

    /* renamed from: u */
    private final fu.d f31180u;

    /* renamed from: v */
    private final fu.d f31181v;

    /* renamed from: w */
    private final ju.l f31182w;

    /* renamed from: x */
    private long f31183x;

    /* renamed from: y */
    private long f31184y;

    /* renamed from: z */
    private long f31185z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a */
        private boolean f31186a;

        /* renamed from: b */
        private final fu.e f31187b;

        /* renamed from: c */
        public Socket f31188c;

        /* renamed from: d */
        public String f31189d;

        /* renamed from: e */
        public BufferedSource f31190e;

        /* renamed from: f */
        public BufferedSink f31191f;

        /* renamed from: g */
        private c f31192g;

        /* renamed from: h */
        private ju.l f31193h;

        /* renamed from: i */
        private int f31194i;

        public a(boolean z10, fu.e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            this.f31186a = z10;
            this.f31187b = taskRunner;
            this.f31192g = c.f31196b;
            this.f31193h = ju.l.f31298b;
        }

        public final f a() {
            return new f(this);
        }

        public final boolean b() {
            return this.f31186a;
        }

        public final String c() {
            String str = this.f31189d;
            if (str != null) {
                return str;
            }
            Intrinsics.throwUninitializedPropertyAccessException("connectionName");
            return null;
        }

        public final c d() {
            return this.f31192g;
        }

        public final int e() {
            return this.f31194i;
        }

        public final ju.l f() {
            return this.f31193h;
        }

        public final BufferedSink g() {
            BufferedSink bufferedSink = this.f31191f;
            if (bufferedSink != null) {
                return bufferedSink;
            }
            Intrinsics.throwUninitializedPropertyAccessException("sink");
            return null;
        }

        public final Socket h() {
            Socket socket = this.f31188c;
            if (socket != null) {
                return socket;
            }
            Intrinsics.throwUninitializedPropertyAccessException("socket");
            return null;
        }

        public final BufferedSource i() {
            BufferedSource bufferedSource = this.f31190e;
            if (bufferedSource != null) {
                return bufferedSource;
            }
            Intrinsics.throwUninitializedPropertyAccessException("source");
            return null;
        }

        public final fu.e j() {
            return this.f31187b;
        }

        public final a k(c listener) {
            Intrinsics.checkNotNullParameter(listener, "listener");
            this.f31192g = listener;
            return this;
        }

        public final a l(int i10) {
            this.f31194i = i10;
            return this;
        }

        public final void m(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f31189d = str;
        }

        public final void n(BufferedSink bufferedSink) {
            Intrinsics.checkNotNullParameter(bufferedSink, "<set-?>");
            this.f31191f = bufferedSink;
        }

        public final void o(Socket socket) {
            Intrinsics.checkNotNullParameter(socket, "<set-?>");
            this.f31188c = socket;
        }

        public final void p(BufferedSource bufferedSource) {
            Intrinsics.checkNotNullParameter(bufferedSource, "<set-?>");
            this.f31190e = bufferedSource;
        }

        public final a q(Socket socket, String peerName, BufferedSource source, BufferedSink sink) {
            String str;
            Intrinsics.checkNotNullParameter(socket, "socket");
            Intrinsics.checkNotNullParameter(peerName, "peerName");
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            o(socket);
            if (this.f31186a) {
                str = cu.e.f20043i + ' ' + peerName;
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
        public static final b f31195a = new b(null);

        /* renamed from: b */
        public static final c f31196b = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends c {
            a() {
            }

            @Override // ju.f.c
            public void b(ju.i stream) {
                Intrinsics.checkNotNullParameter(stream, "stream");
                stream.d(ju.b.REFUSED_STREAM, null);
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

        public abstract void b(ju.i iVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends fu.a {

        /* renamed from: e */
        final /* synthetic */ f f31209e;

        /* renamed from: f */
        final /* synthetic */ int f31210f;

        /* renamed from: g */
        final /* synthetic */ Buffer f31211g;

        /* renamed from: h */
        final /* synthetic */ int f31212h;

        /* renamed from: i */
        final /* synthetic */ boolean f31213i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String str, boolean z10, f fVar, int i10, Buffer buffer, int i11, boolean z11) {
            super(str, z10);
            this.f31209e = fVar;
            this.f31210f = i10;
            this.f31211g = buffer;
            this.f31212h = i11;
            this.f31213i = z11;
        }

        @Override // fu.a
        public long f() {
            try {
                boolean d10 = this.f31209e.f31182w.d(this.f31210f, this.f31211g, this.f31212h, this.f31213i);
                if (d10) {
                    this.f31209e.V1().I(this.f31210f, ju.b.CANCEL);
                }
                if (d10 || this.f31213i) {
                    synchronized (this.f31209e) {
                        this.f31209e.M.remove(Integer.valueOf(this.f31210f));
                    }
                    return -1L;
                }
                return -1L;
            } catch (IOException unused) {
                return -1L;
            }
        }
    }

    /* renamed from: ju.f$f */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0441f extends fu.a {

        /* renamed from: e */
        final /* synthetic */ f f31214e;

        /* renamed from: f */
        final /* synthetic */ int f31215f;

        /* renamed from: g */
        final /* synthetic */ List f31216g;

        /* renamed from: h */
        final /* synthetic */ boolean f31217h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0441f(String str, boolean z10, f fVar, int i10, List list, boolean z11) {
            super(str, z10);
            this.f31214e = fVar;
            this.f31215f = i10;
            this.f31216g = list;
            this.f31217h = z11;
        }

        @Override // fu.a
        public long f() {
            boolean b10 = this.f31214e.f31182w.b(this.f31215f, this.f31216g, this.f31217h);
            if (b10) {
                try {
                    this.f31214e.V1().I(this.f31215f, ju.b.CANCEL);
                } catch (IOException unused) {
                    return -1L;
                }
            }
            if (b10 || this.f31217h) {
                synchronized (this.f31214e) {
                    this.f31214e.M.remove(Integer.valueOf(this.f31215f));
                }
                return -1L;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends fu.a {

        /* renamed from: e */
        final /* synthetic */ f f31218e;

        /* renamed from: f */
        final /* synthetic */ int f31219f;

        /* renamed from: g */
        final /* synthetic */ List f31220g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, boolean z10, f fVar, int i10, List list) {
            super(str, z10);
            this.f31218e = fVar;
            this.f31219f = i10;
            this.f31220g = list;
        }

        @Override // fu.a
        public long f() {
            if (this.f31218e.f31182w.a(this.f31219f, this.f31220g)) {
                try {
                    this.f31218e.V1().I(this.f31219f, ju.b.CANCEL);
                    synchronized (this.f31218e) {
                        this.f31218e.M.remove(Integer.valueOf(this.f31219f));
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
    public static final class h extends fu.a {

        /* renamed from: e */
        final /* synthetic */ f f31221e;

        /* renamed from: f */
        final /* synthetic */ int f31222f;

        /* renamed from: g */
        final /* synthetic */ ju.b f31223g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, f fVar, int i10, ju.b bVar) {
            super(str, z10);
            this.f31221e = fVar;
            this.f31222f = i10;
            this.f31223g = bVar;
        }

        @Override // fu.a
        public long f() {
            this.f31221e.f31182w.c(this.f31222f, this.f31223g);
            synchronized (this.f31221e) {
                this.f31221e.M.remove(Integer.valueOf(this.f31222f));
                Unit unit = Unit.f32008a;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i extends fu.a {

        /* renamed from: e */
        final /* synthetic */ f f31224e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(String str, boolean z10, f fVar) {
            super(str, z10);
            this.f31224e = fVar;
        }

        @Override // fu.a
        public long f() {
            this.f31224e.z2(false, 2, 0);
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends fu.a {

        /* renamed from: e */
        final /* synthetic */ f f31225e;

        /* renamed from: f */
        final /* synthetic */ long f31226f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(String str, f fVar, long j10) {
            super(str, false, 2, null);
            this.f31225e = fVar;
            this.f31226f = j10;
        }

        @Override // fu.a
        public long f() {
            boolean z10;
            synchronized (this.f31225e) {
                if (this.f31225e.f31184y >= this.f31225e.f31183x) {
                    this.f31225e.f31183x++;
                    z10 = false;
                } else {
                    z10 = true;
                }
            }
            if (z10) {
                this.f31225e.L0(null);
                return -1L;
            }
            this.f31225e.z2(false, 1, 0);
            return this.f31226f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class k extends fu.a {

        /* renamed from: e */
        final /* synthetic */ f f31227e;

        /* renamed from: f */
        final /* synthetic */ int f31228f;

        /* renamed from: g */
        final /* synthetic */ ju.b f31229g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(String str, boolean z10, f fVar, int i10, ju.b bVar) {
            super(str, z10);
            this.f31227e = fVar;
            this.f31228f = i10;
            this.f31229g = bVar;
        }

        @Override // fu.a
        public long f() {
            try {
                this.f31227e.A2(this.f31228f, this.f31229g);
                return -1L;
            } catch (IOException e10) {
                this.f31227e.L0(e10);
                return -1L;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class l extends fu.a {

        /* renamed from: e */
        final /* synthetic */ f f31230e;

        /* renamed from: f */
        final /* synthetic */ int f31231f;

        /* renamed from: g */
        final /* synthetic */ long f31232g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(String str, boolean z10, f fVar, int i10, long j10) {
            super(str, z10);
            this.f31230e = fVar;
            this.f31231f = i10;
            this.f31232g = j10;
        }

        @Override // fu.a
        public long f() {
            try {
                this.f31230e.V1().P(this.f31231f, this.f31232g);
                return -1L;
            } catch (IOException e10) {
                this.f31230e.L0(e10);
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
        this.f31171d = b10;
        this.f31172e = builder.d();
        this.f31173i = new LinkedHashMap();
        String c10 = builder.c();
        this.f31174o = c10;
        if (builder.b()) {
            i10 = 3;
        } else {
            i10 = 2;
        }
        this.f31176q = i10;
        fu.e j10 = builder.j();
        this.f31178s = j10;
        fu.d i11 = j10.i();
        this.f31179t = i11;
        this.f31180u = j10.i();
        this.f31181v = j10.i();
        this.f31182w = builder.f();
        m mVar = new m();
        if (builder.b()) {
            mVar.h(7, PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
        }
        this.D = mVar;
        m mVar2 = O;
        this.E = mVar2;
        this.I = mVar2.c();
        this.J = builder.h();
        this.K = new ju.j(builder.g(), b10);
        this.L = new d(this, new ju.h(builder.i(), b10));
        this.M = new LinkedHashSet();
        if (builder.e() != 0) {
            long nanos = TimeUnit.MILLISECONDS.toNanos(builder.e());
            i11.i(new j(c10 + " ping", this, nanos), nanos);
        }
    }

    public final void L0(IOException iOException) {
        ju.b bVar = ju.b.PROTOCOL_ERROR;
        K0(bVar, bVar, iOException);
    }

    /* JADX WARN: Removed duplicated region for block: B:104:0x0070  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x004d A[Catch: all -> 0x0043, TryCatch #1 {all -> 0x0043, blocks: (B:79:0x0027, B:81:0x002c, B:83:0x0034, B:90:0x0047, B:92:0x004d, B:93:0x0056, B:111:0x0082, B:112:0x0087), top: B:120:0x001a }] */
    /* JADX WARN: Removed duplicated region for block: B:96:0x005b A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /* JADX WARN: Removed duplicated region for block: B:99:0x0064 A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final ju.i a2(int r10, java.util.List r11, boolean r12) {
        /*
            r9 = this;
            r3 = r12 ^ 1
            ju.j r6 = r9.K
            monitor-enter(r6)
            monitor-enter(r9)     // Catch: java.lang.Throwable -> L8a
            int r0 = r9.f31176q     // Catch: java.lang.Throwable -> L7e
            r1 = 1073741823(0x3fffffff, float:1.9999999)
            if (r0 <= r1) goto L18
            ju.b r0 = ju.b.REFUSED_STREAM     // Catch: java.lang.Throwable -> L13
            r9.t2(r0)     // Catch: java.lang.Throwable -> L13
            goto L18
        L13:
            r0 = move-exception
            r10 = r0
            r2 = r9
            goto L88
        L18:
            boolean r0 = r9.f31177r     // Catch: java.lang.Throwable -> L7e
            if (r0 != 0) goto L81
            int r1 = r9.f31176q     // Catch: java.lang.Throwable -> L7e
            int r0 = r1 + 2
            r9.f31176q = r0     // Catch: java.lang.Throwable -> L7e
            ju.i r0 = new ju.i     // Catch: java.lang.Throwable -> L7e
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
            java.util.Map r4 = r2.f31173i     // Catch: java.lang.Throwable -> L43
            java.lang.Integer r5 = java.lang.Integer.valueOf(r1)     // Catch: java.lang.Throwable -> L43
            r4.put(r5, r0)     // Catch: java.lang.Throwable -> L43
        L56:
            kotlin.Unit r4 = kotlin.Unit.f32008a     // Catch: java.lang.Throwable -> L43
            monitor-exit(r9)     // Catch: java.lang.Throwable -> L61
            if (r10 != 0) goto L64
            ju.j r10 = r2.K     // Catch: java.lang.Throwable -> L61
            r10.s(r3, r1, r11)     // Catch: java.lang.Throwable -> L61
            goto L6d
        L61:
            r0 = move-exception
        L62:
            r10 = r0
            goto L8d
        L64:
            boolean r3 = r2.f31171d     // Catch: java.lang.Throwable -> L61
            if (r3 != 0) goto L76
            ju.j r3 = r2.K     // Catch: java.lang.Throwable -> L61
            r3.C(r10, r1, r11)     // Catch: java.lang.Throwable -> L61
        L6d:
            monitor-exit(r6)
            if (r12 == 0) goto L75
            ju.j r10 = r2.K
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
            ju.a r10 = new ju.a     // Catch: java.lang.Throwable -> L43
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
        throw new UnsupportedOperationException("Method not decompiled: ju.f.a2(int, java.util.List, boolean):ju.i");
    }

    public static /* synthetic */ void v2(f fVar, boolean z10, fu.e eVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        if ((i10 & 2) != 0) {
            eVar = fu.e.f23765i;
        }
        fVar.u2(z10, eVar);
    }

    public final synchronized ju.i A1(int i10) {
        return (ju.i) this.f31173i.get(Integer.valueOf(i10));
    }

    public final void A2(int i10, ju.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        this.K.I(i10, statusCode);
    }

    public final void B2(int i10, ju.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        fu.d dVar = this.f31179t;
        dVar.i(new k(this.f31174o + '[' + i10 + "] writeSynReset", true, this, i10, errorCode), 0L);
    }

    public final void C2(int i10, long j10) {
        fu.d dVar = this.f31179t;
        dVar.i(new l(this.f31174o + '[' + i10 + "] windowUpdate", true, this, i10, j10), 0L);
    }

    public final Map D1() {
        return this.f31173i;
    }

    public final void K0(ju.b connectionCode, ju.b streamCode, IOException iOException) {
        int i10;
        Object[] objArr;
        Intrinsics.checkNotNullParameter(connectionCode, "connectionCode");
        Intrinsics.checkNotNullParameter(streamCode, "streamCode");
        if (cu.e.f20042h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        try {
            t2(connectionCode);
        } catch (IOException unused) {
        }
        synchronized (this) {
            try {
                if (!this.f31173i.isEmpty()) {
                    objArr = this.f31173i.values().toArray(new ju.i[0]);
                    this.f31173i.clear();
                } else {
                    objArr = null;
                }
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        ju.i[] iVarArr = (ju.i[]) objArr;
        if (iVarArr != null) {
            for (ju.i iVar : iVarArr) {
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
        this.f31179t.n();
        this.f31180u.n();
        this.f31181v.n();
    }

    public final boolean O0() {
        return this.f31171d;
    }

    public final long T1() {
        return this.I;
    }

    public final String V0() {
        return this.f31174o;
    }

    public final ju.j V1() {
        return this.K;
    }

    public final synchronized boolean X1(long j10) {
        if (this.f31177r) {
            return false;
        }
        if (this.A < this.f31185z) {
            if (j10 >= this.C) {
                return false;
            }
        }
        return true;
    }

    public final int Y0() {
        return this.f31175p;
    }

    public final ju.i b2(List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        return a2(0, requestHeaders, z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        K0(ju.b.NO_ERROR, ju.b.CANCEL, null);
    }

    public final c d1() {
        return this.f31172e;
    }

    public final void f2(int i10, BufferedSource source, int i11, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        Buffer buffer = new Buffer();
        long j10 = i11;
        source.U0(j10);
        source.read(buffer, j10);
        this.f31180u.i(new e(this.f31174o + '[' + i10 + "] onData", true, this, i10, buffer, i11, z10), 0L);
    }

    public final void flush() {
        this.K.flush();
    }

    public final void h2(int i10, List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        fu.d dVar = this.f31180u;
        dVar.i(new C0441f(this.f31174o + '[' + i10 + "] onHeaders", true, this, i10, requestHeaders, z10), 0L);
    }

    public final void i2(int i10, List requestHeaders) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        synchronized (this) {
            try {
                if (this.M.contains(Integer.valueOf(i10))) {
                    try {
                        B2(i10, ju.b.PROTOCOL_ERROR);
                        return;
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.M.add(Integer.valueOf(i10));
                fu.d dVar = this.f31180u;
                dVar.i(new g(this.f31174o + '[' + i10 + "] onRequest", true, this, i10, requestHeaders), 0L);
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    public final void j2(int i10, ju.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        fu.d dVar = this.f31180u;
        dVar.i(new h(this.f31174o + '[' + i10 + "] onReset", true, this, i10, errorCode), 0L);
    }

    public final boolean o2(int i10) {
        if (i10 != 0 && (i10 & 1) == 0) {
            return true;
        }
        return false;
    }

    public final synchronized ju.i p2(int i10) {
        ju.i iVar;
        iVar = (ju.i) this.f31173i.remove(Integer.valueOf(i10));
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
        notifyAll();
        return iVar;
    }

    public final void q2() {
        synchronized (this) {
            long j10 = this.A;
            long j11 = this.f31185z;
            if (j10 < j11) {
                return;
            }
            this.f31185z = j11 + 1;
            this.C = System.nanoTime() + 1000000000;
            Unit unit = Unit.f32008a;
            fu.d dVar = this.f31179t;
            dVar.i(new i(this.f31174o + " ping", true, this), 0L);
        }
    }

    public final void r2(int i10) {
        this.f31175p = i10;
    }

    public final void s2(m mVar) {
        Intrinsics.checkNotNullParameter(mVar, "<set-?>");
        this.E = mVar;
    }

    public final void t2(ju.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        synchronized (this.K) {
            Ref.IntRef intRef = new Ref.IntRef();
            synchronized (this) {
                if (this.f31177r) {
                    return;
                }
                this.f31177r = true;
                int i10 = this.f31175p;
                intRef.element = i10;
                Unit unit = Unit.f32008a;
                this.K.p(i10, statusCode, cu.e.f20035a);
            }
        }
    }

    public final void u2(boolean z10, fu.e taskRunner) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        if (z10) {
            this.K.g();
            this.K.J(this.D);
            int c10 = this.D.c();
            if (c10 != 65535) {
                this.K.P(0, c10 - 65535);
            }
        }
        taskRunner.i().i(new fu.c(this.f31174o, true, this.L), 0L);
    }

    public final int w1() {
        return this.f31176q;
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

    public final m x1() {
        return this.D;
    }

    /* JADX WARN: Code restructure failed: missing block: B:58:0x0038, code lost:
        throw new java.io.IOException("stream closed");
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x003a, code lost:
        r2 = java.lang.Math.min((int) java.lang.Math.min(r12, r6 - r4), r8.K.y());
        r6 = r2;
        r8.H += r6;
        r4 = kotlin.Unit.f32008a;
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
            ju.j r12 = r8.K
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
            java.util.Map r2 = r8.f31173i     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
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
            ju.j r4 = r8.K     // Catch: java.lang.Throwable -> L2f
            int r4 = r4.y()     // Catch: java.lang.Throwable -> L2f
            int r2 = java.lang.Math.min(r2, r4)     // Catch: java.lang.Throwable -> L2f
            long r4 = r8.H     // Catch: java.lang.Throwable -> L2f
            long r6 = (long) r2     // Catch: java.lang.Throwable -> L2f
            long r4 = r4 + r6
            r8.H = r4     // Catch: java.lang.Throwable -> L2f
            kotlin.Unit r4 = kotlin.Unit.f32008a     // Catch: java.lang.Throwable -> L2f
            monitor-exit(r8)
            long r12 = r12 - r6
            ju.j r4 = r8.K
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
        throw new UnsupportedOperationException("Method not decompiled: ju.f.x2(int, boolean, okio.Buffer, long):void");
    }

    public final void y2(int i10, boolean z10, List alternating) {
        Intrinsics.checkNotNullParameter(alternating, "alternating");
        this.K.s(z10, i10, alternating);
    }

    public final m z1() {
        return this.E;
    }

    public final void z2(boolean z10, int i10, int i11) {
        try {
            this.K.z(z10, i10, i11);
        } catch (IOException e10) {
            L0(e10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d implements h.c, Function0 {

        /* renamed from: d */
        private final ju.h f31197d;

        /* renamed from: e */
        final /* synthetic */ f f31198e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends fu.a {

            /* renamed from: e */
            final /* synthetic */ f f31199e;

            /* renamed from: f */
            final /* synthetic */ Ref.ObjectRef f31200f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, boolean z10, f fVar, Ref.ObjectRef objectRef) {
                super(str, z10);
                this.f31199e = fVar;
                this.f31200f = objectRef;
            }

            @Override // fu.a
            public long f() {
                this.f31199e.d1().a(this.f31199e, (m) this.f31200f.element);
                return -1L;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends fu.a {

            /* renamed from: e */
            final /* synthetic */ f f31201e;

            /* renamed from: f */
            final /* synthetic */ ju.i f31202f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, boolean z10, f fVar, ju.i iVar) {
                super(str, z10);
                this.f31201e = fVar;
                this.f31202f = iVar;
            }

            @Override // fu.a
            public long f() {
                try {
                    this.f31201e.d1().b(this.f31202f);
                    return -1L;
                } catch (IOException e10) {
                    lu.h g10 = lu.h.f36777a.g();
                    g10.k("Http2Connection.Listener failure for " + this.f31201e.V0(), 4, e10);
                    try {
                        this.f31202f.d(ju.b.PROTOCOL_ERROR, e10);
                        return -1L;
                    } catch (IOException unused) {
                        return -1L;
                    }
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends fu.a {

            /* renamed from: e */
            final /* synthetic */ f f31203e;

            /* renamed from: f */
            final /* synthetic */ int f31204f;

            /* renamed from: g */
            final /* synthetic */ int f31205g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, boolean z10, f fVar, int i10, int i11) {
                super(str, z10);
                this.f31203e = fVar;
                this.f31204f = i10;
                this.f31205g = i11;
            }

            @Override // fu.a
            public long f() {
                this.f31203e.z2(true, this.f31204f, this.f31205g);
                return -1L;
            }
        }

        /* renamed from: ju.f$d$d */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0440d extends fu.a {

            /* renamed from: e */
            final /* synthetic */ d f31206e;

            /* renamed from: f */
            final /* synthetic */ boolean f31207f;

            /* renamed from: g */
            final /* synthetic */ m f31208g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0440d(String str, boolean z10, d dVar, boolean z11, m mVar) {
                super(str, z10);
                this.f31206e = dVar;
                this.f31207f = z11;
                this.f31208g = mVar;
            }

            @Override // fu.a
            public long f() {
                this.f31206e.k(this.f31207f, this.f31208g);
                return -1L;
            }
        }

        public d(f fVar, ju.h reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            this.f31198e = fVar;
            this.f31197d = reader;
        }

        @Override // ju.h.c
        public void a(boolean z10, int i10, int i11, List headerBlock) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f31198e.o2(i10)) {
                this.f31198e.h2(i10, headerBlock, z10);
                return;
            }
            f fVar = this.f31198e;
            synchronized (fVar) {
                ju.i A1 = fVar.A1(i10);
                if (A1 == null) {
                    if (fVar.f31177r) {
                        return;
                    }
                    if (i10 <= fVar.Y0()) {
                        return;
                    }
                    if (i10 % 2 == fVar.w1() % 2) {
                        return;
                    }
                    ju.i iVar = new ju.i(i10, fVar, false, z10, cu.e.Q(headerBlock));
                    fVar.r2(i10);
                    fVar.D1().put(Integer.valueOf(i10), iVar);
                    fu.d i12 = fVar.f31178s.i();
                    i12.i(new b(fVar.V0() + '[' + i10 + "] onStream", true, fVar, iVar), 0L);
                    return;
                }
                Unit unit = Unit.f32008a;
                A1.x(cu.e.Q(headerBlock), z10);
            }
        }

        @Override // ju.h.c
        public void b(int i10, long j10) {
            if (i10 == 0) {
                f fVar = this.f31198e;
                synchronized (fVar) {
                    fVar.I = fVar.T1() + j10;
                    Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                    fVar.notifyAll();
                    Unit unit = Unit.f32008a;
                }
                return;
            }
            ju.i A1 = this.f31198e.A1(i10);
            if (A1 != null) {
                synchronized (A1) {
                    A1.a(j10);
                    Unit unit2 = Unit.f32008a;
                }
            }
        }

        @Override // ju.h.c
        public void c(boolean z10, m settings) {
            Intrinsics.checkNotNullParameter(settings, "settings");
            fu.d dVar = this.f31198e.f31179t;
            dVar.i(new C0440d(this.f31198e.V0() + " applyAndAckSettings", true, this, z10, settings), 0L);
        }

        @Override // ju.h.c
        public void d(int i10, ju.b errorCode) {
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            if (this.f31198e.o2(i10)) {
                this.f31198e.j2(i10, errorCode);
                return;
            }
            ju.i p22 = this.f31198e.p2(i10);
            if (p22 != null) {
                p22.y(errorCode);
            }
        }

        @Override // ju.h.c
        public void e(int i10, int i11, List requestHeaders) {
            Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
            this.f31198e.i2(i11, requestHeaders);
        }

        @Override // ju.h.c
        public void g(boolean z10, int i10, BufferedSource source, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (this.f31198e.o2(i10)) {
                this.f31198e.f2(i10, source, i11, z10);
                return;
            }
            ju.i A1 = this.f31198e.A1(i10);
            if (A1 == null) {
                this.f31198e.B2(i10, ju.b.PROTOCOL_ERROR);
                long j10 = i11;
                this.f31198e.w2(j10);
                source.skip(j10);
                return;
            }
            A1.w(source, i11);
            if (z10) {
                A1.x(cu.e.f20036b, true);
            }
        }

        @Override // ju.h.c
        public void h(boolean z10, int i10, int i11) {
            if (!z10) {
                this.f31198e.f31179t.i(new c(this.f31198e.V0() + " ping", true, this.f31198e, i10, i11), 0L);
                return;
            }
            f fVar = this.f31198e;
            synchronized (fVar) {
                try {
                    if (i10 == 1) {
                        fVar.f31184y++;
                    } else if (i10 == 2) {
                        fVar.A++;
                    } else {
                        if (i10 == 3) {
                            fVar.B++;
                            Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                            fVar.notifyAll();
                        }
                        Unit unit = Unit.f32008a;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            l();
            return Unit.f32008a;
        }

        @Override // ju.h.c
        public void j(int i10, ju.b errorCode, ByteString debugData) {
            int i11;
            Object[] array;
            ju.i[] iVarArr;
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            Intrinsics.checkNotNullParameter(debugData, "debugData");
            debugData.G();
            f fVar = this.f31198e;
            synchronized (fVar) {
                array = fVar.D1().values().toArray(new ju.i[0]);
                fVar.f31177r = true;
                Unit unit = Unit.f32008a;
            }
            for (ju.i iVar : (ju.i[]) array) {
                if (iVar.j() > i10 && iVar.t()) {
                    iVar.y(ju.b.REFUSED_STREAM);
                    this.f31198e.p2(iVar.j());
                }
            }
        }

        /* JADX WARN: Type inference failed for: r13v1 */
        /* JADX WARN: Type inference failed for: r13v2, types: [T, ju.m] */
        /* JADX WARN: Type inference failed for: r13v3 */
        public final void k(boolean z10, m settings) {
            ?? r13;
            long c10;
            int i10;
            ju.i[] iVarArr;
            Intrinsics.checkNotNullParameter(settings, "settings");
            Ref.ObjectRef objectRef = new Ref.ObjectRef();
            ju.j V1 = this.f31198e.V1();
            f fVar = this.f31198e;
            synchronized (V1) {
                synchronized (fVar) {
                    m z12 = fVar.z1();
                    if (z10) {
                        r13 = settings;
                    } else {
                        m mVar = new m();
                        mVar.g(z12);
                        mVar.g(settings);
                        r13 = mVar;
                    }
                    objectRef.element = r13;
                    c10 = r13.c() - z12.c();
                    if (c10 != 0 && !fVar.D1().isEmpty()) {
                        iVarArr = (ju.i[]) fVar.D1().values().toArray(new ju.i[0]);
                        fVar.s2((m) objectRef.element);
                        fVar.f31181v.i(new a(fVar.V0() + " onSettings", true, fVar, objectRef), 0L);
                        Unit unit = Unit.f32008a;
                    }
                    iVarArr = null;
                    fVar.s2((m) objectRef.element);
                    fVar.f31181v.i(new a(fVar.V0() + " onSettings", true, fVar, objectRef), 0L);
                    Unit unit2 = Unit.f32008a;
                }
                try {
                    fVar.V1().a((m) objectRef.element);
                } catch (IOException e10) {
                    fVar.L0(e10);
                }
                Unit unit3 = Unit.f32008a;
            }
            if (iVarArr != null) {
                for (ju.i iVar : iVarArr) {
                    synchronized (iVar) {
                        iVar.a(c10);
                        Unit unit4 = Unit.f32008a;
                    }
                }
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r0v0, types: [ju.b] */
        /* JADX WARN: Type inference failed for: r0v3 */
        /* JADX WARN: Type inference failed for: r0v5, types: [ju.h, java.io.Closeable] */
        public void l() {
            ju.b bVar;
            ju.b bVar2 = ju.b.INTERNAL_ERROR;
            IOException e10 = null;
            try {
                try {
                    this.f31197d.k(this);
                    do {
                    } while (this.f31197d.g(false, this));
                    ju.b bVar3 = ju.b.NO_ERROR;
                    try {
                        this.f31198e.K0(bVar3, ju.b.CANCEL, null);
                        bVar = bVar3;
                    } catch (IOException e11) {
                        e10 = e11;
                        ju.b bVar4 = ju.b.PROTOCOL_ERROR;
                        f fVar = this.f31198e;
                        fVar.K0(bVar4, bVar4, e10);
                        bVar = fVar;
                        bVar2 = this.f31197d;
                        cu.e.m(bVar2);
                    }
                } catch (Throwable th2) {
                    th = th2;
                    this.f31198e.K0(bVar, bVar2, e10);
                    cu.e.m(this.f31197d);
                    throw th;
                }
            } catch (IOException e12) {
                e10 = e12;
            } catch (Throwable th3) {
                th = th3;
                bVar = bVar2;
                this.f31198e.K0(bVar, bVar2, e10);
                cu.e.m(this.f31197d);
                throw th;
            }
            bVar2 = this.f31197d;
            cu.e.m(bVar2);
        }

        @Override // ju.h.c
        public void f() {
        }

        @Override // ju.h.c
        public void i(int i10, int i11, int i12, boolean z10) {
        }
    }
}
