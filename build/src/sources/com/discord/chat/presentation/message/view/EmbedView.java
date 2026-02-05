package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.graphics.Paint;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.Space;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.embed.Embed;
import com.discord.chat.bridge.embed.EmbedAuthor;
import com.discord.chat.bridge.embed.EmbedFailureState;
import com.discord.chat.bridge.embed.EmbedField;
import com.discord.chat.bridge.embed.EmbedFooter;
import com.discord.chat.bridge.embed.EmbedProvider;
import com.discord.chat.bridge.embed.EmbedThumbnail;
import com.discord.chat.bridge.embed.EmbedType;
import com.discord.chat.bridge.embed.EmbedUtilsKt;
import com.discord.chat.bridge.spoiler.SpoilerConfig;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.databinding.EmbedViewBinding;
import com.discord.chat.presentation.media.MediaContainingViewResizer;
import com.discord.chat.presentation.message.messagepart.MessageMargins;
import com.discord.chat.presentation.message.utils.GetMediaImagePlaceholderStatesListenerKt;
import com.discord.chat.presentation.textutils.TextUtilsKt;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.image.fresco.SetOptionalImageUrlKt;
import com.discord.image.fresco.SimpleDraweeSpanTextViewUtilsKt;
import com.discord.media_player.MediaSource;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.misc.utilities.view.ViewGroupUtilsKt;
import com.discord.misc.utilities.view.ViewUtilsKt;
import com.discord.primitives.MessageId;
import com.discord.react_asset_fetcher.ReactAsset;
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
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Metadata;
import kotlin.Pair;
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
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Ô\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\r\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J9\u0010\u000f\u001a\u00020\r2\b\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0001\u0010\u000b\u001a\u0004\u0018\u00010\n2\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\r0\fH\u0002¢\u0006\u0004\b\u000f\u0010\u0010JK\u0010\u0019\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\u00112\b\u0010\u0014\u001a\u0004\u0018\u00010\u00132\n\b\u0001\u0010\u0015\u001a\u0004\u0018\u00010\n2\b\u0010\u0017\u001a\u0004\u0018\u00010\u00162\u0012\u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\u0011\u0012\u0004\u0012\u00020\r0\fH\u0002¢\u0006\u0004\b\u0019\u0010\u001aJ+\u0010\u001f\u001a\u00020\r2\b\u0010\u001b\u001a\u0004\u0018\u00010\u00112\b\u0010\u001c\u001a\u0004\u0018\u00010\u00112\u0006\u0010\u001e\u001a\u00020\u001dH\u0002¢\u0006\u0004\b\u001f\u0010 J-\u0010\"\u001a\u00020\r2\b\u0010!\u001a\u0004\u0018\u00010\u00162\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\r0\fH\u0002¢\u0006\u0004\b\"\u0010#J!\u0010&\u001a\u00020\r2\b\u0010%\u001a\u0004\u0018\u00010$2\u0006\u0010\u001e\u001a\u00020\u001dH\u0002¢\u0006\u0004\b&\u0010'J?\u0010+\u001a\u00020\r2\u0006\u0010(\u001a\u00020\u00112\b\u0010)\u001a\u0004\u0018\u00010\u00132\b\b\u0001\u0010*\u001a\u00020\n2\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\r0\fH\u0002¢\u0006\u0004\b+\u0010,Jù\u0001\u0010D\u001a\u00020\r2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020.0-2\u0006\u00101\u001a\u0002002\u0006\u00102\u001a\u00020\u001d2\u0006\u00103\u001a\u00020\u001d2\u0006\u00104\u001a\u00020\u001d2\u0006\u00105\u001a\u00020\u001d2\u0018\u00108\u001a\u0014\u0012\u0004\u0012\u000200\u0012\u0004\u0012\u000207\u0012\u0004\u0012\u00020\r062\u0012\u00109\u001a\u000e\u0012\u0004\u0012\u000207\u0012\u0004\u0012\u00020\r0\f2\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\r0\f2\f\u0010;\u001a\b\u0012\u0004\u0012\u00020\r0:2\u0012\u0010=\u001a\u000e\u0012\u0004\u0012\u00020<\u0012\u0004\u0012\u00020\r0\f2\"\u0010?\u001a\u001e\u0012\u0004\u0012\u00020\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0004\u0012\u00020\r0>2*\u0010A\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0004\u0012\u00020\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0004\u0012\u00020\r0@H\u0002¢\u0006\u0004\bB\u0010CJ#\u0010G\u001a\u00020\r2\u0006\u0010E\u001a\u00020\u001d2\n\b\u0002\u0010F\u001a\u0004\u0018\u00010\nH\u0002¢\u0006\u0004\bG\u0010HJ\u001b\u0010J\u001a\u00020\r2\n\b\u0001\u0010I\u001a\u0004\u0018\u00010\nH\u0002¢\u0006\u0004\bJ\u0010KJ7\u0010T\u001a\u00020\r2\u0006\u0010M\u001a\u00020L2\u0006\u0010O\u001a\u00020N2\u0006\u0010Q\u001a\u00020P2\u0006\u0010R\u001a\u00020\n2\u0006\u0010S\u001a\u00020\nH\u0002¢\u0006\u0004\bT\u0010UJ?\u0010X\u001a\u00020\r2\b\u0010V\u001a\u0004\u0018\u00010\u00112\b\u0010W\u001a\u0004\u0018\u00010\u00112\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\r0\f2\u0006\u0010\u001e\u001a\u00020\u001dH\u0002¢\u0006\u0004\bX\u0010YJ;\u0010^\u001a\u00020\r2\b\u0010Z\u001a\u0004\u0018\u00010\u00112\b\b\u0001\u0010[\u001a\u00020\n2\n\b\u0002\u0010\\\u001a\u0004\u0018\u00010\u00112\n\b\u0003\u0010]\u001a\u0004\u0018\u00010\nH\u0002¢\u0006\u0004\b^\u0010_J1\u0010e\u001a\u00020\r2\b\u0010a\u001a\u0004\u0018\u00010`2\u0006\u0010b\u001a\u00020\u001d2\u0006\u0010c\u001a\u00020\u001d2\u0006\u0010d\u001a\u00020\u001dH\u0002¢\u0006\u0004\be\u0010fJ\u000f\u0010g\u001a\u00020\rH\u0002¢\u0006\u0004\bg\u0010hJ\u000f\u0010i\u001a\u00020\rH\u0002¢\u0006\u0004\bi\u0010hJ\u000f\u0010j\u001a\u00020\rH\u0002¢\u0006\u0004\bj\u0010hJ\u000f\u0010k\u001a\u00020\rH\u0002¢\u0006\u0004\bk\u0010hJ\u000f\u0010l\u001a\u00020\rH\u0002¢\u0006\u0004\bl\u0010hJ\u000f\u0010m\u001a\u00020\rH\u0002¢\u0006\u0004\bm\u0010hJ\u000f\u0010n\u001a\u00020\rH\u0002¢\u0006\u0004\bn\u0010hJ\u000f\u0010o\u001a\u00020\rH\u0002¢\u0006\u0004\bo\u0010hJ\u000f\u0010p\u001a\u00020\rH\u0002¢\u0006\u0004\bp\u0010hJ\u000f\u0010q\u001a\u00020\rH\u0002¢\u0006\u0004\bq\u0010hJ\u000f\u0010r\u001a\u00020\rH\u0002¢\u0006\u0004\br\u0010hJ\u000f\u0010s\u001a\u00020\rH\u0002¢\u0006\u0004\bs\u0010hJÜ\u0003\u0010\u0088\u0001\u001a\u00020\r2\u0006\u0010u\u001a\u00020t2\u0006\u0010O\u001a\u00020N2\u0006\u0010w\u001a\u00020v2\u0006\u00101\u001a\u0002002\u0006\u0010x\u001a\u00020\n2\u0006\u0010R\u001a\u00020\n2\u0006\u0010y\u001a\u00020\n2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u00102\u001a\u00020\u001d2\u0006\u00103\u001a\u00020\u001d2\u0006\u00104\u001a\u00020\u001d2\u0006\u00105\u001a\u00020\u001d2 \u0010z\u001a\u001c\u0012\u0004\u0012\u000200\u0012\u0004\u0012\u00020\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0004\u0012\u00020\r0>2 \u0010{\u001a\u001c\u0012\u0004\u0012\u000200\u0012\u0004\u0012\u00020\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0004\u0012\u00020\r0>2\u001c\u0010}\u001a\u0018\u0012\u0006\u0012\u0004\u0018\u00010|\u0012\u0006\u0012\u0004\u0018\u00010\n\u0012\u0004\u0012\u00020\r062\b\u0010\u007f\u001a\u0004\u0018\u00010~2\u0018\u00108\u001a\u0014\u0012\u0004\u0012\u000200\u0012\u0004\u0012\u000207\u0012\u0004\u0012\u00020\r062\u0013\u0010\u0080\u0001\u001a\u000e\u0012\u0004\u0012\u000207\u0012\u0004\u0012\u00020\r0\f2\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\r0\f2\f\u0010;\u001a\b\u0012\u0004\u0012\u00020\r0:2\u0012\u0010=\u001a\u000e\u0012\u0004\u0012\u00020<\u0012\u0004\u0012\u00020\r0\f2\"\u0010?\u001a\u001e\u0012\u0004\u0012\u00020\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0004\u0012\u00020\r0>2*\u0010A\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0004\u0012\u00020\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u0011\u0012\u0004\u0012\u00020\r0@2\u0014\u0010\u0082\u0001\u001a\u000f\u0012\u0005\u0012\u00030\u0081\u0001\u0012\u0004\u0012\u00020\r0\f2\b\u0010a\u001a\u0004\u0018\u00010`2\u0007\u0010\u0083\u0001\u001a\u00020|2\u0007\u0010\u0084\u0001\u001a\u00020\u001d2\u0006\u0010c\u001a\u00020\u001d2\u0006\u0010d\u001a\u00020\u001d2\u0007\u0010\u0085\u0001\u001a\u00020\u001d¢\u0006\u0006\b\u0086\u0001\u0010\u0087\u0001R\u0018\u0010\u008a\u0001\u001a\u00030\u0089\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\b\u008a\u0001\u0010\u008b\u0001R\u0019\u0010O\u001a\u0004\u0018\u00010N8\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\bO\u0010\u008c\u0001R\u0019\u0010\u008d\u0001\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008d\u0001\u0010\u008e\u0001¨\u0006\u008f\u0001"}, d2 = {"Lcom/discord/chat/presentation/message/view/EmbedView;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "provider", "", "providerColor", "Lkotlin/Function1;", "", "onTapCopyText", "setProvider", "(Ljava/lang/CharSequence;Ljava/lang/Integer;Lkotlin/jvm/functions/Function1;)V", "", "rawTitle", "Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "title", "titleColor", "Landroid/view/View$OnClickListener;", "onClickListener", "onLongClickListener", "setTitle", "(Ljava/lang/String;Lcom/facebook/drawee/span/DraweeSpanStringBuilder;Ljava/lang/Integer;Landroid/view/View$OnClickListener;Lkotlin/jvm/functions/Function1;)V", "authorUrl", "authorName", "", "shouldAutoPlayGifs", "setAuthor", "(Ljava/lang/String;Ljava/lang/String;Z)V", "listener", "setAuthorOnClickListener", "(Landroid/view/View$OnClickListener;Lkotlin/jvm/functions/Function1;)V", "Lcom/discord/chat/bridge/embed/EmbedThumbnail;", "thumbnail", "setThumbnail", "(Lcom/discord/chat/bridge/embed/EmbedThumbnail;Z)V", "rawDescription", "description", "descriptionColor", "setDescription", "(Ljava/lang/String;Lcom/facebook/drawee/span/DraweeSpanStringBuilder;ILkotlin/jvm/functions/Function1;)V", "", "Lcom/discord/chat/bridge/embed/EmbedField;", "fields", "Lcom/discord/primitives/MessageId;", "messageId", "shouldAnimateEmoji", "shouldShowLinkDecorations", "shouldShowRoleDot", "shouldShowRoleOnName", "Lkotlin/Function2;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "onLinkClicked", "onLinkLongClicked", "Lkotlin/Function0;", "onTapSpoiler", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "onTapEmoji", "Lkotlin/Function3;", "onTapChannel", "Lkotlin/Function4;", "onTapMention", "setFields-SAQFhFE", "(Ljava/util/List;Ljava/lang/String;ZZZZLkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;)V", "setFields", "isBackgroundColorEnabled", ViewProps.BACKGROUND_COLOR, "setBackgroundColorEnabled", "(ZLjava/lang/Integer;)V", ViewProps.COLOR, "setBorder", "(Ljava/lang/Integer;)V", "Lcom/discord/chat/presentation/message/view/EmbedViewResizingMediaView;", "mediaView", "Lcom/discord/chat/bridge/embed/Embed;", "embed", "Lcom/discord/media_player/MediaSource;", "mediaSource", "maxHeightPx", "maxWidthPx", "setMediaEmbed", "(Lcom/discord/chat/presentation/message/view/EmbedViewResizingMediaView;Lcom/discord/chat/bridge/embed/Embed;Lcom/discord/media_player/MediaSource;II)V", "imageUrl", "text", "setFooter", "(Ljava/lang/String;Ljava/lang/String;Lkotlin/jvm/functions/Function1;Z)V", "error", "textColor", "iconURL", "iconTint", "setError", "(Ljava/lang/String;ILjava/lang/String;Ljava/lang/Integer;)V", "Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "spoilerConfig", "isObscureAwaitingScan", "obscureHideControls", "obscureIsOpaque", "configureSpoiler", "(Lcom/discord/chat/bridge/spoiler/SpoilerConfig;ZZZ)V", "reset", "()V", "clearInlineMedia", "clearBorder", "clearThumbnail", "clearProvider", "clearAuthor", "clearTitle", "clearDescription", "clearFields", "clearMedia", "clearFooter", "clearError", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "margins", "Lcom/discord/primitives/ChannelId;", "channelId", "constrainedWidth", "radiusPx", "onTitleLinkClicked", "onAuthorLinkClicked", "", "onMediaClicked", "Landroid/view/View$OnLongClickListener;", "onMediaLongClicked", "onLongTapLinkNode", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "onTapCommand", "portal", "isObscure", "isForwardedContent", "setEmbed-uKkM4jM", "(Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/embed/Embed;JLjava/lang/String;IIIZZZZZLkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Landroid/view/View$OnLongClickListener;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lcom/discord/chat/bridge/spoiler/SpoilerConfig;DZZZZ)V", "setEmbed", "Lcom/discord/chat/databinding/EmbedViewBinding;", "binding", "Lcom/discord/chat/databinding/EmbedViewBinding;", "Lcom/discord/chat/bridge/embed/Embed;", "maxThumbnailSize", "I", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmbedView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmbedView.kt\ncom/discord/chat/presentation/message/view/EmbedView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 5 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,662:1\n257#2,2:663\n257#2,2:668\n257#2,2:671\n257#2,2:676\n257#2,2:678\n257#2,2:680\n257#2,2:682\n257#2,2:684\n257#2,2:687\n257#2,2:690\n257#2,2:692\n257#2,2:694\n257#2,2:696\n257#2,2:698\n257#2,2:700\n257#2,2:702\n1878#3,3:665\n1878#3,3:673\n1#4:670\n13472#5:686\n13473#5:689\n*S KotlinDebug\n*F\n+ 1 EmbedView.kt\ncom/discord/chat/presentation/message/view/EmbedView\n*L\n137#1:663,2\n380#1:668,2\n455#1:671,2\n512#1:676,2\n526#1:678,2\n540#1:680,2\n569#1:682,2\n582#1:684,2\n608#1:687,2\n613#1:690,2\n627#1:692,2\n640#1:694,2\n646#1:696,2\n653#1:698,2\n654#1:700,2\n659#1:702,2\n283#1:665,3\n457#1:673,3\n605#1:686\n605#1:689\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbedView extends FrameLayout {
    @NotNull
    private final EmbedViewBinding binding;
    private Embed embed;
    private int maxThumbnailSize;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[EmbedType.values().length];
            try {
                iArr[EmbedType.Rich.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public EmbedView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void clearAuthor() {
        TextView authorName = this.binding.authorName;
        Intrinsics.checkNotNullExpressionValue(authorName, "authorName");
        ViewUtilsKt.setOptionalText(authorName, null);
        SimpleDraweeView authorAvatar = this.binding.authorAvatar;
        Intrinsics.checkNotNullExpressionValue(authorAvatar, "authorAvatar");
        SetOptionalImageUrlKt.setOptionalImageUrl$default(authorAvatar, null, null, null, null, 14, null);
        LinearLayout authorContainer = this.binding.authorContainer;
        Intrinsics.checkNotNullExpressionValue(authorContainer, "authorContainer");
        authorContainer.setVisibility(8);
    }

    private final void clearBorder() {
        View border = this.binding.border;
        Intrinsics.checkNotNullExpressionValue(border, "border");
        border.setVisibility(8);
    }

    private final void clearDescription() {
        SimpleDraweeSpanTextView description = this.binding.description;
        Intrinsics.checkNotNullExpressionValue(description, "description");
        SimpleDraweeSpanTextViewUtilsKt.setOptionalText(description, null);
    }

    private final void clearError() {
        TextView error = this.binding.error;
        Intrinsics.checkNotNullExpressionValue(error, "error");
        ViewUtilsKt.setOptionalText(error, null);
        SimpleDraweeView errorIcon = this.binding.errorIcon;
        Intrinsics.checkNotNullExpressionValue(errorIcon, "errorIcon");
        errorIcon.setVisibility(8);
    }

    private final void clearFields() {
        LinearLayout fieldsContainer = this.binding.fieldsContainer;
        Intrinsics.checkNotNullExpressionValue(fieldsContainer, "fieldsContainer");
        fieldsContainer.setVisibility(8);
    }

    private final void clearFooter() {
        TextView footerText = this.binding.footerText;
        Intrinsics.checkNotNullExpressionValue(footerText, "footerText");
        ViewUtilsKt.setOptionalText(footerText, null);
        SimpleDraweeView footerAvatar = this.binding.footerAvatar;
        Intrinsics.checkNotNullExpressionValue(footerAvatar, "footerAvatar");
        SetOptionalImageUrlKt.setOptionalImageUrl$default(footerAvatar, null, null, null, null, 14, null);
        LinearLayout footerContainer = this.binding.footerContainer;
        Intrinsics.checkNotNullExpressionValue(footerContainer, "footerContainer");
        footerContainer.setVisibility(8);
        Space spacer = this.binding.spacer;
        Intrinsics.checkNotNullExpressionValue(spacer, "spacer");
        spacer.setVisibility(0);
    }

    private final void clearInlineMedia() {
        EmbedViewBinding embedViewBinding = this.binding;
        EmbedViewResizingMediaView[] embedViewResizingMediaViewArr = {embedViewBinding.inlineMediaView, embedViewBinding.inlineMediaView2, embedViewBinding.inlineMediaView3, embedViewBinding.inlineMediaView4};
        for (int i10 = 0; i10 < 4; i10++) {
            EmbedViewResizingMediaView embedViewResizingMediaView = embedViewResizingMediaViewArr[i10];
            MediaView.setMediaData$default(embedViewResizingMediaView, null, false, false, false, null, false, null, null, false, false, false, 0, null, null, null, null, null, null, 262142, null);
            embedViewResizingMediaView.setOnMediaClickListeners(null, null);
            Intrinsics.checkNotNull(embedViewResizingMediaView);
            embedViewResizingMediaView.setVisibility(8);
        }
    }

    private final void clearMedia() {
        EmbedViewResizingMediaView embedViewResizingMediaView = this.binding.mediaView;
        MediaView.setMediaData$default(embedViewResizingMediaView, null, false, false, false, null, false, null, null, false, false, false, 0, null, null, null, null, null, null, 262142, null);
        Intrinsics.checkNotNull(embedViewResizingMediaView);
        embedViewResizingMediaView.setVisibility(8);
    }

    private final void clearProvider() {
        SimpleDraweeSpanTextView provider = this.binding.provider;
        Intrinsics.checkNotNullExpressionValue(provider, "provider");
        SimpleDraweeSpanTextViewUtilsKt.setOptionalText(provider, null);
    }

    private final void clearThumbnail() {
        SimpleDraweeView thumbnail = this.binding.thumbnail;
        Intrinsics.checkNotNullExpressionValue(thumbnail, "thumbnail");
        SetOptionalImageUrlKt.setOptionalImageUrl$default(thumbnail, null, null, null, null, 14, null);
    }

    private final void clearTitle() {
        SimpleDraweeSpanTextView title = this.binding.title;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        SimpleDraweeSpanTextViewUtilsKt.setOptionalText(title, null);
        SimpleDraweeSpanTextView title2 = this.binding.title;
        Intrinsics.checkNotNullExpressionValue(title2, "title");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(title2, false, null, 1, null);
    }

    private final void configureSpoiler(SpoilerConfig spoilerConfig, boolean z10, boolean z11, boolean z12) {
        int i10;
        this.binding.spoiler.configure(spoilerConfig, this);
        this.binding.spoiler.handleObscureAwaitingScan(z10);
        this.binding.spoiler.setRevealButtonVisible(!z11);
        this.binding.spoiler.setOpaqueBackgroundVisible(z12);
        FrameLayout imageBlurBg = this.binding.imageBlurBg;
        Intrinsics.checkNotNullExpressionValue(imageBlurBg, "imageBlurBg");
        if (this.binding.spoiler.isOverlayVisible()) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        imageBlurBg.setVisibility(i10);
    }

    private final void reset() {
        clearProvider();
        clearTitle();
        clearDescription();
        clearAuthor();
        clearFields();
        clearInlineMedia();
        clearThumbnail();
        clearBorder();
        clearMedia();
        clearFooter();
        clearError();
    }

    private final void setAuthor(String str, String str2, boolean z10) {
        boolean z11;
        LinearLayout authorContainer = this.binding.authorContainer;
        Intrinsics.checkNotNullExpressionValue(authorContainer, "authorContainer");
        int i10 = 0;
        if ((str != null && !StringsKt.k0(str)) || (str2 != null && !StringsKt.k0(str2))) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (!z11) {
            i10 = 8;
        }
        authorContainer.setVisibility(i10);
        TextView authorName = this.binding.authorName;
        Intrinsics.checkNotNullExpressionValue(authorName, "authorName");
        ViewUtilsKt.setOptionalText(authorName, str2);
        SimpleDraweeView authorAvatar = this.binding.authorAvatar;
        Intrinsics.checkNotNullExpressionValue(authorAvatar, "authorAvatar");
        SetOptionalImageUrlKt.setOptionalImageUrl$default(authorAvatar, str, Boolean.valueOf(z10), null, null, 12, null);
    }

    private final void setAuthorOnClickListener(View.OnClickListener onClickListener, final Function1<? super CharSequence, Unit> function1) {
        TextView textView = this.binding.authorName;
        Intrinsics.checkNotNull(textView);
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(textView, false, onClickListener, 1, null);
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(textView, false, new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.view.p0
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean authorOnClickListener$lambda$22$lambda$21;
                authorOnClickListener$lambda$22$lambda$21 = EmbedView.setAuthorOnClickListener$lambda$22$lambda$21(Function1.this, this, view);
                return authorOnClickListener$lambda$22$lambda$21;
            }
        }, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean setAuthorOnClickListener$lambda$22$lambda$21(Function1 function1, EmbedView embedView, View view) {
        CharSequence text = embedView.binding.authorName.getText();
        Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
        function1.invoke(text);
        return true;
    }

    private final void setBackgroundColorEnabled(boolean z10, Integer num) {
        int embedBackground;
        if (z10) {
            View root = this.binding.getRoot();
            if (num != null) {
                embedBackground = num.intValue();
            } else {
                embedBackground = ThemeManagerKt.getTheme().getEmbedBackground();
            }
            root.setBackgroundColor(embedBackground);
            return;
        }
        this.binding.getRoot().setBackgroundColor(0);
    }

    static /* synthetic */ void setBackgroundColorEnabled$default(EmbedView embedView, boolean z10, Integer num, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            num = null;
        }
        embedView.setBackgroundColorEnabled(z10, num);
    }

    private final void setBorder(Integer num) {
        boolean z10;
        if (num != null) {
            this.binding.border.setBackgroundColor(num.intValue());
        }
        View border = this.binding.border;
        Intrinsics.checkNotNullExpressionValue(border, "border");
        int i10 = 0;
        if (num != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            i10 = 8;
        }
        border.setVisibility(i10);
    }

    private final void setDescription(final String str, DraweeSpanStringBuilder draweeSpanStringBuilder, int i10, final Function1<? super CharSequence, Unit> function1) {
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.description;
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        if (draweeSpanStringBuilder != null) {
            SpannableExtensionsKt.coverWithSpan(draweeSpanStringBuilder, new BackgroundSpanDrawer(simpleDraweeSpanTextView));
        } else {
            draweeSpanStringBuilder = null;
        }
        SimpleDraweeSpanTextViewUtilsKt.setOptionalText(simpleDraweeSpanTextView, draweeSpanStringBuilder);
        simpleDraweeSpanTextView.setTextColor(i10);
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(simpleDraweeSpanTextView, false, new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.view.g0
            @Override // android.view.View.OnLongClickListener
            public final boolean onLongClick(View view) {
                boolean description$lambda$26$lambda$25;
                description$lambda$26$lambda$25 = EmbedView.setDescription$lambda$26$lambda$25(Function1.this, str, view);
                return description$lambda$26$lambda$25;
            }
        }, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean setDescription$lambda$26$lambda$25(Function1 function1, String str, View view) {
        function1.invoke(str);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setEmbed_uKkM4jM$lambda$11$lambda$10(Function2 function2, MediaSource mediaSource, int i10, View view) {
        Double portal = mediaSource.getPortal();
        if (portal == null || !mediaSource.isValid()) {
            portal = null;
        }
        function2.invoke(portal, Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setEmbed_uKkM4jM$lambda$14$lambda$13(Function2 function2, MediaSource mediaSource, boolean z10, EmbedView embedView, View view) {
        Double portal = mediaSource.getPortal();
        if (portal == null || !mediaSource.isValid()) {
            portal = null;
        }
        function2.invoke(portal, null);
        if (z10) {
            embedView.binding.spoiler.makeObscureHideButtonHidden();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setEmbed_uKkM4jM$lambda$3$lambda$2(Function2 function2, MediaSource mediaSource, boolean z10, EmbedView embedView, View view) {
        Double portal = mediaSource.getPortal();
        if (portal == null || !mediaSource.isValid()) {
            portal = null;
        }
        function2.invoke(portal, null);
        if (z10) {
            embedView.binding.spoiler.makeObscureHideButtonHidden();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setEmbed_uKkM4jM$lambda$5$lambda$4(Function3 function3, String str, String str2, DraweeSpanStringBuilder draweeSpanStringBuilder, View view) {
        String str3;
        MessageId m1085boximpl = MessageId.m1085boximpl(str);
        if (draweeSpanStringBuilder != null) {
            str3 = draweeSpanStringBuilder.toString();
        } else {
            str3 = null;
        }
        if (str3 == null) {
            str3 = "";
        }
        function3.invoke(m1085boximpl, str2, str3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setEmbed_uKkM4jM$lambda$6(Function2 function2, String str, LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        function2.invoke(MessageId.m1085boximpl(str), node);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setEmbed_uKkM4jM$lambda$8$lambda$7(Function3 function3, String str, Embed embed, View view) {
        function3.invoke(MessageId.m1085boximpl(str), embed.getAuthor().getUrl(), embed.getAuthor().getName());
    }

    private final void setError(String str, int i10, String str2, Integer num) {
        boolean z10;
        TextView textView = this.binding.error;
        Intrinsics.checkNotNull(textView);
        ViewUtilsKt.setOptionalText(textView, str);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryMedium);
        textView.setTextColor(i10);
        SimpleDraweeView errorIcon = this.binding.errorIcon;
        Intrinsics.checkNotNullExpressionValue(errorIcon, "errorIcon");
        if (num != null) {
            i10 = num.intValue();
        }
        ColorUtilsKt.setTintColor(errorIcon, Integer.valueOf(i10));
        SimpleDraweeView errorIcon2 = this.binding.errorIcon;
        Intrinsics.checkNotNullExpressionValue(errorIcon2, "errorIcon");
        ReactAssetUtilsKt.setOptionalReactImageUrl(errorIcon2, str2);
        SimpleDraweeView errorIcon3 = this.binding.errorIcon;
        Intrinsics.checkNotNullExpressionValue(errorIcon3, "errorIcon");
        int i11 = 0;
        if (str != null && !StringsKt.k0(str)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i11 = 8;
        }
        errorIcon3.setVisibility(i11);
    }

    static /* synthetic */ void setError$default(EmbedView embedView, String str, int i10, String str2, Integer num, int i11, Object obj) {
        if ((i11 & 4) != 0) {
            str2 = null;
        }
        if ((i11 & 8) != 0) {
            num = null;
        }
        embedView.setError(str, i10, str2, num);
    }

    /* renamed from: setFields-SAQFhFE  reason: not valid java name */
    private final void m689setFieldsSAQFhFE(List<EmbedField> list, String str, boolean z10, boolean z11, boolean z12, boolean z13, final Function2<? super MessageId, ? super LinkContentNode, Unit> function2, Function1<? super LinkContentNode, Unit> function1, Function1<? super CharSequence, Unit> function12, Function0<Unit> function0, Function1<? super EmojiContentNode, Unit> function13, Function3 function3, Function4 function4) {
        LinearLayout linearLayout;
        String str2;
        String str3;
        EmbedFieldView embedFieldView;
        DraweeSpanStringBuilder draweeSpanStringBuilder;
        String str4;
        final String str5 = str;
        Function1 function14 = new Function1() { // from class: com.discord.chat.presentation.message.view.i0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit fields_SAQFhFE$lambda$27;
                fields_SAQFhFE$lambda$27 = EmbedView.setFields_SAQFhFE$lambda$27(Function2.this, str5, (LinkContentNode) obj);
                return fields_SAQFhFE$lambda$27;
            }
        };
        final LinearLayout linearLayout2 = this.binding.fieldsContainer;
        Intrinsics.checkNotNull(linearLayout2);
        int i10 = 0;
        linearLayout2.setVisibility(!list.isEmpty() ? 0 : 8);
        ViewGroupUtilsKt.setUpLayoutForList(linearLayout2, list.size(), new Function0() { // from class: com.discord.chat.presentation.message.view.j0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                View fields_SAQFhFE$lambda$31$lambda$28;
                fields_SAQFhFE$lambda$31$lambda$28 = EmbedView.setFields_SAQFhFE$lambda$31$lambda$28(linearLayout2);
                return fields_SAQFhFE$lambda$31$lambda$28;
            }
        });
        for (Object obj : list) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            EmbedField embedField = (EmbedField) obj;
            View childAt = linearLayout2.getChildAt(i10);
            Intrinsics.checkNotNull(childAt, "null cannot be cast to non-null type com.discord.chat.presentation.message.view.EmbedFieldView");
            EmbedFieldView embedFieldView2 = (EmbedFieldView) childAt;
            String rawName = embedField.getRawName();
            if (rawName == null) {
                rawName = "";
            }
            StructurableText name = embedField.getName();
            DraweeSpanStringBuilder draweeSpanStringBuilder2 = null;
            if (name != null) {
                LinearLayout linearLayout3 = linearLayout2;
                Context context = embedFieldView2.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                TextPaint paint = embedFieldView2.getBinding().name.getPaint();
                Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
                str2 = "getPaint(...)";
                str3 = "getContext(...)";
                linearLayout = linearLayout3;
                draweeSpanStringBuilder = TextUtilsKt.toSpannable$default(name, context, str5, z10, z11, z12, z13, paint, function14, function1, function3, null, null, null, function4, null, null, null, null, function13, null, function0, null, false, null, 0.0f, null, false, 132897792, null);
                embedFieldView = embedFieldView2;
                rawName = rawName;
            } else {
                linearLayout = linearLayout2;
                str2 = "getPaint(...)";
                str3 = "getContext(...)";
                embedFieldView = embedFieldView2;
                draweeSpanStringBuilder = null;
            }
            embedFieldView.setName(rawName, draweeSpanStringBuilder, function12);
            String rawValue = embedField.getRawValue();
            String str6 = rawValue != null ? rawValue : "";
            StructurableText value = embedField.getValue();
            if (value != null) {
                EmbedFieldView embedFieldView3 = embedFieldView;
                Context context2 = embedFieldView3.getContext();
                Intrinsics.checkNotNullExpressionValue(context2, str3);
                TextPaint paint2 = embedFieldView3.getBinding().value.getPaint();
                Intrinsics.checkNotNullExpressionValue(paint2, str2);
                Paint.FontMetrics fontMetrics = embedFieldView3.getBinding().value.getPaint().getFontMetrics();
                Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
                draweeSpanStringBuilder2 = TextUtilsKt.toSpannable$default(value, context2, str, z10, z11, z12, z13, paint2, function14, function1, function3, null, null, null, function4, null, null, null, null, function13, null, function0, null, false, null, TextUtilsKt.getBaselineHeightPx(fontMetrics), null, false, 116120576, null);
                embedFieldView = embedFieldView3;
                str4 = str6;
            } else {
                str4 = str6;
            }
            embedFieldView.setValue(str4, draweeSpanStringBuilder2, function12);
            str5 = str;
            i10 = i11;
            linearLayout2 = linearLayout;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setFields_SAQFhFE$lambda$27(Function2 function2, String str, LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        function2.invoke(MessageId.m1085boximpl(str), node);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final View setFields_SAQFhFE$lambda$31$lambda$28(LinearLayout linearLayout) {
        Context context = linearLayout.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return new EmbedFieldView(context, null, 0, 6, null);
    }

    private final void setFooter(String str, final String str2, final Function1<? super CharSequence, Unit> function1, boolean z10) {
        boolean z11;
        int i10;
        View.OnLongClickListener onLongClickListener;
        LinearLayout footerContainer = this.binding.footerContainer;
        Intrinsics.checkNotNullExpressionValue(footerContainer, "footerContainer");
        if ((str != null && !StringsKt.k0(str)) || (str2 != null && !StringsKt.k0(str2))) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        footerContainer.setVisibility(i10);
        SimpleDraweeView footerAvatar = this.binding.footerAvatar;
        Intrinsics.checkNotNullExpressionValue(footerAvatar, "footerAvatar");
        SetOptionalImageUrlKt.setOptionalImageUrl$default(footerAvatar, str, Boolean.valueOf(z10), null, null, 12, null);
        TextView textView = this.binding.footerText;
        Intrinsics.checkNotNull(textView);
        ViewUtilsKt.setOptionalText(textView, str2);
        if (str2 != null) {
            onLongClickListener = new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.view.q0
                @Override // android.view.View.OnLongClickListener
                public final boolean onLongClick(View view) {
                    boolean footer$lambda$36$lambda$35$lambda$34;
                    footer$lambda$36$lambda$35$lambda$34 = EmbedView.setFooter$lambda$36$lambda$35$lambda$34(Function1.this, str2, view);
                    return footer$lambda$36$lambda$35$lambda$34;
                }
            };
        } else {
            onLongClickListener = null;
        }
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(textView, false, onLongClickListener, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean setFooter$lambda$36$lambda$35$lambda$34(Function1 function1, String str, View view) {
        function1.invoke(str);
        return true;
    }

    private final void setMediaEmbed(EmbedViewResizingMediaView embedViewResizingMediaView, Embed embed, MediaSource mediaSource, int i10, int i11) {
        int i12;
        int i13;
        boolean z10 = false;
        if (i10 > 0 && i11 > 0) {
            Pair<Integer, Integer> targetDimensions = EmbedUtilsKt.getTargetDimensions(embed);
            Integer num = (Integer) targetDimensions.a();
            Integer num2 = (Integer) targetDimensions.b();
            if (num != null) {
                i12 = num.intValue();
            } else {
                i12 = 0;
            }
            if (num2 != null) {
                i13 = num2.intValue();
            } else {
                i13 = 0;
            }
            embedViewResizingMediaView.setTarget(i12, i13, i10, i11);
        }
        embedViewResizingMediaView.setVisibility(0);
        EmbedThumbnail thumbnail = embed.getThumbnail();
        if (thumbnail != null) {
            z10 = Intrinsics.areEqual(thumbnail.getShowPlayButton(), Boolean.TRUE);
        }
        MediaView.setMediaData$default(embedViewResizingMediaView, mediaSource, false, false, false, null, false, null, null, false, z10, false, 0, new Function0() { // from class: com.discord.chat.presentation.message.view.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit mediaEmbed$lambda$33;
                mediaEmbed$lambda$33 = EmbedView.setMediaEmbed$lambda$33(EmbedView.this);
                return mediaEmbed$lambda$33;
            }
        }, null, null, null, null, null, 257534, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setMediaEmbed$lambda$33(EmbedView embedView) {
        embedView.binding.spoiler.makeObscureHideButtonHidden();
        return Unit.f31988a;
    }

    private final void setProvider(final CharSequence charSequence, Integer num, final Function1<? super CharSequence, Unit> function1) {
        int textDefault;
        View.OnLongClickListener onLongClickListener;
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.provider;
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        ViewUtilsKt.setOptionalText(simpleDraweeSpanTextView, charSequence);
        if (num != null) {
            textDefault = num.intValue();
        } else {
            textDefault = ThemeManagerKt.getTheme().getTextDefault();
        }
        simpleDraweeSpanTextView.setTextColor(textDefault);
        if (charSequence != null) {
            onLongClickListener = new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.view.s0
                @Override // android.view.View.OnLongClickListener
                public final boolean onLongClick(View view) {
                    boolean provider$lambda$17$lambda$16$lambda$15;
                    provider$lambda$17$lambda$16$lambda$15 = EmbedView.setProvider$lambda$17$lambda$16$lambda$15(Function1.this, charSequence, view);
                    return provider$lambda$17$lambda$16$lambda$15;
                }
            };
        } else {
            onLongClickListener = null;
        }
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(simpleDraweeSpanTextView, false, onLongClickListener, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean setProvider$lambda$17$lambda$16$lambda$15(Function1 function1, CharSequence charSequence, View view) {
        function1.invoke(charSequence);
        return true;
    }

    private final void setThumbnail(EmbedThumbnail embedThumbnail, boolean z10) {
        int i10;
        int i11;
        String str;
        String str2;
        SimpleDraweeView simpleDraweeView = this.binding.thumbnail;
        MediaContainingViewResizer mediaContainingViewResizer = MediaContainingViewResizer.INSTANCE;
        Intrinsics.checkNotNull(simpleDraweeView);
        boolean z11 = false;
        if (embedThumbnail != null) {
            i10 = embedThumbnail.getWidth();
        } else {
            i10 = 0;
        }
        if (embedThumbnail != null) {
            i11 = embedThumbnail.getHeight();
        } else {
            i11 = 0;
        }
        int i12 = this.maxThumbnailSize;
        MediaContainingViewResizer.resizeLayoutParams$default(mediaContainingViewResizer, simpleDraweeView, i10, i11, i12, i12, null, 16, null);
        Integer num = null;
        if (embedThumbnail != null) {
            str = embedThumbnail.getProxyURL();
        } else {
            str = null;
        }
        Boolean valueOf = Boolean.valueOf(z10);
        if (embedThumbnail != null) {
            z11 = embedThumbnail.getSrcIsAnimated();
        }
        Boolean valueOf2 = Boolean.valueOf(z11);
        SimpleDraweeView thumbnail = this.binding.thumbnail;
        Intrinsics.checkNotNullExpressionValue(thumbnail, "thumbnail");
        if (embedThumbnail != null) {
            str2 = embedThumbnail.getPlaceholder();
        } else {
            str2 = null;
        }
        if (embedThumbnail != null) {
            num = embedThumbnail.getPlaceholderVersion();
        }
        SetOptionalImageUrlKt.setOptionalImageUrl(simpleDraweeView, str, valueOf, valueOf2, GetMediaImagePlaceholderStatesListenerKt.getMediaImagePlaceholderStatesListener(thumbnail, str2, num));
    }

    private final void setTitle(final String str, DraweeSpanStringBuilder draweeSpanStringBuilder, Integer num, View.OnClickListener onClickListener, final Function1<? super String, Unit> function1) {
        int textDefault;
        View.OnLongClickListener onLongClickListener;
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.title;
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        SimpleDraweeSpanTextViewUtilsKt.setOptionalText(simpleDraweeSpanTextView, draweeSpanStringBuilder);
        if (num != null) {
            textDefault = num.intValue();
        } else {
            textDefault = ThemeManagerKt.getTheme().getTextDefault();
        }
        simpleDraweeSpanTextView.setTextColor(textDefault);
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(simpleDraweeSpanTextView, false, onClickListener, 1, null);
        if (draweeSpanStringBuilder != null) {
            onLongClickListener = new View.OnLongClickListener() { // from class: com.discord.chat.presentation.message.view.r0
                @Override // android.view.View.OnLongClickListener
                public final boolean onLongClick(View view) {
                    boolean title$lambda$20$lambda$19$lambda$18;
                    title$lambda$20$lambda$19$lambda$18 = EmbedView.setTitle$lambda$20$lambda$19$lambda$18(Function1.this, str, view);
                    return title$lambda$20$lambda$19$lambda$18;
                }
            };
        } else {
            onLongClickListener = null;
        }
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(simpleDraweeSpanTextView, false, onLongClickListener, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean setTitle$lambda$20$lambda$19$lambda$18(Function1 function1, String str, View view) {
        function1.invoke(str);
        return true;
    }

    /* renamed from: setEmbed-uKkM4jM  reason: not valid java name */
    public final void m690setEmbeduKkM4jM(@NotNull MessageMargins margins, @NotNull final Embed embed, long j10, @NotNull String messageId, int i10, int i11, int i12, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, @NotNull final Function3 onTitleLinkClicked, @NotNull final Function3 onAuthorLinkClicked, @NotNull final Function2<? super Double, ? super Integer, Unit> onMediaClicked, View.OnLongClickListener onLongClickListener, @NotNull final Function2<? super MessageId, ? super LinkContentNode, Unit> onLinkClicked, @NotNull Function1<? super LinkContentNode, Unit> onLongTapLinkNode, @NotNull Function1<? super CharSequence, Unit> onTapCopyText, @NotNull Function0<Unit> onTapSpoiler, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function3 onTapChannel, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, SpoilerConfig spoilerConfig, double d10, final boolean z15, boolean z16, boolean z17, boolean z18) {
        final String str;
        final DraweeSpanStringBuilder draweeSpanStringBuilder;
        Integer headerTextColor;
        boolean z19;
        final String str2;
        DraweeSpanStringBuilder draweeSpanStringBuilder2;
        boolean z20;
        boolean z21;
        final EmbedView embedView = this;
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(embed, "embed");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(onTitleLinkClicked, "onTitleLinkClicked");
        Intrinsics.checkNotNullParameter(onAuthorLinkClicked, "onAuthorLinkClicked");
        Intrinsics.checkNotNullParameter(onMediaClicked, "onMediaClicked");
        Intrinsics.checkNotNullParameter(onLinkClicked, "onLinkClicked");
        Intrinsics.checkNotNullParameter(onLongTapLinkNode, "onLongTapLinkNode");
        Intrinsics.checkNotNullParameter(onTapCopyText, "onTapCopyText");
        Intrinsics.checkNotNullParameter(onTapSpoiler, "onTapSpoiler");
        Intrinsics.checkNotNullParameter(onTapEmoji, "onTapEmoji");
        Intrinsics.checkNotNullParameter(onTapChannel, "onTapChannel");
        Intrinsics.checkNotNullParameter(onTapMention, "onTapMention");
        Intrinsics.checkNotNullParameter(onTapCommand, "onTapCommand");
        if (!Intrinsics.areEqual(embed, embedView.embed)) {
            embedView.reset();
            embedView.embed = embed;
        }
        View root = embedView.binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        ViewClippingUtilsKt.clipToRoundedRectangle(root, i12);
        ConstraintLayout inlineMediaContainer = embedView.binding.inlineMediaContainer;
        Intrinsics.checkNotNullExpressionValue(inlineMediaContainer, "inlineMediaContainer");
        ViewClippingUtilsKt.clipToRoundedRectangle(inlineMediaContainer, i12);
        EmbedViewResizingMediaView mediaView = embedView.binding.mediaView;
        Intrinsics.checkNotNullExpressionValue(mediaView, "mediaView");
        ViewClippingUtilsKt.clipToRoundedRectangle(mediaView, i12);
        SimpleDraweeView thumbnail = embedView.binding.thumbnail;
        Intrinsics.checkNotNullExpressionValue(thumbnail, "thumbnail");
        ViewClippingUtilsKt.clipToRoundedRectangle(thumbnail, i12);
        if (EmbedUtilsKt.isInlineMedia(embed)) {
            final MediaSource m393toMediaSourceUBIQNlQ = EmbedUtilsKt.m393toMediaSourceUBIQNlQ(embed, j10, messageId, z10, Double.valueOf(d10));
            if (m393toMediaSourceUBIQNlQ != null) {
                Space spacer = embedView.binding.spacer;
                Intrinsics.checkNotNullExpressionValue(spacer, "spacer");
                spacer.setVisibility(8);
                if (m393toMediaSourceUBIQNlQ.getPreviewUrl() != null) {
                    EmbedViewResizingMediaView mediaView2 = embedView.binding.mediaView;
                    Intrinsics.checkNotNullExpressionValue(mediaView2, "mediaView");
                    embedView.setMediaEmbed(mediaView2, embed, m393toMediaSourceUBIQNlQ, i11, MessageMargins.Companion.getWidth(margins, i10, z18));
                    embedView.binding.mediaView.setOnMediaClickListeners(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.f0
                        @Override // android.view.View.OnClickListener
                        public final void onClick(View view) {
                            EmbedView.setEmbed_uKkM4jM$lambda$3$lambda$2(Function2.this, m393toMediaSourceUBIQNlQ, z15, embedView, view);
                        }
                    }, onLongClickListener);
                    z21 = false;
                    setBackgroundColorEnabled$default(embedView, false, null, 2, null);
                } else {
                    z21 = false;
                }
                z19 = z21;
                z20 = true;
            } else {
                z20 = true;
                z19 = false;
            }
        } else {
            StructurableText title = embed.getTitle();
            if (title != null) {
                Context context = embedView.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                TextPaint paint = embedView.binding.title.getPaint();
                Intrinsics.checkNotNullExpressionValue(paint, "getPaint(...)");
                draweeSpanStringBuilder = TextUtilsKt.toSpannable$default(title, context, messageId, z11, z12, z13, z14, paint, null, null, onTapChannel, null, null, null, onTapMention, onTapCommand, null, null, null, onTapEmoji, null, onTapSpoiler, null, false, null, 0.0f, null, false, 132881792, null);
                str = messageId;
            } else {
                str = messageId;
                draweeSpanStringBuilder = null;
            }
            String rawTitle = embed.getRawTitle();
            if (rawTitle == null) {
                rawTitle = "";
            }
            if (embed.getUrl() != null) {
                headerTextColor = Integer.valueOf(ThemeManagerKt.getTheme().getTextLink());
            } else {
                headerTextColor = embed.getHeaderTextColor();
            }
            final String url = embed.getUrl();
            z19 = false;
            embedView = this;
            embedView.setTitle(rawTitle, draweeSpanStringBuilder, headerTextColor, url != null ? new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.k0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    EmbedView.setEmbed_uKkM4jM$lambda$5$lambda$4(Function3.this, str, url, draweeSpanStringBuilder, view);
                }
            } : null, onTapCopyText);
            String rawDescription = embed.getRawDescription();
            if (rawDescription == null) {
                rawDescription = "";
            }
            StructurableText description = embed.getDescription();
            if (description != null) {
                Context context2 = embedView.getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                TextPaint paint2 = embedView.binding.description.getPaint();
                Intrinsics.checkNotNullExpressionValue(paint2, "getPaint(...)");
                Paint.FontMetrics fontMetrics = embedView.binding.description.getPaint().getFontMetrics();
                Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
                String str3 = str;
                draweeSpanStringBuilder2 = TextUtilsKt.toSpannable$default(description, context2, str3, z11, z12, z13, z14, paint2, new Function1() { // from class: com.discord.chat.presentation.message.view.l0
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit embed_uKkM4jM$lambda$6;
                        embed_uKkM4jM$lambda$6 = EmbedView.setEmbed_uKkM4jM$lambda$6(Function2.this, str, (LinkContentNode) obj);
                        return embed_uKkM4jM$lambda$6;
                    }
                }, onLongTapLinkNode, onTapChannel, null, null, null, onTapMention, onTapCommand, null, null, null, onTapEmoji, null, onTapSpoiler, null, false, null, TextUtilsKt.getBaselineHeightPx(fontMetrics), null, false, 116104192, null);
                str2 = str3;
            } else {
                str2 = str;
                draweeSpanStringBuilder2 = null;
            }
            embedView.setDescription(rawDescription, draweeSpanStringBuilder2, embed.getBodyTextColor(), onTapCopyText);
            EmbedProvider provider = embed.getProvider();
            embedView.setProvider(provider != null ? provider.getName() : null, embed.getProviderColor(), onTapCopyText);
            embedView.setBackgroundColorEnabled(!Intrinsics.areEqual(embed.getDisableBackgroundColor(), Boolean.TRUE), embed.getBackgroundColor());
            embedView.setBorder(embed.getBorderLeftColor());
            EmbedAuthor author = embed.getAuthor();
            String imageUrl = author != null ? author.getImageUrl() : null;
            EmbedAuthor author2 = embed.getAuthor();
            embedView.setAuthor(imageUrl, author2 != null ? author2.getName() : null, z10);
            EmbedAuthor author3 = embed.getAuthor();
            embedView.setAuthorOnClickListener((author3 == null || author3.getUrl() == null) ? null : new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.m0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    EmbedView.setEmbed_uKkM4jM$lambda$8$lambda$7(Function3.this, str2, embed, view);
                }
            }, onTapCopyText);
            List<EmbedField> fields = embed.getFields();
            if (fields == null) {
                fields = CollectionsKt.l();
            }
            embedView.m689setFieldsSAQFhFE(fields, str2, z11, z12, z13, z14, onLinkClicked, onLongTapLinkNode, onTapCopyText, onTapSpoiler, onTapEmoji, onTapChannel, onTapMention);
            EmbedFooter footer = embed.getFooter();
            String imageUrl2 = footer != null ? footer.getImageUrl() : null;
            EmbedFooter footer2 = embed.getFooter();
            embedView.setFooter(imageUrl2, footer2 != null ? footer2.getContent() : null, onTapCopyText, z10);
            if (embed.getFailureState() == EmbedFailureState.AUTO_MODERATION_BLOCKED_MESSAGE) {
                embedView.setError(embed.getMessageSendError(), ThemeManagerKt.getTheme().getTextMuted(), embed.getIconURL(), Integer.valueOf(ColorUtilsKt.getColorCompat(embedView, R.color.red_345)));
            } else {
                embedView.setError(embed.getMessageSendError(), embed.getBodyTextColor(), embed.getIconURL(), null);
            }
            List<MediaSource> m392toImageMediaSourcesSHRpUJI = EmbedUtilsKt.m392toImageMediaSourcesSHRpUJI(embed, j10, messageId);
            if (m392toImageMediaSourcesSHRpUJI != null) {
                int i13 = (int) (i11 * 0.75d);
                int widthForEmbedContent = MessageMargins.Companion.getWidthForEmbedContent(margins, i10, z18);
                MediaContainingViewResizer mediaContainingViewResizer = MediaContainingViewResizer.INSTANCE;
                ConstraintLayout inlineMediaContainer2 = embedView.binding.inlineMediaContainer;
                Intrinsics.checkNotNullExpressionValue(inlineMediaContainer2, "inlineMediaContainer");
                MediaContainingViewResizer.resizeLayoutParams$default(mediaContainingViewResizer, inlineMediaContainer2, widthForEmbedContent, i13, widthForEmbedContent, i13, null, 16, null);
                EmbedViewBinding embedViewBinding = embedView.binding;
                final int i14 = 0;
                for (Object obj : CollectionsKt.q1(m392toImageMediaSourcesSHRpUJI, new EmbedViewResizingMediaView[]{embedViewBinding.inlineMediaView, embedViewBinding.inlineMediaView2, embedViewBinding.inlineMediaView3, embedViewBinding.inlineMediaView4})) {
                    int i15 = i14 + 1;
                    if (i14 < 0) {
                        CollectionsKt.v();
                    }
                    Pair pair = (Pair) obj;
                    final MediaSource mediaSource = (MediaSource) pair.a();
                    Object b10 = pair.b();
                    Intrinsics.checkNotNullExpressionValue(b10, "component2(...)");
                    EmbedViewResizingMediaView embedViewResizingMediaView = (EmbedViewResizingMediaView) b10;
                    embedView.setMediaEmbed(embedViewResizingMediaView, embed, mediaSource, 0, 0);
                    embedViewResizingMediaView.setOnMediaClickListeners(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.n0
                        @Override // android.view.View.OnClickListener
                        public final void onClick(View view) {
                            EmbedView.setEmbed_uKkM4jM$lambda$11$lambda$10(Function2.this, mediaSource, i14, view);
                        }
                    }, onLongClickListener);
                    i14 = i15;
                }
                z20 = true;
            } else {
                final MediaSource m393toMediaSourceUBIQNlQ2 = EmbedUtilsKt.m393toMediaSourceUBIQNlQ(embed, j10, messageId, z10, Double.valueOf(d10));
                if (m393toMediaSourceUBIQNlQ2 != null) {
                    EmbedViewResizingMediaView inlineMediaView = embedView.binding.inlineMediaView;
                    Intrinsics.checkNotNullExpressionValue(inlineMediaView, "inlineMediaView");
                    embedView.setMediaEmbed(inlineMediaView, embed, m393toMediaSourceUBIQNlQ2, i11, MessageMargins.Companion.getWidthForEmbedContent(margins, i10, z18));
                    embedView.binding.inlineMediaView.setOnMediaClickListeners(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.o0
                        @Override // android.view.View.OnClickListener
                        public final void onClick(View view) {
                            EmbedView.setEmbed_uKkM4jM$lambda$14$lambda$13(Function2.this, m393toMediaSourceUBIQNlQ2, z15, embedView, view);
                        }
                    }, onLongClickListener);
                }
                z20 = true;
                if (WhenMappings.$EnumSwitchMapping$0[embed.getType().ordinal()] != 1 ? m393toMediaSourceUBIQNlQ2 == null : embed.getVideo() == null) {
                    embedView.setThumbnail(embed.getThumbnail(), z10);
                }
            }
        }
        String obscureAwaitingScan = embed.getObscureAwaitingScan();
        embedView.configureSpoiler(spoilerConfig, !((obscureAwaitingScan == null || StringsKt.k0(obscureAwaitingScan)) ? z20 : z19), z16, z17);
    }

    public /* synthetic */ EmbedView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EmbedView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        EmbedViewBinding inflate = EmbedViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.maxThumbnailSize = context.getResources().getDimensionPixelSize(com.discord.chat.R.dimen.message_embed_max_thumbnail_size);
        inflate.getRoot().setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = inflate.provider;
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        SetTextSizeSpKt.setTextSizeSp(simpleDraweeSpanTextView, 10.0f);
        DiscordFont discordFont = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(simpleDraweeSpanTextView, discordFont);
        SimpleDraweeView authorAvatar = inflate.authorAvatar;
        Intrinsics.checkNotNullExpressionValue(authorAvatar, "authorAvatar");
        ViewClippingUtilsKt.clipToCircle(authorAvatar);
        TextView authorName = inflate.authorName;
        Intrinsics.checkNotNullExpressionValue(authorName, "authorName");
        DiscordFont discordFont2 = DiscordFont.PrimarySemibold;
        DiscordFontUtilsKt.setDiscordFont(authorName, discordFont2);
        inflate.authorName.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        TextView authorName2 = inflate.authorName;
        Intrinsics.checkNotNullExpressionValue(authorName2, "authorName");
        SetTextSizeSpKt.setTextSizeSp(authorName2, 12.0f);
        SimpleDraweeSpanTextView title = inflate.title;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        DiscordFontUtilsKt.setDiscordFont(title, discordFont2);
        SimpleDraweeSpanTextView title2 = inflate.title;
        Intrinsics.checkNotNullExpressionValue(title2, "title");
        SetTextSizeSpKt.setTextSizeSp(title2, 16.0f);
        SimpleDraweeSpanTextView description = inflate.description;
        Intrinsics.checkNotNullExpressionValue(description, "description");
        DiscordFontUtilsKt.setDiscordFont(description, discordFont);
        SimpleDraweeView footerAvatar = inflate.footerAvatar;
        Intrinsics.checkNotNullExpressionValue(footerAvatar, "footerAvatar");
        ViewClippingUtilsKt.clipToCircle(footerAvatar);
        TextView footerText = inflate.footerText;
        Intrinsics.checkNotNullExpressionValue(footerText, "footerText");
        DiscordFontUtilsKt.setDiscordFont(footerText, discordFont2);
        inflate.footerText.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        TextView footerText2 = inflate.footerText;
        Intrinsics.checkNotNullExpressionValue(footerText2, "footerText");
        SetTextSizeSpKt.setTextSizeSp(footerText2, 12.0f);
        TextView error = inflate.error;
        Intrinsics.checkNotNullExpressionValue(error, "error");
        DiscordFontUtilsKt.setDiscordFont(error, discordFont);
        TextView error2 = inflate.error;
        Intrinsics.checkNotNullExpressionValue(error2, "error");
        SetTextSizeSpKt.setTextSizeSp(error2, 12.0f);
        SimpleDraweeView errorIcon = inflate.errorIcon;
        Intrinsics.checkNotNullExpressionValue(errorIcon, "errorIcon");
        ReactAssetUtilsKt.setReactAsset(errorIcon, ReactAsset.Alert);
        inflate.imageBlurBg.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundBaseLower());
    }
}
