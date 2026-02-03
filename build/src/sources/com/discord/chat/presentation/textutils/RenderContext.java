package com.discord.chat.presentation.textutils;

import android.content.Context;
import android.graphics.Paint;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.InlineCodeContentNode;
import com.discord.chat.bridge.contentnode.LinkContentNode;
import com.discord.chat.bridge.contentnode.SoundmojiContentNode;
import com.discord.theme.DiscordThemeObject;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.PointerEventHelper;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000\u0098\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\bw\b\u0086\b\u0018\u00002\u00020\u0001:\u0004ª\u0001«\u0001B\u009d\u0004\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0012\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0012\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0012\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u000b0\u0006\u0012\"\u0010\u000e\u001a\u001e\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\r\u0012*\u0010\u0010\u001a&\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\u000f\u0012\u0012\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0018\u0010\u0013\u001a\u0014\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u0012\u0012*\u0010\u0014\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\u000f\u0012\u0012\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0012\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\b0\u0006\u0012\f\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\b0\u0018\u0012\u0012\u0010\u001a\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0012\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u001b\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0012\u0010\u001e\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0014\b\u0002\u0010 \u001a\u000e\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020\b0\u0006\u0012\u0006\u0010\"\u001a\u00020!\u0012\u0006\u0010#\u001a\u00020!\u0012\u0006\u0010$\u001a\u00020!\u0012\u0006\u0010%\u001a\u00020!\u0012\u0006\u0010&\u001a\u00020!\u0012\u0006\u0010(\u001a\u00020'\u0012\b\b\u0002\u0010*\u001a\u00020)\u0012\b\b\u0002\u0010,\u001a\u00020+\u0012\n\b\u0002\u0010.\u001a\u0004\u0018\u00010-\u0012\n\b\u0002\u0010/\u001a\u0004\u0018\u00010-\u0012\b\b\u0002\u00100\u001a\u00020!\u0012\b\b\u0002\u00102\u001a\u000201\u0012\u0006\u00104\u001a\u000203\u0012\b\b\u0002\u00106\u001a\u000205\u0012\n\b\u0002\u00107\u001a\u0004\u0018\u000105\u0012\b\b\u0002\u00108\u001a\u00020!¢\u0006\u0004\b9\u0010:J!\u0010<\u001a\u00020\u00002\u0012\u0010;\u001a\u000e\u0012\u0004\u0012\u000201\u0012\u0004\u0012\u0002010\u0006¢\u0006\u0004\b<\u0010=J\r\u0010>\u001a\u00020!¢\u0006\u0004\b>\u0010?J\r\u0010@\u001a\u00020!¢\u0006\u0004\b@\u0010?J\r\u0010A\u001a\u00020!¢\u0006\u0004\bA\u0010?J\u0010\u0010B\u001a\u00020\u0002HÆ\u0003¢\u0006\u0004\bB\u0010CJ\u0010\u0010D\u001a\u00020\u0004HÆ\u0003¢\u0006\u0004\bD\u0010EJ\u001c\u0010F\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u0006HÆ\u0003¢\u0006\u0004\bF\u0010GJ\u001c\u0010H\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u0006HÆ\u0003¢\u0006\u0004\bH\u0010GJ\u001c\u0010I\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u000b0\u0006HÆ\u0003¢\u0006\u0004\bI\u0010GJ,\u0010J\u001a\u001e\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\rHÆ\u0003¢\u0006\u0004\bJ\u0010KJ4\u0010L\u001a&\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\u000fHÆ\u0003¢\u0006\u0004\bL\u0010MJ\u001c\u0010N\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u0006HÆ\u0003¢\u0006\u0004\bN\u0010GJ\"\u0010O\u001a\u0014\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u0012HÆ\u0003¢\u0006\u0004\bO\u0010PJ4\u0010Q\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\u000fHÆ\u0003¢\u0006\u0004\bQ\u0010MJ\u001c\u0010R\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\b0\u0006HÆ\u0003¢\u0006\u0004\bR\u0010GJ\u001c\u0010S\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\b0\u0006HÆ\u0003¢\u0006\u0004\bS\u0010GJ\u0016\u0010T\u001a\b\u0012\u0004\u0012\u00020\b0\u0018HÆ\u0003¢\u0006\u0004\bT\u0010UJ\u001c\u0010V\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u0006HÆ\u0003¢\u0006\u0004\bV\u0010GJ\u001c\u0010W\u001a\u000e\u0012\u0004\u0012\u00020\u001b\u0012\u0004\u0012\u00020\b0\u0006HÆ\u0003¢\u0006\u0004\bW\u0010GJ\u001c\u0010X\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\b0\u0006HÆ\u0003¢\u0006\u0004\bX\u0010GJ\u001c\u0010Y\u001a\u000e\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020\b0\u0006HÆ\u0003¢\u0006\u0004\bY\u0010GJ\u0010\u0010Z\u001a\u00020!HÆ\u0003¢\u0006\u0004\bZ\u0010?J\u0010\u0010[\u001a\u00020!HÆ\u0003¢\u0006\u0004\b[\u0010?J\u0010\u0010\\\u001a\u00020!HÆ\u0003¢\u0006\u0004\b\\\u0010?J\u0010\u0010]\u001a\u00020!HÆ\u0003¢\u0006\u0004\b]\u0010?J\u0010\u0010^\u001a\u00020!HÆ\u0003¢\u0006\u0004\b^\u0010?J\u0010\u0010_\u001a\u00020'HÆ\u0003¢\u0006\u0004\b_\u0010`J\u0010\u0010a\u001a\u00020)HÆ\u0003¢\u0006\u0004\ba\u0010bJ\u0010\u0010c\u001a\u00020+HÆ\u0003¢\u0006\u0004\bc\u0010dJ\u0012\u0010e\u001a\u0004\u0018\u00010-HÆ\u0003¢\u0006\u0004\be\u0010fJ\u0012\u0010g\u001a\u0004\u0018\u00010-HÆ\u0003¢\u0006\u0004\bg\u0010fJ\u0010\u0010h\u001a\u00020!HÆ\u0003¢\u0006\u0004\bh\u0010?J\u0010\u0010i\u001a\u000201HÆ\u0003¢\u0006\u0004\bi\u0010jJ\u0010\u0010k\u001a\u000203HÆ\u0003¢\u0006\u0004\bk\u0010lJ\u0010\u0010m\u001a\u000205HÆ\u0003¢\u0006\u0004\bm\u0010nJ\u0012\u0010o\u001a\u0004\u0018\u000105HÆ\u0003¢\u0006\u0004\bo\u0010pJ\u0010\u0010q\u001a\u00020!HÆ\u0003¢\u0006\u0004\bq\u0010?JÔ\u0004\u0010r\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00022\b\b\u0002\u0010\u0005\u001a\u00020\u00042\u0014\b\u0002\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u00062\u0014\b\u0002\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u00062\u0014\b\u0002\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u000b0\u00062$\b\u0002\u0010\u000e\u001a\u001e\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\r2,\b\u0002\u0010\u0010\u001a&\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\u000f2\u0014\b\u0002\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u00062\u001a\b\u0002\u0010\u0013\u001a\u0014\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u00122,\b\u0002\u0010\u0014\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\u000f2\u0014\b\u0002\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\b0\u00062\u0014\b\u0002\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\b0\u00062\u000e\b\u0002\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\b0\u00182\u0014\b\u0002\u0010\u001a\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u00062\u0014\b\u0002\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u001b\u0012\u0004\u0012\u00020\b0\u00062\u0014\b\u0002\u0010\u001e\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\b0\u00062\u0014\b\u0002\u0010 \u001a\u000e\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020\b0\u00062\b\b\u0002\u0010\"\u001a\u00020!2\b\b\u0002\u0010#\u001a\u00020!2\b\b\u0002\u0010$\u001a\u00020!2\b\b\u0002\u0010%\u001a\u00020!2\b\b\u0002\u0010&\u001a\u00020!2\b\b\u0002\u0010(\u001a\u00020'2\b\b\u0002\u0010*\u001a\u00020)2\b\b\u0002\u0010,\u001a\u00020+2\n\b\u0002\u0010.\u001a\u0004\u0018\u00010-2\n\b\u0002\u0010/\u001a\u0004\u0018\u00010-2\b\b\u0002\u00100\u001a\u00020!2\b\b\u0002\u00102\u001a\u0002012\b\b\u0002\u00104\u001a\u0002032\b\b\u0002\u00106\u001a\u0002052\n\b\u0002\u00107\u001a\u0004\u0018\u0001052\b\b\u0002\u00108\u001a\u00020!HÆ\u0001¢\u0006\u0004\br\u0010sJ\u0010\u0010t\u001a\u00020\u0004HÖ\u0001¢\u0006\u0004\bt\u0010EJ\u0010\u0010u\u001a\u00020+HÖ\u0001¢\u0006\u0004\bu\u0010dJ\u001a\u0010w\u001a\u00020!2\b\u0010v\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\bw\u0010xR\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0003\u0010y\u001a\u0004\bz\u0010CR\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\u0005\u0010{\u001a\u0004\b|\u0010ER#\u0010\t\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\f\n\u0004\b\t\u0010}\u001a\u0004\b~\u0010GR#\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\f\n\u0004\b\n\u0010}\u001a\u0004\b\u007f\u0010GR$\u0010\f\u001a\u000e\u0012\u0004\u0012\u00020\u0007\u0012\u0004\u0012\u00020\u000b0\u00068\u0006¢\u0006\r\n\u0004\b\f\u0010}\u001a\u0005\b\u0080\u0001\u0010GR5\u0010\u000e\u001a\u001e\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\r8\u0006¢\u0006\u000e\n\u0005\b\u000e\u0010\u0081\u0001\u001a\u0005\b\u0082\u0001\u0010KR=\u0010\u0010\u001a&\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\u000f8\u0006¢\u0006\u000e\n\u0005\b\u0010\u0010\u0083\u0001\u001a\u0005\b\u0084\u0001\u0010MR$\u0010\u0011\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\r\n\u0004\b\u0011\u0010}\u001a\u0005\b\u0085\u0001\u0010GR+\u0010\u0013\u001a\u0014\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u00128\u0006¢\u0006\u000e\n\u0005\b\u0013\u0010\u0086\u0001\u001a\u0005\b\u0087\u0001\u0010PR=\u0010\u0014\u001a&\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\b0\u000f8\u0006¢\u0006\u000e\n\u0005\b\u0014\u0010\u0083\u0001\u001a\u0005\b\u0088\u0001\u0010MR$\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\r\n\u0004\b\u0016\u0010}\u001a\u0005\b\u0089\u0001\u0010GR$\u0010\u0017\u001a\u000e\u0012\u0004\u0012\u00020\u0015\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\r\n\u0004\b\u0017\u0010}\u001a\u0005\b\u008a\u0001\u0010GR\u001f\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\b0\u00188\u0006¢\u0006\u000e\n\u0005\b\u0019\u0010\u008b\u0001\u001a\u0005\b\u008c\u0001\u0010UR$\u0010\u001a\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\r\n\u0004\b\u001a\u0010}\u001a\u0005\b\u008d\u0001\u0010GR$\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\u001b\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\r\n\u0004\b\u001c\u0010}\u001a\u0005\b\u008e\u0001\u0010GR$\u0010\u001e\u001a\u000e\u0012\u0004\u0012\u00020\u001d\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\r\n\u0004\b\u001e\u0010}\u001a\u0005\b\u008f\u0001\u0010GR$\u0010 \u001a\u000e\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020\b0\u00068\u0006¢\u0006\r\n\u0004\b \u0010}\u001a\u0005\b\u0090\u0001\u0010GR\u0019\u0010\"\u001a\u00020!8\u0006¢\u0006\u000e\n\u0005\b\"\u0010\u0091\u0001\u001a\u0005\b\u0092\u0001\u0010?R\u0019\u0010#\u001a\u00020!8\u0006¢\u0006\u000e\n\u0005\b#\u0010\u0091\u0001\u001a\u0005\b\u0093\u0001\u0010?R\u0019\u0010$\u001a\u00020!8\u0006¢\u0006\u000e\n\u0005\b$\u0010\u0091\u0001\u001a\u0005\b\u0094\u0001\u0010?R\u0019\u0010%\u001a\u00020!8\u0006¢\u0006\u000e\n\u0005\b%\u0010\u0091\u0001\u001a\u0005\b\u0095\u0001\u0010?R\u0019\u0010&\u001a\u00020!8\u0006¢\u0006\u000e\n\u0005\b&\u0010\u0091\u0001\u001a\u0005\b\u0096\u0001\u0010?R\u0019\u0010(\u001a\u00020'8\u0006¢\u0006\u000e\n\u0005\b(\u0010\u0097\u0001\u001a\u0005\b\u0098\u0001\u0010`R\u0019\u0010*\u001a\u00020)8\u0006¢\u0006\u000e\n\u0005\b*\u0010\u0099\u0001\u001a\u0005\b\u009a\u0001\u0010bR\u0019\u0010,\u001a\u00020+8\u0006¢\u0006\u000e\n\u0005\b,\u0010\u009b\u0001\u001a\u0005\b\u009c\u0001\u0010dR\u001b\u0010.\u001a\u0004\u0018\u00010-8\u0006¢\u0006\u000e\n\u0005\b.\u0010\u009d\u0001\u001a\u0005\b\u009e\u0001\u0010fR\u001b\u0010/\u001a\u0004\u0018\u00010-8\u0006¢\u0006\u000e\n\u0005\b/\u0010\u009d\u0001\u001a\u0005\b\u009f\u0001\u0010fR\u0019\u00100\u001a\u00020!8\u0006¢\u0006\u000e\n\u0005\b0\u0010\u0091\u0001\u001a\u0005\b \u0001\u0010?R\u0019\u00102\u001a\u0002018\u0006¢\u0006\u000e\n\u0005\b2\u0010¡\u0001\u001a\u0005\b¢\u0001\u0010jR\u0019\u00104\u001a\u0002038\u0006¢\u0006\u000e\n\u0005\b4\u0010£\u0001\u001a\u0005\b¤\u0001\u0010lR\u0019\u00106\u001a\u0002058\u0006¢\u0006\u000e\n\u0005\b6\u0010¥\u0001\u001a\u0005\b¦\u0001\u0010nR\u001b\u00107\u001a\u0004\u0018\u0001058\u0006¢\u0006\u000e\n\u0005\b7\u0010§\u0001\u001a\u0005\b¨\u0001\u0010pR\u0019\u00108\u001a\u00020!8\u0006¢\u0006\u000e\n\u0005\b8\u0010\u0091\u0001\u001a\u0005\b©\u0001\u0010?¨\u0006¬\u0001"}, d2 = {"Lcom/discord/chat/presentation/textutils/RenderContext;", "", "Landroid/content/Context;", "context", "", "containerId", "Lkotlin/Function1;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "", "onTapLink", "onLongTapLink", "Lcom/discord/chat/presentation/textutils/LinkStyle;", "linkStyle", "Lkotlin/Function3;", "onTapChannel", "Lkotlin/Function4;", "onLongPressChannel", "onTapAttachmentLink", "Lkotlin/Function2;", "onLongPressAttachmentLink", "onTapMention", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "onTapCommand", "onLongPressCommand", "Lkotlin/Function0;", "onTapSpoiler", "onTapTimestamp", "Lcom/discord/chat/bridge/contentnode/InlineCodeContentNode;", "onTapInlineCode", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "onTapEmoji", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "onTapSoundmoji", "", "animateEmoji", "showLinkDecorations", "shouldShowRoleDot", "shouldShowRoleOnName", "singleLine", "Landroid/graphics/Paint;", "paint", "Lcom/discord/chat/presentation/textutils/RenderContext$SpoilerState;", "spoilerState", "", "listNestedLevel", "", "listOrderedIndex", "listLargestOrderedIndex", "inLink", "Lcom/discord/chat/presentation/textutils/RenderContext$Insets;", "insets", "Lcom/discord/theme/DiscordThemeObject;", "theme", "", "baselineHeightPx", "emojiBaselineHeightOverridePx", "shouldOmitTopAndBottomHeadingSpacerNewLine", "<init>", "(Landroid/content/Context;Ljava/lang/String;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;ZZZZZLandroid/graphics/Paint;Lcom/discord/chat/presentation/textutils/RenderContext$SpoilerState;ILjava/lang/Long;Ljava/lang/Long;ZLcom/discord/chat/presentation/textutils/RenderContext$Insets;Lcom/discord/theme/DiscordThemeObject;FLjava/lang/Float;Z)V", "update", "updateInsets", "(Lkotlin/jvm/functions/Function1;)Lcom/discord/chat/presentation/textutils/RenderContext;", "spoilerExists", "()Z", "spoilerIsHidden", "spoilerIsRevealed", "component1", "()Landroid/content/Context;", "component2", "()Ljava/lang/String;", "component3", "()Lkotlin/jvm/functions/Function1;", "component4", "component5", "component6", "()Lkotlin/jvm/functions/Function3;", "component7", "()Lkotlin/jvm/functions/Function4;", "component8", "component9", "()Lkotlin/jvm/functions/Function2;", "component10", "component11", "component12", "component13", "()Lkotlin/jvm/functions/Function0;", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "component23", "()Landroid/graphics/Paint;", "component24", "()Lcom/discord/chat/presentation/textutils/RenderContext$SpoilerState;", "component25", "()I", "component26", "()Ljava/lang/Long;", "component27", "component28", "component29", "()Lcom/discord/chat/presentation/textutils/RenderContext$Insets;", "component30", "()Lcom/discord/theme/DiscordThemeObject;", "component31", "()F", "component32", "()Ljava/lang/Float;", "component33", "copy", "(Landroid/content/Context;Ljava/lang/String;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function4;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;ZZZZZLandroid/graphics/Paint;Lcom/discord/chat/presentation/textutils/RenderContext$SpoilerState;ILjava/lang/Long;Ljava/lang/Long;ZLcom/discord/chat/presentation/textutils/RenderContext$Insets;Lcom/discord/theme/DiscordThemeObject;FLjava/lang/Float;Z)Lcom/discord/chat/presentation/textutils/RenderContext;", "toString", "hashCode", "other", "equals", "(Ljava/lang/Object;)Z", "Landroid/content/Context;", "getContext", "Ljava/lang/String;", "getContainerId", "Lkotlin/jvm/functions/Function1;", "getOnTapLink", "getOnLongTapLink", "getLinkStyle", "Lkotlin/jvm/functions/Function3;", "getOnTapChannel", "Lkotlin/jvm/functions/Function4;", "getOnLongPressChannel", "getOnTapAttachmentLink", "Lkotlin/jvm/functions/Function2;", "getOnLongPressAttachmentLink", "getOnTapMention", "getOnTapCommand", "getOnLongPressCommand", "Lkotlin/jvm/functions/Function0;", "getOnTapSpoiler", "getOnTapTimestamp", "getOnTapInlineCode", "getOnTapEmoji", "getOnTapSoundmoji", "Z", "getAnimateEmoji", "getShowLinkDecorations", "getShouldShowRoleDot", "getShouldShowRoleOnName", "getSingleLine", "Landroid/graphics/Paint;", "getPaint", "Lcom/discord/chat/presentation/textutils/RenderContext$SpoilerState;", "getSpoilerState", "I", "getListNestedLevel", "Ljava/lang/Long;", "getListOrderedIndex", "getListLargestOrderedIndex", "getInLink", "Lcom/discord/chat/presentation/textutils/RenderContext$Insets;", "getInsets", "Lcom/discord/theme/DiscordThemeObject;", "getTheme", "F", "getBaselineHeightPx", "Ljava/lang/Float;", "getEmojiBaselineHeightOverridePx", "getShouldOmitTopAndBottomHeadingSpacerNewLine", "Insets", "SpoilerState", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RenderContext {
    private final boolean animateEmoji;
    private final float baselineHeightPx;
    @NotNull
    private final String containerId;
    @NotNull
    private final Context context;
    private final Float emojiBaselineHeightOverridePx;
    private final boolean inLink;
    @NotNull
    private final Insets insets;
    @NotNull
    private final Function1<LinkContentNode, LinkStyle> linkStyle;
    private final Long listLargestOrderedIndex;
    private final int listNestedLevel;
    private final Long listOrderedIndex;
    @NotNull
    private final Function2<String, String, Unit> onLongPressAttachmentLink;
    @NotNull
    private final Function4 onLongPressChannel;
    @NotNull
    private final Function1<CommandMentionContentNode, Unit> onLongPressCommand;
    @NotNull
    private final Function1<LinkContentNode, Unit> onLongTapLink;
    @NotNull
    private final Function1<String, Unit> onTapAttachmentLink;
    @NotNull
    private final Function3 onTapChannel;
    @NotNull
    private final Function1<CommandMentionContentNode, Unit> onTapCommand;
    @NotNull
    private final Function1<EmojiContentNode, Unit> onTapEmoji;
    @NotNull
    private final Function1<InlineCodeContentNode, Unit> onTapInlineCode;
    @NotNull
    private final Function1<LinkContentNode, Unit> onTapLink;
    @NotNull
    private final Function4 onTapMention;
    @NotNull
    private final Function1<SoundmojiContentNode, Unit> onTapSoundmoji;
    @NotNull
    private final Function0<Unit> onTapSpoiler;
    @NotNull
    private final Function1<String, Unit> onTapTimestamp;
    @NotNull
    private final Paint paint;
    private final boolean shouldOmitTopAndBottomHeadingSpacerNewLine;
    private final boolean shouldShowRoleDot;
    private final boolean shouldShowRoleOnName;
    private final boolean showLinkDecorations;
    private final boolean singleLine;
    @NotNull
    private final SpoilerState spoilerState;
    @NotNull
    private final DiscordThemeObject theme;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B/\u0012\b\b\u0003\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0003\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0003\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0003\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J1\u0010\u0012\u001a\u00020\u00002\b\b\u0003\u0010\u0002\u001a\u00020\u00032\b\b\u0003\u0010\u0004\u001a\u00020\u00032\b\b\u0003\u0010\u0005\u001a\u00020\u00032\b\b\u0003\u0010\u0006\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\n¨\u0006\u0019"}, d2 = {"Lcom/discord/chat/presentation/textutils/RenderContext$Insets;", "", ViewProps.TOP, "", ViewProps.BOTTOM, ViewProps.START, ViewProps.END, "<init>", "(IIII)V", "getTop", "()I", "getBottom", "getStart", "getEnd", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Insets {
        private final int bottom;
        private final int end;
        private final int start;
        private final int top;

        public Insets() {
            this(0, 0, 0, 0, 15, null);
        }

        public static /* synthetic */ Insets copy$default(Insets insets, int i10, int i11, int i12, int i13, int i14, Object obj) {
            if ((i14 & 1) != 0) {
                i10 = insets.top;
            }
            if ((i14 & 2) != 0) {
                i11 = insets.bottom;
            }
            if ((i14 & 4) != 0) {
                i12 = insets.start;
            }
            if ((i14 & 8) != 0) {
                i13 = insets.end;
            }
            return insets.copy(i10, i11, i12, i13);
        }

        public final int component1() {
            return this.top;
        }

        public final int component2() {
            return this.bottom;
        }

        public final int component3() {
            return this.start;
        }

        public final int component4() {
            return this.end;
        }

        @NotNull
        public final Insets copy(int i10, int i11, int i12, int i13) {
            return new Insets(i10, i11, i12, i13);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Insets) {
                Insets insets = (Insets) obj;
                return this.top == insets.top && this.bottom == insets.bottom && this.start == insets.start && this.end == insets.end;
            }
            return false;
        }

        public final int getBottom() {
            return this.bottom;
        }

        public final int getEnd() {
            return this.end;
        }

        public final int getStart() {
            return this.start;
        }

        public final int getTop() {
            return this.top;
        }

        public int hashCode() {
            return (((((Integer.hashCode(this.top) * 31) + Integer.hashCode(this.bottom)) * 31) + Integer.hashCode(this.start)) * 31) + Integer.hashCode(this.end);
        }

        @NotNull
        public String toString() {
            int i10 = this.top;
            int i11 = this.bottom;
            int i12 = this.start;
            int i13 = this.end;
            return "Insets(top=" + i10 + ", bottom=" + i11 + ", start=" + i12 + ", end=" + i13 + ")";
        }

        public Insets(int i10, int i11, int i12, int i13) {
            this.top = i10;
            this.bottom = i11;
            this.start = i12;
            this.end = i13;
        }

        public /* synthetic */ Insets(int i10, int i11, int i12, int i13, int i14, DefaultConstructorMarker defaultConstructorMarker) {
            this((i14 & 1) != 0 ? 0 : i10, (i14 & 2) != 0 ? 0 : i11, (i14 & 4) != 0 ? 0 : i12, (i14 & 8) != 0 ? 0 : i13);
        }
    }

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/presentation/textutils/RenderContext$SpoilerState;", "", "<init>", "(Ljava/lang/String;I)V", "None", "Hidden", "Revealed", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class SpoilerState {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ SpoilerState[] $VALUES;
        public static final SpoilerState None = new SpoilerState("None", 0);
        public static final SpoilerState Hidden = new SpoilerState("Hidden", 1);
        public static final SpoilerState Revealed = new SpoilerState("Revealed", 2);

        private static final /* synthetic */ SpoilerState[] $values() {
            return new SpoilerState[]{None, Hidden, Revealed};
        }

        static {
            SpoilerState[] $values = $values();
            $VALUES = $values;
            $ENTRIES = sr.a.a($values);
        }

        private SpoilerState(String str, int i10) {
            super(str, i10);
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static SpoilerState valueOf(String str) {
            return (SpoilerState) Enum.valueOf(SpoilerState.class, str);
        }

        public static SpoilerState[] values() {
            return (SpoilerState[]) $VALUES.clone();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public RenderContext(@NotNull Context context, @NotNull String containerId, @NotNull Function1<? super LinkContentNode, Unit> onTapLink, @NotNull Function1<? super LinkContentNode, Unit> onLongTapLink, @NotNull Function1<? super LinkContentNode, LinkStyle> linkStyle, @NotNull Function3 onTapChannel, @NotNull Function4 onLongPressChannel, @NotNull Function1<? super String, Unit> onTapAttachmentLink, @NotNull Function2<? super String, ? super String, Unit> onLongPressAttachmentLink, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, @NotNull Function1<? super CommandMentionContentNode, Unit> onLongPressCommand, @NotNull Function0<Unit> onTapSpoiler, @NotNull Function1<? super String, Unit> onTapTimestamp, @NotNull Function1<? super InlineCodeContentNode, Unit> onTapInlineCode, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function1<? super SoundmojiContentNode, Unit> onTapSoundmoji, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, @NotNull Paint paint, @NotNull SpoilerState spoilerState, int i10, Long l10, Long l11, boolean z15, @NotNull Insets insets, @NotNull DiscordThemeObject theme, float f10, Float f11, boolean z16) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(containerId, "containerId");
        Intrinsics.checkNotNullParameter(onTapLink, "onTapLink");
        Intrinsics.checkNotNullParameter(onLongTapLink, "onLongTapLink");
        Intrinsics.checkNotNullParameter(linkStyle, "linkStyle");
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
        Intrinsics.checkNotNullParameter(onTapSoundmoji, "onTapSoundmoji");
        Intrinsics.checkNotNullParameter(paint, "paint");
        Intrinsics.checkNotNullParameter(spoilerState, "spoilerState");
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(theme, "theme");
        this.context = context;
        this.containerId = containerId;
        this.onTapLink = onTapLink;
        this.onLongTapLink = onLongTapLink;
        this.linkStyle = linkStyle;
        this.onTapChannel = onTapChannel;
        this.onLongPressChannel = onLongPressChannel;
        this.onTapAttachmentLink = onTapAttachmentLink;
        this.onLongPressAttachmentLink = onLongPressAttachmentLink;
        this.onTapMention = onTapMention;
        this.onTapCommand = onTapCommand;
        this.onLongPressCommand = onLongPressCommand;
        this.onTapSpoiler = onTapSpoiler;
        this.onTapTimestamp = onTapTimestamp;
        this.onTapInlineCode = onTapInlineCode;
        this.onTapEmoji = onTapEmoji;
        this.onTapSoundmoji = onTapSoundmoji;
        this.animateEmoji = z10;
        this.showLinkDecorations = z11;
        this.shouldShowRoleDot = z12;
        this.shouldShowRoleOnName = z13;
        this.singleLine = z14;
        this.paint = paint;
        this.spoilerState = spoilerState;
        this.listNestedLevel = i10;
        this.listOrderedIndex = l10;
        this.listLargestOrderedIndex = l11;
        this.inLink = z15;
        this.insets = insets;
        this.theme = theme;
        this.baselineHeightPx = f10;
        this.emojiBaselineHeightOverridePx = f11;
        this.shouldOmitTopAndBottomHeadingSpacerNewLine = z16;
    }

    public static final Unit _init_$lambda$0(SoundmojiContentNode it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32464a;
    }

    public static /* synthetic */ RenderContext copy$default(RenderContext renderContext, Context context, String str, Function1 function1, Function1 function12, Function1 function13, Function3 function3, Function4 function4, Function1 function14, Function2 function2, Function4 function42, Function1 function15, Function1 function16, Function0 function0, Function1 function17, Function1 function18, Function1 function19, Function1 function110, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, Paint paint, SpoilerState spoilerState, int i10, Long l10, Long l11, boolean z15, Insets insets, DiscordThemeObject discordThemeObject, float f10, Float f11, boolean z16, int i11, int i12, Object obj) {
        boolean z17;
        Float f12;
        Function1 function111;
        boolean z18;
        boolean z19;
        boolean z20;
        boolean z21;
        boolean z22;
        Paint paint2;
        SpoilerState spoilerState2;
        int i13;
        Long l12;
        Long l13;
        boolean z23;
        Insets insets2;
        DiscordThemeObject discordThemeObject2;
        float f13;
        Function1 function112;
        String str2;
        Function1 function113;
        Function1 function114;
        Function1 function115;
        Function3 function32;
        Function4 function43;
        Function1 function116;
        Function2 function22;
        Function4 function44;
        Function1 function117;
        Function1 function118;
        Function0 function02;
        Function1 function119;
        Function1 function120;
        Context context2 = (i11 & 1) != 0 ? renderContext.context : context;
        String str3 = (i11 & 2) != 0 ? renderContext.containerId : str;
        Function1 function121 = (i11 & 4) != 0 ? renderContext.onTapLink : function1;
        Function1 function122 = (i11 & 8) != 0 ? renderContext.onLongTapLink : function12;
        Function1 function123 = (i11 & 16) != 0 ? renderContext.linkStyle : function13;
        Function3 function33 = (i11 & 32) != 0 ? renderContext.onTapChannel : function3;
        Function4 function45 = (i11 & 64) != 0 ? renderContext.onLongPressChannel : function4;
        Function1 function124 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? renderContext.onTapAttachmentLink : function14;
        Function2 function23 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? renderContext.onLongPressAttachmentLink : function2;
        Function4 function46 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? renderContext.onTapMention : function42;
        Function1 function125 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? renderContext.onTapCommand : function15;
        Function1 function126 = (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? renderContext.onLongPressCommand : function16;
        Function0 function03 = (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? renderContext.onTapSpoiler : function0;
        Function1 function127 = (i11 & 8192) != 0 ? renderContext.onTapTimestamp : function17;
        Context context3 = context2;
        Function1 function128 = (i11 & 16384) != 0 ? renderContext.onTapInlineCode : function18;
        Function1 function129 = (i11 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? renderContext.onTapEmoji : function19;
        Function1 function130 = (i11 & 65536) != 0 ? renderContext.onTapSoundmoji : function110;
        boolean z24 = (i11 & 131072) != 0 ? renderContext.animateEmoji : z10;
        boolean z25 = (i11 & 262144) != 0 ? renderContext.showLinkDecorations : z11;
        boolean z26 = (i11 & 524288) != 0 ? renderContext.shouldShowRoleDot : z12;
        boolean z27 = (i11 & 1048576) != 0 ? renderContext.shouldShowRoleOnName : z13;
        boolean z28 = (i11 & 2097152) != 0 ? renderContext.singleLine : z14;
        Paint paint3 = (i11 & 4194304) != 0 ? renderContext.paint : paint;
        SpoilerState spoilerState3 = (i11 & 8388608) != 0 ? renderContext.spoilerState : spoilerState;
        int i14 = (i11 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? renderContext.listNestedLevel : i10;
        Long l14 = (i11 & 33554432) != 0 ? renderContext.listOrderedIndex : l10;
        Long l15 = (i11 & 67108864) != 0 ? renderContext.listLargestOrderedIndex : l11;
        boolean z29 = (i11 & 134217728) != 0 ? renderContext.inLink : z15;
        Insets insets3 = (i11 & 268435456) != 0 ? renderContext.insets : insets;
        DiscordThemeObject discordThemeObject3 = (i11 & 536870912) != 0 ? renderContext.theme : discordThemeObject;
        float f14 = (i11 & 1073741824) != 0 ? renderContext.baselineHeightPx : f10;
        Float f15 = (i11 & Integer.MIN_VALUE) != 0 ? renderContext.emojiBaselineHeightOverridePx : f11;
        if ((i12 & 1) != 0) {
            f12 = f15;
            z17 = renderContext.shouldOmitTopAndBottomHeadingSpacerNewLine;
            z18 = z24;
            z19 = z25;
            z20 = z26;
            z21 = z27;
            z22 = z28;
            paint2 = paint3;
            spoilerState2 = spoilerState3;
            i13 = i14;
            l12 = l14;
            l13 = l15;
            z23 = z29;
            insets2 = insets3;
            discordThemeObject2 = discordThemeObject3;
            f13 = f14;
            function112 = function128;
            function113 = function121;
            function114 = function122;
            function115 = function123;
            function32 = function33;
            function43 = function45;
            function116 = function124;
            function22 = function23;
            function44 = function46;
            function117 = function125;
            function118 = function126;
            function02 = function03;
            function119 = function127;
            function120 = function129;
            function111 = function130;
            str2 = str3;
        } else {
            z17 = z16;
            f12 = f15;
            function111 = function130;
            z18 = z24;
            z19 = z25;
            z20 = z26;
            z21 = z27;
            z22 = z28;
            paint2 = paint3;
            spoilerState2 = spoilerState3;
            i13 = i14;
            l12 = l14;
            l13 = l15;
            z23 = z29;
            insets2 = insets3;
            discordThemeObject2 = discordThemeObject3;
            f13 = f14;
            function112 = function128;
            str2 = str3;
            function113 = function121;
            function114 = function122;
            function115 = function123;
            function32 = function33;
            function43 = function45;
            function116 = function124;
            function22 = function23;
            function44 = function46;
            function117 = function125;
            function118 = function126;
            function02 = function03;
            function119 = function127;
            function120 = function129;
        }
        return renderContext.copy(context3, str2, function113, function114, function115, function32, function43, function116, function22, function44, function117, function118, function02, function119, function112, function120, function111, z18, z19, z20, z21, z22, paint2, spoilerState2, i13, l12, l13, z23, insets2, discordThemeObject2, f13, f12, z17);
    }

    @NotNull
    public final Context component1() {
        return this.context;
    }

    @NotNull
    public final Function4 component10() {
        return this.onTapMention;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> component11() {
        return this.onTapCommand;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> component12() {
        return this.onLongPressCommand;
    }

    @NotNull
    public final Function0<Unit> component13() {
        return this.onTapSpoiler;
    }

    @NotNull
    public final Function1<String, Unit> component14() {
        return this.onTapTimestamp;
    }

    @NotNull
    public final Function1<InlineCodeContentNode, Unit> component15() {
        return this.onTapInlineCode;
    }

    @NotNull
    public final Function1<EmojiContentNode, Unit> component16() {
        return this.onTapEmoji;
    }

    @NotNull
    public final Function1<SoundmojiContentNode, Unit> component17() {
        return this.onTapSoundmoji;
    }

    public final boolean component18() {
        return this.animateEmoji;
    }

    public final boolean component19() {
        return this.showLinkDecorations;
    }

    @NotNull
    public final String component2() {
        return this.containerId;
    }

    public final boolean component20() {
        return this.shouldShowRoleDot;
    }

    public final boolean component21() {
        return this.shouldShowRoleOnName;
    }

    public final boolean component22() {
        return this.singleLine;
    }

    @NotNull
    public final Paint component23() {
        return this.paint;
    }

    @NotNull
    public final SpoilerState component24() {
        return this.spoilerState;
    }

    public final int component25() {
        return this.listNestedLevel;
    }

    public final Long component26() {
        return this.listOrderedIndex;
    }

    public final Long component27() {
        return this.listLargestOrderedIndex;
    }

    public final boolean component28() {
        return this.inLink;
    }

    @NotNull
    public final Insets component29() {
        return this.insets;
    }

    @NotNull
    public final Function1<LinkContentNode, Unit> component3() {
        return this.onTapLink;
    }

    @NotNull
    public final DiscordThemeObject component30() {
        return this.theme;
    }

    public final float component31() {
        return this.baselineHeightPx;
    }

    public final Float component32() {
        return this.emojiBaselineHeightOverridePx;
    }

    public final boolean component33() {
        return this.shouldOmitTopAndBottomHeadingSpacerNewLine;
    }

    @NotNull
    public final Function1<LinkContentNode, Unit> component4() {
        return this.onLongTapLink;
    }

    @NotNull
    public final Function1<LinkContentNode, LinkStyle> component5() {
        return this.linkStyle;
    }

    @NotNull
    public final Function3 component6() {
        return this.onTapChannel;
    }

    @NotNull
    public final Function4 component7() {
        return this.onLongPressChannel;
    }

    @NotNull
    public final Function1<String, Unit> component8() {
        return this.onTapAttachmentLink;
    }

    @NotNull
    public final Function2<String, String, Unit> component9() {
        return this.onLongPressAttachmentLink;
    }

    @NotNull
    public final RenderContext copy(@NotNull Context context, @NotNull String containerId, @NotNull Function1<? super LinkContentNode, Unit> onTapLink, @NotNull Function1<? super LinkContentNode, Unit> onLongTapLink, @NotNull Function1<? super LinkContentNode, LinkStyle> linkStyle, @NotNull Function3 onTapChannel, @NotNull Function4 onLongPressChannel, @NotNull Function1<? super String, Unit> onTapAttachmentLink, @NotNull Function2<? super String, ? super String, Unit> onLongPressAttachmentLink, @NotNull Function4 onTapMention, @NotNull Function1<? super CommandMentionContentNode, Unit> onTapCommand, @NotNull Function1<? super CommandMentionContentNode, Unit> onLongPressCommand, @NotNull Function0<Unit> onTapSpoiler, @NotNull Function1<? super String, Unit> onTapTimestamp, @NotNull Function1<? super InlineCodeContentNode, Unit> onTapInlineCode, @NotNull Function1<? super EmojiContentNode, Unit> onTapEmoji, @NotNull Function1<? super SoundmojiContentNode, Unit> onTapSoundmoji, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, @NotNull Paint paint, @NotNull SpoilerState spoilerState, int i10, Long l10, Long l11, boolean z15, @NotNull Insets insets, @NotNull DiscordThemeObject theme, float f10, Float f11, boolean z16) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(containerId, "containerId");
        Intrinsics.checkNotNullParameter(onTapLink, "onTapLink");
        Intrinsics.checkNotNullParameter(onLongTapLink, "onLongTapLink");
        Intrinsics.checkNotNullParameter(linkStyle, "linkStyle");
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
        Intrinsics.checkNotNullParameter(onTapSoundmoji, "onTapSoundmoji");
        Intrinsics.checkNotNullParameter(paint, "paint");
        Intrinsics.checkNotNullParameter(spoilerState, "spoilerState");
        Intrinsics.checkNotNullParameter(insets, "insets");
        Intrinsics.checkNotNullParameter(theme, "theme");
        return new RenderContext(context, containerId, onTapLink, onLongTapLink, linkStyle, onTapChannel, onLongPressChannel, onTapAttachmentLink, onLongPressAttachmentLink, onTapMention, onTapCommand, onLongPressCommand, onTapSpoiler, onTapTimestamp, onTapInlineCode, onTapEmoji, onTapSoundmoji, z10, z11, z12, z13, z14, paint, spoilerState, i10, l10, l11, z15, insets, theme, f10, f11, z16);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof RenderContext) {
            RenderContext renderContext = (RenderContext) obj;
            return Intrinsics.areEqual(this.context, renderContext.context) && Intrinsics.areEqual(this.containerId, renderContext.containerId) && Intrinsics.areEqual(this.onTapLink, renderContext.onTapLink) && Intrinsics.areEqual(this.onLongTapLink, renderContext.onLongTapLink) && Intrinsics.areEqual(this.linkStyle, renderContext.linkStyle) && Intrinsics.areEqual(this.onTapChannel, renderContext.onTapChannel) && Intrinsics.areEqual(this.onLongPressChannel, renderContext.onLongPressChannel) && Intrinsics.areEqual(this.onTapAttachmentLink, renderContext.onTapAttachmentLink) && Intrinsics.areEqual(this.onLongPressAttachmentLink, renderContext.onLongPressAttachmentLink) && Intrinsics.areEqual(this.onTapMention, renderContext.onTapMention) && Intrinsics.areEqual(this.onTapCommand, renderContext.onTapCommand) && Intrinsics.areEqual(this.onLongPressCommand, renderContext.onLongPressCommand) && Intrinsics.areEqual(this.onTapSpoiler, renderContext.onTapSpoiler) && Intrinsics.areEqual(this.onTapTimestamp, renderContext.onTapTimestamp) && Intrinsics.areEqual(this.onTapInlineCode, renderContext.onTapInlineCode) && Intrinsics.areEqual(this.onTapEmoji, renderContext.onTapEmoji) && Intrinsics.areEqual(this.onTapSoundmoji, renderContext.onTapSoundmoji) && this.animateEmoji == renderContext.animateEmoji && this.showLinkDecorations == renderContext.showLinkDecorations && this.shouldShowRoleDot == renderContext.shouldShowRoleDot && this.shouldShowRoleOnName == renderContext.shouldShowRoleOnName && this.singleLine == renderContext.singleLine && Intrinsics.areEqual(this.paint, renderContext.paint) && this.spoilerState == renderContext.spoilerState && this.listNestedLevel == renderContext.listNestedLevel && Intrinsics.areEqual(this.listOrderedIndex, renderContext.listOrderedIndex) && Intrinsics.areEqual(this.listLargestOrderedIndex, renderContext.listLargestOrderedIndex) && this.inLink == renderContext.inLink && Intrinsics.areEqual(this.insets, renderContext.insets) && Intrinsics.areEqual(this.theme, renderContext.theme) && Float.compare(this.baselineHeightPx, renderContext.baselineHeightPx) == 0 && Intrinsics.areEqual((Object) this.emojiBaselineHeightOverridePx, (Object) renderContext.emojiBaselineHeightOverridePx) && this.shouldOmitTopAndBottomHeadingSpacerNewLine == renderContext.shouldOmitTopAndBottomHeadingSpacerNewLine;
        }
        return false;
    }

    public final boolean getAnimateEmoji() {
        return this.animateEmoji;
    }

    public final float getBaselineHeightPx() {
        return this.baselineHeightPx;
    }

    @NotNull
    public final String getContainerId() {
        return this.containerId;
    }

    @NotNull
    public final Context getContext() {
        return this.context;
    }

    public final Float getEmojiBaselineHeightOverridePx() {
        return this.emojiBaselineHeightOverridePx;
    }

    public final boolean getInLink() {
        return this.inLink;
    }

    @NotNull
    public final Insets getInsets() {
        return this.insets;
    }

    @NotNull
    public final Function1<LinkContentNode, LinkStyle> getLinkStyle() {
        return this.linkStyle;
    }

    public final Long getListLargestOrderedIndex() {
        return this.listLargestOrderedIndex;
    }

    public final int getListNestedLevel() {
        return this.listNestedLevel;
    }

    public final Long getListOrderedIndex() {
        return this.listOrderedIndex;
    }

    @NotNull
    public final Function2<String, String, Unit> getOnLongPressAttachmentLink() {
        return this.onLongPressAttachmentLink;
    }

    @NotNull
    public final Function4 getOnLongPressChannel() {
        return this.onLongPressChannel;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> getOnLongPressCommand() {
        return this.onLongPressCommand;
    }

    @NotNull
    public final Function1<LinkContentNode, Unit> getOnLongTapLink() {
        return this.onLongTapLink;
    }

    @NotNull
    public final Function1<String, Unit> getOnTapAttachmentLink() {
        return this.onTapAttachmentLink;
    }

    @NotNull
    public final Function3 getOnTapChannel() {
        return this.onTapChannel;
    }

    @NotNull
    public final Function1<CommandMentionContentNode, Unit> getOnTapCommand() {
        return this.onTapCommand;
    }

    @NotNull
    public final Function1<EmojiContentNode, Unit> getOnTapEmoji() {
        return this.onTapEmoji;
    }

    @NotNull
    public final Function1<InlineCodeContentNode, Unit> getOnTapInlineCode() {
        return this.onTapInlineCode;
    }

    @NotNull
    public final Function1<LinkContentNode, Unit> getOnTapLink() {
        return this.onTapLink;
    }

    @NotNull
    public final Function4 getOnTapMention() {
        return this.onTapMention;
    }

    @NotNull
    public final Function1<SoundmojiContentNode, Unit> getOnTapSoundmoji() {
        return this.onTapSoundmoji;
    }

    @NotNull
    public final Function0<Unit> getOnTapSpoiler() {
        return this.onTapSpoiler;
    }

    @NotNull
    public final Function1<String, Unit> getOnTapTimestamp() {
        return this.onTapTimestamp;
    }

    @NotNull
    public final Paint getPaint() {
        return this.paint;
    }

    public final boolean getShouldOmitTopAndBottomHeadingSpacerNewLine() {
        return this.shouldOmitTopAndBottomHeadingSpacerNewLine;
    }

    public final boolean getShouldShowRoleDot() {
        return this.shouldShowRoleDot;
    }

    public final boolean getShouldShowRoleOnName() {
        return this.shouldShowRoleOnName;
    }

    public final boolean getShowLinkDecorations() {
        return this.showLinkDecorations;
    }

    public final boolean getSingleLine() {
        return this.singleLine;
    }

    @NotNull
    public final SpoilerState getSpoilerState() {
        return this.spoilerState;
    }

    @NotNull
    public final DiscordThemeObject getTheme() {
        return this.theme;
    }

    public int hashCode() {
        int hashCode = ((((((((((((((((((((((((((((((((((((((((((((((((this.context.hashCode() * 31) + this.containerId.hashCode()) * 31) + this.onTapLink.hashCode()) * 31) + this.onLongTapLink.hashCode()) * 31) + this.linkStyle.hashCode()) * 31) + this.onTapChannel.hashCode()) * 31) + this.onLongPressChannel.hashCode()) * 31) + this.onTapAttachmentLink.hashCode()) * 31) + this.onLongPressAttachmentLink.hashCode()) * 31) + this.onTapMention.hashCode()) * 31) + this.onTapCommand.hashCode()) * 31) + this.onLongPressCommand.hashCode()) * 31) + this.onTapSpoiler.hashCode()) * 31) + this.onTapTimestamp.hashCode()) * 31) + this.onTapInlineCode.hashCode()) * 31) + this.onTapEmoji.hashCode()) * 31) + this.onTapSoundmoji.hashCode()) * 31) + Boolean.hashCode(this.animateEmoji)) * 31) + Boolean.hashCode(this.showLinkDecorations)) * 31) + Boolean.hashCode(this.shouldShowRoleDot)) * 31) + Boolean.hashCode(this.shouldShowRoleOnName)) * 31) + Boolean.hashCode(this.singleLine)) * 31) + this.paint.hashCode()) * 31) + this.spoilerState.hashCode()) * 31) + Integer.hashCode(this.listNestedLevel)) * 31;
        Long l10 = this.listOrderedIndex;
        int hashCode2 = (hashCode + (l10 == null ? 0 : l10.hashCode())) * 31;
        Long l11 = this.listLargestOrderedIndex;
        int hashCode3 = (((((((((hashCode2 + (l11 == null ? 0 : l11.hashCode())) * 31) + Boolean.hashCode(this.inLink)) * 31) + this.insets.hashCode()) * 31) + this.theme.hashCode()) * 31) + Float.hashCode(this.baselineHeightPx)) * 31;
        Float f10 = this.emojiBaselineHeightOverridePx;
        return ((hashCode3 + (f10 != null ? f10.hashCode() : 0)) * 31) + Boolean.hashCode(this.shouldOmitTopAndBottomHeadingSpacerNewLine);
    }

    public final boolean spoilerExists() {
        if (this.spoilerState != SpoilerState.None) {
            return true;
        }
        return false;
    }

    public final boolean spoilerIsHidden() {
        if (this.spoilerState == SpoilerState.Hidden) {
            return true;
        }
        return false;
    }

    public final boolean spoilerIsRevealed() {
        if (this.spoilerState == SpoilerState.Revealed) {
            return true;
        }
        return false;
    }

    @NotNull
    public String toString() {
        Context context = this.context;
        String str = this.containerId;
        Function1<LinkContentNode, Unit> function1 = this.onTapLink;
        Function1<LinkContentNode, Unit> function12 = this.onLongTapLink;
        Function1<LinkContentNode, LinkStyle> function13 = this.linkStyle;
        Function3 function3 = this.onTapChannel;
        Function4 function4 = this.onLongPressChannel;
        Function1<String, Unit> function14 = this.onTapAttachmentLink;
        Function2<String, String, Unit> function2 = this.onLongPressAttachmentLink;
        Function4 function42 = this.onTapMention;
        Function1<CommandMentionContentNode, Unit> function15 = this.onTapCommand;
        Function1<CommandMentionContentNode, Unit> function16 = this.onLongPressCommand;
        Function0<Unit> function0 = this.onTapSpoiler;
        Function1<String, Unit> function17 = this.onTapTimestamp;
        Function1<InlineCodeContentNode, Unit> function18 = this.onTapInlineCode;
        Function1<EmojiContentNode, Unit> function19 = this.onTapEmoji;
        Function1<SoundmojiContentNode, Unit> function110 = this.onTapSoundmoji;
        boolean z10 = this.animateEmoji;
        boolean z11 = this.showLinkDecorations;
        boolean z12 = this.shouldShowRoleDot;
        boolean z13 = this.shouldShowRoleOnName;
        boolean z14 = this.singleLine;
        Paint paint = this.paint;
        SpoilerState spoilerState = this.spoilerState;
        int i10 = this.listNestedLevel;
        Long l10 = this.listOrderedIndex;
        Long l11 = this.listLargestOrderedIndex;
        boolean z15 = this.inLink;
        Insets insets = this.insets;
        DiscordThemeObject discordThemeObject = this.theme;
        float f10 = this.baselineHeightPx;
        Float f11 = this.emojiBaselineHeightOverridePx;
        boolean z16 = this.shouldOmitTopAndBottomHeadingSpacerNewLine;
        return "RenderContext(context=" + context + ", containerId=" + str + ", onTapLink=" + function1 + ", onLongTapLink=" + function12 + ", linkStyle=" + function13 + ", onTapChannel=" + function3 + ", onLongPressChannel=" + function4 + ", onTapAttachmentLink=" + function14 + ", onLongPressAttachmentLink=" + function2 + ", onTapMention=" + function42 + ", onTapCommand=" + function15 + ", onLongPressCommand=" + function16 + ", onTapSpoiler=" + function0 + ", onTapTimestamp=" + function17 + ", onTapInlineCode=" + function18 + ", onTapEmoji=" + function19 + ", onTapSoundmoji=" + function110 + ", animateEmoji=" + z10 + ", showLinkDecorations=" + z11 + ", shouldShowRoleDot=" + z12 + ", shouldShowRoleOnName=" + z13 + ", singleLine=" + z14 + ", paint=" + paint + ", spoilerState=" + spoilerState + ", listNestedLevel=" + i10 + ", listOrderedIndex=" + l10 + ", listLargestOrderedIndex=" + l11 + ", inLink=" + z15 + ", insets=" + insets + ", theme=" + discordThemeObject + ", baselineHeightPx=" + f10 + ", emojiBaselineHeightOverridePx=" + f11 + ", shouldOmitTopAndBottomHeadingSpacerNewLine=" + z16 + ")";
    }

    @NotNull
    public final RenderContext updateInsets(@NotNull Function1<? super Insets, Insets> update) {
        Intrinsics.checkNotNullParameter(update, "update");
        return copy$default(this, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, false, false, false, false, false, null, null, 0, null, null, false, (Insets) update.invoke(this.insets), null, 0.0f, null, false, -268435457, 1, null);
    }

    public /* synthetic */ RenderContext(Context context, String str, Function1 function1, Function1 function12, Function1 function13, Function3 function3, Function4 function4, Function1 function14, Function2 function2, Function4 function42, Function1 function15, Function1 function16, Function0 function0, Function1 function17, Function1 function18, Function1 function19, Function1 function110, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, Paint paint, SpoilerState spoilerState, int i10, Long l10, Long l11, boolean z15, Insets insets, DiscordThemeObject discordThemeObject, float f10, Float f11, boolean z16, int i11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        boolean z17;
        RenderContext renderContext;
        Context context2;
        String str2;
        Function1 function111;
        Function1 function112;
        Function1 function113;
        Function3 function32;
        Function4 function43;
        Function1 function114;
        Function2 function22;
        Function4 function44;
        Function1 function115;
        Function1 function116;
        Function0 function02;
        Function1 function117;
        Function1 function118;
        Function1 function119;
        boolean z18;
        boolean z19;
        boolean z20;
        boolean z21;
        boolean z22;
        Paint paint2;
        DiscordThemeObject discordThemeObject2;
        Function1 function120 = (i11 & 65536) != 0 ? new Function1() { // from class: com.discord.chat.presentation.textutils.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit _init_$lambda$0;
                _init_$lambda$0 = RenderContext._init_$lambda$0((SoundmojiContentNode) obj);
                return _init_$lambda$0;
            }
        } : function110;
        SpoilerState spoilerState2 = (i11 & 8388608) != 0 ? SpoilerState.None : spoilerState;
        int i13 = (i11 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? 0 : i10;
        Long l12 = (i11 & 33554432) != 0 ? null : l10;
        Long l13 = (i11 & 67108864) != 0 ? null : l11;
        boolean z23 = (i11 & 134217728) != 0 ? false : z15;
        Insets insets2 = (i11 & 268435456) != 0 ? new Insets(0, 0, 0, 0, 15, null) : insets;
        float f12 = (i11 & 1073741824) != 0 ? -1.0f : f10;
        Float f13 = (i11 & Integer.MIN_VALUE) != 0 ? null : f11;
        if ((i12 & 1) != 0) {
            z17 = false;
            context2 = context;
            str2 = str;
            function111 = function1;
            function112 = function12;
            function113 = function13;
            function32 = function3;
            function43 = function4;
            function114 = function14;
            function22 = function2;
            function44 = function42;
            function115 = function15;
            function116 = function16;
            function02 = function0;
            function117 = function17;
            function118 = function18;
            function119 = function19;
            z18 = z10;
            z19 = z11;
            z20 = z12;
            z21 = z13;
            z22 = z14;
            paint2 = paint;
            discordThemeObject2 = discordThemeObject;
            renderContext = this;
        } else {
            z17 = z16;
            renderContext = this;
            context2 = context;
            str2 = str;
            function111 = function1;
            function112 = function12;
            function113 = function13;
            function32 = function3;
            function43 = function4;
            function114 = function14;
            function22 = function2;
            function44 = function42;
            function115 = function15;
            function116 = function16;
            function02 = function0;
            function117 = function17;
            function118 = function18;
            function119 = function19;
            z18 = z10;
            z19 = z11;
            z20 = z12;
            z21 = z13;
            z22 = z14;
            paint2 = paint;
            discordThemeObject2 = discordThemeObject;
        }
        new RenderContext(context2, str2, function111, function112, function113, function32, function43, function114, function22, function44, function115, function116, function02, function117, function118, function119, function120, z18, z19, z20, z21, z22, paint2, spoilerState2, i13, l12, l13, z23, insets2, discordThemeObject2, f12, f13, z17);
    }
}
