package ff;

import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.api.internal.BasePendingResult;
import ef.g;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ BasePendingResult f24364a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ v f24365b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(v vVar, BasePendingResult basePendingResult) {
        this.f24365b = vVar;
        this.f24364a = basePendingResult;
    }

    @Override // ef.g.a
    public final void a(Status status) {
        Map map;
        map = this.f24365b.f24376a;
        map.remove(this.f24364a);
    }
}
