package ou;

import as.h;
import av.k;
import av.x;
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
    private final pu.d E;
    private final e F;

    /* renamed from: d */
    private final uu.a f41274d;

    /* renamed from: e */
    private final File f41275e;

    /* renamed from: i */
    private final int f41276i;

    /* renamed from: o */
    private final int f41277o;

    /* renamed from: p */
    private long f41278p;

    /* renamed from: q */
    private final File f41279q;

    /* renamed from: r */
    private final File f41280r;

    /* renamed from: s */
    private final File f41281s;

    /* renamed from: t */
    private long f41282t;

    /* renamed from: u */
    private BufferedSink f41283u;

    /* renamed from: v */
    private final LinkedHashMap f41284v;

    /* renamed from: w */
    private int f41285w;

    /* renamed from: x */
    private boolean f41286x;

    /* renamed from: y */
    private boolean f41287y;

    /* renamed from: z */
    private boolean f41288z;

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
        private final c f41289a;

        /* renamed from: b */
        private final boolean[] f41290b;

        /* renamed from: c */
        private boolean f41291c;

        /* renamed from: d */
        final /* synthetic */ d f41292d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d */
            final /* synthetic */ d f41293d;

            /* renamed from: e */
            final /* synthetic */ b f41294e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, b bVar) {
                super(1);
                this.f41293d = dVar;
                this.f41294e = bVar;
            }

            public final void a(IOException it) {
                Intrinsics.checkNotNullParameter(it, "it");
                d dVar = this.f41293d;
                b bVar = this.f41294e;
                synchronized (dVar) {
                    bVar.c();
                    Unit unit = Unit.f31988a;
                }
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((IOException) obj);
                return Unit.f31988a;
            }
        }

        public b(d dVar, c entry) {
            boolean[] zArr;
            Intrinsics.checkNotNullParameter(entry, "entry");
            this.f41292d = dVar;
            this.f41289a = entry;
            if (entry.g()) {
                zArr = null;
            } else {
                zArr = new boolean[dVar.F0()];
            }
            this.f41290b = zArr;
        }

        public final void a() {
            d dVar = this.f41292d;
            synchronized (dVar) {
                try {
                    if (!this.f41291c) {
                        if (Intrinsics.areEqual(this.f41289a.b(), this)) {
                            dVar.C(this, false);
                        }
                        this.f41291c = true;
                        Unit unit = Unit.f31988a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void b() {
            d dVar = this.f41292d;
            synchronized (dVar) {
                try {
                    if (!this.f41291c) {
                        if (Intrinsics.areEqual(this.f41289a.b(), this)) {
                            dVar.C(this, true);
                        }
                        this.f41291c = true;
                        Unit unit = Unit.f31988a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void c() {
            if (Intrinsics.areEqual(this.f41289a.b(), this)) {
                if (this.f41292d.f41287y) {
                    this.f41292d.C(this, false);
                } else {
                    this.f41289a.q(true);
                }
            }
        }

        public final c d() {
            return this.f41289a;
        }

        public final boolean[] e() {
            return this.f41290b;
        }

        public final Sink f(int i10) {
            d dVar = this.f41292d;
            synchronized (dVar) {
                if (!this.f41291c) {
                    if (!Intrinsics.areEqual(this.f41289a.b(), this)) {
                        return x.b();
                    }
                    if (!this.f41289a.g()) {
                        boolean[] zArr = this.f41290b;
                        Intrinsics.checkNotNull(zArr);
                        zArr[i10] = true;
                    }
                    try {
                        return new ou.e(dVar.E0().f((File) this.f41289a.c().get(i10)), new a(dVar, this));
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
        private final String f41295a;

        /* renamed from: b */
        private final long[] f41296b;

        /* renamed from: c */
        private final List f41297c;

        /* renamed from: d */
        private final List f41298d;

        /* renamed from: e */
        private boolean f41299e;

        /* renamed from: f */
        private boolean f41300f;

        /* renamed from: g */
        private b f41301g;

        /* renamed from: h */
        private int f41302h;

        /* renamed from: i */
        private long f41303i;

        /* renamed from: j */
        final /* synthetic */ d f41304j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends k {

            /* renamed from: d */
            private boolean f41305d;

            /* renamed from: e */
            final /* synthetic */ d f41306e;

            /* renamed from: i */
            final /* synthetic */ c f41307i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Source source, d dVar, c cVar) {
                super(source);
                this.f41306e = dVar;
                this.f41307i = cVar;
            }

            @Override // av.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                super.close();
                if (!this.f41305d) {
                    this.f41305d = true;
                    d dVar = this.f41306e;
                    c cVar = this.f41307i;
                    synchronized (dVar) {
                        try {
                            cVar.n(cVar.f() - 1);
                            if (cVar.f() == 0 && cVar.i()) {
                                dVar.a1(cVar);
                            }
                            Unit unit = Unit.f31988a;
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                }
            }
        }

        public c(d dVar, String key) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.f41304j = dVar;
            this.f41295a = key;
            this.f41296b = new long[dVar.F0()];
            this.f41297c = new ArrayList();
            this.f41298d = new ArrayList();
            StringBuilder sb2 = new StringBuilder(key);
            sb2.append('.');
            int length = sb2.length();
            int F0 = dVar.F0();
            for (int i10 = 0; i10 < F0; i10++) {
                sb2.append(i10);
                this.f41297c.add(new File(this.f41304j.C0(), sb2.toString()));
                sb2.append(".tmp");
                this.f41298d.add(new File(this.f41304j.C0(), sb2.toString()));
                sb2.setLength(length);
            }
        }

        private final Void j(List list) {
            throw new IOException("unexpected journal line: " + list);
        }

        private final Source k(int i10) {
            Source e10 = this.f41304j.E0().e((File) this.f41297c.get(i10));
            if (this.f41304j.f41287y) {
                return e10;
            }
            this.f41302h++;
            return new a(e10, this.f41304j, this);
        }

        public final List a() {
            return this.f41297c;
        }

        public final b b() {
            return this.f41301g;
        }

        public final List c() {
            return this.f41298d;
        }

        public final String d() {
            return this.f41295a;
        }

        public final long[] e() {
            return this.f41296b;
        }

        public final int f() {
            return this.f41302h;
        }

        public final boolean g() {
            return this.f41299e;
        }

        public final long h() {
            return this.f41303i;
        }

        public final boolean i() {
            return this.f41300f;
        }

        public final void l(b bVar) {
            this.f41301g = bVar;
        }

        public final void m(List strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            if (strings.size() == this.f41304j.F0()) {
                try {
                    int size = strings.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f41296b[i10] = Long.parseLong((String) strings.get(i10));
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
            this.f41302h = i10;
        }

        public final void o(boolean z10) {
            this.f41299e = z10;
        }

        public final void p(long j10) {
            this.f41303i = j10;
        }

        public final void q(boolean z10) {
            this.f41300f = z10;
        }

        public final C0580d r() {
            d dVar = this.f41304j;
            if (mu.e.f36664h && !Thread.holdsLock(dVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
            } else if (!this.f41299e) {
                return null;
            } else {
                if (!this.f41304j.f41287y && (this.f41301g != null || this.f41300f)) {
                    return null;
                }
                ArrayList<Source> arrayList = new ArrayList();
                long[] jArr = (long[]) this.f41296b.clone();
                try {
                    int F0 = this.f41304j.F0();
                    for (int i10 = 0; i10 < F0; i10++) {
                        arrayList.add(k(i10));
                    }
                    return new C0580d(this.f41304j, this.f41295a, this.f41303i, arrayList, jArr);
                } catch (FileNotFoundException unused) {
                    for (Source source : arrayList) {
                        mu.e.m(source);
                    }
                    try {
                        this.f41304j.a1(this);
                    } catch (IOException unused2) {
                    }
                    return null;
                }
            }
        }

        public final void s(BufferedSink writer) {
            Intrinsics.checkNotNullParameter(writer, "writer");
            for (long j10 : this.f41296b) {
                writer.writeByte(32).W0(j10);
            }
        }
    }

    /* renamed from: ou.d$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0580d implements Closeable {

        /* renamed from: d */
        private final String f41308d;

        /* renamed from: e */
        private final long f41309e;

        /* renamed from: i */
        private final List f41310i;

        /* renamed from: o */
        private final long[] f41311o;

        /* renamed from: p */
        final /* synthetic */ d f41312p;

        public C0580d(d dVar, String key, long j10, List sources, long[] lengths) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sources, "sources");
            Intrinsics.checkNotNullParameter(lengths, "lengths");
            this.f41312p = dVar;
            this.f41308d = key;
            this.f41309e = j10;
            this.f41310i = sources;
            this.f41311o = lengths;
        }

        public final b a() {
            return this.f41312p.J(this.f41308d, this.f41309e);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (Source source : this.f41310i) {
                mu.e.m(source);
            }
        }

        public final Source h(int i10) {
            return (Source) this.f41310i.get(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends pu.a {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str) {
            super(str, false, 2, null);
            d.this = r3;
        }

        @Override // pu.a
        public long f() {
            d dVar = d.this;
            synchronized (dVar) {
                if (!dVar.f41288z || dVar.z0()) {
                    return -1L;
                }
                try {
                    dVar.f1();
                } catch (IOException unused) {
                    dVar.B = true;
                }
                try {
                    if (dVar.H0()) {
                        dVar.V0();
                        dVar.f41285w = 0;
                    }
                } catch (IOException unused2) {
                    dVar.C = true;
                    dVar.f41283u = x.c(x.b());
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
            if (!mu.e.f36664h || Thread.holdsLock(dVar)) {
                d.this.f41286x = true;
                return;
            }
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((IOException) obj);
            return Unit.f31988a;
        }
    }

    public d(uu.a fileSystem, File directory, int i10, int i11, long j10, pu.e taskRunner) {
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        this.f41274d = fileSystem;
        this.f41275e = directory;
        this.f41276i = i10;
        this.f41277o = i11;
        this.f41278p = j10;
        this.f41284v = new LinkedHashMap(0, 0.75f, true);
        this.E = taskRunner.i();
        this.F = new e(mu.e.f36665i + " Cache");
        if (j10 > 0) {
            if (i11 > 0) {
                this.f41279q = new File(directory, H);
                this.f41280r = new File(directory, I);
                this.f41281s = new File(directory, J);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    public final boolean H0() {
        int i10 = this.f41285w;
        if (i10 >= 2000 && i10 >= this.f41284v.size()) {
            return true;
        }
        return false;
    }

    private final BufferedSink L0() {
        return x.c(new ou.e(this.f41274d.c(this.f41279q), new f()));
    }

    private final void N0() {
        this.f41274d.h(this.f41280r);
        Iterator it = this.f41284v.values().iterator();
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "i.next()");
            c cVar = (c) next;
            int i10 = 0;
            if (cVar.b() == null) {
                int i11 = this.f41277o;
                while (i10 < i11) {
                    this.f41282t += cVar.e()[i10];
                    i10++;
                }
            } else {
                cVar.l(null);
                int i12 = this.f41277o;
                while (i10 < i12) {
                    this.f41274d.h((File) cVar.a().get(i10));
                    this.f41274d.h((File) cVar.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
    }

    private final void O0() {
        BufferedSource d10 = x.d(this.f41274d.e(this.f41279q));
        try {
            String J0 = d10.J0();
            String J02 = d10.J0();
            String J03 = d10.J0();
            String J04 = d10.J0();
            String J05 = d10.J0();
            if (Intrinsics.areEqual(K, J0) && Intrinsics.areEqual(L, J02) && Intrinsics.areEqual(String.valueOf(this.f41276i), J03) && Intrinsics.areEqual(String.valueOf(this.f41277o), J04) && J05.length() <= 0) {
                int i10 = 0;
                while (true) {
                    try {
                        S0(d10.J0());
                        i10++;
                    } catch (EOFException unused) {
                        this.f41285w = i10 - this.f41284v.size();
                        if (!d10.p1()) {
                            V0();
                        } else {
                            this.f41283u = L0();
                        }
                        Unit unit = Unit.f31988a;
                        ls.c.a(d10, null);
                        return;
                    }
                }
            } else {
                throw new IOException("unexpected journal header: [" + J0 + ", " + J02 + ", " + J04 + ", " + J05 + ']');
            }
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                ls.c.a(d10, th2);
                throw th3;
            }
        }
    }

    public static /* synthetic */ b Q(d dVar, String str, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = M;
        }
        return dVar.J(str, j10);
    }

    private final void S0(String str) {
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
                    this.f41284v.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            }
            c cVar = (c) this.f41284v.get(substring);
            if (cVar == null) {
                cVar = new c(this, substring);
                this.f41284v.put(substring, cVar);
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

    private final boolean b1() {
        for (c toEvict : this.f41284v.values()) {
            if (!toEvict.i()) {
                Intrinsics.checkNotNullExpressionValue(toEvict, "toEvict");
                a1(toEvict);
                return true;
            }
        }
        return false;
    }

    private final void w1(String str) {
        if (N.i(str)) {
            return;
        }
        throw new IllegalArgumentException(("keys must match regex [a-z0-9_-]{1,120}: \"" + str + '\"').toString());
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
                int i10 = this.f41277o;
                for (int i11 = 0; i11 < i10; i11++) {
                    boolean[] e10 = editor.e();
                    Intrinsics.checkNotNull(e10);
                    if (e10[i11]) {
                        if (!this.f41274d.b((File) d10.c().get(i11))) {
                            editor.a();
                            return;
                        }
                    } else {
                        editor.a();
                        throw new IllegalStateException("Newly created entry didn't create value for index " + i11);
                    }
                }
            }
            int i12 = this.f41277o;
            for (int i13 = 0; i13 < i12; i13++) {
                File file = (File) d10.c().get(i13);
                if (z10 && !d10.i()) {
                    if (this.f41274d.b(file)) {
                        File file2 = (File) d10.a().get(i13);
                        this.f41274d.g(file, file2);
                        long j10 = d10.e()[i13];
                        long d11 = this.f41274d.d(file2);
                        d10.e()[i13] = d11;
                        this.f41282t = (this.f41282t - j10) + d11;
                    }
                } else {
                    this.f41274d.h(file);
                }
            }
            d10.l(null);
            if (d10.i()) {
                a1(d10);
                return;
            }
            this.f41285w++;
            BufferedSink bufferedSink = this.f41283u;
            Intrinsics.checkNotNull(bufferedSink);
            if (!d10.g() && !z10) {
                this.f41284v.remove(d10.d());
                bufferedSink.q0(Q).writeByte(32);
                bufferedSink.q0(d10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f41282t <= this.f41278p || H0()) {
                    pu.d.j(this.E, this.F, 0L, 2, null);
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
            if (this.f41282t <= this.f41278p) {
            }
            pu.d.j(this.E, this.F, 0L, 2, null);
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final File C0() {
        return this.f41275e;
    }

    public final uu.a E0() {
        return this.f41274d;
    }

    public final int F0() {
        return this.f41277o;
    }

    public final synchronized void G0() {
        try {
            if (mu.e.f36664h && !Thread.holdsLock(this)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
            }
            if (this.f41288z) {
                return;
            }
            if (this.f41274d.b(this.f41281s)) {
                if (this.f41274d.b(this.f41279q)) {
                    this.f41274d.h(this.f41281s);
                } else {
                    this.f41274d.g(this.f41281s, this.f41279q);
                }
            }
            this.f41287y = mu.e.F(this.f41274d, this.f41281s);
            if (this.f41274d.b(this.f41279q)) {
                try {
                    O0();
                    N0();
                    this.f41288z = true;
                    return;
                } catch (IOException e10) {
                    vu.h g10 = vu.h.f52016a.g();
                    g10.k("DiskLruCache " + this.f41275e + " is corrupt: " + e10.getMessage() + ", removing", 5, e10);
                    I();
                    this.A = false;
                }
            }
            V0();
            this.f41288z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final void I() {
        close();
        this.f41274d.a(this.f41275e);
    }

    public final synchronized b J(String key, long j10) {
        b bVar;
        Intrinsics.checkNotNullParameter(key, "key");
        G0();
        z();
        w1(key);
        c cVar = (c) this.f41284v.get(key);
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
            BufferedSink bufferedSink = this.f41283u;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0(P).writeByte(32).q0(key).writeByte(10);
            bufferedSink.flush();
            if (this.f41286x) {
                return null;
            }
            if (cVar == null) {
                cVar = new c(this, key);
                this.f41284v.put(key, cVar);
            }
            b bVar2 = new b(this, cVar);
            cVar.l(bVar2);
            return bVar2;
        }
        pu.d.j(this.E, this.F, 0L, 2, null);
        return null;
    }

    public final synchronized void V0() {
        try {
            BufferedSink bufferedSink = this.f41283u;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.f41274d.f(this.f41280r));
            c10.q0(K).writeByte(10);
            c10.q0(L).writeByte(10);
            c10.W0(this.f41276i).writeByte(10);
            c10.W0(this.f41277o).writeByte(10);
            c10.writeByte(10);
            for (c cVar : this.f41284v.values()) {
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
            Unit unit = Unit.f31988a;
            ls.c.a(c10, null);
            if (this.f41274d.b(this.f41279q)) {
                this.f41274d.g(this.f41279q, this.f41281s);
            }
            this.f41274d.g(this.f41280r, this.f41279q);
            this.f41274d.h(this.f41281s);
            this.f41283u = L0();
            this.f41286x = false;
            this.C = false;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized C0580d Z(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        G0();
        z();
        w1(key);
        c cVar = (c) this.f41284v.get(key);
        if (cVar == null) {
            return null;
        }
        C0580d r10 = cVar.r();
        if (r10 == null) {
            return null;
        }
        this.f41285w++;
        BufferedSink bufferedSink = this.f41283u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.q0(R).writeByte(32).q0(key).writeByte(10);
        if (H0()) {
            pu.d.j(this.E, this.F, 0L, 2, null);
        }
        return r10;
    }

    public final synchronized boolean Z0(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        G0();
        z();
        w1(key);
        c cVar = (c) this.f41284v.get(key);
        if (cVar == null) {
            return false;
        }
        boolean a12 = a1(cVar);
        if (a12 && this.f41282t <= this.f41278p) {
            this.B = false;
        }
        return a12;
    }

    public final boolean a1(c entry) {
        BufferedSink bufferedSink;
        Intrinsics.checkNotNullParameter(entry, "entry");
        if (!this.f41287y) {
            if (entry.f() > 0 && (bufferedSink = this.f41283u) != null) {
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
        int i10 = this.f41277o;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f41274d.h((File) entry.a().get(i11));
            this.f41282t -= entry.e()[i11];
            entry.e()[i11] = 0;
        }
        this.f41285w++;
        BufferedSink bufferedSink2 = this.f41283u;
        if (bufferedSink2 != null) {
            bufferedSink2.q0(Q);
            bufferedSink2.writeByte(32);
            bufferedSink2.q0(entry.d());
            bufferedSink2.writeByte(10);
        }
        this.f41284v.remove(entry.d());
        if (H0()) {
            pu.d.j(this.E, this.F, 0L, 2, null);
        }
        return true;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        c[] cVarArr;
        b b10;
        try {
            if (this.f41288z && !this.A) {
                Collection values = this.f41284v.values();
                Intrinsics.checkNotNullExpressionValue(values, "lruEntries.values");
                for (c cVar : (c[]) values.toArray(new c[0])) {
                    if (cVar.b() != null && (b10 = cVar.b()) != null) {
                        b10.c();
                    }
                }
                f1();
                BufferedSink bufferedSink = this.f41283u;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f41283u = null;
                this.A = true;
                return;
            }
            this.A = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final void f1() {
        while (this.f41282t > this.f41278p) {
            if (!b1()) {
                return;
            }
        }
        this.B = false;
    }

    @Override // java.io.Flushable
    public synchronized void flush() {
        if (!this.f41288z) {
            return;
        }
        z();
        f1();
        BufferedSink bufferedSink = this.f41283u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }

    public final boolean z0() {
        return this.A;
    }
}
