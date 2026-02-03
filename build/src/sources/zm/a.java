package zm;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.savedstate.SavedStateRegistry;
import androidx.savedstate.SavedStateRegistryController;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements u3.f, LifecycleOwner {

    /* renamed from: d  reason: collision with root package name */
    private final String f56065d;

    /* renamed from: e  reason: collision with root package name */
    private final /* synthetic */ LifecycleOwner f56066e;

    /* renamed from: i  reason: collision with root package name */
    private final SavedStateRegistryController f56067i;

    public a(String key, LifecycleOwner lifecycleOwner) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(lifecycleOwner, "lifecycleOwner");
        this.f56065d = key;
        this.f56066e = lifecycleOwner;
        SavedStateRegistryController a10 = SavedStateRegistryController.a(this);
        Intrinsics.checkNotNullExpressionValue(a10, "create(this)");
        this.f56067i = a10;
    }

    public final SavedStateRegistryController a() {
        return this.f56067i;
    }

    public final String b() {
        return this.f56065d;
    }

    @Override // androidx.lifecycle.LifecycleOwner
    public Lifecycle getLifecycle() {
        return this.f56066e.getLifecycle();
    }

    @Override // u3.f
    public SavedStateRegistry getSavedStateRegistry() {
        SavedStateRegistry b10 = this.f56067i.b();
        Intrinsics.checkNotNullExpressionValue(b10, "controller.savedStateRegistry");
        return b10;
    }
}
