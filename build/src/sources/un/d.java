package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements h {

    /* renamed from: a  reason: collision with root package name */
    private int f50809a = 3;

    private final boolean b(int i10) {
        if (i10 % 10 == 1) {
            return true;
        }
        return false;
    }

    private final void c() {
        int i10 = this.f50809a + 2;
        this.f50809a = i10;
        if (b(i10)) {
            this.f50809a += 2;
        }
    }

    @Override // un.h
    public int a() {
        int i10 = this.f50809a;
        c();
        return i10;
    }
}
