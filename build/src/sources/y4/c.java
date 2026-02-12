package y4;

import av.c0;
import av.h;
import av.i;
import av.x;
import java.io.Closeable;
import java.io.Flushable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import okio.BufferedSink;
import okio.Sink;
import ys.j1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements Closeable, Flushable {
    public static final a D = new a(null);
    private static final Regex E = new Regex("[a-z0-9_-]{1,120}");
    private boolean A;
    private boolean B;
    private final e C;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f55394d;

    /* renamed from: e  reason: collision with root package name */
    private final long f55395e;

    /* renamed from: i  reason: collision with root package name */
    private final int f55396i;

    /* renamed from: o  reason: collision with root package name */
    private final int f55397o;

    /* renamed from: p  reason: collision with root package name */
    private final c0 f55398p;

    /* renamed from: q  reason: collision with root package name */
    private final c0 f55399q;

    /* renamed from: r  reason: collision with root package name */
    private final c0 f55400r;

    /* renamed from: s  reason: collision with root package name */
    private final LinkedHashMap f55401s;

    /* renamed from: t  reason: collision with root package name */
    private final CoroutineScope f55402t;

    /* renamed from: u  reason: collision with root package name */
    private long f55403u;

    /* renamed from: v  reason: collision with root package name */
    private int f55404v;

    /* renamed from: w  reason: collision with root package name */
    private BufferedSink f55405w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f55406x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f55407y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f55408z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class b {

        /* renamed from: a  reason: collision with root package name */
        private final C0773c f55409a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f55410b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean[] f55411c;

        public b(C0773c c0773c) {
            this.f55409a = c0773c;
            this.f55411c = new boolean[c.this.f55397o];
        }

        private final void d(boolean z10) {
            c cVar = c.this;
            synchronized (cVar) {
                try {
                    if (!this.f55410b) {
                        if (Intrinsics.areEqual(this.f55409a.b(), this)) {
                            cVar.C0(this, z10);
                        }
                        this.f55410b = true;
                        Unit unit = Unit.f31988a;
                    } else {
                        throw new IllegalStateException("editor is closed");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void a() {
            d(false);
        }

        public final void b() {
            d(true);
        }

        public final d c() {
            d G0;
            c cVar = c.this;
            synchronized (cVar) {
                b();
                G0 = cVar.G0(this.f55409a.d());
            }
            return G0;
        }

        public final void e() {
            if (Intrinsics.areEqual(this.f55409a.b(), this)) {
                this.f55409a.m(true);
            }
        }

        public final c0 f(int i10) {
            c0 c0Var;
            c cVar = c.this;
            synchronized (cVar) {
                if (!this.f55410b) {
                    this.f55411c[i10] = true;
                    Object obj = this.f55409a.c().get(i10);
                    k5.e.a(cVar.C, (c0) obj);
                    c0Var = (c0) obj;
                } else {
                    throw new IllegalStateException("editor is closed");
                }
            }
            return c0Var;
        }

        public final C0773c g() {
            return this.f55409a;
        }

        public final boolean[] h() {
            return this.f55411c;
        }
    }

    /* renamed from: y4.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class C0773c {

        /* renamed from: a  reason: collision with root package name */
        private final String f55413a;

        /* renamed from: b  reason: collision with root package name */
        private final long[] f55414b;

        /* renamed from: c  reason: collision with root package name */
        private final ArrayList f55415c;

        /* renamed from: d  reason: collision with root package name */
        private final ArrayList f55416d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f55417e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f55418f;

        /* renamed from: g  reason: collision with root package name */
        private b f55419g;

        /* renamed from: h  reason: collision with root package name */
        private int f55420h;

        public C0773c(String str) {
            this.f55413a = str;
            this.f55414b = new long[c.this.f55397o];
            this.f55415c = new ArrayList(c.this.f55397o);
            this.f55416d = new ArrayList(c.this.f55397o);
            StringBuilder sb2 = new StringBuilder(str);
            sb2.append('.');
            int length = sb2.length();
            int i10 = c.this.f55397o;
            for (int i11 = 0; i11 < i10; i11++) {
                sb2.append(i11);
                this.f55415c.add(c.this.f55394d.m(sb2.toString()));
                sb2.append(".tmp");
                this.f55416d.add(c.this.f55394d.m(sb2.toString()));
                sb2.setLength(length);
            }
        }

        public final ArrayList a() {
            return this.f55415c;
        }

        public final b b() {
            return this.f55419g;
        }

        public final ArrayList c() {
            return this.f55416d;
        }

        public final String d() {
            return this.f55413a;
        }

        public final long[] e() {
            return this.f55414b;
        }

        public final int f() {
            return this.f55420h;
        }

        public final boolean g() {
            return this.f55417e;
        }

        public final boolean h() {
            return this.f55418f;
        }

        public final void i(b bVar) {
            this.f55419g = bVar;
        }

        public final void j(List list) {
            if (list.size() == c.this.f55397o) {
                try {
                    int size = list.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f55414b[i10] = Long.parseLong((String) list.get(i10));
                    }
                    return;
                } catch (NumberFormatException unused) {
                    throw new IOException("unexpected journal line: " + list);
                }
            }
            throw new IOException("unexpected journal line: " + list);
        }

        public final void k(int i10) {
            this.f55420h = i10;
        }

        public final void l(boolean z10) {
            this.f55417e = z10;
        }

        public final void m(boolean z10) {
            this.f55418f = z10;
        }

        public final d n() {
            if (!this.f55417e || this.f55419g != null || this.f55418f) {
                return null;
            }
            ArrayList arrayList = this.f55415c;
            c cVar = c.this;
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                if (!cVar.C.j((c0) arrayList.get(i10))) {
                    try {
                        cVar.b1(this);
                    } catch (IOException unused) {
                    }
                    return null;
                }
            }
            this.f55420h++;
            return new d(this);
        }

        public final void o(BufferedSink bufferedSink) {
            for (long j10 : this.f55414b) {
                bufferedSink.writeByte(32).W0(j10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final C0773c f55422d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f55423e;

        public d(C0773c c0773c) {
            this.f55422d = c0773c;
        }

        public final b a() {
            b F0;
            c cVar = c.this;
            synchronized (cVar) {
                close();
                F0 = cVar.F0(this.f55422d.d());
            }
            return F0;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f55423e) {
                this.f55423e = true;
                c cVar = c.this;
                synchronized (cVar) {
                    try {
                        C0773c c0773c = this.f55422d;
                        c0773c.k(c0773c.f() - 1);
                        if (this.f55422d.f() == 0 && this.f55422d.h()) {
                            cVar.b1(this.f55422d);
                        }
                        Unit unit = Unit.f31988a;
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }
        }

        public final c0 h(int i10) {
            if (!this.f55423e) {
                return (c0) this.f55422d.a().get(i10);
            }
            throw new IllegalStateException("snapshot is closed");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends i {
        e(h hVar) {
            super(hVar);
        }

        @Override // av.i, av.h
        public Sink p(c0 c0Var, boolean z10) {
            c0 i10 = c0Var.i();
            if (i10 != null) {
                d(i10);
            }
            return super.p(c0Var, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55425d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f55425d == 0) {
                kotlin.c.b(obj);
                c cVar = c.this;
                synchronized (cVar) {
                    if (cVar.f55407y && !cVar.f55408z) {
                        try {
                            cVar.w1();
                        } catch (IOException unused) {
                            cVar.A = true;
                        }
                        try {
                            if (cVar.L0()) {
                                cVar.z1();
                            }
                        } catch (IOException unused2) {
                            cVar.B = true;
                            cVar.f55405w = x.c(x.b());
                        }
                        return Unit.f31988a;
                    }
                    return Unit.f31988a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public c(h hVar, c0 c0Var, CoroutineDispatcher coroutineDispatcher, long j10, int i10, int i11) {
        this.f55394d = c0Var;
        this.f55395e = j10;
        this.f55396i = i10;
        this.f55397o = i11;
        if (j10 > 0) {
            if (i11 > 0) {
                this.f55398p = c0Var.m("journal");
                this.f55399q = c0Var.m("journal.tmp");
                this.f55400r = c0Var.m("journal.bkp");
                this.f55401s = new LinkedHashMap(0, 0.75f, true);
                this.f55402t = kotlinx.coroutines.i.a(j1.b(null, 1, null).O0(coroutineDispatcher.z1(1)));
                this.C = new e(hVar);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void C0(b bVar, boolean z10) {
        long j10;
        C0773c g10 = bVar.g();
        if (Intrinsics.areEqual(g10.b(), bVar)) {
            int i10 = 0;
            if (z10 && !g10.h()) {
                int i11 = this.f55397o;
                for (int i12 = 0; i12 < i11; i12++) {
                    if (bVar.h()[i12] && !this.C.j((c0) g10.c().get(i12))) {
                        bVar.a();
                        return;
                    }
                }
                int i13 = this.f55397o;
                while (i10 < i13) {
                    c0 c0Var = (c0) g10.c().get(i10);
                    c0 c0Var2 = (c0) g10.a().get(i10);
                    if (this.C.j(c0Var)) {
                        this.C.c(c0Var, c0Var2);
                    } else {
                        k5.e.a(this.C, (c0) g10.a().get(i10));
                    }
                    long j11 = g10.e()[i10];
                    Long c10 = this.C.l(c0Var2).c();
                    if (c10 != null) {
                        j10 = c10.longValue();
                    } else {
                        j10 = 0;
                    }
                    g10.e()[i10] = j10;
                    this.f55403u = (this.f55403u - j11) + j10;
                    i10++;
                }
            } else {
                int i14 = this.f55397o;
                while (i10 < i14) {
                    this.C.h((c0) g10.c().get(i10));
                    i10++;
                }
            }
            g10.i(null);
            if (g10.h()) {
                b1(g10);
                return;
            }
            this.f55404v++;
            BufferedSink bufferedSink = this.f55405w;
            Intrinsics.checkNotNull(bufferedSink);
            if (!z10 && !g10.g()) {
                this.f55401s.remove(g10.d());
                bufferedSink.q0("REMOVE");
                bufferedSink.writeByte(32);
                bufferedSink.q0(g10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f55403u <= this.f55395e || L0()) {
                    N0();
                }
                return;
            }
            g10.l(true);
            bufferedSink.q0("CLEAN");
            bufferedSink.writeByte(32);
            bufferedSink.q0(g10.d());
            g10.o(bufferedSink);
            bufferedSink.writeByte(10);
            bufferedSink.flush();
            if (this.f55403u <= this.f55395e) {
            }
            N0();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void E0() {
        close();
        k5.e.b(this.C, this.f55394d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean L0() {
        if (this.f55404v >= 2000) {
            return true;
        }
        return false;
    }

    private final void N0() {
        ys.i.d(this.f55402t, null, null, new f(null), 3, null);
    }

    private final BufferedSink O0() {
        return x.c(new y4.d(this.C.a(this.f55398p), new Function1() { // from class: y4.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit S0;
                S0 = c.S0(c.this, (IOException) obj);
                return S0;
            }
        }));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit S0(c cVar, IOException iOException) {
        cVar.f55406x = true;
        return Unit.f31988a;
    }

    private final void V0() {
        Iterator it = this.f55401s.values().iterator();
        long j10 = 0;
        while (it.hasNext()) {
            C0773c c0773c = (C0773c) it.next();
            int i10 = 0;
            if (c0773c.b() == null) {
                int i11 = this.f55397o;
                while (i10 < i11) {
                    j10 += c0773c.e()[i10];
                    i10++;
                }
            } else {
                c0773c.i(null);
                int i12 = this.f55397o;
                while (i10 < i12) {
                    this.C.h((c0) c0773c.a().get(i10));
                    this.C.h((c0) c0773c.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
        this.f55403u = j10;
    }

    /* JADX WARN: Removed duplicated region for block: B:37:0x00c2 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:38:0x00c3  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void Z0() {
        /*
            r10 = this;
            java.lang.String r0 = ", "
            y4.c$e r1 = r10.C
            av.c0 r2 = r10.f55398p
            okio.Source r1 = r1.q(r2)
            okio.BufferedSource r1 = av.x.d(r1)
            java.lang.String r2 = r1.J0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r3 = r1.J0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r4 = r1.J0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r5 = r1.J0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r6 = r1.J0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = "libcore.io.DiskLruCache"
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r2)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            java.lang.String r7 = "1"
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r3)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f55396i     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r4)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f55397o     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r5)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r6.length()     // Catch: java.lang.Throwable -> L5b
            if (r7 > 0) goto L82
            r0 = 0
        L51:
            java.lang.String r2 = r1.J0()     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            r10.a1(r2)     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            int r0 = r0 + 1
            goto L51
        L5b:
            r0 = move-exception
            goto Lb6
        L5d:
            java.util.LinkedHashMap r2 = r10.f55401s     // Catch: java.lang.Throwable -> L5b
            int r2 = r2.size()     // Catch: java.lang.Throwable -> L5b
            int r0 = r0 - r2
            r10.f55404v = r0     // Catch: java.lang.Throwable -> L5b
            boolean r0 = r1.p1()     // Catch: java.lang.Throwable -> L5b
            if (r0 != 0) goto L70
            r10.z1()     // Catch: java.lang.Throwable -> L5b
            goto L76
        L70:
            okio.BufferedSink r0 = r10.O0()     // Catch: java.lang.Throwable -> L5b
            r10.f55405w = r0     // Catch: java.lang.Throwable -> L5b
        L76:
            kotlin.Unit r0 = kotlin.Unit.f31988a     // Catch: java.lang.Throwable -> L5b
            if (r1 == 0) goto L80
            r1.close()     // Catch: java.lang.Throwable -> L7e
            goto L80
        L7e:
            r0 = move-exception
            goto Lc0
        L80:
            r0 = 0
            goto Lc0
        L82:
            java.io.IOException r7 = new java.io.IOException     // Catch: java.lang.Throwable -> L5b
            java.lang.StringBuilder r8 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L5b
            r8.<init>()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r9 = "unexpected journal header: ["
            r8.append(r9)     // Catch: java.lang.Throwable -> L5b
            r8.append(r2)     // Catch: java.lang.Throwable -> L5b
            r8.append(r0)     // Catch: java.lang.Throwable -> L5b
            r8.append(r3)     // Catch: java.lang.Throwable -> L5b
            r8.append(r0)     // Catch: java.lang.Throwable -> L5b
            r8.append(r4)     // Catch: java.lang.Throwable -> L5b
            r8.append(r0)     // Catch: java.lang.Throwable -> L5b
            r8.append(r5)     // Catch: java.lang.Throwable -> L5b
            r8.append(r0)     // Catch: java.lang.Throwable -> L5b
            r8.append(r6)     // Catch: java.lang.Throwable -> L5b
            r0 = 93
            r8.append(r0)     // Catch: java.lang.Throwable -> L5b
            java.lang.String r0 = r8.toString()     // Catch: java.lang.Throwable -> L5b
            r7.<init>(r0)     // Catch: java.lang.Throwable -> L5b
            throw r7     // Catch: java.lang.Throwable -> L5b
        Lb6:
            if (r1 == 0) goto Lc0
            r1.close()     // Catch: java.lang.Throwable -> Lbc
            goto Lc0
        Lbc:
            r1 = move-exception
            as.e.a(r0, r1)
        Lc0:
            if (r0 != 0) goto Lc3
            return
        Lc3:
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: y4.c.Z0():void");
    }

    private final void a1(String str) {
        String substring;
        int h02 = StringsKt.h0(str, ' ', 0, false, 6, null);
        if (h02 != -1) {
            int i10 = h02 + 1;
            int h03 = StringsKt.h0(str, ' ', i10, false, 4, null);
            if (h03 == -1) {
                substring = str.substring(i10);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                if (h02 == 6 && StringsKt.P(str, "REMOVE", false, 2, null)) {
                    this.f55401s.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            }
            LinkedHashMap linkedHashMap = this.f55401s;
            Object obj = linkedHashMap.get(substring);
            if (obj == null) {
                obj = new C0773c(substring);
                linkedHashMap.put(substring, obj);
            }
            C0773c c0773c = (C0773c) obj;
            if (h03 != -1 && h02 == 5 && StringsKt.P(str, "CLEAN", false, 2, null)) {
                String substring2 = str.substring(h03 + 1);
                Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                List L0 = StringsKt.L0(substring2, new char[]{' '}, false, 0, 6, null);
                c0773c.l(true);
                c0773c.i(null);
                c0773c.j(L0);
                return;
            } else if (h03 == -1 && h02 == 5 && StringsKt.P(str, "DIRTY", false, 2, null)) {
                c0773c.i(new b(c0773c));
                return;
            } else if (h03 == -1 && h02 == 4 && StringsKt.P(str, "READ", false, 2, null)) {
                return;
            } else {
                throw new IOException("unexpected journal line: " + str);
            }
        }
        throw new IOException("unexpected journal line: " + str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean b1(C0773c c0773c) {
        BufferedSink bufferedSink;
        if (c0773c.f() > 0 && (bufferedSink = this.f55405w) != null) {
            bufferedSink.q0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.q0(c0773c.d());
            bufferedSink.writeByte(10);
            bufferedSink.flush();
        }
        if (c0773c.f() <= 0 && c0773c.b() == null) {
            int i10 = this.f55397o;
            for (int i11 = 0; i11 < i10; i11++) {
                this.C.h((c0) c0773c.a().get(i11));
                this.f55403u -= c0773c.e()[i11];
                c0773c.e()[i11] = 0;
            }
            this.f55404v++;
            BufferedSink bufferedSink2 = this.f55405w;
            if (bufferedSink2 != null) {
                bufferedSink2.q0("REMOVE");
                bufferedSink2.writeByte(32);
                bufferedSink2.q0(c0773c.d());
                bufferedSink2.writeByte(10);
            }
            this.f55401s.remove(c0773c.d());
            if (L0()) {
                N0();
            }
            return true;
        }
        c0773c.m(true);
        return true;
    }

    private final boolean f1() {
        for (C0773c c0773c : this.f55401s.values()) {
            if (!c0773c.h()) {
                b1(c0773c);
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void w1() {
        while (this.f55403u > this.f55395e) {
            if (!f1()) {
                return;
            }
        }
        this.A = false;
    }

    private final void x1(String str) {
        if (E.i(str)) {
            return;
        }
        throw new IllegalArgumentException(("keys must match regex [a-z0-9_-]{1,120}: \"" + str + '\"').toString());
    }

    private final void z0() {
        if (!this.f55408z) {
            return;
        }
        throw new IllegalStateException("cache is closed");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void z1() {
        try {
            BufferedSink bufferedSink = this.f55405w;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.C.p(this.f55399q, false));
            c10.q0("libcore.io.DiskLruCache").writeByte(10);
            c10.q0("1").writeByte(10);
            c10.W0(this.f55396i).writeByte(10);
            c10.W0(this.f55397o).writeByte(10);
            c10.writeByte(10);
            for (C0773c c0773c : this.f55401s.values()) {
                if (c0773c.b() != null) {
                    c10.q0("DIRTY");
                    c10.writeByte(32);
                    c10.q0(c0773c.d());
                    c10.writeByte(10);
                } else {
                    c10.q0("CLEAN");
                    c10.writeByte(32);
                    c10.q0(c0773c.d());
                    c0773c.o(c10);
                    c10.writeByte(10);
                }
            }
            Unit unit = Unit.f31988a;
            if (c10 != null) {
                try {
                    c10.close();
                } catch (Throwable th2) {
                    th = th2;
                }
            }
            th = null;
            if (th == null) {
                if (this.C.j(this.f55398p)) {
                    this.C.c(this.f55398p, this.f55400r);
                    this.C.c(this.f55399q, this.f55398p);
                    this.C.h(this.f55400r);
                } else {
                    this.C.c(this.f55399q, this.f55398p);
                }
                this.f55405w = O0();
                this.f55404v = 0;
                this.f55406x = false;
                this.B = false;
            } else {
                throw th;
            }
        } catch (Throwable th3) {
            throw th3;
        }
    }

    public final synchronized b F0(String str) {
        b bVar;
        z0();
        x1(str);
        H0();
        C0773c c0773c = (C0773c) this.f55401s.get(str);
        if (c0773c != null) {
            bVar = c0773c.b();
        } else {
            bVar = null;
        }
        if (bVar != null) {
            return null;
        }
        if (c0773c != null && c0773c.f() != 0) {
            return null;
        }
        if (!this.A && !this.B) {
            BufferedSink bufferedSink = this.f55405w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.q0(str);
            bufferedSink.writeByte(10);
            bufferedSink.flush();
            if (this.f55406x) {
                return null;
            }
            if (c0773c == null) {
                c0773c = new C0773c(str);
                this.f55401s.put(str, c0773c);
            }
            b bVar2 = new b(c0773c);
            c0773c.i(bVar2);
            return bVar2;
        }
        N0();
        return null;
    }

    public final synchronized d G0(String str) {
        d n10;
        z0();
        x1(str);
        H0();
        C0773c c0773c = (C0773c) this.f55401s.get(str);
        if (c0773c != null && (n10 = c0773c.n()) != null) {
            this.f55404v++;
            BufferedSink bufferedSink = this.f55405w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0("READ");
            bufferedSink.writeByte(32);
            bufferedSink.q0(str);
            bufferedSink.writeByte(10);
            if (L0()) {
                N0();
            }
            return n10;
        }
        return null;
    }

    public final synchronized void H0() {
        try {
            if (this.f55407y) {
                return;
            }
            this.C.h(this.f55399q);
            if (this.C.j(this.f55400r)) {
                if (this.C.j(this.f55398p)) {
                    this.C.h(this.f55400r);
                } else {
                    this.C.c(this.f55400r, this.f55398p);
                }
            }
            if (this.C.j(this.f55398p)) {
                try {
                    Z0();
                    V0();
                    this.f55407y = true;
                    return;
                } catch (IOException unused) {
                    E0();
                    this.f55408z = false;
                }
            }
            z1();
            this.f55407y = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            if (this.f55407y && !this.f55408z) {
                for (C0773c c0773c : (C0773c[]) this.f55401s.values().toArray(new C0773c[0])) {
                    b b10 = c0773c.b();
                    if (b10 != null) {
                        b10.e();
                    }
                }
                w1();
                kotlinx.coroutines.i.f(this.f55402t, null, 1, null);
                BufferedSink bufferedSink = this.f55405w;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f55405w = null;
                this.f55408z = true;
                return;
            }
            this.f55408z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Flushable
    public synchronized void flush() {
        if (!this.f55407y) {
            return;
        }
        z0();
        w1();
        BufferedSink bufferedSink = this.f55405w;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }
}
