package hf;

import android.content.Context;
import android.util.SparseIntArray;
import ff.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h0 {

    /* renamed from: a  reason: collision with root package name */
    private final SparseIntArray f27255a = new SparseIntArray();

    /* renamed from: b  reason: collision with root package name */
    private com.google.android.gms.common.g f27256b;

    public h0(com.google.android.gms.common.g gVar) {
        q.l(gVar);
        this.f27256b = gVar;
    }

    public final int a(Context context, int i10) {
        return this.f27255a.get(i10, -1);
    }

    public final int b(Context context, a.f fVar) {
        q.l(context);
        q.l(fVar);
        int i10 = 0;
        if (!fVar.f()) {
            return 0;
        }
        int n10 = fVar.n();
        int a10 = a(context, n10);
        if (a10 != -1) {
            return a10;
        }
        int i11 = 0;
        while (true) {
            if (i11 < this.f27255a.size()) {
                int keyAt = this.f27255a.keyAt(i11);
                if (keyAt > n10 && this.f27255a.get(keyAt) == 0) {
                    break;
                }
                i11++;
            } else {
                i10 = -1;
                break;
            }
        }
        if (i10 == -1) {
            i10 = this.f27256b.h(context, n10);
        }
        this.f27255a.put(n10, i10);
        return i10;
    }

    public final void c() {
        this.f27255a.clear();
    }
}
