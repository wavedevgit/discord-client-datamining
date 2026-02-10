package com.facebook.hermes.intl;

import java.text.AttributedCharacterIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f10304a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f10305b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f10306c;

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ int[] f10307d;

        /* renamed from: e  reason: collision with root package name */
        static final /* synthetic */ int[] f10308e;

        /* renamed from: f  reason: collision with root package name */
        static final /* synthetic */ int[] f10309f;

        /* renamed from: g  reason: collision with root package name */
        static final /* synthetic */ int[] f10310g;

        /* renamed from: h  reason: collision with root package name */
        static final /* synthetic */ int[] f10311h;

        /* renamed from: i  reason: collision with root package name */
        static final /* synthetic */ int[] f10312i;

        /* renamed from: j  reason: collision with root package name */
        static final /* synthetic */ int[] f10313j;

        /* renamed from: k  reason: collision with root package name */
        static final /* synthetic */ int[] f10314k;

        /* renamed from: l  reason: collision with root package name */
        static final /* synthetic */ int[] f10315l;

        /* renamed from: m  reason: collision with root package name */
        static final /* synthetic */ int[] f10316m;

        static {
            int[] iArr = new int[k.values().length];
            f10316m = iArr;
            try {
                iArr[k.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10316m[k.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f10316m[k.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f10316m[k.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f10316m[k.UNDEFINED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[EnumC0175b.values().length];
            f10315l = iArr2;
            try {
                iArr2[EnumC0175b.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f10315l[EnumC0175b.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f10315l[EnumC0175b.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f10315l[EnumC0175b.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f10315l[EnumC0175b.UNDEFINED.ordinal()] = 5;
            } catch (NoSuchFieldError unused10) {
            }
            int[] iArr3 = new int[l.values().length];
            f10314k = iArr3;
            try {
                iArr3[l.LONG.ordinal()] = 1;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f10314k[l.LONGOFFSET.ordinal()] = 2;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f10314k[l.LONGGENERIC.ordinal()] = 3;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f10314k[l.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f10314k[l.SHORTOFFSET.ordinal()] = 5;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f10314k[l.SHORTGENERIC.ordinal()] = 6;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f10314k[l.UNDEFINED.ordinal()] = 7;
            } catch (NoSuchFieldError unused17) {
            }
            int[] iArr4 = new int[j.values().length];
            f10313j = iArr4;
            try {
                iArr4[j.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused18) {
            }
            try {
                f10313j[j.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                f10313j[j.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused20) {
            }
            int[] iArr5 = new int[h.values().length];
            f10312i = iArr5;
            try {
                iArr5[h.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused21) {
            }
            try {
                f10312i[h.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused22) {
            }
            try {
                f10312i[h.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused23) {
            }
            int[] iArr6 = new int[f.values().length];
            f10311h = iArr6;
            try {
                iArr6[f.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused24) {
            }
            try {
                f10311h[f.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused25) {
            }
            try {
                f10311h[f.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused26) {
            }
            int[] iArr7 = new int[c.values().length];
            f10310g = iArr7;
            try {
                iArr7[c.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused27) {
            }
            try {
                f10310g[c.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused28) {
            }
            try {
                f10310g[c.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused29) {
            }
            int[] iArr8 = new int[i.values().length];
            f10309f = iArr8;
            try {
                iArr8[i.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused30) {
            }
            try {
                f10309f[i.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused31) {
            }
            try {
                f10309f[i.LONG.ordinal()] = 3;
            } catch (NoSuchFieldError unused32) {
            }
            try {
                f10309f[i.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused33) {
            }
            try {
                f10309f[i.NARROW.ordinal()] = 5;
            } catch (NoSuchFieldError unused34) {
            }
            try {
                f10309f[i.UNDEFINED.ordinal()] = 6;
            } catch (NoSuchFieldError unused35) {
            }
            int[] iArr9 = new int[n.values().length];
            f10308e = iArr9;
            try {
                iArr9[n.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused36) {
            }
            try {
                f10308e[n.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused37) {
            }
            try {
                f10308e[n.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused38) {
            }
            int[] iArr10 = new int[d.values().length];
            f10307d = iArr10;
            try {
                iArr10[d.LONG.ordinal()] = 1;
            } catch (NoSuchFieldError unused39) {
            }
            try {
                f10307d[d.SHORT.ordinal()] = 2;
            } catch (NoSuchFieldError unused40) {
            }
            try {
                f10307d[d.NARROW.ordinal()] = 3;
            } catch (NoSuchFieldError unused41) {
            }
            try {
                f10307d[d.UNDEFINED.ordinal()] = 4;
            } catch (NoSuchFieldError unused42) {
            }
            int[] iArr11 = new int[m.values().length];
            f10306c = iArr11;
            try {
                iArr11[m.LONG.ordinal()] = 1;
            } catch (NoSuchFieldError unused43) {
            }
            try {
                f10306c[m.SHORT.ordinal()] = 2;
            } catch (NoSuchFieldError unused44) {
            }
            try {
                f10306c[m.NARROW.ordinal()] = 3;
            } catch (NoSuchFieldError unused45) {
            }
            try {
                f10306c[m.UNDEFINED.ordinal()] = 4;
            } catch (NoSuchFieldError unused46) {
            }
            int[] iArr12 = new int[g.values().length];
            f10305b = iArr12;
            try {
                iArr12[g.H11.ordinal()] = 1;
            } catch (NoSuchFieldError unused47) {
            }
            try {
                f10305b[g.H12.ordinal()] = 2;
            } catch (NoSuchFieldError unused48) {
            }
            try {
                f10305b[g.H23.ordinal()] = 3;
            } catch (NoSuchFieldError unused49) {
            }
            try {
                f10305b[g.H24.ordinal()] = 4;
            } catch (NoSuchFieldError unused50) {
            }
            try {
                f10305b[g.UNDEFINED.ordinal()] = 5;
            } catch (NoSuchFieldError unused51) {
            }
            int[] iArr13 = new int[e.values().length];
            f10304a = iArr13;
            try {
                iArr13[e.BESTFIT.ordinal()] = 1;
            } catch (NoSuchFieldError unused52) {
            }
            try {
                f10304a[e.BASIC.ordinal()] = 2;
            } catch (NoSuchFieldError unused53) {
            }
        }
    }

    /* renamed from: com.facebook.hermes.intl.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0175b {
        FULL,
        LONG,
        MEDIUM,
        SHORT,
        UNDEFINED;

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10315l[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 == 5) {
                                return "";
                            }
                            throw new IllegalArgumentException();
                        }
                        return "short";
                    }
                    return "medium";
                }
                return "long";
            }
            return "full";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum c {
        NUMERIC,
        DIGIT2,
        UNDEFINED;

        public String d() {
            int i10 = a.f10310g[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "dd";
            }
            return "d";
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10310g[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "2-digit";
            }
            return "numeric";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum d {
        LONG,
        SHORT,
        NARROW,
        UNDEFINED;

        public String d() {
            int i10 = a.f10307d[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return "";
                        }
                        throw new IllegalArgumentException();
                    }
                    return "G5";
                }
                return "GGG";
            }
            return "GGGG";
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10307d[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return "";
                        }
                        throw new IllegalArgumentException();
                    }
                    return "narrow";
                }
                return "short";
            }
            return "long";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum e {
        BESTFIT,
        BASIC;

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10304a[ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "basic";
                }
                throw new IllegalArgumentException();
            }
            return "best fit";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum f {
        NUMERIC,
        DIGIT2,
        UNDEFINED;

        public String d() {
            int i10 = a.f10311h[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "hh";
            }
            return "h";
        }

        public String e() {
            int i10 = a.f10311h[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "kk";
            }
            return "k";
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10311h[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "2-digit";
            }
            return "numeric";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum g {
        H11,
        H12,
        H23,
        H24,
        UNDEFINED;

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10305b[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 == 5) {
                                return "";
                            }
                            throw new IllegalArgumentException();
                        }
                        return "h24";
                    }
                    return "h23";
                }
                return "h12";
            }
            return "h11";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum h {
        NUMERIC,
        DIGIT2,
        UNDEFINED;

        public String d() {
            int i10 = a.f10312i[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "mm";
            }
            return "m";
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10312i[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "2-digit";
            }
            return "numeric";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum i {
        NUMERIC,
        DIGIT2,
        LONG,
        SHORT,
        NARROW,
        UNDEFINED;

        public String d() {
            switch (a.f10309f[ordinal()]) {
                case 1:
                    return "M";
                case 2:
                    return "MM";
                case 3:
                    return "MMMM";
                case 4:
                    return "MMM";
                case 5:
                    return "MMMMM";
                case 6:
                    return "";
                default:
                    throw new IllegalArgumentException();
            }
        }

        @Override // java.lang.Enum
        public String toString() {
            switch (a.f10309f[ordinal()]) {
                case 1:
                    return "numeric";
                case 2:
                    return "2-digit";
                case 3:
                    return "long";
                case 4:
                    return "short";
                case 5:
                    return "narrow";
                case 6:
                    return "";
                default:
                    throw new IllegalArgumentException();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum j {
        NUMERIC,
        DIGIT2,
        UNDEFINED;

        public String d() {
            int i10 = a.f10313j[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "ss";
            }
            return "s";
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10313j[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "2-digit";
            }
            return "numeric";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum k {
        FULL,
        LONG,
        MEDIUM,
        SHORT,
        UNDEFINED;

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10316m[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 == 5) {
                                return "";
                            }
                            throw new IllegalArgumentException();
                        }
                        return "short";
                    }
                    return "medium";
                }
                return "long";
            }
            return "full";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum l {
        LONG,
        LONGOFFSET,
        LONGGENERIC,
        SHORT,
        SHORTOFFSET,
        SHORTGENERIC,
        UNDEFINED;

        public String d() {
            switch (a.f10314k[ordinal()]) {
                case 1:
                    return "zzzz";
                case 2:
                    return "OOOO";
                case 3:
                    return "vvvv";
                case 4:
                    return "z";
                case 5:
                    return "O";
                case 6:
                    return "v";
                case 7:
                    return "";
                default:
                    throw new IllegalArgumentException();
            }
        }

        @Override // java.lang.Enum
        public String toString() {
            switch (a.f10314k[ordinal()]) {
                case 1:
                    return "long";
                case 2:
                    return "longOffset";
                case 3:
                    return "longGeneric";
                case 4:
                    return "short";
                case 5:
                    return "shortOffset";
                case 6:
                    return "shortGeneric";
                case 7:
                    return "";
                default:
                    throw new IllegalArgumentException();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum m {
        LONG,
        SHORT,
        NARROW,
        UNDEFINED;

        public String d() {
            int i10 = a.f10306c[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return "";
                        }
                        throw new IllegalArgumentException();
                    }
                    return "EEEEE";
                }
                return "EEE";
            }
            return "EEEE";
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10306c[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return "";
                        }
                        throw new IllegalArgumentException();
                    }
                    return "narrow";
                }
                return "short";
            }
            return "long";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum n {
        NUMERIC,
        DIGIT2,
        UNDEFINED;

        public String d() {
            int i10 = a.f10308e[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "yy";
            }
            return "yyyy";
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10308e[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "";
                    }
                    throw new IllegalArgumentException();
                }
                return "2-digit";
            }
            return "numeric";
        }
    }

    AttributedCharacterIterator a(double d10);

    String b(ea.b bVar);

    String c(double d10);

    g d(ea.b bVar);

    String e(ea.b bVar);

    String f(AttributedCharacterIterator.Attribute attribute, String str);

    String g(ea.b bVar);

    void h(ea.b bVar, String str, String str2, e eVar, m mVar, d dVar, n nVar, i iVar, c cVar, f fVar, h hVar, j jVar, l lVar, g gVar, Object obj, EnumC0175b enumC0175b, k kVar, Object obj2);
}
