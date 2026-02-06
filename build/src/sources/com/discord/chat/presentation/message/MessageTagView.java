package com.discord.chat.presentation.message;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.chat.databinding.MessageTagViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.react.utilities.ReactColorToAndroidColorKt;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.theme.R;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007Jo\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u00112\b\u0010\u0013\u001a\u0004\u0018\u00010\r2\b\u0010\u0014\u001a\u0004\u0018\u00010\u00152\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u001c\u0010\u001dR\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001e"}, d2 = {"Lcom/discord/chat/presentation/message/MessageTagView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/MessageTagViewBinding;", "configureTagView", "", "tagText", "", "isVerifiedBot", "", "tagTextColor", "", "tagBackgroundColor", "opTagText", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "messageId", "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "tagType", "tagIconUrl", "configureTagView-Ul7AT2Q", "(Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/chat/presentation/events/ChatEventHandler;Ljava/lang/String;JLjava/lang/String;Ljava/lang/String;)V", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMessageTagView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MessageTagView.kt\ncom/discord/chat/presentation/message/MessageTagView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,87:1\n257#2,2:88\n257#2,2:90\n*S KotlinDebug\n*F\n+ 1 MessageTagView.kt\ncom/discord/chat/presentation/message/MessageTagView\n*L\n56#1:88,2\n83#1:90,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageTagView extends FrameLayout {
    @NotNull
    private final MessageTagViewBinding binding;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MessageTagView(@NotNull Context context, @NotNull AttributeSet attrs) {
        super(context, attrs);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(attrs, "attrs");
        MessageTagViewBinding inflate = MessageTagViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        TextView tag = inflate.tag;
        Intrinsics.checkNotNullExpressionValue(tag, "tag");
        DiscordFontUtilsKt.setDiscordFont(tag, DiscordFont.PrimarySemibold);
        SimpleDraweeView verifiedBotIcon = inflate.verifiedBotIcon;
        Intrinsics.checkNotNullExpressionValue(verifiedBotIcon, "verifiedBotIcon");
        ReactAssetUtilsKt.setReactAsset(verifiedBotIcon, ReactAsset.Check);
        SimpleDraweeView verifiedBotIcon2 = inflate.verifiedBotIcon;
        Intrinsics.checkNotNullExpressionValue(verifiedBotIcon2, "verifiedBotIcon");
        ColorUtilsKt.setTintColor(verifiedBotIcon2, (Integer) (-1));
    }

    /* renamed from: configureTagView-Ul7AT2Q$default  reason: not valid java name */
    public static /* synthetic */ void m530configureTagViewUl7AT2Q$default(MessageTagView messageTagView, String str, Boolean bool, Integer num, Integer num2, String str2, ChatEventHandler chatEventHandler, String str3, long j10, String str4, String str5, int i10, Object obj) {
        String str6;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            str6 = null;
        } else {
            str6 = str5;
        }
        messageTagView.m531configureTagViewUl7AT2Q(str, bool, num, num2, str2, chatEventHandler, str3, j10, str4, str6);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureTagView_Ul7AT2Q$lambda$0(ChatEventHandler chatEventHandler, String str, long j10, String str2, View view) {
        if (chatEventHandler != null) {
            chatEventHandler.mo482onTapTagEqy5D80(str, j10, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureTagView_Ul7AT2Q$lambda$1(ChatEventHandler chatEventHandler, View view) {
        if (chatEventHandler != null) {
            chatEventHandler.onTapOpTag();
        }
    }

    /* renamed from: configureTagView-Ul7AT2Q  reason: not valid java name */
    public final void m531configureTagViewUl7AT2Q(String str, Boolean bool, Integer num, Integer num2, String str2, final ChatEventHandler chatEventHandler, @NotNull final String messageId, final long j10, final String str3, String str4) {
        int colorCompat;
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        int i10 = 8;
        if (str != null) {
            this.binding.tag.setText(str);
            TextView textView = this.binding.tag;
            if (num != null) {
                colorCompat = num.intValue();
            } else {
                Context context = getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                colorCompat = ColorUtilsKt.getColorCompat(context, R.color.white);
            }
            textView.setTextColor(colorCompat);
            ConstraintLayout layout = this.binding.layout;
            Intrinsics.checkNotNullExpressionValue(layout, "layout");
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(layout, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.s0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageTagView.configureTagView_Ul7AT2Q$lambda$0(ChatEventHandler.this, messageId, j10, str3, view);
                }
            }, 1, null);
            SimpleDraweeView verifiedBotIcon = this.binding.verifiedBotIcon;
            Intrinsics.checkNotNullExpressionValue(verifiedBotIcon, "verifiedBotIcon");
            if (Intrinsics.areEqual(bool, Boolean.TRUE)) {
                i10 = 0;
            }
            verifiedBotIcon.setVisibility(i10);
            if (num2 != null) {
                ConstraintLayout layout2 = this.binding.layout;
                Intrinsics.checkNotNullExpressionValue(layout2, "layout");
                ViewBackgroundUtilsKt.setBackgroundRectangle$default(layout2, ReactColorToAndroidColorKt.reactColorToAndroidColor(num2.intValue()), SizeUtilsKt.getDpToPx(4), null, 0, 12, null);
            } else {
                ConstraintLayout layout3 = this.binding.layout;
                Intrinsics.checkNotNullExpressionValue(layout3, "layout");
                ViewBackgroundUtilsKt.setBackgroundDrawableRes(layout3, com.discord.chat.R.drawable.drawable_message_author_tag_bg);
            }
            if (str4 != null) {
                SimpleDraweeView verifiedBotIcon2 = this.binding.verifiedBotIcon;
                Intrinsics.checkNotNullExpressionValue(verifiedBotIcon2, "verifiedBotIcon");
                ReactAssetUtilsKt.setOptionalReactImageUrl(verifiedBotIcon2, str4);
            } else {
                SimpleDraweeView verifiedBotIcon3 = this.binding.verifiedBotIcon;
                Intrinsics.checkNotNullExpressionValue(verifiedBotIcon3, "verifiedBotIcon");
                ReactAssetUtilsKt.setReactAsset(verifiedBotIcon3, ReactAsset.Check);
            }
            SimpleDraweeView verifiedBotIcon4 = this.binding.verifiedBotIcon;
            Intrinsics.checkNotNullExpressionValue(verifiedBotIcon4, "verifiedBotIcon");
            ColorUtilsKt.setTintColor(verifiedBotIcon4, (Integer) (-1));
        } else if (str2 != null) {
            this.binding.tag.setText(str2);
            TextView textView2 = this.binding.tag;
            Context context2 = getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            textView2.setTextColor(ColorUtilsKt.getColorCompat(context2, R.color.brand_560));
            ConstraintLayout layout4 = this.binding.layout;
            Intrinsics.checkNotNullExpressionValue(layout4, "layout");
            Context context3 = getContext();
            Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
            ViewBackgroundUtilsKt.setBackgroundRectangle$default(layout4, ColorUtilsKt.getThemeColor(context3, R.color.brand_200, R.color.brand_260), SizeUtilsKt.getDpToPx(8), null, 0, 12, null);
            ConstraintLayout layout5 = this.binding.layout;
            Intrinsics.checkNotNullExpressionValue(layout5, "layout");
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(layout5, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.t0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MessageTagView.configureTagView_Ul7AT2Q$lambda$1(ChatEventHandler.this, view);
                }
            }, 1, null);
            SimpleDraweeView verifiedBotIcon5 = this.binding.verifiedBotIcon;
            Intrinsics.checkNotNullExpressionValue(verifiedBotIcon5, "verifiedBotIcon");
            verifiedBotIcon5.setVisibility(8);
        }
    }
}
