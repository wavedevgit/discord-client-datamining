package kn;

import android.graphics.Matrix;
import android.graphics.PointF;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.EditText;
import com.swmansion.gesturehandler.react.RNGestureHandlerRootHelper;
import com.swmansion.gesturehandler.react.RNGestureHandlerRootView;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: n  reason: collision with root package name */
    public static final a f31826n = new a(null);

    /* renamed from: o  reason: collision with root package name */
    private static final PointF f31827o = new PointF();

    /* renamed from: p  reason: collision with root package name */
    private static final float[] f31828p = new float[2];

    /* renamed from: q  reason: collision with root package name */
    private static final Matrix f31829q = new Matrix();

    /* renamed from: r  reason: collision with root package name */
    private static final float[] f31830r = new float[2];

    /* renamed from: s  reason: collision with root package name */
    private static final Comparator f31831s = new Comparator() { // from class: kn.f
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int t10;
            t10 = i.t((d) obj, (d) obj2);
            return t10;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f31832a;

    /* renamed from: b  reason: collision with root package name */
    private final j f31833b;

    /* renamed from: c  reason: collision with root package name */
    private final d0 f31834c;

    /* renamed from: d  reason: collision with root package name */
    private final ViewGroup f31835d;

    /* renamed from: e  reason: collision with root package name */
    private float f31836e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayList f31837f;

    /* renamed from: g  reason: collision with root package name */
    private final ArrayList f31838g;

    /* renamed from: h  reason: collision with root package name */
    private final ArrayList f31839h;

    /* renamed from: i  reason: collision with root package name */
    private final HashSet f31840i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f31841j;

    /* renamed from: k  reason: collision with root package name */
    private int f31842k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f31843l;

    /* renamed from: m  reason: collision with root package name */
    private int f31844m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean h(d dVar, d dVar2) {
            if (dVar != dVar2 && !dVar.L0(dVar2) && !dVar2.L0(dVar)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean i(int i10) {
            if (i10 == 3 || i10 == 1 || i10 == 5) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean j(float f10, float f11, View view) {
            if (0.0f <= f10 && f10 <= view.getWidth() && 0.0f <= f11 && f11 <= view.getHeight()) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean k(d dVar, d dVar2) {
            if (!dVar.Y(dVar2) || h(dVar, dVar2)) {
                return false;
            }
            if (dVar != dVar2) {
                if (dVar.a0() || dVar.S() == 4) {
                    return dVar.K0(dVar2);
                }
                return true;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean l(d dVar, d dVar2) {
            if (dVar != dVar2) {
                if (dVar.N0(dVar2) || dVar2.M0(dVar)) {
                    return true;
                }
                return false;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean m(View view, float[] fArr) {
            if (((view instanceof ViewGroup) && view.getBackground() == null) || !j(fArr[0], fArr[1], view)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void n(float f10, float f11, ViewGroup viewGroup, View view, PointF pointF) {
            float scrollX = (f10 + viewGroup.getScrollX()) - view.getLeft();
            float scrollY = (f11 + viewGroup.getScrollY()) - view.getTop();
            Matrix matrix = view.getMatrix();
            if (!matrix.isIdentity()) {
                float[] fArr = i.f31828p;
                fArr[0] = scrollX;
                fArr[1] = scrollY;
                matrix.invert(i.f31829q);
                i.f31829q.mapPoints(fArr);
                float f12 = fArr[0];
                scrollY = fArr[1];
                scrollX = f12;
            }
            pointF.set(scrollX, scrollY);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31845a;

        static {
            int[] iArr = new int[v.values().length];
            try {
                iArr[v.f31891d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[v.f31893i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[v.f31892e.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[v.f31894o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f31845a = iArr;
        }
    }

    public i(ViewGroup wrapperView, j handlerRegistry, d0 viewConfigHelper, ViewGroup rootView) {
        Intrinsics.checkNotNullParameter(wrapperView, "wrapperView");
        Intrinsics.checkNotNullParameter(handlerRegistry, "handlerRegistry");
        Intrinsics.checkNotNullParameter(viewConfigHelper, "viewConfigHelper");
        Intrinsics.checkNotNullParameter(rootView, "rootView");
        this.f31832a = wrapperView;
        this.f31833b = handlerRegistry;
        this.f31834c = viewConfigHelper;
        this.f31835d = rootView;
        this.f31837f = new ArrayList();
        this.f31838g = new ArrayList();
        this.f31839h = new ArrayList();
        this.f31840i = new HashSet();
    }

    private final void C(d dVar, View view) {
        if (this.f31837f.contains(dVar)) {
            return;
        }
        this.f31837f.add(dVar);
        dVar.w0(false);
        dVar.x0(false);
        dVar.v0(Integer.MAX_VALUE);
        dVar.q0(view, this);
    }

    private final boolean D(View view, float[] fArr, int i10, MotionEvent motionEvent) {
        boolean z10;
        ArrayList a10 = this.f31833b.a(view);
        if (a10 != null) {
            synchronized (a10) {
                try {
                    Iterator it = a10.iterator();
                    Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
                    z10 = false;
                    while (it.hasNext()) {
                        d dVar = (d) it.next();
                        if (dVar.d0() && dVar.g0(view, fArr[0], fArr[1]) && !I(dVar, motionEvent)) {
                            C(dVar, view);
                            dVar.O0(i10);
                            z10 = true;
                        }
                    }
                    Unit unit = Unit.f32008a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        } else {
            z10 = false;
        }
        float width = view.getWidth();
        float f10 = fArr[0];
        if (0.0f <= f10 && f10 <= width) {
            float height = view.getHeight();
            float f11 = fArr[1];
            if (0.0f <= f11 && f11 <= height && y(view) && p(view, fArr, i10)) {
                return true;
            }
        }
        return z10;
    }

    private final void E() {
        if (!this.f31841j && this.f31842k == 0) {
            l();
        } else {
            this.f31843l = true;
        }
    }

    private final boolean G(d dVar) {
        ArrayList<d> arrayList = this.f31837f;
        if (arrayList != null && arrayList.isEmpty()) {
            return false;
        }
        for (d dVar2 : arrayList) {
            if (dVar.Y(dVar2) && dVar2.S() == 4 && !f31826n.h(dVar, dVar2) && dVar.c0(dVar2)) {
                return true;
            }
        }
        return false;
    }

    private final boolean H(d dVar) {
        ArrayList<d> arrayList = this.f31837f;
        if (arrayList != null && arrayList.isEmpty()) {
            return false;
        }
        for (d dVar2 : arrayList) {
            if (f31826n.l(dVar, dVar2) && dVar2.S() == 5) {
                return true;
            }
        }
        return false;
    }

    private final boolean I(d dVar, MotionEvent motionEvent) {
        if (!(dVar instanceof m) && !(dVar instanceof RNGestureHandlerRootHelper.b) && com.swmansion.gesturehandler.react.a.c(motionEvent)) {
            return true;
        }
        return false;
    }

    private final boolean J(View view) {
        if ((view instanceof RNGestureHandlerRootView) && !Intrinsics.areEqual(view, this.f31832a) && ((RNGestureHandlerRootView) view).isRootViewEnabled()) {
            return true;
        }
        return false;
    }

    private final boolean M(View view, float[] fArr, int i10, MotionEvent motionEvent) {
        boolean z10;
        if (J(view)) {
            return false;
        }
        int i11 = b.f31845a[this.f31834c.a(view).ordinal()];
        if (i11 == 1) {
            return false;
        }
        if (i11 != 2) {
            if (i11 != 3) {
                if (i11 == 4) {
                    if (view instanceof ViewGroup) {
                        z10 = r((ViewGroup) view, fArr, i10, motionEvent);
                    } else {
                        z10 = false;
                    }
                    if (!D(view, fArr, i10, motionEvent) && !z10 && !f31826n.m(view, fArr)) {
                        return false;
                    }
                    return true;
                }
                throw new qr.p();
            } else if (view instanceof ViewGroup) {
                boolean r10 = r((ViewGroup) view, fArr, i10, motionEvent);
                if (r10) {
                    D(view, fArr, i10, motionEvent);
                }
                return r10;
            } else if (!(view instanceof EditText)) {
                return false;
            } else {
                return D(view, fArr, i10, motionEvent);
            }
        } else if (!D(view, fArr, i10, motionEvent) && !f31826n.m(view, fArr)) {
            return false;
        } else {
            return true;
        }
    }

    private final void N(d dVar) {
        if (!H(dVar) && !G(dVar)) {
            if (u(dVar)) {
                h(dVar);
                return;
            }
            z(dVar);
            dVar.x0(false);
            return;
        }
        dVar.q();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(d dVar) {
        dVar.p();
        dVar.k();
        dVar.B();
        return Unit.f32008a;
    }

    private final void h(d dVar) {
        if (this.f31838g.contains(dVar)) {
            return;
        }
        this.f31838g.add(dVar);
        this.f31840i.add(Integer.valueOf(dVar.T()));
        dVar.x0(true);
        int i10 = this.f31844m;
        this.f31844m = i10 + 1;
        dVar.v0(i10);
    }

    private final boolean i(View view) {
        if (view.getVisibility() == 0 && view.getAlpha() >= this.f31836e) {
            return true;
        }
        return false;
    }

    private final void j() {
        for (d dVar : CollectionsKt.h1(CollectionsKt.T(this.f31838g))) {
            dVar.q();
        }
        for (d dVar2 : CollectionsKt.T(this.f31837f)) {
            dVar2.q();
        }
    }

    private final void k() {
        for (d dVar : CollectionsKt.h1(this.f31838g)) {
            if (!dVar.a0()) {
                this.f31838g.remove(dVar);
                this.f31840i.remove(Integer.valueOf(dVar.T()));
            }
        }
    }

    private final void l() {
        for (d dVar : CollectionsKt.T(this.f31837f)) {
            if (f31826n.i(dVar.S()) && !dVar.a0()) {
                dVar.r0();
                dVar.w0(false);
                dVar.x0(false);
                dVar.v0(Integer.MAX_VALUE);
            }
        }
        CollectionsKt.J(this.f31837f, new Function1() { // from class: kn.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                boolean m10;
                m10 = i.m((d) obj);
                return Boolean.valueOf(m10);
            }
        });
        this.f31843l = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean m(d it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (f31826n.i(it.S()) && !it.a0()) {
            return true;
        }
        return false;
    }

    private final void n(d dVar, MotionEvent motionEvent) {
        boolean z10;
        if (!x(dVar.W())) {
            dVar.q();
        } else if (!dVar.S0(motionEvent)) {
        } else {
            int actionMasked = motionEvent.getActionMasked();
            View W = dVar.W();
            MotionEvent obtain = MotionEvent.obtain(motionEvent);
            Intrinsics.checkNotNullExpressionValue(obtain, "obtain(...)");
            MotionEvent K = K(W, obtain);
            if (dVar.N() && dVar.S() != 0) {
                dVar.R0(K, motionEvent);
            }
            if (!dVar.a0() || actionMasked != 2) {
                if (dVar.S() == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                dVar.X(K, motionEvent);
                if (dVar.Z()) {
                    if (dVar.R()) {
                        dVar.H0(false);
                        dVar.t0();
                    }
                    dVar.v(K);
                }
                if (dVar.N() && z10) {
                    dVar.R0(K, motionEvent);
                }
                if (actionMasked == 1 || actionMasked == 6 || actionMasked == 10) {
                    dVar.P0(K.getPointerId(K.getActionIndex()));
                }
            }
            K.recycle();
        }
    }

    private final void o(MotionEvent motionEvent) {
        List<d> j12 = CollectionsKt.j1(this.f31837f);
        CollectionsKt.A(j12, f31831s);
        for (d dVar : j12) {
            n(dVar, motionEvent);
        }
    }

    private final boolean p(View view, float[] fArr, int i10) {
        boolean z10 = false;
        for (ViewParent parent = view.getParent(); parent != null; parent = parent.getParent()) {
            if (parent instanceof ViewGroup) {
                if ((parent instanceof RNGestureHandlerRootView) && ((RNGestureHandlerRootView) parent).isRootViewEnabled()) {
                    break;
                }
                ViewGroup viewGroup = (ViewGroup) parent;
                ArrayList a10 = this.f31833b.a((View) parent);
                if (a10 != null) {
                    synchronized (a10) {
                        try {
                            Iterator it = a10.iterator();
                            Intrinsics.checkNotNullExpressionValue(it, "iterator(...)");
                            while (it.hasNext()) {
                                d dVar = (d) it.next();
                                if (dVar.d0() && dVar.g0(view, fArr[0], fArr[1])) {
                                    C(dVar, viewGroup);
                                    dVar.O0(i10);
                                    z10 = true;
                                }
                            }
                            Unit unit = Unit.f32008a;
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                } else {
                    continue;
                }
            }
        }
        return z10;
    }

    private final void q(MotionEvent motionEvent) {
        int actionIndex = motionEvent.getActionIndex();
        int pointerId = motionEvent.getPointerId(actionIndex);
        float[] fArr = f31830r;
        fArr[0] = motionEvent.getX(actionIndex);
        fArr[1] = motionEvent.getY(actionIndex);
        M(this.f31832a, fArr, pointerId, motionEvent);
        r(this.f31832a, fArr, pointerId, motionEvent);
    }

    private final boolean r(ViewGroup viewGroup, float[] fArr, int i10, MotionEvent motionEvent) {
        ViewGroup viewGroup2;
        boolean M;
        if (J(viewGroup)) {
            return false;
        }
        int childCount = viewGroup.getChildCount() - 1;
        while (-1 < childCount) {
            View c10 = this.f31834c.c(viewGroup, childCount);
            if (i(c10)) {
                PointF pointF = f31827o;
                a aVar = f31826n;
                viewGroup2 = viewGroup;
                aVar.n(fArr[0], fArr[1], viewGroup2, c10, pointF);
                float f10 = fArr[0];
                float f11 = fArr[1];
                fArr[0] = pointF.x;
                fArr[1] = pointF.y;
                if (w(c10) && !aVar.j(fArr[0], fArr[1], c10)) {
                    M = false;
                } else {
                    M = M(c10, fArr, i10, motionEvent);
                }
                fArr[0] = f10;
                fArr[1] = f11;
                if (M) {
                    return true;
                }
            } else {
                viewGroup2 = viewGroup;
            }
            childCount--;
            viewGroup = viewGroup2;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int t(d dVar, d dVar2) {
        if ((dVar.Z() && dVar2.Z()) || (dVar.a0() && dVar2.a0())) {
            return Integer.signum(dVar2.G() - dVar.G());
        }
        if (dVar.Z()) {
            return -1;
        }
        if (dVar2.Z()) {
            return 1;
        }
        if (dVar.a0()) {
            return -1;
        }
        if (dVar2.a0()) {
            return 1;
        }
        return 0;
    }

    private final boolean u(d dVar) {
        ArrayList<d> arrayList = this.f31837f;
        if (arrayList != null && arrayList.isEmpty()) {
            return false;
        }
        for (d dVar2 : arrayList) {
            a aVar = f31826n;
            if (!aVar.i(dVar2.S()) && aVar.l(dVar, dVar2)) {
                return true;
            }
        }
        return false;
    }

    private final boolean w(View view) {
        if ((view instanceof ViewGroup) && !this.f31834c.b((ViewGroup) view)) {
            return false;
        }
        return true;
    }

    private final boolean x(View view) {
        if (view == null) {
            return false;
        }
        if (view == this.f31832a) {
            return true;
        }
        ViewParent parent = view.getParent();
        while (parent != null && parent != this.f31832a) {
            parent = parent.getParent();
        }
        if (parent != this.f31832a) {
            return false;
        }
        return true;
    }

    private final boolean y(View view) {
        ViewGroup viewGroup;
        ViewParent parent = view.getParent();
        if (parent instanceof ViewGroup) {
            viewGroup = (ViewGroup) parent;
        } else {
            viewGroup = null;
        }
        if (viewGroup == null) {
            return false;
        }
        Matrix matrix = view.getMatrix();
        float[] fArr = f31828p;
        fArr[0] = 0.0f;
        fArr[1] = 0.0f;
        matrix.mapPoints(fArr);
        float left = fArr[0] + view.getLeft();
        float top = fArr[1] + view.getTop();
        if (left >= 0.0f && left + view.getWidth() <= viewGroup.getWidth() && top >= 0.0f && top + view.getHeight() <= viewGroup.getHeight()) {
            return false;
        }
        return true;
    }

    private final void z(d dVar) {
        int S = dVar.S();
        dVar.x0(false);
        dVar.w0(true);
        dVar.H0(true);
        int i10 = this.f31844m;
        this.f31844m = i10 + 1;
        dVar.v0(i10);
        for (d dVar2 : CollectionsKt.T(this.f31837f)) {
            if (f31826n.k(dVar2, dVar)) {
                dVar2.q();
            }
        }
        for (d dVar3 : CollectionsKt.T(this.f31838g)) {
            if (f31826n.k(dVar3, dVar)) {
                dVar3.x0(false);
            }
        }
        k();
        if (S != 1 && S != 3) {
            dVar.w(4, 2);
            if (S != 4) {
                dVar.w(5, 4);
                if (S != 5) {
                    dVar.w(0, 5);
                }
            }
        }
    }

    public final void A(d handler, int i10, int i11) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f31842k++;
        if (f31826n.i(i10)) {
            for (d dVar : CollectionsKt.h1(this.f31838g)) {
                if (f31826n.l(dVar, handler) && this.f31840i.contains(Integer.valueOf(dVar.T()))) {
                    if (i10 == 5) {
                        dVar.q();
                        if (dVar.S() == 5) {
                            dVar.w(3, 2);
                        }
                        dVar.x0(false);
                    } else {
                        N(dVar);
                    }
                }
            }
            k();
        }
        if (i10 == 4) {
            N(handler);
        } else if (i11 != 4 && i11 != 5) {
            if (i11 != 0 || i10 != 3) {
                handler.w(i10, i11);
            }
        } else if (handler.Z()) {
            handler.w(i10, i11);
        } else if (i11 == 4 && (i10 == 3 || i10 == 1)) {
            handler.w(i10, 2);
        }
        this.f31842k--;
        E();
    }

    /* JADX WARN: Code restructure failed: missing block: B:8:0x0015, code lost:
        if (r1 != 7) goto L8;
     */
    /* JADX WARN: Removed duplicated region for block: B:26:0x0047  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final boolean B(android.view.MotionEvent r5) {
        /*
            r4 = this;
            java.lang.String r0 = "event"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            r0 = 1
            r4.f31841j = r0
            int r1 = r5.getActionMasked()
            r2 = 3
            if (r1 == 0) goto L1c
            if (r1 == r2) goto L18
            r3 = 5
            if (r1 == r3) goto L1c
            r3 = 7
            if (r1 == r3) goto L1c
            goto L1f
        L18:
            r4.j()
            goto L1f
        L1c:
            r4.q(r5)
        L1f:
            r4.o(r5)
            r3 = 0
            r4.f31841j = r3
            boolean r3 = r4.f31843l
            if (r3 == 0) goto L30
            int r3 = r4.f31842k
            if (r3 != 0) goto L30
            r4.l()
        L30:
            if (r1 == r0) goto L39
            if (r1 == r2) goto L39
            r2 = 10
            if (r1 == r2) goto L39
            goto L4d
        L39:
            java.util.ArrayList r1 = r4.f31837f
            boolean r1 = r1.isEmpty()
            if (r1 == 0) goto L4d
            android.view.ViewGroup r1 = r4.f31835d
            boolean r2 = r1 instanceof com.facebook.react.uimanager.RootView
            if (r2 == 0) goto L4d
            r2 = r1
            com.facebook.react.uimanager.RootView r2 = (com.facebook.react.uimanager.RootView) r2
            r2.onChildEndedNativeGesture(r1, r5)
        L4d:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: kn.i.B(android.view.MotionEvent):boolean");
    }

    public final void F(float f10) {
        this.f31836e = f10;
    }

    public final MotionEvent K(View view, MotionEvent event) {
        ViewGroup viewGroup;
        Intrinsics.checkNotNullParameter(event, "event");
        if (view != null) {
            ViewParent parent = view.getParent();
            if (parent instanceof ViewGroup) {
                viewGroup = (ViewGroup) parent;
            } else {
                viewGroup = null;
            }
            if (!Intrinsics.areEqual(viewGroup, this.f31832a)) {
                K(viewGroup, event);
            }
            if (viewGroup != null) {
                event.setLocation((event.getX() + viewGroup.getScrollX()) - view.getLeft(), (event.getY() + viewGroup.getScrollY()) - view.getTop());
            }
            if (!view.getMatrix().isIdentity()) {
                Matrix matrix = view.getMatrix();
                Matrix matrix2 = f31829q;
                matrix.invert(matrix2);
                event.transform(matrix2);
            }
        }
        return event;
    }

    public final PointF L(View view, PointF point) {
        ViewGroup viewGroup;
        Intrinsics.checkNotNullParameter(point, "point");
        if (view != null) {
            ViewParent parent = view.getParent();
            if (parent instanceof ViewGroup) {
                viewGroup = (ViewGroup) parent;
            } else {
                viewGroup = null;
            }
            if (!Intrinsics.areEqual(viewGroup, this.f31832a)) {
                L(viewGroup, point);
            }
            if (viewGroup != null) {
                point.x += viewGroup.getScrollX() - view.getLeft();
                point.y += viewGroup.getScrollY() - view.getTop();
            }
            if (!view.getMatrix().isIdentity()) {
                Matrix matrix = view.getMatrix();
                Matrix matrix2 = f31829q;
                matrix.invert(matrix2);
                float[] fArr = f31830r;
                fArr[0] = point.x;
                fArr[1] = point.y;
                matrix2.mapPoints(fArr);
                point.x = fArr[0];
                point.y = fArr[1];
            }
        }
        return point;
    }

    public final void f(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        ArrayList<d> a10 = this.f31833b.a(view);
        if (a10 != null) {
            for (final d dVar : a10) {
                if (dVar instanceof q) {
                    C(dVar, view);
                    dVar.T0(new Function0() { // from class: kn.h
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit g10;
                            g10 = i.g(d.this);
                            return g10;
                        }
                    });
                }
            }
        }
    }

    public final ArrayList s(View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        return this.f31833b.a(view);
    }

    public final boolean v() {
        ArrayList<d> arrayList = this.f31837f;
        if (arrayList != null && arrayList.isEmpty()) {
            return false;
        }
        for (d dVar : arrayList) {
            if (dVar.S() == 4) {
                return true;
            }
        }
        return false;
    }
}
