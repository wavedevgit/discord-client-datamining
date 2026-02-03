package tk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f50110a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50111b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50112c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50113d;

    /* renamed from: e  reason: collision with root package name */
    private int f50114e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f50110a = i10;
        this.f50111b = i11;
        this.f50112c = i12;
        this.f50113d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f50112c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f50111b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f50114e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f50110a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f50113d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f50111b - this.f50110a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f50114e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f50112c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f50114e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f50114e = ((this.f50113d / 30) * 3) + (this.f50112c / 3);
    }

    public String toString() {
        return this.f50114e + "|" + this.f50113d;
    }
}
