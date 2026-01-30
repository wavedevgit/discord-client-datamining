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
    private static final String f14077a0;

    /* renamed from: b0  reason: collision with root package name */
    private static final String f14078b0;

    /* renamed from: c0  reason: collision with root package name */
    private static final String f14079c0;

    /* renamed from: d0  reason: collision with root package name */
    private static final String f14080d0;

    /* renamed from: e0  reason: collision with root package name */
    private static final String f14081e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final String f14082f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final String f14083g0;

    /* renamed from: h0  reason: collision with root package name */
    private static final String f14084h0;

    /* renamed from: i0  reason: collision with root package name */
    private static final String f14085i0;

    /* renamed from: j0  reason: collision with root package name */
    private static final String f14086j0;

    /* renamed from: k0  reason: collision with root package name */
    private static final String f14087k0;

    /* renamed from: l0  reason: collision with root package name */
    private static final String f14088l0;

    /* renamed from: m0  reason: collision with root package name */
    private static final String f14089m0;

    /* renamed from: n0  reason: collision with root package name */
    public static final g.a f14090n0;
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
    public final int f14091d;

    /* renamed from: e  reason: collision with root package name */
    public final int f14092e;

    /* renamed from: i  reason: collision with root package name */
    public final int f14093i;

    /* renamed from: o  reason: collision with root package name */
    public final int f14094o;

    /* renamed from: p  reason: collision with root package name */
    public final int f14095p;

    /* renamed from: q  reason: collision with root package name */
    public final int f14096q;

    /* renamed from: r  reason: collision with root package name */
    public final int f14097r;

    /* renamed from: s  reason: collision with root package name */
    public final int f14098s;

    /* renamed from: t  reason: collision with root package name */
    public final int f14099t;

    /* renamed from: u  reason: collision with root package name */
    public final int f14100u;

    /* renamed from: v  reason: collision with root package name */
    public final boolean f14101v;

    /* renamed from: w  reason: collision with root package name */
    public final s f14102w;

    /* renamed from: x  reason: collision with root package name */
    public final int f14103x;

    /* renamed from: y  reason: collision with root package name */
    public final s f14104y;

    /* renamed from: z  reason: collision with root package name */
    public final int f14105z;

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
        f14077a0 = w0.B0(14);
        f14078b0 = w0.B0(15);
        f14079c0 = w0.B0(16);
        f14080d0 = w0.B0(17);
        f14081e0 = w0.B0(18);
        f14082f0 = w0.B0(19);
        f14083g0 = w0.B0(20);
        f14084h0 = w0.B0(21);
        f14085i0 = w0.B0(22);
        f14086j0 = w0.B0(23);
        f14087k0 = w0.B0(24);
        f14088l0 = w0.B0(25);
        f14089m0 = w0.B0(26);
        f14090n0 = new g.a() { // from class: je.p
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return TrackSelectionParameters.A(bundle);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public TrackSelectionParameters(a aVar) {
        this.f14091d = aVar.f14106a;
        this.f14092e = aVar.f14107b;
        this.f14093i = aVar.f14108c;
        this.f14094o = aVar.f14109d;
        this.f14095p = aVar.f14110e;
        this.f14096q = aVar.f14111f;
        this.f14097r = aVar.f14112g;
        this.f14098s = aVar.f14113h;
        this.f14099t = aVar.f14114i;
        this.f14100u = aVar.f14115j;
        this.f14101v = aVar.f14116k;
        this.f14102w = aVar.f14117l;
        this.f14103x = aVar.f14118m;
        this.f14104y = aVar.f14119n;
        this.f14105z = aVar.f14120o;
        this.A = aVar.f14121p;
        this.B = aVar.f14122q;
        this.C = aVar.f14123r;
        this.D = aVar.f14124s;
        this.E = aVar.f14125t;
        this.F = aVar.f14126u;
        this.G = aVar.f14127v;
        this.H = aVar.f14128w;
        this.I = aVar.f14129x;
        this.J = t.c(aVar.f14130y);
        this.K = u.m(aVar.f14131z);
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
            if (this.f14091d == trackSelectionParameters.f14091d && this.f14092e == trackSelectionParameters.f14092e && this.f14093i == trackSelectionParameters.f14093i && this.f14094o == trackSelectionParameters.f14094o && this.f14095p == trackSelectionParameters.f14095p && this.f14096q == trackSelectionParameters.f14096q && this.f14097r == trackSelectionParameters.f14097r && this.f14098s == trackSelectionParameters.f14098s && this.f14101v == trackSelectionParameters.f14101v && this.f14099t == trackSelectionParameters.f14099t && this.f14100u == trackSelectionParameters.f14100u && this.f14102w.equals(trackSelectionParameters.f14102w) && this.f14103x == trackSelectionParameters.f14103x && this.f14104y.equals(trackSelectionParameters.f14104y) && this.f14105z == trackSelectionParameters.f14105z && this.A == trackSelectionParameters.A && this.B == trackSelectionParameters.B && this.C.equals(trackSelectionParameters.C) && this.D.equals(trackSelectionParameters.D) && this.E == trackSelectionParameters.E && this.F == trackSelectionParameters.F && this.G == trackSelectionParameters.G && this.H == trackSelectionParameters.H && this.I == trackSelectionParameters.I && this.J.equals(trackSelectionParameters.J) && this.K.equals(trackSelectionParameters.K)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((((((((((((((((((((((((((((((((((((this.f14091d + 31) * 31) + this.f14092e) * 31) + this.f14093i) * 31) + this.f14094o) * 31) + this.f14095p) * 31) + this.f14096q) * 31) + this.f14097r) * 31) + this.f14098s) * 31) + (this.f14101v ? 1 : 0)) * 31) + this.f14099t) * 31) + this.f14100u) * 31) + this.f14102w.hashCode()) * 31) + this.f14103x) * 31) + this.f14104y.hashCode()) * 31) + this.f14105z) * 31) + this.A) * 31) + this.B) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31) + this.E) * 31) + this.F) * 31) + (this.G ? 1 : 0)) * 31) + (this.H ? 1 : 0)) * 31) + (this.I ? 1 : 0)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f14106a;

        /* renamed from: b  reason: collision with root package name */
        private int f14107b;

        /* renamed from: c  reason: collision with root package name */
        private int f14108c;

        /* renamed from: d  reason: collision with root package name */
        private int f14109d;

        /* renamed from: e  reason: collision with root package name */
        private int f14110e;

        /* renamed from: f  reason: collision with root package name */
        private int f14111f;

        /* renamed from: g  reason: collision with root package name */
        private int f14112g;

        /* renamed from: h  reason: collision with root package name */
        private int f14113h;

        /* renamed from: i  reason: collision with root package name */
        private int f14114i;

        /* renamed from: j  reason: collision with root package name */
        private int f14115j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f14116k;

        /* renamed from: l  reason: collision with root package name */
        private s f14117l;

        /* renamed from: m  reason: collision with root package name */
        private int f14118m;

        /* renamed from: n  reason: collision with root package name */
        private s f14119n;

        /* renamed from: o  reason: collision with root package name */
        private int f14120o;

        /* renamed from: p  reason: collision with root package name */
        private int f14121p;

        /* renamed from: q  reason: collision with root package name */
        private int f14122q;

        /* renamed from: r  reason: collision with root package name */
        private s f14123r;

        /* renamed from: s  reason: collision with root package name */
        private s f14124s;

        /* renamed from: t  reason: collision with root package name */
        private int f14125t;

        /* renamed from: u  reason: collision with root package name */
        private int f14126u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f14127v;

        /* renamed from: w  reason: collision with root package name */
        private boolean f14128w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f14129x;

        /* renamed from: y  reason: collision with root package name */
        private HashMap f14130y;

        /* renamed from: z  reason: collision with root package name */
        private HashSet f14131z;

        public a() {
            this.f14106a = Integer.MAX_VALUE;
            this.f14107b = Integer.MAX_VALUE;
            this.f14108c = Integer.MAX_VALUE;
            this.f14109d = Integer.MAX_VALUE;
            this.f14114i = Integer.MAX_VALUE;
            this.f14115j = Integer.MAX_VALUE;
            this.f14116k = true;
            this.f14117l = s.r();
            this.f14118m = 0;
            this.f14119n = s.r();
            this.f14120o = 0;
            this.f14121p = Integer.MAX_VALUE;
            this.f14122q = Integer.MAX_VALUE;
            this.f14123r = s.r();
            this.f14124s = s.r();
            this.f14125t = 0;
            this.f14126u = 0;
            this.f14127v = false;
            this.f14128w = false;
            this.f14129x = false;
            this.f14130y = new HashMap();
            this.f14131z = new HashSet();
        }

        private void B(TrackSelectionParameters trackSelectionParameters) {
            this.f14106a = trackSelectionParameters.f14091d;
            this.f14107b = trackSelectionParameters.f14092e;
            this.f14108c = trackSelectionParameters.f14093i;
            this.f14109d = trackSelectionParameters.f14094o;
            this.f14110e = trackSelectionParameters.f14095p;
            this.f14111f = trackSelectionParameters.f14096q;
            this.f14112g = trackSelectionParameters.f14097r;
            this.f14113h = trackSelectionParameters.f14098s;
            this.f14114i = trackSelectionParameters.f14099t;
            this.f14115j = trackSelectionParameters.f14100u;
            this.f14116k = trackSelectionParameters.f14101v;
            this.f14117l = trackSelectionParameters.f14102w;
            this.f14118m = trackSelectionParameters.f14103x;
            this.f14119n = trackSelectionParameters.f14104y;
            this.f14120o = trackSelectionParameters.f14105z;
            this.f14121p = trackSelectionParameters.A;
            this.f14122q = trackSelectionParameters.B;
            this.f14123r = trackSelectionParameters.C;
            this.f14124s = trackSelectionParameters.D;
            this.f14125t = trackSelectionParameters.E;
            this.f14126u = trackSelectionParameters.F;
            this.f14127v = trackSelectionParameters.G;
            this.f14128w = trackSelectionParameters.H;
            this.f14129x = trackSelectionParameters.I;
            this.f14131z = new HashSet(trackSelectionParameters.K);
            this.f14130y = new HashMap(trackSelectionParameters.J);
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
            if ((w0.f40295a >= 23 || Looper.myLooper() != null) && (captioningManager = (CaptioningManager) context.getSystemService("captioning")) != null && captioningManager.isEnabled()) {
                this.f14125t = 1088;
                Locale locale = captioningManager.getLocale();
                if (locale != null) {
                    this.f14124s = s.s(w0.b0(locale));
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
            this.f14129x = z10;
            return this;
        }

        public a F(int i10) {
            this.f14109d = i10;
            return this;
        }

        public a G(Context context) {
            if (w0.f40295a >= 19) {
                H(context);
            }
            return this;
        }

        public a I(int i10, int i11, boolean z10) {
            this.f14114i = i10;
            this.f14115j = i11;
            this.f14116k = z10;
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
            this.f14106a = bundle.getInt(str, trackSelectionParameters.f14091d);
            this.f14107b = bundle.getInt(TrackSelectionParameters.T, trackSelectionParameters.f14092e);
            this.f14108c = bundle.getInt(TrackSelectionParameters.U, trackSelectionParameters.f14093i);
            this.f14109d = bundle.getInt(TrackSelectionParameters.V, trackSelectionParameters.f14094o);
            this.f14110e = bundle.getInt(TrackSelectionParameters.W, trackSelectionParameters.f14095p);
            this.f14111f = bundle.getInt(TrackSelectionParameters.X, trackSelectionParameters.f14096q);
            this.f14112g = bundle.getInt(TrackSelectionParameters.Y, trackSelectionParameters.f14097r);
            this.f14113h = bundle.getInt(TrackSelectionParameters.Z, trackSelectionParameters.f14098s);
            this.f14114i = bundle.getInt(TrackSelectionParameters.f14077a0, trackSelectionParameters.f14099t);
            this.f14115j = bundle.getInt(TrackSelectionParameters.f14078b0, trackSelectionParameters.f14100u);
            this.f14116k = bundle.getBoolean(TrackSelectionParameters.f14079c0, trackSelectionParameters.f14101v);
            this.f14117l = s.n((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.f14080d0), new String[0]));
            this.f14118m = bundle.getInt(TrackSelectionParameters.f14088l0, trackSelectionParameters.f14103x);
            this.f14119n = C((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.N), new String[0]));
            this.f14120o = bundle.getInt(TrackSelectionParameters.O, trackSelectionParameters.f14105z);
            this.f14121p = bundle.getInt(TrackSelectionParameters.f14081e0, trackSelectionParameters.A);
            this.f14122q = bundle.getInt(TrackSelectionParameters.f14082f0, trackSelectionParameters.B);
            this.f14123r = s.n((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.f14083g0), new String[0]));
            this.f14124s = C((String[]) ii.h.a(bundle.getStringArray(TrackSelectionParameters.P), new String[0]));
            this.f14125t = bundle.getInt(TrackSelectionParameters.Q, trackSelectionParameters.E);
            this.f14126u = bundle.getInt(TrackSelectionParameters.f14089m0, trackSelectionParameters.F);
            this.f14127v = bundle.getBoolean(TrackSelectionParameters.R, trackSelectionParameters.G);
            this.f14128w = bundle.getBoolean(TrackSelectionParameters.f14084h0, trackSelectionParameters.H);
            this.f14129x = bundle.getBoolean(TrackSelectionParameters.f14085i0, trackSelectionParameters.I);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(TrackSelectionParameters.f14086j0);
            if (parcelableArrayList == null) {
                d10 = s.r();
            } else {
                d10 = ne.d.d(o.f32004p, parcelableArrayList);
            }
            this.f14130y = new HashMap();
            for (int i10 = 0; i10 < d10.size(); i10++) {
                o oVar = (o) d10.get(i10);
                this.f14130y.put(oVar.f32005d, oVar);
            }
            int[] iArr = (int[]) ii.h.a(bundle.getIntArray(TrackSelectionParameters.f14087k0), new int[0]);
            this.f14131z = new HashSet();
            for (int i11 : iArr) {
                this.f14131z.add(Integer.valueOf(i11));
            }
        }
    }
}
