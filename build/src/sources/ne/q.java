package ne;

import android.util.SparseBooleanArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final SparseBooleanArray f38968a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final SparseBooleanArray f38969a = new SparseBooleanArray();

        /* renamed from: b  reason: collision with root package name */
        private boolean f38970b;

        public b a(int i10) {
            ne.a.g(!this.f38970b);
            this.f38969a.append(i10, true);
            return this;
        }

        public b b(q qVar) {
            for (int i10 = 0; i10 < qVar.d(); i10++) {
                a(qVar.c(i10));
            }
            return this;
        }

        public b c(int... iArr) {
            for (int i10 : iArr) {
                a(i10);
            }
            return this;
        }

        public b d(int i10, boolean z10) {
            if (z10) {
                return a(i10);
            }
            return this;
        }

        public q e() {
            ne.a.g(!this.f38970b);
            this.f38970b = true;
            return new q(this.f38969a);
        }
    }

    public boolean a(int i10) {
        return this.f38968a.get(i10);
    }

    public boolean b(int... iArr) {
        for (int i10 : iArr) {
            if (a(i10)) {
                return true;
            }
        }
        return false;
    }

    public int c(int i10) {
        ne.a.c(i10, 0, d());
        return this.f38968a.keyAt(i10);
    }

    public int d() {
        return this.f38968a.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof q)) {
            return false;
        }
        q qVar = (q) obj;
        if (w0.f39012a < 24) {
            if (d() != qVar.d()) {
                return false;
            }
            for (int i10 = 0; i10 < d(); i10++) {
                if (c(i10) != qVar.c(i10)) {
                    return false;
                }
            }
            return true;
        }
        return this.f38968a.equals(qVar.f38968a);
    }

    public int hashCode() {
        if (w0.f39012a < 24) {
            int d10 = d();
            for (int i10 = 0; i10 < d(); i10++) {
                d10 = (d10 * 31) + c(i10);
            }
            return d10;
        }
        return this.f38968a.hashCode();
    }

    private q(SparseBooleanArray sparseBooleanArray) {
        this.f38968a = sparseBooleanArray;
    }
}
