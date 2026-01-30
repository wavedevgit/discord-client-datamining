package oe;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    public static final c f42534q = new c(1, 2, 3, null);

    /* renamed from: r  reason: collision with root package name */
    public static final c f42535r = new b().c(1).b(1).d(2).a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f42536s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f42537t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f42538u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f42539v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    public static final g.a f42540w = new g.a() { // from class: oe.b
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return c.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f42541d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42542e;

    /* renamed from: i  reason: collision with root package name */
    public final int f42543i;

    /* renamed from: o  reason: collision with root package name */
    public final byte[] f42544o;

    /* renamed from: p  reason: collision with root package name */
    private int f42545p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f42546a;

        /* renamed from: b  reason: collision with root package name */
        private int f42547b;

        /* renamed from: c  reason: collision with root package name */
        private int f42548c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f42549d;

        public c a() {
            return new c(this.f42546a, this.f42547b, this.f42548c, this.f42549d);
        }

        public b b(int i10) {
            this.f42547b = i10;
            return this;
        }

        public b c(int i10) {
            this.f42546a = i10;
            return this;
        }

        public b d(int i10) {
            this.f42548c = i10;
            return this;
        }

        public b() {
            this.f42546a = -1;
            this.f42547b = -1;
            this.f42548c = -1;
        }

        private b(c cVar) {
            this.f42546a = cVar.f42541d;
            this.f42547b = cVar.f42542e;
            this.f42548c = cVar.f42543i;
            this.f42549d = cVar.f42544o;
        }
    }

    public c(int i10, int i11, int i12, byte[] bArr) {
        this.f42541d = i10;
        this.f42542e = i11;
        this.f42543i = i12;
        this.f42544o = bArr;
    }

    public static /* synthetic */ c a(Bundle bundle) {
        return new c(bundle.getInt(f42536s, -1), bundle.getInt(f42537t, -1), bundle.getInt(f42538u, -1), bundle.getByteArray(f42539v));
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
            int i10 = cVar.f42543i;
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
            if (this.f42541d == cVar.f42541d && this.f42542e == cVar.f42542e && this.f42543i == cVar.f42543i && Arrays.equals(this.f42544o, cVar.f42544o)) {
                return true;
            }
        }
        return false;
    }

    public boolean g() {
        if (this.f42541d != -1 && this.f42542e != -1 && this.f42543i != -1) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        if (this.f42545p == 0) {
            this.f42545p = ((((((527 + this.f42541d) * 31) + this.f42542e) * 31) + this.f42543i) * 31) + Arrays.hashCode(this.f42544o);
        }
        return this.f42545p;
    }

    public String j() {
        if (!g()) {
            return "NA";
        }
        return w0.D("%s/%s/%s", d(this.f42541d), c(this.f42542e), e(this.f42543i));
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("ColorInfo(");
        sb2.append(d(this.f42541d));
        sb2.append(", ");
        sb2.append(c(this.f42542e));
        sb2.append(", ");
        sb2.append(e(this.f42543i));
        sb2.append(", ");
        if (this.f42544o != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append(")");
        return sb2.toString();
    }
}
