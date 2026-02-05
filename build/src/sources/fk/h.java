package fk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends i {

    /* renamed from: c  reason: collision with root package name */
    private final i f23074c;

    public h(i iVar) {
        super(iVar.d(), iVar.a());
        this.f23074c = iVar;
    }

    @Override // fk.i
    public byte[] b() {
        byte[] b10 = this.f23074c.b();
        int d10 = d() * a();
        byte[] bArr = new byte[d10];
        for (int i10 = 0; i10 < d10; i10++) {
            bArr[i10] = (byte) (255 - (b10[i10] & 255));
        }
        return bArr;
    }

    @Override // fk.i
    public byte[] c(int i10, byte[] bArr) {
        byte[] c10 = this.f23074c.c(i10, bArr);
        int d10 = d();
        for (int i11 = 0; i11 < d10; i11++) {
            c10[i11] = (byte) (255 - (c10[i11] & 255));
        }
        return c10;
    }

    @Override // fk.i
    public i e() {
        return this.f23074c;
    }

    @Override // fk.i
    public boolean f() {
        return this.f23074c.f();
    }

    @Override // fk.i
    public i g() {
        return new h(this.f23074c.g());
    }
}
