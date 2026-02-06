package ff;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u implements OnCompleteListener {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ yg.k f23284a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ v f23285b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(v vVar, yg.k kVar) {
        this.f23285b = vVar;
        this.f23284a = kVar;
    }

    @Override // com.google.android.gms.tasks.OnCompleteListener
    public final void onComplete(Task task) {
        Map map;
        map = this.f23285b.f23295b;
        map.remove(this.f23284a);
    }
}
