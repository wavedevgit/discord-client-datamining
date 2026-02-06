package com.discord.core;

import android.content.Context;
import android.net.Uri;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import e9.d;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import os.i;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0003\u0018\u0000 \u001a2\u00020\u0001:\u0001\u001aB'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\f\u0010\u000e\u001a\u00020\u000f*\u00020\u0010H\u0002J\u001e\u0010\u0011\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00072\u0006\u0010\u0015\u001a\u00020\u0007J\u0010\u0010\u0016\u001a\u00020\u000f2\u0006\u0010\u0017\u001a\u00020\u0018H\u0002J\u0014\u0010\u0019\u001a\u00020\u000f*\u00020\r2\u0006\u0010\u0012\u001a\u00020\u0013H\u0002R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001b"}, d2 = {"Lcom/discord/core/LocalImageThumbnailView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "imageView", "Landroid/widget/ImageView;", "simpleDraweeView", "Lcom/facebook/drawee/view/SimpleDraweeView;", "addToParent", "", "Landroid/view/View;", "setLocalImageSource", "uri", "Landroid/net/Uri;", "widthDp", "heightDp", "toggleImages", "showSimpleDraweeView", "", "loadDefaultBitmap", "Companion", "core_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nLocalImageThumbnailView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LocalImageThumbnailView.kt\ncom/discord/core/LocalImageThumbnailView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,116:1\n257#2,2:117\n257#2,2:119\n*S KotlinDebug\n*F\n+ 1 LocalImageThumbnailView.kt\ncom/discord/core/LocalImageThumbnailView\n*L\n97#1:117,2\n98#1:119,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LocalImageThumbnailView extends FrameLayout {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int DEFAULT_SIZE = 200;
    @NotNull
    private ImageView imageView;
    @NotNull
    private SimpleDraweeView simpleDraweeView;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/core/LocalImageThumbnailView$Companion;", "", "<init>", "()V", "DEFAULT_SIZE", "", "core_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public LocalImageThumbnailView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void addToParent(View view) {
        view.setLayoutParams(new FrameLayout.LayoutParams(-1, -1));
        addView(view);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void loadDefaultBitmap(SimpleDraweeView simpleDraweeView, Uri uri) {
        simpleDraweeView.setController(((PipelineDraweeControllerBuilder) d.g().E(ImageRequestBuilder.x(uri).N(ResizeOptions.f10345e.a(simpleDraweeView.getWidth(), simpleDraweeView.getHeight())).a())).build());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void toggleImages(boolean z10) {
        int i10;
        SimpleDraweeView simpleDraweeView = this.simpleDraweeView;
        int i11 = 8;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        simpleDraweeView.setVisibility(i10);
        ImageView imageView = this.imageView;
        if (!z10) {
            i11 = 0;
        }
        imageView.setVisibility(i11);
    }

    public final void setLocalImageSource(@NotNull Uri uri, int i10, int i11) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        i.d(CoroutineViewUtilsKt.getAttachedScope(this), null, null, new LocalImageThumbnailView$setLocalImageSource$1(i10, i11, this, uri, null), 3, null);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public LocalImageThumbnailView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ LocalImageThumbnailView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LocalImageThumbnailView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        ImageView imageView = new ImageView(context);
        addToParent(imageView);
        imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
        this.imageView = imageView;
        SimpleDraweeView simpleDraweeView = new SimpleDraweeView(context);
        addToParent(simpleDraweeView);
        ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).t(ScalingUtils$ScaleType.f9922i);
        this.simpleDraweeView = simpleDraweeView;
    }
}
