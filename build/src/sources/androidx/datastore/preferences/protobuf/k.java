package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.h0;
import androidx.datastore.preferences.protobuf.q1;
import androidx.datastore.preferences.protobuf.r1;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k implements r1 {

    /* renamed from: a  reason: collision with root package name */
    private final j f3685a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f3686a;

        static {
            int[] iArr = new int[q1.b.values().length];
            f3686a = iArr;
            try {
                iArr[q1.b.f3746u.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f3686a[q1.b.f3745t.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f3686a[q1.b.f3743r.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f3686a[q1.b.B.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f3686a[q1.b.D.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f3686a[q1.b.f3751z.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f3686a[q1.b.f3744s.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f3686a[q1.b.f3741p.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f3686a[q1.b.C.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f3686a[q1.b.E.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f3686a[q1.b.f3742q.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f3686a[q1.b.f3747v.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
        }
    }

    private k(j jVar) {
        j jVar2 = (j) y.b(jVar, "output");
        this.f3685a = jVar2;
        jVar2.f3677a = this;
    }

    public static k P(j jVar) {
        k kVar = jVar.f3677a;
        if (kVar != null) {
            return kVar;
        }
        return new k(jVar);
    }

    private void Q(int i10, boolean z10, Object obj, h0.a aVar) {
        this.f3685a.N0(i10, 2);
        this.f3685a.P0(h0.b(aVar, Boolean.valueOf(z10), obj));
        h0.e(this.f3685a, aVar, Boolean.valueOf(z10), obj);
    }

    private void R(int i10, h0.a aVar, Map map) {
        int size = map.size();
        int[] iArr = new int[size];
        int i11 = 0;
        for (Integer num : map.keySet()) {
            iArr[i11] = num.intValue();
            i11++;
        }
        Arrays.sort(iArr);
        for (int i12 = 0; i12 < size; i12++) {
            int i13 = iArr[i12];
            Object obj = map.get(Integer.valueOf(i13));
            this.f3685a.N0(i10, 2);
            this.f3685a.P0(h0.b(aVar, Integer.valueOf(i13), obj));
            h0.e(this.f3685a, aVar, Integer.valueOf(i13), obj);
        }
    }

    private void S(int i10, h0.a aVar, Map map) {
        int size = map.size();
        long[] jArr = new long[size];
        int i11 = 0;
        for (Long l10 : map.keySet()) {
            jArr[i11] = l10.longValue();
            i11++;
        }
        Arrays.sort(jArr);
        for (int i12 = 0; i12 < size; i12++) {
            long j10 = jArr[i12];
            Object obj = map.get(Long.valueOf(j10));
            this.f3685a.N0(i10, 2);
            this.f3685a.P0(h0.b(aVar, Long.valueOf(j10), obj));
            h0.e(this.f3685a, aVar, Long.valueOf(j10), obj);
        }
    }

    private void T(int i10, h0.a aVar, Map map) {
        switch (a.f3686a[aVar.f3663a.ordinal()]) {
            case 1:
                Object obj = map.get(Boolean.FALSE);
                if (obj != null) {
                    Q(i10, false, obj, aVar);
                }
                Object obj2 = map.get(Boolean.TRUE);
                if (obj2 != null) {
                    Q(i10, true, obj2, aVar);
                    return;
                }
                return;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                R(i10, aVar, map);
                return;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                S(i10, aVar, map);
                return;
            case 12:
                U(i10, aVar, map);
                return;
            default:
                throw new IllegalArgumentException("does not support key type: " + aVar.f3663a);
        }
    }

    private void U(int i10, h0.a aVar, Map map) {
        int size = map.size();
        String[] strArr = new String[size];
        int i11 = 0;
        for (String str : map.keySet()) {
            strArr[i11] = str;
            i11++;
        }
        Arrays.sort(strArr);
        for (int i12 = 0; i12 < size; i12++) {
            String str2 = strArr[i12];
            Object obj = map.get(str2);
            this.f3685a.N0(i10, 2);
            this.f3685a.P0(h0.b(aVar, str2, obj));
            h0.e(this.f3685a, aVar, str2, obj);
        }
    }

    private void V(int i10, Object obj) {
        if (obj instanceof String) {
            this.f3685a.L0(i10, (String) obj);
        } else {
            this.f3685a.f0(i10, (g) obj);
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void A(int i10, long j10) {
        this.f3685a.x0(i10, j10);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void B(int i10, boolean z10) {
        this.f3685a.b0(i10, z10);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void C(int i10, int i11) {
        this.f3685a.D0(i10, i11);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void D(int i10) {
        this.f3685a.N0(i10, 3);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void E(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.o(((Long) list.get(i13)).longValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.o0(((Long) list.get(i11)).longValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.n0(i10, ((Long) list.get(i11)).longValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void F(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.G(((Integer) list.get(i13)).intValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.E0(((Integer) list.get(i11)).intValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.D0(i10, ((Integer) list.get(i11)).intValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void G(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.d(((Boolean) list.get(i13)).booleanValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.c0(((Boolean) list.get(i11)).booleanValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.b0(i10, ((Boolean) list.get(i11)).booleanValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void H(int i10, float f10) {
        this.f3685a.p0(i10, f10);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void I(int i10) {
        this.f3685a.N0(i10, 4);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void J(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.K(((Integer) list.get(i13)).intValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.I0(((Integer) list.get(i11)).intValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.H0(i10, ((Integer) list.get(i11)).intValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void K(int i10, int i11) {
        this.f3685a.j0(i10, i11);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void L(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.x(((Long) list.get(i13)).longValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.y0(((Long) list.get(i11)).longValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.x0(i10, ((Long) list.get(i11)).longValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void M(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.i(((Double) list.get(i13)).doubleValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.i0(((Double) list.get(i11)).doubleValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.h0(i10, ((Double) list.get(i11)).doubleValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void N(int i10, int i11) {
        this.f3685a.H0(i10, i11);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void O(int i10, List list) {
        for (int i11 = 0; i11 < list.size(); i11++) {
            this.f3685a.f0(i10, (g) list.get(i11));
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void a(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.q(((Float) list.get(i13)).floatValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.q0(((Float) list.get(i11)).floatValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.p0(i10, ((Float) list.get(i11)).floatValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public final void b(int i10, Object obj) {
        if (obj instanceof g) {
            this.f3685a.C0(i10, (g) obj);
        } else {
            this.f3685a.B0(i10, (o0) obj);
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void c(int i10, int i11) {
        this.f3685a.l0(i10, i11);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void d(int i10, List list) {
        int i11 = 0;
        if (list instanceof d0) {
            d0 d0Var = (d0) list;
            while (i11 < list.size()) {
                V(i10, d0Var.R0(i11));
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.L0(i10, (String) list.get(i11));
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void e(int i10, List list, d1 d1Var) {
        for (int i11 = 0; i11 < list.size(); i11++) {
            s(i10, list.get(i11), d1Var);
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void f(int i10, String str) {
        this.f3685a.L0(i10, str);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void g(int i10, long j10) {
        this.f3685a.Q0(i10, j10);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void h(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.v(((Integer) list.get(i13)).intValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.w0(((Integer) list.get(i11)).intValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.v0(i10, ((Integer) list.get(i11)).intValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void i(int i10, int i11) {
        this.f3685a.v0(i10, i11);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void j(int i10, g gVar) {
        this.f3685a.f0(i10, gVar);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void k(int i10, long j10) {
        this.f3685a.F0(i10, j10);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void l(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.m(((Integer) list.get(i13)).intValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.m0(((Integer) list.get(i11)).intValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.l0(i10, ((Integer) list.get(i11)).intValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void m(int i10, Object obj, d1 d1Var) {
        this.f3685a.z0(i10, (o0) obj, d1Var);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void n(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.R(((Integer) list.get(i13)).intValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.P0(((Integer) list.get(i11)).intValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.O0(i10, ((Integer) list.get(i11)).intValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void o(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.M(((Long) list.get(i13)).longValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.K0(((Long) list.get(i11)).longValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.J0(i10, ((Long) list.get(i11)).longValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void p(int i10, long j10) {
        this.f3685a.J0(i10, j10);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void q(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.k(((Integer) list.get(i13)).intValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.k0(((Integer) list.get(i11)).intValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.j0(i10, ((Integer) list.get(i11)).intValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void r(int i10, h0.a aVar, Map map) {
        if (this.f3685a.Y()) {
            T(i10, aVar, map);
            return;
        }
        for (Map.Entry entry : map.entrySet()) {
            this.f3685a.N0(i10, 2);
            this.f3685a.P0(h0.b(aVar, entry.getKey(), entry.getValue()));
            h0.e(this.f3685a, aVar, entry.getKey(), entry.getValue());
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void s(int i10, Object obj, d1 d1Var) {
        this.f3685a.s0(i10, (o0) obj, d1Var);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void t(int i10, int i11) {
        this.f3685a.O0(i10, i11);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void u(int i10, double d10) {
        this.f3685a.h0(i10, d10);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void v(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.I(((Long) list.get(i13)).longValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.G0(((Long) list.get(i11)).longValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.F0(i10, ((Long) list.get(i11)).longValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void w(int i10, List list, boolean z10) {
        int i11 = 0;
        if (z10) {
            this.f3685a.N0(i10, 2);
            int i12 = 0;
            for (int i13 = 0; i13 < list.size(); i13++) {
                i12 += j.T(((Long) list.get(i13)).longValue());
            }
            this.f3685a.P0(i12);
            while (i11 < list.size()) {
                this.f3685a.R0(((Long) list.get(i11)).longValue());
                i11++;
            }
            return;
        }
        while (i11 < list.size()) {
            this.f3685a.Q0(i10, ((Long) list.get(i11)).longValue());
            i11++;
        }
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void x(int i10, long j10) {
        this.f3685a.n0(i10, j10);
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public r1.a y() {
        return r1.a.ASCENDING;
    }

    @Override // androidx.datastore.preferences.protobuf.r1
    public void z(int i10, List list, d1 d1Var) {
        for (int i11 = 0; i11 < list.size(); i11++) {
            m(i10, list.get(i11), d1Var);
        }
    }
}
