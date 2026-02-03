package com.facebook.hermes.intl;

import android.icu.text.MeasureFormat;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.views.scroll.ReactScrollViewHelper;
import java.text.AttributedCharacterIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f9959a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f9960b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f9961c;

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ int[] f9962d;

        /* renamed from: e  reason: collision with root package name */
        static final /* synthetic */ int[] f9963e;

        /* renamed from: f  reason: collision with root package name */
        static final /* synthetic */ int[] f9964f;

        /* renamed from: g  reason: collision with root package name */
        static final /* synthetic */ int[] f9965g;

        static {
            int[] iArr = new int[d.values().length];
            f9965g = iArr;
            try {
                iArr[d.ACCOUNTING.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f9965g[d.STANDARD.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            int[] iArr2 = new int[EnumC0140c.values().length];
            f9964f = iArr2;
            try {
                iArr2[EnumC0140c.SYMBOL.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f9964f[EnumC0140c.NARROWSYMBOL.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f9964f[EnumC0140c.CODE.ordinal()] = 3;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f9964f[EnumC0140c.NAME.ordinal()] = 4;
            } catch (NoSuchFieldError unused6) {
            }
            int[] iArr3 = new int[i.values().length];
            f9963e = iArr3;
            try {
                iArr3[i.SHORT.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f9963e[i.NARROW.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f9963e[i.LONG.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            int[] iArr4 = new int[g.values().length];
            f9962d = iArr4;
            try {
                iArr4[g.AUTO.ordinal()] = 1;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f9962d[g.ALWAYS.ordinal()] = 2;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f9962d[g.NEVER.ordinal()] = 3;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f9962d[g.EXCEPTZERO.ordinal()] = 4;
            } catch (NoSuchFieldError unused13) {
            }
            int[] iArr5 = new int[b.values().length];
            f9961c = iArr5;
            try {
                iArr5[b.SHORT.ordinal()] = 1;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f9961c[b.LONG.ordinal()] = 2;
            } catch (NoSuchFieldError unused15) {
            }
            int[] iArr6 = new int[e.values().length];
            f9960b = iArr6;
            try {
                iArr6[e.STANDARD.ordinal()] = 1;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f9960b[e.SCIENTIFIC.ordinal()] = 2;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                f9960b[e.ENGINEERING.ordinal()] = 3;
            } catch (NoSuchFieldError unused18) {
            }
            try {
                f9960b[e.COMPACT.ordinal()] = 4;
            } catch (NoSuchFieldError unused19) {
            }
            int[] iArr7 = new int[h.values().length];
            f9959a = iArr7;
            try {
                iArr7[h.DECIMAL.ordinal()] = 1;
            } catch (NoSuchFieldError unused20) {
            }
            try {
                f9959a[h.PERCENT.ordinal()] = 2;
            } catch (NoSuchFieldError unused21) {
            }
            try {
                f9959a[h.CURRENCY.ordinal()] = 3;
            } catch (NoSuchFieldError unused22) {
            }
            try {
                f9959a[h.UNIT.ordinal()] = 4;
            } catch (NoSuchFieldError unused23) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum b {
        SHORT,
        LONG;

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f9961c[ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "long";
                }
                throw new IllegalArgumentException();
            }
            return "short";
        }
    }

    /* renamed from: com.facebook.hermes.intl.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum EnumC0140c {
        SYMBOL,
        NARROWSYMBOL,
        CODE,
        NAME;

        public int d() {
            if (a.f9964f[ordinal()] != 4) {
                return 0;
            }
            return 1;
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f9964f[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return StackTraceHelper.NAME_KEY;
                        }
                        throw new IllegalArgumentException();
                    }
                    return "code";
                }
                return "narrowSymbol";
            }
            return "symbol";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum d {
        STANDARD,
        ACCOUNTING;

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f9965g[ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "standard";
                }
                throw new IllegalArgumentException();
            }
            return "accounting";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum e {
        STANDARD,
        SCIENTIFIC,
        ENGINEERING,
        COMPACT;

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f9960b[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return "compact";
                        }
                        throw new IllegalArgumentException();
                    }
                    return "engineering";
                }
                return "scientific";
            }
            return "standard";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum f {
        SIGNIFICANT_DIGITS,
        FRACTION_DIGITS,
        COMPACT_ROUNDING
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum g {
        AUTO,
        ALWAYS,
        NEVER,
        EXCEPTZERO;

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f9962d[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return "exceptZero";
                        }
                        throw new IllegalArgumentException();
                    }
                    return ReactScrollViewHelper.OVER_SCROLL_NEVER;
                }
                return ReactScrollViewHelper.OVER_SCROLL_ALWAYS;
            }
            return "auto";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum h {
        DECIMAL,
        PERCENT,
        CURRENCY,
        UNIT;

        public int d(e eVar, d dVar) {
            int i10 = a.f9959a[ordinal()];
            if (i10 == 2) {
                return 2;
            }
            if (i10 != 3) {
                if (eVar == e.SCIENTIFIC || eVar == e.ENGINEERING) {
                    return 3;
                }
                return 0;
            } else if (dVar == d.ACCOUNTING) {
                return 7;
            } else {
                if (dVar == d.STANDARD) {
                    return 1;
                }
                throw new da.f("Unrecognized formatting style requested.");
            }
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f9959a[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return "unit";
                        }
                        throw new IllegalArgumentException();
                    }
                    return "currency";
                }
                return "percent";
            }
            return "decimal";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum i {
        SHORT,
        NARROW,
        LONG;

        public MeasureFormat.FormatWidth d() {
            int i10 = a.f9963e[ordinal()];
            if (i10 != 2) {
                if (i10 != 3) {
                    return MeasureFormat.FormatWidth.SHORT;
                }
                return MeasureFormat.FormatWidth.WIDE;
            }
            return MeasureFormat.FormatWidth.NARROW;
        }

        @Override // java.lang.Enum
        public String toString() {
            int i10 = a.f9963e[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return "long";
                    }
                    throw new IllegalArgumentException();
                }
                return "narrow";
            }
            return "short";
        }
    }

    AttributedCharacterIterator a(double d10);

    String b(double d10);

    String c(da.b bVar);

    c d(String str, EnumC0140c enumC0140c);

    c e(f fVar, int i10, int i11);

    c f(int i10);

    c g(boolean z10);

    c h(f fVar, int i10, int i11);

    c i(String str, i iVar);

    c j(g gVar);

    c k(da.b bVar, String str, h hVar, d dVar, e eVar, b bVar2);

    String l(AttributedCharacterIterator.Attribute attribute, double d10);
}
