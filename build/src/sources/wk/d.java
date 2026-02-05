package wk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f53128a;

    /* renamed from: b  reason: collision with root package name */
    private final int f53129b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53130c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53131d;

    /* renamed from: e  reason: collision with root package name */
    private int f53132e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(int i10, int i11, int i12, int i13) {
        this.f53128a = i10;
        this.f53129b = i11;
        this.f53130c = i12;
        this.f53131d = i13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f53130c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int b() {
        return this.f53129b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return this.f53132e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f53128a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f53131d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f53129b - this.f53128a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g() {
        return h(this.f53132e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(int i10) {
        if (i10 != -1 && this.f53130c == (i10 % 3) * 3) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(int i10) {
        this.f53132e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f53132e = ((this.f53131d / 30) * 3) + (this.f53130c / 3);
    }

    public String toString() {
        return this.f53132e + "|" + this.f53131d;
    }
}
