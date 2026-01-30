package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Tracks implements g {

    /* renamed from: e  reason: collision with root package name */
    public static final Tracks f13020e = new Tracks(ji.s.r());

    /* renamed from: i  reason: collision with root package name */
    private static final String f13021i = ne.w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    public static final g.a f13022o = new g.a() { // from class: lc.z0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return Tracks.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final ji.s f13023d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: q  reason: collision with root package name */
        private static final String f13024q = ne.w0.B0(0);

        /* renamed from: r  reason: collision with root package name */
        private static final String f13025r = ne.w0.B0(1);

        /* renamed from: s  reason: collision with root package name */
        private static final String f13026s = ne.w0.B0(3);

        /* renamed from: t  reason: collision with root package name */
        private static final String f13027t = ne.w0.B0(4);

        /* renamed from: u  reason: collision with root package name */
        public static final g.a f13028u = new g.a() { // from class: lc.a1
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return Tracks.a.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final int f13029d;

        /* renamed from: e  reason: collision with root package name */
        private final qd.u0 f13030e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f13031i;

        /* renamed from: o  reason: collision with root package name */
        private final int[] f13032o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean[] f13033p;

        public a(qd.u0 u0Var, boolean z10, int[] iArr, boolean[] zArr) {
            boolean z11;
            int i10 = u0Var.f47359d;
            this.f13029d = i10;
            boolean z12 = false;
            if (i10 == iArr.length && i10 == zArr.length) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.a(z11);
            this.f13030e = u0Var;
            if (z10 && i10 > 1) {
                z12 = true;
            }
            this.f13031i = z12;
            this.f13032o = (int[]) iArr.clone();
            this.f13033p = (boolean[]) zArr.clone();
        }

        public static /* synthetic */ a a(Bundle bundle) {
            qd.u0 u0Var = (qd.u0) qd.u0.f47358s.a((Bundle) ne.a.e(bundle.getBundle(f13024q)));
            return new a(u0Var, bundle.getBoolean(f13027t, false), (int[]) ii.h.a(bundle.getIntArray(f13025r), new int[u0Var.f47359d]), (boolean[]) ii.h.a(bundle.getBooleanArray(f13026s), new boolean[u0Var.f47359d]));
        }

        public qd.u0 b() {
            return this.f13030e;
        }

        public Format c(int i10) {
            return this.f13030e.c(i10);
        }

        public int d() {
            return this.f13030e.f47361i;
        }

        public boolean e() {
            return this.f13031i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f13031i == aVar.f13031i && this.f13030e.equals(aVar.f13030e) && Arrays.equals(this.f13032o, aVar.f13032o) && Arrays.equals(this.f13033p, aVar.f13033p)) {
                    return true;
                }
            }
            return false;
        }

        public boolean f() {
            return li.a.b(this.f13033p, true);
        }

        public boolean g(int i10) {
            return this.f13033p[i10];
        }

        public boolean h(int i10) {
            return i(i10, false);
        }

        public int hashCode() {
            return (((((this.f13030e.hashCode() * 31) + (this.f13031i ? 1 : 0)) * 31) + Arrays.hashCode(this.f13032o)) * 31) + Arrays.hashCode(this.f13033p);
        }

        public boolean i(int i10, boolean z10) {
            int i11 = this.f13032o[i10];
            if (i11 != 4) {
                if (!z10 || i11 != 3) {
                    return false;
                }
                return true;
            }
            return true;
        }
    }

    public Tracks(List list) {
        this.f13023d = ji.s.m(list);
    }

    public static /* synthetic */ Tracks a(Bundle bundle) {
        ji.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f13021i);
        if (parcelableArrayList == null) {
            d10 = ji.s.r();
        } else {
            d10 = ne.d.d(a.f13028u, parcelableArrayList);
        }
        return new Tracks(d10);
    }

    public ji.s b() {
        return this.f13023d;
    }

    public boolean c() {
        return this.f13023d.isEmpty();
    }

    public boolean d(int i10) {
        for (int i11 = 0; i11 < this.f13023d.size(); i11++) {
            a aVar = (a) this.f13023d.get(i11);
            if (aVar.f() && aVar.d() == i10) {
                return true;
            }
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && Tracks.class == obj.getClass()) {
            return this.f13023d.equals(((Tracks) obj).f13023d);
        }
        return false;
    }

    public int hashCode() {
        return this.f13023d.hashCode();
    }
}
