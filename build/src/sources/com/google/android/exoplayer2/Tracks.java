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
    public static final Tracks f12618e = new Tracks(qi.s.t());

    /* renamed from: i  reason: collision with root package name */
    private static final String f12619i = oe.w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    public static final g.a f12620o = new g.a() { // from class: mc.z0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return Tracks.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final qi.s f12621d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: q  reason: collision with root package name */
        private static final String f12622q = oe.w0.B0(0);

        /* renamed from: r  reason: collision with root package name */
        private static final String f12623r = oe.w0.B0(1);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12624s = oe.w0.B0(3);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12625t = oe.w0.B0(4);

        /* renamed from: u  reason: collision with root package name */
        public static final g.a f12626u = new g.a() { // from class: mc.a1
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return Tracks.a.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final int f12627d;

        /* renamed from: e  reason: collision with root package name */
        private final rd.u0 f12628e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f12629i;

        /* renamed from: o  reason: collision with root package name */
        private final int[] f12630o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean[] f12631p;

        public a(rd.u0 u0Var, boolean z10, int[] iArr, boolean[] zArr) {
            boolean z11;
            int i10 = u0Var.f46496d;
            this.f12627d = i10;
            boolean z12 = false;
            if (i10 == iArr.length && i10 == zArr.length) {
                z11 = true;
            } else {
                z11 = false;
            }
            oe.a.a(z11);
            this.f12628e = u0Var;
            if (z10 && i10 > 1) {
                z12 = true;
            }
            this.f12629i = z12;
            this.f12630o = (int[]) iArr.clone();
            this.f12631p = (boolean[]) zArr.clone();
        }

        public static /* synthetic */ a a(Bundle bundle) {
            rd.u0 u0Var = (rd.u0) rd.u0.f46495s.a((Bundle) oe.a.e(bundle.getBundle(f12622q)));
            return new a(u0Var, bundle.getBoolean(f12625t, false), (int[]) pi.h.a(bundle.getIntArray(f12623r), new int[u0Var.f46496d]), (boolean[]) pi.h.a(bundle.getBooleanArray(f12624s), new boolean[u0Var.f46496d]));
        }

        public rd.u0 b() {
            return this.f12628e;
        }

        public Format c(int i10) {
            return this.f12628e.c(i10);
        }

        public int d() {
            return this.f12628e.f46498i;
        }

        public boolean e() {
            return this.f12629i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f12629i == aVar.f12629i && this.f12628e.equals(aVar.f12628e) && Arrays.equals(this.f12630o, aVar.f12630o) && Arrays.equals(this.f12631p, aVar.f12631p)) {
                    return true;
                }
            }
            return false;
        }

        public boolean f() {
            return si.a.b(this.f12631p, true);
        }

        public boolean g(int i10) {
            return this.f12631p[i10];
        }

        public boolean h(int i10) {
            return i(i10, false);
        }

        public int hashCode() {
            return (((((this.f12628e.hashCode() * 31) + (this.f12629i ? 1 : 0)) * 31) + Arrays.hashCode(this.f12630o)) * 31) + Arrays.hashCode(this.f12631p);
        }

        public boolean i(int i10, boolean z10) {
            int i11 = this.f12630o[i10];
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
        this.f12621d = qi.s.o(list);
    }

    public static /* synthetic */ Tracks a(Bundle bundle) {
        qi.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12619i);
        if (parcelableArrayList == null) {
            d10 = qi.s.t();
        } else {
            d10 = oe.d.d(a.f12626u, parcelableArrayList);
        }
        return new Tracks(d10);
    }

    public qi.s b() {
        return this.f12621d;
    }

    public boolean c() {
        return this.f12621d.isEmpty();
    }

    public boolean d(int i10) {
        for (int i11 = 0; i11 < this.f12621d.size(); i11++) {
            a aVar = (a) this.f12621d.get(i11);
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
            return this.f12621d.equals(((Tracks) obj).f12621d);
        }
        return false;
    }

    public int hashCode() {
        return this.f12621d.hashCode();
    }
}
