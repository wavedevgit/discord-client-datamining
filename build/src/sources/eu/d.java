package eu;

import java.io.Closeable;
import java.io.EOFException;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.Flushable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.Sink;
import okio.Source;
import qr.h;
import qu.k;
import qu.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements Closeable, Flushable {
    public static final a G = new a(null);
    public static final String H = "journal";
    public static final String I = "journal.tmp";
    public static final String J = "journal.bkp";
    public static final String K = "libcore.io.DiskLruCache";
    public static final String L = "1";
    public static final long M = -1;
    public static final Regex N = new Regex("[a-z0-9_-]{1,120}");
    public static final String O = "CLEAN";
    public static final String P = "DIRTY";
    public static final String Q = "REMOVE";
    public static final String R = "READ";
    private boolean A;
    private boolean B;
    private boolean C;
    private long D;
    private final fu.d E;
    private final e F;

    /* renamed from: d */
    private final ku.a f22154d;

    /* renamed from: e */
    private final File f22155e;

    /* renamed from: i */
    private final int f22156i;

    /* renamed from: o */
    private final int f22157o;

    /* renamed from: p */
    private long f22158p;

    /* renamed from: q */
    private final File f22159q;

    /* renamed from: r */
    private final File f22160r;

    /* renamed from: s */
    private final File f22161s;

    /* renamed from: t */
    private long f22162t;

    /* renamed from: u */
    private BufferedSink f22163u;

    /* renamed from: v */
    private final LinkedHashMap f22164v;

    /* renamed from: w */
    private int f22165w;

    /* renamed from: x */
    private boolean f22166x;

    /* renamed from: y */
    private boolean f22167y;

    /* renamed from: z */
    private boolean f22168z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class b {

        /* renamed from: a */
        private final c f22169a;

        /* renamed from: b */
        private final boolean[] f22170b;

        /* renamed from: c */
        private boolean f22171c;

        /* renamed from: d */
        final /* synthetic */ d f22172d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d */
            final /* synthetic */ d f22173d;

            /* renamed from: e */
            final /* synthetic */ b f22174e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, b bVar) {
                super(1);
                this.f22173d = dVar;
                this.f22174e = bVar;
            }

            public final void a(IOException it) {
                Intrinsics.checkNotNullParameter(it, "it");
                d dVar = this.f22173d;
                b bVar = this.f22174e;
                synchronized (dVar) {
                    bVar.c();
                    Unit unit = Unit.f32008a;
                }
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((IOException) obj);
                return Unit.f32008a;
            }
        }

        public b(d dVar, c entry) {
            boolean[] zArr;
            Intrinsics.checkNotNullParameter(entry, "entry");
            this.f22172d = dVar;
            this.f22169a = entry;
            if (entry.g()) {
                zArr = null;
            } else {
                zArr = new boolean[dVar.J0()];
            }
            this.f22170b = zArr;
        }

        public final void a() {
            d dVar = this.f22172d;
            synchronized (dVar) {
                try {
                    if (!this.f22171c) {
                        if (Intrinsics.areEqual(this.f22169a.b(), this)) {
                            dVar.C(this, false);
                        }
                        this.f22171c = true;
                        Unit unit = Unit.f32008a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void b() {
            d dVar = this.f22172d;
            synchronized (dVar) {
                try {
                    if (!this.f22171c) {
                        if (Intrinsics.areEqual(this.f22169a.b(), this)) {
                            dVar.C(this, true);
                        }
                        this.f22171c = true;
                        Unit unit = Unit.f32008a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void c() {
            if (Intrinsics.areEqual(this.f22169a.b(), this)) {
                if (this.f22172d.f22167y) {
                    this.f22172d.C(this, false);
                } else {
                    this.f22169a.q(true);
                }
            }
        }

        public final c d() {
            return this.f22169a;
        }

        public final boolean[] e() {
            return this.f22170b;
        }

        public final Sink f(int i10) {
            d dVar = this.f22172d;
            synchronized (dVar) {
                if (!this.f22171c) {
                    if (!Intrinsics.areEqual(this.f22169a.b(), this)) {
                        return x.b();
                    }
                    if (!this.f22169a.g()) {
                        boolean[] zArr = this.f22170b;
                        Intrinsics.checkNotNull(zArr);
                        zArr[i10] = true;
                    }
                    try {
                        return new eu.e(dVar.I0().f((File) this.f22169a.c().get(i10)), new a(dVar, this));
                    } catch (FileNotFoundException unused) {
                        return x.b();
                    }
                }
                throw new IllegalStateException("Check failed.");
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c {

        /* renamed from: a */
        private final String f22175a;

        /* renamed from: b */
        private final long[] f22176b;

        /* renamed from: c */
        private final List f22177c;

        /* renamed from: d */
        private final List f22178d;

        /* renamed from: e */
        private boolean f22179e;

        /* renamed from: f */
        private boolean f22180f;

        /* renamed from: g */
        private b f22181g;

        /* renamed from: h */
        private int f22182h;

        /* renamed from: i */
        private long f22183i;

        /* renamed from: j */
        final /* synthetic */ d f22184j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends k {

            /* renamed from: d */
            private boolean f22185d;

            /* renamed from: e */
            final /* synthetic */ d f22186e;

            /* renamed from: i */
            final /* synthetic */ c f22187i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Source source, d dVar, c cVar) {
                super(source);
                this.f22186e = dVar;
                this.f22187i = cVar;
            }

            @Override // qu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                super.close();
                if (!this.f22185d) {
                    this.f22185d = true;
                    d dVar = this.f22186e;
                    c cVar = this.f22187i;
                    synchronized (dVar) {
                        try {
                            cVar.n(cVar.f() - 1);
                            if (cVar.f() == 0 && cVar.i()) {
                                dVar.z1(cVar);
                            }
                            Unit unit = Unit.f32008a;
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                }
            }
        }

        public c(d dVar, String key) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.f22184j = dVar;
            this.f22175a = key;
            this.f22176b = new long[dVar.J0()];
            this.f22177c = new ArrayList();
            this.f22178d = new ArrayList();
            StringBuilder sb2 = new StringBuilder(key);
            sb2.append('.');
            int length = sb2.length();
            int J0 = dVar.J0();
            for (int i10 = 0; i10 < J0; i10++) {
                sb2.append(i10);
                this.f22177c.add(new File(this.f22184j.F0(), sb2.toString()));
                sb2.append(".tmp");
                this.f22178d.add(new File(this.f22184j.F0(), sb2.toString()));
                sb2.setLength(length);
            }
        }

        private final Void j(List list) {
            throw new IOException("unexpected journal line: " + list);
        }

        private final Source k(int i10) {
            Source e10 = this.f22184j.I0().e((File) this.f22177c.get(i10));
            if (this.f22184j.f22167y) {
                return e10;
            }
            this.f22182h++;
            return new a(e10, this.f22184j, this);
        }

        public final List a() {
            return this.f22177c;
        }

        public final b b() {
            return this.f22181g;
        }

        public final List c() {
            return this.f22178d;
        }

        public final String d() {
            return this.f22175a;
        }

        public final long[] e() {
            return this.f22176b;
        }

        public final int f() {
            return this.f22182h;
        }

        public final boolean g() {
            return this.f22179e;
        }

        public final long h() {
            return this.f22183i;
        }

        public final boolean i() {
            return this.f22180f;
        }

        public final void l(b bVar) {
            this.f22181g = bVar;
        }

        public final void m(List strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            if (strings.size() == this.f22184j.J0()) {
                try {
                    int size = strings.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f22176b[i10] = Long.parseLong((String) strings.get(i10));
                    }
                    return;
                } catch (NumberFormatException unused) {
                    j(strings);
                    throw new h();
                }
            }
            j(strings);
            throw new h();
        }

        public final void n(int i10) {
            this.f22182h = i10;
        }

        public final void o(boolean z10) {
            this.f22179e = z10;
        }

        public final void p(long j10) {
            this.f22183i = j10;
        }

        public final void q(boolean z10) {
            this.f22180f = z10;
        }

        public final C0315d r() {
            d dVar = this.f22184j;
            if (cu.e.f20042h && !Thread.holdsLock(dVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
            } else if (!this.f22179e) {
                return null;
            } else {
                if (!this.f22184j.f22167y && (this.f22181g != null || this.f22180f)) {
                    return null;
                }
                ArrayList<Source> arrayList = new ArrayList();
                long[] jArr = (long[]) this.f22176b.clone();
                try {
                    int J0 = this.f22184j.J0();
                    for (int i10 = 0; i10 < J0; i10++) {
                        arrayList.add(k(i10));
                    }
                    return new C0315d(this.f22184j, this.f22175a, this.f22183i, arrayList, jArr);
                } catch (FileNotFoundException unused) {
                    for (Source source : arrayList) {
                        cu.e.m(source);
                    }
                    try {
                        this.f22184j.z1(this);
                    } catch (IOException unused2) {
                    }
                    return null;
                }
            }
        }

        public final void s(BufferedSink writer) {
            Intrinsics.checkNotNullParameter(writer, "writer");
            for (long j10 : this.f22176b) {
                writer.writeByte(32).W0(j10);
            }
        }
    }

    /* renamed from: eu.d$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0315d implements Closeable {

        /* renamed from: d */
        private final String f22188d;

        /* renamed from: e */
        private final long f22189e;

        /* renamed from: i */
        private final List f22190i;

        /* renamed from: o */
        private final long[] f22191o;

        /* renamed from: p */
        final /* synthetic */ d f22192p;

        public C0315d(d dVar, String key, long j10, List sources, long[] lengths) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sources, "sources");
            Intrinsics.checkNotNullParameter(lengths, "lengths");
            this.f22192p = dVar;
            this.f22188d = key;
            this.f22189e = j10;
            this.f22190i = sources;
            this.f22191o = lengths;
        }

        public final b a() {
            return this.f22192p.J(this.f22188d, this.f22189e);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (Source source : this.f22190i) {
                cu.e.m(source);
            }
        }

        public final Source g(int i10) {
            return (Source) this.f22190i.get(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends fu.a {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str) {
            super(str, false, 2, null);
            d.this = r3;
        }

        @Override // fu.a
        public long f() {
            d dVar = d.this;
            synchronized (dVar) {
                if (!dVar.f22168z || dVar.E0()) {
                    return -1L;
                }
                try {
                    dVar.D1();
                } catch (IOException unused) {
                    dVar.B = true;
                }
                try {
                    if (dVar.L0()) {
                        dVar.w1();
                        dVar.f22165w = 0;
                    }
                } catch (IOException unused2) {
                    dVar.C = true;
                    dVar.f22163u = x.c(x.b());
                }
                return -1L;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f extends Lambda implements Function1 {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f() {
            super(1);
            d.this = r1;
        }

        public final void a(IOException it) {
            Intrinsics.checkNotNullParameter(it, "it");
            d dVar = d.this;
            if (!cu.e.f20042h || Thread.holdsLock(dVar)) {
                d.this.f22166x = true;
                return;
            }
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((IOException) obj);
            return Unit.f32008a;
        }
    }

    public d(ku.a fileSystem, File directory, int i10, int i11, long j10, fu.e taskRunner) {
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        this.f22154d = fileSystem;
        this.f22155e = directory;
        this.f22156i = i10;
        this.f22157o = i11;
        this.f22158p = j10;
        this.f22164v = new LinkedHashMap(0, 0.75f, true);
        this.E = taskRunner.i();
        this.F = new e(cu.e.f20043i + " Cache");
        if (j10 > 0) {
            if (i11 > 0) {
                this.f22159q = new File(directory, H);
                this.f22160r = new File(directory, I);
                this.f22161s = new File(directory, J);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    private final boolean A1() {
        for (c toEvict : this.f22164v.values()) {
            if (!toEvict.i()) {
                Intrinsics.checkNotNullExpressionValue(toEvict, "toEvict");
                z1(toEvict);
                return true;
            }
        }
        return false;
    }

    public final boolean L0() {
        int i10 = this.f22165w;
        if (i10 >= 2000 && i10 >= this.f22164v.size()) {
            return true;
        }
        return false;
    }

    private final BufferedSink O0() {
        return x.c(new eu.e(this.f22154d.c(this.f22159q), new f()));
    }

    public static /* synthetic */ b P(d dVar, String str, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = M;
        }
        return dVar.J(str, j10);
    }

    private final void T1(String str) {
        if (N.i(str)) {
            return;
        }
        throw new IllegalArgumentException(("keys must match regex [a-z0-9_-]{1,120}: \"" + str + '\"').toString());
    }

    private final void V0() {
        this.f22154d.h(this.f22160r);
        Iterator it = this.f22164v.values().iterator();
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "i.next()");
            c cVar = (c) next;
            int i10 = 0;
            if (cVar.b() == null) {
                int i11 = this.f22157o;
                while (i10 < i11) {
                    this.f22162t += cVar.e()[i10];
                    i10++;
                }
            } else {
                cVar.l(null);
                int i12 = this.f22157o;
                while (i10 < i12) {
                    this.f22154d.h((File) cVar.a().get(i10));
                    this.f22154d.h((File) cVar.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
    }

    private final void Y0() {
        BufferedSource d10 = x.d(this.f22154d.e(this.f22159q));
        try {
            String H0 = d10.H0();
            String H02 = d10.H0();
            String H03 = d10.H0();
            String H04 = d10.H0();
            String H05 = d10.H0();
            if (Intrinsics.areEqual(K, H0) && Intrinsics.areEqual(L, H02) && Intrinsics.areEqual(String.valueOf(this.f22156i), H03) && Intrinsics.areEqual(String.valueOf(this.f22157o), H04) && H05.length() <= 0) {
                int i10 = 0;
                while (true) {
                    try {
                        d1(d10.H0());
                        i10++;
                    } catch (EOFException unused) {
                        this.f22165w = i10 - this.f22164v.size();
                        if (!d10.n1()) {
                            w1();
                        } else {
                            this.f22163u = O0();
                        }
                        Unit unit = Unit.f32008a;
                        bs.c.a(d10, null);
                        return;
                    }
                }
            } else {
                throw new IOException("unexpected journal header: [" + H0 + ", " + H02 + ", " + H04 + ", " + H05 + ']');
            }
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                bs.c.a(d10, th2);
                throw th3;
            }
        }
    }

    private final void d1(String str) {
        String substring;
        int h02 = StringsKt.h0(str, ' ', 0, false, 6, null);
        if (h02 != -1) {
            int i10 = h02 + 1;
            int h03 = StringsKt.h0(str, ' ', i10, false, 4, null);
            if (h03 == -1) {
                substring = str.substring(i10);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String).substring(startIndex)");
                String str2 = Q;
                if (h02 == str2.length() && StringsKt.P(str, str2, false, 2, null)) {
                    this.f22164v.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            }
            c cVar = (c) this.f22164v.get(substring);
            if (cVar == null) {
                cVar = new c(this, substring);
                this.f22164v.put(substring, cVar);
            }
            if (h03 != -1) {
                String str3 = O;
                if (h02 == str3.length() && StringsKt.P(str, str3, false, 2, null)) {
                    String substring2 = str.substring(h03 + 1);
                    Intrinsics.checkNotNullExpressionValue(substring2, "this as java.lang.String).substring(startIndex)");
                    List L0 = StringsKt.L0(substring2, new char[]{' '}, false, 0, 6, null);
                    cVar.o(true);
                    cVar.l(null);
                    cVar.m(L0);
                    return;
                }
            }
            if (h03 == -1) {
                String str4 = P;
                if (h02 == str4.length() && StringsKt.P(str, str4, false, 2, null)) {
                    cVar.l(new b(this, cVar));
                    return;
                }
            }
            if (h03 == -1) {
                String str5 = R;
                if (h02 == str5.length() && StringsKt.P(str, str5, false, 2, null)) {
                    return;
                }
            }
            throw new IOException("unexpected journal line: " + str);
        }
        throw new IOException("unexpected journal line: " + str);
    }

    private final synchronized void z() {
        if (this.A) {
            throw new IllegalStateException("cache is closed");
        }
    }

    public final synchronized void C(b editor, boolean z10) {
        Intrinsics.checkNotNullParameter(editor, "editor");
        c d10 = editor.d();
        if (Intrinsics.areEqual(d10.b(), editor)) {
            if (z10 && !d10.g()) {
                int i10 = this.f22157o;
                for (int i11 = 0; i11 < i10; i11++) {
                    boolean[] e10 = editor.e();
                    Intrinsics.checkNotNull(e10);
                    if (e10[i11]) {
                        if (!this.f22154d.b((File) d10.c().get(i11))) {
                            editor.a();
                            return;
                        }
                    } else {
                        editor.a();
                        throw new IllegalStateException("Newly created entry didn't create value for index " + i11);
                    }
                }
            }
            int i12 = this.f22157o;
            for (int i13 = 0; i13 < i12; i13++) {
                File file = (File) d10.c().get(i13);
                if (z10 && !d10.i()) {
                    if (this.f22154d.b(file)) {
                        File file2 = (File) d10.a().get(i13);
                        this.f22154d.g(file, file2);
                        long j10 = d10.e()[i13];
                        long d11 = this.f22154d.d(file2);
                        d10.e()[i13] = d11;
                        this.f22162t = (this.f22162t - j10) + d11;
                    }
                } else {
                    this.f22154d.h(file);
                }
            }
            d10.l(null);
            if (d10.i()) {
                z1(d10);
                return;
            }
            this.f22165w++;
            BufferedSink bufferedSink = this.f22163u;
            Intrinsics.checkNotNull(bufferedSink);
            if (!d10.g() && !z10) {
                this.f22164v.remove(d10.d());
                bufferedSink.q0(Q).writeByte(32);
                bufferedSink.q0(d10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f22162t <= this.f22158p || L0()) {
                    fu.d.j(this.E, this.F, 0L, 2, null);
                }
                return;
            }
            d10.o(true);
            bufferedSink.q0(O).writeByte(32);
            bufferedSink.q0(d10.d());
            d10.s(bufferedSink);
            bufferedSink.writeByte(10);
            if (z10) {
                long j11 = this.D;
                this.D = 1 + j11;
                d10.p(j11);
            }
            bufferedSink.flush();
            if (this.f22162t <= this.f22158p) {
            }
            fu.d.j(this.E, this.F, 0L, 2, null);
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void D1() {
        while (this.f22162t > this.f22158p) {
            if (!A1()) {
                return;
            }
        }
        this.B = false;
    }

    public final boolean E0() {
        return this.A;
    }

    public final File F0() {
        return this.f22155e;
    }

    public final void I() {
        close();
        this.f22154d.a(this.f22155e);
    }

    public final ku.a I0() {
        return this.f22154d;
    }

    public final synchronized b J(String key, long j10) {
        b bVar;
        Intrinsics.checkNotNullParameter(key, "key");
        K0();
        z();
        T1(key);
        c cVar = (c) this.f22164v.get(key);
        if (j10 != M && (cVar == null || cVar.h() != j10)) {
            return null;
        }
        if (cVar != null) {
            bVar = cVar.b();
        } else {
            bVar = null;
        }
        if (bVar != null) {
            return null;
        }
        if (cVar != null && cVar.f() != 0) {
            return null;
        }
        if (!this.B && !this.C) {
            BufferedSink bufferedSink = this.f22163u;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0(P).writeByte(32).q0(key).writeByte(10);
            bufferedSink.flush();
            if (this.f22166x) {
                return null;
            }
            if (cVar == null) {
                cVar = new c(this, key);
                this.f22164v.put(key, cVar);
            }
            b bVar2 = new b(this, cVar);
            cVar.l(bVar2);
            return bVar2;
        }
        fu.d.j(this.E, this.F, 0L, 2, null);
        return null;
    }

    public final int J0() {
        return this.f22157o;
    }

    public final synchronized void K0() {
        try {
            if (cu.e.f20042h && !Thread.holdsLock(this)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
            }
            if (this.f22168z) {
                return;
            }
            if (this.f22154d.b(this.f22161s)) {
                if (this.f22154d.b(this.f22159q)) {
                    this.f22154d.h(this.f22161s);
                } else {
                    this.f22154d.g(this.f22161s, this.f22159q);
                }
            }
            this.f22167y = cu.e.F(this.f22154d, this.f22161s);
            if (this.f22154d.b(this.f22159q)) {
                try {
                    Y0();
                    V0();
                    this.f22168z = true;
                    return;
                } catch (IOException e10) {
                    lu.h g10 = lu.h.f36777a.g();
                    g10.k("DiskLruCache " + this.f22155e + " is corrupt: " + e10.getMessage() + ", removing", 5, e10);
                    I();
                    this.A = false;
                }
            }
            w1();
            this.f22168z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized C0315d Y(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        K0();
        z();
        T1(key);
        c cVar = (c) this.f22164v.get(key);
        if (cVar == null) {
            return null;
        }
        C0315d r10 = cVar.r();
        if (r10 == null) {
            return null;
        }
        this.f22165w++;
        BufferedSink bufferedSink = this.f22163u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.q0(R).writeByte(32).q0(key).writeByte(10);
        if (L0()) {
            fu.d.j(this.E, this.F, 0L, 2, null);
        }
        return r10;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        c[] cVarArr;
        b b10;
        try {
            if (this.f22168z && !this.A) {
                Collection values = this.f22164v.values();
                Intrinsics.checkNotNullExpressionValue(values, "lruEntries.values");
                for (c cVar : (c[]) values.toArray(new c[0])) {
                    if (cVar.b() != null && (b10 = cVar.b()) != null) {
                        b10.c();
                    }
                }
                D1();
                BufferedSink bufferedSink = this.f22163u;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f22163u = null;
                this.A = true;
                return;
            }
            this.A = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Flushable
    public synchronized void flush() {
        if (!this.f22168z) {
            return;
        }
        z();
        D1();
        BufferedSink bufferedSink = this.f22163u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }

    public final synchronized void w1() {
        try {
            BufferedSink bufferedSink = this.f22163u;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.f22154d.f(this.f22160r));
            c10.q0(K).writeByte(10);
            c10.q0(L).writeByte(10);
            c10.W0(this.f22156i).writeByte(10);
            c10.W0(this.f22157o).writeByte(10);
            c10.writeByte(10);
            for (c cVar : this.f22164v.values()) {
                if (cVar.b() != null) {
                    c10.q0(P).writeByte(32);
                    c10.q0(cVar.d());
                    c10.writeByte(10);
                } else {
                    c10.q0(O).writeByte(32);
                    c10.q0(cVar.d());
                    cVar.s(c10);
                    c10.writeByte(10);
                }
            }
            Unit unit = Unit.f32008a;
            bs.c.a(c10, null);
            if (this.f22154d.b(this.f22159q)) {
                this.f22154d.g(this.f22159q, this.f22161s);
            }
            this.f22154d.g(this.f22160r, this.f22159q);
            this.f22154d.h(this.f22161s);
            this.f22163u = O0();
            this.f22166x = false;
            this.C = false;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized boolean x1(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        K0();
        z();
        T1(key);
        c cVar = (c) this.f22164v.get(key);
        if (cVar == null) {
            return false;
        }
        boolean z12 = z1(cVar);
        if (z12 && this.f22162t <= this.f22158p) {
            this.B = false;
        }
        return z12;
    }

    public final boolean z1(c entry) {
        BufferedSink bufferedSink;
        Intrinsics.checkNotNullParameter(entry, "entry");
        if (!this.f22167y) {
            if (entry.f() > 0 && (bufferedSink = this.f22163u) != null) {
                bufferedSink.q0(P);
                bufferedSink.writeByte(32);
                bufferedSink.q0(entry.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
            }
            if (entry.f() > 0 || entry.b() != null) {
                entry.q(true);
                return true;
            }
        }
        b b10 = entry.b();
        if (b10 != null) {
            b10.c();
        }
        int i10 = this.f22157o;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f22154d.h((File) entry.a().get(i11));
            this.f22162t -= entry.e()[i11];
            entry.e()[i11] = 0;
        }
        this.f22165w++;
        BufferedSink bufferedSink2 = this.f22163u;
        if (bufferedSink2 != null) {
            bufferedSink2.q0(Q);
            bufferedSink2.writeByte(32);
            bufferedSink2.q0(entry.d());
            bufferedSink2.writeByte(10);
        }
        this.f22164v.remove(entry.d());
        if (L0()) {
            fu.d.j(this.E, this.F, 0L, 2, null);
        }
        return true;
    }
}
