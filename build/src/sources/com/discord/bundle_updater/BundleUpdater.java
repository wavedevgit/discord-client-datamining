package com.discord.bundle_updater;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.AssetManager;
import android.net.Uri;
import android.webkit.CookieManager;
import com.discord.client_info.ClientInfo;
import com.discord.crash_reporting.CrashPersistence;
import com.discord.crash_reporting.CrashReporting;
import com.discord.logging.Log;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.resource_usage.DeviceResourceUsageRecorder;
import com.discord.shortcuts.ShortcutData;
import com.discord.shortcuts.ShortcutUtilsKt;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableNativeMap;
import gs.j1;
import gs.m0;
import ir.v;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.ConnectException;
import java.net.SocketException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import javax.net.ssl.SSLException;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlin.time.Duration;
import kotlin.time.TimeMark;
import kotlin.time.g;
import kotlinx.coroutines.CoroutineScope;
import okhttp3.Cookie;
import okhttp3.CookieJar;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Response;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000ú\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\b\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0003\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u0011\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u001f\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0011\u0018\u0000 \u00ad\u00012\u00020\u0001:\u0016®\u0001¯\u0001°\u0001±\u0001²\u0001³\u0001´\u0001µ\u0001¶\u0001·\u0001\u00ad\u0001B+\b\u0002\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\b\b\u0002\u0010\t\u001a\u00020\b¢\u0006\u0004\b\n\u0010\u000bJ\u001f\u0010\u000f\u001a\u00020\u00042\u0006\u0010\r\u001a\u00020\f2\u0006\u0010\u000e\u001a\u00020\fH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0011\u001a\u00020\u00042\u0006\u0010\u000e\u001a\u00020\fH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J\u001f\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0013\u001a\u00020\u00042\u0006\u0010\u0014\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\u0016\u0010\u0017J\u000f\u0010\u0019\u001a\u00020\u0018H\u0002¢\u0006\u0004\b\u0019\u0010\u001aJ\u0017\u0010\u001d\u001a\u00020\u00152\u0006\u0010\u001c\u001a\u00020\u001bH\u0002¢\u0006\u0004\b\u001d\u0010\u001eJ)\u0010#\u001a\u00020\u00182\b\u0010\u001f\u001a\u0004\u0018\u00010\f2\u0006\u0010!\u001a\u00020 2\u0006\u0010\"\u001a\u00020\fH\u0002¢\u0006\u0004\b#\u0010$J\u0017\u0010(\u001a\u00020'2\u0006\u0010&\u001a\u00020%H\u0002¢\u0006\u0004\b(\u0010)Je\u00108\u001a\b\u0012\u0004\u0012\u000205042\u0006\u0010*\u001a\u00020\f2\u001c\b\u0002\u0010-\u001a\u0016\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\f0,\u0018\u00010+2\n\b\u0002\u0010.\u001a\u0004\u0018\u00010\f2\n\b\u0002\u00100\u001a\u0004\u0018\u00010/2\u0006\u00101\u001a\u00020\u00042\b\b\u0002\u00103\u001a\u000202H\u0002¢\u0006\u0004\b6\u00107J\u0013\u00109\u001a\u00020\u0004*\u00020\u0004H\u0002¢\u0006\u0004\b9\u0010:J\u000f\u0010;\u001a\u00020\u0015H\u0002¢\u0006\u0004\b;\u0010<J'\u0010?\u001a\u00020\u00152\u0016\u0010>\u001a\f\u0012\b\b\u0001\u0012\u0004\u0018\u00010\f0=\"\u0004\u0018\u00010\fH\u0002¢\u0006\u0004\b?\u0010@J#\u0010D\u001a\u00020\u00182\u0006\u0010B\u001a\u00020A2\n\b\u0002\u0010C\u001a\u0004\u0018\u00010\fH\u0002¢\u0006\u0004\bD\u0010EJK\u0010L\u001a\u00020\u00152\u0006\u0010B\u001a\u00020F2\u0006\u0010*\u001a\u00020\f2\u0006\u0010H\u001a\u00020G2\n\b\u0002\u0010J\u001a\u0004\u0018\u00010I2\n\b\u0002\u0010K\u001a\u0004\u0018\u0001022\n\b\u0002\u0010C\u001a\u0004\u0018\u00010\fH\u0002¢\u0006\u0004\bL\u0010MJ\u0017\u0010N\u001a\u00020\u00152\u0006\u0010B\u001a\u00020\u0018H\u0002¢\u0006\u0004\bN\u0010OJ\u000f\u0010Q\u001a\u0004\u0018\u00010P¢\u0006\u0004\bQ\u0010RJ\u001d\u0010U\u001a\u00020\u00152\u0006\u0010\u001c\u001a\u00020\u001b2\u0006\u0010T\u001a\u00020S¢\u0006\u0004\bU\u0010VJ/\u0010[\u001a\b\u0012\u0002\b\u0003\u0018\u00010Z2\b\b\u0002\u0010W\u001a\u0002022\u0010\b\u0002\u0010Y\u001a\n\u0012\u0004\u0012\u00020\u0015\u0018\u00010X¢\u0006\u0004\b[\u0010\\R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010]R\u0014\u0010\u0005\u001a\u00020\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0005\u0010^R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0007\u0010_R\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\t\u0010`R#\u0010g\u001a\n b*\u0004\u0018\u00010a0a8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\bc\u0010d\u001a\u0004\be\u0010fR\u0014\u0010i\u001a\u00020h8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bi\u0010jR\u001b\u0010o\u001a\u00020k8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\bl\u0010d\u001a\u0004\bm\u0010nR\u001b\u0010s\u001a\u00020\u00048FX\u0086\u0084\u0002¢\u0006\f\n\u0004\bp\u0010d\u001a\u0004\bq\u0010rR\u0016\u0010t\u001a\u00020I8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bt\u0010uR$\u0010w\u001a\u00020'2\u0006\u0010v\u001a\u00020'8\u0006@BX\u0086\u000e¢\u0006\f\n\u0004\bw\u0010x\u001a\u0004\bw\u0010yR\u0016\u0010z\u001a\u00020'8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bz\u0010xR\u001e\u0010}\u001a\b\u0012\u0004\u0012\u00020|0{8\u0006¢\u0006\r\n\u0004\b}\u0010~\u001a\u0005\b\u007f\u0010\u0080\u0001R\u001b\u0010\u0081\u0001\u001a\u0004\u0018\u00010G8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0081\u0001\u0010\u0082\u0001R8\u0010\u0084\u0001\u001a\u0011\u0012\u0004\u0012\u00020'\u0012\u0004\u0012\u00020\u0015\u0018\u00010\u0083\u00018\u0006@\u0006X\u0086\u000e¢\u0006\u0018\n\u0006\b\u0084\u0001\u0010\u0085\u0001\u001a\u0006\b\u0086\u0001\u0010\u0087\u0001\"\u0006\b\u0088\u0001\u0010\u0089\u0001R>\u0010\u008a\u0001\u001a\u0017\u0012\n\u0012\b\u0012\u0004\u0012\u00020|0+\u0012\u0004\u0012\u00020\u0015\u0018\u00010\u0083\u00018\u0006@\u0006X\u0086\u000e¢\u0006\u0018\n\u0006\b\u008a\u0001\u0010\u0085\u0001\u001a\u0006\b\u008b\u0001\u0010\u0087\u0001\"\u0006\b\u008c\u0001\u0010\u0089\u0001R\u0017\u0010\u008f\u0001\u001a\u00020\f8BX\u0082\u0004¢\u0006\b\u001a\u0006\b\u008d\u0001\u0010\u008e\u0001R\u0017\u0010\u0091\u0001\u001a\u00020\f8BX\u0082\u0004¢\u0006\b\u001a\u0006\b\u0090\u0001\u0010\u008e\u0001R)\u0010\u0095\u0001\u001a\u00020\f2\u0006\u0010v\u001a\u00020\f8F@BX\u0086\u000e¢\u0006\u0010\u001a\u0006\b\u0092\u0001\u0010\u008e\u0001\"\u0006\b\u0093\u0001\u0010\u0094\u0001R-\u0010\u0098\u0001\u001a\u0004\u0018\u00010\f2\b\u0010v\u001a\u0004\u0018\u00010\f8B@BX\u0082\u000e¢\u0006\u0010\u001a\u0006\b\u0096\u0001\u0010\u008e\u0001\"\u0006\b\u0097\u0001\u0010\u0094\u0001R)\u0010\u009b\u0001\u001a\u00020\f2\u0006\u0010v\u001a\u00020\f8F@BX\u0086\u000e¢\u0006\u0010\u001a\u0006\b\u0099\u0001\u0010\u008e\u0001\"\u0006\b\u009a\u0001\u0010\u0094\u0001R\u0016\u0010\u009d\u0001\u001a\u00020'8BX\u0082\u0004¢\u0006\u0007\u001a\u0005\b\u009c\u0001\u0010yR\u0018\u0010\u001f\u001a\u0004\u0018\u00010\f8BX\u0082\u0004¢\u0006\b\u001a\u0006\b\u009e\u0001\u0010\u008e\u0001R*\u0010¢\u0001\u001a\u00020\f2\u0007\u0010\u009f\u0001\u001a\u00020\f8F@FX\u0086\u000e¢\u0006\u0010\u001a\u0006\b \u0001\u0010\u008e\u0001\"\u0006\b¡\u0001\u0010\u0094\u0001R\u0017\u0010¦\u0001\u001a\u0005\u0018\u00010£\u00018F¢\u0006\b\u001a\u0006\b¤\u0001\u0010¥\u0001R0\u0010¨\u0001\u001a\u0005\u0018\u00010§\u00012\n\u0010¨\u0001\u001a\u0005\u0018\u00010§\u00018F@FX\u0086\u000e¢\u0006\u0010\u001a\u0006\b©\u0001\u0010ª\u0001\"\u0006\b«\u0001\u0010¬\u0001¨\u0006¸\u0001"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater;", "", "Landroid/content/SharedPreferences;", "sharedPreferences", "Ljava/io/File;", "filesDirectory", "Landroid/content/res/AssetManager;", "assetManager", "Ljava/util/concurrent/ExecutorService;", "executor", "<init>", "(Landroid/content/SharedPreferences;Ljava/io/File;Landroid/content/res/AssetManager;Ljava/util/concurrent/ExecutorService;)V", "", "commit", "file", "otaFile", "(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;", "otaTempFile", "(Ljava/lang/String;)Ljava/io/File;", "src", "dst", "", "moveFile", "(Ljava/io/File;Ljava/io/File;)V", "Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttempt;", "attemptOtaUpdate", "()Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttempt;", "Landroid/content/Context;", "context", "clearBundle", "(Landroid/content/Context;)V", "existingOtaCommit", "Lcom/discord/bundle_updater/AppManifest;", "newManifest", "newOtaCommit", "downloadOtaFiles", "(Ljava/lang/String;Lcom/discord/bundle_updater/AppManifest;Ljava/lang/String;)Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttempt;", "", "throwable", "", "isNetworkException", "(Ljava/lang/Throwable;)Z", "url", "", "Lkotlin/Pair;", "extraHeaders", "hash", "Lcom/discord/bundle_updater/BundleUpdater$Patch;", "patch", "destinationFile", "", "attempt", "Lkotlin/Result;", "Lokhttp3/Headers;", "downloadSingleFile-hUnOzRk", "(Ljava/lang/String;Ljava/util/List;Ljava/lang/String;Lcom/discord/bundle_updater/BundleUpdater$Patch;Ljava/io/File;I)Ljava/lang/Object;", "downloadSingleFile", "ensureEmptyFile", "(Ljava/io/File;)Ljava/io/File;", "validateBuildOverrideCookie", "()V", "", "knownOtaCommits", "deleteUnknownOtas", "([Ljava/lang/String;)V", "Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttemptResult;", "result", "error", "createOtaCheckAttempt", "(Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttemptResult;Ljava/lang/String;)Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttempt;", "Lcom/discord/bundle_updater/BundleUpdater$OtaAssetDownloadAttemptResult;", "Lkotlin/time/TimeMark;", "startMark", "", "bytesReceived", "statusCode", "trackAssetDownload", "(Lcom/discord/bundle_updater/BundleUpdater$OtaAssetDownloadAttemptResult;Ljava/lang/String;Lkotlin/time/TimeMark;Ljava/lang/Long;Ljava/lang/Integer;Ljava/lang/String;)V", "trackCheckAttempt", "(Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttempt;)V", "Lcom/discord/bundle_updater/BundleUpdater$ManifestInfo;", "manifestInfo", "()Lcom/discord/bundle_updater/BundleUpdater$ManifestInfo;", "Landroid/content/Intent;", "intent", "handleIntent", "(Landroid/content/Context;Landroid/content/Intent;)V", "delaySeconds", "Lkotlin/Function0;", "onComplete", "Ljava/util/concurrent/Future;", "checkForUpdate", "(ILkotlin/jvm/functions/Function0;)Ljava/util/concurrent/Future;", "Landroid/content/SharedPreferences;", "Ljava/io/File;", "Landroid/content/res/AssetManager;", "Ljava/util/concurrent/ExecutorService;", "Landroid/webkit/CookieManager;", "kotlin.jvm.PlatformType", "cookieManager$delegate", "Lkotlin/Lazy;", "getCookieManager", "()Landroid/webkit/CookieManager;", "cookieManager", "Lkotlinx/coroutines/CoroutineScope;", "coroutineScope", "Lkotlinx/coroutines/CoroutineScope;", "Lokhttp3/OkHttpClient;", "client$delegate", "getClient", "()Lokhttp3/OkHttpClient;", "client", "otasRootDirectory$delegate", "getOtasRootDirectory", "()Ljava/io/File;", "otasRootDirectory", "totalBytesReceived", "J", "value", "isVersionRequired", "Z", "()Z", "otaUpdateChecking", "", "Lcom/discord/bundle_updater/BundleUpdater$OtaMetric;", "otaMetrics", "Ljava/util/List;", "getOtaMetrics", "()Ljava/util/List;", "otaCheckTimeMark", "Lkotlin/time/TimeMark;", "Lkotlin/Function1;", "onBundleDownloadedListener", "Lkotlin/jvm/functions/Function1;", "getOnBundleDownloadedListener", "()Lkotlin/jvm/functions/Function1;", "setOnBundleDownloadedListener", "(Lkotlin/jvm/functions/Function1;)V", "onOtaUpdateCheckedListener", "getOnOtaUpdateCheckedListener", "setOnOtaUpdateCheckedListener", "getVersion", "()Ljava/lang/String;", "version", "getManifestURL", "manifestURL", "getManifestETag", "setManifestETag", "(Ljava/lang/String;)V", "manifestETag", "getInProgressOtaCommit", "setInProgressOtaCommit", "inProgressOtaCommit", "getOtaVersion", "setOtaVersion", "otaVersion", "getValidOTAVersion", "validOTAVersion", "getExistingOtaCommit", "cookieHeader", "getBuildOverrideCookieHeader", "setBuildOverrideCookieHeader", "buildOverrideCookieHeader", "Lokhttp3/Cookie;", "getBuildOverrideCookie", "()Lokhttp3/Cookie;", "buildOverrideCookie", "Lcom/discord/bundle_updater/BundleUpdater$OtaBundle;", "bundle", "getBundle", "()Lcom/discord/bundle_updater/BundleUpdater$OtaBundle;", "setBundle", "(Lcom/discord/bundle_updater/BundleUpdater$OtaBundle;)V", "Companion", "ManifestInfo", "OtaMetric", "OtaCheckAttempt", "OtaAssetDownloadAttempt", "OtaCheckAttemptResult", "OtaAssetDownloadAttemptResult", "HttpException", "MaxDownloadAttemptsException", "Patch", "OtaBundle", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBundleUpdater.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BundleUpdater.kt\ncom/discord/bundle_updater/BundleUpdater\n+ 2 SharedPreferences.kt\nandroidx/core/content/SharedPreferencesKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 5 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 6 OkHttpClient.kt\nokhttp3/OkHttpClient$Builder\n*L\n1#1,911:1\n40#2,13:912\n40#2,13:925\n40#2,13:938\n40#2,13:951\n40#2,13:964\n1#3:977\n1#3:988\n1617#4,9:978\n1869#4:987\n1870#4:989\n1626#4:990\n1869#4,2:991\n13472#5,2:993\n563#6:995\n*S KotlinDebug\n*F\n+ 1 BundleUpdater.kt\ncom/discord/bundle_updater/BundleUpdater\n*L\n167#1:912,13\n171#1:925,13\n181#1:938,13\n192#1:951,13\n212#1:964,13\n479#1:988\n479#1:978,9\n479#1:987\n479#1:989\n479#1:990\n552#1:991,2\n777#1:993,2\n101#1:995\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BundleUpdater {
    @NotNull
    public static final String ANDROID_JS_BUNDLE_ASSET_NAME = "index.android.bundle";
    @NotNull
    private static final String BUILD_OVERRIDE_COOKIE = "buildOverride";
    @NotNull
    public static final String CLEAR_BUILD_OVERRIDE = "clear_build_override";
    @NotNull
    private static final String KEY_ANDROID_JS_BUNDLE = "key_android_js_bundle";
    @NotNull
    private static final String KEY_ANDROID_JS_BUNDLE_RELEASE_NAME = "key_android_js_bundle_release_name";
    @NotNull
    private static final String KEY_BUILD_OVERRIDE_COOKIE_HEADER = "build_override_cookie_header";
    @NotNull
    private static final String KEY_ETAG = "e_tag";
    @NotNull
    private static final String KEY_IN_PROGRESS_OTA_COMMIT = "in_progress_ota_commit";
    @NotNull
    private static final String KEY_OTA_VERSION = "ota_version";
    @NotNull
    private static final String OTAS_DIRECTORY = "otas";
    private static BundleUpdater updater;
    @NotNull
    private final AssetManager assetManager;
    @NotNull
    private final Lazy client$delegate;
    @NotNull
    private final Lazy cookieManager$delegate;
    @NotNull
    private final CoroutineScope coroutineScope;
    @NotNull
    private final ExecutorService executor;
    @NotNull
    private final File filesDirectory;
    private boolean isVersionRequired;
    private Function1<? super Boolean, Unit> onBundleDownloadedListener;
    private Function1<? super List<? extends OtaMetric>, Unit> onOtaUpdateCheckedListener;
    private TimeMark otaCheckTimeMark;
    @NotNull
    private final List<OtaMetric> otaMetrics;
    private boolean otaUpdateChecking;
    @NotNull
    private final Lazy otasRootDirectory$delegate;
    @NotNull
    private final SharedPreferences sharedPreferences;
    private long totalBytesReceived;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final Uri BASE_OTA_URI = new Uri.Builder().scheme("https").authority("discord.com").build();
    @NotNull
    private static final HttpUrl BASE_OTA_URL = new HttpUrl.a().q("https").g("discord.com").c();
    private static final String TAG = BundleUpdater.class.getSimpleName();

    @Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001aJ\u0006\u0010\u001b\u001a\u00020\u0018J\u001a\u0010\u001c\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u001a2\n\u0010\u001d\u001a\u0006\u0012\u0002\b\u00030\u001eJ\u0006\u0010\u001f\u001a\u00020\u0016R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u0016\u0010\u000f\u001a\n \u0011*\u0004\u0018\u00010\u00100\u0010X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0013X\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\u0014\u001a\n \u0011*\u0004\u0018\u00010\u00050\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0016X\u0082.¢\u0006\u0002\n\u0000¨\u0006 "}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$Companion;", "", "<init>", "()V", "CLEAR_BUILD_OVERRIDE", "", "KEY_ANDROID_JS_BUNDLE", "KEY_ANDROID_JS_BUNDLE_RELEASE_NAME", "KEY_ETAG", "KEY_IN_PROGRESS_OTA_COMMIT", "KEY_OTA_VERSION", "KEY_BUILD_OVERRIDE_COOKIE_HEADER", "ANDROID_JS_BUNDLE_ASSET_NAME", "BUILD_OVERRIDE_COOKIE", "OTAS_DIRECTORY", "BASE_OTA_URI", "Landroid/net/Uri;", "kotlin.jvm.PlatformType", "BASE_OTA_URL", "Lokhttp3/HttpUrl;", "TAG", "updater", "Lcom/discord/bundle_updater/BundleUpdater;", "init", "", "context", "Landroid/content/Context;", "checkForOta", "addClearBuildOverrideShortcut", "activity", "Ljava/lang/Class;", "instance", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void addClearBuildOverrideShortcut(@NotNull Context context, @NotNull Class<?> activity) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(activity, "activity");
            if (!CrashPersistence.Companion.getInstance(context).isStaff()) {
                return;
            }
            androidx.core.content.pm.b.g(context, ShortcutUtilsKt.createShortcut$default(context, "clear-build-override", "Clear Build Override", "Clear Build Override", null, CollectionsKt.l(), ShortcutData.Companion.createShortcutIntent(context, BundleUpdater.CLEAR_BUILD_OVERRIDE, activity, "clear-build-override", o0.i()), 0, 64, null));
        }

        public final void checkForOta() {
            if (Intrinsics.areEqual(CrashReporting.INSTANCE.isCrashedLastRun(), Boolean.FALSE)) {
                BundleUpdater.checkForUpdate$default(instance(), 10, null, 2, null);
            }
        }

        public final void init(@NotNull Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            SharedPreferences sharedPreferences = context.getSharedPreferences("BundleUpdater", 0);
            Intrinsics.checkNotNullExpressionValue(sharedPreferences, "getSharedPreferences(...)");
            File filesDir = context.getFilesDir();
            Intrinsics.checkNotNullExpressionValue(filesDir, "getFilesDir(...)");
            AssetManager assets = context.getAssets();
            Intrinsics.checkNotNullExpressionValue(assets, "getAssets(...)");
            BundleUpdater.updater = new BundleUpdater(sharedPreferences, filesDir, assets, null, 8, null);
        }

        @NotNull
        public final BundleUpdater instance() {
            BundleUpdater bundleUpdater = BundleUpdater.updater;
            if (bundleUpdater == null) {
                Intrinsics.throwUninitializedPropertyAccessException("updater");
                return null;
            }
            return bundleUpdater;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\b\u0002\u0018\u00002\u00060\u0001j\u0002`\u0002B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006R\u0011\u0010\u0003\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\b¨\u0006\t"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$HttpException;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "statusCode", "", "<init>", "(I)V", "getStatusCode", "()I", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class HttpException extends Exception {
        private final int statusCode;

        public HttpException(int i10) {
            super("Failure to fetch manifest, status code: " + i10 + "...");
            this.statusCode = i10;
        }

        public final int getStatusCode() {
            return this.statusCode;
        }
    }

    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0006\u0010\f\u001a\u00020\rJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u000f\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u001f\u0010\u0010\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0017"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$ManifestInfo;", "", "source", "", "metadata", "Lcom/discord/bundle_updater/AppManifestMetadata;", "<init>", "(Ljava/lang/String;Lcom/discord/bundle_updater/AppManifestMetadata;)V", "getSource", "()Ljava/lang/String;", "getMetadata", "()Lcom/discord/bundle_updater/AppManifestMetadata;", "toNativeMap", "Lcom/facebook/react/bridge/WritableNativeMap;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ManifestInfo {
        private final AppManifestMetadata metadata;
        @NotNull
        private final String source;

        public ManifestInfo(@NotNull String source, AppManifestMetadata appManifestMetadata) {
            Intrinsics.checkNotNullParameter(source, "source");
            this.source = source;
            this.metadata = appManifestMetadata;
        }

        public static /* synthetic */ ManifestInfo copy$default(ManifestInfo manifestInfo, String str, AppManifestMetadata appManifestMetadata, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = manifestInfo.source;
            }
            if ((i10 & 2) != 0) {
                appManifestMetadata = manifestInfo.metadata;
            }
            return manifestInfo.copy(str, appManifestMetadata);
        }

        @NotNull
        public final String component1() {
            return this.source;
        }

        public final AppManifestMetadata component2() {
            return this.metadata;
        }

        @NotNull
        public final ManifestInfo copy(@NotNull String source, AppManifestMetadata appManifestMetadata) {
            Intrinsics.checkNotNullParameter(source, "source");
            return new ManifestInfo(source, appManifestMetadata);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ManifestInfo) {
                ManifestInfo manifestInfo = (ManifestInfo) obj;
                return Intrinsics.areEqual(this.source, manifestInfo.source) && Intrinsics.areEqual(this.metadata, manifestInfo.metadata);
            }
            return false;
        }

        public final AppManifestMetadata getMetadata() {
            return this.metadata;
        }

        @NotNull
        public final String getSource() {
            return this.source;
        }

        public int hashCode() {
            int hashCode = this.source.hashCode() * 31;
            AppManifestMetadata appManifestMetadata = this.metadata;
            return hashCode + (appManifestMetadata == null ? 0 : appManifestMetadata.hashCode());
        }

        @NotNull
        public final WritableNativeMap toNativeMap() {
            WritableNativeMap writableNativeMap;
            Pair a10 = v.a("source", this.source);
            AppManifestMetadata appManifestMetadata = this.metadata;
            if (appManifestMetadata != null) {
                writableNativeMap = appManifestMetadata.toNativeMap();
            } else {
                writableNativeMap = null;
            }
            return NativeMapExtensionsKt.nativeMapOf(a10, v.a("metadata", writableNativeMap));
        }

        @NotNull
        public String toString() {
            String str = this.source;
            AppManifestMetadata appManifestMetadata = this.metadata;
            return "ManifestInfo(source=" + str + ", metadata=" + appManifestMetadata + ")";
        }
    }

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\b\u0002\u0018\u00002\u00060\u0001j\u0002`\u0002B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006¢\u0006\u0004\b\u0007\u0010\b¨\u0006\t"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$MaxDownloadAttemptsException;", "Ljava/lang/Exception;", "Lkotlin/Exception;", "url", "", "attempts", "", "<init>", "(Ljava/lang/String;I)V", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class MaxDownloadAttemptsException extends Exception {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public MaxDownloadAttemptsException(@NotNull String url, int i10) {
            super("Failed " + i10 + " times to download " + url + ", aborting...");
            Intrinsics.checkNotNullParameter(url, "url");
        }
    }

    @Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\b\n\u0002\b\u0011\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0082\b\u0018\u00002\u00020\u0001BG\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\r\u0010\u000eJ\b\u0010\u001c\u001a\u00020\u001dH\u0016J\t\u0010\u001e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001f\u001a\u00020\u0005HÆ\u0003J\u0010\u0010 \u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\b!J\u0010\u0010\"\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010\u0016J\u0010\u0010#\u001a\u0004\u0018\u00010\u000bHÆ\u0003¢\u0006\u0002\u0010\u0019J\u000b\u0010$\u001a\u0004\u0018\u00010\u0005HÆ\u0003JT\u0010%\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0005HÆ\u0001¢\u0006\u0004\b&\u0010'J\u0013\u0010(\u001a\u00020)2\b\u0010*\u001a\u0004\u0018\u00010+HÖ\u0003J\t\u0010,\u001a\u00020\u000bHÖ\u0001J\t\u0010-\u001a\u00020\u0005HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0015\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010\u0017\u001a\u0004\b\u0015\u0010\u0016R\u0015\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\n\n\u0002\u0010\u001a\u001a\u0004\b\u0018\u0010\u0019R\u0013\u0010\f\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0012¨\u0006."}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$OtaAssetDownloadAttempt;", "Lcom/discord/bundle_updater/BundleUpdater$OtaMetric;", "result", "Lcom/discord/bundle_updater/BundleUpdater$OtaAssetDownloadAttemptResult;", "url", "", "duration", "Lkotlin/time/Duration;", "bytesReceived", "", "statusCode", "", "error", "<init>", "(Lcom/discord/bundle_updater/BundleUpdater$OtaAssetDownloadAttemptResult;Ljava/lang/String;Lkotlin/time/Duration;Ljava/lang/Long;Ljava/lang/Integer;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getResult", "()Lcom/discord/bundle_updater/BundleUpdater$OtaAssetDownloadAttemptResult;", "getUrl", "()Ljava/lang/String;", "getDuration-FghU774", "()Lkotlin/time/Duration;", "getBytesReceived", "()Ljava/lang/Long;", "Ljava/lang/Long;", "getStatusCode", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getError", "toNativeMap", "Lcom/facebook/react/bridge/ReadableMap;", "component1", "component2", "component3", "component3-FghU774", "component4", "component5", "component6", "copy", "copy-fUqyM7Y", "(Lcom/discord/bundle_updater/BundleUpdater$OtaAssetDownloadAttemptResult;Ljava/lang/String;Lkotlin/time/Duration;Ljava/lang/Long;Ljava/lang/Integer;Ljava/lang/String;)Lcom/discord/bundle_updater/BundleUpdater$OtaAssetDownloadAttempt;", "equals", "", "other", "", "hashCode", "toString", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class OtaAssetDownloadAttempt implements OtaMetric {
        private final Long bytesReceived;
        private final Duration duration;
        private final String error;
        @NotNull
        private final OtaAssetDownloadAttemptResult result;
        private final Integer statusCode;
        @NotNull
        private final String url;

        public /* synthetic */ OtaAssetDownloadAttempt(OtaAssetDownloadAttemptResult otaAssetDownloadAttemptResult, String str, Duration duration, Long l10, Integer num, String str2, DefaultConstructorMarker defaultConstructorMarker) {
            this(otaAssetDownloadAttemptResult, str, duration, l10, num, str2);
        }

        /* renamed from: copy-fUqyM7Y$default */
        public static /* synthetic */ OtaAssetDownloadAttempt m213copyfUqyM7Y$default(OtaAssetDownloadAttempt otaAssetDownloadAttempt, OtaAssetDownloadAttemptResult otaAssetDownloadAttemptResult, String str, Duration duration, Long l10, Integer num, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                otaAssetDownloadAttemptResult = otaAssetDownloadAttempt.result;
            }
            if ((i10 & 2) != 0) {
                str = otaAssetDownloadAttempt.url;
            }
            if ((i10 & 4) != 0) {
                duration = otaAssetDownloadAttempt.duration;
            }
            if ((i10 & 8) != 0) {
                l10 = otaAssetDownloadAttempt.bytesReceived;
            }
            if ((i10 & 16) != 0) {
                num = otaAssetDownloadAttempt.statusCode;
            }
            if ((i10 & 32) != 0) {
                str2 = otaAssetDownloadAttempt.error;
            }
            Integer num2 = num;
            String str3 = str2;
            return otaAssetDownloadAttempt.m215copyfUqyM7Y(otaAssetDownloadAttemptResult, str, duration, l10, num2, str3);
        }

        @NotNull
        public final OtaAssetDownloadAttemptResult component1() {
            return this.result;
        }

        @NotNull
        public final String component2() {
            return this.url;
        }

        /* renamed from: component3-FghU774 */
        public final Duration m214component3FghU774() {
            return this.duration;
        }

        public final Long component4() {
            return this.bytesReceived;
        }

        public final Integer component5() {
            return this.statusCode;
        }

        public final String component6() {
            return this.error;
        }

        @NotNull
        /* renamed from: copy-fUqyM7Y */
        public final OtaAssetDownloadAttempt m215copyfUqyM7Y(@NotNull OtaAssetDownloadAttemptResult result, @NotNull String url, Duration duration, Long l10, Integer num, String str) {
            Intrinsics.checkNotNullParameter(result, "result");
            Intrinsics.checkNotNullParameter(url, "url");
            return new OtaAssetDownloadAttempt(result, url, duration, l10, num, str, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof OtaAssetDownloadAttempt) {
                OtaAssetDownloadAttempt otaAssetDownloadAttempt = (OtaAssetDownloadAttempt) obj;
                return this.result == otaAssetDownloadAttempt.result && Intrinsics.areEqual(this.url, otaAssetDownloadAttempt.url) && Intrinsics.areEqual(this.duration, otaAssetDownloadAttempt.duration) && Intrinsics.areEqual(this.bytesReceived, otaAssetDownloadAttempt.bytesReceived) && Intrinsics.areEqual(this.statusCode, otaAssetDownloadAttempt.statusCode) && Intrinsics.areEqual(this.error, otaAssetDownloadAttempt.error);
            }
            return false;
        }

        public final Long getBytesReceived() {
            return this.bytesReceived;
        }

        /* renamed from: getDuration-FghU774 */
        public final Duration m216getDurationFghU774() {
            return this.duration;
        }

        public final String getError() {
            return this.error;
        }

        @NotNull
        public final OtaAssetDownloadAttemptResult getResult() {
            return this.result;
        }

        public final Integer getStatusCode() {
            return this.statusCode;
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }

        public int hashCode() {
            int hashCode = ((this.result.hashCode() * 31) + this.url.hashCode()) * 31;
            Duration duration = this.duration;
            int B = (hashCode + (duration == null ? 0 : Duration.B(duration.O()))) * 31;
            Long l10 = this.bytesReceived;
            int hashCode2 = (B + (l10 == null ? 0 : l10.hashCode())) * 31;
            Integer num = this.statusCode;
            int hashCode3 = (hashCode2 + (num == null ? 0 : num.hashCode())) * 31;
            String str = this.error;
            return hashCode3 + (str != null ? str.hashCode() : 0);
        }

        @Override // com.discord.bundle_updater.BundleUpdater.OtaMetric
        @NotNull
        public ReadableMap toNativeMap() {
            Double d10;
            Pair a10 = v.a("type", "OtaAssetDownloadAttempt");
            Pair a11 = v.a("result", this.result.getValue());
            Pair a12 = v.a("url", this.url);
            Pair a13 = v.a("bytesReceived", this.bytesReceived);
            Duration duration = this.duration;
            if (duration != null) {
                d10 = Double.valueOf(Duration.J(duration.O(), es.b.f24009p));
            } else {
                d10 = null;
            }
            return NativeMapExtensionsKt.nativeMapOf(a10, a11, a12, a13, v.a("durationSeconds", d10), v.a("statusCode", this.statusCode), v.a("error", this.error));
        }

        @NotNull
        public String toString() {
            OtaAssetDownloadAttemptResult otaAssetDownloadAttemptResult = this.result;
            String str = this.url;
            Duration duration = this.duration;
            Long l10 = this.bytesReceived;
            Integer num = this.statusCode;
            String str2 = this.error;
            return "OtaAssetDownloadAttempt(result=" + otaAssetDownloadAttemptResult + ", url=" + str + ", duration=" + duration + ", bytesReceived=" + l10 + ", statusCode=" + num + ", error=" + str2 + ")";
        }

        private OtaAssetDownloadAttempt(OtaAssetDownloadAttemptResult result, String url, Duration duration, Long l10, Integer num, String str) {
            Intrinsics.checkNotNullParameter(result, "result");
            Intrinsics.checkNotNullParameter(url, "url");
            this.result = result;
            this.url = url;
            this.duration = duration;
            this.bytesReceived = l10;
            this.statusCode = num;
            this.error = str;
        }

        public /* synthetic */ OtaAssetDownloadAttempt(OtaAssetDownloadAttemptResult otaAssetDownloadAttemptResult, String str, Duration duration, Long l10, Integer num, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(otaAssetDownloadAttemptResult, str, (i10 & 4) != 0 ? null : duration, (i10 & 8) != 0 ? null : l10, (i10 & 16) != 0 ? null : num, (i10 & 32) != 0 ? null : str2, null);
        }
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\b\u0082\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007j\u0002\b\bj\u0002\b\t¨\u0006\n"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$OtaAssetDownloadAttemptResult;", "", "value", "", "<init>", "(Ljava/lang/String;ILjava/lang/String;)V", "getValue", "()Ljava/lang/String;", "SUCCESS", "FAILURE", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class OtaAssetDownloadAttemptResult {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ OtaAssetDownloadAttemptResult[] $VALUES;
        @NotNull
        private final String value;
        public static final OtaAssetDownloadAttemptResult SUCCESS = new OtaAssetDownloadAttemptResult("SUCCESS", 0, "success");
        public static final OtaAssetDownloadAttemptResult FAILURE = new OtaAssetDownloadAttemptResult("FAILURE", 1, "failure");

        private static final /* synthetic */ OtaAssetDownloadAttemptResult[] $values() {
            return new OtaAssetDownloadAttemptResult[]{SUCCESS, FAILURE};
        }

        static {
            OtaAssetDownloadAttemptResult[] $values = $values();
            $VALUES = $values;
            $ENTRIES = pr.a.a($values);
        }

        private OtaAssetDownloadAttemptResult(String str, int i10, String str2) {
            super(str, i10);
            this.value = str2;
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static OtaAssetDownloadAttemptResult valueOf(String str) {
            return (OtaAssetDownloadAttemptResult) Enum.valueOf(OtaAssetDownloadAttemptResult.class, str);
        }

        public static OtaAssetDownloadAttemptResult[] values() {
            return (OtaAssetDownloadAttemptResult[]) $VALUES.clone();
        }

        @NotNull
        public final String getValue() {
            return this.value;
        }
    }

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u001f\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0005HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b¨\u0006\u0015"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$OtaBundle;", "", "location", "Ljava/io/File;", "releaseName", "", "<init>", "(Ljava/io/File;Ljava/lang/String;)V", "getLocation", "()Ljava/io/File;", "getReleaseName", "()Ljava/lang/String;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class OtaBundle {
        @NotNull
        private final File location;
        private final String releaseName;

        public OtaBundle(@NotNull File location, String str) {
            Intrinsics.checkNotNullParameter(location, "location");
            this.location = location;
            this.releaseName = str;
        }

        public static /* synthetic */ OtaBundle copy$default(OtaBundle otaBundle, File file, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                file = otaBundle.location;
            }
            if ((i10 & 2) != 0) {
                str = otaBundle.releaseName;
            }
            return otaBundle.copy(file, str);
        }

        @NotNull
        public final File component1() {
            return this.location;
        }

        public final String component2() {
            return this.releaseName;
        }

        @NotNull
        public final OtaBundle copy(@NotNull File location, String str) {
            Intrinsics.checkNotNullParameter(location, "location");
            return new OtaBundle(location, str);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof OtaBundle) {
                OtaBundle otaBundle = (OtaBundle) obj;
                return Intrinsics.areEqual(this.location, otaBundle.location) && Intrinsics.areEqual(this.releaseName, otaBundle.releaseName);
            }
            return false;
        }

        @NotNull
        public final File getLocation() {
            return this.location;
        }

        public final String getReleaseName() {
            return this.releaseName;
        }

        public int hashCode() {
            int hashCode = this.location.hashCode() * 31;
            String str = this.releaseName;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        @NotNull
        public String toString() {
            File file = this.location;
            String str = this.releaseName;
            return "OtaBundle(location=" + file + ", releaseName=" + str + ")";
        }
    }

    @Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0082\b\u0018\u00002\u00020\u0001B+\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\n\u0010\u000bJ\b\u0010\u0014\u001a\u00020\u0015H\u0016J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0017\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0018\u0010\u000fJ\t\u0010\u0019\u001a\u00020\u0007HÆ\u0003J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\tHÆ\u0003J:\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0004\b\u001c\u0010\u001dJ\u0013\u0010\u001e\u001a\u00020\u001f2\b\u0010 \u001a\u0004\u0018\u00010!HÖ\u0003J\t\u0010\"\u001a\u00020#HÖ\u0001J\t\u0010$\u001a\u00020\tHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0010\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013¨\u0006%"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttempt;", "Lcom/discord/bundle_updater/BundleUpdater$OtaMetric;", "result", "Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttemptResult;", "duration", "Lkotlin/time/Duration;", "totalBytesReceived", "", "error", "", "<init>", "(Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttemptResult;JJLjava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getResult", "()Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttemptResult;", "getDuration-UwyO8pc", "()J", "J", "getTotalBytesReceived", "getError", "()Ljava/lang/String;", "toNativeMap", "Lcom/facebook/react/bridge/ReadableMap;", "component1", "component2", "component2-UwyO8pc", "component3", "component4", "copy", "copy-dWUq8MI", "(Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttemptResult;JJLjava/lang/String;)Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttempt;", "equals", "", "other", "", "hashCode", "", "toString", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class OtaCheckAttempt implements OtaMetric {
        private final long duration;
        private final String error;
        @NotNull
        private final OtaCheckAttemptResult result;
        private final long totalBytesReceived;

        public /* synthetic */ OtaCheckAttempt(OtaCheckAttemptResult otaCheckAttemptResult, long j10, long j11, String str, DefaultConstructorMarker defaultConstructorMarker) {
            this(otaCheckAttemptResult, j10, j11, str);
        }

        /* renamed from: copy-dWUq8MI$default */
        public static /* synthetic */ OtaCheckAttempt m217copydWUq8MI$default(OtaCheckAttempt otaCheckAttempt, OtaCheckAttemptResult otaCheckAttemptResult, long j10, long j11, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                otaCheckAttemptResult = otaCheckAttempt.result;
            }
            if ((i10 & 2) != 0) {
                j10 = otaCheckAttempt.duration;
            }
            if ((i10 & 4) != 0) {
                j11 = otaCheckAttempt.totalBytesReceived;
            }
            if ((i10 & 8) != 0) {
                str = otaCheckAttempt.error;
            }
            String str2 = str;
            return otaCheckAttempt.m219copydWUq8MI(otaCheckAttemptResult, j10, j11, str2);
        }

        @NotNull
        public final OtaCheckAttemptResult component1() {
            return this.result;
        }

        /* renamed from: component2-UwyO8pc */
        public final long m218component2UwyO8pc() {
            return this.duration;
        }

        public final long component3() {
            return this.totalBytesReceived;
        }

        public final String component4() {
            return this.error;
        }

        @NotNull
        /* renamed from: copy-dWUq8MI */
        public final OtaCheckAttempt m219copydWUq8MI(@NotNull OtaCheckAttemptResult result, long j10, long j11, String str) {
            Intrinsics.checkNotNullParameter(result, "result");
            return new OtaCheckAttempt(result, j10, j11, str, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof OtaCheckAttempt) {
                OtaCheckAttempt otaCheckAttempt = (OtaCheckAttempt) obj;
                return this.result == otaCheckAttempt.result && Duration.o(this.duration, otaCheckAttempt.duration) && this.totalBytesReceived == otaCheckAttempt.totalBytesReceived && Intrinsics.areEqual(this.error, otaCheckAttempt.error);
            }
            return false;
        }

        /* renamed from: getDuration-UwyO8pc */
        public final long m220getDurationUwyO8pc() {
            return this.duration;
        }

        public final String getError() {
            return this.error;
        }

        @NotNull
        public final OtaCheckAttemptResult getResult() {
            return this.result;
        }

        public final long getTotalBytesReceived() {
            return this.totalBytesReceived;
        }

        public int hashCode() {
            int hashCode = ((((this.result.hashCode() * 31) + Duration.B(this.duration)) * 31) + Long.hashCode(this.totalBytesReceived)) * 31;
            String str = this.error;
            return hashCode + (str == null ? 0 : str.hashCode());
        }

        @Override // com.discord.bundle_updater.BundleUpdater.OtaMetric
        @NotNull
        public ReadableMap toNativeMap() {
            return NativeMapExtensionsKt.nativeMapOf(v.a("type", "OtaCheckAttempt"), v.a("result", this.result.getValue()), v.a("durationSeconds", Double.valueOf(Duration.J(this.duration, es.b.f24009p))), v.a("bytesReceived", Long.valueOf(this.totalBytesReceived)), v.a("error", this.error));
        }

        @NotNull
        public String toString() {
            OtaCheckAttemptResult otaCheckAttemptResult = this.result;
            String M = Duration.M(this.duration);
            long j10 = this.totalBytesReceived;
            String str = this.error;
            return "OtaCheckAttempt(result=" + otaCheckAttemptResult + ", duration=" + M + ", totalBytesReceived=" + j10 + ", error=" + str + ")";
        }

        private OtaCheckAttempt(OtaCheckAttemptResult result, long j10, long j11, String str) {
            Intrinsics.checkNotNullParameter(result, "result");
            this.result = result;
            this.duration = j10;
            this.totalBytesReceived = j11;
            this.error = str;
        }

        public /* synthetic */ OtaCheckAttempt(OtaCheckAttemptResult otaCheckAttemptResult, long j10, long j11, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(otaCheckAttemptResult, j10, j11, (i10 & 8) != 0 ? null : str, null);
        }
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\b\u0082\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\f¨\u0006\r"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$OtaCheckAttemptResult;", "", "value", "", "<init>", "(Ljava/lang/String;ILjava/lang/String;)V", "getValue", "()Ljava/lang/String;", "NOOP", "CLEARED", "SUCCESS", "SUCCESS_WITH_VERSION_REQUIRED", "FAILURE", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class OtaCheckAttemptResult {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ OtaCheckAttemptResult[] $VALUES;
        @NotNull
        private final String value;
        public static final OtaCheckAttemptResult NOOP = new OtaCheckAttemptResult("NOOP", 0, "noop");
        public static final OtaCheckAttemptResult CLEARED = new OtaCheckAttemptResult("CLEARED", 1, "clear");
        public static final OtaCheckAttemptResult SUCCESS = new OtaCheckAttemptResult("SUCCESS", 2, "success");
        public static final OtaCheckAttemptResult SUCCESS_WITH_VERSION_REQUIRED = new OtaCheckAttemptResult("SUCCESS_WITH_VERSION_REQUIRED", 3, "success");
        public static final OtaCheckAttemptResult FAILURE = new OtaCheckAttemptResult("FAILURE", 4, "failure");

        private static final /* synthetic */ OtaCheckAttemptResult[] $values() {
            return new OtaCheckAttemptResult[]{NOOP, CLEARED, SUCCESS, SUCCESS_WITH_VERSION_REQUIRED, FAILURE};
        }

        static {
            OtaCheckAttemptResult[] $values = $values();
            $VALUES = $values;
            $ENTRIES = pr.a.a($values);
        }

        private OtaCheckAttemptResult(String str, int i10, String str2) {
            super(str, i10);
            this.value = str2;
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static OtaCheckAttemptResult valueOf(String str) {
            return (OtaCheckAttemptResult) Enum.valueOf(OtaCheckAttemptResult.class, str);
        }

        public static OtaCheckAttemptResult[] values() {
            return (OtaCheckAttemptResult[]) $VALUES.clone();
        }

        @NotNull
        public final String getValue() {
            return this.value;
        }
    }

    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\bf\u0018\u00002\u00020\u0001J\b\u0010\u0002\u001a\u00020\u0003H&¨\u0006\u0004"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$OtaMetric;", "", "toNativeMap", "Lcom/facebook/react/bridge/ReadableMap;", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface OtaMetric {
        @NotNull
        ReadableMap toNativeMap();
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\f¨\u0006\u000e"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdater$Patch;", "", "url", "", "baseFilePath", "Ljava/io/File;", "patchPath", "<init>", "(Ljava/lang/String;Ljava/io/File;Ljava/io/File;)V", "getUrl", "()Ljava/lang/String;", "getBaseFilePath", "()Ljava/io/File;", "getPatchPath", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Patch {
        @NotNull
        private final File baseFilePath;
        @NotNull
        private final File patchPath;
        @NotNull
        private final String url;

        public Patch(@NotNull String url, @NotNull File baseFilePath, @NotNull File patchPath) {
            Intrinsics.checkNotNullParameter(url, "url");
            Intrinsics.checkNotNullParameter(baseFilePath, "baseFilePath");
            Intrinsics.checkNotNullParameter(patchPath, "patchPath");
            this.url = url;
            this.baseFilePath = baseFilePath;
            this.patchPath = patchPath;
        }

        @NotNull
        public final File getBaseFilePath() {
            return this.baseFilePath;
        }

        @NotNull
        public final File getPatchPath() {
            return this.patchPath;
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[OtaCheckAttemptResult.values().length];
            try {
                iArr[OtaCheckAttemptResult.SUCCESS.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[OtaCheckAttemptResult.SUCCESS_WITH_VERSION_REQUIRED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[AssetStatus.values().length];
            try {
                iArr2[AssetStatus.CopyFromPrevious.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr2[AssetStatus.Download.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    private BundleUpdater(SharedPreferences sharedPreferences, File file, AssetManager assetManager, ExecutorService executorService) {
        this.sharedPreferences = sharedPreferences;
        this.filesDirectory = file;
        this.assetManager = assetManager;
        this.executor = executorService;
        this.cookieManager$delegate = ir.l.b(new Function0() { // from class: com.discord.bundle_updater.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CookieManager cookieManager_delegate$lambda$0;
                cookieManager_delegate$lambda$0 = BundleUpdater.cookieManager_delegate$lambda$0();
                return cookieManager_delegate$lambda$0;
            }
        });
        this.coroutineScope = kotlinx.coroutines.i.a(m0.c().U0(j1.b(null, 1, null)));
        this.client$delegate = ir.l.b(new Function0() { // from class: com.discord.bundle_updater.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                OkHttpClient client_delegate$lambda$1;
                client_delegate$lambda$1 = BundleUpdater.client_delegate$lambda$1(BundleUpdater.this);
                return client_delegate$lambda$1;
            }
        });
        this.otasRootDirectory$delegate = ir.l.b(new Function0() { // from class: com.discord.bundle_updater.h
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                File otasRootDirectory_delegate$lambda$2;
                otasRootDirectory_delegate$lambda$2 = BundleUpdater.otasRootDirectory_delegate$lambda$2(BundleUpdater.this);
                return otasRootDirectory_delegate$lambda$2;
            }
        });
        this.otaMetrics = new ArrayList();
        this.otaCheckTimeMark = g.a.d(kotlin.time.g.f36288a.a());
    }

    private final OtaCheckAttempt attemptOtaUpdate() {
        List list;
        CrashReporting crashReporting = CrashReporting.INSTANCE;
        String TAG2 = TAG;
        CrashReporting.addBreadcrumb$default(crashReporting, TAG2 + " - Downloading Manifest...", null, null, null, false, 30, null);
        validateBuildOverrideCookie();
        if (Intrinsics.areEqual(getExistingOtaCommit(), getInProgressOtaCommit())) {
            setInProgressOtaCommit(null);
        }
        CrashReporting.addBreadcrumb$default(crashReporting, TAG2 + " - Existing OTA commit is " + getExistingOtaCommit() + ", in progress OTA commit is " + getInProgressOtaCommit(), null, null, null, false, 30, null);
        deleteUnknownOtas(getExistingOtaCommit(), getInProgressOtaCommit());
        setOtaVersion(getVersion());
        File otaTempFile = otaTempFile("manifest.json");
        String manifestURL = getManifestURL();
        String manifestETag = getManifestETag();
        if (StringsKt.k0(manifestETag)) {
            manifestETag = null;
        }
        if (manifestETag != null) {
            list = CollectionsKt.e(v.a("If-None-Match", manifestETag));
        } else {
            list = null;
        }
        Object m212downloadSingleFilehUnOzRk$default = m212downloadSingleFilehUnOzRk$default(this, manifestURL, list, null, null, otaTempFile, 0, 44, null);
        Throwable e10 = Result.e(m212downloadSingleFilehUnOzRk$default);
        String str = "";
        if (e10 == null) {
            Headers headers = (Headers) m212downloadSingleFilehUnOzRk$default;
            AppManifest manifestFromFile = BundleUpdaterUtils.INSTANCE.getManifestFromFile(otaTempFile);
            String commit = manifestFromFile.getMetadata().getCommit();
            if (Intrinsics.areEqual(commit, getExistingOtaCommit())) {
                return createOtaCheckAttempt$default(this, OtaCheckAttemptResult.NOOP, null, 2, null);
            }
            moveFile(otaTempFile, otaFile(commit, "manifest.json"));
            setInProgressOtaCommit(commit);
            String c10 = headers.c("Etag");
            if (c10 != null) {
                str = c10;
            }
            setManifestETag(str);
            Log log = Log.INSTANCE;
            Intrinsics.checkNotNullExpressionValue(TAG2, "TAG");
            Log.i$default(log, TAG2, "Setting manifest ETag to " + getManifestETag(), (Throwable) null, 4, (Object) null);
            return downloadOtaFiles(getExistingOtaCommit(), manifestFromFile, commit);
        }
        Intrinsics.checkNotNull(e10, "null cannot be cast to non-null type com.discord.bundle_updater.BundleUpdater.HttpException");
        HttpException httpException = (HttpException) e10;
        int statusCode = httpException.getStatusCode();
        if (statusCode != 304) {
            if (statusCode == 404) {
                CrashReporting.addBreadcrumb$default(crashReporting, TAG2 + " - Got 404, clearing bundle location...", null, null, null, false, 30, null);
                setBundle(null);
                setManifestETag("");
                return createOtaCheckAttempt$default(this, OtaCheckAttemptResult.CLEARED, null, 2, null);
            }
            throw httpException;
        }
        String inProgressOtaCommit = getInProgressOtaCommit();
        if (inProgressOtaCommit == null) {
            CrashReporting.addBreadcrumb$default(crashReporting, TAG2 + " - Manifest not changed, already up to date at commit " + getExistingOtaCommit(), null, null, null, false, 30, null);
            return createOtaCheckAttempt$default(this, OtaCheckAttemptResult.NOOP, null, 2, null);
        }
        CrashReporting.addBreadcrumb$default(crashReporting, TAG2 + " - Manifest not changed, resuming download of commit " + inProgressOtaCommit + ".", null, null, null, false, 30, null);
        return downloadOtaFiles(getExistingOtaCommit(), BundleUpdaterUtils.INSTANCE.getManifestFromFile(otaFile(inProgressOtaCommit, "manifest.json")), inProgressOtaCommit);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ Future checkForUpdate$default(BundleUpdater bundleUpdater, int i10, Function0 function0, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = 0;
        }
        if ((i11 & 2) != 0) {
            function0 = null;
        }
        return bundleUpdater.checkForUpdate(i10, function0);
    }

    public static final void checkForUpdate$lambda$11(int i10, BundleUpdater bundleUpdater, Function0 function0) {
        Function1<? super Boolean, Unit> function1;
        Thread.sleep(i10 * 1000);
        try {
            bundleUpdater.otaMetrics.clear();
            bundleUpdater.otaCheckTimeMark = g.a.d(kotlin.time.g.f36288a.a());
            bundleUpdater.totalBytesReceived = 0L;
            OtaCheckAttempt attemptOtaUpdate = bundleUpdater.attemptOtaUpdate();
            if (function0 != null) {
                function0.invoke();
            } else {
                int i11 = WhenMappings.$EnumSwitchMapping$0[attemptOtaUpdate.getResult().ordinal()];
                if (i11 != 1) {
                    if (i11 == 2 && (function1 = bundleUpdater.onBundleDownloadedListener) != null) {
                        function1.invoke(Boolean.TRUE);
                    }
                } else {
                    Function1<? super Boolean, Unit> function12 = bundleUpdater.onBundleDownloadedListener;
                    if (function12 != null) {
                        function12.invoke(Boolean.FALSE);
                    }
                }
            }
            bundleUpdater.trackCheckAttempt(attemptOtaUpdate);
            bundleUpdater.otaUpdateChecking = false;
        } catch (Exception e10) {
            CrashReporting.INSTANCE.captureException(e10, true);
            Log.INSTANCE.e("BundleUpdater", "Exception checking for OTA", e10);
            bundleUpdater.trackCheckAttempt(bundleUpdater.createOtaCheckAttempt(OtaCheckAttemptResult.FAILURE, e10.toString()));
            bundleUpdater.otaUpdateChecking = false;
        }
    }

    private final void clearBundle(Context context) {
        setBundle(null);
        setManifestETag("");
        createOtaCheckAttempt$default(this, OtaCheckAttemptResult.CLEARED, null, 2, null);
        gs.i.d(this.coroutineScope, null, null, new BundleUpdater$clearBundle$1(context, null), 3, null);
    }

    public static final OkHttpClient client_delegate$lambda$1(BundleUpdater bundleUpdater) {
        OkHttpClient.Builder Q = new OkHttpClient.Builder().g(new CookieJar() { // from class: com.discord.bundle_updater.BundleUpdater$client$2$1
            @Override // okhttp3.CookieJar
            public List<Cookie> loadForRequest(HttpUrl url) {
                CookieManager cookieManager;
                Intrinsics.checkNotNullParameter(url, "url");
                cookieManager = BundleUpdater.this.getCookieManager();
                Intrinsics.checkNotNullExpressionValue(cookieManager, "access$getCookieManager(...)");
                ArrayList arrayList = new ArrayList();
                for (Object obj : CookieValidatorKt.getCookiesForUrl(cookieManager, url.toString())) {
                    if (!Intrinsics.areEqual(((Cookie) obj).g(), "buildOverride")) {
                        arrayList.add(obj);
                    }
                }
                List<Cookie> j12 = CollectionsKt.j1(arrayList);
                Cookie buildOverrideCookie = BundleUpdater.this.getBuildOverrideCookie();
                if (buildOverrideCookie != null) {
                    j12.add(buildOverrideCookie);
                }
                return j12;
            }

            @Override // okhttp3.CookieJar
            public void saveFromResponse(HttpUrl url, List<Cookie> cookies) {
                CookieManager cookieManager;
                Intrinsics.checkNotNullParameter(url, "url");
                Intrinsics.checkNotNullParameter(cookies, "cookies");
                cookieManager = BundleUpdater.this.getCookieManager();
                cookieManager.setCookie(url.toString(), CollectionsKt.x0(cookies, "; ", null, null, 0, null, null, 62, null));
            }
        }).Q(1L, TimeUnit.MINUTES);
        final DeviceResourceUsageRecorder.Companion companion = DeviceResourceUsageRecorder.Companion;
        return Q.a(new Interceptor() { // from class: com.discord.bundle_updater.BundleUpdater$client_delegate$lambda$1$$inlined$-addInterceptor$1
            @Override // okhttp3.Interceptor
            @NotNull
            public final Response intercept(@NotNull Interceptor.Chain chain) {
                Intrinsics.checkNotNullParameter(chain, "chain");
                return DeviceResourceUsageRecorder.Companion.this.bundleUpdaterInterceptor(chain);
            }
        }).c();
    }

    public static final CookieManager cookieManager_delegate$lambda$0() {
        return CookieManager.getInstance();
    }

    private final OtaCheckAttempt createOtaCheckAttempt(OtaCheckAttemptResult otaCheckAttemptResult, String str) {
        TimeMark timeMark = this.otaCheckTimeMark;
        Intrinsics.checkNotNull(timeMark);
        return new OtaCheckAttempt(otaCheckAttemptResult, timeMark.a(), this.totalBytesReceived, str, null);
    }

    static /* synthetic */ OtaCheckAttempt createOtaCheckAttempt$default(BundleUpdater bundleUpdater, OtaCheckAttemptResult otaCheckAttemptResult, String str, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str = null;
        }
        return bundleUpdater.createOtaCheckAttempt(otaCheckAttemptResult, str);
    }

    private final void deleteUnknownOtas(String... strArr) {
        File[] listFiles = getOtasRootDirectory().listFiles();
        if (listFiles != null) {
            for (File file : listFiles) {
                if (!kotlin.collections.i.N(strArr, file.getName())) {
                    CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, TAG + " - Deleting outdated/unknown OTA at " + file.getName() + "...", null, null, null, false, 30, null);
                    Intrinsics.checkNotNull(file);
                    tr.j.r(file);
                }
            }
        }
    }

    private final OtaCheckAttempt downloadOtaFiles(final String str, AppManifest appManifest, String str2) {
        AppManifest appManifest2;
        OtaBundle otaBundle;
        OtaCheckAttemptResult otaCheckAttemptResult;
        ArrayList arrayList;
        AssetStatus assetStatus;
        Uri uri;
        final Patch patch;
        File file;
        ArrayList arrayList2;
        Future<?> submit;
        Patch patch2;
        String str3 = str2;
        AppManifest manifestFromAsset = BundleUpdaterUtilsKt.getManifestFromAsset(this.assetManager, "manifest.json");
        Object obj = null;
        if (str != null) {
            appManifest2 = BundleUpdaterUtils.INSTANCE.getManifestFromFile(otaFile(str, "manifest.json"));
        } else {
            appManifest2 = null;
        }
        final AppManifest appManifest3 = appManifest;
        List<Pair<String, AssetStatus>> compareJSONData = BundleUpdaterUtils.INSTANCE.compareJSONData(manifestFromAsset, appManifest2, appManifest3);
        CrashReporting crashReporting = CrashReporting.INSTANCE;
        CrashReporting.addBreadcrumb$default(crashReporting, TAG + " - Found " + compareJSONData.size() + " files to copy or download...", null, null, null, false, 30, null);
        int i10 = 2;
        if (compareJSONData.isEmpty()) {
            CrashReporting.addBreadcrumb$default(crashReporting, "No files downloaded, returning...", null, null, null, false, 30, null);
            return createOtaCheckAttempt$default(this, OtaCheckAttemptResult.NOOP, null, 2, null);
        }
        boolean confirmUpdate = appManifest3.getMetadata().getConfirmUpdate();
        Uri build = BASE_OTA_URI.buildUpon().appendPath("assets").appendPath("android").appendPath(str3).build();
        ArrayList<Future> arrayList3 = new ArrayList();
        Iterator<T> it = compareJSONData.iterator();
        File file2 = null;
        while (it.hasNext()) {
            Pair pair = (Pair) it.next();
            final String str4 = (String) pair.a();
            AssetStatus assetStatus2 = (AssetStatus) pair.b();
            final String J = StringsKt.J(str4, "/res/", "/assets/", false, 4, null);
            Uri build2 = build.buildUpon().appendEncodedPath(str4).build();
            boolean V = StringsKt.V(str4, ANDROID_JS_BUNDLE_ASSET_NAME, false, i10, obj);
            String str5 = appManifest3.getPatches().get(str4);
            if (str5 != null) {
                if (V) {
                    File otaTempFile = otaTempFile(J + ".base");
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append(J);
                    arrayList = arrayList3;
                    sb2.append(".patch");
                    File otaTempFile2 = otaTempFile(sb2.toString());
                    InputStream open = this.assetManager.open(ANDROID_JS_BUNDLE_ASSET_NAME);
                    try {
                        FileOutputStream fileOutputStream = new FileOutputStream(ensureEmptyFile(otaTempFile));
                        Intrinsics.checkNotNull(open);
                        assetStatus = assetStatus2;
                        uri = build2;
                        tr.b.b(open, fileOutputStream, 0, 2, null);
                        tr.c.a(fileOutputStream, null);
                        tr.c.a(open, null);
                        String uri2 = build.buildUpon().appendEncodedPath(str5).build().toString();
                        Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
                        patch2 = new Patch(uri2, otaTempFile, otaTempFile2);
                    } finally {
                    }
                } else {
                    arrayList = arrayList3;
                    assetStatus = assetStatus2;
                    uri = build2;
                    patch2 = null;
                }
                patch = patch2;
            } else {
                arrayList = arrayList3;
                assetStatus = assetStatus2;
                uri = build2;
                patch = null;
            }
            final File otaTempFile3 = otaTempFile(J);
            final File otaFile = otaFile(str3, J);
            if (V) {
                file = otaFile;
            } else {
                file = file2;
            }
            if (otaFile.exists()) {
                arrayList2 = arrayList;
                submit = null;
            } else {
                arrayList2 = arrayList;
                final Uri uri3 = uri;
                final AssetStatus assetStatus3 = assetStatus;
                submit = this.executor.submit(new Runnable() { // from class: com.discord.bundle_updater.i
                    @Override // java.lang.Runnable
                    public final void run() {
                        BundleUpdater.downloadOtaFiles$lambda$21$lambda$20(AssetStatus.this, this, str, J, otaTempFile3, uri3, appManifest3, str4, patch, otaFile);
                    }
                });
            }
            if (submit != null) {
                arrayList2.add(submit);
            }
            appManifest3 = appManifest;
            arrayList3 = arrayList2;
            file2 = file;
            obj = null;
            i10 = 2;
            str3 = str2;
        }
        try {
            for (Future future : arrayList3) {
                future.get();
            }
            if (file2 != null) {
                otaBundle = new OtaBundle(file2, appManifest.getMetadata().getReleaseName());
            } else {
                otaBundle = null;
            }
            setBundle(otaBundle);
            setInProgressOtaCommit(null);
            CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, TAG + " - Done downloading OTA...", null, null, null, false, 30, null);
            if (confirmUpdate) {
                otaCheckAttemptResult = OtaCheckAttemptResult.SUCCESS_WITH_VERSION_REQUIRED;
            } else {
                otaCheckAttemptResult = OtaCheckAttemptResult.SUCCESS;
            }
            return createOtaCheckAttempt$default(this, otaCheckAttemptResult, null, 2, null);
        } catch (ExecutionException e10) {
            Throwable cause = e10.getCause();
            if (cause != null && isNetworkException(cause)) {
                Log log = Log.INSTANCE;
                String TAG2 = TAG;
                Intrinsics.checkNotNullExpressionValue(TAG2, "TAG");
                log.e(TAG2, "Network error while downloading OTA files: " + cause.getMessage(), cause);
                return createOtaCheckAttempt(OtaCheckAttemptResult.FAILURE, cause.toString());
            }
            throw e10;
        }
    }

    public static final void downloadOtaFiles$lambda$21$lambda$20(AssetStatus assetStatus, BundleUpdater bundleUpdater, String str, String str2, File file, Uri uri, AppManifest appManifest, String str3, Patch patch, File file2) {
        int i10 = WhenMappings.$EnumSwitchMapping$1[assetStatus.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                String uri2 = uri.toString();
                Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
                kotlin.c.b(m212downloadSingleFilehUnOzRk$default(bundleUpdater, uri2, null, appManifest.getHashes().get(str3), patch, file, 0, 34, null));
            } else {
                throw new ir.p();
            }
        } else {
            Intrinsics.checkNotNull(str);
            tr.j.q(bundleUpdater.otaFile(str, str2), file, true, 0, 4, null);
        }
        bundleUpdater.moveFile(file, file2);
    }

    /* JADX WARN: Code restructure failed: missing block: B:182:0x0153, code lost:
        if (r0 == null) goto L52;
     */
    /* JADX WARN: Code restructure failed: missing block: B:201:0x01f7, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r32, com.discord.bundle_updater.BundleUpdaterUtils.INSTANCE.md5(r34)) != false) goto L69;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r12v3, types: [java.io.Closeable] */
    /* JADX WARN: Type inference failed for: r12v4 */
    /* JADX WARN: Type inference failed for: r12v6 */
    /* JADX WARN: Type inference failed for: r12v7 */
    /* renamed from: downloadSingleFile-hUnOzRk */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.lang.Object m211downloadSingleFilehUnOzRk(java.lang.String r30, java.util.List<kotlin.Pair<java.lang.String, java.lang.String>> r31, java.lang.String r32, com.discord.bundle_updater.BundleUpdater.Patch r33, java.io.File r34, int r35) {
        /*
            Method dump skipped, instructions count: 745
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.bundle_updater.BundleUpdater.m211downloadSingleFilehUnOzRk(java.lang.String, java.util.List, java.lang.String, com.discord.bundle_updater.BundleUpdater$Patch, java.io.File, int):java.lang.Object");
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* renamed from: downloadSingleFile-hUnOzRk$default */
    static /* synthetic */ Object m212downloadSingleFilehUnOzRk$default(BundleUpdater bundleUpdater, String str, List list, String str2, Patch patch, File file, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            list = null;
        }
        if ((i11 & 4) != 0) {
            str2 = null;
        }
        if ((i11 & 8) != 0) {
            patch = null;
        }
        if ((i11 & 32) != 0) {
            i10 = 0;
        }
        return bundleUpdater.m211downloadSingleFilehUnOzRk(str, list, str2, patch, file, i10);
    }

    private final File ensureEmptyFile(File file) {
        boolean z10;
        String str;
        String str2;
        String str3;
        File absoluteFile;
        File parentFile = file.getParentFile();
        if (parentFile != null) {
            z10 = parentFile.mkdirs();
        } else {
            z10 = false;
        }
        boolean z11 = z10;
        if (file.exists()) {
            file.delete();
        }
        try {
            file.createNewFile();
            return file;
        } catch (Exception e10) {
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            String str4 = "Failed to create file: " + file.getAbsolutePath() + ". ";
            File parentFile2 = file.getParentFile();
            Boolean bool = null;
            if (parentFile2 != null) {
                str = parentFile2.getPath();
            } else {
                str = null;
            }
            Pair a10 = v.a("Parent path", String.valueOf(str));
            File parentFile3 = file.getParentFile();
            if (parentFile3 != null) {
                str2 = parentFile3.getAbsolutePath();
            } else {
                str2 = null;
            }
            Pair a11 = v.a("Parent absolute path", String.valueOf(str2));
            File parentFile4 = file.getParentFile();
            if (parentFile4 != null && (absoluteFile = parentFile4.getAbsoluteFile()) != null) {
                str3 = absoluteFile.getPath();
            } else {
                str3 = null;
            }
            Pair a12 = v.a("Parent absolute file path", String.valueOf(str3));
            Pair a13 = v.a("Directories created", String.valueOf(z11));
            File parentFile5 = file.getParentFile();
            if (parentFile5 != null) {
                bool = Boolean.valueOf(parentFile5.exists());
            }
            CrashReporting.addBreadcrumb$default(crashReporting, str4, o0.m(a10, a11, a12, a13, v.a("Parent directory exists", String.valueOf(bool))), null, null, false, 28, null);
            throw e10;
        }
    }

    private final OkHttpClient getClient() {
        return (OkHttpClient) this.client$delegate.getValue();
    }

    public final CookieManager getCookieManager() {
        return (CookieManager) this.cookieManager$delegate.getValue();
    }

    private final String getExistingOtaCommit() {
        File location;
        String y10;
        List L0;
        OtaBundle bundle = getBundle();
        if (bundle != null && (location = bundle.getLocation()) != null && (y10 = tr.j.y(location, getOtasRootDirectory())) != null && (L0 = StringsKt.L0(y10, new char[]{File.separatorChar}, false, 0, 6, null)) != null) {
            return (String) CollectionsKt.firstOrNull(L0);
        }
        return null;
    }

    private final String getInProgressOtaCommit() {
        return this.sharedPreferences.getString(KEY_IN_PROGRESS_OTA_COMMIT, null);
    }

    private final String getManifestURL() {
        String uri = BASE_OTA_URI.buildUpon().appendPath("android").appendPath(getVersion()).appendPath("manifest.json").build().toString();
        Intrinsics.checkNotNullExpressionValue(uri, "toString(...)");
        return uri;
    }

    private final boolean getValidOTAVersion() {
        return Intrinsics.areEqual(getOtaVersion(), getVersion());
    }

    private final String getVersion() {
        return ClientInfo.INSTANCE.getVersionName();
    }

    private final boolean isNetworkException(Throwable th2) {
        if (!(th2 instanceof SocketTimeoutException) && !(th2 instanceof ConnectException) && !(th2 instanceof SocketException) && !(th2 instanceof UnknownHostException) && !(th2 instanceof SSLException) && !(th2 instanceof IOException) && !(th2 instanceof MaxDownloadAttemptsException)) {
            return false;
        }
        return true;
    }

    private final void moveFile(File file, File file2) {
        File parentFile = file2.getParentFile();
        if (parentFile != null) {
            parentFile.mkdirs();
        }
        file.renameTo(file2);
    }

    private final File otaFile(String str, String str2) {
        return new File(new File(getOtasRootDirectory(), str), str2);
    }

    private final File otaTempFile(String str) {
        return otaFile("temp", str);
    }

    public static final File otasRootDirectory_delegate$lambda$2(BundleUpdater bundleUpdater) {
        return new File(bundleUpdater.filesDirectory.getAbsolutePath(), OTAS_DIRECTORY);
    }

    private final void setInProgressOtaCommit(String str) {
        SharedPreferences.Editor edit = this.sharedPreferences.edit();
        edit.putString(KEY_IN_PROGRESS_OTA_COMMIT, str);
        edit.apply();
    }

    private final void setManifestETag(String str) {
        SharedPreferences.Editor edit = this.sharedPreferences.edit();
        edit.putString(KEY_ETAG, str);
        edit.apply();
    }

    private final void setOtaVersion(String str) {
        SharedPreferences.Editor edit = this.sharedPreferences.edit();
        edit.putString(KEY_OTA_VERSION, str);
        edit.apply();
    }

    private final void trackAssetDownload(OtaAssetDownloadAttemptResult otaAssetDownloadAttemptResult, String str, TimeMark timeMark, Long l10, Integer num, String str2) {
        this.otaMetrics.add(new OtaAssetDownloadAttempt(otaAssetDownloadAttemptResult, str, Duration.h(timeMark.a()), l10, num, str2, null));
    }

    static /* synthetic */ void trackAssetDownload$default(BundleUpdater bundleUpdater, OtaAssetDownloadAttemptResult otaAssetDownloadAttemptResult, String str, TimeMark timeMark, Long l10, Integer num, String str2, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            l10 = null;
        }
        if ((i10 & 16) != 0) {
            num = null;
        }
        if ((i10 & 32) != 0) {
            str2 = null;
        }
        bundleUpdater.trackAssetDownload(otaAssetDownloadAttemptResult, str, timeMark, l10, num, str2);
    }

    private final void trackCheckAttempt(OtaCheckAttempt otaCheckAttempt) {
        this.otaMetrics.add(otaCheckAttempt);
        Function1<? super List<? extends OtaMetric>, Unit> function1 = this.onOtaUpdateCheckedListener;
        if (function1 != null) {
            function1.invoke(this.otaMetrics);
        }
    }

    private final void validateBuildOverrideCookie() {
        if (!CookieValidator.INSTANCE.validateBuildOverrideCookie(getBuildOverrideCookie(), getVersion())) {
            setBuildOverrideCookieHeader("");
        }
    }

    public final Future<?> checkForUpdate(final int i10, final Function0<Unit> function0) {
        if (!this.otaUpdateChecking) {
            return this.executor.submit(new Runnable() { // from class: com.discord.bundle_updater.j
                @Override // java.lang.Runnable
                public final void run() {
                    BundleUpdater.checkForUpdate$lambda$11(i10, this, function0);
                }
            });
        }
        return null;
    }

    public final Cookie getBuildOverrideCookie() {
        return Cookie.f44012j.c(BASE_OTA_URL, getBuildOverrideCookieHeader());
    }

    @NotNull
    public final String getBuildOverrideCookieHeader() {
        String string = this.sharedPreferences.getString(KEY_BUILD_OVERRIDE_COOKIE_HEADER, "");
        if (string == null) {
            return "";
        }
        return string;
    }

    public final OtaBundle getBundle() {
        OtaBundle otaBundle;
        SharedPreferences sharedPreferences = this.sharedPreferences;
        String string = sharedPreferences.getString(KEY_ANDROID_JS_BUNDLE, null);
        String string2 = sharedPreferences.getString(KEY_ANDROID_JS_BUNDLE_RELEASE_NAME, null);
        if (string != null) {
            otaBundle = new OtaBundle(new File(string), string2);
        } else {
            otaBundle = null;
        }
        if (otaBundle == null || !otaBundle.getLocation().exists() || !getValidOTAVersion()) {
            return null;
        }
        return otaBundle;
    }

    @NotNull
    public final String getManifestETag() {
        String string = this.sharedPreferences.getString(KEY_ETAG, "");
        if (string == null) {
            return "";
        }
        return string;
    }

    public final Function1<Boolean, Unit> getOnBundleDownloadedListener() {
        return this.onBundleDownloadedListener;
    }

    public final Function1<List<? extends OtaMetric>, Unit> getOnOtaUpdateCheckedListener() {
        return this.onOtaUpdateCheckedListener;
    }

    @NotNull
    public final List<OtaMetric> getOtaMetrics() {
        return this.otaMetrics;
    }

    @NotNull
    public final String getOtaVersion() {
        String string = this.sharedPreferences.getString(KEY_OTA_VERSION, "");
        if (string == null) {
            return "";
        }
        return string;
    }

    @NotNull
    public final File getOtasRootDirectory() {
        return (File) this.otasRootDirectory$delegate.getValue();
    }

    public final void handleIntent(@NotNull Context context, @NotNull Intent intent) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(intent, "intent");
        if (Intrinsics.areEqual(intent.getAction(), CLEAR_BUILD_OVERRIDE)) {
            clearBundle(context);
        }
    }

    public final boolean isVersionRequired() {
        return this.isVersionRequired;
    }

    public final ManifestInfo manifestInfo() {
        AppManifest appManifest;
        String existingOtaCommit = getExistingOtaCommit();
        if (existingOtaCommit != null) {
            appManifest = BundleUpdaterUtils.INSTANCE.getManifestFromFile(otaFile(existingOtaCommit, "manifest.json"));
        } else {
            appManifest = null;
        }
        if (appManifest != null) {
            return new ManifestInfo("OTA", appManifest.getMetadata());
        }
        try {
            return new ManifestInfo("Bundle", BundleUpdaterUtilsKt.getManifestFromAsset(this.assetManager, "manifest.json").getMetadata());
        } catch (Exception unused) {
            return null;
        }
    }

    public final void setBuildOverrideCookieHeader(@NotNull String cookieHeader) {
        Intrinsics.checkNotNullParameter(cookieHeader, "cookieHeader");
        SharedPreferences.Editor edit = this.sharedPreferences.edit();
        edit.putString(KEY_BUILD_OVERRIDE_COOKIE_HEADER, cookieHeader);
        edit.apply();
    }

    public final void setBundle(OtaBundle otaBundle) {
        String str;
        File location;
        SharedPreferences.Editor edit = this.sharedPreferences.edit();
        String str2 = null;
        if (otaBundle != null && (location = otaBundle.getLocation()) != null) {
            str = location.getAbsolutePath();
        } else {
            str = null;
        }
        edit.putString(KEY_ANDROID_JS_BUNDLE, str);
        if (otaBundle != null) {
            str2 = otaBundle.getReleaseName();
        }
        edit.putString(KEY_ANDROID_JS_BUNDLE_RELEASE_NAME, str2);
        edit.apply();
    }

    public final void setOnBundleDownloadedListener(Function1<? super Boolean, Unit> function1) {
        this.onBundleDownloadedListener = function1;
    }

    public final void setOnOtaUpdateCheckedListener(Function1<? super List<? extends OtaMetric>, Unit> function1) {
        this.onOtaUpdateCheckedListener = function1;
    }

    /* synthetic */ BundleUpdater(SharedPreferences sharedPreferences, File file, AssetManager assetManager, ExecutorService executorService, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(sharedPreferences, file, assetManager, (i10 & 8) != 0 ? Executors.newFixedThreadPool(5) : executorService);
    }
}
