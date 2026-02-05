package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.Paint;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.feedback.SurveyIndication;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.databinding.SurveyActionViewBinding;
import com.discord.chat.presentation.textutils.TextUtilsKt;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.image.fresco.SimpleDraweeSpanTextViewUtilsKt;
import com.discord.primitives.MessageId;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.span.utilities.BackgroundSpanDrawer;
import com.discord.span.utilities.SpannableExtensionsKt;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ7\u0010\u0014\u001a\u00020\u00102\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\f2\u0018\u0010\u0011\u001a\u0014\u0012\u0004\u0012\u00020\n\u0012\u0004\u0012\u00020\u000f\u0012\u0004\u0012\u00020\u00100\u000e¢\u0006\u0004\b\u0012\u0010\u0013R\u0016\u0010\u0016\u001a\u00020\u00158\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"Lcom/discord/chat/presentation/message/view/SurveyIndicationView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "Lcom/discord/primitives/MessageId;", "messageId", "Lcom/discord/chat/bridge/feedback/SurveyIndication;", "surveyIndication", "Lkotlin/Function2;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "", "onLinkClicked", "setSurveyIndication-u7_MRrM", "(Ljava/lang/String;Lcom/discord/chat/bridge/feedback/SurveyIndication;Lkotlin/jvm/functions/Function2;)V", "setSurveyIndication", "Lcom/discord/chat/databinding/SurveyActionViewBinding;", "binding", "Lcom/discord/chat/databinding/SurveyActionViewBinding;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSurveyIndicationView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SurveyIndicationView.kt\ncom/discord/chat/presentation/message/view/SurveyIndicationView\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,72:1\n1#2:73\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SurveyIndicationView extends ConstraintLayout {
    @NotNull
    private SurveyActionViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SurveyIndicationView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setSurveyIndication_u7_MRrM$lambda$3$lambda$1(Function2 function2, String str, LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        function2.invoke(MessageId.m1085boximpl(str), node);
        return Unit.f31988a;
    }

    /* renamed from: setSurveyIndication-u7_MRrM  reason: not valid java name */
    public final void m708setSurveyIndicationu7_MRrM(@NotNull final String messageId, @NotNull SurveyIndication surveyIndication, @NotNull final Function2<? super MessageId, ? super LinkContentNode, Unit> onLinkClicked) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(surveyIndication, "surveyIndication");
        Intrinsics.checkNotNullParameter(onLinkClicked, "onLinkClicked");
        SimpleDraweeView chatListFeedbackIcon = this.binding.chatListFeedbackIcon;
        Intrinsics.checkNotNullExpressionValue(chatListFeedbackIcon, "chatListFeedbackIcon");
        ReactAssetUtilsKt.setReactImageUrl(chatListFeedbackIcon, surveyIndication.getFeedbackIconUrl());
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.chatListAdapterItemTextFeedback;
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        StructurableText content = surveyIndication.getContent();
        Context context = simpleDraweeSpanTextView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Paint.FontMetrics fontMetrics = simpleDraweeSpanTextView.getPaint().getFontMetrics();
        Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
        float baselineHeightPx = TextUtilsKt.getBaselineHeightPx(fontMetrics);
        TextPaint paint = this.binding.chatListAdapterItemTextFeedback.getPaint();
        Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
        DraweeSpanStringBuilder spannable$default = TextUtilsKt.toSpannable$default(content, context, messageId, false, false, false, false, paint, new Function1() { // from class: com.discord.chat.presentation.message.view.l3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit surveyIndication_u7_MRrM$lambda$3$lambda$1;
                surveyIndication_u7_MRrM$lambda$3$lambda$1 = SurveyIndicationView.setSurveyIndication_u7_MRrM$lambda$3$lambda$1(Function2.this, messageId, (LinkContentNode) obj);
                return surveyIndication_u7_MRrM$lambda$3$lambda$1;
            }
        }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, false, null, baselineHeightPx, null, false, 117440256, null);
        SpannableExtensionsKt.coverWithSpan(spannable$default, new BackgroundSpanDrawer(simpleDraweeSpanTextView));
        SimpleDraweeSpanTextViewUtilsKt.setOptionalText(simpleDraweeSpanTextView, spannable$default);
        NestedScrollOnTouchUtilsKt.enableNestedSpanClickListener$default(simpleDraweeSpanTextView, false, 1, null);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SurveyIndicationView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ SurveyIndicationView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SurveyIndicationView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        SurveyActionViewBinding inflate = SurveyActionViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        inflate.surveyCard.setCardBackgroundColor(ColorUtilsKt.getThemeColor(context, R.color.white_500, R.color.primary_800));
        SimpleDraweeView chatListFeedbackIcon = this.binding.chatListFeedbackIcon;
        Intrinsics.checkNotNullExpressionValue(chatListFeedbackIcon, "chatListFeedbackIcon");
        ColorUtilsKt.setTintColor(chatListFeedbackIcon, Integer.valueOf(ThemeManagerKt.getTheme().getTextMuted()));
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.chatListAdapterItemTextFeedback;
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        DiscordFontUtilsKt.setDiscordFont(simpleDraweeSpanTextView, DiscordFont.PrimaryMedium);
        simpleDraweeSpanTextView.setTextColor(ThemeManagerKt.getTheme().getTextMuted());
    }
}
