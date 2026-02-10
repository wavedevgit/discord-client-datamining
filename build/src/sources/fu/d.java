package fu;

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
import rr.h;
import ru.k;
import ru.x;
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
    private final gu.d E;
    private final e F;

    /* renamed from: d */
    private final lu.a f23260d;

    /* renamed from: e */
    private final File f23261e;

    /* renamed from: i */
    private final int f23262i;

    /* renamed from: o */
    private final int f23263o;

    /* renamed from: p */
    private long f23264p;

    /* renamed from: q */
    private final File f23265q;

    /* renamed from: r */
    private final File f23266r;

    /* renamed from: s */
    private final File f23267s;

    /* renamed from: t */
    private long f23268t;

    /* renamed from: u */
    private BufferedSink f23269u;

    /* renamed from: v */
    private final LinkedHashMap f23270v;

    /* renamed from: w */
    private int f23271w;

    /* renamed from: x */
    private boolean f23272x;

    /* renamed from: y */
    private boolean f23273y;

    /* renamed from: z */
    private boolean f23274z;

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
        private final c f23275a;

        /* renamed from: b */
        private final boolean[] f23276b;

        /* renamed from: c */
        private boolean f23277c;

        /* renamed from: d */
        final /* synthetic */ d f23278d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d */
            final /* synthetic */ d f23279d;

            /* renamed from: e */
            final /* synthetic */ b f23280e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, b bVar) {
                super(1);
                this.f23279d = dVar;
                this.f23280e = bVar;
            }

            public final void a(IOException it) {
                Intrinsics.checkNotNullParameter(it, "it");
                d dVar = this.f23279d;
                b bVar = this.f23280e;
                synchronized (dVar) {
                    bVar.c();
                    Unit unit = Unit.f31765a;
                }
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((IOException) obj);
                return Unit.f31765a;
            }
        }

        public b(d dVar, c entry) {
            boolean[] zArr;
            Intrinsics.checkNotNullParameter(entry, "entry");
            this.f23278d = dVar;
            this.f23275a = entry;
            if (entry.g()) {
                zArr = null;
            } else {
                zArr = new boolean[dVar.H0()];
            }
            this.f23276b = zArr;
        }

        public final void a() {
            d dVar = this.f23278d;
            synchronized (dVar) {
                try {
                    if (!this.f23277c) {
                        if (Intrinsics.areEqual(this.f23275a.b(), this)) {
                            dVar.C(this, false);
                        }
                        this.f23277c = true;
                        Unit unit = Unit.f31765a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void b() {
            d dVar = this.f23278d;
            synchronized (dVar) {
                try {
                    if (!this.f23277c) {
                        if (Intrinsics.areEqual(this.f23275a.b(), this)) {
                            dVar.C(this, true);
                        }
                        this.f23277c = true;
                        Unit unit = Unit.f31765a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void c() {
            if (Intrinsics.areEqual(this.f23275a.b(), this)) {
                if (this.f23278d.f23273y) {
                    this.f23278d.C(this, false);
                } else {
                    this.f23275a.q(true);
                }
            }
        }

        public final c d() {
            return this.f23275a;
        }

        public final boolean[] e() {
            return this.f23276b;
        }

        public final Sink f(int i10) {
            d dVar = this.f23278d;
            synchronized (dVar) {
                if (!this.f23277c) {
                    if (!Intrinsics.areEqual(this.f23275a.b(), this)) {
                        return x.b();
                    }
                    if (!this.f23275a.g()) {
                        boolean[] zArr = this.f23276b;
                        Intrinsics.checkNotNull(zArr);
                        zArr[i10] = true;
                    }
                    try {
                        return new fu.e(dVar.G0().f((File) this.f23275a.c().get(i10)), new a(dVar, this));
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
        private final String f23281a;

        /* renamed from: b */
        private final long[] f23282b;

        /* renamed from: c */
        private final List f23283c;

        /* renamed from: d */
        private final List f23284d;

        /* renamed from: e */
        private boolean f23285e;

        /* renamed from: f */
        private boolean f23286f;

        /* renamed from: g */
        private b f23287g;

        /* renamed from: h */
        private int f23288h;

        /* renamed from: i */
        private long f23289i;

        /* renamed from: j */
        final /* synthetic */ d f23290j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends k {

            /* renamed from: d */
            private boolean f23291d;

            /* renamed from: e */
            final /* synthetic */ d f23292e;

            /* renamed from: i */
            final /* synthetic */ c f23293i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Source source, d dVar, c cVar) {
                super(source);
                this.f23292e = dVar;
                this.f23293i = cVar;
            }

            @Override // ru.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                super.close();
                if (!this.f23291d) {
                    this.f23291d = true;
                    d dVar = this.f23292e;
                    c cVar = this.f23293i;
                    synchronized (dVar) {
                        try {
                            cVar.n(cVar.f() - 1);
                            if (cVar.f() == 0 && cVar.i()) {
                                dVar.u1(cVar);
                            }
                            Unit unit = Unit.f31765a;
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                }
            }
        }

        public c(d dVar, String key) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.f23290j = dVar;
            this.f23281a = key;
            this.f23282b = new long[dVar.H0()];
            this.f23283c = new ArrayList();
            this.f23284d = new ArrayList();
            StringBuilder sb2 = new StringBuilder(key);
            sb2.append('.');
            int length = sb2.length();
            int H0 = dVar.H0();
            for (int i10 = 0; i10 < H0; i10++) {
                sb2.append(i10);
                this.f23283c.add(new File(this.f23290j.D0(), sb2.toString()));
                sb2.append(".tmp");
                this.f23284d.add(new File(this.f23290j.D0(), sb2.toString()));
                sb2.setLength(length);
            }
        }

        private final Void j(List list) {
            throw new IOException("unexpected journal line: " + list);
        }

        private final Source k(int i10) {
            Source e10 = this.f23290j.G0().e((File) this.f23283c.get(i10));
            if (this.f23290j.f23273y) {
                return e10;
            }
            this.f23288h++;
            return new a(e10, this.f23290j, this);
        }

        public final List a() {
            return this.f23283c;
        }

        public final b b() {
            return this.f23287g;
        }

        public final List c() {
            return this.f23284d;
        }

        public final String d() {
            return this.f23281a;
        }

        public final long[] e() {
            return this.f23282b;
        }

        public final int f() {
            return this.f23288h;
        }

        public final boolean g() {
            return this.f23285e;
        }

        public final long h() {
            return this.f23289i;
        }

        public final boolean i() {
            return this.f23286f;
        }

        public final void l(b bVar) {
            this.f23287g = bVar;
        }

        public final void m(List strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            if (strings.size() == this.f23290j.H0()) {
                try {
                    int size = strings.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f23282b[i10] = Long.parseLong((String) strings.get(i10));
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
            this.f23288h = i10;
        }

        public final void o(boolean z10) {
            this.f23285e = z10;
        }

        public final void p(long j10) {
            this.f23289i = j10;
        }

        public final void q(boolean z10) {
            this.f23286f = z10;
        }

        public final C0361d r() {
            d dVar = this.f23290j;
            if (du.e.f20986h && !Thread.holdsLock(dVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
            } else if (!this.f23285e) {
                return null;
            } else {
                if (!this.f23290j.f23273y && (this.f23287g != null || this.f23286f)) {
                    return null;
                }
                ArrayList<Source> arrayList = new ArrayList();
                long[] jArr = (long[]) this.f23282b.clone();
                try {
                    int H0 = this.f23290j.H0();
                    for (int i10 = 0; i10 < H0; i10++) {
                        arrayList.add(k(i10));
                    }
                    return new C0361d(this.f23290j, this.f23281a, this.f23289i, arrayList, jArr);
                } catch (FileNotFoundException unused) {
                    for (Source source : arrayList) {
                        du.e.m(source);
                    }
                    try {
                        this.f23290j.u1(this);
                    } catch (IOException unused2) {
                    }
                    return null;
                }
            }
        }

        public final void s(BufferedSink writer) {
            Intrinsics.checkNotNullParameter(writer, "writer");
            for (long j10 : this.f23282b) {
                writer.writeByte(32).S0(j10);
            }
        }
    }

    /* renamed from: fu.d$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0361d implements Closeable {

        /* renamed from: d */
        private final String f23294d;

        /* renamed from: e */
        private final long f23295e;

        /* renamed from: i */
        private final List f23296i;

        /* renamed from: o */
        private final long[] f23297o;

        /* renamed from: p */
        final /* synthetic */ d f23298p;

        public C0361d(d dVar, String key, long j10, List sources, long[] lengths) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sources, "sources");
            Intrinsics.checkNotNullParameter(lengths, "lengths");
            this.f23298p = dVar;
            this.f23294d = key;
            this.f23295e = j10;
            this.f23296i = sources;
            this.f23297o = lengths;
        }

        public final b a() {
            return this.f23298p.J(this.f23294d, this.f23295e);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (Source source : this.f23296i) {
                du.e.m(source);
            }
        }

        public final Source g(int i10) {
            return (Source) this.f23296i.get(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends gu.a {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(String str) {
            super(str, false, 2, null);
            d.this = r3;
        }

        @Override // gu.a
        public long f() {
            d dVar = d.this;
            synchronized (dVar) {
                if (!dVar.f23274z || dVar.C0()) {
                    return -1L;
                }
                try {
                    dVar.z1();
                } catch (IOException unused) {
                    dVar.B = true;
                }
                try {
                    if (dVar.O0()) {
                        dVar.r1();
                        dVar.f23271w = 0;
                    }
                } catch (IOException unused2) {
                    dVar.C = true;
                    dVar.f23269u = x.c(x.b());
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
            if (!du.e.f20986h || Thread.holdsLock(dVar)) {
                d.this.f23272x = true;
                return;
            }
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((IOException) obj);
            return Unit.f31765a;
        }
    }

    public d(lu.a fileSystem, File directory, int i10, int i11, long j10, gu.e taskRunner) {
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        this.f23260d = fileSystem;
        this.f23261e = directory;
        this.f23262i = i10;
        this.f23263o = i11;
        this.f23264p = j10;
        this.f23270v = new LinkedHashMap(0, 0.75f, true);
        this.E = taskRunner.i();
        this.F = new e(du.e.f20987i + " Cache");
        if (j10 > 0) {
            if (i11 > 0) {
                this.f23265q = new File(directory, H);
                this.f23266r = new File(directory, I);
                this.f23267s = new File(directory, J);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    public final boolean O0() {
        int i10 = this.f23271w;
        if (i10 >= 2000 && i10 >= this.f23270v.size()) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ b Q(d dVar, String str, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = M;
        }
        return dVar.J(str, j10);
    }

    private final BufferedSink R0() {
        return x.c(new fu.e(this.f23260d.c(this.f23265q), new f()));
    }

    private final void S1(String str) {
        if (N.i(str)) {
            return;
        }
        throw new IllegalArgumentException(("keys must match regex [a-z0-9_-]{1,120}: \"" + str + '\"').toString());
    }

    private final void V0() {
        this.f23260d.h(this.f23266r);
        Iterator it = this.f23270v.values().iterator();
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "i.next()");
            c cVar = (c) next;
            int i10 = 0;
            if (cVar.b() == null) {
                int i11 = this.f23263o;
                while (i10 < i11) {
                    this.f23268t += cVar.e()[i10];
                    i10++;
                }
            } else {
                cVar.l(null);
                int i12 = this.f23263o;
                while (i10 < i12) {
                    this.f23260d.h((File) cVar.a().get(i10));
                    this.f23260d.h((File) cVar.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
    }

    private final void W0() {
        BufferedSource d10 = x.d(this.f23260d.e(this.f23265q));
        try {
            String F0 = d10.F0();
            String F02 = d10.F0();
            String F03 = d10.F0();
            String F04 = d10.F0();
            String F05 = d10.F0();
            if (Intrinsics.areEqual(K, F0) && Intrinsics.areEqual(L, F02) && Intrinsics.areEqual(String.valueOf(this.f23262i), F03) && Intrinsics.areEqual(String.valueOf(this.f23263o), F04) && F05.length() <= 0) {
                int i10 = 0;
                while (true) {
                    try {
                        a1(d10.F0());
                        i10++;
                    } catch (EOFException unused) {
                        this.f23271w = i10 - this.f23270v.size();
                        if (!d10.k1()) {
                            r1();
                        } else {
                            this.f23269u = R0();
                        }
                        Unit unit = Unit.f31765a;
                        cs.c.a(d10, null);
                        return;
                    }
                }
            } else {
                throw new IOException("unexpected journal header: [" + F0 + ", " + F02 + ", " + F04 + ", " + F05 + ']');
            }
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                cs.c.a(d10, th2);
                throw th3;
            }
        }
    }

    private final void a1(String str) {
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
                    this.f23270v.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            }
            c cVar = (c) this.f23270v.get(substring);
            if (cVar == null) {
                cVar = new c(this, substring);
                this.f23270v.put(substring, cVar);
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

    private final boolean w1() {
        for (c toEvict : this.f23270v.values()) {
            if (!toEvict.i()) {
                Intrinsics.checkNotNullExpressionValue(toEvict, "toEvict");
                u1(toEvict);
                return true;
            }
        }
        return false;
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
                int i10 = this.f23263o;
                for (int i11 = 0; i11 < i10; i11++) {
                    boolean[] e10 = editor.e();
                    Intrinsics.checkNotNull(e10);
                    if (e10[i11]) {
                        if (!this.f23260d.b((File) d10.c().get(i11))) {
                            editor.a();
                            return;
                        }
                    } else {
                        editor.a();
                        throw new IllegalStateException("Newly created entry didn't create value for index " + i11);
                    }
                }
            }
            int i12 = this.f23263o;
            for (int i13 = 0; i13 < i12; i13++) {
                File file = (File) d10.c().get(i13);
                if (z10 && !d10.i()) {
                    if (this.f23260d.b(file)) {
                        File file2 = (File) d10.a().get(i13);
                        this.f23260d.g(file, file2);
                        long j10 = d10.e()[i13];
                        long d11 = this.f23260d.d(file2);
                        d10.e()[i13] = d11;
                        this.f23268t = (this.f23268t - j10) + d11;
                    }
                } else {
                    this.f23260d.h(file);
                }
            }
            d10.l(null);
            if (d10.i()) {
                u1(d10);
                return;
            }
            this.f23271w++;
            BufferedSink bufferedSink = this.f23269u;
            Intrinsics.checkNotNull(bufferedSink);
            if (!d10.g() && !z10) {
                this.f23270v.remove(d10.d());
                bufferedSink.q0(Q).writeByte(32);
                bufferedSink.q0(d10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f23268t <= this.f23264p || O0()) {
                    gu.d.j(this.E, this.F, 0L, 2, null);
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
            if (this.f23268t <= this.f23264p) {
            }
            gu.d.j(this.E, this.F, 0L, 2, null);
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final boolean C0() {
        return this.A;
    }

    public final File D0() {
        return this.f23261e;
    }

    public final lu.a G0() {
        return this.f23260d;
    }

    public final int H0() {
        return this.f23263o;
    }

    public final void I() {
        close();
        this.f23260d.a(this.f23261e);
    }

    public final synchronized b J(String key, long j10) {
        b bVar;
        Intrinsics.checkNotNullParameter(key, "key");
        J0();
        z();
        S1(key);
        c cVar = (c) this.f23270v.get(key);
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
            BufferedSink bufferedSink = this.f23269u;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0(P).writeByte(32).q0(key).writeByte(10);
            bufferedSink.flush();
            if (this.f23272x) {
                return null;
            }
            if (cVar == null) {
                cVar = new c(this, key);
                this.f23270v.put(key, cVar);
            }
            b bVar2 = new b(this, cVar);
            cVar.l(bVar2);
            return bVar2;
        }
        gu.d.j(this.E, this.F, 0L, 2, null);
        return null;
    }

    public final synchronized void J0() {
        try {
            if (du.e.f20986h && !Thread.holdsLock(this)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
            }
            if (this.f23274z) {
                return;
            }
            if (this.f23260d.b(this.f23267s)) {
                if (this.f23260d.b(this.f23265q)) {
                    this.f23260d.h(this.f23267s);
                } else {
                    this.f23260d.g(this.f23267s, this.f23265q);
                }
            }
            this.f23273y = du.e.F(this.f23260d, this.f23267s);
            if (this.f23260d.b(this.f23265q)) {
                try {
                    W0();
                    V0();
                    this.f23274z = true;
                    return;
                } catch (IOException e10) {
                    mu.h g10 = mu.h.f37655a.g();
                    g10.k("DiskLruCache " + this.f23261e + " is corrupt: " + e10.getMessage() + ", removing", 5, e10);
                    I();
                    this.A = false;
                }
            }
            r1();
            this.f23274z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized C0361d Z(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        J0();
        z();
        S1(key);
        c cVar = (c) this.f23270v.get(key);
        if (cVar == null) {
            return null;
        }
        C0361d r10 = cVar.r();
        if (r10 == null) {
            return null;
        }
        this.f23271w++;
        BufferedSink bufferedSink = this.f23269u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.q0(R).writeByte(32).q0(key).writeByte(10);
        if (O0()) {
            gu.d.j(this.E, this.F, 0L, 2, null);
        }
        return r10;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        c[] cVarArr;
        b b10;
        try {
            if (this.f23274z && !this.A) {
                Collection values = this.f23270v.values();
                Intrinsics.checkNotNullExpressionValue(values, "lruEntries.values");
                for (c cVar : (c[]) values.toArray(new c[0])) {
                    if (cVar.b() != null && (b10 = cVar.b()) != null) {
                        b10.c();
                    }
                }
                z1();
                BufferedSink bufferedSink = this.f23269u;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f23269u = null;
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
        if (!this.f23274z) {
            return;
        }
        z();
        z1();
        BufferedSink bufferedSink = this.f23269u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }

    public final synchronized void r1() {
        try {
            BufferedSink bufferedSink = this.f23269u;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.f23260d.f(this.f23266r));
            c10.q0(K).writeByte(10);
            c10.q0(L).writeByte(10);
            c10.S0(this.f23262i).writeByte(10);
            c10.S0(this.f23263o).writeByte(10);
            c10.writeByte(10);
            for (c cVar : this.f23270v.values()) {
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
            Unit unit = Unit.f31765a;
            cs.c.a(c10, null);
            if (this.f23260d.b(this.f23265q)) {
                this.f23260d.g(this.f23265q, this.f23267s);
            }
            this.f23260d.g(this.f23266r, this.f23265q);
            this.f23260d.h(this.f23267s);
            this.f23269u = R0();
            this.f23272x = false;
            this.C = false;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized boolean s1(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        J0();
        z();
        S1(key);
        c cVar = (c) this.f23270v.get(key);
        if (cVar == null) {
            return false;
        }
        boolean u12 = u1(cVar);
        if (u12 && this.f23268t <= this.f23264p) {
            this.B = false;
        }
        return u12;
    }

    public final boolean u1(c entry) {
        BufferedSink bufferedSink;
        Intrinsics.checkNotNullParameter(entry, "entry");
        if (!this.f23273y) {
            if (entry.f() > 0 && (bufferedSink = this.f23269u) != null) {
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
        int i10 = this.f23263o;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f23260d.h((File) entry.a().get(i11));
            this.f23268t -= entry.e()[i11];
            entry.e()[i11] = 0;
        }
        this.f23271w++;
        BufferedSink bufferedSink2 = this.f23269u;
        if (bufferedSink2 != null) {
            bufferedSink2.q0(Q);
            bufferedSink2.writeByte(32);
            bufferedSink2.q0(entry.d());
            bufferedSink2.writeByte(10);
        }
        this.f23270v.remove(entry.d());
        if (O0()) {
            gu.d.j(this.E, this.F, 0L, 2, null);
        }
        return true;
    }

    public final void z1() {
        while (this.f23268t > this.f23264p) {
            if (!w1()) {
                return;
            }
        }
        this.B = false;
    }
}
