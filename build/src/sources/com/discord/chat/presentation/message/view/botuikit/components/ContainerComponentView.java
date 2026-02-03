package com.discord.chat.presentation.message.view.botuikit.components;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import com.discord.chat.R;
import com.discord.chat.bridge.botuikit.Component;
import com.discord.chat.bridge.botuikit.ContainerComponent;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.chat.bridge.spoiler.SpoilerConfig;
import com.discord.chat.databinding.MessageComponentContainerViewBinding;
import com.discord.chat.presentation.message.view.SpoilerView;
import com.discord.chat.presentation.message.view.botuikit.ComponentContext;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.chat.presentation.message.view.botuikit.ComponentView;
import com.discord.chat.presentation.message.view.botuikit.MessageComponentsViewKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.theme.ThemeManagerKt;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KClass;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u0000 \u001b2\u00020\u00012\b\u0012\u0004\u0012\u00020\u00030\u0002:\u0001\u001bB'\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ\u0010\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0010\u001a\u00020\u0011H\u0016J\u000e\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00030\u0015H\u0016J \u0010\u0016\u001a\u00020\u00132\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0018\u001a\u00020\u0019H\u0016J\u0018\u0010\u001a\u001a\u00020\u00132\u0006\u0010\u0017\u001a\u00020\u00032\u0006\u0010\u0018\u001a\u00020\u0019H\u0002R\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0011X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/components/ContainerComponentView;", "Landroid/widget/FrameLayout;", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentView;", "Lcom/discord/chat/bridge/botuikit/ContainerComponent;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/chat/databinding/MessageComponentContainerViewBinding;", "getBinding", "()Lcom/discord/chat/databinding/MessageComponentContainerViewBinding;", "componentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "onRecycle", "", "getComponentType", "Lkotlin/reflect/KClass;", "configure", "component", "componentContext", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;", "configureSpoiler", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nContainerComponentView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ContainerComponentView.kt\ncom/discord/chat/presentation/message/view/botuikit/components/ContainerComponentView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,117:1\n257#2,2:118\n257#2,2:120\n255#2:127\n1573#3:122\n1604#3,4:123\n*S KotlinDebug\n*F\n+ 1 ContainerComponentView.kt\ncom/discord/chat/presentation/message/view/botuikit/components/ContainerComponentView\n*L\n59#1:118,2\n61#1:120,2\n101#1:127\n70#1:122\n70#1:123,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ContainerComponentView extends FrameLayout implements ComponentView<ContainerComponent> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final MessageComponentContainerViewBinding binding;
    private ComponentProvider componentProvider;

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/components/ContainerComponentView$Companion;", "", "<init>", "()V", "inflateComponent", "Lcom/discord/chat/presentation/message/view/botuikit/components/ContainerComponentView;", "context", "Landroid/content/Context;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final ContainerComponentView inflateComponent(@NotNull Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            return new ContainerComponentView(context, null, 0, 6, null);
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ContainerComponentView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void configureSpoiler(ContainerComponent containerComponent, final ComponentContext componentContext) {
        SpoilerConfig spoilerConfig;
        SpoilerAttributes forGenericMedia = SpoilerAttributes.Companion.forGenericMedia(containerComponent, componentContext.getContainerId(), "ContainerComponent(" + containerComponent.getId() + ")", "content", null);
        if (forGenericMedia != null) {
            spoilerConfig = SpoilerAttributes.configure$default(forGenericMedia, new Function0() { // from class: com.discord.chat.presentation.message.view.botuikit.components.f
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit configureSpoiler$lambda$1;
                    configureSpoiler$lambda$1 = ContainerComponentView.configureSpoiler$lambda$1(ComponentContext.this, this);
                    return configureSpoiler$lambda$1;
                }
            }, null, 2, null);
        } else {
            spoilerConfig = null;
        }
        this.binding.spoiler.configure(spoilerConfig, this);
        if (containerComponent.isSpoiler()) {
            SpoilerView spoiler = this.binding.spoiler;
            Intrinsics.checkNotNullExpressionValue(spoiler, "spoiler");
            if (spoiler.getVisibility() == 0) {
                setContentDescription(containerComponent.getSpoilerDescription());
                this.binding.childrenViews.setImportantForAccessibility(4);
                return;
            }
        }
        setContentDescription(null);
        this.binding.childrenViews.setImportantForAccessibility(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureSpoiler$lambda$1(ComponentContext componentContext, ContainerComponentView containerComponentView) {
        componentContext.getGeneralEventHandlers().getOnTapSpoiler().invoke();
        containerComponentView.binding.childrenViews.setImportantForAccessibility(0);
        return Unit.f32464a;
    }

    @NotNull
    public final MessageComponentContainerViewBinding getBinding() {
        return this.binding;
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    @NotNull
    public KClass getComponentType() {
        return Reflection.getOrCreateKotlinClass(ContainerComponent.class);
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    public void onRecycle(@NotNull ComponentProvider componentProvider) {
        Intrinsics.checkNotNullParameter(componentProvider, "componentProvider");
        LinearLayout childrenViews = this.binding.childrenViews;
        Intrinsics.checkNotNullExpressionValue(childrenViews, "childrenViews");
        MessageComponentsViewKt.recycleChildComponents(childrenViews, componentProvider);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ContainerComponentView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    @Override // com.discord.chat.presentation.message.view.botuikit.ComponentView
    public void configure(@NotNull ContainerComponent component, @NotNull ComponentProvider componentProvider, @NotNull ComponentContext componentContext) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(componentProvider, "componentProvider");
        Intrinsics.checkNotNullParameter(componentContext, "componentContext");
        this.componentProvider = componentProvider;
        Integer themedBackgroundColor = component.getThemedBackgroundColor();
        setBackgroundColor(themedBackgroundColor != null ? themedBackgroundColor.intValue() : ThemeManagerKt.getTheme().getEmbedBackground());
        if (component.getAccentColor() != null) {
            this.binding.accentBorder.setBackgroundColor(component.getAccentColor().intValue());
            View accentBorder = this.binding.accentBorder;
            Intrinsics.checkNotNullExpressionValue(accentBorder, "accentBorder");
            accentBorder.setVisibility(0);
        } else {
            View accentBorder2 = this.binding.accentBorder;
            Intrinsics.checkNotNullExpressionValue(accentBorder2, "accentBorder");
            accentBorder2.setVisibility(8);
        }
        int i10 = 0;
        ComponentContext reduceAvailableWidth = ComponentContext.copy$default(componentContext, null, null, null, null, null, null, null, null, false, false, true, false, 3071, null).reduceAvailableWidth(this.binding.childrenViews.getPaddingLeft() + this.binding.childrenViews.getPaddingRight());
        List<Component> components = component.getComponents();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(components, 10));
        for (Object obj : components) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            arrayList.add(componentProvider.getConfiguredComponentView((Component) obj, reduceAvailableWidth, this, i10));
            i10 = i11;
        }
        List l02 = CollectionsKt.l0(arrayList);
        LinearLayout childrenViews = this.binding.childrenViews;
        Intrinsics.checkNotNullExpressionValue(childrenViews, "childrenViews");
        MessageComponentsViewKt.replaceViews$default(childrenViews, l02, componentProvider, SizeUtilsKt.getDpToPx(8), 0, 8, null);
        configureSpoiler(component, componentContext);
    }

    public /* synthetic */ ContainerComponentView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ContainerComponentView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        MessageComponentContainerViewBinding inflate = MessageComponentContainerViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        setLayoutParams(new FrameLayout.LayoutParams(-1, -2));
        ViewClippingUtilsKt.clipToRoundedRectangle(this, context.getResources().getDimensionPixelSize(R.dimen.message_media_non_mosaic_radius));
    }
}
