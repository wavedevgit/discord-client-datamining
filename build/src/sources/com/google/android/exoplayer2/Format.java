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
    public final String f11677d;

    /* renamed from: e  reason: collision with root package name */
    public final String f11678e;

    /* renamed from: i  reason: collision with root package name */
    public final String f11679i;

    /* renamed from: o  reason: collision with root package name */
    public final int f11680o;

    /* renamed from: p  reason: collision with root package name */
    public final int f11681p;

    /* renamed from: q  reason: collision with root package name */
    public final int f11682q;

    /* renamed from: r  reason: collision with root package name */
    public final int f11683r;

    /* renamed from: s  reason: collision with root package name */
    public final int f11684s;

    /* renamed from: t  reason: collision with root package name */
    public final String f11685t;

    /* renamed from: u  reason: collision with root package name */
    public final Metadata f11686u;

    /* renamed from: v  reason: collision with root package name */
    public final String f11687v;

    /* renamed from: w  reason: collision with root package name */
    public final String f11688w;

    /* renamed from: x  reason: collision with root package name */
    public final int f11689x;

    /* renamed from: y  reason: collision with root package name */
    public final List f11690y;

    /* renamed from: z  reason: collision with root package name */
    public final rc.m f11691z;
    private static final Format T = new b().G();
    private static final String U = ne.w0.B0(0);
    private static final String V = ne.w0.B0(1);
    private static final String W = ne.w0.B0(2);
    private static final String X = ne.w0.B0(3);
    private static final String Y = ne.w0.B0(4);
    private static final String Z = ne.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f11651a0 = ne.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f11652b0 = ne.w0.B0(7);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f11653c0 = ne.w0.B0(8);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f11654d0 = ne.w0.B0(9);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f11655e0 = ne.w0.B0(10);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f11656f0 = ne.w0.B0(11);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f11657g0 = ne.w0.B0(12);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f11658h0 = ne.w0.B0(13);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f11659i0 = ne.w0.B0(14);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f11660j0 = ne.w0.B0(15);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f11661k0 = ne.w0.B0(16);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f11662l0 = ne.w0.B0(17);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f11663m0 = ne.w0.B0(18);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f11664n0 = ne.w0.B0(19);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f11665o0 = ne.w0.B0(20);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f11666p0 = ne.w0.B0(21);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f11667q0 = ne.w0.B0(22);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f11668r0 = ne.w0.B0(23);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f11669s0 = ne.w0.B0(24);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f11670t0 = ne.w0.B0(25);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f11671u0 = ne.w0.B0(26);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f11672v0 = ne.w0.B0(27);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f11673w0 = ne.w0.B0(28);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f11674x0 = ne.w0.B0(29);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f11675y0 = ne.w0.B0(30);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f11676z0 = ne.w0.B0(31);
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
        private String f11692a;

        /* renamed from: b  reason: collision with root package name */
        private String f11693b;

        /* renamed from: c  reason: collision with root package name */
        private String f11694c;

        /* renamed from: d  reason: collision with root package name */
        private int f11695d;

        /* renamed from: e  reason: collision with root package name */
        private int f11696e;

        /* renamed from: f  reason: collision with root package name */
        private int f11697f;

        /* renamed from: g  reason: collision with root package name */
        private int f11698g;

        /* renamed from: h  reason: collision with root package name */
        private String f11699h;

        /* renamed from: i  reason: collision with root package name */
        private Metadata f11700i;

        /* renamed from: j  reason: collision with root package name */
        private String f11701j;

        /* renamed from: k  reason: collision with root package name */
        private String f11702k;

        /* renamed from: l  reason: collision with root package name */
        private int f11703l;

        /* renamed from: m  reason: collision with root package name */
        private List f11704m;

        /* renamed from: n  reason: collision with root package name */
        private rc.m f11705n;

        /* renamed from: o  reason: collision with root package name */
        private long f11706o;

        /* renamed from: p  reason: collision with root package name */
        private int f11707p;

        /* renamed from: q  reason: collision with root package name */
        private int f11708q;

        /* renamed from: r  reason: collision with root package name */
        private float f11709r;

        /* renamed from: s  reason: collision with root package name */
        private int f11710s;

        /* renamed from: t  reason: collision with root package name */
        private float f11711t;

        /* renamed from: u  reason: collision with root package name */
        private byte[] f11712u;

        /* renamed from: v  reason: collision with root package name */
        private int f11713v;

        /* renamed from: w  reason: collision with root package name */
        private oe.c f11714w;

        /* renamed from: x  reason: collision with root package name */
        private int f11715x;

        /* renamed from: y  reason: collision with root package name */
        private int f11716y;

        /* renamed from: z  reason: collision with root package name */
        private int f11717z;

        public Format G() {
            return new Format(this);
        }

        public b H(int i10) {
            this.C = i10;
            return this;
        }

        public b I(int i10) {
            this.f11697f = i10;
            return this;
        }

        public b J(int i10) {
            this.f11715x = i10;
            return this;
        }

        public b K(String str) {
            this.f11699h = str;
            return this;
        }

        public b L(oe.c cVar) {
            this.f11714w = cVar;
            return this;
        }

        public b M(String str) {
            this.f11701j = str;
            return this;
        }

        public b N(int i10) {
            this.F = i10;
            return this;
        }

        public b O(rc.m mVar) {
            this.f11705n = mVar;
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
            this.f11709r = f10;
            return this;
        }

        public b S(int i10) {
            this.f11708q = i10;
            return this;
        }

        public b T(int i10) {
            this.f11692a = Integer.toString(i10);
            return this;
        }

        public b U(String str) {
            this.f11692a = str;
            return this;
        }

        public b V(List list) {
            this.f11704m = list;
            return this;
        }

        public b W(String str) {
            this.f11693b = str;
            return this;
        }

        public b X(String str) {
            this.f11694c = str;
            return this;
        }

        public b Y(int i10) {
            this.f11703l = i10;
            return this;
        }

        public b Z(Metadata metadata) {
            this.f11700i = metadata;
            return this;
        }

        public b a0(int i10) {
            this.f11717z = i10;
            return this;
        }

        public b b0(int i10) {
            this.f11698g = i10;
            return this;
        }

        public b c0(float f10) {
            this.f11711t = f10;
            return this;
        }

        public b d0(byte[] bArr) {
            this.f11712u = bArr;
            return this;
        }

        public b e0(int i10) {
            this.f11696e = i10;
            return this;
        }

        public b f0(int i10) {
            this.f11710s = i10;
            return this;
        }

        public b g0(String str) {
            this.f11702k = str;
            return this;
        }

        public b h0(int i10) {
            this.f11716y = i10;
            return this;
        }

        public b i0(int i10) {
            this.f11695d = i10;
            return this;
        }

        public b j0(int i10) {
            this.f11713v = i10;
            return this;
        }

        public b k0(long j10) {
            this.f11706o = j10;
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
            this.f11707p = i10;
            return this;
        }

        public b() {
            this.f11697f = -1;
            this.f11698g = -1;
            this.f11703l = -1;
            this.f11706o = LongCompanionObject.MAX_VALUE;
            this.f11707p = -1;
            this.f11708q = -1;
            this.f11709r = -1.0f;
            this.f11711t = 1.0f;
            this.f11713v = -1;
            this.f11715x = -1;
            this.f11716y = -1;
            this.f11717z = -1;
            this.C = -1;
            this.D = -1;
            this.E = -1;
            this.F = 0;
        }

        private b(Format format) {
            this.f11692a = format.f11677d;
            this.f11693b = format.f11678e;
            this.f11694c = format.f11679i;
            this.f11695d = format.f11680o;
            this.f11696e = format.f11681p;
            this.f11697f = format.f11682q;
            this.f11698g = format.f11683r;
            this.f11699h = format.f11685t;
            this.f11700i = format.f11686u;
            this.f11701j = format.f11687v;
            this.f11702k = format.f11688w;
            this.f11703l = format.f11689x;
            this.f11704m = format.f11690y;
            this.f11705n = format.f11691z;
            this.f11706o = format.A;
            this.f11707p = format.B;
            this.f11708q = format.C;
            this.f11709r = format.D;
            this.f11710s = format.E;
            this.f11711t = format.F;
            this.f11712u = format.G;
            this.f11713v = format.H;
            this.f11714w = format.I;
            this.f11715x = format.J;
            this.f11716y = format.K;
            this.f11717z = format.L;
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
        bVar.U((String) d(string, format.f11677d)).W((String) d(bundle.getString(V), format.f11678e)).X((String) d(bundle.getString(W), format.f11679i)).i0(bundle.getInt(X, format.f11680o)).e0(bundle.getInt(Y, format.f11681p)).I(bundle.getInt(Z, format.f11682q)).b0(bundle.getInt(f11651a0, format.f11683r)).K((String) d(bundle.getString(f11652b0), format.f11685t)).Z((Metadata) d((Metadata) bundle.getParcelable(f11653c0), format.f11686u)).M((String) d(bundle.getString(f11654d0), format.f11687v)).g0((String) d(bundle.getString(f11655e0), format.f11688w)).Y(bundle.getInt(f11656f0, format.f11689x));
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
        b O = bVar.V(arrayList).O((rc.m) bundle.getParcelable(f11658h0));
        String str = f11659i0;
        Format format2 = T;
        O.k0(bundle.getLong(str, format2.A)).n0(bundle.getInt(f11660j0, format2.B)).S(bundle.getInt(f11661k0, format2.C)).R(bundle.getFloat(f11662l0, format2.D)).f0(bundle.getInt(f11663m0, format2.E)).c0(bundle.getFloat(f11664n0, format2.F)).d0(bundle.getByteArray(f11665o0)).j0(bundle.getInt(f11666p0, format2.H));
        Bundle bundle2 = bundle.getBundle(f11667q0);
        if (bundle2 != null) {
            bVar.L((oe.c) oe.c.f42374w.a(bundle2));
        }
        bVar.J(bundle.getInt(f11668r0, format2.J)).h0(bundle.getInt(f11669s0, format2.K)).a0(bundle.getInt(f11670t0, format2.L)).P(bundle.getInt(f11671u0, format2.M)).Q(bundle.getInt(f11672v0, format2.N)).H(bundle.getInt(f11673w0, format2.O)).l0(bundle.getInt(f11675y0, format2.P)).m0(bundle.getInt(f11676z0, format2.Q)).N(bundle.getInt(f11674x0, format2.R));
        return bVar.G();
    }

    private static String h(int i10) {
        return f11657g0 + "_" + Integer.toString(i10, 36);
    }

    public static String i(Format format) {
        if (format == null) {
            return "null";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("id=");
        sb2.append(format.f11677d);
        sb2.append(", mimeType=");
        sb2.append(format.f11688w);
        if (format.f11684s != -1) {
            sb2.append(", bitrate=");
            sb2.append(format.f11684s);
        }
        if (format.f11685t != null) {
            sb2.append(", codecs=");
            sb2.append(format.f11685t);
        }
        if (format.f11691z != null) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            int i10 = 0;
            while (true) {
                rc.m mVar = format.f11691z;
                if (i10 >= mVar.f48754o) {
                    break;
                }
                UUID uuid = mVar.o(i10).f48756e;
                if (uuid.equals(lc.d.f36580b)) {
                    linkedHashSet.add("cenc");
                } else if (uuid.equals(lc.d.f36581c)) {
                    linkedHashSet.add("clearkey");
                } else if (uuid.equals(lc.d.f36583e)) {
                    linkedHashSet.add("playready");
                } else if (uuid.equals(lc.d.f36582d)) {
                    linkedHashSet.add("widevine");
                } else if (uuid.equals(lc.d.f36579a)) {
                    linkedHashSet.add("universal");
                } else {
                    linkedHashSet.add("unknown (" + uuid + ")");
                }
                i10++;
            }
            sb2.append(", drm=[");
            li.g.d(',').b(sb2, linkedHashSet);
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
        if (format.f11679i != null) {
            sb2.append(", language=");
            sb2.append(format.f11679i);
        }
        if (format.f11678e != null) {
            sb2.append(", label=");
            sb2.append(format.f11678e);
        }
        if (format.f11680o != 0) {
            ArrayList arrayList = new ArrayList();
            if ((format.f11680o & 4) != 0) {
                arrayList.add("auto");
            }
            if ((format.f11680o & 1) != 0) {
                arrayList.add("default");
            }
            if ((format.f11680o & 2) != 0) {
                arrayList.add("forced");
            }
            sb2.append(", selectionFlags=[");
            li.g.d(',').b(sb2, arrayList);
            sb2.append("]");
        }
        if (format.f11681p != 0) {
            ArrayList arrayList2 = new ArrayList();
            if ((format.f11681p & 1) != 0) {
                arrayList2.add("main");
            }
            if ((format.f11681p & 2) != 0) {
                arrayList2.add("alt");
            }
            if ((format.f11681p & 4) != 0) {
                arrayList2.add("supplementary");
            }
            if ((format.f11681p & 8) != 0) {
                arrayList2.add("commentary");
            }
            if ((format.f11681p & 16) != 0) {
                arrayList2.add("dub");
            }
            if ((format.f11681p & 32) != 0) {
                arrayList2.add("emergency");
            }
            if ((format.f11681p & 64) != 0) {
                arrayList2.add("caption");
            }
            if ((format.f11681p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                arrayList2.add("subtitle");
            }
            if ((format.f11681p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                arrayList2.add("sign");
            }
            if ((format.f11681p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                arrayList2.add("describes-video");
            }
            if ((format.f11681p & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                arrayList2.add("describes-music");
            }
            if ((format.f11681p & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                arrayList2.add("enhanced-intelligibility");
            }
            if ((format.f11681p & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                arrayList2.add("transcribes-dialog");
            }
            if ((format.f11681p & 8192) != 0) {
                arrayList2.add("easy-read");
            }
            if ((format.f11681p & 16384) != 0) {
                arrayList2.add("trick-play");
            }
            sb2.append(", roleFlags=[");
            li.g.d(',').b(sb2, arrayList2);
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
            if ((i11 == 0 || (i10 = format.S) == 0 || i11 == i10) && this.f11680o == format.f11680o && this.f11681p == format.f11681p && this.f11682q == format.f11682q && this.f11683r == format.f11683r && this.f11689x == format.f11689x && this.A == format.A && this.B == format.B && this.C == format.C && this.E == format.E && this.H == format.H && this.J == format.J && this.K == format.K && this.L == format.L && this.M == format.M && this.N == format.N && this.O == format.O && this.P == format.P && this.Q == format.Q && this.R == format.R && Float.compare(this.D, format.D) == 0 && Float.compare(this.F, format.F) == 0 && ne.w0.c(this.f11677d, format.f11677d) && ne.w0.c(this.f11678e, format.f11678e) && ne.w0.c(this.f11685t, format.f11685t) && ne.w0.c(this.f11687v, format.f11687v) && ne.w0.c(this.f11688w, format.f11688w) && ne.w0.c(this.f11679i, format.f11679i) && Arrays.equals(this.G, format.G) && ne.w0.c(this.f11686u, format.f11686u) && ne.w0.c(this.I, format.I) && ne.w0.c(this.f11691z, format.f11691z) && g(format)) {
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
        if (this.f11690y.size() != format.f11690y.size()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f11690y.size(); i10++) {
            if (!Arrays.equals((byte[]) this.f11690y.get(i10), (byte[]) format.f11690y.get(i10))) {
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
            String str = this.f11677d;
            int i11 = 0;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = (527 + hashCode) * 31;
            String str2 = this.f11678e;
            if (str2 != null) {
                i10 = str2.hashCode();
            } else {
                i10 = 0;
            }
            int i13 = (i12 + i10) * 31;
            String str3 = this.f11679i;
            if (str3 == null) {
                hashCode2 = 0;
            } else {
                hashCode2 = str3.hashCode();
            }
            int i14 = (((((((((i13 + hashCode2) * 31) + this.f11680o) * 31) + this.f11681p) * 31) + this.f11682q) * 31) + this.f11683r) * 31;
            String str4 = this.f11685t;
            if (str4 == null) {
                hashCode3 = 0;
            } else {
                hashCode3 = str4.hashCode();
            }
            int i15 = (i14 + hashCode3) * 31;
            Metadata metadata = this.f11686u;
            if (metadata == null) {
                hashCode4 = 0;
            } else {
                hashCode4 = metadata.hashCode();
            }
            int i16 = (i15 + hashCode4) * 31;
            String str5 = this.f11687v;
            if (str5 == null) {
                hashCode5 = 0;
            } else {
                hashCode5 = str5.hashCode();
            }
            int i17 = (i16 + hashCode5) * 31;
            String str6 = this.f11688w;
            if (str6 != null) {
                i11 = str6.hashCode();
            }
            this.S = ((((((((((((((((((((((((((((((((((i17 + i11) * 31) + this.f11689x) * 31) + ((int) this.A)) * 31) + this.B) * 31) + this.C) * 31) + Float.floatToIntBits(this.D)) * 31) + this.E) * 31) + Float.floatToIntBits(this.F)) * 31) + this.H) * 31) + this.J) * 31) + this.K) * 31) + this.L) * 31) + this.M) * 31) + this.N) * 31) + this.O) * 31) + this.P) * 31) + this.Q) * 31) + this.R;
        }
        return this.S;
    }

    public Format j(Format format) {
        String str;
        Metadata b10;
        if (this == format) {
            return this;
        }
        int k10 = ne.c0.k(this.f11688w);
        String str2 = format.f11677d;
        String str3 = format.f11678e;
        if (str3 == null) {
            str3 = this.f11678e;
        }
        String str4 = this.f11679i;
        if ((k10 == 3 || k10 == 1) && (str = format.f11679i) != null) {
            str4 = str;
        }
        int i10 = this.f11682q;
        if (i10 == -1) {
            i10 = format.f11682q;
        }
        int i11 = this.f11683r;
        if (i11 == -1) {
            i11 = format.f11683r;
        }
        String str5 = this.f11685t;
        if (str5 == null) {
            String M = ne.w0.M(format.f11685t, k10);
            if (ne.w0.f1(M).length == 1) {
                str5 = M;
            }
        }
        Metadata metadata = this.f11686u;
        if (metadata == null) {
            b10 = format.f11686u;
        } else {
            b10 = metadata.b(format.f11686u);
        }
        float f10 = this.D;
        if (f10 == -1.0f && k10 == 2) {
            f10 = format.D;
        }
        int i12 = this.f11680o | format.f11680o;
        return b().U(str2).W(str3).X(str4).i0(i12).e0(this.f11681p | format.f11681p).I(i10).b0(i11).K(str5).Z(b10).O(rc.m.j(format.f11691z, this.f11691z)).R(f10).G();
    }

    public String toString() {
        return "Format(" + this.f11677d + ", " + this.f11678e + ", " + this.f11687v + ", " + this.f11688w + ", " + this.f11685t + ", " + this.f11684s + ", " + this.f11679i + ", [" + this.B + ", " + this.C + ", " + this.D + ", " + this.I + "], [" + this.J + ", " + this.K + "])";
    }

    private Format(b bVar) {
        this.f11677d = bVar.f11692a;
        this.f11678e = bVar.f11693b;
        this.f11679i = ne.w0.M0(bVar.f11694c);
        this.f11680o = bVar.f11695d;
        this.f11681p = bVar.f11696e;
        int i10 = bVar.f11697f;
        this.f11682q = i10;
        int i11 = bVar.f11698g;
        this.f11683r = i11;
        this.f11684s = i11 != -1 ? i11 : i10;
        this.f11685t = bVar.f11699h;
        this.f11686u = bVar.f11700i;
        this.f11687v = bVar.f11701j;
        this.f11688w = bVar.f11702k;
        this.f11689x = bVar.f11703l;
        this.f11690y = bVar.f11704m == null ? Collections.EMPTY_LIST : bVar.f11704m;
        rc.m mVar = bVar.f11705n;
        this.f11691z = mVar;
        this.A = bVar.f11706o;
        this.B = bVar.f11707p;
        this.C = bVar.f11708q;
        this.D = bVar.f11709r;
        this.E = bVar.f11710s == -1 ? 0 : bVar.f11710s;
        this.F = bVar.f11711t == -1.0f ? 1.0f : bVar.f11711t;
        this.G = bVar.f11712u;
        this.H = bVar.f11713v;
        this.I = bVar.f11714w;
        this.J = bVar.f11715x;
        this.K = bVar.f11716y;
        this.L = bVar.f11717z;
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
