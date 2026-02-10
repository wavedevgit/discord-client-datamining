package androidx.transition;

import android.graphics.Rect;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import androidx.transition.Transition;
import java.util.ArrayList;
import java.util.List;
import w1.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends androidx.fragment.app.o0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends Transition.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Rect f5406a;

        a(Rect rect) {
            this.f5406a = rect;
        }

        @Override // androidx.transition.Transition.f
        public Rect a(Transition transition) {
            return this.f5406a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Transition.i {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ View f5408a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ArrayList f5409b;

        b(View view, ArrayList arrayList) {
            this.f5408a = view;
            this.f5409b = arrayList;
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionCancel(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition) {
            transition.h0(this);
            this.f5408a.setVisibility(8);
            int size = this.f5409b.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((View) this.f5409b.get(i10)).setVisibility(0);
            }
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionPause(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionResume(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionStart(Transition transition) {
            transition.h0(this);
            transition.c(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends w {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Object f5411a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ArrayList f5412b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Object f5413c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ArrayList f5414d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Object f5415e;

        /* renamed from: f  reason: collision with root package name */
        final /* synthetic */ ArrayList f5416f;

        c(Object obj, ArrayList arrayList, Object obj2, ArrayList arrayList2, Object obj3, ArrayList arrayList3) {
            this.f5411a = obj;
            this.f5412b = arrayList;
            this.f5413c = obj2;
            this.f5414d = arrayList2;
            this.f5415e = obj3;
            this.f5416f = arrayList3;
        }

        @Override // androidx.transition.w, androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition) {
            transition.h0(this);
        }

        @Override // androidx.transition.w, androidx.transition.Transition.i
        public void onTransitionStart(Transition transition) {
            Object obj = this.f5411a;
            if (obj != null) {
                g.this.E(obj, this.f5412b, null);
            }
            Object obj2 = this.f5413c;
            if (obj2 != null) {
                g.this.E(obj2, this.f5414d, null);
            }
            Object obj3 = this.f5415e;
            if (obj3 != null) {
                g.this.E(obj3, this.f5416f, null);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements Transition.i {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Runnable f5418a;

        d(Runnable runnable) {
            this.f5418a = runnable;
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionCancel(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionEnd(Transition transition) {
            this.f5418a.run();
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionPause(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionResume(Transition transition) {
        }

        @Override // androidx.transition.Transition.i
        public void onTransitionStart(Transition transition) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class e extends Transition.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Rect f5420a;

        e(Rect rect) {
            this.f5420a = rect;
        }

        @Override // androidx.transition.Transition.f
        public Rect a(Transition transition) {
            Rect rect = this.f5420a;
            if (rect != null && !rect.isEmpty()) {
                return this.f5420a;
            }
            return null;
        }
    }

    public static /* synthetic */ void C(Runnable runnable, Transition transition, Runnable runnable2) {
        if (runnable == null) {
            transition.cancel();
            runnable2.run();
            return;
        }
        runnable.run();
    }

    private static boolean D(Transition transition) {
        if (androidx.fragment.app.o0.l(transition.K()) && androidx.fragment.app.o0.l(transition.L()) && androidx.fragment.app.o0.l(transition.M())) {
            return false;
        }
        return true;
    }

    @Override // androidx.fragment.app.o0
    public void A(Object obj, ArrayList arrayList, ArrayList arrayList2) {
        a0 a0Var = (a0) obj;
        if (a0Var != null) {
            a0Var.N().clear();
            a0Var.N().addAll(arrayList2);
            E(a0Var, arrayList, arrayList2);
        }
    }

    @Override // androidx.fragment.app.o0
    public Object B(Object obj) {
        if (obj == null) {
            return null;
        }
        a0 a0Var = new a0();
        a0Var.y0((Transition) obj);
        return a0Var;
    }

    public void E(Object obj, ArrayList arrayList, ArrayList arrayList2) {
        int size;
        Transition transition = (Transition) obj;
        int i10 = 0;
        if (transition instanceof a0) {
            a0 a0Var = (a0) transition;
            int B0 = a0Var.B0();
            while (i10 < B0) {
                E(a0Var.A0(i10), arrayList, arrayList2);
                i10++;
            }
        } else if (!D(transition)) {
            List N = transition.N();
            if (N.size() == arrayList.size() && N.containsAll(arrayList)) {
                if (arrayList2 == null) {
                    size = 0;
                } else {
                    size = arrayList2.size();
                }
                while (i10 < size) {
                    transition.d((View) arrayList2.get(i10));
                    i10++;
                }
                for (int size2 = arrayList.size() - 1; size2 >= 0; size2--) {
                    transition.i0((View) arrayList.get(size2));
                }
            }
        }
    }

    @Override // androidx.fragment.app.o0
    public void a(Object obj, View view) {
        if (obj != null) {
            ((Transition) obj).d(view);
        }
    }

    @Override // androidx.fragment.app.o0
    public void b(Object obj, ArrayList arrayList) {
        Transition transition = (Transition) obj;
        if (transition != null) {
            int i10 = 0;
            if (transition instanceof a0) {
                a0 a0Var = (a0) transition;
                int B0 = a0Var.B0();
                while (i10 < B0) {
                    b(a0Var.A0(i10), arrayList);
                    i10++;
                }
            } else if (!D(transition) && androidx.fragment.app.o0.l(transition.N())) {
                int size = arrayList.size();
                while (i10 < size) {
                    transition.d((View) arrayList.get(i10));
                    i10++;
                }
            }
        }
    }

    @Override // androidx.fragment.app.o0
    public void c(Object obj) {
        ((z) obj).a();
    }

    @Override // androidx.fragment.app.o0
    public void d(Object obj, Runnable runnable) {
        ((z) obj).e(runnable);
    }

    @Override // androidx.fragment.app.o0
    public void e(ViewGroup viewGroup, Object obj) {
        x.a(viewGroup, (Transition) obj);
    }

    @Override // androidx.fragment.app.o0
    public boolean g(Object obj) {
        return obj instanceof Transition;
    }

    @Override // androidx.fragment.app.o0
    public Object h(Object obj) {
        if (obj != null) {
            return ((Transition) obj).clone();
        }
        return null;
    }

    @Override // androidx.fragment.app.o0
    public Object j(ViewGroup viewGroup, Object obj) {
        return x.c(viewGroup, (Transition) obj);
    }

    @Override // androidx.fragment.app.o0
    public boolean m() {
        return true;
    }

    @Override // androidx.fragment.app.o0
    public boolean n(Object obj) {
        boolean T = ((Transition) obj).T();
        if (!T) {
            Log.v("FragmentManager", "Predictive back not available for AndroidX Transition " + obj + ". Please enable seeking support for the designated transition by overriding isSeekingSupported().");
        }
        return T;
    }

    @Override // androidx.fragment.app.o0
    public Object o(Object obj, Object obj2, Object obj3) {
        Transition transition = (Transition) obj;
        Transition transition2 = (Transition) obj2;
        Transition transition3 = (Transition) obj3;
        if (transition != null && transition2 != null) {
            transition = new a0().y0(transition).y0(transition2).H0(1);
        } else if (transition == null) {
            if (transition2 != null) {
                transition = transition2;
            } else {
                transition = null;
            }
        }
        if (transition3 != null) {
            a0 a0Var = new a0();
            if (transition != null) {
                a0Var.y0(transition);
            }
            a0Var.y0(transition3);
            return a0Var;
        }
        return transition;
    }

    @Override // androidx.fragment.app.o0
    public Object p(Object obj, Object obj2, Object obj3) {
        a0 a0Var = new a0();
        if (obj != null) {
            a0Var.y0((Transition) obj);
        }
        if (obj2 != null) {
            a0Var.y0((Transition) obj2);
        }
        if (obj3 != null) {
            a0Var.y0((Transition) obj3);
        }
        return a0Var;
    }

    @Override // androidx.fragment.app.o0
    public void r(Object obj, View view, ArrayList arrayList) {
        ((Transition) obj).c(new b(view, arrayList));
    }

    @Override // androidx.fragment.app.o0
    public void s(Object obj, Object obj2, ArrayList arrayList, Object obj3, ArrayList arrayList2, Object obj4, ArrayList arrayList3) {
        ((Transition) obj).c(new c(obj2, arrayList, obj3, arrayList2, obj4, arrayList3));
    }

    @Override // androidx.fragment.app.o0
    public void t(Object obj, float f10) {
        z zVar = (z) obj;
        if (zVar.isReady()) {
            long c10 = f10 * ((float) zVar.c());
            if (c10 == 0) {
                c10 = 1;
            }
            if (c10 == zVar.c()) {
                c10 = zVar.c() - 1;
            }
            zVar.d(c10);
        }
    }

    @Override // androidx.fragment.app.o0
    public void u(Object obj, Rect rect) {
        if (obj != null) {
            ((Transition) obj).p0(new e(rect));
        }
    }

    @Override // androidx.fragment.app.o0
    public void v(Object obj, View view) {
        if (view != null) {
            Rect rect = new Rect();
            k(view, rect);
            ((Transition) obj).p0(new a(rect));
        }
    }

    @Override // androidx.fragment.app.o0
    public void w(Fragment fragment, Object obj, w1.d dVar, Runnable runnable) {
        x(fragment, obj, dVar, null, runnable);
    }

    @Override // androidx.fragment.app.o0
    public void x(Fragment fragment, Object obj, w1.d dVar, final Runnable runnable, final Runnable runnable2) {
        final Transition transition = (Transition) obj;
        dVar.b(new d.a() { // from class: androidx.transition.f
            @Override // w1.d.a
            public final void onCancel() {
                g.C(runnable, transition, runnable2);
            }
        });
        transition.c(new d(runnable2));
    }

    @Override // androidx.fragment.app.o0
    public void z(Object obj, View view, ArrayList arrayList) {
        a0 a0Var = (a0) obj;
        List N = a0Var.N();
        N.clear();
        int size = arrayList.size();
        for (int i10 = 0; i10 < size; i10++) {
            androidx.fragment.app.o0.f(N, (View) arrayList.get(i10));
        }
        N.add(view);
        arrayList.add(view);
        b(a0Var, arrayList);
    }
}
