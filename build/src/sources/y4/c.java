package y4;

import java.io.Closeable;
import java.io.Flushable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import js.j1;
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
import lu.c0;
import lu.h;
import lu.i;
import lu.x;
import okio.BufferedSink;
import okio.Sink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements Closeable, Flushable {
    public static final a D = new a(null);
    private static final Regex E = new Regex("[a-z0-9_-]{1,120}");
    private boolean A;
    private boolean B;
    private final e C;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f53697d;

    /* renamed from: e  reason: collision with root package name */
    private final long f53698e;

    /* renamed from: i  reason: collision with root package name */
    private final int f53699i;

    /* renamed from: o  reason: collision with root package name */
    private final int f53700o;

    /* renamed from: p  reason: collision with root package name */
    private final c0 f53701p;

    /* renamed from: q  reason: collision with root package name */
    private final c0 f53702q;

    /* renamed from: r  reason: collision with root package name */
    private final c0 f53703r;

    /* renamed from: s  reason: collision with root package name */
    private final LinkedHashMap f53704s;

    /* renamed from: t  reason: collision with root package name */
    private final CoroutineScope f53705t;

    /* renamed from: u  reason: collision with root package name */
    private long f53706u;

    /* renamed from: v  reason: collision with root package name */
    private int f53707v;

    /* renamed from: w  reason: collision with root package name */
    private BufferedSink f53708w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f53709x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f53710y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f53711z;

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
        private final C0733c f53712a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f53713b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean[] f53714c;

        public b(C0733c c0733c) {
            this.f53712a = c0733c;
            this.f53714c = new boolean[c.this.f53700o];
        }

        private final void d(boolean z10) {
            c cVar = c.this;
            synchronized (cVar) {
                try {
                    if (!this.f53713b) {
                        if (Intrinsics.areEqual(this.f53712a.b(), this)) {
                            cVar.F0(this, z10);
                        }
                        this.f53713b = true;
                        Unit unit = Unit.f32464a;
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
            d M0;
            c cVar = c.this;
            synchronized (cVar) {
                b();
                M0 = cVar.M0(this.f53712a.d());
            }
            return M0;
        }

        public final void e() {
            if (Intrinsics.areEqual(this.f53712a.b(), this)) {
                this.f53712a.m(true);
            }
        }

        public final c0 f(int i10) {
            c0 c0Var;
            c cVar = c.this;
            synchronized (cVar) {
                if (!this.f53713b) {
                    this.f53714c[i10] = true;
                    Object obj = this.f53712a.c().get(i10);
                    k5.e.a(cVar.C, (c0) obj);
                    c0Var = (c0) obj;
                } else {
                    throw new IllegalStateException("editor is closed");
                }
            }
            return c0Var;
        }

        public final C0733c g() {
            return this.f53712a;
        }

        public final boolean[] h() {
            return this.f53714c;
        }
    }

    /* renamed from: y4.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class C0733c {

        /* renamed from: a  reason: collision with root package name */
        private final String f53716a;

        /* renamed from: b  reason: collision with root package name */
        private final long[] f53717b;

        /* renamed from: c  reason: collision with root package name */
        private final ArrayList f53718c;

        /* renamed from: d  reason: collision with root package name */
        private final ArrayList f53719d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53720e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f53721f;

        /* renamed from: g  reason: collision with root package name */
        private b f53722g;

        /* renamed from: h  reason: collision with root package name */
        private int f53723h;

        public C0733c(String str) {
            this.f53716a = str;
            this.f53717b = new long[c.this.f53700o];
            this.f53718c = new ArrayList(c.this.f53700o);
            this.f53719d = new ArrayList(c.this.f53700o);
            StringBuilder sb2 = new StringBuilder(str);
            sb2.append('.');
            int length = sb2.length();
            int i10 = c.this.f53700o;
            for (int i11 = 0; i11 < i10; i11++) {
                sb2.append(i11);
                this.f53718c.add(c.this.f53697d.k(sb2.toString()));
                sb2.append(".tmp");
                this.f53719d.add(c.this.f53697d.k(sb2.toString()));
                sb2.setLength(length);
            }
        }

        public final ArrayList a() {
            return this.f53718c;
        }

        public final b b() {
            return this.f53722g;
        }

        public final ArrayList c() {
            return this.f53719d;
        }

        public final String d() {
            return this.f53716a;
        }

        public final long[] e() {
            return this.f53717b;
        }

        public final int f() {
            return this.f53723h;
        }

        public final boolean g() {
            return this.f53720e;
        }

        public final boolean h() {
            return this.f53721f;
        }

        public final void i(b bVar) {
            this.f53722g = bVar;
        }

        public final void j(List list) {
            if (list.size() == c.this.f53700o) {
                try {
                    int size = list.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f53717b[i10] = Long.parseLong((String) list.get(i10));
                    }
                    return;
                } catch (NumberFormatException unused) {
                    throw new IOException("unexpected journal line: " + list);
                }
            }
            throw new IOException("unexpected journal line: " + list);
        }

        public final void k(int i10) {
            this.f53723h = i10;
        }

        public final void l(boolean z10) {
            this.f53720e = z10;
        }

        public final void m(boolean z10) {
            this.f53721f = z10;
        }

        public final d n() {
            if (!this.f53720e || this.f53722g != null || this.f53721f) {
                return null;
            }
            ArrayList arrayList = this.f53718c;
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
            this.f53723h++;
            return new d(this);
        }

        public final void o(BufferedSink bufferedSink) {
            for (long j10 : this.f53717b) {
                bufferedSink.writeByte(32).W0(j10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final C0733c f53725d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53726e;

        public d(C0733c c0733c) {
            this.f53725d = c0733c;
        }

        public final b a() {
            b J0;
            c cVar = c.this;
            synchronized (cVar) {
                close();
                J0 = cVar.J0(this.f53725d.d());
            }
            return J0;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f53726e) {
                this.f53726e = true;
                c cVar = c.this;
                synchronized (cVar) {
                    try {
                        C0733c c0733c = this.f53725d;
                        c0733c.k(c0733c.f() - 1);
                        if (this.f53725d.f() == 0 && this.f53725d.h()) {
                            cVar.B1(this.f53725d);
                        }
                        Unit unit = Unit.f32464a;
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }
        }

        public final c0 h(int i10) {
            if (!this.f53726e) {
                return (c0) this.f53725d.a().get(i10);
            }
            throw new IllegalStateException("snapshot is closed");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends i {
        e(h hVar) {
            super(hVar);
        }

        @Override // lu.i, lu.h
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
        int f53728d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f53728d == 0) {
                kotlin.c.b(obj);
                c cVar = c.this;
                synchronized (cVar) {
                    if (cVar.f53710y && !cVar.f53711z) {
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
                            cVar.f53708w = x.c(x.b());
                        }
                        return Unit.f32464a;
                    }
                    return Unit.f32464a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public c(h hVar, c0 c0Var, CoroutineDispatcher coroutineDispatcher, long j10, int i10, int i11) {
        this.f53697d = c0Var;
        this.f53698e = j10;
        this.f53699i = i10;
        this.f53700o = i11;
        if (j10 > 0) {
            if (i11 > 0) {
                this.f53701p = c0Var.k("journal");
                this.f53702q = c0Var.k("journal.tmp");
                this.f53703r = c0Var.k("journal.bkp");
                this.f53704s = new LinkedHashMap(0, 0.75f, true);
                this.f53705t = kotlinx.coroutines.i.a(j1.b(null, 1, null).V0(coroutineDispatcher.Y1(1)));
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
                    this.f53704s.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            }
            LinkedHashMap linkedHashMap = this.f53704s;
            Object obj = linkedHashMap.get(substring);
            if (obj == null) {
                obj = new C0733c(substring);
                linkedHashMap.put(substring, obj);
            }
            C0733c c0733c = (C0733c) obj;
            if (h03 != -1 && h02 == 5 && StringsKt.P(str, "CLEAN", false, 2, null)) {
                String substring2 = str.substring(h03 + 1);
                Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                List L0 = StringsKt.L0(substring2, new char[]{' '}, false, 0, 6, null);
                c0733c.l(true);
                c0733c.i(null);
                c0733c.j(L0);
                return;
            } else if (h03 == -1 && h02 == 5 && StringsKt.P(str, "DIRTY", false, 2, null)) {
                c0733c.i(new b(c0733c));
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
    public final boolean B1(C0733c c0733c) {
        BufferedSink bufferedSink;
        if (c0733c.f() > 0 && (bufferedSink = this.f53708w) != null) {
            bufferedSink.n0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.n0(c0733c.d());
            bufferedSink.writeByte(10);
            bufferedSink.flush();
        }
        if (c0733c.f() <= 0 && c0733c.b() == null) {
            int i10 = this.f53700o;
            for (int i11 = 0; i11 < i10; i11++) {
                this.C.h((c0) c0733c.a().get(i11));
                this.f53706u -= c0733c.e()[i11];
                c0733c.e()[i11] = 0;
            }
            this.f53707v++;
            BufferedSink bufferedSink2 = this.f53708w;
            if (bufferedSink2 != null) {
                bufferedSink2.n0("REMOVE");
                bufferedSink2.writeByte(32);
                bufferedSink2.n0(c0733c.d());
                bufferedSink2.writeByte(10);
            }
            this.f53704s.remove(c0733c.d());
            if (V0()) {
                Y0();
            }
            return true;
        }
        c0733c.m(true);
        return true;
    }

    private final void E0() {
        if (!this.f53711z) {
            return;
        }
        throw new IllegalStateException("cache is closed");
    }

    private final boolean E1() {
        for (C0733c c0733c : this.f53704s.values()) {
            if (!c0733c.h()) {
                B1(c0733c);
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void F0(b bVar, boolean z10) {
        long j10;
        C0733c g10 = bVar.g();
        if (Intrinsics.areEqual(g10.b(), bVar)) {
            int i10 = 0;
            if (z10 && !g10.h()) {
                int i11 = this.f53700o;
                for (int i12 = 0; i12 < i11; i12++) {
                    if (bVar.h()[i12] && !this.C.j((c0) g10.c().get(i12))) {
                        bVar.a();
                        return;
                    }
                }
                int i13 = this.f53700o;
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
                    this.f53706u = (this.f53706u - j11) + j10;
                    i10++;
                }
            } else {
                int i14 = this.f53700o;
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
            this.f53707v++;
            BufferedSink bufferedSink = this.f53708w;
            Intrinsics.checkNotNull(bufferedSink);
            if (!z10 && !g10.g()) {
                this.f53704s.remove(g10.d());
                bufferedSink.n0("REMOVE");
                bufferedSink.writeByte(32);
                bufferedSink.n0(g10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f53706u <= this.f53698e || V0()) {
                    Y0();
                }
                return;
            }
            g10.l(true);
            bufferedSink.n0("CLEAN");
            bufferedSink.writeByte(32);
            bufferedSink.n0(g10.d());
            g10.o(bufferedSink);
            bufferedSink.writeByte(10);
            bufferedSink.flush();
            if (this.f53706u <= this.f53698e) {
            }
            Y0();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void I0() {
        close();
        k5.e.b(this.C, this.f53697d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void U1() {
        while (this.f53706u > this.f53698e) {
            if (!E1()) {
                return;
            }
        }
        this.A = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean V0() {
        if (this.f53707v >= 2000) {
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
        js.i.d(this.f53705t, null, null, new f(null), 3, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void Y1() {
        try {
            BufferedSink bufferedSink = this.f53708w;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.C.p(this.f53702q, false));
            c10.n0("libcore.io.DiskLruCache").writeByte(10);
            c10.n0("1").writeByte(10);
            c10.W0(this.f53699i).writeByte(10);
            c10.W0(this.f53700o).writeByte(10);
            c10.writeByte(10);
            for (C0733c c0733c : this.f53704s.values()) {
                if (c0733c.b() != null) {
                    c10.n0("DIRTY");
                    c10.writeByte(32);
                    c10.n0(c0733c.d());
                    c10.writeByte(10);
                } else {
                    c10.n0("CLEAN");
                    c10.writeByte(32);
                    c10.n0(c0733c.d());
                    c0733c.o(c10);
                    c10.writeByte(10);
                }
            }
            Unit unit = Unit.f32464a;
            if (c10 != null) {
                try {
                    c10.close();
                } catch (Throwable th2) {
                    th = th2;
                }
            }
            th = null;
            if (th == null) {
                if (this.C.j(this.f53701p)) {
                    this.C.c(this.f53701p, this.f53703r);
                    this.C.c(this.f53702q, this.f53701p);
                    this.C.h(this.f53703r);
                } else {
                    this.C.c(this.f53702q, this.f53701p);
                }
                this.f53708w = Z0();
                this.f53707v = 0;
                this.f53709x = false;
                this.B = false;
            } else {
                throw th;
            }
        } catch (Throwable th3) {
            throw th3;
        }
    }

    private final BufferedSink Z0() {
        return x.c(new y4.d(this.C.a(this.f53701p), new Function1() { // from class: y4.b
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
        cVar.f53709x = true;
        return Unit.f32464a;
    }

    private final void x1() {
        Iterator it = this.f53704s.values().iterator();
        long j10 = 0;
        while (it.hasNext()) {
            C0733c c0733c = (C0733c) it.next();
            int i10 = 0;
            if (c0733c.b() == null) {
                int i11 = this.f53700o;
                while (i10 < i11) {
                    j10 += c0733c.e()[i10];
                    i10++;
                }
            } else {
                c0733c.i(null);
                int i12 = this.f53700o;
                while (i10 < i12) {
                    this.C.h((c0) c0733c.a().get(i10));
                    this.C.h((c0) c0733c.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
        this.f53706u = j10;
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
            lu.c0 r2 = r10.f53701p
            okio.Source r1 = r1.q(r2)
            okio.BufferedSource r1 = lu.x.d(r1)
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
            int r7 = r10.f53699i     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r4)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f53700o     // Catch: java.lang.Throwable -> L5b
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
            java.util.LinkedHashMap r2 = r10.f53704s     // Catch: java.lang.Throwable -> L5b
            int r2 = r2.size()     // Catch: java.lang.Throwable -> L5b
            int r0 = r0 - r2
            r10.f53707v = r0     // Catch: java.lang.Throwable -> L5b
            boolean r0 = r1.o1()     // Catch: java.lang.Throwable -> L5b
            if (r0 != 0) goto L70
            r10.Y1()     // Catch: java.lang.Throwable -> L5b
            goto L76
        L70:
            okio.BufferedSink r0 = r10.Z0()     // Catch: java.lang.Throwable -> L5b
            r10.f53708w = r0     // Catch: java.lang.Throwable -> L5b
        L76:
            kotlin.Unit r0 = kotlin.Unit.f32464a     // Catch: java.lang.Throwable -> L5b
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
            lr.e.a(r0, r1)
        Lc0:
            if (r0 != 0) goto Lc3
            return
        Lc3:
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: y4.c.y1():void");
    }

    public final synchronized b J0(String str) {
        b bVar;
        E0();
        W1(str);
        R0();
        C0733c c0733c = (C0733c) this.f53704s.get(str);
        if (c0733c != null) {
            bVar = c0733c.b();
        } else {
            bVar = null;
        }
        if (bVar != null) {
            return null;
        }
        if (c0733c != null && c0733c.f() != 0) {
            return null;
        }
        if (!this.A && !this.B) {
            BufferedSink bufferedSink = this.f53708w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.n0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.n0(str);
            bufferedSink.writeByte(10);
            bufferedSink.flush();
            if (this.f53709x) {
                return null;
            }
            if (c0733c == null) {
                c0733c = new C0733c(str);
                this.f53704s.put(str, c0733c);
            }
            b bVar2 = new b(c0733c);
            c0733c.i(bVar2);
            return bVar2;
        }
        Y0();
        return null;
    }

    public final synchronized d M0(String str) {
        d n10;
        E0();
        W1(str);
        R0();
        C0733c c0733c = (C0733c) this.f53704s.get(str);
        if (c0733c != null && (n10 = c0733c.n()) != null) {
            this.f53707v++;
            BufferedSink bufferedSink = this.f53708w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.n0("READ");
            bufferedSink.writeByte(32);
            bufferedSink.n0(str);
            bufferedSink.writeByte(10);
            if (V0()) {
                Y0();
            }
            return n10;
        }
        return null;
    }

    public final synchronized void R0() {
        try {
            if (this.f53710y) {
                return;
            }
            this.C.h(this.f53702q);
            if (this.C.j(this.f53703r)) {
                if (this.C.j(this.f53701p)) {
                    this.C.h(this.f53703r);
                } else {
                    this.C.c(this.f53703r, this.f53701p);
                }
            }
            if (this.C.j(this.f53701p)) {
                try {
                    y1();
                    x1();
                    this.f53710y = true;
                    return;
                } catch (IOException unused) {
                    I0();
                    this.f53711z = false;
                }
            }
            Y1();
            this.f53710y = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            if (this.f53710y && !this.f53711z) {
                for (C0733c c0733c : (C0733c[]) this.f53704s.values().toArray(new C0733c[0])) {
                    b b10 = c0733c.b();
                    if (b10 != null) {
                        b10.e();
                    }
                }
                U1();
                kotlinx.coroutines.i.f(this.f53705t, null, 1, null);
                BufferedSink bufferedSink = this.f53708w;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f53708w = null;
                this.f53711z = true;
                return;
            }
            this.f53711z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Flushable
    public synchronized void flush() {
        if (!this.f53710y) {
            return;
        }
        E0();
        U1();
        BufferedSink bufferedSink = this.f53708w;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }
}
