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
    public final String f12695d;

    /* renamed from: e  reason: collision with root package name */
    public final String f12696e;

    /* renamed from: i  reason: collision with root package name */
    public final String f12697i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12698o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12699p;

    /* renamed from: q  reason: collision with root package name */
    public final int f12700q;

    /* renamed from: r  reason: collision with root package name */
    public final int f12701r;

    /* renamed from: s  reason: collision with root package name */
    public final int f12702s;

    /* renamed from: t  reason: collision with root package name */
    public final String f12703t;

    /* renamed from: u  reason: collision with root package name */
    public final Metadata f12704u;

    /* renamed from: v  reason: collision with root package name */
    public final String f12705v;

    /* renamed from: w  reason: collision with root package name */
    public final String f12706w;

    /* renamed from: x  reason: collision with root package name */
    public final int f12707x;

    /* renamed from: y  reason: collision with root package name */
    public final List f12708y;

    /* renamed from: z  reason: collision with root package name */
    public final rc.m f12709z;
    private static final Format T = new b().G();
    private static final String U = ne.w0.B0(0);
    private static final String V = ne.w0.B0(1);
    private static final String W = ne.w0.B0(2);
    private static final String X = ne.w0.B0(3);
    private static final String Y = ne.w0.B0(4);
    private static final String Z = ne.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f12669a0 = ne.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f12670b0 = ne.w0.B0(7);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f12671c0 = ne.w0.B0(8);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f12672d0 = ne.w0.B0(9);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f12673e0 = ne.w0.B0(10);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f12674f0 = ne.w0.B0(11);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f12675g0 = ne.w0.B0(12);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f12676h0 = ne.w0.B0(13);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f12677i0 = ne.w0.B0(14);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f12678j0 = ne.w0.B0(15);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f12679k0 = ne.w0.B0(16);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f12680l0 = ne.w0.B0(17);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f12681m0 = ne.w0.B0(18);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f12682n0 = ne.w0.B0(19);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f12683o0 = ne.w0.B0(20);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f12684p0 = ne.w0.B0(21);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f12685q0 = ne.w0.B0(22);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f12686r0 = ne.w0.B0(23);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f12687s0 = ne.w0.B0(24);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f12688t0 = ne.w0.B0(25);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f12689u0 = ne.w0.B0(26);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f12690v0 = ne.w0.B0(27);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f12691w0 = ne.w0.B0(28);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f12692x0 = ne.w0.B0(29);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f12693y0 = ne.w0.B0(30);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f12694z0 = ne.w0.B0(31);
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
        private String f12710a;

        /* renamed from: b  reason: collision with root package name */
        private String f12711b;

        /* renamed from: c  reason: collision with root package name */
        private String f12712c;

        /* renamed from: d  reason: collision with root package name */
        private int f12713d;

        /* renamed from: e  reason: collision with root package name */
        private int f12714e;

        /* renamed from: f  reason: collision with root package name */
        private int f12715f;

        /* renamed from: g  reason: collision with root package name */
        private int f12716g;

        /* renamed from: h  reason: collision with root package name */
        private String f12717h;

        /* renamed from: i  reason: collision with root package name */
        private Metadata f12718i;

        /* renamed from: j  reason: collision with root package name */
        private String f12719j;

        /* renamed from: k  reason: collision with root package name */
        private String f12720k;

        /* renamed from: l  reason: collision with root package name */
        private int f12721l;

        /* renamed from: m  reason: collision with root package name */
        private List f12722m;

        /* renamed from: n  reason: collision with root package name */
        private rc.m f12723n;

        /* renamed from: o  reason: collision with root package name */
        private long f12724o;

        /* renamed from: p  reason: collision with root package name */
        private int f12725p;

        /* renamed from: q  reason: collision with root package name */
        private int f12726q;

        /* renamed from: r  reason: collision with root package name */
        private float f12727r;

        /* renamed from: s  reason: collision with root package name */
        private int f12728s;

        /* renamed from: t  reason: collision with root package name */
        private float f12729t;

        /* renamed from: u  reason: collision with root package name */
        private byte[] f12730u;

        /* renamed from: v  reason: collision with root package name */
        private int f12731v;

        /* renamed from: w  reason: collision with root package name */
        private oe.c f12732w;

        /* renamed from: x  reason: collision with root package name */
        private int f12733x;

        /* renamed from: y  reason: collision with root package name */
        private int f12734y;

        /* renamed from: z  reason: collision with root package name */
        private int f12735z;

        public Format G() {
            return new Format(this);
        }

        public b H(int i10) {
            this.C = i10;
            return this;
        }

        public b I(int i10) {
            this.f12715f = i10;
            return this;
        }

        public b J(int i10) {
            this.f12733x = i10;
            return this;
        }

        public b K(String str) {
            this.f12717h = str;
            return this;
        }

        public b L(oe.c cVar) {
            this.f12732w = cVar;
            return this;
        }

        public b M(String str) {
            this.f12719j = str;
            return this;
        }

        public b N(int i10) {
            this.F = i10;
            return this;
        }

        public b O(rc.m mVar) {
            this.f12723n = mVar;
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
            this.f12727r = f10;
            return this;
        }

        public b S(int i10) {
            this.f12726q = i10;
            return this;
        }

        public b T(int i10) {
            this.f12710a = Integer.toString(i10);
            return this;
        }

        public b U(String str) {
            this.f12710a = str;
            return this;
        }

        public b V(List list) {
            this.f12722m = list;
            return this;
        }

        public b W(String str) {
            this.f12711b = str;
            return this;
        }

        public b X(String str) {
            this.f12712c = str;
            return this;
        }

        public b Y(int i10) {
            this.f12721l = i10;
            return this;
        }

        public b Z(Metadata metadata) {
            this.f12718i = metadata;
            return this;
        }

        public b a0(int i10) {
            this.f12735z = i10;
            return this;
        }

        public b b0(int i10) {
            this.f12716g = i10;
            return this;
        }

        public b c0(float f10) {
            this.f12729t = f10;
            return this;
        }

        public b d0(byte[] bArr) {
            this.f12730u = bArr;
            return this;
        }

        public b e0(int i10) {
            this.f12714e = i10;
            return this;
        }

        public b f0(int i10) {
            this.f12728s = i10;
            return this;
        }

        public b g0(String str) {
            this.f12720k = str;
            return this;
        }

        public b h0(int i10) {
            this.f12734y = i10;
            return this;
        }

        public b i0(int i10) {
            this.f12713d = i10;
            return this;
        }

        public b j0(int i10) {
            this.f12731v = i10;
            return this;
        }

        public b k0(long j10) {
            this.f12724o = j10;
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
            this.f12725p = i10;
            return this;
        }

        public b() {
            this.f12715f = -1;
            this.f12716g = -1;
            this.f12721l = -1;
            this.f12724o = LongCompanionObject.MAX_VALUE;
            this.f12725p = -1;
            this.f12726q = -1;
            this.f12727r = -1.0f;
            this.f12729t = 1.0f;
            this.f12731v = -1;
            this.f12733x = -1;
            this.f12734y = -1;
            this.f12735z = -1;
            this.C = -1;
            this.D = -1;
            this.E = -1;
            this.F = 0;
        }

        private b(Format format) {
            this.f12710a = format.f12695d;
            this.f12711b = format.f12696e;
            this.f12712c = format.f12697i;
            this.f12713d = format.f12698o;
            this.f12714e = format.f12699p;
            this.f12715f = format.f12700q;
            this.f12716g = format.f12701r;
            this.f12717h = format.f12703t;
            this.f12718i = format.f12704u;
            this.f12719j = format.f12705v;
            this.f12720k = format.f12706w;
            this.f12721l = format.f12707x;
            this.f12722m = format.f12708y;
            this.f12723n = format.f12709z;
            this.f12724o = format.A;
            this.f12725p = format.B;
            this.f12726q = format.C;
            this.f12727r = format.D;
            this.f12728s = format.E;
            this.f12729t = format.F;
            this.f12730u = format.G;
            this.f12731v = format.H;
            this.f12732w = format.I;
            this.f12733x = format.J;
            this.f12734y = format.K;
            this.f12735z = format.L;
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
        bVar.U((String) d(string, format.f12695d)).W((String) d(bundle.getString(V), format.f12696e)).X((String) d(bundle.getString(W), format.f12697i)).i0(bundle.getInt(X, format.f12698o)).e0(bundle.getInt(Y, format.f12699p)).I(bundle.getInt(Z, format.f12700q)).b0(bundle.getInt(f12669a0, format.f12701r)).K((String) d(bundle.getString(f12670b0), format.f12703t)).Z((Metadata) d((Metadata) bundle.getParcelable(f12671c0), format.f12704u)).M((String) d(bundle.getString(f12672d0), format.f12705v)).g0((String) d(bundle.getString(f12673e0), format.f12706w)).Y(bundle.getInt(f12674f0, format.f12707x));
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
        b O = bVar.V(arrayList).O((rc.m) bundle.getParcelable(f12676h0));
        String str = f12677i0;
        Format format2 = T;
        O.k0(bundle.getLong(str, format2.A)).n0(bundle.getInt(f12678j0, format2.B)).S(bundle.getInt(f12679k0, format2.C)).R(bundle.getFloat(f12680l0, format2.D)).f0(bundle.getInt(f12681m0, format2.E)).c0(bundle.getFloat(f12682n0, format2.F)).d0(bundle.getByteArray(f12683o0)).j0(bundle.getInt(f12684p0, format2.H));
        Bundle bundle2 = bundle.getBundle(f12685q0);
        if (bundle2 != null) {
            bVar.L((oe.c) oe.c.f42540w.a(bundle2));
        }
        bVar.J(bundle.getInt(f12686r0, format2.J)).h0(bundle.getInt(f12687s0, format2.K)).a0(bundle.getInt(f12688t0, format2.L)).P(bundle.getInt(f12689u0, format2.M)).Q(bundle.getInt(f12690v0, format2.N)).H(bundle.getInt(f12691w0, format2.O)).l0(bundle.getInt(f12693y0, format2.P)).m0(bundle.getInt(f12694z0, format2.Q)).N(bundle.getInt(f12692x0, format2.R));
        return bVar.G();
    }

    private static String h(int i10) {
        return f12675g0 + "_" + Integer.toString(i10, 36);
    }

    public static String i(Format format) {
        if (format == null) {
            return "null";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("id=");
        sb2.append(format.f12695d);
        sb2.append(", mimeType=");
        sb2.append(format.f12706w);
        if (format.f12702s != -1) {
            sb2.append(", bitrate=");
            sb2.append(format.f12702s);
        }
        if (format.f12703t != null) {
            sb2.append(", codecs=");
            sb2.append(format.f12703t);
        }
        if (format.f12709z != null) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            int i10 = 0;
            while (true) {
                rc.m mVar = format.f12709z;
                if (i10 >= mVar.f48236o) {
                    break;
                }
                UUID uuid = mVar.k(i10).f48238e;
                if (uuid.equals(lc.d.f37070b)) {
                    linkedHashSet.add("cenc");
                } else if (uuid.equals(lc.d.f37071c)) {
                    linkedHashSet.add("clearkey");
                } else if (uuid.equals(lc.d.f37073e)) {
                    linkedHashSet.add("playready");
                } else if (uuid.equals(lc.d.f37072d)) {
                    linkedHashSet.add("widevine");
                } else if (uuid.equals(lc.d.f37069a)) {
                    linkedHashSet.add("universal");
                } else {
                    linkedHashSet.add("unknown (" + uuid + ")");
                }
                i10++;
            }
            sb2.append(", drm=[");
            ii.g.d(',').b(sb2, linkedHashSet);
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
        if (format.f12697i != null) {
            sb2.append(", language=");
            sb2.append(format.f12697i);
        }
        if (format.f12696e != null) {
            sb2.append(", label=");
            sb2.append(format.f12696e);
        }
        if (format.f12698o != 0) {
            ArrayList arrayList = new ArrayList();
            if ((format.f12698o & 4) != 0) {
                arrayList.add("auto");
            }
            if ((format.f12698o & 1) != 0) {
                arrayList.add("default");
            }
            if ((format.f12698o & 2) != 0) {
                arrayList.add("forced");
            }
            sb2.append(", selectionFlags=[");
            ii.g.d(',').b(sb2, arrayList);
            sb2.append("]");
        }
        if (format.f12699p != 0) {
            ArrayList arrayList2 = new ArrayList();
            if ((format.f12699p & 1) != 0) {
                arrayList2.add("main");
            }
            if ((format.f12699p & 2) != 0) {
                arrayList2.add("alt");
            }
            if ((format.f12699p & 4) != 0) {
                arrayList2.add("supplementary");
            }
            if ((format.f12699p & 8) != 0) {
                arrayList2.add("commentary");
            }
            if ((format.f12699p & 16) != 0) {
                arrayList2.add("dub");
            }
            if ((format.f12699p & 32) != 0) {
                arrayList2.add("emergency");
            }
            if ((format.f12699p & 64) != 0) {
                arrayList2.add("caption");
            }
            if ((format.f12699p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                arrayList2.add("subtitle");
            }
            if ((format.f12699p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                arrayList2.add("sign");
            }
            if ((format.f12699p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                arrayList2.add("describes-video");
            }
            if ((format.f12699p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                arrayList2.add("describes-music");
            }
            if ((format.f12699p & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                arrayList2.add("enhanced-intelligibility");
            }
            if ((format.f12699p & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                arrayList2.add("transcribes-dialog");
            }
            if ((format.f12699p & 8192) != 0) {
                arrayList2.add("easy-read");
            }
            if ((format.f12699p & 16384) != 0) {
                arrayList2.add("trick-play");
            }
            sb2.append(", roleFlags=[");
            ii.g.d(',').b(sb2, arrayList2);
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
            if ((i11 == 0 || (i10 = format.S) == 0 || i11 == i10) && this.f12698o == format.f12698o && this.f12699p == format.f12699p && this.f12700q == format.f12700q && this.f12701r == format.f12701r && this.f12707x == format.f12707x && this.A == format.A && this.B == format.B && this.C == format.C && this.E == format.E && this.H == format.H && this.J == format.J && this.K == format.K && this.L == format.L && this.M == format.M && this.N == format.N && this.O == format.O && this.P == format.P && this.Q == format.Q && this.R == format.R && Float.compare(this.D, format.D) == 0 && Float.compare(this.F, format.F) == 0 && ne.w0.c(this.f12695d, format.f12695d) && ne.w0.c(this.f12696e, format.f12696e) && ne.w0.c(this.f12703t, format.f12703t) && ne.w0.c(this.f12705v, format.f12705v) && ne.w0.c(this.f12706w, format.f12706w) && ne.w0.c(this.f12697i, format.f12697i) && Arrays.equals(this.G, format.G) && ne.w0.c(this.f12704u, format.f12704u) && ne.w0.c(this.I, format.I) && ne.w0.c(this.f12709z, format.f12709z) && g(format)) {
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
        if (this.f12708y.size() != format.f12708y.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f12708y.size(); i10++) {
            if (!Arrays.equals((byte[]) this.f12708y.get(i10), (byte[]) format.f12708y.get(i10))) {
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
            String str = this.f12695d;
            int i11 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = (527 + hashCode) * 31;
            String str2 = this.f12696e;
            if (str2 != null) {
                i10 = str2.hashCode();
            } else {
                i10 = 0;
            }
            int i13 = (i12 + i10) * 31;
            String str3 = this.f12697i;
            if (str3 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str3.hashCode();
            }
            int i14 = (((((((((i13 + hashCode2) * 31) + this.f12698o) * 31) + this.f12699p) * 31) + this.f12700q) * 31) + this.f12701r) * 31;
            String str4 = this.f12703t;
            if (str4 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str4.hashCode();
            }
            int i15 = (i14 + hashCode3) * 31;
            Metadata metadata = this.f12704u;
            if (metadata == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = metadata.hashCode();
            }
            int i16 = (i15 + hashCode4) * 31;
            String str5 = this.f12705v;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i17 = (i16 + hashCode5) * 31;
            String str6 = this.f12706w;
            if (str6 != null) {
                i11 = str6.hashCode();
            }
            this.S = ((((((((((((((((((((((((((((((((((i17 + i11) * 31) + this.f12707x) * 31) + ((int) this.A)) * 31) + this.B) * 31) + this.C) * 31) + Float.floatToIntBits(this.D)) * 31) + this.E) * 31) + Float.floatToIntBits(this.F)) * 31) + this.H) * 31) + this.J) * 31) + this.K) * 31) + this.L) * 31) + this.M) * 31) + this.N) * 31) + this.O) * 31) + this.P) * 31) + this.Q) * 31) + this.R;
        }
        return this.S;
    }

    public Format j(Format format) {
        String str;
        Metadata b10;
        if (this == format) {
            return this;
        }
        int k10 = ne.c0.k(this.f12706w);
        String str2 = format.f12695d;
        String str3 = format.f12696e;
        if (str3 == null) {
            str3 = this.f12696e;
        }
        String str4 = this.f12697i;
        if ((k10 == 3 || k10 == 1) && (str = format.f12697i) != null) {
            str4 = str;
        }
        int i10 = this.f12700q;
        if (i10 == -1) {
            i10 = format.f12700q;
        }
        int i11 = this.f12701r;
        if (i11 == -1) {
            i11 = format.f12701r;
        }
        String str5 = this.f12703t;
        if (str5 == null) {
            String M = ne.w0.M(format.f12703t, k10);
            if (ne.w0.f1(M).length == 1) {
                str5 = M;
            }
        }
        Metadata metadata = this.f12704u;
        if (metadata == null) {
            b10 = format.f12704u;
        } else {
            b10 = metadata.b(format.f12704u);
        }
        float f10 = this.D;
        if (f10 == -1.0f && k10 == 2) {
            f10 = format.D;
        }
        int i12 = this.f12698o | format.f12698o;
        return b().U(str2).W(str3).X(str4).i0(i12).e0(this.f12699p | format.f12699p).I(i10).b0(i11).K(str5).Z(b10).O(rc.m.j(format.f12709z, this.f12709z)).R(f10).G();
    }

    public String toString() {
        return "Format(" + this.f12695d + ", " + this.f12696e + ", " + this.f12705v + ", " + this.f12706w + ", " + this.f12703t + ", " + this.f12702s + ", " + this.f12697i + ", [" + this.B + ", " + this.C + ", " + this.D + ", " + this.I + "], [" + this.J + ", " + this.K + "])";
    }

    private Format(b bVar) {
        this.f12695d = bVar.f12710a;
        this.f12696e = bVar.f12711b;
        this.f12697i = ne.w0.M0(bVar.f12712c);
        this.f12698o = bVar.f12713d;
        this.f12699p = bVar.f12714e;
        int i10 = bVar.f12715f;
        this.f12700q = i10;
        int i11 = bVar.f12716g;
        this.f12701r = i11;
        this.f12702s = i11 != -1 ? i11 : i10;
        this.f12703t = bVar.f12717h;
        this.f12704u = bVar.f12718i;
        this.f12705v = bVar.f12719j;
        this.f12706w = bVar.f12720k;
        this.f12707x = bVar.f12721l;
        this.f12708y = bVar.f12722m == null ? Collections.EMPTY_LIST : bVar.f12722m;
        rc.m mVar = bVar.f12723n;
        this.f12709z = mVar;
        this.A = bVar.f12724o;
        this.B = bVar.f12725p;
        this.C = bVar.f12726q;
        this.D = bVar.f12727r;
        this.E = bVar.f12728s == -1 ? 0 : bVar.f12728s;
        this.F = bVar.f12729t == -1.0f ? 1.0f : bVar.f12729t;
        this.G = bVar.f12730u;
        this.H = bVar.f12731v;
        this.I = bVar.f12732w;
        this.J = bVar.f12733x;
        this.K = bVar.f12734y;
        this.L = bVar.f12735z;
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
