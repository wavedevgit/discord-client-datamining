package com.discord.chat.presentation.message.view.botuikit.components;

import android.content.Context;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.net.Uri;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.chat.bridge.botuikit.ActionComponentState;
import com.discord.chat.bridge.botuikit.ComponentEmoji;
import com.discord.chat.bridge.botuikit.SearchableSelectItem;
import com.discord.chat.bridge.botuikit.SelectComponent;
import com.discord.chat.bridge.botuikit.SelectItem;
import com.discord.chat.bridge.botuikit.SelectOptionType;
import com.discord.chat.bridge.botuikit.StringSelectItem;
import com.discord.chat.databinding.MessageComponentSelectPillViewBinding;
import com.discord.chat.databinding.MessageComponentSelectViewBinding;
import com.discord.chat.presentation.message.view.botuikit.ComponentContext;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.chat.presentation.message.view.botuikit.ComponentView;
import com.discord.chat.presentation.message.view.botuikit.ComponentViewKt;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.image.fresco.postprocessors.PostProcessor;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.misc.utilities.view.ViewGroupUtilsKt;
import com.discord.progress_dots.ProgressDots;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.ripple.RippleUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.request.BasePostprocessor;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.ReactFontManager;
import com.google.android.flexbox.FlexboxLayout;
import com.google.android.material.textview.MaterialTextView;
import java.util.List;
import jr.p;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KClass;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0082\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 42\u00020\u00012\b\u0012\u0004\u0012\u00020\u00030\u0002:\u00014B'\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ \u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00032\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0016J\u0016\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00032\u0006\u0010\"\u001a\u00020#J\u0010\u0010$\u001a\u00020\u001e2\u0006\u0010\"\u001a\u00020#H\u0002J\u000e\u0010%\u001a\b\u0012\u0004\u0012\u00020\u00030&H\u0016J/\u0010'\u001a\u00020\u001e2\u0006\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020+2\b\u0010,\u001a\u0004\u0018\u00010\t2\u0006\u0010-\u001a\u00020\u001cH\u0002¢\u0006\u0002\u0010.J\u001a\u0010/\u001a\u00020\u001e*\u0002002\f\u00101\u001a\b\u0012\u0004\u0012\u00020302H\u0002R\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u001b\u0010\u0010\u001a\u00020\u00118BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0012\u0010\u0013R\u001b\u0010\u0016\u001a\u00020\u00178BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u001a\u0010\u0015\u001a\u0004\b\u0018\u0010\u0019R\u000e\u0010\u001b\u001a\u00020\u001cX\u0082\u000e¢\u0006\u0002\n\u0000¨\u00065"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/components/SelectComponentView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentView;", "Lcom/discord/chat/bridge/botuikit/SelectComponent;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/chat/databinding/MessageComponentSelectViewBinding;", "getBinding", "()Lcom/discord/chat/databinding/MessageComponentSelectViewBinding;", "progressDots", "Lcom/discord/progress_dots/ProgressDots;", "getProgressDots", "()Lcom/discord/progress_dots/ProgressDots;", "progressDots$delegate", "Lkotlin/Lazy;", "postProcessor", "Lcom/facebook/imagepipeline/request/BasePostprocessor;", "getPostProcessor", "()Lcom/facebook/imagepipeline/request/BasePostprocessor;", "postProcessor$delegate", "currentIsLoading", "", "configure", "", "component", "componentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "componentContext", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;", "configureWidth", "getComponentType", "Lkotlin/reflect/KClass;", "setImage", "view", "Lcom/facebook/drawee/span/SimpleDraweeSpanTextView;", "imageUrl", "", ViewProps.COLOR, "asCircle", "(Lcom/facebook/drawee/span/SimpleDraweeSpanTextView;Ljava/lang/String;Ljava/lang/Integer;Z)V", "setSelectedOptions", "Lcom/google/android/flexbox/FlexboxLayout;", "selectedItems", "", "Lcom/discord/chat/bridge/botuikit/SelectItem;", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSelectComponentView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SelectComponentView.kt\ncom/discord/chat/presentation/message/view/botuikit/components/SelectComponentView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 Uri.kt\nandroidx/core/net/UriKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,265:1\n176#2,2:266\n257#2,2:268\n257#2,2:270\n257#2,2:272\n257#2,2:274\n257#2,2:276\n257#2,2:278\n257#2,2:280\n257#2,2:282\n257#2,2:284\n257#2,2:286\n278#2,2:288\n257#2,2:290\n29#3:292\n1878#4,3:293\n*S KotlinDebug\n*F\n+ 1 SelectComponentView.kt\ncom/discord/chat/presentation/message/view/botuikit/components/SelectComponentView\n*L\n67#1:266,2\n103#1:268,2\n104#1:270,2\n125#1:272,2\n127#1:274,2\n134#1:276,2\n135#1:278,2\n136#1:280,2\n141#1:282,2\n142#1:284,2\n143#1:286,2\n151#1:288,2\n154#1:290,2\n207#1:292\n260#1:293,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SelectComponentView extends ConstraintLayout implements ComponentView<SelectComponent> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final MessageComponentSelectViewBinding binding;
    private boolean currentIsLoading;
    @NotNull
    private final Lazy postProcessor$delegate;
    @NotNull
    private final Lazy progressDots$delegate;

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/components/SelectComponentView$Companion;", "", "<init>", "()V", "inflateComponent", "Lcom/discord/chat/presentation/message/view/botuikit/components/SelectComponentView;", "context", "Landroid/content/Context;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final SelectComponentView inflateComponent(@NotNull Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            return new SelectComponentView(context, null, 0, 6, null);
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SelectComponentView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configure$lambda$3(ComponentContext componentContext, SelectComponent selectComponent, View view) {
        componentContext.getComponentActionEventHandlers().getOnTapSelectActionComponent().invoke(selectComponent.getId());
    }

    private final void configureWidth(ComponentContext componentContext) {
        if (!componentContext.isInModal() && componentContext.getWidthInfo().isLargeWidthRenderingMode()) {
            if (componentContext.isInContainerComponent()) {
                setMaxWidth(Integer.MAX_VALUE);
                setMinWidth(SizeUtilsKt.getDpToPx((int) ReactFontManager.TypefaceStyle.NORMAL));
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(-1, -2);
                layoutParams.weight = 1.0f;
                setLayoutParams(layoutParams);
                return;
            }
            setMaxWidth(SizeUtilsKt.getDpToPx((int) ReactFontManager.TypefaceStyle.NORMAL));
            setMinWidth(SizeUtilsKt.getDpToPx((int) ReactFontManager.TypefaceStyle.NORMAL));
            setLayoutParams(new LinearLayout.LayoutParams(SizeUtilsKt.getDpToPx((int) ReactFontManager.TypefaceStyle.NORMAL), -2));
            return;
        }
        setMaxWidth(Integer.MAX_VALUE);
        setMinWidth(0);
        setLayoutParams(new FrameLayout.LayoutParams(-1, -2));
    }

    private final BasePostprocessor getPostProcessor() {
        return (BasePostprocessor) this.postProcessor$delegate.getValue();
    }

    private final ProgressDots getProgressDots() {
        return (ProgressDots) this.progressDots$delegate.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final BasePostprocessor postProcessor_delegate$lambda$1() {
        return PostProcessor.Circle.INSTANCE.create();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ProgressDots progressDots_delegate$lambda$0(SelectComponentView selectComponentView) {
        View inflate = selectComponentView.binding.loadingDots.inflate();
        Intrinsics.checkNotNull(inflate, "null cannot be cast to non-null type com.discord.progress_dots.ProgressDots");
        return (ProgressDots) inflate;
    }

    private final void setImage(SimpleDraweeSpanTextView simpleDraweeSpanTextView, String str, Integer num, boolean z10) {
        DraweeSpanStringBuilder draweeSpanStringBuilder = new DraweeSpanStringBuilder();
        int dpToPx = SizeUtilsKt.getDpToPx(20);
        draweeSpanStringBuilder.append((char) 8203);
        ImageRequestBuilder I = ImageRequestBuilder.x(Uri.parse(str)).N(new ResizeOptions(dpToPx, dpToPx, 0.0f, 0.0f, 12, null)).I(ImageRequest.RequestLevel.FULL_FETCH);
        if (z10) {
            I.J(getPostProcessor());
        }
        com.facebook.drawee.controller.a build = ((PipelineDraweeControllerBuilder) e9.d.g().E(I.a())).build();
        Intrinsics.checkNotNullExpressionValue(build, "build(...)");
        GenericDraweeHierarchyBuilder w10 = GenericDraweeHierarchyBuilder.u(getContext().getResources()).w(ScalingUtils$ScaleType.f10666e);
        Intrinsics.checkNotNullExpressionValue(w10, "setActualImageScaleType(...)");
        if (num != null) {
            w10.v(new PorterDuffColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN));
        }
        draweeSpanStringBuilder.j(getContext(), w10.a(), build, 0, dpToPx, dpToPx, false, 1);
        simpleDraweeSpanTextView.setDraweeSpanStringBuilder(draweeSpanStringBuilder);
    }

    private final void setSelectedOptions(FlexboxLayout flexboxLayout, List<? extends SelectItem> list) {
        TextView textView;
        final LayoutInflater from = LayoutInflater.from(flexboxLayout.getContext());
        ViewGroupUtilsKt.setUpLayoutForList(flexboxLayout, list.size(), new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.components.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                View selectedOptions$lambda$5;
                selectedOptions$lambda$5 = SelectComponentView.setSelectedOptions$lambda$5(from);
                return selectedOptions$lambda$5;
            }
        });
        int i10 = 0;
        for (Object obj : list) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            SelectItem selectItem = (SelectItem) obj;
            View childAt = flexboxLayout.getChildAt(i10);
            if (childAt instanceof TextView) {
                textView = (TextView) childAt;
            } else {
                textView = null;
            }
            if (textView != null) {
                textView.setText(selectItem.getLabel());
            }
            i10 = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View setSelectedOptions$lambda$5(LayoutInflater layoutInflater) {
        MaterialTextView root = MessageComponentSelectPillViewBinding.inflate(layoutInflater).getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        DiscordFontUtilsKt.setDiscordFont(root, DiscordFont.PrimaryMedium);
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(root, ThemeManagerKt.getTheme().getMobileLegacyButtonSecondaryBackgroundDefault(), SizeUtilsKt.getDpToPx(4), null, 0, 12, null);
        root.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        return root;
    }

    @NotNull
    public final MessageComponentSelectViewBinding getBinding() {
        return this.binding;
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    @NotNull
    public KClass getComponentType() {
        return Reflection.getOrCreateKotlinClass(SelectComponent.class);
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    public void onRecycle(@NotNull ComponentProvider componentProvider) {
        ComponentView.DefaultImpls.onRecycle(this, componentProvider);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SelectComponentView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    public void configure(@NotNull SelectComponent component, @NotNull ComponentProvider componentProvider, @NotNull ComponentContext componentContext) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(componentProvider, "componentProvider");
        Intrinsics.checkNotNullParameter(componentContext, "componentContext");
        configure(component, componentContext);
    }

    public /* synthetic */ SelectComponentView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    public final void configure(@NotNull final SelectComponent component, @NotNull final ComponentContext componentContext) {
        ComponentEmoji iconEmoji;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(componentContext, "componentContext");
        String placeholder = component.getPlaceholder();
        configureWidth(componentContext);
        View root = this.binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        RippleUtilsKt.addRipple(root, true, SizeUtilsKt.getDpToPx(4));
        View root2 = this.binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        ViewBackgroundUtilsKt.setBackgroundRectangle(root2, ThemeManagerKt.getTheme().getBackgroundSurfaceHigh(), SizeUtilsKt.getDpToPx(4), Integer.valueOf(ThemeManagerKt.getTheme().getBackgroundBaseLowest()), SizeUtilsKt.getDpToPx(1));
        MaterialTextView selectComponentSelectionText = this.binding.selectComponentSelectionText;
        Intrinsics.checkNotNullExpressionValue(selectComponentSelectionText, "selectComponentSelectionText");
        DiscordFontUtilsKt.setDiscordFont(selectComponentSelectionText, DiscordFont.PrimaryMedium);
        SimpleDraweeView selectComponentChevron = this.binding.selectComponentChevron;
        Intrinsics.checkNotNullExpressionValue(selectComponentChevron, "selectComponentChevron");
        ReactAssetUtilsKt.setReactAsset(selectComponentChevron, ReactAsset.ArrowRight);
        List<SelectItem> selectedItems = component.getSelectedItems();
        boolean z10 = false;
        if (!selectedItems.isEmpty()) {
            if (component.getMaxValues() == 1) {
                MaterialTextView selectComponentSelectionText2 = this.binding.selectComponentSelectionText;
                Intrinsics.checkNotNullExpressionValue(selectComponentSelectionText2, "selectComponentSelectionText");
                selectComponentSelectionText2.setVisibility(0);
                FlexboxLayout selectComponentSelectionsRoot = this.binding.selectComponentSelectionsRoot;
                Intrinsics.checkNotNullExpressionValue(selectComponentSelectionsRoot, "selectComponentSelectionsRoot");
                selectComponentSelectionsRoot.setVisibility(8);
                this.binding.selectComponentSelectionText.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
                SelectItem selectItem = (SelectItem) CollectionsKt.firstOrNull(selectedItems);
                if (selectItem != null) {
                    this.binding.selectComponentSelectionText.setText(selectItem.getLabel());
                    if (selectItem instanceof StringSelectItem) {
                        iconEmoji = ((StringSelectItem) selectItem).getEmoji();
                    } else if (!(selectItem instanceof SearchableSelectItem)) {
                        throw new p();
                    } else {
                        iconEmoji = ((SearchableSelectItem) selectItem).getIconEmoji();
                    }
                    if (iconEmoji != null) {
                        SimpleDraweeSpanTextView selectComponentSelectionIcon = this.binding.selectComponentSelectionIcon;
                        Intrinsics.checkNotNullExpressionValue(selectComponentSelectionIcon, "selectComponentSelectionIcon");
                        ComponentViewKt.setEmojiOrHide(selectComponentSelectionIcon, iconEmoji);
                    } else {
                        if (selectItem instanceof SearchableSelectItem) {
                            SearchableSelectItem searchableSelectItem = (SearchableSelectItem) selectItem;
                            if (searchableSelectItem.getIconSrc() != null) {
                                SimpleDraweeSpanTextView selectComponentSelectionIcon2 = this.binding.selectComponentSelectionIcon;
                                Intrinsics.checkNotNullExpressionValue(selectComponentSelectionIcon2, "selectComponentSelectionIcon");
                                setImage(selectComponentSelectionIcon2, searchableSelectItem.getIconSrc(), searchableSelectItem.getIconColor(), searchableSelectItem.getType() == SelectOptionType.USER);
                                SimpleDraweeSpanTextView selectComponentSelectionIcon3 = this.binding.selectComponentSelectionIcon;
                                Intrinsics.checkNotNullExpressionValue(selectComponentSelectionIcon3, "selectComponentSelectionIcon");
                                selectComponentSelectionIcon3.setVisibility(0);
                            }
                        }
                        SimpleDraweeSpanTextView selectComponentSelectionIcon4 = this.binding.selectComponentSelectionIcon;
                        Intrinsics.checkNotNullExpressionValue(selectComponentSelectionIcon4, "selectComponentSelectionIcon");
                        selectComponentSelectionIcon4.setVisibility(8);
                    }
                }
            } else {
                FlexboxLayout selectComponentSelectionsRoot2 = this.binding.selectComponentSelectionsRoot;
                Intrinsics.checkNotNullExpressionValue(selectComponentSelectionsRoot2, "selectComponentSelectionsRoot");
                MaterialTextView selectComponentSelectionText3 = this.binding.selectComponentSelectionText;
                Intrinsics.checkNotNullExpressionValue(selectComponentSelectionText3, "selectComponentSelectionText");
                selectComponentSelectionText3.setVisibility(8);
                SimpleDraweeSpanTextView selectComponentSelectionIcon5 = this.binding.selectComponentSelectionIcon;
                Intrinsics.checkNotNullExpressionValue(selectComponentSelectionIcon5, "selectComponentSelectionIcon");
                selectComponentSelectionIcon5.setVisibility(8);
                selectComponentSelectionsRoot2.setVisibility(0);
                setSelectedOptions(selectComponentSelectionsRoot2, selectedItems);
            }
        } else {
            MaterialTextView selectComponentSelectionText4 = this.binding.selectComponentSelectionText;
            Intrinsics.checkNotNullExpressionValue(selectComponentSelectionText4, "selectComponentSelectionText");
            selectComponentSelectionText4.setVisibility(0);
            SimpleDraweeSpanTextView selectComponentSelectionIcon6 = this.binding.selectComponentSelectionIcon;
            Intrinsics.checkNotNullExpressionValue(selectComponentSelectionIcon6, "selectComponentSelectionIcon");
            selectComponentSelectionIcon6.setVisibility(8);
            FlexboxLayout selectComponentSelectionsRoot3 = this.binding.selectComponentSelectionsRoot;
            Intrinsics.checkNotNullExpressionValue(selectComponentSelectionsRoot3, "selectComponentSelectionsRoot");
            selectComponentSelectionsRoot3.setVisibility(8);
            this.binding.selectComponentSelectionText.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
            this.binding.selectComponentSelectionText.setText(placeholder);
        }
        boolean z11 = component.getState() == ActionComponentState.DISABLED || component.getDisabled();
        boolean z12 = component.getState() == ActionComponentState.LOADING;
        SimpleDraweeView selectComponentChevron2 = this.binding.selectComponentChevron;
        Intrinsics.checkNotNullExpressionValue(selectComponentChevron2, "selectComponentChevron");
        selectComponentChevron2.setVisibility(z12 ? 4 : 0);
        if (z12 != this.currentIsLoading) {
            getProgressDots().setVisibility(z12 ? 0 : 8);
        }
        this.currentIsLoading = z12;
        this.binding.getRoot().setAlpha(z11 ? 0.3f : 1.0f);
        View root3 = this.binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(root3, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.botuikit.components.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                SelectComponentView.configure$lambda$3(ComponentContext.this, component, view);
            }
        }, 1, null);
        View root4 = this.binding.getRoot();
        if (!z12 && !z11) {
            z10 = true;
        }
        root4.setClickable(z10);
        this.binding.getRoot().setEnabled(!z11);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SelectComponentView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        MessageComponentSelectViewBinding inflate = MessageComponentSelectViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.progressDots$delegate = jr.l.b(new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.components.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ProgressDots progressDots_delegate$lambda$0;
                progressDots_delegate$lambda$0 = SelectComponentView.progressDots_delegate$lambda$0(SelectComponentView.this);
                return progressDots_delegate$lambda$0;
            }
        });
        this.postProcessor$delegate = jr.l.b(new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.components.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                BasePostprocessor postProcessor_delegate$lambda$1;
                postProcessor_delegate$lambda$1 = SelectComponentView.postProcessor_delegate$lambda$1();
                return postProcessor_delegate$lambda$1;
            }
        });
        setMinHeight(SizeUtilsKt.getDpToPx(40));
        int dpToPx = SizeUtilsKt.getDpToPx(8);
        setPadding(dpToPx, dpToPx, dpToPx, dpToPx);
    }
}
