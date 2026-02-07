package sd;

import ne.y;
import qd.l0;
import sd.g;
import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements g.b {

    /* renamed from: a  reason: collision with root package name */
    private final int[] f49913a;

    /* renamed from: b  reason: collision with root package name */
    private final l0[] f49914b;

    public c(int[] iArr, l0[] l0VarArr) {
        this.f49913a = iArr;
        this.f49914b = l0VarArr;
    }

    public int[] a() {
        int[] iArr = new int[this.f49914b.length];
        int i10 = 0;
        while (true) {
            l0[] l0VarArr = this.f49914b;
            if (i10 < l0VarArr.length) {
                iArr[i10] = l0VarArr[i10].G();
                i10++;
            } else {
                return iArr;
            }
        }
    }

    public void b(long j10) {
        for (l0 l0Var : this.f49914b) {
            l0Var.Z(j10);
        }
    }

    @Override // sd.g.b
    public b0 c(int i10, int i11) {
        int i12 = 0;
        while (true) {
            int[] iArr = this.f49913a;
            if (i12 < iArr.length) {
                if (i11 == iArr[i12]) {
                    return this.f49914b[i12];
                }
                i12++;
            } else {
                y.c("BaseMediaChunkOutput", "Unmatched track of type: " + i11);
                return new tc.j();
            }
        }
    }
}
