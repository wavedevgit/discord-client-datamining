package yk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f55443a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55444b;

    /* renamed from: c  reason: collision with root package name */
    private final int f55445c;

    /* renamed from: d  reason: collision with root package name */
    private final int f55446d;

    /* renamed from: e  reason: collision with root package name */
    private int f55447e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f55443a = i10;
        this.f55444b = i11;
        this.f55445c = i12;
        this.f55446d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f55445c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f55444b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f55447e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f55443a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f55446d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f55444b - this.f55443a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f55447e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f55445c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f55447e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f55447e = ((this.f55446d / 30) * 3) + (this.f55445c / 3);
    }

    public String toString() {
        return this.f55447e + "|" + this.f55446d;
    }
}
