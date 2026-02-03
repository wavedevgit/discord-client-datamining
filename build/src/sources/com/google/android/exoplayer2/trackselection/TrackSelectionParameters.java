package com.google.android.exoplayer2.trackselection;

import android.content.Context;
import android.graphics.Point;
import android.os.Bundle;
import android.os.Looper;
import android.view.accessibility.CaptioningManager;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.trackselection.TrackSelectionParameters;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import je.o;
import ji.s;
import ji.t;
import ji.u;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class TrackSelectionParameters implements com.google.android.exoplayer2.g {
    public static final TrackSelectionParameters L;
    public static final TrackSelectionParameters M;
    private static final String N;
    private static final String O;
    private static final String P;
    private static final String Q;
    private static final String R;
    private static final String S;
    private static final String T;
    private static final String U;
    private static final String V;
    private static final String W;
    private static final String X;
    private static final String Y;
    private static final String Z;

    /* renamed from: a0  reason: collision with root package name */
    private static final String f12674a0;

    /* renamed from: b0  reason: collision with root package name */
    private static final String f12675b0;

    /* renamed from: c0  reason: collision with root package name */
    private static final String f12676c0;

    /* renamed from: d0  reason: collision with root package name */
    private static final String f12677d0;

    /* renamed from: e0  reason: collision with root package name */
    private static final String f12678e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final String f12679f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final String f12680g0;

    /* renamed from: h0  reason: collision with root package name */
    private static final String f12681h0;

    /* renamed from: i0  reason: collision with root package name */
    private static final String f12682i0;

    /* renamed from: j0  reason: collision with root package name */
    private static final String f12683j0;

    /* renamed from: k0  reason: collision with root package name */
    private static final String f12684k0;

    /* renamed from: l0  reason: collision with root package name */
    private static final String f12685l0;

    /* renamed from: m0  reason: collision with root package name */
    private static final String f12686m0;

    /* renamed from: n0  reason: collision with root package name */
    public static final g.a f12687n0;
    public final int A;
    public final int B;
    public final s C;
    public final s D;
    public final int E;
    public final int F;
    public final boolean G;
    public final boolean H;
    public final boolean I;
    public final t J;
    public final u K;

    /* renamed from: d  reason: collision with root package name */
    public final int f12688d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12689e;

    /* renamed from: i  reason: collision with root package name */
    public final int f12690i;

    /* renamed from: o  reason: collision with root package name */
    public final int f12691o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12692p;

    /* renamed from: q  reason: collision with root package name */
    public final int f12693q;

    /* renamed from: r  reason: collision with root package name */
    public final int f12694r;

    /* renamed from: s  reason: collision with root package name */
    public final int f12695s;

    /* renamed from: t  reason: collision with root package name */
    public final int f12696t;

    /* renamed from: u  reason: collision with root package name */
    public final int f12697u;

    /* renamed from: v  reason: collision with root package name */
    public final boolean f12698v;

    /* renamed from: w  reason: collision with root package name */
    public final s f12699w;

    /* renamed from: x  reason: collision with root package name */
    public final int f12700x;

    /* renamed from: y  reason: collision with root package name */
    public final s f12701y;

    /* renamed from: z  reason: collision with root package name */
    public final int f12702z;

    static {
        TrackSelectionParameters A = new a().A();
        L = A;
        M = A;
        N = w0.B0(1);
        O = w0.B0(2);
        P = w0.B0(3);
        Q = w0.B0(4);
        R = w0.B0(5);
        S = w0.B0(6);
        T = w0.B0(7);
        U = w0.B0(8);
        V = w0.B0(9);
        W = w0.B0(10);
        X = w0.B0(11);
        Y = w0.B0(12);
        Z = w0.B0(13);
        f12674a0 = w0.B0(14);
        f12675b0 = w0.B0(15);
        f12676c0 = w0.B0(16);
        f12677d0 = w0.B0(17);
        f12678e0 = w0.B0(18);
        f12679f0 = w0.B0(19);
        f12680g0 = w0.B0(20);
        f12681h0 = w0.B0(21);
        f12682i0 = w0.B0(22);
        f12683j0 = w0.B0(23);
        f12684k0 = w0.B0(24);
        f12685l0 = w0.B0(25);
        f12686m0 = w0.B0(26);
        f12687n0 = new g.a() { // from class: je.p
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return TrackSelectionParameters.A(bundle);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public TrackSelectionParameters(a aVar) {
        this.f12688d = aVar.f12703a;
        this.f12689e = aVar.f12704b;
        this.f12690i = aVar.f12705c;
        this.f12691o = aVar.f12706d;
        this.f12692p = aVar.f12707e;
        this.f12693q = aVar.f12708f;
        this.f12694r = aVar.f12709g;
        this.f12695s = aVar.f12710h;
        this.f12696t = aVar.f12711i;
        this.f12697u = aVar.f12712j;
        this.f12698v = aVar.f12713k;
        this.f12699w = aVar.f12714l;
        this.f12700x = aVar.f12715m;
        this.f12701y = aVar.f12716n;
        this.f12702z = aVar.f12717o;
        this.A = aVar.f12718p;
        this.B = aVar.f12719q;
        this.C = aVar.f12720r;
        this.D = aVar.f12721s;
        this.E = aVar.f12722t;
        this.F = aVar.f12723u;
        this.G = aVar.f12724v;
        this.H = aVar.f12725w;
        this.I = aVar.f12726x;
        this.J = t.c(aVar.f12727y);
        this.K = u.m(aVar.f12728z);
    }

    public static TrackSelectionParameters A(Bundle bundle) {
        return new a(bundle).A();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            TrackSelectionParameters trackSelectionParameters = (TrackSelectionParameters) obj;
            if (this.f12688d == trackSelectionParameters.f12688d && this.f12689e == trackSelectionParameters.f12689e && this.f12690i == trackSelectionParameters.f12690i && this.f12691o == trackSelectionParameters.f12691o && this.f12692p == trackSelectionParameters.f12692p && this.f12693q == trackSelectionParameters.f12693q && this.f12694r == trackSelectionParameters.f12694r && this.f12695s == trackSelectionParameters.f12695s && this.f12698v == trackSelectionParameters.f12698v && this.f12696t == trackSelectionParameters.f12696t && this.f12697u == trackSelectionParameters.f12697u && this.f12699w.equals(trackSelectionParameters.f12699w) && this.f12700x == trackSelectionParameters.f12700x && this.f12701y.equals(trackSelectionParameters.f12701y) && this.f12702z == trackSelectionParameters.f12702z && this.A == trackSelectionParameters.A && this.B == trackSelectionParameters.B && this.C.equals(trackSelectionParameters.C) && this.D.equals(trackSelectionParameters.D) && this.E == trackSelectionParameters.E && this.F == trackSelectionParameters.F && this.G == trackSelectionParameters.G && this.H == trackSelectionParameters.H && this.I == trackSelectionParameters.I && this.J.equals(trackSelectionParameters.J) && this.K.equals(trackSelectionParameters.K)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((((((((((((((((((((((((((((((((((((this.f12688d + 31) * 31) + this.f12689e) * 31) + this.f12690i) * 31) + this.f12691o) * 31) + this.f12692p) * 31) + this.f12693q) * 31) + this.f12694r) * 31) + this.f12695s) * 31) + (this.f12698v ? 1 : 0)) * 31) + this.f12696t) * 31) + this.f12697u) * 31) + this.f12699w.hashCode()) * 31) + this.f12700x) * 31) + this.f12701y.hashCode()) * 31) + this.f12702z) * 31) + this.A) * 31) + this.B) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31) + this.E) * 31) + this.F) * 31) + (this.G ? 1 : 0)) * 31) + (this.H ? 1 : 0)) * 31) + (this.I ? 1 : 0)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f12703a;

        /* renamed from: b  reason: collision with root package name */
        private int f12704b;

        /* renamed from: c  reason: collision with root package name */
        private int f12705c;

        /* renamed from: d  reason: collision with root package name */
        private int f12706d;

        /* renamed from: e  reason: collision with root package name */
        private int f12707e;

        /* renamed from: f  reason: collision with root package name */
        private int f12708f;

        /* renamed from: g  reason: collision with root package name */
        private int f12709g;

        /* renamed from: h  reason: collision with root package name */
        private int f12710h;

        /* renamed from: i  reason: collision with root package name */
        private int f12711i;

        /* renamed from: j  reason: collision with root package name */
        private int f12712j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f12713k;

        /* renamed from: l  reason: collision with root package name */
        private s f12714l;

        /* renamed from: m  reason: collision with root package name */
        private int f12715m;

        /* renamed from: n  reason: collision with root package name */
        private s f12716n;

        /* renamed from: o  reason: collision with root package name */
        private int f12717o;

        /* renamed from: p  reason: collision with root package name */
        private int f12718p;

        /* renamed from: q  reason: collision with root package name */
        private int f12719q;

        /* renamed from: r  reason: collision with root package name */
        private s f12720r;

        /* renamed from: s  reason: collision with root package name */
        private s f12721s;

        /* renamed from: t  reason: collision with root package name */
        private int f12722t;

        /* renamed from: u  reason: collision with root package name */
        private int f12723u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f12724v;

        /* renamed from: w  reason: collision with root package name */
        private boolean f12725w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f12726x;

        /* renamed from: y  reason: collision with root package name */
        private HashMap f12727y;

        /* renamed from: z  reason: collision with root package name */
        private HashSet f12728z;

        public a() {
            this.f12703a = Integer.MAX_VALUE;
            this.f12704b = Integer.MAX_VALUE;
            this.f12705c = Integer.MAX_VALUE;
            this.f12706d = Integer.MAX_VALUE;
            this.f12711i = Integer.MAX_VALUE;
            this.f12712j = Integer.MAX_VALUE;
            this.f12713k = true;
            this.f12714l = s.r();
            this.f12715m = 0;
            this.f12716n = s.r();
            this.f12717o = 0;
            this.f12718p = Integer.MAX_VALUE;
            this.f12719q = Integer.MAX_VALUE;
            this.f12720r = s.r();
            this.f12721s = s.r();
            this.f12722t = 0;
            this.f12723u = 0;
            this.f12724v = false;
            this.f12725w = false;
            this.f12726x = false;
            this.f12727y = new HashMap();
            this.f12728z = new HashSet();
        }

        private void B(TrackSelectionParameters trackSelectionParameters) {
            this.f12703a = trackSelectionParameters.f12688d;
            this.f12704b = trackSelectionParameters.f12689e;
            this.f12705c = trackSelectionParameters.f12690i;
            this.f12706d = trackSelectionParameters.f12691o;
            this.f12707e = trackSelectionParameters.f12692p;
            this.f12708f = trackSelectionParameters.f12693q;
            this.f12709g = trackSelectionParameters.f12694r;
            this.f12710h = trackSelectionParameters.f12695s;
            this.f12711i = trackSelectionParameters.f12696t;
            this.f12712j = trackSelectionParameters.f12697u;
            this.f12713k = trackSelectionParameters.f12698v;
            this.f12714l = trackSelectionParameters.f12699w;
            this.f12715m = trackSelectionParameters.f12700x;
            this.f12716n = trackSelectionParameters.f12701y;
            this.f12717o = trackSelectionParameters.f12702z;
            this.f12718p = trackSelectionParameters.A;
            this.f12719q = trackSelectionParameters.B;
            this.f12720r = trackSelectionParameters.C;
            this.f12721s = trackSelectionParameters.D;
            this.f12722t = trackSelectionParameters.E;
            this.f12723u = trackSelectionParameters.F;
            this.f12724v = trackSelectionParameters.G;
            this.f12725w = trackSelectionParameters.H;
            this.f12726x = trackSelectionParameters.I;
            this.f12728z = new HashSet(trackSelectionParameters.K);
            this.f12727y = new HashMap(trackSelectionParameters.J);
        }

        private static s C(String[] strArr) {
            s.a j10 = s.j();
            for (String str : (String[]) ne.a.e(strArr)) {
                j10.a(w0.M0((String) ne.a.e(str)));
            }
            return j10.k();
        }

        private void H(Context context) {
            CaptioningManager captioningManager;
            if ((w0.f40197a >= 23 || Looper.myLooper() != null) && (captioningManager = (CaptioningManager) context.getSystemService("captioning")) != null && captioningManager.isEnabled()) {
                this.f12722t = 1088;
                Locale locale = captioningManager.getLocale();
                if (locale != null) {
                    this.f12721s = s.s(w0.b0(locale));
                }
            }
        }

        public TrackSelectionParameters A() {
            return new TrackSelectionParameters(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public a D(TrackSelectionParameters trackSelectionParameters) {
            B(trackSelectionParameters);
            return this;
        }

        public a E(boolean z10) {
            this.f12726x = z10;
            return this;
        }

        public a F(int i10) {
            this.f12706d = i10;
            return this;
        }

        public a G(Context context) {
            if (w0.f40197a >= 19) {
                H(context);
            }
            return this;
        }

        public a I(int i10, int i11, boolean z10) {
            this.f12711i = i10;
            this.f12712j = i11;
            this.f12713k = z10;
            return this;
        }

        public a J(Context context, boolean z10) {
            Point P = w0.P(context);
            return I(P.x, P.y, z10);
        }

        public a(Context context) {
            this();
            G(context);
            J(context, true);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public a(TrackSelectionParameters trackSelectionParameters) {
            B(trackSelectionParameters);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public a(Bundle bundle) {
            s d10;
            String str = TrackSelectionParameters.S;
            TrackSelectionParameters trackSelectionParameters = TrackSelectionParameters.L;
            this.f12703a = bundle.getInt(str, trackSelectionParameters.f12688d);
            this.f12704b = bundle.getInt(TrackSelectionParameters.T, trackSelectionParameters.f12689e);
            this.f12705c = bundle.getInt(TrackSelectionParameters.U, trackSelectionParameters.f12690i);
            this.f12706d = bundle.getInt(TrackSelectionParameters.V, trackSelectionParameters.f12691o);
            this.f12707e = bundle.getInt(TrackSelectionParameters.W, trackSelectionParameters.f12692p);
            this.f12708f = bundle.getInt(TrackSelectionParameters.X, trackSelectionParameters.f12693q);
            this.f12709g = bundle.getInt(TrackSelectionParameters.Y, trackSelectionParameters.f12694r);
            this.f12710h = bundle.getInt(TrackSelectionParameters.Z, trackSelectionParameters.f12695s);
            this.f12711i = bundle.getInt(TrackSelectionParameters.f12674a0, trackSelectionParameters.f12696t);
            this.f12712j = bundle.getInt(TrackSelectionParameters.f12675b0, trackSelectionParameters.f12697u);
            this.f12713k = bundle.getBoolean(TrackSelectionParameters.f12676c0, trackSelectionParameters.f12698v);
            this.f12714l = s.n((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.f12677d0), new String[0]));
            this.f12715m = bundle.getInt(TrackSelectionParameters.f12685l0, trackSelectionParameters.f12700x);
            this.f12716n = C((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.N), new String[0]));
            this.f12717o = bundle.getInt(TrackSelectionParameters.O, trackSelectionParameters.f12702z);
            this.f12718p = bundle.getInt(TrackSelectionParameters.f12678e0, trackSelectionParameters.A);
            this.f12719q = bundle.getInt(TrackSelectionParameters.f12679f0, trackSelectionParameters.B);
            this.f12720r = s.n((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.f12680g0), new String[0]));
            this.f12721s = C((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.P), new String[0]));
            this.f12722t = bundle.getInt(TrackSelectionParameters.Q, trackSelectionParameters.E);
            this.f12723u = bundle.getInt(TrackSelectionParameters.f12686m0, trackSelectionParameters.F);
            this.f12724v = bundle.getBoolean(TrackSelectionParameters.R, trackSelectionParameters.G);
            this.f12725w = bundle.getBoolean(TrackSelectionParameters.f12681h0, trackSelectionParameters.H);
            this.f12726x = bundle.getBoolean(TrackSelectionParameters.f12682i0, trackSelectionParameters.I);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(TrackSelectionParameters.f12683j0);
            if (parcelableArrayList == null) {
                d10 = s.r();
            } else {
                d10 = ne.d.d(o.f31538p, parcelableArrayList);
            }
            this.f12727y = new HashMap();
            for (int i10 = 0; i10 < d10.size(); i10++) {
                o oVar = (o) d10.get(i10);
                this.f12727y.put(oVar.f31539d, oVar);
            }
            int[] iArr = (int[]) ii.h.a(bundle.getIntArray(TrackSelectionParameters.f12684k0), new int[0]);
            this.f12728z = new HashSet();
            for (int i11 : iArr) {
                this.f12728z.add(Integer.valueOf(i11));
            }
        }
    }
}
