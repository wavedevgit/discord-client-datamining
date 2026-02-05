package com.facebook.imagepipeline.backends.okhttp3;

import android.content.Context;
import com.facebook.imagepipeline.core.ImagePipelineConfig;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f10412a = new a();

    private a() {
    }

    public static final ImagePipelineConfig.Builder a(Context context, OkHttpClient okHttpClient) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(okHttpClient, "okHttpClient");
        return ImagePipelineConfig.M.i(context).W(new OkHttpNetworkFetcher(okHttpClient));
    }
}
