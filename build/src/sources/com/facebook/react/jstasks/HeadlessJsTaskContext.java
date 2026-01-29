package com.facebook.react.jstasks;

import android.util.SparseArray;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.jstasks.HeadlessJsTaskContext;
import com.facebook.react.modules.appregistry.AppRegistry;
import db.a;
import java.lang.ref.WeakReference;
import java.util.Map;
import java.util.Set;
import java.util.WeakHashMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010#\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010%\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\t\n\u0002\u0010\t\n\u0002\b\u0002\u0018\u0000 %2\u00020\u0001:\u0001%B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\nJ\u000e\u0010\u0018\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\nJ\u0006\u0010\u0019\u001a\u00020\u001aJ\u000e\u0010\u001b\u001a\u00020\u000e2\u0006\u0010\u001c\u001a\u00020\u0011J\u0018\u0010\u001b\u001a\u00020\u00162\u0006\u0010\u001c\u001a\u00020\u00112\u0006\u0010\u001d\u001a\u00020\u000eH\u0002J\u000e\u0010\u001e\u001a\u00020\u001a2\u0006\u0010\u001d\u001a\u00020\u000eJ\u000e\u0010\u001f\u001a\u00020\u00162\u0006\u0010\u001d\u001a\u00020\u000eJ\u0010\u0010 \u001a\u00020\u00162\u0006\u0010\u001d\u001a\u00020\u000eH\u0002J\u000e\u0010!\u001a\u00020\u001a2\u0006\u0010\u001d\u001a\u00020\u000eJ\u0018\u0010\"\u001a\u00020\u00162\u0006\u0010\u001d\u001a\u00020\u000e2\u0006\u0010#\u001a\u00020$H\u0002R\u001c\u0010\u0002\u001a\u0010\u0012\f\u0012\n \u0007*\u0004\u0018\u00010\u00030\u00030\u0006X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u000e0\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u000f\u001a\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00110\u0010X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00140\u0013X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006&"}, d2 = {"Lcom/facebook/react/jstasks/HeadlessJsTaskContext;", "", "reactContext", "Lcom/facebook/react/bridge/ReactContext;", "<init>", "(Lcom/facebook/react/bridge/ReactContext;)V", "Ljava/lang/ref/WeakReference;", "kotlin.jvm.PlatformType", "headlessJsTaskEventListeners", "", "Lcom/facebook/react/jstasks/HeadlessJsTaskEventListener;", "lastTaskId", "Ljava/util/concurrent/atomic/AtomicInteger;", "activeTasks", "", "activeTaskConfigs", "", "Lcom/facebook/react/jstasks/HeadlessJsTaskConfig;", "taskTimeouts", "Landroid/util/SparseArray;", "Ljava/lang/Runnable;", "addTaskEventListener", "", "listener", "removeTaskEventListener", "hasActiveTasks", "", "startTask", "taskConfig", "taskId", "retryTask", "finishTask", "removeTimeout", "isTaskRunning", "scheduleTaskTimeout", "timeout", "", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nHeadlessJsTaskContext.kt\nKotlin\n*S Kotlin\n*F\n+ 1 HeadlessJsTaskContext.kt\ncom/facebook/react/jstasks/HeadlessJsTaskContext\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,186:1\n1#2:187\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class HeadlessJsTaskContext {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final WeakHashMap<ReactContext, HeadlessJsTaskContext> INSTANCES = new WeakHashMap<>();
    @NotNull
    private final Map<Integer, HeadlessJsTaskConfig> activeTaskConfigs;
    @NotNull
    private final Set<Integer> activeTasks;
    @NotNull
    private final Set<HeadlessJsTaskEventListener> headlessJsTaskEventListeners;
    @NotNull
    private final AtomicInteger lastTaskId;
    @NotNull
    private final WeakReference<ReactContext> reactContext;
    @NotNull
    private final SparseArray<Runnable> taskTimeouts;

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\u0006H\u0007R\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/facebook/react/jstasks/HeadlessJsTaskContext$Companion;", "", "<init>", "()V", "INSTANCES", "Ljava/util/WeakHashMap;", "Lcom/facebook/react/bridge/ReactContext;", "Lcom/facebook/react/jstasks/HeadlessJsTaskContext;", "getInstance", "context", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nHeadlessJsTaskContext.kt\nKotlin\n*S Kotlin\n*F\n+ 1 HeadlessJsTaskContext.kt\ncom/facebook/react/jstasks/HeadlessJsTaskContext$Companion\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,186:1\n384#2,7:187\n*S KotlinDebug\n*F\n+ 1 HeadlessJsTaskContext.kt\ncom/facebook/react/jstasks/HeadlessJsTaskContext$Companion\n*L\n183#1:187,7\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final HeadlessJsTaskContext getInstance(@NotNull ReactContext context) {
            Intrinsics.checkNotNullParameter(context, "context");
            WeakHashMap weakHashMap = HeadlessJsTaskContext.INSTANCES;
            Object obj = weakHashMap.get(context);
            if (obj == null) {
                obj = new HeadlessJsTaskContext(context, null);
                weakHashMap.put(context, obj);
            }
            return (HeadlessJsTaskContext) obj;
        }

        private Companion() {
        }
    }

    public /* synthetic */ HeadlessJsTaskContext(ReactContext reactContext, DefaultConstructorMarker defaultConstructorMarker) {
        this(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void finishTask$lambda$4(HeadlessJsTaskContext headlessJsTaskContext, int i10) {
        for (HeadlessJsTaskEventListener headlessJsTaskEventListener : headlessJsTaskContext.headlessJsTaskEventListeners) {
            headlessJsTaskEventListener.onHeadlessJsTaskFinish(i10);
        }
    }

    @NotNull
    public static final HeadlessJsTaskContext getInstance(@NotNull ReactContext reactContext) {
        return Companion.getInstance(reactContext);
    }

    private final void removeTimeout(int i10) {
        Runnable runnable = this.taskTimeouts.get(i10);
        if (runnable != null) {
            UiThreadUtil.removeOnUiThread(runnable);
            this.taskTimeouts.remove(i10);
        }
    }

    private final void scheduleTaskTimeout(final int i10, long j10) {
        Runnable runnable = new Runnable() { // from class: hb.b
            @Override // java.lang.Runnable
            public final void run() {
                HeadlessJsTaskContext.this.finishTask(i10);
            }
        };
        this.taskTimeouts.append(i10, runnable);
        UiThreadUtil.runOnUiThread(runnable, j10);
    }

    public final synchronized void addTaskEventListener(@NotNull HeadlessJsTaskEventListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.headlessJsTaskEventListeners.add(listener);
        for (Integer num : this.activeTasks) {
            listener.onHeadlessJsTaskStart(num.intValue());
        }
    }

    public final synchronized void finishTask(final int i10) {
        boolean remove = this.activeTasks.remove(Integer.valueOf(i10));
        this.activeTaskConfigs.remove(Integer.valueOf(i10));
        removeTimeout(i10);
        if (remove) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: hb.c
                @Override // java.lang.Runnable
                public final void run() {
                    HeadlessJsTaskContext.finishTask$lambda$4(HeadlessJsTaskContext.this, i10);
                }
            });
        }
    }

    public final boolean hasActiveTasks() {
        return !this.activeTasks.isEmpty();
    }

    public final synchronized boolean isTaskRunning(int i10) {
        return this.activeTasks.contains(Integer.valueOf(i10));
    }

    public final void removeTaskEventListener(@NotNull HeadlessJsTaskEventListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.headlessJsTaskEventListeners.remove(listener);
    }

    public final synchronized boolean retryTask(final int i10) {
        HeadlessJsTaskConfig headlessJsTaskConfig = this.activeTaskConfigs.get(Integer.valueOf(i10));
        if (headlessJsTaskConfig != null) {
            HeadlessJsTaskRetryPolicy retryPolicy = headlessJsTaskConfig.getRetryPolicy();
            if (retryPolicy != null && retryPolicy.canRetry()) {
                removeTimeout(i10);
                final HeadlessJsTaskConfig headlessJsTaskConfig2 = new HeadlessJsTaskConfig(headlessJsTaskConfig.getTaskKey(), headlessJsTaskConfig.getData(), headlessJsTaskConfig.getTimeout(), headlessJsTaskConfig.isAllowedInForeground(), retryPolicy.update());
                UiThreadUtil.runOnUiThread(new Runnable() { // from class: hb.a
                    @Override // java.lang.Runnable
                    public final void run() {
                        HeadlessJsTaskContext.this.startTask(headlessJsTaskConfig2, i10);
                    }
                }, retryPolicy.getDelay());
                return true;
            }
            return false;
        }
        throw new IllegalStateException(("Tried to retrieve non-existent task config with id " + i10 + ".").toString());
    }

    public final synchronized int startTask(@NotNull HeadlessJsTaskConfig taskConfig) {
        int incrementAndGet;
        Intrinsics.checkNotNullParameter(taskConfig, "taskConfig");
        incrementAndGet = this.lastTaskId.incrementAndGet();
        startTask(taskConfig, incrementAndGet);
        return incrementAndGet;
    }

    private HeadlessJsTaskContext(ReactContext reactContext) {
        this.reactContext = new WeakReference<>(reactContext);
        this.headlessJsTaskEventListeners = new CopyOnWriteArraySet();
        this.lastTaskId = new AtomicInteger(0);
        this.activeTasks = new CopyOnWriteArraySet();
        this.activeTaskConfigs = new ConcurrentHashMap();
        this.taskTimeouts = new SparseArray<>();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final synchronized void startTask(HeadlessJsTaskConfig headlessJsTaskConfig, int i10) {
        try {
            UiThreadUtil.assertOnUiThread();
            ReactContext reactContext = (ReactContext) a.d(this.reactContext.get(), "Tried to start a task on a react context that has already been destroyed");
            if (reactContext.getLifecycleState() == LifecycleState.RESUMED && !headlessJsTaskConfig.isAllowedInForeground()) {
                String taskKey = headlessJsTaskConfig.getTaskKey();
                throw new IllegalStateException(("Tried to start task " + taskKey + " while in foreground, but this is not allowed.").toString());
            }
            this.activeTasks.add(Integer.valueOf(i10));
            this.activeTaskConfigs.put(Integer.valueOf(i10), new HeadlessJsTaskConfig(headlessJsTaskConfig));
            if (reactContext.hasActiveReactInstance()) {
                ((AppRegistry) reactContext.getJSModule(AppRegistry.class)).startHeadlessTask(i10, headlessJsTaskConfig.getTaskKey(), headlessJsTaskConfig.getData());
            } else {
                ReactSoftExceptionLogger.logSoftException("HeadlessJsTaskContext", new RuntimeException("Cannot start headless task, CatalystInstance not available"));
            }
            if (headlessJsTaskConfig.getTimeout() > 0) {
                scheduleTaskTimeout(i10, headlessJsTaskConfig.getTimeout());
            }
            for (HeadlessJsTaskEventListener headlessJsTaskEventListener : this.headlessJsTaskEventListeners) {
                headlessJsTaskEventListener.onHeadlessJsTaskStart(i10);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
