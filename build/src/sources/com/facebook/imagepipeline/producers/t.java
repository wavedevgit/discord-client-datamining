package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.request.ImageRequest;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t {

    /* renamed from: a  reason: collision with root package name */
    public static final t f10821a = new t();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends Exception {
        public a(String str) {
            super(str);
        }
    }

    private t() {
    }

    public static final la.j a(ImageRequest imageRequest, la.j jVar, la.j jVar2, Map map) {
        String diskCacheId;
        Intrinsics.checkNotNullParameter(imageRequest, "imageRequest");
        if (imageRequest.getCacheChoice() == ImageRequest.CacheChoice.SMALL) {
            return jVar;
        }
        if (imageRequest.getCacheChoice() == ImageRequest.CacheChoice.DEFAULT) {
            return jVar2;
        }
        if (imageRequest.getCacheChoice() == ImageRequest.CacheChoice.DYNAMIC && map != null && (diskCacheId = imageRequest.getDiskCacheId()) != null) {
            return (la.j) map.get(diskCacheId);
        }
        return null;
    }
}
