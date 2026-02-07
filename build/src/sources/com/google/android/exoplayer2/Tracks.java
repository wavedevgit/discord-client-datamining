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
    public static final Tracks f11901e = new Tracks(ni.s.t());

    /* renamed from: i  reason: collision with root package name */
    private static final String f11902i = ne.w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    public static final g.a f11903o = new g.a() { // from class: lc.z0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return Tracks.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final ni.s f11904d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: q  reason: collision with root package name */
        private static final String f11905q = ne.w0.B0(0);

        /* renamed from: r  reason: collision with root package name */
        private static final String f11906r = ne.w0.B0(1);

        /* renamed from: s  reason: collision with root package name */
        private static final String f11907s = ne.w0.B0(3);

        /* renamed from: t  reason: collision with root package name */
        private static final String f11908t = ne.w0.B0(4);

        /* renamed from: u  reason: collision with root package name */
        public static final g.a f11909u = new g.a() { // from class: lc.a1
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return Tracks.a.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final int f11910d;

        /* renamed from: e  reason: collision with root package name */
        private final qd.u0 f11911e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f11912i;

        /* renamed from: o  reason: collision with root package name */
        private final int[] f11913o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean[] f11914p;

        public a(qd.u0 u0Var, boolean z10, int[] iArr, boolean[] zArr) {
            boolean z11;
            int i10 = u0Var.f46924d;
            this.f11910d = i10;
            boolean z12 = false;
            if (i10 == iArr.length && i10 == zArr.length) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.a(z11);
            this.f11911e = u0Var;
            if (z10 && i10 > 1) {
                z12 = true;
            }
            this.f11912i = z12;
            this.f11913o = (int[]) iArr.clone();
            this.f11914p = (boolean[]) zArr.clone();
        }

        public static /* synthetic */ a a(Bundle bundle) {
            qd.u0 u0Var = (qd.u0) qd.u0.f46923s.a((Bundle) ne.a.e(bundle.getBundle(f11905q)));
            return new a(u0Var, bundle.getBoolean(f11908t, false), (int[]) mi.h.a(bundle.getIntArray(f11906r), new int[u0Var.f46924d]), (boolean[]) mi.h.a(bundle.getBooleanArray(f11907s), new boolean[u0Var.f46924d]));
        }

        public qd.u0 b() {
            return this.f11911e;
        }

        public Format c(int i10) {
            return this.f11911e.c(i10);
        }

        public int d() {
            return this.f11911e.f46926i;
        }

        public boolean e() {
            return this.f11912i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f11912i == aVar.f11912i && this.f11911e.equals(aVar.f11911e) && Arrays.equals(this.f11913o, aVar.f11913o) && Arrays.equals(this.f11914p, aVar.f11914p)) {
                    return true;
                }
            }
            return false;
        }

        public boolean f() {
            return pi.a.b(this.f11914p, true);
        }

        public boolean g(int i10) {
            return this.f11914p[i10];
        }

        public boolean h(int i10) {
            return i(i10, false);
        }

        public int hashCode() {
            return (((((this.f11911e.hashCode() * 31) + (this.f11912i ? 1 : 0)) * 31) + Arrays.hashCode(this.f11913o)) * 31) + Arrays.hashCode(this.f11914p);
        }

        public boolean i(int i10, boolean z10) {
            int i11 = this.f11913o[i10];
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
        this.f11904d = ni.s.o(list);
    }

    public static /* synthetic */ Tracks a(Bundle bundle) {
        ni.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f11902i);
        if (parcelableArrayList == null) {
            d10 = ni.s.t();
        } else {
            d10 = ne.d.d(a.f11909u, parcelableArrayList);
        }
        return new Tracks(d10);
    }

    public ni.s b() {
        return this.f11904d;
    }

    public boolean c() {
        return this.f11904d.isEmpty();
    }

    public boolean d(int i10) {
        for (int i11 = 0; i11 < this.f11904d.size(); i11++) {
            a aVar = (a) this.f11904d.get(i11);
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
            return this.f11904d.equals(((Tracks) obj).f11904d);
        }
        return false;
    }

    public int hashCode() {
        return this.f11904d.hashCode();
    }
}
