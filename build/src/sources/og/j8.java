package og;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class j8 extends k9 {

    /* renamed from: a  reason: collision with root package name */
    Object[] f42161a = new Object[4];

    /* renamed from: b  reason: collision with root package name */
    int f42162b = 0;

    /* renamed from: c  reason: collision with root package name */
    boolean f42163c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j8(int i10) {
    }

    private final void b(int i10) {
        Object[] objArr = this.f42161a;
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
            this.f42161a = Arrays.copyOf(objArr, i11);
            this.f42163c = false;
        } else if (this.f42163c) {
            this.f42161a = (Object[]) objArr.clone();
            this.f42163c = false;
        }
    }

    public final j8 a(Object obj) {
        obj.getClass();
        b(this.f42162b + 1);
        Object[] objArr = this.f42161a;
        int i10 = this.f42162b;
        this.f42162b = i10 + 1;
        objArr[i10] = obj;
        return this;
    }
}
