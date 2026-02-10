package ad;

import java.util.ArrayDeque;
import mc.l0;
import uc.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f629a = new byte[8];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f630b = new ArrayDeque();

    /* renamed from: c  reason: collision with root package name */
    private final g f631c = new g();

    /* renamed from: d  reason: collision with root package name */
    private ad.b f632d;

    /* renamed from: e  reason: collision with root package name */
    private int f633e;

    /* renamed from: f  reason: collision with root package name */
    private int f634f;

    /* renamed from: g  reason: collision with root package name */
    private long f635g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f636a;

        /* renamed from: b  reason: collision with root package name */
        private final long f637b;

        private b(int i10, long j10) {
            this.f636a = i10;
            this.f637b = j10;
        }
    }

    private long c(l lVar) {
        lVar.e();
        while (true) {
            lVar.n(this.f629a, 0, 4);
            int c10 = g.c(this.f629a[0]);
            if (c10 != -1 && c10 <= 4) {
                int a10 = (int) g.a(this.f629a, c10, false);
                if (this.f632d.e(a10)) {
                    lVar.k(c10);
                    return a10;
                }
            }
            lVar.k(1);
        }
    }

    private double d(l lVar, int i10) {
        long e10 = e(lVar, i10);
        if (i10 == 4) {
            return Float.intBitsToFloat((int) e10);
        }
        return Double.longBitsToDouble(e10);
    }

    private long e(l lVar, int i10) {
        lVar.readFully(this.f629a, 0, i10);
        long j10 = 0;
        for (int i11 = 0; i11 < i10; i11++) {
            j10 = (j10 << 8) | (this.f629a[i11] & 255);
        }
        return j10;
    }

    private static String f(l lVar, int i10) {
        if (i10 == 0) {
            return "";
        }
        byte[] bArr = new byte[i10];
        lVar.readFully(bArr, 0, i10);
        while (i10 > 0 && bArr[i10 - 1] == 0) {
            i10--;
        }
        return new String(bArr, 0, i10);
    }

    @Override // ad.c
    public boolean a(l lVar) {
        oe.a.i(this.f632d);
        while (true) {
            b bVar = (b) this.f630b.peek();
            if (bVar != null && lVar.getPosition() >= bVar.f637b) {
                this.f632d.a(((b) this.f630b.pop()).f636a);
                return true;
            }
            if (this.f633e == 0) {
                long d10 = this.f631c.d(lVar, true, false, 4);
                if (d10 == -2) {
                    d10 = c(lVar);
                }
                if (d10 == -1) {
                    return false;
                }
                this.f634f = (int) d10;
                this.f633e = 1;
            }
            if (this.f633e == 1) {
                this.f635g = this.f631c.d(lVar, false, true, 8);
                this.f633e = 2;
            }
            int d11 = this.f632d.d(this.f634f);
            if (d11 != 0) {
                if (d11 != 1) {
                    if (d11 != 2) {
                        if (d11 != 3) {
                            if (d11 != 4) {
                                if (d11 == 5) {
                                    long j10 = this.f635g;
                                    if (j10 != 4 && j10 != 8) {
                                        throw l0.a("Invalid float size: " + this.f635g, null);
                                    }
                                    this.f632d.b(this.f634f, d(lVar, (int) j10));
                                    this.f633e = 0;
                                    return true;
                                }
                                throw l0.a("Invalid element type " + d11, null);
                            }
                            this.f632d.f(this.f634f, (int) this.f635g, lVar);
                            this.f633e = 0;
                            return true;
                        }
                        long j11 = this.f635g;
                        if (j11 <= 2147483647L) {
                            this.f632d.g(this.f634f, f(lVar, (int) j11));
                            this.f633e = 0;
                            return true;
                        }
                        throw l0.a("String element size: " + this.f635g, null);
                    }
                    long j12 = this.f635g;
                    if (j12 <= 8) {
                        this.f632d.c(this.f634f, e(lVar, (int) j12));
                        this.f633e = 0;
                        return true;
                    }
                    throw l0.a("Invalid integer size: " + this.f635g, null);
                }
                long position = lVar.getPosition();
                this.f630b.push(new b(this.f634f, this.f635g + position));
                this.f632d.h(this.f634f, position, this.f635g);
                this.f633e = 0;
                return true;
            }
            lVar.k((int) this.f635g);
            this.f633e = 0;
        }
    }

    @Override // ad.c
    public void b(ad.b bVar) {
        this.f632d = bVar;
    }

    @Override // ad.c
    public void reset() {
        this.f633e = 0;
        this.f630b.clear();
        this.f631c.e();
    }
}
