package zk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f56516a;

    /* renamed from: b  reason: collision with root package name */
    private final int f56517b;

    /* renamed from: c  reason: collision with root package name */
    private final int f56518c;

    /* renamed from: d  reason: collision with root package name */
    private final int f56519d;

    /* renamed from: e  reason: collision with root package name */
    private int f56520e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f56516a = i10;
        this.f56517b = i11;
        this.f56518c = i12;
        this.f56519d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f56518c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f56517b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f56520e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f56516a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f56519d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f56517b - this.f56516a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f56520e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f56518c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f56520e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f56520e = ((this.f56519d / 30) * 3) + (this.f56518c / 3);
    }

    public String toString() {
        return this.f56520e + "|" + this.f56519d;
    }
}
