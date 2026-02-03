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
import androidx.dynamicanimation.animation.b;
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
    private static ThreadLocal f5136a0 = new ThreadLocal();
    private ArrayList E;
    private ArrayList F;
    private h[] G;
    y Q;
    private e R;
    private u0.a S;
    long U;
    g V;
    long W;

    /* renamed from: d  reason: collision with root package name */
    private String f5137d = getClass().getName();

    /* renamed from: e  reason: collision with root package name */
    private long f5138e = -1;

    /* renamed from: i  reason: collision with root package name */
    long f5139i = -1;

    /* renamed from: o  reason: collision with root package name */
    private TimeInterpolator f5140o = null;

    /* renamed from: p  reason: collision with root package name */
    ArrayList f5141p = new ArrayList();

    /* renamed from: q  reason: collision with root package name */
    ArrayList f5142q = new ArrayList();

    /* renamed from: r  reason: collision with root package name */
    private ArrayList f5143r = null;

    /* renamed from: s  reason: collision with root package name */
    private ArrayList f5144s = null;

    /* renamed from: t  reason: collision with root package name */
    private ArrayList f5145t = null;

    /* renamed from: u  reason: collision with root package name */
    private ArrayList f5146u = null;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f5147v = null;

    /* renamed from: w  reason: collision with root package name */
    private ArrayList f5148w = null;

    /* renamed from: x  reason: collision with root package name */
    private ArrayList f5149x = null;

    /* renamed from: y  reason: collision with root package name */
    private ArrayList f5150y = null;

    /* renamed from: z  reason: collision with root package name */
    private ArrayList f5151z = null;
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
        final /* synthetic */ u0.a f5152a;

        b(u0.a aVar) {
            this.f5152a = aVar;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f5152a.remove(animator);
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
            Transition.this.t();
            animator.removeListener(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        View f5155a;

        /* renamed from: b  reason: collision with root package name */
        String f5156b;

        /* renamed from: c  reason: collision with root package name */
        c0 f5157c;

        /* renamed from: d  reason: collision with root package name */
        WindowId f5158d;

        /* renamed from: e  reason: collision with root package name */
        Transition f5159e;

        /* renamed from: f  reason: collision with root package name */
        Animator f5160f;

        d(View view, String str, Transition transition, WindowId windowId, c0 c0Var, Animator animator) {
            this.f5155a = view;
            this.f5156b = str;
            this.f5157c = c0Var;
            this.f5158d = windowId;
            this.f5159e = transition;
            this.f5160f = animator;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class e {
        public abstract Rect a(Transition transition);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f {
        static long a(Animator animator) {
            return animator.getTotalDuration();
        }

        static void b(Animator animator, long j10) {
            ((AnimatorSet) animator).setCurrentPlayTime(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class g extends w implements z, b.r {

        /* renamed from: d  reason: collision with root package name */
        private boolean f5164d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f5165e;

        /* renamed from: f  reason: collision with root package name */
        private SpringAnimation f5166f;

        /* renamed from: i  reason: collision with root package name */
        private Runnable f5169i;

        /* renamed from: a  reason: collision with root package name */
        private long f5161a = -1;

        /* renamed from: b  reason: collision with root package name */
        private ArrayList f5162b = null;

        /* renamed from: c  reason: collision with root package name */
        private ArrayList f5163c = null;

        /* renamed from: g  reason: collision with root package name */
        private Consumer[] f5167g = null;

        /* renamed from: h  reason: collision with root package name */
        private final f0 f5168h = new f0();

        g() {
        }

        public static /* synthetic */ void f(g gVar, androidx.dynamicanimation.animation.b bVar, boolean z10, float f10, float f11) {
            if (!z10) {
                if (f10 < 1.0f) {
                    long c10 = gVar.c();
                    Transition x02 = ((a0) Transition.this).x0(0);
                    Transition transition = x02.N;
                    x02.N = null;
                    Transition.this.k0(-1L, gVar.f5161a);
                    Transition.this.k0(c10, -1L);
                    gVar.f5161a = c10;
                    Runnable runnable = gVar.f5169i;
                    if (runnable != null) {
                        runnable.run();
                    }
                    Transition.this.P.clear();
                    if (transition != null) {
                        transition.a0(i.f5172b, true);
                        return;
                    }
                    return;
                }
                Transition.this.a0(i.f5172b, false);
                return;
            }
            gVar.getClass();
        }

        private void g() {
            ArrayList arrayList = this.f5163c;
            if (arrayList != null && !arrayList.isEmpty()) {
                int size = this.f5163c.size();
                if (this.f5167g == null) {
                    this.f5167g = new Consumer[size];
                }
                Consumer[] consumerArr = (Consumer[]) this.f5163c.toArray(this.f5167g);
                this.f5167g = null;
                for (int i10 = 0; i10 < size; i10++) {
                    consumerArr[i10].accept(this);
                    consumerArr[i10] = null;
                }
                this.f5167g = consumerArr;
            }
        }

        private void h() {
            if (this.f5166f != null) {
                return;
            }
            this.f5168h.a(AnimationUtils.currentAnimationTimeMillis(), (float) this.f5161a);
            this.f5166f = new SpringAnimation(new b3.c());
            androidx.dynamicanimation.animation.c cVar = new androidx.dynamicanimation.animation.c();
            cVar.d(1.0f);
            cVar.f(200.0f);
            this.f5166f.y(cVar);
            this.f5166f.n((float) this.f5161a);
            this.f5166f.c(this);
            this.f5166f.o(this.f5168h.b());
            this.f5166f.j((float) (c() + 1));
            this.f5166f.k(-1.0f);
            this.f5166f.l(4.0f);
            this.f5166f.b(new b.q() { // from class: androidx.transition.q
                @Override // androidx.dynamicanimation.animation.b.q
                public final void a(androidx.dynamicanimation.animation.b bVar, boolean z10, float f10, float f11) {
                    Transition.g.f(Transition.g.this, bVar, z10, f10, f11);
                }
            });
        }

        @Override // androidx.transition.z
        public void a() {
            h();
            this.f5166f.t((float) (c() + 1));
        }

        @Override // androidx.dynamicanimation.animation.b.r
        public void b(androidx.dynamicanimation.animation.b bVar, float f10, float f11) {
            long max = Math.max(-1L, Math.min(c() + 1, Math.round(f10)));
            Transition.this.k0(max, this.f5161a);
            this.f5161a = max;
            g();
        }

        @Override // androidx.transition.z
        public long c() {
            return Transition.this.M();
        }

        @Override // androidx.transition.z
        public void d(long j10) {
            if (this.f5166f == null) {
                if (j10 != this.f5161a && isReady()) {
                    if (!this.f5165e) {
                        if (j10 == 0 && this.f5161a > 0) {
                            j10 = -1;
                        } else {
                            long c10 = c();
                            if (j10 == c10 && this.f5161a < c10) {
                                j10 = 1 + c10;
                            }
                        }
                        long j11 = this.f5161a;
                        if (j10 != j11) {
                            Transition.this.k0(j10, j11);
                            this.f5161a = j10;
                        }
                    }
                    g();
                    this.f5168h.a(AnimationUtils.currentAnimationTimeMillis(), (float) j10);
                    return;
                }
                return;
            }
            throw new IllegalStateException("setCurrentPlayTimeMillis() called after animation has been started");
        }

        @Override // androidx.transition.z
        public void e(Runnable runnable) {
            this.f5169i = runnable;
            h();
            this.f5166f.t(0.0f);
        }

        void i() {
            long j10 = 0;
            if (c() == 0) {
                j10 = 1;
            }
            Transition.this.k0(j10, this.f5161a);
            this.f5161a = j10;
        }

        @Override // androidx.transition.z
        public boolean isReady() {
            return this.f5164d;
        }

        public void j() {
            this.f5164d = true;
            ArrayList arrayList = this.f5162b;
            if (arrayList != null) {
                this.f5162b = null;
                for (int i10 = 0; i10 < arrayList.size(); i10++) {
                    ((Consumer) arrayList.get(i10)).accept(this);
                }
            }
            g();
        }

        @Override // androidx.transition.w, androidx.transition.Transition.h
        public void onTransitionCancel(Transition transition) {
            this.f5165e = true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface h {
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
    public interface i {

        /* renamed from: a  reason: collision with root package name */
        public static final i f5171a = new i() { // from class: androidx.transition.r
            @Override // androidx.transition.Transition.i
            public final void b(Transition.h hVar, Transition transition, boolean z10) {
                hVar.onTransitionStart(transition, z10);
            }
        };

        /* renamed from: b  reason: collision with root package name */
        public static final i f5172b = new i() { // from class: androidx.transition.s
            @Override // androidx.transition.Transition.i
            public final void b(Transition.h hVar, Transition transition, boolean z10) {
                hVar.onTransitionEnd(transition, z10);
            }
        };

        /* renamed from: c  reason: collision with root package name */
        public static final i f5173c = new i() { // from class: androidx.transition.t
            @Override // androidx.transition.Transition.i
            public final void b(Transition.h hVar, Transition transition, boolean z10) {
                hVar.onTransitionCancel(transition);
            }
        };

        /* renamed from: d  reason: collision with root package name */
        public static final i f5174d = new i() { // from class: androidx.transition.u
            @Override // androidx.transition.Transition.i
            public final void b(Transition.h hVar, Transition transition, boolean z10) {
                hVar.onTransitionPause(transition);
            }
        };

        /* renamed from: e  reason: collision with root package name */
        public static final i f5175e = new i() { // from class: androidx.transition.v
            @Override // androidx.transition.Transition.i
            public final void b(Transition.h hVar, Transition transition, boolean z10) {
                hVar.onTransitionResume(transition);
            }
        };

        void b(h hVar, Transition transition, boolean z10);
    }

    private static u0.a F() {
        u0.a aVar = (u0.a) f5136a0.get();
        if (aVar == null) {
            u0.a aVar2 = new u0.a();
            f5136a0.set(aVar2);
            return aVar2;
        }
        return aVar;
    }

    private static boolean T(c0 c0Var, c0 c0Var2, String str) {
        Object obj = c0Var.f5227a.get(str);
        Object obj2 = c0Var2.f5227a.get(str);
        if (obj == null && obj2 == null) {
            return false;
        }
        if (obj == null || obj2 == null) {
            return true;
        }
        return !obj.equals(obj2);
    }

    private void U(u0.a aVar, u0.a aVar2, SparseArray sparseArray, SparseArray sparseArray2) {
        View view;
        int size = sparseArray.size();
        for (int i10 = 0; i10 < size; i10++) {
            View view2 = (View) sparseArray.valueAt(i10);
            if (view2 != null && S(view2) && (view = (View) sparseArray2.get(sparseArray.keyAt(i10))) != null && S(view)) {
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

    private void V(u0.a aVar, u0.a aVar2) {
        c0 c0Var;
        for (int size = aVar.size() - 1; size >= 0; size--) {
            View view = (View) aVar.f(size);
            if (view != null && S(view) && (c0Var = (c0) aVar2.remove(view)) != null && S(c0Var.f5228b)) {
                this.E.add((c0) aVar.h(size));
                this.F.add(c0Var);
            }
        }
    }

    private void W(u0.a aVar, u0.a aVar2, u0.j jVar, u0.j jVar2) {
        View view;
        int k10 = jVar.k();
        for (int i10 = 0; i10 < k10; i10++) {
            View view2 = (View) jVar.l(i10);
            if (view2 != null && S(view2) && (view = (View) jVar2.d(jVar.f(i10))) != null && S(view)) {
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

    private void X(u0.a aVar, u0.a aVar2, u0.a aVar3, u0.a aVar4) {
        View view;
        int size = aVar3.size();
        for (int i10 = 0; i10 < size; i10++) {
            View view2 = (View) aVar3.j(i10);
            if (view2 != null && S(view2) && (view = (View) aVar4.get(aVar3.f(i10))) != null && S(view)) {
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

    private void Y(d0 d0Var, d0 d0Var2) {
        u0.a aVar = new u0.a(d0Var.f5238a);
        u0.a aVar2 = new u0.a(d0Var2.f5238a);
        int i10 = 0;
        while (true) {
            int[] iArr = this.D;
            if (i10 < iArr.length) {
                int i11 = iArr[i10];
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 != 3) {
                            if (i11 == 4) {
                                W(aVar, aVar2, d0Var.f5240c, d0Var2.f5240c);
                            }
                        } else {
                            U(aVar, aVar2, d0Var.f5239b, d0Var2.f5239b);
                        }
                    } else {
                        X(aVar, aVar2, d0Var.f5241d, d0Var2.f5241d);
                    }
                } else {
                    V(aVar, aVar2);
                }
                i10++;
            } else {
                e(aVar, aVar2);
                return;
            }
        }
    }

    private void Z(Transition transition, i iVar, boolean z10) {
        Transition transition2 = this.N;
        if (transition2 != null) {
            transition2.Z(transition, iVar, z10);
        }
        ArrayList arrayList = this.O;
        if (arrayList != null && !arrayList.isEmpty()) {
            int size = this.O.size();
            h[] hVarArr = this.G;
            if (hVarArr == null) {
                hVarArr = new h[size];
            }
            this.G = null;
            h[] hVarArr2 = (h[]) this.O.toArray(hVarArr);
            for (int i10 = 0; i10 < size; i10++) {
                iVar.b(hVarArr2[i10], transition, z10);
                hVarArr2[i10] = null;
            }
            this.G = hVarArr2;
        }
    }

    private void e(u0.a aVar, u0.a aVar2) {
        for (int i10 = 0; i10 < aVar.size(); i10++) {
            c0 c0Var = (c0) aVar.j(i10);
            if (S(c0Var.f5228b)) {
                this.E.add(c0Var);
                this.F.add(null);
            }
        }
        for (int i11 = 0; i11 < aVar2.size(); i11++) {
            c0 c0Var2 = (c0) aVar2.j(i11);
            if (S(c0Var2.f5228b)) {
                this.F.add(c0Var2);
                this.E.add(null);
            }
        }
    }

    private static void f(d0 d0Var, View view, c0 c0Var) {
        d0Var.f5238a.put(view, c0Var);
        int id2 = view.getId();
        if (id2 >= 0) {
            if (d0Var.f5239b.indexOfKey(id2) >= 0) {
                d0Var.f5239b.put(id2, null);
            } else {
                d0Var.f5239b.put(id2, view);
            }
        }
        String I = androidx.core.view.h0.I(view);
        if (I != null) {
            if (d0Var.f5241d.containsKey(I)) {
                d0Var.f5241d.put(I, null);
            } else {
                d0Var.f5241d.put(I, view);
            }
        }
        if (view.getParent() instanceof ListView) {
            ListView listView = (ListView) view.getParent();
            if (listView.getAdapter().hasStableIds()) {
                long itemIdAtPosition = listView.getItemIdAtPosition(listView.getPositionForView(view));
                if (d0Var.f5240c.e(itemIdAtPosition) >= 0) {
                    View view2 = (View) d0Var.f5240c.d(itemIdAtPosition);
                    if (view2 != null) {
                        view2.setHasTransientState(false);
                        d0Var.f5240c.g(itemIdAtPosition, null);
                        return;
                    }
                    return;
                }
                view.setHasTransientState(true);
                d0Var.f5240c.g(itemIdAtPosition, view);
            }
        }
    }

    private void h0(Animator animator, u0.a aVar) {
        if (animator != null) {
            animator.addListener(new b(aVar));
            g(animator);
        }
    }

    private void j(View view, boolean z10) {
        if (view != null) {
            int id2 = view.getId();
            ArrayList arrayList = this.f5145t;
            if (arrayList == null || !arrayList.contains(Integer.valueOf(id2))) {
                ArrayList arrayList2 = this.f5146u;
                if (arrayList2 == null || !arrayList2.contains(view)) {
                    ArrayList arrayList3 = this.f5147v;
                    if (arrayList3 != null) {
                        int size = arrayList3.size();
                        for (int i10 = 0; i10 < size; i10++) {
                            if (((Class) this.f5147v.get(i10)).isInstance(view)) {
                                return;
                            }
                        }
                    }
                    if (view.getParent() instanceof ViewGroup) {
                        c0 c0Var = new c0(view);
                        if (z10) {
                            l(c0Var);
                        } else {
                            i(c0Var);
                        }
                        c0Var.f5229c.add(this);
                        k(c0Var);
                        if (z10) {
                            f(this.A, view, c0Var);
                        } else {
                            f(this.B, view, c0Var);
                        }
                    }
                    if (view instanceof ViewGroup) {
                        ArrayList arrayList4 = this.f5149x;
                        if (arrayList4 == null || !arrayList4.contains(Integer.valueOf(id2))) {
                            ArrayList arrayList5 = this.f5150y;
                            if (arrayList5 == null || !arrayList5.contains(view)) {
                                ArrayList arrayList6 = this.f5151z;
                                if (arrayList6 != null) {
                                    int size2 = arrayList6.size();
                                    for (int i11 = 0; i11 < size2; i11++) {
                                        if (((Class) this.f5151z.get(i11)).isInstance(view)) {
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0 A(View view, boolean z10) {
        ArrayList arrayList;
        ArrayList arrayList2;
        a0 a0Var = this.C;
        if (a0Var != null) {
            return a0Var.A(view, z10);
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
                if (c0Var.f5228b == view) {
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

    public String B() {
        return this.f5137d;
    }

    public k C() {
        return this.T;
    }

    public y D() {
        return this.Q;
    }

    public final Transition E() {
        a0 a0Var = this.C;
        if (a0Var != null) {
            return a0Var.E();
        }
        return this;
    }

    public long G() {
        return this.f5138e;
    }

    public List H() {
        return this.f5141p;
    }

    public List I() {
        return this.f5143r;
    }

    public List J() {
        return this.f5144s;
    }

    public List K() {
        return this.f5142q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final long M() {
        return this.U;
    }

    public String[] N() {
        return null;
    }

    public c0 O(View view, boolean z10) {
        d0 d0Var;
        a0 a0Var = this.C;
        if (a0Var != null) {
            return a0Var.O(view, z10);
        }
        if (z10) {
            d0Var = this.A;
        } else {
            d0Var = this.B;
        }
        return (c0) d0Var.f5238a.get(view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean P() {
        return !this.I.isEmpty();
    }

    public boolean Q() {
        return false;
    }

    public boolean R(c0 c0Var, c0 c0Var2) {
        if (c0Var != null && c0Var2 != null) {
            String[] N = N();
            if (N != null) {
                for (String str : N) {
                    if (T(c0Var, c0Var2, str)) {
                        return true;
                    }
                }
            } else {
                for (String str2 : c0Var.f5227a.keySet()) {
                    if (T(c0Var, c0Var2, str2)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean S(View view) {
        ArrayList arrayList;
        ArrayList arrayList2;
        int id2 = view.getId();
        ArrayList arrayList3 = this.f5145t;
        if (arrayList3 != null && arrayList3.contains(Integer.valueOf(id2))) {
            return false;
        }
        ArrayList arrayList4 = this.f5146u;
        if (arrayList4 != null && arrayList4.contains(view)) {
            return false;
        }
        ArrayList arrayList5 = this.f5147v;
        if (arrayList5 != null) {
            int size = arrayList5.size();
            for (int i10 = 0; i10 < size; i10++) {
                if (((Class) this.f5147v.get(i10)).isInstance(view)) {
                    return false;
                }
            }
        }
        if (this.f5148w != null && androidx.core.view.h0.I(view) != null && this.f5148w.contains(androidx.core.view.h0.I(view))) {
            return false;
        }
        if ((this.f5141p.size() == 0 && this.f5142q.size() == 0 && (((arrayList = this.f5144s) == null || arrayList.isEmpty()) && ((arrayList2 = this.f5143r) == null || arrayList2.isEmpty()))) || this.f5141p.contains(Integer.valueOf(id2)) || this.f5142q.contains(view)) {
            return true;
        }
        ArrayList arrayList6 = this.f5143r;
        if (arrayList6 != null && arrayList6.contains(androidx.core.view.h0.I(view))) {
            return true;
        }
        if (this.f5144s != null) {
            for (int i11 = 0; i11 < this.f5144s.size(); i11++) {
                if (((Class) this.f5144s.get(i11)).isInstance(view)) {
                    return true;
                }
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0(i iVar, boolean z10) {
        Z(this, iVar, z10);
    }

    public void b0(View view) {
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
            a0(i.f5174d, false);
            this.L = true;
        }
    }

    public Transition c(h hVar) {
        if (this.O == null) {
            this.O = new ArrayList();
        }
        this.O.add(hVar);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c0(ViewGroup viewGroup) {
        d dVar;
        this.E = new ArrayList();
        this.F = new ArrayList();
        Y(this.A, this.B);
        u0.a F = F();
        int size = F.size();
        WindowId windowId = viewGroup.getWindowId();
        for (int i10 = size - 1; i10 >= 0; i10--) {
            Animator animator = (Animator) F.f(i10);
            if (animator != null && (dVar = (d) F.get(animator)) != null && dVar.f5155a != null && windowId.equals(dVar.f5158d)) {
                c0 c0Var = dVar.f5157c;
                View view = dVar.f5155a;
                c0 O = O(view, true);
                c0 A = A(view, true);
                if (O == null && A == null) {
                    A = (c0) this.B.f5238a.get(view);
                }
                if ((O != null || A != null) && dVar.f5159e.R(c0Var, A)) {
                    Transition transition = dVar.f5159e;
                    if (transition.E().V != null) {
                        animator.cancel();
                        transition.I.remove(animator);
                        F.remove(animator);
                        if (transition.I.size() == 0) {
                            transition.a0(i.f5173c, false);
                            if (!transition.M) {
                                transition.M = true;
                                transition.a0(i.f5172b, false);
                            }
                        }
                    } else if (!animator.isRunning() && !animator.isStarted()) {
                        F.remove(animator);
                    } else {
                        animator.cancel();
                    }
                }
            }
        }
        r(viewGroup, this.A, this.B, this.E, this.F);
        if (this.V == null) {
            i0();
        } else if (Build.VERSION.SDK_INT >= 34) {
            d0();
            this.V.i();
            this.V.j();
        }
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
        a0(i.f5173c, false);
    }

    public Transition d(View view) {
        this.f5142q.add(view);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0() {
        u0.a F = F();
        this.U = 0L;
        for (int i10 = 0; i10 < this.P.size(); i10++) {
            Animator animator = (Animator) this.P.get(i10);
            d dVar = (d) F.get(animator);
            if (animator != null && dVar != null) {
                if (v() >= 0) {
                    dVar.f5160f.setDuration(v());
                }
                if (G() >= 0) {
                    dVar.f5160f.setStartDelay(G() + dVar.f5160f.getStartDelay());
                }
                if (z() != null) {
                    dVar.f5160f.setInterpolator(z());
                }
                this.I.add(animator);
                this.U = Math.max(this.U, f.a(animator));
            }
        }
        this.P.clear();
    }

    public Transition e0(h hVar) {
        Transition transition;
        ArrayList arrayList = this.O;
        if (arrayList != null) {
            if (!arrayList.remove(hVar) && (transition = this.N) != null) {
                transition.e0(hVar);
            }
            if (this.O.size() == 0) {
                this.O = null;
            }
        }
        return this;
    }

    public Transition f0(View view) {
        this.f5142q.remove(view);
        return this;
    }

    protected void g(Animator animator) {
        if (animator == null) {
            t();
            return;
        }
        if (v() >= 0) {
            animator.setDuration(v());
        }
        if (G() >= 0) {
            animator.setStartDelay(G() + animator.getStartDelay());
        }
        if (z() != null) {
            animator.setInterpolator(z());
        }
        animator.addListener(new c());
        animator.start();
    }

    public void g0(View view) {
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
                a0(i.f5175e, false);
            }
            this.L = false;
        }
    }

    public abstract void i(c0 c0Var);

    /* JADX INFO: Access modifiers changed from: protected */
    public void i0() {
        r0();
        u0.a F = F();
        Iterator it = this.P.iterator();
        while (it.hasNext()) {
            Animator animator = (Animator) it.next();
            if (F.containsKey(animator)) {
                r0();
                h0(animator, F);
            }
        }
        this.P.clear();
        t();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j0(boolean z10) {
        this.H = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(c0 c0Var) {
        String[] b10;
        if (this.Q != null && !c0Var.f5227a.isEmpty() && (b10 = this.Q.b()) != null) {
            for (String str : b10) {
                if (!c0Var.f5227a.containsKey(str)) {
                    this.Q.a(c0Var);
                    return;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k0(long j10, long j11) {
        boolean z10;
        long M = M();
        int i10 = 0;
        if (j10 < j11) {
            z10 = true;
        } else {
            z10 = false;
        }
        int i11 = (j11 > 0L ? 1 : (j11 == 0L ? 0 : -1));
        if ((i11 < 0 && j10 >= 0) || (j11 > M && j10 <= M)) {
            this.M = false;
            a0(i.f5171a, z10);
        }
        int size = this.I.size();
        Animator[] animatorArr = (Animator[]) this.I.toArray(this.J);
        this.J = X;
        while (i10 < size) {
            Animator animator = animatorArr[i10];
            animatorArr[i10] = null;
            f.b(animator, Math.min(Math.max(0L, j10), f.a(animator)));
            i10++;
            M = M;
        }
        long j12 = M;
        this.J = animatorArr;
        int i12 = (j10 > j12 ? 1 : (j10 == j12 ? 0 : -1));
        if ((i12 > 0 && j11 <= j12) || (j10 < 0 && i11 >= 0)) {
            if (i12 > 0) {
                this.M = true;
            }
            a0(i.f5172b, z10);
        }
    }

    public abstract void l(c0 c0Var);

    public Transition l0(long j10) {
        this.f5139i = j10;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(ViewGroup viewGroup, boolean z10) {
        ArrayList arrayList;
        ArrayList arrayList2;
        u0.a aVar;
        o(z10);
        if ((this.f5141p.size() <= 0 && this.f5142q.size() <= 0) || (((arrayList = this.f5143r) != null && !arrayList.isEmpty()) || ((arrayList2 = this.f5144s) != null && !arrayList2.isEmpty()))) {
            j(viewGroup, z10);
        } else {
            for (int i10 = 0; i10 < this.f5141p.size(); i10++) {
                View findViewById = viewGroup.findViewById(((Integer) this.f5141p.get(i10)).intValue());
                if (findViewById != null) {
                    c0 c0Var = new c0(findViewById);
                    if (z10) {
                        l(c0Var);
                    } else {
                        i(c0Var);
                    }
                    c0Var.f5229c.add(this);
                    k(c0Var);
                    if (z10) {
                        f(this.A, findViewById, c0Var);
                    } else {
                        f(this.B, findViewById, c0Var);
                    }
                }
            }
            for (int i11 = 0; i11 < this.f5142q.size(); i11++) {
                View view = (View) this.f5142q.get(i11);
                c0 c0Var2 = new c0(view);
                if (z10) {
                    l(c0Var2);
                } else {
                    i(c0Var2);
                }
                c0Var2.f5229c.add(this);
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
                arrayList3.add((View) this.A.f5241d.remove((String) this.S.f(i12)));
            }
            for (int i13 = 0; i13 < size; i13++) {
                View view2 = (View) arrayList3.get(i13);
                if (view2 != null) {
                    this.A.f5241d.put((String) this.S.j(i13), view2);
                }
            }
        }
    }

    public void m0(e eVar) {
        this.R = eVar;
    }

    public Transition n0(TimeInterpolator timeInterpolator) {
        this.f5140o = timeInterpolator;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(boolean z10) {
        if (z10) {
            this.A.f5238a.clear();
            this.A.f5239b.clear();
            this.A.f5240c.a();
            return;
        }
        this.B.f5238a.clear();
        this.B.f5239b.clear();
        this.B.f5240c.a();
    }

    public void o0(k kVar) {
        if (kVar == null) {
            this.T = Z;
        } else {
            this.T = kVar;
        }
    }

    @Override // 
    /* renamed from: p */
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

    public void p0(y yVar) {
        this.Q = yVar;
    }

    public Animator q(ViewGroup viewGroup, c0 c0Var, c0 c0Var2) {
        return null;
    }

    public Transition q0(long j10) {
        this.f5138e = j10;
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
        u0.a F = F();
        SparseIntArray sparseIntArray = new SparseIntArray();
        int size = arrayList.size();
        if (E().V != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        long j10 = LongCompanionObject.MAX_VALUE;
        int i12 = 0;
        while (i12 < size) {
            c0 c0Var2 = (c0) arrayList.get(i12);
            c0 c0Var3 = (c0) arrayList2.get(i12);
            if (c0Var2 != null && !c0Var2.f5229c.contains(this)) {
                c0Var2 = null;
            }
            if (c0Var3 != null && !c0Var3.f5229c.contains(this)) {
                c0Var3 = null;
            }
            if ((c0Var2 == null && c0Var3 == null) || ((c0Var2 != null && c0Var3 != null && !R(c0Var2, c0Var3)) || (q10 = q(viewGroup, c0Var2, c0Var3)) == null)) {
                i10 = size;
                z11 = z10;
                i11 = i12;
            } else {
                if (c0Var3 != null) {
                    View view3 = c0Var3.f5228b;
                    String[] N = N();
                    if (N != null && N.length > 0) {
                        c0Var = new c0(view3);
                        i10 = size;
                        z11 = z10;
                        c0 c0Var4 = (c0) d0Var2.f5238a.get(view3);
                        i11 = i12;
                        if (c0Var4 != null) {
                            int i13 = 0;
                            while (i13 < N.length) {
                                Map map = c0Var.f5227a;
                                int i14 = i13;
                                String str = N[i14];
                                map.put(str, c0Var4.f5227a.get(str));
                                i13 = i14 + 1;
                                N = N;
                            }
                        }
                        int size2 = F.size();
                        int i15 = 0;
                        while (true) {
                            if (i15 < size2) {
                                d dVar = (d) F.get((Animator) F.f(i15));
                                if (dVar.f5157c != null && dVar.f5155a == view3) {
                                    view2 = view3;
                                    if (dVar.f5156b.equals(B()) && dVar.f5157c.equals(c0Var)) {
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
                    view = c0Var2.f5228b;
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
                    d dVar2 = new d(view4, B(), this, viewGroup.getWindowId(), c0Var5, animator3);
                    if (z11) {
                        AnimatorSet animatorSet2 = new AnimatorSet();
                        animatorSet2.play(animator3);
                        animatorSet = animatorSet2;
                    } else {
                        animatorSet = animator3;
                    }
                    F.put(animatorSet, dVar2);
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
                d dVar3 = (d) F.get((Animator) this.P.get(sparseIntArray.keyAt(i16)));
                dVar3.f5160f.setStartDelay((sparseIntArray.valueAt(i16) - j10) + dVar3.f5160f.getStartDelay());
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r0() {
        if (this.K == 0) {
            a0(i.f5171a, false);
            this.M = false;
        }
        this.K++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z s() {
        g gVar = new g();
        this.V = gVar;
        c(gVar);
        return this.V;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String s0(String str) {
        StringBuilder sb2 = new StringBuilder(str);
        sb2.append(getClass().getSimpleName());
        sb2.append("@");
        sb2.append(Integer.toHexString(hashCode()));
        sb2.append(": ");
        if (this.f5139i != -1) {
            sb2.append("dur(");
            sb2.append(this.f5139i);
            sb2.append(") ");
        }
        if (this.f5138e != -1) {
            sb2.append("dly(");
            sb2.append(this.f5138e);
            sb2.append(") ");
        }
        if (this.f5140o != null) {
            sb2.append("interp(");
            sb2.append(this.f5140o);
            sb2.append(") ");
        }
        if (this.f5141p.size() > 0 || this.f5142q.size() > 0) {
            sb2.append("tgts(");
            if (this.f5141p.size() > 0) {
                for (int i10 = 0; i10 < this.f5141p.size(); i10++) {
                    if (i10 > 0) {
                        sb2.append(", ");
                    }
                    sb2.append(this.f5141p.get(i10));
                }
            }
            if (this.f5142q.size() > 0) {
                for (int i11 = 0; i11 < this.f5142q.size(); i11++) {
                    if (i11 > 0) {
                        sb2.append(", ");
                    }
                    sb2.append(this.f5142q.get(i11));
                }
            }
            sb2.append(")");
        }
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void t() {
        int i10 = this.K - 1;
        this.K = i10;
        if (i10 == 0) {
            a0(i.f5172b, false);
            for (int i11 = 0; i11 < this.A.f5240c.k(); i11++) {
                View view = (View) this.A.f5240c.l(i11);
                if (view != null) {
                    view.setHasTransientState(false);
                }
            }
            for (int i12 = 0; i12 < this.B.f5240c.k(); i12++) {
                View view2 = (View) this.B.f5240c.l(i12);
                if (view2 != null) {
                    view2.setHasTransientState(false);
                }
            }
            this.M = true;
        }
    }

    public String toString() {
        return s0("");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(ViewGroup viewGroup) {
        u0.a F = F();
        int size = F.size();
        if (viewGroup != null && size != 0) {
            WindowId windowId = viewGroup.getWindowId();
            u0.a aVar = new u0.a(F);
            F.clear();
            for (int i10 = size - 1; i10 >= 0; i10--) {
                d dVar = (d) aVar.j(i10);
                if (dVar.f5155a != null && windowId.equals(dVar.f5158d)) {
                    ((Animator) aVar.f(i10)).end();
                }
            }
        }
    }

    public long v() {
        return this.f5139i;
    }

    public Rect w() {
        e eVar = this.R;
        if (eVar == null) {
            return null;
        }
        return eVar.a(this);
    }

    public e y() {
        return this.R;
    }

    public TimeInterpolator z() {
        return this.f5140o;
    }
}
