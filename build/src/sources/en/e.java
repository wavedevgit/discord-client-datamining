package en;

import android.animation.ValueAnimator;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import com.facebook.react.uimanager.ThemedReactContext;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.n0;
import en.e;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final ThemedReactContext f22962a;

    /* renamed from: b  reason: collision with root package name */
    private final b f22963b;

    /* renamed from: c  reason: collision with root package name */
    private final float f22964c;

    /* renamed from: d  reason: collision with root package name */
    private BottomSheetBehavior.g f22965d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends BottomSheetBehavior.g {

        /* renamed from: a  reason: collision with root package name */
        private final Screen f22966a;

        /* renamed from: b  reason: collision with root package name */
        private final View f22967b;

        /* renamed from: c  reason: collision with root package name */
        private final float f22968c;

        /* renamed from: d  reason: collision with root package name */
        private float f22969d;

        /* renamed from: e  reason: collision with root package name */
        private float f22970e;

        /* renamed from: f  reason: collision with root package name */
        private float f22971f;

        /* renamed from: g  reason: collision with root package name */
        private final ValueAnimator f22972g;

        public a(Screen screen, View viewToAnimate, float f10) {
            Intrinsics.checkNotNullParameter(screen, "screen");
            Intrinsics.checkNotNullParameter(viewToAnimate, "viewToAnimate");
            this.f22966a = screen;
            this.f22967b = viewToAnimate;
            this.f22968c = f10;
            this.f22969d = f(screen.getSheetLargestUndimmedDetentIndex());
            float f11 = f(kotlin.ranges.d.m(screen.getSheetLargestUndimmedDetentIndex() + 1, 0, screen.getSheetDetents().size() - 1));
            this.f22970e = f11;
            this.f22971f = f11 - this.f22969d;
            ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, f10);
            ofFloat.setDuration(1L);
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: en.d
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    e.a.e(e.a.this, valueAnimator);
                }
            });
            this.f22972g = ofFloat;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void e(a aVar, ValueAnimator it) {
            Intrinsics.checkNotNullParameter(it, "it");
            View view = aVar.f22967b;
            Object animatedValue = it.getAnimatedValue();
            Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
            view.setAlpha(((Float) animatedValue).floatValue());
        }

        private final float f(int i10) {
            int size = this.f22966a.getSheetDetents().size();
            if (size != 1) {
                if (size != 2) {
                    if (size != 3 || i10 == -1) {
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
                    BottomSheetBehavior<Screen> sheetBehavior = this.f22966a.getSheetBehavior();
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
            float f11 = this.f22969d;
            if (f11 < f10 && f10 < this.f22970e) {
                this.f22972g.setCurrentFraction((f10 - f11) / this.f22971f);
            }
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            if (i10 != 1 && i10 != 2) {
                return;
            }
            this.f22969d = f(this.f22966a.getSheetLargestUndimmedDetentIndex());
            float f10 = f(kotlin.ranges.d.m(this.f22966a.getSheetLargestUndimmedDetentIndex() + 1, 0, this.f22966a.getSheetDetents().size() - 1));
            this.f22970e = f10;
            this.f22971f = f10 - this.f22969d;
        }
    }

    public e(ThemedReactContext reactContext, Screen screen) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f22962a = reactContext;
        this.f22963b = b(screen);
        this.f22964c = 0.3f;
    }

    private final b b(final Screen screen) {
        b bVar = new b(this.f22962a, this.f22964c);
        bVar.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
        bVar.setOnClickListener(new View.OnClickListener() { // from class: en.c
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e.c(Screen.this, view);
            }
        });
        return bVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(Screen screen, View view) {
        if (screen.getSheetClosesOnTouchOutside()) {
            Fragment fragment = screen.getFragment();
            Intrinsics.checkNotNull(fragment, "null cannot be cast to non-null type com.swmansion.rnscreens.ScreenStackFragment");
            ((n0) fragment).W();
        }
    }

    private final BottomSheetBehavior.g i(Screen screen, boolean z10) {
        if (this.f22965d == null || z10) {
            this.f22965d = new a(screen, this.f22963b, this.f22964c);
        }
        BottomSheetBehavior.g gVar = this.f22965d;
        Intrinsics.checkNotNull(gVar);
        return gVar;
    }

    public final b d() {
        return this.f22963b;
    }

    public final float e() {
        return this.f22964c;
    }

    public final void f(BottomSheetBehavior bottomSheetBehavior) {
        BottomSheetBehavior.g gVar = this.f22965d;
        if (gVar != null && bottomSheetBehavior != null) {
            bottomSheetBehavior.G0(gVar);
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
        root.addView(this.f22963b, 0);
        if (!j(screen, screen.getSheetInitialDetentIndex())) {
            this.f22963b.setAlpha(0.0f);
        } else {
            this.f22963b.setAlpha(this.f22964c);
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
