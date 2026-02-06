package com.discord.chat.bridge.codedlinks;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.codedlinks.InviteType;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.PointerEventHelper;
import ft.m;
import java.util.List;
import java.util.Map;
import jt.f;
import jt.h;
import jt.n2;
import jt.p0;
import jt.u0;
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
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0016\n\u0002\u0010 \n\u0002\u0010$\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b[\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \u009e\u00012\u00020\u00012\u00020\u0002:\u0004\u009d\u0001\u009e\u0001Bç\u0003\u0012\b\b\u0003\u0010\u0003\u001a\u00020\u0004\u0012\b\b\u0003\u0010\u0005\u001a\u00020\u0004\u0012\b\b\u0003\u0010\u0006\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n\u0012\n\b\u0003\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\f\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\r\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u0012\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010\u001b\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0003\u0010\u001c\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\b\u0012\n\b\u0003\u0010 \u001a\u0004\u0018\u00010\u0004\u0012\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\b\u0012\b\b\u0002\u0010\"\u001a\u00020\b\u0012\b\b\u0002\u0010#\u001a\u00020\b\u0012\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\b\u0012\u001c\b\u0002\u0010(\u001a\u0016\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040*\u0018\u00010)\u0012\n\b\u0002\u0010+\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010,\u001a\u0004\u0018\u00010\b\u0012\n\b\u0002\u0010-\u001a\u0004\u0018\u00010\b\u0012\b\b\u0002\u0010.\u001a\u00020\b\u0012\u0010\b\u0002\u0010/\u001a\n\u0012\u0004\u0012\u000200\u0018\u00010)¢\u0006\u0004\b1\u00102B»\u0003\b\u0010\u0012\u0006\u00103\u001a\u00020\u0004\u0012\u0006\u00104\u001a\u00020\u0004\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0006\u001a\u00020\u0004\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\b\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010\b\u0012\b\u0010 \u001a\u0004\u0018\u00010\u0004\u0012\b\u0010!\u001a\u0004\u0018\u00010\b\u0012\b\u0010\"\u001a\u0004\u0018\u00010\b\u0012\b\u0010#\u001a\u0004\u0018\u00010\b\u0012\b\u0010$\u001a\u0004\u0018\u00010\b\u0012\b\u0010%\u001a\u0004\u0018\u00010\b\u0012\b\u0010&\u001a\u0004\u0018\u00010\b\u0012\b\u0010'\u001a\u0004\u0018\u00010\b\u0012\u001a\u0010(\u001a\u0016\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040*\u0018\u00010)\u0012\b\u0010+\u001a\u0004\u0018\u00010\b\u0012\b\u0010,\u001a\u0004\u0018\u00010\b\u0012\b\u0010-\u001a\u0004\u0018\u00010\b\u0012\b\u0010.\u001a\u0004\u0018\u00010\b\u0012\u000e\u0010/\u001a\n\u0012\u0004\u0012\u000200\u0018\u00010)\u0012\b\u00105\u001a\u0004\u0018\u000106¢\u0006\u0004\b1\u00107J\t\u0010g\u001a\u00020\u0004HÆ\u0003J\t\u0010h\u001a\u00020\u0004HÆ\u0003J\t\u0010i\u001a\u00020\u0004HÆ\u0003J\u000b\u0010j\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010k\u001a\u0004\u0018\u00010\nHÆ\u0003J\u0010\u0010l\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u0010\u0010m\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u0010\u0010n\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u000b\u0010o\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010p\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010q\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u0010\u0010r\u001a\u0004\u0018\u00010\u0012HÆ\u0003¢\u0006\u0002\u0010IJ\u0010\u0010s\u001a\u0004\u0018\u00010\u0012HÆ\u0003¢\u0006\u0002\u0010IJ\u0010\u0010t\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u0010\u0010u\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u0010\u0010v\u001a\u0004\u0018\u00010\u0012HÆ\u0003¢\u0006\u0002\u0010IJ\u0010\u0010w\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u000b\u0010x\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010y\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010z\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0010\u0010{\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u0010\u0010|\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u0010\u0010}\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\u000b\u0010~\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000b\u0010\u007f\u001a\u0004\u0018\u00010\bHÆ\u0003J\u0011\u0010\u0080\u0001\u001a\u0004\u0018\u00010\u0004HÆ\u0003¢\u0006\u0002\u0010AJ\f\u0010\u0081\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\n\u0010\u0082\u0001\u001a\u00020\bHÆ\u0003J\n\u0010\u0083\u0001\u001a\u00020\bHÆ\u0003J\f\u0010\u0084\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\f\u0010\u0085\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\f\u0010\u0086\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\f\u0010\u0087\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\u001e\u0010\u0088\u0001\u001a\u0016\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040*\u0018\u00010)HÆ\u0003J\f\u0010\u0089\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\f\u0010\u008a\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\f\u0010\u008b\u0001\u001a\u0004\u0018\u00010\bHÆ\u0003J\n\u0010\u008c\u0001\u001a\u00020\bHÆ\u0003J\u0012\u0010\u008d\u0001\u001a\n\u0012\u0004\u0012\u000200\u0018\u00010)HÆ\u0003Jð\u0003\u0010\u008e\u0001\u001a\u00020\u00002\b\b\u0003\u0010\u0003\u001a\u00020\u00042\b\b\u0003\u0010\u0005\u001a\u00020\u00042\b\b\u0003\u0010\u0006\u001a\u00020\u00042\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n2\n\b\u0003\u0010\u000b\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\f\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\r\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010\u0010\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u00122\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010\u001b\u001a\u0004\u0018\u00010\u00042\n\b\u0003\u0010\u001c\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\b2\n\b\u0003\u0010 \u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\"\u001a\u00020\b2\b\b\u0002\u0010#\u001a\u00020\b2\n\b\u0002\u0010$\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010&\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\b2\u001c\b\u0002\u0010(\u001a\u0016\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040*\u0018\u00010)2\n\b\u0002\u0010+\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010,\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010-\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010.\u001a\u00020\b2\u0010\b\u0002\u0010/\u001a\n\u0012\u0004\u0012\u000200\u0018\u00010)HÆ\u0001¢\u0006\u0003\u0010\u008f\u0001J\u0016\u0010\u0090\u0001\u001a\u00020\u00122\n\u0010\u0091\u0001\u001a\u0005\u0018\u00010\u0092\u0001HÖ\u0003J\n\u0010\u0093\u0001\u001a\u00020\u0004HÖ\u0001J\n\u0010\u0094\u0001\u001a\u00020\bHÖ\u0001J-\u0010\u0095\u0001\u001a\u00030\u0096\u00012\u0007\u0010\u0097\u0001\u001a\u00020\u00002\b\u0010\u0098\u0001\u001a\u00030\u0099\u00012\b\u0010\u009a\u0001\u001a\u00030\u009b\u0001H\u0001¢\u0006\u0003\b\u009c\u0001R\u0014\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b8\u00109R\u0014\u0010\u0005\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b:\u00109R\u0014\u0010\u0006\u001a\u00020\u0004X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b;\u00109R\u0016\u0010\u0007\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b<\u0010=R\u0016\u0010\t\u001a\u0004\u0018\u00010\nX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b>\u0010?R\u0018\u0010\u000b\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\b@\u0010AR\u0018\u0010\f\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bC\u0010AR\u0018\u0010\r\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bD\u0010AR\u0016\u0010\u000e\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bE\u0010=R\u0016\u0010\u000f\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bF\u0010=R\u0018\u0010\u0010\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bG\u0010AR\u0018\u0010\u0011\u001a\u0004\u0018\u00010\u0012X\u0096\u0004¢\u0006\n\n\u0002\u0010J\u001a\u0004\bH\u0010IR\u0018\u0010\u0013\u001a\u0004\u0018\u00010\u0012X\u0096\u0004¢\u0006\n\n\u0002\u0010J\u001a\u0004\bK\u0010IR\u0018\u0010\u0014\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bL\u0010AR\u0018\u0010\u0015\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bM\u0010AR\u0018\u0010\u0016\u001a\u0004\u0018\u00010\u0012X\u0096\u0004¢\u0006\n\n\u0002\u0010J\u001a\u0004\bN\u0010IR\u0018\u0010\u0017\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bO\u0010AR\u0016\u0010\u0018\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bP\u0010=R\u0016\u0010\u0019\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bQ\u0010=R\u0016\u0010\u001a\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bR\u0010=R\u0018\u0010\u001b\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bS\u0010AR\u0018\u0010\u001c\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bT\u0010AR\u0018\u0010\u001d\u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bU\u0010AR\u0016\u0010\u001e\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bV\u0010=R\u0016\u0010\u001f\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bW\u0010=R\u0018\u0010 \u001a\u0004\u0018\u00010\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010B\u001a\u0004\bX\u0010AR\u0016\u0010!\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bY\u0010=R\u0014\u0010\"\u001a\u00020\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bZ\u0010=R\u0014\u0010#\u001a\u00020\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b[\u0010=R\u0016\u0010$\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\\\u0010=R\u0016\u0010%\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b]\u0010=R\u0016\u0010&\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b^\u0010=R\u0016\u0010'\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b_\u0010=R(\u0010(\u001a\u0016\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\u00040*\u0018\u00010)X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b`\u0010aR\u0016\u0010+\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bb\u0010=R\u0016\u0010,\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bc\u0010=R\u0016\u0010-\u001a\u0004\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bd\u0010=R\u0014\u0010.\u001a\u00020\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\be\u0010=R\u001c\u0010/\u001a\n\u0012\u0004\u0012\u000200\u0018\u00010)X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bf\u0010a¨\u0006\u009f\u0001"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;", "Lcom/discord/chat/bridge/codedlinks/CodedLinkEmbed;", "Lcom/discord/chat/bridge/codedlinks/AppMessageEmbed;", ViewProps.BACKGROUND_COLOR, "", ViewProps.BORDER_COLOR, "headerColor", "headerText", "", "type", "Lcom/discord/chat/bridge/codedlinks/InviteType;", "acceptLabelBackgroundColor", "acceptLabelBorderColor", "acceptLabelColor", "acceptLabelText", "bodyText", "bodyTextColor", "canBeAccepted", "", "embedCanBeTapped", "resolvingGradientEnd", "resolvingGradientStart", "splashHasRadialGradient", "splashOpacity", "splashUrl", "inviteSplash", "subtitle", "subtitleColor", "thumbnailBackgroundColor", "thumbnailCornerRadius", "thumbnailText", "thumbnailUrl", "titleColor", "titleText", "appId", "messageId", "title", "header", "info", "tagline", "gradientColors", "", "", "staticBannerSrc", "iconSrc", "embedUrl", "bannerRatio", "actions", "Lcom/discord/chat/bridge/codedlinks/AppMessageActionImpl;", "<init>", "(IIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)V", "seen0", "seen1", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIIIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBackgroundColor", "()I", "getBorderColor", "getHeaderColor", "getHeaderText", "()Ljava/lang/String;", "getType", "()Lcom/discord/chat/bridge/codedlinks/InviteType;", "getAcceptLabelBackgroundColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getAcceptLabelBorderColor", "getAcceptLabelColor", "getAcceptLabelText", "getBodyText", "getBodyTextColor", "getCanBeAccepted", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getEmbedCanBeTapped", "getResolvingGradientEnd", "getResolvingGradientStart", "getSplashHasRadialGradient", "getSplashOpacity", "getSplashUrl", "getInviteSplash", "getSubtitle", "getSubtitleColor", "getThumbnailBackgroundColor", "getThumbnailCornerRadius", "getThumbnailText", "getThumbnailUrl", "getTitleColor", "getTitleText", "getAppId", "getMessageId", "getTitle", "getHeader", "getInfo", "getTagline", "getGradientColors", "()Ljava/util/List;", "getStaticBannerSrc", "getIconSrc", "getEmbedUrl", "getBannerRatio", "getActions", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "component23", "component24", "component25", "component26", "component27", "component28", "component29", "component30", "component31", "component32", "component33", "component34", "component35", "component36", "component37", "component38", "component39", "copy", "(IIILjava/lang/String;Lcom/discord/chat/bridge/codedlinks/InviteType;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AppMessageEmbedImpl extends CodedLinkEmbed implements AppMessageEmbed {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Integer acceptLabelBackgroundColor;
    private final Integer acceptLabelBorderColor;
    private final Integer acceptLabelColor;
    private final String acceptLabelText;
    private final List<AppMessageActionImpl> actions;
    @NotNull
    private final String appId;
    private final int backgroundColor;
    @NotNull
    private final String bannerRatio;
    private final String bodyText;
    private final Integer bodyTextColor;
    private final int borderColor;
    private final Boolean canBeAccepted;
    private final Boolean embedCanBeTapped;
    private final String embedUrl;
    private final List<Map<String, Integer>> gradientColors;
    private final String header;
    private final int headerColor;
    private final String headerText;
    private final String iconSrc;
    private final String info;
    private final String inviteSplash;
    @NotNull
    private final String messageId;
    private final Integer resolvingGradientEnd;
    private final Integer resolvingGradientStart;
    private final Boolean splashHasRadialGradient;
    private final Integer splashOpacity;
    private final String splashUrl;
    private final String staticBannerSrc;
    private final String subtitle;
    private final Integer subtitleColor;
    private final String tagline;
    private final Integer thumbnailBackgroundColor;
    private final Integer thumbnailCornerRadius;
    private final String thumbnailText;
    private final String thumbnailUrl;
    private final String title;
    private final Integer titleColor;
    private final String titleText;
    private final InviteType type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/codedlinks/AppMessageEmbedImpl;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return AppMessageEmbedImpl$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        o oVar = o.f48044e;
        $childSerializers = new Lazy[]{null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, l.b(oVar, new Function0() { // from class: com.discord.chat.bridge.codedlinks.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = AppMessageEmbedImpl._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), null, null, null, null, l.b(oVar, new Function0() { // from class: com.discord.chat.bridge.codedlinks.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = AppMessageEmbedImpl._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        })};
    }

    public AppMessageEmbedImpl() {
        this(0, 0, 0, (String) null, (InviteType) null, (Integer) null, (Integer) null, (Integer) null, (String) null, (String) null, (Integer) null, (Boolean) null, (Boolean) null, (Integer) null, (Integer) null, (Boolean) null, (Integer) null, (String) null, (String) null, (String) null, (Integer) null, (Integer) null, (Integer) null, (String) null, (String) null, (Integer) null, (String) null, (String) null, (String) null, (String) null, (String) null, (String) null, (String) null, (List) null, (String) null, (String) null, (String) null, (String) null, (List) null, -1, 127, (DefaultConstructorMarker) null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(new u0(n2.f31041a, p0.f31057a));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        return new f(AppMessageActionImpl$$serializer.INSTANCE);
    }

    public static /* synthetic */ AppMessageEmbedImpl copy$default(AppMessageEmbedImpl appMessageEmbedImpl, int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, String str10, String str11, String str12, String str13, String str14, String str15, List list, String str16, String str17, String str18, String str19, List list2, int i13, int i14, Object obj) {
        List<AppMessageActionImpl> list3;
        String str20;
        Integer num12;
        String str21;
        String str22;
        Integer num13;
        String str23;
        String str24;
        String str25;
        String str26;
        String str27;
        String str28;
        String str29;
        List list4;
        String str30;
        String str31;
        String str32;
        Integer num14;
        Integer num15;
        String str33;
        String str34;
        Integer num16;
        Boolean bool4;
        Boolean bool5;
        Integer num17;
        Boolean bool6;
        Integer num18;
        String str35;
        String str36;
        String str37;
        Integer num19;
        Integer num20;
        int i15;
        int i16;
        String str38;
        InviteType inviteType2;
        Integer num21;
        Integer num22;
        int i17 = (i13 & 1) != 0 ? appMessageEmbedImpl.backgroundColor : i10;
        int i18 = (i13 & 2) != 0 ? appMessageEmbedImpl.borderColor : i11;
        int i19 = (i13 & 4) != 0 ? appMessageEmbedImpl.headerColor : i12;
        String str39 = (i13 & 8) != 0 ? appMessageEmbedImpl.headerText : str;
        InviteType inviteType3 = (i13 & 16) != 0 ? appMessageEmbedImpl.type : inviteType;
        Integer num23 = (i13 & 32) != 0 ? appMessageEmbedImpl.acceptLabelBackgroundColor : num;
        Integer num24 = (i13 & 64) != 0 ? appMessageEmbedImpl.acceptLabelBorderColor : num2;
        Integer num25 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? appMessageEmbedImpl.acceptLabelColor : num3;
        String str40 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? appMessageEmbedImpl.acceptLabelText : str2;
        String str41 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? appMessageEmbedImpl.bodyText : str3;
        Integer num26 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? appMessageEmbedImpl.bodyTextColor : num4;
        Boolean bool7 = (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? appMessageEmbedImpl.canBeAccepted : bool;
        Boolean bool8 = (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? appMessageEmbedImpl.embedCanBeTapped : bool2;
        Integer num27 = (i13 & 8192) != 0 ? appMessageEmbedImpl.resolvingGradientEnd : num5;
        int i20 = i17;
        Integer num28 = (i13 & 16384) != 0 ? appMessageEmbedImpl.resolvingGradientStart : num6;
        Boolean bool9 = (i13 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? appMessageEmbedImpl.splashHasRadialGradient : bool3;
        Integer num29 = (i13 & 65536) != 0 ? appMessageEmbedImpl.splashOpacity : num7;
        String str42 = (i13 & 131072) != 0 ? appMessageEmbedImpl.splashUrl : str4;
        String str43 = (i13 & 262144) != 0 ? appMessageEmbedImpl.inviteSplash : str5;
        String str44 = (i13 & 524288) != 0 ? appMessageEmbedImpl.subtitle : str6;
        Integer num30 = (i13 & 1048576) != 0 ? appMessageEmbedImpl.subtitleColor : num8;
        Integer num31 = (i13 & 2097152) != 0 ? appMessageEmbedImpl.thumbnailBackgroundColor : num9;
        Integer num32 = (i13 & 4194304) != 0 ? appMessageEmbedImpl.thumbnailCornerRadius : num10;
        String str45 = (i13 & 8388608) != 0 ? appMessageEmbedImpl.thumbnailText : str7;
        String str46 = (i13 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? appMessageEmbedImpl.thumbnailUrl : str8;
        Integer num33 = (i13 & 33554432) != 0 ? appMessageEmbedImpl.titleColor : num11;
        String str47 = (i13 & 67108864) != 0 ? appMessageEmbedImpl.titleText : str9;
        String str48 = (i13 & 134217728) != 0 ? appMessageEmbedImpl.appId : str10;
        String str49 = (i13 & 268435456) != 0 ? appMessageEmbedImpl.messageId : str11;
        String str50 = (i13 & 536870912) != 0 ? appMessageEmbedImpl.title : str12;
        String str51 = (i13 & 1073741824) != 0 ? appMessageEmbedImpl.header : str13;
        String str52 = (i13 & Integer.MIN_VALUE) != 0 ? appMessageEmbedImpl.info : str14;
        String str53 = (i14 & 1) != 0 ? appMessageEmbedImpl.tagline : str15;
        List list5 = (i14 & 2) != 0 ? appMessageEmbedImpl.gradientColors : list;
        String str54 = (i14 & 4) != 0 ? appMessageEmbedImpl.staticBannerSrc : str16;
        String str55 = (i14 & 8) != 0 ? appMessageEmbedImpl.iconSrc : str17;
        String str56 = (i14 & 16) != 0 ? appMessageEmbedImpl.embedUrl : str18;
        String str57 = (i14 & 32) != 0 ? appMessageEmbedImpl.bannerRatio : str19;
        if ((i14 & 64) != 0) {
            str20 = str57;
            list3 = appMessageEmbedImpl.actions;
            str21 = str45;
            str22 = str46;
            num13 = num33;
            str23 = str47;
            str24 = str48;
            str25 = str49;
            str26 = str50;
            str27 = str51;
            str28 = str52;
            str29 = str53;
            list4 = list5;
            str30 = str54;
            str31 = str55;
            str32 = str56;
            num14 = num28;
            str33 = str40;
            str34 = str41;
            num16 = num26;
            bool4 = bool7;
            bool5 = bool8;
            num17 = num27;
            bool6 = bool9;
            num18 = num29;
            str35 = str42;
            str36 = str43;
            str37 = str44;
            num19 = num30;
            num20 = num31;
            num12 = num32;
            i15 = i18;
            i16 = i19;
            str38 = str39;
            inviteType2 = inviteType3;
            num21 = num23;
            num22 = num24;
            num15 = num25;
        } else {
            list3 = list2;
            str20 = str57;
            num12 = num32;
            str21 = str45;
            str22 = str46;
            num13 = num33;
            str23 = str47;
            str24 = str48;
            str25 = str49;
            str26 = str50;
            str27 = str51;
            str28 = str52;
            str29 = str53;
            list4 = list5;
            str30 = str54;
            str31 = str55;
            str32 = str56;
            num14 = num28;
            num15 = num25;
            str33 = str40;
            str34 = str41;
            num16 = num26;
            bool4 = bool7;
            bool5 = bool8;
            num17 = num27;
            bool6 = bool9;
            num18 = num29;
            str35 = str42;
            str36 = str43;
            str37 = str44;
            num19 = num30;
            num20 = num31;
            i15 = i18;
            i16 = i19;
            str38 = str39;
            inviteType2 = inviteType3;
            num21 = num23;
            num22 = num24;
        }
        return appMessageEmbedImpl.copy(i20, i15, i16, str38, inviteType2, num21, num22, num15, str33, str34, num16, bool4, bool5, num17, num14, bool6, num18, str35, str36, str37, num19, num20, num12, str21, str22, num13, str23, str24, str25, str26, str27, str28, str29, list4, str30, str31, str32, str20, list3);
    }

    public static final /* synthetic */ void write$Self$chat_release(AppMessageEmbedImpl appMessageEmbedImpl, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.A(serialDescriptor, 0) || appMessageEmbedImpl.getBackgroundColor() != 0) {
            compositeEncoder.x(serialDescriptor, 0, appMessageEmbedImpl.getBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 1) || appMessageEmbedImpl.getBorderColor() != 0) {
            compositeEncoder.x(serialDescriptor, 1, appMessageEmbedImpl.getBorderColor());
        }
        if (compositeEncoder.A(serialDescriptor, 2) || appMessageEmbedImpl.getHeaderColor() != 0) {
            compositeEncoder.x(serialDescriptor, 2, appMessageEmbedImpl.getHeaderColor());
        }
        if (compositeEncoder.A(serialDescriptor, 3) || appMessageEmbedImpl.getHeaderText() != null) {
            compositeEncoder.l(serialDescriptor, 3, n2.f31041a, appMessageEmbedImpl.getHeaderText());
        }
        if (compositeEncoder.A(serialDescriptor, 4) || appMessageEmbedImpl.getType() != null) {
            compositeEncoder.l(serialDescriptor, 4, InviteType.Serializer.INSTANCE, appMessageEmbedImpl.getType());
        }
        if (compositeEncoder.A(serialDescriptor, 5) || appMessageEmbedImpl.getAcceptLabelBackgroundColor() != null) {
            compositeEncoder.l(serialDescriptor, 5, p0.f31057a, appMessageEmbedImpl.getAcceptLabelBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 6) || appMessageEmbedImpl.getAcceptLabelBorderColor() != null) {
            compositeEncoder.l(serialDescriptor, 6, p0.f31057a, appMessageEmbedImpl.getAcceptLabelBorderColor());
        }
        if (compositeEncoder.A(serialDescriptor, 7) || appMessageEmbedImpl.getAcceptLabelColor() != null) {
            compositeEncoder.l(serialDescriptor, 7, p0.f31057a, appMessageEmbedImpl.getAcceptLabelColor());
        }
        if (compositeEncoder.A(serialDescriptor, 8) || appMessageEmbedImpl.getAcceptLabelText() != null) {
            compositeEncoder.l(serialDescriptor, 8, n2.f31041a, appMessageEmbedImpl.getAcceptLabelText());
        }
        if (compositeEncoder.A(serialDescriptor, 9) || appMessageEmbedImpl.getBodyText() != null) {
            compositeEncoder.l(serialDescriptor, 9, n2.f31041a, appMessageEmbedImpl.getBodyText());
        }
        if (compositeEncoder.A(serialDescriptor, 10) || appMessageEmbedImpl.getBodyTextColor() != null) {
            compositeEncoder.l(serialDescriptor, 10, p0.f31057a, appMessageEmbedImpl.getBodyTextColor());
        }
        if (compositeEncoder.A(serialDescriptor, 11) || appMessageEmbedImpl.getCanBeAccepted() != null) {
            compositeEncoder.l(serialDescriptor, 11, h.f31005a, appMessageEmbedImpl.getCanBeAccepted());
        }
        if (compositeEncoder.A(serialDescriptor, 12) || appMessageEmbedImpl.getEmbedCanBeTapped() != null) {
            compositeEncoder.l(serialDescriptor, 12, h.f31005a, appMessageEmbedImpl.getEmbedCanBeTapped());
        }
        if (compositeEncoder.A(serialDescriptor, 13) || appMessageEmbedImpl.getResolvingGradientEnd() != null) {
            compositeEncoder.l(serialDescriptor, 13, p0.f31057a, appMessageEmbedImpl.getResolvingGradientEnd());
        }
        if (compositeEncoder.A(serialDescriptor, 14) || appMessageEmbedImpl.getResolvingGradientStart() != null) {
            compositeEncoder.l(serialDescriptor, 14, p0.f31057a, appMessageEmbedImpl.getResolvingGradientStart());
        }
        if (compositeEncoder.A(serialDescriptor, 15) || appMessageEmbedImpl.getSplashHasRadialGradient() != null) {
            compositeEncoder.l(serialDescriptor, 15, h.f31005a, appMessageEmbedImpl.getSplashHasRadialGradient());
        }
        if (compositeEncoder.A(serialDescriptor, 16) || appMessageEmbedImpl.getSplashOpacity() != null) {
            compositeEncoder.l(serialDescriptor, 16, p0.f31057a, appMessageEmbedImpl.getSplashOpacity());
        }
        if (compositeEncoder.A(serialDescriptor, 17) || appMessageEmbedImpl.getSplashUrl() != null) {
            compositeEncoder.l(serialDescriptor, 17, n2.f31041a, appMessageEmbedImpl.getSplashUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 18) || appMessageEmbedImpl.getInviteSplash() != null) {
            compositeEncoder.l(serialDescriptor, 18, n2.f31041a, appMessageEmbedImpl.getInviteSplash());
        }
        if (compositeEncoder.A(serialDescriptor, 19) || appMessageEmbedImpl.getSubtitle() != null) {
            compositeEncoder.l(serialDescriptor, 19, n2.f31041a, appMessageEmbedImpl.getSubtitle());
        }
        if (compositeEncoder.A(serialDescriptor, 20) || appMessageEmbedImpl.getSubtitleColor() != null) {
            compositeEncoder.l(serialDescriptor, 20, p0.f31057a, appMessageEmbedImpl.getSubtitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 21) || appMessageEmbedImpl.getThumbnailBackgroundColor() != null) {
            compositeEncoder.l(serialDescriptor, 21, p0.f31057a, appMessageEmbedImpl.getThumbnailBackgroundColor());
        }
        if (compositeEncoder.A(serialDescriptor, 22) || appMessageEmbedImpl.getThumbnailCornerRadius() != null) {
            compositeEncoder.l(serialDescriptor, 22, p0.f31057a, appMessageEmbedImpl.getThumbnailCornerRadius());
        }
        if (compositeEncoder.A(serialDescriptor, 23) || appMessageEmbedImpl.getThumbnailText() != null) {
            compositeEncoder.l(serialDescriptor, 23, n2.f31041a, appMessageEmbedImpl.getThumbnailText());
        }
        if (compositeEncoder.A(serialDescriptor, 24) || appMessageEmbedImpl.getThumbnailUrl() != null) {
            compositeEncoder.l(serialDescriptor, 24, n2.f31041a, appMessageEmbedImpl.getThumbnailUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 25) || appMessageEmbedImpl.getTitleColor() != null) {
            compositeEncoder.l(serialDescriptor, 25, p0.f31057a, appMessageEmbedImpl.getTitleColor());
        }
        if (compositeEncoder.A(serialDescriptor, 26) || appMessageEmbedImpl.getTitleText() != null) {
            compositeEncoder.l(serialDescriptor, 26, n2.f31041a, appMessageEmbedImpl.getTitleText());
        }
        if (compositeEncoder.A(serialDescriptor, 27) || !Intrinsics.areEqual(appMessageEmbedImpl.getAppId(), "")) {
            compositeEncoder.z(serialDescriptor, 27, appMessageEmbedImpl.getAppId());
        }
        if (compositeEncoder.A(serialDescriptor, 28) || !Intrinsics.areEqual(appMessageEmbedImpl.getMessageId(), "")) {
            compositeEncoder.z(serialDescriptor, 28, appMessageEmbedImpl.getMessageId());
        }
        if (compositeEncoder.A(serialDescriptor, 29) || appMessageEmbedImpl.getTitle() != null) {
            compositeEncoder.l(serialDescriptor, 29, n2.f31041a, appMessageEmbedImpl.getTitle());
        }
        if (compositeEncoder.A(serialDescriptor, 30) || appMessageEmbedImpl.getHeader() != null) {
            compositeEncoder.l(serialDescriptor, 30, n2.f31041a, appMessageEmbedImpl.getHeader());
        }
        if (compositeEncoder.A(serialDescriptor, 31) || appMessageEmbedImpl.getInfo() != null) {
            compositeEncoder.l(serialDescriptor, 31, n2.f31041a, appMessageEmbedImpl.getInfo());
        }
        if (compositeEncoder.A(serialDescriptor, 32) || appMessageEmbedImpl.getTagline() != null) {
            compositeEncoder.l(serialDescriptor, 32, n2.f31041a, appMessageEmbedImpl.getTagline());
        }
        if (compositeEncoder.A(serialDescriptor, 33) || appMessageEmbedImpl.getGradientColors() != null) {
            compositeEncoder.l(serialDescriptor, 33, (ft.o) lazyArr[33].getValue(), appMessageEmbedImpl.getGradientColors());
        }
        if (compositeEncoder.A(serialDescriptor, 34) || appMessageEmbedImpl.getStaticBannerSrc() != null) {
            compositeEncoder.l(serialDescriptor, 34, n2.f31041a, appMessageEmbedImpl.getStaticBannerSrc());
        }
        if (compositeEncoder.A(serialDescriptor, 35) || appMessageEmbedImpl.getIconSrc() != null) {
            compositeEncoder.l(serialDescriptor, 35, n2.f31041a, appMessageEmbedImpl.getIconSrc());
        }
        if (compositeEncoder.A(serialDescriptor, 36) || appMessageEmbedImpl.getEmbedUrl() != null) {
            compositeEncoder.l(serialDescriptor, 36, n2.f31041a, appMessageEmbedImpl.getEmbedUrl());
        }
        if (compositeEncoder.A(serialDescriptor, 37) || !Intrinsics.areEqual(appMessageEmbedImpl.getBannerRatio(), "")) {
            compositeEncoder.z(serialDescriptor, 37, appMessageEmbedImpl.getBannerRatio());
        }
        if (!compositeEncoder.A(serialDescriptor, 38) && appMessageEmbedImpl.getActions() == null) {
            return;
        }
        compositeEncoder.l(serialDescriptor, 38, (ft.o) lazyArr[38].getValue(), appMessageEmbedImpl.getActions());
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
    public final String component28() {
        return this.appId;
    }

    @NotNull
    public final String component29() {
        return this.messageId;
    }

    public final int component3() {
        return this.headerColor;
    }

    public final String component30() {
        return this.title;
    }

    public final String component31() {
        return this.header;
    }

    public final String component32() {
        return this.info;
    }

    public final String component33() {
        return this.tagline;
    }

    public final List<Map<String, Integer>> component34() {
        return this.gradientColors;
    }

    public final String component35() {
        return this.staticBannerSrc;
    }

    public final String component36() {
        return this.iconSrc;
    }

    public final String component37() {
        return this.embedUrl;
    }

    @NotNull
    public final String component38() {
        return this.bannerRatio;
    }

    public final List<AppMessageActionImpl> component39() {
        return this.actions;
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
    public final AppMessageEmbedImpl copy(int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, @NotNull String appId, @NotNull String messageId, String str10, String str11, String str12, String str13, List<? extends Map<String, Integer>> list, String str14, String str15, String str16, @NotNull String bannerRatio, List<AppMessageActionImpl> list2) {
        Intrinsics.checkNotNullParameter(appId, "appId");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(bannerRatio, "bannerRatio");
        return new AppMessageEmbedImpl(i10, i11, i12, str, inviteType, num, num2, num3, str2, str3, num4, bool, bool2, num5, num6, bool3, num7, str4, str5, str6, num8, num9, num10, str7, str8, num11, str9, appId, messageId, str10, str11, str12, str13, list, str14, str15, str16, bannerRatio, list2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AppMessageEmbedImpl) {
            AppMessageEmbedImpl appMessageEmbedImpl = (AppMessageEmbedImpl) obj;
            return this.backgroundColor == appMessageEmbedImpl.backgroundColor && this.borderColor == appMessageEmbedImpl.borderColor && this.headerColor == appMessageEmbedImpl.headerColor && Intrinsics.areEqual(this.headerText, appMessageEmbedImpl.headerText) && this.type == appMessageEmbedImpl.type && Intrinsics.areEqual(this.acceptLabelBackgroundColor, appMessageEmbedImpl.acceptLabelBackgroundColor) && Intrinsics.areEqual(this.acceptLabelBorderColor, appMessageEmbedImpl.acceptLabelBorderColor) && Intrinsics.areEqual(this.acceptLabelColor, appMessageEmbedImpl.acceptLabelColor) && Intrinsics.areEqual(this.acceptLabelText, appMessageEmbedImpl.acceptLabelText) && Intrinsics.areEqual(this.bodyText, appMessageEmbedImpl.bodyText) && Intrinsics.areEqual(this.bodyTextColor, appMessageEmbedImpl.bodyTextColor) && Intrinsics.areEqual(this.canBeAccepted, appMessageEmbedImpl.canBeAccepted) && Intrinsics.areEqual(this.embedCanBeTapped, appMessageEmbedImpl.embedCanBeTapped) && Intrinsics.areEqual(this.resolvingGradientEnd, appMessageEmbedImpl.resolvingGradientEnd) && Intrinsics.areEqual(this.resolvingGradientStart, appMessageEmbedImpl.resolvingGradientStart) && Intrinsics.areEqual(this.splashHasRadialGradient, appMessageEmbedImpl.splashHasRadialGradient) && Intrinsics.areEqual(this.splashOpacity, appMessageEmbedImpl.splashOpacity) && Intrinsics.areEqual(this.splashUrl, appMessageEmbedImpl.splashUrl) && Intrinsics.areEqual(this.inviteSplash, appMessageEmbedImpl.inviteSplash) && Intrinsics.areEqual(this.subtitle, appMessageEmbedImpl.subtitle) && Intrinsics.areEqual(this.subtitleColor, appMessageEmbedImpl.subtitleColor) && Intrinsics.areEqual(this.thumbnailBackgroundColor, appMessageEmbedImpl.thumbnailBackgroundColor) && Intrinsics.areEqual(this.thumbnailCornerRadius, appMessageEmbedImpl.thumbnailCornerRadius) && Intrinsics.areEqual(this.thumbnailText, appMessageEmbedImpl.thumbnailText) && Intrinsics.areEqual(this.thumbnailUrl, appMessageEmbedImpl.thumbnailUrl) && Intrinsics.areEqual(this.titleColor, appMessageEmbedImpl.titleColor) && Intrinsics.areEqual(this.titleText, appMessageEmbedImpl.titleText) && Intrinsics.areEqual(this.appId, appMessageEmbedImpl.appId) && Intrinsics.areEqual(this.messageId, appMessageEmbedImpl.messageId) && Intrinsics.areEqual(this.title, appMessageEmbedImpl.title) && Intrinsics.areEqual(this.header, appMessageEmbedImpl.header) && Intrinsics.areEqual(this.info, appMessageEmbedImpl.info) && Intrinsics.areEqual(this.tagline, appMessageEmbedImpl.tagline) && Intrinsics.areEqual(this.gradientColors, appMessageEmbedImpl.gradientColors) && Intrinsics.areEqual(this.staticBannerSrc, appMessageEmbedImpl.staticBannerSrc) && Intrinsics.areEqual(this.iconSrc, appMessageEmbedImpl.iconSrc) && Intrinsics.areEqual(this.embedUrl, appMessageEmbedImpl.embedUrl) && Intrinsics.areEqual(this.bannerRatio, appMessageEmbedImpl.bannerRatio) && Intrinsics.areEqual(this.actions, appMessageEmbedImpl.actions);
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

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    public List<AppMessageActionImpl> getActions() {
        return this.actions;
    }

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    @NotNull
    public String getAppId() {
        return this.appId;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public int getBackgroundColor() {
        return this.backgroundColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    @NotNull
    public String getBannerRatio() {
        return this.bannerRatio;
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

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    public String getEmbedUrl() {
        return this.embedUrl;
    }

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    public List<Map<String, Integer>> getGradientColors() {
        return this.gradientColors;
    }

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    public String getHeader() {
        return this.header;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public int getHeaderColor() {
        return this.headerColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getHeaderText() {
        return this.headerText;
    }

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    public String getIconSrc() {
        return this.iconSrc;
    }

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    public String getInfo() {
        return this.info;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getInviteSplash() {
        return this.inviteSplash;
    }

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    @NotNull
    public String getMessageId() {
        return this.messageId;
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

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    public String getStaticBannerSrc() {
        return this.staticBannerSrc;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public String getSubtitle() {
        return this.subtitle;
    }

    @Override // com.discord.chat.bridge.codedlinks.CodedLinkEmbed
    public Integer getSubtitleColor() {
        return this.subtitleColor;
    }

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    public String getTagline() {
        return this.tagline;
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

    @Override // com.discord.chat.bridge.codedlinks.AppMessageEmbed
    public String getTitle() {
        return this.title;
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
        int hashCode25 = (((((hashCode24 + (str9 == null ? 0 : str9.hashCode())) * 31) + this.appId.hashCode()) * 31) + this.messageId.hashCode()) * 31;
        String str10 = this.title;
        int hashCode26 = (hashCode25 + (str10 == null ? 0 : str10.hashCode())) * 31;
        String str11 = this.header;
        int hashCode27 = (hashCode26 + (str11 == null ? 0 : str11.hashCode())) * 31;
        String str12 = this.info;
        int hashCode28 = (hashCode27 + (str12 == null ? 0 : str12.hashCode())) * 31;
        String str13 = this.tagline;
        int hashCode29 = (hashCode28 + (str13 == null ? 0 : str13.hashCode())) * 31;
        List<Map<String, Integer>> list = this.gradientColors;
        int hashCode30 = (hashCode29 + (list == null ? 0 : list.hashCode())) * 31;
        String str14 = this.staticBannerSrc;
        int hashCode31 = (hashCode30 + (str14 == null ? 0 : str14.hashCode())) * 31;
        String str15 = this.iconSrc;
        int hashCode32 = (hashCode31 + (str15 == null ? 0 : str15.hashCode())) * 31;
        String str16 = this.embedUrl;
        int hashCode33 = (((hashCode32 + (str16 == null ? 0 : str16.hashCode())) * 31) + this.bannerRatio.hashCode()) * 31;
        List<AppMessageActionImpl> list2 = this.actions;
        return hashCode33 + (list2 != null ? list2.hashCode() : 0);
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
        String str10 = this.appId;
        String str11 = this.messageId;
        String str12 = this.title;
        String str13 = this.header;
        String str14 = this.info;
        String str15 = this.tagline;
        List<Map<String, Integer>> list = this.gradientColors;
        String str16 = this.staticBannerSrc;
        String str17 = this.iconSrc;
        String str18 = this.embedUrl;
        String str19 = this.bannerRatio;
        List<AppMessageActionImpl> list2 = this.actions;
        return "AppMessageEmbedImpl(backgroundColor=" + i10 + ", borderColor=" + i11 + ", headerColor=" + i12 + ", headerText=" + str + ", type=" + inviteType + ", acceptLabelBackgroundColor=" + num + ", acceptLabelBorderColor=" + num2 + ", acceptLabelColor=" + num3 + ", acceptLabelText=" + str2 + ", bodyText=" + str3 + ", bodyTextColor=" + num4 + ", canBeAccepted=" + bool + ", embedCanBeTapped=" + bool2 + ", resolvingGradientEnd=" + num5 + ", resolvingGradientStart=" + num6 + ", splashHasRadialGradient=" + bool3 + ", splashOpacity=" + num7 + ", splashUrl=" + str4 + ", inviteSplash=" + str5 + ", subtitle=" + str6 + ", subtitleColor=" + num8 + ", thumbnailBackgroundColor=" + num9 + ", thumbnailCornerRadius=" + num10 + ", thumbnailText=" + str7 + ", thumbnailUrl=" + str8 + ", titleColor=" + num11 + ", titleText=" + str9 + ", appId=" + str10 + ", messageId=" + str11 + ", title=" + str12 + ", header=" + str13 + ", info=" + str14 + ", tagline=" + str15 + ", gradientColors=" + list + ", staticBannerSrc=" + str16 + ", iconSrc=" + str17 + ", embedUrl=" + str18 + ", bannerRatio=" + str19 + ", actions=" + list2 + ")";
    }

    public /* synthetic */ AppMessageEmbedImpl(int i10, int i11, int i12, int i13, int i14, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, String str10, String str11, String str12, String str13, String str14, String str15, List list, String str16, String str17, String str18, String str19, List list2, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if ((i10 & 1) == 0) {
            this.backgroundColor = 0;
        } else {
            this.backgroundColor = i12;
        }
        if ((i10 & 2) == 0) {
            this.borderColor = 0;
        } else {
            this.borderColor = i13;
        }
        if ((i10 & 4) == 0) {
            this.headerColor = 0;
        } else {
            this.headerColor = i14;
        }
        if ((i10 & 8) == 0) {
            this.headerText = null;
        } else {
            this.headerText = str;
        }
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
        if ((134217728 & i10) == 0) {
            this.appId = "";
        } else {
            this.appId = str10;
        }
        if ((268435456 & i10) == 0) {
            this.messageId = "";
        } else {
            this.messageId = str11;
        }
        if ((536870912 & i10) == 0) {
            this.title = null;
        } else {
            this.title = str12;
        }
        if ((1073741824 & i10) == 0) {
            this.header = null;
        } else {
            this.header = str13;
        }
        if ((i10 & Integer.MIN_VALUE) == 0) {
            this.info = null;
        } else {
            this.info = str14;
        }
        if ((i11 & 1) == 0) {
            this.tagline = null;
        } else {
            this.tagline = str15;
        }
        if ((i11 & 2) == 0) {
            this.gradientColors = null;
        } else {
            this.gradientColors = list;
        }
        if ((i11 & 4) == 0) {
            this.staticBannerSrc = null;
        } else {
            this.staticBannerSrc = str16;
        }
        if ((i11 & 8) == 0) {
            this.iconSrc = null;
        } else {
            this.iconSrc = str17;
        }
        if ((i11 & 16) == 0) {
            this.embedUrl = null;
        } else {
            this.embedUrl = str18;
        }
        if ((i11 & 32) == 0) {
            this.bannerRatio = "";
        } else {
            this.bannerRatio = str19;
        }
        if ((i11 & 64) == 0) {
            this.actions = null;
        } else {
            this.actions = list2;
        }
    }

    public /* synthetic */ AppMessageEmbedImpl(int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, String str10, String str11, String str12, String str13, String str14, String str15, List list, String str16, String str17, String str18, String str19, List list2, int i13, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this((i13 & 1) != 0 ? 0 : i10, (i13 & 2) != 0 ? 0 : i11, (i13 & 4) == 0 ? i12 : 0, (i13 & 8) != 0 ? null : str, (i13 & 16) != 0 ? null : inviteType, (i13 & 32) != 0 ? null : num, (i13 & 64) != 0 ? null : num2, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : num3, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str2, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str3, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : num4, (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : bool, (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : bool2, (i13 & 8192) != 0 ? null : num5, (i13 & 16384) != 0 ? null : num6, (i13 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? null : bool3, (i13 & 65536) != 0 ? null : num7, (i13 & 131072) != 0 ? null : str4, (i13 & 262144) != 0 ? null : str5, (i13 & 524288) != 0 ? null : str6, (i13 & 1048576) != 0 ? null : num8, (i13 & 2097152) != 0 ? null : num9, (i13 & 4194304) != 0 ? null : num10, (i13 & 8388608) != 0 ? null : str7, (i13 & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 0 ? null : str8, (i13 & 33554432) != 0 ? null : num11, (i13 & 67108864) != 0 ? null : str9, (i13 & 134217728) != 0 ? "" : str10, (i13 & 268435456) != 0 ? "" : str11, (i13 & 536870912) != 0 ? null : str12, (i13 & 1073741824) != 0 ? null : str13, (i13 & Integer.MIN_VALUE) != 0 ? null : str14, (i14 & 1) != 0 ? null : str15, (i14 & 2) != 0 ? null : list, (i14 & 4) != 0 ? null : str16, (i14 & 8) != 0 ? null : str17, (i14 & 16) != 0 ? null : str18, (i14 & 32) == 0 ? str19 : "", (i14 & 64) != 0 ? null : list2);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public AppMessageEmbedImpl(int i10, int i11, int i12, String str, InviteType inviteType, Integer num, Integer num2, Integer num3, String str2, String str3, Integer num4, Boolean bool, Boolean bool2, Integer num5, Integer num6, Boolean bool3, Integer num7, String str4, String str5, String str6, Integer num8, Integer num9, Integer num10, String str7, String str8, Integer num11, String str9, @NotNull String appId, @NotNull String messageId, String str10, String str11, String str12, String str13, List<? extends Map<String, Integer>> list, String str14, String str15, String str16, @NotNull String bannerRatio, List<AppMessageActionImpl> list2) {
        super(null);
        Intrinsics.checkNotNullParameter(appId, "appId");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(bannerRatio, "bannerRatio");
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
        this.appId = appId;
        this.messageId = messageId;
        this.title = str10;
        this.header = str11;
        this.info = str12;
        this.tagline = str13;
        this.gradientColors = list;
        this.staticBannerSrc = str14;
        this.iconSrc = str15;
        this.embedUrl = str16;
        this.bannerRatio = bannerRatio;
        this.actions = list2;
    }
}
