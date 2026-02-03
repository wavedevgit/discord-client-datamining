package androidx.transition;

import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class x {

    /* renamed from: a  reason: collision with root package name */
    private static Transition f5333a = new androidx.transition.a();

    /* renamed from: b  reason: collision with root package name */
    private static ThreadLocal f5334b = new ThreadLocal();

    /* renamed from: c  reason: collision with root package name */
    static ArrayList f5335c = new ArrayList();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements ViewTreeObserver.OnPreDrawListener, View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        Transition f5336d;

        /* renamed from: e  reason: collision with root package name */
        ViewGroup f5337e;

        /* renamed from: androidx.transition.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0072a extends w {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ u0.a f5338a;

            C0072a(u0.a aVar) {
                this.f5338a = aVar;
            }

            @Override // androidx.transition.w, androidx.transition.Transition.h
            public void onTransitionEnd(Transition transition) {
                ((ArrayList) this.f5338a.get(a.this.f5337e)).remove(transition);
                transition.e0(this);
            }
        }

        a(Transition transition, ViewGroup viewGroup) {
            this.f5336d = transition;
            this.f5337e = viewGroup;
        }

        private void a() {
            this.f5337e.getViewTreeObserver().removeOnPreDrawListener(this);
            this.f5337e.removeOnAttachStateChangeListener(this);
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            a();
            if (!x.f5335c.remove(this.f5337e)) {
                return true;
            }
            u0.a e10 = x.e();
            ArrayList arrayList = (ArrayList) e10.get(this.f5337e);
            ArrayList arrayList2 = null;
            if (arrayList == null) {
                arrayList = new ArrayList();
                e10.put(this.f5337e, arrayList);
            } else if (arrayList.size() > 0) {
                arrayList2 = new ArrayList(arrayList);
            }
            arrayList.add(this.f5336d);
            this.f5336d.c(new C0072a(e10));
            this.f5336d.m(this.f5337e, false);
            if (arrayList2 != null) {
                Iterator it = arrayList2.iterator();
                while (it.hasNext()) {
                    ((Transition) it.next()).g0(this.f5337e);
                }
            }
            this.f5336d.c0(this.f5337e);
            return true;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            a();
            x.f5335c.remove(this.f5337e);
            ArrayList arrayList = (ArrayList) x.e().get(this.f5337e);
            if (arrayList != null && arrayList.size() > 0) {
                Iterator it = arrayList.iterator();
                while (it.hasNext()) {
                    ((Transition) it.next()).g0(this.f5337e);
                }
            }
            this.f5336d.o(true);
        }
    }

    public static void a(ViewGroup viewGroup, Transition transition) {
        if (!f5335c.contains(viewGroup) && viewGroup.isLaidOut()) {
            f5335c.add(viewGroup);
            if (transition == null) {
                transition = f5333a;
            }
            Transition clone = transition.clone();
            h(viewGroup, clone);
            n.f(viewGroup, null);
            g(viewGroup, clone);
        }
    }

    private static void b(n nVar, Transition transition) {
        ViewGroup d10 = nVar.d();
        if (!f5335c.contains(d10)) {
            n c10 = n.c(d10);
            if (transition == null) {
                if (c10 != null) {
                    c10.b();
                }
                nVar.a();
                return;
            }
            f5335c.add(d10);
            Transition clone = transition.clone();
            if (c10 != null && c10.e()) {
                clone.j0(true);
            }
            h(d10, clone);
            nVar.a();
            g(d10, clone);
        }
    }

    public static z c(ViewGroup viewGroup, Transition transition) {
        if (f5335c.contains(viewGroup) || !viewGroup.isLaidOut() || Build.VERSION.SDK_INT < 34) {
            return null;
        }
        if (transition.Q()) {
            f5335c.add(viewGroup);
            Transition clone = transition.clone();
            a0 a0Var = new a0();
            a0Var.v0(clone);
            h(viewGroup, a0Var);
            n.f(viewGroup, null);
            g(viewGroup, a0Var);
            viewGroup.invalidate();
            return a0Var.s();
        }
        throw new IllegalArgumentException("The Transition must support seeking.");
    }

    public static void d(ViewGroup viewGroup) {
        f5335c.remove(viewGroup);
        ArrayList arrayList = (ArrayList) e().get(viewGroup);
        if (arrayList != null && !arrayList.isEmpty()) {
            ArrayList arrayList2 = new ArrayList(arrayList);
            for (int size = arrayList2.size() - 1; size >= 0; size--) {
                ((Transition) arrayList2.get(size)).u(viewGroup);
            }
        }
    }

    static u0.a e() {
        u0.a aVar;
        WeakReference weakReference = (WeakReference) f5334b.get();
        if (weakReference != null && (aVar = (u0.a) weakReference.get()) != null) {
            return aVar;
        }
        u0.a aVar2 = new u0.a();
        f5334b.set(new WeakReference(aVar2));
        return aVar2;
    }

    public static void f(n nVar, Transition transition) {
        b(nVar, transition);
    }

    private static void g(ViewGroup viewGroup, Transition transition) {
        if (transition != null && viewGroup != null) {
            a aVar = new a(transition, viewGroup);
            viewGroup.addOnAttachStateChangeListener(aVar);
            viewGroup.getViewTreeObserver().addOnPreDrawListener(aVar);
        }
    }

    private static void h(ViewGroup viewGroup, Transition transition) {
        ArrayList arrayList = (ArrayList) e().get(viewGroup);
        if (arrayList != null && arrayList.size() > 0) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                ((Transition) it.next()).b0(viewGroup);
            }
        }
        if (transition != null) {
            transition.m(viewGroup, true);
        }
        n c10 = n.c(viewGroup);
        if (c10 != null) {
            c10.b();
        }
    }
}
