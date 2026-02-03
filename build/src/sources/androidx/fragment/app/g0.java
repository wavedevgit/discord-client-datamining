package androidx.fragment.app;

import android.util.Log;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStore;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g0 extends androidx.lifecycle.n0 {

    /* renamed from: i  reason: collision with root package name */
    private static final ViewModelProvider.Factory f4266i = new a();

    /* renamed from: e  reason: collision with root package name */
    private final boolean f4270e;

    /* renamed from: b  reason: collision with root package name */
    private final HashMap f4267b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f4268c = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final HashMap f4269d = new HashMap();

    /* renamed from: f  reason: collision with root package name */
    private boolean f4271f = false;

    /* renamed from: g  reason: collision with root package name */
    private boolean f4272g = false;

    /* renamed from: h  reason: collision with root package name */
    private boolean f4273h = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ViewModelProvider.Factory {
        a() {
        }

        @Override // androidx.lifecycle.ViewModelProvider.Factory
        public androidx.lifecycle.n0 c(Class cls) {
            return new g0(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g0(boolean z10) {
        this.f4270e = z10;
    }

    private void h(String str, boolean z10) {
        g0 g0Var = (g0) this.f4268c.get(str);
        if (g0Var != null) {
            if (z10) {
                ArrayList arrayList = new ArrayList();
                arrayList.addAll(g0Var.f4268c.keySet());
                Iterator it = arrayList.iterator();
                while (it.hasNext()) {
                    g0Var.g((String) it.next(), true);
                }
            }
            g0Var.d();
            this.f4268c.remove(str);
        }
        ViewModelStore viewModelStore = (ViewModelStore) this.f4269d.get(str);
        if (viewModelStore != null) {
            viewModelStore.a();
            this.f4269d.remove(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g0 k(ViewModelStore viewModelStore) {
        return (g0) new ViewModelProvider(viewModelStore, f4266i).a(g0.class);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.lifecycle.n0
    public void d() {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "onCleared called for " + this);
        }
        this.f4271f = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(Fragment fragment) {
        if (this.f4273h) {
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Ignoring addRetainedFragment as the state is already saved");
            }
        } else if (!this.f4267b.containsKey(fragment.mWho)) {
            this.f4267b.put(fragment.mWho, fragment);
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Updating retained Fragments: Added " + fragment);
            }
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g0.class == obj.getClass()) {
            g0 g0Var = (g0) obj;
            if (this.f4267b.equals(g0Var.f4267b) && this.f4268c.equals(g0Var.f4268c) && this.f4269d.equals(g0Var.f4269d)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Fragment fragment, boolean z10) {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "Clearing non-config state for " + fragment);
        }
        h(fragment.mWho, z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(String str, boolean z10) {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "Clearing non-config state for saved state of Fragment " + str);
        }
        h(str, z10);
    }

    public int hashCode() {
        return (((this.f4267b.hashCode() * 31) + this.f4268c.hashCode()) * 31) + this.f4269d.hashCode();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment i(String str) {
        return (Fragment) this.f4267b.get(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g0 j(Fragment fragment) {
        g0 g0Var = (g0) this.f4268c.get(fragment.mWho);
        if (g0Var == null) {
            g0 g0Var2 = new g0(this.f4270e);
            this.f4268c.put(fragment.mWho, g0Var2);
            return g0Var2;
        }
        return g0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Collection l() {
        return new ArrayList(this.f4267b.values());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ViewModelStore m(Fragment fragment) {
        ViewModelStore viewModelStore = (ViewModelStore) this.f4269d.get(fragment.mWho);
        if (viewModelStore == null) {
            ViewModelStore viewModelStore2 = new ViewModelStore();
            this.f4269d.put(fragment.mWho, viewModelStore2);
            return viewModelStore2;
        }
        return viewModelStore;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n() {
        return this.f4271f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Fragment fragment) {
        if (this.f4273h) {
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Ignoring removeRetainedFragment as the state is already saved");
            }
        } else if (this.f4267b.remove(fragment.mWho) != null && FragmentManager.O0(2)) {
            Log.v("FragmentManager", "Updating retained Fragments: Removed " + fragment);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(boolean z10) {
        this.f4273h = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean q(Fragment fragment) {
        if (!this.f4267b.containsKey(fragment.mWho)) {
            return true;
        }
        if (this.f4270e) {
            return this.f4271f;
        }
        return !this.f4272g;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("FragmentManagerViewModel{");
        sb2.append(Integer.toHexString(System.identityHashCode(this)));
        sb2.append("} Fragments (");
        Iterator it = this.f4267b.values().iterator();
        while (it.hasNext()) {
            sb2.append(it.next());
            if (it.hasNext()) {
                sb2.append(", ");
            }
        }
        sb2.append(") Child Non Config (");
        Iterator it2 = this.f4268c.keySet().iterator();
        while (it2.hasNext()) {
            sb2.append((String) it2.next());
            if (it2.hasNext()) {
                sb2.append(", ");
            }
        }
        sb2.append(") ViewModelStores (");
        Iterator it3 = this.f4269d.keySet().iterator();
        while (it3.hasNext()) {
            sb2.append((String) it3.next());
            if (it3.hasNext()) {
                sb2.append(", ");
            }
        }
        sb2.append(')');
        return sb2.toString();
    }
}
