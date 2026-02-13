package pe;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    public static final c f42126q = new c(1, 2, 3, null);

    /* renamed from: r  reason: collision with root package name */
    public static final c f42127r = new b().c(1).b(1).d(2).a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f42128s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f42129t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f42130u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f42131v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    public static final g.a f42132w = new g.a() { // from class: pe.b
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return c.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f42133d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42134e;

    /* renamed from: i  reason: collision with root package name */
    public final int f42135i;

    /* renamed from: o  reason: collision with root package name */
    public final byte[] f42136o;

    /* renamed from: p  reason: collision with root package name */
    private int f42137p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f42138a;

        /* renamed from: b  reason: collision with root package name */
        private int f42139b;

        /* renamed from: c  reason: collision with root package name */
        private int f42140c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f42141d;

        public c a() {
            return new c(this.f42138a, this.f42139b, this.f42140c, this.f42141d);
        }

        public b b(int i10) {
            this.f42139b = i10;
            return this;
        }

        public b c(int i10) {
            this.f42138a = i10;
            return this;
        }

        public b d(int i10) {
            this.f42140c = i10;
            return this;
        }

        public b() {
            this.f42138a = -1;
            this.f42139b = -1;
            this.f42140c = -1;
        }

        private b(c cVar) {
            this.f42138a = cVar.f42133d;
            this.f42139b = cVar.f42134e;
            this.f42140c = cVar.f42135i;
            this.f42141d = cVar.f42136o;
        }
    }

    public c(int i10, int i11, int i12, byte[] bArr) {
        this.f42133d = i10;
        this.f42134e = i11;
        this.f42135i = i12;
        this.f42136o = bArr;
    }

    public static /* synthetic */ c a(Bundle bundle) {
        return new c(bundle.getInt(f42128s, -1), bundle.getInt(f42129t, -1), bundle.getInt(f42130u, -1), bundle.getByteArray(f42131v));
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
            int i10 = cVar.f42135i;
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
            if (this.f42133d == cVar.f42133d && this.f42134e == cVar.f42134e && this.f42135i == cVar.f42135i && Arrays.equals(this.f42136o, cVar.f42136o)) {
                return true;
            }
        }
        return false;
    }

    public boolean g() {
        if (this.f42133d != -1 && this.f42134e != -1 && this.f42135i != -1) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        if (this.f42137p == 0) {
            this.f42137p = ((((((527 + this.f42133d) * 31) + this.f42134e) * 31) + this.f42135i) * 31) + Arrays.hashCode(this.f42136o);
        }
        return this.f42137p;
    }

    public String j() {
        if (!g()) {
            return "NA";
        }
        return w0.D("%s/%s/%s", d(this.f42133d), c(this.f42134e), e(this.f42135i));
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("ColorInfo(");
        sb2.append(d(this.f42133d));
        sb2.append(", ");
        sb2.append(c(this.f42134e));
        sb2.append(", ");
        sb2.append(e(this.f42135i));
        sb2.append(", ");
        if (this.f42136o != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append(")");
        return sb2.toString();
    }
}
