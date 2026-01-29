package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class m1 extends k1 {
    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: A */
    public l1 g(Object obj) {
        return ((w) obj).unknownFields;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: B */
    public int h(l1 l1Var) {
        return l1Var.f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: C */
    public int i(l1 l1Var) {
        return l1Var.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: D */
    public l1 k(l1 l1Var, l1 l1Var2) {
        if (l1Var2.equals(l1.e())) {
            return l1Var;
        }
        return l1.k(l1Var, l1Var2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: E */
    public l1 n() {
        return l1.l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: F */
    public void o(Object obj, l1 l1Var) {
        p(obj, l1Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: G */
    public void p(Object obj, l1 l1Var) {
        ((w) obj).unknownFields = l1Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: H */
    public l1 r(l1 l1Var) {
        l1Var.j();
        return l1Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: I */
    public void s(l1 l1Var, r1 r1Var) {
        l1Var.o(r1Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: J */
    public void t(l1 l1Var, r1 r1Var) {
        l1Var.q(r1Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    public void j(Object obj) {
        g(obj).j();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    public boolean q(c1 c1Var) {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: u */
    public void a(l1 l1Var, int i10, int i11) {
        l1Var.n(q1.c(i10, 5), Integer.valueOf(i11));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: v */
    public void b(l1 l1Var, int i10, long j10) {
        l1Var.n(q1.c(i10, 1), Long.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: w */
    public void c(l1 l1Var, int i10, l1 l1Var2) {
        l1Var.n(q1.c(i10, 3), l1Var2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: x */
    public void d(l1 l1Var, int i10, g gVar) {
        l1Var.n(q1.c(i10, 2), gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: y */
    public void e(l1 l1Var, int i10, long j10) {
        l1Var.n(q1.c(i10, 0), Long.valueOf(j10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.datastore.preferences.protobuf.k1
    /* renamed from: z */
    public l1 f(Object obj) {
        l1 g10 = g(obj);
        if (g10 == l1.e()) {
            l1 l10 = l1.l();
            p(obj, l10);
            return l10;
        }
        return g10;
    }
}
