package pg;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j0 extends f0 {
    public j0() {
        super(4);
    }

    public final j0 a(Object obj) {
        obj.getClass();
        int i10 = this.f45313b;
        int i11 = i10 + 1;
        Object[] objArr = this.f45312a;
        int length = objArr.length;
        if (length < i11) {
            int i12 = length + (length >> 1) + 1;
            if (i12 < i11) {
                int highestOneBit = Integer.highestOneBit(i10);
                i12 = highestOneBit + highestOneBit;
            }
            if (i12 < 0) {
                i12 = Integer.MAX_VALUE;
            }
            this.f45312a = Arrays.copyOf(objArr, i12);
            this.f45314c = false;
        } else if (this.f45314c) {
            this.f45312a = (Object[]) objArr.clone();
            this.f45314c = false;
        }
        Object[] objArr2 = this.f45312a;
        int i13 = this.f45313b;
        this.f45313b = i13 + 1;
        objArr2[i13] = obj;
        return this;
    }

    public final m0 b() {
        this.f45314c = true;
        return m0.g(this.f45312a, this.f45313b);
    }
}
