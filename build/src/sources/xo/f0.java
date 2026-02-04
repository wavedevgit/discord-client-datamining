package xo;

import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContract;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 extends ActivityResultLauncher {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultContract f53516a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultCallback f53517b;

    /* renamed from: c  reason: collision with root package name */
    private ActivityResultLauncher f53518c;

    public f0(ActivityResultContract contract, ActivityResultCallback callback) {
        Intrinsics.checkNotNullParameter(contract, "contract");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f53516a = contract;
        this.f53517b = callback;
    }

    @Override // androidx.activity.result.ActivityResultLauncher
    public ActivityResultContract a() {
        return this.f53516a;
    }

    @Override // androidx.activity.result.ActivityResultLauncher
    public void c(Object obj, androidx.core.app.d dVar) {
        ActivityResultLauncher activityResultLauncher = this.f53518c;
        if (activityResultLauncher != null) {
            activityResultLauncher.c(obj, dVar);
        }
    }

    @Override // androidx.activity.result.ActivityResultLauncher
    public void d() {
        ActivityResultLauncher activityResultLauncher = this.f53518c;
        if (activityResultLauncher != null) {
            activityResultLauncher.d();
        }
    }

    public final void e(d.b activityResultCaller) {
        Intrinsics.checkNotNullParameter(activityResultCaller, "activityResultCaller");
        this.f53518c = activityResultCaller.registerForActivityResult(a(), this.f53517b);
    }
}
