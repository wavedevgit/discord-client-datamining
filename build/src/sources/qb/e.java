package qb;

import com.facebook.soloader.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final h[] f45347a;

    /* renamed from: b  reason: collision with root package name */
    private int f45348b = 0;

    public e(h... hVarArr) {
        this.f45347a = hVarArr;
    }

    @Override // qb.h
    public boolean a(UnsatisfiedLinkError unsatisfiedLinkError, e0[] e0VarArr) {
        int i10;
        h[] hVarArr;
        do {
            i10 = this.f45348b;
            hVarArr = this.f45347a;
            if (i10 < hVarArr.length) {
                this.f45348b = i10 + 1;
            } else {
                return false;
            }
        } while (!hVarArr[i10].a(unsatisfiedLinkError, e0VarArr));
        return true;
    }
}
