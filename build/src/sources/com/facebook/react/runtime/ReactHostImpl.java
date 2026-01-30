package com.facebook.react.runtime;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import com.facebook.react.MemoryPressureRouter;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactInstanceEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSBundleLoader;
import com.facebook.react.bridge.JavaScriptContextHolder;
import com.facebook.react.bridge.MemoryPressureListener;
import com.facebook.react.bridge.NativeArray;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.bridge.ReactNoCrashBridgeNotAllowedSoftException;
import com.facebook.react.bridge.ReactNoCrashSoftException;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.RuntimeExecutor;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.queue.QueueThreadExceptionHandler;
import com.facebook.react.bridge.queue.ReactQueueConfiguration;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.devsupport.DefaultDevSupportManagerFactory;
import com.facebook.react.devsupport.DevServerHelper;
import com.facebook.react.devsupport.DevSupportManagerBase;
import com.facebook.react.devsupport.DevSupportManagerFactory;
import com.facebook.react.devsupport.InspectorFlags;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.devsupport.inspector.InspectorNetworkHelper;
import com.facebook.react.devsupport.inspector.InspectorNetworkRequestListener;
import com.facebook.react.devsupport.interfaces.BundleLoadCallback;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import com.facebook.react.devsupport.interfaces.PackagerStatusCallback;
import com.facebook.react.fabric.ComponentFactory;
import com.facebook.react.fabric.FabricUIManager;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.interfaces.TaskInterface;
import com.facebook.react.interfaces.fabric.ReactSurface;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlags;
import com.facebook.react.modules.appearance.AppearanceModule;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.modules.systeminfo.AndroidInfoHelpers;
import com.facebook.react.runtime.BridgelessAtomicRef;
import com.facebook.react.runtime.ReactHostImpl;
import com.facebook.react.runtime.internal.bolts.Continuation;
import com.facebook.react.runtime.internal.bolts.Task;
import com.facebook.react.runtime.internal.bolts.TaskCompletionSource;
import com.facebook.react.turbomodule.core.interfaces.CallInvokerHolder;
import com.facebook.react.uimanager.DisplayMetricsHolder;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.BlackHoleEventDispatcher;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.views.imagehelper.ResourceDrawableIdHelper;
import java.lang.ref.WeakReference;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.WeakHashMap;
import java.util.concurrent.Callable;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000¨\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0003\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010#\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010%\n\u0002\b\u0002\n\u0002\u0010!\n\u0002\b\n\n\u0002\u0010$\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u001e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\t\b\u0007\u0018\u0000 ²\u00022\u00020\u0001:\u0004³\u0002²\u0002BO\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\b\b\u0002\u0010\t\u001a\u00020\b\u0012\b\b\u0002\u0010\n\u001a\u00020\b\u0012\u0006\u0010\f\u001a\u00020\u000b\u0012\u0006\u0010\r\u001a\u00020\u000b\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\u0010\u0010\u0011B1\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0012\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\f\u001a\u00020\u000b\u0012\u0006\u0010\r\u001a\u00020\u000b¢\u0006\u0004\b\u0010\u0010\u0013J\u0017\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0014\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\u0016\u0010\u0017J\u0019\u0010\u001a\u001a\u00020\u00152\b\u0010\u0019\u001a\u0004\u0018\u00010\u0018H\u0003¢\u0006\u0004\b\u001a\u0010\u001bJ\u001f\u0010\u001f\u001a\u00020\u00152\u0006\u0010\u001c\u001a\u00020\u00182\u0006\u0010\u001e\u001a\u00020\u001dH\u0003¢\u0006\u0004\b\u001f\u0010 J\u0017\u0010$\u001a\u00020#2\u0006\u0010\"\u001a\u00020!H\u0002¢\u0006\u0004\b$\u0010%J\u0015\u0010(\u001a\b\u0012\u0004\u0012\u00020'0&H\u0003¢\u0006\u0004\b(\u0010)J\u0019\u0010,\u001a\u00020\u00152\b\u0010+\u001a\u0004\u0018\u00010*H\u0003¢\u0006\u0004\b,\u0010-J+\u00101\u001a\u00020\u00152\u0006\u0010.\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u00182\n\b\u0002\u00100\u001a\u0004\u0018\u00010/H\u0002¢\u0006\u0004\b1\u00102J;\u00106\u001a\b\u0012\u0004\u0012\u00020\u000b0&2\u0006\u0010.\u001a\u00020\u00182\b\b\u0002\u00103\u001a\u00020\b2\u0012\u00105\u001a\u000e\u0012\u0004\u0012\u00020!\u0012\u0004\u0012\u00020\u001504H\u0002¢\u0006\u0004\b6\u00107J;\u00108\u001a\b\u0012\u0004\u0012\u00020'0&2\u0006\u0010.\u001a\u00020\u00182\b\b\u0002\u00103\u001a\u00020\b2\u0012\u00105\u001a\u000e\u0012\u0004\u0012\u00020!\u0012\u0004\u0012\u00020\u001504H\u0002¢\u0006\u0004\b8\u00107J\u000f\u0010:\u001a\u000209H\u0002¢\u0006\u0004\b:\u0010;J\u0015\u0010<\u001a\b\u0012\u0004\u0012\u00020!0&H\u0002¢\u0006\u0004\b<\u0010)J\u0015\u0010=\u001a\b\u0012\u0004\u0012\u00020!0&H\u0003¢\u0006\u0004\b=\u0010)J%\u0010A\u001a\b\u0012\u0004\u0012\u00020!0&2\u0006\u0010?\u001a\u00020>2\u0006\u0010@\u001a\u00020>H\u0003¢\u0006\u0004\bA\u0010BJ\u0015\u0010C\u001a\b\u0012\u0004\u0012\u00020!0&H\u0003¢\u0006\u0004\bC\u0010)J\u0015\u0010E\u001a\b\u0012\u0004\u0012\u00020D0&H\u0002¢\u0006\u0004\bE\u0010)J\u001f\u0010G\u001a\u00020\u00152\u0006\u0010F\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u0018H\u0002¢\u0006\u0004\bG\u0010HJ\u0017\u0010G\u001a\u00020\u00152\u0006\u0010F\u001a\u00020\u0018H\u0002¢\u0006\u0004\bG\u0010\u001bJ\u001f\u0010I\u001a\u00020\u00152\u0006\u0010F\u001a\u00020\u00182\u0006\u0010\"\u001a\u00020!H\u0002¢\u0006\u0004\bI\u0010JJ\u001f\u0010K\u001a\u00020\u00152\u0006\u0010F\u001a\u00020\u00182\u0006\u0010\"\u001a\u00020!H\u0002¢\u0006\u0004\bK\u0010JJA\u0010O\u001a\u001c\u0012\n\u0012\b\u0012\u0004\u0012\u00020!0&\u0012\u0004\u0012\u00020\u0018\u0012\u0006\u0012\u0004\u0018\u00010!0N2\u0006\u0010L\u001a\u00020\u00182\u0006\u0010F\u001a\u00020\u00182\u0006\u0010M\u001a\u00020\u0018H\u0002¢\u0006\u0004\bO\u0010PJ\u001d\u0010Q\u001a\b\u0012\u0004\u0012\u00020!0&2\u0006\u0010M\u001a\u00020\u0018H\u0003¢\u0006\u0004\bQ\u0010RJ-\u0010V\u001a\b\u0012\u0004\u0012\u00020'0&2\u0006\u0010M\u001a\u00020\u00182\u000e\u0010U\u001a\n\u0018\u00010Sj\u0004\u0018\u0001`TH\u0003¢\u0006\u0004\bV\u0010WJ\u0015\u0010Y\u001a\b\u0012\u0004\u0012\u00020'0XH\u0016¢\u0006\u0004\bY\u0010ZJ\u001d\u0010_\u001a\b\u0012\u0004\u0012\u00020'0X2\u0006\u0010\\\u001a\u00020[H\u0000¢\u0006\u0004\b]\u0010^J\u001d\u0010a\u001a\b\u0012\u0004\u0012\u00020'0X2\u0006\u0010\\\u001a\u00020[H\u0000¢\u0006\u0004\b`\u0010^J\u001d\u0010c\u001a\b\u0012\u0004\u0012\u00020'0X2\u0006\u0010\\\u001a\u00020[H\u0000¢\u0006\u0004\bb\u0010^J#\u0010h\u001a\u00020\u00152\b\u0010e\u001a\u0004\u0018\u00010d2\b\u0010g\u001a\u0004\u0018\u00010fH\u0017¢\u0006\u0004\bh\u0010iJ\u0019\u0010h\u001a\u00020\u00152\b\u0010e\u001a\u0004\u0018\u00010dH\u0017¢\u0006\u0004\bh\u0010jJ\u0019\u0010k\u001a\u00020\u00152\b\u0010e\u001a\u0004\u0018\u00010dH\u0017¢\u0006\u0004\bk\u0010jJ\u0019\u0010l\u001a\u00020\u00152\b\u0010e\u001a\u0004\u0018\u00010dH\u0017¢\u0006\u0004\bl\u0010jJ\u000f\u0010l\u001a\u00020\u0015H\u0017¢\u0006\u0004\bl\u0010mJ\u000f\u0010n\u001a\u00020\u0015H\u0017¢\u0006\u0004\bn\u0010mJ\u0019\u0010n\u001a\u00020\u00152\b\u0010e\u001a\u0004\u0018\u00010dH\u0017¢\u0006\u0004\bn\u0010jJ)\u0010s\u001a\u00020r2\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010o\u001a\u00020\u00182\b\u0010q\u001a\u0004\u0018\u00010pH\u0016¢\u0006\u0004\bs\u0010tJ\u000f\u0010u\u001a\u00020\u000bH\u0017¢\u0006\u0004\bu\u0010vJ\u0017\u0010x\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020wH\u0016¢\u0006\u0004\bx\u0010yJ\u0017\u0010z\u001a\u00020\u00152\u0006\u0010\u001e\u001a\u00020wH\u0016¢\u0006\u0004\bz\u0010yJ\u001d\u0010{\u001a\b\u0012\u0004\u0012\u00020'0X2\u0006\u0010M\u001a\u00020\u0018H\u0016¢\u0006\u0004\b{\u0010|JA\u0010~\u001a\b\u0012\u0004\u0012\u00020'0X2\u0006\u0010M\u001a\u00020\u00182\u000e\u0010U\u001a\n\u0018\u00010Sj\u0004\u0018\u0001`T2\u0012\u0010}\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u001504H\u0016¢\u0006\u0004\b~\u0010\u007fJ.\u0010~\u001a\b\u0012\u0004\u0012\u00020'0X2\u0006\u0010M\u001a\u00020\u00182\u000e\u0010U\u001a\n\u0018\u00010Sj\u0004\u0018\u0001`TH\u0016¢\u0006\u0005\b~\u0010\u0080\u0001J.\u0010\u0087\u0001\u001a\u00020\u000b\"\n\b\u0000\u0010\u0082\u0001*\u00030\u0081\u00012\u000e\u0010\u0084\u0001\u001a\t\u0012\u0004\u0012\u00028\u00000\u0083\u0001H\u0000¢\u0006\u0006\b\u0085\u0001\u0010\u0086\u0001J0\u0010\u008a\u0001\u001a\u0004\u0018\u00018\u0000\"\n\b\u0000\u0010\u0082\u0001*\u00030\u0081\u00012\u000e\u0010\u0084\u0001\u001a\t\u0012\u0004\u0012\u00028\u00000\u0083\u0001H\u0000¢\u0006\u0006\b\u0088\u0001\u0010\u0089\u0001J\u001e\u0010\u008a\u0001\u001a\u0005\u0018\u00010\u0081\u00012\u0007\u0010\u008b\u0001\u001a\u00020\u0018H\u0000¢\u0006\u0006\b\u0088\u0001\u0010\u008c\u0001J8\u0010\u0091\u0001\u001a\u00020\u00152\u0006\u0010e\u001a\u00020d2\u0007\u0010\u008d\u0001\u001a\u00020>2\u0007\u0010\u008e\u0001\u001a\u00020>2\n\u0010\u0090\u0001\u001a\u0005\u0018\u00010\u008f\u0001H\u0017¢\u0006\u0006\b\u0091\u0001\u0010\u0092\u0001J\u001a\u0010\u0094\u0001\u001a\u00020\u00152\u0007\u0010\u0093\u0001\u001a\u00020\u000bH\u0017¢\u0006\u0005\b\u0094\u0001\u0010\u0017J\u001c\u0010\u0096\u0001\u001a\u00020\u00152\b\u0010\u0095\u0001\u001a\u00030\u008f\u0001H\u0017¢\u0006\u0006\b\u0096\u0001\u0010\u0097\u0001J\u001a\u0010\u0098\u0001\u001a\u00020\u00152\u0006\u0010\u0003\u001a\u00020\u0002H\u0017¢\u0006\u0006\b\u0098\u0001\u0010\u0099\u0001J!\u0010\u009d\u0001\u001a\b\u0012\u0004\u0012\u00020\u000b0&2\u0007\u0010\u009a\u0001\u001a\u00020DH\u0000¢\u0006\u0006\b\u009b\u0001\u0010\u009c\u0001J6\u0010¤\u0001\u001a\b\u0012\u0004\u0012\u00020\u000b0&2\u0007\u0010\u009e\u0001\u001a\u00020>2\u0007\u0010\u009f\u0001\u001a\u00020\u00182\n\u0010¡\u0001\u001a\u0005\u0018\u00010 \u0001H\u0000¢\u0006\u0006\b¢\u0001\u0010£\u0001J\u001f\u0010¨\u0001\u001a\u00020\u00152\u000b\u0010¥\u0001\u001a\u00060Sj\u0002`TH\u0000¢\u0006\u0006\b¦\u0001\u0010§\u0001J3\u0010®\u0001\u001a\b\u0012\u0004\u0012\u00020\u000b0&2\u0006\u0010o\u001a\u00020\u00182\u0007\u0010©\u0001\u001a\u00020\u00182\b\u0010«\u0001\u001a\u00030ª\u0001H\u0000¢\u0006\u0006\b¬\u0001\u0010\u00ad\u0001J\u001a\u0010±\u0001\u001a\u00020\u00152\u0006\u0010\\\u001a\u00020[H\u0000¢\u0006\u0006\b¯\u0001\u0010°\u0001J\u001a\u0010³\u0001\u001a\u00020\u00152\u0006\u0010\\\u001a\u00020[H\u0000¢\u0006\u0006\b²\u0001\u0010°\u0001J\u001a\u0010¶\u0001\u001a\u00020\u000b2\u0006\u0010\\\u001a\u00020[H\u0000¢\u0006\u0006\b´\u0001\u0010µ\u0001J\u001a\u0010¹\u0001\u001a\u00020\u000b2\u0006\u0010o\u001a\u00020\u0018H\u0000¢\u0006\u0006\b·\u0001\u0010¸\u0001J\"\u0010¼\u0001\u001a\u00020\u00152\u000e\u0010»\u0001\u001a\t\u0012\u0004\u0012\u00020\u00150º\u0001H\u0016¢\u0006\u0006\b¼\u0001\u0010½\u0001J\"\u0010¾\u0001\u001a\u00020\u00152\u000e\u0010»\u0001\u001a\t\u0012\u0004\u0012\u00020\u00150º\u0001H\u0016¢\u0006\u0006\b¾\u0001\u0010½\u0001J\u0015\u0010Â\u0001\u001a\u0005\u0018\u00010¿\u0001H\u0000¢\u0006\u0006\bÀ\u0001\u0010Á\u0001J\u001c\u0010Å\u0001\u001a\u00020\u00152\b\u0010\"\u001a\u0004\u0018\u00010!H\u0001¢\u0006\u0006\bÃ\u0001\u0010Ä\u0001J\u0011\u0010Æ\u0001\u001a\u00020\u0015H\u0016¢\u0006\u0005\bÆ\u0001\u0010mR\u0015\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b\u0003\u0010Ç\u0001R\u0015\u0010\u0005\u001a\u00020\u00048\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b\u0005\u0010È\u0001R\u0015\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b\u0007\u0010É\u0001R\u0015\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b\t\u0010Ê\u0001R\u0015\u0010\n\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b\n\u0010Ê\u0001R\u0015\u0010\f\u001a\u00020\u000b8\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b\f\u0010Ë\u0001R\u0015\u0010\r\u001a\u00020\u000b8\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b\r\u0010Ë\u0001R \u0010Í\u0001\u001a\u00030Ì\u00018\u0016X\u0096\u0004¢\u0006\u0010\n\u0006\bÍ\u0001\u0010Î\u0001\u001a\u0006\bÏ\u0001\u0010Ð\u0001R \u0010Ò\u0001\u001a\u00030Ñ\u00018\u0016X\u0096\u0004¢\u0006\u0010\n\u0006\bÒ\u0001\u0010Ó\u0001\u001a\u0006\bÔ\u0001\u0010Õ\u0001R\u001e\u0010×\u0001\u001a\t\u0012\u0004\u0012\u00020[0Ö\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\b×\u0001\u0010Ø\u0001R$\u0010Ú\u0001\u001a\u000f\u0012\n\u0012\b\u0012\u0004\u0012\u00020!0&0Ù\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bÚ\u0001\u0010Û\u0001R\u0019\u0010\"\u001a\u0004\u0018\u00010!8\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b\"\u0010Ü\u0001R\u001e\u0010Ý\u0001\u001a\t\u0012\u0004\u0012\u0002090Ù\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bÝ\u0001\u0010Û\u0001R\u001e\u0010e\u001a\u000b\u0012\u0006\u0012\u0004\u0018\u00010d0Þ\u00018\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\be\u0010ß\u0001R9\u0010â\u0001\u001a$\u0012\u001f\u0012\u001d\u0012\u0006\u0012\u0004\u0018\u00010d á\u0001*\r\u0012\u0006\u0012\u0004\u0018\u00010d\u0018\u00010à\u00010à\u00010Þ\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bâ\u0001\u0010ß\u0001R\u0018\u0010ä\u0001\u001a\u00030ã\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bä\u0001\u0010å\u0001R\u0018\u0010ç\u0001\u001a\u00030æ\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bç\u0001\u0010è\u0001R\u0017\u0010é\u0001\u001a\u00020>8\u0002X\u0082\u0004¢\u0006\b\n\u0006\bé\u0001\u0010ê\u0001R\u001b\u0010ë\u0001\u001a\u0004\u0018\u00010#8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\bë\u0001\u0010ì\u0001R\u001b\u0010í\u0001\u001a\u0004\u0018\u00010f8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\bí\u0001\u0010î\u0001R$\u0010ð\u0001\u001a\u000f\u0012\u0004\u0012\u00020d\u0012\u0004\u0012\u00020\u000b0ï\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bð\u0001\u0010ñ\u0001R\u001e\u0010ó\u0001\u001a\t\u0012\u0004\u0012\u00020w0ò\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bó\u0001\u0010ô\u0001R%\u0010õ\u0001\u001a\u0010\u0012\u000b\u0012\t\u0012\u0004\u0012\u00020\u00150º\u00010ò\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\bõ\u0001\u0010ô\u0001R\u001c\u0010ö\u0001\u001a\u0005\u0018\u00010¿\u00018\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\bö\u0001\u0010÷\u0001R\u0019\u0010ø\u0001\u001a\u00020\u000b8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\bø\u0001\u0010Ë\u0001R!\u0010ù\u0001\u001a\n\u0012\u0004\u0012\u00020'\u0018\u00010&8\u0002@\u0002X\u0083\u000e¢\u0006\b\n\u0006\bù\u0001\u0010ú\u0001R!\u0010û\u0001\u001a\n\u0012\u0004\u0012\u00020!\u0018\u00010&8\u0002@\u0002X\u0083\u000e¢\u0006\b\n\u0006\bû\u0001\u0010ú\u0001R!\u0010ü\u0001\u001a\n\u0012\u0004\u0012\u00020'\u0018\u00010&8\u0002@\u0002X\u0083\u000e¢\u0006\b\n\u0006\bü\u0001\u0010ú\u0001R&\u0010\u0080\u0002\u001a\u0011\u0012\u0004\u0012\u00020\u0018\u0012\u0006\u0012\u0004\u0018\u00010\u00180ý\u00018CX\u0082\u0004¢\u0006\b\u001a\u0006\bþ\u0001\u0010ÿ\u0001R,\u0010\u0084\u0002\u001a\u0004\u0018\u00010d2\b\u0010e\u001a\u0004\u0018\u00010d8@@BX\u0080\u000e¢\u0006\u000f\u001a\u0006\b\u0081\u0002\u0010\u0082\u0002\"\u0005\b\u0083\u0002\u0010jR\u001c\u0010\u0086\u0002\u001a\b\u0012\u0004\u0012\u00020D0&8BX\u0082\u0004¢\u0006\u0007\u001a\u0005\b\u0085\u0002\u0010)R\u001c\u0010\u0087\u0002\u001a\b\u0012\u0004\u0012\u00020\u000b0&8BX\u0082\u0004¢\u0006\u0007\u001a\u0005\b\u0087\u0002\u0010)R\u0018\u0010\u008b\u0002\u001a\u00030\u0088\u00028VX\u0096\u0004¢\u0006\b\u001a\u0006\b\u0089\u0002\u0010\u008a\u0002R\u0019\u0010\u008e\u0002\u001a\u0004\u0018\u00010*8VX\u0096\u0004¢\u0006\b\u001a\u0006\b\u008c\u0002\u0010\u008d\u0002R\u0016\u0010\u0090\u0002\u001a\u00020\u000b8@X\u0080\u0004¢\u0006\u0007\u001a\u0005\b\u008f\u0002\u0010vR\u001a\u0010\u0094\u0002\u001a\u0005\u0018\u00010\u0091\u00028VX\u0096\u0004¢\u0006\b\u001a\u0006\b\u0092\u0002\u0010\u0093\u0002R\u0019\u0010\u0096\u0002\u001a\u0004\u0018\u00010d8@X\u0080\u0004¢\u0006\b\u001a\u0006\b\u0095\u0002\u0010\u0082\u0002R\u0018\u0010\u009a\u0002\u001a\u00030\u0097\u00028@X\u0080\u0004¢\u0006\b\u001a\u0006\b\u0098\u0002\u0010\u0099\u0002R\u001a\u0010\u009e\u0002\u001a\u0005\u0018\u00010\u009b\u00028@X\u0080\u0004¢\u0006\b\u001a\u0006\b\u009c\u0002\u0010\u009d\u0002R\u001f\u0010¢\u0002\u001a\n\u0012\u0005\u0012\u00030\u0081\u00010\u009f\u00028@X\u0080\u0004¢\u0006\b\u001a\u0006\b \u0002\u0010¡\u0002R\u001a\u0010¦\u0002\u001a\u0005\u0018\u00010£\u00028@X\u0080\u0004¢\u0006\b\u001a\u0006\b¤\u0002\u0010¥\u0002R\u001a\u0010ª\u0002\u001a\u0005\u0018\u00010§\u00028@X\u0080\u0004¢\u0006\b\u001a\u0006\b¨\u0002\u0010©\u0002R\u001a\u0010®\u0002\u001a\u0005\u0018\u00010«\u00028@X\u0080\u0004¢\u0006\b\u001a\u0006\b¬\u0002\u0010\u00ad\u0002R\u0017\u0010±\u0002\u001a\u00020f8@X\u0080\u0004¢\u0006\b\u001a\u0006\b¯\u0002\u0010°\u0002¨\u0006´\u0002"}, d2 = {"Lcom/facebook/react/runtime/ReactHostImpl;", "Lcom/facebook/react/ReactHost;", "Landroid/content/Context;", "context", "Lcom/facebook/react/runtime/ReactHostDelegate;", "reactHostDelegate", "Lcom/facebook/react/fabric/ComponentFactory;", "componentFactory", "Ljava/util/concurrent/Executor;", "bgExecutor", "uiExecutor", "", "allowPackagerServerAccess", "useDevSupport", "Lcom/facebook/react/devsupport/DevSupportManagerFactory;", "devSupportManagerFactory", "<init>", "(Landroid/content/Context;Lcom/facebook/react/runtime/ReactHostDelegate;Lcom/facebook/react/fabric/ComponentFactory;Ljava/util/concurrent/Executor;Ljava/util/concurrent/Executor;ZZLcom/facebook/react/devsupport/DevSupportManagerFactory;)V", "delegate", "(Landroid/content/Context;Lcom/facebook/react/runtime/ReactHostDelegate;Lcom/facebook/react/fabric/ComponentFactory;ZZ)V", ViewProps.ENABLED, "", "maybeEnableDevSupport", "(Z)V", "", "message", "setPausedInDebuggerMessage", "(Ljava/lang/String;)V", "url", "Lcom/facebook/react/devsupport/inspector/InspectorNetworkRequestListener;", "listener", "loadNetworkResource", "(Ljava/lang/String;Lcom/facebook/react/devsupport/inspector/InspectorNetworkRequestListener;)V", "Lcom/facebook/react/runtime/ReactInstance;", "reactInstance", "Lcom/facebook/react/bridge/MemoryPressureListener;", "createMemoryPressureListener", "(Lcom/facebook/react/runtime/ReactInstance;)Lcom/facebook/react/bridge/MemoryPressureListener;", "Lcom/facebook/react/runtime/internal/bolts/Task;", "Ljava/lang/Void;", "getOrCreateStartTask", "()Lcom/facebook/react/runtime/internal/bolts/Task;", "Lcom/facebook/react/bridge/ReactContext;", "currentContext", "moveToHostDestroy", "(Lcom/facebook/react/bridge/ReactContext;)V", "callingMethod", "", "throwable", "raiseSoftException", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V", "executor", "Lkotlin/Function1;", "runnable", "callWithExistingReactInstance", "(Ljava/lang/String;Ljava/util/concurrent/Executor;Lkotlin/jvm/functions/Function1;)Lcom/facebook/react/runtime/internal/bolts/Task;", "callAfterGetOrCreateReactInstance", "Lcom/facebook/react/runtime/BridgelessReactContext;", "getOrCreateReactContext", "()Lcom/facebook/react/runtime/BridgelessReactContext;", "getOrCreateReactInstance", "waitThenCallGetOrCreateReactInstanceTask", "", "tryNum", "maxTries", "waitThenCallGetOrCreateReactInstanceTaskWithRetries", "(II)Lcom/facebook/react/runtime/internal/bolts/Task;", "getOrCreateReactInstanceTask", "Lcom/facebook/react/bridge/JSBundleLoader;", "loadJSBundleFromMetro", "method", "log", "(Ljava/lang/String;Ljava/lang/String;)V", "stopAttachedSurfaces", "(Ljava/lang/String;Lcom/facebook/react/runtime/ReactInstance;)V", "startAttachedSurfaces", "tag", "reason", "Lkotlin/Function2;", "createReactInstanceUnwrapper", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lkotlin/jvm/functions/Function2;", "getOrCreateReloadTask", "(Ljava/lang/String;)Lcom/facebook/react/runtime/internal/bolts/Task;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "ex", "getOrCreateDestroyTask", "(Ljava/lang/String;Ljava/lang/Exception;)Lcom/facebook/react/runtime/internal/bolts/Task;", "Lcom/facebook/react/interfaces/TaskInterface;", ViewProps.START, "()Lcom/facebook/react/interfaces/TaskInterface;", "Lcom/facebook/react/runtime/ReactSurfaceImpl;", "surface", "prerenderSurface$ReactAndroid_release", "(Lcom/facebook/react/runtime/ReactSurfaceImpl;)Lcom/facebook/react/interfaces/TaskInterface;", "prerenderSurface", "startSurface$ReactAndroid_release", "startSurface", "stopSurface$ReactAndroid_release", "stopSurface", "Landroid/app/Activity;", "activity", "Lcom/facebook/react/modules/core/DefaultHardwareBackBtnHandler;", "defaultBackButtonImpl", "onHostResume", "(Landroid/app/Activity;Lcom/facebook/react/modules/core/DefaultHardwareBackBtnHandler;)V", "(Landroid/app/Activity;)V", "onHostLeaveHint", "onHostPause", "()V", "onHostDestroy", "moduleName", "Landroid/os/Bundle;", "initialProps", "Lcom/facebook/react/interfaces/fabric/ReactSurface;", "createSurface", "(Landroid/content/Context;Ljava/lang/String;Landroid/os/Bundle;)Lcom/facebook/react/interfaces/fabric/ReactSurface;", "onBackPressed", "()Z", "Lcom/facebook/react/ReactInstanceEventListener;", "addReactInstanceEventListener", "(Lcom/facebook/react/ReactInstanceEventListener;)V", "removeReactInstanceEventListener", "reload", "(Ljava/lang/String;)Lcom/facebook/react/interfaces/TaskInterface;", "onDestroyFinished", "destroy", "(Ljava/lang/String;Ljava/lang/Exception;Lkotlin/jvm/functions/Function1;)Lcom/facebook/react/interfaces/TaskInterface;", "(Ljava/lang/String;Ljava/lang/Exception;)Lcom/facebook/react/interfaces/TaskInterface;", "Lcom/facebook/react/bridge/NativeModule;", "T", "Ljava/lang/Class;", "nativeModuleInterface", "hasNativeModule$ReactAndroid_release", "(Ljava/lang/Class;)Z", "hasNativeModule", "getNativeModule$ReactAndroid_release", "(Ljava/lang/Class;)Lcom/facebook/react/bridge/NativeModule;", "getNativeModule", "nativeModuleName", "(Ljava/lang/String;)Lcom/facebook/react/bridge/NativeModule;", "requestCode", "resultCode", "Landroid/content/Intent;", "data", "onActivityResult", "(Landroid/app/Activity;IILandroid/content/Intent;)V", "hasFocus", "onWindowFocusChange", "intent", "onNewIntent", "(Landroid/content/Intent;)V", "onConfigurationChanged", "(Landroid/content/Context;)V", "bundleLoader", "loadBundle$ReactAndroid_release", "(Lcom/facebook/react/bridge/JSBundleLoader;)Lcom/facebook/react/runtime/internal/bolts/Task;", "loadBundle", "segmentId", "path", "Lcom/facebook/react/bridge/Callback;", "callback", "registerSegment$ReactAndroid_release", "(ILjava/lang/String;Lcom/facebook/react/bridge/Callback;)Lcom/facebook/react/runtime/internal/bolts/Task;", "registerSegment", "e", "handleHostException$ReactAndroid_release", "(Ljava/lang/Exception;)V", "handleHostException", "methodName", "Lcom/facebook/react/bridge/NativeArray;", "args", "callFunctionOnModule$ReactAndroid_release", "(Ljava/lang/String;Ljava/lang/String;Lcom/facebook/react/bridge/NativeArray;)Lcom/facebook/react/runtime/internal/bolts/Task;", "callFunctionOnModule", "attachSurface$ReactAndroid_release", "(Lcom/facebook/react/runtime/ReactSurfaceImpl;)V", "attachSurface", "detachSurface$ReactAndroid_release", "detachSurface", "isSurfaceAttached$ReactAndroid_release", "(Lcom/facebook/react/runtime/ReactSurfaceImpl;)Z", "isSurfaceAttached", "isSurfaceWithModuleNameAttached$ReactAndroid_release", "(Ljava/lang/String;)Z", "isSurfaceWithModuleNameAttached", "Lkotlin/Function0;", "onBeforeDestroy", "addBeforeDestroyListener", "(Lkotlin/jvm/functions/Function0;)V", "removeBeforeDestroyListener", "Lcom/facebook/react/runtime/ReactHostInspectorTarget;", "getOrCreateReactHostInspectorTarget$ReactAndroid_release", "()Lcom/facebook/react/runtime/ReactHostInspectorTarget;", "getOrCreateReactHostInspectorTarget", "unregisterInstanceFromInspector$ReactAndroid_release", "(Lcom/facebook/react/runtime/ReactInstance;)V", "unregisterInstanceFromInspector", "invalidate", "Landroid/content/Context;", "Lcom/facebook/react/runtime/ReactHostDelegate;", "Lcom/facebook/react/fabric/ComponentFactory;", "Ljava/util/concurrent/Executor;", "Z", "Lcom/facebook/react/devsupport/interfaces/DevSupportManager;", "devSupportManager", "Lcom/facebook/react/devsupport/interfaces/DevSupportManager;", "getDevSupportManager", "()Lcom/facebook/react/devsupport/interfaces/DevSupportManager;", "Lcom/facebook/react/MemoryPressureRouter;", "memoryPressureRouter", "Lcom/facebook/react/MemoryPressureRouter;", "getMemoryPressureRouter", "()Lcom/facebook/react/MemoryPressureRouter;", "", "attachedSurfaces", "Ljava/util/Set;", "Lcom/facebook/react/runtime/BridgelessAtomicRef;", "createReactInstanceTaskRef", "Lcom/facebook/react/runtime/BridgelessAtomicRef;", "Lcom/facebook/react/runtime/ReactInstance;", "bridgelessReactContextRef", "Ljava/util/concurrent/atomic/AtomicReference;", "Ljava/util/concurrent/atomic/AtomicReference;", "Ljava/lang/ref/WeakReference;", "kotlin.jvm.PlatformType", "lastUsedActivityRef", "Lcom/facebook/react/runtime/BridgelessReactStateTracker;", "bridgelessReactStateTracker", "Lcom/facebook/react/runtime/BridgelessReactStateTracker;", "Lcom/facebook/react/runtime/ReactLifecycleStateManager;", "reactLifecycleStateManager", "Lcom/facebook/react/runtime/ReactLifecycleStateManager;", StackTraceHelper.ID_KEY, "I", "memoryPressureListener", "Lcom/facebook/react/bridge/MemoryPressureListener;", "defaultHardwareBackBtnHandler", "Lcom/facebook/react/modules/core/DefaultHardwareBackBtnHandler;", "", "activeActivities", "Ljava/util/Map;", "", "reactInstanceEventListeners", "Ljava/util/List;", "beforeDestroyListeners", "reactHostInspectorTarget", "Lcom/facebook/react/runtime/ReactHostInspectorTarget;", "hostInvalidated", "startTask", "Lcom/facebook/react/runtime/internal/bolts/Task;", "reloadTask", "destroyTask", "", "getHostMetadata", "()Ljava/util/Map;", "hostMetadata", "getCurrentActivity$ReactAndroid_release", "()Landroid/app/Activity;", "setCurrentActivity", "currentActivity", "getJsBundleLoader", "jsBundleLoader", "isMetroRunning", "Lcom/facebook/react/common/LifecycleState;", "getLifecycleState", "()Lcom/facebook/react/common/LifecycleState;", "lifecycleState", "getCurrentReactContext", "()Lcom/facebook/react/bridge/ReactContext;", "currentReactContext", "isInstanceInitialized$ReactAndroid_release", "isInstanceInitialized", "Lcom/facebook/react/bridge/queue/ReactQueueConfiguration;", "getReactQueueConfiguration", "()Lcom/facebook/react/bridge/queue/ReactQueueConfiguration;", "reactQueueConfiguration", "getLastUsedActivity$ReactAndroid_release", "lastUsedActivity", "Lcom/facebook/react/uimanager/events/EventDispatcher;", "getEventDispatcher$ReactAndroid_release", "()Lcom/facebook/react/uimanager/events/EventDispatcher;", "eventDispatcher", "Lcom/facebook/react/fabric/FabricUIManager;", "getUiManager$ReactAndroid_release", "()Lcom/facebook/react/fabric/FabricUIManager;", "uiManager", "", "getNativeModules$ReactAndroid_release", "()Ljava/util/Collection;", "nativeModules", "Lcom/facebook/react/bridge/RuntimeExecutor;", "getRuntimeExecutor$ReactAndroid_release", "()Lcom/facebook/react/bridge/RuntimeExecutor;", "runtimeExecutor", "Lcom/facebook/react/turbomodule/core/interfaces/CallInvokerHolder;", "getJsCallInvokerHolder$ReactAndroid_release", "()Lcom/facebook/react/turbomodule/core/interfaces/CallInvokerHolder;", "jsCallInvokerHolder", "Lcom/facebook/react/bridge/JavaScriptContextHolder;", "getJavaScriptContextHolder$ReactAndroid_release", "()Lcom/facebook/react/bridge/JavaScriptContextHolder;", "javaScriptContextHolder", "getDefaultBackButtonHandler$ReactAndroid_release", "()Lcom/facebook/react/modules/core/DefaultHardwareBackBtnHandler;", "defaultBackButtonHandler", "Companion", "CreationResult", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
@SourceDebugExtension({"SMAP\nReactHostImpl.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactHostImpl.kt\ncom/facebook/react/runtime/ReactHostImpl\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,1493:1\n1#2:1494\n1761#3,3:1495\n*S KotlinDebug\n*F\n+ 1 ReactHostImpl.kt\ncom/facebook/react/runtime/ReactHostImpl\n*L\n729#1:1495,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactHostImpl implements ReactHost {
    private static final int BRIDGELESS_MARKER_INSTANCE_KEY = 1;
    @NotNull
    private static final String TAG = "ReactHost";
    @NotNull
    private final Map<Activity, Boolean> activeActivities;
    @NotNull
    private final AtomicReference<Activity> activity;
    private final boolean allowPackagerServerAccess;
    @NotNull
    private final Set<ReactSurfaceImpl> attachedSurfaces;
    @NotNull
    private final List<Function0<Unit>> beforeDestroyListeners;
    @NotNull
    private final Executor bgExecutor;
    @NotNull
    private final BridgelessAtomicRef<BridgelessReactContext> bridgelessReactContextRef;
    @NotNull
    private final BridgelessReactStateTracker bridgelessReactStateTracker;
    @NotNull
    private final ComponentFactory componentFactory;
    @NotNull
    private final Context context;
    @NotNull
    private final BridgelessAtomicRef<Task<ReactInstance>> createReactInstanceTaskRef;
    private DefaultHardwareBackBtnHandler defaultHardwareBackBtnHandler;
    private Task<Void> destroyTask;
    @NotNull
    private final DevSupportManager devSupportManager;
    private volatile boolean hostInvalidated;

    /* renamed from: id  reason: collision with root package name */
    private final int f12215id;
    @NotNull
    private final AtomicReference<WeakReference<Activity>> lastUsedActivityRef;
    private MemoryPressureListener memoryPressureListener;
    @NotNull
    private final MemoryPressureRouter memoryPressureRouter;
    @NotNull
    private final ReactHostDelegate reactHostDelegate;
    private ReactHostInspectorTarget reactHostInspectorTarget;
    private ReactInstance reactInstance;
    @NotNull
    private final List<ReactInstanceEventListener> reactInstanceEventListeners;
    @NotNull
    private final ReactLifecycleStateManager reactLifecycleStateManager;
    private Task<ReactInstance> reloadTask;
    private Task<Void> startTask;
    @NotNull
    private final Executor uiExecutor;
    private final boolean useDevSupport;
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final AtomicInteger counter = new AtomicInteger(0);

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/facebook/react/runtime/ReactHostImpl$Companion;", "", "<init>", "()V", "TAG", "", "BRIDGELESS_MARKER_INSTANCE_KEY", "", "counter", "Ljava/util/concurrent/atomic/AtomicInteger;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\b\b\u0002\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u000e¨\u0006\u000f"}, d2 = {"Lcom/facebook/react/runtime/ReactHostImpl$CreationResult;", "", "instance", "Lcom/facebook/react/runtime/ReactInstance;", "context", "Lcom/facebook/react/bridge/ReactContext;", "isReloading", "", "<init>", "(Lcom/facebook/react/runtime/ReactInstance;Lcom/facebook/react/bridge/ReactContext;Z)V", "getInstance", "()Lcom/facebook/react/runtime/ReactInstance;", "getContext", "()Lcom/facebook/react/bridge/ReactContext;", "()Z", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class CreationResult {
        @NotNull
        private final ReactContext context;
        @NotNull
        private final ReactInstance instance;
        private final boolean isReloading;

        public CreationResult(@NotNull ReactInstance instance, @NotNull ReactContext context, boolean z10) {
            Intrinsics.checkNotNullParameter(instance, "instance");
            Intrinsics.checkNotNullParameter(context, "context");
            this.instance = instance;
            this.context = context;
            this.isReloading = z10;
        }

        @NotNull
        public final ReactContext getContext() {
            return this.context;
        }

        @NotNull
        public final ReactInstance getInstance() {
            return this.instance;
        }

        public final boolean isReloading() {
            return this.isReloading;
        }
    }

    public ReactHostImpl(@NotNull Context context, @NotNull ReactHostDelegate reactHostDelegate, @NotNull ComponentFactory componentFactory, @NotNull Executor bgExecutor, @NotNull Executor uiExecutor, boolean z10, boolean z11, DevSupportManagerFactory devSupportManagerFactory) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(reactHostDelegate, "reactHostDelegate");
        Intrinsics.checkNotNullParameter(componentFactory, "componentFactory");
        Intrinsics.checkNotNullParameter(bgExecutor, "bgExecutor");
        Intrinsics.checkNotNullParameter(uiExecutor, "uiExecutor");
        this.context = context;
        this.reactHostDelegate = reactHostDelegate;
        this.componentFactory = componentFactory;
        this.bgExecutor = bgExecutor;
        this.uiExecutor = uiExecutor;
        this.allowPackagerServerAccess = z10;
        this.useDevSupport = z11;
        DevSupportManagerFactory defaultDevSupportManagerFactory = devSupportManagerFactory == null ? new DefaultDevSupportManagerFactory() : devSupportManagerFactory;
        Context applicationContext = context.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
        this.devSupportManager = defaultDevSupportManagerFactory.create(applicationContext, new ReactHostImplDevHelper(this), reactHostDelegate.getJsMainModulePath(), true, null, null, 2, null, null, null, null, z11);
        this.memoryPressureRouter = new MemoryPressureRouter(context);
        this.attachedSurfaces = new HashSet();
        this.createReactInstanceTaskRef = new BridgelessAtomicRef<>(Task.Companion.forResult(null));
        this.bridgelessReactContextRef = new BridgelessAtomicRef<>(null, 1, null);
        this.activity = new AtomicReference<>();
        this.lastUsedActivityRef = new AtomicReference<>(new WeakReference(null));
        BridgelessReactStateTracker bridgelessReactStateTracker = new BridgelessReactStateTracker(ReactBuildConfig.DEBUG);
        this.bridgelessReactStateTracker = bridgelessReactStateTracker;
        this.reactLifecycleStateManager = new ReactLifecycleStateManager(bridgelessReactStateTracker);
        this.f12215id = counter.getAndIncrement();
        this.activeActivities = new WeakHashMap();
        this.reactInstanceEventListeners = new CopyOnWriteArrayList();
        this.beforeDestroyListeners = new CopyOnWriteArrayList();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _get_defaultBackButtonHandler_$lambda$15(ReactHostImpl reactHostImpl) {
        UiThreadUtil.assertOnUiThread();
        DefaultHardwareBackBtnHandler defaultHardwareBackBtnHandler = reactHostImpl.defaultHardwareBackBtnHandler;
        if (defaultHardwareBackBtnHandler != null) {
            defaultHardwareBackBtnHandler.invokeDefaultOnBackPressed();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _get_isMetroRunning_$lambda$43(ReactHostImpl reactHostImpl, String str, TaskCompletionSource taskCompletionSource, boolean z10) {
        reactHostImpl.log(str, "Async result = " + z10);
        taskCompletionSource.setResult(Boolean.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task _get_jsBundleLoader_$lambda$42(ReactHostImpl reactHostImpl, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        Object result = task.getResult();
        if (result != null) {
            if (((Boolean) result).booleanValue()) {
                return reactHostImpl.loadJSBundleFromMetro();
            }
            return Task.Companion.forResult(reactHostImpl.reactHostDelegate.getJsBundleLoader());
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final Task<Void> callAfterGetOrCreateReactInstance(final String str, Executor executor, final Function1<? super ReactInstance, Unit> function1) {
        return Task.continueWith$default(getOrCreateReactInstance().onSuccess(new Continuation() { // from class: com.facebook.react.runtime.o0
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task) {
                Void callAfterGetOrCreateReactInstance$lambda$29;
                callAfterGetOrCreateReactInstance$lambda$29 = ReactHostImpl.callAfterGetOrCreateReactInstance$lambda$29(ReactHostImpl.this, str, function1, task);
                return callAfterGetOrCreateReactInstance$lambda$29;
            }
        }, executor), new Continuation() { // from class: com.facebook.react.runtime.p0
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task) {
                Void callAfterGetOrCreateReactInstance$lambda$30;
                callAfterGetOrCreateReactInstance$lambda$30 = ReactHostImpl.callAfterGetOrCreateReactInstance$lambda$30(ReactHostImpl.this, task);
                return callAfterGetOrCreateReactInstance$lambda$30;
            }
        }, null, 2, null);
    }

    static /* synthetic */ Task callAfterGetOrCreateReactInstance$default(ReactHostImpl reactHostImpl, String str, Executor executor, Function1 function1, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            executor = Task.IMMEDIATE_EXECUTOR;
        }
        return reactHostImpl.callAfterGetOrCreateReactInstance(str, executor, function1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void callAfterGetOrCreateReactInstance$lambda$29(ReactHostImpl reactHostImpl, String str, Function1 function1, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        ReactInstance reactInstance = (ReactInstance) task.getResult();
        if (reactInstance == null) {
            raiseSoftException$default(reactHostImpl, "callAfterGetOrCreateReactInstance(" + str + ")", "Execute: reactInstance is null. Dropping work.", null, 4, null);
            return null;
        }
        function1.invoke(reactInstance);
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void callAfterGetOrCreateReactInstance$lambda$30(ReactHostImpl reactHostImpl, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        if (task.isFaulted()) {
            Exception error = task.getError();
            if (error != null) {
                reactHostImpl.handleHostException$ReactAndroid_release(error);
                return null;
            }
            throw new IllegalStateException("Required value was null.");
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit callFunctionOnModule$lambda$18(String str, String str2, NativeArray nativeArray, ReactInstance reactInstance) {
        Intrinsics.checkNotNullParameter(reactInstance, "reactInstance");
        reactInstance.callFunctionOnModule(str, str2, nativeArray);
        return Unit.f33298a;
    }

    private final Task<Boolean> callWithExistingReactInstance(final String str, Executor executor, final Function1<? super ReactInstance, Unit> function1) {
        return this.createReactInstanceTaskRef.get().onSuccess(new Continuation() { // from class: com.facebook.react.runtime.e0
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task) {
                Boolean callWithExistingReactInstance$lambda$28;
                callWithExistingReactInstance$lambda$28 = ReactHostImpl.callWithExistingReactInstance$lambda$28(ReactHostImpl.this, str, function1, task);
                return callWithExistingReactInstance$lambda$28;
            }
        }, executor);
    }

    static /* synthetic */ Task callWithExistingReactInstance$default(ReactHostImpl reactHostImpl, String str, Executor executor, Function1 function1, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            executor = Task.IMMEDIATE_EXECUTOR;
        }
        return reactHostImpl.callWithExistingReactInstance(str, executor, function1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Boolean callWithExistingReactInstance$lambda$28(ReactHostImpl reactHostImpl, String str, Function1 function1, Task task) {
        boolean z10;
        Intrinsics.checkNotNullParameter(task, "task");
        ReactInstance reactInstance = (ReactInstance) task.getResult();
        if (reactInstance == null) {
            raiseSoftException$default(reactHostImpl, "callWithExistingReactInstance(" + str + ")", "Execute: reactInstance is null. Dropping work.", null, 4, null);
            z10 = false;
        } else {
            function1.invoke(reactInstance);
            z10 = true;
        }
        return Boolean.valueOf(z10);
    }

    private final MemoryPressureListener createMemoryPressureListener(ReactInstance reactInstance) {
        final WeakReference weakReference = new WeakReference(reactInstance);
        return new MemoryPressureListener() { // from class: com.facebook.react.runtime.s
            @Override // com.facebook.react.bridge.MemoryPressureListener
            public final void handleMemoryPressure(int i10) {
                ReactHostImpl.createMemoryPressureListener$lambda$12(ReactHostImpl.this, weakReference, i10);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void createMemoryPressureListener$lambda$12(ReactHostImpl reactHostImpl, final WeakReference weakReference, final int i10) {
        reactHostImpl.bgExecutor.execute(new Runnable() { // from class: com.facebook.react.runtime.c0
            @Override // java.lang.Runnable
            public final void run() {
                ReactHostImpl.createMemoryPressureListener$lambda$12$lambda$11(weakReference, i10);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void createMemoryPressureListener$lambda$12$lambda$11(WeakReference weakReference, int i10) {
        ReactInstance reactInstance = (ReactInstance) weakReference.get();
        if (reactInstance != null) {
            reactInstance.handleMemoryPressure(i10);
        }
    }

    private final Function2<Task<ReactInstance>, String, ReactInstance> createReactInstanceUnwrapper(final String str, final String str2, final String str3) {
        return new Function2() { // from class: com.facebook.react.runtime.l0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                ReactInstance createReactInstanceUnwrapper$lambda$46;
                createReactInstanceUnwrapper$lambda$46 = ReactHostImpl.createReactInstanceUnwrapper$lambda$46(ReactHostImpl.this, str, str3, str2, (Task) obj, (String) obj2);
                return createReactInstanceUnwrapper$lambda$46;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ReactInstance createReactInstanceUnwrapper$lambda$46(ReactHostImpl reactHostImpl, String str, String str2, String str3, Task task, String stage) {
        Intrinsics.checkNotNullParameter(task, "task");
        Intrinsics.checkNotNullParameter(stage, "stage");
        ReactInstance reactInstance = (ReactInstance) task.getResult();
        ReactInstance reactInstance2 = reactHostImpl.reactInstance;
        String str4 = "Stage: " + stage;
        String str5 = str + " reason: " + str2;
        if (task.isFaulted()) {
            Exception error = task.getError();
            if (error != null) {
                raiseSoftException$default(reactHostImpl, str3, str + ": ReactInstance task faulted. " + str4 + ". " + ("Fault reason: " + error.getMessage()) + ". " + str5, null, 4, null);
                return reactInstance2;
            }
            throw new IllegalStateException("Required value was null.");
        } else if (task.isCancelled()) {
            raiseSoftException$default(reactHostImpl, str3, str + ": ReactInstance task cancelled. " + str4 + ". " + str5, null, 4, null);
            return reactInstance2;
        } else if (reactInstance == null) {
            raiseSoftException$default(reactHostImpl, str3, str + ": ReactInstance task returned null. " + str4 + ". " + str5, null, 4, null);
            return reactInstance2;
        } else {
            if (reactInstance2 != null && !Intrinsics.areEqual(reactInstance, reactInstance2)) {
                raiseSoftException$default(reactHostImpl, str3, str + ": Detected two different ReactInstances. Returning old. " + str4 + ". " + str5, null, 4, null);
            }
            return reactInstance;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task destroy$lambda$10(final ReactHostImpl reactHostImpl, final String str, final Exception exc) {
        Task<ReactInstance> task = reactHostImpl.reloadTask;
        if (task != null) {
            reactHostImpl.log("destroy()", "Reloading React Native. Waiting for reload to finish before destroying React Native.");
            return task.continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.g0
                @Override // com.facebook.react.runtime.internal.bolts.Continuation
                public final Object then(Task task2) {
                    Task destroy$lambda$10$lambda$9;
                    destroy$lambda$10$lambda$9 = ReactHostImpl.destroy$lambda$10$lambda$9(ReactHostImpl.this, str, exc, task2);
                    return destroy$lambda$10$lambda$9;
                }
            }, reactHostImpl.bgExecutor);
        }
        return reactHostImpl.getOrCreateDestroyTask(str, exc);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task destroy$lambda$10$lambda$9(ReactHostImpl reactHostImpl, String str, Exception exc, Task it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return reactHostImpl.getOrCreateDestroyTask(str, exc);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void destroy$lambda$8(Function1 function1, Task task) {
        boolean z10;
        Intrinsics.checkNotNullParameter(task, "task");
        if (task.isCompleted() && !task.isFaulted()) {
            z10 = true;
        } else {
            z10 = false;
        }
        function1.invoke(Boolean.valueOf(z10));
        return null;
    }

    @fb.a
    private final Map<String, String> getHostMetadata() {
        return AndroidInfoHelpers.getInspectorHostMetadata(this.context);
    }

    private final Task<JSBundleLoader> getJsBundleLoader() {
        log("getJSBundleLoader()");
        if (this.useDevSupport && this.allowPackagerServerAccess) {
            return isMetroRunning().onSuccessTask(new Continuation() { // from class: com.facebook.react.runtime.s0
                @Override // com.facebook.react.runtime.internal.bolts.Continuation
                public final Object then(Task task) {
                    Task _get_jsBundleLoader_$lambda$42;
                    _get_jsBundleLoader_$lambda$42 = ReactHostImpl._get_jsBundleLoader_$lambda$42(ReactHostImpl.this, task);
                    return _get_jsBundleLoader_$lambda$42;
                }
            }, this.bgExecutor);
        }
        if (ReactBuildConfig.DEBUG) {
            p8.a.b(TAG, "Packager server access is disabled in this environment");
        }
        try {
            return Task.Companion.forResult(this.reactHostDelegate.getJsBundleLoader());
        } catch (Exception e10) {
            return Task.Companion.forError(e10);
        }
    }

    private final Task<Void> getOrCreateDestroyTask(final String str, Exception exc) {
        log("getOrCreateDestroyTask()");
        raiseSoftException("getOrCreateDestroyTask()", str, exc);
        Task<Void> task = this.destroyTask;
        if (task != null) {
            return task;
        }
        final Function2<Task<ReactInstance>, String, ReactInstance> createReactInstanceUnwrapper = createReactInstanceUnwrapper("Destroy", "getOrCreateDestroyTask()", str);
        log("getOrCreateDestroyTask()", "Resetting createReactInstance task ref");
        Task<Void> continueWith$default = Task.continueWith$default(this.createReactInstanceTaskRef.getAndReset().continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.w
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateDestroyTask$lambda$57;
                orCreateDestroyTask$lambda$57 = ReactHostImpl.getOrCreateDestroyTask$lambda$57(ReactHostImpl.this, r2, createReactInstanceUnwrapper, str, task2);
                return orCreateDestroyTask$lambda$57;
            }
        }, this.uiExecutor).continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.y
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateDestroyTask$lambda$59;
                orCreateDestroyTask$lambda$59 = ReactHostImpl.getOrCreateDestroyTask$lambda$59(Function2.this, this, r3, task2);
                return orCreateDestroyTask$lambda$59;
            }
        }, this.bgExecutor).continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.z
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateDestroyTask$lambda$60;
                orCreateDestroyTask$lambda$60 = ReactHostImpl.getOrCreateDestroyTask$lambda$60(Function2.this, this, r3, str, task2);
                return orCreateDestroyTask$lambda$60;
            }
        }, this.uiExecutor).continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.a0
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateDestroyTask$lambda$61;
                orCreateDestroyTask$lambda$61 = ReactHostImpl.getOrCreateDestroyTask$lambda$61(Function2.this, this, r3, task2);
                return orCreateDestroyTask$lambda$61;
            }
        }, this.bgExecutor), new Continuation() { // from class: com.facebook.react.runtime.b0
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Void orCreateDestroyTask$lambda$62;
                orCreateDestroyTask$lambda$62 = ReactHostImpl.getOrCreateDestroyTask$lambda$62(ReactHostImpl.this, r2, str, task2);
                return orCreateDestroyTask$lambda$62;
            }
        }, null, 2, null);
        this.destroyTask = continueWith$default;
        return continueWith$default;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateDestroyTask$lambda$57(ReactHostImpl reactHostImpl, String str, Function2 function2, String str2, Task task) {
        ReactHostImpl reactHostImpl2;
        String str3;
        Intrinsics.checkNotNullParameter(task, "task");
        reactHostImpl.log(str, "Starting React Native destruction");
        ReactInstance reactInstance = (ReactInstance) function2.invoke(task, "1: Starting destroy");
        reactHostImpl.unregisterInstanceFromInspector$ReactAndroid_release(reactInstance);
        if (reactHostImpl.hostInvalidated) {
            ReactHostInspectorTarget reactHostInspectorTarget = reactHostImpl.reactHostInspectorTarget;
            if (reactHostInspectorTarget != null) {
                reactHostInspectorTarget.close();
            }
            reactHostImpl.reactHostInspectorTarget = null;
        }
        if (reactHostImpl.useDevSupport) {
            reactHostImpl.log(str, "DevSupportManager cleanup");
            reactHostImpl.getDevSupportManager().stopInspector();
        }
        BridgelessReactContext nullable = reactHostImpl.bridgelessReactContextRef.getNullable();
        if (nullable == null) {
            reactHostImpl2 = reactHostImpl;
            str3 = str;
            raiseSoftException$default(reactHostImpl2, str3, "ReactContext is null. Destroy reason: " + str2, null, 4, null);
        } else {
            reactHostImpl2 = reactHostImpl;
            str3 = str;
        }
        reactHostImpl2.log(str3, "Move ReactHost to onHostDestroy()");
        reactHostImpl2.reactLifecycleStateManager.moveToOnHostDestroy(nullable);
        return Task.Companion.forResult(reactInstance);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateDestroyTask$lambda$59(Function2 function2, ReactHostImpl reactHostImpl, String str, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        ReactInstance reactInstance = (ReactInstance) function2.invoke(task, "2: Stopping surfaces");
        if (reactInstance == null) {
            raiseSoftException$default(reactHostImpl, str, "Skipping surface shutdown: ReactInstance null", null, 4, null);
            return task;
        }
        reactHostImpl.stopAttachedSurfaces(str, reactInstance);
        synchronized (reactHostImpl.attachedSurfaces) {
            reactHostImpl.attachedSurfaces.clear();
            Unit unit = Unit.f33298a;
        }
        return task;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateDestroyTask$lambda$60(Function2 function2, ReactHostImpl reactHostImpl, String str, String str2, Task task) {
        ReactHostImpl reactHostImpl2;
        String str3;
        Intrinsics.checkNotNullParameter(task, "task");
        function2.invoke(task, "3: Destroying ReactContext");
        for (Function0<Unit> function0 : reactHostImpl.beforeDestroyListeners) {
            function0.invoke();
        }
        BridgelessReactContext nullable = reactHostImpl.bridgelessReactContextRef.getNullable();
        if (nullable == null) {
            reactHostImpl2 = reactHostImpl;
            str3 = str;
            raiseSoftException$default(reactHostImpl2, str3, "ReactContext is null. Destroy reason: " + str2, null, 4, null);
        } else {
            reactHostImpl2 = reactHostImpl;
            str3 = str;
        }
        reactHostImpl2.log(str3, "Destroying MemoryPressureRouter");
        reactHostImpl2.getMemoryPressureRouter().destroy(reactHostImpl2.context);
        if (nullable != null) {
            reactHostImpl2.log(str3, "Resetting ReactContext ref");
            reactHostImpl2.bridgelessReactContextRef.reset();
            reactHostImpl2.log(str3, "Destroying ReactContext");
            nullable.destroy();
        }
        reactHostImpl2.setCurrentActivity(null);
        ResourceDrawableIdHelper.clear();
        return task;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateDestroyTask$lambda$61(Function2 function2, ReactHostImpl reactHostImpl, String str, Task task) {
        ReactHostImpl reactHostImpl2;
        String str2;
        Intrinsics.checkNotNullParameter(task, "task");
        ReactInstance reactInstance = (ReactInstance) function2.invoke(task, "4: Destroying ReactInstance");
        if (reactInstance == null) {
            reactHostImpl2 = reactHostImpl;
            str2 = str;
            raiseSoftException$default(reactHostImpl2, str2, "Skipping ReactInstance.destroy(): ReactInstance null", null, 4, null);
        } else {
            reactHostImpl2 = reactHostImpl;
            str2 = str;
            reactHostImpl2.log(str2, "Resetting ReactInstance ptr");
            reactHostImpl2.reactInstance = null;
            reactHostImpl2.log(str2, "Destroying ReactInstance");
            reactInstance.destroy();
        }
        reactHostImpl2.log(str2, "Resetting start task ref");
        reactHostImpl2.startTask = null;
        reactHostImpl2.log(str2, "Resetting destroy task ref");
        reactHostImpl2.destroyTask = null;
        return task;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void getOrCreateDestroyTask$lambda$62(ReactHostImpl reactHostImpl, String str, String str2, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        if (task.isFaulted()) {
            Exception error = task.getError();
            if (error != null) {
                String message = error.getMessage();
                reactHostImpl.raiseSoftException(str, "React destruction failed. ReactInstance task faulted. Fault reason: " + message + ". Destroy reason: " + str2, task.getError());
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        if (task.isCancelled()) {
            raiseSoftException$default(reactHostImpl, str, "React destruction failed. ReactInstance task cancelled. Destroy reason: " + str2, null, 4, null);
            return null;
        }
        return null;
    }

    private final BridgelessReactContext getOrCreateReactContext() {
        return this.bridgelessReactContextRef.getOrCreate(new BridgelessAtomicRef.Provider() { // from class: com.facebook.react.runtime.r0
            @Override // com.facebook.react.runtime.BridgelessAtomicRef.Provider
            public final Object get() {
                BridgelessReactContext orCreateReactContext$lambda$31;
                orCreateReactContext$lambda$31 = ReactHostImpl.getOrCreateReactContext$lambda$31(ReactHostImpl.this, r2);
                return orCreateReactContext$lambda$31;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final BridgelessReactContext getOrCreateReactContext$lambda$31(ReactHostImpl reactHostImpl, String str) {
        reactHostImpl.log(str, "Creating BridgelessReactContext");
        return new BridgelessReactContext(reactHostImpl.context, reactHostImpl);
    }

    private final Task<ReactInstance> getOrCreateReactInstance() {
        return Task.Companion.call(new Callable() { // from class: com.facebook.react.runtime.c
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Task waitThenCallGetOrCreateReactInstanceTask;
                waitThenCallGetOrCreateReactInstanceTask = ReactHostImpl.this.waitThenCallGetOrCreateReactInstanceTask();
                return waitThenCallGetOrCreateReactInstanceTask;
            }
        }, this.bgExecutor);
    }

    private final Task<ReactInstance> getOrCreateReactInstanceTask() {
        log("getOrCreateReactInstanceTask()");
        return this.createReactInstanceTaskRef.getOrCreate(new BridgelessAtomicRef.Provider() { // from class: com.facebook.react.runtime.r
            @Override // com.facebook.react.runtime.BridgelessAtomicRef.Provider
            public final Object get() {
                Task orCreateReactInstanceTask$lambda$41;
                orCreateReactInstanceTask$lambda$41 = ReactHostImpl.getOrCreateReactInstanceTask$lambda$41(ReactHostImpl.this, r2);
                return orCreateReactInstanceTask$lambda$41;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateReactInstanceTask$lambda$41(final ReactHostImpl reactHostImpl, final String str) {
        reactHostImpl.log(str, "Start");
        db.a.b(!reactHostImpl.hostInvalidated, "Cannot start a new ReactInstance on an invalidated ReactHost");
        ReactMarker.logMarker(ReactMarkerConstants.REACT_BRIDGELESS_LOADING_START, 1);
        Task<TContinuationResult> onSuccess = reactHostImpl.getJsBundleLoader().onSuccess(new Continuation() { // from class: com.facebook.react.runtime.m
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task) {
                ReactHostImpl.CreationResult orCreateReactInstanceTask$lambda$41$lambda$38;
                orCreateReactInstanceTask$lambda$41$lambda$38 = ReactHostImpl.getOrCreateReactInstanceTask$lambda$41$lambda$38(ReactHostImpl.this, str, task);
                return orCreateReactInstanceTask$lambda$41$lambda$38;
            }
        }, reactHostImpl.bgExecutor);
        onSuccess.onSuccess(new ReactHostImpl$sam$com_facebook_react_runtime_internal_bolts_Continuation$0(new Function1() { // from class: com.facebook.react.runtime.x
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ReactInstance orCreateReactInstanceTask$lambda$41$lambda$39;
                orCreateReactInstanceTask$lambda$41$lambda$39 = ReactHostImpl.getOrCreateReactInstanceTask$lambda$41$lambda$39(ReactHostImpl.this, str, (Task) obj);
                return orCreateReactInstanceTask$lambda$41$lambda$39;
            }
        }), reactHostImpl.uiExecutor);
        return Task.onSuccess$default(onSuccess, new Continuation() { // from class: com.facebook.react.runtime.i0
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task) {
                ReactInstance orCreateReactInstanceTask$lambda$41$lambda$40;
                orCreateReactInstanceTask$lambda$41$lambda$40 = ReactHostImpl.getOrCreateReactInstanceTask$lambda$41$lambda$40(task);
                return orCreateReactInstanceTask$lambda$41$lambda$40;
            }
        }, null, 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CreationResult getOrCreateReactInstanceTask$lambda$41$lambda$38(final ReactHostImpl reactHostImpl, String str, Task task) {
        boolean z10;
        Intrinsics.checkNotNullParameter(task, "task");
        Object result = task.getResult();
        if (result != null) {
            BridgelessReactContext orCreateReactContext = reactHostImpl.getOrCreateReactContext();
            orCreateReactContext.setJSExceptionHandler(reactHostImpl.getDevSupportManager());
            reactHostImpl.log(str, "Creating ReactInstance");
            ReactInstance reactInstance = new ReactInstance(orCreateReactContext, reactHostImpl.reactHostDelegate, reactHostImpl.componentFactory, reactHostImpl.getDevSupportManager(), new QueueThreadExceptionHandler() { // from class: com.facebook.react.runtime.t
                @Override // com.facebook.react.bridge.queue.QueueThreadExceptionHandler
                public final void handleException(Exception exc) {
                    ReactHostImpl.getOrCreateReactInstanceTask$lambda$41$lambda$38$lambda$36(ReactHostImpl.this, exc);
                }
            }, reactHostImpl.useDevSupport, reactHostImpl.getOrCreateReactHostInspectorTarget$ReactAndroid_release());
            reactHostImpl.reactInstance = reactInstance;
            MemoryPressureListener createMemoryPressureListener = reactHostImpl.createMemoryPressureListener(reactInstance);
            reactHostImpl.memoryPressureListener = createMemoryPressureListener;
            reactHostImpl.getMemoryPressureRouter().addMemoryPressureListener(createMemoryPressureListener);
            reactInstance.initializeEagerTurboModules();
            reactHostImpl.log(str, "Loading JS Bundle");
            reactInstance.loadJSBundle((JSBundleLoader) result);
            reactHostImpl.log(str, "Calling DevSupportManagerBase.onNewReactContextCreated(reactContext)");
            reactHostImpl.getDevSupportManager().onNewReactContextCreated(orCreateReactContext);
            orCreateReactContext.runOnJSQueueThread(new Runnable() { // from class: com.facebook.react.runtime.u
                @Override // java.lang.Runnable
                public final void run() {
                    ReactHostImpl.getOrCreateReactInstanceTask$lambda$41$lambda$38$lambda$37();
                }
            });
            if (reactHostImpl.reloadTask != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            return new CreationResult(reactInstance, orCreateReactContext, z10);
        }
        throw new IllegalStateException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getOrCreateReactInstanceTask$lambda$41$lambda$38$lambda$36(ReactHostImpl reactHostImpl, Exception e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        reactHostImpl.handleHostException$ReactAndroid_release(e10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getOrCreateReactInstanceTask$lambda$41$lambda$38$lambda$37() {
        ReactMarker.logMarker(ReactMarkerConstants.REACT_BRIDGELESS_LOADING_END, 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ReactInstance getOrCreateReactInstanceTask$lambda$41$lambda$39(ReactHostImpl reactHostImpl, String str, Task task) {
        boolean z10;
        Intrinsics.checkNotNullParameter(task, "task");
        Object result = task.getResult();
        if (result != null) {
            CreationResult creationResult = (CreationResult) result;
            ReactInstance creationResult2 = creationResult.getInstance();
            ReactContext context = creationResult.getContext();
            boolean isReloading = creationResult.isReloading();
            if (reactHostImpl.reactLifecycleStateManager.getLifecycleState() == LifecycleState.RESUMED) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (isReloading && !z10) {
                reactHostImpl.reactLifecycleStateManager.moveToOnHostResume(context, reactHostImpl.getCurrentActivity$ReactAndroid_release());
            } else {
                reactHostImpl.reactLifecycleStateManager.resumeReactContextIfHostResumed(context, reactHostImpl.getCurrentActivity$ReactAndroid_release());
            }
            reactHostImpl.log(str, "Executing ReactInstanceEventListeners");
            for (ReactInstanceEventListener reactInstanceEventListener : reactHostImpl.reactInstanceEventListeners) {
                reactInstanceEventListener.onReactContextInitialized(context);
            }
            return creationResult2;
        }
        throw new IllegalStateException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ReactInstance getOrCreateReactInstanceTask$lambda$41$lambda$40(Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        Object result = task.getResult();
        if (result != null) {
            return ((CreationResult) result).getInstance();
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final Task<ReactInstance> getOrCreateReloadTask(final String str) {
        log("getOrCreateReloadTask()");
        raiseSoftException$default(this, "getOrCreateReloadTask()", str, null, 4, null);
        Task<ReactInstance> task = this.reloadTask;
        if (task != null) {
            return task;
        }
        final Function2<Task<ReactInstance>, String, ReactInstance> createReactInstanceUnwrapper = createReactInstanceUnwrapper("Reload", "getOrCreateReloadTask()", str);
        log("getOrCreateReloadTask()", "Resetting createReactInstance task ref");
        Task<ReactInstance> continueWithTask = this.createReactInstanceTaskRef.getAndReset().continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.h
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateReloadTask$lambda$48;
                orCreateReloadTask$lambda$48 = ReactHostImpl.getOrCreateReloadTask$lambda$48(ReactHostImpl.this, r2, createReactInstanceUnwrapper, str, task2);
                return orCreateReloadTask$lambda$48;
            }
        }, this.uiExecutor).continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.i
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateReloadTask$lambda$49;
                orCreateReloadTask$lambda$49 = ReactHostImpl.getOrCreateReloadTask$lambda$49(Function2.this, this, r3, task2);
                return orCreateReloadTask$lambda$49;
            }
        }, this.bgExecutor).continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.j
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateReloadTask$lambda$51;
                orCreateReloadTask$lambda$51 = ReactHostImpl.getOrCreateReloadTask$lambda$51(Function2.this, this, r3, task2);
                return orCreateReloadTask$lambda$51;
            }
        }, this.uiExecutor).continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.k
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateReloadTask$lambda$52;
                orCreateReloadTask$lambda$52 = ReactHostImpl.getOrCreateReloadTask$lambda$52(Function2.this, this, r3, task2);
                return orCreateReloadTask$lambda$52;
            }
        }, this.bgExecutor).continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.l
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateReloadTask$lambda$53;
                orCreateReloadTask$lambda$53 = ReactHostImpl.getOrCreateReloadTask$lambda$53(Function2.this, this, r3, task2);
                return orCreateReloadTask$lambda$53;
            }
        }, this.bgExecutor).continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.n
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateReloadTask$lambda$54;
                orCreateReloadTask$lambda$54 = ReactHostImpl.getOrCreateReloadTask$lambda$54(ReactHostImpl.this, r2, str, task2);
                return orCreateReloadTask$lambda$54;
            }
        }, this.bgExecutor);
        this.reloadTask = continueWithTask;
        return continueWithTask;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateReloadTask$lambda$48(ReactHostImpl reactHostImpl, String str, Function2 function2, String str2, Task task) {
        ReactHostImpl reactHostImpl2;
        String str3;
        Intrinsics.checkNotNullParameter(task, "task");
        reactHostImpl.log(str, "Starting React Native reload");
        ReactInstance reactInstance = (ReactInstance) function2.invoke(task, "1: Starting reload");
        reactHostImpl.unregisterInstanceFromInspector$ReactAndroid_release(reactInstance);
        BridgelessReactContext nullable = reactHostImpl.bridgelessReactContextRef.getNullable();
        if (nullable == null) {
            reactHostImpl2 = reactHostImpl;
            str3 = str;
            raiseSoftException$default(reactHostImpl2, str3, "ReactContext is null. Reload reason: " + str2, null, 4, null);
        } else {
            reactHostImpl2 = reactHostImpl;
            str3 = str;
        }
        if (nullable != null && reactHostImpl2.reactLifecycleStateManager.getLifecycleState() == LifecycleState.RESUMED) {
            reactHostImpl2.log(str3, "Calling ReactContext.onHostPause()");
            nullable.onHostPause();
        }
        return Task.Companion.forResult(reactInstance);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateReloadTask$lambda$49(Function2 function2, ReactHostImpl reactHostImpl, String str, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        ReactInstance reactInstance = (ReactInstance) function2.invoke(task, "2: Surface shutdown");
        if (reactInstance == null) {
            raiseSoftException$default(reactHostImpl, str, "Skipping surface shutdown: ReactInstance null", null, 4, null);
            return task;
        }
        reactHostImpl.stopAttachedSurfaces(str, reactInstance);
        return task;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateReloadTask$lambda$51(Function2 function2, ReactHostImpl reactHostImpl, String str, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        function2.invoke(task, "3: Destroying ReactContext");
        for (Function0<Unit> function0 : reactHostImpl.beforeDestroyListeners) {
            function0.invoke();
        }
        MemoryPressureListener memoryPressureListener = reactHostImpl.memoryPressureListener;
        if (memoryPressureListener != null) {
            reactHostImpl.log(str, "Removing memory pressure listener");
            reactHostImpl.getMemoryPressureRouter().removeMemoryPressureListener(memoryPressureListener);
        }
        BridgelessReactContext nullable = reactHostImpl.bridgelessReactContextRef.getNullable();
        if (nullable != null) {
            reactHostImpl.log(str, "Resetting ReactContext ref");
            reactHostImpl.bridgelessReactContextRef.reset();
            reactHostImpl.log(str, "Destroying ReactContext");
            nullable.destroy();
        }
        if (reactHostImpl.useDevSupport && nullable != null) {
            reactHostImpl.log(str, "Calling DevSupportManager.onReactInstanceDestroyed(reactContext)");
            reactHostImpl.getDevSupportManager().onReactInstanceDestroyed(nullable);
        }
        return task;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateReloadTask$lambda$52(Function2 function2, ReactHostImpl reactHostImpl, String str, Task task) {
        ReactHostImpl reactHostImpl2;
        String str2;
        Intrinsics.checkNotNullParameter(task, "task");
        ReactInstance reactInstance = (ReactInstance) function2.invoke(task, "4: Destroying ReactInstance");
        if (reactInstance == null) {
            reactHostImpl2 = reactHostImpl;
            str2 = str;
            raiseSoftException$default(reactHostImpl2, str2, "Skipping ReactInstance.destroy(): ReactInstance null", null, 4, null);
        } else {
            reactHostImpl2 = reactHostImpl;
            str2 = str;
            reactHostImpl2.log(str2, "Resetting ReactInstance ptr");
            reactHostImpl2.reactInstance = null;
            reactHostImpl2.log(str2, "Destroying ReactInstance");
            reactInstance.destroy();
        }
        reactHostImpl2.log(str2, "Resetting start task ref");
        reactHostImpl2.startTask = null;
        return reactHostImpl2.getOrCreateReactInstanceTask();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateReloadTask$lambda$53(Function2 function2, ReactHostImpl reactHostImpl, String str, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        ReactInstance reactInstance = (ReactInstance) function2.invoke(task, "5: Restarting surfaces");
        if (reactInstance == null) {
            raiseSoftException$default(reactHostImpl, str, "Skipping surface restart: ReactInstance null", null, 4, null);
            return task;
        }
        reactHostImpl.startAttachedSurfaces(str, reactInstance);
        return task;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateReloadTask$lambda$54(ReactHostImpl reactHostImpl, String str, String str2, Task task) {
        ReactHostImpl reactHostImpl2;
        String str3;
        Intrinsics.checkNotNullParameter(task, "task");
        if (task.isFaulted()) {
            Exception error = task.getError();
            if (error != null) {
                String message = error.getMessage();
                reactHostImpl.raiseSoftException(str, "Error during reload. ReactInstance task faulted. Fault reason: " + message + ". Reload reason: " + str2, task.getError());
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        if (task.isCancelled()) {
            reactHostImpl2 = reactHostImpl;
            str3 = str;
            raiseSoftException$default(reactHostImpl2, str3, "Error during reload. ReactInstance task cancelled. Reload reason: " + str2, null, 4, null);
        } else {
            reactHostImpl2 = reactHostImpl;
            str3 = str;
        }
        reactHostImpl2.log(str3, "Resetting reload task ref");
        reactHostImpl2.reloadTask = null;
        return task;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Task<Void> getOrCreateStartTask() {
        Task<Void> task = this.startTask;
        if (task != null) {
            return task;
        }
        log("getOrCreateStartTask()", "Schedule");
        if (ReactBuildConfig.DEBUG) {
            db.a.b(ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture(), "enableBridgelessArchitecture FeatureFlag must be set to start ReactNative.");
            db.a.b(ReactNativeNewArchitectureFeatureFlags.enableFabricRenderer(), "enableFabricRenderer FeatureFlag must be set to start ReactNative.");
            db.a.b(ReactNativeNewArchitectureFeatureFlags.useTurboModules(), "useTurboModules FeatureFlag must be set to start ReactNative.");
        }
        if (ReactBuildConfig.UNSTABLE_ENABLE_MINIFY_LEGACY_ARCHITECTURE) {
            db.a.b(!ReactNativeNewArchitectureFeatureFlags.useFabricInterop(), "useFabricInterop FeatureFlag must be false when UNSTABLE_ENABLE_MINIFY_LEGACY_ARCHITECTURE == true.");
            db.a.b(!ReactNativeNewArchitectureFeatureFlags.useTurboModuleInterop(), "useTurboModuleInterop FeatureFlag must be false when UNSTABLE_ENABLE_MINIFY_LEGACY_ARCHITECTURE == true.");
        }
        Task continueWithTask = waitThenCallGetOrCreateReactInstanceTask().continueWithTask(new Continuation() { // from class: com.facebook.react.runtime.v
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task2) {
                Task orCreateStartTask$lambda$26;
                orCreateStartTask$lambda$26 = ReactHostImpl.getOrCreateStartTask$lambda$26(ReactHostImpl.this, task2);
                return orCreateStartTask$lambda$26;
            }
        }, this.bgExecutor);
        this.startTask = continueWithTask;
        return continueWithTask;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateStartTask$lambda$26(ReactHostImpl reactHostImpl, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        if (task.isFaulted()) {
            final Exception error = task.getError();
            if (error != null) {
                if (reactHostImpl.useDevSupport) {
                    reactHostImpl.getDevSupportManager().handleException(error);
                } else {
                    reactHostImpl.reactHostDelegate.handleInstanceException(error);
                }
                String message = error.getMessage();
                return Task.continueWithTask$default(reactHostImpl.getOrCreateDestroyTask("getOrCreateStartTask() failure: " + message, error), new Continuation() { // from class: com.facebook.react.runtime.g
                    @Override // com.facebook.react.runtime.internal.bolts.Continuation
                    public final Object then(Task task2) {
                        Task orCreateStartTask$lambda$26$lambda$25;
                        orCreateStartTask$lambda$26$lambda$25 = ReactHostImpl.getOrCreateStartTask$lambda$26$lambda$25(error, task2);
                        return orCreateStartTask$lambda$26$lambda$25;
                    }
                }, null, 2, null);
            }
            throw new IllegalStateException("Required value was null.");
        }
        return task.makeVoid();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task getOrCreateStartTask$lambda$26$lambda$25(Exception exc, Task it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Task.Companion.forError(exc);
    }

    private final Task<Boolean> isMetroRunning() {
        log("isMetroRunning()");
        final TaskCompletionSource taskCompletionSource = new TaskCompletionSource();
        getDevSupportManager().isPackagerRunning(new PackagerStatusCallback() { // from class: com.facebook.react.runtime.h0
            @Override // com.facebook.react.devsupport.interfaces.PackagerStatusCallback
            public final void onPackagerStatusFetched(boolean z10) {
                ReactHostImpl._get_isMetroRunning_$lambda$43(ReactHostImpl.this, r2, taskCompletionSource, z10);
            }
        });
        return taskCompletionSource.getTask();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit loadBundle$lambda$16(ReactHostImpl reactHostImpl, String str, JSBundleLoader jSBundleLoader, ReactInstance reactInstance) {
        Intrinsics.checkNotNullParameter(reactInstance, "reactInstance");
        reactHostImpl.log(str, "Execute");
        reactInstance.loadJSBundle(jSBundleLoader);
        return Unit.f33298a;
    }

    private final Task<JSBundleLoader> loadJSBundleFromMetro() {
        log("loadJSBundleFromMetro()");
        final TaskCompletionSource taskCompletionSource = new TaskCompletionSource();
        DevSupportManager devSupportManager = getDevSupportManager();
        Intrinsics.checkNotNull(devSupportManager, "null cannot be cast to non-null type com.facebook.react.devsupport.DevSupportManagerBase");
        final DevSupportManagerBase devSupportManagerBase = (DevSupportManagerBase) devSupportManager;
        DevServerHelper devServerHelper = devSupportManagerBase.getDevServerHelper();
        String jSAppBundleName = devSupportManagerBase.getJSAppBundleName();
        if (jSAppBundleName != null) {
            final String devServerBundleURL = devServerHelper.getDevServerBundleURL(jSAppBundleName);
            devSupportManagerBase.reloadJSFromServer(devServerBundleURL, new BundleLoadCallback() { // from class: com.facebook.react.runtime.ReactHostImpl$loadJSBundleFromMetro$1
                @Override // com.facebook.react.devsupport.interfaces.BundleLoadCallback
                public void onError(Exception cause) {
                    Intrinsics.checkNotNullParameter(cause, "cause");
                    taskCompletionSource.setError(cause);
                }

                @Override // com.facebook.react.devsupport.interfaces.BundleLoadCallback
                public void onSuccess() {
                    ReactHostImpl.this.log(r2, "Creating BundleLoader");
                    taskCompletionSource.setResult(JSBundleLoader.Companion.createCachedBundleFromNetworkLoader(devServerBundleURL, devSupportManagerBase.getDownloadedJSBundleFile()));
                }
            });
            return taskCompletionSource.getTask();
        }
        throw new IllegalStateException("Required value was null.");
    }

    @fb.a
    private final void loadNetworkResource(String str, InspectorNetworkRequestListener inspectorNetworkRequestListener) {
        InspectorNetworkHelper.loadNetworkResource(str, inspectorNetworkRequestListener);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void log(String str, String str2) {
        BridgelessReactStateTracker bridgelessReactStateTracker = this.bridgelessReactStateTracker;
        int i10 = this.f12215id;
        bridgelessReactStateTracker.enterState("ReactHost{" + i10 + "}." + str + ": " + str2);
    }

    private final void maybeEnableDevSupport(boolean z10) {
        if (this.useDevSupport) {
            getDevSupportManager().setDevSupportEnabled(z10);
        }
    }

    private final void moveToHostDestroy(ReactContext reactContext) {
        this.reactLifecycleStateManager.moveToOnHostDestroy(reactContext);
        setCurrentActivity(null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit prerenderSurface$lambda$1(ReactHostImpl reactHostImpl, String str, ReactSurfaceImpl reactSurfaceImpl, ReactInstance reactInstance) {
        Intrinsics.checkNotNullParameter(reactInstance, "reactInstance");
        reactHostImpl.log(str, "Execute");
        reactInstance.prerenderSurface(reactSurfaceImpl);
        return Unit.f33298a;
    }

    private final void raiseSoftException(String str, String str2, Throwable th2) {
        String str3 = "raiseSoftException(" + str + ")";
        log(str3, str2);
        ReactSoftExceptionLogger.logSoftException(TAG, new ReactNoCrashSoftException(str3 + ": " + str2, th2));
    }

    static /* synthetic */ void raiseSoftException$default(ReactHostImpl reactHostImpl, String str, String str2, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        reactHostImpl.raiseSoftException(str, str2, th2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit registerSegment$lambda$17(ReactHostImpl reactHostImpl, String str, int i10, String str2, Callback callback, ReactInstance reactInstance) {
        Intrinsics.checkNotNullParameter(reactInstance, "reactInstance");
        reactHostImpl.log(str, "Execute");
        reactInstance.registerSegment(i10, str2);
        if (callback != null) {
            callback.invoke(new Object[0]);
            return Unit.f33298a;
        }
        throw new IllegalStateException("Required value was null.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x0016, code lost:
        if (r0 == null) goto L8;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final com.facebook.react.runtime.internal.bolts.Task reload$lambda$7(final com.facebook.react.runtime.ReactHostImpl r3, final java.lang.String r4) {
        /*
            com.facebook.react.runtime.internal.bolts.Task<java.lang.Void> r0 = r3.destroyTask
            if (r0 == 0) goto L18
            java.lang.String r1 = "reload()"
            java.lang.String r2 = "Waiting for destroy to finish, before reloading React Native."
            r3.log(r1, r2)
            com.facebook.react.runtime.d r1 = new com.facebook.react.runtime.d
            r1.<init>()
            java.util.concurrent.Executor r2 = r3.bgExecutor
            com.facebook.react.runtime.internal.bolts.Task r0 = r0.continueWithTask(r1, r2)
            if (r0 != 0) goto L1c
        L18:
            com.facebook.react.runtime.internal.bolts.Task r0 = r3.getOrCreateReloadTask(r4)
        L1c:
            com.facebook.react.runtime.internal.bolts.Task r4 = r0.makeVoid()
            com.facebook.react.runtime.e r0 = new com.facebook.react.runtime.e
            r0.<init>()
            java.util.concurrent.Executor r3 = r3.bgExecutor
            com.facebook.react.runtime.internal.bolts.Task r3 = r4.continueWithTask(r0, r3)
            return r3
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.runtime.ReactHostImpl.reload$lambda$7(com.facebook.react.runtime.ReactHostImpl, java.lang.String):com.facebook.react.runtime.internal.bolts.Task");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task reload$lambda$7$lambda$5$lambda$4(ReactHostImpl reactHostImpl, String str, Task it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return reactHostImpl.getOrCreateReloadTask(str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task reload$lambda$7$lambda$6(ReactHostImpl reactHostImpl, Task task) {
        Intrinsics.checkNotNullParameter(task, "task");
        if (task.isFaulted()) {
            Exception error = task.getError();
            if (error != null) {
                if (reactHostImpl.useDevSupport) {
                    reactHostImpl.getDevSupportManager().handleException(error);
                } else {
                    reactHostImpl.reactHostDelegate.handleInstanceException(error);
                }
                return reactHostImpl.getOrCreateDestroyTask("Reload failed", error);
            }
            throw new IllegalStateException("Required value was null.");
        }
        return task;
    }

    private final void setCurrentActivity(Activity activity) {
        this.activity.set(activity);
        if (activity != null) {
            this.lastUsedActivityRef.set(new WeakReference<>(activity));
        }
    }

    @fb.a
    private final void setPausedInDebuggerMessage(String str) {
        if (str == null) {
            getDevSupportManager().hidePausedInDebuggerOverlay();
        } else {
            getDevSupportManager().showPausedInDebuggerOverlay(str, new DevSupportManager.PausedInDebuggerOverlayCommandListener() { // from class: com.facebook.react.runtime.ReactHostImpl$setPausedInDebuggerMessage$1
                @Override // com.facebook.react.devsupport.interfaces.DevSupportManager.PausedInDebuggerOverlayCommandListener
                public void onResume() {
                    ReactHostInspectorTarget reactHostInspectorTarget;
                    UiThreadUtil.assertOnUiThread();
                    reactHostInspectorTarget = ReactHostImpl.this.reactHostInspectorTarget;
                    if (reactHostInspectorTarget != null) {
                        reactHostInspectorTarget.sendDebuggerResumeCommand();
                    }
                }
            });
        }
    }

    private final void startAttachedSurfaces(String str, ReactInstance reactInstance) {
        log(str, "Restarting previously running React Native Surfaces");
        synchronized (this.attachedSurfaces) {
            try {
                for (ReactSurfaceImpl reactSurfaceImpl : this.attachedSurfaces) {
                    reactInstance.startSurface(reactSurfaceImpl);
                }
                Unit unit = Unit.f33298a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit startSurface$lambda$2(ReactHostImpl reactHostImpl, String str, ReactSurfaceImpl reactSurfaceImpl, ReactInstance reactInstance) {
        Intrinsics.checkNotNullParameter(reactInstance, "reactInstance");
        reactHostImpl.log(str, "Execute");
        reactInstance.startSurface(reactSurfaceImpl);
        return Unit.f33298a;
    }

    private final void stopAttachedSurfaces(String str, ReactInstance reactInstance) {
        log(str, "Stopping all React Native surfaces");
        synchronized (this.attachedSurfaces) {
            try {
                for (ReactSurfaceImpl reactSurfaceImpl : this.attachedSurfaces) {
                    reactInstance.stopSurface(reactSurfaceImpl);
                    reactSurfaceImpl.clear();
                }
                Unit unit = Unit.f33298a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit stopSurface$lambda$3(ReactHostImpl reactHostImpl, String str, ReactSurfaceImpl reactSurfaceImpl, ReactInstance reactInstance) {
        Intrinsics.checkNotNullParameter(reactInstance, "reactInstance");
        reactHostImpl.log(str, "Execute");
        reactInstance.stopSurface(reactSurfaceImpl);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Task<ReactInstance> waitThenCallGetOrCreateReactInstanceTask() {
        return waitThenCallGetOrCreateReactInstanceTaskWithRetries(0, 4);
    }

    private final Task<ReactInstance> waitThenCallGetOrCreateReactInstanceTaskWithRetries(final int i10, final int i11) {
        Task<ReactInstance> task = this.reloadTask;
        if (task != null) {
            log("waitThenCallGetOrCreateReactInstanceTaskWithRetries", "React Native is reloading. Return reload task.");
            return task;
        }
        Task<Void> task2 = this.destroyTask;
        if (task2 != null) {
            if (i10 < i11) {
                log("waitThenCallGetOrCreateReactInstanceTaskWithRetries", "React Native is tearing down.Wait for teardown to finish, before trying again (try count = " + i10 + ").");
                return task2.onSuccessTask(new Continuation() { // from class: com.facebook.react.runtime.f
                    @Override // com.facebook.react.runtime.internal.bolts.Continuation
                    public final Object then(Task task3) {
                        Task waitThenCallGetOrCreateReactInstanceTaskWithRetries$lambda$35$lambda$34;
                        waitThenCallGetOrCreateReactInstanceTaskWithRetries$lambda$35$lambda$34 = ReactHostImpl.waitThenCallGetOrCreateReactInstanceTaskWithRetries$lambda$35$lambda$34(ReactHostImpl.this, i10, i11, task3);
                        return waitThenCallGetOrCreateReactInstanceTaskWithRetries$lambda$35$lambda$34;
                    }
                }, this.bgExecutor);
            }
            raiseSoftException$default(this, "waitThenCallGetOrCreateReactInstanceTaskWithRetries", "React Native is tearing down. Not wait for teardown to finish: reached max retries.", null, 4, null);
        }
        return getOrCreateReactInstanceTask();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Task waitThenCallGetOrCreateReactInstanceTaskWithRetries$lambda$35$lambda$34(ReactHostImpl reactHostImpl, int i10, int i11, Task it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return reactHostImpl.waitThenCallGetOrCreateReactInstanceTaskWithRetries(i10 + 1, i11);
    }

    @Override // com.facebook.react.ReactHost
    public void addBeforeDestroyListener(@NotNull Function0<Unit> onBeforeDestroy) {
        Intrinsics.checkNotNullParameter(onBeforeDestroy, "onBeforeDestroy");
        this.beforeDestroyListeners.add(onBeforeDestroy);
    }

    @Override // com.facebook.react.ReactHost
    public void addReactInstanceEventListener(@NotNull ReactInstanceEventListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.reactInstanceEventListeners.add(listener);
    }

    public final void attachSurface$ReactAndroid_release(@NotNull ReactSurfaceImpl surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        int surfaceID = surface.getSurfaceID();
        log("attachSurface(surfaceId = " + surfaceID + ")");
        synchronized (this.attachedSurfaces) {
            this.attachedSurfaces.add(surface);
        }
    }

    @NotNull
    public final Task<Boolean> callFunctionOnModule$ReactAndroid_release(@NotNull final String moduleName, @NotNull final String methodName, @NotNull final NativeArray args) {
        Intrinsics.checkNotNullParameter(moduleName, "moduleName");
        Intrinsics.checkNotNullParameter(methodName, "methodName");
        Intrinsics.checkNotNullParameter(args, "args");
        return callWithExistingReactInstance$default(this, "callFunctionOnModule(\"" + moduleName + "\", \"" + methodName + "\")", null, new Function1() { // from class: com.facebook.react.runtime.q0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit callFunctionOnModule$lambda$18;
                callFunctionOnModule$lambda$18 = ReactHostImpl.callFunctionOnModule$lambda$18(moduleName, methodName, args, (ReactInstance) obj);
                return callFunctionOnModule$lambda$18;
            }
        }, 2, null);
    }

    @Override // com.facebook.react.ReactHost
    @NotNull
    public ReactSurface createSurface(@NotNull Context context, @NotNull String moduleName, Bundle bundle) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(moduleName, "moduleName");
        ReactSurfaceImpl reactSurfaceImpl = new ReactSurfaceImpl(context, moduleName, bundle);
        ReactSurfaceView createReactSurfaceView = this.reactHostDelegate.createReactSurfaceView(context, reactSurfaceImpl);
        createReactSurfaceView.setShouldLogContentAppeared(true);
        reactSurfaceImpl.attachView(createReactSurfaceView);
        reactSurfaceImpl.attach(this);
        return reactSurfaceImpl;
    }

    @Override // com.facebook.react.ReactHost
    @NotNull
    public TaskInterface<Void> destroy(@NotNull String reason, Exception exc, @NotNull final Function1<? super Boolean, Unit> onDestroyFinished) {
        Intrinsics.checkNotNullParameter(reason, "reason");
        Intrinsics.checkNotNullParameter(onDestroyFinished, "onDestroyFinished");
        TaskInterface<Void> destroy = destroy(reason, exc);
        Intrinsics.checkNotNull(destroy, "null cannot be cast to non-null type com.facebook.react.runtime.internal.bolts.Task<java.lang.Void>");
        return Task.continueWith$default((Task) destroy, new Continuation() { // from class: com.facebook.react.runtime.p
            @Override // com.facebook.react.runtime.internal.bolts.Continuation
            public final Object then(Task task) {
                Void destroy$lambda$8;
                destroy$lambda$8 = ReactHostImpl.destroy$lambda$8(Function1.this, task);
                return destroy$lambda$8;
            }
        }, null, 2, null);
    }

    public final void detachSurface$ReactAndroid_release(@NotNull ReactSurfaceImpl surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        int surfaceID = surface.getSurfaceID();
        log("detachSurface(surfaceId = " + surfaceID + ")");
        synchronized (this.attachedSurfaces) {
            this.attachedSurfaces.remove(surface);
        }
    }

    public final Activity getCurrentActivity$ReactAndroid_release() {
        return this.activity.get();
    }

    @Override // com.facebook.react.ReactHost
    public ReactContext getCurrentReactContext() {
        return this.bridgelessReactContextRef.getNullable();
    }

    @NotNull
    public final DefaultHardwareBackBtnHandler getDefaultBackButtonHandler$ReactAndroid_release() {
        return new DefaultHardwareBackBtnHandler() { // from class: com.facebook.react.runtime.f0
            @Override // com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
            public final void invokeDefaultOnBackPressed() {
                ReactHostImpl._get_defaultBackButtonHandler_$lambda$15(ReactHostImpl.this);
            }
        };
    }

    @Override // com.facebook.react.ReactHost
    @NotNull
    public DevSupportManager getDevSupportManager() {
        return this.devSupportManager;
    }

    @NotNull
    public final EventDispatcher getEventDispatcher$ReactAndroid_release() {
        EventDispatcher eventDispatcher;
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null && (eventDispatcher = reactInstance.getEventDispatcher()) != null) {
            return eventDispatcher;
        }
        return BlackHoleEventDispatcher.INSTANCE;
    }

    public final JavaScriptContextHolder getJavaScriptContextHolder$ReactAndroid_release() {
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null) {
            return reactInstance.getJavaScriptContextHolder();
        }
        return null;
    }

    public final CallInvokerHolder getJsCallInvokerHolder$ReactAndroid_release() {
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null) {
            return reactInstance.getJSCallInvokerHolder();
        }
        raiseSoftException$default(this, "getJSCallInvokerHolder()", "Tried to get JSCallInvokerHolder while instance is not ready", null, 4, null);
        return null;
    }

    public final Activity getLastUsedActivity$ReactAndroid_release() {
        WeakReference<Activity> weakReference = this.lastUsedActivityRef.get();
        if (weakReference != null) {
            return weakReference.get();
        }
        return null;
    }

    @Override // com.facebook.react.ReactHost
    @NotNull
    public LifecycleState getLifecycleState() {
        return this.reactLifecycleStateManager.getLifecycleState();
    }

    @Override // com.facebook.react.ReactHost
    @NotNull
    public MemoryPressureRouter getMemoryPressureRouter() {
        return this.memoryPressureRouter;
    }

    public final <T extends NativeModule> T getNativeModule$ReactAndroid_release(@NotNull Class<T> nativeModuleInterface) {
        Intrinsics.checkNotNullParameter(nativeModuleInterface, "nativeModuleInterface");
        if (!ReactBuildConfig.UNSTABLE_ENABLE_MINIFY_LEGACY_ARCHITECTURE && Intrinsics.areEqual(nativeModuleInterface, UIManagerModule.class)) {
            ReactSoftExceptionLogger.logSoftExceptionVerbose(TAG, new ReactNoCrashBridgeNotAllowedSoftException("getNativeModule(UIManagerModule.class) cannot be called when the bridge is disabled"));
        }
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null) {
            return (T) reactInstance.getNativeModule(nativeModuleInterface);
        }
        return null;
    }

    @NotNull
    public final Collection<NativeModule> getNativeModules$ReactAndroid_release() {
        Collection<NativeModule> nativeModules;
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null && (nativeModules = reactInstance.getNativeModules()) != null) {
            return nativeModules;
        }
        return CollectionsKt.l();
    }

    public final ReactHostInspectorTarget getOrCreateReactHostInspectorTarget$ReactAndroid_release() {
        if (this.reactHostInspectorTarget == null && InspectorFlags.getFuseboxEnabled()) {
            this.reactHostInspectorTarget = new ReactHostInspectorTarget(this);
        }
        return this.reactHostInspectorTarget;
    }

    @Override // com.facebook.react.ReactHost
    public ReactQueueConfiguration getReactQueueConfiguration() {
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null) {
            return reactInstance.getReactQueueConfiguration();
        }
        return null;
    }

    public final RuntimeExecutor getRuntimeExecutor$ReactAndroid_release() {
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null) {
            return reactInstance.getBufferedRuntimeExecutor();
        }
        raiseSoftException$default(this, "getRuntimeExecutor()", "Tried to get runtime executor while instance is not ready", null, 4, null);
        return null;
    }

    public final FabricUIManager getUiManager$ReactAndroid_release() {
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null) {
            return reactInstance.getFabricUIManager();
        }
        return null;
    }

    public final void handleHostException$ReactAndroid_release(@NotNull Exception e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        String str = "handleHostException(message = \"" + e10.getMessage() + "\")";
        log(str);
        if (this.useDevSupport) {
            getDevSupportManager().handleException(e10);
        } else {
            this.reactHostDelegate.handleInstanceException(e10);
        }
        destroy(str, e10);
    }

    public final <T extends NativeModule> boolean hasNativeModule$ReactAndroid_release(@NotNull Class<T> nativeModuleInterface) {
        Intrinsics.checkNotNullParameter(nativeModuleInterface, "nativeModuleInterface");
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null) {
            return reactInstance.hasNativeModule(nativeModuleInterface);
        }
        return false;
    }

    @Override // com.facebook.react.ReactHost
    public void invalidate() {
        p8.a.b(TAG, "ReactHostImpl.invalidate()");
        this.hostInvalidated = true;
        destroy("ReactHostImpl.invalidate()", null);
    }

    public final boolean isInstanceInitialized$ReactAndroid_release() {
        if (this.reactInstance != null) {
            return true;
        }
        return false;
    }

    public final boolean isSurfaceAttached$ReactAndroid_release(@NotNull ReactSurfaceImpl surface) {
        boolean contains;
        Intrinsics.checkNotNullParameter(surface, "surface");
        synchronized (this.attachedSurfaces) {
            contains = this.attachedSurfaces.contains(surface);
        }
        return contains;
    }

    public final boolean isSurfaceWithModuleNameAttached$ReactAndroid_release(@NotNull String moduleName) {
        boolean z10;
        Intrinsics.checkNotNullParameter(moduleName, "moduleName");
        synchronized (this.attachedSurfaces) {
            try {
                Set<ReactSurfaceImpl> set = this.attachedSurfaces;
                z10 = false;
                if (!(set instanceof Collection) || !set.isEmpty()) {
                    Iterator<T> it = set.iterator();
                    while (true) {
                        if (!it.hasNext()) {
                            break;
                        } else if (Intrinsics.areEqual(((ReactSurfaceImpl) it.next()).getModuleName(), moduleName)) {
                            z10 = true;
                            break;
                        }
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return z10;
    }

    @NotNull
    public final Task<Boolean> loadBundle$ReactAndroid_release(@NotNull final JSBundleLoader bundleLoader) {
        Intrinsics.checkNotNullParameter(bundleLoader, "bundleLoader");
        log("loadBundle()", "Schedule");
        return callWithExistingReactInstance$default(this, "loadBundle()", null, new Function1() { // from class: com.facebook.react.runtime.j0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit loadBundle$lambda$16;
                loadBundle$lambda$16 = ReactHostImpl.loadBundle$lambda$16(ReactHostImpl.this, r2, bundleLoader, (ReactInstance) obj);
                return loadBundle$lambda$16;
            }
        }, 2, null);
    }

    @Override // com.facebook.react.ReactHost
    public void onActivityResult(@NotNull Activity activity, int i10, int i11, Intent intent) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        String str = "onActivityResult(activity = \"" + activity + "\", requestCode = \"" + i10 + "\", resultCode = \"" + i11 + "\", data = \"" + intent + "\")";
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext != null) {
            currentReactContext.onActivityResult(activity, i10, i11, intent);
        } else {
            raiseSoftException$default(this, str, "Tried to access onActivityResult while context is not ready", null, 4, null);
        }
    }

    @Override // com.facebook.react.ReactHost
    public boolean onBackPressed() {
        DeviceEventManagerModule deviceEventManagerModule;
        UiThreadUtil.assertOnUiThread();
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance == null || (deviceEventManagerModule = (DeviceEventManagerModule) reactInstance.getNativeModule(DeviceEventManagerModule.class)) == null) {
            return false;
        }
        deviceEventManagerModule.emitHardwareBackPressed();
        return true;
    }

    @Override // com.facebook.react.ReactHost
    public void onConfigurationChanged(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext != null) {
            if (ReactNativeFeatureFlags.enableFontScaleChangesUpdatingLayout()) {
                DisplayMetricsHolder.initDisplayMetrics(currentReactContext);
            }
            AppearanceModule appearanceModule = (AppearanceModule) currentReactContext.getNativeModule(AppearanceModule.class);
            if (appearanceModule != null) {
                appearanceModule.onConfigurationChanged(context);
            }
        }
    }

    @Override // com.facebook.react.ReactHost
    public void onHostDestroy() {
        log("onHostDestroy()");
        maybeEnableDevSupport(false);
        moveToHostDestroy(getCurrentReactContext());
    }

    @Override // com.facebook.react.ReactHost
    public void onHostLeaveHint(Activity activity) {
        log("onUserLeaveHint(activity)");
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext != null) {
            currentReactContext.onUserLeaveHint(activity);
        }
    }

    @Override // com.facebook.react.ReactHost
    public void onHostPause(Activity activity) {
        log("onHostPause(activity)");
        if (activity != null) {
            this.activeActivities.remove(activity);
            if (this.activeActivities.size() > 0) {
                return;
            }
        }
        maybeEnableDevSupport(false);
        this.defaultHardwareBackBtnHandler = null;
        this.reactLifecycleStateManager.moveToOnHostPause(getCurrentReactContext(), activity);
    }

    @Override // com.facebook.react.ReactHost
    public void onHostResume(Activity activity, DefaultHardwareBackBtnHandler defaultHardwareBackBtnHandler) {
        this.defaultHardwareBackBtnHandler = defaultHardwareBackBtnHandler;
        onHostResume(activity);
    }

    @Override // com.facebook.react.ReactHost
    public void onNewIntent(@NotNull Intent intent) {
        DeviceEventManagerModule deviceEventManagerModule;
        Intrinsics.checkNotNullParameter(intent, "intent");
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext != null) {
            String action = intent.getAction();
            Uri data = intent.getData();
            if (data != null && ((Intrinsics.areEqual("android.intent.action.VIEW", action) || Intrinsics.areEqual("android.nfc.action.NDEF_DISCOVERED", action)) && (deviceEventManagerModule = (DeviceEventManagerModule) currentReactContext.getNativeModule(DeviceEventManagerModule.class)) != null)) {
                deviceEventManagerModule.emitNewIntentReceived(data);
            }
            currentReactContext.onNewIntent(getCurrentActivity$ReactAndroid_release(), intent);
            return;
        }
        raiseSoftException$default(this, "onNewIntent(intent = \"" + intent + "\")", "Tried to access onNewIntent while context is not ready", null, 4, null);
    }

    @Override // com.facebook.react.ReactHost
    public void onWindowFocusChange(boolean z10) {
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext != null) {
            currentReactContext.onWindowFocusChange(z10);
            return;
        }
        raiseSoftException$default(this, "onWindowFocusChange(hasFocus = \"" + z10 + "\")", "Tried to access onWindowFocusChange while context is not ready", null, 4, null);
    }

    @NotNull
    public final TaskInterface<Void> prerenderSurface$ReactAndroid_release(@NotNull final ReactSurfaceImpl surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        final String str = "prerenderSurface(surfaceId = " + surface.getSurfaceID() + ")";
        log(str, "Schedule");
        attachSurface$ReactAndroid_release(surface);
        return callAfterGetOrCreateReactInstance(str, this.bgExecutor, new Function1() { // from class: com.facebook.react.runtime.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit prerenderSurface$lambda$1;
                prerenderSurface$lambda$1 = ReactHostImpl.prerenderSurface$lambda$1(ReactHostImpl.this, str, surface, (ReactInstance) obj);
                return prerenderSurface$lambda$1;
            }
        });
    }

    @NotNull
    public final Task<Boolean> registerSegment$ReactAndroid_release(final int i10, @NotNull final String path, final Callback callback) {
        Intrinsics.checkNotNullParameter(path, "path");
        final String str = "registerSegment(segmentId = \"" + i10 + "\", path = \"" + path + "\")";
        log(str, "Schedule");
        return callWithExistingReactInstance$default(this, str, null, new Function1() { // from class: com.facebook.react.runtime.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit registerSegment$lambda$17;
                registerSegment$lambda$17 = ReactHostImpl.registerSegment$lambda$17(ReactHostImpl.this, str, i10, path, callback, (ReactInstance) obj);
                return registerSegment$lambda$17;
            }
        }, 2, null);
    }

    @Override // com.facebook.react.ReactHost
    @NotNull
    public TaskInterface<Void> reload(@NotNull final String reason) {
        Intrinsics.checkNotNullParameter(reason, "reason");
        return Task.Companion.call(new Callable() { // from class: com.facebook.react.runtime.b
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Task reload$lambda$7;
                reload$lambda$7 = ReactHostImpl.reload$lambda$7(ReactHostImpl.this, reason);
                return reload$lambda$7;
            }
        }, this.bgExecutor);
    }

    @Override // com.facebook.react.ReactHost
    public void removeBeforeDestroyListener(@NotNull Function0<Unit> onBeforeDestroy) {
        Intrinsics.checkNotNullParameter(onBeforeDestroy, "onBeforeDestroy");
        this.beforeDestroyListeners.remove(onBeforeDestroy);
    }

    @Override // com.facebook.react.ReactHost
    public void removeReactInstanceEventListener(@NotNull ReactInstanceEventListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.reactInstanceEventListeners.remove(listener);
    }

    @Override // com.facebook.react.ReactHost
    @NotNull
    public TaskInterface<Void> start() {
        return Task.Companion.call(new Callable() { // from class: com.facebook.react.runtime.m0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Task orCreateStartTask;
                orCreateStartTask = ReactHostImpl.this.getOrCreateStartTask();
                return orCreateStartTask;
            }
        }, this.bgExecutor);
    }

    @NotNull
    public final TaskInterface<Void> startSurface$ReactAndroid_release(@NotNull final ReactSurfaceImpl surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        final String str = "startSurface(surfaceId = " + surface.getSurfaceID() + ")";
        log(str, "Schedule");
        attachSurface$ReactAndroid_release(surface);
        return callAfterGetOrCreateReactInstance(str, this.bgExecutor, new Function1() { // from class: com.facebook.react.runtime.n0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit startSurface$lambda$2;
                startSurface$lambda$2 = ReactHostImpl.startSurface$lambda$2(ReactHostImpl.this, str, surface, (ReactInstance) obj);
                return startSurface$lambda$2;
            }
        });
    }

    @NotNull
    public final TaskInterface<Void> stopSurface$ReactAndroid_release(@NotNull final ReactSurfaceImpl surface) {
        Intrinsics.checkNotNullParameter(surface, "surface");
        final String str = "stopSurface(surfaceId = " + surface.getSurfaceID() + ")";
        log(str, "Schedule");
        detachSurface$ReactAndroid_release(surface);
        return callWithExistingReactInstance(str, this.bgExecutor, new Function1() { // from class: com.facebook.react.runtime.d0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit stopSurface$lambda$3;
                stopSurface$lambda$3 = ReactHostImpl.stopSurface$lambda$3(ReactHostImpl.this, str, surface, (ReactInstance) obj);
                return stopSurface$lambda$3;
            }
        }).makeVoid();
    }

    public final void unregisterInstanceFromInspector$ReactAndroid_release(ReactInstance reactInstance) {
        if (reactInstance != null) {
            if (InspectorFlags.getFuseboxEnabled()) {
                ReactHostInspectorTarget reactHostInspectorTarget = this.reactHostInspectorTarget;
                boolean z10 = false;
                if (reactHostInspectorTarget != null && reactHostInspectorTarget.isValid()) {
                    z10 = true;
                }
                db.a.b(z10, "Host inspector target destroyed before instance was unregistered");
            }
            reactInstance.unregisterFromInspector();
        }
    }

    private final void log(String str) {
        BridgelessReactStateTracker bridgelessReactStateTracker = this.bridgelessReactStateTracker;
        int i10 = this.f12215id;
        bridgelessReactStateTracker.enterState("ReactHost{" + i10 + "}." + str);
    }

    @Override // com.facebook.react.ReactHost
    @NotNull
    public TaskInterface<Void> destroy(@NotNull final String reason, final Exception exc) {
        Intrinsics.checkNotNullParameter(reason, "reason");
        return Task.Companion.call(new Callable() { // from class: com.facebook.react.runtime.k0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Task destroy$lambda$10;
                destroy$lambda$10 = ReactHostImpl.destroy$lambda$10(ReactHostImpl.this, reason, exc);
                return destroy$lambda$10;
            }
        }, this.bgExecutor);
    }

    @Override // com.facebook.react.ReactHost
    public void onHostResume(Activity activity) {
        log("onHostResume(activity)");
        if (activity != null) {
            this.activeActivities.put(activity, Boolean.TRUE);
        }
        setCurrentActivity(activity);
        maybeEnableDevSupport(true);
        this.reactLifecycleStateManager.moveToOnHostResume(getCurrentReactContext(), activity);
    }

    @Override // com.facebook.react.ReactHost
    public void onHostDestroy(Activity activity) {
        log("onHostDestroy(activity)");
        if (getCurrentActivity$ReactAndroid_release() == activity) {
            maybeEnableDevSupport(false);
            moveToHostDestroy(getCurrentReactContext());
        }
    }

    public final NativeModule getNativeModule$ReactAndroid_release(@NotNull String nativeModuleName) {
        Intrinsics.checkNotNullParameter(nativeModuleName, "nativeModuleName");
        ReactInstance reactInstance = this.reactInstance;
        if (reactInstance != null) {
            return reactInstance.getNativeModule(nativeModuleName);
        }
        return null;
    }

    @Override // com.facebook.react.ReactHost
    public void onHostPause() {
        log("onHostPause()");
        maybeEnableDevSupport(false);
        this.defaultHardwareBackBtnHandler = null;
        this.reactLifecycleStateManager.moveToOnHostPause(getCurrentReactContext(), getCurrentActivity$ReactAndroid_release());
    }

    public /* synthetic */ ReactHostImpl(Context context, ReactHostDelegate reactHostDelegate, ComponentFactory componentFactory, Executor executor, Executor executor2, boolean z10, boolean z11, DevSupportManagerFactory devSupportManagerFactory, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, reactHostDelegate, componentFactory, (i10 & 8) != 0 ? Executors.newSingleThreadExecutor() : executor, (i10 & 16) != 0 ? Task.UI_THREAD_EXECUTOR : executor2, z10, z11, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : devSupportManagerFactory);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public ReactHostImpl(@org.jetbrains.annotations.NotNull android.content.Context r13, @org.jetbrains.annotations.NotNull com.facebook.react.runtime.ReactHostDelegate r14, @org.jetbrains.annotations.NotNull com.facebook.react.fabric.ComponentFactory r15, boolean r16, boolean r17) {
        /*
            r12 = this;
            java.lang.String r0 = "context"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r13, r0)
            java.lang.String r0 = "delegate"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r14, r0)
            java.lang.String r0 = "componentFactory"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r15, r0)
            java.util.concurrent.ExecutorService r5 = java.util.concurrent.Executors.newSingleThreadExecutor()
            java.lang.String r0 = "newSingleThreadExecutor(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r5, r0)
            java.util.concurrent.Executor r6 = com.facebook.react.runtime.internal.bolts.Task.UI_THREAD_EXECUTOR
            r10 = 128(0x80, float:1.794E-43)
            r11 = 0
            r9 = 0
            r1 = r12
            r2 = r13
            r3 = r14
            r4 = r15
            r7 = r16
            r8 = r17
            r1.<init>(r2, r3, r4, r5, r6, r7, r8, r9, r10, r11)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.runtime.ReactHostImpl.<init>(android.content.Context, com.facebook.react.runtime.ReactHostDelegate, com.facebook.react.fabric.ComponentFactory, boolean, boolean):void");
    }
}
