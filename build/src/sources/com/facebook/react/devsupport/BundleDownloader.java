package com.facebook.react.devsupport;

import com.facebook.react.common.DebugServerException;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.devsupport.MultipartStreamReader;
import com.facebook.react.devsupport.interfaces.DevBundleDownloadListener;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.File;
import java.io.IOException;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import okhttp3.Call;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.BufferedSource;
import okio.Sink;
import org.jetbrains.annotations.NotNull;
import org.json.JSONException;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u0000 !2\u00020\u0001:\u0002 !B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J6\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00112\b\b\u0002\u0010\u0012\u001a\u00020\u0013H\u0007J:\u0010\u0014\u001a\u00020\t2\u0006\u0010\u0015\u001a\u00020\u000f2\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u000f2\u0006\u0010\f\u001a\u00020\r2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00112\u0006\u0010\n\u001a\u00020\u000bH\u0002JB\u0010\u0019\u001a\u00020\t2\u0006\u0010\u0015\u001a\u00020\u000f2\u0006\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010\f\u001a\u00020\r2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00112\u0006\u0010\n\u001a\u00020\u000bH\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\""}, d2 = {"Lcom/facebook/react/devsupport/BundleDownloader;", "", "client", "Lokhttp3/OkHttpClient;", "<init>", "(Lokhttp3/OkHttpClient;)V", "downloadBundleFromURLCall", "Lokhttp3/Call;", "downloadBundleFromURL", "", "callback", "Lcom/facebook/react/devsupport/interfaces/DevBundleDownloadListener;", "outputFile", "Ljava/io/File;", "bundleURL", "", "bundleInfo", "Lcom/facebook/react/devsupport/BundleDownloader$BundleInfo;", "requestBuilder", "Lokhttp3/Request$Builder;", "processMultipartResponse", "url", "response", "Lokhttp3/Response;", "boundary", "processBundleResult", "statusCode", "", "headers", "Lokhttp3/Headers;", "body", "Lokio/BufferedSource;", "BundleInfo", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BundleDownloader {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int FILES_CHANGED_COUNT_NOT_BUILT_BY_BUNDLER = -2;
    @NotNull
    private static final String TAG = "BundleDownloader";
    @NotNull
    private final OkHttpClient client;
    private Call downloadBundleFromURLCall;

    @Metadata(d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\b\n\u0002\b\b\u0018\u0000 \u00142\u00020\u0001:\u0001\u0014B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0013\u001a\u0004\u0018\u00010\u0005R\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0080\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\tR\u0011\u0010\n\u001a\u00020\u00058F¢\u0006\u0006\u001a\u0004\b\u000b\u0010\u0007R$\u0010\u000e\u001a\u00020\r2\u0006\u0010\f\u001a\u00020\r@@X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\u0010\"\u0004\b\u0011\u0010\u0012¨\u0006\u0015"}, d2 = {"Lcom/facebook/react/devsupport/BundleDownloader$BundleInfo;", "", "<init>", "()V", "_url", "", "get_url$ReactAndroid_release", "()Ljava/lang/String;", "set_url$ReactAndroid_release", "(Ljava/lang/String;)V", "url", "getUrl", "value", "", "filesChangedCount", "getFilesChangedCount", "()I", "setFilesChangedCount$ReactAndroid_release", "(I)V", "toJSONString", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class BundleInfo {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private String _url;
        private int filesChangedCount;

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007H\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/devsupport/BundleDownloader$BundleInfo$Companion;", "", "<init>", "()V", "fromJSONString", "Lcom/facebook/react/devsupport/BundleDownloader$BundleInfo;", "jsonStr", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final BundleInfo fromJSONString(String str) {
                if (str == null) {
                    return null;
                }
                try {
                    JSONObject jSONObject = new JSONObject(str);
                    BundleInfo bundleInfo = new BundleInfo();
                    bundleInfo.set_url$ReactAndroid_release(jSONObject.getString("url"));
                    bundleInfo.setFilesChangedCount$ReactAndroid_release(jSONObject.getInt("filesChangedCount"));
                    return bundleInfo;
                } catch (JSONException e10) {
                    p8.a.n(BundleDownloader.TAG, "Invalid bundle info: ", e10);
                    return null;
                }
            }

            private Companion() {
            }
        }

        public static final BundleInfo fromJSONString(String str) {
            return Companion.fromJSONString(str);
        }

        public final int getFilesChangedCount() {
            return this.filesChangedCount;
        }

        @NotNull
        public final String getUrl() {
            String str = this._url;
            if (str == null) {
                return "unknown";
            }
            return str;
        }

        public final String get_url$ReactAndroid_release() {
            return this._url;
        }

        public final void setFilesChangedCount$ReactAndroid_release(int i10) {
            this.filesChangedCount = i10;
        }

        public final void set_url$ReactAndroid_release(String str) {
            this._url = str;
        }

        public final String toJSONString() {
            try {
                JSONObject jSONObject = new JSONObject();
                jSONObject.put("url", this._url);
                jSONObject.put("filesChangedCount", this.filesChangedCount);
                return jSONObject.toString();
            } catch (JSONException e10) {
                p8.a.n(BundleDownloader.TAG, "Can't serialize bundle info: ", e10);
                return null;
            }
        }
    }

    @Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0002J \u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0014H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"Lcom/facebook/react/devsupport/BundleDownloader$Companion;", "", "<init>", "()V", "TAG", "", "FILES_CHANGED_COUNT_NOT_BUILT_BY_BUNDLER", "", "storePlainJSInFile", "", "body", "Lokio/BufferedSource;", "outputFile", "Ljava/io/File;", "populateBundleInfo", "", "url", "headers", "Lokhttp3/Headers;", "bundleInfo", "Lcom/facebook/react/devsupport/BundleDownloader$BundleInfo;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nBundleDownloader.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BundleDownloader.kt\ncom/facebook/react/devsupport/BundleDownloader$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,324:1\n1#2:325\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void populateBundleInfo(String str, Headers headers, BundleInfo bundleInfo) {
            bundleInfo.set_url$ReactAndroid_release(str);
            String c10 = headers.c("X-Metro-Files-Changed-Count");
            if (c10 != null) {
                try {
                    bundleInfo.setFilesChangedCount$ReactAndroid_release(Integer.parseInt(c10));
                } catch (NumberFormatException e10) {
                    bundleInfo.setFilesChangedCount$ReactAndroid_release(BundleDownloader.FILES_CHANGED_COUNT_NOT_BUILT_BY_BUNDLER);
                    p8.a.n(BundleDownloader.TAG, "Can't populate bundle info: ", e10);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean storePlainJSInFile(BufferedSource bufferedSource, File file) {
            Sink c10 = iu.b.a().c(file);
            try {
                bufferedSource.e2(c10);
                tr.c.a(c10, null);
                return true;
            } finally {
            }
        }

        private Companion() {
        }
    }

    public BundleDownloader(@NotNull OkHttpClient client) {
        Intrinsics.checkNotNullParameter(client, "client");
        this.client = client;
    }

    public static /* synthetic */ void downloadBundleFromURL$default(BundleDownloader bundleDownloader, DevBundleDownloadListener devBundleDownloadListener, File file, String str, BundleInfo bundleInfo, Request.Builder builder, int i10, Object obj) {
        if ((i10 & 16) != 0) {
            builder = new Request.Builder();
        }
        bundleDownloader.downloadBundleFromURL(devBundleDownloadListener, file, str, bundleInfo, builder);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void processBundleResult(String str, int i10, Headers headers, BufferedSource bufferedSource, File file, BundleInfo bundleInfo, DevBundleDownloadListener devBundleDownloadListener) {
        if (i10 != 200) {
            String T1 = bufferedSource.T1();
            DebugServerException parse = DebugServerException.Companion.parse(str, T1);
            if (parse != null) {
                devBundleDownloadListener.onFailure(parse);
                return;
            }
            String str2 = "The development server returned response error code: " + i10 + "\n\nURL: " + str + "\n\nBody:\n" + T1;
            Intrinsics.checkNotNullExpressionValue(str2, "toString(...)");
            devBundleDownloadListener.onFailure(new DebugServerException(str2));
            return;
        }
        if (bundleInfo != null) {
            Companion.populateBundleInfo(str, headers, bundleInfo);
        }
        File file2 = new File(file.getPath() + ".tmp");
        if (Companion.storePlainJSInFile(bufferedSource, file2) && !file2.renameTo(file)) {
            throw new IOException("Couldn't rename " + file2 + " to " + file);
        }
        devBundleDownloadListener.onSuccess();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void processMultipartResponse(final String str, final Response response, String str2, final File file, final BundleInfo bundleInfo, final DevBundleDownloadListener devBundleDownloadListener) {
        BufferedSource bufferedSource;
        if (response.a() == null) {
            int h10 = response.h();
            devBundleDownloadListener.onFailure(new DebugServerException(StringsKt.j("\n                    Error while reading multipart response.\n                    \n                    Response body was empty: " + h10 + "\n                    \n                    URL: " + str + "\n                    \n                    \n                    ")));
            return;
        }
        ResponseBody a10 = response.a();
        if (a10 != null) {
            bufferedSource = a10.source();
        } else {
            bufferedSource = null;
        }
        if (bufferedSource != null) {
            if (!new MultipartStreamReader(bufferedSource, str2).readAllParts(new MultipartStreamReader.ChunkListener() { // from class: com.facebook.react.devsupport.BundleDownloader$processMultipartResponse$completed$1
                @Override // com.facebook.react.devsupport.MultipartStreamReader.ChunkListener
                public void onChunkComplete(Map<String, String> headers, Buffer body, boolean z10) {
                    String str3;
                    Integer num;
                    Intrinsics.checkNotNullParameter(headers, "headers");
                    Intrinsics.checkNotNullParameter(body, "body");
                    if (z10) {
                        int h11 = Response.this.h();
                        if (headers.containsKey("X-Http-Status")) {
                            h11 = Integer.parseInt(headers.getOrDefault("X-Http-Status", "0"));
                        }
                        this.processBundleResult(str, h11, Headers.f44045e.a(headers), body, file, bundleInfo, devBundleDownloadListener);
                    } else if (headers.containsKey("Content-Type") && Intrinsics.areEqual(headers.get("Content-Type"), "application/json")) {
                        try {
                            JSONObject jSONObject = new JSONObject(body.T1());
                            if (jSONObject.has("status")) {
                                str3 = jSONObject.getString("status");
                            } else {
                                str3 = "Bundling";
                            }
                            Integer num2 = null;
                            if (jSONObject.has("done")) {
                                num = Integer.valueOf(jSONObject.getInt("done"));
                            } else {
                                num = null;
                            }
                            if (jSONObject.has("total")) {
                                num2 = Integer.valueOf(jSONObject.getInt("total"));
                            }
                            devBundleDownloadListener.onProgress(str3, num, num2);
                        } catch (JSONException e10) {
                            p8.a.m(ReactConstants.TAG, "Error parsing progress JSON. " + e10);
                        }
                    }
                }

                @Override // com.facebook.react.devsupport.MultipartStreamReader.ChunkListener
                public void onChunkProgress(Map<String, String> headers, long j10, long j11) {
                    Intrinsics.checkNotNullParameter(headers, "headers");
                    if (Intrinsics.areEqual("application/javascript", headers.get("Content-Type"))) {
                        DevBundleDownloadListener devBundleDownloadListener2 = devBundleDownloadListener;
                        long j12 = (long) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        devBundleDownloadListener2.onProgress("Downloading", Integer.valueOf((int) (j10 / j12)), Integer.valueOf((int) (j11 / j12)));
                    }
                }
            })) {
                int h11 = response.h();
                devBundleDownloadListener.onFailure(new DebugServerException(StringsKt.j("\n                    Error while reading multipart response.\n                    \n                    Response code: " + h11 + "\n                    \n                    URL: " + str + "\n                    \n                    \n                    ")));
                return;
            }
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    public final void downloadBundleFromURL(@NotNull DevBundleDownloadListener callback, @NotNull File outputFile, String str, BundleInfo bundleInfo) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(outputFile, "outputFile");
        downloadBundleFromURL$default(this, callback, outputFile, str, bundleInfo, null, 16, null);
    }

    public final void downloadBundleFromURL(@NotNull final DevBundleDownloadListener callback, @NotNull final File outputFile, String str, final BundleInfo bundleInfo, @NotNull Request.Builder requestBuilder) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        Intrinsics.checkNotNullParameter(outputFile, "outputFile");
        Intrinsics.checkNotNullParameter(requestBuilder, "requestBuilder");
        if (str != null) {
            Call a10 = this.client.a(requestBuilder.l(str).a("Accept", "multipart/mixed").b());
            this.downloadBundleFromURLCall = a10;
            if (a10 != null) {
                a10.C0(new tt.b() { // from class: com.facebook.react.devsupport.BundleDownloader$downloadBundleFromURL$1
                    /* JADX WARN: Code restructure failed: missing block: B:4:0x0013, code lost:
                        r0 = r4.this$0.downloadBundleFromURLCall;
                     */
                    @Override // tt.b
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public void onFailure(okhttp3.Call r5, java.io.IOException r6) {
                        /*
                            r4 = this;
                            java.lang.String r0 = "call"
                            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
                            java.lang.String r0 = "e"
                            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
                            com.facebook.react.devsupport.BundleDownloader r0 = com.facebook.react.devsupport.BundleDownloader.this
                            okhttp3.Call r0 = com.facebook.react.devsupport.BundleDownloader.access$getDownloadBundleFromURLCall$p(r0)
                            r1 = 0
                            if (r0 == 0) goto L53
                            com.facebook.react.devsupport.BundleDownloader r0 = com.facebook.react.devsupport.BundleDownloader.this
                            okhttp3.Call r0 = com.facebook.react.devsupport.BundleDownloader.access$getDownloadBundleFromURLCall$p(r0)
                            if (r0 == 0) goto L23
                            boolean r0 = r0.x()
                            r2 = 1
                            if (r0 != r2) goto L23
                            goto L53
                        L23:
                            com.facebook.react.devsupport.BundleDownloader r0 = com.facebook.react.devsupport.BundleDownloader.this
                            com.facebook.react.devsupport.BundleDownloader.access$setDownloadBundleFromURLCall$p(r0, r1)
                            okhttp3.Request r5 = r5.h()
                            okhttp3.HttpUrl r5 = r5.b()
                            java.lang.String r5 = r5.toString()
                            com.facebook.react.devsupport.interfaces.DevBundleDownloadListener r0 = r2
                            com.facebook.react.common.DebugServerException$Companion r1 = com.facebook.react.common.DebugServerException.Companion
                            java.lang.StringBuilder r2 = new java.lang.StringBuilder
                            r2.<init>()
                            java.lang.String r3 = "URL: "
                            r2.append(r3)
                            r2.append(r5)
                            java.lang.String r2 = r2.toString()
                            java.lang.String r3 = "Could not connect to development server."
                            com.facebook.react.common.DebugServerException r5 = r1.makeGeneric(r5, r3, r2, r6)
                            r0.onFailure(r5)
                            return
                        L53:
                            com.facebook.react.devsupport.BundleDownloader r5 = com.facebook.react.devsupport.BundleDownloader.this
                            com.facebook.react.devsupport.BundleDownloader.access$setDownloadBundleFromURLCall$p(r5, r1)
                            return
                        */
                        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.devsupport.BundleDownloader$downloadBundleFromURL$1.onFailure(okhttp3.Call, java.io.IOException):void");
                    }

                    /* JADX WARN: Code restructure failed: missing block: B:9:0x0024, code lost:
                        if (r11.x() == true) goto L48;
                     */
                    /* JADX WARN: Multi-variable type inference failed */
                    /* JADX WARN: Type inference failed for: r11v16 */
                    /* JADX WARN: Type inference failed for: r11v2 */
                    /* JADX WARN: Type inference failed for: r11v4 */
                    /* JADX WARN: Type inference failed for: r11v5, types: [okhttp3.Call] */
                    @Override // tt.b
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public void onResponse(okhttp3.Call r11, okhttp3.Response r12) {
                        /*
                            r10 = this;
                            java.lang.String r0 = "call"
                            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
                            java.lang.String r11 = "response"
                            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r12, r11)
                            com.facebook.react.devsupport.BundleDownloader r0 = com.facebook.react.devsupport.BundleDownloader.this
                            java.io.File r4 = r3
                            com.facebook.react.devsupport.BundleDownloader$BundleInfo r5 = r4
                            com.facebook.react.devsupport.interfaces.DevBundleDownloadListener r6 = r2
                            okhttp3.Call r11 = com.facebook.react.devsupport.BundleDownloader.access$getDownloadBundleFromURLCall$p(r0)     // Catch: java.lang.Throwable -> L79
                            r8 = 0
                            if (r11 == 0) goto L26
                            okhttp3.Call r11 = com.facebook.react.devsupport.BundleDownloader.access$getDownloadBundleFromURLCall$p(r0)     // Catch: java.lang.Throwable -> L79
                            r1 = 1
                            if (r11 == 0) goto L30
                            boolean r11 = r11.x()     // Catch: java.lang.Throwable -> L29
                            if (r11 != r1) goto L30
                        L26:
                            r11 = r12
                            goto Lad
                        L29:
                            r0 = move-exception
                            r11 = r0
                            r9 = r12
                            r12 = r11
                            r11 = r9
                            goto Lb4
                        L30:
                            com.facebook.react.devsupport.BundleDownloader.access$setDownloadBundleFromURLCall$p(r0, r8)     // Catch: java.lang.Throwable -> L79
                            okhttp3.Request r11 = r12.n()     // Catch: java.lang.Throwable -> L79
                            okhttp3.HttpUrl r11 = r11.b()     // Catch: java.lang.Throwable -> L79
                            java.lang.String r11 = r11.toString()     // Catch: java.lang.Throwable -> L79
                            java.lang.String r2 = "content-type"
                            r3 = 2
                            java.lang.String r2 = okhttp3.Response.D0(r12, r2, r8, r3, r8)     // Catch: java.lang.Throwable -> L79
                            if (r2 != 0) goto L4a
                            java.lang.String r2 = ""
                        L4a:
                            java.lang.String r3 = "multipart/mixed;.*boundary=\"([^\"]+)\""
                            java.util.regex.Pattern r3 = java.util.regex.Pattern.compile(r3)     // Catch: java.lang.Throwable -> L79
                            java.util.regex.Matcher r3 = r3.matcher(r2)     // Catch: java.lang.Throwable -> L79
                            int r2 = r2.length()     // Catch: java.lang.Throwable -> L79
                            if (r2 <= 0) goto L7c
                            boolean r2 = r3.find()     // Catch: java.lang.Throwable -> L79
                            if (r2 == 0) goto L7c
                            java.lang.String r1 = r3.group(r1)     // Catch: java.lang.Throwable -> L79
                            java.lang.Object r1 = db.a.c(r1)     // Catch: java.lang.Throwable -> L79
                            r3 = r1
                            java.lang.String r3 = (java.lang.String) r3     // Catch: java.lang.Throwable -> L79
                            kotlin.jvm.internal.Intrinsics.checkNotNull(r3)     // Catch: java.lang.Throwable -> L79
                            r1 = r11
                            r2 = r12
                            com.facebook.react.devsupport.BundleDownloader.access$processMultipartResponse(r0, r1, r2, r3, r4, r5, r6)     // Catch: java.lang.Throwable -> L75
                            r11 = r2
                            goto L9f
                        L75:
                            r0 = move-exception
                            r11 = r2
                        L77:
                            r12 = r0
                            goto Lb4
                        L79:
                            r0 = move-exception
                            r11 = r12
                            goto L77
                        L7c:
                            r1 = r11
                            r11 = r12
                            okhttp3.ResponseBody r12 = r11.a()     // Catch: java.lang.Throwable -> La5
                            if (r12 == 0) goto L9a
                            int r2 = r11.h()     // Catch: java.lang.Throwable -> L97
                            okhttp3.Headers r3 = r11.l()     // Catch: java.lang.Throwable -> L97
                            r7 = r6
                            r6 = r5
                            r5 = r4
                            okio.BufferedSource r4 = r12.source()     // Catch: java.lang.Throwable -> L97
                            com.facebook.react.devsupport.BundleDownloader.access$processBundleResult(r0, r1, r2, r3, r4, r5, r6, r7)     // Catch: java.lang.Throwable -> L97
                            goto L9a
                        L97:
                            r0 = move-exception
                            r1 = r0
                            goto La7
                        L9a:
                            kotlin.Unit r0 = kotlin.Unit.f33282a     // Catch: java.lang.Throwable -> L97
                            tr.c.a(r12, r8)     // Catch: java.lang.Throwable -> La5
                        L9f:
                            kotlin.Unit r12 = kotlin.Unit.f33282a     // Catch: java.lang.Throwable -> La5
                            tr.c.a(r11, r8)
                            return
                        La5:
                            r0 = move-exception
                            goto L77
                        La7:
                            throw r1     // Catch: java.lang.Throwable -> La8
                        La8:
                            r0 = move-exception
                            tr.c.a(r12, r1)     // Catch: java.lang.Throwable -> La5
                            throw r0     // Catch: java.lang.Throwable -> La5
                        Lad:
                            com.facebook.react.devsupport.BundleDownloader.access$setDownloadBundleFromURLCall$p(r0, r8)     // Catch: java.lang.Throwable -> La5
                            tr.c.a(r11, r8)
                            return
                        Lb4:
                            throw r12     // Catch: java.lang.Throwable -> Lb5
                        Lb5:
                            r0 = move-exception
                            tr.c.a(r11, r12)
                            throw r0
                        */
                        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.devsupport.BundleDownloader$downloadBundleFromURL$1.onResponse(okhttp3.Call, okhttp3.Response):void");
                    }
                });
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new IllegalStateException("Required value was null.");
    }
}
