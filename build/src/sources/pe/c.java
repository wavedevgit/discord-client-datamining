package pe;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Arrays;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    public static final c f43099q = new c(1, 2, 3, null);

    /* renamed from: r  reason: collision with root package name */
    public static final c f43100r = new b().c(1).b(1).d(2).a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f43101s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f43102t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f43103u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f43104v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    public static final g.a f43105w = new g.a() { // from class: pe.b
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return c.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f43106d;

    /* renamed from: e  reason: collision with root package name */
    public final int f43107e;

    /* renamed from: i  reason: collision with root package name */
    public final int f43108i;

    /* renamed from: o  reason: collision with root package name */
    public final byte[] f43109o;

    /* renamed from: p  reason: collision with root package name */
    private int f43110p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f43111a;

        /* renamed from: b  reason: collision with root package name */
        private int f43112b;

        /* renamed from: c  reason: collision with root package name */
        private int f43113c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f43114d;

        public c a() {
            return new c(this.f43111a, this.f43112b, this.f43113c, this.f43114d);
        }

        public b b(int i10) {
            this.f43112b = i10;
            return this;
        }

        public b c(int i10) {
            this.f43111a = i10;
            return this;
        }

        public b d(int i10) {
            this.f43113c = i10;
            return this;
        }

        public b() {
            this.f43111a = -1;
            this.f43112b = -1;
            this.f43113c = -1;
        }

        private b(c cVar) {
            this.f43111a = cVar.f43106d;
            this.f43112b = cVar.f43107e;
            this.f43113c = cVar.f43108i;
            this.f43114d = cVar.f43109o;
        }
    }

    public c(int i10, int i11, int i12, byte[] bArr) {
        this.f43106d = i10;
        this.f43107e = i11;
        this.f43108i = i12;
        this.f43109o = bArr;
    }

    public static /* synthetic */ c a(Bundle bundle) {
        return new c(bundle.getInt(f43101s, -1), bundle.getInt(f43102t, -1), bundle.getInt(f43103u, -1), bundle.getByteArray(f43104v));
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
            int i10 = cVar.f43108i;
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
            if (this.f43106d == cVar.f43106d && this.f43107e == cVar.f43107e && this.f43108i == cVar.f43108i && Arrays.equals(this.f43109o, cVar.f43109o)) {
                return true;
            }
        }
        return false;
    }

    public boolean g() {
        if (this.f43106d != -1 && this.f43107e != -1 && this.f43108i != -1) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        if (this.f43110p == 0) {
            this.f43110p = ((((((527 + this.f43106d) * 31) + this.f43107e) * 31) + this.f43108i) * 31) + Arrays.hashCode(this.f43109o);
        }
        return this.f43110p;
    }

    public String j() {
        if (!g()) {
            return "NA";
        }
        return w0.D("%s/%s/%s", d(this.f43106d), c(this.f43107e), e(this.f43108i));
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("ColorInfo(");
        sb2.append(d(this.f43106d));
        sb2.append(", ");
        sb2.append(c(this.f43107e));
        sb2.append(", ");
        sb2.append(e(this.f43108i));
        sb2.append(", ");
        if (this.f43109o != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append(")");
        return sb2.toString();
    }
}
