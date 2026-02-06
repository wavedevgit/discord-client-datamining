package com.discord.chat.bridge.codedlinks;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.codedlinks.InviteType;
import com.discord.notifications.renderer.NotificationRenderer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.PointerEventHelper;
import ft.m;
import jt.h;
import jt.n2;
import jt.p0;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@m
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0019\n\u0002\u0018\u0002\n\u0002\bL\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u0085\u00012\u00020\u00012\u00020\u0002:\u0004\u0084\u0001\u0085\u0001Bû\u0002\u0012\b\b\u0001\u0010\u0003\u001a\u00020\u0004\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0004\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0004\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\n\b\u0003\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\f\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\r\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010\u001f\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010 \u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\"\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010#\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010$\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b'\u0010(BÝ\u0002\b\u0010\u0012\u0006\u0010)\u001a\u00020\u0004\u0012\u0006\u0010*\u001a\u00020\u0004\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0006\u001a\u00020\u0004\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010 \u001a\u0004\u0018\u00010\u0004\u0012\b\u0010!\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\"\u001a\u0004\u0018\u00010\b\u0012\b\u0010#\u001a\u0004\u0018\u00010\b\u0012\b\u0010$\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010%\u001a\u0004\u0018\u00010\b\u0012\b\u0010&\u001a\u0004\u0018\u00010\b\u0012\b\u0010+\u001a\u0004\u0018\u00010,¢\u0006\u0004\b'\u0010-J\t\u0010U\u001a\u00020\u0004HÆ\u0003J\t\u0010V\u001a\u00020\u0004HÆ\u0003J\t\u0010W\u001a\u00020\u0004HÆ\u0003J\u000b\u0010X\u001a\u0004\u0018\u00010\bHÆ\u0003J\t\u0010Y\u001a\u00020\nHÆ\u0003J\u0010\u0010Z\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010[\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010\\\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u000b\u0010]\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010^\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010_\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010`\u001a\u0004\u0018\u00010\u0012HÆ\u0003¢\u0006\u0002\u0010?J\u000b\u0010a\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010b\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010c\u001a\u0004\u0018\u00010\u0012HÆ\u0003¢\u0006\u0002\u0010?J\u000b\u0010d\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010e\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010f\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010g\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010h\u001a\u0004\u0018\u00010\u0012HÆ\u0003¢\u0006\u0002\u0010?J\u0010\u0010i\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u000b\u0010j\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010k\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010l\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010m\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010n\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010o\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u000b\u0010p\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010q\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010r\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u000b\u0010s\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010t\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0086\u0003\u0010u\u001a\u00020\u00002\b\b\u0003\u0010\u0003\u001a\u00020\u00042\b\b\u0003\u0010\u0005\u001a\u00020\u00042\b\b\u0003\u0010\u0006\u001a\u00020\u00042\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\t\u001a\u00020\n2\n\b\u0003\u0010\u000b\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\f\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\r\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010\u001f\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010 \u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\"\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010#\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010$\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\bHÆ\u0001¢\u0006\u0002\u0010vJ\u0013\u0010w\u001a\u00020\u00122\b\u0010x\u001a\u0004\u0018\u00010yHÖ\u0003J\t\u0010z\u001a\u00020\u0004HÖ\u0001J\t\u0010{\u001a\u00020\bHÖ\u0001J)\u0010|\u001a\u00020}2\u0006\u0010~\u001a\u00020\u00002\u0007\u0010\u007f\u001a\u00030\u0080\u00012\b\u0010\u0081\u0001\u001a\u00030\u0082\u0001H\u0001¢\u0006\u0003\b\u0083\u0001R\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b.\u0010/R\u0014\u0010\u0005\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b0\u0010/R\u0014\u0010\u0006\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b1\u0010/R\u0016\u0010\u0007\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b2\u00103R\u0014\u0010\t\u001a\u00020\nX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b4\u00105R\u0018\u0010\u000b\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\b6\u00107R\u0018\u0010\f\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\b9\u00107R\u0018\u0010\r\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\b:\u00107R\u0016\u0010\u000e\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b;\u00103R\u0016\u0010\u000f\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b<\u00103R\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\b=\u00107R\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u0012X\u0096\u0004¢\u0006\n\n\u0002\u0010@\u001a\u0004\b>\u0010?R\u0016\u0010\u0013\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bA\u00103R\u0016\u0010\u0014\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bB\u00103R\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u0012X\u0096\u0004¢\u0006\n\n\u0002\u0010@\u001a\u0004\bC\u0010?R\u0016\u0010\u0016\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bD\u00103R\u0016\u0010\u0017\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bE\u00103R\u0018\u0010\u0018\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bF\u00107R\u0018\u0010\u0019\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bG\u00107R\u0018\u0010\u001a\u001a\u0004\u0018\u00010\u0012X\u0096\u0004¢\u0006\n\n\u0002\u0010@\u001a\u0004\bH\u0010?R\u0018\u0010\u001b\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bI\u00107R\u0016\u0010\u001c\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bJ\u00103R\u0016\u0010\u001d\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bK\u00103R\u0016\u0010\u001e\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bL\u00103R\u0018\u0010\u001f\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bM\u00107R\u0018\u0010 \u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bN\u00107R\u0018\u0010!\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bO\u00107R\u0016\u0010\"\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bP\u00103R\u0016\u0010#\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bQ\u00103R\u0018\u0010$\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bR\u00107R\u0016\u0010%\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bS\u00103R\u0016\u0010&\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bT\u00103¨\u0006\u0086\u0001"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/GuildInviteEmbedImpl;", "Lcom/discord/chat/bridge/codedlinks/CodedLinkEmbed;", "Lcom/discord/chat/bridge/codedlinks/GuildInviteEmbed;", ViewProps.BACKGROUND_COLOR, "", ViewProps.BORDER_COLOR, "headerColor", "headerText", "", "type", "Lcom/discord/chat/bridge/codedlinks/InviteType;", "acceptLabelBackgroundColor", "acceptLabelBorderColor", "acceptLabelColor", "acceptLabelText", "bodyText", "bodyTextColor", "canBeAccepted", "", "channelIcon", NotificationRenderer.CHANNEL_NAME, "embedCanBeTapped", "memberText", "onlineText", "resolvingGradientEnd", "resolvingGradientStart", "splashHasRadialGradient", "splashOpacity", "splashUrl", "inviteSplash", "subtitle", "subtitleColor", "thumbnailBackgroundColor", "thumbnailCornerRadius", "thumbnailText", "thumbnailUrl", "titleColor", "titleText", "badgeIconUrl", "<init>", "(IIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "seen1", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIIIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBackgroundColor", "()I", "getBorderColor", "getHeaderColor", "getHeaderText", "()Ljava/lang/String;", "getType", "()Lcom/discord/chat/bridge/codedlinks/InviteType;", "getAcceptLabelBackgroundColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getAcceptLabelBorderColor", "getAcceptLabelColor", "getAcceptLabelText", "getBodyText", "getBodyTextColor", "getCanBeAccepted", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getChannelIcon", "getChannelName", "getEmbedCanBeTapped", "getMemberText", "getOnlineText", "getResolvingGradientEnd", "getResolvingGradientStart", "getSplashHasRadialGradient", "getSplashOpacity", "getSplashUrl", "getInviteSplash", "getSubtitle", "getSubtitleColor", "getThumbnailBackgroundColor", "getThumbnailCornerRadius", "getThumbnailText", "getThumbnailUrl", "getTitleColor", "getTitleText", "getBadgeIconUrl", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "component23", "component24", "component25", "component26", "component27", "component28", "component29", "component30", "component31", "component32", "copy", "(IIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/chat/bridge/codedlinks/GuildInviteEmbedImpl;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildInviteEmbedImpl extends CodedLinkEmbed implements GuildInviteEmbed {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Integer acceptLabelBackgroundColor;
    private final Integer acceptLabelBorderColor;
    private final Integer acceptLabelColor;
    private final String acceptLabelText;
    private final int backgroundColor;
    private final String badgeIconUrl;
    private final String bodyText;
    private final Integer bodyTextColor;
    private final int borderColor;
    private final Boolean canBeAccepted;
    private final String channelIcon;
    private final String channelName;
    private final Boolean embedCanBeTapped;
    private final int headerColor;
    private final String headerText;
    private final String inviteSplash;
    private final String memberText;
    private final String onlineText;
    private final Integer resolvingGradientEnd;
    private final Integer resolvingGradientStart;
    private final Boolean splashHasRadialGradient;
    private final Integer splashOpacity;
    private final String splashUrl;
    private final String subtitle;
    private final Integer subtitleColor;
    private final Integer thumbnailBackgroundColor;
    private final Integer thumbnailCornerRadius;
    private final String thumbnailText;
    private final String thumbnailUrl;
    private final Integer titleColor;
    private final String titleText;
    @NotNull
    private final InviteType type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/GuildInviteEmbedImpl$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/codedlinks/GuildInviteEmbedImpl;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return GuildInviteEmbedImpl$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ GuildInviteEmbedImpl(int i10, int i11, int i12, int i13, int i14, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, String str4, String str5, Boolean bool2, String str6, String str7, Integer num5, Integer num6, Boolean bool3, Integer num7, String str8, String str9, String str10, Integer num8, Integer num9, Integer num10, String str11, String str12, Integer num11, String str13, String str14, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (31 != (i10 & 31)) {
            v1.a(new int[]{i10, i11}, new int[]{31, 0}, GuildInviteEmbedImpl$$serializer.INSTANCE.getDescriptor());
        }
        this.backgroundColor = i12;
        this.borderColor = i13;
        this.headerColor = i14;
        this.headerText = str;
        this.type = inviteType;
        if ((i10 & 32) == 0) {
            this.acceptLabelBackgroundColor = null;
        } else {
            this.acceptLabelBackgroundColor = num;
        }
        if ((i10 & 64) == 0) {
            this.acceptLabelBorderColor = null;
        } else {
            this.acceptLabelBorderColor = num2;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.acceptLabelColor = null;
        } else {
            this.acceptLabelColor = num3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.acceptLabelText = null;
        } else {
            this.acceptLabelText = str2;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.bodyText = null;
        } else {
            this.bodyText = str3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.bodyTextColor = null;
        } else {
            this.bodyTextColor = num4;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.canBeAccepted = null;
        } else {
            this.canBeAccepted = bool;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.channelIcon = null;
        } else {
            this.channelIcon = str4;
        }
        if ((i10 & 8192) == 0) {
            this.channelName = null;
        } else {
            this.channelName = str5;
        }
        if ((i10 & 16384) == 0) {
            this.embedCanBeTapped = null;
        } else {
            this.embedCanBeTapped = bool2;
        }
        if ((32768 & i10) == 0) {
            this.memberText = null;
        } else {
            this.memberText = str6;
        }
        if ((65536 & i10) == 0) {
            this.onlineText = null;
        } else {
            this.onlineText = str7;
        }
        if ((131072 & i10) == 0) {
            this.resolvingGradientEnd = null;
        } else {
            this.resolvingGradientEnd = num5;
        }
        if ((262144 & i10) == 0) {
            this.resolvingGradientStart = null;
        } else {
            this.resolvingGradientStart = num6;
        }
        if ((524288 & i10) == 0) {
            this.splashHasRadialGradient = null;
        } else {
            this.splashHasRadialGradient = bool3;
        }
        if ((1048576 & i10) == 0) {
            this.splashOpacity = null;
        } else {
            this.splashOpacity = num7;
        }
        if ((2097152 & i10) == 0) {
            this.splashUrl = null;
        } else {
            this.splashUrl = str8;
        }
        if ((4194304 & i10) == 0) {
            this.inviteSplash = null;
        } else {
            this.inviteSplash = str9;
        }
        if ((8388608 & i10) == 0) {
            this.subtitle = null;
        } else {
            this.subtitle = str10;
        }
        if ((16777216 & i10) == 0) {
            this.subtitleColor = null;
        } else {
            this.subtitleColor = num8;
        }
        if ((33554432 & i10) == 0) {
            this.thumbnailBackgroundColor = null;
        } else {
            this.thumbnailBackgroundColor = num9;
        }
        if ((67108864 & i10) == 0) {
            this.thumbnailCornerRadius = null;
        } else {
            this.thumbnailCornerRadius = num10;
        }
        if ((134217728 & i10) == 0) {
            this.thumbnailText = null;
        } else {
            this.thumbnailText = str11;
        }
        if ((268435456 & i10) == 0) {
            this.thumbnailUrl = null;
        } else {
            this.thumbnailUrl = str12;
        }
        if ((536870912 & i10) == 0) {
            this.titleColor = null;
        } else {
            this.titleColor = num11;
        }
        if ((1073741824 & i10) == 0) {
            this.titleText = null;
        } else {
            this.titleText = str13;
        }
        if ((i10 & Integer.MIN_VALUE) == 0) {
            this.badgeIconUrl = null;
        } else {
            this.badgeIconUrl = str14;
        }
    }

    public static /* synthetic */ GuildInviteEmbedImpl copy$default(GuildInviteEmbedImpl guildInviteEmbedImpl, int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, String str4, String str5, Boolean bool2, String str6, String str7, Integer num5, Integer num6, Boolean bool3, Integer num7, String str8, String str9, String str10, Integer num8, Integer num9, Integer num10, String str11, String str12, Integer num11, String str13, String str14, int i13, Object obj) {
        String str15;
        String str16;
        String str17;
        String str18;
        Integer num12;
        Integer num13;
        Boolean bool4;
        Integer num14;
        String str19;
        String str20;
        String str21;
        Integer num15;
        Integer num16;
        Integer num17;
        String str22;
        String str23;
        Integer num18;
        Boolean bool5;
        int i14;
        int i15;
        String str24;
        InviteType inviteType2;
        Integer num19;
        Integer num20;
        Integer num21;
        String str25;
        String str26;
        Integer num22;
        Boolean bool6;
        String str27;
        String str28;
        int i16 = (i13 & 1) != 0 ? guildInviteEmbedImpl.backgroundColor : i10;
        int i17 = (i13 & 2) != 0 ? guildInviteEmbedImpl.borderColor : i11;
        int i18 = (i13 & 4) != 0 ? guildInviteEmbedImpl.headerColor : i12;
        String str29 = (i13 & 8) != 0 ? guildInviteEmbedImpl.headerText : str;
        InviteType inviteType3 = (i13 & 16) != 0 ? guildInviteEmbedImpl.type : inviteType;
        Integer num23 = (i13 & 32) != 0 ? guildInviteEmbedImpl.acceptLabelBackgroundColor : num;
        Integer num24 = (i13 & 64) != 0 ? guildInviteEmbedImpl.acceptLabelBorderColor : num2;
        Integer num25 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? guildInviteEmbedImpl.acceptLabelColor : num3;
        String str30 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? guildInviteEmbedImpl.acceptLabelText : str2;
        String str31 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? guildInviteEmbedImpl.bodyText : str3;
        Integer num26 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? guildInviteEmbedImpl.bodyTextColor : num4;
        Boolean bool7 = (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? guildInviteEmbedImpl.canBeAccepted : bool;
        String str32 = (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? guildInviteEmbedImpl.channelIcon : str4;
        String str33 = (i13 & 8192) != 0 ? guildInviteEmbedImpl.channelName : str5;
        int i19 = i16;
        Boolean bool8 = (i13 & 16384) != 0 ? guildInviteEmbedImpl.embedCanBeTapped : bool2;
        String str34 = (i13 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? guildInviteEmbedImpl.memberText : str6;
        String str35 = (i13 & 65536) != 0 ? guildInviteEmbedImpl.onlineText : str7;
        Integer num27 = (i13 & 131072) != 0 ? guildInviteEmbedImpl.resolvingGradientEnd : num5;
        Integer num28 = (i13 & 262144) != 0 ? guildInviteEmbedImpl.resolvingGradientStart : num6;
        Boolean bool9 = (i13 & 524288) != 0 ? guildInviteEmbedImpl.splashHasRadialGradient : bool3;
        Integer num29 = (i13 & 1048576) != 0 ? guildInviteEmbedImpl.splashOpacity : num7;
        String str36 = (i13 & 2097152) != 0 ? guildInviteEmbedImpl.splashUrl : str8;
        String str37 = (i13 & 4194304) != 0 ? guildInviteEmbedImpl.inviteSplash : str9;
        String str38 = (i13 & 8388608) != 0 ? guildInviteEmbedImpl.subtitle : str10;
        Integer num30 = (i13 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? guildInviteEmbedImpl.subtitleColor : num8;
        Integer num31 = (i13 & 33554432) != 0 ? guildInviteEmbedImpl.thumbnailBackgroundColor : num9;
        Integer num32 = (i13 & 67108864) != 0 ? guildInviteEmbedImpl.thumbnailCornerRadius : num10;
        String str39 = (i13 & 134217728) != 0 ? guildInviteEmbedImpl.thumbnailText : str11;
        String str40 = (i13 & 268435456) != 0 ? guildInviteEmbedImpl.thumbnailUrl : str12;
        Integer num33 = (i13 & 536870912) != 0 ? guildInviteEmbedImpl.titleColor : num11;
        String str41 = (i13 & 1073741824) != 0 ? guildInviteEmbedImpl.titleText : str13;
        if ((i13 & Integer.MIN_VALUE) != 0) {
            str16 = str41;
            str15 = guildInviteEmbedImpl.badgeIconUrl;
            str18 = str35;
            num12 = num27;
            num13 = num28;
            bool4 = bool9;
            num14 = num29;
            str19 = str36;
            str20 = str37;
            str21 = str38;
            num15 = num30;
            num16 = num31;
            num17 = num32;
            str22 = str39;
            str23 = str40;
            num18 = num33;
            bool5 = bool8;
            i14 = i17;
            i15 = i18;
            str24 = str29;
            inviteType2 = inviteType3;
            num19 = num23;
            num20 = num24;
            num21 = num25;
            str25 = str30;
            str26 = str31;
            num22 = num26;
            bool6 = bool7;
            str27 = str32;
            str28 = str33;
            str17 = str34;
        } else {
            str15 = str14;
            str16 = str41;
            str17 = str34;
            str18 = str35;
            num12 = num27;
            num13 = num28;
            bool4 = bool9;
            num14 = num29;
            str19 = str36;
            str20 = str37;
            str21 = str38;
            num15 = num30;
            num16 = num31;
            num17 = num32;
            str22 = str39;
            str23 = str40;
            num18 = num33;
            bool5 = bool8;
            i14 = i17;
            i15 = i18;
            str24 = str29;
            inviteType2 = inviteType3;
            num19 = num23;
            num20 = num24;
            num21 = num25;
            str25 = str30;
            str26 = str31;
            num22 = num26;
            bool6 = bool7;
            str27 = str32;
            str28 = str33;
        }
        return guildInviteEmbedImpl.copy(i19, i14, i15, str24, inviteType2, num19, num20, num21, str25, str26, num22, bool6, str27, str28, bool5, str17, str18, num12, num13, bool4, num14, str19, str20, str21, num15, num16, num17, str22, str23, num18, str16, str15);
    }

    public static final /* synthetic */ void write$Self$chat_release(GuildInviteEmbedImpl guildInviteEmbedImpl, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, guildInviteEmbedImpl.getBackgroundColor());
        compositeEncoder.x(serialDescriptor, 1, guildInviteEmbedImpl.getBorderColor());
        compositeEncoder.x(serialDescriptor, 2, guildInviteEmbedImpl.getHeaderColor());
        n2 n2Var = n2.f31041a;
        compositeEncoder.l(serialDescriptor, 3, n2Var, guildInviteEmbedImpl.getHeaderText());
        compositeEncoder.s(serialDescriptor, 4, InviteType.Serializer.INSTANCE, guildInviteEmbedImpl.getType());
        if (compositeEncoder.A(serialDescriptor, 5) || guildInviteEmbedImpl.getAcceptLabelBackgroundColor() != null) {
            compositeEncoder.l(serialDescriptor, 5, p0.f31057a, guildInviteEmbedImpl.getAcceptLabelBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 6) || guildInviteEmbedImpl.getAcceptLabelBorderColor() != null) {
            compositeEncoder.l(serialDescriptor, 6, p0.f31057a, guildInviteEmbedImpl.getAcceptLabelBorderColor());
        }
        if (compositeEncoder.A(serialDescriptor, 7) || guildInviteEmbedImpl.getAcceptLabelColor() != null) {
            compositeEncoder.l(serialDescriptor, 7, p0.f31057a, guildInviteEmbedImpl.getAcceptLabelColor());
        }
        if (compositeEncoder.A(serialDescriptor, 8) || guildInviteEmbedImpl.getAcceptLabelText() != null) {
            compositeEncoder.l(serialDescriptor, 8, n2Var, guildInviteEmbedImpl.getAcceptLabelText());
        }
        if (compositeEncoder.A(serialDescriptor, 9) || guildInviteEmbedImpl.getBodyText() != null) {
            compositeEncoder.l(serialDescriptor, 9, n2Var, guildInviteEmbedImpl.getBodyText());
        }
        if (compositeEncoder.A(serialDescriptor, 10) || guildInviteEmbedImpl.getBodyTextColor() != null) {
            compositeEncoder.l(serialDescriptor, 10, p0.f31057a, guildInviteEmbedImpl.getBodyTextColor());
        }
        if (compositeEncoder.A(serialDescriptor, 11) || guildInviteEmbedImpl.getCanBeAccepted() != null) {
            compositeEncoder.l(serialDescriptor, 11, h.f31005a, guildInviteEmbedImpl.getCanBeAccepted());
        }
        if (compositeEncoder.A(serialDescriptor, 12) || guildInviteEmbedImpl.getChannelIcon() != null) {
            compositeEncoder.l(serialDescriptor, 12, n2Var, guildInviteEmbedImpl.getChannelIcon());
        }
        if (compositeEncoder.A(serialDescriptor, 13) || guildInviteEmbedImpl.getChannelName() != null) {
            compositeEncoder.l(serialDescriptor, 13, n2Var, guildInviteEmbedImpl.getChannelName());
        }
        if (compositeEncoder.A(serialDescriptor, 14) || guildInviteEmbedImpl.getEmbedCanBeTapped() != null) {
            compositeEncoder.l(serialDescriptor, 14, h.f31005a, guildInviteEmbedImpl.getEmbedCanBeTapped());
        }
        if (compositeEncoder.A(serialDescriptor, 15) || guildInviteEmbedImpl.getMemberText() != null) {
            compositeEncoder.l(serialDescriptor, 15, n2Var, guildInviteEmbedImpl.getMemberText());
        }
        if (compositeEncoder.A(serialDescriptor, 16) || guildInviteEmbedImpl.getOnlineText() != null) {
            compositeEncoder.l(serialDescriptor, 16, n2Var, guildInviteEmbedImpl.getOnlineText());
        }
        if (compositeEncoder.A(serialDescriptor, 17) || guildInviteEmbedImpl.getResolvingGradientEnd() != null) {
            compositeEncoder.l(serialDescriptor, 17, p0.f31057a, guildInviteEmbedImpl.getResolvingGradientEnd());
        }
        if (compositeEncoder.A(serialDescriptor, 18) || guildInviteEmbedImpl.getResolvingGradientStart() != null) {
            compositeEncoder.l(serialDescriptor, 18, p0.f31057a, guildInviteEmbedImpl.getResolvingGradientStart());
        }
        if (compositeEncoder.A(serialDescriptor, 19) || guildInviteEmbedImpl.getSplashHasRadialGradient() != null) {
            compositeEncoder.l(serialDescriptor, 19, h.f31005a, guildInviteEmbedImpl.getSplashHasRadialGradient());
        }
        if (compositeEncoder.A(serialDescriptor, 20) || guildInviteEmbedImpl.getSplashOpacity() != null) {
            compositeEncoder.l(serialDescriptor, 20, p0.f31057a, guildInviteEmbedImpl.getSplashOpacity());
        }
        if (compositeEncoder.A(serialDescriptor, 21) || guildInviteEmbedImpl.getSplashUrl() != null) {
            compositeEncoder.l(serialDescriptor, 21, n2Var, guildInviteEmbedImpl.getSplashUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 22) || guildInviteEmbedImpl.getInviteSplash() != null) {
            compositeEncoder.l(serialDescriptor, 22, n2Var, guildInviteEmbedImpl.getInviteSplash());
        }
        if (compositeEncoder.A(serialDescriptor, 23) || guildInviteEmbedImpl.getSubtitle() != null) {
            compositeEncoder.l(serialDescriptor, 23, n2Var, guildInviteEmbedImpl.getSubtitle());
        }
        if (compositeEncoder.A(serialDescriptor, 24) || guildInviteEmbedImpl.getSubtitleColor() != null) {
            compositeEncoder.l(serialDescriptor, 24, p0.f31057a, guildInviteEmbedImpl.getSubtitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 25) || guildInviteEmbedImpl.getThumbnailBackgroundColor() != null) {
            compositeEncoder.l(serialDescriptor, 25, p0.f31057a, guildInviteEmbedImpl.getThumbnailBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 26) || guildInviteEmbedImpl.getThumbnailCornerRadius() != null) {
            compositeEncoder.l(serialDescriptor, 26, p0.f31057a, guildInviteEmbedImpl.getThumbnailCornerRadius());
        }
        if (compositeEncoder.A(serialDescriptor, 27) || guildInviteEmbedImpl.getThumbnailText() != null) {
            compositeEncoder.l(serialDescriptor, 27, n2Var, guildInviteEmbedImpl.getThumbnailText());
        }
        if (compositeEncoder.A(serialDescriptor, 28) || guildInviteEmbedImpl.getThumbnailUrl() != null) {
            compositeEncoder.l(serialDescriptor, 28, n2Var, guildInviteEmbedImpl.getThumbnailUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 29) || guildInviteEmbedImpl.getTitleColor() != null) {
            compositeEncoder.l(serialDescriptor, 29, p0.f31057a, guildInviteEmbedImpl.getTitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 30) || guildInviteEmbedImpl.getTitleText() != null) {
            compositeEncoder.l(serialDescriptor, 30, n2Var, guildInviteEmbedImpl.getTitleText());
        }
        if (compositeEncoder.A(serialDescriptor, 31) || guildInviteEmbedImpl.getBadgeIconUrl() != null) {
            compositeEncoder.l(serialDescriptor, 31, n2Var, guildInviteEmbedImpl.getBadgeIconUrl());
        }
    }

    public final int component1() {
        return this.backgroundColor;
    }

    public final String component10() {
        return this.bodyText;
    }

    public final Integer component11() {
        return this.bodyTextColor;
    }

    public final Boolean component12() {
        return this.canBeAccepted;
    }

    public final String component13() {
        return this.channelIcon;
    }

    public final String component14() {
        return this.channelName;
    }

    public final Boolean component15() {
        return this.embedCanBeTapped;
    }

    public final String component16() {
        return this.memberText;
    }

    public final String component17() {
        return this.onlineText;
    }

    public final Integer component18() {
        return this.resolvingGradientEnd;
    }

    public final Integer component19() {
        return this.resolvingGradientStart;
    }

    public final int component2() {
        return this.borderColor;
    }

    public final Boolean component20() {
        return this.splashHasRadialGradient;
    }

    public final Integer component21() {
        return this.splashOpacity;
    }

    public final String component22() {
        return this.splashUrl;
    }

    public final String component23() {
        return this.inviteSplash;
    }

    public final String component24() {
        return this.subtitle;
    }

    public final Integer component25() {
        return this.subtitleColor;
    }

    public final Integer component26() {
        return this.thumbnailBackgroundColor;
    }

    public final Integer component27() {
        return this.thumbnailCornerRadius;
    }

    public final String component28() {
        return this.thumbnailText;
    }

    public final String component29() {
        return this.thumbnailUrl;
    }

    public final int component3() {
        return this.headerColor;
    }

    public final Integer component30() {
        return this.titleColor;
    }

    public final String component31() {
        return this.titleText;
    }

    public final String component32() {
        return this.badgeIconUrl;
    }

    public final String component4() {
        return this.headerText;
    }

    @NotNull
    public final InviteType component5() {
        return this.type;
    }

    public final Integer component6() {
        return this.acceptLabelBackgroundColor;
    }

    public final Integer component7() {
        return this.acceptLabelBorderColor;
    }

    public final Integer component8() {
        return this.acceptLabelColor;
    }

    public final String component9() {
        return this.acceptLabelText;
    }

    @NotNull
    public final GuildInviteEmbedImpl copy(int i10, int i11, int i12, String str, @NotNull InviteType type, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, String str4, String str5, Boolean bool2, String str6, String str7, Integer num5, Integer num6, Boolean bool3, Integer num7, String str8, String str9, String str10, Integer num8, Integer num9, Integer num10, String str11, String str12, Integer num11, String str13, String str14) {
        Intrinsics.checkNotNullParameter(type, "type");
        return new GuildInviteEmbedImpl(i10, i11, i12, str, type, num, num2, num3, str2, str3, num4, bool, str4, str5, bool2, str6, str7, num5, num6, bool3, num7, str8, str9, str10, num8, num9, num10, str11, str12, num11, str13, str14);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GuildInviteEmbedImpl) {
            GuildInviteEmbedImpl guildInviteEmbedImpl = (GuildInviteEmbedImpl) obj;
            return this.backgroundColor == guildInviteEmbedImpl.backgroundColor && this.borderColor == guildInviteEmbedImpl.borderColor && this.headerColor == guildInviteEmbedImpl.headerColor && Intrinsics.areEqual(this.headerText, guildInviteEmbedImpl.headerText) && this.type == guildInviteEmbedImpl.type && Intrinsics.areEqual(this.acceptLabelBackgroundColor, guildInviteEmbedImpl.acceptLabelBackgroundColor) && Intrinsics.areEqual(this.acceptLabelBorderColor, guildInviteEmbedImpl.acceptLabelBorderColor) && Intrinsics.areEqual(this.acceptLabelColor, guildInviteEmbedImpl.acceptLabelColor) && Intrinsics.areEqual(this.acceptLabelText, guildInviteEmbedImpl.acceptLabelText) && Intrinsics.areEqual(this.bodyText, guildInviteEmbedImpl.bodyText) && Intrinsics.areEqual(this.bodyTextColor, guildInviteEmbedImpl.bodyTextColor) && Intrinsics.areEqual(this.canBeAccepted, guildInviteEmbedImpl.canBeAccepted) && Intrinsics.areEqual(this.channelIcon, guildInviteEmbedImpl.channelIcon) && Intrinsics.areEqual(this.channelName, guildInviteEmbedImpl.channelName) && Intrinsics.areEqual(this.embedCanBeTapped, guildInviteEmbedImpl.embedCanBeTapped) && Intrinsics.areEqual(this.memberText, guildInviteEmbedImpl.memberText) && Intrinsics.areEqual(this.onlineText, guildInviteEmbedImpl.onlineText) && Intrinsics.areEqual(this.resolvingGradientEnd, guildInviteEmbedImpl.resolvingGradientEnd) && Intrinsics.areEqual(this.resolvingGradientStart, guildInviteEmbedImpl.resolvingGradientStart) && Intrinsics.areEqual(this.splashHasRadialGradient, guildInviteEmbedImpl.splashHasRadialGradient) && Intrinsics.areEqual(this.splashOpacity, guildInviteEmbedImpl.splashOpacity) && Intrinsics.areEqual(this.splashUrl, guildInviteEmbedImpl.splashUrl) && Intrinsics.areEqual(this.inviteSplash, guildInviteEmbedImpl.inviteSplash) && Intrinsics.areEqual(this.subtitle, guildInviteEmbedImpl.subtitle) && Intrinsics.areEqual(this.subtitleColor, guildInviteEmbedImpl.subtitleColor) && Intrinsics.areEqual(this.thumbnailBackgroundColor, guildInviteEmbedImpl.thumbnailBackgroundColor) && Intrinsics.areEqual(this.thumbnailCornerRadius, guildInviteEmbedImpl.thumbnailCornerRadius) && Intrinsics.areEqual(this.thumbnailText, guildInviteEmbedImpl.thumbnailText) && Intrinsics.areEqual(this.thumbnailUrl, guildInviteEmbedImpl.thumbnailUrl) && Intrinsics.areEqual(this.titleColor, guildInviteEmbedImpl.titleColor) && Intrinsics.areEqual(this.titleText, guildInviteEmbedImpl.titleText) && Intrinsics.areEqual(this.badgeIconUrl, guildInviteEmbedImpl.badgeIconUrl);
        }
        return false;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getAcceptLabelBackgroundColor() {
        return this.acceptLabelBackgroundColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getAcceptLabelBorderColor() {
        return this.acceptLabelBorderColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getAcceptLabelColor() {
        return this.acceptLabelColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getAcceptLabelText() {
        return this.acceptLabelText;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public int getBackgroundColor() {
        return this.backgroundColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildInviteEmbed
    public String getBadgeIconUrl() {
        return this.badgeIconUrl;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getBodyText() {
        return this.bodyText;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getBodyTextColor() {
        return this.bodyTextColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public int getBorderColor() {
        return this.borderColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Boolean getCanBeAccepted() {
        return this.canBeAccepted;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildInviteEmbed
    public String getChannelIcon() {
        return this.channelIcon;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildInviteEmbed
    public String getChannelName() {
        return this.channelName;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Boolean getEmbedCanBeTapped() {
        return this.embedCanBeTapped;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public int getHeaderColor() {
        return this.headerColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getHeaderText() {
        return this.headerText;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getInviteSplash() {
        return this.inviteSplash;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildInviteEmbed
    public String getMemberText() {
        return this.memberText;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildInviteEmbed
    public String getOnlineText() {
        return this.onlineText;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getResolvingGradientEnd() {
        return this.resolvingGradientEnd;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getResolvingGradientStart() {
        return this.resolvingGradientStart;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Boolean getSplashHasRadialGradient() {
        return this.splashHasRadialGradient;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getSplashOpacity() {
        return this.splashOpacity;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getSplashUrl() {
        return this.splashUrl;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getSubtitle() {
        return this.subtitle;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getSubtitleColor() {
        return this.subtitleColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getThumbnailBackgroundColor() {
        return this.thumbnailBackgroundColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getThumbnailCornerRadius() {
        return this.thumbnailCornerRadius;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getThumbnailText() {
        return this.thumbnailText;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getThumbnailUrl() {
        return this.thumbnailUrl;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getTitleColor() {
        return this.titleColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getTitleText() {
        return this.titleText;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    @NotNull
    public InviteType getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((((Integer.hashCode(this.backgroundColor) * 31) + Integer.hashCode(this.borderColor)) * 31) + Integer.hashCode(this.headerColor)) * 31;
        String str = this.headerText;
        int hashCode2 = (((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.type.hashCode()) * 31;
        Integer num = this.acceptLabelBackgroundColor;
        int hashCode3 = (hashCode2 + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.acceptLabelBorderColor;
        int hashCode4 = (hashCode3 + (num2 == null ? 0 : num2.hashCode())) * 31;
        Integer num3 = this.acceptLabelColor;
        int hashCode5 = (hashCode4 + (num3 == null ? 0 : num3.hashCode())) * 31;
        String str2 = this.acceptLabelText;
        int hashCode6 = (hashCode5 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.bodyText;
        int hashCode7 = (hashCode6 + (str3 == null ? 0 : str3.hashCode())) * 31;
        Integer num4 = this.bodyTextColor;
        int hashCode8 = (hashCode7 + (num4 == null ? 0 : num4.hashCode())) * 31;
        Boolean bool = this.canBeAccepted;
        int hashCode9 = (hashCode8 + (bool == null ? 0 : bool.hashCode())) * 31;
        String str4 = this.channelIcon;
        int hashCode10 = (hashCode9 + (str4 == null ? 0 : str4.hashCode())) * 31;
        String str5 = this.channelName;
        int hashCode11 = (hashCode10 + (str5 == null ? 0 : str5.hashCode())) * 31;
        Boolean bool2 = this.embedCanBeTapped;
        int hashCode12 = (hashCode11 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        String str6 = this.memberText;
        int hashCode13 = (hashCode12 + (str6 == null ? 0 : str6.hashCode())) * 31;
        String str7 = this.onlineText;
        int hashCode14 = (hashCode13 + (str7 == null ? 0 : str7.hashCode())) * 31;
        Integer num5 = this.resolvingGradientEnd;
        int hashCode15 = (hashCode14 + (num5 == null ? 0 : num5.hashCode())) * 31;
        Integer num6 = this.resolvingGradientStart;
        int hashCode16 = (hashCode15 + (num6 == null ? 0 : num6.hashCode())) * 31;
        Boolean bool3 = this.splashHasRadialGradient;
        int hashCode17 = (hashCode16 + (bool3 == null ? 0 : bool3.hashCode())) * 31;
        Integer num7 = this.splashOpacity;
        int hashCode18 = (hashCode17 + (num7 == null ? 0 : num7.hashCode())) * 31;
        String str8 = this.splashUrl;
        int hashCode19 = (hashCode18 + (str8 == null ? 0 : str8.hashCode())) * 31;
        String str9 = this.inviteSplash;
        int hashCode20 = (hashCode19 + (str9 == null ? 0 : str9.hashCode())) * 31;
        String str10 = this.subtitle;
        int hashCode21 = (hashCode20 + (str10 == null ? 0 : str10.hashCode())) * 31;
        Integer num8 = this.subtitleColor;
        int hashCode22 = (hashCode21 + (num8 == null ? 0 : num8.hashCode())) * 31;
        Integer num9 = this.thumbnailBackgroundColor;
        int hashCode23 = (hashCode22 + (num9 == null ? 0 : num9.hashCode())) * 31;
        Integer num10 = this.thumbnailCornerRadius;
        int hashCode24 = (hashCode23 + (num10 == null ? 0 : num10.hashCode())) * 31;
        String str11 = this.thumbnailText;
        int hashCode25 = (hashCode24 + (str11 == null ? 0 : str11.hashCode())) * 31;
        String str12 = this.thumbnailUrl;
        int hashCode26 = (hashCode25 + (str12 == null ? 0 : str12.hashCode())) * 31;
        Integer num11 = this.titleColor;
        int hashCode27 = (hashCode26 + (num11 == null ? 0 : num11.hashCode())) * 31;
        String str13 = this.titleText;
        int hashCode28 = (hashCode27 + (str13 == null ? 0 : str13.hashCode())) * 31;
        String str14 = this.badgeIconUrl;
        return hashCode28 + (str14 != null ? str14.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        int i10 = this.backgroundColor;
        int i11 = this.borderColor;
        int i12 = this.headerColor;
        String str = this.headerText;
        InviteType inviteType = this.type;
        Integer num = this.acceptLabelBackgroundColor;
        Integer num2 = this.acceptLabelBorderColor;
        Integer num3 = this.acceptLabelColor;
        String str2 = this.acceptLabelText;
        String str3 = this.bodyText;
        Integer num4 = this.bodyTextColor;
        Boolean bool = this.canBeAccepted;
        String str4 = this.channelIcon;
        String str5 = this.channelName;
        Boolean bool2 = this.embedCanBeTapped;
        String str6 = this.memberText;
        String str7 = this.onlineText;
        Integer num5 = this.resolvingGradientEnd;
        Integer num6 = this.resolvingGradientStart;
        Boolean bool3 = this.splashHasRadialGradient;
        Integer num7 = this.splashOpacity;
        String str8 = this.splashUrl;
        String str9 = this.inviteSplash;
        String str10 = this.subtitle;
        Integer num8 = this.subtitleColor;
        Integer num9 = this.thumbnailBackgroundColor;
        Integer num10 = this.thumbnailCornerRadius;
        String str11 = this.thumbnailText;
        String str12 = this.thumbnailUrl;
        Integer num11 = this.titleColor;
        String str13 = this.titleText;
        String str14 = this.badgeIconUrl;
        return "GuildInviteEmbedImpl(backgroundColor=" + i10 + ", borderColor=" + i11 + ", headerColor=" + i12 + ", headerText=" + str + ", type=" + inviteType + ", acceptLabelBackgroundColor=" + num + ", acceptLabelBorderColor=" + num2 + ", acceptLabelColor=" + num3 + ", acceptLabelText=" + str2 + ", bodyText=" + str3 + ", bodyTextColor=" + num4 + ", canBeAccepted=" + bool + ", channelIcon=" + str4 + ", channelName=" + str5 + ", embedCanBeTapped=" + bool2 + ", memberText=" + str6 + ", onlineText=" + str7 + ", resolvingGradientEnd=" + num5 + ", resolvingGradientStart=" + num6 + ", splashHasRadialGradient=" + bool3 + ", splashOpacity=" + num7 + ", splashUrl=" + str8 + ", inviteSplash=" + str9 + ", subtitle=" + str10 + ", subtitleColor=" + num8 + ", thumbnailBackgroundColor=" + num9 + ", thumbnailCornerRadius=" + num10 + ", thumbnailText=" + str11 + ", thumbnailUrl=" + str12 + ", titleColor=" + num11 + ", titleText=" + str13 + ", badgeIconUrl=" + str14 + ")";
    }

    public /* synthetic */ GuildInviteEmbedImpl(int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, String str4, String str5, Boolean bool2, String str6, String str7, Integer num5, Integer num6, Boolean bool3, Integer num7, String str8, String str9, String str10, Integer num8, Integer num9, Integer num10, String str11, String str12, Integer num11, String str13, String str14, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, str, inviteType, (i13 & 32) != 0 ? null : num, (i13 & 64) != 0 ? null : num2, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : num3, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str3, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : num4, (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : bool, (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : str4, (i13 & 8192) != 0 ? null : str5, (i13 & 16384) != 0 ? null : bool2, (32768 & i13) != 0 ? null : str6, (65536 & i13) != 0 ? null : str7, (131072 & i13) != 0 ? null : num5, (262144 & i13) != 0 ? null : num6, (524288 & i13) != 0 ? null : bool3, (1048576 & i13) != 0 ? null : num7, (2097152 & i13) != 0 ? null : str8, (4194304 & i13) != 0 ? null : str9, (8388608 & i13) != 0 ? null : str10, (16777216 & i13) != 0 ? null : num8, (33554432 & i13) != 0 ? null : num9, (67108864 & i13) != 0 ? null : num10, (134217728 & i13) != 0 ? null : str11, (268435456 & i13) != 0 ? null : str12, (536870912 & i13) != 0 ? null : num11, (1073741824 & i13) != 0 ? null : str13, (i13 & Integer.MIN_VALUE) != 0 ? null : str14);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GuildInviteEmbedImpl(int i10, int i11, int i12, String str, @NotNull InviteType type, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, String str4, String str5, Boolean bool2, String str6, String str7, Integer num5, Integer num6, Boolean bool3, Integer num7, String str8, String str9, String str10, Integer num8, Integer num9, Integer num10, String str11, String str12, Integer num11, String str13, String str14) {
        super(null);
        Intrinsics.checkNotNullParameter(type, "type");
        this.backgroundColor = i10;
        this.borderColor = i11;
        this.headerColor = i12;
        this.headerText = str;
        this.type = type;
        this.acceptLabelBackgroundColor = num;
        this.acceptLabelBorderColor = num2;
        this.acceptLabelColor = num3;
        this.acceptLabelText = str2;
        this.bodyText = str3;
        this.bodyTextColor = num4;
        this.canBeAccepted = bool;
        this.channelIcon = str4;
        this.channelName = str5;
        this.embedCanBeTapped = bool2;
        this.memberText = str6;
        this.onlineText = str7;
        this.resolvingGradientEnd = num5;
        this.resolvingGradientStart = num6;
        this.splashHasRadialGradient = bool3;
        this.splashOpacity = num7;
        this.splashUrl = str8;
        this.inviteSplash = str9;
        this.subtitle = str10;
        this.subtitleColor = num8;
        this.thumbnailBackgroundColor = num9;
        this.thumbnailCornerRadius = num10;
        this.thumbnailText = str11;
        this.thumbnailUrl = str12;
        this.titleColor = num11;
        this.titleText = str13;
        this.badgeIconUrl = str14;
    }
}
