package pb;

import com.facebook.soloader.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final h[] f45100a;

    /* renamed from: b  reason: collision with root package name */
    private int f45101b = 0;

    public e(h... hVarArr) {
        this.f45100a = hVarArr;
    }

    @Override // pb.h
    public boolean a(UnsatisfiedLinkError unsatisfiedLinkError, e0[] e0VarArr) {
        int i10;
        h[] hVarArr;
        do {
            i10 = this.f45101b;
            hVarArr = this.f45100a;
            if (i10 < hVarArr.length) {
                this.f45101b = i10 + 1;
            } else {
                return false;
            }
        } while (!hVarArr[i10].a(unsatisfiedLinkError, e0VarArr));
        return true;
    }
}
