package com.google.android.material.carousel;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PointF;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.l;
import com.google.android.material.carousel.CarouselLayoutManager;
import com.google.android.material.carousel.e;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CarouselLayoutManager extends RecyclerView.LayoutManager implements gh.a, RecyclerView.SmoothScroller.a {

    /* renamed from: d  reason: collision with root package name */
    int f15474d;

    /* renamed from: e  reason: collision with root package name */
    int f15475e;

    /* renamed from: i  reason: collision with root package name */
    int f15476i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15477o;

    /* renamed from: p  reason: collision with root package name */
    private final c f15478p;

    /* renamed from: q  reason: collision with root package name */
    private com.google.android.material.carousel.c f15479q;

    /* renamed from: r  reason: collision with root package name */
    private f f15480r;

    /* renamed from: s  reason: collision with root package name */
    private e f15481s;

    /* renamed from: t  reason: collision with root package name */
    private int f15482t;

    /* renamed from: u  reason: collision with root package name */
    private Map f15483u;

    /* renamed from: v  reason: collision with root package name */
    private com.google.android.material.carousel.b f15484v;

    /* renamed from: w  reason: collision with root package name */
    private final View.OnLayoutChangeListener f15485w;

    /* renamed from: x  reason: collision with root package name */
    private int f15486x;

    /* renamed from: y  reason: collision with root package name */
    private int f15487y;

    /* renamed from: z  reason: collision with root package name */
    private int f15488z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends l {
        a(Context context) {
            super(context);
        }

        @Override // androidx.recyclerview.widget.l
        public int calculateDxToMakeVisible(View view, int i10) {
            if (CarouselLayoutManager.this.f15480r != null && CarouselLayoutManager.this.d()) {
                CarouselLayoutManager carouselLayoutManager = CarouselLayoutManager.this;
                return carouselLayoutManager.A(carouselLayoutManager.getPosition(view));
            }
            return 0;
        }

        @Override // androidx.recyclerview.widget.l
        public int calculateDyToMakeVisible(View view, int i10) {
            if (CarouselLayoutManager.this.f15480r != null && !CarouselLayoutManager.this.d()) {
                CarouselLayoutManager carouselLayoutManager = CarouselLayoutManager.this;
                return carouselLayoutManager.A(carouselLayoutManager.getPosition(view));
            }
            return 0;
        }

        @Override // androidx.recyclerview.widget.RecyclerView.SmoothScroller
        public PointF computeScrollVectorForPosition(int i10) {
            return CarouselLayoutManager.this.computeScrollVectorForPosition(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final View f15490a;

        /* renamed from: b  reason: collision with root package name */
        final float f15491b;

        /* renamed from: c  reason: collision with root package name */
        final float f15492c;

        /* renamed from: d  reason: collision with root package name */
        final d f15493d;

        b(View view, float f10, float f11, d dVar) {
            this.f15490a = view;
            this.f15491b = f10;
            this.f15492c = f11;
            this.f15493d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends RecyclerView.ItemDecoration {

        /* renamed from: a  reason: collision with root package name */
        private final Paint f15494a;

        /* renamed from: b  reason: collision with root package name */
        private List f15495b;

        c() {
            Paint paint = new Paint();
            this.f15494a = paint;
            this.f15495b = Collections.unmodifiableList(new ArrayList());
            paint.setStrokeWidth(5.0f);
            paint.setColor(-65281);
        }

        void a(List list) {
            this.f15495b = Collections.unmodifiableList(list);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.ItemDecoration
        public void onDrawOver(Canvas canvas, RecyclerView recyclerView, RecyclerView.State state) {
            super.onDrawOver(canvas, recyclerView, state);
            this.f15494a.setStrokeWidth(recyclerView.getResources().getDimension(bh.d.f6822y));
            for (e.c cVar : this.f15495b) {
                this.f15494a.setColor(r1.c.c(-65281, -16776961, cVar.f15531c));
                if (((CarouselLayoutManager) recyclerView.getLayoutManager()).d()) {
                    canvas.drawLine(cVar.f15530b, ((CarouselLayoutManager) recyclerView.getLayoutManager()).S(), cVar.f15530b, ((CarouselLayoutManager) recyclerView.getLayoutManager()).O(), this.f15494a);
                } else {
                    canvas.drawLine(((CarouselLayoutManager) recyclerView.getLayoutManager()).P(), cVar.f15530b, ((CarouselLayoutManager) recyclerView.getLayoutManager()).Q(), cVar.f15530b, this.f15494a);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        final e.c f15496a;

        /* renamed from: b  reason: collision with root package name */
        final e.c f15497b;

        d(e.c cVar, e.c cVar2) {
            boolean z10;
            if (cVar.f15529a <= cVar2.f15529a) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.a(z10);
            this.f15496a = cVar;
            this.f15497b = cVar2;
        }
    }

    public CarouselLayoutManager() {
        this(new g());
    }

    private static int B(int i10, int i11, int i12, int i13) {
        int i14 = i11 + i10;
        return i14 < i12 ? i12 - i11 : i14 > i13 ? i13 - i11 : i10;
    }

    private int C(f fVar) {
        e l10;
        e.c b10;
        boolean X = X();
        if (X) {
            l10 = fVar.h();
        } else {
            l10 = fVar.l();
        }
        if (X) {
            b10 = l10.i();
        } else {
            b10 = l10.b();
        }
        return (int) (R() - t(b10.f15529a, l10.g() / 2.0f));
    }

    private void D(RecyclerView.Recycler recycler, RecyclerView.State state) {
        f0(recycler);
        if (getChildCount() == 0) {
            w(recycler, this.f15482t - 1);
            v(recycler, state, this.f15482t);
        } else {
            int position = getPosition(getChildAt(0));
            int position2 = getPosition(getChildAt(getChildCount() - 1));
            w(recycler, position - 1);
            v(recycler, state, position2 + 1);
        }
        n0();
    }

    private View E() {
        int childCount;
        if (X()) {
            childCount = 0;
        } else {
            childCount = getChildCount() - 1;
        }
        return getChildAt(childCount);
    }

    private View F() {
        int i10;
        if (X()) {
            i10 = getChildCount() - 1;
        } else {
            i10 = 0;
        }
        return getChildAt(i10);
    }

    private int G() {
        if (d()) {
            return a();
        }
        return b();
    }

    private float H(View view) {
        int centerY;
        Rect rect = new Rect();
        super.getDecoratedBoundsWithMargins(view, rect);
        if (d()) {
            centerY = rect.centerX();
        } else {
            centerY = rect.centerY();
        }
        return centerY;
    }

    private int I() {
        int i10;
        int i11;
        if (getChildCount() <= 0) {
            return 0;
        }
        RecyclerView.LayoutParams layoutParams = (RecyclerView.LayoutParams) getChildAt(0).getLayoutParams();
        if (this.f15484v.f15506a == 0) {
            i10 = ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin;
            i11 = ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        } else {
            i10 = ((ViewGroup.MarginLayoutParams) layoutParams).topMargin;
            i11 = ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }
        return i10 + i11;
    }

    private e J(f fVar) {
        if (X()) {
            return fVar.h();
        }
        return fVar.l();
    }

    private e K(int i10) {
        e eVar;
        Map map = this.f15483u;
        if (map != null && (eVar = (e) map.get(Integer.valueOf(u1.a.b(i10, 0, Math.max(0, getItemCount() - 1))))) != null) {
            return eVar;
        }
        return this.f15480r.g();
    }

    private int L() {
        if (getClipToPadding()) {
            return 0;
        }
        if (getOrientation() == 1) {
            return getPaddingTop();
        }
        return getPaddingLeft();
    }

    private float M(float f10, d dVar) {
        e.c cVar = dVar.f15496a;
        float f11 = cVar.f15532d;
        e.c cVar2 = dVar.f15497b;
        return ch.a.b(f11, cVar2.f15532d, cVar.f15530b, cVar2.f15530b, f10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int O() {
        return this.f15484v.d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int P() {
        return this.f15484v.e();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int Q() {
        return this.f15484v.f();
    }

    private int R() {
        return this.f15484v.g();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int S() {
        return this.f15484v.h();
    }

    private int T() {
        if (getClipToPadding()) {
            return 0;
        }
        if (getOrientation() == 1) {
            return getPaddingBottom();
        }
        return getPaddingRight();
    }

    private int U(int i10, e eVar) {
        if (X()) {
            return (int) (((G() - eVar.i().f15529a) - (i10 * eVar.g())) - (eVar.g() / 2.0f));
        }
        return (int) (((i10 * eVar.g()) - eVar.b().f15529a) + (eVar.g() / 2.0f));
    }

    private int V(int i10, e eVar) {
        int i11;
        int i12 = Integer.MAX_VALUE;
        for (e.c cVar : eVar.f()) {
            float g10 = (i10 * eVar.g()) + (eVar.g() / 2.0f);
            if (X()) {
                i11 = (int) ((G() - cVar.f15529a) - g10);
            } else {
                i11 = (int) (g10 - cVar.f15529a);
            }
            int i13 = i11 - this.f15474d;
            if (Math.abs(i12) > Math.abs(i13)) {
                i12 = i13;
            }
        }
        return i12;
    }

    private static d W(List list, float f10, boolean z10) {
        float f11;
        float f12 = Float.MAX_VALUE;
        int i10 = -1;
        int i11 = -1;
        int i12 = -1;
        int i13 = -1;
        float f13 = -3.4028235E38f;
        float f14 = Float.MAX_VALUE;
        float f15 = Float.MAX_VALUE;
        for (int i14 = 0; i14 < list.size(); i14++) {
            e.c cVar = (e.c) list.get(i14);
            if (z10) {
                f11 = cVar.f15530b;
            } else {
                f11 = cVar.f15529a;
            }
            float abs = Math.abs(f11 - f10);
            if (f11 <= f10 && abs <= f12) {
                i10 = i14;
                f12 = abs;
            }
            if (f11 > f10 && abs <= f14) {
                i12 = i14;
                f14 = abs;
            }
            if (f11 <= f15) {
                i11 = i14;
                f15 = f11;
            }
            if (f11 > f13) {
                i13 = i14;
                f13 = f11;
            }
        }
        if (i10 == -1) {
            i10 = i11;
        }
        if (i12 == -1) {
            i12 = i13;
        }
        return new d((e.c) list.get(i10), (e.c) list.get(i12));
    }

    private boolean Y(float f10, d dVar) {
        float t10 = t(f10, M(f10, dVar) / 2.0f);
        if (X()) {
            if (t10 >= 0.0f) {
                return false;
            }
            return true;
        } else if (t10 <= G()) {
            return false;
        } else {
            return true;
        }
    }

    private boolean Z(float f10, d dVar) {
        float s10 = s(f10, M(f10, dVar) / 2.0f);
        if (X()) {
            if (s10 <= G()) {
                return false;
            }
            return true;
        } else if (s10 >= 0.0f) {
            return false;
        } else {
            return true;
        }
    }

    private void a0() {
        if (this.f15477o && Log.isLoggable("CarouselLayoutManager", 3)) {
            Log.d("CarouselLayoutManager", "internal representation of views on the screen");
            for (int i10 = 0; i10 < getChildCount(); i10++) {
                View childAt = getChildAt(i10);
                float H = H(childAt);
                Log.d("CarouselLayoutManager", "item position " + getPosition(childAt) + ", center:" + H + ", child index:" + i10);
            }
            Log.d("CarouselLayoutManager", "==============");
        }
    }

    private b b0(RecyclerView.Recycler recycler, float f10, int i10) {
        View o10 = recycler.o(i10);
        measureChildWithMargins(o10, 0, 0);
        float s10 = s(f10, this.f15481s.g() / 2.0f);
        d W = W(this.f15481s.h(), s10, false);
        return new b(o10, s10, x(s10, W), W);
    }

    private float c0(View view, float f10, float f11, Rect rect) {
        float s10 = s(f10, f11);
        d W = W(this.f15481s.h(), s10, false);
        float x10 = x(s10, W);
        super.getDecoratedBoundsWithMargins(view, rect);
        k0(view, s10, W);
        this.f15484v.j(view, rect, f11, x10);
        return x10;
    }

    private int convertFocusDirectionToLayoutDirection(int i10) {
        int orientation = getOrientation();
        if (i10 == 1) {
            return -1;
        }
        if (i10 == 2) {
            return 1;
        }
        if (i10 != 17) {
            if (i10 != 33) {
                if (i10 != 66) {
                    if (i10 != 130) {
                        Log.d("CarouselLayoutManager", "Unknown focus request:" + i10);
                        return Integer.MIN_VALUE;
                    } else if (orientation == 1) {
                        return 1;
                    } else {
                        return Integer.MIN_VALUE;
                    }
                } else if (orientation != 0) {
                    return Integer.MIN_VALUE;
                } else {
                    if (X()) {
                        return -1;
                    }
                    return 1;
                }
            } else if (orientation == 1) {
                return -1;
            } else {
                return Integer.MIN_VALUE;
            }
        } else if (orientation != 0) {
            return Integer.MIN_VALUE;
        } else {
            if (!X()) {
                return -1;
            }
            return 1;
        }
    }

    private void d0(RecyclerView.Recycler recycler) {
        View o10 = recycler.o(0);
        measureChildWithMargins(o10, 0, 0);
        e g10 = this.f15479q.g(this, o10);
        if (X()) {
            g10 = e.p(g10, G());
        }
        this.f15480r = f.f(this, g10, I(), L(), T(), this.f15479q.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e0() {
        this.f15480r = null;
        requestLayout();
    }

    private void f0(RecyclerView.Recycler recycler) {
        while (getChildCount() > 0) {
            View childAt = getChildAt(0);
            float H = H(childAt);
            if (!Z(H, W(this.f15481s.h(), H, true))) {
                break;
            }
            removeAndRecycleView(childAt, recycler);
        }
        while (getChildCount() - 1 >= 0) {
            View childAt2 = getChildAt(getChildCount() - 1);
            float H2 = H(childAt2);
            if (Y(H2, W(this.f15481s.h(), H2, true))) {
                removeAndRecycleView(childAt2, recycler);
            } else {
                return;
            }
        }
    }

    private void g0(RecyclerView recyclerView, int i10) {
        if (d()) {
            recyclerView.scrollBy(i10, 0);
        } else {
            recyclerView.scrollBy(0, i10);
        }
    }

    private void i0(Context context, AttributeSet attributeSet) {
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, bh.l.L0);
            h0(obtainStyledAttributes.getInt(bh.l.M0, 0));
            setOrientation(obtainStyledAttributes.getInt(q3.d.f44470b, 0));
            obtainStyledAttributes.recycle();
        }
    }

    private void k0(View view, float f10, d dVar) {
    }

    public static /* synthetic */ void l(final CarouselLayoutManager carouselLayoutManager, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        carouselLayoutManager.getClass();
        if (i12 - i10 == i16 - i14 && i13 - i11 == i17 - i15) {
            return;
        }
        view.post(new Runnable() { // from class: gh.c
            @Override // java.lang.Runnable
            public final void run() {
                CarouselLayoutManager.this.e0();
            }
        });
    }

    private void l0(f fVar) {
        int i10 = this.f15476i;
        int i11 = this.f15475e;
        if (i10 <= i11) {
            this.f15481s = J(fVar);
        } else {
            this.f15481s = fVar.j(this.f15474d, i11, i10);
        }
        this.f15478p.a(this.f15481s.h());
    }

    private void m0() {
        int itemCount = getItemCount();
        int i10 = this.f15486x;
        if (itemCount != i10 && this.f15480r != null) {
            if (this.f15479q.h(this, i10)) {
                e0();
            }
            this.f15486x = itemCount;
        }
    }

    private void n0() {
        if (this.f15477o && getChildCount() >= 1) {
            int i10 = 0;
            while (i10 < getChildCount() - 1) {
                int position = getPosition(getChildAt(i10));
                int i11 = i10 + 1;
                int position2 = getPosition(getChildAt(i11));
                if (position <= position2) {
                    i10 = i11;
                } else {
                    a0();
                    throw new IllegalStateException("Detected invalid child order. Child at index [" + i10 + "] had adapter position [" + position + "] and child at index [" + i11 + "] had adapter position [" + position2 + "].");
                }
            }
        }
    }

    private void r(View view, int i10, b bVar) {
        float g10 = this.f15481s.g() / 2.0f;
        addView(view, i10);
        measureChildWithMargins(view, 0, 0);
        float f10 = bVar.f15492c;
        this.f15484v.i(view, (int) (f10 - g10), (int) (f10 + g10));
        k0(view, bVar.f15491b, bVar.f15493d);
    }

    private float s(float f10, float f11) {
        if (X()) {
            return f10 - f11;
        }
        return f10 + f11;
    }

    private int scrollBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        float f10;
        if (getChildCount() == 0 || i10 == 0) {
            return 0;
        }
        if (this.f15480r == null) {
            d0(recycler);
        }
        if (getItemCount() <= J(this.f15480r).n()) {
            return 0;
        }
        int B = B(i10, this.f15474d, this.f15475e, this.f15476i);
        this.f15474d += B;
        l0(this.f15480r);
        float g10 = this.f15481s.g() / 2.0f;
        float y10 = y(getPosition(getChildAt(0)));
        Rect rect = new Rect();
        if (X()) {
            f10 = this.f15481s.i().f15530b;
        } else {
            f10 = this.f15481s.b().f15530b;
        }
        float f11 = Float.MAX_VALUE;
        for (int i11 = 0; i11 < getChildCount(); i11++) {
            View childAt = getChildAt(i11);
            float abs = Math.abs(f10 - c0(childAt, y10, g10, rect));
            if (childAt != null && abs < f11) {
                this.f15487y = getPosition(childAt);
                f11 = abs;
            }
            y10 = s(y10, this.f15481s.g());
        }
        D(recycler, state);
        return B;
    }

    private float t(float f10, float f11) {
        if (X()) {
            return f10 + f11;
        }
        return f10 - f11;
    }

    private void u(RecyclerView.Recycler recycler, int i10, int i11) {
        if (i10 >= 0 && i10 < getItemCount()) {
            b b02 = b0(recycler, y(i10), i10);
            r(b02.f15490a, i11, b02);
        }
    }

    private void v(RecyclerView.Recycler recycler, RecyclerView.State state, int i10) {
        float y10 = y(i10);
        while (i10 < state.b()) {
            float s10 = s(y10, this.f15481s.g() / 2.0f);
            d W = W(this.f15481s.h(), s10, false);
            float x10 = x(s10, W);
            if (!Y(x10, W)) {
                y10 = s(y10, this.f15481s.g());
                if (!Z(x10, W)) {
                    View o10 = recycler.o(i10);
                    r(o10, -1, new b(o10, s10, x10, W));
                }
                i10++;
            } else {
                return;
            }
        }
    }

    private void w(RecyclerView.Recycler recycler, int i10) {
        float y10 = y(i10);
        while (i10 >= 0) {
            float s10 = s(y10, this.f15481s.g() / 2.0f);
            d W = W(this.f15481s.h(), s10, false);
            float x10 = x(s10, W);
            if (!Z(x10, W)) {
                y10 = t(y10, this.f15481s.g());
                if (!Y(x10, W)) {
                    View o10 = recycler.o(i10);
                    r(o10, 0, new b(o10, s10, x10, W));
                }
                i10--;
            } else {
                return;
            }
        }
    }

    private float x(float f10, d dVar) {
        e.c cVar = dVar.f15496a;
        float f11 = cVar.f15530b;
        e.c cVar2 = dVar.f15497b;
        float b10 = ch.a.b(f11, cVar2.f15530b, cVar.f15529a, cVar2.f15529a, f10);
        if (dVar.f15497b != this.f15481s.d() && dVar.f15496a != this.f15481s.k()) {
            return b10;
        }
        e.c cVar3 = dVar.f15497b;
        return b10 + ((f10 - cVar3.f15529a) * (1.0f - cVar3.f15531c));
    }

    private float y(int i10) {
        return s(R() - this.f15474d, this.f15481s.g() * i10);
    }

    private int z(RecyclerView.State state, f fVar) {
        e h10;
        e.c i10;
        float f10;
        boolean X = X();
        if (X) {
            h10 = fVar.l();
        } else {
            h10 = fVar.h();
        }
        if (X) {
            i10 = h10.b();
        } else {
            i10 = h10.i();
        }
        int i11 = 1;
        float b10 = (state.b() - 1) * h10.g();
        if (X) {
            f10 = -1.0f;
        } else {
            f10 = 1.0f;
        }
        float R = (b10 * f10) - (i10.f15529a - R());
        if (X) {
            i11 = -1;
        }
        int i12 = (int) (R + ((i11 * i10.f15532d) / 2.0f));
        if (X) {
            return Math.min(0, i12);
        }
        return Math.max(0, i12);
    }

    int A(int i10) {
        return (int) (this.f15474d - U(i10, K(i10)));
    }

    int N(int i10, e eVar) {
        return U(i10, eVar) - this.f15474d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean X() {
        if (d() && getLayoutDirection() == 1) {
            return true;
        }
        return false;
    }

    @Override // gh.a
    public int a() {
        return getWidth();
    }

    @Override // gh.a
    public int b() {
        return getHeight();
    }

    @Override // gh.a
    public int c() {
        return this.f15488z;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollHorizontally() {
        return d();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean canScrollVertically() {
        return !d();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollExtent(RecyclerView.State state) {
        if (getChildCount() != 0 && this.f15480r != null && getItemCount() > 1) {
            return (int) (getWidth() * (this.f15480r.g().g() / computeHorizontalScrollRange(state)));
        }
        return 0;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollOffset(RecyclerView.State state) {
        return this.f15474d;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollRange(RecyclerView.State state) {
        return this.f15476i - this.f15475e;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.SmoothScroller.a
    public PointF computeScrollVectorForPosition(int i10) {
        if (this.f15480r == null) {
            return null;
        }
        int N = N(i10, K(i10));
        if (d()) {
            return new PointF(N, 0.0f);
        }
        return new PointF(0.0f, N);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollExtent(RecyclerView.State state) {
        if (getChildCount() != 0 && this.f15480r != null && getItemCount() > 1) {
            return (int) (getHeight() * (this.f15480r.g().g() / computeVerticalScrollRange(state)));
        }
        return 0;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollOffset(RecyclerView.State state) {
        return this.f15474d;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollRange(RecyclerView.State state) {
        return this.f15476i - this.f15475e;
    }

    @Override // gh.a
    public boolean d() {
        if (this.f15484v.f15506a == 0) {
            return true;
        }
        return false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public RecyclerView.LayoutParams generateDefaultLayoutParams() {
        return new RecyclerView.LayoutParams(-2, -2);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void getDecoratedBoundsWithMargins(View view, Rect rect) {
        float f10;
        super.getDecoratedBoundsWithMargins(view, rect);
        float centerY = rect.centerY();
        if (d()) {
            centerY = rect.centerX();
        }
        float M = M(centerY, W(this.f15481s.h(), centerY, true));
        float f11 = 0.0f;
        if (d()) {
            f10 = (rect.width() - M) / 2.0f;
        } else {
            f10 = 0.0f;
        }
        if (!d()) {
            f11 = (rect.height() - M) / 2.0f;
        }
        rect.set((int) (rect.left + f10), (int) (rect.top + f11), (int) (rect.right - f10), (int) (rect.bottom - f11));
    }

    public int getOrientation() {
        return this.f15484v.f15506a;
    }

    public void h0(int i10) {
        this.f15488z = i10;
        e0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isAutoMeasureEnabled() {
        return true;
    }

    public void j0(com.google.android.material.carousel.c cVar) {
        this.f15479q = cVar;
        e0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void measureChildWithMargins(View view, int i10, int i11) {
        throw new IllegalStateException("All children of a RecyclerView using CarouselLayoutManager must use MaskableFrameLayout as their root ViewGroup.");
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onAttachedToWindow(RecyclerView recyclerView) {
        super.onAttachedToWindow(recyclerView);
        this.f15479q.f(recyclerView.getContext());
        e0();
        recyclerView.addOnLayoutChangeListener(this.f15485w);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onDetachedFromWindow(RecyclerView recyclerView, RecyclerView.Recycler recycler) {
        super.onDetachedFromWindow(recyclerView, recycler);
        recyclerView.removeOnLayoutChangeListener(this.f15485w);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public View onFocusSearchFailed(View view, int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        int convertFocusDirectionToLayoutDirection;
        if (getChildCount() == 0 || (convertFocusDirectionToLayoutDirection = convertFocusDirectionToLayoutDirection(i10)) == Integer.MIN_VALUE) {
            return null;
        }
        if (convertFocusDirectionToLayoutDirection == -1) {
            if (getPosition(view) == 0) {
                return null;
            }
            u(recycler, getPosition(getChildAt(0)) - 1, 0);
            return F();
        } else if (getPosition(view) == getItemCount() - 1) {
            return null;
        } else {
            u(recycler, getPosition(getChildAt(getChildCount() - 1)) + 1, -1);
            return E();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onInitializeAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onInitializeAccessibilityEvent(accessibilityEvent);
        if (getChildCount() > 0) {
            accessibilityEvent.setFromIndex(getPosition(getChildAt(0)));
            accessibilityEvent.setToIndex(getPosition(getChildAt(getChildCount() - 1)));
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsAdded(RecyclerView recyclerView, int i10, int i11) {
        super.onItemsAdded(recyclerView, i10, i11);
        m0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsChanged(RecyclerView recyclerView) {
        super.onItemsChanged(recyclerView);
        m0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onItemsRemoved(RecyclerView recyclerView, int i10, int i11) {
        super.onItemsRemoved(recyclerView, i10, i11);
        m0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutChildren(RecyclerView.Recycler recycler, RecyclerView.State state) {
        boolean z10;
        int i10;
        if (state.b() > 0 && G() > 0.0f) {
            boolean X = X();
            f fVar = this.f15480r;
            if (fVar == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 || fVar.g().a() != G()) {
                d0(recycler);
            }
            int C = C(this.f15480r);
            int z11 = z(state, this.f15480r);
            if (X) {
                i10 = z11;
            } else {
                i10 = C;
            }
            this.f15475e = i10;
            if (X) {
                z11 = C;
            }
            this.f15476i = z11;
            if (z10) {
                this.f15474d = C;
                this.f15483u = this.f15480r.i(getItemCount(), this.f15475e, this.f15476i, X());
                int i11 = this.f15487y;
                if (i11 != -1) {
                    this.f15474d = U(i11, K(i11));
                }
            }
            int i12 = this.f15474d;
            this.f15474d = i12 + B(0, i12, this.f15475e, this.f15476i);
            this.f15482t = u1.a.b(this.f15482t, 0, state.b());
            l0(this.f15480r);
            detachAndScrapAttachedViews(recycler);
            D(recycler, state);
            this.f15486x = getItemCount();
            return;
        }
        removeAndRecycleAllViews(recycler);
        this.f15482t = 0;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutCompleted(RecyclerView.State state) {
        super.onLayoutCompleted(state);
        if (getChildCount() == 0) {
            this.f15482t = 0;
        } else {
            this.f15482t = getPosition(getChildAt(0));
        }
        n0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean requestChildRectangleOnScreen(RecyclerView recyclerView, View view, Rect rect, boolean z10, boolean z11) {
        int V;
        if (this.f15480r == null || (V = V(getPosition(view), K(getPosition(view)))) == 0) {
            return false;
        }
        g0(recyclerView, V(getPosition(view), this.f15480r.j(this.f15474d + B(V, this.f15474d, this.f15475e, this.f15476i), this.f15475e, this.f15476i)));
        return true;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollHorizontallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (canScrollHorizontally()) {
            return scrollBy(i10, recycler, state);
        }
        return 0;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void scrollToPosition(int i10) {
        this.f15487y = i10;
        if (this.f15480r == null) {
            return;
        }
        this.f15474d = U(i10, K(i10));
        this.f15482t = u1.a.b(i10, 0, Math.max(0, getItemCount() - 1));
        l0(this.f15480r);
        requestLayout();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int scrollVerticallyBy(int i10, RecyclerView.Recycler recycler, RecyclerView.State state) {
        if (canScrollVertically()) {
            return scrollBy(i10, recycler, state);
        }
        return 0;
    }

    public void setOrientation(int i10) {
        if (i10 != 0 && i10 != 1) {
            throw new IllegalArgumentException("invalid orientation:" + i10);
        }
        assertNotInLayoutOrScroll(null);
        com.google.android.material.carousel.b bVar = this.f15484v;
        if (bVar != null && i10 == bVar.f15506a) {
            return;
        }
        this.f15484v = com.google.android.material.carousel.b.b(this, i10);
        e0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void smoothScrollToPosition(RecyclerView recyclerView, RecyclerView.State state, int i10) {
        a aVar = new a(recyclerView.getContext());
        aVar.setTargetPosition(i10);
        startSmoothScroll(aVar);
    }

    public CarouselLayoutManager(com.google.android.material.carousel.c cVar) {
        this(cVar, 0);
    }

    public CarouselLayoutManager(com.google.android.material.carousel.c cVar, int i10) {
        this.f15477o = false;
        this.f15478p = new c();
        this.f15482t = 0;
        this.f15485w = new View.OnLayoutChangeListener() { // from class: gh.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
                CarouselLayoutManager.l(CarouselLayoutManager.this, view, i11, i12, i13, i14, i15, i16, i17, i18);
            }
        };
        this.f15487y = -1;
        this.f15488z = 0;
        j0(cVar);
        setOrientation(i10);
    }

    @SuppressLint({"UnknownNullness"})
    public CarouselLayoutManager(Context context, AttributeSet attributeSet, int i10, int i11) {
        this.f15477o = false;
        this.f15478p = new c();
        this.f15482t = 0;
        this.f15485w = new View.OnLayoutChangeListener() { // from class: gh.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i112, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
                CarouselLayoutManager.l(CarouselLayoutManager.this, view, i112, i12, i13, i14, i15, i16, i17, i18);
            }
        };
        this.f15487y = -1;
        this.f15488z = 0;
        j0(new g());
        i0(context, attributeSet);
    }
}
