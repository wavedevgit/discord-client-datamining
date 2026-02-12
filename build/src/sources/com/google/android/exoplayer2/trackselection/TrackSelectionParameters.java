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
import ke.o;
import oe.w0;
import qi.s;
import qi.t;
import qi.u;
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
    private static final String f13738a0;

    /* renamed from: b0  reason: collision with root package name */
    private static final String f13739b0;

    /* renamed from: c0  reason: collision with root package name */
    private static final String f13740c0;

    /* renamed from: d0  reason: collision with root package name */
    private static final String f13741d0;

    /* renamed from: e0  reason: collision with root package name */
    private static final String f13742e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final String f13743f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final String f13744g0;

    /* renamed from: h0  reason: collision with root package name */
    private static final String f13745h0;

    /* renamed from: i0  reason: collision with root package name */
    private static final String f13746i0;

    /* renamed from: j0  reason: collision with root package name */
    private static final String f13747j0;

    /* renamed from: k0  reason: collision with root package name */
    private static final String f13748k0;

    /* renamed from: l0  reason: collision with root package name */
    private static final String f13749l0;

    /* renamed from: m0  reason: collision with root package name */
    private static final String f13750m0;

    /* renamed from: n0  reason: collision with root package name */
    public static final g.a f13751n0;
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
    public final int f13752d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13753e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13754i;

    /* renamed from: o  reason: collision with root package name */
    public final int f13755o;

    /* renamed from: p  reason: collision with root package name */
    public final int f13756p;

    /* renamed from: q  reason: collision with root package name */
    public final int f13757q;

    /* renamed from: r  reason: collision with root package name */
    public final int f13758r;

    /* renamed from: s  reason: collision with root package name */
    public final int f13759s;

    /* renamed from: t  reason: collision with root package name */
    public final int f13760t;

    /* renamed from: u  reason: collision with root package name */
    public final int f13761u;

    /* renamed from: v  reason: collision with root package name */
    public final boolean f13762v;

    /* renamed from: w  reason: collision with root package name */
    public final s f13763w;

    /* renamed from: x  reason: collision with root package name */
    public final int f13764x;

    /* renamed from: y  reason: collision with root package name */
    public final s f13765y;

    /* renamed from: z  reason: collision with root package name */
    public final int f13766z;

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
        f13738a0 = w0.B0(14);
        f13739b0 = w0.B0(15);
        f13740c0 = w0.B0(16);
        f13741d0 = w0.B0(17);
        f13742e0 = w0.B0(18);
        f13743f0 = w0.B0(19);
        f13744g0 = w0.B0(20);
        f13745h0 = w0.B0(21);
        f13746i0 = w0.B0(22);
        f13747j0 = w0.B0(23);
        f13748k0 = w0.B0(24);
        f13749l0 = w0.B0(25);
        f13750m0 = w0.B0(26);
        f13751n0 = new g.a() { // from class: ke.p
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return TrackSelectionParameters.A(bundle);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public TrackSelectionParameters(a aVar) {
        this.f13752d = aVar.f13767a;
        this.f13753e = aVar.f13768b;
        this.f13754i = aVar.f13769c;
        this.f13755o = aVar.f13770d;
        this.f13756p = aVar.f13771e;
        this.f13757q = aVar.f13772f;
        this.f13758r = aVar.f13773g;
        this.f13759s = aVar.f13774h;
        this.f13760t = aVar.f13775i;
        this.f13761u = aVar.f13776j;
        this.f13762v = aVar.f13777k;
        this.f13763w = aVar.f13778l;
        this.f13764x = aVar.f13779m;
        this.f13765y = aVar.f13780n;
        this.f13766z = aVar.f13781o;
        this.A = aVar.f13782p;
        this.B = aVar.f13783q;
        this.C = aVar.f13784r;
        this.D = aVar.f13785s;
        this.E = aVar.f13786t;
        this.F = aVar.f13787u;
        this.G = aVar.f13788v;
        this.H = aVar.f13789w;
        this.I = aVar.f13790x;
        this.J = t.c(aVar.f13791y);
        this.K = u.o(aVar.f13792z);
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
            if (this.f13752d == trackSelectionParameters.f13752d && this.f13753e == trackSelectionParameters.f13753e && this.f13754i == trackSelectionParameters.f13754i && this.f13755o == trackSelectionParameters.f13755o && this.f13756p == trackSelectionParameters.f13756p && this.f13757q == trackSelectionParameters.f13757q && this.f13758r == trackSelectionParameters.f13758r && this.f13759s == trackSelectionParameters.f13759s && this.f13762v == trackSelectionParameters.f13762v && this.f13760t == trackSelectionParameters.f13760t && this.f13761u == trackSelectionParameters.f13761u && this.f13763w.equals(trackSelectionParameters.f13763w) && this.f13764x == trackSelectionParameters.f13764x && this.f13765y.equals(trackSelectionParameters.f13765y) && this.f13766z == trackSelectionParameters.f13766z && this.A == trackSelectionParameters.A && this.B == trackSelectionParameters.B && this.C.equals(trackSelectionParameters.C) && this.D.equals(trackSelectionParameters.D) && this.E == trackSelectionParameters.E && this.F == trackSelectionParameters.F && this.G == trackSelectionParameters.G && this.H == trackSelectionParameters.H && this.I == trackSelectionParameters.I && this.J.equals(trackSelectionParameters.J) && this.K.equals(trackSelectionParameters.K)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((((((((((((((((((((((((((((((((((((this.f13752d + 31) * 31) + this.f13753e) * 31) + this.f13754i) * 31) + this.f13755o) * 31) + this.f13756p) * 31) + this.f13757q) * 31) + this.f13758r) * 31) + this.f13759s) * 31) + (this.f13762v ? 1 : 0)) * 31) + this.f13760t) * 31) + this.f13761u) * 31) + this.f13763w.hashCode()) * 31) + this.f13764x) * 31) + this.f13765y.hashCode()) * 31) + this.f13766z) * 31) + this.A) * 31) + this.B) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31) + this.E) * 31) + this.F) * 31) + (this.G ? 1 : 0)) * 31) + (this.H ? 1 : 0)) * 31) + (this.I ? 1 : 0)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f13767a;

        /* renamed from: b  reason: collision with root package name */
        private int f13768b;

        /* renamed from: c  reason: collision with root package name */
        private int f13769c;

        /* renamed from: d  reason: collision with root package name */
        private int f13770d;

        /* renamed from: e  reason: collision with root package name */
        private int f13771e;

        /* renamed from: f  reason: collision with root package name */
        private int f13772f;

        /* renamed from: g  reason: collision with root package name */
        private int f13773g;

        /* renamed from: h  reason: collision with root package name */
        private int f13774h;

        /* renamed from: i  reason: collision with root package name */
        private int f13775i;

        /* renamed from: j  reason: collision with root package name */
        private int f13776j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f13777k;

        /* renamed from: l  reason: collision with root package name */
        private s f13778l;

        /* renamed from: m  reason: collision with root package name */
        private int f13779m;

        /* renamed from: n  reason: collision with root package name */
        private s f13780n;

        /* renamed from: o  reason: collision with root package name */
        private int f13781o;

        /* renamed from: p  reason: collision with root package name */
        private int f13782p;

        /* renamed from: q  reason: collision with root package name */
        private int f13783q;

        /* renamed from: r  reason: collision with root package name */
        private s f13784r;

        /* renamed from: s  reason: collision with root package name */
        private s f13785s;

        /* renamed from: t  reason: collision with root package name */
        private int f13786t;

        /* renamed from: u  reason: collision with root package name */
        private int f13787u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f13788v;

        /* renamed from: w  reason: collision with root package name */
        private boolean f13789w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f13790x;

        /* renamed from: y  reason: collision with root package name */
        private HashMap f13791y;

        /* renamed from: z  reason: collision with root package name */
        private HashSet f13792z;

        public a() {
            this.f13767a = Integer.MAX_VALUE;
            this.f13768b = Integer.MAX_VALUE;
            this.f13769c = Integer.MAX_VALUE;
            this.f13770d = Integer.MAX_VALUE;
            this.f13775i = Integer.MAX_VALUE;
            this.f13776j = Integer.MAX_VALUE;
            this.f13777k = true;
            this.f13778l = s.t();
            this.f13779m = 0;
            this.f13780n = s.t();
            this.f13781o = 0;
            this.f13782p = Integer.MAX_VALUE;
            this.f13783q = Integer.MAX_VALUE;
            this.f13784r = s.t();
            this.f13785s = s.t();
            this.f13786t = 0;
            this.f13787u = 0;
            this.f13788v = false;
            this.f13789w = false;
            this.f13790x = false;
            this.f13791y = new HashMap();
            this.f13792z = new HashSet();
        }

        private void B(TrackSelectionParameters trackSelectionParameters) {
            this.f13767a = trackSelectionParameters.f13752d;
            this.f13768b = trackSelectionParameters.f13753e;
            this.f13769c = trackSelectionParameters.f13754i;
            this.f13770d = trackSelectionParameters.f13755o;
            this.f13771e = trackSelectionParameters.f13756p;
            this.f13772f = trackSelectionParameters.f13757q;
            this.f13773g = trackSelectionParameters.f13758r;
            this.f13774h = trackSelectionParameters.f13759s;
            this.f13775i = trackSelectionParameters.f13760t;
            this.f13776j = trackSelectionParameters.f13761u;
            this.f13777k = trackSelectionParameters.f13762v;
            this.f13778l = trackSelectionParameters.f13763w;
            this.f13779m = trackSelectionParameters.f13764x;
            this.f13780n = trackSelectionParameters.f13765y;
            this.f13781o = trackSelectionParameters.f13766z;
            this.f13782p = trackSelectionParameters.A;
            this.f13783q = trackSelectionParameters.B;
            this.f13784r = trackSelectionParameters.C;
            this.f13785s = trackSelectionParameters.D;
            this.f13786t = trackSelectionParameters.E;
            this.f13787u = trackSelectionParameters.F;
            this.f13788v = trackSelectionParameters.G;
            this.f13789w = trackSelectionParameters.H;
            this.f13790x = trackSelectionParameters.I;
            this.f13792z = new HashSet(trackSelectionParameters.K);
            this.f13791y = new HashMap(trackSelectionParameters.J);
        }

        private static s C(String[] strArr) {
            s.a k10 = s.k();
            for (String str : (String[]) oe.a.e(strArr)) {
                k10.a(w0.M0((String) oe.a.e(str)));
            }
            return k10.k();
        }

        private void H(Context context) {
            CaptioningManager captioningManager;
            if ((w0.f39038a >= 23 || Looper.myLooper() != null) && (captioningManager = (CaptioningManager) context.getSystemService("captioning")) != null && captioningManager.isEnabled()) {
                this.f13786t = 1088;
                Locale locale = captioningManager.getLocale();
                if (locale != null) {
                    this.f13785s = s.u(w0.b0(locale));
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
            this.f13790x = z10;
            return this;
        }

        public a F(int i10) {
            this.f13770d = i10;
            return this;
        }

        public a G(Context context) {
            if (w0.f39038a >= 19) {
                H(context);
            }
            return this;
        }

        public a I(int i10, int i11, boolean z10) {
            this.f13775i = i10;
            this.f13776j = i11;
            this.f13777k = z10;
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
            this.f13767a = bundle.getInt(str, trackSelectionParameters.f13752d);
            this.f13768b = bundle.getInt(TrackSelectionParameters.T, trackSelectionParameters.f13753e);
            this.f13769c = bundle.getInt(TrackSelectionParameters.U, trackSelectionParameters.f13754i);
            this.f13770d = bundle.getInt(TrackSelectionParameters.V, trackSelectionParameters.f13755o);
            this.f13771e = bundle.getInt(TrackSelectionParameters.W, trackSelectionParameters.f13756p);
            this.f13772f = bundle.getInt(TrackSelectionParameters.X, trackSelectionParameters.f13757q);
            this.f13773g = bundle.getInt(TrackSelectionParameters.Y, trackSelectionParameters.f13758r);
            this.f13774h = bundle.getInt(TrackSelectionParameters.Z, trackSelectionParameters.f13759s);
            this.f13775i = bundle.getInt(TrackSelectionParameters.f13738a0, trackSelectionParameters.f13760t);
            this.f13776j = bundle.getInt(TrackSelectionParameters.f13739b0, trackSelectionParameters.f13761u);
            this.f13777k = bundle.getBoolean(TrackSelectionParameters.f13740c0, trackSelectionParameters.f13762v);
            this.f13778l = s.p((String[]) pi.h.a(bundle.getStringArray(TrackSelectionParameters.f13741d0), new String[0]));
            this.f13779m = bundle.getInt(TrackSelectionParameters.f13749l0, trackSelectionParameters.f13764x);
            this.f13780n = C((String[]) pi.h.a(bundle.getStringArray(TrackSelectionParameters.N), new String[0]));
            this.f13781o = bundle.getInt(TrackSelectionParameters.O, trackSelectionParameters.f13766z);
            this.f13782p = bundle.getInt(TrackSelectionParameters.f13742e0, trackSelectionParameters.A);
            this.f13783q = bundle.getInt(TrackSelectionParameters.f13743f0, trackSelectionParameters.B);
            this.f13784r = s.p((String[]) pi.h.a(bundle.getStringArray(TrackSelectionParameters.f13744g0), new String[0]));
            this.f13785s = C((String[]) pi.h.a(bundle.getStringArray(TrackSelectionParameters.P), new String[0]));
            this.f13786t = bundle.getInt(TrackSelectionParameters.Q, trackSelectionParameters.E);
            this.f13787u = bundle.getInt(TrackSelectionParameters.f13750m0, trackSelectionParameters.F);
            this.f13788v = bundle.getBoolean(TrackSelectionParameters.R, trackSelectionParameters.G);
            this.f13789w = bundle.getBoolean(TrackSelectionParameters.f13745h0, trackSelectionParameters.H);
            this.f13790x = bundle.getBoolean(TrackSelectionParameters.f13746i0, trackSelectionParameters.I);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(TrackSelectionParameters.f13747j0);
            if (parcelableArrayList == null) {
                d10 = s.t();
            } else {
                d10 = oe.d.d(o.f31718p, parcelableArrayList);
            }
            this.f13791y = new HashMap();
            for (int i10 = 0; i10 < d10.size(); i10++) {
                o oVar = (o) d10.get(i10);
                this.f13791y.put(oVar.f31719d, oVar);
            }
            int[] iArr = (int[]) pi.h.a(bundle.getIntArray(TrackSelectionParameters.f13748k0), new int[0]);
            this.f13792z = new HashSet();
            for (int i11 : iArr) {
                this.f13792z.add(Integer.valueOf(i11));
            }
        }
    }
}
