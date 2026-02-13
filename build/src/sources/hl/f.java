package hl;

import fl.j;
import java.lang.reflect.Array;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import kk.r;
import ok.h;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f27990a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f27991b;

    /* renamed from: c  reason: collision with root package name */
    private final h f27992c;

    /* renamed from: d  reason: collision with root package name */
    private final fl.f f27993d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f27994a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f27995b;

        static {
            int[] iArr = new int[fl.h.values().length];
            f27995b = iArr;
            try {
                iArr[fl.h.KANJI.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f27995b[fl.h.ALPHANUMERIC.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f27995b[fl.h.NUMERIC.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f27995b[fl.h.BYTE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f27995b[fl.h.ECI.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[d.values().length];
            f27994a = iArr2;
            try {
                iArr2[d.SMALL.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f27994a[d.MEDIUM.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f27994a[d.LARGE.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class b {

        /* renamed from: a  reason: collision with root package name */
        private final fl.h f27996a;

        /* renamed from: b  reason: collision with root package name */
        private final int f27997b;

        /* renamed from: c  reason: collision with root package name */
        private final int f27998c;

        /* renamed from: d  reason: collision with root package name */
        private final int f27999d;

        /* renamed from: e  reason: collision with root package name */
        private final b f28000e;

        /* renamed from: f  reason: collision with root package name */
        private final int f28001f;

        /* synthetic */ b(f fVar, fl.h hVar, int i10, int i11, int i12, b bVar, j jVar, a aVar) {
            this(hVar, i10, i11, i12, bVar, jVar);
        }

        private b(fl.h hVar, int i10, int i11, int i12, b bVar, j jVar) {
            this.f27996a = hVar;
            this.f27997b = i10;
            fl.h hVar2 = fl.h.BYTE;
            int i13 = (hVar == hVar2 || bVar == null) ? i11 : bVar.f27998c;
            this.f27998c = i13;
            this.f27999d = i12;
            this.f28000e = bVar;
            boolean z10 = false;
            int i14 = bVar != null ? bVar.f28001f : 0;
            if ((hVar == hVar2 && bVar == null && i13 != 0) || (bVar != null && i13 != bVar.f27998c)) {
                z10 = true;
            }
            i14 = (bVar == null || hVar != bVar.f27996a || z10) ? i14 + hVar.e(jVar) + 4 : i14;
            int i15 = a.f27995b[hVar.ordinal()];
            if (i15 == 1) {
                i14 += 13;
            } else if (i15 == 2) {
                i14 += i12 == 1 ? 6 : 11;
            } else if (i15 == 3) {
                i14 += i12 != 1 ? i12 == 2 ? 7 : 10 : 4;
            } else if (i15 == 4) {
                i14 += f.this.f27992c.b(f.this.f27990a.substring(i10, i12 + i10), i11).length * 8;
                if (z10) {
                    i14 += 12;
                }
            }
            this.f28001f = i14;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class c {

        /* renamed from: a  reason: collision with root package name */
        private final List f28003a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final j f28004b;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public final class a {

            /* renamed from: a  reason: collision with root package name */
            private final fl.h f28006a;

            /* renamed from: b  reason: collision with root package name */
            private final int f28007b;

            /* renamed from: c  reason: collision with root package name */
            private final int f28008c;

            /* renamed from: d  reason: collision with root package name */
            private final int f28009d;

            a(fl.h hVar, int i10, int i11, int i12) {
                this.f28006a = hVar;
                this.f28007b = i10;
                this.f28008c = i11;
                this.f28009d = i12;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public void d(ok.a aVar) {
                aVar.c(this.f28006a.d(), 4);
                if (this.f28009d > 0) {
                    aVar.c(e(), this.f28006a.e(c.this.f28004b));
                }
                if (this.f28006a == fl.h.ECI) {
                    aVar.c(f.this.f27992c.d(this.f28008c), 8);
                } else if (this.f28009d > 0) {
                    String str = f.this.f27990a;
                    int i10 = this.f28007b;
                    hl.c.c(str.substring(i10, this.f28009d + i10), this.f28006a, aVar, f.this.f27992c.c(this.f28008c));
                }
            }

            private int e() {
                if (this.f28006a == fl.h.BYTE) {
                    h hVar = f.this.f27992c;
                    String str = f.this.f27990a;
                    int i10 = this.f28007b;
                    return hVar.b(str.substring(i10, this.f28009d + i10), this.f28008c).length;
                }
                return this.f28009d;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public int f(j jVar) {
                int i10;
                int e10 = this.f28006a.e(jVar);
                int i11 = e10 + 4;
                int i12 = a.f27995b[this.f28006a.ordinal()];
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
                            int i14 = this.f28009d;
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
                        int i17 = this.f28009d;
                        int i18 = i11 + ((i17 / 2) * 11);
                        if (i17 % 2 == 1) {
                            i13 = 6;
                        }
                        return i18 + i13;
                    }
                } else {
                    i10 = this.f28009d * 13;
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
                sb2.append(this.f28006a);
                sb2.append('(');
                if (this.f28006a != fl.h.ECI) {
                    String str = f.this.f27990a;
                    int i10 = this.f28007b;
                    sb2.append(g(str.substring(i10, this.f28009d + i10)));
                } else {
                    sb2.append(f.this.f27992c.c(this.f28008c).displayName());
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
                int i15 = i13 + bVar2.f27999d;
                b bVar3 = bVar2.f28000e;
                if ((bVar2.f27996a == fl.h.BYTE && bVar3 == null && bVar2.f27998c != 0) || (bVar3 != null && bVar2.f27998c != bVar3.f27998c)) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                i10 = z10 ? 1 : i14;
                if (bVar3 != null && bVar3.f27996a == bVar2.f27996a && !z10) {
                    i12 = i15;
                } else {
                    this.f28003a.add(0, new a(bVar2.f27996a, bVar2.f27997b, bVar2.f27998c, i15));
                    i12 = 0;
                }
                if (z10) {
                    this.f28003a.add(0, new a(fl.h.ECI, bVar2.f27997b, bVar2.f27998c, 0));
                }
                i14 = i10;
                bVar2 = bVar3;
                i13 = i12;
            }
            if (f.this.f27991b) {
                a aVar = (a) this.f28003a.get(0);
                if (aVar != null) {
                    fl.h hVar = aVar.f28006a;
                    int i16 = i14;
                    fl.h hVar2 = fl.h.ECI;
                    if (hVar != hVar2 && i16 != 0) {
                        this.f28003a.add(0, new a(hVar2, 0, 0, 0));
                    }
                }
                this.f28003a.add(((a) this.f28003a.get(0)).f28006a == fl.h.ECI ? 1 : 0, new a(fl.h.FNC1_FIRST_POSITION, 0, 0, 0));
            }
            int j10 = jVar.j();
            int i17 = a.f27994a[f.m(jVar).ordinal()];
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
            while (j10 < i11 && !hl.c.v(d10, j.i(j10), f.this.f27993d)) {
                j10++;
            }
            while (j10 > i10 && hl.c.v(d10, j.i(j10 - 1), f.this.f27993d)) {
                j10--;
            }
            this.f28004b = j.i(j10);
        }

        private int d(j jVar) {
            int i10 = 0;
            for (a aVar : this.f28003a) {
                i10 += aVar.f(jVar);
            }
            return i10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void b(ok.a aVar) {
            for (a aVar2 : this.f28003a) {
                aVar2.d(aVar);
            }
        }

        int c() {
            return d(this.f28004b);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public j e() {
            return this.f28004b;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            a aVar = null;
            for (a aVar2 : this.f28003a) {
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
        private final String f28015d;

        d(String str) {
            this.f28015d = str;
        }

        @Override // java.lang.Enum
        public String toString() {
            return this.f28015d;
        }
    }

    f(String str, Charset charset, boolean z10, fl.f fVar) {
        this.f27990a = str;
        this.f27991b = z10;
        this.f27992c = new h(str, charset, -1);
        this.f27993d = fVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c i(String str, j jVar, Charset charset, boolean z10, fl.f fVar) {
        return new f(str, charset, z10, fVar).h(jVar);
    }

    static int k(fl.h hVar) {
        int i10;
        if (hVar == null || (i10 = a.f27995b[hVar.ordinal()]) == 1) {
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
        int i10 = a.f27994a[dVar.ordinal()];
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
        if (hl.c.p(c10) != -1) {
            return true;
        }
        return false;
    }

    static boolean o(char c10) {
        return hl.c.s(String.valueOf(c10));
    }

    static boolean p(char c10) {
        if (c10 >= '0' && c10 <= '9') {
            return true;
        }
        return false;
    }

    void e(b[][][] bVarArr, int i10, b bVar) {
        b[] bVarArr2 = bVarArr[i10 + bVar.f27999d][bVar.f27998c];
        int k10 = k(bVar.f27996a);
        b bVar2 = bVarArr2[k10];
        if (bVar2 != null && bVar2.f28001f <= bVar.f28001f) {
            return;
        }
        bVarArr2[k10] = bVar;
    }

    void f(j jVar, b[][][] bVarArr, int i10, b bVar) {
        int i11;
        int i12;
        int f10 = this.f27992c.f();
        int e10 = this.f27992c.e();
        if (e10 >= 0 && this.f27992c.a(this.f27990a.charAt(i10), e10)) {
            f10 = e10 + 1;
        } else {
            e10 = 0;
        }
        int i13 = f10;
        for (int i14 = e10; i14 < i13; i14++) {
            if (this.f27992c.a(this.f27990a.charAt(i10), i14)) {
                e(bVarArr, i10, new b(this, fl.h.BYTE, i10, i14, 1, bVar, jVar, null));
            }
        }
        fl.h hVar = fl.h.KANJI;
        if (g(hVar, this.f27990a.charAt(i10))) {
            e(bVarArr, i10, new b(this, hVar, i10, 0, 1, bVar, jVar, null));
        }
        int length = this.f27990a.length();
        fl.h hVar2 = fl.h.ALPHANUMERIC;
        int i15 = 2;
        if (g(hVar2, this.f27990a.charAt(i10))) {
            int i16 = i10 + 1;
            if (i16 < length && g(hVar2, this.f27990a.charAt(i16))) {
                i12 = 2;
            } else {
                i12 = 1;
            }
            e(bVarArr, i10, new b(this, hVar2, i10, 0, i12, bVar, jVar, null));
        }
        fl.h hVar3 = fl.h.NUMERIC;
        if (g(hVar3, this.f27990a.charAt(i10))) {
            int i17 = i10 + 1;
            if (i17 < length && g(hVar3, this.f27990a.charAt(i17))) {
                int i18 = i10 + 2;
                if (i18 < length && g(hVar3, this.f27990a.charAt(i18))) {
                    i15 = 3;
                }
                i11 = i15;
            } else {
                i11 = 1;
            }
            e(bVarArr, i10, new b(this, hVar3, i10, 0, i11, bVar, jVar, null));
        }
    }

    boolean g(fl.h hVar, char c10) {
        int i10 = a.f27995b[hVar.ordinal()];
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
                if (hl.c.v(c10, jVarArr[i12], this.f27993d) && c10 < i10) {
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
        if (hl.c.v(j10.c(), l(m(j10.e())), this.f27993d)) {
            return j10;
        }
        throw new r("Data too big for version" + jVar);
    }

    c j(j jVar) {
        int length = this.f27990a.length();
        b[][][] bVarArr = (b[][][]) Array.newInstance(b.class, length + 1, this.f27992c.f(), 4);
        f(jVar, bVarArr, 0, null);
        for (int i10 = 1; i10 <= length; i10++) {
            for (int i11 = 0; i11 < this.f27992c.f(); i11++) {
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
        for (int i16 = 0; i16 < this.f27992c.f(); i16++) {
            for (int i17 = 0; i17 < 4; i17++) {
                b bVar2 = bVarArr[length][i16][i17];
                if (bVar2 != null && bVar2.f28001f < i14) {
                    i14 = bVar2.f28001f;
                    i13 = i16;
                    i15 = i17;
                }
            }
        }
        if (i13 >= 0) {
            return new c(jVar, bVarArr[length][i13][i15]);
        }
        throw new r("Internal error: failed to encode \"" + this.f27990a + "\"");
    }
}
