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
import mi.s;
import mi.t;
import mi.u;
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
    private static final String f13059a0;

    /* renamed from: b0  reason: collision with root package name */
    private static final String f13060b0;

    /* renamed from: c0  reason: collision with root package name */
    private static final String f13061c0;

    /* renamed from: d0  reason: collision with root package name */
    private static final String f13062d0;

    /* renamed from: e0  reason: collision with root package name */
    private static final String f13063e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final String f13064f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final String f13065g0;

    /* renamed from: h0  reason: collision with root package name */
    private static final String f13066h0;

    /* renamed from: i0  reason: collision with root package name */
    private static final String f13067i0;

    /* renamed from: j0  reason: collision with root package name */
    private static final String f13068j0;

    /* renamed from: k0  reason: collision with root package name */
    private static final String f13069k0;

    /* renamed from: l0  reason: collision with root package name */
    private static final String f13070l0;

    /* renamed from: m0  reason: collision with root package name */
    private static final String f13071m0;

    /* renamed from: n0  reason: collision with root package name */
    public static final g.a f13072n0;
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
    public final int f13073d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13074e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13075i;

    /* renamed from: o  reason: collision with root package name */
    public final int f13076o;

    /* renamed from: p  reason: collision with root package name */
    public final int f13077p;

    /* renamed from: q  reason: collision with root package name */
    public final int f13078q;

    /* renamed from: r  reason: collision with root package name */
    public final int f13079r;

    /* renamed from: s  reason: collision with root package name */
    public final int f13080s;

    /* renamed from: t  reason: collision with root package name */
    public final int f13081t;

    /* renamed from: u  reason: collision with root package name */
    public final int f13082u;

    /* renamed from: v  reason: collision with root package name */
    public final boolean f13083v;

    /* renamed from: w  reason: collision with root package name */
    public final s f13084w;

    /* renamed from: x  reason: collision with root package name */
    public final int f13085x;

    /* renamed from: y  reason: collision with root package name */
    public final s f13086y;

    /* renamed from: z  reason: collision with root package name */
    public final int f13087z;

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
        f13059a0 = w0.B0(14);
        f13060b0 = w0.B0(15);
        f13061c0 = w0.B0(16);
        f13062d0 = w0.B0(17);
        f13063e0 = w0.B0(18);
        f13064f0 = w0.B0(19);
        f13065g0 = w0.B0(20);
        f13066h0 = w0.B0(21);
        f13067i0 = w0.B0(22);
        f13068j0 = w0.B0(23);
        f13069k0 = w0.B0(24);
        f13070l0 = w0.B0(25);
        f13071m0 = w0.B0(26);
        f13072n0 = new g.a() { // from class: je.p
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return TrackSelectionParameters.A(bundle);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public TrackSelectionParameters(a aVar) {
        this.f13073d = aVar.f13088a;
        this.f13074e = aVar.f13089b;
        this.f13075i = aVar.f13090c;
        this.f13076o = aVar.f13091d;
        this.f13077p = aVar.f13092e;
        this.f13078q = aVar.f13093f;
        this.f13079r = aVar.f13094g;
        this.f13080s = aVar.f13095h;
        this.f13081t = aVar.f13096i;
        this.f13082u = aVar.f13097j;
        this.f13083v = aVar.f13098k;
        this.f13084w = aVar.f13099l;
        this.f13085x = aVar.f13100m;
        this.f13086y = aVar.f13101n;
        this.f13087z = aVar.f13102o;
        this.A = aVar.f13103p;
        this.B = aVar.f13104q;
        this.C = aVar.f13105r;
        this.D = aVar.f13106s;
        this.E = aVar.f13107t;
        this.F = aVar.f13108u;
        this.G = aVar.f13109v;
        this.H = aVar.f13110w;
        this.I = aVar.f13111x;
        this.J = t.c(aVar.f13112y);
        this.K = u.n(aVar.f13113z);
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
            if (this.f13073d == trackSelectionParameters.f13073d && this.f13074e == trackSelectionParameters.f13074e && this.f13075i == trackSelectionParameters.f13075i && this.f13076o == trackSelectionParameters.f13076o && this.f13077p == trackSelectionParameters.f13077p && this.f13078q == trackSelectionParameters.f13078q && this.f13079r == trackSelectionParameters.f13079r && this.f13080s == trackSelectionParameters.f13080s && this.f13083v == trackSelectionParameters.f13083v && this.f13081t == trackSelectionParameters.f13081t && this.f13082u == trackSelectionParameters.f13082u && this.f13084w.equals(trackSelectionParameters.f13084w) && this.f13085x == trackSelectionParameters.f13085x && this.f13086y.equals(trackSelectionParameters.f13086y) && this.f13087z == trackSelectionParameters.f13087z && this.A == trackSelectionParameters.A && this.B == trackSelectionParameters.B && this.C.equals(trackSelectionParameters.C) && this.D.equals(trackSelectionParameters.D) && this.E == trackSelectionParameters.E && this.F == trackSelectionParameters.F && this.G == trackSelectionParameters.G && this.H == trackSelectionParameters.H && this.I == trackSelectionParameters.I && this.J.equals(trackSelectionParameters.J) && this.K.equals(trackSelectionParameters.K)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((((((((((((((((((((((((((((((((((((this.f13073d + 31) * 31) + this.f13074e) * 31) + this.f13075i) * 31) + this.f13076o) * 31) + this.f13077p) * 31) + this.f13078q) * 31) + this.f13079r) * 31) + this.f13080s) * 31) + (this.f13083v ? 1 : 0)) * 31) + this.f13081t) * 31) + this.f13082u) * 31) + this.f13084w.hashCode()) * 31) + this.f13085x) * 31) + this.f13086y.hashCode()) * 31) + this.f13087z) * 31) + this.A) * 31) + this.B) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31) + this.E) * 31) + this.F) * 31) + (this.G ? 1 : 0)) * 31) + (this.H ? 1 : 0)) * 31) + (this.I ? 1 : 0)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f13088a;

        /* renamed from: b  reason: collision with root package name */
        private int f13089b;

        /* renamed from: c  reason: collision with root package name */
        private int f13090c;

        /* renamed from: d  reason: collision with root package name */
        private int f13091d;

        /* renamed from: e  reason: collision with root package name */
        private int f13092e;

        /* renamed from: f  reason: collision with root package name */
        private int f13093f;

        /* renamed from: g  reason: collision with root package name */
        private int f13094g;

        /* renamed from: h  reason: collision with root package name */
        private int f13095h;

        /* renamed from: i  reason: collision with root package name */
        private int f13096i;

        /* renamed from: j  reason: collision with root package name */
        private int f13097j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f13098k;

        /* renamed from: l  reason: collision with root package name */
        private s f13099l;

        /* renamed from: m  reason: collision with root package name */
        private int f13100m;

        /* renamed from: n  reason: collision with root package name */
        private s f13101n;

        /* renamed from: o  reason: collision with root package name */
        private int f13102o;

        /* renamed from: p  reason: collision with root package name */
        private int f13103p;

        /* renamed from: q  reason: collision with root package name */
        private int f13104q;

        /* renamed from: r  reason: collision with root package name */
        private s f13105r;

        /* renamed from: s  reason: collision with root package name */
        private s f13106s;

        /* renamed from: t  reason: collision with root package name */
        private int f13107t;

        /* renamed from: u  reason: collision with root package name */
        private int f13108u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f13109v;

        /* renamed from: w  reason: collision with root package name */
        private boolean f13110w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f13111x;

        /* renamed from: y  reason: collision with root package name */
        private HashMap f13112y;

        /* renamed from: z  reason: collision with root package name */
        private HashSet f13113z;

        public a() {
            this.f13088a = Integer.MAX_VALUE;
            this.f13089b = Integer.MAX_VALUE;
            this.f13090c = Integer.MAX_VALUE;
            this.f13091d = Integer.MAX_VALUE;
            this.f13096i = Integer.MAX_VALUE;
            this.f13097j = Integer.MAX_VALUE;
            this.f13098k = true;
            this.f13099l = s.s();
            this.f13100m = 0;
            this.f13101n = s.s();
            this.f13102o = 0;
            this.f13103p = Integer.MAX_VALUE;
            this.f13104q = Integer.MAX_VALUE;
            this.f13105r = s.s();
            this.f13106s = s.s();
            this.f13107t = 0;
            this.f13108u = 0;
            this.f13109v = false;
            this.f13110w = false;
            this.f13111x = false;
            this.f13112y = new HashMap();
            this.f13113z = new HashSet();
        }

        private void B(TrackSelectionParameters trackSelectionParameters) {
            this.f13088a = trackSelectionParameters.f13073d;
            this.f13089b = trackSelectionParameters.f13074e;
            this.f13090c = trackSelectionParameters.f13075i;
            this.f13091d = trackSelectionParameters.f13076o;
            this.f13092e = trackSelectionParameters.f13077p;
            this.f13093f = trackSelectionParameters.f13078q;
            this.f13094g = trackSelectionParameters.f13079r;
            this.f13095h = trackSelectionParameters.f13080s;
            this.f13096i = trackSelectionParameters.f13081t;
            this.f13097j = trackSelectionParameters.f13082u;
            this.f13098k = trackSelectionParameters.f13083v;
            this.f13099l = trackSelectionParameters.f13084w;
            this.f13100m = trackSelectionParameters.f13085x;
            this.f13101n = trackSelectionParameters.f13086y;
            this.f13102o = trackSelectionParameters.f13087z;
            this.f13103p = trackSelectionParameters.A;
            this.f13104q = trackSelectionParameters.B;
            this.f13105r = trackSelectionParameters.C;
            this.f13106s = trackSelectionParameters.D;
            this.f13107t = trackSelectionParameters.E;
            this.f13108u = trackSelectionParameters.F;
            this.f13109v = trackSelectionParameters.G;
            this.f13110w = trackSelectionParameters.H;
            this.f13111x = trackSelectionParameters.I;
            this.f13113z = new HashSet(trackSelectionParameters.K);
            this.f13112y = new HashMap(trackSelectionParameters.J);
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
            if ((w0.f39657a >= 23 || Looper.myLooper() != null) && (captioningManager = (CaptioningManager) context.getSystemService("captioning")) != null && captioningManager.isEnabled()) {
                this.f13107t = 1088;
                Locale locale = captioningManager.getLocale();
                if (locale != null) {
                    this.f13106s = s.t(w0.b0(locale));
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
            this.f13111x = z10;
            return this;
        }

        public a F(int i10) {
            this.f13091d = i10;
            return this;
        }

        public a G(Context context) {
            if (w0.f39657a >= 19) {
                H(context);
            }
            return this;
        }

        public a I(int i10, int i11, boolean z10) {
            this.f13096i = i10;
            this.f13097j = i11;
            this.f13098k = z10;
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
            this.f13088a = bundle.getInt(str, trackSelectionParameters.f13073d);
            this.f13089b = bundle.getInt(TrackSelectionParameters.T, trackSelectionParameters.f13074e);
            this.f13090c = bundle.getInt(TrackSelectionParameters.U, trackSelectionParameters.f13075i);
            this.f13091d = bundle.getInt(TrackSelectionParameters.V, trackSelectionParameters.f13076o);
            this.f13092e = bundle.getInt(TrackSelectionParameters.W, trackSelectionParameters.f13077p);
            this.f13093f = bundle.getInt(TrackSelectionParameters.X, trackSelectionParameters.f13078q);
            this.f13094g = bundle.getInt(TrackSelectionParameters.Y, trackSelectionParameters.f13079r);
            this.f13095h = bundle.getInt(TrackSelectionParameters.Z, trackSelectionParameters.f13080s);
            this.f13096i = bundle.getInt(TrackSelectionParameters.f13059a0, trackSelectionParameters.f13081t);
            this.f13097j = bundle.getInt(TrackSelectionParameters.f13060b0, trackSelectionParameters.f13082u);
            this.f13098k = bundle.getBoolean(TrackSelectionParameters.f13061c0, trackSelectionParameters.f13083v);
            this.f13099l = s.o((String[]) li.h.a(bundle.getStringArray(TrackSelectionParameters.f13062d0), new String[0]));
            this.f13100m = bundle.getInt(TrackSelectionParameters.f13070l0, trackSelectionParameters.f13085x);
            this.f13101n = C((String[]) li.h.a(bundle.getStringArray(TrackSelectionParameters.N), new String[0]));
            this.f13102o = bundle.getInt(TrackSelectionParameters.O, trackSelectionParameters.f13087z);
            this.f13103p = bundle.getInt(TrackSelectionParameters.f13063e0, trackSelectionParameters.A);
            this.f13104q = bundle.getInt(TrackSelectionParameters.f13064f0, trackSelectionParameters.B);
            this.f13105r = s.o((String[]) li.h.a(bundle.getStringArray(TrackSelectionParameters.f13065g0), new String[0]));
            this.f13106s = C((String[]) li.h.a(bundle.getStringArray(TrackSelectionParameters.P), new String[0]));
            this.f13107t = bundle.getInt(TrackSelectionParameters.Q, trackSelectionParameters.E);
            this.f13108u = bundle.getInt(TrackSelectionParameters.f13071m0, trackSelectionParameters.F);
            this.f13109v = bundle.getBoolean(TrackSelectionParameters.R, trackSelectionParameters.G);
            this.f13110w = bundle.getBoolean(TrackSelectionParameters.f13066h0, trackSelectionParameters.H);
            this.f13111x = bundle.getBoolean(TrackSelectionParameters.f13067i0, trackSelectionParameters.I);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(TrackSelectionParameters.f13068j0);
            if (parcelableArrayList == null) {
                d10 = s.s();
            } else {
                d10 = ne.d.d(o.f30887p, parcelableArrayList);
            }
            this.f13112y = new HashMap();
            for (int i10 = 0; i10 < d10.size(); i10++) {
                o oVar = (o) d10.get(i10);
                this.f13112y.put(oVar.f30888d, oVar);
            }
            int[] iArr = (int[]) li.h.a(bundle.getIntArray(TrackSelectionParameters.f13069k0), new int[0]);
            this.f13113z = new HashSet();
            for (int i11 : iArr) {
                this.f13113z.add(Integer.valueOf(i11));
            }
        }
    }
}
