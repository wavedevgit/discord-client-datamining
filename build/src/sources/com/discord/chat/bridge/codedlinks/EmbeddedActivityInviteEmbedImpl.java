package com.discord.chat.bridge.codedlinks;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.codedlinks.CodedLinkExtendedType;
import com.discord.chat.bridge.codedlinks.InviteType;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableTextSerializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.PointerEventHelper;
import ft.m;
import java.util.List;
import jt.f;
import jt.h;
import jt.n2;
import jt.p0;
import jt.v1;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
import qr.l;
import qr.o;
@m
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0010\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\bP\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u008c\u00012\u00020\u00012\u00020\u0002:\u0004\u008b\u0001\u008c\u0001Bõ\u0002\u0012\b\b\u0001\u0010\u0003\u001a\u00020\u0004\u0012\b\b\u0001\u0010\u0005\u001a\u00020\u0004\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0004\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n\u0012\n\b\u0003\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\f\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\r\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010\u001b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\u001c\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010 \u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\b\u0012\f\u0010\"\u001a\b\u0012\u0004\u0012\u00020\b0#\u0012\u0006\u0010$\u001a\u00020%\u0012\n\b\u0002\u0010&\u001a\u0004\u0018\u00010'\u0012\u0006\u0010(\u001a\u00020\b\u0012\u0006\u0010)\u001a\u00020\u0012¢\u0006\u0004\b*\u0010+Bá\u0002\b\u0010\u0012\u0006\u0010,\u001a\u00020\u0004\u0012\u0006\u0010-\u001a\u00020\u0004\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0006\u001a\u00020\u0004\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010\b\u0012\b\u0010 \u001a\u0004\u0018\u00010\u0004\u0012\b\u0010!\u001a\u0004\u0018\u00010\b\u0012\u000e\u0010\"\u001a\n\u0012\u0004\u0012\u00020\b\u0018\u00010#\u0012\b\u0010$\u001a\u0004\u0018\u00010%\u0012\b\u0010&\u001a\u0004\u0018\u00010'\u0012\b\u0010(\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010)\u001a\u00020\u0012\u0012\b\u0010.\u001a\u0004\u0018\u00010/¢\u0006\u0004\b*\u00100J\t\u0010\\\u001a\u00020\u0004HÆ\u0003J\t\u0010]\u001a\u00020\u0004HÆ\u0003J\t\u0010^\u001a\u00020\u0004HÆ\u0003J\u000b\u0010_\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010`\u001a\u0004\u0018\u00010\nHÆ\u0003J\u0010\u0010a\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u0010\u0010b\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u0010\u0010c\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u000b\u0010d\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010e\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010f\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u0010\u0010g\u001a\u0004\u0018\u00010\u0012HÆ\u0003¢\u0006\u0002\u0010BJ\u0010\u0010h\u001a\u0004\u0018\u00010\u0012HÆ\u0003¢\u0006\u0002\u0010BJ\u0010\u0010i\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u0010\u0010j\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u0010\u0010k\u001a\u0004\u0018\u00010\u0012HÆ\u0003¢\u0006\u0002\u0010BJ\u0010\u0010l\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u000b\u0010m\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010n\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010o\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010p\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u0010\u0010q\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u0010\u0010r\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u000b\u0010s\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010t\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010u\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010:J\u000b\u0010v\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000f\u0010w\u001a\b\u0012\u0004\u0012\u00020\b0#HÆ\u0003J\t\u0010x\u001a\u00020%HÆ\u0003J\u000b\u0010y\u001a\u0004\u0018\u00010'HÆ\u0003J\t\u0010z\u001a\u00020\bHÆ\u0003J\t\u0010{\u001a\u00020\u0012HÆ\u0003J\u0086\u0003\u0010|\u001a\u00020\u00002\b\b\u0003\u0010\u0003\u001a\u00020\u00042\b\b\u0003\u0010\u0005\u001a\u00020\u00042\b\b\u0003\u0010\u0006\u001a\u00020\u00042\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n2\n\b\u0003\u0010\u000b\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\f\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\r\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010\u001b\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\u001c\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010 \u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\b2\u000e\b\u0002\u0010\"\u001a\b\u0012\u0004\u0012\u00020\b0#2\b\b\u0002\u0010$\u001a\u00020%2\n\b\u0002\u0010&\u001a\u0004\u0018\u00010'2\b\b\u0002\u0010(\u001a\u00020\b2\b\b\u0002\u0010)\u001a\u00020\u0012HÆ\u0001¢\u0006\u0002\u0010}J\u0014\u0010~\u001a\u00020\u00122\t\u0010\u007f\u001a\u0005\u0018\u00010\u0080\u0001HÖ\u0003J\n\u0010\u0081\u0001\u001a\u00020\u0004HÖ\u0001J\n\u0010\u0082\u0001\u001a\u00020\bHÖ\u0001J-\u0010\u0083\u0001\u001a\u00030\u0084\u00012\u0007\u0010\u0085\u0001\u001a\u00020\u00002\b\u0010\u0086\u0001\u001a\u00030\u0087\u00012\b\u0010\u0088\u0001\u001a\u00030\u0089\u0001H\u0001¢\u0006\u0003\b\u008a\u0001R\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b1\u00102R\u0014\u0010\u0005\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b3\u00102R\u0014\u0010\u0006\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b4\u00102R\u0016\u0010\u0007\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b5\u00106R\u0016\u0010\t\u001a\u0004\u0018\u00010\nX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b7\u00108R\u0018\u0010\u000b\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\b9\u0010:R\u0018\u0010\f\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\b<\u0010:R\u0018\u0010\r\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\b=\u0010:R\u0016\u0010\u000e\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b>\u00106R\u0016\u0010\u000f\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b?\u00106R\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\b@\u0010:R\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u0012X\u0096\u0004¢\u0006\n\n\u0002\u0010C\u001a\u0004\bA\u0010BR\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u0012X\u0096\u0004¢\u0006\n\n\u0002\u0010C\u001a\u0004\bD\u0010BR\u0018\u0010\u0014\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\bE\u0010:R\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\bF\u0010:R\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u0012X\u0096\u0004¢\u0006\n\n\u0002\u0010C\u001a\u0004\bG\u0010BR\u0018\u0010\u0017\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\bH\u0010:R\u0016\u0010\u0018\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bI\u00106R\u0016\u0010\u0019\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bJ\u00106R\u0016\u0010\u001a\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bK\u00106R\u0018\u0010\u001b\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\bL\u0010:R\u0018\u0010\u001c\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\bM\u0010:R\u0018\u0010\u001d\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\bN\u0010:R\u0016\u0010\u001e\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bO\u00106R\u0016\u0010\u001f\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bP\u00106R\u0018\u0010 \u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010;\u001a\u0004\bQ\u0010:R\u0016\u0010!\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bR\u00106R\u001a\u0010\"\u001a\b\u0012\u0004\u0012\u00020\b0#X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bS\u0010TR\u0014\u0010$\u001a\u00020%X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bU\u0010VR\u0016\u0010&\u001a\u0004\u0018\u00010'X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bW\u0010XR\u0014\u0010(\u001a\u00020\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bY\u00106R\u0014\u0010)\u001a\u00020\u0012X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bZ\u0010[¨\u0006\u008d\u0001"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbedImpl;", "Lcom/discord/chat/bridge/codedlinks/CodedLinkEmbed;", "Lcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbed;", ViewProps.BACKGROUND_COLOR, "", ViewProps.BORDER_COLOR, "headerColor", "headerText", "", "type", "Lcom/discord/chat/bridge/codedlinks/InviteType;", "acceptLabelBackgroundColor", "acceptLabelBorderColor", "acceptLabelColor", "acceptLabelText", "bodyText", "bodyTextColor", "canBeAccepted", "", "embedCanBeTapped", "resolvingGradientEnd", "resolvingGradientStart", "splashHasRadialGradient", "splashOpacity", "splashUrl", "inviteSplash", "subtitle", "subtitleColor", "thumbnailBackgroundColor", "thumbnailCornerRadius", "thumbnailText", "thumbnailUrl", "titleColor", "titleText", "participantAvatarUris", "", "extendedType", "Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "structurableSubtitleText", "Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;", "noParticipantsText", "ctaEnabled", "<init>", "(IIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/util/List;Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Ljava/lang/String;Z)V", "seen0", "seen1", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIIIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/util/List;Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Ljava/lang/String;ZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBackgroundColor", "()I", "getBorderColor", "getHeaderColor", "getHeaderText", "()Ljava/lang/String;", "getType", "()Lcom/discord/chat/bridge/codedlinks/InviteType;", "getAcceptLabelBackgroundColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getAcceptLabelBorderColor", "getAcceptLabelColor", "getAcceptLabelText", "getBodyText", "getBodyTextColor", "getCanBeAccepted", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getEmbedCanBeTapped", "getResolvingGradientEnd", "getResolvingGradientStart", "getSplashHasRadialGradient", "getSplashOpacity", "getSplashUrl", "getInviteSplash", "getSubtitle", "getSubtitleColor", "getThumbnailBackgroundColor", "getThumbnailCornerRadius", "getThumbnailText", "getThumbnailUrl", "getTitleColor", "getTitleText", "getParticipantAvatarUris", "()Ljava/util/List;", "getExtendedType", "()Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "getStructurableSubtitleText", "()Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;", "getNoParticipantsText", "getCtaEnabled", "()Z", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "component23", "component24", "component25", "component26", "component27", "component28", "component29", "component30", "component31", "component32", "copy", "(IIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/util/List;Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Ljava/lang/String;Z)Lcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbedImpl;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbeddedActivityInviteEmbedImpl extends CodedLinkEmbed implements EmbeddedActivityInviteEmbed {
    private final Integer acceptLabelBackgroundColor;
    private final Integer acceptLabelBorderColor;
    private final Integer acceptLabelColor;
    private final String acceptLabelText;
    private final int backgroundColor;
    private final String bodyText;
    private final Integer bodyTextColor;
    private final int borderColor;
    private final Boolean canBeAccepted;
    private final boolean ctaEnabled;
    private final Boolean embedCanBeTapped;
    @NotNull
    private final CodedLinkExtendedType extendedType;
    private final int headerColor;
    private final String headerText;
    private final String inviteSplash;
    @NotNull
    private final String noParticipantsText;
    @NotNull
    private final List<String> participantAvatarUris;
    private final Integer resolvingGradientEnd;
    private final Integer resolvingGradientStart;
    private final Boolean splashHasRadialGradient;
    private final Integer splashOpacity;
    private final String splashUrl;
    private final AnnotatedStructurableText structurableSubtitleText;
    private final String subtitle;
    private final Integer subtitleColor;
    private final Integer thumbnailBackgroundColor;
    private final Integer thumbnailCornerRadius;
    private final String thumbnailText;
    private final String thumbnailUrl;
    private final Integer titleColor;
    private final String titleText;
    private final InviteType type;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, l.b(o.f48044e, new Function0() { // from class: com.discord.chat.bridge.codedlinks.c
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = EmbeddedActivityInviteEmbedImpl._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null, null, null, null};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbedImpl$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbedImpl;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return EmbeddedActivityInviteEmbedImpl$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ EmbeddedActivityInviteEmbedImpl(int i10, int i11, int i12, int i13, int i14, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, List list, CodedLinkExtendedType codedLinkExtendedType, AnnotatedStructurableText annotatedStructurableText, String str10, boolean z10, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (-671088625 != (i10 & (-671088625))) {
            v1.a(new int[]{i10, i11}, new int[]{-671088625, 0}, EmbeddedActivityInviteEmbedImpl$$serializer.INSTANCE.getDescriptor());
        }
        this.backgroundColor = i12;
        this.borderColor = i13;
        this.headerColor = i14;
        this.headerText = str;
        if ((i10 & 16) == 0) {
            this.type = null;
        } else {
            this.type = inviteType;
        }
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
            this.embedCanBeTapped = null;
        } else {
            this.embedCanBeTapped = bool2;
        }
        if ((i10 & 8192) == 0) {
            this.resolvingGradientEnd = null;
        } else {
            this.resolvingGradientEnd = num5;
        }
        if ((i10 & 16384) == 0) {
            this.resolvingGradientStart = null;
        } else {
            this.resolvingGradientStart = num6;
        }
        if ((32768 & i10) == 0) {
            this.splashHasRadialGradient = null;
        } else {
            this.splashHasRadialGradient = bool3;
        }
        if ((65536 & i10) == 0) {
            this.splashOpacity = null;
        } else {
            this.splashOpacity = num7;
        }
        if ((131072 & i10) == 0) {
            this.splashUrl = null;
        } else {
            this.splashUrl = str4;
        }
        if ((262144 & i10) == 0) {
            this.inviteSplash = null;
        } else {
            this.inviteSplash = str5;
        }
        if ((524288 & i10) == 0) {
            this.subtitle = null;
        } else {
            this.subtitle = str6;
        }
        if ((1048576 & i10) == 0) {
            this.subtitleColor = null;
        } else {
            this.subtitleColor = num8;
        }
        if ((2097152 & i10) == 0) {
            this.thumbnailBackgroundColor = null;
        } else {
            this.thumbnailBackgroundColor = num9;
        }
        if ((4194304 & i10) == 0) {
            this.thumbnailCornerRadius = null;
        } else {
            this.thumbnailCornerRadius = num10;
        }
        if ((8388608 & i10) == 0) {
            this.thumbnailText = null;
        } else {
            this.thumbnailText = str7;
        }
        if ((16777216 & i10) == 0) {
            this.thumbnailUrl = null;
        } else {
            this.thumbnailUrl = str8;
        }
        if ((33554432 & i10) == 0) {
            this.titleColor = null;
        } else {
            this.titleColor = num11;
        }
        if ((67108864 & i10) == 0) {
            this.titleText = null;
        } else {
            this.titleText = str9;
        }
        this.participantAvatarUris = list;
        this.extendedType = codedLinkExtendedType;
        if ((i10 & 536870912) == 0) {
            this.structurableSubtitleText = null;
        } else {
            this.structurableSubtitleText = annotatedStructurableText;
        }
        this.noParticipantsText = str10;
        this.ctaEnabled = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(n2.f31041a);
    }

    public static /* synthetic */ EmbeddedActivityInviteEmbedImpl copy$default(EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbedImpl, int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, List list, CodedLinkExtendedType codedLinkExtendedType, AnnotatedStructurableText annotatedStructurableText, String str10, boolean z10, int i13, Object obj) {
        boolean z11;
        String str11;
        Boolean bool4;
        Integer num12;
        String str12;
        String str13;
        String str14;
        Integer num13;
        Integer num14;
        Integer num15;
        String str15;
        String str16;
        Integer num16;
        String str17;
        List list2;
        CodedLinkExtendedType codedLinkExtendedType2;
        AnnotatedStructurableText annotatedStructurableText2;
        Integer num17;
        int i14;
        int i15;
        String str18;
        InviteType inviteType2;
        Integer num18;
        Integer num19;
        Integer num20;
        String str19;
        String str20;
        Integer num21;
        Boolean bool5;
        Boolean bool6;
        Integer num22;
        int i16 = (i13 & 1) != 0 ? embeddedActivityInviteEmbedImpl.backgroundColor : i10;
        int i17 = (i13 & 2) != 0 ? embeddedActivityInviteEmbedImpl.borderColor : i11;
        int i18 = (i13 & 4) != 0 ? embeddedActivityInviteEmbedImpl.headerColor : i12;
        String str21 = (i13 & 8) != 0 ? embeddedActivityInviteEmbedImpl.headerText : str;
        InviteType inviteType3 = (i13 & 16) != 0 ? embeddedActivityInviteEmbedImpl.type : inviteType;
        Integer num23 = (i13 & 32) != 0 ? embeddedActivityInviteEmbedImpl.acceptLabelBackgroundColor : num;
        Integer num24 = (i13 & 64) != 0 ? embeddedActivityInviteEmbedImpl.acceptLabelBorderColor : num2;
        Integer num25 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? embeddedActivityInviteEmbedImpl.acceptLabelColor : num3;
        String str22 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? embeddedActivityInviteEmbedImpl.acceptLabelText : str2;
        String str23 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? embeddedActivityInviteEmbedImpl.bodyText : str3;
        Integer num26 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? embeddedActivityInviteEmbedImpl.bodyTextColor : num4;
        Boolean bool7 = (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? embeddedActivityInviteEmbedImpl.canBeAccepted : bool;
        Boolean bool8 = (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? embeddedActivityInviteEmbedImpl.embedCanBeTapped : bool2;
        Integer num27 = (i13 & 8192) != 0 ? embeddedActivityInviteEmbedImpl.resolvingGradientEnd : num5;
        int i19 = i16;
        Integer num28 = (i13 & 16384) != 0 ? embeddedActivityInviteEmbedImpl.resolvingGradientStart : num6;
        Boolean bool9 = (i13 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? embeddedActivityInviteEmbedImpl.splashHasRadialGradient : bool3;
        Integer num29 = (i13 & 65536) != 0 ? embeddedActivityInviteEmbedImpl.splashOpacity : num7;
        String str24 = (i13 & 131072) != 0 ? embeddedActivityInviteEmbedImpl.splashUrl : str4;
        String str25 = (i13 & 262144) != 0 ? embeddedActivityInviteEmbedImpl.inviteSplash : str5;
        String str26 = (i13 & 524288) != 0 ? embeddedActivityInviteEmbedImpl.subtitle : str6;
        Integer num30 = (i13 & 1048576) != 0 ? embeddedActivityInviteEmbedImpl.subtitleColor : num8;
        Integer num31 = (i13 & 2097152) != 0 ? embeddedActivityInviteEmbedImpl.thumbnailBackgroundColor : num9;
        Integer num32 = (i13 & 4194304) != 0 ? embeddedActivityInviteEmbedImpl.thumbnailCornerRadius : num10;
        String str27 = (i13 & 8388608) != 0 ? embeddedActivityInviteEmbedImpl.thumbnailText : str7;
        String str28 = (i13 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? embeddedActivityInviteEmbedImpl.thumbnailUrl : str8;
        Integer num33 = (i13 & 33554432) != 0 ? embeddedActivityInviteEmbedImpl.titleColor : num11;
        String str29 = (i13 & 67108864) != 0 ? embeddedActivityInviteEmbedImpl.titleText : str9;
        List list3 = (i13 & 134217728) != 0 ? embeddedActivityInviteEmbedImpl.participantAvatarUris : list;
        CodedLinkExtendedType codedLinkExtendedType3 = (i13 & 268435456) != 0 ? embeddedActivityInviteEmbedImpl.extendedType : codedLinkExtendedType;
        AnnotatedStructurableText annotatedStructurableText3 = (i13 & 536870912) != 0 ? embeddedActivityInviteEmbedImpl.structurableSubtitleText : annotatedStructurableText;
        String str30 = (i13 & 1073741824) != 0 ? embeddedActivityInviteEmbedImpl.noParticipantsText : str10;
        if ((i13 & Integer.MIN_VALUE) != 0) {
            str11 = str30;
            z11 = embeddedActivityInviteEmbedImpl.ctaEnabled;
            num12 = num29;
            str12 = str24;
            str13 = str25;
            str14 = str26;
            num13 = num30;
            num14 = num31;
            num15 = num32;
            str15 = str27;
            str16 = str28;
            num16 = num33;
            str17 = str29;
            list2 = list3;
            codedLinkExtendedType2 = codedLinkExtendedType3;
            annotatedStructurableText2 = annotatedStructurableText3;
            num17 = num28;
            i14 = i17;
            i15 = i18;
            str18 = str21;
            inviteType2 = inviteType3;
            num18 = num23;
            num19 = num24;
            num20 = num25;
            str19 = str22;
            str20 = str23;
            num21 = num26;
            bool5 = bool7;
            bool6 = bool8;
            num22 = num27;
            bool4 = bool9;
        } else {
            z11 = z10;
            str11 = str30;
            bool4 = bool9;
            num12 = num29;
            str12 = str24;
            str13 = str25;
            str14 = str26;
            num13 = num30;
            num14 = num31;
            num15 = num32;
            str15 = str27;
            str16 = str28;
            num16 = num33;
            str17 = str29;
            list2 = list3;
            codedLinkExtendedType2 = codedLinkExtendedType3;
            annotatedStructurableText2 = annotatedStructurableText3;
            num17 = num28;
            i14 = i17;
            i15 = i18;
            str18 = str21;
            inviteType2 = inviteType3;
            num18 = num23;
            num19 = num24;
            num20 = num25;
            str19 = str22;
            str20 = str23;
            num21 = num26;
            bool5 = bool7;
            bool6 = bool8;
            num22 = num27;
        }
        return embeddedActivityInviteEmbedImpl.copy(i19, i14, i15, str18, inviteType2, num18, num19, num20, str19, str20, num21, bool5, bool6, num22, num17, bool4, num12, str12, str13, str14, num13, num14, num15, str15, str16, num16, str17, list2, codedLinkExtendedType2, annotatedStructurableText2, str11, z11);
    }

    public static final /* synthetic */ void write$Self$chat_release(EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbedImpl, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.x(serialDescriptor, 0, embeddedActivityInviteEmbedImpl.getBackgroundColor());
        compositeEncoder.x(serialDescriptor, 1, embeddedActivityInviteEmbedImpl.getBorderColor());
        compositeEncoder.x(serialDescriptor, 2, embeddedActivityInviteEmbedImpl.getHeaderColor());
        n2 n2Var = n2.f31041a;
        compositeEncoder.l(serialDescriptor, 3, n2Var, embeddedActivityInviteEmbedImpl.getHeaderText());
        if (compositeEncoder.A(serialDescriptor, 4) || embeddedActivityInviteEmbedImpl.getType() != null) {
            compositeEncoder.l(serialDescriptor, 4, InviteType.Serializer.INSTANCE, embeddedActivityInviteEmbedImpl.getType());
        }
        if (compositeEncoder.A(serialDescriptor, 5) || embeddedActivityInviteEmbedImpl.getAcceptLabelBackgroundColor() != null) {
            compositeEncoder.l(serialDescriptor, 5, p0.f31057a, embeddedActivityInviteEmbedImpl.getAcceptLabelBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 6) || embeddedActivityInviteEmbedImpl.getAcceptLabelBorderColor() != null) {
            compositeEncoder.l(serialDescriptor, 6, p0.f31057a, embeddedActivityInviteEmbedImpl.getAcceptLabelBorderColor());
        }
        if (compositeEncoder.A(serialDescriptor, 7) || embeddedActivityInviteEmbedImpl.getAcceptLabelColor() != null) {
            compositeEncoder.l(serialDescriptor, 7, p0.f31057a, embeddedActivityInviteEmbedImpl.getAcceptLabelColor());
        }
        if (compositeEncoder.A(serialDescriptor, 8) || embeddedActivityInviteEmbedImpl.getAcceptLabelText() != null) {
            compositeEncoder.l(serialDescriptor, 8, n2Var, embeddedActivityInviteEmbedImpl.getAcceptLabelText());
        }
        if (compositeEncoder.A(serialDescriptor, 9) || embeddedActivityInviteEmbedImpl.getBodyText() != null) {
            compositeEncoder.l(serialDescriptor, 9, n2Var, embeddedActivityInviteEmbedImpl.getBodyText());
        }
        if (compositeEncoder.A(serialDescriptor, 10) || embeddedActivityInviteEmbedImpl.getBodyTextColor() != null) {
            compositeEncoder.l(serialDescriptor, 10, p0.f31057a, embeddedActivityInviteEmbedImpl.getBodyTextColor());
        }
        if (compositeEncoder.A(serialDescriptor, 11) || embeddedActivityInviteEmbedImpl.getCanBeAccepted() != null) {
            compositeEncoder.l(serialDescriptor, 11, h.f31005a, embeddedActivityInviteEmbedImpl.getCanBeAccepted());
        }
        if (compositeEncoder.A(serialDescriptor, 12) || embeddedActivityInviteEmbedImpl.getEmbedCanBeTapped() != null) {
            compositeEncoder.l(serialDescriptor, 12, h.f31005a, embeddedActivityInviteEmbedImpl.getEmbedCanBeTapped());
        }
        if (compositeEncoder.A(serialDescriptor, 13) || embeddedActivityInviteEmbedImpl.getResolvingGradientEnd() != null) {
            compositeEncoder.l(serialDescriptor, 13, p0.f31057a, embeddedActivityInviteEmbedImpl.getResolvingGradientEnd());
        }
        if (compositeEncoder.A(serialDescriptor, 14) || embeddedActivityInviteEmbedImpl.getResolvingGradientStart() != null) {
            compositeEncoder.l(serialDescriptor, 14, p0.f31057a, embeddedActivityInviteEmbedImpl.getResolvingGradientStart());
        }
        if (compositeEncoder.A(serialDescriptor, 15) || embeddedActivityInviteEmbedImpl.getSplashHasRadialGradient() != null) {
            compositeEncoder.l(serialDescriptor, 15, h.f31005a, embeddedActivityInviteEmbedImpl.getSplashHasRadialGradient());
        }
        if (compositeEncoder.A(serialDescriptor, 16) || embeddedActivityInviteEmbedImpl.getSplashOpacity() != null) {
            compositeEncoder.l(serialDescriptor, 16, p0.f31057a, embeddedActivityInviteEmbedImpl.getSplashOpacity());
        }
        if (compositeEncoder.A(serialDescriptor, 17) || embeddedActivityInviteEmbedImpl.getSplashUrl() != null) {
            compositeEncoder.l(serialDescriptor, 17, n2Var, embeddedActivityInviteEmbedImpl.getSplashUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 18) || embeddedActivityInviteEmbedImpl.getInviteSplash() != null) {
            compositeEncoder.l(serialDescriptor, 18, n2Var, embeddedActivityInviteEmbedImpl.getInviteSplash());
        }
        if (compositeEncoder.A(serialDescriptor, 19) || embeddedActivityInviteEmbedImpl.getSubtitle() != null) {
            compositeEncoder.l(serialDescriptor, 19, n2Var, embeddedActivityInviteEmbedImpl.getSubtitle());
        }
        if (compositeEncoder.A(serialDescriptor, 20) || embeddedActivityInviteEmbedImpl.getSubtitleColor() != null) {
            compositeEncoder.l(serialDescriptor, 20, p0.f31057a, embeddedActivityInviteEmbedImpl.getSubtitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 21) || embeddedActivityInviteEmbedImpl.getThumbnailBackgroundColor() != null) {
            compositeEncoder.l(serialDescriptor, 21, p0.f31057a, embeddedActivityInviteEmbedImpl.getThumbnailBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 22) || embeddedActivityInviteEmbedImpl.getThumbnailCornerRadius() != null) {
            compositeEncoder.l(serialDescriptor, 22, p0.f31057a, embeddedActivityInviteEmbedImpl.getThumbnailCornerRadius());
        }
        if (compositeEncoder.A(serialDescriptor, 23) || embeddedActivityInviteEmbedImpl.getThumbnailText() != null) {
            compositeEncoder.l(serialDescriptor, 23, n2Var, embeddedActivityInviteEmbedImpl.getThumbnailText());
        }
        if (compositeEncoder.A(serialDescriptor, 24) || embeddedActivityInviteEmbedImpl.getThumbnailUrl() != null) {
            compositeEncoder.l(serialDescriptor, 24, n2Var, embeddedActivityInviteEmbedImpl.getThumbnailUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 25) || embeddedActivityInviteEmbedImpl.getTitleColor() != null) {
            compositeEncoder.l(serialDescriptor, 25, p0.f31057a, embeddedActivityInviteEmbedImpl.getTitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 26) || embeddedActivityInviteEmbedImpl.getTitleText() != null) {
            compositeEncoder.l(serialDescriptor, 26, n2Var, embeddedActivityInviteEmbedImpl.getTitleText());
        }
        compositeEncoder.s(serialDescriptor, 27, (ft.o) lazyArr[27].getValue(), embeddedActivityInviteEmbedImpl.getParticipantAvatarUris());
        compositeEncoder.s(serialDescriptor, 28, CodedLinkExtendedType.Serializer.INSTANCE, embeddedActivityInviteEmbedImpl.getExtendedType());
        if (compositeEncoder.A(serialDescriptor, 29) || embeddedActivityInviteEmbedImpl.getStructurableSubtitleText() != null) {
            compositeEncoder.l(serialDescriptor, 29, AnnotatedStructurableTextSerializer.INSTANCE, embeddedActivityInviteEmbedImpl.getStructurableSubtitleText());
        }
        compositeEncoder.z(serialDescriptor, 30, embeddedActivityInviteEmbedImpl.getNoParticipantsText());
        compositeEncoder.y(serialDescriptor, 31, embeddedActivityInviteEmbedImpl.getCtaEnabled());
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

    public final Boolean component13() {
        return this.embedCanBeTapped;
    }

    public final Integer component14() {
        return this.resolvingGradientEnd;
    }

    public final Integer component15() {
        return this.resolvingGradientStart;
    }

    public final Boolean component16() {
        return this.splashHasRadialGradient;
    }

    public final Integer component17() {
        return this.splashOpacity;
    }

    public final String component18() {
        return this.splashUrl;
    }

    public final String component19() {
        return this.inviteSplash;
    }

    public final int component2() {
        return this.borderColor;
    }

    public final String component20() {
        return this.subtitle;
    }

    public final Integer component21() {
        return this.subtitleColor;
    }

    public final Integer component22() {
        return this.thumbnailBackgroundColor;
    }

    public final Integer component23() {
        return this.thumbnailCornerRadius;
    }

    public final String component24() {
        return this.thumbnailText;
    }

    public final String component25() {
        return this.thumbnailUrl;
    }

    public final Integer component26() {
        return this.titleColor;
    }

    public final String component27() {
        return this.titleText;
    }

    @NotNull
    public final List<String> component28() {
        return this.participantAvatarUris;
    }

    @NotNull
    public final CodedLinkExtendedType component29() {
        return this.extendedType;
    }

    public final int component3() {
        return this.headerColor;
    }

    public final AnnotatedStructurableText component30() {
        return this.structurableSubtitleText;
    }

    @NotNull
    public final String component31() {
        return this.noParticipantsText;
    }

    public final boolean component32() {
        return this.ctaEnabled;
    }

    public final String component4() {
        return this.headerText;
    }

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
    public final EmbeddedActivityInviteEmbedImpl copy(int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, @NotNull List<String> participantAvatarUris, @NotNull CodedLinkExtendedType extendedType, AnnotatedStructurableText annotatedStructurableText, @NotNull String noParticipantsText, boolean z10) {
        Intrinsics.checkNotNullParameter(participantAvatarUris, "participantAvatarUris");
        Intrinsics.checkNotNullParameter(extendedType, "extendedType");
        Intrinsics.checkNotNullParameter(noParticipantsText, "noParticipantsText");
        return new EmbeddedActivityInviteEmbedImpl(i10, i11, i12, str, inviteType, num, num2, num3, str2, str3, num4, bool, bool2, num5, num6, bool3, num7, str4, str5, str6, num8, num9, num10, str7, str8, num11, str9, participantAvatarUris, extendedType, annotatedStructurableText, noParticipantsText, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof EmbeddedActivityInviteEmbedImpl) {
            EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbedImpl = (EmbeddedActivityInviteEmbedImpl) obj;
            return this.backgroundColor == embeddedActivityInviteEmbedImpl.backgroundColor && this.borderColor == embeddedActivityInviteEmbedImpl.borderColor && this.headerColor == embeddedActivityInviteEmbedImpl.headerColor && Intrinsics.areEqual(this.headerText, embeddedActivityInviteEmbedImpl.headerText) && this.type == embeddedActivityInviteEmbedImpl.type && Intrinsics.areEqual(this.acceptLabelBackgroundColor, embeddedActivityInviteEmbedImpl.acceptLabelBackgroundColor) && Intrinsics.areEqual(this.acceptLabelBorderColor, embeddedActivityInviteEmbedImpl.acceptLabelBorderColor) && Intrinsics.areEqual(this.acceptLabelColor, embeddedActivityInviteEmbedImpl.acceptLabelColor) && Intrinsics.areEqual(this.acceptLabelText, embeddedActivityInviteEmbedImpl.acceptLabelText) && Intrinsics.areEqual(this.bodyText, embeddedActivityInviteEmbedImpl.bodyText) && Intrinsics.areEqual(this.bodyTextColor, embeddedActivityInviteEmbedImpl.bodyTextColor) && Intrinsics.areEqual(this.canBeAccepted, embeddedActivityInviteEmbedImpl.canBeAccepted) && Intrinsics.areEqual(this.embedCanBeTapped, embeddedActivityInviteEmbedImpl.embedCanBeTapped) && Intrinsics.areEqual(this.resolvingGradientEnd, embeddedActivityInviteEmbedImpl.resolvingGradientEnd) && Intrinsics.areEqual(this.resolvingGradientStart, embeddedActivityInviteEmbedImpl.resolvingGradientStart) && Intrinsics.areEqual(this.splashHasRadialGradient, embeddedActivityInviteEmbedImpl.splashHasRadialGradient) && Intrinsics.areEqual(this.splashOpacity, embeddedActivityInviteEmbedImpl.splashOpacity) && Intrinsics.areEqual(this.splashUrl, embeddedActivityInviteEmbedImpl.splashUrl) && Intrinsics.areEqual(this.inviteSplash, embeddedActivityInviteEmbedImpl.inviteSplash) && Intrinsics.areEqual(this.subtitle, embeddedActivityInviteEmbedImpl.subtitle) && Intrinsics.areEqual(this.subtitleColor, embeddedActivityInviteEmbedImpl.subtitleColor) && Intrinsics.areEqual(this.thumbnailBackgroundColor, embeddedActivityInviteEmbedImpl.thumbnailBackgroundColor) && Intrinsics.areEqual(this.thumbnailCornerRadius, embeddedActivityInviteEmbedImpl.thumbnailCornerRadius) && Intrinsics.areEqual(this.thumbnailText, embeddedActivityInviteEmbedImpl.thumbnailText) && Intrinsics.areEqual(this.thumbnailUrl, embeddedActivityInviteEmbedImpl.thumbnailUrl) && Intrinsics.areEqual(this.titleColor, embeddedActivityInviteEmbedImpl.titleColor) && Intrinsics.areEqual(this.titleText, embeddedActivityInviteEmbedImpl.titleText) && Intrinsics.areEqual(this.participantAvatarUris, embeddedActivityInviteEmbedImpl.participantAvatarUris) && this.extendedType == embeddedActivityInviteEmbedImpl.extendedType && Intrinsics.areEqual(this.structurableSubtitleText, embeddedActivityInviteEmbedImpl.structurableSubtitleText) && Intrinsics.areEqual(this.noParticipantsText, embeddedActivityInviteEmbedImpl.noParticipantsText) && this.ctaEnabled == embeddedActivityInviteEmbedImpl.ctaEnabled;
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

    @Override // com.discord.chat.bridge.codedlinks.EmbeddedActivityInviteEmbed
    public boolean getCtaEnabled() {
        return this.ctaEnabled;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Boolean getEmbedCanBeTapped() {
        return this.embedCanBeTapped;
    }

    @Override // com.discord.chat.bridge.codedlinks.EmbeddedActivityInviteEmbed
    @NotNull
    public CodedLinkExtendedType getExtendedType() {
        return this.extendedType;
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

    @Override // com.discord.chat.bridge.codedlinks.EmbeddedActivityInviteEmbed
    @NotNull
    public String getNoParticipantsText() {
        return this.noParticipantsText;
    }

    @Override // com.discord.chat.bridge.codedlinks.EmbeddedActivityInviteEmbed
    @NotNull
    public List<String> getParticipantAvatarUris() {
        return this.participantAvatarUris;
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
    public InviteType getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((((Integer.hashCode(this.backgroundColor) * 31) + Integer.hashCode(this.borderColor)) * 31) + Integer.hashCode(this.headerColor)) * 31;
        String str = this.headerText;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        InviteType inviteType = this.type;
        int hashCode3 = (hashCode2 + (inviteType == null ? 0 : inviteType.hashCode())) * 31;
        Integer num = this.acceptLabelBackgroundColor;
        int hashCode4 = (hashCode3 + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.acceptLabelBorderColor;
        int hashCode5 = (hashCode4 + (num2 == null ? 0 : num2.hashCode())) * 31;
        Integer num3 = this.acceptLabelColor;
        int hashCode6 = (hashCode5 + (num3 == null ? 0 : num3.hashCode())) * 31;
        String str2 = this.acceptLabelText;
        int hashCode7 = (hashCode6 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.bodyText;
        int hashCode8 = (hashCode7 + (str3 == null ? 0 : str3.hashCode())) * 31;
        Integer num4 = this.bodyTextColor;
        int hashCode9 = (hashCode8 + (num4 == null ? 0 : num4.hashCode())) * 31;
        Boolean bool = this.canBeAccepted;
        int hashCode10 = (hashCode9 + (bool == null ? 0 : bool.hashCode())) * 31;
        Boolean bool2 = this.embedCanBeTapped;
        int hashCode11 = (hashCode10 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        Integer num5 = this.resolvingGradientEnd;
        int hashCode12 = (hashCode11 + (num5 == null ? 0 : num5.hashCode())) * 31;
        Integer num6 = this.resolvingGradientStart;
        int hashCode13 = (hashCode12 + (num6 == null ? 0 : num6.hashCode())) * 31;
        Boolean bool3 = this.splashHasRadialGradient;
        int hashCode14 = (hashCode13 + (bool3 == null ? 0 : bool3.hashCode())) * 31;
        Integer num7 = this.splashOpacity;
        int hashCode15 = (hashCode14 + (num7 == null ? 0 : num7.hashCode())) * 31;
        String str4 = this.splashUrl;
        int hashCode16 = (hashCode15 + (str4 == null ? 0 : str4.hashCode())) * 31;
        String str5 = this.inviteSplash;
        int hashCode17 = (hashCode16 + (str5 == null ? 0 : str5.hashCode())) * 31;
        String str6 = this.subtitle;
        int hashCode18 = (hashCode17 + (str6 == null ? 0 : str6.hashCode())) * 31;
        Integer num8 = this.subtitleColor;
        int hashCode19 = (hashCode18 + (num8 == null ? 0 : num8.hashCode())) * 31;
        Integer num9 = this.thumbnailBackgroundColor;
        int hashCode20 = (hashCode19 + (num9 == null ? 0 : num9.hashCode())) * 31;
        Integer num10 = this.thumbnailCornerRadius;
        int hashCode21 = (hashCode20 + (num10 == null ? 0 : num10.hashCode())) * 31;
        String str7 = this.thumbnailText;
        int hashCode22 = (hashCode21 + (str7 == null ? 0 : str7.hashCode())) * 31;
        String str8 = this.thumbnailUrl;
        int hashCode23 = (hashCode22 + (str8 == null ? 0 : str8.hashCode())) * 31;
        Integer num11 = this.titleColor;
        int hashCode24 = (hashCode23 + (num11 == null ? 0 : num11.hashCode())) * 31;
        String str9 = this.titleText;
        int hashCode25 = (((((hashCode24 + (str9 == null ? 0 : str9.hashCode())) * 31) + this.participantAvatarUris.hashCode()) * 31) + this.extendedType.hashCode()) * 31;
        AnnotatedStructurableText annotatedStructurableText = this.structurableSubtitleText;
        return ((((hashCode25 + (annotatedStructurableText != null ? annotatedStructurableText.hashCode() : 0)) * 31) + this.noParticipantsText.hashCode()) * 31) + Boolean.hashCode(this.ctaEnabled);
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
        Boolean bool2 = this.embedCanBeTapped;
        Integer num5 = this.resolvingGradientEnd;
        Integer num6 = this.resolvingGradientStart;
        Boolean bool3 = this.splashHasRadialGradient;
        Integer num7 = this.splashOpacity;
        String str4 = this.splashUrl;
        String str5 = this.inviteSplash;
        String str6 = this.subtitle;
        Integer num8 = this.subtitleColor;
        Integer num9 = this.thumbnailBackgroundColor;
        Integer num10 = this.thumbnailCornerRadius;
        String str7 = this.thumbnailText;
        String str8 = this.thumbnailUrl;
        Integer num11 = this.titleColor;
        String str9 = this.titleText;
        List<String> list = this.participantAvatarUris;
        CodedLinkExtendedType codedLinkExtendedType = this.extendedType;
        AnnotatedStructurableText annotatedStructurableText = this.structurableSubtitleText;
        String str10 = this.noParticipantsText;
        boolean z10 = this.ctaEnabled;
        return "EmbeddedActivityInviteEmbedImpl(backgroundColor=" + i10 + ", borderColor=" + i11 + ", headerColor=" + i12 + ", headerText=" + str + ", type=" + inviteType + ", acceptLabelBackgroundColor=" + num + ", acceptLabelBorderColor=" + num2 + ", acceptLabelColor=" + num3 + ", acceptLabelText=" + str2 + ", bodyText=" + str3 + ", bodyTextColor=" + num4 + ", canBeAccepted=" + bool + ", embedCanBeTapped=" + bool2 + ", resolvingGradientEnd=" + num5 + ", resolvingGradientStart=" + num6 + ", splashHasRadialGradient=" + bool3 + ", splashOpacity=" + num7 + ", splashUrl=" + str4 + ", inviteSplash=" + str5 + ", subtitle=" + str6 + ", subtitleColor=" + num8 + ", thumbnailBackgroundColor=" + num9 + ", thumbnailCornerRadius=" + num10 + ", thumbnailText=" + str7 + ", thumbnailUrl=" + str8 + ", titleColor=" + num11 + ", titleText=" + str9 + ", participantAvatarUris=" + list + ", extendedType=" + codedLinkExtendedType + ", structurableSubtitleText=" + annotatedStructurableText + ", noParticipantsText=" + str10 + ", ctaEnabled=" + z10 + ")";
    }

    public /* synthetic */ EmbeddedActivityInviteEmbedImpl(int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, List list, CodedLinkExtendedType codedLinkExtendedType, AnnotatedStructurableText annotatedStructurableText, String str10, boolean z10, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, str, (i13 & 16) != 0 ? null : inviteType, (i13 & 32) != 0 ? null : num, (i13 & 64) != 0 ? null : num2, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : num3, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str3, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : num4, (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : bool, (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : bool2, (i13 & 8192) != 0 ? null : num5, (i13 & 16384) != 0 ? null : num6, (32768 & i13) != 0 ? null : bool3, (65536 & i13) != 0 ? null : num7, (131072 & i13) != 0 ? null : str4, (262144 & i13) != 0 ? null : str5, (524288 & i13) != 0 ? null : str6, (1048576 & i13) != 0 ? null : num8, (2097152 & i13) != 0 ? null : num9, (4194304 & i13) != 0 ? null : num10, (8388608 & i13) != 0 ? null : str7, (16777216 & i13) != 0 ? null : str8, (33554432 & i13) != 0 ? null : num11, (67108864 & i13) != 0 ? null : str9, list, codedLinkExtendedType, (i13 & 536870912) != 0 ? null : annotatedStructurableText, str10, z10);
    }

    @Override // com.discord.chat.bridge.codedlinks.EmbeddedActivityInviteEmbed
    public AnnotatedStructurableText getStructurableSubtitleText() {
        return this.structurableSubtitleText;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EmbeddedActivityInviteEmbedImpl(int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, @NotNull List<String> participantAvatarUris, @NotNull CodedLinkExtendedType extendedType, AnnotatedStructurableText annotatedStructurableText, @NotNull String noParticipantsText, boolean z10) {
        super(null);
        Intrinsics.checkNotNullParameter(participantAvatarUris, "participantAvatarUris");
        Intrinsics.checkNotNullParameter(extendedType, "extendedType");
        Intrinsics.checkNotNullParameter(noParticipantsText, "noParticipantsText");
        this.backgroundColor = i10;
        this.borderColor = i11;
        this.headerColor = i12;
        this.headerText = str;
        this.type = inviteType;
        this.acceptLabelBackgroundColor = num;
        this.acceptLabelBorderColor = num2;
        this.acceptLabelColor = num3;
        this.acceptLabelText = str2;
        this.bodyText = str3;
        this.bodyTextColor = num4;
        this.canBeAccepted = bool;
        this.embedCanBeTapped = bool2;
        this.resolvingGradientEnd = num5;
        this.resolvingGradientStart = num6;
        this.splashHasRadialGradient = bool3;
        this.splashOpacity = num7;
        this.splashUrl = str4;
        this.inviteSplash = str5;
        this.subtitle = str6;
        this.subtitleColor = num8;
        this.thumbnailBackgroundColor = num9;
        this.thumbnailCornerRadius = num10;
        this.thumbnailText = str7;
        this.thumbnailUrl = str8;
        this.titleColor = num11;
        this.titleText = str9;
        this.participantAvatarUris = participantAvatarUris;
        this.extendedType = extendedType;
        this.structurableSubtitleText = annotatedStructurableText;
        this.noParticipantsText = noParticipantsText;
        this.ctaEnabled = z10;
    }
}
