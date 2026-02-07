package com.discord.js_watchdog;

import com.discord.crash_reporting.CrashReporting;
import com.discord.logging.Log;
import com.facebook.react.bridge.Promise;
import java.util.Timer;
import java.util.TimerTask;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CoroutineScope;
import wr.b;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.js_watchdog.JSWatchdogManager$ping$1", f = "JSWatchdogManager.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class JSWatchdogManager$ping$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ boolean $enableTrace;
    final /* synthetic */ Promise $promise;
    final /* synthetic */ boolean $resetTimestamps;
    final /* synthetic */ long $sentTimestamp;
    final /* synthetic */ String $sessionId;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public JSWatchdogManager$ping$1(boolean z10, long j10, Promise promise, String str, boolean z11, Continuation<? super JSWatchdogManager$ping$1> continuation) {
        super(2, continuation);
        this.$resetTimestamps = z10;
        this.$sentTimestamp = j10;
        this.$promise = promise;
        this.$sessionId = str;
        this.$enableTrace = z11;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new JSWatchdogManager$ping$1(this.$resetTimestamps, this.$sentTimestamp, this.$promise, this.$sessionId, this.$enableTrace, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Long l10;
        Long l11;
        boolean z10;
        Timer timer;
        b.f();
        if (this.label == 0) {
            c.b(obj);
            try {
                Ref.BooleanRef booleanRef = new Ref.BooleanRef();
                if (this.$resetTimestamps) {
                    JSWatchdogManager.recentPingTS = null;
                    JSWatchdogManager.previousPingTS = null;
                }
                l10 = JSWatchdogManager.recentPingTS;
                JSWatchdogManager.previousPingTS = l10;
                JSWatchdogManager.recentPingTS = kotlin.coroutines.jvm.internal.b.f(this.$sentTimestamp);
                l11 = JSWatchdogManager.previousPingTS;
                if (l11 != null) {
                    long j10 = this.$sentTimestamp;
                    String str = this.$sessionId;
                    boolean z11 = this.$enableTrace;
                    long longValue = (j10 - l11.longValue()) - 500;
                    if (longValue > 1000) {
                        Log log = Log.INSTANCE;
                        Log.i$default(log, JSWatchdogManagerKt.LOG_TAG, "Exceeded JS stall threshold [based on previous ping]: " + longValue, (Throwable) null, 4, (Object) null);
                        booleanRef.element = true;
                        JSWatchdogManager.INSTANCE.saveStallReport((int) longValue, str, z11);
                    }
                }
                z10 = JSWatchdogManager.enabled;
                if (z10) {
                    timer = JSWatchdogManager.timerInstance;
                    final long j11 = this.$sentTimestamp;
                    final String str2 = this.$sessionId;
                    final boolean z12 = this.$enableTrace;
                    TimerTask timerTask = new TimerTask() { // from class: com.discord.js_watchdog.JSWatchdogManager$ping$1$invokeSuspend$$inlined$scheduleAtFixedRate$1
                        @Override // java.util.TimerTask, java.lang.Runnable
                        public void run() {
                            JSWatchdogManager.INSTANCE.updateStallTime(j11, str2, z12);
                        }
                    };
                    timer.scheduleAtFixedRate(timerTask, 1500L, 1000L);
                    JSWatchdogManager.freezeTimer = timerTask;
                }
                this.$promise.resolve(kotlin.coroutines.jvm.internal.b.a(booleanRef.element));
            } catch (Exception e10) {
                CrashReporting.INSTANCE.captureMessage("Failed to process JSWatchdog ping", e10);
                this.$promise.reject(e10);
            }
            return Unit.f32056a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((JSWatchdogManager$ping$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
