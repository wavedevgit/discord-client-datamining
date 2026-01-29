package com.facebook.react.views.imagehelper;

import com.facebook.imagepipeline.core.ImagePipeline;
import com.facebook.imagepipeline.core.b;
import com.facebook.react.modules.fresco.ImageCacheControl;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0002\bÀ\u0002\u0018\u00002\u00020\u0001:\u0001\u000eB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J&\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\nH\u0007J.\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u000b0\n2\u0006\u0010\f\u001a\u00020\rH\u0007¨\u0006\u000f"}, d2 = {"Lcom/facebook/react/views/imagehelper/MultiSourceHelper;", "", "<init>", "()V", "getBestSourceForSize", "Lcom/facebook/react/views/imagehelper/MultiSourceHelper$MultiSourceResult;", "width", "", "height", "sources", "", "Lcom/facebook/react/views/imagehelper/ImageSource;", "multiplier", "", "MultiSourceResult", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MultiSourceHelper {
    @NotNull
    public static final MultiSourceHelper INSTANCE = new MultiSourceHelper();

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u0001B\u001b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006R\u0012\u0010\u0002\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\u0004\u001a\u0004\u0018\u00010\u00038\u0006X\u0087\u0004¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/facebook/react/views/imagehelper/MultiSourceHelper$MultiSourceResult;", "", "bestResult", "Lcom/facebook/react/views/imagehelper/ImageSource;", "bestResultInCache", "<init>", "(Lcom/facebook/react/views/imagehelper/ImageSource;Lcom/facebook/react/views/imagehelper/ImageSource;)V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class MultiSourceResult {
        public final ImageSource bestResult;
        public final ImageSource bestResultInCache;

        public MultiSourceResult(ImageSource imageSource, ImageSource imageSource2) {
            this.bestResult = imageSource;
            this.bestResultInCache = imageSource2;
        }
    }

    private MultiSourceHelper() {
    }

    @NotNull
    public static final MultiSourceResult getBestSourceForSize(int i10, int i11, @NotNull List<? extends ImageSource> sources) {
        Intrinsics.checkNotNullParameter(sources, "sources");
        return getBestSourceForSize(i10, i11, sources, 1.0d);
    }

    @NotNull
    public static final MultiSourceResult getBestSourceForSize(int i10, int i11, @NotNull List<? extends ImageSource> sources, double d10) {
        Intrinsics.checkNotNullParameter(sources, "sources");
        ImageSource imageSource = null;
        if (sources.isEmpty()) {
            return new MultiSourceResult(null, null);
        }
        if (sources.size() == 1) {
            return new MultiSourceResult(sources.get(0), null);
        }
        if (i10 > 0 && i11 > 0) {
            ImagePipeline j10 = b.l().j();
            Intrinsics.checkNotNullExpressionValue(j10, "getImagePipeline(...)");
            double d11 = i10 * i11 * d10;
            double d12 = Double.MAX_VALUE;
            double d13 = Double.MAX_VALUE;
            ImageSource imageSource2 = null;
            ImageSource imageSource3 = null;
            for (ImageSource imageSource4 : sources) {
                double abs = Math.abs(1.0d - (imageSource4.getSize() / d11));
                if (abs < d12 && !imageSource4.isForceCached()) {
                    imageSource3 = imageSource4;
                    d12 = abs;
                }
                if (abs < d13 && imageSource4.getCacheControl() != ImageCacheControl.RELOAD && (j10.t(imageSource4.getUri()) || j10.v(imageSource4.getUri()))) {
                    imageSource2 = imageSource4;
                    d13 = abs;
                }
                if (imageSource4.isForceCached()) {
                    d13 = 0.0d;
                    imageSource2 = imageSource4;
                }
            }
            if (imageSource2 == null || imageSource3 == null || !Intrinsics.areEqual(imageSource2.getSource(), imageSource3.getSource())) {
                imageSource = imageSource2;
            }
            return new MultiSourceResult(imageSource3, imageSource);
        }
        return new MultiSourceResult(null, null);
    }
}
