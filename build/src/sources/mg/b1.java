package mg;

import java.util.Arrays;
import java.util.Collection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class b1 extends c1 {

    /* renamed from: a  reason: collision with root package name */
    Object[] f38103a = new Object[4];

    /* renamed from: b  reason: collision with root package name */
    int f38104b = 0;

    /* renamed from: c  reason: collision with root package name */
    boolean f38105c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b1(int i10) {
    }

    private final void d(int i10) {
        Object[] objArr = this.f38103a;
        int length = objArr.length;
        if (length < i10) {
            int i11 = length + (length >> 1) + 1;
            if (i11 < i10) {
                int highestOneBit = Integer.highestOneBit(i10 - 1);
                i11 = highestOneBit + highestOneBit;
            }
            if (i11 < 0) {
                i11 = Integer.MAX_VALUE;
            }
            this.f38103a = Arrays.copyOf(objArr, i11);
            this.f38105c = false;
        } else if (this.f38105c) {
            this.f38103a = (Object[]) objArr.clone();
            this.f38105c = false;
        }
    }

    public final b1 b(Object obj) {
        obj.getClass();
        d(this.f38104b + 1);
        Object[] objArr = this.f38103a;
        int i10 = this.f38104b;
        this.f38104b = i10 + 1;
        objArr[i10] = obj;
        return this;
    }

    public final c1 c(Iterable iterable) {
        if (iterable instanceof Collection) {
            Collection collection = (Collection) iterable;
            d(this.f38104b + collection.size());
            if (collection instanceof d1) {
                this.f38104b = ((d1) collection).b(this.f38103a, this.f38104b);
                return this;
            }
        }
        for (Object obj : iterable) {
            a(obj);
        }
        return this;
    }
}
