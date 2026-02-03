package cu;

import com.facebook.react.uimanager.events.PointerEventHelper;
import cu.h;
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
    private final cu.j K;
    private final d L;
    private final Set M;

    /* renamed from: d */
    private final boolean f20891d;

    /* renamed from: e */
    private final c f20892e;

    /* renamed from: i */
    private final Map f20893i;

    /* renamed from: o */
    private final String f20894o;

    /* renamed from: p */
    private int f20895p;

    /* renamed from: q */
    private int f20896q;

    /* renamed from: r */
    private boolean f20897r;

    /* renamed from: s */
    private final yt.e f20898s;

    /* renamed from: t */
    private final yt.d f20899t;

    /* renamed from: u */
    private final yt.d f20900u;

    /* renamed from: v */
    private final yt.d f20901v;

    /* renamed from: w */
    private final cu.l f20902w;

    /* renamed from: x */
    private long f20903x;

    /* renamed from: y */
    private long f20904y;

    /* renamed from: z */
    private long f20905z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a */
        private boolean f20906a;

        /* renamed from: b */
        private final yt.e f20907b;

        /* renamed from: c */
        public Socket f20908c;

        /* renamed from: d */
        public String f20909d;

        /* renamed from: e */
        public BufferedSource f20910e;

        /* renamed from: f */
        public BufferedSink f20911f;

        /* renamed from: g */
        private c f20912g;

        /* renamed from: h */
        private cu.l f20913h;

        /* renamed from: i */
        private int f20914i;

        public a(boolean z10, yt.e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            this.f20906a = z10;
            this.f20907b = taskRunner;
            this.f20912g = c.f20916b;
            this.f20913h = cu.l.f21018b;
        }

        public final f a() {
            return new f(this);
        }

        public final boolean b() {
            return this.f20906a;
        }

        public final String c() {
            String str = this.f20909d;
            if (str != null) {
                return str;
            }
            Intrinsics.throwUninitializedPropertyAccessException("connectionName");
            return null;
        }

        public final c d() {
            return this.f20912g;
        }

        public final int e() {
            return this.f20914i;
        }

        public final cu.l f() {
            return this.f20913h;
        }

        public final BufferedSink g() {
            BufferedSink bufferedSink = this.f20911f;
            if (bufferedSink != null) {
                return bufferedSink;
            }
            Intrinsics.throwUninitializedPropertyAccessException("sink");
            return null;
        }

        public final Socket h() {
            Socket socket = this.f20908c;
            if (socket != null) {
                return socket;
            }
            Intrinsics.throwUninitializedPropertyAccessException("socket");
            return null;
        }

        public final BufferedSource i() {
            BufferedSource bufferedSource = this.f20910e;
            if (bufferedSource != null) {
                return bufferedSource;
            }
            Intrinsics.throwUninitializedPropertyAccessException("source");
            return null;
        }

        public final yt.e j() {
            return this.f20907b;
        }

        public final a k(c listener) {
            Intrinsics.checkNotNullParameter(listener, "listener");
            this.f20912g = listener;
            return this;
        }

        public final a l(int i10) {
            this.f20914i = i10;
            return this;
        }

        public final void m(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f20909d = str;
        }

        public final void n(BufferedSink bufferedSink) {
            Intrinsics.checkNotNullParameter(bufferedSink, "<set-?>");
            this.f20911f = bufferedSink;
        }

        public final void o(Socket socket) {
            Intrinsics.checkNotNullParameter(socket, "<set-?>");
            this.f20908c = socket;
        }

        public final void p(BufferedSource bufferedSource) {
            Intrinsics.checkNotNullParameter(bufferedSource, "<set-?>");
            this.f20910e = bufferedSource;
        }

        public final a q(Socket socket, String peerName, BufferedSource source, BufferedSink sink) {
            String str;
            Intrinsics.checkNotNullParameter(socket, "socket");
            Intrinsics.checkNotNullParameter(peerName, "peerName");
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            o(socket);
            if (this.f20906a) {
                str = vt.e.f51536i + ' ' + peerName;
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
        public static final b f20915a = new b(null);

        /* renamed from: b */
        public static final c f20916b = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends c {
            a() {
            }

            @Override // cu.f.c
            public void b(cu.i stream) {
                Intrinsics.checkNotNullParameter(stream, "stream");
                stream.d(cu.b.REFUSED_STREAM, null);
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

        public abstract void b(cu.i iVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends yt.a {

        /* renamed from: e */
        final /* synthetic */ f f20929e;

        /* renamed from: f */
        final /* synthetic */ int f20930f;

        /* renamed from: g */
        final /* synthetic */ Buffer f20931g;

        /* renamed from: h */
        final /* synthetic */ int f20932h;

        /* renamed from: i */
        final /* synthetic */ boolean f20933i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String str, boolean z10, f fVar, int i10, Buffer buffer, int i11, boolean z11) {
            super(str, z10);
            this.f20929e = fVar;
            this.f20930f = i10;
            this.f20931g = buffer;
            this.f20932h = i11;
            this.f20933i = z11;
        }

        @Override // yt.a
        public long f() {
            try {
                boolean d10 = this.f20929e.f20902w.d(this.f20930f, this.f20931g, this.f20932h, this.f20933i);
                if (d10) {
                    this.f20929e.W1().V(this.f20930f, cu.b.CANCEL);
                }
                if (d10 || this.f20933i) {
                    synchronized (this.f20929e) {
                        this.f20929e.M.remove(Integer.valueOf(this.f20930f));
                    }
                    return -1L;
                }
                return -1L;
            } catch (IOException unused) {
                return -1L;
            }
        }
    }

    /* renamed from: cu.f$f */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0277f extends yt.a {

        /* renamed from: e */
        final /* synthetic */ f f20934e;

        /* renamed from: f */
        final /* synthetic */ int f20935f;

        /* renamed from: g */
        final /* synthetic */ List f20936g;

        /* renamed from: h */
        final /* synthetic */ boolean f20937h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0277f(String str, boolean z10, f fVar, int i10, List list, boolean z11) {
            super(str, z10);
            this.f20934e = fVar;
            this.f20935f = i10;
            this.f20936g = list;
            this.f20937h = z11;
        }

        @Override // yt.a
        public long f() {
            boolean b10 = this.f20934e.f20902w.b(this.f20935f, this.f20936g, this.f20937h);
            if (b10) {
                try {
                    this.f20934e.W1().V(this.f20935f, cu.b.CANCEL);
                } catch (IOException unused) {
                    return -1L;
                }
            }
            if (b10 || this.f20937h) {
                synchronized (this.f20934e) {
                    this.f20934e.M.remove(Integer.valueOf(this.f20935f));
                }
                return -1L;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends yt.a {

        /* renamed from: e */
        final /* synthetic */ f f20938e;

        /* renamed from: f */
        final /* synthetic */ int f20939f;

        /* renamed from: g */
        final /* synthetic */ List f20940g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, boolean z10, f fVar, int i10, List list) {
            super(str, z10);
            this.f20938e = fVar;
            this.f20939f = i10;
            this.f20940g = list;
        }

        @Override // yt.a
        public long f() {
            if (this.f20938e.f20902w.a(this.f20939f, this.f20940g)) {
                try {
                    this.f20938e.W1().V(this.f20939f, cu.b.CANCEL);
                    synchronized (this.f20938e) {
                        this.f20938e.M.remove(Integer.valueOf(this.f20939f));
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
    public static final class h extends yt.a {

        /* renamed from: e */
        final /* synthetic */ f f20941e;

        /* renamed from: f */
        final /* synthetic */ int f20942f;

        /* renamed from: g */
        final /* synthetic */ cu.b f20943g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, f fVar, int i10, cu.b bVar) {
            super(str, z10);
            this.f20941e = fVar;
            this.f20942f = i10;
            this.f20943g = bVar;
        }

        @Override // yt.a
        public long f() {
            this.f20941e.f20902w.c(this.f20942f, this.f20943g);
            synchronized (this.f20941e) {
                this.f20941e.M.remove(Integer.valueOf(this.f20942f));
                Unit unit = Unit.f33074a;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i extends yt.a {

        /* renamed from: e */
        final /* synthetic */ f f20944e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(String str, boolean z10, f fVar) {
            super(str, z10);
            this.f20944e = fVar;
        }

        @Override // yt.a
        public long f() {
            this.f20944e.z2(false, 2, 0);
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends yt.a {

        /* renamed from: e */
        final /* synthetic */ f f20945e;

        /* renamed from: f */
        final /* synthetic */ long f20946f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(String str, f fVar, long j10) {
            super(str, false, 2, null);
            this.f20945e = fVar;
            this.f20946f = j10;
        }

        @Override // yt.a
        public long f() {
            boolean z10;
            synchronized (this.f20945e) {
                if (this.f20945e.f20904y >= this.f20945e.f20903x) {
                    this.f20945e.f20903x++;
                    z10 = false;
                } else {
                    z10 = true;
                }
            }
            if (z10) {
                this.f20945e.O0(null);
                return -1L;
            }
            this.f20945e.z2(false, 1, 0);
            return this.f20946f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class k extends yt.a {

        /* renamed from: e */
        final /* synthetic */ f f20947e;

        /* renamed from: f */
        final /* synthetic */ int f20948f;

        /* renamed from: g */
        final /* synthetic */ cu.b f20949g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(String str, boolean z10, f fVar, int i10, cu.b bVar) {
            super(str, z10);
            this.f20947e = fVar;
            this.f20948f = i10;
            this.f20949g = bVar;
        }

        @Override // yt.a
        public long f() {
            try {
                this.f20947e.A2(this.f20948f, this.f20949g);
                return -1L;
            } catch (IOException e10) {
                this.f20947e.O0(e10);
                return -1L;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class l extends yt.a {

        /* renamed from: e */
        final /* synthetic */ f f20950e;

        /* renamed from: f */
        final /* synthetic */ int f20951f;

        /* renamed from: g */
        final /* synthetic */ long f20952g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(String str, boolean z10, f fVar, int i10, long j10) {
            super(str, z10);
            this.f20950e = fVar;
            this.f20951f = i10;
            this.f20952g = j10;
        }

        @Override // yt.a
        public long f() {
            try {
                this.f20950e.W1().D0(this.f20951f, this.f20952g);
                return -1L;
            } catch (IOException e10) {
                this.f20950e.O0(e10);
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
        this.f20891d = b10;
        this.f20892e = builder.d();
        this.f20893i = new LinkedHashMap();
        String c10 = builder.c();
        this.f20894o = c10;
        if (builder.b()) {
            i10 = 3;
        } else {
            i10 = 2;
        }
        this.f20896q = i10;
        yt.e j10 = builder.j();
        this.f20898s = j10;
        yt.d i11 = j10.i();
        this.f20899t = i11;
        this.f20900u = j10.i();
        this.f20901v = j10.i();
        this.f20902w = builder.f();
        m mVar = new m();
        if (builder.b()) {
            mVar.h(7, PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
        }
        this.D = mVar;
        m mVar2 = O;
        this.E = mVar2;
        this.I = mVar2.c();
        this.J = builder.h();
        this.K = new cu.j(builder.g(), b10);
        this.L = new d(this, new cu.h(builder.i(), b10));
        this.M = new LinkedHashSet();
        if (builder.e() != 0) {
            long nanos = TimeUnit.MILLISECONDS.toNanos(builder.e());
            i11.i(new j(c10 + " ping", this, nanos), nanos);
        }
    }

    public final void O0(IOException iOException) {
        cu.b bVar = cu.b.PROTOCOL_ERROR;
        L0(bVar, bVar, iOException);
    }

    /* JADX WARN: Removed duplicated region for block: B:104:0x0070  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x004d A[Catch: all -> 0x0043, TryCatch #1 {all -> 0x0043, blocks: (B:79:0x0027, B:81:0x002c, B:83:0x0034, B:90:0x0047, B:92:0x004d, B:93:0x0056, B:111:0x0082, B:112:0x0087), top: B:120:0x001a }] */
    /* JADX WARN: Removed duplicated region for block: B:96:0x005b A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /* JADX WARN: Removed duplicated region for block: B:99:0x0064 A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final cu.i b2(int r10, java.util.List r11, boolean r12) {
        /*
            r9 = this;
            r3 = r12 ^ 1
            cu.j r6 = r9.K
            monitor-enter(r6)
            monitor-enter(r9)     // Catch: java.lang.Throwable -> L8a
            int r0 = r9.f20896q     // Catch: java.lang.Throwable -> L7e
            r1 = 1073741823(0x3fffffff, float:1.9999999)
            if (r0 <= r1) goto L18
            cu.b r0 = cu.b.REFUSED_STREAM     // Catch: java.lang.Throwable -> L13
            r9.t2(r0)     // Catch: java.lang.Throwable -> L13
            goto L18
        L13:
            r0 = move-exception
            r10 = r0
            r2 = r9
            goto L88
        L18:
            boolean r0 = r9.f20897r     // Catch: java.lang.Throwable -> L7e
            if (r0 != 0) goto L81
            int r1 = r9.f20896q     // Catch: java.lang.Throwable -> L7e
            int r0 = r1 + 2
            r9.f20896q = r0     // Catch: java.lang.Throwable -> L7e
            cu.i r0 = new cu.i     // Catch: java.lang.Throwable -> L7e
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
            java.util.Map r4 = r2.f20893i     // Catch: java.lang.Throwable -> L43
            java.lang.Integer r5 = java.lang.Integer.valueOf(r1)     // Catch: java.lang.Throwable -> L43
            r4.put(r5, r0)     // Catch: java.lang.Throwable -> L43
        L56:
            kotlin.Unit r4 = kotlin.Unit.f33074a     // Catch: java.lang.Throwable -> L43
            monitor-exit(r9)     // Catch: java.lang.Throwable -> L61
            if (r10 != 0) goto L64
            cu.j r10 = r2.K     // Catch: java.lang.Throwable -> L61
            r10.E(r3, r1, r11)     // Catch: java.lang.Throwable -> L61
            goto L6d
        L61:
            r0 = move-exception
        L62:
            r10 = r0
            goto L8d
        L64:
            boolean r3 = r2.f20891d     // Catch: java.lang.Throwable -> L61
            if (r3 != 0) goto L76
            cu.j r3 = r2.K     // Catch: java.lang.Throwable -> L61
            r3.N(r10, r1, r11)     // Catch: java.lang.Throwable -> L61
        L6d:
            monitor-exit(r6)
            if (r12 == 0) goto L75
            cu.j r10 = r2.K
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
            cu.a r10 = new cu.a     // Catch: java.lang.Throwable -> L43
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
        throw new UnsupportedOperationException("Method not decompiled: cu.f.b2(int, java.util.List, boolean):cu.i");
    }

    public static /* synthetic */ void v2(f fVar, boolean z10, yt.e eVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        if ((i10 & 2) != 0) {
            eVar = yt.e.f55195i;
        }
        fVar.u2(z10, eVar);
    }

    public final m A1() {
        return this.E;
    }

    public final void A2(int i10, cu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        this.K.V(i10, statusCode);
    }

    public final synchronized cu.i B1(int i10) {
        return (cu.i) this.f20893i.get(Integer.valueOf(i10));
    }

    public final void B2(int i10, cu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        yt.d dVar = this.f20899t;
        dVar.i(new k(this.f20894o + '[' + i10 + "] writeSynReset", true, this, i10, errorCode), 0L);
    }

    public final void C2(int i10, long j10) {
        yt.d dVar = this.f20899t;
        dVar.i(new l(this.f20894o + '[' + i10 + "] windowUpdate", true, this, i10, j10), 0L);
    }

    public final Map E1() {
        return this.f20893i;
    }

    public final void L0(cu.b connectionCode, cu.b streamCode, IOException iOException) {
        int i10;
        Object[] objArr;
        Intrinsics.checkNotNullParameter(connectionCode, "connectionCode");
        Intrinsics.checkNotNullParameter(streamCode, "streamCode");
        if (vt.e.f51535h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        try {
            t2(connectionCode);
        } catch (IOException unused) {
        }
        synchronized (this) {
            try {
                if (!this.f20893i.isEmpty()) {
                    objArr = this.f20893i.values().toArray(new cu.i[0]);
                    this.f20893i.clear();
                } else {
                    objArr = null;
                }
                Unit unit = Unit.f33074a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        cu.i[] iVarArr = (cu.i[]) objArr;
        if (iVarArr != null) {
            for (cu.i iVar : iVarArr) {
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
        this.f20899t.n();
        this.f20900u.n();
        this.f20901v.n();
    }

    public final long U1() {
        return this.I;
    }

    public final boolean V0() {
        return this.f20891d;
    }

    public final cu.j W1() {
        return this.K;
    }

    public final String Y0() {
        return this.f20894o;
    }

    public final synchronized boolean Y1(long j10) {
        if (this.f20897r) {
            return false;
        }
        if (this.A < this.f20905z) {
            if (j10 >= this.C) {
                return false;
            }
        }
        return true;
    }

    public final int Z0() {
        return this.f20895p;
    }

    public final cu.i c2(List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        return b2(0, requestHeaders, z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        L0(cu.b.NO_ERROR, cu.b.CANCEL, null);
    }

    public final c e1() {
        return this.f20892e;
    }

    public final void f2(int i10, BufferedSource source, int i11, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        Buffer buffer = new Buffer();
        long j10 = i11;
        source.U0(j10);
        source.read(buffer, j10);
        this.f20900u.i(new e(this.f20894o + '[' + i10 + "] onData", true, this, i10, buffer, i11, z10), 0L);
    }

    public final void flush() {
        this.K.flush();
    }

    public final void h2(int i10, List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        yt.d dVar = this.f20900u;
        dVar.i(new C0277f(this.f20894o + '[' + i10 + "] onHeaders", true, this, i10, requestHeaders, z10), 0L);
    }

    public final void i2(int i10, List requestHeaders) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        synchronized (this) {
            try {
                if (this.M.contains(Integer.valueOf(i10))) {
                    try {
                        B2(i10, cu.b.PROTOCOL_ERROR);
                        return;
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.M.add(Integer.valueOf(i10));
                yt.d dVar = this.f20900u;
                dVar.i(new g(this.f20894o + '[' + i10 + "] onRequest", true, this, i10, requestHeaders), 0L);
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    public final void j2(int i10, cu.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        yt.d dVar = this.f20900u;
        dVar.i(new h(this.f20894o + '[' + i10 + "] onReset", true, this, i10, errorCode), 0L);
    }

    public final boolean o2(int i10) {
        if (i10 != 0 && (i10 & 1) == 0) {
            return true;
        }
        return false;
    }

    public final synchronized cu.i p2(int i10) {
        cu.i iVar;
        iVar = (cu.i) this.f20893i.remove(Integer.valueOf(i10));
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
        notifyAll();
        return iVar;
    }

    public final void q2() {
        synchronized (this) {
            long j10 = this.A;
            long j11 = this.f20905z;
            if (j10 < j11) {
                return;
            }
            this.f20905z = j11 + 1;
            this.C = System.nanoTime() + 1000000000;
            Unit unit = Unit.f33074a;
            yt.d dVar = this.f20899t;
            dVar.i(new i(this.f20894o + " ping", true, this), 0L);
        }
    }

    public final void r2(int i10) {
        this.f20895p = i10;
    }

    public final void s2(m mVar) {
        Intrinsics.checkNotNullParameter(mVar, "<set-?>");
        this.E = mVar;
    }

    public final void t2(cu.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        synchronized (this.K) {
            Ref.IntRef intRef = new Ref.IntRef();
            synchronized (this) {
                if (this.f20897r) {
                    return;
                }
                this.f20897r = true;
                int i10 = this.f20895p;
                intRef.element = i10;
                Unit unit = Unit.f33074a;
                this.K.B(i10, statusCode, vt.e.f51528a);
            }
        }
    }

    public final void u2(boolean z10, yt.e taskRunner) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        if (z10) {
            this.K.h();
            this.K.t0(this.D);
            int c10 = this.D.c();
            if (c10 != 65535) {
                this.K.D0(0, c10 - 65535);
            }
        }
        taskRunner.i().i(new yt.c(this.f20894o, true, this.L), 0L);
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
        return this.f20896q;
    }

    /* JADX WARN: Code restructure failed: missing block: B:58:0x0038, code lost:
        throw new java.io.IOException("stream closed");
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x003a, code lost:
        r2 = java.lang.Math.min((int) java.lang.Math.min(r12, r6 - r4), r8.K.F());
        r6 = r2;
        r8.H += r6;
        r4 = kotlin.Unit.f33074a;
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
            cu.j r12 = r8.K
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
            java.util.Map r2 = r8.f20893i     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
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
            cu.j r4 = r8.K     // Catch: java.lang.Throwable -> L2f
            int r4 = r4.F()     // Catch: java.lang.Throwable -> L2f
            int r2 = java.lang.Math.min(r2, r4)     // Catch: java.lang.Throwable -> L2f
            long r4 = r8.H     // Catch: java.lang.Throwable -> L2f
            long r6 = (long) r2     // Catch: java.lang.Throwable -> L2f
            long r4 = r4 + r6
            r8.H = r4     // Catch: java.lang.Throwable -> L2f
            kotlin.Unit r4 = kotlin.Unit.f33074a     // Catch: java.lang.Throwable -> L2f
            monitor-exit(r8)
            long r12 = r12 - r6
            cu.j r4 = r8.K
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
        throw new UnsupportedOperationException("Method not decompiled: cu.f.x2(int, boolean, okio.Buffer, long):void");
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
            O0(e10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d implements h.c, Function0 {

        /* renamed from: d */
        private final cu.h f20917d;

        /* renamed from: e */
        final /* synthetic */ f f20918e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends yt.a {

            /* renamed from: e */
            final /* synthetic */ f f20919e;

            /* renamed from: f */
            final /* synthetic */ Ref.ObjectRef f20920f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, boolean z10, f fVar, Ref.ObjectRef objectRef) {
                super(str, z10);
                this.f20919e = fVar;
                this.f20920f = objectRef;
            }

            @Override // yt.a
            public long f() {
                this.f20919e.e1().a(this.f20919e, (m) this.f20920f.element);
                return -1L;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends yt.a {

            /* renamed from: e */
            final /* synthetic */ f f20921e;

            /* renamed from: f */
            final /* synthetic */ cu.i f20922f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, boolean z10, f fVar, cu.i iVar) {
                super(str, z10);
                this.f20921e = fVar;
                this.f20922f = iVar;
            }

            @Override // yt.a
            public long f() {
                try {
                    this.f20921e.e1().b(this.f20922f);
                    return -1L;
                } catch (IOException e10) {
                    eu.h g10 = eu.h.f23247a.g();
                    g10.k("Http2Connection.Listener failure for " + this.f20921e.Y0(), 4, e10);
                    try {
                        this.f20922f.d(cu.b.PROTOCOL_ERROR, e10);
                        return -1L;
                    } catch (IOException unused) {
                        return -1L;
                    }
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends yt.a {

            /* renamed from: e */
            final /* synthetic */ f f20923e;

            /* renamed from: f */
            final /* synthetic */ int f20924f;

            /* renamed from: g */
            final /* synthetic */ int f20925g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, boolean z10, f fVar, int i10, int i11) {
                super(str, z10);
                this.f20923e = fVar;
                this.f20924f = i10;
                this.f20925g = i11;
            }

            @Override // yt.a
            public long f() {
                this.f20923e.z2(true, this.f20924f, this.f20925g);
                return -1L;
            }
        }

        /* renamed from: cu.f$d$d */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0276d extends yt.a {

            /* renamed from: e */
            final /* synthetic */ d f20926e;

            /* renamed from: f */
            final /* synthetic */ boolean f20927f;

            /* renamed from: g */
            final /* synthetic */ m f20928g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0276d(String str, boolean z10, d dVar, boolean z11, m mVar) {
                super(str, z10);
                this.f20926e = dVar;
                this.f20927f = z11;
                this.f20928g = mVar;
            }

            @Override // yt.a
            public long f() {
                this.f20926e.k(this.f20927f, this.f20928g);
                return -1L;
            }
        }

        public d(f fVar, cu.h reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            this.f20918e = fVar;
            this.f20917d = reader;
        }

        @Override // cu.h.c
        public void a(boolean z10, int i10, int i11, List headerBlock) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f20918e.o2(i10)) {
                this.f20918e.h2(i10, headerBlock, z10);
                return;
            }
            f fVar = this.f20918e;
            synchronized (fVar) {
                cu.i B1 = fVar.B1(i10);
                if (B1 == null) {
                    if (fVar.f20897r) {
                        return;
                    }
                    if (i10 <= fVar.Z0()) {
                        return;
                    }
                    if (i10 % 2 == fVar.x1() % 2) {
                        return;
                    }
                    cu.i iVar = new cu.i(i10, fVar, false, z10, vt.e.Q(headerBlock));
                    fVar.r2(i10);
                    fVar.E1().put(Integer.valueOf(i10), iVar);
                    yt.d i12 = fVar.f20898s.i();
                    i12.i(new b(fVar.Y0() + '[' + i10 + "] onStream", true, fVar, iVar), 0L);
                    return;
                }
                Unit unit = Unit.f33074a;
                B1.x(vt.e.Q(headerBlock), z10);
            }
        }

        @Override // cu.h.c
        public void b(int i10, long j10) {
            if (i10 == 0) {
                f fVar = this.f20918e;
                synchronized (fVar) {
                    fVar.I = fVar.U1() + j10;
                    Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                    fVar.notifyAll();
                    Unit unit = Unit.f33074a;
                }
                return;
            }
            cu.i B1 = this.f20918e.B1(i10);
            if (B1 != null) {
                synchronized (B1) {
                    B1.a(j10);
                    Unit unit2 = Unit.f33074a;
                }
            }
        }

        @Override // cu.h.c
        public void c(int i10, cu.b errorCode, ByteString debugData) {
            int i11;
            Object[] array;
            cu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            Intrinsics.checkNotNullParameter(debugData, "debugData");
            debugData.G();
            f fVar = this.f20918e;
            synchronized (fVar) {
                array = fVar.E1().values().toArray(new cu.i[0]);
                fVar.f20897r = true;
                Unit unit = Unit.f33074a;
            }
            for (cu.i iVar : (cu.i[]) array) {
                if (iVar.j() > i10 && iVar.t()) {
                    iVar.y(cu.b.REFUSED_STREAM);
                    this.f20918e.p2(iVar.j());
                }
            }
        }

        @Override // cu.h.c
        public void d(int i10, int i11, List requestHeaders) {
            Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
            this.f20918e.i2(i11, requestHeaders);
        }

        @Override // cu.h.c
        public void e(boolean z10, m settings) {
            Intrinsics.checkNotNullParameter(settings, "settings");
            yt.d dVar = this.f20918e.f20899t;
            dVar.i(new C0276d(this.f20918e.Y0() + " applyAndAckSettings", true, this, z10, settings), 0L);
        }

        @Override // cu.h.c
        public void g(int i10, cu.b errorCode) {
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            if (this.f20918e.o2(i10)) {
                this.f20918e.j2(i10, errorCode);
                return;
            }
            cu.i p22 = this.f20918e.p2(i10);
            if (p22 != null) {
                p22.y(errorCode);
            }
        }

        @Override // cu.h.c
        public void h(boolean z10, int i10, BufferedSource source, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (this.f20918e.o2(i10)) {
                this.f20918e.f2(i10, source, i11, z10);
                return;
            }
            cu.i B1 = this.f20918e.B1(i10);
            if (B1 == null) {
                this.f20918e.B2(i10, cu.b.PROTOCOL_ERROR);
                long j10 = i11;
                this.f20918e.w2(j10);
                source.skip(j10);
                return;
            }
            B1.w(source, i11);
            if (z10) {
                B1.x(vt.e.f51529b, true);
            }
        }

        @Override // cu.h.c
        public void i(boolean z10, int i10, int i11) {
            if (!z10) {
                this.f20918e.f20899t.i(new c(this.f20918e.Y0() + " ping", true, this.f20918e, i10, i11), 0L);
                return;
            }
            f fVar = this.f20918e;
            synchronized (fVar) {
                try {
                    if (i10 == 1) {
                        fVar.f20904y++;
                    } else if (i10 == 2) {
                        fVar.A++;
                    } else {
                        if (i10 == 3) {
                            fVar.B++;
                            Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                            fVar.notifyAll();
                        }
                        Unit unit = Unit.f33074a;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            l();
            return Unit.f33074a;
        }

        /* JADX WARN: Type inference failed for: r13v1 */
        /* JADX WARN: Type inference failed for: r13v2, types: [T, cu.m] */
        /* JADX WARN: Type inference failed for: r13v3 */
        public final void k(boolean z10, m settings) {
            ?? r13;
            long c10;
            int i10;
            cu.i[] iVarArr;
            Intrinsics.checkNotNullParameter(settings, "settings");
            Ref.ObjectRef objectRef = new Ref.ObjectRef();
            cu.j W1 = this.f20918e.W1();
            f fVar = this.f20918e;
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
                        iVarArr = (cu.i[]) fVar.E1().values().toArray(new cu.i[0]);
                        fVar.s2((m) objectRef.element);
                        fVar.f20901v.i(new a(fVar.Y0() + " onSettings", true, fVar, objectRef), 0L);
                        Unit unit = Unit.f33074a;
                    }
                    iVarArr = null;
                    fVar.s2((m) objectRef.element);
                    fVar.f20901v.i(new a(fVar.Y0() + " onSettings", true, fVar, objectRef), 0L);
                    Unit unit2 = Unit.f33074a;
                }
                try {
                    fVar.W1().a((m) objectRef.element);
                } catch (IOException e10) {
                    fVar.O0(e10);
                }
                Unit unit3 = Unit.f33074a;
            }
            if (iVarArr != null) {
                for (cu.i iVar : iVarArr) {
                    synchronized (iVar) {
                        iVar.a(c10);
                        Unit unit4 = Unit.f33074a;
                    }
                }
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r0v0, types: [cu.b] */
        /* JADX WARN: Type inference failed for: r0v3 */
        /* JADX WARN: Type inference failed for: r0v5, types: [cu.h, java.io.Closeable] */
        public void l() {
            cu.b bVar;
            cu.b bVar2 = cu.b.INTERNAL_ERROR;
            IOException e10 = null;
            try {
                try {
                    this.f20917d.l(this);
                    do {
                    } while (this.f20917d.h(false, this));
                    cu.b bVar3 = cu.b.NO_ERROR;
                    try {
                        this.f20918e.L0(bVar3, cu.b.CANCEL, null);
                        bVar = bVar3;
                    } catch (IOException e11) {
                        e10 = e11;
                        cu.b bVar4 = cu.b.PROTOCOL_ERROR;
                        f fVar = this.f20918e;
                        fVar.L0(bVar4, bVar4, e10);
                        bVar = fVar;
                        bVar2 = this.f20917d;
                        vt.e.m(bVar2);
                    }
                } catch (Throwable th2) {
                    th = th2;
                    this.f20918e.L0(bVar, bVar2, e10);
                    vt.e.m(this.f20917d);
                    throw th;
                }
            } catch (IOException e12) {
                e10 = e12;
            } catch (Throwable th3) {
                th = th3;
                bVar = bVar2;
                this.f20918e.L0(bVar, bVar2, e10);
                vt.e.m(this.f20917d);
                throw th;
            }
            bVar2 = this.f20917d;
            vt.e.m(bVar2);
        }

        @Override // cu.h.c
        public void f() {
        }

        @Override // cu.h.c
        public void j(int i10, int i11, int i12, boolean z10) {
        }
    }
}
