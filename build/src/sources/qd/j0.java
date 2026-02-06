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
    private final le.b f46742a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46743b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f46744c;

    /* renamed from: d  reason: collision with root package name */
    private a f46745d;

    /* renamed from: e  reason: collision with root package name */
    private a f46746e;

    /* renamed from: f  reason: collision with root package name */
    private a f46747f;

    /* renamed from: g  reason: collision with root package name */
    private long f46748g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        public long f46749a;

        /* renamed from: b  reason: collision with root package name */
        public long f46750b;

        /* renamed from: c  reason: collision with root package name */
        public le.a f46751c;

        /* renamed from: d  reason: collision with root package name */
        public a f46752d;

        public a(long j10, int i10) {
            d(j10, i10);
        }

        @Override // le.b.a
        public le.a a() {
            return (le.a) ne.a.e(this.f46751c);
        }

        public a b() {
            this.f46751c = null;
            a aVar = this.f46752d;
            this.f46752d = null;
            return aVar;
        }

        public void c(le.a aVar, a aVar2) {
            this.f46751c = aVar;
            this.f46752d = aVar2;
        }

        public void d(long j10, int i10) {
            boolean z10;
            if (this.f46751c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            this.f46749a = j10;
            this.f46750b = j10 + i10;
        }

        public int e(long j10) {
            return ((int) (j10 - this.f46749a)) + this.f46751c.f36078b;
        }

        @Override // le.b.a
        public b.a next() {
            a aVar = this.f46752d;
            if (aVar != null && aVar.f46751c != null) {
                return aVar;
            }
            return null;
        }
    }

    public j0(le.b bVar) {
        this.f46742a = bVar;
        int e10 = bVar.e();
        this.f46743b = e10;
        this.f46744c = new ne.h0(32);
        a aVar = new a(0L, e10);
        this.f46745d = aVar;
        this.f46746e = aVar;
        this.f46747f = aVar;
    }

    private void a(a aVar) {
        if (aVar.f46751c == null) {
            return;
        }
        this.f46742a.a(aVar);
        aVar.b();
    }

    private static a d(a aVar, long j10) {
        while (j10 >= aVar.f46750b) {
            aVar = aVar.f46752d;
        }
        return aVar;
    }

    private void g(int i10) {
        long j10 = this.f46748g + i10;
        this.f46748g = j10;
        a aVar = this.f46747f;
        if (j10 == aVar.f46750b) {
            this.f46747f = aVar.f46752d;
        }
    }

    private int h(int i10) {
        a aVar = this.f46747f;
        if (aVar.f46751c == null) {
            aVar.c(this.f46742a.c(), new a(this.f46747f.f46750b, this.f46743b));
        }
        return Math.min(i10, (int) (this.f46747f.f46750b - this.f46748g));
    }

    private static a i(a aVar, long j10, ByteBuffer byteBuffer, int i10) {
        a d10 = d(aVar, j10);
        while (i10 > 0) {
            int min = Math.min(i10, (int) (d10.f46750b - j10));
            byteBuffer.put(d10.f46751c.f36077a, d10.e(j10), min);
            i10 -= min;
            j10 += min;
            if (j10 == d10.f46750b) {
                d10 = d10.f46752d;
            }
        }
        return d10;
    }

    private static a j(a aVar, long j10, byte[] bArr, int i10) {
        a d10 = d(aVar, j10);
        int i11 = i10;
        while (i11 > 0) {
            int min = Math.min(i11, (int) (d10.f46750b - j10));
            System.arraycopy(d10.f46751c.f36077a, d10.e(j10), bArr, i10 - i11, min);
            i11 -= min;
            j10 += min;
            if (j10 == d10.f46750b) {
                d10 = d10.f46752d;
            }
        }
        return d10;
    }

    private static a k(a aVar, qc.f fVar, l0.b bVar, ne.h0 h0Var) {
        boolean z10;
        long j10 = bVar.f46781b;
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
        qc.c cVar = fVar.f46608e;
        byte[] bArr = cVar.f46596a;
        if (bArr == null) {
            cVar.f46596a = new byte[16];
        } else {
            Arrays.fill(bArr, (byte) 0);
        }
        a j13 = j(j11, j12, cVar.f46596a, i11);
        long j14 = j12 + i11;
        if (z10) {
            h0Var.Q(2);
            j13 = j(j13, j14, h0Var.e(), 2);
            j14 += 2;
            i10 = h0Var.N();
        }
        int i12 = i10;
        int[] iArr = cVar.f46599d;
        if (iArr == null || iArr.length < i12) {
            iArr = new int[i12];
        }
        int[] iArr2 = iArr;
        int[] iArr3 = cVar.f46600e;
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
            iArr4[0] = bVar.f46780a - ((int) (j14 - bVar.f46781b));
        }
        b0.a aVar2 = (b0.a) ne.w0.j(bVar.f46782c);
        cVar.c(i12, iArr2, iArr4, aVar2.f50479b, cVar.f46596a, aVar2.f50478a, aVar2.f50480c, aVar2.f50481d);
        long j15 = bVar.f46781b;
        int i15 = (int) (j14 - j15);
        bVar.f46781b = j15 + i15;
        bVar.f46780a -= i15;
        return j13;
    }

    private static a l(a aVar, qc.f fVar, l0.b bVar, ne.h0 h0Var) {
        if (fVar.w()) {
            aVar = k(aVar, fVar, bVar, h0Var);
        }
        if (fVar.k()) {
            h0Var.Q(4);
            a j10 = j(aVar, bVar.f46781b, h0Var.e(), 4);
            int L = h0Var.L();
            bVar.f46781b += 4;
            bVar.f46780a -= 4;
            fVar.u(L);
            a i10 = i(j10, bVar.f46781b, fVar.f46609i, L);
            bVar.f46781b += L;
            int i11 = bVar.f46780a - L;
            bVar.f46780a = i11;
            fVar.y(i11);
            return i(i10, bVar.f46781b, fVar.f46612q, bVar.f46780a);
        }
        fVar.u(bVar.f46780a);
        return i(aVar, bVar.f46781b, fVar.f46609i, bVar.f46780a);
    }

    public void b(long j10) {
        a aVar;
        if (j10 != -1) {
            while (true) {
                aVar = this.f46745d;
                if (j10 < aVar.f46750b) {
                    break;
                }
                this.f46742a.b(aVar.f46751c);
                this.f46745d = this.f46745d.b();
            }
            if (this.f46746e.f46749a < aVar.f46749a) {
                this.f46746e = aVar;
            }
        }
    }

    public void c(long j10) {
        boolean z10;
        if (j10 <= this.f46748g) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f46748g = j10;
        if (j10 != 0) {
            a aVar = this.f46745d;
            if (j10 != aVar.f46749a) {
                while (this.f46748g > aVar.f46750b) {
                    aVar = aVar.f46752d;
                }
                a aVar2 = (a) ne.a.e(aVar.f46752d);
                a(aVar2);
                a aVar3 = new a(aVar.f46750b, this.f46743b);
                aVar.f46752d = aVar3;
                if (this.f46748g == aVar.f46750b) {
                    aVar = aVar3;
                }
                this.f46747f = aVar;
                if (this.f46746e == aVar2) {
                    this.f46746e = aVar3;
                    return;
                }
                return;
            }
        }
        a(this.f46745d);
        a aVar4 = new a(this.f46748g, this.f46743b);
        this.f46745d = aVar4;
        this.f46746e = aVar4;
        this.f46747f = aVar4;
    }

    public long e() {
        return this.f46748g;
    }

    public void f(qc.f fVar, l0.b bVar) {
        l(this.f46746e, fVar, bVar, this.f46744c);
    }

    public void m(qc.f fVar, l0.b bVar) {
        this.f46746e = l(this.f46746e, fVar, bVar, this.f46744c);
    }

    public void n() {
        a(this.f46745d);
        this.f46745d.d(0L, this.f46743b);
        a aVar = this.f46745d;
        this.f46746e = aVar;
        this.f46747f = aVar;
        this.f46748g = 0L;
        this.f46742a.d();
    }

    public void o() {
        this.f46746e = this.f46745d;
    }

    public int p(le.j jVar, int i10, boolean z10) {
        int h10 = h(i10);
        a aVar = this.f46747f;
        int read = jVar.read(aVar.f46751c.f36077a, aVar.e(this.f46748g), h10);
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
            a aVar = this.f46747f;
            h0Var.l(aVar.f46751c.f36077a, aVar.e(this.f46748g), h10);
            i10 -= h10;
            g(h10);
        }
    }
}
