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
    public final pe.c I;
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
    public final String f12294d;

    /* renamed from: e  reason: collision with root package name */
    public final String f12295e;

    /* renamed from: i  reason: collision with root package name */
    public final String f12296i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12297o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12298p;

    /* renamed from: q  reason: collision with root package name */
    public final int f12299q;

    /* renamed from: r  reason: collision with root package name */
    public final int f12300r;

    /* renamed from: s  reason: collision with root package name */
    public final int f12301s;

    /* renamed from: t  reason: collision with root package name */
    public final String f12302t;

    /* renamed from: u  reason: collision with root package name */
    public final Metadata f12303u;

    /* renamed from: v  reason: collision with root package name */
    public final String f12304v;

    /* renamed from: w  reason: collision with root package name */
    public final String f12305w;

    /* renamed from: x  reason: collision with root package name */
    public final int f12306x;

    /* renamed from: y  reason: collision with root package name */
    public final List f12307y;

    /* renamed from: z  reason: collision with root package name */
    public final sc.m f12308z;
    private static final Format T = new b().G();
    private static final String U = oe.w0.B0(0);
    private static final String V = oe.w0.B0(1);
    private static final String W = oe.w0.B0(2);
    private static final String X = oe.w0.B0(3);
    private static final String Y = oe.w0.B0(4);
    private static final String Z = oe.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f12268a0 = oe.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f12269b0 = oe.w0.B0(7);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f12270c0 = oe.w0.B0(8);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f12271d0 = oe.w0.B0(9);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f12272e0 = oe.w0.B0(10);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f12273f0 = oe.w0.B0(11);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f12274g0 = oe.w0.B0(12);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f12275h0 = oe.w0.B0(13);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f12276i0 = oe.w0.B0(14);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f12277j0 = oe.w0.B0(15);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f12278k0 = oe.w0.B0(16);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f12279l0 = oe.w0.B0(17);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f12280m0 = oe.w0.B0(18);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f12281n0 = oe.w0.B0(19);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f12282o0 = oe.w0.B0(20);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f12283p0 = oe.w0.B0(21);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f12284q0 = oe.w0.B0(22);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f12285r0 = oe.w0.B0(23);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f12286s0 = oe.w0.B0(24);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f12287t0 = oe.w0.B0(25);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f12288u0 = oe.w0.B0(26);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f12289v0 = oe.w0.B0(27);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f12290w0 = oe.w0.B0(28);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f12291x0 = oe.w0.B0(29);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f12292y0 = oe.w0.B0(30);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f12293z0 = oe.w0.B0(31);
    public static final g.a A0 = new g.a() { // from class: mc.w
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
        private String f12309a;

        /* renamed from: b  reason: collision with root package name */
        private String f12310b;

        /* renamed from: c  reason: collision with root package name */
        private String f12311c;

        /* renamed from: d  reason: collision with root package name */
        private int f12312d;

        /* renamed from: e  reason: collision with root package name */
        private int f12313e;

        /* renamed from: f  reason: collision with root package name */
        private int f12314f;

        /* renamed from: g  reason: collision with root package name */
        private int f12315g;

        /* renamed from: h  reason: collision with root package name */
        private String f12316h;

        /* renamed from: i  reason: collision with root package name */
        private Metadata f12317i;

        /* renamed from: j  reason: collision with root package name */
        private String f12318j;

        /* renamed from: k  reason: collision with root package name */
        private String f12319k;

        /* renamed from: l  reason: collision with root package name */
        private int f12320l;

        /* renamed from: m  reason: collision with root package name */
        private List f12321m;

        /* renamed from: n  reason: collision with root package name */
        private sc.m f12322n;

        /* renamed from: o  reason: collision with root package name */
        private long f12323o;

        /* renamed from: p  reason: collision with root package name */
        private int f12324p;

        /* renamed from: q  reason: collision with root package name */
        private int f12325q;

        /* renamed from: r  reason: collision with root package name */
        private float f12326r;

        /* renamed from: s  reason: collision with root package name */
        private int f12327s;

        /* renamed from: t  reason: collision with root package name */
        private float f12328t;

        /* renamed from: u  reason: collision with root package name */
        private byte[] f12329u;

        /* renamed from: v  reason: collision with root package name */
        private int f12330v;

        /* renamed from: w  reason: collision with root package name */
        private pe.c f12331w;

        /* renamed from: x  reason: collision with root package name */
        private int f12332x;

        /* renamed from: y  reason: collision with root package name */
        private int f12333y;

        /* renamed from: z  reason: collision with root package name */
        private int f12334z;

        public Format G() {
            return new Format(this);
        }

        public b H(int i10) {
            this.C = i10;
            return this;
        }

        public b I(int i10) {
            this.f12314f = i10;
            return this;
        }

        public b J(int i10) {
            this.f12332x = i10;
            return this;
        }

        public b K(String str) {
            this.f12316h = str;
            return this;
        }

        public b L(pe.c cVar) {
            this.f12331w = cVar;
            return this;
        }

        public b M(String str) {
            this.f12318j = str;
            return this;
        }

        public b N(int i10) {
            this.F = i10;
            return this;
        }

        public b O(sc.m mVar) {
            this.f12322n = mVar;
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
            this.f12326r = f10;
            return this;
        }

        public b S(int i10) {
            this.f12325q = i10;
            return this;
        }

        public b T(int i10) {
            this.f12309a = Integer.toString(i10);
            return this;
        }

        public b U(String str) {
            this.f12309a = str;
            return this;
        }

        public b V(List list) {
            this.f12321m = list;
            return this;
        }

        public b W(String str) {
            this.f12310b = str;
            return this;
        }

        public b X(String str) {
            this.f12311c = str;
            return this;
        }

        public b Y(int i10) {
            this.f12320l = i10;
            return this;
        }

        public b Z(Metadata metadata) {
            this.f12317i = metadata;
            return this;
        }

        public b a0(int i10) {
            this.f12334z = i10;
            return this;
        }

        public b b0(int i10) {
            this.f12315g = i10;
            return this;
        }

        public b c0(float f10) {
            this.f12328t = f10;
            return this;
        }

        public b d0(byte[] bArr) {
            this.f12329u = bArr;
            return this;
        }

        public b e0(int i10) {
            this.f12313e = i10;
            return this;
        }

        public b f0(int i10) {
            this.f12327s = i10;
            return this;
        }

        public b g0(String str) {
            this.f12319k = str;
            return this;
        }

        public b h0(int i10) {
            this.f12333y = i10;
            return this;
        }

        public b i0(int i10) {
            this.f12312d = i10;
            return this;
        }

        public b j0(int i10) {
            this.f12330v = i10;
            return this;
        }

        public b k0(long j10) {
            this.f12323o = j10;
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
            this.f12324p = i10;
            return this;
        }

        public b() {
            this.f12314f = -1;
            this.f12315g = -1;
            this.f12320l = -1;
            this.f12323o = LongCompanionObject.MAX_VALUE;
            this.f12324p = -1;
            this.f12325q = -1;
            this.f12326r = -1.0f;
            this.f12328t = 1.0f;
            this.f12330v = -1;
            this.f12332x = -1;
            this.f12333y = -1;
            this.f12334z = -1;
            this.C = -1;
            this.D = -1;
            this.E = -1;
            this.F = 0;
        }

        private b(Format format) {
            this.f12309a = format.f12294d;
            this.f12310b = format.f12295e;
            this.f12311c = format.f12296i;
            this.f12312d = format.f12297o;
            this.f12313e = format.f12298p;
            this.f12314f = format.f12299q;
            this.f12315g = format.f12300r;
            this.f12316h = format.f12302t;
            this.f12317i = format.f12303u;
            this.f12318j = format.f12304v;
            this.f12319k = format.f12305w;
            this.f12320l = format.f12306x;
            this.f12321m = format.f12307y;
            this.f12322n = format.f12308z;
            this.f12323o = format.A;
            this.f12324p = format.B;
            this.f12325q = format.C;
            this.f12326r = format.D;
            this.f12327s = format.E;
            this.f12328t = format.F;
            this.f12329u = format.G;
            this.f12330v = format.H;
            this.f12331w = format.I;
            this.f12332x = format.J;
            this.f12333y = format.K;
            this.f12334z = format.L;
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
        oe.d.c(bundle);
        String string = bundle.getString(U);
        Format format = T;
        bVar.U((String) d(string, format.f12294d)).W((String) d(bundle.getString(V), format.f12295e)).X((String) d(bundle.getString(W), format.f12296i)).i0(bundle.getInt(X, format.f12297o)).e0(bundle.getInt(Y, format.f12298p)).I(bundle.getInt(Z, format.f12299q)).b0(bundle.getInt(f12268a0, format.f12300r)).K((String) d(bundle.getString(f12269b0), format.f12302t)).Z((Metadata) d((Metadata) bundle.getParcelable(f12270c0), format.f12303u)).M((String) d(bundle.getString(f12271d0), format.f12304v)).g0((String) d(bundle.getString(f12272e0), format.f12305w)).Y(bundle.getInt(f12273f0, format.f12306x));
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
        b O = bVar.V(arrayList).O((sc.m) bundle.getParcelable(f12275h0));
        String str = f12276i0;
        Format format2 = T;
        O.k0(bundle.getLong(str, format2.A)).n0(bundle.getInt(f12277j0, format2.B)).S(bundle.getInt(f12278k0, format2.C)).R(bundle.getFloat(f12279l0, format2.D)).f0(bundle.getInt(f12280m0, format2.E)).c0(bundle.getFloat(f12281n0, format2.F)).d0(bundle.getByteArray(f12282o0)).j0(bundle.getInt(f12283p0, format2.H));
        Bundle bundle2 = bundle.getBundle(f12284q0);
        if (bundle2 != null) {
            bVar.L((pe.c) pe.c.f41564w.a(bundle2));
        }
        bVar.J(bundle.getInt(f12285r0, format2.J)).h0(bundle.getInt(f12286s0, format2.K)).a0(bundle.getInt(f12287t0, format2.L)).P(bundle.getInt(f12288u0, format2.M)).Q(bundle.getInt(f12289v0, format2.N)).H(bundle.getInt(f12290w0, format2.O)).l0(bundle.getInt(f12292y0, format2.P)).m0(bundle.getInt(f12293z0, format2.Q)).N(bundle.getInt(f12291x0, format2.R));
        return bVar.G();
    }

    private static String h(int i10) {
        return f12274g0 + "_" + Integer.toString(i10, 36);
    }

    public static String i(Format format) {
        if (format == null) {
            return "null";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("id=");
        sb2.append(format.f12294d);
        sb2.append(", mimeType=");
        sb2.append(format.f12305w);
        if (format.f12301s != -1) {
            sb2.append(", bitrate=");
            sb2.append(format.f12301s);
        }
        if (format.f12302t != null) {
            sb2.append(", codecs=");
            sb2.append(format.f12302t);
        }
        if (format.f12308z != null) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            int i10 = 0;
            while (true) {
                sc.m mVar = format.f12308z;
                if (i10 >= mVar.f48028o) {
                    break;
                }
                UUID uuid = mVar.o(i10).f48030e;
                if (uuid.equals(mc.d.f36227b)) {
                    linkedHashSet.add("cenc");
                } else if (uuid.equals(mc.d.f36228c)) {
                    linkedHashSet.add("clearkey");
                } else if (uuid.equals(mc.d.f36230e)) {
                    linkedHashSet.add("playready");
                } else if (uuid.equals(mc.d.f36229d)) {
                    linkedHashSet.add("widevine");
                } else if (uuid.equals(mc.d.f36226a)) {
                    linkedHashSet.add("universal");
                } else {
                    linkedHashSet.add("unknown (" + uuid + ")");
                }
                i10++;
            }
            sb2.append(", drm=[");
            pi.g.d(',').b(sb2, linkedHashSet);
            sb2.append(']');
        }
        if (format.B != -1 && format.C != -1) {
            sb2.append(", res=");
            sb2.append(format.B);
            sb2.append("x");
            sb2.append(format.C);
        }
        pe.c cVar = format.I;
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
        if (format.f12296i != null) {
            sb2.append(", language=");
            sb2.append(format.f12296i);
        }
        if (format.f12295e != null) {
            sb2.append(", label=");
            sb2.append(format.f12295e);
        }
        if (format.f12297o != 0) {
            ArrayList arrayList = new ArrayList();
            if ((format.f12297o & 4) != 0) {
                arrayList.add("auto");
            }
            if ((format.f12297o & 1) != 0) {
                arrayList.add("default");
            }
            if ((format.f12297o & 2) != 0) {
                arrayList.add("forced");
            }
            sb2.append(", selectionFlags=[");
            pi.g.d(',').b(sb2, arrayList);
            sb2.append("]");
        }
        if (format.f12298p != 0) {
            ArrayList arrayList2 = new ArrayList();
            if ((format.f12298p & 1) != 0) {
                arrayList2.add("main");
            }
            if ((format.f12298p & 2) != 0) {
                arrayList2.add("alt");
            }
            if ((format.f12298p & 4) != 0) {
                arrayList2.add("supplementary");
            }
            if ((format.f12298p & 8) != 0) {
                arrayList2.add("commentary");
            }
            if ((format.f12298p & 16) != 0) {
                arrayList2.add("dub");
            }
            if ((format.f12298p & 32) != 0) {
                arrayList2.add("emergency");
            }
            if ((format.f12298p & 64) != 0) {
                arrayList2.add("caption");
            }
            if ((format.f12298p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                arrayList2.add("subtitle");
            }
            if ((format.f12298p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                arrayList2.add("sign");
            }
            if ((format.f12298p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                arrayList2.add("describes-video");
            }
            if ((format.f12298p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                arrayList2.add("describes-music");
            }
            if ((format.f12298p & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                arrayList2.add("enhanced-intelligibility");
            }
            if ((format.f12298p & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                arrayList2.add("transcribes-dialog");
            }
            if ((format.f12298p & 8192) != 0) {
                arrayList2.add("easy-read");
            }
            if ((format.f12298p & 16384) != 0) {
                arrayList2.add("trick-play");
            }
            sb2.append(", roleFlags=[");
            pi.g.d(',').b(sb2, arrayList2);
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
            if ((i11 == 0 || (i10 = format.S) == 0 || i11 == i10) && this.f12297o == format.f12297o && this.f12298p == format.f12298p && this.f12299q == format.f12299q && this.f12300r == format.f12300r && this.f12306x == format.f12306x && this.A == format.A && this.B == format.B && this.C == format.C && this.E == format.E && this.H == format.H && this.J == format.J && this.K == format.K && this.L == format.L && this.M == format.M && this.N == format.N && this.O == format.O && this.P == format.P && this.Q == format.Q && this.R == format.R && Float.compare(this.D, format.D) == 0 && Float.compare(this.F, format.F) == 0 && oe.w0.c(this.f12294d, format.f12294d) && oe.w0.c(this.f12295e, format.f12295e) && oe.w0.c(this.f12302t, format.f12302t) && oe.w0.c(this.f12304v, format.f12304v) && oe.w0.c(this.f12305w, format.f12305w) && oe.w0.c(this.f12296i, format.f12296i) && Arrays.equals(this.G, format.G) && oe.w0.c(this.f12303u, format.f12303u) && oe.w0.c(this.I, format.I) && oe.w0.c(this.f12308z, format.f12308z) && g(format)) {
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
        if (this.f12307y.size() != format.f12307y.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f12307y.size(); i10++) {
            if (!Arrays.equals((byte[]) this.f12307y.get(i10), (byte[]) format.f12307y.get(i10))) {
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
            String str = this.f12294d;
            int i11 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = (527 + hashCode) * 31;
            String str2 = this.f12295e;
            if (str2 != null) {
                i10 = str2.hashCode();
            } else {
                i10 = 0;
            }
            int i13 = (i12 + i10) * 31;
            String str3 = this.f12296i;
            if (str3 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str3.hashCode();
            }
            int i14 = (((((((((i13 + hashCode2) * 31) + this.f12297o) * 31) + this.f12298p) * 31) + this.f12299q) * 31) + this.f12300r) * 31;
            String str4 = this.f12302t;
            if (str4 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str4.hashCode();
            }
            int i15 = (i14 + hashCode3) * 31;
            Metadata metadata = this.f12303u;
            if (metadata == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = metadata.hashCode();
            }
            int i16 = (i15 + hashCode4) * 31;
            String str5 = this.f12304v;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i17 = (i16 + hashCode5) * 31;
            String str6 = this.f12305w;
            if (str6 != null) {
                i11 = str6.hashCode();
            }
            this.S = ((((((((((((((((((((((((((((((((((i17 + i11) * 31) + this.f12306x) * 31) + ((int) this.A)) * 31) + this.B) * 31) + this.C) * 31) + Float.floatToIntBits(this.D)) * 31) + this.E) * 31) + Float.floatToIntBits(this.F)) * 31) + this.H) * 31) + this.J) * 31) + this.K) * 31) + this.L) * 31) + this.M) * 31) + this.N) * 31) + this.O) * 31) + this.P) * 31) + this.Q) * 31) + this.R;
        }
        return this.S;
    }

    public Format j(Format format) {
        String str;
        Metadata b10;
        if (this == format) {
            return this;
        }
        int k10 = oe.c0.k(this.f12305w);
        String str2 = format.f12294d;
        String str3 = format.f12295e;
        if (str3 == null) {
            str3 = this.f12295e;
        }
        String str4 = this.f12296i;
        if ((k10 == 3 || k10 == 1) && (str = format.f12296i) != null) {
            str4 = str;
        }
        int i10 = this.f12299q;
        if (i10 == -1) {
            i10 = format.f12299q;
        }
        int i11 = this.f12300r;
        if (i11 == -1) {
            i11 = format.f12300r;
        }
        String str5 = this.f12302t;
        if (str5 == null) {
            String M = oe.w0.M(format.f12302t, k10);
            if (oe.w0.f1(M).length == 1) {
                str5 = M;
            }
        }
        Metadata metadata = this.f12303u;
        if (metadata == null) {
            b10 = format.f12303u;
        } else {
            b10 = metadata.b(format.f12303u);
        }
        float f10 = this.D;
        if (f10 == -1.0f && k10 == 2) {
            f10 = format.D;
        }
        int i12 = this.f12297o | format.f12297o;
        return b().U(str2).W(str3).X(str4).i0(i12).e0(this.f12298p | format.f12298p).I(i10).b0(i11).K(str5).Z(b10).O(sc.m.j(format.f12308z, this.f12308z)).R(f10).G();
    }

    public String toString() {
        return "Format(" + this.f12294d + ", " + this.f12295e + ", " + this.f12304v + ", " + this.f12305w + ", " + this.f12302t + ", " + this.f12301s + ", " + this.f12296i + ", [" + this.B + ", " + this.C + ", " + this.D + ", " + this.I + "], [" + this.J + ", " + this.K + "])";
    }

    private Format(b bVar) {
        this.f12294d = bVar.f12309a;
        this.f12295e = bVar.f12310b;
        this.f12296i = oe.w0.M0(bVar.f12311c);
        this.f12297o = bVar.f12312d;
        this.f12298p = bVar.f12313e;
        int i10 = bVar.f12314f;
        this.f12299q = i10;
        int i11 = bVar.f12315g;
        this.f12300r = i11;
        this.f12301s = i11 != -1 ? i11 : i10;
        this.f12302t = bVar.f12316h;
        this.f12303u = bVar.f12317i;
        this.f12304v = bVar.f12318j;
        this.f12305w = bVar.f12319k;
        this.f12306x = bVar.f12320l;
        this.f12307y = bVar.f12321m == null ? Collections.EMPTY_LIST : bVar.f12321m;
        sc.m mVar = bVar.f12322n;
        this.f12308z = mVar;
        this.A = bVar.f12323o;
        this.B = bVar.f12324p;
        this.C = bVar.f12325q;
        this.D = bVar.f12326r;
        this.E = bVar.f12327s == -1 ? 0 : bVar.f12327s;
        this.F = bVar.f12328t == -1.0f ? 1.0f : bVar.f12328t;
        this.G = bVar.f12329u;
        this.H = bVar.f12330v;
        this.I = bVar.f12331w;
        this.J = bVar.f12332x;
        this.K = bVar.f12333y;
        this.L = bVar.f12334z;
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
