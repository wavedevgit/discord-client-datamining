package rd;

import java.io.EOFException;
import java.nio.ByteBuffer;
import java.util.Arrays;
import kotlin.jvm.internal.ByteCompanionObject;
import me.b;
import rd.l0;
import uc.b0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j0 {

    /* renamed from: a  reason: collision with root package name */
    private final me.b f46363a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46364b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f46365c;

    /* renamed from: d  reason: collision with root package name */
    private a f46366d;

    /* renamed from: e  reason: collision with root package name */
    private a f46367e;

    /* renamed from: f  reason: collision with root package name */
    private a f46368f;

    /* renamed from: g  reason: collision with root package name */
    private long f46369g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        public long f46370a;

        /* renamed from: b  reason: collision with root package name */
        public long f46371b;

        /* renamed from: c  reason: collision with root package name */
        public me.a f46372c;

        /* renamed from: d  reason: collision with root package name */
        public a f46373d;

        public a(long j10, int i10) {
            d(j10, i10);
        }

        @Override // me.b.a
        public me.a a() {
            return (me.a) oe.a.e(this.f46372c);
        }

        public a b() {
            this.f46372c = null;
            a aVar = this.f46373d;
            this.f46373d = null;
            return aVar;
        }

        public void c(me.a aVar, a aVar2) {
            this.f46372c = aVar;
            this.f46373d = aVar2;
        }

        public void d(long j10, int i10) {
            boolean z10;
            if (this.f46372c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            this.f46370a = j10;
            this.f46371b = j10 + i10;
        }

        public int e(long j10) {
            return ((int) (j10 - this.f46370a)) + this.f46372c.f36332b;
        }

        @Override // me.b.a
        public b.a next() {
            a aVar = this.f46373d;
            if (aVar != null && aVar.f46372c != null) {
                return aVar;
            }
            return null;
        }
    }

    public j0(me.b bVar) {
        this.f46363a = bVar;
        int e10 = bVar.e();
        this.f46364b = e10;
        this.f46365c = new oe.h0(32);
        a aVar = new a(0L, e10);
        this.f46366d = aVar;
        this.f46367e = aVar;
        this.f46368f = aVar;
    }

    private void a(a aVar) {
        if (aVar.f46372c == null) {
            return;
        }
        this.f46363a.a(aVar);
        aVar.b();
    }

    private static a d(a aVar, long j10) {
        while (j10 >= aVar.f46371b) {
            aVar = aVar.f46373d;
        }
        return aVar;
    }

    private void g(int i10) {
        long j10 = this.f46369g + i10;
        this.f46369g = j10;
        a aVar = this.f46368f;
        if (j10 == aVar.f46371b) {
            this.f46368f = aVar.f46373d;
        }
    }

    private int h(int i10) {
        a aVar = this.f46368f;
        if (aVar.f46372c == null) {
            aVar.c(this.f46363a.b(), new a(this.f46368f.f46371b, this.f46364b));
        }
        return Math.min(i10, (int) (this.f46368f.f46371b - this.f46369g));
    }

    private static a i(a aVar, long j10, ByteBuffer byteBuffer, int i10) {
        a d10 = d(aVar, j10);
        while (i10 > 0) {
            int min = Math.min(i10, (int) (d10.f46371b - j10));
            byteBuffer.put(d10.f46372c.f36331a, d10.e(j10), min);
            i10 -= min;
            j10 += min;
            if (j10 == d10.f46371b) {
                d10 = d10.f46373d;
            }
        }
        return d10;
    }

    private static a j(a aVar, long j10, byte[] bArr, int i10) {
        a d10 = d(aVar, j10);
        int i11 = i10;
        while (i11 > 0) {
            int min = Math.min(i11, (int) (d10.f46371b - j10));
            System.arraycopy(d10.f46372c.f36331a, d10.e(j10), bArr, i10 - i11, min);
            i11 -= min;
            j10 += min;
            if (j10 == d10.f46371b) {
                d10 = d10.f46373d;
            }
        }
        return d10;
    }

    private static a k(a aVar, rc.f fVar, l0.b bVar, oe.h0 h0Var) {
        boolean z10;
        long j10 = bVar.f46402b;
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
        rc.c cVar = fVar.f46229e;
        byte[] bArr = cVar.f46217a;
        if (bArr == null) {
            cVar.f46217a = new byte[16];
        } else {
            Arrays.fill(bArr, (byte) 0);
        }
        a j13 = j(j11, j12, cVar.f46217a, i11);
        long j14 = j12 + i11;
        if (z10) {
            h0Var.Q(2);
            j13 = j(j13, j14, h0Var.e(), 2);
            j14 += 2;
            i10 = h0Var.N();
        }
        int i12 = i10;
        int[] iArr = cVar.f46220d;
        if (iArr == null || iArr.length < i12) {
            iArr = new int[i12];
        }
        int[] iArr2 = iArr;
        int[] iArr3 = cVar.f46221e;
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
            iArr4[0] = bVar.f46401a - ((int) (j14 - bVar.f46402b));
        }
        b0.a aVar2 = (b0.a) oe.w0.j(bVar.f46403c);
        cVar.c(i12, iArr2, iArr4, aVar2.f50615b, cVar.f46217a, aVar2.f50614a, aVar2.f50616c, aVar2.f50617d);
        long j15 = bVar.f46402b;
        int i15 = (int) (j14 - j15);
        bVar.f46402b = j15 + i15;
        bVar.f46401a -= i15;
        return j13;
    }

    private static a l(a aVar, rc.f fVar, l0.b bVar, oe.h0 h0Var) {
        if (fVar.w()) {
            aVar = k(aVar, fVar, bVar, h0Var);
        }
        if (fVar.l()) {
            h0Var.Q(4);
            a j10 = j(aVar, bVar.f46402b, h0Var.e(), 4);
            int L = h0Var.L();
            bVar.f46402b += 4;
            bVar.f46401a -= 4;
            fVar.u(L);
            a i10 = i(j10, bVar.f46402b, fVar.f46230i, L);
            bVar.f46402b += L;
            int i11 = bVar.f46401a - L;
            bVar.f46401a = i11;
            fVar.y(i11);
            return i(i10, bVar.f46402b, fVar.f46233q, bVar.f46401a);
        }
        fVar.u(bVar.f46401a);
        return i(aVar, bVar.f46402b, fVar.f46230i, bVar.f46401a);
    }

    public void b(long j10) {
        a aVar;
        if (j10 != -1) {
            while (true) {
                aVar = this.f46366d;
                if (j10 < aVar.f46371b) {
                    break;
                }
                this.f46363a.c(aVar.f46372c);
                this.f46366d = this.f46366d.b();
            }
            if (this.f46367e.f46370a < aVar.f46370a) {
                this.f46367e = aVar;
            }
        }
    }

    public void c(long j10) {
        boolean z10;
        if (j10 <= this.f46369g) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        this.f46369g = j10;
        if (j10 != 0) {
            a aVar = this.f46366d;
            if (j10 != aVar.f46370a) {
                while (this.f46369g > aVar.f46371b) {
                    aVar = aVar.f46373d;
                }
                a aVar2 = (a) oe.a.e(aVar.f46373d);
                a(aVar2);
                a aVar3 = new a(aVar.f46371b, this.f46364b);
                aVar.f46373d = aVar3;
                if (this.f46369g == aVar.f46371b) {
                    aVar = aVar3;
                }
                this.f46368f = aVar;
                if (this.f46367e == aVar2) {
                    this.f46367e = aVar3;
                    return;
                }
                return;
            }
        }
        a(this.f46366d);
        a aVar4 = new a(this.f46369g, this.f46364b);
        this.f46366d = aVar4;
        this.f46367e = aVar4;
        this.f46368f = aVar4;
    }

    public long e() {
        return this.f46369g;
    }

    public void f(rc.f fVar, l0.b bVar) {
        l(this.f46367e, fVar, bVar, this.f46365c);
    }

    public void m(rc.f fVar, l0.b bVar) {
        this.f46367e = l(this.f46367e, fVar, bVar, this.f46365c);
    }

    public void n() {
        a(this.f46366d);
        this.f46366d.d(0L, this.f46364b);
        a aVar = this.f46366d;
        this.f46367e = aVar;
        this.f46368f = aVar;
        this.f46369g = 0L;
        this.f46363a.d();
    }

    public void o() {
        this.f46367e = this.f46366d;
    }

    public int p(me.j jVar, int i10, boolean z10) {
        int h10 = h(i10);
        a aVar = this.f46368f;
        int read = jVar.read(aVar.f46372c.f36331a, aVar.e(this.f46369g), h10);
        if (read == -1) {
            if (z10) {
                return -1;
            }
            throw new EOFException();
        }
        g(read);
        return read;
    }

    public void q(oe.h0 h0Var, int i10) {
        while (i10 > 0) {
            int h10 = h(i10);
            a aVar = this.f46368f;
            h0Var.l(aVar.f46372c.f36331a, aVar.e(this.f46369g), h10);
            i10 -= h10;
            g(h10);
        }
    }
}
