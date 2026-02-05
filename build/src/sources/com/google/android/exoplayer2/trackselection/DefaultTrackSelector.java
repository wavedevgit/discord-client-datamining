package com.google.android.exoplayer2.trackselection;

import android.content.Context;
import android.graphics.Point;
import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.Spatializer;
import android.media.Spatializer$OnSpatializerStateChangedListener;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;
import android.util.Pair;
import android.util.SparseArray;
import android.util.SparseBooleanArray;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
import com.google.android.exoplayer2.trackselection.MappingTrackSelector;
import com.google.android.exoplayer2.trackselection.TrackSelectionParameters;
import com.google.android.exoplayer2.trackselection.a;
import com.google.android.exoplayer2.trackselection.g;
import com.google.android.exoplayer2.v1;
import com.google.android.exoplayer2.w1;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.RandomAccess;
import je.o;
import lc.r0;
import li.n;
import mi.i0;
import mi.m;
import mi.s;
import ne.w0;
import ne.y;
import org.webrtc.MediaStreamTrack;
import qd.r;
import qd.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DefaultTrackSelector extends MappingTrackSelector implements w1.a {

    /* renamed from: k  reason: collision with root package name */
    private static final i0 f12979k = i0.a(new Comparator() { // from class: je.c
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return DefaultTrackSelector.t((Integer) obj, (Integer) obj2);
        }
    });

    /* renamed from: l  reason: collision with root package name */
    private static final i0 f12980l = i0.a(new Comparator() { // from class: je.d
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return DefaultTrackSelector.s((Integer) obj, (Integer) obj2);
        }
    });

    /* renamed from: d  reason: collision with root package name */
    private final Object f12981d;

    /* renamed from: e  reason: collision with root package name */
    public final Context f12982e;

    /* renamed from: f  reason: collision with root package name */
    private final g.b f12983f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f12984g;

    /* renamed from: h  reason: collision with root package name */
    private d f12985h;

    /* renamed from: i  reason: collision with root package name */
    private f f12986i;

    /* renamed from: j  reason: collision with root package name */
    private AudioAttributes f12987j;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends h implements Comparable {
        private final boolean A;
        private final int B;
        private final int C;
        private final int D;
        private final int E;
        private final boolean F;
        private final boolean G;

        /* renamed from: p  reason: collision with root package name */
        private final int f12988p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f12989q;

        /* renamed from: r  reason: collision with root package name */
        private final String f12990r;

        /* renamed from: s  reason: collision with root package name */
        private final d f12991s;

        /* renamed from: t  reason: collision with root package name */
        private final boolean f12992t;

        /* renamed from: u  reason: collision with root package name */
        private final int f12993u;

        /* renamed from: v  reason: collision with root package name */
        private final int f12994v;

        /* renamed from: w  reason: collision with root package name */
        private final int f12995w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f12996x;

        /* renamed from: y  reason: collision with root package name */
        private final int f12997y;

        /* renamed from: z  reason: collision with root package name */
        private final int f12998z;

        public b(int i10, u0 u0Var, int i11, d dVar, int i12, boolean z10, n nVar) {
            super(i10, u0Var, i11);
            int i13;
            int i14;
            boolean z11;
            boolean z12;
            boolean z13;
            int i15;
            boolean z14;
            this.f12991s = dVar;
            this.f12990r = DefaultTrackSelector.S(this.f13039o.f11679i);
            this.f12992t = DefaultTrackSelector.O(i12, false);
            int i16 = 0;
            while (true) {
                i13 = Integer.MAX_VALUE;
                if (i16 < dVar.f13086y.size()) {
                    i14 = DefaultTrackSelector.G(this.f13039o, (String) dVar.f13086y.get(i16), false);
                    if (i14 > 0) {
                        break;
                    }
                    i16++;
                } else {
                    i14 = 0;
                    i16 = Integer.MAX_VALUE;
                    break;
                }
            }
            this.f12994v = i16;
            this.f12993u = i14;
            this.f12995w = DefaultTrackSelector.K(this.f13039o.f11681p, dVar.f13087z);
            Format format = this.f13039o;
            int i17 = format.f11681p;
            if (i17 != 0 && (i17 & 1) == 0) {
                z11 = false;
            } else {
                z11 = true;
            }
            this.f12996x = z11;
            if ((format.f11680o & 1) != 0) {
                z12 = true;
            } else {
                z12 = false;
            }
            this.A = z12;
            int i18 = format.J;
            this.B = i18;
            this.C = format.K;
            int i19 = format.f11684s;
            this.D = i19;
            if ((i19 == -1 || i19 <= dVar.B) && ((i18 == -1 || i18 <= dVar.A) && nVar.apply(format))) {
                z13 = true;
            } else {
                z13 = false;
            }
            this.f12989q = z13;
            String[] m02 = w0.m0();
            int i20 = 0;
            while (true) {
                if (i20 < m02.length) {
                    i15 = DefaultTrackSelector.G(this.f13039o, m02[i20], false);
                    if (i15 > 0) {
                        break;
                    }
                    i20++;
                } else {
                    i15 = 0;
                    i20 = Integer.MAX_VALUE;
                    break;
                }
            }
            this.f12997y = i20;
            this.f12998z = i15;
            int i21 = 0;
            while (true) {
                if (i21 < dVar.C.size()) {
                    String str = this.f13039o.f11688w;
                    if (str != null && str.equals(dVar.C.get(i21))) {
                        i13 = i21;
                        break;
                    }
                    i21++;
                } else {
                    break;
                }
            }
            this.E = i13;
            if (w1.i(i12) == 128) {
                z14 = true;
            } else {
                z14 = false;
            }
            this.F = z14;
            this.G = w1.r(i12) == 64;
            this.f12988p = h(i12, z10);
        }

        public static int e(List list, List list2) {
            return ((b) Collections.max(list)).compareTo((b) Collections.max(list2));
        }

        public static s g(int i10, u0 u0Var, d dVar, int[] iArr, boolean z10, n nVar) {
            s.a j10 = s.j();
            for (int i11 = 0; i11 < u0Var.f47828d; i11++) {
                j10.a(new b(i10, u0Var, i11, dVar, iArr[i11], z10, nVar));
            }
            return j10.k();
        }

        private int h(int i10, boolean z10) {
            if (!DefaultTrackSelector.O(i10, this.f12991s.f13011y0)) {
                return 0;
            }
            if (!this.f12989q && !this.f12991s.f13005s0) {
                return 0;
            }
            if (DefaultTrackSelector.O(i10, false) && this.f12989q && this.f13039o.f11684s != -1) {
                d dVar = this.f12991s;
                if (!dVar.I && !dVar.H) {
                    if (dVar.A0 || !z10) {
                        return 2;
                    }
                    return 1;
                }
                return 1;
            }
            return 1;
        }

        @Override // com.google.android.exoplayer2.trackselection.DefaultTrackSelector.h
        public int a() {
            return this.f12988p;
        }

        @Override // java.lang.Comparable
        /* renamed from: f */
        public int compareTo(b bVar) {
            i0 h10;
            i0 i0Var;
            if (this.f12989q && this.f12992t) {
                h10 = DefaultTrackSelector.f12979k;
            } else {
                h10 = DefaultTrackSelector.f12979k.h();
            }
            m f10 = m.j().g(this.f12992t, bVar.f12992t).f(Integer.valueOf(this.f12994v), Integer.valueOf(bVar.f12994v), i0.b().h()).d(this.f12993u, bVar.f12993u).d(this.f12995w, bVar.f12995w).g(this.A, bVar.A).g(this.f12996x, bVar.f12996x).f(Integer.valueOf(this.f12997y), Integer.valueOf(bVar.f12997y), i0.b().h()).d(this.f12998z, bVar.f12998z).g(this.f12989q, bVar.f12989q).f(Integer.valueOf(this.E), Integer.valueOf(bVar.E), i0.b().h());
            Integer valueOf = Integer.valueOf(this.D);
            Integer valueOf2 = Integer.valueOf(bVar.D);
            if (!this.f12991s.H) {
                i0Var = DefaultTrackSelector.f12980l;
            } else {
                i0Var = DefaultTrackSelector.f12979k.h();
            }
            m f11 = f10.f(valueOf, valueOf2, i0Var).g(this.F, bVar.F).g(this.G, bVar.G).f(Integer.valueOf(this.B), Integer.valueOf(bVar.B), h10).f(Integer.valueOf(this.C), Integer.valueOf(bVar.C), h10);
            Integer valueOf3 = Integer.valueOf(this.D);
            Integer valueOf4 = Integer.valueOf(bVar.D);
            if (!w0.c(this.f12990r, bVar.f12990r)) {
                h10 = DefaultTrackSelector.f12980l;
            }
            return f11.f(valueOf3, valueOf4, h10).i();
        }

        @Override // com.google.android.exoplayer2.trackselection.DefaultTrackSelector.h
        /* renamed from: i */
        public boolean d(b bVar) {
            int i10;
            String str;
            int i11;
            d dVar = this.f12991s;
            if (dVar.f13008v0 || ((i11 = this.f13039o.J) != -1 && i11 == bVar.f13039o.J)) {
                if (dVar.f13006t0 || ((str = this.f13039o.f11688w) != null && TextUtils.equals(str, bVar.f13039o.f11688w))) {
                    d dVar2 = this.f12991s;
                    if (dVar2.f13007u0 || ((i10 = this.f13039o.K) != -1 && i10 == bVar.f13039o.K)) {
                        if (!dVar2.f13009w0) {
                            if (this.F != bVar.F || this.G != bVar.G) {
                                return false;
                            }
                            return true;
                        }
                        return true;
                    }
                    return false;
                }
                return false;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f12999d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f13000e;

        public c(Format format, int i10) {
            this.f12999d = (format.f11680o & 1) != 0;
            this.f13000e = DefaultTrackSelector.O(i10, false);
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(c cVar) {
            return m.j().g(this.f13000e, cVar.f13000e).g(this.f12999d, cVar.f12999d).i();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends TrackSelectionParameters implements com.google.android.exoplayer2.g {
        public static final d E0;
        public static final d F0;
        private static final String G0;
        private static final String H0;
        private static final String I0;
        private static final String J0;
        private static final String K0;
        private static final String L0;
        private static final String M0;
        private static final String N0;
        private static final String O0;
        private static final String P0;
        private static final String Q0;
        private static final String R0;
        private static final String S0;
        private static final String T0;
        private static final String U0;
        private static final String V0;
        private static final String W0;
        private static final String X0;
        public static final g.a Y0;
        public final boolean A0;
        public final boolean B0;
        private final SparseArray C0;
        private final SparseBooleanArray D0;

        /* renamed from: o0  reason: collision with root package name */
        public final boolean f13001o0;

        /* renamed from: p0  reason: collision with root package name */
        public final boolean f13002p0;

        /* renamed from: q0  reason: collision with root package name */
        public final boolean f13003q0;

        /* renamed from: r0  reason: collision with root package name */
        public final boolean f13004r0;

        /* renamed from: s0  reason: collision with root package name */
        public final boolean f13005s0;

        /* renamed from: t0  reason: collision with root package name */
        public final boolean f13006t0;

        /* renamed from: u0  reason: collision with root package name */
        public final boolean f13007u0;

        /* renamed from: v0  reason: collision with root package name */
        public final boolean f13008v0;

        /* renamed from: w0  reason: collision with root package name */
        public final boolean f13009w0;

        /* renamed from: x0  reason: collision with root package name */
        public final boolean f13010x0;

        /* renamed from: y0  reason: collision with root package name */
        public final boolean f13011y0;

        /* renamed from: z0  reason: collision with root package name */
        public final boolean f13012z0;

        static {
            d A = new a().A();
            E0 = A;
            F0 = A;
            G0 = w0.B0(1000);
            H0 = w0.B0(RNCWebViewManager.COMMAND_CLEAR_CACHE);
            I0 = w0.B0(RNCWebViewManager.COMMAND_CLEAR_HISTORY);
            J0 = w0.B0(1003);
            K0 = w0.B0(1004);
            L0 = w0.B0(1005);
            M0 = w0.B0(1006);
            N0 = w0.B0(1007);
            O0 = w0.B0(1008);
            P0 = w0.B0(1009);
            Q0 = w0.B0(1010);
            R0 = w0.B0(1011);
            S0 = w0.B0(1012);
            T0 = w0.B0(1013);
            U0 = w0.B0(1014);
            V0 = w0.B0(1015);
            W0 = w0.B0(1016);
            X0 = w0.B0(1017);
            Y0 = new g.a() { // from class: je.i
                @Override // com.google.android.exoplayer2.g.a
                public final com.google.android.exoplayer2.g a(Bundle bundle) {
                    DefaultTrackSelector.d A2;
                    A2 = new DefaultTrackSelector.d.a(bundle).A();
                    return A2;
                }
            };
        }

        private static boolean E(SparseBooleanArray sparseBooleanArray, SparseBooleanArray sparseBooleanArray2) {
            int size = sparseBooleanArray.size();
            if (sparseBooleanArray2.size() != size) {
                return false;
            }
            for (int i10 = 0; i10 < size; i10++) {
                if (sparseBooleanArray2.indexOfKey(sparseBooleanArray.keyAt(i10)) < 0) {
                    return false;
                }
            }
            return true;
        }

        private static boolean F(SparseArray sparseArray, SparseArray sparseArray2) {
            int size = sparseArray.size();
            if (sparseArray2.size() != size) {
                return false;
            }
            for (int i10 = 0; i10 < size; i10++) {
                int indexOfKey = sparseArray2.indexOfKey(sparseArray.keyAt(i10));
                if (indexOfKey < 0 || !G((Map) sparseArray.valueAt(i10), (Map) sparseArray2.valueAt(indexOfKey))) {
                    return false;
                }
            }
            return true;
        }

        /* JADX WARN: Removed duplicated region for block: B:8:0x001a  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private static boolean G(java.util.Map r4, java.util.Map r5) {
            /*
                int r0 = r4.size()
                int r1 = r5.size()
                r2 = 0
                if (r1 == r0) goto Lc
                return r2
            Lc:
                java.util.Set r4 = r4.entrySet()
                java.util.Iterator r4 = r4.iterator()
            L14:
                boolean r0 = r4.hasNext()
                if (r0 == 0) goto L3b
                java.lang.Object r0 = r4.next()
                java.util.Map$Entry r0 = (java.util.Map.Entry) r0
                java.lang.Object r1 = r0.getKey()
                qd.w0 r1 = (qd.w0) r1
                boolean r3 = r5.containsKey(r1)
                if (r3 == 0) goto L3a
                java.lang.Object r0 = r0.getValue()
                java.lang.Object r1 = r5.get(r1)
                boolean r0 = ne.w0.c(r0, r1)
                if (r0 != 0) goto L14
            L3a:
                return r2
            L3b:
                r4 = 1
                return r4
            */
            throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.trackselection.DefaultTrackSelector.d.G(java.util.Map, java.util.Map):boolean");
        }

        public static d I(Context context) {
            return new a(context).A();
        }

        public a H() {
            return new a();
        }

        public boolean J(int i10) {
            return this.D0.get(i10);
        }

        public e K(int i10, qd.w0 w0Var) {
            Map map = (Map) this.C0.get(i10);
            if (map != null) {
                return (e) map.get(w0Var);
            }
            return null;
        }

        public boolean L(int i10, qd.w0 w0Var) {
            Map map = (Map) this.C0.get(i10);
            if (map != null && map.containsKey(w0Var)) {
                return true;
            }
            return false;
        }

        @Override // com.google.android.exoplayer2.trackselection.TrackSelectionParameters
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && d.class == obj.getClass()) {
                d dVar = (d) obj;
                if (super.equals(dVar) && this.f13001o0 == dVar.f13001o0 && this.f13002p0 == dVar.f13002p0 && this.f13003q0 == dVar.f13003q0 && this.f13004r0 == dVar.f13004r0 && this.f13005s0 == dVar.f13005s0 && this.f13006t0 == dVar.f13006t0 && this.f13007u0 == dVar.f13007u0 && this.f13008v0 == dVar.f13008v0 && this.f13009w0 == dVar.f13009w0 && this.f13010x0 == dVar.f13010x0 && this.f13011y0 == dVar.f13011y0 && this.f13012z0 == dVar.f13012z0 && this.A0 == dVar.A0 && this.B0 == dVar.B0 && E(this.D0, dVar.D0) && F(this.C0, dVar.C0)) {
                    return true;
                }
            }
            return false;
        }

        @Override // com.google.android.exoplayer2.trackselection.TrackSelectionParameters
        public int hashCode() {
            return ((((((((((((((((((((((((((((super.hashCode() + 31) * 31) + (this.f13001o0 ? 1 : 0)) * 31) + (this.f13002p0 ? 1 : 0)) * 31) + (this.f13003q0 ? 1 : 0)) * 31) + (this.f13004r0 ? 1 : 0)) * 31) + (this.f13005s0 ? 1 : 0)) * 31) + (this.f13006t0 ? 1 : 0)) * 31) + (this.f13007u0 ? 1 : 0)) * 31) + (this.f13008v0 ? 1 : 0)) * 31) + (this.f13009w0 ? 1 : 0)) * 31) + (this.f13010x0 ? 1 : 0)) * 31) + (this.f13011y0 ? 1 : 0)) * 31) + (this.f13012z0 ? 1 : 0)) * 31) + (this.A0 ? 1 : 0)) * 31) + (this.B0 ? 1 : 0);
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a extends TrackSelectionParameters.a {
            private boolean A;
            private boolean B;
            private boolean C;
            private boolean D;
            private boolean E;
            private boolean F;
            private boolean G;
            private boolean H;
            private boolean I;
            private boolean J;
            private boolean K;
            private boolean L;
            private boolean M;
            private boolean N;
            private final SparseArray O;
            private final SparseBooleanArray P;

            private static SparseArray b0(SparseArray sparseArray) {
                SparseArray sparseArray2 = new SparseArray();
                for (int i10 = 0; i10 < sparseArray.size(); i10++) {
                    sparseArray2.put(sparseArray.keyAt(i10), new HashMap((Map) sparseArray.valueAt(i10)));
                }
                return sparseArray2;
            }

            private void c0() {
                this.A = true;
                this.B = false;
                this.C = true;
                this.D = false;
                this.E = true;
                this.F = false;
                this.G = false;
                this.H = false;
                this.I = false;
                this.J = true;
                this.K = true;
                this.L = false;
                this.M = true;
                this.N = false;
            }

            private SparseBooleanArray d0(int[] iArr) {
                if (iArr == null) {
                    return new SparseBooleanArray();
                }
                SparseBooleanArray sparseBooleanArray = new SparseBooleanArray(iArr.length);
                for (int i10 : iArr) {
                    sparseBooleanArray.append(i10, true);
                }
                return sparseBooleanArray;
            }

            private void x0(Bundle bundle) {
                s d10;
                SparseArray e10;
                int[] intArray = bundle.getIntArray(d.Q0);
                ArrayList parcelableArrayList = bundle.getParcelableArrayList(d.R0);
                if (parcelableArrayList == null) {
                    d10 = s.s();
                } else {
                    d10 = ne.d.d(qd.w0.f47843q, parcelableArrayList);
                }
                SparseArray sparseParcelableArray = bundle.getSparseParcelableArray(d.S0);
                if (sparseParcelableArray == null) {
                    e10 = new SparseArray();
                } else {
                    e10 = ne.d.e(e.f13016s, sparseParcelableArray);
                }
                if (intArray != null && intArray.length == d10.size()) {
                    for (int i10 = 0; i10 < intArray.length; i10++) {
                        w0(intArray[i10], (qd.w0) d10.get(i10), (e) e10.get(i10));
                    }
                }
            }

            @Override // com.google.android.exoplayer2.trackselection.TrackSelectionParameters.a
            /* renamed from: A0 */
            public a J(Context context, boolean z10) {
                super.J(context, z10);
                return this;
            }

            @Override // com.google.android.exoplayer2.trackselection.TrackSelectionParameters.a
            /* renamed from: a0 */
            public d A() {
                return new d(this);
            }

            protected a e0(TrackSelectionParameters trackSelectionParameters) {
                super.D(trackSelectionParameters);
                return this;
            }

            public a f0(boolean z10) {
                this.H = z10;
                return this;
            }

            public a g0(boolean z10) {
                this.I = z10;
                return this;
            }

            public a h0(boolean z10) {
                this.F = z10;
                return this;
            }

            public a i0(boolean z10) {
                this.G = z10;
                return this;
            }

            public a j0(boolean z10) {
                this.N = z10;
                return this;
            }

            public a k0(boolean z10) {
                this.M = z10;
                return this;
            }

            public a l0(boolean z10) {
                this.D = z10;
                return this;
            }

            public a m0(boolean z10) {
                this.B = z10;
                return this;
            }

            public a n0(boolean z10) {
                this.C = z10;
                return this;
            }

            public a o0(boolean z10) {
                this.J = z10;
                return this;
            }

            public a p0(boolean z10) {
                this.E = z10;
                return this;
            }

            public a q0(boolean z10) {
                this.K = z10;
                return this;
            }

            public a r0(boolean z10) {
                this.A = z10;
                return this;
            }

            public a s0(boolean z10) {
                super.E(z10);
                return this;
            }

            public a t0(int i10) {
                super.F(i10);
                return this;
            }

            @Override // com.google.android.exoplayer2.trackselection.TrackSelectionParameters.a
            /* renamed from: u0 */
            public a G(Context context) {
                super.G(context);
                return this;
            }

            public a v0(int i10, boolean z10) {
                if (this.P.get(i10) == z10) {
                    return this;
                }
                if (z10) {
                    this.P.put(i10, true);
                    return this;
                }
                this.P.delete(i10);
                return this;
            }

            public a w0(int i10, qd.w0 w0Var, e eVar) {
                Map map = (Map) this.O.get(i10);
                if (map == null) {
                    map = new HashMap();
                    this.O.put(i10, map);
                }
                if (map.containsKey(w0Var) && w0.c(map.get(w0Var), eVar)) {
                    return this;
                }
                map.put(w0Var, eVar);
                return this;
            }

            public a y0(boolean z10) {
                this.L = z10;
                return this;
            }

            @Override // com.google.android.exoplayer2.trackselection.TrackSelectionParameters.a
            /* renamed from: z0 */
            public a I(int i10, int i11, boolean z10) {
                super.I(i10, i11, z10);
                return this;
            }

            public a() {
                this.O = new SparseArray();
                this.P = new SparseBooleanArray();
                c0();
            }

            public a(Context context) {
                super(context);
                this.O = new SparseArray();
                this.P = new SparseBooleanArray();
                c0();
            }

            private a(d dVar) {
                super(dVar);
                this.A = dVar.f13001o0;
                this.B = dVar.f13002p0;
                this.C = dVar.f13003q0;
                this.D = dVar.f13004r0;
                this.E = dVar.f13005s0;
                this.F = dVar.f13006t0;
                this.G = dVar.f13007u0;
                this.H = dVar.f13008v0;
                this.I = dVar.f13009w0;
                this.J = dVar.f13010x0;
                this.K = dVar.f13011y0;
                this.L = dVar.f13012z0;
                this.M = dVar.A0;
                this.N = dVar.B0;
                this.O = b0(dVar.C0);
                this.P = dVar.D0.clone();
            }

            private a(Bundle bundle) {
                super(bundle);
                c0();
                d dVar = d.E0;
                r0(bundle.getBoolean(d.G0, dVar.f13001o0));
                m0(bundle.getBoolean(d.H0, dVar.f13002p0));
                n0(bundle.getBoolean(d.I0, dVar.f13003q0));
                l0(bundle.getBoolean(d.U0, dVar.f13004r0));
                p0(bundle.getBoolean(d.J0, dVar.f13005s0));
                h0(bundle.getBoolean(d.K0, dVar.f13006t0));
                i0(bundle.getBoolean(d.L0, dVar.f13007u0));
                f0(bundle.getBoolean(d.M0, dVar.f13008v0));
                g0(bundle.getBoolean(d.V0, dVar.f13009w0));
                o0(bundle.getBoolean(d.W0, dVar.f13010x0));
                q0(bundle.getBoolean(d.N0, dVar.f13011y0));
                y0(bundle.getBoolean(d.O0, dVar.f13012z0));
                k0(bundle.getBoolean(d.P0, dVar.A0));
                j0(bundle.getBoolean(d.X0, dVar.B0));
                this.O = new SparseArray();
                x0(bundle);
                this.P = d0(bundle.getIntArray(d.T0));
            }
        }

        private d(a aVar) {
            super(aVar);
            this.f13001o0 = aVar.A;
            this.f13002p0 = aVar.B;
            this.f13003q0 = aVar.C;
            this.f13004r0 = aVar.D;
            this.f13005s0 = aVar.E;
            this.f13006t0 = aVar.F;
            this.f13007u0 = aVar.G;
            this.f13008v0 = aVar.H;
            this.f13009w0 = aVar.I;
            this.f13010x0 = aVar.J;
            this.f13011y0 = aVar.K;
            this.f13012z0 = aVar.L;
            this.A0 = aVar.M;
            this.B0 = aVar.N;
            this.C0 = aVar.O;
            this.D0 = aVar.P;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e implements com.google.android.exoplayer2.g {

        /* renamed from: p  reason: collision with root package name */
        private static final String f13013p = w0.B0(0);

        /* renamed from: q  reason: collision with root package name */
        private static final String f13014q = w0.B0(1);

        /* renamed from: r  reason: collision with root package name */
        private static final String f13015r = w0.B0(2);

        /* renamed from: s  reason: collision with root package name */
        public static final g.a f13016s = new g.a() { // from class: je.j
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return DefaultTrackSelector.e.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final int f13017d;

        /* renamed from: e  reason: collision with root package name */
        public final int[] f13018e;

        /* renamed from: i  reason: collision with root package name */
        public final int f13019i;

        /* renamed from: o  reason: collision with root package name */
        public final int f13020o;

        public e(int i10, int... iArr) {
            this(i10, iArr, 0);
        }

        public static /* synthetic */ e a(Bundle bundle) {
            boolean z10;
            int i10 = bundle.getInt(f13013p, -1);
            int[] intArray = bundle.getIntArray(f13014q);
            int i11 = bundle.getInt(f13015r, -1);
            if (i10 >= 0 && i11 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            ne.a.e(intArray);
            return new e(i10, intArray, i11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && e.class == obj.getClass()) {
                e eVar = (e) obj;
                if (this.f13017d == eVar.f13017d && Arrays.equals(this.f13018e, eVar.f13018e) && this.f13020o == eVar.f13020o) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (((this.f13017d * 31) + Arrays.hashCode(this.f13018e)) * 31) + this.f13020o;
        }

        public e(int i10, int[] iArr, int i11) {
            this.f13017d = i10;
            int[] copyOf = Arrays.copyOf(iArr, iArr.length);
            this.f13018e = copyOf;
            this.f13019i = iArr.length;
            this.f13020o = i11;
            Arrays.sort(copyOf);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class f {

        /* renamed from: a  reason: collision with root package name */
        private final Spatializer f13021a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f13022b;

        /* renamed from: c  reason: collision with root package name */
        private Handler f13023c;

        /* renamed from: d  reason: collision with root package name */
        private Spatializer$OnSpatializerStateChangedListener f13024d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class a implements Spatializer$OnSpatializerStateChangedListener {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ DefaultTrackSelector f13025a;

            a(DefaultTrackSelector defaultTrackSelector) {
                this.f13025a = defaultTrackSelector;
            }

            public void onSpatializerAvailableChanged(Spatializer spatializer, boolean z10) {
                this.f13025a.Q();
            }

            public void onSpatializerEnabledChanged(Spatializer spatializer, boolean z10) {
                this.f13025a.Q();
            }
        }

        private f(Spatializer spatializer) {
            boolean z10;
            this.f13021a = spatializer;
            if (spatializer.getImmersiveAudioLevel() != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f13022b = z10;
        }

        public static f g(Context context) {
            AudioManager audioManager = (AudioManager) context.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND);
            if (audioManager == null) {
                return null;
            }
            return new f(audioManager.getSpatializer());
        }

        public boolean a(AudioAttributes audioAttributes, Format format) {
            int i10;
            if ("audio/eac3-joc".equals(format.f11688w) && format.J == 16) {
                i10 = 12;
            } else {
                i10 = format.J;
            }
            AudioFormat.Builder channelMask = new AudioFormat.Builder().setEncoding(2).setChannelMask(w0.H(i10));
            int i11 = format.K;
            if (i11 != -1) {
                channelMask.setSampleRate(i11);
            }
            return this.f13021a.canBeSpatialized(audioAttributes.b().f12188a, channelMask.build());
        }

        public void b(DefaultTrackSelector defaultTrackSelector, Looper looper) {
            if (this.f13024d == null && this.f13023c == null) {
                this.f13024d = new a(defaultTrackSelector);
                Handler handler = new Handler(looper);
                this.f13023c = handler;
                Spatializer spatializer = this.f13021a;
                Objects.requireNonNull(handler);
                spatializer.addOnSpatializerStateChangedListener(new nc.s(handler), this.f13024d);
            }
        }

        public boolean c() {
            return this.f13021a.isAvailable();
        }

        public boolean d() {
            return this.f13021a.isEnabled();
        }

        public boolean e() {
            return this.f13022b;
        }

        public void f() {
            Spatializer$OnSpatializerStateChangedListener spatializer$OnSpatializerStateChangedListener = this.f13024d;
            if (spatializer$OnSpatializerStateChangedListener != null && this.f13023c != null) {
                this.f13021a.removeOnSpatializerStateChangedListener(spatializer$OnSpatializerStateChangedListener);
                ((Handler) w0.j(this.f13023c)).removeCallbacksAndMessages(null);
                this.f13023c = null;
                this.f13024d = null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g extends h implements Comparable {

        /* renamed from: p  reason: collision with root package name */
        private final int f13027p;

        /* renamed from: q  reason: collision with root package name */
        private final boolean f13028q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f13029r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f13030s;

        /* renamed from: t  reason: collision with root package name */
        private final int f13031t;

        /* renamed from: u  reason: collision with root package name */
        private final int f13032u;

        /* renamed from: v  reason: collision with root package name */
        private final int f13033v;

        /* renamed from: w  reason: collision with root package name */
        private final int f13034w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f13035x;

        public g(int i10, u0 u0Var, int i11, d dVar, int i12, String str) {
            super(i10, u0Var, i11);
            boolean z10;
            boolean z11;
            s sVar;
            int i13;
            boolean z12;
            boolean z13;
            boolean z14;
            int i14 = 0;
            this.f13028q = DefaultTrackSelector.O(i12, false);
            int i15 = this.f13039o.f11680o & (~dVar.F);
            if ((i15 & 1) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f13029r = z10;
            if ((i15 & 2) != 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            this.f13030s = z11;
            if (dVar.D.isEmpty()) {
                sVar = s.t("");
            } else {
                sVar = dVar.D;
            }
            int i16 = 0;
            while (true) {
                if (i16 < sVar.size()) {
                    i13 = DefaultTrackSelector.G(this.f13039o, (String) sVar.get(i16), dVar.G);
                    if (i13 > 0) {
                        break;
                    }
                    i16++;
                } else {
                    i16 = Integer.MAX_VALUE;
                    i13 = 0;
                    break;
                }
            }
            this.f13031t = i16;
            this.f13032u = i13;
            int K = DefaultTrackSelector.K(this.f13039o.f11681p, dVar.E);
            this.f13033v = K;
            if ((this.f13039o.f11681p & 1088) != 0) {
                z12 = true;
            } else {
                z12 = false;
            }
            this.f13035x = z12;
            if (DefaultTrackSelector.S(str) == null) {
                z13 = true;
            } else {
                z13 = false;
            }
            int G = DefaultTrackSelector.G(this.f13039o, str, z13);
            this.f13034w = G;
            if (i13 <= 0 && ((!dVar.D.isEmpty() || K <= 0) && !this.f13029r && (!this.f13030s || G <= 0))) {
                z14 = false;
            } else {
                z14 = true;
            }
            if (DefaultTrackSelector.O(i12, dVar.f13011y0) && z14) {
                i14 = 1;
            }
            this.f13027p = i14;
        }

        public static int e(List list, List list2) {
            return ((g) list.get(0)).compareTo((g) list2.get(0));
        }

        public static s g(int i10, u0 u0Var, d dVar, int[] iArr, String str) {
            s.a j10 = s.j();
            for (int i11 = 0; i11 < u0Var.f47828d; i11++) {
                j10.a(new g(i10, u0Var, i11, dVar, iArr[i11], str));
            }
            return j10.k();
        }

        @Override // com.google.android.exoplayer2.trackselection.DefaultTrackSelector.h
        public int a() {
            return this.f13027p;
        }

        @Override // java.lang.Comparable
        /* renamed from: f */
        public int compareTo(g gVar) {
            i0 h10;
            m g10 = m.j().g(this.f13028q, gVar.f13028q).f(Integer.valueOf(this.f13031t), Integer.valueOf(gVar.f13031t), i0.b().h()).d(this.f13032u, gVar.f13032u).d(this.f13033v, gVar.f13033v).g(this.f13029r, gVar.f13029r);
            Boolean valueOf = Boolean.valueOf(this.f13030s);
            Boolean valueOf2 = Boolean.valueOf(gVar.f13030s);
            if (this.f13032u == 0) {
                h10 = i0.b();
            } else {
                h10 = i0.b().h();
            }
            m d10 = g10.f(valueOf, valueOf2, h10).d(this.f13034w, gVar.f13034w);
            if (this.f13033v == 0) {
                d10 = d10.h(this.f13035x, gVar.f13035x);
            }
            return d10.i();
        }

        @Override // com.google.android.exoplayer2.trackselection.DefaultTrackSelector.h
        /* renamed from: h */
        public boolean d(g gVar) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class h {

        /* renamed from: d  reason: collision with root package name */
        public final int f13036d;

        /* renamed from: e  reason: collision with root package name */
        public final u0 f13037e;

        /* renamed from: i  reason: collision with root package name */
        public final int f13038i;

        /* renamed from: o  reason: collision with root package name */
        public final Format f13039o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public interface a {
            List a(int i10, u0 u0Var, int[] iArr);
        }

        public h(int i10, u0 u0Var, int i11) {
            this.f13036d = i10;
            this.f13037e = u0Var;
            this.f13038i = i11;
            this.f13039o = u0Var.c(i11);
        }

        public abstract int a();

        public abstract boolean d(h hVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i extends h {
        private final boolean A;
        private final boolean B;
        private final int C;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f13040p;

        /* renamed from: q  reason: collision with root package name */
        private final d f13041q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f13042r;

        /* renamed from: s  reason: collision with root package name */
        private final boolean f13043s;

        /* renamed from: t  reason: collision with root package name */
        private final int f13044t;

        /* renamed from: u  reason: collision with root package name */
        private final int f13045u;

        /* renamed from: v  reason: collision with root package name */
        private final int f13046v;

        /* renamed from: w  reason: collision with root package name */
        private final int f13047w;

        /* renamed from: x  reason: collision with root package name */
        private final boolean f13048x;

        /* renamed from: y  reason: collision with root package name */
        private final boolean f13049y;

        /* renamed from: z  reason: collision with root package name */
        private final int f13050z;

        /* JADX WARN: Removed duplicated region for block: B:54:0x00a0  */
        /* JADX WARN: Removed duplicated region for block: B:62:0x00b2  */
        /* JADX WARN: Removed duplicated region for block: B:71:0x00d5  */
        /* JADX WARN: Removed duplicated region for block: B:72:0x00d7  */
        /* JADX WARN: Removed duplicated region for block: B:75:0x00e2  */
        /* JADX WARN: Removed duplicated region for block: B:78:0x00c8 A[SYNTHETIC] */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public i(int r5, qd.u0 r6, int r7, com.google.android.exoplayer2.trackselection.DefaultTrackSelector.d r8, int r9, int r10, boolean r11) {
            /*
                Method dump skipped, instructions count: 246
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.trackselection.DefaultTrackSelector.i.<init>(int, qd.u0, int, com.google.android.exoplayer2.trackselection.DefaultTrackSelector$d, int, int, boolean):void");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static int g(i iVar, i iVar2) {
            m g10 = m.j().g(iVar.f13043s, iVar2.f13043s).d(iVar.f13047w, iVar2.f13047w).g(iVar.f13048x, iVar2.f13048x).g(iVar.f13040p, iVar2.f13040p).g(iVar.f13042r, iVar2.f13042r).f(Integer.valueOf(iVar.f13046v), Integer.valueOf(iVar2.f13046v), i0.b().h()).g(iVar.A, iVar2.A).g(iVar.B, iVar2.B);
            if (iVar.A && iVar.B) {
                g10 = g10.d(iVar.C, iVar2.C);
            }
            return g10.i();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static int h(i iVar, i iVar2) {
            i0 h10;
            i0 i0Var;
            if (iVar.f13040p && iVar.f13043s) {
                h10 = DefaultTrackSelector.f12979k;
            } else {
                h10 = DefaultTrackSelector.f12979k.h();
            }
            m j10 = m.j();
            Integer valueOf = Integer.valueOf(iVar.f13044t);
            Integer valueOf2 = Integer.valueOf(iVar2.f13044t);
            if (!iVar.f13041q.H) {
                i0Var = DefaultTrackSelector.f12980l;
            } else {
                i0Var = DefaultTrackSelector.f12979k.h();
            }
            return j10.f(valueOf, valueOf2, i0Var).f(Integer.valueOf(iVar.f13045u), Integer.valueOf(iVar2.f13045u), h10).f(Integer.valueOf(iVar.f13044t), Integer.valueOf(iVar2.f13044t), h10).i();
        }

        public static int i(List list, List list2) {
            return m.j().f((i) Collections.max(list, new Comparator() { // from class: com.google.android.exoplayer2.trackselection.e
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    int g10;
                    g10 = DefaultTrackSelector.i.g((DefaultTrackSelector.i) obj, (DefaultTrackSelector.i) obj2);
                    return g10;
                }
            }), (i) Collections.max(list2, new Comparator() { // from class: com.google.android.exoplayer2.trackselection.e
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    int g10;
                    g10 = DefaultTrackSelector.i.g((DefaultTrackSelector.i) obj, (DefaultTrackSelector.i) obj2);
                    return g10;
                }
            }), new Comparator() { // from class: com.google.android.exoplayer2.trackselection.e
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    int g10;
                    g10 = DefaultTrackSelector.i.g((DefaultTrackSelector.i) obj, (DefaultTrackSelector.i) obj2);
                    return g10;
                }
            }).d(list.size(), list2.size()).f((i) Collections.max(list, new Comparator() { // from class: com.google.android.exoplayer2.trackselection.f
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    int h10;
                    h10 = DefaultTrackSelector.i.h((DefaultTrackSelector.i) obj, (DefaultTrackSelector.i) obj2);
                    return h10;
                }
            }), (i) Collections.max(list2, new Comparator() { // from class: com.google.android.exoplayer2.trackselection.f
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    int h10;
                    h10 = DefaultTrackSelector.i.h((DefaultTrackSelector.i) obj, (DefaultTrackSelector.i) obj2);
                    return h10;
                }
            }), new Comparator() { // from class: com.google.android.exoplayer2.trackselection.f
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    int h10;
                    h10 = DefaultTrackSelector.i.h((DefaultTrackSelector.i) obj, (DefaultTrackSelector.i) obj2);
                    return h10;
                }
            }).i();
        }

        public static s k(int i10, u0 u0Var, d dVar, int[] iArr, int i11) {
            boolean z10;
            int H = DefaultTrackSelector.H(u0Var, dVar.f13081t, dVar.f13082u, dVar.f13083v);
            s.a j10 = s.j();
            for (int i12 = 0; i12 < u0Var.f47828d; i12++) {
                int f10 = u0Var.c(i12).f();
                if (H != Integer.MAX_VALUE && (f10 == -1 || f10 > H)) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                j10.a(new i(i10, u0Var, i12, dVar, iArr[i12], i11, z10));
            }
            return j10.k();
        }

        private int l(int i10, int i11) {
            if ((this.f13039o.f11681p & 16384) != 0 || !DefaultTrackSelector.O(i10, this.f13041q.f13011y0)) {
                return 0;
            }
            if (!this.f13040p && !this.f13041q.f13001o0) {
                return 0;
            }
            if (DefaultTrackSelector.O(i10, false) && this.f13042r && this.f13040p && this.f13039o.f11684s != -1) {
                d dVar = this.f13041q;
                if (!dVar.I && !dVar.H && (i10 & i11) != 0) {
                    return 2;
                }
                return 1;
            }
            return 1;
        }

        @Override // com.google.android.exoplayer2.trackselection.DefaultTrackSelector.h
        public int a() {
            return this.f13050z;
        }

        @Override // com.google.android.exoplayer2.trackselection.DefaultTrackSelector.h
        /* renamed from: m */
        public boolean d(i iVar) {
            if (this.f13049y || w0.c(this.f13039o.f11688w, iVar.f13039o.f11688w)) {
                if (!this.f13041q.f13004r0) {
                    if (this.A != iVar.A || this.B != iVar.B) {
                        return false;
                    }
                    return true;
                }
                return true;
            }
            return false;
        }
    }

    public DefaultTrackSelector(Context context) {
        this(context, new a.b());
    }

    private static void C(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, d dVar, g.a[] aVarArr) {
        g.a aVar;
        int d10 = mappedTrackInfo.d();
        for (int i10 = 0; i10 < d10; i10++) {
            qd.w0 f10 = mappedTrackInfo.f(i10);
            if (dVar.L(i10, f10)) {
                e K = dVar.K(i10, f10);
                if (K != null && K.f13018e.length != 0) {
                    aVar = new g.a(f10.b(K.f13017d), K.f13018e, K.f13020o);
                } else {
                    aVar = null;
                }
                aVarArr[i10] = aVar;
            }
        }
    }

    private static void D(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, TrackSelectionParameters trackSelectionParameters, g.a[] aVarArr) {
        g.a aVar;
        int d10 = mappedTrackInfo.d();
        HashMap hashMap = new HashMap();
        for (int i10 = 0; i10 < d10; i10++) {
            F(mappedTrackInfo.f(i10), trackSelectionParameters, hashMap);
        }
        F(mappedTrackInfo.h(), trackSelectionParameters, hashMap);
        for (int i11 = 0; i11 < d10; i11++) {
            o oVar = (o) hashMap.get(Integer.valueOf(mappedTrackInfo.e(i11)));
            if (oVar != null) {
                if (!oVar.f30889e.isEmpty() && mappedTrackInfo.f(i11).c(oVar.f30888d) != -1) {
                    aVar = new g.a(oVar.f30888d, oi.e.l(oVar.f30889e));
                } else {
                    aVar = null;
                }
                aVarArr[i11] = aVar;
            }
        }
    }

    private static void F(qd.w0 w0Var, TrackSelectionParameters trackSelectionParameters, Map map) {
        o oVar;
        for (int i10 = 0; i10 < w0Var.f47844d; i10++) {
            o oVar2 = (o) trackSelectionParameters.J.get(w0Var.b(i10));
            if (oVar2 != null && ((oVar = (o) map.get(Integer.valueOf(oVar2.b()))) == null || (oVar.f30889e.isEmpty() && !oVar2.f30889e.isEmpty()))) {
                map.put(Integer.valueOf(oVar2.b()), oVar2);
            }
        }
    }

    protected static int G(Format format, String str, boolean z10) {
        if (!TextUtils.isEmpty(str) && str.equals(format.f11679i)) {
            return 4;
        }
        String S = S(str);
        String S2 = S(format.f11679i);
        if (S2 != null && S != null) {
            if (!S2.startsWith(S) && !S.startsWith(S2)) {
                if (!w0.e1(S2, "-")[0].equals(w0.e1(S, "-")[0])) {
                    return 0;
                }
                return 2;
            }
            return 3;
        } else if (!z10 || S2 != null) {
            return 0;
        } else {
            return 1;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int H(u0 u0Var, int i10, int i11, boolean z10) {
        int i12;
        int i13 = Integer.MAX_VALUE;
        if (i10 != Integer.MAX_VALUE && i11 != Integer.MAX_VALUE) {
            for (int i14 = 0; i14 < u0Var.f47828d; i14++) {
                Format c10 = u0Var.c(i14);
                int i15 = c10.B;
                if (i15 > 0 && (i12 = c10.C) > 0) {
                    Point I = I(z10, i10, i11, i15, i12);
                    int i16 = c10.B;
                    int i17 = c10.C;
                    int i18 = i16 * i17;
                    if (i16 >= ((int) (I.x * 0.98f)) && i17 >= ((int) (I.y * 0.98f)) && i18 < i13) {
                        i13 = i18;
                    }
                }
            }
        }
        return i13;
    }

    /* JADX WARN: Code restructure failed: missing block: B:9:0x000c, code lost:
        if (r1 != r3) goto L8;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static android.graphics.Point I(boolean r3, int r4, int r5, int r6, int r7) {
        /*
            if (r3 == 0) goto Lf
            r3 = 0
            r0 = 1
            if (r6 <= r7) goto L8
            r1 = r0
            goto L9
        L8:
            r1 = r3
        L9:
            if (r4 <= r5) goto Lc
            r3 = r0
        Lc:
            if (r1 == r3) goto Lf
            goto L12
        Lf:
            r2 = r5
            r5 = r4
            r4 = r2
        L12:
            int r3 = r6 * r4
            int r0 = r7 * r5
            if (r3 < r0) goto L22
            android.graphics.Point r3 = new android.graphics.Point
            int r4 = ne.w0.l(r0, r6)
            r3.<init>(r5, r4)
            return r3
        L22:
            android.graphics.Point r5 = new android.graphics.Point
            int r3 = ne.w0.l(r3, r7)
            r5.<init>(r3, r4)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.trackselection.DefaultTrackSelector.I(boolean, int, int, int, int):android.graphics.Point");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int K(int i10, int i11) {
        if (i10 != 0 && i10 == i11) {
            return Integer.MAX_VALUE;
        }
        return Integer.bitCount(i10 & i11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int L(String str) {
        if (str == null) {
            return 0;
        }
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1851077871:
                if (str.equals("video/dolby-vision")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1662735862:
                if (str.equals("video/av01")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1662541442:
                if (str.equals("video/hevc")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1331836730:
                if (str.equals("video/avc")) {
                    c10 = 3;
                    break;
                }
                break;
            case 1599127257:
                if (str.equals("video/x-vnd.on2.vp9")) {
                    c10 = 4;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return 5;
            case 1:
                return 4;
            case 2:
                return 3;
            case 3:
                return 1;
            case 4:
                return 2;
            default:
                return 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean M(Format format) {
        boolean z10;
        f fVar;
        f fVar2;
        synchronized (this.f12981d) {
            try {
                if (this.f12985h.f13010x0) {
                    if (!this.f12984g) {
                        if (format.J > 2) {
                            if (N(format)) {
                                if (w0.f39657a >= 32 && (fVar2 = this.f12986i) != null && fVar2.e()) {
                                }
                            }
                            if (w0.f39657a < 32 || (fVar = this.f12986i) == null || !fVar.e() || !this.f12986i.c() || !this.f12986i.d() || !this.f12986i.a(this.f12987j, format)) {
                                z10 = false;
                            }
                        }
                    }
                }
                z10 = true;
            } finally {
            }
        }
        return z10;
    }

    private static boolean N(Format format) {
        String str = format.f11688w;
        if (str == null) {
            return false;
        }
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -2123537834:
                if (str.equals("audio/eac3-joc")) {
                    c10 = 0;
                    break;
                }
                break;
            case 187078296:
                if (str.equals("audio/ac3")) {
                    c10 = 1;
                    break;
                }
                break;
            case 187078297:
                if (str.equals("audio/ac4")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1504578661:
                if (str.equals("audio/eac3")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
            case 1:
            case 2:
            case 3:
                return true;
            default:
                return false;
        }
    }

    protected static boolean O(int i10, boolean z10) {
        int F = w1.F(i10);
        if (F != 4) {
            if (!z10 || F != 3) {
                return false;
            }
            return true;
        }
        return true;
    }

    private static void P(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, int[][][] iArr, r0[] r0VarArr, com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        boolean z10;
        boolean z11 = false;
        int i10 = -1;
        int i11 = -1;
        for (int i12 = 0; i12 < mappedTrackInfo.d(); i12++) {
            int e10 = mappedTrackInfo.e(i12);
            com.google.android.exoplayer2.trackselection.g gVar = gVarArr[i12];
            if ((e10 == 1 || e10 == 2) && gVar != null && T(iArr[i12], mappedTrackInfo.f(i12), gVar)) {
                if (e10 == 1) {
                    if (i11 != -1) {
                        z10 = false;
                        break;
                    }
                    i11 = i12;
                } else if (i10 != -1) {
                    z10 = false;
                    break;
                } else {
                    i10 = i12;
                }
            }
        }
        z10 = true;
        if (i11 != -1 && i10 != -1) {
            z11 = true;
        }
        if (z10 & z11) {
            r0 r0Var = new r0(true);
            r0VarArr[i11] = r0Var;
            r0VarArr[i10] = r0Var;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Q() {
        boolean z10;
        f fVar;
        synchronized (this.f12981d) {
            try {
                if (this.f12985h.f13010x0 && !this.f12984g && w0.f39657a >= 32 && (fVar = this.f12986i) != null && fVar.e()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (z10) {
            e();
        }
    }

    private void R(v1 v1Var) {
        boolean z10;
        synchronized (this.f12981d) {
            z10 = this.f12985h.B0;
        }
        if (z10) {
            f(v1Var);
        }
    }

    protected static String S(String str) {
        if (!TextUtils.isEmpty(str) && !TextUtils.equals(str, "und")) {
            return str;
        }
        return null;
    }

    private static boolean T(int[][] iArr, qd.w0 w0Var, com.google.android.exoplayer2.trackselection.g gVar) {
        if (gVar == null) {
            return false;
        }
        int c10 = w0Var.c(gVar.k());
        for (int i10 = 0; i10 < gVar.length(); i10++) {
            if (w1.l(iArr[c10][gVar.e(i10)]) != 32) {
                return false;
            }
        }
        return true;
    }

    private Pair Y(int i10, MappingTrackSelector.MappedTrackInfo mappedTrackInfo, int[][][] iArr, h.a aVar, Comparator comparator) {
        int i11;
        RandomAccess randomAccess;
        MappingTrackSelector.MappedTrackInfo mappedTrackInfo2 = mappedTrackInfo;
        ArrayList arrayList = new ArrayList();
        int d10 = mappedTrackInfo2.d();
        int i12 = 0;
        while (i12 < d10) {
            if (i10 == mappedTrackInfo2.e(i12)) {
                qd.w0 f10 = mappedTrackInfo2.f(i12);
                for (int i13 = 0; i13 < f10.f47844d; i13++) {
                    u0 b10 = f10.b(i13);
                    List a10 = aVar.a(i12, b10, iArr[i12][i13]);
                    boolean[] zArr = new boolean[b10.f47828d];
                    int i14 = 0;
                    while (i14 < b10.f47828d) {
                        h hVar = (h) a10.get(i14);
                        int a11 = hVar.a();
                        if (zArr[i14] || a11 == 0) {
                            i11 = d10;
                        } else {
                            if (a11 == 1) {
                                randomAccess = s.t(hVar);
                            } else {
                                ArrayList arrayList2 = new ArrayList();
                                arrayList2.add(hVar);
                                int i15 = i14 + 1;
                                while (i15 < b10.f47828d) {
                                    h hVar2 = (h) a10.get(i15);
                                    int i16 = d10;
                                    if (hVar2.a() == 2 && hVar.d(hVar2)) {
                                        arrayList2.add(hVar2);
                                        zArr[i15] = true;
                                    }
                                    i15++;
                                    d10 = i16;
                                }
                                randomAccess = arrayList2;
                            }
                            i11 = d10;
                            arrayList.add(randomAccess);
                        }
                        i14++;
                        d10 = i11;
                    }
                }
            }
            i12++;
            mappedTrackInfo2 = mappedTrackInfo;
            d10 = d10;
        }
        if (arrayList.isEmpty()) {
            return null;
        }
        List list = (List) Collections.max(arrayList, comparator);
        int[] iArr2 = new int[list.size()];
        for (int i17 = 0; i17 < list.size(); i17++) {
            iArr2[i17] = ((h) list.get(i17)).f13038i;
        }
        h hVar3 = (h) list.get(0);
        return Pair.create(new g.a(hVar3.f13037e, iArr2), Integer.valueOf(hVar3.f13036d));
    }

    private void c0(d dVar) {
        boolean equals;
        ne.a.e(dVar);
        synchronized (this.f12981d) {
            equals = this.f12985h.equals(dVar);
            this.f12985h = dVar;
        }
        if (!equals) {
            if (dVar.f13010x0 && this.f12982e == null) {
                y.i("DefaultTrackSelector", "Audio channel count constraints cannot be applied without reference to Context. Build the track selector instance with one of the non-deprecated constructors that take a Context argument.");
            }
            e();
        }
    }

    public static /* synthetic */ int s(Integer num, Integer num2) {
        return 0;
    }

    public static /* synthetic */ int t(Integer num, Integer num2) {
        if (num.intValue() == -1) {
            if (num2.intValue() != -1) {
                return -1;
            }
            return 0;
        } else if (num2.intValue() == -1) {
            return 1;
        } else {
            return num.intValue() - num2.intValue();
        }
    }

    public static /* synthetic */ List v(final DefaultTrackSelector defaultTrackSelector, d dVar, boolean z10, int i10, u0 u0Var, int[] iArr) {
        defaultTrackSelector.getClass();
        return b.g(i10, u0Var, dVar, iArr, z10, new n() { // from class: je.h
            @Override // li.n
            public final boolean apply(Object obj) {
                boolean M;
                M = DefaultTrackSelector.this.M((Format) obj);
                return M;
            }
        });
    }

    public d.a E() {
        return J().H();
    }

    public d J() {
        d dVar;
        synchronized (this.f12981d) {
            dVar = this.f12985h;
        }
        return dVar;
    }

    protected g.a[] U(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, int[][][] iArr, int[] iArr2, d dVar) {
        String str;
        int d10 = mappedTrackInfo.d();
        g.a[] aVarArr = new g.a[d10];
        Pair Z = Z(mappedTrackInfo, iArr, iArr2, dVar);
        if (Z != null) {
            aVarArr[((Integer) Z.second).intValue()] = (g.a) Z.first;
        }
        Pair V = V(mappedTrackInfo, iArr, iArr2, dVar);
        if (V != null) {
            aVarArr[((Integer) V.second).intValue()] = (g.a) V.first;
        }
        if (V == null) {
            str = null;
        } else {
            Object obj = V.first;
            str = ((g.a) obj).f13140a.c(((g.a) obj).f13141b[0]).f11679i;
        }
        Pair X = X(mappedTrackInfo, iArr, dVar, str);
        if (X != null) {
            aVarArr[((Integer) X.second).intValue()] = (g.a) X.first;
        }
        for (int i10 = 0; i10 < d10; i10++) {
            int e10 = mappedTrackInfo.e(i10);
            if (e10 != 2 && e10 != 1 && e10 != 3) {
                aVarArr[i10] = W(e10, mappedTrackInfo.f(i10), iArr[i10], dVar);
            }
        }
        return aVarArr;
    }

    protected Pair V(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, int[][][] iArr, int[] iArr2, final d dVar) {
        final boolean z10 = false;
        int i10 = 0;
        while (true) {
            if (i10 < mappedTrackInfo.d()) {
                if (2 == mappedTrackInfo.e(i10) && mappedTrackInfo.f(i10).f47844d > 0) {
                    z10 = true;
                    break;
                }
                i10++;
            } else {
                break;
            }
        }
        return Y(1, mappedTrackInfo, iArr, new h.a() { // from class: je.f
            @Override // com.google.android.exoplayer2.trackselection.DefaultTrackSelector.h.a
            public final List a(int i11, u0 u0Var, int[] iArr3) {
                return DefaultTrackSelector.v(DefaultTrackSelector.this, dVar, z10, i11, u0Var, iArr3);
            }
        }, new Comparator() { // from class: com.google.android.exoplayer2.trackselection.c
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return DefaultTrackSelector.b.e((List) obj, (List) obj2);
            }
        });
    }

    protected g.a W(int i10, qd.w0 w0Var, int[][] iArr, d dVar) {
        u0 u0Var = null;
        c cVar = null;
        int i11 = 0;
        for (int i12 = 0; i12 < w0Var.f47844d; i12++) {
            u0 b10 = w0Var.b(i12);
            int[] iArr2 = iArr[i12];
            for (int i13 = 0; i13 < b10.f47828d; i13++) {
                if (O(iArr2[i13], dVar.f13011y0)) {
                    c cVar2 = new c(b10.c(i13), iArr2[i13]);
                    if (cVar == null || cVar2.compareTo(cVar) > 0) {
                        u0Var = b10;
                        i11 = i13;
                        cVar = cVar2;
                    }
                }
            }
        }
        if (u0Var == null) {
            return null;
        }
        return new g.a(u0Var, i11);
    }

    protected Pair X(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, int[][][] iArr, final d dVar, final String str) {
        return Y(3, mappedTrackInfo, iArr, new h.a() { // from class: je.g
            @Override // com.google.android.exoplayer2.trackselection.DefaultTrackSelector.h.a
            public final List a(int i10, u0 u0Var, int[] iArr2) {
                List g10;
                g10 = DefaultTrackSelector.g.g(i10, u0Var, DefaultTrackSelector.d.this, iArr2, str);
                return g10;
            }
        }, new Comparator() { // from class: com.google.android.exoplayer2.trackselection.d
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return DefaultTrackSelector.g.e((List) obj, (List) obj2);
            }
        });
    }

    protected Pair Z(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, int[][][] iArr, final int[] iArr2, final d dVar) {
        return Y(2, mappedTrackInfo, iArr, new h.a() { // from class: je.e
            @Override // com.google.android.exoplayer2.trackselection.DefaultTrackSelector.h.a
            public final List a(int i10, u0 u0Var, int[] iArr3) {
                List k10;
                k10 = DefaultTrackSelector.i.k(i10, u0Var, DefaultTrackSelector.d.this, iArr3, iArr2[i10]);
                return k10;
            }
        }, new Comparator() { // from class: com.google.android.exoplayer2.trackselection.b
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return DefaultTrackSelector.i.i((List) obj, (List) obj2);
            }
        });
    }

    @Override // com.google.android.exoplayer2.w1.a
    public void a(v1 v1Var) {
        R(v1Var);
    }

    public void a0(d.a aVar) {
        c0(aVar.A());
    }

    public void b0(TrackSelectionParameters trackSelectionParameters) {
        if (trackSelectionParameters instanceof d) {
            c0((d) trackSelectionParameters);
        }
        c0(new d.a().e0(trackSelectionParameters).A());
    }

    @Override // je.q
    public w1.a c() {
        return this;
    }

    @Override // je.q
    public boolean g() {
        return true;
    }

    @Override // je.q
    public void i() {
        f fVar;
        synchronized (this.f12981d) {
            try {
                if (w0.f39657a >= 32 && (fVar = this.f12986i) != null) {
                    fVar.f();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        super.i();
    }

    @Override // je.q
    public void k(AudioAttributes audioAttributes) {
        boolean equals;
        synchronized (this.f12981d) {
            equals = this.f12987j.equals(audioAttributes);
            this.f12987j = audioAttributes;
        }
        if (!equals) {
            Q();
        }
    }

    @Override // com.google.android.exoplayer2.trackselection.MappingTrackSelector
    protected final Pair p(MappingTrackSelector.MappedTrackInfo mappedTrackInfo, int[][][] iArr, int[] iArr2, r.b bVar, Timeline timeline) {
        d dVar;
        r0 r0Var;
        f fVar;
        synchronized (this.f12981d) {
            try {
                dVar = this.f12985h;
                if (dVar.f13010x0 && w0.f39657a >= 32 && (fVar = this.f12986i) != null) {
                    fVar.b(this, (Looper) ne.a.i(Looper.myLooper()));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        int d10 = mappedTrackInfo.d();
        g.a[] U = U(mappedTrackInfo, iArr, iArr2, dVar);
        D(mappedTrackInfo, dVar, U);
        C(mappedTrackInfo, dVar, U);
        for (int i10 = 0; i10 < d10; i10++) {
            int e10 = mappedTrackInfo.e(i10);
            if (dVar.J(i10) || dVar.K.contains(Integer.valueOf(e10))) {
                U[i10] = null;
            }
        }
        com.google.android.exoplayer2.trackselection.g[] a10 = this.f12983f.a(U, b(), bVar, timeline);
        r0[] r0VarArr = new r0[d10];
        for (int i11 = 0; i11 < d10; i11++) {
            int e11 = mappedTrackInfo.e(i11);
            if (!dVar.J(i11) && !dVar.K.contains(Integer.valueOf(e11)) && (mappedTrackInfo.e(i11) == -2 || a10[i11] != null)) {
                r0Var = r0.f36623b;
            } else {
                r0Var = null;
            }
            r0VarArr[i11] = r0Var;
        }
        if (dVar.f13012z0) {
            P(mappedTrackInfo, iArr, r0VarArr, a10);
        }
        return Pair.create(r0VarArr, a10);
    }

    public DefaultTrackSelector(Context context, g.b bVar) {
        this(context, d.I(context), bVar);
    }

    public DefaultTrackSelector(TrackSelectionParameters trackSelectionParameters, g.b bVar) {
        this(trackSelectionParameters, bVar, (Context) null);
    }

    public DefaultTrackSelector(Context context, TrackSelectionParameters trackSelectionParameters, g.b bVar) {
        this(trackSelectionParameters, bVar, context);
    }

    private DefaultTrackSelector(TrackSelectionParameters trackSelectionParameters, g.b bVar, Context context) {
        this.f12981d = new Object();
        this.f12982e = context != null ? context.getApplicationContext() : null;
        this.f12983f = bVar;
        if (trackSelectionParameters instanceof d) {
            this.f12985h = (d) trackSelectionParameters;
        } else {
            this.f12985h = (context == null ? d.E0 : d.I(context)).H().e0(trackSelectionParameters).A();
        }
        this.f12987j = AudioAttributes.f12175r;
        boolean z10 = context != null && w0.H0(context);
        this.f12984g = z10;
        if (!z10 && context != null && w0.f39657a >= 32) {
            this.f12986i = f.g(context);
        }
        if (this.f12985h.f13010x0 && context == null) {
            y.i("DefaultTrackSelector", "Audio channel count constraints cannot be applied without reference to Context. Build the track selector instance with one of the non-deprecated constructors that take a Context argument.");
        }
    }
}
