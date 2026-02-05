package ff;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u implements OnCompleteListener {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ xg.k f22983a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ v f22984b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(v vVar, xg.k kVar) {
        this.f22984b = vVar;
        this.f22983a = kVar;
    }

    @Override // com.google.android.gms.tasks.OnCompleteListener
    public final void onComplete(Task task) {
        Map map;
        map = this.f22984b.f22994b;
        map.remove(this.f22983a);
    }
}
