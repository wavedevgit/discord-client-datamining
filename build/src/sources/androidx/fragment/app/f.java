package androidx.fragment.app;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.content.Context;
import android.graphics.Rect;
import android.os.Build;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import androidx.activity.BackEventCompat;
import androidx.fragment.app.f;
import androidx.fragment.app.t;
import androidx.fragment.app.t0;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends t0 {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends t0.b {

        /* renamed from: d  reason: collision with root package name */
        private final b f4197d;

        /* renamed from: androidx.fragment.app.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class animation.Animation$AnimationListenerC0050a implements Animation.AnimationListener {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ t0.d f4198a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ViewGroup f4199b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ View f4200c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f4201d;

            animation.Animation$AnimationListenerC0050a(t0.d dVar, ViewGroup viewGroup, View view, a aVar) {
                this.f4198a = dVar;
                this.f4199b = viewGroup;
                this.f4200c = view;
                this.f4201d = aVar;
            }

            /* JADX INFO: Access modifiers changed from: private */
            public static final void b(ViewGroup container, View view, a this$0) {
                Intrinsics.checkNotNullParameter(container, "$container");
                Intrinsics.checkNotNullParameter(this$0, "this$0");
                container.endViewTransition(view);
                this$0.h().a().e(this$0);
            }

            @Override // android.view.animation.Animation.AnimationListener
            public void onAnimationEnd(Animation animation) {
                Intrinsics.checkNotNullParameter(animation, "animation");
                final ViewGroup viewGroup = this.f4199b;
                final View view = this.f4200c;
                final a aVar = this.f4201d;
                viewGroup.post(new Runnable() { // from class: androidx.fragment.app.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        f.a.animation.Animation$AnimationListenerC0050a.b(viewGroup, view, aVar);
                    }
                });
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Animation from operation " + this.f4198a + " has ended.");
                }
            }

            @Override // android.view.animation.Animation.AnimationListener
            public void onAnimationRepeat(Animation animation) {
                Intrinsics.checkNotNullParameter(animation, "animation");
            }

            @Override // android.view.animation.Animation.AnimationListener
            public void onAnimationStart(Animation animation) {
                Intrinsics.checkNotNullParameter(animation, "animation");
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Animation from operation " + this.f4198a + " has reached onAnimationStart.");
                }
            }
        }

        public a(b animationInfo) {
            Intrinsics.checkNotNullParameter(animationInfo, "animationInfo");
            this.f4197d = animationInfo;
        }

        @Override // androidx.fragment.app.t0.b
        public void c(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
            t0.d a10 = this.f4197d.a();
            View view = a10.h().mView;
            view.clearAnimation();
            container.endViewTransition(view);
            this.f4197d.a().e(this);
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Animation from operation " + a10 + " has been cancelled.");
            }
        }

        @Override // androidx.fragment.app.t0.b
        public void d(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
            if (this.f4197d.b()) {
                this.f4197d.a().e(this);
                return;
            }
            Context context = container.getContext();
            t0.d a10 = this.f4197d.a();
            View view = a10.h().mView;
            b bVar = this.f4197d;
            Intrinsics.checkNotNullExpressionValue(context, "context");
            t.a c10 = bVar.c(context);
            if (c10 != null) {
                Animation animation = c10.f4339a;
                if (animation != null) {
                    if (a10.g() != t0.d.b.REMOVED) {
                        view.startAnimation(animation);
                        this.f4197d.a().e(this);
                        return;
                    }
                    container.startViewTransition(view);
                    t.b bVar2 = new t.b(animation, container, view);
                    bVar2.setAnimationListener(new animation.Animation$AnimationListenerC0050a(a10, container, view, this));
                    view.startAnimation(bVar2);
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "Animation from operation " + a10 + " has started.");
                        return;
                    }
                    return;
                }
                throw new IllegalStateException("Required value was null.");
            }
            throw new IllegalStateException("Required value was null.");
        }

        public final b h() {
            return this.f4197d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends C0051f {

        /* renamed from: b  reason: collision with root package name */
        private final boolean f4202b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f4203c;

        /* renamed from: d  reason: collision with root package name */
        private t.a f4204d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(t0.d operation, boolean z10) {
            super(operation);
            Intrinsics.checkNotNullParameter(operation, "operation");
            this.f4202b = z10;
        }

        public final t.a c(Context context) {
            boolean z10;
            Intrinsics.checkNotNullParameter(context, "context");
            if (this.f4203c) {
                return this.f4204d;
            }
            Fragment h10 = a().h();
            if (a().g() == t0.d.b.VISIBLE) {
                z10 = true;
            } else {
                z10 = false;
            }
            t.a b10 = t.b(context, h10, z10, this.f4202b);
            this.f4204d = b10;
            this.f4203c = true;
            return b10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends t0.b {

        /* renamed from: d  reason: collision with root package name */
        private final b f4205d;

        /* renamed from: e  reason: collision with root package name */
        private AnimatorSet f4206e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends AnimatorListenerAdapter {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ ViewGroup f4207a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ View f4208b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ boolean f4209c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t0.d f4210d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ c f4211e;

            a(ViewGroup viewGroup, View view, boolean z10, t0.d dVar, c cVar) {
                this.f4207a = viewGroup;
                this.f4208b = view;
                this.f4209c = z10;
                this.f4210d = dVar;
                this.f4211e = cVar;
            }

            @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
            public void onAnimationEnd(Animator anim) {
                Intrinsics.checkNotNullParameter(anim, "anim");
                this.f4207a.endViewTransition(this.f4208b);
                if (this.f4209c) {
                    t0.d.b g10 = this.f4210d.g();
                    View viewToAnimate = this.f4208b;
                    Intrinsics.checkNotNullExpressionValue(viewToAnimate, "viewToAnimate");
                    g10.d(viewToAnimate, this.f4207a);
                }
                this.f4211e.h().a().e(this.f4211e);
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Animator from operation " + this.f4210d + " has ended.");
                }
            }
        }

        public c(b animatorInfo) {
            Intrinsics.checkNotNullParameter(animatorInfo, "animatorInfo");
            this.f4205d = animatorInfo;
        }

        @Override // androidx.fragment.app.t0.b
        public boolean b() {
            return true;
        }

        @Override // androidx.fragment.app.t0.b
        public void c(ViewGroup container) {
            String str;
            Intrinsics.checkNotNullParameter(container, "container");
            AnimatorSet animatorSet = this.f4206e;
            if (animatorSet == null) {
                this.f4205d.a().e(this);
                return;
            }
            t0.d a10 = this.f4205d.a();
            if (a10.m()) {
                if (Build.VERSION.SDK_INT >= 26) {
                    e.f4213a.a(animatorSet);
                }
            } else {
                animatorSet.end();
            }
            if (FragmentManager.O0(2)) {
                StringBuilder sb2 = new StringBuilder();
                sb2.append("Animator from operation ");
                sb2.append(a10);
                sb2.append(" has been canceled");
                if (a10.m()) {
                    str = " with seeking.";
                } else {
                    str = ".";
                }
                sb2.append(str);
                sb2.append(' ');
                Log.v("FragmentManager", sb2.toString());
            }
        }

        @Override // androidx.fragment.app.t0.b
        public void d(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
            t0.d a10 = this.f4205d.a();
            AnimatorSet animatorSet = this.f4206e;
            if (animatorSet == null) {
                this.f4205d.a().e(this);
                return;
            }
            animatorSet.start();
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Animator from operation " + a10 + " has started.");
            }
        }

        @Override // androidx.fragment.app.t0.b
        public void e(BackEventCompat backEvent, ViewGroup container) {
            Intrinsics.checkNotNullParameter(backEvent, "backEvent");
            Intrinsics.checkNotNullParameter(container, "container");
            t0.d a10 = this.f4205d.a();
            AnimatorSet animatorSet = this.f4206e;
            if (animatorSet == null) {
                this.f4205d.a().e(this);
            } else if (Build.VERSION.SDK_INT >= 34 && a10.h().mTransitioning) {
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Adding BackProgressCallbacks for Animators to operation " + a10);
                }
                long a11 = d.f4212a.a(animatorSet);
                long a12 = backEvent.a() * ((float) a11);
                if (a12 == 0) {
                    a12 = 1;
                }
                if (a12 == a11) {
                    a12 = a11 - 1;
                }
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Setting currentPlayTime to " + a12 + " for Animator " + animatorSet + " on operation " + a10);
                }
                e.f4213a.b(animatorSet, a12);
            }
        }

        @Override // androidx.fragment.app.t0.b
        public void f(ViewGroup container) {
            AnimatorSet animatorSet;
            boolean z10;
            c cVar;
            Intrinsics.checkNotNullParameter(container, "container");
            if (!this.f4205d.b()) {
                Context context = container.getContext();
                b bVar = this.f4205d;
                Intrinsics.checkNotNullExpressionValue(context, "context");
                t.a c10 = bVar.c(context);
                if (c10 != null) {
                    animatorSet = c10.f4340b;
                } else {
                    animatorSet = null;
                }
                this.f4206e = animatorSet;
                t0.d a10 = this.f4205d.a();
                Fragment h10 = a10.h();
                if (a10.g() == t0.d.b.GONE) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                boolean z11 = z10;
                View view = h10.mView;
                container.startViewTransition(view);
                AnimatorSet animatorSet2 = this.f4206e;
                if (animatorSet2 != null) {
                    cVar = this;
                    animatorSet2.addListener(new a(container, view, z11, a10, cVar));
                } else {
                    cVar = this;
                }
                AnimatorSet animatorSet3 = cVar.f4206e;
                if (animatorSet3 != null) {
                    animatorSet3.setTarget(view);
                }
            }
        }

        public final b h() {
            return this.f4205d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        public static final d f4212a = new d();

        private d() {
        }

        public final long a(@NotNull AnimatorSet animatorSet) {
            Intrinsics.checkNotNullParameter(animatorSet, "animatorSet");
            return animatorSet.getTotalDuration();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        public static final e f4213a = new e();

        private e() {
        }

        public final void a(@NotNull AnimatorSet animatorSet) {
            Intrinsics.checkNotNullParameter(animatorSet, "animatorSet");
            animatorSet.reverse();
        }

        public final void b(@NotNull AnimatorSet animatorSet, long j10) {
            Intrinsics.checkNotNullParameter(animatorSet, "animatorSet");
            animatorSet.setCurrentPlayTime(j10);
        }
    }

    /* renamed from: androidx.fragment.app.f$f  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0051f {

        /* renamed from: a  reason: collision with root package name */
        private final t0.d f4214a;

        public C0051f(t0.d operation) {
            Intrinsics.checkNotNullParameter(operation, "operation");
            this.f4214a = operation;
        }

        public final t0.d a() {
            return this.f4214a;
        }

        public final boolean b() {
            t0.d.b bVar;
            View view = this.f4214a.h().mView;
            if (view != null) {
                bVar = t0.d.b.f4372d.a(view);
            } else {
                bVar = null;
            }
            t0.d.b g10 = this.f4214a.g();
            if (bVar != g10) {
                t0.d.b bVar2 = t0.d.b.VISIBLE;
                if (bVar == bVar2 || g10 == bVar2) {
                    return false;
                }
                return true;
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g extends t0.b {

        /* renamed from: d  reason: collision with root package name */
        private final List f4215d;

        /* renamed from: e  reason: collision with root package name */
        private final t0.d f4216e;

        /* renamed from: f  reason: collision with root package name */
        private final t0.d f4217f;

        /* renamed from: g  reason: collision with root package name */
        private final o0 f4218g;

        /* renamed from: h  reason: collision with root package name */
        private final Object f4219h;

        /* renamed from: i  reason: collision with root package name */
        private final ArrayList f4220i;

        /* renamed from: j  reason: collision with root package name */
        private final ArrayList f4221j;

        /* renamed from: k  reason: collision with root package name */
        private final u0.a f4222k;

        /* renamed from: l  reason: collision with root package name */
        private final ArrayList f4223l;

        /* renamed from: m  reason: collision with root package name */
        private final ArrayList f4224m;

        /* renamed from: n  reason: collision with root package name */
        private final u0.a f4225n;

        /* renamed from: o  reason: collision with root package name */
        private final u0.a f4226o;

        /* renamed from: p  reason: collision with root package name */
        private final boolean f4227p;

        /* renamed from: q  reason: collision with root package name */
        private final w1.d f4228q;

        /* renamed from: r  reason: collision with root package name */
        private Object f4229r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class a extends Lambda implements Function0 {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ ViewGroup f4231e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f4232i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ViewGroup viewGroup, Object obj) {
                super(0);
                this.f4231e = viewGroup;
                this.f4232i = obj;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m12invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m12invoke() {
                g.this.v().e(this.f4231e, this.f4232i);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class b extends Lambda implements Function0 {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ ViewGroup f4234e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f4235i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Ref.ObjectRef f4236o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class a extends Lambda implements Function0 {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ g f4237d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Object f4238e;

                /* renamed from: i  reason: collision with root package name */
                final /* synthetic */ ViewGroup f4239i;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                a(g gVar, Object obj, ViewGroup viewGroup) {
                    super(0);
                    this.f4237d = gVar;
                    this.f4238e = obj;
                    this.f4239i = viewGroup;
                }

                /* JADX INFO: Access modifiers changed from: private */
                public static final void c(g this$0, ViewGroup container) {
                    Intrinsics.checkNotNullParameter(this$0, "this$0");
                    Intrinsics.checkNotNullParameter(container, "$container");
                    for (h hVar : this$0.w()) {
                        t0.d a10 = hVar.a();
                        View view = a10.h().getView();
                        if (view != null) {
                            a10.g().d(view, container);
                        }
                    }
                }

                /* JADX INFO: Access modifiers changed from: private */
                public static final void d(g this$0) {
                    Intrinsics.checkNotNullParameter(this$0, "this$0");
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "Transition for all operations has completed");
                    }
                    for (h hVar : this$0.w()) {
                        hVar.a().e(this$0);
                    }
                }

                @Override // kotlin.jvm.functions.Function0
                public /* bridge */ /* synthetic */ Object invoke() {
                    m14invoke();
                    return Unit.f33282a;
                }

                /* renamed from: invoke  reason: collision with other method in class */
                public final void m14invoke() {
                    List<h> w10 = this.f4237d.w();
                    if (!(w10 instanceof Collection) || !w10.isEmpty()) {
                        for (h hVar : w10) {
                            if (!hVar.a().m()) {
                                if (FragmentManager.O0(2)) {
                                    Log.v("FragmentManager", "Completing animating immediately");
                                }
                                w1.d dVar = new w1.d();
                                o0 v10 = this.f4237d.v();
                                Fragment h10 = ((h) this.f4237d.w().get(0)).a().h();
                                Object obj = this.f4238e;
                                final g gVar = this.f4237d;
                                v10.w(h10, obj, dVar, new Runnable() { // from class: androidx.fragment.app.n
                                    @Override // java.lang.Runnable
                                    public final void run() {
                                        f.g.b.a.d(f.g.this);
                                    }
                                });
                                dVar.a();
                                return;
                            }
                        }
                    }
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "Animating to start");
                    }
                    o0 v11 = this.f4237d.v();
                    Object s10 = this.f4237d.s();
                    Intrinsics.checkNotNull(s10);
                    final g gVar2 = this.f4237d;
                    final ViewGroup viewGroup = this.f4239i;
                    v11.d(s10, new Runnable() { // from class: androidx.fragment.app.m
                        @Override // java.lang.Runnable
                        public final void run() {
                            f.g.b.a.c(f.g.this, viewGroup);
                        }
                    });
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(ViewGroup viewGroup, Object obj, Ref.ObjectRef objectRef) {
                super(0);
                this.f4234e = viewGroup;
                this.f4235i = obj;
                this.f4236o = objectRef;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m13invoke();
                return Unit.f33282a;
            }

            /* JADX WARN: Type inference failed for: r3v2, types: [androidx.fragment.app.f$g$b$a, T] */
            /* renamed from: invoke  reason: collision with other method in class */
            public final void m13invoke() {
                g gVar = g.this;
                gVar.C(gVar.v().j(this.f4234e, this.f4235i));
                boolean z10 = g.this.s() != null;
                Object obj = this.f4235i;
                ViewGroup viewGroup = this.f4234e;
                if (z10) {
                    this.f4236o.element = new a(g.this, obj, viewGroup);
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "Started executing operations from " + g.this.t() + " to " + g.this.u());
                        return;
                    }
                    return;
                }
                throw new IllegalStateException(("Unable to start transition " + obj + " for container " + viewGroup + '.').toString());
            }
        }

        public g(List transitionInfos, t0.d dVar, t0.d dVar2, o0 transitionImpl, Object obj, ArrayList sharedElementFirstOutViews, ArrayList sharedElementLastInViews, u0.a sharedElementNameMapping, ArrayList enteringNames, ArrayList exitingNames, u0.a firstOutViews, u0.a lastInViews, boolean z10) {
            Intrinsics.checkNotNullParameter(transitionInfos, "transitionInfos");
            Intrinsics.checkNotNullParameter(transitionImpl, "transitionImpl");
            Intrinsics.checkNotNullParameter(sharedElementFirstOutViews, "sharedElementFirstOutViews");
            Intrinsics.checkNotNullParameter(sharedElementLastInViews, "sharedElementLastInViews");
            Intrinsics.checkNotNullParameter(sharedElementNameMapping, "sharedElementNameMapping");
            Intrinsics.checkNotNullParameter(enteringNames, "enteringNames");
            Intrinsics.checkNotNullParameter(exitingNames, "exitingNames");
            Intrinsics.checkNotNullParameter(firstOutViews, "firstOutViews");
            Intrinsics.checkNotNullParameter(lastInViews, "lastInViews");
            this.f4215d = transitionInfos;
            this.f4216e = dVar;
            this.f4217f = dVar2;
            this.f4218g = transitionImpl;
            this.f4219h = obj;
            this.f4220i = sharedElementFirstOutViews;
            this.f4221j = sharedElementLastInViews;
            this.f4222k = sharedElementNameMapping;
            this.f4223l = enteringNames;
            this.f4224m = exitingNames;
            this.f4225n = firstOutViews;
            this.f4226o = lastInViews;
            this.f4227p = z10;
            this.f4228q = new w1.d();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void A(t0.d operation, g this$0) {
            Intrinsics.checkNotNullParameter(operation, "$operation");
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Transition for operation " + operation + " has completed");
            }
            operation.e(this$0);
        }

        private final void B(ArrayList arrayList, ViewGroup viewGroup, Function0 function0) {
            m0.e(arrayList, 4);
            ArrayList q10 = this.f4218g.q(this.f4221j);
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", ">>>>> Beginning transition <<<<<");
                Log.v("FragmentManager", ">>>>> SharedElementFirstOutViews <<<<<");
                Iterator it = this.f4220i.iterator();
                while (it.hasNext()) {
                    Object sharedElementFirstOutViews = it.next();
                    Intrinsics.checkNotNullExpressionValue(sharedElementFirstOutViews, "sharedElementFirstOutViews");
                    View view = (View) sharedElementFirstOutViews;
                    Log.v("FragmentManager", "View: " + view + " Name: " + androidx.core.view.h0.I(view));
                }
                Log.v("FragmentManager", ">>>>> SharedElementLastInViews <<<<<");
                Iterator it2 = this.f4221j.iterator();
                while (it2.hasNext()) {
                    Object sharedElementLastInViews = it2.next();
                    Intrinsics.checkNotNullExpressionValue(sharedElementLastInViews, "sharedElementLastInViews");
                    View view2 = (View) sharedElementLastInViews;
                    Log.v("FragmentManager", "View: " + view2 + " Name: " + androidx.core.view.h0.I(view2));
                }
            }
            function0.invoke();
            this.f4218g.y(viewGroup, this.f4220i, this.f4221j, q10, this.f4222k);
            m0.e(arrayList, 0);
            this.f4218g.A(this.f4219h, this.f4220i, this.f4221j);
        }

        private final void n(ArrayList arrayList, View view) {
            if (view instanceof ViewGroup) {
                ViewGroup viewGroup = (ViewGroup) view;
                if (androidx.core.view.m0.c(viewGroup)) {
                    if (!arrayList.contains(view)) {
                        arrayList.add(view);
                        return;
                    }
                    return;
                }
                int childCount = viewGroup.getChildCount();
                for (int i10 = 0; i10 < childCount; i10++) {
                    View child = viewGroup.getChildAt(i10);
                    if (child.getVisibility() == 0) {
                        Intrinsics.checkNotNullExpressionValue(child, "child");
                        n(arrayList, child);
                    }
                }
            } else if (!arrayList.contains(view)) {
                arrayList.add(view);
            }
        }

        private final Pair o(ViewGroup viewGroup, t0.d dVar, final t0.d dVar2) {
            final t0.d dVar3 = dVar;
            View view = new View(viewGroup.getContext());
            final Rect rect = new Rect();
            boolean z10 = false;
            View view2 = null;
            for (h hVar : this.f4215d) {
                if (hVar.g() && dVar2 != null && dVar3 != null && !this.f4222k.isEmpty() && this.f4219h != null) {
                    m0.a(dVar3.h(), dVar2.h(), this.f4227p, this.f4225n, true);
                    androidx.core.view.y.a(viewGroup, new Runnable() { // from class: androidx.fragment.app.j
                        @Override // java.lang.Runnable
                        public final void run() {
                            f.g.p(t0.d.this, dVar2, this);
                        }
                    });
                    this.f4220i.addAll(this.f4225n.values());
                    if (!this.f4224m.isEmpty()) {
                        Object obj = this.f4224m.get(0);
                        Intrinsics.checkNotNullExpressionValue(obj, "exitingNames[0]");
                        view2 = (View) this.f4225n.get((String) obj);
                        this.f4218g.v(this.f4219h, view2);
                    }
                    this.f4221j.addAll(this.f4226o.values());
                    if (!this.f4223l.isEmpty()) {
                        Object obj2 = this.f4223l.get(0);
                        Intrinsics.checkNotNullExpressionValue(obj2, "enteringNames[0]");
                        final View view3 = (View) this.f4226o.get((String) obj2);
                        if (view3 != null) {
                            final o0 o0Var = this.f4218g;
                            androidx.core.view.y.a(viewGroup, new Runnable() { // from class: androidx.fragment.app.k
                                @Override // java.lang.Runnable
                                public final void run() {
                                    f.g.q(o0.this, view3, rect);
                                }
                            });
                            z10 = true;
                        }
                    }
                    this.f4218g.z(this.f4219h, view, this.f4220i);
                    o0 o0Var2 = this.f4218g;
                    Object obj3 = this.f4219h;
                    o0Var2.s(obj3, null, null, null, null, obj3, this.f4221j);
                }
            }
            ArrayList arrayList = new ArrayList();
            Iterator it = this.f4215d.iterator();
            Object obj4 = null;
            Object obj5 = null;
            while (it.hasNext()) {
                h hVar2 = (h) it.next();
                t0.d a10 = hVar2.a();
                boolean z11 = z10;
                Object h10 = this.f4218g.h(hVar2.f());
                if (h10 != null) {
                    final ArrayList arrayList2 = new ArrayList();
                    Iterator it2 = it;
                    View view4 = a10.h().mView;
                    Intrinsics.checkNotNullExpressionValue(view4, "operation.fragment.mView");
                    n(arrayList2, view4);
                    if (this.f4219h != null && (a10 == dVar2 || a10 == dVar3)) {
                        if (a10 == dVar2) {
                            arrayList2.removeAll(CollectionsKt.l1(this.f4220i));
                        } else {
                            arrayList2.removeAll(CollectionsKt.l1(this.f4221j));
                        }
                    }
                    if (arrayList2.isEmpty()) {
                        this.f4218g.a(h10, view);
                    } else {
                        this.f4218g.b(h10, arrayList2);
                        this.f4218g.s(h10, h10, arrayList2, null, null, null, null);
                        if (a10.g() == t0.d.b.GONE) {
                            a10.q(false);
                            ArrayList arrayList3 = new ArrayList(arrayList2);
                            arrayList3.remove(a10.h().mView);
                            this.f4218g.r(h10, a10.h().mView, arrayList3);
                            androidx.core.view.y.a(viewGroup, new Runnable() { // from class: androidx.fragment.app.l
                                @Override // java.lang.Runnable
                                public final void run() {
                                    f.g.r(arrayList2);
                                }
                            });
                        }
                    }
                    if (a10.g() == t0.d.b.VISIBLE) {
                        arrayList.addAll(arrayList2);
                        if (z11) {
                            this.f4218g.u(h10, rect);
                        }
                        if (FragmentManager.O0(2)) {
                            Log.v("FragmentManager", "Entering Transition: " + h10);
                            Log.v("FragmentManager", ">>>>> EnteringViews <<<<<");
                            Iterator it3 = arrayList2.iterator();
                            while (it3.hasNext()) {
                                Object transitioningViews = it3.next();
                                Intrinsics.checkNotNullExpressionValue(transitioningViews, "transitioningViews");
                                Log.v("FragmentManager", "View: " + ((View) transitioningViews));
                            }
                        }
                    } else {
                        this.f4218g.v(h10, view2);
                        if (FragmentManager.O0(2)) {
                            Log.v("FragmentManager", "Exiting Transition: " + h10);
                            Log.v("FragmentManager", ">>>>> ExitingViews <<<<<");
                            Iterator it4 = arrayList2.iterator();
                            while (it4.hasNext()) {
                                Object transitioningViews2 = it4.next();
                                Intrinsics.checkNotNullExpressionValue(transitioningViews2, "transitioningViews");
                                Log.v("FragmentManager", "View: " + ((View) transitioningViews2));
                            }
                        }
                    }
                    if (hVar2.h()) {
                        obj4 = this.f4218g.p(obj4, h10, null);
                    } else {
                        obj5 = this.f4218g.p(obj5, h10, null);
                    }
                    dVar3 = dVar;
                    z10 = z11;
                    it = it2;
                } else {
                    dVar3 = dVar;
                    z10 = z11;
                }
            }
            Object o10 = this.f4218g.o(obj4, obj5, this.f4219h);
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Final merged transition: " + o10);
            }
            return new Pair(arrayList, o10);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void p(t0.d dVar, t0.d dVar2, g this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            m0.a(dVar.h(), dVar2.h(), this$0.f4227p, this$0.f4226o, false);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void q(o0 impl, View view, Rect lastInEpicenterRect) {
            Intrinsics.checkNotNullParameter(impl, "$impl");
            Intrinsics.checkNotNullParameter(lastInEpicenterRect, "$lastInEpicenterRect");
            impl.k(view, lastInEpicenterRect);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void r(ArrayList transitioningViews) {
            Intrinsics.checkNotNullParameter(transitioningViews, "$transitioningViews");
            m0.e(transitioningViews, 4);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void y(t0.d operation, g this$0) {
            Intrinsics.checkNotNullParameter(operation, "$operation");
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Transition for operation " + operation + " has completed");
            }
            operation.e(this$0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void z(Ref.ObjectRef seekCancelLambda) {
            Intrinsics.checkNotNullParameter(seekCancelLambda, "$seekCancelLambda");
            Function0 function0 = (Function0) seekCancelLambda.element;
            if (function0 != null) {
                function0.invoke();
            }
        }

        public final void C(Object obj) {
            this.f4229r = obj;
        }

        /* JADX WARN: Removed duplicated region for block: B:12:0x0024  */
        @Override // androidx.fragment.app.t0.b
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public boolean b() {
            /*
                r4 = this;
                androidx.fragment.app.o0 r0 = r4.f4218g
                boolean r0 = r0.m()
                if (r0 == 0) goto L51
                java.util.List r0 = r4.f4215d
                java.lang.Iterable r0 = (java.lang.Iterable) r0
                boolean r1 = r0 instanceof java.util.Collection
                if (r1 == 0) goto L1a
                r1 = r0
                java.util.Collection r1 = (java.util.Collection) r1
                boolean r1 = r1.isEmpty()
                if (r1 == 0) goto L1a
                goto L43
            L1a:
                java.util.Iterator r0 = r0.iterator()
            L1e:
                boolean r1 = r0.hasNext()
                if (r1 == 0) goto L43
                java.lang.Object r1 = r0.next()
                androidx.fragment.app.f$h r1 = (androidx.fragment.app.f.h) r1
                int r2 = android.os.Build.VERSION.SDK_INT
                r3 = 34
                if (r2 < r3) goto L51
                java.lang.Object r2 = r1.f()
                if (r2 == 0) goto L51
                androidx.fragment.app.o0 r2 = r4.f4218g
                java.lang.Object r1 = r1.f()
                boolean r1 = r2.n(r1)
                if (r1 == 0) goto L51
                goto L1e
            L43:
                java.lang.Object r0 = r4.f4219h
                if (r0 == 0) goto L4f
                androidx.fragment.app.o0 r1 = r4.f4218g
                boolean r0 = r1.n(r0)
                if (r0 == 0) goto L51
            L4f:
                r0 = 1
                return r0
            L51:
                r0 = 0
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.fragment.app.f.g.b():boolean");
        }

        @Override // androidx.fragment.app.t0.b
        public void c(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
            this.f4228q.a();
        }

        @Override // androidx.fragment.app.t0.b
        public void d(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
            if (!container.isLaidOut()) {
                for (h hVar : this.f4215d) {
                    t0.d a10 = hVar.a();
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "SpecialEffectsController: Container " + container + " has not been laid out. Completing operation " + a10);
                    }
                    hVar.a().e(this);
                }
                return;
            }
            Object obj = this.f4229r;
            if (obj != null) {
                o0 o0Var = this.f4218g;
                Intrinsics.checkNotNull(obj);
                o0Var.c(obj);
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Ending execution of operations from " + this.f4216e + " to " + this.f4217f);
                    return;
                }
                return;
            }
            Pair o10 = o(container, this.f4217f, this.f4216e);
            ArrayList arrayList = (ArrayList) o10.a();
            Object b10 = o10.b();
            List<h> list = this.f4215d;
            ArrayList<t0.d> arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
            for (h hVar2 : list) {
                arrayList2.add(hVar2.a());
            }
            for (final t0.d dVar : arrayList2) {
                this.f4218g.w(dVar.h(), b10, this.f4228q, new Runnable() { // from class: androidx.fragment.app.i
                    @Override // java.lang.Runnable
                    public final void run() {
                        f.g.y(t0.d.this, this);
                    }
                });
            }
            B(arrayList, container, new a(container, b10));
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Completed executing operations from " + this.f4216e + " to " + this.f4217f);
            }
        }

        @Override // androidx.fragment.app.t0.b
        public void e(BackEventCompat backEvent, ViewGroup container) {
            Intrinsics.checkNotNullParameter(backEvent, "backEvent");
            Intrinsics.checkNotNullParameter(container, "container");
            Object obj = this.f4229r;
            if (obj != null) {
                this.f4218g.t(obj, backEvent.a());
            }
        }

        @Override // androidx.fragment.app.t0.b
        public void f(ViewGroup container) {
            Intrinsics.checkNotNullParameter(container, "container");
            if (!container.isLaidOut()) {
                for (h hVar : this.f4215d) {
                    t0.d a10 = hVar.a();
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "SpecialEffectsController: Container " + container + " has not been laid out. Skipping onStart for operation " + a10);
                    }
                }
                return;
            }
            if (x() && this.f4219h != null && !b()) {
                Log.i("FragmentManager", "Ignoring shared elements transition " + this.f4219h + " between " + this.f4216e + " and " + this.f4217f + " as neither fragment has set a Transition. In order to run a SharedElementTransition, you must also set either an enter or exit transition on a fragment involved in the transaction. The sharedElementTransition will run after the back gesture has been committed.");
            }
            if (b() && x()) {
                final Ref.ObjectRef objectRef = new Ref.ObjectRef();
                Pair o10 = o(container, this.f4217f, this.f4216e);
                ArrayList arrayList = (ArrayList) o10.a();
                Object b10 = o10.b();
                List<h> list = this.f4215d;
                ArrayList<t0.d> arrayList2 = new ArrayList(CollectionsKt.w(list, 10));
                for (h hVar2 : list) {
                    arrayList2.add(hVar2.a());
                }
                for (final t0.d dVar : arrayList2) {
                    this.f4218g.x(dVar.h(), b10, this.f4228q, new Runnable() { // from class: androidx.fragment.app.g
                        @Override // java.lang.Runnable
                        public final void run() {
                            f.g.z(Ref.ObjectRef.this);
                        }
                    }, new Runnable() { // from class: androidx.fragment.app.h
                        @Override // java.lang.Runnable
                        public final void run() {
                            f.g.A(t0.d.this, this);
                        }
                    });
                }
                B(arrayList, container, new b(container, b10, objectRef));
            }
        }

        public final Object s() {
            return this.f4229r;
        }

        public final t0.d t() {
            return this.f4216e;
        }

        public final t0.d u() {
            return this.f4217f;
        }

        public final o0 v() {
            return this.f4218g;
        }

        public final List w() {
            return this.f4215d;
        }

        public final boolean x() {
            List<h> list = this.f4215d;
            if ((list instanceof Collection) && list.isEmpty()) {
                return true;
            }
            for (h hVar : list) {
                if (!hVar.a().h().mTransitioning) {
                    return false;
                }
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class h extends C0051f {

        /* renamed from: b  reason: collision with root package name */
        private final Object f4240b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f4241c;

        /* renamed from: d  reason: collision with root package name */
        private final Object f4242d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(t0.d operation, boolean z10, boolean z11) {
            super(operation);
            Object exitTransition;
            boolean z12;
            Object obj;
            Intrinsics.checkNotNullParameter(operation, "operation");
            t0.d.b g10 = operation.g();
            t0.d.b bVar = t0.d.b.VISIBLE;
            if (g10 == bVar) {
                Fragment h10 = operation.h();
                if (z10) {
                    exitTransition = h10.getReenterTransition();
                } else {
                    exitTransition = h10.getEnterTransition();
                }
            } else {
                Fragment h11 = operation.h();
                if (z10) {
                    exitTransition = h11.getReturnTransition();
                } else {
                    exitTransition = h11.getExitTransition();
                }
            }
            this.f4240b = exitTransition;
            if (operation.g() == bVar) {
                if (z10) {
                    z12 = operation.h().getAllowReturnTransitionOverlap();
                } else {
                    z12 = operation.h().getAllowEnterTransitionOverlap();
                }
            } else {
                z12 = true;
            }
            this.f4241c = z12;
            if (z11) {
                if (z10) {
                    obj = operation.h().getSharedElementReturnTransition();
                } else {
                    obj = operation.h().getSharedElementEnterTransition();
                }
            } else {
                obj = null;
            }
            this.f4242d = obj;
        }

        private final o0 d(Object obj) {
            if (obj == null) {
                return null;
            }
            o0 o0Var = m0.f4302b;
            if (o0Var != null && o0Var.g(obj)) {
                return o0Var;
            }
            o0 o0Var2 = m0.f4303c;
            if (o0Var2 != null && o0Var2.g(obj)) {
                return o0Var2;
            }
            throw new IllegalArgumentException("Transition " + obj + " for fragment " + a().h() + " is not a valid framework Transition or AndroidX Transition");
        }

        public final o0 c() {
            o0 d10 = d(this.f4240b);
            o0 d11 = d(this.f4242d);
            if (d10 != null && d11 != null && d10 != d11) {
                throw new IllegalArgumentException(("Mixing framework transitions and AndroidX transitions is not allowed. Fragment " + a().h() + " returned Transition " + this.f4240b + " which uses a different Transition  type than its shared element transition " + this.f4242d).toString());
            } else if (d10 == null) {
                return d11;
            } else {
                return d10;
            }
        }

        public final Object e() {
            return this.f4242d;
        }

        public final Object f() {
            return this.f4240b;
        }

        public final boolean g() {
            if (this.f4242d != null) {
                return true;
            }
            return false;
        }

        public final boolean h() {
            return this.f4241c;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class i extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Collection f4243d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(Collection collection) {
            super(1);
            this.f4243d = collection;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Boolean invoke(Map.Entry entry) {
            Intrinsics.checkNotNullParameter(entry, "entry");
            return Boolean.valueOf(CollectionsKt.d0(this.f4243d, androidx.core.view.h0.I((View) entry.getValue())));
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(ViewGroup container) {
        super(container);
        Intrinsics.checkNotNullParameter(container, "container");
    }

    private final void F(List list) {
        ArrayList<b> arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            CollectionsKt.B(arrayList2, ((b) it.next()).a().f());
        }
        boolean isEmpty = arrayList2.isEmpty();
        Iterator it2 = list.iterator();
        boolean z10 = false;
        while (it2.hasNext()) {
            b bVar = (b) it2.next();
            Context context = t().getContext();
            t0.d a10 = bVar.a();
            Intrinsics.checkNotNullExpressionValue(context, "context");
            t.a c10 = bVar.c(context);
            if (c10 != null) {
                if (c10.f4340b == null) {
                    arrayList.add(bVar);
                } else {
                    Fragment h10 = a10.h();
                    if (!a10.f().isEmpty()) {
                        if (FragmentManager.O0(2)) {
                            Log.v("FragmentManager", "Ignoring Animator set on " + h10 + " as this Fragment was involved in a Transition.");
                        }
                    } else {
                        if (a10.g() == t0.d.b.GONE) {
                            a10.q(false);
                        }
                        a10.b(new c(bVar));
                        z10 = true;
                    }
                }
            }
        }
        for (b bVar2 : arrayList) {
            t0.d a11 = bVar2.a();
            Fragment h11 = a11.h();
            if (!isEmpty) {
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Ignoring Animation set on " + h11 + " as Animations cannot run alongside Transitions.");
                }
            } else if (z10) {
                if (FragmentManager.O0(2)) {
                    Log.v("FragmentManager", "Ignoring Animation set on " + h11 + " as Animations cannot run alongside Animators.");
                }
            } else {
                a11.b(new a(bVar2));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void G(f this$0, t0.d operation) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(operation, "$operation");
        this$0.c(operation);
    }

    /* JADX WARN: Removed duplicated region for block: B:119:0x03cd A[LOOP:11: B:117:0x03c7->B:119:0x03cd, LOOP_END] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void H(java.util.List r26, boolean r27, androidx.fragment.app.t0.d r28, androidx.fragment.app.t0.d r29) {
        /*
            Method dump skipped, instructions count: 988
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.fragment.app.f.H(java.util.List, boolean, androidx.fragment.app.t0$d, androidx.fragment.app.t0$d):void");
    }

    private final void I(Map map, View view) {
        String I = androidx.core.view.h0.I(view);
        if (I != null) {
            map.put(I, view);
        }
        if (view instanceof ViewGroup) {
            ViewGroup viewGroup = (ViewGroup) view;
            int childCount = viewGroup.getChildCount();
            for (int i10 = 0; i10 < childCount; i10++) {
                View child = viewGroup.getChildAt(i10);
                if (child.getVisibility() == 0) {
                    Intrinsics.checkNotNullExpressionValue(child, "child");
                    I(map, child);
                }
            }
        }
    }

    private final void J(u0.a aVar, Collection collection) {
        Set entries = aVar.entrySet();
        Intrinsics.checkNotNullExpressionValue(entries, "entries");
        CollectionsKt.N(entries, new i(collection));
    }

    private final void K(List list) {
        Fragment h10 = ((t0.d) CollectionsKt.z0(list)).h();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            t0.d dVar = (t0.d) it.next();
            dVar.h().mAnimationInfo.f4033c = h10.mAnimationInfo.f4033c;
            dVar.h().mAnimationInfo.f4034d = h10.mAnimationInfo.f4034d;
            dVar.h().mAnimationInfo.f4035e = h10.mAnimationInfo.f4035e;
            dVar.h().mAnimationInfo.f4036f = h10.mAnimationInfo.f4036f;
        }
    }

    @Override // androidx.fragment.app.t0
    public void d(List operations, boolean z10) {
        Object obj;
        Object obj2;
        Intrinsics.checkNotNullParameter(operations, "operations");
        Iterator it = operations.iterator();
        while (true) {
            obj = null;
            if (it.hasNext()) {
                obj2 = it.next();
                t0.d dVar = (t0.d) obj2;
                t0.d.b.a aVar = t0.d.b.f4372d;
                View view = dVar.h().mView;
                Intrinsics.checkNotNullExpressionValue(view, "operation.fragment.mView");
                t0.d.b a10 = aVar.a(view);
                t0.d.b bVar = t0.d.b.VISIBLE;
                if (a10 == bVar && dVar.g() != bVar) {
                    break;
                }
            } else {
                obj2 = null;
                break;
            }
        }
        t0.d dVar2 = (t0.d) obj2;
        ListIterator listIterator = operations.listIterator(operations.size());
        while (true) {
            if (!listIterator.hasPrevious()) {
                break;
            }
            Object previous = listIterator.previous();
            t0.d dVar3 = (t0.d) previous;
            t0.d.b.a aVar2 = t0.d.b.f4372d;
            View view2 = dVar3.h().mView;
            Intrinsics.checkNotNullExpressionValue(view2, "operation.fragment.mView");
            t0.d.b a11 = aVar2.a(view2);
            t0.d.b bVar2 = t0.d.b.VISIBLE;
            if (a11 != bVar2 && dVar3.g() == bVar2) {
                obj = previous;
                break;
            }
        }
        t0.d dVar4 = (t0.d) obj;
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "Executing operations from " + dVar2 + " to " + dVar4);
        }
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        K(operations);
        Iterator it2 = operations.iterator();
        while (it2.hasNext()) {
            final t0.d dVar5 = (t0.d) it2.next();
            arrayList.add(new b(dVar5, z10));
            boolean z11 = false;
            if (z10) {
                if (dVar5 != dVar2) {
                    arrayList2.add(new h(dVar5, z10, z11));
                    dVar5.a(new Runnable() { // from class: androidx.fragment.app.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            f.G(f.this, dVar5);
                        }
                    });
                }
                z11 = true;
                arrayList2.add(new h(dVar5, z10, z11));
                dVar5.a(new Runnable() { // from class: androidx.fragment.app.d
                    @Override // java.lang.Runnable
                    public final void run() {
                        f.G(f.this, dVar5);
                    }
                });
            } else {
                if (dVar5 != dVar4) {
                    arrayList2.add(new h(dVar5, z10, z11));
                    dVar5.a(new Runnable() { // from class: androidx.fragment.app.d
                        @Override // java.lang.Runnable
                        public final void run() {
                            f.G(f.this, dVar5);
                        }
                    });
                }
                z11 = true;
                arrayList2.add(new h(dVar5, z10, z11));
                dVar5.a(new Runnable() { // from class: androidx.fragment.app.d
                    @Override // java.lang.Runnable
                    public final void run() {
                        f.G(f.this, dVar5);
                    }
                });
            }
        }
        H(arrayList2, z10, dVar2, dVar4);
        F(arrayList);
    }
}
