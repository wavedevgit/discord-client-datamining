package zm;

import android.os.Bundle;
import android.view.View;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.m;
import androidx.lifecycle.r0;
import androidx.savedstate.SavedStateRegistry;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import lr.v;
import u3.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private Map f56079a;

    /* renamed from: b  reason: collision with root package name */
    private u3.f f56080b;

    /* renamed from: c  reason: collision with root package name */
    private String f56081c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f56082d = new LinkedHashMap();

    /* renamed from: e  reason: collision with root package name */
    private final a f56083e = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m {
        a() {
        }

        @Override // androidx.lifecycle.m
        public void h(LifecycleOwner source, Lifecycle.a event) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(event, "event");
            if (event == Lifecycle.a.ON_CREATE) {
                if (!f.this.i()) {
                    source.getLifecycle().d(this);
                    f fVar = f.this;
                    u3.f fVar2 = fVar.f56080b;
                    Intrinsics.checkNotNull(fVar2);
                    SavedStateRegistry savedStateRegistry = fVar2.getSavedStateRegistry();
                    String str = f.this.f56081c;
                    Intrinsics.checkNotNull(str);
                    fVar.k(savedStateRegistry.a(str));
                    return;
                }
                throw new IllegalStateException("Expected not to be observing lifecycle after restoration.");
            }
            throw new IllegalStateException(Intrinsics.stringPlus("Expected to receive ON_CREATE event before anything else, but got ", event).toString());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean i() {
        if (this.f56079a != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(Bundle bundle) {
        Set<String> keySet;
        if (this.f56079a == null) {
            this.f56079a = new LinkedHashMap();
            if (bundle != null && (keySet = bundle.keySet()) != null) {
                for (String str : keySet) {
                    Map map = this.f56079a;
                    Intrinsics.checkNotNull(map);
                    Bundle bundle2 = bundle.getBundle(str);
                    Intrinsics.checkNotNull(bundle2);
                    Pair a10 = v.a(str, bundle2);
                    map.put(a10.c(), a10.d());
                }
            }
            for (zm.a aVar : this.f56082d.values()) {
                if (aVar.getLifecycle().b() == Lifecycle.State.f4406e) {
                    l(aVar);
                }
            }
            return;
        }
        throw new IllegalStateException("Expected performRestore to be called only once.");
    }

    private final void l(zm.a aVar) {
        Map map = this.f56079a;
        if (map == null) {
            return;
        }
        aVar.a().d((Bundle) map.remove(aVar.b()));
    }

    private final void n(zm.a aVar) {
        Map map = this.f56079a;
        if (map == null) {
            return;
        }
        Bundle bundle = new Bundle();
        aVar.a().e(bundle);
        Pair a10 = v.a(aVar.b(), bundle);
        map.put(a10.c(), a10.d());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Bundle o() {
        Bundle bundle = new Bundle();
        Map map = this.f56079a;
        if (map != null) {
            for (zm.a aVar : this.f56082d.values()) {
                n(aVar);
            }
            for (Map.Entry entry : map.entrySet()) {
                bundle.putBundle((String) entry.getKey(), (Bundle) entry.getValue());
            }
        }
        return bundle;
    }

    public final void f(String key, u3.f parentOwner) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(parentOwner, "parentOwner");
        g();
        this.f56080b = parentOwner;
        this.f56081c = key;
        if (i()) {
            return;
        }
        SavedStateRegistry savedStateRegistry = parentOwner.getSavedStateRegistry();
        Intrinsics.checkNotNullExpressionValue(savedStateRegistry, "parentOwner.savedStateRegistry");
        Lifecycle lifecycle = parentOwner.getLifecycle();
        Intrinsics.checkNotNullExpressionValue(lifecycle, "parentOwner.lifecycle");
        try {
            savedStateRegistry.c(key, new SavedStateRegistry.b() { // from class: zm.e
                @Override // androidx.savedstate.SavedStateRegistry.b
                public final Bundle a() {
                    Bundle o10;
                    o10 = f.this.o();
                    return o10;
                }
            });
            lifecycle.a(this.f56083e);
        } catch (IllegalArgumentException e10) {
            throw new IllegalArgumentException("Error registering SavedStateProvider: key \"" + key + "\" is already in use on parent SavedStateRegistryOwner " + parentOwner + ".\nThis is most easily remedied by giving your container Screen rendering a unique Compatible.compatibilityKey, perhaps by wrapping it with Named.", e10);
        }
    }

    public final void g() {
        Lifecycle lifecycle;
        SavedStateRegistry savedStateRegistry;
        u3.f fVar = this.f56080b;
        if (fVar != null && (savedStateRegistry = fVar.getSavedStateRegistry()) != null) {
            String str = this.f56081c;
            Intrinsics.checkNotNull(str);
            savedStateRegistry.e(str);
        }
        u3.f fVar2 = this.f56080b;
        if (fVar2 != null && (lifecycle = fVar2.getLifecycle()) != null) {
            lifecycle.d(this.f56083e);
        }
        this.f56080b = null;
        this.f56081c = null;
    }

    public final void h(View view, String key) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(key, "key");
        LifecycleOwner a10 = r0.a(view);
        if (a10 != null) {
            zm.a aVar = new zm.a(key, a10);
            if (((zm.a) this.f56082d.put(key, aVar)) == null) {
                u3.f a11 = j.a(view);
                if (a11 == null) {
                    j.b(view, aVar);
                    l(aVar);
                    return;
                }
                throw new IllegalArgumentException(view + " already has ViewTreeSavedStateRegistryOwner: " + a11);
            }
            throw new IllegalArgumentException(key + " is already in use, it cannot be used to register " + view);
        }
        throw new IllegalArgumentException(("Expected " + view + '(' + key + ") to have a ViewTreeLifecycleOwner. Use WorkflowLifecycleOwner to fix that.").toString());
    }

    public final void j(Collection keysToKeep) {
        Intrinsics.checkNotNullParameter(keysToKeep, "keysToKeep");
        Collection collection = keysToKeep;
        for (String str : x0.j(this.f56082d.keySet(), collection)) {
            this.f56082d.remove(str);
        }
        Map map = this.f56079a;
        if (map == null) {
            return;
        }
        CollectionsKt.I(map.keySet(), x0.j(map.keySet(), collection));
    }

    public final void m(String key) {
        Unit unit;
        Intrinsics.checkNotNullParameter(key, "key");
        zm.a aVar = (zm.a) this.f56082d.remove(key);
        if (aVar == null) {
            unit = null;
        } else {
            n(aVar);
            unit = Unit.f32464a;
        }
        if (unit != null) {
            return;
        }
        throw new IllegalArgumentException(Intrinsics.stringPlus("No such child: ", key));
    }
}
