package com.google.android.exoplayer2;

import android.os.Bundle;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.UUID;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Format implements g {
    public final long A;
    public final int B;
    public final int C;
    public final float D;
    public final int E;
    public final float F;
    public final byte[] G;
    public final int H;
    public final oe.c I;
    public final int J;
    public final int K;
    public final int L;
    public final int M;
    public final int N;
    public final int O;
    public final int P;
    public final int Q;
    public final int R;
    private int S;

    /* renamed from: d  reason: collision with root package name */
    public final String f11576d;

    /* renamed from: e  reason: collision with root package name */
    public final String f11577e;

    /* renamed from: i  reason: collision with root package name */
    public final String f11578i;

    /* renamed from: o  reason: collision with root package name */
    public final int f11579o;

    /* renamed from: p  reason: collision with root package name */
    public final int f11580p;

    /* renamed from: q  reason: collision with root package name */
    public final int f11581q;

    /* renamed from: r  reason: collision with root package name */
    public final int f11582r;

    /* renamed from: s  reason: collision with root package name */
    public final int f11583s;

    /* renamed from: t  reason: collision with root package name */
    public final String f11584t;

    /* renamed from: u  reason: collision with root package name */
    public final Metadata f11585u;

    /* renamed from: v  reason: collision with root package name */
    public final String f11586v;

    /* renamed from: w  reason: collision with root package name */
    public final String f11587w;

    /* renamed from: x  reason: collision with root package name */
    public final int f11588x;

    /* renamed from: y  reason: collision with root package name */
    public final List f11589y;

    /* renamed from: z  reason: collision with root package name */
    public final rc.m f11590z;
    private static final Format T = new b().G();
    private static final String U = ne.w0.B0(0);
    private static final String V = ne.w0.B0(1);
    private static final String W = ne.w0.B0(2);
    private static final String X = ne.w0.B0(3);
    private static final String Y = ne.w0.B0(4);
    private static final String Z = ne.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f11550a0 = ne.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f11551b0 = ne.w0.B0(7);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f11552c0 = ne.w0.B0(8);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f11553d0 = ne.w0.B0(9);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f11554e0 = ne.w0.B0(10);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f11555f0 = ne.w0.B0(11);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f11556g0 = ne.w0.B0(12);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f11557h0 = ne.w0.B0(13);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f11558i0 = ne.w0.B0(14);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f11559j0 = ne.w0.B0(15);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f11560k0 = ne.w0.B0(16);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f11561l0 = ne.w0.B0(17);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f11562m0 = ne.w0.B0(18);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f11563n0 = ne.w0.B0(19);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f11564o0 = ne.w0.B0(20);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f11565p0 = ne.w0.B0(21);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f11566q0 = ne.w0.B0(22);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f11567r0 = ne.w0.B0(23);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f11568s0 = ne.w0.B0(24);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f11569t0 = ne.w0.B0(25);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f11570u0 = ne.w0.B0(26);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f11571v0 = ne.w0.B0(27);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f11572w0 = ne.w0.B0(28);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f11573x0 = ne.w0.B0(29);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f11574y0 = ne.w0.B0(30);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f11575z0 = ne.w0.B0(31);
    public static final g.a A0 = new g.a() { // from class: lc.w
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            Format e10;
            e10 = Format.e(bundle);
            return e10;
        }
    };

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        private int A;
        private int B;
        private int C;
        private int D;
        private int E;
        private int F;

        /* renamed from: a  reason: collision with root package name */
        private String f11591a;

        /* renamed from: b  reason: collision with root package name */
        private String f11592b;

        /* renamed from: c  reason: collision with root package name */
        private String f11593c;

        /* renamed from: d  reason: collision with root package name */
        private int f11594d;

        /* renamed from: e  reason: collision with root package name */
        private int f11595e;

        /* renamed from: f  reason: collision with root package name */
        private int f11596f;

        /* renamed from: g  reason: collision with root package name */
        private int f11597g;

        /* renamed from: h  reason: collision with root package name */
        private String f11598h;

        /* renamed from: i  reason: collision with root package name */
        private Metadata f11599i;

        /* renamed from: j  reason: collision with root package name */
        private String f11600j;

        /* renamed from: k  reason: collision with root package name */
        private String f11601k;

        /* renamed from: l  reason: collision with root package name */
        private int f11602l;

        /* renamed from: m  reason: collision with root package name */
        private List f11603m;

        /* renamed from: n  reason: collision with root package name */
        private rc.m f11604n;

        /* renamed from: o  reason: collision with root package name */
        private long f11605o;

        /* renamed from: p  reason: collision with root package name */
        private int f11606p;

        /* renamed from: q  reason: collision with root package name */
        private int f11607q;

        /* renamed from: r  reason: collision with root package name */
        private float f11608r;

        /* renamed from: s  reason: collision with root package name */
        private int f11609s;

        /* renamed from: t  reason: collision with root package name */
        private float f11610t;

        /* renamed from: u  reason: collision with root package name */
        private byte[] f11611u;

        /* renamed from: v  reason: collision with root package name */
        private int f11612v;

        /* renamed from: w  reason: collision with root package name */
        private oe.c f11613w;

        /* renamed from: x  reason: collision with root package name */
        private int f11614x;

        /* renamed from: y  reason: collision with root package name */
        private int f11615y;

        /* renamed from: z  reason: collision with root package name */
        private int f11616z;

        public Format G() {
            return new Format(this);
        }

        public b H(int i10) {
            this.C = i10;
            return this;
        }

        public b I(int i10) {
            this.f11596f = i10;
            return this;
        }

        public b J(int i10) {
            this.f11614x = i10;
            return this;
        }

        public b K(String str) {
            this.f11598h = str;
            return this;
        }

        public b L(oe.c cVar) {
            this.f11613w = cVar;
            return this;
        }

        public b M(String str) {
            this.f11600j = str;
            return this;
        }

        public b N(int i10) {
            this.F = i10;
            return this;
        }

        public b O(rc.m mVar) {
            this.f11604n = mVar;
            return this;
        }

        public b P(int i10) {
            this.A = i10;
            return this;
        }

        public b Q(int i10) {
            this.B = i10;
            return this;
        }

        public b R(float f10) {
            this.f11608r = f10;
            return this;
        }

        public b S(int i10) {
            this.f11607q = i10;
            return this;
        }

        public b T(int i10) {
            this.f11591a = Integer.toString(i10);
            return this;
        }

        public b U(String str) {
            this.f11591a = str;
            return this;
        }

        public b V(List list) {
            this.f11603m = list;
            return this;
        }

        public b W(String str) {
            this.f11592b = str;
            return this;
        }

        public b X(String str) {
            this.f11593c = str;
            return this;
        }

        public b Y(int i10) {
            this.f11602l = i10;
            return this;
        }

        public b Z(Metadata metadata) {
            this.f11599i = metadata;
            return this;
        }

        public b a0(int i10) {
            this.f11616z = i10;
            return this;
        }

        public b b0(int i10) {
            this.f11597g = i10;
            return this;
        }

        public b c0(float f10) {
            this.f11610t = f10;
            return this;
        }

        public b d0(byte[] bArr) {
            this.f11611u = bArr;
            return this;
        }

        public b e0(int i10) {
            this.f11595e = i10;
            return this;
        }

        public b f0(int i10) {
            this.f11609s = i10;
            return this;
        }

        public b g0(String str) {
            this.f11601k = str;
            return this;
        }

        public b h0(int i10) {
            this.f11615y = i10;
            return this;
        }

        public b i0(int i10) {
            this.f11594d = i10;
            return this;
        }

        public b j0(int i10) {
            this.f11612v = i10;
            return this;
        }

        public b k0(long j10) {
            this.f11605o = j10;
            return this;
        }

        public b l0(int i10) {
            this.D = i10;
            return this;
        }

        public b m0(int i10) {
            this.E = i10;
            return this;
        }

        public b n0(int i10) {
            this.f11606p = i10;
            return this;
        }

        public b() {
            this.f11596f = -1;
            this.f11597g = -1;
            this.f11602l = -1;
            this.f11605o = LongCompanionObject.MAX_VALUE;
            this.f11606p = -1;
            this.f11607q = -1;
            this.f11608r = -1.0f;
            this.f11610t = 1.0f;
            this.f11612v = -1;
            this.f11614x = -1;
            this.f11615y = -1;
            this.f11616z = -1;
            this.C = -1;
            this.D = -1;
            this.E = -1;
            this.F = 0;
        }

        private b(Format format) {
            this.f11591a = format.f11576d;
            this.f11592b = format.f11577e;
            this.f11593c = format.f11578i;
            this.f11594d = format.f11579o;
            this.f11595e = format.f11580p;
            this.f11596f = format.f11581q;
            this.f11597g = format.f11582r;
            this.f11598h = format.f11584t;
            this.f11599i = format.f11585u;
            this.f11600j = format.f11586v;
            this.f11601k = format.f11587w;
            this.f11602l = format.f11588x;
            this.f11603m = format.f11589y;
            this.f11604n = format.f11590z;
            this.f11605o = format.A;
            this.f11606p = format.B;
            this.f11607q = format.C;
            this.f11608r = format.D;
            this.f11609s = format.E;
            this.f11610t = format.F;
            this.f11611u = format.G;
            this.f11612v = format.H;
            this.f11613w = format.I;
            this.f11614x = format.J;
            this.f11615y = format.K;
            this.f11616z = format.L;
            this.A = format.M;
            this.B = format.N;
            this.C = format.O;
            this.D = format.P;
            this.E = format.Q;
            this.F = format.R;
        }
    }

    private static Object d(Object obj, Object obj2) {
        return obj != null ? obj : obj2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Format e(Bundle bundle) {
        b bVar = new b();
        ne.d.c(bundle);
        String string = bundle.getString(U);
        Format format = T;
        bVar.U((String) d(string, format.f11576d)).W((String) d(bundle.getString(V), format.f11577e)).X((String) d(bundle.getString(W), format.f11578i)).i0(bundle.getInt(X, format.f11579o)).e0(bundle.getInt(Y, format.f11580p)).I(bundle.getInt(Z, format.f11581q)).b0(bundle.getInt(f11550a0, format.f11582r)).K((String) d(bundle.getString(f11551b0), format.f11584t)).Z((Metadata) d((Metadata) bundle.getParcelable(f11552c0), format.f11585u)).M((String) d(bundle.getString(f11553d0), format.f11586v)).g0((String) d(bundle.getString(f11554e0), format.f11587w)).Y(bundle.getInt(f11555f0, format.f11588x));
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        while (true) {
            byte[] byteArray = bundle.getByteArray(h(i10));
            if (byteArray == null) {
                break;
            }
            arrayList.add(byteArray);
            i10++;
        }
        b O = bVar.V(arrayList).O((rc.m) bundle.getParcelable(f11557h0));
        String str = f11558i0;
        Format format2 = T;
        O.k0(bundle.getLong(str, format2.A)).n0(bundle.getInt(f11559j0, format2.B)).S(bundle.getInt(f11560k0, format2.C)).R(bundle.getFloat(f11561l0, format2.D)).f0(bundle.getInt(f11562m0, format2.E)).c0(bundle.getFloat(f11563n0, format2.F)).d0(bundle.getByteArray(f11564o0)).j0(bundle.getInt(f11565p0, format2.H));
        Bundle bundle2 = bundle.getBundle(f11566q0);
        if (bundle2 != null) {
            bVar.L((oe.c) oe.c.f41645w.a(bundle2));
        }
        bVar.J(bundle.getInt(f11567r0, format2.J)).h0(bundle.getInt(f11568s0, format2.K)).a0(bundle.getInt(f11569t0, format2.L)).P(bundle.getInt(f11570u0, format2.M)).Q(bundle.getInt(f11571v0, format2.N)).H(bundle.getInt(f11572w0, format2.O)).l0(bundle.getInt(f11574y0, format2.P)).m0(bundle.getInt(f11575z0, format2.Q)).N(bundle.getInt(f11573x0, format2.R));
        return bVar.G();
    }

    private static String h(int i10) {
        return f11556g0 + "_" + Integer.toString(i10, 36);
    }

    public static String i(Format format) {
        if (format == null) {
            return "null";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("id=");
        sb2.append(format.f11576d);
        sb2.append(", mimeType=");
        sb2.append(format.f11587w);
        if (format.f11583s != -1) {
            sb2.append(", bitrate=");
            sb2.append(format.f11583s);
        }
        if (format.f11584t != null) {
            sb2.append(", codecs=");
            sb2.append(format.f11584t);
        }
        if (format.f11590z != null) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            int i10 = 0;
            while (true) {
                rc.m mVar = format.f11590z;
                if (i10 >= mVar.f48886o) {
                    break;
                }
                UUID uuid = mVar.o(i10).f48888e;
                if (uuid.equals(lc.d.f36021b)) {
                    linkedHashSet.add("cenc");
                } else if (uuid.equals(lc.d.f36022c)) {
                    linkedHashSet.add("clearkey");
                } else if (uuid.equals(lc.d.f36024e)) {
                    linkedHashSet.add("playready");
                } else if (uuid.equals(lc.d.f36023d)) {
                    linkedHashSet.add("widevine");
                } else if (uuid.equals(lc.d.f36020a)) {
                    linkedHashSet.add("universal");
                } else {
                    linkedHashSet.add("unknown (" + uuid + ")");
                }
                i10++;
            }
            sb2.append(", drm=[");
            mi.g.d(',').b(sb2, linkedHashSet);
            sb2.append(']');
        }
        if (format.B != -1 && format.C != -1) {
            sb2.append(", res=");
            sb2.append(format.B);
            sb2.append("x");
            sb2.append(format.C);
        }
        oe.c cVar = format.I;
        if (cVar != null && cVar.g()) {
            sb2.append(", color=");
            sb2.append(format.I.j());
        }
        if (format.D != -1.0f) {
            sb2.append(", fps=");
            sb2.append(format.D);
        }
        if (format.J != -1) {
            sb2.append(", channels=");
            sb2.append(format.J);
        }
        if (format.K != -1) {
            sb2.append(", sample_rate=");
            sb2.append(format.K);
        }
        if (format.f11578i != null) {
            sb2.append(", language=");
            sb2.append(format.f11578i);
        }
        if (format.f11577e != null) {
            sb2.append(", label=");
            sb2.append(format.f11577e);
        }
        if (format.f11579o != 0) {
            ArrayList arrayList = new ArrayList();
            if ((format.f11579o & 4) != 0) {
                arrayList.add("auto");
            }
            if ((format.f11579o & 1) != 0) {
                arrayList.add("default");
            }
            if ((format.f11579o & 2) != 0) {
                arrayList.add("forced");
            }
            sb2.append(", selectionFlags=[");
            mi.g.d(',').b(sb2, arrayList);
            sb2.append("]");
        }
        if (format.f11580p != 0) {
            ArrayList arrayList2 = new ArrayList();
            if ((format.f11580p & 1) != 0) {
                arrayList2.add("main");
            }
            if ((format.f11580p & 2) != 0) {
                arrayList2.add("alt");
            }
            if ((format.f11580p & 4) != 0) {
                arrayList2.add("supplementary");
            }
            if ((format.f11580p & 8) != 0) {
                arrayList2.add("commentary");
            }
            if ((format.f11580p & 16) != 0) {
                arrayList2.add("dub");
            }
            if ((format.f11580p & 32) != 0) {
                arrayList2.add("emergency");
            }
            if ((format.f11580p & 64) != 0) {
                arrayList2.add("caption");
            }
            if ((format.f11580p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                arrayList2.add("subtitle");
            }
            if ((format.f11580p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                arrayList2.add("sign");
            }
            if ((format.f11580p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                arrayList2.add("describes-video");
            }
            if ((format.f11580p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                arrayList2.add("describes-music");
            }
            if ((format.f11580p & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                arrayList2.add("enhanced-intelligibility");
            }
            if ((format.f11580p & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                arrayList2.add("transcribes-dialog");
            }
            if ((format.f11580p & 8192) != 0) {
                arrayList2.add("easy-read");
            }
            if ((format.f11580p & 16384) != 0) {
                arrayList2.add("trick-play");
            }
            sb2.append(", roleFlags=[");
            mi.g.d(',').b(sb2, arrayList2);
            sb2.append("]");
        }
        return sb2.toString();
    }

    public b b() {
        return new b();
    }

    public Format c(int i10) {
        return b().N(i10).G();
    }

    public boolean equals(Object obj) {
        int i10;
        if (this == obj) {
            return true;
        }
        if (obj != null && Format.class == obj.getClass()) {
            Format format = (Format) obj;
            int i11 = this.S;
            if ((i11 == 0 || (i10 = format.S) == 0 || i11 == i10) && this.f11579o == format.f11579o && this.f11580p == format.f11580p && this.f11581q == format.f11581q && this.f11582r == format.f11582r && this.f11588x == format.f11588x && this.A == format.A && this.B == format.B && this.C == format.C && this.E == format.E && this.H == format.H && this.J == format.J && this.K == format.K && this.L == format.L && this.M == format.M && this.N == format.N && this.O == format.O && this.P == format.P && this.Q == format.Q && this.R == format.R && Float.compare(this.D, format.D) == 0 && Float.compare(this.F, format.F) == 0 && ne.w0.c(this.f11576d, format.f11576d) && ne.w0.c(this.f11577e, format.f11577e) && ne.w0.c(this.f11584t, format.f11584t) && ne.w0.c(this.f11586v, format.f11586v) && ne.w0.c(this.f11587w, format.f11587w) && ne.w0.c(this.f11578i, format.f11578i) && Arrays.equals(this.G, format.G) && ne.w0.c(this.f11585u, format.f11585u) && ne.w0.c(this.I, format.I) && ne.w0.c(this.f11590z, format.f11590z) && g(format)) {
                return true;
            }
        }
        return false;
    }

    public int f() {
        int i10;
        int i11 = this.B;
        if (i11 == -1 || (i10 = this.C) == -1) {
            return -1;
        }
        return i11 * i10;
    }

    public boolean g(Format format) {
        if (this.f11589y.size() != format.f11589y.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f11589y.size(); i10++) {
            if (!Arrays.equals((byte[]) this.f11589y.get(i10), (byte[]) format.f11589y.get(i10))) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        int hashCode5;
        if (this.S == 0) {
            String str = this.f11576d;
            int i11 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = (527 + hashCode) * 31;
            String str2 = this.f11577e;
            if (str2 != null) {
                i10 = str2.hashCode();
            } else {
                i10 = 0;
            }
            int i13 = (i12 + i10) * 31;
            String str3 = this.f11578i;
            if (str3 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str3.hashCode();
            }
            int i14 = (((((((((i13 + hashCode2) * 31) + this.f11579o) * 31) + this.f11580p) * 31) + this.f11581q) * 31) + this.f11582r) * 31;
            String str4 = this.f11584t;
            if (str4 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str4.hashCode();
            }
            int i15 = (i14 + hashCode3) * 31;
            Metadata metadata = this.f11585u;
            if (metadata == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = metadata.hashCode();
            }
            int i16 = (i15 + hashCode4) * 31;
            String str5 = this.f11586v;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i17 = (i16 + hashCode5) * 31;
            String str6 = this.f11587w;
            if (str6 != null) {
                i11 = str6.hashCode();
            }
            this.S = ((((((((((((((((((((((((((((((((((i17 + i11) * 31) + this.f11588x) * 31) + ((int) this.A)) * 31) + this.B) * 31) + this.C) * 31) + Float.floatToIntBits(this.D)) * 31) + this.E) * 31) + Float.floatToIntBits(this.F)) * 31) + this.H) * 31) + this.J) * 31) + this.K) * 31) + this.L) * 31) + this.M) * 31) + this.N) * 31) + this.O) * 31) + this.P) * 31) + this.Q) * 31) + this.R;
        }
        return this.S;
    }

    public Format j(Format format) {
        String str;
        Metadata b10;
        if (this == format) {
            return this;
        }
        int k10 = ne.c0.k(this.f11587w);
        String str2 = format.f11576d;
        String str3 = format.f11577e;
        if (str3 == null) {
            str3 = this.f11577e;
        }
        String str4 = this.f11578i;
        if ((k10 == 3 || k10 == 1) && (str = format.f11578i) != null) {
            str4 = str;
        }
        int i10 = this.f11581q;
        if (i10 == -1) {
            i10 = format.f11581q;
        }
        int i11 = this.f11582r;
        if (i11 == -1) {
            i11 = format.f11582r;
        }
        String str5 = this.f11584t;
        if (str5 == null) {
            String M = ne.w0.M(format.f11584t, k10);
            if (ne.w0.f1(M).length == 1) {
                str5 = M;
            }
        }
        Metadata metadata = this.f11585u;
        if (metadata == null) {
            b10 = format.f11585u;
        } else {
            b10 = metadata.b(format.f11585u);
        }
        float f10 = this.D;
        if (f10 == -1.0f && k10 == 2) {
            f10 = format.D;
        }
        int i12 = this.f11579o | format.f11579o;
        return b().U(str2).W(str3).X(str4).i0(i12).e0(this.f11580p | format.f11580p).I(i10).b0(i11).K(str5).Z(b10).O(rc.m.l(format.f11590z, this.f11590z)).R(f10).G();
    }

    public String toString() {
        return "Format(" + this.f11576d + ", " + this.f11577e + ", " + this.f11586v + ", " + this.f11587w + ", " + this.f11584t + ", " + this.f11583s + ", " + this.f11578i + ", [" + this.B + ", " + this.C + ", " + this.D + ", " + this.I + "], [" + this.J + ", " + this.K + "])";
    }

    private Format(b bVar) {
        this.f11576d = bVar.f11591a;
        this.f11577e = bVar.f11592b;
        this.f11578i = ne.w0.M0(bVar.f11593c);
        this.f11579o = bVar.f11594d;
        this.f11580p = bVar.f11595e;
        int i10 = bVar.f11596f;
        this.f11581q = i10;
        int i11 = bVar.f11597g;
        this.f11582r = i11;
        this.f11583s = i11 != -1 ? i11 : i10;
        this.f11584t = bVar.f11598h;
        this.f11585u = bVar.f11599i;
        this.f11586v = bVar.f11600j;
        this.f11587w = bVar.f11601k;
        this.f11588x = bVar.f11602l;
        this.f11589y = bVar.f11603m == null ? Collections.EMPTY_LIST : bVar.f11603m;
        rc.m mVar = bVar.f11604n;
        this.f11590z = mVar;
        this.A = bVar.f11605o;
        this.B = bVar.f11606p;
        this.C = bVar.f11607q;
        this.D = bVar.f11608r;
        this.E = bVar.f11609s == -1 ? 0 : bVar.f11609s;
        this.F = bVar.f11610t == -1.0f ? 1.0f : bVar.f11610t;
        this.G = bVar.f11611u;
        this.H = bVar.f11612v;
        this.I = bVar.f11613w;
        this.J = bVar.f11614x;
        this.K = bVar.f11615y;
        this.L = bVar.f11616z;
        this.M = bVar.A == -1 ? 0 : bVar.A;
        this.N = bVar.B != -1 ? bVar.B : 0;
        this.O = bVar.C;
        this.P = bVar.D;
        this.Q = bVar.E;
        if (bVar.F != 0 || mVar == null) {
            this.R = bVar.F;
        } else {
            this.R = 1;
        }
    }
}
