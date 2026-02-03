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
    public static final Tracks f12649e = new Tracks(ji.s.r());

    /* renamed from: i  reason: collision with root package name */
    private static final String f12650i = ne.w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    public static final g.a f12651o = new g.a() { // from class: lc.z0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return Tracks.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final ji.s f12652d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: q  reason: collision with root package name */
        private static final String f12653q = ne.w0.B0(0);

        /* renamed from: r  reason: collision with root package name */
        private static final String f12654r = ne.w0.B0(1);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12655s = ne.w0.B0(3);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12656t = ne.w0.B0(4);

        /* renamed from: u  reason: collision with root package name */
        public static final g.a f12657u = new g.a() { // from class: lc.a1
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return Tracks.a.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final int f12658d;

        /* renamed from: e  reason: collision with root package name */
        private final qd.u0 f12659e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f12660i;

        /* renamed from: o  reason: collision with root package name */
        private final int[] f12661o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean[] f12662p;

        public a(qd.u0 u0Var, boolean z10, int[] iArr, boolean[] zArr) {
            boolean z11;
            int i10 = u0Var.f47614d;
            this.f12658d = i10;
            boolean z12 = false;
            if (i10 == iArr.length && i10 == zArr.length) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.a(z11);
            this.f12659e = u0Var;
            if (z10 && i10 > 1) {
                z12 = true;
            }
            this.f12660i = z12;
            this.f12661o = (int[]) iArr.clone();
            this.f12662p = (boolean[]) zArr.clone();
        }

        public static /* synthetic */ a a(Bundle bundle) {
            qd.u0 u0Var = (qd.u0) qd.u0.f47613s.a((Bundle) ne.a.e(bundle.getBundle(f12653q)));
            return new a(u0Var, bundle.getBoolean(f12656t, false), (int[]) ii.h.a(bundle.getIntArray(f12654r), new int[u0Var.f47614d]), (boolean[]) ii.h.a(bundle.getBooleanArray(f12655s), new boolean[u0Var.f47614d]));
        }

        public qd.u0 b() {
            return this.f12659e;
        }

        public Format c(int i10) {
            return this.f12659e.c(i10);
        }

        public int d() {
            return this.f12659e.f47616i;
        }

        public boolean e() {
            return this.f12660i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f12660i == aVar.f12660i && this.f12659e.equals(aVar.f12659e) && Arrays.equals(this.f12661o, aVar.f12661o) && Arrays.equals(this.f12662p, aVar.f12662p)) {
                    return true;
                }
            }
            return false;
        }

        public boolean f() {
            return li.a.b(this.f12662p, true);
        }

        public boolean g(int i10) {
            return this.f12662p[i10];
        }

        public boolean h(int i10) {
            return i(i10, false);
        }

        public int hashCode() {
            return (((((this.f12659e.hashCode() * 31) + (this.f12660i ? 1 : 0)) * 31) + Arrays.hashCode(this.f12661o)) * 31) + Arrays.hashCode(this.f12662p);
        }

        public boolean i(int i10, boolean z10) {
            int i11 = this.f12661o[i10];
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
        this.f12652d = ji.s.m(list);
    }

    public static /* synthetic */ Tracks a(Bundle bundle) {
        ji.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12650i);
        if (parcelableArrayList == null) {
            d10 = ji.s.r();
        } else {
            d10 = ne.d.d(a.f12657u, parcelableArrayList);
        }
        return new Tracks(d10);
    }

    public ji.s b() {
        return this.f12652d;
    }

    public boolean c() {
        return this.f12652d.isEmpty();
    }

    public boolean d(int i10) {
        for (int i11 = 0; i11 < this.f12652d.size(); i11++) {
            a aVar = (a) this.f12652d.get(i11);
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
            return this.f12652d.equals(((Tracks) obj).f12652d);
        }
        return false;
    }

    public int hashCode() {
        return this.f12652d.hashCode();
    }
}
