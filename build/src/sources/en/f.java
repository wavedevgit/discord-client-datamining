package en;

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
import qr.v;
import u3.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private Map f21679a;

    /* renamed from: b  reason: collision with root package name */
    private u3.f f21680b;

    /* renamed from: c  reason: collision with root package name */
    private String f21681c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f21682d = new LinkedHashMap();

    /* renamed from: e  reason: collision with root package name */
    private final a f21683e = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m {
        a() {
        }

        @Override // androidx.lifecycle.m
        public void k(LifecycleOwner source, Lifecycle.a event) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(event, "event");
            if (event == Lifecycle.a.ON_CREATE) {
                if (!f.this.i()) {
                    source.getLifecycle().d(this);
                    f fVar = f.this;
                    u3.f fVar2 = fVar.f21680b;
                    Intrinsics.checkNotNull(fVar2);
                    SavedStateRegistry savedStateRegistry = fVar2.getSavedStateRegistry();
                    String str = f.this.f21681c;
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
        if (this.f21679a != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(Bundle bundle) {
        Set<String> keySet;
        if (this.f21679a == null) {
            this.f21679a = new LinkedHashMap();
            if (bundle != null && (keySet = bundle.keySet()) != null) {
                for (String str : keySet) {
                    Map map = this.f21679a;
                    Intrinsics.checkNotNull(map);
                    Bundle bundle2 = bundle.getBundle(str);
                    Intrinsics.checkNotNull(bundle2);
                    Pair a10 = v.a(str, bundle2);
                    map.put(a10.c(), a10.d());
                }
            }
            for (en.a aVar : this.f21682d.values()) {
                if (aVar.getLifecycle().b() == Lifecycle.State.f4847e) {
                    l(aVar);
                }
            }
            return;
        }
        throw new IllegalStateException("Expected performRestore to be called only once.");
    }

    private final void l(en.a aVar) {
        Map map = this.f21679a;
        if (map == null) {
            return;
        }
        aVar.a().d((Bundle) map.remove(aVar.b()));
    }

    private final void n(en.a aVar) {
        Map map = this.f21679a;
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
        Map map = this.f21679a;
        if (map != null) {
            for (en.a aVar : this.f21682d.values()) {
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
        this.f21680b = parentOwner;
        this.f21681c = key;
        if (i()) {
            return;
        }
        SavedStateRegistry savedStateRegistry = parentOwner.getSavedStateRegistry();
        Intrinsics.checkNotNullExpressionValue(savedStateRegistry, "parentOwner.savedStateRegistry");
        Lifecycle lifecycle = parentOwner.getLifecycle();
        Intrinsics.checkNotNullExpressionValue(lifecycle, "parentOwner.lifecycle");
        try {
            savedStateRegistry.c(key, new SavedStateRegistry.b() { // from class: en.e
                @Override // androidx.savedstate.SavedStateRegistry.b
                public final Bundle a() {
                    Bundle o10;
                    o10 = f.this.o();
                    return o10;
                }
            });
            lifecycle.a(this.f21683e);
        } catch (IllegalArgumentException e10) {
            throw new IllegalArgumentException("Error registering SavedStateProvider: key \"" + key + "\" is already in use on parent SavedStateRegistryOwner " + parentOwner + ".\nThis is most easily remedied by giving your container Screen rendering a unique Compatible.compatibilityKey, perhaps by wrapping it with Named.", e10);
        }
    }

    public final void g() {
        Lifecycle lifecycle;
        SavedStateRegistry savedStateRegistry;
        u3.f fVar = this.f21680b;
        if (fVar != null && (savedStateRegistry = fVar.getSavedStateRegistry()) != null) {
            String str = this.f21681c;
            Intrinsics.checkNotNull(str);
            savedStateRegistry.e(str);
        }
        u3.f fVar2 = this.f21680b;
        if (fVar2 != null && (lifecycle = fVar2.getLifecycle()) != null) {
            lifecycle.d(this.f21683e);
        }
        this.f21680b = null;
        this.f21681c = null;
    }

    public final void h(View view, String key) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(key, "key");
        LifecycleOwner a10 = r0.a(view);
        if (a10 != null) {
            en.a aVar = new en.a(key, a10);
            if (((en.a) this.f21682d.put(key, aVar)) == null) {
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
        for (String str : x0.j(this.f21682d.keySet(), collection)) {
            this.f21682d.remove(str);
        }
        Map map = this.f21679a;
        if (map == null) {
            return;
        }
        CollectionsKt.I(map.keySet(), x0.j(map.keySet(), collection));
    }

    public final void m(String key) {
        Unit unit;
        Intrinsics.checkNotNullParameter(key, "key");
        en.a aVar = (en.a) this.f21682d.remove(key);
        if (aVar == null) {
            unit = null;
        } else {
            n(aVar);
            unit = Unit.f32008a;
        }
        if (unit != null) {
            return;
        }
        throw new IllegalArgumentException(Intrinsics.stringPlus("No such child: ", key));
    }
}
