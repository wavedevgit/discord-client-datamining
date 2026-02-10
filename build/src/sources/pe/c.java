package pe;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    public static final c f41557q = new c(1, 2, 3, null);

    /* renamed from: r  reason: collision with root package name */
    public static final c f41558r = new b().c(1).b(1).d(2).a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f41559s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f41560t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f41561u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f41562v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    public static final g.a f41563w = new g.a() { // from class: pe.b
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return c.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f41564d;

    /* renamed from: e  reason: collision with root package name */
    public final int f41565e;

    /* renamed from: i  reason: collision with root package name */
    public final int f41566i;

    /* renamed from: o  reason: collision with root package name */
    public final byte[] f41567o;

    /* renamed from: p  reason: collision with root package name */
    private int f41568p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f41569a;

        /* renamed from: b  reason: collision with root package name */
        private int f41570b;

        /* renamed from: c  reason: collision with root package name */
        private int f41571c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f41572d;

        public c a() {
            return new c(this.f41569a, this.f41570b, this.f41571c, this.f41572d);
        }

        public b b(int i10) {
            this.f41570b = i10;
            return this;
        }

        public b c(int i10) {
            this.f41569a = i10;
            return this;
        }

        public b d(int i10) {
            this.f41571c = i10;
            return this;
        }

        public b() {
            this.f41569a = -1;
            this.f41570b = -1;
            this.f41571c = -1;
        }

        private b(c cVar) {
            this.f41569a = cVar.f41564d;
            this.f41570b = cVar.f41565e;
            this.f41571c = cVar.f41566i;
            this.f41572d = cVar.f41567o;
        }
    }

    public c(int i10, int i11, int i12, byte[] bArr) {
        this.f41564d = i10;
        this.f41565e = i11;
        this.f41566i = i12;
        this.f41567o = bArr;
    }

    public static /* synthetic */ c a(Bundle bundle) {
        return new c(bundle.getInt(f41559s, -1), bundle.getInt(f41560t, -1), bundle.getInt(f41561u, -1), bundle.getByteArray(f41562v));
    }

    private static String c(int i10) {
        if (i10 != -1) {
            if (i10 != 1) {
                if (i10 != 2) {
                    return "Undefined color range";
                }
                return "Limited range";
            }
            return "Full range";
        }
        return "Unset color range";
    }

    private static String d(int i10) {
        if (i10 != -1) {
            if (i10 != 6) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        return "Undefined color space";
                    }
                    return "BT601";
                }
                return "BT709";
            }
            return "BT2020";
        }
        return "Unset color space";
    }

    private static String e(int i10) {
        if (i10 != -1) {
            if (i10 != 10) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            if (i10 != 6) {
                                if (i10 != 7) {
                                    return "Undefined color transfer";
                                }
                                return "HLG";
                            }
                            return "ST2084 PQ";
                        }
                        return "SDR SMPTE 170M";
                    }
                    return "sRGB";
                }
                return "Linear";
            }
            return "Gamma 2.2";
        }
        return "Unset color transfer";
    }

    public static boolean f(c cVar) {
        if (cVar != null) {
            int i10 = cVar.f41566i;
            if (i10 == 7 || i10 == 6) {
                return true;
            }
            return false;
        }
        return false;
    }

    public static int h(int i10) {
        if (i10 == 1) {
            return 1;
        }
        if (i10 == 9) {
            return 6;
        }
        if (i10 != 4 && i10 != 5 && i10 != 6 && i10 != 7) {
            return -1;
        }
        return 2;
    }

    public static int i(int i10) {
        if (i10 != 1) {
            if (i10 != 4) {
                if (i10 != 13) {
                    if (i10 == 16) {
                        return 6;
                    }
                    if (i10 == 18) {
                        return 7;
                    }
                    if (i10 != 6 && i10 != 7) {
                        return -1;
                    }
                    return 3;
                }
                return 2;
            }
            return 10;
        }
        return 3;
    }

    public b b() {
        return new b();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && c.class == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f41564d == cVar.f41564d && this.f41565e == cVar.f41565e && this.f41566i == cVar.f41566i && Arrays.equals(this.f41567o, cVar.f41567o)) {
                return true;
            }
        }
        return false;
    }

    public boolean g() {
        if (this.f41564d != -1 && this.f41565e != -1 && this.f41566i != -1) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        if (this.f41568p == 0) {
            this.f41568p = ((((((527 + this.f41564d) * 31) + this.f41565e) * 31) + this.f41566i) * 31) + Arrays.hashCode(this.f41567o);
        }
        return this.f41568p;
    }

    public String j() {
        if (!g()) {
            return "NA";
        }
        return w0.D("%s/%s/%s", d(this.f41564d), c(this.f41565e), e(this.f41566i));
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("ColorInfo(");
        sb2.append(d(this.f41564d));
        sb2.append(", ");
        sb2.append(c(this.f41565e));
        sb2.append(", ");
        sb2.append(e(this.f41566i));
        sb2.append(", ");
        if (this.f41567o != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append(")");
        return sb2.toString();
    }
}
