package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.ConstraintSet;
import androidx.transition.Transition;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.chat.bridge.spoiler.SpoilerConfig;
import com.discord.chat.bridge.spoiler.SpoilerManager;
import com.discord.chat.bridge.spoiler.SpoilerType;
import com.discord.chat.databinding.SpoilerViewBinding;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u0000 32\u00020\u0001:\u00013B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u001f\u0010\r\u001a\u00020\f2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\nH\u0002¢\u0006\u0004\b\r\u0010\u000eJ7\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\f0\u000f2\u0006\u0010\u000b\u001a\u00020\n2\u0012\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\f0\u000fH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J/\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\f0\u000f2\u0012\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\f0\u000fH\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u000f\u0010\u0015\u001a\u00020\fH\u0002¢\u0006\u0004\b\u0015\u0010\u0016J\u0017\u0010\u0019\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u0019\u0010\u001aJ\u001f\u0010\u001d\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u001c\u001a\u00020\u001bH\u0002¢\u0006\u0004\b\u001d\u0010\u001eJ\u0015\u0010 \u001a\u00020\f2\u0006\u0010\u001f\u001a\u00020\b¢\u0006\u0004\b \u0010!J\u0015\u0010\"\u001a\u00020\f2\u0006\u0010\u001f\u001a\u00020\b¢\u0006\u0004\b\"\u0010!J\r\u0010#\u001a\u00020\f¢\u0006\u0004\b#\u0010\u0016J\u0015\u0010$\u001a\u00020\f2\u0006\u0010\u001f\u001a\u00020\b¢\u0006\u0004\b$\u0010!J\u0015\u0010&\u001a\u00020\f2\u0006\u0010%\u001a\u00020\b¢\u0006\u0004\b&\u0010!J\r\u0010'\u001a\u00020\b¢\u0006\u0004\b'\u0010(J\u001f\u0010*\u001a\u00020\f2\b\u0010\u0018\u001a\u0004\u0018\u00010\u00172\u0006\u0010)\u001a\u00020\u001b¢\u0006\u0004\b*\u0010\u001eR\u0014\u0010,\u001a\u00020+8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b,\u0010-R\u0016\u0010'\u001a\u00020\b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b'\u0010.R\u001c\u00100\u001a\b\u0012\u0004\u0012\u00020\f0/8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b0\u00101R\u001c\u00102\u001a\b\u0012\u0004\u0012\u00020\f0/8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b2\u00101¨\u00064"}, d2 = {"Lcom/discord/chat/presentation/message/view/SpoilerView;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attributeSet", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "showImage", "Landroid/view/View;", "overlayView", "", "toggleContentVisibility", "(ZLandroid/view/View;)V", "Lkotlin/Function1;", "onTapObscureToggle", "onObscureToggleVisibilityClick", "(Landroid/view/View;Lkotlin/jvm/functions/Function1;)Lkotlin/jvm/functions/Function1;", "onObscureVerifyAgeClick", "(Lkotlin/jvm/functions/Function1;)Lkotlin/jvm/functions/Function1;", "resetOverlays", "()V", "Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "config", "configureSpoilerOverlay", "(Lcom/discord/chat/bridge/spoiler/SpoilerConfig;)V", "Landroid/view/ViewGroup;", "parent", "configureObscureOverlay", "(Lcom/discord/chat/bridge/spoiler/SpoilerConfig;Landroid/view/ViewGroup;)V", "isVisible", "setRevealButtonVisible", "(Z)V", "setOpaqueBackgroundVisible", "makeObscureHideButtonHidden", "setObscureLabelVisible", "isAwaitingScan", "handleObscureAwaitingScan", "isOverlayVisible", "()Z", "viewToBlur", "configure", "Lcom/discord/chat/databinding/SpoilerViewBinding;", "binding", "Lcom/discord/chat/databinding/SpoilerViewBinding;", "Z", "Lkotlin/Function0;", "onReveal", "Lkotlin/jvm/functions/Function0;", "onHide", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSpoilerView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SpoilerView.kt\ncom/discord/chat/presentation/message/view/SpoilerView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,182:1\n257#2,2:183\n257#2,2:185\n257#2,2:187\n257#2,2:189\n257#2,2:191\n257#2,2:193\n257#2,2:195\n*S KotlinDebug\n*F\n+ 1 SpoilerView.kt\ncom/discord/chat/presentation/message/view/SpoilerView\n*L\n60#1:183,2\n78#1:185,2\n79#1:187,2\n84#1:189,2\n106#1:191,2\n152#1:193,2\n155#1:195,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SpoilerView extends FrameLayout {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final SpoilerViewBinding binding;
    private boolean isOverlayVisible;
    @NotNull
    private Function0<Unit> onHide;
    @NotNull
    private Function0<Unit> onReveal;

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0004\u001a\u00020\u0005*\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b¨\u0006\t"}, d2 = {"Lcom/discord/chat/presentation/message/view/SpoilerView$Companion;", "", "<init>", "()V", "createAndAttachSpoilerView", "Lcom/discord/chat/presentation/message/view/SpoilerView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "radiusPx", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final SpoilerView createAndAttachSpoilerView(@NotNull ConstraintLayout constraintLayout, int i10) {
            Intrinsics.checkNotNullParameter(constraintLayout, "<this>");
            Context context = constraintLayout.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            SpoilerView spoilerView = new SpoilerView(context, null, 2, null);
            spoilerView.setId(View.generateViewId());
            ViewClippingUtilsKt.clipToRoundedRectangle(spoilerView, i10);
            spoilerView.setLayoutParams(new ConstraintLayout.LayoutParams(0, 0));
            constraintLayout.addView(spoilerView);
            ConstraintSet constraintSet = new ConstraintSet();
            constraintSet.f(constraintLayout);
            constraintSet.h(spoilerView.getId(), 6, 0, 6, 0);
            constraintSet.h(spoilerView.getId(), 7, 0, 7, 0);
            constraintSet.h(spoilerView.getId(), 3, 0, 3, 0);
            constraintSet.h(spoilerView.getId(), 4, 0, 4, 0);
            constraintSet.c(constraintLayout);
            return spoilerView;
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[SpoilerType.values().length];
            try {
                iArr[SpoilerType.OBSCURE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SpoilerView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void configureObscureOverlay(SpoilerConfig spoilerConfig, ViewGroup viewGroup) {
        final Function1<Boolean, Unit> onObscureToggleVisibilityClick;
        SpoilerAttributes attributes = spoilerConfig.getAttributes();
        View overlayView = this.binding.obscure.getOverlayView();
        if (Intrinsics.areEqual(attributes.getVerifyAge(), Boolean.TRUE)) {
            onObscureToggleVisibilityClick = onObscureVerifyAgeClick(spoilerConfig.getOnTapObscureToggle());
        } else {
            onObscureToggleVisibilityClick = onObscureToggleVisibilityClick(overlayView, spoilerConfig.getOnTapObscureToggle());
        }
        ObscureOverlayView obscure = this.binding.obscure;
        Intrinsics.checkNotNullExpressionValue(obscure, "obscure");
        obscure.setVisibility(0);
        ObscureOverlayView obscureOverlayView = this.binding.obscure;
        Function1<Context, String> label = attributes.getLabel();
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        String str = (String) label.invoke(context);
        Function1<Context, String> description = attributes.getDescription();
        Context context2 = getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        obscureOverlayView.configure(str, (String) description.invoke(context2), viewGroup, this.isOverlayVisible, new Function0() { // from class: com.discord.chat.presentation.message.view.f3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit configureObscureOverlay$lambda$6;
                configureObscureOverlay$lambda$6 = SpoilerView.configureObscureOverlay$lambda$6(Function1.this);
                return configureObscureOverlay$lambda$6;
            }
        }, new Function0() { // from class: com.discord.chat.presentation.message.view.g3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit configureObscureOverlay$lambda$7;
                configureObscureOverlay$lambda$7 = SpoilerView.configureObscureOverlay$lambda$7(Function1.this);
                return configureObscureOverlay$lambda$7;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureObscureOverlay$lambda$6(Function1 function1) {
        function1.invoke(Boolean.TRUE);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureObscureOverlay$lambda$7(Function1 function1) {
        function1.invoke(Boolean.FALSE);
        return Unit.f33282a;
    }

    private final void configureSpoilerOverlay(SpoilerConfig spoilerConfig) {
        final View overlayView = this.binding.spoiler.getOverlayView();
        SpoilerOverlayView spoiler = this.binding.spoiler;
        Intrinsics.checkNotNullExpressionValue(spoiler, "spoiler");
        spoiler.setVisibility(0);
        SpoilerOverlayView spoilerOverlayView = this.binding.spoiler;
        Function1<Context, String> label = spoilerConfig.getAttributes().getLabel();
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Function1<Context, String> description = spoilerConfig.getAttributes().getDescription();
        Context context2 = getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        spoilerOverlayView.configure((String) label.invoke(context), (String) description.invoke(context2), new Function0() { // from class: com.discord.chat.presentation.message.view.e3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit configureSpoilerOverlay$lambda$5;
                configureSpoilerOverlay$lambda$5 = SpoilerView.configureSpoilerOverlay$lambda$5(SpoilerView.this, overlayView);
                return configureSpoilerOverlay$lambda$5;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureSpoilerOverlay$lambda$5(SpoilerView spoilerView, View view) {
        spoilerView.toggleContentVisibility(true, view);
        return Unit.f33282a;
    }

    private final Function1<Boolean, Unit> onObscureToggleVisibilityClick(final View view, final Function1<? super Boolean, Unit> function1) {
        return new Function1() { // from class: com.discord.chat.presentation.message.view.i3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onObscureToggleVisibilityClick$lambda$3;
                onObscureToggleVisibilityClick$lambda$3 = SpoilerView.onObscureToggleVisibilityClick$lambda$3(SpoilerView.this, view, function1, ((Boolean) obj).booleanValue());
                return onObscureToggleVisibilityClick$lambda$3;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onObscureToggleVisibilityClick$lambda$3(SpoilerView spoilerView, View view, Function1 function1, boolean z10) {
        spoilerView.toggleContentVisibility(z10, view);
        function1.invoke(Boolean.valueOf(z10));
        return Unit.f33282a;
    }

    private final Function1<Boolean, Unit> onObscureVerifyAgeClick(final Function1<? super Boolean, Unit> function1) {
        return new Function1() { // from class: com.discord.chat.presentation.message.view.h3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onObscureVerifyAgeClick$lambda$4;
                onObscureVerifyAgeClick$lambda$4 = SpoilerView.onObscureVerifyAgeClick$lambda$4(Function1.this, ((Boolean) obj).booleanValue());
                return onObscureVerifyAgeClick$lambda$4;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onObscureVerifyAgeClick$lambda$4(Function1 function1, boolean z10) {
        function1.invoke(Boolean.valueOf(z10));
        return Unit.f33282a;
    }

    private final void resetOverlays() {
        SpoilerOverlayView spoiler = this.binding.spoiler;
        Intrinsics.checkNotNullExpressionValue(spoiler, "spoiler");
        spoiler.setVisibility(8);
        ObscureOverlayView obscure = this.binding.obscure;
        Intrinsics.checkNotNullExpressionValue(obscure, "obscure");
        obscure.setVisibility(8);
    }

    private final void toggleContentVisibility(final boolean z10, View view) {
        ViewParent viewParent;
        int i10;
        int i11;
        if (getParent().getParent() instanceof ViewGroup) {
            viewParent = getParent().getParent();
        } else if (getParent() instanceof ViewGroup) {
            viewParent = getParent();
        } else {
            viewParent = this;
        }
        Intrinsics.checkNotNull(viewParent, "null cannot be cast to non-null type android.view.ViewGroup");
        ViewGroup viewGroup = (ViewGroup) viewParent;
        if (z10) {
            i10 = 2;
        } else {
            i10 = 1;
        }
        androidx.transition.e eVar = new androidx.transition.e(i10);
        eVar.l0(150L);
        eVar.c(new androidx.transition.w() { // from class: com.discord.chat.presentation.message.view.SpoilerView$toggleContentVisibility$transition$1$1
            @Override // androidx.transition.Transition.h
            public /* bridge */ /* synthetic */ void onTransitionEnd(@NonNull Transition transition, boolean z11) {
                super.onTransitionEnd(transition, z11);
            }

            @Override // androidx.transition.Transition.h
            public /* bridge */ /* synthetic */ void onTransitionStart(@NonNull Transition transition, boolean z11) {
                super.onTransitionStart(transition, z11);
            }

            @Override // androidx.transition.w, androidx.transition.Transition.h
            public void onTransitionEnd(Transition transition) {
                Function0 function0;
                Function0 function02;
                Intrinsics.checkNotNullParameter(transition, "transition");
                if (z10) {
                    function02 = this.onReveal;
                    function02.invoke();
                    this.isOverlayVisible = false;
                    return;
                }
                function0 = this.onHide;
                function0.invoke();
                this.isOverlayVisible = true;
            }
        });
        androidx.transition.x.a(viewGroup, eVar);
        if (!z10) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        view.setVisibility(i11);
    }

    public final void configure(SpoilerConfig spoilerConfig, @NotNull ViewGroup viewToBlur) {
        Intrinsics.checkNotNullParameter(viewToBlur, "viewToBlur");
        if (spoilerConfig != null) {
            resetOverlays();
            this.isOverlayVisible = SpoilerManager.INSTANCE.m420isNotRevealedV2PEE7g(spoilerConfig.getAttributes().m409getIdentifierBq9X6Gg());
            if (WhenMappings.$EnumSwitchMapping$0[spoilerConfig.getAttributes().getType().ordinal()] == 1) {
                configureObscureOverlay(spoilerConfig, viewToBlur);
            } else {
                configureSpoilerOverlay(spoilerConfig);
            }
            this.onReveal = new SpoilerView$configure$1(spoilerConfig);
            this.onHide = new SpoilerView$configure$2(spoilerConfig);
            setVisibility(0);
            return;
        }
        this.isOverlayVisible = false;
        setVisibility(8);
    }

    public final void handleObscureAwaitingScan(boolean z10) {
        this.binding.obscure.handleObscureAwaitingScan(z10);
    }

    public final boolean isOverlayVisible() {
        return this.isOverlayVisible;
    }

    public final void makeObscureHideButtonHidden() {
        this.binding.obscure.makeHideButtonHidden();
    }

    public final void setObscureLabelVisible(boolean z10) {
        this.binding.obscure.setLabelVisible(z10);
    }

    public final void setOpaqueBackgroundVisible(boolean z10) {
        this.binding.obscure.setOpaqueBackgroundVisible(z10);
    }

    public final void setRevealButtonVisible(boolean z10) {
        this.binding.obscure.setRevealButtonVisible(z10);
    }

    public /* synthetic */ SpoilerView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SpoilerView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        SpoilerViewBinding inflate = SpoilerViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.onReveal = new Function0() { // from class: com.discord.chat.presentation.message.view.j3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33282a;
                return unit;
            }
        };
        this.onHide = new Function0() { // from class: com.discord.chat.presentation.message.view.k3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33282a;
                return unit;
            }
        };
    }
}
