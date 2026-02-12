package mp;

import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContract;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 extends ActivityResultLauncher {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultContract f36574a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultCallback f36575b;

    /* renamed from: c  reason: collision with root package name */
    private ActivityResultLauncher f36576c;

    public f0(ActivityResultContract contract, ActivityResultCallback callback) {
        Intrinsics.checkNotNullParameter(contract, "contract");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f36574a = contract;
        this.f36575b = callback;
    }

    @Override // androidx.activity.result.ActivityResultLauncher
    public ActivityResultContract a() {
        return this.f36574a;
    }

    @Override // androidx.activity.result.ActivityResultLauncher
    public void c(Object obj, androidx.core.app.d dVar) {
        ActivityResultLauncher activityResultLauncher = this.f36576c;
        if (activityResultLauncher != null) {
            activityResultLauncher.c(obj, dVar);
        }
    }

    @Override // androidx.activity.result.ActivityResultLauncher
    public void d() {
        ActivityResultLauncher activityResultLauncher = this.f36576c;
        if (activityResultLauncher != null) {
            activityResultLauncher.d();
        }
    }

    public final void e(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        this.f36576c = activityResultCaller.registerForActivityResult(a(), this.f36575b);
    }
}
