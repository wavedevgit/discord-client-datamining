package com.discord.external_pip;

import android.app.Activity;
import android.content.Intent;
import com.discord.external_pip.ExternalPipModule;
import com.discord.external_pip.react_events.OnPipModeChangedEvent;
import com.discord.external_pip.react_events.OnPipModeWillChangeEvent;
import com.discord.misc.utilities.threading.ThreadUtilsKt;
import com.discord.react_activities.ReactActivity;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.appstate.AppStateModule;
import com.facebook.react.uimanager.ViewProps;
import ir.v;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = ExternalPipModule.NAME)
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010%\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0007\u0018\u0000 /2\u00020\u0001:\u0001/B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J1\u0010\f\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00062\u0018\u0010\u000b\u001a\u0014\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\t\u0012\u0004\u0012\u00020\n0\bH\u0003¢\u0006\u0004\b\f\u0010\rJ\u000f\u0010\u000e\u001a\u00020\nH\u0003¢\u0006\u0004\b\u000e\u0010\u000fJ\u0017\u0010\u0011\u001a\u00020\n2\u0006\u0010\u0010\u001a\u00020\u0006H\u0003¢\u0006\u0004\b\u0011\u0010\u0012J\u000f\u0010\u0013\u001a\u00020\nH\u0003¢\u0006\u0004\b\u0013\u0010\u000fJ\u000f\u0010\u0015\u001a\u00020\u0014H\u0016¢\u0006\u0004\b\u0015\u0010\u0016J\u001b\u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\u0014\u0012\u0004\u0012\u00020\u00060\u0017H\u0016¢\u0006\u0004\b\u0018\u0010\u0019J\u001f\u0010\u001d\u001a\u00020\n2\u0006\u0010\u001a\u001a\u00020\u00062\u0006\u0010\u001c\u001a\u00020\u001bH\u0007¢\u0006\u0004\b\u001d\u0010\u001eJ\u0017\u0010 \u001a\u00020\n2\u0006\u0010\u001f\u001a\u00020\u0006H\u0007¢\u0006\u0004\b \u0010\u0012J\u001f\u0010$\u001a\u00020\n2\u0006\u0010\"\u001a\u00020!2\u0006\u0010#\u001a\u00020!H\u0007¢\u0006\u0004\b$\u0010%R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0003\u0010&\u001a\u0004\b'\u0010(R\u0014\u0010*\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b*\u0010+R\u0014\u0010-\u001a\u00020,8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010.¨\u00060"}, d2 = {"Lcom/discord/external_pip/ExternalPipModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "Lcom/facebook/react/bridge/ReactApplicationContext;", "reactContext", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "", "force", "Lkotlin/Function1;", "Lkotlin/Result;", "", "onResult", "enterPipMode", "(ZLkotlin/jvm/functions/Function1;)V", "leavePipMode", "()V", "isInPipMode", "onPipModeChanged", "(Z)V", "onPipModeWillChange", "", "getName", "()Ljava/lang/String;", "", "getConstants", "()Ljava/util/Map;", AppStateModule.APP_STATE_ACTIVE, "Lcom/facebook/react/bridge/Promise;", "onResultPromise", "setActive", "(ZLcom/facebook/react/bridge/Promise;)V", ViewProps.ENABLED, "setEnabled", "", "numerator", "denominator", "setPipAspectRatio", "(II)V", "Lcom/facebook/react/bridge/ReactApplicationContext;", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "Lcom/discord/external_pip/ExternalPipManager;", "manager", "Lcom/discord/external_pip/ExternalPipManager;", "Lcom/discord/reactevents/ReactEvents;", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "Companion", "external_pip_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nExternalPipModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ExternalPipModule.kt\ncom/discord/external_pip/ExternalPipModule\n+ 2 ThreadUtils.kt\ncom/discord/misc/utilities/threading/ThreadUtilsKt\n*L\n1#1,124:1\n25#2,8:125\n*S KotlinDebug\n*F\n+ 1 ExternalPipModule.kt\ncom/discord/external_pip/ExternalPipModule\n*L\n37#1:125,8\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ExternalPipModule extends ReactContextBaseJavaModule {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "ExternalPip";
    @NotNull
    private final ExternalPipManager manager;
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final ReactEvents reactEvents;

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0006\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\tH\u0007J!\u0010\n\u001a\u0004\u0018\u00010\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\u000b\u001a\u00020\fH\u0007¢\u0006\u0002\u0010\rJ\u000e\u0010\u000e\u001a\u0004\u0018\u00010\u000f*\u00020\tH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/external_pip/ExternalPipModule$Companion;", "", "<init>", "()V", "NAME", "", "onUserLeaveHint", "", "reactContext", "Lcom/facebook/react/bridge/ReactContext;", "onPipModeChanged", "isInPipMode", "", "(Lcom/facebook/react/bridge/ReactContext;Z)Lkotlin/Unit;", "getModule", "Lcom/discord/external_pip/ExternalPipModule;", "external_pip_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final ExternalPipModule getModule(ReactContext reactContext) {
            return (ExternalPipModule) reactContext.getNativeModule(ExternalPipModule.class);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit onUserLeaveHint$lambda$0(ReactContext reactContext, Result result) {
            ExternalPipModule module;
            if (!Result.h(result.j()) && (module = ExternalPipModule.Companion.getModule(reactContext)) != null) {
                module.onPipModeChanged(false);
            }
            return Unit.f33282a;
        }

        public final Unit onPipModeChanged(ReactContext reactContext, boolean z10) {
            ExternalPipModule module;
            if (reactContext != null && (module = getModule(reactContext)) != null) {
                module.onPipModeChanged(z10);
                return Unit.f33282a;
            }
            return null;
        }

        public final void onUserLeaveHint(final ReactContext reactContext) {
            ExternalPipModule module;
            ExternalPipModule module2;
            if (reactContext != null && (module2 = getModule(reactContext)) != null) {
                module2.onPipModeWillChange();
            }
            if (reactContext != null && (module = getModule(reactContext)) != null) {
                module.enterPipMode(false, new Function1() { // from class: com.discord.external_pip.d
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit onUserLeaveHint$lambda$0;
                        onUserLeaveHint$lambda$0 = ExternalPipModule.Companion.onUserLeaveHint$lambda$0(ReactContext.this, (Result) obj);
                        return onUserLeaveHint$lambda$0;
                    }
                });
            }
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ExternalPipModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.manager = new ExternalPipManager();
        this.reactEvents = new ReactEvents(v.a("onPipModeChanged", Reflection.getOrCreateKotlinClass(OnPipModeChangedEvent.class)), v.a("onPipModeWillChange", Reflection.getOrCreateKotlinClass(OnPipModeWillChangeEvent.class)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void enterPipMode(boolean z10, Function1<? super Result, Unit> function1) {
        if (this.manager.getEnabled(z10)) {
            ExternalPipTransitionView.Companion.tryShow(this.reactContext.getCurrentActivity());
        }
        this.manager.enterPipMode(getReactApplicationContext().getCurrentActivity(), z10, function1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void leavePipMode() {
        Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity != null) {
            currentActivity.startActivity(new Intent(this.reactContext.getCurrentActivity(), ReactActivity.Registry.getMainActivity()).addFlags(131072));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void onPipModeChanged(boolean z10) {
        ReactEvents reactEvents = this.reactEvents;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        reactEvents.emitModuleEvent(reactApplicationContext, new OnPipModeChangedEvent(z10));
        ExternalPipTransitionView.Companion.tryHide(this.reactContext.getCurrentActivity(), z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void onPipModeWillChange() {
        if (!ExternalPipManager.getEnabled$default(this.manager, false, 1, null)) {
            return;
        }
        ReactEvents reactEvents = this.reactEvents;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        reactEvents.emitModuleEvent(reactApplicationContext, new OnPipModeWillChangeEvent());
    }

    @Override // com.facebook.react.bridge.BaseJavaModule
    @NotNull
    public Map<String, Boolean> getConstants() {
        return o0.n(v.a("isSupported", Boolean.valueOf(ExternalPipManager.Companion.isSupported())));
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @ReactMethod
    public final void setActive(final boolean z10, @NotNull final Promise onResultPromise) {
        Intrinsics.checkNotNullParameter(onResultPromise, "onResultPromise");
        if (ThreadUtilsKt.isOnMainThread()) {
            if (z10) {
                enterPipMode(true, new ExternalPipModule$setActive$1$1(this, onResultPromise));
                return;
            } else {
                leavePipMode();
                return;
            }
        }
        ThreadUtilsKt.getUiHandler().post(new Runnable() { // from class: com.discord.external_pip.ExternalPipModule$setActive$$inlined$postOrRunOnMainThread$1
            @Override // java.lang.Runnable
            public final void run() {
                if (!z10) {
                    this.leavePipMode();
                    return;
                }
                ExternalPipModule externalPipModule = this;
                externalPipModule.enterPipMode(true, new ExternalPipModule$setActive$1$1(externalPipModule, onResultPromise));
            }
        });
    }

    @ReactMethod
    public final void setEnabled(boolean z10) {
        this.manager.setEnabled(z10);
    }

    @ReactMethod
    public final void setPipAspectRatio(int i10, int i11) {
        this.manager.setPipAspectRatio(getReactApplicationContext().getCurrentActivity(), i10, i11);
    }
}
