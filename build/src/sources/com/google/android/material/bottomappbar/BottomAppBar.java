package com.google.android.material.bottomappbar;

import android.content.Context;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import androidx.appcompat.widget.Toolbar;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.h0;
import com.google.android.material.behavior.HideBottomViewOnScrollBehavior;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import java.lang.ref.WeakReference;
import yg.b;
import yg.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class BottomAppBar extends Toolbar implements CoordinatorLayout.b {

    /* renamed from: i0  reason: collision with root package name */
    private static final int f15578i0 = j.f54526m;

    /* renamed from: j0  reason: collision with root package name */
    private static final int f15579j0 = b.F;

    /* renamed from: k0  reason: collision with root package name */
    private static final int f15580k0 = b.P;

    static /* synthetic */ void S(BottomAppBar bottomAppBar) {
        throw null;
    }

    static /* synthetic */ View T(BottomAppBar bottomAppBar) {
        throw null;
    }

    static /* synthetic */ boolean V(BottomAppBar bottomAppBar) {
        throw null;
    }

    static /* synthetic */ void W(BottomAppBar bottomAppBar, FloatingActionButton floatingActionButton) {
        throw null;
    }

    static /* synthetic */ int X(BottomAppBar bottomAppBar) {
        throw null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void Y(BottomAppBar bottomAppBar, View view) {
        ((CoordinatorLayout.f) view.getLayoutParams()).f2851d = 17;
        throw null;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class Behavior extends HideBottomViewOnScrollBehavior<BottomAppBar> {
        private final View.OnLayoutChangeListener A;

        /* renamed from: x  reason: collision with root package name */
        private final Rect f15581x;

        /* renamed from: y  reason: collision with root package name */
        private WeakReference f15582y;

        /* renamed from: z  reason: collision with root package name */
        private int f15583z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements View.OnLayoutChangeListener {
            a() {
            }

            @Override // android.view.View.OnLayoutChangeListener
            public void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                android.support.v4.media.session.b.a(Behavior.this.f15582y.get());
                view.removeOnLayoutChangeListener(this);
            }
        }

        public Behavior() {
            this.A = new a();
            this.f15581x = new Rect();
        }

        @Override // com.google.android.material.behavior.HideBottomViewOnScrollBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean E(CoordinatorLayout coordinatorLayout, View view, View view2, View view3, int i10, int i11) {
            android.support.v4.media.session.b.a(view);
            return T(coordinatorLayout, null, view2, view3, i10, i11);
        }

        public boolean S(CoordinatorLayout coordinatorLayout, BottomAppBar bottomAppBar, int i10) {
            this.f15582y = new WeakReference(bottomAppBar);
            View T = BottomAppBar.T(bottomAppBar);
            if (T != null && !h0.S(T)) {
                BottomAppBar.Y(bottomAppBar, T);
                this.f15583z = ((ViewGroup.MarginLayoutParams) ((CoordinatorLayout.f) T.getLayoutParams())).bottomMargin;
                if (T instanceof FloatingActionButton) {
                    FloatingActionButton floatingActionButton = (FloatingActionButton) T;
                    if (BottomAppBar.X(bottomAppBar) == 0 && BottomAppBar.V(bottomAppBar)) {
                        h0.v0(floatingActionButton, 0.0f);
                        floatingActionButton.setCompatElevation(0.0f);
                    }
                    if (floatingActionButton.getShowMotionSpec() == null) {
                        floatingActionButton.setShowMotionSpecResource(yg.a.f54343b);
                    }
                    if (floatingActionButton.getHideMotionSpec() == null) {
                        floatingActionButton.setHideMotionSpecResource(yg.a.f54342a);
                    }
                    BottomAppBar.W(bottomAppBar, floatingActionButton);
                }
                T.addOnLayoutChangeListener(this.A);
                BottomAppBar.S(bottomAppBar);
            }
            coordinatorLayout.E(bottomAppBar, i10);
            return super.p(coordinatorLayout, bottomAppBar, i10);
        }

        public boolean T(CoordinatorLayout coordinatorLayout, BottomAppBar bottomAppBar, View view, View view2, int i10, int i11) {
            throw null;
        }

        @Override // com.google.android.material.behavior.HideBottomViewOnScrollBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
            android.support.v4.media.session.b.a(view);
            return S(coordinatorLayout, null, i10);
        }

        public Behavior(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.A = new a();
            this.f15581x = new Rect();
        }
    }
}
