package uc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u implements l {

    /* renamed from: a  reason: collision with root package name */
    private final l f50705a;

    public u(l lVar) {
        this.f50705a = lVar;
    }

    @Override // uc.l
    public int a(int i10) {
        return this.f50705a.a(i10);
    }

    @Override // uc.l
    public boolean c(byte[] bArr, int i10, int i11, boolean z10) {
        return this.f50705a.c(bArr, i10, i11, z10);
    }

    @Override // uc.l
    public void e() {
        this.f50705a.e();
    }

    @Override // uc.l
    public boolean f(byte[] bArr, int i10, int i11, boolean z10) {
        return this.f50705a.f(bArr, i10, i11, z10);
    }

    @Override // uc.l
    public long g() {
        return this.f50705a.g();
    }

    @Override // uc.l
    public long getLength() {
        return this.f50705a.getLength();
    }

    @Override // uc.l
    public long getPosition() {
        return this.f50705a.getPosition();
    }

    @Override // uc.l
    public void h(int i10) {
        this.f50705a.h(i10);
    }

    @Override // uc.l
    public int j(byte[] bArr, int i10, int i11) {
        return this.f50705a.j(bArr, i10, i11);
    }

    @Override // uc.l
    public void k(int i10) {
        this.f50705a.k(i10);
    }

    @Override // uc.l
    public boolean l(int i10, boolean z10) {
        return this.f50705a.l(i10, z10);
    }

    @Override // uc.l
    public void n(byte[] bArr, int i10, int i11) {
        this.f50705a.n(bArr, i10, i11);
    }

    @Override // uc.l, me.j
    public int read(byte[] bArr, int i10, int i11) {
        return this.f50705a.read(bArr, i10, i11);
    }

    @Override // uc.l
    public void readFully(byte[] bArr, int i10, int i11) {
        this.f50705a.readFully(bArr, i10, i11);
    }
}
