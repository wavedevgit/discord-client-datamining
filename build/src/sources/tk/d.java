package tk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f49899a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49900b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49901c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49902d;

    /* renamed from: e  reason: collision with root package name */
    private int f49903e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f49899a = i10;
        this.f49900b = i11;
        this.f49901c = i12;
        this.f49902d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f49901c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f49900b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f49903e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f49899a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f49902d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f49900b - this.f49899a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f49903e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f49901c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f49903e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f49903e = ((this.f49902d / 30) * 3) + (this.f49901c / 3);
    }

    public String toString() {
        return this.f49903e + "|" + this.f49902d;
    }
}
