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
    public static final Tracks f12041e = new Tracks(oi.s.t());

    /* renamed from: i  reason: collision with root package name */
    private static final String f12042i = oe.w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    public static final g.a f12043o = new g.a() { // from class: mc.z0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return Tracks.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final oi.s f12044d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: q  reason: collision with root package name */
        private static final String f12045q = oe.w0.B0(0);

        /* renamed from: r  reason: collision with root package name */
        private static final String f12046r = oe.w0.B0(1);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12047s = oe.w0.B0(3);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12048t = oe.w0.B0(4);

        /* renamed from: u  reason: collision with root package name */
        public static final g.a f12049u = new g.a() { // from class: mc.a1
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return Tracks.a.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final int f12050d;

        /* renamed from: e  reason: collision with root package name */
        private final rd.u0 f12051e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f12052i;

        /* renamed from: o  reason: collision with root package name */
        private final int[] f12053o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean[] f12054p;

        public a(rd.u0 u0Var, boolean z10, int[] iArr, boolean[] zArr) {
            boolean z11;
            int i10 = u0Var.f48042d;
            this.f12050d = i10;
            boolean z12 = false;
            if (i10 == iArr.length && i10 == zArr.length) {
                z11 = true;
            } else {
                z11 = false;
            }
            oe.a.a(z11);
            this.f12051e = u0Var;
            if (z10 && i10 > 1) {
                z12 = true;
            }
            this.f12052i = z12;
            this.f12053o = (int[]) iArr.clone();
            this.f12054p = (boolean[]) zArr.clone();
        }

        public static /* synthetic */ a a(Bundle bundle) {
            rd.u0 u0Var = (rd.u0) rd.u0.f48041s.a((Bundle) oe.a.e(bundle.getBundle(f12045q)));
            return new a(u0Var, bundle.getBoolean(f12048t, false), (int[]) ni.h.a(bundle.getIntArray(f12046r), new int[u0Var.f48042d]), (boolean[]) ni.h.a(bundle.getBooleanArray(f12047s), new boolean[u0Var.f48042d]));
        }

        public rd.u0 b() {
            return this.f12051e;
        }

        public Format c(int i10) {
            return this.f12051e.c(i10);
        }

        public int d() {
            return this.f12051e.f48044i;
        }

        public boolean e() {
            return this.f12052i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f12052i == aVar.f12052i && this.f12051e.equals(aVar.f12051e) && Arrays.equals(this.f12053o, aVar.f12053o) && Arrays.equals(this.f12054p, aVar.f12054p)) {
                    return true;
                }
            }
            return false;
        }

        public boolean f() {
            return qi.a.b(this.f12054p, true);
        }

        public boolean g(int i10) {
            return this.f12054p[i10];
        }

        public boolean h(int i10) {
            return i(i10, false);
        }

        public int hashCode() {
            return (((((this.f12051e.hashCode() * 31) + (this.f12052i ? 1 : 0)) * 31) + Arrays.hashCode(this.f12053o)) * 31) + Arrays.hashCode(this.f12054p);
        }

        public boolean i(int i10, boolean z10) {
            int i11 = this.f12053o[i10];
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
        this.f12044d = oi.s.o(list);
    }

    public static /* synthetic */ Tracks a(Bundle bundle) {
        oi.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12042i);
        if (parcelableArrayList == null) {
            d10 = oi.s.t();
        } else {
            d10 = oe.d.d(a.f12049u, parcelableArrayList);
        }
        return new Tracks(d10);
    }

    public oi.s b() {
        return this.f12044d;
    }

    public boolean c() {
        return this.f12044d.isEmpty();
    }

    public boolean d(int i10) {
        for (int i11 = 0; i11 < this.f12044d.size(); i11++) {
            a aVar = (a) this.f12044d.get(i11);
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
            return this.f12044d.equals(((Tracks) obj).f12044d);
        }
        return false;
    }

    public int hashCode() {
        return this.f12044d.hashCode();
    }
}
