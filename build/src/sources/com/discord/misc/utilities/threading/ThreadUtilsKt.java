package com.discord.misc.utilities.threading;

import android.os.Handler;
import android.os.Looper;
import ir.l;
import ir.o;
import java.util.concurrent.Executor;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\u001a'\u0010\r\u001a\u0002H\u000e\"\u0004\b\u0000\u0010\u000e2\u000e\b\u0004\u0010\u000f\u001a\b\u0012\u0004\u0012\u0002H\u000e0\u0010H\u0086\bø\u0001\u0000¢\u0006\u0002\u0010\u0011\u001a\u001c\u0010\u0012\u001a\u00020\u00132\u000e\b\u0004\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00130\u0010H\u0086\bø\u0001\u0000\"\u001b\u0010\u0000\u001a\u00020\u00018FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b\u0004\u0010\u0005\u001a\u0004\b\u0002\u0010\u0003\"\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\t\"\u0011\u0010\n\u001a\u00020\u000b8F¢\u0006\u0006\u001a\u0004\b\n\u0010\f\u0082\u0002\u0007\n\u0005\b\u009920\u0001¨\u0006\u0014"}, d2 = {"uiHandler", "Landroid/os/Handler;", "getUiHandler", "()Landroid/os/Handler;", "uiHandler$delegate", "Lkotlin/Lazy;", "uiExecutor", "Ljava/util/concurrent/Executor;", "getUiExecutor", "()Ljava/util/concurrent/Executor;", "isOnMainThread", "", "()Z", "assertOnUiThread", "T", "block", "Lkotlin/Function0;", "(Lkotlin/jvm/functions/Function0;)Ljava/lang/Object;", "postOrRunOnMainThread", "", "misc_utilities_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ThreadUtilsKt {
    @NotNull
    private static final Lazy uiHandler$delegate = l.a(o.f31119e, new Function0() { // from class: com.discord.misc.utilities.threading.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            Handler uiHandler_delegate$lambda$0;
            uiHandler_delegate$lambda$0 = ThreadUtilsKt.uiHandler_delegate$lambda$0();
            return uiHandler_delegate$lambda$0;
        }
    });
    @NotNull
    private static final Executor uiExecutor = new Executor() { // from class: com.discord.misc.utilities.threading.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            ThreadUtilsKt.uiExecutor$lambda$1(runnable);
        }
    };

    public static final <T> T assertOnUiThread(@NotNull Function0<? extends T> block) {
        Intrinsics.checkNotNullParameter(block, "block");
        if (isOnMainThread()) {
            return (T) block.invoke();
        }
        Thread currentThread = Thread.currentThread();
        throw new IllegalStateException(("Expected to be on android main thread. Current: " + currentThread).toString());
    }

    @NotNull
    public static final Executor getUiExecutor() {
        return uiExecutor;
    }

    @NotNull
    public static final Handler getUiHandler() {
        return (Handler) uiHandler$delegate.getValue();
    }

    public static final boolean isOnMainThread() {
        return Intrinsics.areEqual(Looper.myLooper(), Looper.getMainLooper());
    }

    public static final void postOrRunOnMainThread(@NotNull final Function0<Unit> block) {
        Intrinsics.checkNotNullParameter(block, "block");
        if (isOnMainThread()) {
            block.invoke();
        } else {
            getUiHandler().post(new Runnable() { // from class: com.discord.misc.utilities.threading.ThreadUtilsKt$postOrRunOnMainThread$1
                @Override // java.lang.Runnable
                public final void run() {
                    block.invoke();
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void uiExecutor$lambda$1(Runnable runnable) {
        getUiHandler().post(runnable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Handler uiHandler_delegate$lambda$0() {
        return new Handler(Looper.getMainLooper());
    }
}
