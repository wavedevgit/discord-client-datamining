package androidx.lifecycle;

import android.os.Bundle;
import androidx.lifecycle.Lifecycle;
import androidx.savedstate.SavedStateRegistry;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public static final i f4533a = new i();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements SavedStateRegistry.a {
        @Override // androidx.savedstate.SavedStateRegistry.a
        public void a(u3.f owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            if (owner instanceof q0) {
                ViewModelStore viewModelStore = ((q0) owner).getViewModelStore();
                SavedStateRegistry savedStateRegistry = owner.getSavedStateRegistry();
                for (String str : viewModelStore.c()) {
                    n0 b10 = viewModelStore.b(str);
                    if (b10 != null) {
                        i.a(b10, savedStateRegistry, owner.getLifecycle());
                    }
                }
                if (!viewModelStore.c().isEmpty()) {
                    savedStateRegistry.d(a.class);
                    return;
                }
                return;
            }
            throw new IllegalStateException(("Internal error: OnRecreation should be registered only on components that implement ViewModelStoreOwner. Received owner: " + owner).toString());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements m {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Lifecycle f4534d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ SavedStateRegistry f4535e;

        b(Lifecycle lifecycle, SavedStateRegistry savedStateRegistry) {
            this.f4534d = lifecycle;
            this.f4535e = savedStateRegistry;
        }

        @Override // androidx.lifecycle.m
        public void h(LifecycleOwner source, Lifecycle.a event) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(event, "event");
            if (event == Lifecycle.a.ON_START) {
                this.f4534d.d(this);
                this.f4535e.d(a.class);
            }
        }
    }

    private i() {
    }

    public static final void a(n0 viewModel, SavedStateRegistry registry, Lifecycle lifecycle) {
        Intrinsics.checkNotNullParameter(viewModel, "viewModel");
        Intrinsics.checkNotNullParameter(registry, "registry");
        Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
        d0 d0Var = (d0) viewModel.c("androidx.lifecycle.savedstate.vm.tag");
        if (d0Var != null && !d0Var.x()) {
            d0Var.a(registry, lifecycle);
            f4533a.c(registry, lifecycle);
        }
    }

    public static final d0 b(SavedStateRegistry registry, Lifecycle lifecycle, String str, Bundle bundle) {
        Intrinsics.checkNotNullParameter(registry, "registry");
        Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
        Intrinsics.checkNotNull(str);
        d0 d0Var = new d0(str, b0.f4505c.a(registry.a(str), bundle));
        d0Var.a(registry, lifecycle);
        f4533a.c(registry, lifecycle);
        return d0Var;
    }

    private final void c(SavedStateRegistry savedStateRegistry, Lifecycle lifecycle) {
        Lifecycle.State b10 = lifecycle.b();
        if (b10 != Lifecycle.State.f4437e && !b10.d(Lifecycle.State.f4439o)) {
            lifecycle.a(new b(lifecycle, savedStateRegistry));
        } else {
            savedStateRegistry.d(a.class);
        }
    }
}
