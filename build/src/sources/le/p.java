package le;

import java.util.Arrays;
import le.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f36810a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36811b;

    /* renamed from: c  reason: collision with root package name */
    private final byte[] f36812c;

    /* renamed from: d  reason: collision with root package name */
    private int f36813d;

    /* renamed from: e  reason: collision with root package name */
    private int f36814e;

    /* renamed from: f  reason: collision with root package name */
    private int f36815f;

    /* renamed from: g  reason: collision with root package name */
    private a[] f36816g;

    public p(boolean z10, int i10) {
        this(z10, i10, 0);
    }

    @Override // le.b
    public synchronized void a(b.a aVar) {
        while (aVar != null) {
            try {
                a[] aVarArr = this.f36816g;
                int i10 = this.f36815f;
                this.f36815f = i10 + 1;
                aVarArr[i10] = aVar.a();
                this.f36814e--;
                aVar = aVar.next();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        notifyAll();
    }

    @Override // le.b
    public synchronized void b(a aVar) {
        a[] aVarArr = this.f36816g;
        int i10 = this.f36815f;
        this.f36815f = i10 + 1;
        aVarArr[i10] = aVar;
        this.f36814e--;
        notifyAll();
    }

    @Override // le.b
    public synchronized a c() {
        a aVar;
        try {
            this.f36814e++;
            int i10 = this.f36815f;
            if (i10 > 0) {
                a[] aVarArr = this.f36816g;
                int i11 = i10 - 1;
                this.f36815f = i11;
                aVar = (a) ne.a.e(aVarArr[i11]);
                this.f36816g[this.f36815f] = null;
            } else {
                aVar = new a(new byte[this.f36811b], 0);
                int i12 = this.f36814e;
                a[] aVarArr2 = this.f36816g;
                if (i12 > aVarArr2.length) {
                    this.f36816g = (a[]) Arrays.copyOf(aVarArr2, aVarArr2.length * 2);
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
            int max = Math.max(0, w0.l(this.f36813d, this.f36811b) - this.f36814e);
            int i11 = this.f36815f;
            if (max >= i11) {
                return;
            }
            if (this.f36812c != null) {
                int i12 = i11 - 1;
                while (i10 <= i12) {
                    a aVar = (a) ne.a.e(this.f36816g[i10]);
                    if (aVar.f36757a == this.f36812c) {
                        i10++;
                    } else {
                        a aVar2 = (a) ne.a.e(this.f36816g[i12]);
                        if (aVar2.f36757a != this.f36812c) {
                            i12--;
                        } else {
                            a[] aVarArr = this.f36816g;
                            aVarArr[i10] = aVar2;
                            aVarArr[i12] = aVar;
                            i12--;
                            i10++;
                        }
                    }
                }
                max = Math.max(max, i10);
                if (max >= this.f36815f) {
                    return;
                }
            }
            Arrays.fill(this.f36816g, max, this.f36815f, (Object) null);
            this.f36815f = max;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // le.b
    public int e() {
        return this.f36811b;
    }

    public synchronized int f() {
        return this.f36814e * this.f36811b;
    }

    public synchronized void g() {
        if (this.f36810a) {
            h(0);
        }
    }

    public synchronized void h(int i10) {
        boolean z10;
        if (i10 < this.f36813d) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f36813d = i10;
        if (z10) {
            d();
        }
    }

    public p(boolean z10, int i10, int i11) {
        ne.a.a(i10 > 0);
        ne.a.a(i11 >= 0);
        this.f36810a = z10;
        this.f36811b = i10;
        this.f36815f = i11;
        this.f36816g = new a[i11 + 100];
        if (i11 > 0) {
            this.f36812c = new byte[i11 * i10];
            for (int i12 = 0; i12 < i11; i12++) {
                this.f36816g[i12] = new a(this.f36812c, i12 * i10);
            }
            return;
        }
        this.f36812c = null;
    }
}
