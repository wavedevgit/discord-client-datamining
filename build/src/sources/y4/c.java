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
import ms.j1;
import okio.BufferedSink;
import okio.Sink;
import ou.c0;
import ou.h;
import ou.i;
import ou.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements Closeable, Flushable {
    public static final a D = new a(null);
    private static final Regex E = new Regex("[a-z0-9_-]{1,120}");
    private boolean A;
    private boolean B;
    private final e C;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f54393d;

    /* renamed from: e  reason: collision with root package name */
    private final long f54394e;

    /* renamed from: i  reason: collision with root package name */
    private final int f54395i;

    /* renamed from: o  reason: collision with root package name */
    private final int f54396o;

    /* renamed from: p  reason: collision with root package name */
    private final c0 f54397p;

    /* renamed from: q  reason: collision with root package name */
    private final c0 f54398q;

    /* renamed from: r  reason: collision with root package name */
    private final c0 f54399r;

    /* renamed from: s  reason: collision with root package name */
    private final LinkedHashMap f54400s;

    /* renamed from: t  reason: collision with root package name */
    private final CoroutineScope f54401t;

    /* renamed from: u  reason: collision with root package name */
    private long f54402u;

    /* renamed from: v  reason: collision with root package name */
    private int f54403v;

    /* renamed from: w  reason: collision with root package name */
    private BufferedSink f54404w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f54405x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f54406y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f54407z;

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
        private final C0753c f54408a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f54409b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean[] f54410c;

        public b(C0753c c0753c) {
            this.f54408a = c0753c;
            this.f54410c = new boolean[c.this.f54396o];
        }

        private final void d(boolean z10) {
            c cVar = c.this;
            synchronized (cVar) {
                try {
                    if (!this.f54409b) {
                        if (Intrinsics.areEqual(this.f54408a.b(), this)) {
                            cVar.F0(this, z10);
                        }
                        this.f54409b = true;
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
            d N0;
            c cVar = c.this;
            synchronized (cVar) {
                b();
                N0 = cVar.N0(this.f54408a.d());
            }
            return N0;
        }

        public final void e() {
            if (Intrinsics.areEqual(this.f54408a.b(), this)) {
                this.f54408a.m(true);
            }
        }

        public final c0 f(int i10) {
            c0 c0Var;
            c cVar = c.this;
            synchronized (cVar) {
                if (!this.f54409b) {
                    this.f54410c[i10] = true;
                    Object obj = this.f54408a.c().get(i10);
                    k5.e.a(cVar.C, (c0) obj);
                    c0Var = (c0) obj;
                } else {
                    throw new IllegalStateException("editor is closed");
                }
            }
            return c0Var;
        }

        public final C0753c g() {
            return this.f54408a;
        }

        public final boolean[] h() {
            return this.f54410c;
        }
    }

    /* renamed from: y4.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class C0753c {

        /* renamed from: a  reason: collision with root package name */
        private final String f54412a;

        /* renamed from: b  reason: collision with root package name */
        private final long[] f54413b;

        /* renamed from: c  reason: collision with root package name */
        private final ArrayList f54414c;

        /* renamed from: d  reason: collision with root package name */
        private final ArrayList f54415d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f54416e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f54417f;

        /* renamed from: g  reason: collision with root package name */
        private b f54418g;

        /* renamed from: h  reason: collision with root package name */
        private int f54419h;

        public C0753c(String str) {
            this.f54412a = str;
            this.f54413b = new long[c.this.f54396o];
            this.f54414c = new ArrayList(c.this.f54396o);
            this.f54415d = new ArrayList(c.this.f54396o);
            StringBuilder sb2 = new StringBuilder(str);
            sb2.append('.');
            int length = sb2.length();
            int i10 = c.this.f54396o;
            for (int i11 = 0; i11 < i10; i11++) {
                sb2.append(i11);
                this.f54414c.add(c.this.f54393d.l(sb2.toString()));
                sb2.append(".tmp");
                this.f54415d.add(c.this.f54393d.l(sb2.toString()));
                sb2.setLength(length);
            }
        }

        public final ArrayList a() {
            return this.f54414c;
        }

        public final b b() {
            return this.f54418g;
        }

        public final ArrayList c() {
            return this.f54415d;
        }

        public final String d() {
            return this.f54412a;
        }

        public final long[] e() {
            return this.f54413b;
        }

        public final int f() {
            return this.f54419h;
        }

        public final boolean g() {
            return this.f54416e;
        }

        public final boolean h() {
            return this.f54417f;
        }

        public final void i(b bVar) {
            this.f54418g = bVar;
        }

        public final void j(List list) {
            if (list.size() == c.this.f54396o) {
                try {
                    int size = list.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f54413b[i10] = Long.parseLong((String) list.get(i10));
                    }
                    return;
                } catch (NumberFormatException unused) {
                    throw new IOException("unexpected journal line: " + list);
                }
            }
            throw new IOException("unexpected journal line: " + list);
        }

        public final void k(int i10) {
            this.f54419h = i10;
        }

        public final void l(boolean z10) {
            this.f54416e = z10;
        }

        public final void m(boolean z10) {
            this.f54417f = z10;
        }

        public final d n() {
            if (!this.f54416e || this.f54418g != null || this.f54417f) {
                return null;
            }
            ArrayList arrayList = this.f54414c;
            c cVar = c.this;
            int size = arrayList.size();
            for (int i10 = 0; i10 < size; i10++) {
                if (!cVar.C.j((c0) arrayList.get(i10))) {
                    try {
                        cVar.B1(this);
                    } catch (IOException unused) {
                    }
                    return null;
                }
            }
            this.f54419h++;
            return new d(this);
        }

        public final void o(BufferedSink bufferedSink) {
            for (long j10 : this.f54413b) {
                bufferedSink.writeByte(32).W0(j10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final C0753c f54421d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f54422e;

        public d(C0753c c0753c) {
            this.f54421d = c0753c;
        }

        public final b a() {
            b K0;
            c cVar = c.this;
            synchronized (cVar) {
                close();
                K0 = cVar.K0(this.f54421d.d());
            }
            return K0;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f54422e) {
                this.f54422e = true;
                c cVar = c.this;
                synchronized (cVar) {
                    try {
                        C0753c c0753c = this.f54421d;
                        c0753c.k(c0753c.f() - 1);
                        if (this.f54421d.f() == 0 && this.f54421d.h()) {
                            cVar.B1(this.f54421d);
                        }
                        Unit unit = Unit.f31988a;
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }
        }

        public final c0 h(int i10) {
            if (!this.f54422e) {
                return (c0) this.f54421d.a().get(i10);
            }
            throw new IllegalStateException("snapshot is closed");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends i {
        e(h hVar) {
            super(hVar);
        }

        @Override // ou.i, ou.h
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
        int f54424d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f54424d == 0) {
                kotlin.c.b(obj);
                c cVar = c.this;
                synchronized (cVar) {
                    if (cVar.f54406y && !cVar.f54407z) {
                        try {
                            cVar.U1();
                        } catch (IOException unused) {
                            cVar.A = true;
                        }
                        try {
                            if (cVar.V0()) {
                                cVar.Y1();
                            }
                        } catch (IOException unused2) {
                            cVar.B = true;
                            cVar.f54404w = x.c(x.b());
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
        this.f54393d = c0Var;
        this.f54394e = j10;
        this.f54395i = i10;
        this.f54396o = i11;
        if (j10 > 0) {
            if (i11 > 0) {
                this.f54397p = c0Var.l("journal");
                this.f54398q = c0Var.l("journal.tmp");
                this.f54399r = c0Var.l("journal.bkp");
                this.f54400s = new LinkedHashMap(0, 0.75f, true);
                this.f54401t = kotlinx.coroutines.i.a(j1.b(null, 1, null).V0(coroutineDispatcher.Y1(1)));
                this.C = new e(hVar);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    private final void A1(String str) {
        String substring;
        int h02 = StringsKt.h0(str, ' ', 0, false, 6, null);
        if (h02 != -1) {
            int i10 = h02 + 1;
            int h03 = StringsKt.h0(str, ' ', i10, false, 4, null);
            if (h03 == -1) {
                substring = str.substring(i10);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                if (h02 == 6 && StringsKt.P(str, "REMOVE", false, 2, null)) {
                    this.f54400s.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            }
            LinkedHashMap linkedHashMap = this.f54400s;
            Object obj = linkedHashMap.get(substring);
            if (obj == null) {
                obj = new C0753c(substring);
                linkedHashMap.put(substring, obj);
            }
            C0753c c0753c = (C0753c) obj;
            if (h03 != -1 && h02 == 5 && StringsKt.P(str, "CLEAN", false, 2, null)) {
                String substring2 = str.substring(h03 + 1);
                Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                List L0 = StringsKt.L0(substring2, new char[]{' '}, false, 0, 6, null);
                c0753c.l(true);
                c0753c.i(null);
                c0753c.j(L0);
                return;
            } else if (h03 == -1 && h02 == 5 && StringsKt.P(str, "DIRTY", false, 2, null)) {
                c0753c.i(new b(c0753c));
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
    public final boolean B1(C0753c c0753c) {
        BufferedSink bufferedSink;
        if (c0753c.f() > 0 && (bufferedSink = this.f54404w) != null) {
            bufferedSink.o0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.o0(c0753c.d());
            bufferedSink.writeByte(10);
            bufferedSink.flush();
        }
        if (c0753c.f() <= 0 && c0753c.b() == null) {
            int i10 = this.f54396o;
            for (int i11 = 0; i11 < i10; i11++) {
                this.C.h((c0) c0753c.a().get(i11));
                this.f54402u -= c0753c.e()[i11];
                c0753c.e()[i11] = 0;
            }
            this.f54403v++;
            BufferedSink bufferedSink2 = this.f54404w;
            if (bufferedSink2 != null) {
                bufferedSink2.o0("REMOVE");
                bufferedSink2.writeByte(32);
                bufferedSink2.o0(c0753c.d());
                bufferedSink2.writeByte(10);
            }
            this.f54400s.remove(c0753c.d());
            if (V0()) {
                Y0();
            }
            return true;
        }
        c0753c.m(true);
        return true;
    }

    private final void E0() {
        if (!this.f54407z) {
            return;
        }
        throw new IllegalStateException("cache is closed");
    }

    private final boolean E1() {
        for (C0753c c0753c : this.f54400s.values()) {
            if (!c0753c.h()) {
                B1(c0753c);
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void F0(b bVar, boolean z10) {
        long j10;
        C0753c g10 = bVar.g();
        if (Intrinsics.areEqual(g10.b(), bVar)) {
            int i10 = 0;
            if (z10 && !g10.h()) {
                int i11 = this.f54396o;
                for (int i12 = 0; i12 < i11; i12++) {
                    if (bVar.h()[i12] && !this.C.j((c0) g10.c().get(i12))) {
                        bVar.a();
                        return;
                    }
                }
                int i13 = this.f54396o;
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
                    this.f54402u = (this.f54402u - j11) + j10;
                    i10++;
                }
            } else {
                int i14 = this.f54396o;
                while (i10 < i14) {
                    this.C.h((c0) g10.c().get(i10));
                    i10++;
                }
            }
            g10.i(null);
            if (g10.h()) {
                B1(g10);
                return;
            }
            this.f54403v++;
            BufferedSink bufferedSink = this.f54404w;
            Intrinsics.checkNotNull(bufferedSink);
            if (!z10 && !g10.g()) {
                this.f54400s.remove(g10.d());
                bufferedSink.o0("REMOVE");
                bufferedSink.writeByte(32);
                bufferedSink.o0(g10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f54402u <= this.f54394e || V0()) {
                    Y0();
                }
                return;
            }
            g10.l(true);
            bufferedSink.o0("CLEAN");
            bufferedSink.writeByte(32);
            bufferedSink.o0(g10.d());
            g10.o(bufferedSink);
            bufferedSink.writeByte(10);
            bufferedSink.flush();
            if (this.f54402u <= this.f54394e) {
            }
            Y0();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void I0() {
        close();
        k5.e.b(this.C, this.f54393d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void U1() {
        while (this.f54402u > this.f54394e) {
            if (!E1()) {
                return;
            }
        }
        this.A = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean V0() {
        if (this.f54403v >= 2000) {
            return true;
        }
        return false;
    }

    private final void W1(String str) {
        if (E.i(str)) {
            return;
        }
        throw new IllegalArgumentException(("keys must match regex [a-z0-9_-]{1,120}: \"" + str + '\"').toString());
    }

    private final void Y0() {
        ms.i.d(this.f54401t, null, null, new f(null), 3, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void Y1() {
        try {
            BufferedSink bufferedSink = this.f54404w;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.C.p(this.f54398q, false));
            c10.o0("libcore.io.DiskLruCache").writeByte(10);
            c10.o0("1").writeByte(10);
            c10.W0(this.f54395i).writeByte(10);
            c10.W0(this.f54396o).writeByte(10);
            c10.writeByte(10);
            for (C0753c c0753c : this.f54400s.values()) {
                if (c0753c.b() != null) {
                    c10.o0("DIRTY");
                    c10.writeByte(32);
                    c10.o0(c0753c.d());
                    c10.writeByte(10);
                } else {
                    c10.o0("CLEAN");
                    c10.writeByte(32);
                    c10.o0(c0753c.d());
                    c0753c.o(c10);
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
                if (this.C.j(this.f54397p)) {
                    this.C.c(this.f54397p, this.f54399r);
                    this.C.c(this.f54398q, this.f54397p);
                    this.C.h(this.f54399r);
                } else {
                    this.C.c(this.f54398q, this.f54397p);
                }
                this.f54404w = Z0();
                this.f54403v = 0;
                this.f54405x = false;
                this.B = false;
            } else {
                throw th;
            }
        } catch (Throwable th3) {
            throw th3;
        }
    }

    private final BufferedSink Z0() {
        return x.c(new y4.d(this.C.a(this.f54397p), new Function1() { // from class: y4.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit e12;
                e12 = c.e1(c.this, (IOException) obj);
                return e12;
            }
        }));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e1(c cVar, IOException iOException) {
        cVar.f54405x = true;
        return Unit.f31988a;
    }

    private final void x1() {
        Iterator it = this.f54400s.values().iterator();
        long j10 = 0;
        while (it.hasNext()) {
            C0753c c0753c = (C0753c) it.next();
            int i10 = 0;
            if (c0753c.b() == null) {
                int i11 = this.f54396o;
                while (i10 < i11) {
                    j10 += c0753c.e()[i10];
                    i10++;
                }
            } else {
                c0753c.i(null);
                int i12 = this.f54396o;
                while (i10 < i12) {
                    this.C.h((c0) c0753c.a().get(i10));
                    this.C.h((c0) c0753c.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
        this.f54402u = j10;
    }

    /* JADX WARN: Removed duplicated region for block: B:37:0x00c2 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:38:0x00c3  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void y1() {
        /*
            r10 = this;
            java.lang.String r0 = ", "
            y4.c$e r1 = r10.C
            ou.c0 r2 = r10.f54397p
            okio.Source r1 = r1.q(r2)
            okio.BufferedSource r1 = ou.x.d(r1)
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
            int r7 = r10.f54395i     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r4)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f54396o     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r5)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r6.length()     // Catch: java.lang.Throwable -> L5b
            if (r7 > 0) goto L82
            r0 = 0
        L51:
            java.lang.String r2 = r1.H0()     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            r10.A1(r2)     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            int r0 = r0 + 1
            goto L51
        L5b:
            r0 = move-exception
            goto Lb6
        L5d:
            java.util.LinkedHashMap r2 = r10.f54400s     // Catch: java.lang.Throwable -> L5b
            int r2 = r2.size()     // Catch: java.lang.Throwable -> L5b
            int r0 = r0 - r2
            r10.f54403v = r0     // Catch: java.lang.Throwable -> L5b
            boolean r0 = r1.o1()     // Catch: java.lang.Throwable -> L5b
            if (r0 != 0) goto L70
            r10.Y1()     // Catch: java.lang.Throwable -> L5b
            goto L76
        L70:
            okio.BufferedSink r0 = r10.Z0()     // Catch: java.lang.Throwable -> L5b
            r10.f54404w = r0     // Catch: java.lang.Throwable -> L5b
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
            or.e.a(r0, r1)
        Lc0:
            if (r0 != 0) goto Lc3
            return
        Lc3:
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: y4.c.y1():void");
    }

    public final synchronized b K0(String str) {
        b bVar;
        E0();
        W1(str);
        S0();
        C0753c c0753c = (C0753c) this.f54400s.get(str);
        if (c0753c != null) {
            bVar = c0753c.b();
        } else {
            bVar = null;
        }
        if (bVar != null) {
            return null;
        }
        if (c0753c != null && c0753c.f() != 0) {
            return null;
        }
        if (!this.A && !this.B) {
            BufferedSink bufferedSink = this.f54404w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.o0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.o0(str);
            bufferedSink.writeByte(10);
            bufferedSink.flush();
            if (this.f54405x) {
                return null;
            }
            if (c0753c == null) {
                c0753c = new C0753c(str);
                this.f54400s.put(str, c0753c);
            }
            b bVar2 = new b(c0753c);
            c0753c.i(bVar2);
            return bVar2;
        }
        Y0();
        return null;
    }

    public final synchronized d N0(String str) {
        d n10;
        E0();
        W1(str);
        S0();
        C0753c c0753c = (C0753c) this.f54400s.get(str);
        if (c0753c != null && (n10 = c0753c.n()) != null) {
            this.f54403v++;
            BufferedSink bufferedSink = this.f54404w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.o0("READ");
            bufferedSink.writeByte(32);
            bufferedSink.o0(str);
            bufferedSink.writeByte(10);
            if (V0()) {
                Y0();
            }
            return n10;
        }
        return null;
    }

    public final synchronized void S0() {
        try {
            if (this.f54406y) {
                return;
            }
            this.C.h(this.f54398q);
            if (this.C.j(this.f54399r)) {
                if (this.C.j(this.f54397p)) {
                    this.C.h(this.f54399r);
                } else {
                    this.C.c(this.f54399r, this.f54397p);
                }
            }
            if (this.C.j(this.f54397p)) {
                try {
                    y1();
                    x1();
                    this.f54406y = true;
                    return;
                } catch (IOException unused) {
                    I0();
                    this.f54407z = false;
                }
            }
            Y1();
            this.f54406y = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            if (this.f54406y && !this.f54407z) {
                for (C0753c c0753c : (C0753c[]) this.f54400s.values().toArray(new C0753c[0])) {
                    b b10 = c0753c.b();
                    if (b10 != null) {
                        b10.e();
                    }
                }
                U1();
                kotlinx.coroutines.i.f(this.f54401t, null, 1, null);
                BufferedSink bufferedSink = this.f54404w;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f54404w = null;
                this.f54407z = true;
                return;
            }
            this.f54407z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Flushable
    public synchronized void flush() {
        if (!this.f54406y) {
            return;
        }
        E0();
        U1();
        BufferedSink bufferedSink = this.f54404w;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }
}
