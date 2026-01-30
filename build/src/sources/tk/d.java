package tk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f49627a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49628b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49629c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49630d;

    /* renamed from: e  reason: collision with root package name */
    private int f49631e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f49627a = i10;
        this.f49628b = i11;
        this.f49629c = i12;
        this.f49630d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f49629c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f49628b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f49631e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f49627a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f49630d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f49628b - this.f49627a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f49631e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f49629c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f49631e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f49631e = ((this.f49630d / 30) * 3) + (this.f49629c / 3);
    }

    public String toString() {
        return this.f49631e + "|" + this.f49630d;
    }
}
