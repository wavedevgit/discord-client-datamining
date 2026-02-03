package v3;

import android.os.Bundle;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.m;
import androidx.savedstate.SavedStateRegistry;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import jr.v;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import u3.f;
import u3.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: i  reason: collision with root package name */
    private static final a f50727i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final f f50728a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f50729b;

    /* renamed from: c  reason: collision with root package name */
    private final c f50730c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f50731d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f50732e;

    /* renamed from: f  reason: collision with root package name */
    private Bundle f50733f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f50734g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f50735h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public b(f owner, Function0 onAttach) {
        Intrinsics.checkNotNullParameter(owner, "owner");
        Intrinsics.checkNotNullParameter(onAttach, "onAttach");
        this.f50728a = owner;
        this.f50729b = onAttach;
        this.f50730c = new c();
        this.f50731d = new LinkedHashMap();
        this.f50735h = true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(b bVar, LifecycleOwner lifecycleOwner, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(lifecycleOwner, "<unused var>");
        Intrinsics.checkNotNullParameter(event, "event");
        if (event == Lifecycle.a.ON_START) {
            bVar.f50735h = true;
        } else if (event == Lifecycle.a.ON_STOP) {
            bVar.f50735h = false;
        }
    }

    public final Bundle c(String key) {
        Bundle bundle;
        Intrinsics.checkNotNullParameter(key, "key");
        if (this.f50734g) {
            Bundle bundle2 = this.f50733f;
            if (bundle2 == null) {
                return null;
            }
            Bundle a10 = u3.b.a(bundle2);
            if (u3.b.b(a10, key)) {
                bundle = u3.b.c(a10, key);
            } else {
                bundle = null;
            }
            g.e(g.a(bundle2), key);
            if (u3.b.f(u3.b.a(bundle2))) {
                this.f50733f = null;
            }
            return bundle;
        }
        throw new IllegalStateException("You can 'consumeRestoredStateForKey' only after the corresponding component has moved to the 'CREATED' state");
    }

    public final SavedStateRegistry.b d(String key) {
        SavedStateRegistry.b bVar;
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f50730c) {
            Iterator it = this.f50731d.entrySet().iterator();
            do {
                bVar = null;
                if (!it.hasNext()) {
                    break;
                }
                Map.Entry entry = (Map.Entry) it.next();
                SavedStateRegistry.b bVar2 = (SavedStateRegistry.b) entry.getValue();
                if (Intrinsics.areEqual((String) entry.getKey(), key)) {
                    bVar = bVar2;
                    continue;
                }
            } while (bVar == null);
        }
        return bVar;
    }

    public final boolean e() {
        return this.f50735h;
    }

    public final void f() {
        if (this.f50728a.getLifecycle().b() == Lifecycle.State.f4437e) {
            if (!this.f50732e) {
                this.f50729b.invoke();
                this.f50728a.getLifecycle().a(new m() { // from class: v3.a
                    @Override // androidx.lifecycle.m
                    public final void h(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
                        b.g(b.this, lifecycleOwner, aVar);
                    }
                });
                this.f50732e = true;
                return;
            }
            throw new IllegalStateException("SavedStateRegistry was already attached.");
        }
        throw new IllegalStateException("Restarter must be created only during owner's initialization stage");
    }

    public final void h(Bundle bundle) {
        if (!this.f50732e) {
            f();
        }
        if (!this.f50728a.getLifecycle().b().d(Lifecycle.State.f4439o)) {
            if (!this.f50734g) {
                Bundle bundle2 = null;
                if (bundle != null) {
                    Bundle a10 = u3.b.a(bundle);
                    if (u3.b.b(a10, "androidx.lifecycle.BundlableSavedStateRegistry.key")) {
                        bundle2 = u3.b.c(a10, "androidx.lifecycle.BundlableSavedStateRegistry.key");
                    }
                }
                this.f50733f = bundle2;
                this.f50734g = true;
                return;
            }
            throw new IllegalStateException("SavedStateRegistry was already restored.");
        }
        throw new IllegalStateException(("performRestore cannot be called when owner is " + this.f50728a.getLifecycle().b()).toString());
    }

    public final void i(Bundle outBundle) {
        Pair[] pairArr;
        Intrinsics.checkNotNullParameter(outBundle, "outBundle");
        Map i10 = o0.i();
        if (i10.isEmpty()) {
            pairArr = new Pair[0];
        } else {
            ArrayList arrayList = new ArrayList(i10.size());
            for (Map.Entry entry : i10.entrySet()) {
                arrayList.add(v.a((String) entry.getKey(), entry.getValue()));
            }
            pairArr = (Pair[]) arrayList.toArray(new Pair[0]);
        }
        Bundle a10 = w1.c.a((Pair[]) Arrays.copyOf(pairArr, pairArr.length));
        Bundle a11 = g.a(a10);
        Bundle bundle = this.f50733f;
        if (bundle != null) {
            g.b(a11, bundle);
        }
        synchronized (this.f50730c) {
            try {
                for (Map.Entry entry2 : this.f50731d.entrySet()) {
                    g.c(a11, (String) entry2.getKey(), ((SavedStateRegistry.b) entry2.getValue()).a());
                }
                Unit unit = Unit.f33074a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (!u3.b.f(u3.b.a(a10))) {
            g.c(g.a(outBundle), "androidx.lifecycle.BundlableSavedStateRegistry.key", a10);
        }
    }

    public final void j(String key, SavedStateRegistry.b provider) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(provider, "provider");
        synchronized (this.f50730c) {
            if (!this.f50731d.containsKey(key)) {
                this.f50731d.put(key, provider);
                Unit unit = Unit.f33074a;
            } else {
                throw new IllegalArgumentException("SavedStateProvider with the given key is already registered");
            }
        }
    }

    public final void k(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f50730c) {
            SavedStateRegistry.b bVar = (SavedStateRegistry.b) this.f50731d.remove(key);
        }
    }
}
