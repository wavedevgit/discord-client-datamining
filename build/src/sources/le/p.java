package le;

import java.util.Arrays;
import le.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f37227a;

    /* renamed from: b  reason: collision with root package name */
    private final int f37228b;

    /* renamed from: c  reason: collision with root package name */
    private final byte[] f37229c;

    /* renamed from: d  reason: collision with root package name */
    private int f37230d;

    /* renamed from: e  reason: collision with root package name */
    private int f37231e;

    /* renamed from: f  reason: collision with root package name */
    private int f37232f;

    /* renamed from: g  reason: collision with root package name */
    private a[] f37233g;

    public p(boolean z10, int i10) {
        this(z10, i10, 0);
    }

    @Override // le.b
    public synchronized void a(b.a aVar) {
        while (aVar != null) {
            try {
                a[] aVarArr = this.f37233g;
                int i10 = this.f37232f;
                this.f37232f = i10 + 1;
                aVarArr[i10] = aVar.a();
                this.f37231e--;
                aVar = aVar.next();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        notifyAll();
    }

    @Override // le.b
    public synchronized void b(a aVar) {
        a[] aVarArr = this.f37233g;
        int i10 = this.f37232f;
        this.f37232f = i10 + 1;
        aVarArr[i10] = aVar;
        this.f37231e--;
        notifyAll();
    }

    @Override // le.b
    public synchronized a c() {
        a aVar;
        try {
            this.f37231e++;
            int i10 = this.f37232f;
            if (i10 > 0) {
                a[] aVarArr = this.f37233g;
                int i11 = i10 - 1;
                this.f37232f = i11;
                aVar = (a) ne.a.e(aVarArr[i11]);
                this.f37233g[this.f37232f] = null;
            } else {
                aVar = new a(new byte[this.f37228b], 0);
                int i12 = this.f37231e;
                a[] aVarArr2 = this.f37233g;
                if (i12 > aVarArr2.length) {
                    this.f37233g = (a[]) Arrays.copyOf(aVarArr2, aVarArr2.length * 2);
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
            int max = Math.max(0, w0.l(this.f37230d, this.f37228b) - this.f37231e);
            int i11 = this.f37232f;
            if (max >= i11) {
                return;
            }
            if (this.f37229c != null) {
                int i12 = i11 - 1;
                while (i10 <= i12) {
                    a aVar = (a) ne.a.e(this.f37233g[i10]);
                    if (aVar.f37174a == this.f37229c) {
                        i10++;
                    } else {
                        a aVar2 = (a) ne.a.e(this.f37233g[i12]);
                        if (aVar2.f37174a != this.f37229c) {
                            i12--;
                        } else {
                            a[] aVarArr = this.f37233g;
                            aVarArr[i10] = aVar2;
                            aVarArr[i12] = aVar;
                            i12--;
                            i10++;
                        }
                    }
                }
                max = Math.max(max, i10);
                if (max >= this.f37232f) {
                    return;
                }
            }
            Arrays.fill(this.f37233g, max, this.f37232f, (Object) null);
            this.f37232f = max;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // le.b
    public int e() {
        return this.f37228b;
    }

    public synchronized int f() {
        return this.f37231e * this.f37228b;
    }

    public synchronized void g() {
        if (this.f37227a) {
            h(0);
        }
    }

    public synchronized void h(int i10) {
        boolean z10;
        if (i10 < this.f37230d) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f37230d = i10;
        if (z10) {
            d();
        }
    }

    public p(boolean z10, int i10, int i11) {
        ne.a.a(i10 > 0);
        ne.a.a(i11 >= 0);
        this.f37227a = z10;
        this.f37228b = i10;
        this.f37232f = i11;
        this.f37233g = new a[i11 + 100];
        if (i11 > 0) {
            this.f37229c = new byte[i11 * i10];
            for (int i12 = 0; i12 < i11; i12++) {
                this.f37233g[i12] = new a(this.f37229c, i12 * i10);
            }
            return;
        }
        this.f37229c = null;
    }
}
