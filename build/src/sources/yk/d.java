package yk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f55491a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55492b;

    /* renamed from: c  reason: collision with root package name */
    private final int f55493c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55494d;

    /* renamed from: e  reason: collision with root package name */
    private int f55495e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f55491a = i10;
        this.f55492b = i11;
        this.f55493c = i12;
        this.f55494d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f55493c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f55492b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f55495e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f55491a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f55494d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f55492b - this.f55491a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f55495e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f55493c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f55495e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f55495e = ((this.f55494d / 30) * 3) + (this.f55493c / 3);
    }

    public String toString() {
        return this.f55495e + "|" + this.f55494d;
    }
}
