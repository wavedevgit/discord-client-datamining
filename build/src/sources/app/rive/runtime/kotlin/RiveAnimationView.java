package app.rive.runtime.kotlin;

import android.annotation.TargetApi;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.graphics.SurfaceTexture;
import android.os.Handler;
import android.os.Looper;
import android.util.AttributeSet;
import android.util.Log;
import android.util.SparseBooleanArray;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.r0;
import androidx.recyclerview.widget.RecyclerView;
import app.rive.runtime.kotlin.ResourceType;
import app.rive.runtime.kotlin.controllers.ControllerState;
import app.rive.runtime.kotlin.controllers.ControllerStateManagement;
import app.rive.runtime.kotlin.controllers.RiveFileController;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Artboard;
import app.rive.runtime.kotlin.core.ContextAssetLoader;
import app.rive.runtime.kotlin.core.Direction;
import app.rive.runtime.kotlin.core.FallbackAssetLoader;
import app.rive.runtime.kotlin.core.File;
import app.rive.runtime.kotlin.core.FileAssetLoader;
import app.rive.runtime.kotlin.core.Fit;
import app.rive.runtime.kotlin.core.LinearAnimationInstance;
import app.rive.runtime.kotlin.core.Loop;
import app.rive.runtime.kotlin.core.RendererType;
import app.rive.runtime.kotlin.core.Rive;
import app.rive.runtime.kotlin.core.StateMachineInstance;
import app.rive.runtime.kotlin.core.errors.RiveException;
import app.rive.runtime.kotlin.renderers.PointerEvents;
import app.rive.runtime.kotlin.renderers.Renderer;
import app.rive.runtime.kotlin.renderers.RendererMetrics;
import app.rive.runtime.kotlin.renderers.RiveArtboardRenderer;
import b2.f;
import c6.k;
import com.android.volley.o;
import com.android.volley.p;
import com.android.volley.u;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Constructor;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.w;
import org.jetbrains.annotations.NotNull;
import zr.c;
@Metadata(d1 = {"\u0000\u0098\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0010 \n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0016\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0012\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0012\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u001c\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\n\b\u0017\u0018\u0000 ß\u00012\u00020\u00012\b\u0012\u0004\u0012\u00020\u00030\u0002:\u0006à\u0001ß\u0001á\u0001B\u001b\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\b\u0010\tB\u0011\b\u0016\u0012\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b\b\u0010\fJ#\u0010\u0011\u001a\u00020\u000f2\u0012\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000f0\rH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J+\u0010\u0015\u001a\u00020\u000f2\u0006\u0010\u0014\u001a\u00020\u00132\u0012\u0010\u0010\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u000f0\rH\u0002¢\u0006\u0004\b\u0015\u0010\u0016J\u000f\u0010\u0017\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u0017\u0010\u0018J\u000f\u0010\u0019\u001a\u00020\u000fH\u0003¢\u0006\u0004\b\u0019\u0010\u0018J\u000f\u0010\u001a\u001a\u00020\u000fH\u0003¢\u0006\u0004\b\u001a\u0010\u0018J\u001f\u0010\u001f\u001a\u00020\u001e2\u0006\u0010\u001c\u001a\u00020\u001b2\u0006\u0010\u001d\u001a\u00020\u001bH\u0002¢\u0006\u0004\b\u001f\u0010 J'\u0010&\u001a\u00020\u000f2\u0006\u0010\"\u001a\u00020!2\u0006\u0010$\u001a\u00020#2\u0006\u0010%\u001a\u00020#H\u0016¢\u0006\u0004\b&\u0010'J'\u0010)\u001a\u00020\u000f2\u0006\u0010(\u001a\u00020!2\u0006\u0010$\u001a\u00020#2\u0006\u0010%\u001a\u00020#H\u0016¢\u0006\u0004\b)\u0010'J\r\u0010*\u001a\u00020\u000f¢\u0006\u0004\b*\u0010\u0018J%\u0010*\u001a\u00020\u000f2\f\u0010,\u001a\b\u0012\u0004\u0012\u00020\u00130+2\b\b\u0002\u0010-\u001a\u00020\u001e¢\u0006\u0004\b*\u0010.J\u001f\u0010*\u001a\u00020\u000f2\u0006\u0010/\u001a\u00020\u00132\b\b\u0002\u00100\u001a\u00020\u001e¢\u0006\u0004\b*\u00101J\r\u00102\u001a\u00020\u000f¢\u0006\u0004\b2\u0010\u0018J%\u00102\u001a\u00020\u000f2\f\u0010,\u001a\b\u0012\u0004\u0012\u00020\u00130+2\b\b\u0002\u0010-\u001a\u00020\u001e¢\u0006\u0004\b2\u0010.J\u001f\u00102\u001a\u00020\u000f2\u0006\u0010/\u001a\u00020\u00132\b\b\u0002\u00100\u001a\u00020\u001e¢\u0006\u0004\b2\u00101J+\u00108\u001a\u00020\u000f2\b\b\u0002\u00104\u001a\u0002032\b\b\u0002\u00106\u001a\u0002052\b\b\u0002\u00107\u001a\u00020\u001e¢\u0006\u0004\b8\u00109JC\u00108\u001a\u00020\u000f2\f\u0010,\u001a\b\u0012\u0004\u0012\u00020\u00130+2\b\b\u0002\u00104\u001a\u0002032\b\b\u0002\u00106\u001a\u0002052\b\b\u0002\u0010-\u001a\u00020\u001e2\b\b\u0002\u00107\u001a\u00020\u001e¢\u0006\u0004\b8\u0010:J=\u00108\u001a\u00020\u000f2\u0006\u0010/\u001a\u00020\u00132\b\b\u0002\u00104\u001a\u0002032\b\b\u0002\u00106\u001a\u0002052\b\b\u0002\u00100\u001a\u00020\u001e2\b\b\u0002\u00107\u001a\u00020\u001e¢\u0006\u0004\b8\u0010;J\r\u0010<\u001a\u00020\u000f¢\u0006\u0004\b<\u0010\u0018J\u001d\u0010?\u001a\u00020\u000f2\u0006\u0010=\u001a\u00020\u00132\u0006\u0010>\u001a\u00020\u0013¢\u0006\u0004\b?\u0010@J%\u0010B\u001a\u00020\u000f2\u0006\u0010=\u001a\u00020\u00132\u0006\u0010>\u001a\u00020\u00132\u0006\u0010A\u001a\u00020\u001e¢\u0006\u0004\bB\u0010CJ%\u0010D\u001a\u00020\u000f2\u0006\u0010=\u001a\u00020\u00132\u0006\u0010>\u001a\u00020\u00132\u0006\u0010A\u001a\u00020\u001b¢\u0006\u0004\bD\u0010EJ\u001d\u0010G\u001a\u00020\u000f2\u0006\u0010>\u001a\u00020\u00132\u0006\u0010F\u001a\u00020\u0013¢\u0006\u0004\bG\u0010@J%\u0010H\u001a\u00020\u000f2\u0006\u0010>\u001a\u00020\u00132\u0006\u0010A\u001a\u00020\u001e2\u0006\u0010F\u001a\u00020\u0013¢\u0006\u0004\bH\u0010IJ%\u0010J\u001a\u00020\u000f2\u0006\u0010>\u001a\u00020\u00132\u0006\u0010A\u001a\u00020\u001b2\u0006\u0010F\u001a\u00020\u0013¢\u0006\u0004\bJ\u0010KJ!\u0010O\u001a\u00020\u000f2\u0012\u0010N\u001a\n\u0012\u0006\b\u0001\u0012\u00020M0L\"\u00020M¢\u0006\u0004\bO\u0010PJ\u0017\u0010R\u001a\u0004\u0018\u00010\u00132\u0006\u0010Q\u001a\u00020\u0013¢\u0006\u0004\bR\u0010SJ\u001f\u0010R\u001a\u0004\u0018\u00010\u00132\u0006\u0010Q\u001a\u00020\u00132\u0006\u0010F\u001a\u00020\u0013¢\u0006\u0004\bR\u0010TJ\u001d\u0010V\u001a\u00020\u000f2\u0006\u0010Q\u001a\u00020\u00132\u0006\u0010U\u001a\u00020\u0013¢\u0006\u0004\bV\u0010@J%\u0010V\u001a\u00020\u000f2\u0006\u0010Q\u001a\u00020\u00132\u0006\u0010U\u001a\u00020\u00132\u0006\u0010F\u001a\u00020\u0013¢\u0006\u0004\bV\u0010WJ\u000f\u0010X\u001a\u0004\u0018\u00010\u001b¢\u0006\u0004\bX\u0010YJ\u0015\u0010Z\u001a\u00020\u000f2\u0006\u0010A\u001a\u00020\u001b¢\u0006\u0004\bZ\u0010[Jm\u0010d\u001a\u00020\u000f2\b\b\u0001\u0010\\\u001a\u00020#2\n\b\u0002\u0010]\u001a\u0004\u0018\u00010\u00132\n\b\u0002\u0010/\u001a\u0004\u0018\u00010\u00132\n\b\u0002\u0010=\u001a\u0004\u0018\u00010\u00132\b\b\u0002\u0010^\u001a\u00020\u001e2\b\b\u0002\u0010_\u001a\u00020\u001e2\b\b\u0002\u0010a\u001a\u00020`2\b\b\u0002\u0010c\u001a\u00020b2\b\b\u0002\u00104\u001a\u000203¢\u0006\u0004\bd\u0010eJk\u0010h\u001a\u00020\u000f2\u0006\u0010g\u001a\u00020f2\n\b\u0002\u0010]\u001a\u0004\u0018\u00010\u00132\n\b\u0002\u0010/\u001a\u0004\u0018\u00010\u00132\n\b\u0002\u0010=\u001a\u0004\u0018\u00010\u00132\b\b\u0002\u0010^\u001a\u00020\u001e2\b\b\u0002\u0010_\u001a\u00020\u001e2\b\b\u0002\u0010a\u001a\u00020`2\b\b\u0002\u0010c\u001a\u00020b2\b\b\u0002\u00104\u001a\u000203¢\u0006\u0004\bh\u0010iJk\u0010k\u001a\u00020\u000f2\u0006\u0010j\u001a\u00020\u000e2\n\b\u0002\u0010]\u001a\u0004\u0018\u00010\u00132\n\b\u0002\u0010/\u001a\u0004\u0018\u00010\u00132\n\b\u0002\u0010=\u001a\u0004\u0018\u00010\u00132\b\b\u0002\u0010^\u001a\u00020\u001e2\b\b\u0002\u0010_\u001a\u00020\u001e2\b\b\u0002\u0010a\u001a\u00020`2\b\b\u0002\u0010c\u001a\u00020b2\b\b\u0002\u00104\u001a\u000203¢\u0006\u0004\bk\u0010lJ\u0017\u0010o\u001a\u00020\u000f2\b\u0010n\u001a\u0004\u0018\u00010m¢\u0006\u0004\bo\u0010pJ\u000f\u0010r\u001a\u00020qH\u0014¢\u0006\u0004\br\u0010sJ\u000f\u0010u\u001a\u00020tH\u0014¢\u0006\u0004\bu\u0010vJ\u000f\u0010w\u001a\u00020\u000fH\u0014¢\u0006\u0004\bw\u0010\u0018J\u000f\u0010x\u001a\u00020\u000fH\u0014¢\u0006\u0004\bx\u0010\u0018J\u0011\u0010z\u001a\u0004\u0018\u00010yH\u0007¢\u0006\u0004\bz\u0010{J\u0017\u0010}\u001a\u00020\u000f2\u0006\u0010|\u001a\u00020yH\u0007¢\u0006\u0004\b}\u0010~J#\u0010\u0081\u0001\u001a\u00020\u000f2\u0006\u0010\u007f\u001a\u00020#2\u0007\u0010\u0080\u0001\u001a\u00020#H\u0014¢\u0006\u0006\b\u0081\u0001\u0010\u0082\u0001J\u001b\u0010\u0084\u0001\u001a\u00020\u000f2\u0007\u0010\u0083\u0001\u001a\u00020\u0003H\u0016¢\u0006\u0006\b\u0084\u0001\u0010\u0085\u0001J\u001b\u0010\u0086\u0001\u001a\u00020\u000f2\u0007\u0010\u0083\u0001\u001a\u00020\u0003H\u0016¢\u0006\u0006\b\u0086\u0001\u0010\u0085\u0001J\u001a\u0010\u0088\u0001\u001a\u00020\u000f2\b\u0010\u0083\u0001\u001a\u00030\u0087\u0001¢\u0006\u0006\b\u0088\u0001\u0010\u0089\u0001J\u001a\u0010\u008a\u0001\u001a\u00020\u000f2\b\u0010\u0083\u0001\u001a\u00030\u0087\u0001¢\u0006\u0006\b\u008a\u0001\u0010\u0089\u0001J\u001c\u0010\u008d\u0001\u001a\u00020\u001e2\b\u0010\u008c\u0001\u001a\u00030\u008b\u0001H\u0016¢\u0006\u0006\b\u008d\u0001\u0010\u008e\u0001R\u001f\u0010\u008f\u0001\u001a\u00020\u001e8\u0016X\u0096D¢\u0006\u0010\n\u0006\b\u008f\u0001\u0010\u0090\u0001\u001a\u0006\b\u0091\u0001\u0010\u0092\u0001R*\u0010\u0094\u0001\u001a\u00030\u0093\u00018\u0006@\u0006X\u0086\u000e¢\u0006\u0018\n\u0006\b\u0094\u0001\u0010\u0095\u0001\u001a\u0006\b\u0096\u0001\u0010\u0097\u0001\"\u0006\b\u0098\u0001\u0010\u0099\u0001R'\u0010\u009b\u0001\u001a\u00030\u009a\u00018\u0006X\u0087\u0004¢\u0006\u0017\n\u0006\b\u009b\u0001\u0010\u009c\u0001\u0012\u0005\b\u009f\u0001\u0010\u0018\u001a\u0006\b\u009d\u0001\u0010\u009e\u0001R\u001c\u0010¡\u0001\u001a\u0005\u0018\u00010 \u00018\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b¡\u0001\u0010¢\u0001R\u0018\u0010¤\u0001\u001a\u00030£\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\b¤\u0001\u0010¥\u0001R\u001c\u0010§\u0001\u001a\u0005\u0018\u00010¦\u00018\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b§\u0001\u0010¨\u0001R)\u0010©\u0001\u001a\u00020\u001e8\u0016@\u0016X\u0096\u000e¢\u0006\u0018\n\u0006\b©\u0001\u0010\u0090\u0001\u001a\u0006\bª\u0001\u0010\u0092\u0001\"\u0006\b«\u0001\u0010¬\u0001R\u0018\u0010®\u0001\u001a\u00030\u00ad\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\b®\u0001\u0010¯\u0001R1\u0010°\u0001\u001a\u00020\u001e2\u0006\u0010A\u001a\u00020\u001e8\u0016@VX\u0096\u000e¢\u0006\u0018\n\u0006\b°\u0001\u0010\u0090\u0001\u001a\u0006\b±\u0001\u0010\u0092\u0001\"\u0006\b²\u0001\u0010¬\u0001R\u0017\u0010¶\u0001\u001a\u0005\u0018\u00010³\u00018F¢\u0006\b\u001a\u0006\b´\u0001\u0010µ\u0001R(\u0010a\u001a\u00020`2\u0006\u0010A\u001a\u00020`8F@FX\u0086\u000e¢\u0006\u0010\u001a\u0006\b·\u0001\u0010¸\u0001\"\u0006\b¹\u0001\u0010º\u0001R(\u0010c\u001a\u00020b2\u0006\u0010A\u001a\u00020b8F@FX\u0086\u000e¢\u0006\u0010\u001a\u0006\b»\u0001\u0010¼\u0001\"\u0006\b½\u0001\u0010¾\u0001R,\u0010Â\u0001\u001a\u0004\u0018\u00010\u001b2\b\u0010A\u001a\u0004\u0018\u00010\u001b8F@FX\u0086\u000e¢\u0006\u000f\u001a\u0005\b¿\u0001\u0010Y\"\u0006\bÀ\u0001\u0010Á\u0001R(\u0010Æ\u0001\u001a\u00020\u001b2\u0006\u0010A\u001a\u00020\u001b8F@@X\u0086\u000e¢\u0006\u000f\u001a\u0006\bÃ\u0001\u0010Ä\u0001\"\u0005\bÅ\u0001\u0010[R\u0015\u0010j\u001a\u0004\u0018\u00010\u000e8F¢\u0006\b\u001a\u0006\bÇ\u0001\u0010È\u0001R-\u0010]\u001a\u0004\u0018\u00010\u00132\t\u0010É\u0001\u001a\u0004\u0018\u00010\u00138F@FX\u0086\u000e¢\u0006\u0010\u001a\u0006\bÊ\u0001\u0010Ë\u0001\"\u0006\bÌ\u0001\u0010Í\u0001R(\u0010^\u001a\u00020\u001e2\u0006\u0010A\u001a\u00020\u001e8F@FX\u0086\u000e¢\u0006\u0010\u001a\u0006\bÎ\u0001\u0010\u0092\u0001\"\u0006\bÏ\u0001\u0010¬\u0001R\u001b\u0010Ó\u0001\u001a\t\u0012\u0005\u0012\u00030Ð\u00010+8F¢\u0006\b\u001a\u0006\bÑ\u0001\u0010Ò\u0001R\u001b\u0010Ö\u0001\u001a\t\u0012\u0005\u0012\u00030Ô\u00010+8F¢\u0006\b\u001a\u0006\bÕ\u0001\u0010Ò\u0001R(\u0010Û\u0001\u001a\u0016\u0012\u0005\u0012\u00030Ð\u00010×\u0001j\n\u0012\u0005\u0012\u00030Ð\u0001`Ø\u00018F¢\u0006\b\u001a\u0006\bÙ\u0001\u0010Ú\u0001R(\u0010Ý\u0001\u001a\u0016\u0012\u0005\u0012\u00030Ô\u00010×\u0001j\n\u0012\u0005\u0012\u00030Ô\u0001`Ø\u00018F¢\u0006\b\u001a\u0006\bÜ\u0001\u0010Ú\u0001R\u0014\u0010Þ\u0001\u001a\u00020\u001e8F¢\u0006\b\u001a\u0006\bÞ\u0001\u0010\u0092\u0001¨\u0006â\u0001"}, d2 = {"Lapp/rive/runtime/kotlin/RiveAnimationView;", "Lapp/rive/runtime/kotlin/RiveTextureView;", "Lapp/rive/runtime/kotlin/Observable;", "Lapp/rive/runtime/kotlin/controllers/RiveFileController$Listener;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "Lapp/rive/runtime/kotlin/RiveAnimationView$Builder;", "builder", "(Lapp/rive/runtime/kotlin/RiveAnimationView$Builder;)V", "Lkotlin/Function1;", "Lapp/rive/runtime/kotlin/core/File;", "", "onComplete", "loadFileFromResource", "(Lkotlin/jvm/functions/Function1;)V", "", "url", "loadFromNetwork", "(Ljava/lang/String;Lkotlin/jvm/functions/Function1;)V", "validateLifecycleOwner", "()V", "startFrameMetrics", "stopFrameMetrics", "", "x", "y", "", "inBounds", "(FF)Z", "Landroid/graphics/SurfaceTexture;", "surface", "", "width", "height", "onSurfaceTextureSizeChanged", "(Landroid/graphics/SurfaceTexture;II)V", "surfaceTexture", "onSurfaceTextureAvailable", "pause", "", "animationNames", "areStateMachines", "(Ljava/util/List;Z)V", "animationName", "isStateMachine", "(Ljava/lang/String;Z)V", "stop", "Lapp/rive/runtime/kotlin/core/Loop;", "loop", "Lapp/rive/runtime/kotlin/core/Direction;", "direction", "settleInitialState", "play", "(Lapp/rive/runtime/kotlin/core/Loop;Lapp/rive/runtime/kotlin/core/Direction;Z)V", "(Ljava/util/List;Lapp/rive/runtime/kotlin/core/Loop;Lapp/rive/runtime/kotlin/core/Direction;ZZ)V", "(Ljava/lang/String;Lapp/rive/runtime/kotlin/core/Loop;Lapp/rive/runtime/kotlin/core/Direction;ZZ)V", "reset", "stateMachineName", "inputName", "fireState", "(Ljava/lang/String;Ljava/lang/String;)V", "value", "setBooleanState", "(Ljava/lang/String;Ljava/lang/String;Z)V", "setNumberState", "(Ljava/lang/String;Ljava/lang/String;F)V", "path", "fireStateAtPath", "setBooleanStateAtPath", "(Ljava/lang/String;ZLjava/lang/String;)V", "setNumberStateAtPath", "(Ljava/lang/String;FLjava/lang/String;)V", "", "Lapp/rive/runtime/kotlin/ChangedInput;", "inputs", "setMultipleStates", "([Lapp/rive/runtime/kotlin/ChangedInput;)V", "textRunName", "getTextRunValue", "(Ljava/lang/String;)Ljava/lang/String;", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", "textValue", "setTextRunValue", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getVolume", "()Ljava/lang/Float;", "setVolume", "(F)V", "resId", "artboardName", "autoplay", "autoBind", "Lapp/rive/runtime/kotlin/core/Fit;", "fit", "Lapp/rive/runtime/kotlin/core/Alignment;", "alignment", "setRiveResource", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZZLapp/rive/runtime/kotlin/core/Fit;Lapp/rive/runtime/kotlin/core/Alignment;Lapp/rive/runtime/kotlin/core/Loop;)V", "", "bytes", "setRiveBytes", "([BLjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZZLapp/rive/runtime/kotlin/core/Fit;Lapp/rive/runtime/kotlin/core/Alignment;Lapp/rive/runtime/kotlin/core/Loop;)V", "file", "setRiveFile", "(Lapp/rive/runtime/kotlin/core/File;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZZLapp/rive/runtime/kotlin/core/Fit;Lapp/rive/runtime/kotlin/core/Alignment;Lapp/rive/runtime/kotlin/core/Loop;)V", "Lapp/rive/runtime/kotlin/core/FileAssetLoader;", "assetLoader", "setAssetLoader", "(Lapp/rive/runtime/kotlin/core/FileAssetLoader;)V", "Lapp/rive/runtime/kotlin/renderers/Renderer;", "createRenderer", "()Lapp/rive/runtime/kotlin/renderers/Renderer;", "Landroidx/lifecycle/o;", "createObserver", "()Landroidx/lifecycle/o;", "onAttachedToWindow", "onDetachedFromWindow", "Lapp/rive/runtime/kotlin/controllers/ControllerState;", "saveControllerState", "()Lapp/rive/runtime/kotlin/controllers/ControllerState;", "state", "restoreControllerState", "(Lapp/rive/runtime/kotlin/controllers/ControllerState;)V", "widthMeasureSpec", "heightMeasureSpec", "onMeasure", "(II)V", "listener", "registerListener", "(Lapp/rive/runtime/kotlin/controllers/RiveFileController$Listener;)V", "unregisterListener", "Lapp/rive/runtime/kotlin/controllers/RiveFileController$RiveEventListener;", "addEventListener", "(Lapp/rive/runtime/kotlin/controllers/RiveFileController$RiveEventListener;)V", "removeEventListener", "Landroid/view/MotionEvent;", "event", "onTouchEvent", "(Landroid/view/MotionEvent;)Z", "defaultAutoplay", "Z", "getDefaultAutoplay", "()Z", "Lapp/rive/runtime/kotlin/controllers/RiveFileController;", "controller", "Lapp/rive/runtime/kotlin/controllers/RiveFileController;", "getController", "()Lapp/rive/runtime/kotlin/controllers/RiveFileController;", "setController", "(Lapp/rive/runtime/kotlin/controllers/RiveFileController;)V", "Lapp/rive/runtime/kotlin/RiveAnimationView$RendererAttributes;", "rendererAttributes", "Lapp/rive/runtime/kotlin/RiveAnimationView$RendererAttributes;", "getRendererAttributes", "()Lapp/rive/runtime/kotlin/RiveAnimationView$RendererAttributes;", "getRendererAttributes$annotations", "Landroid/view/Window$OnFrameMetricsAvailableListener;", "frameMetricsListener", "Landroid/view/Window$OnFrameMetricsAvailableListener;", "Landroid/graphics/RectF;", "bounds", "Landroid/graphics/RectF;", "Landroidx/lifecycle/LifecycleOwner;", "lifecycleOwner", "Landroidx/lifecycle/LifecycleOwner;", "touchPassThrough", "getTouchPassThrough", "setTouchPassThrough", "(Z)V", "Landroid/util/SparseBooleanArray;", "pointersInsideView", "Landroid/util/SparseBooleanArray;", "multiTouchEnabled", "getMultiTouchEnabled", "setMultiTouchEnabled", "Lapp/rive/runtime/kotlin/renderers/RiveArtboardRenderer;", "getArtboardRenderer", "()Lapp/rive/runtime/kotlin/renderers/RiveArtboardRenderer;", "artboardRenderer", "getFit", "()Lapp/rive/runtime/kotlin/core/Fit;", "setFit", "(Lapp/rive/runtime/kotlin/core/Fit;)V", "getAlignment", "()Lapp/rive/runtime/kotlin/core/Alignment;", "setAlignment", "(Lapp/rive/runtime/kotlin/core/Alignment;)V", "getLayoutScaleFactor", "setLayoutScaleFactor", "(Ljava/lang/Float;)V", "layoutScaleFactor", "getLayoutScaleFactorAutomatic", "()F", "setLayoutScaleFactorAutomatic$kotlin_release", "layoutScaleFactorAutomatic", "getFile", "()Lapp/rive/runtime/kotlin/core/File;", StackTraceHelper.NAME_KEY, "getArtboardName", "()Ljava/lang/String;", "setArtboardName", "(Ljava/lang/String;)V", "getAutoplay", "setAutoplay", "Lapp/rive/runtime/kotlin/core/LinearAnimationInstance;", "getAnimations", "()Ljava/util/List;", "animations", "Lapp/rive/runtime/kotlin/core/StateMachineInstance;", "getStateMachines", "stateMachines", "Ljava/util/HashSet;", "Lkotlin/collections/HashSet;", "getPlayingAnimations", "()Ljava/util/HashSet;", "playingAnimations", "getPlayingStateMachines", "playingStateMachines", "isPlaying", "Companion", "Builder", "RendererAttributes", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRiveAnimationView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveAnimationView.kt\napp/rive/runtime/kotlin/RiveAnimationView\n+ 2 RiveTextureView.kt\napp/rive/runtime/kotlin/RiveTextureView\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,1291:1\n64#2,8:1292\n1#3:1300\n*S KotlinDebug\n*F\n+ 1 RiveAnimationView.kt\napp/rive/runtime/kotlin/RiveAnimationView\n*L\n193#1:1292,8\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RiveAnimationView extends RiveTextureView implements Observable<RiveFileController.Listener> {
    public static final int SINGLE_TOUCH_ID = 0;
    @NotNull
    public static final String TAG = "RiveAnimationView";
    public static final boolean shouldLoadCDNAssetsDefault = true;
    public static final boolean traceAnimationsDefault = false;
    @NotNull
    private final RectF bounds;
    @NotNull
    private RiveFileController controller;
    private final boolean defaultAutoplay;
    private Window.OnFrameMetricsAvailableListener frameMetricsListener;
    private LifecycleOwner lifecycleOwner;
    private boolean multiTouchEnabled;
    @NotNull
    private final SparseBooleanArray pointersInsideView;
    @NotNull
    private final RendererAttributes rendererAttributes;
    private boolean touchPassThrough;
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int $stable = 8;
    private static final int alignmentIndexDefault = Alignment.CENTER.ordinal();
    private static final int fitIndexDefault = Fit.CONTAIN.ordinal();
    private static final int loopIndexDefault = Loop.AUTO.ordinal();
    private static final int rendererIndexDefault = Rive.INSTANCE.getDefaultRendererType().getValue();

    @Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0018\u0002\n\u0002\b\u0011\b\u0007\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\u0006\u0010T\u001a\u00020UJ\u000e\u0010V\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\u0006J\u000e\u0010X\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\fJ\u000e\u0010Y\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\fJ\u000e\u0010Z\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\u0015J\u000e\u0010[\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\u001bJ\u000e\u0010\\\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\u001bJ\u000e\u0010]\u001a\u00020\u00002\u0006\u0010W\u001a\u00020)J\u000e\u0010^\u001a\u00020\u00002\u0006\u0010W\u001a\u00020/J\u000e\u0010_\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\u001bJ\u000e\u0010`\u001a\u00020\u00002\u0006\u0010W\u001a\u000208J\u000e\u0010a\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\u0001J\u000e\u0010b\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\u001bJ\u000e\u0010c\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\fJ\u000e\u0010d\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\u001bJ\u000e\u0010e\u001a\u00020\u00002\u0006\u0010W\u001a\u00020\u001bR\u001c\u0010\u0005\u001a\u0004\u0018\u00010\u0006X\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\nR\u001c\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\r\u0010\u000e\"\u0004\b\u000f\u0010\u0010R\u001c\u0010\u0011\u001a\u0004\u0018\u00010\fX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0012\u0010\u000e\"\u0004\b\u0013\u0010\u0010R\u001c\u0010\u0014\u001a\u0004\u0018\u00010\u0015X\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0016\u0010\u0017\"\u0004\b\u0018\u0010\u0019R\u001a\u0010\u001a\u001a\u00020\u001bX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001c\u0010\u001d\"\u0004\b\u001e\u0010\u001fR\u001e\u0010 \u001a\u0004\u0018\u00010\u001bX\u0080\u000e¢\u0006\u0010\n\u0002\u0010%\u001a\u0004\b!\u0010\"\"\u0004\b#\u0010$R\u0014\u0010\u0002\u001a\u00020\u0003X\u0080\u0004¢\u0006\b\n\u0000\u001a\u0004\b&\u0010'R\u001c\u0010(\u001a\u0004\u0018\u00010)X\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b*\u0010+\"\u0004\b,\u0010-R\u001c\u0010.\u001a\u0004\u0018\u00010/X\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b0\u00101\"\u0004\b2\u00103R\u001a\u00104\u001a\u00020\u001bX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b5\u0010\u001d\"\u0004\b6\u0010\u001fR\u001c\u00107\u001a\u0004\u0018\u000108X\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b9\u0010:\"\u0004\b;\u0010<R\u001c\u0010=\u001a\u0004\u0018\u00010\u0001X\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b>\u0010?\"\u0004\b@\u0010AR\u001c\u0010B\u001a\u0004\u0018\u00010CX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\bD\u0010E\"\u0004\bF\u0010GR\u001a\u0010H\u001a\u00020\u001bX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\bI\u0010\u001d\"\u0004\bJ\u0010\u001fR\u001c\u0010K\u001a\u0004\u0018\u00010\fX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\bL\u0010\u000e\"\u0004\bM\u0010\u0010R\u001a\u0010N\u001a\u00020\u001bX\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\bO\u0010\u001d\"\u0004\bP\u0010\u001fR\u001e\u0010Q\u001a\u0004\u0018\u00010\u001bX\u0080\u000e¢\u0006\u0010\n\u0002\u0010%\u001a\u0004\bR\u0010\"\"\u0004\bS\u0010$¨\u0006f"}, d2 = {"Lapp/rive/runtime/kotlin/RiveAnimationView$Builder;", "", "context", "Landroid/content/Context;", "(Landroid/content/Context;)V", "alignment", "Lapp/rive/runtime/kotlin/core/Alignment;", "getAlignment$kotlin_release", "()Lapp/rive/runtime/kotlin/core/Alignment;", "setAlignment$kotlin_release", "(Lapp/rive/runtime/kotlin/core/Alignment;)V", "animationName", "", "getAnimationName$kotlin_release", "()Ljava/lang/String;", "setAnimationName$kotlin_release", "(Ljava/lang/String;)V", "artboardName", "getArtboardName$kotlin_release", "setArtboardName$kotlin_release", "assetLoader", "Lapp/rive/runtime/kotlin/core/FileAssetLoader;", "getAssetLoader$kotlin_release", "()Lapp/rive/runtime/kotlin/core/FileAssetLoader;", "setAssetLoader$kotlin_release", "(Lapp/rive/runtime/kotlin/core/FileAssetLoader;)V", "autoBind", "", "getAutoBind$kotlin_release", "()Z", "setAutoBind$kotlin_release", "(Z)V", "autoplay", "getAutoplay$kotlin_release", "()Ljava/lang/Boolean;", "setAutoplay$kotlin_release", "(Ljava/lang/Boolean;)V", "Ljava/lang/Boolean;", "getContext$kotlin_release", "()Landroid/content/Context;", "fit", "Lapp/rive/runtime/kotlin/core/Fit;", "getFit$kotlin_release", "()Lapp/rive/runtime/kotlin/core/Fit;", "setFit$kotlin_release", "(Lapp/rive/runtime/kotlin/core/Fit;)V", "loop", "Lapp/rive/runtime/kotlin/core/Loop;", "getLoop$kotlin_release", "()Lapp/rive/runtime/kotlin/core/Loop;", "setLoop$kotlin_release", "(Lapp/rive/runtime/kotlin/core/Loop;)V", "multiTouchEnabled", "getMultiTouchEnabled$kotlin_release", "setMultiTouchEnabled$kotlin_release", "rendererType", "Lapp/rive/runtime/kotlin/core/RendererType;", "getRendererType$kotlin_release", "()Lapp/rive/runtime/kotlin/core/RendererType;", "setRendererType$kotlin_release", "(Lapp/rive/runtime/kotlin/core/RendererType;)V", "resource", "getResource$kotlin_release", "()Ljava/lang/Object;", "setResource$kotlin_release", "(Ljava/lang/Object;)V", "resourceType", "Lapp/rive/runtime/kotlin/ResourceType;", "getResourceType$kotlin_release", "()Lapp/rive/runtime/kotlin/ResourceType;", "setResourceType$kotlin_release", "(Lapp/rive/runtime/kotlin/ResourceType;)V", "shouldLoadCDNAssets", "getShouldLoadCDNAssets$kotlin_release", "setShouldLoadCDNAssets$kotlin_release", "stateMachineName", "getStateMachineName$kotlin_release", "setStateMachineName$kotlin_release", "touchPassThrough", "getTouchPassThrough$kotlin_release", "setTouchPassThrough$kotlin_release", "traceAnimations", "getTraceAnimations$kotlin_release", "setTraceAnimations$kotlin_release", "build", "Lapp/rive/runtime/kotlin/RiveAnimationView;", "setAlignment", "value", "setAnimationName", "setArtboardName", "setAssetLoader", "setAutoBind", "setAutoplay", "setFit", "setLoop", "setMultiTouchEnabled", "setRendererType", "setResource", "setShouldLoadCDNAssets", "setStateMachineName", "setTouchPassThrough", "setTraceAnimations", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nRiveAnimationView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveAnimationView.kt\napp/rive/runtime/kotlin/RiveAnimationView$Builder\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,1291:1\n1#2:1292\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Builder {
        public static final int $stable = 8;
        private Alignment alignment;
        private String animationName;
        private String artboardName;
        private FileAssetLoader assetLoader;
        private boolean autoBind;
        private Boolean autoplay;
        @NotNull
        private final Context context;
        private Fit fit;
        private Loop loop;
        private boolean multiTouchEnabled;
        private RendererType rendererType;
        private Object resource;
        private ResourceType resourceType;
        private boolean shouldLoadCDNAssets;
        private String stateMachineName;
        private boolean touchPassThrough;
        private Boolean traceAnimations;

        public Builder(@NotNull Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            this.context = context;
            this.shouldLoadCDNAssets = true;
        }

        @NotNull
        public final RiveAnimationView build() {
            return new RiveAnimationView(this);
        }

        public final Alignment getAlignment$kotlin_release() {
            return this.alignment;
        }

        public final String getAnimationName$kotlin_release() {
            return this.animationName;
        }

        public final String getArtboardName$kotlin_release() {
            return this.artboardName;
        }

        public final FileAssetLoader getAssetLoader$kotlin_release() {
            return this.assetLoader;
        }

        public final boolean getAutoBind$kotlin_release() {
            return this.autoBind;
        }

        public final Boolean getAutoplay$kotlin_release() {
            return this.autoplay;
        }

        @NotNull
        public final Context getContext$kotlin_release() {
            return this.context;
        }

        public final Fit getFit$kotlin_release() {
            return this.fit;
        }

        public final Loop getLoop$kotlin_release() {
            return this.loop;
        }

        public final boolean getMultiTouchEnabled$kotlin_release() {
            return this.multiTouchEnabled;
        }

        public final RendererType getRendererType$kotlin_release() {
            return this.rendererType;
        }

        public final Object getResource$kotlin_release() {
            return this.resource;
        }

        public final ResourceType getResourceType$kotlin_release() {
            return this.resourceType;
        }

        public final boolean getShouldLoadCDNAssets$kotlin_release() {
            return this.shouldLoadCDNAssets;
        }

        public final String getStateMachineName$kotlin_release() {
            return this.stateMachineName;
        }

        public final boolean getTouchPassThrough$kotlin_release() {
            return this.touchPassThrough;
        }

        public final Boolean getTraceAnimations$kotlin_release() {
            return this.traceAnimations;
        }

        @NotNull
        public final Builder setAlignment(@NotNull Alignment value) {
            Intrinsics.checkNotNullParameter(value, "value");
            this.alignment = value;
            return this;
        }

        public final void setAlignment$kotlin_release(Alignment alignment) {
            this.alignment = alignment;
        }

        @NotNull
        public final Builder setAnimationName(@NotNull String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            this.animationName = value;
            return this;
        }

        public final void setAnimationName$kotlin_release(String str) {
            this.animationName = str;
        }

        @NotNull
        public final Builder setArtboardName(@NotNull String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            this.artboardName = value;
            return this;
        }

        public final void setArtboardName$kotlin_release(String str) {
            this.artboardName = str;
        }

        @NotNull
        public final Builder setAssetLoader(@NotNull FileAssetLoader value) {
            Intrinsics.checkNotNullParameter(value, "value");
            this.assetLoader = value;
            return this;
        }

        public final void setAssetLoader$kotlin_release(FileAssetLoader fileAssetLoader) {
            this.assetLoader = fileAssetLoader;
        }

        @NotNull
        public final Builder setAutoBind(boolean z10) {
            this.autoBind = z10;
            return this;
        }

        public final void setAutoBind$kotlin_release(boolean z10) {
            this.autoBind = z10;
        }

        @NotNull
        public final Builder setAutoplay(boolean z10) {
            this.autoplay = Boolean.valueOf(z10);
            return this;
        }

        public final void setAutoplay$kotlin_release(Boolean bool) {
            this.autoplay = bool;
        }

        @NotNull
        public final Builder setFit(@NotNull Fit value) {
            Intrinsics.checkNotNullParameter(value, "value");
            this.fit = value;
            return this;
        }

        public final void setFit$kotlin_release(Fit fit) {
            this.fit = fit;
        }

        @NotNull
        public final Builder setLoop(@NotNull Loop value) {
            Intrinsics.checkNotNullParameter(value, "value");
            this.loop = value;
            return this;
        }

        public final void setLoop$kotlin_release(Loop loop) {
            this.loop = loop;
        }

        @NotNull
        public final Builder setMultiTouchEnabled(boolean z10) {
            this.multiTouchEnabled = z10;
            return this;
        }

        public final void setMultiTouchEnabled$kotlin_release(boolean z10) {
            this.multiTouchEnabled = z10;
        }

        @NotNull
        public final Builder setRendererType(@NotNull RendererType value) {
            Intrinsics.checkNotNullParameter(value, "value");
            this.rendererType = value;
            return this;
        }

        public final void setRendererType$kotlin_release(RendererType rendererType) {
            this.rendererType = rendererType;
        }

        @NotNull
        public final Builder setResource(@NotNull Object value) {
            Intrinsics.checkNotNullParameter(value, "value");
            this.resourceType = ResourceType.Companion.makeMaybeResource(value);
            this.resource = value;
            return this;
        }

        public final void setResource$kotlin_release(Object obj) {
            this.resource = obj;
        }

        public final void setResourceType$kotlin_release(ResourceType resourceType) {
            this.resourceType = resourceType;
        }

        @NotNull
        public final Builder setShouldLoadCDNAssets(boolean z10) {
            this.shouldLoadCDNAssets = z10;
            return this;
        }

        public final void setShouldLoadCDNAssets$kotlin_release(boolean z10) {
            this.shouldLoadCDNAssets = z10;
        }

        @NotNull
        public final Builder setStateMachineName(@NotNull String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            this.stateMachineName = value;
            return this;
        }

        public final void setStateMachineName$kotlin_release(String str) {
            this.stateMachineName = str;
        }

        @NotNull
        public final Builder setTouchPassThrough(boolean z10) {
            this.touchPassThrough = z10;
            return this;
        }

        public final void setTouchPassThrough$kotlin_release(boolean z10) {
            this.touchPassThrough = z10;
        }

        @NotNull
        public final Builder setTraceAnimations(boolean z10) {
            this.traceAnimations = Boolean.valueOf(z10);
            return this;
        }

        public final void setTraceAnimations$kotlin_release(Boolean bool) {
            this.traceAnimations = bool;
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0006X\u0086T¢\u0006\u0002\n\u0000R\u0011\u0010\u0007\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\n\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\tR\u0011\u0010\f\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\tR\u0011\u0010\u000e\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\tR\u000e\u0010\u0010\u001a\u00020\u0011X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0011X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0013"}, d2 = {"Lapp/rive/runtime/kotlin/RiveAnimationView$Companion;", "", "()V", "SINGLE_TOUCH_ID", "", "TAG", "", "alignmentIndexDefault", "getAlignmentIndexDefault", "()I", "fitIndexDefault", "getFitIndexDefault", "loopIndexDefault", "getLoopIndexDefault", "rendererIndexDefault", "getRendererIndexDefault", "shouldLoadCDNAssetsDefault", "", "traceAnimationsDefault", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final int getAlignmentIndexDefault() {
            return RiveAnimationView.alignmentIndexDefault;
        }

        public final int getFitIndexDefault() {
            return RiveAnimationView.fitIndexDefault;
        }

        public final int getLoopIndexDefault() {
            return RiveAnimationView.loopIndexDefault;
        }

        public final int getRendererIndexDefault() {
            return RiveAnimationView.rendererIndexDefault;
        }

        private Companion() {
        }
    }

    public /* synthetic */ RiveAnimationView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    public static /* synthetic */ void getRendererAttributes$annotations() {
    }

    private final boolean inBounds(float f10, float f11) {
        if (f10 >= 0.0f && f11 >= 0.0f && f10 < getWidth() && f11 < getHeight()) {
            return true;
        }
        return false;
    }

    private final void loadFileFromResource(Function1<? super File, Unit> function1) {
        ResourceType resource = this.rendererAttributes.getResource();
        if (resource == null) {
            Log.w(TAG, "loadResource: no resource to load");
        } else if (resource instanceof ResourceType.ResourceRiveFile) {
            function1.invoke(((ResourceType.ResourceRiveFile) resource).getFile());
        } else if (resource instanceof ResourceType.ResourceUrl) {
            loadFromNetwork(((ResourceType.ResourceUrl) resource).getUrl(), function1);
        } else if (resource instanceof ResourceType.ResourceBytes) {
            File file = new File(((ResourceType.ResourceBytes) resource).getBytes(), this.rendererAttributes.getRendererType(), this.rendererAttributes.getAssetLoader());
            function1.invoke(file);
            file.release();
        } else if (resource instanceof ResourceType.ResourceId) {
            InputStream openRawResource = getResources().openRawResource(((ResourceType.ResourceId) resource).getId());
            try {
                Intrinsics.checkNotNull(openRawResource);
                File file2 = new File(zr.b.c(openRawResource), this.rendererAttributes.getRendererType(), this.rendererAttributes.getAssetLoader());
                function1.invoke(file2);
                file2.release();
                c.a(openRawResource, null);
            } finally {
            }
        }
    }

    private final void loadFromNetwork(final String str, final Function1<? super File, Unit> function1) {
        o a10 = k.a(getContext().getApplicationContext());
        Intrinsics.checkNotNullExpressionValue(a10, "newRequestQueue(...)");
        a10.a(new RiveFileRequest(str, this.rendererAttributes.getRendererType(), new p.b() { // from class: app.rive.runtime.kotlin.a
            @Override // com.android.volley.p.b
            public final void a(Object obj) {
                RiveAnimationView.loadFromNetwork$lambda$4(Function1.this, (File) obj);
            }
        }, new p.a() { // from class: app.rive.runtime.kotlin.b
            @Override // com.android.volley.p.a
            public final void a(u uVar) {
                RiveAnimationView.loadFromNetwork$lambda$5(str, uVar);
            }
        }, this.rendererAttributes.getAssetLoader()));
    }

    public static final void loadFromNetwork$lambda$4(Function1 onComplete, File file) {
        Intrinsics.checkNotNullParameter(onComplete, "$onComplete");
        Intrinsics.checkNotNull(file);
        onComplete.invoke(file);
        file.release();
    }

    public static final void loadFromNetwork$lambda$5(String url, u uVar) {
        Intrinsics.checkNotNullParameter(url, "$url");
        throw new IOException("Unable to download Rive file " + url);
    }

    private static final RiveAnimationView$onTouchEvent$PointerInfo onTouchEvent$pointerInfoAt(RiveAnimationView riveAnimationView, MotionEvent motionEvent, int i10) {
        int i11;
        if (riveAnimationView.getMultiTouchEnabled()) {
            i11 = motionEvent.getPointerId(i10);
        } else {
            i11 = 0;
        }
        return new RiveAnimationView$onTouchEvent$PointerInfo(i11, motionEvent.getX(i10), motionEvent.getY(i10));
    }

    public static /* synthetic */ void pause$default(RiveAnimationView riveAnimationView, List list, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: pause");
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        riveAnimationView.pause(list, z10);
    }

    public static /* synthetic */ void play$default(RiveAnimationView riveAnimationView, Loop loop, Direction direction, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: play");
        }
        if ((i10 & 1) != 0) {
            loop = Loop.AUTO;
        }
        if ((i10 & 2) != 0) {
            direction = Direction.AUTO;
        }
        if ((i10 & 4) != 0) {
            z10 = true;
        }
        riveAnimationView.play(loop, direction, z10);
    }

    public static /* synthetic */ void setRiveBytes$default(RiveAnimationView riveAnimationView, byte[] bArr, String str, String str2, String str3, boolean z10, boolean z11, Fit fit, Alignment alignment, Loop loop, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                str = null;
            }
            if ((i10 & 4) != 0) {
                str2 = null;
            }
            if ((i10 & 8) != 0) {
                str3 = null;
            }
            if ((i10 & 16) != 0) {
                z10 = riveAnimationView.controller.getAutoplay();
            }
            if ((i10 & 32) != 0) {
                z11 = false;
            }
            if ((i10 & 64) != 0) {
                fit = Fit.Companion.fromIndex(fitIndexDefault);
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                alignment = Alignment.Companion.fromIndex(alignmentIndexDefault);
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                loop = Loop.Companion.fromIndex(loopIndexDefault);
            }
            riveAnimationView.setRiveBytes(bArr, str, str2, str3, z10, z11, fit, alignment, loop);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setRiveBytes");
    }

    public static /* synthetic */ void setRiveFile$default(RiveAnimationView riveAnimationView, File file, String str, String str2, String str3, boolean z10, boolean z11, Fit fit, Alignment alignment, Loop loop, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                str = null;
            }
            if ((i10 & 4) != 0) {
                str2 = null;
            }
            if ((i10 & 8) != 0) {
                str3 = null;
            }
            if ((i10 & 16) != 0) {
                z10 = riveAnimationView.controller.getAutoplay();
            }
            if ((i10 & 32) != 0) {
                z11 = false;
            }
            if ((i10 & 64) != 0) {
                fit = Fit.Companion.fromIndex(fitIndexDefault);
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                alignment = Alignment.Companion.fromIndex(alignmentIndexDefault);
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                loop = Loop.Companion.fromIndex(loopIndexDefault);
            }
            riveAnimationView.setRiveFile(file, str, str2, str3, z10, z11, fit, alignment, loop);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setRiveFile");
    }

    public static /* synthetic */ void setRiveResource$default(RiveAnimationView riveAnimationView, int i10, String str, String str2, String str3, boolean z10, boolean z11, Fit fit, Alignment alignment, Loop loop, int i11, Object obj) {
        if (obj == null) {
            if ((i11 & 2) != 0) {
                str = null;
            }
            if ((i11 & 4) != 0) {
                str2 = null;
            }
            if ((i11 & 8) != 0) {
                str3 = null;
            }
            if ((i11 & 16) != 0) {
                z10 = riveAnimationView.controller.getAutoplay();
            }
            if ((i11 & 32) != 0) {
                z11 = false;
            }
            if ((i11 & 64) != 0) {
                fit = Fit.Companion.fromIndex(fitIndexDefault);
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                alignment = Alignment.Companion.fromIndex(alignmentIndexDefault);
            }
            if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                loop = Loop.Companion.fromIndex(loopIndexDefault);
            }
            riveAnimationView.setRiveResource(i10, str, str2, str3, z10, z11, fit, alignment, loop);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setRiveResource");
    }

    @TargetApi(ChatViewRecyclerTypes.SURVEY_INDICATION)
    private final void startFrameMetrics() {
        RendererMetrics rendererMetrics = new RendererMetrics(getActivity());
        getActivity().getWindow().addOnFrameMetricsAvailableListener(rendererMetrics, new Handler(Looper.getMainLooper()));
        this.frameMetricsListener = rendererMetrics;
    }

    public static /* synthetic */ void stop$default(RiveAnimationView riveAnimationView, List list, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: stop");
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        riveAnimationView.stop(list, z10);
    }

    @TargetApi(ChatViewRecyclerTypes.SURVEY_INDICATION)
    private final void stopFrameMetrics() {
        Window.OnFrameMetricsAvailableListener onFrameMetricsAvailableListener = this.frameMetricsListener;
        if (onFrameMetricsAvailableListener != null) {
            getActivity().getWindow().removeOnFrameMetricsAvailableListener(onFrameMetricsAvailableListener);
        }
    }

    private final void validateLifecycleOwner() {
        Lifecycle lifecycle;
        LifecycleOwner a10 = r0.a(this);
        if (a10 != null && !Intrinsics.areEqual(a10, this.lifecycleOwner)) {
            LifecycleOwner lifecycleOwner = this.lifecycleOwner;
            if (lifecycleOwner != null && (lifecycle = lifecycleOwner.getLifecycle()) != null) {
                lifecycle.d(getLifecycleObserver());
            }
            this.lifecycleOwner = a10;
            Lifecycle lifecycle2 = a10.getLifecycle();
            if (lifecycle2 != null) {
                lifecycle2.a(getLifecycleObserver());
            }
        }
    }

    public final void addEventListener(@NotNull RiveFileController.RiveEventListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.controller.addEventListener(listener);
    }

    @Override // app.rive.runtime.kotlin.RiveTextureView
    @NotNull
    public androidx.lifecycle.o createObserver() {
        return new RiveViewLifecycleObserver(CollectionsKt.j1(CollectionsKt.q(this.controller, this.rendererAttributes.getAssetLoader())));
    }

    @Override // app.rive.runtime.kotlin.RiveTextureView
    @NotNull
    protected Renderer createRenderer() {
        return new RiveArtboardRenderer(this.rendererAttributes.getRiveTraceAnimations(), this.rendererAttributes.getRendererType(), this.controller);
    }

    public final void fireState(@NotNull String stateMachineName, @NotNull String inputName) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        RiveFileController.fireState$default(this.controller, stateMachineName, inputName, null, 4, null);
    }

    public final void fireStateAtPath(@NotNull String inputName, @NotNull String path) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        this.controller.fireStateAtPath(inputName, path);
    }

    @NotNull
    public final Alignment getAlignment() {
        return this.controller.getAlignment();
    }

    @NotNull
    public final List<LinearAnimationInstance> getAnimations() {
        return this.controller.getAnimations();
    }

    public final String getArtboardName() {
        Artboard activeArtboard = this.controller.getActiveArtboard();
        if (activeArtboard != null) {
            return activeArtboard.getName();
        }
        return null;
    }

    public final RiveArtboardRenderer getArtboardRenderer() {
        boolean z10;
        String str;
        Renderer renderer = getRenderer();
        if (renderer == null) {
            z10 = true;
        } else {
            z10 = renderer instanceof RiveArtboardRenderer;
        }
        if (z10) {
            return (RiveArtboardRenderer) getRenderer();
        }
        Renderer renderer2 = getRenderer();
        if (renderer2 != null) {
            str = renderer2.getClass().getSimpleName();
        } else {
            str = null;
        }
        if (str == null) {
            str = "NULL";
        }
        throw new w("Expected RiveArtboardRenderer but got " + str);
    }

    public final boolean getAutoplay() {
        return this.controller.getAutoplay();
    }

    @NotNull
    public final RiveFileController getController() {
        return this.controller;
    }

    public boolean getDefaultAutoplay() {
        return this.defaultAutoplay;
    }

    public final File getFile() {
        return this.controller.getFile();
    }

    @NotNull
    public final Fit getFit() {
        return this.controller.getFit();
    }

    public final Float getLayoutScaleFactor() {
        return this.controller.getLayoutScaleFactor();
    }

    public final float getLayoutScaleFactorAutomatic() {
        return this.controller.getLayoutScaleFactorAutomatic();
    }

    public boolean getMultiTouchEnabled() {
        return this.multiTouchEnabled;
    }

    @NotNull
    public final HashSet<LinearAnimationInstance> getPlayingAnimations() {
        return this.controller.getPlayingAnimations();
    }

    @NotNull
    public final HashSet<StateMachineInstance> getPlayingStateMachines() {
        return this.controller.getPlayingStateMachines();
    }

    @NotNull
    public final RendererAttributes getRendererAttributes() {
        return this.rendererAttributes;
    }

    @NotNull
    public final List<StateMachineInstance> getStateMachines() {
        return this.controller.getStateMachines();
    }

    public final String getTextRunValue(@NotNull String textRunName) {
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        return this.controller.getTextRunValue(textRunName);
    }

    public boolean getTouchPassThrough() {
        return this.touchPassThrough;
    }

    public final Float getVolume() {
        return this.controller.getVolume();
    }

    public final boolean isPlaying() {
        Renderer renderer = getRenderer();
        if (renderer == null || !renderer.isPlaying()) {
            return false;
        }
        return true;
    }

    @Override // app.rive.runtime.kotlin.RiveTextureView, android.view.TextureView, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        validateLifecycleOwner();
        if (this.controller.getFile() == null) {
            loadFileFromResource(new Function1<File, Unit>() { // from class: app.rive.runtime.kotlin.RiveAnimationView$onAttachedToWindow$1
                /* JADX INFO: Access modifiers changed from: package-private */
                {
                    super(1);
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    invoke((File) obj);
                    return Unit.f31988a;
                }

                public final void invoke(@NotNull File it) {
                    Intrinsics.checkNotNullParameter(it, "it");
                    RiveAnimationView.this.getController().setFile(it);
                    RiveAnimationView.this.getController().setupScene$kotlin_release(RiveAnimationView.this.getRendererAttributes());
                }
            });
        }
        Renderer renderer = getRenderer();
        Intrinsics.checkNotNull(renderer);
        if (renderer.getTrace()) {
            startFrameMetrics();
        }
        this.controller.setActive(true);
        Renderer renderer2 = getRenderer();
        Intrinsics.checkNotNull(renderer2);
        renderer2.start();
    }

    @Override // app.rive.runtime.kotlin.RiveTextureView, android.view.View
    public void onDetachedFromWindow() {
        this.controller.setActive(false);
        stopFrameMetrics();
        super.onDetachedFromWindow();
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        int size;
        int size2;
        super.onMeasure(i10, i11);
        if (getRenderer() == null) {
            Log.w(TAG, "onMeasure(): Renderer not instantiated yet.");
            return;
        }
        int mode = View.MeasureSpec.getMode(i10);
        if (mode == 0) {
            size = (int) this.controller.getArtboardBounds().width();
        } else {
            size = View.MeasureSpec.getSize(i10);
        }
        int mode2 = View.MeasureSpec.getMode(i11);
        if (mode2 == 0) {
            size2 = (int) this.controller.getArtboardBounds().height();
        } else {
            size2 = View.MeasureSpec.getSize(i11);
        }
        this.controller.setLayoutScaleFactorAutomatic$kotlin_release(getResources().getDisplayMetrics().density);
        this.controller.getRequireArtboardResize$kotlin_release().set(true);
        this.bounds.set(0.0f, 0.0f, size, size2);
        RectF calculateRequiredBounds = Rive.INSTANCE.calculateRequiredBounds(this.controller.getFit(), this.controller.getAlignment(), this.bounds, this.controller.getArtboardBounds(), this.controller.getLayoutScaleFactorActive$kotlin_release());
        if (mode != Integer.MIN_VALUE) {
            if (mode != 1073741824) {
                size = (int) calculateRequiredBounds.width();
            }
        } else {
            size = Math.min((int) calculateRequiredBounds.width(), size);
        }
        if (mode2 != Integer.MIN_VALUE) {
            if (mode2 != 1073741824) {
                size2 = (int) calculateRequiredBounds.height();
            }
        } else {
            size2 = Math.min((int) calculateRequiredBounds.height(), size2);
        }
        setMeasuredDimension(size, size2);
    }

    @Override // app.rive.runtime.kotlin.RiveTextureView, android.view.TextureView.SurfaceTextureListener
    public void onSurfaceTextureAvailable(@NotNull SurfaceTexture surfaceTexture, int i10, int i11) {
        Intrinsics.checkNotNullParameter(surfaceTexture, "surfaceTexture");
        super.onSurfaceTextureAvailable(surfaceTexture, i10, i11);
        this.controller.setTargetBounds(new RectF(0.0f, 0.0f, i10, i11));
    }

    @Override // app.rive.runtime.kotlin.RiveTextureView, android.view.TextureView.SurfaceTextureListener
    public void onSurfaceTextureSizeChanged(@NotNull SurfaceTexture surface, int i10, int i11) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        super.onSurfaceTextureSizeChanged(surface, i10, i11);
        this.controller.setTargetBounds(new RectF(0.0f, 0.0f, i10, i11));
    }

    @Override // android.view.View
    public boolean onTouchEvent(@NotNull MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        int i10 = 1;
        boolean z10 = !getTouchPassThrough();
        int actionMasked = event.getActionMasked();
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 3) {
                        if (actionMasked != 5) {
                            if (actionMasked != 6) {
                                Log.w(TAG, "onTouchEvent(): Renderer not instantiated yet.");
                                return z10;
                            } else if (getMultiTouchEnabled()) {
                                RiveAnimationView$onTouchEvent$PointerInfo onTouchEvent$pointerInfoAt = onTouchEvent$pointerInfoAt(this, event, event.getActionIndex());
                                int component1 = onTouchEvent$pointerInfoAt.component1();
                                float component2 = onTouchEvent$pointerInfoAt.component2();
                                float component3 = onTouchEvent$pointerInfoAt.component3();
                                this.controller.pointerEvent(PointerEvents.POINTER_UP, component1, component2, component3);
                                this.controller.pointerEvent(PointerEvents.POINTER_EXIT, component1, component2, component3);
                                if (this.pointersInsideView.get(component1)) {
                                    performClick();
                                }
                                this.pointersInsideView.delete(component1);
                                return z10;
                            }
                        } else if (getMultiTouchEnabled()) {
                            RiveAnimationView$onTouchEvent$PointerInfo onTouchEvent$pointerInfoAt2 = onTouchEvent$pointerInfoAt(this, event, event.getActionIndex());
                            int component12 = onTouchEvent$pointerInfoAt2.component1();
                            float component22 = onTouchEvent$pointerInfoAt2.component2();
                            float component32 = onTouchEvent$pointerInfoAt2.component3();
                            this.pointersInsideView.put(component12, inBounds(component22, component32));
                            this.controller.pointerEvent(PointerEvents.POINTER_DOWN, component12, component22, component32);
                            return z10;
                        }
                    } else {
                        m0 a10 = f.a(this.pointersInsideView);
                        while (a10.hasNext()) {
                            int nextInt = a10.nextInt();
                            this.controller.pointerEvent(PointerEvents.POINTER_UP, nextInt, -1.0f, -1.0f);
                            this.controller.pointerEvent(PointerEvents.POINTER_EXIT, nextInt, -1.0f, -1.0f);
                        }
                        this.pointersInsideView.clear();
                        return z10;
                    }
                } else {
                    if (getMultiTouchEnabled()) {
                        i10 = event.getPointerCount();
                    }
                    for (int i11 = 0; i11 < i10; i11++) {
                        RiveAnimationView$onTouchEvent$PointerInfo onTouchEvent$pointerInfoAt3 = onTouchEvent$pointerInfoAt(this, event, i11);
                        int component13 = onTouchEvent$pointerInfoAt3.component1();
                        float component23 = onTouchEvent$pointerInfoAt3.component2();
                        float component33 = onTouchEvent$pointerInfoAt3.component3();
                        boolean z11 = this.pointersInsideView.get(component13);
                        boolean inBounds = inBounds(component23, component33);
                        if (z11 && !inBounds) {
                            this.controller.pointerEvent(PointerEvents.POINTER_EXIT, component13, component23, component33);
                        }
                        this.pointersInsideView.put(component13, inBounds);
                        this.controller.pointerEvent(PointerEvents.POINTER_MOVE, component13, component23, component33);
                    }
                }
                return z10;
            }
            RiveAnimationView$onTouchEvent$PointerInfo onTouchEvent$pointerInfoAt4 = onTouchEvent$pointerInfoAt(this, event, event.getActionIndex());
            int component14 = onTouchEvent$pointerInfoAt4.component1();
            float component24 = onTouchEvent$pointerInfoAt4.component2();
            float component34 = onTouchEvent$pointerInfoAt4.component3();
            this.controller.pointerEvent(PointerEvents.POINTER_UP, component14, component24, component34);
            this.controller.pointerEvent(PointerEvents.POINTER_EXIT, component14, component24, component34);
            if (this.pointersInsideView.get(component14)) {
                performClick();
            }
            this.pointersInsideView.clear();
            return z10;
        }
        RiveAnimationView$onTouchEvent$PointerInfo onTouchEvent$pointerInfoAt5 = onTouchEvent$pointerInfoAt(this, event, event.getActionIndex());
        int component15 = onTouchEvent$pointerInfoAt5.component1();
        float component25 = onTouchEvent$pointerInfoAt5.component2();
        float component35 = onTouchEvent$pointerInfoAt5.component3();
        this.pointersInsideView.put(component15, inBounds(component25, component35));
        this.controller.pointerEvent(PointerEvents.POINTER_DOWN, component15, component25, component35);
        return z10;
    }

    public final void pause() {
        RiveArtboardRenderer artboardRenderer = getArtboardRenderer();
        if (artboardRenderer != null) {
            artboardRenderer.stop();
        }
        this.controller.pause();
        stopFrameMetrics();
    }

    public final void play(@NotNull Loop loop, @NotNull Direction direction, boolean z10) {
        Intrinsics.checkNotNullParameter(loop, "loop");
        Intrinsics.checkNotNullParameter(direction, "direction");
        this.rendererAttributes.setLoop(loop);
        this.controller.play(loop, direction, z10);
    }

    public final void removeEventListener(@NotNull RiveFileController.RiveEventListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.controller.removeEventListener(listener);
    }

    public final void reset() {
        RiveArtboardRenderer artboardRenderer = getArtboardRenderer();
        if (artboardRenderer != null) {
            artboardRenderer.reset();
        }
    }

    @ControllerStateManagement
    public final void restoreControllerState(@NotNull ControllerState state) {
        Intrinsics.checkNotNullParameter(state, "state");
        this.controller.restoreControllerState(state);
    }

    @ControllerStateManagement
    public final ControllerState saveControllerState() {
        this.rendererAttributes.setResource(null);
        return this.controller.saveControllerState();
    }

    public final void setAlignment(@NotNull Alignment value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.controller.setAlignment(value);
    }

    public final void setArtboardName(String str) {
        this.controller.selectArtboard(str);
    }

    public final void setAssetLoader(FileAssetLoader fileAssetLoader) {
        RiveViewLifecycleObserver riveViewLifecycleObserver;
        if (!Intrinsics.areEqual(fileAssetLoader, this.rendererAttributes.getAssetLoader())) {
            FileAssetLoader assetLoader = this.rendererAttributes.getAssetLoader();
            this.rendererAttributes.setAssetLoader(fileAssetLoader);
            if (fileAssetLoader != null) {
                fileAssetLoader.acquire();
            }
            if (assetLoader != null) {
                assetLoader.release();
            }
            androidx.lifecycle.o lifecycleObserver = getLifecycleObserver();
            if (lifecycleObserver instanceof RiveViewLifecycleObserver) {
                riveViewLifecycleObserver = (RiveViewLifecycleObserver) lifecycleObserver;
            } else {
                riveViewLifecycleObserver = null;
            }
            if (riveViewLifecycleObserver != null) {
                if (assetLoader != null) {
                    riveViewLifecycleObserver.remove(assetLoader);
                }
                if (fileAssetLoader != null) {
                    riveViewLifecycleObserver.insert(fileAssetLoader);
                }
            }
        }
    }

    public final void setAutoplay(boolean z10) {
        this.controller.setAutoplay(z10);
    }

    public final void setBooleanState(@NotNull String stateMachineName, @NotNull String inputName, boolean z10) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        RiveFileController.setBooleanState$default(this.controller, stateMachineName, inputName, z10, null, 8, null);
    }

    public final void setBooleanStateAtPath(@NotNull String inputName, boolean z10, @NotNull String path) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        this.controller.setBooleanStateAtPath(inputName, z10, path);
    }

    public final void setController(@NotNull RiveFileController riveFileController) {
        Intrinsics.checkNotNullParameter(riveFileController, "<set-?>");
        this.controller = riveFileController;
    }

    public final void setFit(@NotNull Fit value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.controller.setFit(value);
    }

    public final void setLayoutScaleFactor(Float f10) {
        this.controller.setLayoutScaleFactor(f10);
    }

    public final void setLayoutScaleFactorAutomatic$kotlin_release(float f10) {
        this.controller.setLayoutScaleFactorAutomatic$kotlin_release(f10);
    }

    public void setMultiTouchEnabled(boolean z10) {
        this.multiTouchEnabled = z10;
        if (!z10) {
            m0 a10 = f.a(this.pointersInsideView);
            while (a10.hasNext()) {
                int nextInt = a10.nextInt();
                if (nextInt != 0) {
                    this.controller.pointerEvent(PointerEvents.POINTER_UP, nextInt, -1.0f, -1.0f);
                    this.controller.pointerEvent(PointerEvents.POINTER_EXIT, nextInt, -1.0f, -1.0f);
                    this.pointersInsideView.delete(nextInt);
                }
            }
        }
    }

    public final void setMultipleStates(@NotNull ChangedInput... inputs) {
        Intrinsics.checkNotNullParameter(inputs, "inputs");
        this.controller.queueInputs$kotlin_release((ChangedInput[]) Arrays.copyOf(inputs, inputs.length));
    }

    public final void setNumberState(@NotNull String stateMachineName, @NotNull String inputName, float f10) {
        Intrinsics.checkNotNullParameter(stateMachineName, "stateMachineName");
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        RiveFileController.setNumberState$default(this.controller, stateMachineName, inputName, f10, null, 8, null);
    }

    public final void setNumberStateAtPath(@NotNull String inputName, float f10, @NotNull String path) {
        Intrinsics.checkNotNullParameter(inputName, "inputName");
        Intrinsics.checkNotNullParameter(path, "path");
        this.controller.setNumberStateAtPath(inputName, f10, path);
    }

    public final void setRiveBytes(@NotNull byte[] bytes, String str, String str2, String str3, boolean z10, boolean z11, @NotNull Fit fit, @NotNull Alignment alignment, @NotNull Loop loop) {
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        Intrinsics.checkNotNullParameter(loop, "loop");
        RendererAttributes rendererAttributes = this.rendererAttributes;
        rendererAttributes.setArtboardName(str);
        rendererAttributes.setAnimationName(str2);
        rendererAttributes.setStateMachineName(str3);
        rendererAttributes.setAutoplay(z10);
        rendererAttributes.setAutoBind(z11);
        rendererAttributes.setFit(fit);
        rendererAttributes.setAlignment(alignment);
        rendererAttributes.setLoop(loop);
        rendererAttributes.setResource(ResourceType.Companion.makeMaybeResource(bytes));
        loadFileFromResource(new Function1<File, Unit>() { // from class: app.rive.runtime.kotlin.RiveAnimationView$setRiveBytes$2
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                invoke((File) obj);
                return Unit.f31988a;
            }

            public final void invoke(@NotNull File it) {
                Intrinsics.checkNotNullParameter(it, "it");
                RiveAnimationView.this.getController().setFile(it);
                RiveAnimationView.this.getController().setupScene$kotlin_release(RiveAnimationView.this.getRendererAttributes());
            }
        });
    }

    public final void setRiveFile(@NotNull File file, String str, String str2, String str3, boolean z10, boolean z11, @NotNull Fit fit, @NotNull Alignment alignment, @NotNull Loop loop) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        Intrinsics.checkNotNullParameter(loop, "loop");
        if (file.getRendererType() == this.rendererAttributes.getRendererType()) {
            RendererAttributes rendererAttributes = this.rendererAttributes;
            rendererAttributes.setArtboardName(str);
            rendererAttributes.setAnimationName(str2);
            rendererAttributes.setStateMachineName(str3);
            rendererAttributes.setAutoplay(z10);
            rendererAttributes.setAutoBind(z11);
            rendererAttributes.setFit(fit);
            rendererAttributes.setAlignment(alignment);
            rendererAttributes.setLoop(loop);
            rendererAttributes.setResource(ResourceType.Companion.makeMaybeResource(file));
            this.controller.setFile(file);
            this.controller.setupScene$kotlin_release(this.rendererAttributes);
            return;
        }
        String name = file.getRendererType().name();
        String name2 = this.rendererAttributes.getRendererType().name();
        throw new RiveException("Incompatible Renderer types: file initialized with " + name + " but View is set up for " + name2);
    }

    public final void setRiveResource(int i10, String str, String str2, String str3, boolean z10, boolean z11, @NotNull Fit fit, @NotNull Alignment alignment, @NotNull Loop loop) {
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        Intrinsics.checkNotNullParameter(loop, "loop");
        RendererAttributes rendererAttributes = this.rendererAttributes;
        rendererAttributes.setArtboardName(str);
        rendererAttributes.setAnimationName(str2);
        rendererAttributes.setStateMachineName(str3);
        rendererAttributes.setAutoplay(z10);
        rendererAttributes.setAutoBind(z11);
        rendererAttributes.setFit(fit);
        rendererAttributes.setAlignment(alignment);
        rendererAttributes.setLoop(loop);
        rendererAttributes.setResource(ResourceType.Companion.makeMaybeResource(Integer.valueOf(i10)));
        loadFileFromResource(new Function1<File, Unit>() { // from class: app.rive.runtime.kotlin.RiveAnimationView$setRiveResource$2
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                invoke((File) obj);
                return Unit.f31988a;
            }

            public final void invoke(@NotNull File it) {
                Intrinsics.checkNotNullParameter(it, "it");
                RiveAnimationView.this.getController().setFile(it);
                RiveAnimationView.this.getController().setupScene$kotlin_release(RiveAnimationView.this.getRendererAttributes());
            }
        });
    }

    public final void setTextRunValue(@NotNull String textRunName, @NotNull String textValue) {
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        Intrinsics.checkNotNullParameter(textValue, "textValue");
        this.controller.setTextRunValue(textRunName, textValue);
    }

    public void setTouchPassThrough(boolean z10) {
        this.touchPassThrough = z10;
    }

    public final void setVolume(float f10) {
        this.controller.setVolume(f10);
    }

    public final void stop() {
        this.controller.stopAnimations();
        stopFrameMetrics();
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RiveAnimationView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Lifecycle lifecycle;
        Intrinsics.checkNotNullParameter(context, "context");
        this.defaultAutoplay = true;
        this.bounds = new RectF();
        LifecycleOwner context2 = getContext();
        while (true) {
            if (!(context2 instanceof ContextWrapper)) {
                context2 = null;
                break;
            } else if (context2 instanceof LifecycleOwner) {
                break;
            } else {
                context2 = ((ContextWrapper) context2).getBaseContext();
            }
        }
        this.lifecycleOwner = context2;
        this.pointersInsideView = new SparseBooleanArray();
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(attributeSet, R.styleable.RiveAnimationView, 0, 0);
        try {
            int resourceId = obtainStyledAttributes.getResourceId(R.styleable.RiveAnimationView_riveResource, -1);
            Object string = obtainStyledAttributes.getString(R.styleable.RiveAnimationView_riveUrl);
            ResourceType.Companion companion = ResourceType.Companion;
            if (resourceId != -1) {
                string = Integer.valueOf(resourceId);
            }
            ResourceType makeMaybeResource = companion.makeMaybeResource(string);
            RendererAttributes.Companion companion2 = RendererAttributes.Companion;
            String string2 = obtainStyledAttributes.getString(R.styleable.RiveAnimationView_riveAssetLoaderClass);
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            FileAssetLoader assetLoaderFrom = companion2.assetLoaderFrom(string2, applicationContext);
            boolean z10 = obtainStyledAttributes.getBoolean(R.styleable.RiveAnimationView_riveShouldLoadCDNAssets, true);
            setTouchPassThrough(obtainStyledAttributes.getBoolean(R.styleable.RiveAnimationView_riveTouchPassThrough, false));
            setMultiTouchEnabled(obtainStyledAttributes.getBoolean(R.styleable.RiveAnimationView_riveMultiTouchEnabled, false));
            int integer = obtainStyledAttributes.getInteger(R.styleable.RiveAnimationView_riveAlignment, alignmentIndexDefault);
            int integer2 = obtainStyledAttributes.getInteger(R.styleable.RiveAnimationView_riveFit, fitIndexDefault);
            int integer3 = obtainStyledAttributes.getInteger(R.styleable.RiveAnimationView_riveLoop, loopIndexDefault);
            boolean z11 = obtainStyledAttributes.getBoolean(R.styleable.RiveAnimationView_riveAutoPlay, getDefaultAutoplay());
            boolean z12 = obtainStyledAttributes.getBoolean(R.styleable.RiveAnimationView_riveAutoBind, false);
            boolean z13 = obtainStyledAttributes.getBoolean(R.styleable.RiveAnimationView_riveTraceAnimations, false);
            String string3 = obtainStyledAttributes.getString(R.styleable.RiveAnimationView_riveArtboard);
            String string4 = obtainStyledAttributes.getString(R.styleable.RiveAnimationView_riveAnimation);
            String string5 = obtainStyledAttributes.getString(R.styleable.RiveAnimationView_riveStateMachine);
            int integer4 = obtainStyledAttributes.getInteger(R.styleable.RiveAnimationView_riveRenderer, rendererIndexDefault);
            Context applicationContext2 = context.getApplicationContext();
            Intrinsics.checkNotNull(applicationContext2);
            RendererAttributes rendererAttributes = new RendererAttributes(integer, integer2, integer3, integer4, z11, z12, z13, string3, string4, string5, makeMaybeResource, new FallbackAssetLoader(applicationContext2, z10, assetLoaderFrom));
            this.rendererAttributes = rendererAttributes;
            this.controller = new RiveFileController(rendererAttributes.getLoop(), rendererAttributes.getAutoplay(), null, null, null, 28, null);
            LifecycleOwner lifecycleOwner = this.lifecycleOwner;
            if (lifecycleOwner != null && (lifecycle = lifecycleOwner.getLifecycle()) != null) {
                lifecycle.a(getLifecycleObserver());
            }
            if (makeMaybeResource != null) {
                loadFileFromResource(new Function1<File, Unit>() { // from class: app.rive.runtime.kotlin.RiveAnimationView$1$1$1
                    /* JADX INFO: Access modifiers changed from: package-private */
                    {
                        super(1);
                    }

                    @Override // kotlin.jvm.functions.Function1
                    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                        invoke((File) obj);
                        return Unit.f31988a;
                    }

                    public final void invoke(@NotNull File it) {
                        Intrinsics.checkNotNullParameter(it, "it");
                        RiveAnimationView.this.getController().setFile(it);
                        RiveAnimationView.this.getController().setupScene$kotlin_release(RiveAnimationView.this.getRendererAttributes());
                    }
                });
            }
            obtainStyledAttributes.recycle();
        } catch (Throwable th2) {
            obtainStyledAttributes.recycle();
            throw th2;
        }
    }

    public static /* synthetic */ void pause$default(RiveAnimationView riveAnimationView, String str, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: pause");
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        riveAnimationView.pause(str, z10);
    }

    public static /* synthetic */ void stop$default(RiveAnimationView riveAnimationView, String str, boolean z10, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: stop");
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        riveAnimationView.stop(str, z10);
    }

    public final String getTextRunValue(@NotNull String textRunName, @NotNull String path) {
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        Intrinsics.checkNotNullParameter(path, "path");
        return this.controller.getTextRunValue(textRunName, path);
    }

    @Override // app.rive.runtime.kotlin.Observable
    public void registerListener(@NotNull RiveFileController.Listener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.controller.registerListener(listener);
    }

    public final void setTextRunValue(@NotNull String textRunName, @NotNull String textValue, @NotNull String path) {
        Intrinsics.checkNotNullParameter(textRunName, "textRunName");
        Intrinsics.checkNotNullParameter(textValue, "textValue");
        Intrinsics.checkNotNullParameter(path, "path");
        this.controller.setTextRunValue(textRunName, textValue, path);
    }

    @Override // app.rive.runtime.kotlin.Observable
    public void unregisterListener(@NotNull RiveFileController.Listener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.controller.unregisterListener(listener);
    }

    public final void stop(@NotNull List<String> animationNames, boolean z10) {
        Intrinsics.checkNotNullParameter(animationNames, "animationNames");
        this.controller.stopAnimations(animationNames, z10);
    }

    public static /* synthetic */ void play$default(RiveAnimationView riveAnimationView, List list, Loop loop, Direction direction, boolean z10, boolean z11, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: play");
        }
        if ((i10 & 2) != 0) {
            loop = Loop.AUTO;
        }
        Loop loop2 = loop;
        if ((i10 & 4) != 0) {
            direction = Direction.AUTO;
        }
        Direction direction2 = direction;
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        boolean z12 = z10;
        if ((i10 & 16) != 0) {
            z11 = true;
        }
        riveAnimationView.play(list, loop2, direction2, z12, z11);
    }

    public final void pause(@NotNull List<String> animationNames, boolean z10) {
        Intrinsics.checkNotNullParameter(animationNames, "animationNames");
        this.controller.pause(animationNames, z10);
    }

    public final void play(@NotNull List<String> animationNames, @NotNull Loop loop, @NotNull Direction direction, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(animationNames, "animationNames");
        Intrinsics.checkNotNullParameter(loop, "loop");
        Intrinsics.checkNotNullParameter(direction, "direction");
        this.rendererAttributes.setLoop(loop);
        this.controller.play(animationNames, loop, direction, z10, z11);
    }

    public final void stop(@NotNull String animationName, boolean z10) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        this.controller.stopAnimations(animationName, z10);
    }

    public final void pause(@NotNull String animationName, boolean z10) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        this.controller.pause(animationName, z10);
    }

    public static /* synthetic */ void play$default(RiveAnimationView riveAnimationView, String str, Loop loop, Direction direction, boolean z10, boolean z11, int i10, Object obj) {
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: play");
        }
        if ((i10 & 2) != 0) {
            loop = Loop.AUTO;
        }
        Loop loop2 = loop;
        if ((i10 & 4) != 0) {
            direction = Direction.AUTO;
        }
        Direction direction2 = direction;
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        boolean z12 = z10;
        if ((i10 & 16) != 0) {
            z11 = true;
        }
        riveAnimationView.play(str, loop2, direction2, z12, z11);
    }

    public final void play(@NotNull String animationName, @NotNull Loop loop, @NotNull Direction direction, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(animationName, "animationName");
        Intrinsics.checkNotNullParameter(loop, "loop");
        Intrinsics.checkNotNullParameter(direction, "direction");
        RendererAttributes rendererAttributes = this.rendererAttributes;
        rendererAttributes.setAnimationName(z10 ? null : animationName);
        rendererAttributes.setStateMachineName(z10 ? animationName : null);
        rendererAttributes.setLoop(loop);
        this.controller.play(animationName, loop, direction, z10, z11);
    }

    @Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u000e\b\u0007\u0018\u0000 D2\u00020\u0001:\u0001DB}\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\b\u0002\u0010\t\u001a\u00020\b\u0012\b\b\u0002\u0010\n\u001a\u00020\b\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\f\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\f\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0012¢\u0006\u0002\u0010\u0013R\u001a\u0010\u0014\u001a\u00020\u0015X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0016\u0010\u0017\"\u0004\b\u0018\u0010\u0019R\u001c\u0010\r\u001a\u0004\u0018\u00010\fX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001a\u0010\u001b\"\u0004\b\u001c\u0010\u001dR\u001c\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001e\u0010\u001b\"\u0004\b\u001f\u0010\u001dR\u001c\u0010\u0011\u001a\u0004\u0018\u00010\u0012X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b \u0010!\"\u0004\b\"\u0010#R\u001a\u0010\t\u001a\u00020\bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b$\u0010%\"\u0004\b&\u0010'R\u001a\u0010\u0007\u001a\u00020\bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b(\u0010%\"\u0004\b)\u0010'R\u001a\u0010*\u001a\u00020+X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b,\u0010-\"\u0004\b.\u0010/R\u001a\u00100\u001a\u000201X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b2\u00103\"\u0004\b4\u00105R\u001a\u00106\u001a\u000207X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b8\u00109\"\u0004\b:\u0010;R\u001c\u0010\u000f\u001a\u0004\u0018\u00010\u0010X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b<\u0010=\"\u0004\b>\u0010?R\u001a\u0010\n\u001a\u00020\bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b@\u0010%\"\u0004\bA\u0010'R\u001c\u0010\u000e\u001a\u0004\u0018\u00010\fX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\bB\u0010\u001b\"\u0004\bC\u0010\u001d¨\u0006E"}, d2 = {"Lapp/rive/runtime/kotlin/RiveAnimationView$RendererAttributes;", "", "alignmentIndex", "", "fitIndex", "loopIndex", "rendererIndex", "autoplay", "", "autoBind", "riveTraceAnimations", "artboardName", "", "animationName", "stateMachineName", "resource", "Lapp/rive/runtime/kotlin/ResourceType;", "assetLoader", "Lapp/rive/runtime/kotlin/core/FileAssetLoader;", "(IIIIZZZLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lapp/rive/runtime/kotlin/ResourceType;Lapp/rive/runtime/kotlin/core/FileAssetLoader;)V", "alignment", "Lapp/rive/runtime/kotlin/core/Alignment;", "getAlignment", "()Lapp/rive/runtime/kotlin/core/Alignment;", "setAlignment", "(Lapp/rive/runtime/kotlin/core/Alignment;)V", "getAnimationName", "()Ljava/lang/String;", "setAnimationName", "(Ljava/lang/String;)V", "getArtboardName", "setArtboardName", "getAssetLoader", "()Lapp/rive/runtime/kotlin/core/FileAssetLoader;", "setAssetLoader", "(Lapp/rive/runtime/kotlin/core/FileAssetLoader;)V", "getAutoBind", "()Z", "setAutoBind", "(Z)V", "getAutoplay", "setAutoplay", "fit", "Lapp/rive/runtime/kotlin/core/Fit;", "getFit", "()Lapp/rive/runtime/kotlin/core/Fit;", "setFit", "(Lapp/rive/runtime/kotlin/core/Fit;)V", "loop", "Lapp/rive/runtime/kotlin/core/Loop;", "getLoop", "()Lapp/rive/runtime/kotlin/core/Loop;", "setLoop", "(Lapp/rive/runtime/kotlin/core/Loop;)V", "rendererType", "Lapp/rive/runtime/kotlin/core/RendererType;", "getRendererType", "()Lapp/rive/runtime/kotlin/core/RendererType;", "setRendererType", "(Lapp/rive/runtime/kotlin/core/RendererType;)V", "getResource", "()Lapp/rive/runtime/kotlin/ResourceType;", "setResource", "(Lapp/rive/runtime/kotlin/ResourceType;)V", "getRiveTraceAnimations", "setRiveTraceAnimations", "getStateMachineName", "setStateMachineName", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class RendererAttributes {
        @NotNull
        private Alignment alignment;
        private String animationName;
        private String artboardName;
        private FileAssetLoader assetLoader;
        private boolean autoBind;
        private boolean autoplay;
        @NotNull
        private Fit fit;
        @NotNull
        private Loop loop;
        @NotNull
        private RendererType rendererType;
        private ResourceType resource;
        private boolean riveTraceAnimations;
        private String stateMachineName;
        @NotNull
        public static final Companion Companion = new Companion(null);
        public static final int $stable = 8;

        @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u001a\u0010\u0003\u001a\u0004\u0018\u00010\u00042\b\u0010\u0005\u001a\u0004\u0018\u00010\u00062\u0006\u0010\u0007\u001a\u00020\b¨\u0006\t"}, d2 = {"Lapp/rive/runtime/kotlin/RiveAnimationView$RendererAttributes$Companion;", "", "()V", "assetLoaderFrom", "Lapp/rive/runtime/kotlin/core/FileAssetLoader;", StackTraceHelper.NAME_KEY, "", "context", "Landroid/content/Context;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
        @SourceDebugExtension({"SMAP\nRiveAnimationView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveAnimationView.kt\napp/rive/runtime/kotlin/RiveAnimationView$RendererAttributes$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,1291:1\n1#2:1292\n*E\n"})
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final FileAssetLoader assetLoaderFrom(String str, @NotNull Context context) {
                Constructor<?> constructor;
                Constructor<?> constructor2;
                Object newInstance;
                Object newInstance2;
                Intrinsics.checkNotNullParameter(context, "context");
                if (str != null && str.length() != 0) {
                    try {
                        Class<?> cls = Class.forName(str);
                        Constructor<?>[] constructors = cls.getConstructors();
                        Intrinsics.checkNotNullExpressionValue(constructors, "getConstructors(...)");
                        int length = constructors.length;
                        int i10 = 0;
                        int i11 = 0;
                        while (true) {
                            if (i11 < length) {
                                constructor = constructors[i11];
                                if (constructor.getParameterTypes().length == 1 && Intrinsics.areEqual(constructor.getParameterTypes()[0], Context.class)) {
                                    break;
                                }
                                i11++;
                            } else {
                                constructor = null;
                                break;
                            }
                        }
                        if (constructor != null && (newInstance2 = constructor.newInstance(context.getApplicationContext())) != null && (newInstance2 instanceof ContextAssetLoader)) {
                            return (FileAssetLoader) newInstance2;
                        }
                        Constructor<?>[] constructors2 = cls.getConstructors();
                        Intrinsics.checkNotNullExpressionValue(constructors2, "getConstructors(...)");
                        int length2 = constructors2.length;
                        while (true) {
                            if (i10 < length2) {
                                constructor2 = constructors2[i10];
                                Class<?>[] parameterTypes = constructor2.getParameterTypes();
                                Intrinsics.checkNotNullExpressionValue(parameterTypes, "getParameterTypes(...)");
                                if (parameterTypes.length == 0) {
                                    break;
                                }
                                i10++;
                            } else {
                                constructor2 = null;
                                break;
                            }
                        }
                        if (constructor2 != null && (newInstance = constructor2.newInstance(null)) != null && (newInstance instanceof FileAssetLoader)) {
                            return (FileAssetLoader) newInstance;
                        }
                        Log.e(RiveAnimationView.TAG, "Failed to initialize AssetLoader: No suitable constructor in " + str);
                        return null;
                    } catch (Exception e10) {
                        Log.e(RiveAnimationView.TAG, "Failed to initialize AssetLoader from name: " + str, e10);
                    }
                }
                return null;
            }

            private Companion() {
            }
        }

        public RendererAttributes(int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, String str, String str2, String str3, ResourceType resourceType, FileAssetLoader fileAssetLoader) {
            this.autoplay = z10;
            this.autoBind = z11;
            this.riveTraceAnimations = z12;
            this.artboardName = str;
            this.animationName = str2;
            this.stateMachineName = str3;
            this.resource = resourceType;
            this.assetLoader = fileAssetLoader;
            this.alignment = Alignment.Companion.fromIndex(i10);
            this.fit = Fit.Companion.fromIndex(i11);
            this.loop = Loop.Companion.fromIndex(i12);
            this.rendererType = RendererType.Companion.fromIndex(i13);
        }

        @NotNull
        public final Alignment getAlignment() {
            return this.alignment;
        }

        public final String getAnimationName() {
            return this.animationName;
        }

        public final String getArtboardName() {
            return this.artboardName;
        }

        public final FileAssetLoader getAssetLoader() {
            return this.assetLoader;
        }

        public final boolean getAutoBind() {
            return this.autoBind;
        }

        public final boolean getAutoplay() {
            return this.autoplay;
        }

        @NotNull
        public final Fit getFit() {
            return this.fit;
        }

        @NotNull
        public final Loop getLoop() {
            return this.loop;
        }

        @NotNull
        public final RendererType getRendererType() {
            return this.rendererType;
        }

        public final ResourceType getResource() {
            return this.resource;
        }

        public final boolean getRiveTraceAnimations() {
            return this.riveTraceAnimations;
        }

        public final String getStateMachineName() {
            return this.stateMachineName;
        }

        public final void setAlignment(@NotNull Alignment alignment) {
            Intrinsics.checkNotNullParameter(alignment, "<set-?>");
            this.alignment = alignment;
        }

        public final void setAnimationName(String str) {
            this.animationName = str;
        }

        public final void setArtboardName(String str) {
            this.artboardName = str;
        }

        public final void setAssetLoader(FileAssetLoader fileAssetLoader) {
            this.assetLoader = fileAssetLoader;
        }

        public final void setAutoBind(boolean z10) {
            this.autoBind = z10;
        }

        public final void setAutoplay(boolean z10) {
            this.autoplay = z10;
        }

        public final void setFit(@NotNull Fit fit) {
            Intrinsics.checkNotNullParameter(fit, "<set-?>");
            this.fit = fit;
        }

        public final void setLoop(@NotNull Loop loop) {
            Intrinsics.checkNotNullParameter(loop, "<set-?>");
            this.loop = loop;
        }

        public final void setRendererType(@NotNull RendererType rendererType) {
            Intrinsics.checkNotNullParameter(rendererType, "<set-?>");
            this.rendererType = rendererType;
        }

        public final void setResource(ResourceType resourceType) {
            this.resource = resourceType;
        }

        public final void setRiveTraceAnimations(boolean z10) {
            this.riveTraceAnimations = z10;
        }

        public final void setStateMachineName(String str) {
            this.stateMachineName = str;
        }

        public /* synthetic */ RendererAttributes(int i10, int i11, int i12, int i13, boolean z10, boolean z11, boolean z12, String str, String str2, String str3, ResourceType resourceType, FileAssetLoader fileAssetLoader, int i14, DefaultConstructorMarker defaultConstructorMarker) {
            this((i14 & 1) != 0 ? RiveAnimationView.Companion.getAlignmentIndexDefault() : i10, (i14 & 2) != 0 ? RiveAnimationView.Companion.getFitIndexDefault() : i11, (i14 & 4) != 0 ? RiveAnimationView.Companion.getLoopIndexDefault() : i12, (i14 & 8) != 0 ? RiveAnimationView.Companion.getRendererIndexDefault() : i13, z10, (i14 & 32) != 0 ? false : z11, (i14 & 64) != 0 ? false : z12, str, str2, str3, resourceType, (i14 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : fileAssetLoader);
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public RiveAnimationView(@NotNull Builder builder) {
        this(builder.getContext$kotlin_release(), null, 2, null);
        Intrinsics.checkNotNullParameter(builder, "builder");
        if (getArtboardRenderer() == null) {
            RendererAttributes rendererAttributes = this.rendererAttributes;
            RendererType rendererType$kotlin_release = builder.getRendererType$kotlin_release();
            rendererAttributes.setRendererType(rendererType$kotlin_release == null ? RendererType.Companion.fromIndex(rendererIndexDefault) : rendererType$kotlin_release);
            Boolean autoplay$kotlin_release = builder.getAutoplay$kotlin_release();
            rendererAttributes.setAutoplay(autoplay$kotlin_release != null ? autoplay$kotlin_release.booleanValue() : getDefaultAutoplay());
            rendererAttributes.setAutoBind(builder.getAutoBind$kotlin_release());
            Boolean traceAnimations$kotlin_release = builder.getTraceAnimations$kotlin_release();
            rendererAttributes.setRiveTraceAnimations(traceAnimations$kotlin_release != null ? traceAnimations$kotlin_release.booleanValue() : false);
            rendererAttributes.setArtboardName(builder.getArtboardName$kotlin_release());
            rendererAttributes.setAnimationName(builder.getAnimationName$kotlin_release());
            rendererAttributes.setStateMachineName(builder.getStateMachineName$kotlin_release());
            rendererAttributes.setResource(builder.getResourceType$kotlin_release());
            FileAssetLoader assetLoader = rendererAttributes.getAssetLoader();
            Intrinsics.checkNotNull(assetLoader, "null cannot be cast to non-null type app.rive.runtime.kotlin.core.FallbackAssetLoader");
            ((FallbackAssetLoader) assetLoader).resetWith$kotlin_release(builder);
            Alignment alignment$kotlin_release = builder.getAlignment$kotlin_release();
            rendererAttributes.setAlignment(alignment$kotlin_release == null ? rendererAttributes.getAlignment() : alignment$kotlin_release);
            Fit fit$kotlin_release = builder.getFit$kotlin_release();
            rendererAttributes.setFit(fit$kotlin_release == null ? rendererAttributes.getFit() : fit$kotlin_release);
            Loop loop$kotlin_release = builder.getLoop$kotlin_release();
            rendererAttributes.setLoop(loop$kotlin_release == null ? rendererAttributes.getLoop() : loop$kotlin_release);
            setTouchPassThrough(builder.getTouchPassThrough$kotlin_release());
            setMultiTouchEnabled(builder.getMultiTouchEnabled$kotlin_release());
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }
}
