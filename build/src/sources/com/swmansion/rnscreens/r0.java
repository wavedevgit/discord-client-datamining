package com.swmansion.rnscreens;

import android.animation.Animator;
import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.WindowInsets;
import android.view.animation.Animation;
import androidx.appcompat.widget.Toolbar;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.y0;
import androidx.fragment.app.Fragment;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.google.android.material.appbar.AppBarLayout;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.swmansion.rnscreens.v0;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import pn.o;
import th.l;
@Metadata(d1 = {"\u0000È\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u00012\u00020\u0002B\u0011\b\u0017\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006B\t\b\u0016¢\u0006\u0004\b\u0005\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\t\u0010\u0007J\u000f\u0010\u000b\u001a\u00020\nH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u000f\u0010\r\u001a\u00020\nH\u0002¢\u0006\u0004\b\r\u0010\fJ\u0015\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00030\u000eH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u0019\u0010\u0013\u001a\u0004\u0018\u00010\u00122\u0006\u0010\u0011\u001a\u00020\u0003H\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u0017\u0010\u0015\u001a\u00020\b2\u0006\u0010\u0011\u001a\u00020\u0003H\u0002¢\u0006\u0004\b\u0015\u0010\u0006J\u000f\u0010\u0017\u001a\u00020\u0016H\u0002¢\u0006\u0004\b\u0017\u0010\u0018J\u0017\u0010\u001b\u001a\u00020\b2\u0006\u0010\u001a\u001a\u00020\u0019H\u0002¢\u0006\u0004\b\u001b\u0010\u001cJ\u0011\u0010\u001e\u001a\u0004\u0018\u00010\u001dH\u0002¢\u0006\u0004\b\u001e\u0010\u001fJ\u0017\u0010\"\u001a\u00020\b2\u0006\u0010!\u001a\u00020 H\u0002¢\u0006\u0004\b\"\u0010#J\u0017\u0010&\u001a\u00020\b2\u0006\u0010%\u001a\u00020$H\u0002¢\u0006\u0004\b&\u0010'J\u0019\u0010*\u001a\u00020)2\b\b\u0002\u0010(\u001a\u00020\u0016H\u0002¢\u0006\u0004\b*\u0010+J\u000f\u0010-\u001a\u00020,H\u0002¢\u0006\u0004\b-\u0010.J\u000f\u0010/\u001a\u00020\u0016H\u0016¢\u0006\u0004\b/\u0010\u0018J\u000f\u00100\u001a\u00020\bH\u0016¢\u0006\u0004\b0\u0010\u0007J\u0017\u00103\u001a\u00020\b2\u0006\u00102\u001a\u000201H\u0016¢\u0006\u0004\b3\u00104J\u0017\u00106\u001a\u00020\b2\u0006\u00105\u001a\u00020\u0016H\u0016¢\u0006\u0004\b6\u00107J\u0017\u00109\u001a\u00020\b2\u0006\u00108\u001a\u00020\u0016H\u0016¢\u0006\u0004\b9\u00107J\u000f\u0010:\u001a\u00020\bH\u0016¢\u0006\u0004\b:\u0010\u0007J\u000f\u0010;\u001a\u00020\bH\u0016¢\u0006\u0004\b;\u0010\u0007J\u000f\u0010<\u001a\u00020\bH\u0000¢\u0006\u0004\b<\u0010\u0007J\u0019\u0010?\u001a\u00020\b2\b\u0010>\u001a\u0004\u0018\u00010=H\u0016¢\u0006\u0004\b?\u0010@J+\u0010E\u001a\u00020\u001d2\u0006\u0010B\u001a\u00020A2\b\u0010D\u001a\u0004\u0018\u00010C2\b\u0010>\u001a\u0004\u0018\u00010=H\u0016¢\u0006\u0004\bE\u0010FJ!\u0010H\u001a\u00020\b2\u0006\u0010G\u001a\u00020\u001d2\b\u0010>\u001a\u0004\u0018\u00010=H\u0016¢\u0006\u0004\bH\u0010IJ)\u0010N\u001a\u0004\u0018\u00010M2\u0006\u0010J\u001a\u00020\u00122\u0006\u0010K\u001a\u00020\u00162\u0006\u0010L\u001a\u00020\u0012H\u0016¢\u0006\u0004\bN\u0010OJ)\u0010P\u001a\u0004\u0018\u00010\n2\u0006\u0010J\u001a\u00020\u00122\u0006\u0010K\u001a\u00020\u00162\u0006\u0010L\u001a\u00020\u0012H\u0016¢\u0006\u0004\bP\u0010QJ\u000f\u0010R\u001a\u00020\bH\u0016¢\u0006\u0004\bR\u0010\u0007J\u000f\u0010S\u001a\u00020\bH\u0016¢\u0006\u0004\bS\u0010\u0007J\u0017\u0010T\u001a\u00020\b2\u0006\u0010\u001a\u001a\u00020\u0019H\u0016¢\u0006\u0004\bT\u0010\u001cJ\u001f\u0010V\u001a\u00020\b2\u0006\u0010\u001a\u001a\u00020\u00192\u0006\u0010B\u001a\u00020UH\u0016¢\u0006\u0004\bV\u0010WJ\u000f\u0010X\u001a\u00020\u0016H\u0016¢\u0006\u0004\bX\u0010\u0018J\u000f\u0010Y\u001a\u00020\bH\u0016¢\u0006\u0004\bY\u0010\u0007J\u000f\u0010[\u001a\u00020ZH\u0000¢\u0006\u0004\b[\u0010\\R\u0018\u0010`\u001a\u0004\u0018\u00010]8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b^\u0010_R\u0018\u00102\u001a\u0004\u0018\u0001018\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\ba\u0010bR\u0016\u0010d\u001a\u00020\u00168\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bc\u0010YR\u0016\u0010f\u001a\u00020\u00168\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\be\u0010YR\u0016\u0010!\u001a\u00020 8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\bg\u0010hR\u0018\u0010k\u001a\u0004\u0018\u00010\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bi\u0010jR$\u0010s\u001a\u0004\u0018\u00010l8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bm\u0010n\u001a\u0004\bo\u0010p\"\u0004\bq\u0010rR0\u0010{\u001a\u0010\u0012\u0004\u0012\u00020l\u0012\u0004\u0012\u00020\b\u0018\u00010t8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bu\u0010v\u001a\u0004\bw\u0010x\"\u0004\by\u0010zR\u0016\u0010\u007f\u001a\u00020|8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b}\u0010~R\u001b\u0010\u0082\u0001\u001a\u0004\u0018\u00010)8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0080\u0001\u0010\u0081\u0001R*\u0010\u0088\u0001\u001a\u0004\u0018\u00010,8\u0000@\u0000X\u0080\u000e¢\u0006\u0017\n\u0006\b\u0083\u0001\u0010\u0084\u0001\u001a\u0005\b\u0085\u0001\u0010.\"\u0006\b\u0086\u0001\u0010\u0087\u0001R*\u0010\u008e\u0001\u001a\u0004\u0018\u00010Z8\u0000@\u0000X\u0080\u000e¢\u0006\u0017\n\u0006\b\u0089\u0001\u0010\u008a\u0001\u001a\u0005\b\u008b\u0001\u0010\\\"\u0006\b\u008c\u0001\u0010\u008d\u0001R\u001b\u0010\u0091\u0001\u001a\u0004\u0018\u00010$8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008f\u0001\u0010\u0090\u0001R\u0018\u0010\u0095\u0001\u001a\u00030\u0092\u00018BX\u0082\u0004¢\u0006\b\u001a\u0006\b\u0093\u0001\u0010\u0094\u0001¨\u0006\u0096\u0001"}, d2 = {"Lcom/swmansion/rnscreens/r0;", "Lcom/swmansion/rnscreens/b0;", "Lcom/swmansion/rnscreens/ScreenStackFragmentWrapper;", "Lcom/swmansion/rnscreens/Screen;", "screenView", "<init>", "(Lcom/swmansion/rnscreens/Screen;)V", "()V", "", "g0", "Landroid/animation/Animator;", "X", "()Landroid/animation/Animator;", "Y", "Lcom/google/android/material/bottomsheet/BottomSheetBehavior;", "W", "()Lcom/google/android/material/bottomsheet/BottomSheetBehavior;", "screen", "", "n0", "(Lcom/swmansion/rnscreens/Screen;)Ljava/lang/Integer;", "U", "", "s0", "()Z", "Landroid/view/Menu;", "menu", "t0", "(Landroid/view/Menu;)V", "Landroid/view/View;", "b0", "()Landroid/view/View;", "Lpn/b;", "sheetTransitionCoordinator", "Q", "(Lpn/b;)V", "Landroidx/core/view/WindowInsetsCompat;", "insetsCompat", "f0", "(Landroidx/core/view/WindowInsetsCompat;)V", "forceCreation", "Lpn/g;", "k0", "(Z)Lpn/g;", "Lpn/o;", "m0", "()Lpn/o;", "i", "i0", "Landroidx/appcompat/widget/Toolbar;", "toolbar", "p0", "(Landroidx/appcompat/widget/Toolbar;)V", ViewProps.HIDDEN, "q0", "(Z)V", "translucent", "r0", "m", "I", "a0", "Landroid/os/Bundle;", "savedInstanceState", "onCreate", "(Landroid/os/Bundle;)V", "Landroid/view/LayoutInflater;", "inflater", "Landroid/view/ViewGroup;", "container", "onCreateView", "(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Landroid/os/Bundle;)Landroid/view/View;", "view", "onViewCreated", "(Landroid/view/View;Landroid/os/Bundle;)V", "transit", "enter", "nextAnim", "Landroid/view/animation/Animation;", "onCreateAnimation", "(IZI)Landroid/view/animation/Animation;", "onCreateAnimator", "(IZI)Landroid/animation/Animator;", "onStart", "onStop", "onPrepareOptionsMenu", "Landroid/view/MenuInflater;", "onCreateOptionsMenu", "(Landroid/view/Menu;Landroid/view/MenuInflater;)V", "V", "Z", "Lpn/c;", "j0", "()Lpn/c;", "Lcom/swmansion/rnscreens/a;", "t", "Lcom/swmansion/rnscreens/a;", "appBarLayout", "u", "Landroidx/appcompat/widget/Toolbar;", "v", "isToolbarShadowHidden", "w", "isToolbarTranslucent", "x", "Lpn/b;", "y", "Landroid/view/View;", "lastFocusedChild", "Lcom/swmansion/rnscreens/d;", "z", "Lcom/swmansion/rnscreens/d;", "d0", "()Lcom/swmansion/rnscreens/d;", "setSearchView", "(Lcom/swmansion/rnscreens/d;)V", "searchView", "Lkotlin/Function1;", "A", "Lkotlin/jvm/functions/Function1;", "getOnSearchViewCreate", "()Lkotlin/jvm/functions/Function1;", "o0", "(Lkotlin/jvm/functions/Function1;)V", "onSearchViewCreate", "Lao/d;", "B", "Lao/d;", "coordinatorLayout", "C", "Lpn/g;", "dimmingDelegate", "D", "Lpn/o;", "e0", "setSheetDelegate$react_native_screens_release", "(Lpn/o;)V", "sheetDelegate", "E", "Lpn/c;", "getBottomSheetWindowInsetListenerChain$react_native_screens_release", "setBottomSheetWindowInsetListenerChain$react_native_screens_release", "(Lpn/c;)V", "bottomSheetWindowInsetListenerChain", "F", "Landroidx/core/view/WindowInsetsCompat;", "lastInsetsCompat", "Lcom/swmansion/rnscreens/ScreenStack;", "c0", "()Lcom/swmansion/rnscreens/ScreenStack;", "screenStack", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nScreenStackFragment.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ScreenStackFragment.kt\ncom/swmansion/rnscreens/ScreenStackFragment\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,564:1\n1#2:565\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r0 extends b0 implements ScreenStackFragmentWrapper {
    private Function1 A;
    private ao.d B;
    private pn.g C;
    private pn.o D;
    private pn.c E;
    private WindowInsetsCompat F;

    /* renamed from: t  reason: collision with root package name */
    private com.swmansion.rnscreens.a f19336t;

    /* renamed from: u  reason: collision with root package name */
    private Toolbar f19337u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f19338v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f19339w;

    /* renamed from: x  reason: collision with root package name */
    private pn.b f19340x;

    /* renamed from: y  reason: collision with root package name */
    private View f19341y;

    /* renamed from: z  reason: collision with root package name */
    private d f19342z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends y0.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ pn.o f19343d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ r0 f19344e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(pn.o oVar, r0 r0Var) {
            super(0);
            this.f19343d = oVar;
            this.f19344e = r0Var;
        }

        @Override // androidx.core.view.y0.b
        public void onEnd(androidx.core.view.y0 animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            super.onEnd(animation);
            this.f19344e.h().onSheetYTranslationChanged$react_native_screens_release();
        }

        @Override // androidx.core.view.y0.b
        public WindowInsetsCompat onProgress(WindowInsetsCompat insets, List runningAnimations) {
            Intrinsics.checkNotNullParameter(insets, "insets");
            Intrinsics.checkNotNullParameter(runningAnimations, "runningAnimations");
            if (Build.VERSION.SDK_INT >= 30) {
                this.f19343d.K(insets);
            }
            return insets;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r0(Screen screenView) {
        super(screenView);
        Intrinsics.checkNotNullParameter(screenView, "screenView");
    }

    private final void Q(final pn.b bVar) {
        final ScreenContainer container = h().getContainer();
        if (container != null) {
            if (Build.VERSION.SDK_INT >= 30) {
                container.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() { // from class: com.swmansion.rnscreens.o0
                    @Override // android.view.View.OnApplyWindowInsetsListener
                    public final WindowInsets onApplyWindowInsets(View view, WindowInsets windowInsets) {
                        WindowInsets R;
                        R = r0.R(ScreenContainer.this, this, view, windowInsets);
                        return R;
                    }
                });
            } else {
                j0().b(new androidx.core.view.w() { // from class: com.swmansion.rnscreens.p0
                    @Override // androidx.core.view.w
                    public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                        WindowInsetsCompat S;
                        S = r0.S(r0.this, view, windowInsetsCompat);
                        return S;
                    }
                });
            }
        }
        ScreenContainer container2 = h().getContainer();
        if (container2 != null) {
            container2.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.swmansion.rnscreens.q0
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
                    r0.T(pn.b.this, this, view, i10, i11, i12, i13, i14, i15, i16, i17);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsets R(ScreenContainer screenContainer, r0 r0Var, View view, WindowInsets insets) {
        Intrinsics.checkNotNullParameter(view, "<unused var>");
        Intrinsics.checkNotNullParameter(insets, "insets");
        WindowInsetsCompat D = WindowInsetsCompat.D(insets, screenContainer);
        Intrinsics.checkNotNullExpressionValue(D, "toWindowInsetsCompat(...)");
        r0Var.f0(D);
        return insets;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final WindowInsetsCompat S(r0 r0Var, View view, WindowInsetsCompat windowInsets) {
        Intrinsics.checkNotNullParameter(view, "<unused var>");
        Intrinsics.checkNotNullParameter(windowInsets, "windowInsets");
        r0Var.f0(windowInsets);
        return windowInsets;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void T(pn.b bVar, r0 r0Var, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        bVar.b(r0Var.h());
    }

    private final void U(Screen screen) {
        float max = Math.max(PixelUtil.toPixelFromDIP(screen.getSheetCornerRadius()), 0.0f);
        l.b bVar = new l.b();
        int i10 = 0;
        bVar.A(0, max);
        bVar.F(0, max);
        th.l m10 = bVar.m();
        Intrinsics.checkNotNullExpressionValue(m10, "build(...)");
        th.h hVar = new th.h(m10);
        Integer n02 = n0(screen);
        if (n02 != null) {
            i10 = n02.intValue();
        }
        hVar.setTint(i10);
        screen.setBackground(hVar);
    }

    private final BottomSheetBehavior W() {
        return new BottomSheetBehavior();
    }

    private final Animator X() {
        pn.o m02 = m0();
        ao.d dVar = null;
        pn.g l02 = l0(this, false, 1, null);
        Screen h10 = h();
        ao.d dVar2 = this.B;
        if (dVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
        } else {
            dVar = dVar2;
        }
        return m02.t(new o.c(this, h10, dVar, l02));
    }

    private final Animator Y() {
        pn.o m02 = m0();
        ao.d dVar = null;
        pn.g l02 = l0(this, false, 1, null);
        Screen h10 = h();
        ao.d dVar2 = this.B;
        if (dVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
        } else {
            dVar = dVar2;
        }
        return m02.u(new o.c(this, h10, dVar, l02));
    }

    private final View b0() {
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

    private final ScreenStack c0() {
        ScreenContainer container = h().getContainer();
        if (container instanceof ScreenStack) {
            return (ScreenStack) container;
        }
        throw new IllegalStateException("ScreenStackFragment added into a non-stack container");
    }

    private final void f0(WindowInsetsCompat windowInsetsCompat) {
        if (Intrinsics.areEqual(this.F, windowInsetsCompat)) {
            return;
        }
        this.F = windowInsetsCompat;
        pn.o m02 = m0();
        BottomSheetBehavior<Screen> sheetBehavior = h().getSheetBehavior();
        Intrinsics.checkNotNull(sheetBehavior);
        m02.T(sheetBehavior);
        ScreenContainer container = h().getContainer();
        pn.b bVar = null;
        if (container != null) {
            ao.d dVar = this.B;
            if (dVar == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar = null;
            }
            dVar.forceLayout();
            ao.d dVar2 = this.B;
            if (dVar2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar2 = null;
            }
            dVar2.measure(View.MeasureSpec.makeMeasureSpec(container.getWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(container.getHeight(), 1073741824));
            ao.d dVar3 = this.B;
            if (dVar3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar3 = null;
            }
            dVar3.layout(0, 0, container.getWidth(), container.getHeight());
        }
        h().onBottomSheetBehaviorDidLayout$react_native_screens_release(true);
        pn.b bVar2 = this.f19340x;
        if (bVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("sheetTransitionCoordinator");
        } else {
            bVar = bVar2;
        }
        bVar.a(h());
    }

    private final void g0() {
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
    public static final WindowInsetsCompat h0(pn.o oVar, View view, WindowInsetsCompat windowInsets) {
        Intrinsics.checkNotNullParameter(view, "<unused var>");
        Intrinsics.checkNotNullParameter(windowInsets, "windowInsets");
        oVar.K(windowInsets);
        return windowInsets;
    }

    private final pn.g k0(boolean z10) {
        pn.g gVar = this.C;
        if (gVar == null || z10) {
            if (gVar != null) {
                gVar.f(h().getSheetBehavior());
            }
            this.C = new pn.g(h().getReactContext(), h());
        }
        pn.g gVar2 = this.C;
        Intrinsics.checkNotNull(gVar2);
        return gVar2;
    }

    static /* synthetic */ pn.g l0(r0 r0Var, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        return r0Var.k0(z10);
    }

    private final pn.o m0() {
        if (this.D == null) {
            this.D = new pn.o(h());
        }
        pn.o oVar = this.D;
        Intrinsics.checkNotNull(oVar);
        return oVar;
    }

    private final Integer n0(Screen screen) {
        ColorDrawable colorDrawable;
        th.h hVar;
        Integer num;
        ColorStateList L;
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
            if (background2 instanceof th.h) {
                hVar = (th.h) background2;
            } else {
                hVar = null;
            }
            if (hVar != null && (L = hVar.L()) != null) {
                num = Integer.valueOf(L.getDefaultColor());
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
        return co.i.a(contentWrapper);
    }

    private final boolean s0() {
        int i10;
        ScreenStackHeaderConfig headerConfig = h().getHeaderConfig();
        if (headerConfig != null) {
            i10 = headerConfig.getConfigSubviewsCount();
        } else {
            i10 = 0;
        }
        if (headerConfig != null && i10 > 0) {
            for (int i11 = 0; i11 < i10; i11++) {
                if (headerConfig.g(i11).getType() == v0.a.f19399p) {
                    return true;
                }
            }
        }
        return false;
    }

    private final void t0(Menu menu) {
        menu.clear();
        if (s0()) {
            Context context = getContext();
            if (this.f19342z == null && context != null) {
                d dVar = new d(context, this);
                this.f19342z = dVar;
                Function1 function1 = this.A;
                if (function1 != null) {
                    function1.invoke(dVar);
                }
            }
            MenuItem add = menu.add("");
            add.setShowAsAction(2);
            add.setActionView(this.f19342z);
        }
    }

    @Override // com.swmansion.rnscreens.b0
    public void I() {
        super.I();
        g0();
        h().endRemovalTransition();
    }

    public boolean V() {
        ScreenContainer container = h().getContainer();
        if (container instanceof ScreenStack) {
            if (Intrinsics.areEqual(((ScreenStack) container).getRootScreen(), h())) {
                Fragment parentFragment = getParentFragment();
                if (parentFragment instanceof r0) {
                    return ((r0) parentFragment).V();
                }
                return false;
            }
            return true;
        }
        throw new IllegalStateException("ScreenStackFragment added into a non-stack container");
    }

    public void Z() {
        c0().dismiss(this);
    }

    public final void a0() {
        if (!isRemoving() || !isDetached()) {
            ThemedReactContext reactContext = h().getReactContext();
            int surfaceId = UIManagerHelper.getSurfaceId(reactContext);
            EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag(reactContext, h().getId());
            if (eventDispatcherForReactTag != null) {
                eventDispatcherForReactTag.dispatchEvent(new qn.h(surfaceId, h().getId()));
            }
        }
    }

    public final d d0() {
        return this.f19342z;
    }

    public final pn.o e0() {
        return this.D;
    }

    @Override // com.swmansion.rnscreens.b0, com.swmansion.rnscreens.ScreenFragmentWrapper
    public boolean i() {
        return h().isTranslucent();
    }

    public void i0() {
        Toolbar toolbar;
        com.swmansion.rnscreens.a aVar = this.f19336t;
        if (aVar != null && (toolbar = this.f19337u) != null && toolbar.getParent() == aVar) {
            aVar.removeView(toolbar);
        }
        this.f19337u = null;
    }

    public final pn.c j0() {
        if (this.E == null) {
            this.E = new pn.c();
        }
        pn.c cVar = this.E;
        Intrinsics.checkNotNull(cVar);
        return cVar;
    }

    @Override // com.swmansion.rnscreens.b0, com.swmansion.rnscreens.ScreenFragmentWrapper
    public void m() {
        super.m();
        ScreenStackHeaderConfig headerConfig = h().getHeaderConfig();
        if (headerConfig != null) {
            headerConfig.l();
        }
    }

    public final void o0(Function1 function1) {
        this.A = function1;
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
        if (!pn.q.d(h())) {
            return null;
        }
        if (z10) {
            return X();
        }
        return Y();
    }

    @Override // androidx.fragment.app.Fragment
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        Intrinsics.checkNotNullParameter(menu, "menu");
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        t0(menu);
        super.onCreateOptionsMenu(menu, inflater);
    }

    @Override // com.swmansion.rnscreens.b0, androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater inflater, ViewGroup viewGroup, Bundle bundle) {
        CoordinatorLayout.c scrollingViewBehavior;
        com.swmansion.rnscreens.a aVar;
        com.swmansion.rnscreens.a aVar2;
        com.swmansion.rnscreens.a aVar3;
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        Context requireContext = requireContext();
        Intrinsics.checkNotNullExpressionValue(requireContext, "requireContext(...)");
        this.B = new ao.d(requireContext, this);
        Screen h10 = h();
        CoordinatorLayout.f fVar = new CoordinatorLayout.f(-1, -1);
        if (pn.q.d(h())) {
            scrollingViewBehavior = W();
        } else if (this.f19339w) {
            scrollingViewBehavior = null;
        } else {
            scrollingViewBehavior = new AppBarLayout.ScrollingViewBehavior();
        }
        fVar.o(scrollingViewBehavior);
        h10.setLayoutParams(fVar);
        ao.d dVar = this.B;
        if (dVar == null) {
            Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
            dVar = null;
        }
        dVar.addView(rn.c.c(h()));
        if (!pn.q.d(h())) {
            Context context = getContext();
            if (context != null) {
                aVar = new com.swmansion.rnscreens.a(context);
                aVar.setBackgroundColor(0);
                aVar.setLayoutParams(new AppBarLayout.d(-1, -2));
            } else {
                aVar = null;
            }
            this.f19336t = aVar;
            ao.d dVar2 = this.B;
            if (dVar2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar2 = null;
            }
            dVar2.addView(this.f19336t);
            if (this.f19338v && (aVar3 = this.f19336t) != null) {
                aVar3.setTargetElevation(0.0f);
            }
            Toolbar toolbar = this.f19337u;
            if (toolbar != null && (aVar2 = this.f19336t) != null) {
                aVar2.addView(rn.c.c(toolbar));
            }
            setHasOptionsMenu(true);
        } else {
            h().setClipToOutline(true);
            U(h());
            h().setElevation(h().getSheetElevation());
            final pn.o m02 = m0();
            BottomSheetBehavior<Screen> sheetBehavior = h().getSheetBehavior();
            Intrinsics.checkNotNull(sheetBehavior);
            pn.o.q(m02, sheetBehavior, null, 0, 6, null);
            pn.g k02 = k0(true);
            Screen h11 = h();
            ao.d dVar3 = this.B;
            if (dVar3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar3 = null;
            }
            k02.h(h11, dVar3);
            Screen h12 = h();
            BottomSheetBehavior<Screen> sheetBehavior2 = h().getSheetBehavior();
            Intrinsics.checkNotNull(sheetBehavior2);
            k02.g(h12, sheetBehavior2);
            if (!h().getSheetShouldOverflowTopInset()) {
                pn.b bVar = new pn.b();
                this.f19340x = bVar;
                Q(bVar);
            }
            ScreenContainer container = h().getContainer();
            Intrinsics.checkNotNull(container);
            ao.d dVar4 = this.B;
            if (dVar4 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar4 = null;
            }
            dVar4.measure(View.MeasureSpec.makeMeasureSpec(container.getWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(container.getHeight(), 1073741824));
            ao.d dVar5 = this.B;
            if (dVar5 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("coordinatorLayout");
                dVar5 = null;
            }
            dVar5.layout(0, 0, container.getWidth(), container.getHeight());
            if (Build.VERSION.SDK_INT < 30) {
                pn.c j02 = j0();
                j02.b(new androidx.core.view.w() { // from class: com.swmansion.rnscreens.n0
                    @Override // androidx.core.view.w
                    public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                        WindowInsetsCompat h02;
                        h02 = r0.h0(pn.o.this, view, windowInsetsCompat);
                        return h02;
                    }
                });
                androidx.core.view.i0.x0(h(), j02);
            }
            androidx.core.view.i0.E0(h(), new a(m02, this));
        }
        ao.d dVar6 = this.B;
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
            t0(menu);
        }
        super.onPrepareOptionsMenu(menu);
    }

    @Override // androidx.fragment.app.Fragment
    public void onStart() {
        View view = this.f19341y;
        if (view != null) {
            view.requestFocus();
        }
        super.onStart();
    }

    @Override // androidx.fragment.app.Fragment
    public void onStop() {
        if (co.b.f8375a.a(getContext())) {
            this.f19341y = b0();
        }
        super.onStop();
    }

    @Override // androidx.fragment.app.Fragment
    public void onViewCreated(View view, Bundle bundle) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onViewCreated(view, bundle);
    }

    public void p0(Toolbar toolbar) {
        Intrinsics.checkNotNullParameter(toolbar, "toolbar");
        com.swmansion.rnscreens.a aVar = this.f19336t;
        if (aVar != null) {
            aVar.addView(toolbar);
        }
        AppBarLayout.d dVar = new AppBarLayout.d(-1, -2);
        dVar.g(0);
        toolbar.setLayoutParams(dVar);
        this.f19337u = toolbar;
    }

    public void q0(boolean z10) {
        float pixelFromDIP;
        if (this.f19338v != z10) {
            com.swmansion.rnscreens.a aVar = this.f19336t;
            if (aVar != null) {
                if (z10) {
                    pixelFromDIP = 0.0f;
                } else {
                    pixelFromDIP = PixelUtil.toPixelFromDIP(4.0f);
                }
                aVar.setElevation(pixelFromDIP);
            }
            com.swmansion.rnscreens.a aVar2 = this.f19336t;
            if (aVar2 != null) {
                aVar2.setStateListAnimator(null);
            }
            this.f19338v = z10;
        }
    }

    public void r0(boolean z10) {
        AppBarLayout.ScrollingViewBehavior scrollingViewBehavior;
        if (this.f19339w != z10) {
            ViewGroup.LayoutParams layoutParams = h().getLayoutParams();
            Intrinsics.checkNotNull(layoutParams, "null cannot be cast to non-null type androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams");
            CoordinatorLayout.f fVar = (CoordinatorLayout.f) layoutParams;
            if (z10) {
                scrollingViewBehavior = null;
            } else {
                scrollingViewBehavior = new AppBarLayout.ScrollingViewBehavior();
            }
            fVar.o(scrollingViewBehavior);
            this.f19339w = z10;
        }
    }

    public r0() {
        throw new IllegalStateException("ScreenStack fragments should never be restored. Follow instructions from https://github.com/software-mansion/react-native-screens/issues/17#issuecomment-424704067 to properly configure your main activity.");
    }
}
