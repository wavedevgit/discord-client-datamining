package me;

import java.util.Arrays;
import me.b;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f36952a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36953b;

    /* renamed from: c  reason: collision with root package name */
    private final byte[] f36954c;

    /* renamed from: d  reason: collision with root package name */
    private int f36955d;

    /* renamed from: e  reason: collision with root package name */
    private int f36956e;

    /* renamed from: f  reason: collision with root package name */
    private int f36957f;

    /* renamed from: g  reason: collision with root package name */
    private a[] f36958g;

    public p(boolean z10, int i10) {
        this(z10, i10, 0);
    }

    @Override // me.b
    public synchronized void a(b.a aVar) {
        while (aVar != null) {
            try {
                a[] aVarArr = this.f36958g;
                int i10 = this.f36957f;
                this.f36957f = i10 + 1;
                aVarArr[i10] = aVar.a();
                this.f36956e--;
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
            this.f36956e++;
            int i10 = this.f36957f;
            if (i10 > 0) {
                a[] aVarArr = this.f36958g;
                int i11 = i10 - 1;
                this.f36957f = i11;
                aVar = (a) oe.a.e(aVarArr[i11]);
                this.f36958g[this.f36957f] = null;
            } else {
                aVar = new a(new byte[this.f36953b], 0);
                int i12 = this.f36956e;
                a[] aVarArr2 = this.f36958g;
                if (i12 > aVarArr2.length) {
                    this.f36958g = (a[]) Arrays.copyOf(aVarArr2, aVarArr2.length * 2);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return aVar;
    }

    @Override // me.b
    public synchronized void c(a aVar) {
        a[] aVarArr = this.f36958g;
        int i10 = this.f36957f;
        this.f36957f = i10 + 1;
        aVarArr[i10] = aVar;
        this.f36956e--;
        notifyAll();
    }

    @Override // me.b
    public synchronized void d() {
        try {
            int i10 = 0;
            int max = Math.max(0, w0.l(this.f36955d, this.f36953b) - this.f36956e);
            int i11 = this.f36957f;
            if (max >= i11) {
                return;
            }
            if (this.f36954c != null) {
                int i12 = i11 - 1;
                while (i10 <= i12) {
                    a aVar = (a) oe.a.e(this.f36958g[i10]);
                    if (aVar.f36899a == this.f36954c) {
                        i10++;
                    } else {
                        a aVar2 = (a) oe.a.e(this.f36958g[i12]);
                        if (aVar2.f36899a != this.f36954c) {
                            i12--;
                        } else {
                            a[] aVarArr = this.f36958g;
                            aVarArr[i10] = aVar2;
                            aVarArr[i12] = aVar;
                            i12--;
                            i10++;
                        }
                    }
                }
                max = Math.max(max, i10);
                if (max >= this.f36957f) {
                    return;
                }
            }
            Arrays.fill(this.f36958g, max, this.f36957f, (Object) null);
            this.f36957f = max;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // me.b
    public int e() {
        return this.f36953b;
    }

    public synchronized int f() {
        return this.f36956e * this.f36953b;
    }

    public synchronized void g() {
        if (this.f36952a) {
            h(0);
        }
    }

    public synchronized void h(int i10) {
        boolean z10;
        if (i10 < this.f36955d) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f36955d = i10;
        if (z10) {
            d();
        }
    }

    public p(boolean z10, int i10, int i11) {
        oe.a.a(i10 > 0);
        oe.a.a(i11 >= 0);
        this.f36952a = z10;
        this.f36953b = i10;
        this.f36957f = i11;
        this.f36958g = new a[i11 + 100];
        if (i11 > 0) {
            this.f36954c = new byte[i11 * i10];
            for (int i12 = 0; i12 < i11; i12++) {
                this.f36958g[i12] = new a(this.f36954c, i12 * i10);
            }
            return;
        }
        this.f36954c = null;
    }
}
