package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.Paint;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.forums.PostSharePrompt;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.databinding.ForumPostActionBarViewBinding;
import com.discord.chat.presentation.textutils.TextUtilsKt;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.image.fresco.SimpleDraweeSpanTextViewUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.primitives.MessageId;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.react_strings.RenderContext;
import com.discord.reactions.ReactionView;
import com.discord.reactions.ShortcutsFlexbox;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJY\u0010\u0015\u001a\u00020\u00122\f\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\b\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\u0010\u001a\u00020\u000f2\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u00120\u00112\u0014\b\u0002\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u00120\u0011H\u0002¢\u0006\u0004\b\u0015\u0010\u0016JU\u0010$\u001a\u00020\u00122\u0006\u0010\u0018\u001a\u00020\u00172\b\u0010\u001a\u001a\u0004\u0018\u00010\u00192\u0006\u0010\u001b\u001a\u00020\u000f2\b\u0010\u001d\u001a\u0004\u0018\u00010\u001c2\u0006\u0010\u001e\u001a\u00020\u000f2\u0018\u0010!\u001a\u0014\u0012\u0004\u0012\u00020\u0017\u0012\u0004\u0012\u00020 \u0012\u0004\u0012\u00020\u00120\u001fH\u0002¢\u0006\u0004\b\"\u0010#Jñ\u0001\u00105\u001a\u00020\u00122\u0006\u0010\u0018\u001a\u00020\u00172\u0006\u0010%\u001a\u00020\u00062\u0006\u0010'\u001a\u00020&2\b\u0010(\u001a\u0004\u0018\u00010\u001c2\u0006\u0010)\u001a\u00020\u001c2\b\u0010\u001d\u001a\u0004\u0018\u00010\u001c2\u0006\u0010*\u001a\u00020\u001c2\u000e\u0010+\u001a\n\u0012\u0004\u0012\u00020\u000b\u0018\u00010\n2\b\u0010,\u001a\u0004\u0018\u00010\u000b2\u0006\u0010-\u001a\u00020&2\u0006\u0010.\u001a\u00020\u001c2\b\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\u0010\u001a\u00020\u000f2\u0012\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u00120\u00112\u0012\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u00120\u00112\u0006\u0010/\u001a\u00020\u000f2\u0006\u0010\u001b\u001a\u00020\u000f2\u0006\u00100\u001a\u00020\u000f2\b\u00101\u001a\u0004\u0018\u00010\u00192\u0006\u00102\u001a\u00020\u000f2\u0018\u0010!\u001a\u0014\u0012\u0004\u0012\u00020\u0017\u0012\u0004\u0012\u00020 \u0012\u0004\u0012\u00020\u00120\u001f¢\u0006\u0004\b3\u00104R\u0014\u00107\u001a\u0002068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u00108¨\u00069"}, d2 = {"Lcom/discord/chat/presentation/message/view/ForumPostActionBarView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "", "Lcom/discord/reactions/ReactionView$Reaction;", "reactionsToDisplay", "Lcom/discord/reactions/ReactionView$ReactionsTheme;", "reactionsTheme", "Landroid/view/View$OnClickListener;", "onAddReactionClick", "Lkotlin/Function1;", "", "onReactionClick", "onReactionLongPress", "setReactions", "(Ljava/util/List;Lcom/discord/reactions/ReactionView$ReactionsTheme;Landroid/view/View$OnClickListener;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "Lcom/discord/primitives/MessageId;", "messageId", "Lcom/discord/chat/bridge/forums/PostSharePrompt;", "postSharePrompt", "onTapShareForumPost", "", "shareIcon", "onTapDismissSharePrompt", "Lkotlin/Function2;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "onLinkClicked", "setSharePrompt-LdU2QRA", "(Ljava/lang/String;Lcom/discord/chat/bridge/forums/PostSharePrompt;Landroid/view/View$OnClickListener;Ljava/lang/String;Landroid/view/View$OnClickListener;Lkotlin/jvm/functions/Function2;)V", "setSharePrompt", "numDisplayedReactions", "", "isFollowing", "followIcon", "followLabel", "shareLabel", "reactions", "defaultReaction", "canAddNewReactions", "addNewReactionAccessibilityLabel", "onTapFollowForumPost", "onTapReactionOverflow", "sharePrompt", "onDismissSharePromptClick", "configure-CgeVRR0", "(Ljava/lang/String;IZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Lcom/discord/reactions/ReactionView$Reaction;ZLjava/lang/String;Lcom/discord/reactions/ReactionView$ReactionsTheme;Landroid/view/View$OnClickListener;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Landroid/view/View$OnClickListener;Landroid/view/View$OnClickListener;Landroid/view/View$OnClickListener;Lcom/discord/chat/bridge/forums/PostSharePrompt;Landroid/view/View$OnClickListener;Lkotlin/jvm/functions/Function2;)V", "configure", "Lcom/discord/chat/databinding/ForumPostActionBarViewBinding;", "binding", "Lcom/discord/chat/databinding/ForumPostActionBarViewBinding;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nForumPostActionBarView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ForumPostActionBarView.kt\ncom/discord/chat/presentation/message/view/ForumPostActionBarView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,264:1\n257#2,2:265\n257#2,2:267\n257#2,2:269\n257#2,2:271\n255#2:273\n257#2,2:274\n255#2:276\n257#2,2:277\n257#2,2:279\n*S KotlinDebug\n*F\n+ 1 ForumPostActionBarView.kt\ncom/discord/chat/presentation/message/view/ForumPostActionBarView\n*L\n114#1:265,2\n124#1:267,2\n129#1:269,2\n143#1:271,2\n144#1:273\n179#1:274,2\n180#1:276\n207#1:277,2\n228#1:279,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ForumPostActionBarView extends ConstraintLayout {
    @NotNull
    private final ForumPostActionBarViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ForumPostActionBarView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configure_CgeVRR0$lambda$8$lambda$7(int i10, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("count", String.valueOf(i10));
        return Unit.f33074a;
    }

    private final void setReactions(List<? extends ReactionView.Reaction> list, ReactionView.ReactionsTheme reactionsTheme, View.OnClickListener onClickListener, Function1<? super ReactionView.Reaction, Unit> function1, Function1<? super ReactionView.Reaction, Unit> function12) {
        ShortcutsFlexbox reactionsView = this.binding.reactionsView;
        Intrinsics.checkNotNullExpressionValue(reactionsView, "reactionsView");
        reactionsView.setVisibility(0);
        ShortcutsFlexbox.setReactions$default(this.binding.reactionsView, list, false, "", reactionsTheme, onClickListener, function1, function12, null, false, false, null, 1920, null);
    }

    static /* synthetic */ void setReactions$default(ForumPostActionBarView forumPostActionBarView, List list, ReactionView.ReactionsTheme reactionsTheme, View.OnClickListener onClickListener, Function1 function1, Function1 function12, int i10, Object obj) {
        Function1 function13 = function12;
        if ((i10 & 16) != 0) {
            function13 = new Function1() { // from class: com.discord.chat.presentation.message.view.r1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit reactions$lambda$12;
                    reactions$lambda$12 = ForumPostActionBarView.setReactions$lambda$12((ReactionView.Reaction) obj2);
                    return reactions$lambda$12;
                }
            };
        }
        forumPostActionBarView.setReactions(list, reactionsTheme, onClickListener, function1, function13);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setReactions$lambda$12(ReactionView.Reaction it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33074a;
    }

    /* renamed from: setSharePrompt-LdU2QRA  reason: not valid java name */
    private final void m694setSharePromptLdU2QRA(final String str, PostSharePrompt postSharePrompt, View.OnClickListener onClickListener, String str2, View.OnClickListener onClickListener2, final Function2<? super MessageId, ? super LinkContentNode, Unit> function2) {
        boolean z10;
        int i10;
        ConstraintLayout sharePromptContainer = this.binding.sharePromptContainer;
        Intrinsics.checkNotNullExpressionValue(sharePromptContainer, "sharePromptContainer");
        if (postSharePrompt != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        sharePromptContainer.setVisibility(i10);
        if (postSharePrompt != null) {
            this.binding.sharePromptTitle.setText(postSharePrompt.getTitle());
            DCDButton dCDButton = this.binding.sharePromptCopyLinkButton;
            if (str2 != null) {
                dCDButton.setIcon(str2, SizeUtilsKt.getDpToPx(16));
            }
            dCDButton.setText(postSharePrompt.getCta());
            dCDButton.setContentDescription(postSharePrompt.getCta());
            dCDButton.setOnClickButtonListener(onClickListener);
            DCDButton dCDButton2 = this.binding.sharePromptCloseButton;
            dCDButton2.setIcon(postSharePrompt.getCloseIcon(), SizeUtilsKt.getDpToPx(16));
            dCDButton2.setOnClickButtonListener(onClickListener2);
            SimpleDraweeView sharePromptIcon = this.binding.sharePromptIcon;
            Intrinsics.checkNotNullExpressionValue(sharePromptIcon, "sharePromptIcon");
            ReactAssetUtilsKt.setOptionalReactImageUrl(sharePromptIcon, postSharePrompt.getIcon());
            SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.sharePromptSubtitle;
            Intrinsics.checkNotNull(simpleDraweeSpanTextView);
            StructurableText subtitle = postSharePrompt.getSubtitle();
            Context context = simpleDraweeSpanTextView.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Paint.FontMetrics fontMetrics = simpleDraweeSpanTextView.getPaint().getFontMetrics();
            Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
            float baselineHeightPx = TextUtilsKt.getBaselineHeightPx(fontMetrics);
            TextPaint paint = simpleDraweeSpanTextView.getPaint();
            Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
            SimpleDraweeSpanTextViewUtilsKt.setOptionalText(simpleDraweeSpanTextView, TextUtilsKt.toSpannable$default(subtitle, context, str, false, false, false, false, paint, new Function1() { // from class: com.discord.chat.presentation.message.view.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit sharePrompt_LdU2QRA$lambda$16$lambda$15;
                    sharePrompt_LdU2QRA$lambda$16$lambda$15 = ForumPostActionBarView.setSharePrompt_LdU2QRA$lambda$16$lambda$15(Function2.this, str, (LinkContentNode) obj);
                    return sharePrompt_LdU2QRA$lambda$16$lambda$15;
                }
            }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, false, null, baselineHeightPx, null, false, 117440256, null));
            NestedScrollOnTouchUtilsKt.enableNestedSpanClickListener$default(simpleDraweeSpanTextView, false, 1, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setSharePrompt_LdU2QRA$lambda$16$lambda$15(Function2 function2, String str, LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        function2.invoke(MessageId.m1086boximpl(str), node);
        return Unit.f33074a;
    }

    /* JADX WARN: Removed duplicated region for block: B:27:0x011b  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x012a  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0133  */
    /* JADX WARN: Removed duplicated region for block: B:34:0x014b  */
    /* JADX WARN: Removed duplicated region for block: B:37:0x0161  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x016b  */
    /* renamed from: configure-CgeVRR0  reason: not valid java name */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void m695configureCgeVRR0(@org.jetbrains.annotations.NotNull java.lang.String r26, int r27, boolean r28, java.lang.String r29, @org.jetbrains.annotations.NotNull java.lang.String r30, java.lang.String r31, @org.jetbrains.annotations.NotNull java.lang.String r32, java.util.List<? extends com.discord.reactions.ReactionView.Reaction> r33, com.discord.reactions.ReactionView.Reaction r34, boolean r35, @org.jetbrains.annotations.NotNull java.lang.String r36, com.discord.reactions.ReactionView.ReactionsTheme r37, @org.jetbrains.annotations.NotNull android.view.View.OnClickListener r38, @org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function1<? super com.discord.reactions.ReactionView.Reaction, kotlin.Unit> r39, @org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function1<? super com.discord.reactions.ReactionView.Reaction, kotlin.Unit> r40, @org.jetbrains.annotations.NotNull android.view.View.OnClickListener r41, @org.jetbrains.annotations.NotNull android.view.View.OnClickListener r42, @org.jetbrains.annotations.NotNull android.view.View.OnClickListener r43, com.discord.chat.bridge.forums.PostSharePrompt r44, @org.jetbrains.annotations.NotNull android.view.View.OnClickListener r45, @org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function2<? super com.discord.primitives.MessageId, ? super com.discord.chat.bridge.contentnode.LinkContentNode, kotlin.Unit> r46) {
        /*
            Method dump skipped, instructions count: 412
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.ForumPostActionBarView.m695configureCgeVRR0(java.lang.String, int, boolean, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.util.List, com.discord.reactions.ReactionView$Reaction, boolean, java.lang.String, com.discord.reactions.ReactionView$ReactionsTheme, android.view.View$OnClickListener, kotlin.jvm.functions.Function1, kotlin.jvm.functions.Function1, android.view.View$OnClickListener, android.view.View$OnClickListener, android.view.View$OnClickListener, com.discord.chat.bridge.forums.PostSharePrompt, android.view.View$OnClickListener, kotlin.jvm.functions.Function2):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ForumPostActionBarView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ ForumPostActionBarView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ForumPostActionBarView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        ForumPostActionBarViewBinding inflate = ForumPostActionBarViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        inflate.footerDivider.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        inflate.headerDivider.setBackgroundColor(ThemeManagerKt.getTheme().getBorderSubtle());
        DCDButton dCDButton = inflate.followButton;
        dCDButton.setCornerRadius(SizeUtilsKt.getDpToPx(8));
        dCDButton.setTextSizeSp(14.0f);
        dCDButton.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        DCDButton dCDButton2 = inflate.shareButton;
        dCDButton2.setCornerRadius(SizeUtilsKt.getDpToPx(8));
        dCDButton2.setTextSizeSp(14.0f);
        dCDButton2.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        dCDButton2.setTextColor(Integer.valueOf(ThemeManagerKt.getTheme().getInteractiveTextDefault()));
        dCDButton2.setIconPadding(0);
        DCDButton dCDButton3 = inflate.otherReactionsCount;
        DiscordFont discordFont = DiscordFont.PrimarySemibold;
        dCDButton3.setDiscordFont(discordFont);
        dCDButton3.setTextSizeSp(14.0f);
        dCDButton3.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        dCDButton3.setTextColor(Integer.valueOf(ThemeManagerKt.getTheme().getInteractiveTextDefault()));
        TextView textView = inflate.sharePromptTitle;
        textView.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 16.0f);
        DiscordFontUtilsKt.setDiscordFont(textView, discordFont);
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = inflate.sharePromptSubtitle;
        simpleDraweeSpanTextView.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        SetTextSizeSpKt.setTextSizeSp(simpleDraweeSpanTextView, 14.0f);
        DiscordFont discordFont2 = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(simpleDraweeSpanTextView, discordFont2);
        DCDButton dCDButton4 = inflate.sharePromptCopyLinkButton;
        dCDButton4.setCornerRadius(SizeUtilsKt.getDpToPx(20));
        dCDButton4.setTextSizeSp(14.0f);
        dCDButton4.setBackgroundColor(context.getColor(R.color.brand_500));
        dCDButton4.setTextColor(Integer.valueOf(ThemeManagerKt.getTheme().getWhite()));
        dCDButton4.setDiscordFont(discordFont2);
        dCDButton4.setIconPadding(8);
        DCDButton dCDButton5 = inflate.sharePromptCloseButton;
        dCDButton5.setTextColor(Integer.valueOf(ThemeManagerKt.getTheme().getInteractiveTextDefault()));
        dCDButton5.setBackgroundColor(0);
        dCDButton5.setContentDescription(I18nUtilsKt.i18nFormat$default(context, I18nMessage.DISMISS, null, 2, null));
    }
}
