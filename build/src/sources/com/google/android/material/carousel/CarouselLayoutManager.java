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
import com.google.android.material.carousel.f;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class CarouselLayoutManager extends RecyclerView.LayoutManager implements com.google.android.material.carousel.b, RecyclerView.SmoothScroller.a {

    /* renamed from: d  reason: collision with root package name */
    int f15756d;

    /* renamed from: e  reason: collision with root package name */
    int f15757e;

    /* renamed from: i  reason: collision with root package name */
    int f15758i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f15759o;

    /* renamed from: p  reason: collision with root package name */
    private final c f15760p;

    /* renamed from: q  reason: collision with root package name */
    private com.google.android.material.carousel.d f15761q;

    /* renamed from: r  reason: collision with root package name */
    private g f15762r;

    /* renamed from: s  reason: collision with root package name */
    private f f15763s;

    /* renamed from: t  reason: collision with root package name */
    private int f15764t;

    /* renamed from: u  reason: collision with root package name */
    private Map f15765u;

    /* renamed from: v  reason: collision with root package name */
    private com.google.android.material.carousel.c f15766v;

    /* renamed from: w  reason: collision with root package name */
    private final View.OnLayoutChangeListener f15767w;

    /* renamed from: x  reason: collision with root package name */
    private int f15768x;

    /* renamed from: y  reason: collision with root package name */
    private int f15769y;

    /* renamed from: z  reason: collision with root package name */
    private int f15770z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends l {
        a(Context context) {
            super(context);
        }

        @Override // androidx.recyclerview.widget.l
        public int calculateDxToMakeVisible(View view, int i10) {
            if (CarouselLayoutManager.this.f15762r != null && CarouselLayoutManager.this.d()) {
                CarouselLayoutManager carouselLayoutManager = CarouselLayoutManager.this;
                return carouselLayoutManager.A(carouselLayoutManager.getPosition(view));
            }
            return 0;
        }

        @Override // androidx.recyclerview.widget.l
        public int calculateDyToMakeVisible(View view, int i10) {
            if (CarouselLayoutManager.this.f15762r != null && !CarouselLayoutManager.this.d()) {
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
        final View f15772a;

        /* renamed from: b  reason: collision with root package name */
        final float f15773b;

        /* renamed from: c  reason: collision with root package name */
        final float f15774c;

        /* renamed from: d  reason: collision with root package name */
        final d f15775d;

        b(View view, float f10, float f11, d dVar) {
            this.f15772a = view;
            this.f15773b = f10;
            this.f15774c = f11;
            this.f15775d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends RecyclerView.ItemDecoration {

        /* renamed from: a  reason: collision with root package name */
        private final Paint f15776a;

        /* renamed from: b  reason: collision with root package name */
        private List f15777b;

        c() {
            Paint paint = new Paint();
            this.f15776a = paint;
            this.f15777b = Collections.unmodifiableList(new ArrayList());
            paint.setStrokeWidth(5.0f);
            paint.setColor(-65281);
        }

        void a(List list) {
            this.f15777b = Collections.unmodifiableList(list);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.ItemDecoration
        public void onDrawOver(Canvas canvas, RecyclerView recyclerView, RecyclerView.State state) {
            super.onDrawOver(canvas, recyclerView, state);
            this.f15776a.setStrokeWidth(recyclerView.getResources().getDimension(yg.d.f54397n));
            for (f.c cVar : this.f15777b) {
                this.f15776a.setColor(r1.c.c(-65281, -16776961, cVar.f15808c));
                if (((CarouselLayoutManager) recyclerView.getLayoutManager()).d()) {
                    canvas.drawLine(cVar.f15807b, ((CarouselLayoutManager) recyclerView.getLayoutManager()).S(), cVar.f15807b, ((CarouselLayoutManager) recyclerView.getLayoutManager()).N(), this.f15776a);
                } else {
                    canvas.drawLine(((CarouselLayoutManager) recyclerView.getLayoutManager()).P(), cVar.f15807b, ((CarouselLayoutManager) recyclerView.getLayoutManager()).Q(), cVar.f15807b, this.f15776a);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        final f.c f15778a;

        /* renamed from: b  reason: collision with root package name */
        final f.c f15779b;

        d(f.c cVar, f.c cVar2) {
            boolean z10;
            if (cVar.f15806a <= cVar2.f15806a) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.a(z10);
            this.f15778a = cVar;
            this.f15779b = cVar2;
        }
    }

    public CarouselLayoutManager() {
        this(new h());
    }

    private static int B(int i10, int i11, int i12, int i13) {
        int i14 = i11 + i10;
        return i14 < i12 ? i12 - i11 : i14 > i13 ? i13 - i11 : i10;
    }

    private int C(g gVar) {
        f l10;
        f.c a10;
        boolean X = X();
        if (X) {
            l10 = gVar.h();
        } else {
            l10 = gVar.l();
        }
        if (X) {
            a10 = l10.h();
        } else {
            a10 = l10.a();
        }
        return (int) (R() - t(a10.f15806a, l10.f() / 2.0f));
    }

    private void D(RecyclerView.Recycler recycler, RecyclerView.State state) {
        f0(recycler);
        if (getChildCount() == 0) {
            w(recycler, this.f15764t - 1);
            v(recycler, state, this.f15764t);
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
        if (this.f15766v.f15788a == 0) {
            i10 = ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin;
            i11 = ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
        } else {
            i10 = ((ViewGroup.MarginLayoutParams) layoutParams).topMargin;
            i11 = ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
        }
        return i10 + i11;
    }

    private f J(int i10) {
        f fVar;
        Map map = this.f15765u;
        if (map != null && (fVar = (f) map.get(Integer.valueOf(u1.a.b(i10, 0, Math.max(0, getItemCount() - 1))))) != null) {
            return fVar;
        }
        return this.f15762r.g();
    }

    private int K() {
        if (!getClipToPadding() && this.f15761q.f()) {
            if (getOrientation() == 1) {
                return getPaddingTop();
            }
            return getPaddingLeft();
        }
        return 0;
    }

    private float L(float f10, d dVar) {
        f.c cVar = dVar.f15778a;
        float f11 = cVar.f15809d;
        f.c cVar2 = dVar.f15779b;
        return zg.a.b(f11, cVar2.f15809d, cVar.f15807b, cVar2.f15807b, f10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int N() {
        return this.f15766v.e();
    }

    private int O() {
        return this.f15766v.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int P() {
        return this.f15766v.g();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int Q() {
        return this.f15766v.h();
    }

    private int R() {
        return this.f15766v.i();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int S() {
        return this.f15766v.j();
    }

    private int T() {
        if (!getClipToPadding() && this.f15761q.f()) {
            if (getOrientation() == 1) {
                return getPaddingBottom();
            }
            return getPaddingRight();
        }
        return 0;
    }

    private int U(int i10, f fVar) {
        if (X()) {
            return (int) (((G() - fVar.h().f15806a) - (i10 * fVar.f())) - (fVar.f() / 2.0f));
        }
        return (int) (((i10 * fVar.f()) - fVar.a().f15806a) + (fVar.f() / 2.0f));
    }

    private int V(int i10, f fVar) {
        int i11;
        int i12 = Integer.MAX_VALUE;
        for (f.c cVar : fVar.e()) {
            float f10 = (i10 * fVar.f()) + (fVar.f() / 2.0f);
            if (X()) {
                i11 = (int) ((G() - cVar.f15806a) - f10);
            } else {
                i11 = (int) (f10 - cVar.f15806a);
            }
            int i13 = i11 - this.f15756d;
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
            f.c cVar = (f.c) list.get(i14);
            if (z10) {
                f11 = cVar.f15807b;
            } else {
                f11 = cVar.f15806a;
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
        return new d((f.c) list.get(i10), (f.c) list.get(i12));
    }

    private boolean Y(float f10, d dVar) {
        float t10 = t(f10, L(f10, dVar) / 2.0f);
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
        float s10 = s(f10, L(f10, dVar) / 2.0f);
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
        if (this.f15759o && Log.isLoggable("CarouselLayoutManager", 3)) {
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
        float s10 = s(f10, this.f15763s.f() / 2.0f);
        d W = W(this.f15763s.g(), s10, false);
        return new b(o10, s10, x(o10, s10, W), W);
    }

    private float c0(View view, float f10, float f11, Rect rect) {
        float s10 = s(f10, f11);
        d W = W(this.f15763s.g(), s10, false);
        float x10 = x(view, s10, W);
        super.getDecoratedBoundsWithMargins(view, rect);
        k0(view, s10, W);
        this.f15766v.l(view, rect, f11, x10);
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
        f g10 = this.f15761q.g(this, o10);
        if (X()) {
            g10 = f.n(g10, G());
        }
        this.f15762r = g.f(this, g10, I(), K(), T());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void e0() {
        this.f15762r = null;
        requestLayout();
    }

    private void f0(RecyclerView.Recycler recycler) {
        while (getChildCount() > 0) {
            View childAt = getChildAt(0);
            float H = H(childAt);
            if (!Z(H, W(this.f15763s.g(), H, true))) {
                break;
            }
            removeAndRecycleView(childAt, recycler);
        }
        while (getChildCount() - 1 >= 0) {
            View childAt2 = getChildAt(getChildCount() - 1);
            float H2 = H(childAt2);
            if (Y(H2, W(this.f15763s.g(), H2, true))) {
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
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, k.f54717u0);
            h0(obtainStyledAttributes.getInt(k.f54726v0, 0));
            setOrientation(obtainStyledAttributes.getInt(k.f54640l5, 0));
            obtainStyledAttributes.recycle();
        }
    }

    private void k0(View view, float f10, d dVar) {
    }

    public static /* synthetic */ void l(final CarouselLayoutManager carouselLayoutManager, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        carouselLayoutManager.getClass();
        if (i10 == i14 && i11 == i15 && i12 == i16 && i13 == i17) {
            return;
        }
        view.post(new Runnable() { // from class: bh.b
            @Override // java.lang.Runnable
            public final void run() {
                CarouselLayoutManager.this.e0();
            }
        });
    }

    private void l0(g gVar) {
        f l10;
        int i10 = this.f15758i;
        int i11 = this.f15757e;
        if (i10 <= i11) {
            if (X()) {
                l10 = gVar.h();
            } else {
                l10 = gVar.l();
            }
            this.f15763s = l10;
        } else {
            this.f15763s = gVar.j(this.f15756d, i11, i10);
        }
        this.f15760p.a(this.f15763s.g());
    }

    private void m0() {
        int itemCount = getItemCount();
        int i10 = this.f15768x;
        if (itemCount != i10 && this.f15762r != null) {
            if (this.f15761q.h(this, i10)) {
                e0();
            }
            this.f15768x = itemCount;
        }
    }

    private void n0() {
        if (this.f15759o && getChildCount() >= 1) {
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
        float f10 = this.f15763s.f() / 2.0f;
        addView(view, i10);
        float f11 = bVar.f15774c;
        this.f15766v.k(view, (int) (f11 - f10), (int) (f11 + f10));
        k0(view, bVar.f15773b, bVar.f15775d);
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
        if (this.f15762r == null) {
            d0(recycler);
        }
        int B = B(i10, this.f15756d, this.f15757e, this.f15758i);
        this.f15756d += B;
        l0(this.f15762r);
        float f11 = this.f15763s.f() / 2.0f;
        float y10 = y(getPosition(getChildAt(0)));
        Rect rect = new Rect();
        if (X()) {
            f10 = this.f15763s.h().f15807b;
        } else {
            f10 = this.f15763s.a().f15807b;
        }
        float f12 = Float.MAX_VALUE;
        for (int i11 = 0; i11 < getChildCount(); i11++) {
            View childAt = getChildAt(i11);
            float abs = Math.abs(f10 - c0(childAt, y10, f11, rect));
            if (childAt != null && abs < f12) {
                this.f15769y = getPosition(childAt);
                f12 = abs;
            }
            y10 = s(y10, this.f15763s.f());
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
            r(b02.f15772a, i11, b02);
        }
    }

    private void v(RecyclerView.Recycler recycler, RecyclerView.State state, int i10) {
        float y10 = y(i10);
        while (i10 < state.b()) {
            b b02 = b0(recycler, y10, i10);
            if (!Y(b02.f15774c, b02.f15775d)) {
                y10 = s(y10, this.f15763s.f());
                if (!Z(b02.f15774c, b02.f15775d)) {
                    r(b02.f15772a, -1, b02);
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
            b b02 = b0(recycler, y10, i10);
            if (!Z(b02.f15774c, b02.f15775d)) {
                y10 = t(y10, this.f15763s.f());
                if (!Y(b02.f15774c, b02.f15775d)) {
                    r(b02.f15772a, 0, b02);
                }
                i10--;
            } else {
                return;
            }
        }
    }

    private float x(View view, float f10, d dVar) {
        f.c cVar = dVar.f15778a;
        float f11 = cVar.f15807b;
        f.c cVar2 = dVar.f15779b;
        float b10 = zg.a.b(f11, cVar2.f15807b, cVar.f15806a, cVar2.f15806a, f10);
        if (dVar.f15779b != this.f15763s.c() && dVar.f15778a != this.f15763s.j()) {
            return b10;
        }
        float d10 = this.f15766v.d((RecyclerView.LayoutParams) view.getLayoutParams()) / this.f15763s.f();
        f.c cVar3 = dVar.f15779b;
        return b10 + ((f10 - cVar3.f15806a) * ((1.0f - cVar3.f15808c) + d10));
    }

    private float y(int i10) {
        return s(R() - this.f15756d, this.f15763s.f() * i10);
    }

    private int z(RecyclerView.State state, g gVar) {
        f h10;
        f.c h11;
        float f10;
        float f11;
        boolean X = X();
        if (X) {
            h10 = gVar.l();
        } else {
            h10 = gVar.h();
        }
        if (X) {
            h11 = h10.a();
        } else {
            h11 = h10.h();
        }
        float b10 = (state.b() - 1) * h10.f();
        if (X) {
            f10 = -1.0f;
        } else {
            f10 = 1.0f;
        }
        float f12 = b10 * f10;
        if (X) {
            f11 = -h11.f15812g;
        } else {
            f11 = h11.f15813h;
        }
        int R = (int) ((f12 - (h11.f15806a - R())) + (O() - h11.f15806a) + f11);
        if (X) {
            return Math.min(0, R);
        }
        return Math.max(0, R);
    }

    int A(int i10) {
        return (int) (this.f15756d - U(i10, J(i10)));
    }

    int M(int i10, f fVar) {
        return U(i10, fVar) - this.f15756d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean X() {
        if (d() && getLayoutDirection() == 1) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.material.carousel.b
    public int a() {
        return getWidth();
    }

    @Override // com.google.android.material.carousel.b
    public int b() {
        return getHeight();
    }

    @Override // com.google.android.material.carousel.b
    public int c() {
        return this.f15770z;
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
        if (getChildCount() != 0 && this.f15762r != null && getItemCount() > 1) {
            return (int) (getWidth() * (this.f15762r.g().f() / computeHorizontalScrollRange(state)));
        }
        return 0;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollOffset(RecyclerView.State state) {
        return this.f15756d;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeHorizontalScrollRange(RecyclerView.State state) {
        return this.f15758i - this.f15757e;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.SmoothScroller.a
    public PointF computeScrollVectorForPosition(int i10) {
        if (this.f15762r == null) {
            return null;
        }
        int M = M(i10, J(i10));
        if (d()) {
            return new PointF(M, 0.0f);
        }
        return new PointF(0.0f, M);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollExtent(RecyclerView.State state) {
        if (getChildCount() != 0 && this.f15762r != null && getItemCount() > 1) {
            return (int) (getHeight() * (this.f15762r.g().f() / computeVerticalScrollRange(state)));
        }
        return 0;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollOffset(RecyclerView.State state) {
        return this.f15756d;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public int computeVerticalScrollRange(RecyclerView.State state) {
        return this.f15758i - this.f15757e;
    }

    @Override // com.google.android.material.carousel.b
    public boolean d() {
        if (this.f15766v.f15788a == 0) {
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
        float L = L(centerY, W(this.f15763s.g(), centerY, true));
        float f11 = 0.0f;
        if (d()) {
            f10 = (rect.width() - L) / 2.0f;
        } else {
            f10 = 0.0f;
        }
        if (!d()) {
            f11 = (rect.height() - L) / 2.0f;
        }
        rect.set((int) (rect.left + f10), (int) (rect.top + f11), (int) (rect.right - f10), (int) (rect.bottom - f11));
    }

    public int getOrientation() {
        return this.f15766v.f15788a;
    }

    public void h0(int i10) {
        this.f15770z = i10;
        e0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean isAutoMeasureEnabled() {
        return true;
    }

    public void j0(com.google.android.material.carousel.d dVar) {
        this.f15761q = dVar;
        e0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void measureChildWithMargins(View view, int i10, int i11) {
        throw new IllegalStateException("All children of a RecyclerView using CarouselLayoutManager must use MaskableFrameLayout as their root ViewGroup.");
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onAttachedToWindow(RecyclerView recyclerView) {
        super.onAttachedToWindow(recyclerView);
        this.f15761q.e(recyclerView.getContext());
        e0();
        recyclerView.addOnLayoutChangeListener(this.f15767w);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onDetachedFromWindow(RecyclerView recyclerView, RecyclerView.Recycler recycler) {
        super.onDetachedFromWindow(recyclerView, recycler);
        recyclerView.removeOnLayoutChangeListener(this.f15767w);
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
            if (this.f15762r == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                d0(recycler);
            }
            int C = C(this.f15762r);
            int z11 = z(state, this.f15762r);
            if (X) {
                i10 = z11;
            } else {
                i10 = C;
            }
            this.f15757e = i10;
            if (X) {
                z11 = C;
            }
            this.f15758i = z11;
            if (z10) {
                this.f15756d = C;
                this.f15765u = this.f15762r.i(getItemCount(), this.f15757e, this.f15758i, X());
                int i11 = this.f15769y;
                if (i11 != -1) {
                    this.f15756d = U(i11, J(i11));
                }
            }
            int i12 = this.f15756d;
            this.f15756d = i12 + B(0, i12, this.f15757e, this.f15758i);
            this.f15764t = u1.a.b(this.f15764t, 0, state.b());
            l0(this.f15762r);
            detachAndScrapAttachedViews(recycler);
            D(recycler, state);
            this.f15768x = getItemCount();
            return;
        }
        removeAndRecycleAllViews(recycler);
        this.f15764t = 0;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutCompleted(RecyclerView.State state) {
        super.onLayoutCompleted(state);
        if (getChildCount() == 0) {
            this.f15764t = 0;
        } else {
            this.f15764t = getPosition(getChildAt(0));
        }
        n0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public boolean requestChildRectangleOnScreen(RecyclerView recyclerView, View view, Rect rect, boolean z10, boolean z11) {
        int V;
        if (this.f15762r == null || (V = V(getPosition(view), J(getPosition(view)))) == 0) {
            return false;
        }
        g0(recyclerView, V(getPosition(view), this.f15762r.j(this.f15756d + B(V, this.f15756d, this.f15757e, this.f15758i), this.f15757e, this.f15758i)));
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
        this.f15769y = i10;
        if (this.f15762r == null) {
            return;
        }
        this.f15756d = U(i10, J(i10));
        this.f15764t = u1.a.b(i10, 0, Math.max(0, getItemCount() - 1));
        l0(this.f15762r);
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
        com.google.android.material.carousel.c cVar = this.f15766v;
        if (cVar != null && i10 == cVar.f15788a) {
            return;
        }
        this.f15766v = com.google.android.material.carousel.c.b(this, i10);
        e0();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void smoothScrollToPosition(RecyclerView recyclerView, RecyclerView.State state, int i10) {
        a aVar = new a(recyclerView.getContext());
        aVar.setTargetPosition(i10);
        startSmoothScroll(aVar);
    }

    public CarouselLayoutManager(com.google.android.material.carousel.d dVar) {
        this(dVar, 0);
    }

    public CarouselLayoutManager(com.google.android.material.carousel.d dVar, int i10) {
        this.f15759o = false;
        this.f15760p = new c();
        this.f15764t = 0;
        this.f15767w = new View.OnLayoutChangeListener() { // from class: bh.a
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
                CarouselLayoutManager.l(CarouselLayoutManager.this, view, i11, i12, i13, i14, i15, i16, i17, i18);
            }
        };
        this.f15769y = -1;
        this.f15770z = 0;
        j0(dVar);
        setOrientation(i10);
    }

    @SuppressLint({"UnknownNullness"})
    public CarouselLayoutManager(Context context, AttributeSet attributeSet, int i10, int i11) {
        this.f15759o = false;
        this.f15760p = new c();
        this.f15764t = 0;
        this.f15767w = new View.OnLayoutChangeListener() { // from class: bh.a
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i112, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
                CarouselLayoutManager.l(CarouselLayoutManager.this, view, i112, i12, i13, i14, i15, i16, i17, i18);
            }
        };
        this.f15769y = -1;
        this.f15770z = 0;
        j0(new h());
        i0(context, attributeSet);
    }
}
