package oe;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    public static final c f42518q = new c(1, 2, 3, null);

    /* renamed from: r  reason: collision with root package name */
    public static final c f42519r = new b().c(1).b(1).d(2).a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f42520s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f42521t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f42522u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f42523v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    public static final g.a f42524w = new g.a() { // from class: oe.b
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return c.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f42525d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42526e;

    /* renamed from: i  reason: collision with root package name */
    public final int f42527i;

    /* renamed from: o  reason: collision with root package name */
    public final byte[] f42528o;

    /* renamed from: p  reason: collision with root package name */
    private int f42529p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f42530a;

        /* renamed from: b  reason: collision with root package name */
        private int f42531b;

        /* renamed from: c  reason: collision with root package name */
        private int f42532c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f42533d;

        public c a() {
            return new c(this.f42530a, this.f42531b, this.f42532c, this.f42533d);
        }

        public b b(int i10) {
            this.f42531b = i10;
            return this;
        }

        public b c(int i10) {
            this.f42530a = i10;
            return this;
        }

        public b d(int i10) {
            this.f42532c = i10;
            return this;
        }

        public b() {
            this.f42530a = -1;
            this.f42531b = -1;
            this.f42532c = -1;
        }

        private b(c cVar) {
            this.f42530a = cVar.f42525d;
            this.f42531b = cVar.f42526e;
            this.f42532c = cVar.f42527i;
            this.f42533d = cVar.f42528o;
        }
    }

    public c(int i10, int i11, int i12, byte[] bArr) {
        this.f42525d = i10;
        this.f42526e = i11;
        this.f42527i = i12;
        this.f42528o = bArr;
    }

    public static /* synthetic */ c a(Bundle bundle) {
        return new c(bundle.getInt(f42520s, -1), bundle.getInt(f42521t, -1), bundle.getInt(f42522u, -1), bundle.getByteArray(f42523v));
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
            int i10 = cVar.f42527i;
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
            if (this.f42525d == cVar.f42525d && this.f42526e == cVar.f42526e && this.f42527i == cVar.f42527i && Arrays.equals(this.f42528o, cVar.f42528o)) {
                return true;
            }
        }
        return false;
    }

    public boolean g() {
        if (this.f42525d != -1 && this.f42526e != -1 && this.f42527i != -1) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        if (this.f42529p == 0) {
            this.f42529p = ((((((527 + this.f42525d) * 31) + this.f42526e) * 31) + this.f42527i) * 31) + Arrays.hashCode(this.f42528o);
        }
        return this.f42529p;
    }

    public String j() {
        if (!g()) {
            return "NA";
        }
        return w0.D("%s/%s/%s", d(this.f42525d), c(this.f42526e), e(this.f42527i));
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("ColorInfo(");
        sb2.append(d(this.f42525d));
        sb2.append(", ");
        sb2.append(c(this.f42526e));
        sb2.append(", ");
        sb2.append(e(this.f42527i));
        sb2.append(", ");
        if (this.f42528o != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append(")");
        return sb2.toString();
    }
}
