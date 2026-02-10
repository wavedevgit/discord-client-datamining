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
    private final me.b f46362a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46363b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f46364c;

    /* renamed from: d  reason: collision with root package name */
    private a f46365d;

    /* renamed from: e  reason: collision with root package name */
    private a f46366e;

    /* renamed from: f  reason: collision with root package name */
    private a f46367f;

    /* renamed from: g  reason: collision with root package name */
    private long f46368g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        public long f46369a;

        /* renamed from: b  reason: collision with root package name */
        public long f46370b;

        /* renamed from: c  reason: collision with root package name */
        public me.a f46371c;

        /* renamed from: d  reason: collision with root package name */
        public a f46372d;

        public a(long j10, int i10) {
            d(j10, i10);
        }

        @Override // me.b.a
        public me.a a() {
            return (me.a) oe.a.e(this.f46371c);
        }

        public a b() {
            this.f46371c = null;
            a aVar = this.f46372d;
            this.f46372d = null;
            return aVar;
        }

        public void c(me.a aVar, a aVar2) {
            this.f46371c = aVar;
            this.f46372d = aVar2;
        }

        public void d(long j10, int i10) {
            boolean z10;
            if (this.f46371c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            this.f46369a = j10;
            this.f46370b = j10 + i10;
        }

        public int e(long j10) {
            return ((int) (j10 - this.f46369a)) + this.f46371c.f36331b;
        }

        @Override // me.b.a
        public b.a next() {
            a aVar = this.f46372d;
            if (aVar != null && aVar.f46371c != null) {
                return aVar;
            }
            return null;
        }
    }

    public j0(me.b bVar) {
        this.f46362a = bVar;
        int e10 = bVar.e();
        this.f46363b = e10;
        this.f46364c = new oe.h0(32);
        a aVar = new a(0L, e10);
        this.f46365d = aVar;
        this.f46366e = aVar;
        this.f46367f = aVar;
    }

    private void a(a aVar) {
        if (aVar.f46371c == null) {
            return;
        }
        this.f46362a.a(aVar);
        aVar.b();
    }

    private static a d(a aVar, long j10) {
        while (j10 >= aVar.f46370b) {
            aVar = aVar.f46372d;
        }
        return aVar;
    }

    private void g(int i10) {
        long j10 = this.f46368g + i10;
        this.f46368g = j10;
        a aVar = this.f46367f;
        if (j10 == aVar.f46370b) {
            this.f46367f = aVar.f46372d;
        }
    }

    private int h(int i10) {
        a aVar = this.f46367f;
        if (aVar.f46371c == null) {
            aVar.c(this.f46362a.b(), new a(this.f46367f.f46370b, this.f46363b));
        }
        return Math.min(i10, (int) (this.f46367f.f46370b - this.f46368g));
    }

    private static a i(a aVar, long j10, ByteBuffer byteBuffer, int i10) {
        a d10 = d(aVar, j10);
        while (i10 > 0) {
            int min = Math.min(i10, (int) (d10.f46370b - j10));
            byteBuffer.put(d10.f46371c.f36330a, d10.e(j10), min);
            i10 -= min;
            j10 += min;
            if (j10 == d10.f46370b) {
                d10 = d10.f46372d;
            }
        }
        return d10;
    }

    private static a j(a aVar, long j10, byte[] bArr, int i10) {
        a d10 = d(aVar, j10);
        int i11 = i10;
        while (i11 > 0) {
            int min = Math.min(i11, (int) (d10.f46370b - j10));
            System.arraycopy(d10.f46371c.f36330a, d10.e(j10), bArr, i10 - i11, min);
            i11 -= min;
            j10 += min;
            if (j10 == d10.f46370b) {
                d10 = d10.f46372d;
            }
        }
        return d10;
    }

    private static a k(a aVar, rc.f fVar, l0.b bVar, oe.h0 h0Var) {
        boolean z10;
        long j10 = bVar.f46401b;
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
        rc.c cVar = fVar.f46228e;
        byte[] bArr = cVar.f46216a;
        if (bArr == null) {
            cVar.f46216a = new byte[16];
        } else {
            Arrays.fill(bArr, (byte) 0);
        }
        a j13 = j(j11, j12, cVar.f46216a, i11);
        long j14 = j12 + i11;
        if (z10) {
            h0Var.Q(2);
            j13 = j(j13, j14, h0Var.e(), 2);
            j14 += 2;
            i10 = h0Var.N();
        }
        int i12 = i10;
        int[] iArr = cVar.f46219d;
        if (iArr == null || iArr.length < i12) {
            iArr = new int[i12];
        }
        int[] iArr2 = iArr;
        int[] iArr3 = cVar.f46220e;
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
            iArr4[0] = bVar.f46400a - ((int) (j14 - bVar.f46401b));
        }
        b0.a aVar2 = (b0.a) oe.w0.j(bVar.f46402c);
        cVar.c(i12, iArr2, iArr4, aVar2.f50614b, cVar.f46216a, aVar2.f50613a, aVar2.f50615c, aVar2.f50616d);
        long j15 = bVar.f46401b;
        int i15 = (int) (j14 - j15);
        bVar.f46401b = j15 + i15;
        bVar.f46400a -= i15;
        return j13;
    }

    private static a l(a aVar, rc.f fVar, l0.b bVar, oe.h0 h0Var) {
        if (fVar.w()) {
            aVar = k(aVar, fVar, bVar, h0Var);
        }
        if (fVar.l()) {
            h0Var.Q(4);
            a j10 = j(aVar, bVar.f46401b, h0Var.e(), 4);
            int L = h0Var.L();
            bVar.f46401b += 4;
            bVar.f46400a -= 4;
            fVar.u(L);
            a i10 = i(j10, bVar.f46401b, fVar.f46229i, L);
            bVar.f46401b += L;
            int i11 = bVar.f46400a - L;
            bVar.f46400a = i11;
            fVar.y(i11);
            return i(i10, bVar.f46401b, fVar.f46232q, bVar.f46400a);
        }
        fVar.u(bVar.f46400a);
        return i(aVar, bVar.f46401b, fVar.f46229i, bVar.f46400a);
    }

    public void b(long j10) {
        a aVar;
        if (j10 != -1) {
            while (true) {
                aVar = this.f46365d;
                if (j10 < aVar.f46370b) {
                    break;
                }
                this.f46362a.c(aVar.f46371c);
                this.f46365d = this.f46365d.b();
            }
            if (this.f46366e.f46369a < aVar.f46369a) {
                this.f46366e = aVar;
            }
        }
    }

    public void c(long j10) {
        boolean z10;
        if (j10 <= this.f46368g) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        this.f46368g = j10;
        if (j10 != 0) {
            a aVar = this.f46365d;
            if (j10 != aVar.f46369a) {
                while (this.f46368g > aVar.f46370b) {
                    aVar = aVar.f46372d;
                }
                a aVar2 = (a) oe.a.e(aVar.f46372d);
                a(aVar2);
                a aVar3 = new a(aVar.f46370b, this.f46363b);
                aVar.f46372d = aVar3;
                if (this.f46368g == aVar.f46370b) {
                    aVar = aVar3;
                }
                this.f46367f = aVar;
                if (this.f46366e == aVar2) {
                    this.f46366e = aVar3;
                    return;
                }
                return;
            }
        }
        a(this.f46365d);
        a aVar4 = new a(this.f46368g, this.f46363b);
        this.f46365d = aVar4;
        this.f46366e = aVar4;
        this.f46367f = aVar4;
    }

    public long e() {
        return this.f46368g;
    }

    public void f(rc.f fVar, l0.b bVar) {
        l(this.f46366e, fVar, bVar, this.f46364c);
    }

    public void m(rc.f fVar, l0.b bVar) {
        this.f46366e = l(this.f46366e, fVar, bVar, this.f46364c);
    }

    public void n() {
        a(this.f46365d);
        this.f46365d.d(0L, this.f46363b);
        a aVar = this.f46365d;
        this.f46366e = aVar;
        this.f46367f = aVar;
        this.f46368g = 0L;
        this.f46362a.d();
    }

    public void o() {
        this.f46366e = this.f46365d;
    }

    public int p(me.j jVar, int i10, boolean z10) {
        int h10 = h(i10);
        a aVar = this.f46367f;
        int read = jVar.read(aVar.f46371c.f36330a, aVar.e(this.f46368g), h10);
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
            a aVar = this.f46367f;
            h0Var.l(aVar.f46371c.f36330a, aVar.e(this.f46368g), h10);
            i10 -= h10;
            g(h10);
        }
    }
}
