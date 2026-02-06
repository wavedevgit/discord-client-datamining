package androidx.lifecycle;

import android.app.Application;
import android.os.Bundle;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.viewmodel.CreationExtras;
import androidx.savedstate.SavedStateRegistry;
import java.lang.reflect.Constructor;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j0 extends ViewModelProvider.d implements ViewModelProvider.Factory {

    /* renamed from: b  reason: collision with root package name */
    private Application f4947b;

    /* renamed from: c  reason: collision with root package name */
    private final ViewModelProvider.Factory f4948c;

    /* renamed from: d  reason: collision with root package name */
    private Bundle f4949d;

    /* renamed from: e  reason: collision with root package name */
    private Lifecycle f4950e;

    /* renamed from: f  reason: collision with root package name */
    private SavedStateRegistry f4951f;

    public j0(Application application, u3.f owner, Bundle bundle) {
        ViewModelProvider.a aVar;
        Intrinsics.checkNotNullParameter(owner, "owner");
        this.f4951f = owner.getSavedStateRegistry();
        this.f4950e = owner.getLifecycle();
        this.f4949d = bundle;
        this.f4947b = application;
        if (application != null) {
            aVar = ViewModelProvider.a.f4903f.a(application);
        } else {
            aVar = new ViewModelProvider.a();
        }
        this.f4948c = aVar;
    }

    @Override // androidx.lifecycle.ViewModelProvider.Factory
    public n0 a(Class modelClass, CreationExtras extras) {
        Constructor c10;
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        Intrinsics.checkNotNullParameter(extras, "extras");
        String str = (String) extras.a(ViewModelProvider.f4899c);
        if (str != null) {
            if (extras.a(e0.f4935a) != null && extras.a(e0.f4936b) != null) {
                Application application = (Application) extras.a(ViewModelProvider.a.f4905h);
                boolean isAssignableFrom = a.class.isAssignableFrom(modelClass);
                if (isAssignableFrom && application != null) {
                    c10 = k0.c(modelClass, k0.a());
                } else {
                    c10 = k0.c(modelClass, k0.b());
                }
                if (c10 == null) {
                    return this.f4948c.a(modelClass, extras);
                }
                if (isAssignableFrom && application != null) {
                    return k0.d(modelClass, c10, application, e0.a(extras));
                }
                return k0.d(modelClass, c10, e0.a(extras));
            } else if (this.f4950e != null) {
                return e(str, modelClass);
            } else {
                throw new IllegalStateException("SAVED_STATE_REGISTRY_OWNER_KEY andVIEW_MODEL_STORE_OWNER_KEY must be provided in the creation extras tosuccessfully create a ViewModel.");
            }
        }
        throw new IllegalStateException("VIEW_MODEL_KEY must always be provided by ViewModelProvider");
    }

    @Override // androidx.lifecycle.ViewModelProvider.Factory
    public n0 b(KClass modelClass, CreationExtras extras) {
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        Intrinsics.checkNotNullParameter(extras, "extras");
        return a(ds.a.b(modelClass), extras);
    }

    @Override // androidx.lifecycle.ViewModelProvider.Factory
    public n0 c(Class modelClass) {
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        String canonicalName = modelClass.getCanonicalName();
        if (canonicalName != null) {
            return e(canonicalName, modelClass);
        }
        throw new IllegalArgumentException("Local and anonymous classes can not be ViewModels");
    }

    @Override // androidx.lifecycle.ViewModelProvider.d
    public void d(n0 viewModel) {
        Intrinsics.checkNotNullParameter(viewModel, "viewModel");
        if (this.f4950e != null) {
            SavedStateRegistry savedStateRegistry = this.f4951f;
            Intrinsics.checkNotNull(savedStateRegistry);
            Lifecycle lifecycle = this.f4950e;
            Intrinsics.checkNotNull(lifecycle);
            i.a(viewModel, savedStateRegistry, lifecycle);
        }
    }

    public final n0 e(String key, Class modelClass) {
        Constructor c10;
        n0 d10;
        Application application;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        Lifecycle lifecycle = this.f4950e;
        if (lifecycle != null) {
            boolean isAssignableFrom = a.class.isAssignableFrom(modelClass);
            if (isAssignableFrom && this.f4947b != null) {
                c10 = k0.c(modelClass, k0.a());
            } else {
                c10 = k0.c(modelClass, k0.b());
            }
            if (c10 == null) {
                if (this.f4947b != null) {
                    return this.f4948c.c(modelClass);
                }
                return ViewModelProvider.c.f4907b.a().c(modelClass);
            }
            SavedStateRegistry savedStateRegistry = this.f4951f;
            Intrinsics.checkNotNull(savedStateRegistry);
            d0 b10 = i.b(savedStateRegistry, lifecycle, key, this.f4949d);
            if (isAssignableFrom && (application = this.f4947b) != null) {
                Intrinsics.checkNotNull(application);
                d10 = k0.d(modelClass, c10, application, b10.g());
            } else {
                d10 = k0.d(modelClass, c10, b10.g());
            }
            d10.a("androidx.lifecycle.savedstate.vm.tag", b10);
            return d10;
        }
        throw new UnsupportedOperationException("SavedStateViewModelFactory constructed with empty constructor supports only calls to create(modelClass: Class<T>, extras: CreationExtras).");
    }
}
