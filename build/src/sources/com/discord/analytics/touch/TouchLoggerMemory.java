package com.discord.analytics.touch;

import android.os.Debug;
import android.os.Process;
import com.discord.logging.Log;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import tr.r;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\t\n\u0000\n\u0002\u0010\b\n\u0000\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007J\u000e\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\u0005J\u0010\u0010\n\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0002J\u0018\u0010\u000b\u001a\u00020\f2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\r\u001a\u00020\u000eH\u0002¨\u0006\u000f"}, d2 = {"Lcom/discord/analytics/touch/TouchLoggerMemory;", "", "<init>", "()V", "getMemoryStats", "Lcom/discord/analytics/touch/MemoryStats;", "tag", "", "formatMemoryStats", "stats", "collectMemoryStatsFast", "getVmRssFromProc", "", "pid", "", "analytics_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTouchLoggerMemory.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TouchLoggerMemory.kt\ncom/discord/analytics/touch/TouchLoggerMemory\n+ 2 FileReadWrite.kt\nkotlin/io/FilesKt__FileReadWriteKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,125:1\n284#2,5:126\n1#3:131\n*S KotlinDebug\n*F\n+ 1 TouchLoggerMemory.kt\ncom/discord/analytics/touch/TouchLoggerMemory\n*L\n103#1:126,5\n103#1:131\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TouchLoggerMemory {
    @NotNull
    public static final TouchLoggerMemory INSTANCE = new TouchLoggerMemory();

    private TouchLoggerMemory() {
    }

    private final MemoryStats collectMemoryStatsFast(String str) {
        Runtime runtime = Runtime.getRuntime();
        int myPid = Process.myPid();
        long j10 = runtime.totalMemory();
        long j11 = (long) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
        long freeMemory = (j10 / j11) - (runtime.freeMemory() / j11);
        long nativeHeapAllocatedSize = Debug.getNativeHeapAllocatedSize() / j11;
        long nativeHeapFreeSize = Debug.getNativeHeapFreeSize() / j11;
        return new MemoryStats(freeMemory, nativeHeapAllocatedSize - nativeHeapFreeSize, 0L, getVmRssFromProc(str, myPid), 0L, 0L, 0L, nativeHeapAllocatedSize, nativeHeapFreeSize, freeMemory);
    }

    private final long getVmRssFromProc(String str, int i10) {
        int h02;
        long j10;
        try {
            File file = new File("/proc/" + i10 + "/status");
            if (!file.exists()) {
                return 0L;
            }
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(file), Charsets.UTF_8), 8192);
            for (String str2 : r.e(bufferedReader)) {
                if (StringsKt.P(str2, "VmRSS:", false, 2, null) && (h02 = StringsKt.h0(str2, ':', 0, false, 6, null)) != -1) {
                    String substring = str2.substring(h02 + 1);
                    Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                    String obj = StringsKt.k1(substring).toString();
                    int h03 = StringsKt.h0(obj, ' ', 0, false, 6, null);
                    if (h03 != -1) {
                        obj = obj.substring(0, h03);
                        Intrinsics.checkNotNullExpressionValue(obj, "substring(...)");
                    }
                    Long t10 = StringsKt.t(obj);
                    if (t10 != null) {
                        j10 = t10.longValue();
                    } else {
                        j10 = 0;
                    }
                    tr.c.a(bufferedReader, null);
                    return j10;
                }
            }
            Unit unit = Unit.f33282a;
            tr.c.a(bufferedReader, null);
            return 0L;
        } catch (Exception e10) {
            Log.INSTANCE.e(str, "Error reading VmRSS", e10);
            return 0L;
        }
    }

    @NotNull
    public final String formatMemoryStats(@NotNull MemoryStats stats) {
        Intrinsics.checkNotNullParameter(stats, "stats");
        long totalPss = stats.getTotalPss();
        long j10 = (long) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
        long swapPss = stats.getSwapPss() / j10;
        long graphicsPss = stats.getGraphicsPss() / j10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Memory: PSS: ");
        sb2.append(totalPss / j10);
        sb2.append("MB");
        sb2.append(", Native: ");
        sb2.append(stats.getNativePss() / j10);
        sb2.append("MB");
        sb2.append(", Java: ");
        sb2.append(stats.getJavaPss() / j10);
        sb2.append("MB");
        if (swapPss > 1) {
            sb2.append(", Swap: ");
            sb2.append(swapPss);
            sb2.append("MB");
        }
        if (graphicsPss > 1) {
            sb2.append(", Graphics: ");
            sb2.append(graphicsPss);
            sb2.append("MB");
        }
        return sb2.toString();
    }

    @NotNull
    public final MemoryStats getMemoryStats(@NotNull String tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        long nanoTime = System.nanoTime();
        MemoryStats collectMemoryStatsFast = collectMemoryStatsFast(tag);
        double nanoTime2 = (System.nanoTime() - nanoTime) / 1000.0d;
        if (nanoTime2 > 1000.0d) {
            Log log = Log.INSTANCE;
            StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
            Locale locale = Locale.US;
            String format = String.format(locale, "%.2f", Arrays.copyOf(new Object[]{Double.valueOf(nanoTime2)}, 1));
            Intrinsics.checkNotNullExpressionValue(format, "format(...)");
            String format2 = String.format(locale, "%.2f", Arrays.copyOf(new Object[]{Double.valueOf(nanoTime2 / 1000.0d)}, 1));
            Intrinsics.checkNotNullExpressionValue(format2, "format(...)");
            Log.w$default(log, tag, "! Memory collection slow: " + format + "μs (" + format2 + "ms)", (Throwable) null, 4, (Object) null);
        }
        return collectMemoryStatsFast;
    }
}
