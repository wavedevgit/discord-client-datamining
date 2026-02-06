package com.discord.file_downloader;

import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Environment;
import com.discord.file_downloader.DownloadState;
import com.discord.file_downloader.utils.FilenameSanitizedKt;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.channels.ProducerScope;
import kotlinx.coroutines.flow.Flow;
import org.jetbrains.annotations.NotNull;
import qs.w;
import rs.g;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001:\u0001\u001cB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J2\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000f2\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u000fH\u0007J*\u0010\u0012\u001a\u00020\u0013*\b\u0012\u0004\u0012\u00020\u000b0\u00142\u0006\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00062\u0006\u0010\u0018\u001a\u00020\u000fH\u0002J*\u0010\u0019\u001a\n \u001b*\u0004\u0018\u00010\u001a0\u001a2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u000f2\b\u0010\u0011\u001a\u0004\u0018\u00010\u000fH\u0002R \u0010\u0004\u001a\u0014\u0012\u0004\u0012\u00020\u0006\u0012\n\u0012\b\u0012\u0004\u0012\u00020\b0\u00070\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001d"}, d2 = {"Lcom/discord/file_downloader/PublicFileDownloader;", "", "<init>", "()V", "onDownloadListeners", "", "", "Lkotlin/Function0;", "", "downloadFile", "Lkotlinx/coroutines/flow/Flow;", "Lcom/discord/file_downloader/DownloadState;", "context", "Landroid/content/Context;", "url", "", "fileName", "description", "onFileDownloaded", "", "Lkotlinx/coroutines/channels/ProducerScope;", "downloadManager", "Landroid/app/DownloadManager;", "downloadId", "downloadFileName", "getFileDownloadRequest", "Landroid/app/DownloadManager$Request;", "kotlin.jvm.PlatformType", "PublicFileDownloadBroadcastReceiver", "file_downloader_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PublicFileDownloader {
    @NotNull
    public static final PublicFileDownloader INSTANCE = new PublicFileDownloader();
    @NotNull
    private static final Map<Long, Function0<Unit>> onDownloadListeners = new LinkedHashMap();

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u001a\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\tH\u0016¨\u0006\n"}, d2 = {"Lcom/discord/file_downloader/PublicFileDownloader$PublicFileDownloadBroadcastReceiver;", "Landroid/content/BroadcastReceiver;", "<init>", "()V", "onReceive", "", "context", "Landroid/content/Context;", "intent", "Landroid/content/Intent;", "file_downloader_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PublicFileDownloadBroadcastReceiver extends BroadcastReceiver {
        @Override // android.content.BroadcastReceiver
        public void onReceive(@NotNull Context context, Intent intent) {
            String str;
            Intrinsics.checkNotNullParameter(context, "context");
            if (intent != null) {
                str = intent.getAction();
            } else {
                str = null;
            }
            if (str != null && str.hashCode() == 1248865515 && str.equals("android.intent.action.DOWNLOAD_COMPLETE")) {
                Function0 function0 = (Function0) PublicFileDownloader.onDownloadListeners.get(Long.valueOf(intent.getLongExtra("extra_download_id", 0L)));
                if (function0 != null) {
                    function0.invoke();
                }
            }
        }
    }

    private PublicFileDownloader() {
    }

    public static /* synthetic */ Flow downloadFile$default(PublicFileDownloader publicFileDownloader, Context context, String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            str3 = null;
        }
        return publicFileDownloader.downloadFile(context, str, str2, str3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final DownloadManager.Request getFileDownloadRequest(String str, String str2, String str3) {
        DownloadManager.Request notificationVisibility = new DownloadManager.Request(Uri.parse(str)).setTitle(str2).setDescription(str3).setNotificationVisibility(1);
        String filenameSanitized = FilenameSanitizedKt.filenameSanitized(str2);
        notificationVisibility.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, filenameSanitized);
        String mimeTypeFromFilename = FilenameSanitizedKt.getMimeTypeFromFilename(filenameSanitized);
        if (mimeTypeFromFilename != null) {
            notificationVisibility.setMimeType(mimeTypeFromFilename);
        }
        notificationVisibility.allowScanningByMediaScanner();
        return notificationVisibility;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean onFileDownloaded(ProducerScope producerScope, DownloadManager downloadManager, long j10, String str) {
        Cursor query = downloadManager.query(new DownloadManager.Query().setFilterById(j10));
        try {
            if (query.moveToFirst()) {
                producerScope.i(new DownloadState.Completed(new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), str)));
            } else {
                producerScope.i(new DownloadState.Failure(new IllegalStateException(new FileNotFoundException())));
            }
            boolean a10 = w.a.a(producerScope, null, 1, null);
            bs.c.a(query, null);
            return a10;
        } finally {
        }
    }

    @NotNull
    public final Flow downloadFile(@NotNull Context context, @NotNull String url, @NotNull String fileName, String str) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(fileName, "fileName");
        return g.d(new PublicFileDownloader$downloadFile$1(context, url, fileName, str, null));
    }
}
