package b2;

import android.util.SparseBooleanArray;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f6415d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SparseBooleanArray f6416e;

        a(SparseBooleanArray sparseBooleanArray) {
            this.f6416e = sparseBooleanArray;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f6415d < this.f6416e.size()) {
                return true;
            }
            return false;
        }

        @Override // kotlin.collections.m0
        public int nextInt() {
            SparseBooleanArray sparseBooleanArray = this.f6416e;
            int i10 = this.f6415d;
            this.f6415d = i10 + 1;
            return sparseBooleanArray.keyAt(i10);
        }
    }

    public static final m0 a(SparseBooleanArray sparseBooleanArray) {
        return new a(sparseBooleanArray);
    }
}
