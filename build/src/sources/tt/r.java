package tt;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r implements h {

    /* renamed from: z  reason: collision with root package name */
    private static final int[] f51103z = {9, 99, 999, 9999, 99999, 999999, 9999999, 99999999, 999999999, Integer.MAX_VALUE};

    /* renamed from: d  reason: collision with root package name */
    private final rt.p f51104d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51105e;

    /* renamed from: i  reason: collision with root package name */
    private final int f51106i;

    /* renamed from: o  reason: collision with root package name */
    private final int f51107o;

    /* renamed from: p  reason: collision with root package name */
    private final x f51108p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f51109q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f51110r;

    /* renamed from: s  reason: collision with root package name */
    private final st.g f51111s;

    /* renamed from: t  reason: collision with root package name */
    private final int f51112t;

    /* renamed from: u  reason: collision with root package name */
    private final char f51113u;

    /* renamed from: v  reason: collision with root package name */
    private final st.j f51114v;

    /* renamed from: w  reason: collision with root package name */
    private final int f51115w;

    /* renamed from: x  reason: collision with root package name */
    private final int f51116x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f51117y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51118a;

        static {
            int[] iArr = new int[x.values().length];
            f51118a = iArr;
            try {
                iArr[x.SHOW_ALWAYS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51118a[x.SHOW_WHEN_BIG_NUMBER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(rt.p pVar, boolean z10, int i10, int i11, x xVar, boolean z11) {
        this(pVar, z10, i10, i11, xVar, z11, 0, '0', st.j.f50218d, st.g.SMART, 0, false);
    }

    private static void b(int i10, Appendable appendable, char c10) {
        int i11 = (i10 * 103) >>> 10;
        appendable.append((char) (i11 + c10));
        appendable.append((char) ((i10 - ((i11 << 3) + (i11 << 1))) + c10));
    }

    private int c(st.j jVar) {
        if (jVar.o()) {
            Class type = this.f51104d.getType();
            if (type == Integer.class) {
                return 10;
            }
            if (type == Long.class) {
                return 18;
            }
            return 9;
        }
        return 100;
    }

    private static int h(int i10) {
        int i11 = 0;
        while (i10 > f51103z[i11]) {
            i11++;
        }
        return i11 + 1;
    }

    @Override // tt.h
    public void a(CharSequence charSequence, s sVar, rt.d dVar, t tVar, boolean z10) {
        int i10;
        st.j jVar;
        char c10;
        int i11;
        boolean z11;
        st.j jVar2;
        char c11;
        st.g gVar;
        boolean z12;
        int i12;
        int i13;
        boolean z13;
        boolean z14;
        int i14;
        int i15;
        long j10;
        int i16;
        int length = charSequence.length();
        int f10 = sVar.f();
        if (z10 && this.f51117y) {
            if (f10 >= length) {
                sVar.k(f10, "Missing digits for: " + this.f51104d.name());
                sVar.n();
                return;
            }
            char charAt = charSequence.charAt(f10);
            if (charAt != '-' && charAt != '+') {
                int i17 = this.f51106i + f10;
                int min = Math.min(length, i17);
                int i18 = f10;
                long j11 = 0;
                while (i18 < min) {
                    int charAt2 = charSequence.charAt(i18) - '0';
                    if (charAt2 < 0 || charAt2 > 9) {
                        break;
                    }
                    j11 = (j11 * 10) + charAt2;
                    i18++;
                }
                if (j11 > 2147483647L) {
                    sVar.k(f10, "Parsed number does not fit into an integer: " + j11);
                    return;
                } else if (i18 >= i17) {
                    tVar.H(this.f51104d, (int) j11);
                    sVar.l(i18);
                    return;
                } else if (i18 == f10) {
                    sVar.k(f10, "Digit expected.");
                    return;
                } else {
                    sVar.k(f10, "Not enough digits found for: " + this.f51104d.name());
                    return;
                }
            }
            sVar.k(f10, "Sign not allowed due to sign policy.");
            return;
        }
        int intValue = z10 ? this.f51115w : ((Integer) dVar.b(st.a.f50176s, 0)).intValue();
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing digits for: " + this.f51104d.name());
            sVar.n();
            return;
        }
        if (this.f51110r) {
            rt.p pVar = this.f51104d;
            if (pVar instanceof ut.a) {
                Integer w10 = ((ut.a) ut.a.class.cast(pVar)).w(charSequence, sVar.e(), dVar, tVar);
                if (!sVar.i()) {
                    if (w10 == null) {
                        sVar.k(f10, "No interpretable value.");
                        return;
                    } else {
                        tVar.I(this.f51104d, w10);
                        return;
                    }
                }
                sVar.k(sVar.c(), "Unparseable element: " + this.f51104d.name());
                return;
            }
        }
        if (z10) {
            st.j jVar3 = this.f51114v;
            boolean o10 = jVar3.o();
            int i19 = this.f51116x;
            i10 = intValue;
            c10 = this.f51113u;
            i11 = i19;
            z11 = o10;
            jVar2 = jVar3;
        } else {
            i10 = intValue;
            st.j jVar4 = (st.j) dVar.b(st.a.f50169l, st.j.f50218d);
            boolean o11 = jVar4.o();
            int c12 = c(jVar4);
            rt.c cVar = st.a.f50170m;
            if (dVar.c(cVar)) {
                c10 = ((Character) dVar.a(cVar)).charValue();
                jVar = jVar4;
            } else if (o11) {
                jVar = jVar4;
                c10 = jVar4.m().charAt(0);
            } else {
                jVar = jVar4;
                c10 = '0';
            }
            i11 = c12;
            z11 = o11;
            jVar2 = jVar;
        }
        if (z10) {
            gVar = this.f51111s;
            c11 = c10;
        } else {
            c11 = c10;
            gVar = (st.g) dVar.b(st.a.f50163f, st.g.SMART);
        }
        if (!z11 || (!this.f51105e && gVar.a())) {
            z12 = true;
            i12 = 1;
            i13 = i11;
        } else {
            int i20 = this.f51106i;
            z12 = true;
            i13 = this.f51107o;
            i12 = i20;
        }
        char charAt3 = charSequence.charAt(f10);
        boolean z15 = z11;
        if (charAt3 != '-' && charAt3 != '+') {
            if (this.f51108p == x.SHOW_ALWAYS && gVar.e()) {
                sVar.k(f10, "Missing sign of number.");
                return;
            }
            z13 = false;
        } else if (this.f51108p == x.SHOW_NEVER && (this.f51105e || gVar.e())) {
            sVar.k(f10, "Sign not allowed due to sign policy.");
            return;
        } else if (this.f51108p == x.SHOW_WHEN_NEGATIVE && charAt3 == '+' && gVar.e()) {
            sVar.k(f10, "Positive sign not allowed due to sign policy.");
            return;
        } else {
            z13 = charAt3 == '-' ? z12 : false;
            f10++;
        }
        int i21 = f10;
        if (f10 >= length) {
            sVar.k(i21, "Missing digits for: " + this.f51104d.name());
            return;
        }
        if (this.f51105e || this.f51112t <= 0 || i10 > 0) {
            z14 = z13;
            i14 = f10;
        } else {
            if (z15) {
                int i22 = f10;
                i16 = 0;
                while (true) {
                    if (i22 >= length) {
                        z14 = z13;
                        i14 = f10;
                        break;
                    }
                    z14 = z13;
                    int charAt4 = charSequence.charAt(i22) - c11;
                    i14 = f10;
                    if (charAt4 < 0 || charAt4 > 9) {
                        break;
                    }
                    i16++;
                    i22++;
                    f10 = i14;
                    z13 = z14;
                }
            } else {
                z14 = z13;
                i14 = f10;
                i16 = 0;
                for (int i23 = i14; i23 < length && jVar2.j(charSequence.charAt(i23)); i23++) {
                    i16++;
                }
            }
            i13 = Math.min(i13, i16 - this.f51112t);
        }
        int i24 = i14 + i12;
        int min2 = Math.min(length, i14 + i13);
        if (z15) {
            j10 = 0;
            i15 = i14;
            while (i15 < min2) {
                int charAt5 = charSequence.charAt(i15) - c11;
                if (charAt5 < 0 || charAt5 > 9) {
                    break;
                }
                j10 = (j10 * 10) + charAt5;
                i15++;
            }
        } else {
            i15 = i14;
            int i25 = 0;
            while (i15 < min2 && jVar2.j(charSequence.charAt(i15))) {
                i25++;
                i15++;
            }
            if (i25 > 0) {
                try {
                    j10 = jVar2.r(charSequence.subSequence(i15 - i25, i15).toString(), gVar);
                } catch (NumberFormatException e10) {
                    sVar.k(i21, e10.getMessage());
                    return;
                }
            } else {
                j10 = 0;
            }
        }
        Class type = this.f51104d.getType();
        if (j10 <= 2147483647L || type != Integer.class) {
            if (i15 < i24) {
                if (i15 == i21) {
                    sVar.k(i21, "Digit expected.");
                    return;
                } else if (this.f51105e || !gVar.a()) {
                    sVar.k(i21, "Not enough digits found for: " + this.f51104d.name());
                    return;
                }
            }
            if (z14) {
                if (j10 == 0 && gVar.e()) {
                    sVar.k(i21 - 1, "Negative zero is not allowed.");
                    return;
                }
                j10 = -j10;
            } else if (this.f51108p == x.SHOW_WHEN_BIG_NUMBER && gVar.e() && z15) {
                if (charAt3 == '+' && i15 <= i24) {
                    sVar.k(i21 - 1, "Positive sign only allowed for big number.");
                } else if (charAt3 != '+' && i15 > i24) {
                    sVar.k(i21, "Positive sign must be present for big number.");
                }
            }
            if (type == Integer.class) {
                tVar.H(this.f51104d, (int) j10);
            } else if (type == Long.class) {
                tVar.I(this.f51104d, Long.valueOf(j10));
            } else if (this.f51104d == net.time4j.f0.D) {
                tVar.H(net.time4j.f0.E, (int) j10);
            } else if (Enum.class.isAssignableFrom(type)) {
                rt.p pVar2 = this.f51104d;
                if (!(pVar2 instanceof st.l ? ((st.l) pVar2).f(tVar, (int) j10) : false)) {
                    if (charAt3 == '-' || charAt3 == '+') {
                        i21--;
                    }
                    sVar.k(i21, "[" + this.f51104d.name() + "] No enum found for value: " + j10);
                    return;
                }
            } else {
                throw new IllegalArgumentException("Not parseable: " + this.f51104d);
            }
            sVar.l(i15);
            return;
        }
        sVar.k(i21, "Parsed number does not fit into an integer: " + j10);
    }

    @Override // tt.h
    public h d(rt.p pVar) {
        if (!this.f51109q && this.f51104d != pVar) {
            return new r(pVar, this.f51105e, this.f51106i, this.f51107o, this.f51108p, false);
        }
        return this;
    }

    @Override // tt.h
    public h e(c cVar, rt.d dVar, int i10) {
        char c10;
        char charAt;
        rt.c cVar2 = st.a.f50169l;
        st.j jVar = st.j.f50218d;
        st.j jVar2 = (st.j) dVar.b(cVar2, jVar);
        rt.c cVar3 = st.a.f50170m;
        boolean z10 = false;
        if (dVar.c(cVar3)) {
            charAt = ((Character) dVar.a(cVar3)).charValue();
        } else if (jVar2.o()) {
            charAt = jVar2.m().charAt(0);
        } else {
            c10 = '0';
            int intValue = ((Integer) dVar.b(st.a.f50176s, 0)).intValue();
            if (jVar2 == jVar && c10 == '0' && this.f51105e && intValue == 0 && this.f51104d.getType() == Integer.class && !this.f51110r) {
                z10 = true;
            }
            return new r(this.f51104d, this.f51105e, this.f51106i, this.f51107o, this.f51108p, this.f51109q, i10, c10, jVar2, (st.g) dVar.b(st.a.f50163f, st.g.SMART), intValue, z10);
        }
        c10 = charAt;
        int intValue2 = ((Integer) dVar.b(st.a.f50176s, 0)).intValue();
        if (jVar2 == jVar) {
            z10 = true;
        }
        return new r(this.f51104d, this.f51105e, this.f51106i, this.f51107o, this.f51108p, this.f51109q, i10, c10, jVar2, (st.g) dVar.b(st.a.f50163f, st.g.SMART), intValue2, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) obj;
            if (this.f51104d.equals(rVar.f51104d) && this.f51105e == rVar.f51105e && this.f51106i == rVar.f51106i && this.f51107o == rVar.f51107o && this.f51108p == rVar.f51108p && this.f51109q == rVar.f51109q) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:127:0x026f  */
    /* JADX WARN: Removed duplicated region for block: B:132:0x0281  */
    /* JADX WARN: Removed duplicated region for block: B:150:0x02cd  */
    @Override // tt.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public int f(rt.o r23, java.lang.Appendable r24, rt.d r25, java.util.Set r26, boolean r27) {
        /*
            Method dump skipped, instructions count: 797
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: tt.r.f(rt.o, java.lang.Appendable, rt.d, java.util.Set, boolean):int");
    }

    @Override // tt.h
    public boolean g() {
        return true;
    }

    @Override // tt.h
    public rt.p getElement() {
        return this.f51104d;
    }

    public int hashCode() {
        return (this.f51104d.hashCode() * 7) + ((this.f51106i + (this.f51107o * 10)) * 31);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(getClass().getName());
        sb2.append("[element=");
        sb2.append(this.f51104d.name());
        sb2.append(", fixed-width-mode=");
        sb2.append(this.f51105e);
        sb2.append(", min-digits=");
        sb2.append(this.f51106i);
        sb2.append(", max-digits=");
        sb2.append(this.f51107o);
        sb2.append(", sign-policy=");
        sb2.append(this.f51108p);
        sb2.append(", protected-mode=");
        sb2.append(this.f51109q);
        sb2.append(']');
        return sb2.toString();
    }

    private r(rt.p pVar, boolean z10, int i10, int i11, x xVar, boolean z11, int i12, char c10, st.j jVar, st.g gVar, int i13, boolean z12) {
        this.f51104d = pVar;
        this.f51105e = z10;
        this.f51106i = i10;
        this.f51107o = i11;
        this.f51108p = xVar;
        this.f51109q = z11;
        this.f51117y = z12;
        if (pVar == null) {
            throw new NullPointerException("Missing element.");
        }
        if (xVar == null) {
            throw new NullPointerException("Missing sign policy.");
        }
        if (i10 < 1) {
            throw new IllegalArgumentException("Not positive: " + i10);
        } else if (i10 > i11) {
            throw new IllegalArgumentException("Max smaller than min: " + i11 + " < " + i10);
        } else if (z10 && i10 != i11) {
            throw new IllegalArgumentException("Variable width in fixed-width-mode: " + i11 + " != " + i10);
        } else if (z10 && xVar != x.SHOW_NEVER) {
            throw new IllegalArgumentException("Sign policy must be SHOW_NEVER in fixed-width-mode.");
        } else {
            int c11 = c(jVar);
            if (jVar.o()) {
                if (i10 > c11) {
                    throw new IllegalArgumentException("Min digits out of range: " + i10);
                } else if (i11 > c11) {
                    throw new IllegalArgumentException("Max digits out of range: " + i11);
                }
            }
            this.f51110r = pVar.name().equals("YEAR_OF_ERA");
            this.f51112t = i12;
            this.f51113u = c10;
            this.f51114v = jVar;
            this.f51111s = gVar;
            this.f51115w = i13;
            this.f51116x = c11;
        }
    }
}
