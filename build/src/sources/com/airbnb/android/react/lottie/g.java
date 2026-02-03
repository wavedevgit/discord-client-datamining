package com.airbnb.android.react.lottie;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.ImageView;
import androidx.core.view.h0;
import com.airbnb.lottie.LottieAnimationView;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import l5.g0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public static final g f7392a = new g();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements View.OnAttachStateChangeListener {
        a() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            LottieAnimationView lottieAnimationView = (LottieAnimationView) v10;
            lottieAnimationView.setProgress(0.0f);
            lottieAnimationView.playAnimation();
            lottieAnimationView.removeOnAttachStateChangeListener(this);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            ((LottieAnimationView) v10).removeOnAttachStateChangeListener(this);
        }
    }

    private g() {
    }

    public static final void A(String str, h viewManager) {
        g0 g0Var;
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        if (str != null) {
            int hashCode = str.hashCode();
            if (hashCode != 165298699) {
                if (hashCode != 899536360) {
                    if (hashCode == 2101957031 && str.equals("SOFTWARE")) {
                        g0Var = g0.SOFTWARE;
                    }
                } else if (str.equals("HARDWARE")) {
                    g0Var = g0.HARDWARE;
                }
            } else if (str.equals("AUTOMATIC")) {
                g0Var = g0.AUTOMATIC;
            }
            viewManager.n(g0Var);
        }
        g0Var = null;
        viewManager.n(g0Var);
    }

    public static final void B(String str, h viewManager) {
        ImageView.ScaleType scaleType;
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        if (str != null) {
            int hashCode = str.hashCode();
            if (hashCode != -1364013995) {
                if (hashCode != 94852023) {
                    if (hashCode == 951526612 && str.equals("contain")) {
                        scaleType = ImageView.ScaleType.FIT_CENTER;
                    }
                } else if (str.equals("cover")) {
                    scaleType = ImageView.ScaleType.CENTER_CROP;
                }
            } else if (str.equals("center")) {
                scaleType = ImageView.ScaleType.CENTER_INSIDE;
            }
            viewManager.o(scaleType);
        }
        scaleType = null;
        viewManager.o(scaleType);
    }

    public static final void C(String str, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.p(str);
        viewManager.b();
    }

    public static final void D(String str, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.d(str);
        viewManager.b();
    }

    public static final void E(String str, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        if (str != null && !StringsKt.V(str, ".", false, 2, null)) {
            str = str + ".json";
        }
        viewManager.e(str);
        viewManager.b();
    }

    public static final void F(String str, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.f(str);
        viewManager.b();
    }

    public static final void G(double d10, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.q(Float.valueOf((float) d10));
    }

    public static final void H(ReadableArray readableArray, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.r(readableArray);
    }

    public static final LottieAnimationView e(ThemedReactContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        LottieAnimationView lottieAnimationView = new LottieAnimationView(context);
        lottieAnimationView.setScaleType(ImageView.ScaleType.CENTER_INSIDE);
        return lottieAnimationView;
    }

    public static final Map f() {
        return MapBuilder.of("topAnimationFinish", MapBuilder.of("registrationName", "onAnimationFinish"), "topAnimationFailure", MapBuilder.of("registrationName", "onAnimationFailure"), "topAnimationLoaded", MapBuilder.of("registrationName", "onAnimationLoaded"));
    }

    public static final Map g() {
        return MapBuilder.builder().put("VERSION", 1).build();
    }

    public static final void h(final LottieAnimationView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.airbnb.android.react.lottie.f
            @Override // java.lang.Runnable
            public final void run() {
                g.i(LottieAnimationView.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(LottieAnimationView lottieAnimationView) {
        if (h0.R(lottieAnimationView)) {
            lottieAnimationView.pauseAnimation();
        }
    }

    public static final void j(final LottieAnimationView view, final int i10, final int i11) {
        Intrinsics.checkNotNullParameter(view, "view");
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.airbnb.android.react.lottie.e
            @Override // java.lang.Runnable
            public final void run() {
                g.k(i10, i11, view);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(int i10, int i11, LottieAnimationView lottieAnimationView) {
        if (i10 != -1 && i11 != -1) {
            if (i10 > i11) {
                lottieAnimationView.D(i11, i10);
                if (lottieAnimationView.getSpeed() > 0.0f) {
                    lottieAnimationView.x();
                }
            } else {
                lottieAnimationView.D(i10, i11);
                if (lottieAnimationView.getSpeed() < 0.0f) {
                    lottieAnimationView.x();
                }
            }
        }
        if (h0.R(lottieAnimationView)) {
            lottieAnimationView.setProgress(0.0f);
            lottieAnimationView.playAnimation();
            return;
        }
        lottieAnimationView.addOnAttachStateChangeListener(new a());
    }

    public static final void l(final LottieAnimationView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.airbnb.android.react.lottie.c
            @Override // java.lang.Runnable
            public final void run() {
                g.m(LottieAnimationView.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m(LottieAnimationView lottieAnimationView) {
        if (h0.R(lottieAnimationView)) {
            lottieAnimationView.m();
            lottieAnimationView.setProgress(0.0f);
        }
    }

    public static final void n(final LottieAnimationView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: com.airbnb.android.react.lottie.d
            @Override // java.lang.Runnable
            public final void run() {
                g.o(LottieAnimationView.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(LottieAnimationView lottieAnimationView) {
        if (h0.R(lottieAnimationView)) {
            lottieAnimationView.w();
        }
    }

    public static final void p(LottieAnimationView view, Throwable error) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(error, "error");
        Context context = view.getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        ThemedReactContext themedReactContext = (ThemedReactContext) context;
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(themedReactContext, view.getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new j(themedReactContext.getSurfaceId(), view.getId(), error));
        }
    }

    public static final void q(LottieAnimationView view) {
        Intrinsics.checkNotNullParameter(view, "view");
        Context context = view.getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        ThemedReactContext themedReactContext = (ThemedReactContext) context;
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(themedReactContext, view.getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new l(themedReactContext.getSurfaceId(), view.getId()));
        }
    }

    public static final void r(LottieAnimationView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        Context context = view.getContext();
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.uimanager.ThemedReactContext");
        ThemedReactContext themedReactContext = (ThemedReactContext) context;
        EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(themedReactContext, view.getId());
        if (eventDispatcherForReactTag != null) {
            eventDispatcherForReactTag.dispatchEvent(new k(themedReactContext.getSurfaceId(), view.getId(), z10));
        }
    }

    public static final void s(boolean z10, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.g(Boolean.valueOf(z10));
    }

    public static final void t(LottieAnimationView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setCacheComposition(z10);
    }

    public static final void u(ReadableArray readableArray, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.h(readableArray);
    }

    public static final void v(boolean z10, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.i(Boolean.valueOf(z10));
    }

    public static final void w(boolean z10, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        int i10 = 1;
        if (z10) {
            i10 = 2;
        }
        viewManager.k(i10);
    }

    public static final void x(String str, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.j(str);
    }

    public static final void y(boolean z10, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.l(Boolean.valueOf(z10));
    }

    public static final void z(float f10, h viewManager) {
        Intrinsics.checkNotNullParameter(viewManager, "viewManager");
        viewManager.m(Float.valueOf(f10));
    }
}
