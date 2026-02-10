package me;

import java.util.Arrays;
import me.b;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f37008a;

    /* renamed from: b  reason: collision with root package name */
    private final int f37009b;

    /* renamed from: c  reason: collision with root package name */
    private final byte[] f37010c;

    /* renamed from: d  reason: collision with root package name */
    private int f37011d;

    /* renamed from: e  reason: collision with root package name */
    private int f37012e;

    /* renamed from: f  reason: collision with root package name */
    private int f37013f;

    /* renamed from: g  reason: collision with root package name */
    private a[] f37014g;

    public p(boolean z10, int i10) {
        this(z10, i10, 0);
    }

    @Override // me.b
    public synchronized void a(b.a aVar) {
        while (aVar != null) {
            try {
                a[] aVarArr = this.f37014g;
                int i10 = this.f37013f;
                this.f37013f = i10 + 1;
                aVarArr[i10] = aVar.a();
                this.f37012e--;
                aVar = aVar.next();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        notifyAll();
    }

    @Override // me.b
    public synchronized a b() {
        a aVar;
        try {
            this.f37012e++;
            int i10 = this.f37013f;
            if (i10 > 0) {
                a[] aVarArr = this.f37014g;
                int i11 = i10 - 1;
                this.f37013f = i11;
                aVar = (a) oe.a.e(aVarArr[i11]);
                this.f37014g[this.f37013f] = null;
            } else {
                aVar = new a(new byte[this.f37009b], 0);
                int i12 = this.f37012e;
                a[] aVarArr2 = this.f37014g;
                if (i12 > aVarArr2.length) {
                    this.f37014g = (a[]) Arrays.copyOf(aVarArr2, aVarArr2.length * 2);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return aVar;
    }

    @Override // me.b
    public synchronized void c(a aVar) {
        a[] aVarArr = this.f37014g;
        int i10 = this.f37013f;
        this.f37013f = i10 + 1;
        aVarArr[i10] = aVar;
        this.f37012e--;
        notifyAll();
    }

    @Override // me.b
    public synchronized void d() {
        try {
            int i10 = 0;
            int max = Math.max(0, w0.l(this.f37011d, this.f37009b) - this.f37012e);
            int i11 = this.f37013f;
            if (max >= i11) {
                return;
            }
            if (this.f37010c != null) {
                int i12 = i11 - 1;
                while (i10 <= i12) {
                    a aVar = (a) oe.a.e(this.f37014g[i10]);
                    if (aVar.f36955a == this.f37010c) {
                        i10++;
                    } else {
                        a aVar2 = (a) oe.a.e(this.f37014g[i12]);
                        if (aVar2.f36955a != this.f37010c) {
                            i12--;
                        } else {
                            a[] aVarArr = this.f37014g;
                            aVarArr[i10] = aVar2;
                            aVarArr[i12] = aVar;
                            i12--;
                            i10++;
                        }
                    }
                }
                max = Math.max(max, i10);
                if (max >= this.f37013f) {
                    return;
                }
            }
            Arrays.fill(this.f37014g, max, this.f37013f, (Object) null);
            this.f37013f = max;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // me.b
    public int e() {
        return this.f37009b;
    }

    public synchronized int f() {
        return this.f37012e * this.f37009b;
    }

    public synchronized void g() {
        if (this.f37008a) {
            h(0);
        }
    }

    public synchronized void h(int i10) {
        boolean z10;
        if (i10 < this.f37011d) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f37011d = i10;
        if (z10) {
            d();
        }
    }

    public p(boolean z10, int i10, int i11) {
        oe.a.a(i10 > 0);
        oe.a.a(i11 >= 0);
        this.f37008a = z10;
        this.f37009b = i10;
        this.f37013f = i11;
        this.f37014g = new a[i11 + 100];
        if (i11 > 0) {
            this.f37010c = new byte[i11 * i10];
            for (int i12 = 0; i12 < i11; i12++) {
                this.f37014g[i12] = new a(this.f37010c, i12 * i10);
            }
            return;
        }
        this.f37010c = null;
    }
}
