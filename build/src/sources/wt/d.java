package wt;

import ir.h;
import iu.k;
import iu.x;
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
    private final xt.d E;
    private final e F;

    /* renamed from: d */
    private final cu.a f52790d;

    /* renamed from: e */
    private final File f52791e;

    /* renamed from: i */
    private final int f52792i;

    /* renamed from: o */
    private final int f52793o;

    /* renamed from: p */
    private long f52794p;

    /* renamed from: q */
    private final File f52795q;

    /* renamed from: r */
    private final File f52796r;

    /* renamed from: s */
    private final File f52797s;

    /* renamed from: t */
    private long f52798t;

    /* renamed from: u */
    private BufferedSink f52799u;

    /* renamed from: v */
    private final LinkedHashMap f52800v;

    /* renamed from: w */
    private int f52801w;

    /* renamed from: x */
    private boolean f52802x;

    /* renamed from: y */
    private boolean f52803y;

    /* renamed from: z */
    private boolean f52804z;

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
        private final c f52805a;

        /* renamed from: b */
        private final boolean[] f52806b;

        /* renamed from: c */
        private boolean f52807c;

        /* renamed from: d */
        final /* synthetic */ d f52808d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d */
            final /* synthetic */ d f52809d;

            /* renamed from: e */
            final /* synthetic */ b f52810e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, b bVar) {
                super(1);
                this.f52809d = dVar;
                this.f52810e = bVar;
            }

            public final void a(IOException it) {
                Intrinsics.checkNotNullParameter(it, "it");
                d dVar = this.f52809d;
                b bVar = this.f52810e;
                synchronized (dVar) {
                    bVar.c();
                    Unit unit = Unit.f33282a;
                }
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((IOException) obj);
                return Unit.f33282a;
            }
        }

        public b(d dVar, c entry) {
            boolean[] zArr;
            Intrinsics.checkNotNullParameter(entry, "entry");
            this.f52808d = dVar;
            this.f52805a = entry;
            if (entry.g()) {
                zArr = null;
            } else {
                zArr = new boolean[dVar.J0()];
            }
            this.f52806b = zArr;
        }

        public final void a() {
            d dVar = this.f52808d;
            synchronized (dVar) {
                try {
                    if (!this.f52807c) {
                        if (Intrinsics.areEqual(this.f52805a.b(), this)) {
                            dVar.N(this, false);
                        }
                        this.f52807c = true;
                        Unit unit = Unit.f33282a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void b() {
            d dVar = this.f52808d;
            synchronized (dVar) {
                try {
                    if (!this.f52807c) {
                        if (Intrinsics.areEqual(this.f52805a.b(), this)) {
                            dVar.N(this, true);
                        }
                        this.f52807c = true;
                        Unit unit = Unit.f33282a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void c() {
            if (Intrinsics.areEqual(this.f52805a.b(), this)) {
                if (this.f52808d.f52803y) {
                    this.f52808d.N(this, false);
                } else {
                    this.f52805a.q(true);
                }
            }
        }

        public final c d() {
            return this.f52805a;
        }

        public final boolean[] e() {
            return this.f52806b;
        }

        public final Sink f(int i10) {
            d dVar = this.f52808d;
            synchronized (dVar) {
                if (!this.f52807c) {
                    if (!Intrinsics.areEqual(this.f52805a.b(), this)) {
                        return x.b();
                    }
                    if (!this.f52805a.g()) {
                        boolean[] zArr = this.f52806b;
                        Intrinsics.checkNotNull(zArr);
                        zArr[i10] = true;
                    }
                    try {
                        return new wt.e(dVar.I0().f((File) this.f52805a.c().get(i10)), new a(dVar, this));
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
        private final String f52811a;

        /* renamed from: b */
        private final long[] f52812b;

        /* renamed from: c */
        private final List f52813c;

        /* renamed from: d */
        private final List f52814d;

        /* renamed from: e */
        private boolean f52815e;

        /* renamed from: f */
        private boolean f52816f;

        /* renamed from: g */
        private b f52817g;

        /* renamed from: h */
        private int f52818h;

        /* renamed from: i */
        private long f52819i;

        /* renamed from: j */
        final /* synthetic */ d f52820j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends k {

            /* renamed from: d */
            private boolean f52821d;

            /* renamed from: e */
            final /* synthetic */ d f52822e;

            /* renamed from: i */
            final /* synthetic */ c f52823i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Source source, d dVar, c cVar) {
                super(source);
                this.f52822e = dVar;
                this.f52823i = cVar;
            }

            @Override // iu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                super.close();
                if (!this.f52821d) {
                    this.f52821d = true;
                    d dVar = this.f52822e;
                    c cVar = this.f52823i;
                    synchronized (dVar) {
                        try {
                            cVar.n(cVar.f() - 1);
                            if (cVar.f() == 0 && cVar.i()) {
                                dVar.A1(cVar);
                            }
                            Unit unit = Unit.f33282a;
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                }
            }
        }

        public c(d dVar, String key) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.f52820j = dVar;
            this.f52811a = key;
            this.f52812b = new long[dVar.J0()];
            this.f52813c = new ArrayList();
            this.f52814d = new ArrayList();
            StringBuilder sb2 = new StringBuilder(key);
            sb2.append('.');
            int length = sb2.length();
            int J0 = dVar.J0();
            for (int i10 = 0; i10 < J0; i10++) {
                sb2.append(i10);
                this.f52813c.add(new File(this.f52820j.F0(), sb2.toString()));
                sb2.append(".tmp");
                this.f52814d.add(new File(this.f52820j.F0(), sb2.toString()));
                sb2.setLength(length);
            }
        }

        private final Void j(List list) {
            throw new IOException("unexpected journal line: " + list);
        }

        private final Source k(int i10) {
            Source e10 = this.f52820j.I0().e((File) this.f52813c.get(i10));
            if (this.f52820j.f52803y) {
                return e10;
            }
            this.f52818h++;
            return new a(e10, this.f52820j, this);
        }

        public final List a() {
            return this.f52813c;
        }

        public final b b() {
            return this.f52817g;
        }

        public final List c() {
            return this.f52814d;
        }

        public final String d() {
            return this.f52811a;
        }

        public final long[] e() {
            return this.f52812b;
        }

        public final int f() {
            return this.f52818h;
        }

        public final boolean g() {
            return this.f52815e;
        }

        public final long h() {
            return this.f52819i;
        }

        public final boolean i() {
            return this.f52816f;
        }

        public final void l(b bVar) {
            this.f52817g = bVar;
        }

        public final void m(List strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            if (strings.size() == this.f52820j.J0()) {
                try {
                    int size = strings.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f52812b[i10] = Long.parseLong((String) strings.get(i10));
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
            this.f52818h = i10;
        }

        public final void o(boolean z10) {
            this.f52815e = z10;
        }

        public final void p(long j10) {
            this.f52819i = j10;
        }

        public final void q(boolean z10) {
            this.f52816f = z10;
        }

        public final C0729d r() {
            d dVar = this.f52820j;
            if (ut.e.f50563h && !Thread.holdsLock(dVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
            } else if (!this.f52815e) {
                return null;
            } else {
                if (!this.f52820j.f52803y && (this.f52817g != null || this.f52816f)) {
                    return null;
                }
                ArrayList<Source> arrayList = new ArrayList();
                long[] jArr = (long[]) this.f52812b.clone();
                try {
                    int J0 = this.f52820j.J0();
                    for (int i10 = 0; i10 < J0; i10++) {
                        arrayList.add(k(i10));
                    }
                    return new C0729d(this.f52820j, this.f52811a, this.f52819i, arrayList, jArr);
                } catch (FileNotFoundException unused) {
                    for (Source source : arrayList) {
                        ut.e.m(source);
                    }
                    try {
                        this.f52820j.A1(this);
                    } catch (IOException unused2) {
                    }
                    return null;
                }
            }
        }

        public final void s(BufferedSink writer) {
            Intrinsics.checkNotNullParameter(writer, "writer");
            for (long j10 : this.f52812b) {
                writer.writeByte(32).V0(j10);
            }
        }
    }

    /* renamed from: wt.d$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0729d implements Closeable {

        /* renamed from: d */
        private final String f52824d;

        /* renamed from: e */
        private final long f52825e;

        /* renamed from: i */
        private final List f52826i;

        /* renamed from: o */
        private final long[] f52827o;

        /* renamed from: p */
        final /* synthetic */ d f52828p;

        public C0729d(d dVar, String key, long j10, List sources, long[] lengths) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sources, "sources");
            Intrinsics.checkNotNullParameter(lengths, "lengths");
            this.f52828p = dVar;
            this.f52824d = key;
            this.f52825e = j10;
            this.f52826i = sources;
            this.f52827o = lengths;
        }

        public final b a() {
            return this.f52828p.A0(this.f52824d, this.f52825e);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (Source source : this.f52826i) {
                ut.e.m(source);
            }
        }

        public final Source h(int i10) {
            return (Source) this.f52826i.get(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends xt.a {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str) {
            super(str, false, 2, null);
            d.this = r3;
        }

        @Override // xt.a
        public long f() {
            d dVar = d.this;
            synchronized (dVar) {
                if (!dVar.f52804z || dVar.E0()) {
                    return -1L;
                }
                try {
                    dVar.E1();
                } catch (IOException unused) {
                    dVar.B = true;
                }
                try {
                    if (dVar.R0()) {
                        dVar.x1();
                        dVar.f52801w = 0;
                    }
                } catch (IOException unused2) {
                    dVar.C = true;
                    dVar.f52799u = x.c(x.b());
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
            if (!ut.e.f50563h || Thread.holdsLock(dVar)) {
                d.this.f52802x = true;
                return;
            }
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((IOException) obj);
            return Unit.f33282a;
        }
    }

    public d(cu.a fileSystem, File directory, int i10, int i11, long j10, xt.e taskRunner) {
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        this.f52790d = fileSystem;
        this.f52791e = directory;
        this.f52792i = i10;
        this.f52793o = i11;
        this.f52794p = j10;
        this.f52800v = new LinkedHashMap(0, 0.75f, true);
        this.E = taskRunner.i();
        this.F = new e(ut.e.f50564i + " Cache");
        if (j10 > 0) {
            if (i11 > 0) {
                this.f52795q = new File(directory, H);
                this.f52796r = new File(directory, I);
                this.f52797s = new File(directory, J);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    private final boolean B1() {
        for (c toEvict : this.f52800v.values()) {
            if (!toEvict.i()) {
                Intrinsics.checkNotNullExpressionValue(toEvict, "toEvict");
                A1(toEvict);
                return true;
            }
        }
        return false;
    }

    public static /* synthetic */ b C0(d dVar, String str, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = M;
        }
        return dVar.A0(str, j10);
    }

    private final synchronized void L() {
        if (this.A) {
            throw new IllegalStateException("cache is closed");
        }
    }

    public final boolean R0() {
        int i10 = this.f52801w;
        if (i10 >= 2000 && i10 >= this.f52800v.size()) {
            return true;
        }
        return false;
    }

    private final BufferedSink U0() {
        return x.c(new wt.e(this.f52790d.c(this.f52795q), new f()));
    }

    private final void U1(String str) {
        if (N.i(str)) {
            return;
        }
        throw new IllegalArgumentException(("keys must match regex [a-z0-9_-]{1,120}: \"" + str + '\"').toString());
    }

    private final void X0() {
        this.f52790d.h(this.f52796r);
        Iterator it = this.f52800v.values().iterator();
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "i.next()");
            c cVar = (c) next;
            int i10 = 0;
            if (cVar.b() == null) {
                int i11 = this.f52793o;
                while (i10 < i11) {
                    this.f52798t += cVar.e()[i10];
                    i10++;
                }
            } else {
                cVar.l(null);
                int i12 = this.f52793o;
                while (i10 < i12) {
                    this.f52790d.h((File) cVar.a().get(i10));
                    this.f52790d.h((File) cVar.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
    }

    private final void Y0() {
        BufferedSource d10 = x.d(this.f52790d.e(this.f52795q));
        try {
            String H0 = d10.H0();
            String H02 = d10.H0();
            String H03 = d10.H0();
            String H04 = d10.H0();
            String H05 = d10.H0();
            if (Intrinsics.areEqual(K, H0) && Intrinsics.areEqual(L, H02) && Intrinsics.areEqual(String.valueOf(this.f52792i), H03) && Intrinsics.areEqual(String.valueOf(this.f52793o), H04) && H05.length() <= 0) {
                int i10 = 0;
                while (true) {
                    try {
                        d1(d10.H0());
                        i10++;
                    } catch (EOFException unused) {
                        this.f52801w = i10 - this.f52800v.size();
                        if (!d10.o1()) {
                            x1();
                        } else {
                            this.f52799u = U0();
                        }
                        Unit unit = Unit.f33282a;
                        tr.c.a(d10, null);
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
                tr.c.a(d10, th2);
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
                    this.f52800v.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            }
            c cVar = (c) this.f52800v.get(substring);
            if (cVar == null) {
                cVar = new c(this, substring);
                this.f52800v.put(substring, cVar);
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

    public final synchronized b A0(String key, long j10) {
        b bVar;
        Intrinsics.checkNotNullParameter(key, "key");
        M0();
        L();
        U1(key);
        c cVar = (c) this.f52800v.get(key);
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
            BufferedSink bufferedSink = this.f52799u;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.n0(P).writeByte(32).n0(key).writeByte(10);
            bufferedSink.flush();
            if (this.f52802x) {
                return null;
            }
            if (cVar == null) {
                cVar = new c(this, key);
                this.f52800v.put(key, cVar);
            }
            b bVar2 = new b(this, cVar);
            cVar.l(bVar2);
            return bVar2;
        }
        xt.d.j(this.E, this.F, 0L, 2, null);
        return null;
    }

    public final boolean A1(c entry) {
        BufferedSink bufferedSink;
        Intrinsics.checkNotNullParameter(entry, "entry");
        if (!this.f52803y) {
            if (entry.f() > 0 && (bufferedSink = this.f52799u) != null) {
                bufferedSink.n0(P);
                bufferedSink.writeByte(32);
                bufferedSink.n0(entry.d());
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
        int i10 = this.f52793o;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f52790d.h((File) entry.a().get(i11));
            this.f52798t -= entry.e()[i11];
            entry.e()[i11] = 0;
        }
        this.f52801w++;
        BufferedSink bufferedSink2 = this.f52799u;
        if (bufferedSink2 != null) {
            bufferedSink2.n0(Q);
            bufferedSink2.writeByte(32);
            bufferedSink2.n0(entry.d());
            bufferedSink2.writeByte(10);
        }
        this.f52800v.remove(entry.d());
        if (R0()) {
            xt.d.j(this.E, this.F, 0L, 2, null);
        }
        return true;
    }

    public final synchronized C0729d D0(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        M0();
        L();
        U1(key);
        c cVar = (c) this.f52800v.get(key);
        if (cVar == null) {
            return null;
        }
        C0729d r10 = cVar.r();
        if (r10 == null) {
            return null;
        }
        this.f52801w++;
        BufferedSink bufferedSink = this.f52799u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.n0(R).writeByte(32).n0(key).writeByte(10);
        if (R0()) {
            xt.d.j(this.E, this.F, 0L, 2, null);
        }
        return r10;
    }

    public final boolean E0() {
        return this.A;
    }

    public final void E1() {
        while (this.f52798t > this.f52794p) {
            if (!B1()) {
                return;
            }
        }
        this.B = false;
    }

    public final File F0() {
        return this.f52791e;
    }

    public final cu.a I0() {
        return this.f52790d;
    }

    public final int J0() {
        return this.f52793o;
    }

    public final synchronized void M0() {
        try {
            if (ut.e.f50563h && !Thread.holdsLock(this)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
            }
            if (this.f52804z) {
                return;
            }
            if (this.f52790d.b(this.f52797s)) {
                if (this.f52790d.b(this.f52795q)) {
                    this.f52790d.h(this.f52797s);
                } else {
                    this.f52790d.g(this.f52797s, this.f52795q);
                }
            }
            this.f52803y = ut.e.F(this.f52790d, this.f52797s);
            if (this.f52790d.b(this.f52795q)) {
                try {
                    Y0();
                    X0();
                    this.f52804z = true;
                    return;
                } catch (IOException e10) {
                    du.h g10 = du.h.f22444a.g();
                    g10.k("DiskLruCache " + this.f52791e + " is corrupt: " + e10.getMessage() + ", removing", 5, e10);
                    V();
                    this.A = false;
                }
            }
            x1();
            this.f52804z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void N(b editor, boolean z10) {
        Intrinsics.checkNotNullParameter(editor, "editor");
        c d10 = editor.d();
        if (Intrinsics.areEqual(d10.b(), editor)) {
            if (z10 && !d10.g()) {
                int i10 = this.f52793o;
                for (int i11 = 0; i11 < i10; i11++) {
                    boolean[] e10 = editor.e();
                    Intrinsics.checkNotNull(e10);
                    if (e10[i11]) {
                        if (!this.f52790d.b((File) d10.c().get(i11))) {
                            editor.a();
                            return;
                        }
                    } else {
                        editor.a();
                        throw new IllegalStateException("Newly created entry didn't create value for index " + i11);
                    }
                }
            }
            int i12 = this.f52793o;
            for (int i13 = 0; i13 < i12; i13++) {
                File file = (File) d10.c().get(i13);
                if (z10 && !d10.i()) {
                    if (this.f52790d.b(file)) {
                        File file2 = (File) d10.a().get(i13);
                        this.f52790d.g(file, file2);
                        long j10 = d10.e()[i13];
                        long d11 = this.f52790d.d(file2);
                        d10.e()[i13] = d11;
                        this.f52798t = (this.f52798t - j10) + d11;
                    }
                } else {
                    this.f52790d.h(file);
                }
            }
            d10.l(null);
            if (d10.i()) {
                A1(d10);
                return;
            }
            this.f52801w++;
            BufferedSink bufferedSink = this.f52799u;
            Intrinsics.checkNotNull(bufferedSink);
            if (!d10.g() && !z10) {
                this.f52800v.remove(d10.d());
                bufferedSink.n0(Q).writeByte(32);
                bufferedSink.n0(d10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f52798t <= this.f52794p || R0()) {
                    xt.d.j(this.E, this.F, 0L, 2, null);
                }
                return;
            }
            d10.o(true);
            bufferedSink.n0(O).writeByte(32);
            bufferedSink.n0(d10.d());
            d10.s(bufferedSink);
            bufferedSink.writeByte(10);
            if (z10) {
                long j11 = this.D;
                this.D = 1 + j11;
                d10.p(j11);
            }
            bufferedSink.flush();
            if (this.f52798t <= this.f52794p) {
            }
            xt.d.j(this.E, this.F, 0L, 2, null);
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void V() {
        close();
        this.f52790d.a(this.f52791e);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        c[] cVarArr;
        b b10;
        try {
            if (this.f52804z && !this.A) {
                Collection values = this.f52800v.values();
                Intrinsics.checkNotNullExpressionValue(values, "lruEntries.values");
                for (c cVar : (c[]) values.toArray(new c[0])) {
                    if (cVar.b() != null && (b10 = cVar.b()) != null) {
                        b10.c();
                    }
                }
                E1();
                BufferedSink bufferedSink = this.f52799u;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f52799u = null;
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
        if (!this.f52804z) {
            return;
        }
        L();
        E1();
        BufferedSink bufferedSink = this.f52799u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }

    public final synchronized void x1() {
        try {
            BufferedSink bufferedSink = this.f52799u;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.f52790d.f(this.f52796r));
            c10.n0(K).writeByte(10);
            c10.n0(L).writeByte(10);
            c10.V0(this.f52792i).writeByte(10);
            c10.V0(this.f52793o).writeByte(10);
            c10.writeByte(10);
            for (c cVar : this.f52800v.values()) {
                if (cVar.b() != null) {
                    c10.n0(P).writeByte(32);
                    c10.n0(cVar.d());
                    c10.writeByte(10);
                } else {
                    c10.n0(O).writeByte(32);
                    c10.n0(cVar.d());
                    cVar.s(c10);
                    c10.writeByte(10);
                }
            }
            Unit unit = Unit.f33282a;
            tr.c.a(c10, null);
            if (this.f52790d.b(this.f52795q)) {
                this.f52790d.g(this.f52795q, this.f52797s);
            }
            this.f52790d.g(this.f52796r, this.f52795q);
            this.f52790d.h(this.f52797s);
            this.f52799u = U0();
            this.f52802x = false;
            this.C = false;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized boolean y1(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        M0();
        L();
        U1(key);
        c cVar = (c) this.f52800v.get(key);
        if (cVar == null) {
            return false;
        }
        boolean A1 = A1(cVar);
        if (A1 && this.f52798t <= this.f52794p) {
            this.B = false;
        }
        return A1;
    }
}
