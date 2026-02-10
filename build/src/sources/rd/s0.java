package rd;

import android.util.SparseArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s0 {

    /* renamed from: c  reason: collision with root package name */
    private final oe.i f46482c;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f46481b = new SparseArray();

    /* renamed from: a  reason: collision with root package name */
    private int f46480a = -1;

    public s0(oe.i iVar) {
        this.f46482c = iVar;
    }

    public void a(int i10, Object obj) {
        boolean z10;
        boolean z11 = false;
        if (this.f46480a == -1) {
            if (this.f46481b.size() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            this.f46480a = 0;
        }
        if (this.f46481b.size() > 0) {
            SparseArray sparseArray = this.f46481b;
            int keyAt = sparseArray.keyAt(sparseArray.size() - 1);
            if (i10 >= keyAt) {
                z11 = true;
            }
            oe.a.a(z11);
            if (keyAt == i10) {
                oe.i iVar = this.f46482c;
                SparseArray sparseArray2 = this.f46481b;
                iVar.accept(sparseArray2.valueAt(sparseArray2.size() - 1));
            }
        }
        this.f46481b.append(i10, obj);
    }

    public void b() {
        for (int i10 = 0; i10 < this.f46481b.size(); i10++) {
            this.f46482c.accept(this.f46481b.valueAt(i10));
        }
        this.f46480a = -1;
        this.f46481b.clear();
    }

    public void c(int i10) {
        int i11;
        for (int size = this.f46481b.size() - 1; size >= 0 && i10 < this.f46481b.keyAt(size); size--) {
            this.f46482c.accept(this.f46481b.valueAt(size));
            this.f46481b.removeAt(size);
        }
        if (this.f46481b.size() > 0) {
            i11 = Math.min(this.f46480a, this.f46481b.size() - 1);
        } else {
            i11 = -1;
        }
        this.f46480a = i11;
    }

    public void d(int i10) {
        int i11 = 0;
        while (i11 < this.f46481b.size() - 1) {
            int i12 = i11 + 1;
            if (i10 >= this.f46481b.keyAt(i12)) {
                this.f46482c.accept(this.f46481b.valueAt(i11));
                this.f46481b.removeAt(i11);
                int i13 = this.f46480a;
                if (i13 > 0) {
                    this.f46480a = i13 - 1;
                }
                i11 = i12;
            } else {
                return;
            }
        }
    }

    public Object e(int i10) {
        if (this.f46480a == -1) {
            this.f46480a = 0;
        }
        while (true) {
            int i11 = this.f46480a;
            if (i11 <= 0 || i10 >= this.f46481b.keyAt(i11)) {
                break;
            }
            this.f46480a--;
        }
        while (this.f46480a < this.f46481b.size() - 1 && i10 >= this.f46481b.keyAt(this.f46480a + 1)) {
            this.f46480a++;
        }
        return this.f46481b.valueAt(this.f46480a);
    }

    public Object f() {
        SparseArray sparseArray = this.f46481b;
        return sparseArray.valueAt(sparseArray.size() - 1);
    }

    public boolean g() {
        if (this.f46481b.size() == 0) {
            return true;
        }
        return false;
    }
}
