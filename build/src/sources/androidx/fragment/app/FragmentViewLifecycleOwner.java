package androidx.fragment.app;

import android.app.Application;
import android.content.Context;
import android.content.ContextWrapper;
import android.os.Bundle;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleRegistry;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStore;
import androidx.lifecycle.viewmodel.CreationExtras;
import androidx.savedstate.SavedStateRegistry;
import androidx.savedstate.SavedStateRegistryController;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FragmentViewLifecycleOwner implements androidx.lifecycle.h, u3.f, androidx.lifecycle.q0 {

    /* renamed from: d  reason: collision with root package name */
    private final Fragment f4313d;

    /* renamed from: e  reason: collision with root package name */
    private final ViewModelStore f4314e;

    /* renamed from: i  reason: collision with root package name */
    private final Runnable f4315i;

    /* renamed from: o  reason: collision with root package name */
    private ViewModelProvider.Factory f4316o;

    /* renamed from: p  reason: collision with root package name */
    private LifecycleRegistry f4317p = null;

    /* renamed from: q  reason: collision with root package name */
    private SavedStateRegistryController f4318q = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public FragmentViewLifecycleOwner(Fragment fragment, ViewModelStore viewModelStore, Runnable runnable) {
        this.f4313d = fragment;
        this.f4314e = viewModelStore;
        this.f4315i = runnable;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(Lifecycle.a aVar) {
        this.f4317p.j(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        if (this.f4317p == null) {
            this.f4317p = new LifecycleRegistry(this);
            SavedStateRegistryController a10 = SavedStateRegistryController.a(this);
            this.f4318q = a10;
            a10.c();
            this.f4315i.run();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean c() {
        if (this.f4317p != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Bundle bundle) {
        this.f4318q.d(bundle);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Bundle bundle) {
        this.f4318q.e(bundle);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(Lifecycle.State state) {
        this.f4317p.o(state);
    }

    @Override // androidx.lifecycle.h
    public CreationExtras getDefaultViewModelCreationExtras() {
        Application application;
        Context applicationContext = this.f4313d.requireContext().getApplicationContext();
        while (true) {
            if (applicationContext instanceof ContextWrapper) {
                if (applicationContext instanceof Application) {
                    application = (Application) applicationContext;
                    break;
                }
                applicationContext = ((ContextWrapper) applicationContext).getBaseContext();
            } else {
                application = null;
                break;
            }
        }
        androidx.lifecycle.viewmodel.a aVar = new androidx.lifecycle.viewmodel.a();
        if (application != null) {
            aVar.c(ViewModelProvider.a.f4602h, application);
        }
        aVar.c(androidx.lifecycle.e0.f4632a, this.f4313d);
        aVar.c(androidx.lifecycle.e0.f4633b, this);
        if (this.f4313d.getArguments() != null) {
            aVar.c(androidx.lifecycle.e0.f4634c, this.f4313d.getArguments());
        }
        return aVar;
    }

    @Override // androidx.lifecycle.h
    public ViewModelProvider.Factory getDefaultViewModelProviderFactory() {
        Application application;
        ViewModelProvider.Factory defaultViewModelProviderFactory = this.f4313d.getDefaultViewModelProviderFactory();
        if (!defaultViewModelProviderFactory.equals(this.f4313d.mDefaultFactory)) {
            this.f4316o = defaultViewModelProviderFactory;
            return defaultViewModelProviderFactory;
        }
        if (this.f4316o == null) {
            Context applicationContext = this.f4313d.requireContext().getApplicationContext();
            while (true) {
                if (applicationContext instanceof ContextWrapper) {
                    if (applicationContext instanceof Application) {
                        application = (Application) applicationContext;
                        break;
                    }
                    applicationContext = ((ContextWrapper) applicationContext).getBaseContext();
                } else {
                    application = null;
                    break;
                }
            }
            Fragment fragment = this.f4313d;
            this.f4316o = new androidx.lifecycle.j0(application, fragment, fragment.getArguments());
        }
        return this.f4316o;
    }

    @Override // androidx.lifecycle.LifecycleOwner
    public Lifecycle getLifecycle() {
        b();
        return this.f4317p;
    }

    @Override // u3.f
    public SavedStateRegistry getSavedStateRegistry() {
        b();
        return this.f4318q.b();
    }

    @Override // androidx.lifecycle.q0
    public ViewModelStore getViewModelStore() {
        b();
        return this.f4314e;
    }
}
