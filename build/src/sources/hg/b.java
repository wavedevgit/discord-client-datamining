package hg;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class b extends c {

    /* renamed from: a  reason: collision with root package name */
    Object[] f25953a = new Object[4];

    /* renamed from: b  reason: collision with root package name */
    int f25954b = 0;

    /* renamed from: c  reason: collision with root package name */
    boolean f25955c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10) {
    }

    public final b a(Object obj) {
        int i10;
        obj.getClass();
        int length = this.f25953a.length;
        int i11 = this.f25954b;
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
            if (i10 > length || this.f25955c) {
                this.f25953a = Arrays.copyOf(this.f25953a, i10);
                this.f25955c = false;
            }
            Object[] objArr = this.f25953a;
            int i13 = this.f25954b;
            this.f25954b = i13 + 1;
            objArr[i13] = obj;
            return this;
        }
        throw new IllegalArgumentException("cannot store more than Integer.MAX_VALUE elements");
    }
}
