package oe;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Arrays;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    public static final c f42368q = new c(1, 2, 3, null);

    /* renamed from: r  reason: collision with root package name */
    public static final c f42369r = new b().c(1).b(1).d(2).a();

    /* renamed from: s  reason: collision with root package name */
    private static final String f42370s = w0.B0(0);

    /* renamed from: t  reason: collision with root package name */
    private static final String f42371t = w0.B0(1);

    /* renamed from: u  reason: collision with root package name */
    private static final String f42372u = w0.B0(2);

    /* renamed from: v  reason: collision with root package name */
    private static final String f42373v = w0.B0(3);

    /* renamed from: w  reason: collision with root package name */
    public static final g.a f42374w = new g.a() { // from class: oe.b
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return c.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f42375d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42376e;

    /* renamed from: i  reason: collision with root package name */
    public final int f42377i;

    /* renamed from: o  reason: collision with root package name */
    public final byte[] f42378o;

    /* renamed from: p  reason: collision with root package name */
    private int f42379p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private int f42380a;

        /* renamed from: b  reason: collision with root package name */
        private int f42381b;

        /* renamed from: c  reason: collision with root package name */
        private int f42382c;

        /* renamed from: d  reason: collision with root package name */
        private byte[] f42383d;

        public c a() {
            return new c(this.f42380a, this.f42381b, this.f42382c, this.f42383d);
        }

        public b b(int i10) {
            this.f42381b = i10;
            return this;
        }

        public b c(int i10) {
            this.f42380a = i10;
            return this;
        }

        public b d(int i10) {
            this.f42382c = i10;
            return this;
        }

        public b() {
            this.f42380a = -1;
            this.f42381b = -1;
            this.f42382c = -1;
        }

        private b(c cVar) {
            this.f42380a = cVar.f42375d;
            this.f42381b = cVar.f42376e;
            this.f42382c = cVar.f42377i;
            this.f42383d = cVar.f42378o;
        }
    }

    public c(int i10, int i11, int i12, byte[] bArr) {
        this.f42375d = i10;
        this.f42376e = i11;
        this.f42377i = i12;
        this.f42378o = bArr;
    }

    public static /* synthetic */ c a(Bundle bundle) {
        return new c(bundle.getInt(f42370s, -1), bundle.getInt(f42371t, -1), bundle.getInt(f42372u, -1), bundle.getByteArray(f42373v));
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
            int i10 = cVar.f42377i;
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
            if (this.f42375d == cVar.f42375d && this.f42376e == cVar.f42376e && this.f42377i == cVar.f42377i && Arrays.equals(this.f42378o, cVar.f42378o)) {
                return true;
            }
        }
        return false;
    }

    public boolean g() {
        if (this.f42375d != -1 && this.f42376e != -1 && this.f42377i != -1) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        if (this.f42379p == 0) {
            this.f42379p = ((((((527 + this.f42375d) * 31) + this.f42376e) * 31) + this.f42377i) * 31) + Arrays.hashCode(this.f42378o);
        }
        return this.f42379p;
    }

    public String j() {
        if (!g()) {
            return "NA";
        }
        return w0.D("%s/%s/%s", d(this.f42375d), c(this.f42376e), e(this.f42377i));
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("ColorInfo(");
        sb2.append(d(this.f42375d));
        sb2.append(", ");
        sb2.append(c(this.f42376e));
        sb2.append(", ");
        sb2.append(e(this.f42377i));
        sb2.append(", ");
        if (this.f42378o != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append(")");
        return sb2.toString();
    }
}
