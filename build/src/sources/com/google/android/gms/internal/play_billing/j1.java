package com.google.android.gms.internal.play_billing;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j1 {

    /* renamed from: d  reason: collision with root package name */
    private static final j1 f14219d = new j1(true);

    /* renamed from: a  reason: collision with root package name */
    final t3 f14220a = new j3(16);

    /* renamed from: b  reason: collision with root package name */
    private boolean f14221b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f14222c;

    private j1() {
    }

    static int a(m4 m4Var, int i10, Object obj) {
        z0.w(i10 << 3);
        if (m4.f14280v == null) {
            v2 v2Var = (v2) obj;
            byte[] bArr = y1.f14367d;
        }
        n4 n4Var = n4.INT;
        throw null;
    }

    public static int b(i1 i1Var, Object obj) {
        m4 b10 = i1Var.b();
        int zza = i1Var.zza();
        if (i1Var.p()) {
            List<Object> list = (List) obj;
            int i10 = 0;
            if (i1Var.c()) {
                if (list.isEmpty()) {
                    return 0;
                }
                Iterator it = list.iterator();
                if (!it.hasNext()) {
                    return z0.w(zza << 3) + z0.w(0);
                }
                it.next();
                m4 m4Var = m4.f14271e;
                n4 n4Var = n4.INT;
                throw null;
            }
            for (Object obj2 : list) {
                i10 += a(b10, zza, obj2);
            }
            return i10;
        }
        return a(b10, zza, obj);
    }

    private final void i(Map.Entry entry) {
        android.support.v4.media.session.b.a(entry.getKey());
        entry.getValue();
        throw null;
    }

    private static boolean j(Map.Entry entry) {
        android.support.v4.media.session.b.a(entry.getKey());
        throw null;
    }

    private static final int k(Map.Entry entry) {
        android.support.v4.media.session.b.a(entry.getKey());
        entry.getValue();
        throw null;
    }

    /* JADX WARN: Removed duplicated region for block: B:25:0x0043 A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static final void l(com.google.android.gms.internal.play_billing.i1 r2, java.lang.Object r3) {
        /*
            com.google.android.gms.internal.play_billing.m4 r0 = r2.b()
            byte[] r1 = com.google.android.gms.internal.play_billing.y1.f14367d
            r3.getClass()
            com.google.android.gms.internal.play_billing.m4 r1 = com.google.android.gms.internal.play_billing.m4.f14271e
            com.google.android.gms.internal.play_billing.n4 r1 = com.google.android.gms.internal.play_billing.n4.INT
            com.google.android.gms.internal.play_billing.n4 r0 = r0.a()
            int r0 = r0.ordinal()
            switch(r0) {
                case 0: goto L3f;
                case 1: goto L3c;
                case 2: goto L39;
                case 3: goto L36;
                case 4: goto L33;
                case 5: goto L30;
                case 6: goto L27;
                case 7: goto L1e;
                case 8: goto L19;
                default: goto L18;
            }
        L18:
            goto L44
        L19:
            boolean r0 = r3 instanceof com.google.android.gms.internal.play_billing.v2
            if (r0 == 0) goto L44
            return
        L1e:
            boolean r0 = r3 instanceof java.lang.Integer
            if (r0 != 0) goto L26
            boolean r0 = r3 instanceof com.google.android.gms.internal.play_billing.s1
            if (r0 == 0) goto L44
        L26:
            return
        L27:
            boolean r0 = r3 instanceof com.google.android.gms.internal.play_billing.r0
            if (r0 != 0) goto L2f
            boolean r0 = r3 instanceof byte[]
            if (r0 == 0) goto L44
        L2f:
            return
        L30:
            boolean r0 = r3 instanceof java.lang.String
            goto L41
        L33:
            boolean r0 = r3 instanceof java.lang.Boolean
            goto L41
        L36:
            boolean r0 = r3 instanceof java.lang.Double
            goto L41
        L39:
            boolean r0 = r3 instanceof java.lang.Float
            goto L41
        L3c:
            boolean r0 = r3 instanceof java.lang.Long
            goto L41
        L3f:
            boolean r0 = r3 instanceof java.lang.Integer
        L41:
            if (r0 == 0) goto L44
            return
        L44:
            java.lang.IllegalArgumentException r0 = new java.lang.IllegalArgumentException
            int r1 = r2.zza()
            java.lang.Integer r1 = java.lang.Integer.valueOf(r1)
            com.google.android.gms.internal.play_billing.m4 r2 = r2.b()
            com.google.android.gms.internal.play_billing.n4 r2 = r2.a()
            java.lang.Class r3 = r3.getClass()
            java.lang.String r3 = r3.getName()
            java.lang.Object[] r2 = new java.lang.Object[]{r1, r2, r3}
            java.lang.String r3 = "Wrong object type used with protocol message reflection.\nField number: %d, field java type: %s, value type: %s\n"
            java.lang.String r2 = java.lang.String.format(r3, r2)
            r0.<init>(r2)
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.play_billing.j1.l(com.google.android.gms.internal.play_billing.i1, java.lang.Object):void");
    }

    public final int c() {
        int i10 = 0;
        for (int i11 = 0; i11 < this.f14220a.b(); i11++) {
            i10 += k(this.f14220a.g(i11));
        }
        for (Map.Entry entry : this.f14220a.c()) {
            i10 += k(entry);
        }
        return i10;
    }

    public final /* bridge */ /* synthetic */ Object clone() {
        j1 j1Var = new j1();
        for (int i10 = 0; i10 < this.f14220a.b(); i10++) {
            Map.Entry g10 = this.f14220a.g(i10);
            android.support.v4.media.session.b.a(g10.getKey());
            j1Var.g(null, g10.getValue());
        }
        for (Map.Entry entry : this.f14220a.c()) {
            android.support.v4.media.session.b.a(entry.getKey());
            j1Var.g(null, entry.getValue());
        }
        j1Var.f14222c = this.f14222c;
        return j1Var;
    }

    public final Iterator d() {
        if (this.f14222c) {
            return new c2(this.f14220a.entrySet().iterator());
        }
        return this.f14220a.entrySet().iterator();
    }

    public final void e() {
        if (!this.f14221b) {
            for (int i10 = 0; i10 < this.f14220a.b(); i10++) {
                Map.Entry g10 = this.f14220a.g(i10);
                if (g10.getValue() instanceof q1) {
                    ((q1) g10.getValue()).s();
                }
            }
            this.f14220a.a();
            this.f14221b = true;
        }
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof j1)) {
            return false;
        }
        return this.f14220a.equals(((j1) obj).f14220a);
    }

    public final void f(j1 j1Var) {
        for (int i10 = 0; i10 < j1Var.f14220a.b(); i10++) {
            i(j1Var.f14220a.g(i10));
        }
        for (Map.Entry entry : j1Var.f14220a.c()) {
            i(entry);
        }
    }

    public final void g(i1 i1Var, Object obj) {
        if (i1Var.p()) {
            if (obj instanceof List) {
                ArrayList arrayList = new ArrayList();
                arrayList.addAll((List) obj);
                int size = arrayList.size();
                for (int i10 = 0; i10 < size; i10++) {
                    l(i1Var, arrayList.get(i10));
                }
                obj = arrayList;
            } else {
                throw new IllegalArgumentException("Wrong object type used with protocol message reflection.");
            }
        } else {
            l(i1Var, obj);
        }
        this.f14220a.put(i1Var, obj);
    }

    public final boolean h() {
        for (int i10 = 0; i10 < this.f14220a.b(); i10++) {
            if (!j(this.f14220a.g(i10))) {
                return false;
            }
        }
        for (Map.Entry entry : this.f14220a.c()) {
            if (!j(entry)) {
                return false;
            }
        }
        return true;
    }

    public final int hashCode() {
        return this.f14220a.hashCode();
    }

    private j1(boolean z10) {
        e();
        e();
    }
}
