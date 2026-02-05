package le;

import java.util.Arrays;
import le.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f36737a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36738b;

    /* renamed from: c  reason: collision with root package name */
    private final byte[] f36739c;

    /* renamed from: d  reason: collision with root package name */
    private int f36740d;

    /* renamed from: e  reason: collision with root package name */
    private int f36741e;

    /* renamed from: f  reason: collision with root package name */
    private int f36742f;

    /* renamed from: g  reason: collision with root package name */
    private a[] f36743g;

    public p(boolean z10, int i10) {
        this(z10, i10, 0);
    }

    @Override // le.b
    public synchronized void a(b.a aVar) {
        while (aVar != null) {
            try {
                a[] aVarArr = this.f36743g;
                int i10 = this.f36742f;
                this.f36742f = i10 + 1;
                aVarArr[i10] = aVar.a();
                this.f36741e--;
                aVar = aVar.next();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        notifyAll();
    }

    @Override // le.b
    public synchronized void b(a aVar) {
        a[] aVarArr = this.f36743g;
        int i10 = this.f36742f;
        this.f36742f = i10 + 1;
        aVarArr[i10] = aVar;
        this.f36741e--;
        notifyAll();
    }

    @Override // le.b
    public synchronized a c() {
        a aVar;
        try {
            this.f36741e++;
            int i10 = this.f36742f;
            if (i10 > 0) {
                a[] aVarArr = this.f36743g;
                int i11 = i10 - 1;
                this.f36742f = i11;
                aVar = (a) ne.a.e(aVarArr[i11]);
                this.f36743g[this.f36742f] = null;
            } else {
                aVar = new a(new byte[this.f36738b], 0);
                int i12 = this.f36741e;
                a[] aVarArr2 = this.f36743g;
                if (i12 > aVarArr2.length) {
                    this.f36743g = (a[]) Arrays.copyOf(aVarArr2, aVarArr2.length * 2);
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
            int max = Math.max(0, w0.l(this.f36740d, this.f36738b) - this.f36741e);
            int i11 = this.f36742f;
            if (max >= i11) {
                return;
            }
            if (this.f36739c != null) {
                int i12 = i11 - 1;
                while (i10 <= i12) {
                    a aVar = (a) ne.a.e(this.f36743g[i10]);
                    if (aVar.f36684a == this.f36739c) {
                        i10++;
                    } else {
                        a aVar2 = (a) ne.a.e(this.f36743g[i12]);
                        if (aVar2.f36684a != this.f36739c) {
                            i12--;
                        } else {
                            a[] aVarArr = this.f36743g;
                            aVarArr[i10] = aVar2;
                            aVarArr[i12] = aVar;
                            i12--;
                            i10++;
                        }
                    }
                }
                max = Math.max(max, i10);
                if (max >= this.f36742f) {
                    return;
                }
            }
            Arrays.fill(this.f36743g, max, this.f36742f, (Object) null);
            this.f36742f = max;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // le.b
    public int e() {
        return this.f36738b;
    }

    public synchronized int f() {
        return this.f36741e * this.f36738b;
    }

    public synchronized void g() {
        if (this.f36737a) {
            h(0);
        }
    }

    public synchronized void h(int i10) {
        boolean z10;
        if (i10 < this.f36740d) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f36740d = i10;
        if (z10) {
            d();
        }
    }

    public p(boolean z10, int i10, int i11) {
        ne.a.a(i10 > 0);
        ne.a.a(i11 >= 0);
        this.f36737a = z10;
        this.f36738b = i10;
        this.f36742f = i11;
        this.f36743g = new a[i11 + 100];
        if (i11 > 0) {
            this.f36739c = new byte[i11 * i10];
            for (int i12 = 0; i12 < i11; i12++) {
                this.f36743g[i12] = new a(this.f36739c, i12 * i10);
            }
            return;
        }
        this.f36739c = null;
    }
}
