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
    public final String f11292d;

    /* renamed from: e  reason: collision with root package name */
    public final String f11293e;

    /* renamed from: i  reason: collision with root package name */
    public final String f11294i;

    /* renamed from: o  reason: collision with root package name */
    public final int f11295o;

    /* renamed from: p  reason: collision with root package name */
    public final int f11296p;

    /* renamed from: q  reason: collision with root package name */
    public final int f11297q;

    /* renamed from: r  reason: collision with root package name */
    public final int f11298r;

    /* renamed from: s  reason: collision with root package name */
    public final int f11299s;

    /* renamed from: t  reason: collision with root package name */
    public final String f11300t;

    /* renamed from: u  reason: collision with root package name */
    public final Metadata f11301u;

    /* renamed from: v  reason: collision with root package name */
    public final String f11302v;

    /* renamed from: w  reason: collision with root package name */
    public final String f11303w;

    /* renamed from: x  reason: collision with root package name */
    public final int f11304x;

    /* renamed from: y  reason: collision with root package name */
    public final List f11305y;

    /* renamed from: z  reason: collision with root package name */
    public final rc.m f11306z;
    private static final Format T = new b().G();
    private static final String U = ne.w0.B0(0);
    private static final String V = ne.w0.B0(1);
    private static final String W = ne.w0.B0(2);
    private static final String X = ne.w0.B0(3);
    private static final String Y = ne.w0.B0(4);
    private static final String Z = ne.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f11266a0 = ne.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f11267b0 = ne.w0.B0(7);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f11268c0 = ne.w0.B0(8);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f11269d0 = ne.w0.B0(9);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f11270e0 = ne.w0.B0(10);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f11271f0 = ne.w0.B0(11);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f11272g0 = ne.w0.B0(12);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f11273h0 = ne.w0.B0(13);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f11274i0 = ne.w0.B0(14);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f11275j0 = ne.w0.B0(15);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f11276k0 = ne.w0.B0(16);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f11277l0 = ne.w0.B0(17);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f11278m0 = ne.w0.B0(18);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f11279n0 = ne.w0.B0(19);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f11280o0 = ne.w0.B0(20);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f11281p0 = ne.w0.B0(21);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f11282q0 = ne.w0.B0(22);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f11283r0 = ne.w0.B0(23);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f11284s0 = ne.w0.B0(24);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f11285t0 = ne.w0.B0(25);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f11286u0 = ne.w0.B0(26);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f11287v0 = ne.w0.B0(27);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f11288w0 = ne.w0.B0(28);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f11289x0 = ne.w0.B0(29);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f11290y0 = ne.w0.B0(30);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f11291z0 = ne.w0.B0(31);
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
        private String f11307a;

        /* renamed from: b  reason: collision with root package name */
        private String f11308b;

        /* renamed from: c  reason: collision with root package name */
        private String f11309c;

        /* renamed from: d  reason: collision with root package name */
        private int f11310d;

        /* renamed from: e  reason: collision with root package name */
        private int f11311e;

        /* renamed from: f  reason: collision with root package name */
        private int f11312f;

        /* renamed from: g  reason: collision with root package name */
        private int f11313g;

        /* renamed from: h  reason: collision with root package name */
        private String f11314h;

        /* renamed from: i  reason: collision with root package name */
        private Metadata f11315i;

        /* renamed from: j  reason: collision with root package name */
        private String f11316j;

        /* renamed from: k  reason: collision with root package name */
        private String f11317k;

        /* renamed from: l  reason: collision with root package name */
        private int f11318l;

        /* renamed from: m  reason: collision with root package name */
        private List f11319m;

        /* renamed from: n  reason: collision with root package name */
        private rc.m f11320n;

        /* renamed from: o  reason: collision with root package name */
        private long f11321o;

        /* renamed from: p  reason: collision with root package name */
        private int f11322p;

        /* renamed from: q  reason: collision with root package name */
        private int f11323q;

        /* renamed from: r  reason: collision with root package name */
        private float f11324r;

        /* renamed from: s  reason: collision with root package name */
        private int f11325s;

        /* renamed from: t  reason: collision with root package name */
        private float f11326t;

        /* renamed from: u  reason: collision with root package name */
        private byte[] f11327u;

        /* renamed from: v  reason: collision with root package name */
        private int f11328v;

        /* renamed from: w  reason: collision with root package name */
        private oe.c f11329w;

        /* renamed from: x  reason: collision with root package name */
        private int f11330x;

        /* renamed from: y  reason: collision with root package name */
        private int f11331y;

        /* renamed from: z  reason: collision with root package name */
        private int f11332z;

        public Format G() {
            return new Format(this);
        }

        public b H(int i10) {
            this.C = i10;
            return this;
        }

        public b I(int i10) {
            this.f11312f = i10;
            return this;
        }

        public b J(int i10) {
            this.f11330x = i10;
            return this;
        }

        public b K(String str) {
            this.f11314h = str;
            return this;
        }

        public b L(oe.c cVar) {
            this.f11329w = cVar;
            return this;
        }

        public b M(String str) {
            this.f11316j = str;
            return this;
        }

        public b N(int i10) {
            this.F = i10;
            return this;
        }

        public b O(rc.m mVar) {
            this.f11320n = mVar;
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
            this.f11324r = f10;
            return this;
        }

        public b S(int i10) {
            this.f11323q = i10;
            return this;
        }

        public b T(int i10) {
            this.f11307a = Integer.toString(i10);
            return this;
        }

        public b U(String str) {
            this.f11307a = str;
            return this;
        }

        public b V(List list) {
            this.f11319m = list;
            return this;
        }

        public b W(String str) {
            this.f11308b = str;
            return this;
        }

        public b X(String str) {
            this.f11309c = str;
            return this;
        }

        public b Y(int i10) {
            this.f11318l = i10;
            return this;
        }

        public b Z(Metadata metadata) {
            this.f11315i = metadata;
            return this;
        }

        public b a0(int i10) {
            this.f11332z = i10;
            return this;
        }

        public b b0(int i10) {
            this.f11313g = i10;
            return this;
        }

        public b c0(float f10) {
            this.f11326t = f10;
            return this;
        }

        public b d0(byte[] bArr) {
            this.f11327u = bArr;
            return this;
        }

        public b e0(int i10) {
            this.f11311e = i10;
            return this;
        }

        public b f0(int i10) {
            this.f11325s = i10;
            return this;
        }

        public b g0(String str) {
            this.f11317k = str;
            return this;
        }

        public b h0(int i10) {
            this.f11331y = i10;
            return this;
        }

        public b i0(int i10) {
            this.f11310d = i10;
            return this;
        }

        public b j0(int i10) {
            this.f11328v = i10;
            return this;
        }

        public b k0(long j10) {
            this.f11321o = j10;
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
            this.f11322p = i10;
            return this;
        }

        public b() {
            this.f11312f = -1;
            this.f11313g = -1;
            this.f11318l = -1;
            this.f11321o = LongCompanionObject.MAX_VALUE;
            this.f11322p = -1;
            this.f11323q = -1;
            this.f11324r = -1.0f;
            this.f11326t = 1.0f;
            this.f11328v = -1;
            this.f11330x = -1;
            this.f11331y = -1;
            this.f11332z = -1;
            this.C = -1;
            this.D = -1;
            this.E = -1;
            this.F = 0;
        }

        private b(Format format) {
            this.f11307a = format.f11292d;
            this.f11308b = format.f11293e;
            this.f11309c = format.f11294i;
            this.f11310d = format.f11295o;
            this.f11311e = format.f11296p;
            this.f11312f = format.f11297q;
            this.f11313g = format.f11298r;
            this.f11314h = format.f11300t;
            this.f11315i = format.f11301u;
            this.f11316j = format.f11302v;
            this.f11317k = format.f11303w;
            this.f11318l = format.f11304x;
            this.f11319m = format.f11305y;
            this.f11320n = format.f11306z;
            this.f11321o = format.A;
            this.f11322p = format.B;
            this.f11323q = format.C;
            this.f11324r = format.D;
            this.f11325s = format.E;
            this.f11326t = format.F;
            this.f11327u = format.G;
            this.f11328v = format.H;
            this.f11329w = format.I;
            this.f11330x = format.J;
            this.f11331y = format.K;
            this.f11332z = format.L;
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
        bVar.U((String) d(string, format.f11292d)).W((String) d(bundle.getString(V), format.f11293e)).X((String) d(bundle.getString(W), format.f11294i)).i0(bundle.getInt(X, format.f11295o)).e0(bundle.getInt(Y, format.f11296p)).I(bundle.getInt(Z, format.f11297q)).b0(bundle.getInt(f11266a0, format.f11298r)).K((String) d(bundle.getString(f11267b0), format.f11300t)).Z((Metadata) d((Metadata) bundle.getParcelable(f11268c0), format.f11301u)).M((String) d(bundle.getString(f11269d0), format.f11302v)).g0((String) d(bundle.getString(f11270e0), format.f11303w)).Y(bundle.getInt(f11271f0, format.f11304x));
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
        b O = bVar.V(arrayList).O((rc.m) bundle.getParcelable(f11273h0));
        String str = f11274i0;
        Format format2 = T;
        O.k0(bundle.getLong(str, format2.A)).n0(bundle.getInt(f11275j0, format2.B)).S(bundle.getInt(f11276k0, format2.C)).R(bundle.getFloat(f11277l0, format2.D)).f0(bundle.getInt(f11278m0, format2.E)).c0(bundle.getFloat(f11279n0, format2.F)).d0(bundle.getByteArray(f11280o0)).j0(bundle.getInt(f11281p0, format2.H));
        Bundle bundle2 = bundle.getBundle(f11282q0);
        if (bundle2 != null) {
            bVar.L((oe.c) oe.c.f42468w.a(bundle2));
        }
        bVar.J(bundle.getInt(f11283r0, format2.J)).h0(bundle.getInt(f11284s0, format2.K)).a0(bundle.getInt(f11285t0, format2.L)).P(bundle.getInt(f11286u0, format2.M)).Q(bundle.getInt(f11287v0, format2.N)).H(bundle.getInt(f11288w0, format2.O)).l0(bundle.getInt(f11290y0, format2.P)).m0(bundle.getInt(f11291z0, format2.Q)).N(bundle.getInt(f11289x0, format2.R));
        return bVar.G();
    }

    private static String h(int i10) {
        return f11272g0 + "_" + Integer.toString(i10, 36);
    }

    public static String i(Format format) {
        if (format == null) {
            return "null";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("id=");
        sb2.append(format.f11292d);
        sb2.append(", mimeType=");
        sb2.append(format.f11303w);
        if (format.f11299s != -1) {
            sb2.append(", bitrate=");
            sb2.append(format.f11299s);
        }
        if (format.f11300t != null) {
            sb2.append(", codecs=");
            sb2.append(format.f11300t);
        }
        if (format.f11306z != null) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            int i10 = 0;
            while (true) {
                rc.m mVar = format.f11306z;
                if (i10 >= mVar.f48744o) {
                    break;
                }
                UUID uuid = mVar.n(i10).f48746e;
                if (uuid.equals(lc.d.f36653b)) {
                    linkedHashSet.add("cenc");
                } else if (uuid.equals(lc.d.f36654c)) {
                    linkedHashSet.add("clearkey");
                } else if (uuid.equals(lc.d.f36656e)) {
                    linkedHashSet.add("playready");
                } else if (uuid.equals(lc.d.f36655d)) {
                    linkedHashSet.add("widevine");
                } else if (uuid.equals(lc.d.f36652a)) {
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
        if (format.f11294i != null) {
            sb2.append(", language=");
            sb2.append(format.f11294i);
        }
        if (format.f11293e != null) {
            sb2.append(", label=");
            sb2.append(format.f11293e);
        }
        if (format.f11295o != 0) {
            ArrayList arrayList = new ArrayList();
            if ((format.f11295o & 4) != 0) {
                arrayList.add("auto");
            }
            if ((format.f11295o & 1) != 0) {
                arrayList.add("default");
            }
            if ((format.f11295o & 2) != 0) {
                arrayList.add("forced");
            }
            sb2.append(", selectionFlags=[");
            ii.g.d(',').b(sb2, arrayList);
            sb2.append("]");
        }
        if (format.f11296p != 0) {
            ArrayList arrayList2 = new ArrayList();
            if ((format.f11296p & 1) != 0) {
                arrayList2.add("main");
            }
            if ((format.f11296p & 2) != 0) {
                arrayList2.add("alt");
            }
            if ((format.f11296p & 4) != 0) {
                arrayList2.add("supplementary");
            }
            if ((format.f11296p & 8) != 0) {
                arrayList2.add("commentary");
            }
            if ((format.f11296p & 16) != 0) {
                arrayList2.add("dub");
            }
            if ((format.f11296p & 32) != 0) {
                arrayList2.add("emergency");
            }
            if ((format.f11296p & 64) != 0) {
                arrayList2.add("caption");
            }
            if ((format.f11296p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                arrayList2.add("subtitle");
            }
            if ((format.f11296p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                arrayList2.add("sign");
            }
            if ((format.f11296p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                arrayList2.add("describes-video");
            }
            if ((format.f11296p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                arrayList2.add("describes-music");
            }
            if ((format.f11296p & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                arrayList2.add("enhanced-intelligibility");
            }
            if ((format.f11296p & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                arrayList2.add("transcribes-dialog");
            }
            if ((format.f11296p & 8192) != 0) {
                arrayList2.add("easy-read");
            }
            if ((format.f11296p & 16384) != 0) {
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
            if ((i11 == 0 || (i10 = format.S) == 0 || i11 == i10) && this.f11295o == format.f11295o && this.f11296p == format.f11296p && this.f11297q == format.f11297q && this.f11298r == format.f11298r && this.f11304x == format.f11304x && this.A == format.A && this.B == format.B && this.C == format.C && this.E == format.E && this.H == format.H && this.J == format.J && this.K == format.K && this.L == format.L && this.M == format.M && this.N == format.N && this.O == format.O && this.P == format.P && this.Q == format.Q && this.R == format.R && Float.compare(this.D, format.D) == 0 && Float.compare(this.F, format.F) == 0 && ne.w0.c(this.f11292d, format.f11292d) && ne.w0.c(this.f11293e, format.f11293e) && ne.w0.c(this.f11300t, format.f11300t) && ne.w0.c(this.f11302v, format.f11302v) && ne.w0.c(this.f11303w, format.f11303w) && ne.w0.c(this.f11294i, format.f11294i) && Arrays.equals(this.G, format.G) && ne.w0.c(this.f11301u, format.f11301u) && ne.w0.c(this.I, format.I) && ne.w0.c(this.f11306z, format.f11306z) && g(format)) {
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
        if (this.f11305y.size() != format.f11305y.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f11305y.size(); i10++) {
            if (!Arrays.equals((byte[]) this.f11305y.get(i10), (byte[]) format.f11305y.get(i10))) {
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
            String str = this.f11292d;
            int i11 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = (527 + hashCode) * 31;
            String str2 = this.f11293e;
            if (str2 != null) {
                i10 = str2.hashCode();
            } else {
                i10 = 0;
            }
            int i13 = (i12 + i10) * 31;
            String str3 = this.f11294i;
            if (str3 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str3.hashCode();
            }
            int i14 = (((((((((i13 + hashCode2) * 31) + this.f11295o) * 31) + this.f11296p) * 31) + this.f11297q) * 31) + this.f11298r) * 31;
            String str4 = this.f11300t;
            if (str4 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str4.hashCode();
            }
            int i15 = (i14 + hashCode3) * 31;
            Metadata metadata = this.f11301u;
            if (metadata == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = metadata.hashCode();
            }
            int i16 = (i15 + hashCode4) * 31;
            String str5 = this.f11302v;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i17 = (i16 + hashCode5) * 31;
            String str6 = this.f11303w;
            if (str6 != null) {
                i11 = str6.hashCode();
            }
            this.S = ((((((((((((((((((((((((((((((((((i17 + i11) * 31) + this.f11304x) * 31) + ((int) this.A)) * 31) + this.B) * 31) + this.C) * 31) + Float.floatToIntBits(this.D)) * 31) + this.E) * 31) + Float.floatToIntBits(this.F)) * 31) + this.H) * 31) + this.J) * 31) + this.K) * 31) + this.L) * 31) + this.M) * 31) + this.N) * 31) + this.O) * 31) + this.P) * 31) + this.Q) * 31) + this.R;
        }
        return this.S;
    }

    public Format j(Format format) {
        String str;
        Metadata b10;
        if (this == format) {
            return this;
        }
        int k10 = ne.c0.k(this.f11303w);
        String str2 = format.f11292d;
        String str3 = format.f11293e;
        if (str3 == null) {
            str3 = this.f11293e;
        }
        String str4 = this.f11294i;
        if ((k10 == 3 || k10 == 1) && (str = format.f11294i) != null) {
            str4 = str;
        }
        int i10 = this.f11297q;
        if (i10 == -1) {
            i10 = format.f11297q;
        }
        int i11 = this.f11298r;
        if (i11 == -1) {
            i11 = format.f11298r;
        }
        String str5 = this.f11300t;
        if (str5 == null) {
            String M = ne.w0.M(format.f11300t, k10);
            if (ne.w0.f1(M).length == 1) {
                str5 = M;
            }
        }
        Metadata metadata = this.f11301u;
        if (metadata == null) {
            b10 = format.f11301u;
        } else {
            b10 = metadata.b(format.f11301u);
        }
        float f10 = this.D;
        if (f10 == -1.0f && k10 == 2) {
            f10 = format.D;
        }
        int i12 = this.f11295o | format.f11295o;
        return b().U(str2).W(str3).X(str4).i0(i12).e0(this.f11296p | format.f11296p).I(i10).b0(i11).K(str5).Z(b10).O(rc.m.m(format.f11306z, this.f11306z)).R(f10).G();
    }

    public String toString() {
        return "Format(" + this.f11292d + ", " + this.f11293e + ", " + this.f11302v + ", " + this.f11303w + ", " + this.f11300t + ", " + this.f11299s + ", " + this.f11294i + ", [" + this.B + ", " + this.C + ", " + this.D + ", " + this.I + "], [" + this.J + ", " + this.K + "])";
    }

    private Format(b bVar) {
        this.f11292d = bVar.f11307a;
        this.f11293e = bVar.f11308b;
        this.f11294i = ne.w0.M0(bVar.f11309c);
        this.f11295o = bVar.f11310d;
        this.f11296p = bVar.f11311e;
        int i10 = bVar.f11312f;
        this.f11297q = i10;
        int i11 = bVar.f11313g;
        this.f11298r = i11;
        this.f11299s = i11 != -1 ? i11 : i10;
        this.f11300t = bVar.f11314h;
        this.f11301u = bVar.f11315i;
        this.f11302v = bVar.f11316j;
        this.f11303w = bVar.f11317k;
        this.f11304x = bVar.f11318l;
        this.f11305y = bVar.f11319m == null ? Collections.EMPTY_LIST : bVar.f11319m;
        rc.m mVar = bVar.f11320n;
        this.f11306z = mVar;
        this.A = bVar.f11321o;
        this.B = bVar.f11322p;
        this.C = bVar.f11323q;
        this.D = bVar.f11324r;
        this.E = bVar.f11325s == -1 ? 0 : bVar.f11325s;
        this.F = bVar.f11326t == -1.0f ? 1.0f : bVar.f11326t;
        this.G = bVar.f11327u;
        this.H = bVar.f11328v;
        this.I = bVar.f11329w;
        this.J = bVar.f11330x;
        this.K = bVar.f11331y;
        this.L = bVar.f11332z;
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
