package com.discord.chat.bridge.embed;

import androidx.recyclerview.widget.RecyclerView;
import bt.v1;
import com.discord.chat.bridge.spoiler.SpoilerableData;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.PointerEventHelper;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer;
import java.util.List;
import jr.l;
import jr.o;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.MediaStreamTrack;
import org.webrtc.PeerConnection;
import ys.m;
@m
@Metadata(d1 = {"\u0000\u0088\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\bV\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u0099\u00012\u00020\u0001:\u0004\u0098\u0001\u0099\u0001B\u008d\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\u0010\b\u0002\u0010\r\u001a\n\u0012\u0004\u0012\u00020\u000f\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0014\u0012\u0010\b\u0002\u0010\u0015\u001a\n\u0012\u0004\u0012\u00020\u0014\u0018\u00010\u000e\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u0014\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u001d\u0012\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u001f\u0012\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\"\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010#\u001a\u0004\u0018\u00010\u001d\u0012\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\u001d\u0012\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u001d\u0012\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010'\u001a\u0004\u0018\u00010(\u0012\n\b\u0003\u0010)\u001a\u0004\u0018\u00010*\u0012\n\b\u0003\u0010+\u001a\u0004\u0018\u00010*\u0012\n\b\u0003\u0010,\u001a\u0004\u0018\u00010*\u0012\b\b\u0001\u0010-\u001a\u00020*\u0012\n\b\u0003\u0010.\u001a\u0004\u0018\u00010*¢\u0006\u0004\b/\u00100B\u0081\u0003\b\u0010\u0012\u0006\u00101\u001a\u00020*\u0012\u0006\u00102\u001a\u00020*\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\u000e\u0010\r\u001a\n\u0012\u0004\u0012\u00020\u000f\u0018\u00010\u000e\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\f\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014\u0012\u000e\u0010\u0015\u001a\n\u0012\u0004\u0012\u00020\u0014\u0018\u00010\u000e\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0014\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\u001d\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\u001f\u0012\b\u0010 \u001a\u0004\u0018\u00010\u0005\u0012\b\u0010!\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\"\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010#\u001a\u0004\u0018\u00010\u001d\u0012\b\u0010$\u001a\u0004\u0018\u00010\u001d\u0012\b\u0010%\u001a\u0004\u0018\u00010\u001d\u0012\b\u0010&\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010'\u001a\u0004\u0018\u00010(\u0012\b\u0010)\u001a\u0004\u0018\u00010*\u0012\b\u0010+\u001a\u0004\u0018\u00010*\u0012\b\u0010,\u001a\u0004\u0018\u00010*\u0012\u0006\u0010-\u001a\u00020*\u0012\b\u0010.\u001a\u0004\u0018\u00010*\u0012\b\u00103\u001a\u0004\u0018\u00010\u0005\u0012\b\u00104\u001a\u0004\u0018\u00010\u0005\u0012\b\u00105\u001a\u0004\u0018\u000106¢\u0006\u0004\b/\u00107J\t\u0010i\u001a\u00020\u0003HÆ\u0003J\u000b\u0010j\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010k\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u000b\u0010l\u001a\u0004\u0018\u00010\tHÆ\u0003J\u000b\u0010m\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010n\u001a\u0004\u0018\u00010\fHÆ\u0003J\u0011\u0010o\u001a\n\u0012\u0004\u0012\u00020\u000f\u0018\u00010\u000eHÆ\u0003J\u000b\u0010p\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010q\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010r\u001a\u0004\u0018\u00010\fHÆ\u0003J\u000b\u0010s\u001a\u0004\u0018\u00010\u0014HÆ\u0003J\u0011\u0010t\u001a\n\u0012\u0004\u0012\u00020\u0014\u0018\u00010\u000eHÆ\u0003J\u000b\u0010u\u001a\u0004\u0018\u00010\u0014HÆ\u0003J\u000b\u0010v\u001a\u0004\u0018\u00010\u0018HÆ\u0003J\u000b\u0010w\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010x\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010y\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u0010\u0010z\u001a\u0004\u0018\u00010\u001dHÆ\u0003¢\u0006\u0002\u0010RJ\u000b\u0010{\u001a\u0004\u0018\u00010\u001fHÆ\u0003J\u000b\u0010|\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010}\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010~\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u0010\u0010\u007f\u001a\u0004\u0018\u00010\u001dHÆ\u0003¢\u0006\u0002\u0010RJ\u0011\u0010\u0080\u0001\u001a\u0004\u0018\u00010\u001dHÆ\u0003¢\u0006\u0002\u0010RJ\u0011\u0010\u0081\u0001\u001a\u0004\u0018\u00010\u001dHÆ\u0003¢\u0006\u0002\u0010RJ\f\u0010\u0082\u0001\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\f\u0010\u0083\u0001\u001a\u0004\u0018\u00010(HÆ\u0003J\u0011\u0010\u0084\u0001\u001a\u0004\u0018\u00010*HÆ\u0003¢\u0006\u0002\u0010`J\u0011\u0010\u0085\u0001\u001a\u0004\u0018\u00010*HÆ\u0003¢\u0006\u0002\u0010`J\u0011\u0010\u0086\u0001\u001a\u0004\u0018\u00010*HÆ\u0003¢\u0006\u0002\u0010`J\n\u0010\u0087\u0001\u001a\u00020*HÆ\u0003J\u0011\u0010\u0088\u0001\u001a\u0004\u0018\u00010*HÆ\u0003¢\u0006\u0002\u0010`J\u0098\u0003\u0010\u0089\u0001\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\u0010\b\u0002\u0010\r\u001a\n\u0012\u0004\u0012\u00020\u000f\u0018\u00010\u000e2\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00142\u0010\b\u0002\u0010\u0015\u001a\n\u0012\u0004\u0012\u00020\u0014\u0018\u00010\u000e2\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u00142\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u001d2\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u001f2\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\"\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010#\u001a\u0004\u0018\u00010\u001d2\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\u001d2\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u001d2\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010'\u001a\u0004\u0018\u00010(2\n\b\u0003\u0010)\u001a\u0004\u0018\u00010*2\n\b\u0003\u0010+\u001a\u0004\u0018\u00010*2\n\b\u0003\u0010,\u001a\u0004\u0018\u00010*2\b\b\u0003\u0010-\u001a\u00020*2\n\b\u0003\u0010.\u001a\u0004\u0018\u00010*HÆ\u0001¢\u0006\u0003\u0010\u008a\u0001J\u0016\u0010\u008b\u0001\u001a\u00020\u001d2\n\u0010\u008c\u0001\u001a\u0005\u0018\u00010\u008d\u0001HÖ\u0003J\n\u0010\u008e\u0001\u001a\u00020*HÖ\u0001J\n\u0010\u008f\u0001\u001a\u00020\u0005HÖ\u0001J-\u0010\u0090\u0001\u001a\u00030\u0091\u00012\u0007\u0010\u0092\u0001\u001a\u00020\u00002\b\u0010\u0093\u0001\u001a\u00030\u0094\u00012\b\u0010\u0095\u0001\u001a\u00030\u0096\u0001H\u0001¢\u0006\u0003\b\u0097\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b8\u00109R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b:\u0010;R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b<\u0010=R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b>\u0010?R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b@\u0010;R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\bA\u0010BR\u0019\u0010\r\u001a\n\u0012\u0004\u0012\u00020\u000f\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\bC\u0010DR\u0013\u0010\u0010\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\bE\u0010;R\u0013\u0010\u0011\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\bF\u0010;R\u0013\u0010\u0012\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\bG\u0010BR\u0013\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\b\n\u0000\u001a\u0004\bH\u0010IR\u0019\u0010\u0015\u001a\n\u0012\u0004\u0012\u00020\u0014\u0018\u00010\u000e¢\u0006\b\n\u0000\u001a\u0004\bJ\u0010DR\u0013\u0010\u0016\u001a\u0004\u0018\u00010\u0014¢\u0006\b\n\u0000\u001a\u0004\bK\u0010IR\u0013\u0010\u0017\u001a\u0004\u0018\u00010\u0018¢\u0006\b\n\u0000\u001a\u0004\bL\u0010MR\u0013\u0010\u0019\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\bN\u0010;R\u0013\u0010\u001a\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\bO\u0010;R\u0013\u0010\u001b\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\bP\u0010;R\u0015\u0010\u001c\u001a\u0004\u0018\u00010\u001d¢\u0006\n\n\u0002\u0010S\u001a\u0004\bQ\u0010RR\u0013\u0010\u001e\u001a\u0004\u0018\u00010\u001f¢\u0006\b\n\u0000\u001a\u0004\bT\u0010UR\u0013\u0010 \u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\bV\u0010;R\u0013\u0010!\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\bW\u0010;R\u0013\u0010\"\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\bX\u0010;R\u0015\u0010#\u001a\u0004\u0018\u00010\u001d¢\u0006\n\n\u0002\u0010S\u001a\u0004\bY\u0010RR\u0015\u0010$\u001a\u0004\u0018\u00010\u001d¢\u0006\n\n\u0002\u0010S\u001a\u0004\bZ\u0010RR\u0015\u0010%\u001a\u0004\u0018\u00010\u001d¢\u0006\n\n\u0002\u0010S\u001a\u0004\b[\u0010RR\u0013\u0010&\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\\\u0010;R\u0013\u0010'\u001a\u0004\u0018\u00010(¢\u0006\b\n\u0000\u001a\u0004\b]\u0010^R\u0015\u0010)\u001a\u0004\u0018\u00010*¢\u0006\n\n\u0002\u0010a\u001a\u0004\b_\u0010`R\u0015\u0010+\u001a\u0004\u0018\u00010*¢\u0006\n\n\u0002\u0010a\u001a\u0004\bb\u0010`R\u0015\u0010,\u001a\u0004\u0018\u00010*¢\u0006\n\n\u0002\u0010a\u001a\u0004\bc\u0010`R\u0011\u0010-\u001a\u00020*¢\u0006\b\n\u0000\u001a\u0004\bd\u0010eR\u0015\u0010.\u001a\u0004\u0018\u00010*¢\u0006\n\n\u0002\u0010a\u001a\u0004\bf\u0010`R\u0016\u00103\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bg\u0010;R\u0016\u00104\u001a\u0004\u0018\u00010\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bh\u0010;¨\u0006\u009a\u0001"}, d2 = {"Lcom/discord/chat/bridge/embed/Embed;", "Lcom/discord/chat/bridge/spoiler/SpoilerableData;", "type", "Lcom/discord/chat/bridge/embed/EmbedType;", StackTraceHelper.ID_KEY, "", "author", "Lcom/discord/chat/bridge/embed/EmbedAuthor;", "provider", "Lcom/discord/chat/bridge/embed/EmbedProvider;", "rawTitle", "title", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "fields", "", "Lcom/discord/chat/bridge/embed/EmbedField;", "url", "rawDescription", "description", "image", "Lcom/discord/chat/bridge/embed/EmbedMedia;", "images", MediaStreamTrack.VIDEO_TRACK_KIND, "thumbnail", "Lcom/discord/chat/bridge/embed/EmbedThumbnail;", "numAttachments", "attachmentsSize", "messageSendError", "disableBackgroundColor", "", Footer.type, "Lcom/discord/chat/bridge/embed/EmbedFooter;", "spoiler", "obscure", "obscureAwaitingScan", "obscureHideControls", "obscureIsOpaque", "verifyAge", "iconURL", "failureState", "Lcom/discord/chat/bridge/embed/EmbedFailureState;", "providerColor", "", ViewProps.BORDER_LEFT_COLOR, "headerTextColor", "bodyTextColor", ViewProps.BACKGROUND_COLOR, "<init>", "(Lcom/discord/chat/bridge/embed/EmbedType;Ljava/lang/String;Lcom/discord/chat/bridge/embed/EmbedAuthor;Lcom/discord/chat/bridge/embed/EmbedProvider;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Lcom/discord/chat/bridge/embed/EmbedMedia;Ljava/util/List;Lcom/discord/chat/bridge/embed/EmbedMedia;Lcom/discord/chat/bridge/embed/EmbedThumbnail;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Lcom/discord/chat/bridge/embed/EmbedFooter;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;Lcom/discord/chat/bridge/embed/EmbedFailureState;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;ILjava/lang/Integer;)V", "seen0", "seen1", "spoilerOrNull", "obscureOrNull", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILcom/discord/chat/bridge/embed/EmbedType;Ljava/lang/String;Lcom/discord/chat/bridge/embed/EmbedAuthor;Lcom/discord/chat/bridge/embed/EmbedProvider;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Lcom/discord/chat/bridge/embed/EmbedMedia;Ljava/util/List;Lcom/discord/chat/bridge/embed/EmbedMedia;Lcom/discord/chat/bridge/embed/EmbedThumbnail;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Lcom/discord/chat/bridge/embed/EmbedFooter;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;Lcom/discord/chat/bridge/embed/EmbedFailureState;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;ILjava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()Lcom/discord/chat/bridge/embed/EmbedType;", "getId", "()Ljava/lang/String;", "getAuthor", "()Lcom/discord/chat/bridge/embed/EmbedAuthor;", "getProvider", "()Lcom/discord/chat/bridge/embed/EmbedProvider;", "getRawTitle", "getTitle", "()Lcom/discord/chat/bridge/structurabletext/StructurableText;", "getFields", "()Ljava/util/List;", "getUrl", "getRawDescription", "getDescription", "getImage", "()Lcom/discord/chat/bridge/embed/EmbedMedia;", "getImages", "getVideo", "getThumbnail", "()Lcom/discord/chat/bridge/embed/EmbedThumbnail;", "getNumAttachments", "getAttachmentsSize", "getMessageSendError", "getDisableBackgroundColor", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getFooter", "()Lcom/discord/chat/bridge/embed/EmbedFooter;", "getSpoiler", "getObscure", "getObscureAwaitingScan", "getObscureHideControls", "getObscureIsOpaque", "getVerifyAge", "getIconURL", "getFailureState", "()Lcom/discord/chat/bridge/embed/EmbedFailureState;", "getProviderColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getBorderLeftColor", "getHeaderTextColor", "getBodyTextColor", "()I", "getBackgroundColor", "getSpoilerOrNull", "getObscureOrNull", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "component23", "component24", "component25", "component26", "component27", "component28", "component29", "component30", "component31", "component32", "copy", "(Lcom/discord/chat/bridge/embed/EmbedType;Ljava/lang/String;Lcom/discord/chat/bridge/embed/EmbedAuthor;Lcom/discord/chat/bridge/embed/EmbedProvider;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/StructurableText;Lcom/discord/chat/bridge/embed/EmbedMedia;Ljava/util/List;Lcom/discord/chat/bridge/embed/EmbedMedia;Lcom/discord/chat/bridge/embed/EmbedThumbnail;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Lcom/discord/chat/bridge/embed/EmbedFooter;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;Lcom/discord/chat/bridge/embed/EmbedFailureState;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;ILjava/lang/Integer;)Lcom/discord/chat/bridge/embed/Embed;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmbed.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Embed.kt\ncom/discord/chat/bridge/embed/Embed\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,46:1\n1#2:47\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Embed implements SpoilerableData {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String attachmentsSize;
    private final EmbedAuthor author;
    private final Integer backgroundColor;
    private final int bodyTextColor;
    private final Integer borderLeftColor;
    private final StructurableText description;
    private final Boolean disableBackgroundColor;
    private final EmbedFailureState failureState;
    private final List<EmbedField> fields;
    private final EmbedFooter footer;
    private final Integer headerTextColor;
    private final String iconURL;

    /* renamed from: id  reason: collision with root package name */
    private final String f9298id;
    private final EmbedMedia image;
    private final List<EmbedMedia> images;
    private final String messageSendError;
    private final String numAttachments;
    private final String obscure;
    private final String obscureAwaitingScan;
    private final Boolean obscureHideControls;
    private final Boolean obscureIsOpaque;
    private final String obscureOrNull;
    private final EmbedProvider provider;
    private final Integer providerColor;
    private final String rawDescription;
    private final String rawTitle;
    private final String spoiler;
    private final String spoilerOrNull;
    private final EmbedThumbnail thumbnail;
    private final StructurableText title;
    @NotNull
    private final EmbedType type;
    private final String url;
    private final Boolean verifyAge;
    private final EmbedMedia video;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/embed/Embed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/embed/Embed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return Embed$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        o oVar = o.f32182e;
        $childSerializers = new Lazy[]{l.a(oVar, new Function0() { // from class: com.discord.chat.bridge.embed.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = Embed._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), null, null, null, null, null, l.a(oVar, new Function0() { // from class: com.discord.chat.bridge.embed.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$6;
                _childSerializers$_anonymous_$6 = Embed._childSerializers$_anonymous_$6();
                return _childSerializers$_anonymous_$6;
            }
        }), null, null, null, null, l.a(oVar, new Function0() { // from class: com.discord.chat.bridge.embed.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$7;
                _childSerializers$_anonymous_$7 = Embed._childSerializers$_anonymous_$7();
                return _childSerializers$_anonymous_$7;
            }
        }), null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null};
    }

    public /* synthetic */ Embed(int i10, int i11, EmbedType embedType, String str, EmbedAuthor embedAuthor, EmbedProvider embedProvider, String str2, StructurableText structurableText, List list, String str3, String str4, StructurableText structurableText2, EmbedMedia embedMedia, List list2, EmbedMedia embedMedia2, EmbedThumbnail embedThumbnail, String str5, String str6, String str7, Boolean bool, EmbedFooter embedFooter, String str8, String str9, String str10, Boolean bool2, Boolean bool3, Boolean bool4, String str11, EmbedFailureState embedFailureState, Integer num, Integer num2, Integer num3, int i12, Integer num4, String str12, String str13, SerializationConstructorMarker serializationConstructorMarker) {
        String str14;
        if (1073741825 != (i10 & 1073741825)) {
            v1.a(new int[]{i10, i11}, new int[]{1073741825, 0}, Embed$$serializer.INSTANCE.getDescriptor());
        }
        this.type = embedType;
        String str15 = null;
        if ((i10 & 2) == 0) {
            this.f9298id = null;
        } else {
            this.f9298id = str;
        }
        if ((i10 & 4) == 0) {
            this.author = null;
        } else {
            this.author = embedAuthor;
        }
        if ((i10 & 8) == 0) {
            this.provider = null;
        } else {
            this.provider = embedProvider;
        }
        if ((i10 & 16) == 0) {
            this.rawTitle = null;
        } else {
            this.rawTitle = str2;
        }
        if ((i10 & 32) == 0) {
            this.title = null;
        } else {
            this.title = structurableText;
        }
        if ((i10 & 64) == 0) {
            this.fields = null;
        } else {
            this.fields = list;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.url = null;
        } else {
            this.url = str3;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.rawDescription = null;
        } else {
            this.rawDescription = str4;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.description = null;
        } else {
            this.description = structurableText2;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.image = null;
        } else {
            this.image = embedMedia;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.images = null;
        } else {
            this.images = list2;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.video = null;
        } else {
            this.video = embedMedia2;
        }
        if ((i10 & 8192) == 0) {
            this.thumbnail = null;
        } else {
            this.thumbnail = embedThumbnail;
        }
        if ((i10 & 16384) == 0) {
            this.numAttachments = null;
        } else {
            this.numAttachments = str5;
        }
        if ((32768 & i10) == 0) {
            this.attachmentsSize = null;
        } else {
            this.attachmentsSize = str6;
        }
        if ((65536 & i10) == 0) {
            this.messageSendError = null;
        } else {
            this.messageSendError = str7;
        }
        if ((131072 & i10) == 0) {
            this.disableBackgroundColor = null;
        } else {
            this.disableBackgroundColor = bool;
        }
        if ((262144 & i10) == 0) {
            this.footer = null;
        } else {
            this.footer = embedFooter;
        }
        if ((524288 & i10) == 0) {
            this.spoiler = null;
        } else {
            this.spoiler = str8;
        }
        if ((1048576 & i10) == 0) {
            this.obscure = null;
        } else {
            this.obscure = str9;
        }
        if ((2097152 & i10) == 0) {
            this.obscureAwaitingScan = null;
        } else {
            this.obscureAwaitingScan = str10;
        }
        if ((4194304 & i10) == 0) {
            this.obscureHideControls = null;
        } else {
            this.obscureHideControls = bool2;
        }
        if ((8388608 & i10) == 0) {
            this.obscureIsOpaque = null;
        } else {
            this.obscureIsOpaque = bool3;
        }
        if ((16777216 & i10) == 0) {
            this.verifyAge = null;
        } else {
            this.verifyAge = bool4;
        }
        if ((33554432 & i10) == 0) {
            this.iconURL = null;
        } else {
            this.iconURL = str11;
        }
        if ((67108864 & i10) == 0) {
            this.failureState = null;
        } else {
            this.failureState = embedFailureState;
        }
        if ((134217728 & i10) == 0) {
            this.providerColor = null;
        } else {
            this.providerColor = num;
        }
        if ((268435456 & i10) == 0) {
            this.borderLeftColor = null;
        } else {
            this.borderLeftColor = num2;
        }
        if ((536870912 & i10) == 0) {
            this.headerTextColor = null;
        } else {
            this.headerTextColor = num3;
        }
        this.bodyTextColor = i12;
        if ((i10 & Integer.MIN_VALUE) == 0) {
            this.backgroundColor = null;
        } else {
            this.backgroundColor = num4;
        }
        if ((i11 & 1) == 0) {
            str14 = this.spoiler;
            if (str14 == null || StringsKt.k0(str14)) {
                str14 = null;
            }
        } else {
            str14 = str12;
        }
        this.spoilerOrNull = str14;
        if ((i11 & 2) != 0) {
            this.obscureOrNull = str13;
            return;
        }
        String str16 = this.obscure;
        if (str16 != null && !StringsKt.k0(str16)) {
            str15 = str16;
        }
        this.obscureOrNull = str15;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return EmbedType.Companion.serializer();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$6() {
        return new bt.f(EmbedField$$serializer.INSTANCE);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$7() {
        return new bt.f(EmbedMedia$$serializer.INSTANCE);
    }

    public static /* synthetic */ Embed copy$default(Embed embed, EmbedType embedType, String str, EmbedAuthor embedAuthor, EmbedProvider embedProvider, String str2, StructurableText structurableText, List list, String str3, String str4, StructurableText structurableText2, EmbedMedia embedMedia, List list2, EmbedMedia embedMedia2, EmbedThumbnail embedThumbnail, String str5, String str6, String str7, Boolean bool, EmbedFooter embedFooter, String str8, String str9, String str10, Boolean bool2, Boolean bool3, Boolean bool4, String str11, EmbedFailureState embedFailureState, Integer num, Integer num2, Integer num3, int i10, Integer num4, int i11, Object obj) {
        Integer num5;
        int i12;
        String str12;
        String str13;
        Boolean bool5;
        EmbedFooter embedFooter2;
        String str14;
        String str15;
        String str16;
        Boolean bool6;
        Boolean bool7;
        Boolean bool8;
        String str17;
        EmbedFailureState embedFailureState2;
        Integer num6;
        Integer num7;
        Integer num8;
        String str18;
        String str19;
        EmbedAuthor embedAuthor2;
        EmbedProvider embedProvider2;
        String str20;
        StructurableText structurableText3;
        List list3;
        String str21;
        String str22;
        StructurableText structurableText4;
        EmbedMedia embedMedia3;
        List list4;
        EmbedMedia embedMedia4;
        EmbedThumbnail embedThumbnail2;
        EmbedType embedType2 = (i11 & 1) != 0 ? embed.type : embedType;
        String str23 = (i11 & 2) != 0 ? embed.f9298id : str;
        EmbedAuthor embedAuthor3 = (i11 & 4) != 0 ? embed.author : embedAuthor;
        EmbedProvider embedProvider3 = (i11 & 8) != 0 ? embed.provider : embedProvider;
        String str24 = (i11 & 16) != 0 ? embed.rawTitle : str2;
        StructurableText structurableText5 = (i11 & 32) != 0 ? embed.title : structurableText;
        List list5 = (i11 & 64) != 0 ? embed.fields : list;
        String str25 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? embed.url : str3;
        String str26 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? embed.rawDescription : str4;
        StructurableText structurableText6 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? embed.description : structurableText2;
        EmbedMedia embedMedia5 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? embed.image : embedMedia;
        List list6 = (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? embed.images : list2;
        EmbedMedia embedMedia6 = (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? embed.video : embedMedia2;
        EmbedThumbnail embedThumbnail3 = (i11 & 8192) != 0 ? embed.thumbnail : embedThumbnail;
        EmbedType embedType3 = embedType2;
        String str27 = (i11 & 16384) != 0 ? embed.numAttachments : str5;
        String str28 = (i11 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? embed.attachmentsSize : str6;
        String str29 = (i11 & 65536) != 0 ? embed.messageSendError : str7;
        Boolean bool9 = (i11 & 131072) != 0 ? embed.disableBackgroundColor : bool;
        EmbedFooter embedFooter3 = (i11 & 262144) != 0 ? embed.footer : embedFooter;
        String str30 = (i11 & 524288) != 0 ? embed.spoiler : str8;
        String str31 = (i11 & 1048576) != 0 ? embed.obscure : str9;
        String str32 = (i11 & 2097152) != 0 ? embed.obscureAwaitingScan : str10;
        Boolean bool10 = (i11 & 4194304) != 0 ? embed.obscureHideControls : bool2;
        Boolean bool11 = (i11 & 8388608) != 0 ? embed.obscureIsOpaque : bool3;
        Boolean bool12 = (i11 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? embed.verifyAge : bool4;
        String str33 = (i11 & 33554432) != 0 ? embed.iconURL : str11;
        EmbedFailureState embedFailureState3 = (i11 & 67108864) != 0 ? embed.failureState : embedFailureState;
        Integer num9 = (i11 & 134217728) != 0 ? embed.providerColor : num;
        Integer num10 = (i11 & 268435456) != 0 ? embed.borderLeftColor : num2;
        Integer num11 = (i11 & 536870912) != 0 ? embed.headerTextColor : num3;
        int i13 = (i11 & 1073741824) != 0 ? embed.bodyTextColor : i10;
        if ((i11 & Integer.MIN_VALUE) != 0) {
            i12 = i13;
            num5 = embed.backgroundColor;
            str13 = str29;
            bool5 = bool9;
            embedFooter2 = embedFooter3;
            str14 = str30;
            str15 = str31;
            str16 = str32;
            bool6 = bool10;
            bool7 = bool11;
            bool8 = bool12;
            str17 = str33;
            embedFailureState2 = embedFailureState3;
            num6 = num9;
            num7 = num10;
            num8 = num11;
            str18 = str27;
            str19 = str23;
            embedAuthor2 = embedAuthor3;
            embedProvider2 = embedProvider3;
            str20 = str24;
            structurableText3 = structurableText5;
            list3 = list5;
            str21 = str25;
            str22 = str26;
            structurableText4 = structurableText6;
            embedMedia3 = embedMedia5;
            list4 = list6;
            embedMedia4 = embedMedia6;
            embedThumbnail2 = embedThumbnail3;
            str12 = str28;
        } else {
            num5 = num4;
            i12 = i13;
            str12 = str28;
            str13 = str29;
            bool5 = bool9;
            embedFooter2 = embedFooter3;
            str14 = str30;
            str15 = str31;
            str16 = str32;
            bool6 = bool10;
            bool7 = bool11;
            bool8 = bool12;
            str17 = str33;
            embedFailureState2 = embedFailureState3;
            num6 = num9;
            num7 = num10;
            num8 = num11;
            str18 = str27;
            str19 = str23;
            embedAuthor2 = embedAuthor3;
            embedProvider2 = embedProvider3;
            str20 = str24;
            structurableText3 = structurableText5;
            list3 = list5;
            str21 = str25;
            str22 = str26;
            structurableText4 = structurableText6;
            embedMedia3 = embedMedia5;
            list4 = list6;
            embedMedia4 = embedMedia6;
            embedThumbnail2 = embedThumbnail3;
        }
        return embed.copy(embedType3, str19, embedAuthor2, embedProvider2, str20, structurableText3, list3, str21, str22, structurableText4, embedMedia3, list4, embedMedia4, embedThumbnail2, str18, str12, str13, bool5, embedFooter2, str14, str15, str16, bool6, bool7, bool8, str17, embedFailureState2, num6, num7, num8, i12, num5);
    }

    /* JADX WARN: Code restructure failed: missing block: B:192:0x02a6, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r0, r2) == false) goto L143;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final /* synthetic */ void write$Self$chat_release(com.discord.chat.bridge.embed.Embed r4, kotlinx.serialization.encoding.CompositeEncoder r5, kotlinx.serialization.descriptors.SerialDescriptor r6) {
        /*
            Method dump skipped, instructions count: 733
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.embed.Embed.write$Self$chat_release(com.discord.chat.bridge.embed.Embed, kotlinx.serialization.encoding.CompositeEncoder, kotlinx.serialization.descriptors.SerialDescriptor):void");
    }

    @NotNull
    public final EmbedType component1() {
        return this.type;
    }

    public final StructurableText component10() {
        return this.description;
    }

    public final EmbedMedia component11() {
        return this.image;
    }

    public final List<EmbedMedia> component12() {
        return this.images;
    }

    public final EmbedMedia component13() {
        return this.video;
    }

    public final EmbedThumbnail component14() {
        return this.thumbnail;
    }

    public final String component15() {
        return this.numAttachments;
    }

    public final String component16() {
        return this.attachmentsSize;
    }

    public final String component17() {
        return this.messageSendError;
    }

    public final Boolean component18() {
        return this.disableBackgroundColor;
    }

    public final EmbedFooter component19() {
        return this.footer;
    }

    public final String component2() {
        return this.f9298id;
    }

    public final String component20() {
        return this.spoiler;
    }

    public final String component21() {
        return this.obscure;
    }

    public final String component22() {
        return this.obscureAwaitingScan;
    }

    public final Boolean component23() {
        return this.obscureHideControls;
    }

    public final Boolean component24() {
        return this.obscureIsOpaque;
    }

    public final Boolean component25() {
        return this.verifyAge;
    }

    public final String component26() {
        return this.iconURL;
    }

    public final EmbedFailureState component27() {
        return this.failureState;
    }

    public final Integer component28() {
        return this.providerColor;
    }

    public final Integer component29() {
        return this.borderLeftColor;
    }

    public final EmbedAuthor component3() {
        return this.author;
    }

    public final Integer component30() {
        return this.headerTextColor;
    }

    public final int component31() {
        return this.bodyTextColor;
    }

    public final Integer component32() {
        return this.backgroundColor;
    }

    public final EmbedProvider component4() {
        return this.provider;
    }

    public final String component5() {
        return this.rawTitle;
    }

    public final StructurableText component6() {
        return this.title;
    }

    public final List<EmbedField> component7() {
        return this.fields;
    }

    public final String component8() {
        return this.url;
    }

    public final String component9() {
        return this.rawDescription;
    }

    @NotNull
    public final Embed copy(@NotNull EmbedType type, String str, EmbedAuthor embedAuthor, EmbedProvider embedProvider, String str2, StructurableText structurableText, List<EmbedField> list, String str3, String str4, StructurableText structurableText2, EmbedMedia embedMedia, List<EmbedMedia> list2, EmbedMedia embedMedia2, EmbedThumbnail embedThumbnail, String str5, String str6, String str7, Boolean bool, EmbedFooter embedFooter, String str8, String str9, String str10, Boolean bool2, Boolean bool3, Boolean bool4, String str11, EmbedFailureState embedFailureState, Integer num, Integer num2, Integer num3, int i10, Integer num4) {
        Intrinsics.checkNotNullParameter(type, "type");
        return new Embed(type, str, embedAuthor, embedProvider, str2, structurableText, list, str3, str4, structurableText2, embedMedia, list2, embedMedia2, embedThumbnail, str5, str6, str7, bool, embedFooter, str8, str9, str10, bool2, bool3, bool4, str11, embedFailureState, num, num2, num3, i10, num4);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Embed) {
            Embed embed = (Embed) obj;
            return this.type == embed.type && Intrinsics.areEqual(this.f9298id, embed.f9298id) && Intrinsics.areEqual(this.author, embed.author) && Intrinsics.areEqual(this.provider, embed.provider) && Intrinsics.areEqual(this.rawTitle, embed.rawTitle) && Intrinsics.areEqual(this.title, embed.title) && Intrinsics.areEqual(this.fields, embed.fields) && Intrinsics.areEqual(this.url, embed.url) && Intrinsics.areEqual(this.rawDescription, embed.rawDescription) && Intrinsics.areEqual(this.description, embed.description) && Intrinsics.areEqual(this.image, embed.image) && Intrinsics.areEqual(this.images, embed.images) && Intrinsics.areEqual(this.video, embed.video) && Intrinsics.areEqual(this.thumbnail, embed.thumbnail) && Intrinsics.areEqual(this.numAttachments, embed.numAttachments) && Intrinsics.areEqual(this.attachmentsSize, embed.attachmentsSize) && Intrinsics.areEqual(this.messageSendError, embed.messageSendError) && Intrinsics.areEqual(this.disableBackgroundColor, embed.disableBackgroundColor) && Intrinsics.areEqual(this.footer, embed.footer) && Intrinsics.areEqual(this.spoiler, embed.spoiler) && Intrinsics.areEqual(this.obscure, embed.obscure) && Intrinsics.areEqual(this.obscureAwaitingScan, embed.obscureAwaitingScan) && Intrinsics.areEqual(this.obscureHideControls, embed.obscureHideControls) && Intrinsics.areEqual(this.obscureIsOpaque, embed.obscureIsOpaque) && Intrinsics.areEqual(this.verifyAge, embed.verifyAge) && Intrinsics.areEqual(this.iconURL, embed.iconURL) && this.failureState == embed.failureState && Intrinsics.areEqual(this.providerColor, embed.providerColor) && Intrinsics.areEqual(this.borderLeftColor, embed.borderLeftColor) && Intrinsics.areEqual(this.headerTextColor, embed.headerTextColor) && this.bodyTextColor == embed.bodyTextColor && Intrinsics.areEqual(this.backgroundColor, embed.backgroundColor);
        }
        return false;
    }

    public final String getAttachmentsSize() {
        return this.attachmentsSize;
    }

    public final EmbedAuthor getAuthor() {
        return this.author;
    }

    public final Integer getBackgroundColor() {
        return this.backgroundColor;
    }

    public final int getBodyTextColor() {
        return this.bodyTextColor;
    }

    public final Integer getBorderLeftColor() {
        return this.borderLeftColor;
    }

    public final StructurableText getDescription() {
        return this.description;
    }

    public final Boolean getDisableBackgroundColor() {
        return this.disableBackgroundColor;
    }

    public final EmbedFailureState getFailureState() {
        return this.failureState;
    }

    public final List<EmbedField> getFields() {
        return this.fields;
    }

    public final EmbedFooter getFooter() {
        return this.footer;
    }

    public final Integer getHeaderTextColor() {
        return this.headerTextColor;
    }

    public final String getIconURL() {
        return this.iconURL;
    }

    public final String getId() {
        return this.f9298id;
    }

    public final EmbedMedia getImage() {
        return this.image;
    }

    public final List<EmbedMedia> getImages() {
        return this.images;
    }

    public final String getMessageSendError() {
        return this.messageSendError;
    }

    public final String getNumAttachments() {
        return this.numAttachments;
    }

    public final String getObscure() {
        return this.obscure;
    }

    public final String getObscureAwaitingScan() {
        return this.obscureAwaitingScan;
    }

    public final Boolean getObscureHideControls() {
        return this.obscureHideControls;
    }

    public final Boolean getObscureIsOpaque() {
        return this.obscureIsOpaque;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getObscureOrNull() {
        return this.obscureOrNull;
    }

    public final EmbedProvider getProvider() {
        return this.provider;
    }

    public final Integer getProviderColor() {
        return this.providerColor;
    }

    public final String getRawDescription() {
        return this.rawDescription;
    }

    public final String getRawTitle() {
        return this.rawTitle;
    }

    public final String getSpoiler() {
        return this.spoiler;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getSpoilerOrNull() {
        return this.spoilerOrNull;
    }

    public final EmbedThumbnail getThumbnail() {
        return this.thumbnail;
    }

    public final StructurableText getTitle() {
        return this.title;
    }

    @NotNull
    public final EmbedType getType() {
        return this.type;
    }

    public final String getUrl() {
        return this.url;
    }

    public final Boolean getVerifyAge() {
        return this.verifyAge;
    }

    public final EmbedMedia getVideo() {
        return this.video;
    }

    public int hashCode() {
        int hashCode = this.type.hashCode() * 31;
        String str = this.f9298id;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        EmbedAuthor embedAuthor = this.author;
        int hashCode3 = (hashCode2 + (embedAuthor == null ? 0 : embedAuthor.hashCode())) * 31;
        EmbedProvider embedProvider = this.provider;
        int hashCode4 = (hashCode3 + (embedProvider == null ? 0 : embedProvider.hashCode())) * 31;
        String str2 = this.rawTitle;
        int hashCode5 = (hashCode4 + (str2 == null ? 0 : str2.hashCode())) * 31;
        StructurableText structurableText = this.title;
        int hashCode6 = (hashCode5 + (structurableText == null ? 0 : structurableText.hashCode())) * 31;
        List<EmbedField> list = this.fields;
        int hashCode7 = (hashCode6 + (list == null ? 0 : list.hashCode())) * 31;
        String str3 = this.url;
        int hashCode8 = (hashCode7 + (str3 == null ? 0 : str3.hashCode())) * 31;
        String str4 = this.rawDescription;
        int hashCode9 = (hashCode8 + (str4 == null ? 0 : str4.hashCode())) * 31;
        StructurableText structurableText2 = this.description;
        int hashCode10 = (hashCode9 + (structurableText2 == null ? 0 : structurableText2.hashCode())) * 31;
        EmbedMedia embedMedia = this.image;
        int hashCode11 = (hashCode10 + (embedMedia == null ? 0 : embedMedia.hashCode())) * 31;
        List<EmbedMedia> list2 = this.images;
        int hashCode12 = (hashCode11 + (list2 == null ? 0 : list2.hashCode())) * 31;
        EmbedMedia embedMedia2 = this.video;
        int hashCode13 = (hashCode12 + (embedMedia2 == null ? 0 : embedMedia2.hashCode())) * 31;
        EmbedThumbnail embedThumbnail = this.thumbnail;
        int hashCode14 = (hashCode13 + (embedThumbnail == null ? 0 : embedThumbnail.hashCode())) * 31;
        String str5 = this.numAttachments;
        int hashCode15 = (hashCode14 + (str5 == null ? 0 : str5.hashCode())) * 31;
        String str6 = this.attachmentsSize;
        int hashCode16 = (hashCode15 + (str6 == null ? 0 : str6.hashCode())) * 31;
        String str7 = this.messageSendError;
        int hashCode17 = (hashCode16 + (str7 == null ? 0 : str7.hashCode())) * 31;
        Boolean bool = this.disableBackgroundColor;
        int hashCode18 = (hashCode17 + (bool == null ? 0 : bool.hashCode())) * 31;
        EmbedFooter embedFooter = this.footer;
        int hashCode19 = (hashCode18 + (embedFooter == null ? 0 : embedFooter.hashCode())) * 31;
        String str8 = this.spoiler;
        int hashCode20 = (hashCode19 + (str8 == null ? 0 : str8.hashCode())) * 31;
        String str9 = this.obscure;
        int hashCode21 = (hashCode20 + (str9 == null ? 0 : str9.hashCode())) * 31;
        String str10 = this.obscureAwaitingScan;
        int hashCode22 = (hashCode21 + (str10 == null ? 0 : str10.hashCode())) * 31;
        Boolean bool2 = this.obscureHideControls;
        int hashCode23 = (hashCode22 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        Boolean bool3 = this.obscureIsOpaque;
        int hashCode24 = (hashCode23 + (bool3 == null ? 0 : bool3.hashCode())) * 31;
        Boolean bool4 = this.verifyAge;
        int hashCode25 = (hashCode24 + (bool4 == null ? 0 : bool4.hashCode())) * 31;
        String str11 = this.iconURL;
        int hashCode26 = (hashCode25 + (str11 == null ? 0 : str11.hashCode())) * 31;
        EmbedFailureState embedFailureState = this.failureState;
        int hashCode27 = (hashCode26 + (embedFailureState == null ? 0 : embedFailureState.hashCode())) * 31;
        Integer num = this.providerColor;
        int hashCode28 = (hashCode27 + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.borderLeftColor;
        int hashCode29 = (hashCode28 + (num2 == null ? 0 : num2.hashCode())) * 31;
        Integer num3 = this.headerTextColor;
        int hashCode30 = (((hashCode29 + (num3 == null ? 0 : num3.hashCode())) * 31) + Integer.hashCode(this.bodyTextColor)) * 31;
        Integer num4 = this.backgroundColor;
        return hashCode30 + (num4 != null ? num4.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        EmbedType embedType = this.type;
        String str = this.f9298id;
        EmbedAuthor embedAuthor = this.author;
        EmbedProvider embedProvider = this.provider;
        String str2 = this.rawTitle;
        StructurableText structurableText = this.title;
        List<EmbedField> list = this.fields;
        String str3 = this.url;
        String str4 = this.rawDescription;
        StructurableText structurableText2 = this.description;
        EmbedMedia embedMedia = this.image;
        List<EmbedMedia> list2 = this.images;
        EmbedMedia embedMedia2 = this.video;
        EmbedThumbnail embedThumbnail = this.thumbnail;
        String str5 = this.numAttachments;
        String str6 = this.attachmentsSize;
        String str7 = this.messageSendError;
        Boolean bool = this.disableBackgroundColor;
        EmbedFooter embedFooter = this.footer;
        String str8 = this.spoiler;
        String str9 = this.obscure;
        String str10 = this.obscureAwaitingScan;
        Boolean bool2 = this.obscureHideControls;
        Boolean bool3 = this.obscureIsOpaque;
        Boolean bool4 = this.verifyAge;
        String str11 = this.iconURL;
        EmbedFailureState embedFailureState = this.failureState;
        Integer num = this.providerColor;
        Integer num2 = this.borderLeftColor;
        Integer num3 = this.headerTextColor;
        int i10 = this.bodyTextColor;
        Integer num4 = this.backgroundColor;
        return "Embed(type=" + embedType + ", id=" + str + ", author=" + embedAuthor + ", provider=" + embedProvider + ", rawTitle=" + str2 + ", title=" + structurableText + ", fields=" + list + ", url=" + str3 + ", rawDescription=" + str4 + ", description=" + structurableText2 + ", image=" + embedMedia + ", images=" + list2 + ", video=" + embedMedia2 + ", thumbnail=" + embedThumbnail + ", numAttachments=" + str5 + ", attachmentsSize=" + str6 + ", messageSendError=" + str7 + ", disableBackgroundColor=" + bool + ", footer=" + embedFooter + ", spoiler=" + str8 + ", obscure=" + str9 + ", obscureAwaitingScan=" + str10 + ", obscureHideControls=" + bool2 + ", obscureIsOpaque=" + bool3 + ", verifyAge=" + bool4 + ", iconURL=" + str11 + ", failureState=" + embedFailureState + ", providerColor=" + num + ", borderLeftColor=" + num2 + ", headerTextColor=" + num3 + ", bodyTextColor=" + i10 + ", backgroundColor=" + num4 + ")";
    }

    public Embed(@NotNull EmbedType type, String str, EmbedAuthor embedAuthor, EmbedProvider embedProvider, String str2, StructurableText structurableText, List<EmbedField> list, String str3, String str4, StructurableText structurableText2, EmbedMedia embedMedia, List<EmbedMedia> list2, EmbedMedia embedMedia2, EmbedThumbnail embedThumbnail, String str5, String str6, String str7, Boolean bool, EmbedFooter embedFooter, String str8, String str9, String str10, Boolean bool2, Boolean bool3, Boolean bool4, String str11, EmbedFailureState embedFailureState, Integer num, Integer num2, Integer num3, int i10, Integer num4) {
        String str12 = str8;
        Intrinsics.checkNotNullParameter(type, "type");
        this.type = type;
        this.f9298id = str;
        this.author = embedAuthor;
        this.provider = embedProvider;
        this.rawTitle = str2;
        this.title = structurableText;
        this.fields = list;
        this.url = str3;
        this.rawDescription = str4;
        this.description = structurableText2;
        this.image = embedMedia;
        this.images = list2;
        this.video = embedMedia2;
        this.thumbnail = embedThumbnail;
        this.numAttachments = str5;
        this.attachmentsSize = str6;
        this.messageSendError = str7;
        this.disableBackgroundColor = bool;
        this.footer = embedFooter;
        this.spoiler = str12;
        this.obscure = str9;
        this.obscureAwaitingScan = str10;
        this.obscureHideControls = bool2;
        this.obscureIsOpaque = bool3;
        this.verifyAge = bool4;
        this.iconURL = str11;
        this.failureState = embedFailureState;
        this.providerColor = num;
        this.borderLeftColor = num2;
        this.headerTextColor = num3;
        this.bodyTextColor = i10;
        this.backgroundColor = num4;
        String str13 = null;
        this.spoilerOrNull = (str12 == null || StringsKt.k0(str12)) ? null : str12;
        if (str9 != null && !StringsKt.k0(str9)) {
            str13 = str9;
        }
        this.obscureOrNull = str13;
    }

    public /* synthetic */ Embed(EmbedType embedType, String str, EmbedAuthor embedAuthor, EmbedProvider embedProvider, String str2, StructurableText structurableText, List list, String str3, String str4, StructurableText structurableText2, EmbedMedia embedMedia, List list2, EmbedMedia embedMedia2, EmbedThumbnail embedThumbnail, String str5, String str6, String str7, Boolean bool, EmbedFooter embedFooter, String str8, String str9, String str10, Boolean bool2, Boolean bool3, Boolean bool4, String str11, EmbedFailureState embedFailureState, Integer num, Integer num2, Integer num3, int i10, Integer num4, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(embedType, (i11 & 2) != 0 ? null : str, (i11 & 4) != 0 ? null : embedAuthor, (i11 & 8) != 0 ? null : embedProvider, (i11 & 16) != 0 ? null : str2, (i11 & 32) != 0 ? null : structurableText, (i11 & 64) != 0 ? null : list, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str3, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : structurableText2, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : embedMedia, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : list2, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : embedMedia2, (i11 & 8192) != 0 ? null : embedThumbnail, (i11 & 16384) != 0 ? null : str5, (32768 & i11) != 0 ? null : str6, (65536 & i11) != 0 ? null : str7, (131072 & i11) != 0 ? null : bool, (262144 & i11) != 0 ? null : embedFooter, (524288 & i11) != 0 ? null : str8, (1048576 & i11) != 0 ? null : str9, (2097152 & i11) != 0 ? null : str10, (4194304 & i11) != 0 ? null : bool2, (8388608 & i11) != 0 ? null : bool3, (16777216 & i11) != 0 ? null : bool4, (33554432 & i11) != 0 ? null : str11, (67108864 & i11) != 0 ? null : embedFailureState, (134217728 & i11) != 0 ? null : num, (268435456 & i11) != 0 ? null : num2, (536870912 & i11) != 0 ? null : num3, i10, (i11 & Integer.MIN_VALUE) != 0 ? null : num4);
    }
}
