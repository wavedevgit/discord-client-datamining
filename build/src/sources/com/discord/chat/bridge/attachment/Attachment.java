package com.discord.chat.bridge.attachment;

import android.net.UrlQuerySanitizer;
import android.util.Base64;
import androidx.recyclerview.widget.RecyclerView;
import bt.v1;
import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.spoiler.SpoilerableData;
import com.discord.media_player.MediaPlayer;
import com.discord.react_asset_fetcher.ReactAsset;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import jr.l;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.c;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.MediaStreamTrack;
import ys.m;
@m
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0017\n\u0002\u0010\u0007\n\u0002\b\u000e\n\u0002\u0010\u0012\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b.\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b1\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 ·\u00012\u00020\u0001:\u0004¶\u0001·\u0001BÓ\u0003\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\u0011\u001a\u00020\f\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010\"\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010#\u001a\u0004\u0018\u00010$\u0012\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010&\u001a\u00020\f\u0012\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010(\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010)\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010*\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010+\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010,\u001a\u0004\u0018\u00010\f\u0012\n\b\u0002\u0010-\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b.\u0010/Bß\u0003\b\u0010\u0012\u0006\u00100\u001a\u00020\t\u0012\u0006\u00101\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0011\u001a\u00020\f\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001d\u001a\u0004\u0018\u00010\f\u0012\b\u0010\u001e\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010\f\u0012\b\u0010 \u001a\u0004\u0018\u00010\f\u0012\b\u0010!\u001a\u0004\u0018\u00010\f\u0012\b\u0010\"\u001a\u0004\u0018\u00010\f\u0012\b\u0010#\u001a\u0004\u0018\u00010$\u0012\b\u0010%\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010&\u001a\u00020\f\u0012\b\u0010'\u001a\u0004\u0018\u00010\t\u0012\b\u0010(\u001a\u0004\u0018\u00010\t\u0012\b\u0010)\u001a\u0004\u0018\u00010\t\u0012\b\u0010*\u001a\u0004\u0018\u00010\t\u0012\b\u0010+\u001a\u0004\u0018\u00010\f\u0012\b\u0010,\u001a\u0004\u0018\u00010\f\u0012\b\u0010-\u001a\u0004\u0018\u00010\f\u0012\b\u00102\u001a\u0004\u0018\u000103\u0012\b\u00104\u001a\u0004\u0018\u00010\u0003\u0012\b\u00105\u001a\u0004\u0018\u00010\u0003\u0012\b\u00106\u001a\u0004\u0018\u00010\t\u0012\b\u00107\u001a\u0004\u0018\u00010\t\u0012\b\u00108\u001a\u0004\u0018\u000109¢\u0006\u0004\b.\u0010:J\u0006\u0010v\u001a\u00020wJ\b\u0010x\u001a\u0004\u0018\u00010yJ\b\u0010z\u001a\u00020\fH\u0002J\u0017\u0010{\u001a\u0004\u0018\u00010\t2\u0006\u0010|\u001a\u00020\u0003H\u0002¢\u0006\u0002\u0010}J\b\u0010~\u001a\u00020\fH\u0002J\u000b\u0010\u007f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\n\u0010\u0080\u0001\u001a\u00020\u0003HÆ\u0003J\f\u0010\u0081\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\n\u0010\u0082\u0001\u001a\u00020\u0003HÆ\u0003J\n\u0010\u0083\u0001\u001a\u00020\u0003HÆ\u0003J\u0011\u0010\u0084\u0001\u001a\u0004\u0018\u00010\tHÂ\u0003¢\u0006\u0002\u0010LJ\u0011\u0010\u0085\u0001\u001a\u0004\u0018\u00010\tHÂ\u0003¢\u0006\u0002\u0010LJ\n\u0010\u0086\u0001\u001a\u00020\fHÆ\u0003J\f\u0010\u0087\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0088\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u0089\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u008a\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\n\u0010\u008b\u0001\u001a\u00020\fHÆ\u0003J\u0011\u0010\u008c\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010LJ\f\u0010\u008d\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u008e\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\f\u0010\u008f\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010\u0090\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010LJ\u0011\u0010\u0091\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010LJ\f\u0010\u0092\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010\u0093\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010LJ\u0011\u0010\u0094\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010LJ\f\u0010\u0095\u0001\u001a\u0004\u0018\u00010\u0003HÂ\u0003J\f\u0010\u0096\u0001\u001a\u0004\u0018\u00010\u0003HÂ\u0003J\u0011\u0010\u0097\u0001\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010VJ\f\u0010\u0098\u0001\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010\u0099\u0001\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010VJ\u0011\u0010\u009a\u0001\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010VJ\u0011\u0010\u009b\u0001\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010VJ\u0011\u0010\u009c\u0001\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010VJ\u0011\u0010\u009d\u0001\u001a\u0004\u0018\u00010$HÆ\u0003¢\u0006\u0002\u0010^J\f\u0010\u009e\u0001\u001a\u0004\u0018\u00010\u0003HÂ\u0003J\n\u0010\u009f\u0001\u001a\u00020\fHÆ\u0003J\u0011\u0010 \u0001\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010LJ\u0011\u0010¡\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010LJ\u0011\u0010¢\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010LJ\u0011\u0010£\u0001\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010LJ\u0011\u0010¤\u0001\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010VJ\u0011\u0010¥\u0001\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010VJ\u0011\u0010¦\u0001\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010VJä\u0003\u0010§\u0001\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\u00032\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\u000b\u001a\u00020\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0011\u001a\u00020\f2\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u001d\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\u001e\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u001f\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010 \u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\"\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010#\u001a\u0004\u0018\u00010$2\n\b\u0002\u0010%\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010&\u001a\u00020\f2\n\b\u0002\u0010'\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010(\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010)\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010*\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010+\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010,\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010-\u001a\u0004\u0018\u00010\fHÆ\u0001¢\u0006\u0003\u0010¨\u0001J\u0016\u0010©\u0001\u001a\u00020\f2\n\u0010ª\u0001\u001a\u0005\u0018\u00010«\u0001HÖ\u0003J\n\u0010¬\u0001\u001a\u00020\tHÖ\u0001J\n\u0010\u00ad\u0001\u001a\u00020\u0003HÖ\u0001J-\u0010®\u0001\u001a\u00030¯\u00012\u0007\u0010°\u0001\u001a\u00020\u00002\b\u0010±\u0001\u001a\u00030²\u00012\b\u0010³\u0001\u001a\u00030´\u0001H\u0001¢\u0006\u0003\bµ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b;\u0010<R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b=\u0010<R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b>\u0010<R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b?\u0010<R\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b@\u0010<R\u001a\u0010\b\u001a\u0004\u0018\u00010\t8\u0002X\u0083\u0004¢\u0006\n\n\u0002\u0010C\u0012\u0004\bA\u0010BR\u001a\u0010\n\u001a\u0004\u0018\u00010\t8\u0002X\u0083\u0004¢\u0006\n\n\u0002\u0010C\u0012\u0004\bD\u0010BR\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010ER\u0013\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\bF\u0010<R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\bG\u0010<R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\bH\u0010<R\u0013\u0010\u0010\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\bI\u0010<R\u0011\u0010\u0011\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\bJ\u0010ER\u0015\u0010\u0012\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010C\u001a\u0004\bK\u0010LR\u0013\u0010\u0013\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\bM\u0010<R\u0013\u0010\u0014\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\bN\u0010<R\u0013\u0010\u0015\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\bO\u0010<R\u0015\u0010\u0016\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010C\u001a\u0004\bP\u0010LR\u0015\u0010\u0017\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010C\u001a\u0004\bQ\u0010LR\u0013\u0010\u0018\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\bR\u0010<R\u0015\u0010\u0019\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010C\u001a\u0004\bS\u0010LR\u0015\u0010\u001a\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010C\u001a\u0004\bT\u0010LR\u0010\u0010\u001b\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u001c\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0015\u0010\u001d\u001a\u0004\u0018\u00010\f¢\u0006\n\n\u0002\u0010W\u001a\u0004\bU\u0010VR\u0013\u0010\u001e\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\bX\u0010<R\u0015\u0010\u001f\u001a\u0004\u0018\u00010\f¢\u0006\n\n\u0002\u0010W\u001a\u0004\bY\u0010VR\u0015\u0010 \u001a\u0004\u0018\u00010\f¢\u0006\n\n\u0002\u0010W\u001a\u0004\bZ\u0010VR\u0015\u0010!\u001a\u0004\u0018\u00010\f¢\u0006\n\n\u0002\u0010W\u001a\u0004\b[\u0010VR\u0015\u0010\"\u001a\u0004\u0018\u00010\f¢\u0006\n\n\u0002\u0010W\u001a\u0004\b\\\u0010VR\u0015\u0010#\u001a\u0004\u0018\u00010$¢\u0006\n\n\u0002\u0010_\u001a\u0004\b]\u0010^R\u0010\u0010%\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010&\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b&\u0010ER\u0015\u0010'\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010C\u001a\u0004\b`\u0010LR\u0015\u0010(\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010C\u001a\u0004\ba\u0010LR\u0015\u0010)\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010C\u001a\u0004\bb\u0010LR\u0015\u0010*\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010C\u001a\u0004\bc\u0010LR\u0015\u0010+\u001a\u0004\u0018\u00010\f¢\u0006\n\n\u0002\u0010W\u001a\u0004\bd\u0010VR\u0015\u0010,\u001a\u0004\u0018\u00010\f¢\u0006\n\n\u0002\u0010W\u001a\u0004\be\u0010VR\u0015\u0010-\u001a\u0004\u0018\u00010\f¢\u0006\n\n\u0002\u0010W\u001a\u0004\bf\u0010VR\u001b\u0010g\u001a\u00020h8FX\u0086\u0084\u0002¢\u0006\f\n\u0004\bk\u0010l\u001a\u0004\bi\u0010jR\u0013\u00102\u001a\u0004\u0018\u000103¢\u0006\b\n\u0000\u001a\u0004\bm\u0010nR\u0016\u00104\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bo\u0010<R\u0016\u00105\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bp\u0010<R\u0012\u00106\u001a\u0004\u0018\u00010\tX\u0082\u0004¢\u0006\u0004\n\u0002\u0010CR\u0012\u00107\u001a\u0004\u0018\u00010\tX\u0082\u0004¢\u0006\u0004\n\u0002\u0010CR\u0011\u0010q\u001a\u00020\t8F¢\u0006\u0006\u001a\u0004\br\u0010sR\u0011\u0010t\u001a\u00020\t8F¢\u0006\u0006\u001a\u0004\bu\u0010s¨\u0006¸\u0001"}, d2 = {"Lcom/discord/chat/bridge/attachment/Attachment;", "Lcom/discord/chat/bridge/spoiler/SpoilerableData;", StackTraceHelper.ID_KEY, "", "url", "videoUrl", "filename", "size", "sourceWidth", "", "sourceHeight", "isSpoiler", "", "spoiler", "description", "hint", ViewProps.ROLE, "showDescription", ReactProgressBarViewManager.PROP_PROGRESS, "uploaderId", "uploaderItemId", ReactTextInputShadowNode.PROP_PLACEHOLDER, "placeholderVersion", ViewProps.BACKGROUND_COLOR, "attachmentTagText", "attachmentTagBackgroundColor", "attachmentTagTextColor", "attachmentTagIconType", "attachmentType", "obscure", "obscureDescription", "obscureAwaitingScan", "obscureHideControls", "obscureIsOpaque", "verifyAge", "durationSecs", "", "waveform", "isAnimated", "mediaViewerBufferForPlaybackMs", "mediaViewerBufferForPlaybackAfterRebufferMs", "mediaViewerMinBufferMs", "mediaViewerMaxBufferMs", "mediaViewerEnableDecoderFallback", "mediaViewerEnableAsyncBufferQueueing", "srcIsAnimated", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Float;Ljava/lang/String;ZLjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;)V", "seen0", "seen1", "waveformByteArray", "", "spoilerOrNull", "obscureOrNull", "proxyWidth", "proxyHeight", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Float;Ljava/lang/String;ZLjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;[BLjava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()Ljava/lang/String;", "getUrl", "getVideoUrl", "getFilename", "getSize", "getSourceWidth$annotations", "()V", "Ljava/lang/Integer;", "getSourceHeight$annotations", "()Z", "getSpoiler", "getDescription", "getHint", "getRole", "getShowDescription", "getProgress", "()Ljava/lang/Integer;", "getUploaderId", "getUploaderItemId", "getPlaceholder", "getPlaceholderVersion", "getBackgroundColor", "getAttachmentTagText", "getAttachmentTagBackgroundColor", "getAttachmentTagTextColor", "getObscure", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getObscureDescription", "getObscureAwaitingScan", "getObscureHideControls", "getObscureIsOpaque", "getVerifyAge", "getDurationSecs", "()Ljava/lang/Float;", "Ljava/lang/Float;", "getMediaViewerBufferForPlaybackMs", "getMediaViewerBufferForPlaybackAfterRebufferMs", "getMediaViewerMinBufferMs", "getMediaViewerMaxBufferMs", "getMediaViewerEnableDecoderFallback", "getMediaViewerEnableAsyncBufferQueueing", "getSrcIsAnimated", "playerSettings", "Lcom/discord/media_player/MediaPlayer$PlayerSettings;", "getPlayerSettings", "()Lcom/discord/media_player/MediaPlayer$PlayerSettings;", "playerSettings$delegate", "Lkotlin/Lazy;", "getWaveformByteArray", "()[B", "getSpoilerOrNull", "getObscureOrNull", "width", "getWidth", "()I", "height", "getHeight", "type", "Lcom/discord/chat/bridge/attachment/AttachmentType;", "getAttachmentTagIcon", "Lcom/discord/react_asset_fetcher/ReactAsset;", "shouldShowImages", "getProxyUrlQueryParam", "paramName", "(Ljava/lang/String;)Ljava/lang/Integer;", "hasDimensions", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "component23", "component24", "component25", "component26", "component27", "component28", "component29", "component30", "component31", "component32", "component33", "component34", "component35", "component36", "component37", "component38", "component39", "component40", "copy", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Float;Ljava/lang/String;ZLjava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Integer;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/attachment/Attachment;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAttachment.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Attachment.kt\ncom/discord/chat/bridge/attachment/Attachment\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,129:1\n1#2:130\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Attachment implements SpoilerableData {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Integer attachmentTagBackgroundColor;
    private final String attachmentTagIconType;
    private final String attachmentTagText;
    private final Integer attachmentTagTextColor;
    private final String attachmentType;
    private final Integer backgroundColor;
    private final String description;
    private final Float durationSecs;
    @NotNull
    private final String filename;
    private final String hint;

    /* renamed from: id  reason: collision with root package name */
    private final String f9266id;
    private final boolean isAnimated;
    private final boolean isSpoiler;
    private final Integer mediaViewerBufferForPlaybackAfterRebufferMs;
    private final Integer mediaViewerBufferForPlaybackMs;
    private final Boolean mediaViewerEnableAsyncBufferQueueing;
    private final Boolean mediaViewerEnableDecoderFallback;
    private final Integer mediaViewerMaxBufferMs;
    private final Integer mediaViewerMinBufferMs;
    private final Boolean obscure;
    private final Boolean obscureAwaitingScan;
    private final String obscureDescription;
    private final Boolean obscureHideControls;
    private final Boolean obscureIsOpaque;
    private final String obscureOrNull;
    private final String placeholder;
    private final Integer placeholderVersion;
    @NotNull
    private final Lazy playerSettings$delegate;
    private final Integer progress;
    private final Integer proxyHeight;
    private final Integer proxyWidth;
    private final String role;
    private final boolean showDescription;
    @NotNull
    private final String size;
    private final Integer sourceHeight;
    private final Integer sourceWidth;
    private final String spoiler;
    private final String spoilerOrNull;
    private final Boolean srcIsAnimated;
    private final String uploaderId;
    private final String uploaderItemId;
    @NotNull
    private final String url;
    private final Boolean verifyAge;
    private final String videoUrl;
    private final String waveform;
    private final byte[] waveformByteArray;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/attachment/Attachment$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/attachment/Attachment;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return Attachment$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ Attachment(int i10, int i11, String str, String str2, String str3, String str4, String str5, Integer num, Integer num2, boolean z10, String str6, String str7, String str8, String str9, boolean z11, Integer num3, String str10, String str11, String str12, Integer num4, Integer num5, String str13, Integer num6, Integer num7, String str14, String str15, Boolean bool, String str16, Boolean bool2, Boolean bool3, Boolean bool4, Boolean bool5, Float f10, String str17, boolean z12, Integer num8, Integer num9, Integer num10, Integer num11, Boolean bool6, Boolean bool7, Boolean bool8, byte[] bArr, String str18, String str19, Integer num12, Integer num13, SerializationConstructorMarker serializationConstructorMarker) {
        byte[] bArr2;
        String str20;
        String str21;
        boolean z13 = false;
        if (154 != (i10 & 154)) {
            v1.a(new int[]{i10, i11}, new int[]{154, 0}, Attachment$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.f9266id = null;
        } else {
            this.f9266id = str;
        }
        this.url = str2;
        if ((i10 & 4) == 0) {
            this.videoUrl = null;
        } else {
            this.videoUrl = str3;
        }
        this.filename = str4;
        this.size = str5;
        if ((i10 & 32) == 0) {
            this.sourceWidth = null;
        } else {
            this.sourceWidth = num;
        }
        if ((i10 & 64) == 0) {
            this.sourceHeight = null;
        } else {
            this.sourceHeight = num2;
        }
        this.isSpoiler = z10;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.spoiler = null;
        } else {
            this.spoiler = str6;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.description = null;
        } else {
            this.description = str7;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.hint = null;
        } else {
            this.hint = str8;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.role = null;
        } else {
            this.role = str9;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.showDescription = false;
        } else {
            this.showDescription = z11;
        }
        if ((i10 & 8192) == 0) {
            this.progress = null;
        } else {
            this.progress = num3;
        }
        if ((i10 & 16384) == 0) {
            this.uploaderId = null;
        } else {
            this.uploaderId = str10;
        }
        if ((32768 & i10) == 0) {
            this.uploaderItemId = null;
        } else {
            this.uploaderItemId = str11;
        }
        if ((65536 & i10) == 0) {
            this.placeholder = null;
        } else {
            this.placeholder = str12;
        }
        if ((131072 & i10) == 0) {
            this.placeholderVersion = null;
        } else {
            this.placeholderVersion = num4;
        }
        if ((262144 & i10) == 0) {
            this.backgroundColor = null;
        } else {
            this.backgroundColor = num5;
        }
        if ((524288 & i10) == 0) {
            this.attachmentTagText = null;
        } else {
            this.attachmentTagText = str13;
        }
        if ((1048576 & i10) == 0) {
            this.attachmentTagBackgroundColor = null;
        } else {
            this.attachmentTagBackgroundColor = num6;
        }
        if ((2097152 & i10) == 0) {
            this.attachmentTagTextColor = null;
        } else {
            this.attachmentTagTextColor = num7;
        }
        if ((4194304 & i10) == 0) {
            this.attachmentTagIconType = null;
        } else {
            this.attachmentTagIconType = str14;
        }
        if ((8388608 & i10) == 0) {
            this.attachmentType = null;
        } else {
            this.attachmentType = str15;
        }
        if ((16777216 & i10) == 0) {
            this.obscure = null;
        } else {
            this.obscure = bool;
        }
        if ((33554432 & i10) == 0) {
            this.obscureDescription = null;
        } else {
            this.obscureDescription = str16;
        }
        if ((67108864 & i10) == 0) {
            this.obscureAwaitingScan = null;
        } else {
            this.obscureAwaitingScan = bool2;
        }
        if ((134217728 & i10) == 0) {
            this.obscureHideControls = null;
        } else {
            this.obscureHideControls = bool3;
        }
        if ((268435456 & i10) == 0) {
            this.obscureIsOpaque = null;
        } else {
            this.obscureIsOpaque = bool4;
        }
        if ((536870912 & i10) == 0) {
            this.verifyAge = null;
        } else {
            this.verifyAge = bool5;
        }
        if ((1073741824 & i10) == 0) {
            this.durationSecs = null;
        } else {
            this.durationSecs = f10;
        }
        if ((i10 & Integer.MIN_VALUE) == 0) {
            this.waveform = null;
        } else {
            this.waveform = str17;
        }
        if ((i11 & 1) == 0) {
            this.isAnimated = true;
        } else {
            this.isAnimated = z12;
        }
        if ((i11 & 2) == 0) {
            this.mediaViewerBufferForPlaybackMs = null;
        } else {
            this.mediaViewerBufferForPlaybackMs = num8;
        }
        if ((i11 & 4) == 0) {
            this.mediaViewerBufferForPlaybackAfterRebufferMs = null;
        } else {
            this.mediaViewerBufferForPlaybackAfterRebufferMs = num9;
        }
        if ((i11 & 8) == 0) {
            this.mediaViewerMinBufferMs = null;
        } else {
            this.mediaViewerMinBufferMs = num10;
        }
        if ((i11 & 16) == 0) {
            this.mediaViewerMaxBufferMs = null;
        } else {
            this.mediaViewerMaxBufferMs = num11;
        }
        this.mediaViewerEnableDecoderFallback = (i11 & 32) == 0 ? Boolean.FALSE : bool6;
        this.mediaViewerEnableAsyncBufferQueueing = (i11 & 64) == 0 ? Boolean.TRUE : bool7;
        this.srcIsAnimated = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0 ? Boolean.FALSE : bool8;
        this.playerSettings$delegate = l.b(new Function0() { // from class: l6.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaPlayer.PlayerSettings _init_$lambda$8;
                _init_$lambda$8 = Attachment._init_$lambda$8(Attachment.this);
                return _init_$lambda$8;
            }
        });
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            try {
                str20 = this.waveform;
            } catch (Exception unused) {
            }
            if (str20 != null) {
                bArr2 = Base64.decode(str20, 0);
                this.waveformByteArray = bArr2;
            }
            bArr2 = null;
            this.waveformByteArray = bArr2;
        } else {
            this.waveformByteArray = bArr;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            str21 = this.spoiler;
            if (str21 == null || StringsKt.k0(str21)) {
                str21 = null;
            }
        } else {
            str21 = str18;
        }
        this.spoilerOrNull = str21;
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            String str22 = this.obscureDescription;
            this.obscureOrNull = (str22 == null || StringsKt.k0(str22)) ? true : z13 ? null : str22;
        } else {
            this.obscureOrNull = str19;
        }
        this.proxyWidth = (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0 ? getProxyUrlQueryParam("width") : num12;
        this.proxyHeight = (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0 ? getProxyUrlQueryParam("height") : num13;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaPlayer.PlayerSettings _init_$lambda$8(Attachment attachment) {
        int minBufferMs;
        int maxBufferMs;
        int bufferForPlaybackMs;
        int bufferForPlaybackAfterRebufferMs;
        boolean enableDecoderFallback;
        boolean enableAsyncBufferQueueing;
        Integer num = attachment.mediaViewerMinBufferMs;
        if (num != null) {
            minBufferMs = num.intValue();
        } else {
            minBufferMs = MediaPlayer.Factory.getDefaultSettings().getMinBufferMs();
        }
        Integer num2 = attachment.mediaViewerMaxBufferMs;
        if (num2 != null) {
            maxBufferMs = num2.intValue();
        } else {
            maxBufferMs = MediaPlayer.Factory.getDefaultSettings().getMaxBufferMs();
        }
        Integer num3 = attachment.mediaViewerBufferForPlaybackMs;
        if (num3 != null) {
            bufferForPlaybackMs = num3.intValue();
        } else {
            bufferForPlaybackMs = MediaPlayer.Factory.getDefaultSettings().getBufferForPlaybackMs();
        }
        Integer num4 = attachment.mediaViewerBufferForPlaybackAfterRebufferMs;
        if (num4 != null) {
            bufferForPlaybackAfterRebufferMs = num4.intValue();
        } else {
            bufferForPlaybackAfterRebufferMs = MediaPlayer.Factory.getDefaultSettings().getBufferForPlaybackAfterRebufferMs();
        }
        Boolean bool = attachment.mediaViewerEnableDecoderFallback;
        if (bool != null) {
            enableDecoderFallback = bool.booleanValue();
        } else {
            enableDecoderFallback = MediaPlayer.Factory.getDefaultSettings().getEnableDecoderFallback();
        }
        Boolean bool2 = attachment.mediaViewerEnableAsyncBufferQueueing;
        if (bool2 != null) {
            enableAsyncBufferQueueing = bool2.booleanValue();
        } else {
            enableAsyncBufferQueueing = MediaPlayer.Factory.getDefaultSettings().getEnableAsyncBufferQueueing();
        }
        return new MediaPlayer.PlayerSettings(minBufferMs, maxBufferMs, bufferForPlaybackMs, bufferForPlaybackAfterRebufferMs, enableDecoderFallback, enableAsyncBufferQueueing);
    }

    private final String component23() {
        return this.attachmentTagIconType;
    }

    private final String component24() {
        return this.attachmentType;
    }

    private final String component32() {
        return this.waveform;
    }

    private final Integer component6() {
        return this.sourceWidth;
    }

    private final Integer component7() {
        return this.sourceHeight;
    }

    private final Integer getProxyUrlQueryParam(String str) {
        Object b10;
        Integer num;
        Integer num2 = null;
        try {
            Result.a aVar = Result.f33071e;
            String value = new UrlQuerySanitizer(this.url).getValue(str);
            if (value != null) {
                num = StringsKt.toIntOrNull(value);
            } else {
                num = null;
            }
            b10 = Result.b(num);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f33071e;
            b10 = Result.b(c.a(th2));
        }
        if (!Result.g(b10)) {
            num2 = b10;
        }
        return num2;
    }

    private static /* synthetic */ void getSourceHeight$annotations() {
    }

    private static /* synthetic */ void getSourceWidth$annotations() {
    }

    private final boolean hasDimensions() {
        if (getWidth() > 0 && getHeight() > 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaPlayer.PlayerSettings playerSettings_delegate$lambda$0(Attachment attachment) {
        int minBufferMs;
        int maxBufferMs;
        int bufferForPlaybackMs;
        int bufferForPlaybackAfterRebufferMs;
        boolean enableDecoderFallback;
        boolean enableAsyncBufferQueueing;
        Integer num = attachment.mediaViewerMinBufferMs;
        if (num != null) {
            minBufferMs = num.intValue();
        } else {
            minBufferMs = MediaPlayer.Factory.getDefaultSettings().getMinBufferMs();
        }
        Integer num2 = attachment.mediaViewerMaxBufferMs;
        if (num2 != null) {
            maxBufferMs = num2.intValue();
        } else {
            maxBufferMs = MediaPlayer.Factory.getDefaultSettings().getMaxBufferMs();
        }
        Integer num3 = attachment.mediaViewerBufferForPlaybackMs;
        if (num3 != null) {
            bufferForPlaybackMs = num3.intValue();
        } else {
            bufferForPlaybackMs = MediaPlayer.Factory.getDefaultSettings().getBufferForPlaybackMs();
        }
        Integer num4 = attachment.mediaViewerBufferForPlaybackAfterRebufferMs;
        if (num4 != null) {
            bufferForPlaybackAfterRebufferMs = num4.intValue();
        } else {
            bufferForPlaybackAfterRebufferMs = MediaPlayer.Factory.getDefaultSettings().getBufferForPlaybackAfterRebufferMs();
        }
        Boolean bool = attachment.mediaViewerEnableDecoderFallback;
        if (bool != null) {
            enableDecoderFallback = bool.booleanValue();
        } else {
            enableDecoderFallback = MediaPlayer.Factory.getDefaultSettings().getEnableDecoderFallback();
        }
        Boolean bool2 = attachment.mediaViewerEnableAsyncBufferQueueing;
        if (bool2 != null) {
            enableAsyncBufferQueueing = bool2.booleanValue();
        } else {
            enableAsyncBufferQueueing = MediaPlayer.Factory.getDefaultSettings().getEnableAsyncBufferQueueing();
        }
        return new MediaPlayer.PlayerSettings(minBufferMs, maxBufferMs, bufferForPlaybackMs, bufferForPlaybackAfterRebufferMs, enableDecoderFallback, enableAsyncBufferQueueing);
    }

    private final boolean shouldShowImages() {
        int i10;
        int i11;
        Integer num = this.sourceWidth;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        if (i10 > 0) {
            Integer num2 = this.sourceHeight;
            if (num2 != null) {
                i11 = num2.intValue();
            } else {
                i11 = 0;
            }
            if (i11 > 0) {
                return true;
            }
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:228:0x032c, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r1, r4) != false) goto L154;
     */
    /* JADX WARN: Code restructure failed: missing block: B:244:0x035a, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r1, r4) == false) goto L191;
     */
    /* JADX WARN: Code restructure failed: missing block: B:257:0x0386, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r1, r0 ? null : r4) == false) goto L189;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final /* synthetic */ void write$Self$chat_release(com.discord.chat.bridge.attachment.Attachment r6, kotlinx.serialization.encoding.CompositeEncoder r7, kotlinx.serialization.descriptors.SerialDescriptor r8) {
        /*
            Method dump skipped, instructions count: 980
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.attachment.Attachment.write$Self$chat_release(com.discord.chat.bridge.attachment.Attachment, kotlinx.serialization.encoding.CompositeEncoder, kotlinx.serialization.descriptors.SerialDescriptor):void");
    }

    public final String component1() {
        return this.f9266id;
    }

    public final String component10() {
        return this.description;
    }

    public final String component11() {
        return this.hint;
    }

    public final String component12() {
        return this.role;
    }

    public final boolean component13() {
        return this.showDescription;
    }

    public final Integer component14() {
        return this.progress;
    }

    public final String component15() {
        return this.uploaderId;
    }

    public final String component16() {
        return this.uploaderItemId;
    }

    public final String component17() {
        return this.placeholder;
    }

    public final Integer component18() {
        return this.placeholderVersion;
    }

    public final Integer component19() {
        return this.backgroundColor;
    }

    @NotNull
    public final String component2() {
        return this.url;
    }

    public final String component20() {
        return this.attachmentTagText;
    }

    public final Integer component21() {
        return this.attachmentTagBackgroundColor;
    }

    public final Integer component22() {
        return this.attachmentTagTextColor;
    }

    public final Boolean component25() {
        return this.obscure;
    }

    public final String component26() {
        return this.obscureDescription;
    }

    public final Boolean component27() {
        return this.obscureAwaitingScan;
    }

    public final Boolean component28() {
        return this.obscureHideControls;
    }

    public final Boolean component29() {
        return this.obscureIsOpaque;
    }

    public final String component3() {
        return this.videoUrl;
    }

    public final Boolean component30() {
        return this.verifyAge;
    }

    public final Float component31() {
        return this.durationSecs;
    }

    public final boolean component33() {
        return this.isAnimated;
    }

    public final Integer component34() {
        return this.mediaViewerBufferForPlaybackMs;
    }

    public final Integer component35() {
        return this.mediaViewerBufferForPlaybackAfterRebufferMs;
    }

    public final Integer component36() {
        return this.mediaViewerMinBufferMs;
    }

    public final Integer component37() {
        return this.mediaViewerMaxBufferMs;
    }

    public final Boolean component38() {
        return this.mediaViewerEnableDecoderFallback;
    }

    public final Boolean component39() {
        return this.mediaViewerEnableAsyncBufferQueueing;
    }

    @NotNull
    public final String component4() {
        return this.filename;
    }

    public final Boolean component40() {
        return this.srcIsAnimated;
    }

    @NotNull
    public final String component5() {
        return this.size;
    }

    public final boolean component8() {
        return this.isSpoiler;
    }

    public final String component9() {
        return this.spoiler;
    }

    @NotNull
    public final Attachment copy(String str, @NotNull String url, String str2, @NotNull String filename, @NotNull String size, Integer num, Integer num2, boolean z10, String str3, String str4, String str5, String str6, boolean z11, Integer num3, String str7, String str8, String str9, Integer num4, Integer num5, String str10, Integer num6, Integer num7, String str11, String str12, Boolean bool, String str13, Boolean bool2, Boolean bool3, Boolean bool4, Boolean bool5, Float f10, String str14, boolean z12, Integer num8, Integer num9, Integer num10, Integer num11, Boolean bool6, Boolean bool7, Boolean bool8) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(filename, "filename");
        Intrinsics.checkNotNullParameter(size, "size");
        return new Attachment(str, url, str2, filename, size, num, num2, z10, str3, str4, str5, str6, z11, num3, str7, str8, str9, num4, num5, str10, num6, num7, str11, str12, bool, str13, bool2, bool3, bool4, bool5, f10, str14, z12, num8, num9, num10, num11, bool6, bool7, bool8);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Attachment) {
            Attachment attachment = (Attachment) obj;
            return Intrinsics.areEqual(this.f9266id, attachment.f9266id) && Intrinsics.areEqual(this.url, attachment.url) && Intrinsics.areEqual(this.videoUrl, attachment.videoUrl) && Intrinsics.areEqual(this.filename, attachment.filename) && Intrinsics.areEqual(this.size, attachment.size) && Intrinsics.areEqual(this.sourceWidth, attachment.sourceWidth) && Intrinsics.areEqual(this.sourceHeight, attachment.sourceHeight) && this.isSpoiler == attachment.isSpoiler && Intrinsics.areEqual(this.spoiler, attachment.spoiler) && Intrinsics.areEqual(this.description, attachment.description) && Intrinsics.areEqual(this.hint, attachment.hint) && Intrinsics.areEqual(this.role, attachment.role) && this.showDescription == attachment.showDescription && Intrinsics.areEqual(this.progress, attachment.progress) && Intrinsics.areEqual(this.uploaderId, attachment.uploaderId) && Intrinsics.areEqual(this.uploaderItemId, attachment.uploaderItemId) && Intrinsics.areEqual(this.placeholder, attachment.placeholder) && Intrinsics.areEqual(this.placeholderVersion, attachment.placeholderVersion) && Intrinsics.areEqual(this.backgroundColor, attachment.backgroundColor) && Intrinsics.areEqual(this.attachmentTagText, attachment.attachmentTagText) && Intrinsics.areEqual(this.attachmentTagBackgroundColor, attachment.attachmentTagBackgroundColor) && Intrinsics.areEqual(this.attachmentTagTextColor, attachment.attachmentTagTextColor) && Intrinsics.areEqual(this.attachmentTagIconType, attachment.attachmentTagIconType) && Intrinsics.areEqual(this.attachmentType, attachment.attachmentType) && Intrinsics.areEqual(this.obscure, attachment.obscure) && Intrinsics.areEqual(this.obscureDescription, attachment.obscureDescription) && Intrinsics.areEqual(this.obscureAwaitingScan, attachment.obscureAwaitingScan) && Intrinsics.areEqual(this.obscureHideControls, attachment.obscureHideControls) && Intrinsics.areEqual(this.obscureIsOpaque, attachment.obscureIsOpaque) && Intrinsics.areEqual(this.verifyAge, attachment.verifyAge) && Intrinsics.areEqual((Object) this.durationSecs, (Object) attachment.durationSecs) && Intrinsics.areEqual(this.waveform, attachment.waveform) && this.isAnimated == attachment.isAnimated && Intrinsics.areEqual(this.mediaViewerBufferForPlaybackMs, attachment.mediaViewerBufferForPlaybackMs) && Intrinsics.areEqual(this.mediaViewerBufferForPlaybackAfterRebufferMs, attachment.mediaViewerBufferForPlaybackAfterRebufferMs) && Intrinsics.areEqual(this.mediaViewerMinBufferMs, attachment.mediaViewerMinBufferMs) && Intrinsics.areEqual(this.mediaViewerMaxBufferMs, attachment.mediaViewerMaxBufferMs) && Intrinsics.areEqual(this.mediaViewerEnableDecoderFallback, attachment.mediaViewerEnableDecoderFallback) && Intrinsics.areEqual(this.mediaViewerEnableAsyncBufferQueueing, attachment.mediaViewerEnableAsyncBufferQueueing) && Intrinsics.areEqual(this.srcIsAnimated, attachment.srcIsAnimated);
        }
        return false;
    }

    public final Integer getAttachmentTagBackgroundColor() {
        return this.attachmentTagBackgroundColor;
    }

    public final ReactAsset getAttachmentTagIcon() {
        if (Intrinsics.areEqual(this.attachmentTagIconType, "clip")) {
            return ReactAsset.Clip;
        }
        return null;
    }

    public final String getAttachmentTagText() {
        return this.attachmentTagText;
    }

    public final Integer getAttachmentTagTextColor() {
        return this.attachmentTagTextColor;
    }

    public final Integer getBackgroundColor() {
        return this.backgroundColor;
    }

    public final String getDescription() {
        return this.description;
    }

    public final Float getDurationSecs() {
        return this.durationSecs;
    }

    @NotNull
    public final String getFilename() {
        return this.filename;
    }

    public final int getHeight() {
        Integer num = this.proxyHeight;
        if (num != null) {
            return num.intValue();
        }
        Integer num2 = this.sourceHeight;
        if (num2 != null) {
            return num2.intValue();
        }
        return 0;
    }

    public final String getHint() {
        return this.hint;
    }

    public final String getId() {
        return this.f9266id;
    }

    public final Integer getMediaViewerBufferForPlaybackAfterRebufferMs() {
        return this.mediaViewerBufferForPlaybackAfterRebufferMs;
    }

    public final Integer getMediaViewerBufferForPlaybackMs() {
        return this.mediaViewerBufferForPlaybackMs;
    }

    public final Boolean getMediaViewerEnableAsyncBufferQueueing() {
        return this.mediaViewerEnableAsyncBufferQueueing;
    }

    public final Boolean getMediaViewerEnableDecoderFallback() {
        return this.mediaViewerEnableDecoderFallback;
    }

    public final Integer getMediaViewerMaxBufferMs() {
        return this.mediaViewerMaxBufferMs;
    }

    public final Integer getMediaViewerMinBufferMs() {
        return this.mediaViewerMinBufferMs;
    }

    public final Boolean getObscure() {
        return this.obscure;
    }

    public final Boolean getObscureAwaitingScan() {
        return this.obscureAwaitingScan;
    }

    public final String getObscureDescription() {
        return this.obscureDescription;
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

    public final String getPlaceholder() {
        return this.placeholder;
    }

    public final Integer getPlaceholderVersion() {
        return this.placeholderVersion;
    }

    @NotNull
    public final MediaPlayer.PlayerSettings getPlayerSettings() {
        return (MediaPlayer.PlayerSettings) this.playerSettings$delegate.getValue();
    }

    public final Integer getProgress() {
        return this.progress;
    }

    public final String getRole() {
        return this.role;
    }

    public final boolean getShowDescription() {
        return this.showDescription;
    }

    @NotNull
    public final String getSize() {
        return this.size;
    }

    public final String getSpoiler() {
        return this.spoiler;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getSpoilerOrNull() {
        return this.spoilerOrNull;
    }

    public final Boolean getSrcIsAnimated() {
        return this.srcIsAnimated;
    }

    public final String getUploaderId() {
        return this.uploaderId;
    }

    public final String getUploaderItemId() {
        return this.uploaderItemId;
    }

    @NotNull
    public final String getUrl() {
        return this.url;
    }

    public final Boolean getVerifyAge() {
        return this.verifyAge;
    }

    public final String getVideoUrl() {
        return this.videoUrl;
    }

    public final byte[] getWaveformByteArray() {
        return this.waveformByteArray;
    }

    public final int getWidth() {
        Integer num = this.proxyWidth;
        if (num != null) {
            return num.intValue();
        }
        Integer num2 = this.sourceWidth;
        if (num2 != null) {
            return num2.intValue();
        }
        return 0;
    }

    public int hashCode() {
        String str = this.f9266id;
        int hashCode = (((str == null ? 0 : str.hashCode()) * 31) + this.url.hashCode()) * 31;
        String str2 = this.videoUrl;
        int hashCode2 = (((((hashCode + (str2 == null ? 0 : str2.hashCode())) * 31) + this.filename.hashCode()) * 31) + this.size.hashCode()) * 31;
        Integer num = this.sourceWidth;
        int hashCode3 = (hashCode2 + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.sourceHeight;
        int hashCode4 = (((hashCode3 + (num2 == null ? 0 : num2.hashCode())) * 31) + Boolean.hashCode(this.isSpoiler)) * 31;
        String str3 = this.spoiler;
        int hashCode5 = (hashCode4 + (str3 == null ? 0 : str3.hashCode())) * 31;
        String str4 = this.description;
        int hashCode6 = (hashCode5 + (str4 == null ? 0 : str4.hashCode())) * 31;
        String str5 = this.hint;
        int hashCode7 = (hashCode6 + (str5 == null ? 0 : str5.hashCode())) * 31;
        String str6 = this.role;
        int hashCode8 = (((hashCode7 + (str6 == null ? 0 : str6.hashCode())) * 31) + Boolean.hashCode(this.showDescription)) * 31;
        Integer num3 = this.progress;
        int hashCode9 = (hashCode8 + (num3 == null ? 0 : num3.hashCode())) * 31;
        String str7 = this.uploaderId;
        int hashCode10 = (hashCode9 + (str7 == null ? 0 : str7.hashCode())) * 31;
        String str8 = this.uploaderItemId;
        int hashCode11 = (hashCode10 + (str8 == null ? 0 : str8.hashCode())) * 31;
        String str9 = this.placeholder;
        int hashCode12 = (hashCode11 + (str9 == null ? 0 : str9.hashCode())) * 31;
        Integer num4 = this.placeholderVersion;
        int hashCode13 = (hashCode12 + (num4 == null ? 0 : num4.hashCode())) * 31;
        Integer num5 = this.backgroundColor;
        int hashCode14 = (hashCode13 + (num5 == null ? 0 : num5.hashCode())) * 31;
        String str10 = this.attachmentTagText;
        int hashCode15 = (hashCode14 + (str10 == null ? 0 : str10.hashCode())) * 31;
        Integer num6 = this.attachmentTagBackgroundColor;
        int hashCode16 = (hashCode15 + (num6 == null ? 0 : num6.hashCode())) * 31;
        Integer num7 = this.attachmentTagTextColor;
        int hashCode17 = (hashCode16 + (num7 == null ? 0 : num7.hashCode())) * 31;
        String str11 = this.attachmentTagIconType;
        int hashCode18 = (hashCode17 + (str11 == null ? 0 : str11.hashCode())) * 31;
        String str12 = this.attachmentType;
        int hashCode19 = (hashCode18 + (str12 == null ? 0 : str12.hashCode())) * 31;
        Boolean bool = this.obscure;
        int hashCode20 = (hashCode19 + (bool == null ? 0 : bool.hashCode())) * 31;
        String str13 = this.obscureDescription;
        int hashCode21 = (hashCode20 + (str13 == null ? 0 : str13.hashCode())) * 31;
        Boolean bool2 = this.obscureAwaitingScan;
        int hashCode22 = (hashCode21 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        Boolean bool3 = this.obscureHideControls;
        int hashCode23 = (hashCode22 + (bool3 == null ? 0 : bool3.hashCode())) * 31;
        Boolean bool4 = this.obscureIsOpaque;
        int hashCode24 = (hashCode23 + (bool4 == null ? 0 : bool4.hashCode())) * 31;
        Boolean bool5 = this.verifyAge;
        int hashCode25 = (hashCode24 + (bool5 == null ? 0 : bool5.hashCode())) * 31;
        Float f10 = this.durationSecs;
        int hashCode26 = (hashCode25 + (f10 == null ? 0 : f10.hashCode())) * 31;
        String str14 = this.waveform;
        int hashCode27 = (((hashCode26 + (str14 == null ? 0 : str14.hashCode())) * 31) + Boolean.hashCode(this.isAnimated)) * 31;
        Integer num8 = this.mediaViewerBufferForPlaybackMs;
        int hashCode28 = (hashCode27 + (num8 == null ? 0 : num8.hashCode())) * 31;
        Integer num9 = this.mediaViewerBufferForPlaybackAfterRebufferMs;
        int hashCode29 = (hashCode28 + (num9 == null ? 0 : num9.hashCode())) * 31;
        Integer num10 = this.mediaViewerMinBufferMs;
        int hashCode30 = (hashCode29 + (num10 == null ? 0 : num10.hashCode())) * 31;
        Integer num11 = this.mediaViewerMaxBufferMs;
        int hashCode31 = (hashCode30 + (num11 == null ? 0 : num11.hashCode())) * 31;
        Boolean bool6 = this.mediaViewerEnableDecoderFallback;
        int hashCode32 = (hashCode31 + (bool6 == null ? 0 : bool6.hashCode())) * 31;
        Boolean bool7 = this.mediaViewerEnableAsyncBufferQueueing;
        int hashCode33 = (hashCode32 + (bool7 == null ? 0 : bool7.hashCode())) * 31;
        Boolean bool8 = this.srcIsAnimated;
        return hashCode33 + (bool8 != null ? bool8.hashCode() : 0);
    }

    public final boolean isAnimated() {
        return this.isAnimated;
    }

    public final boolean isSpoiler() {
        return this.isSpoiler;
    }

    @NotNull
    public String toString() {
        String str = this.f9266id;
        String str2 = this.url;
        String str3 = this.videoUrl;
        String str4 = this.filename;
        String str5 = this.size;
        Integer num = this.sourceWidth;
        Integer num2 = this.sourceHeight;
        boolean z10 = this.isSpoiler;
        String str6 = this.spoiler;
        String str7 = this.description;
        String str8 = this.hint;
        String str9 = this.role;
        boolean z11 = this.showDescription;
        Integer num3 = this.progress;
        String str10 = this.uploaderId;
        String str11 = this.uploaderItemId;
        String str12 = this.placeholder;
        Integer num4 = this.placeholderVersion;
        Integer num5 = this.backgroundColor;
        String str13 = this.attachmentTagText;
        Integer num6 = this.attachmentTagBackgroundColor;
        Integer num7 = this.attachmentTagTextColor;
        String str14 = this.attachmentTagIconType;
        String str15 = this.attachmentType;
        Boolean bool = this.obscure;
        String str16 = this.obscureDescription;
        Boolean bool2 = this.obscureAwaitingScan;
        Boolean bool3 = this.obscureHideControls;
        Boolean bool4 = this.obscureIsOpaque;
        Boolean bool5 = this.verifyAge;
        Float f10 = this.durationSecs;
        String str17 = this.waveform;
        boolean z12 = this.isAnimated;
        Integer num8 = this.mediaViewerBufferForPlaybackMs;
        Integer num9 = this.mediaViewerBufferForPlaybackAfterRebufferMs;
        Integer num10 = this.mediaViewerMinBufferMs;
        Integer num11 = this.mediaViewerMaxBufferMs;
        Boolean bool6 = this.mediaViewerEnableDecoderFallback;
        Boolean bool7 = this.mediaViewerEnableAsyncBufferQueueing;
        Boolean bool8 = this.srcIsAnimated;
        return "Attachment(id=" + str + ", url=" + str2 + ", videoUrl=" + str3 + ", filename=" + str4 + ", size=" + str5 + ", sourceWidth=" + num + ", sourceHeight=" + num2 + ", isSpoiler=" + z10 + ", spoiler=" + str6 + ", description=" + str7 + ", hint=" + str8 + ", role=" + str9 + ", showDescription=" + z11 + ", progress=" + num3 + ", uploaderId=" + str10 + ", uploaderItemId=" + str11 + ", placeholder=" + str12 + ", placeholderVersion=" + num4 + ", backgroundColor=" + num5 + ", attachmentTagText=" + str13 + ", attachmentTagBackgroundColor=" + num6 + ", attachmentTagTextColor=" + num7 + ", attachmentTagIconType=" + str14 + ", attachmentType=" + str15 + ", obscure=" + bool + ", obscureDescription=" + str16 + ", obscureAwaitingScan=" + bool2 + ", obscureHideControls=" + bool3 + ", obscureIsOpaque=" + bool4 + ", verifyAge=" + bool5 + ", durationSecs=" + f10 + ", waveform=" + str17 + ", isAnimated=" + z12 + ", mediaViewerBufferForPlaybackMs=" + num8 + ", mediaViewerBufferForPlaybackAfterRebufferMs=" + num9 + ", mediaViewerMinBufferMs=" + num10 + ", mediaViewerMaxBufferMs=" + num11 + ", mediaViewerEnableDecoderFallback=" + bool6 + ", mediaViewerEnableAsyncBufferQueueing=" + bool7 + ", srcIsAnimated=" + bool8 + ")";
    }

    @NotNull
    public final AttachmentType type() {
        if (Intrinsics.areEqual(this.attachmentType, MediaStreamTrack.AUDIO_TRACK_KIND)) {
            return AttachmentType.Audio;
        }
        if (!shouldShowImages()) {
            return AttachmentType.File;
        }
        if (Intrinsics.areEqual(this.attachmentType, "image") && hasDimensions()) {
            return AttachmentType.Image;
        }
        if (Intrinsics.areEqual(this.attachmentType, MediaStreamTrack.VIDEO_TRACK_KIND) && hasDimensions()) {
            return AttachmentType.Video;
        }
        return AttachmentType.File;
    }

    /* JADX WARN: Removed duplicated region for block: B:16:0x00c1  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x00d1  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public Attachment(java.lang.String r3, @org.jetbrains.annotations.NotNull java.lang.String r4, java.lang.String r5, @org.jetbrains.annotations.NotNull java.lang.String r6, @org.jetbrains.annotations.NotNull java.lang.String r7, java.lang.Integer r8, java.lang.Integer r9, boolean r10, java.lang.String r11, java.lang.String r12, java.lang.String r13, java.lang.String r14, boolean r15, java.lang.Integer r16, java.lang.String r17, java.lang.String r18, java.lang.String r19, java.lang.Integer r20, java.lang.Integer r21, java.lang.String r22, java.lang.Integer r23, java.lang.Integer r24, java.lang.String r25, java.lang.String r26, java.lang.Boolean r27, java.lang.String r28, java.lang.Boolean r29, java.lang.Boolean r30, java.lang.Boolean r31, java.lang.Boolean r32, java.lang.Float r33, java.lang.String r34, boolean r35, java.lang.Integer r36, java.lang.Integer r37, java.lang.Integer r38, java.lang.Integer r39, java.lang.Boolean r40, java.lang.Boolean r41, java.lang.Boolean r42) {
        /*
            Method dump skipped, instructions count: 229
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.attachment.Attachment.<init>(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Integer, java.lang.Integer, boolean, java.lang.String, java.lang.String, java.lang.String, java.lang.String, boolean, java.lang.Integer, java.lang.String, java.lang.String, java.lang.String, java.lang.Integer, java.lang.Integer, java.lang.String, java.lang.Integer, java.lang.Integer, java.lang.String, java.lang.String, java.lang.Boolean, java.lang.String, java.lang.Boolean, java.lang.Boolean, java.lang.Boolean, java.lang.Boolean, java.lang.Float, java.lang.String, boolean, java.lang.Integer, java.lang.Integer, java.lang.Integer, java.lang.Integer, java.lang.Boolean, java.lang.Boolean, java.lang.Boolean):void");
    }

    public /* synthetic */ Attachment(String str, String str2, String str3, String str4, String str5, Integer num, Integer num2, boolean z10, String str6, String str7, String str8, String str9, boolean z11, Integer num3, String str10, String str11, String str12, Integer num4, Integer num5, String str13, Integer num6, Integer num7, String str14, String str15, Boolean bool, String str16, Boolean bool2, Boolean bool3, Boolean bool4, Boolean bool5, Float f10, String str17, boolean z12, Integer num8, Integer num9, Integer num10, Integer num11, Boolean bool6, Boolean bool7, Boolean bool8, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, str2, (i10 & 4) != 0 ? null : str3, str4, str5, (i10 & 32) != 0 ? null : num, (i10 & 64) != 0 ? null : num2, z10, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str6, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str8, (i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : str9, (i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? false : z11, (i10 & 8192) != 0 ? null : num3, (i10 & 16384) != 0 ? null : str10, (32768 & i10) != 0 ? null : str11, (65536 & i10) != 0 ? null : str12, (131072 & i10) != 0 ? null : num4, (262144 & i10) != 0 ? null : num5, (524288 & i10) != 0 ? null : str13, (1048576 & i10) != 0 ? null : num6, (2097152 & i10) != 0 ? null : num7, (4194304 & i10) != 0 ? null : str14, (8388608 & i10) != 0 ? null : str15, (16777216 & i10) != 0 ? null : bool, (33554432 & i10) != 0 ? null : str16, (67108864 & i10) != 0 ? null : bool2, (134217728 & i10) != 0 ? null : bool3, (268435456 & i10) != 0 ? null : bool4, (536870912 & i10) != 0 ? null : bool5, (1073741824 & i10) != 0 ? null : f10, (i10 & Integer.MIN_VALUE) != 0 ? null : str17, (i11 & 1) != 0 ? true : z12, (i11 & 2) != 0 ? null : num8, (i11 & 4) != 0 ? null : num9, (i11 & 8) != 0 ? null : num10, (i11 & 16) != 0 ? null : num11, (i11 & 32) != 0 ? Boolean.FALSE : bool6, (i11 & 64) != 0 ? Boolean.TRUE : bool7, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? Boolean.FALSE : bool8);
    }
}
