package com.discord.chat.presentation.textutils;

import android.content.Context;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.net.Uri;
import android.text.SpannableStringBuilder;
import android.text.style.AbsoluteSizeSpan;
import android.text.style.ForegroundColorSpan;
import android.text.style.LeadingMarginSpan;
import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.contentnode.AttachmentLinkContentNode;
import com.discord.chat.bridge.contentnode.ChannelMentionContentNode;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.ContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.HeadingContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNodeKt;
import com.discord.chat.bridge.contentnode.StaticChannelMentionContentNode;
import com.discord.chat.bridge.contentnode.StaticChannelMentionType;
import com.discord.chat.bridge.contentnode.SubtextContentNode;
import com.discord.chat.bridge.contentnode.TextContentNode;
import com.discord.chat.bridge.contentnode.TimestampContentNode;
import com.discord.chat.bridge.contentnode.UserOrRoleMentionContentNode;
import com.discord.chat.bridge.rolecolors.RoleColors;
import com.discord.chat.bridge.spoiler.SpoilerManager;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.bridge.structurabletext.PrimitiveStructurableText;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.presentation.message.RoleDotSpan;
import com.discord.chat.presentation.textutils.RenderContext;
import com.discord.emoji.RenderableEmoji;
import com.discord.emoji.RenderableEmojiKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.primitives.UserId;
import com.discord.react.FontManager;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.span.utilities.SpannableStringBuilderExtensionsKt;
import com.discord.span.utilities.common.BackgroundStyle;
import com.discord.span.utilities.spannable.BackgroundSpan;
import com.discord.span.utilities.spannable.BulletSpan;
import com.discord.span.utilities.spannable.OrderedListBulletSpan;
import com.discord.span.utilities.spannable.QuoteSpan;
import com.discord.span.utilities.spannable.VerticalPaddingSpan;
import com.discord.span.utilities.spannable.VerticalSpacerSpan;
import com.discord.theme.DiscordThemeObject;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.generic.a;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
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
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000Â\u0001\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0014\n\u0002\u0010\u0006\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\f\n\u0002\b\u0007\u001a\u0015\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0001\u001a\u00020\u0000¢\u0006\u0004\b\u0003\u0010\u0004\u001a\u001d\u0010\t\u001a\u00020\u00022\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\n\u001a\u0087\u0004\u00107\u001a\u000206*\u00020\u000b2\u0006\u0010\r\u001a\u00020\f2\u0006\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u0012\u001a\u00020\u00102\u0006\u0010\u0013\u001a\u00020\u00102\u0006\u0010\u0014\u001a\u00020\u00102\u0006\u0010\u0006\u001a\u00020\u00052\u0014\b\u0002\u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00170\u00152\u0014\b\u0002\u0010\u0019\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\u00170\u00152$\b\u0002\u0010\u001b\u001a\u001e\u0012\u0004\u0012\u00020\u000e\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0012\u0004\u0012\u00020\u00170\u001a2,\b\u0002\u0010\u001d\u001a&\u0012\u0004\u0012\u00020\u000e\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0012\u0004\u0012\u00020\u00170\u001c2\u0014\b\u0002\u0010\u001e\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00170\u00152\u001a\b\u0002\u0010 \u001a\u0014\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00170\u001f2,\b\u0002\u0010!\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0012\u0004\u0012\u00020\u00170\u001c2\u0014\b\u0002\u0010#\u001a\u000e\u0012\u0004\u0012\u00020\"\u0012\u0004\u0012\u00020\u00170\u00152\u0014\b\u0002\u0010$\u001a\u000e\u0012\u0004\u0012\u00020\"\u0012\u0004\u0012\u00020\u00170\u00152\u0014\b\u0002\u0010%\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00170\u00152\u0014\b\u0002\u0010'\u001a\u000e\u0012\u0004\u0012\u00020&\u0012\u0004\u0012\u00020\u00170\u00152\u0014\b\u0002\u0010)\u001a\u000e\u0012\u0004\u0012\u00020(\u0012\u0004\u0012\u00020\u00170\u00152\u0014\b\u0002\u0010+\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020*0\u00152\u000e\b\u0002\u0010-\u001a\b\u0012\u0004\u0012\u00020\u00170,2\u0014\b\u0002\u0010/\u001a\u000e\u0012\u0004\u0012\u00020.\u0012\u0004\u0012\u00020\u00170\u00152\b\b\u0002\u00100\u001a\u00020\u00102\b\b\u0002\u00102\u001a\u0002012\b\b\u0002\u00103\u001a\u00020\u00022\n\b\u0002\u00104\u001a\u0004\u0018\u00010\u00022\b\b\u0002\u00105\u001a\u00020\u0010¢\u0006\u0004\b7\u00108\u001a)\u0010>\u001a\u00020\u0017*\b\u0012\u0004\u0012\u00020:092\u0006\u0010<\u001a\u00020;2\u0006\u0010=\u001a\u000206H\u0002¢\u0006\u0004\b>\u0010?\u001a5\u00107\u001a\u000206*\b\u0012\u0004\u0012\u00020:092\u0006\u0010<\u001a\u00020;2\b\b\u0002\u0010@\u001a\u0002062\b\b\u0002\u0010A\u001a\u00020\u0010H\u0002¢\u0006\u0004\b7\u0010B\u001a]\u0010I\u001a\u00020\u0017*\u0002062\u0006\u0010\r\u001a\u00020\f2\u0006\u0010<\u001a\u00020;2\u0006\u0010C\u001a\u00020\u000e2\b\b\u0001\u0010D\u001a\u00020\u00072\b\b\u0001\u0010E\u001a\u00020\u00072\n\b\u0002\u0010F\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010G\u001a\u00020\u00022\b\b\u0002\u0010H\u001a\u00020\u0002¢\u0006\u0004\bI\u0010J\u001a1\u0010M\u001a\u00020\u0017*\u0002062\f\u0010K\u001a\b\u0012\u0004\u0012\u00020:092\u0006\u0010<\u001a\u00020;2\u0006\u0010L\u001a\u00020\u0010H\u0002¢\u0006\u0004\bM\u0010N\u001a\u0019\u0010Q\u001a\u00020P2\b\u0010O\u001a\u0004\u0018\u00010\u000eH\u0002¢\u0006\u0004\bQ\u0010R\u001a\u001f\u0010T\u001a\u00020\u00072\b\u0010O\u001a\u0004\u0018\u00010\u000e2\u0006\u0010S\u001a\u00020\u0002¢\u0006\u0004\bT\u0010U\u001a\u0017\u0010V\u001a\u00020\u00022\u0006\u0010O\u001a\u00020\u000eH\u0002¢\u0006\u0004\bV\u0010W\u001a\u001f\u0010Z\u001a\u00020Y2\u0006\u0010<\u001a\u00020;2\u0006\u0010X\u001a\u00020\u0007H\u0002¢\u0006\u0004\bZ\u0010[\u001aE\u0010_\u001a\u00020\u0017*\u0002062\u0006\u0010\u0013\u001a\u00020\u00102\u0006\u00100\u001a\u00020\u00102\u0006\u0010\r\u001a\u00020\f2\u0006\u0010X\u001a\u00020\u00072\u0006\u0010\\\u001a\u00020\u00072\b\u0010^\u001a\u0004\u0018\u00010]H\u0002¢\u0006\u0004\b_\u0010`\u001a\u0013\u0010a\u001a\u00020\u0017*\u000206H\u0002¢\u0006\u0004\ba\u0010b\u001a=\u0010f\u001a\u00020\u0017*\u0002062\u0006\u0010c\u001a\u00020\u00072\u0006\u0010d\u001a\u00020;2\u0018\u0010e\u001a\u0014\u0012\u0004\u0012\u000206\u0012\u0004\u0012\u00020;\u0012\u0004\u0012\u00020\u00170\u001fH\u0002¢\u0006\u0004\bf\u0010g\u001a\u001b\u0010i\u001a\u00020\u0017*\u0002062\u0006\u0010h\u001a\u00020\u0007H\u0002¢\u0006\u0004\bi\u0010j\u001a\u0013\u0010k\u001a\u00020\u0017*\u000206H\u0002¢\u0006\u0004\bk\u0010b\"\u0014\u0010m\u001a\u00020l8\u0002X\u0082T¢\u0006\u0006\n\u0004\bm\u0010n\"\u0014\u0010o\u001a\u00020l8\u0002X\u0082T¢\u0006\u0006\n\u0004\bo\u0010n\"\u0014\u0010p\u001a\u00020\u000e8\u0002X\u0082T¢\u0006\u0006\n\u0004\bp\u0010q\"\u0014\u0010r\u001a\u00020\u000e8\u0002X\u0082T¢\u0006\u0006\n\u0004\br\u0010q¨\u0006s"}, d2 = {"Landroid/graphics/Paint$FontMetrics;", "fontMetrics", "", "getBaselineHeightPx", "(Landroid/graphics/Paint$FontMetrics;)F", "Landroid/graphics/Paint;", "paint", "", "fontSizePx", "getBaselineHeightForFontSizePx", "(Landroid/graphics/Paint;I)F", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "Landroid/content/Context;", "context", "", "containerId", "", "animateEmoji", "showLinkDecorations", "shouldShowRoleDot", "shouldShowRoleOnName", "Lkotlin/Function1;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "", "onLinkClicked", "onLongTapLink", "Lkotlin/Function3;", "onTapChannel", "Lkotlin/Function4;", "onLongPressChannel", "onTapAttachmentLink", "Lkotlin/Function2;", "onLongPressAttachmentLink", "onTapMention", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "onTapCommand", "onLongPressCommand", "onTapTimestamp", "Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;", "onTapInlineCode", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "onTapEmoji", "Lcom/discord/chat/presentation/textutils/LinkStyle;", "linkStyle", "Lkotlin/Function0;", "onTapSpoiler", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "onTapSoundmoji", "singleLine", "Lcom/discord/theme/DiscordThemeObject;", "theme", "baselineHeightPx", "emojiBaselineHeightOverridePx", "shouldOmitTopAndBottomHeadingSpacerNewLine", "Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "toSpannable", "(Lcom/discord/chat/bridge/structurabletext/StructurableText;Landroid/content/Context;Ljava/lang/String;ZZZZLandroid/graphics/Paint;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;ZLcom/discord/theme/DiscordThemeObject;FLjava/lang/Float;Z)Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "Lcom/discord/chat/presentation/textutils/RenderContext;", "rc", "existingBuilder", "appendToExistingBuilder", "(Ljava/util/List;Lcom/discord/chat/presentation/textutils/RenderContext;Lcom/facebook/drawee/span/DraweeSpanStringBuilder;)V", "builder", "isRootNode", "(Ljava/util/List;Lcom/discord/chat/presentation/textutils/RenderContext;Lcom/facebook/drawee/span/DraweeSpanStringBuilder;Z)Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "imageUrl", "width", "height", ViewProps.FOREGROUND_COLOR, "cornerRadius", "iconPadding", "appendImage", "(Lcom/facebook/drawee/span/DraweeSpanStringBuilder;Landroid/content/Context;Lcom/discord/chat/presentation/textutils/RenderContext;Ljava/lang/String;IILjava/lang/Integer;FF)V", "content", "isOrderedList", "appendBulletPoint", "(Lcom/facebook/drawee/span/DraweeSpanStringBuilder;Ljava/util/List;Lcom/discord/chat/presentation/textutils/RenderContext;Z)V", "iconType", "", "getIconSizeMultiplier", "(Ljava/lang/String;)D", "baselineHeight", "getIconSize", "(Ljava/lang/String;F)I", "getIconPaddingMultiplier", "(Ljava/lang/String;)F", ViewProps.BACKGROUND_COLOR, "Lcom/discord/span/utilities/spannable/BackgroundSpan;", "makeMentionBackgroundSpan", "(Lcom/discord/chat/presentation/textutils/RenderContext;I)Lcom/discord/span/utilities/spannable/BackgroundSpan;", "roleColor", "Lcom/discord/chat/bridge/rolecolors/RoleColors;", "roleColors", "maybeAddRoleDot", "(Lcom/facebook/drawee/span/DraweeSpanStringBuilder;ZZLandroid/content/Context;IILcom/discord/chat/bridge/rolecolors/RoleColors;)V", "simulateInlineNewline", "(Lcom/facebook/drawee/span/DraweeSpanStringBuilder;)V", "textSizeSp", "renderContext", "action", "changeTextSizeSp", "(Lcom/facebook/drawee/span/DraweeSpanStringBuilder;ILcom/discord/chat/presentation/textutils/RenderContext;Lkotlin/jvm/functions/Function2;)V", "size", "ensureTrailingSpacerNewLineOfSize", "(Lcom/facebook/drawee/span/DraweeSpanStringBuilder;I)V", "fixTrailingAbsoluteSizeSpanIfPresent", "", "FIRST_STRONG_ISOLATE", "C", "POP_DIRECTIONAL_ISOLATE", "CHANNEL_PREFIX", "Ljava/lang/String;", "COMMAND_PREFIX", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTextUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TextUtils.kt\ncom/discord/chat/presentation/textutils/TextUtilsKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 SpannableStringBuilderExtensions.kt\ncom/discord/span/utilities/SpannableStringBuilderExtensionsKt\n+ 4 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 5 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 6 Uri.kt\nandroidx/core/net/UriKt\n+ 7 SpannedString.kt\nandroidx/core/text/SpannedStringKt\n*L\n1#1,1408:1\n1878#2,2:1409\n1878#2,2:1594\n1878#2,3:1596\n1880#2:1599\n1880#2:1643\n57#3,5:1411\n62#3:1419\n43#3,4:1420\n47#3:1427\n78#3:1428\n43#3,4:1429\n47#3:1436\n43#3,4:1437\n47#3:1444\n57#3,5:1445\n62#3:1453\n43#3,4:1454\n47#3:1461\n43#3,4:1462\n47#3:1469\n43#3,4:1470\n47#3:1477\n43#3,4:1478\n47#3:1485\n70#3:1486\n43#3,3:1487\n43#3,4:1490\n47#3:1497\n46#3:1498\n47#3:1502\n43#3,4:1503\n47#3:1510\n43#3,4:1511\n47#3:1518\n92#3:1519\n43#3,4:1520\n47#3:1527\n70#3:1528\n43#3,4:1529\n47#3:1536\n70#3:1537\n43#3,4:1538\n47#3:1545\n43#3,4:1546\n47#3:1553\n43#3,3:1554\n43#3,4:1557\n47#3:1564\n43#3,4:1565\n47#3:1572\n43#3,4:1573\n47#3:1580\n43#3,4:1581\n47#3:1588\n46#3:1589\n47#3:1593\n70#3:1600\n43#3,4:1601\n47#3:1608\n43#3,4:1610\n47#3:1617\n85#3:1618\n43#3,4:1619\n47#3:1626\n43#3,4:1627\n47#3:1634\n43#3,4:1635\n47#3:1642\n43#3,4:1645\n47#3:1652\n43#3,4:1653\n47#3:1660\n43#3,4:1661\n47#3:1668\n43#3,4:1670\n47#3:1677\n43#3,4:1679\n47#3:1686\n57#3,5:1687\n62#3:1695\n13472#4:1416\n13473#4:1418\n13472#4:1424\n13473#4:1426\n13472#4:1433\n13473#4:1435\n13472#4:1441\n13473#4:1443\n13472#4:1450\n13473#4:1452\n13472#4:1458\n13473#4:1460\n13472#4:1466\n13473#4:1468\n13472#4:1474\n13473#4:1476\n13472#4:1482\n13473#4:1484\n13472#4:1494\n13473#4:1496\n13472#4:1499\n13473#4:1501\n13472#4:1507\n13473#4:1509\n13472#4:1515\n13473#4:1517\n13472#4:1524\n13473#4:1526\n13472#4:1533\n13473#4:1535\n13472#4:1542\n13473#4:1544\n13472#4:1550\n13473#4:1552\n13472#4:1561\n13473#4:1563\n13472#4:1569\n13473#4:1571\n13472#4:1577\n13473#4:1579\n13472#4:1585\n13473#4:1587\n13472#4:1590\n13473#4:1592\n13472#4:1605\n13473#4:1607\n13472#4:1614\n13473#4:1616\n13472#4:1623\n13473#4:1625\n13472#4:1631\n13473#4:1633\n13472#4:1639\n13473#4:1641\n13472#4:1649\n13473#4:1651\n13472#4:1657\n13473#4:1659\n13472#4:1665\n13473#4:1667\n13472#4:1674\n13473#4:1676\n13472#4:1683\n13473#4:1685\n13472#4:1692\n13473#4:1694\n1#5:1417\n1#5:1425\n1#5:1434\n1#5:1442\n1#5:1451\n1#5:1459\n1#5:1467\n1#5:1475\n1#5:1483\n1#5:1495\n1#5:1500\n1#5:1508\n1#5:1516\n1#5:1525\n1#5:1534\n1#5:1543\n1#5:1551\n1#5:1562\n1#5:1570\n1#5:1578\n1#5:1586\n1#5:1591\n1#5:1606\n1#5:1609\n1#5:1615\n1#5:1624\n1#5:1632\n1#5:1640\n1#5:1650\n1#5:1658\n1#5:1666\n1#5:1675\n1#5:1684\n1#5:1693\n29#6:1644\n34#7:1669\n34#7:1678\n*S KotlinDebug\n*F\n+ 1 TextUtils.kt\ncom/discord/chat/presentation/textutils/TextUtilsKt\n*L\n294#1:1409,2\n937#1:1594,2\n942#1:1596,3\n937#1:1599\n294#1:1643\n353#1:1411,5\n353#1:1419\n367#1:1420,4\n367#1:1427\n377#1:1428\n377#1:1429,4\n377#1:1436\n397#1:1437,4\n397#1:1444\n441#1:1445,5\n441#1:1453\n532#1:1454,4\n532#1:1461\n570#1:1462,4\n570#1:1469\n608#1:1470,4\n608#1:1477\n642#1:1478,4\n642#1:1485\n707#1:1486\n707#1:1487,3\n708#1:1490,4\n708#1:1497\n707#1:1498\n707#1:1502\n720#1:1503,4\n720#1:1510\n776#1:1511,4\n776#1:1518\n784#1:1519\n784#1:1520,4\n784#1:1527\n830#1:1528\n830#1:1529,4\n830#1:1536\n849#1:1537\n849#1:1538,4\n849#1:1545\n865#1:1546,4\n865#1:1553\n894#1:1554,3\n895#1:1557,4\n895#1:1564\n896#1:1565,4\n896#1:1572\n906#1:1573,4\n906#1:1580\n908#1:1581,4\n908#1:1588\n894#1:1589\n894#1:1593\n992#1:1600\n992#1:1601,4\n992#1:1608\n1022#1:1610,4\n1022#1:1617\n1027#1:1618\n1027#1:1619,4\n1027#1:1626\n1120#1:1627,4\n1120#1:1634\n1122#1:1635,4\n1122#1:1642\n1220#1:1645,4\n1220#1:1652\n1244#1:1653,4\n1244#1:1660\n1342#1:1661,4\n1342#1:1668\n1388#1:1670,4\n1388#1:1677\n1406#1:1679,4\n1406#1:1686\n810#1:1687,5\n810#1:1695\n353#1:1416\n353#1:1418\n367#1:1424\n367#1:1426\n377#1:1433\n377#1:1435\n397#1:1441\n397#1:1443\n441#1:1450\n441#1:1452\n532#1:1458\n532#1:1460\n570#1:1466\n570#1:1468\n608#1:1474\n608#1:1476\n642#1:1482\n642#1:1484\n708#1:1494\n708#1:1496\n707#1:1499\n707#1:1501\n720#1:1507\n720#1:1509\n776#1:1515\n776#1:1517\n784#1:1524\n784#1:1526\n830#1:1533\n830#1:1535\n849#1:1542\n849#1:1544\n865#1:1550\n865#1:1552\n895#1:1561\n895#1:1563\n896#1:1569\n896#1:1571\n906#1:1577\n906#1:1579\n908#1:1585\n908#1:1587\n894#1:1590\n894#1:1592\n992#1:1605\n992#1:1607\n1022#1:1614\n1022#1:1616\n1027#1:1623\n1027#1:1625\n1120#1:1631\n1120#1:1633\n1122#1:1639\n1122#1:1641\n1220#1:1649\n1220#1:1651\n1244#1:1657\n1244#1:1659\n1342#1:1665\n1342#1:1667\n1388#1:1674\n1388#1:1676\n1406#1:1683\n1406#1:1685\n810#1:1692\n810#1:1694\n353#1:1417\n367#1:1425\n377#1:1434\n397#1:1442\n441#1:1451\n532#1:1459\n570#1:1467\n608#1:1475\n642#1:1483\n708#1:1495\n707#1:1500\n720#1:1508\n776#1:1516\n784#1:1525\n830#1:1534\n849#1:1543\n865#1:1551\n895#1:1562\n896#1:1570\n906#1:1578\n908#1:1586\n894#1:1591\n992#1:1606\n1022#1:1615\n1027#1:1624\n1120#1:1632\n1122#1:1640\n1220#1:1650\n1244#1:1658\n1342#1:1666\n1388#1:1675\n1406#1:1684\n810#1:1693\n1161#1:1644\n1377#1:1669\n1405#1:1678\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TextUtilsKt {
    @NotNull
    private static final String CHANNEL_PREFIX = "#";
    @NotNull
    private static final String COMMAND_PREFIX = "/";
    private static final char FIRST_STRONG_ISOLATE = 8296;
    private static final char POP_DIRECTIONAL_ISOLATE = 8297;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[StaticChannelMentionType.values().length];
            try {
                iArr[StaticChannelMentionType.Home.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StaticChannelMentionType.Guide.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[StaticChannelMentionType.Browse.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[StaticChannelMentionType.Customize.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[StaticChannelMentionType.LinkedRoles.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    private static final void appendBulletPoint(DraweeSpanStringBuilder draweeSpanStringBuilder, List<? extends ContentNode> list, RenderContext renderContext, boolean z10) {
        Paint.Style style;
        String str;
        long j10;
        int dpToPx = SizeUtilsKt.getDpToPx(8);
        int listNestedLevel = renderContext.getListNestedLevel();
        LeadingMarginSpan.Standard standard = new LeadingMarginSpan.Standard(SizeUtilsKt.getDpToPx(listNestedLevel * 16));
        VerticalPaddingSpan verticalPaddingSpan = new VerticalPaddingSpan(SizeUtilsKt.getDpToPx(2));
        if (z10) {
            Long listOrderedIndex = renderContext.getListOrderedIndex();
            long j11 = 1;
            if (listOrderedIndex != null) {
                j10 = listOrderedIndex.longValue();
            } else {
                j10 = 1;
            }
            Long listLargestOrderedIndex = renderContext.getListLargestOrderedIndex();
            if (listLargestOrderedIndex != null) {
                j11 = listLargestOrderedIndex.longValue();
            }
            long j12 = j11;
            if (renderContext.getSingleLine()) {
                appendToExistingBuilder(CollectionsKt.e(new TextContentNode(j10 + ".  ")), renderContext, draweeSpanStringBuilder);
                appendToExistingBuilder(list, renderContext, draweeSpanStringBuilder);
                return;
            }
            OrderedListBulletSpan orderedListBulletSpan = new OrderedListBulletSpan(j10, dpToPx, j12, renderContext.getPaint());
            SpannableStringBuilderExtensionsKt.ensureNewline$default(draweeSpanStringBuilder, null, 1, null);
            Object[] objArr = {standard, orderedListBulletSpan, verticalPaddingSpan};
            int length = draweeSpanStringBuilder.length();
            appendToExistingBuilder(list, renderContext, draweeSpanStringBuilder);
            for (int i10 = 0; i10 < 3; i10++) {
                Object obj = objArr[i10];
                if (obj != null) {
                    draweeSpanStringBuilder.setSpan(obj, length, draweeSpanStringBuilder.length(), 33);
                }
            }
        } else if (renderContext.getSingleLine()) {
            if (renderContext.getListNestedLevel() == 0) {
                str = "•  ";
            } else {
                str = "◦  ";
            }
            appendToExistingBuilder(CollectionsKt.e(new TextContentNode(str)), renderContext, draweeSpanStringBuilder);
            appendToExistingBuilder(list, renderContext, draweeSpanStringBuilder);
        } else {
            int dpToPx2 = SizeUtilsKt.getDpToPx(2);
            int themeColor = ColorUtilsKt.getThemeColor(renderContext.getContext(), R.color.primary_360, R.color.primary_400, renderContext.getTheme());
            if (listNestedLevel > 0) {
                style = Paint.Style.STROKE;
            } else {
                style = Paint.Style.FILL;
            }
            BulletSpan bulletSpan = new BulletSpan(themeColor, dpToPx, false, dpToPx2, 0.0f, style, 20, null);
            SpannableStringBuilderExtensionsKt.ensureNewline$default(draweeSpanStringBuilder, null, 1, null);
            Object[] objArr2 = {standard, bulletSpan, verticalPaddingSpan};
            int length2 = draweeSpanStringBuilder.length();
            appendToExistingBuilder(list, renderContext, draweeSpanStringBuilder);
            for (int i11 = 0; i11 < 3; i11++) {
                Object obj2 = objArr2[i11];
                if (obj2 != null) {
                    draweeSpanStringBuilder.setSpan(obj2, length2, draweeSpanStringBuilder.length(), 33);
                }
            }
        }
    }

    public static final void appendImage(@NotNull DraweeSpanStringBuilder draweeSpanStringBuilder, @NotNull Context context, @NotNull RenderContext rc2, @NotNull String imageUrl, int i10, int i11, Integer num, float f10, float f11) {
        Intrinsics.checkNotNullParameter(draweeSpanStringBuilder, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(rc2, "rc");
        Intrinsics.checkNotNullParameter(imageUrl, "imageUrl");
        int length = draweeSpanStringBuilder.length();
        draweeSpanStringBuilder.append((char) 8203);
        com.facebook.drawee.controller.a build = ((PipelineDraweeControllerBuilder) e9.d.g().E(ImageRequestBuilder.x(Uri.parse(ReactAssetUtilsKt.getReactImageUrl(context, imageUrl))).a())).build();
        Intrinsics.checkNotNullExpressionValue(build, "build(...)");
        GenericDraweeHierarchyBuilder w10 = GenericDraweeHierarchyBuilder.u(context.getResources()).w(ScalingUtils$ScaleType.f9918e);
        com.facebook.drawee.generic.a c10 = com.facebook.drawee.generic.a.c(f10);
        c10.t(f11);
        c10.w(a.EnumC0146a.BITMAP_ONLY);
        w10.K(c10);
        if (rc2.spoilerIsHidden()) {
            w10.v(new PorterDuffColorFilter(rc2.getTheme().getSpoilerHiddenBackground(), PorterDuff.Mode.SRC_IN));
        } else if (num != null) {
            w10.v(new PorterDuffColorFilter(num.intValue(), PorterDuff.Mode.SRC_IN));
        }
        Intrinsics.checkNotNullExpressionValue(w10, "apply(...)");
        draweeSpanStringBuilder.j(context, w10.a(), build, length, i10, i11, false, 2);
    }

    public static /* synthetic */ void appendImage$default(DraweeSpanStringBuilder draweeSpanStringBuilder, Context context, RenderContext renderContext, String str, int i10, int i11, Integer num, float f10, float f11, int i12, Object obj) {
        Integer num2;
        float f12;
        float f13;
        DraweeSpanStringBuilder draweeSpanStringBuilder2;
        Context context2;
        RenderContext renderContext2;
        String str2;
        int i13;
        int i14;
        if ((i12 & 32) != 0) {
            num2 = null;
        } else {
            num2 = num;
        }
        if ((i12 & 64) != 0) {
            f12 = 0.0f;
        } else {
            f12 = f10;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            f13 = 0.0f;
            context2 = context;
            renderContext2 = renderContext;
            str2 = str;
            i13 = i10;
            i14 = i11;
            draweeSpanStringBuilder2 = draweeSpanStringBuilder;
        } else {
            f13 = f11;
            draweeSpanStringBuilder2 = draweeSpanStringBuilder;
            context2 = context;
            renderContext2 = renderContext;
            str2 = str;
            i13 = i10;
            i14 = i11;
        }
        appendImage(draweeSpanStringBuilder2, context2, renderContext2, str2, i13, i14, num2, f12, f13);
    }

    private static final void appendToExistingBuilder(List<? extends ContentNode> list, RenderContext renderContext, DraweeSpanStringBuilder draweeSpanStringBuilder) {
        toSpannable(list, renderContext, draweeSpanStringBuilder, false);
    }

    private static final void changeTextSizeSp(DraweeSpanStringBuilder draweeSpanStringBuilder, int i10, RenderContext renderContext, Function2<? super DraweeSpanStringBuilder, ? super RenderContext, Unit> function2) {
        int scaledSpToPx = FontManager.INSTANCE.getScaledSpToPx(i10, renderContext.getContext());
        RenderContext copy$default = RenderContext.copy$default(renderContext, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, false, false, false, false, false, null, null, 0, null, null, false, null, null, getBaselineHeightForFontSizePx(renderContext.getPaint(), scaledSpToPx), null, false, 1073741823, 1, null);
        Object[] objArr = {new AbsoluteSizeSpan(scaledSpToPx)};
        int length = draweeSpanStringBuilder.length();
        function2.invoke(draweeSpanStringBuilder, copy$default);
        Object obj = objArr[0];
        if (obj != null) {
            draweeSpanStringBuilder.setSpan(obj, length, draweeSpanStringBuilder.length(), 33);
        }
    }

    private static final void ensureTrailingSpacerNewLineOfSize(DraweeSpanStringBuilder draweeSpanStringBuilder, int i10) {
        if (draweeSpanStringBuilder.length() > 0) {
            SpannableStringBuilderExtensionsKt.ensureNewline$default(draweeSpanStringBuilder, null, 1, null);
            VerticalSpacerSpan verticalSpacerSpan = (VerticalSpacerSpan) kotlin.collections.i.V(draweeSpanStringBuilder.getSpans(draweeSpanStringBuilder.length() - 1, draweeSpanStringBuilder.length(), VerticalSpacerSpan.class));
            if (verticalSpacerSpan != null) {
                if (verticalSpacerSpan.getSize() < i10) {
                    SpannableStringBuilderExtensionsKt.replaceSpan(draweeSpanStringBuilder, verticalSpacerSpan, new VerticalSpacerSpan(i10));
                    return;
                }
                return;
            }
        }
        Object[] objArr = {new VerticalSpacerSpan(i10)};
        int length = draweeSpanStringBuilder.length();
        draweeSpanStringBuilder.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        Object obj = objArr[0];
        if (obj != null) {
            draweeSpanStringBuilder.setSpan(obj, length, draweeSpanStringBuilder.length(), 33);
        }
    }

    private static final void fixTrailingAbsoluteSizeSpanIfPresent(DraweeSpanStringBuilder draweeSpanStringBuilder) {
        AbsoluteSizeSpan absoluteSizeSpan;
        if (!StringsKt.Z(draweeSpanStringBuilder, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, false, 2, null) || (absoluteSizeSpan = (AbsoluteSizeSpan) kotlin.collections.i.V(draweeSpanStringBuilder.getSpans(draweeSpanStringBuilder.length() - 1, draweeSpanStringBuilder.length(), AbsoluteSizeSpan.class))) == null) {
            return;
        }
        Object[] objArr = {new AbsoluteSizeSpan(absoluteSizeSpan.getSize())};
        int length = draweeSpanStringBuilder.length();
        draweeSpanStringBuilder.append("\u200b");
        Object obj = objArr[0];
        if (obj != null) {
            draweeSpanStringBuilder.setSpan(obj, length, draweeSpanStringBuilder.length(), 33);
        }
    }

    public static final float getBaselineHeightForFontSizePx(@NotNull Paint paint, int i10) {
        Intrinsics.checkNotNullParameter(paint, "paint");
        float textSize = paint.getTextSize();
        paint.setTextSize(i10);
        Paint.FontMetrics fontMetrics = paint.getFontMetrics();
        Intrinsics.checkNotNullExpressionValue(fontMetrics, "getFontMetrics(...)");
        float baselineHeightPx = getBaselineHeightPx(fontMetrics);
        paint.setTextSize(textSize);
        return baselineHeightPx;
    }

    public static final float getBaselineHeightPx(@NotNull Paint.FontMetrics fontMetrics) {
        Intrinsics.checkNotNullParameter(fontMetrics, "fontMetrics");
        return fontMetrics.descent - fontMetrics.ascent;
    }

    private static final float getIconPaddingMultiplier(String str) {
        if (!Intrinsics.areEqual(str, "post") && !Intrinsics.areEqual(str, "forum")) {
            return 0.0f;
        }
        return 0.2f;
    }

    public static final int getIconSize(String str, float f10) {
        int dpToPx = SizeUtilsKt.getDpToPx(20);
        if (f10 >= 0.0f) {
            return (int) (f10 * getIconSizeMultiplier(str));
        }
        return dpToPx;
    }

    private static final double getIconSizeMultiplier(String str) {
        if (str != null) {
            switch (str.hashCode()) {
                case -1480766844:
                    if (str.equals("_caret")) {
                        return 0.55d;
                    }
                    return 0.75d;
                case -1478565049:
                    if (str.equals("_emoji")) {
                        return 0.963d;
                    }
                    return 0.75d;
                case -1476485388:
                    if (str.equals("_guild")) {
                        return 0.85d;
                    }
                    return 0.75d;
                case 3446944:
                    if (str.equals("post")) {
                        return 0.65d;
                    }
                    return 0.75d;
                case 97619233:
                    if (str.equals("forum")) {
                        return 0.65d;
                    }
                    return 0.75d;
                default:
                    return 0.75d;
            }
        }
        return 0.75d;
    }

    private static final BackgroundSpan makeMentionBackgroundSpan(RenderContext renderContext, int i10) {
        int i11;
        if (renderContext.spoilerExists()) {
            i10 = renderContext.getTheme().getSpoilerHiddenBackground();
        }
        int i12 = i10;
        if (renderContext.spoilerExists()) {
            i11 = 0;
        } else {
            i11 = 3;
        }
        return new BackgroundSpan(new BackgroundStyle(i12, i11, 0, 4, (DefaultConstructorMarker) null), null, null, 6, null);
    }

    private static final void maybeAddRoleDot(DraweeSpanStringBuilder draweeSpanStringBuilder, boolean z10, boolean z11, Context context, int i10, int i11, RoleColors roleColors) {
        int i12;
        if (!z10) {
            return;
        }
        if (z11) {
            i12 = 16;
        } else {
            i12 = 20;
        }
        RoleDotSpan roleDotSpan = new RoleDotSpan(context, i10, i12);
        if (roleColors == null) {
            roleColors = new RoleColors(i11, null, null);
        }
        roleDotSpan.setColors(roleColors);
        draweeSpanStringBuilder.append(CHANNEL_PREFIX);
        draweeSpanStringBuilder.setSpan(roleDotSpan, draweeSpanStringBuilder.length() - 1, draweeSpanStringBuilder.length(), 33);
        draweeSpanStringBuilder.append(" ");
    }

    private static final void simulateInlineNewline(DraweeSpanStringBuilder draweeSpanStringBuilder) {
        draweeSpanStringBuilder.append("    ");
    }

    @NotNull
    public static final DraweeSpanStringBuilder toSpannable(@NotNull StructurableText structurableText, @NotNull Context context, @NotNull String containerId, boolean z10, boolean z11, boolean z12, boolean z13, @NotNull Paint paint, @NotNull Function1<? super LinkContentNode, Unit> onLinkClicked, @NotNull Function1<? super LinkContentNode, Unit> onLongTapLink, @NotNull Function3 onTapChannel, @NotNull Function4 onLongPressChannel, @NotNull Function1<? super String, Unit> onTapAttachmentLink, @NotNull Function2<? super String, ? super String, Unit> onLongPressAttachmentLink, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, @NotNull Function1<? super CommandMentionContentNode, Unit> onLongPressCommand, @NotNull Function1<? super String, Unit> onTapTimestamp, @NotNull Function1<? super InlineCodeContentNode, Unit> onTapInlineCode, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function1<? super LinkContentNode, LinkStyle> linkStyle, @NotNull Function0<Unit> onTapSpoiler, @NotNull Function1<? super SoundmojiContentNode, Unit> onTapSoundmoji, boolean z14, @NotNull DiscordThemeObject theme, float f10, Float f11, boolean z15) {
        Intrinsics.checkNotNullParameter(structurableText, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(containerId, "containerId");
        Intrinsics.checkNotNullParameter(paint, "paint");
        Intrinsics.checkNotNullParameter(onLinkClicked, "onLinkClicked");
        Intrinsics.checkNotNullParameter(onLongTapLink, "onLongTapLink");
        Intrinsics.checkNotNullParameter(onTapChannel, "onTapChannel");
        Intrinsics.checkNotNullParameter(onLongPressChannel, "onLongPressChannel");
        Intrinsics.checkNotNullParameter(onTapAttachmentLink, "onTapAttachmentLink");
        Intrinsics.checkNotNullParameter(onLongPressAttachmentLink, "onLongPressAttachmentLink");
        Intrinsics.checkNotNullParameter(onTapMention, "onTapMention");
        Intrinsics.checkNotNullParameter(onTapCommand, "onTapCommand");
        Intrinsics.checkNotNullParameter(onLongPressCommand, "onLongPressCommand");
        Intrinsics.checkNotNullParameter(onTapTimestamp, "onTapTimestamp");
        Intrinsics.checkNotNullParameter(onTapInlineCode, "onTapInlineCode");
        Intrinsics.checkNotNullParameter(onTapEmoji, "onTapEmoji");
        Intrinsics.checkNotNullParameter(linkStyle, "linkStyle");
        Intrinsics.checkNotNullParameter(onTapSpoiler, "onTapSpoiler");
        Intrinsics.checkNotNullParameter(onTapSoundmoji, "onTapSoundmoji");
        Intrinsics.checkNotNullParameter(theme, "theme");
        if (structurableText instanceof AnnotatedStructurableText) {
            return toSpannable$default(((AnnotatedStructurableText) structurableText).getContent(), new RenderContext(context, containerId, onLinkClicked, onLongTapLink, linkStyle, onTapChannel, onLongPressChannel, onTapAttachmentLink, onLongPressAttachmentLink, onTapMention, onTapCommand, onLongPressCommand, onTapSpoiler, onTapTimestamp, onTapInlineCode, onTapEmoji, onTapSoundmoji, z10, z11, z12, z13, z14, paint, null, 0, null, null, false, null, theme, f10, f11, z15, 528482304, 0, null), null, false, 6, null);
        }
        if (structurableText instanceof PrimitiveStructurableText) {
            return new DraweeSpanStringBuilder(((PrimitiveStructurableText) structurableText).getContent());
        }
        throw new qr.p();
    }

    public static /* synthetic */ DraweeSpanStringBuilder toSpannable$default(StructurableText structurableText, Context context, String str, boolean z10, boolean z11, boolean z12, boolean z13, Paint paint, Function1 function1, Function1 function12, Function3 function3, Function4 function4, Function1 function13, Function2 function2, Function4 function42, Function1 function14, Function1 function15, Function1 function16, Function1 function17, Function1 function18, Function1 function19, Function0 function0, Function1 function110, boolean z14, DiscordThemeObject discordThemeObject, float f10, Float f11, boolean z15, int i10, Object obj) {
        boolean z16;
        StructurableText structurableText2;
        Context context2;
        String str2;
        boolean z17;
        boolean z18;
        boolean z19;
        boolean z20;
        Paint paint2;
        Function1 function111 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.v
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit spannable$lambda$0;
                spannable$lambda$0 = TextUtilsKt.toSpannable$lambda$0((LinkContentNode) obj2);
                return spannable$lambda$0;
            }
        } : function1;
        Function1 function112 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.c0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit spannable$lambda$1;
                spannable$lambda$1 = TextUtilsKt.toSpannable$lambda$1((LinkContentNode) obj2);
                return spannable$lambda$1;
            }
        } : function12;
        Function3 function32 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? new Function3() { // from class: com.discord.chat.presentation.textutils.d0
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj2, Object obj3, Object obj4) {
                Unit spannable$lambda$2;
                spannable$lambda$2 = TextUtilsKt.toSpannable$lambda$2((String) obj2, (String) obj3, (String) obj4);
                return spannable$lambda$2;
            }
        } : function3;
        Function4 function43 = (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? new Function4() { // from class: com.discord.chat.presentation.textutils.e0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj2, Object obj3, Object obj4, Object obj5) {
                Unit spannable$lambda$3;
                spannable$lambda$3 = TextUtilsKt.toSpannable$lambda$3((String) obj2, (String) obj3, (String) obj4, (String) obj5);
                return spannable$lambda$3;
            }
        } : function4;
        Function1 function113 = (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.f0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit spannable$lambda$4;
                spannable$lambda$4 = TextUtilsKt.toSpannable$lambda$4((String) obj2);
                return spannable$lambda$4;
            }
        } : function13;
        Function2 function22 = (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? new Function2() { // from class: com.discord.chat.presentation.textutils.g0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit spannable$lambda$5;
                spannable$lambda$5 = TextUtilsKt.toSpannable$lambda$5((String) obj2, (String) obj3);
                return spannable$lambda$5;
            }
        } : function2;
        Function4 function44 = (i10 & 8192) != 0 ? new Function4() { // from class: com.discord.chat.presentation.textutils.i0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj2, Object obj3, Object obj4, Object obj5) {
                Unit spannable$lambda$6;
                spannable$lambda$6 = TextUtilsKt.toSpannable$lambda$6((String) obj2, (String) obj3, (String) obj4, (String) obj5);
                return spannable$lambda$6;
            }
        } : function42;
        Function1 function114 = (i10 & 16384) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit spannable$lambda$7;
                spannable$lambda$7 = TextUtilsKt.toSpannable$lambda$7((CommandMentionContentNode) obj2);
                return spannable$lambda$7;
            }
        } : function14;
        Function1 function115 = (32768 & i10) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.k0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit spannable$lambda$8;
                spannable$lambda$8 = TextUtilsKt.toSpannable$lambda$8((CommandMentionContentNode) obj2);
                return spannable$lambda$8;
            }
        } : function15;
        Function1 function116 = (65536 & i10) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.l0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit spannable$lambda$9;
                spannable$lambda$9 = TextUtilsKt.toSpannable$lambda$9((String) obj2);
                return spannable$lambda$9;
            }
        } : function16;
        Function1 function117 = (131072 & i10) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.x
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit spannable$lambda$10;
                spannable$lambda$10 = TextUtilsKt.toSpannable$lambda$10((InlineCodeContentNode) obj2);
                return spannable$lambda$10;
            }
        } : function17;
        Function1 function118 = (262144 & i10) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.y
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit spannable$lambda$11;
                spannable$lambda$11 = TextUtilsKt.toSpannable$lambda$11((EmojiContentNode) obj2);
                return spannable$lambda$11;
            }
        } : function18;
        Function1 function119 = (524288 & i10) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.z
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                LinkStyle spannable$lambda$12;
                spannable$lambda$12 = TextUtilsKt.toSpannable$lambda$12((LinkContentNode) obj2);
                return spannable$lambda$12;
            }
        } : function19;
        Function0 function02 = (1048576 & i10) != 0 ? new Function0() { // from class: com.discord.chat.presentation.textutils.a0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f32008a;
                return unit;
            }
        } : function0;
        Function1 function120 = (2097152 & i10) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.b0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit spannable$lambda$14;
                spannable$lambda$14 = TextUtilsKt.toSpannable$lambda$14((SoundmojiContentNode) obj2);
                return spannable$lambda$14;
            }
        } : function110;
        boolean z21 = (4194304 & i10) != 0 ? false : z14;
        DiscordThemeObject theme = (8388608 & i10) != 0 ? ThemeManagerKt.getTheme() : discordThemeObject;
        float f12 = (16777216 & i10) != 0 ? -1.0f : f10;
        Float f13 = (33554432 & i10) != 0 ? null : f11;
        if ((i10 & 67108864) != 0) {
            z16 = false;
            context2 = context;
            str2 = str;
            z17 = z10;
            z18 = z11;
            z19 = z12;
            z20 = z13;
            paint2 = paint;
            structurableText2 = structurableText;
        } else {
            z16 = z15;
            structurableText2 = structurableText;
            context2 = context;
            str2 = str;
            z17 = z10;
            z18 = z11;
            z19 = z12;
            z20 = z13;
            paint2 = paint;
        }
        return toSpannable(structurableText2, context2, str2, z17, z18, z19, z20, paint2, function111, function112, function32, function43, function113, function22, function44, function114, function115, function116, function117, function118, function119, function02, function120, z21, theme, f12, f13, z16);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$0(LinkContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$1(LinkContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$10(InlineCodeContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$11(EmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final LinkStyle toSpannable$lambda$12(LinkContentNode linkContentNode) {
        Intrinsics.checkNotNullParameter(linkContentNode, "<unused var>");
        return new LinkStyle(null, 0, null, null, 15, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$14(SoundmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$2(String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$3(String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$4(String str) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$5(String str, String str2) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$6(String str, String str2, String str3, String str4) {
        Intrinsics.checkNotNullParameter(str2, "<unused var>");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final RenderContext.Insets toSpannable$lambda$67$lambda$16$lambda$15(QuoteSpan quoteSpan, RenderContext.Insets updateInsets) {
        Intrinsics.checkNotNullParameter(updateInsets, "$this$updateInsets");
        return RenderContext.Insets.copy$default(updateInsets, 0, 0, updateInsets.getStart() + quoteSpan.getInsetStart(), 0, 11, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$19(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        renderContext.getOnTapInlineCode().invoke(contentNode);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean toSpannable$lambda$67$lambda$21(ContentNode contentNode, RenderContext renderContext, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (((LinkContentNode) contentNode).isUrl()) {
            renderContext.getOnLongTapLink().invoke(contentNode);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$22(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        renderContext.getOnTapLink().invoke(contentNode);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$26(RenderContext renderContext, ContentNode contentNode, View it) {
        String str;
        String str2;
        Intrinsics.checkNotNullParameter(it, "it");
        Function4 onTapMention = renderContext.getOnTapMention();
        UserOrRoleMentionContentNode userOrRoleMentionContentNode = (UserOrRoleMentionContentNode) contentNode;
        UserId m389getUserIdwUX8bhU = userOrRoleMentionContentNode.m389getUserIdwUX8bhU();
        String str3 = null;
        if (m389getUserIdwUX8bhU != null) {
            str = UserId.m1142toStringimpl(m389getUserIdwUX8bhU.m1144unboximpl());
        } else {
            str = null;
        }
        String valueOf = String.valueOf(userOrRoleMentionContentNode.m386getChannelIdqMVnFVQ());
        String roleName = userOrRoleMentionContentNode.getRoleName();
        if (roleName != null) {
            str2 = roleName.toString();
        } else {
            str2 = null;
        }
        String parsedUserId = userOrRoleMentionContentNode.getParsedUserId();
        if (parsedUserId != null) {
            str3 = parsedUserId.toString();
        }
        onTapMention.invoke(str, valueOf, str2, str3);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean toSpannable$lambda$67$lambda$28(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        ChannelMentionContentNode channelMentionContentNode = (ChannelMentionContentNode) contentNode;
        renderContext.getOnLongPressChannel().invoke(channelMentionContentNode.getChannelId(), channelMentionContentNode.getGuildId(), channelMentionContentNode.getMessageId(), channelMentionContentNode.getOriginalLink());
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$29(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        ChannelMentionContentNode channelMentionContentNode = (ChannelMentionContentNode) contentNode;
        renderContext.getOnTapChannel().invoke(channelMentionContentNode.getChannelId(), channelMentionContentNode.getGuildId(), channelMentionContentNode.getMessageId());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean toSpannable$lambda$67$lambda$32(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        AttachmentLinkContentNode attachmentLinkContentNode = (AttachmentLinkContentNode) contentNode;
        renderContext.getOnLongPressAttachmentLink().invoke(attachmentLinkContentNode.getAttachmentUrl(), attachmentLinkContentNode.getAttachmentName());
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$33(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        renderContext.getOnTapAttachmentLink().invoke(((AttachmentLinkContentNode) contentNode).getAttachmentUrl());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$35(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        StaticChannelMentionContentNode staticChannelMentionContentNode = (StaticChannelMentionContentNode) contentNode;
        renderContext.getOnTapChannel().invoke(staticChannelMentionContentNode.getId().getId(), String.valueOf(staticChannelMentionContentNode.m379getGuildIdqOKuAAo()), String.valueOf(staticChannelMentionContentNode.getItemId()));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean toSpannable$lambda$67$lambda$37(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        renderContext.getOnLongPressCommand().invoke(contentNode);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$38(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        renderContext.getOnTapCommand().invoke(contentNode);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$42(String str, RenderContext renderContext, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        SpoilerManager.INSTANCE.m423markRevealedV2PEE7g(str);
        renderContext.getOnTapSpoiler().invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$46(DraweeSpanStringBuilder draweeSpanStringBuilder, ForegroundColorSpan foregroundColorSpan, ContentNode contentNode, DraweeSpanStringBuilder changeTextSizeSp, RenderContext updatedRC) {
        Intrinsics.checkNotNullParameter(changeTextSizeSp, "$this$changeTextSizeSp");
        Intrinsics.checkNotNullParameter(updatedRC, "updatedRC");
        int length = draweeSpanStringBuilder.length();
        appendToExistingBuilder(((SubtextContentNode) contentNode).getContent(), updatedRC, draweeSpanStringBuilder);
        Object obj = new Object[]{foregroundColorSpan}[0];
        if (obj != null) {
            draweeSpanStringBuilder.setSpan(obj, length, draweeSpanStringBuilder.length(), 13107233);
        }
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$49$lambda$48(ContentNode contentNode, DraweeSpanStringBuilder draweeSpanStringBuilder, DraweeSpanStringBuilder changeTextSizeSp, RenderContext updatedRc) {
        Intrinsics.checkNotNullParameter(changeTextSizeSp, "$this$changeTextSizeSp");
        Intrinsics.checkNotNullParameter(updatedRc, "updatedRc");
        appendToExistingBuilder(((HeadingContentNode) contentNode).getContent(), updatedRc, draweeSpanStringBuilder);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$60(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        renderContext.getOnTapTimestamp().invoke(((TimestampContentNode) contentNode).getFull());
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$63(RenderContext renderContext, ContentNode contentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        renderContext.getOnTapSoundmoji().invoke(contentNode);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$66(DraweeSpanStringBuilder draweeSpanStringBuilder, ContentNode contentNode, Context context, final RenderContext renderContext, SpannableStringBuilder spannableStringBuilder) {
        DraweeSpanStringBuilder draweeSpanStringBuilder2;
        String str;
        float baselineHeightPx;
        Intrinsics.checkNotNullParameter(spannableStringBuilder, "<this>");
        draweeSpanStringBuilder.append("  ");
        SoundmojiContentNode soundmojiContentNode = (SoundmojiContentNode) contentNode;
        RenderableEmoji renderableEmoji = SoundmojiContentNodeKt.toRenderableEmoji(soundmojiContentNode);
        if (renderableEmoji != null) {
            Float emojiBaselineHeightOverridePx = renderContext.getEmojiBaselineHeightOverridePx();
            if (emojiBaselineHeightOverridePx != null) {
                baselineHeightPx = emojiBaselineHeightOverridePx.floatValue();
            } else {
                baselineHeightPx = renderContext.getBaselineHeightPx();
            }
            draweeSpanStringBuilder2 = draweeSpanStringBuilder;
            RenderableEmojiKt.renderEmojiInto$default(draweeSpanStringBuilder2, renderableEmoji, context, getIconSize("_emoji", baselineHeightPx * 0.8f), false, 0, new Function1() { // from class: com.discord.chat.presentation.textutils.l
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit spannable$lambda$67$lambda$66$lambda$65$lambda$64;
                    spannable$lambda$67$lambda$66$lambda$65$lambda$64 = TextUtilsKt.toSpannable$lambda$67$lambda$66$lambda$65$lambda$64(RenderContext.this, (GenericDraweeHierarchyBuilder) obj);
                    return spannable$lambda$67$lambda$66$lambda$65$lambda$64;
                }
            }, 32, null);
            draweeSpanStringBuilder2.append(" ");
        } else {
            draweeSpanStringBuilder2 = draweeSpanStringBuilder;
        }
        String content = soundmojiContentNode.getContent();
        if (content != null) {
            str = StringsKt.J(content, " ", " ", false, 4, null);
        } else {
            str = null;
        }
        draweeSpanStringBuilder2.append((CharSequence) str);
        draweeSpanStringBuilder2.append("  ");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$67$lambda$66$lambda$65$lambda$64(RenderContext renderContext, GenericDraweeHierarchyBuilder renderEmojiInto) {
        Intrinsics.checkNotNullParameter(renderEmojiInto, "$this$renderEmojiInto");
        EmojiRendererKt.handleEmojiSpoiler(renderEmojiInto, renderContext, true);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$7(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$8(CommandMentionContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toSpannable$lambda$9(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32008a;
    }

    /* JADX WARN: Removed duplicated region for block: B:171:0x04fa  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static final com.facebook.drawee.span.DraweeSpanStringBuilder toSpannable(java.util.List<? extends com.discord.chat.bridge.contentnode.ContentNode> r96, final com.discord.chat.presentation.textutils.RenderContext r97, com.facebook.drawee.span.DraweeSpanStringBuilder r98, boolean r99) {
        /*
            Method dump skipped, instructions count: 4492
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.textutils.TextUtilsKt.toSpannable(java.util.List, com.discord.chat.presentation.textutils.RenderContext, com.facebook.drawee.span.DraweeSpanStringBuilder, boolean):com.facebook.drawee.span.DraweeSpanStringBuilder");
    }

    static /* synthetic */ DraweeSpanStringBuilder toSpannable$default(List list, RenderContext renderContext, DraweeSpanStringBuilder draweeSpanStringBuilder, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            draweeSpanStringBuilder = new DraweeSpanStringBuilder();
        }
        if ((i10 & 4) != 0) {
            z10 = true;
        }
        return toSpannable(list, renderContext, draweeSpanStringBuilder, z10);
    }
}
