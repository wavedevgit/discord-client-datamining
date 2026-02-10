package qg;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i0 extends j0 {

    /* renamed from: a  reason: collision with root package name */
    Object[] f45879a = new Object[4];

    /* renamed from: b  reason: collision with root package name */
    int f45880b = 0;

    /* renamed from: c  reason: collision with root package name */
    boolean f45881c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(int i10) {
    }

    private final void b(int i10) {
        Object[] objArr = this.f45879a;
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
            this.f45879a = Arrays.copyOf(objArr, i11);
            this.f45881c = false;
        } else if (this.f45881c) {
            this.f45879a = (Object[]) objArr.clone();
            this.f45881c = false;
        }
    }

    public final i0 a(Object obj) {
        obj.getClass();
        b(this.f45880b + 1);
        Object[] objArr = this.f45879a;
        int i10 = this.f45880b;
        this.f45880b = i10 + 1;
        objArr[i10] = obj;
        return this;
    }
}
