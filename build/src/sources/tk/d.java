package tk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f49611a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49612b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49613c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49614d;

    /* renamed from: e  reason: collision with root package name */
    private int f49615e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f49611a = i10;
        this.f49612b = i11;
        this.f49613c = i12;
        this.f49614d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f49613c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f49612b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f49615e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f49611a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f49614d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f49612b - this.f49611a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f49615e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f49613c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f49615e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f49615e = ((this.f49614d / 30) * 3) + (this.f49613c / 3);
    }

    public String toString() {
        return this.f49615e + "|" + this.f49614d;
    }
}
