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
    private final me.b f46931a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46932b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f46933c;

    /* renamed from: d  reason: collision with root package name */
    private a f46934d;

    /* renamed from: e  reason: collision with root package name */
    private a f46935e;

    /* renamed from: f  reason: collision with root package name */
    private a f46936f;

    /* renamed from: g  reason: collision with root package name */
    private long f46937g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        public long f46938a;

        /* renamed from: b  reason: collision with root package name */
        public long f46939b;

        /* renamed from: c  reason: collision with root package name */
        public me.a f46940c;

        /* renamed from: d  reason: collision with root package name */
        public a f46941d;

        public a(long j10, int i10) {
            d(j10, i10);
        }

        @Override // me.b.a
        public me.a a() {
            return (me.a) oe.a.e(this.f46940c);
        }

        public a b() {
            this.f46940c = null;
            a aVar = this.f46941d;
            this.f46941d = null;
            return aVar;
        }

        public void c(me.a aVar, a aVar2) {
            this.f46940c = aVar;
            this.f46941d = aVar2;
        }

        public void d(long j10, int i10) {
            boolean z10;
            if (this.f46940c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            this.f46938a = j10;
            this.f46939b = j10 + i10;
        }

        public int e(long j10) {
            return ((int) (j10 - this.f46938a)) + this.f46940c.f36900b;
        }

        @Override // me.b.a
        public b.a next() {
            a aVar = this.f46941d;
            if (aVar != null && aVar.f46940c != null) {
                return aVar;
            }
            return null;
        }
    }

    public j0(me.b bVar) {
        this.f46931a = bVar;
        int e10 = bVar.e();
        this.f46932b = e10;
        this.f46933c = new oe.h0(32);
        a aVar = new a(0L, e10);
        this.f46934d = aVar;
        this.f46935e = aVar;
        this.f46936f = aVar;
    }

    private void a(a aVar) {
        if (aVar.f46940c == null) {
            return;
        }
        this.f46931a.a(aVar);
        aVar.b();
    }

    private static a d(a aVar, long j10) {
        while (j10 >= aVar.f46939b) {
            aVar = aVar.f46941d;
        }
        return aVar;
    }

    private void g(int i10) {
        long j10 = this.f46937g + i10;
        this.f46937g = j10;
        a aVar = this.f46936f;
        if (j10 == aVar.f46939b) {
            this.f46936f = aVar.f46941d;
        }
    }

    private int h(int i10) {
        a aVar = this.f46936f;
        if (aVar.f46940c == null) {
            aVar.c(this.f46931a.b(), new a(this.f46936f.f46939b, this.f46932b));
        }
        return Math.min(i10, (int) (this.f46936f.f46939b - this.f46937g));
    }

    private static a i(a aVar, long j10, ByteBuffer byteBuffer, int i10) {
        a d10 = d(aVar, j10);
        while (i10 > 0) {
            int min = Math.min(i10, (int) (d10.f46939b - j10));
            byteBuffer.put(d10.f46940c.f36899a, d10.e(j10), min);
            i10 -= min;
            j10 += min;
            if (j10 == d10.f46939b) {
                d10 = d10.f46941d;
            }
        }
        return d10;
    }

    private static a j(a aVar, long j10, byte[] bArr, int i10) {
        a d10 = d(aVar, j10);
        int i11 = i10;
        while (i11 > 0) {
            int min = Math.min(i11, (int) (d10.f46939b - j10));
            System.arraycopy(d10.f46940c.f36899a, d10.e(j10), bArr, i10 - i11, min);
            i11 -= min;
            j10 += min;
            if (j10 == d10.f46939b) {
                d10 = d10.f46941d;
            }
        }
        return d10;
    }

    private static a k(a aVar, rc.f fVar, l0.b bVar, oe.h0 h0Var) {
        boolean z10;
        long j10 = bVar.f46970b;
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
        rc.c cVar = fVar.f46797e;
        byte[] bArr = cVar.f46785a;
        if (bArr == null) {
            cVar.f46785a = new byte[16];
        } else {
            Arrays.fill(bArr, (byte) 0);
        }
        a j13 = j(j11, j12, cVar.f46785a, i11);
        long j14 = j12 + i11;
        if (z10) {
            h0Var.Q(2);
            j13 = j(j13, j14, h0Var.e(), 2);
            j14 += 2;
            i10 = h0Var.N();
        }
        int i12 = i10;
        int[] iArr = cVar.f46788d;
        if (iArr == null || iArr.length < i12) {
            iArr = new int[i12];
        }
        int[] iArr2 = iArr;
        int[] iArr3 = cVar.f46789e;
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
            iArr4[0] = bVar.f46969a - ((int) (j14 - bVar.f46970b));
        }
        b0.a aVar2 = (b0.a) oe.w0.j(bVar.f46971c);
        cVar.c(i12, iArr2, iArr4, aVar2.f51183b, cVar.f46785a, aVar2.f51182a, aVar2.f51184c, aVar2.f51185d);
        long j15 = bVar.f46970b;
        int i15 = (int) (j14 - j15);
        bVar.f46970b = j15 + i15;
        bVar.f46969a -= i15;
        return j13;
    }

    private static a l(a aVar, rc.f fVar, l0.b bVar, oe.h0 h0Var) {
        if (fVar.w()) {
            aVar = k(aVar, fVar, bVar, h0Var);
        }
        if (fVar.l()) {
            h0Var.Q(4);
            a j10 = j(aVar, bVar.f46970b, h0Var.e(), 4);
            int L = h0Var.L();
            bVar.f46970b += 4;
            bVar.f46969a -= 4;
            fVar.u(L);
            a i10 = i(j10, bVar.f46970b, fVar.f46798i, L);
            bVar.f46970b += L;
            int i11 = bVar.f46969a - L;
            bVar.f46969a = i11;
            fVar.y(i11);
            return i(i10, bVar.f46970b, fVar.f46801q, bVar.f46969a);
        }
        fVar.u(bVar.f46969a);
        return i(aVar, bVar.f46970b, fVar.f46798i, bVar.f46969a);
    }

    public void b(long j10) {
        a aVar;
        if (j10 != -1) {
            while (true) {
                aVar = this.f46934d;
                if (j10 < aVar.f46939b) {
                    break;
                }
                this.f46931a.c(aVar.f46940c);
                this.f46934d = this.f46934d.b();
            }
            if (this.f46935e.f46938a < aVar.f46938a) {
                this.f46935e = aVar;
            }
        }
    }

    public void c(long j10) {
        boolean z10;
        if (j10 <= this.f46937g) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        this.f46937g = j10;
        if (j10 != 0) {
            a aVar = this.f46934d;
            if (j10 != aVar.f46938a) {
                while (this.f46937g > aVar.f46939b) {
                    aVar = aVar.f46941d;
                }
                a aVar2 = (a) oe.a.e(aVar.f46941d);
                a(aVar2);
                a aVar3 = new a(aVar.f46939b, this.f46932b);
                aVar.f46941d = aVar3;
                if (this.f46937g == aVar.f46939b) {
                    aVar = aVar3;
                }
                this.f46936f = aVar;
                if (this.f46935e == aVar2) {
                    this.f46935e = aVar3;
                    return;
                }
                return;
            }
        }
        a(this.f46934d);
        a aVar4 = new a(this.f46937g, this.f46932b);
        this.f46934d = aVar4;
        this.f46935e = aVar4;
        this.f46936f = aVar4;
    }

    public long e() {
        return this.f46937g;
    }

    public void f(rc.f fVar, l0.b bVar) {
        l(this.f46935e, fVar, bVar, this.f46933c);
    }

    public void m(rc.f fVar, l0.b bVar) {
        this.f46935e = l(this.f46935e, fVar, bVar, this.f46933c);
    }

    public void n() {
        a(this.f46934d);
        this.f46934d.d(0L, this.f46932b);
        a aVar = this.f46934d;
        this.f46935e = aVar;
        this.f46936f = aVar;
        this.f46937g = 0L;
        this.f46931a.d();
    }

    public void o() {
        this.f46935e = this.f46934d;
    }

    public int p(me.j jVar, int i10, boolean z10) {
        int h10 = h(i10);
        a aVar = this.f46936f;
        int read = jVar.read(aVar.f46940c.f36899a, aVar.e(this.f46937g), h10);
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
            a aVar = this.f46936f;
            h0Var.l(aVar.f46940c.f36899a, aVar.e(this.f46937g), h10);
            i10 -= h10;
            g(h10);
        }
    }
}
