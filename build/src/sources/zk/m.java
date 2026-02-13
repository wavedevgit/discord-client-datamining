package zk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m {

    /* renamed from: a  reason: collision with root package name */
    private int f57067a = 0;

    /* renamed from: b  reason: collision with root package name */
    private a f57068b = a.NUMERIC;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private enum a {
        NUMERIC,
        ALPHA,
        ISO_IEC_646
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int a() {
        return this.f57067a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(int i10) {
        this.f57067a += i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        if (this.f57068b == a.ALPHA) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        if (this.f57068b == a.ISO_IEC_646) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e() {
        this.f57068b = a.ALPHA;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        this.f57068b = a.ISO_IEC_646;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g() {
        this.f57068b = a.NUMERIC;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(int i10) {
        this.f57067a = i10;
    }
}
