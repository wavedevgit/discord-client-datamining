package com.facebook.imagepipeline.listener;

import com.facebook.imagepipeline.producers.z0;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface RequestListener extends z0 {
    void onRequestCancellation(String str);

    void onRequestFailure(ImageRequest imageRequest, String str, Throwable th2, boolean z10);

    void onRequestStart(ImageRequest imageRequest, Object obj, String str, boolean z10);

    void onRequestSuccess(ImageRequest imageRequest, String str, boolean z10);
}
