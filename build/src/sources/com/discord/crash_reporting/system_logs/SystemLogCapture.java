package com.discord.crash_reporting.system_logs;

import android.app.ActivityManager;
import android.content.Context;
import com.discord.misc.utilities.collections.CircularByteBuffer;
import com.facebook.react.uimanager.ViewProps;
import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import ur.r;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0000\u0018\u0000 \u001b2\u00020\u0001:\u0001\u001bB\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eJ\u0012\u0010\u000f\u001a\u00020\f2\n\u0010\u0010\u001a\u00060\u0011j\u0002`\u0012J\b\u0010\u0013\u001a\u00020\fH\u0002J\b\u0010\u0014\u001a\u00020\fH\u0002J\u0014\u0010\u0015\u001a\u00020\f2\n\u0010\u0016\u001a\u00060\u0017j\u0002`\u0018H\u0002J\b\u0010\u0019\u001a\u00020\u001aH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082.¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/discord/crash_reporting/system_logs/SystemLogCapture;", "", "<init>", "()V", "buffer", "Lcom/discord/misc/utilities/collections/CircularByteBuffer;", "tombstoneBuffer", "memoryInfo", "Landroid/app/ActivityManager$MemoryInfo;", "activityManager", "Landroid/app/ActivityManager;", "startThread", "", "context", "Landroid/content/Context;", "appendOutput", "sb", "Ljava/lang/StringBuilder;", "Lkotlin/text/StringBuilder;", ViewProps.START, "readFromLogcat", "addExceptionToBuffer", "e", "Ljava/lang/Exception;", "Lkotlin/Exception;", "isLowMemory", "", "Companion", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSystemLogCapture.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SystemLogCapture.kt\ncom/discord/crash_reporting/system_logs/SystemLogCapture\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,138:1\n13472#2,2:139\n*S KotlinDebug\n*F\n+ 1 SystemLogCapture.kt\ncom/discord/crash_reporting/system_logs/SystemLogCapture\n*L\n106#1:139,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SystemLogCapture {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final long THREAD_SLEEP_MS = 2000;
    private ActivityManager activityManager;
    @NotNull
    private final CircularByteBuffer buffer = new CircularByteBuffer(262144);
    @NotNull
    private final CircularByteBuffer tombstoneBuffer = new CircularByteBuffer(51200);
    @NotNull
    private final ActivityManager.MemoryInfo memoryInfo = new ActivityManager.MemoryInfo();

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0015\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0000¢\u0006\u0002\b\nR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"Lcom/discord/crash_reporting/system_logs/SystemLogCapture$Companion;", "", "<init>", "()V", "THREAD_SLEEP_MS", "", "shouldIncludeLogLine", "", "line", "", "shouldIncludeLogLine$crash_reporting_release", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean shouldIncludeLogLine$crash_reporting_release(@NotNull String line) {
            Intrinsics.checkNotNullParameter(line, "line");
            if (StringsKt.V(line, "chatty  : uid=", false, 2, null)) {
                return false;
            }
            if (StringsKt.V(line, "OpenSLESRecorder", false, 2, null) && !StringsKt.V(line, " E ", false, 2, null)) {
                return false;
            }
            return true;
        }

        private Companion() {
        }
    }

    private final void addExceptionToBuffer(Exception exc) {
        StackTraceElement[] stackTrace = exc.getStackTrace();
        Intrinsics.checkNotNullExpressionValue(stackTrace, "getStackTrace(...)");
        for (StackTraceElement stackTraceElement : stackTrace) {
            this.buffer.addLine("    " + stackTraceElement);
        }
    }

    private final boolean isLowMemory() {
        ActivityManager.MemoryInfo memoryInfo = this.memoryInfo;
        ActivityManager activityManager = this.activityManager;
        if (activityManager == null) {
            Intrinsics.throwUninitializedPropertyAccessException("activityManager");
            activityManager = null;
        }
        activityManager.getMemoryInfo(memoryInfo);
        return memoryInfo.lowMemory;
    }

    private final void readFromLogcat() {
        try {
            Process start = new ProcessBuilder(SystemLogUtils.LOGCAT_PATH).redirectErrorStream(true).start();
            try {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(start.getInputStream()));
                r.d(bufferedReader, new Function1() { // from class: com.discord.crash_reporting.system_logs.a
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit readFromLogcat$lambda$2$lambda$1;
                        readFromLogcat$lambda$2$lambda$1 = SystemLogCapture.readFromLogcat$lambda$2$lambda$1(SystemLogCapture.this, (String) obj);
                        return readFromLogcat$lambda$2$lambda$1;
                    }
                });
                Unit unit = Unit.f33074a;
                ur.c.a(bufferedReader, null);
            } finally {
                start.destroy();
            }
        } catch (Exception e10) {
            CircularByteBuffer circularByteBuffer = this.buffer;
            circularByteBuffer.addLine("Exception starting logcat process '" + e10 + "'");
            addExceptionToBuffer(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit readFromLogcat$lambda$2$lambda$1(SystemLogCapture systemLogCapture, String line) {
        Intrinsics.checkNotNullParameter(line, "line");
        if (Companion.shouldIncludeLogLine$crash_reporting_release(line)) {
            systemLogCapture.buffer.addLine(line);
        }
        if (SystemLogUtils.INSTANCE.getRegexExtractTombstone$crash_reporting_release().i(line)) {
            systemLogCapture.tombstoneBuffer.addLine(line);
        }
        return Unit.f33074a;
    }

    private final void start() {
        if (!new File(SystemLogUtils.LOGCAT_PATH).exists()) {
            this.buffer.addLine("Unable to locate '/system/bin/logcat'");
            return;
        }
        while (true) {
            try {
                try {
                    if (!isLowMemory()) {
                        readFromLogcat();
                    } else {
                        this.buffer.addLine("Low memory. Skipping logcat read for 2000ms");
                    }
                } catch (Exception e10) {
                    CircularByteBuffer circularByteBuffer = this.buffer;
                    circularByteBuffer.addLine("Exception getting system logs, will restart logcat. '" + e10 + "'");
                    addExceptionToBuffer(e10);
                }
                Thread.sleep(THREAD_SLEEP_MS);
            } catch (Throwable th2) {
                Thread.sleep(THREAD_SLEEP_MS);
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit startThread$lambda$0(SystemLogCapture systemLogCapture) {
        systemLogCapture.start();
        return Unit.f33074a;
    }

    public final void appendOutput(@NotNull StringBuilder sb2) {
        Intrinsics.checkNotNullParameter(sb2, "sb");
        this.tombstoneBuffer.appendString(sb2);
        this.buffer.appendString(sb2);
    }

    public final void startThread(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.activityManager = (ActivityManager) context.getSystemService(ActivityManager.class);
        nr.a.b(true, true, null, SystemLogCapture.class.getSimpleName(), 0, new Function0() { // from class: com.discord.crash_reporting.system_logs.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit startThread$lambda$0;
                startThread$lambda$0 = SystemLogCapture.startThread$lambda$0(SystemLogCapture.this);
                return startThread$lambda$0;
            }
        }, 20, null);
    }
}
