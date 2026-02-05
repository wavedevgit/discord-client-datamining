package qd;

import android.util.SparseArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s0 {

    /* renamed from: c  reason: collision with root package name */
    private final ne.i f47814c;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f47813b = new SparseArray();

    /* renamed from: a  reason: collision with root package name */
    private int f47812a = -1;

    public s0(ne.i iVar) {
        this.f47814c = iVar;
    }

    public void a(int i10, Object obj) {
        boolean z10;
        boolean z11 = false;
        if (this.f47812a == -1) {
            if (this.f47813b.size() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            this.f47812a = 0;
        }
        if (this.f47813b.size() > 0) {
            SparseArray sparseArray = this.f47813b;
            int keyAt = sparseArray.keyAt(sparseArray.size() - 1);
            if (i10 >= keyAt) {
                z11 = true;
            }
            ne.a.a(z11);
            if (keyAt == i10) {
                ne.i iVar = this.f47814c;
                SparseArray sparseArray2 = this.f47813b;
                iVar.accept(sparseArray2.valueAt(sparseArray2.size() - 1));
            }
        }
        this.f47813b.append(i10, obj);
    }

    public void b() {
        for (int i10 = 0; i10 < this.f47813b.size(); i10++) {
            this.f47814c.accept(this.f47813b.valueAt(i10));
        }
        this.f47812a = -1;
        this.f47813b.clear();
    }

    public void c(int i10) {
        int i11;
        for (int size = this.f47813b.size() - 1; size >= 0 && i10 < this.f47813b.keyAt(size); size--) {
            this.f47814c.accept(this.f47813b.valueAt(size));
            this.f47813b.removeAt(size);
        }
        if (this.f47813b.size() > 0) {
            i11 = Math.min(this.f47812a, this.f47813b.size() - 1);
        } else {
            i11 = -1;
        }
        this.f47812a = i11;
    }

    public void d(int i10) {
        int i11 = 0;
        while (i11 < this.f47813b.size() - 1) {
            int i12 = i11 + 1;
            if (i10 >= this.f47813b.keyAt(i12)) {
                this.f47814c.accept(this.f47813b.valueAt(i11));
                this.f47813b.removeAt(i11);
                int i13 = this.f47812a;
                if (i13 > 0) {
                    this.f47812a = i13 - 1;
                }
                i11 = i12;
            } else {
                return;
            }
        }
    }

    public Object e(int i10) {
        if (this.f47812a == -1) {
            this.f47812a = 0;
        }
        while (true) {
            int i11 = this.f47812a;
            if (i11 <= 0 || i10 >= this.f47813b.keyAt(i11)) {
                break;
            }
            this.f47812a--;
        }
        while (this.f47812a < this.f47813b.size() - 1 && i10 >= this.f47813b.keyAt(this.f47812a + 1)) {
            this.f47812a++;
        }
        return this.f47813b.valueAt(this.f47812a);
    }

    public Object f() {
        SparseArray sparseArray = this.f47813b;
        return sparseArray.valueAt(sparseArray.size() - 1);
    }

    public boolean g() {
        if (this.f47813b.size() == 0) {
            return true;
        }
        return false;
    }
}
