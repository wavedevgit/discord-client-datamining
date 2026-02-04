package tk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f50107a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50108b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50109c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50110d;

    /* renamed from: e  reason: collision with root package name */
    private int f50111e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f50107a = i10;
        this.f50108b = i11;
        this.f50109c = i12;
        this.f50110d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f50109c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f50108b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f50111e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f50107a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f50110d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f50108b - this.f50107a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f50111e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f50109c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f50111e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f50111e = ((this.f50110d / 30) * 3) + (this.f50109c / 3);
    }

    public String toString() {
        return this.f50111e + "|" + this.f50110d;
    }
}
