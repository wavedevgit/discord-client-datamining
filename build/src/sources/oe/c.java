package oe;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    public static final c f42462q = new c(1, 2, 3, null);

    /* renamed from: r  reason: collision with root package name */
    public static final c f42463r = new b().c(1).b(1).d(2).a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f42464s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f42465t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f42466u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f42467v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    public static final g.a f42468w = new g.a() { // from class: oe.b
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return c.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f42469d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42470e;

    /* renamed from: i  reason: collision with root package name */
    public final int f42471i;

    /* renamed from: o  reason: collision with root package name */
    public final byte[] f42472o;

    /* renamed from: p  reason: collision with root package name */
    private int f42473p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f42474a;

        /* renamed from: b  reason: collision with root package name */
        private int f42475b;

        /* renamed from: c  reason: collision with root package name */
        private int f42476c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f42477d;

        public c a() {
            return new c(this.f42474a, this.f42475b, this.f42476c, this.f42477d);
        }

        public b b(int i10) {
            this.f42475b = i10;
            return this;
        }

        public b c(int i10) {
            this.f42474a = i10;
            return this;
        }

        public b d(int i10) {
            this.f42476c = i10;
            return this;
        }

        public b() {
            this.f42474a = -1;
            this.f42475b = -1;
            this.f42476c = -1;
        }

        private b(c cVar) {
            this.f42474a = cVar.f42469d;
            this.f42475b = cVar.f42470e;
            this.f42476c = cVar.f42471i;
            this.f42477d = cVar.f42472o;
        }
    }

    public c(int i10, int i11, int i12, byte[] bArr) {
        this.f42469d = i10;
        this.f42470e = i11;
        this.f42471i = i12;
        this.f42472o = bArr;
    }

    public static /* synthetic */ c a(Bundle bundle) {
        return new c(bundle.getInt(f42464s, -1), bundle.getInt(f42465t, -1), bundle.getInt(f42466u, -1), bundle.getByteArray(f42467v));
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
            int i10 = cVar.f42471i;
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
            if (this.f42469d == cVar.f42469d && this.f42470e == cVar.f42470e && this.f42471i == cVar.f42471i && Arrays.equals(this.f42472o, cVar.f42472o)) {
                return true;
            }
        }
        return false;
    }

    public boolean g() {
        if (this.f42469d != -1 && this.f42470e != -1 && this.f42471i != -1) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        if (this.f42473p == 0) {
            this.f42473p = ((((((527 + this.f42469d) * 31) + this.f42470e) * 31) + this.f42471i) * 31) + Arrays.hashCode(this.f42472o);
        }
        return this.f42473p;
    }

    public String j() {
        if (!g()) {
            return "NA";
        }
        return w0.D("%s/%s/%s", d(this.f42469d), c(this.f42470e), e(this.f42471i));
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("ColorInfo(");
        sb2.append(d(this.f42469d));
        sb2.append(", ");
        sb2.append(c(this.f42470e));
        sb2.append(", ");
        sb2.append(e(this.f42471i));
        sb2.append(", ");
        if (this.f42472o != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append(")");
        return sb2.toString();
    }
}
