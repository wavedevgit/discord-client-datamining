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
    private static final String f13706a0;

    /* renamed from: b0  reason: collision with root package name */
    private static final String f13707b0;

    /* renamed from: c0  reason: collision with root package name */
    private static final String f13708c0;

    /* renamed from: d0  reason: collision with root package name */
    private static final String f13709d0;

    /* renamed from: e0  reason: collision with root package name */
    private static final String f13710e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final String f13711f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final String f13712g0;

    /* renamed from: h0  reason: collision with root package name */
    private static final String f13713h0;

    /* renamed from: i0  reason: collision with root package name */
    private static final String f13714i0;

    /* renamed from: j0  reason: collision with root package name */
    private static final String f13715j0;

    /* renamed from: k0  reason: collision with root package name */
    private static final String f13716k0;

    /* renamed from: l0  reason: collision with root package name */
    private static final String f13717l0;

    /* renamed from: m0  reason: collision with root package name */
    private static final String f13718m0;

    /* renamed from: n0  reason: collision with root package name */
    public static final g.a f13719n0;
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
    public final int f13720d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13721e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13722i;

    /* renamed from: o  reason: collision with root package name */
    public final int f13723o;

    /* renamed from: p  reason: collision with root package name */
    public final int f13724p;

    /* renamed from: q  reason: collision with root package name */
    public final int f13725q;

    /* renamed from: r  reason: collision with root package name */
    public final int f13726r;

    /* renamed from: s  reason: collision with root package name */
    public final int f13727s;

    /* renamed from: t  reason: collision with root package name */
    public final int f13728t;

    /* renamed from: u  reason: collision with root package name */
    public final int f13729u;

    /* renamed from: v  reason: collision with root package name */
    public final boolean f13730v;

    /* renamed from: w  reason: collision with root package name */
    public final s f13731w;

    /* renamed from: x  reason: collision with root package name */
    public final int f13732x;

    /* renamed from: y  reason: collision with root package name */
    public final s f13733y;

    /* renamed from: z  reason: collision with root package name */
    public final int f13734z;

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
        f13706a0 = w0.B0(14);
        f13707b0 = w0.B0(15);
        f13708c0 = w0.B0(16);
        f13709d0 = w0.B0(17);
        f13710e0 = w0.B0(18);
        f13711f0 = w0.B0(19);
        f13712g0 = w0.B0(20);
        f13713h0 = w0.B0(21);
        f13714i0 = w0.B0(22);
        f13715j0 = w0.B0(23);
        f13716k0 = w0.B0(24);
        f13717l0 = w0.B0(25);
        f13718m0 = w0.B0(26);
        f13719n0 = new g.a() { // from class: je.p
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return TrackSelectionParameters.A(bundle);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public TrackSelectionParameters(a aVar) {
        this.f13720d = aVar.f13735a;
        this.f13721e = aVar.f13736b;
        this.f13722i = aVar.f13737c;
        this.f13723o = aVar.f13738d;
        this.f13724p = aVar.f13739e;
        this.f13725q = aVar.f13740f;
        this.f13726r = aVar.f13741g;
        this.f13727s = aVar.f13742h;
        this.f13728t = aVar.f13743i;
        this.f13729u = aVar.f13744j;
        this.f13730v = aVar.f13745k;
        this.f13731w = aVar.f13746l;
        this.f13732x = aVar.f13747m;
        this.f13733y = aVar.f13748n;
        this.f13734z = aVar.f13749o;
        this.A = aVar.f13750p;
        this.B = aVar.f13751q;
        this.C = aVar.f13752r;
        this.D = aVar.f13753s;
        this.E = aVar.f13754t;
        this.F = aVar.f13755u;
        this.G = aVar.f13756v;
        this.H = aVar.f13757w;
        this.I = aVar.f13758x;
        this.J = t.c(aVar.f13759y);
        this.K = u.m(aVar.f13760z);
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
            if (this.f13720d == trackSelectionParameters.f13720d && this.f13721e == trackSelectionParameters.f13721e && this.f13722i == trackSelectionParameters.f13722i && this.f13723o == trackSelectionParameters.f13723o && this.f13724p == trackSelectionParameters.f13724p && this.f13725q == trackSelectionParameters.f13725q && this.f13726r == trackSelectionParameters.f13726r && this.f13727s == trackSelectionParameters.f13727s && this.f13730v == trackSelectionParameters.f13730v && this.f13728t == trackSelectionParameters.f13728t && this.f13729u == trackSelectionParameters.f13729u && this.f13731w.equals(trackSelectionParameters.f13731w) && this.f13732x == trackSelectionParameters.f13732x && this.f13733y.equals(trackSelectionParameters.f13733y) && this.f13734z == trackSelectionParameters.f13734z && this.A == trackSelectionParameters.A && this.B == trackSelectionParameters.B && this.C.equals(trackSelectionParameters.C) && this.D.equals(trackSelectionParameters.D) && this.E == trackSelectionParameters.E && this.F == trackSelectionParameters.F && this.G == trackSelectionParameters.G && this.H == trackSelectionParameters.H && this.I == trackSelectionParameters.I && this.J.equals(trackSelectionParameters.J) && this.K.equals(trackSelectionParameters.K)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((((((((((((((((((((((((((((((((((((this.f13720d + 31) * 31) + this.f13721e) * 31) + this.f13722i) * 31) + this.f13723o) * 31) + this.f13724p) * 31) + this.f13725q) * 31) + this.f13726r) * 31) + this.f13727s) * 31) + (this.f13730v ? 1 : 0)) * 31) + this.f13728t) * 31) + this.f13729u) * 31) + this.f13731w.hashCode()) * 31) + this.f13732x) * 31) + this.f13733y.hashCode()) * 31) + this.f13734z) * 31) + this.A) * 31) + this.B) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31) + this.E) * 31) + this.F) * 31) + (this.G ? 1 : 0)) * 31) + (this.H ? 1 : 0)) * 31) + (this.I ? 1 : 0)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f13735a;

        /* renamed from: b  reason: collision with root package name */
        private int f13736b;

        /* renamed from: c  reason: collision with root package name */
        private int f13737c;

        /* renamed from: d  reason: collision with root package name */
        private int f13738d;

        /* renamed from: e  reason: collision with root package name */
        private int f13739e;

        /* renamed from: f  reason: collision with root package name */
        private int f13740f;

        /* renamed from: g  reason: collision with root package name */
        private int f13741g;

        /* renamed from: h  reason: collision with root package name */
        private int f13742h;

        /* renamed from: i  reason: collision with root package name */
        private int f13743i;

        /* renamed from: j  reason: collision with root package name */
        private int f13744j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f13745k;

        /* renamed from: l  reason: collision with root package name */
        private s f13746l;

        /* renamed from: m  reason: collision with root package name */
        private int f13747m;

        /* renamed from: n  reason: collision with root package name */
        private s f13748n;

        /* renamed from: o  reason: collision with root package name */
        private int f13749o;

        /* renamed from: p  reason: collision with root package name */
        private int f13750p;

        /* renamed from: q  reason: collision with root package name */
        private int f13751q;

        /* renamed from: r  reason: collision with root package name */
        private s f13752r;

        /* renamed from: s  reason: collision with root package name */
        private s f13753s;

        /* renamed from: t  reason: collision with root package name */
        private int f13754t;

        /* renamed from: u  reason: collision with root package name */
        private int f13755u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f13756v;

        /* renamed from: w  reason: collision with root package name */
        private boolean f13757w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f13758x;

        /* renamed from: y  reason: collision with root package name */
        private HashMap f13759y;

        /* renamed from: z  reason: collision with root package name */
        private HashSet f13760z;

        public a() {
            this.f13735a = Integer.MAX_VALUE;
            this.f13736b = Integer.MAX_VALUE;
            this.f13737c = Integer.MAX_VALUE;
            this.f13738d = Integer.MAX_VALUE;
            this.f13743i = Integer.MAX_VALUE;
            this.f13744j = Integer.MAX_VALUE;
            this.f13745k = true;
            this.f13746l = s.r();
            this.f13747m = 0;
            this.f13748n = s.r();
            this.f13749o = 0;
            this.f13750p = Integer.MAX_VALUE;
            this.f13751q = Integer.MAX_VALUE;
            this.f13752r = s.r();
            this.f13753s = s.r();
            this.f13754t = 0;
            this.f13755u = 0;
            this.f13756v = false;
            this.f13757w = false;
            this.f13758x = false;
            this.f13759y = new HashMap();
            this.f13760z = new HashSet();
        }

        private void B(TrackSelectionParameters trackSelectionParameters) {
            this.f13735a = trackSelectionParameters.f13720d;
            this.f13736b = trackSelectionParameters.f13721e;
            this.f13737c = trackSelectionParameters.f13722i;
            this.f13738d = trackSelectionParameters.f13723o;
            this.f13739e = trackSelectionParameters.f13724p;
            this.f13740f = trackSelectionParameters.f13725q;
            this.f13741g = trackSelectionParameters.f13726r;
            this.f13742h = trackSelectionParameters.f13727s;
            this.f13743i = trackSelectionParameters.f13728t;
            this.f13744j = trackSelectionParameters.f13729u;
            this.f13745k = trackSelectionParameters.f13730v;
            this.f13746l = trackSelectionParameters.f13731w;
            this.f13747m = trackSelectionParameters.f13732x;
            this.f13748n = trackSelectionParameters.f13733y;
            this.f13749o = trackSelectionParameters.f13734z;
            this.f13750p = trackSelectionParameters.A;
            this.f13751q = trackSelectionParameters.B;
            this.f13752r = trackSelectionParameters.C;
            this.f13753s = trackSelectionParameters.D;
            this.f13754t = trackSelectionParameters.E;
            this.f13755u = trackSelectionParameters.F;
            this.f13756v = trackSelectionParameters.G;
            this.f13757w = trackSelectionParameters.H;
            this.f13758x = trackSelectionParameters.I;
            this.f13760z = new HashSet(trackSelectionParameters.K);
            this.f13759y = new HashMap(trackSelectionParameters.J);
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
            if ((w0.f40158a >= 23 || Looper.myLooper() != null) && (captioningManager = (CaptioningManager) context.getSystemService("captioning")) != null && captioningManager.isEnabled()) {
                this.f13754t = 1088;
                Locale locale = captioningManager.getLocale();
                if (locale != null) {
                    this.f13753s = s.s(w0.b0(locale));
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
            this.f13758x = z10;
            return this;
        }

        public a F(int i10) {
            this.f13738d = i10;
            return this;
        }

        public a G(Context context) {
            if (w0.f40158a >= 19) {
                H(context);
            }
            return this;
        }

        public a I(int i10, int i11, boolean z10) {
            this.f13743i = i10;
            this.f13744j = i11;
            this.f13745k = z10;
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
            this.f13735a = bundle.getInt(str, trackSelectionParameters.f13720d);
            this.f13736b = bundle.getInt(TrackSelectionParameters.T, trackSelectionParameters.f13721e);
            this.f13737c = bundle.getInt(TrackSelectionParameters.U, trackSelectionParameters.f13722i);
            this.f13738d = bundle.getInt(TrackSelectionParameters.V, trackSelectionParameters.f13723o);
            this.f13739e = bundle.getInt(TrackSelectionParameters.W, trackSelectionParameters.f13724p);
            this.f13740f = bundle.getInt(TrackSelectionParameters.X, trackSelectionParameters.f13725q);
            this.f13741g = bundle.getInt(TrackSelectionParameters.Y, trackSelectionParameters.f13726r);
            this.f13742h = bundle.getInt(TrackSelectionParameters.Z, trackSelectionParameters.f13727s);
            this.f13743i = bundle.getInt(TrackSelectionParameters.f13706a0, trackSelectionParameters.f13728t);
            this.f13744j = bundle.getInt(TrackSelectionParameters.f13707b0, trackSelectionParameters.f13729u);
            this.f13745k = bundle.getBoolean(TrackSelectionParameters.f13708c0, trackSelectionParameters.f13730v);
            this.f13746l = s.n((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.f13709d0), new String[0]));
            this.f13747m = bundle.getInt(TrackSelectionParameters.f13717l0, trackSelectionParameters.f13732x);
            this.f13748n = C((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.N), new String[0]));
            this.f13749o = bundle.getInt(TrackSelectionParameters.O, trackSelectionParameters.f13734z);
            this.f13750p = bundle.getInt(TrackSelectionParameters.f13710e0, trackSelectionParameters.A);
            this.f13751q = bundle.getInt(TrackSelectionParameters.f13711f0, trackSelectionParameters.B);
            this.f13752r = s.n((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.f13712g0), new String[0]));
            this.f13753s = C((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.P), new String[0]));
            this.f13754t = bundle.getInt(TrackSelectionParameters.Q, trackSelectionParameters.E);
            this.f13755u = bundle.getInt(TrackSelectionParameters.f13718m0, trackSelectionParameters.F);
            this.f13756v = bundle.getBoolean(TrackSelectionParameters.R, trackSelectionParameters.G);
            this.f13757w = bundle.getBoolean(TrackSelectionParameters.f13713h0, trackSelectionParameters.H);
            this.f13758x = bundle.getBoolean(TrackSelectionParameters.f13714i0, trackSelectionParameters.I);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(TrackSelectionParameters.f13715j0);
            if (parcelableArrayList == null) {
                d10 = s.r();
            } else {
                d10 = ne.d.d(o.f31742p, parcelableArrayList);
            }
            this.f13759y = new HashMap();
            for (int i10 = 0; i10 < d10.size(); i10++) {
                o oVar = (o) d10.get(i10);
                this.f13759y.put(oVar.f31743d, oVar);
            }
            int[] iArr = (int[]) ii.h.a(bundle.getIntArray(TrackSelectionParameters.f13716k0), new int[0]);
            this.f13760z = new HashSet();
            for (int i11 : iArr) {
                this.f13760z.add(Integer.valueOf(i11));
            }
        }
    }
}
