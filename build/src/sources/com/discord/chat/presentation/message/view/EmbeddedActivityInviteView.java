package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.databinding.EmbeddedActivityInviteViewBinding;
import com.discord.chat.presentation.media.MediaContainingViewResizer;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.core.DCDButton;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.overlapping_circles.OverlappingCirclesView;
import com.discord.overlapping_circles.OverlappingItem;
import com.discord.primitives.MessageId;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000¤\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\r\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010 \n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\r\u001a\u00020\f2\b\u0010\u000b\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0010\u001a\u00020\f2\b\u0010\u000f\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0010\u0010\u000eJ\u0099\u0003\u00103\u001a\u00020\f2\u0006\u0010\u0012\u001a\u00020\u00112\b\u0010\u0014\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0016\u001a\u00020\u00152\u0018\u0010\u0019\u001a\u0014\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\f0\u00172\u0012\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\f0\u001a2\"\u0010\u001e\u001a\u001e\u0012\u0004\u0012\u00020\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0004\u0012\u00020\f0\u001c2*\u0010 \u001a&\u0012\u0004\u0012\u00020\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0004\u0012\u00020\f0\u001f2\u0012\u0010!\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\f0\u001a2\u0018\u0010\"\u001a\u0014\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\f0\u00172*\u0010#\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0004\u0012\u00020\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u001d\u0012\u0004\u0012\u00020\f0\u001f2\u0012\u0010%\u001a\u000e\u0012\u0004\u0012\u00020$\u0012\u0004\u0012\u00020\f0\u001a2\u0012\u0010&\u001a\u000e\u0012\u0004\u0012\u00020$\u0012\u0004\u0012\u00020\f0\u001a2\f\u0010(\u001a\b\u0012\u0004\u0012\u00020\f0'2\u0012\u0010)\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\f0\u001a2\u0012\u0010+\u001a\u000e\u0012\u0004\u0012\u00020*\u0012\u0004\u0012\u00020\f0\u001a2\u0012\u0010-\u001a\u000e\u0012\u0004\u0012\u00020,\u0012\u0004\u0012\u00020\f0\u001a2\u0012\u0010.\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\f0\u001a2\u0012\u00100\u001a\u000e\u0012\u0004\u0012\u00020/\u0012\u0004\u0012\u00020\f0\u001a¢\u0006\u0004\b1\u00102J\u001b\u00106\u001a\u00020\f2\f\u00105\u001a\b\u0012\u0004\u0012\u00020\u001d04¢\u0006\u0004\b6\u00107J\u0015\u00109\u001a\u00020\f2\u0006\u00108\u001a\u00020\u001d¢\u0006\u0004\b9\u0010:J'\u0010=\u001a\u00020\f2\u0006\u0010\u0012\u001a\u00020\u00112\b\u0010;\u001a\u0004\u0018\u00010\u001d2\u0006\u0010<\u001a\u00020\u0006¢\u0006\u0004\b=\u0010>J)\u0010C\u001a\u00020\f2\b\u0010?\u001a\u0004\u0018\u00010\u001d2\b\u0010@\u001a\u0004\u0018\u00010\u00062\u0006\u0010B\u001a\u00020A¢\u0006\u0004\bC\u0010DJ\u0015\u0010G\u001a\u00020\f2\u0006\u0010F\u001a\u00020E¢\u0006\u0004\bG\u0010HR\u0014\u0010J\u001a\u00020I8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bJ\u0010K¨\u0006L"}, d2 = {"Lcom/discord/chat/presentation/message/view/EmbeddedActivityInviteView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "", "titleText", "", "setTitleText", "(Ljava/lang/CharSequence;)V", "headerText", "setHeaderText", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "margins", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "subtitleText", "Lcom/discord/primitives/MessageId;", "messageId", "Lkotlin/Function2;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "onTapLink", "Lkotlin/Function1;", "onLongTapLink", "Lkotlin/Function3;", "", "onTapChannel", "Lkotlin/Function4;", "onLongPressChannel", "onTapAttachmentLink", "onLongPressAttachmentLink", "onTapMention", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "onTapCommand", "onLongPressCommand", "Lkotlin/Function0;", "onTapSpoiler", "onTapTimestamp", "Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;", "onTapInlineCode", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "onTapEmoji", "onTapSeeMore", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "onTapSoundmoji", "setSubtitleText-2dg2Uz0", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", "setSubtitleText", "", "avatarUris", "setAvatarUris", "(Ljava/util/List;)V", "noParticipantsText", "setNoParticipantsText", "(Ljava/lang/String;)V", "splashUrl", "constrainedWidth", "setSplash", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Ljava/lang/String;I)V", "text", ViewProps.BACKGROUND_COLOR, "", ViewProps.ENABLED, "setLaunchButton", "(Ljava/lang/String;Ljava/lang/Integer;Z)V", "Landroid/view/View$OnClickListener;", "onLaunchButtonClickListener", "setOnLaunchButtonClickListener", "(Landroid/view/View$OnClickListener;)V", "Lcom/discord/chat/databinding/EmbeddedActivityInviteViewBinding;", "binding", "Lcom/discord/chat/databinding/EmbeddedActivityInviteViewBinding;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmbeddedActivityInviteView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmbeddedActivityInviteView.kt\ncom/discord/chat/presentation/message/view/EmbeddedActivityInviteView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,210:1\n257#2,2:211\n257#2,2:213\n257#2,2:215\n257#2,2:217\n257#2,2:219\n257#2,2:225\n257#2,2:227\n257#2,2:229\n1563#3:221\n1634#3,3:222\n*S KotlinDebug\n*F\n+ 1 EmbeddedActivityInviteView.kt\ncom/discord/chat/presentation/message/view/EmbeddedActivityInviteView\n*L\n89#1:211,2\n95#1:213,2\n119#1:215,2\n120#1:217,2\n155#1:219,2\n160#1:225,2\n172#1:227,2\n194#1:229,2\n157#1:221\n157#1:222,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbeddedActivityInviteView extends ConstraintLayout {
    @NotNull
    private final EmbeddedActivityInviteViewBinding binding;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public EmbeddedActivityInviteView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setSubtitleText_2dg2Uz0$lambda$8$lambda$7(Function2 function2, String str, LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        function2.invoke(MessageId.m1083boximpl(str), node);
        return Unit.f32056a;
    }

    public final void setAvatarUris(@NotNull List<String> avatarUris) {
        int i10;
        Intrinsics.checkNotNullParameter(avatarUris, "avatarUris");
        boolean isEmpty = avatarUris.isEmpty();
        OverlappingCirclesView participants = this.binding.participants;
        Intrinsics.checkNotNullExpressionValue(participants, "participants");
        int i11 = 8;
        if (!isEmpty) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        participants.setVisibility(i10);
        OverlappingCirclesView overlappingCirclesView = this.binding.participants;
        List<String> list = avatarUris;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList.add(new OverlappingItem(str));
        }
        overlappingCirclesView.setItems(arrayList);
        TextView noParticipantsText = this.binding.noParticipantsText;
        Intrinsics.checkNotNullExpressionValue(noParticipantsText, "noParticipantsText");
        if (isEmpty) {
            i11 = 0;
        }
        noParticipantsText.setVisibility(i11);
    }

    public final void setHeaderText(CharSequence charSequence) {
        boolean z10;
        int i10 = 0;
        if (charSequence != null && charSequence.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        TextView itemHeader = this.binding.itemHeader;
        Intrinsics.checkNotNullExpressionValue(itemHeader, "itemHeader");
        if (z10) {
            i10 = 8;
        }
        itemHeader.setVisibility(i10);
        this.binding.itemHeader.setText(charSequence);
    }

    public final void setLaunchButton(String str, Integer num, boolean z10) {
        boolean z11;
        float f10;
        DCDButton dCDButton = this.binding.launchButton;
        Intrinsics.checkNotNull(dCDButton);
        int i10 = 0;
        if (str != null && str.length() != 0) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z11) {
            i10 = 8;
        }
        dCDButton.setVisibility(i10);
        dCDButton.setText(str);
        dCDButton.setBackgroundColor(num);
        dCDButton.setEnabled(z10);
        if (z10) {
            f10 = 1.0f;
        } else {
            f10 = 0.5f;
        }
        dCDButton.setAlpha(f10);
    }

    public final void setNoParticipantsText(@NotNull String noParticipantsText) {
        Intrinsics.checkNotNullParameter(noParticipantsText, "noParticipantsText");
        this.binding.noParticipantsText.setText(noParticipantsText);
    }

    public final void setOnLaunchButtonClickListener(@NotNull View.OnClickListener onLaunchButtonClickListener) {
        Intrinsics.checkNotNullParameter(onLaunchButtonClickListener, "onLaunchButtonClickListener");
        this.binding.launchButton.setOnClickButtonListener(onLaunchButtonClickListener);
    }

    public final void setSplash(@NotNull MessageMargins margins, String str, int i10) {
        boolean z10;
        int i11;
        Intrinsics.checkNotNullParameter(margins, "margins");
        SimpleDraweeView itemHero = this.binding.itemHero;
        Intrinsics.checkNotNullExpressionValue(itemHero, "itemHero");
        if (str != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        itemHero.setVisibility(i11);
        this.binding.itemHero.setImageURI(str);
        int width = MessageMargins.Companion.getWidth(margins, i10, false);
        int i12 = (width * 9) / 16;
        MediaContainingViewResizer mediaContainingViewResizer = MediaContainingViewResizer.INSTANCE;
        SimpleDraweeView itemHero2 = this.binding.itemHero;
        Intrinsics.checkNotNullExpressionValue(itemHero2, "itemHero");
        mediaContainingViewResizer.resizeLayoutParams(itemHero2, width, i12, width, i12, MediaContainingViewResizer.ResizeMode.Fill);
    }

    /* renamed from: setSubtitleText-2dg2Uz0  reason: not valid java name */
    public final void m689setSubtitleText2dg2Uz0(@NotNull MessageMargins margins, StructurableText structurableText, @NotNull final String messageId, @NotNull final Function2<? super MessageId, ? super LinkContentNode, Unit> onTapLink, @NotNull Function1<? super LinkContentNode, Unit> onLongTapLink, @NotNull Function3 onTapChannel, @NotNull Function4 onLongPressChannel, @NotNull Function1<? super String, Unit> onTapAttachmentLink, @NotNull Function2<? super String, ? super String, Unit> onLongPressAttachmentLink, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, @NotNull Function1<? super CommandMentionContentNode, Unit> onLongPressCommand, @NotNull Function0<Unit> onTapSpoiler, @NotNull Function1<? super String, Unit> onTapTimestamp, @NotNull Function1<? super InlineCodeContentNode, Unit> onTapInlineCode, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function1<? super MessageId, Unit> onTapSeeMore, @NotNull Function1<? super SoundmojiContentNode, Unit> onTapSoundmoji) {
        boolean z10;
        int i10;
        boolean z11;
        int i11;
        Intrinsics.checkNotNullParameter(margins, "margins");
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
        MessageContentView itemSubtitle = this.binding.itemSubtitle;
        Intrinsics.checkNotNullExpressionValue(itemSubtitle, "itemSubtitle");
        if (structurableText != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        itemSubtitle.setVisibility(i10);
        SimpleDraweeView subtitleIcon = this.binding.subtitleIcon;
        Intrinsics.checkNotNullExpressionValue(subtitleIcon, "subtitleIcon");
        if (structurableText != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        subtitleIcon.setVisibility(i11);
        if (structurableText != null) {
            MessageContentView.m698setMessageContent4q5Jro$default(this.binding.itemSubtitle, margins, structurableText, messageId, false, false, false, false, new Function1() { // from class: com.discord.chat.presentation.message.view.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit subtitleText_2dg2Uz0$lambda$8$lambda$7;
                    subtitleText_2dg2Uz0$lambda$8$lambda$7 = EmbeddedActivityInviteView.setSubtitleText_2dg2Uz0$lambda$8$lambda$7(Function2.this, messageId, (LinkContentNode) obj);
                    return subtitleText_2dg2Uz0$lambda$8$lambda$7;
                }
            }, onLongTapLink, onTapChannel, onLongPressChannel, onTapAttachmentLink, onLongPressAttachmentLink, onTapMention, onTapCommand, onLongPressCommand, onTapSpoiler, onTapTimestamp, onTapInlineCode, onTapEmoji, onTapSeeMore, onTapSoundmoji, null, 0, 0, false, null, null, null, null, null, false, -62914560, null);
        }
    }

    public final void setTitleText(CharSequence charSequence) {
        boolean z10;
        int i10 = 0;
        if (charSequence != null && charSequence.length() != 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        TextView itemTitle = this.binding.itemTitle;
        Intrinsics.checkNotNullExpressionValue(itemTitle, "itemTitle");
        if (z10) {
            i10 = 8;
        }
        itemTitle.setVisibility(i10);
        this.binding.itemTitle.setText(charSequence);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public EmbeddedActivityInviteView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ EmbeddedActivityInviteView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EmbeddedActivityInviteView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        EmbeddedActivityInviteViewBinding inflate = EmbeddedActivityInviteViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        TextView textView = inflate.itemTitle;
        textView.setTextColor(ThemeManagerKt.getTheme().getTextSubtle());
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryExtraBold);
        TextView textView2 = inflate.itemHeader;
        textView2.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        Intrinsics.checkNotNull(textView2);
        SetTextSizeSpKt.setTextSizeSp(textView2, 24.0f);
        DiscordFontUtilsKt.setDiscordFont(textView2, DiscordFont.PrimarySemibold);
        MessageContentView messageContentView = inflate.itemSubtitle;
        Intrinsics.checkNotNull(messageContentView);
        DiscordFont discordFont = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(messageContentView, discordFont);
        messageContentView.setTextColor(ThemeManagerKt.getTheme().getTextSubtle());
        SetTextSizeSpKt.setTextSizeSp(messageContentView, 12.0f);
        SimpleDraweeView simpleDraweeView = inflate.subtitleIcon;
        Intrinsics.checkNotNull(simpleDraweeView);
        ReactAssetUtilsKt.setReactAsset(simpleDraweeView, ReactAsset.Speaker);
        ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(ThemeManagerKt.getTheme().getInteractiveTextDefault()));
        TextView textView3 = inflate.noParticipantsText;
        Intrinsics.checkNotNull(textView3);
        DiscordFontUtilsKt.setDiscordFont(textView3, discordFont);
        textView3.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        SetTextSizeSpKt.setTextSizeSp(textView3, 12.0f);
        inflate.launchButton.setTextColor(-1);
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(this, ColorUtilsKt.getColorCompat(context, GetEmbedBackgroundColorKt.getEmbedBackgroundColor()), SizeUtilsKt.getDpToPx(8), null, 0, 12, null);
    }
}
