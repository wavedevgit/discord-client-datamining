package com.facebook.react.modules.systeminfo;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.os.Build;
import com.facebook.react.R;
import java.util.Arrays;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\b\b\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\f\u001a\u00020\rH\u0002J\b\u0010\u000e\u001a\u00020\rH\u0002J\u0010\u0010\u000f\u001a\u00020\u00052\u0006\u0010\u0010\u001a\u00020\u0011H\u0007J\u0010\u0010\u000f\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u0013H\u0007J\u0018\u0010\u000f\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0010\u001a\u00020\u0011H\u0007J\u0010\u0010\u0014\u001a\u00020\u00052\u0006\u0010\u0010\u001a\u00020\u0011H\u0007J\u0010\u0010\u0014\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u0013H\u0007J\b\u0010\u0015\u001a\u00020\u0005H\u0007J \u0010\u0016\u001a\u0010\u0012\u0004\u0012\u00020\u0005\u0012\u0006\u0012\u0004\u0018\u00010\u00050\u00172\b\u0010\u0018\u001a\u0004\u0018\u00010\u0013H\u0007J\b\u0010\u0019\u001a\u00020\u0005H\u0002J\u0010\u0010\u001a\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0002J\u001a\u0010\u001b\u001a\u00020\u00052\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0010\u001a\u00020\u0011H\u0002J\u0015\u0010\u001c\u001a\u00020\u00052\u0006\u0010\u0012\u001a\u00020\u0013H\u0000¢\u0006\u0002\b\u001dJ\b\u0010\u001e\u001a\u00020\u0005H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u0016\u0010\t\u001a\n \n*\u0004\u0018\u00010\u00050\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u000b\u001a\u0004\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001f"}, d2 = {"Lcom/facebook/react/modules/systeminfo/AndroidInfoHelpers;", "", "<init>", "()V", "EMULATOR_LOCALHOST", "", "GENYMOTION_LOCALHOST", "DEVICE_LOCALHOST", "METRO_HOST_PROP_NAME", "TAG", "kotlin.jvm.PlatformType", "metroHostPropValue", "isRunningOnGenymotion", "", "isRunningOnStockEmulator", "getServerHost", "port", "", "context", "Landroid/content/Context;", "getAdbReverseTcpCommand", "getFriendlyDeviceName", "getInspectorHostMetadata", "", "applicationContext", "getReactNativeVersionString", "getDevServerPort", "getServerIpAddress", "getDevServerNetworkIpAndPort", "getDevServerNetworkIpAndPort$ReactAndroid_release", "getMetroHostPropValue", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAndroidInfoHelpers.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AndroidInfoHelpers.kt\ncom/facebook/react/modules/systeminfo/AndroidInfoHelpers\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,138:1\n1#2:139\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AndroidInfoHelpers {
    @NotNull
    public static final String DEVICE_LOCALHOST = "localhost";
    @NotNull
    public static final String EMULATOR_LOCALHOST = "10.0.2.2";
    @NotNull
    public static final String GENYMOTION_LOCALHOST = "10.0.3.2";
    @NotNull
    public static final String METRO_HOST_PROP_NAME = "metro.host";
    private static String metroHostPropValue;
    @NotNull
    public static final AndroidInfoHelpers INSTANCE = new AndroidInfoHelpers();
    private static final String TAG = AndroidInfoHelpers.class.getSimpleName();

    private AndroidInfoHelpers() {
    }

    @NotNull
    public static final String getAdbReverseTcpCommand(int i10) {
        return "adb reverse tcp:" + i10 + " tcp:" + i10;
    }

    private final int getDevServerPort(Context context) {
        return context.getResources().getInteger(R.integer.react_native_dev_server_port);
    }

    @NotNull
    public static final String getFriendlyDeviceName() {
        if (INSTANCE.isRunningOnGenymotion()) {
            String str = Build.MODEL;
            Intrinsics.checkNotNull(str);
            return str;
        }
        String str2 = Build.MODEL;
        String str3 = Build.VERSION.RELEASE;
        int i10 = Build.VERSION.SDK_INT;
        return str2 + " - " + str3 + " - API " + i10;
    }

    @NotNull
    public static final Map<String, String> getInspectorHostMetadata(Context context) {
        String str;
        String str2;
        if (context != null) {
            ApplicationInfo applicationInfo = context.getApplicationInfo();
            int i10 = applicationInfo.labelRes;
            str = context.getPackageName();
            if (i10 == 0) {
                str2 = applicationInfo.nonLocalizedLabel.toString();
            } else {
                str2 = context.getString(i10);
                Intrinsics.checkNotNull(str2);
            }
        } else {
            str = null;
            str2 = null;
        }
        return o0.m(v.a("appDisplayName", str2), v.a("appIdentifier", str), v.a("platform", "android"), v.a("deviceName", Build.MODEL), v.a("reactNativeVersion", INSTANCE.getReactNativeVersionString()));
    }

    /* JADX WARN: Removed duplicated region for block: B:40:0x0073  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final synchronized java.lang.String getMetroHostPropValue() {
        /*
            r7 = this;
            monitor-enter(r7)
            java.lang.String r0 = com.facebook.react.modules.systeminfo.AndroidInfoHelpers.metroHostPropValue     // Catch: java.lang.Throwable -> La
            if (r0 == 0) goto Ld
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0)     // Catch: java.lang.Throwable -> La
            monitor-exit(r7)
            return r0
        La:
            r0 = move-exception
            goto L82
        Ld:
            r0 = 0
            java.lang.Runtime r1 = java.lang.Runtime.getRuntime()     // Catch: java.lang.Throwable -> L53 java.lang.Exception -> L58
            java.lang.String r2 = "/system/bin/getprop"
            java.lang.String r3 = "metro.host"
            java.lang.String[] r2 = new java.lang.String[]{r2, r3}     // Catch: java.lang.Throwable -> L53 java.lang.Exception -> L58
            java.lang.Process r1 = r1.exec(r2)     // Catch: java.lang.Throwable -> L53 java.lang.Exception -> L58
            java.io.BufferedReader r2 = new java.io.BufferedReader     // Catch: java.lang.Throwable -> L49 java.lang.Exception -> L4e
            java.io.InputStreamReader r3 = new java.io.InputStreamReader     // Catch: java.lang.Throwable -> L49 java.lang.Exception -> L4e
            java.io.InputStream r4 = r1.getInputStream()     // Catch: java.lang.Throwable -> L49 java.lang.Exception -> L4e
            java.lang.String r5 = "UTF-8"
            java.nio.charset.Charset r5 = java.nio.charset.Charset.forName(r5)     // Catch: java.lang.Throwable -> L49 java.lang.Exception -> L4e
            r3.<init>(r4, r5)     // Catch: java.lang.Throwable -> L49 java.lang.Exception -> L4e
            r2.<init>(r3)     // Catch: java.lang.Throwable -> L49 java.lang.Exception -> L4e
            java.lang.String r0 = ""
        L34:
            java.lang.String r3 = r2.readLine()     // Catch: java.lang.Throwable -> L45 java.lang.Exception -> L47
            if (r3 == 0) goto L3c
            r0 = r3
            goto L34
        L3c:
            com.facebook.react.modules.systeminfo.AndroidInfoHelpers.metroHostPropValue = r0     // Catch: java.lang.Throwable -> L45 java.lang.Exception -> L47
            r2.close()     // Catch: java.lang.Throwable -> La
        L41:
            r1.destroy()     // Catch: java.lang.Throwable -> La
            goto L6f
        L45:
            r0 = move-exception
            goto L77
        L47:
            r0 = move-exception
            goto L5c
        L49:
            r2 = move-exception
            r6 = r2
            r2 = r0
            r0 = r6
            goto L77
        L4e:
            r2 = move-exception
            r6 = r2
            r2 = r0
            r0 = r6
            goto L5c
        L53:
            r1 = move-exception
            r2 = r0
            r0 = r1
            r1 = r2
            goto L77
        L58:
            r1 = move-exception
            r2 = r0
            r0 = r1
            r1 = r2
        L5c:
            java.lang.String r3 = com.facebook.react.modules.systeminfo.AndroidInfoHelpers.TAG     // Catch: java.lang.Throwable -> L45
            java.lang.String r4 = "Failed to query for metro.host prop:"
            p8.a.K(r3, r4, r0)     // Catch: java.lang.Throwable -> L45
            java.lang.String r0 = ""
            com.facebook.react.modules.systeminfo.AndroidInfoHelpers.metroHostPropValue = r0     // Catch: java.lang.Throwable -> L45
            if (r2 == 0) goto L6c
            r2.close()     // Catch: java.lang.Throwable -> La
        L6c:
            if (r1 == 0) goto L6f
            goto L41
        L6f:
            java.lang.String r0 = com.facebook.react.modules.systeminfo.AndroidInfoHelpers.metroHostPropValue     // Catch: java.lang.Throwable -> La
            if (r0 != 0) goto L75
            java.lang.String r0 = ""
        L75:
            monitor-exit(r7)
            return r0
        L77:
            if (r2 == 0) goto L7c
            r2.close()     // Catch: java.lang.Throwable -> La
        L7c:
            if (r1 == 0) goto L81
            r1.destroy()     // Catch: java.lang.Throwable -> La
        L81:
            throw r0     // Catch: java.lang.Throwable -> La
        L82:
            monitor-exit(r7)     // Catch: java.lang.Throwable -> La
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.modules.systeminfo.AndroidInfoHelpers.getMetroHostPropValue():java.lang.String");
    }

    /* JADX WARN: Code restructure failed: missing block: B:5:0x002d, code lost:
        if (r0 == null) goto L8;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.String getReactNativeVersionString() {
        /*
            r6 = this;
            java.util.Map<java.lang.String, java.lang.Object> r0 = com.facebook.react.modules.systeminfo.ReactNativeVersion.VERSION
            java.lang.String r1 = "major"
            java.lang.Object r1 = r0.get(r1)
            java.lang.String r2 = "minor"
            java.lang.Object r2 = r0.get(r2)
            java.lang.String r3 = "patch"
            java.lang.Object r3 = r0.get(r3)
            java.lang.String r4 = "prerelease"
            java.lang.Object r0 = r0.get(r4)
            if (r0 == 0) goto L2f
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            r4.<init>()
            java.lang.String r5 = "-"
            r4.append(r5)
            r4.append(r0)
            java.lang.String r0 = r4.toString()
            if (r0 != 0) goto L31
        L2f:
            java.lang.String r0 = ""
        L31:
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            r4.<init>()
            r4.append(r1)
            java.lang.String r1 = "."
            r4.append(r1)
            r4.append(r2)
            r4.append(r1)
            r4.append(r3)
            r4.append(r0)
            java.lang.String r0 = r4.toString()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.modules.systeminfo.AndroidInfoHelpers.getReactNativeVersionString():java.lang.String");
    }

    @NotNull
    public static final String getServerHost(int i10) {
        return INSTANCE.getServerIpAddress(null, i10);
    }

    private final String getServerIpAddress(Context context, int i10) {
        String str;
        if (getMetroHostPropValue().length() > 0) {
            str = getMetroHostPropValue();
        } else if (isRunningOnGenymotion()) {
            str = GENYMOTION_LOCALHOST;
        } else if (isRunningOnStockEmulator()) {
            str = EMULATOR_LOCALHOST;
        } else {
            str = DEVICE_LOCALHOST;
        }
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        String format = String.format(Locale.US, "%s:%d", Arrays.copyOf(new Object[]{str, Integer.valueOf(i10)}, 2));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }

    private final boolean isRunningOnGenymotion() {
        String FINGERPRINT = Build.FINGERPRINT;
        Intrinsics.checkNotNullExpressionValue(FINGERPRINT, "FINGERPRINT");
        return StringsKt.V(FINGERPRINT, "vbox", false, 2, null);
    }

    private final boolean isRunningOnStockEmulator() {
        String FINGERPRINT = Build.FINGERPRINT;
        Intrinsics.checkNotNullExpressionValue(FINGERPRINT, "FINGERPRINT");
        if (!StringsKt.V(FINGERPRINT, "generic", false, 2, null)) {
            Intrinsics.checkNotNullExpressionValue(FINGERPRINT, "FINGERPRINT");
            if (!StringsKt.P(FINGERPRINT, "google/sdk_gphone", false, 2, null)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @NotNull
    public final String getDevServerNetworkIpAndPort$ReactAndroid_release(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        String string = context.getResources().getString(R.string.react_native_dev_server_ip);
        int devServerPort = getDevServerPort(context);
        return string + ":" + devServerPort;
    }

    @NotNull
    public static final String getAdbReverseTcpCommand(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return getAdbReverseTcpCommand(INSTANCE.getDevServerPort(context));
    }

    @NotNull
    public static final String getServerHost(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        AndroidInfoHelpers androidInfoHelpers = INSTANCE;
        return androidInfoHelpers.getServerIpAddress(context, androidInfoHelpers.getDevServerPort(context));
    }

    @NotNull
    public static final String getServerHost(@NotNull Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "context");
        return INSTANCE.getServerIpAddress(context, i10);
    }
}
