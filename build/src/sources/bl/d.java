package bl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f7270a;

    /* renamed from: b  reason: collision with root package name */
    private final int f7271b;

    /* renamed from: c  reason: collision with root package name */
    private final int f7272c;

    /* renamed from: d  reason: collision with root package name */
    private final int f7273d;

    /* renamed from: e  reason: collision with root package name */
    private int f7274e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f7270a = i10;
        this.f7271b = i11;
        this.f7272c = i12;
        this.f7273d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f7272c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f7271b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f7274e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f7270a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f7273d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f7271b - this.f7270a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f7274e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f7272c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f7274e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f7274e = ((this.f7273d / 30) * 3) + (this.f7272c / 3);
    }

    public String toString() {
        return this.f7274e + "|" + this.f7273d;
    }
}
