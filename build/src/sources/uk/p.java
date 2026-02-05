package uk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends q {

    /* renamed from: b  reason: collision with root package name */
    private final int f51451b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51452c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(int i10, int i11, int i12) {
        super(i10);
        if (i11 >= 0 && i11 <= 10 && i12 >= 0 && i12 <= 10) {
            this.f51451b = i11;
            this.f51452c = i12;
            return;
        }
        throw fk.g.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f51451b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f51452c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f51451b == 10) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f51452c == 10) {
            return true;
        }
        return false;
    }
}
