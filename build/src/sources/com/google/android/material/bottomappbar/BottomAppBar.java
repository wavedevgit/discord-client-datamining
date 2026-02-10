package com.google.android.material.bottomappbar;

import android.content.Context;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import androidx.appcompat.widget.Toolbar;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import bh.b;
import bh.k;
import com.google.android.material.behavior.HideBottomViewOnScrollBehavior;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class BottomAppBar extends Toolbar implements CoordinatorLayout.b {

    /* renamed from: i0  reason: collision with root package name */
    private static final int f15286i0 = k.f6944s;

    /* renamed from: j0  reason: collision with root package name */
    private static final int f15287j0 = b.J;

    /* renamed from: k0  reason: collision with root package name */
    private static final int f15288k0 = b.T;

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
        ((CoordinatorLayout.f) view.getLayoutParams()).f3005d = 17;
        throw null;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class Behavior extends HideBottomViewOnScrollBehavior<BottomAppBar> {
        private final Rect A;
        private WeakReference B;
        private int C;
        private final View.OnLayoutChangeListener D;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements View.OnLayoutChangeListener {
            a() {
            }

            @Override // android.view.View.OnLayoutChangeListener
            public void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                android.support.v4.media.session.b.a(Behavior.this.B.get());
                view.removeOnLayoutChangeListener(this);
            }
        }

        public Behavior() {
            this.D = new a();
            this.A = new Rect();
        }

        @Override // com.google.android.material.behavior.HideBottomViewOnScrollBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean E(CoordinatorLayout coordinatorLayout, View view, View view2, View view3, int i10, int i11) {
            android.support.v4.media.session.b.a(view);
            return Y(coordinatorLayout, null, view2, view3, i10, i11);
        }

        public boolean X(CoordinatorLayout coordinatorLayout, BottomAppBar bottomAppBar, int i10) {
            this.B = new WeakReference(bottomAppBar);
            View T = BottomAppBar.T(bottomAppBar);
            if (T != null && !T.isLaidOut()) {
                BottomAppBar.Y(bottomAppBar, T);
                this.C = ((ViewGroup.MarginLayoutParams) ((CoordinatorLayout.f) T.getLayoutParams())).bottomMargin;
                if (T instanceof FloatingActionButton) {
                    FloatingActionButton floatingActionButton = (FloatingActionButton) T;
                    if (BottomAppBar.X(bottomAppBar) == 0 && BottomAppBar.V(bottomAppBar)) {
                        floatingActionButton.setElevation(0.0f);
                        floatingActionButton.setCompatElevation(0.0f);
                    }
                    if (floatingActionButton.getShowMotionSpec() == null) {
                        floatingActionButton.setShowMotionSpecResource(bh.a.f6720b);
                    }
                    if (floatingActionButton.getHideMotionSpec() == null) {
                        floatingActionButton.setHideMotionSpecResource(bh.a.f6719a);
                    }
                    BottomAppBar.W(bottomAppBar, floatingActionButton);
                }
                T.addOnLayoutChangeListener(this.D);
                BottomAppBar.S(bottomAppBar);
            }
            coordinatorLayout.I(bottomAppBar, i10);
            return super.p(coordinatorLayout, bottomAppBar, i10);
        }

        public boolean Y(CoordinatorLayout coordinatorLayout, BottomAppBar bottomAppBar, View view, View view2, int i10, int i11) {
            throw null;
        }

        @Override // com.google.android.material.behavior.HideBottomViewOnScrollBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
        public /* bridge */ /* synthetic */ boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
            android.support.v4.media.session.b.a(view);
            return X(coordinatorLayout, null, i10);
        }

        public Behavior(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.D = new a();
            this.A = new Rect();
        }
    }
}
