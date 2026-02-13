package rd;

import android.util.SparseArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s0 {

    /* renamed from: c  reason: collision with root package name */
    private final oe.i f47051c;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f47050b = new SparseArray();

    /* renamed from: a  reason: collision with root package name */
    private int f47049a = -1;

    public s0(oe.i iVar) {
        this.f47051c = iVar;
    }

    public void a(int i10, Object obj) {
        boolean z10;
        boolean z11 = false;
        if (this.f47049a == -1) {
            if (this.f47050b.size() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            this.f47049a = 0;
        }
        if (this.f47050b.size() > 0) {
            SparseArray sparseArray = this.f47050b;
            int keyAt = sparseArray.keyAt(sparseArray.size() - 1);
            if (i10 >= keyAt) {
                z11 = true;
            }
            oe.a.a(z11);
            if (keyAt == i10) {
                oe.i iVar = this.f47051c;
                SparseArray sparseArray2 = this.f47050b;
                iVar.accept(sparseArray2.valueAt(sparseArray2.size() - 1));
            }
        }
        this.f47050b.append(i10, obj);
    }

    public void b() {
        for (int i10 = 0; i10 < this.f47050b.size(); i10++) {
            this.f47051c.accept(this.f47050b.valueAt(i10));
        }
        this.f47049a = -1;
        this.f47050b.clear();
    }

    public void c(int i10) {
        int i11;
        for (int size = this.f47050b.size() - 1; size >= 0 && i10 < this.f47050b.keyAt(size); size--) {
            this.f47051c.accept(this.f47050b.valueAt(size));
            this.f47050b.removeAt(size);
        }
        if (this.f47050b.size() > 0) {
            i11 = Math.min(this.f47049a, this.f47050b.size() - 1);
        } else {
            i11 = -1;
        }
        this.f47049a = i11;
    }

    public void d(int i10) {
        int i11 = 0;
        while (i11 < this.f47050b.size() - 1) {
            int i12 = i11 + 1;
            if (i10 >= this.f47050b.keyAt(i12)) {
                this.f47051c.accept(this.f47050b.valueAt(i11));
                this.f47050b.removeAt(i11);
                int i13 = this.f47049a;
                if (i13 > 0) {
                    this.f47049a = i13 - 1;
                }
                i11 = i12;
            } else {
                return;
            }
        }
    }

    public Object e(int i10) {
        if (this.f47049a == -1) {
            this.f47049a = 0;
        }
        while (true) {
            int i11 = this.f47049a;
            if (i11 <= 0 || i10 >= this.f47050b.keyAt(i11)) {
                break;
            }
            this.f47049a--;
        }
        while (this.f47049a < this.f47050b.size() - 1 && i10 >= this.f47050b.keyAt(this.f47049a + 1)) {
            this.f47049a++;
        }
        return this.f47050b.valueAt(this.f47049a);
    }

    public Object f() {
        SparseArray sparseArray = this.f47050b;
        return sparseArray.valueAt(sparseArray.size() - 1);
    }

    public boolean g() {
        if (this.f47050b.size() == 0) {
            return true;
        }
        return false;
    }
}
