package ff;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u implements OnCompleteListener {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ wg.k f23958a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ v f23959b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(v vVar, wg.k kVar) {
        this.f23959b = vVar;
        this.f23958a = kVar;
    }

    @Override // com.google.android.gms.tasks.OnCompleteListener
    public final void onComplete(Task task) {
        Map map;
        map = this.f23959b.f23969b;
        map.remove(this.f23958a);
    }
}
