package ig;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class b extends c {

    /* renamed from: a  reason: collision with root package name */
    Object[] f27935a = new Object[4];

    /* renamed from: b  reason: collision with root package name */
    int f27936b = 0;

    /* renamed from: c  reason: collision with root package name */
    boolean f27937c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10) {
    }

    public final b a(Object obj) {
        int i10;
        obj.getClass();
        int length = this.f27935a.length;
        int i11 = this.f27936b;
        int i12 = i11 + 1;
        if (i12 >= 0) {
            if (i12 <= length) {
                i10 = length;
            } else {
                i10 = (length >> 1) + length + 1;
                if (i10 < i12) {
                    int highestOneBit = Integer.highestOneBit(i11);
                    i10 = highestOneBit + highestOneBit;
                }
                if (i10 < 0) {
                    i10 = Integer.MAX_VALUE;
                }
            }
            if (i10 > length || this.f27937c) {
                this.f27935a = Arrays.copyOf(this.f27935a, i10);
                this.f27937c = false;
            }
            Object[] objArr = this.f27935a;
            int i13 = this.f27936b;
            this.f27936b = i13 + 1;
            objArr[i13] = obj;
            return this;
        }
        throw new IllegalArgumentException("cannot store more than Integer.MAX_VALUE elements");
    }
}
