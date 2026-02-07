package androidx.fragment.app;

import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.activity.BackEventCompat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class t0 {

    /* renamed from: g  reason: collision with root package name */
    public static final a f4800g = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f4801a;

    /* renamed from: b  reason: collision with root package name */
    private final List f4802b;

    /* renamed from: c  reason: collision with root package name */
    private final List f4803c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4804d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f4805e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f4806f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final t0 a(ViewGroup container, FragmentManager fragmentManager) {
            Intrinsics.checkNotNullParameter(container, "container");
            Intrinsics.checkNotNullParameter(fragmentManager, "fragmentManager");
            u0 G0 = fragmentManager.G0();
            Intrinsics.checkNotNullExpressionValue(G0, "fragmentManager.specialEffectsControllerFactory");
            return b(container, G0);
        }

        public final t0 b(ViewGroup container, u0 factory) {
            Intrinsics.checkNotNullParameter(container, "container");
            Intrinsics.checkNotNullParameter(factory, "factory");
            Object tag = container.getTag(f3.b.f22474b);
            if (tag instanceof t0) {
                return (t0) tag;
            }
            t0 a10 = factory.a(container);
            Intrinsics.checkNotNullExpressionValue(a10, "factory.createController(container)");
            container.setTag(f3.b.f22474b, a10);
            return a10;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f4807a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f4808b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f4809c;

        public final void a(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
            if (!this.f4809c) {
                c(container);
            }
            this.f4809c = true;
        }

        public boolean b() {
            return this.f4807a;
        }

        public abstract void c(ViewGroup viewGroup);

        public abstract void d(ViewGroup viewGroup);

        public void e(BackEventCompat backEvent, ViewGroup container) {
            Intrinsics.checkNotNullParameter(backEvent, "backEvent");
            Intrinsics.checkNotNullParameter(container, "container");
        }

        public void f(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
        }

        public final void g(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
            if (!this.f4808b) {
                f(container);
            }
            this.f4808b = true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends d {

        /* renamed from: l  reason: collision with root package name */
        private final k0 f4810l;

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public c(androidx.fragment.app.t0.d.b r3, androidx.fragment.app.t0.d.a r4, androidx.fragment.app.k0 r5) {
            /*
                r2 = this;
                java.lang.String r0 = "finalState"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
                java.lang.String r0 = "lifecycleImpact"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
                java.lang.String r0 = "fragmentStateManager"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
                androidx.fragment.app.Fragment r0 = r5.k()
                java.lang.String r1 = "fragmentStateManager.fragment"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
                r2.<init>(r3, r4, r0)
                r2.f4810l = r5
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.fragment.app.t0.c.<init>(androidx.fragment.app.t0$d$b, androidx.fragment.app.t0$d$a, androidx.fragment.app.k0):void");
        }

        @Override // androidx.fragment.app.t0.d
        public void d() {
            super.d();
            h().mTransitioning = false;
            this.f4810l.m();
        }

        @Override // androidx.fragment.app.t0.d
        public void p() {
            if (!n()) {
                super.p();
                if (i() == d.a.ADDING) {
                    Fragment k10 = this.f4810l.k();
                    Intrinsics.checkNotNullExpressionValue(k10, "fragmentStateManager.fragment");
                    View findFocus = k10.mView.findFocus();
                    if (findFocus != null) {
                        k10.setFocusedView(findFocus);
                        if (FragmentManager.O0(2)) {
                            Log.v("FragmentManager", "requestFocus: Saved focused view " + findFocus + " for Fragment " + k10);
                        }
                    }
                    View requireView = h().requireView();
                    Intrinsics.checkNotNullExpressionValue(requireView, "this.fragment.requireView()");
                    if (requireView.getParent() == null) {
                        this.f4810l.b();
                        requireView.setAlpha(0.0f);
                    }
                    if (requireView.getAlpha() == 0.0f && requireView.getVisibility() == 0) {
                        requireView.setVisibility(4);
                    }
                    requireView.setAlpha(k10.getPostOnViewCreatedAlpha());
                } else if (i() == d.a.REMOVING) {
                    Fragment k11 = this.f4810l.k();
                    Intrinsics.checkNotNullExpressionValue(k11, "fragmentStateManager.fragment");
                    View requireView2 = k11.requireView();
                    Intrinsics.checkNotNullExpressionValue(requireView2, "fragment.requireView()");
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "Clearing focus " + requireView2.findFocus() + " on view " + requireView2 + " for Fragment " + k11);
                    }
                    requireView2.clearFocus();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        private b f4811a;

        /* renamed from: b  reason: collision with root package name */
        private a f4812b;

        /* renamed from: c  reason: collision with root package name */
        private final Fragment f4813c;

        /* renamed from: d  reason: collision with root package name */
        private final List f4814d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f4815e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f4816f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f4817g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f4818h;

        /* renamed from: i  reason: collision with root package name */
        private boolean f4819i;

        /* renamed from: j  reason: collision with root package name */
        private final List f4820j;

        /* renamed from: k  reason: collision with root package name */
        private final List f4821k;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum a {
            NONE,
            ADDING,
            REMOVING
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum b {
            REMOVED,
            VISIBLE,
            GONE,
            INVISIBLE;
            

            /* renamed from: d  reason: collision with root package name */
            public static final a f4826d = new a(null);

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class a {
                public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public final b a(View view) {
                    Intrinsics.checkNotNullParameter(view, "<this>");
                    if (view.getAlpha() == 0.0f && view.getVisibility() == 0) {
                        return b.INVISIBLE;
                    }
                    return b(view.getVisibility());
                }

                public final b b(int i10) {
                    if (i10 != 0) {
                        if (i10 != 4) {
                            if (i10 == 8) {
                                return b.GONE;
                            }
                            throw new IllegalArgumentException("Unknown visibility " + i10);
                        }
                        return b.INVISIBLE;
                    }
                    return b.VISIBLE;
                }

                private a() {
                }
            }

            /* renamed from: androidx.fragment.app.t0$d$b$b  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public /* synthetic */ class C0053b {

                /* renamed from: a  reason: collision with root package name */
                public static final /* synthetic */ int[] f4832a;

                static {
                    int[] iArr = new int[b.values().length];
                    try {
                        iArr[b.REMOVED.ordinal()] = 1;
                    } catch (NoSuchFieldError unused) {
                    }
                    try {
                        iArr[b.VISIBLE.ordinal()] = 2;
                    } catch (NoSuchFieldError unused2) {
                    }
                    try {
                        iArr[b.GONE.ordinal()] = 3;
                    } catch (NoSuchFieldError unused3) {
                    }
                    try {
                        iArr[b.INVISIBLE.ordinal()] = 4;
                    } catch (NoSuchFieldError unused4) {
                    }
                    f4832a = iArr;
                }
            }

            public static final b e(int i10) {
                return f4826d.b(i10);
            }

            public final void d(View view, ViewGroup container) {
                Intrinsics.checkNotNullParameter(view, "view");
                Intrinsics.checkNotNullParameter(container, "container");
                int i10 = C0053b.f4832a[ordinal()];
                ViewGroup viewGroup = null;
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            if (i10 == 4) {
                                if (FragmentManager.O0(2)) {
                                    Log.v("FragmentManager", "SpecialEffectsController: Setting view " + view + " to INVISIBLE");
                                }
                                view.setVisibility(4);
                                return;
                            }
                            return;
                        }
                        if (FragmentManager.O0(2)) {
                            Log.v("FragmentManager", "SpecialEffectsController: Setting view " + view + " to GONE");
                        }
                        view.setVisibility(8);
                        return;
                    }
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "SpecialEffectsController: Setting view " + view + " to VISIBLE");
                    }
                    ViewParent parent = view.getParent();
                    if (parent instanceof ViewGroup) {
                        viewGroup = (ViewGroup) parent;
                    }
                    if (viewGroup == null) {
                        if (FragmentManager.O0(2)) {
                            Log.v("FragmentManager", "SpecialEffectsController: Adding view " + view + " to Container " + container);
                        }
                        container.addView(view);
                    }
                    view.setVisibility(0);
                    return;
                }
                ViewParent parent2 = view.getParent();
                if (parent2 instanceof ViewGroup) {
                    viewGroup = (ViewGroup) parent2;
                }
                if (viewGroup != null) {
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "SpecialEffectsController: Removing view " + view + " from container " + viewGroup);
                    }
                    viewGroup.removeView(view);
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public /* synthetic */ class c {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f4833a;

            static {
                int[] iArr = new int[a.values().length];
                try {
                    iArr[a.ADDING.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[a.REMOVING.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[a.NONE.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f4833a = iArr;
            }
        }

        public d(b finalState, a lifecycleImpact, Fragment fragment) {
            Intrinsics.checkNotNullParameter(finalState, "finalState");
            Intrinsics.checkNotNullParameter(lifecycleImpact, "lifecycleImpact");
            Intrinsics.checkNotNullParameter(fragment, "fragment");
            this.f4811a = finalState;
            this.f4812b = lifecycleImpact;
            this.f4813c = fragment;
            this.f4814d = new ArrayList();
            this.f4819i = true;
            ArrayList arrayList = new ArrayList();
            this.f4820j = arrayList;
            this.f4821k = arrayList;
        }

        public final void a(Runnable listener) {
            Intrinsics.checkNotNullParameter(listener, "listener");
            this.f4814d.add(listener);
        }

        public final void b(b effect) {
            Intrinsics.checkNotNullParameter(effect, "effect");
            this.f4820j.add(effect);
        }

        public final void c(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
            this.f4818h = false;
            if (!this.f4815e) {
                this.f4815e = true;
                if (this.f4820j.isEmpty()) {
                    d();
                    return;
                }
                for (b bVar : CollectionsKt.h1(this.f4821k)) {
                    bVar.a(container);
                }
            }
        }

        public void d() {
            this.f4818h = false;
            if (!this.f4816f) {
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "SpecialEffectsController: " + this + " has called complete.");
                }
                this.f4816f = true;
                for (Runnable runnable : this.f4814d) {
                    runnable.run();
                }
            }
        }

        public final void e(b effect) {
            Intrinsics.checkNotNullParameter(effect, "effect");
            if (this.f4820j.remove(effect) && this.f4820j.isEmpty()) {
                d();
            }
        }

        public final List f() {
            return this.f4821k;
        }

        public final b g() {
            return this.f4811a;
        }

        public final Fragment h() {
            return this.f4813c;
        }

        public final a i() {
            return this.f4812b;
        }

        public final boolean j() {
            return this.f4819i;
        }

        public final boolean k() {
            return this.f4815e;
        }

        public final boolean l() {
            return this.f4816f;
        }

        public final boolean m() {
            return this.f4817g;
        }

        public final boolean n() {
            return this.f4818h;
        }

        public final void o(b finalState, a lifecycleImpact) {
            Intrinsics.checkNotNullParameter(finalState, "finalState");
            Intrinsics.checkNotNullParameter(lifecycleImpact, "lifecycleImpact");
            int i10 = c.f4833a[lifecycleImpact.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3 && this.f4811a != b.REMOVED) {
                        if (FragmentManager.O0(2)) {
                            Log.v("FragmentManager", "SpecialEffectsController: For fragment " + this.f4813c + " mFinalState = " + this.f4811a + " -> " + finalState + '.');
                        }
                        this.f4811a = finalState;
                        return;
                    }
                    return;
                }
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "SpecialEffectsController: For fragment " + this.f4813c + " mFinalState = " + this.f4811a + " -> REMOVED. mLifecycleImpact  = " + this.f4812b + " to REMOVING.");
                }
                this.f4811a = b.REMOVED;
                this.f4812b = a.REMOVING;
                this.f4819i = true;
            } else if (this.f4811a == b.REMOVED) {
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "SpecialEffectsController: For fragment " + this.f4813c + " mFinalState = REMOVED -> VISIBLE. mLifecycleImpact = " + this.f4812b + " to ADDING.");
                }
                this.f4811a = b.VISIBLE;
                this.f4812b = a.ADDING;
                this.f4819i = true;
            }
        }

        public void p() {
            this.f4818h = true;
        }

        public final void q(boolean z10) {
            this.f4819i = z10;
        }

        public final void r(boolean z10) {
            this.f4817g = z10;
        }

        public String toString() {
            String hexString = Integer.toHexString(System.identityHashCode(this));
            return "Operation {" + hexString + "} {finalState = " + this.f4811a + " lifecycleImpact = " + this.f4812b + " fragment = " + this.f4813c + '}';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class e {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f4834a;

        static {
            int[] iArr = new int[d.a.values().length];
            try {
                iArr[d.a.NONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            f4834a = iArr;
        }
    }

    public t0(ViewGroup container) {
        Intrinsics.checkNotNullParameter(container, "container");
        this.f4801a = container;
        this.f4802b = new ArrayList();
        this.f4803c = new ArrayList();
    }

    private final void B(List list) {
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((d) list.get(i10)).p();
        }
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            CollectionsKt.B(arrayList, ((d) it.next()).f());
        }
        List h12 = CollectionsKt.h1(CollectionsKt.l1(arrayList));
        int size2 = h12.size();
        for (int i11 = 0; i11 < size2; i11++) {
            ((b) h12.get(i11)).g(this.f4801a);
        }
    }

    private final void C() {
        for (d dVar : this.f4802b) {
            if (dVar.i() == d.a.ADDING) {
                View requireView = dVar.h().requireView();
                Intrinsics.checkNotNullExpressionValue(requireView, "fragment.requireView()");
                dVar.o(d.b.f4826d.b(requireView.getVisibility()), d.a.NONE);
            }
        }
    }

    private final void g(d.b bVar, d.a aVar, k0 k0Var) {
        synchronized (this.f4802b) {
            try {
                Fragment k10 = k0Var.k();
                Intrinsics.checkNotNullExpressionValue(k10, "fragmentStateManager.fragment");
                d o10 = o(k10);
                if (o10 == null) {
                    if (k0Var.k().mTransitioning) {
                        Fragment k11 = k0Var.k();
                        Intrinsics.checkNotNullExpressionValue(k11, "fragmentStateManager.fragment");
                        o10 = p(k11);
                    } else {
                        o10 = null;
                    }
                }
                if (o10 != null) {
                    o10.o(bVar, aVar);
                    return;
                }
                final c cVar = new c(bVar, aVar, k0Var);
                this.f4802b.add(cVar);
                cVar.a(new Runnable() { // from class: androidx.fragment.app.r0
                    @Override // java.lang.Runnable
                    public final void run() {
                        t0.h(t0.this, cVar);
                    }
                });
                cVar.a(new Runnable() { // from class: androidx.fragment.app.s0
                    @Override // java.lang.Runnable
                    public final void run() {
                        t0.i(t0.this, cVar);
                    }
                });
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(t0 this$0, c operation) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(operation, "$operation");
        if (this$0.f4802b.contains(operation)) {
            d.b g10 = operation.g();
            View view = operation.h().mView;
            Intrinsics.checkNotNullExpressionValue(view, "operation.fragment.mView");
            g10.d(view, this$0.f4801a);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(t0 this$0, c operation) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(operation, "$operation");
        this$0.f4802b.remove(operation);
        this$0.f4803c.remove(operation);
    }

    private final d o(Fragment fragment) {
        Object obj;
        Iterator it = this.f4802b.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                d dVar = (d) obj;
                if (Intrinsics.areEqual(dVar.h(), fragment) && !dVar.k()) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        return (d) obj;
    }

    private final d p(Fragment fragment) {
        Object obj;
        Iterator it = this.f4803c.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                d dVar = (d) obj;
                if (Intrinsics.areEqual(dVar.h(), fragment) && !dVar.k()) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        return (d) obj;
    }

    public static final t0 u(ViewGroup viewGroup, FragmentManager fragmentManager) {
        return f4800g.a(viewGroup, fragmentManager);
    }

    public static final t0 v(ViewGroup viewGroup, u0 u0Var) {
        return f4800g.b(viewGroup, u0Var);
    }

    private final boolean w(List list) {
        boolean z10;
        List<d> list2 = list;
        loop0: while (true) {
            z10 = true;
            for (d dVar : list2) {
                if (!dVar.f().isEmpty()) {
                    List<b> f10 = dVar.f();
                    if (!(f10 instanceof Collection) || !f10.isEmpty()) {
                        for (b bVar : f10) {
                            if (!bVar.b()) {
                                break;
                            }
                        }
                    }
                }
                z10 = false;
            }
            break loop0;
        }
        if (z10) {
            ArrayList arrayList = new ArrayList();
            for (d dVar2 : list2) {
                CollectionsKt.B(arrayList, dVar2.f());
            }
            if (!arrayList.isEmpty()) {
                return true;
            }
        }
        return false;
    }

    private final boolean x(List list) {
        Iterator it = list.iterator();
        boolean z10 = true;
        while (it.hasNext()) {
            if (!((d) it.next()).h().mTransitioning) {
                z10 = false;
            }
        }
        return z10;
    }

    public final void A(BackEventCompat backEvent) {
        Intrinsics.checkNotNullParameter(backEvent, "backEvent");
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "SpecialEffectsController: Processing Progress " + backEvent.a());
        }
        ArrayList arrayList = new ArrayList();
        for (d dVar : this.f4803c) {
            CollectionsKt.B(arrayList, dVar.f());
        }
        List h12 = CollectionsKt.h1(CollectionsKt.l1(arrayList));
        int size = h12.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((b) h12.get(i10)).e(backEvent, this.f4801a);
        }
    }

    public final void D(boolean z10) {
        this.f4805e = z10;
    }

    public final void c(d operation) {
        Intrinsics.checkNotNullParameter(operation, "operation");
        if (operation.j()) {
            d.b g10 = operation.g();
            View requireView = operation.h().requireView();
            Intrinsics.checkNotNullExpressionValue(requireView, "operation.fragment.requireView()");
            g10.d(requireView, this.f4801a);
            operation.q(false);
        }
    }

    public abstract void d(List list, boolean z10);

    public void e(List operations) {
        Intrinsics.checkNotNullParameter(operations, "operations");
        ArrayList arrayList = new ArrayList();
        Iterator it = operations.iterator();
        while (it.hasNext()) {
            CollectionsKt.B(arrayList, ((d) it.next()).f());
        }
        List h12 = CollectionsKt.h1(CollectionsKt.l1(arrayList));
        int size = h12.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((b) h12.get(i10)).d(this.f4801a);
        }
        int size2 = operations.size();
        for (int i11 = 0; i11 < size2; i11++) {
            c((d) operations.get(i11));
        }
        List h13 = CollectionsKt.h1(operations);
        int size3 = h13.size();
        for (int i12 = 0; i12 < size3; i12++) {
            d dVar = (d) h13.get(i12);
            if (dVar.f().isEmpty()) {
                dVar.d();
            }
        }
    }

    public final void f() {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "SpecialEffectsController: Completing Back ");
        }
        B(this.f4803c);
        e(this.f4803c);
    }

    public final void j(d.b finalState, k0 fragmentStateManager) {
        Intrinsics.checkNotNullParameter(finalState, "finalState");
        Intrinsics.checkNotNullParameter(fragmentStateManager, "fragmentStateManager");
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "SpecialEffectsController: Enqueuing add operation for fragment " + fragmentStateManager.k());
        }
        g(finalState, d.a.ADDING, fragmentStateManager);
    }

    public final void k(k0 fragmentStateManager) {
        Intrinsics.checkNotNullParameter(fragmentStateManager, "fragmentStateManager");
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "SpecialEffectsController: Enqueuing hide operation for fragment " + fragmentStateManager.k());
        }
        g(d.b.GONE, d.a.NONE, fragmentStateManager);
    }

    public final void l(k0 fragmentStateManager) {
        Intrinsics.checkNotNullParameter(fragmentStateManager, "fragmentStateManager");
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "SpecialEffectsController: Enqueuing remove operation for fragment " + fragmentStateManager.k());
        }
        g(d.b.REMOVED, d.a.REMOVING, fragmentStateManager);
    }

    public final void m(k0 fragmentStateManager) {
        Intrinsics.checkNotNullParameter(fragmentStateManager, "fragmentStateManager");
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "SpecialEffectsController: Enqueuing show operation for fragment " + fragmentStateManager.k());
        }
        g(d.b.VISIBLE, d.a.NONE, fragmentStateManager);
    }

    public final void n() {
        boolean z10;
        if (this.f4806f) {
            return;
        }
        if (!this.f4801a.isAttachedToWindow()) {
            q();
            this.f4805e = false;
            return;
        }
        synchronized (this.f4802b) {
            try {
                List<d> j12 = CollectionsKt.j1(this.f4803c);
                this.f4803c.clear();
                Iterator it = j12.iterator();
                while (true) {
                    z10 = true;
                    if (!it.hasNext()) {
                        break;
                    }
                    d dVar = (d) it.next();
                    if (this.f4802b.isEmpty() || !dVar.h().mTransitioning) {
                        z10 = false;
                    }
                    dVar.r(z10);
                }
                for (d dVar2 : j12) {
                    if (this.f4804d) {
                        if (FragmentManager.O0(2)) {
                            Log.v("FragmentManager", "SpecialEffectsController: Completing non-seekable operation " + dVar2);
                        }
                        dVar2.d();
                    } else {
                        if (FragmentManager.O0(2)) {
                            Log.v("FragmentManager", "SpecialEffectsController: Cancelling operation " + dVar2);
                        }
                        dVar2.c(this.f4801a);
                    }
                    this.f4804d = false;
                    if (!dVar2.l()) {
                        this.f4803c.add(dVar2);
                    }
                }
                if (!this.f4802b.isEmpty()) {
                    C();
                    List j13 = CollectionsKt.j1(this.f4802b);
                    if (j13.isEmpty()) {
                        return;
                    }
                    this.f4802b.clear();
                    this.f4803c.addAll(j13);
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "SpecialEffectsController: Executing pending operations");
                    }
                    d(j13, this.f4805e);
                    boolean w10 = w(j13);
                    boolean x10 = x(j13);
                    if (!x10 || w10) {
                        z10 = false;
                    }
                    this.f4804d = z10;
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "SpecialEffectsController: Operation seekable = " + w10 + " \ntransition = " + x10);
                    }
                    if (!x10) {
                        B(j13);
                        e(j13);
                    } else if (w10) {
                        B(j13);
                        int size = j13.size();
                        for (int i10 = 0; i10 < size; i10++) {
                            c((d) j13.get(i10));
                        }
                    }
                    this.f4805e = false;
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "SpecialEffectsController: Finished executing pending operations");
                    }
                }
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void q() {
        String str;
        String str2;
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "SpecialEffectsController: Forcing all operations to complete");
        }
        boolean isAttachedToWindow = this.f4801a.isAttachedToWindow();
        synchronized (this.f4802b) {
            try {
                C();
                B(this.f4802b);
                List<d> j12 = CollectionsKt.j1(this.f4803c);
                for (d dVar : j12) {
                    dVar.r(false);
                }
                for (d dVar2 : j12) {
                    if (FragmentManager.O0(2)) {
                        if (isAttachedToWindow) {
                            str2 = "";
                        } else {
                            str2 = "Container " + this.f4801a + " is not attached to window. ";
                        }
                        Log.v("FragmentManager", "SpecialEffectsController: " + str2 + "Cancelling running operation " + dVar2);
                    }
                    dVar2.c(this.f4801a);
                }
                List<d> j13 = CollectionsKt.j1(this.f4802b);
                for (d dVar3 : j13) {
                    dVar3.r(false);
                }
                for (d dVar4 : j13) {
                    if (FragmentManager.O0(2)) {
                        if (isAttachedToWindow) {
                            str = "";
                        } else {
                            str = "Container " + this.f4801a + " is not attached to window. ";
                        }
                        Log.v("FragmentManager", "SpecialEffectsController: " + str + "Cancelling pending operation " + dVar4);
                    }
                    dVar4.c(this.f4801a);
                }
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void r() {
        if (this.f4806f) {
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "SpecialEffectsController: Forcing postponed operations");
            }
            this.f4806f = false;
            n();
        }
    }

    public final d.a s(k0 fragmentStateManager) {
        d.a aVar;
        int i10;
        Intrinsics.checkNotNullParameter(fragmentStateManager, "fragmentStateManager");
        Fragment k10 = fragmentStateManager.k();
        Intrinsics.checkNotNullExpressionValue(k10, "fragmentStateManager.fragment");
        d o10 = o(k10);
        d.a aVar2 = null;
        if (o10 != null) {
            aVar = o10.i();
        } else {
            aVar = null;
        }
        d p10 = p(k10);
        if (p10 != null) {
            aVar2 = p10.i();
        }
        if (aVar == null) {
            i10 = -1;
        } else {
            i10 = e.f4834a[aVar.ordinal()];
        }
        if (i10 != -1 && i10 != 1) {
            return aVar;
        }
        return aVar2;
    }

    public final ViewGroup t() {
        return this.f4801a;
    }

    public final boolean y() {
        return !this.f4802b.isEmpty();
    }

    public final void z() {
        Fragment fragment;
        Object obj;
        boolean z10;
        synchronized (this.f4802b) {
            try {
                C();
                List list = this.f4802b;
                ListIterator listIterator = list.listIterator(list.size());
                while (true) {
                    fragment = null;
                    if (listIterator.hasPrevious()) {
                        obj = listIterator.previous();
                        d dVar = (d) obj;
                        d.b.a aVar = d.b.f4826d;
                        View view = dVar.h().mView;
                        Intrinsics.checkNotNullExpressionValue(view, "operation.fragment.mView");
                        d.b a10 = aVar.a(view);
                        d.b g10 = dVar.g();
                        d.b bVar = d.b.VISIBLE;
                        if (g10 == bVar && a10 != bVar) {
                            break;
                        }
                    } else {
                        obj = null;
                        break;
                    }
                }
                d dVar2 = (d) obj;
                if (dVar2 != null) {
                    fragment = dVar2.h();
                }
                if (fragment != null) {
                    z10 = fragment.isPostponed();
                } else {
                    z10 = false;
                }
                this.f4806f = z10;
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
