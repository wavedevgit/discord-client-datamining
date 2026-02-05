package mg;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c2 extends k1 {

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f37574o;

    private c2(Object obj, Object[] objArr, int i10) {
        this.f37574o = objArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c2 g(int i10, Object[] objArr, j1 j1Var) {
        Object obj = objArr[0];
        Objects.requireNonNull(obj);
        Object obj2 = objArr[1];
        Objects.requireNonNull(obj2);
        n0.b(obj, obj2);
        return new c2(null, objArr, 1);
    }

    @Override // mg.k1
    final d1 a() {
        return new b2(this.f37574o, 1, 1);
    }

    @Override // mg.k1
    final l1 d() {
        return new z1(this, this.f37574o, 0, 1);
    }

    @Override // mg.k1
    final l1 e() {
        return new a2(this, new b2(this.f37574o, 0, 1));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x001c A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:9:0x001b A[RETURN] */
    @Override // mg.k1, java.util.Map
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object get(java.lang.Object r4) {
        /*
            r3 = this;
            r0 = 0
            if (r4 != 0) goto L5
        L3:
            r4 = r0
            goto L19
        L5:
            java.lang.Object[] r1 = r3.f37574o
            r2 = 0
            r2 = r1[r2]
            java.util.Objects.requireNonNull(r2)
            boolean r4 = r2.equals(r4)
            if (r4 == 0) goto L3
            r4 = 1
            r4 = r1[r4]
            java.util.Objects.requireNonNull(r4)
        L19:
            if (r4 != 0) goto L1c
            return r0
        L1c:
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: mg.c2.get(java.lang.Object):java.lang.Object");
    }

    @Override // java.util.Map
    public final int size() {
        return 1;
    }
}
