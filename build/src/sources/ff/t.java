package ff;

import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.api.internal.BasePendingResult;
import ef.g;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ BasePendingResult f23956a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ v f23957b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(v vVar, BasePendingResult basePendingResult) {
        this.f23957b = vVar;
        this.f23956a = basePendingResult;
    }

    @Override // ef.g.a
    public final void a(Status status) {
        Map map;
        map = this.f23957b.f23968a;
        map.remove(this.f23956a);
    }
}
