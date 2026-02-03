package androidx.core.view;

import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class MenuHostHelper {

    /* renamed from: a  reason: collision with root package name */
    private final Runnable f3283a;

    /* renamed from: b  reason: collision with root package name */
    private final CopyOnWriteArrayList f3284b = new CopyOnWriteArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final Map f3285c = new HashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Lifecycle f3286a;

        /* renamed from: b  reason: collision with root package name */
        private androidx.lifecycle.m f3287b;

        a(Lifecycle lifecycle, androidx.lifecycle.m mVar) {
            this.f3286a = lifecycle;
            this.f3287b = mVar;
            lifecycle.a(mVar);
        }

        void a() {
            this.f3286a.d(this.f3287b);
            this.f3287b = null;
        }
    }

    public MenuHostHelper(Runnable runnable) {
        this.f3283a = runnable;
    }

    public static /* synthetic */ void a(MenuHostHelper menuHostHelper, Lifecycle.State state, MenuProvider menuProvider, LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
        menuHostHelper.getClass();
        if (aVar == Lifecycle.a.f(state)) {
            menuHostHelper.c(menuProvider);
        } else if (aVar == Lifecycle.a.ON_DESTROY) {
            menuHostHelper.j(menuProvider);
        } else if (aVar == Lifecycle.a.d(state)) {
            menuHostHelper.f3284b.remove(menuProvider);
            menuHostHelper.f3283a.run();
        }
    }

    public static /* synthetic */ void b(MenuHostHelper menuHostHelper, MenuProvider menuProvider, LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
        menuHostHelper.getClass();
        if (aVar == Lifecycle.a.ON_DESTROY) {
            menuHostHelper.j(menuProvider);
        }
    }

    public void c(MenuProvider menuProvider) {
        this.f3284b.add(menuProvider);
        this.f3283a.run();
    }

    public void d(final MenuProvider menuProvider, LifecycleOwner lifecycleOwner) {
        c(menuProvider);
        Lifecycle lifecycle = lifecycleOwner.getLifecycle();
        a aVar = (a) this.f3285c.remove(menuProvider);
        if (aVar != null) {
            aVar.a();
        }
        this.f3285c.put(menuProvider, new a(lifecycle, new androidx.lifecycle.m() { // from class: androidx.core.view.p
            @Override // androidx.lifecycle.m
            public final void h(LifecycleOwner lifecycleOwner2, Lifecycle.a aVar2) {
                MenuHostHelper.b(MenuHostHelper.this, menuProvider, lifecycleOwner2, aVar2);
            }
        }));
    }

    public void e(final MenuProvider menuProvider, LifecycleOwner lifecycleOwner, final Lifecycle.State state) {
        Lifecycle lifecycle = lifecycleOwner.getLifecycle();
        a aVar = (a) this.f3285c.remove(menuProvider);
        if (aVar != null) {
            aVar.a();
        }
        this.f3285c.put(menuProvider, new a(lifecycle, new androidx.lifecycle.m() { // from class: androidx.core.view.o
            @Override // androidx.lifecycle.m
            public final void h(LifecycleOwner lifecycleOwner2, Lifecycle.a aVar2) {
                MenuHostHelper.a(MenuHostHelper.this, state, menuProvider, lifecycleOwner2, aVar2);
            }
        }));
    }

    public void f(Menu menu, MenuInflater menuInflater) {
        Iterator it = this.f3284b.iterator();
        while (it.hasNext()) {
            ((MenuProvider) it.next()).d(menu, menuInflater);
        }
    }

    public void g(Menu menu) {
        Iterator it = this.f3284b.iterator();
        while (it.hasNext()) {
            ((MenuProvider) it.next()).a(menu);
        }
    }

    public boolean h(MenuItem menuItem) {
        Iterator it = this.f3284b.iterator();
        while (it.hasNext()) {
            if (((MenuProvider) it.next()).c(menuItem)) {
                return true;
            }
        }
        return false;
    }

    public void i(Menu menu) {
        Iterator it = this.f3284b.iterator();
        while (it.hasNext()) {
            ((MenuProvider) it.next()).b(menu);
        }
    }

    public void j(MenuProvider menuProvider) {
        this.f3284b.remove(menuProvider);
        a aVar = (a) this.f3285c.remove(menuProvider);
        if (aVar != null) {
            aVar.a();
        }
        this.f3283a.run();
    }
}
