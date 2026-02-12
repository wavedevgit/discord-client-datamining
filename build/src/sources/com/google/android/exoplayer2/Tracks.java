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
    public static final Tracks f12619e = new Tracks(qi.s.t());

    /* renamed from: i  reason: collision with root package name */
    private static final String f12620i = oe.w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    public static final g.a f12621o = new g.a() { // from class: mc.z0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return Tracks.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final qi.s f12622d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements g {

        /* renamed from: q  reason: collision with root package name */
        private static final String f12623q = oe.w0.B0(0);

        /* renamed from: r  reason: collision with root package name */
        private static final String f12624r = oe.w0.B0(1);

        /* renamed from: s  reason: collision with root package name */
        private static final String f12625s = oe.w0.B0(3);

        /* renamed from: t  reason: collision with root package name */
        private static final String f12626t = oe.w0.B0(4);

        /* renamed from: u  reason: collision with root package name */
        public static final g.a f12627u = new g.a() { // from class: mc.a1
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                return Tracks.a.a(bundle);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public final int f12628d;

        /* renamed from: e  reason: collision with root package name */
        private final rd.u0 f12629e;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f12630i;

        /* renamed from: o  reason: collision with root package name */
        private final int[] f12631o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean[] f12632p;

        public a(rd.u0 u0Var, boolean z10, int[] iArr, boolean[] zArr) {
            boolean z11;
            int i10 = u0Var.f46497d;
            this.f12628d = i10;
            boolean z12 = false;
            if (i10 == iArr.length && i10 == zArr.length) {
                z11 = true;
            } else {
                z11 = false;
            }
            oe.a.a(z11);
            this.f12629e = u0Var;
            if (z10 && i10 > 1) {
                z12 = true;
            }
            this.f12630i = z12;
            this.f12631o = (int[]) iArr.clone();
            this.f12632p = (boolean[]) zArr.clone();
        }

        public static /* synthetic */ a a(Bundle bundle) {
            rd.u0 u0Var = (rd.u0) rd.u0.f46496s.a((Bundle) oe.a.e(bundle.getBundle(f12623q)));
            return new a(u0Var, bundle.getBoolean(f12626t, false), (int[]) pi.h.a(bundle.getIntArray(f12624r), new int[u0Var.f46497d]), (boolean[]) pi.h.a(bundle.getBooleanArray(f12625s), new boolean[u0Var.f46497d]));
        }

        public rd.u0 b() {
            return this.f12629e;
        }

        public Format c(int i10) {
            return this.f12629e.c(i10);
        }

        public int d() {
            return this.f12629e.f46499i;
        }

        public boolean e() {
            return this.f12630i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f12630i == aVar.f12630i && this.f12629e.equals(aVar.f12629e) && Arrays.equals(this.f12631o, aVar.f12631o) && Arrays.equals(this.f12632p, aVar.f12632p)) {
                    return true;
                }
            }
            return false;
        }

        public boolean f() {
            return si.a.b(this.f12632p, true);
        }

        public boolean g(int i10) {
            return this.f12632p[i10];
        }

        public boolean h(int i10) {
            return i(i10, false);
        }

        public int hashCode() {
            return (((((this.f12629e.hashCode() * 31) + (this.f12630i ? 1 : 0)) * 31) + Arrays.hashCode(this.f12631o)) * 31) + Arrays.hashCode(this.f12632p);
        }

        public boolean i(int i10, boolean z10) {
            int i11 = this.f12631o[i10];
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
        this.f12622d = qi.s.o(list);
    }

    public static /* synthetic */ Tracks a(Bundle bundle) {
        qi.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12620i);
        if (parcelableArrayList == null) {
            d10 = qi.s.t();
        } else {
            d10 = oe.d.d(a.f12627u, parcelableArrayList);
        }
        return new Tracks(d10);
    }

    public qi.s b() {
        return this.f12622d;
    }

    public boolean c() {
        return this.f12622d.isEmpty();
    }

    public boolean d(int i10) {
        for (int i11 = 0; i11 < this.f12622d.size(); i11++) {
            a aVar = (a) this.f12622d.get(i11);
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
            return this.f12622d.equals(((Tracks) obj).f12622d);
        }
        return false;
    }

    public int hashCode() {
        return this.f12622d.hashCode();
    }
}
