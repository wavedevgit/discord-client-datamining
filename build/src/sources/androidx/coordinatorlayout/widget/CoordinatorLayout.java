package androidx.coordinatorlayout.widget;

import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Region;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Parcel;
import android.os.Parcelable;
import android.os.SystemClock;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.util.Log;
import android.util.SparseArray;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.ViewTreeObserver;
import androidx.annotation.NonNull;
import androidx.core.util.Pools$SynchronizedPool;
import androidx.core.view.NestedScrollingParentHelper;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.i0;
import androidx.core.view.j;
import androidx.core.view.u;
import androidx.core.view.v;
import androidx.core.view.w;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class CoordinatorLayout extends ViewGroup implements u, v {
    static final String E;
    static final Class[] F;
    static final ThreadLocal G;
    static final Comparator H;
    private static final b2.d I;
    private Drawable A;
    ViewGroup.OnHierarchyChangeListener B;
    private w C;
    private final NestedScrollingParentHelper D;

    /* renamed from: d  reason: collision with root package name */
    private final List f2985d;

    /* renamed from: e  reason: collision with root package name */
    private final androidx.coordinatorlayout.widget.a f2986e;

    /* renamed from: i  reason: collision with root package name */
    private final List f2987i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f2988o;

    /* renamed from: p  reason: collision with root package name */
    private final int[] f2989p;

    /* renamed from: q  reason: collision with root package name */
    private final int[] f2990q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f2991r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f2992s;

    /* renamed from: t  reason: collision with root package name */
    private int[] f2993t;

    /* renamed from: u  reason: collision with root package name */
    private View f2994u;

    /* renamed from: v  reason: collision with root package name */
    private View f2995v;

    /* renamed from: w  reason: collision with root package name */
    private g f2996w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f2997x;

    /* renamed from: y  reason: collision with root package name */
    private WindowInsetsCompat f2998y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f2999z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements w {
        a() {
        }

        @Override // androidx.core.view.w
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            return CoordinatorLayout.this.X(windowInsetsCompat);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        c getBehavior();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class c {
        public c() {
        }

        public boolean A(CoordinatorLayout coordinatorLayout, View view, Rect rect, boolean z10) {
            return false;
        }

        public void B(CoordinatorLayout coordinatorLayout, View view, Parcelable parcelable) {
        }

        public Parcelable C(CoordinatorLayout coordinatorLayout, View view) {
            return View.BaseSavedState.EMPTY_STATE;
        }

        public boolean D(CoordinatorLayout coordinatorLayout, View view, View view2, View view3, int i10) {
            return false;
        }

        public boolean E(CoordinatorLayout coordinatorLayout, View view, View view2, View view3, int i10, int i11) {
            if (i11 == 0) {
                return D(coordinatorLayout, view, view2, view3, i10);
            }
            return false;
        }

        public void F(CoordinatorLayout coordinatorLayout, View view, View view2) {
        }

        public void G(CoordinatorLayout coordinatorLayout, View view, View view2, int i10) {
            if (i10 == 0) {
                F(coordinatorLayout, view, view2);
            }
        }

        public boolean H(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
            return false;
        }

        public boolean e(CoordinatorLayout coordinatorLayout, View view) {
            if (h(coordinatorLayout, view) > 0.0f) {
                return true;
            }
            return false;
        }

        public boolean f(CoordinatorLayout coordinatorLayout, View view, Rect rect) {
            return false;
        }

        public int g(CoordinatorLayout coordinatorLayout, View view) {
            return -16777216;
        }

        public float h(CoordinatorLayout coordinatorLayout, View view) {
            return 0.0f;
        }

        public boolean i(CoordinatorLayout coordinatorLayout, View view, View view2) {
            return false;
        }

        public WindowInsetsCompat j(CoordinatorLayout coordinatorLayout, View view, WindowInsetsCompat windowInsetsCompat) {
            return windowInsetsCompat;
        }

        public void k(f fVar) {
        }

        public boolean l(CoordinatorLayout coordinatorLayout, View view, View view2) {
            return false;
        }

        public void m(CoordinatorLayout coordinatorLayout, View view, View view2) {
        }

        public void n() {
        }

        public boolean o(CoordinatorLayout coordinatorLayout, View view, MotionEvent motionEvent) {
            return false;
        }

        public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
            return false;
        }

        public boolean q(CoordinatorLayout coordinatorLayout, View view, int i10, int i11, int i12, int i13) {
            return false;
        }

        public boolean r(CoordinatorLayout coordinatorLayout, View view, View view2, float f10, float f11, boolean z10) {
            return false;
        }

        public boolean s(CoordinatorLayout coordinatorLayout, View view, View view2, float f10, float f11) {
            return false;
        }

        public void t(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int[] iArr) {
        }

        public void u(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int[] iArr, int i12) {
            if (i12 == 0) {
                t(coordinatorLayout, view, view2, i10, i11, iArr);
            }
        }

        public void v(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int i12, int i13) {
        }

        public void w(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int i12, int i13, int i14) {
            if (i14 == 0) {
                v(coordinatorLayout, view, view2, i10, i11, i12, i13);
            }
        }

        public void x(CoordinatorLayout coordinatorLayout, View view, View view2, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
            iArr[0] = iArr[0] + i12;
            iArr[1] = iArr[1] + i13;
            w(coordinatorLayout, view, view2, i10, i11, i12, i13, i14);
        }

        public void y(CoordinatorLayout coordinatorLayout, View view, View view2, View view3, int i10) {
        }

        public void z(CoordinatorLayout coordinatorLayout, View view, View view2, View view3, int i10, int i11) {
            if (i11 == 0) {
                y(coordinatorLayout, view, view2, view3, i10);
            }
        }

        public c(Context context, AttributeSet attributeSet) {
        }
    }

    @Retention(RetentionPolicy.RUNTIME)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public @interface d {
        Class value();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class e implements ViewGroup.OnHierarchyChangeListener {
        e() {
        }

        @Override // android.view.ViewGroup.OnHierarchyChangeListener
        public void onChildViewAdded(View view, View view2) {
            ViewGroup.OnHierarchyChangeListener onHierarchyChangeListener = CoordinatorLayout.this.B;
            if (onHierarchyChangeListener != null) {
                onHierarchyChangeListener.onChildViewAdded(view, view2);
            }
        }

        @Override // android.view.ViewGroup.OnHierarchyChangeListener
        public void onChildViewRemoved(View view, View view2) {
            CoordinatorLayout.this.H(2);
            ViewGroup.OnHierarchyChangeListener onHierarchyChangeListener = CoordinatorLayout.this.B;
            if (onHierarchyChangeListener != null) {
                onHierarchyChangeListener.onChildViewRemoved(view, view2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class g implements ViewTreeObserver.OnPreDrawListener {
        g() {
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            CoordinatorLayout.this.H(0);
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class i implements Comparator {
        i() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(View view, View view2) {
            float L = i0.L(view);
            float L2 = i0.L(view2);
            if (L > L2) {
                return -1;
            }
            if (L < L2) {
                return 1;
            }
            return 0;
        }
    }

    static {
        String str;
        Package r02 = CoordinatorLayout.class.getPackage();
        if (r02 != null) {
            str = r02.getName();
        } else {
            str = null;
        }
        E = str;
        H = new i();
        F = new Class[]{Context.class, AttributeSet.class};
        G = new ThreadLocal();
        I = new Pools$SynchronizedPool(12);
    }

    public CoordinatorLayout(Context context) {
        this(context, null);
    }

    private void B(View view, int i10) {
        f fVar = (f) view.getLayoutParams();
        Rect e10 = e();
        e10.set(getPaddingLeft() + ((ViewGroup.MarginLayoutParams) fVar).leftMargin, getPaddingTop() + ((ViewGroup.MarginLayoutParams) fVar).topMargin, (getWidth() - getPaddingRight()) - ((ViewGroup.MarginLayoutParams) fVar).rightMargin, (getHeight() - getPaddingBottom()) - ((ViewGroup.MarginLayoutParams) fVar).bottomMargin);
        if (this.f2998y != null && i0.v(this) && !i0.v(view)) {
            e10.left += this.f2998y.o();
            e10.top += this.f2998y.q();
            e10.right -= this.f2998y.p();
            e10.bottom -= this.f2998y.n();
        }
        Rect e11 = e();
        j.a(T(fVar.f3004c), view.getMeasuredWidth(), view.getMeasuredHeight(), e10, e11, i10);
        view.layout(e11.left, e11.top, e11.right, e11.bottom);
        P(e10);
        P(e11);
    }

    private void C(View view, View view2, int i10) {
        Rect e10 = e();
        Rect e11 = e();
        try {
            s(view2, e10);
            t(view, i10, e10, e11);
            view.layout(e11.left, e11.top, e11.right, e11.bottom);
        } finally {
            P(e10);
            P(e11);
        }
    }

    private void D(View view, int i10, int i11) {
        int i12;
        f fVar = (f) view.getLayoutParams();
        int b10 = j.b(U(fVar.f3004c), i11);
        int i13 = b10 & 7;
        int i14 = b10 & 112;
        int width = getWidth();
        int height = getHeight();
        int measuredWidth = view.getMeasuredWidth();
        int measuredHeight = view.getMeasuredHeight();
        if (i11 == 1) {
            i10 = width - i10;
        }
        int v10 = v(i10) - measuredWidth;
        if (i13 != 1) {
            if (i13 == 5) {
                v10 += measuredWidth;
            }
        } else {
            v10 += measuredWidth / 2;
        }
        if (i14 != 16) {
            if (i14 != 80) {
                i12 = 0;
            } else {
                i12 = measuredHeight;
            }
        } else {
            i12 = measuredHeight / 2;
        }
        int max = Math.max(getPaddingLeft() + ((ViewGroup.MarginLayoutParams) fVar).leftMargin, Math.min(v10, ((width - getPaddingRight()) - measuredWidth) - ((ViewGroup.MarginLayoutParams) fVar).rightMargin));
        int max2 = Math.max(getPaddingTop() + ((ViewGroup.MarginLayoutParams) fVar).topMargin, Math.min(i12, ((height - getPaddingBottom()) - measuredHeight) - ((ViewGroup.MarginLayoutParams) fVar).bottomMargin));
        view.layout(max, max2, measuredWidth + max, measuredHeight + max2);
    }

    private MotionEvent E(MotionEvent motionEvent) {
        MotionEvent obtain = MotionEvent.obtain(motionEvent);
        obtain.setAction(3);
        return obtain;
    }

    private void F(View view, Rect rect, int i10) {
        boolean z10;
        boolean z11;
        int width;
        int i11;
        int i12;
        int i13;
        int height;
        int i14;
        int i15;
        int i16;
        if (i0.Q(view) && view.getWidth() > 0 && view.getHeight() > 0) {
            f fVar = (f) view.getLayoutParams();
            c f10 = fVar.f();
            Rect e10 = e();
            Rect e11 = e();
            e11.set(view.getLeft(), view.getTop(), view.getRight(), view.getBottom());
            if (f10 != null && f10.f(this, view, e10)) {
                if (!e11.contains(e10)) {
                    throw new IllegalArgumentException("Rect should be within the child's bounds. Rect:" + e10.toShortString() + " | Bounds:" + e11.toShortString());
                }
            } else {
                e10.set(e11);
            }
            P(e11);
            if (e10.isEmpty()) {
                P(e10);
                return;
            }
            int b10 = j.b(fVar.f3009h, i10);
            boolean z12 = true;
            if ((b10 & 48) == 48 && (i15 = (e10.top - ((ViewGroup.MarginLayoutParams) fVar).topMargin) - fVar.f3011j) < (i16 = rect.top)) {
                W(view, i16 - i15);
                z10 = true;
            } else {
                z10 = false;
            }
            if ((b10 & 80) == 80 && (height = ((getHeight() - e10.bottom) - ((ViewGroup.MarginLayoutParams) fVar).bottomMargin) + fVar.f3011j) < (i14 = rect.bottom)) {
                W(view, height - i14);
                z10 = true;
            }
            if (!z10) {
                W(view, 0);
            }
            if ((b10 & 3) == 3 && (i12 = (e10.left - ((ViewGroup.MarginLayoutParams) fVar).leftMargin) - fVar.f3010i) < (i13 = rect.left)) {
                V(view, i13 - i12);
                z11 = true;
            } else {
                z11 = false;
            }
            if ((b10 & 5) == 5 && (width = ((getWidth() - e10.right) - ((ViewGroup.MarginLayoutParams) fVar).rightMargin) + fVar.f3010i) < (i11 = rect.right)) {
                V(view, width - i11);
            } else {
                z12 = z11;
            }
            if (!z12) {
                V(view, 0);
            }
            P(e10);
        }
    }

    static c K(Context context, AttributeSet attributeSet, String str) {
        if (TextUtils.isEmpty(str)) {
            return null;
        }
        if (str.startsWith(".")) {
            str = context.getPackageName() + str;
        } else if (str.indexOf(46) < 0) {
            String str2 = E;
            if (!TextUtils.isEmpty(str2)) {
                str = str2 + '.' + str;
            }
        }
        try {
            ThreadLocal threadLocal = G;
            Map map = (Map) threadLocal.get();
            if (map == null) {
                map = new HashMap();
                threadLocal.set(map);
            }
            Constructor<?> constructor = (Constructor) map.get(str);
            if (constructor == null) {
                constructor = Class.forName(str, false, context.getClassLoader()).getConstructor(F);
                constructor.setAccessible(true);
                map.put(str, constructor);
            }
            return (c) constructor.newInstance(context, attributeSet);
        } catch (Exception e10) {
            throw new RuntimeException("Could not inflate Behavior subclass " + str, e10);
        }
    }

    private boolean L(c cVar, View view, MotionEvent motionEvent, int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                return cVar.H(this, view, motionEvent);
            }
            throw new IllegalArgumentException();
        }
        return cVar.o(this, view, motionEvent);
    }

    private boolean M(MotionEvent motionEvent, int i10) {
        int actionMasked = motionEvent.getActionMasked();
        List list = this.f2987i;
        y(list);
        int size = list.size();
        MotionEvent motionEvent2 = null;
        boolean z10 = false;
        boolean z11 = false;
        for (int i11 = 0; i11 < size; i11++) {
            View view = (View) list.get(i11);
            f fVar = (f) view.getLayoutParams();
            c f10 = fVar.f();
            if ((z10 || z11) && actionMasked != 0) {
                if (f10 != null) {
                    if (motionEvent2 == null) {
                        motionEvent2 = E(motionEvent);
                    }
                    L(f10, view, motionEvent2, i10);
                }
            } else {
                if (!z11 && !z10 && f10 != null && (z10 = L(f10, view, motionEvent, i10))) {
                    this.f2994u = view;
                    if (actionMasked != 3 && actionMasked != 1) {
                        for (int i12 = 0; i12 < i11; i12++) {
                            View view2 = (View) list.get(i12);
                            c f11 = ((f) view2.getLayoutParams()).f();
                            if (f11 != null) {
                                if (motionEvent2 == null) {
                                    motionEvent2 = E(motionEvent);
                                }
                                L(f11, view2, motionEvent2, i10);
                            }
                        }
                    }
                }
                boolean c10 = fVar.c();
                boolean i13 = fVar.i(this, view);
                if (i13 && !c10) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (i13 && !z11) {
                    break;
                }
            }
        }
        list.clear();
        if (motionEvent2 != null) {
            motionEvent2.recycle();
        }
        return z10;
    }

    private void N() {
        this.f2985d.clear();
        this.f2986e.c();
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            f x10 = x(childAt);
            x10.d(this, childAt);
            this.f2986e.b(childAt);
            for (int i11 = 0; i11 < childCount; i11++) {
                if (i11 != i10) {
                    View childAt2 = getChildAt(i11);
                    if (x10.b(this, childAt, childAt2)) {
                        if (!this.f2986e.d(childAt2)) {
                            this.f2986e.b(childAt2);
                        }
                        this.f2986e.a(childAt2, childAt);
                    }
                }
            }
        }
        this.f2985d.addAll(this.f2986e.j());
        Collections.reverse(this.f2985d);
    }

    private static void P(Rect rect) {
        rect.setEmpty();
        I.release(rect);
    }

    private void R() {
        View view = this.f2994u;
        if (view != null) {
            c f10 = ((f) view.getLayoutParams()).f();
            if (f10 != null) {
                long uptimeMillis = SystemClock.uptimeMillis();
                MotionEvent obtain = MotionEvent.obtain(uptimeMillis, uptimeMillis, 3, 0.0f, 0.0f, 0);
                f10.H(this, this.f2994u, obtain);
                obtain.recycle();
            }
            this.f2994u = null;
        }
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            ((f) getChildAt(i10).getLayoutParams()).m();
        }
        this.f2991r = false;
    }

    private static int S(int i10) {
        if (i10 == 0) {
            return 17;
        }
        return i10;
    }

    private static int T(int i10) {
        if ((i10 & 7) == 0) {
            i10 |= 8388611;
        }
        return (i10 & 112) == 0 ? i10 | 48 : i10;
    }

    private static int U(int i10) {
        if (i10 == 0) {
            return 8388661;
        }
        return i10;
    }

    private void V(View view, int i10) {
        f fVar = (f) view.getLayoutParams();
        int i11 = fVar.f3010i;
        if (i11 != i10) {
            i0.U(view, i10 - i11);
            fVar.f3010i = i10;
        }
    }

    private void W(View view, int i10) {
        f fVar = (f) view.getLayoutParams();
        int i11 = fVar.f3011j;
        if (i11 != i10) {
            i0.V(view, i10 - i11);
            fVar.f3011j = i10;
        }
    }

    private void Y() {
        if (i0.v(this)) {
            if (this.C == null) {
                this.C = new a();
            }
            i0.x0(this, this.C);
            setSystemUiVisibility(1280);
            return;
        }
        i0.x0(this, null);
    }

    private static Rect e() {
        Rect rect = (Rect) I.acquire();
        if (rect == null) {
            return new Rect();
        }
        return rect;
    }

    private void g() {
        int childCount = getChildCount();
        MotionEvent motionEvent = null;
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            c f10 = ((f) childAt.getLayoutParams()).f();
            if (f10 != null) {
                if (motionEvent == null) {
                    long uptimeMillis = SystemClock.uptimeMillis();
                    motionEvent = MotionEvent.obtain(uptimeMillis, uptimeMillis, 3, 0.0f, 0.0f, 0);
                }
                f10.o(this, childAt, motionEvent);
            }
        }
        if (motionEvent != null) {
            motionEvent.recycle();
        }
    }

    private static int h(int i10, int i11, int i12) {
        return i10 < i11 ? i11 : i10 > i12 ? i12 : i10;
    }

    private void i(f fVar, Rect rect, int i10, int i11) {
        int width = getWidth();
        int height = getHeight();
        int max = Math.max(getPaddingLeft() + ((ViewGroup.MarginLayoutParams) fVar).leftMargin, Math.min(rect.left, ((width - getPaddingRight()) - i10) - ((ViewGroup.MarginLayoutParams) fVar).rightMargin));
        int max2 = Math.max(getPaddingTop() + ((ViewGroup.MarginLayoutParams) fVar).topMargin, Math.min(rect.top, ((height - getPaddingBottom()) - i11) - ((ViewGroup.MarginLayoutParams) fVar).bottomMargin));
        rect.set(max, max2, i10 + max, i11 + max2);
    }

    private WindowInsetsCompat j(WindowInsetsCompat windowInsetsCompat) {
        c f10;
        if (windowInsetsCompat.t()) {
            return windowInsetsCompat;
        }
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            if (i0.v(childAt) && (f10 = ((f) childAt.getLayoutParams()).f()) != null) {
                windowInsetsCompat = f10.j(this, childAt, windowInsetsCompat);
                if (windowInsetsCompat.t()) {
                    return windowInsetsCompat;
                }
            }
        }
        return windowInsetsCompat;
    }

    private void u(int i10, Rect rect, Rect rect2, f fVar, int i11, int i12) {
        int width;
        int height;
        int b10 = j.b(S(fVar.f3004c), i10);
        int b11 = j.b(T(fVar.f3005d), i10);
        int i13 = b10 & 7;
        int i14 = b10 & 112;
        int i15 = b11 & 7;
        int i16 = b11 & 112;
        if (i15 != 1) {
            if (i15 != 5) {
                width = rect.left;
            } else {
                width = rect.right;
            }
        } else {
            width = rect.left + (rect.width() / 2);
        }
        if (i16 != 16) {
            if (i16 != 80) {
                height = rect.top;
            } else {
                height = rect.bottom;
            }
        } else {
            height = rect.top + (rect.height() / 2);
        }
        if (i13 != 1) {
            if (i13 != 5) {
                width -= i11;
            }
        } else {
            width -= i11 / 2;
        }
        if (i14 != 16) {
            if (i14 != 80) {
                height -= i12;
            }
        } else {
            height -= i12 / 2;
        }
        rect2.set(width, height, i11 + width, i12 + height);
    }

    private int v(int i10) {
        int[] iArr = this.f2993t;
        if (iArr == null) {
            Log.e("CoordinatorLayout", "No keylines defined for " + this + " - attempted index lookup " + i10);
            return 0;
        } else if (i10 >= 0 && i10 < iArr.length) {
            return iArr[i10];
        } else {
            Log.e("CoordinatorLayout", "Keyline index " + i10 + " out of range for " + this);
            return 0;
        }
    }

    private void y(List list) {
        int i10;
        list.clear();
        boolean isChildrenDrawingOrderEnabled = isChildrenDrawingOrderEnabled();
        int childCount = getChildCount();
        for (int i11 = childCount - 1; i11 >= 0; i11--) {
            if (isChildrenDrawingOrderEnabled) {
                i10 = getChildDrawingOrder(childCount, i11);
            } else {
                i10 = i11;
            }
            list.add(getChildAt(i10));
        }
        Comparator comparator = H;
        if (comparator != null) {
            Collections.sort(list, comparator);
        }
    }

    private boolean z(View view) {
        return this.f2986e.k(view);
    }

    public boolean A(View view, int i10, int i11) {
        Rect e10 = e();
        s(view, e10);
        try {
            return e10.contains(i10, i11);
        } finally {
            P(e10);
        }
    }

    void G(View view, int i10) {
        c f10;
        f fVar = (f) view.getLayoutParams();
        if (fVar.f3012k != null) {
            Rect e10 = e();
            Rect e11 = e();
            Rect e12 = e();
            s(fVar.f3012k, e10);
            boolean z10 = false;
            p(view, false, e11);
            int measuredWidth = view.getMeasuredWidth();
            int measuredHeight = view.getMeasuredHeight();
            u(i10, e10, e12, fVar, measuredWidth, measuredHeight);
            z10 = (e12.left == e11.left && e12.top == e11.top) ? true : true;
            i(fVar, e12, measuredWidth, measuredHeight);
            int i11 = e12.left - e11.left;
            int i12 = e12.top - e11.top;
            if (i11 != 0) {
                i0.U(view, i11);
            }
            if (i12 != 0) {
                i0.V(view, i12);
            }
            if (z10 && (f10 = fVar.f()) != null) {
                f10.l(this, view, fVar.f3012k);
            }
            P(e10);
            P(e11);
            P(e12);
        }
    }

    final void H(int i10) {
        boolean z10;
        int y10 = i0.y(this);
        int size = this.f2985d.size();
        Rect e10 = e();
        Rect e11 = e();
        Rect e12 = e();
        for (int i11 = 0; i11 < size; i11++) {
            View view = (View) this.f2985d.get(i11);
            f fVar = (f) view.getLayoutParams();
            if (i10 != 0 || view.getVisibility() != 8) {
                for (int i12 = 0; i12 < i11; i12++) {
                    if (fVar.f3013l == ((View) this.f2985d.get(i12))) {
                        G(view, y10);
                    }
                }
                p(view, true, e11);
                if (fVar.f3008g != 0 && !e11.isEmpty()) {
                    int b10 = j.b(fVar.f3008g, y10);
                    int i13 = b10 & 112;
                    if (i13 != 48) {
                        if (i13 == 80) {
                            e10.bottom = Math.max(e10.bottom, getHeight() - e11.top);
                        }
                    } else {
                        e10.top = Math.max(e10.top, e11.bottom);
                    }
                    int i14 = b10 & 7;
                    if (i14 != 3) {
                        if (i14 == 5) {
                            e10.right = Math.max(e10.right, getWidth() - e11.left);
                        }
                    } else {
                        e10.left = Math.max(e10.left, e11.right);
                    }
                }
                if (fVar.f3009h != 0 && view.getVisibility() == 0) {
                    F(view, e10, y10);
                }
                if (i10 != 2) {
                    w(view, e12);
                    if (!e12.equals(e11)) {
                        O(view, e11);
                    }
                }
                for (int i15 = i11 + 1; i15 < size; i15++) {
                    View view2 = (View) this.f2985d.get(i15);
                    f fVar2 = (f) view2.getLayoutParams();
                    c f10 = fVar2.f();
                    if (f10 != null && f10.i(this, view2, view)) {
                        if (i10 == 0 && fVar2.g()) {
                            fVar2.k();
                        } else {
                            if (i10 != 2) {
                                z10 = f10.l(this, view2, view);
                            } else {
                                f10.m(this, view2, view);
                                z10 = true;
                            }
                            if (i10 == 1) {
                                fVar2.p(z10);
                            }
                        }
                    }
                }
            }
        }
        P(e10);
        P(e11);
        P(e12);
    }

    public void I(View view, int i10) {
        f fVar = (f) view.getLayoutParams();
        if (!fVar.a()) {
            View view2 = fVar.f3012k;
            if (view2 != null) {
                C(view, view2, i10);
                return;
            }
            int i11 = fVar.f3006e;
            if (i11 >= 0) {
                D(view, i11, i10);
                return;
            } else {
                B(view, i10);
                return;
            }
        }
        throw new IllegalStateException("An anchor may not be changed after CoordinatorLayout measurement begins before layout is complete.");
    }

    public void J(View view, int i10, int i11, int i12, int i13) {
        measureChildWithMargins(view, i10, i11, i12, i13);
    }

    void O(View view, Rect rect) {
        ((f) view.getLayoutParams()).q(rect);
    }

    void Q() {
        if (this.f2992s && this.f2996w != null) {
            getViewTreeObserver().removeOnPreDrawListener(this.f2996w);
        }
        this.f2997x = false;
    }

    final WindowInsetsCompat X(WindowInsetsCompat windowInsetsCompat) {
        boolean z10;
        if (!b2.b.a(this.f2998y, windowInsetsCompat)) {
            this.f2998y = windowInsetsCompat;
            boolean z11 = false;
            if (windowInsetsCompat != null && windowInsetsCompat.q() > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f2999z = z10;
            if (!z10 && getBackground() == null) {
                z11 = true;
            }
            setWillNotDraw(z11);
            WindowInsetsCompat j10 = j(windowInsetsCompat);
            requestLayout();
            return j10;
        }
        return windowInsetsCompat;
    }

    @Override // android.view.ViewGroup
    protected boolean checkLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if ((layoutParams instanceof f) && super.checkLayoutParams(layoutParams)) {
            return true;
        }
        return false;
    }

    @Override // android.view.ViewGroup
    protected boolean drawChild(Canvas canvas, View view, long j10) {
        f fVar = (f) view.getLayoutParams();
        c cVar = fVar.f3002a;
        if (cVar != null) {
            float h10 = cVar.h(this, view);
            if (h10 > 0.0f) {
                if (this.f2988o == null) {
                    this.f2988o = new Paint();
                }
                this.f2988o.setColor(fVar.f3002a.g(this, view));
                this.f2988o.setAlpha(h(Math.round(h10 * 255.0f), 0, SetSpanOperation.SPAN_MAX_PRIORITY));
                int save = canvas.save();
                if (view.isOpaque()) {
                    canvas.clipRect(view.getLeft(), view.getTop(), view.getRight(), view.getBottom(), Region.Op.DIFFERENCE);
                }
                canvas.drawRect(getPaddingLeft(), getPaddingTop(), getWidth() - getPaddingRight(), getHeight() - getPaddingBottom(), this.f2988o);
                canvas.restoreToCount(save);
                return super.drawChild(canvas, view, j10);
            }
        }
        return super.drawChild(canvas, view, j10);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void drawableStateChanged() {
        boolean z10;
        super.drawableStateChanged();
        int[] drawableState = getDrawableState();
        Drawable drawable = this.A;
        if (drawable != null && drawable.isStateful()) {
            z10 = drawable.setState(drawableState);
        } else {
            z10 = false;
        }
        if (z10) {
            invalidate();
        }
    }

    void f() {
        if (this.f2992s) {
            if (this.f2996w == null) {
                this.f2996w = new g();
            }
            getViewTreeObserver().addOnPreDrawListener(this.f2996w);
        }
        this.f2997x = true;
    }

    final List<View> getDependencySortedChildren() {
        N();
        return Collections.unmodifiableList(this.f2985d);
    }

    public final WindowInsetsCompat getLastWindowInsets() {
        return this.f2998y;
    }

    @Override // android.view.ViewGroup
    public int getNestedScrollAxes() {
        return this.D.a();
    }

    public Drawable getStatusBarBackground() {
        return this.A;
    }

    @Override // android.view.View
    protected int getSuggestedMinimumHeight() {
        return Math.max(super.getSuggestedMinimumHeight(), getPaddingTop() + getPaddingBottom());
    }

    @Override // android.view.View
    protected int getSuggestedMinimumWidth() {
        return Math.max(super.getSuggestedMinimumWidth(), getPaddingLeft() + getPaddingRight());
    }

    public void k(View view) {
        ArrayList h10 = this.f2986e.h(view);
        if (h10 != null && !h10.isEmpty()) {
            for (int i10 = 0; i10 < h10.size(); i10++) {
                View view2 = (View) h10.get(i10);
                c f10 = ((f) view2.getLayoutParams()).f();
                if (f10 != null) {
                    f10.l(this, view2, view);
                }
            }
        }
    }

    void l() {
        int childCount = getChildCount();
        boolean z10 = false;
        int i10 = 0;
        while (true) {
            if (i10 >= childCount) {
                break;
            } else if (z(getChildAt(i10))) {
                z10 = true;
                break;
            } else {
                i10++;
            }
        }
        if (z10 != this.f2997x) {
            if (z10) {
                f();
            } else {
                Q();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup
    /* renamed from: m */
    public f generateDefaultLayoutParams() {
        return new f(-2, -2);
    }

    @Override // android.view.ViewGroup
    /* renamed from: n */
    public f generateLayoutParams(AttributeSet attributeSet) {
        return new f(getContext(), attributeSet);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup
    /* renamed from: o */
    public f generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if (layoutParams instanceof f) {
            return new f((f) layoutParams);
        }
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return new f((ViewGroup.MarginLayoutParams) layoutParams);
        }
        return new f(layoutParams);
    }

    @Override // android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        R();
        if (this.f2997x) {
            if (this.f2996w == null) {
                this.f2996w = new g();
            }
            getViewTreeObserver().addOnPreDrawListener(this.f2996w);
        }
        if (this.f2998y == null && i0.v(this)) {
            i0.h0(this);
        }
        this.f2992s = true;
    }

    @Override // android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        R();
        if (this.f2997x && this.f2996w != null) {
            getViewTreeObserver().removeOnPreDrawListener(this.f2996w);
        }
        View view = this.f2995v;
        if (view != null) {
            onStopNestedScroll(view);
        }
        this.f2992s = false;
    }

    @Override // android.view.View
    public void onDraw(Canvas canvas) {
        int i10;
        super.onDraw(canvas);
        if (this.f2999z && this.A != null) {
            WindowInsetsCompat windowInsetsCompat = this.f2998y;
            if (windowInsetsCompat != null) {
                i10 = windowInsetsCompat.q();
            } else {
                i10 = 0;
            }
            if (i10 > 0) {
                this.A.setBounds(0, 0, getWidth(), i10);
                this.A.draw(canvas);
            }
        }
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 0) {
            R();
        }
        boolean M = M(motionEvent, 0);
        if (actionMasked != 1 && actionMasked != 3) {
            return M;
        }
        this.f2994u = null;
        R();
        return M;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        c f10;
        int y10 = i0.y(this);
        int size = this.f2985d.size();
        for (int i14 = 0; i14 < size; i14++) {
            View view = (View) this.f2985d.get(i14);
            if (view.getVisibility() != 8 && ((f10 = ((f) view.getLayoutParams()).f()) == null || !f10.p(this, view, y10))) {
                I(view, y10);
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:44:0x010b  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x012f  */
    @Override // android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void onMeasure(int r27, int r28) {
        /*
            Method dump skipped, instructions count: 411
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.coordinatorlayout.widget.CoordinatorLayout.onMeasure(int, int):void");
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean onNestedFling(View view, float f10, float f11, boolean z10) {
        c f12;
        View view2;
        float f13;
        float f14;
        boolean z11;
        int childCount = getChildCount();
        int i10 = 0;
        boolean z12 = false;
        while (i10 < childCount) {
            View childAt = getChildAt(i10);
            if (childAt.getVisibility() != 8) {
                f fVar = (f) childAt.getLayoutParams();
                if (fVar.j(0) && (f12 = fVar.f()) != null) {
                    view2 = view;
                    f13 = f10;
                    f14 = f11;
                    z11 = z10;
                    z12 |= f12.r(this, childAt, view2, f13, f14, z11);
                    i10++;
                    view = view2;
                    f10 = f13;
                    f11 = f14;
                    z10 = z11;
                }
            }
            view2 = view;
            f13 = f10;
            f14 = f11;
            z11 = z10;
            i10++;
            view = view2;
            f10 = f13;
            f11 = f14;
            z10 = z11;
        }
        if (z12) {
            H(1);
        }
        return z12;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean onNestedPreFling(View view, float f10, float f11) {
        c f12;
        View view2;
        float f13;
        float f14;
        int childCount = getChildCount();
        int i10 = 0;
        boolean z10 = false;
        while (i10 < childCount) {
            View childAt = getChildAt(i10);
            if (childAt.getVisibility() != 8) {
                f fVar = (f) childAt.getLayoutParams();
                if (fVar.j(0) && (f12 = fVar.f()) != null) {
                    view2 = view;
                    f13 = f10;
                    f14 = f11;
                    z10 |= f12.s(this, childAt, view2, f13, f14);
                    i10++;
                    view = view2;
                    f10 = f13;
                    f11 = f14;
                }
            }
            view2 = view;
            f13 = f10;
            f14 = f11;
            i10++;
            view = view2;
            f10 = f13;
            f11 = f14;
        }
        return z10;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onNestedPreScroll(View view, int i10, int i11, int[] iArr) {
        onNestedPreScroll(view, i10, i11, iArr, 0);
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onNestedScroll(View view, int i10, int i11, int i12, int i13) {
        onNestedScroll(view, i10, i11, i12, i13, 0);
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onNestedScrollAccepted(View view, View view2, int i10) {
        onNestedScrollAccepted(view, view2, i10, 0);
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        Parcelable parcelable2;
        if (!(parcelable instanceof h)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        h hVar = (h) parcelable;
        super.onRestoreInstanceState(hVar.a());
        SparseArray sparseArray = hVar.f3021i;
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            int id2 = childAt.getId();
            c f10 = x(childAt).f();
            if (id2 != -1 && f10 != null && (parcelable2 = (Parcelable) sparseArray.get(id2)) != null) {
                f10.B(this, childAt, parcelable2);
            }
        }
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        Parcelable C;
        h hVar = new h(super.onSaveInstanceState());
        SparseArray sparseArray = new SparseArray();
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            int id2 = childAt.getId();
            c f10 = ((f) childAt.getLayoutParams()).f();
            if (id2 != -1 && f10 != null && (C = f10.C(this, childAt)) != null) {
                sparseArray.append(id2, C);
            }
        }
        hVar.f3021i = sparseArray;
        return hVar;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean onStartNestedScroll(View view, View view2, int i10) {
        return onStartNestedScroll(view, view2, i10, 0);
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onStopNestedScroll(View view) {
        onStopNestedScroll(view, 0);
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        boolean M;
        int actionMasked = motionEvent.getActionMasked();
        View view = this.f2994u;
        boolean z10 = false;
        if (view != null) {
            c f10 = ((f) view.getLayoutParams()).f();
            M = f10 != null ? f10.H(this, this.f2994u, motionEvent) : false;
        } else {
            M = M(motionEvent, 1);
            if (actionMasked != 0 && M) {
                z10 = true;
            }
        }
        if (this.f2994u != null && actionMasked != 3) {
            if (z10) {
                MotionEvent E2 = E(motionEvent);
                super.onTouchEvent(E2);
                E2.recycle();
            }
        } else {
            M |= super.onTouchEvent(motionEvent);
        }
        if (actionMasked != 1 && actionMasked != 3) {
            return M;
        }
        this.f2994u = null;
        R();
        return M;
    }

    void p(View view, boolean z10, Rect rect) {
        if (!view.isLayoutRequested() && view.getVisibility() != 8) {
            if (z10) {
                s(view, rect);
                return;
            } else {
                rect.set(view.getLeft(), view.getTop(), view.getRight(), view.getBottom());
                return;
            }
        }
        rect.setEmpty();
    }

    public List q(View view) {
        List i10 = this.f2986e.i(view);
        if (i10 == null) {
            return Collections.EMPTY_LIST;
        }
        return i10;
    }

    public List r(View view) {
        List g10 = this.f2986e.g(view);
        if (g10 == null) {
            return Collections.EMPTY_LIST;
        }
        return g10;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public boolean requestChildRectangleOnScreen(View view, Rect rect, boolean z10) {
        c f10 = ((f) view.getLayoutParams()).f();
        if (f10 != null && f10.A(this, view, rect, z10)) {
            return true;
        }
        return super.requestChildRectangleOnScreen(view, rect, z10);
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void requestDisallowInterceptTouchEvent(boolean z10) {
        super.requestDisallowInterceptTouchEvent(z10);
        if (z10 && !this.f2991r) {
            if (this.f2994u == null) {
                g();
            }
            R();
            this.f2991r = true;
        }
    }

    void s(View view, Rect rect) {
        androidx.coordinatorlayout.widget.b.a(this, view, rect);
    }

    @Override // android.view.View
    public void setFitsSystemWindows(boolean z10) {
        super.setFitsSystemWindows(z10);
        Y();
    }

    @Override // android.view.ViewGroup
    public void setOnHierarchyChangeListener(ViewGroup.OnHierarchyChangeListener onHierarchyChangeListener) {
        this.B = onHierarchyChangeListener;
    }

    public void setStatusBarBackground(Drawable drawable) {
        boolean z10;
        Drawable drawable2 = this.A;
        if (drawable2 != drawable) {
            Drawable drawable3 = null;
            if (drawable2 != null) {
                drawable2.setCallback(null);
            }
            if (drawable != null) {
                drawable3 = drawable.mutate();
            }
            this.A = drawable3;
            if (drawable3 != null) {
                if (drawable3.isStateful()) {
                    this.A.setState(getDrawableState());
                }
                s1.a.m(this.A, i0.y(this));
                Drawable drawable4 = this.A;
                if (getVisibility() == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                drawable4.setVisible(z10, false);
                this.A.setCallback(this);
            }
            i0.b0(this);
        }
    }

    public void setStatusBarBackgroundColor(int i10) {
        setStatusBarBackground(new ColorDrawable(i10));
    }

    public void setStatusBarBackgroundResource(int i10) {
        Drawable drawable;
        if (i10 != 0) {
            drawable = androidx.core.content.a.e(getContext(), i10);
        } else {
            drawable = null;
        }
        setStatusBarBackground(drawable);
    }

    @Override // android.view.View
    public void setVisibility(int i10) {
        boolean z10;
        super.setVisibility(i10);
        if (i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        Drawable drawable = this.A;
        if (drawable != null && drawable.isVisible() != z10) {
            this.A.setVisible(z10, false);
        }
    }

    void t(View view, int i10, Rect rect, Rect rect2) {
        f fVar = (f) view.getLayoutParams();
        int measuredWidth = view.getMeasuredWidth();
        int measuredHeight = view.getMeasuredHeight();
        u(i10, rect, rect2, fVar, measuredWidth, measuredHeight);
        i(fVar, rect2, measuredWidth, measuredHeight);
    }

    @Override // android.view.View
    protected boolean verifyDrawable(Drawable drawable) {
        if (!super.verifyDrawable(drawable) && drawable != this.A) {
            return false;
        }
        return true;
    }

    void w(View view, Rect rect) {
        rect.set(((f) view.getLayoutParams()).h());
    }

    f x(View view) {
        f fVar = (f) view.getLayoutParams();
        if (!fVar.f3003b) {
            if (view instanceof b) {
                c behavior = ((b) view).getBehavior();
                if (behavior == null) {
                    Log.e("CoordinatorLayout", "Attached behavior class is null");
                }
                fVar.o(behavior);
                fVar.f3003b = true;
                return fVar;
            }
            d dVar = null;
            for (Class<?> cls = view.getClass(); cls != null; cls = cls.getSuperclass()) {
                dVar = (d) cls.getAnnotation(d.class);
                if (dVar != null) {
                    break;
                }
            }
            if (dVar != null) {
                try {
                    fVar.o((c) dVar.value().getDeclaredConstructor(null).newInstance(null));
                } catch (Exception e10) {
                    Log.e("CoordinatorLayout", "Default behavior class " + dVar.value().getName() + " could not be instantiated. Did you forget a default constructor?", e10);
                }
            }
            fVar.f3003b = true;
        }
        return fVar;
    }

    public CoordinatorLayout(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, n1.a.f36735a);
    }

    @Override // androidx.core.view.u
    public void onNestedPreScroll(View view, int i10, int i11, int[] iArr, int i12) {
        c f10;
        int min;
        int min2;
        int childCount = getChildCount();
        boolean z10 = false;
        int i13 = 0;
        int i14 = 0;
        for (int i15 = 0; i15 < childCount; i15++) {
            View childAt = getChildAt(i15);
            if (childAt.getVisibility() != 8) {
                f fVar = (f) childAt.getLayoutParams();
                if (fVar.j(i12) && (f10 = fVar.f()) != null) {
                    int[] iArr2 = this.f2989p;
                    iArr2[0] = 0;
                    iArr2[1] = 0;
                    f10.u(this, childAt, view, i10, i11, iArr2, i12);
                    if (i10 > 0) {
                        min = Math.max(i13, this.f2989p[0]);
                    } else {
                        min = Math.min(i13, this.f2989p[0]);
                    }
                    i13 = min;
                    if (i11 > 0) {
                        min2 = Math.max(i14, this.f2989p[1]);
                    } else {
                        min2 = Math.min(i14, this.f2989p[1]);
                    }
                    i14 = min2;
                    z10 = true;
                }
            }
        }
        iArr[0] = i13;
        iArr[1] = i14;
        if (z10) {
            H(1);
        }
    }

    @Override // androidx.core.view.u
    public void onNestedScroll(View view, int i10, int i11, int i12, int i13, int i14) {
        onNestedScroll(view, i10, i11, i12, i13, 0, this.f2990q);
    }

    @Override // androidx.core.view.u
    public void onNestedScrollAccepted(View view, View view2, int i10, int i11) {
        c f10;
        View view3;
        View view4;
        int i12;
        int i13;
        this.D.c(view, view2, i10, i11);
        this.f2995v = view2;
        int childCount = getChildCount();
        int i14 = 0;
        while (i14 < childCount) {
            View childAt = getChildAt(i14);
            f fVar = (f) childAt.getLayoutParams();
            if (fVar.j(i11) && (f10 = fVar.f()) != null) {
                view3 = view;
                view4 = view2;
                i12 = i10;
                i13 = i11;
                f10.z(this, childAt, view3, view4, i12, i13);
            } else {
                view3 = view;
                view4 = view2;
                i12 = i10;
                i13 = i11;
            }
            i14++;
            view = view3;
            view2 = view4;
            i10 = i12;
            i11 = i13;
        }
    }

    @Override // androidx.core.view.u
    public boolean onStartNestedScroll(View view, View view2, int i10, int i11) {
        int childCount = getChildCount();
        boolean z10 = false;
        for (int i12 = 0; i12 < childCount; i12++) {
            View childAt = getChildAt(i12);
            if (childAt.getVisibility() != 8) {
                f fVar = (f) childAt.getLayoutParams();
                c f10 = fVar.f();
                if (f10 != null) {
                    boolean E2 = f10.E(this, childAt, view, view2, i10, i11);
                    z10 |= E2;
                    fVar.r(i11, E2);
                } else {
                    fVar.r(i11, false);
                }
            }
        }
        return z10;
    }

    @Override // androidx.core.view.u
    public void onStopNestedScroll(View view, int i10) {
        this.D.e(view, i10);
        int childCount = getChildCount();
        for (int i11 = 0; i11 < childCount; i11++) {
            View childAt = getChildAt(i11);
            f fVar = (f) childAt.getLayoutParams();
            if (fVar.j(i10)) {
                c f10 = fVar.f();
                if (f10 != null) {
                    f10.G(this, childAt, view, i10);
                }
                fVar.l(i10);
                fVar.k();
            }
        }
        this.f2995v = null;
    }

    public CoordinatorLayout(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        TypedArray obtainStyledAttributes;
        Context context2;
        CoordinatorLayout coordinatorLayout;
        this.f2985d = new ArrayList();
        this.f2986e = new androidx.coordinatorlayout.widget.a();
        this.f2987i = new ArrayList();
        this.f2989p = new int[2];
        this.f2990q = new int[2];
        this.D = new NestedScrollingParentHelper(this);
        if (i10 == 0) {
            obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, n1.c.f36737a, 0, n1.b.f36736a);
        } else {
            obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, n1.c.f36737a, i10, 0);
        }
        TypedArray typedArray = obtainStyledAttributes;
        if (i10 == 0) {
            coordinatorLayout = this;
            context2 = context;
            i0.i0(coordinatorLayout, context2, n1.c.f36737a, attributeSet, typedArray, 0, n1.b.f36736a);
        } else {
            context2 = context;
            coordinatorLayout = this;
            i0.i0(coordinatorLayout, context2, n1.c.f36737a, attributeSet, typedArray, i10, 0);
        }
        int resourceId = typedArray.getResourceId(n1.c.f36738b, 0);
        if (resourceId != 0) {
            Resources resources = context2.getResources();
            coordinatorLayout.f2993t = resources.getIntArray(resourceId);
            float f10 = resources.getDisplayMetrics().density;
            int length = coordinatorLayout.f2993t.length;
            for (int i11 = 0; i11 < length; i11++) {
                int[] iArr = coordinatorLayout.f2993t;
                iArr[i11] = (int) (iArr[i11] * f10);
            }
        }
        coordinatorLayout.A = typedArray.getDrawable(n1.c.f36739c);
        typedArray.recycle();
        Y();
        super.setOnHierarchyChangeListener(new e());
        if (i0.w(this) == 0) {
            i0.s0(this, 1);
        }
    }

    @Override // androidx.core.view.v
    public void onNestedScroll(View view, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
        c f10;
        int min;
        int min2;
        int childCount = getChildCount();
        boolean z10 = false;
        int i15 = 0;
        int i16 = 0;
        for (int i17 = 0; i17 < childCount; i17++) {
            View childAt = getChildAt(i17);
            if (childAt.getVisibility() != 8) {
                f fVar = (f) childAt.getLayoutParams();
                if (fVar.j(i14) && (f10 = fVar.f()) != null) {
                    int[] iArr2 = this.f2989p;
                    iArr2[0] = 0;
                    iArr2[1] = 0;
                    f10.x(this, childAt, view, i10, i11, i12, i13, i14, iArr2);
                    if (i12 > 0) {
                        min = Math.max(i15, this.f2989p[0]);
                    } else {
                        min = Math.min(i15, this.f2989p[0]);
                    }
                    i15 = min;
                    if (i13 > 0) {
                        min2 = Math.max(i16, this.f2989p[1]);
                    } else {
                        min2 = Math.min(i16, this.f2989p[1]);
                    }
                    i16 = min2;
                    z10 = true;
                }
            }
        }
        iArr[0] = iArr[0] + i15;
        iArr[1] = iArr[1] + i16;
        if (z10) {
            H(1);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h extends u2.a {
        public static final Parcelable.Creator<h> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        SparseArray f3021i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public h createFromParcel(Parcel parcel) {
                return new h(parcel, null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public h createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new h(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public h[] newArray(int i10) {
                return new h[i10];
            }
        }

        public h(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            int readInt = parcel.readInt();
            int[] iArr = new int[readInt];
            parcel.readIntArray(iArr);
            Parcelable[] readParcelableArray = parcel.readParcelableArray(classLoader);
            this.f3021i = new SparseArray(readInt);
            for (int i10 = 0; i10 < readInt; i10++) {
                this.f3021i.append(iArr[i10], readParcelableArray[i10]);
            }
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int i11;
            super.writeToParcel(parcel, i10);
            SparseArray sparseArray = this.f3021i;
            if (sparseArray != null) {
                i11 = sparseArray.size();
            } else {
                i11 = 0;
            }
            parcel.writeInt(i11);
            int[] iArr = new int[i11];
            Parcelable[] parcelableArr = new Parcelable[i11];
            for (int i12 = 0; i12 < i11; i12++) {
                iArr[i12] = this.f3021i.keyAt(i12);
                parcelableArr[i12] = (Parcelable) this.f3021i.valueAt(i12);
            }
            parcel.writeIntArray(iArr);
            parcel.writeParcelableArray(parcelableArr, i10);
        }

        public h(Parcelable parcelable) {
            super(parcelable);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f extends ViewGroup.MarginLayoutParams {

        /* renamed from: a  reason: collision with root package name */
        c f3002a;

        /* renamed from: b  reason: collision with root package name */
        boolean f3003b;

        /* renamed from: c  reason: collision with root package name */
        public int f3004c;

        /* renamed from: d  reason: collision with root package name */
        public int f3005d;

        /* renamed from: e  reason: collision with root package name */
        public int f3006e;

        /* renamed from: f  reason: collision with root package name */
        int f3007f;

        /* renamed from: g  reason: collision with root package name */
        public int f3008g;

        /* renamed from: h  reason: collision with root package name */
        public int f3009h;

        /* renamed from: i  reason: collision with root package name */
        int f3010i;

        /* renamed from: j  reason: collision with root package name */
        int f3011j;

        /* renamed from: k  reason: collision with root package name */
        View f3012k;

        /* renamed from: l  reason: collision with root package name */
        View f3013l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f3014m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f3015n;

        /* renamed from: o  reason: collision with root package name */
        private boolean f3016o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f3017p;

        /* renamed from: q  reason: collision with root package name */
        final Rect f3018q;

        /* renamed from: r  reason: collision with root package name */
        Object f3019r;

        public f(int i10, int i11) {
            super(i10, i11);
            this.f3003b = false;
            this.f3004c = 0;
            this.f3005d = 0;
            this.f3006e = -1;
            this.f3007f = -1;
            this.f3008g = 0;
            this.f3009h = 0;
            this.f3018q = new Rect();
        }

        private void n(View view, CoordinatorLayout coordinatorLayout) {
            View findViewById = coordinatorLayout.findViewById(this.f3007f);
            this.f3012k = findViewById;
            if (findViewById != null) {
                if (findViewById == coordinatorLayout) {
                    if (coordinatorLayout.isInEditMode()) {
                        this.f3013l = null;
                        this.f3012k = null;
                        return;
                    }
                    throw new IllegalStateException("View can not be anchored to the the parent CoordinatorLayout");
                }
                for (ViewParent parent = findViewById.getParent(); parent != coordinatorLayout && parent != null; parent = parent.getParent()) {
                    if (parent == view) {
                        if (coordinatorLayout.isInEditMode()) {
                            this.f3013l = null;
                            this.f3012k = null;
                            return;
                        }
                        throw new IllegalStateException("Anchor must not be a descendant of the anchored view");
                    }
                    if (parent instanceof View) {
                        findViewById = (View) parent;
                    }
                }
                this.f3013l = findViewById;
            } else if (coordinatorLayout.isInEditMode()) {
                this.f3013l = null;
                this.f3012k = null;
            } else {
                throw new IllegalStateException("Could not find CoordinatorLayout descendant view with id " + coordinatorLayout.getResources().getResourceName(this.f3007f) + " to anchor view " + view);
            }
        }

        private boolean s(View view, int i10) {
            int b10 = j.b(((f) view.getLayoutParams()).f3008g, i10);
            if (b10 != 0 && (j.b(this.f3009h, i10) & b10) == b10) {
                return true;
            }
            return false;
        }

        private boolean t(View view, CoordinatorLayout coordinatorLayout) {
            if (this.f3012k.getId() != this.f3007f) {
                return false;
            }
            View view2 = this.f3012k;
            for (ViewParent parent = view2.getParent(); parent != coordinatorLayout; parent = parent.getParent()) {
                if (parent != null && parent != view) {
                    if (parent instanceof View) {
                        view2 = (View) parent;
                    }
                } else {
                    this.f3013l = null;
                    this.f3012k = null;
                    return false;
                }
            }
            this.f3013l = view2;
            return true;
        }

        boolean a() {
            if (this.f3012k == null && this.f3007f != -1) {
                return true;
            }
            return false;
        }

        boolean b(CoordinatorLayout coordinatorLayout, View view, View view2) {
            if (view2 != this.f3013l && !s(view2, i0.y(coordinatorLayout))) {
                c cVar = this.f3002a;
                if (cVar == null || !cVar.i(coordinatorLayout, view, view2)) {
                    return false;
                }
                return true;
            }
            return true;
        }

        boolean c() {
            if (this.f3002a == null) {
                this.f3014m = false;
            }
            return this.f3014m;
        }

        View d(CoordinatorLayout coordinatorLayout, View view) {
            if (this.f3007f == -1) {
                this.f3013l = null;
                this.f3012k = null;
                return null;
            }
            if (this.f3012k == null || !t(view, coordinatorLayout)) {
                n(view, coordinatorLayout);
            }
            return this.f3012k;
        }

        public int e() {
            return this.f3007f;
        }

        public c f() {
            return this.f3002a;
        }

        boolean g() {
            return this.f3017p;
        }

        Rect h() {
            return this.f3018q;
        }

        boolean i(CoordinatorLayout coordinatorLayout, View view) {
            boolean z10;
            boolean z11 = this.f3014m;
            if (z11) {
                return true;
            }
            c cVar = this.f3002a;
            if (cVar != null) {
                z10 = cVar.e(coordinatorLayout, view);
            } else {
                z10 = false;
            }
            boolean z12 = z10 | z11;
            this.f3014m = z12;
            return z12;
        }

        boolean j(int i10) {
            if (i10 != 0) {
                if (i10 != 1) {
                    return false;
                }
                return this.f3016o;
            }
            return this.f3015n;
        }

        void k() {
            this.f3017p = false;
        }

        void l(int i10) {
            r(i10, false);
        }

        void m() {
            this.f3014m = false;
        }

        public void o(c cVar) {
            c cVar2 = this.f3002a;
            if (cVar2 != cVar) {
                if (cVar2 != null) {
                    cVar2.n();
                }
                this.f3002a = cVar;
                this.f3019r = null;
                this.f3003b = true;
                if (cVar != null) {
                    cVar.k(this);
                }
            }
        }

        void p(boolean z10) {
            this.f3017p = z10;
        }

        void q(Rect rect) {
            this.f3018q.set(rect);
        }

        void r(int i10, boolean z10) {
            if (i10 != 0) {
                if (i10 != 1) {
                    return;
                }
                this.f3016o = z10;
                return;
            }
            this.f3015n = z10;
        }

        f(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.f3003b = false;
            this.f3004c = 0;
            this.f3005d = 0;
            this.f3006e = -1;
            this.f3007f = -1;
            this.f3008g = 0;
            this.f3009h = 0;
            this.f3018q = new Rect();
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, n1.c.f36740d);
            this.f3004c = obtainStyledAttributes.getInteger(n1.c.f36741e, 0);
            this.f3007f = obtainStyledAttributes.getResourceId(n1.c.f36742f, -1);
            this.f3005d = obtainStyledAttributes.getInteger(n1.c.f36743g, 0);
            this.f3006e = obtainStyledAttributes.getInteger(n1.c.f36747k, -1);
            this.f3008g = obtainStyledAttributes.getInt(n1.c.f36746j, 0);
            this.f3009h = obtainStyledAttributes.getInt(n1.c.f36745i, 0);
            boolean hasValue = obtainStyledAttributes.hasValue(n1.c.f36744h);
            this.f3003b = hasValue;
            if (hasValue) {
                this.f3002a = CoordinatorLayout.K(context, attributeSet, obtainStyledAttributes.getString(n1.c.f36744h));
            }
            obtainStyledAttributes.recycle();
            c cVar = this.f3002a;
            if (cVar != null) {
                cVar.k(this);
            }
        }

        public f(f fVar) {
            super((ViewGroup.MarginLayoutParams) fVar);
            this.f3003b = false;
            this.f3004c = 0;
            this.f3005d = 0;
            this.f3006e = -1;
            this.f3007f = -1;
            this.f3008g = 0;
            this.f3009h = 0;
            this.f3018q = new Rect();
        }

        public f(ViewGroup.MarginLayoutParams marginLayoutParams) {
            super(marginLayoutParams);
            this.f3003b = false;
            this.f3004c = 0;
            this.f3005d = 0;
            this.f3006e = -1;
            this.f3007f = -1;
            this.f3008g = 0;
            this.f3009h = 0;
            this.f3018q = new Rect();
        }

        public f(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
            this.f3003b = false;
            this.f3004c = 0;
            this.f3005d = 0;
            this.f3006e = -1;
            this.f3007f = -1;
            this.f3008g = 0;
            this.f3009h = 0;
            this.f3018q = new Rect();
        }
    }
}
