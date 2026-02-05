package ap;

import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContract;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 extends ActivityResultLauncher {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultContract f5936a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultCallback f5937b;

    /* renamed from: c  reason: collision with root package name */
    private ActivityResultLauncher f5938c;

    public f0(ActivityResultContract contract, ActivityResultCallback callback) {
        Intrinsics.checkNotNullParameter(contract, "contract");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f5936a = contract;
        this.f5937b = callback;
    }

    @Override // androidx.activity.result.ActivityResultLauncher
    public ActivityResultContract a() {
        return this.f5936a;
    }

    @Override // androidx.activity.result.ActivityResultLauncher
    public void c(Object obj, androidx.core.app.d dVar) {
        ActivityResultLauncher activityResultLauncher = this.f5938c;
        if (activityResultLauncher != null) {
            activityResultLauncher.c(obj, dVar);
        }
    }

    @Override // androidx.activity.result.ActivityResultLauncher
    public void d() {
        ActivityResultLauncher activityResultLauncher = this.f5938c;
        if (activityResultLauncher != null) {
            activityResultLauncher.d();
        }
    }

    public final void e(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        this.f5938c = activityResultCaller.registerForActivityResult(a(), this.f5937b);
    }
}
