package com.discord.device.utils;

import android.app.ActivityManager;
import android.content.Context;
import android.os.Build;
import bs.c;
import bs.r;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Locale;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0018\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u001a\b\u0010\u0000\u001a\u00020\u0001H\u0000\u001a\b\u0010\u0002\u001a\u00020\u0003H\u0000\u001a\u0010\u0010\u0004\u001a\u00020\u00012\u0006\u0010\u0005\u001a\u00020\u0006H\u0000\u001a\b\u0010\u0007\u001a\u00020\u0001H\u0000\u001a\b\u0010\b\u001a\u00020\u0001H\u0000¨\u0006\t"}, d2 = {"getSocFromProcCpuInfo", "", "getNumCpuCores", "", "ramSize", "context", "Landroid/content/Context;", "maxCpuFreq", "socName", "device_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDeviceHardwareInfo.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DeviceHardwareInfo.kt\ncom/discord/device/utils/DeviceHardwareInfoKt\n+ 2 ReadWrite.kt\nkotlin/io/TextStreamsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,72:1\n57#2:73\n1#3:74\n1#3:75\n*S KotlinDebug\n*F\n+ 1 DeviceHardwareInfo.kt\ncom/discord/device/utils/DeviceHardwareInfoKt\n*L\n10#1:73\n10#1:74\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DeviceHardwareInfoKt {
    public static final int getNumCpuCores() {
        return Runtime.getRuntime().availableProcessors();
    }

    @NotNull
    public static final String getSocFromProcCpuInfo() {
        Object obj;
        String str;
        try {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(new File("/proc/cpuinfo")), Charsets.UTF_8), 8192);
            Iterator it = r.e(bufferedReader).iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (StringsKt.P((String) obj, "Hardware", false, 2, null)) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            String str2 = (String) obj;
            if (str2 == null) {
                str = "";
            } else {
                str = StringsKt.k1((String) StringsKt.split$default(str2, new String[]{":"}, false, 0, 6, null).get(1)).toString();
            }
            c.a(bufferedReader, null);
            return str;
        } catch (Exception unused) {
            return "";
        }
    }

    @NotNull
    public static final String maxCpuFreq() {
        long j10;
        int numCpuCores = getNumCpuCores();
        long j11 = 0;
        for (int i10 = 0; i10 < numCpuCores; i10++) {
            try {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(new File("/sys/devices/system/cpu/cpu" + i10 + "/cpufreq/cpuinfo_max_freq")), Charsets.UTF_8), 8192);
                String readLine = bufferedReader.readLine();
                Intrinsics.checkNotNullExpressionValue(readLine, "readLine(...)");
                Long t10 = StringsKt.t(readLine);
                if (t10 != null) {
                    j10 = t10.longValue();
                } else {
                    j10 = 0;
                }
                if (j10 > j11) {
                    j11 = j10;
                }
                Unit unit = Unit.f32008a;
                c.a(bufferedReader, null);
            } catch (Exception unused) {
            }
        }
        if (j11 > 0) {
            StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
            String format = String.format(Locale.getDefault(), "%.2f", Arrays.copyOf(new Object[]{Double.valueOf(j11 / 1000000.0d)}, 1));
            Intrinsics.checkNotNullExpressionValue(format, "format(...)");
            return format;
        }
        return "";
    }

    @NotNull
    public static final String ramSize(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("activity");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.app.ActivityManager");
        ActivityManager.MemoryInfo memoryInfo = new ActivityManager.MemoryInfo();
        ((ActivityManager) systemService).getMemoryInfo(memoryInfo);
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String format = String.format(Locale.getDefault(), "%.2f", Arrays.copyOf(new Object[]{Double.valueOf(memoryInfo.totalMem / 1.073741824E9d)}, 1));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }

    @NotNull
    public static final String socName() {
        String SOC_MANUFACTURER;
        String str;
        String SOC_MODEL;
        if (Build.VERSION.SDK_INT >= 31) {
            SOC_MANUFACTURER = Build.SOC_MANUFACTURER;
            Intrinsics.checkNotNullExpressionValue(SOC_MANUFACTURER, "SOC_MANUFACTURER");
            if (SOC_MANUFACTURER.length() == 0) {
                SOC_MODEL = Build.SOC_MODEL;
                Intrinsics.checkNotNullExpressionValue(SOC_MODEL, "SOC_MODEL");
                if (SOC_MODEL.length() == 0) {
                    return getSocFromProcCpuInfo();
                }
            }
            str = Build.SOC_MODEL;
            return SOC_MANUFACTURER + "_" + str;
        }
        return getSocFromProcCpuInfo();
    }
}
