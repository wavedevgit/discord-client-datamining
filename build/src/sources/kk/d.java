package kk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final ik.c f32411a = new ik.c(ik.a.f28447m);

    private int a(byte[] bArr, int i10) {
        int length = bArr.length;
        int[] iArr = new int[length];
        for (int i11 = 0; i11 < length; i11++) {
            iArr[i11] = bArr[i11] & 255;
        }
        try {
            int a10 = this.f32411a.a(iArr, bArr.length - i10);
            for (int i12 = 0; i12 < i10; i12++) {
                bArr[i12] = (byte) iArr[i12];
            }
            return a10;
        } catch (ik.e unused) {
            throw ck.d.a();
        }
    }

    public gk.e b(gk.b bVar) {
        a aVar = new a(bVar);
        b[] b10 = b.b(aVar.c(), aVar.b());
        int i10 = 0;
        for (b bVar2 : b10) {
            i10 += bVar2.c();
        }
        byte[] bArr = new byte[i10];
        int length = b10.length;
        int i11 = 0;
        for (int i12 = 0; i12 < length; i12++) {
            b bVar3 = b10[i12];
            byte[] a10 = bVar3.a();
            int c10 = bVar3.c();
            i11 += a(a10, c10);
            for (int i13 = 0; i13 < c10; i13++) {
                bArr[(i13 * length) + i12] = a10[i13];
            }
        }
        gk.e a11 = c.a(bArr);
        a11.n(Integer.valueOf(i11));
        return a11;
    }
}
