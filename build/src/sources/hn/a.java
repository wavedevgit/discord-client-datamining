package hn;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.savedstate.SavedStateRegistry;
import androidx.savedstate.SavedStateRegistryController;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements u3.f, LifecycleOwner {

    /* renamed from: d  reason: collision with root package name */
    private final String f28022d;

    /* renamed from: e  reason: collision with root package name */
    private final /* synthetic */ LifecycleOwner f28023e;

    /* renamed from: i  reason: collision with root package name */
    private final SavedStateRegistryController f28024i;

    public a(String key, LifecycleOwner lifecycleOwner) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(lifecycleOwner, "lifecycleOwner");
        this.f28022d = key;
        this.f28023e = lifecycleOwner;
        SavedStateRegistryController a10 = SavedStateRegistryController.a(this);
        Intrinsics.checkNotNullExpressionValue(a10, "create(this)");
        this.f28024i = a10;
    }

    public final SavedStateRegistryController a() {
        return this.f28024i;
    }

    public final String b() {
        return this.f28022d;
    }

    @Override // androidx.lifecycle.LifecycleOwner
    public Lifecycle getLifecycle() {
        return this.f28023e.getLifecycle();
    }

    @Override // u3.f
    public SavedStateRegistry getSavedStateRegistry() {
        SavedStateRegistry b10 = this.f28024i.b();
        Intrinsics.checkNotNullExpressionValue(b10, "controller.savedStateRegistry");
        return b10;
    }
}
