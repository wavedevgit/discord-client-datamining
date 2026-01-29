package com.discord.image.fresco.config;

import android.annotation.SuppressLint;
import android.content.Context;
import android.net.Uri;
import com.discord.networking.ReactNetworking;
import com.facebook.imagepipeline.cache.DefaultCacheKeyFactory;
import com.facebook.imagepipeline.core.ImagePipelineConfig;
import com.facebook.react.modules.fresco.FrescoModule;
import java.util.Set;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import va.j;
import va.w;
import va.y;
import va.z;
@Metadata(d1 = {"\u0000$\n\u0000\n\u0002\u0010\"\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\u001a\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0002\u001a\f\u0010\b\u001a\u00020\t*\u00020\nH\u0001\"\u0014\u0010\u0000\u001a\b\u0012\u0004\u0012\u00020\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000\"\u0014\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"ATTACHMENT_CDN_HOSTS", "", "", "SIGNED_QUERY_PARAMS", "isSignedUrl", "", "uri", "Landroid/net/Uri;", "frescoConfig", "Lcom/facebook/imagepipeline/core/ImagePipelineConfig;", "Landroid/content/Context;", "fresco_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FrescoConfigKt {
    @NotNull
    private static final Set<String> ATTACHMENT_CDN_HOSTS = x0.i("cdn.discordapp.com", "media.discordapp.net", "images.discordapp.net");
    @NotNull
    private static final Set<String> SIGNED_QUERY_PARAMS = x0.i("ex", "hm", "is");

    @SuppressLint({"VisibleForTests"})
    @NotNull
    public static final ImagePipelineConfig frescoConfig(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        ImagePipelineConfig.Builder defaultConfigBuilder = FrescoModule.Companion.getDefaultConfigBuilder(context);
        FrescoDiskCache frescoDiskCache = FrescoDiskCache.INSTANCE;
        ImagePipelineConfig.Builder W = defaultConfigBuilder.V(frescoDiskCache.newRegularDiskCache(context)).Z(frescoDiskCache.newSmallDiskCache(context)).R(new FrescoBitmapSupplier(context)).W(ReactNetworking.INSTANCE.createReactOkHttpNetworkFetcher());
        w.a n10 = w.n();
        z a10 = j.a();
        ImagePipelineConfig.Builder T = W.X(new y(n10.n(new z(a10.f50843b, a10.f50842a * 2, a10.f50844c)).m())).S(new DefaultCacheKeyFactory() { // from class: com.discord.image.fresco.config.FrescoConfigKt$frescoConfig$2
            @Override // com.facebook.imagepipeline.cache.DefaultCacheKeyFactory
            protected Uri getCacheKeySourceUri(Uri sourceUri) {
                boolean isSignedUrl;
                Set set;
                Intrinsics.checkNotNullParameter(sourceUri, "sourceUri");
                isSignedUrl = FrescoConfigKt.isSignedUrl(sourceUri);
                if (!isSignedUrl) {
                    return sourceUri;
                }
                Uri.Builder buildUpon = sourceUri.buildUpon();
                buildUpon.clearQuery();
                for (String str : sourceUri.getQueryParameterNames()) {
                    set = FrescoConfigKt.SIGNED_QUERY_PARAMS;
                    if (!set.contains(str)) {
                        for (String str2 : sourceUri.getQueryParameters(str)) {
                            buildUpon.appendQueryParameter(str, str2);
                        }
                    }
                }
                Uri build = buildUpon.build();
                Intrinsics.checkNotNullExpressionValue(build, "build(...)");
                return build;
            }
        }).T(true);
        T.b().g(true);
        return T.a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean isSignedUrl(Uri uri) {
        String path = uri.getPath();
        if (path == null) {
            return false;
        }
        if ((!StringsKt.P(path, "/attachments/", false, 2, null) && !StringsKt.P(path, "/ephemeral-attachments/", false, 2, null)) || !CollectionsKt.d0(ATTACHMENT_CDN_HOSTS, uri.getHost())) {
            return false;
        }
        return true;
    }
}
