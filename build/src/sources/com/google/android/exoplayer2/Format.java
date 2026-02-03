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
    public final String f12324d;

    /* renamed from: e  reason: collision with root package name */
    public final String f12325e;

    /* renamed from: i  reason: collision with root package name */
    public final String f12326i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12327o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12328p;

    /* renamed from: q  reason: collision with root package name */
    public final int f12329q;

    /* renamed from: r  reason: collision with root package name */
    public final int f12330r;

    /* renamed from: s  reason: collision with root package name */
    public final int f12331s;

    /* renamed from: t  reason: collision with root package name */
    public final String f12332t;

    /* renamed from: u  reason: collision with root package name */
    public final Metadata f12333u;

    /* renamed from: v  reason: collision with root package name */
    public final String f12334v;

    /* renamed from: w  reason: collision with root package name */
    public final String f12335w;

    /* renamed from: x  reason: collision with root package name */
    public final int f12336x;

    /* renamed from: y  reason: collision with root package name */
    public final List f12337y;

    /* renamed from: z  reason: collision with root package name */
    public final rc.m f12338z;
    private static final Format T = new b().G();
    private static final String U = ne.w0.B0(0);
    private static final String V = ne.w0.B0(1);
    private static final String W = ne.w0.B0(2);
    private static final String X = ne.w0.B0(3);
    private static final String Y = ne.w0.B0(4);
    private static final String Z = ne.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f12298a0 = ne.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f12299b0 = ne.w0.B0(7);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f12300c0 = ne.w0.B0(8);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f12301d0 = ne.w0.B0(9);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f12302e0 = ne.w0.B0(10);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f12303f0 = ne.w0.B0(11);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f12304g0 = ne.w0.B0(12);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f12305h0 = ne.w0.B0(13);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f12306i0 = ne.w0.B0(14);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f12307j0 = ne.w0.B0(15);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f12308k0 = ne.w0.B0(16);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f12309l0 = ne.w0.B0(17);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f12310m0 = ne.w0.B0(18);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f12311n0 = ne.w0.B0(19);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f12312o0 = ne.w0.B0(20);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f12313p0 = ne.w0.B0(21);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f12314q0 = ne.w0.B0(22);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f12315r0 = ne.w0.B0(23);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f12316s0 = ne.w0.B0(24);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f12317t0 = ne.w0.B0(25);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f12318u0 = ne.w0.B0(26);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f12319v0 = ne.w0.B0(27);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f12320w0 = ne.w0.B0(28);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f12321x0 = ne.w0.B0(29);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f12322y0 = ne.w0.B0(30);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f12323z0 = ne.w0.B0(31);
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
        private String f12339a;

        /* renamed from: b  reason: collision with root package name */
        private String f12340b;

        /* renamed from: c  reason: collision with root package name */
        private String f12341c;

        /* renamed from: d  reason: collision with root package name */
        private int f12342d;

        /* renamed from: e  reason: collision with root package name */
        private int f12343e;

        /* renamed from: f  reason: collision with root package name */
        private int f12344f;

        /* renamed from: g  reason: collision with root package name */
        private int f12345g;

        /* renamed from: h  reason: collision with root package name */
        private String f12346h;

        /* renamed from: i  reason: collision with root package name */
        private Metadata f12347i;

        /* renamed from: j  reason: collision with root package name */
        private String f12348j;

        /* renamed from: k  reason: collision with root package name */
        private String f12349k;

        /* renamed from: l  reason: collision with root package name */
        private int f12350l;

        /* renamed from: m  reason: collision with root package name */
        private List f12351m;

        /* renamed from: n  reason: collision with root package name */
        private rc.m f12352n;

        /* renamed from: o  reason: collision with root package name */
        private long f12353o;

        /* renamed from: p  reason: collision with root package name */
        private int f12354p;

        /* renamed from: q  reason: collision with root package name */
        private int f12355q;

        /* renamed from: r  reason: collision with root package name */
        private float f12356r;

        /* renamed from: s  reason: collision with root package name */
        private int f12357s;

        /* renamed from: t  reason: collision with root package name */
        private float f12358t;

        /* renamed from: u  reason: collision with root package name */
        private byte[] f12359u;

        /* renamed from: v  reason: collision with root package name */
        private int f12360v;

        /* renamed from: w  reason: collision with root package name */
        private oe.c f12361w;

        /* renamed from: x  reason: collision with root package name */
        private int f12362x;

        /* renamed from: y  reason: collision with root package name */
        private int f12363y;

        /* renamed from: z  reason: collision with root package name */
        private int f12364z;

        public Format G() {
            return new Format(this);
        }

        public b H(int i10) {
            this.C = i10;
            return this;
        }

        public b I(int i10) {
            this.f12344f = i10;
            return this;
        }

        public b J(int i10) {
            this.f12362x = i10;
            return this;
        }

        public b K(String str) {
            this.f12346h = str;
            return this;
        }

        public b L(oe.c cVar) {
            this.f12361w = cVar;
            return this;
        }

        public b M(String str) {
            this.f12348j = str;
            return this;
        }

        public b N(int i10) {
            this.F = i10;
            return this;
        }

        public b O(rc.m mVar) {
            this.f12352n = mVar;
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
            this.f12356r = f10;
            return this;
        }

        public b S(int i10) {
            this.f12355q = i10;
            return this;
        }

        public b T(int i10) {
            this.f12339a = Integer.toString(i10);
            return this;
        }

        public b U(String str) {
            this.f12339a = str;
            return this;
        }

        public b V(List list) {
            this.f12351m = list;
            return this;
        }

        public b W(String str) {
            this.f12340b = str;
            return this;
        }

        public b X(String str) {
            this.f12341c = str;
            return this;
        }

        public b Y(int i10) {
            this.f12350l = i10;
            return this;
        }

        public b Z(Metadata metadata) {
            this.f12347i = metadata;
            return this;
        }

        public b a0(int i10) {
            this.f12364z = i10;
            return this;
        }

        public b b0(int i10) {
            this.f12345g = i10;
            return this;
        }

        public b c0(float f10) {
            this.f12358t = f10;
            return this;
        }

        public b d0(byte[] bArr) {
            this.f12359u = bArr;
            return this;
        }

        public b e0(int i10) {
            this.f12343e = i10;
            return this;
        }

        public b f0(int i10) {
            this.f12357s = i10;
            return this;
        }

        public b g0(String str) {
            this.f12349k = str;
            return this;
        }

        public b h0(int i10) {
            this.f12363y = i10;
            return this;
        }

        public b i0(int i10) {
            this.f12342d = i10;
            return this;
        }

        public b j0(int i10) {
            this.f12360v = i10;
            return this;
        }

        public b k0(long j10) {
            this.f12353o = j10;
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
            this.f12354p = i10;
            return this;
        }

        public b() {
            this.f12344f = -1;
            this.f12345g = -1;
            this.f12350l = -1;
            this.f12353o = LongCompanionObject.MAX_VALUE;
            this.f12354p = -1;
            this.f12355q = -1;
            this.f12356r = -1.0f;
            this.f12358t = 1.0f;
            this.f12360v = -1;
            this.f12362x = -1;
            this.f12363y = -1;
            this.f12364z = -1;
            this.C = -1;
            this.D = -1;
            this.E = -1;
            this.F = 0;
        }

        private b(Format format) {
            this.f12339a = format.f12324d;
            this.f12340b = format.f12325e;
            this.f12341c = format.f12326i;
            this.f12342d = format.f12327o;
            this.f12343e = format.f12328p;
            this.f12344f = format.f12329q;
            this.f12345g = format.f12330r;
            this.f12346h = format.f12332t;
            this.f12347i = format.f12333u;
            this.f12348j = format.f12334v;
            this.f12349k = format.f12335w;
            this.f12350l = format.f12336x;
            this.f12351m = format.f12337y;
            this.f12352n = format.f12338z;
            this.f12353o = format.A;
            this.f12354p = format.B;
            this.f12355q = format.C;
            this.f12356r = format.D;
            this.f12357s = format.E;
            this.f12358t = format.F;
            this.f12359u = format.G;
            this.f12360v = format.H;
            this.f12361w = format.I;
            this.f12362x = format.J;
            this.f12363y = format.K;
            this.f12364z = format.L;
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
        bVar.U((String) d(string, format.f12324d)).W((String) d(bundle.getString(V), format.f12325e)).X((String) d(bundle.getString(W), format.f12326i)).i0(bundle.getInt(X, format.f12327o)).e0(bundle.getInt(Y, format.f12328p)).I(bundle.getInt(Z, format.f12329q)).b0(bundle.getInt(f12298a0, format.f12330r)).K((String) d(bundle.getString(f12299b0), format.f12332t)).Z((Metadata) d((Metadata) bundle.getParcelable(f12300c0), format.f12333u)).M((String) d(bundle.getString(f12301d0), format.f12334v)).g0((String) d(bundle.getString(f12302e0), format.f12335w)).Y(bundle.getInt(f12303f0, format.f12336x));
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
        b O = bVar.V(arrayList).O((rc.m) bundle.getParcelable(f12305h0));
        String str = f12306i0;
        Format format2 = T;
        O.k0(bundle.getLong(str, format2.A)).n0(bundle.getInt(f12307j0, format2.B)).S(bundle.getInt(f12308k0, format2.C)).R(bundle.getFloat(f12309l0, format2.D)).f0(bundle.getInt(f12310m0, format2.E)).c0(bundle.getFloat(f12311n0, format2.F)).d0(bundle.getByteArray(f12312o0)).j0(bundle.getInt(f12313p0, format2.H));
        Bundle bundle2 = bundle.getBundle(f12314q0);
        if (bundle2 != null) {
            bVar.L((oe.c) oe.c.f42668w.a(bundle2));
        }
        bVar.J(bundle.getInt(f12315r0, format2.J)).h0(bundle.getInt(f12316s0, format2.K)).a0(bundle.getInt(f12317t0, format2.L)).P(bundle.getInt(f12318u0, format2.M)).Q(bundle.getInt(f12319v0, format2.N)).H(bundle.getInt(f12320w0, format2.O)).l0(bundle.getInt(f12322y0, format2.P)).m0(bundle.getInt(f12323z0, format2.Q)).N(bundle.getInt(f12321x0, format2.R));
        return bVar.G();
    }

    private static String h(int i10) {
        return f12304g0 + "_" + Integer.toString(i10, 36);
    }

    public static String i(Format format) {
        if (format == null) {
            return "null";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("id=");
        sb2.append(format.f12324d);
        sb2.append(", mimeType=");
        sb2.append(format.f12335w);
        if (format.f12331s != -1) {
            sb2.append(", bitrate=");
            sb2.append(format.f12331s);
        }
        if (format.f12332t != null) {
            sb2.append(", codecs=");
            sb2.append(format.f12332t);
        }
        if (format.f12338z != null) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            int i10 = 0;
            while (true) {
                rc.m mVar = format.f12338z;
                if (i10 >= mVar.f48438o) {
                    break;
                }
                UUID uuid = mVar.i(i10).f48440e;
                if (uuid.equals(lc.d.f37184b)) {
                    linkedHashSet.add("cenc");
                } else if (uuid.equals(lc.d.f37185c)) {
                    linkedHashSet.add("clearkey");
                } else if (uuid.equals(lc.d.f37187e)) {
                    linkedHashSet.add("playready");
                } else if (uuid.equals(lc.d.f37186d)) {
                    linkedHashSet.add("widevine");
                } else if (uuid.equals(lc.d.f37183a)) {
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
        if (format.f12326i != null) {
            sb2.append(", language=");
            sb2.append(format.f12326i);
        }
        if (format.f12325e != null) {
            sb2.append(", label=");
            sb2.append(format.f12325e);
        }
        if (format.f12327o != 0) {
            ArrayList arrayList = new ArrayList();
            if ((format.f12327o & 4) != 0) {
                arrayList.add("auto");
            }
            if ((format.f12327o & 1) != 0) {
                arrayList.add("default");
            }
            if ((format.f12327o & 2) != 0) {
                arrayList.add("forced");
            }
            sb2.append(", selectionFlags=[");
            ii.g.d(',').b(sb2, arrayList);
            sb2.append("]");
        }
        if (format.f12328p != 0) {
            ArrayList arrayList2 = new ArrayList();
            if ((format.f12328p & 1) != 0) {
                arrayList2.add("main");
            }
            if ((format.f12328p & 2) != 0) {
                arrayList2.add("alt");
            }
            if ((format.f12328p & 4) != 0) {
                arrayList2.add("supplementary");
            }
            if ((format.f12328p & 8) != 0) {
                arrayList2.add("commentary");
            }
            if ((format.f12328p & 16) != 0) {
                arrayList2.add("dub");
            }
            if ((format.f12328p & 32) != 0) {
                arrayList2.add("emergency");
            }
            if ((format.f12328p & 64) != 0) {
                arrayList2.add("caption");
            }
            if ((format.f12328p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                arrayList2.add("subtitle");
            }
            if ((format.f12328p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                arrayList2.add("sign");
            }
            if ((format.f12328p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                arrayList2.add("describes-video");
            }
            if ((format.f12328p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                arrayList2.add("describes-music");
            }
            if ((format.f12328p & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                arrayList2.add("enhanced-intelligibility");
            }
            if ((format.f12328p & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                arrayList2.add("transcribes-dialog");
            }
            if ((format.f12328p & 8192) != 0) {
                arrayList2.add("easy-read");
            }
            if ((format.f12328p & 16384) != 0) {
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
            if ((i11 == 0 || (i10 = format.S) == 0 || i11 == i10) && this.f12327o == format.f12327o && this.f12328p == format.f12328p && this.f12329q == format.f12329q && this.f12330r == format.f12330r && this.f12336x == format.f12336x && this.A == format.A && this.B == format.B && this.C == format.C && this.E == format.E && this.H == format.H && this.J == format.J && this.K == format.K && this.L == format.L && this.M == format.M && this.N == format.N && this.O == format.O && this.P == format.P && this.Q == format.Q && this.R == format.R && Float.compare(this.D, format.D) == 0 && Float.compare(this.F, format.F) == 0 && ne.w0.c(this.f12324d, format.f12324d) && ne.w0.c(this.f12325e, format.f12325e) && ne.w0.c(this.f12332t, format.f12332t) && ne.w0.c(this.f12334v, format.f12334v) && ne.w0.c(this.f12335w, format.f12335w) && ne.w0.c(this.f12326i, format.f12326i) && Arrays.equals(this.G, format.G) && ne.w0.c(this.f12333u, format.f12333u) && ne.w0.c(this.I, format.I) && ne.w0.c(this.f12338z, format.f12338z) && g(format)) {
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
        if (this.f12337y.size() != format.f12337y.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f12337y.size(); i10++) {
            if (!Arrays.equals((byte[]) this.f12337y.get(i10), (byte[]) format.f12337y.get(i10))) {
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
            String str = this.f12324d;
            int i11 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = (527 + hashCode) * 31;
            String str2 = this.f12325e;
            if (str2 != null) {
                i10 = str2.hashCode();
            } else {
                i10 = 0;
            }
            int i13 = (i12 + i10) * 31;
            String str3 = this.f12326i;
            if (str3 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str3.hashCode();
            }
            int i14 = (((((((((i13 + hashCode2) * 31) + this.f12327o) * 31) + this.f12328p) * 31) + this.f12329q) * 31) + this.f12330r) * 31;
            String str4 = this.f12332t;
            if (str4 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str4.hashCode();
            }
            int i15 = (i14 + hashCode3) * 31;
            Metadata metadata = this.f12333u;
            if (metadata == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = metadata.hashCode();
            }
            int i16 = (i15 + hashCode4) * 31;
            String str5 = this.f12334v;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i17 = (i16 + hashCode5) * 31;
            String str6 = this.f12335w;
            if (str6 != null) {
                i11 = str6.hashCode();
            }
            this.S = ((((((((((((((((((((((((((((((((((i17 + i11) * 31) + this.f12336x) * 31) + ((int) this.A)) * 31) + this.B) * 31) + this.C) * 31) + Float.floatToIntBits(this.D)) * 31) + this.E) * 31) + Float.floatToIntBits(this.F)) * 31) + this.H) * 31) + this.J) * 31) + this.K) * 31) + this.L) * 31) + this.M) * 31) + this.N) * 31) + this.O) * 31) + this.P) * 31) + this.Q) * 31) + this.R;
        }
        return this.S;
    }

    public Format j(Format format) {
        String str;
        Metadata b10;
        if (this == format) {
            return this;
        }
        int k10 = ne.c0.k(this.f12335w);
        String str2 = format.f12324d;
        String str3 = format.f12325e;
        if (str3 == null) {
            str3 = this.f12325e;
        }
        String str4 = this.f12326i;
        if ((k10 == 3 || k10 == 1) && (str = format.f12326i) != null) {
            str4 = str;
        }
        int i10 = this.f12329q;
        if (i10 == -1) {
            i10 = format.f12329q;
        }
        int i11 = this.f12330r;
        if (i11 == -1) {
            i11 = format.f12330r;
        }
        String str5 = this.f12332t;
        if (str5 == null) {
            String M = ne.w0.M(format.f12332t, k10);
            if (ne.w0.f1(M).length == 1) {
                str5 = M;
            }
        }
        Metadata metadata = this.f12333u;
        if (metadata == null) {
            b10 = format.f12333u;
        } else {
            b10 = metadata.b(format.f12333u);
        }
        float f10 = this.D;
        if (f10 == -1.0f && k10 == 2) {
            f10 = format.D;
        }
        int i12 = this.f12327o | format.f12327o;
        return b().U(str2).W(str3).X(str4).i0(i12).e0(this.f12328p | format.f12328p).I(i10).b0(i11).K(str5).Z(b10).O(rc.m.g(format.f12338z, this.f12338z)).R(f10).G();
    }

    public String toString() {
        return "Format(" + this.f12324d + ", " + this.f12325e + ", " + this.f12334v + ", " + this.f12335w + ", " + this.f12332t + ", " + this.f12331s + ", " + this.f12326i + ", [" + this.B + ", " + this.C + ", " + this.D + ", " + this.I + "], [" + this.J + ", " + this.K + "])";
    }

    private Format(b bVar) {
        this.f12324d = bVar.f12339a;
        this.f12325e = bVar.f12340b;
        this.f12326i = ne.w0.M0(bVar.f12341c);
        this.f12327o = bVar.f12342d;
        this.f12328p = bVar.f12343e;
        int i10 = bVar.f12344f;
        this.f12329q = i10;
        int i11 = bVar.f12345g;
        this.f12330r = i11;
        this.f12331s = i11 != -1 ? i11 : i10;
        this.f12332t = bVar.f12346h;
        this.f12333u = bVar.f12347i;
        this.f12334v = bVar.f12348j;
        this.f12335w = bVar.f12349k;
        this.f12336x = bVar.f12350l;
        this.f12337y = bVar.f12351m == null ? Collections.EMPTY_LIST : bVar.f12351m;
        rc.m mVar = bVar.f12352n;
        this.f12338z = mVar;
        this.A = bVar.f12353o;
        this.B = bVar.f12354p;
        this.C = bVar.f12355q;
        this.D = bVar.f12356r;
        this.E = bVar.f12357s == -1 ? 0 : bVar.f12357s;
        this.F = bVar.f12358t == -1.0f ? 1.0f : bVar.f12358t;
        this.G = bVar.f12359u;
        this.H = bVar.f12360v;
        this.I = bVar.f12361w;
        this.J = bVar.f12362x;
        this.K = bVar.f12363y;
        this.L = bVar.f12364z;
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
