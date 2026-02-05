package com.discord.chat.bridge.codedlinks;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.codedlinks.CodedLinkExtendedType;
import com.discord.chat.bridge.codedlinks.InviteType;
import com.discord.notifications.renderer.NotificationRenderer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.PointerEventHelper;
import dt.m;
import gt.h;
import gt.n2;
import gt.p0;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b\u0012\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\bY\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u009a\u00012\u00020\u00012\u00020\u00022\u00020\u0003:\u0004\u0099\u0001\u009a\u0001B«\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\t\u0012\u0006\u0010\r\u001a\u00020\t\u0012\u0006\u0010\u000e\u001a\u00020\t\u0012\u0006\u0010\u000f\u001a\u00020\t\u0012\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0003\u0010\u0011\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0003\u0010\u0012\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\t\u0012\n\b\u0003\u0010\u0015\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u0017\u0012\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u0017\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\u0017\u0012\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\"\u001a\u0004\u0018\u00010\t\u0012\n\b\u0003\u0010#\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0003\u0010$\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\t\u0012\n\b\u0003\u0010(\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010)\u001a\u00020*\u0012\u0006\u0010+\u001a\u00020\t\u0012\n\b\u0002\u0010,\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010-\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010.\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b/\u00100B\u0099\u0003\b\u0010\u0012\u0006\u00101\u001a\u00020\u0005\u0012\u0006\u00102\u001a\u00020\u0005\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\t\u0012\b\u0010\r\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0017\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010\u0017\u0012\b\u0010 \u001a\u0004\u0018\u00010\u0005\u0012\b\u0010!\u001a\u0004\u0018\u00010\t\u0012\b\u0010\"\u001a\u0004\u0018\u00010\t\u0012\b\u0010#\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010$\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010%\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010&\u001a\u0004\u0018\u00010\t\u0012\b\u0010'\u001a\u0004\u0018\u00010\t\u0012\b\u0010(\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010)\u001a\u0004\u0018\u00010*\u0012\b\u0010+\u001a\u0004\u0018\u00010\t\u0012\b\u0010,\u001a\u0004\u0018\u00010\t\u0012\b\u0010-\u001a\u0004\u0018\u00010\t\u0012\b\u0010.\u001a\u0004\u0018\u00010\t\u0012\b\u00103\u001a\u0004\u0018\u000104¢\u0006\u0004\b/\u00105J\t\u0010d\u001a\u00020\u0005HÆ\u0003J\t\u0010e\u001a\u00020\u0005HÆ\u0003J\t\u0010f\u001a\u00020\u0005HÆ\u0003J\t\u0010g\u001a\u00020\tHÆ\u0003J\t\u0010h\u001a\u00020\u000bHÆ\u0003J\t\u0010i\u001a\u00020\tHÆ\u0003J\t\u0010j\u001a\u00020\tHÆ\u0003J\t\u0010k\u001a\u00020\tHÆ\u0003J\t\u0010l\u001a\u00020\tHÆ\u0003J\u0010\u0010m\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\u0010\u0010n\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\u0010\u0010o\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\u000b\u0010p\u001a\u0004\u0018\u00010\tHÆ\u0003J\u000b\u0010q\u001a\u0004\u0018\u00010\tHÆ\u0003J\u0010\u0010r\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\u0010\u0010s\u001a\u0004\u0018\u00010\u0017HÆ\u0003¢\u0006\u0002\u0010KJ\u000b\u0010t\u001a\u0004\u0018\u00010\tHÆ\u0003J\u000b\u0010u\u001a\u0004\u0018\u00010\tHÆ\u0003J\u0010\u0010v\u001a\u0004\u0018\u00010\u0017HÆ\u0003¢\u0006\u0002\u0010KJ\u000b\u0010w\u001a\u0004\u0018\u00010\tHÆ\u0003J\u000b\u0010x\u001a\u0004\u0018\u00010\tHÆ\u0003J\u0010\u0010y\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\u0010\u0010z\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\u0010\u0010{\u001a\u0004\u0018\u00010\u0017HÆ\u0003¢\u0006\u0002\u0010KJ\u0010\u0010|\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\u000b\u0010}\u001a\u0004\u0018\u00010\tHÆ\u0003J\u000b\u0010~\u001a\u0004\u0018\u00010\tHÆ\u0003J\u0010\u0010\u007f\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\u0011\u0010\u0080\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\u0011\u0010\u0081\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\f\u0010\u0082\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003J\f\u0010\u0083\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003J\u0011\u0010\u0084\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010CJ\n\u0010\u0085\u0001\u001a\u00020*HÆ\u0003J\n\u0010\u0086\u0001\u001a\u00020\tHÆ\u0003J\f\u0010\u0087\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003J\f\u0010\u0088\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003J\f\u0010\u0089\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003JÂ\u0003\u0010\u008a\u0001\u001a\u00020\u00002\b\b\u0003\u0010\u0004\u001a\u00020\u00052\b\b\u0003\u0010\u0006\u001a\u00020\u00052\b\b\u0003\u0010\u0007\u001a\u00020\u00052\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\u000b2\b\b\u0002\u0010\f\u001a\u00020\t2\b\b\u0002\u0010\r\u001a\u00020\t2\b\b\u0002\u0010\u000e\u001a\u00020\t2\b\b\u0002\u0010\u000f\u001a\u00020\t2\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u00052\n\b\u0003\u0010\u0011\u001a\u0004\u0018\u00010\u00052\n\b\u0003\u0010\u0012\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\t2\n\b\u0003\u0010\u0015\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u00172\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u00172\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\u00172\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\"\u001a\u0004\u0018\u00010\t2\n\b\u0003\u0010#\u001a\u0004\u0018\u00010\u00052\n\b\u0003\u0010$\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\t2\n\b\u0003\u0010(\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010)\u001a\u00020*2\b\b\u0002\u0010+\u001a\u00020\t2\n\b\u0002\u0010,\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010-\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010.\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0003\u0010\u008b\u0001J\u0016\u0010\u008c\u0001\u001a\u00020\u00172\n\u0010\u008d\u0001\u001a\u0005\u0018\u00010\u008e\u0001HÖ\u0003J\n\u0010\u008f\u0001\u001a\u00020\u0005HÖ\u0001J\n\u0010\u0090\u0001\u001a\u00020\tHÖ\u0001J-\u0010\u0091\u0001\u001a\u00030\u0092\u00012\u0007\u0010\u0093\u0001\u001a\u00020\u00002\b\u0010\u0094\u0001\u001a\u00030\u0095\u00012\b\u0010\u0096\u0001\u001a\u00030\u0097\u0001H\u0001¢\u0006\u0003\b\u0098\u0001R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b6\u00107R\u0014\u0010\u0006\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b8\u00107R\u0014\u0010\u0007\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b9\u00107R\u0014\u0010\b\u001a\u00020\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b:\u0010;R\u0014\u0010\n\u001a\u00020\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b<\u0010=R\u0014\u0010\f\u001a\u00020\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b>\u0010;R\u0014\u0010\r\u001a\u00020\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b?\u0010;R\u0014\u0010\u000e\u001a\u00020\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b@\u0010;R\u0014\u0010\u000f\u001a\u00020\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bA\u0010;R\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bB\u0010CR\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bE\u0010CR\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bF\u0010CR\u0016\u0010\u0013\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bG\u0010;R\u0016\u0010\u0014\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bH\u0010;R\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bI\u0010CR\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u0017X\u0096\u0004¢\u0006\n\n\u0002\u0010L\u001a\u0004\bJ\u0010KR\u0016\u0010\u0018\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bM\u0010;R\u0016\u0010\u0019\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bN\u0010;R\u0018\u0010\u001a\u001a\u0004\u0018\u00010\u0017X\u0096\u0004¢\u0006\n\n\u0002\u0010L\u001a\u0004\bO\u0010KR\u0016\u0010\u001b\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bP\u0010;R\u0016\u0010\u001c\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bQ\u0010;R\u0018\u0010\u001d\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bR\u0010CR\u0018\u0010\u001e\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bS\u0010CR\u0018\u0010\u001f\u001a\u0004\u0018\u00010\u0017X\u0096\u0004¢\u0006\n\n\u0002\u0010L\u001a\u0004\bT\u0010KR\u0018\u0010 \u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bU\u0010CR\u0016\u0010!\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bV\u0010;R\u0016\u0010\"\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bW\u0010;R\u0018\u0010#\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bX\u0010CR\u0018\u0010$\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bY\u0010CR\u0018\u0010%\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bZ\u0010CR\u0016\u0010&\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b[\u0010;R\u0016\u0010'\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\\\u0010;R\u0018\u0010(\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\b]\u0010CR\u0014\u0010)\u001a\u00020*X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b^\u0010_R\u0014\u0010+\u001a\u00020\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b`\u0010;R\u0016\u0010,\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\ba\u0010;R\u0016\u0010-\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bb\u0010;R\u0016\u0010.\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bc\u0010;¨\u0006\u009b\u0001"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/GuildInviteDisabledEmbedImpl;", "Lcom/discord/chat/bridge/codedlinks/CodedLinkEmbed;", "Lcom/discord/chat/bridge/codedlinks/GuildDisabledInviteEmbed;", "Lcom/discord/chat/bridge/codedlinks/GuildInviteExtendedEmbed;", ViewProps.BACKGROUND_COLOR, "", ViewProps.BORDER_COLOR, "headerColor", "headerText", "", "type", "Lcom/discord/chat/bridge/codedlinks/InviteType;", "titleText", "subtitle", "helpCenterArticleLabel", "helpCenterArticleURL", "acceptLabelBackgroundColor", "acceptLabelBorderColor", "acceptLabelColor", "acceptLabelText", "bodyText", "bodyTextColor", "canBeAccepted", "", "channelIcon", NotificationRenderer.CHANNEL_NAME, "embedCanBeTapped", "memberText", "onlineText", "resolvingGradientEnd", "resolvingGradientStart", "splashHasRadialGradient", "splashOpacity", "splashUrl", "inviteSplash", "subtitleColor", "thumbnailBackgroundColor", "thumbnailCornerRadius", "thumbnailText", "thumbnailUrl", "titleColor", "extendedType", "Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "guildName", "guildIcon", "headerIcon", "badgeIconUrl", "<init>", "(IIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "seen1", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIIIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBackgroundColor", "()I", "getBorderColor", "getHeaderColor", "getHeaderText", "()Ljava/lang/String;", "getType", "()Lcom/discord/chat/bridge/codedlinks/InviteType;", "getTitleText", "getSubtitle", "getHelpCenterArticleLabel", "getHelpCenterArticleURL", "getAcceptLabelBackgroundColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getAcceptLabelBorderColor", "getAcceptLabelColor", "getAcceptLabelText", "getBodyText", "getBodyTextColor", "getCanBeAccepted", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getChannelIcon", "getChannelName", "getEmbedCanBeTapped", "getMemberText", "getOnlineText", "getResolvingGradientEnd", "getResolvingGradientStart", "getSplashHasRadialGradient", "getSplashOpacity", "getSplashUrl", "getInviteSplash", "getSubtitleColor", "getThumbnailBackgroundColor", "getThumbnailCornerRadius", "getThumbnailText", "getThumbnailUrl", "getTitleColor", "getExtendedType", "()Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "getGuildName", "getGuildIcon", "getHeaderIcon", "getBadgeIconUrl", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "component23", "component24", "component25", "component26", "component27", "component28", "component29", "component30", "component31", "component32", "component33", "component34", "component35", "component36", "component37", "component38", "copy", "(IIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/chat/bridge/codedlinks/GuildInviteDisabledEmbedImpl;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildInviteDisabledEmbedImpl extends CodedLinkEmbed implements GuildDisabledInviteEmbed, GuildInviteExtendedEmbed {
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
    @NotNull
    private final CodedLinkExtendedType extendedType;
    private final String guildIcon;
    @NotNull
    private final String guildName;
    private final int headerColor;
    private final String headerIcon;
    @NotNull
    private final String headerText;
    @NotNull
    private final String helpCenterArticleLabel;
    @NotNull
    private final String helpCenterArticleURL;
    private final String inviteSplash;
    private final String memberText;
    private final String onlineText;
    private final Integer resolvingGradientEnd;
    private final Integer resolvingGradientStart;
    private final Boolean splashHasRadialGradient;
    private final Integer splashOpacity;
    private final String splashUrl;
    @NotNull
    private final String subtitle;
    private final Integer subtitleColor;
    private final Integer thumbnailBackgroundColor;
    private final Integer thumbnailCornerRadius;
    private final String thumbnailText;
    private final String thumbnailUrl;
    private final Integer titleColor;
    @NotNull
    private final String titleText;
    @NotNull
    private final InviteType type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/GuildInviteDisabledEmbedImpl$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/codedlinks/GuildInviteDisabledEmbedImpl;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return GuildInviteDisabledEmbedImpl$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ GuildInviteDisabledEmbedImpl(int i10, int i11, int i12, int i13, int i14, String str, InviteType inviteType, String str2, String str3, String str4, String str5, Integer num, Integer num2, Integer num3, String str6, String str7, Integer num4, Boolean bool, String str8, String str9, Boolean bool2, String str10, String str11, Integer num5, Integer num6, Boolean bool3, Integer num7, String str12, String str13, Integer num8, Integer num9, Integer num10, String str14, String str15, Integer num11, CodedLinkExtendedType codedLinkExtendedType, String str16, String str17, String str18, String str19, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if ((511 != (i10 & 511)) | (4 != (i11 & 4))) {
            v1.a(new int[]{i10, i11}, new int[]{511, 4}, GuildInviteDisabledEmbedImpl$$serializer.INSTANCE.getDescriptor());
        }
        this.backgroundColor = i12;
        this.borderColor = i13;
        this.headerColor = i14;
        this.headerText = str;
        this.type = inviteType;
        this.titleText = str2;
        this.subtitle = str3;
        this.helpCenterArticleLabel = str4;
        this.helpCenterArticleURL = str5;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.acceptLabelBackgroundColor = null;
        } else {
            this.acceptLabelBackgroundColor = num;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.acceptLabelBorderColor = null;
        } else {
            this.acceptLabelBorderColor = num2;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.acceptLabelColor = null;
        } else {
            this.acceptLabelColor = num3;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.acceptLabelText = null;
        } else {
            this.acceptLabelText = str6;
        }
        if ((i10 & 8192) == 0) {
            this.bodyText = null;
        } else {
            this.bodyText = str7;
        }
        if ((i10 & 16384) == 0) {
            this.bodyTextColor = null;
        } else {
            this.bodyTextColor = num4;
        }
        if ((32768 & i10) == 0) {
            this.canBeAccepted = null;
        } else {
            this.canBeAccepted = bool;
        }
        if ((65536 & i10) == 0) {
            this.channelIcon = null;
        } else {
            this.channelIcon = str8;
        }
        if ((131072 & i10) == 0) {
            this.channelName = null;
        } else {
            this.channelName = str9;
        }
        if ((262144 & i10) == 0) {
            this.embedCanBeTapped = null;
        } else {
            this.embedCanBeTapped = bool2;
        }
        if ((524288 & i10) == 0) {
            this.memberText = null;
        } else {
            this.memberText = str10;
        }
        if ((1048576 & i10) == 0) {
            this.onlineText = null;
        } else {
            this.onlineText = str11;
        }
        if ((2097152 & i10) == 0) {
            this.resolvingGradientEnd = null;
        } else {
            this.resolvingGradientEnd = num5;
        }
        if ((4194304 & i10) == 0) {
            this.resolvingGradientStart = null;
        } else {
            this.resolvingGradientStart = num6;
        }
        if ((8388608 & i10) == 0) {
            this.splashHasRadialGradient = null;
        } else {
            this.splashHasRadialGradient = bool3;
        }
        if ((16777216 & i10) == 0) {
            this.splashOpacity = null;
        } else {
            this.splashOpacity = num7;
        }
        if ((33554432 & i10) == 0) {
            this.splashUrl = null;
        } else {
            this.splashUrl = str12;
        }
        if ((67108864 & i10) == 0) {
            this.inviteSplash = null;
        } else {
            this.inviteSplash = str13;
        }
        if ((134217728 & i10) == 0) {
            this.subtitleColor = null;
        } else {
            this.subtitleColor = num8;
        }
        if ((268435456 & i10) == 0) {
            this.thumbnailBackgroundColor = null;
        } else {
            this.thumbnailBackgroundColor = num9;
        }
        if ((536870912 & i10) == 0) {
            this.thumbnailCornerRadius = null;
        } else {
            this.thumbnailCornerRadius = num10;
        }
        if ((1073741824 & i10) == 0) {
            this.thumbnailText = null;
        } else {
            this.thumbnailText = str14;
        }
        if ((i10 & Integer.MIN_VALUE) == 0) {
            this.thumbnailUrl = null;
        } else {
            this.thumbnailUrl = str15;
        }
        if ((i11 & 1) == 0) {
            this.titleColor = null;
        } else {
            this.titleColor = num11;
        }
        this.extendedType = (i11 & 2) == 0 ? CodedLinkExtendedType.GUILD_INVITE_DISABLED : codedLinkExtendedType;
        this.guildName = str16;
        if ((i11 & 8) == 0) {
            this.guildIcon = null;
        } else {
            this.guildIcon = str17;
        }
        if ((i11 & 16) == 0) {
            this.headerIcon = null;
        } else {
            this.headerIcon = str18;
        }
        if ((i11 & 32) == 0) {
            this.badgeIconUrl = null;
        } else {
            this.badgeIconUrl = str19;
        }
    }

    public static /* synthetic */ GuildInviteDisabledEmbedImpl copy$default(GuildInviteDisabledEmbedImpl guildInviteDisabledEmbedImpl, int i10, int i11, int i12, String str, InviteType inviteType, String str2, String str3, String str4, String str5, Integer num, Integer num2, Integer num3, String str6, String str7, Integer num4, Boolean bool, String str8, String str9, Boolean bool2, String str10, String str11, Integer num5, Integer num6, Boolean bool3, Integer num7, String str12, String str13, Integer num8, Integer num9, Integer num10, String str14, String str15, Integer num11, CodedLinkExtendedType codedLinkExtendedType, String str16, String str17, String str18, String str19, int i13, int i14, Object obj) {
        String str20;
        String str21;
        Integer num12;
        Integer num13;
        Boolean bool4;
        Integer num14;
        String str22;
        String str23;
        Integer num15;
        Integer num16;
        Integer num17;
        String str24;
        String str25;
        Integer num18;
        CodedLinkExtendedType codedLinkExtendedType2;
        String str26;
        String str27;
        Integer num19;
        String str28;
        String str29;
        String str30;
        Integer num20;
        Integer num21;
        Integer num22;
        String str31;
        String str32;
        Boolean bool5;
        String str33;
        String str34;
        Boolean bool6;
        String str35;
        String str36;
        int i15;
        int i16;
        String str37;
        InviteType inviteType2;
        String str38;
        int i17 = (i13 & 1) != 0 ? guildInviteDisabledEmbedImpl.backgroundColor : i10;
        int i18 = (i13 & 2) != 0 ? guildInviteDisabledEmbedImpl.borderColor : i11;
        int i19 = (i13 & 4) != 0 ? guildInviteDisabledEmbedImpl.headerColor : i12;
        String str39 = (i13 & 8) != 0 ? guildInviteDisabledEmbedImpl.headerText : str;
        InviteType inviteType3 = (i13 & 16) != 0 ? guildInviteDisabledEmbedImpl.type : inviteType;
        String str40 = (i13 & 32) != 0 ? guildInviteDisabledEmbedImpl.titleText : str2;
        String str41 = (i13 & 64) != 0 ? guildInviteDisabledEmbedImpl.subtitle : str3;
        String str42 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? guildInviteDisabledEmbedImpl.helpCenterArticleLabel : str4;
        String str43 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? guildInviteDisabledEmbedImpl.helpCenterArticleURL : str5;
        Integer num23 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? guildInviteDisabledEmbedImpl.acceptLabelBackgroundColor : num;
        Integer num24 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? guildInviteDisabledEmbedImpl.acceptLabelBorderColor : num2;
        Integer num25 = (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? guildInviteDisabledEmbedImpl.acceptLabelColor : num3;
        String str44 = (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? guildInviteDisabledEmbedImpl.acceptLabelText : str6;
        String str45 = (i13 & 8192) != 0 ? guildInviteDisabledEmbedImpl.bodyText : str7;
        int i20 = i17;
        Integer num26 = (i13 & 16384) != 0 ? guildInviteDisabledEmbedImpl.bodyTextColor : num4;
        Boolean bool7 = (i13 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? guildInviteDisabledEmbedImpl.canBeAccepted : bool;
        String str46 = (i13 & 65536) != 0 ? guildInviteDisabledEmbedImpl.channelIcon : str8;
        String str47 = (i13 & 131072) != 0 ? guildInviteDisabledEmbedImpl.channelName : str9;
        Boolean bool8 = (i13 & 262144) != 0 ? guildInviteDisabledEmbedImpl.embedCanBeTapped : bool2;
        String str48 = (i13 & 524288) != 0 ? guildInviteDisabledEmbedImpl.memberText : str10;
        String str49 = (i13 & 1048576) != 0 ? guildInviteDisabledEmbedImpl.onlineText : str11;
        Integer num27 = (i13 & 2097152) != 0 ? guildInviteDisabledEmbedImpl.resolvingGradientEnd : num5;
        Integer num28 = (i13 & 4194304) != 0 ? guildInviteDisabledEmbedImpl.resolvingGradientStart : num6;
        Boolean bool9 = (i13 & 8388608) != 0 ? guildInviteDisabledEmbedImpl.splashHasRadialGradient : bool3;
        Integer num29 = (i13 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? guildInviteDisabledEmbedImpl.splashOpacity : num7;
        String str50 = (i13 & 33554432) != 0 ? guildInviteDisabledEmbedImpl.splashUrl : str12;
        String str51 = (i13 & 67108864) != 0 ? guildInviteDisabledEmbedImpl.inviteSplash : str13;
        Integer num30 = (i13 & 134217728) != 0 ? guildInviteDisabledEmbedImpl.subtitleColor : num8;
        Integer num31 = (i13 & 268435456) != 0 ? guildInviteDisabledEmbedImpl.thumbnailBackgroundColor : num9;
        Integer num32 = (i13 & 536870912) != 0 ? guildInviteDisabledEmbedImpl.thumbnailCornerRadius : num10;
        String str52 = (i13 & 1073741824) != 0 ? guildInviteDisabledEmbedImpl.thumbnailText : str14;
        String str53 = (i13 & Integer.MIN_VALUE) != 0 ? guildInviteDisabledEmbedImpl.thumbnailUrl : str15;
        Integer num33 = (i14 & 1) != 0 ? guildInviteDisabledEmbedImpl.titleColor : num11;
        CodedLinkExtendedType codedLinkExtendedType3 = (i14 & 2) != 0 ? guildInviteDisabledEmbedImpl.extendedType : codedLinkExtendedType;
        String str54 = (i14 & 4) != 0 ? guildInviteDisabledEmbedImpl.guildName : str16;
        String str55 = (i14 & 8) != 0 ? guildInviteDisabledEmbedImpl.guildIcon : str17;
        String str56 = (i14 & 16) != 0 ? guildInviteDisabledEmbedImpl.headerIcon : str18;
        if ((i14 & 32) != 0) {
            str21 = str56;
            str20 = guildInviteDisabledEmbedImpl.badgeIconUrl;
            num13 = num28;
            bool4 = bool9;
            num14 = num29;
            str22 = str50;
            str23 = str51;
            num15 = num30;
            num16 = num31;
            num17 = num32;
            str24 = str52;
            str25 = str53;
            num18 = num33;
            codedLinkExtendedType2 = codedLinkExtendedType3;
            str26 = str54;
            str27 = str55;
            num19 = num26;
            str29 = str42;
            str30 = str43;
            num20 = num23;
            num21 = num24;
            num22 = num25;
            str31 = str44;
            str32 = str45;
            bool5 = bool7;
            str33 = str46;
            str34 = str47;
            bool6 = bool8;
            str35 = str48;
            str36 = str49;
            num12 = num27;
            i15 = i18;
            i16 = i19;
            str37 = str39;
            inviteType2 = inviteType3;
            str38 = str40;
            str28 = str41;
        } else {
            str20 = str19;
            str21 = str56;
            num12 = num27;
            num13 = num28;
            bool4 = bool9;
            num14 = num29;
            str22 = str50;
            str23 = str51;
            num15 = num30;
            num16 = num31;
            num17 = num32;
            str24 = str52;
            str25 = str53;
            num18 = num33;
            codedLinkExtendedType2 = codedLinkExtendedType3;
            str26 = str54;
            str27 = str55;
            num19 = num26;
            str28 = str41;
            str29 = str42;
            str30 = str43;
            num20 = num23;
            num21 = num24;
            num22 = num25;
            str31 = str44;
            str32 = str45;
            bool5 = bool7;
            str33 = str46;
            str34 = str47;
            bool6 = bool8;
            str35 = str48;
            str36 = str49;
            i15 = i18;
            i16 = i19;
            str37 = str39;
            inviteType2 = inviteType3;
            str38 = str40;
        }
        return guildInviteDisabledEmbedImpl.copy(i20, i15, i16, str37, inviteType2, str38, str28, str29, str30, num20, num21, num22, str31, str32, num19, bool5, str33, str34, bool6, str35, str36, num12, num13, bool4, num14, str22, str23, num15, num16, num17, str24, str25, num18, codedLinkExtendedType2, str26, str27, str21, str20);
    }

    public static final /* synthetic */ void write$Self$chat_release(GuildInviteDisabledEmbedImpl guildInviteDisabledEmbedImpl, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, guildInviteDisabledEmbedImpl.getBackgroundColor());
        compositeEncoder.v(serialDescriptor, 1, guildInviteDisabledEmbedImpl.getBorderColor());
        compositeEncoder.v(serialDescriptor, 2, guildInviteDisabledEmbedImpl.getHeaderColor());
        compositeEncoder.x(serialDescriptor, 3, guildInviteDisabledEmbedImpl.getHeaderText());
        compositeEncoder.l(serialDescriptor, 4, InviteType.Serializer.INSTANCE, guildInviteDisabledEmbedImpl.getType());
        compositeEncoder.x(serialDescriptor, 5, guildInviteDisabledEmbedImpl.getTitleText());
        compositeEncoder.x(serialDescriptor, 6, guildInviteDisabledEmbedImpl.getSubtitle());
        compositeEncoder.x(serialDescriptor, 7, guildInviteDisabledEmbedImpl.getHelpCenterArticleLabel());
        compositeEncoder.x(serialDescriptor, 8, guildInviteDisabledEmbedImpl.getHelpCenterArticleURL());
        if (compositeEncoder.z(serialDescriptor, 9) || guildInviteDisabledEmbedImpl.getAcceptLabelBackgroundColor() != null) {
            compositeEncoder.A(serialDescriptor, 9, p0.f25318a, guildInviteDisabledEmbedImpl.getAcceptLabelBackgroundColor());
        }
        if (compositeEncoder.z(serialDescriptor, 10) || guildInviteDisabledEmbedImpl.getAcceptLabelBorderColor() != null) {
            compositeEncoder.A(serialDescriptor, 10, p0.f25318a, guildInviteDisabledEmbedImpl.getAcceptLabelBorderColor());
        }
        if (compositeEncoder.z(serialDescriptor, 11) || guildInviteDisabledEmbedImpl.getAcceptLabelColor() != null) {
            compositeEncoder.A(serialDescriptor, 11, p0.f25318a, guildInviteDisabledEmbedImpl.getAcceptLabelColor());
        }
        if (compositeEncoder.z(serialDescriptor, 12) || guildInviteDisabledEmbedImpl.getAcceptLabelText() != null) {
            compositeEncoder.A(serialDescriptor, 12, n2.f25302a, guildInviteDisabledEmbedImpl.getAcceptLabelText());
        }
        if (compositeEncoder.z(serialDescriptor, 13) || guildInviteDisabledEmbedImpl.getBodyText() != null) {
            compositeEncoder.A(serialDescriptor, 13, n2.f25302a, guildInviteDisabledEmbedImpl.getBodyText());
        }
        if (compositeEncoder.z(serialDescriptor, 14) || guildInviteDisabledEmbedImpl.getBodyTextColor() != null) {
            compositeEncoder.A(serialDescriptor, 14, p0.f25318a, guildInviteDisabledEmbedImpl.getBodyTextColor());
        }
        if (compositeEncoder.z(serialDescriptor, 15) || guildInviteDisabledEmbedImpl.getCanBeAccepted() != null) {
            compositeEncoder.A(serialDescriptor, 15, h.f25266a, guildInviteDisabledEmbedImpl.getCanBeAccepted());
        }
        if (compositeEncoder.z(serialDescriptor, 16) || guildInviteDisabledEmbedImpl.getChannelIcon() != null) {
            compositeEncoder.A(serialDescriptor, 16, n2.f25302a, guildInviteDisabledEmbedImpl.getChannelIcon());
        }
        if (compositeEncoder.z(serialDescriptor, 17) || guildInviteDisabledEmbedImpl.getChannelName() != null) {
            compositeEncoder.A(serialDescriptor, 17, n2.f25302a, guildInviteDisabledEmbedImpl.getChannelName());
        }
        if (compositeEncoder.z(serialDescriptor, 18) || guildInviteDisabledEmbedImpl.getEmbedCanBeTapped() != null) {
            compositeEncoder.A(serialDescriptor, 18, h.f25266a, guildInviteDisabledEmbedImpl.getEmbedCanBeTapped());
        }
        if (compositeEncoder.z(serialDescriptor, 19) || guildInviteDisabledEmbedImpl.getMemberText() != null) {
            compositeEncoder.A(serialDescriptor, 19, n2.f25302a, guildInviteDisabledEmbedImpl.getMemberText());
        }
        if (compositeEncoder.z(serialDescriptor, 20) || guildInviteDisabledEmbedImpl.getOnlineText() != null) {
            compositeEncoder.A(serialDescriptor, 20, n2.f25302a, guildInviteDisabledEmbedImpl.getOnlineText());
        }
        if (compositeEncoder.z(serialDescriptor, 21) || guildInviteDisabledEmbedImpl.getResolvingGradientEnd() != null) {
            compositeEncoder.A(serialDescriptor, 21, p0.f25318a, guildInviteDisabledEmbedImpl.getResolvingGradientEnd());
        }
        if (compositeEncoder.z(serialDescriptor, 22) || guildInviteDisabledEmbedImpl.getResolvingGradientStart() != null) {
            compositeEncoder.A(serialDescriptor, 22, p0.f25318a, guildInviteDisabledEmbedImpl.getResolvingGradientStart());
        }
        if (compositeEncoder.z(serialDescriptor, 23) || guildInviteDisabledEmbedImpl.getSplashHasRadialGradient() != null) {
            compositeEncoder.A(serialDescriptor, 23, h.f25266a, guildInviteDisabledEmbedImpl.getSplashHasRadialGradient());
        }
        if (compositeEncoder.z(serialDescriptor, 24) || guildInviteDisabledEmbedImpl.getSplashOpacity() != null) {
            compositeEncoder.A(serialDescriptor, 24, p0.f25318a, guildInviteDisabledEmbedImpl.getSplashOpacity());
        }
        if (compositeEncoder.z(serialDescriptor, 25) || guildInviteDisabledEmbedImpl.getSplashUrl() != null) {
            compositeEncoder.A(serialDescriptor, 25, n2.f25302a, guildInviteDisabledEmbedImpl.getSplashUrl());
        }
        if (compositeEncoder.z(serialDescriptor, 26) || guildInviteDisabledEmbedImpl.getInviteSplash() != null) {
            compositeEncoder.A(serialDescriptor, 26, n2.f25302a, guildInviteDisabledEmbedImpl.getInviteSplash());
        }
        if (compositeEncoder.z(serialDescriptor, 27) || guildInviteDisabledEmbedImpl.getSubtitleColor() != null) {
            compositeEncoder.A(serialDescriptor, 27, p0.f25318a, guildInviteDisabledEmbedImpl.getSubtitleColor());
        }
        if (compositeEncoder.z(serialDescriptor, 28) || guildInviteDisabledEmbedImpl.getThumbnailBackgroundColor() != null) {
            compositeEncoder.A(serialDescriptor, 28, p0.f25318a, guildInviteDisabledEmbedImpl.getThumbnailBackgroundColor());
        }
        if (compositeEncoder.z(serialDescriptor, 29) || guildInviteDisabledEmbedImpl.getThumbnailCornerRadius() != null) {
            compositeEncoder.A(serialDescriptor, 29, p0.f25318a, guildInviteDisabledEmbedImpl.getThumbnailCornerRadius());
        }
        if (compositeEncoder.z(serialDescriptor, 30) || guildInviteDisabledEmbedImpl.getThumbnailText() != null) {
            compositeEncoder.A(serialDescriptor, 30, n2.f25302a, guildInviteDisabledEmbedImpl.getThumbnailText());
        }
        if (compositeEncoder.z(serialDescriptor, 31) || guildInviteDisabledEmbedImpl.getThumbnailUrl() != null) {
            compositeEncoder.A(serialDescriptor, 31, n2.f25302a, guildInviteDisabledEmbedImpl.getThumbnailUrl());
        }
        if (compositeEncoder.z(serialDescriptor, 32) || guildInviteDisabledEmbedImpl.getTitleColor() != null) {
            compositeEncoder.A(serialDescriptor, 32, p0.f25318a, guildInviteDisabledEmbedImpl.getTitleColor());
        }
        if (compositeEncoder.z(serialDescriptor, 33) || guildInviteDisabledEmbedImpl.getExtendedType() != CodedLinkExtendedType.GUILD_INVITE_DISABLED) {
            compositeEncoder.l(serialDescriptor, 33, CodedLinkExtendedType.Serializer.INSTANCE, guildInviteDisabledEmbedImpl.getExtendedType());
        }
        compositeEncoder.x(serialDescriptor, 34, guildInviteDisabledEmbedImpl.getGuildName());
        if (compositeEncoder.z(serialDescriptor, 35) || guildInviteDisabledEmbedImpl.getGuildIcon() != null) {
            compositeEncoder.A(serialDescriptor, 35, n2.f25302a, guildInviteDisabledEmbedImpl.getGuildIcon());
        }
        if (compositeEncoder.z(serialDescriptor, 36) || guildInviteDisabledEmbedImpl.getHeaderIcon() != null) {
            compositeEncoder.A(serialDescriptor, 36, n2.f25302a, guildInviteDisabledEmbedImpl.getHeaderIcon());
        }
        if (compositeEncoder.z(serialDescriptor, 37) || guildInviteDisabledEmbedImpl.getBadgeIconUrl() != null) {
            compositeEncoder.A(serialDescriptor, 37, n2.f25302a, guildInviteDisabledEmbedImpl.getBadgeIconUrl());
        }
    }

    public final int component1() {
        return this.backgroundColor;
    }

    public final Integer component10() {
        return this.acceptLabelBackgroundColor;
    }

    public final Integer component11() {
        return this.acceptLabelBorderColor;
    }

    public final Integer component12() {
        return this.acceptLabelColor;
    }

    public final String component13() {
        return this.acceptLabelText;
    }

    public final String component14() {
        return this.bodyText;
    }

    public final Integer component15() {
        return this.bodyTextColor;
    }

    public final Boolean component16() {
        return this.canBeAccepted;
    }

    public final String component17() {
        return this.channelIcon;
    }

    public final String component18() {
        return this.channelName;
    }

    public final Boolean component19() {
        return this.embedCanBeTapped;
    }

    public final int component2() {
        return this.borderColor;
    }

    public final String component20() {
        return this.memberText;
    }

    public final String component21() {
        return this.onlineText;
    }

    public final Integer component22() {
        return this.resolvingGradientEnd;
    }

    public final Integer component23() {
        return this.resolvingGradientStart;
    }

    public final Boolean component24() {
        return this.splashHasRadialGradient;
    }

    public final Integer component25() {
        return this.splashOpacity;
    }

    public final String component26() {
        return this.splashUrl;
    }

    public final String component27() {
        return this.inviteSplash;
    }

    public final Integer component28() {
        return this.subtitleColor;
    }

    public final Integer component29() {
        return this.thumbnailBackgroundColor;
    }

    public final int component3() {
        return this.headerColor;
    }

    public final Integer component30() {
        return this.thumbnailCornerRadius;
    }

    public final String component31() {
        return this.thumbnailText;
    }

    public final String component32() {
        return this.thumbnailUrl;
    }

    public final Integer component33() {
        return this.titleColor;
    }

    @NotNull
    public final CodedLinkExtendedType component34() {
        return this.extendedType;
    }

    @NotNull
    public final String component35() {
        return this.guildName;
    }

    public final String component36() {
        return this.guildIcon;
    }

    public final String component37() {
        return this.headerIcon;
    }

    public final String component38() {
        return this.badgeIconUrl;
    }

    @NotNull
    public final String component4() {
        return this.headerText;
    }

    @NotNull
    public final InviteType component5() {
        return this.type;
    }

    @NotNull
    public final String component6() {
        return this.titleText;
    }

    @NotNull
    public final String component7() {
        return this.subtitle;
    }

    @NotNull
    public final String component8() {
        return this.helpCenterArticleLabel;
    }

    @NotNull
    public final String component9() {
        return this.helpCenterArticleURL;
    }

    @NotNull
    public final GuildInviteDisabledEmbedImpl copy(int i10, int i11, int i12, @NotNull String headerText, @NotNull InviteType type, @NotNull String titleText, @NotNull String subtitle, @NotNull String helpCenterArticleLabel, @NotNull String helpCenterArticleURL, Integer num, Integer num2, Integer num3, String str, String str2, Integer num4, Boolean bool, String str3, String str4, Boolean bool2, String str5, String str6, Integer num5, Integer num6, Boolean bool3, Integer num7, String str7, String str8, Integer num8, Integer num9, Integer num10, String str9, String str10, Integer num11, @NotNull CodedLinkExtendedType extendedType, @NotNull String guildName, String str11, String str12, String str13) {
        Intrinsics.checkNotNullParameter(headerText, "headerText");
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(titleText, "titleText");
        Intrinsics.checkNotNullParameter(subtitle, "subtitle");
        Intrinsics.checkNotNullParameter(helpCenterArticleLabel, "helpCenterArticleLabel");
        Intrinsics.checkNotNullParameter(helpCenterArticleURL, "helpCenterArticleURL");
        Intrinsics.checkNotNullParameter(extendedType, "extendedType");
        Intrinsics.checkNotNullParameter(guildName, "guildName");
        return new GuildInviteDisabledEmbedImpl(i10, i11, i12, headerText, type, titleText, subtitle, helpCenterArticleLabel, helpCenterArticleURL, num, num2, num3, str, str2, num4, bool, str3, str4, bool2, str5, str6, num5, num6, bool3, num7, str7, str8, num8, num9, num10, str9, str10, num11, extendedType, guildName, str11, str12, str13);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GuildInviteDisabledEmbedImpl) {
            GuildInviteDisabledEmbedImpl guildInviteDisabledEmbedImpl = (GuildInviteDisabledEmbedImpl) obj;
            return this.backgroundColor == guildInviteDisabledEmbedImpl.backgroundColor && this.borderColor == guildInviteDisabledEmbedImpl.borderColor && this.headerColor == guildInviteDisabledEmbedImpl.headerColor && Intrinsics.areEqual(this.headerText, guildInviteDisabledEmbedImpl.headerText) && this.type == guildInviteDisabledEmbedImpl.type && Intrinsics.areEqual(this.titleText, guildInviteDisabledEmbedImpl.titleText) && Intrinsics.areEqual(this.subtitle, guildInviteDisabledEmbedImpl.subtitle) && Intrinsics.areEqual(this.helpCenterArticleLabel, guildInviteDisabledEmbedImpl.helpCenterArticleLabel) && Intrinsics.areEqual(this.helpCenterArticleURL, guildInviteDisabledEmbedImpl.helpCenterArticleURL) && Intrinsics.areEqual(this.acceptLabelBackgroundColor, guildInviteDisabledEmbedImpl.acceptLabelBackgroundColor) && Intrinsics.areEqual(this.acceptLabelBorderColor, guildInviteDisabledEmbedImpl.acceptLabelBorderColor) && Intrinsics.areEqual(this.acceptLabelColor, guildInviteDisabledEmbedImpl.acceptLabelColor) && Intrinsics.areEqual(this.acceptLabelText, guildInviteDisabledEmbedImpl.acceptLabelText) && Intrinsics.areEqual(this.bodyText, guildInviteDisabledEmbedImpl.bodyText) && Intrinsics.areEqual(this.bodyTextColor, guildInviteDisabledEmbedImpl.bodyTextColor) && Intrinsics.areEqual(this.canBeAccepted, guildInviteDisabledEmbedImpl.canBeAccepted) && Intrinsics.areEqual(this.channelIcon, guildInviteDisabledEmbedImpl.channelIcon) && Intrinsics.areEqual(this.channelName, guildInviteDisabledEmbedImpl.channelName) && Intrinsics.areEqual(this.embedCanBeTapped, guildInviteDisabledEmbedImpl.embedCanBeTapped) && Intrinsics.areEqual(this.memberText, guildInviteDisabledEmbedImpl.memberText) && Intrinsics.areEqual(this.onlineText, guildInviteDisabledEmbedImpl.onlineText) && Intrinsics.areEqual(this.resolvingGradientEnd, guildInviteDisabledEmbedImpl.resolvingGradientEnd) && Intrinsics.areEqual(this.resolvingGradientStart, guildInviteDisabledEmbedImpl.resolvingGradientStart) && Intrinsics.areEqual(this.splashHasRadialGradient, guildInviteDisabledEmbedImpl.splashHasRadialGradient) && Intrinsics.areEqual(this.splashOpacity, guildInviteDisabledEmbedImpl.splashOpacity) && Intrinsics.areEqual(this.splashUrl, guildInviteDisabledEmbedImpl.splashUrl) && Intrinsics.areEqual(this.inviteSplash, guildInviteDisabledEmbedImpl.inviteSplash) && Intrinsics.areEqual(this.subtitleColor, guildInviteDisabledEmbedImpl.subtitleColor) && Intrinsics.areEqual(this.thumbnailBackgroundColor, guildInviteDisabledEmbedImpl.thumbnailBackgroundColor) && Intrinsics.areEqual(this.thumbnailCornerRadius, guildInviteDisabledEmbedImpl.thumbnailCornerRadius) && Intrinsics.areEqual(this.thumbnailText, guildInviteDisabledEmbedImpl.thumbnailText) && Intrinsics.areEqual(this.thumbnailUrl, guildInviteDisabledEmbedImpl.thumbnailUrl) && Intrinsics.areEqual(this.titleColor, guildInviteDisabledEmbedImpl.titleColor) && this.extendedType == guildInviteDisabledEmbedImpl.extendedType && Intrinsics.areEqual(this.guildName, guildInviteDisabledEmbedImpl.guildName) && Intrinsics.areEqual(this.guildIcon, guildInviteDisabledEmbedImpl.guildIcon) && Intrinsics.areEqual(this.headerIcon, guildInviteDisabledEmbedImpl.headerIcon) && Intrinsics.areEqual(this.badgeIconUrl, guildInviteDisabledEmbedImpl.badgeIconUrl);
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

    @Override // com.discord.chat.bridge.codedlinks.GuildInviteExtendedEmbed
    @NotNull
    public CodedLinkExtendedType getExtendedType() {
        return this.extendedType;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildInviteExtendedEmbed
    public String getGuildIcon() {
        return this.guildIcon;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildInviteExtendedEmbed
    @NotNull
    public String getGuildName() {
        return this.guildName;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public int getHeaderColor() {
        return this.headerColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildInviteExtendedEmbed
    public String getHeaderIcon() {
        return this.headerIcon;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    @NotNull
    public String getHeaderText() {
        return this.headerText;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildDisabledInviteEmbed
    @NotNull
    public String getHelpCenterArticleLabel() {
        return this.helpCenterArticleLabel;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildDisabledInviteEmbed
    @NotNull
    public String getHelpCenterArticleURL() {
        return this.helpCenterArticleURL;
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
    @NotNull
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
    @NotNull
    public String getTitleText() {
        return this.titleText;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    @NotNull
    public InviteType getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((((((((((((((((Integer.hashCode(this.backgroundColor) * 31) + Integer.hashCode(this.borderColor)) * 31) + Integer.hashCode(this.headerColor)) * 31) + this.headerText.hashCode()) * 31) + this.type.hashCode()) * 31) + this.titleText.hashCode()) * 31) + this.subtitle.hashCode()) * 31) + this.helpCenterArticleLabel.hashCode()) * 31) + this.helpCenterArticleURL.hashCode()) * 31;
        Integer num = this.acceptLabelBackgroundColor;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.acceptLabelBorderColor;
        int hashCode3 = (hashCode2 + (num2 == null ? 0 : num2.hashCode())) * 31;
        Integer num3 = this.acceptLabelColor;
        int hashCode4 = (hashCode3 + (num3 == null ? 0 : num3.hashCode())) * 31;
        String str = this.acceptLabelText;
        int hashCode5 = (hashCode4 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.bodyText;
        int hashCode6 = (hashCode5 + (str2 == null ? 0 : str2.hashCode())) * 31;
        Integer num4 = this.bodyTextColor;
        int hashCode7 = (hashCode6 + (num4 == null ? 0 : num4.hashCode())) * 31;
        Boolean bool = this.canBeAccepted;
        int hashCode8 = (hashCode7 + (bool == null ? 0 : bool.hashCode())) * 31;
        String str3 = this.channelIcon;
        int hashCode9 = (hashCode8 + (str3 == null ? 0 : str3.hashCode())) * 31;
        String str4 = this.channelName;
        int hashCode10 = (hashCode9 + (str4 == null ? 0 : str4.hashCode())) * 31;
        Boolean bool2 = this.embedCanBeTapped;
        int hashCode11 = (hashCode10 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        String str5 = this.memberText;
        int hashCode12 = (hashCode11 + (str5 == null ? 0 : str5.hashCode())) * 31;
        String str6 = this.onlineText;
        int hashCode13 = (hashCode12 + (str6 == null ? 0 : str6.hashCode())) * 31;
        Integer num5 = this.resolvingGradientEnd;
        int hashCode14 = (hashCode13 + (num5 == null ? 0 : num5.hashCode())) * 31;
        Integer num6 = this.resolvingGradientStart;
        int hashCode15 = (hashCode14 + (num6 == null ? 0 : num6.hashCode())) * 31;
        Boolean bool3 = this.splashHasRadialGradient;
        int hashCode16 = (hashCode15 + (bool3 == null ? 0 : bool3.hashCode())) * 31;
        Integer num7 = this.splashOpacity;
        int hashCode17 = (hashCode16 + (num7 == null ? 0 : num7.hashCode())) * 31;
        String str7 = this.splashUrl;
        int hashCode18 = (hashCode17 + (str7 == null ? 0 : str7.hashCode())) * 31;
        String str8 = this.inviteSplash;
        int hashCode19 = (hashCode18 + (str8 == null ? 0 : str8.hashCode())) * 31;
        Integer num8 = this.subtitleColor;
        int hashCode20 = (hashCode19 + (num8 == null ? 0 : num8.hashCode())) * 31;
        Integer num9 = this.thumbnailBackgroundColor;
        int hashCode21 = (hashCode20 + (num9 == null ? 0 : num9.hashCode())) * 31;
        Integer num10 = this.thumbnailCornerRadius;
        int hashCode22 = (hashCode21 + (num10 == null ? 0 : num10.hashCode())) * 31;
        String str9 = this.thumbnailText;
        int hashCode23 = (hashCode22 + (str9 == null ? 0 : str9.hashCode())) * 31;
        String str10 = this.thumbnailUrl;
        int hashCode24 = (hashCode23 + (str10 == null ? 0 : str10.hashCode())) * 31;
        Integer num11 = this.titleColor;
        int hashCode25 = (((((hashCode24 + (num11 == null ? 0 : num11.hashCode())) * 31) + this.extendedType.hashCode()) * 31) + this.guildName.hashCode()) * 31;
        String str11 = this.guildIcon;
        int hashCode26 = (hashCode25 + (str11 == null ? 0 : str11.hashCode())) * 31;
        String str12 = this.headerIcon;
        int hashCode27 = (hashCode26 + (str12 == null ? 0 : str12.hashCode())) * 31;
        String str13 = this.badgeIconUrl;
        return hashCode27 + (str13 != null ? str13.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        int i10 = this.backgroundColor;
        int i11 = this.borderColor;
        int i12 = this.headerColor;
        String str = this.headerText;
        InviteType inviteType = this.type;
        String str2 = this.titleText;
        String str3 = this.subtitle;
        String str4 = this.helpCenterArticleLabel;
        String str5 = this.helpCenterArticleURL;
        Integer num = this.acceptLabelBackgroundColor;
        Integer num2 = this.acceptLabelBorderColor;
        Integer num3 = this.acceptLabelColor;
        String str6 = this.acceptLabelText;
        String str7 = this.bodyText;
        Integer num4 = this.bodyTextColor;
        Boolean bool = this.canBeAccepted;
        String str8 = this.channelIcon;
        String str9 = this.channelName;
        Boolean bool2 = this.embedCanBeTapped;
        String str10 = this.memberText;
        String str11 = this.onlineText;
        Integer num5 = this.resolvingGradientEnd;
        Integer num6 = this.resolvingGradientStart;
        Boolean bool3 = this.splashHasRadialGradient;
        Integer num7 = this.splashOpacity;
        String str12 = this.splashUrl;
        String str13 = this.inviteSplash;
        Integer num8 = this.subtitleColor;
        Integer num9 = this.thumbnailBackgroundColor;
        Integer num10 = this.thumbnailCornerRadius;
        String str14 = this.thumbnailText;
        String str15 = this.thumbnailUrl;
        Integer num11 = this.titleColor;
        CodedLinkExtendedType codedLinkExtendedType = this.extendedType;
        String str16 = this.guildName;
        String str17 = this.guildIcon;
        String str18 = this.headerIcon;
        String str19 = this.badgeIconUrl;
        return "GuildInviteDisabledEmbedImpl(backgroundColor=" + i10 + ", borderColor=" + i11 + ", headerColor=" + i12 + ", headerText=" + str + ", type=" + inviteType + ", titleText=" + str2 + ", subtitle=" + str3 + ", helpCenterArticleLabel=" + str4 + ", helpCenterArticleURL=" + str5 + ", acceptLabelBackgroundColor=" + num + ", acceptLabelBorderColor=" + num2 + ", acceptLabelColor=" + num3 + ", acceptLabelText=" + str6 + ", bodyText=" + str7 + ", bodyTextColor=" + num4 + ", canBeAccepted=" + bool + ", channelIcon=" + str8 + ", channelName=" + str9 + ", embedCanBeTapped=" + bool2 + ", memberText=" + str10 + ", onlineText=" + str11 + ", resolvingGradientEnd=" + num5 + ", resolvingGradientStart=" + num6 + ", splashHasRadialGradient=" + bool3 + ", splashOpacity=" + num7 + ", splashUrl=" + str12 + ", inviteSplash=" + str13 + ", subtitleColor=" + num8 + ", thumbnailBackgroundColor=" + num9 + ", thumbnailCornerRadius=" + num10 + ", thumbnailText=" + str14 + ", thumbnailUrl=" + str15 + ", titleColor=" + num11 + ", extendedType=" + codedLinkExtendedType + ", guildName=" + str16 + ", guildIcon=" + str17 + ", headerIcon=" + str18 + ", badgeIconUrl=" + str19 + ")";
    }

    public /* synthetic */ GuildInviteDisabledEmbedImpl(int i10, int i11, int i12, String str, InviteType inviteType, String str2, String str3, String str4, String str5, Integer num, Integer num2, Integer num3, String str6, String str7, Integer num4, Boolean bool, String str8, String str9, Boolean bool2, String str10, String str11, Integer num5, Integer num6, Boolean bool3, Integer num7, String str12, String str13, Integer num8, Integer num9, Integer num10, String str14, String str15, Integer num11, CodedLinkExtendedType codedLinkExtendedType, String str16, String str17, String str18, String str19, int i13, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, str, inviteType, str2, str3, str4, str5, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : num, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : num2, (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : num3, (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : str6, (i13 & 8192) != 0 ? null : str7, (i13 & 16384) != 0 ? null : num4, (32768 & i13) != 0 ? null : bool, (65536 & i13) != 0 ? null : str8, (131072 & i13) != 0 ? null : str9, (262144 & i13) != 0 ? null : bool2, (524288 & i13) != 0 ? null : str10, (1048576 & i13) != 0 ? null : str11, (2097152 & i13) != 0 ? null : num5, (4194304 & i13) != 0 ? null : num6, (8388608 & i13) != 0 ? null : bool3, (16777216 & i13) != 0 ? null : num7, (33554432 & i13) != 0 ? null : str12, (67108864 & i13) != 0 ? null : str13, (134217728 & i13) != 0 ? null : num8, (268435456 & i13) != 0 ? null : num9, (536870912 & i13) != 0 ? null : num10, (1073741824 & i13) != 0 ? null : str14, (i13 & Integer.MIN_VALUE) != 0 ? null : str15, (i14 & 1) != 0 ? null : num11, (i14 & 2) != 0 ? CodedLinkExtendedType.GUILD_INVITE_DISABLED : codedLinkExtendedType, str16, (i14 & 8) != 0 ? null : str17, (i14 & 16) != 0 ? null : str18, (i14 & 32) != 0 ? null : str19);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GuildInviteDisabledEmbedImpl(int i10, int i11, int i12, @NotNull String headerText, @NotNull InviteType type, @NotNull String titleText, @NotNull String subtitle, @NotNull String helpCenterArticleLabel, @NotNull String helpCenterArticleURL, Integer num, Integer num2, Integer num3, String str, String str2, Integer num4, Boolean bool, String str3, String str4, Boolean bool2, String str5, String str6, Integer num5, Integer num6, Boolean bool3, Integer num7, String str7, String str8, Integer num8, Integer num9, Integer num10, String str9, String str10, Integer num11, @NotNull CodedLinkExtendedType extendedType, @NotNull String guildName, String str11, String str12, String str13) {
        super(null);
        Intrinsics.checkNotNullParameter(headerText, "headerText");
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(titleText, "titleText");
        Intrinsics.checkNotNullParameter(subtitle, "subtitle");
        Intrinsics.checkNotNullParameter(helpCenterArticleLabel, "helpCenterArticleLabel");
        Intrinsics.checkNotNullParameter(helpCenterArticleURL, "helpCenterArticleURL");
        Intrinsics.checkNotNullParameter(extendedType, "extendedType");
        Intrinsics.checkNotNullParameter(guildName, "guildName");
        this.backgroundColor = i10;
        this.borderColor = i11;
        this.headerColor = i12;
        this.headerText = headerText;
        this.type = type;
        this.titleText = titleText;
        this.subtitle = subtitle;
        this.helpCenterArticleLabel = helpCenterArticleLabel;
        this.helpCenterArticleURL = helpCenterArticleURL;
        this.acceptLabelBackgroundColor = num;
        this.acceptLabelBorderColor = num2;
        this.acceptLabelColor = num3;
        this.acceptLabelText = str;
        this.bodyText = str2;
        this.bodyTextColor = num4;
        this.canBeAccepted = bool;
        this.channelIcon = str3;
        this.channelName = str4;
        this.embedCanBeTapped = bool2;
        this.memberText = str5;
        this.onlineText = str6;
        this.resolvingGradientEnd = num5;
        this.resolvingGradientStart = num6;
        this.splashHasRadialGradient = bool3;
        this.splashOpacity = num7;
        this.splashUrl = str7;
        this.inviteSplash = str8;
        this.subtitleColor = num8;
        this.thumbnailBackgroundColor = num9;
        this.thumbnailCornerRadius = num10;
        this.thumbnailText = str9;
        this.thumbnailUrl = str10;
        this.titleColor = num11;
        this.extendedType = extendedType;
        this.guildName = guildName;
        this.guildIcon = str11;
        this.headerIcon = str12;
        this.badgeIconUrl = str13;
    }
}
