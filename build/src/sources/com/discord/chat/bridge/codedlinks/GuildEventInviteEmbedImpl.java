package com.discord.chat.bridge.codedlinks;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.codedlinks.CodedLinkExtendedType;
import com.discord.chat.bridge.codedlinks.InviteType;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.structurabletext.StructurableTextSerializer;
import com.discord.notifications.renderer.NotificationRenderer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
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
@m
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u001e\n\u0002\u0018\u0002\n\u0002\be\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u00ad\u00012\u00020\u00012\u00020\u00022\u00020\u0003:\u0004¬\u0001\u00ad\u0001B\u0087\u0004\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0002\u0010\u0007\u001a\u00020\b\u0012\b\b\u0001\u0010\t\u001a\u00020\u0005\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\r\u0012\n\b\u0003\u0010\u000e\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0003\u0010\u000f\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0003\u0010\u0016\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u001c\u0012\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0003\u0010\"\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010#\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010(\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010)\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010*\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010+\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010,\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010-\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0003\u0010.\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0003\u0010/\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u00100\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u00101\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u00102\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0003\u00103\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u00104\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u00105\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b6\u00107BÕ\u0003\b\u0010\u0012\u0006\u00108\u001a\u00020\u0005\u0012\u0006\u00109\u001a\u00020\u0005\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u001c\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010 \u001a\u0004\u0018\u00010\u000b\u0012\b\u0010!\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\"\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010#\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010$\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010%\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010&\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010'\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010(\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010)\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010*\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010+\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010,\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010-\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010.\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010/\u001a\u0004\u0018\u00010\u0005\u0012\b\u00100\u001a\u0004\u0018\u00010\u0005\u0012\b\u00101\u001a\u0004\u0018\u00010\u000b\u0012\b\u00102\u001a\u0004\u0018\u00010\u000b\u0012\b\u00103\u001a\u0004\u0018\u00010\u0005\u0012\b\u00104\u001a\u0004\u0018\u00010\u000b\u0012\b\u00105\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010:\u001a\u0004\u0018\u00010;¢\u0006\u0004\b6\u0010<J\t\u0010q\u001a\u00020\u0005HÆ\u0003J\t\u0010r\u001a\u00020\u0005HÆ\u0003J\t\u0010s\u001a\u00020\bHÆ\u0003J\t\u0010t\u001a\u00020\u0005HÆ\u0003J\t\u0010u\u001a\u00020\u000bHÆ\u0003J\t\u0010v\u001a\u00020\rHÆ\u0003J\u0010\u0010w\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\u0010\u0010x\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\u0010\u0010y\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\u000b\u0010z\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u000b\u0010{\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u000b\u0010|\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u000b\u0010}\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u000b\u0010~\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u0010\u0010\u007f\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\u0011\u0010\u0080\u0001\u001a\u0004\u0018\u00010\u0018HÆ\u0003¢\u0006\u0002\u0010SJ\f\u0010\u0081\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\f\u0010\u0082\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\f\u0010\u0083\u0001\u001a\u0004\u0018\u00010\u001cHÆ\u0003J\f\u0010\u0084\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u0011\u0010\u0085\u0001\u001a\u0004\u0018\u00010\u0018HÆ\u0003¢\u0006\u0002\u0010SJ\f\u0010\u0086\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\f\u0010\u0087\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\f\u0010\u0088\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u0011\u0010\u0089\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\u0011\u0010\u008a\u0001\u001a\u0004\u0018\u00010\u0018HÆ\u0003¢\u0006\u0002\u0010SJ\f\u0010\u008b\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\f\u0010\u008c\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u0011\u0010\u008d\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\u0011\u0010\u008e\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\f\u0010\u008f\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u0011\u0010\u0090\u0001\u001a\u0004\u0018\u00010\u0018HÆ\u0003¢\u0006\u0002\u0010SJ\u0011\u0010\u0091\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\f\u0010\u0092\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\f\u0010\u0093\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\f\u0010\u0094\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u0011\u0010\u0095\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\u0011\u0010\u0096\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\u0011\u0010\u0097\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\f\u0010\u0098\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\f\u0010\u0099\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u0011\u0010\u009a\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010HJ\f\u0010\u009b\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\f\u0010\u009c\u0001\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u0094\u0004\u0010\u009d\u0001\u001a\u00020\u00002\b\b\u0003\u0010\u0004\u001a\u00020\u00052\b\b\u0003\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0003\u0010\t\u001a\u00020\u00052\b\b\u0002\u0010\n\u001a\u00020\u000b2\b\b\u0002\u0010\f\u001a\u00020\r2\n\b\u0003\u0010\u000e\u001a\u0004\u0018\u00010\u00052\n\b\u0003\u0010\u000f\u001a\u0004\u0018\u00010\u00052\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u000b2\n\b\u0003\u0010\u0016\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u001c2\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\u000b2\n\b\u0003\u0010\"\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010#\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010(\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010)\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010*\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010+\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010,\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010-\u001a\u0004\u0018\u00010\u000b2\n\b\u0003\u0010.\u001a\u0004\u0018\u00010\u00052\n\b\u0003\u0010/\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u00100\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u00101\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u00102\u001a\u0004\u0018\u00010\u000b2\n\b\u0003\u00103\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u00104\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u00105\u001a\u0004\u0018\u00010\u000bHÆ\u0001¢\u0006\u0003\u0010\u009e\u0001J\u0016\u0010\u009f\u0001\u001a\u00020\u00182\n\u0010 \u0001\u001a\u0005\u0018\u00010¡\u0001HÖ\u0003J\n\u0010¢\u0001\u001a\u00020\u0005HÖ\u0001J\n\u0010£\u0001\u001a\u00020\u000bHÖ\u0001J-\u0010¤\u0001\u001a\u00030¥\u00012\u0007\u0010¦\u0001\u001a\u00020\u00002\b\u0010§\u0001\u001a\u00030¨\u00012\b\u0010©\u0001\u001a\u00030ª\u0001H\u0001¢\u0006\u0003\b«\u0001R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b=\u0010>R\u0014\u0010\u0006\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b?\u0010>R\u0014\u0010\u0007\u001a\u00020\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b@\u0010AR\u0014\u0010\t\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bB\u0010>R\u0014\u0010\n\u001a\u00020\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bC\u0010DR\u0014\u0010\f\u001a\u00020\rX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bE\u0010FR\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\bG\u0010HR\u0018\u0010\u000f\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\bJ\u0010HR\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\bK\u0010HR\u0016\u0010\u0011\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bL\u0010DR\u0016\u0010\u0012\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bM\u0010DR\u0016\u0010\u0013\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bN\u0010DR\u0016\u0010\u0014\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bO\u0010DR\u0016\u0010\u0015\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bP\u0010DR\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\bQ\u0010HR\u0018\u0010\u0017\u001a\u0004\u0018\u00010\u0018X\u0096\u0004¢\u0006\n\n\u0002\u0010T\u001a\u0004\bR\u0010SR\u0016\u0010\u0019\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bU\u0010DR\u0016\u0010\u001a\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bV\u0010DR\u0016\u0010\u001b\u001a\u0004\u0018\u00010\u001cX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bW\u0010XR\u0016\u0010\u001d\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bY\u0010DR\u0018\u0010\u001e\u001a\u0004\u0018\u00010\u0018X\u0096\u0004¢\u0006\n\n\u0002\u0010T\u001a\u0004\bZ\u0010SR\u0016\u0010\u001f\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b[\u0010DR\u0016\u0010 \u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\\\u0010DR\u0016\u0010!\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b]\u0010DR\u0018\u0010\"\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\b^\u0010HR\u0018\u0010#\u001a\u0004\u0018\u00010\u0018X\u0096\u0004¢\u0006\n\n\u0002\u0010T\u001a\u0004\b#\u0010SR\u0016\u0010$\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b_\u0010DR\u0016\u0010%\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b`\u0010DR\u0018\u0010&\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\ba\u0010HR\u0018\u0010'\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\bb\u0010HR\u0016\u0010(\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bc\u0010DR\u0018\u0010)\u001a\u0004\u0018\u00010\u0018X\u0096\u0004¢\u0006\n\n\u0002\u0010T\u001a\u0004\bd\u0010SR\u0018\u0010*\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\be\u0010HR\u0016\u0010+\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bf\u0010DR\u0016\u0010,\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bg\u0010DR\u0016\u0010-\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bh\u0010DR\u0018\u0010.\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\bi\u0010HR\u0018\u0010/\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\bj\u0010HR\u0018\u00100\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\bk\u0010HR\u0016\u00101\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bl\u0010DR\u0016\u00102\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bm\u0010DR\u0018\u00103\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010I\u001a\u0004\bn\u0010HR\u0016\u00104\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bo\u0010DR\u0016\u00105\u001a\u0004\u0018\u00010\u000bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bp\u0010D¨\u0006®\u0001"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/GuildEventInviteEmbedImpl;", "Lcom/discord/chat/bridge/codedlinks/CodedLinkEmbed;", "Lcom/discord/chat/bridge/codedlinks/GuildEventInviteEmbed;", "Lcom/discord/chat/bridge/codedlinks/GuildInviteExtendedEmbed;", ViewProps.BACKGROUND_COLOR, "", ViewProps.BORDER_COLOR, "extendedType", "Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "headerColor", "headerText", "", "type", "Lcom/discord/chat/bridge/codedlinks/InviteType;", "acceptLabelBackgroundColor", "acceptLabelBorderColor", "acceptLabelColor", "acceptLabelIcon", "acceptLabelText", "badgeCount", "badgeIcon", "bodyText", "bodyTextColor", "canBeAccepted", "", "channelIcon", NotificationRenderer.CHANNEL_NAME, "content", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "creatorAvatar", "embedCanBeTapped", "guildIcon", "guildName", "headerIcon", "headerTextColor", "isRsvped", "memberText", "onlineText", "resolvingGradientEnd", "resolvingGradientStart", "secondaryActionIcon", "splashHasRadialGradient", "splashOpacity", "splashUrl", "inviteSplash", "subtitle", "subtitleColor", "thumbnailBackgroundColor", "thumbnailCornerRadius", "thumbnailText", "thumbnailUrl", "titleColor", "titleText", "badgeIconUrl", "<init>", "(IILcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;ILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "seen1", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIIILcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;ILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBackgroundColor", "()I", "getBorderColor", "getExtendedType", "()Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "getHeaderColor", "getHeaderText", "()Ljava/lang/String;", "getType", "()Lcom/discord/chat/bridge/codedlinks/InviteType;", "getAcceptLabelBackgroundColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getAcceptLabelBorderColor", "getAcceptLabelColor", "getAcceptLabelIcon", "getAcceptLabelText", "getBadgeCount", "getBadgeIcon", "getBodyText", "getBodyTextColor", "getCanBeAccepted", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getChannelIcon", "getChannelName", "getContent", "()Lcom/discord/chat/bridge/structurabletext/StructurableText;", "getCreatorAvatar", "getEmbedCanBeTapped", "getGuildIcon", "getGuildName", "getHeaderIcon", "getHeaderTextColor", "getMemberText", "getOnlineText", "getResolvingGradientEnd", "getResolvingGradientStart", "getSecondaryActionIcon", "getSplashHasRadialGradient", "getSplashOpacity", "getSplashUrl", "getInviteSplash", "getSubtitle", "getSubtitleColor", "getThumbnailBackgroundColor", "getThumbnailCornerRadius", "getThumbnailText", "getThumbnailUrl", "getTitleColor", "getTitleText", "getBadgeIconUrl", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "component23", "component24", "component25", "component26", "component27", "component28", "component29", "component30", "component31", "component32", "component33", "component34", "component35", "component36", "component37", "component38", "component39", "component40", "component41", "component42", "component43", "component44", "copy", "(IILcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;ILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/chat/bridge/codedlinks/GuildEventInviteEmbedImpl;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildEventInviteEmbedImpl extends CodedLinkEmbed implements GuildEventInviteEmbed, GuildInviteExtendedEmbed {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Integer acceptLabelBackgroundColor;
    private final Integer acceptLabelBorderColor;
    private final Integer acceptLabelColor;
    private final String acceptLabelIcon;
    private final String acceptLabelText;
    private final int backgroundColor;
    private final String badgeCount;
    private final String badgeIcon;
    private final String badgeIconUrl;
    private final String bodyText;
    private final Integer bodyTextColor;
    private final int borderColor;
    private final Boolean canBeAccepted;
    private final String channelIcon;
    private final String channelName;
    private final StructurableText content;
    private final String creatorAvatar;
    private final Boolean embedCanBeTapped;
    @NotNull
    private final CodedLinkExtendedType extendedType;
    private final String guildIcon;
    private final String guildName;
    private final int headerColor;
    private final String headerIcon;
    @NotNull
    private final String headerText;
    private final Integer headerTextColor;
    private final String inviteSplash;
    private final Boolean isRsvped;
    private final String memberText;
    private final String onlineText;
    private final Integer resolvingGradientEnd;
    private final Integer resolvingGradientStart;
    private final String secondaryActionIcon;
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

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/GuildEventInviteEmbedImpl$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/codedlinks/GuildEventInviteEmbedImpl;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return GuildEventInviteEmbedImpl$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ GuildEventInviteEmbedImpl(int i10, int i11, int i12, int i13, CodedLinkExtendedType codedLinkExtendedType, int i14, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, String str4, String str5, String str6, Integer num4, Boolean bool, String str7, String str8, StructurableText structurableText, String str9, Boolean bool2, String str10, String str11, String str12, Integer num5, Boolean bool3, String str13, String str14, Integer num6, Integer num7, String str15, Boolean bool4, Integer num8, String str16, String str17, String str18, Integer num9, Integer num10, Integer num11, String str19, String str20, Integer num12, String str21, String str22, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (59 != (i10 & 59)) {
            v1.a(new int[]{i10, i11}, new int[]{59, 0}, GuildEventInviteEmbedImpl$$serializer.INSTANCE.getDescriptor());
        }
        this.backgroundColor = i12;
        this.borderColor = i13;
        if ((i10 & 4) == 0) {
            this.extendedType = CodedLinkExtendedType.GUILD_SCHEDULED_EVENT;
        } else {
            this.extendedType = codedLinkExtendedType;
        }
        this.headerColor = i14;
        this.headerText = str;
        this.type = inviteType;
        if ((i10 & 64) == 0) {
            this.acceptLabelBackgroundColor = null;
        } else {
            this.acceptLabelBackgroundColor = num;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.acceptLabelBorderColor = null;
        } else {
            this.acceptLabelBorderColor = num2;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.acceptLabelColor = null;
        } else {
            this.acceptLabelColor = num3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.acceptLabelIcon = null;
        } else {
            this.acceptLabelIcon = str2;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.acceptLabelText = null;
        } else {
            this.acceptLabelText = str3;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.badgeCount = null;
        } else {
            this.badgeCount = str4;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.badgeIcon = null;
        } else {
            this.badgeIcon = str5;
        }
        if ((i10 & 8192) == 0) {
            this.bodyText = null;
        } else {
            this.bodyText = str6;
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
            this.channelIcon = str7;
        }
        if ((131072 & i10) == 0) {
            this.channelName = null;
        } else {
            this.channelName = str8;
        }
        if ((262144 & i10) == 0) {
            this.content = null;
        } else {
            this.content = structurableText;
        }
        if ((524288 & i10) == 0) {
            this.creatorAvatar = null;
        } else {
            this.creatorAvatar = str9;
        }
        if ((1048576 & i10) == 0) {
            this.embedCanBeTapped = null;
        } else {
            this.embedCanBeTapped = bool2;
        }
        if ((2097152 & i10) == 0) {
            this.guildIcon = null;
        } else {
            this.guildIcon = str10;
        }
        if ((4194304 & i10) == 0) {
            this.guildName = null;
        } else {
            this.guildName = str11;
        }
        if ((8388608 & i10) == 0) {
            this.headerIcon = null;
        } else {
            this.headerIcon = str12;
        }
        if ((16777216 & i10) == 0) {
            this.headerTextColor = null;
        } else {
            this.headerTextColor = num5;
        }
        if ((33554432 & i10) == 0) {
            this.isRsvped = null;
        } else {
            this.isRsvped = bool3;
        }
        if ((67108864 & i10) == 0) {
            this.memberText = null;
        } else {
            this.memberText = str13;
        }
        if ((134217728 & i10) == 0) {
            this.onlineText = null;
        } else {
            this.onlineText = str14;
        }
        if ((268435456 & i10) == 0) {
            this.resolvingGradientEnd = null;
        } else {
            this.resolvingGradientEnd = num6;
        }
        if ((536870912 & i10) == 0) {
            this.resolvingGradientStart = null;
        } else {
            this.resolvingGradientStart = num7;
        }
        if ((1073741824 & i10) == 0) {
            this.secondaryActionIcon = null;
        } else {
            this.secondaryActionIcon = str15;
        }
        if ((i10 & Integer.MIN_VALUE) == 0) {
            this.splashHasRadialGradient = null;
        } else {
            this.splashHasRadialGradient = bool4;
        }
        if ((i11 & 1) == 0) {
            this.splashOpacity = null;
        } else {
            this.splashOpacity = num8;
        }
        if ((i11 & 2) == 0) {
            this.splashUrl = null;
        } else {
            this.splashUrl = str16;
        }
        if ((i11 & 4) == 0) {
            this.inviteSplash = null;
        } else {
            this.inviteSplash = str17;
        }
        if ((i11 & 8) == 0) {
            this.subtitle = null;
        } else {
            this.subtitle = str18;
        }
        if ((i11 & 16) == 0) {
            this.subtitleColor = null;
        } else {
            this.subtitleColor = num9;
        }
        if ((i11 & 32) == 0) {
            this.thumbnailBackgroundColor = null;
        } else {
            this.thumbnailBackgroundColor = num10;
        }
        if ((i11 & 64) == 0) {
            this.thumbnailCornerRadius = null;
        } else {
            this.thumbnailCornerRadius = num11;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.thumbnailText = null;
        } else {
            this.thumbnailText = str19;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.thumbnailUrl = null;
        } else {
            this.thumbnailUrl = str20;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.titleColor = null;
        } else {
            this.titleColor = num12;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.titleText = null;
        } else {
            this.titleText = str21;
        }
        if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.badgeIconUrl = null;
        } else {
            this.badgeIconUrl = str22;
        }
    }

    public static final /* synthetic */ void write$Self$chat_release(GuildEventInviteEmbedImpl guildEventInviteEmbedImpl, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, guildEventInviteEmbedImpl.getBackgroundColor());
        compositeEncoder.x(serialDescriptor, 1, guildEventInviteEmbedImpl.getBorderColor());
        if (compositeEncoder.A(serialDescriptor, 2) || guildEventInviteEmbedImpl.getExtendedType() != CodedLinkExtendedType.GUILD_SCHEDULED_EVENT) {
            compositeEncoder.s(serialDescriptor, 2, CodedLinkExtendedType.Serializer.INSTANCE, guildEventInviteEmbedImpl.getExtendedType());
        }
        compositeEncoder.x(serialDescriptor, 3, guildEventInviteEmbedImpl.getHeaderColor());
        compositeEncoder.z(serialDescriptor, 4, guildEventInviteEmbedImpl.getHeaderText());
        compositeEncoder.s(serialDescriptor, 5, InviteType.Serializer.INSTANCE, guildEventInviteEmbedImpl.getType());
        if (compositeEncoder.A(serialDescriptor, 6) || guildEventInviteEmbedImpl.getAcceptLabelBackgroundColor() != null) {
            compositeEncoder.l(serialDescriptor, 6, p0.f31057a, guildEventInviteEmbedImpl.getAcceptLabelBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 7) || guildEventInviteEmbedImpl.getAcceptLabelBorderColor() != null) {
            compositeEncoder.l(serialDescriptor, 7, p0.f31057a, guildEventInviteEmbedImpl.getAcceptLabelBorderColor());
        }
        if (compositeEncoder.A(serialDescriptor, 8) || guildEventInviteEmbedImpl.getAcceptLabelColor() != null) {
            compositeEncoder.l(serialDescriptor, 8, p0.f31057a, guildEventInviteEmbedImpl.getAcceptLabelColor());
        }
        if (compositeEncoder.A(serialDescriptor, 9) || guildEventInviteEmbedImpl.getAcceptLabelIcon() != null) {
            compositeEncoder.l(serialDescriptor, 9, n2.f31041a, guildEventInviteEmbedImpl.getAcceptLabelIcon());
        }
        if (compositeEncoder.A(serialDescriptor, 10) || guildEventInviteEmbedImpl.getAcceptLabelText() != null) {
            compositeEncoder.l(serialDescriptor, 10, n2.f31041a, guildEventInviteEmbedImpl.getAcceptLabelText());
        }
        if (compositeEncoder.A(serialDescriptor, 11) || guildEventInviteEmbedImpl.getBadgeCount() != null) {
            compositeEncoder.l(serialDescriptor, 11, n2.f31041a, guildEventInviteEmbedImpl.getBadgeCount());
        }
        if (compositeEncoder.A(serialDescriptor, 12) || guildEventInviteEmbedImpl.getBadgeIcon() != null) {
            compositeEncoder.l(serialDescriptor, 12, n2.f31041a, guildEventInviteEmbedImpl.getBadgeIcon());
        }
        if (compositeEncoder.A(serialDescriptor, 13) || guildEventInviteEmbedImpl.getBodyText() != null) {
            compositeEncoder.l(serialDescriptor, 13, n2.f31041a, guildEventInviteEmbedImpl.getBodyText());
        }
        if (compositeEncoder.A(serialDescriptor, 14) || guildEventInviteEmbedImpl.getBodyTextColor() != null) {
            compositeEncoder.l(serialDescriptor, 14, p0.f31057a, guildEventInviteEmbedImpl.getBodyTextColor());
        }
        if (compositeEncoder.A(serialDescriptor, 15) || guildEventInviteEmbedImpl.getCanBeAccepted() != null) {
            compositeEncoder.l(serialDescriptor, 15, h.f31005a, guildEventInviteEmbedImpl.getCanBeAccepted());
        }
        if (compositeEncoder.A(serialDescriptor, 16) || guildEventInviteEmbedImpl.getChannelIcon() != null) {
            compositeEncoder.l(serialDescriptor, 16, n2.f31041a, guildEventInviteEmbedImpl.getChannelIcon());
        }
        if (compositeEncoder.A(serialDescriptor, 17) || guildEventInviteEmbedImpl.getChannelName() != null) {
            compositeEncoder.l(serialDescriptor, 17, n2.f31041a, guildEventInviteEmbedImpl.getChannelName());
        }
        if (compositeEncoder.A(serialDescriptor, 18) || guildEventInviteEmbedImpl.getContent() != null) {
            compositeEncoder.l(serialDescriptor, 18, StructurableTextSerializer.INSTANCE, guildEventInviteEmbedImpl.getContent());
        }
        if (compositeEncoder.A(serialDescriptor, 19) || guildEventInviteEmbedImpl.getCreatorAvatar() != null) {
            compositeEncoder.l(serialDescriptor, 19, n2.f31041a, guildEventInviteEmbedImpl.getCreatorAvatar());
        }
        if (compositeEncoder.A(serialDescriptor, 20) || guildEventInviteEmbedImpl.getEmbedCanBeTapped() != null) {
            compositeEncoder.l(serialDescriptor, 20, h.f31005a, guildEventInviteEmbedImpl.getEmbedCanBeTapped());
        }
        if (compositeEncoder.A(serialDescriptor, 21) || guildEventInviteEmbedImpl.getGuildIcon() != null) {
            compositeEncoder.l(serialDescriptor, 21, n2.f31041a, guildEventInviteEmbedImpl.getGuildIcon());
        }
        if (compositeEncoder.A(serialDescriptor, 22) || guildEventInviteEmbedImpl.getGuildName() != null) {
            compositeEncoder.l(serialDescriptor, 22, n2.f31041a, guildEventInviteEmbedImpl.getGuildName());
        }
        if (compositeEncoder.A(serialDescriptor, 23) || guildEventInviteEmbedImpl.getHeaderIcon() != null) {
            compositeEncoder.l(serialDescriptor, 23, n2.f31041a, guildEventInviteEmbedImpl.getHeaderIcon());
        }
        if (compositeEncoder.A(serialDescriptor, 24) || guildEventInviteEmbedImpl.getHeaderTextColor() != null) {
            compositeEncoder.l(serialDescriptor, 24, p0.f31057a, guildEventInviteEmbedImpl.getHeaderTextColor());
        }
        if (compositeEncoder.A(serialDescriptor, 25) || guildEventInviteEmbedImpl.isRsvped() != null) {
            compositeEncoder.l(serialDescriptor, 25, h.f31005a, guildEventInviteEmbedImpl.isRsvped());
        }
        if (compositeEncoder.A(serialDescriptor, 26) || guildEventInviteEmbedImpl.getMemberText() != null) {
            compositeEncoder.l(serialDescriptor, 26, n2.f31041a, guildEventInviteEmbedImpl.getMemberText());
        }
        if (compositeEncoder.A(serialDescriptor, 27) || guildEventInviteEmbedImpl.getOnlineText() != null) {
            compositeEncoder.l(serialDescriptor, 27, n2.f31041a, guildEventInviteEmbedImpl.getOnlineText());
        }
        if (compositeEncoder.A(serialDescriptor, 28) || guildEventInviteEmbedImpl.getResolvingGradientEnd() != null) {
            compositeEncoder.l(serialDescriptor, 28, p0.f31057a, guildEventInviteEmbedImpl.getResolvingGradientEnd());
        }
        if (compositeEncoder.A(serialDescriptor, 29) || guildEventInviteEmbedImpl.getResolvingGradientStart() != null) {
            compositeEncoder.l(serialDescriptor, 29, p0.f31057a, guildEventInviteEmbedImpl.getResolvingGradientStart());
        }
        if (compositeEncoder.A(serialDescriptor, 30) || guildEventInviteEmbedImpl.getSecondaryActionIcon() != null) {
            compositeEncoder.l(serialDescriptor, 30, n2.f31041a, guildEventInviteEmbedImpl.getSecondaryActionIcon());
        }
        if (compositeEncoder.A(serialDescriptor, 31) || guildEventInviteEmbedImpl.getSplashHasRadialGradient() != null) {
            compositeEncoder.l(serialDescriptor, 31, h.f31005a, guildEventInviteEmbedImpl.getSplashHasRadialGradient());
        }
        if (compositeEncoder.A(serialDescriptor, 32) || guildEventInviteEmbedImpl.getSplashOpacity() != null) {
            compositeEncoder.l(serialDescriptor, 32, p0.f31057a, guildEventInviteEmbedImpl.getSplashOpacity());
        }
        if (compositeEncoder.A(serialDescriptor, 33) || guildEventInviteEmbedImpl.getSplashUrl() != null) {
            compositeEncoder.l(serialDescriptor, 33, n2.f31041a, guildEventInviteEmbedImpl.getSplashUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 34) || guildEventInviteEmbedImpl.getInviteSplash() != null) {
            compositeEncoder.l(serialDescriptor, 34, n2.f31041a, guildEventInviteEmbedImpl.getInviteSplash());
        }
        if (compositeEncoder.A(serialDescriptor, 35) || guildEventInviteEmbedImpl.getSubtitle() != null) {
            compositeEncoder.l(serialDescriptor, 35, n2.f31041a, guildEventInviteEmbedImpl.getSubtitle());
        }
        if (compositeEncoder.A(serialDescriptor, 36) || guildEventInviteEmbedImpl.getSubtitleColor() != null) {
            compositeEncoder.l(serialDescriptor, 36, p0.f31057a, guildEventInviteEmbedImpl.getSubtitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 37) || guildEventInviteEmbedImpl.getThumbnailBackgroundColor() != null) {
            compositeEncoder.l(serialDescriptor, 37, p0.f31057a, guildEventInviteEmbedImpl.getThumbnailBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 38) || guildEventInviteEmbedImpl.getThumbnailCornerRadius() != null) {
            compositeEncoder.l(serialDescriptor, 38, p0.f31057a, guildEventInviteEmbedImpl.getThumbnailCornerRadius());
        }
        if (compositeEncoder.A(serialDescriptor, 39) || guildEventInviteEmbedImpl.getThumbnailText() != null) {
            compositeEncoder.l(serialDescriptor, 39, n2.f31041a, guildEventInviteEmbedImpl.getThumbnailText());
        }
        if (compositeEncoder.A(serialDescriptor, 40) || guildEventInviteEmbedImpl.getThumbnailUrl() != null) {
            compositeEncoder.l(serialDescriptor, 40, n2.f31041a, guildEventInviteEmbedImpl.getThumbnailUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 41) || guildEventInviteEmbedImpl.getTitleColor() != null) {
            compositeEncoder.l(serialDescriptor, 41, p0.f31057a, guildEventInviteEmbedImpl.getTitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 42) || guildEventInviteEmbedImpl.getTitleText() != null) {
            compositeEncoder.l(serialDescriptor, 42, n2.f31041a, guildEventInviteEmbedImpl.getTitleText());
        }
        if (!compositeEncoder.A(serialDescriptor, 43) && guildEventInviteEmbedImpl.getBadgeIconUrl() == null) {
            return;
        }
        compositeEncoder.l(serialDescriptor, 43, n2.f31041a, guildEventInviteEmbedImpl.getBadgeIconUrl());
    }

    public final int component1() {
        return this.backgroundColor;
    }

    public final String component10() {
        return this.acceptLabelIcon;
    }

    public final String component11() {
        return this.acceptLabelText;
    }

    public final String component12() {
        return this.badgeCount;
    }

    public final String component13() {
        return this.badgeIcon;
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

    public final StructurableText component19() {
        return this.content;
    }

    public final int component2() {
        return this.borderColor;
    }

    public final String component20() {
        return this.creatorAvatar;
    }

    public final Boolean component21() {
        return this.embedCanBeTapped;
    }

    public final String component22() {
        return this.guildIcon;
    }

    public final String component23() {
        return this.guildName;
    }

    public final String component24() {
        return this.headerIcon;
    }

    public final Integer component25() {
        return this.headerTextColor;
    }

    public final Boolean component26() {
        return this.isRsvped;
    }

    public final String component27() {
        return this.memberText;
    }

    public final String component28() {
        return this.onlineText;
    }

    public final Integer component29() {
        return this.resolvingGradientEnd;
    }

    @NotNull
    public final CodedLinkExtendedType component3() {
        return this.extendedType;
    }

    public final Integer component30() {
        return this.resolvingGradientStart;
    }

    public final String component31() {
        return this.secondaryActionIcon;
    }

    public final Boolean component32() {
        return this.splashHasRadialGradient;
    }

    public final Integer component33() {
        return this.splashOpacity;
    }

    public final String component34() {
        return this.splashUrl;
    }

    public final String component35() {
        return this.inviteSplash;
    }

    public final String component36() {
        return this.subtitle;
    }

    public final Integer component37() {
        return this.subtitleColor;
    }

    public final Integer component38() {
        return this.thumbnailBackgroundColor;
    }

    public final Integer component39() {
        return this.thumbnailCornerRadius;
    }

    public final int component4() {
        return this.headerColor;
    }

    public final String component40() {
        return this.thumbnailText;
    }

    public final String component41() {
        return this.thumbnailUrl;
    }

    public final Integer component42() {
        return this.titleColor;
    }

    public final String component43() {
        return this.titleText;
    }

    public final String component44() {
        return this.badgeIconUrl;
    }

    @NotNull
    public final String component5() {
        return this.headerText;
    }

    @NotNull
    public final InviteType component6() {
        return this.type;
    }

    public final Integer component7() {
        return this.acceptLabelBackgroundColor;
    }

    public final Integer component8() {
        return this.acceptLabelBorderColor;
    }

    public final Integer component9() {
        return this.acceptLabelColor;
    }

    @NotNull
    public final GuildEventInviteEmbedImpl copy(int i10, int i11, @NotNull CodedLinkExtendedType extendedType, int i12, @NotNull String headerText, @NotNull InviteType type, Integer num, Integer num2, Integer num3, String str, String str2, String str3, String str4, String str5, Integer num4, Boolean bool, String str6, String str7, StructurableText structurableText, String str8, Boolean bool2, String str9, String str10, String str11, Integer num5, Boolean bool3, String str12, String str13, Integer num6, Integer num7, String str14, Boolean bool4, Integer num8, String str15, String str16, String str17, Integer num9, Integer num10, Integer num11, String str18, String str19, Integer num12, String str20, String str21) {
        Intrinsics.checkNotNullParameter(extendedType, "extendedType");
        Intrinsics.checkNotNullParameter(headerText, "headerText");
        Intrinsics.checkNotNullParameter(type, "type");
        return new GuildEventInviteEmbedImpl(i10, i11, extendedType, i12, headerText, type, num, num2, num3, str, str2, str3, str4, str5, num4, bool, str6, str7, structurableText, str8, bool2, str9, str10, str11, num5, bool3, str12, str13, num6, num7, str14, bool4, num8, str15, str16, str17, num9, num10, num11, str18, str19, num12, str20, str21);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GuildEventInviteEmbedImpl) {
            GuildEventInviteEmbedImpl guildEventInviteEmbedImpl = (GuildEventInviteEmbedImpl) obj;
            return this.backgroundColor == guildEventInviteEmbedImpl.backgroundColor && this.borderColor == guildEventInviteEmbedImpl.borderColor && this.extendedType == guildEventInviteEmbedImpl.extendedType && this.headerColor == guildEventInviteEmbedImpl.headerColor && Intrinsics.areEqual(this.headerText, guildEventInviteEmbedImpl.headerText) && this.type == guildEventInviteEmbedImpl.type && Intrinsics.areEqual(this.acceptLabelBackgroundColor, guildEventInviteEmbedImpl.acceptLabelBackgroundColor) && Intrinsics.areEqual(this.acceptLabelBorderColor, guildEventInviteEmbedImpl.acceptLabelBorderColor) && Intrinsics.areEqual(this.acceptLabelColor, guildEventInviteEmbedImpl.acceptLabelColor) && Intrinsics.areEqual(this.acceptLabelIcon, guildEventInviteEmbedImpl.acceptLabelIcon) && Intrinsics.areEqual(this.acceptLabelText, guildEventInviteEmbedImpl.acceptLabelText) && Intrinsics.areEqual(this.badgeCount, guildEventInviteEmbedImpl.badgeCount) && Intrinsics.areEqual(this.badgeIcon, guildEventInviteEmbedImpl.badgeIcon) && Intrinsics.areEqual(this.bodyText, guildEventInviteEmbedImpl.bodyText) && Intrinsics.areEqual(this.bodyTextColor, guildEventInviteEmbedImpl.bodyTextColor) && Intrinsics.areEqual(this.canBeAccepted, guildEventInviteEmbedImpl.canBeAccepted) && Intrinsics.areEqual(this.channelIcon, guildEventInviteEmbedImpl.channelIcon) && Intrinsics.areEqual(this.channelName, guildEventInviteEmbedImpl.channelName) && Intrinsics.areEqual(this.content, guildEventInviteEmbedImpl.content) && Intrinsics.areEqual(this.creatorAvatar, guildEventInviteEmbedImpl.creatorAvatar) && Intrinsics.areEqual(this.embedCanBeTapped, guildEventInviteEmbedImpl.embedCanBeTapped) && Intrinsics.areEqual(this.guildIcon, guildEventInviteEmbedImpl.guildIcon) && Intrinsics.areEqual(this.guildName, guildEventInviteEmbedImpl.guildName) && Intrinsics.areEqual(this.headerIcon, guildEventInviteEmbedImpl.headerIcon) && Intrinsics.areEqual(this.headerTextColor, guildEventInviteEmbedImpl.headerTextColor) && Intrinsics.areEqual(this.isRsvped, guildEventInviteEmbedImpl.isRsvped) && Intrinsics.areEqual(this.memberText, guildEventInviteEmbedImpl.memberText) && Intrinsics.areEqual(this.onlineText, guildEventInviteEmbedImpl.onlineText) && Intrinsics.areEqual(this.resolvingGradientEnd, guildEventInviteEmbedImpl.resolvingGradientEnd) && Intrinsics.areEqual(this.resolvingGradientStart, guildEventInviteEmbedImpl.resolvingGradientStart) && Intrinsics.areEqual(this.secondaryActionIcon, guildEventInviteEmbedImpl.secondaryActionIcon) && Intrinsics.areEqual(this.splashHasRadialGradient, guildEventInviteEmbedImpl.splashHasRadialGradient) && Intrinsics.areEqual(this.splashOpacity, guildEventInviteEmbedImpl.splashOpacity) && Intrinsics.areEqual(this.splashUrl, guildEventInviteEmbedImpl.splashUrl) && Intrinsics.areEqual(this.inviteSplash, guildEventInviteEmbedImpl.inviteSplash) && Intrinsics.areEqual(this.subtitle, guildEventInviteEmbedImpl.subtitle) && Intrinsics.areEqual(this.subtitleColor, guildEventInviteEmbedImpl.subtitleColor) && Intrinsics.areEqual(this.thumbnailBackgroundColor, guildEventInviteEmbedImpl.thumbnailBackgroundColor) && Intrinsics.areEqual(this.thumbnailCornerRadius, guildEventInviteEmbedImpl.thumbnailCornerRadius) && Intrinsics.areEqual(this.thumbnailText, guildEventInviteEmbedImpl.thumbnailText) && Intrinsics.areEqual(this.thumbnailUrl, guildEventInviteEmbedImpl.thumbnailUrl) && Intrinsics.areEqual(this.titleColor, guildEventInviteEmbedImpl.titleColor) && Intrinsics.areEqual(this.titleText, guildEventInviteEmbedImpl.titleText) && Intrinsics.areEqual(this.badgeIconUrl, guildEventInviteEmbedImpl.badgeIconUrl);
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

    @Override // com.discord.chat.bridge.codedlinks.GuildEventInviteEmbed
    public String getAcceptLabelIcon() {
        return this.acceptLabelIcon;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getAcceptLabelText() {
        return this.acceptLabelText;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public int getBackgroundColor() {
        return this.backgroundColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildEventInviteEmbed
    public String getBadgeCount() {
        return this.badgeCount;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildEventInviteEmbed
    public String getBadgeIcon() {
        return this.badgeIcon;
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

    @Override // com.discord.chat.bridge.codedlinks.GuildEventInviteEmbed
    public StructurableText getContent() {
        return this.content;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildEventInviteEmbed
    public String getCreatorAvatar() {
        return this.creatorAvatar;
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

    @Override // com.discord.chat.bridge.codedlinks.GuildEventInviteEmbed
    public Integer getHeaderTextColor() {
        return this.headerTextColor;
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

    @Override // com.discord.chat.bridge.codedlinks.GuildEventInviteEmbed
    public String getSecondaryActionIcon() {
        return this.secondaryActionIcon;
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
        int hashCode = ((((((((((Integer.hashCode(this.backgroundColor) * 31) + Integer.hashCode(this.borderColor)) * 31) + this.extendedType.hashCode()) * 31) + Integer.hashCode(this.headerColor)) * 31) + this.headerText.hashCode()) * 31) + this.type.hashCode()) * 31;
        Integer num = this.acceptLabelBackgroundColor;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.acceptLabelBorderColor;
        int hashCode3 = (hashCode2 + (num2 == null ? 0 : num2.hashCode())) * 31;
        Integer num3 = this.acceptLabelColor;
        int hashCode4 = (hashCode3 + (num3 == null ? 0 : num3.hashCode())) * 31;
        String str = this.acceptLabelIcon;
        int hashCode5 = (hashCode4 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.acceptLabelText;
        int hashCode6 = (hashCode5 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.badgeCount;
        int hashCode7 = (hashCode6 + (str3 == null ? 0 : str3.hashCode())) * 31;
        String str4 = this.badgeIcon;
        int hashCode8 = (hashCode7 + (str4 == null ? 0 : str4.hashCode())) * 31;
        String str5 = this.bodyText;
        int hashCode9 = (hashCode8 + (str5 == null ? 0 : str5.hashCode())) * 31;
        Integer num4 = this.bodyTextColor;
        int hashCode10 = (hashCode9 + (num4 == null ? 0 : num4.hashCode())) * 31;
        Boolean bool = this.canBeAccepted;
        int hashCode11 = (hashCode10 + (bool == null ? 0 : bool.hashCode())) * 31;
        String str6 = this.channelIcon;
        int hashCode12 = (hashCode11 + (str6 == null ? 0 : str6.hashCode())) * 31;
        String str7 = this.channelName;
        int hashCode13 = (hashCode12 + (str7 == null ? 0 : str7.hashCode())) * 31;
        StructurableText structurableText = this.content;
        int hashCode14 = (hashCode13 + (structurableText == null ? 0 : structurableText.hashCode())) * 31;
        String str8 = this.creatorAvatar;
        int hashCode15 = (hashCode14 + (str8 == null ? 0 : str8.hashCode())) * 31;
        Boolean bool2 = this.embedCanBeTapped;
        int hashCode16 = (hashCode15 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        String str9 = this.guildIcon;
        int hashCode17 = (hashCode16 + (str9 == null ? 0 : str9.hashCode())) * 31;
        String str10 = this.guildName;
        int hashCode18 = (hashCode17 + (str10 == null ? 0 : str10.hashCode())) * 31;
        String str11 = this.headerIcon;
        int hashCode19 = (hashCode18 + (str11 == null ? 0 : str11.hashCode())) * 31;
        Integer num5 = this.headerTextColor;
        int hashCode20 = (hashCode19 + (num5 == null ? 0 : num5.hashCode())) * 31;
        Boolean bool3 = this.isRsvped;
        int hashCode21 = (hashCode20 + (bool3 == null ? 0 : bool3.hashCode())) * 31;
        String str12 = this.memberText;
        int hashCode22 = (hashCode21 + (str12 == null ? 0 : str12.hashCode())) * 31;
        String str13 = this.onlineText;
        int hashCode23 = (hashCode22 + (str13 == null ? 0 : str13.hashCode())) * 31;
        Integer num6 = this.resolvingGradientEnd;
        int hashCode24 = (hashCode23 + (num6 == null ? 0 : num6.hashCode())) * 31;
        Integer num7 = this.resolvingGradientStart;
        int hashCode25 = (hashCode24 + (num7 == null ? 0 : num7.hashCode())) * 31;
        String str14 = this.secondaryActionIcon;
        int hashCode26 = (hashCode25 + (str14 == null ? 0 : str14.hashCode())) * 31;
        Boolean bool4 = this.splashHasRadialGradient;
        int hashCode27 = (hashCode26 + (bool4 == null ? 0 : bool4.hashCode())) * 31;
        Integer num8 = this.splashOpacity;
        int hashCode28 = (hashCode27 + (num8 == null ? 0 : num8.hashCode())) * 31;
        String str15 = this.splashUrl;
        int hashCode29 = (hashCode28 + (str15 == null ? 0 : str15.hashCode())) * 31;
        String str16 = this.inviteSplash;
        int hashCode30 = (hashCode29 + (str16 == null ? 0 : str16.hashCode())) * 31;
        String str17 = this.subtitle;
        int hashCode31 = (hashCode30 + (str17 == null ? 0 : str17.hashCode())) * 31;
        Integer num9 = this.subtitleColor;
        int hashCode32 = (hashCode31 + (num9 == null ? 0 : num9.hashCode())) * 31;
        Integer num10 = this.thumbnailBackgroundColor;
        int hashCode33 = (hashCode32 + (num10 == null ? 0 : num10.hashCode())) * 31;
        Integer num11 = this.thumbnailCornerRadius;
        int hashCode34 = (hashCode33 + (num11 == null ? 0 : num11.hashCode())) * 31;
        String str18 = this.thumbnailText;
        int hashCode35 = (hashCode34 + (str18 == null ? 0 : str18.hashCode())) * 31;
        String str19 = this.thumbnailUrl;
        int hashCode36 = (hashCode35 + (str19 == null ? 0 : str19.hashCode())) * 31;
        Integer num12 = this.titleColor;
        int hashCode37 = (hashCode36 + (num12 == null ? 0 : num12.hashCode())) * 31;
        String str20 = this.titleText;
        int hashCode38 = (hashCode37 + (str20 == null ? 0 : str20.hashCode())) * 31;
        String str21 = this.badgeIconUrl;
        return hashCode38 + (str21 != null ? str21.hashCode() : 0);
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildEventInviteEmbed
    public Boolean isRsvped() {
        return this.isRsvped;
    }

    @NotNull
    public String toString() {
        int i10 = this.backgroundColor;
        int i11 = this.borderColor;
        CodedLinkExtendedType codedLinkExtendedType = this.extendedType;
        int i12 = this.headerColor;
        String str = this.headerText;
        InviteType inviteType = this.type;
        Integer num = this.acceptLabelBackgroundColor;
        Integer num2 = this.acceptLabelBorderColor;
        Integer num3 = this.acceptLabelColor;
        String str2 = this.acceptLabelIcon;
        String str3 = this.acceptLabelText;
        String str4 = this.badgeCount;
        String str5 = this.badgeIcon;
        String str6 = this.bodyText;
        Integer num4 = this.bodyTextColor;
        Boolean bool = this.canBeAccepted;
        String str7 = this.channelIcon;
        String str8 = this.channelName;
        StructurableText structurableText = this.content;
        String str9 = this.creatorAvatar;
        Boolean bool2 = this.embedCanBeTapped;
        String str10 = this.guildIcon;
        String str11 = this.guildName;
        String str12 = this.headerIcon;
        Integer num5 = this.headerTextColor;
        Boolean bool3 = this.isRsvped;
        String str13 = this.memberText;
        String str14 = this.onlineText;
        Integer num6 = this.resolvingGradientEnd;
        Integer num7 = this.resolvingGradientStart;
        String str15 = this.secondaryActionIcon;
        Boolean bool4 = this.splashHasRadialGradient;
        Integer num8 = this.splashOpacity;
        String str16 = this.splashUrl;
        String str17 = this.inviteSplash;
        String str18 = this.subtitle;
        Integer num9 = this.subtitleColor;
        Integer num10 = this.thumbnailBackgroundColor;
        Integer num11 = this.thumbnailCornerRadius;
        String str19 = this.thumbnailText;
        String str20 = this.thumbnailUrl;
        Integer num12 = this.titleColor;
        String str21 = this.titleText;
        String str22 = this.badgeIconUrl;
        return "GuildEventInviteEmbedImpl(backgroundColor=" + i10 + ", borderColor=" + i11 + ", extendedType=" + codedLinkExtendedType + ", headerColor=" + i12 + ", headerText=" + str + ", type=" + inviteType + ", acceptLabelBackgroundColor=" + num + ", acceptLabelBorderColor=" + num2 + ", acceptLabelColor=" + num3 + ", acceptLabelIcon=" + str2 + ", acceptLabelText=" + str3 + ", badgeCount=" + str4 + ", badgeIcon=" + str5 + ", bodyText=" + str6 + ", bodyTextColor=" + num4 + ", canBeAccepted=" + bool + ", channelIcon=" + str7 + ", channelName=" + str8 + ", content=" + structurableText + ", creatorAvatar=" + str9 + ", embedCanBeTapped=" + bool2 + ", guildIcon=" + str10 + ", guildName=" + str11 + ", headerIcon=" + str12 + ", headerTextColor=" + num5 + ", isRsvped=" + bool3 + ", memberText=" + str13 + ", onlineText=" + str14 + ", resolvingGradientEnd=" + num6 + ", resolvingGradientStart=" + num7 + ", secondaryActionIcon=" + str15 + ", splashHasRadialGradient=" + bool4 + ", splashOpacity=" + num8 + ", splashUrl=" + str16 + ", inviteSplash=" + str17 + ", subtitle=" + str18 + ", subtitleColor=" + num9 + ", thumbnailBackgroundColor=" + num10 + ", thumbnailCornerRadius=" + num11 + ", thumbnailText=" + str19 + ", thumbnailUrl=" + str20 + ", titleColor=" + num12 + ", titleText=" + str21 + ", badgeIconUrl=" + str22 + ")";
    }

    public /* synthetic */ GuildEventInviteEmbedImpl(int i10, int i11, CodedLinkExtendedType codedLinkExtendedType, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, String str4, String str5, String str6, Integer num4, Boolean bool, String str7, String str8, StructurableText structurableText, String str9, Boolean bool2, String str10, String str11, String str12, Integer num5, Boolean bool3, String str13, String str14, Integer num6, Integer num7, String str15, Boolean bool4, Integer num8, String str16, String str17, String str18, Integer num9, Integer num10, Integer num11, String str19, String str20, Integer num12, String str21, String str22, int i13, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        String str23;
        GuildEventInviteEmbedImpl guildEventInviteEmbedImpl;
        int i15;
        int i16;
        int i17;
        String str24;
        InviteType inviteType2;
        CodedLinkExtendedType codedLinkExtendedType2 = (i13 & 4) != 0 ? CodedLinkExtendedType.GUILD_SCHEDULED_EVENT : codedLinkExtendedType;
        Integer num13 = (i13 & 64) != 0 ? null : num;
        Integer num14 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : num2;
        Integer num15 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : num3;
        String str25 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str2;
        String str26 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str3;
        String str27 = (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : str4;
        String str28 = (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : str5;
        String str29 = (i13 & 8192) != 0 ? null : str6;
        Integer num16 = (i13 & 16384) != 0 ? null : num4;
        Boolean bool5 = (32768 & i13) != 0 ? null : bool;
        String str30 = (65536 & i13) != 0 ? null : str7;
        String str31 = (131072 & i13) != 0 ? null : str8;
        StructurableText structurableText2 = (262144 & i13) != 0 ? null : structurableText;
        String str32 = (524288 & i13) != 0 ? null : str9;
        Boolean bool6 = (1048576 & i13) != 0 ? null : bool2;
        String str33 = (2097152 & i13) != 0 ? null : str10;
        String str34 = (4194304 & i13) != 0 ? null : str11;
        String str35 = (8388608 & i13) != 0 ? null : str12;
        Integer num17 = (16777216 & i13) != 0 ? null : num5;
        Boolean bool7 = (33554432 & i13) != 0 ? null : bool3;
        String str36 = (67108864 & i13) != 0 ? null : str13;
        String str37 = (134217728 & i13) != 0 ? null : str14;
        Integer num18 = (268435456 & i13) != 0 ? null : num6;
        Integer num19 = (536870912 & i13) != 0 ? null : num7;
        String str38 = (1073741824 & i13) != 0 ? null : str15;
        Boolean bool8 = (i13 & Integer.MIN_VALUE) != 0 ? null : bool4;
        Integer num20 = (i14 & 1) != 0 ? null : num8;
        String str39 = (i14 & 2) != 0 ? null : str16;
        String str40 = (i14 & 4) != 0 ? null : str17;
        String str41 = (i14 & 8) != 0 ? null : str18;
        Integer num21 = (i14 & 16) != 0 ? null : num9;
        Integer num22 = (i14 & 32) != 0 ? null : num10;
        Integer num23 = (i14 & 64) != 0 ? null : num11;
        String str42 = (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str19;
        String str43 = (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str20;
        Integer num24 = (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : num12;
        String str44 = (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str21;
        if ((i14 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            str23 = null;
            i15 = i10;
            i16 = i11;
            i17 = i12;
            str24 = str;
            inviteType2 = inviteType;
            guildEventInviteEmbedImpl = this;
        } else {
            str23 = str22;
            guildEventInviteEmbedImpl = this;
            i15 = i10;
            i16 = i11;
            i17 = i12;
            str24 = str;
            inviteType2 = inviteType;
        }
        new GuildEventInviteEmbedImpl(i15, i16, codedLinkExtendedType2, i17, str24, inviteType2, num13, num14, num15, str25, str26, str27, str28, str29, num16, bool5, str30, str31, structurableText2, str32, bool6, str33, str34, str35, num17, bool7, str36, str37, num18, num19, str38, bool8, num20, str39, str40, str41, num21, num22, num23, str42, str43, num24, str44, str23);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GuildEventInviteEmbedImpl(int i10, int i11, @NotNull CodedLinkExtendedType extendedType, int i12, @NotNull String headerText, @NotNull InviteType type, Integer num, Integer num2, Integer num3, String str, String str2, String str3, String str4, String str5, Integer num4, Boolean bool, String str6, String str7, StructurableText structurableText, String str8, Boolean bool2, String str9, String str10, String str11, Integer num5, Boolean bool3, String str12, String str13, Integer num6, Integer num7, String str14, Boolean bool4, Integer num8, String str15, String str16, String str17, Integer num9, Integer num10, Integer num11, String str18, String str19, Integer num12, String str20, String str21) {
        super(null);
        Intrinsics.checkNotNullParameter(extendedType, "extendedType");
        Intrinsics.checkNotNullParameter(headerText, "headerText");
        Intrinsics.checkNotNullParameter(type, "type");
        this.backgroundColor = i10;
        this.borderColor = i11;
        this.extendedType = extendedType;
        this.headerColor = i12;
        this.headerText = headerText;
        this.type = type;
        this.acceptLabelBackgroundColor = num;
        this.acceptLabelBorderColor = num2;
        this.acceptLabelColor = num3;
        this.acceptLabelIcon = str;
        this.acceptLabelText = str2;
        this.badgeCount = str3;
        this.badgeIcon = str4;
        this.bodyText = str5;
        this.bodyTextColor = num4;
        this.canBeAccepted = bool;
        this.channelIcon = str6;
        this.channelName = str7;
        this.content = structurableText;
        this.creatorAvatar = str8;
        this.embedCanBeTapped = bool2;
        this.guildIcon = str9;
        this.guildName = str10;
        this.headerIcon = str11;
        this.headerTextColor = num5;
        this.isRsvped = bool3;
        this.memberText = str12;
        this.onlineText = str13;
        this.resolvingGradientEnd = num6;
        this.resolvingGradientStart = num7;
        this.secondaryActionIcon = str14;
        this.splashHasRadialGradient = bool4;
        this.splashOpacity = num8;
        this.splashUrl = str15;
        this.inviteSplash = str16;
        this.subtitle = str17;
        this.subtitleColor = num9;
        this.thumbnailBackgroundColor = num10;
        this.thumbnailCornerRadius = num11;
        this.thumbnailText = str18;
        this.thumbnailUrl = str19;
        this.titleColor = num12;
        this.titleText = str20;
        this.badgeIconUrl = str21;
    }
}
