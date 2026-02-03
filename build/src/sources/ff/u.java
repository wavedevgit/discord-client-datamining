package ff;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u implements OnCompleteListener {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ wg.k f24366a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ v f24367b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(v vVar, wg.k kVar) {
        this.f24367b = vVar;
        this.f24366a = kVar;
    }

    @Override // com.google.android.gms.tasks.OnCompleteListener
    public final void onComplete(Task task) {
        Map map;
        map = this.f24367b.f24377b;
        map.remove(this.f24366a);
    }
}
