package y4;

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
import ps.j1;
import ru.c0;
import ru.h;
import ru.i;
import ru.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements Closeable, Flushable {
    public static final a D = new a(null);
    private static final Regex E = new Regex("[a-z0-9_-]{1,120}");
    private boolean A;
    private boolean B;
    private final e C;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f55462d;

    /* renamed from: e  reason: collision with root package name */
    private final long f55463e;

    /* renamed from: i  reason: collision with root package name */
    private final int f55464i;

    /* renamed from: o  reason: collision with root package name */
    private final int f55465o;

    /* renamed from: p  reason: collision with root package name */
    private final c0 f55466p;

    /* renamed from: q  reason: collision with root package name */
    private final c0 f55467q;

    /* renamed from: r  reason: collision with root package name */
    private final c0 f55468r;

    /* renamed from: s  reason: collision with root package name */
    private final LinkedHashMap f55469s;

    /* renamed from: t  reason: collision with root package name */
    private final CoroutineScope f55470t;

    /* renamed from: u  reason: collision with root package name */
    private long f55471u;

    /* renamed from: v  reason: collision with root package name */
    private int f55472v;

    /* renamed from: w  reason: collision with root package name */
    private BufferedSink f55473w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f55474x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f55475y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f55476z;

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
        private final C0779c f55477a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f55478b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean[] f55479c;

        public b(C0779c c0779c) {
            this.f55477a = c0779c;
            this.f55479c = new boolean[c.this.f55465o];
        }

        private final void d(boolean z10) {
            c cVar = c.this;
            synchronized (cVar) {
                try {
                    if (!this.f55478b) {
                        if (Intrinsics.areEqual(this.f55477a.b(), this)) {
                            cVar.D0(this, z10);
                        }
                        this.f55478b = true;
                        Unit unit = Unit.f31765a;
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
            d J0;
            c cVar = c.this;
            synchronized (cVar) {
                b();
                J0 = cVar.J0(this.f55477a.d());
            }
            return J0;
        }

        public final void e() {
            if (Intrinsics.areEqual(this.f55477a.b(), this)) {
                this.f55477a.m(true);
            }
        }

        public final c0 f(int i10) {
            c0 c0Var;
            c cVar = c.this;
            synchronized (cVar) {
                if (!this.f55478b) {
                    this.f55479c[i10] = true;
                    Object obj = this.f55477a.c().get(i10);
                    k5.e.a(cVar.C, (c0) obj);
                    c0Var = (c0) obj;
                } else {
                    throw new IllegalStateException("editor is closed");
                }
            }
            return c0Var;
        }

        public final C0779c g() {
            return this.f55477a;
        }

        public final boolean[] h() {
            return this.f55479c;
        }
    }

    /* renamed from: y4.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class C0779c {

        /* renamed from: a  reason: collision with root package name */
        private final String f55481a;

        /* renamed from: b  reason: collision with root package name */
        private final long[] f55482b;

        /* renamed from: c  reason: collision with root package name */
        private final ArrayList f55483c;

        /* renamed from: d  reason: collision with root package name */
        private final ArrayList f55484d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f55485e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f55486f;

        /* renamed from: g  reason: collision with root package name */
        private b f55487g;

        /* renamed from: h  reason: collision with root package name */
        private int f55488h;

        public C0779c(String str) {
            this.f55481a = str;
            this.f55482b = new long[c.this.f55465o];
            this.f55483c = new ArrayList(c.this.f55465o);
            this.f55484d = new ArrayList(c.this.f55465o);
            StringBuilder sb2 = new StringBuilder(str);
            sb2.append('.');
            int length = sb2.length();
            int i10 = c.this.f55465o;
            for (int i11 = 0; i11 < i10; i11++) {
                sb2.append(i11);
                this.f55483c.add(c.this.f55462d.l(sb2.toString()));
                sb2.append(".tmp");
                this.f55484d.add(c.this.f55462d.l(sb2.toString()));
                sb2.setLength(length);
            }
        }

        public final ArrayList a() {
            return this.f55483c;
        }

        public final b b() {
            return this.f55487g;
        }

        public final ArrayList c() {
            return this.f55484d;
        }

        public final String d() {
            return this.f55481a;
        }

        public final long[] e() {
            return this.f55482b;
        }

        public final int f() {
            return this.f55488h;
        }

        public final boolean g() {
            return this.f55485e;
        }

        public final boolean h() {
            return this.f55486f;
        }

        public final void i(b bVar) {
            this.f55487g = bVar;
        }

        public final void j(List list) {
            if (list.size() == c.this.f55465o) {
                try {
                    int size = list.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f55482b[i10] = Long.parseLong((String) list.get(i10));
                    }
                    return;
                } catch (NumberFormatException unused) {
                    throw new IOException("unexpected journal line: " + list);
                }
            }
            throw new IOException("unexpected journal line: " + list);
        }

        public final void k(int i10) {
            this.f55488h = i10;
        }

        public final void l(boolean z10) {
            this.f55485e = z10;
        }

        public final void m(boolean z10) {
            this.f55486f = z10;
        }

        public final d n() {
            if (!this.f55485e || this.f55487g != null || this.f55486f) {
                return null;
            }
            ArrayList arrayList = this.f55483c;
            c cVar = c.this;
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                if (!cVar.C.j((c0) arrayList.get(i10))) {
                    try {
                        cVar.w1(this);
                    } catch (IOException unused) {
                    }
                    return null;
                }
            }
            this.f55488h++;
            return new d(this);
        }

        public final void o(BufferedSink bufferedSink) {
            for (long j10 : this.f55482b) {
                bufferedSink.writeByte(32).S0(j10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final C0779c f55490d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f55491e;

        public d(C0779c c0779c) {
            this.f55490d = c0779c;
        }

        public final b a() {
            b H0;
            c cVar = c.this;
            synchronized (cVar) {
                close();
                H0 = cVar.H0(this.f55490d.d());
            }
            return H0;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f55491e) {
                this.f55491e = true;
                c cVar = c.this;
                synchronized (cVar) {
                    try {
                        C0779c c0779c = this.f55490d;
                        c0779c.k(c0779c.f() - 1);
                        if (this.f55490d.f() == 0 && this.f55490d.h()) {
                            cVar.w1(this.f55490d);
                        }
                        Unit unit = Unit.f31765a;
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }
        }

        public final c0 g(int i10) {
            if (!this.f55491e) {
                return (c0) this.f55490d.a().get(i10);
            }
            throw new IllegalStateException("snapshot is closed");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends i {
        e(h hVar) {
            super(hVar);
        }

        @Override // ru.i, ru.h
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
        int f55493d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f55493d == 0) {
                kotlin.c.b(obj);
                c cVar = c.this;
                synchronized (cVar) {
                    if (cVar.f55475y && !cVar.f55476z) {
                        try {
                            cVar.S1();
                        } catch (IOException unused) {
                            cVar.A = true;
                        }
                        try {
                            if (cVar.R0()) {
                                cVar.W1();
                            }
                        } catch (IOException unused2) {
                            cVar.B = true;
                            cVar.f55473w = x.c(x.b());
                        }
                        return Unit.f31765a;
                    }
                    return Unit.f31765a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public c(h hVar, c0 c0Var, CoroutineDispatcher coroutineDispatcher, long j10, int i10, int i11) {
        this.f55462d = c0Var;
        this.f55463e = j10;
        this.f55464i = i10;
        this.f55465o = i11;
        if (j10 > 0) {
            if (i11 > 0) {
                this.f55466p = c0Var.l("journal");
                this.f55467q = c0Var.l("journal.tmp");
                this.f55468r = c0Var.l("journal.bkp");
                this.f55469s = new LinkedHashMap(0, 0.75f, true);
                this.f55470t = kotlinx.coroutines.i.a(j1.b(null, 1, null).V0(coroutineDispatcher.W1(1)));
                this.C = new e(hVar);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    private final void C0() {
        if (!this.f55476z) {
            return;
        }
        throw new IllegalStateException("cache is closed");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void D0(b bVar, boolean z10) {
        long j10;
        C0779c g10 = bVar.g();
        if (Intrinsics.areEqual(g10.b(), bVar)) {
            int i10 = 0;
            if (z10 && !g10.h()) {
                int i11 = this.f55465o;
                for (int i12 = 0; i12 < i11; i12++) {
                    if (bVar.h()[i12] && !this.C.j((c0) g10.c().get(i12))) {
                        bVar.a();
                        return;
                    }
                }
                int i13 = this.f55465o;
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
                    this.f55471u = (this.f55471u - j11) + j10;
                    i10++;
                }
            } else {
                int i14 = this.f55465o;
                while (i10 < i14) {
                    this.C.h((c0) g10.c().get(i10));
                    i10++;
                }
            }
            g10.i(null);
            if (g10.h()) {
                w1(g10);
                return;
            }
            this.f55472v++;
            BufferedSink bufferedSink = this.f55473w;
            Intrinsics.checkNotNull(bufferedSink);
            if (!z10 && !g10.g()) {
                this.f55469s.remove(g10.d());
                bufferedSink.q0("REMOVE");
                bufferedSink.writeByte(32);
                bufferedSink.q0(g10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f55471u <= this.f55463e || R0()) {
                    V0();
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
            if (this.f55471u <= this.f55463e) {
            }
            V0();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void G0() {
        close();
        k5.e.b(this.C, this.f55462d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean R0() {
        if (this.f55472v >= 2000) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void S1() {
        while (this.f55471u > this.f55463e) {
            if (!z1()) {
                return;
            }
        }
        this.A = false;
    }

    private final void U1(String str) {
        if (E.i(str)) {
            return;
        }
        throw new IllegalArgumentException(("keys must match regex [a-z0-9_-]{1,120}: \"" + str + '\"').toString());
    }

    private final void V0() {
        ps.i.d(this.f55470t, null, null, new f(null), 3, null);
    }

    private final BufferedSink W0() {
        return x.c(new y4.d(this.C.a(this.f55466p), new Function1() { // from class: y4.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit a12;
                a12 = c.a1(c.this, (IOException) obj);
                return a12;
            }
        }));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void W1() {
        try {
            BufferedSink bufferedSink = this.f55473w;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.C.p(this.f55467q, false));
            c10.q0("libcore.io.DiskLruCache").writeByte(10);
            c10.q0("1").writeByte(10);
            c10.S0(this.f55464i).writeByte(10);
            c10.S0(this.f55465o).writeByte(10);
            c10.writeByte(10);
            for (C0779c c0779c : this.f55469s.values()) {
                if (c0779c.b() != null) {
                    c10.q0("DIRTY");
                    c10.writeByte(32);
                    c10.q0(c0779c.d());
                    c10.writeByte(10);
                } else {
                    c10.q0("CLEAN");
                    c10.writeByte(32);
                    c10.q0(c0779c.d());
                    c0779c.o(c10);
                    c10.writeByte(10);
                }
            }
            Unit unit = Unit.f31765a;
            if (c10 != null) {
                try {
                    c10.close();
                } catch (Throwable th2) {
                    th = th2;
                }
            }
            th = null;
            if (th == null) {
                if (this.C.j(this.f55466p)) {
                    this.C.c(this.f55466p, this.f55468r);
                    this.C.c(this.f55467q, this.f55466p);
                    this.C.h(this.f55468r);
                } else {
                    this.C.c(this.f55467q, this.f55466p);
                }
                this.f55473w = W0();
                this.f55472v = 0;
                this.f55474x = false;
                this.B = false;
            } else {
                throw th;
            }
        } catch (Throwable th3) {
            throw th3;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a1(c cVar, IOException iOException) {
        cVar.f55474x = true;
        return Unit.f31765a;
    }

    private final void r1() {
        Iterator it = this.f55469s.values().iterator();
        long j10 = 0;
        while (it.hasNext()) {
            C0779c c0779c = (C0779c) it.next();
            int i10 = 0;
            if (c0779c.b() == null) {
                int i11 = this.f55465o;
                while (i10 < i11) {
                    j10 += c0779c.e()[i10];
                    i10++;
                }
            } else {
                c0779c.i(null);
                int i12 = this.f55465o;
                while (i10 < i12) {
                    this.C.h((c0) c0779c.a().get(i10));
                    this.C.h((c0) c0779c.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
        this.f55471u = j10;
    }

    /* JADX WARN: Removed duplicated region for block: B:37:0x00c2 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:38:0x00c3  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void s1() {
        /*
            r10 = this;
            java.lang.String r0 = ", "
            y4.c$e r1 = r10.C
            ru.c0 r2 = r10.f55466p
            okio.Source r1 = r1.q(r2)
            okio.BufferedSource r1 = ru.x.d(r1)
            java.lang.String r2 = r1.F0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r3 = r1.F0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r4 = r1.F0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r5 = r1.F0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r6 = r1.F0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = "libcore.io.DiskLruCache"
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r2)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            java.lang.String r7 = "1"
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r3)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f55464i     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r4)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f55465o     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r5)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r6.length()     // Catch: java.lang.Throwable -> L5b
            if (r7 > 0) goto L82
            r0 = 0
        L51:
            java.lang.String r2 = r1.F0()     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            r10.u1(r2)     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            int r0 = r0 + 1
            goto L51
        L5b:
            r0 = move-exception
            goto Lb6
        L5d:
            java.util.LinkedHashMap r2 = r10.f55469s     // Catch: java.lang.Throwable -> L5b
            int r2 = r2.size()     // Catch: java.lang.Throwable -> L5b
            int r0 = r0 - r2
            r10.f55472v = r0     // Catch: java.lang.Throwable -> L5b
            boolean r0 = r1.k1()     // Catch: java.lang.Throwable -> L5b
            if (r0 != 0) goto L70
            r10.W1()     // Catch: java.lang.Throwable -> L5b
            goto L76
        L70:
            okio.BufferedSink r0 = r10.W0()     // Catch: java.lang.Throwable -> L5b
            r10.f55473w = r0     // Catch: java.lang.Throwable -> L5b
        L76:
            kotlin.Unit r0 = kotlin.Unit.f31765a     // Catch: java.lang.Throwable -> L5b
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
            rr.e.a(r0, r1)
        Lc0:
            if (r0 != 0) goto Lc3
            return
        Lc3:
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: y4.c.s1():void");
    }

    private final void u1(String str) {
        String substring;
        int h02 = StringsKt.h0(str, ' ', 0, false, 6, null);
        if (h02 != -1) {
            int i10 = h02 + 1;
            int h03 = StringsKt.h0(str, ' ', i10, false, 4, null);
            if (h03 == -1) {
                substring = str.substring(i10);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                if (h02 == 6 && StringsKt.P(str, "REMOVE", false, 2, null)) {
                    this.f55469s.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            }
            LinkedHashMap linkedHashMap = this.f55469s;
            Object obj = linkedHashMap.get(substring);
            if (obj == null) {
                obj = new C0779c(substring);
                linkedHashMap.put(substring, obj);
            }
            C0779c c0779c = (C0779c) obj;
            if (h03 != -1 && h02 == 5 && StringsKt.P(str, "CLEAN", false, 2, null)) {
                String substring2 = str.substring(h03 + 1);
                Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                List L0 = StringsKt.L0(substring2, new char[]{' '}, false, 0, 6, null);
                c0779c.l(true);
                c0779c.i(null);
                c0779c.j(L0);
                return;
            } else if (h03 == -1 && h02 == 5 && StringsKt.P(str, "DIRTY", false, 2, null)) {
                c0779c.i(new b(c0779c));
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
    public final boolean w1(C0779c c0779c) {
        BufferedSink bufferedSink;
        if (c0779c.f() > 0 && (bufferedSink = this.f55473w) != null) {
            bufferedSink.q0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.q0(c0779c.d());
            bufferedSink.writeByte(10);
            bufferedSink.flush();
        }
        if (c0779c.f() <= 0 && c0779c.b() == null) {
            int i10 = this.f55465o;
            for (int i11 = 0; i11 < i10; i11++) {
                this.C.h((c0) c0779c.a().get(i11));
                this.f55471u -= c0779c.e()[i11];
                c0779c.e()[i11] = 0;
            }
            this.f55472v++;
            BufferedSink bufferedSink2 = this.f55473w;
            if (bufferedSink2 != null) {
                bufferedSink2.q0("REMOVE");
                bufferedSink2.writeByte(32);
                bufferedSink2.q0(c0779c.d());
                bufferedSink2.writeByte(10);
            }
            this.f55469s.remove(c0779c.d());
            if (R0()) {
                V0();
            }
            return true;
        }
        c0779c.m(true);
        return true;
    }

    private final boolean z1() {
        for (C0779c c0779c : this.f55469s.values()) {
            if (!c0779c.h()) {
                w1(c0779c);
                return true;
            }
        }
        return false;
    }

    public final synchronized b H0(String str) {
        b bVar;
        C0();
        U1(str);
        O0();
        C0779c c0779c = (C0779c) this.f55469s.get(str);
        if (c0779c != null) {
            bVar = c0779c.b();
        } else {
            bVar = null;
        }
        if (bVar != null) {
            return null;
        }
        if (c0779c != null && c0779c.f() != 0) {
            return null;
        }
        if (!this.A && !this.B) {
            BufferedSink bufferedSink = this.f55473w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.q0(str);
            bufferedSink.writeByte(10);
            bufferedSink.flush();
            if (this.f55474x) {
                return null;
            }
            if (c0779c == null) {
                c0779c = new C0779c(str);
                this.f55469s.put(str, c0779c);
            }
            b bVar2 = new b(c0779c);
            c0779c.i(bVar2);
            return bVar2;
        }
        V0();
        return null;
    }

    public final synchronized d J0(String str) {
        d n10;
        C0();
        U1(str);
        O0();
        C0779c c0779c = (C0779c) this.f55469s.get(str);
        if (c0779c != null && (n10 = c0779c.n()) != null) {
            this.f55472v++;
            BufferedSink bufferedSink = this.f55473w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0("READ");
            bufferedSink.writeByte(32);
            bufferedSink.q0(str);
            bufferedSink.writeByte(10);
            if (R0()) {
                V0();
            }
            return n10;
        }
        return null;
    }

    public final synchronized void O0() {
        try {
            if (this.f55475y) {
                return;
            }
            this.C.h(this.f55467q);
            if (this.C.j(this.f55468r)) {
                if (this.C.j(this.f55466p)) {
                    this.C.h(this.f55468r);
                } else {
                    this.C.c(this.f55468r, this.f55466p);
                }
            }
            if (this.C.j(this.f55466p)) {
                try {
                    s1();
                    r1();
                    this.f55475y = true;
                    return;
                } catch (IOException unused) {
                    G0();
                    this.f55476z = false;
                }
            }
            W1();
            this.f55475y = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            if (this.f55475y && !this.f55476z) {
                for (C0779c c0779c : (C0779c[]) this.f55469s.values().toArray(new C0779c[0])) {
                    b b10 = c0779c.b();
                    if (b10 != null) {
                        b10.e();
                    }
                }
                S1();
                kotlinx.coroutines.i.f(this.f55470t, null, 1, null);
                BufferedSink bufferedSink = this.f55473w;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f55473w = null;
                this.f55476z = true;
                return;
            }
            this.f55476z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Flushable
    public synchronized void flush() {
        if (!this.f55475y) {
            return;
        }
        C0();
        S1();
        BufferedSink bufferedSink = this.f55473w;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }
}
