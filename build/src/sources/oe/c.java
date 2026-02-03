package oe;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    public static final c f42662q = new c(1, 2, 3, null);

    /* renamed from: r  reason: collision with root package name */
    public static final c f42663r = new b().c(1).b(1).d(2).a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f42664s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f42665t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f42666u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f42667v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    public static final g.a f42668w = new g.a() { // from class: oe.b
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return c.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f42669d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42670e;

    /* renamed from: i  reason: collision with root package name */
    public final int f42671i;

    /* renamed from: o  reason: collision with root package name */
    public final byte[] f42672o;

    /* renamed from: p  reason: collision with root package name */
    private int f42673p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f42674a;

        /* renamed from: b  reason: collision with root package name */
        private int f42675b;

        /* renamed from: c  reason: collision with root package name */
        private int f42676c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f42677d;

        public c a() {
            return new c(this.f42674a, this.f42675b, this.f42676c, this.f42677d);
        }

        public b b(int i10) {
            this.f42675b = i10;
            return this;
        }

        public b c(int i10) {
            this.f42674a = i10;
            return this;
        }

        public b d(int i10) {
            this.f42676c = i10;
            return this;
        }

        public b() {
            this.f42674a = -1;
            this.f42675b = -1;
            this.f42676c = -1;
        }

        private b(c cVar) {
            this.f42674a = cVar.f42669d;
            this.f42675b = cVar.f42670e;
            this.f42676c = cVar.f42671i;
            this.f42677d = cVar.f42672o;
        }
    }

    public c(int i10, int i11, int i12, byte[] bArr) {
        this.f42669d = i10;
        this.f42670e = i11;
        this.f42671i = i12;
        this.f42672o = bArr;
    }

    public static /* synthetic */ c a(Bundle bundle) {
        return new c(bundle.getInt(f42664s, -1), bundle.getInt(f42665t, -1), bundle.getInt(f42666u, -1), bundle.getByteArray(f42667v));
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
            int i10 = cVar.f42671i;
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
            if (this.f42669d == cVar.f42669d && this.f42670e == cVar.f42670e && this.f42671i == cVar.f42671i && Arrays.equals(this.f42672o, cVar.f42672o)) {
                return true;
            }
        }
        return false;
    }

    public boolean g() {
        if (this.f42669d != -1 && this.f42670e != -1 && this.f42671i != -1) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        if (this.f42673p == 0) {
            this.f42673p = ((((((527 + this.f42669d) * 31) + this.f42670e) * 31) + this.f42671i) * 31) + Arrays.hashCode(this.f42672o);
        }
        return this.f42673p;
    }

    public String j() {
        if (!g()) {
            return "NA";
        }
        return w0.D("%s/%s/%s", d(this.f42669d), c(this.f42670e), e(this.f42671i));
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("ColorInfo(");
        sb2.append(d(this.f42669d));
        sb2.append(", ");
        sb2.append(c(this.f42670e));
        sb2.append(", ");
        sb2.append(e(this.f42671i));
        sb2.append(", ");
        if (this.f42672o != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append(")");
        return sb2.toString();
    }
}
