package com.swmansion.rnscreens.gamma.stack.host;

import android.content.Context;
import android.util.Log;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends CoordinatorLayout implements FragmentManager.o {
    public static final a P = new a(null);
    private final WeakReference J;
    private FragmentManager K;
    private final List L;
    private final List M;
    private final List N;
    private final c O;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(Context context, WeakReference delegate) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.J = delegate;
        this.L = new ArrayList();
        this.M = new ArrayList();
        this.N = new ArrayList();
        this.O = new c();
        setId(un.g.f50811a.a());
    }

    private final List Z() {
        Object obj;
        ArrayList arrayList = new ArrayList();
        for (e eVar : this.M) {
            Iterator it = this.L.iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (((com.swmansion.rnscreens.gamma.stack.screen.d) obj).x() == eVar.a()) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            if (obj != null) {
                com.swmansion.rnscreens.gamma.stack.screen.d dVar = (com.swmansion.rnscreens.gamma.stack.screen.d) obj;
                if (this.L.size() > 1) {
                    arrayList.add(new d(dVar));
                    List list = this.L;
                    if (list.remove(CollectionsKt.n(list)) != dVar) {
                        throw new IllegalStateException("[RNScreens] Attempt to pop non-top screen");
                    }
                } else {
                    throw new IllegalStateException("[RNScreens] Attempt to pop last screen from the stack");
                }
            } else {
                throw new IllegalStateException("[RNScreens] Unable to find a fragment to pop");
            }
        }
        for (f fVar : this.N) {
            com.swmansion.rnscreens.gamma.stack.screen.d a02 = a0(fVar.a());
            arrayList.add(new com.swmansion.rnscreens.gamma.stack.host.a(a02, getId(), !this.L.isEmpty(), false, 8, null));
            this.L.add(a02);
        }
        if (!this.L.isEmpty()) {
            arrayList.add(new g((com.swmansion.rnscreens.gamma.stack.screen.d) CollectionsKt.z0(this.L)));
            this.M.clear();
            this.N.clear();
            return arrayList;
        }
        throw new IllegalStateException("[RNScreens] Stack should never be empty after updates");
    }

    private final com.swmansion.rnscreens.gamma.stack.screen.d a0(com.swmansion.rnscreens.gamma.stack.screen.a aVar) {
        com.swmansion.rnscreens.gamma.stack.screen.d dVar = new com.swmansion.rnscreens.gamma.stack.screen.d(aVar);
        String screenKey = aVar.getScreenKey();
        Log.d("StackContainer", "Created Fragment " + dVar + " for screen " + screenKey);
        return dVar;
    }

    private final void b0() {
        int id2 = getId();
        Log.d("StackContainer", "StackContainer [" + id2 + "] MODEL BEGIN");
        for (com.swmansion.rnscreens.gamma.stack.screen.d dVar : this.L) {
            Log.d("StackContainer", String.valueOf(dVar.x().getScreenKey()));
        }
    }

    private final void e0(com.swmansion.rnscreens.gamma.stack.screen.d dVar) {
        int id2 = getId();
        String screenKey = dVar.x().getScreenKey();
        Log.d("StackContainer", "StackContainer [" + id2 + "] natively removed fragment " + screenKey);
        if (this.L.remove(dVar)) {
            if (!this.L.isEmpty()) {
                FragmentManager h02 = h0();
                if (h02.G0() == dVar) {
                    c.g(this.O, h02, CollectionsKt.e(new g((com.swmansion.rnscreens.gamma.stack.screen.d) CollectionsKt.z0(this.L))), false, 4, null);
                    return;
                }
                return;
            }
            throw new IllegalStateException("[RNScreens] Stack model should not be empty after a native pop");
        }
        throw new IllegalArgumentException("[RNScreens] onNativeFragmentPop must be called with the fragment present in stack model");
    }

    private final void g0(FragmentManager fragmentManager) {
        this.O.f(fragmentManager, Z(), false);
        b0();
    }

    private final boolean getHasPendingOperations() {
        if (this.N.isEmpty() && this.M.isEmpty()) {
            return false;
        }
        return true;
    }

    private final FragmentManager h0() {
        FragmentManager fragmentManager = this.K;
        if (fragmentManager != null) {
            return fragmentManager;
        }
        throw new IllegalStateException("[RNScreens] Attempt to use nullish FragmentManager");
    }

    @Override // androidx.fragment.app.FragmentManager.o
    public void b(Fragment fragment, boolean z10) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        if (!(fragment instanceof com.swmansion.rnscreens.gamma.stack.screen.d)) {
            String simpleName = fragment.getClass().getSimpleName();
            Log.w("StackContainer", "[RNScreens] Unexpected type of fragment: " + simpleName);
        } else if (z10) {
            i iVar = (i) this.J.get();
            if (iVar != null) {
                iVar.a(((com.swmansion.rnscreens.gamma.stack.screen.d) fragment).x());
            }
            if (this.L.contains(fragment)) {
                e0((com.swmansion.rnscreens.gamma.stack.screen.d) fragment);
            }
        }
    }

    public final void c0(com.swmansion.rnscreens.gamma.stack.screen.a stackScreen) {
        Intrinsics.checkNotNullParameter(stackScreen, "stackScreen");
        this.M.add(new e(stackScreen));
    }

    public final void d0(com.swmansion.rnscreens.gamma.stack.screen.a stackScreen) {
        Intrinsics.checkNotNullParameter(stackScreen, "stackScreen");
        this.N.add(new f(stackScreen));
    }

    public final void f0() {
        if (getHasPendingOperations() && isAttachedToWindow()) {
            g0(h0());
        }
    }

    public final void i0() {
        FragmentManager a10 = un.b.f50808a.a(this);
        if (a10 != null) {
            a10.n(this);
            this.K = a10;
            return;
        }
        throw new IllegalStateException("[RNScreens] Nullish fragment manager - can't run container operations");
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        co.e eVar = co.e.f8377a;
        int id2 = getId();
        eVar.a("StackContainer", "StackContainer [" + id2 + "] attached to window");
        super.onAttachedToWindow();
        i0();
        f0();
    }

    @Override // androidx.fragment.app.FragmentManager.o
    public void onBackStackChanged() {
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout, android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        h0().p1(this);
        this.K = null;
    }
}
