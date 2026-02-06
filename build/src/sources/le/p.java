package le;

import java.util.Arrays;
import le.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f36130a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36131b;

    /* renamed from: c  reason: collision with root package name */
    private final byte[] f36132c;

    /* renamed from: d  reason: collision with root package name */
    private int f36133d;

    /* renamed from: e  reason: collision with root package name */
    private int f36134e;

    /* renamed from: f  reason: collision with root package name */
    private int f36135f;

    /* renamed from: g  reason: collision with root package name */
    private a[] f36136g;

    public p(boolean z10, int i10) {
        this(z10, i10, 0);
    }

    @Override // le.b
    public synchronized void a(b.a aVar) {
        while (aVar != null) {
            try {
                a[] aVarArr = this.f36136g;
                int i10 = this.f36135f;
                this.f36135f = i10 + 1;
                aVarArr[i10] = aVar.a();
                this.f36134e--;
                aVar = aVar.next();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        notifyAll();
    }

    @Override // le.b
    public synchronized void b(a aVar) {
        a[] aVarArr = this.f36136g;
        int i10 = this.f36135f;
        this.f36135f = i10 + 1;
        aVarArr[i10] = aVar;
        this.f36134e--;
        notifyAll();
    }

    @Override // le.b
    public synchronized a c() {
        a aVar;
        try {
            this.f36134e++;
            int i10 = this.f36135f;
            if (i10 > 0) {
                a[] aVarArr = this.f36136g;
                int i11 = i10 - 1;
                this.f36135f = i11;
                aVar = (a) ne.a.e(aVarArr[i11]);
                this.f36136g[this.f36135f] = null;
            } else {
                aVar = new a(new byte[this.f36131b], 0);
                int i12 = this.f36134e;
                a[] aVarArr2 = this.f36136g;
                if (i12 > aVarArr2.length) {
                    this.f36136g = (a[]) Arrays.copyOf(aVarArr2, aVarArr2.length * 2);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return aVar;
    }

    @Override // le.b
    public synchronized void d() {
        try {
            int i10 = 0;
            int max = Math.max(0, w0.l(this.f36133d, this.f36131b) - this.f36134e);
            int i11 = this.f36135f;
            if (max >= i11) {
                return;
            }
            if (this.f36132c != null) {
                int i12 = i11 - 1;
                while (i10 <= i12) {
                    a aVar = (a) ne.a.e(this.f36136g[i10]);
                    if (aVar.f36077a == this.f36132c) {
                        i10++;
                    } else {
                        a aVar2 = (a) ne.a.e(this.f36136g[i12]);
                        if (aVar2.f36077a != this.f36132c) {
                            i12--;
                        } else {
                            a[] aVarArr = this.f36136g;
                            aVarArr[i10] = aVar2;
                            aVarArr[i12] = aVar;
                            i12--;
                            i10++;
                        }
                    }
                }
                max = Math.max(max, i10);
                if (max >= this.f36135f) {
                    return;
                }
            }
            Arrays.fill(this.f36136g, max, this.f36135f, (Object) null);
            this.f36135f = max;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // le.b
    public int e() {
        return this.f36131b;
    }

    public synchronized int f() {
        return this.f36134e * this.f36131b;
    }

    public synchronized void g() {
        if (this.f36130a) {
            h(0);
        }
    }

    public synchronized void h(int i10) {
        boolean z10;
        if (i10 < this.f36133d) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f36133d = i10;
        if (z10) {
            d();
        }
    }

    public p(boolean z10, int i10, int i11) {
        ne.a.a(i10 > 0);
        ne.a.a(i11 >= 0);
        this.f36130a = z10;
        this.f36131b = i10;
        this.f36135f = i11;
        this.f36136g = new a[i11 + 100];
        if (i11 > 0) {
            this.f36132c = new byte[i11 * i10];
            for (int i12 = 0; i12 < i11; i12++) {
                this.f36136g[i12] = new a(this.f36132c, i12 * i10);
            }
            return;
        }
        this.f36132c = null;
    }
}
