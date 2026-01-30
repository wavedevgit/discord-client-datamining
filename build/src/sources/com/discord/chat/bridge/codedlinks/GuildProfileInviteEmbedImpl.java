package com.discord.chat.bridge.codedlinks;

import androidx.recyclerview.widget.RecyclerView;
import at.f;
import at.h;
import at.n2;
import at.p0;
import at.v1;
import com.discord.chat.bridge.codedlinks.CodedLinkExtendedType;
import com.discord.chat.bridge.codedlinks.InviteType;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.PointerEventHelper;
import ir.l;
import ir.o;
import java.util.List;
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
import xs.m;
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0012\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\bY\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u009a\u00012\u00020\u00012\u00020\u0002:\u0004\u0099\u0001\u009a\u0001B³\u0003\u0012\n\b\u0003\u0010\u0003\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\u0006\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010\t\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\b\u0012\b\b\u0001\u0010\u000b\u001a\u00020\u0004\u0012\b\b\u0001\u0010\f\u001a\u00020\u0004\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000e\u0012\b\b\u0001\u0010\u0010\u001a\u00020\u0004\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010\u0019\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\u001a\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010\u001e\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010 \u001a\u0004\u0018\u00010!\u0012\b\b\u0002\u0010\"\u001a\u00020#\u0012\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010&\u001a\u00020\u0004\u0012\u0006\u0010'\u001a\u00020\u0004\u0012\u0006\u0010(\u001a\u00020\u000e\u0012\n\b\u0002\u0010)\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010*\u001a\u0004\u0018\u00010\b\u0012\u0010\b\u0002\u0010+\u001a\n\u0012\u0004\u0012\u00020-\u0018\u00010,\u0012\n\b\u0002\u0010.\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b/\u00100B\u008f\u0003\b\u0010\u0012\u0006\u00101\u001a\u00020\u0004\u0012\u0006\u00102\u001a\u00020\u0004\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\u000b\u001a\u00020\u0004\u0012\u0006\u0010\f\u001a\u00020\u0004\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u000e\u0012\u0006\u0010\u0010\u001a\u00020\u0004\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010\b\u0012\b\u0010 \u001a\u0004\u0018\u00010!\u0012\b\u0010\"\u001a\u0004\u0018\u00010#\u0012\b\u0010$\u001a\u0004\u0018\u00010\b\u0012\b\u0010%\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010&\u001a\u00020\u0004\u0012\u0006\u0010'\u001a\u00020\u0004\u0012\u0006\u0010(\u001a\u00020\u000e\u0012\b\u0010)\u001a\u0004\u0018\u00010\b\u0012\b\u0010*\u001a\u0004\u0018\u00010\b\u0012\u000e\u0010+\u001a\n\u0012\u0004\u0012\u00020-\u0018\u00010,\u0012\b\u0010.\u001a\u0004\u0018\u00010\b\u0012\b\u00103\u001a\u0004\u0018\u000104¢\u0006\u0004\b/\u00105J\u0010\u0010e\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010f\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010g\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u000b\u0010h\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010i\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u000b\u0010j\u001a\u0004\u0018\u00010\bHÆ\u0003J\t\u0010k\u001a\u00020\u0004HÆ\u0003J\t\u0010l\u001a\u00020\u0004HÆ\u0003J\u0010\u0010m\u001a\u0004\u0018\u00010\u000eHÆ\u0003¢\u0006\u0002\u0010CJ\u0010\u0010n\u001a\u0004\u0018\u00010\u000eHÆ\u0003¢\u0006\u0002\u0010CJ\t\u0010o\u001a\u00020\u0004HÆ\u0003J\u000b\u0010p\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010q\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010r\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010s\u001a\u0004\u0018\u00010\u000eHÆ\u0003¢\u0006\u0002\u0010CJ\u0010\u0010t\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u000b\u0010u\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010v\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010w\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010x\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010y\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u0010\u0010z\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u000b\u0010{\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010|\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010}\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u00107J\u000b\u0010~\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010\u007f\u001a\u0004\u0018\u00010!HÆ\u0003J\n\u0010\u0080\u0001\u001a\u00020#HÆ\u0003J\f\u0010\u0081\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\f\u0010\u0082\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\n\u0010\u0083\u0001\u001a\u00020\u0004HÆ\u0003J\n\u0010\u0084\u0001\u001a\u00020\u0004HÆ\u0003J\n\u0010\u0085\u0001\u001a\u00020\u000eHÆ\u0003J\f\u0010\u0086\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\f\u0010\u0087\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0012\u0010\u0088\u0001\u001a\n\u0012\u0004\u0012\u00020-\u0018\u00010,HÆ\u0003J\f\u0010\u0089\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003JÄ\u0003\u0010\u008a\u0001\u001a\u00020\u00002\n\b\u0003\u0010\u0003\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\u0005\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\u0006\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010\t\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\b2\b\b\u0003\u0010\u000b\u001a\u00020\u00042\b\b\u0003\u0010\f\u001a\u00020\u00042\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000e2\b\b\u0003\u0010\u0010\u001a\u00020\u00042\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u000e2\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010\u0019\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\u001a\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010\u001e\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010 \u001a\u0004\u0018\u00010!2\b\b\u0002\u0010\"\u001a\u00020#2\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010&\u001a\u00020\u00042\b\b\u0002\u0010'\u001a\u00020\u00042\b\b\u0002\u0010(\u001a\u00020\u000e2\n\b\u0002\u0010)\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010*\u001a\u0004\u0018\u00010\b2\u0010\b\u0002\u0010+\u001a\n\u0012\u0004\u0012\u00020-\u0018\u00010,2\n\b\u0002\u0010.\u001a\u0004\u0018\u00010\bHÆ\u0001¢\u0006\u0003\u0010\u008b\u0001J\u0016\u0010\u008c\u0001\u001a\u00020\u000e2\n\u0010\u008d\u0001\u001a\u0005\u0018\u00010\u008e\u0001HÖ\u0003J\n\u0010\u008f\u0001\u001a\u00020\u0004HÖ\u0001J\n\u0010\u0090\u0001\u001a\u00020\bHÖ\u0001J-\u0010\u0091\u0001\u001a\u00030\u0092\u00012\u0007\u0010\u0093\u0001\u001a\u00020\u00002\b\u0010\u0094\u0001\u001a\u00030\u0095\u00012\b\u0010\u0096\u0001\u001a\u00030\u0097\u0001H\u0001¢\u0006\u0003\b\u0098\u0001R\u0018\u0010\u0003\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\b6\u00107R\u0018\u0010\u0005\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\b9\u00107R\u0018\u0010\u0006\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\b:\u00107R\u0016\u0010\u0007\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b;\u0010<R\u0018\u0010\t\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\b=\u00107R\u0016\u0010\n\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b>\u0010<R\u0014\u0010\u000b\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b?\u0010@R\u0014\u0010\f\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bA\u0010@R\u0018\u0010\r\u001a\u0004\u0018\u00010\u000eX\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bB\u0010CR\u0018\u0010\u000f\u001a\u0004\u0018\u00010\u000eX\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bE\u0010CR\u0014\u0010\u0010\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bF\u0010@R\u0016\u0010\u0011\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bG\u0010<R\u0018\u0010\u0012\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bH\u00107R\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bI\u00107R\u0018\u0010\u0014\u001a\u0004\u0018\u00010\u000eX\u0096\u0004¢\u0006\n\n\u0002\u0010D\u001a\u0004\bJ\u0010CR\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bK\u00107R\u0016\u0010\u0016\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bL\u0010<R\u0016\u0010\u0017\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bM\u0010<R\u0016\u0010\u0018\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bN\u0010<R\u0018\u0010\u0019\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bO\u00107R\u0018\u0010\u001a\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bP\u00107R\u0018\u0010\u001b\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bQ\u00107R\u0016\u0010\u001c\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bR\u0010<R\u0016\u0010\u001d\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bS\u0010<R\u0018\u0010\u001e\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u00108\u001a\u0004\bT\u00107R\u0016\u0010\u001f\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bU\u0010<R\u0016\u0010 \u001a\u0004\u0018\u00010!X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bV\u0010WR\u0014\u0010\"\u001a\u00020#X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bX\u0010YR\u0016\u0010$\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bZ\u0010<R\u0016\u0010%\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b[\u0010<R\u0014\u0010&\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\\\u0010@R\u0014\u0010'\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b]\u0010@R\u0014\u0010(\u001a\u00020\u000eX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b^\u0010_R\u0016\u0010)\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b`\u0010<R\u0016\u0010*\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\ba\u0010<R\u001c\u0010+\u001a\n\u0012\u0004\u0012\u00020-\u0018\u00010,X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bb\u0010cR\u0016\u0010.\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bd\u0010<¨\u0006\u009b\u0001"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/GuildProfileInviteEmbedImpl;", "Lcom/discord/chat/bridge/codedlinks/CodedLinkEmbed;", "Lcom/discord/chat/bridge/codedlinks/GuildProfileInviteEmbed;", "acceptLabelBackgroundColor", "", "acceptLabelBorderColor", "acceptLabelColor", "acceptLabelText", "", "bodyTextColor", "bodyText", ViewProps.BACKGROUND_COLOR, ViewProps.BORDER_COLOR, "canBeAccepted", "", "embedCanBeTapped", "headerColor", "headerText", "resolvingGradientEnd", "resolvingGradientStart", "splashHasRadialGradient", "splashOpacity", "splashUrl", "inviteSplash", "subtitle", "subtitleColor", "thumbnailBackgroundColor", "thumbnailCornerRadius", "thumbnailText", "thumbnailUrl", "titleColor", "titleText", "type", "Lcom/discord/chat/bridge/codedlinks/InviteType;", "extendedType", "Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "memberText", "onlineText", "bannerColor", "bannerColorSecondary", "hasProfileOverflow", "badgeIconUrl", "establishedText", "roles", "", "Lcom/discord/chat/bridge/codedlinks/InviteRole;", "rolesHeadingText", "<init>", "(Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;IILjava/lang/Boolean;Ljava/lang/Boolean;ILjava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;Ljava/lang/String;Ljava/lang/String;IIZLjava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;)V", "seen0", "seen1", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;IILjava/lang/Boolean;Ljava/lang/Boolean;ILjava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;Ljava/lang/String;Ljava/lang/String;IIZLjava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getAcceptLabelBackgroundColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getAcceptLabelBorderColor", "getAcceptLabelColor", "getAcceptLabelText", "()Ljava/lang/String;", "getBodyTextColor", "getBodyText", "getBackgroundColor", "()I", "getBorderColor", "getCanBeAccepted", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getEmbedCanBeTapped", "getHeaderColor", "getHeaderText", "getResolvingGradientEnd", "getResolvingGradientStart", "getSplashHasRadialGradient", "getSplashOpacity", "getSplashUrl", "getInviteSplash", "getSubtitle", "getSubtitleColor", "getThumbnailBackgroundColor", "getThumbnailCornerRadius", "getThumbnailText", "getThumbnailUrl", "getTitleColor", "getTitleText", "getType", "()Lcom/discord/chat/bridge/codedlinks/InviteType;", "getExtendedType", "()Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "getMemberText", "getOnlineText", "getBannerColor", "getBannerColorSecondary", "getHasProfileOverflow", "()Z", "getBadgeIconUrl", "getEstablishedText", "getRoles", "()Ljava/util/List;", "getRolesHeadingText", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "component23", "component24", "component25", "component26", "component27", "component28", "component29", "component30", "component31", "component32", "component33", "component34", "component35", "component36", "component37", "copy", "(Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;IILjava/lang/Boolean;Ljava/lang/Boolean;ILjava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;Ljava/lang/String;Ljava/lang/String;IIZLjava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;)Lcom/discord/chat/bridge/codedlinks/GuildProfileInviteEmbedImpl;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildProfileInviteEmbedImpl extends CodedLinkEmbed implements GuildProfileInviteEmbed {
    private final Integer acceptLabelBackgroundColor;
    private final Integer acceptLabelBorderColor;
    private final Integer acceptLabelColor;
    private final String acceptLabelText;
    private final int backgroundColor;
    private final String badgeIconUrl;
    private final int bannerColor;
    private final int bannerColorSecondary;
    private final String bodyText;
    private final Integer bodyTextColor;
    private final int borderColor;
    private final Boolean canBeAccepted;
    private final Boolean embedCanBeTapped;
    private final String establishedText;
    @NotNull
    private final CodedLinkExtendedType extendedType;
    private final boolean hasProfileOverflow;
    private final int headerColor;
    private final String headerText;
    private final String inviteSplash;
    private final String memberText;
    private final String onlineText;
    private final Integer resolvingGradientEnd;
    private final Integer resolvingGradientStart;
    private final List<InviteRole> roles;
    private final String rolesHeadingText;
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
    private final InviteType type;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, l.a(o.f31119e, new Function0() { // from class: com.discord.chat.bridge.codedlinks.d
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = GuildProfileInviteEmbedImpl._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/GuildProfileInviteEmbedImpl$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/codedlinks/GuildProfileInviteEmbedImpl;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return GuildProfileInviteEmbedImpl$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ GuildProfileInviteEmbedImpl(int i10, int i11, Integer num, Integer num2, Integer num3, String str, Integer num4, String str2, int i12, int i13, Boolean bool, Boolean bool2, int i14, String str3, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, InviteType inviteType, CodedLinkExtendedType codedLinkExtendedType, String str10, String str11, int i15, int i16, boolean z10, String str12, String str13, List list, String str14, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if ((-1073738560 != (i10 & (-1073738560))) | (1 != (i11 & 1))) {
            v1.a(new int[]{i10, i11}, new int[]{-1073738560, 1}, GuildProfileInviteEmbedImpl$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.acceptLabelBackgroundColor = null;
        } else {
            this.acceptLabelBackgroundColor = num;
        }
        if ((i10 & 2) == 0) {
            this.acceptLabelBorderColor = null;
        } else {
            this.acceptLabelBorderColor = num2;
        }
        if ((i10 & 4) == 0) {
            this.acceptLabelColor = null;
        } else {
            this.acceptLabelColor = num3;
        }
        if ((i10 & 8) == 0) {
            this.acceptLabelText = null;
        } else {
            this.acceptLabelText = str;
        }
        if ((i10 & 16) == 0) {
            this.bodyTextColor = null;
        } else {
            this.bodyTextColor = num4;
        }
        if ((i10 & 32) == 0) {
            this.bodyText = null;
        } else {
            this.bodyText = str2;
        }
        this.backgroundColor = i12;
        this.borderColor = i13;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.canBeAccepted = null;
        } else {
            this.canBeAccepted = bool;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.embedCanBeTapped = null;
        } else {
            this.embedCanBeTapped = bool2;
        }
        this.headerColor = i14;
        this.headerText = str3;
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.resolvingGradientEnd = null;
        } else {
            this.resolvingGradientEnd = num5;
        }
        if ((i10 & 8192) == 0) {
            this.resolvingGradientStart = null;
        } else {
            this.resolvingGradientStart = num6;
        }
        if ((i10 & 16384) == 0) {
            this.splashHasRadialGradient = null;
        } else {
            this.splashHasRadialGradient = bool3;
        }
        if ((32768 & i10) == 0) {
            this.splashOpacity = null;
        } else {
            this.splashOpacity = num7;
        }
        if ((65536 & i10) == 0) {
            this.splashUrl = null;
        } else {
            this.splashUrl = str4;
        }
        if ((131072 & i10) == 0) {
            this.inviteSplash = null;
        } else {
            this.inviteSplash = str5;
        }
        if ((262144 & i10) == 0) {
            this.subtitle = null;
        } else {
            this.subtitle = str6;
        }
        if ((524288 & i10) == 0) {
            this.subtitleColor = null;
        } else {
            this.subtitleColor = num8;
        }
        if ((1048576 & i10) == 0) {
            this.thumbnailBackgroundColor = null;
        } else {
            this.thumbnailBackgroundColor = num9;
        }
        if ((2097152 & i10) == 0) {
            this.thumbnailCornerRadius = null;
        } else {
            this.thumbnailCornerRadius = num10;
        }
        if ((4194304 & i10) == 0) {
            this.thumbnailText = null;
        } else {
            this.thumbnailText = str7;
        }
        if ((8388608 & i10) == 0) {
            this.thumbnailUrl = null;
        } else {
            this.thumbnailUrl = str8;
        }
        if ((16777216 & i10) == 0) {
            this.titleColor = null;
        } else {
            this.titleColor = num11;
        }
        if ((33554432 & i10) == 0) {
            this.titleText = null;
        } else {
            this.titleText = str9;
        }
        if ((67108864 & i10) == 0) {
            this.type = null;
        } else {
            this.type = inviteType;
        }
        this.extendedType = (134217728 & i10) == 0 ? CodedLinkExtendedType.GUILD_PROFILE_INVITE : codedLinkExtendedType;
        if ((268435456 & i10) == 0) {
            this.memberText = null;
        } else {
            this.memberText = str10;
        }
        if ((i10 & 536870912) == 0) {
            this.onlineText = null;
        } else {
            this.onlineText = str11;
        }
        this.bannerColor = i15;
        this.bannerColorSecondary = i16;
        this.hasProfileOverflow = z10;
        if ((i11 & 2) == 0) {
            this.badgeIconUrl = null;
        } else {
            this.badgeIconUrl = str12;
        }
        if ((i11 & 4) == 0) {
            this.establishedText = null;
        } else {
            this.establishedText = str13;
        }
        if ((i11 & 8) == 0) {
            this.roles = null;
        } else {
            this.roles = list;
        }
        if ((i11 & 16) == 0) {
            this.rolesHeadingText = null;
        } else {
            this.rolesHeadingText = str14;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(InviteRole$$serializer.INSTANCE);
    }

    public static /* synthetic */ GuildProfileInviteEmbedImpl copy$default(GuildProfileInviteEmbedImpl guildProfileInviteEmbedImpl, Integer num, Integer num2, Integer num3, String str, Integer num4, String str2, int i10, int i11, Boolean bool, Boolean bool2, int i12, String str3, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, InviteType inviteType, CodedLinkExtendedType codedLinkExtendedType, String str10, String str11, int i13, int i14, boolean z10, String str12, String str13, List list, String str14, int i15, int i16, Object obj) {
        String str15;
        List list2;
        Integer num12;
        Integer num13;
        String str16;
        String str17;
        Integer num14;
        String str18;
        InviteType inviteType2;
        CodedLinkExtendedType codedLinkExtendedType2;
        String str19;
        String str20;
        int i17;
        int i18;
        boolean z11;
        String str21;
        String str22;
        Boolean bool4;
        String str23;
        int i19;
        int i20;
        Boolean bool5;
        Boolean bool6;
        int i21;
        String str24;
        Integer num15;
        Integer num16;
        Integer num17;
        String str25;
        String str26;
        String str27;
        Integer num18;
        Integer num19;
        Integer num20;
        String str28;
        Integer num21;
        Integer num22 = (i15 & 1) != 0 ? guildProfileInviteEmbedImpl.acceptLabelBackgroundColor : num;
        Integer num23 = (i15 & 2) != 0 ? guildProfileInviteEmbedImpl.acceptLabelBorderColor : num2;
        Integer num24 = (i15 & 4) != 0 ? guildProfileInviteEmbedImpl.acceptLabelColor : num3;
        String str29 = (i15 & 8) != 0 ? guildProfileInviteEmbedImpl.acceptLabelText : str;
        Integer num25 = (i15 & 16) != 0 ? guildProfileInviteEmbedImpl.bodyTextColor : num4;
        String str30 = (i15 & 32) != 0 ? guildProfileInviteEmbedImpl.bodyText : str2;
        int i22 = (i15 & 64) != 0 ? guildProfileInviteEmbedImpl.backgroundColor : i10;
        int i23 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? guildProfileInviteEmbedImpl.borderColor : i11;
        Boolean bool7 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? guildProfileInviteEmbedImpl.canBeAccepted : bool;
        Boolean bool8 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? guildProfileInviteEmbedImpl.embedCanBeTapped : bool2;
        int i24 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? guildProfileInviteEmbedImpl.headerColor : i12;
        String str31 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? guildProfileInviteEmbedImpl.headerText : str3;
        Integer num26 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? guildProfileInviteEmbedImpl.resolvingGradientEnd : num5;
        Integer num27 = (i15 & 8192) != 0 ? guildProfileInviteEmbedImpl.resolvingGradientStart : num6;
        Integer num28 = num22;
        Boolean bool9 = (i15 & 16384) != 0 ? guildProfileInviteEmbedImpl.splashHasRadialGradient : bool3;
        Integer num29 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? guildProfileInviteEmbedImpl.splashOpacity : num7;
        String str32 = (i15 & 65536) != 0 ? guildProfileInviteEmbedImpl.splashUrl : str4;
        String str33 = (i15 & 131072) != 0 ? guildProfileInviteEmbedImpl.inviteSplash : str5;
        String str34 = (i15 & 262144) != 0 ? guildProfileInviteEmbedImpl.subtitle : str6;
        Integer num30 = (i15 & 524288) != 0 ? guildProfileInviteEmbedImpl.subtitleColor : num8;
        Integer num31 = (i15 & 1048576) != 0 ? guildProfileInviteEmbedImpl.thumbnailBackgroundColor : num9;
        Integer num32 = (i15 & 2097152) != 0 ? guildProfileInviteEmbedImpl.thumbnailCornerRadius : num10;
        String str35 = (i15 & 4194304) != 0 ? guildProfileInviteEmbedImpl.thumbnailText : str7;
        String str36 = (i15 & 8388608) != 0 ? guildProfileInviteEmbedImpl.thumbnailUrl : str8;
        Integer num33 = (i15 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? guildProfileInviteEmbedImpl.titleColor : num11;
        String str37 = (i15 & 33554432) != 0 ? guildProfileInviteEmbedImpl.titleText : str9;
        InviteType inviteType3 = (i15 & 67108864) != 0 ? guildProfileInviteEmbedImpl.type : inviteType;
        CodedLinkExtendedType codedLinkExtendedType3 = (i15 & 134217728) != 0 ? guildProfileInviteEmbedImpl.extendedType : codedLinkExtendedType;
        String str38 = (i15 & 268435456) != 0 ? guildProfileInviteEmbedImpl.memberText : str10;
        String str39 = (i15 & 536870912) != 0 ? guildProfileInviteEmbedImpl.onlineText : str11;
        int i25 = (i15 & 1073741824) != 0 ? guildProfileInviteEmbedImpl.bannerColor : i13;
        int i26 = (i15 & Integer.MIN_VALUE) != 0 ? guildProfileInviteEmbedImpl.bannerColorSecondary : i14;
        boolean z12 = (i16 & 1) != 0 ? guildProfileInviteEmbedImpl.hasProfileOverflow : z10;
        String str40 = (i16 & 2) != 0 ? guildProfileInviteEmbedImpl.badgeIconUrl : str12;
        String str41 = (i16 & 4) != 0 ? guildProfileInviteEmbedImpl.establishedText : str13;
        List list3 = (i16 & 8) != 0 ? guildProfileInviteEmbedImpl.roles : list;
        if ((i16 & 16) != 0) {
            list2 = list3;
            str15 = guildProfileInviteEmbedImpl.rolesHeadingText;
            num13 = num32;
            str16 = str35;
            str17 = str36;
            num14 = num33;
            str18 = str37;
            inviteType2 = inviteType3;
            codedLinkExtendedType2 = codedLinkExtendedType3;
            str19 = str38;
            str20 = str39;
            i17 = i25;
            i18 = i26;
            z11 = z12;
            str21 = str40;
            str22 = str41;
            bool4 = bool9;
            i19 = i22;
            i20 = i23;
            bool5 = bool7;
            bool6 = bool8;
            i21 = i24;
            str24 = str31;
            num15 = num26;
            num16 = num27;
            num17 = num29;
            str25 = str32;
            str26 = str33;
            str27 = str34;
            num18 = num30;
            num12 = num31;
            num19 = num23;
            num20 = num24;
            str28 = str29;
            num21 = num25;
            str23 = str30;
        } else {
            str15 = str14;
            list2 = list3;
            num12 = num31;
            num13 = num32;
            str16 = str35;
            str17 = str36;
            num14 = num33;
            str18 = str37;
            inviteType2 = inviteType3;
            codedLinkExtendedType2 = codedLinkExtendedType3;
            str19 = str38;
            str20 = str39;
            i17 = i25;
            i18 = i26;
            z11 = z12;
            str21 = str40;
            str22 = str41;
            bool4 = bool9;
            str23 = str30;
            i19 = i22;
            i20 = i23;
            bool5 = bool7;
            bool6 = bool8;
            i21 = i24;
            str24 = str31;
            num15 = num26;
            num16 = num27;
            num17 = num29;
            str25 = str32;
            str26 = str33;
            str27 = str34;
            num18 = num30;
            num19 = num23;
            num20 = num24;
            str28 = str29;
            num21 = num25;
        }
        return guildProfileInviteEmbedImpl.copy(num28, num19, num20, str28, num21, str23, i19, i20, bool5, bool6, i21, str24, num15, num16, bool4, num17, str25, str26, str27, num18, num12, num13, str16, str17, num14, str18, inviteType2, codedLinkExtendedType2, str19, str20, i17, i18, z11, str21, str22, list2, str15);
    }

    public static final /* synthetic */ void write$Self$chat_release(GuildProfileInviteEmbedImpl guildProfileInviteEmbedImpl, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.A(serialDescriptor, 0) || guildProfileInviteEmbedImpl.getAcceptLabelBackgroundColor() != null) {
            compositeEncoder.z(serialDescriptor, 0, p0.f6864a, guildProfileInviteEmbedImpl.getAcceptLabelBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 1) || guildProfileInviteEmbedImpl.getAcceptLabelBorderColor() != null) {
            compositeEncoder.z(serialDescriptor, 1, p0.f6864a, guildProfileInviteEmbedImpl.getAcceptLabelBorderColor());
        }
        if (compositeEncoder.A(serialDescriptor, 2) || guildProfileInviteEmbedImpl.getAcceptLabelColor() != null) {
            compositeEncoder.z(serialDescriptor, 2, p0.f6864a, guildProfileInviteEmbedImpl.getAcceptLabelColor());
        }
        if (compositeEncoder.A(serialDescriptor, 3) || guildProfileInviteEmbedImpl.getAcceptLabelText() != null) {
            compositeEncoder.z(serialDescriptor, 3, n2.f6848a, guildProfileInviteEmbedImpl.getAcceptLabelText());
        }
        if (compositeEncoder.A(serialDescriptor, 4) || guildProfileInviteEmbedImpl.getBodyTextColor() != null) {
            compositeEncoder.z(serialDescriptor, 4, p0.f6864a, guildProfileInviteEmbedImpl.getBodyTextColor());
        }
        if (compositeEncoder.A(serialDescriptor, 5) || guildProfileInviteEmbedImpl.getBodyText() != null) {
            compositeEncoder.z(serialDescriptor, 5, n2.f6848a, guildProfileInviteEmbedImpl.getBodyText());
        }
        compositeEncoder.w(serialDescriptor, 6, guildProfileInviteEmbedImpl.getBackgroundColor());
        compositeEncoder.w(serialDescriptor, 7, guildProfileInviteEmbedImpl.getBorderColor());
        if (compositeEncoder.A(serialDescriptor, 8) || guildProfileInviteEmbedImpl.getCanBeAccepted() != null) {
            compositeEncoder.z(serialDescriptor, 8, h.f6812a, guildProfileInviteEmbedImpl.getCanBeAccepted());
        }
        if (compositeEncoder.A(serialDescriptor, 9) || guildProfileInviteEmbedImpl.getEmbedCanBeTapped() != null) {
            compositeEncoder.z(serialDescriptor, 9, h.f6812a, guildProfileInviteEmbedImpl.getEmbedCanBeTapped());
        }
        compositeEncoder.w(serialDescriptor, 10, guildProfileInviteEmbedImpl.getHeaderColor());
        n2 n2Var = n2.f6848a;
        compositeEncoder.z(serialDescriptor, 11, n2Var, guildProfileInviteEmbedImpl.getHeaderText());
        if (compositeEncoder.A(serialDescriptor, 12) || guildProfileInviteEmbedImpl.getResolvingGradientEnd() != null) {
            compositeEncoder.z(serialDescriptor, 12, p0.f6864a, guildProfileInviteEmbedImpl.getResolvingGradientEnd());
        }
        if (compositeEncoder.A(serialDescriptor, 13) || guildProfileInviteEmbedImpl.getResolvingGradientStart() != null) {
            compositeEncoder.z(serialDescriptor, 13, p0.f6864a, guildProfileInviteEmbedImpl.getResolvingGradientStart());
        }
        if (compositeEncoder.A(serialDescriptor, 14) || guildProfileInviteEmbedImpl.getSplashHasRadialGradient() != null) {
            compositeEncoder.z(serialDescriptor, 14, h.f6812a, guildProfileInviteEmbedImpl.getSplashHasRadialGradient());
        }
        if (compositeEncoder.A(serialDescriptor, 15) || guildProfileInviteEmbedImpl.getSplashOpacity() != null) {
            compositeEncoder.z(serialDescriptor, 15, p0.f6864a, guildProfileInviteEmbedImpl.getSplashOpacity());
        }
        if (compositeEncoder.A(serialDescriptor, 16) || guildProfileInviteEmbedImpl.getSplashUrl() != null) {
            compositeEncoder.z(serialDescriptor, 16, n2Var, guildProfileInviteEmbedImpl.getSplashUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 17) || guildProfileInviteEmbedImpl.getInviteSplash() != null) {
            compositeEncoder.z(serialDescriptor, 17, n2Var, guildProfileInviteEmbedImpl.getInviteSplash());
        }
        if (compositeEncoder.A(serialDescriptor, 18) || guildProfileInviteEmbedImpl.getSubtitle() != null) {
            compositeEncoder.z(serialDescriptor, 18, n2Var, guildProfileInviteEmbedImpl.getSubtitle());
        }
        if (compositeEncoder.A(serialDescriptor, 19) || guildProfileInviteEmbedImpl.getSubtitleColor() != null) {
            compositeEncoder.z(serialDescriptor, 19, p0.f6864a, guildProfileInviteEmbedImpl.getSubtitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 20) || guildProfileInviteEmbedImpl.getThumbnailBackgroundColor() != null) {
            compositeEncoder.z(serialDescriptor, 20, p0.f6864a, guildProfileInviteEmbedImpl.getThumbnailBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 21) || guildProfileInviteEmbedImpl.getThumbnailCornerRadius() != null) {
            compositeEncoder.z(serialDescriptor, 21, p0.f6864a, guildProfileInviteEmbedImpl.getThumbnailCornerRadius());
        }
        if (compositeEncoder.A(serialDescriptor, 22) || guildProfileInviteEmbedImpl.getThumbnailText() != null) {
            compositeEncoder.z(serialDescriptor, 22, n2Var, guildProfileInviteEmbedImpl.getThumbnailText());
        }
        if (compositeEncoder.A(serialDescriptor, 23) || guildProfileInviteEmbedImpl.getThumbnailUrl() != null) {
            compositeEncoder.z(serialDescriptor, 23, n2Var, guildProfileInviteEmbedImpl.getThumbnailUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 24) || guildProfileInviteEmbedImpl.getTitleColor() != null) {
            compositeEncoder.z(serialDescriptor, 24, p0.f6864a, guildProfileInviteEmbedImpl.getTitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 25) || guildProfileInviteEmbedImpl.getTitleText() != null) {
            compositeEncoder.z(serialDescriptor, 25, n2Var, guildProfileInviteEmbedImpl.getTitleText());
        }
        if (compositeEncoder.A(serialDescriptor, 26) || guildProfileInviteEmbedImpl.getType() != null) {
            compositeEncoder.z(serialDescriptor, 26, InviteType.Serializer.INSTANCE, guildProfileInviteEmbedImpl.getType());
        }
        if (compositeEncoder.A(serialDescriptor, 27) || guildProfileInviteEmbedImpl.getExtendedType() != CodedLinkExtendedType.GUILD_PROFILE_INVITE) {
            compositeEncoder.j(serialDescriptor, 27, CodedLinkExtendedType.Serializer.INSTANCE, guildProfileInviteEmbedImpl.getExtendedType());
        }
        if (compositeEncoder.A(serialDescriptor, 28) || guildProfileInviteEmbedImpl.getMemberText() != null) {
            compositeEncoder.z(serialDescriptor, 28, n2Var, guildProfileInviteEmbedImpl.getMemberText());
        }
        if (compositeEncoder.A(serialDescriptor, 29) || guildProfileInviteEmbedImpl.getOnlineText() != null) {
            compositeEncoder.z(serialDescriptor, 29, n2Var, guildProfileInviteEmbedImpl.getOnlineText());
        }
        compositeEncoder.w(serialDescriptor, 30, guildProfileInviteEmbedImpl.getBannerColor());
        compositeEncoder.w(serialDescriptor, 31, guildProfileInviteEmbedImpl.getBannerColorSecondary());
        compositeEncoder.x(serialDescriptor, 32, guildProfileInviteEmbedImpl.getHasProfileOverflow());
        if (compositeEncoder.A(serialDescriptor, 33) || guildProfileInviteEmbedImpl.getBadgeIconUrl() != null) {
            compositeEncoder.z(serialDescriptor, 33, n2Var, guildProfileInviteEmbedImpl.getBadgeIconUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 34) || guildProfileInviteEmbedImpl.getEstablishedText() != null) {
            compositeEncoder.z(serialDescriptor, 34, n2Var, guildProfileInviteEmbedImpl.getEstablishedText());
        }
        if (compositeEncoder.A(serialDescriptor, 35) || guildProfileInviteEmbedImpl.getRoles() != null) {
            compositeEncoder.z(serialDescriptor, 35, (xs.o) lazyArr[35].getValue(), guildProfileInviteEmbedImpl.getRoles());
        }
        if (compositeEncoder.A(serialDescriptor, 36) || guildProfileInviteEmbedImpl.getRolesHeadingText() != null) {
            compositeEncoder.z(serialDescriptor, 36, n2Var, guildProfileInviteEmbedImpl.getRolesHeadingText());
        }
    }

    public final Integer component1() {
        return this.acceptLabelBackgroundColor;
    }

    public final Boolean component10() {
        return this.embedCanBeTapped;
    }

    public final int component11() {
        return this.headerColor;
    }

    public final String component12() {
        return this.headerText;
    }

    public final Integer component13() {
        return this.resolvingGradientEnd;
    }

    public final Integer component14() {
        return this.resolvingGradientStart;
    }

    public final Boolean component15() {
        return this.splashHasRadialGradient;
    }

    public final Integer component16() {
        return this.splashOpacity;
    }

    public final String component17() {
        return this.splashUrl;
    }

    public final String component18() {
        return this.inviteSplash;
    }

    public final String component19() {
        return this.subtitle;
    }

    public final Integer component2() {
        return this.acceptLabelBorderColor;
    }

    public final Integer component20() {
        return this.subtitleColor;
    }

    public final Integer component21() {
        return this.thumbnailBackgroundColor;
    }

    public final Integer component22() {
        return this.thumbnailCornerRadius;
    }

    public final String component23() {
        return this.thumbnailText;
    }

    public final String component24() {
        return this.thumbnailUrl;
    }

    public final Integer component25() {
        return this.titleColor;
    }

    public final String component26() {
        return this.titleText;
    }

    public final InviteType component27() {
        return this.type;
    }

    @NotNull
    public final CodedLinkExtendedType component28() {
        return this.extendedType;
    }

    public final String component29() {
        return this.memberText;
    }

    public final Integer component3() {
        return this.acceptLabelColor;
    }

    public final String component30() {
        return this.onlineText;
    }

    public final int component31() {
        return this.bannerColor;
    }

    public final int component32() {
        return this.bannerColorSecondary;
    }

    public final boolean component33() {
        return this.hasProfileOverflow;
    }

    public final String component34() {
        return this.badgeIconUrl;
    }

    public final String component35() {
        return this.establishedText;
    }

    public final List<InviteRole> component36() {
        return this.roles;
    }

    public final String component37() {
        return this.rolesHeadingText;
    }

    public final String component4() {
        return this.acceptLabelText;
    }

    public final Integer component5() {
        return this.bodyTextColor;
    }

    public final String component6() {
        return this.bodyText;
    }

    public final int component7() {
        return this.backgroundColor;
    }

    public final int component8() {
        return this.borderColor;
    }

    public final Boolean component9() {
        return this.canBeAccepted;
    }

    @NotNull
    public final GuildProfileInviteEmbedImpl copy(Integer num, Integer num2, Integer num3, String str, Integer num4, String str2, int i10, int i11, Boolean bool, Boolean bool2, int i12, String str3, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, InviteType inviteType, @NotNull CodedLinkExtendedType extendedType, String str10, String str11, int i13, int i14, boolean z10, String str12, String str13, List<InviteRole> list, String str14) {
        Intrinsics.checkNotNullParameter(extendedType, "extendedType");
        return new GuildProfileInviteEmbedImpl(num, num2, num3, str, num4, str2, i10, i11, bool, bool2, i12, str3, num5, num6, bool3, num7, str4, str5, str6, num8, num9, num10, str7, str8, num11, str9, inviteType, extendedType, str10, str11, i13, i14, z10, str12, str13, list, str14);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GuildProfileInviteEmbedImpl) {
            GuildProfileInviteEmbedImpl guildProfileInviteEmbedImpl = (GuildProfileInviteEmbedImpl) obj;
            return Intrinsics.areEqual(this.acceptLabelBackgroundColor, guildProfileInviteEmbedImpl.acceptLabelBackgroundColor) && Intrinsics.areEqual(this.acceptLabelBorderColor, guildProfileInviteEmbedImpl.acceptLabelBorderColor) && Intrinsics.areEqual(this.acceptLabelColor, guildProfileInviteEmbedImpl.acceptLabelColor) && Intrinsics.areEqual(this.acceptLabelText, guildProfileInviteEmbedImpl.acceptLabelText) && Intrinsics.areEqual(this.bodyTextColor, guildProfileInviteEmbedImpl.bodyTextColor) && Intrinsics.areEqual(this.bodyText, guildProfileInviteEmbedImpl.bodyText) && this.backgroundColor == guildProfileInviteEmbedImpl.backgroundColor && this.borderColor == guildProfileInviteEmbedImpl.borderColor && Intrinsics.areEqual(this.canBeAccepted, guildProfileInviteEmbedImpl.canBeAccepted) && Intrinsics.areEqual(this.embedCanBeTapped, guildProfileInviteEmbedImpl.embedCanBeTapped) && this.headerColor == guildProfileInviteEmbedImpl.headerColor && Intrinsics.areEqual(this.headerText, guildProfileInviteEmbedImpl.headerText) && Intrinsics.areEqual(this.resolvingGradientEnd, guildProfileInviteEmbedImpl.resolvingGradientEnd) && Intrinsics.areEqual(this.resolvingGradientStart, guildProfileInviteEmbedImpl.resolvingGradientStart) && Intrinsics.areEqual(this.splashHasRadialGradient, guildProfileInviteEmbedImpl.splashHasRadialGradient) && Intrinsics.areEqual(this.splashOpacity, guildProfileInviteEmbedImpl.splashOpacity) && Intrinsics.areEqual(this.splashUrl, guildProfileInviteEmbedImpl.splashUrl) && Intrinsics.areEqual(this.inviteSplash, guildProfileInviteEmbedImpl.inviteSplash) && Intrinsics.areEqual(this.subtitle, guildProfileInviteEmbedImpl.subtitle) && Intrinsics.areEqual(this.subtitleColor, guildProfileInviteEmbedImpl.subtitleColor) && Intrinsics.areEqual(this.thumbnailBackgroundColor, guildProfileInviteEmbedImpl.thumbnailBackgroundColor) && Intrinsics.areEqual(this.thumbnailCornerRadius, guildProfileInviteEmbedImpl.thumbnailCornerRadius) && Intrinsics.areEqual(this.thumbnailText, guildProfileInviteEmbedImpl.thumbnailText) && Intrinsics.areEqual(this.thumbnailUrl, guildProfileInviteEmbedImpl.thumbnailUrl) && Intrinsics.areEqual(this.titleColor, guildProfileInviteEmbedImpl.titleColor) && Intrinsics.areEqual(this.titleText, guildProfileInviteEmbedImpl.titleText) && this.type == guildProfileInviteEmbedImpl.type && this.extendedType == guildProfileInviteEmbedImpl.extendedType && Intrinsics.areEqual(this.memberText, guildProfileInviteEmbedImpl.memberText) && Intrinsics.areEqual(this.onlineText, guildProfileInviteEmbedImpl.onlineText) && this.bannerColor == guildProfileInviteEmbedImpl.bannerColor && this.bannerColorSecondary == guildProfileInviteEmbedImpl.bannerColorSecondary && this.hasProfileOverflow == guildProfileInviteEmbedImpl.hasProfileOverflow && Intrinsics.areEqual(this.badgeIconUrl, guildProfileInviteEmbedImpl.badgeIconUrl) && Intrinsics.areEqual(this.establishedText, guildProfileInviteEmbedImpl.establishedText) && Intrinsics.areEqual(this.roles, guildProfileInviteEmbedImpl.roles) && Intrinsics.areEqual(this.rolesHeadingText, guildProfileInviteEmbedImpl.rolesHeadingText);
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

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
    public String getBadgeIconUrl() {
        return this.badgeIconUrl;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
    public int getBannerColor() {
        return this.bannerColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
    public int getBannerColorSecondary() {
        return this.bannerColorSecondary;
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

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Boolean getEmbedCanBeTapped() {
        return this.embedCanBeTapped;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
    public String getEstablishedText() {
        return this.establishedText;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
    @NotNull
    public CodedLinkExtendedType getExtendedType() {
        return this.extendedType;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
    public boolean getHasProfileOverflow() {
        return this.hasProfileOverflow;
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

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
    public String getMemberText() {
        return this.memberText;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
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

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
    public List<InviteRole> getRoles() {
        return this.roles;
    }

    @Override // com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbed
    public String getRolesHeadingText() {
        return this.rolesHeadingText;
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
        Integer num = this.acceptLabelBackgroundColor;
        int hashCode = (num == null ? 0 : num.hashCode()) * 31;
        Integer num2 = this.acceptLabelBorderColor;
        int hashCode2 = (hashCode + (num2 == null ? 0 : num2.hashCode())) * 31;
        Integer num3 = this.acceptLabelColor;
        int hashCode3 = (hashCode2 + (num3 == null ? 0 : num3.hashCode())) * 31;
        String str = this.acceptLabelText;
        int hashCode4 = (hashCode3 + (str == null ? 0 : str.hashCode())) * 31;
        Integer num4 = this.bodyTextColor;
        int hashCode5 = (hashCode4 + (num4 == null ? 0 : num4.hashCode())) * 31;
        String str2 = this.bodyText;
        int hashCode6 = (((((hashCode5 + (str2 == null ? 0 : str2.hashCode())) * 31) + Integer.hashCode(this.backgroundColor)) * 31) + Integer.hashCode(this.borderColor)) * 31;
        Boolean bool = this.canBeAccepted;
        int hashCode7 = (hashCode6 + (bool == null ? 0 : bool.hashCode())) * 31;
        Boolean bool2 = this.embedCanBeTapped;
        int hashCode8 = (((hashCode7 + (bool2 == null ? 0 : bool2.hashCode())) * 31) + Integer.hashCode(this.headerColor)) * 31;
        String str3 = this.headerText;
        int hashCode9 = (hashCode8 + (str3 == null ? 0 : str3.hashCode())) * 31;
        Integer num5 = this.resolvingGradientEnd;
        int hashCode10 = (hashCode9 + (num5 == null ? 0 : num5.hashCode())) * 31;
        Integer num6 = this.resolvingGradientStart;
        int hashCode11 = (hashCode10 + (num6 == null ? 0 : num6.hashCode())) * 31;
        Boolean bool3 = this.splashHasRadialGradient;
        int hashCode12 = (hashCode11 + (bool3 == null ? 0 : bool3.hashCode())) * 31;
        Integer num7 = this.splashOpacity;
        int hashCode13 = (hashCode12 + (num7 == null ? 0 : num7.hashCode())) * 31;
        String str4 = this.splashUrl;
        int hashCode14 = (hashCode13 + (str4 == null ? 0 : str4.hashCode())) * 31;
        String str5 = this.inviteSplash;
        int hashCode15 = (hashCode14 + (str5 == null ? 0 : str5.hashCode())) * 31;
        String str6 = this.subtitle;
        int hashCode16 = (hashCode15 + (str6 == null ? 0 : str6.hashCode())) * 31;
        Integer num8 = this.subtitleColor;
        int hashCode17 = (hashCode16 + (num8 == null ? 0 : num8.hashCode())) * 31;
        Integer num9 = this.thumbnailBackgroundColor;
        int hashCode18 = (hashCode17 + (num9 == null ? 0 : num9.hashCode())) * 31;
        Integer num10 = this.thumbnailCornerRadius;
        int hashCode19 = (hashCode18 + (num10 == null ? 0 : num10.hashCode())) * 31;
        String str7 = this.thumbnailText;
        int hashCode20 = (hashCode19 + (str7 == null ? 0 : str7.hashCode())) * 31;
        String str8 = this.thumbnailUrl;
        int hashCode21 = (hashCode20 + (str8 == null ? 0 : str8.hashCode())) * 31;
        Integer num11 = this.titleColor;
        int hashCode22 = (hashCode21 + (num11 == null ? 0 : num11.hashCode())) * 31;
        String str9 = this.titleText;
        int hashCode23 = (hashCode22 + (str9 == null ? 0 : str9.hashCode())) * 31;
        InviteType inviteType = this.type;
        int hashCode24 = (((hashCode23 + (inviteType == null ? 0 : inviteType.hashCode())) * 31) + this.extendedType.hashCode()) * 31;
        String str10 = this.memberText;
        int hashCode25 = (hashCode24 + (str10 == null ? 0 : str10.hashCode())) * 31;
        String str11 = this.onlineText;
        int hashCode26 = (((((((hashCode25 + (str11 == null ? 0 : str11.hashCode())) * 31) + Integer.hashCode(this.bannerColor)) * 31) + Integer.hashCode(this.bannerColorSecondary)) * 31) + Boolean.hashCode(this.hasProfileOverflow)) * 31;
        String str12 = this.badgeIconUrl;
        int hashCode27 = (hashCode26 + (str12 == null ? 0 : str12.hashCode())) * 31;
        String str13 = this.establishedText;
        int hashCode28 = (hashCode27 + (str13 == null ? 0 : str13.hashCode())) * 31;
        List<InviteRole> list = this.roles;
        int hashCode29 = (hashCode28 + (list == null ? 0 : list.hashCode())) * 31;
        String str14 = this.rolesHeadingText;
        return hashCode29 + (str14 != null ? str14.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        Integer num = this.acceptLabelBackgroundColor;
        Integer num2 = this.acceptLabelBorderColor;
        Integer num3 = this.acceptLabelColor;
        String str = this.acceptLabelText;
        Integer num4 = this.bodyTextColor;
        String str2 = this.bodyText;
        int i10 = this.backgroundColor;
        int i11 = this.borderColor;
        Boolean bool = this.canBeAccepted;
        Boolean bool2 = this.embedCanBeTapped;
        int i12 = this.headerColor;
        String str3 = this.headerText;
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
        InviteType inviteType = this.type;
        CodedLinkExtendedType codedLinkExtendedType = this.extendedType;
        String str10 = this.memberText;
        String str11 = this.onlineText;
        int i13 = this.bannerColor;
        int i14 = this.bannerColorSecondary;
        boolean z10 = this.hasProfileOverflow;
        String str12 = this.badgeIconUrl;
        String str13 = this.establishedText;
        List<InviteRole> list = this.roles;
        String str14 = this.rolesHeadingText;
        return "GuildProfileInviteEmbedImpl(acceptLabelBackgroundColor=" + num + ", acceptLabelBorderColor=" + num2 + ", acceptLabelColor=" + num3 + ", acceptLabelText=" + str + ", bodyTextColor=" + num4 + ", bodyText=" + str2 + ", backgroundColor=" + i10 + ", borderColor=" + i11 + ", canBeAccepted=" + bool + ", embedCanBeTapped=" + bool2 + ", headerColor=" + i12 + ", headerText=" + str3 + ", resolvingGradientEnd=" + num5 + ", resolvingGradientStart=" + num6 + ", splashHasRadialGradient=" + bool3 + ", splashOpacity=" + num7 + ", splashUrl=" + str4 + ", inviteSplash=" + str5 + ", subtitle=" + str6 + ", subtitleColor=" + num8 + ", thumbnailBackgroundColor=" + num9 + ", thumbnailCornerRadius=" + num10 + ", thumbnailText=" + str7 + ", thumbnailUrl=" + str8 + ", titleColor=" + num11 + ", titleText=" + str9 + ", type=" + inviteType + ", extendedType=" + codedLinkExtendedType + ", memberText=" + str10 + ", onlineText=" + str11 + ", bannerColor=" + i13 + ", bannerColorSecondary=" + i14 + ", hasProfileOverflow=" + z10 + ", badgeIconUrl=" + str12 + ", establishedText=" + str13 + ", roles=" + list + ", rolesHeadingText=" + str14 + ")";
    }

    public /* synthetic */ GuildProfileInviteEmbedImpl(Integer num, Integer num2, Integer num3, String str, Integer num4, String str2, int i10, int i11, Boolean bool, Boolean bool2, int i12, String str3, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, InviteType inviteType, CodedLinkExtendedType codedLinkExtendedType, String str10, String str11, int i13, int i14, boolean z10, String str12, String str13, List list, String str14, int i15, int i16, DefaultConstructorMarker defaultConstructorMarker) {
        this((i15 & 1) != 0 ? null : num, (i15 & 2) != 0 ? null : num2, (i15 & 4) != 0 ? null : num3, (i15 & 8) != 0 ? null : str, (i15 & 16) != 0 ? null : num4, (i15 & 32) != 0 ? null : str2, i10, i11, (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : bool, (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : bool2, i12, str3, (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : num5, (i15 & 8192) != 0 ? null : num6, (i15 & 16384) != 0 ? null : bool3, (32768 & i15) != 0 ? null : num7, (65536 & i15) != 0 ? null : str4, (131072 & i15) != 0 ? null : str5, (262144 & i15) != 0 ? null : str6, (524288 & i15) != 0 ? null : num8, (1048576 & i15) != 0 ? null : num9, (2097152 & i15) != 0 ? null : num10, (4194304 & i15) != 0 ? null : str7, (8388608 & i15) != 0 ? null : str8, (16777216 & i15) != 0 ? null : num11, (33554432 & i15) != 0 ? null : str9, (67108864 & i15) != 0 ? null : inviteType, (134217728 & i15) != 0 ? CodedLinkExtendedType.GUILD_PROFILE_INVITE : codedLinkExtendedType, (268435456 & i15) != 0 ? null : str10, (i15 & 536870912) != 0 ? null : str11, i13, i14, z10, (i16 & 2) != 0 ? null : str12, (i16 & 4) != 0 ? null : str13, (i16 & 8) != 0 ? null : list, (i16 & 16) != 0 ? null : str14);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GuildProfileInviteEmbedImpl(Integer num, Integer num2, Integer num3, String str, Integer num4, String str2, int i10, int i11, Boolean bool, Boolean bool2, int i12, String str3, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, InviteType inviteType, @NotNull CodedLinkExtendedType extendedType, String str10, String str11, int i13, int i14, boolean z10, String str12, String str13, List<InviteRole> list, String str14) {
        super(null);
        Intrinsics.checkNotNullParameter(extendedType, "extendedType");
        this.acceptLabelBackgroundColor = num;
        this.acceptLabelBorderColor = num2;
        this.acceptLabelColor = num3;
        this.acceptLabelText = str;
        this.bodyTextColor = num4;
        this.bodyText = str2;
        this.backgroundColor = i10;
        this.borderColor = i11;
        this.canBeAccepted = bool;
        this.embedCanBeTapped = bool2;
        this.headerColor = i12;
        this.headerText = str3;
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
        this.type = inviteType;
        this.extendedType = extendedType;
        this.memberText = str10;
        this.onlineText = str11;
        this.bannerColor = i13;
        this.bannerColorSecondary = i14;
        this.hasProfileOverflow = z10;
        this.badgeIconUrl = str12;
        this.establishedText = str13;
        this.roles = list;
        this.rolesHeadingText = str14;
    }
}
