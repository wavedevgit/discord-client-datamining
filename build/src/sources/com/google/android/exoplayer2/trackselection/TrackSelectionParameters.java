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
    private static final String f13737a0;

    /* renamed from: b0  reason: collision with root package name */
    private static final String f13738b0;

    /* renamed from: c0  reason: collision with root package name */
    private static final String f13739c0;

    /* renamed from: d0  reason: collision with root package name */
    private static final String f13740d0;

    /* renamed from: e0  reason: collision with root package name */
    private static final String f13741e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final String f13742f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final String f13743g0;

    /* renamed from: h0  reason: collision with root package name */
    private static final String f13744h0;

    /* renamed from: i0  reason: collision with root package name */
    private static final String f13745i0;

    /* renamed from: j0  reason: collision with root package name */
    private static final String f13746j0;

    /* renamed from: k0  reason: collision with root package name */
    private static final String f13747k0;

    /* renamed from: l0  reason: collision with root package name */
    private static final String f13748l0;

    /* renamed from: m0  reason: collision with root package name */
    private static final String f13749m0;

    /* renamed from: n0  reason: collision with root package name */
    public static final g.a f13750n0;
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
    public final int f13751d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13752e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13753i;

    /* renamed from: o  reason: collision with root package name */
    public final int f13754o;

    /* renamed from: p  reason: collision with root package name */
    public final int f13755p;

    /* renamed from: q  reason: collision with root package name */
    public final int f13756q;

    /* renamed from: r  reason: collision with root package name */
    public final int f13757r;

    /* renamed from: s  reason: collision with root package name */
    public final int f13758s;

    /* renamed from: t  reason: collision with root package name */
    public final int f13759t;

    /* renamed from: u  reason: collision with root package name */
    public final int f13760u;

    /* renamed from: v  reason: collision with root package name */
    public final boolean f13761v;

    /* renamed from: w  reason: collision with root package name */
    public final s f13762w;

    /* renamed from: x  reason: collision with root package name */
    public final int f13763x;

    /* renamed from: y  reason: collision with root package name */
    public final s f13764y;

    /* renamed from: z  reason: collision with root package name */
    public final int f13765z;

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
        f13737a0 = w0.B0(14);
        f13738b0 = w0.B0(15);
        f13739c0 = w0.B0(16);
        f13740d0 = w0.B0(17);
        f13741e0 = w0.B0(18);
        f13742f0 = w0.B0(19);
        f13743g0 = w0.B0(20);
        f13744h0 = w0.B0(21);
        f13745i0 = w0.B0(22);
        f13746j0 = w0.B0(23);
        f13747k0 = w0.B0(24);
        f13748l0 = w0.B0(25);
        f13749m0 = w0.B0(26);
        f13750n0 = new g.a() { // from class: ke.p
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return TrackSelectionParameters.A(bundle);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public TrackSelectionParameters(a aVar) {
        this.f13751d = aVar.f13766a;
        this.f13752e = aVar.f13767b;
        this.f13753i = aVar.f13768c;
        this.f13754o = aVar.f13769d;
        this.f13755p = aVar.f13770e;
        this.f13756q = aVar.f13771f;
        this.f13757r = aVar.f13772g;
        this.f13758s = aVar.f13773h;
        this.f13759t = aVar.f13774i;
        this.f13760u = aVar.f13775j;
        this.f13761v = aVar.f13776k;
        this.f13762w = aVar.f13777l;
        this.f13763x = aVar.f13778m;
        this.f13764y = aVar.f13779n;
        this.f13765z = aVar.f13780o;
        this.A = aVar.f13781p;
        this.B = aVar.f13782q;
        this.C = aVar.f13783r;
        this.D = aVar.f13784s;
        this.E = aVar.f13785t;
        this.F = aVar.f13786u;
        this.G = aVar.f13787v;
        this.H = aVar.f13788w;
        this.I = aVar.f13789x;
        this.J = t.c(aVar.f13790y);
        this.K = u.o(aVar.f13791z);
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
            if (this.f13751d == trackSelectionParameters.f13751d && this.f13752e == trackSelectionParameters.f13752e && this.f13753i == trackSelectionParameters.f13753i && this.f13754o == trackSelectionParameters.f13754o && this.f13755p == trackSelectionParameters.f13755p && this.f13756q == trackSelectionParameters.f13756q && this.f13757r == trackSelectionParameters.f13757r && this.f13758s == trackSelectionParameters.f13758s && this.f13761v == trackSelectionParameters.f13761v && this.f13759t == trackSelectionParameters.f13759t && this.f13760u == trackSelectionParameters.f13760u && this.f13762w.equals(trackSelectionParameters.f13762w) && this.f13763x == trackSelectionParameters.f13763x && this.f13764y.equals(trackSelectionParameters.f13764y) && this.f13765z == trackSelectionParameters.f13765z && this.A == trackSelectionParameters.A && this.B == trackSelectionParameters.B && this.C.equals(trackSelectionParameters.C) && this.D.equals(trackSelectionParameters.D) && this.E == trackSelectionParameters.E && this.F == trackSelectionParameters.F && this.G == trackSelectionParameters.G && this.H == trackSelectionParameters.H && this.I == trackSelectionParameters.I && this.J.equals(trackSelectionParameters.J) && this.K.equals(trackSelectionParameters.K)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((((((((((((((((((((((((((((((((((((this.f13751d + 31) * 31) + this.f13752e) * 31) + this.f13753i) * 31) + this.f13754o) * 31) + this.f13755p) * 31) + this.f13756q) * 31) + this.f13757r) * 31) + this.f13758s) * 31) + (this.f13761v ? 1 : 0)) * 31) + this.f13759t) * 31) + this.f13760u) * 31) + this.f13762w.hashCode()) * 31) + this.f13763x) * 31) + this.f13764y.hashCode()) * 31) + this.f13765z) * 31) + this.A) * 31) + this.B) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31) + this.E) * 31) + this.F) * 31) + (this.G ? 1 : 0)) * 31) + (this.H ? 1 : 0)) * 31) + (this.I ? 1 : 0)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f13766a;

        /* renamed from: b  reason: collision with root package name */
        private int f13767b;

        /* renamed from: c  reason: collision with root package name */
        private int f13768c;

        /* renamed from: d  reason: collision with root package name */
        private int f13769d;

        /* renamed from: e  reason: collision with root package name */
        private int f13770e;

        /* renamed from: f  reason: collision with root package name */
        private int f13771f;

        /* renamed from: g  reason: collision with root package name */
        private int f13772g;

        /* renamed from: h  reason: collision with root package name */
        private int f13773h;

        /* renamed from: i  reason: collision with root package name */
        private int f13774i;

        /* renamed from: j  reason: collision with root package name */
        private int f13775j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f13776k;

        /* renamed from: l  reason: collision with root package name */
        private s f13777l;

        /* renamed from: m  reason: collision with root package name */
        private int f13778m;

        /* renamed from: n  reason: collision with root package name */
        private s f13779n;

        /* renamed from: o  reason: collision with root package name */
        private int f13780o;

        /* renamed from: p  reason: collision with root package name */
        private int f13781p;

        /* renamed from: q  reason: collision with root package name */
        private int f13782q;

        /* renamed from: r  reason: collision with root package name */
        private s f13783r;

        /* renamed from: s  reason: collision with root package name */
        private s f13784s;

        /* renamed from: t  reason: collision with root package name */
        private int f13785t;

        /* renamed from: u  reason: collision with root package name */
        private int f13786u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f13787v;

        /* renamed from: w  reason: collision with root package name */
        private boolean f13788w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f13789x;

        /* renamed from: y  reason: collision with root package name */
        private HashMap f13790y;

        /* renamed from: z  reason: collision with root package name */
        private HashSet f13791z;

        public a() {
            this.f13766a = Integer.MAX_VALUE;
            this.f13767b = Integer.MAX_VALUE;
            this.f13768c = Integer.MAX_VALUE;
            this.f13769d = Integer.MAX_VALUE;
            this.f13774i = Integer.MAX_VALUE;
            this.f13775j = Integer.MAX_VALUE;
            this.f13776k = true;
            this.f13777l = s.t();
            this.f13778m = 0;
            this.f13779n = s.t();
            this.f13780o = 0;
            this.f13781p = Integer.MAX_VALUE;
            this.f13782q = Integer.MAX_VALUE;
            this.f13783r = s.t();
            this.f13784s = s.t();
            this.f13785t = 0;
            this.f13786u = 0;
            this.f13787v = false;
            this.f13788w = false;
            this.f13789x = false;
            this.f13790y = new HashMap();
            this.f13791z = new HashSet();
        }

        private void B(TrackSelectionParameters trackSelectionParameters) {
            this.f13766a = trackSelectionParameters.f13751d;
            this.f13767b = trackSelectionParameters.f13752e;
            this.f13768c = trackSelectionParameters.f13753i;
            this.f13769d = trackSelectionParameters.f13754o;
            this.f13770e = trackSelectionParameters.f13755p;
            this.f13771f = trackSelectionParameters.f13756q;
            this.f13772g = trackSelectionParameters.f13757r;
            this.f13773h = trackSelectionParameters.f13758s;
            this.f13774i = trackSelectionParameters.f13759t;
            this.f13775j = trackSelectionParameters.f13760u;
            this.f13776k = trackSelectionParameters.f13761v;
            this.f13777l = trackSelectionParameters.f13762w;
            this.f13778m = trackSelectionParameters.f13763x;
            this.f13779n = trackSelectionParameters.f13764y;
            this.f13780o = trackSelectionParameters.f13765z;
            this.f13781p = trackSelectionParameters.A;
            this.f13782q = trackSelectionParameters.B;
            this.f13783r = trackSelectionParameters.C;
            this.f13784s = trackSelectionParameters.D;
            this.f13785t = trackSelectionParameters.E;
            this.f13786u = trackSelectionParameters.F;
            this.f13787v = trackSelectionParameters.G;
            this.f13788w = trackSelectionParameters.H;
            this.f13789x = trackSelectionParameters.I;
            this.f13791z = new HashSet(trackSelectionParameters.K);
            this.f13790y = new HashMap(trackSelectionParameters.J);
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
            if ((w0.f39037a >= 23 || Looper.myLooper() != null) && (captioningManager = (CaptioningManager) context.getSystemService("captioning")) != null && captioningManager.isEnabled()) {
                this.f13785t = 1088;
                Locale locale = captioningManager.getLocale();
                if (locale != null) {
                    this.f13784s = s.u(w0.b0(locale));
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
            this.f13789x = z10;
            return this;
        }

        public a F(int i10) {
            this.f13769d = i10;
            return this;
        }

        public a G(Context context) {
            if (w0.f39037a >= 19) {
                H(context);
            }
            return this;
        }

        public a I(int i10, int i11, boolean z10) {
            this.f13774i = i10;
            this.f13775j = i11;
            this.f13776k = z10;
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
            this.f13766a = bundle.getInt(str, trackSelectionParameters.f13751d);
            this.f13767b = bundle.getInt(TrackSelectionParameters.T, trackSelectionParameters.f13752e);
            this.f13768c = bundle.getInt(TrackSelectionParameters.U, trackSelectionParameters.f13753i);
            this.f13769d = bundle.getInt(TrackSelectionParameters.V, trackSelectionParameters.f13754o);
            this.f13770e = bundle.getInt(TrackSelectionParameters.W, trackSelectionParameters.f13755p);
            this.f13771f = bundle.getInt(TrackSelectionParameters.X, trackSelectionParameters.f13756q);
            this.f13772g = bundle.getInt(TrackSelectionParameters.Y, trackSelectionParameters.f13757r);
            this.f13773h = bundle.getInt(TrackSelectionParameters.Z, trackSelectionParameters.f13758s);
            this.f13774i = bundle.getInt(TrackSelectionParameters.f13737a0, trackSelectionParameters.f13759t);
            this.f13775j = bundle.getInt(TrackSelectionParameters.f13738b0, trackSelectionParameters.f13760u);
            this.f13776k = bundle.getBoolean(TrackSelectionParameters.f13739c0, trackSelectionParameters.f13761v);
            this.f13777l = s.p((String[]) pi.h.a(bundle.getStringArray(TrackSelectionParameters.f13740d0), new String[0]));
            this.f13778m = bundle.getInt(TrackSelectionParameters.f13748l0, trackSelectionParameters.f13763x);
            this.f13779n = C((String[]) pi.h.a(bundle.getStringArray(TrackSelectionParameters.N), new String[0]));
            this.f13780o = bundle.getInt(TrackSelectionParameters.O, trackSelectionParameters.f13765z);
            this.f13781p = bundle.getInt(TrackSelectionParameters.f13741e0, trackSelectionParameters.A);
            this.f13782q = bundle.getInt(TrackSelectionParameters.f13742f0, trackSelectionParameters.B);
            this.f13783r = s.p((String[]) pi.h.a(bundle.getStringArray(TrackSelectionParameters.f13743g0), new String[0]));
            this.f13784s = C((String[]) pi.h.a(bundle.getStringArray(TrackSelectionParameters.P), new String[0]));
            this.f13785t = bundle.getInt(TrackSelectionParameters.Q, trackSelectionParameters.E);
            this.f13786u = bundle.getInt(TrackSelectionParameters.f13749m0, trackSelectionParameters.F);
            this.f13787v = bundle.getBoolean(TrackSelectionParameters.R, trackSelectionParameters.G);
            this.f13788w = bundle.getBoolean(TrackSelectionParameters.f13744h0, trackSelectionParameters.H);
            this.f13789x = bundle.getBoolean(TrackSelectionParameters.f13745i0, trackSelectionParameters.I);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(TrackSelectionParameters.f13746j0);
            if (parcelableArrayList == null) {
                d10 = s.t();
            } else {
                d10 = oe.d.d(o.f31717p, parcelableArrayList);
            }
            this.f13790y = new HashMap();
            for (int i10 = 0; i10 < d10.size(); i10++) {
                o oVar = (o) d10.get(i10);
                this.f13790y.put(oVar.f31718d, oVar);
            }
            int[] iArr = (int[]) pi.h.a(bundle.getIntArray(TrackSelectionParameters.f13747k0), new int[0]);
            this.f13791z = new HashSet();
            for (int i11 : iArr) {
                this.f13791z.add(Integer.valueOf(i11));
            }
        }
    }
}
