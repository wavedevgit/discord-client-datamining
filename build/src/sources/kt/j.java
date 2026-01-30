package kt;

import com.facebook.react.views.text.ReactFontManager;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {
    private static final int[] A;
    private static final String[] B;
    private static final int[] C;
    private static final /* synthetic */ j[] D;

    /* renamed from: d  reason: collision with root package name */
    public static final j f36604d;

    /* renamed from: e  reason: collision with root package name */
    public static final j f36605e;

    /* renamed from: i  reason: collision with root package name */
    public static final j f36606i;

    /* renamed from: o  reason: collision with root package name */
    public static final j f36607o;

    /* renamed from: p  reason: collision with root package name */
    public static final j f36608p;

    /* renamed from: q  reason: collision with root package name */
    public static final j f36609q;

    /* renamed from: r  reason: collision with root package name */
    public static final j f36610r;

    /* renamed from: s  reason: collision with root package name */
    public static final j f36611s;

    /* renamed from: t  reason: collision with root package name */
    public static final j f36612t;

    /* renamed from: u  reason: collision with root package name */
    public static final j f36613u;

    /* renamed from: v  reason: collision with root package name */
    public static final j f36614v;

    /* renamed from: w  reason: collision with root package name */
    public static final j f36615w;

    /* renamed from: x  reason: collision with root package name */
    public static final j f36616x;

    /* renamed from: y  reason: collision with root package name */
    public static final j f36617y;

    /* renamed from: z  reason: collision with root package name */
    public static final j f36618z;
    private final String code;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    enum g extends j {
        g(String str, int i10, String str2) {
            super(str, i10, str2, null);
        }

        @Override // kt.j
        public boolean j(char c10) {
            if (c10 >= '0' && c10 <= '9') {
                return true;
            }
            return false;
        }

        @Override // kt.j
        public String l() {
            return "0123456789";
        }

        @Override // kt.j
        public boolean p() {
            return true;
        }

        @Override // kt.j
        public int r(String str, kt.g gVar) {
            int parseInt = Integer.parseInt(str);
            if (parseInt >= 0) {
                return parseInt;
            }
            throw new NumberFormatException("Cannot convert negative number: " + str);
        }

        @Override // kt.j
        public String t(int i10) {
            if (i10 >= 0) {
                return Integer.toString(i10);
            }
            throw new IllegalArgumentException("Cannot convert: " + i10);
        }
    }

    static {
        g gVar = new g("ARABIC", 0, "latn");
        f36604d = gVar;
        j jVar = new j("ARABIC_INDIC", 1, "arab") { // from class: kt.j.h
            @Override // kt.j
            public String l() {
                return "٠١٢٣٤٥٦٧٨٩";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36605e = jVar;
        j jVar2 = new j("ARABIC_INDIC_EXT", 2, "arabext") { // from class: kt.j.i
            @Override // kt.j
            public String l() {
                return "۰۱۲۳۴۵۶۷۸۹";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36606i = jVar2;
        j jVar3 = new j("BENGALI", 3, "beng") { // from class: kt.j.j
            @Override // kt.j
            public String l() {
                return "০১২৩৪৫৬৭৮৯";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36607o = jVar3;
        j jVar4 = new j("DEVANAGARI", 4, "deva") { // from class: kt.j.k
            @Override // kt.j
            public String l() {
                return "०१२३४५६७८९";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36608p = jVar4;
        j jVar5 = new j("DOZENAL", 5, "dozenal") { // from class: kt.j.l
            @Override // kt.j
            public boolean j(char c10) {
                if ((c10 < '0' || c10 > '9') && c10 != 8586 && c10 != 8587) {
                    return false;
                }
                return true;
            }

            @Override // kt.j
            public String l() {
                return "0123456789↊↋";
            }

            @Override // kt.j
            public boolean p() {
                return false;
            }

            @Override // kt.j
            public int r(String str, kt.g gVar2) {
                int parseInt = Integer.parseInt(str.replace((char) 8586, 'a').replace((char) 8587, 'b'), 12);
                if (parseInt >= 0) {
                    return parseInt;
                }
                throw new NumberFormatException("Cannot convert negative number: " + str);
            }

            @Override // kt.j
            public int s(int i10, Appendable appendable) {
                char c10;
                if (i10 >= 0) {
                    int i11 = 1;
                    while (true) {
                        if (i11 <= 4) {
                            if (i10 < j.C[i11]) {
                                break;
                            }
                            i11++;
                        } else {
                            i11 = 0;
                            break;
                        }
                    }
                    if (i11 > 0) {
                        int i12 = i11 - 1;
                        do {
                            int i13 = i10 / j.C[i12];
                            if (i13 == 11) {
                                c10 = 8587;
                            } else if (i13 == 10) {
                                c10 = 8586;
                            } else {
                                c10 = (char) (i13 + 48);
                            }
                            appendable.append(c10);
                            i10 -= i13 * j.C[i12];
                            i12--;
                        } while (i12 >= 0);
                        return i11;
                    }
                }
                return super.s(i10, appendable);
            }

            @Override // kt.j
            public String t(int i10) {
                if (i10 >= 0) {
                    return Integer.toString(i10, 12).replace('a', (char) 8586).replace('b', (char) 8587);
                }
                throw new IllegalArgumentException("Cannot convert: " + i10);
            }
        };
        f36609q = jVar5;
        j jVar6 = new j("ETHIOPIC", 6, "ethiopic") { // from class: kt.j.m
            @Override // kt.j
            public boolean j(char c10) {
                if (c10 >= 4969 && c10 <= 4988) {
                    return true;
                }
                return false;
            }

            @Override // kt.j
            public String l() {
                return "፩፪፫፬፭፮፯፰፱፲፳፴፵፶፷፸፹፺፻፼";
            }

            @Override // kt.j
            public boolean p() {
                return false;
            }

            @Override // kt.j
            public int r(String str, kt.g gVar2) {
                int i10;
                int i11 = 1;
                int i12 = 1;
                boolean z10 = false;
                boolean z11 = false;
                int i13 = 0;
                int i14 = 0;
                for (int length = str.length() - 1; length >= 0; length--) {
                    char charAt = str.charAt(length);
                    if (charAt >= 4969 && charAt < 4978) {
                        i10 = charAt - 4968;
                    } else if (charAt >= 4978 && charAt < 4987) {
                        i10 = (charAt - 4977) * 10;
                    } else {
                        if (charAt == 4988) {
                            if (z10 && i14 == 0) {
                                i14 = 1;
                            }
                            i13 = j.i(i13, i14, i12);
                            if (z10) {
                                i12 *= 100;
                            } else {
                                i12 *= 10000;
                            }
                            z11 = true;
                            z10 = false;
                            i14 = 0;
                        } else if (charAt == 4987) {
                            i13 = j.i(i13, i14, i12);
                            i12 *= 100;
                            z10 = true;
                            z11 = false;
                            i14 = 0;
                        }
                    }
                    i14 += i10;
                }
                if ((!z10 && !z11) || i14 != 0) {
                    i11 = i14;
                }
                return j.i(i13, i11, i12);
            }

            /* JADX WARN: Removed duplicated region for block: B:34:0x006f  */
            /* JADX WARN: Removed duplicated region for block: B:36:0x0074  */
            /* JADX WARN: Removed duplicated region for block: B:38:0x0079  */
            /* JADX WARN: Removed duplicated region for block: B:46:0x007c A[SYNTHETIC] */
            @Override // kt.j
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public java.lang.String t(int r11) {
                /*
                    r10 = this;
                    r0 = 1
                    if (r11 < r0) goto L84
                    java.lang.String r11 = java.lang.String.valueOf(r11)
                    int r1 = r11.length()
                    int r2 = r1 + (-1)
                    int r3 = r2 % 2
                    if (r3 != 0) goto L23
                    java.lang.StringBuilder r2 = new java.lang.StringBuilder
                    r2.<init>()
                    java.lang.String r3 = "0"
                    r2.append(r3)
                    r2.append(r11)
                    java.lang.String r11 = r2.toString()
                    goto L24
                L23:
                    r1 = r2
                L24:
                    java.lang.StringBuilder r2 = new java.lang.StringBuilder
                    r2.<init>()
                    r3 = r1
                L2a:
                    if (r3 < 0) goto L7f
                    int r4 = r1 - r3
                    char r4 = r11.charAt(r4)
                    int r5 = r3 + (-1)
                    int r6 = r1 - r5
                    char r6 = r11.charAt(r6)
                    r7 = 48
                    r8 = 0
                    if (r6 == r7) goto L43
                    int r6 = r6 + 4920
                    char r6 = (char) r6
                    goto L44
                L43:
                    r6 = r8
                L44:
                    if (r4 == r7) goto L4a
                    int r4 = r4 + 4929
                    char r4 = (char) r4
                    goto L4b
                L4a:
                    r4 = r8
                L4b:
                    int r7 = r5 % 4
                    int r7 = r7 / 2
                    r9 = 4987(0x137b, float:6.988E-42)
                    if (r5 == 0) goto L5e
                    if (r7 == 0) goto L5b
                    if (r6 != 0) goto L59
                    if (r4 == 0) goto L5e
                L59:
                    r5 = r9
                    goto L5f
                L5b:
                    r5 = 4988(0x137c, float:6.99E-42)
                    goto L5f
                L5e:
                    r5 = r8
                L5f:
                    r7 = 4969(0x1369, float:6.963E-42)
                    if (r6 != r7) goto L6c
                    if (r4 != 0) goto L6c
                    if (r1 <= r0) goto L6c
                    if (r5 == r9) goto L6d
                    if (r3 != r1) goto L6c
                    goto L6d
                L6c:
                    r8 = r6
                L6d:
                    if (r4 == 0) goto L72
                    r2.append(r4)
                L72:
                    if (r8 == 0) goto L77
                    r2.append(r8)
                L77:
                    if (r5 == 0) goto L7c
                    r2.append(r5)
                L7c:
                    int r3 = r3 + (-2)
                    goto L2a
                L7f:
                    java.lang.String r11 = r2.toString()
                    return r11
                L84:
                    java.lang.IllegalArgumentException r0 = new java.lang.IllegalArgumentException
                    java.lang.StringBuilder r1 = new java.lang.StringBuilder
                    r1.<init>()
                    java.lang.String r2 = "Can only convert positive numbers: "
                    r1.append(r2)
                    r1.append(r11)
                    java.lang.String r11 = r1.toString()
                    r0.<init>(r11)
                    throw r0
                */
                throw new UnsupportedOperationException("Method not decompiled: kt.j.m.t(int):java.lang.String");
            }
        };
        f36610r = jVar6;
        j jVar7 = new j("GUJARATI", 7, "gujr") { // from class: kt.j.n
            @Override // kt.j
            public String l() {
                return "૦૧૨૩૪૫૬૭૮૯";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36611s = jVar7;
        j jVar8 = new j("JAPANESE", 8, "jpan") { // from class: kt.j.o
            @Override // kt.j
            public String l() {
                return "一二三四五六七八九十百千";
            }

            @Override // kt.j
            public boolean p() {
                return false;
            }

            @Override // kt.j
            public int r(String str, kt.g gVar2) {
                boolean z10;
                String l10 = l();
                int i10 = 0;
                int i11 = 0;
                int i12 = 0;
                int i13 = 0;
                for (int length = str.length() - 1; length >= 0; length--) {
                    char charAt = str.charAt(length);
                    if (charAt != 21313) {
                        if (charAt != 21315) {
                            if (charAt != 30334) {
                                int i14 = 0;
                                while (true) {
                                    if (i14 < 9) {
                                        if (l10.charAt(i14) == charAt) {
                                            int i15 = i14 + 1;
                                            if (i13 == 1) {
                                                i11 += i15 * 1000;
                                                i13 = -1;
                                            } else if (i12 == 1) {
                                                i11 += i15 * 100;
                                                i12 = -1;
                                            } else if (i10 == 1) {
                                                i11 += i15 * 10;
                                                i10 = -1;
                                            } else {
                                                i11 += i15;
                                            }
                                            z10 = true;
                                        } else {
                                            i14++;
                                        }
                                    } else {
                                        z10 = false;
                                        break;
                                    }
                                }
                                if (!z10) {
                                    throw new IllegalArgumentException("Invalid Japanese numeral: " + str);
                                }
                            } else if (i12 == 0 && i13 == 0) {
                                i12++;
                            } else {
                                throw new IllegalArgumentException("Invalid Japanese numeral: " + str);
                            }
                        } else if (i13 == 0) {
                            i13++;
                        } else {
                            throw new IllegalArgumentException("Invalid Japanese numeral: " + str);
                        }
                    } else if (i10 == 0 && i12 == 0 && i13 == 0) {
                        i10++;
                    } else {
                        throw new IllegalArgumentException("Invalid Japanese numeral: " + str);
                    }
                }
                if (i10 == 1) {
                    i11 += 10;
                }
                if (i12 == 1) {
                    i11 += 100;
                }
                if (i13 == 1) {
                    return i11 + 1000;
                }
                return i11;
            }

            @Override // kt.j
            public String t(int i10) {
                if (i10 >= 1 && i10 <= 9999) {
                    String l10 = l();
                    int i11 = i10 / 1000;
                    int i12 = i10 % 1000;
                    int i13 = i12 / 100;
                    int i14 = i12 % 100;
                    int i15 = i14 / 10;
                    int i16 = i14 % 10;
                    StringBuilder sb2 = new StringBuilder();
                    if (i11 >= 1) {
                        if (i11 > 1) {
                            sb2.append(l10.charAt(i11 - 1));
                        }
                        sb2.append((char) 21315);
                    }
                    if (i13 >= 1) {
                        if (i13 > 1) {
                            sb2.append(l10.charAt(i13 - 1));
                        }
                        sb2.append((char) 30334);
                    }
                    if (i15 >= 1) {
                        if (i15 > 1) {
                            sb2.append(l10.charAt(i15 - 1));
                        }
                        sb2.append((char) 21313);
                    }
                    if (i16 > 0) {
                        sb2.append(l10.charAt(i16 - 1));
                    }
                    return sb2.toString();
                }
                throw new IllegalArgumentException("Cannot convert: " + i10);
            }
        };
        f36612t = jVar8;
        j jVar9 = new j("KHMER", 9, "khmr") { // from class: kt.j.a
            @Override // kt.j
            public String l() {
                return "០១២៣៤៥៦៧៨៩";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36613u = jVar9;
        j jVar10 = new j("MYANMAR", 10, "mymr") { // from class: kt.j.b
            @Override // kt.j
            public String l() {
                return "၀၁၂၃၄၅၆၇၈၉";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36614v = jVar10;
        j jVar11 = new j("ORYA", 11, "orya") { // from class: kt.j.c
            @Override // kt.j
            public String l() {
                return "୦୧୨୩୪୫୬୭୮୯";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36615w = jVar11;
        j jVar12 = new j("ROMAN", 12, "roman") { // from class: kt.j.d
            @Override // kt.j
            public boolean j(char c10) {
                char upperCase = Character.toUpperCase(c10);
                if (upperCase != 'I' && upperCase != 'V' && upperCase != 'X' && upperCase != 'L' && upperCase != 'C' && upperCase != 'D' && upperCase != 'M') {
                    return false;
                }
                return true;
            }

            @Override // kt.j
            public String l() {
                return "IVXLCDM";
            }

            @Override // kt.j
            public boolean p() {
                return false;
            }

            /* JADX WARN: Code restructure failed: missing block: B:71:0x0016, code lost:
                continue;
             */
            @Override // kt.j
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public int r(java.lang.String r12, kt.g r13) {
                /*
                    Method dump skipped, instructions count: 221
                    To view this dump add '--comments-level debug' option
                */
                throw new UnsupportedOperationException("Method not decompiled: kt.j.d.r(java.lang.String, kt.g):int");
            }

            @Override // kt.j
            public String t(int i10) {
                if (i10 >= 1 && i10 <= 3999) {
                    StringBuilder sb2 = new StringBuilder();
                    for (int i11 = 0; i11 < j.A.length; i11++) {
                        while (i10 >= j.A[i11]) {
                            sb2.append(j.B[i11]);
                            i10 -= j.A[i11];
                        }
                    }
                    return sb2.toString();
                }
                throw new IllegalArgumentException("Out of range (1-3999): " + i10);
            }
        };
        f36616x = jVar12;
        j jVar13 = new j("TELUGU", 13, "telu") { // from class: kt.j.e
            @Override // kt.j
            public String l() {
                return "౦౧౨౩౪౫౬౭౮౯";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36617y = jVar13;
        j jVar14 = new j("THAI", 14, "thai") { // from class: kt.j.f
            @Override // kt.j
            public String l() {
                return "๐๑๒๓๔๕๖๗๘๙";
            }

            @Override // kt.j
            public boolean p() {
                return true;
            }
        };
        f36618z = jVar14;
        D = new j[]{gVar, jVar, jVar2, jVar3, jVar4, jVar5, jVar6, jVar7, jVar8, jVar9, jVar10, jVar11, jVar12, jVar13, jVar14};
        A = new int[]{1000, 900, 500, ReactFontManager.TypefaceStyle.NORMAL, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        B = new String[]{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        C = new int[]{1, 12, 144, 1728, 20736};
    }

    /* synthetic */ j(String str, int i10, String str2, g gVar) {
        this(str, i10, str2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int i(int i10, int i11, int i12) {
        return gt.c.e(i10, gt.c.h(i11, i12));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int o(char c10) {
        if (c10 != 'C') {
            if (c10 != 'D') {
                if (c10 != 'I') {
                    if (c10 != 'V') {
                        if (c10 != 'X') {
                            if (c10 != 'L') {
                                if (c10 == 'M') {
                                    return 1000;
                                }
                                throw new NumberFormatException("Invalid Roman digit: " + c10);
                            }
                            return 50;
                        }
                        return 10;
                    }
                    return 5;
                }
                return 1;
            }
            return 500;
        }
        return 100;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean q(char c10, char c11) {
        if (c10 != 'C') {
            if (c10 != 'I') {
                if (c10 != 'X') {
                    return false;
                }
                if (c11 == 'C' || c11 == 'L') {
                    return true;
                }
                return false;
            } else if (c11 == 'X' || c11 == 'V') {
                return true;
            } else {
                return false;
            }
        } else if (c11 == 'M' || c11 == 'D') {
            return true;
        } else {
            return false;
        }
    }

    public static j valueOf(String str) {
        return (j) Enum.valueOf(j.class, str);
    }

    public static j[] values() {
        return (j[]) D.clone();
    }

    public boolean j(char c10) {
        String l10 = l();
        int length = l10.length();
        for (int i10 = 0; i10 < length; i10++) {
            if (l10.charAt(i10) == c10) {
                return true;
            }
        }
        return false;
    }

    public String k() {
        return this.code;
    }

    public abstract String l();

    public abstract boolean p();

    public int r(String str, kt.g gVar) {
        if (p()) {
            int charAt = l().charAt(0) - '0';
            StringBuilder sb2 = new StringBuilder();
            int length = str.length();
            for (int i10 = 0; i10 < length; i10++) {
                sb2.append((char) (str.charAt(i10) - charAt));
            }
            int parseInt = Integer.parseInt(sb2.toString());
            if (parseInt >= 0) {
                return parseInt;
            }
            throw new NumberFormatException("Cannot convert negative number: " + str);
        }
        throw new NumberFormatException("Cannot convert: " + str);
    }

    public int s(int i10, Appendable appendable) {
        String t10 = t(i10);
        appendable.append(t10);
        return t10.length();
    }

    public String t(int i10) {
        if (p() && i10 >= 0) {
            int charAt = l().charAt(0) - '0';
            String num = Integer.toString(i10);
            StringBuilder sb2 = new StringBuilder();
            int length = num.length();
            for (int i11 = 0; i11 < length; i11++) {
                sb2.append((char) (num.charAt(i11) + charAt));
            }
            return sb2.toString();
        }
        throw new IllegalArgumentException("Cannot convert: " + i10);
    }

    private j(String str, int i10, String str2) {
        this.code = str2;
    }
}
