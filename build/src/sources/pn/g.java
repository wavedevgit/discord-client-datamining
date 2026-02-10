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
    private final ThemedReactContext f42806a;

    /* renamed from: b  reason: collision with root package name */
    private final d f42807b;

    /* renamed from: c  reason: collision with root package name */
    private final float f42808c;

    /* renamed from: d  reason: collision with root package name */
    private BottomSheetBehavior.g f42809d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends BottomSheetBehavior.g {

        /* renamed from: a  reason: collision with root package name */
        private final Screen f42810a;

        /* renamed from: b  reason: collision with root package name */
        private final View f42811b;

        /* renamed from: c  reason: collision with root package name */
        private final float f42812c;

        /* renamed from: d  reason: collision with root package name */
        private float f42813d;

        /* renamed from: e  reason: collision with root package name */
        private float f42814e;

        /* renamed from: f  reason: collision with root package name */
        private float f42815f;

        /* renamed from: g  reason: collision with root package name */
        private final ValueAnimator f42816g;

        public a(Screen screen, View viewToAnimate, float f10) {
            Intrinsics.checkNotNullParameter(screen, "screen");
            Intrinsics.checkNotNullParameter(viewToAnimate, "viewToAnimate");
            this.f42810a = screen;
            this.f42811b = viewToAnimate;
            this.f42812c = f10;
            this.f42813d = f(screen.getSheetLargestUndimmedDetentIndex());
            float f11 = f(kotlin.ranges.d.m(screen.getSheetLargestUndimmedDetentIndex() + 1, 0, screen.getSheetDetents().d() - 1));
            this.f42814e = f11;
            this.f42815f = f11 - this.f42813d;
            ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, f10);
            ofFloat.setDuration(1L);
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: pn.f
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    g.a.e(g.a.this, valueAnimator);
                }
            });
            this.f42816g = ofFloat;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void e(a aVar, ValueAnimator it) {
            Intrinsics.checkNotNullParameter(it, "it");
            View view = aVar.f42811b;
            Object animatedValue = it.getAnimatedValue();
            Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
            view.setAlpha(((Float) animatedValue).floatValue());
        }

        private final float f(int i10) {
            int d10 = this.f42810a.getSheetDetents().d();
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
                    BottomSheetBehavior<Screen> sheetBehavior = this.f42810a.getSheetBehavior();
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
            float f11 = this.f42813d;
            if (f11 < f10 && f10 < this.f42814e) {
                this.f42816g.setCurrentFraction((f10 - f11) / this.f42815f);
            }
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            if (i10 != 1 && i10 != 2) {
                return;
            }
            this.f42813d = f(this.f42810a.getSheetLargestUndimmedDetentIndex());
            float f10 = f(kotlin.ranges.d.m(this.f42810a.getSheetLargestUndimmedDetentIndex() + 1, 0, this.f42810a.getSheetDetents().d() - 1));
            this.f42814e = f10;
            this.f42815f = f10 - this.f42813d;
        }
    }

    public g(ThemedReactContext reactContext, Screen screen) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f42806a = reactContext;
        this.f42807b = b(screen);
        this.f42808c = 0.3f;
    }

    private final d b(final Screen screen) {
        d dVar = new d(this.f42806a, this.f42808c);
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
        if (this.f42809d == null || z10) {
            this.f42809d = new a(screen, this.f42807b, this.f42808c);
        }
        BottomSheetBehavior.g gVar = this.f42809d;
        Intrinsics.checkNotNull(gVar);
        return gVar;
    }

    public final d d() {
        return this.f42807b;
    }

    public final float e() {
        return this.f42808c;
    }

    public final void f(BottomSheetBehavior bottomSheetBehavior) {
        BottomSheetBehavior.g gVar = this.f42809d;
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
        root.addView(this.f42807b, 0);
        if (!j(screen, screen.getSheetInitialDetentIndex())) {
            this.f42807b.setAlpha(0.0f);
        } else {
            this.f42807b.setAlpha(this.f42808c);
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
