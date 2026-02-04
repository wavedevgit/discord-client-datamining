package xk;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final ik.c f53358a = new ik.c(ik.a.f28446l);

    private int a(byte[] bArr, int i10) {
        int length = bArr.length;
        int[] iArr = new int[length];
        for (int i11 = 0; i11 < length; i11++) {
            iArr[i11] = bArr[i11] & 255;
        }
        try {
            int a10 = this.f53358a.a(iArr, bArr.length - i10);
            for (int i12 = 0; i12 < i10; i12++) {
                bArr[i12] = (byte) iArr[i12];
            }
            return a10;
        } catch (ik.e unused) {
            throw ck.d.a();
        }
    }

    private gk.e c(a aVar, Map map) {
        j e10 = aVar.e();
        f d10 = aVar.d().d();
        b[] b10 = b.b(aVar.c(), e10, d10);
        int i10 = 0;
        for (b bVar : b10) {
            i10 += bVar.c();
        }
        byte[] bArr = new byte[i10];
        int i11 = 0;
        int i12 = 0;
        for (b bVar2 : b10) {
            byte[] a10 = bVar2.a();
            int c10 = bVar2.c();
            i11 += a(a10, c10);
            int i13 = 0;
            while (i13 < c10) {
                bArr[i12] = a10[i13];
                i13++;
                i12++;
            }
        }
        gk.e a11 = d.a(bArr, e10, d10, map);
        a11.n(Integer.valueOf(i11));
        return a11;
    }

    public gk.e b(gk.b bVar, Map map) {
        ck.d e10;
        a aVar = new a(bVar);
        ck.g gVar = null;
        try {
            return c(aVar, map);
        } catch (ck.d e11) {
            e10 = e11;
            try {
                aVar.f();
                aVar.g(true);
                aVar.e();
                aVar.d();
                aVar.b();
                gk.e c10 = c(aVar, map);
                c10.p(new i(true));
                return c10;
            } catch (ck.d | ck.g unused) {
                if (gVar != null) {
                    throw gVar;
                }
                throw e10;
            }
        } catch (ck.g e12) {
            e10 = null;
            gVar = e12;
            aVar.f();
            aVar.g(true);
            aVar.e();
            aVar.d();
            aVar.b();
            gk.e c102 = c(aVar, map);
            c102.p(new i(true));
            return c102;
        }
    }
}
