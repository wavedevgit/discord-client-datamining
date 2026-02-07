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
    private final le.b f46790a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46791b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f46792c;

    /* renamed from: d  reason: collision with root package name */
    private a f46793d;

    /* renamed from: e  reason: collision with root package name */
    private a f46794e;

    /* renamed from: f  reason: collision with root package name */
    private a f46795f;

    /* renamed from: g  reason: collision with root package name */
    private long f46796g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        public long f46797a;

        /* renamed from: b  reason: collision with root package name */
        public long f46798b;

        /* renamed from: c  reason: collision with root package name */
        public le.a f46799c;

        /* renamed from: d  reason: collision with root package name */
        public a f46800d;

        public a(long j10, int i10) {
            d(j10, i10);
        }

        @Override // le.b.a
        public le.a a() {
            return (le.a) ne.a.e(this.f46799c);
        }

        public a b() {
            this.f46799c = null;
            a aVar = this.f46800d;
            this.f46800d = null;
            return aVar;
        }

        public void c(le.a aVar, a aVar2) {
            this.f46799c = aVar;
            this.f46800d = aVar2;
        }

        public void d(long j10, int i10) {
            boolean z10;
            if (this.f46799c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            this.f46797a = j10;
            this.f46798b = j10 + i10;
        }

        public int e(long j10) {
            return ((int) (j10 - this.f46797a)) + this.f46799c.f36126b;
        }

        @Override // le.b.a
        public b.a next() {
            a aVar = this.f46800d;
            if (aVar != null && aVar.f46799c != null) {
                return aVar;
            }
            return null;
        }
    }

    public j0(le.b bVar) {
        this.f46790a = bVar;
        int e10 = bVar.e();
        this.f46791b = e10;
        this.f46792c = new ne.h0(32);
        a aVar = new a(0L, e10);
        this.f46793d = aVar;
        this.f46794e = aVar;
        this.f46795f = aVar;
    }

    private void a(a aVar) {
        if (aVar.f46799c == null) {
            return;
        }
        this.f46790a.a(aVar);
        aVar.b();
    }

    private static a d(a aVar, long j10) {
        while (j10 >= aVar.f46798b) {
            aVar = aVar.f46800d;
        }
        return aVar;
    }

    private void g(int i10) {
        long j10 = this.f46796g + i10;
        this.f46796g = j10;
        a aVar = this.f46795f;
        if (j10 == aVar.f46798b) {
            this.f46795f = aVar.f46800d;
        }
    }

    private int h(int i10) {
        a aVar = this.f46795f;
        if (aVar.f46799c == null) {
            aVar.c(this.f46790a.c(), new a(this.f46795f.f46798b, this.f46791b));
        }
        return Math.min(i10, (int) (this.f46795f.f46798b - this.f46796g));
    }

    private static a i(a aVar, long j10, ByteBuffer byteBuffer, int i10) {
        a d10 = d(aVar, j10);
        while (i10 > 0) {
            int min = Math.min(i10, (int) (d10.f46798b - j10));
            byteBuffer.put(d10.f46799c.f36125a, d10.e(j10), min);
            i10 -= min;
            j10 += min;
            if (j10 == d10.f46798b) {
                d10 = d10.f46800d;
            }
        }
        return d10;
    }

    private static a j(a aVar, long j10, byte[] bArr, int i10) {
        a d10 = d(aVar, j10);
        int i11 = i10;
        while (i11 > 0) {
            int min = Math.min(i11, (int) (d10.f46798b - j10));
            System.arraycopy(d10.f46799c.f36125a, d10.e(j10), bArr, i10 - i11, min);
            i11 -= min;
            j10 += min;
            if (j10 == d10.f46798b) {
                d10 = d10.f46800d;
            }
        }
        return d10;
    }

    private static a k(a aVar, qc.f fVar, l0.b bVar, ne.h0 h0Var) {
        boolean z10;
        long j10 = bVar.f46829b;
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
        qc.c cVar = fVar.f46656e;
        byte[] bArr = cVar.f46644a;
        if (bArr == null) {
            cVar.f46644a = new byte[16];
        } else {
            Arrays.fill(bArr, (byte) 0);
        }
        a j13 = j(j11, j12, cVar.f46644a, i11);
        long j14 = j12 + i11;
        if (z10) {
            h0Var.Q(2);
            j13 = j(j13, j14, h0Var.e(), 2);
            j14 += 2;
            i10 = h0Var.N();
        }
        int i12 = i10;
        int[] iArr = cVar.f46647d;
        if (iArr == null || iArr.length < i12) {
            iArr = new int[i12];
        }
        int[] iArr2 = iArr;
        int[] iArr3 = cVar.f46648e;
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
            iArr4[0] = bVar.f46828a - ((int) (j14 - bVar.f46829b));
        }
        b0.a aVar2 = (b0.a) ne.w0.j(bVar.f46830c);
        cVar.c(i12, iArr2, iArr4, aVar2.f50527b, cVar.f46644a, aVar2.f50526a, aVar2.f50528c, aVar2.f50529d);
        long j15 = bVar.f46829b;
        int i15 = (int) (j14 - j15);
        bVar.f46829b = j15 + i15;
        bVar.f46828a -= i15;
        return j13;
    }

    private static a l(a aVar, qc.f fVar, l0.b bVar, ne.h0 h0Var) {
        if (fVar.w()) {
            aVar = k(aVar, fVar, bVar, h0Var);
        }
        if (fVar.k()) {
            h0Var.Q(4);
            a j10 = j(aVar, bVar.f46829b, h0Var.e(), 4);
            int L = h0Var.L();
            bVar.f46829b += 4;
            bVar.f46828a -= 4;
            fVar.u(L);
            a i10 = i(j10, bVar.f46829b, fVar.f46657i, L);
            bVar.f46829b += L;
            int i11 = bVar.f46828a - L;
            bVar.f46828a = i11;
            fVar.y(i11);
            return i(i10, bVar.f46829b, fVar.f46660q, bVar.f46828a);
        }
        fVar.u(bVar.f46828a);
        return i(aVar, bVar.f46829b, fVar.f46657i, bVar.f46828a);
    }

    public void b(long j10) {
        a aVar;
        if (j10 != -1) {
            while (true) {
                aVar = this.f46793d;
                if (j10 < aVar.f46798b) {
                    break;
                }
                this.f46790a.b(aVar.f46799c);
                this.f46793d = this.f46793d.b();
            }
            if (this.f46794e.f46797a < aVar.f46797a) {
                this.f46794e = aVar;
            }
        }
    }

    public void c(long j10) {
        boolean z10;
        if (j10 <= this.f46796g) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f46796g = j10;
        if (j10 != 0) {
            a aVar = this.f46793d;
            if (j10 != aVar.f46797a) {
                while (this.f46796g > aVar.f46798b) {
                    aVar = aVar.f46800d;
                }
                a aVar2 = (a) ne.a.e(aVar.f46800d);
                a(aVar2);
                a aVar3 = new a(aVar.f46798b, this.f46791b);
                aVar.f46800d = aVar3;
                if (this.f46796g == aVar.f46798b) {
                    aVar = aVar3;
                }
                this.f46795f = aVar;
                if (this.f46794e == aVar2) {
                    this.f46794e = aVar3;
                    return;
                }
                return;
            }
        }
        a(this.f46793d);
        a aVar4 = new a(this.f46796g, this.f46791b);
        this.f46793d = aVar4;
        this.f46794e = aVar4;
        this.f46795f = aVar4;
    }

    public long e() {
        return this.f46796g;
    }

    public void f(qc.f fVar, l0.b bVar) {
        l(this.f46794e, fVar, bVar, this.f46792c);
    }

    public void m(qc.f fVar, l0.b bVar) {
        this.f46794e = l(this.f46794e, fVar, bVar, this.f46792c);
    }

    public void n() {
        a(this.f46793d);
        this.f46793d.d(0L, this.f46791b);
        a aVar = this.f46793d;
        this.f46794e = aVar;
        this.f46795f = aVar;
        this.f46796g = 0L;
        this.f46790a.d();
    }

    public void o() {
        this.f46794e = this.f46793d;
    }

    public int p(le.j jVar, int i10, boolean z10) {
        int h10 = h(i10);
        a aVar = this.f46795f;
        int read = jVar.read(aVar.f46799c.f36125a, aVar.e(this.f46796g), h10);
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
            a aVar = this.f46795f;
            h0Var.l(aVar.f46799c.f36125a, aVar.e(this.f46796g), h10);
            i10 -= h10;
            g(h10);
        }
    }
}
