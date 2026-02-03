package y4;

import hs.j1;
import java.io.Closeable;
import java.io.Flushable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import ju.c0;
import ju.h;
import ju.i;
import ju.x;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements Closeable, Flushable {
    public static final a D = new a(null);
    private static final Regex E = new Regex("[a-z0-9_-]{1,120}");
    private boolean A;
    private boolean B;
    private final e C;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f53942d;

    /* renamed from: e  reason: collision with root package name */
    private final long f53943e;

    /* renamed from: i  reason: collision with root package name */
    private final int f53944i;

    /* renamed from: o  reason: collision with root package name */
    private final int f53945o;

    /* renamed from: p  reason: collision with root package name */
    private final c0 f53946p;

    /* renamed from: q  reason: collision with root package name */
    private final c0 f53947q;

    /* renamed from: r  reason: collision with root package name */
    private final c0 f53948r;

    /* renamed from: s  reason: collision with root package name */
    private final LinkedHashMap f53949s;

    /* renamed from: t  reason: collision with root package name */
    private final CoroutineScope f53950t;

    /* renamed from: u  reason: collision with root package name */
    private long f53951u;

    /* renamed from: v  reason: collision with root package name */
    private int f53952v;

    /* renamed from: w  reason: collision with root package name */
    private BufferedSink f53953w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f53954x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f53955y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f53956z;

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
        private final C0760c f53957a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f53958b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean[] f53959c;

        public b(C0760c c0760c) {
            this.f53957a = c0760c;
            this.f53959c = new boolean[c.this.f53945o];
        }

        private final void d(boolean z10) {
            c cVar = c.this;
            synchronized (cVar) {
                try {
                    if (!this.f53958b) {
                        if (Intrinsics.areEqual(this.f53957a.b(), this)) {
                            cVar.G0(this, z10);
                        }
                        this.f53958b = true;
                        Unit unit = Unit.f33074a;
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
            d L0;
            c cVar = c.this;
            synchronized (cVar) {
                b();
                L0 = cVar.L0(this.f53957a.d());
            }
            return L0;
        }

        public final void e() {
            if (Intrinsics.areEqual(this.f53957a.b(), this)) {
                this.f53957a.m(true);
            }
        }

        public final c0 f(int i10) {
            c0 c0Var;
            c cVar = c.this;
            synchronized (cVar) {
                if (!this.f53958b) {
                    this.f53959c[i10] = true;
                    Object obj = this.f53957a.c().get(i10);
                    k5.e.a(cVar.C, (c0) obj);
                    c0Var = (c0) obj;
                } else {
                    throw new IllegalStateException("editor is closed");
                }
            }
            return c0Var;
        }

        public final C0760c g() {
            return this.f53957a;
        }

        public final boolean[] h() {
            return this.f53959c;
        }
    }

    /* renamed from: y4.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class C0760c {

        /* renamed from: a  reason: collision with root package name */
        private final String f53961a;

        /* renamed from: b  reason: collision with root package name */
        private final long[] f53962b;

        /* renamed from: c  reason: collision with root package name */
        private final ArrayList f53963c;

        /* renamed from: d  reason: collision with root package name */
        private final ArrayList f53964d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53965e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f53966f;

        /* renamed from: g  reason: collision with root package name */
        private b f53967g;

        /* renamed from: h  reason: collision with root package name */
        private int f53968h;

        public C0760c(String str) {
            this.f53961a = str;
            this.f53962b = new long[c.this.f53945o];
            this.f53963c = new ArrayList(c.this.f53945o);
            this.f53964d = new ArrayList(c.this.f53945o);
            StringBuilder sb2 = new StringBuilder(str);
            sb2.append('.');
            int length = sb2.length();
            int i10 = c.this.f53945o;
            for (int i11 = 0; i11 < i10; i11++) {
                sb2.append(i11);
                this.f53963c.add(c.this.f53942d.l(sb2.toString()));
                sb2.append(".tmp");
                this.f53964d.add(c.this.f53942d.l(sb2.toString()));
                sb2.setLength(length);
            }
        }

        public final ArrayList a() {
            return this.f53963c;
        }

        public final b b() {
            return this.f53967g;
        }

        public final ArrayList c() {
            return this.f53964d;
        }

        public final String d() {
            return this.f53961a;
        }

        public final long[] e() {
            return this.f53962b;
        }

        public final int f() {
            return this.f53968h;
        }

        public final boolean g() {
            return this.f53965e;
        }

        public final boolean h() {
            return this.f53966f;
        }

        public final void i(b bVar) {
            this.f53967g = bVar;
        }

        public final void j(List list) {
            if (list.size() == c.this.f53945o) {
                try {
                    int size = list.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f53962b[i10] = Long.parseLong((String) list.get(i10));
                    }
                    return;
                } catch (NumberFormatException unused) {
                    throw new IOException("unexpected journal line: " + list);
                }
            }
            throw new IOException("unexpected journal line: " + list);
        }

        public final void k(int i10) {
            this.f53968h = i10;
        }

        public final void l(boolean z10) {
            this.f53965e = z10;
        }

        public final void m(boolean z10) {
            this.f53966f = z10;
        }

        public final d n() {
            if (!this.f53965e || this.f53967g != null || this.f53966f) {
                return null;
            }
            ArrayList arrayList = this.f53963c;
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
            this.f53968h++;
            return new d(this);
        }

        public final void o(BufferedSink bufferedSink) {
            for (long j10 : this.f53962b) {
                bufferedSink.writeByte(32).W0(j10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final C0760c f53970d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53971e;

        public d(C0760c c0760c) {
            this.f53970d = c0760c;
        }

        public final b a() {
            b K0;
            c cVar = c.this;
            synchronized (cVar) {
                close();
                K0 = cVar.K0(this.f53970d.d());
            }
            return K0;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f53971e) {
                this.f53971e = true;
                c cVar = c.this;
                synchronized (cVar) {
                    try {
                        C0760c c0760c = this.f53970d;
                        c0760c.k(c0760c.f() - 1);
                        if (this.f53970d.f() == 0 && this.f53970d.h()) {
                            cVar.B1(this.f53970d);
                        }
                        Unit unit = Unit.f33074a;
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }
        }

        public final c0 h(int i10) {
            if (!this.f53971e) {
                return (c0) this.f53970d.a().get(i10);
            }
            throw new IllegalStateException("snapshot is closed");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends i {
        e(h hVar) {
            super(hVar);
        }

        @Override // ju.i, ju.h
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
        int f53973d;

        f(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f53973d == 0) {
                kotlin.c.b(obj);
                c cVar = c.this;
                synchronized (cVar) {
                    if (cVar.f53955y && !cVar.f53956z) {
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
                            cVar.f53953w = x.c(x.b());
                        }
                        return Unit.f33074a;
                    }
                    return Unit.f33074a;
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public c(h hVar, c0 c0Var, CoroutineDispatcher coroutineDispatcher, long j10, int i10, int i11) {
        this.f53942d = c0Var;
        this.f53943e = j10;
        this.f53944i = i10;
        this.f53945o = i11;
        if (j10 > 0) {
            if (i11 > 0) {
                this.f53946p = c0Var.l("journal");
                this.f53947q = c0Var.l("journal.tmp");
                this.f53948r = c0Var.l("journal.bkp");
                this.f53949s = new LinkedHashMap(0, 0.75f, true);
                this.f53950t = kotlinx.coroutines.i.a(j1.b(null, 1, null).Z0(coroutineDispatcher.Y1(1)));
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
                    this.f53949s.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            }
            LinkedHashMap linkedHashMap = this.f53949s;
            Object obj = linkedHashMap.get(substring);
            if (obj == null) {
                obj = new C0760c(substring);
                linkedHashMap.put(substring, obj);
            }
            C0760c c0760c = (C0760c) obj;
            if (h03 != -1 && h02 == 5 && StringsKt.P(str, "CLEAN", false, 2, null)) {
                String substring2 = str.substring(h03 + 1);
                Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                List L0 = StringsKt.L0(substring2, new char[]{' '}, false, 0, 6, null);
                c0760c.l(true);
                c0760c.i(null);
                c0760c.j(L0);
                return;
            } else if (h03 == -1 && h02 == 5 && StringsKt.P(str, "DIRTY", false, 2, null)) {
                c0760c.i(new b(c0760c));
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
    public final boolean B1(C0760c c0760c) {
        BufferedSink bufferedSink;
        if (c0760c.f() > 0 && (bufferedSink = this.f53953w) != null) {
            bufferedSink.o0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.o0(c0760c.d());
            bufferedSink.writeByte(10);
            bufferedSink.flush();
        }
        if (c0760c.f() <= 0 && c0760c.b() == null) {
            int i10 = this.f53945o;
            for (int i11 = 0; i11 < i10; i11++) {
                this.C.h((c0) c0760c.a().get(i11));
                this.f53951u -= c0760c.e()[i11];
                c0760c.e()[i11] = 0;
            }
            this.f53952v++;
            BufferedSink bufferedSink2 = this.f53953w;
            if (bufferedSink2 != null) {
                bufferedSink2.o0("REMOVE");
                bufferedSink2.writeByte(32);
                bufferedSink2.o0(c0760c.d());
                bufferedSink2.writeByte(10);
            }
            this.f53949s.remove(c0760c.d());
            if (V0()) {
                Y0();
            }
            return true;
        }
        c0760c.m(true);
        return true;
    }

    private final boolean E1() {
        for (C0760c c0760c : this.f53949s.values()) {
            if (!c0760c.h()) {
                B1(c0760c);
                return true;
            }
        }
        return false;
    }

    private final void F0() {
        if (!this.f53956z) {
            return;
        }
        throw new IllegalStateException("cache is closed");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void G0(b bVar, boolean z10) {
        long j10;
        C0760c g10 = bVar.g();
        if (Intrinsics.areEqual(g10.b(), bVar)) {
            int i10 = 0;
            if (z10 && !g10.h()) {
                int i11 = this.f53945o;
                for (int i12 = 0; i12 < i11; i12++) {
                    if (bVar.h()[i12] && !this.C.j((c0) g10.c().get(i12))) {
                        bVar.a();
                        return;
                    }
                }
                int i13 = this.f53945o;
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
                    this.f53951u = (this.f53951u - j11) + j10;
                    i10++;
                }
            } else {
                int i14 = this.f53945o;
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
            this.f53952v++;
            BufferedSink bufferedSink = this.f53953w;
            Intrinsics.checkNotNull(bufferedSink);
            if (!z10 && !g10.g()) {
                this.f53949s.remove(g10.d());
                bufferedSink.o0("REMOVE");
                bufferedSink.writeByte(32);
                bufferedSink.o0(g10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f53951u <= this.f53943e || V0()) {
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
            if (this.f53951u <= this.f53943e) {
            }
            Y0();
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    private final void J0() {
        close();
        k5.e.b(this.C, this.f53942d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void U1() {
        while (this.f53951u > this.f53943e) {
            if (!E1()) {
                return;
            }
        }
        this.A = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean V0() {
        if (this.f53952v >= 2000) {
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
        hs.i.d(this.f53950t, null, null, new f(null), 3, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void Y1() {
        try {
            BufferedSink bufferedSink = this.f53953w;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.C.p(this.f53947q, false));
            c10.o0("libcore.io.DiskLruCache").writeByte(10);
            c10.o0("1").writeByte(10);
            c10.W0(this.f53944i).writeByte(10);
            c10.W0(this.f53945o).writeByte(10);
            c10.writeByte(10);
            for (C0760c c0760c : this.f53949s.values()) {
                if (c0760c.b() != null) {
                    c10.o0("DIRTY");
                    c10.writeByte(32);
                    c10.o0(c0760c.d());
                    c10.writeByte(10);
                } else {
                    c10.o0("CLEAN");
                    c10.writeByte(32);
                    c10.o0(c0760c.d());
                    c0760c.o(c10);
                    c10.writeByte(10);
                }
            }
            Unit unit = Unit.f33074a;
            if (c10 != null) {
                try {
                    c10.close();
                } catch (Throwable th2) {
                    th = th2;
                }
            }
            th = null;
            if (th == null) {
                if (this.C.j(this.f53946p)) {
                    this.C.c(this.f53946p, this.f53948r);
                    this.C.c(this.f53947q, this.f53946p);
                    this.C.h(this.f53948r);
                } else {
                    this.C.c(this.f53947q, this.f53946p);
                }
                this.f53953w = Z0();
                this.f53952v = 0;
                this.f53954x = false;
                this.B = false;
            } else {
                throw th;
            }
        } catch (Throwable th3) {
            throw th3;
        }
    }

    private final BufferedSink Z0() {
        return x.c(new y4.d(this.C.a(this.f53946p), new Function1() { // from class: y4.b
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
        cVar.f53954x = true;
        return Unit.f33074a;
    }

    private final void x1() {
        Iterator it = this.f53949s.values().iterator();
        long j10 = 0;
        while (it.hasNext()) {
            C0760c c0760c = (C0760c) it.next();
            int i10 = 0;
            if (c0760c.b() == null) {
                int i11 = this.f53945o;
                while (i10 < i11) {
                    j10 += c0760c.e()[i10];
                    i10++;
                }
            } else {
                c0760c.i(null);
                int i12 = this.f53945o;
                while (i10 < i12) {
                    this.C.h((c0) c0760c.a().get(i10));
                    this.C.h((c0) c0760c.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
        this.f53951u = j10;
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
            ju.c0 r2 = r10.f53946p
            okio.Source r1 = r1.q(r2)
            okio.BufferedSource r1 = ju.x.d(r1)
            java.lang.String r2 = r1.I0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r3 = r1.I0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r4 = r1.I0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r5 = r1.I0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r6 = r1.I0()     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = "libcore.io.DiskLruCache"
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r2)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            java.lang.String r7 = "1"
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r3)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f53944i     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r4)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r10.f53945o     // Catch: java.lang.Throwable -> L5b
            java.lang.String r7 = java.lang.String.valueOf(r7)     // Catch: java.lang.Throwable -> L5b
            boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r5)     // Catch: java.lang.Throwable -> L5b
            if (r7 == 0) goto L82
            int r7 = r6.length()     // Catch: java.lang.Throwable -> L5b
            if (r7 > 0) goto L82
            r0 = 0
        L51:
            java.lang.String r2 = r1.I0()     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            r10.A1(r2)     // Catch: java.lang.Throwable -> L5b java.io.EOFException -> L5d
            int r0 = r0 + 1
            goto L51
        L5b:
            r0 = move-exception
            goto Lb6
        L5d:
            java.util.LinkedHashMap r2 = r10.f53949s     // Catch: java.lang.Throwable -> L5b
            int r2 = r2.size()     // Catch: java.lang.Throwable -> L5b
            int r0 = r0 - r2
            r10.f53952v = r0     // Catch: java.lang.Throwable -> L5b
            boolean r0 = r1.o1()     // Catch: java.lang.Throwable -> L5b
            if (r0 != 0) goto L70
            r10.Y1()     // Catch: java.lang.Throwable -> L5b
            goto L76
        L70:
            okio.BufferedSink r0 = r10.Z0()     // Catch: java.lang.Throwable -> L5b
            r10.f53953w = r0     // Catch: java.lang.Throwable -> L5b
        L76:
            kotlin.Unit r0 = kotlin.Unit.f33074a     // Catch: java.lang.Throwable -> L5b
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
            jr.e.a(r0, r1)
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
        F0();
        W1(str);
        O0();
        C0760c c0760c = (C0760c) this.f53949s.get(str);
        if (c0760c != null) {
            bVar = c0760c.b();
        } else {
            bVar = null;
        }
        if (bVar != null) {
            return null;
        }
        if (c0760c != null && c0760c.f() != 0) {
            return null;
        }
        if (!this.A && !this.B) {
            BufferedSink bufferedSink = this.f53953w;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.o0("DIRTY");
            bufferedSink.writeByte(32);
            bufferedSink.o0(str);
            bufferedSink.writeByte(10);
            bufferedSink.flush();
            if (this.f53954x) {
                return null;
            }
            if (c0760c == null) {
                c0760c = new C0760c(str);
                this.f53949s.put(str, c0760c);
            }
            b bVar2 = new b(c0760c);
            c0760c.i(bVar2);
            return bVar2;
        }
        Y0();
        return null;
    }

    public final synchronized d L0(String str) {
        d n10;
        F0();
        W1(str);
        O0();
        C0760c c0760c = (C0760c) this.f53949s.get(str);
        if (c0760c != null && (n10 = c0760c.n()) != null) {
            this.f53952v++;
            BufferedSink bufferedSink = this.f53953w;
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

    public final synchronized void O0() {
        try {
            if (this.f53955y) {
                return;
            }
            this.C.h(this.f53947q);
            if (this.C.j(this.f53948r)) {
                if (this.C.j(this.f53946p)) {
                    this.C.h(this.f53948r);
                } else {
                    this.C.c(this.f53948r, this.f53946p);
                }
            }
            if (this.C.j(this.f53946p)) {
                try {
                    y1();
                    x1();
                    this.f53955y = true;
                    return;
                } catch (IOException unused) {
                    J0();
                    this.f53956z = false;
                }
            }
            Y1();
            this.f53955y = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            if (this.f53955y && !this.f53956z) {
                for (C0760c c0760c : (C0760c[]) this.f53949s.values().toArray(new C0760c[0])) {
                    b b10 = c0760c.b();
                    if (b10 != null) {
                        b10.e();
                    }
                }
                U1();
                kotlinx.coroutines.i.f(this.f53950t, null, 1, null);
                BufferedSink bufferedSink = this.f53953w;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f53953w = null;
                this.f53956z = true;
                return;
            }
            this.f53956z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Flushable
    public synchronized void flush() {
        if (!this.f53955y) {
            return;
        }
        F0();
        U1();
        BufferedSink bufferedSink = this.f53953w;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }
}
