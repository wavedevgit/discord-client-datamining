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
    public final String f12293d;

    /* renamed from: e  reason: collision with root package name */
    public final String f12294e;

    /* renamed from: i  reason: collision with root package name */
    public final String f12295i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12296o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12297p;

    /* renamed from: q  reason: collision with root package name */
    public final int f12298q;

    /* renamed from: r  reason: collision with root package name */
    public final int f12299r;

    /* renamed from: s  reason: collision with root package name */
    public final int f12300s;

    /* renamed from: t  reason: collision with root package name */
    public final String f12301t;

    /* renamed from: u  reason: collision with root package name */
    public final Metadata f12302u;

    /* renamed from: v  reason: collision with root package name */
    public final String f12303v;

    /* renamed from: w  reason: collision with root package name */
    public final String f12304w;

    /* renamed from: x  reason: collision with root package name */
    public final int f12305x;

    /* renamed from: y  reason: collision with root package name */
    public final List f12306y;

    /* renamed from: z  reason: collision with root package name */
    public final sc.m f12307z;
    private static final Format T = new b().G();
    private static final String U = oe.w0.B0(0);
    private static final String V = oe.w0.B0(1);
    private static final String W = oe.w0.B0(2);
    private static final String X = oe.w0.B0(3);
    private static final String Y = oe.w0.B0(4);
    private static final String Z = oe.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f12267a0 = oe.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f12268b0 = oe.w0.B0(7);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f12269c0 = oe.w0.B0(8);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f12270d0 = oe.w0.B0(9);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f12271e0 = oe.w0.B0(10);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f12272f0 = oe.w0.B0(11);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f12273g0 = oe.w0.B0(12);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f12274h0 = oe.w0.B0(13);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f12275i0 = oe.w0.B0(14);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f12276j0 = oe.w0.B0(15);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f12277k0 = oe.w0.B0(16);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f12278l0 = oe.w0.B0(17);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f12279m0 = oe.w0.B0(18);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f12280n0 = oe.w0.B0(19);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f12281o0 = oe.w0.B0(20);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f12282p0 = oe.w0.B0(21);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f12283q0 = oe.w0.B0(22);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f12284r0 = oe.w0.B0(23);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f12285s0 = oe.w0.B0(24);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f12286t0 = oe.w0.B0(25);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f12287u0 = oe.w0.B0(26);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f12288v0 = oe.w0.B0(27);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f12289w0 = oe.w0.B0(28);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f12290x0 = oe.w0.B0(29);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f12291y0 = oe.w0.B0(30);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f12292z0 = oe.w0.B0(31);
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
        private String f12308a;

        /* renamed from: b  reason: collision with root package name */
        private String f12309b;

        /* renamed from: c  reason: collision with root package name */
        private String f12310c;

        /* renamed from: d  reason: collision with root package name */
        private int f12311d;

        /* renamed from: e  reason: collision with root package name */
        private int f12312e;

        /* renamed from: f  reason: collision with root package name */
        private int f12313f;

        /* renamed from: g  reason: collision with root package name */
        private int f12314g;

        /* renamed from: h  reason: collision with root package name */
        private String f12315h;

        /* renamed from: i  reason: collision with root package name */
        private Metadata f12316i;

        /* renamed from: j  reason: collision with root package name */
        private String f12317j;

        /* renamed from: k  reason: collision with root package name */
        private String f12318k;

        /* renamed from: l  reason: collision with root package name */
        private int f12319l;

        /* renamed from: m  reason: collision with root package name */
        private List f12320m;

        /* renamed from: n  reason: collision with root package name */
        private sc.m f12321n;

        /* renamed from: o  reason: collision with root package name */
        private long f12322o;

        /* renamed from: p  reason: collision with root package name */
        private int f12323p;

        /* renamed from: q  reason: collision with root package name */
        private int f12324q;

        /* renamed from: r  reason: collision with root package name */
        private float f12325r;

        /* renamed from: s  reason: collision with root package name */
        private int f12326s;

        /* renamed from: t  reason: collision with root package name */
        private float f12327t;

        /* renamed from: u  reason: collision with root package name */
        private byte[] f12328u;

        /* renamed from: v  reason: collision with root package name */
        private int f12329v;

        /* renamed from: w  reason: collision with root package name */
        private pe.c f12330w;

        /* renamed from: x  reason: collision with root package name */
        private int f12331x;

        /* renamed from: y  reason: collision with root package name */
        private int f12332y;

        /* renamed from: z  reason: collision with root package name */
        private int f12333z;

        public Format G() {
            return new Format(this);
        }

        public b H(int i10) {
            this.C = i10;
            return this;
        }

        public b I(int i10) {
            this.f12313f = i10;
            return this;
        }

        public b J(int i10) {
            this.f12331x = i10;
            return this;
        }

        public b K(String str) {
            this.f12315h = str;
            return this;
        }

        public b L(pe.c cVar) {
            this.f12330w = cVar;
            return this;
        }

        public b M(String str) {
            this.f12317j = str;
            return this;
        }

        public b N(int i10) {
            this.F = i10;
            return this;
        }

        public b O(sc.m mVar) {
            this.f12321n = mVar;
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
            this.f12325r = f10;
            return this;
        }

        public b S(int i10) {
            this.f12324q = i10;
            return this;
        }

        public b T(int i10) {
            this.f12308a = Integer.toString(i10);
            return this;
        }

        public b U(String str) {
            this.f12308a = str;
            return this;
        }

        public b V(List list) {
            this.f12320m = list;
            return this;
        }

        public b W(String str) {
            this.f12309b = str;
            return this;
        }

        public b X(String str) {
            this.f12310c = str;
            return this;
        }

        public b Y(int i10) {
            this.f12319l = i10;
            return this;
        }

        public b Z(Metadata metadata) {
            this.f12316i = metadata;
            return this;
        }

        public b a0(int i10) {
            this.f12333z = i10;
            return this;
        }

        public b b0(int i10) {
            this.f12314g = i10;
            return this;
        }

        public b c0(float f10) {
            this.f12327t = f10;
            return this;
        }

        public b d0(byte[] bArr) {
            this.f12328u = bArr;
            return this;
        }

        public b e0(int i10) {
            this.f12312e = i10;
            return this;
        }

        public b f0(int i10) {
            this.f12326s = i10;
            return this;
        }

        public b g0(String str) {
            this.f12318k = str;
            return this;
        }

        public b h0(int i10) {
            this.f12332y = i10;
            return this;
        }

        public b i0(int i10) {
            this.f12311d = i10;
            return this;
        }

        public b j0(int i10) {
            this.f12329v = i10;
            return this;
        }

        public b k0(long j10) {
            this.f12322o = j10;
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
            this.f12323p = i10;
            return this;
        }

        public b() {
            this.f12313f = -1;
            this.f12314g = -1;
            this.f12319l = -1;
            this.f12322o = LongCompanionObject.MAX_VALUE;
            this.f12323p = -1;
            this.f12324q = -1;
            this.f12325r = -1.0f;
            this.f12327t = 1.0f;
            this.f12329v = -1;
            this.f12331x = -1;
            this.f12332y = -1;
            this.f12333z = -1;
            this.C = -1;
            this.D = -1;
            this.E = -1;
            this.F = 0;
        }

        private b(Format format) {
            this.f12308a = format.f12293d;
            this.f12309b = format.f12294e;
            this.f12310c = format.f12295i;
            this.f12311d = format.f12296o;
            this.f12312e = format.f12297p;
            this.f12313f = format.f12298q;
            this.f12314g = format.f12299r;
            this.f12315h = format.f12301t;
            this.f12316i = format.f12302u;
            this.f12317j = format.f12303v;
            this.f12318k = format.f12304w;
            this.f12319l = format.f12305x;
            this.f12320m = format.f12306y;
            this.f12321n = format.f12307z;
            this.f12322o = format.A;
            this.f12323p = format.B;
            this.f12324q = format.C;
            this.f12325r = format.D;
            this.f12326s = format.E;
            this.f12327t = format.F;
            this.f12328u = format.G;
            this.f12329v = format.H;
            this.f12330w = format.I;
            this.f12331x = format.J;
            this.f12332y = format.K;
            this.f12333z = format.L;
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
        bVar.U((String) d(string, format.f12293d)).W((String) d(bundle.getString(V), format.f12294e)).X((String) d(bundle.getString(W), format.f12295i)).i0(bundle.getInt(X, format.f12296o)).e0(bundle.getInt(Y, format.f12297p)).I(bundle.getInt(Z, format.f12298q)).b0(bundle.getInt(f12267a0, format.f12299r)).K((String) d(bundle.getString(f12268b0), format.f12301t)).Z((Metadata) d((Metadata) bundle.getParcelable(f12269c0), format.f12302u)).M((String) d(bundle.getString(f12270d0), format.f12303v)).g0((String) d(bundle.getString(f12271e0), format.f12304w)).Y(bundle.getInt(f12272f0, format.f12305x));
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
        b O = bVar.V(arrayList).O((sc.m) bundle.getParcelable(f12274h0));
        String str = f12275i0;
        Format format2 = T;
        O.k0(bundle.getLong(str, format2.A)).n0(bundle.getInt(f12276j0, format2.B)).S(bundle.getInt(f12277k0, format2.C)).R(bundle.getFloat(f12278l0, format2.D)).f0(bundle.getInt(f12279m0, format2.E)).c0(bundle.getFloat(f12280n0, format2.F)).d0(bundle.getByteArray(f12281o0)).j0(bundle.getInt(f12282p0, format2.H));
        Bundle bundle2 = bundle.getBundle(f12283q0);
        if (bundle2 != null) {
            bVar.L((pe.c) pe.c.f41563w.a(bundle2));
        }
        bVar.J(bundle.getInt(f12284r0, format2.J)).h0(bundle.getInt(f12285s0, format2.K)).a0(bundle.getInt(f12286t0, format2.L)).P(bundle.getInt(f12287u0, format2.M)).Q(bundle.getInt(f12288v0, format2.N)).H(bundle.getInt(f12289w0, format2.O)).l0(bundle.getInt(f12291y0, format2.P)).m0(bundle.getInt(f12292z0, format2.Q)).N(bundle.getInt(f12290x0, format2.R));
        return bVar.G();
    }

    private static String h(int i10) {
        return f12273g0 + "_" + Integer.toString(i10, 36);
    }

    public static String i(Format format) {
        if (format == null) {
            return "null";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("id=");
        sb2.append(format.f12293d);
        sb2.append(", mimeType=");
        sb2.append(format.f12304w);
        if (format.f12300s != -1) {
            sb2.append(", bitrate=");
            sb2.append(format.f12300s);
        }
        if (format.f12301t != null) {
            sb2.append(", codecs=");
            sb2.append(format.f12301t);
        }
        if (format.f12307z != null) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            int i10 = 0;
            while (true) {
                sc.m mVar = format.f12307z;
                if (i10 >= mVar.f48027o) {
                    break;
                }
                UUID uuid = mVar.o(i10).f48029e;
                if (uuid.equals(mc.d.f36226b)) {
                    linkedHashSet.add("cenc");
                } else if (uuid.equals(mc.d.f36227c)) {
                    linkedHashSet.add("clearkey");
                } else if (uuid.equals(mc.d.f36229e)) {
                    linkedHashSet.add("playready");
                } else if (uuid.equals(mc.d.f36228d)) {
                    linkedHashSet.add("widevine");
                } else if (uuid.equals(mc.d.f36225a)) {
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
        if (format.f12295i != null) {
            sb2.append(", language=");
            sb2.append(format.f12295i);
        }
        if (format.f12294e != null) {
            sb2.append(", label=");
            sb2.append(format.f12294e);
        }
        if (format.f12296o != 0) {
            ArrayList arrayList = new ArrayList();
            if ((format.f12296o & 4) != 0) {
                arrayList.add("auto");
            }
            if ((format.f12296o & 1) != 0) {
                arrayList.add("default");
            }
            if ((format.f12296o & 2) != 0) {
                arrayList.add("forced");
            }
            sb2.append(", selectionFlags=[");
            pi.g.d(',').b(sb2, arrayList);
            sb2.append("]");
        }
        if (format.f12297p != 0) {
            ArrayList arrayList2 = new ArrayList();
            if ((format.f12297p & 1) != 0) {
                arrayList2.add("main");
            }
            if ((format.f12297p & 2) != 0) {
                arrayList2.add("alt");
            }
            if ((format.f12297p & 4) != 0) {
                arrayList2.add("supplementary");
            }
            if ((format.f12297p & 8) != 0) {
                arrayList2.add("commentary");
            }
            if ((format.f12297p & 16) != 0) {
                arrayList2.add("dub");
            }
            if ((format.f12297p & 32) != 0) {
                arrayList2.add("emergency");
            }
            if ((format.f12297p & 64) != 0) {
                arrayList2.add("caption");
            }
            if ((format.f12297p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                arrayList2.add("subtitle");
            }
            if ((format.f12297p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                arrayList2.add("sign");
            }
            if ((format.f12297p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                arrayList2.add("describes-video");
            }
            if ((format.f12297p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                arrayList2.add("describes-music");
            }
            if ((format.f12297p & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                arrayList2.add("enhanced-intelligibility");
            }
            if ((format.f12297p & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                arrayList2.add("transcribes-dialog");
            }
            if ((format.f12297p & 8192) != 0) {
                arrayList2.add("easy-read");
            }
            if ((format.f12297p & 16384) != 0) {
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
            if ((i11 == 0 || (i10 = format.S) == 0 || i11 == i10) && this.f12296o == format.f12296o && this.f12297p == format.f12297p && this.f12298q == format.f12298q && this.f12299r == format.f12299r && this.f12305x == format.f12305x && this.A == format.A && this.B == format.B && this.C == format.C && this.E == format.E && this.H == format.H && this.J == format.J && this.K == format.K && this.L == format.L && this.M == format.M && this.N == format.N && this.O == format.O && this.P == format.P && this.Q == format.Q && this.R == format.R && Float.compare(this.D, format.D) == 0 && Float.compare(this.F, format.F) == 0 && oe.w0.c(this.f12293d, format.f12293d) && oe.w0.c(this.f12294e, format.f12294e) && oe.w0.c(this.f12301t, format.f12301t) && oe.w0.c(this.f12303v, format.f12303v) && oe.w0.c(this.f12304w, format.f12304w) && oe.w0.c(this.f12295i, format.f12295i) && Arrays.equals(this.G, format.G) && oe.w0.c(this.f12302u, format.f12302u) && oe.w0.c(this.I, format.I) && oe.w0.c(this.f12307z, format.f12307z) && g(format)) {
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
        if (this.f12306y.size() != format.f12306y.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f12306y.size(); i10++) {
            if (!Arrays.equals((byte[]) this.f12306y.get(i10), (byte[]) format.f12306y.get(i10))) {
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
            String str = this.f12293d;
            int i11 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = (527 + hashCode) * 31;
            String str2 = this.f12294e;
            if (str2 != null) {
                i10 = str2.hashCode();
            } else {
                i10 = 0;
            }
            int i13 = (i12 + i10) * 31;
            String str3 = this.f12295i;
            if (str3 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str3.hashCode();
            }
            int i14 = (((((((((i13 + hashCode2) * 31) + this.f12296o) * 31) + this.f12297p) * 31) + this.f12298q) * 31) + this.f12299r) * 31;
            String str4 = this.f12301t;
            if (str4 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str4.hashCode();
            }
            int i15 = (i14 + hashCode3) * 31;
            Metadata metadata = this.f12302u;
            if (metadata == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = metadata.hashCode();
            }
            int i16 = (i15 + hashCode4) * 31;
            String str5 = this.f12303v;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i17 = (i16 + hashCode5) * 31;
            String str6 = this.f12304w;
            if (str6 != null) {
                i11 = str6.hashCode();
            }
            this.S = ((((((((((((((((((((((((((((((((((i17 + i11) * 31) + this.f12305x) * 31) + ((int) this.A)) * 31) + this.B) * 31) + this.C) * 31) + Float.floatToIntBits(this.D)) * 31) + this.E) * 31) + Float.floatToIntBits(this.F)) * 31) + this.H) * 31) + this.J) * 31) + this.K) * 31) + this.L) * 31) + this.M) * 31) + this.N) * 31) + this.O) * 31) + this.P) * 31) + this.Q) * 31) + this.R;
        }
        return this.S;
    }

    public Format j(Format format) {
        String str;
        Metadata b10;
        if (this == format) {
            return this;
        }
        int k10 = oe.c0.k(this.f12304w);
        String str2 = format.f12293d;
        String str3 = format.f12294e;
        if (str3 == null) {
            str3 = this.f12294e;
        }
        String str4 = this.f12295i;
        if ((k10 == 3 || k10 == 1) && (str = format.f12295i) != null) {
            str4 = str;
        }
        int i10 = this.f12298q;
        if (i10 == -1) {
            i10 = format.f12298q;
        }
        int i11 = this.f12299r;
        if (i11 == -1) {
            i11 = format.f12299r;
        }
        String str5 = this.f12301t;
        if (str5 == null) {
            String M = oe.w0.M(format.f12301t, k10);
            if (oe.w0.f1(M).length == 1) {
                str5 = M;
            }
        }
        Metadata metadata = this.f12302u;
        if (metadata == null) {
            b10 = format.f12302u;
        } else {
            b10 = metadata.b(format.f12302u);
        }
        float f10 = this.D;
        if (f10 == -1.0f && k10 == 2) {
            f10 = format.D;
        }
        int i12 = this.f12296o | format.f12296o;
        return b().U(str2).W(str3).X(str4).i0(i12).e0(this.f12297p | format.f12297p).I(i10).b0(i11).K(str5).Z(b10).O(sc.m.j(format.f12307z, this.f12307z)).R(f10).G();
    }

    public String toString() {
        return "Format(" + this.f12293d + ", " + this.f12294e + ", " + this.f12303v + ", " + this.f12304w + ", " + this.f12301t + ", " + this.f12300s + ", " + this.f12295i + ", [" + this.B + ", " + this.C + ", " + this.D + ", " + this.I + "], [" + this.J + ", " + this.K + "])";
    }

    private Format(b bVar) {
        this.f12293d = bVar.f12308a;
        this.f12294e = bVar.f12309b;
        this.f12295i = oe.w0.M0(bVar.f12310c);
        this.f12296o = bVar.f12311d;
        this.f12297p = bVar.f12312e;
        int i10 = bVar.f12313f;
        this.f12298q = i10;
        int i11 = bVar.f12314g;
        this.f12299r = i11;
        this.f12300s = i11 != -1 ? i11 : i10;
        this.f12301t = bVar.f12315h;
        this.f12302u = bVar.f12316i;
        this.f12303v = bVar.f12317j;
        this.f12304w = bVar.f12318k;
        this.f12305x = bVar.f12319l;
        this.f12306y = bVar.f12320m == null ? Collections.EMPTY_LIST : bVar.f12320m;
        sc.m mVar = bVar.f12321n;
        this.f12307z = mVar;
        this.A = bVar.f12322o;
        this.B = bVar.f12323p;
        this.C = bVar.f12324q;
        this.D = bVar.f12325r;
        this.E = bVar.f12326s == -1 ? 0 : bVar.f12326s;
        this.F = bVar.f12327t == -1.0f ? 1.0f : bVar.f12327t;
        this.G = bVar.f12328u;
        this.H = bVar.f12329v;
        this.I = bVar.f12330w;
        this.J = bVar.f12331x;
        this.K = bVar.f12332y;
        this.L = bVar.f12333z;
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
