package com.facebook.react;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.queue.ReactQueueConfiguration;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import com.facebook.react.interfaces.TaskInterface;
import com.facebook.react.interfaces.fabric.ReactSurface;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000¦\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\bf\u0018\u00002\u00020\u0001J\u000f\u0010\u0003\u001a\u00020\u0002H&¢\u0006\u0004\b\u0003\u0010\u0004J#\u0010\n\u001a\u00020\t2\b\u0010\u0006\u001a\u0004\u0018\u00010\u00052\b\u0010\b\u001a\u0004\u0018\u00010\u0007H&¢\u0006\u0004\b\n\u0010\u000bJ\u0019\u0010\n\u001a\u00020\t2\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005H&¢\u0006\u0004\b\n\u0010\fJ\u0019\u0010\r\u001a\u00020\t2\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005H&¢\u0006\u0004\b\r\u0010\fJ\u0019\u0010\u000e\u001a\u00020\t2\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005H&¢\u0006\u0004\b\u000e\u0010\fJ\u000f\u0010\u000e\u001a\u00020\tH&¢\u0006\u0004\b\u000e\u0010\u000fJ\u000f\u0010\u0010\u001a\u00020\tH&¢\u0006\u0004\b\u0010\u0010\u000fJ\u0019\u0010\u0010\u001a\u00020\t2\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005H&¢\u0006\u0004\b\u0010\u0010\fJ)\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u00132\b\u0010\u0016\u001a\u0004\u0018\u00010\u0015H&¢\u0006\u0004\b\u0018\u0010\u0019J\u0015\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u001b0\u001aH&¢\u0006\u0004\b\u001c\u0010\u001dJ\u001d\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\u001b0\u001a2\u0006\u0010\u001e\u001a\u00020\u0013H&¢\u0006\u0004\b\u001f\u0010 J-\u0010$\u001a\b\u0012\u0004\u0012\u00020\u001b0\u001a2\u0006\u0010\u001e\u001a\u00020\u00132\u000e\u0010#\u001a\n\u0018\u00010!j\u0004\u0018\u0001`\"H&¢\u0006\u0004\b$\u0010%JC\u0010$\u001a\b\u0012\u0004\u0012\u00020\u001b0\u001a2\u0006\u0010\u001e\u001a\u00020\u00132\u000e\u0010#\u001a\n\u0018\u00010!j\u0004\u0018\u0001`\"2\u0014\b\u0002\u0010'\u001a\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\t0&H&¢\u0006\u0004\b$\u0010(J\u000f\u0010)\u001a\u00020\tH&¢\u0006\u0004\b)\u0010\u000fJ1\u0010/\u001a\u00020\t2\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010+\u001a\u00020*2\u0006\u0010,\u001a\u00020*2\b\u0010.\u001a\u0004\u0018\u00010-H&¢\u0006\u0004\b/\u00100J\u0017\u00102\u001a\u00020\t2\u0006\u00101\u001a\u00020\u0002H&¢\u0006\u0004\b2\u00103J\u0017\u00105\u001a\u00020\t2\u0006\u00104\u001a\u00020-H&¢\u0006\u0004\b5\u00106J\u0017\u00107\u001a\u00020\t2\u0006\u0010\u0012\u001a\u00020\u0011H&¢\u0006\u0004\b7\u00108J\u001d\u0010;\u001a\u00020\t2\f\u0010:\u001a\b\u0012\u0004\u0012\u00020\t09H&¢\u0006\u0004\b;\u0010<J\u001d\u0010=\u001a\u00020\t2\f\u0010:\u001a\b\u0012\u0004\u0012\u00020\t09H&¢\u0006\u0004\b=\u0010<J\u0017\u0010@\u001a\u00020\t2\u0006\u0010?\u001a\u00020>H&¢\u0006\u0004\b@\u0010AJ\u0017\u0010B\u001a\u00020\t2\u0006\u0010?\u001a\u00020>H&¢\u0006\u0004\bB\u0010AR\u0014\u0010F\u001a\u00020C8&X¦\u0004¢\u0006\u0006\u001a\u0004\bD\u0010ER\u0016\u0010J\u001a\u0004\u0018\u00010G8&X¦\u0004¢\u0006\u0006\u001a\u0004\bH\u0010IR\u0016\u0010N\u001a\u0004\u0018\u00010K8&X¦\u0004¢\u0006\u0006\u001a\u0004\bL\u0010MR\u0016\u0010R\u001a\u0004\u0018\u00010O8&X¦\u0004¢\u0006\u0006\u001a\u0004\bP\u0010QR\u0014\u0010V\u001a\u00020S8&X¦\u0004¢\u0006\u0006\u001a\u0004\bT\u0010Uø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006WÀ\u0006\u0001"}, d2 = {"Lcom/facebook/react/ReactHost;", "", "", "onBackPressed", "()Z", "Landroid/app/Activity;", "activity", "Lcom/facebook/react/modules/core/DefaultHardwareBackBtnHandler;", "defaultBackButtonImpl", "", "onHostResume", "(Landroid/app/Activity;Lcom/facebook/react/modules/core/DefaultHardwareBackBtnHandler;)V", "(Landroid/app/Activity;)V", "onHostLeaveHint", "onHostPause", "()V", "onHostDestroy", "Landroid/content/Context;", "context", "", "moduleName", "Landroid/os/Bundle;", "initialProps", "Lcom/facebook/react/interfaces/fabric/ReactSurface;", "createSurface", "(Landroid/content/Context;Ljava/lang/String;Landroid/os/Bundle;)Lcom/facebook/react/interfaces/fabric/ReactSurface;", "Lcom/facebook/react/interfaces/TaskInterface;", "Ljava/lang/Void;", ViewProps.START, "()Lcom/facebook/react/interfaces/TaskInterface;", "reason", "reload", "(Ljava/lang/String;)Lcom/facebook/react/interfaces/TaskInterface;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "ex", "destroy", "(Ljava/lang/String;Ljava/lang/Exception;)Lcom/facebook/react/interfaces/TaskInterface;", "Lkotlin/Function1;", "onDestroyFinished", "(Ljava/lang/String;Ljava/lang/Exception;Lkotlin/jvm/functions/Function1;)Lcom/facebook/react/interfaces/TaskInterface;", "invalidate", "", "requestCode", "resultCode", "Landroid/content/Intent;", "data", "onActivityResult", "(Landroid/app/Activity;IILandroid/content/Intent;)V", "hasFocus", "onWindowFocusChange", "(Z)V", "intent", "onNewIntent", "(Landroid/content/Intent;)V", "onConfigurationChanged", "(Landroid/content/Context;)V", "Lkotlin/Function0;", "onBeforeDestroy", "addBeforeDestroyListener", "(Lkotlin/jvm/functions/Function0;)V", "removeBeforeDestroyListener", "Lcom/facebook/react/ReactInstanceEventListener;", "listener", "addReactInstanceEventListener", "(Lcom/facebook/react/ReactInstanceEventListener;)V", "removeReactInstanceEventListener", "Lcom/facebook/react/common/LifecycleState;", "getLifecycleState", "()Lcom/facebook/react/common/LifecycleState;", "lifecycleState", "Lcom/facebook/react/bridge/ReactContext;", "getCurrentReactContext", "()Lcom/facebook/react/bridge/ReactContext;", "currentReactContext", "Lcom/facebook/react/devsupport/interfaces/DevSupportManager;", "getDevSupportManager", "()Lcom/facebook/react/devsupport/interfaces/DevSupportManager;", "devSupportManager", "Lcom/facebook/react/bridge/queue/ReactQueueConfiguration;", "getReactQueueConfiguration", "()Lcom/facebook/react/bridge/queue/ReactQueueConfiguration;", "reactQueueConfiguration", "Lcom/facebook/react/MemoryPressureRouter;", "getMemoryPressureRouter", "()Lcom/facebook/react/MemoryPressureRouter;", "memoryPressureRouter", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ReactHost {
    /* JADX WARN: Multi-variable type inference failed */
    static /* synthetic */ TaskInterface destroy$default(ReactHost reactHost, String str, Exception exc, Function1 function1, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 4) != 0) {
                function1 = new Function1() { // from class: com.facebook.react.i
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj2) {
                        Unit destroy$lambda$0;
                        destroy$lambda$0 = ReactHost.destroy$lambda$0(((Boolean) obj2).booleanValue());
                        return destroy$lambda$0;
                    }
                };
            }
            return reactHost.destroy(str, exc, function1);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: destroy");
    }

    /* JADX INFO: Access modifiers changed from: private */
    static Unit destroy$lambda$0(boolean z10) {
        return Unit.f32008a;
    }

    void addBeforeDestroyListener(@NotNull Function0<Unit> function0);

    void addReactInstanceEventListener(@NotNull ReactInstanceEventListener reactInstanceEventListener);

    @NotNull
    ReactSurface createSurface(@NotNull Context context, @NotNull String str, Bundle bundle);

    @NotNull
    TaskInterface<Void> destroy(@NotNull String str, Exception exc);

    @NotNull
    TaskInterface<Void> destroy(@NotNull String str, Exception exc, @NotNull Function1<? super Boolean, Unit> function1);

    ReactContext getCurrentReactContext();

    DevSupportManager getDevSupportManager();

    @NotNull
    LifecycleState getLifecycleState();

    @NotNull
    MemoryPressureRouter getMemoryPressureRouter();

    ReactQueueConfiguration getReactQueueConfiguration();

    void invalidate();

    void onActivityResult(@NotNull Activity activity, int i10, int i11, Intent intent);

    boolean onBackPressed();

    void onConfigurationChanged(@NotNull Context context);

    void onHostDestroy();

    void onHostDestroy(Activity activity);

    void onHostLeaveHint(Activity activity);

    void onHostPause();

    void onHostPause(Activity activity);

    void onHostResume(Activity activity);

    void onHostResume(Activity activity, DefaultHardwareBackBtnHandler defaultHardwareBackBtnHandler);

    void onNewIntent(@NotNull Intent intent);

    void onWindowFocusChange(boolean z10);

    @NotNull
    TaskInterface<Void> reload(@NotNull String str);

    void removeBeforeDestroyListener(@NotNull Function0<Unit> function0);

    void removeReactInstanceEventListener(@NotNull ReactInstanceEventListener reactInstanceEventListener);

    @NotNull
    TaskInterface<Void> start();
}
