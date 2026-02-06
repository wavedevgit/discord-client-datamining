package com.discord.timers;

import com.discord.codegen.NativeTimersModuleSpec;
import com.discord.reactevents.ReactEvents;
import com.discord.timers.reactevents.IntervalEvent;
import com.discord.timers.reactevents.TimerEvent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0006\n\u0002\u0010\u000e\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0018\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\rH\u0016J\u0010\u0010\u000f\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0016J\u0018\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\rH\u0016J\u0010\u0010\u0011\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0016J\u0010\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0013\u001a\u00020\u0014H\u0016J\u0010\u0010\u0015\u001a\u00020\u000b2\u0006\u0010\u0016\u001a\u00020\rH\u0016R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0017"}, d2 = {"Lcom/discord/timers/TimersModule;", "Lcom/discord/codegen/NativeTimersModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "timersManager", "Lcom/discord/timers/TimersManager;", "setTimeout", "", StackTraceHelper.ID_KEY, "", "timeout", "clearTimeout", "setInterval", "clearInterval", "addListener", "type", "", "removeListeners", "count", "react_timers_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TimersModule extends NativeTimersModuleSpec {
    @NotNull
    private final ReactEvents reactEvents;
    @NotNull
    private final TimersManager timersManager;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TimersModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactEvents = new ReactEvents(v.a("timer", Reflection.getOrCreateKotlinClass(TimerEvent.class)), v.a("interval", Reflection.getOrCreateKotlinClass(IntervalEvent.class)));
        this.timersManager = new TimersManager(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setInterval$lambda$1(TimersModule timersModule, double d10) {
        ReactEvents reactEvents = timersModule.reactEvents;
        ReactApplicationContext reactApplicationContext = timersModule.getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        reactEvents.emitModuleEvent(reactApplicationContext, new IntervalEvent((int) d10));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setTimeout$lambda$0(TimersModule timersModule, double d10) {
        ReactEvents reactEvents = timersModule.reactEvents;
        ReactApplicationContext reactApplicationContext = timersModule.getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        reactEvents.emitModuleEvent(reactApplicationContext, new TimerEvent((int) d10));
        return Unit.f32008a;
    }

    @Override // com.discord.codegen.NativeTimersModuleSpec
    public void addListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
    }

    @Override // com.discord.codegen.NativeTimersModuleSpec
    public void clearInterval(double d10) {
        this.timersManager.clearInterval((int) d10);
    }

    @Override // com.discord.codegen.NativeTimersModuleSpec
    public void clearTimeout(double d10) {
        this.timersManager.clearTimeout((int) d10);
    }

    @Override // com.discord.codegen.NativeTimersModuleSpec
    public void removeListeners(double d10) {
    }

    @Override // com.discord.codegen.NativeTimersModuleSpec
    public void setInterval(final double d10, double d11) {
        this.timersManager.setInterval((int) d10, d11, new Function0() { // from class: com.discord.timers.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit interval$lambda$1;
                interval$lambda$1 = TimersModule.setInterval$lambda$1(TimersModule.this, d10);
                return interval$lambda$1;
            }
        });
    }

    @Override // com.discord.codegen.NativeTimersModuleSpec
    public void setTimeout(final double d10, double d11) {
        this.timersManager.setTimeout((int) d10, d11, new Function0() { // from class: com.discord.timers.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit timeout$lambda$0;
                timeout$lambda$0 = TimersModule.setTimeout$lambda$0(TimersModule.this, d10);
                return timeout$lambda$0;
            }
        });
    }
}
