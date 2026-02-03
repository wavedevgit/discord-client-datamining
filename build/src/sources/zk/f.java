package zk;

import ck.r;
import gk.h;
import java.lang.reflect.Array;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import xk.j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f56033a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f56034b;

    /* renamed from: c  reason: collision with root package name */
    private final h f56035c;

    /* renamed from: d  reason: collision with root package name */
    private final xk.f f56036d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f56037a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f56038b;

        static {
            int[] iArr = new int[xk.h.values().length];
            f56038b = iArr;
            try {
                iArr[xk.h.KANJI.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f56038b[xk.h.ALPHANUMERIC.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f56038b[xk.h.NUMERIC.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f56038b[xk.h.BYTE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f56038b[xk.h.ECI.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[d.values().length];
            f56037a = iArr2;
            try {
                iArr2[d.SMALL.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f56037a[d.MEDIUM.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f56037a[d.LARGE.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b {

        /* renamed from: a  reason: collision with root package name */
        private final xk.h f56039a;

        /* renamed from: b  reason: collision with root package name */
        private final int f56040b;

        /* renamed from: c  reason: collision with root package name */
        private final int f56041c;

        /* renamed from: d  reason: collision with root package name */
        private final int f56042d;

        /* renamed from: e  reason: collision with root package name */
        private final b f56043e;

        /* renamed from: f  reason: collision with root package name */
        private final int f56044f;

        /* synthetic */ b(f fVar, xk.h hVar, int i10, int i11, int i12, b bVar, j jVar, a aVar) {
            this(hVar, i10, i11, i12, bVar, jVar);
        }

        private b(xk.h hVar, int i10, int i11, int i12, b bVar, j jVar) {
            this.f56039a = hVar;
            this.f56040b = i10;
            xk.h hVar2 = xk.h.BYTE;
            int i13 = (hVar == hVar2 || bVar == null) ? i11 : bVar.f56041c;
            this.f56041c = i13;
            this.f56042d = i12;
            this.f56043e = bVar;
            boolean z10 = false;
            int i14 = bVar != null ? bVar.f56044f : 0;
            if ((hVar == hVar2 && bVar == null && i13 != 0) || (bVar != null && i13 != bVar.f56041c)) {
                z10 = true;
            }
            i14 = (bVar == null || hVar != bVar.f56039a || z10) ? i14 + hVar.e(jVar) + 4 : i14;
            int i15 = a.f56038b[hVar.ordinal()];
            if (i15 == 1) {
                i14 += 13;
            } else if (i15 == 2) {
                i14 += i12 == 1 ? 6 : 11;
            } else if (i15 == 3) {
                i14 += i12 != 1 ? i12 == 2 ? 7 : 10 : 4;
            } else if (i15 == 4) {
                i14 += f.this.f56035c.b(f.this.f56033a.substring(i10, i12 + i10), i11).length * 8;
                if (z10) {
                    i14 += 12;
                }
            }
            this.f56044f = i14;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f56046a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final j f56047b;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public final class a {

            /* renamed from: a  reason: collision with root package name */
            private final xk.h f56049a;

            /* renamed from: b  reason: collision with root package name */
            private final int f56050b;

            /* renamed from: c  reason: collision with root package name */
            private final int f56051c;

            /* renamed from: d  reason: collision with root package name */
            private final int f56052d;

            a(xk.h hVar, int i10, int i11, int i12) {
                this.f56049a = hVar;
                this.f56050b = i10;
                this.f56051c = i11;
                this.f56052d = i12;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public void d(gk.a aVar) {
                aVar.c(this.f56049a.d(), 4);
                if (this.f56052d > 0) {
                    aVar.c(e(), this.f56049a.e(c.this.f56047b));
                }
                if (this.f56049a == xk.h.ECI) {
                    aVar.c(f.this.f56035c.d(this.f56051c), 8);
                } else if (this.f56052d > 0) {
                    String str = f.this.f56033a;
                    int i10 = this.f56050b;
                    zk.c.c(str.substring(i10, this.f56052d + i10), this.f56049a, aVar, f.this.f56035c.c(this.f56051c));
                }
            }

            private int e() {
                if (this.f56049a == xk.h.BYTE) {
                    h hVar = f.this.f56035c;
                    String str = f.this.f56033a;
                    int i10 = this.f56050b;
                    return hVar.b(str.substring(i10, this.f56052d + i10), this.f56051c).length;
                }
                return this.f56052d;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public int f(j jVar) {
                int i10;
                int e10 = this.f56049a.e(jVar);
                int i11 = e10 + 4;
                int i12 = a.f56038b[this.f56049a.ordinal()];
                if (i12 != 1) {
                    int i13 = 0;
                    if (i12 != 2) {
                        if (i12 != 3) {
                            if (i12 != 4) {
                                if (i12 != 5) {
                                    return i11;
                                }
                                return e10 + 12;
                            }
                            i10 = e() * 8;
                        } else {
                            int i14 = this.f56052d;
                            int i15 = i11 + ((i14 / 3) * 10);
                            int i16 = i14 % 3;
                            if (i16 == 1) {
                                i13 = 4;
                            } else if (i16 == 2) {
                                i13 = 7;
                            }
                            return i15 + i13;
                        }
                    } else {
                        int i17 = this.f56052d;
                        int i18 = i11 + ((i17 / 2) * 11);
                        if (i17 % 2 == 1) {
                            i13 = 6;
                        }
                        return i18 + i13;
                    }
                } else {
                    i10 = this.f56052d * 13;
                }
                return i11 + i10;
            }

            private String g(String str) {
                StringBuilder sb2 = new StringBuilder();
                for (int i10 = 0; i10 < str.length(); i10++) {
                    if (str.charAt(i10) >= ' ' && str.charAt(i10) <= '~') {
                        sb2.append(str.charAt(i10));
                    } else {
                        sb2.append('.');
                    }
                }
                return sb2.toString();
            }

            public String toString() {
                StringBuilder sb2 = new StringBuilder();
                sb2.append(this.f56049a);
                sb2.append('(');
                if (this.f56049a != xk.h.ECI) {
                    String str = f.this.f56033a;
                    int i10 = this.f56050b;
                    sb2.append(g(str.substring(i10, this.f56052d + i10)));
                } else {
                    sb2.append(f.this.f56035c.c(this.f56051c).displayName());
                }
                sb2.append(')');
                return sb2.toString();
            }
        }

        c(j jVar, b bVar) {
            int i10;
            int i11;
            boolean z10;
            int i12;
            b bVar2 = bVar;
            int i13 = 0;
            int i14 = 0;
            while (true) {
                if (bVar2 == null) {
                    break;
                }
                int i15 = i13 + bVar2.f56042d;
                b bVar3 = bVar2.f56043e;
                if ((bVar2.f56039a == xk.h.BYTE && bVar3 == null && bVar2.f56041c != 0) || (bVar3 != null && bVar2.f56041c != bVar3.f56041c)) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                i10 = z10 ? 1 : i14;
                if (bVar3 != null && bVar3.f56039a == bVar2.f56039a && !z10) {
                    i12 = i15;
                } else {
                    this.f56046a.add(0, new a(bVar2.f56039a, bVar2.f56040b, bVar2.f56041c, i15));
                    i12 = 0;
                }
                if (z10) {
                    this.f56046a.add(0, new a(xk.h.ECI, bVar2.f56040b, bVar2.f56041c, 0));
                }
                i14 = i10;
                bVar2 = bVar3;
                i13 = i12;
            }
            if (f.this.f56034b) {
                a aVar = (a) this.f56046a.get(0);
                if (aVar != null) {
                    xk.h hVar = aVar.f56049a;
                    int i16 = i14;
                    xk.h hVar2 = xk.h.ECI;
                    if (hVar != hVar2 && i16 != 0) {
                        this.f56046a.add(0, new a(hVar2, 0, 0, 0));
                    }
                }
                this.f56046a.add(((a) this.f56046a.get(0)).f56049a == xk.h.ECI ? 1 : 0, new a(xk.h.FNC1_FIRST_POSITION, 0, 0, 0));
            }
            int j10 = jVar.j();
            int i17 = a.f56037a[f.m(jVar).ordinal()];
            if (i17 != 1) {
                if (i17 != 2) {
                    i10 = 27;
                    i11 = 40;
                } else {
                    i10 = 10;
                    i11 = 26;
                }
            } else {
                i11 = 9;
            }
            int d10 = d(jVar);
            while (j10 < i11 && !zk.c.v(d10, j.i(j10), f.this.f56036d)) {
                j10++;
            }
            while (j10 > i10 && zk.c.v(d10, j.i(j10 - 1), f.this.f56036d)) {
                j10--;
            }
            this.f56047b = j.i(j10);
        }

        private int d(j jVar) {
            int i10 = 0;
            for (a aVar : this.f56046a) {
                i10 += aVar.f(jVar);
            }
            return i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void b(gk.a aVar) {
            for (a aVar2 : this.f56046a) {
                aVar2.d(aVar);
            }
        }

        int c() {
            return d(this.f56047b);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public j e() {
            return this.f56047b;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            a aVar = null;
            for (a aVar2 : this.f56046a) {
                if (aVar != null) {
                    sb2.append(",");
                }
                sb2.append(aVar2.toString());
                aVar = aVar2;
            }
            return sb2.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d {
        SMALL("version 1-9"),
        MEDIUM("version 10-26"),
        LARGE("version 27-40");
        

        /* renamed from: d  reason: collision with root package name */
        private final String f56058d;

        d(String str) {
            this.f56058d = str;
        }

        @Override // java.lang.Enum
        public String toString() {
            return this.f56058d;
        }
    }

    f(String str, Charset charset, boolean z10, xk.f fVar) {
        this.f56033a = str;
        this.f56034b = z10;
        this.f56035c = new h(str, charset, -1);
        this.f56036d = fVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c h(String str, j jVar, Charset charset, boolean z10, xk.f fVar) {
        return new f(str, charset, z10, fVar).i(jVar);
    }

    static int k(xk.h hVar) {
        int i10;
        if (hVar == null || (i10 = a.f56038b[hVar.ordinal()]) == 1) {
            return 0;
        }
        if (i10 == 2) {
            return 1;
        }
        if (i10 == 3) {
            return 2;
        }
        if (i10 == 4) {
            return 3;
        }
        throw new IllegalStateException("Illegal mode " + hVar);
    }

    static j l(d dVar) {
        int i10 = a.f56037a[dVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                return j.i(40);
            }
            return j.i(26);
        }
        return j.i(9);
    }

    static d m(j jVar) {
        if (jVar.j() <= 9) {
            return d.SMALL;
        }
        if (jVar.j() <= 26) {
            return d.MEDIUM;
        }
        return d.LARGE;
    }

    static boolean n(char c10) {
        if (zk.c.p(c10) != -1) {
            return true;
        }
        return false;
    }

    static boolean o(char c10) {
        return zk.c.s(String.valueOf(c10));
    }

    static boolean p(char c10) {
        if (c10 >= '0' && c10 <= '9') {
            return true;
        }
        return false;
    }

    void e(b[][][] bVarArr, int i10, b bVar) {
        b[] bVarArr2 = bVarArr[i10 + bVar.f56042d][bVar.f56041c];
        int k10 = k(bVar.f56039a);
        b bVar2 = bVarArr2[k10];
        if (bVar2 != null && bVar2.f56044f <= bVar.f56044f) {
            return;
        }
        bVarArr2[k10] = bVar;
    }

    void f(j jVar, b[][][] bVarArr, int i10, b bVar) {
        int i11;
        int i12;
        int f10 = this.f56035c.f();
        int e10 = this.f56035c.e();
        if (e10 >= 0 && this.f56035c.a(this.f56033a.charAt(i10), e10)) {
            f10 = e10 + 1;
        } else {
            e10 = 0;
        }
        int i13 = f10;
        for (int i14 = e10; i14 < i13; i14++) {
            if (this.f56035c.a(this.f56033a.charAt(i10), i14)) {
                e(bVarArr, i10, new b(this, xk.h.BYTE, i10, i14, 1, bVar, jVar, null));
            }
        }
        xk.h hVar = xk.h.KANJI;
        if (g(hVar, this.f56033a.charAt(i10))) {
            e(bVarArr, i10, new b(this, hVar, i10, 0, 1, bVar, jVar, null));
        }
        int length = this.f56033a.length();
        xk.h hVar2 = xk.h.ALPHANUMERIC;
        int i15 = 2;
        if (g(hVar2, this.f56033a.charAt(i10))) {
            int i16 = i10 + 1;
            if (i16 < length && g(hVar2, this.f56033a.charAt(i16))) {
                i12 = 2;
            } else {
                i12 = 1;
            }
            e(bVarArr, i10, new b(this, hVar2, i10, 0, i12, bVar, jVar, null));
        }
        xk.h hVar3 = xk.h.NUMERIC;
        if (g(hVar3, this.f56033a.charAt(i10))) {
            int i17 = i10 + 1;
            if (i17 < length && g(hVar3, this.f56033a.charAt(i17))) {
                int i18 = i10 + 2;
                if (i18 < length && g(hVar3, this.f56033a.charAt(i18))) {
                    i15 = 3;
                }
                i11 = i15;
            } else {
                i11 = 1;
            }
            e(bVarArr, i10, new b(this, hVar3, i10, 0, i11, bVar, jVar, null));
        }
    }

    boolean g(xk.h hVar, char c10) {
        int i10 = a.f56038b[hVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return true;
                    }
                    return false;
                }
                return p(c10);
            }
            return n(c10);
        }
        return o(c10);
    }

    c i(j jVar) {
        if (jVar == null) {
            j[] jVarArr = {l(d.SMALL), l(d.MEDIUM), l(d.LARGE)};
            c[] cVarArr = {j(jVarArr[0]), j(jVarArr[1]), j(jVarArr[2])};
            int i10 = Integer.MAX_VALUE;
            int i11 = -1;
            for (int i12 = 0; i12 < 3; i12++) {
                int c10 = cVarArr[i12].c();
                if (zk.c.v(c10, jVarArr[i12], this.f56036d) && c10 < i10) {
                    i11 = i12;
                    i10 = c10;
                }
            }
            if (i11 >= 0) {
                return cVarArr[i11];
            }
            throw new r("Data too big for any version");
        }
        c j10 = j(jVar);
        if (zk.c.v(j10.c(), l(m(j10.e())), this.f56036d)) {
            return j10;
        }
        throw new r("Data too big for version" + jVar);
    }

    c j(j jVar) {
        int length = this.f56033a.length();
        b[][][] bVarArr = (b[][][]) Array.newInstance(b.class, length + 1, this.f56035c.f(), 4);
        f(jVar, bVarArr, 0, null);
        for (int i10 = 1; i10 <= length; i10++) {
            for (int i11 = 0; i11 < this.f56035c.f(); i11++) {
                for (int i12 = 0; i12 < 4; i12++) {
                    b bVar = bVarArr[i10][i11][i12];
                    if (bVar != null && i10 < length) {
                        f(jVar, bVarArr, i10, bVar);
                    }
                }
            }
        }
        int i13 = -1;
        int i14 = Integer.MAX_VALUE;
        int i15 = -1;
        for (int i16 = 0; i16 < this.f56035c.f(); i16++) {
            for (int i17 = 0; i17 < 4; i17++) {
                b bVar2 = bVarArr[length][i16][i17];
                if (bVar2 != null && bVar2.f56044f < i14) {
                    i14 = bVar2.f56044f;
                    i13 = i16;
                    i15 = i17;
                }
            }
        }
        if (i13 >= 0) {
            return new c(jVar, bVarArr[length][i13][i15]);
        }
        throw new r("Internal error: failed to encode \"" + this.f56033a + "\"");
    }
}
