package td;

import oe.y;
import rd.l0;
import td.g;
import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements g.b {

    /* renamed from: a  reason: collision with root package name */
    private final int[] f49255a;

    /* renamed from: b  reason: collision with root package name */
    private final l0[] f49256b;

    public c(int[] iArr, l0[] l0VarArr) {
        this.f49255a = iArr;
        this.f49256b = l0VarArr;
    }

    public int[] a() {
        int[] iArr = new int[this.f49256b.length];
        int i10 = 0;
        while (true) {
            l0[] l0VarArr = this.f49256b;
            if (i10 < l0VarArr.length) {
                iArr[i10] = l0VarArr[i10].G();
                i10++;
            } else {
                return iArr;
            }
        }
    }

    public void b(long j10) {
        for (l0 l0Var : this.f49256b) {
            l0Var.Z(j10);
        }
    }

    @Override // td.g.b
    public b0 c(int i10, int i11) {
        int i12 = 0;
        while (true) {
            int[] iArr = this.f49255a;
            if (i12 < iArr.length) {
                if (i11 == iArr[i12]) {
                    return this.f49256b[i12];
                }
                i12++;
            } else {
                y.c("BaseMediaChunkOutput", "Unmatched track of type: " + i11);
                return new uc.j();
            }
        }
    }
}
