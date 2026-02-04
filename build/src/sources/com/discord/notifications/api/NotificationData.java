package com.discord.notifications.api;

import androidx.recyclerview.widget.RecyclerView;
import at.m;
import com.discord.notifications.api.NotificationData;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ApplicationId;
import com.discord.primitives.ApplicationId$$serializer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.h;
import dt.n2;
import dt.p0;
import dt.u0;
import dt.v1;
import dt.z0;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import lr.l;
import lr.o;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@m
@Metadata(d1 = {"\u0000\u0083\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0011\n\u0002\u0010$\n\u0002\b\u0010\n\u0002\u0018\u0002\n\u0003\bà\u0001\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 ¼\u00022\u00020\u0001:\u0004¼\u0002½\u0002B\u0089\u0006\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0010\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0003\u0012\u000e\b\u0002\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00100\u0017\u0012\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u0019\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\"\u0012\n\b\u0002\u0010#\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010(\u001a\u0004\u0018\u00010)\u0012\n\b\u0002\u0010*\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010+\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010,\u001a\u0004\u0018\u00010-\u0012\n\b\u0002\u0010.\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010/\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u00100\u001a\u000201\u0012\b\b\u0002\u00102\u001a\u000201\u0012\n\b\u0002\u00103\u001a\u0004\u0018\u00010\u0019\u0012\n\b\u0002\u00104\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u00105\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u00106\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u00107\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u00108\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u00109\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010:\u001a\u0004\u0018\u000101\u0012\n\b\u0002\u0010;\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010<\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010=\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010>\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010?\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010@\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010A\u001a\u000201\u0012\u0014\b\u0002\u0010B\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030C\u0012\b\b\u0002\u0010D\u001a\u000201\u0012\n\b\u0002\u0010E\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010F\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010G\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010H\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010I\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010J\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010K\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010L\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010M\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\bN\u0010OBµ\u0005\b\u0010\u0012\u0006\u0010P\u001a\u00020\u0007\u0012\u0006\u0010Q\u001a\u00020\u0007\u0012\u0006\u0010R\u001a\u00020\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0010\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0016\u001a\n\u0012\u0004\u0012\u00020\u0010\u0018\u00010\u0017\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010 \u001a\u0004\u0018\u00010\u0007\u0012\b\u0010!\u001a\u0004\u0018\u00010\"\u0012\b\u0010#\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010$\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010%\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010&\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010'\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010(\u001a\u0004\u0018\u00010)\u0012\b\u0010*\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010+\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010,\u001a\u0004\u0018\u00010-\u0012\b\u0010.\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010/\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u00100\u001a\u000201\u0012\u0006\u00102\u001a\u000201\u0012\b\u00103\u001a\u0004\u0018\u00010\u0019\u0012\b\u00104\u001a\u0004\u0018\u00010\u0003\u0012\b\u00105\u001a\u0004\u0018\u00010\u0003\u0012\b\u00106\u001a\u0004\u0018\u00010\u0003\u0012\b\u00107\u001a\u0004\u0018\u00010\u0003\u0012\b\u00108\u001a\u0004\u0018\u00010\u0003\u0012\b\u00109\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010:\u001a\u0004\u0018\u000101\u0012\b\u0010;\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010<\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010=\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010>\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010?\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010@\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010A\u001a\u000201\u0012\u0014\u0010B\u001a\u0010\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u0003\u0018\u00010C\u0012\u0006\u0010D\u001a\u000201\u0012\b\u0010E\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010F\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010G\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010H\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010I\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010J\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010K\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010L\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010M\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010S\u001a\u0004\u0018\u00010T¢\u0006\u0004\bN\u0010UJ\n\u0010æ\u0001\u001a\u00020\u0003HÆ\u0003J\u0014\u0010ç\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0005\bè\u0001\u0010YJ\u0011\u0010é\u0001\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\f\u0010ê\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010ë\u0001\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\f\u0010ì\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010í\u0001\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010iJ\u0011\u0010î\u0001\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\f\u0010ï\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0012\u0010ð\u0001\u001a\u0004\u0018\u00010\u0010HÆ\u0003¢\u0006\u0003\bñ\u0001J\f\u0010ò\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010ó\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0012\u0010ô\u0001\u001a\u0004\u0018\u00010\u0010HÆ\u0003¢\u0006\u0003\bõ\u0001J\u0011\u0010ö\u0001\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\f\u0010÷\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010ø\u0001\u001a\b\u0012\u0004\u0012\u00020\u00100\u0017HÆ\u0003J\u0012\u0010ù\u0001\u001a\u0004\u0018\u00010\u0019HÆ\u0003¢\u0006\u0003\bú\u0001J\f\u0010û\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010ü\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010ý\u0001\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\f\u0010þ\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010ÿ\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0080\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010\u0081\u0002\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\u0012\u0010\u0082\u0002\u001a\u0004\u0018\u00010\"HÆ\u0003¢\u0006\u0003\b\u0083\u0002J\f\u0010\u0084\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0085\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0086\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010\u0087\u0002\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\f\u0010\u0088\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0012\u0010\u0089\u0002\u001a\u0004\u0018\u00010)HÆ\u0003¢\u0006\u0003\b\u008a\u0002J\f\u0010\u008b\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u008c\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u008d\u0002\u001a\u0004\u0018\u00010-HÆ\u0003J\f\u0010\u008e\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010\u008f\u0002\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\n\u0010\u0090\u0002\u001a\u000201HÆ\u0003J\n\u0010\u0091\u0002\u001a\u000201HÆ\u0003J\u0012\u0010\u0092\u0002\u001a\u0004\u0018\u00010\u0019HÆ\u0003¢\u0006\u0003\b\u0093\u0002J\f\u0010\u0094\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0095\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0096\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0097\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0098\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0099\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0012\u0010\u009a\u0002\u001a\u0004\u0018\u000101HÆ\u0003¢\u0006\u0003\u0010¿\u0001J\f\u0010\u009b\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u009c\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010\u009d\u0002\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\u0011\u0010\u009e\u0002\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\u0011\u0010\u009f\u0002\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\f\u0010 \u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\n\u0010¡\u0002\u001a\u000201HÆ\u0003J\u0016\u0010¢\u0002\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030CHÆ\u0003J\n\u0010£\u0002\u001a\u000201HÆ\u0003J\f\u0010¤\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010¥\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010¦\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010§\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010¨\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010©\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010ª\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010«\u0002\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010_J\f\u0010¬\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0097\u0006\u0010\u00ad\u0002\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00102\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00102\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00032\u000e\b\u0002\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00100\u00172\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u00192\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\"2\n\b\u0002\u0010#\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010(\u001a\u0004\u0018\u00010)2\n\b\u0002\u0010*\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010+\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010,\u001a\u0004\u0018\u00010-2\n\b\u0002\u0010.\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010/\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u00100\u001a\u0002012\b\b\u0002\u00102\u001a\u0002012\n\b\u0002\u00103\u001a\u0004\u0018\u00010\u00192\n\b\u0002\u00104\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u00105\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u00106\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u00107\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u00108\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u00109\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010:\u001a\u0004\u0018\u0001012\n\b\u0002\u0010;\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010<\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010=\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010>\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010?\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010@\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010A\u001a\u0002012\u0014\b\u0002\u0010B\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030C2\b\b\u0002\u0010D\u001a\u0002012\n\b\u0002\u0010E\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010F\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010G\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010H\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010I\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010J\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010K\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010L\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010M\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0006\b®\u0002\u0010¯\u0002J\u0015\u0010°\u0002\u001a\u0002012\t\u0010±\u0002\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\n\u0010²\u0002\u001a\u00020\u0007HÖ\u0001J\n\u0010³\u0002\u001a\u00020\u0003HÖ\u0001J-\u0010´\u0002\u001a\u00030µ\u00022\u0007\u0010¶\u0002\u001a\u00020\u00002\b\u0010·\u0002\u001a\u00030¸\u00022\b\u0010¹\u0002\u001a\u00030º\u0002H\u0001¢\u0006\u0003\b»\u0002R\u001c\u0010\u0002\u001a\u00020\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\bV\u0010W\u001a\u0004\bX\u0010YR \u0010\u0004\u001a\u0004\u0018\u00010\u00058\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010\\\u0012\u0004\bZ\u0010W\u001a\u0004\b[\u0010YR \u0010\u0006\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010`\u0012\u0004\b]\u0010W\u001a\u0004\b^\u0010_R\u001e\u0010\b\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\ba\u0010W\u001a\u0004\bb\u0010YR \u0010\t\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010`\u0012\u0004\bc\u0010W\u001a\u0004\bd\u0010_R\u001e\u0010\n\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\be\u0010W\u001a\u0004\bf\u0010YR \u0010\u000b\u001a\u0004\u0018\u00010\f8\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010j\u0012\u0004\bg\u0010W\u001a\u0004\bh\u0010iR \u0010\r\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010`\u0012\u0004\bk\u0010W\u001a\u0004\bl\u0010_R\u001e\u0010\u000e\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\bm\u0010W\u001a\u0004\bn\u0010YR\u001e\u0010\u000f\u001a\u0004\u0018\u00010\u00108\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\bo\u0010W\u001a\u0004\bp\u0010qR\u001e\u0010\u0011\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\br\u0010W\u001a\u0004\bs\u0010YR\u001e\u0010\u0012\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\bt\u0010W\u001a\u0004\bu\u0010YR\u001e\u0010\u0013\u001a\u0004\u0018\u00010\u00108\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\bv\u0010W\u001a\u0004\bw\u0010qR \u0010\u0014\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0010\n\u0002\u0010`\u0012\u0004\bx\u0010W\u001a\u0004\by\u0010_R\u001e\u0010\u0015\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\bz\u0010W\u001a\u0004\b{\u0010YR\"\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00100\u00178\u0006X\u0087\u0004¢\u0006\u000e\n\u0000\u0012\u0004\b|\u0010W\u001a\u0004\b}\u0010~R \u0010\u0018\u001a\u0004\u0018\u00010\u00198\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0004\b\u007f\u0010W\u001a\u0006\b\u0080\u0001\u0010\u0081\u0001R \u0010\u001a\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b\u0082\u0001\u0010W\u001a\u0005\b\u0083\u0001\u0010YR \u0010\u001b\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b\u0084\u0001\u0010W\u001a\u0005\b\u0085\u0001\u0010YR\"\u0010\u001c\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0012\n\u0002\u0010`\u0012\u0005\b\u0086\u0001\u0010W\u001a\u0005\b\u0087\u0001\u0010_R \u0010\u001d\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b\u0088\u0001\u0010W\u001a\u0005\b\u0089\u0001\u0010YR \u0010\u001e\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b\u008a\u0001\u0010W\u001a\u0005\b\u008b\u0001\u0010YR \u0010\u001f\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b\u008c\u0001\u0010W\u001a\u0005\b\u008d\u0001\u0010YR\"\u0010 \u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0012\n\u0002\u0010`\u0012\u0005\b\u008e\u0001\u0010W\u001a\u0005\b\u008f\u0001\u0010_R!\u0010!\u001a\u0004\u0018\u00010\"8\u0006X\u0087\u0004¢\u0006\u0011\n\u0000\u0012\u0005\b\u0090\u0001\u0010W\u001a\u0006\b\u0091\u0001\u0010\u0092\u0001R \u0010#\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b\u0093\u0001\u0010W\u001a\u0005\b\u0094\u0001\u0010YR \u0010$\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b\u0095\u0001\u0010W\u001a\u0005\b\u0096\u0001\u0010YR \u0010%\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b\u0097\u0001\u0010W\u001a\u0005\b\u0098\u0001\u0010YR\"\u0010&\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0012\n\u0002\u0010`\u0012\u0005\b\u0099\u0001\u0010W\u001a\u0005\b\u009a\u0001\u0010_R \u0010'\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b\u009b\u0001\u0010W\u001a\u0005\b\u009c\u0001\u0010YR!\u0010(\u001a\u0004\u0018\u00010)8\u0006X\u0087\u0004¢\u0006\u0011\n\u0000\u0012\u0005\b\u009d\u0001\u0010W\u001a\u0006\b\u009e\u0001\u0010\u009f\u0001R \u0010*\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b \u0001\u0010W\u001a\u0005\b¡\u0001\u0010YR \u0010+\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b¢\u0001\u0010W\u001a\u0005\b£\u0001\u0010YR!\u0010,\u001a\u0004\u0018\u00010-8\u0006X\u0087\u0004¢\u0006\u0011\n\u0000\u0012\u0005\b¤\u0001\u0010W\u001a\u0006\b¥\u0001\u0010¦\u0001R \u0010.\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b§\u0001\u0010W\u001a\u0005\b¨\u0001\u0010YR\"\u0010/\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0012\n\u0002\u0010`\u0012\u0005\b©\u0001\u0010W\u001a\u0005\bª\u0001\u0010_R\u001f\u00100\u001a\u0002018\u0006X\u0087\u0004¢\u0006\u0011\n\u0000\u0012\u0005\b«\u0001\u0010W\u001a\u0006\b¬\u0001\u0010\u00ad\u0001R\u001e\u00102\u001a\u0002018\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b®\u0001\u0010W\u001a\u0005\b2\u0010\u00ad\u0001R!\u00103\u001a\u0004\u0018\u00010\u00198\u0006X\u0087\u0004¢\u0006\u0011\n\u0000\u0012\u0005\b¯\u0001\u0010W\u001a\u0006\b°\u0001\u0010\u0081\u0001R \u00104\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b±\u0001\u0010W\u001a\u0005\b²\u0001\u0010YR \u00105\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b³\u0001\u0010W\u001a\u0005\b´\u0001\u0010YR \u00106\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bµ\u0001\u0010W\u001a\u0005\b¶\u0001\u0010YR \u00107\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b·\u0001\u0010W\u001a\u0005\b¸\u0001\u0010YR \u00108\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b¹\u0001\u0010W\u001a\u0005\bº\u0001\u0010YR \u00109\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\b»\u0001\u0010W\u001a\u0005\b¼\u0001\u0010YR$\u0010:\u001a\u0004\u0018\u0001018\u0006X\u0087\u0004¢\u0006\u0014\n\u0003\u0010À\u0001\u0012\u0005\b½\u0001\u0010W\u001a\u0006\b¾\u0001\u0010¿\u0001R \u0010;\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bÁ\u0001\u0010W\u001a\u0005\bÂ\u0001\u0010YR \u0010<\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bÃ\u0001\u0010W\u001a\u0005\bÄ\u0001\u0010YR\"\u0010=\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0012\n\u0002\u0010`\u0012\u0005\bÅ\u0001\u0010W\u001a\u0005\bÆ\u0001\u0010_R\"\u0010>\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0012\n\u0002\u0010`\u0012\u0005\bÇ\u0001\u0010W\u001a\u0005\bÈ\u0001\u0010_R\"\u0010?\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0012\n\u0002\u0010`\u0012\u0005\bÉ\u0001\u0010W\u001a\u0005\bÊ\u0001\u0010_R \u0010@\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bË\u0001\u0010W\u001a\u0005\bÌ\u0001\u0010YR\u001f\u0010A\u001a\u0002018\u0006X\u0087\u0004¢\u0006\u0011\n\u0000\u0012\u0005\bÍ\u0001\u0010W\u001a\u0006\bÎ\u0001\u0010\u00ad\u0001R+\u0010B\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030C8\u0006X\u0087\u0004¢\u0006\u0011\n\u0000\u0012\u0005\bÏ\u0001\u0010W\u001a\u0006\bÐ\u0001\u0010Ñ\u0001R\u001f\u0010D\u001a\u0002018\u0006X\u0087\u0004¢\u0006\u0011\n\u0000\u0012\u0005\bÒ\u0001\u0010W\u001a\u0006\bÓ\u0001\u0010\u00ad\u0001R \u0010E\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bÔ\u0001\u0010W\u001a\u0005\bÕ\u0001\u0010YR \u0010F\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bÖ\u0001\u0010W\u001a\u0005\b×\u0001\u0010YR \u0010G\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bØ\u0001\u0010W\u001a\u0005\bÙ\u0001\u0010YR \u0010H\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bÚ\u0001\u0010W\u001a\u0005\bÛ\u0001\u0010YR \u0010I\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bÜ\u0001\u0010W\u001a\u0005\bÝ\u0001\u0010YR \u0010J\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bÞ\u0001\u0010W\u001a\u0005\bß\u0001\u0010YR \u0010K\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bà\u0001\u0010W\u001a\u0005\bá\u0001\u0010YR\"\u0010L\u001a\u0004\u0018\u00010\u00078\u0006X\u0087\u0004¢\u0006\u0012\n\u0002\u0010`\u0012\u0005\bâ\u0001\u0010W\u001a\u0005\bã\u0001\u0010_R \u0010M\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0010\n\u0000\u0012\u0005\bä\u0001\u0010W\u001a\u0005\bå\u0001\u0010Y¨\u0006¾\u0002"}, d2 = {"Lcom/discord/notifications/api/NotificationData;", "", "type", "", "messageId", "Lcom/discord/primitives/MessageId;", "messageActivityType", "", "messageApplicationName", "messageType", "messageContent", "messageFlags", "", "channelType", NotificationRenderer.CHANNEL_NAME, "channelId", "Lcom/discord/primitives/ChannelId;", "channelIcon", "parentName", "parentId", "messageReferenceType", "channelRtcRegion", "ackChannelIds", "", "userId", "Lcom/discord/primitives/UserId;", "userUsername", "userGlobalName", "userDiscriminator", "userAvatar", "userGuildAvatar", "platformUserUsername", "relationshipType", "guildId", "Lcom/discord/primitives/GuildId;", "guildName", "guildIcon", "activityInstanceId", "activityType", "activityName", "applicationId", "Lcom/discord/primitives/ApplicationId;", "applicationName", "applicationIcon", "message", "Lcom/discord/notifications/api/NotificationMessage;", "stageInstanceTopic", "guildScheduledEventEntityType", "canReply", "", "isFromCurrentUser", "receivingUserId", "title", "subtitle", "iconUrl", "notificationChannel", "trackingType", "deeplink", "expandSubtitle", "imageAttachmentUrl", "ergoImageAttachmentUrl", "attachmentTextVariant", "imageAttachmentCount", "videoAttachmentCount", "timeReceived", "silent", "userInfo", "", "appDm", "notifTypeId", "notifInstanceId", "joinId", "mentionType", "appState", "inviteGuildName", "inviteChannelName", "inviteTitleVariant", "pollQuestion", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Long;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/Integer;Ljava/lang/String;Ljava/util/List;Lcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/primitives/ApplicationId;Ljava/lang/String;Ljava/lang/String;Lcom/discord/notifications/api/NotificationMessage;Ljava/lang/String;Ljava/lang/Integer;ZZLcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;ZLjava/util/Map;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "seen1", "seen2", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIILjava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Long;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/Integer;Ljava/lang/String;Ljava/util/List;Lcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/primitives/ApplicationId;Ljava/lang/String;Ljava/lang/String;Lcom/discord/notifications/api/NotificationMessage;Ljava/lang/String;Ljava/lang/Integer;ZZLcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;ZLjava/util/Map;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getType$annotations", "()V", "getType", "()Ljava/lang/String;", "getMessageId-N_6c4I0$annotations", "getMessageId-N_6c4I0", "Ljava/lang/String;", "getMessageActivityType$annotations", "getMessageActivityType", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getMessageApplicationName$annotations", "getMessageApplicationName", "getMessageType$annotations", "getMessageType", "getMessageContent$annotations", "getMessageContent", "getMessageFlags$annotations", "getMessageFlags", "()Ljava/lang/Long;", "Ljava/lang/Long;", "getChannelType$annotations", "getChannelType", "getChannelName$annotations", "getChannelName", "getChannelId-qMVnFVQ$annotations", "getChannelId-qMVnFVQ", "()Lcom/discord/primitives/ChannelId;", "getChannelIcon$annotations", "getChannelIcon", "getParentName$annotations", "getParentName", "getParentId-qMVnFVQ$annotations", "getParentId-qMVnFVQ", "getMessageReferenceType$annotations", "getMessageReferenceType", "getChannelRtcRegion$annotations", "getChannelRtcRegion", "getAckChannelIds$annotations", "getAckChannelIds", "()Ljava/util/List;", "getUserId-wUX8bhU$annotations", "getUserId-wUX8bhU", "()Lcom/discord/primitives/UserId;", "getUserUsername$annotations", "getUserUsername", "getUserGlobalName$annotations", "getUserGlobalName", "getUserDiscriminator$annotations", "getUserDiscriminator", "getUserAvatar$annotations", "getUserAvatar", "getUserGuildAvatar$annotations", "getUserGuildAvatar", "getPlatformUserUsername$annotations", "getPlatformUserUsername", "getRelationshipType$annotations", "getRelationshipType", "getGuildId-qOKuAAo$annotations", "getGuildId-qOKuAAo", "()Lcom/discord/primitives/GuildId;", "getGuildName$annotations", "getGuildName", "getGuildIcon$annotations", "getGuildIcon", "getActivityInstanceId$annotations", "getActivityInstanceId", "getActivityType$annotations", "getActivityType", "getActivityName$annotations", "getActivityName", "getApplicationId-UtIrSio$annotations", "getApplicationId-UtIrSio", "()Lcom/discord/primitives/ApplicationId;", "getApplicationName$annotations", "getApplicationName", "getApplicationIcon$annotations", "getApplicationIcon", "getMessage$annotations", "getMessage", "()Lcom/discord/notifications/api/NotificationMessage;", "getStageInstanceTopic$annotations", "getStageInstanceTopic", "getGuildScheduledEventEntityType$annotations", "getGuildScheduledEventEntityType", "getCanReply$annotations", "getCanReply", "()Z", "isFromCurrentUser$annotations", "getReceivingUserId-wUX8bhU$annotations", "getReceivingUserId-wUX8bhU", "getTitle$annotations", "getTitle", "getSubtitle$annotations", "getSubtitle", "getIconUrl$annotations", "getIconUrl", "getNotificationChannel$annotations", "getNotificationChannel", "getTrackingType$annotations", "getTrackingType", "getDeeplink$annotations", "getDeeplink", "getExpandSubtitle$annotations", "getExpandSubtitle", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getImageAttachmentUrl$annotations", "getImageAttachmentUrl", "getErgoImageAttachmentUrl$annotations", "getErgoImageAttachmentUrl", "getAttachmentTextVariant$annotations", "getAttachmentTextVariant", "getImageAttachmentCount$annotations", "getImageAttachmentCount", "getVideoAttachmentCount$annotations", "getVideoAttachmentCount", "getTimeReceived$annotations", "getTimeReceived", "getSilent$annotations", "getSilent", "getUserInfo$annotations", "getUserInfo", "()Ljava/util/Map;", "getAppDm$annotations", "getAppDm", "getNotifTypeId$annotations", "getNotifTypeId", "getNotifInstanceId$annotations", "getNotifInstanceId", "getJoinId$annotations", "getJoinId", "getMentionType$annotations", "getMentionType", "getAppState$annotations", "getAppState", "getInviteGuildName$annotations", "getInviteGuildName", "getInviteChannelName$annotations", "getInviteChannelName", "getInviteTitleVariant$annotations", "getInviteTitleVariant", "getPollQuestion$annotations", "getPollQuestion", "component1", "component2", "component2-N_6c4I0", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component10-qMVnFVQ", "component11", "component12", "component13", "component13-qMVnFVQ", "component14", "component15", "component16", "component17", "component17-wUX8bhU", "component18", "component19", "component20", "component21", "component22", "component23", "component24", "component25", "component25-qOKuAAo", "component26", "component27", "component28", "component29", "component30", "component31", "component31-UtIrSio", "component32", "component33", "component34", "component35", "component36", "component37", "component38", "component39", "component39-wUX8bhU", "component40", "component41", "component42", "component43", "component44", "component45", "component46", "component47", "component48", "component49", "component50", "component51", "component52", "component53", "component54", "component55", "component56", "component57", "component58", "component59", "component60", "component61", "component62", "component63", "component64", "copy", "copy-AIkOYOk", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Long;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/Integer;Ljava/lang/String;Ljava/util/List;Lcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/primitives/ApplicationId;Ljava/lang/String;Ljava/lang/String;Lcom/discord/notifications/api/NotificationMessage;Ljava/lang/String;Ljava/lang/Integer;ZZLcom/discord/primitives/UserId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;ZLjava/util/Map;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;)Lcom/discord/notifications/api/NotificationData;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$notification_api_release", "Companion", "$serializer", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationData {
    public static final int ACTIVITY_TYPE_PLAYING = 0;
    public static final int ACTIVITY_TYPE_STREAMING = 1;
    public static final int CHANNEL_TYPE_ANNOUNCEMENT_THREAD = 10;
    public static final int CHANNEL_TYPE_CATEGORY = 4;
    public static final int CHANNEL_TYPE_DIRECTORY = 14;
    public static final int CHANNEL_TYPE_DM = 1;
    public static final int CHANNEL_TYPE_GROUP_DM = 3;
    public static final int CHANNEL_TYPE_GUILD_ANNOUNCEMENT = 5;
    public static final int CHANNEL_TYPE_GUILD_STAGE_VOICE = 13;
    public static final int CHANNEL_TYPE_GUILD_STORE = 6;
    public static final int CHANNEL_TYPE_GUILD_TEXT = 0;
    public static final int CHANNEL_TYPE_GUILD_VOICE = 2;
    public static final int CHANNEL_TYPE_PRIVATE_THREAD = 12;
    public static final int CHANNEL_TYPE_PUBLIC_THREAD = 11;
    public static final int GUILD_SCHEDULED_EVENT_TYPE_EXTERNAL = 3;
    public static final int GUILD_SCHEDULED_EVENT_TYPE_NONE = 0;
    public static final int GUILD_SCHEDULED_EVENT_TYPE_STAGE_INSTANCE = 1;
    public static final int GUILD_SCHEDULED_EVENT_TYPE_VOICE = 2;
    public static final int INVITE_TITLE_VARIANT_EMOJI = 2;
    public static final int INVITE_TITLE_VARIANT_SENDER_ONLY = 1;
    public static final int MESSAGE_ACTIVITY_TYPE_JOIN = 1;
    public static final int MESSAGE_ACTIVITY_TYPE_LISTEN = 3;
    public static final int MESSAGE_ACTIVITY_TYPE_REQUEST = 5;
    public static final int MESSAGE_ACTIVITY_TYPE_SPECTATE = 2;
    public static final int MESSAGE_ACTIVITY_TYPE_WATCH = 4;
    public static final int MESSAGE_REFERENCE_TYPE_FORWARD = 1;
    public static final int MESSAGE_TYPE_EMOJI_ADDED = 63;
    public static final int MESSAGE_TYPE_POLL_RESULT = 46;
    public static final int MESSAGE_TYPE_USER_JOIN = 7;
    public static final int MSG_MUTE_MIN_COUNT = 2;
    public static final int NOTIF_TYPE_APPLICATION_LIBRARY_INSTALL_COMPLETE = 5;
    public static final int NOTIF_TYPE_CALL_RING = 2;
    public static final int NOTIF_TYPE_FORUM_THREAD_CREATED = 9;
    public static final int NOTIF_TYPE_FRIEND_REQUEST_REMINDER_PUSH = 13;
    public static final int NOTIF_TYPE_FRIEND_SUGGESTION_CREATE = 4;
    public static final int NOTIF_TYPE_GUILD_SCHEDULED_EVENT_UPDATE = 8;
    public static final int NOTIF_TYPE_GUILD_STREAM_START = 6;
    public static final int NOTIF_TYPE_HOME_LIFECYCLE_PUSH = 14;
    public static final int NOTIF_TYPE_MESSAGE_CREATE = 1;
    public static final int NOTIF_TYPE_MISSED_MESSAGE_PUSH = 11;
    public static final int NOTIF_TYPE_NEW_USER_SESSION = 28;
    public static final int NOTIF_TYPE_NUDGE_NEW_FRIEND_DM_PUSH = 16;
    public static final int NOTIF_TYPE_POLL_ENDED_PUSH = 15;
    public static final int NOTIF_TYPE_REACTIONS_PUSH_NOTIFICATION = 23;
    public static final int NOTIF_TYPE_RELATIONSHIP_ADD = 3;
    public static final int NOTIF_TYPE_STAGE_INSTANCE_CREATE = 7;
    public static final int NOTIF_TYPE_SUSPICIOUS_SESSION = 27;
    public static final int NOTIF_TYPE_TOP_MESSAGES_PUSH = 10;
    public static final int RELATIONSHIP_TYPE_FRIEND = 1;
    public static final int RELATIONSHIP_TYPE_INVITE_INCOMING = 3;
    @NotNull
    public static final String TRACKING_TYPE_FRIEND_REQUEST_REMINDER = "generic_friend_request_reminder";
    @NotNull
    public static final String TRACKING_TYPE_GUILD_STREAM_START = "GUILD_STREAM_START";
    @NotNull
    public static final String TRACKING_TYPE_HOME_LIFECYCLE_PUSH = "home_lifecycle_push";
    @NotNull
    public static final String TRACKING_TYPE_MISSED_MESSAGE = "generic_missed_message";
    @NotNull
    public static final String TRACKING_TYPE_MODERATOR_FEATURED_MESSAGE = "generic_home_featured_message";
    @NotNull
    public static final String TRACKING_TYPE_NEW_USER_SESSION = "new_user_session";
    @NotNull
    public static final String TRACKING_TYPE_NUDGE_NEW_FRIEND_DM_PUSH = "nudge_new_friend_dm_push";
    @NotNull
    public static final String TRACKING_TYPE_POLL_ENDED = "poll_ended";
    @NotNull
    public static final String TRACKING_TYPE_REACTIONS = "reactions_push_notification";
    @NotNull
    public static final String TRACKING_TYPE_SUSPICIOUS_SESSION = "suspicious_session";
    @NotNull
    public static final String TRACKING_TYPE_TOP_MESSAGES_PUSH = "top_messages_push";
    @NotNull
    public static final String TRACKING_TYPE_TRENDING_CONTENT_PUSH = "trending_content_push";
    @NotNull
    public static final String TYPE_ACTIVITY_START = "ACTIVITY_START";
    @NotNull
    public static final String TYPE_APPLICATION_LIBRARY_INSTALL_COMPLETE = "APPLICATION_LIBRARY_INSTALL_COMPLETE";
    @NotNull
    public static final String TYPE_CALL_ACK = "CALL_ACK";
    @NotNull
    public static final String TYPE_CALL_CONNECT = "CALL_CONNECT";
    @NotNull
    public static final String TYPE_CALL_RING = "CALL_RING";
    @NotNull
    public static final String TYPE_CALL_RING_END = "CALL_RING_END";
    @NotNull
    public static final String TYPE_CHANNEL_ACK = "CHANNEL_ACK";
    @NotNull
    public static final String TYPE_FORUM_THREAD_CREATED = "FORUM_THREAD_CREATED";
    @NotNull
    public static final String TYPE_FRIEND_SUGGESTION_CREATE = "FRIEND_SUGGESTION_CREATE";
    @NotNull
    public static final String TYPE_GENERIC_PUSH_NOTIFICATION_SENT = "GENERIC_PUSH_NOTIFICATION_SENT";
    @NotNull
    public static final String TYPE_GUILD_SCHEDULED_EVENT_UPDATE = "GUILD_SCHEDULED_EVENT_UPDATE";
    @NotNull
    public static final String TYPE_LOCAL_NOTIFICATION = "LOCAL_NOTIFICATION";
    @NotNull
    public static final String TYPE_MESSAGE_CREATE = "MESSAGE_CREATE";
    @NotNull
    public static final String TYPE_RELATIONSHIP_ADD = "RELATIONSHIP_ADD";
    @NotNull
    public static final String TYPE_STAGE_INSTANCE_CREATE = "STAGE_INSTANCE_CREATE";
    @NotNull
    private final List<ChannelId> ackChannelIds;
    private final String activityInstanceId;
    private final String activityName;
    private final Integer activityType;
    private final boolean appDm;
    private final String appState;
    private final String applicationIcon;
    private final ApplicationId applicationId;
    private final String applicationName;
    private final Integer attachmentTextVariant;
    private final boolean canReply;
    private final String channelIcon;
    private final ChannelId channelId;
    private final String channelName;
    private final String channelRtcRegion;
    private final Integer channelType;
    private final String deeplink;
    private final String ergoImageAttachmentUrl;
    private final Boolean expandSubtitle;
    private final String guildIcon;
    private final GuildId guildId;
    private final String guildName;
    private final Integer guildScheduledEventEntityType;
    private final String iconUrl;
    private final Integer imageAttachmentCount;
    private final String imageAttachmentUrl;
    private final String inviteChannelName;
    private final String inviteGuildName;
    private final Integer inviteTitleVariant;
    private final boolean isFromCurrentUser;
    private final String joinId;
    private final String mentionType;
    private final NotificationMessage message;
    private final Integer messageActivityType;
    private final String messageApplicationName;
    private final String messageContent;
    private final Long messageFlags;
    private final String messageId;
    private final Integer messageReferenceType;
    private final Integer messageType;
    private final String notifInstanceId;
    private final String notifTypeId;
    private final String notificationChannel;
    private final ChannelId parentId;
    private final String parentName;
    private final String platformUserUsername;
    private final String pollQuestion;
    private final UserId receivingUserId;
    private final Integer relationshipType;
    private final boolean silent;
    private final String stageInstanceTopic;
    private final String subtitle;
    private final String timeReceived;
    private final String title;
    private final String trackingType;
    @NotNull
    private final String type;
    private final String userAvatar;
    private final Integer userDiscriminator;
    private final String userGlobalName;
    private final String userGuildAvatar;
    private final UserId userId;
    @NotNull
    private final Map<String, String> userInfo;
    private final String userUsername;
    private final Integer videoAttachmentCount;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, l.b(o.f37120e, new Function0() { // from class: p7.e
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = NotificationData._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null, null, null, null, null, null, null, null, null, null};

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u001f\n\u0002\u0010\u000e\n\u0002\b.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010S\u001a\b\u0012\u0004\u0012\u00020U0TR\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0013\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0018\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u001a\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u001b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u001c\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u001d\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u001e\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u001f\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010 \u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010!\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\"\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010#\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010$\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010&\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010'\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010(\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010)\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010*\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010+\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010,\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010-\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010.\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010/\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00100\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00101\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00102\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00103\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00104\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00105\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00106\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00107\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00108\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u00109\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010:\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010;\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010<\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010=\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010>\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010?\u001a\u00020%X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010@\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010A\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010B\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010C\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010D\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010E\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010F\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010G\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010H\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010I\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010J\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010K\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010L\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010M\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010N\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010O\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010P\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010Q\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010R\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006V"}, d2 = {"Lcom/discord/notifications/api/NotificationData$Companion;", "", "<init>", "()V", "CHANNEL_TYPE_GUILD_TEXT", "", "CHANNEL_TYPE_DM", "CHANNEL_TYPE_GUILD_VOICE", "CHANNEL_TYPE_GROUP_DM", "CHANNEL_TYPE_CATEGORY", "CHANNEL_TYPE_GUILD_ANNOUNCEMENT", "CHANNEL_TYPE_GUILD_STORE", "CHANNEL_TYPE_ANNOUNCEMENT_THREAD", "CHANNEL_TYPE_PUBLIC_THREAD", "CHANNEL_TYPE_PRIVATE_THREAD", "CHANNEL_TYPE_GUILD_STAGE_VOICE", "CHANNEL_TYPE_DIRECTORY", "GUILD_SCHEDULED_EVENT_TYPE_NONE", "GUILD_SCHEDULED_EVENT_TYPE_STAGE_INSTANCE", "GUILD_SCHEDULED_EVENT_TYPE_VOICE", "GUILD_SCHEDULED_EVENT_TYPE_EXTERNAL", "MESSAGE_ACTIVITY_TYPE_JOIN", "MESSAGE_ACTIVITY_TYPE_SPECTATE", "MESSAGE_ACTIVITY_TYPE_LISTEN", "MESSAGE_ACTIVITY_TYPE_WATCH", "MESSAGE_ACTIVITY_TYPE_REQUEST", "MESSAGE_TYPE_USER_JOIN", "MESSAGE_TYPE_POLL_RESULT", "MESSAGE_TYPE_EMOJI_ADDED", "MESSAGE_REFERENCE_TYPE_FORWARD", "RELATIONSHIP_TYPE_FRIEND", "RELATIONSHIP_TYPE_INVITE_INCOMING", "ACTIVITY_TYPE_PLAYING", "ACTIVITY_TYPE_STREAMING", "INVITE_TITLE_VARIANT_SENDER_ONLY", "INVITE_TITLE_VARIANT_EMOJI", "TYPE_ACTIVITY_START", "", "TYPE_CHANNEL_ACK", "TYPE_MESSAGE_CREATE", "TYPE_RELATIONSHIP_ADD", "TYPE_CALL_RING", "TYPE_CALL_RING_END", "TYPE_CALL_ACK", "TYPE_CALL_CONNECT", "TYPE_APPLICATION_LIBRARY_INSTALL_COMPLETE", "TYPE_STAGE_INSTANCE_CREATE", "TYPE_FORUM_THREAD_CREATED", "TYPE_GUILD_SCHEDULED_EVENT_UPDATE", "TYPE_GENERIC_PUSH_NOTIFICATION_SENT", "TYPE_FRIEND_SUGGESTION_CREATE", "TYPE_LOCAL_NOTIFICATION", "TRACKING_TYPE_SUSPICIOUS_SESSION", "TRACKING_TYPE_GUILD_STREAM_START", "TRACKING_TYPE_MODERATOR_FEATURED_MESSAGE", "TRACKING_TYPE_MISSED_MESSAGE", "TRACKING_TYPE_FRIEND_REQUEST_REMINDER", "TRACKING_TYPE_NUDGE_NEW_FRIEND_DM_PUSH", "TRACKING_TYPE_TOP_MESSAGES_PUSH", "TRACKING_TYPE_HOME_LIFECYCLE_PUSH", "TRACKING_TYPE_TRENDING_CONTENT_PUSH", "TRACKING_TYPE_POLL_ENDED", "TRACKING_TYPE_REACTIONS", "TRACKING_TYPE_NEW_USER_SESSION", "MSG_MUTE_MIN_COUNT", "NOTIF_TYPE_MESSAGE_CREATE", "NOTIF_TYPE_CALL_RING", "NOTIF_TYPE_RELATIONSHIP_ADD", "NOTIF_TYPE_FRIEND_SUGGESTION_CREATE", "NOTIF_TYPE_APPLICATION_LIBRARY_INSTALL_COMPLETE", "NOTIF_TYPE_GUILD_STREAM_START", "NOTIF_TYPE_STAGE_INSTANCE_CREATE", "NOTIF_TYPE_GUILD_SCHEDULED_EVENT_UPDATE", "NOTIF_TYPE_FORUM_THREAD_CREATED", "NOTIF_TYPE_TOP_MESSAGES_PUSH", "NOTIF_TYPE_MISSED_MESSAGE_PUSH", "NOTIF_TYPE_FRIEND_REQUEST_REMINDER_PUSH", "NOTIF_TYPE_HOME_LIFECYCLE_PUSH", "NOTIF_TYPE_POLL_ENDED_PUSH", "NOTIF_TYPE_NUDGE_NEW_FRIEND_DM_PUSH", "NOTIF_TYPE_REACTIONS_PUSH_NOTIFICATION", "NOTIF_TYPE_SUSPICIOUS_SESSION", "NOTIF_TYPE_NEW_USER_SESSION", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/notifications/api/NotificationData;", "notification_api_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final KSerializer serializer() {
            return NotificationData$$serializer.INSTANCE;
        }

        private Companion() {
        }
    }

    public /* synthetic */ NotificationData(int i10, int i11, int i12, String str, String str2, Integer num, String str3, Integer num2, String str4, Long l10, Integer num3, String str5, ChannelId channelId, String str6, String str7, ChannelId channelId2, Integer num4, String str8, List list, UserId userId, String str9, String str10, Integer num5, String str11, String str12, String str13, Integer num6, GuildId guildId, String str14, String str15, String str16, Integer num7, String str17, ApplicationId applicationId, String str18, String str19, NotificationMessage notificationMessage, String str20, Integer num8, boolean z10, boolean z11, UserId userId2, String str21, String str22, String str23, String str24, String str25, String str26, Boolean bool, String str27, String str28, Integer num9, Integer num10, Integer num11, String str29, boolean z12, Map map, boolean z13, String str30, String str31, String str32, String str33, String str34, String str35, String str36, Integer num12, String str37, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, str, str2, num, str3, num2, str4, l10, num3, str5, channelId, str6, str7, channelId2, num4, str8, list, userId, str9, str10, num5, str11, str12, str13, num6, guildId, str14, str15, str16, num7, str17, applicationId, str18, str19, notificationMessage, str20, num8, z10, z11, userId2, str21, str22, str23, str24, str25, str26, bool, str27, str28, num9, num10, num11, str29, z12, map, z13, str30, str31, str32, str33, str34, str35, str36, num12, str37, serializationConstructorMarker);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        n2 n2Var = n2.f20978a;
        return new u0(n2Var, n2Var);
    }

    @m(with = ChannelListSerializer.class)
    public static /* synthetic */ void getAckChannelIds$annotations() {
    }

    public static /* synthetic */ void getActivityInstanceId$annotations() {
    }

    public static /* synthetic */ void getActivityName$annotations() {
    }

    public static /* synthetic */ void getActivityType$annotations() {
    }

    public static /* synthetic */ void getAppDm$annotations() {
    }

    public static /* synthetic */ void getAppState$annotations() {
    }

    public static /* synthetic */ void getApplicationIcon$annotations() {
    }

    /* renamed from: getApplicationId-UtIrSio$annotations  reason: not valid java name */
    public static /* synthetic */ void m1006getApplicationIdUtIrSio$annotations() {
    }

    public static /* synthetic */ void getApplicationName$annotations() {
    }

    public static /* synthetic */ void getAttachmentTextVariant$annotations() {
    }

    @m(with = CanReplySerializer.class)
    public static /* synthetic */ void getCanReply$annotations() {
    }

    public static /* synthetic */ void getChannelIcon$annotations() {
    }

    /* renamed from: getChannelId-qMVnFVQ$annotations  reason: not valid java name */
    public static /* synthetic */ void m1007getChannelIdqMVnFVQ$annotations() {
    }

    public static /* synthetic */ void getChannelName$annotations() {
    }

    public static /* synthetic */ void getChannelRtcRegion$annotations() {
    }

    public static /* synthetic */ void getChannelType$annotations() {
    }

    public static /* synthetic */ void getDeeplink$annotations() {
    }

    public static /* synthetic */ void getErgoImageAttachmentUrl$annotations() {
    }

    public static /* synthetic */ void getExpandSubtitle$annotations() {
    }

    public static /* synthetic */ void getGuildIcon$annotations() {
    }

    /* renamed from: getGuildId-qOKuAAo$annotations  reason: not valid java name */
    public static /* synthetic */ void m1008getGuildIdqOKuAAo$annotations() {
    }

    public static /* synthetic */ void getGuildName$annotations() {
    }

    public static /* synthetic */ void getGuildScheduledEventEntityType$annotations() {
    }

    public static /* synthetic */ void getIconUrl$annotations() {
    }

    public static /* synthetic */ void getImageAttachmentCount$annotations() {
    }

    public static /* synthetic */ void getImageAttachmentUrl$annotations() {
    }

    public static /* synthetic */ void getInviteChannelName$annotations() {
    }

    public static /* synthetic */ void getInviteGuildName$annotations() {
    }

    public static /* synthetic */ void getInviteTitleVariant$annotations() {
    }

    public static /* synthetic */ void getJoinId$annotations() {
    }

    public static /* synthetic */ void getMentionType$annotations() {
    }

    @m(with = NotificationMessageSerializer.class)
    public static /* synthetic */ void getMessage$annotations() {
    }

    public static /* synthetic */ void getMessageActivityType$annotations() {
    }

    public static /* synthetic */ void getMessageApplicationName$annotations() {
    }

    public static /* synthetic */ void getMessageContent$annotations() {
    }

    public static /* synthetic */ void getMessageFlags$annotations() {
    }

    /* renamed from: getMessageId-N_6c4I0$annotations  reason: not valid java name */
    public static /* synthetic */ void m1009getMessageIdN_6c4I0$annotations() {
    }

    public static /* synthetic */ void getMessageReferenceType$annotations() {
    }

    public static /* synthetic */ void getMessageType$annotations() {
    }

    public static /* synthetic */ void getNotifInstanceId$annotations() {
    }

    public static /* synthetic */ void getNotifTypeId$annotations() {
    }

    public static /* synthetic */ void getNotificationChannel$annotations() {
    }

    /* renamed from: getParentId-qMVnFVQ$annotations  reason: not valid java name */
    public static /* synthetic */ void m1010getParentIdqMVnFVQ$annotations() {
    }

    public static /* synthetic */ void getParentName$annotations() {
    }

    public static /* synthetic */ void getPlatformUserUsername$annotations() {
    }

    public static /* synthetic */ void getPollQuestion$annotations() {
    }

    /* renamed from: getReceivingUserId-wUX8bhU$annotations  reason: not valid java name */
    public static /* synthetic */ void m1011getReceivingUserIdwUX8bhU$annotations() {
    }

    public static /* synthetic */ void getRelationshipType$annotations() {
    }

    public static /* synthetic */ void getSilent$annotations() {
    }

    public static /* synthetic */ void getStageInstanceTopic$annotations() {
    }

    public static /* synthetic */ void getSubtitle$annotations() {
    }

    public static /* synthetic */ void getTimeReceived$annotations() {
    }

    public static /* synthetic */ void getTitle$annotations() {
    }

    public static /* synthetic */ void getTrackingType$annotations() {
    }

    public static /* synthetic */ void getType$annotations() {
    }

    public static /* synthetic */ void getUserAvatar$annotations() {
    }

    public static /* synthetic */ void getUserDiscriminator$annotations() {
    }

    public static /* synthetic */ void getUserGlobalName$annotations() {
    }

    public static /* synthetic */ void getUserGuildAvatar$annotations() {
    }

    /* renamed from: getUserId-wUX8bhU$annotations  reason: not valid java name */
    public static /* synthetic */ void m1012getUserIdwUX8bhU$annotations() {
    }

    public static /* synthetic */ void getUserInfo$annotations() {
    }

    public static /* synthetic */ void getUserUsername$annotations() {
    }

    public static /* synthetic */ void getVideoAttachmentCount$annotations() {
    }

    public static /* synthetic */ void isFromCurrentUser$annotations() {
    }

    public static final /* synthetic */ void write$Self$notification_api_release(NotificationData notificationData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        MessageId messageId;
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.y(serialDescriptor, 0, notificationData.type);
        if (compositeEncoder.z(serialDescriptor, 1) || notificationData.messageId != null) {
            MessageId$$serializer messageId$$serializer = MessageId$$serializer.INSTANCE;
            String str = notificationData.messageId;
            if (str != null) {
                messageId = MessageId.m1085boximpl(str);
            } else {
                messageId = null;
            }
            compositeEncoder.s(serialDescriptor, 1, messageId$$serializer, messageId);
        }
        if (compositeEncoder.z(serialDescriptor, 2) || notificationData.messageActivityType != null) {
            compositeEncoder.s(serialDescriptor, 2, p0.f20994a, notificationData.messageActivityType);
        }
        if (compositeEncoder.z(serialDescriptor, 3) || notificationData.messageApplicationName != null) {
            compositeEncoder.s(serialDescriptor, 3, n2.f20978a, notificationData.messageApplicationName);
        }
        if (compositeEncoder.z(serialDescriptor, 4) || notificationData.messageType != null) {
            compositeEncoder.s(serialDescriptor, 4, p0.f20994a, notificationData.messageType);
        }
        if (compositeEncoder.z(serialDescriptor, 5) || notificationData.messageContent != null) {
            compositeEncoder.s(serialDescriptor, 5, n2.f20978a, notificationData.messageContent);
        }
        if (compositeEncoder.z(serialDescriptor, 6) || notificationData.messageFlags != null) {
            compositeEncoder.s(serialDescriptor, 6, z0.f21052a, notificationData.messageFlags);
        }
        if (compositeEncoder.z(serialDescriptor, 7) || notificationData.channelType != null) {
            compositeEncoder.s(serialDescriptor, 7, p0.f20994a, notificationData.channelType);
        }
        if (compositeEncoder.z(serialDescriptor, 8) || notificationData.channelName != null) {
            compositeEncoder.s(serialDescriptor, 8, n2.f20978a, notificationData.channelName);
        }
        if (compositeEncoder.z(serialDescriptor, 9) || notificationData.channelId != null) {
            compositeEncoder.s(serialDescriptor, 9, ChannelId$$serializer.INSTANCE, notificationData.channelId);
        }
        if (compositeEncoder.z(serialDescriptor, 10) || notificationData.channelIcon != null) {
            compositeEncoder.s(serialDescriptor, 10, n2.f20978a, notificationData.channelIcon);
        }
        if (compositeEncoder.z(serialDescriptor, 11) || notificationData.parentName != null) {
            compositeEncoder.s(serialDescriptor, 11, n2.f20978a, notificationData.parentName);
        }
        if (compositeEncoder.z(serialDescriptor, 12) || notificationData.parentId != null) {
            compositeEncoder.s(serialDescriptor, 12, ChannelId$$serializer.INSTANCE, notificationData.parentId);
        }
        if (compositeEncoder.z(serialDescriptor, 13) || notificationData.messageReferenceType != null) {
            compositeEncoder.s(serialDescriptor, 13, p0.f20994a, notificationData.messageReferenceType);
        }
        if (compositeEncoder.z(serialDescriptor, 14) || notificationData.channelRtcRegion != null) {
            compositeEncoder.s(serialDescriptor, 14, n2.f20978a, notificationData.channelRtcRegion);
        }
        if (compositeEncoder.z(serialDescriptor, 15) || !Intrinsics.areEqual(notificationData.ackChannelIds, CollectionsKt.l())) {
            compositeEncoder.D(serialDescriptor, 15, ChannelListSerializer.INSTANCE, notificationData.ackChannelIds);
        }
        if (compositeEncoder.z(serialDescriptor, 16) || notificationData.userId != null) {
            compositeEncoder.s(serialDescriptor, 16, UserId$$serializer.INSTANCE, notificationData.userId);
        }
        if (compositeEncoder.z(serialDescriptor, 17) || notificationData.userUsername != null) {
            compositeEncoder.s(serialDescriptor, 17, n2.f20978a, notificationData.userUsername);
        }
        if (compositeEncoder.z(serialDescriptor, 18) || notificationData.userGlobalName != null) {
            compositeEncoder.s(serialDescriptor, 18, n2.f20978a, notificationData.userGlobalName);
        }
        if (compositeEncoder.z(serialDescriptor, 19) || notificationData.userDiscriminator != null) {
            compositeEncoder.s(serialDescriptor, 19, p0.f20994a, notificationData.userDiscriminator);
        }
        if (compositeEncoder.z(serialDescriptor, 20) || notificationData.userAvatar != null) {
            compositeEncoder.s(serialDescriptor, 20, n2.f20978a, notificationData.userAvatar);
        }
        if (compositeEncoder.z(serialDescriptor, 21) || notificationData.userGuildAvatar != null) {
            compositeEncoder.s(serialDescriptor, 21, n2.f20978a, notificationData.userGuildAvatar);
        }
        if (compositeEncoder.z(serialDescriptor, 22) || notificationData.platformUserUsername != null) {
            compositeEncoder.s(serialDescriptor, 22, n2.f20978a, notificationData.platformUserUsername);
        }
        if (compositeEncoder.z(serialDescriptor, 23) || notificationData.relationshipType != null) {
            compositeEncoder.s(serialDescriptor, 23, p0.f20994a, notificationData.relationshipType);
        }
        if (compositeEncoder.z(serialDescriptor, 24) || notificationData.guildId != null) {
            compositeEncoder.s(serialDescriptor, 24, GuildId$$serializer.INSTANCE, notificationData.guildId);
        }
        if (compositeEncoder.z(serialDescriptor, 25) || notificationData.guildName != null) {
            compositeEncoder.s(serialDescriptor, 25, n2.f20978a, notificationData.guildName);
        }
        if (compositeEncoder.z(serialDescriptor, 26) || notificationData.guildIcon != null) {
            compositeEncoder.s(serialDescriptor, 26, n2.f20978a, notificationData.guildIcon);
        }
        if (compositeEncoder.z(serialDescriptor, 27) || notificationData.activityInstanceId != null) {
            compositeEncoder.s(serialDescriptor, 27, n2.f20978a, notificationData.activityInstanceId);
        }
        if (compositeEncoder.z(serialDescriptor, 28) || notificationData.activityType != null) {
            compositeEncoder.s(serialDescriptor, 28, p0.f20994a, notificationData.activityType);
        }
        if (compositeEncoder.z(serialDescriptor, 29) || notificationData.activityName != null) {
            compositeEncoder.s(serialDescriptor, 29, n2.f20978a, notificationData.activityName);
        }
        if (compositeEncoder.z(serialDescriptor, 30) || notificationData.applicationId != null) {
            compositeEncoder.s(serialDescriptor, 30, ApplicationId$$serializer.INSTANCE, notificationData.applicationId);
        }
        if (compositeEncoder.z(serialDescriptor, 31) || notificationData.applicationName != null) {
            compositeEncoder.s(serialDescriptor, 31, n2.f20978a, notificationData.applicationName);
        }
        if (compositeEncoder.z(serialDescriptor, 32) || notificationData.applicationIcon != null) {
            compositeEncoder.s(serialDescriptor, 32, n2.f20978a, notificationData.applicationIcon);
        }
        if (compositeEncoder.z(serialDescriptor, 33) || notificationData.message != null) {
            compositeEncoder.s(serialDescriptor, 33, NotificationMessageSerializer.INSTANCE, notificationData.message);
        }
        if (compositeEncoder.z(serialDescriptor, 34) || notificationData.stageInstanceTopic != null) {
            compositeEncoder.s(serialDescriptor, 34, n2.f20978a, notificationData.stageInstanceTopic);
        }
        if (compositeEncoder.z(serialDescriptor, 35) || notificationData.guildScheduledEventEntityType != null) {
            compositeEncoder.s(serialDescriptor, 35, p0.f20994a, notificationData.guildScheduledEventEntityType);
        }
        if (compositeEncoder.z(serialDescriptor, 36) || notificationData.canReply) {
            compositeEncoder.D(serialDescriptor, 36, CanReplySerializer.INSTANCE, Boolean.valueOf(notificationData.canReply));
        }
        if (compositeEncoder.z(serialDescriptor, 37) || notificationData.isFromCurrentUser) {
            compositeEncoder.x(serialDescriptor, 37, notificationData.isFromCurrentUser);
        }
        if (compositeEncoder.z(serialDescriptor, 38) || notificationData.receivingUserId != null) {
            compositeEncoder.s(serialDescriptor, 38, UserId$$serializer.INSTANCE, notificationData.receivingUserId);
        }
        if (compositeEncoder.z(serialDescriptor, 39) || notificationData.title != null) {
            compositeEncoder.s(serialDescriptor, 39, n2.f20978a, notificationData.title);
        }
        if (compositeEncoder.z(serialDescriptor, 40) || notificationData.subtitle != null) {
            compositeEncoder.s(serialDescriptor, 40, n2.f20978a, notificationData.subtitle);
        }
        if (compositeEncoder.z(serialDescriptor, 41) || notificationData.iconUrl != null) {
            compositeEncoder.s(serialDescriptor, 41, n2.f20978a, notificationData.iconUrl);
        }
        if (compositeEncoder.z(serialDescriptor, 42) || notificationData.notificationChannel != null) {
            compositeEncoder.s(serialDescriptor, 42, n2.f20978a, notificationData.notificationChannel);
        }
        if (compositeEncoder.z(serialDescriptor, 43) || notificationData.trackingType != null) {
            compositeEncoder.s(serialDescriptor, 43, n2.f20978a, notificationData.trackingType);
        }
        if (compositeEncoder.z(serialDescriptor, 44) || notificationData.deeplink != null) {
            compositeEncoder.s(serialDescriptor, 44, n2.f20978a, notificationData.deeplink);
        }
        if (compositeEncoder.z(serialDescriptor, 45) || !Intrinsics.areEqual(notificationData.expandSubtitle, Boolean.FALSE)) {
            compositeEncoder.s(serialDescriptor, 45, h.f20942a, notificationData.expandSubtitle);
        }
        if (compositeEncoder.z(serialDescriptor, 46) || notificationData.imageAttachmentUrl != null) {
            compositeEncoder.s(serialDescriptor, 46, n2.f20978a, notificationData.imageAttachmentUrl);
        }
        if (compositeEncoder.z(serialDescriptor, 47) || notificationData.ergoImageAttachmentUrl != null) {
            compositeEncoder.s(serialDescriptor, 47, n2.f20978a, notificationData.ergoImageAttachmentUrl);
        }
        if (compositeEncoder.z(serialDescriptor, 48) || notificationData.attachmentTextVariant != null) {
            compositeEncoder.s(serialDescriptor, 48, p0.f20994a, notificationData.attachmentTextVariant);
        }
        if (compositeEncoder.z(serialDescriptor, 49) || notificationData.imageAttachmentCount != null) {
            compositeEncoder.s(serialDescriptor, 49, p0.f20994a, notificationData.imageAttachmentCount);
        }
        if (compositeEncoder.z(serialDescriptor, 50) || notificationData.videoAttachmentCount != null) {
            compositeEncoder.s(serialDescriptor, 50, p0.f20994a, notificationData.videoAttachmentCount);
        }
        if (compositeEncoder.z(serialDescriptor, 51) || notificationData.timeReceived != null) {
            compositeEncoder.s(serialDescriptor, 51, n2.f20978a, notificationData.timeReceived);
        }
        if (compositeEncoder.z(serialDescriptor, 52) || notificationData.silent) {
            compositeEncoder.x(serialDescriptor, 52, notificationData.silent);
        }
        if (compositeEncoder.z(serialDescriptor, 53) || !Intrinsics.areEqual(notificationData.userInfo, o0.i())) {
            compositeEncoder.D(serialDescriptor, 53, (at.o) lazyArr[53].getValue(), notificationData.userInfo);
        }
        if (compositeEncoder.z(serialDescriptor, 54) || notificationData.appDm) {
            compositeEncoder.x(serialDescriptor, 54, notificationData.appDm);
        }
        if (compositeEncoder.z(serialDescriptor, 55) || notificationData.notifTypeId != null) {
            compositeEncoder.s(serialDescriptor, 55, n2.f20978a, notificationData.notifTypeId);
        }
        if (compositeEncoder.z(serialDescriptor, 56) || notificationData.notifInstanceId != null) {
            compositeEncoder.s(serialDescriptor, 56, n2.f20978a, notificationData.notifInstanceId);
        }
        if (compositeEncoder.z(serialDescriptor, 57) || notificationData.joinId != null) {
            compositeEncoder.s(serialDescriptor, 57, n2.f20978a, notificationData.joinId);
        }
        if (compositeEncoder.z(serialDescriptor, 58) || notificationData.mentionType != null) {
            compositeEncoder.s(serialDescriptor, 58, n2.f20978a, notificationData.mentionType);
        }
        if (compositeEncoder.z(serialDescriptor, 59) || notificationData.appState != null) {
            compositeEncoder.s(serialDescriptor, 59, n2.f20978a, notificationData.appState);
        }
        if (compositeEncoder.z(serialDescriptor, 60) || notificationData.inviteGuildName != null) {
            compositeEncoder.s(serialDescriptor, 60, n2.f20978a, notificationData.inviteGuildName);
        }
        if (compositeEncoder.z(serialDescriptor, 61) || notificationData.inviteChannelName != null) {
            compositeEncoder.s(serialDescriptor, 61, n2.f20978a, notificationData.inviteChannelName);
        }
        if (compositeEncoder.z(serialDescriptor, 62) || notificationData.inviteTitleVariant != null) {
            compositeEncoder.s(serialDescriptor, 62, p0.f20994a, notificationData.inviteTitleVariant);
        }
        if (compositeEncoder.z(serialDescriptor, 63) || notificationData.pollQuestion != null) {
            compositeEncoder.s(serialDescriptor, 63, n2.f20978a, notificationData.pollQuestion);
        }
    }

    @NotNull
    public final String component1() {
        return this.type;
    }

    /* renamed from: component10-qMVnFVQ  reason: not valid java name */
    public final ChannelId m1013component10qMVnFVQ() {
        return this.channelId;
    }

    public final String component11() {
        return this.channelIcon;
    }

    public final String component12() {
        return this.parentName;
    }

    /* renamed from: component13-qMVnFVQ  reason: not valid java name */
    public final ChannelId m1014component13qMVnFVQ() {
        return this.parentId;
    }

    public final Integer component14() {
        return this.messageReferenceType;
    }

    public final String component15() {
        return this.channelRtcRegion;
    }

    @NotNull
    public final List<ChannelId> component16() {
        return this.ackChannelIds;
    }

    /* renamed from: component17-wUX8bhU  reason: not valid java name */
    public final UserId m1015component17wUX8bhU() {
        return this.userId;
    }

    public final String component18() {
        return this.userUsername;
    }

    public final String component19() {
        return this.userGlobalName;
    }

    /* renamed from: component2-N_6c4I0  reason: not valid java name */
    public final String m1016component2N_6c4I0() {
        return this.messageId;
    }

    public final Integer component20() {
        return this.userDiscriminator;
    }

    public final String component21() {
        return this.userAvatar;
    }

    public final String component22() {
        return this.userGuildAvatar;
    }

    public final String component23() {
        return this.platformUserUsername;
    }

    public final Integer component24() {
        return this.relationshipType;
    }

    /* renamed from: component25-qOKuAAo  reason: not valid java name */
    public final GuildId m1017component25qOKuAAo() {
        return this.guildId;
    }

    public final String component26() {
        return this.guildName;
    }

    public final String component27() {
        return this.guildIcon;
    }

    public final String component28() {
        return this.activityInstanceId;
    }

    public final Integer component29() {
        return this.activityType;
    }

    public final Integer component3() {
        return this.messageActivityType;
    }

    public final String component30() {
        return this.activityName;
    }

    /* renamed from: component31-UtIrSio  reason: not valid java name */
    public final ApplicationId m1018component31UtIrSio() {
        return this.applicationId;
    }

    public final String component32() {
        return this.applicationName;
    }

    public final String component33() {
        return this.applicationIcon;
    }

    public final NotificationMessage component34() {
        return this.message;
    }

    public final String component35() {
        return this.stageInstanceTopic;
    }

    public final Integer component36() {
        return this.guildScheduledEventEntityType;
    }

    public final boolean component37() {
        return this.canReply;
    }

    public final boolean component38() {
        return this.isFromCurrentUser;
    }

    /* renamed from: component39-wUX8bhU  reason: not valid java name */
    public final UserId m1019component39wUX8bhU() {
        return this.receivingUserId;
    }

    public final String component4() {
        return this.messageApplicationName;
    }

    public final String component40() {
        return this.title;
    }

    public final String component41() {
        return this.subtitle;
    }

    public final String component42() {
        return this.iconUrl;
    }

    public final String component43() {
        return this.notificationChannel;
    }

    public final String component44() {
        return this.trackingType;
    }

    public final String component45() {
        return this.deeplink;
    }

    public final Boolean component46() {
        return this.expandSubtitle;
    }

    public final String component47() {
        return this.imageAttachmentUrl;
    }

    public final String component48() {
        return this.ergoImageAttachmentUrl;
    }

    public final Integer component49() {
        return this.attachmentTextVariant;
    }

    public final Integer component5() {
        return this.messageType;
    }

    public final Integer component50() {
        return this.imageAttachmentCount;
    }

    public final Integer component51() {
        return this.videoAttachmentCount;
    }

    public final String component52() {
        return this.timeReceived;
    }

    public final boolean component53() {
        return this.silent;
    }

    @NotNull
    public final Map<String, String> component54() {
        return this.userInfo;
    }

    public final boolean component55() {
        return this.appDm;
    }

    public final String component56() {
        return this.notifTypeId;
    }

    public final String component57() {
        return this.notifInstanceId;
    }

    public final String component58() {
        return this.joinId;
    }

    public final String component59() {
        return this.mentionType;
    }

    public final String component6() {
        return this.messageContent;
    }

    public final String component60() {
        return this.appState;
    }

    public final String component61() {
        return this.inviteGuildName;
    }

    public final String component62() {
        return this.inviteChannelName;
    }

    public final Integer component63() {
        return this.inviteTitleVariant;
    }

    public final String component64() {
        return this.pollQuestion;
    }

    public final Long component7() {
        return this.messageFlags;
    }

    public final Integer component8() {
        return this.channelType;
    }

    public final String component9() {
        return this.channelName;
    }

    @NotNull
    /* renamed from: copy-AIkOYOk  reason: not valid java name */
    public final NotificationData m1020copyAIkOYOk(@NotNull String type, String str, Integer num, String str2, Integer num2, String str3, Long l10, Integer num3, String str4, ChannelId channelId, String str5, String str6, ChannelId channelId2, Integer num4, String str7, @NotNull List<ChannelId> ackChannelIds, UserId userId, String str8, String str9, Integer num5, String str10, String str11, String str12, Integer num6, GuildId guildId, String str13, String str14, String str15, Integer num7, String str16, ApplicationId applicationId, String str17, String str18, NotificationMessage notificationMessage, String str19, Integer num8, boolean z10, boolean z11, UserId userId2, String str20, String str21, String str22, String str23, String str24, String str25, Boolean bool, String str26, String str27, Integer num9, Integer num10, Integer num11, String str28, boolean z12, @NotNull Map<String, String> userInfo, boolean z13, String str29, String str30, String str31, String str32, String str33, String str34, String str35, Integer num12, String str36) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(ackChannelIds, "ackChannelIds");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        return new NotificationData(type, str, num, str2, num2, str3, l10, num3, str4, channelId, str5, str6, channelId2, num4, str7, ackChannelIds, userId, str8, str9, num5, str10, str11, str12, num6, guildId, str13, str14, str15, num7, str16, applicationId, str17, str18, notificationMessage, str19, num8, z10, z11, userId2, str20, str21, str22, str23, str24, str25, bool, str26, str27, num9, num10, num11, str28, z12, userInfo, z13, str29, str30, str31, str32, str33, str34, str35, num12, str36, null);
    }

    public boolean equals(Object obj) {
        boolean m1089equalsimpl0;
        if (this == obj) {
            return true;
        }
        if (obj instanceof NotificationData) {
            NotificationData notificationData = (NotificationData) obj;
            if (Intrinsics.areEqual(this.type, notificationData.type)) {
                String str = this.messageId;
                String str2 = notificationData.messageId;
                if (str == null) {
                    if (str2 == null) {
                        m1089equalsimpl0 = true;
                    }
                    m1089equalsimpl0 = false;
                } else {
                    if (str2 != null) {
                        m1089equalsimpl0 = MessageId.m1089equalsimpl0(str, str2);
                    }
                    m1089equalsimpl0 = false;
                }
                return m1089equalsimpl0 && Intrinsics.areEqual(this.messageActivityType, notificationData.messageActivityType) && Intrinsics.areEqual(this.messageApplicationName, notificationData.messageApplicationName) && Intrinsics.areEqual(this.messageType, notificationData.messageType) && Intrinsics.areEqual(this.messageContent, notificationData.messageContent) && Intrinsics.areEqual(this.messageFlags, notificationData.messageFlags) && Intrinsics.areEqual(this.channelType, notificationData.channelType) && Intrinsics.areEqual(this.channelName, notificationData.channelName) && Intrinsics.areEqual(this.channelId, notificationData.channelId) && Intrinsics.areEqual(this.channelIcon, notificationData.channelIcon) && Intrinsics.areEqual(this.parentName, notificationData.parentName) && Intrinsics.areEqual(this.parentId, notificationData.parentId) && Intrinsics.areEqual(this.messageReferenceType, notificationData.messageReferenceType) && Intrinsics.areEqual(this.channelRtcRegion, notificationData.channelRtcRegion) && Intrinsics.areEqual(this.ackChannelIds, notificationData.ackChannelIds) && Intrinsics.areEqual(this.userId, notificationData.userId) && Intrinsics.areEqual(this.userUsername, notificationData.userUsername) && Intrinsics.areEqual(this.userGlobalName, notificationData.userGlobalName) && Intrinsics.areEqual(this.userDiscriminator, notificationData.userDiscriminator) && Intrinsics.areEqual(this.userAvatar, notificationData.userAvatar) && Intrinsics.areEqual(this.userGuildAvatar, notificationData.userGuildAvatar) && Intrinsics.areEqual(this.platformUserUsername, notificationData.platformUserUsername) && Intrinsics.areEqual(this.relationshipType, notificationData.relationshipType) && Intrinsics.areEqual(this.guildId, notificationData.guildId) && Intrinsics.areEqual(this.guildName, notificationData.guildName) && Intrinsics.areEqual(this.guildIcon, notificationData.guildIcon) && Intrinsics.areEqual(this.activityInstanceId, notificationData.activityInstanceId) && Intrinsics.areEqual(this.activityType, notificationData.activityType) && Intrinsics.areEqual(this.activityName, notificationData.activityName) && Intrinsics.areEqual(this.applicationId, notificationData.applicationId) && Intrinsics.areEqual(this.applicationName, notificationData.applicationName) && Intrinsics.areEqual(this.applicationIcon, notificationData.applicationIcon) && Intrinsics.areEqual(this.message, notificationData.message) && Intrinsics.areEqual(this.stageInstanceTopic, notificationData.stageInstanceTopic) && Intrinsics.areEqual(this.guildScheduledEventEntityType, notificationData.guildScheduledEventEntityType) && this.canReply == notificationData.canReply && this.isFromCurrentUser == notificationData.isFromCurrentUser && Intrinsics.areEqual(this.receivingUserId, notificationData.receivingUserId) && Intrinsics.areEqual(this.title, notificationData.title) && Intrinsics.areEqual(this.subtitle, notificationData.subtitle) && Intrinsics.areEqual(this.iconUrl, notificationData.iconUrl) && Intrinsics.areEqual(this.notificationChannel, notificationData.notificationChannel) && Intrinsics.areEqual(this.trackingType, notificationData.trackingType) && Intrinsics.areEqual(this.deeplink, notificationData.deeplink) && Intrinsics.areEqual(this.expandSubtitle, notificationData.expandSubtitle) && Intrinsics.areEqual(this.imageAttachmentUrl, notificationData.imageAttachmentUrl) && Intrinsics.areEqual(this.ergoImageAttachmentUrl, notificationData.ergoImageAttachmentUrl) && Intrinsics.areEqual(this.attachmentTextVariant, notificationData.attachmentTextVariant) && Intrinsics.areEqual(this.imageAttachmentCount, notificationData.imageAttachmentCount) && Intrinsics.areEqual(this.videoAttachmentCount, notificationData.videoAttachmentCount) && Intrinsics.areEqual(this.timeReceived, notificationData.timeReceived) && this.silent == notificationData.silent && Intrinsics.areEqual(this.userInfo, notificationData.userInfo) && this.appDm == notificationData.appDm && Intrinsics.areEqual(this.notifTypeId, notificationData.notifTypeId) && Intrinsics.areEqual(this.notifInstanceId, notificationData.notifInstanceId) && Intrinsics.areEqual(this.joinId, notificationData.joinId) && Intrinsics.areEqual(this.mentionType, notificationData.mentionType) && Intrinsics.areEqual(this.appState, notificationData.appState) && Intrinsics.areEqual(this.inviteGuildName, notificationData.inviteGuildName) && Intrinsics.areEqual(this.inviteChannelName, notificationData.inviteChannelName) && Intrinsics.areEqual(this.inviteTitleVariant, notificationData.inviteTitleVariant) && Intrinsics.areEqual(this.pollQuestion, notificationData.pollQuestion);
            }
            return false;
        }
        return false;
    }

    @NotNull
    public final List<ChannelId> getAckChannelIds() {
        return this.ackChannelIds;
    }

    public final String getActivityInstanceId() {
        return this.activityInstanceId;
    }

    public final String getActivityName() {
        return this.activityName;
    }

    public final Integer getActivityType() {
        return this.activityType;
    }

    public final boolean getAppDm() {
        return this.appDm;
    }

    public final String getAppState() {
        return this.appState;
    }

    public final String getApplicationIcon() {
        return this.applicationIcon;
    }

    /* renamed from: getApplicationId-UtIrSio  reason: not valid java name */
    public final ApplicationId m1021getApplicationIdUtIrSio() {
        return this.applicationId;
    }

    public final String getApplicationName() {
        return this.applicationName;
    }

    public final Integer getAttachmentTextVariant() {
        return this.attachmentTextVariant;
    }

    public final boolean getCanReply() {
        return this.canReply;
    }

    public final String getChannelIcon() {
        return this.channelIcon;
    }

    /* renamed from: getChannelId-qMVnFVQ  reason: not valid java name */
    public final ChannelId m1022getChannelIdqMVnFVQ() {
        return this.channelId;
    }

    public final String getChannelName() {
        return this.channelName;
    }

    public final String getChannelRtcRegion() {
        return this.channelRtcRegion;
    }

    public final Integer getChannelType() {
        return this.channelType;
    }

    public final String getDeeplink() {
        return this.deeplink;
    }

    public final String getErgoImageAttachmentUrl() {
        return this.ergoImageAttachmentUrl;
    }

    public final Boolean getExpandSubtitle() {
        return this.expandSubtitle;
    }

    public final String getGuildIcon() {
        return this.guildIcon;
    }

    /* renamed from: getGuildId-qOKuAAo  reason: not valid java name */
    public final GuildId m1023getGuildIdqOKuAAo() {
        return this.guildId;
    }

    public final String getGuildName() {
        return this.guildName;
    }

    public final Integer getGuildScheduledEventEntityType() {
        return this.guildScheduledEventEntityType;
    }

    public final String getIconUrl() {
        return this.iconUrl;
    }

    public final Integer getImageAttachmentCount() {
        return this.imageAttachmentCount;
    }

    public final String getImageAttachmentUrl() {
        return this.imageAttachmentUrl;
    }

    public final String getInviteChannelName() {
        return this.inviteChannelName;
    }

    public final String getInviteGuildName() {
        return this.inviteGuildName;
    }

    public final Integer getInviteTitleVariant() {
        return this.inviteTitleVariant;
    }

    public final String getJoinId() {
        return this.joinId;
    }

    public final String getMentionType() {
        return this.mentionType;
    }

    public final NotificationMessage getMessage() {
        return this.message;
    }

    public final Integer getMessageActivityType() {
        return this.messageActivityType;
    }

    public final String getMessageApplicationName() {
        return this.messageApplicationName;
    }

    public final String getMessageContent() {
        return this.messageContent;
    }

    public final Long getMessageFlags() {
        return this.messageFlags;
    }

    /* renamed from: getMessageId-N_6c4I0  reason: not valid java name */
    public final String m1024getMessageIdN_6c4I0() {
        return this.messageId;
    }

    public final Integer getMessageReferenceType() {
        return this.messageReferenceType;
    }

    public final Integer getMessageType() {
        return this.messageType;
    }

    public final String getNotifInstanceId() {
        return this.notifInstanceId;
    }

    public final String getNotifTypeId() {
        return this.notifTypeId;
    }

    public final String getNotificationChannel() {
        return this.notificationChannel;
    }

    /* renamed from: getParentId-qMVnFVQ  reason: not valid java name */
    public final ChannelId m1025getParentIdqMVnFVQ() {
        return this.parentId;
    }

    public final String getParentName() {
        return this.parentName;
    }

    public final String getPlatformUserUsername() {
        return this.platformUserUsername;
    }

    public final String getPollQuestion() {
        return this.pollQuestion;
    }

    /* renamed from: getReceivingUserId-wUX8bhU  reason: not valid java name */
    public final UserId m1026getReceivingUserIdwUX8bhU() {
        return this.receivingUserId;
    }

    public final Integer getRelationshipType() {
        return this.relationshipType;
    }

    public final boolean getSilent() {
        return this.silent;
    }

    public final String getStageInstanceTopic() {
        return this.stageInstanceTopic;
    }

    public final String getSubtitle() {
        return this.subtitle;
    }

    public final String getTimeReceived() {
        return this.timeReceived;
    }

    public final String getTitle() {
        return this.title;
    }

    public final String getTrackingType() {
        return this.trackingType;
    }

    @NotNull
    public final String getType() {
        return this.type;
    }

    public final String getUserAvatar() {
        return this.userAvatar;
    }

    public final Integer getUserDiscriminator() {
        return this.userDiscriminator;
    }

    public final String getUserGlobalName() {
        return this.userGlobalName;
    }

    public final String getUserGuildAvatar() {
        return this.userGuildAvatar;
    }

    /* renamed from: getUserId-wUX8bhU  reason: not valid java name */
    public final UserId m1027getUserIdwUX8bhU() {
        return this.userId;
    }

    @NotNull
    public final Map<String, String> getUserInfo() {
        return this.userInfo;
    }

    public final String getUserUsername() {
        return this.userUsername;
    }

    public final Integer getVideoAttachmentCount() {
        return this.videoAttachmentCount;
    }

    public int hashCode() {
        int hashCode = this.type.hashCode() * 31;
        String str = this.messageId;
        int m1090hashCodeimpl = (hashCode + (str == null ? 0 : MessageId.m1090hashCodeimpl(str))) * 31;
        Integer num = this.messageActivityType;
        int hashCode2 = (m1090hashCodeimpl + (num == null ? 0 : num.hashCode())) * 31;
        String str2 = this.messageApplicationName;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        Integer num2 = this.messageType;
        int hashCode4 = (hashCode3 + (num2 == null ? 0 : num2.hashCode())) * 31;
        String str3 = this.messageContent;
        int hashCode5 = (hashCode4 + (str3 == null ? 0 : str3.hashCode())) * 31;
        Long l10 = this.messageFlags;
        int hashCode6 = (hashCode5 + (l10 == null ? 0 : l10.hashCode())) * 31;
        Integer num3 = this.channelType;
        int hashCode7 = (hashCode6 + (num3 == null ? 0 : num3.hashCode())) * 31;
        String str4 = this.channelName;
        int hashCode8 = (hashCode7 + (str4 == null ? 0 : str4.hashCode())) * 31;
        ChannelId channelId = this.channelId;
        int m1064hashCodeimpl = (hashCode8 + (channelId == null ? 0 : ChannelId.m1064hashCodeimpl(channelId.m1068unboximpl()))) * 31;
        String str5 = this.channelIcon;
        int hashCode9 = (m1064hashCodeimpl + (str5 == null ? 0 : str5.hashCode())) * 31;
        String str6 = this.parentName;
        int hashCode10 = (hashCode9 + (str6 == null ? 0 : str6.hashCode())) * 31;
        ChannelId channelId2 = this.parentId;
        int m1064hashCodeimpl2 = (hashCode10 + (channelId2 == null ? 0 : ChannelId.m1064hashCodeimpl(channelId2.m1068unboximpl()))) * 31;
        Integer num4 = this.messageReferenceType;
        int hashCode11 = (m1064hashCodeimpl2 + (num4 == null ? 0 : num4.hashCode())) * 31;
        String str7 = this.channelRtcRegion;
        int hashCode12 = (((hashCode11 + (str7 == null ? 0 : str7.hashCode())) * 31) + this.ackChannelIds.hashCode()) * 31;
        UserId userId = this.userId;
        int m1142hashCodeimpl = (hashCode12 + (userId == null ? 0 : UserId.m1142hashCodeimpl(userId.m1146unboximpl()))) * 31;
        String str8 = this.userUsername;
        int hashCode13 = (m1142hashCodeimpl + (str8 == null ? 0 : str8.hashCode())) * 31;
        String str9 = this.userGlobalName;
        int hashCode14 = (hashCode13 + (str9 == null ? 0 : str9.hashCode())) * 31;
        Integer num5 = this.userDiscriminator;
        int hashCode15 = (hashCode14 + (num5 == null ? 0 : num5.hashCode())) * 31;
        String str10 = this.userAvatar;
        int hashCode16 = (hashCode15 + (str10 == null ? 0 : str10.hashCode())) * 31;
        String str11 = this.userGuildAvatar;
        int hashCode17 = (hashCode16 + (str11 == null ? 0 : str11.hashCode())) * 31;
        String str12 = this.platformUserUsername;
        int hashCode18 = (hashCode17 + (str12 == null ? 0 : str12.hashCode())) * 31;
        Integer num6 = this.relationshipType;
        int hashCode19 = (hashCode18 + (num6 == null ? 0 : num6.hashCode())) * 31;
        GuildId guildId = this.guildId;
        int m1077hashCodeimpl = (hashCode19 + (guildId == null ? 0 : GuildId.m1077hashCodeimpl(guildId.m1081unboximpl()))) * 31;
        String str13 = this.guildName;
        int hashCode20 = (m1077hashCodeimpl + (str13 == null ? 0 : str13.hashCode())) * 31;
        String str14 = this.guildIcon;
        int hashCode21 = (hashCode20 + (str14 == null ? 0 : str14.hashCode())) * 31;
        String str15 = this.activityInstanceId;
        int hashCode22 = (hashCode21 + (str15 == null ? 0 : str15.hashCode())) * 31;
        Integer num7 = this.activityType;
        int hashCode23 = (hashCode22 + (num7 == null ? 0 : num7.hashCode())) * 31;
        String str16 = this.activityName;
        int hashCode24 = (hashCode23 + (str16 == null ? 0 : str16.hashCode())) * 31;
        ApplicationId applicationId = this.applicationId;
        int m1051hashCodeimpl = (hashCode24 + (applicationId == null ? 0 : ApplicationId.m1051hashCodeimpl(applicationId.m1055unboximpl()))) * 31;
        String str17 = this.applicationName;
        int hashCode25 = (m1051hashCodeimpl + (str17 == null ? 0 : str17.hashCode())) * 31;
        String str18 = this.applicationIcon;
        int hashCode26 = (hashCode25 + (str18 == null ? 0 : str18.hashCode())) * 31;
        NotificationMessage notificationMessage = this.message;
        int hashCode27 = (hashCode26 + (notificationMessage == null ? 0 : notificationMessage.hashCode())) * 31;
        String str19 = this.stageInstanceTopic;
        int hashCode28 = (hashCode27 + (str19 == null ? 0 : str19.hashCode())) * 31;
        Integer num8 = this.guildScheduledEventEntityType;
        int hashCode29 = (((((hashCode28 + (num8 == null ? 0 : num8.hashCode())) * 31) + Boolean.hashCode(this.canReply)) * 31) + Boolean.hashCode(this.isFromCurrentUser)) * 31;
        UserId userId2 = this.receivingUserId;
        int m1142hashCodeimpl2 = (hashCode29 + (userId2 == null ? 0 : UserId.m1142hashCodeimpl(userId2.m1146unboximpl()))) * 31;
        String str20 = this.title;
        int hashCode30 = (m1142hashCodeimpl2 + (str20 == null ? 0 : str20.hashCode())) * 31;
        String str21 = this.subtitle;
        int hashCode31 = (hashCode30 + (str21 == null ? 0 : str21.hashCode())) * 31;
        String str22 = this.iconUrl;
        int hashCode32 = (hashCode31 + (str22 == null ? 0 : str22.hashCode())) * 31;
        String str23 = this.notificationChannel;
        int hashCode33 = (hashCode32 + (str23 == null ? 0 : str23.hashCode())) * 31;
        String str24 = this.trackingType;
        int hashCode34 = (hashCode33 + (str24 == null ? 0 : str24.hashCode())) * 31;
        String str25 = this.deeplink;
        int hashCode35 = (hashCode34 + (str25 == null ? 0 : str25.hashCode())) * 31;
        Boolean bool = this.expandSubtitle;
        int hashCode36 = (hashCode35 + (bool == null ? 0 : bool.hashCode())) * 31;
        String str26 = this.imageAttachmentUrl;
        int hashCode37 = (hashCode36 + (str26 == null ? 0 : str26.hashCode())) * 31;
        String str27 = this.ergoImageAttachmentUrl;
        int hashCode38 = (hashCode37 + (str27 == null ? 0 : str27.hashCode())) * 31;
        Integer num9 = this.attachmentTextVariant;
        int hashCode39 = (hashCode38 + (num9 == null ? 0 : num9.hashCode())) * 31;
        Integer num10 = this.imageAttachmentCount;
        int hashCode40 = (hashCode39 + (num10 == null ? 0 : num10.hashCode())) * 31;
        Integer num11 = this.videoAttachmentCount;
        int hashCode41 = (hashCode40 + (num11 == null ? 0 : num11.hashCode())) * 31;
        String str28 = this.timeReceived;
        int hashCode42 = (((((((hashCode41 + (str28 == null ? 0 : str28.hashCode())) * 31) + Boolean.hashCode(this.silent)) * 31) + this.userInfo.hashCode()) * 31) + Boolean.hashCode(this.appDm)) * 31;
        String str29 = this.notifTypeId;
        int hashCode43 = (hashCode42 + (str29 == null ? 0 : str29.hashCode())) * 31;
        String str30 = this.notifInstanceId;
        int hashCode44 = (hashCode43 + (str30 == null ? 0 : str30.hashCode())) * 31;
        String str31 = this.joinId;
        int hashCode45 = (hashCode44 + (str31 == null ? 0 : str31.hashCode())) * 31;
        String str32 = this.mentionType;
        int hashCode46 = (hashCode45 + (str32 == null ? 0 : str32.hashCode())) * 31;
        String str33 = this.appState;
        int hashCode47 = (hashCode46 + (str33 == null ? 0 : str33.hashCode())) * 31;
        String str34 = this.inviteGuildName;
        int hashCode48 = (hashCode47 + (str34 == null ? 0 : str34.hashCode())) * 31;
        String str35 = this.inviteChannelName;
        int hashCode49 = (hashCode48 + (str35 == null ? 0 : str35.hashCode())) * 31;
        Integer num12 = this.inviteTitleVariant;
        int hashCode50 = (hashCode49 + (num12 == null ? 0 : num12.hashCode())) * 31;
        String str36 = this.pollQuestion;
        return hashCode50 + (str36 != null ? str36.hashCode() : 0);
    }

    public final boolean isFromCurrentUser() {
        return this.isFromCurrentUser;
    }

    @NotNull
    public String toString() {
        String str = this.type;
        String str2 = this.messageId;
        String m1092toStringimpl = str2 == null ? "null" : MessageId.m1092toStringimpl(str2);
        Integer num = this.messageActivityType;
        String str3 = this.messageApplicationName;
        Integer num2 = this.messageType;
        String str4 = this.messageContent;
        Long l10 = this.messageFlags;
        Integer num3 = this.channelType;
        String str5 = this.channelName;
        ChannelId channelId = this.channelId;
        String str6 = this.channelIcon;
        String str7 = this.parentName;
        ChannelId channelId2 = this.parentId;
        Integer num4 = this.messageReferenceType;
        String str8 = this.channelRtcRegion;
        List<ChannelId> list = this.ackChannelIds;
        UserId userId = this.userId;
        String str9 = this.userUsername;
        String str10 = this.userGlobalName;
        Integer num5 = this.userDiscriminator;
        String str11 = this.userAvatar;
        String str12 = this.userGuildAvatar;
        String str13 = this.platformUserUsername;
        Integer num6 = this.relationshipType;
        GuildId guildId = this.guildId;
        String str14 = this.guildName;
        String str15 = this.guildIcon;
        String str16 = this.activityInstanceId;
        Integer num7 = this.activityType;
        String str17 = this.activityName;
        ApplicationId applicationId = this.applicationId;
        String str18 = this.applicationName;
        String str19 = this.applicationIcon;
        NotificationMessage notificationMessage = this.message;
        String str20 = this.stageInstanceTopic;
        Integer num8 = this.guildScheduledEventEntityType;
        boolean z10 = this.canReply;
        boolean z11 = this.isFromCurrentUser;
        UserId userId2 = this.receivingUserId;
        String str21 = this.title;
        String str22 = this.subtitle;
        String str23 = this.iconUrl;
        String str24 = this.notificationChannel;
        String str25 = this.trackingType;
        String str26 = this.deeplink;
        Boolean bool = this.expandSubtitle;
        String str27 = this.imageAttachmentUrl;
        String str28 = this.ergoImageAttachmentUrl;
        Integer num9 = this.attachmentTextVariant;
        Integer num10 = this.imageAttachmentCount;
        Integer num11 = this.videoAttachmentCount;
        String str29 = this.timeReceived;
        boolean z12 = this.silent;
        Map<String, String> map = this.userInfo;
        boolean z13 = this.appDm;
        String str30 = this.notifTypeId;
        String str31 = this.notifInstanceId;
        String str32 = this.joinId;
        String str33 = this.mentionType;
        String str34 = this.appState;
        String str35 = this.inviteGuildName;
        String str36 = this.inviteChannelName;
        Integer num12 = this.inviteTitleVariant;
        String str37 = this.pollQuestion;
        return "NotificationData(type=" + str + ", messageId=" + m1092toStringimpl + ", messageActivityType=" + num + ", messageApplicationName=" + str3 + ", messageType=" + num2 + ", messageContent=" + str4 + ", messageFlags=" + l10 + ", channelType=" + num3 + ", channelName=" + str5 + ", channelId=" + channelId + ", channelIcon=" + str6 + ", parentName=" + str7 + ", parentId=" + channelId2 + ", messageReferenceType=" + num4 + ", channelRtcRegion=" + str8 + ", ackChannelIds=" + list + ", userId=" + userId + ", userUsername=" + str9 + ", userGlobalName=" + str10 + ", userDiscriminator=" + num5 + ", userAvatar=" + str11 + ", userGuildAvatar=" + str12 + ", platformUserUsername=" + str13 + ", relationshipType=" + num6 + ", guildId=" + guildId + ", guildName=" + str14 + ", guildIcon=" + str15 + ", activityInstanceId=" + str16 + ", activityType=" + num7 + ", activityName=" + str17 + ", applicationId=" + applicationId + ", applicationName=" + str18 + ", applicationIcon=" + str19 + ", message=" + notificationMessage + ", stageInstanceTopic=" + str20 + ", guildScheduledEventEntityType=" + num8 + ", canReply=" + z10 + ", isFromCurrentUser=" + z11 + ", receivingUserId=" + userId2 + ", title=" + str21 + ", subtitle=" + str22 + ", iconUrl=" + str23 + ", notificationChannel=" + str24 + ", trackingType=" + str25 + ", deeplink=" + str26 + ", expandSubtitle=" + bool + ", imageAttachmentUrl=" + str27 + ", ergoImageAttachmentUrl=" + str28 + ", attachmentTextVariant=" + num9 + ", imageAttachmentCount=" + num10 + ", videoAttachmentCount=" + num11 + ", timeReceived=" + str29 + ", silent=" + z12 + ", userInfo=" + map + ", appDm=" + z13 + ", notifTypeId=" + str30 + ", notifInstanceId=" + str31 + ", joinId=" + str32 + ", mentionType=" + str33 + ", appState=" + str34 + ", inviteGuildName=" + str35 + ", inviteChannelName=" + str36 + ", inviteTitleVariant=" + num12 + ", pollQuestion=" + str37 + ")";
    }

    public /* synthetic */ NotificationData(String str, String str2, Integer num, String str3, Integer num2, String str4, Long l10, Integer num3, String str5, ChannelId channelId, String str6, String str7, ChannelId channelId2, Integer num4, String str8, List list, UserId userId, String str9, String str10, Integer num5, String str11, String str12, String str13, Integer num6, GuildId guildId, String str14, String str15, String str16, Integer num7, String str17, ApplicationId applicationId, String str18, String str19, NotificationMessage notificationMessage, String str20, Integer num8, boolean z10, boolean z11, UserId userId2, String str21, String str22, String str23, String str24, String str25, String str26, Boolean bool, String str27, String str28, Integer num9, Integer num10, Integer num11, String str29, boolean z12, Map map, boolean z13, String str30, String str31, String str32, String str33, String str34, String str35, String str36, Integer num12, String str37, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, num, str3, num2, str4, l10, num3, str5, channelId, str6, str7, channelId2, num4, str8, list, userId, str9, str10, num5, str11, str12, str13, num6, guildId, str14, str15, str16, num7, str17, applicationId, str18, str19, notificationMessage, str20, num8, z10, z11, userId2, str21, str22, str23, str24, str25, str26, bool, str27, str28, num9, num10, num11, str29, z12, map, z13, str30, str31, str32, str33, str34, str35, str36, num12, str37);
    }

    private /* synthetic */ NotificationData(int i10, int i11, int i12, String str, String str2, Integer num, String str3, Integer num2, String str4, Long l10, Integer num3, String str5, ChannelId channelId, String str6, String str7, ChannelId channelId2, Integer num4, String str8, List list, UserId userId, String str9, String str10, Integer num5, String str11, String str12, String str13, Integer num6, GuildId guildId, String str14, String str15, String str16, Integer num7, String str17, ApplicationId applicationId, String str18, String str19, NotificationMessage notificationMessage, String str20, Integer num8, boolean z10, boolean z11, UserId userId2, String str21, String str22, String str23, String str24, String str25, String str26, Boolean bool, String str27, String str28, Integer num9, Integer num10, Integer num11, String str29, boolean z12, Map map, boolean z13, String str30, String str31, String str32, String str33, String str34, String str35, String str36, Integer num12, String str37, SerializationConstructorMarker serializationConstructorMarker) {
        if (1 != (i10 & 1)) {
            v1.a(new int[]{i10, i11, i12}, new int[]{1, 0, 0}, NotificationData$$serializer.INSTANCE.getDescriptor());
        }
        this.type = str;
        if ((i10 & 2) == 0) {
            this.messageId = null;
        } else {
            this.messageId = str2;
        }
        if ((i10 & 4) == 0) {
            this.messageActivityType = null;
        } else {
            this.messageActivityType = num;
        }
        if ((i10 & 8) == 0) {
            this.messageApplicationName = null;
        } else {
            this.messageApplicationName = str3;
        }
        if ((i10 & 16) == 0) {
            this.messageType = null;
        } else {
            this.messageType = num2;
        }
        if ((i10 & 32) == 0) {
            this.messageContent = null;
        } else {
            this.messageContent = str4;
        }
        if ((i10 & 64) == 0) {
            this.messageFlags = null;
        } else {
            this.messageFlags = l10;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.channelType = null;
        } else {
            this.channelType = num3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.channelName = null;
        } else {
            this.channelName = str5;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.channelId = null;
        } else {
            this.channelId = channelId;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.channelIcon = null;
        } else {
            this.channelIcon = str6;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.parentName = null;
        } else {
            this.parentName = str7;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.parentId = null;
        } else {
            this.parentId = channelId2;
        }
        if ((i10 & 8192) == 0) {
            this.messageReferenceType = null;
        } else {
            this.messageReferenceType = num4;
        }
        if ((i10 & 16384) == 0) {
            this.channelRtcRegion = null;
        } else {
            this.channelRtcRegion = str8;
        }
        this.ackChannelIds = (i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) == 0 ? CollectionsKt.l() : list;
        if ((i10 & 65536) == 0) {
            this.userId = null;
        } else {
            this.userId = userId;
        }
        if ((i10 & 131072) == 0) {
            this.userUsername = null;
        } else {
            this.userUsername = str9;
        }
        if ((i10 & 262144) == 0) {
            this.userGlobalName = null;
        } else {
            this.userGlobalName = str10;
        }
        if ((i10 & 524288) == 0) {
            this.userDiscriminator = null;
        } else {
            this.userDiscriminator = num5;
        }
        if ((1048576 & i10) == 0) {
            this.userAvatar = null;
        } else {
            this.userAvatar = str11;
        }
        if ((2097152 & i10) == 0) {
            this.userGuildAvatar = null;
        } else {
            this.userGuildAvatar = str12;
        }
        if ((4194304 & i10) == 0) {
            this.platformUserUsername = null;
        } else {
            this.platformUserUsername = str13;
        }
        if ((8388608 & i10) == 0) {
            this.relationshipType = null;
        } else {
            this.relationshipType = num6;
        }
        if ((16777216 & i10) == 0) {
            this.guildId = null;
        } else {
            this.guildId = guildId;
        }
        if ((33554432 & i10) == 0) {
            this.guildName = null;
        } else {
            this.guildName = str14;
        }
        if ((67108864 & i10) == 0) {
            this.guildIcon = null;
        } else {
            this.guildIcon = str15;
        }
        if ((134217728 & i10) == 0) {
            this.activityInstanceId = null;
        } else {
            this.activityInstanceId = str16;
        }
        if ((268435456 & i10) == 0) {
            this.activityType = null;
        } else {
            this.activityType = num7;
        }
        if ((536870912 & i10) == 0) {
            this.activityName = null;
        } else {
            this.activityName = str17;
        }
        if ((1073741824 & i10) == 0) {
            this.applicationId = null;
        } else {
            this.applicationId = applicationId;
        }
        if ((i10 & Integer.MIN_VALUE) == 0) {
            this.applicationName = null;
        } else {
            this.applicationName = str18;
        }
        if ((i11 & 1) == 0) {
            this.applicationIcon = null;
        } else {
            this.applicationIcon = str19;
        }
        if ((i11 & 2) == 0) {
            this.message = null;
        } else {
            this.message = notificationMessage;
        }
        if ((i11 & 4) == 0) {
            this.stageInstanceTopic = null;
        } else {
            this.stageInstanceTopic = str20;
        }
        if ((i11 & 8) == 0) {
            this.guildScheduledEventEntityType = null;
        } else {
            this.guildScheduledEventEntityType = num8;
        }
        if ((i11 & 16) == 0) {
            this.canReply = false;
        } else {
            this.canReply = z10;
        }
        if ((i11 & 32) == 0) {
            this.isFromCurrentUser = false;
        } else {
            this.isFromCurrentUser = z11;
        }
        if ((i11 & 64) == 0) {
            this.receivingUserId = null;
        } else {
            this.receivingUserId = userId2;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.title = null;
        } else {
            this.title = str21;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.subtitle = null;
        } else {
            this.subtitle = str22;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.iconUrl = null;
        } else {
            this.iconUrl = str23;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.notificationChannel = null;
        } else {
            this.notificationChannel = str24;
        }
        if ((i11 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.trackingType = null;
        } else {
            this.trackingType = str25;
        }
        if ((i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.deeplink = null;
        } else {
            this.deeplink = str26;
        }
        this.expandSubtitle = (i11 & 8192) == 0 ? Boolean.FALSE : bool;
        if ((i11 & 16384) == 0) {
            this.imageAttachmentUrl = null;
        } else {
            this.imageAttachmentUrl = str27;
        }
        if ((i11 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) == 0) {
            this.ergoImageAttachmentUrl = null;
        } else {
            this.ergoImageAttachmentUrl = str28;
        }
        if ((i11 & 65536) == 0) {
            this.attachmentTextVariant = null;
        } else {
            this.attachmentTextVariant = num9;
        }
        if ((i11 & 131072) == 0) {
            this.imageAttachmentCount = null;
        } else {
            this.imageAttachmentCount = num10;
        }
        if ((i11 & 262144) == 0) {
            this.videoAttachmentCount = null;
        } else {
            this.videoAttachmentCount = num11;
        }
        if ((i11 & 524288) == 0) {
            this.timeReceived = null;
        } else {
            this.timeReceived = str29;
        }
        if ((1048576 & i11) == 0) {
            this.silent = false;
        } else {
            this.silent = z12;
        }
        this.userInfo = (2097152 & i11) == 0 ? o0.i() : map;
        if ((4194304 & i11) == 0) {
            this.appDm = false;
        } else {
            this.appDm = z13;
        }
        if ((8388608 & i11) == 0) {
            this.notifTypeId = null;
        } else {
            this.notifTypeId = str30;
        }
        if ((16777216 & i11) == 0) {
            this.notifInstanceId = null;
        } else {
            this.notifInstanceId = str31;
        }
        if ((33554432 & i11) == 0) {
            this.joinId = null;
        } else {
            this.joinId = str32;
        }
        if ((67108864 & i11) == 0) {
            this.mentionType = null;
        } else {
            this.mentionType = str33;
        }
        if ((134217728 & i11) == 0) {
            this.appState = null;
        } else {
            this.appState = str34;
        }
        if ((268435456 & i11) == 0) {
            this.inviteGuildName = null;
        } else {
            this.inviteGuildName = str35;
        }
        if ((536870912 & i11) == 0) {
            this.inviteChannelName = null;
        } else {
            this.inviteChannelName = str36;
        }
        if ((1073741824 & i11) == 0) {
            this.inviteTitleVariant = null;
        } else {
            this.inviteTitleVariant = num12;
        }
        if ((Integer.MIN_VALUE & i11) == 0) {
            this.pollQuestion = null;
        } else {
            this.pollQuestion = str37;
        }
    }

    private NotificationData(String type, String str, Integer num, String str2, Integer num2, String str3, Long l10, Integer num3, String str4, ChannelId channelId, String str5, String str6, ChannelId channelId2, Integer num4, String str7, List<ChannelId> ackChannelIds, UserId userId, String str8, String str9, Integer num5, String str10, String str11, String str12, Integer num6, GuildId guildId, String str13, String str14, String str15, Integer num7, String str16, ApplicationId applicationId, String str17, String str18, NotificationMessage notificationMessage, String str19, Integer num8, boolean z10, boolean z11, UserId userId2, String str20, String str21, String str22, String str23, String str24, String str25, Boolean bool, String str26, String str27, Integer num9, Integer num10, Integer num11, String str28, boolean z12, Map<String, String> userInfo, boolean z13, String str29, String str30, String str31, String str32, String str33, String str34, String str35, Integer num12, String str36) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(ackChannelIds, "ackChannelIds");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        this.type = type;
        this.messageId = str;
        this.messageActivityType = num;
        this.messageApplicationName = str2;
        this.messageType = num2;
        this.messageContent = str3;
        this.messageFlags = l10;
        this.channelType = num3;
        this.channelName = str4;
        this.channelId = channelId;
        this.channelIcon = str5;
        this.parentName = str6;
        this.parentId = channelId2;
        this.messageReferenceType = num4;
        this.channelRtcRegion = str7;
        this.ackChannelIds = ackChannelIds;
        this.userId = userId;
        this.userUsername = str8;
        this.userGlobalName = str9;
        this.userDiscriminator = num5;
        this.userAvatar = str10;
        this.userGuildAvatar = str11;
        this.platformUserUsername = str12;
        this.relationshipType = num6;
        this.guildId = guildId;
        this.guildName = str13;
        this.guildIcon = str14;
        this.activityInstanceId = str15;
        this.activityType = num7;
        this.activityName = str16;
        this.applicationId = applicationId;
        this.applicationName = str17;
        this.applicationIcon = str18;
        this.message = notificationMessage;
        this.stageInstanceTopic = str19;
        this.guildScheduledEventEntityType = num8;
        this.canReply = z10;
        this.isFromCurrentUser = z11;
        this.receivingUserId = userId2;
        this.title = str20;
        this.subtitle = str21;
        this.iconUrl = str22;
        this.notificationChannel = str23;
        this.trackingType = str24;
        this.deeplink = str25;
        this.expandSubtitle = bool;
        this.imageAttachmentUrl = str26;
        this.ergoImageAttachmentUrl = str27;
        this.attachmentTextVariant = num9;
        this.imageAttachmentCount = num10;
        this.videoAttachmentCount = num11;
        this.timeReceived = str28;
        this.silent = z12;
        this.userInfo = userInfo;
        this.appDm = z13;
        this.notifTypeId = str29;
        this.notifInstanceId = str30;
        this.joinId = str31;
        this.mentionType = str32;
        this.appState = str33;
        this.inviteGuildName = str34;
        this.inviteChannelName = str35;
        this.inviteTitleVariant = num12;
        this.pollQuestion = str36;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ NotificationData(java.lang.String r57, java.lang.String r58, java.lang.Integer r59, java.lang.String r60, java.lang.Integer r61, java.lang.String r62, java.lang.Long r63, java.lang.Integer r64, java.lang.String r65, com.discord.primitives.ChannelId r66, java.lang.String r67, java.lang.String r68, com.discord.primitives.ChannelId r69, java.lang.Integer r70, java.lang.String r71, java.util.List r72, com.discord.primitives.UserId r73, java.lang.String r74, java.lang.String r75, java.lang.Integer r76, java.lang.String r77, java.lang.String r78, java.lang.String r79, java.lang.Integer r80, com.discord.primitives.GuildId r81, java.lang.String r82, java.lang.String r83, java.lang.String r84, java.lang.Integer r85, java.lang.String r86, com.discord.primitives.ApplicationId r87, java.lang.String r88, java.lang.String r89, com.discord.notifications.api.NotificationMessage r90, java.lang.String r91, java.lang.Integer r92, boolean r93, boolean r94, com.discord.primitives.UserId r95, java.lang.String r96, java.lang.String r97, java.lang.String r98, java.lang.String r99, java.lang.String r100, java.lang.String r101, java.lang.Boolean r102, java.lang.String r103, java.lang.String r104, java.lang.Integer r105, java.lang.Integer r106, java.lang.Integer r107, java.lang.String r108, boolean r109, java.util.Map r110, boolean r111, java.lang.String r112, java.lang.String r113, java.lang.String r114, java.lang.String r115, java.lang.String r116, java.lang.String r117, java.lang.String r118, java.lang.Integer r119, java.lang.String r120, int r121, int r122, kotlin.jvm.internal.DefaultConstructorMarker r123) {
        /*
            Method dump skipped, instructions count: 763
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.notifications.api.NotificationData.<init>(java.lang.String, java.lang.String, java.lang.Integer, java.lang.String, java.lang.Integer, java.lang.String, java.lang.Long, java.lang.Integer, java.lang.String, com.discord.primitives.ChannelId, java.lang.String, java.lang.String, com.discord.primitives.ChannelId, java.lang.Integer, java.lang.String, java.util.List, com.discord.primitives.UserId, java.lang.String, java.lang.String, java.lang.Integer, java.lang.String, java.lang.String, java.lang.String, java.lang.Integer, com.discord.primitives.GuildId, java.lang.String, java.lang.String, java.lang.String, java.lang.Integer, java.lang.String, com.discord.primitives.ApplicationId, java.lang.String, java.lang.String, com.discord.notifications.api.NotificationMessage, java.lang.String, java.lang.Integer, boolean, boolean, com.discord.primitives.UserId, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean, java.lang.String, java.lang.String, java.lang.Integer, java.lang.Integer, java.lang.Integer, java.lang.String, boolean, java.util.Map, boolean, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Integer, java.lang.String, int, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }
}
