package com.discord.chat.presentation.message.view.botuikit.components;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.chat.bridge.botuikit.ActionComponentState;
import com.discord.chat.bridge.botuikit.ButtonComponent;
import com.discord.chat.bridge.botuikit.ButtonStyle;
import com.discord.chat.bridge.botuikit.ComponentEmoji;
import com.discord.chat.databinding.MessageComponentButtonViewBinding;
import com.discord.chat.presentation.message.view.botuikit.ComponentContext;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.chat.presentation.message.view.botuikit.ComponentView;
import com.discord.chat.presentation.message.view.botuikit.ComponentViewKt;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.progress_dots.ProgressDots;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.theme.R;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import com.google.android.flexbox.FlexboxLayout;
import com.google.android.material.button.MaterialButton;
import com.google.android.material.textview.MaterialTextView;
import ir.p;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KClass;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u008a\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 82\u00020\u00012\b\u0012\u0004\u0012\u00020\u00030\u0002:\u00018B'\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ\u000e\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\u00030 H\u0016J \u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u00032\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'H\u0016J\u0018\u0010(\u001a\u00020\"2\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u0003H\u0002J\"\u0010,\u001a\u00020\"2\u0006\u0010-\u001a\u00020.2\b\u0010/\u001a\u0004\u0018\u00010\u001a2\u0006\u00100\u001a\u00020\u001eH\u0002J\u0018\u00101\u001a\u00020\"2\u0006\u00102\u001a\u0002032\u0006\u00104\u001a\u00020\u0018H\u0002J\u0010\u00105\u001a\u00020\"2\u0006\u00106\u001a\u000207H\u0002R\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u001b\u0010\u0010\u001a\u00020\u00118BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0012\u0010\u0013R\u0010\u0010\u0016\u001a\u0004\u0018\u00010\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0018X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0019\u001a\u0004\u0018\u00010\u001aX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u001b\u001a\u0004\u0018\u00010\u001cX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u001d\u001a\u00020\u001eX\u0082\u000e¢\u0006\u0002\n\u0000¨\u00069"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/components/ButtonComponentView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentView;", "Lcom/discord/chat/bridge/botuikit/ButtonComponent;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/chat/databinding/MessageComponentButtonViewBinding;", "getBinding", "()Lcom/discord/chat/databinding/MessageComponentButtonViewBinding;", "progressDots", "Lcom/discord/progress_dots/ProgressDots;", "getProgressDots", "()Lcom/discord/progress_dots/ProgressDots;", "progressDots$delegate", "Lkotlin/Lazy;", "currentComponent", "currentStyle", "Lcom/discord/chat/bridge/botuikit/ButtonStyle;", "currentEmoji", "Lcom/discord/chat/bridge/botuikit/ComponentEmoji;", "currentLabel", "", "currentIsLoading", "", "getComponentType", "Lkotlin/reflect/KClass;", "configure", "", "component", "componentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "componentContext", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;", "configureLabelPadding", "label", "Landroid/widget/TextView;", "messageComponent", "configureEmoji", "emojiView", "Lcom/facebook/drawee/span/SimpleDraweeSpanTextView;", "emoji", "isLoading", "configureStyle", "button", "Landroid/widget/Button;", "style", "configureLinkIcon", "icon", "Lcom/facebook/drawee/view/SimpleDraweeView;", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nButtonComponentView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ButtonComponentView.kt\ncom/discord/chat/presentation/message/view/botuikit/components/ButtonComponentView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,218:1\n257#2,2:219\n278#2,2:221\n257#2,2:223\n278#2,2:225\n*S KotlinDebug\n*F\n+ 1 ButtonComponentView.kt\ncom/discord/chat/presentation/message/view/botuikit/components/ButtonComponentView\n*L\n94#1:219,2\n98#1:221,2\n119#1:223,2\n160#1:225,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ButtonComponentView extends ConstraintLayout implements ComponentView<ButtonComponent> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final MessageComponentButtonViewBinding binding;
    private ButtonComponent currentComponent;
    private ComponentEmoji currentEmoji;
    private boolean currentIsLoading;
    private String currentLabel;
    @NotNull
    private ButtonStyle currentStyle;
    @NotNull
    private final Lazy progressDots$delegate;

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/components/ButtonComponentView$Companion;", "", "<init>", "()V", "inflateComponent", "Lcom/discord/chat/presentation/message/view/botuikit/components/ButtonComponentView;", "context", "Landroid/content/Context;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final ButtonComponentView inflateComponent(@NotNull Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            return new ButtonComponentView(context, null, 0, 6, null);
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[ButtonStyle.values().length];
            try {
                iArr[ButtonStyle.UNKNOWN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ButtonStyle.PRIMARY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[ButtonStyle.SECONDARY.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[ButtonStyle.LINK.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[ButtonStyle.DANGER.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[ButtonStyle.SUCCESS.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[ButtonStyle.PREMIUM.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ButtonComponentView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configure$lambda$2(ButtonComponent buttonComponent, ComponentContext componentContext, View view) {
        if (buttonComponent.getUrl() != null) {
            componentContext.getComponentActionEventHandlers().getOnTapButtonLinkComponent().invoke(buttonComponent.getUrl());
        } else if (buttonComponent.getCustomId() == null && buttonComponent.getStyle() != ButtonStyle.PREMIUM) {
        } else {
            componentContext.getComponentActionEventHandlers().getOnTapButtonActionComponent().invoke(buttonComponent.getId());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configure$lambda$3(View view) {
    }

    private final void configureEmoji(SimpleDraweeSpanTextView simpleDraweeSpanTextView, ComponentEmoji componentEmoji, boolean z10) {
        if (Intrinsics.areEqual(componentEmoji, this.currentEmoji) && z10 == this.currentIsLoading) {
            return;
        }
        this.currentEmoji = componentEmoji;
        if (componentEmoji != null && z10) {
            simpleDraweeSpanTextView.setVisibility(4);
        } else {
            ComponentViewKt.setEmojiOrHide(simpleDraweeSpanTextView, componentEmoji);
        }
    }

    private final void configureLabelPadding(TextView textView, ButtonComponent buttonComponent) {
        boolean hasEmoji;
        int dpToPx;
        boolean hasIcon;
        int dpToPx2;
        boolean hasEmoji2;
        int dpToPx3;
        boolean hasIcon2;
        ButtonComponent buttonComponent2;
        boolean hasEmoji3;
        boolean hasEmoji4;
        ButtonComponent buttonComponent3;
        boolean hasIcon3;
        boolean hasIcon4;
        if (Intrinsics.areEqual(this.currentLabel, buttonComponent.getLabel()) && (buttonComponent2 = this.currentComponent) != null) {
            hasEmoji3 = ButtonComponentViewKt.hasEmoji(buttonComponent);
            hasEmoji4 = ButtonComponentViewKt.hasEmoji(buttonComponent2);
            if (hasEmoji3 == hasEmoji4 && (buttonComponent3 = this.currentComponent) != null) {
                hasIcon3 = ButtonComponentViewKt.hasIcon(buttonComponent);
                hasIcon4 = ButtonComponentViewKt.hasIcon(buttonComponent3);
                if (hasIcon3 == hasIcon4) {
                    return;
                }
            }
        }
        this.currentLabel = buttonComponent.getLabel();
        if (buttonComponent.getLabel() == null) {
            hasEmoji2 = ButtonComponentViewKt.hasEmoji(buttonComponent);
            if (hasEmoji2) {
                hasIcon2 = ButtonComponentViewKt.hasIcon(buttonComponent);
                if (hasIcon2) {
                    dpToPx3 = SizeUtilsKt.getDpToPx(8);
                    textView.setPadding(0, 0, dpToPx3, 0);
                    return;
                }
            }
            dpToPx3 = SizeUtilsKt.getDpToPx(16);
            textView.setPadding(0, 0, dpToPx3, 0);
            return;
        }
        hasEmoji = ButtonComponentViewKt.hasEmoji(buttonComponent);
        if (hasEmoji) {
            dpToPx = SizeUtilsKt.getDpToPx(8);
        } else {
            dpToPx = SizeUtilsKt.getDpToPx(16);
        }
        hasIcon = ButtonComponentViewKt.hasIcon(buttonComponent);
        if (hasIcon) {
            dpToPx2 = SizeUtilsKt.getDpToPx(8);
        } else {
            dpToPx2 = SizeUtilsKt.getDpToPx(16);
        }
        textView.setPadding(dpToPx, 0, dpToPx2, 0);
    }

    private final void configureLinkIcon(SimpleDraweeView simpleDraweeView) {
        ReactAssetUtilsKt.setReactAsset(simpleDraweeView, ReactAsset.Launch);
        ColorUtilsKt.setTintColor(simpleDraweeView, (Integer) (-1));
    }

    private final void configureStyle(Button button, ButtonStyle buttonStyle) {
        if (this.currentStyle != buttonStyle) {
            switch (WhenMappings.$EnumSwitchMapping$0[buttonStyle.ordinal()]) {
                case 1:
                    ButtonComponentViewKt.setSecondaryColor(button);
                    return;
                case 2:
                    ButtonComponentViewKt.setBrandColor(button);
                    return;
                case 3:
                    ButtonComponentViewKt.setSecondaryColor(button);
                    return;
                case 4:
                    ButtonComponentViewKt.setSecondaryColor(button);
                    return;
                case 5:
                    ButtonComponentViewKt.setDangerColor(button);
                    return;
                case 6:
                    ButtonComponentViewKt.setSuccessColor(button);
                    return;
                case 7:
                    ButtonComponentViewKt.setBrandColor(button);
                    return;
                default:
                    throw new p();
            }
        }
    }

    private final ProgressDots getProgressDots() {
        return (ProgressDots) this.progressDots$delegate.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ProgressDots progressDots_delegate$lambda$0(ButtonComponentView buttonComponentView) {
        View inflate = buttonComponentView.binding.loadingDots.inflate();
        Intrinsics.checkNotNull(inflate, "null cannot be cast to non-null type com.discord.progress_dots.ProgressDots");
        return (ProgressDots) inflate;
    }

    @NotNull
    public final MessageComponentButtonViewBinding getBinding() {
        return this.binding;
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    @NotNull
    public KClass getComponentType() {
        return Reflection.getOrCreateKotlinClass(ButtonComponent.class);
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    public void onRecycle(@NotNull ComponentProvider componentProvider) {
        ComponentView.DefaultImpls.onRecycle(this, componentProvider);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ButtonComponentView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    public void configure(@NotNull final ButtonComponent component, @NotNull ComponentProvider componentProvider, @NotNull final ComponentContext componentContext) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(componentProvider, "componentProvider");
        Intrinsics.checkNotNullParameter(componentContext, "componentContext");
        if (Intrinsics.areEqual(component, this.currentComponent)) {
            return;
        }
        boolean z10 = component.getState() == ActionComponentState.DISABLED || component.getDisabled();
        boolean z11 = component.getState() == ActionComponentState.LOADING;
        MaterialButton button = this.binding.button;
        Intrinsics.checkNotNullExpressionValue(button, "button");
        configureStyle(button, component.getStyle());
        SimpleDraweeSpanTextView emoji = this.binding.emoji;
        Intrinsics.checkNotNullExpressionValue(emoji, "emoji");
        configureEmoji(emoji, component.getEmoji(), z11);
        MaterialTextView label = this.binding.label;
        Intrinsics.checkNotNullExpressionValue(label, "label");
        configureLabelPadding(label, component);
        this.binding.label.setAlpha(z10 ? 0.5f : 1.0f);
        this.binding.emoji.setAlpha(z10 ? 0.3f : 1.0f);
        this.binding.linkIcon.setAlpha(z10 ? 0.3f : 1.0f);
        this.binding.button.setEnabled(!z10);
        SimpleDraweeView linkIcon = this.binding.linkIcon;
        Intrinsics.checkNotNullExpressionValue(linkIcon, "linkIcon");
        linkIcon.setVisibility(component.getStyle() == ButtonStyle.LINK ? 0 : 8);
        MaterialTextView materialTextView = this.binding.label;
        materialTextView.setText(component.getLabel());
        Intrinsics.checkNotNull(materialTextView);
        materialTextView.setVisibility(z11 ? 4 : 0);
        DiscordFontUtilsKt.setDiscordFont(materialTextView, DiscordFont.PrimaryMedium);
        materialTextView.setTextColor(ColorUtilsKt.getColorCompat(materialTextView, R.color.white));
        if (!z11) {
            MaterialButton button2 = this.binding.button;
            Intrinsics.checkNotNullExpressionValue(button2, "button");
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(button2, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.botuikit.components.b
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    ButtonComponentView.configure$lambda$2(ButtonComponent.this, componentContext, view);
                }
            }, 1, null);
        } else {
            MaterialButton button3 = this.binding.button;
            Intrinsics.checkNotNullExpressionValue(button3, "button");
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(button3, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.botuikit.components.c
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    ButtonComponentView.configure$lambda$3(view);
                }
            }, 1, null);
        }
        if (z11 != this.currentIsLoading) {
            getProgressDots().setVisibility(z11 ? 0 : 8);
        }
        this.currentIsLoading = z11;
    }

    public /* synthetic */ ButtonComponentView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ButtonComponentView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        MessageComponentButtonViewBinding inflate = MessageComponentButtonViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.progressDots$delegate = ir.l.b(new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.components.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ProgressDots progressDots_delegate$lambda$0;
                progressDots_delegate$lambda$0 = ButtonComponentView.progressDots_delegate$lambda$0(ButtonComponentView.this);
                return progressDots_delegate$lambda$0;
            }
        });
        this.currentStyle = ButtonStyle.UNKNOWN;
        FlexboxLayout.LayoutParams layoutParams = new FlexboxLayout.LayoutParams(-2, -2);
        layoutParams.b(0.0f);
        setLayoutParams(layoutParams);
        setMinWidth(SizeUtilsKt.getDpToPx(52));
        setMinimumWidth(getMinWidth());
        SimpleDraweeView linkIcon = inflate.linkIcon;
        Intrinsics.checkNotNullExpressionValue(linkIcon, "linkIcon");
        configureLinkIcon(linkIcon);
    }
}
