package b2;

import android.util.SparseBooleanArray;
import kotlin.collections.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends m0 {

        /* renamed from: d  reason: collision with root package name */
        private int f6386d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SparseBooleanArray f6387e;

        a(SparseBooleanArray sparseBooleanArray) {
            this.f6387e = sparseBooleanArray;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f6386d < this.f6387e.size()) {
                return true;
            }
            return false;
        }

        @Override // kotlin.collections.m0
        public int nextInt() {
            SparseBooleanArray sparseBooleanArray = this.f6387e;
            int i10 = this.f6386d;
            this.f6386d = i10 + 1;
            return sparseBooleanArray.keyAt(i10);
        }
    }

    public static final m0 a(SparseBooleanArray sparseBooleanArray) {
        return new a(sparseBooleanArray);
    }
}
