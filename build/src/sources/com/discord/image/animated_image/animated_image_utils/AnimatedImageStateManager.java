package com.discord.image.animated_image.animated_image_utils;

import com.discord.image.animated_image.animated_image_utils.AnimatedImageStateManager;
import com.discord.misc.utilities.queue.WorkerQueue;
import com.discord.misc.utilities.threading.ThreadUtilsKt;
import com.facebook.react.modules.appstate.AppStateModule;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b!\u0018\u0000 **\u0004\b\u0000\u0010\u00012\u00020\u0002:\u0001*Bq\u0012\f\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0010\b\u0002\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u0012\u0010\t\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u00040\b\u0012\u0012\u0010\u000b\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\n0\b\u0012\u0012\u0010\f\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u00040\b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0010\u001a\u00020\n2\u0006\u0010\u000f\u001a\u00020\nH\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u000f\u0010\u0012\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\u0012\u0010\u0013J\u0019\u0010\u0015\u001a\u00020\u00042\b\u0010\u0014\u001a\u0004\u0018\u00018\u0000H\u0002¢\u0006\u0004\b\u0015\u0010\u0016J\u0017\u0010\u0017\u001a\u00020\u00042\u0006\u0010\u0014\u001a\u00028\u0000H\u0007¢\u0006\u0004\b\u0017\u0010\u0016J\r\u0010\u0018\u001a\u00020\u0004¢\u0006\u0004\b\u0018\u0010\u0013J\r\u0010\u0019\u001a\u00020\u0004¢\u0006\u0004\b\u0019\u0010\u0013J\u000f\u0010\u001a\u001a\u00020\nH\u0007¢\u0006\u0004\b\u001a\u0010\u001bJ!\u0010\u001e\u001a\u00020\n2\u0006\u0010\u001c\u001a\u00020\n2\b\b\u0002\u0010\u001d\u001a\u00020\nH\u0007¢\u0006\u0004\b\u001e\u0010\u001fJ\u000f\u0010 \u001a\u00020\nH\u0007¢\u0006\u0004\b \u0010\u001bJ\u000f\u0010!\u001a\u00020\u0004H\u0007¢\u0006\u0004\b!\u0010\u0013R\u001a\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0005\u0010\"R\u001a\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0006\u0010\"R\u001c\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0007\u0010\"R \u0010\t\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u00040\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\t\u0010#R \u0010\u000b\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\n0\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000b\u0010#R \u0010\f\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u00040\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010#R\u0018\u0010$\u001a\u0004\u0018\u00018\u00008\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b$\u0010%R\u0016\u0010\u001c\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010&R\u0016\u0010'\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b'\u0010&R\u0016\u0010(\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b(\u0010&R\u0016\u0010)\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b)\u0010&¨\u0006+"}, d2 = {"Lcom/discord/image/animated_image/animated_image_utils/AnimatedImageStateManager;", "T", "", "Lkotlin/Function0;", "", "handlePlay", "handlePause", "handleStop", "Lkotlin/Function1;", "handleRecycle", "", "handleConfigIsValid", "handleFetchAnimatedImage", "<init>", "(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function1;)V", AppStateModule.APP_STATE_ACTIVE, "updateWorker", "(Z)Z", "reload", "()V", "config", "setImageConfig", "(Ljava/lang/Object;)V", "onTryFetch", "play", "pause", "reset", "()Z", "animatedImageLoaded", "animate", "onFetchFinished", "(ZZ)Z", "onDetachedFromWindow", "onAttachedToWindow", "Lkotlin/jvm/functions/Function0;", "Lkotlin/jvm/functions/Function1;", "animatedImageConfig", "Ljava/lang/Object;", "Z", "autoplay", "playPending", "pausePending", "Companion", "animated_image_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAnimatedImageStateManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AnimatedImageStateManager.kt\ncom/discord/image/animated_image/animated_image_utils/AnimatedImageStateManager\n+ 2 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n*L\n1#1,125:1\n17#2,5:126\n17#2,5:131\n17#2,5:136\n17#2,5:141\n17#2,5:146\n*S KotlinDebug\n*F\n+ 1 AnimatedImageStateManager.kt\ncom/discord/image/animated_image/animated_image_utils/AnimatedImageStateManager\n*L\n22#1:126,5\n67#1:131,5\n74#1:136,5\n86#1:141,5\n94#1:146,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AnimatedImageStateManager<T> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final WorkerQueue<AnimatedImageStateManager<?>> workerQueue = new WorkerQueue<>(false, 1, null);
    private T animatedImageConfig;
    private boolean animatedImageLoaded;
    private boolean autoplay;
    @NotNull
    private final Function1<T, Boolean> handleConfigIsValid;
    @NotNull
    private final Function1<T, Unit> handleFetchAnimatedImage;
    @NotNull
    private final Function0<Unit> handlePause;
    @NotNull
    private final Function0<Unit> handlePlay;
    @NotNull
    private final Function1<T, Unit> handleRecycle;
    private final Function0<Unit> handleStop;
    private boolean pausePending;
    private boolean playPending;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u0018\u0010\u0004\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/image/animated_image/animated_image_utils/AnimatedImageStateManager$Companion;", "", "<init>", "()V", "workerQueue", "Lcom/discord/misc/utilities/queue/WorkerQueue;", "Lcom/discord/image/animated_image/animated_image_utils/AnimatedImageStateManager;", "animated_image_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public AnimatedImageStateManager(@NotNull Function0<Unit> handlePlay, @NotNull Function0<Unit> handlePause, Function0<Unit> function0, @NotNull Function1<? super T, Unit> handleRecycle, @NotNull Function1<? super T, Boolean> handleConfigIsValid, @NotNull Function1<? super T, Unit> handleFetchAnimatedImage) {
        Intrinsics.checkNotNullParameter(handlePlay, "handlePlay");
        Intrinsics.checkNotNullParameter(handlePause, "handlePause");
        Intrinsics.checkNotNullParameter(handleRecycle, "handleRecycle");
        Intrinsics.checkNotNullParameter(handleConfigIsValid, "handleConfigIsValid");
        Intrinsics.checkNotNullParameter(handleFetchAnimatedImage, "handleFetchAnimatedImage");
        this.handlePlay = handlePlay;
        this.handlePause = handlePause;
        this.handleStop = function0;
        this.handleRecycle = handleRecycle;
        this.handleConfigIsValid = handleConfigIsValid;
        this.handleFetchAnimatedImage = handleFetchAnimatedImage;
        this.autoplay = true;
    }

    public static /* synthetic */ boolean onFetchFinished$default(AnimatedImageStateManager animatedImageStateManager, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z11 = false;
        }
        return animatedImageStateManager.onFetchFinished(z10, z11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void reload() {
        T t10 = this.animatedImageConfig;
        if (t10 == null) {
            updateWorker(false);
        } else {
            onTryFetch(t10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void setImageConfig(T t10) {
        this.animatedImageConfig = t10;
        this.animatedImageLoaded = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean updateWorker(boolean z10) {
        return workerQueue.updateWorker(this, z10, new Function1() { // from class: h7.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit updateWorker$lambda$5;
                updateWorker$lambda$5 = AnimatedImageStateManager.updateWorker$lambda$5((AnimatedImageStateManager) obj);
                return updateWorker$lambda$5;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit updateWorker$lambda$5(AnimatedImageStateManager stateManager) {
        Intrinsics.checkNotNullParameter(stateManager, "stateManager");
        stateManager.reload();
        return Unit.f32464a;
    }

    public final void onAttachedToWindow() {
        if (ThreadUtilsKt.isOnMainThread()) {
            reload();
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final boolean onDetachedFromWindow() {
        if (ThreadUtilsKt.isOnMainThread()) {
            Function0 function0 = this.handleStop;
            if (function0 != null) {
                function0.invoke();
            }
            this.playPending = false;
            this.pausePending = false;
            return updateWorker(false);
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final boolean onFetchFinished(boolean z10, boolean z11) {
        if (ThreadUtilsKt.isOnMainThread()) {
            this.animatedImageLoaded = z10;
            this.autoplay = z11;
            if (z11 || this.playPending) {
                play();
            }
            return updateWorker(false);
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final void onTryFetch(T t10) {
        if (ThreadUtilsKt.isOnMainThread()) {
            if (!Intrinsics.areEqual(this.animatedImageConfig, t10) || !this.animatedImageLoaded) {
                setImageConfig(t10);
                this.handleRecycle.invoke(t10);
                if (!((Boolean) this.handleConfigIsValid.invoke(t10)).booleanValue()) {
                    updateWorker(false);
                    return;
                } else if (!updateWorker(true)) {
                    return;
                } else {
                    this.handleFetchAnimatedImage.invoke(t10);
                    return;
                }
            }
            updateWorker(false);
            return;
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public final void pause() {
        this.playPending = false;
        if (this.animatedImageLoaded) {
            this.handlePause.invoke();
            this.pausePending = false;
            return;
        }
        this.pausePending = true;
    }

    public final void play() {
        this.pausePending = false;
        if (this.animatedImageLoaded) {
            this.handlePlay.invoke();
            this.playPending = false;
            return;
        }
        this.playPending = true;
    }

    public final boolean reset() {
        if (ThreadUtilsKt.isOnMainThread()) {
            setImageConfig(null);
            return updateWorker(false);
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    public /* synthetic */ AnimatedImageStateManager(Function0 function0, Function0 function02, Function0 function03, Function1 function1, Function1 function12, Function1 function13, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(function0, function02, (i10 & 4) != 0 ? null : function03, function1, function12, function13);
    }
}
