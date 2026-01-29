package zh;

import android.app.Activity;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import com.google.android.gms.tasks.Task;
import com.google.android.play.core.common.PlayCoreDialogWrapperActivity;
import com.google.android.play.core.review.ReviewManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements ReviewManager {

    /* renamed from: a  reason: collision with root package name */
    private final l f55682a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f55683b = new Handler(Looper.getMainLooper());

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(l lVar) {
        this.f55682a = lVar;
    }

    @Override // com.google.android.play.core.review.ReviewManager
    public final Task a(Activity activity, b bVar) {
        if (bVar.b()) {
            return wg.m.f(null);
        }
        Intent intent = new Intent(activity, PlayCoreDialogWrapperActivity.class);
        intent.putExtra("confirmation_intent", bVar.a());
        intent.putExtra("window_flags", activity.getWindow().getDecorView().getWindowSystemUiVisibility());
        wg.k kVar = new wg.k();
        intent.putExtra("result_receiver", new f(this, this.f55683b, kVar));
        activity.startActivity(intent);
        return kVar.a();
    }

    @Override // com.google.android.play.core.review.ReviewManager
    public final Task b() {
        return this.f55682a.a();
    }
}
