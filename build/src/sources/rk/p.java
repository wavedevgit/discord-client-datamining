package rk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends q {

    /* renamed from: b  reason: collision with root package name */
    private final int f48341b;

    /* renamed from: c  reason: collision with root package name */
    private final int f48342c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(int i10, int i11, int i12) {
        super(i10);
        if (i11 >= 0 && i11 <= 10 && i12 >= 0 && i12 <= 10) {
            this.f48341b = i11;
            this.f48342c = i12;
            return;
        }
        throw ck.g.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f48341b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f48342c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f48341b == 10) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f48342c == 10) {
            return true;
        }
        return false;
    }
}
