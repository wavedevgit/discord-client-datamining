package oe;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    public static final c f41639q = new c(1, 2, 3, null);

    /* renamed from: r  reason: collision with root package name */
    public static final c f41640r = new b().c(1).b(1).d(2).a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f41641s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f41642t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f41643u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f41644v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    public static final g.a f41645w = new g.a() { // from class: oe.b
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return c.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f41646d;

    /* renamed from: e  reason: collision with root package name */
    public final int f41647e;

    /* renamed from: i  reason: collision with root package name */
    public final int f41648i;

    /* renamed from: o  reason: collision with root package name */
    public final byte[] f41649o;

    /* renamed from: p  reason: collision with root package name */
    private int f41650p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f41651a;

        /* renamed from: b  reason: collision with root package name */
        private int f41652b;

        /* renamed from: c  reason: collision with root package name */
        private int f41653c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f41654d;

        public c a() {
            return new c(this.f41651a, this.f41652b, this.f41653c, this.f41654d);
        }

        public b b(int i10) {
            this.f41652b = i10;
            return this;
        }

        public b c(int i10) {
            this.f41651a = i10;
            return this;
        }

        public b d(int i10) {
            this.f41653c = i10;
            return this;
        }

        public b() {
            this.f41651a = -1;
            this.f41652b = -1;
            this.f41653c = -1;
        }

        private b(c cVar) {
            this.f41651a = cVar.f41646d;
            this.f41652b = cVar.f41647e;
            this.f41653c = cVar.f41648i;
            this.f41654d = cVar.f41649o;
        }
    }

    public c(int i10, int i11, int i12, byte[] bArr) {
        this.f41646d = i10;
        this.f41647e = i11;
        this.f41648i = i12;
        this.f41649o = bArr;
    }

    public static /* synthetic */ c a(Bundle bundle) {
        return new c(bundle.getInt(f41641s, -1), bundle.getInt(f41642t, -1), bundle.getInt(f41643u, -1), bundle.getByteArray(f41644v));
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
            int i10 = cVar.f41648i;
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
            if (this.f41646d == cVar.f41646d && this.f41647e == cVar.f41647e && this.f41648i == cVar.f41648i && Arrays.equals(this.f41649o, cVar.f41649o)) {
                return true;
            }
        }
        return false;
    }

    public boolean g() {
        if (this.f41646d != -1 && this.f41647e != -1 && this.f41648i != -1) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        if (this.f41650p == 0) {
            this.f41650p = ((((((527 + this.f41646d) * 31) + this.f41647e) * 31) + this.f41648i) * 31) + Arrays.hashCode(this.f41649o);
        }
        return this.f41650p;
    }

    public String j() {
        if (!g()) {
            return "NA";
        }
        return w0.D("%s/%s/%s", d(this.f41646d), c(this.f41647e), e(this.f41648i));
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("ColorInfo(");
        sb2.append(d(this.f41646d));
        sb2.append(", ");
        sb2.append(c(this.f41647e));
        sb2.append(", ");
        sb2.append(e(this.f41648i));
        sb2.append(", ");
        if (this.f41649o != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append(")");
        return sb2.toString();
    }
}
