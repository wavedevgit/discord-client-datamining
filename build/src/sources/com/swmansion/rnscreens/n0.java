package com.swmansion.rnscreens;

import android.animation.Animator;
import android.animation.AnimatorSet;
import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.animation.Animation;
import androidx.appcompat.widget.Toolbar;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.x0;
import androidx.fragment.app.Fragment;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.google.android.material.appbar.AppBarLayout;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.swmansion.rnscreens.q0;
import fn.e;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import oh.k;
@Metadata(d1 = {"\u0000°\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u00012\u00020\u0002B\u0011\b\u0017\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006B\t\b\u0016¢\u0006\u0004\b\u0005\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\t\u0010\u0007J\u0015\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\u00030\nH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u0019\u0010\u000f\u001a\u0004\u0018\u00010\u000e2\u0006\u0010\r\u001a\u00020\u0003H\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0011\u001a\u00020\b2\u0006\u0010\r\u001a\u00020\u0003H\u0002¢\u0006\u0004\b\u0011\u0010\u0006J\u000f\u0010\u0013\u001a\u00020\u0012H\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u0017\u0010\u0017\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u0015H\u0002¢\u0006\u0004\b\u0017\u0010\u0018J\u0011\u0010\u001a\u001a\u0004\u0018\u00010\u0019H\u0002¢\u0006\u0004\b\u001a\u0010\u001bJ\u0019\u0010\u001e\u001a\u00020\u001d2\b\b\u0002\u0010\u001c\u001a\u00020\u0012H\u0002¢\u0006\u0004\b\u001e\u0010\u001fJ\u000f\u0010!\u001a\u00020 H\u0002¢\u0006\u0004\b!\u0010\"J\u000f\u0010#\u001a\u00020\u0012H\u0016¢\u0006\u0004\b#\u0010\u0014J\u000f\u0010$\u001a\u00020\bH\u0016¢\u0006\u0004\b$\u0010\u0007J\u0017\u0010'\u001a\u00020\b2\u0006\u0010&\u001a\u00020%H\u0016¢\u0006\u0004\b'\u0010(J\u0017\u0010*\u001a\u00020\b2\u0006\u0010)\u001a\u00020\u0012H\u0016¢\u0006\u0004\b*\u0010+J\u0017\u0010-\u001a\u00020\b2\u0006\u0010,\u001a\u00020\u0012H\u0016¢\u0006\u0004\b-\u0010+J\u000f\u0010.\u001a\u00020\bH\u0016¢\u0006\u0004\b.\u0010\u0007J\u000f\u0010/\u001a\u00020\bH\u0016¢\u0006\u0004\b/\u0010\u0007J\u000f\u00100\u001a\u00020\bH\u0000¢\u0006\u0004\b0\u0010\u0007J\u0019\u00103\u001a\u00020\b2\b\u00102\u001a\u0004\u0018\u000101H\u0016¢\u0006\u0004\b3\u00104J+\u00109\u001a\u00020\u00192\u0006\u00106\u001a\u0002052\b\u00108\u001a\u0004\u0018\u0001072\b\u00102\u001a\u0004\u0018\u000101H\u0016¢\u0006\u0004\b9\u0010:J!\u0010<\u001a\u00020\b2\u0006\u0010;\u001a\u00020\u00192\b\u00102\u001a\u0004\u0018\u000101H\u0016¢\u0006\u0004\b<\u0010=J)\u0010B\u001a\u0004\u0018\u00010A2\u0006\u0010>\u001a\u00020\u000e2\u0006\u0010?\u001a\u00020\u00122\u0006\u0010@\u001a\u00020\u000eH\u0016¢\u0006\u0004\bB\u0010CJ)\u0010E\u001a\u0004\u0018\u00010D2\u0006\u0010>\u001a\u00020\u000e2\u0006\u0010?\u001a\u00020\u00122\u0006\u0010@\u001a\u00020\u000eH\u0016¢\u0006\u0004\bE\u0010FJ\u000f\u0010G\u001a\u00020\bH\u0016¢\u0006\u0004\bG\u0010\u0007J\u000f\u0010H\u001a\u00020\bH\u0016¢\u0006\u0004\bH\u0010\u0007J\u0017\u0010I\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u0015H\u0016¢\u0006\u0004\bI\u0010\u0018J\u001f\u0010K\u001a\u00020\b2\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u00106\u001a\u00020JH\u0016¢\u0006\u0004\bK\u0010LJ\u000f\u0010M\u001a\u00020\u0012H\u0016¢\u0006\u0004\bM\u0010\u0014J\u000f\u0010N\u001a\u00020\bH\u0016¢\u0006\u0004\bN\u0010\u0007R\u0018\u0010R\u001a\u0004\u0018\u00010O8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bP\u0010QR\u0018\u0010&\u001a\u0004\u0018\u00010%8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bS\u0010TR\u0016\u0010W\u001a\u00020\u00128\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bU\u0010VR\u0016\u0010Y\u001a\u00020\u00128\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bX\u0010VR\u0018\u0010\\\u001a\u0004\u0018\u00010\u00198\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bZ\u0010[R$\u0010c\u001a\u0004\u0018\u00010]8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b^\u0010_\u001a\u0004\bV\u0010`\"\u0004\ba\u0010bR0\u0010k\u001a\u0010\u0012\u0004\u0012\u00020]\u0012\u0004\u0012\u00020\b\u0018\u00010d8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\be\u0010f\u001a\u0004\bg\u0010h\"\u0004\bi\u0010jR\u0016\u0010o\u001a\u00020l8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\bm\u0010nR\u0018\u0010r\u001a\u0004\u0018\u00010\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bp\u0010qR$\u0010x\u001a\u0004\u0018\u00010 8\u0000@\u0000X\u0080\u000e¢\u0006\u0012\n\u0004\bs\u0010t\u001a\u0004\bu\u0010\"\"\u0004\bv\u0010wR\u0014\u0010|\u001a\u00020y8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\bz\u0010{¨\u0006}"}, d2 = {"Lcom/swmansion/rnscreens/n0;", "Lcom/swmansion/rnscreens/w;", "Lcom/swmansion/rnscreens/ScreenStackFragmentWrapper;", "Lcom/swmansion/rnscreens/Screen;", "screenView", "<init>", "(Lcom/swmansion/rnscreens/Screen;)V", "()V", "", "b0", "Lcom/google/android/material/bottomsheet/BottomSheetBehavior;", "U", "()Lcom/google/android/material/bottomsheet/BottomSheetBehavior;", "screen", "", "m0", "(Lcom/swmansion/rnscreens/Screen;)Ljava/lang/Integer;", "S", "", "r0", "()Z", "Landroid/view/Menu;", "menu", "s0", "(Landroid/view/Menu;)V", "Landroid/view/View;", "X", "()Landroid/view/View;", "forceCreation", "Len/e;", "j0", "(Z)Len/e;", "Len/h;", "l0", "()Len/h;", "i", "i0", "Landroidx/appcompat/widget/Toolbar;", "toolbar", "o0", "(Landroidx/appcompat/widget/Toolbar;)V", ViewProps.HIDDEN, "p0", "(Z)V", "translucent", "q0", "m", "I", "W", "Landroid/os/Bundle;", "savedInstanceState", "onCreate", "(Landroid/os/Bundle;)V", "Landroid/view/LayoutInflater;", "inflater", "Landroid/view/ViewGroup;", "container", "onCreateView", "(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Landroid/os/Bundle;)Landroid/view/View;", "view", "onViewCreated", "(Landroid/view/View;Landroid/os/Bundle;)V", "transit", "enter", "nextAnim", "Landroid/view/animation/Animation;", "onCreateAnimation", "(IZI)Landroid/view/animation/Animation;", "Landroid/animation/Animator;", "onCreateAnimator", "(IZI)Landroid/animation/Animator;", "onStart", "onStop", "onPrepareOptionsMenu", "Landroid/view/MenuInflater;", "onCreateOptionsMenu", "(Landroid/view/Menu;Landroid/view/MenuInflater;)V", "T", "V", "Lcom/google/android/material/appbar/AppBarLayout;", "t", "Lcom/google/android/material/appbar/AppBarLayout;", "appBarLayout", "u", "Landroidx/appcompat/widget/Toolbar;", "v", "Z", "isToolbarShadowHidden", "w", "isToolbarTranslucent", "x", "Landroid/view/View;", "lastFocusedChild", "Lcom/swmansion/rnscreens/c;", "y", "Lcom/swmansion/rnscreens/c;", "()Lcom/swmansion/rnscreens/c;", "setSearchView", "(Lcom/swmansion/rnscreens/c;)V", "searchView", "Lkotlin/Function1;", "z", "Lkotlin/jvm/functions/Function1;", "getOnSearchViewCreate", "()Lkotlin/jvm/functions/Function1;", "n0", "(Lkotlin/jvm/functions/Function1;)V", "onSearchViewCreate", "Lin/d;", "A", "Lin/d;", "coordinatorLayout", "B", "Len/e;", "dimmingDelegate", "C", "Len/h;", "a0", "setSheetDelegate$react_native_screens_release", "(Len/h;)V", "sheetDelegate", "Lcom/swmansion/rnscreens/ScreenStack;", "Y", "()Lcom/swmansion/rnscreens/ScreenStack;", "screenStack", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nScreenStackFragment.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ScreenStackFragment.kt\ncom/swmansion/rnscreens/ScreenStackFragment\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,491:1\n1#2:492\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n0 extends w implements ScreenStackFragmentWrapper {
    private in.d A;
    private en.e B;
    private en.h C;

    /* renamed from: t  reason: collision with root package name */
    private AppBarLayout f19287t;

    /* renamed from: u  reason: collision with root package name */
    private Toolbar f19288u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f19289v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f19290w;

    /* renamed from: x  reason: collision with root package name */
    private View f19291x;

    /* renamed from: y  reason: collision with root package name */
    private c f19292y;

    /* renamed from: z  reason: collision with root package name */
    private Function1 f19293z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends x0.b {
        a() {
            super(0);
        }

        @Override // androidx.core.view.x0.b
        public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
            Intrinsics.checkNotNullParameter(insets, "insets");
            Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
            return insets;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n0(Screen screenView) {
        super(screenView);
        Intrinsics.checkNotNullParameter(screenView, "screenView");
    }

    private final void S(Screen screen) {
        float pixelFromDIP = PixelUtil.toPixelFromDIP(screen.getSheetCornerRadius());
        k.b bVar = new k.b();
        int i10 = 0;
        bVar.y(0, pixelFromDIP);
        bVar.D(0, pixelFromDIP);
        oh.k m10 = bVar.m();
        Intrinsics.checkNotNullExpressionValue(m10, "build(...)");
        oh.g gVar = new oh.g(m10);
        Integer m02 = m0(screen);
        if (m02 != null) {
            i10 = m02.intValue();
        }
        gVar.setTint(i10);
        screen.setBackground(gVar);
    }

    private final BottomSheetBehavior U() {
        return new BottomSheetBehavior();
    }

    private final View X() {
        View h10 = h();
        while (h10 != null) {
            if (h10.isFocused()) {
                return h10;
            }
            if (h10 instanceof ViewGroup) {
                h10 = ((ViewGroup) h10).getFocusedChild();
            } else {
                h10 = null;
            }
        }
        return null;
    }

    private final ScreenStack Y() {
        ScreenContainer container = h().getContainer();
        if (container instanceof ScreenStack) {
            return (ScreenStack) container;
        }
        throw new IllegalStateException("ScreenStackFragment added into a non-stack container");
    }

    private final void b0() {
        ViewParent viewParent;
        View view = getView();
        if (view != null) {
            viewParent = view.getParent();
        } else {
            viewParent = null;
        }
        if (viewParent instanceof ScreenStack) {
            ((ScreenStack) viewParent).onViewAppearTransitionEnd();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c0(en.e eVar, ValueAnimator anim) {
        Float f10;
        Intrinsics.checkNotNullParameter(anim, "anim");
        Object animatedValue = anim.getAnimatedValue();
        if (animatedValue instanceof Float) {
            f10 = (Float) animatedValue;
        } else {
            f10 = null;
        }
        if (f10 != null) {
            eVar.d().setAlpha(f10.floatValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final float d0(n0 n0Var, Number number) {
        return n0Var.h().getHeight();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Float e0(Number number) {
        return Float.valueOf(0.0f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f0(n0 n0Var, ValueAnimator anim) {
        Float f10;
        Intrinsics.checkNotNullParameter(anim, "anim");
        Object animatedValue = anim.getAnimatedValue();
        if (animatedValue instanceof Float) {
            f10 = (Float) animatedValue;
        } else {
            f10 = null;
        }
        if (f10 != null) {
            n0Var.h().setTranslationY(f10.floatValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g0(en.e eVar, ValueAnimator anim) {
        Float f10;
        Intrinsics.checkNotNullParameter(anim, "anim");
        Object animatedValue = anim.getAnimatedValue();
        if (animatedValue instanceof Float) {
            f10 = (Float) animatedValue;
        } else {
            f10 = null;
        }
        if (f10 != null) {
            eVar.d().setAlpha(f10.floatValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(n0 n0Var, ValueAnimator anim) {
        Float f10;
        Intrinsics.checkNotNullParameter(anim, "anim");
        Object animatedValue = anim.getAnimatedValue();
        if (animatedValue instanceof Float) {
            f10 = (Float) animatedValue;
        } else {
            f10 = null;
        }
        if (f10 != null) {
            n0Var.h().setTranslationY(f10.floatValue());
        }
    }

    private final en.e j0(boolean z10) {
        en.e eVar = this.B;
        if (eVar == null || z10) {
            if (eVar != null) {
                eVar.f(h().getSheetBehavior());
            }
            this.B = new en.e(h().getReactContext(), h());
        }
        en.e eVar2 = this.B;
        Intrinsics.checkNotNull(eVar2);
        return eVar2;
    }

    static /* synthetic */ en.e k0(n0 n0Var, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        return n0Var.j0(z10);
    }

    private final en.h l0() {
        if (this.C == null) {
            this.C = new en.h(h());
        }
        en.h hVar = this.C;
        Intrinsics.checkNotNull(hVar);
        return hVar;
    }

    private final Integer m0(Screen screen) {
        ColorDrawable colorDrawable;
        oh.g gVar;
        Integer num;
        ColorStateList F;
        Drawable background = screen.getBackground();
        if (background instanceof ColorDrawable) {
            colorDrawable = (ColorDrawable) background;
        } else {
            colorDrawable = null;
        }
        if (colorDrawable != null) {
            num = Integer.valueOf(colorDrawable.getColor());
        } else {
            Drawable background2 = screen.getBackground();
            if (background2 instanceof oh.g) {
                gVar = (oh.g) background2;
            } else {
                gVar = null;
            }
            if (gVar != null && (F = gVar.F()) != null) {
                num = Integer.valueOf(F.getDefaultColor());
            } else {
                num = null;
            }
        }
        if (num != null) {
            return num;
        }
        ScreenContentWrapper contentWrapper = screen.getContentWrapper();
        if (contentWrapper == null) {
            return null;
        }
        return kn.h.a(contentWrapper);
    }

    private final boolean r0() {
        int i10;
        ScreenStackHeaderConfig headerConfig = h().getHeaderConfig();
        if (headerConfig != null) {
            i10 = headerConfig.getConfigSubviewsCount();
        } else {
            i10 = 0;
        }
        if (headerConfig != null && i10 > 0) {
            for (int i11 = 0; i11 < i10; i11++) {
                if (headerConfig.g(i11).getType() == q0.a.f19332p) {
                    return true;
                }
            }
        }
        return false;
    }

    private final void s0(Menu menu) {
        menu.clear();
        if (r0()) {
            Context context = getContext();
            if (this.f19292y == null && context != null) {
                c cVar = new c(context, this);
                this.f19292y = cVar;
                Function1 function1 = this.f19293z;
                if (function1 != null) {
                    function1.invoke(cVar);
                }
            }
            MenuItem add = menu.add("");
            add.setShowAsAction(2);
            add.setActionView(this.f19292y);
        }
    }

    @Override // com.swmansion.rnscreens.w
    public void I() {
        super.I();
        b0();
        h().endRemovalTransition();
    }

    public boolean T() {
        ScreenContainer container = h().getContainer();
        if (container instanceof ScreenStack) {
            if (Intrinsics.areEqual(((ScreenStack) container).getRootScreen(), h())) {
                Fragment parentFragment = getParentFragment();
                if (parentFragment instanceof n0) {
                    return ((n0) parentFragment).T();
                }
                return false;
            }
            return true;
        }
        throw new IllegalStateException("ScreenStackFragment added into a non-stack container");
    }

    public void V() {
        Y().dismiss(this);
    }

    public final void W() {
        if (!isRemoving() || !isDetached()) {
            ThemedReactContext reactContext = h().getReactContext();
            int surfaceId = UIManagerHelper.getSurfaceId(reactContext);
            EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, h().getId());
            if (eventDispatcherForReactTag != null) {
                eventDispatcherForReactTag.dispatchEvent(new fn.h(surfaceId, h().getId()));
            }
        }
    }

    public final c Z() {
        return this.f19292y;
    }

    public final en.h a0() {
        return this.C;
    }

    @Override // com.swmansion.rnscreens.w, com.swmansion.rnscreens.ScreenFragmentWrapper
    public boolean i() {
        return h().isTranslucent();
    }

    public void i0() {
        Toolbar toolbar;
        AppBarLayout appBarLayout = this.f19287t;
        if (appBarLayout != null && (toolbar = this.f19288u) != null && toolbar.getParent() == appBarLayout) {
            appBarLayout.removeView(toolbar);
        }
        this.f19288u = null;
    }

    @Override // com.swmansion.rnscreens.w, com.swmansion.rnscreens.ScreenFragmentWrapper
    public void m() {
        super.m();
        ScreenStackHeaderConfig headerConfig = h().getHeaderConfig();
        if (headerConfig != null) {
            headerConfig.l();
        }
    }

    public final void n0(Function1 function1) {
        this.f19293z = function1;
    }

    public void o0(Toolbar toolbar) {
        Intrinsics.checkNotNullParameter(toolbar, "toolbar");
        AppBarLayout appBarLayout = this.f19287t;
        if (appBarLayout != null) {
            appBarLayout.addView(toolbar);
        }
        AppBarLayout.d dVar = new AppBarLayout.d(-1, -2);
        dVar.g(0);
        toolbar.setLayoutParams(dVar);
        this.f19288u = toolbar;
    }

    @Override // androidx.fragment.app.Fragment
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
    }

    @Override // androidx.fragment.app.Fragment
    public Animation onCreateAnimation(int i10, boolean z10, int i11) {
        return null;
    }

    @Override // androidx.fragment.app.Fragment
    public Animator onCreateAnimator(int i10, boolean z10, int i11) {
        e.a aVar;
        in.d dVar = null;
        AnimatorSet.Builder builder = null;
        if (!en.j.d(h())) {
            return null;
        }
        AnimatorSet animatorSet = new AnimatorSet();
        final en.e k02 = k0(this, false, 1, null);
        if (z10) {
            ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, k02.e());
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.swmansion.rnscreens.h0
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    n0.c0(en.e.this, valueAnimator);
                }
            });
            ValueAnimator ofObject = ValueAnimator.ofObject(new jn.a(new Function1() { // from class: com.swmansion.rnscreens.i0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    float d02;
                    d02 = n0.d0(n0.this, (Number) obj);
                    return Float.valueOf(d02);
                }
            }, new Function1() { // from class: com.swmansion.rnscreens.j0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Float e02;
                    e02 = n0.e0((Number) obj);
                    return e02;
                }
            }), Float.valueOf(h().getHeight()), Float.valueOf(0.0f));
            ofObject.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.swmansion.rnscreens.k0
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    n0.f0(n0.this, valueAnimator);
                }
            });
            AnimatorSet.Builder play = animatorSet.play(ofObject);
            if (k02.j(h(), h().getSheetInitialDetentIndex())) {
                builder = play;
            }
            if (builder != null) {
                builder.with(ofFloat);
            }
        } else {
            ValueAnimator ofFloat2 = ValueAnimator.ofFloat(k02.d().getAlpha(), 0.0f);
            ofFloat2.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.swmansion.rnscreens.l0
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    n0.g0(en.e.this, valueAnimator);
                }
            });
            in.d dVar2 = this.A;
            if (dVar2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
            } else {
                dVar = dVar2;
            }
            ValueAnimator ofFloat3 = ValueAnimator.ofFloat(0.0f, dVar.getBottom() - h().getTop());
            ofFloat3.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.swmansion.rnscreens.m0
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    n0.h0(n0.this, valueAnimator);
                }
            });
            animatorSet.play(ofFloat2).with(ofFloat3);
        }
        fn.i iVar = new fn.i(h());
        if (z10) {
            aVar = e.a.f25261d;
        } else {
            aVar = e.a.f25262e;
        }
        animatorSet.addListener(new fn.e(this, iVar, aVar));
        return animatorSet;
    }

    @Override // androidx.fragment.app.Fragment
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        Intrinsics.checkNotNullParameter(menu, "menu");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        s0(menu);
        super.onCreateOptionsMenu(menu, inflater);
    }

    @Override // com.swmansion.rnscreens.w, androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater inflater, ViewGroup viewGroup, Bundle bundle) {
        CoordinatorLayout.c scrollingViewBehavior;
        AppBarLayout appBarLayout;
        AppBarLayout appBarLayout2;
        AppBarLayout appBarLayout3;
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        Context requireContext = requireContext();
        Intrinsics.checkNotNullExpressionValue(requireContext, "requireContext(...)");
        this.A = new in.d(requireContext, this);
        Screen h10 = h();
        CoordinatorLayout.f fVar = new CoordinatorLayout.f(-1, -1);
        if (en.j.d(h())) {
            scrollingViewBehavior = U();
        } else if (this.f19290w) {
            scrollingViewBehavior = null;
        } else {
            scrollingViewBehavior = new AppBarLayout.ScrollingViewBehavior();
        }
        fVar.o(scrollingViewBehavior);
        h10.setLayoutParams(fVar);
        in.d dVar = this.A;
        if (dVar == null) {
            Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
            dVar = null;
        }
        dVar.addView(gn.c.b(h()));
        if (!en.j.d(h())) {
            Context context = getContext();
            if (context != null) {
                appBarLayout = new AppBarLayout(context);
                appBarLayout.setBackgroundColor(0);
                appBarLayout.setLayoutParams(new AppBarLayout.d(-1, -2));
            } else {
                appBarLayout = null;
            }
            this.f19287t = appBarLayout;
            in.d dVar2 = this.A;
            if (dVar2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar2 = null;
            }
            dVar2.addView(this.f19287t);
            if (this.f19289v && (appBarLayout3 = this.f19287t) != null) {
                appBarLayout3.setTargetElevation(0.0f);
            }
            Toolbar toolbar = this.f19288u;
            if (toolbar != null && (appBarLayout2 = this.f19287t) != null) {
                appBarLayout2.addView(gn.c.b(toolbar));
            }
            setHasOptionsMenu(true);
        } else {
            h().setClipToOutline(true);
            S(h());
            h().setElevation(h().getSheetElevation());
            en.h l02 = l0();
            BottomSheetBehavior<Screen> sheetBehavior = h().getSheetBehavior();
            Intrinsics.checkNotNull(sheetBehavior);
            en.h.d(l02, sheetBehavior, null, 0, 6, null);
            en.e j02 = j0(true);
            Screen h11 = h();
            in.d dVar3 = this.A;
            if (dVar3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar3 = null;
            }
            j02.h(h11, dVar3);
            Screen h12 = h();
            BottomSheetBehavior<Screen> sheetBehavior2 = h().getSheetBehavior();
            Intrinsics.checkNotNull(sheetBehavior2);
            j02.g(h12, sheetBehavior2);
            ScreenContainer container = h().getContainer();
            Intrinsics.checkNotNull(container);
            in.d dVar4 = this.A;
            if (dVar4 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar4 = null;
            }
            dVar4.measure(View.MeasureSpec.makeMeasureSpec(container.getWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(container.getHeight(), 1073741824));
            in.d dVar5 = this.A;
            if (dVar5 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar5 = null;
            }
            dVar5.layout(0, 0, container.getWidth(), container.getHeight());
            androidx.core.view.h0.L0(h(), new a());
        }
        in.d dVar6 = this.A;
        if (dVar6 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
            return null;
        }
        return dVar6;
    }

    @Override // androidx.fragment.app.Fragment
    public void onPrepareOptionsMenu(Menu menu) {
        ScreenStackHeaderConfig headerConfig;
        Intrinsics.checkNotNullParameter(menu, "menu");
        if (!h().isTranslucent() || ((headerConfig = h().getHeaderConfig()) != null && !headerConfig.h())) {
            s0(menu);
        }
        super.onPrepareOptionsMenu(menu);
    }

    @Override // androidx.fragment.app.Fragment
    public void onStart() {
        View view = this.f19291x;
        if (view != null) {
            view.requestFocus();
        }
        super.onStart();
    }

    @Override // androidx.fragment.app.Fragment
    public void onStop() {
        if (kn.a.f33270a.a(getContext())) {
            this.f19291x = X();
        }
        super.onStop();
    }

    @Override // androidx.fragment.app.Fragment
    public void onViewCreated(View view, Bundle bundle) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onViewCreated(view, bundle);
    }

    public void p0(boolean z10) {
        float pixelFromDIP;
        if (this.f19289v != z10) {
            AppBarLayout appBarLayout = this.f19287t;
            if (appBarLayout != null) {
                if (z10) {
                    pixelFromDIP = 0.0f;
                } else {
                    pixelFromDIP = PixelUtil.toPixelFromDIP(4.0f);
                }
                appBarLayout.setElevation(pixelFromDIP);
            }
            AppBarLayout appBarLayout2 = this.f19287t;
            if (appBarLayout2 != null) {
                appBarLayout2.setStateListAnimator(null);
            }
            this.f19289v = z10;
        }
    }

    public void q0(boolean z10) {
        AppBarLayout.ScrollingViewBehavior scrollingViewBehavior;
        if (this.f19290w != z10) {
            ViewGroup.LayoutParams layoutParams = h().getLayoutParams();
            Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
            CoordinatorLayout.f fVar = (CoordinatorLayout.f) layoutParams;
            if (z10) {
                scrollingViewBehavior = null;
            } else {
                scrollingViewBehavior = new AppBarLayout.ScrollingViewBehavior();
            }
            fVar.o(scrollingViewBehavior);
            this.f19290w = z10;
        }
    }

    public n0() {
        throw new IllegalStateException("ScreenStack fragments should never be restored. Follow instructions from https://github.com/software-mansion/react-native-screens/issues/17#issuecomment-424704067 to properly configure your main activity.");
    }
}
