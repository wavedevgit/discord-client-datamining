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
import ne.w0;
import ni.s;
import ni.t;
import ni.u;
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
    private static final String f13020a0;

    /* renamed from: b0  reason: collision with root package name */
    private static final String f13021b0;

    /* renamed from: c0  reason: collision with root package name */
    private static final String f13022c0;

    /* renamed from: d0  reason: collision with root package name */
    private static final String f13023d0;

    /* renamed from: e0  reason: collision with root package name */
    private static final String f13024e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final String f13025f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final String f13026g0;

    /* renamed from: h0  reason: collision with root package name */
    private static final String f13027h0;

    /* renamed from: i0  reason: collision with root package name */
    private static final String f13028i0;

    /* renamed from: j0  reason: collision with root package name */
    private static final String f13029j0;

    /* renamed from: k0  reason: collision with root package name */
    private static final String f13030k0;

    /* renamed from: l0  reason: collision with root package name */
    private static final String f13031l0;

    /* renamed from: m0  reason: collision with root package name */
    private static final String f13032m0;

    /* renamed from: n0  reason: collision with root package name */
    public static final g.a f13033n0;
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
    public final int f13034d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13035e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13036i;

    /* renamed from: o  reason: collision with root package name */
    public final int f13037o;

    /* renamed from: p  reason: collision with root package name */
    public final int f13038p;

    /* renamed from: q  reason: collision with root package name */
    public final int f13039q;

    /* renamed from: r  reason: collision with root package name */
    public final int f13040r;

    /* renamed from: s  reason: collision with root package name */
    public final int f13041s;

    /* renamed from: t  reason: collision with root package name */
    public final int f13042t;

    /* renamed from: u  reason: collision with root package name */
    public final int f13043u;

    /* renamed from: v  reason: collision with root package name */
    public final boolean f13044v;

    /* renamed from: w  reason: collision with root package name */
    public final s f13045w;

    /* renamed from: x  reason: collision with root package name */
    public final int f13046x;

    /* renamed from: y  reason: collision with root package name */
    public final s f13047y;

    /* renamed from: z  reason: collision with root package name */
    public final int f13048z;

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
        f13020a0 = w0.B0(14);
        f13021b0 = w0.B0(15);
        f13022c0 = w0.B0(16);
        f13023d0 = w0.B0(17);
        f13024e0 = w0.B0(18);
        f13025f0 = w0.B0(19);
        f13026g0 = w0.B0(20);
        f13027h0 = w0.B0(21);
        f13028i0 = w0.B0(22);
        f13029j0 = w0.B0(23);
        f13030k0 = w0.B0(24);
        f13031l0 = w0.B0(25);
        f13032m0 = w0.B0(26);
        f13033n0 = new g.a() { // from class: je.p
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return TrackSelectionParameters.A(bundle);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public TrackSelectionParameters(a aVar) {
        this.f13034d = aVar.f13049a;
        this.f13035e = aVar.f13050b;
        this.f13036i = aVar.f13051c;
        this.f13037o = aVar.f13052d;
        this.f13038p = aVar.f13053e;
        this.f13039q = aVar.f13054f;
        this.f13040r = aVar.f13055g;
        this.f13041s = aVar.f13056h;
        this.f13042t = aVar.f13057i;
        this.f13043u = aVar.f13058j;
        this.f13044v = aVar.f13059k;
        this.f13045w = aVar.f13060l;
        this.f13046x = aVar.f13061m;
        this.f13047y = aVar.f13062n;
        this.f13048z = aVar.f13063o;
        this.A = aVar.f13064p;
        this.B = aVar.f13065q;
        this.C = aVar.f13066r;
        this.D = aVar.f13067s;
        this.E = aVar.f13068t;
        this.F = aVar.f13069u;
        this.G = aVar.f13070v;
        this.H = aVar.f13071w;
        this.I = aVar.f13072x;
        this.J = t.c(aVar.f13073y);
        this.K = u.o(aVar.f13074z);
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
            if (this.f13034d == trackSelectionParameters.f13034d && this.f13035e == trackSelectionParameters.f13035e && this.f13036i == trackSelectionParameters.f13036i && this.f13037o == trackSelectionParameters.f13037o && this.f13038p == trackSelectionParameters.f13038p && this.f13039q == trackSelectionParameters.f13039q && this.f13040r == trackSelectionParameters.f13040r && this.f13041s == trackSelectionParameters.f13041s && this.f13044v == trackSelectionParameters.f13044v && this.f13042t == trackSelectionParameters.f13042t && this.f13043u == trackSelectionParameters.f13043u && this.f13045w.equals(trackSelectionParameters.f13045w) && this.f13046x == trackSelectionParameters.f13046x && this.f13047y.equals(trackSelectionParameters.f13047y) && this.f13048z == trackSelectionParameters.f13048z && this.A == trackSelectionParameters.A && this.B == trackSelectionParameters.B && this.C.equals(trackSelectionParameters.C) && this.D.equals(trackSelectionParameters.D) && this.E == trackSelectionParameters.E && this.F == trackSelectionParameters.F && this.G == trackSelectionParameters.G && this.H == trackSelectionParameters.H && this.I == trackSelectionParameters.I && this.J.equals(trackSelectionParameters.J) && this.K.equals(trackSelectionParameters.K)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((((((((((((((((((((((((((((((((((((this.f13034d + 31) * 31) + this.f13035e) * 31) + this.f13036i) * 31) + this.f13037o) * 31) + this.f13038p) * 31) + this.f13039q) * 31) + this.f13040r) * 31) + this.f13041s) * 31) + (this.f13044v ? 1 : 0)) * 31) + this.f13042t) * 31) + this.f13043u) * 31) + this.f13045w.hashCode()) * 31) + this.f13046x) * 31) + this.f13047y.hashCode()) * 31) + this.f13048z) * 31) + this.A) * 31) + this.B) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31) + this.E) * 31) + this.F) * 31) + (this.G ? 1 : 0)) * 31) + (this.H ? 1 : 0)) * 31) + (this.I ? 1 : 0)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f13049a;

        /* renamed from: b  reason: collision with root package name */
        private int f13050b;

        /* renamed from: c  reason: collision with root package name */
        private int f13051c;

        /* renamed from: d  reason: collision with root package name */
        private int f13052d;

        /* renamed from: e  reason: collision with root package name */
        private int f13053e;

        /* renamed from: f  reason: collision with root package name */
        private int f13054f;

        /* renamed from: g  reason: collision with root package name */
        private int f13055g;

        /* renamed from: h  reason: collision with root package name */
        private int f13056h;

        /* renamed from: i  reason: collision with root package name */
        private int f13057i;

        /* renamed from: j  reason: collision with root package name */
        private int f13058j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f13059k;

        /* renamed from: l  reason: collision with root package name */
        private s f13060l;

        /* renamed from: m  reason: collision with root package name */
        private int f13061m;

        /* renamed from: n  reason: collision with root package name */
        private s f13062n;

        /* renamed from: o  reason: collision with root package name */
        private int f13063o;

        /* renamed from: p  reason: collision with root package name */
        private int f13064p;

        /* renamed from: q  reason: collision with root package name */
        private int f13065q;

        /* renamed from: r  reason: collision with root package name */
        private s f13066r;

        /* renamed from: s  reason: collision with root package name */
        private s f13067s;

        /* renamed from: t  reason: collision with root package name */
        private int f13068t;

        /* renamed from: u  reason: collision with root package name */
        private int f13069u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f13070v;

        /* renamed from: w  reason: collision with root package name */
        private boolean f13071w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f13072x;

        /* renamed from: y  reason: collision with root package name */
        private HashMap f13073y;

        /* renamed from: z  reason: collision with root package name */
        private HashSet f13074z;

        public a() {
            this.f13049a = Integer.MAX_VALUE;
            this.f13050b = Integer.MAX_VALUE;
            this.f13051c = Integer.MAX_VALUE;
            this.f13052d = Integer.MAX_VALUE;
            this.f13057i = Integer.MAX_VALUE;
            this.f13058j = Integer.MAX_VALUE;
            this.f13059k = true;
            this.f13060l = s.t();
            this.f13061m = 0;
            this.f13062n = s.t();
            this.f13063o = 0;
            this.f13064p = Integer.MAX_VALUE;
            this.f13065q = Integer.MAX_VALUE;
            this.f13066r = s.t();
            this.f13067s = s.t();
            this.f13068t = 0;
            this.f13069u = 0;
            this.f13070v = false;
            this.f13071w = false;
            this.f13072x = false;
            this.f13073y = new HashMap();
            this.f13074z = new HashSet();
        }

        private void B(TrackSelectionParameters trackSelectionParameters) {
            this.f13049a = trackSelectionParameters.f13034d;
            this.f13050b = trackSelectionParameters.f13035e;
            this.f13051c = trackSelectionParameters.f13036i;
            this.f13052d = trackSelectionParameters.f13037o;
            this.f13053e = trackSelectionParameters.f13038p;
            this.f13054f = trackSelectionParameters.f13039q;
            this.f13055g = trackSelectionParameters.f13040r;
            this.f13056h = trackSelectionParameters.f13041s;
            this.f13057i = trackSelectionParameters.f13042t;
            this.f13058j = trackSelectionParameters.f13043u;
            this.f13059k = trackSelectionParameters.f13044v;
            this.f13060l = trackSelectionParameters.f13045w;
            this.f13061m = trackSelectionParameters.f13046x;
            this.f13062n = trackSelectionParameters.f13047y;
            this.f13063o = trackSelectionParameters.f13048z;
            this.f13064p = trackSelectionParameters.A;
            this.f13065q = trackSelectionParameters.B;
            this.f13066r = trackSelectionParameters.C;
            this.f13067s = trackSelectionParameters.D;
            this.f13068t = trackSelectionParameters.E;
            this.f13069u = trackSelectionParameters.F;
            this.f13070v = trackSelectionParameters.G;
            this.f13071w = trackSelectionParameters.H;
            this.f13072x = trackSelectionParameters.I;
            this.f13074z = new HashSet(trackSelectionParameters.K);
            this.f13073y = new HashMap(trackSelectionParameters.J);
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
            if ((w0.f39012a >= 23 || Looper.myLooper() != null) && (captioningManager = (CaptioningManager) context.getSystemService("captioning")) != null && captioningManager.isEnabled()) {
                this.f13068t = 1088;
                Locale locale = captioningManager.getLocale();
                if (locale != null) {
                    this.f13067s = s.u(w0.b0(locale));
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
            this.f13072x = z10;
            return this;
        }

        public a F(int i10) {
            this.f13052d = i10;
            return this;
        }

        public a G(Context context) {
            if (w0.f39012a >= 19) {
                H(context);
            }
            return this;
        }

        public a I(int i10, int i11, boolean z10) {
            this.f13057i = i10;
            this.f13058j = i11;
            this.f13059k = z10;
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
            this.f13049a = bundle.getInt(str, trackSelectionParameters.f13034d);
            this.f13050b = bundle.getInt(TrackSelectionParameters.T, trackSelectionParameters.f13035e);
            this.f13051c = bundle.getInt(TrackSelectionParameters.U, trackSelectionParameters.f13036i);
            this.f13052d = bundle.getInt(TrackSelectionParameters.V, trackSelectionParameters.f13037o);
            this.f13053e = bundle.getInt(TrackSelectionParameters.W, trackSelectionParameters.f13038p);
            this.f13054f = bundle.getInt(TrackSelectionParameters.X, trackSelectionParameters.f13039q);
            this.f13055g = bundle.getInt(TrackSelectionParameters.Y, trackSelectionParameters.f13040r);
            this.f13056h = bundle.getInt(TrackSelectionParameters.Z, trackSelectionParameters.f13041s);
            this.f13057i = bundle.getInt(TrackSelectionParameters.f13020a0, trackSelectionParameters.f13042t);
            this.f13058j = bundle.getInt(TrackSelectionParameters.f13021b0, trackSelectionParameters.f13043u);
            this.f13059k = bundle.getBoolean(TrackSelectionParameters.f13022c0, trackSelectionParameters.f13044v);
            this.f13060l = s.p((String[]) mi.h.a(bundle.getStringArray(TrackSelectionParameters.f13023d0), new String[0]));
            this.f13061m = bundle.getInt(TrackSelectionParameters.f13031l0, trackSelectionParameters.f13046x);
            this.f13062n = C((String[]) mi.h.a(bundle.getStringArray(TrackSelectionParameters.N), new String[0]));
            this.f13063o = bundle.getInt(TrackSelectionParameters.O, trackSelectionParameters.f13048z);
            this.f13064p = bundle.getInt(TrackSelectionParameters.f13024e0, trackSelectionParameters.A);
            this.f13065q = bundle.getInt(TrackSelectionParameters.f13025f0, trackSelectionParameters.B);
            this.f13066r = s.p((String[]) mi.h.a(bundle.getStringArray(TrackSelectionParameters.f13026g0), new String[0]));
            this.f13067s = C((String[]) mi.h.a(bundle.getStringArray(TrackSelectionParameters.P), new String[0]));
            this.f13068t = bundle.getInt(TrackSelectionParameters.Q, trackSelectionParameters.E);
            this.f13069u = bundle.getInt(TrackSelectionParameters.f13032m0, trackSelectionParameters.F);
            this.f13070v = bundle.getBoolean(TrackSelectionParameters.R, trackSelectionParameters.G);
            this.f13071w = bundle.getBoolean(TrackSelectionParameters.f13027h0, trackSelectionParameters.H);
            this.f13072x = bundle.getBoolean(TrackSelectionParameters.f13028i0, trackSelectionParameters.I);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(TrackSelectionParameters.f13029j0);
            if (parcelableArrayList == null) {
                d10 = s.t();
            } else {
                d10 = ne.d.d(o.f29860p, parcelableArrayList);
            }
            this.f13073y = new HashMap();
            for (int i10 = 0; i10 < d10.size(); i10++) {
                o oVar = (o) d10.get(i10);
                this.f13073y.put(oVar.f29861d, oVar);
            }
            int[] iArr = (int[]) mi.h.a(bundle.getIntArray(TrackSelectionParameters.f13030k0), new int[0]);
            this.f13074z = new HashSet();
            for (int i11 : iArr) {
                this.f13074z.add(Integer.valueOf(i11));
            }
        }
    }
}
