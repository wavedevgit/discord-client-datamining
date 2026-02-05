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
    public static final Tracks f12002e = new Tracks(mi.s.s());

    /* renamed from: i  reason: collision with root package name */
    private static final String f12003i = ne.w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    public static final g.a f12004o = new g.a() { // from class: lc.z0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return Tracks.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final mi.s f12005d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: q  reason: collision with root package name */
        private static final String f12006q = ne.w0.B0(0);

        /* renamed from: r  reason: collision with root package name */
        private static final String f12007r = ne.w0.B0(1);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12008s = ne.w0.B0(3);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12009t = ne.w0.B0(4);

        /* renamed from: u  reason: collision with root package name */
        public static final g.a f12010u = new g.a() { // from class: lc.a1
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return Tracks.a.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final int f12011d;

        /* renamed from: e  reason: collision with root package name */
        private final qd.u0 f12012e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f12013i;

        /* renamed from: o  reason: collision with root package name */
        private final int[] f12014o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean[] f12015p;

        public a(qd.u0 u0Var, boolean z10, int[] iArr, boolean[] zArr) {
            boolean z11;
            int i10 = u0Var.f47828d;
            this.f12011d = i10;
            boolean z12 = false;
            if (i10 == iArr.length && i10 == zArr.length) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.a(z11);
            this.f12012e = u0Var;
            if (z10 && i10 > 1) {
                z12 = true;
            }
            this.f12013i = z12;
            this.f12014o = (int[]) iArr.clone();
            this.f12015p = (boolean[]) zArr.clone();
        }

        public static /* synthetic */ a a(Bundle bundle) {
            qd.u0 u0Var = (qd.u0) qd.u0.f47827s.a((Bundle) ne.a.e(bundle.getBundle(f12006q)));
            return new a(u0Var, bundle.getBoolean(f12009t, false), (int[]) li.h.a(bundle.getIntArray(f12007r), new int[u0Var.f47828d]), (boolean[]) li.h.a(bundle.getBooleanArray(f12008s), new boolean[u0Var.f47828d]));
        }

        public qd.u0 b() {
            return this.f12012e;
        }

        public Format c(int i10) {
            return this.f12012e.c(i10);
        }

        public int d() {
            return this.f12012e.f47830i;
        }

        public boolean e() {
            return this.f12013i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f12013i == aVar.f12013i && this.f12012e.equals(aVar.f12012e) && Arrays.equals(this.f12014o, aVar.f12014o) && Arrays.equals(this.f12015p, aVar.f12015p)) {
                    return true;
                }
            }
            return false;
        }

        public boolean f() {
            return oi.a.b(this.f12015p, true);
        }

        public boolean g(int i10) {
            return this.f12015p[i10];
        }

        public boolean h(int i10) {
            return i(i10, false);
        }

        public int hashCode() {
            return (((((this.f12012e.hashCode() * 31) + (this.f12013i ? 1 : 0)) * 31) + Arrays.hashCode(this.f12014o)) * 31) + Arrays.hashCode(this.f12015p);
        }

        public boolean i(int i10, boolean z10) {
            int i11 = this.f12014o[i10];
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
        this.f12005d = mi.s.n(list);
    }

    public static /* synthetic */ Tracks a(Bundle bundle) {
        mi.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12003i);
        if (parcelableArrayList == null) {
            d10 = mi.s.s();
        } else {
            d10 = ne.d.d(a.f12010u, parcelableArrayList);
        }
        return new Tracks(d10);
    }

    public mi.s b() {
        return this.f12005d;
    }

    public boolean c() {
        return this.f12005d.isEmpty();
    }

    public boolean d(int i10) {
        for (int i11 = 0; i11 < this.f12005d.size(); i11++) {
            a aVar = (a) this.f12005d.get(i11);
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
            return this.f12005d.equals(((Tracks) obj).f12005d);
        }
        return false;
    }

    public int hashCode() {
        return this.f12005d.hashCode();
    }
}
