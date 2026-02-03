package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.Paint;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.chat.bridge.interaction.InteractionStatus;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.databinding.InteractionStatusViewBinding;
import com.discord.chat.presentation.textutils.TextUtilsKt;
import com.discord.misc.utilities.view.ViewUtilsKt;
import com.discord.progress_dots.ProgressDots;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.span.utilities.BackgroundSpanDrawer;
import com.discord.span.utilities.SpannableExtensionsKt;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u001d\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f¢\u0006\u0004\b\u0010\u0010\u0011R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/discord/chat/presentation/message/view/InteractionStatusView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/InteractionStatusViewBinding;", "setInteractionStatus", "", "messageId", "Lcom/discord/primitives/MessageId;", "interactionStatus", "Lcom/discord/chat/bridge/interaction/InteractionStatus;", "setInteractionStatus-ntcYbpo", "(Ljava/lang/String;Lcom/discord/chat/bridge/interaction/InteractionStatus;)V", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInteractionStatusView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InteractionStatusView.kt\ncom/discord/chat/presentation/message/view/InteractionStatusView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,60:1\n257#2,2:61\n257#2,2:63\n1#3:65\n*S KotlinDebug\n*F\n+ 1 InteractionStatusView.kt\ncom/discord/chat/presentation/message/view/InteractionStatusView\n*L\n38#1:61,2\n39#1:63,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class InteractionStatusView extends ConstraintLayout {
    @NotNull
    private InteractionStatusViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public InteractionStatusView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* renamed from: setInteractionStatus-ntcYbpo  reason: not valid java name */
    public final void m698setInteractionStatusntcYbpo(@NotNull String messageId, @NotNull InteractionStatus interactionStatus) {
        int i10;
        int textMuted;
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(interactionStatus, "interactionStatus");
        ProgressDots viewInteractionStatusLoadingDots = this.binding.viewInteractionStatusLoadingDots;
        Intrinsics.checkNotNullExpressionValue(viewInteractionStatusLoadingDots, "viewInteractionStatusLoadingDots");
        int i11 = 8;
        if (interactionStatus.isLoading()) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        viewInteractionStatusLoadingDots.setVisibility(i10);
        SimpleDraweeView viewInteractionStatusDangerIcon = this.binding.viewInteractionStatusDangerIcon;
        Intrinsics.checkNotNullExpressionValue(viewInteractionStatusDangerIcon, "viewInteractionStatusDangerIcon");
        if (interactionStatus.isFailed()) {
            i11 = 0;
        }
        viewInteractionStatusDangerIcon.setVisibility(i11);
        TextView textView = this.binding.viewInteractionStatusLabelMessage;
        Intrinsics.checkNotNull(textView);
        StructurableText text = interactionStatus.getText();
        Context context = textView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Paint.FontMetrics fontMetrics = textView.getPaint().getFontMetrics();
        Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
        float baselineHeightPx = TextUtilsKt.getBaselineHeightPx(fontMetrics);
        TextPaint paint = textView.getPaint();
        Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
        DraweeSpanStringBuilder spannable$default = TextUtilsKt.toSpannable$default(text, context, messageId, false, false, false, false, paint, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, false, null, baselineHeightPx, null, false, 117440384, null);
        SpannableExtensionsKt.coverWithSpan(spannable$default, new BackgroundSpanDrawer(textView));
        ViewUtilsKt.setOptionalText(textView, spannable$default);
        if (interactionStatus.isFailed()) {
            textMuted = ThemeManagerKt.getTheme().getTextFeedbackCritical();
        } else {
            textMuted = ThemeManagerKt.getTheme().getTextMuted();
        }
        textView.setTextColor(textMuted);
    }

    public /* synthetic */ InteractionStatusView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public InteractionStatusView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        InteractionStatusViewBinding inflate = InteractionStatusViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        SimpleDraweeView simpleDraweeView = inflate.viewInteractionStatusDangerIcon;
        Intrinsics.checkNotNull(simpleDraweeView);
        ReactAssetUtilsKt.setReactAsset(simpleDraweeView, ReactAsset.Warning);
        ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(ThemeManagerKt.getTheme().getTextFeedbackCritical()));
    }
}
