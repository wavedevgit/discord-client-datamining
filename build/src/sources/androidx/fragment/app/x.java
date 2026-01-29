package androidx.fragment.app;

import android.content.Context;
import android.os.Bundle;
import android.view.View;
import androidx.fragment.app.FragmentManager;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final FragmentManager f4385a;

    /* renamed from: b  reason: collision with root package name */
    private final CopyOnWriteArrayList f4386b;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final FragmentManager.l f4387a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f4388b;

        public a(FragmentManager.l callback, boolean z10) {
            Intrinsics.checkNotNullParameter(callback, "callback");
            this.f4387a = callback;
            this.f4388b = z10;
        }

        public final FragmentManager.l a() {
            return this.f4387a;
        }

        public final boolean b() {
            return this.f4388b;
        }
    }

    public x(FragmentManager fragmentManager) {
        Intrinsics.checkNotNullParameter(fragmentManager, "fragmentManager");
        this.f4385a = fragmentManager;
        this.f4386b = new CopyOnWriteArrayList();
    }

    public final void a(Fragment f10, Bundle bundle, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().a(f10, bundle, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentActivityCreated(this.f4385a, f10, bundle);
            }
        }
    }

    public final void b(Fragment f10, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Context g10 = this.f4385a.B0().g();
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().b(f10, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentAttached(this.f4385a, f10, g10);
            }
        }
    }

    public final void c(Fragment f10, Bundle bundle, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().c(f10, bundle, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentCreated(this.f4385a, f10, bundle);
            }
        }
    }

    public final void d(Fragment f10, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().d(f10, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentDestroyed(this.f4385a, f10);
            }
        }
    }

    public final void e(Fragment f10, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().e(f10, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentDetached(this.f4385a, f10);
            }
        }
    }

    public final void f(Fragment f10, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().f(f10, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentPaused(this.f4385a, f10);
            }
        }
    }

    public final void g(Fragment f10, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Context g10 = this.f4385a.B0().g();
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().g(f10, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentPreAttached(this.f4385a, f10, g10);
            }
        }
    }

    public final void h(Fragment f10, Bundle bundle, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().h(f10, bundle, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentPreCreated(this.f4385a, f10, bundle);
            }
        }
    }

    public final void i(Fragment f10, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().i(f10, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentResumed(this.f4385a, f10);
            }
        }
    }

    public final void j(Fragment f10, Bundle outState, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Intrinsics.checkNotNullParameter(outState, "outState");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().j(f10, outState, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentSaveInstanceState(this.f4385a, f10, outState);
            }
        }
    }

    public final void k(Fragment f10, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().k(f10, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentStarted(this.f4385a, f10);
            }
        }
    }

    public final void l(Fragment f10, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().l(f10, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentStopped(this.f4385a, f10);
            }
        }
    }

    public final void m(Fragment f10, View v10, Bundle bundle, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Intrinsics.checkNotNullParameter(v10, "v");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().m(f10, v10, bundle, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentViewCreated(this.f4385a, f10, v10, bundle);
            }
        }
    }

    public final void n(Fragment f10, boolean z10) {
        Intrinsics.checkNotNullParameter(f10, "f");
        Fragment E0 = this.f4385a.E0();
        if (E0 != null) {
            FragmentManager parentFragmentManager = E0.getParentFragmentManager();
            Intrinsics.checkNotNullExpressionValue(parentFragmentManager, "parent.getParentFragmentManager()");
            parentFragmentManager.D0().n(f10, true);
        }
        Iterator it = this.f4386b.iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (!z10 || aVar.b()) {
                aVar.a().onFragmentViewDestroyed(this.f4385a, f10);
            }
        }
    }

    public final void o(FragmentManager.l cb2, boolean z10) {
        Intrinsics.checkNotNullParameter(cb2, "cb");
        this.f4386b.add(new a(cb2, z10));
    }
}
