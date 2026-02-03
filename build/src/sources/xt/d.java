package xt;

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
import jr.h;
import ju.k;
import ju.x;
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
    private final yt.d E;
    private final e F;

    /* renamed from: d */
    private final du.a f53786d;

    /* renamed from: e */
    private final File f53787e;

    /* renamed from: i */
    private final int f53788i;

    /* renamed from: o */
    private final int f53789o;

    /* renamed from: p */
    private long f53790p;

    /* renamed from: q */
    private final File f53791q;

    /* renamed from: r */
    private final File f53792r;

    /* renamed from: s */
    private final File f53793s;

    /* renamed from: t */
    private long f53794t;

    /* renamed from: u */
    private BufferedSink f53795u;

    /* renamed from: v */
    private final LinkedHashMap f53796v;

    /* renamed from: w */
    private int f53797w;

    /* renamed from: x */
    private boolean f53798x;

    /* renamed from: y */
    private boolean f53799y;

    /* renamed from: z */
    private boolean f53800z;

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
        private final c f53801a;

        /* renamed from: b */
        private final boolean[] f53802b;

        /* renamed from: c */
        private boolean f53803c;

        /* renamed from: d */
        final /* synthetic */ d f53804d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d */
            final /* synthetic */ d f53805d;

            /* renamed from: e */
            final /* synthetic */ b f53806e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, b bVar) {
                super(1);
                this.f53805d = dVar;
                this.f53806e = bVar;
            }

            public final void a(IOException it) {
                Intrinsics.checkNotNullParameter(it, "it");
                d dVar = this.f53805d;
                b bVar = this.f53806e;
                synchronized (dVar) {
                    bVar.c();
                    Unit unit = Unit.f33074a;
                }
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((IOException) obj);
                return Unit.f33074a;
            }
        }

        public b(d dVar, c entry) {
            boolean[] zArr;
            Intrinsics.checkNotNullParameter(entry, "entry");
            this.f53804d = dVar;
            this.f53801a = entry;
            if (entry.g()) {
                zArr = null;
            } else {
                zArr = new boolean[dVar.K0()];
            }
            this.f53802b = zArr;
        }

        public final void a() {
            d dVar = this.f53804d;
            synchronized (dVar) {
                try {
                    if (!this.f53803c) {
                        if (Intrinsics.areEqual(this.f53801a.b(), this)) {
                            dVar.N(this, false);
                        }
                        this.f53803c = true;
                        Unit unit = Unit.f33074a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void b() {
            d dVar = this.f53804d;
            synchronized (dVar) {
                try {
                    if (!this.f53803c) {
                        if (Intrinsics.areEqual(this.f53801a.b(), this)) {
                            dVar.N(this, true);
                        }
                        this.f53803c = true;
                        Unit unit = Unit.f33074a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void c() {
            if (Intrinsics.areEqual(this.f53801a.b(), this)) {
                if (this.f53804d.f53799y) {
                    this.f53804d.N(this, false);
                } else {
                    this.f53801a.q(true);
                }
            }
        }

        public final c d() {
            return this.f53801a;
        }

        public final boolean[] e() {
            return this.f53802b;
        }

        public final Sink f(int i10) {
            d dVar = this.f53804d;
            synchronized (dVar) {
                if (!this.f53803c) {
                    if (!Intrinsics.areEqual(this.f53801a.b(), this)) {
                        return x.b();
                    }
                    if (!this.f53801a.g()) {
                        boolean[] zArr = this.f53802b;
                        Intrinsics.checkNotNull(zArr);
                        zArr[i10] = true;
                    }
                    try {
                        return new xt.e(dVar.J0().f((File) this.f53801a.c().get(i10)), new a(dVar, this));
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
        private final String f53807a;

        /* renamed from: b */
        private final long[] f53808b;

        /* renamed from: c */
        private final List f53809c;

        /* renamed from: d */
        private final List f53810d;

        /* renamed from: e */
        private boolean f53811e;

        /* renamed from: f */
        private boolean f53812f;

        /* renamed from: g */
        private b f53813g;

        /* renamed from: h */
        private int f53814h;

        /* renamed from: i */
        private long f53815i;

        /* renamed from: j */
        final /* synthetic */ d f53816j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends k {

            /* renamed from: d */
            private boolean f53817d;

            /* renamed from: e */
            final /* synthetic */ d f53818e;

            /* renamed from: i */
            final /* synthetic */ c f53819i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Source source, d dVar, c cVar) {
                super(source);
                this.f53818e = dVar;
                this.f53819i = cVar;
            }

            @Override // ju.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                super.close();
                if (!this.f53817d) {
                    this.f53817d = true;
                    d dVar = this.f53818e;
                    c cVar = this.f53819i;
                    synchronized (dVar) {
                        try {
                            cVar.n(cVar.f() - 1);
                            if (cVar.f() == 0 && cVar.i()) {
                                dVar.A1(cVar);
                            }
                            Unit unit = Unit.f33074a;
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                }
            }
        }

        public c(d dVar, String key) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.f53816j = dVar;
            this.f53807a = key;
            this.f53808b = new long[dVar.K0()];
            this.f53809c = new ArrayList();
            this.f53810d = new ArrayList();
            StringBuilder sb2 = new StringBuilder(key);
            sb2.append('.');
            int length = sb2.length();
            int K0 = dVar.K0();
            for (int i10 = 0; i10 < K0; i10++) {
                sb2.append(i10);
                this.f53809c.add(new File(this.f53816j.G0(), sb2.toString()));
                sb2.append(".tmp");
                this.f53810d.add(new File(this.f53816j.G0(), sb2.toString()));
                sb2.setLength(length);
            }
        }

        private final Void j(List list) {
            throw new IOException("unexpected journal line: " + list);
        }

        private final Source k(int i10) {
            Source e10 = this.f53816j.J0().e((File) this.f53809c.get(i10));
            if (this.f53816j.f53799y) {
                return e10;
            }
            this.f53814h++;
            return new a(e10, this.f53816j, this);
        }

        public final List a() {
            return this.f53809c;
        }

        public final b b() {
            return this.f53813g;
        }

        public final List c() {
            return this.f53810d;
        }

        public final String d() {
            return this.f53807a;
        }

        public final long[] e() {
            return this.f53808b;
        }

        public final int f() {
            return this.f53814h;
        }

        public final boolean g() {
            return this.f53811e;
        }

        public final long h() {
            return this.f53815i;
        }

        public final boolean i() {
            return this.f53812f;
        }

        public final void l(b bVar) {
            this.f53813g = bVar;
        }

        public final void m(List strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            if (strings.size() == this.f53816j.K0()) {
                try {
                    int size = strings.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f53808b[i10] = Long.parseLong((String) strings.get(i10));
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
            this.f53814h = i10;
        }

        public final void o(boolean z10) {
            this.f53811e = z10;
        }

        public final void p(long j10) {
            this.f53815i = j10;
        }

        public final void q(boolean z10) {
            this.f53812f = z10;
        }

        public final C0753d r() {
            d dVar = this.f53816j;
            if (vt.e.f51535h && !Thread.holdsLock(dVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
            } else if (!this.f53811e) {
                return null;
            } else {
                if (!this.f53816j.f53799y && (this.f53813g != null || this.f53812f)) {
                    return null;
                }
                ArrayList<Source> arrayList = new ArrayList();
                long[] jArr = (long[]) this.f53808b.clone();
                try {
                    int K0 = this.f53816j.K0();
                    for (int i10 = 0; i10 < K0; i10++) {
                        arrayList.add(k(i10));
                    }
                    return new C0753d(this.f53816j, this.f53807a, this.f53815i, arrayList, jArr);
                } catch (FileNotFoundException unused) {
                    for (Source source : arrayList) {
                        vt.e.m(source);
                    }
                    try {
                        this.f53816j.A1(this);
                    } catch (IOException unused2) {
                    }
                    return null;
                }
            }
        }

        public final void s(BufferedSink writer) {
            Intrinsics.checkNotNullParameter(writer, "writer");
            for (long j10 : this.f53808b) {
                writer.writeByte(32).W0(j10);
            }
        }
    }

    /* renamed from: xt.d$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0753d implements Closeable {

        /* renamed from: d */
        private final String f53820d;

        /* renamed from: e */
        private final long f53821e;

        /* renamed from: i */
        private final List f53822i;

        /* renamed from: o */
        private final long[] f53823o;

        /* renamed from: p */
        final /* synthetic */ d f53824p;

        public C0753d(d dVar, String key, long j10, List sources, long[] lengths) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sources, "sources");
            Intrinsics.checkNotNullParameter(lengths, "lengths");
            this.f53824p = dVar;
            this.f53820d = key;
            this.f53821e = j10;
            this.f53822i = sources;
            this.f53823o = lengths;
        }

        public final b a() {
            return this.f53824p.t0(this.f53820d, this.f53821e);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (Source source : this.f53822i) {
                vt.e.m(source);
            }
        }

        public final Source h(int i10) {
            return (Source) this.f53822i.get(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends yt.a {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str) {
            super(str, false, 2, null);
            d.this = r3;
        }

        @Override // yt.a
        public long f() {
            d dVar = d.this;
            synchronized (dVar) {
                if (!dVar.f53800z || dVar.F0()) {
                    return -1L;
                }
                try {
                    dVar.E1();
                } catch (IOException unused) {
                    dVar.B = true;
                }
                try {
                    if (dVar.O0()) {
                        dVar.x1();
                        dVar.f53797w = 0;
                    }
                } catch (IOException unused2) {
                    dVar.C = true;
                    dVar.f53795u = x.c(x.b());
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
            if (!vt.e.f51535h || Thread.holdsLock(dVar)) {
                d.this.f53798x = true;
                return;
            }
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((IOException) obj);
            return Unit.f33074a;
        }
    }

    public d(du.a fileSystem, File directory, int i10, int i11, long j10, yt.e taskRunner) {
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        this.f53786d = fileSystem;
        this.f53787e = directory;
        this.f53788i = i10;
        this.f53789o = i11;
        this.f53790p = j10;
        this.f53796v = new LinkedHashMap(0, 0.75f, true);
        this.E = taskRunner.i();
        this.F = new e(vt.e.f51536i + " Cache");
        if (j10 > 0) {
            if (i11 > 0) {
                this.f53791q = new File(directory, H);
                this.f53792r = new File(directory, I);
                this.f53793s = new File(directory, J);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    private final boolean B1() {
        for (c toEvict : this.f53796v.values()) {
            if (!toEvict.i()) {
                Intrinsics.checkNotNullExpressionValue(toEvict, "toEvict");
                A1(toEvict);
                return true;
            }
        }
        return false;
    }

    public static /* synthetic */ b D0(d dVar, String str, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = M;
        }
        return dVar.t0(str, j10);
    }

    private final synchronized void L() {
        if (this.A) {
            throw new IllegalStateException("cache is closed");
        }
    }

    public final boolean O0() {
        int i10 = this.f53797w;
        if (i10 >= 2000 && i10 >= this.f53796v.size()) {
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
        return x.c(new xt.e(this.f53786d.c(this.f53791q), new f()));
    }

    private final void Y0() {
        this.f53786d.h(this.f53792r);
        Iterator it = this.f53796v.values().iterator();
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "i.next()");
            c cVar = (c) next;
            int i10 = 0;
            if (cVar.b() == null) {
                int i11 = this.f53789o;
                while (i10 < i11) {
                    this.f53794t += cVar.e()[i10];
                    i10++;
                }
            } else {
                cVar.l(null);
                int i12 = this.f53789o;
                while (i10 < i12) {
                    this.f53786d.h((File) cVar.a().get(i10));
                    this.f53786d.h((File) cVar.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
    }

    private final void Z0() {
        BufferedSource d10 = x.d(this.f53786d.e(this.f53791q));
        try {
            String I0 = d10.I0();
            String I02 = d10.I0();
            String I03 = d10.I0();
            String I04 = d10.I0();
            String I05 = d10.I0();
            if (Intrinsics.areEqual(K, I0) && Intrinsics.areEqual(L, I02) && Intrinsics.areEqual(String.valueOf(this.f53788i), I03) && Intrinsics.areEqual(String.valueOf(this.f53789o), I04) && I05.length() <= 0) {
                int i10 = 0;
                while (true) {
                    try {
                        e1(d10.I0());
                        i10++;
                    } catch (EOFException unused) {
                        this.f53797w = i10 - this.f53796v.size();
                        if (!d10.o1()) {
                            x1();
                        } else {
                            this.f53795u = V0();
                        }
                        Unit unit = Unit.f33074a;
                        ur.c.a(d10, null);
                        return;
                    }
                }
            } else {
                throw new IOException("unexpected journal header: [" + I0 + ", " + I02 + ", " + I04 + ", " + I05 + ']');
            }
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                ur.c.a(d10, th2);
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
                    this.f53796v.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            }
            c cVar = (c) this.f53796v.get(substring);
            if (cVar == null) {
                cVar = new c(this, substring);
                this.f53796v.put(substring, cVar);
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

    public final boolean A1(c entry) {
        BufferedSink bufferedSink;
        Intrinsics.checkNotNullParameter(entry, "entry");
        if (!this.f53799y) {
            if (entry.f() > 0 && (bufferedSink = this.f53795u) != null) {
                bufferedSink.o0(P);
                bufferedSink.writeByte(32);
                bufferedSink.o0(entry.d());
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
        int i10 = this.f53789o;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f53786d.h((File) entry.a().get(i11));
            this.f53794t -= entry.e()[i11];
            entry.e()[i11] = 0;
        }
        this.f53797w++;
        BufferedSink bufferedSink2 = this.f53795u;
        if (bufferedSink2 != null) {
            bufferedSink2.o0(Q);
            bufferedSink2.writeByte(32);
            bufferedSink2.o0(entry.d());
            bufferedSink2.writeByte(10);
        }
        this.f53796v.remove(entry.d());
        if (O0()) {
            yt.d.j(this.E, this.F, 0L, 2, null);
        }
        return true;
    }

    public final synchronized C0753d E0(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        L0();
        L();
        U1(key);
        c cVar = (c) this.f53796v.get(key);
        if (cVar == null) {
            return null;
        }
        C0753d r10 = cVar.r();
        if (r10 == null) {
            return null;
        }
        this.f53797w++;
        BufferedSink bufferedSink = this.f53795u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.o0(R).writeByte(32).o0(key).writeByte(10);
        if (O0()) {
            yt.d.j(this.E, this.F, 0L, 2, null);
        }
        return r10;
    }

    public final void E1() {
        while (this.f53794t > this.f53790p) {
            if (!B1()) {
                return;
            }
        }
        this.B = false;
    }

    public final boolean F0() {
        return this.A;
    }

    public final File G0() {
        return this.f53787e;
    }

    public final du.a J0() {
        return this.f53786d;
    }

    public final int K0() {
        return this.f53789o;
    }

    public final synchronized void L0() {
        try {
            if (vt.e.f51535h && !Thread.holdsLock(this)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
            }
            if (this.f53800z) {
                return;
            }
            if (this.f53786d.b(this.f53793s)) {
                if (this.f53786d.b(this.f53791q)) {
                    this.f53786d.h(this.f53793s);
                } else {
                    this.f53786d.g(this.f53793s, this.f53791q);
                }
            }
            this.f53799y = vt.e.F(this.f53786d, this.f53793s);
            if (this.f53786d.b(this.f53791q)) {
                try {
                    Z0();
                    Y0();
                    this.f53800z = true;
                    return;
                } catch (IOException e10) {
                    eu.h g10 = eu.h.f23247a.g();
                    g10.k("DiskLruCache " + this.f53787e + " is corrupt: " + e10.getMessage() + ", removing", 5, e10);
                    V();
                    this.A = false;
                }
            }
            x1();
            this.f53800z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void N(b editor, boolean z10) {
        Intrinsics.checkNotNullParameter(editor, "editor");
        c d10 = editor.d();
        if (Intrinsics.areEqual(d10.b(), editor)) {
            if (z10 && !d10.g()) {
                int i10 = this.f53789o;
                for (int i11 = 0; i11 < i10; i11++) {
                    boolean[] e10 = editor.e();
                    Intrinsics.checkNotNull(e10);
                    if (e10[i11]) {
                        if (!this.f53786d.b((File) d10.c().get(i11))) {
                            editor.a();
                            return;
                        }
                    } else {
                        editor.a();
                        throw new IllegalStateException("Newly created entry didn't create value for index " + i11);
                    }
                }
            }
            int i12 = this.f53789o;
            for (int i13 = 0; i13 < i12; i13++) {
                File file = (File) d10.c().get(i13);
                if (z10 && !d10.i()) {
                    if (this.f53786d.b(file)) {
                        File file2 = (File) d10.a().get(i13);
                        this.f53786d.g(file, file2);
                        long j10 = d10.e()[i13];
                        long d11 = this.f53786d.d(file2);
                        d10.e()[i13] = d11;
                        this.f53794t = (this.f53794t - j10) + d11;
                    }
                } else {
                    this.f53786d.h(file);
                }
            }
            d10.l(null);
            if (d10.i()) {
                A1(d10);
                return;
            }
            this.f53797w++;
            BufferedSink bufferedSink = this.f53795u;
            Intrinsics.checkNotNull(bufferedSink);
            if (!d10.g() && !z10) {
                this.f53796v.remove(d10.d());
                bufferedSink.o0(Q).writeByte(32);
                bufferedSink.o0(d10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f53794t <= this.f53790p || O0()) {
                    yt.d.j(this.E, this.F, 0L, 2, null);
                }
                return;
            }
            d10.o(true);
            bufferedSink.o0(O).writeByte(32);
            bufferedSink.o0(d10.d());
            d10.s(bufferedSink);
            bufferedSink.writeByte(10);
            if (z10) {
                long j11 = this.D;
                this.D = 1 + j11;
                d10.p(j11);
            }
            bufferedSink.flush();
            if (this.f53794t <= this.f53790p) {
            }
            yt.d.j(this.E, this.F, 0L, 2, null);
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final void V() {
        close();
        this.f53786d.a(this.f53787e);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        c[] cVarArr;
        b b10;
        try {
            if (this.f53800z && !this.A) {
                Collection values = this.f53796v.values();
                Intrinsics.checkNotNullExpressionValue(values, "lruEntries.values");
                for (c cVar : (c[]) values.toArray(new c[0])) {
                    if (cVar.b() != null && (b10 = cVar.b()) != null) {
                        b10.c();
                    }
                }
                E1();
                BufferedSink bufferedSink = this.f53795u;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f53795u = null;
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
        if (!this.f53800z) {
            return;
        }
        L();
        E1();
        BufferedSink bufferedSink = this.f53795u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }

    public final synchronized b t0(String key, long j10) {
        b bVar;
        Intrinsics.checkNotNullParameter(key, "key");
        L0();
        L();
        U1(key);
        c cVar = (c) this.f53796v.get(key);
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
            BufferedSink bufferedSink = this.f53795u;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.o0(P).writeByte(32).o0(key).writeByte(10);
            bufferedSink.flush();
            if (this.f53798x) {
                return null;
            }
            if (cVar == null) {
                cVar = new c(this, key);
                this.f53796v.put(key, cVar);
            }
            b bVar2 = new b(this, cVar);
            cVar.l(bVar2);
            return bVar2;
        }
        yt.d.j(this.E, this.F, 0L, 2, null);
        return null;
    }

    public final synchronized void x1() {
        try {
            BufferedSink bufferedSink = this.f53795u;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.f53786d.f(this.f53792r));
            c10.o0(K).writeByte(10);
            c10.o0(L).writeByte(10);
            c10.W0(this.f53788i).writeByte(10);
            c10.W0(this.f53789o).writeByte(10);
            c10.writeByte(10);
            for (c cVar : this.f53796v.values()) {
                if (cVar.b() != null) {
                    c10.o0(P).writeByte(32);
                    c10.o0(cVar.d());
                    c10.writeByte(10);
                } else {
                    c10.o0(O).writeByte(32);
                    c10.o0(cVar.d());
                    cVar.s(c10);
                    c10.writeByte(10);
                }
            }
            Unit unit = Unit.f33074a;
            ur.c.a(c10, null);
            if (this.f53786d.b(this.f53791q)) {
                this.f53786d.g(this.f53791q, this.f53793s);
            }
            this.f53786d.g(this.f53792r, this.f53791q);
            this.f53786d.h(this.f53793s);
            this.f53795u = V0();
            this.f53798x = false;
            this.C = false;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized boolean y1(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        L0();
        L();
        U1(key);
        c cVar = (c) this.f53796v.get(key);
        if (cVar == null) {
            return false;
        }
        boolean A1 = A1(cVar);
        if (A1 && this.f53794t <= this.f53790p) {
            this.B = false;
        }
        return A1;
    }
}
