package pn;

import android.animation.ValueAnimator;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import com.facebook.react.uimanager.ThemedReactContext;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.r0;
import kotlin.jvm.internal.Intrinsics;
import pn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ThemedReactContext f43375a;

    /* renamed from: b  reason: collision with root package name */
    private final d f43376b;

    /* renamed from: c  reason: collision with root package name */
    private final float f43377c;

    /* renamed from: d  reason: collision with root package name */
    private BottomSheetBehavior.g f43378d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends BottomSheetBehavior.g {

        /* renamed from: a  reason: collision with root package name */
        private final Screen f43379a;

        /* renamed from: b  reason: collision with root package name */
        private final View f43380b;

        /* renamed from: c  reason: collision with root package name */
        private final float f43381c;

        /* renamed from: d  reason: collision with root package name */
        private float f43382d;

        /* renamed from: e  reason: collision with root package name */
        private float f43383e;

        /* renamed from: f  reason: collision with root package name */
        private float f43384f;

        /* renamed from: g  reason: collision with root package name */
        private final ValueAnimator f43385g;

        public a(Screen screen, View viewToAnimate, float f10) {
            Intrinsics.checkNotNullParameter(screen, "screen");
            Intrinsics.checkNotNullParameter(viewToAnimate, "viewToAnimate");
            this.f43379a = screen;
            this.f43380b = viewToAnimate;
            this.f43381c = f10;
            this.f43382d = f(screen.getSheetLargestUndimmedDetentIndex());
            float f11 = f(kotlin.ranges.d.m(screen.getSheetLargestUndimmedDetentIndex() + 1, 0, screen.getSheetDetents().d() - 1));
            this.f43383e = f11;
            this.f43384f = f11 - this.f43382d;
            ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, f10);
            ofFloat.setDuration(1L);
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: pn.f
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    g.a.e(g.a.this, valueAnimator);
                }
            });
            this.f43385g = ofFloat;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void e(a aVar, ValueAnimator it) {
            Intrinsics.checkNotNullParameter(it, "it");
            View view = aVar.f43380b;
            Object animatedValue = it.getAnimatedValue();
            Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
            view.setAlpha(((Float) animatedValue).floatValue());
        }

        private final float f(int i10) {
            int d10 = this.f43379a.getSheetDetents().d();
            if (d10 != 1) {
                if (d10 != 2) {
                    if (d10 != 3 || i10 == -1) {
                        return -1.0f;
                    }
                    if (i10 == 0) {
                        return 0.0f;
                    }
                    if (i10 != 1) {
                        if (i10 == 2) {
                            return 1.0f;
                        }
                        return -1.0f;
                    }
                    BottomSheetBehavior<Screen> sheetBehavior = this.f43379a.getSheetBehavior();
                    Intrinsics.checkNotNull(sheetBehavior);
                    return sheetBehavior.t0();
                } else if (i10 == -1) {
                    return -1.0f;
                } else {
                    if (i10 == 0) {
                        return 0.0f;
                    }
                    if (i10 == 1) {
                        return 1.0f;
                    }
                    return -1.0f;
                }
            } else if (i10 != -1 && i10 == 0) {
                return 1.0f;
            } else {
                return -1.0f;
            }
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View bottomSheet, float f10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            float f11 = this.f43382d;
            if (f11 < f10 && f10 < this.f43383e) {
                this.f43385g.setCurrentFraction((f10 - f11) / this.f43384f);
            }
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            if (i10 != 1 && i10 != 2) {
                return;
            }
            this.f43382d = f(this.f43379a.getSheetLargestUndimmedDetentIndex());
            float f10 = f(kotlin.ranges.d.m(this.f43379a.getSheetLargestUndimmedDetentIndex() + 1, 0, this.f43379a.getSheetDetents().d() - 1));
            this.f43383e = f10;
            this.f43384f = f10 - this.f43382d;
        }
    }

    public g(ThemedReactContext reactContext, Screen screen) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f43375a = reactContext;
        this.f43376b = b(screen);
        this.f43377c = 0.3f;
    }

    private final d b(final Screen screen) {
        d dVar = new d(this.f43375a, this.f43377c);
        dVar.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
        dVar.setOnClickListener(new View.OnClickListener() { // from class: pn.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                g.c(Screen.this, view);
            }
        });
        return dVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(Screen screen, View view) {
        if (screen.getSheetClosesOnTouchOutside()) {
            Fragment fragment = screen.getFragment();
            Intrinsics.checkNotNull(fragment, "null cannot be cast to non-null type com.swmansion.rnscreens.ScreenStackFragment");
            ((r0) fragment).a0();
        }
    }

    private final BottomSheetBehavior.g i(Screen screen, boolean z10) {
        if (this.f43378d == null || z10) {
            this.f43378d = new a(screen, this.f43376b, this.f43377c);
        }
        BottomSheetBehavior.g gVar = this.f43378d;
        Intrinsics.checkNotNull(gVar);
        return gVar;
    }

    public final d d() {
        return this.f43376b;
    }

    public final float e() {
        return this.f43377c;
    }

    public final void f(BottomSheetBehavior bottomSheetBehavior) {
        BottomSheetBehavior.g gVar = this.f43378d;
        if (gVar != null && bottomSheetBehavior != null) {
            bottomSheetBehavior.J0(gVar);
        }
    }

    public final void g(Screen screen, BottomSheetBehavior behavior) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(behavior, "behavior");
        behavior.c0(i(screen, true));
    }

    public final void h(Screen screen, ViewGroup root) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        Intrinsics.checkNotNullParameter(root, "root");
        root.addView(this.f43376b, 0);
        if (!j(screen, screen.getSheetInitialDetentIndex())) {
            this.f43376b.setAlpha(0.0f);
        } else {
            this.f43376b.setAlpha(this.f43377c);
        }
    }

    public final boolean j(Screen screen, int i10) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        if (i10 > screen.getSheetLargestUndimmedDetentIndex()) {
            return true;
        }
        return false;
    }
}
