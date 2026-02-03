package qd;

import android.util.SparseArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s0 {

    /* renamed from: c  reason: collision with root package name */
    private final ne.i f47600c;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f47599b = new SparseArray();

    /* renamed from: a  reason: collision with root package name */
    private int f47598a = -1;

    public s0(ne.i iVar) {
        this.f47600c = iVar;
    }

    public void a(int i10, Object obj) {
        boolean z10;
        boolean z11 = false;
        if (this.f47598a == -1) {
            if (this.f47599b.size() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            this.f47598a = 0;
        }
        if (this.f47599b.size() > 0) {
            SparseArray sparseArray = this.f47599b;
            int keyAt = sparseArray.keyAt(sparseArray.size() - 1);
            if (i10 >= keyAt) {
                z11 = true;
            }
            ne.a.a(z11);
            if (keyAt == i10) {
                ne.i iVar = this.f47600c;
                SparseArray sparseArray2 = this.f47599b;
                iVar.accept(sparseArray2.valueAt(sparseArray2.size() - 1));
            }
        }
        this.f47599b.append(i10, obj);
    }

    public void b() {
        for (int i10 = 0; i10 < this.f47599b.size(); i10++) {
            this.f47600c.accept(this.f47599b.valueAt(i10));
        }
        this.f47598a = -1;
        this.f47599b.clear();
    }

    public void c(int i10) {
        int i11;
        for (int size = this.f47599b.size() - 1; size >= 0 && i10 < this.f47599b.keyAt(size); size--) {
            this.f47600c.accept(this.f47599b.valueAt(size));
            this.f47599b.removeAt(size);
        }
        if (this.f47599b.size() > 0) {
            i11 = Math.min(this.f47598a, this.f47599b.size() - 1);
        } else {
            i11 = -1;
        }
        this.f47598a = i11;
    }

    public void d(int i10) {
        int i11 = 0;
        while (i11 < this.f47599b.size() - 1) {
            int i12 = i11 + 1;
            if (i10 >= this.f47599b.keyAt(i12)) {
                this.f47600c.accept(this.f47599b.valueAt(i11));
                this.f47599b.removeAt(i11);
                int i13 = this.f47598a;
                if (i13 > 0) {
                    this.f47598a = i13 - 1;
                }
                i11 = i12;
            } else {
                return;
            }
        }
    }

    public Object e(int i10) {
        if (this.f47598a == -1) {
            this.f47598a = 0;
        }
        while (true) {
            int i11 = this.f47598a;
            if (i11 <= 0 || i10 >= this.f47599b.keyAt(i11)) {
                break;
            }
            this.f47598a--;
        }
        while (this.f47598a < this.f47599b.size() - 1 && i10 >= this.f47599b.keyAt(this.f47598a + 1)) {
            this.f47598a++;
        }
        return this.f47599b.valueAt(this.f47598a);
    }

    public Object f() {
        SparseArray sparseArray = this.f47599b;
        return sparseArray.valueAt(sparseArray.size() - 1);
    }

    public boolean g() {
        if (this.f47599b.size() == 0) {
            return true;
        }
        return false;
    }
}
