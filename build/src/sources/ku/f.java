package ku;

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
import ku.h;
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
    private final ku.j K;
    private final d L;
    private final Set M;

    /* renamed from: d */
    private final boolean f35311d;

    /* renamed from: e */
    private final c f35312e;

    /* renamed from: i */
    private final Map f35313i;

    /* renamed from: o */
    private final String f35314o;

    /* renamed from: p */
    private int f35315p;

    /* renamed from: q */
    private int f35316q;

    /* renamed from: r */
    private boolean f35317r;

    /* renamed from: s */
    private final gu.e f35318s;

    /* renamed from: t */
    private final gu.d f35319t;

    /* renamed from: u */
    private final gu.d f35320u;

    /* renamed from: v */
    private final gu.d f35321v;

    /* renamed from: w */
    private final ku.l f35322w;

    /* renamed from: x */
    private long f35323x;

    /* renamed from: y */
    private long f35324y;

    /* renamed from: z */
    private long f35325z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a */
        private boolean f35326a;

        /* renamed from: b */
        private final gu.e f35327b;

        /* renamed from: c */
        public Socket f35328c;

        /* renamed from: d */
        public String f35329d;

        /* renamed from: e */
        public BufferedSource f35330e;

        /* renamed from: f */
        public BufferedSink f35331f;

        /* renamed from: g */
        private c f35332g;

        /* renamed from: h */
        private ku.l f35333h;

        /* renamed from: i */
        private int f35334i;

        public a(boolean z10, gu.e taskRunner) {
            Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
            this.f35326a = z10;
            this.f35327b = taskRunner;
            this.f35332g = c.f35336b;
            this.f35333h = ku.l.f35438b;
        }

        public final f a() {
            return new f(this);
        }

        public final boolean b() {
            return this.f35326a;
        }

        public final String c() {
            String str = this.f35329d;
            if (str != null) {
                return str;
            }
            Intrinsics.throwUninitializedPropertyAccessException("connectionName");
            return null;
        }

        public final c d() {
            return this.f35332g;
        }

        public final int e() {
            return this.f35334i;
        }

        public final ku.l f() {
            return this.f35333h;
        }

        public final BufferedSink g() {
            BufferedSink bufferedSink = this.f35331f;
            if (bufferedSink != null) {
                return bufferedSink;
            }
            Intrinsics.throwUninitializedPropertyAccessException("sink");
            return null;
        }

        public final Socket h() {
            Socket socket = this.f35328c;
            if (socket != null) {
                return socket;
            }
            Intrinsics.throwUninitializedPropertyAccessException("socket");
            return null;
        }

        public final BufferedSource i() {
            BufferedSource bufferedSource = this.f35330e;
            if (bufferedSource != null) {
                return bufferedSource;
            }
            Intrinsics.throwUninitializedPropertyAccessException("source");
            return null;
        }

        public final gu.e j() {
            return this.f35327b;
        }

        public final a k(c listener) {
            Intrinsics.checkNotNullParameter(listener, "listener");
            this.f35332g = listener;
            return this;
        }

        public final a l(int i10) {
            this.f35334i = i10;
            return this;
        }

        public final void m(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f35329d = str;
        }

        public final void n(BufferedSink bufferedSink) {
            Intrinsics.checkNotNullParameter(bufferedSink, "<set-?>");
            this.f35331f = bufferedSink;
        }

        public final void o(Socket socket) {
            Intrinsics.checkNotNullParameter(socket, "<set-?>");
            this.f35328c = socket;
        }

        public final void p(BufferedSource bufferedSource) {
            Intrinsics.checkNotNullParameter(bufferedSource, "<set-?>");
            this.f35330e = bufferedSource;
        }

        public final a q(Socket socket, String peerName, BufferedSource source, BufferedSink sink) {
            String str;
            Intrinsics.checkNotNullParameter(socket, "socket");
            Intrinsics.checkNotNullParameter(peerName, "peerName");
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(sink, "sink");
            o(socket);
            if (this.f35326a) {
                str = du.e.f20987i + ' ' + peerName;
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
        public static final b f35335a = new b(null);

        /* renamed from: b */
        public static final c f35336b = new a();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends c {
            a() {
            }

            @Override // ku.f.c
            public void b(ku.i stream) {
                Intrinsics.checkNotNullParameter(stream, "stream");
                stream.d(ku.b.REFUSED_STREAM, null);
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

        public abstract void b(ku.i iVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends gu.a {

        /* renamed from: e */
        final /* synthetic */ f f35349e;

        /* renamed from: f */
        final /* synthetic */ int f35350f;

        /* renamed from: g */
        final /* synthetic */ Buffer f35351g;

        /* renamed from: h */
        final /* synthetic */ int f35352h;

        /* renamed from: i */
        final /* synthetic */ boolean f35353i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String str, boolean z10, f fVar, int i10, Buffer buffer, int i11, boolean z11) {
            super(str, z10);
            this.f35349e = fVar;
            this.f35350f = i10;
            this.f35351g = buffer;
            this.f35352h = i11;
            this.f35353i = z11;
        }

        @Override // gu.a
        public long f() {
            try {
                boolean d10 = this.f35349e.f35322w.d(this.f35350f, this.f35351g, this.f35352h, this.f35353i);
                if (d10) {
                    this.f35349e.U1().I(this.f35350f, ku.b.CANCEL);
                }
                if (d10 || this.f35353i) {
                    synchronized (this.f35349e) {
                        this.f35349e.M.remove(Integer.valueOf(this.f35350f));
                    }
                    return -1L;
                }
                return -1L;
            } catch (IOException unused) {
                return -1L;
            }
        }
    }

    /* renamed from: ku.f$f */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0500f extends gu.a {

        /* renamed from: e */
        final /* synthetic */ f f35354e;

        /* renamed from: f */
        final /* synthetic */ int f35355f;

        /* renamed from: g */
        final /* synthetic */ List f35356g;

        /* renamed from: h */
        final /* synthetic */ boolean f35357h;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0500f(String str, boolean z10, f fVar, int i10, List list, boolean z11) {
            super(str, z10);
            this.f35354e = fVar;
            this.f35355f = i10;
            this.f35356g = list;
            this.f35357h = z11;
        }

        @Override // gu.a
        public long f() {
            boolean c10 = this.f35354e.f35322w.c(this.f35355f, this.f35356g, this.f35357h);
            if (c10) {
                try {
                    this.f35354e.U1().I(this.f35355f, ku.b.CANCEL);
                } catch (IOException unused) {
                    return -1L;
                }
            }
            if (c10 || this.f35357h) {
                synchronized (this.f35354e) {
                    this.f35354e.M.remove(Integer.valueOf(this.f35355f));
                }
                return -1L;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g extends gu.a {

        /* renamed from: e */
        final /* synthetic */ f f35358e;

        /* renamed from: f */
        final /* synthetic */ int f35359f;

        /* renamed from: g */
        final /* synthetic */ List f35360g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String str, boolean z10, f fVar, int i10, List list) {
            super(str, z10);
            this.f35358e = fVar;
            this.f35359f = i10;
            this.f35360g = list;
        }

        @Override // gu.a
        public long f() {
            if (this.f35358e.f35322w.b(this.f35359f, this.f35360g)) {
                try {
                    this.f35358e.U1().I(this.f35359f, ku.b.CANCEL);
                    synchronized (this.f35358e) {
                        this.f35358e.M.remove(Integer.valueOf(this.f35359f));
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
    public static final class h extends gu.a {

        /* renamed from: e */
        final /* synthetic */ f f35361e;

        /* renamed from: f */
        final /* synthetic */ int f35362f;

        /* renamed from: g */
        final /* synthetic */ ku.b f35363g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(String str, boolean z10, f fVar, int i10, ku.b bVar) {
            super(str, z10);
            this.f35361e = fVar;
            this.f35362f = i10;
            this.f35363g = bVar;
        }

        @Override // gu.a
        public long f() {
            this.f35361e.f35322w.a(this.f35362f, this.f35363g);
            synchronized (this.f35361e) {
                this.f35361e.M.remove(Integer.valueOf(this.f35362f));
                Unit unit = Unit.f31765a;
            }
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i extends gu.a {

        /* renamed from: e */
        final /* synthetic */ f f35364e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(String str, boolean z10, f fVar) {
            super(str, z10);
            this.f35364e = fVar;
        }

        @Override // gu.a
        public long f() {
            this.f35364e.z2(false, 2, 0);
            return -1L;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends gu.a {

        /* renamed from: e */
        final /* synthetic */ f f35365e;

        /* renamed from: f */
        final /* synthetic */ long f35366f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public j(String str, f fVar, long j10) {
            super(str, false, 2, null);
            this.f35365e = fVar;
            this.f35366f = j10;
        }

        @Override // gu.a
        public long f() {
            boolean z10;
            synchronized (this.f35365e) {
                if (this.f35365e.f35324y >= this.f35365e.f35323x) {
                    this.f35365e.f35323x++;
                    z10 = false;
                } else {
                    z10 = true;
                }
            }
            if (z10) {
                this.f35365e.O0(null);
                return -1L;
            }
            this.f35365e.z2(false, 1, 0);
            return this.f35366f;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class k extends gu.a {

        /* renamed from: e */
        final /* synthetic */ f f35367e;

        /* renamed from: f */
        final /* synthetic */ int f35368f;

        /* renamed from: g */
        final /* synthetic */ ku.b f35369g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(String str, boolean z10, f fVar, int i10, ku.b bVar) {
            super(str, z10);
            this.f35367e = fVar;
            this.f35368f = i10;
            this.f35369g = bVar;
        }

        @Override // gu.a
        public long f() {
            try {
                this.f35367e.A2(this.f35368f, this.f35369g);
                return -1L;
            } catch (IOException e10) {
                this.f35367e.O0(e10);
                return -1L;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class l extends gu.a {

        /* renamed from: e */
        final /* synthetic */ f f35370e;

        /* renamed from: f */
        final /* synthetic */ int f35371f;

        /* renamed from: g */
        final /* synthetic */ long f35372g;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(String str, boolean z10, f fVar, int i10, long j10) {
            super(str, z10);
            this.f35370e = fVar;
            this.f35371f = i10;
            this.f35372g = j10;
        }

        @Override // gu.a
        public long f() {
            try {
                this.f35370e.U1().Q(this.f35371f, this.f35372g);
                return -1L;
            } catch (IOException e10) {
                this.f35370e.O0(e10);
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
        this.f35311d = b10;
        this.f35312e = builder.d();
        this.f35313i = new LinkedHashMap();
        String c10 = builder.c();
        this.f35314o = c10;
        if (builder.b()) {
            i10 = 3;
        } else {
            i10 = 2;
        }
        this.f35316q = i10;
        gu.e j10 = builder.j();
        this.f35318s = j10;
        gu.d i11 = j10.i();
        this.f35319t = i11;
        this.f35320u = j10.i();
        this.f35321v = j10.i();
        this.f35322w = builder.f();
        m mVar = new m();
        if (builder.b()) {
            mVar.h(7, PointerEventHelper.X_FLAG_SUPPORTS_HOVER);
        }
        this.D = mVar;
        m mVar2 = O;
        this.E = mVar2;
        this.I = mVar2.c();
        this.J = builder.h();
        this.K = new ku.j(builder.g(), b10);
        this.L = new d(this, new ku.h(builder.i(), b10));
        this.M = new LinkedHashSet();
        if (builder.e() != 0) {
            long nanos = TimeUnit.MILLISECONDS.toNanos(builder.e());
            i11.i(new j(c10 + " ping", this, nanos), nanos);
        }
    }

    public final void O0(IOException iOException) {
        ku.b bVar = ku.b.PROTOCOL_ERROR;
        J0(bVar, bVar, iOException);
    }

    /* JADX WARN: Removed duplicated region for block: B:104:0x0070  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x004d A[Catch: all -> 0x0043, TryCatch #1 {all -> 0x0043, blocks: (B:79:0x0027, B:81:0x002c, B:83:0x0034, B:90:0x0047, B:92:0x004d, B:93:0x0056, B:111:0x0082, B:112:0x0087), top: B:120:0x001a }] */
    /* JADX WARN: Removed duplicated region for block: B:96:0x005b A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /* JADX WARN: Removed duplicated region for block: B:99:0x0064 A[Catch: all -> 0x0061, TryCatch #0 {all -> 0x0061, blocks: (B:94:0x0058, B:96:0x005b, B:99:0x0064, B:101:0x0068, B:106:0x0076, B:107:0x007d, B:113:0x0088, B:114:0x0089), top: B:119:0x0005 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final ku.i Z1(int r10, java.util.List r11, boolean r12) {
        /*
            r9 = this;
            r3 = r12 ^ 1
            ku.j r6 = r9.K
            monitor-enter(r6)
            monitor-enter(r9)     // Catch: java.lang.Throwable -> L8a
            int r0 = r9.f35316q     // Catch: java.lang.Throwable -> L7e
            r1 = 1073741823(0x3fffffff, float:1.9999999)
            if (r0 <= r1) goto L18
            ku.b r0 = ku.b.REFUSED_STREAM     // Catch: java.lang.Throwable -> L13
            r9.t2(r0)     // Catch: java.lang.Throwable -> L13
            goto L18
        L13:
            r0 = move-exception
            r10 = r0
            r2 = r9
            goto L88
        L18:
            boolean r0 = r9.f35317r     // Catch: java.lang.Throwable -> L7e
            if (r0 != 0) goto L81
            int r1 = r9.f35316q     // Catch: java.lang.Throwable -> L7e
            int r0 = r1 + 2
            r9.f35316q = r0     // Catch: java.lang.Throwable -> L7e
            ku.i r0 = new ku.i     // Catch: java.lang.Throwable -> L7e
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
            java.util.Map r4 = r2.f35313i     // Catch: java.lang.Throwable -> L43
            java.lang.Integer r5 = java.lang.Integer.valueOf(r1)     // Catch: java.lang.Throwable -> L43
            r4.put(r5, r0)     // Catch: java.lang.Throwable -> L43
        L56:
            kotlin.Unit r4 = kotlin.Unit.f31765a     // Catch: java.lang.Throwable -> L43
            monitor-exit(r9)     // Catch: java.lang.Throwable -> L61
            if (r10 != 0) goto L64
            ku.j r10 = r2.K     // Catch: java.lang.Throwable -> L61
            r10.s(r3, r1, r11)     // Catch: java.lang.Throwable -> L61
            goto L6d
        L61:
            r0 = move-exception
        L62:
            r10 = r0
            goto L8d
        L64:
            boolean r3 = r2.f35311d     // Catch: java.lang.Throwable -> L61
            if (r3 != 0) goto L76
            ku.j r3 = r2.K     // Catch: java.lang.Throwable -> L61
            r3.C(r10, r1, r11)     // Catch: java.lang.Throwable -> L61
        L6d:
            monitor-exit(r6)
            if (r12 == 0) goto L75
            ku.j r10 = r2.K
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
            ku.a r10 = new ku.a     // Catch: java.lang.Throwable -> L43
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
        throw new UnsupportedOperationException("Method not decompiled: ku.f.Z1(int, java.util.List, boolean):ku.i");
    }

    public static /* synthetic */ void v2(f fVar, boolean z10, gu.e eVar, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        if ((i10 & 2) != 0) {
            eVar = gu.e.f24820i;
        }
        fVar.u2(z10, eVar);
    }

    public final void A2(int i10, ku.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        this.K.I(i10, statusCode);
    }

    public final void B2(int i10, ku.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        gu.d dVar = this.f35319t;
        dVar.i(new k(this.f35314o + '[' + i10 + "] writeSynReset", true, this, i10, errorCode), 0L);
    }

    public final void C2(int i10, long j10) {
        gu.d dVar = this.f35319t;
        dVar.i(new l(this.f35314o + '[' + i10 + "] windowUpdate", true, this, i10, j10), 0L);
    }

    public final void J0(ku.b connectionCode, ku.b streamCode, IOException iOException) {
        int i10;
        Object[] objArr;
        Intrinsics.checkNotNullParameter(connectionCode, "connectionCode");
        Intrinsics.checkNotNullParameter(streamCode, "streamCode");
        if (du.e.f20986h && Thread.holdsLock(this)) {
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST NOT hold lock on " + this);
        }
        try {
            t2(connectionCode);
        } catch (IOException unused) {
        }
        synchronized (this) {
            try {
                if (!this.f35313i.isEmpty()) {
                    objArr = this.f35313i.values().toArray(new ku.i[0]);
                    this.f35313i.clear();
                } else {
                    objArr = null;
                }
                Unit unit = Unit.f31765a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        ku.i[] iVarArr = (ku.i[]) objArr;
        if (iVarArr != null) {
            for (ku.i iVar : iVarArr) {
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
        this.f35319t.n();
        this.f35320u.n();
        this.f35321v.n();
    }

    public final boolean R0() {
        return this.f35311d;
    }

    public final long S1() {
        return this.I;
    }

    public final ku.j U1() {
        return this.K;
    }

    public final String V0() {
        return this.f35314o;
    }

    public final int W0() {
        return this.f35315p;
    }

    public final synchronized boolean W1(long j10) {
        if (this.f35317r) {
            return false;
        }
        if (this.A < this.f35325z) {
            if (j10 >= this.C) {
                return false;
            }
        }
        return true;
    }

    public final c a1() {
        return this.f35312e;
    }

    public final ku.i a2(List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        return Z1(0, requestHeaders, z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        J0(ku.b.NO_ERROR, ku.b.CANCEL, null);
    }

    public final void e2(int i10, BufferedSource source, int i11, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        Buffer buffer = new Buffer();
        long j10 = i11;
        source.Q0(j10);
        source.read(buffer, j10);
        this.f35320u.i(new e(this.f35314o + '[' + i10 + "] onData", true, this, i10, buffer, i11, z10), 0L);
    }

    public final void flush() {
        this.K.flush();
    }

    public final void g2(int i10, List requestHeaders, boolean z10) {
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        gu.d dVar = this.f35320u;
        dVar.i(new C0500f(this.f35314o + '[' + i10 + "] onHeaders", true, this, i10, requestHeaders, z10), 0L);
    }

    public final void h2(int i10, List requestHeaders) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        synchronized (this) {
            try {
                if (this.M.contains(Integer.valueOf(i10))) {
                    try {
                        B2(i10, ku.b.PROTOCOL_ERROR);
                        return;
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                }
                this.M.add(Integer.valueOf(i10));
                gu.d dVar = this.f35320u;
                dVar.i(new g(this.f35314o + '[' + i10 + "] onRequest", true, this, i10, requestHeaders), 0L);
            } catch (Throwable th4) {
                th2 = th4;
            }
        }
    }

    public final void j2(int i10, ku.b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        gu.d dVar = this.f35320u;
        dVar.i(new h(this.f35314o + '[' + i10 + "] onReset", true, this, i10, errorCode), 0L);
    }

    public final boolean o2(int i10) {
        if (i10 != 0 && (i10 & 1) == 0) {
            return true;
        }
        return false;
    }

    public final synchronized ku.i p2(int i10) {
        ku.i iVar;
        iVar = (ku.i) this.f35313i.remove(Integer.valueOf(i10));
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
        notifyAll();
        return iVar;
    }

    public final void q2() {
        synchronized (this) {
            long j10 = this.A;
            long j11 = this.f35325z;
            if (j10 < j11) {
                return;
            }
            this.f35325z = j11 + 1;
            this.C = System.nanoTime() + 1000000000;
            Unit unit = Unit.f31765a;
            gu.d dVar = this.f35319t;
            dVar.i(new i(this.f35314o + " ping", true, this), 0L);
        }
    }

    public final int r1() {
        return this.f35316q;
    }

    public final void r2(int i10) {
        this.f35315p = i10;
    }

    public final m s1() {
        return this.D;
    }

    public final void s2(m mVar) {
        Intrinsics.checkNotNullParameter(mVar, "<set-?>");
        this.E = mVar;
    }

    public final void t2(ku.b statusCode) {
        Intrinsics.checkNotNullParameter(statusCode, "statusCode");
        synchronized (this.K) {
            Ref.IntRef intRef = new Ref.IntRef();
            synchronized (this) {
                if (this.f35317r) {
                    return;
                }
                this.f35317r = true;
                int i10 = this.f35315p;
                intRef.element = i10;
                Unit unit = Unit.f31765a;
                this.K.p(i10, statusCode, du.e.f20979a);
            }
        }
    }

    public final m u1() {
        return this.E;
    }

    public final void u2(boolean z10, gu.e taskRunner) {
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        if (z10) {
            this.K.g();
            this.K.J(this.D);
            int c10 = this.D.c();
            if (c10 != 65535) {
                this.K.Q(0, c10 - 65535);
            }
        }
        taskRunner.i().i(new gu.c(this.f35314o, true, this.L), 0L);
    }

    public final synchronized ku.i w1(int i10) {
        return (ku.i) this.f35313i.get(Integer.valueOf(i10));
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

    /* JADX WARN: Code restructure failed: missing block: B:58:0x0038, code lost:
        throw new java.io.IOException("stream closed");
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x003a, code lost:
        r2 = java.lang.Math.min((int) java.lang.Math.min(r12, r6 - r4), r8.K.y());
        r6 = r2;
        r8.H += r6;
        r4 = kotlin.Unit.f31765a;
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
            ku.j r12 = r8.K
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
            java.util.Map r2 = r8.f35313i     // Catch: java.lang.Throwable -> L2f java.lang.InterruptedException -> L62
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
            ku.j r4 = r8.K     // Catch: java.lang.Throwable -> L2f
            int r4 = r4.y()     // Catch: java.lang.Throwable -> L2f
            int r2 = java.lang.Math.min(r2, r4)     // Catch: java.lang.Throwable -> L2f
            long r4 = r8.H     // Catch: java.lang.Throwable -> L2f
            long r6 = (long) r2     // Catch: java.lang.Throwable -> L2f
            long r4 = r4 + r6
            r8.H = r4     // Catch: java.lang.Throwable -> L2f
            kotlin.Unit r4 = kotlin.Unit.f31765a     // Catch: java.lang.Throwable -> L2f
            monitor-exit(r8)
            long r12 = r12 - r6
            ku.j r4 = r8.K
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
        throw new UnsupportedOperationException("Method not decompiled: ku.f.x2(int, boolean, okio.Buffer, long):void");
    }

    public final void y2(int i10, boolean z10, List alternating) {
        Intrinsics.checkNotNullParameter(alternating, "alternating");
        this.K.s(z10, i10, alternating);
    }

    public final Map z1() {
        return this.f35313i;
    }

    public final void z2(boolean z10, int i10, int i11) {
        try {
            this.K.z(z10, i10, i11);
        } catch (IOException e10) {
            O0(e10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d implements h.c, Function0 {

        /* renamed from: d */
        private final ku.h f35337d;

        /* renamed from: e */
        final /* synthetic */ f f35338e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends gu.a {

            /* renamed from: e */
            final /* synthetic */ f f35339e;

            /* renamed from: f */
            final /* synthetic */ Ref.ObjectRef f35340f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(String str, boolean z10, f fVar, Ref.ObjectRef objectRef) {
                super(str, z10);
                this.f35339e = fVar;
                this.f35340f = objectRef;
            }

            @Override // gu.a
            public long f() {
                this.f35339e.a1().a(this.f35339e, (m) this.f35340f.element);
                return -1L;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends gu.a {

            /* renamed from: e */
            final /* synthetic */ f f35341e;

            /* renamed from: f */
            final /* synthetic */ ku.i f35342f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, boolean z10, f fVar, ku.i iVar) {
                super(str, z10);
                this.f35341e = fVar;
                this.f35342f = iVar;
            }

            @Override // gu.a
            public long f() {
                try {
                    this.f35341e.a1().b(this.f35342f);
                    return -1L;
                } catch (IOException e10) {
                    mu.h g10 = mu.h.f37655a.g();
                    g10.k("Http2Connection.Listener failure for " + this.f35341e.V0(), 4, e10);
                    try {
                        this.f35342f.d(ku.b.PROTOCOL_ERROR, e10);
                        return -1L;
                    } catch (IOException unused) {
                        return -1L;
                    }
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends gu.a {

            /* renamed from: e */
            final /* synthetic */ f f35343e;

            /* renamed from: f */
            final /* synthetic */ int f35344f;

            /* renamed from: g */
            final /* synthetic */ int f35345g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(String str, boolean z10, f fVar, int i10, int i11) {
                super(str, z10);
                this.f35343e = fVar;
                this.f35344f = i10;
                this.f35345g = i11;
            }

            @Override // gu.a
            public long f() {
                this.f35343e.z2(true, this.f35344f, this.f35345g);
                return -1L;
            }
        }

        /* renamed from: ku.f$d$d */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0499d extends gu.a {

            /* renamed from: e */
            final /* synthetic */ d f35346e;

            /* renamed from: f */
            final /* synthetic */ boolean f35347f;

            /* renamed from: g */
            final /* synthetic */ m f35348g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public C0499d(String str, boolean z10, d dVar, boolean z11, m mVar) {
                super(str, z10);
                this.f35346e = dVar;
                this.f35347f = z11;
                this.f35348g = mVar;
            }

            @Override // gu.a
            public long f() {
                this.f35346e.k(this.f35347f, this.f35348g);
                return -1L;
            }
        }

        public d(f fVar, ku.h reader) {
            Intrinsics.checkNotNullParameter(reader, "reader");
            this.f35338e = fVar;
            this.f35337d = reader;
        }

        @Override // ku.h.c
        public void a(boolean z10, int i10, int i11, List headerBlock) {
            Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
            if (this.f35338e.o2(i10)) {
                this.f35338e.g2(i10, headerBlock, z10);
                return;
            }
            f fVar = this.f35338e;
            synchronized (fVar) {
                ku.i w12 = fVar.w1(i10);
                if (w12 == null) {
                    if (fVar.f35317r) {
                        return;
                    }
                    if (i10 <= fVar.W0()) {
                        return;
                    }
                    if (i10 % 2 == fVar.r1() % 2) {
                        return;
                    }
                    ku.i iVar = new ku.i(i10, fVar, false, z10, du.e.Q(headerBlock));
                    fVar.r2(i10);
                    fVar.z1().put(Integer.valueOf(i10), iVar);
                    gu.d i12 = fVar.f35318s.i();
                    i12.i(new b(fVar.V0() + '[' + i10 + "] onStream", true, fVar, iVar), 0L);
                    return;
                }
                Unit unit = Unit.f31765a;
                w12.x(du.e.Q(headerBlock), z10);
            }
        }

        @Override // ku.h.c
        public void b(int i10, long j10) {
            if (i10 == 0) {
                f fVar = this.f35338e;
                synchronized (fVar) {
                    fVar.I = fVar.S1() + j10;
                    Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                    fVar.notifyAll();
                    Unit unit = Unit.f31765a;
                }
                return;
            }
            ku.i w12 = this.f35338e.w1(i10);
            if (w12 != null) {
                synchronized (w12) {
                    w12.a(j10);
                    Unit unit2 = Unit.f31765a;
                }
            }
        }

        @Override // ku.h.c
        public void c(int i10, int i11, List requestHeaders) {
            Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
            this.f35338e.h2(i11, requestHeaders);
        }

        @Override // ku.h.c
        public void d(int i10, ku.b errorCode) {
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            if (this.f35338e.o2(i10)) {
                this.f35338e.j2(i10, errorCode);
                return;
            }
            ku.i p22 = this.f35338e.p2(i10);
            if (p22 != null) {
                p22.y(errorCode);
            }
        }

        @Override // ku.h.c
        public void f(boolean z10, m settings) {
            Intrinsics.checkNotNullParameter(settings, "settings");
            gu.d dVar = this.f35338e.f35319t;
            dVar.i(new C0499d(this.f35338e.V0() + " applyAndAckSettings", true, this, z10, settings), 0L);
        }

        @Override // ku.h.c
        public void g(boolean z10, int i10, BufferedSource source, int i11) {
            Intrinsics.checkNotNullParameter(source, "source");
            if (this.f35338e.o2(i10)) {
                this.f35338e.e2(i10, source, i11, z10);
                return;
            }
            ku.i w12 = this.f35338e.w1(i10);
            if (w12 == null) {
                this.f35338e.B2(i10, ku.b.PROTOCOL_ERROR);
                long j10 = i11;
                this.f35338e.w2(j10);
                source.skip(j10);
                return;
            }
            w12.w(source, i11);
            if (z10) {
                w12.x(du.e.f20980b, true);
            }
        }

        @Override // ku.h.c
        public void h(boolean z10, int i10, int i11) {
            if (!z10) {
                this.f35338e.f35319t.i(new c(this.f35338e.V0() + " ping", true, this.f35338e, i10, i11), 0L);
                return;
            }
            f fVar = this.f35338e;
            synchronized (fVar) {
                try {
                    if (i10 == 1) {
                        fVar.f35324y++;
                    } else if (i10 == 2) {
                        fVar.A++;
                    } else {
                        if (i10 == 3) {
                            fVar.B++;
                            Intrinsics.checkNotNull(fVar, "null cannot be cast to non-null type java.lang.Object");
                            fVar.notifyAll();
                        }
                        Unit unit = Unit.f31765a;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            l();
            return Unit.f31765a;
        }

        @Override // ku.h.c
        public void j(int i10, ku.b errorCode, ByteString debugData) {
            int i11;
            Object[] array;
            ku.i[] iVarArr;
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            Intrinsics.checkNotNullParameter(debugData, "debugData");
            debugData.G();
            f fVar = this.f35338e;
            synchronized (fVar) {
                array = fVar.z1().values().toArray(new ku.i[0]);
                fVar.f35317r = true;
                Unit unit = Unit.f31765a;
            }
            for (ku.i iVar : (ku.i[]) array) {
                if (iVar.j() > i10 && iVar.t()) {
                    iVar.y(ku.b.REFUSED_STREAM);
                    this.f35338e.p2(iVar.j());
                }
            }
        }

        /* JADX WARN: Type inference failed for: r13v1 */
        /* JADX WARN: Type inference failed for: r13v2, types: [T, ku.m] */
        /* JADX WARN: Type inference failed for: r13v3 */
        public final void k(boolean z10, m settings) {
            ?? r13;
            long c10;
            int i10;
            ku.i[] iVarArr;
            Intrinsics.checkNotNullParameter(settings, "settings");
            Ref.ObjectRef objectRef = new Ref.ObjectRef();
            ku.j U1 = this.f35338e.U1();
            f fVar = this.f35338e;
            synchronized (U1) {
                synchronized (fVar) {
                    m u12 = fVar.u1();
                    if (z10) {
                        r13 = settings;
                    } else {
                        m mVar = new m();
                        mVar.g(u12);
                        mVar.g(settings);
                        r13 = mVar;
                    }
                    objectRef.element = r13;
                    c10 = r13.c() - u12.c();
                    if (c10 != 0 && !fVar.z1().isEmpty()) {
                        iVarArr = (ku.i[]) fVar.z1().values().toArray(new ku.i[0]);
                        fVar.s2((m) objectRef.element);
                        fVar.f35321v.i(new a(fVar.V0() + " onSettings", true, fVar, objectRef), 0L);
                        Unit unit = Unit.f31765a;
                    }
                    iVarArr = null;
                    fVar.s2((m) objectRef.element);
                    fVar.f35321v.i(new a(fVar.V0() + " onSettings", true, fVar, objectRef), 0L);
                    Unit unit2 = Unit.f31765a;
                }
                try {
                    fVar.U1().a((m) objectRef.element);
                } catch (IOException e10) {
                    fVar.O0(e10);
                }
                Unit unit3 = Unit.f31765a;
            }
            if (iVarArr != null) {
                for (ku.i iVar : iVarArr) {
                    synchronized (iVar) {
                        iVar.a(c10);
                        Unit unit4 = Unit.f31765a;
                    }
                }
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r0v0, types: [ku.b] */
        /* JADX WARN: Type inference failed for: r0v3 */
        /* JADX WARN: Type inference failed for: r0v5, types: [ku.h, java.io.Closeable] */
        public void l() {
            ku.b bVar;
            ku.b bVar2 = ku.b.INTERNAL_ERROR;
            IOException e10 = null;
            try {
                try {
                    this.f35337d.k(this);
                    do {
                    } while (this.f35337d.g(false, this));
                    ku.b bVar3 = ku.b.NO_ERROR;
                    try {
                        this.f35338e.J0(bVar3, ku.b.CANCEL, null);
                        bVar = bVar3;
                    } catch (IOException e11) {
                        e10 = e11;
                        ku.b bVar4 = ku.b.PROTOCOL_ERROR;
                        f fVar = this.f35338e;
                        fVar.J0(bVar4, bVar4, e10);
                        bVar = fVar;
                        bVar2 = this.f35337d;
                        du.e.m(bVar2);
                    }
                } catch (Throwable th2) {
                    th = th2;
                    this.f35338e.J0(bVar, bVar2, e10);
                    du.e.m(this.f35337d);
                    throw th;
                }
            } catch (IOException e12) {
                e10 = e12;
            } catch (Throwable th3) {
                th = th3;
                bVar = bVar2;
                this.f35338e.J0(bVar, bVar2, e10);
                du.e.m(this.f35337d);
                throw th;
            }
            bVar2 = this.f35337d;
            du.e.m(bVar2);
        }

        @Override // ku.h.c
        public void e() {
        }

        @Override // ku.h.c
        public void i(int i10, int i11, int i12, boolean z10) {
        }
    }
}
