package gf;

import com.google.android.gms.common.api.Status;
import com.google.android.gms.common.api.internal.BasePendingResult;
import ff.g;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ BasePendingResult f25668a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ v f25669b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(v vVar, BasePendingResult basePendingResult) {
        this.f25669b = vVar;
        this.f25668a = basePendingResult;
    }

    @Override // ff.g.a
    public final void a(Status status) {
        Map map;
        map = this.f25669b.f25680a;
        map.remove(this.f25668a);
    }
}
