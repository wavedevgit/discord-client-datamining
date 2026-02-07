package wk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends q {

    /* renamed from: b  reason: collision with root package name */
    private final int f53899b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53900c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(int i10, int i11, int i12) {
        super(i10);
        if (i11 >= 0 && i11 <= 10 && i12 >= 0 && i12 <= 10) {
            this.f53899b = i11;
            this.f53900c = i12;
            return;
        }
        throw hk.g.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f53899b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f53900c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f53899b == 10) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f53900c == 10) {
            return true;
        }
        return false;
    }
}
