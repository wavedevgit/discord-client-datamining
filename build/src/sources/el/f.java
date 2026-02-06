package el;

import cl.j;
import hk.r;
import java.lang.reflect.Array;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import lk.h;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f21633a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21634b;

    /* renamed from: c  reason: collision with root package name */
    private final h f21635c;

    /* renamed from: d  reason: collision with root package name */
    private final cl.f f21636d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f21637a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f21638b;

        static {
            int[] iArr = new int[cl.h.values().length];
            f21638b = iArr;
            try {
                iArr[cl.h.KANJI.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f21638b[cl.h.ALPHANUMERIC.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f21638b[cl.h.NUMERIC.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f21638b[cl.h.BYTE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f21638b[cl.h.ECI.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[d.values().length];
            f21637a = iArr2;
            try {
                iArr2[d.SMALL.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f21637a[d.MEDIUM.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f21637a[d.LARGE.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b {

        /* renamed from: a  reason: collision with root package name */
        private final cl.h f21639a;

        /* renamed from: b  reason: collision with root package name */
        private final int f21640b;

        /* renamed from: c  reason: collision with root package name */
        private final int f21641c;

        /* renamed from: d  reason: collision with root package name */
        private final int f21642d;

        /* renamed from: e  reason: collision with root package name */
        private final b f21643e;

        /* renamed from: f  reason: collision with root package name */
        private final int f21644f;

        /* synthetic */ b(f fVar, cl.h hVar, int i10, int i11, int i12, b bVar, j jVar, a aVar) {
            this(hVar, i10, i11, i12, bVar, jVar);
        }

        private b(cl.h hVar, int i10, int i11, int i12, b bVar, j jVar) {
            this.f21639a = hVar;
            this.f21640b = i10;
            cl.h hVar2 = cl.h.BYTE;
            int i13 = (hVar == hVar2 || bVar == null) ? i11 : bVar.f21641c;
            this.f21641c = i13;
            this.f21642d = i12;
            this.f21643e = bVar;
            boolean z10 = false;
            int i14 = bVar != null ? bVar.f21644f : 0;
            if ((hVar == hVar2 && bVar == null && i13 != 0) || (bVar != null && i13 != bVar.f21641c)) {
                z10 = true;
            }
            i14 = (bVar == null || hVar != bVar.f21639a || z10) ? i14 + hVar.e(jVar) + 4 : i14;
            int i15 = a.f21638b[hVar.ordinal()];
            if (i15 == 1) {
                i14 += 13;
            } else if (i15 == 2) {
                i14 += i12 == 1 ? 6 : 11;
            } else if (i15 == 3) {
                i14 += i12 != 1 ? i12 == 2 ? 7 : 10 : 4;
            } else if (i15 == 4) {
                i14 += f.this.f21635c.b(f.this.f21633a.substring(i10, i12 + i10), i11).length * 8;
                if (z10) {
                    i14 += 12;
                }
            }
            this.f21644f = i14;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f21646a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final j f21647b;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public final class a {

            /* renamed from: a  reason: collision with root package name */
            private final cl.h f21649a;

            /* renamed from: b  reason: collision with root package name */
            private final int f21650b;

            /* renamed from: c  reason: collision with root package name */
            private final int f21651c;

            /* renamed from: d  reason: collision with root package name */
            private final int f21652d;

            a(cl.h hVar, int i10, int i11, int i12) {
                this.f21649a = hVar;
                this.f21650b = i10;
                this.f21651c = i11;
                this.f21652d = i12;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public void d(lk.a aVar) {
                aVar.c(this.f21649a.d(), 4);
                if (this.f21652d > 0) {
                    aVar.c(e(), this.f21649a.e(c.this.f21647b));
                }
                if (this.f21649a == cl.h.ECI) {
                    aVar.c(f.this.f21635c.d(this.f21651c), 8);
                } else if (this.f21652d > 0) {
                    String str = f.this.f21633a;
                    int i10 = this.f21650b;
                    el.c.c(str.substring(i10, this.f21652d + i10), this.f21649a, aVar, f.this.f21635c.c(this.f21651c));
                }
            }

            private int e() {
                if (this.f21649a == cl.h.BYTE) {
                    h hVar = f.this.f21635c;
                    String str = f.this.f21633a;
                    int i10 = this.f21650b;
                    return hVar.b(str.substring(i10, this.f21652d + i10), this.f21651c).length;
                }
                return this.f21652d;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public int f(j jVar) {
                int i10;
                int e10 = this.f21649a.e(jVar);
                int i11 = e10 + 4;
                int i12 = a.f21638b[this.f21649a.ordinal()];
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
                            int i14 = this.f21652d;
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
                        int i17 = this.f21652d;
                        int i18 = i11 + ((i17 / 2) * 11);
                        if (i17 % 2 == 1) {
                            i13 = 6;
                        }
                        return i18 + i13;
                    }
                } else {
                    i10 = this.f21652d * 13;
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
                sb2.append(this.f21649a);
                sb2.append('(');
                if (this.f21649a != cl.h.ECI) {
                    String str = f.this.f21633a;
                    int i10 = this.f21650b;
                    sb2.append(g(str.substring(i10, this.f21652d + i10)));
                } else {
                    sb2.append(f.this.f21635c.c(this.f21651c).displayName());
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
                int i15 = i13 + bVar2.f21642d;
                b bVar3 = bVar2.f21643e;
                if ((bVar2.f21639a == cl.h.BYTE && bVar3 == null && bVar2.f21641c != 0) || (bVar3 != null && bVar2.f21641c != bVar3.f21641c)) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                i10 = z10 ? 1 : i14;
                if (bVar3 != null && bVar3.f21639a == bVar2.f21639a && !z10) {
                    i12 = i15;
                } else {
                    this.f21646a.add(0, new a(bVar2.f21639a, bVar2.f21640b, bVar2.f21641c, i15));
                    i12 = 0;
                }
                if (z10) {
                    this.f21646a.add(0, new a(cl.h.ECI, bVar2.f21640b, bVar2.f21641c, 0));
                }
                i14 = i10;
                bVar2 = bVar3;
                i13 = i12;
            }
            if (f.this.f21634b) {
                a aVar = (a) this.f21646a.get(0);
                if (aVar != null) {
                    cl.h hVar = aVar.f21649a;
                    int i16 = i14;
                    cl.h hVar2 = cl.h.ECI;
                    if (hVar != hVar2 && i16 != 0) {
                        this.f21646a.add(0, new a(hVar2, 0, 0, 0));
                    }
                }
                this.f21646a.add(((a) this.f21646a.get(0)).f21649a == cl.h.ECI ? 1 : 0, new a(cl.h.FNC1_FIRST_POSITION, 0, 0, 0));
            }
            int j10 = jVar.j();
            int i17 = a.f21637a[f.m(jVar).ordinal()];
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
            while (j10 < i11 && !el.c.v(d10, j.i(j10), f.this.f21636d)) {
                j10++;
            }
            while (j10 > i10 && el.c.v(d10, j.i(j10 - 1), f.this.f21636d)) {
                j10--;
            }
            this.f21647b = j.i(j10);
        }

        private int d(j jVar) {
            int i10 = 0;
            for (a aVar : this.f21646a) {
                i10 += aVar.f(jVar);
            }
            return i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void b(lk.a aVar) {
            for (a aVar2 : this.f21646a) {
                aVar2.d(aVar);
            }
        }

        int c() {
            return d(this.f21647b);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public j e() {
            return this.f21647b;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            a aVar = null;
            for (a aVar2 : this.f21646a) {
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
        private final String f21658d;

        d(String str) {
            this.f21658d = str;
        }

        @Override // java.lang.Enum
        public String toString() {
            return this.f21658d;
        }
    }

    f(String str, Charset charset, boolean z10, cl.f fVar) {
        this.f21633a = str;
        this.f21634b = z10;
        this.f21635c = new h(str, charset, -1);
        this.f21636d = fVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c i(String str, j jVar, Charset charset, boolean z10, cl.f fVar) {
        return new f(str, charset, z10, fVar).h(jVar);
    }

    static int k(cl.h hVar) {
        int i10;
        if (hVar == null || (i10 = a.f21638b[hVar.ordinal()]) == 1) {
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
        int i10 = a.f21637a[dVar.ordinal()];
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
        if (el.c.p(c10) != -1) {
            return true;
        }
        return false;
    }

    static boolean o(char c10) {
        return el.c.s(String.valueOf(c10));
    }

    static boolean p(char c10) {
        if (c10 >= '0' && c10 <= '9') {
            return true;
        }
        return false;
    }

    void e(b[][][] bVarArr, int i10, b bVar) {
        b[] bVarArr2 = bVarArr[i10 + bVar.f21642d][bVar.f21641c];
        int k10 = k(bVar.f21639a);
        b bVar2 = bVarArr2[k10];
        if (bVar2 != null && bVar2.f21644f <= bVar.f21644f) {
            return;
        }
        bVarArr2[k10] = bVar;
    }

    void f(j jVar, b[][][] bVarArr, int i10, b bVar) {
        int i11;
        int i12;
        int f10 = this.f21635c.f();
        int e10 = this.f21635c.e();
        if (e10 >= 0 && this.f21635c.a(this.f21633a.charAt(i10), e10)) {
            f10 = e10 + 1;
        } else {
            e10 = 0;
        }
        int i13 = f10;
        for (int i14 = e10; i14 < i13; i14++) {
            if (this.f21635c.a(this.f21633a.charAt(i10), i14)) {
                e(bVarArr, i10, new b(this, cl.h.BYTE, i10, i14, 1, bVar, jVar, null));
            }
        }
        cl.h hVar = cl.h.KANJI;
        if (g(hVar, this.f21633a.charAt(i10))) {
            e(bVarArr, i10, new b(this, hVar, i10, 0, 1, bVar, jVar, null));
        }
        int length = this.f21633a.length();
        cl.h hVar2 = cl.h.ALPHANUMERIC;
        int i15 = 2;
        if (g(hVar2, this.f21633a.charAt(i10))) {
            int i16 = i10 + 1;
            if (i16 < length && g(hVar2, this.f21633a.charAt(i16))) {
                i12 = 2;
            } else {
                i12 = 1;
            }
            e(bVarArr, i10, new b(this, hVar2, i10, 0, i12, bVar, jVar, null));
        }
        cl.h hVar3 = cl.h.NUMERIC;
        if (g(hVar3, this.f21633a.charAt(i10))) {
            int i17 = i10 + 1;
            if (i17 < length && g(hVar3, this.f21633a.charAt(i17))) {
                int i18 = i10 + 2;
                if (i18 < length && g(hVar3, this.f21633a.charAt(i18))) {
                    i15 = 3;
                }
                i11 = i15;
            } else {
                i11 = 1;
            }
            e(bVarArr, i10, new b(this, hVar3, i10, 0, i11, bVar, jVar, null));
        }
    }

    boolean g(cl.h hVar, char c10) {
        int i10 = a.f21638b[hVar.ordinal()];
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

    c h(j jVar) {
        if (jVar == null) {
            j[] jVarArr = {l(d.SMALL), l(d.MEDIUM), l(d.LARGE)};
            c[] cVarArr = {j(jVarArr[0]), j(jVarArr[1]), j(jVarArr[2])};
            int i10 = Integer.MAX_VALUE;
            int i11 = -1;
            for (int i12 = 0; i12 < 3; i12++) {
                int c10 = cVarArr[i12].c();
                if (el.c.v(c10, jVarArr[i12], this.f21636d) && c10 < i10) {
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
        if (el.c.v(j10.c(), l(m(j10.e())), this.f21636d)) {
            return j10;
        }
        throw new r("Data too big for version" + jVar);
    }

    c j(j jVar) {
        int length = this.f21633a.length();
        b[][][] bVarArr = (b[][][]) Array.newInstance(b.class, length + 1, this.f21635c.f(), 4);
        f(jVar, bVarArr, 0, null);
        for (int i10 = 1; i10 <= length; i10++) {
            for (int i11 = 0; i11 < this.f21635c.f(); i11++) {
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
        for (int i16 = 0; i16 < this.f21635c.f(); i16++) {
            for (int i17 = 0; i17 < 4; i17++) {
                b bVar2 = bVarArr[length][i16][i17];
                if (bVar2 != null && bVar2.f21644f < i14) {
                    i14 = bVar2.f21644f;
                    i13 = i16;
                    i15 = i17;
                }
            }
        }
        if (i13 >= 0) {
            return new c(jVar, bVarArr[length][i13][i15]);
        }
        throw new r("Internal error: failed to encode \"" + this.f21633a + "\"");
    }
}
