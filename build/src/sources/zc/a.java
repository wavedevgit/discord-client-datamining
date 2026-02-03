package zc;

import java.util.ArrayDeque;
import lc.l0;
import tc.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f55658a = new byte[8];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f55659b = new ArrayDeque();

    /* renamed from: c  reason: collision with root package name */
    private final g f55660c = new g();

    /* renamed from: d  reason: collision with root package name */
    private zc.b f55661d;

    /* renamed from: e  reason: collision with root package name */
    private int f55662e;

    /* renamed from: f  reason: collision with root package name */
    private int f55663f;

    /* renamed from: g  reason: collision with root package name */
    private long f55664g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f55665a;

        /* renamed from: b  reason: collision with root package name */
        private final long f55666b;

        private b(int i10, long j10) {
            this.f55665a = i10;
            this.f55666b = j10;
        }
    }

    private long c(l lVar) {
        lVar.e();
        while (true) {
            lVar.n(this.f55658a, 0, 4);
            int c10 = g.c(this.f55658a[0]);
            if (c10 != -1 && c10 <= 4) {
                int a10 = (int) g.a(this.f55658a, c10, false);
                if (this.f55661d.f(a10)) {
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
        lVar.readFully(this.f55658a, 0, i10);
        long j10 = 0;
        for (int i11 = 0; i11 < i10; i11++) {
            j10 = (j10 << 8) | (this.f55658a[i11] & 255);
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

    @Override // zc.c
    public boolean a(l lVar) {
        ne.a.i(this.f55661d);
        while (true) {
            b bVar = (b) this.f55659b.peek();
            if (bVar != null && lVar.getPosition() >= bVar.f55666b) {
                this.f55661d.a(((b) this.f55659b.pop()).f55665a);
                return true;
            }
            if (this.f55662e == 0) {
                long d10 = this.f55660c.d(lVar, true, false, 4);
                if (d10 == -2) {
                    d10 = c(lVar);
                }
                if (d10 == -1) {
                    return false;
                }
                this.f55663f = (int) d10;
                this.f55662e = 1;
            }
            if (this.f55662e == 1) {
                this.f55664g = this.f55660c.d(lVar, false, true, 8);
                this.f55662e = 2;
            }
            int e10 = this.f55661d.e(this.f55663f);
            if (e10 != 0) {
                if (e10 != 1) {
                    if (e10 != 2) {
                        if (e10 != 3) {
                            if (e10 != 4) {
                                if (e10 == 5) {
                                    long j10 = this.f55664g;
                                    if (j10 != 4 && j10 != 8) {
                                        throw l0.a("Invalid float size: " + this.f55664g, null);
                                    }
                                    this.f55661d.c(this.f55663f, d(lVar, (int) j10));
                                    this.f55662e = 0;
                                    return true;
                                }
                                throw l0.a("Invalid element type " + e10, null);
                            }
                            this.f55661d.b(this.f55663f, (int) this.f55664g, lVar);
                            this.f55662e = 0;
                            return true;
                        }
                        long j11 = this.f55664g;
                        if (j11 <= 2147483647L) {
                            this.f55661d.g(this.f55663f, f(lVar, (int) j11));
                            this.f55662e = 0;
                            return true;
                        }
                        throw l0.a("String element size: " + this.f55664g, null);
                    }
                    long j12 = this.f55664g;
                    if (j12 <= 8) {
                        this.f55661d.d(this.f55663f, e(lVar, (int) j12));
                        this.f55662e = 0;
                        return true;
                    }
                    throw l0.a("Invalid integer size: " + this.f55664g, null);
                }
                long position = lVar.getPosition();
                this.f55659b.push(new b(this.f55663f, this.f55664g + position));
                this.f55661d.h(this.f55663f, position, this.f55664g);
                this.f55662e = 0;
                return true;
            }
            lVar.k((int) this.f55664g);
            this.f55662e = 0;
        }
    }

    @Override // zc.c
    public void b(zc.b bVar) {
        this.f55661d = bVar;
    }

    @Override // zc.c
    public void reset() {
        this.f55662e = 0;
        this.f55659b.clear();
        this.f55660c.e();
    }
}
