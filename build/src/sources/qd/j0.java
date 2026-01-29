package qd;

import java.io.EOFException;
import java.nio.ByteBuffer;
import java.util.Arrays;
import kotlin.jvm.internal.ByteCompanionObject;
import le.b;
import qd.l0;
import tc.b0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j0 {

    /* renamed from: a  reason: collision with root package name */
    private final le.b f47209a;

    /* renamed from: b  reason: collision with root package name */
    private final int f47210b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f47211c;

    /* renamed from: d  reason: collision with root package name */
    private a f47212d;

    /* renamed from: e  reason: collision with root package name */
    private a f47213e;

    /* renamed from: f  reason: collision with root package name */
    private a f47214f;

    /* renamed from: g  reason: collision with root package name */
    private long f47215g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        public long f47216a;

        /* renamed from: b  reason: collision with root package name */
        public long f47217b;

        /* renamed from: c  reason: collision with root package name */
        public le.a f47218c;

        /* renamed from: d  reason: collision with root package name */
        public a f47219d;

        public a(long j10, int i10) {
            d(j10, i10);
        }

        @Override // le.b.a
        public le.a a() {
            return (le.a) ne.a.e(this.f47218c);
        }

        public a b() {
            this.f47218c = null;
            a aVar = this.f47219d;
            this.f47219d = null;
            return aVar;
        }

        public void c(le.a aVar, a aVar2) {
            this.f47218c = aVar;
            this.f47219d = aVar2;
        }

        public void d(long j10, int i10) {
            boolean z10;
            if (this.f47218c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            this.f47216a = j10;
            this.f47217b = j10 + i10;
        }

        public int e(long j10) {
            return ((int) (j10 - this.f47216a)) + this.f47218c.f37159b;
        }

        @Override // le.b.a
        public b.a next() {
            a aVar = this.f47219d;
            if (aVar != null && aVar.f47218c != null) {
                return aVar;
            }
            return null;
        }
    }

    public j0(le.b bVar) {
        this.f47209a = bVar;
        int e10 = bVar.e();
        this.f47210b = e10;
        this.f47211c = new ne.h0(32);
        a aVar = new a(0L, e10);
        this.f47212d = aVar;
        this.f47213e = aVar;
        this.f47214f = aVar;
    }

    private void a(a aVar) {
        if (aVar.f47218c == null) {
            return;
        }
        this.f47209a.a(aVar);
        aVar.b();
    }

    private static a d(a aVar, long j10) {
        while (j10 >= aVar.f47217b) {
            aVar = aVar.f47219d;
        }
        return aVar;
    }

    private void g(int i10) {
        long j10 = this.f47215g + i10;
        this.f47215g = j10;
        a aVar = this.f47214f;
        if (j10 == aVar.f47217b) {
            this.f47214f = aVar.f47219d;
        }
    }

    private int h(int i10) {
        a aVar = this.f47214f;
        if (aVar.f47218c == null) {
            aVar.c(this.f47209a.c(), new a(this.f47214f.f47217b, this.f47210b));
        }
        return Math.min(i10, (int) (this.f47214f.f47217b - this.f47215g));
    }

    private static a i(a aVar, long j10, ByteBuffer byteBuffer, int i10) {
        a d10 = d(aVar, j10);
        while (i10 > 0) {
            int min = Math.min(i10, (int) (d10.f47217b - j10));
            byteBuffer.put(d10.f47218c.f37158a, d10.e(j10), min);
            i10 -= min;
            j10 += min;
            if (j10 == d10.f47217b) {
                d10 = d10.f47219d;
            }
        }
        return d10;
    }

    private static a j(a aVar, long j10, byte[] bArr, int i10) {
        a d10 = d(aVar, j10);
        int i11 = i10;
        while (i11 > 0) {
            int min = Math.min(i11, (int) (d10.f47217b - j10));
            System.arraycopy(d10.f47218c.f37158a, d10.e(j10), bArr, i10 - i11, min);
            i11 -= min;
            j10 += min;
            if (j10 == d10.f47217b) {
                d10 = d10.f47219d;
            }
        }
        return d10;
    }

    private static a k(a aVar, qc.f fVar, l0.b bVar, ne.h0 h0Var) {
        boolean z10;
        long j10 = bVar.f47248b;
        int i10 = 1;
        h0Var.Q(1);
        a j11 = j(aVar, j10, h0Var.e(), 1);
        long j12 = j10 + 1;
        byte b10 = h0Var.e()[0];
        if ((b10 & ByteCompanionObject.MIN_VALUE) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        int i11 = b10 & ByteCompanionObject.MAX_VALUE;
        qc.c cVar = fVar.f47075e;
        byte[] bArr = cVar.f47063a;
        if (bArr == null) {
            cVar.f47063a = new byte[16];
        } else {
            Arrays.fill(bArr, (byte) 0);
        }
        a j13 = j(j11, j12, cVar.f47063a, i11);
        long j14 = j12 + i11;
        if (z10) {
            h0Var.Q(2);
            j13 = j(j13, j14, h0Var.e(), 2);
            j14 += 2;
            i10 = h0Var.N();
        }
        int i12 = i10;
        int[] iArr = cVar.f47066d;
        if (iArr == null || iArr.length < i12) {
            iArr = new int[i12];
        }
        int[] iArr2 = iArr;
        int[] iArr3 = cVar.f47067e;
        if (iArr3 == null || iArr3.length < i12) {
            iArr3 = new int[i12];
        }
        int[] iArr4 = iArr3;
        if (z10) {
            int i13 = i12 * 6;
            h0Var.Q(i13);
            j13 = j(j13, j14, h0Var.e(), i13);
            j14 += i13;
            h0Var.U(0);
            for (int i14 = 0; i14 < i12; i14++) {
                iArr2[i14] = h0Var.N();
                iArr4[i14] = h0Var.L();
            }
        } else {
            iArr2[0] = 0;
            iArr4[0] = bVar.f47247a - ((int) (j14 - bVar.f47248b));
        }
        b0.a aVar2 = (b0.a) ne.w0.j(bVar.f47249c);
        cVar.c(i12, iArr2, iArr4, aVar2.f49402b, cVar.f47063a, aVar2.f49401a, aVar2.f49403c, aVar2.f49404d);
        long j15 = bVar.f47248b;
        int i15 = (int) (j14 - j15);
        bVar.f47248b = j15 + i15;
        bVar.f47247a -= i15;
        return j13;
    }

    private static a l(a aVar, qc.f fVar, l0.b bVar, ne.h0 h0Var) {
        if (fVar.w()) {
            aVar = k(aVar, fVar, bVar, h0Var);
        }
        if (fVar.k()) {
            h0Var.Q(4);
            a j10 = j(aVar, bVar.f47248b, h0Var.e(), 4);
            int L = h0Var.L();
            bVar.f47248b += 4;
            bVar.f47247a -= 4;
            fVar.u(L);
            a i10 = i(j10, bVar.f47248b, fVar.f47076i, L);
            bVar.f47248b += L;
            int i11 = bVar.f47247a - L;
            bVar.f47247a = i11;
            fVar.y(i11);
            return i(i10, bVar.f47248b, fVar.f47079q, bVar.f47247a);
        }
        fVar.u(bVar.f47247a);
        return i(aVar, bVar.f47248b, fVar.f47076i, bVar.f47247a);
    }

    public void b(long j10) {
        a aVar;
        if (j10 != -1) {
            while (true) {
                aVar = this.f47212d;
                if (j10 < aVar.f47217b) {
                    break;
                }
                this.f47209a.b(aVar.f47218c);
                this.f47212d = this.f47212d.b();
            }
            if (this.f47213e.f47216a < aVar.f47216a) {
                this.f47213e = aVar;
            }
        }
    }

    public void c(long j10) {
        boolean z10;
        if (j10 <= this.f47215g) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f47215g = j10;
        if (j10 != 0) {
            a aVar = this.f47212d;
            if (j10 != aVar.f47216a) {
                while (this.f47215g > aVar.f47217b) {
                    aVar = aVar.f47219d;
                }
                a aVar2 = (a) ne.a.e(aVar.f47219d);
                a(aVar2);
                a aVar3 = new a(aVar.f47217b, this.f47210b);
                aVar.f47219d = aVar3;
                if (this.f47215g == aVar.f47217b) {
                    aVar = aVar3;
                }
                this.f47214f = aVar;
                if (this.f47213e == aVar2) {
                    this.f47213e = aVar3;
                    return;
                }
                return;
            }
        }
        a(this.f47212d);
        a aVar4 = new a(this.f47215g, this.f47210b);
        this.f47212d = aVar4;
        this.f47213e = aVar4;
        this.f47214f = aVar4;
    }

    public long e() {
        return this.f47215g;
    }

    public void f(qc.f fVar, l0.b bVar) {
        l(this.f47213e, fVar, bVar, this.f47211c);
    }

    public void m(qc.f fVar, l0.b bVar) {
        this.f47213e = l(this.f47213e, fVar, bVar, this.f47211c);
    }

    public void n() {
        a(this.f47212d);
        this.f47212d.d(0L, this.f47210b);
        a aVar = this.f47212d;
        this.f47213e = aVar;
        this.f47214f = aVar;
        this.f47215g = 0L;
        this.f47209a.d();
    }

    public void o() {
        this.f47213e = this.f47212d;
    }

    public int p(le.j jVar, int i10, boolean z10) {
        int h10 = h(i10);
        a aVar = this.f47214f;
        int read = jVar.read(aVar.f47218c.f37158a, aVar.e(this.f47215g), h10);
        if (read == -1) {
            if (z10) {
                return -1;
            }
            throw new EOFException();
        }
        g(read);
        return read;
    }

    public void q(ne.h0 h0Var, int i10) {
        while (i10 > 0) {
            int h10 = h(i10);
            a aVar = this.f47214f;
            h0Var.l(aVar.f47218c.f37158a, aVar.e(this.f47215g), h10);
            i10 -= h10;
            g(h10);
        }
    }
}
