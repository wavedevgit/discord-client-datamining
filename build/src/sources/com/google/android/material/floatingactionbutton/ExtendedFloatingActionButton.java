package com.google.android.material.floatingactionbutton;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.util.Property;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.h0;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.material.appbar.AppBarLayout;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.button.MaterialButton;
import java.util.List;
import zg.j;
import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class ExtendedFloatingActionButton extends MaterialButton implements CoordinatorLayout.b {
    private static final int F = j.f55721t;
    static final Property G = new a(Float.class, "width");
    static final Property H = new b(Float.class, "height");
    static final Property I = new c(Float.class, ViewProps.PADDING_START);
    static final Property J = new d(Float.class, ViewProps.PADDING_END);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends Property {
        a(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(View view) {
            return Float.valueOf(view.getLayoutParams().width);
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(View view, Float f10) {
            view.getLayoutParams().width = f10.intValue();
            view.requestLayout();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b extends Property {
        b(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(View view) {
            return Float.valueOf(view.getLayoutParams().height);
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(View view, Float f10) {
            view.getLayoutParams().height = f10.intValue();
            view.requestLayout();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends Property {
        c(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(View view) {
            return Float.valueOf(h0.E(view));
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(View view, Float f10) {
            h0.F0(view, f10.intValue(), view.getPaddingTop(), h0.D(view), view.getPaddingBottom());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends Property {
        d(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(View view) {
            return Float.valueOf(h0.D(view));
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(View view, Float f10) {
            h0.F0(view, h0.E(view), view.getPaddingTop(), f10.intValue(), view.getPaddingBottom());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class e {
    }

    static /* synthetic */ void j(ExtendedFloatingActionButton extendedFloatingActionButton, int i10, e eVar) {
        throw null;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    protected static class ExtendedFloatingActionButtonBehavior<T extends ExtendedFloatingActionButton> extends CoordinatorLayout.c {

        /* renamed from: d  reason: collision with root package name */
        private Rect f14998d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f14999e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f15000i;

        public ExtendedFloatingActionButtonBehavior() {
            this.f14999e = false;
            this.f15000i = true;
        }

        private static boolean K(View view) {
            ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
            if (layoutParams instanceof CoordinatorLayout.f) {
                return ((CoordinatorLayout.f) layoutParams).f() instanceof BottomSheetBehavior;
            }
            return false;
        }

        private boolean N(View view, ExtendedFloatingActionButton extendedFloatingActionButton) {
            throw null;
        }

        private boolean P(CoordinatorLayout coordinatorLayout, AppBarLayout appBarLayout, ExtendedFloatingActionButton extendedFloatingActionButton) {
            if (!N(appBarLayout, extendedFloatingActionButton)) {
                return false;
            }
            if (this.f14998d == null) {
                this.f14998d = new Rect();
            }
            Rect rect = this.f14998d;
            com.google.android.material.internal.b.a(coordinatorLayout, appBarLayout, rect);
            if (rect.bottom <= appBarLayout.getMinimumHeightForVisibleOverlappingContent()) {
                O(extendedFloatingActionButton);
                return true;
            }
            I(extendedFloatingActionButton);
            return true;
        }

        private boolean Q(View view, ExtendedFloatingActionButton extendedFloatingActionButton) {
            if (!N(view, extendedFloatingActionButton)) {
                return false;
            }
            throw null;
        }

        protected void I(ExtendedFloatingActionButton extendedFloatingActionButton) {
            int i10;
            if (this.f15000i) {
                i10 = 3;
            } else {
                i10 = 0;
            }
            ExtendedFloatingActionButton.j(extendedFloatingActionButton, i10, null);
        }

        public boolean J(CoordinatorLayout coordinatorLayout, ExtendedFloatingActionButton extendedFloatingActionButton, Rect rect) {
            return super.f(coordinatorLayout, extendedFloatingActionButton, rect);
        }

        public boolean L(CoordinatorLayout coordinatorLayout, ExtendedFloatingActionButton extendedFloatingActionButton, View view) {
            if (view instanceof AppBarLayout) {
                P(coordinatorLayout, (AppBarLayout) view, extendedFloatingActionButton);
                return false;
            } else if (K(view)) {
                Q(view, extendedFloatingActionButton);
                return false;
            } else {
                return false;
            }
        }

        public boolean M(CoordinatorLayout coordinatorLayout, ExtendedFloatingActionButton extendedFloatingActionButton, int i10) {
            List m10 = coordinatorLayout.m(extendedFloatingActionButton);
            int size = m10.size();
            for (int i11 = 0; i11 < size; i11++) {
                View view = (View) m10.get(i11);
                if (view instanceof AppBarLayout) {
                    if (P(coordinatorLayout, (AppBarLayout) view, extendedFloatingActionButton)) {
                        break;
                    }
                } else {
                    if (K(view) && Q(view, extendedFloatingActionButton)) {
                        break;
                    }
                }
            }
            coordinatorLayout.E(extendedFloatingActionButton, i10);
            return true;
        }

        protected void O(ExtendedFloatingActionButton extendedFloatingActionButton) {
            int i10;
            if (this.f15000i) {
                i10 = 2;
            } else {
                i10 = 1;
            }
            ExtendedFloatingActionButton.j(extendedFloatingActionButton, i10, null);
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean f(CoordinatorLayout coordinatorLayout, View view, Rect rect) {
            android.support.v4.media.session.b.a(view);
            return J(coordinatorLayout, null, rect);
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public void k(CoordinatorLayout.f fVar) {
            if (fVar.f2980h == 0) {
                fVar.f2980h = 80;
            }
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean l(CoordinatorLayout coordinatorLayout, View view, View view2) {
            android.support.v4.media.session.b.a(view);
            return L(coordinatorLayout, null, view2);
        }

        @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
            android.support.v4.media.session.b.a(view);
            return M(coordinatorLayout, null, i10);
        }

        public ExtendedFloatingActionButtonBehavior(@NonNull Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, k.M1);
            this.f14999e = obtainStyledAttributes.getBoolean(k.N1, false);
            this.f15000i = obtainStyledAttributes.getBoolean(k.O1, true);
            obtainStyledAttributes.recycle();
        }
    }
}
