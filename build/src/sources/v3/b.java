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
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import rr.v;
import u3.f;
import u3.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: i  reason: collision with root package name */
    private static final a f52075i = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final f f52076a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f52077b;

    /* renamed from: c  reason: collision with root package name */
    private final c f52078c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f52079d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f52080e;

    /* renamed from: f  reason: collision with root package name */
    private Bundle f52081f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f52082g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f52083h;

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
        this.f52076a = owner;
        this.f52077b = onAttach;
        this.f52078c = new c();
        this.f52079d = new LinkedHashMap();
        this.f52083h = true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(b bVar, LifecycleOwner lifecycleOwner, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(lifecycleOwner, "<unused var>");
        Intrinsics.checkNotNullParameter(event, "event");
        if (event == Lifecycle.a.ON_START) {
            bVar.f52083h = true;
        } else if (event == Lifecycle.a.ON_STOP) {
            bVar.f52083h = false;
        }
    }

    public final Bundle c(String key) {
        Bundle bundle;
        Intrinsics.checkNotNullParameter(key, "key");
        if (this.f52082g) {
            Bundle bundle2 = this.f52081f;
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
                this.f52081f = null;
            }
            return bundle;
        }
        throw new IllegalStateException("You can 'consumeRestoredStateForKey' only after the corresponding component has moved to the 'CREATED' state");
    }

    public final SavedStateRegistry.b d(String key) {
        SavedStateRegistry.b bVar;
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f52078c) {
            Iterator it = this.f52079d.entrySet().iterator();
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
        return this.f52083h;
    }

    public final void f() {
        if (this.f52076a.getLifecycle().b() == Lifecycle.State.f4544e) {
            if (!this.f52080e) {
                this.f52077b.invoke();
                this.f52076a.getLifecycle().a(new m() { // from class: v3.a
                    @Override // androidx.lifecycle.m
                    public final void k(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
                        b.g(b.this, lifecycleOwner, aVar);
                    }
                });
                this.f52080e = true;
                return;
            }
            throw new IllegalStateException("SavedStateRegistry was already attached.");
        }
        throw new IllegalStateException("Restarter must be created only during owner's initialization stage");
    }

    public final void h(Bundle bundle) {
        if (!this.f52080e) {
            f();
        }
        if (!this.f52076a.getLifecycle().b().d(Lifecycle.State.f4546o)) {
            if (!this.f52082g) {
                Bundle bundle2 = null;
                if (bundle != null) {
                    Bundle a10 = u3.b.a(bundle);
                    if (u3.b.b(a10, "androidx.lifecycle.BundlableSavedStateRegistry.key")) {
                        bundle2 = u3.b.c(a10, "androidx.lifecycle.BundlableSavedStateRegistry.key");
                    }
                }
                this.f52081f = bundle2;
                this.f52082g = true;
                return;
            }
            throw new IllegalStateException("SavedStateRegistry was already restored.");
        }
        throw new IllegalStateException(("performRestore cannot be called when owner is " + this.f52076a.getLifecycle().b()).toString());
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
        Bundle bundle = this.f52081f;
        if (bundle != null) {
            g.b(a11, bundle);
        }
        synchronized (this.f52078c) {
            try {
                for (Map.Entry entry2 : this.f52079d.entrySet()) {
                    g.c(a11, (String) entry2.getKey(), ((SavedStateRegistry.b) entry2.getValue()).a());
                }
                Unit unit = Unit.f31765a;
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
        synchronized (this.f52078c) {
            if (!this.f52079d.containsKey(key)) {
                this.f52079d.put(key, provider);
                Unit unit = Unit.f31765a;
            } else {
                throw new IllegalArgumentException("SavedStateProvider with the given key is already registered");
            }
        }
    }

    public final void k(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f52078c) {
            SavedStateRegistry.b bVar = (SavedStateRegistry.b) this.f52079d.remove(key);
        }
    }
}
