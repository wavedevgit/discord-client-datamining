package le;

import java.util.Arrays;
import le.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f37341a;

    /* renamed from: b  reason: collision with root package name */
    private final int f37342b;

    /* renamed from: c  reason: collision with root package name */
    private final byte[] f37343c;

    /* renamed from: d  reason: collision with root package name */
    private int f37344d;

    /* renamed from: e  reason: collision with root package name */
    private int f37345e;

    /* renamed from: f  reason: collision with root package name */
    private int f37346f;

    /* renamed from: g  reason: collision with root package name */
    private a[] f37347g;

    public p(boolean z10, int i10) {
        this(z10, i10, 0);
    }

    @Override // le.b
    public synchronized void a(b.a aVar) {
        while (aVar != null) {
            try {
                a[] aVarArr = this.f37347g;
                int i10 = this.f37346f;
                this.f37346f = i10 + 1;
                aVarArr[i10] = aVar.a();
                this.f37345e--;
                aVar = aVar.next();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        notifyAll();
    }

    @Override // le.b
    public synchronized void b(a aVar) {
        a[] aVarArr = this.f37347g;
        int i10 = this.f37346f;
        this.f37346f = i10 + 1;
        aVarArr[i10] = aVar;
        this.f37345e--;
        notifyAll();
    }

    @Override // le.b
    public synchronized a c() {
        a aVar;
        try {
            this.f37345e++;
            int i10 = this.f37346f;
            if (i10 > 0) {
                a[] aVarArr = this.f37347g;
                int i11 = i10 - 1;
                this.f37346f = i11;
                aVar = (a) ne.a.e(aVarArr[i11]);
                this.f37347g[this.f37346f] = null;
            } else {
                aVar = new a(new byte[this.f37342b], 0);
                int i12 = this.f37345e;
                a[] aVarArr2 = this.f37347g;
                if (i12 > aVarArr2.length) {
                    this.f37347g = (a[]) Arrays.copyOf(aVarArr2, aVarArr2.length * 2);
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
            int max = Math.max(0, w0.l(this.f37344d, this.f37342b) - this.f37345e);
            int i11 = this.f37346f;
            if (max >= i11) {
                return;
            }
            if (this.f37343c != null) {
                int i12 = i11 - 1;
                while (i10 <= i12) {
                    a aVar = (a) ne.a.e(this.f37347g[i10]);
                    if (aVar.f37288a == this.f37343c) {
                        i10++;
                    } else {
                        a aVar2 = (a) ne.a.e(this.f37347g[i12]);
                        if (aVar2.f37288a != this.f37343c) {
                            i12--;
                        } else {
                            a[] aVarArr = this.f37347g;
                            aVarArr[i10] = aVar2;
                            aVarArr[i12] = aVar;
                            i12--;
                            i10++;
                        }
                    }
                }
                max = Math.max(max, i10);
                if (max >= this.f37346f) {
                    return;
                }
            }
            Arrays.fill(this.f37347g, max, this.f37346f, (Object) null);
            this.f37346f = max;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // le.b
    public int e() {
        return this.f37342b;
    }

    public synchronized int f() {
        return this.f37345e * this.f37342b;
    }

    public synchronized void g() {
        if (this.f37341a) {
            h(0);
        }
    }

    public synchronized void h(int i10) {
        boolean z10;
        if (i10 < this.f37344d) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f37344d = i10;
        if (z10) {
            d();
        }
    }

    public p(boolean z10, int i10, int i11) {
        ne.a.a(i10 > 0);
        ne.a.a(i11 >= 0);
        this.f37341a = z10;
        this.f37342b = i10;
        this.f37346f = i11;
        this.f37347g = new a[i11 + 100];
        if (i11 > 0) {
            this.f37343c = new byte[i11 * i10];
            for (int i12 = 0; i12 < i11; i12++) {
                this.f37347g[i12] = new a(this.f37343c, i12 * i10);
            }
            return;
        }
        this.f37343c = null;
    }
}
