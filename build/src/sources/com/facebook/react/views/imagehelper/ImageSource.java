package com.facebook.react.views.imagehelper;

import android.content.Context;
import android.net.Uri;
import androidx.arch.core.util.Function;
import com.facebook.react.modules.fresco.ImageCacheControl;
import java.util.Objects;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\b\n\u0002\b\u0004\b\u0016\u0018\u0000 %2\u00020\u0001:\u0001%BC\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\u0007\u0012\b\b\u0002\u0010\t\u001a\u00020\n\u0012\b\b\u0002\u0010\u000b\u001a\u00020\f¢\u0006\u0004\b\r\u0010\u000eJ\u0013\u0010\u001f\u001a\u00020\f2\b\u0010 \u001a\u0004\u0018\u00010\u0001H\u0096\u0002J\b\u0010!\u001a\u00020\"H\u0016J\u0010\u0010#\u001a\u00020\u00172\u0006\u0010\u0002\u001a\u00020\u0003H\u0002J\u0010\u0010$\u001a\u00020\u00172\u0006\u0010\u0002\u001a\u00020\u0003H\u0002R\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\u0010\"\u0004\b\u0011\u0010\u0012R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\u0015R\u0014\u0010\u0016\u001a\u00020\u0017X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\u001a\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0014\u0010\u001d\u001a\u00020\f8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u001d\u0010\u0015R\u000e\u0010\u001e\u001a\u00020\fX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006&"}, d2 = {"Lcom/facebook/react/views/imagehelper/ImageSource;", "", "context", "Landroid/content/Context;", "source", "", "width", "", "height", "cacheControl", "Lcom/facebook/react/modules/fresco/ImageCacheControl;", "isForceCached", "", "<init>", "(Landroid/content/Context;Ljava/lang/String;DDLcom/facebook/react/modules/fresco/ImageCacheControl;Z)V", "getSource", "()Ljava/lang/String;", "setSource", "(Ljava/lang/String;)V", "getCacheControl", "()Lcom/facebook/react/modules/fresco/ImageCacheControl;", "()Z", "uri", "Landroid/net/Uri;", "getUri", "()Landroid/net/Uri;", "size", "getSize", "()D", "isResource", "_isResource", "equals", "other", "hashCode", "", "computeUri", "computeLocalUri", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ImageSource {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TRANSPARENT_BITMAP_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    private static Function sourceOverride;
    private boolean _isResource;
    @NotNull
    private final ImageCacheControl cacheControl;
    private final boolean isForceCached;
    private final double size;
    private String source;
    @NotNull
    private final Uri uri;

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fH\u0007R(\u0010\u0004\u001a\u0010\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\nR\u000e\u0010\u000b\u001a\u00020\u0006X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/facebook/react/views/imagehelper/ImageSource$Companion;", "", "<init>", "()V", "sourceOverride", "Landroidx/arch/core/util/Function;", "", "getSourceOverride", "()Landroidx/arch/core/util/Function;", "setSourceOverride", "(Landroidx/arch/core/util/Function;)V", "TRANSPARENT_BITMAP_URI", "getTransparentBitmapImageSource", "Lcom/facebook/react/views/imagehelper/ImageSource;", "context", "Landroid/content/Context;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Function getSourceOverride() {
            return ImageSource.sourceOverride;
        }

        @NotNull
        public final ImageSource getTransparentBitmapImageSource(@NotNull Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            return new ImageSource(context, ImageSource.TRANSPARENT_BITMAP_URI, 0.0d, 0.0d, ImageCacheControl.DEFAULT, false, 44, null);
        }

        public final void setSourceOverride(Function function) {
            ImageSource.sourceOverride = function;
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ImageSource(@NotNull Context context, String str) {
        this(context, str, 0.0d, 0.0d, null, false, 60, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final Uri computeLocalUri(Context context) {
        this._isResource = true;
        return ResourceDrawableIdHelper.getResourceDrawableUri(context, this.source);
    }

    private final Uri computeUri(Context context) {
        try {
            Function function = sourceOverride;
            if (function != null) {
                this.source = (String) function.apply(this.source);
            }
            Uri parse = Uri.parse(this.source);
            if (parse.getScheme() == null) {
                parse = computeLocalUri(context);
            }
            Intrinsics.checkNotNull(parse);
            return parse;
        } catch (NullPointerException unused) {
            return computeLocalUri(context);
        }
    }

    @NotNull
    public static final ImageSource getTransparentBitmapImageSource(@NotNull Context context) {
        return Companion.getTransparentBitmapImageSource(context);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && Intrinsics.areEqual(getClass(), obj.getClass())) {
            ImageSource imageSource = (ImageSource) obj;
            if (Double.compare(imageSource.size, this.size) == 0 && isResource() == imageSource.isResource() && Intrinsics.areEqual(getUri(), imageSource.getUri()) && Intrinsics.areEqual(this.source, imageSource.source) && this.cacheControl == imageSource.cacheControl) {
                return true;
            }
        }
        return false;
    }

    @NotNull
    public final ImageCacheControl getCacheControl() {
        return this.cacheControl;
    }

    public final double getSize() {
        return this.size;
    }

    public final String getSource() {
        return this.source;
    }

    @NotNull
    public Uri getUri() {
        return this.uri;
    }

    public int hashCode() {
        return Objects.hash(getUri(), this.source, Double.valueOf(this.size), Boolean.valueOf(isResource()), this.cacheControl);
    }

    public final boolean isForceCached() {
        return this.isForceCached;
    }

    public boolean isResource() {
        return this._isResource;
    }

    public final void setSource(String str) {
        this.source = str;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ImageSource(@NotNull Context context, String str, double d10) {
        this(context, str, d10, 0.0d, null, false, 56, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ImageSource(@NotNull Context context, String str, double d10, double d11) {
        this(context, str, d10, d11, null, false, 48, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ImageSource(@NotNull Context context, String str, double d10, double d11, @NotNull ImageCacheControl cacheControl) {
        this(context, str, d10, d11, cacheControl, false, 32, null);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cacheControl, "cacheControl");
    }

    public ImageSource(@NotNull Context context, String str, double d10, double d11, @NotNull ImageCacheControl cacheControl, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cacheControl, "cacheControl");
        this.source = str;
        this.cacheControl = cacheControl;
        this.isForceCached = z10;
        this.uri = computeUri(context);
        this.size = d10 * d11;
    }

    public /* synthetic */ ImageSource(Context context, String str, double d10, double d11, ImageCacheControl imageCacheControl, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, str, (i10 & 4) != 0 ? 0.0d : d10, (i10 & 8) != 0 ? 0.0d : d11, (i10 & 16) != 0 ? ImageCacheControl.DEFAULT : imageCacheControl, (i10 & 32) != 0 ? false : z10);
    }
}
