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
import os.j1;
import qu.c0;
import qu.h;
import qu.i;
import qu.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements Closeable, Flushable {
    public static final a D = new a(null);
    private static final Regex E = new Regex("[a-z0-9_-]{1,120}");
    private boolean A;
    private boolean B;
    private final e C;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f54985d;

    /* renamed from: e  reason: collision with root package name */
    private final long f54986e;

    /* renamed from: i  reason: collision with root package name */
    private final int f54987i;

    /* renamed from: o  reason: collision with root package name */
    private final int f54988o;

    /* renamed from: p  reason: collision with root package name */
    private final c0 f54989p;

    /* renamed from: q  reason: collision with root package name */
    private final c0 f54990q;

    /* renamed from: r  reason: collision with root package name */
    private final c0 f54991r;

    /* renamed from: s  reason: collision with root package name */
    private final LinkedHashMap f54992s;

    /* renamed from: t  reason: collision with root package name */
    private final CoroutineScope f54993t;

    /* renamed from: u  reason: collision with root package name */
    private long f54994u;

    /* renamed from: v  reason: collision with root package name */
    private int f54995v;

    /* renamed from: w  reason: collision with root package name */
    private BufferedSink f54996w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f54997x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f54998y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f54999z;

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
        private final C0740c f55000a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f55001b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean[] f55002c;

        public b(C0740c c0740c) {
            this.f55000a = c0740c;
            this.f55002c = new boolean[c.this.f54988o];
        }

        private final void d(boolean z10) {
            c cVar = c.this;
            synchronized (cVar) {
                try {
                    if (!this.f55001b) {
                        if (Intrinsics.areEqual(this.f55000a.b(), this)) {
                            cVar.F0(this, z10);
                        }
                        this.f55001b = true;
                        Unit unit = Unit.f32056a;
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
            d K0;
            c cVar = c.this;
            synchronized (cVar) {
                b();
                K0 = cVar.K0(this.f55000a.d());
            }
            return K0;
        }

        public final void e() {
            if (Intrinsics.areEqual(this.f55000a.b(), this)) {
                this.f55000a.m(true);
            }
        }

        public final c0 f(int i10) {
            c0 c0Var;
            c cVar = c.this;
            synchronized (cVar) {
                if (!this.f55001b) {
                    this.f55002c[i10] = true;
                    Object obj = this.f55000a.c().get(i10);
                    k5.e.a(cVar.C, (c0) obj);
                    c0Var = (c0) obj;
                } else {
                    throw new IllegalStateException("editor is closed");
                }
            }
            return c0Var;
        }

        public final C0740c g() {
            return this.f55000a;
        }

        public final boolean[] h() {
            return this.f55002c;
        }
    }

    /* renamed from: y4.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class C0740c {

        /* renamed from: a  reason: collision with root package name */
        private final String f55004a;

        /* renamed from: b  reason: collision with root package name */
        private final long[] f55005b;

        /* renamed from: c  reason: collision with root package name */
        private final ArrayList f55006c;

        /* renamed from: d  reason: collision with root package name */
        private final ArrayList f55007d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f55008e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f55009f;

        /* renamed from: g  reason: collision with root package name */
        private b f55010g;

        /* renamed from: h  reason: collision with root package name */
        private int f55011h;

        public C0740c(String str) {
            this.f55004a = str;
            this.f55005b = new long[c.this.f54988o];
            this.f55006c = new ArrayList(c.this.f54988o);
            this.f55007d = new ArrayList(c.this.f54988o);
            StringBuilder sb2 = new StringBuilder(str);
            sb2.append('.');
            int length = sb2.length();
            int i10 = c.this.f54988o;
            for (int i11 = 0; i11 < i10; i11++) {
                sb2.append(i11);
                this.f55006c.add(c.this.f54985d.k(sb2.toString()));
                sb2.append(".tmp");
                this.f55007d.add(c.this.f54985d.k(sb2.toString()));
                sb2.setLength(length);
            }
        }

        public final ArrayList a() {
            return this.f55006c;
        }

        public final b b() {
            return this.f55010g;
        }

        public final ArrayList c() {
            return this.f55007d;
        }

        public final String d() {
            return this.f55004a;
        }

        public final long[] e() {
            return this.f55005b;
        }

        public final int f() {
            return this.f55011h;
        }

        public final boolean g() {
            return this.f55008e;
        }

        public final boolean h() {
            return this.f55009f;
        }

        public final void i(b bVar) {
            this.f55010g = bVar;
        }

        public final void j(List list) {
            if (list.size() == c.this.f54988o) {
                try {
                    int size = list.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f55005b[i10] = Long.parseLong((String) list.get(i10));
                    }
                    return;
                } catch (NumberFormatException unused) {
                    throw new IOException("unexpected journal line: " + list);
                }
            }
            throw new IOException("unexpected journal line: " + list);
        }

        public final void k(int i10) {
            this.f55011h = i10;
        }

        public final void l(boolean z10) {
            this.f55008e = z10;
        }

        public final void m(boolean z10) {
            this.f55009f = z10;
        }

        public final d n() {
            if (!this.f55008e || this.f55010g != null || this.f55009f) {
                return null;
            }
            ArrayList arrayList = this.f55006c;
            c cVar = c.this;
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                if (!cVar.C.j((c0) arrayList.get(i10))) {
                    try {
                        cVar.A1(this);
                    } catch (IOException unused) {
                    }
                    return null;
                }
            }
            this.f55011h++;
            return new d(this);
        }

        public final void o(BufferedSink bufferedSink) {
            for (long j10 : this.f55005b) {
                bufferedSink.writeByte(32).W0(j10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final C0740c f55013d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f55014e;

        public d(C0740c c0740c) {
            this.f55013d = c0740c;
        }

        public final b a() {
            b J0;
            c cVar = c.this;
            synchronized (cVar) {
                close();
                J0 = cVar.J0(this.f55013d.d());
            }
            return J0;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f55014e) {
                this.f55014e = true;
                c cVar = c.this;
                synchronized (cVar) {
                    try {
                        C0740c c0740c = this.f55013d;
                        c0740c.k(c0740c.f() - 1);
                        if (this.f55013d.f() == 0 && this.f55013d.h()) {
                            cVar.A1(this.f55013d);
                        }
                        Unit unit = Unit.f32056a;
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }
        }

        public final c0 g(int i10) {
            if (!this.f55014e) {
                return (c0) this.f55013d.a().get(i10);
            }
            throw new IllegalStateException("snapshot is closed");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends i {
        e(h hVar) {
            super(hVar);
        }

        @Override // qu.i, qu.h
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
        int f55016d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f55016d == 0) {
                kotlin.c.b(obj);
                c cVar = c.this;
                synchronized (cVar) {
                    if (cVar.f54998y && !cVar.f54999z) {
                        try {
                            cVar.T1();
                        } catch (IOException unused) {
                            cVar.A = true;
                        }
                        try {
                            if (cVar.O0()) {
                                cVar.X1();
                            }
                        } catch (IOException unused2) {
                            cVar.B = true;
                            cVar.f54996w = x.c(x.b());
                        }
                        return Unit.f32056a;
                    }
                    return Unit.f32056a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public c(h hVar, c0 c0Var, CoroutineDispatcher coroutineDispatcher, long j10, int i10, int i11) {
        this.f54985d = c0Var;
        this.f54986e = j10;
        this.f54987i = i10;
        this.f54988o = i11;
        if (j10 > 0) {
            if (i11 > 0) {
                this.f54989p = c0Var.k("journal");
                this.f54990q = c0Var.k("journal.tmp");
                this.f54991r = c0Var.k("journal.bkp");
                this.f54992s = new LinkedHashMap(0, 0.75f, true);
                this.f54993t = kotlinx.coroutines.i.a(j1.b(null, 1, null).Y0(coroutineDispatcher.X1(1)));
                this.C = new e(hVar);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean A1(C0740c c0740c) {
        BufferedSink bufferedSink;
        if (c0740c.f() > 0 && (bufferedSink = this.f54996w) != null) {
            bufferedSink.q0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.q0(c0740c.d());
            bufferedSink.writeByte(10);
            bufferedSink.flush();
        }
        if (c0740c.f() <= 0 && c0740c.b() == null) {
            int i10 = this.f54988o;
            for (int i11 = 0; i11 < i10; i11++) {
                this.C.h((c0) c0740c.a().get(i11));
                this.f54994u -= c0740c.e()[i11];
                c0740c.e()[i11] = 0;
            }
            this.f54995v++;
            BufferedSink bufferedSink2 = this.f54996w;
            if (bufferedSink2 != null) {
                bufferedSink2.q0("REMOVE");
                bufferedSink2.writeByte(32);
                bufferedSink2.q0(c0740c.d());
                bufferedSink2.writeByte(10);
            }
            this.f54992s.remove(c0740c.d());
            if (O0()) {
                V0();
            }
            return true;
        }
        c0740c.m(true);
        return true;
    }

    private final boolean D1() {
        for (C0740c c0740c : this.f54992s.values()) {
            if (!c0740c.h()) {
                A1(c0740c);
                return true;
            }
        }
        return false;
    }

    private final void E0() {
        if (!this.f54999z) {
            return;
        }
        throw new IllegalStateException("cache is closed");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void F0(b bVar, boolean z10) {
        long j10;
        C0740c g10 = bVar.g();
        if (Intrinsics.areEqual(g10.b(), bVar)) {
            int i10 = 0;
            if (z10 && !g10.h()) {
                int i11 = this.f54988o;
                for (int i12 = 0; i12 < i11; i12++) {
                    if (bVar.h()[i12] && !this.C.j((c0) g10.c().get(i12))) {
                        bVar.a();
                        return;
                    }
                }
                int i13 = this.f54988o;
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
                    this.f54994u = (this.f54994u - j11) + j10;
                    i10++;
                }
            } else {
                int i14 = this.f54988o;
                while (i10 < i14) {
                    this.C.h((c0) g10.c().get(i10));
                    i10++;
                }
            }
            g10.i(null);
            if (g10.h()) {
                A1(g10);
                return;
            }
            this.f54995v++;
            BufferedSink bufferedSink = this.f54996w;
            Intrinsics.checkNotNull(bufferedSink);
            if (!z10 && !g10.g()) {
                this.f54992s.remove(g10.d());
                bufferedSink.q0("REMOVE");
                bufferedSink.writeByte(32);
                bufferedSink.q0(g10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f54994u <= this.f54986e || O0()) {
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
            if (this.f54994u <= this.f54986e) {
            }
            V0();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void I0() {
        close();
        k5.e.b(this.C, this.f54985d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean O0() {
        if (this.f54995v >= 2000) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void T1() {
        while (this.f54994u > this.f54986e) {
            if (!D1()) {
                return;
            }
        }
        this.A = false;
    }

    private final void V0() {
        os.i.d(this.f54993t, null, null, new f(null), 3, null);
    }

    private final void V1(String str) {
        if (E.i(str)) {
            return;
        }
        throw new IllegalArgumentException(("keys must match regex [a-z0-9_-]{1,120}: \"" + str + '\"').toString());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void X1() {
        try {
            BufferedSink bufferedSink = this.f54996w;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.C.p(this.f54990q, false));
            c10.q0("libcore.io.DiskLruCache").writeByte(10);
            c10.q0("1").writeByte(10);
            c10.W0(this.f54987i).writeByte(10);
            c10.W0(this.f54988o).writeByte(10);
            c10.writeByte(10);
            for (C0740c c0740c : this.f54992s.values()) {
                if (c0740c.b() != null) {
                    c10.q0("DIRTY");
                    c10.writeByte(32);
                    c10.q0(c0740c.d());
                    c10.writeByte(10);
                } else {
                    c10.q0("CLEAN");
                    c10.writeByte(32);
                    c10.q0(c0740c.d());
                    c0740c.o(c10);
                    c10.writeByte(10);
                }
            }
            Unit unit = Unit.f32056a;
            if (c10 != null) {
                try {
                    c10.close();
                } catch (Throwable th2) {
                    th = th2;
                }
            }
            th = null;
            if (th == null) {
                if (this.C.j(this.f54989p)) {
                    this.C.c(this.f54989p, this.f54991r);
                    this.C.c(this.f54990q, this.f54989p);
                    this.C.h(this.f54991r);
                } else {
                    this.C.c(this.f54990q, this.f54989p);
                }
                this.f54996w = Y0();
                this.f54995v = 0;
                this.f54997x = false;
                this.B = false;
            } else {
                throw th;
            }
        } catch (Throwable th3) {
            throw th3;
        }
    }

    private final BufferedSink Y0() {
        return x.c(new y4.d(this.C.a(this.f54989p), new Function1() { // from class: y4.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d12;
                d12 = c.d1(c.this, (IOException) obj);
                return d12;
            }
        }));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d1(c cVar, IOException iOException) {
        cVar.f54997x = true;
        return Unit.f32056a;
    }

    private final void w1() {
        Iterator it = this.f54992s.values().iterator();
        long j10 = 0;
        while (it.hasNext()) {
            C0740c c0740c = (C0740c) it.next();
            int i10 = 0;
            if (c0740c.b() == null) {
                int i11 = this.f54988o;
                while (i10 < i11) {
                    j10 += c0740c.e()[i10];
                    i10++;
                }
            } else {
                c0740c.i(null);
                int i12 = this.f54988o;
                while (i10 < i12) {
                    this.C.h((c0) c0740c.a().get(i10));
                    this.C.h((c0) c0740c.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
        this.f54994u = j10;
    }

    /* JADX WARN: Removed duplicated region for block: B:37:0x00c2 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:38:0x00c3  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void x1() {
        /*
            r10 = this;
            java.lang.String r0 = ", "
            y4.c$e r1 = r10.C
            qu.c0 r2 = r10.f54989p
            okio.Source r1 = r1.q(r2)
            okio.BufferedSource r1 = qu.x.d(r1)
            java.lang.String r2 = r1.H0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r3 = r1.H0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r4 = r1.H0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r5 = r1.H0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r6 = r1.H0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = "libcore.io.DiskLruCache"
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r2)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            java.lang.String r7 = "1"
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r3)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f54987i     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r4)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f54988o     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r5)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r6.length()     // Catch: java.lang.Throwable -> L5b
            if (r7 > 0) goto L82
            r0 = 0
        L51:
            java.lang.String r2 = r1.H0()     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            r10.z1(r2)     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            int r0 = r0 + 1
            goto L51
        L5b:
            r0 = move-exception
            goto Lb6
        L5d:
            java.util.LinkedHashMap r2 = r10.f54992s     // Catch: java.lang.Throwable -> L5b
            int r2 = r2.size()     // Catch: java.lang.Throwable -> L5b
            int r0 = r0 - r2
            r10.f54995v = r0     // Catch: java.lang.Throwable -> L5b
            boolean r0 = r1.n1()     // Catch: java.lang.Throwable -> L5b
            if (r0 != 0) goto L70
            r10.X1()     // Catch: java.lang.Throwable -> L5b
            goto L76
        L70:
            okio.BufferedSink r0 = r10.Y0()     // Catch: java.lang.Throwable -> L5b
            r10.f54996w = r0     // Catch: java.lang.Throwable -> L5b
        L76:
            kotlin.Unit r0 = kotlin.Unit.f32056a     // Catch: java.lang.Throwable -> L5b
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
            qr.e.a(r0, r1)
        Lc0:
            if (r0 != 0) goto Lc3
            return
        Lc3:
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: y4.c.x1():void");
    }

    private final void z1(String str) {
        String substring;
        int h02 = StringsKt.h0(str, ' ', 0, false, 6, null);
        if (h02 != -1) {
            int i10 = h02 + 1;
            int h03 = StringsKt.h0(str, ' ', i10, false, 4, null);
            if (h03 == -1) {
                substring = str.substring(i10);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                if (h02 == 6 && StringsKt.P(str, "REMOVE", false, 2, null)) {
                    this.f54992s.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            }
            LinkedHashMap linkedHashMap = this.f54992s;
            Object obj = linkedHashMap.get(substring);
            if (obj == null) {
                obj = new C0740c(substring);
                linkedHashMap.put(substring, obj);
            }
            C0740c c0740c = (C0740c) obj;
            if (h03 != -1 && h02 == 5 && StringsKt.P(str, "CLEAN", false, 2, null)) {
                String substring2 = str.substring(h03 + 1);
                Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                List L0 = StringsKt.L0(substring2, new char[]{' '}, false, 0, 6, null);
                c0740c.l(true);
                c0740c.i(null);
                c0740c.j(L0);
                return;
            } else if (h03 == -1 && h02 == 5 && StringsKt.P(str, "DIRTY", false, 2, null)) {
                c0740c.i(new b(c0740c));
                return;
            } else if (h03 == -1 && h02 == 4 && StringsKt.P(str, "READ", false, 2, null)) {
                return;
            } else {
                throw new IOException("unexpected journal line: " + str);
            }
        }
        throw new IOException("unexpected journal line: " + str);
    }

    public final synchronized b J0(String str) {
        b bVar;
        E0();
        V1(str);
        L0();
        C0740c c0740c = (C0740c) this.f54992s.get(str);
        if (c0740c != null) {
            bVar = c0740c.b();
        } else {
            bVar = null;
        }
        if (bVar != null) {
            return null;
        }
        if (c0740c != null && c0740c.f() != 0) {
            return null;
        }
        if (!this.A && !this.B) {
            BufferedSink bufferedSink = this.f54996w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.q0(str);
            bufferedSink.writeByte(10);
            bufferedSink.flush();
            if (this.f54997x) {
                return null;
            }
            if (c0740c == null) {
                c0740c = new C0740c(str);
                this.f54992s.put(str, c0740c);
            }
            b bVar2 = new b(c0740c);
            c0740c.i(bVar2);
            return bVar2;
        }
        V0();
        return null;
    }

    public final synchronized d K0(String str) {
        d n10;
        E0();
        V1(str);
        L0();
        C0740c c0740c = (C0740c) this.f54992s.get(str);
        if (c0740c != null && (n10 = c0740c.n()) != null) {
            this.f54995v++;
            BufferedSink bufferedSink = this.f54996w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0("READ");
            bufferedSink.writeByte(32);
            bufferedSink.q0(str);
            bufferedSink.writeByte(10);
            if (O0()) {
                V0();
            }
            return n10;
        }
        return null;
    }

    public final synchronized void L0() {
        try {
            if (this.f54998y) {
                return;
            }
            this.C.h(this.f54990q);
            if (this.C.j(this.f54991r)) {
                if (this.C.j(this.f54989p)) {
                    this.C.h(this.f54991r);
                } else {
                    this.C.c(this.f54991r, this.f54989p);
                }
            }
            if (this.C.j(this.f54989p)) {
                try {
                    x1();
                    w1();
                    this.f54998y = true;
                    return;
                } catch (IOException unused) {
                    I0();
                    this.f54999z = false;
                }
            }
            X1();
            this.f54998y = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            if (this.f54998y && !this.f54999z) {
                for (C0740c c0740c : (C0740c[]) this.f54992s.values().toArray(new C0740c[0])) {
                    b b10 = c0740c.b();
                    if (b10 != null) {
                        b10.e();
                    }
                }
                T1();
                kotlinx.coroutines.i.f(this.f54993t, null, 1, null);
                BufferedSink bufferedSink = this.f54996w;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f54996w = null;
                this.f54999z = true;
                return;
            }
            this.f54999z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Flushable
    public synchronized void flush() {
        if (!this.f54998y) {
            return;
        }
        E0();
        T1();
        BufferedSink bufferedSink = this.f54996w;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }
}
