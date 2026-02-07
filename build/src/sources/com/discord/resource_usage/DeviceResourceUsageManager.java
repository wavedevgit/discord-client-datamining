package com.discord.resource_usage;

import android.app.ActivityManager;
import android.content.Context;
import android.system.Os;
import android.system.OsConstants;
import com.discord.resource_usage.DeviceResourceUsageManager;
import com.discord.resource_usage.utils.ProcfsStats;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import ur.a;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0002\n\u0002\b\u0004\b\u0000\u0018\u0000 $2\u00020\u0001:\u0001$B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010 \u001a\u00020!H\u0007J\b\u0010\"\u001a\u00020!H\u0007J\b\u0010#\u001a\u00020!H\u0002R\u0016\u0010\u0006\u001a\n \b*\u0004\u0018\u00010\u00070\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\t\u001a\u0004\u0018\u00010\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\f\u001a\u00020\rX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000e\u0010\u000f\"\u0004\b\u0010\u0010\u0011R\u001a\u0010\u0012\u001a\u00020\u0013X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\u0015\"\u0004\b\u0016\u0010\u0017R\u001a\u0010\u0018\u001a\u00020\u0019X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001a\u0010\u001b\"\u0004\b\u001c\u0010\u001dR\u0011\u0010\u001e\u001a\u00020\u0013¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u0015¨\u0006%"}, d2 = {"Lcom/discord/resource_usage/DeviceResourceUsageManager;", "", "context", "Landroid/content/Context;", "<init>", "(Landroid/content/Context;)V", "activityManager", "Landroid/app/ActivityManager;", "kotlin.jvm.PlatformType", "thread", "Ljava/lang/Thread;", "threadSync", "cpuUsagePercent", "", "getCpuUsagePercent", "()D", "setCpuUsagePercent", "(D)V", "memoryRssKB", "", "getMemoryRssKB", "()I", "setMemoryRssKB", "(I)V", "memoryInfo", "Landroid/app/ActivityManager$MemoryInfo;", "getMemoryInfo", "()Landroid/app/ActivityManager$MemoryInfo;", "setMemoryInfo", "(Landroid/app/ActivityManager$MemoryInfo;)V", "cpuCoreCount", "getCpuCoreCount", ViewProps.START, "", "stop", "monitor", "Companion", "resource_usage_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDeviceResourceUsageManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DeviceResourceUsageManager.kt\ncom/discord/resource_usage/DeviceResourceUsageManager\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,145:1\n1#2:146\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DeviceResourceUsageManager {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final long SC_CLK_TCK;
    private static final int SC_CPU_CORE_COUNT;
    private static final long SC_PAGE_SIZE;
    private static final long THREAD_SLEEP_MS = 1000;
    private final ActivityManager activityManager;
    private final int cpuCoreCount;
    private double cpuUsagePercent;
    @NotNull
    private ActivityManager.MemoryInfo memoryInfo;
    private int memoryRssKB;
    private Thread thread;
    @NotNull
    private final Object threadSync;

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/resource_usage/DeviceResourceUsageManager$Companion;", "", "<init>", "()V", "SC_CLK_TCK", "", "SC_PAGE_SIZE", "SC_CPU_CORE_COUNT", "", "THREAD_SLEEP_MS", "resource_usage_monitor_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    static {
        Long b10;
        Long b11;
        Integer b12;
        try {
            Result.a aVar = Result.f32053e;
            b10 = Result.b(Long.valueOf(Os.sysconf(OsConstants._SC_CLK_TCK)));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32053e;
            b10 = Result.b(c.a(th2));
        }
        if (Result.g(b10)) {
            b10 = 100L;
        }
        SC_CLK_TCK = ((Number) b10).longValue();
        try {
            b11 = Result.b(Long.valueOf(Os.sysconf(OsConstants._SC_PAGE_SIZE)));
        } catch (Throwable th3) {
            Result.a aVar3 = Result.f32053e;
            b11 = Result.b(c.a(th3));
        }
        if (Result.g(b11)) {
            b11 = 4096L;
        }
        SC_PAGE_SIZE = ((Number) b11).longValue();
        try {
            b12 = Result.b(Integer.valueOf(Runtime.getRuntime().availableProcessors()));
        } catch (Throwable th4) {
            Result.a aVar4 = Result.f32053e;
            b12 = Result.b(c.a(th4));
        }
        if (Result.g(b12)) {
            b12 = 1;
        }
        SC_CPU_CORE_COUNT = ((Number) b12).intValue();
    }

    public DeviceResourceUsageManager(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.activityManager = (ActivityManager) context.getSystemService(ActivityManager.class);
        this.threadSync = new Object();
        this.memoryInfo = new ActivityManager.MemoryInfo();
        int i10 = SC_CPU_CORE_COUNT;
        this.cpuCoreCount = i10 == 0 ? 1 : i10;
    }

    private final void monitor() {
        String str;
        ProcfsStats procfsStats = null;
        Long l10 = null;
        while (true) {
            try {
                synchronized (this.threadSync) {
                    if (this.thread != Thread.currentThread()) {
                        return;
                    }
                    Unit unit = Unit.f32056a;
                    if (!Thread.interrupted()) {
                        ActivityManager.MemoryInfo memoryInfo = this.memoryInfo;
                        this.activityManager.getMemoryInfo(memoryInfo);
                        if (memoryInfo.lowMemory) {
                            Thread.sleep(1000L);
                        } else {
                            ProcfsStats readStatFile = ProcfsStats.Companion.readStatFile();
                            long currentTimeMillis = System.currentTimeMillis();
                            if (procfsStats != null && l10 != null && readStatFile != null) {
                                this.cpuUsagePercent = (((readStatFile.getTotalTime() - procfsStats.getTotalTime()) * 100) / (SC_CLK_TCK * ((currentTimeMillis - l10.longValue()) / 1000.0d))) / Math.max(this.cpuCoreCount, 1);
                                this.memoryRssKB = (int) ((readStatFile.getRssPages() * SC_PAGE_SIZE) / ((long) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET));
                            }
                            l10 = Long.valueOf(currentTimeMillis);
                            Thread.sleep(1000L);
                            procfsStats = readStatFile;
                        }
                    } else {
                        return;
                    }
                }
            } catch (Exception e10) {
                String simpleName = e10.getClass().getSimpleName();
                Throwable cause = e10.getCause();
                if (cause != null) {
                    str = cause.getClass().getSimpleName();
                } else {
                    str = null;
                }
                Intrinsics.checkNotNull(simpleName);
                if (!StringsKt.V(simpleName, "DeadSystem", false, 2, null)) {
                    if (str == null || !StringsKt.V(str, "DeadSystem", false, 2, null)) {
                        throw e10;
                    }
                    return;
                }
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit start$lambda$1$lambda$0(DeviceResourceUsageManager deviceResourceUsageManager) {
        try {
            deviceResourceUsageManager.monitor();
        } catch (InterruptedException unused) {
        }
        return Unit.f32056a;
    }

    public final int getCpuCoreCount() {
        return this.cpuCoreCount;
    }

    public final double getCpuUsagePercent() {
        return this.cpuUsagePercent;
    }

    @NotNull
    public final ActivityManager.MemoryInfo getMemoryInfo() {
        return this.memoryInfo;
    }

    public final int getMemoryRssKB() {
        return this.memoryRssKB;
    }

    public final void setCpuUsagePercent(double d10) {
        this.cpuUsagePercent = d10;
    }

    public final void setMemoryInfo(@NotNull ActivityManager.MemoryInfo memoryInfo) {
        Intrinsics.checkNotNullParameter(memoryInfo, "<set-?>");
        this.memoryInfo = memoryInfo;
    }

    public final void setMemoryRssKB(int i10) {
        this.memoryRssKB = i10;
    }

    public final void start() {
        Thread thread;
        synchronized (this.threadSync) {
            thread = this.thread;
            this.thread = a.b(true, true, null, "DeviceResourceUsageMonitor", 2, new Function0() { // from class: z7.a
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit start$lambda$1$lambda$0;
                    start$lambda$1$lambda$0 = DeviceResourceUsageManager.start$lambda$1$lambda$0(DeviceResourceUsageManager.this);
                    return start$lambda$1$lambda$0;
                }
            }, 4, null);
        }
        if (thread != null) {
            thread.interrupt();
        }
    }

    public final void stop() {
        Thread thread;
        synchronized (this.threadSync) {
            thread = this.thread;
            this.thread = null;
        }
        if (thread != null) {
            thread.interrupt();
        }
    }
}
