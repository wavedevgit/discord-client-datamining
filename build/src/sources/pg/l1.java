package pg;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l1 extends o0 {

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f45596o;

    private l1(Object obj, Object[] objArr, int i10) {
        this.f45596o = objArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static l1 g(int i10, Object[] objArr, n0 n0Var) {
        Object obj = objArr[0];
        Objects.requireNonNull(obj);
        Object obj2 = objArr[1];
        Objects.requireNonNull(obj2);
        r.b(obj, obj2);
        return new l1(null, objArr, 1);
    }

    @Override // pg.o0
    final h0 a() {
        return new k1(this.f45596o, 1, 1);
    }

    @Override // pg.o0
    final p0 d() {
        return new i1(this, this.f45596o, 0, 1);
    }

    @Override // pg.o0
    final p0 e() {
        return new j1(this, new k1(this.f45596o, 0, 1));
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x001c A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:9:0x001b A[RETURN] */
    @Override // pg.o0, java.util.Map
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
            java.lang.Object[] r1 = r3.f45596o
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
        throw new UnsupportedOperationException("Method not decompiled: pg.l1.get(java.lang.Object):java.lang.Object");
    }

    @Override // java.util.Map
    public final int size() {
        return 1;
    }
}
