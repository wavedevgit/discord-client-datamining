package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.Paint;
import android.text.Layout;
import android.text.SpannableStringBuilder;
import android.text.TextPaint;
import android.text.style.ForegroundColorSpan;
import android.text.style.RelativeSizeSpan;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.truncation.Truncation;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.chat.presentation.message.view.botuikit.MarkdownTextRenderEventHandlers;
import com.discord.chat.presentation.message.view.botuikit.MarkdownTextRenderOptions;
import com.discord.chat.presentation.textutils.LinkStyle;
import com.discord.chat.presentation.textutils.TextUtilsKt;
import com.discord.fonts.DiscordFont;
import com.discord.primitives.MessageId;
import com.discord.react_gesture_handler.nested_touch.NestedClickableSpan;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.recycler_view.decorations.VerticalSpacingItemDecoration;
import com.discord.span.utilities.BackgroundSpanDrawer;
import com.discord.span.utilities.SpannableExtensionsKt;
import com.discord.span.utilities.spannable.BoldSpan;
import com.discord.span.utilities.spannable.ClickableSpan;
import com.discord.span.utilities.spannable.EmojiAccessibilitySpan;
import com.discord.span.utilities.spannable.QuoteSpan;
import com.discord.span.utilities.spannable.SpoilerSpan;
import com.discord.theme.DiscordThemeObject;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.Iterator;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Ê\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000e\b\u0016\u0018\u0000 [2\u00020\u00012\u00020\u0002:\u0002[\\B'\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\nJS\u0010\u001b\u001a\u00020\u00152\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\r2\u0006\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u00072\u0006\u0010\u0013\u001a\u00020\u00122\u0012\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u00150\u00142\u0006\u0010\u0018\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u0019\u0010\u001aJ)\u0010 \u001a\u00020\u00152\u0006\u0010\u0013\u001a\u00020\u001c2\u0006\u0010\u001e\u001a\u00020\u001d2\b\u0010\u001f\u001a\u0004\u0018\u00010\u0007H\u0002¢\u0006\u0004\b \u0010!JC\u0010+\u001a\u00020\u00152\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010#\u001a\u00020\"2\u0006\u0010%\u001a\u00020$2\u0006\u0010'\u001a\u00020&2\n\b\u0002\u0010)\u001a\u0004\u0018\u00010(2\b\b\u0002\u0010*\u001a\u00020\u0017¢\u0006\u0004\b+\u0010,J£\u0004\u0010+\u001a\u00020\u00152\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010#\u001a\u00020\"2\u0006\u0010\u000e\u001a\u00020\r2\u0006\u0010-\u001a\u00020\u00172\u0006\u0010.\u001a\u00020\u00172\u0006\u0010/\u001a\u00020\u00172\u0006\u00100\u001a\u00020\u00172\u0012\u00102\u001a\u000e\u0012\u0004\u0012\u000201\u0012\u0004\u0012\u00020\u00150\u00142\u0012\u00103\u001a\u000e\u0012\u0004\u0012\u000201\u0012\u0004\u0012\u00020\u00150\u00142\"\u00105\u001a\u001e\u0012\u0004\u0012\u00020\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0004\u0012\u00020\u0015042*\u00107\u001a&\u0012\u0004\u0012\u00020\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0004\u0012\u00020\u0015062\u0012\u00108\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u00150\u00142\u0018\u0010:\u001a\u0014\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u0015092*\u0010;\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0004\u0012\u00020\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0004\u0012\u00020\u0015062\u0012\u0010=\u001a\u000e\u0012\u0004\u0012\u00020<\u0012\u0004\u0012\u00020\u00150\u00142\u0012\u0010>\u001a\u000e\u0012\u0004\u0012\u00020<\u0012\u0004\u0012\u00020\u00150\u00142\f\u0010@\u001a\b\u0012\u0004\u0012\u00020\u00150?2\u0012\u0010A\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u00150\u00142\u0012\u0010C\u001a\u000e\u0012\u0004\u0012\u00020B\u0012\u0004\u0012\u00020\u00150\u00142\u0012\u0010E\u001a\u000e\u0012\u0004\u0012\u00020D\u0012\u0004\u0012\u00020\u00150\u00142\u0012\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u00150\u00142\u0012\u0010G\u001a\u000e\u0012\u0004\u0012\u00020F\u0012\u0004\u0012\u00020\u00150\u00142\u0014\b\u0002\u0010I\u001a\u000e\u0012\u0004\u0012\u000201\u0012\u0004\u0012\u00020H0\u00142\u0006\u0010J\u001a\u00020\u00072\u0006\u0010\u0011\u001a\u00020\u00072\u0006\u0010\u0018\u001a\u00020\u00172\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u001d2\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u000f2\b\b\u0002\u0010L\u001a\u00020K2\n\b\u0002\u0010)\u001a\u0004\u0018\u00010(2\b\b\u0002\u0010*\u001a\u00020\u0017¢\u0006\u0004\bM\u0010NJ\u0019\u0010Q\u001a\u00020\u00152\b\u0010P\u001a\u0004\u0018\u00010OH\u0016¢\u0006\u0004\bQ\u0010RJ\u0011\u0010S\u001a\u0004\u0018\u00010\u0007H\u0016¢\u0006\u0004\bS\u0010TR\u0018\u0010J\u001a\u0004\u0018\u00010\u00078\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bJ\u0010UR\u001b\u0010Z\u001a\u00020\u00018BX\u0082\u0084\u0002¢\u0006\f\n\u0004\bV\u0010W\u001a\u0004\bX\u0010Y¨\u0006]"}, d2 = {"Lcom/discord/chat/presentation/message/view/MessageContentView;", "Lcom/facebook/drawee/span/SimpleDraweeSpanTextView;", "Lcom/discord/recycler_view/decorations/VerticalSpacingItemDecoration$SpacingProviderView;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "margins", "Lcom/discord/primitives/MessageId;", "messageId", "Lcom/discord/chat/bridge/truncation/Truncation;", "truncation", "constrainedWidth", "Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "spannableStringBuilder", "Lkotlin/Function1;", "", "onTapSeeMore", "", "isForwardedContent", "truncate-l3ndG-o", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Ljava/lang/String;Lcom/discord/chat/bridge/truncation/Truncation;ILcom/facebook/drawee/span/DraweeSpanStringBuilder;Lkotlin/jvm/functions/Function1;Z)V", "truncate", "Landroid/text/SpannableStringBuilder;", "", "editedLabel", "editedLabelTextColor", "appendEditedLabel", "(Landroid/text/SpannableStringBuilder;Ljava/lang/String;Ljava/lang/Integer;)V", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "messageContent", "Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderOptions;", "options", "Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderEventHandlers;", "eventHandlers", "", "emojiBaselineHeightOverridePx", "shouldOmitTopAndBottomHeadingSpacerNewLine", "setMessageContent", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/structurabletext/StructurableText;Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderOptions;Lcom/discord/chat/presentation/message/view/botuikit/MarkdownTextRenderEventHandlers;Ljava/lang/Float;Z)V", "shouldAnimateEmoji", "shouldShowLinkDecorations", "shouldShowRoleDot", "shouldShowRoleOnName", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "onTapLink", "onLongTapLink", "Lkotlin/Function3;", "onTapChannel", "Lkotlin/Function4;", "onLongPressChannel", "onTapAttachmentLink", "Lkotlin/Function2;", "onLongPressAttachmentLink", "onTapMention", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "onTapCommand", "onLongPressCommand", "Lkotlin/Function0;", "onTapSpoiler", "onTapTimestamp", "Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;", "onTapInlineCode", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "onTapEmoji", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "onTapSoundmoji", "Lcom/discord/chat/presentation/textutils/LinkStyle;", "linkStyleProvider", "bottomSpacingPx", "Lcom/discord/theme/DiscordThemeObject;", "theme", "setMessageContent-4q-5Jro", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;ZZZZLkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;IIZLjava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/truncation/Truncation;Lcom/discord/theme/DiscordThemeObject;Ljava/lang/Float;Z)V", "Landroid/view/View$OnClickListener;", "l", "setOnClickListener", "(Landroid/view/View$OnClickListener;)V", "spacingPxOverride", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "shadowView$delegate", "Lkotlin/Lazy;", "getShadowView", "()Lcom/facebook/drawee/span/SimpleDraweeSpanTextView;", "shadowView", "Companion", "MessageContentViewAccessibilityDelegate", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class MessageContentView extends SimpleDraweeSpanTextView implements VerticalSpacingItemDecoration.SpacingProviderView {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final float LINE_SPACING_ADD = 0.0f;
    private static final float LINE_SPACING_MULT = 1.05f;
    private Integer bottomSpacingPx;
    @NotNull
    private final Lazy shadowView$delegate;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/presentation/message/view/MessageContentView$Companion;", "", "<init>", "()V", "LINE_SPACING_MULT", "", "LINE_SPACING_ADD", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u001f\u0010\u000b\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\u000b\u0010\fR\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/discord/chat/presentation/message/view/MessageContentView$MessageContentViewAccessibilityDelegate;", "Landroidx/core/view/a;", "Lcom/discord/chat/presentation/message/view/MessageContentView;", "view", "<init>", "(Lcom/discord/chat/presentation/message/view/MessageContentView;)V", "Landroid/view/View;", "host", "Landroidx/core/view/accessibility/AccessibilityNodeInfoCompat;", "info", "", "onInitializeAccessibilityNodeInfo", "(Landroid/view/View;Landroidx/core/view/accessibility/AccessibilityNodeInfoCompat;)V", "Lcom/discord/chat/presentation/message/view/MessageContentView;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class MessageContentViewAccessibilityDelegate extends androidx.core.view.a {
        @NotNull
        private final MessageContentView view;

        public MessageContentViewAccessibilityDelegate(@NotNull MessageContentView view) {
            Intrinsics.checkNotNullParameter(view, "view");
            this.view = view;
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(@NotNull View host, @NotNull AccessibilityNodeInfoCompat info) {
            Intrinsics.checkNotNullParameter(host, "host");
            Intrinsics.checkNotNullParameter(info, "info");
            super.onInitializeAccessibilityNodeInfo(host, info);
            SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder(this.view.getText());
            Iterator it = ArrayIteratorKt.iterator(spannableStringBuilder.getSpans(0, spannableStringBuilder.length(), SpoilerSpan.class));
            while (it.hasNext()) {
                SpoilerSpan spoilerSpan = (SpoilerSpan) it.next();
                if (!spoilerSpan.isRevealed()) {
                    int spanStart = spannableStringBuilder.getSpanStart(spoilerSpan);
                    int spanEnd = spannableStringBuilder.getSpanEnd(spoilerSpan);
                    Context context = host.getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    spannableStringBuilder.replace(spanStart, spanEnd, I18nUtilsKt.i18nFormat$default(context, I18nMessage.SPOILER_HIDDEN_A11Y_LABEL, null, 2, null));
                }
            }
            Iterator it2 = ArrayIteratorKt.iterator(spannableStringBuilder.getSpans(0, spannableStringBuilder.length(), EmojiAccessibilitySpan.class));
            while (it2.hasNext()) {
                EmojiAccessibilitySpan emojiAccessibilitySpan = (EmojiAccessibilitySpan) it2.next();
                spannableStringBuilder.replace(spannableStringBuilder.getSpanStart(emojiAccessibilitySpan), spannableStringBuilder.getSpanEnd(emojiAccessibilitySpan), (CharSequence) emojiAccessibilitySpan.getName());
            }
            info.b1(spannableStringBuilder);
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MessageContentView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void appendEditedLabel(SpannableStringBuilder spannableStringBuilder, String str, Integer num) {
        int textMuted;
        Object[] spans = spannableStringBuilder.getSpans(spannableStringBuilder.length(), spannableStringBuilder.length(), QuoteSpan.class);
        Intrinsics.checkNotNullExpressionValue(spans, "getSpans(...)");
        QuoteSpan quoteSpan = (QuoteSpan) kotlin.collections.i.V(spans);
        int length = spannableStringBuilder.length();
        spannableStringBuilder.append((CharSequence) (" (" + str + ")"));
        spannableStringBuilder.setSpan(new RelativeSizeSpan(0.75f), length, spannableStringBuilder.length(), 33);
        if (num != null) {
            textMuted = num.intValue();
        } else {
            textMuted = ThemeManagerKt.getTheme().getTextMuted();
        }
        spannableStringBuilder.setSpan(new ForegroundColorSpan(textMuted), length, spannableStringBuilder.length(), 33);
        if (quoteSpan != null) {
            spannableStringBuilder.setSpan(quoteSpan, spannableStringBuilder.getSpanStart(quoteSpan), spannableStringBuilder.length(), spannableStringBuilder.getSpanFlags(quoteSpan));
        }
    }

    private final SimpleDraweeSpanTextView getShadowView() {
        return (SimpleDraweeSpanTextView) this.shadowView$delegate.getValue();
    }

    public static /* synthetic */ void setMessageContent$default(MessageContentView messageContentView, MessageMargins messageMargins, StructurableText structurableText, MarkdownTextRenderOptions markdownTextRenderOptions, MarkdownTextRenderEventHandlers markdownTextRenderEventHandlers, Float f10, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 16) != 0) {
                f10 = null;
            }
            Float f11 = f10;
            if ((i10 & 32) != 0) {
                z10 = false;
            }
            messageContentView.setMessageContent(messageMargins, structurableText, markdownTextRenderOptions, markdownTextRenderEventHandlers, f11, z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setMessageContent");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final LinkStyle setMessageContent$lambda$1(LinkContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return new LinkStyle(DiscordFont.PrimaryNormal, ThemeManagerKt.getTheme().getTextLink(), null, null, 12, null);
    }

    /* renamed from: setMessageContent-4q-5Jro$default  reason: not valid java name */
    public static /* synthetic */ void m698setMessageContent4q5Jro$default(MessageContentView messageContentView, MessageMargins messageMargins, StructurableText structurableText, String str, boolean z10, boolean z11, boolean z12, boolean z13, Function1 function1, Function1 function12, Function3 function3, Function4 function4, Function1 function13, Function2 function2, Function4 function42, Function1 function14, Function1 function15, Function0 function0, Function1 function16, Function1 function17, Function1 function18, Function1 function19, Function1 function110, Function1 function111, int i10, int i11, boolean z14, String str2, Integer num, Truncation truncation, DiscordThemeObject discordThemeObject, Float f10, boolean z15, int i12, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setMessageContent-4q-5Jro");
        }
        messageContentView.m700setMessageContent4q5Jro(messageMargins, structurableText, str, z10, z11, z12, z13, function1, function12, function3, function4, function13, function2, function42, function14, function15, function0, function16, function17, function18, function19, function110, (i12 & 4194304) != 0 ? new Function1() { // from class: com.discord.chat.presentation.message.view.s2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                LinkStyle messageContent_4q_5Jro$lambda$2;
                messageContent_4q_5Jro$lambda$2 = MessageContentView.setMessageContent_4q_5Jro$lambda$2((LinkContentNode) obj2);
                return messageContent_4q_5Jro$lambda$2;
            }
        } : function111, i10, i11, z14, (i12 & 67108864) != 0 ? null : str2, (i12 & 134217728) != 0 ? null : num, (i12 & 268435456) != 0 ? null : truncation, (i12 & 536870912) != 0 ? ThemeManagerKt.getTheme() : discordThemeObject, (i12 & 1073741824) != 0 ? null : f10, (i12 & Integer.MIN_VALUE) != 0 ? false : z15);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final LinkStyle setMessageContent_4q_5Jro$lambda$2(LinkContentNode linkContentNode) {
        Intrinsics.checkNotNullParameter(linkContentNode, "<unused var>");
        return new LinkStyle(null, 0, null, null, 15, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SimpleDraweeSpanTextView shadowView_delegate$lambda$0(MessageContentView messageContentView) {
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = new SimpleDraweeSpanTextView(messageContentView.getContext());
        simpleDraweeSpanTextView.setBreakStrategy(messageContentView.getBreakStrategy());
        simpleDraweeSpanTextView.setLayoutParams(new ViewGroup.LayoutParams(-1, -2));
        return simpleDraweeSpanTextView;
    }

    /* renamed from: truncate-l3ndG-o  reason: not valid java name */
    private final void m699truncatel3ndGo(MessageMargins messageMargins, final String str, Truncation truncation, int i10, DraweeSpanStringBuilder draweeSpanStringBuilder, final Function1<? super MessageId, Unit> function1, boolean z10) {
        int textLink;
        int numberOfLines = truncation.getNumberOfLines();
        boolean expandable = truncation.getExpandable();
        int width = MessageMargins.Companion.getWidth(messageMargins, i10, z10);
        getShadowView().setTypeface(getTypeface());
        getShadowView().setTextSize(0, getTextSize());
        getShadowView().setLineSpacing(LINE_SPACING_ADD, LINE_SPACING_MULT);
        getShadowView().setDraweeSpanStringBuilder(draweeSpanStringBuilder);
        getShadowView().measure(View.MeasureSpec.makeMeasureSpec(width, 1073741824), View.MeasureSpec.makeMeasureSpec(0, 0));
        getShadowView().layout(0, 0, getShadowView().getMeasuredWidth(), getShadowView().getMeasuredHeight());
        Layout layout = getShadowView().getLayout();
        if (getShadowView().getLineCount() > numberOfLines) {
            int lineVisibleEnd = layout.getLineVisibleEnd(numberOfLines - 1);
            if (expandable) {
                String seeMoreLabel = truncation.getSeeMoreLabel();
                Integer seeMoreLabelColor = truncation.getSeeMoreLabelColor();
                draweeSpanStringBuilder.replace(lineVisibleEnd, draweeSpanStringBuilder.length(), (CharSequence) (ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE + seeMoreLabel));
                NestedClickableSpan.TouchPriority touchPriority = NestedClickableSpan.TouchPriority.HIGH;
                if (seeMoreLabelColor != null) {
                    textLink = seeMoreLabelColor.intValue();
                } else {
                    textLink = ThemeManagerKt.getTheme().getTextLink();
                }
                draweeSpanStringBuilder.setSpan(new ClickableSpan(touchPriority, Integer.valueOf(textLink), null, null, LINE_SPACING_ADD, null, null, new Function1() { // from class: com.discord.chat.presentation.message.view.t2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit truncate_l3ndG_o$lambda$3;
                        truncate_l3ndG_o$lambda$3 = MessageContentView.truncate_l3ndG_o$lambda$3(Function1.this, str, (View) obj);
                        return truncate_l3ndG_o$lambda$3;
                    }
                }, 124, null), lineVisibleEnd, draweeSpanStringBuilder.length(), 33);
                draweeSpanStringBuilder.setSpan(new BoldSpan(), lineVisibleEnd, draweeSpanStringBuilder.length(), 33);
                return;
            }
            draweeSpanStringBuilder.delete(lineVisibleEnd, draweeSpanStringBuilder.length());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit truncate_l3ndG_o$lambda$3(Function1 function1, String str, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        function1.invoke(MessageId.m1084boximpl(str));
        return Unit.f33282a;
    }

    public final void setMessageContent(@NotNull MessageMargins margins, @NotNull StructurableText messageContent, @NotNull MarkdownTextRenderOptions options, @NotNull MarkdownTextRenderEventHandlers eventHandlers, Float f10, boolean z10) {
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(messageContent, "messageContent");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(eventHandlers, "eventHandlers");
        m698setMessageContent4q5Jro$default(this, margins, messageContent, MessageId.m1085constructorimpl(options.getContainerId()), options.getShouldAnimateEmoji(), options.getShouldShowLinkDecorations(), options.getShouldShowRoleDot(), options.getShouldShowRoleOnName(), eventHandlers.getOnLinkClicked(), eventHandlers.getOnLinkLongClicked(), eventHandlers.getOnTapChannel(), eventHandlers.getOnLongPressChannel(), eventHandlers.getOnTapAttachmentLink(), eventHandlers.getOnLongPressAttachmentLink(), eventHandlers.getOnTapMention(), eventHandlers.getOnTapCommand(), eventHandlers.getOnLongPressCommand(), eventHandlers.getOnTapSpoiler(), eventHandlers.getOnTapTimestamp(), eventHandlers.getOnTapInlineCode(), eventHandlers.getOnTapEmoji(), new Function1<MessageId, Unit>() { // from class: com.discord.chat.presentation.message.view.MessageContentView$setMessageContent$1
            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                m701invoke1xi1bu0(((MessageId) obj).m1093unboximpl());
                return Unit.f33282a;
            }

            /* renamed from: invoke-1xi1bu0  reason: not valid java name */
            public final void m701invoke1xi1bu0(String str) {
                Intrinsics.checkNotNullParameter(str, "<unused var>");
            }
        }, eventHandlers.getOnTapSoundmoji(), new Function1() { // from class: com.discord.chat.presentation.message.view.u2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                LinkStyle messageContent$lambda$1;
                messageContent$lambda$1 = MessageContentView.setMessageContent$lambda$1((LinkContentNode) obj);
                return messageContent$lambda$1;
            }
        }, 0, 0, false, null, null, null, null, f10, z10, 1006632960, null);
    }

    /* renamed from: setMessageContent-4q-5Jro  reason: not valid java name */
    public final void m700setMessageContent4q5Jro(@NotNull MessageMargins margins, @NotNull StructurableText messageContent, @NotNull String messageId, boolean z10, boolean z11, boolean z12, boolean z13, @NotNull Function1<? super LinkContentNode, Unit> onTapLink, @NotNull Function1<? super LinkContentNode, Unit> onLongTapLink, @NotNull Function3 onTapChannel, @NotNull Function4 onLongPressChannel, @NotNull Function1<? super String, Unit> onTapAttachmentLink, @NotNull Function2<? super String, ? super String, Unit> onLongPressAttachmentLink, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, @NotNull Function1<? super CommandMentionContentNode, Unit> onLongPressCommand, @NotNull Function0<Unit> onTapSpoiler, @NotNull Function1<? super String, Unit> onTapTimestamp, @NotNull Function1<? super InlineCodeContentNode, Unit> onTapInlineCode, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function1<? super MessageId, Unit> onTapSeeMore, @NotNull Function1<? super SoundmojiContentNode, Unit> onTapSoundmoji, @NotNull Function1<? super LinkContentNode, LinkStyle> linkStyleProvider, int i10, int i11, boolean z14, String str, Integer num, Truncation truncation, @NotNull DiscordThemeObject theme, Float f10, boolean z15) {
        DraweeSpanStringBuilder draweeSpanStringBuilder;
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(messageContent, "messageContent");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(onTapLink, "onTapLink");
        Intrinsics.checkNotNullParameter(onLongTapLink, "onLongTapLink");
        Intrinsics.checkNotNullParameter(onTapChannel, "onTapChannel");
        Intrinsics.checkNotNullParameter(onLongPressChannel, "onLongPressChannel");
        Intrinsics.checkNotNullParameter(onTapAttachmentLink, "onTapAttachmentLink");
        Intrinsics.checkNotNullParameter(onLongPressAttachmentLink, "onLongPressAttachmentLink");
        Intrinsics.checkNotNullParameter(onTapMention, "onTapMention");
        Intrinsics.checkNotNullParameter(onTapCommand, "onTapCommand");
        Intrinsics.checkNotNullParameter(onLongPressCommand, "onLongPressCommand");
        Intrinsics.checkNotNullParameter(onTapSpoiler, "onTapSpoiler");
        Intrinsics.checkNotNullParameter(onTapTimestamp, "onTapTimestamp");
        Intrinsics.checkNotNullParameter(onTapInlineCode, "onTapInlineCode");
        Intrinsics.checkNotNullParameter(onTapEmoji, "onTapEmoji");
        Intrinsics.checkNotNullParameter(onTapSeeMore, "onTapSeeMore");
        Intrinsics.checkNotNullParameter(onTapSoundmoji, "onTapSoundmoji");
        Intrinsics.checkNotNullParameter(linkStyleProvider, "linkStyleProvider");
        Intrinsics.checkNotNullParameter(theme, "theme");
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Paint.FontMetrics fontMetrics = getPaint().getFontMetrics();
        Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
        float baselineHeightPx = TextUtilsKt.getBaselineHeightPx(fontMetrics);
        TextPaint paint = getPaint();
        Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
        DraweeSpanStringBuilder spannable$default = TextUtilsKt.toSpannable$default(messageContent, context, messageId, z10, z11, z12, z13, paint, onTapLink, onLongTapLink, onTapChannel, onLongPressChannel, onTapAttachmentLink, onLongPressAttachmentLink, onTapMention, onTapCommand, onLongPressCommand, onTapTimestamp, onTapInlineCode, onTapEmoji, linkStyleProvider, onTapSpoiler, onTapSoundmoji, false, theme, baselineHeightPx, f10, z15, 4194304, null);
        if (str != null && !StringsKt.k0(str)) {
            appendEditedLabel(spannable$default, str, num);
        }
        if (truncation != null) {
            m699truncatel3ndGo(margins, messageId, truncation, i11, spannable$default, onTapSeeMore, z14);
            draweeSpanStringBuilder = spannable$default;
        } else {
            draweeSpanStringBuilder = spannable$default;
        }
        SpannableExtensionsKt.coverWithSpan(draweeSpanStringBuilder, new BackgroundSpanDrawer(this));
        setDraweeSpanStringBuilder(draweeSpanStringBuilder);
        this.bottomSpacingPx = Integer.valueOf(i10);
        NestedScrollOnTouchUtilsKt.enableNestedSpanClickListener(this, true);
        androidx.core.view.h0.n0(this, new MessageContentViewAccessibilityDelegate(this));
    }

    @Override // android.view.View
    public void setOnClickListener(View.OnClickListener onClickListener) {
        throw new UnsupportedOperationException("MessageContentView uses custom touch handling. click listeners are not supported");
    }

    @Override // com.discord.recycler_view.decorations.VerticalSpacingItemDecoration.SpacingProviderView
    public Integer spacingPxOverride() {
        return this.bottomSpacingPx;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MessageContentView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ MessageContentView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MessageContentView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        this.shadowView$delegate = ir.l.b(new Function0() { // from class: com.discord.chat.presentation.message.view.r2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SimpleDraweeSpanTextView shadowView_delegate$lambda$0;
                shadowView_delegate$lambda$0 = MessageContentView.shadowView_delegate$lambda$0(MessageContentView.this);
                return shadowView_delegate$lambda$0;
            }
        });
        setLineSpacing(LINE_SPACING_ADD, LINE_SPACING_MULT);
    }
}
