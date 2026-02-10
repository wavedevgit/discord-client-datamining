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
import oi.s;
import oi.t;
import oi.u;
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
    private static final String f13160a0;

    /* renamed from: b0  reason: collision with root package name */
    private static final String f13161b0;

    /* renamed from: c0  reason: collision with root package name */
    private static final String f13162c0;

    /* renamed from: d0  reason: collision with root package name */
    private static final String f13163d0;

    /* renamed from: e0  reason: collision with root package name */
    private static final String f13164e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final String f13165f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final String f13166g0;

    /* renamed from: h0  reason: collision with root package name */
    private static final String f13167h0;

    /* renamed from: i0  reason: collision with root package name */
    private static final String f13168i0;

    /* renamed from: j0  reason: collision with root package name */
    private static final String f13169j0;

    /* renamed from: k0  reason: collision with root package name */
    private static final String f13170k0;

    /* renamed from: l0  reason: collision with root package name */
    private static final String f13171l0;

    /* renamed from: m0  reason: collision with root package name */
    private static final String f13172m0;

    /* renamed from: n0  reason: collision with root package name */
    public static final g.a f13173n0;
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
    public final int f13174d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13175e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13176i;

    /* renamed from: o  reason: collision with root package name */
    public final int f13177o;

    /* renamed from: p  reason: collision with root package name */
    public final int f13178p;

    /* renamed from: q  reason: collision with root package name */
    public final int f13179q;

    /* renamed from: r  reason: collision with root package name */
    public final int f13180r;

    /* renamed from: s  reason: collision with root package name */
    public final int f13181s;

    /* renamed from: t  reason: collision with root package name */
    public final int f13182t;

    /* renamed from: u  reason: collision with root package name */
    public final int f13183u;

    /* renamed from: v  reason: collision with root package name */
    public final boolean f13184v;

    /* renamed from: w  reason: collision with root package name */
    public final s f13185w;

    /* renamed from: x  reason: collision with root package name */
    public final int f13186x;

    /* renamed from: y  reason: collision with root package name */
    public final s f13187y;

    /* renamed from: z  reason: collision with root package name */
    public final int f13188z;

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
        f13160a0 = w0.B0(14);
        f13161b0 = w0.B0(15);
        f13162c0 = w0.B0(16);
        f13163d0 = w0.B0(17);
        f13164e0 = w0.B0(18);
        f13165f0 = w0.B0(19);
        f13166g0 = w0.B0(20);
        f13167h0 = w0.B0(21);
        f13168i0 = w0.B0(22);
        f13169j0 = w0.B0(23);
        f13170k0 = w0.B0(24);
        f13171l0 = w0.B0(25);
        f13172m0 = w0.B0(26);
        f13173n0 = new g.a() { // from class: ke.p
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return TrackSelectionParameters.A(bundle);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public TrackSelectionParameters(a aVar) {
        this.f13174d = aVar.f13189a;
        this.f13175e = aVar.f13190b;
        this.f13176i = aVar.f13191c;
        this.f13177o = aVar.f13192d;
        this.f13178p = aVar.f13193e;
        this.f13179q = aVar.f13194f;
        this.f13180r = aVar.f13195g;
        this.f13181s = aVar.f13196h;
        this.f13182t = aVar.f13197i;
        this.f13183u = aVar.f13198j;
        this.f13184v = aVar.f13199k;
        this.f13185w = aVar.f13200l;
        this.f13186x = aVar.f13201m;
        this.f13187y = aVar.f13202n;
        this.f13188z = aVar.f13203o;
        this.A = aVar.f13204p;
        this.B = aVar.f13205q;
        this.C = aVar.f13206r;
        this.D = aVar.f13207s;
        this.E = aVar.f13208t;
        this.F = aVar.f13209u;
        this.G = aVar.f13210v;
        this.H = aVar.f13211w;
        this.I = aVar.f13212x;
        this.J = t.c(aVar.f13213y);
        this.K = u.o(aVar.f13214z);
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
            if (this.f13174d == trackSelectionParameters.f13174d && this.f13175e == trackSelectionParameters.f13175e && this.f13176i == trackSelectionParameters.f13176i && this.f13177o == trackSelectionParameters.f13177o && this.f13178p == trackSelectionParameters.f13178p && this.f13179q == trackSelectionParameters.f13179q && this.f13180r == trackSelectionParameters.f13180r && this.f13181s == trackSelectionParameters.f13181s && this.f13184v == trackSelectionParameters.f13184v && this.f13182t == trackSelectionParameters.f13182t && this.f13183u == trackSelectionParameters.f13183u && this.f13185w.equals(trackSelectionParameters.f13185w) && this.f13186x == trackSelectionParameters.f13186x && this.f13187y.equals(trackSelectionParameters.f13187y) && this.f13188z == trackSelectionParameters.f13188z && this.A == trackSelectionParameters.A && this.B == trackSelectionParameters.B && this.C.equals(trackSelectionParameters.C) && this.D.equals(trackSelectionParameters.D) && this.E == trackSelectionParameters.E && this.F == trackSelectionParameters.F && this.G == trackSelectionParameters.G && this.H == trackSelectionParameters.H && this.I == trackSelectionParameters.I && this.J.equals(trackSelectionParameters.J) && this.K.equals(trackSelectionParameters.K)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((((((((((((((((((((((((((((((((((((((((((((((this.f13174d + 31) * 31) + this.f13175e) * 31) + this.f13176i) * 31) + this.f13177o) * 31) + this.f13178p) * 31) + this.f13179q) * 31) + this.f13180r) * 31) + this.f13181s) * 31) + (this.f13184v ? 1 : 0)) * 31) + this.f13182t) * 31) + this.f13183u) * 31) + this.f13185w.hashCode()) * 31) + this.f13186x) * 31) + this.f13187y.hashCode()) * 31) + this.f13188z) * 31) + this.A) * 31) + this.B) * 31) + this.C.hashCode()) * 31) + this.D.hashCode()) * 31) + this.E) * 31) + this.F) * 31) + (this.G ? 1 : 0)) * 31) + (this.H ? 1 : 0)) * 31) + (this.I ? 1 : 0)) * 31) + this.J.hashCode()) * 31) + this.K.hashCode();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f13189a;

        /* renamed from: b  reason: collision with root package name */
        private int f13190b;

        /* renamed from: c  reason: collision with root package name */
        private int f13191c;

        /* renamed from: d  reason: collision with root package name */
        private int f13192d;

        /* renamed from: e  reason: collision with root package name */
        private int f13193e;

        /* renamed from: f  reason: collision with root package name */
        private int f13194f;

        /* renamed from: g  reason: collision with root package name */
        private int f13195g;

        /* renamed from: h  reason: collision with root package name */
        private int f13196h;

        /* renamed from: i  reason: collision with root package name */
        private int f13197i;

        /* renamed from: j  reason: collision with root package name */
        private int f13198j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f13199k;

        /* renamed from: l  reason: collision with root package name */
        private s f13200l;

        /* renamed from: m  reason: collision with root package name */
        private int f13201m;

        /* renamed from: n  reason: collision with root package name */
        private s f13202n;

        /* renamed from: o  reason: collision with root package name */
        private int f13203o;

        /* renamed from: p  reason: collision with root package name */
        private int f13204p;

        /* renamed from: q  reason: collision with root package name */
        private int f13205q;

        /* renamed from: r  reason: collision with root package name */
        private s f13206r;

        /* renamed from: s  reason: collision with root package name */
        private s f13207s;

        /* renamed from: t  reason: collision with root package name */
        private int f13208t;

        /* renamed from: u  reason: collision with root package name */
        private int f13209u;

        /* renamed from: v  reason: collision with root package name */
        private boolean f13210v;

        /* renamed from: w  reason: collision with root package name */
        private boolean f13211w;

        /* renamed from: x  reason: collision with root package name */
        private boolean f13212x;

        /* renamed from: y  reason: collision with root package name */
        private HashMap f13213y;

        /* renamed from: z  reason: collision with root package name */
        private HashSet f13214z;

        public a() {
            this.f13189a = Integer.MAX_VALUE;
            this.f13190b = Integer.MAX_VALUE;
            this.f13191c = Integer.MAX_VALUE;
            this.f13192d = Integer.MAX_VALUE;
            this.f13197i = Integer.MAX_VALUE;
            this.f13198j = Integer.MAX_VALUE;
            this.f13199k = true;
            this.f13200l = s.t();
            this.f13201m = 0;
            this.f13202n = s.t();
            this.f13203o = 0;
            this.f13204p = Integer.MAX_VALUE;
            this.f13205q = Integer.MAX_VALUE;
            this.f13206r = s.t();
            this.f13207s = s.t();
            this.f13208t = 0;
            this.f13209u = 0;
            this.f13210v = false;
            this.f13211w = false;
            this.f13212x = false;
            this.f13213y = new HashMap();
            this.f13214z = new HashSet();
        }

        private void B(TrackSelectionParameters trackSelectionParameters) {
            this.f13189a = trackSelectionParameters.f13174d;
            this.f13190b = trackSelectionParameters.f13175e;
            this.f13191c = trackSelectionParameters.f13176i;
            this.f13192d = trackSelectionParameters.f13177o;
            this.f13193e = trackSelectionParameters.f13178p;
            this.f13194f = trackSelectionParameters.f13179q;
            this.f13195g = trackSelectionParameters.f13180r;
            this.f13196h = trackSelectionParameters.f13181s;
            this.f13197i = trackSelectionParameters.f13182t;
            this.f13198j = trackSelectionParameters.f13183u;
            this.f13199k = trackSelectionParameters.f13184v;
            this.f13200l = trackSelectionParameters.f13185w;
            this.f13201m = trackSelectionParameters.f13186x;
            this.f13202n = trackSelectionParameters.f13187y;
            this.f13203o = trackSelectionParameters.f13188z;
            this.f13204p = trackSelectionParameters.A;
            this.f13205q = trackSelectionParameters.B;
            this.f13206r = trackSelectionParameters.C;
            this.f13207s = trackSelectionParameters.D;
            this.f13208t = trackSelectionParameters.E;
            this.f13209u = trackSelectionParameters.F;
            this.f13210v = trackSelectionParameters.G;
            this.f13211w = trackSelectionParameters.H;
            this.f13212x = trackSelectionParameters.I;
            this.f13214z = new HashSet(trackSelectionParameters.K);
            this.f13213y = new HashMap(trackSelectionParameters.J);
        }

        private static s C(String[] strArr) {
            s.a j10 = s.j();
            for (String str : (String[]) oe.a.e(strArr)) {
                j10.a(w0.M0((String) oe.a.e(str)));
            }
            return j10.k();
        }

        private void H(Context context) {
            CaptioningManager captioningManager;
            if ((w0.f40711a >= 23 || Looper.myLooper() != null) && (captioningManager = (CaptioningManager) context.getSystemService("captioning")) != null && captioningManager.isEnabled()) {
                this.f13208t = 1088;
                Locale locale = captioningManager.getLocale();
                if (locale != null) {
                    this.f13207s = s.u(w0.b0(locale));
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
            this.f13212x = z10;
            return this;
        }

        public a F(int i10) {
            this.f13192d = i10;
            return this;
        }

        public a G(Context context) {
            if (w0.f40711a >= 19) {
                H(context);
            }
            return this;
        }

        public a I(int i10, int i11, boolean z10) {
            this.f13197i = i10;
            this.f13198j = i11;
            this.f13199k = z10;
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
            this.f13189a = bundle.getInt(str, trackSelectionParameters.f13174d);
            this.f13190b = bundle.getInt(TrackSelectionParameters.T, trackSelectionParameters.f13175e);
            this.f13191c = bundle.getInt(TrackSelectionParameters.U, trackSelectionParameters.f13176i);
            this.f13192d = bundle.getInt(TrackSelectionParameters.V, trackSelectionParameters.f13177o);
            this.f13193e = bundle.getInt(TrackSelectionParameters.W, trackSelectionParameters.f13178p);
            this.f13194f = bundle.getInt(TrackSelectionParameters.X, trackSelectionParameters.f13179q);
            this.f13195g = bundle.getInt(TrackSelectionParameters.Y, trackSelectionParameters.f13180r);
            this.f13196h = bundle.getInt(TrackSelectionParameters.Z, trackSelectionParameters.f13181s);
            this.f13197i = bundle.getInt(TrackSelectionParameters.f13160a0, trackSelectionParameters.f13182t);
            this.f13198j = bundle.getInt(TrackSelectionParameters.f13161b0, trackSelectionParameters.f13183u);
            this.f13199k = bundle.getBoolean(TrackSelectionParameters.f13162c0, trackSelectionParameters.f13184v);
            this.f13200l = s.p((String[]) ni.h.a(bundle.getStringArray(TrackSelectionParameters.f13163d0), new String[0]));
            this.f13201m = bundle.getInt(TrackSelectionParameters.f13171l0, trackSelectionParameters.f13186x);
            this.f13202n = C((String[]) ni.h.a(bundle.getStringArray(TrackSelectionParameters.N), new String[0]));
            this.f13203o = bundle.getInt(TrackSelectionParameters.O, trackSelectionParameters.f13188z);
            this.f13204p = bundle.getInt(TrackSelectionParameters.f13164e0, trackSelectionParameters.A);
            this.f13205q = bundle.getInt(TrackSelectionParameters.f13165f0, trackSelectionParameters.B);
            this.f13206r = s.p((String[]) ni.h.a(bundle.getStringArray(TrackSelectionParameters.f13166g0), new String[0]));
            this.f13207s = C((String[]) ni.h.a(bundle.getStringArray(TrackSelectionParameters.P), new String[0]));
            this.f13208t = bundle.getInt(TrackSelectionParameters.Q, trackSelectionParameters.E);
            this.f13209u = bundle.getInt(TrackSelectionParameters.f13172m0, trackSelectionParameters.F);
            this.f13210v = bundle.getBoolean(TrackSelectionParameters.R, trackSelectionParameters.G);
            this.f13211w = bundle.getBoolean(TrackSelectionParameters.f13167h0, trackSelectionParameters.H);
            this.f13212x = bundle.getBoolean(TrackSelectionParameters.f13168i0, trackSelectionParameters.I);
            ArrayList parcelableArrayList = bundle.getParcelableArrayList(TrackSelectionParameters.f13169j0);
            if (parcelableArrayList == null) {
                d10 = s.t();
            } else {
                d10 = oe.d.d(o.f30859p, parcelableArrayList);
            }
            this.f13213y = new HashMap();
            for (int i10 = 0; i10 < d10.size(); i10++) {
                o oVar = (o) d10.get(i10);
                this.f13213y.put(oVar.f30860d, oVar);
            }
            int[] iArr = (int[]) ni.h.a(bundle.getIntArray(TrackSelectionParameters.f13170k0), new int[0]);
            this.f13214z = new HashSet();
            for (int i11 : iArr) {
                this.f13214z.add(Integer.valueOf(i11));
            }
        }
    }
}
