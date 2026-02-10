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
    private final uu.a f41273d;

    /* renamed from: e */
    private final File f41274e;

    /* renamed from: i */
    private final int f41275i;

    /* renamed from: o */
    private final int f41276o;

    /* renamed from: p */
    private long f41277p;

    /* renamed from: q */
    private final File f41278q;

    /* renamed from: r */
    private final File f41279r;

    /* renamed from: s */
    private final File f41280s;

    /* renamed from: t */
    private long f41281t;

    /* renamed from: u */
    private BufferedSink f41282u;

    /* renamed from: v */
    private final LinkedHashMap f41283v;

    /* renamed from: w */
    private int f41284w;

    /* renamed from: x */
    private boolean f41285x;

    /* renamed from: y */
    private boolean f41286y;

    /* renamed from: z */
    private boolean f41287z;

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
        private final c f41288a;

        /* renamed from: b */
        private final boolean[] f41289b;

        /* renamed from: c */
        private boolean f41290c;

        /* renamed from: d */
        final /* synthetic */ d f41291d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends Lambda implements Function1 {

            /* renamed from: d */
            final /* synthetic */ d f41292d;

            /* renamed from: e */
            final /* synthetic */ b f41293e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(d dVar, b bVar) {
                super(1);
                this.f41292d = dVar;
                this.f41293e = bVar;
            }

            public final void a(IOException it) {
                Intrinsics.checkNotNullParameter(it, "it");
                d dVar = this.f41292d;
                b bVar = this.f41293e;
                synchronized (dVar) {
                    bVar.c();
                    Unit unit = Unit.f31987a;
                }
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((IOException) obj);
                return Unit.f31987a;
            }
        }

        public b(d dVar, c entry) {
            boolean[] zArr;
            Intrinsics.checkNotNullParameter(entry, "entry");
            this.f41291d = dVar;
            this.f41288a = entry;
            if (entry.g()) {
                zArr = null;
            } else {
                zArr = new boolean[dVar.F0()];
            }
            this.f41289b = zArr;
        }

        public final void a() {
            d dVar = this.f41291d;
            synchronized (dVar) {
                try {
                    if (!this.f41290c) {
                        if (Intrinsics.areEqual(this.f41288a.b(), this)) {
                            dVar.C(this, false);
                        }
                        this.f41290c = true;
                        Unit unit = Unit.f31987a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void b() {
            d dVar = this.f41291d;
            synchronized (dVar) {
                try {
                    if (!this.f41290c) {
                        if (Intrinsics.areEqual(this.f41288a.b(), this)) {
                            dVar.C(this, true);
                        }
                        this.f41290c = true;
                        Unit unit = Unit.f31987a;
                    } else {
                        throw new IllegalStateException("Check failed.");
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final void c() {
            if (Intrinsics.areEqual(this.f41288a.b(), this)) {
                if (this.f41291d.f41286y) {
                    this.f41291d.C(this, false);
                } else {
                    this.f41288a.q(true);
                }
            }
        }

        public final c d() {
            return this.f41288a;
        }

        public final boolean[] e() {
            return this.f41289b;
        }

        public final Sink f(int i10) {
            d dVar = this.f41291d;
            synchronized (dVar) {
                if (!this.f41290c) {
                    if (!Intrinsics.areEqual(this.f41288a.b(), this)) {
                        return x.b();
                    }
                    if (!this.f41288a.g()) {
                        boolean[] zArr = this.f41289b;
                        Intrinsics.checkNotNull(zArr);
                        zArr[i10] = true;
                    }
                    try {
                        return new ou.e(dVar.E0().f((File) this.f41288a.c().get(i10)), new a(dVar, this));
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
        private final String f41294a;

        /* renamed from: b */
        private final long[] f41295b;

        /* renamed from: c */
        private final List f41296c;

        /* renamed from: d */
        private final List f41297d;

        /* renamed from: e */
        private boolean f41298e;

        /* renamed from: f */
        private boolean f41299f;

        /* renamed from: g */
        private b f41300g;

        /* renamed from: h */
        private int f41301h;

        /* renamed from: i */
        private long f41302i;

        /* renamed from: j */
        final /* synthetic */ d f41303j;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends k {

            /* renamed from: d */
            private boolean f41304d;

            /* renamed from: e */
            final /* synthetic */ d f41305e;

            /* renamed from: i */
            final /* synthetic */ c f41306i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Source source, d dVar, c cVar) {
                super(source);
                this.f41305e = dVar;
                this.f41306i = cVar;
            }

            @Override // av.k, okio.Source, java.io.Closeable, java.lang.AutoCloseable
            public void close() {
                super.close();
                if (!this.f41304d) {
                    this.f41304d = true;
                    d dVar = this.f41305e;
                    c cVar = this.f41306i;
                    synchronized (dVar) {
                        try {
                            cVar.n(cVar.f() - 1);
                            if (cVar.f() == 0 && cVar.i()) {
                                dVar.a1(cVar);
                            }
                            Unit unit = Unit.f31987a;
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                }
            }
        }

        public c(d dVar, String key) {
            Intrinsics.checkNotNullParameter(key, "key");
            this.f41303j = dVar;
            this.f41294a = key;
            this.f41295b = new long[dVar.F0()];
            this.f41296c = new ArrayList();
            this.f41297d = new ArrayList();
            StringBuilder sb2 = new StringBuilder(key);
            sb2.append('.');
            int length = sb2.length();
            int F0 = dVar.F0();
            for (int i10 = 0; i10 < F0; i10++) {
                sb2.append(i10);
                this.f41296c.add(new File(this.f41303j.C0(), sb2.toString()));
                sb2.append(".tmp");
                this.f41297d.add(new File(this.f41303j.C0(), sb2.toString()));
                sb2.setLength(length);
            }
        }

        private final Void j(List list) {
            throw new IOException("unexpected journal line: " + list);
        }

        private final Source k(int i10) {
            Source e10 = this.f41303j.E0().e((File) this.f41296c.get(i10));
            if (this.f41303j.f41286y) {
                return e10;
            }
            this.f41301h++;
            return new a(e10, this.f41303j, this);
        }

        public final List a() {
            return this.f41296c;
        }

        public final b b() {
            return this.f41300g;
        }

        public final List c() {
            return this.f41297d;
        }

        public final String d() {
            return this.f41294a;
        }

        public final long[] e() {
            return this.f41295b;
        }

        public final int f() {
            return this.f41301h;
        }

        public final boolean g() {
            return this.f41298e;
        }

        public final long h() {
            return this.f41302i;
        }

        public final boolean i() {
            return this.f41299f;
        }

        public final void l(b bVar) {
            this.f41300g = bVar;
        }

        public final void m(List strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            if (strings.size() == this.f41303j.F0()) {
                try {
                    int size = strings.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        this.f41295b[i10] = Long.parseLong((String) strings.get(i10));
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
            this.f41301h = i10;
        }

        public final void o(boolean z10) {
            this.f41298e = z10;
        }

        public final void p(long j10) {
            this.f41302i = j10;
        }

        public final void q(boolean z10) {
            this.f41299f = z10;
        }

        public final C0580d r() {
            d dVar = this.f41303j;
            if (mu.e.f36663h && !Thread.holdsLock(dVar)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
            } else if (!this.f41298e) {
                return null;
            } else {
                if (!this.f41303j.f41286y && (this.f41300g != null || this.f41299f)) {
                    return null;
                }
                ArrayList<Source> arrayList = new ArrayList();
                long[] jArr = (long[]) this.f41295b.clone();
                try {
                    int F0 = this.f41303j.F0();
                    for (int i10 = 0; i10 < F0; i10++) {
                        arrayList.add(k(i10));
                    }
                    return new C0580d(this.f41303j, this.f41294a, this.f41302i, arrayList, jArr);
                } catch (FileNotFoundException unused) {
                    for (Source source : arrayList) {
                        mu.e.m(source);
                    }
                    try {
                        this.f41303j.a1(this);
                    } catch (IOException unused2) {
                    }
                    return null;
                }
            }
        }

        public final void s(BufferedSink writer) {
            Intrinsics.checkNotNullParameter(writer, "writer");
            for (long j10 : this.f41295b) {
                writer.writeByte(32).W0(j10);
            }
        }
    }

    /* renamed from: ou.d$d */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class C0580d implements Closeable {

        /* renamed from: d */
        private final String f41307d;

        /* renamed from: e */
        private final long f41308e;

        /* renamed from: i */
        private final List f41309i;

        /* renamed from: o */
        private final long[] f41310o;

        /* renamed from: p */
        final /* synthetic */ d f41311p;

        public C0580d(d dVar, String key, long j10, List sources, long[] lengths) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sources, "sources");
            Intrinsics.checkNotNullParameter(lengths, "lengths");
            this.f41311p = dVar;
            this.f41307d = key;
            this.f41308e = j10;
            this.f41309i = sources;
            this.f41310o = lengths;
        }

        public final b a() {
            return this.f41311p.J(this.f41307d, this.f41308e);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            for (Source source : this.f41309i) {
                mu.e.m(source);
            }
        }

        public final Source h(int i10) {
            return (Source) this.f41309i.get(i10);
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
                if (!dVar.f41287z || dVar.z0()) {
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
                        dVar.f41284w = 0;
                    }
                } catch (IOException unused2) {
                    dVar.C = true;
                    dVar.f41282u = x.c(x.b());
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
            if (!mu.e.f36663h || Thread.holdsLock(dVar)) {
                d.this.f41285x = true;
                return;
            }
            throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + dVar);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((IOException) obj);
            return Unit.f31987a;
        }
    }

    public d(uu.a fileSystem, File directory, int i10, int i11, long j10, pu.e taskRunner) {
        Intrinsics.checkNotNullParameter(fileSystem, "fileSystem");
        Intrinsics.checkNotNullParameter(directory, "directory");
        Intrinsics.checkNotNullParameter(taskRunner, "taskRunner");
        this.f41273d = fileSystem;
        this.f41274e = directory;
        this.f41275i = i10;
        this.f41276o = i11;
        this.f41277p = j10;
        this.f41283v = new LinkedHashMap(0, 0.75f, true);
        this.E = taskRunner.i();
        this.F = new e(mu.e.f36664i + " Cache");
        if (j10 > 0) {
            if (i11 > 0) {
                this.f41278q = new File(directory, H);
                this.f41279r = new File(directory, I);
                this.f41280s = new File(directory, J);
                return;
            }
            throw new IllegalArgumentException("valueCount <= 0");
        }
        throw new IllegalArgumentException("maxSize <= 0");
    }

    public final boolean H0() {
        int i10 = this.f41284w;
        if (i10 >= 2000 && i10 >= this.f41283v.size()) {
            return true;
        }
        return false;
    }

    private final BufferedSink L0() {
        return x.c(new ou.e(this.f41273d.c(this.f41278q), new f()));
    }

    private final void N0() {
        this.f41273d.h(this.f41279r);
        Iterator it = this.f41283v.values().iterator();
        while (it.hasNext()) {
            Object next = it.next();
            Intrinsics.checkNotNullExpressionValue(next, "i.next()");
            c cVar = (c) next;
            int i10 = 0;
            if (cVar.b() == null) {
                int i11 = this.f41276o;
                while (i10 < i11) {
                    this.f41281t += cVar.e()[i10];
                    i10++;
                }
            } else {
                cVar.l(null);
                int i12 = this.f41276o;
                while (i10 < i12) {
                    this.f41273d.h((File) cVar.a().get(i10));
                    this.f41273d.h((File) cVar.c().get(i10));
                    i10++;
                }
                it.remove();
            }
        }
    }

    private final void O0() {
        BufferedSource d10 = x.d(this.f41273d.e(this.f41278q));
        try {
            String J0 = d10.J0();
            String J02 = d10.J0();
            String J03 = d10.J0();
            String J04 = d10.J0();
            String J05 = d10.J0();
            if (Intrinsics.areEqual(K, J0) && Intrinsics.areEqual(L, J02) && Intrinsics.areEqual(String.valueOf(this.f41275i), J03) && Intrinsics.areEqual(String.valueOf(this.f41276o), J04) && J05.length() <= 0) {
                int i10 = 0;
                while (true) {
                    try {
                        S0(d10.J0());
                        i10++;
                    } catch (EOFException unused) {
                        this.f41284w = i10 - this.f41283v.size();
                        if (!d10.p1()) {
                            V0();
                        } else {
                            this.f41282u = L0();
                        }
                        Unit unit = Unit.f31987a;
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
                    this.f41283v.remove(substring);
                    return;
                }
            } else {
                substring = str.substring(i10, h03);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
            }
            c cVar = (c) this.f41283v.get(substring);
            if (cVar == null) {
                cVar = new c(this, substring);
                this.f41283v.put(substring, cVar);
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
        for (c toEvict : this.f41283v.values()) {
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
                int i10 = this.f41276o;
                for (int i11 = 0; i11 < i10; i11++) {
                    boolean[] e10 = editor.e();
                    Intrinsics.checkNotNull(e10);
                    if (e10[i11]) {
                        if (!this.f41273d.b((File) d10.c().get(i11))) {
                            editor.a();
                            return;
                        }
                    } else {
                        editor.a();
                        throw new IllegalStateException("Newly created entry didn't create value for index " + i11);
                    }
                }
            }
            int i12 = this.f41276o;
            for (int i13 = 0; i13 < i12; i13++) {
                File file = (File) d10.c().get(i13);
                if (z10 && !d10.i()) {
                    if (this.f41273d.b(file)) {
                        File file2 = (File) d10.a().get(i13);
                        this.f41273d.g(file, file2);
                        long j10 = d10.e()[i13];
                        long d11 = this.f41273d.d(file2);
                        d10.e()[i13] = d11;
                        this.f41281t = (this.f41281t - j10) + d11;
                    }
                } else {
                    this.f41273d.h(file);
                }
            }
            d10.l(null);
            if (d10.i()) {
                a1(d10);
                return;
            }
            this.f41284w++;
            BufferedSink bufferedSink = this.f41282u;
            Intrinsics.checkNotNull(bufferedSink);
            if (!d10.g() && !z10) {
                this.f41283v.remove(d10.d());
                bufferedSink.q0(Q).writeByte(32);
                bufferedSink.q0(d10.d());
                bufferedSink.writeByte(10);
                bufferedSink.flush();
                if (this.f41281t <= this.f41277p || H0()) {
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
            if (this.f41281t <= this.f41277p) {
            }
            pu.d.j(this.E, this.F, 0L, 2, null);
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    public final File C0() {
        return this.f41274e;
    }

    public final uu.a E0() {
        return this.f41273d;
    }

    public final int F0() {
        return this.f41276o;
    }

    public final synchronized void G0() {
        try {
            if (mu.e.f36663h && !Thread.holdsLock(this)) {
                throw new AssertionError("Thread " + Thread.currentThread().getName() + " MUST hold lock on " + this);
            }
            if (this.f41287z) {
                return;
            }
            if (this.f41273d.b(this.f41280s)) {
                if (this.f41273d.b(this.f41278q)) {
                    this.f41273d.h(this.f41280s);
                } else {
                    this.f41273d.g(this.f41280s, this.f41278q);
                }
            }
            this.f41286y = mu.e.F(this.f41273d, this.f41280s);
            if (this.f41273d.b(this.f41278q)) {
                try {
                    O0();
                    N0();
                    this.f41287z = true;
                    return;
                } catch (IOException e10) {
                    vu.h g10 = vu.h.f52015a.g();
                    g10.k("DiskLruCache " + this.f41274e + " is corrupt: " + e10.getMessage() + ", removing", 5, e10);
                    I();
                    this.A = false;
                }
            }
            V0();
            this.f41287z = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final void I() {
        close();
        this.f41273d.a(this.f41274e);
    }

    public final synchronized b J(String key, long j10) {
        b bVar;
        Intrinsics.checkNotNullParameter(key, "key");
        G0();
        z();
        w1(key);
        c cVar = (c) this.f41283v.get(key);
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
            BufferedSink bufferedSink = this.f41282u;
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.q0(P).writeByte(32).q0(key).writeByte(10);
            bufferedSink.flush();
            if (this.f41285x) {
                return null;
            }
            if (cVar == null) {
                cVar = new c(this, key);
                this.f41283v.put(key, cVar);
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
            BufferedSink bufferedSink = this.f41282u;
            if (bufferedSink != null) {
                bufferedSink.close();
            }
            BufferedSink c10 = x.c(this.f41273d.f(this.f41279r));
            c10.q0(K).writeByte(10);
            c10.q0(L).writeByte(10);
            c10.W0(this.f41275i).writeByte(10);
            c10.W0(this.f41276o).writeByte(10);
            c10.writeByte(10);
            for (c cVar : this.f41283v.values()) {
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
            Unit unit = Unit.f31987a;
            ls.c.a(c10, null);
            if (this.f41273d.b(this.f41278q)) {
                this.f41273d.g(this.f41278q, this.f41280s);
            }
            this.f41273d.g(this.f41279r, this.f41278q);
            this.f41273d.h(this.f41280s);
            this.f41282u = L0();
            this.f41285x = false;
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
        c cVar = (c) this.f41283v.get(key);
        if (cVar == null) {
            return null;
        }
        C0580d r10 = cVar.r();
        if (r10 == null) {
            return null;
        }
        this.f41284w++;
        BufferedSink bufferedSink = this.f41282u;
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
        c cVar = (c) this.f41283v.get(key);
        if (cVar == null) {
            return false;
        }
        boolean a12 = a1(cVar);
        if (a12 && this.f41281t <= this.f41277p) {
            this.B = false;
        }
        return a12;
    }

    public final boolean a1(c entry) {
        BufferedSink bufferedSink;
        Intrinsics.checkNotNullParameter(entry, "entry");
        if (!this.f41286y) {
            if (entry.f() > 0 && (bufferedSink = this.f41282u) != null) {
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
        int i10 = this.f41276o;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f41273d.h((File) entry.a().get(i11));
            this.f41281t -= entry.e()[i11];
            entry.e()[i11] = 0;
        }
        this.f41284w++;
        BufferedSink bufferedSink2 = this.f41282u;
        if (bufferedSink2 != null) {
            bufferedSink2.q0(Q);
            bufferedSink2.writeByte(32);
            bufferedSink2.q0(entry.d());
            bufferedSink2.writeByte(10);
        }
        this.f41283v.remove(entry.d());
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
            if (this.f41287z && !this.A) {
                Collection values = this.f41283v.values();
                Intrinsics.checkNotNullExpressionValue(values, "lruEntries.values");
                for (c cVar : (c[]) values.toArray(new c[0])) {
                    if (cVar.b() != null && (b10 = cVar.b()) != null) {
                        b10.c();
                    }
                }
                f1();
                BufferedSink bufferedSink = this.f41282u;
                Intrinsics.checkNotNull(bufferedSink);
                bufferedSink.close();
                this.f41282u = null;
                this.A = true;
                return;
            }
            this.A = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final void f1() {
        while (this.f41281t > this.f41277p) {
            if (!b1()) {
                return;
            }
        }
        this.B = false;
    }

    @Override // java.io.Flushable
    public synchronized void flush() {
        if (!this.f41287z) {
            return;
        }
        z();
        f1();
        BufferedSink bufferedSink = this.f41282u;
        Intrinsics.checkNotNull(bufferedSink);
        bufferedSink.flush();
    }

    public final boolean z0() {
        return this.A;
    }
}
