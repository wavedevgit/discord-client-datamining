package ff;

import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.api.internal.BasePendingResult;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v {

    /* renamed from: a  reason: collision with root package name */
    private final Map f23968a = Collections.synchronizedMap(new WeakHashMap());

    /* renamed from: b  reason: collision with root package name */
    private final Map f23969b = Collections.synchronizedMap(new WeakHashMap());

    private final void h(boolean z10, Status status) {
        HashMap hashMap;
        HashMap hashMap2;
        synchronized (this.f23968a) {
            hashMap = new HashMap(this.f23968a);
        }
        synchronized (this.f23969b) {
            hashMap2 = new HashMap(this.f23969b);
        }
        for (Map.Entry entry : hashMap.entrySet()) {
            if (z10 || ((Boolean) entry.getValue()).booleanValue()) {
                ((BasePendingResult) entry.getKey()).forceFailureUnlessReady(status);
            }
        }
        for (Map.Entry entry2 : hashMap2.entrySet()) {
            if (z10 || ((Boolean) entry2.getValue()).booleanValue()) {
                ((wg.k) entry2.getKey()).d(new ef.b(status));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(BasePendingResult basePendingResult, boolean z10) {
        this.f23968a.put(basePendingResult, Boolean.valueOf(z10));
        basePendingResult.addStatusListener(new t(this, basePendingResult));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void d(wg.k kVar, boolean z10) {
        this.f23969b.put(kVar, Boolean.valueOf(z10));
        kVar.a().addOnCompleteListener(new u(this, kVar));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void e(int i10, String str) {
        StringBuilder sb2 = new StringBuilder("The connection to Google Play services was lost");
        if (i10 == 1) {
            sb2.append(" due to service disconnection.");
        } else if (i10 == 3) {
            sb2.append(" due to dead object exception.");
        }
        if (str != null) {
            sb2.append(" Last reason for disconnect: ");
            sb2.append(str);
        }
        h(true, new Status(20, sb2.toString()));
    }

    public final void f() {
        h(false, e.A);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean g() {
        if (this.f23968a.isEmpty() && this.f23969b.isEmpty()) {
            return false;
        }
        return true;
    }
}
