package zt;

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
import lr.h;
import lu.k;
import lu.x;
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
    private final au.d E;
    private final e F;

    /* renamed from: d */
    private final fu.a f56174d;

    /* renamed from: e */
    private final File f56175e;

    /* renamed from: i */
    private final int f56176i;

    /* renamed from: o */
    private final int f56177o;

    /* renamed from: p */
    private long f56178p;

    /* renamed from: q */
    private final File f56179q;

    /* renamed from: r */
    private final File f56180r;

    /* renamed from: s */
    private final File f56181s;

    /* renamed from: t */
    private long f56182t;

    /* renamed from: u */
    private BufferedSink f56183u;

    /* renamed from: v */
    private final LinkedHashMap f56184v;

    /* renamed from: w */
    private int f56185w;

    /* renamed from: x */
    private boolean f56186x;

    /* renamed from: y */
    private boolean f56187y;

    /* renamed from: z */
    private boolean f56188z;

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
        private final c f56189a;

        /* renamed from: b */
        private final boolean[] f56190b;

        /* renamed from: c */
        private boolean f56191c;

        /* renamed from: d */
        final /* synthetic */ d f56192d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d */
            final /* synthetic */ d f56193d;

            /* renamed from: e */
            final /* synthetic */ b f56194e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, b bVar) {
                super(1);
                this.f56193d = dVar;
                this.f56194e = bVar;
            }

            public final void a(IOException it) {
                Intrinsics.checkNotNullParameter(it, "it");
                d dVar = this.f56193d;
                b bVar = this.f56194e;
                synchronized (dVar) {
                    bVar.c();
                    Unit unit = Unit.f32464a;
                }
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((IOException) obj);
                return Unit.f32464a;
            }
        }

        public b(d dVar, c entry) {
            boolean[] zArr;
            Intrinsics.checkNotNullParameter(entry, "entry");
            this.f56192d = dVar;
            this.f56189a = entry;
            if (entry.g()) {
                zArr = null;
            } else {
                zArr = new boolean[dVar.J0()];
            }
            this.f56190b = zArr;
        }

        public final void a() {
            d dVar = this.f56192d;
            synchronized (dVar) {
                try {
                    if (!this.f56191c) {
                        if (Intrinsics.areEqual(this.f56189a.b(), this)) {
                            dVar.N(this, false);
                        }
                        this.f56191c = true;
                        Unit unit = Unit.f32464a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void b() {
            d dVar = this.f56192d;
            synchronized (dVar) {
                try {
                    if (!this.f56191c) {
                        if (Intrinsics.areEqual(this.f56189a.b(), this)) {
                            dVar.N(this, true);
                        }
                        this.f56191c = true;
                        Unit unit = Unit.f32464a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void c() {
            if (Intrinsics.areEqual(this.f56189a.b(), this)) {
                if (this.f56192d.f56187y) {
                    this.f56192d.N(this, false);
                } else {
                    this.f56189a.q(true);
                }
            }
        }

        public final c d() {
            return this.f56189a;
        }

        public final boolean[] e() {
            return this.f56190b;
        }

        public final Sink f(int i10) {
            d dVar = this.f56192d;
            synchronized (dVar) {
                if (!this.f56191c) {
                    if (!Intrinsics.areEqual(this.f56189a.b(), this)) {
                        return x.b();
                    }
                    if (!this.f56189a.g()) {
                        boolean[] zArr = this.f56190b;
                        Intrinsics.checkNotNull(zArr);
                        zArr[i10] = true;
                    }
                    try {
                        return new zt.e(dVar.I0().f((File) this.f56189a.c().get(i10)), new a(dVar, this));
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
        private final String f56195a;

        /* renamed from: b */
        private final long[] f56196b;

        /* renamed from: c */
        private final List f56197c;

        /* renamed from: d */
        private final List f56198d;

        /* renamed from: e */
        private boolean f56199e;

        /* renamed from: f */
        private boolean f56200f;

        /* renamed from: g */
        private b f56201g;

        /* renamed from: h */
        private int f56202h;

        /* renamed from: i */
        private long f56203i;

        /* renamed from: j */
        final /* synthetic */ d f56204j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends k {

            /* renamed from: d */
            private boolean f56205d;

            /* renamed from: e */
            final /* synthetic */ d f56206e;

            /* renamed from: i */
            final /* synthetic */ c f56207i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Source source, d dVar, c cVar) {
                super(source);
                this.f56206e = dVar;
                this.f56207i = cVar;
            }

            @Override // lu.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                super.close();
                if (!this.f56205d) {
                    this.f56205d = true;
                    d dVar = this.f56206e;
                    c cVar = this.f56207i;
                    synchronized (dVar) {
                        try {
                            cVar.n(cVar.f() - 1);
                            if (cVar.f() == 0 && cVar.i()) {
                                dVar.A1(cVar);
                            }
                            Unit unit = Unit.f32464a;
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                }
            }
        }

        public c(d dVar, String key) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.f56204j = dVar;
            this.f56195a = key;
            this.f56196b = new long[dVar.J0()];
            this.f56197c = new ArrayList();
            this.f56198d = new ArrayList();
            StringBuilder sb2 = new StringBuilder(key);
            sb2.append('.');
            int length = sb2.length();
            int J0 = dVar.J0();
            for (int i10 = 0; i10 < J0; i10++) {
                sb2.append(i10);
                this.f56197c.add(new File(this.f56204j.F0(), sb2.toString()));
                sb2.append(".tmp");
                this.f56198d.add(new File(this.f56204j.F0(), sb2.toString()));
                sb2.setLength(length);
            }
        }

        private final Void j(List list) {
            throw new IOException("unexpected journal line: " + list);
        }

        private final Source k(int i10) {
            Source e10 = this.f56204j.I0().e((File) this.f56197c.get(i10));
            if (this.f56204j.f56187y) {
                return e10;
            }
            this.f56202h++;
            return new a(e10, this.f56204j, this);
        }

        public final List a() {
            return this.f56197c;
        }

        public final b b() {
            return this.f56201g;
        }

        public final List c() {
            return this.f56198d;
        }

        public final String d() {
            return this.f56195a;
        }

        public final long[] e() {
            return this.f56196b;
        }

        public final int f() {
            return this.f56202h;
        }

        public final boolean g() {
            return this.f56199e;
        }

        public final long h() {
            return this.f56203i;
        }

        public final boolean i() {
            return this.f56200f;
        }

        public final void l(b bVar) {
            this.f56201g = bVar;
        }

        public final void m(List strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            if (strings.size() == this.f56204j.J0()) {
                try {
                    int size = strings.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f56196b[i10] = Long.parseLong((String) strings.get(i10));
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
            this.f56202h = i10;
        }

        public final void o(boolean z10) {
            this.f56199e = z10;
        }

        public final void p(long j10) {
            this.f56203i = j10;
        }

        public final void q(boolean z10) {
            this.f56200f = z10;
        }

        public final C0795d r() {
            d dVar = this.f56204j;
            if (xt.e.f53574h && !Thread.holdsLock(dVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
            } else if (!this.f56199e) {
                return null;
            } else {
                if (!this.f56204j.f56187y && (this.f56201g != null || this.f56200f)) {
                    return null;
                }
                ArrayList<Source> arrayList = new ArrayList();
                long[] jArr = (long[]) this.f56196b.clone();
                try {
                    int J0 = this.f56204j.J0();
                    for (int i10 = 0; i10 < J0; i10++) {
                        arrayList.add(k(i10));
                    }
                    return new C0795d(this.f56204j, this.f56195a, this.f56203i, arrayList, jArr);
                } catch (FileNotFoundException unused) {
                    for (Source source : arrayList) {
                        xt.e.m(source);
                    }
                    try {
                        this.f56204j.A1(this);
                    } catch (IOException unused2) {
                    }
                    return null;
                }
            }
        }

        public final void s(BufferedSink writer) {
            Intrinsics.checkNotNullParameter(writer, "writer");
            for (long j10 : this.f56196b) {
                writer.writeByte(32).W0(j10);
            }
        }
    }

    /* renamed from: zt.d$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0795d implements Closeable {

        /* renamed from: d */
        private final String f56208d;

        /* renamed from: e */
        private final long f56209e;

        /* renamed from: i */
        private final List f56210i;

        /* renamed from: o */
        private final long[] f56211o;

        /* renamed from: p */
        final /* synthetic */ d f56212p;

        public C0795d(d dVar, String key, long j10, List sources, long[] lengths) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sources, "sources");
            Intrinsics.checkNotNullParameter(lengths, "lengths");
            this.f56212p = dVar;
            this.f56208d = key;
            this.f56209e = j10;
            this.f56210i = sources;
            this.f56211o = lengths;
        }

        public final b a() {
            return this.f56212p.A0(this.f56208d, this.f56209e);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (Source source : this.f56210i) {
                xt.e.m(source);
            }
        }

        public final Source h(int i10) {
            return (Source) this.f56210i.get(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends au.a {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str) {
            super(str, false, 2, null);
            d.this = r3;
        }

        @Override // au.a
        public long f() {
            d dVar = d.this;
            synchronized (dVar) {
                if (!dVar.f56188z || dVar.E0()) {
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
                        dVar.f56185w = 0;
                    }
                } catch (IOException unused2) {
                    dVar.C = true;
                    dVar.f56183u = x.c(x.b());
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
            if (!xt.e.f53574h || Thread.holdsLock(dVar)) {
                d.this.f56186x = true;
                return;
            }
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((IOException) obj);
            return Unit.f32464a;
        }
    }

    public d(fu.a fileSystem, File directory, int i10, int i11, long j10, au.e taskRunner) {
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        this.f56174d = fileSystem;
        this.f56175e = directory;
        this.f56176i = i10;
        this.f56177o = i11;
        this.f56178p = j10;
        this.f56184v = new LinkedHashMap(0, 0.75f, true);
        this.E = taskRunner.i();
        this.F = new e(xt.e.f53575i + " Cache");
        if (j10 > 0) {
            if (i11 > 0) {
                this.f56179q = new File(directory, H);
                this.f56180r = new File(directory, I);
                this.f56181s = new File(directory, J);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    private final boolean B1() {
        for (c toEvict : this.f56184v.values()) {
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
        int i10 = this.f56185w;
        if (i10 >= 2000 && i10 >= this.f56184v.size()) {
            return true;
        }
        return false;
    }

    private final void U1(String str) {
        if (N.i(str)) {
            return;
        }
        throw new IllegalArgumentException(("keys must match regex [a-z0-9_-]{1,120}: \"" + str + '\"').toString());
    }

    private final BufferedSink V0() {
        return x.c(new zt.e(this.f56174d.c(this.f56179q), new f()));
    }

    private final void Y0() {
        this.f56174d.h(this.f56180r);
        Iterator it = this.f56184v.values().iterator();
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "i.next()");
            c cVar = (c) next;
            int i10 = 0;
            if (cVar.b() == null) {
                int i11 = this.f56177o;
                while (i10 < i11) {
                    this.f56182t += cVar.e()[i10];
                    i10++;
                }
            } else {
                cVar.l(null);
                int i12 = this.f56177o;
                while (i10 < i12) {
                    this.f56174d.h((File) cVar.a().get(i10));
                    this.f56174d.h((File) cVar.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
    }

    private final void Z0() {
        BufferedSource d10 = x.d(this.f56174d.e(this.f56179q));
        try {
            String H0 = d10.H0();
            String H02 = d10.H0();
            String H03 = d10.H0();
            String H04 = d10.H0();
            String H05 = d10.H0();
            if (Intrinsics.areEqual(K, H0) && Intrinsics.areEqual(L, H02) && Intrinsics.areEqual(String.valueOf(this.f56176i), H03) && Intrinsics.areEqual(String.valueOf(this.f56177o), H04) && H05.length() <= 0) {
                int i10 = 0;
                while (true) {
                    try {
                        e1(d10.H0());
                        i10++;
                    } catch (EOFException unused) {
                        this.f56185w = i10 - this.f56184v.size();
                        if (!d10.o1()) {
                            x1();
                        } else {
                            this.f56183u = V0();
                        }
                        Unit unit = Unit.f32464a;
                        wr.c.a(d10, null);
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
                wr.c.a(d10, th2);
                throw th3;
            }
        }
    }

    private final void e1(String str) {
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
                    this.f56184v.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            }
            c cVar = (c) this.f56184v.get(substring);
            if (cVar == null) {
                cVar = new c(this, substring);
                this.f56184v.put(substring, cVar);
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
        c cVar = (c) this.f56184v.get(key);
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
            BufferedSink bufferedSink = this.f56183u;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.n0(P).writeByte(32).n0(key).writeByte(10);
            bufferedSink.flush();
            if (this.f56186x) {
                return null;
            }
            if (cVar == null) {
                cVar = new c(this, key);
                this.f56184v.put(key, cVar);
            }
            b bVar2 = new b(this, cVar);
            cVar.l(bVar2);
            return bVar2;
        }
        au.d.j(this.E, this.F, 0L, 2, null);
        return null;
    }

    public final boolean A1(c entry) {
        BufferedSink bufferedSink;
        Intrinsics.checkNotNullParameter(entry, "entry");
        if (!this.f56187y) {
            if (entry.f() > 0 && (bufferedSink = this.f56183u) != null) {
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
        int i10 = this.f56177o;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f56174d.h((File) entry.a().get(i11));
            this.f56182t -= entry.e()[i11];
            entry.e()[i11] = 0;
        }
        this.f56185w++;
        BufferedSink bufferedSink2 = this.f56183u;
        if (bufferedSink2 != null) {
            bufferedSink2.n0(Q);
            bufferedSink2.writeByte(32);
            bufferedSink2.n0(entry.d());
            bufferedSink2.writeByte(10);
        }
        this.f56184v.remove(entry.d());
        if (R0()) {
            au.d.j(this.E, this.F, 0L, 2, null);
        }
        return true;
    }

    public final synchronized C0795d D0(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        M0();
        L();
        U1(key);
        c cVar = (c) this.f56184v.get(key);
        if (cVar == null) {
            return null;
        }
        C0795d r10 = cVar.r();
        if (r10 == null) {
            return null;
        }
        this.f56185w++;
        BufferedSink bufferedSink = this.f56183u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.n0(R).writeByte(32).n0(key).writeByte(10);
        if (R0()) {
            au.d.j(this.E, this.F, 0L, 2, null);
        }
        return r10;
    }

    public final boolean E0() {
        return this.A;
    }

    public final void E1() {
        while (this.f56182t > this.f56178p) {
            if (!B1()) {
                return;
            }
        }
        this.B = false;
    }

    public final File F0() {
        return this.f56175e;
    }

    public final fu.a I0() {
        return this.f56174d;
    }

    public final int J0() {
        return this.f56177o;
    }

    public final synchronized void M0() {
        try {
            if (xt.e.f53574h && !Thread.holdsLock(this)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
            }
            if (this.f56188z) {
                return;
            }
            if (this.f56174d.b(this.f56181s)) {
                if (this.f56174d.b(this.f56179q)) {
                    this.f56174d.h(this.f56181s);
                } else {
                    this.f56174d.g(this.f56181s, this.f56179q);
                }
            }
            this.f56187y = xt.e.F(this.f56174d, this.f56181s);
            if (this.f56174d.b(this.f56179q)) {
                try {
                    Z0();
                    Y0();
                    this.f56188z = true;
                    return;
                } catch (IOException e10) {
                    gu.h g10 = gu.h.f26650a.g();
                    g10.k("DiskLruCache " + this.f56175e + " is corrupt: " + e10.getMessage() + ", removing", 5, e10);
                    V();
                    this.A = false;
                }
            }
            x1();
            this.f56188z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void N(b editor, boolean z10) {
        Intrinsics.checkNotNullParameter(editor, "editor");
        c d10 = editor.d();
        if (Intrinsics.areEqual(d10.b(), editor)) {
            if (z10 && !d10.g()) {
                int i10 = this.f56177o;
                for (int i11 = 0; i11 < i10; i11++) {
                    boolean[] e10 = editor.e();
                    Intrinsics.checkNotNull(e10);
                    if (e10[i11]) {
                        if (!this.f56174d.b((File) d10.c().get(i11))) {
                            editor.a();
                            return;
                        }
                    } else {
                        editor.a();
                        throw new IllegalStateException("Newly created entry didn't create value for index " + i11);
                    }
                }
            }
            int i12 = this.f56177o;
            for (int i13 = 0; i13 < i12; i13++) {
                File file = (File) d10.c().get(i13);
                if (z10 && !d10.i()) {
                    if (this.f56174d.b(file)) {
                        File file2 = (File) d10.a().get(i13);
                        this.f56174d.g(file, file2);
                        long j10 = d10.e()[i13];
                        long d11 = this.f56174d.d(file2);
                        d10.e()[i13] = d11;
                        this.f56182t = (this.f56182t - j10) + d11;
                    }
                } else {
                    this.f56174d.h(file);
                }
            }
            d10.l(null);
            if (d10.i()) {
                A1(d10);
                return;
            }
            this.f56185w++;
            BufferedSink bufferedSink = this.f56183u;
            Intrinsics.checkNotNull(bufferedSink);
            if (!d10.g() && !z10) {
                this.f56184v.remove(d10.d());
                bufferedSink.n0(Q).writeByte(32);
                bufferedSink.n0(d10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f56182t <= this.f56178p || R0()) {
                    au.d.j(this.E, this.F, 0L, 2, null);
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
            if (this.f56182t <= this.f56178p) {
            }
            au.d.j(this.E, this.F, 0L, 2, null);
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void V() {
        close();
        this.f56174d.a(this.f56175e);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        c[] cVarArr;
        b b10;
        try {
            if (this.f56188z && !this.A) {
                Collection values = this.f56184v.values();
                Intrinsics.checkNotNullExpressionValue(values, "lruEntries.values");
                for (c cVar : (c[]) values.toArray(new c[0])) {
                    if (cVar.b() != null && (b10 = cVar.b()) != null) {
                        b10.c();
                    }
                }
                E1();
                BufferedSink bufferedSink = this.f56183u;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f56183u = null;
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
        if (!this.f56188z) {
            return;
        }
        L();
        E1();
        BufferedSink bufferedSink = this.f56183u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }

    public final synchronized void x1() {
        try {
            BufferedSink bufferedSink = this.f56183u;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.f56174d.f(this.f56180r));
            c10.n0(K).writeByte(10);
            c10.n0(L).writeByte(10);
            c10.W0(this.f56176i).writeByte(10);
            c10.W0(this.f56177o).writeByte(10);
            c10.writeByte(10);
            for (c cVar : this.f56184v.values()) {
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
            Unit unit = Unit.f32464a;
            wr.c.a(c10, null);
            if (this.f56174d.b(this.f56179q)) {
                this.f56174d.g(this.f56179q, this.f56181s);
            }
            this.f56174d.g(this.f56180r, this.f56179q);
            this.f56174d.h(this.f56181s);
            this.f56183u = V0();
            this.f56186x = false;
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
        c cVar = (c) this.f56184v.get(key);
        if (cVar == null) {
            return false;
        }
        boolean A1 = A1(cVar);
        if (A1 && this.f56182t <= this.f56178p) {
            this.B = false;
        }
        return A1;
    }
}
