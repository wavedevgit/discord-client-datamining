package zc;

import java.util.ArrayDeque;
import lc.l0;
import tc.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a implements c {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f56161a = new byte[8];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayDeque f56162b = new ArrayDeque();

    /* renamed from: c  reason: collision with root package name */
    private final g f56163c = new g();

    /* renamed from: d  reason: collision with root package name */
    private zc.b f56164d;

    /* renamed from: e  reason: collision with root package name */
    private int f56165e;

    /* renamed from: f  reason: collision with root package name */
    private int f56166f;

    /* renamed from: g  reason: collision with root package name */
    private long f56167g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f56168a;

        /* renamed from: b  reason: collision with root package name */
        private final long f56169b;

        private b(int i10, long j10) {
            this.f56168a = i10;
            this.f56169b = j10;
        }
    }

    private long c(l lVar) {
        lVar.e();
        while (true) {
            lVar.n(this.f56161a, 0, 4);
            int c10 = g.c(this.f56161a[0]);
            if (c10 != -1 && c10 <= 4) {
                int a10 = (int) g.a(this.f56161a, c10, false);
                if (this.f56164d.f(a10)) {
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
        lVar.readFully(this.f56161a, 0, i10);
        long j10 = 0;
        for (int i11 = 0; i11 < i10; i11++) {
            j10 = (j10 << 8) | (this.f56161a[i11] & 255);
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
        ne.a.i(this.f56164d);
        while (true) {
            b bVar = (b) this.f56162b.peek();
            if (bVar != null && lVar.getPosition() >= bVar.f56169b) {
                this.f56164d.a(((b) this.f56162b.pop()).f56168a);
                return true;
            }
            if (this.f56165e == 0) {
                long d10 = this.f56163c.d(lVar, true, false, 4);
                if (d10 == -2) {
                    d10 = c(lVar);
                }
                if (d10 == -1) {
                    return false;
                }
                this.f56166f = (int) d10;
                this.f56165e = 1;
            }
            if (this.f56165e == 1) {
                this.f56167g = this.f56163c.d(lVar, false, true, 8);
                this.f56165e = 2;
            }
            int e10 = this.f56164d.e(this.f56166f);
            if (e10 != 0) {
                if (e10 != 1) {
                    if (e10 != 2) {
                        if (e10 != 3) {
                            if (e10 != 4) {
                                if (e10 == 5) {
                                    long j10 = this.f56167g;
                                    if (j10 != 4 && j10 != 8) {
                                        throw l0.a("Invalid float size: " + this.f56167g, null);
                                    }
                                    this.f56164d.c(this.f56166f, d(lVar, (int) j10));
                                    this.f56165e = 0;
                                    return true;
                                }
                                throw l0.a("Invalid element type " + e10, null);
                            }
                            this.f56164d.b(this.f56166f, (int) this.f56167g, lVar);
                            this.f56165e = 0;
                            return true;
                        }
                        long j11 = this.f56167g;
                        if (j11 <= 2147483647L) {
                            this.f56164d.g(this.f56166f, f(lVar, (int) j11));
                            this.f56165e = 0;
                            return true;
                        }
                        throw l0.a("String element size: " + this.f56167g, null);
                    }
                    long j12 = this.f56167g;
                    if (j12 <= 8) {
                        this.f56164d.d(this.f56166f, e(lVar, (int) j12));
                        this.f56165e = 0;
                        return true;
                    }
                    throw l0.a("Invalid integer size: " + this.f56167g, null);
                }
                long position = lVar.getPosition();
                this.f56162b.push(new b(this.f56166f, this.f56167g + position));
                this.f56164d.h(this.f56166f, position, this.f56167g);
                this.f56165e = 0;
                return true;
            }
            lVar.k((int) this.f56167g);
            this.f56165e = 0;
        }
    }

    @Override // zc.c
    public void b(zc.b bVar) {
        this.f56164d = bVar;
    }

    @Override // zc.c
    public void reset() {
        this.f56165e = 0;
        this.f56162b.clear();
        this.f56163c.e();
    }
}
