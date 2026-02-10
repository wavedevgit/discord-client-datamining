package qk;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final a f45452a;

    /* renamed from: b  reason: collision with root package name */
    private final List f45453b;

    public d(a aVar) {
        this.f45452a = aVar;
        ArrayList arrayList = new ArrayList();
        this.f45453b = arrayList;
        arrayList.add(new b(aVar, new int[]{1}));
    }

    private b a(int i10) {
        if (i10 >= this.f45453b.size()) {
            List list = this.f45453b;
            b bVar = (b) list.get(list.size() - 1);
            for (int size = this.f45453b.size(); size <= i10; size++) {
                a aVar = this.f45452a;
                bVar = bVar.i(new b(aVar, new int[]{1, aVar.c((size - 1) + aVar.d())}));
                this.f45453b.add(bVar);
            }
        }
        return (b) this.f45453b.get(i10);
    }

    public void b(int[] iArr, int i10) {
        if (i10 != 0) {
            int length = iArr.length - i10;
            if (length > 0) {
                b a10 = a(i10);
                int[] iArr2 = new int[length];
                System.arraycopy(iArr, 0, iArr2, 0, length);
                int[] e10 = new b(this.f45452a, iArr2).j(i10, 1).b(a10)[1].e();
                int length2 = i10 - e10.length;
                for (int i11 = 0; i11 < length2; i11++) {
                    iArr[length + i11] = 0;
                }
                System.arraycopy(e10, 0, iArr, length + length2, e10.length);
                return;
            }
            throw new IllegalArgumentException("No data bytes provided");
        }
        throw new IllegalArgumentException("No error correction bytes");
    }
}
