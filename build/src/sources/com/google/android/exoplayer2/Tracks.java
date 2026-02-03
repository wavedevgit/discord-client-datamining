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
    public static final Tracks f11617e = new Tracks(ji.s.r());

    /* renamed from: i  reason: collision with root package name */
    private static final String f11618i = ne.w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    public static final g.a f11619o = new g.a() { // from class: lc.z0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return Tracks.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final ji.s f11620d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: q  reason: collision with root package name */
        private static final String f11621q = ne.w0.B0(0);

        /* renamed from: r  reason: collision with root package name */
        private static final String f11622r = ne.w0.B0(1);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11623s = ne.w0.B0(3);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11624t = ne.w0.B0(4);

        /* renamed from: u  reason: collision with root package name */
        public static final g.a f11625u = new g.a() { // from class: lc.a1
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return Tracks.a.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final int f11626d;

        /* renamed from: e  reason: collision with root package name */
        private final qd.u0 f11627e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f11628i;

        /* renamed from: o  reason: collision with root package name */
        private final int[] f11629o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean[] f11630p;

        public a(qd.u0 u0Var, boolean z10, int[] iArr, boolean[] zArr) {
            boolean z11;
            int i10 = u0Var.f47764d;
            this.f11626d = i10;
            boolean z12 = false;
            if (i10 == iArr.length && i10 == zArr.length) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.a(z11);
            this.f11627e = u0Var;
            if (z10 && i10 > 1) {
                z12 = true;
            }
            this.f11628i = z12;
            this.f11629o = (int[]) iArr.clone();
            this.f11630p = (boolean[]) zArr.clone();
        }

        public static /* synthetic */ a a(Bundle bundle) {
            qd.u0 u0Var = (qd.u0) qd.u0.f47763s.a((Bundle) ne.a.e(bundle.getBundle(f11621q)));
            return new a(u0Var, bundle.getBoolean(f11624t, false), (int[]) ii.h.a(bundle.getIntArray(f11622r), new int[u0Var.f47764d]), (boolean[]) ii.h.a(bundle.getBooleanArray(f11623s), new boolean[u0Var.f47764d]));
        }

        public qd.u0 b() {
            return this.f11627e;
        }

        public Format c(int i10) {
            return this.f11627e.c(i10);
        }

        public int d() {
            return this.f11627e.f47766i;
        }

        public boolean e() {
            return this.f11628i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f11628i == aVar.f11628i && this.f11627e.equals(aVar.f11627e) && Arrays.equals(this.f11629o, aVar.f11629o) && Arrays.equals(this.f11630p, aVar.f11630p)) {
                    return true;
                }
            }
            return false;
        }

        public boolean f() {
            return li.a.b(this.f11630p, true);
        }

        public boolean g(int i10) {
            return this.f11630p[i10];
        }

        public boolean h(int i10) {
            return i(i10, false);
        }

        public int hashCode() {
            return (((((this.f11627e.hashCode() * 31) + (this.f11628i ? 1 : 0)) * 31) + Arrays.hashCode(this.f11629o)) * 31) + Arrays.hashCode(this.f11630p);
        }

        public boolean i(int i10, boolean z10) {
            int i11 = this.f11629o[i10];
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
        this.f11620d = ji.s.m(list);
    }

    public static /* synthetic */ Tracks a(Bundle bundle) {
        ji.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f11618i);
        if (parcelableArrayList == null) {
            d10 = ji.s.r();
        } else {
            d10 = ne.d.d(a.f11625u, parcelableArrayList);
        }
        return new Tracks(d10);
    }

    public ji.s b() {
        return this.f11620d;
    }

    public boolean c() {
        return this.f11620d.isEmpty();
    }

    public boolean d(int i10) {
        for (int i11 = 0; i11 < this.f11620d.size(); i11++) {
            a aVar = (a) this.f11620d.get(i11);
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
            return this.f11620d.equals(((Tracks) obj).f11620d);
        }
        return false;
    }

    public int hashCode() {
        return this.f11620d.hashCode();
    }
}
