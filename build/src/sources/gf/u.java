package gf;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u implements OnCompleteListener {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ zg.k f25669a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ v f25670b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(v vVar, zg.k kVar) {
        this.f25670b = vVar;
        this.f25669a = kVar;
    }

    @Override // com.google.android.gms.tasks.OnCompleteListener
    public final void onComplete(Task task) {
        Map map;
        map = this.f25670b.f25680b;
        map.remove(this.f25669a);
    }
}
