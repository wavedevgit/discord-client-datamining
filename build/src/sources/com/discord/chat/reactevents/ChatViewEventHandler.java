package com.discord.chat.reactevents;

import android.content.Context;
import com.discord.chat.bridge.MediaType;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.LinkContextData;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.chat.bridge.sticker.Sticker;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.events.TapReactionOverflow;
import com.discord.chat.presentation.list.ScrollDirection;
import com.discord.chat.presentation.list.ScrollState;
import com.discord.chat.reactevents.TapImageData;
import com.discord.media_player.reactevents.MediaPlayFinishedAnalytics;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageId;
import com.discord.primitives.UserId;
import com.discord.reactevents.ReactEvent;
import com.discord.reactevents.ReactEvents;
import com.discord.reactions.ReactionView;
import com.facebook.react.bridge.ReactContext;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000è\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0018\n\u0002\u0010\r\n\u0002\b\u0011\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b)\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u001a\n\u0002\u0010\u0007\n\u0002\b?\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0016\u0018\u00002\u00020\u0001B%\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00070\u0006¢\u0006\u0004\b\t\u0010\nJ\u001f\u0010\u0012\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u000e\u001a\u00020\rH\u0016¢\u0006\u0004\b\u0010\u0010\u0011J)\u0010\u0012\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u0014\u001a\u00020\u00132\b\u0010\u0015\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0004\b\u0016\u0010\u0017J\u001f\u0010\u001c\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u0018H\u0016¢\u0006\u0004\b\u001a\u0010\u001bJ)\u0010#\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001d2\b\u0010 \u001a\u0004\u0018\u00010\u001fH\u0016¢\u0006\u0004\b!\u0010\"J\u001f\u0010%\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u0018H\u0016¢\u0006\u0004\b$\u0010\u001bJ\u0017\u0010'\u001a\u00020\u000f2\u0006\u0010\u000e\u001a\u00020&H\u0016¢\u0006\u0004\b'\u0010(J\u001f\u0010,\u001a\u00020\u000f2\u0006\u0010*\u001a\u00020)2\u0006\u0010+\u001a\u00020\u0007H\u0016¢\u0006\u0004\b,\u0010-J\u001f\u00102\u001a\u00020\u000f2\u0006\u0010/\u001a\u00020.2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b0\u00101J\u001f\u00104\u001a\u00020\u000f2\u0006\u0010/\u001a\u00020.2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b3\u00101J\u001f\u00106\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u0018H\u0016¢\u0006\u0004\b5\u0010\u001bJ\u001f\u0010:\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u00107\u001a\u00020\u0013H\u0016¢\u0006\u0004\b8\u00109J\u001f\u0010<\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0004\b;\u0010\u001bJ+\u0010>\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u00132\b\u0010=\u001a\u0004\u0018\u00010\u00132\b\u0010\f\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0004\b>\u0010\u0017J5\u0010@\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u00132\b\u0010=\u001a\u0004\u0018\u00010\u00132\b\u0010\f\u001a\u0004\u0018\u00010\u00132\b\u0010?\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0004\b@\u0010AJ\u0017\u0010C\u001a\u00020\u000f2\u0006\u0010B\u001a\u00020\u0013H\u0016¢\u0006\u0004\bC\u0010DJ\u001f\u0010F\u001a\u00020\u000f2\u0006\u0010B\u001a\u00020\u00132\u0006\u0010E\u001a\u00020\u0013H\u0016¢\u0006\u0004\bF\u00109J\u0017\u0010I\u001a\u00020\u000f2\u0006\u0010H\u001a\u00020GH\u0016¢\u0006\u0004\bI\u0010JJ!\u0010M\u001a\u00020\u000f2\u0006\u0010K\u001a\u00020\u00132\b\u0010\f\u001a\u0004\u0018\u00010\u000bH\u0016¢\u0006\u0004\bL\u00109J\u0017\u0010N\u001a\u00020\u000f2\u0006\u0010K\u001a\u00020\u0013H\u0016¢\u0006\u0004\bN\u0010DJ\u0019\u0010P\u001a\u00020\u000f2\b\u0010O\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0004\bP\u0010DJ\u0017\u0010Q\u001a\u00020\u000f2\u0006\u0010\u000e\u001a\u00020\rH\u0016¢\u0006\u0004\bQ\u0010RJw\u0010a\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010S\u001a\u00020\u00072\u0006\u0010T\u001a\u00020\u00132\u0006\u0010U\u001a\u00020\u00072\u0006\u0010V\u001a\u00020\u00072\u0006\u0010W\u001a\u00020\u00072\u0006\u0010X\u001a\u00020\u00072\u0006\u0010Z\u001a\u00020Y2\b\u0010\\\u001a\u0004\u0018\u00010[2\b\u0010]\u001a\u0004\u0018\u00010\u00072\b\u00107\u001a\u0004\u0018\u00010\u00132\b\u0010^\u001a\u0004\u0018\u00010\u0007H\u0016¢\u0006\u0004\b_\u0010`J3\u0010h\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010b\u001a\u00020\u00072\b\u0010d\u001a\u0004\u0018\u00010c2\b\u0010e\u001a\u0004\u0018\u00010cH\u0016¢\u0006\u0004\bf\u0010gJ\u001f\u0010k\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010b\u001a\u00020\u0007H\u0016¢\u0006\u0004\bi\u0010jJ\u000f\u0010l\u001a\u00020\u000fH\u0016¢\u0006\u0004\bl\u0010mJ\u000f\u0010n\u001a\u00020\u000fH\u0016¢\u0006\u0004\bn\u0010mJ5\u0010q\u001a\u00020\u000f2\b\u0010\u0019\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u001e\u001a\u00020\u00132\b\u0010o\u001a\u0004\u0018\u00010\u00132\b\u0010p\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0004\bq\u0010AJ\u0017\u0010r\u001a\u00020\u000f2\u0006\u0010\u000e\u001a\u00020&H\u0016¢\u0006\u0004\br\u0010(J\u001f\u0010v\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010s\u001a\u00020\u000bH\u0016¢\u0006\u0004\bt\u0010uJ'\u0010z\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010w\u001a\u00020\u0013H\u0016¢\u0006\u0004\bx\u0010yJ'\u0010|\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010w\u001a\u00020\u0013H\u0016¢\u0006\u0004\b{\u0010yJ7\u0010\u0081\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\b\u0010 \u001a\u0004\u0018\u00010\u001f2\b\u0010}\u001a\u0004\u0018\u00010c2\b\u0010~\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0005\b\u007f\u0010\u0080\u0001J\"\u0010\u0083\u0001\u001a\u00020\u000f2\u0006\u0010o\u001a\u00020\u00132\u0007\u0010\u0082\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\b\u0083\u0001\u00109J#\u0010\u0086\u0001\u001a\u00020\u000f2\u0007\u0010\u0084\u0001\u001a\u00020\u00132\u0007\u0010\u0085\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\b\u0086\u0001\u00109J\u0011\u0010\u0087\u0001\u001a\u00020\u000fH\u0016¢\u0006\u0005\b\u0087\u0001\u0010mJ2\u0010\u0089\u0001\u001a\u00020\u000f2\u0006\u0010\u0019\u001a\u00020\u00132\u0006\u0010=\u001a\u00020\u00132\u0006\u0010\u001e\u001a\u00020\u00132\u0007\u0010\u0088\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\b\u0089\u0001\u0010AJ!\u0010\u008b\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u00107\u001a\u00020\u0013H\u0016¢\u0006\u0005\b\u008a\u0001\u00109J\u001a\u0010\u008c\u0001\u001a\u00020\u000f2\u0007\u0010\u0085\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\b\u008c\u0001\u0010DJ\u001b\u0010\u008e\u0001\u001a\u00020\u000f2\u0007\u0010\u000e\u001a\u00030\u008d\u0001H\u0016¢\u0006\u0006\b\u008e\u0001\u0010\u008f\u0001J\u0019\u0010\u0091\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\b\u0090\u0001\u0010DJ\u0019\u0010\u0093\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\b\u0092\u0001\u0010DJ!\u0010\u0095\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u0018H\u0016¢\u0006\u0005\b\u0094\u0001\u0010\u001bJ#\u0010\u0098\u0001\u001a\u00020\u000f2\u0007\u0010\u0096\u0001\u001a\u00020\u00132\u0007\u0010\u0097\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\b\u0098\u0001\u00109J!\u0010\u009a\u0001\u001a\u00020\u000f2\u0006\u0010/\u001a\u00020.2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\b\u0099\u0001\u00101J\u0019\u0010\u009c\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\b\u009b\u0001\u0010DJ\u0019\u0010\u009e\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\b\u009d\u0001\u0010DJ\u0019\u0010 \u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\b\u009f\u0001\u0010DJ\u001c\u0010£\u0001\u001a\u00020\u000f2\b\u0010¢\u0001\u001a\u00030¡\u0001H\u0016¢\u0006\u0006\b£\u0001\u0010¤\u0001J!\u0010¦\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0005\b¥\u0001\u0010\u001bJ#\u0010ª\u0001\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0007\u0010=\u001a\u00030§\u0001H\u0016¢\u0006\u0006\b¨\u0001\u0010©\u0001J!\u0010¬\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0005\b«\u0001\u0010\u001bJ!\u0010®\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0005\b\u00ad\u0001\u0010\u001bJ!\u0010°\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0005\b¯\u0001\u0010\u001bJ\u0011\u0010±\u0001\u001a\u00020\u000fH\u0016¢\u0006\u0005\b±\u0001\u0010mJ\u0019\u0010³\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\b²\u0001\u0010DJ-\u0010·\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001d2\t\u0010´\u0001\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0006\bµ\u0001\u0010¶\u0001J\u001a\u0010¹\u0001\u001a\u00020\u000f2\u0007\u0010¸\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\b¹\u0001\u0010DJ7\u0010½\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001d2\t\u0010º\u0001\u001a\u0004\u0018\u00010c2\b\u0010~\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0006\b»\u0001\u0010¼\u0001J!\u0010¿\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0005\b¾\u0001\u0010\u001bJ!\u0010Á\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001dH\u0016¢\u0006\u0005\bÀ\u0001\u0010\u001bJI\u0010Ê\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\b\u0010Ã\u0001\u001a\u00030Â\u00012\b\u0010Ä\u0001\u001a\u00030Â\u00012\u0007\u0010Å\u0001\u001a\u00020\u00182\u0007\u0010Æ\u0001\u001a\u00020c2\u0007\u0010Ç\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0006\bÈ\u0001\u0010É\u0001JS\u0010Ï\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\b\u0010Ã\u0001\u001a\u00030Â\u00012\b\u0010Ë\u0001\u001a\u00030Â\u00012\u0007\u0010Å\u0001\u001a\u00020\u00182\b\u0010Ì\u0001\u001a\u00030Â\u00012\u0007\u0010Æ\u0001\u001a\u00020c2\u0007\u0010Ç\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0006\bÍ\u0001\u0010Î\u0001J$\u0010Ò\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\t\u0010Ð\u0001\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0005\bÑ\u0001\u00109J4\u0010Ö\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u00132\u0007\u0010Ó\u0001\u001a\u00020\u00132\u0007\u0010Ô\u0001\u001a\u00020\u00132\u0007\u0010Õ\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\bÖ\u0001\u0010AJ5\u0010Û\u0001\u001a\u00020\u000f2\u0007\u0010=\u001a\u00030§\u00012\u0007\u0010×\u0001\u001a\u00020\u001d2\u0007\u0010Ø\u0001\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0006\bÙ\u0001\u0010Ú\u0001J\u0019\u0010Ý\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\bÜ\u0001\u0010DJ+\u0010à\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001d2\u0007\u0010Þ\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0006\bß\u0001\u0010¶\u0001J8\u0010ä\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001d2\t\u0010Ç\u0001\u001a\u0004\u0018\u00010\u00132\t\u0010á\u0001\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0006\bâ\u0001\u0010ã\u0001JA\u0010è\u0001\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001e\u001a\u00020\u001d2\u0007\u0010å\u0001\u001a\u00020c2\t\u0010Ç\u0001\u001a\u0004\u0018\u00010\u00132\t\u0010á\u0001\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0006\bæ\u0001\u0010ç\u0001J\u001a\u0010ê\u0001\u001a\u00020\u000f2\u0007\u0010é\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\bê\u0001\u0010DJ#\u0010í\u0001\u001a\u00020\u000f2\u0007\u0010ë\u0001\u001a\u00020\u00132\u0007\u0010ì\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\bí\u0001\u00109J*\u0010ð\u0001\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000b2\u0007\u0010î\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\bï\u0001\u0010yJ!\u0010ò\u0001\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000bH\u0017¢\u0006\u0005\bñ\u0001\u0010uJ)\u0010ô\u0001\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010T\u001a\u00020\u0013H\u0016¢\u0006\u0005\bó\u0001\u0010yJS\u0010÷\u0001\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000b2\u0007\u0010Ç\u0001\u001a\u00020\u00132\u0006\u0010U\u001a\u00020\u00072\u0006\u0010V\u001a\u00020\u00072\u0006\u0010W\u001a\u00020\u00072\u0006\u0010X\u001a\u00020\u00072\u0006\u0010Z\u001a\u00020YH\u0016¢\u0006\u0006\bõ\u0001\u0010ö\u0001J*\u0010ú\u0001\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000b2\u0007\u0010ø\u0001\u001a\u00020\u0013H\u0016¢\u0006\u0005\bù\u0001\u0010yJ:\u0010ÿ\u0001\u001a\u00020\u000f2\u0007\u0010û\u0001\u001a\u00020\u00072\t\u0010ü\u0001\u001a\u0004\u0018\u00010[2\u0007\u0010ý\u0001\u001a\u00020\u00072\t\u0010þ\u0001\u001a\u0004\u0018\u00010[H\u0016¢\u0006\u0006\bÿ\u0001\u0010\u0080\u0002J\u0011\u0010\u0081\u0002\u001a\u00020\u000fH\u0016¢\u0006\u0005\b\u0081\u0002\u0010mJ\u001c\u0010\u0084\u0002\u001a\u00020\u000f2\b\u0010\u0083\u0002\u001a\u00030\u0082\u0002H\u0016¢\u0006\u0006\b\u0084\u0002\u0010\u0085\u0002J+\u0010\u0089\u0002\u001a\u00020\u000f2\u0007\u0010\u0086\u0002\u001a\u00020\u00072\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0006\b\u0087\u0002\u0010\u0088\u0002JJ\u0010\u008d\u0002\u001a\u00020\u000f2\u0006\u0010\u001e\u001a\u00020\u001d2\u0006\u0010\f\u001a\u00020\u000b2\u0007\u0010\u008a\u0002\u001a\u00020\u00132\b\u0010]\u001a\u0004\u0018\u00010\u00072\t\u0010º\u0001\u001a\u0004\u0018\u00010c2\b\u0010~\u001a\u0004\u0018\u00010\u0013H\u0016¢\u0006\u0006\b\u008b\u0002\u0010\u008c\u0002J\u001b\u0010\u0090\u0002\u001a\u00020\u000f2\u0007\u0010=\u001a\u00030§\u0001H\u0016¢\u0006\u0006\b\u008e\u0002\u0010\u008f\u0002J5\u0010\u0095\u0002\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0007\u0010\u0091\u0002\u001a\u00020\u00182\u0007\u0010\u0092\u0002\u001a\u00020\u00132\u0007\u0010\u0093\u0002\u001a\u00020\u0013H\u0016¢\u0006\u0006\b\u0094\u0002\u0010ã\u0001J\"\u0010\u0097\u0002\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000b2\u0007\u0010\u0091\u0002\u001a\u00020\u0018H\u0016¢\u0006\u0005\b\u0096\u0002\u0010\u001bJ\u001b\u0010\u0099\u0002\u001a\u00020\u000f2\u0007\u0010\u000e\u001a\u00030\u0098\u0002H\u0016¢\u0006\u0006\b\u0099\u0002\u0010\u009a\u0002J\u0019\u0010\u009c\u0002\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\b\u009b\u0002\u0010DJ\u0019\u0010\u009e\u0002\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0005\b\u009d\u0002\u0010DR%\u0010¡\u0002\u001a\u0010\u0012\u0005\u0012\u00030 \u0002\u0012\u0004\u0012\u00020\u000f0\u009f\u00028\u0002X\u0082\u0004¢\u0006\b\n\u0006\b¡\u0002\u0010¢\u0002R\\\u0010¦\u0002\u001a?\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u001d\u0012\u0006\u0012\u0004\u0018\u00010\u0007\u0012\u0007\u0012\u0005\u0018\u00010¤\u0002\u0012\u0006\u0012\u0004\u0018\u00010\u0013\u0012\u0006\u0012\u0004\u0018\u00010\u0007\u0012\u0004\u0012\u00020\u000f\u0018\u00010£\u0002j\u0005\u0018\u0001`¥\u00028\u0016X\u0096\u0004¢\u0006\u0010\n\u0006\b¦\u0002\u0010§\u0002\u001a\u0006\b¨\u0002\u0010©\u0002R;\u0010¬\u0002\u001a\u001e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u000f\u0018\u00010ª\u0002j\u0005\u0018\u0001`«\u00028\u0016X\u0096\u0004¢\u0006\u0010\n\u0006\b¬\u0002\u0010\u00ad\u0002\u001a\u0006\b®\u0002\u0010¯\u0002R;\u0010±\u0002\u001a\u001e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\u000f\u0018\u00010ª\u0002j\u0005\u0018\u0001`°\u00028\u0016X\u0096\u0004¢\u0006\u0010\n\u0006\b±\u0002\u0010\u00ad\u0002\u001a\u0006\b²\u0002\u0010¯\u0002¨\u0006³\u0002"}, d2 = {"Lcom/discord/chat/reactevents/ChatViewEventHandler;", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "Landroid/content/Context;", "context", "Lcom/discord/reactevents/ReactEvents;", "reactEvents", "Lkotlin/Function0;", "", "reactTag", "<init>", "(Landroid/content/Context;Lcom/discord/reactevents/ReactEvents;Lkotlin/jvm/functions/Function0;)V", "Lcom/discord/primitives/MessageId;", "messageId", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "node", "", "onLinkClicked-ntcYbpo", "(Ljava/lang/String;Lcom/discord/chat/bridge/contentnode/LinkContentNode;)V", "onLinkClicked", "", "url", "title", "onLinkClicked-u7_MRrM", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "Lcom/discord/primitives/UserId;", "userId", "onLongPressAvatar-x5gers8", "(Ljava/lang/String;J)V", "onLongPressAvatar", "Lcom/discord/primitives/ChannelId;", "channelId", "Lcom/discord/reactions/ReactionView$Reaction;", "reaction", "onLongPressReaction-Eqy5D80", "(Ljava/lang/String;JLcom/discord/reactions/ReactionView$Reaction;)V", "onLongPressReaction", "onLongPressUsername-x5gers8", "onLongPressUsername", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "onLongPressCommand", "(Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;)V", "Lcom/discord/chat/presentation/list/ScrollState;", "scrollState", "changesetUpdateId", "onScrollStateChanged", "(Lcom/discord/chat/presentation/list/ScrollState;I)V", "Lcom/discord/chat/bridge/sticker/Sticker;", "sticker", "onStickerClicked-Ayv7vGE", "(Lcom/discord/chat/bridge/sticker/Sticker;Ljava/lang/String;)V", "onStickerClicked", "onStickerLongClicked-Ayv7vGE", "onStickerLongClicked", "onTapAvatar-x5gers8", "onTapAvatar", "componentId", "onTapButtonActionComponent-ntcYbpo", "(Ljava/lang/String;Ljava/lang/String;)V", "onTapButtonActionComponent", "onTapCall-pfaIj0E", "onTapCall", "guildId", "onTapChannel", "originalLink", "onLongPressChannel", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "attachmentUrl", "onTapAttachmentLink", "(Ljava/lang/String;)V", "attachmentName", "onLongPressAttachmentLink", "", "text", "onTapCopyText", "(Ljava/lang/CharSequence;)V", "giftCode", "onTapGiftCodeAccept-NU4t8f8", "onTapGiftCodeAccept", "onTapGiftCodeEmbed", "referralId", "onTapReferralRedeem", "onLinkLongClicked", "(Lcom/discord/chat/bridge/contentnode/LinkContentNode;)V", "attachmentIndex", "type", "viewWidth", "viewHeight", "viewX", "viewY", "Lcom/discord/chat/reactevents/ViewResizeMode;", "viewResizeMode", "", "portal", "embedIndex", "componentMediaIndex", "onTapImage-JR3bP6M", "(Ljava/lang/String;ILjava/lang/String;IIIILcom/discord/chat/reactevents/ViewResizeMode;Ljava/lang/Double;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;)V", "onTapImage", "index", "", "primary", "secondary", "onTapInviteEmbed-AFFcxXc", "(Ljava/lang/String;ILjava/lang/Boolean;Ljava/lang/Boolean;)V", "onTapInviteEmbed", "onTapInviteEmbedAccept-ntcYbpo", "(Ljava/lang/String;I)V", "onTapInviteEmbedAccept", "onTapLoadMessagesAfter", "()V", "onTapLoadMessagesBefore", "roleName", "parsedUserId", "onTapMention", "onTapCommand", "originId", "onTapMessageReply-0eiqbug", "(JLjava/lang/String;)V", "onTapMessageReply", "summaryId", "onTapSummary-sekaTiM", "(JLjava/lang/String;Ljava/lang/String;)V", "onTapSummary", "onTapSummaryJump-sekaTiM", "onTapSummaryJump", "isBurst", "location", "onTapReaction-AFFcxXc", "(Ljava/lang/String;Lcom/discord/reactions/ReactionView$Reaction;Ljava/lang/Boolean;Ljava/lang/String;)V", "onTapReaction", "roleIconSource", "onTapRoleIcon", "gameApplicationId", "timestamp", "onTapGameIcon", "onTapSuppressNotificationsIcon", "roleId", "onTapConnectionsRoleTag", "onTapSelectActionComponent-ntcYbpo", "onTapSelectActionComponent", "onTapTimestamp", "Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;", "onTapInlineCode", "(Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;)V", "onTapThreadEmbed-1xi1bu0", "onTapThreadEmbed", "onTapToggleBlockedMessages-1xi1bu0", "onTapToggleBlockedMessages", "onTapUsername-x5gers8", "onTapUsername", "uploaderId", "itemId", "onTapCancelUploadItem", "onWelcomeReplyClicked-Ayv7vGE", "onWelcomeReplyClicked", "onTapInviteToSpeak-1xi1bu0", "onTapInviteToSpeak", "onTapJoinActivity-1xi1bu0", "onTapJoinActivity", "onTapJoinRichPresence-1xi1bu0", "onTapJoinRichPresence", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "emoji", "onTapEmoji", "(Lcom/discord/chat/bridge/contentnode/EmojiContentNode;)V", "onTapFollowForumPost-pfaIj0E", "onTapFollowForumPost", "Lcom/discord/primitives/GuildId;", "onTapShareForumPost-mgk6anA", "(JJ)V", "onTapShareForumPost", "onTapReactionOverflow-pfaIj0E", "onTapReactionOverflow", "onTapAutoModerationActions-pfaIj0E", "onTapAutoModerationActions", "onTapAutoModerationFeedback-pfaIj0E", "onTapAutoModerationFeedback", "onTapOpTag", "onTapSeeMore-1xi1bu0", "onTapSeeMore", "tagType", "onTapTag-Eqy5D80", "(Ljava/lang/String;JLjava/lang/String;)V", "onTapTag", "description", "onTapShowAltText", "triggerHaptic", "onInitiateReply-8a0ehIg", "(Ljava/lang/String;JLjava/lang/Boolean;Ljava/lang/String;)V", "onInitiateReply", "onInitiateThread-pfaIj0E", "onInitiateThread", "onInitiateEdit-pfaIj0E", "onInitiateEdit", "", "totalDurationSecs", "startDurationSecs", "senderUserId", "isVoiceMessage", "attachmentId", "mediaAttachmentPlaybackStarted-jd4C3YQ", "(Ljava/lang/String;FFJZLjava/lang/String;)V", "mediaAttachmentPlaybackStarted", "endDurationSecs", "durationListeningSecs", "mediaAttachmentPlaybackEnded-O97gnAM", "(Ljava/lang/String;FFJFZLjava/lang/String;)V", "mediaAttachmentPlaybackEnded", "errorMessage", "voiceMessagePlaybackFailed-ntcYbpo", "voiceMessagePlaybackFailed", "actionId", "appId", "embedUrl", "onTapAppMessageEmbed", "parentChannelId", "threadId", "onTapPostPreviewEmbed-kUTrp-s", "(JJJLjava/lang/String;)V", "onTapPostPreviewEmbed", "onTapDismissMediaPostSharePrompt-1xi1bu0", "onTapDismissMediaPostSharePrompt", "buttonType", "onTapChannelPromptButton-Eqy5D80", "onTapChannelPromptButton", "embedId", "onTapObscuredMediaLearnMore-8a0ehIg", "(Ljava/lang/String;JLjava/lang/String;Ljava/lang/String;)V", "onTapObscuredMediaLearnMore", "isReveal", "onTapObscuredMediaToggle-ZQwuxwg", "(Ljava/lang/String;JZLjava/lang/String;Ljava/lang/String;)V", "onTapObscuredMediaToggle", "classificationId", "onTapSafetyPolicyNoticeEmbed", "ctaType", "ctaKey", "onTapSafetySystemNotificationCta", "answerId", "onTapPollAnswer-sekaTiM", "onTapPollAnswer", "onTapPollSubmitVote-0eiqbug", "onTapPollSubmitVote", "onTapPollAction-sekaTiM", "onTapPollAction", "onLongPressPollImage-YVExdug", "(JLjava/lang/String;Ljava/lang/String;IIIILcom/discord/chat/reactevents/ViewResizeMode;)V", "onLongPressPollImage", "callback", "onTapCtaButton-sekaTiM", "onTapCtaButton", "firstVisibleMessageIndex", "firstVisibleMessagePercentVisible", "lastVisibleMessageIndex", "lastVisibleMessagePercentVisible", "onFirstLayout", "(ILjava/lang/Double;ILjava/lang/Double;)V", "onCompleteFirstLayout", "Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;", "analytics", "onMediaPlayFinishedAnalytics", "(Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;)V", "snapshotIndex", "onTapForwardFooter-SHRpUJI", "(IJLjava/lang/String;)V", "onTapForwardFooter", "targetKind", "onTapInlineForward-j8a4Y88", "(JLjava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;)V", "onTapInlineForward", "onTapClanTagChiplet-g3bFfsM", "(J)V", "onTapClanTagChiplet", "authorId", "contentId", "tappedElement", "onTapContentInventoryEntryEmbed-tsfjtEQ", "onTapContentInventoryEntryEmbed", "onTapCheckpointCard-x5gers8", "onTapCheckpointCard", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "onTapSoundmoji", "(Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;)V", "onTapPreviewSharedClientTheme-1xi1bu0", "onTapPreviewSharedClientTheme", "onSharedClientThemeViewed-1xi1bu0", "onSharedClientThemeViewed", "Lkotlin/Function1;", "Lcom/discord/reactevents/ReactEvent;", "emitReactEvent", "Lkotlin/jvm/functions/Function1;", "Lkotlin/Function6;", "Lcom/discord/chat/bridge/MediaType;", "Lcom/discord/chat/presentation/events/MessageLongPress;", "onMessageLongPressed", "Lkotlin/jvm/functions/Function6;", "getOnMessageLongPressed", "()Lkotlin/jvm/functions/Function6;", "Lkotlin/Function2;", "Lcom/discord/chat/presentation/events/MessageTapped;", "onMessageTapped", "Lkotlin/jvm/functions/Function2;", "getOnMessageTapped", "()Lkotlin/jvm/functions/Function2;", "Lcom/discord/chat/presentation/events/MessageDoubleTapped;", "onMessageDoubleTapped", "getOnMessageDoubleTapped", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ChatViewEventHandler implements ChatEventHandler {
    @NotNull
    private final Function1<ReactEvent, Unit> emitReactEvent;
    private final Function2<MessageId, ChannelId, Unit> onMessageDoubleTapped;
    private final Function6 onMessageLongPressed;
    private final Function2<MessageId, ChannelId, Unit> onMessageTapped;

    public ChatViewEventHandler(@NotNull final Context context, @NotNull final ReactEvents reactEvents, @NotNull final Function0<Integer> reactTag) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(reactEvents, "reactEvents");
        Intrinsics.checkNotNullParameter(reactTag, "reactTag");
        this.emitReactEvent = new Function1() { // from class: com.discord.chat.reactevents.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit emitReactEvent$lambda$0;
                emitReactEvent$lambda$0 = ChatViewEventHandler.emitReactEvent$lambda$0(ReactEvents.this, context, reactTag, (ReactEvent) obj);
                return emitReactEvent$lambda$0;
            }
        };
        this.onMessageLongPressed = new Function6() { // from class: com.discord.chat.reactevents.ChatViewEventHandler$onMessageLongPressed$1
            @Override // kotlin.jvm.functions.Function6
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6) {
                m732invokeeTS4JUY(((MessageId) obj).m1095unboximpl(), ((ChannelId) obj2).m1069unboximpl(), (Integer) obj3, (MediaType) obj4, (String) obj5, (Integer) obj6);
                return Unit.f33074a;
            }

            /* renamed from: invoke-eTS4JUY  reason: not valid java name */
            public final void m732invokeeTS4JUY(String messageId, long j10, Integer num, MediaType mediaType, String str, Integer num2) {
                Function1 function1;
                int i10;
                Intrinsics.checkNotNullParameter(messageId, "messageId");
                function1 = ChatViewEventHandler.this.emitReactEvent;
                String m1093toStringimpl = MessageId.m1093toStringimpl(messageId);
                String m1067toStringimpl = ChannelId.m1067toStringimpl(j10);
                if (num != null) {
                    i10 = num.intValue();
                } else {
                    i10 = 0;
                }
                function1.invoke(new LongPressMessageEvent(m1093toStringimpl, m1067toStringimpl, i10, (mediaType == null || (r4 = mediaType.getType()) == null) ? "" : "", str, num2));
            }
        };
        this.onMessageTapped = new Function2<MessageId, ChannelId, Unit>() { // from class: com.discord.chat.reactevents.ChatViewEventHandler$onMessageTapped$1
            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                m733invokepfaIj0E(((MessageId) obj).m1095unboximpl(), ((ChannelId) obj2).m1069unboximpl());
                return Unit.f33074a;
            }

            /* renamed from: invoke-pfaIj0E  reason: not valid java name */
            public final void m733invokepfaIj0E(String messageId, long j10) {
                Function1 function1;
                Intrinsics.checkNotNullParameter(messageId, "messageId");
                function1 = ChatViewEventHandler.this.emitReactEvent;
                function1.invoke(new TapMessageData(MessageId.m1093toStringimpl(messageId), ChannelId.m1067toStringimpl(j10)));
            }
        };
        this.onMessageDoubleTapped = new Function2<MessageId, ChannelId, Unit>() { // from class: com.discord.chat.reactevents.ChatViewEventHandler$onMessageDoubleTapped$1
            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                m731invokepfaIj0E(((MessageId) obj).m1095unboximpl(), ((ChannelId) obj2).m1069unboximpl());
                return Unit.f33074a;
            }

            /* renamed from: invoke-pfaIj0E  reason: not valid java name */
            public final void m731invokepfaIj0E(String messageId, long j10) {
                Function1 function1;
                Intrinsics.checkNotNullParameter(messageId, "messageId");
                function1 = ChatViewEventHandler.this.emitReactEvent;
                function1.invoke(new DoubleTapMessageEvent(MessageId.m1093toStringimpl(messageId), ChannelId.m1067toStringimpl(j10)));
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit emitReactEvent$lambda$0(ReactEvents reactEvents, Context context, Function0 function0, ReactEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
        reactEvents.emitEvent((ReactContext) context, ((Number) function0.invoke()).intValue(), event);
        return Unit.f33074a;
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: getOnMessageDoubleTapped */
    public Function2<MessageId, ChannelId, Unit> mo494getOnMessageDoubleTapped() {
        return this.onMessageDoubleTapped;
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: getOnMessageLongPressed */
    public Function6 mo495getOnMessageLongPressed() {
        return this.onMessageLongPressed;
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: getOnMessageTapped */
    public Function2<MessageId, ChannelId, Unit> mo496getOnMessageTapped() {
        return this.onMessageTapped;
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: mediaAttachmentPlaybackEnded-O97gnAM */
    public void mo434mediaAttachmentPlaybackEndedO97gnAM(@NotNull String messageId, float f10, float f11, long j10, float f12, boolean z10, @NotNull String attachmentId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachmentId, "attachmentId");
        this.emitReactEvent.invoke(new MediaAttachmentPlaybackEndedData(messageId, f10, f11, j10, f12, z10, attachmentId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: mediaAttachmentPlaybackStarted-jd4C3YQ */
    public void mo435mediaAttachmentPlaybackStartedjd4C3YQ(@NotNull String messageId, float f10, float f11, long j10, boolean z10, @NotNull String attachmentId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachmentId, "attachmentId");
        this.emitReactEvent.invoke(new MediaAttachmentPlaybackStartedData(messageId, f10, f11, j10, z10, attachmentId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onCompleteFirstLayout() {
        this.emitReactEvent.invoke(new CompleteFirstLayoutData());
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onFirstLayout(int i10, Double d10, int i11, Double d11) {
        this.emitReactEvent.invoke(new FirstLayoutData(i10, d10, i11, d11));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onInitiateEdit-pfaIj0E */
    public void mo436onInitiateEditpfaIj0E(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new InitiateEditData(messageId, j10, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onInitiateReply-8a0ehIg */
    public void mo437onInitiateReply8a0ehIg(@NotNull String messageId, long j10, Boolean bool, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new InitiateReplyData(messageId, j10, bool, str, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onInitiateThread-pfaIj0E */
    public void mo438onInitiateThreadpfaIj0E(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new InitiateThreadData(messageId, j10, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onLinkClicked-ntcYbpo */
    public void mo439onLinkClickedntcYbpo(@NotNull String messageId, @NotNull LinkContentNode node) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(node, "node");
        this.emitReactEvent.invoke(new TapLinkData(messageId, node, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onLinkClicked-u7_MRrM */
    public void mo440onLinkClickedu7_MRrM(@NotNull String messageId, @NotNull String url, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(url, "url");
        Function1<ReactEvent, Unit> function1 = this.emitReactEvent;
        LinkContextData.LinkUrl linkUrl = new LinkContextData.LinkUrl(url);
        if (str == null) {
            str = "";
        }
        function1.invoke(new TapLinkData(messageId, str, linkUrl, null, 8, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onLinkLongClicked(@NotNull LinkContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        this.emitReactEvent.invoke(new LongPressLinkData(node.getUrl()));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onLongPressAttachmentLink(@NotNull String attachmentUrl, @NotNull String attachmentName) {
        Intrinsics.checkNotNullParameter(attachmentUrl, "attachmentUrl");
        Intrinsics.checkNotNullParameter(attachmentName, "attachmentName");
        this.emitReactEvent.invoke(new LongPressAttachmentLinkData(attachmentUrl, attachmentName));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onLongPressAvatar-x5gers8 */
    public void mo441onLongPressAvatarx5gers8(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new LongPressAvatarData(MessageId.m1093toStringimpl(messageId), UserId.m1145toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onLongPressChannel(@NotNull String channelId, String str, String str2, String str3) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        this.emitReactEvent.invoke(new LongPressChannelData(str, channelId, str2, str3));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onLongPressCommand(@NotNull CommandMentionContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        this.emitReactEvent.invoke(new LongPressCommandData(node));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onLongPressPollImage-YVExdug */
    public void mo442onLongPressPollImageYVExdug(long j10, @NotNull String messageId, @NotNull String attachmentId, int i10, int i11, int i12, int i13, @NotNull ViewResizeMode viewResizeMode) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachmentId, "attachmentId");
        Intrinsics.checkNotNullParameter(viewResizeMode, "viewResizeMode");
        this.emitReactEvent.invoke(new LongPressPollImageData(ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(messageId), attachmentId, new TapImageData.Layout(i10, i11, i12, i13, viewResizeMode)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onLongPressReaction-Eqy5D80 */
    public void mo443onLongPressReactionEqy5D80(@NotNull String messageId, long j10, ReactionView.Reaction reaction) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new LongPressReactionData(messageId, j10, reaction, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onLongPressUsername-x5gers8 */
    public void mo444onLongPressUsernamex5gers8(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new LongPressUsernameData(MessageId.m1093toStringimpl(messageId), UserId.m1145toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onMediaPlayFinishedAnalytics(@NotNull MediaPlayFinishedAnalytics analytics) {
        Intrinsics.checkNotNullParameter(analytics, "analytics");
        this.emitReactEvent.invoke(analytics);
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onScrollStateChanged(@NotNull ScrollState scrollState, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        Intrinsics.checkNotNullParameter(scrollState, "scrollState");
        if (scrollState.isNearBottom() && scrollState.getScrollDirection() == ScrollDirection.DOWN) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (scrollState.isNearTop() && scrollState.getScrollDirection() == ScrollDirection.UP) {
            z11 = true;
        } else {
            z11 = false;
        }
        Function1<ReactEvent, Unit> function1 = this.emitReactEvent;
        boolean isAtBottom = scrollState.isAtBottom();
        boolean isDragging = scrollState.isDragging();
        boolean isSettling = scrollState.isSettling();
        if (!scrollState.isNearBottom() && !scrollState.isAtBottom()) {
            z12 = true;
        } else {
            z12 = false;
        }
        function1.invoke(new ChatScrollPositionEvent(isAtBottom, z10, z11, isDragging, isSettling, z12, scrollState.isFirstMessageVisible(), scrollState.getFirstVisibleMessageIndex(), scrollState.getFirstVisibleMessagePercentVisible(), scrollState.getLastVisibleMessageIndex(), scrollState.getLastVisibleMessagePercentVisible(), i10));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onSharedClientThemeViewed-1xi1bu0 */
    public void mo445onSharedClientThemeViewed1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new SharedClientThemeViewedData(messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onStickerClicked-Ayv7vGE */
    public void mo446onStickerClickedAyv7vGE(@NotNull Sticker sticker, @NotNull String messageId) {
        Intrinsics.checkNotNullParameter(sticker, "sticker");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapStickerData(sticker, messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onStickerLongClicked-Ayv7vGE */
    public void mo447onStickerLongClickedAyv7vGE(@NotNull Sticker sticker, @NotNull String messageId) {
        Intrinsics.checkNotNullParameter(sticker, "sticker");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new LongPressStickerData(messageId, sticker, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapAppMessageEmbed(@NotNull String messageId, @NotNull String actionId, @NotNull String appId, @NotNull String embedUrl) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(actionId, "actionId");
        Intrinsics.checkNotNullParameter(appId, "appId");
        Intrinsics.checkNotNullParameter(embedUrl, "embedUrl");
        this.emitReactEvent.invoke(new TapAppMessageEmbedData(messageId, actionId, appId, embedUrl));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapAttachmentLink(@NotNull String attachmentUrl) {
        Intrinsics.checkNotNullParameter(attachmentUrl, "attachmentUrl");
        this.emitReactEvent.invoke(new TapAttachmentLinkData(attachmentUrl));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapAutoModerationActions-pfaIj0E */
    public void mo448onTapAutoModerationActionspfaIj0E(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapAutoModerationActionsData(MessageId.m1093toStringimpl(messageId), ChannelId.m1067toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapAutoModerationFeedback-pfaIj0E */
    public void mo449onTapAutoModerationFeedbackpfaIj0E(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapAutoModerationFeedbackData(MessageId.m1093toStringimpl(messageId), ChannelId.m1067toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapAvatar-x5gers8 */
    public void mo450onTapAvatarx5gers8(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapAvatarData(MessageId.m1093toStringimpl(messageId), UserId.m1145toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapButtonActionComponent-ntcYbpo */
    public void mo451onTapButtonActionComponentntcYbpo(@NotNull String messageId, @NotNull String componentId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(componentId, "componentId");
        this.emitReactEvent.invoke(new TapButtonActionComponent(messageId, componentId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapCall-pfaIj0E */
    public void mo452onTapCallpfaIj0E(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapCallData(messageId, j10, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapCancelUploadItem(@NotNull String uploaderId, @NotNull String itemId) {
        Intrinsics.checkNotNullParameter(uploaderId, "uploaderId");
        Intrinsics.checkNotNullParameter(itemId, "itemId");
        this.emitReactEvent.invoke(new TapCancelUploadItemData(uploaderId, itemId));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapChannel(@NotNull String channelId, String str, String str2) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        this.emitReactEvent.invoke(new TapChannelData(str, channelId, str2));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapChannelPromptButton-Eqy5D80 */
    public void mo453onTapChannelPromptButtonEqy5D80(@NotNull String messageId, long j10, @NotNull String buttonType) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(buttonType, "buttonType");
        this.emitReactEvent.invoke(new TapChannelPromptButtonData(MessageId.m1093toStringimpl(messageId), ChannelId.m1067toStringimpl(j10), buttonType));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapCheckpointCard-x5gers8 */
    public void mo454onTapCheckpointCardx5gers8(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapCheckpointCardData(MessageId.m1093toStringimpl(messageId), UserId.m1145toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapClanTagChiplet-g3bFfsM */
    public void mo455onTapClanTagChipletg3bFfsM(long j10) {
        this.emitReactEvent.invoke(new TapClanTagChipletData(GuildId.m1080toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapCommand(@NotNull CommandMentionContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        this.emitReactEvent.invoke(new TapCommandData(node));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapConnectionsRoleTag(@NotNull String userId, @NotNull String guildId, @NotNull String channelId, @NotNull String roleId) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(guildId, "guildId");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(roleId, "roleId");
        this.emitReactEvent.invoke(new TapConnectionsRoleTagData(userId, guildId, channelId, roleId));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapContentInventoryEntryEmbed-tsfjtEQ */
    public void mo456onTapContentInventoryEntryEmbedtsfjtEQ(@NotNull String messageId, long j10, @NotNull String contentId, @NotNull String tappedElement) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(contentId, "contentId");
        Intrinsics.checkNotNullParameter(tappedElement, "tappedElement");
        this.emitReactEvent.invoke(new TapContentInventoryEntryEmbedData(MessageId.m1093toStringimpl(messageId), UserId.m1145toStringimpl(j10), contentId, tappedElement));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapCopyText(@NotNull CharSequence text) {
        Intrinsics.checkNotNullParameter(text, "text");
        this.emitReactEvent.invoke(new TapCopyText(text));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapCtaButton-sekaTiM */
    public void mo457onTapCtaButtonsekaTiM(long j10, @NotNull String messageId, @NotNull String callback) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.emitReactEvent.invoke(new TapCtaButton(ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(messageId), callback));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapDismissMediaPostSharePrompt-1xi1bu0 */
    public void mo458onTapDismissMediaPostSharePrompt1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapDismissMediaPostSharePromptData(messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapEmoji(@NotNull EmojiContentNode emoji) {
        Intrinsics.checkNotNullParameter(emoji, "emoji");
        this.emitReactEvent.invoke(new TapEmojiData(emoji));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapFollowForumPost-pfaIj0E */
    public void mo459onTapFollowForumPostpfaIj0E(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapFollowForumPost(MessageId.m1093toStringimpl(messageId), ChannelId.m1067toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapForwardFooter-SHRpUJI */
    public void mo460onTapForwardFooterSHRpUJI(int i10, long j10, @NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapForwardFooterData(i10, ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(messageId)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapGameIcon(@NotNull String gameApplicationId, @NotNull String timestamp) {
        Intrinsics.checkNotNullParameter(gameApplicationId, "gameApplicationId");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        this.emitReactEvent.invoke(new TapGameIconData(gameApplicationId, timestamp));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapGiftCodeAccept-NU4t8f8 */
    public void mo461onTapGiftCodeAcceptNU4t8f8(@NotNull String giftCode, String str) {
        Intrinsics.checkNotNullParameter(giftCode, "giftCode");
        this.emitReactEvent.invoke(new TapGiftCodeAcceptData(giftCode, str, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapGiftCodeEmbed(@NotNull String giftCode) {
        Intrinsics.checkNotNullParameter(giftCode, "giftCode");
        this.emitReactEvent.invoke(new TapGiftCodeEmbedData(giftCode));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapImage-JR3bP6M */
    public void mo462onTapImageJR3bP6M(@NotNull String messageId, int i10, @NotNull String type, int i11, int i12, int i13, int i14, @NotNull ViewResizeMode viewResizeMode, Double d10, Integer num, String str, Integer num2) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(viewResizeMode, "viewResizeMode");
        this.emitReactEvent.invoke(new TapImageData(MessageId.m1093toStringimpl(messageId), i10, type, new TapImageData.Layout(i11, i12, i13, i14, viewResizeMode), d10, num, str, num2));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapInlineCode(@NotNull InlineCodeContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        this.emitReactEvent.invoke(new TapInlineCodeEvent(node));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapInlineForward-j8a4Y88 */
    public void mo463onTapInlineForwardj8a4Y88(long j10, @NotNull String messageId, @NotNull String targetKind, Integer num, Boolean bool, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(targetKind, "targetKind");
        this.emitReactEvent.invoke(new TapInlineForwardData(ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(messageId), targetKind, num, bool, str));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapInviteEmbed-AFFcxXc */
    public void mo464onTapInviteEmbedAFFcxXc(@NotNull String messageId, int i10, Boolean bool, Boolean bool2) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapInviteEvent(messageId, i10, bool, bool2));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapInviteEmbedAccept-ntcYbpo */
    public void mo465onTapInviteEmbedAcceptntcYbpo(@NotNull String messageId, int i10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapInviteAcceptEvent(messageId, i10));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapInviteToSpeak-1xi1bu0 */
    public void mo466onTapInviteToSpeak1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapInviteToSpeakData(messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapJoinActivity-1xi1bu0 */
    public void mo467onTapJoinActivity1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapJoinActivityData(messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapJoinRichPresence-1xi1bu0 */
    public void mo468onTapJoinRichPresence1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapJoinRichPresenceData(messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapLoadMessagesAfter() {
        this.emitReactEvent.invoke(new TapSeparatorData("load_more_after", null, 2, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapLoadMessagesBefore() {
        this.emitReactEvent.invoke(new TapSeparatorData("load_more_before", null, 2, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapMention(String str, @NotNull String channelId, String str2, String str3) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        this.emitReactEvent.invoke(new TapMentionData(str, channelId, str2, str3));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapMessageReply-0eiqbug */
    public void mo469onTapMessageReply0eiqbug(long j10, @NotNull String originId) {
        Intrinsics.checkNotNullParameter(originId, "originId");
        this.emitReactEvent.invoke(new TapMessageReplyData(ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(originId)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapObscuredMediaLearnMore-8a0ehIg */
    public void mo470onTapObscuredMediaLearnMore8a0ehIg(@NotNull String messageId, long j10, String str, String str2) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapObscuredMediaLearnMoreData(MessageId.m1093toStringimpl(messageId), ChannelId.m1067toStringimpl(j10), String.valueOf(str), String.valueOf(str2)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapObscuredMediaToggle-ZQwuxwg */
    public void mo471onTapObscuredMediaToggleZQwuxwg(@NotNull String messageId, long j10, boolean z10, String str, String str2) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapObscuredMediaToggleData(MessageId.m1093toStringimpl(messageId), ChannelId.m1067toStringimpl(j10), String.valueOf(str), String.valueOf(str2), z10));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapOpTag() {
        this.emitReactEvent.invoke(TapOpTagData.INSTANCE);
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapPollAction-sekaTiM */
    public void mo472onTapPollActionsekaTiM(long j10, @NotNull String messageId, @NotNull String type) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(type, "type");
        this.emitReactEvent.invoke(new TapPollAction(ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(messageId), type));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapPollAnswer-sekaTiM */
    public void mo473onTapPollAnswersekaTiM(long j10, @NotNull String messageId, @NotNull String answerId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(answerId, "answerId");
        this.emitReactEvent.invoke(new TapPollAnswer(ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(messageId), answerId));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    @jr.c
    /* renamed from: onTapPollSubmitVote-0eiqbug */
    public void mo474onTapPollSubmitVote0eiqbug(long j10, @NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapPollSubmitVote(ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(messageId)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapPostPreviewEmbed-kUTrp-s */
    public void mo475onTapPostPreviewEmbedkUTrps(long j10, long j11, long j12, @NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapPostPreviewEmbedData(GuildId.m1080toStringimpl(j10), ChannelId.m1067toStringimpl(j11), ChannelId.m1067toStringimpl(j12), messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapPreviewSharedClientTheme-1xi1bu0 */
    public void mo476onTapPreviewSharedClientTheme1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapPreviewSharedClientThemeData(messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapReaction-AFFcxXc */
    public void mo477onTapReactionAFFcxXc(@NotNull String messageId, ReactionView.Reaction reaction, Boolean bool, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapReactionData(messageId, reaction, bool, str, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapReactionOverflow-pfaIj0E */
    public void mo478onTapReactionOverflowpfaIj0E(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapReactionOverflow(MessageId.m1093toStringimpl(messageId), ChannelId.m1067toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapReferralRedeem(String str) {
        this.emitReactEvent.invoke(new TapReferralRedeemData(str));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapRoleIcon(@NotNull String roleName, @NotNull String roleIconSource) {
        Intrinsics.checkNotNullParameter(roleName, "roleName");
        Intrinsics.checkNotNullParameter(roleIconSource, "roleIconSource");
        this.emitReactEvent.invoke(new TapRoleIconData(roleName, roleIconSource));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapSafetyPolicyNoticeEmbed(@NotNull String classificationId) {
        Intrinsics.checkNotNullParameter(classificationId, "classificationId");
        this.emitReactEvent.invoke(new TapSafetyPolicyNoticeEmbed(classificationId));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapSafetySystemNotificationCta(@NotNull String ctaType, @NotNull String ctaKey) {
        Intrinsics.checkNotNullParameter(ctaType, "ctaType");
        Intrinsics.checkNotNullParameter(ctaKey, "ctaKey");
        this.emitReactEvent.invoke(new TapSafetySystemNotificationCta(ctaType, ctaKey));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapSeeMore-1xi1bu0 */
    public void mo479onTapSeeMore1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapSeeMoreData(messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapSelectActionComponent-ntcYbpo */
    public void mo480onTapSelectActionComponentntcYbpo(@NotNull String messageId, @NotNull String componentId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(componentId, "componentId");
        this.emitReactEvent.invoke(new TapSelectActionComponent(messageId, componentId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapShareForumPost-mgk6anA */
    public void mo481onTapShareForumPostmgk6anA(long j10, long j11) {
        this.emitReactEvent.invoke(new TapShareForumPost(ChannelId.m1067toStringimpl(j10), GuildId.m1080toStringimpl(j11)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapShowAltText(@NotNull String description) {
        Intrinsics.checkNotNullParameter(description, "description");
        this.emitReactEvent.invoke(new TapShowAltTextData(description));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapSoundmoji(@NotNull SoundmojiContentNode node) {
        Intrinsics.checkNotNullParameter(node, "node");
        this.emitReactEvent.invoke(new TapSoundmojiData(node.getSoundId(), ChannelId.m1067toStringimpl(node.m376getChannelIdo4g7jtM()), node.getGuildId(), node.m377getMessageId3Eiw7ao(), null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapSummary-sekaTiM */
    public void mo482onTapSummarysekaTiM(long j10, @NotNull String messageId, @NotNull String summaryId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(summaryId, "summaryId");
        this.emitReactEvent.invoke(new TapSummaryData(ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(messageId), summaryId));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapSummaryJump-sekaTiM */
    public void mo483onTapSummaryJumpsekaTiM(long j10, @NotNull String messageId, @NotNull String summaryId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(summaryId, "summaryId");
        this.emitReactEvent.invoke(new TapSummaryJumpData(ChannelId.m1067toStringimpl(j10), MessageId.m1093toStringimpl(messageId), summaryId));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapSuppressNotificationsIcon() {
        this.emitReactEvent.invoke(TapSuppressNotificationsIconData.INSTANCE);
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapTag-Eqy5D80 */
    public void mo484onTapTagEqy5D80(@NotNull String messageId, long j10, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapTagData(messageId, j10, str, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapThreadEmbed-1xi1bu0 */
    public void mo485onTapThreadEmbed1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapThreadEmbedEvent(messageId));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    public void onTapTimestamp(@NotNull String timestamp) {
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        this.emitReactEvent.invoke(new TapTimestampEvent(timestamp));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapToggleBlockedMessages-1xi1bu0 */
    public void mo486onTapToggleBlockedMessages1xi1bu0(@NotNull String messageId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapSeparatorData("toggle", MessageId.m1093toStringimpl(messageId)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onTapUsername-x5gers8 */
    public void mo487onTapUsernamex5gers8(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapUsernameData(MessageId.m1093toStringimpl(messageId), UserId.m1145toStringimpl(j10)));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: onWelcomeReplyClicked-Ayv7vGE */
    public void mo488onWelcomeReplyClickedAyv7vGE(@NotNull Sticker sticker, @NotNull String messageId) {
        Intrinsics.checkNotNullParameter(sticker, "sticker");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new TapWelcomeReplyData(sticker.getId(), messageId, null));
    }

    @Override // com.discord.chat.presentation.events.ChatEventHandler
    /* renamed from: voiceMessagePlaybackFailed-ntcYbpo */
    public void mo489voiceMessagePlaybackFailedntcYbpo(@NotNull String messageId, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.emitReactEvent.invoke(new VoiceMessagePlaybackFailedData(messageId, str, null));
    }
}
