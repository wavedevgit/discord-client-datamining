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
    public final String f11716d;

    /* renamed from: e  reason: collision with root package name */
    public final String f11717e;

    /* renamed from: i  reason: collision with root package name */
    public final String f11718i;

    /* renamed from: o  reason: collision with root package name */
    public final int f11719o;

    /* renamed from: p  reason: collision with root package name */
    public final int f11720p;

    /* renamed from: q  reason: collision with root package name */
    public final int f11721q;

    /* renamed from: r  reason: collision with root package name */
    public final int f11722r;

    /* renamed from: s  reason: collision with root package name */
    public final int f11723s;

    /* renamed from: t  reason: collision with root package name */
    public final String f11724t;

    /* renamed from: u  reason: collision with root package name */
    public final Metadata f11725u;

    /* renamed from: v  reason: collision with root package name */
    public final String f11726v;

    /* renamed from: w  reason: collision with root package name */
    public final String f11727w;

    /* renamed from: x  reason: collision with root package name */
    public final int f11728x;

    /* renamed from: y  reason: collision with root package name */
    public final List f11729y;

    /* renamed from: z  reason: collision with root package name */
    public final sc.m f11730z;
    private static final Format T = new b().G();
    private static final String U = oe.w0.B0(0);
    private static final String V = oe.w0.B0(1);
    private static final String W = oe.w0.B0(2);
    private static final String X = oe.w0.B0(3);
    private static final String Y = oe.w0.B0(4);
    private static final String Z = oe.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f11690a0 = oe.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f11691b0 = oe.w0.B0(7);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f11692c0 = oe.w0.B0(8);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f11693d0 = oe.w0.B0(9);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f11694e0 = oe.w0.B0(10);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f11695f0 = oe.w0.B0(11);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f11696g0 = oe.w0.B0(12);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f11697h0 = oe.w0.B0(13);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f11698i0 = oe.w0.B0(14);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f11699j0 = oe.w0.B0(15);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f11700k0 = oe.w0.B0(16);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f11701l0 = oe.w0.B0(17);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f11702m0 = oe.w0.B0(18);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f11703n0 = oe.w0.B0(19);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f11704o0 = oe.w0.B0(20);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f11705p0 = oe.w0.B0(21);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f11706q0 = oe.w0.B0(22);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f11707r0 = oe.w0.B0(23);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f11708s0 = oe.w0.B0(24);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f11709t0 = oe.w0.B0(25);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f11710u0 = oe.w0.B0(26);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f11711v0 = oe.w0.B0(27);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f11712w0 = oe.w0.B0(28);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f11713x0 = oe.w0.B0(29);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f11714y0 = oe.w0.B0(30);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f11715z0 = oe.w0.B0(31);
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
        private String f11731a;

        /* renamed from: b  reason: collision with root package name */
        private String f11732b;

        /* renamed from: c  reason: collision with root package name */
        private String f11733c;

        /* renamed from: d  reason: collision with root package name */
        private int f11734d;

        /* renamed from: e  reason: collision with root package name */
        private int f11735e;

        /* renamed from: f  reason: collision with root package name */
        private int f11736f;

        /* renamed from: g  reason: collision with root package name */
        private int f11737g;

        /* renamed from: h  reason: collision with root package name */
        private String f11738h;

        /* renamed from: i  reason: collision with root package name */
        private Metadata f11739i;

        /* renamed from: j  reason: collision with root package name */
        private String f11740j;

        /* renamed from: k  reason: collision with root package name */
        private String f11741k;

        /* renamed from: l  reason: collision with root package name */
        private int f11742l;

        /* renamed from: m  reason: collision with root package name */
        private List f11743m;

        /* renamed from: n  reason: collision with root package name */
        private sc.m f11744n;

        /* renamed from: o  reason: collision with root package name */
        private long f11745o;

        /* renamed from: p  reason: collision with root package name */
        private int f11746p;

        /* renamed from: q  reason: collision with root package name */
        private int f11747q;

        /* renamed from: r  reason: collision with root package name */
        private float f11748r;

        /* renamed from: s  reason: collision with root package name */
        private int f11749s;

        /* renamed from: t  reason: collision with root package name */
        private float f11750t;

        /* renamed from: u  reason: collision with root package name */
        private byte[] f11751u;

        /* renamed from: v  reason: collision with root package name */
        private int f11752v;

        /* renamed from: w  reason: collision with root package name */
        private pe.c f11753w;

        /* renamed from: x  reason: collision with root package name */
        private int f11754x;

        /* renamed from: y  reason: collision with root package name */
        private int f11755y;

        /* renamed from: z  reason: collision with root package name */
        private int f11756z;

        public Format G() {
            return new Format(this);
        }

        public b H(int i10) {
            this.C = i10;
            return this;
        }

        public b I(int i10) {
            this.f11736f = i10;
            return this;
        }

        public b J(int i10) {
            this.f11754x = i10;
            return this;
        }

        public b K(String str) {
            this.f11738h = str;
            return this;
        }

        public b L(pe.c cVar) {
            this.f11753w = cVar;
            return this;
        }

        public b M(String str) {
            this.f11740j = str;
            return this;
        }

        public b N(int i10) {
            this.F = i10;
            return this;
        }

        public b O(sc.m mVar) {
            this.f11744n = mVar;
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
            this.f11748r = f10;
            return this;
        }

        public b S(int i10) {
            this.f11747q = i10;
            return this;
        }

        public b T(int i10) {
            this.f11731a = Integer.toString(i10);
            return this;
        }

        public b U(String str) {
            this.f11731a = str;
            return this;
        }

        public b V(List list) {
            this.f11743m = list;
            return this;
        }

        public b W(String str) {
            this.f11732b = str;
            return this;
        }

        public b X(String str) {
            this.f11733c = str;
            return this;
        }

        public b Y(int i10) {
            this.f11742l = i10;
            return this;
        }

        public b Z(Metadata metadata) {
            this.f11739i = metadata;
            return this;
        }

        public b a0(int i10) {
            this.f11756z = i10;
            return this;
        }

        public b b0(int i10) {
            this.f11737g = i10;
            return this;
        }

        public b c0(float f10) {
            this.f11750t = f10;
            return this;
        }

        public b d0(byte[] bArr) {
            this.f11751u = bArr;
            return this;
        }

        public b e0(int i10) {
            this.f11735e = i10;
            return this;
        }

        public b f0(int i10) {
            this.f11749s = i10;
            return this;
        }

        public b g0(String str) {
            this.f11741k = str;
            return this;
        }

        public b h0(int i10) {
            this.f11755y = i10;
            return this;
        }

        public b i0(int i10) {
            this.f11734d = i10;
            return this;
        }

        public b j0(int i10) {
            this.f11752v = i10;
            return this;
        }

        public b k0(long j10) {
            this.f11745o = j10;
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
            this.f11746p = i10;
            return this;
        }

        public b() {
            this.f11736f = -1;
            this.f11737g = -1;
            this.f11742l = -1;
            this.f11745o = LongCompanionObject.MAX_VALUE;
            this.f11746p = -1;
            this.f11747q = -1;
            this.f11748r = -1.0f;
            this.f11750t = 1.0f;
            this.f11752v = -1;
            this.f11754x = -1;
            this.f11755y = -1;
            this.f11756z = -1;
            this.C = -1;
            this.D = -1;
            this.E = -1;
            this.F = 0;
        }

        private b(Format format) {
            this.f11731a = format.f11716d;
            this.f11732b = format.f11717e;
            this.f11733c = format.f11718i;
            this.f11734d = format.f11719o;
            this.f11735e = format.f11720p;
            this.f11736f = format.f11721q;
            this.f11737g = format.f11722r;
            this.f11738h = format.f11724t;
            this.f11739i = format.f11725u;
            this.f11740j = format.f11726v;
            this.f11741k = format.f11727w;
            this.f11742l = format.f11728x;
            this.f11743m = format.f11729y;
            this.f11744n = format.f11730z;
            this.f11745o = format.A;
            this.f11746p = format.B;
            this.f11747q = format.C;
            this.f11748r = format.D;
            this.f11749s = format.E;
            this.f11750t = format.F;
            this.f11751u = format.G;
            this.f11752v = format.H;
            this.f11753w = format.I;
            this.f11754x = format.J;
            this.f11755y = format.K;
            this.f11756z = format.L;
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
        bVar.U((String) d(string, format.f11716d)).W((String) d(bundle.getString(V), format.f11717e)).X((String) d(bundle.getString(W), format.f11718i)).i0(bundle.getInt(X, format.f11719o)).e0(bundle.getInt(Y, format.f11720p)).I(bundle.getInt(Z, format.f11721q)).b0(bundle.getInt(f11690a0, format.f11722r)).K((String) d(bundle.getString(f11691b0), format.f11724t)).Z((Metadata) d((Metadata) bundle.getParcelable(f11692c0), format.f11725u)).M((String) d(bundle.getString(f11693d0), format.f11726v)).g0((String) d(bundle.getString(f11694e0), format.f11727w)).Y(bundle.getInt(f11695f0, format.f11728x));
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
        b O = bVar.V(arrayList).O((sc.m) bundle.getParcelable(f11697h0));
        String str = f11698i0;
        Format format2 = T;
        O.k0(bundle.getLong(str, format2.A)).n0(bundle.getInt(f11699j0, format2.B)).S(bundle.getInt(f11700k0, format2.C)).R(bundle.getFloat(f11701l0, format2.D)).f0(bundle.getInt(f11702m0, format2.E)).c0(bundle.getFloat(f11703n0, format2.F)).d0(bundle.getByteArray(f11704o0)).j0(bundle.getInt(f11705p0, format2.H));
        Bundle bundle2 = bundle.getBundle(f11706q0);
        if (bundle2 != null) {
            bVar.L((pe.c) pe.c.f43105w.a(bundle2));
        }
        bVar.J(bundle.getInt(f11707r0, format2.J)).h0(bundle.getInt(f11708s0, format2.K)).a0(bundle.getInt(f11709t0, format2.L)).P(bundle.getInt(f11710u0, format2.M)).Q(bundle.getInt(f11711v0, format2.N)).H(bundle.getInt(f11712w0, format2.O)).l0(bundle.getInt(f11714y0, format2.P)).m0(bundle.getInt(f11715z0, format2.Q)).N(bundle.getInt(f11713x0, format2.R));
        return bVar.G();
    }

    private static String h(int i10) {
        return f11696g0 + "_" + Integer.toString(i10, 36);
    }

    public static String i(Format format) {
        if (format == null) {
            return "null";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("id=");
        sb2.append(format.f11716d);
        sb2.append(", mimeType=");
        sb2.append(format.f11727w);
        if (format.f11723s != -1) {
            sb2.append(", bitrate=");
            sb2.append(format.f11723s);
        }
        if (format.f11724t != null) {
            sb2.append(", codecs=");
            sb2.append(format.f11724t);
        }
        if (format.f11730z != null) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            int i10 = 0;
            while (true) {
                sc.m mVar = format.f11730z;
                if (i10 >= mVar.f49711o) {
                    break;
                }
                UUID uuid = mVar.i(i10).f49713e;
                if (uuid.equals(mc.d.f36851b)) {
                    linkedHashSet.add("cenc");
                } else if (uuid.equals(mc.d.f36852c)) {
                    linkedHashSet.add("clearkey");
                } else if (uuid.equals(mc.d.f36854e)) {
                    linkedHashSet.add("playready");
                } else if (uuid.equals(mc.d.f36853d)) {
                    linkedHashSet.add("widevine");
                } else if (uuid.equals(mc.d.f36850a)) {
                    linkedHashSet.add("universal");
                } else {
                    linkedHashSet.add("unknown (" + uuid + ")");
                }
                i10++;
            }
            sb2.append(", drm=[");
            ni.g.d(',').b(sb2, linkedHashSet);
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
        if (format.f11718i != null) {
            sb2.append(", language=");
            sb2.append(format.f11718i);
        }
        if (format.f11717e != null) {
            sb2.append(", label=");
            sb2.append(format.f11717e);
        }
        if (format.f11719o != 0) {
            ArrayList arrayList = new ArrayList();
            if ((format.f11719o & 4) != 0) {
                arrayList.add("auto");
            }
            if ((format.f11719o & 1) != 0) {
                arrayList.add("default");
            }
            if ((format.f11719o & 2) != 0) {
                arrayList.add("forced");
            }
            sb2.append(", selectionFlags=[");
            ni.g.d(',').b(sb2, arrayList);
            sb2.append("]");
        }
        if (format.f11720p != 0) {
            ArrayList arrayList2 = new ArrayList();
            if ((format.f11720p & 1) != 0) {
                arrayList2.add("main");
            }
            if ((format.f11720p & 2) != 0) {
                arrayList2.add("alt");
            }
            if ((format.f11720p & 4) != 0) {
                arrayList2.add("supplementary");
            }
            if ((format.f11720p & 8) != 0) {
                arrayList2.add("commentary");
            }
            if ((format.f11720p & 16) != 0) {
                arrayList2.add("dub");
            }
            if ((format.f11720p & 32) != 0) {
                arrayList2.add("emergency");
            }
            if ((format.f11720p & 64) != 0) {
                arrayList2.add("caption");
            }
            if ((format.f11720p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                arrayList2.add("subtitle");
            }
            if ((format.f11720p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                arrayList2.add("sign");
            }
            if ((format.f11720p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                arrayList2.add("describes-video");
            }
            if ((format.f11720p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                arrayList2.add("describes-music");
            }
            if ((format.f11720p & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                arrayList2.add("enhanced-intelligibility");
            }
            if ((format.f11720p & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                arrayList2.add("transcribes-dialog");
            }
            if ((format.f11720p & 8192) != 0) {
                arrayList2.add("easy-read");
            }
            if ((format.f11720p & 16384) != 0) {
                arrayList2.add("trick-play");
            }
            sb2.append(", roleFlags=[");
            ni.g.d(',').b(sb2, arrayList2);
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
            if ((i11 == 0 || (i10 = format.S) == 0 || i11 == i10) && this.f11719o == format.f11719o && this.f11720p == format.f11720p && this.f11721q == format.f11721q && this.f11722r == format.f11722r && this.f11728x == format.f11728x && this.A == format.A && this.B == format.B && this.C == format.C && this.E == format.E && this.H == format.H && this.J == format.J && this.K == format.K && this.L == format.L && this.M == format.M && this.N == format.N && this.O == format.O && this.P == format.P && this.Q == format.Q && this.R == format.R && Float.compare(this.D, format.D) == 0 && Float.compare(this.F, format.F) == 0 && oe.w0.c(this.f11716d, format.f11716d) && oe.w0.c(this.f11717e, format.f11717e) && oe.w0.c(this.f11724t, format.f11724t) && oe.w0.c(this.f11726v, format.f11726v) && oe.w0.c(this.f11727w, format.f11727w) && oe.w0.c(this.f11718i, format.f11718i) && Arrays.equals(this.G, format.G) && oe.w0.c(this.f11725u, format.f11725u) && oe.w0.c(this.I, format.I) && oe.w0.c(this.f11730z, format.f11730z) && g(format)) {
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
        if (this.f11729y.size() != format.f11729y.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f11729y.size(); i10++) {
            if (!Arrays.equals((byte[]) this.f11729y.get(i10), (byte[]) format.f11729y.get(i10))) {
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
            String str = this.f11716d;
            int i11 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = (527 + hashCode) * 31;
            String str2 = this.f11717e;
            if (str2 != null) {
                i10 = str2.hashCode();
            } else {
                i10 = 0;
            }
            int i13 = (i12 + i10) * 31;
            String str3 = this.f11718i;
            if (str3 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str3.hashCode();
            }
            int i14 = (((((((((i13 + hashCode2) * 31) + this.f11719o) * 31) + this.f11720p) * 31) + this.f11721q) * 31) + this.f11722r) * 31;
            String str4 = this.f11724t;
            if (str4 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str4.hashCode();
            }
            int i15 = (i14 + hashCode3) * 31;
            Metadata metadata = this.f11725u;
            if (metadata == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = metadata.hashCode();
            }
            int i16 = (i15 + hashCode4) * 31;
            String str5 = this.f11726v;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i17 = (i16 + hashCode5) * 31;
            String str6 = this.f11727w;
            if (str6 != null) {
                i11 = str6.hashCode();
            }
            this.S = ((((((((((((((((((((((((((((((((((i17 + i11) * 31) + this.f11728x) * 31) + ((int) this.A)) * 31) + this.B) * 31) + this.C) * 31) + Float.floatToIntBits(this.D)) * 31) + this.E) * 31) + Float.floatToIntBits(this.F)) * 31) + this.H) * 31) + this.J) * 31) + this.K) * 31) + this.L) * 31) + this.M) * 31) + this.N) * 31) + this.O) * 31) + this.P) * 31) + this.Q) * 31) + this.R;
        }
        return this.S;
    }

    public Format j(Format format) {
        String str;
        Metadata b10;
        if (this == format) {
            return this;
        }
        int k10 = oe.c0.k(this.f11727w);
        String str2 = format.f11716d;
        String str3 = format.f11717e;
        if (str3 == null) {
            str3 = this.f11717e;
        }
        String str4 = this.f11718i;
        if ((k10 == 3 || k10 == 1) && (str = format.f11718i) != null) {
            str4 = str;
        }
        int i10 = this.f11721q;
        if (i10 == -1) {
            i10 = format.f11721q;
        }
        int i11 = this.f11722r;
        if (i11 == -1) {
            i11 = format.f11722r;
        }
        String str5 = this.f11724t;
        if (str5 == null) {
            String M = oe.w0.M(format.f11724t, k10);
            if (oe.w0.f1(M).length == 1) {
                str5 = M;
            }
        }
        Metadata metadata = this.f11725u;
        if (metadata == null) {
            b10 = format.f11725u;
        } else {
            b10 = metadata.b(format.f11725u);
        }
        float f10 = this.D;
        if (f10 == -1.0f && k10 == 2) {
            f10 = format.D;
        }
        int i12 = this.f11719o | format.f11719o;
        return b().U(str2).W(str3).X(str4).i0(i12).e0(this.f11720p | format.f11720p).I(i10).b0(i11).K(str5).Z(b10).O(sc.m.h(format.f11730z, this.f11730z)).R(f10).G();
    }

    public String toString() {
        return "Format(" + this.f11716d + ", " + this.f11717e + ", " + this.f11726v + ", " + this.f11727w + ", " + this.f11724t + ", " + this.f11723s + ", " + this.f11718i + ", [" + this.B + ", " + this.C + ", " + this.D + ", " + this.I + "], [" + this.J + ", " + this.K + "])";
    }

    private Format(b bVar) {
        this.f11716d = bVar.f11731a;
        this.f11717e = bVar.f11732b;
        this.f11718i = oe.w0.M0(bVar.f11733c);
        this.f11719o = bVar.f11734d;
        this.f11720p = bVar.f11735e;
        int i10 = bVar.f11736f;
        this.f11721q = i10;
        int i11 = bVar.f11737g;
        this.f11722r = i11;
        this.f11723s = i11 != -1 ? i11 : i10;
        this.f11724t = bVar.f11738h;
        this.f11725u = bVar.f11739i;
        this.f11726v = bVar.f11740j;
        this.f11727w = bVar.f11741k;
        this.f11728x = bVar.f11742l;
        this.f11729y = bVar.f11743m == null ? Collections.EMPTY_LIST : bVar.f11743m;
        sc.m mVar = bVar.f11744n;
        this.f11730z = mVar;
        this.A = bVar.f11745o;
        this.B = bVar.f11746p;
        this.C = bVar.f11747q;
        this.D = bVar.f11748r;
        this.E = bVar.f11749s == -1 ? 0 : bVar.f11749s;
        this.F = bVar.f11750t == -1.0f ? 1.0f : bVar.f11750t;
        this.G = bVar.f11751u;
        this.H = bVar.f11752v;
        this.I = bVar.f11753w;
        this.J = bVar.f11754x;
        this.K = bVar.f11755y;
        this.L = bVar.f11756z;
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
