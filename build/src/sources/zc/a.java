package zc;

import java.util.ArrayDeque;
import lc.l0;
import tc.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f56113a = new byte[8];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f56114b = new ArrayDeque();

    /* renamed from: c  reason: collision with root package name */
    private final g f56115c = new g();

    /* renamed from: d  reason: collision with root package name */
    private zc.b f56116d;

    /* renamed from: e  reason: collision with root package name */
    private int f56117e;

    /* renamed from: f  reason: collision with root package name */
    private int f56118f;

    /* renamed from: g  reason: collision with root package name */
    private long f56119g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f56120a;

        /* renamed from: b  reason: collision with root package name */
        private final long f56121b;

        private b(int i10, long j10) {
            this.f56120a = i10;
            this.f56121b = j10;
        }
    }

    private long c(l lVar) {
        lVar.e();
        while (true) {
            lVar.n(this.f56113a, 0, 4);
            int c10 = g.c(this.f56113a[0]);
            if (c10 != -1 && c10 <= 4) {
                int a10 = (int) g.a(this.f56113a, c10, false);
                if (this.f56116d.f(a10)) {
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
        lVar.readFully(this.f56113a, 0, i10);
        long j10 = 0;
        for (int i11 = 0; i11 < i10; i11++) {
            j10 = (j10 << 8) | (this.f56113a[i11] & 255);
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
        ne.a.i(this.f56116d);
        while (true) {
            b bVar = (b) this.f56114b.peek();
            if (bVar != null && lVar.getPosition() >= bVar.f56121b) {
                this.f56116d.a(((b) this.f56114b.pop()).f56120a);
                return true;
            }
            if (this.f56117e == 0) {
                long d10 = this.f56115c.d(lVar, true, false, 4);
                if (d10 == -2) {
                    d10 = c(lVar);
                }
                if (d10 == -1) {
                    return false;
                }
                this.f56118f = (int) d10;
                this.f56117e = 1;
            }
            if (this.f56117e == 1) {
                this.f56119g = this.f56115c.d(lVar, false, true, 8);
                this.f56117e = 2;
            }
            int e10 = this.f56116d.e(this.f56118f);
            if (e10 != 0) {
                if (e10 != 1) {
                    if (e10 != 2) {
                        if (e10 != 3) {
                            if (e10 != 4) {
                                if (e10 == 5) {
                                    long j10 = this.f56119g;
                                    if (j10 != 4 && j10 != 8) {
                                        throw l0.a("Invalid float size: " + this.f56119g, null);
                                    }
                                    this.f56116d.c(this.f56118f, d(lVar, (int) j10));
                                    this.f56117e = 0;
                                    return true;
                                }
                                throw l0.a("Invalid element type " + e10, null);
                            }
                            this.f56116d.b(this.f56118f, (int) this.f56119g, lVar);
                            this.f56117e = 0;
                            return true;
                        }
                        long j11 = this.f56119g;
                        if (j11 <= 2147483647L) {
                            this.f56116d.g(this.f56118f, f(lVar, (int) j11));
                            this.f56117e = 0;
                            return true;
                        }
                        throw l0.a("String element size: " + this.f56119g, null);
                    }
                    long j12 = this.f56119g;
                    if (j12 <= 8) {
                        this.f56116d.d(this.f56118f, e(lVar, (int) j12));
                        this.f56117e = 0;
                        return true;
                    }
                    throw l0.a("Invalid integer size: " + this.f56119g, null);
                }
                long position = lVar.getPosition();
                this.f56114b.push(new b(this.f56118f, this.f56119g + position));
                this.f56116d.h(this.f56118f, position, this.f56119g);
                this.f56117e = 0;
                return true;
            }
            lVar.k((int) this.f56119g);
            this.f56117e = 0;
        }
    }

    @Override // zc.c
    public void b(zc.b bVar) {
        this.f56116d = bVar;
    }

    @Override // zc.c
    public void reset() {
        this.f56117e = 0;
        this.f56114b.clear();
        this.f56115c.e();
    }
}
