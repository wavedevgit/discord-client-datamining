package com.facebook.hermes.intl;

import java.text.AttributedCharacterIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f10265a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f10266b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f10267c;

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ int[] f10268d;

        /* renamed from: e  reason: collision with root package name */
        static final /* synthetic */ int[] f10269e;

        /* renamed from: f  reason: collision with root package name */
        static final /* synthetic */ int[] f10270f;

        /* renamed from: g  reason: collision with root package name */
        static final /* synthetic */ int[] f10271g;

        /* renamed from: h  reason: collision with root package name */
        static final /* synthetic */ int[] f10272h;

        /* renamed from: i  reason: collision with root package name */
        static final /* synthetic */ int[] f10273i;

        /* renamed from: j  reason: collision with root package name */
        static final /* synthetic */ int[] f10274j;

        /* renamed from: k  reason: collision with root package name */
        static final /* synthetic */ int[] f10275k;

        /* renamed from: l  reason: collision with root package name */
        static final /* synthetic */ int[] f10276l;

        /* renamed from: m  reason: collision with root package name */
        static final /* synthetic */ int[] f10277m;

        static {
            int[] iArr = new int[k.values().length];
            f10277m = iArr;
            try {
                iArr[k.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f10277m[k.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f10277m[k.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f10277m[k.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f10277m[k.UNDEFINED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[EnumC0155b.values().length];
            f10276l = iArr2;
            try {
                iArr2[EnumC0155b.FULL.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f10276l[EnumC0155b.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f10276l[EnumC0155b.MEDIUM.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f10276l[EnumC0155b.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f10276l[EnumC0155b.UNDEFINED.ordinal()] = 5;
            } catch (NoSuchFieldError unused10) {
            }
            int[] iArr3 = new int[l.values().length];
            f10275k = iArr3;
            try {
                iArr3[l.LONG.ordinal()] = 1;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f10275k[l.LONGOFFSET.ordinal()] = 2;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f10275k[l.LONGGENERIC.ordinal()] = 3;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f10275k[l.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f10275k[l.SHORTOFFSET.ordinal()] = 5;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f10275k[l.SHORTGENERIC.ordinal()] = 6;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f10275k[l.UNDEFINED.ordinal()] = 7;
            } catch (NoSuchFieldError unused17) {
            }
            int[] iArr4 = new int[j.values().length];
            f10274j = iArr4;
            try {
                iArr4[j.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused18) {
            }
            try {
                f10274j[j.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                f10274j[j.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused20) {
            }
            int[] iArr5 = new int[h.values().length];
            f10273i = iArr5;
            try {
                iArr5[h.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused21) {
            }
            try {
                f10273i[h.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused22) {
            }
            try {
                f10273i[h.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused23) {
            }
            int[] iArr6 = new int[f.values().length];
            f10272h = iArr6;
            try {
                iArr6[f.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused24) {
            }
            try {
                f10272h[f.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused25) {
            }
            try {
                f10272h[f.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused26) {
            }
            int[] iArr7 = new int[c.values().length];
            f10271g = iArr7;
            try {
                iArr7[c.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused27) {
            }
            try {
                f10271g[c.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused28) {
            }
            try {
                f10271g[c.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused29) {
            }
            int[] iArr8 = new int[i.values().length];
            f10270f = iArr8;
            try {
                iArr8[i.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused30) {
            }
            try {
                f10270f[i.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused31) {
            }
            try {
                f10270f[i.LONG.ordinal()] = 3;
            } catch (NoSuchFieldError unused32) {
            }
            try {
                f10270f[i.SHORT.ordinal()] = 4;
            } catch (NoSuchFieldError unused33) {
            }
            try {
                f10270f[i.NARROW.ordinal()] = 5;
            } catch (NoSuchFieldError unused34) {
            }
            try {
                f10270f[i.UNDEFINED.ordinal()] = 6;
            } catch (NoSuchFieldError unused35) {
            }
            int[] iArr9 = new int[n.values().length];
            f10269e = iArr9;
            try {
                iArr9[n.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused36) {
            }
            try {
                f10269e[n.DIGIT2.ordinal()] = 2;
            } catch (NoSuchFieldError unused37) {
            }
            try {
                f10269e[n.UNDEFINED.ordinal()] = 3;
            } catch (NoSuchFieldError unused38) {
            }
            int[] iArr10 = new int[d.values().length];
            f10268d = iArr10;
            try {
                iArr10[d.LONG.ordinal()] = 1;
            } catch (NoSuchFieldError unused39) {
            }
            try {
                f10268d[d.SHORT.ordinal()] = 2;
            } catch (NoSuchFieldError unused40) {
            }
            try {
                f10268d[d.NARROW.ordinal()] = 3;
            } catch (NoSuchFieldError unused41) {
            }
            try {
                f10268d[d.UNDEFINED.ordinal()] = 4;
            } catch (NoSuchFieldError unused42) {
            }
            int[] iArr11 = new int[m.values().length];
            f10267c = iArr11;
            try {
                iArr11[m.LONG.ordinal()] = 1;
            } catch (NoSuchFieldError unused43) {
            }
            try {
                f10267c[m.SHORT.ordinal()] = 2;
            } catch (NoSuchFieldError unused44) {
            }
            try {
                f10267c[m.NARROW.ordinal()] = 3;
            } catch (NoSuchFieldError unused45) {
            }
            try {
                f10267c[m.UNDEFINED.ordinal()] = 4;
            } catch (NoSuchFieldError unused46) {
            }
            int[] iArr12 = new int[g.values().length];
            f10266b = iArr12;
            try {
                iArr12[g.H11.ordinal()] = 1;
            } catch (NoSuchFieldError unused47) {
            }
            try {
                f10266b[g.H12.ordinal()] = 2;
            } catch (NoSuchFieldError unused48) {
            }
            try {
                f10266b[g.H23.ordinal()] = 3;
            } catch (NoSuchFieldError unused49) {
            }
            try {
                f10266b[g.H24.ordinal()] = 4;
            } catch (NoSuchFieldError unused50) {
            }
            try {
                f10266b[g.UNDEFINED.ordinal()] = 5;
            } catch (NoSuchFieldError unused51) {
            }
            int[] iArr13 = new int[e.values().length];
            f10265a = iArr13;
            try {
                iArr13[e.BESTFIT.ordinal()] = 1;
            } catch (NoSuchFieldError unused52) {
            }
            try {
                f10265a[e.BASIC.ordinal()] = 2;
            } catch (NoSuchFieldError unused53) {
            }
        }
    }

    /* renamed from: com.facebook.hermes.intl.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0155b {
        FULL,
        LONG,
        MEDIUM,
        SHORT,
        UNDEFINED;

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f10276l[ordinal()];
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
            int i10 = a.f10271g[ordinal()];
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
            int i10 = a.f10271g[ordinal()];
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
            int i10 = a.f10268d[ordinal()];
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
            int i10 = a.f10268d[ordinal()];
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
            int i10 = a.f10265a[ordinal()];
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
            int i10 = a.f10272h[ordinal()];
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
            int i10 = a.f10272h[ordinal()];
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
            int i10 = a.f10272h[ordinal()];
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
            int i10 = a.f10266b[ordinal()];
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
            int i10 = a.f10273i[ordinal()];
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
            int i10 = a.f10273i[ordinal()];
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
            switch (a.f10270f[ordinal()]) {
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
            switch (a.f10270f[ordinal()]) {
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
            int i10 = a.f10274j[ordinal()];
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
            int i10 = a.f10274j[ordinal()];
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
            int i10 = a.f10277m[ordinal()];
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
            switch (a.f10275k[ordinal()]) {
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
            switch (a.f10275k[ordinal()]) {
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
            int i10 = a.f10267c[ordinal()];
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
            int i10 = a.f10267c[ordinal()];
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
            int i10 = a.f10269e[ordinal()];
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
            int i10 = a.f10269e[ordinal()];
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

    String b(double d10);

    String c(da.b bVar);

    String d(da.b bVar);

    String e(AttributedCharacterIterator.Attribute attribute, String str);

    g f(da.b bVar);

    void g(da.b bVar, String str, String str2, e eVar, m mVar, d dVar, n nVar, i iVar, c cVar, f fVar, h hVar, j jVar, l lVar, g gVar, Object obj, EnumC0155b enumC0155b, k kVar, Object obj2);

    String h(da.b bVar);
}
