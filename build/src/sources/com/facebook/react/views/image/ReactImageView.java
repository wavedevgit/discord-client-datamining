package com.facebook.react.views.image;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.Shader;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.widget.Toast;
import com.facebook.common.references.CloseableReference;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.drawee.controller.ControllerListener;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.generic.a;
import com.facebook.drawee.view.b;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.core.DownsampleMode;
import com.facebook.imagepipeline.image.ImageInfo;
import com.facebook.imagepipeline.postprocessors.IterativeBoxBlurPostProcessor;
import com.facebook.imagepipeline.request.BasePostprocessor;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.facebook.imagepipeline.request.Postprocessor;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.SoftAssertions;
import com.facebook.react.common.annotations.VisibleForTesting;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlags;
import com.facebook.react.modules.fresco.ImageCacheControl;
import com.facebook.react.modules.fresco.ReactNetworkImageRequest;
import com.facebook.react.uimanager.BackgroundStyleApplicator;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.LengthPercentageType;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.style.BorderRadiusProp;
import com.facebook.react.uimanager.style.LogicalEdge;
import com.facebook.react.util.RNLog;
import com.facebook.react.views.image.ImageLoadEvent;
import com.facebook.react.views.imagehelper.ImageSource;
import com.facebook.react.views.imagehelper.MultiSourceHelper;
import com.facebook.react.views.imagehelper.ResourceDrawableIdHelper;
import e9.d;
import i9.c;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import w8.f;
@Metadata(d1 = {"\u0000Ê\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010!\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 \u0097\u00012\u00020\u0001:\u0004\u0098\u0001\u0097\u0001B;\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0016\u0010\u0005\u001a\u0012\u0012\u0002\b\u0003\u0012\u0002\b\u0003\u0012\u0002\b\u0003\u0012\u0002\b\u00030\u0004\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\n\u0010\u000bJ\u0019\u0010\u000f\u001a\u00020\u000e2\b\u0010\r\u001a\u0004\u0018\u00010\fH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0012\u001a\u00020\u00112\u0006\u0010\r\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u0012\u0010\u0013J\u0017\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0015\u001a\u00020\u0014H\u0002¢\u0006\u0004\b\u0017\u0010\u0018J\u000f\u0010\u0019\u001a\u00020\u0014H\u0002¢\u0006\u0004\b\u0019\u0010\u001aJ!\u0010\u001f\u001a\u00020\u001e2\u0006\u0010\u001c\u001a\u00020\u001b2\b\b\u0002\u0010\u001d\u001a\u00020\u0014H\u0002¢\u0006\u0004\b\u001f\u0010 J\u000f\u0010!\u001a\u00020\u0016H\u0002¢\u0006\u0004\b!\u0010\"J\u0017\u0010$\u001a\u00020\u00142\u0006\u0010#\u001a\u00020\u001eH\u0002¢\u0006\u0004\b$\u0010%J\u0019\u0010'\u001a\u00020\u00162\b\u0010&\u001a\u0004\u0018\u00010\fH\u0002¢\u0006\u0004\b'\u0010(J\u0017\u0010)\u001a\u00020\u00162\b\u0010\t\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b)\u0010*J\u0015\u0010,\u001a\u00020\u00162\u0006\u0010+\u001a\u00020\u0014¢\u0006\u0004\b,\u0010\u0018J\u0015\u0010.\u001a\u00020\u00162\u0006\u0010-\u001a\u00020\u0014¢\u0006\u0004\b.\u0010\u0018J\u0015\u00101\u001a\u00020\u00162\u0006\u00100\u001a\u00020/¢\u0006\u0004\b1\u00102J\u0017\u00105\u001a\u00020\u00162\u0006\u00104\u001a\u000203H\u0016¢\u0006\u0004\b5\u00106J\u0015\u00108\u001a\u00020\u00162\u0006\u00107\u001a\u000203¢\u0006\u0004\b8\u00106J\u0015\u0010:\u001a\u00020\u00162\u0006\u00109\u001a\u000203¢\u0006\u0004\b:\u00106J\u0015\u0010<\u001a\u00020\u00162\u0006\u0010;\u001a\u00020/¢\u0006\u0004\b<\u00102J\u0015\u0010>\u001a\u00020\u00162\u0006\u0010=\u001a\u00020/¢\u0006\u0004\b>\u00102J\u001d\u0010>\u001a\u00020\u00162\u0006\u0010=\u001a\u00020/2\u0006\u0010?\u001a\u000203¢\u0006\u0004\b>\u0010@J\u0015\u0010C\u001a\u00020\u00162\u0006\u0010B\u001a\u00020A¢\u0006\u0004\bC\u0010DJ\u0015\u0010G\u001a\u00020\u00162\u0006\u0010F\u001a\u00020E¢\u0006\u0004\bG\u0010HJ\u0015\u0010K\u001a\u00020\u00162\u0006\u0010J\u001a\u00020I¢\u0006\u0004\bK\u0010LJ\u0015\u0010N\u001a\u00020\u00162\u0006\u0010M\u001a\u00020/¢\u0006\u0004\bN\u00102J\u0017\u0010Q\u001a\u00020\u00162\b\u0010P\u001a\u0004\u0018\u00010O¢\u0006\u0004\bQ\u0010RJ\u0017\u0010S\u001a\u00020\u00162\b\u0010\u001c\u001a\u0004\u0018\u00010\u001b¢\u0006\u0004\bS\u0010TJ\u0017\u0010U\u001a\u00020\u00162\b\u0010\u001c\u001a\u0004\u0018\u00010\u001b¢\u0006\u0004\bU\u0010TJ\u0015\u0010W\u001a\u00020\u00162\u0006\u0010V\u001a\u00020\u0014¢\u0006\u0004\bW\u0010\u0018J\u0015\u0010Y\u001a\u00020\u00162\u0006\u0010X\u001a\u000203¢\u0006\u0004\bY\u00106J\u0017\u0010[\u001a\u00020\u00162\b\u0010Z\u001a\u0004\u0018\u00010\u001b¢\u0006\u0004\b[\u0010TJ\u000f\u0010\\\u001a\u00020\u0014H\u0016¢\u0006\u0004\b\\\u0010\u001aJ\u0017\u0010_\u001a\u00020\u00162\u0006\u0010^\u001a\u00020]H\u0016¢\u0006\u0004\b_\u0010`J\r\u0010a\u001a\u00020\u0016¢\u0006\u0004\ba\u0010\"J\u001f\u0010e\u001a\u00020\u00162\u000e\u0010d\u001a\n\u0012\u0004\u0012\u00020c\u0018\u00010bH\u0007¢\u0006\u0004\be\u0010fJ/\u0010k\u001a\u00020\u00162\u0006\u0010g\u001a\u0002032\u0006\u0010h\u001a\u0002032\u0006\u0010i\u001a\u0002032\u0006\u0010j\u001a\u000203H\u0014¢\u0006\u0004\bk\u0010lR$\u0010\u0005\u001a\u0012\u0012\u0002\b\u0003\u0012\u0002\b\u0003\u0012\u0002\b\u0003\u0012\u0002\b\u00030\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0005\u0010mR\u0016\u0010\u0007\u001a\u0004\u0018\u00010\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0007\u0010nR\u0018\u0010\t\u001a\u0004\u0018\u00010\b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\t\u0010oR\u001a\u0010P\u001a\b\u0012\u0004\u0012\u00020\u001e0p8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bP\u0010qR$\u0010#\u001a\u0004\u0018\u00010\u001e8\u0000@\u0000X\u0080\u000e¢\u0006\u0012\n\u0004\b#\u0010r\u001a\u0004\bs\u0010t\"\u0004\bu\u0010vR\u0018\u0010w\u001a\u0004\u0018\u00010\u001e8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bw\u0010rR\u0018\u0010y\u001a\u0004\u0018\u00010x8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\by\u0010zR\u0018\u0010{\u001a\u0004\u0018\u00010x8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b{\u0010zR\u0016\u00109\u001a\u0002038\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b9\u0010|R\u0016\u0010B\u001a\u00020A8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bB\u0010}R\u0016\u0010F\u001a\u00020E8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bF\u0010~R\u0017\u0010\u007f\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b\u007f\u0010\u0080\u0001R\u0017\u0010+\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b+\u0010\u0080\u0001R \u0010\u0082\u0001\u001a\t\u0018\u00010\u0081\u0001R\u00020\u00008\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0082\u0001\u0010\u0083\u0001R\u001c\u0010\u0085\u0001\u001a\u0005\u0018\u00010\u0084\u00018\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0085\u0001\u0010\u0086\u0001R\"\u0010\u0088\u0001\u001a\u000b\u0012\u0004\u0012\u00020c\u0018\u00010\u0087\u00018\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0088\u0001\u0010\u0089\u0001R!\u0010\u008a\u0001\u001a\n\u0012\u0004\u0012\u00020c\u0018\u00010b8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008a\u0001\u0010\u008b\u0001R\u0018\u0010\u008c\u0001\u001a\u0002038\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b\u008c\u0001\u0010|R\u0019\u0010\u008d\u0001\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008d\u0001\u0010\u0080\u0001R\u0019\u0010Z\u001a\u0004\u0018\u00010\u001b8\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\bZ\u0010\u008e\u0001R\u0019\u0010\u008f\u0001\u001a\u00020/8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008f\u0001\u0010\u0090\u0001R\u0017\u0010J\u001a\u00020I8\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\bJ\u0010\u0091\u0001R\u0016\u0010\u0092\u0001\u001a\u00020\u00148BX\u0082\u0004¢\u0006\u0007\u001a\u0005\b\u0092\u0001\u0010\u001aR\u001a\u0010\u0096\u0001\u001a\u0005\u0018\u00010\u0093\u00018BX\u0082\u0004¢\u0006\b\u001a\u0006\b\u0094\u0001\u0010\u0095\u0001¨\u0006\u0099\u0001"}, d2 = {"Lcom/facebook/react/views/image/ReactImageView;", "Lcom/facebook/drawee/view/b;", "Landroid/content/Context;", "context", "Lcom/facebook/drawee/controller/AbstractDraweeControllerBuilder;", "draweeControllerBuilder", "Lcom/facebook/react/views/image/GlobalImageLoadListener;", "globalImageLoadListener", "", "callerContext", "<init>", "(Landroid/content/Context;Lcom/facebook/drawee/controller/AbstractDraweeControllerBuilder;Lcom/facebook/react/views/image/GlobalImageLoadListener;Ljava/lang/Object;)V", "", "cacheControl", "Lcom/facebook/react/modules/fresco/ImageCacheControl;", "computeCacheControl", "(Ljava/lang/String;)Lcom/facebook/react/modules/fresco/ImageCacheControl;", "Lcom/facebook/imagepipeline/request/ImageRequest$RequestLevel;", "computeRequestLevel", "(Lcom/facebook/react/modules/fresco/ImageCacheControl;)Lcom/facebook/imagepipeline/request/ImageRequest$RequestLevel;", "", "doResize", "", "maybeUpdateViewFromRequest", "(Z)V", "hasMultipleSources", "()Z", "Lcom/facebook/react/bridge/ReadableMap;", "source", "includeSize", "Lcom/facebook/react/views/imagehelper/ImageSource;", "readableMapToImageSource", "(Lcom/facebook/react/bridge/ReadableMap;Z)Lcom/facebook/react/views/imagehelper/ImageSource;", "setSourceImage", "()V", "imageSource", "shouldResize", "(Lcom/facebook/react/views/imagehelper/ImageSource;)Z", "uri", "warnImageSource", "(Ljava/lang/String;)V", "updateCallerContext", "(Ljava/lang/Object;)V", "useSmallCache", "setUseSmallCache", "shouldNotify", "setShouldNotifyLoadEvents", "", "blurRadius", "setBlurRadius", "(F)V", "", ViewProps.BACKGROUND_COLOR, "setBackgroundColor", "(I)V", ViewProps.BORDER_COLOR, "setBorderColor", "overlayColor", "setOverlayColor", ViewProps.BORDER_WIDTH, "setBorderWidth", "borderRadius", "setBorderRadius", ViewProps.POSITION, "(FI)V", "Lcom/facebook/drawee/drawable/ScalingUtils$ScaleType;", "scaleType", "setScaleType", "(Lcom/facebook/drawee/drawable/ScalingUtils$ScaleType;)V", "Landroid/graphics/Shader$TileMode;", "tileMode", "setTileMode", "(Landroid/graphics/Shader$TileMode;)V", "Lcom/facebook/react/views/image/ImageResizeMethod;", ViewProps.RESIZE_METHOD, "setResizeMethod", "(Lcom/facebook/react/views/image/ImageResizeMethod;)V", "multiplier", "setResizeMultiplier", "Lcom/facebook/react/bridge/ReadableArray;", "sources", "setSource", "(Lcom/facebook/react/bridge/ReadableArray;)V", "setDefaultSource", "(Lcom/facebook/react/bridge/ReadableMap;)V", "setLoadingIndicatorSource", ViewProps.ENABLED, "setProgressiveRenderingEnabled", "durationMs", "setFadeDuration", "headers", "setHeaders", "hasOverlappingRendering", "Landroid/graphics/Canvas;", "canvas", "onDraw", "(Landroid/graphics/Canvas;)V", "maybeUpdateView", "Lcom/facebook/drawee/controller/ControllerListener;", "Lcom/facebook/imagepipeline/image/ImageInfo;", "controllerListener", "setControllerListener", "(Lcom/facebook/drawee/controller/ControllerListener;)V", "w", "h", "oldw", "oldh", "onSizeChanged", "(IIII)V", "Lcom/facebook/drawee/controller/AbstractDraweeControllerBuilder;", "Lcom/facebook/react/views/image/GlobalImageLoadListener;", "Ljava/lang/Object;", "", "Ljava/util/List;", "Lcom/facebook/react/views/imagehelper/ImageSource;", "getImageSource$ReactAndroid_release", "()Lcom/facebook/react/views/imagehelper/ImageSource;", "setImageSource$ReactAndroid_release", "(Lcom/facebook/react/views/imagehelper/ImageSource;)V", "cachedImageSource", "Landroid/graphics/drawable/Drawable;", "defaultImageDrawable", "Landroid/graphics/drawable/Drawable;", "loadingImageDrawable", "I", "Lcom/facebook/drawee/drawable/ScalingUtils$ScaleType;", "Landroid/graphics/Shader$TileMode;", "isDirty", "Z", "Lcom/facebook/react/views/image/ReactImageView$TilePostprocessor;", "tilePostprocessor", "Lcom/facebook/react/views/image/ReactImageView$TilePostprocessor;", "Lcom/facebook/imagepipeline/postprocessors/IterativeBoxBlurPostProcessor;", "iterativeBoxBlurPostProcessor", "Lcom/facebook/imagepipeline/postprocessors/IterativeBoxBlurPostProcessor;", "Lcom/facebook/react/views/image/ReactImageDownloadListener;", "downloadListener", "Lcom/facebook/react/views/image/ReactImageDownloadListener;", "controllerForTesting", "Lcom/facebook/drawee/controller/ControllerListener;", "fadeDurationMs", "progressiveRenderingEnabled", "Lcom/facebook/react/bridge/ReadableMap;", "resizeMultiplier", "F", "Lcom/facebook/react/views/image/ImageResizeMethod;", "isTiled", "Lcom/facebook/imagepipeline/common/ResizeOptions;", "getResizeOptions", "()Lcom/facebook/imagepipeline/common/ResizeOptions;", "resizeOptions", "Companion", "TilePostprocessor", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactImageView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactImageView.kt\ncom/facebook/react/views/image/ReactImageView\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,685:1\n1#2:686\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactImageView extends b {
    public static final int REMOTE_IMAGE_FADE_DURATION_MS = 300;
    private ImageSource cachedImageSource;
    private Object callerContext;
    private ControllerListener controllerForTesting;
    private Drawable defaultImageDrawable;
    private ReactImageDownloadListener<ImageInfo> downloadListener;
    @NotNull
    private final AbstractDraweeControllerBuilder draweeControllerBuilder;
    private int fadeDurationMs;
    private final GlobalImageLoadListener globalImageLoadListener;
    private ReadableMap headers;
    private ImageSource imageSource;
    private boolean isDirty;
    private IterativeBoxBlurPostProcessor iterativeBoxBlurPostProcessor;
    private Drawable loadingImageDrawable;
    private int overlayColor;
    private boolean progressiveRenderingEnabled;
    @NotNull
    private ImageResizeMethod resizeMethod;
    private float resizeMultiplier;
    @NotNull
    private ScalingUtils$ScaleType scaleType;
    @NotNull
    private final List<ImageSource> sources;
    @NotNull
    private Shader.TileMode tileMode;
    private TilePostprocessor tilePostprocessor;
    private boolean useSmallCache;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Matrix tileMatrix = new Matrix();

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/facebook/react/views/image/ReactImageView$Companion;", "", "<init>", "()V", "REMOTE_IMAGE_FADE_DURATION_MS", "", "tileMatrix", "Landroid/graphics/Matrix;", "buildHierarchy", "Lcom/facebook/drawee/generic/GenericDraweeHierarchy;", "context", "Landroid/content/Context;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nReactImageView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactImageView.kt\ncom/facebook/react/views/image/ReactImageView$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,685:1\n1#2:686\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final GenericDraweeHierarchy buildHierarchy(Context context) {
            GenericDraweeHierarchyBuilder genericDraweeHierarchyBuilder = new GenericDraweeHierarchyBuilder(context.getResources());
            a c10 = a.c(0.0f);
            c10.u(true);
            GenericDraweeHierarchy a10 = genericDraweeHierarchyBuilder.K(c10).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            return a10;
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\b\u0082\u0004\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u001e\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\b\u001a\u00020\tH\u0016¨\u0006\n"}, d2 = {"Lcom/facebook/react/views/image/ReactImageView$TilePostprocessor;", "Lcom/facebook/imagepipeline/request/BasePostprocessor;", "<init>", "(Lcom/facebook/react/views/image/ReactImageView;)V", "process", "Lcom/facebook/common/references/CloseableReference;", "Landroid/graphics/Bitmap;", "source", "bitmapFactory", "Lcom/facebook/imagepipeline/bitmaps/PlatformBitmapFactory;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class TilePostprocessor extends BasePostprocessor {
        public TilePostprocessor() {
        }

        @Override // com.facebook.imagepipeline.request.BasePostprocessor, com.facebook.imagepipeline.request.Postprocessor
        @NotNull
        public CloseableReference process(@NotNull Bitmap source, @NotNull PlatformBitmapFactory bitmapFactory) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(bitmapFactory, "bitmapFactory");
            Rect rect = new Rect(0, 0, ReactImageView.this.getWidth(), ReactImageView.this.getHeight());
            ReactImageView.this.scaleType.getTransform(ReactImageView.tileMatrix, rect, source.getWidth(), source.getHeight(), 0.0f, 0.0f);
            Paint paint = new Paint();
            paint.setAntiAlias(true);
            BitmapShader bitmapShader = new BitmapShader(source, ReactImageView.this.tileMode, ReactImageView.this.tileMode);
            bitmapShader.setLocalMatrix(ReactImageView.tileMatrix);
            paint.setShader(bitmapShader);
            CloseableReference a10 = bitmapFactory.a(ReactImageView.this.getWidth(), ReactImageView.this.getHeight());
            Intrinsics.checkNotNullExpressionValue(a10, "createBitmap(...)");
            try {
                new Canvas((Bitmap) a10.C0()).drawRect(rect, paint);
                CloseableReference clone = a10.clone();
                Intrinsics.checkNotNullExpressionValue(clone, "clone(...)");
                return clone;
            } finally {
                CloseableReference.N(a10);
            }
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[ImageCacheControl.values().length];
            try {
                iArr[ImageCacheControl.ONLY_IF_CACHED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[ImageResizeMethod.values().length];
            try {
                iArr2[ImageResizeMethod.AUTO.ordinal()] = 1;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr2[ImageResizeMethod.RESIZE.ordinal()] = 2;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactImageView(@NotNull Context context, @NotNull AbstractDraweeControllerBuilder draweeControllerBuilder, GlobalImageLoadListener globalImageLoadListener, Object obj) {
        super(context, Companion.buildHierarchy(context));
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(draweeControllerBuilder, "draweeControllerBuilder");
        this.draweeControllerBuilder = draweeControllerBuilder;
        this.globalImageLoadListener = globalImageLoadListener;
        this.callerContext = obj;
        this.sources = new ArrayList();
        this.scaleType = ImageResizeMode.defaultValue();
        this.tileMode = ImageResizeMode.defaultTileMode();
        this.fadeDurationMs = -1;
        this.resizeMultiplier = 1.0f;
        this.resizeMethod = ImageResizeMethod.AUTO;
        setLegacyVisibilityHandlingEnabled(true);
    }

    /* JADX WARN: Code restructure failed: missing block: B:7:0x0010, code lost:
        if (r2.equals("default") == false) goto L19;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final com.facebook.react.modules.fresco.ImageCacheControl computeCacheControl(java.lang.String r2) {
        /*
            r1 = this;
            if (r2 == 0) goto L39
            int r0 = r2.hashCode()
            switch(r0) {
                case -1564134880: goto L2b;
                case -934641255: goto L1f;
                case 706834161: goto L13;
                case 1544803905: goto La;
                default: goto L9;
            }
        L9:
            goto L33
        La:
            java.lang.String r0 = "default"
            boolean r2 = r2.equals(r0)
            if (r2 != 0) goto L39
            goto L33
        L13:
            java.lang.String r0 = "only-if-cached"
            boolean r2 = r2.equals(r0)
            if (r2 != 0) goto L1c
            goto L33
        L1c:
            com.facebook.react.modules.fresco.ImageCacheControl r2 = com.facebook.react.modules.fresco.ImageCacheControl.ONLY_IF_CACHED
            return r2
        L1f:
            java.lang.String r0 = "reload"
            boolean r2 = r2.equals(r0)
            if (r2 != 0) goto L28
            goto L33
        L28:
            com.facebook.react.modules.fresco.ImageCacheControl r2 = com.facebook.react.modules.fresco.ImageCacheControl.RELOAD
            return r2
        L2b:
            java.lang.String r0 = "force-cache"
            boolean r2 = r2.equals(r0)
            if (r2 != 0) goto L36
        L33:
            com.facebook.react.modules.fresco.ImageCacheControl r2 = com.facebook.react.modules.fresco.ImageCacheControl.DEFAULT
            return r2
        L36:
            com.facebook.react.modules.fresco.ImageCacheControl r2 = com.facebook.react.modules.fresco.ImageCacheControl.FORCE_CACHE
            return r2
        L39:
            com.facebook.react.modules.fresco.ImageCacheControl r2 = com.facebook.react.modules.fresco.ImageCacheControl.DEFAULT
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.image.ReactImageView.computeCacheControl(java.lang.String):com.facebook.react.modules.fresco.ImageCacheControl");
    }

    private final ImageRequest.RequestLevel computeRequestLevel(ImageCacheControl imageCacheControl) {
        if (WhenMappings.$EnumSwitchMapping$0[imageCacheControl.ordinal()] == 1) {
            return ImageRequest.RequestLevel.DISK_CACHE;
        }
        return ImageRequest.RequestLevel.FULL_FETCH;
    }

    private final ResizeOptions getResizeOptions() {
        int round = Math.round(getWidth() * this.resizeMultiplier);
        int round2 = Math.round(getHeight() * this.resizeMultiplier);
        if (round > 0 && round2 > 0) {
            return new ResizeOptions(round, round2, 0.0f, 0.0f, 12, null);
        }
        return null;
    }

    private final boolean hasMultipleSources() {
        if (this.sources.size() > 1) {
            return true;
        }
        return false;
    }

    private final boolean isTiled() {
        if (this.tileMode != Shader.TileMode.CLAMP) {
            return true;
        }
        return false;
    }

    private final void maybeUpdateViewFromRequest(boolean z10) {
        ResizeOptions resizeOptions;
        ImageSource imageSource = this.imageSource;
        if (imageSource == null) {
            return;
        }
        Uri uri = imageSource.getUri();
        ImageCacheControl cacheControl = imageSource.getCacheControl();
        ImageRequest.RequestLevel computeRequestLevel = computeRequestLevel(cacheControl);
        ArrayList arrayList = new ArrayList();
        IterativeBoxBlurPostProcessor iterativeBoxBlurPostProcessor = this.iterativeBoxBlurPostProcessor;
        if (iterativeBoxBlurPostProcessor != null) {
            arrayList.add(iterativeBoxBlurPostProcessor);
        }
        TilePostprocessor tilePostprocessor = this.tilePostprocessor;
        if (tilePostprocessor != null) {
            arrayList.add(tilePostprocessor);
        }
        Postprocessor from = MultiPostprocessor.Companion.from(arrayList);
        if (z10) {
            resizeOptions = getResizeOptions();
        } else {
            resizeOptions = null;
        }
        if (cacheControl == ImageCacheControl.RELOAD) {
            d.a().g(uri);
        }
        ImageRequestBuilder I = ImageRequestBuilder.x(uri).J(from).N(resizeOptions).y(true).K(this.progressiveRenderingEnabled).I(computeRequestLevel);
        ImageResizeMethod imageResizeMethod = this.resizeMethod;
        ImageResizeMethod imageResizeMethod2 = ImageResizeMethod.NONE;
        if (imageResizeMethod == imageResizeMethod2) {
            I.E(DownsampleMode.f10080i);
        }
        if (this.useSmallCache) {
            I.A(ImageRequest.CacheChoice.SMALL);
        } else {
            I.A(ImageRequest.CacheChoice.DEFAULT);
        }
        ReactNetworkImageRequest.Companion companion = ReactNetworkImageRequest.Companion;
        Intrinsics.checkNotNull(I);
        ReactNetworkImageRequest fromBuilderWithHeaders = companion.fromBuilderWithHeaders(I, this.headers, cacheControl);
        GlobalImageLoadListener globalImageLoadListener = this.globalImageLoadListener;
        if (globalImageLoadListener != null) {
            globalImageLoadListener.onLoadAttempt(uri);
        }
        AbstractDraweeControllerBuilder abstractDraweeControllerBuilder = this.draweeControllerBuilder;
        Intrinsics.checkNotNull(abstractDraweeControllerBuilder, "null cannot be cast to non-null type com.facebook.drawee.controller.AbstractDraweeControllerBuilder<*, com.facebook.imagepipeline.request.ImageRequest, com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, com.facebook.imagepipeline.image.ImageInfo>");
        abstractDraweeControllerBuilder.z();
        abstractDraweeControllerBuilder.E(fromBuilderWithHeaders).A(true).b(getController());
        Object obj = this.callerContext;
        if (obj != null) {
            Intrinsics.checkNotNullExpressionValue(abstractDraweeControllerBuilder.B(obj), "setCallerContext(...)");
        }
        ImageSource imageSource2 = this.cachedImageSource;
        if (imageSource2 != null) {
            ImageRequestBuilder K = ImageRequestBuilder.x(imageSource2.getUri()).J(from).N(resizeOptions).y(true).K(this.progressiveRenderingEnabled);
            if (this.resizeMethod == imageResizeMethod2) {
                K.E(DownsampleMode.f10080i);
            }
            if (this.useSmallCache) {
                K.A(ImageRequest.CacheChoice.SMALL);
            } else {
                K.A(ImageRequest.CacheChoice.DEFAULT);
            }
            Intrinsics.checkNotNullExpressionValue(abstractDraweeControllerBuilder.F(K.a()), "setLowResImageRequest(...)");
        }
        ReactImageDownloadListener<ImageInfo> reactImageDownloadListener = this.downloadListener;
        if (reactImageDownloadListener != null && this.controllerForTesting != null) {
            c cVar = new c();
            cVar.a(this.downloadListener);
            cVar.a(this.controllerForTesting);
            abstractDraweeControllerBuilder.D(cVar);
        } else {
            ControllerListener controllerListener = this.controllerForTesting;
            if (controllerListener != null) {
                abstractDraweeControllerBuilder.D(controllerListener);
            } else if (reactImageDownloadListener != null) {
                abstractDraweeControllerBuilder.D(reactImageDownloadListener);
            }
        }
        if (this.downloadListener != null) {
            ((GenericDraweeHierarchy) getHierarchy()).C(this.downloadListener);
        }
        setController(abstractDraweeControllerBuilder.build());
        abstractDraweeControllerBuilder.z();
    }

    private final ImageSource readableMapToImageSource(ReadableMap readableMap, boolean z10) {
        ImageSource imageSource;
        double d10;
        boolean z11;
        ImageCacheControl computeCacheControl = computeCacheControl(readableMap.getString("cache"));
        String string = readableMap.getString("uri");
        if (z10) {
            double d11 = 0.0d;
            if (readableMap.hasKey("width")) {
                d10 = readableMap.getDouble("width");
            } else {
                d10 = 0.0d;
            }
            if (readableMap.hasKey("height")) {
                d11 = readableMap.getDouble("height");
            }
            double d12 = d11;
            if (readableMap.hasKey("isForceCached")) {
                z11 = readableMap.getBoolean("isForceCached");
            } else {
                z11 = false;
            }
            boolean z12 = z11;
            double d13 = d10;
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            imageSource = new ImageSource(context, string, d13, d12, computeCacheControl, z12);
        } else {
            Context context2 = getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            imageSource = new ImageSource(context2, string, 0.0d, 0.0d, computeCacheControl, false, 44, null);
        }
        if (Intrinsics.areEqual(Uri.EMPTY, imageSource.getUri())) {
            warnImageSource(string);
            ImageSource.Companion companion = ImageSource.Companion;
            Context context3 = getContext();
            Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
            return companion.getTransparentBitmapImageSource(context3);
        }
        return imageSource;
    }

    static /* synthetic */ ImageSource readableMapToImageSource$default(ReactImageView reactImageView, ReadableMap readableMap, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return reactImageView.readableMapToImageSource(readableMap, z10);
    }

    private final void setSourceImage() {
        this.imageSource = null;
        if (this.sources.isEmpty()) {
            List<ImageSource> list = this.sources;
            ImageSource.Companion companion = ImageSource.Companion;
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            list.add(companion.getTransparentBitmapImageSource(context));
        } else if (hasMultipleSources()) {
            MultiSourceHelper.MultiSourceResult bestSourceForSize = MultiSourceHelper.getBestSourceForSize(getWidth(), getHeight(), this.sources);
            this.imageSource = bestSourceForSize.bestResult;
            this.cachedImageSource = bestSourceForSize.bestResultInCache;
            return;
        }
        this.imageSource = this.sources.get(0);
    }

    private final boolean shouldResize(ImageSource imageSource) {
        int i10 = WhenMappings.$EnumSwitchMapping$1[this.resizeMethod.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                return false;
            }
            return true;
        } else if (!f.m(imageSource.getUri()) && !f.n(imageSource.getUri())) {
            return false;
        } else {
            return true;
        }
    }

    private final void warnImageSource(String str) {
        if (ReactBuildConfig.DEBUG && !ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture()) {
            Context context = getContext();
            Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
            RNLog.w((ReactContext) context, "ReactImageView: Image source \"" + str + "\" doesn't exist");
            Context context2 = getContext();
            Toast.makeText(context2, "Warning: Image source \"" + str + "\" doesn't exist", 0).show();
        }
    }

    public final ImageSource getImageSource$ReactAndroid_release() {
        return this.imageSource;
    }

    @Override // android.widget.ImageView, android.view.View
    public boolean hasOverlappingRendering() {
        return false;
    }

    public final void maybeUpdateView() {
        if (this.isDirty) {
            if (!hasMultipleSources() || (getWidth() > 0 && getHeight() > 0)) {
                setSourceImage();
                ImageSource imageSource = this.imageSource;
                if (imageSource != null) {
                    boolean shouldResize = shouldResize(imageSource);
                    if (!shouldResize || (getWidth() > 0 && getHeight() > 0)) {
                        if (isTiled() && (getWidth() <= 0 || getHeight() <= 0)) {
                            return;
                        }
                        GenericDraweeHierarchy genericDraweeHierarchy = (GenericDraweeHierarchy) getHierarchy();
                        genericDraweeHierarchy.t(this.scaleType);
                        Drawable drawable = this.defaultImageDrawable;
                        if (drawable != null) {
                            genericDraweeHierarchy.A(drawable, this.scaleType);
                        }
                        Drawable drawable2 = this.loadingImageDrawable;
                        if (drawable2 != null) {
                            genericDraweeHierarchy.A(drawable2, ScalingUtils$ScaleType.f9636g);
                        }
                        a o10 = genericDraweeHierarchy.o();
                        if (o10 != null) {
                            int i10 = this.overlayColor;
                            if (i10 != 0) {
                                o10.s(i10);
                            } else {
                                o10.w(a.EnumC0137a.BITMAP_ONLY);
                            }
                            genericDraweeHierarchy.D(o10);
                        }
                        int i11 = this.fadeDurationMs;
                        if (i11 < 0) {
                            if (imageSource.isResource()) {
                                i11 = 0;
                            } else {
                                i11 = REMOTE_IMAGE_FADE_DURATION_MS;
                            }
                        }
                        genericDraweeHierarchy.w(i11);
                        maybeUpdateViewFromRequest(shouldResize);
                        this.isDirty = false;
                    }
                }
            }
        }
    }

    @Override // android.widget.ImageView, android.view.View
    public void onDraw(@NotNull Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        BackgroundStyleApplicator.clipToPaddingBox(this, canvas);
        try {
            super.onDraw(canvas);
        } catch (RuntimeException e10) {
            if (this.downloadListener != null) {
                Context context = getContext();
                Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
                EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
                if (eventDispatcherForReactTag != null) {
                    eventDispatcherForReactTag.dispatchEvent(ImageLoadEvent.Companion.createErrorEvent(UIManagerHelper.getSurfaceId(this), getId(), e10));
                }
            }
        }
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        boolean z10;
        super.onSizeChanged(i10, i11, i12, i13);
        if (i10 > 0 && i11 > 0) {
            if (!this.isDirty && !hasMultipleSources() && !isTiled()) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.isDirty = z10;
            maybeUpdateView();
        }
    }

    @Override // android.view.View
    public void setBackgroundColor(int i10) {
        BackgroundStyleApplicator.setBackgroundColor(this, Integer.valueOf(i10));
    }

    public final void setBlurRadius(float f10) {
        IterativeBoxBlurPostProcessor iterativeBoxBlurPostProcessor;
        int dpToPx = ((int) PixelUtil.INSTANCE.dpToPx(f10)) / 2;
        if (dpToPx == 0) {
            iterativeBoxBlurPostProcessor = null;
        } else {
            iterativeBoxBlurPostProcessor = new IterativeBoxBlurPostProcessor(2, dpToPx);
        }
        this.iterativeBoxBlurPostProcessor = iterativeBoxBlurPostProcessor;
        this.isDirty = true;
    }

    public final void setBorderColor(int i10) {
        BackgroundStyleApplicator.setBorderColor(this, LogicalEdge.ALL, Integer.valueOf(i10));
    }

    public final void setBorderRadius(float f10) {
        BackgroundStyleApplicator.setBorderRadius(this, BorderRadiusProp.BORDER_RADIUS, Float.isNaN(f10) ? null : new LengthPercentage(PixelUtil.INSTANCE.pxToDp(f10), LengthPercentageType.POINT));
    }

    public final void setBorderWidth(float f10) {
        BackgroundStyleApplicator.setBorderWidth(this, LogicalEdge.ALL, Float.valueOf(f10));
    }

    @VisibleForTesting
    public final void setControllerListener(ControllerListener controllerListener) {
        this.controllerForTesting = controllerListener;
        this.isDirty = true;
        maybeUpdateView();
    }

    public final void setDefaultSource(ReadableMap readableMap) {
        Drawable drawable;
        if (readableMap != null) {
            ImageSource readableMapToImageSource = readableMapToImageSource(readableMap, false);
            Uri uri = readableMapToImageSource.getUri();
            SoftAssertions.assertCondition(!readableMapToImageSource.isResource(), "ReactImageView: Only local resources can be used as default image. Uri: " + uri);
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            drawable = ResourceDrawableIdHelper.getResourceDrawable(context, readableMapToImageSource.getSource());
        } else {
            drawable = null;
        }
        if (!Intrinsics.areEqual(this.defaultImageDrawable, drawable)) {
            this.defaultImageDrawable = drawable;
            this.isDirty = true;
        }
    }

    public final void setFadeDuration(int i10) {
        this.fadeDurationMs = i10;
    }

    public final void setHeaders(ReadableMap readableMap) {
        this.headers = readableMap;
    }

    public final void setImageSource$ReactAndroid_release(ImageSource imageSource) {
        this.imageSource = imageSource;
    }

    public final void setLoadingIndicatorSource(ReadableMap readableMap) {
        Drawable drawable;
        com.facebook.drawee.drawable.b bVar = null;
        if (readableMap != null) {
            ImageSource readableMapToImageSource = readableMapToImageSource(readableMap, false);
            SoftAssertions.assertCondition(!readableMapToImageSource.isResource(), "ReactImageView: Only local resources can be used as default image. Uri: " + readableMapToImageSource.getUri());
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            drawable = ResourceDrawableIdHelper.getResourceDrawable(context, readableMapToImageSource.getSource());
        } else {
            drawable = null;
        }
        if (drawable != null) {
            bVar = new com.facebook.drawee.drawable.b(drawable, 1000);
        }
        if (!Intrinsics.areEqual(this.loadingImageDrawable, bVar)) {
            this.loadingImageDrawable = bVar;
            this.isDirty = true;
        }
    }

    public final void setOverlayColor(int i10) {
        if (this.overlayColor != i10) {
            this.overlayColor = i10;
            this.isDirty = true;
        }
    }

    public final void setProgressiveRenderingEnabled(boolean z10) {
        this.progressiveRenderingEnabled = z10;
    }

    public final void setResizeMethod(@NotNull ImageResizeMethod resizeMethod) {
        Intrinsics.checkNotNullParameter(resizeMethod, "resizeMethod");
        if (this.resizeMethod != resizeMethod) {
            this.resizeMethod = resizeMethod;
            this.isDirty = true;
        }
    }

    public final void setResizeMultiplier(float f10) {
        if (Math.abs(this.resizeMultiplier - f10) > 9.999999747378752E-5d) {
            this.resizeMultiplier = f10;
            this.isDirty = true;
        }
    }

    public final void setScaleType(@NotNull ScalingUtils$ScaleType scaleType) {
        Intrinsics.checkNotNullParameter(scaleType, "scaleType");
        if (this.scaleType != scaleType) {
            this.scaleType = scaleType;
            this.isDirty = true;
        }
    }

    public final void setShouldNotifyLoadEvents(boolean z10) {
        boolean z11;
        if (this.downloadListener != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 == z11) {
            return;
        }
        if (!z10) {
            this.downloadListener = null;
        } else {
            Context context = getContext();
            Intrinsics.checkNotNull(context, "null cannot be cast to non-null type com.facebook.react.bridge.ReactContext");
            final EventDispatcher eventDispatcherForReactTag = UIManagerHelper.getEventDispatcherForReactTag((ReactContext) context, getId());
            this.downloadListener = new ReactImageDownloadListener<ImageInfo>() { // from class: com.facebook.react.views.image.ReactImageView$setShouldNotifyLoadEvents$1
                @Override // com.facebook.react.views.image.ReactImageDownloadListener, com.facebook.drawee.controller.ControllerListener
                public void onFailure(String id2, Throwable throwable) {
                    Intrinsics.checkNotNullParameter(id2, "id");
                    Intrinsics.checkNotNullParameter(throwable, "throwable");
                    EventDispatcher eventDispatcher = EventDispatcher.this;
                    if (eventDispatcher == null) {
                        return;
                    }
                    eventDispatcher.dispatchEvent(ImageLoadEvent.Companion.createErrorEvent(UIManagerHelper.getSurfaceId(this), this.getId(), throwable));
                }

                @Override // com.facebook.react.views.image.ReactImageDownloadListener
                public void onProgressChange(int i10, int i11) {
                    String str;
                    if (EventDispatcher.this != null && this.getImageSource$ReactAndroid_release() != null) {
                        EventDispatcher eventDispatcher = EventDispatcher.this;
                        ImageLoadEvent.Companion companion = ImageLoadEvent.Companion;
                        int surfaceId = UIManagerHelper.getSurfaceId(this);
                        int id2 = this.getId();
                        ImageSource imageSource$ReactAndroid_release = this.getImageSource$ReactAndroid_release();
                        if (imageSource$ReactAndroid_release != null) {
                            str = imageSource$ReactAndroid_release.getSource();
                        } else {
                            str = null;
                        }
                        eventDispatcher.dispatchEvent(companion.createProgressEvent(surfaceId, id2, str, i10, i11));
                    }
                }

                @Override // com.facebook.react.views.image.ReactImageDownloadListener, com.facebook.drawee.controller.ControllerListener
                public void onSubmit(String id2, Object obj) {
                    Intrinsics.checkNotNullParameter(id2, "id");
                    EventDispatcher eventDispatcher = EventDispatcher.this;
                    if (eventDispatcher == null) {
                        return;
                    }
                    eventDispatcher.dispatchEvent(ImageLoadEvent.Companion.createLoadStartEvent(UIManagerHelper.getSurfaceId(this), this.getId()));
                }

                @Override // com.facebook.react.views.image.ReactImageDownloadListener, com.facebook.drawee.controller.ControllerListener
                public void onFinalImageSet(String id2, ImageInfo imageInfo, Animatable animatable) {
                    EventDispatcher eventDispatcher;
                    Intrinsics.checkNotNullParameter(id2, "id");
                    if (imageInfo == null || this.getImageSource$ReactAndroid_release() == null || (eventDispatcher = EventDispatcher.this) == null) {
                        return;
                    }
                    ImageLoadEvent.Companion companion = ImageLoadEvent.Companion;
                    int surfaceId = UIManagerHelper.getSurfaceId(this);
                    int id3 = this.getId();
                    ImageSource imageSource$ReactAndroid_release = this.getImageSource$ReactAndroid_release();
                    eventDispatcher.dispatchEvent(companion.createLoadEvent(surfaceId, id3, imageSource$ReactAndroid_release != null ? imageSource$ReactAndroid_release.getSource() : null, imageInfo.getWidth(), imageInfo.getHeight()));
                    EventDispatcher.this.dispatchEvent(companion.createLoadEndEvent(UIManagerHelper.getSurfaceId(this), this.getId()));
                }
            };
        }
        this.isDirty = true;
    }

    public final void setSource(ReadableArray readableArray) {
        ArrayList arrayList = new ArrayList();
        if (readableArray != null && readableArray.size() != 0) {
            if (readableArray.size() == 1) {
                ReadableMap map = readableArray.getMap(0);
                if (map != null) {
                    arrayList.add(readableMapToImageSource(map, false));
                } else {
                    throw new IllegalStateException("Required value was null.");
                }
            } else {
                int size = readableArray.size();
                for (int i10 = 0; i10 < size; i10++) {
                    ReadableMap map2 = readableArray.getMap(i10);
                    if (map2 != null) {
                        arrayList.add(readableMapToImageSource(map2, true));
                    }
                }
            }
        } else {
            ImageSource.Companion companion = ImageSource.Companion;
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            arrayList.add(companion.getTransparentBitmapImageSource(context));
        }
        if (Intrinsics.areEqual(this.sources, arrayList)) {
            return;
        }
        this.sources.clear();
        this.sources.addAll(arrayList);
        this.isDirty = true;
    }

    public final void setTileMode(@NotNull Shader.TileMode tileMode) {
        TilePostprocessor tilePostprocessor;
        Intrinsics.checkNotNullParameter(tileMode, "tileMode");
        if (this.tileMode != tileMode) {
            this.tileMode = tileMode;
            if (isTiled()) {
                tilePostprocessor = new TilePostprocessor();
            } else {
                tilePostprocessor = null;
            }
            this.tilePostprocessor = tilePostprocessor;
            this.isDirty = true;
        }
    }

    public final void setUseSmallCache(boolean z10) {
        if (this.useSmallCache != z10) {
            this.useSmallCache = z10;
            this.isDirty = true;
        }
    }

    public final void updateCallerContext(Object obj) {
        if (!Intrinsics.areEqual(this.callerContext, obj)) {
            this.callerContext = obj;
            this.isDirty = true;
        }
    }

    public final void setBorderRadius(float f10, int i10) {
        BackgroundStyleApplicator.setBorderRadius(this, BorderRadiusProp.values()[i10], Float.isNaN(f10) ? null : new LengthPercentage(PixelUtil.INSTANCE.pxToDp(f10), LengthPercentageType.POINT));
    }
}
