package androidx.transition;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.animation.TimeInterpolator;
import android.graphics.Path;
import android.graphics.Rect;
import android.os.Build;
import android.util.SparseArray;
import android.util.SparseIntArray;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowId;
import android.view.animation.AnimationUtils;
import android.widget.ListView;
import androidx.core.util.Consumer;
import androidx.dynamicanimation.animation.SpringAnimation;
import androidx.dynamicanimation.animation.c;
import androidx.transition.Transition;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class Transition implements Cloneable {
    private static final Animator[] X = new Animator[0];
    private static final int[] Y = {2, 1, 3, 4};
    private static final k Z = new a();

    /* renamed from: a0  reason: collision with root package name */
    private static ThreadLocal f5284a0 = new ThreadLocal();
    private ArrayList E;
    private ArrayList F;
    private i[] G;
    y Q;
    private f R;
    private u0.a S;
    long U;
    h V;
    long W;

    /* renamed from: d  reason: collision with root package name */
    private String f5285d = getClass().getName();

    /* renamed from: e  reason: collision with root package name */
    private long f5286e = -1;

    /* renamed from: i  reason: collision with root package name */
    long f5287i = -1;

    /* renamed from: o  reason: collision with root package name */
    private TimeInterpolator f5288o = null;

    /* renamed from: p  reason: collision with root package name */
    ArrayList f5289p = new ArrayList();

    /* renamed from: q  reason: collision with root package name */
    ArrayList f5290q = new ArrayList();

    /* renamed from: r  reason: collision with root package name */
    private ArrayList f5291r = null;

    /* renamed from: s  reason: collision with root package name */
    private ArrayList f5292s = null;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f5293t = null;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f5294u = null;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f5295v = null;

    /* renamed from: w  reason: collision with root package name */
    private ArrayList f5296w = null;

    /* renamed from: x  reason: collision with root package name */
    private ArrayList f5297x = null;

    /* renamed from: y  reason: collision with root package name */
    private ArrayList f5298y = null;

    /* renamed from: z  reason: collision with root package name */
    private ArrayList f5299z = null;
    private d0 A = new d0();
    private d0 B = new d0();
    a0 C = null;
    private int[] D = Y;
    boolean H = false;
    ArrayList I = new ArrayList();
    private Animator[] J = X;
    int K = 0;
    private boolean L = false;
    boolean M = false;
    private Transition N = null;
    private ArrayList O = null;
    ArrayList P = new ArrayList();
    private k T = Z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends k {
        a() {
        }

        @Override // androidx.transition.k
        public Path a(float f10, float f11, float f12, float f13) {
            Path path = new Path();
            path.moveTo(f10, f11);
            path.lineTo(f12, f13);
            return path;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ u0.a f5300a;

        b(u0.a aVar) {
            this.f5300a = aVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f5300a.remove(animator);
            Transition.this.I.remove(animator);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            Transition.this.I.add(animator);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c extends AnimatorListenerAdapter {
        c() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            Transition.this.u();
            animator.removeListener(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        View f5303a;

        /* renamed from: b  reason: collision with root package name */
        String f5304b;

        /* renamed from: c  reason: collision with root package name */
        c0 f5305c;

        /* renamed from: d  reason: collision with root package name */
        WindowId f5306d;

        /* renamed from: e  reason: collision with root package name */
        Transition f5307e;

        /* renamed from: f  reason: collision with root package name */
        Animator f5308f;

        d(View view, String str, Transition transition, WindowId windowId, c0 c0Var, Animator animator) {
            this.f5303a = view;
            this.f5304b = str;
            this.f5305c = c0Var;
            this.f5306d = windowId;
            this.f5307e = transition;
            this.f5308f = animator;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {
        static ArrayList a(ArrayList arrayList, Object obj) {
            if (arrayList == null) {
                arrayList = new ArrayList();
            }
            if (!arrayList.contains(obj)) {
                arrayList.add(obj);
            }
            return arrayList;
        }

        static ArrayList b(ArrayList arrayList, Object obj) {
            if (arrayList != null) {
                arrayList.remove(obj);
                if (arrayList.isEmpty()) {
                    return null;
                }
                return arrayList;
            }
            return arrayList;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class f {
        public abstract Rect a(Transition transition);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g {
        static long a(Animator animator) {
            return animator.getTotalDuration();
        }

        static void b(Animator animator, long j10) {
            ((AnimatorSet) animator).setCurrentPlayTime(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class h extends w implements z, c.r {

        /* renamed from: d  reason: collision with root package name */
        private boolean f5312d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f5313e;

        /* renamed from: f  reason: collision with root package name */
        private SpringAnimation f5314f;

        /* renamed from: i  reason: collision with root package name */
        private Runnable f5317i;

        /* renamed from: a  reason: collision with root package name */
        private long f5309a = -1;

        /* renamed from: b  reason: collision with root package name */
        private ArrayList f5310b = null;

        /* renamed from: c  reason: collision with root package name */
        private ArrayList f5311c = null;

        /* renamed from: g  reason: collision with root package name */
        private Consumer[] f5315g = null;

        /* renamed from: h  reason: collision with root package name */
        private final f0 f5316h = new f0();

        h() {
        }

        public static /* synthetic */ void f(h hVar, androidx.dynamicanimation.animation.c cVar, boolean z10, float f10, float f11) {
            if (!z10) {
                if (f10 < 1.0f) {
                    long c10 = hVar.c();
                    Transition A0 = ((a0) Transition.this).A0(0);
                    Transition transition = A0.N;
                    A0.N = null;
                    Transition.this.n0(-1L, hVar.f5309a);
                    Transition.this.n0(c10, -1L);
                    hVar.f5309a = c10;
                    Runnable runnable = hVar.f5317i;
                    if (runnable != null) {
                        runnable.run();
                    }
                    Transition.this.P.clear();
                    if (transition != null) {
                        transition.d0(j.f5320b, true);
                        return;
                    }
                    return;
                }
                Transition.this.d0(j.f5320b, false);
                return;
            }
            hVar.getClass();
        }

        private void g() {
            ArrayList arrayList = this.f5311c;
            if (arrayList != null && !arrayList.isEmpty()) {
                int size = this.f5311c.size();
                if (this.f5315g == null) {
                    this.f5315g = new Consumer[size];
                }
                Consumer[] consumerArr = (Consumer[]) this.f5311c.toArray(this.f5315g);
                this.f5315g = null;
                for (int i10 = 0; i10 < size; i10++) {
                    consumerArr[i10].accept(this);
                    consumerArr[i10] = null;
                }
                this.f5315g = consumerArr;
            }
        }

        private void h() {
            if (this.f5314f != null) {
                return;
            }
            this.f5316h.a(AnimationUtils.currentAnimationTimeMillis(), (float) this.f5309a);
            this.f5314f = new SpringAnimation(new b3.e());
            androidx.dynamicanimation.animation.d dVar = new androidx.dynamicanimation.animation.d();
            dVar.f(1.0f);
            dVar.h(200.0f);
            this.f5314f.z(dVar);
            this.f5314f.o((float) this.f5309a);
            this.f5314f.c(this);
            this.f5314f.p(this.f5316h.b());
            this.f5314f.k((float) (c() + 1));
            this.f5314f.l(-1.0f);
            this.f5314f.m(4.0f);
            this.f5314f.b(new c.q() { // from class: androidx.transition.q
                @Override // androidx.dynamicanimation.animation.c.q
                public final void a(androidx.dynamicanimation.animation.c cVar, boolean z10, float f10, float f11) {
                    Transition.h.f(Transition.h.this, cVar, z10, f10, f11);
                }
            });
        }

        @Override // androidx.transition.z
        public void a() {
            h();
            this.f5314f.u((float) (c() + 1));
        }

        @Override // androidx.dynamicanimation.animation.c.r
        public void b(androidx.dynamicanimation.animation.c cVar, float f10, float f11) {
            long max = Math.max(-1L, Math.min(c() + 1, Math.round(f10)));
            Transition.this.n0(max, this.f5309a);
            this.f5309a = max;
            g();
        }

        @Override // androidx.transition.z
        public long c() {
            return Transition.this.O();
        }

        @Override // androidx.transition.z
        public void d(long j10) {
            if (this.f5314f == null) {
                if (j10 != this.f5309a && isReady()) {
                    if (!this.f5313e) {
                        if (j10 == 0 && this.f5309a > 0) {
                            j10 = -1;
                        } else {
                            long c10 = c();
                            if (j10 == c10 && this.f5309a < c10) {
                                j10 = 1 + c10;
                            }
                        }
                        long j11 = this.f5309a;
                        if (j10 != j11) {
                            Transition.this.n0(j10, j11);
                            this.f5309a = j10;
                        }
                    }
                    g();
                    this.f5316h.a(AnimationUtils.currentAnimationTimeMillis(), (float) j10);
                    return;
                }
                return;
            }
            throw new IllegalStateException("setCurrentPlayTimeMillis() called after animation has been started");
        }

        @Override // androidx.transition.z
        public void e(Runnable runnable) {
            this.f5317i = runnable;
            h();
            this.f5314f.u(0.0f);
        }

        void i() {
            long j10 = 0;
            if (c() == 0) {
                j10 = 1;
            }
            Transition.this.n0(j10, this.f5309a);
            this.f5309a = j10;
        }

        @Override // androidx.transition.z
        public boolean isReady() {
            return this.f5312d;
        }

        public void j() {
            this.f5312d = true;
            ArrayList arrayList = this.f5310b;
            if (arrayList != null) {
                this.f5310b = null;
                for (int i10 = 0; i10 < arrayList.size(); i10++) {
                    ((Consumer) arrayList.get(i10)).accept(this);
                }
            }
            g();
        }

        @Override // androidx.transition.w, androidx.transition.Transition.i
        public void onTransitionCancel(Transition transition) {
            this.f5313e = true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface i {
        void onTransitionCancel(Transition transition);

        void onTransitionEnd(Transition transition);

        default void onTransitionEnd(Transition transition, boolean z10) {
            onTransitionEnd(transition);
        }

        void onTransitionPause(Transition transition);

        void onTransitionResume(Transition transition);

        void onTransitionStart(Transition transition);

        default void onTransitionStart(Transition transition, boolean z10) {
            onTransitionStart(transition);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface j {

        /* renamed from: a  reason: collision with root package name */
        public static final j f5319a = new j() { // from class: androidx.transition.r
            @Override // androidx.transition.Transition.j
            public final void b(Transition.i iVar, Transition transition, boolean z10) {
                iVar.onTransitionStart(transition, z10);
            }
        };

        /* renamed from: b  reason: collision with root package name */
        public static final j f5320b = new j() { // from class: androidx.transition.s
            @Override // androidx.transition.Transition.j
            public final void b(Transition.i iVar, Transition transition, boolean z10) {
                iVar.onTransitionEnd(transition, z10);
            }
        };

        /* renamed from: c  reason: collision with root package name */
        public static final j f5321c = new j() { // from class: androidx.transition.t
            @Override // androidx.transition.Transition.j
            public final void b(Transition.i iVar, Transition transition, boolean z10) {
                iVar.onTransitionCancel(transition);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public static final j f5322d = new j() { // from class: androidx.transition.u
            @Override // androidx.transition.Transition.j
            public final void b(Transition.i iVar, Transition transition, boolean z10) {
                iVar.onTransitionPause(transition);
            }
        };

        /* renamed from: e  reason: collision with root package name */
        public static final j f5323e = new j() { // from class: androidx.transition.v
            @Override // androidx.transition.Transition.j
            public final void b(Transition.i iVar, Transition transition, boolean z10) {
                iVar.onTransitionResume(transition);
            }
        };

        void b(i iVar, Transition transition, boolean z10);
    }

    private static u0.a I() {
        u0.a aVar = (u0.a) f5284a0.get();
        if (aVar == null) {
            u0.a aVar2 = new u0.a();
            f5284a0.set(aVar2);
            return aVar2;
        }
        return aVar;
    }

    private static boolean W(c0 c0Var, c0 c0Var2, String str) {
        Object obj = c0Var.f5375a.get(str);
        Object obj2 = c0Var2.f5375a.get(str);
        if (obj == null && obj2 == null) {
            return false;
        }
        if (obj == null || obj2 == null) {
            return true;
        }
        return !obj.equals(obj2);
    }

    private void X(u0.a aVar, u0.a aVar2, SparseArray sparseArray, SparseArray sparseArray2) {
        View view;
        int size = sparseArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            View view2 = (View) sparseArray.valueAt(i10);
            if (view2 != null && V(view2) && (view = (View) sparseArray2.get(sparseArray.keyAt(i10))) != null && V(view)) {
                c0 c0Var = (c0) aVar.get(view2);
                c0 c0Var2 = (c0) aVar2.get(view);
                if (c0Var != null && c0Var2 != null) {
                    this.E.add(c0Var);
                    this.F.add(c0Var2);
                    aVar.remove(view2);
                    aVar2.remove(view);
                }
            }
        }
    }

    private void Y(u0.a aVar, u0.a aVar2) {
        c0 c0Var;
        for (int size = aVar.size() - 1; size >= 0; size--) {
            View view = (View) aVar.f(size);
            if (view != null && V(view) && (c0Var = (c0) aVar2.remove(view)) != null && V(c0Var.f5376b)) {
                this.E.add((c0) aVar.h(size));
                this.F.add(c0Var);
            }
        }
    }

    private void Z(u0.a aVar, u0.a aVar2, u0.j jVar, u0.j jVar2) {
        View view;
        int k10 = jVar.k();
        for (int i10 = 0; i10 < k10; i10++) {
            View view2 = (View) jVar.l(i10);
            if (view2 != null && V(view2) && (view = (View) jVar2.d(jVar.f(i10))) != null && V(view)) {
                c0 c0Var = (c0) aVar.get(view2);
                c0 c0Var2 = (c0) aVar2.get(view);
                if (c0Var != null && c0Var2 != null) {
                    this.E.add(c0Var);
                    this.F.add(c0Var2);
                    aVar.remove(view2);
                    aVar2.remove(view);
                }
            }
        }
    }

    private void a0(u0.a aVar, u0.a aVar2, u0.a aVar3, u0.a aVar4) {
        View view;
        int size = aVar3.size();
        for (int i10 = 0; i10 < size; i10++) {
            View view2 = (View) aVar3.j(i10);
            if (view2 != null && V(view2) && (view = (View) aVar4.get(aVar3.f(i10))) != null && V(view)) {
                c0 c0Var = (c0) aVar.get(view2);
                c0 c0Var2 = (c0) aVar2.get(view);
                if (c0Var != null && c0Var2 != null) {
                    this.E.add(c0Var);
                    this.F.add(c0Var2);
                    aVar.remove(view2);
                    aVar2.remove(view);
                }
            }
        }
    }

    private void b0(d0 d0Var, d0 d0Var2) {
        u0.a aVar = new u0.a(d0Var.f5386a);
        u0.a aVar2 = new u0.a(d0Var2.f5386a);
        int i10 = 0;
        while (true) {
            int[] iArr = this.D;
            if (i10 < iArr.length) {
                int i11 = iArr[i10];
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 != 3) {
                            if (i11 == 4) {
                                Z(aVar, aVar2, d0Var.f5388c, d0Var2.f5388c);
                            }
                        } else {
                            X(aVar, aVar2, d0Var.f5387b, d0Var2.f5387b);
                        }
                    } else {
                        a0(aVar, aVar2, d0Var.f5389d, d0Var2.f5389d);
                    }
                } else {
                    Y(aVar, aVar2);
                }
                i10++;
            } else {
                e(aVar, aVar2);
                return;
            }
        }
    }

    private void c0(Transition transition, j jVar, boolean z10) {
        Transition transition2 = this.N;
        if (transition2 != null) {
            transition2.c0(transition, jVar, z10);
        }
        ArrayList arrayList = this.O;
        if (arrayList != null && !arrayList.isEmpty()) {
            int size = this.O.size();
            i[] iVarArr = this.G;
            if (iVarArr == null) {
                iVarArr = new i[size];
            }
            this.G = null;
            i[] iVarArr2 = (i[]) this.O.toArray(iVarArr);
            for (int i10 = 0; i10 < size; i10++) {
                jVar.b(iVarArr2[i10], transition, z10);
                iVarArr2[i10] = null;
            }
            this.G = iVarArr2;
        }
    }

    private void e(u0.a aVar, u0.a aVar2) {
        for (int i10 = 0; i10 < aVar.size(); i10++) {
            c0 c0Var = (c0) aVar.j(i10);
            if (V(c0Var.f5376b)) {
                this.E.add(c0Var);
                this.F.add(null);
            }
        }
        for (int i11 = 0; i11 < aVar2.size(); i11++) {
            c0 c0Var2 = (c0) aVar2.j(i11);
            if (V(c0Var2.f5376b)) {
                this.F.add(c0Var2);
                this.E.add(null);
            }
        }
    }

    private static void f(d0 d0Var, View view, c0 c0Var) {
        d0Var.f5386a.put(view, c0Var);
        int id2 = view.getId();
        if (id2 >= 0) {
            if (d0Var.f5387b.indexOfKey(id2) >= 0) {
                d0Var.f5387b.put(id2, null);
            } else {
                d0Var.f5387b.put(id2, view);
            }
        }
        String H = androidx.core.view.i0.H(view);
        if (H != null) {
            if (d0Var.f5389d.containsKey(H)) {
                d0Var.f5389d.put(H, null);
            } else {
                d0Var.f5389d.put(H, view);
            }
        }
        if (view.getParent() instanceof ListView) {
            ListView listView = (ListView) view.getParent();
            if (listView.getAdapter().hasStableIds()) {
                long itemIdAtPosition = listView.getItemIdAtPosition(listView.getPositionForView(view));
                if (d0Var.f5388c.e(itemIdAtPosition) >= 0) {
                    View view2 = (View) d0Var.f5388c.d(itemIdAtPosition);
                    if (view2 != null) {
                        view2.setHasTransientState(false);
                        d0Var.f5388c.g(itemIdAtPosition, null);
                        return;
                    }
                    return;
                }
                view.setHasTransientState(true);
                d0Var.f5388c.g(itemIdAtPosition, view);
            }
        }
    }

    private void j(View view, boolean z10) {
        if (view != null) {
            int id2 = view.getId();
            ArrayList arrayList = this.f5293t;
            if (arrayList == null || !arrayList.contains(Integer.valueOf(id2))) {
                ArrayList arrayList2 = this.f5294u;
                if (arrayList2 == null || !arrayList2.contains(view)) {
                    ArrayList arrayList3 = this.f5295v;
                    if (arrayList3 != null) {
                        int size = arrayList3.size();
                        for (int i10 = 0; i10 < size; i10++) {
                            if (((Class) this.f5295v.get(i10)).isInstance(view)) {
                                return;
                            }
                        }
                    }
                    if (view.getParent() instanceof ViewGroup) {
                        c0 c0Var = new c0(view);
                        if (z10) {
                            l(c0Var);
                        } else {
                            h(c0Var);
                        }
                        c0Var.f5377c.add(this);
                        k(c0Var);
                        if (z10) {
                            f(this.A, view, c0Var);
                        } else {
                            f(this.B, view, c0Var);
                        }
                    }
                    if (view instanceof ViewGroup) {
                        ArrayList arrayList4 = this.f5297x;
                        if (arrayList4 == null || !arrayList4.contains(Integer.valueOf(id2))) {
                            ArrayList arrayList5 = this.f5298y;
                            if (arrayList5 == null || !arrayList5.contains(view)) {
                                ArrayList arrayList6 = this.f5299z;
                                if (arrayList6 != null) {
                                    int size2 = arrayList6.size();
                                    for (int i11 = 0; i11 < size2; i11++) {
                                        if (((Class) this.f5299z.get(i11)).isInstance(view)) {
                                            return;
                                        }
                                    }
                                }
                                ViewGroup viewGroup = (ViewGroup) view;
                                for (int i12 = 0; i12 < viewGroup.getChildCount(); i12++) {
                                    j(viewGroup.getChildAt(i12), z10);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    private void k0(Animator animator, u0.a aVar) {
        if (animator != null) {
            animator.addListener(new b(aVar));
            g(animator);
        }
    }

    private ArrayList w(ArrayList arrayList, Class cls, boolean z10) {
        if (cls != null) {
            if (z10) {
                return e.a(arrayList, cls);
            }
            return e.b(arrayList, cls);
        }
        return arrayList;
    }

    public f A() {
        return this.R;
    }

    public TimeInterpolator B() {
        return this.f5288o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0 D(View view, boolean z10) {
        ArrayList arrayList;
        ArrayList arrayList2;
        a0 a0Var = this.C;
        if (a0Var != null) {
            return a0Var.D(view, z10);
        }
        if (z10) {
            arrayList = this.E;
        } else {
            arrayList = this.F;
        }
        if (arrayList == null) {
            return null;
        }
        int size = arrayList.size();
        int i10 = 0;
        while (true) {
            if (i10 < size) {
                c0 c0Var = (c0) arrayList.get(i10);
                if (c0Var == null) {
                    return null;
                }
                if (c0Var.f5376b == view) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        if (i10 < 0) {
            return null;
        }
        if (z10) {
            arrayList2 = this.F;
        } else {
            arrayList2 = this.E;
        }
        return (c0) arrayList2.get(i10);
    }

    public String E() {
        return this.f5285d;
    }

    public k F() {
        return this.T;
    }

    public y G() {
        return this.Q;
    }

    public final Transition H() {
        a0 a0Var = this.C;
        if (a0Var != null) {
            return a0Var.H();
        }
        return this;
    }

    public long J() {
        return this.f5286e;
    }

    public List K() {
        return this.f5289p;
    }

    public List L() {
        return this.f5291r;
    }

    public List M() {
        return this.f5292s;
    }

    public List N() {
        return this.f5290q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long O() {
        return this.U;
    }

    public String[] P() {
        return null;
    }

    public c0 R(View view, boolean z10) {
        d0 d0Var;
        a0 a0Var = this.C;
        if (a0Var != null) {
            return a0Var.R(view, z10);
        }
        if (z10) {
            d0Var = this.A;
        } else {
            d0Var = this.B;
        }
        return (c0) d0Var.f5386a.get(view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean S() {
        return !this.I.isEmpty();
    }

    public boolean T() {
        return false;
    }

    public boolean U(c0 c0Var, c0 c0Var2) {
        if (c0Var != null && c0Var2 != null) {
            String[] P = P();
            if (P != null) {
                for (String str : P) {
                    if (W(c0Var, c0Var2, str)) {
                        return true;
                    }
                }
            } else {
                for (String str2 : c0Var.f5375a.keySet()) {
                    if (W(c0Var, c0Var2, str2)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean V(View view) {
        ArrayList arrayList;
        ArrayList arrayList2;
        int id2 = view.getId();
        ArrayList arrayList3 = this.f5293t;
        if (arrayList3 != null && arrayList3.contains(Integer.valueOf(id2))) {
            return false;
        }
        ArrayList arrayList4 = this.f5294u;
        if (arrayList4 != null && arrayList4.contains(view)) {
            return false;
        }
        ArrayList arrayList5 = this.f5295v;
        if (arrayList5 != null) {
            int size = arrayList5.size();
            for (int i10 = 0; i10 < size; i10++) {
                if (((Class) this.f5295v.get(i10)).isInstance(view)) {
                    return false;
                }
            }
        }
        if (this.f5296w != null && androidx.core.view.i0.H(view) != null && this.f5296w.contains(androidx.core.view.i0.H(view))) {
            return false;
        }
        if ((this.f5289p.size() == 0 && this.f5290q.size() == 0 && (((arrayList = this.f5292s) == null || arrayList.isEmpty()) && ((arrayList2 = this.f5291r) == null || arrayList2.isEmpty()))) || this.f5289p.contains(Integer.valueOf(id2)) || this.f5290q.contains(view)) {
            return true;
        }
        ArrayList arrayList6 = this.f5291r;
        if (arrayList6 != null && arrayList6.contains(androidx.core.view.i0.H(view))) {
            return true;
        }
        if (this.f5292s != null) {
            for (int i11 = 0; i11 < this.f5292s.size(); i11++) {
                if (((Class) this.f5292s.get(i11)).isInstance(view)) {
                    return true;
                }
            }
        }
        return false;
    }

    public Transition c(i iVar) {
        if (this.O == null) {
            this.O = new ArrayList();
        }
        this.O.add(iVar);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void cancel() {
        int size = this.I.size();
        Animator[] animatorArr = (Animator[]) this.I.toArray(this.J);
        this.J = X;
        for (int i10 = size - 1; i10 >= 0; i10--) {
            Animator animator = animatorArr[i10];
            animatorArr[i10] = null;
            animator.cancel();
        }
        this.J = animatorArr;
        d0(j.f5321c, false);
    }

    public Transition d(View view) {
        this.f5290q.add(view);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(j jVar, boolean z10) {
        c0(this, jVar, z10);
    }

    public void e0(View view) {
        if (!this.M) {
            int size = this.I.size();
            Animator[] animatorArr = (Animator[]) this.I.toArray(this.J);
            this.J = X;
            for (int i10 = size - 1; i10 >= 0; i10--) {
                Animator animator = animatorArr[i10];
                animatorArr[i10] = null;
                animator.pause();
            }
            this.J = animatorArr;
            d0(j.f5322d, false);
            this.L = true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f0(ViewGroup viewGroup) {
        d dVar;
        this.E = new ArrayList();
        this.F = new ArrayList();
        b0(this.A, this.B);
        u0.a I = I();
        int size = I.size();
        WindowId windowId = viewGroup.getWindowId();
        for (int i10 = size - 1; i10 >= 0; i10--) {
            Animator animator = (Animator) I.f(i10);
            if (animator != null && (dVar = (d) I.get(animator)) != null && dVar.f5303a != null && windowId.equals(dVar.f5306d)) {
                c0 c0Var = dVar.f5305c;
                View view = dVar.f5303a;
                c0 R = R(view, true);
                c0 D = D(view, true);
                if (R == null && D == null) {
                    D = (c0) this.B.f5386a.get(view);
                }
                if ((R != null || D != null) && dVar.f5307e.U(c0Var, D)) {
                    Transition transition = dVar.f5307e;
                    if (transition.H().V != null) {
                        animator.cancel();
                        transition.I.remove(animator);
                        I.remove(animator);
                        if (transition.I.size() == 0) {
                            transition.d0(j.f5321c, false);
                            if (!transition.M) {
                                transition.M = true;
                                transition.d0(j.f5320b, false);
                            }
                        }
                    } else if (!animator.isRunning() && !animator.isStarted()) {
                        I.remove(animator);
                    } else {
                        animator.cancel();
                    }
                }
            }
        }
        r(viewGroup, this.A, this.B, this.E, this.F);
        if (this.V == null) {
            l0();
        } else if (Build.VERSION.SDK_INT >= 34) {
            g0();
            this.V.i();
            this.V.j();
        }
    }

    protected void g(Animator animator) {
        if (animator == null) {
            u();
            return;
        }
        if (y() >= 0) {
            animator.setDuration(y());
        }
        if (J() >= 0) {
            animator.setStartDelay(J() + animator.getStartDelay());
        }
        if (B() != null) {
            animator.setInterpolator(B());
        }
        animator.addListener(new c());
        animator.start();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g0() {
        u0.a I = I();
        this.U = 0L;
        for (int i10 = 0; i10 < this.P.size(); i10++) {
            Animator animator = (Animator) this.P.get(i10);
            d dVar = (d) I.get(animator);
            if (animator != null && dVar != null) {
                if (y() >= 0) {
                    dVar.f5308f.setDuration(y());
                }
                if (J() >= 0) {
                    dVar.f5308f.setStartDelay(J() + dVar.f5308f.getStartDelay());
                }
                if (B() != null) {
                    dVar.f5308f.setInterpolator(B());
                }
                this.I.add(animator);
                this.U = Math.max(this.U, g.a(animator));
            }
        }
        this.P.clear();
    }

    public abstract void h(c0 c0Var);

    public Transition h0(i iVar) {
        Transition transition;
        ArrayList arrayList = this.O;
        if (arrayList != null) {
            if (!arrayList.remove(iVar) && (transition = this.N) != null) {
                transition.h0(iVar);
            }
            if (this.O.size() == 0) {
                this.O = null;
            }
        }
        return this;
    }

    public Transition i0(View view) {
        this.f5290q.remove(view);
        return this;
    }

    public void j0(View view) {
        if (this.L) {
            if (!this.M) {
                int size = this.I.size();
                Animator[] animatorArr = (Animator[]) this.I.toArray(this.J);
                this.J = X;
                for (int i10 = size - 1; i10 >= 0; i10--) {
                    Animator animator = animatorArr[i10];
                    animatorArr[i10] = null;
                    animator.resume();
                }
                this.J = animatorArr;
                d0(j.f5323e, false);
            }
            this.L = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(c0 c0Var) {
        String[] b10;
        if (this.Q != null && !c0Var.f5375a.isEmpty() && (b10 = this.Q.b()) != null) {
            for (String str : b10) {
                if (!c0Var.f5375a.containsKey(str)) {
                    this.Q.a(c0Var);
                    return;
                }
            }
        }
    }

    public abstract void l(c0 c0Var);

    /* JADX INFO: Access modifiers changed from: protected */
    public void l0() {
        u0();
        u0.a I = I();
        Iterator it = this.P.iterator();
        while (it.hasNext()) {
            Animator animator = (Animator) it.next();
            if (I.containsKey(animator)) {
                u0();
                k0(animator, I);
            }
        }
        this.P.clear();
        u();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(ViewGroup viewGroup, boolean z10) {
        ArrayList arrayList;
        ArrayList arrayList2;
        u0.a aVar;
        n(z10);
        if ((this.f5289p.size() <= 0 && this.f5290q.size() <= 0) || (((arrayList = this.f5291r) != null && !arrayList.isEmpty()) || ((arrayList2 = this.f5292s) != null && !arrayList2.isEmpty()))) {
            j(viewGroup, z10);
        } else {
            for (int i10 = 0; i10 < this.f5289p.size(); i10++) {
                View findViewById = viewGroup.findViewById(((Integer) this.f5289p.get(i10)).intValue());
                if (findViewById != null) {
                    c0 c0Var = new c0(findViewById);
                    if (z10) {
                        l(c0Var);
                    } else {
                        h(c0Var);
                    }
                    c0Var.f5377c.add(this);
                    k(c0Var);
                    if (z10) {
                        f(this.A, findViewById, c0Var);
                    } else {
                        f(this.B, findViewById, c0Var);
                    }
                }
            }
            for (int i11 = 0; i11 < this.f5290q.size(); i11++) {
                View view = (View) this.f5290q.get(i11);
                c0 c0Var2 = new c0(view);
                if (z10) {
                    l(c0Var2);
                } else {
                    h(c0Var2);
                }
                c0Var2.f5377c.add(this);
                k(c0Var2);
                if (z10) {
                    f(this.A, view, c0Var2);
                } else {
                    f(this.B, view, c0Var2);
                }
            }
        }
        if (!z10 && (aVar = this.S) != null) {
            int size = aVar.size();
            ArrayList arrayList3 = new ArrayList(size);
            for (int i12 = 0; i12 < size; i12++) {
                arrayList3.add((View) this.A.f5389d.remove((String) this.S.f(i12)));
            }
            for (int i13 = 0; i13 < size; i13++) {
                View view2 = (View) arrayList3.get(i13);
                if (view2 != null) {
                    this.A.f5389d.put((String) this.S.j(i13), view2);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m0(boolean z10) {
        this.H = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(boolean z10) {
        if (z10) {
            this.A.f5386a.clear();
            this.A.f5387b.clear();
            this.A.f5388c.a();
            return;
        }
        this.B.f5386a.clear();
        this.B.f5387b.clear();
        this.B.f5388c.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n0(long j10, long j11) {
        boolean z10;
        long O = O();
        int i10 = 0;
        if (j10 < j11) {
            z10 = true;
        } else {
            z10 = false;
        }
        int i11 = (j11 > 0L ? 1 : (j11 == 0L ? 0 : -1));
        if ((i11 < 0 && j10 >= 0) || (j11 > O && j10 <= O)) {
            this.M = false;
            d0(j.f5319a, z10);
        }
        int size = this.I.size();
        Animator[] animatorArr = (Animator[]) this.I.toArray(this.J);
        this.J = X;
        while (i10 < size) {
            Animator animator = animatorArr[i10];
            animatorArr[i10] = null;
            g.b(animator, Math.min(Math.max(0L, j10), g.a(animator)));
            i10++;
            O = O;
        }
        long j12 = O;
        this.J = animatorArr;
        int i12 = (j10 > j12 ? 1 : (j10 == j12 ? 0 : -1));
        if ((i12 > 0 && j11 <= j12) || (j10 < 0 && i11 >= 0)) {
            if (i12 > 0) {
                this.M = true;
            }
            d0(j.f5320b, z10);
        }
    }

    @Override // 
    /* renamed from: o */
    public Transition clone() {
        try {
            Transition transition = (Transition) super.clone();
            transition.P = new ArrayList();
            transition.A = new d0();
            transition.B = new d0();
            transition.E = null;
            transition.F = null;
            transition.V = null;
            transition.N = this;
            transition.O = null;
            return transition;
        } catch (CloneNotSupportedException e10) {
            throw new RuntimeException(e10);
        }
    }

    public Transition o0(long j10) {
        this.f5287i = j10;
        return this;
    }

    public void p0(f fVar) {
        this.R = fVar;
    }

    public Animator q(ViewGroup viewGroup, c0 c0Var, c0 c0Var2) {
        return null;
    }

    public Transition q0(TimeInterpolator timeInterpolator) {
        this.f5288o = timeInterpolator;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(ViewGroup viewGroup, d0 d0Var, d0 d0Var2, ArrayList arrayList, ArrayList arrayList2) {
        boolean z10;
        Animator q10;
        Animator animator;
        int i10;
        boolean z11;
        int i11;
        View view;
        c0 c0Var;
        AnimatorSet animatorSet;
        View view2;
        Animator animator2;
        u0.a I = I();
        SparseIntArray sparseIntArray = new SparseIntArray();
        int size = arrayList.size();
        if (H().V != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        long j10 = LongCompanionObject.MAX_VALUE;
        int i12 = 0;
        while (i12 < size) {
            c0 c0Var2 = (c0) arrayList.get(i12);
            c0 c0Var3 = (c0) arrayList2.get(i12);
            if (c0Var2 != null && !c0Var2.f5377c.contains(this)) {
                c0Var2 = null;
            }
            if (c0Var3 != null && !c0Var3.f5377c.contains(this)) {
                c0Var3 = null;
            }
            if ((c0Var2 == null && c0Var3 == null) || ((c0Var2 != null && c0Var3 != null && !U(c0Var2, c0Var3)) || (q10 = q(viewGroup, c0Var2, c0Var3)) == null)) {
                i10 = size;
                z11 = z10;
                i11 = i12;
            } else {
                if (c0Var3 != null) {
                    View view3 = c0Var3.f5376b;
                    String[] P = P();
                    if (P != null && P.length > 0) {
                        c0Var = new c0(view3);
                        i10 = size;
                        z11 = z10;
                        c0 c0Var4 = (c0) d0Var2.f5386a.get(view3);
                        i11 = i12;
                        if (c0Var4 != null) {
                            int i13 = 0;
                            while (i13 < P.length) {
                                Map map = c0Var.f5375a;
                                int i14 = i13;
                                String str = P[i14];
                                map.put(str, c0Var4.f5375a.get(str));
                                i13 = i14 + 1;
                                P = P;
                            }
                        }
                        int size2 = I.size();
                        int i15 = 0;
                        while (true) {
                            if (i15 < size2) {
                                d dVar = (d) I.get((Animator) I.f(i15));
                                if (dVar.f5305c != null && dVar.f5303a == view3) {
                                    view2 = view3;
                                    if (dVar.f5304b.equals(E()) && dVar.f5305c.equals(c0Var)) {
                                        animator2 = null;
                                        break;
                                    }
                                } else {
                                    view2 = view3;
                                }
                                i15++;
                                view3 = view2;
                            } else {
                                view2 = view3;
                                animator2 = q10;
                                break;
                            }
                        }
                    } else {
                        view2 = view3;
                        i10 = size;
                        z11 = z10;
                        i11 = i12;
                        animator2 = q10;
                        c0Var = null;
                    }
                    animator = animator2;
                    view = view2;
                } else {
                    animator = q10;
                    i10 = size;
                    z11 = z10;
                    i11 = i12;
                    view = c0Var2.f5376b;
                    c0Var = null;
                }
                if (animator != null) {
                    y yVar = this.Q;
                    if (yVar != null) {
                        long c10 = yVar.c(viewGroup, this, c0Var2, c0Var3);
                        sparseIntArray.put(this.P.size(), (int) c10);
                        j10 = Math.min(c10, j10);
                    }
                    long j11 = j10;
                    View view4 = view;
                    c0 c0Var5 = c0Var;
                    Animator animator3 = animator;
                    d dVar2 = new d(view4, E(), this, viewGroup.getWindowId(), c0Var5, animator3);
                    if (z11) {
                        AnimatorSet animatorSet2 = new AnimatorSet();
                        animatorSet2.play(animator3);
                        animatorSet = animatorSet2;
                    } else {
                        animatorSet = animator3;
                    }
                    I.put(animatorSet, dVar2);
                    this.P.add(animatorSet);
                    j10 = j11;
                }
            }
            i12 = i11 + 1;
            size = i10;
            z10 = z11;
        }
        if (sparseIntArray.size() != 0) {
            for (int i16 = 0; i16 < sparseIntArray.size(); i16++) {
                d dVar3 = (d) I.get((Animator) this.P.get(sparseIntArray.keyAt(i16)));
                dVar3.f5308f.setStartDelay((sparseIntArray.valueAt(i16) - j10) + dVar3.f5308f.getStartDelay());
            }
        }
    }

    public void r0(k kVar) {
        if (kVar == null) {
            this.T = Z;
        } else {
            this.T = kVar;
        }
    }

    public void s0(y yVar) {
        this.Q = yVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z t() {
        h hVar = new h();
        this.V = hVar;
        c(hVar);
        return this.V;
    }

    public Transition t0(long j10) {
        this.f5286e = j10;
        return this;
    }

    public String toString() {
        return v0("");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void u() {
        int i10 = this.K - 1;
        this.K = i10;
        if (i10 == 0) {
            d0(j.f5320b, false);
            for (int i11 = 0; i11 < this.A.f5388c.k(); i11++) {
                View view = (View) this.A.f5388c.l(i11);
                if (view != null) {
                    view.setHasTransientState(false);
                }
            }
            for (int i12 = 0; i12 < this.B.f5388c.k(); i12++) {
                View view2 = (View) this.B.f5388c.l(i12);
                if (view2 != null) {
                    view2.setHasTransientState(false);
                }
            }
            this.M = true;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void u0() {
        if (this.K == 0) {
            d0(j.f5319a, false);
            this.M = false;
        }
        this.K++;
    }

    public Transition v(Class cls, boolean z10) {
        this.f5295v = w(this.f5295v, cls, z10);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String v0(String str) {
        StringBuilder sb2 = new StringBuilder(str);
        sb2.append(getClass().getSimpleName());
        sb2.append("@");
        sb2.append(Integer.toHexString(hashCode()));
        sb2.append(": ");
        if (this.f5287i != -1) {
            sb2.append("dur(");
            sb2.append(this.f5287i);
            sb2.append(") ");
        }
        if (this.f5286e != -1) {
            sb2.append("dly(");
            sb2.append(this.f5286e);
            sb2.append(") ");
        }
        if (this.f5288o != null) {
            sb2.append("interp(");
            sb2.append(this.f5288o);
            sb2.append(") ");
        }
        if (this.f5289p.size() > 0 || this.f5290q.size() > 0) {
            sb2.append("tgts(");
            if (this.f5289p.size() > 0) {
                for (int i10 = 0; i10 < this.f5289p.size(); i10++) {
                    if (i10 > 0) {
                        sb2.append(", ");
                    }
                    sb2.append(this.f5289p.get(i10));
                }
            }
            if (this.f5290q.size() > 0) {
                for (int i11 = 0; i11 < this.f5290q.size(); i11++) {
                    if (i11 > 0) {
                        sb2.append(", ");
                    }
                    sb2.append(this.f5290q.get(i11));
                }
            }
            sb2.append(")");
        }
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(ViewGroup viewGroup) {
        u0.a I = I();
        int size = I.size();
        if (viewGroup != null && size != 0) {
            WindowId windowId = viewGroup.getWindowId();
            u0.a aVar = new u0.a(I);
            I.clear();
            for (int i10 = size - 1; i10 >= 0; i10--) {
                d dVar = (d) aVar.j(i10);
                if (dVar.f5303a != null && windowId.equals(dVar.f5306d)) {
                    ((Animator) aVar.f(i10)).end();
                }
            }
        }
    }

    public long y() {
        return this.f5287i;
    }

    public Rect z() {
        f fVar = this.R;
        if (fVar == null) {
            return null;
        }
        return fVar.a(this);
    }
}
