package com.discord.core;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.util.Size;
import android.widget.ImageView;
import androidx.recyclerview.widget.h;
import com.discord.crash_reporting.CrashReporting;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import ir.v;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import or.b;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.core.LocalImageThumbnailView$setLocalImageSource$1", f = "LocalImageThumbnailView.kt", l = {65}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LocalImageThumbnailView$setLocalImageSource$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ int $heightDp;
    final /* synthetic */ Uri $uri;
    final /* synthetic */ int $widthDp;
    int label;
    final /* synthetic */ LocalImageThumbnailView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LocalImageThumbnailView$setLocalImageSource$1(int i10, int i11, LocalImageThumbnailView localImageThumbnailView, Uri uri, Continuation<? super LocalImageThumbnailView$setLocalImageSource$1> continuation) {
        super(2, continuation);
        this.$widthDp = i10;
        this.$heightDp = i11;
        this.this$0 = localImageThumbnailView;
        this.$uri = uri;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new LocalImageThumbnailView$setLocalImageSource$1(this.$widthDp, this.$heightDp, this.this$0, this.$uri, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        SimpleDraweeView simpleDraweeView;
        Size size;
        int i10;
        ImageView imageView;
        SimpleDraweeView simpleDraweeView2;
        Object f10 = b.f();
        int i11 = this.label;
        try {
            if (i11 != 0) {
                if (i11 == 1) {
                    c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                c.b(obj);
                int dpToPx = SizeUtilsKt.getDpToPx(this.$widthDp);
                int dpToPx2 = SizeUtilsKt.getDpToPx(this.$heightDp);
                if (dpToPx != 0 && dpToPx2 != 0) {
                    size = new Size(dpToPx, dpToPx2);
                } else {
                    size = new Size(h.DEFAULT_DRAG_ANIMATION_DURATION, h.DEFAULT_DRAG_ANIMATION_DURATION);
                }
                ThumbnailLoader thumbnailLoader = ThumbnailLoader.INSTANCE;
                Context context = this.this$0.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                Uri uri = this.$uri;
                this.label = 1;
                obj = thumbnailLoader.loadThumbnail(context, uri, size, this);
                if (obj == f10) {
                    return f10;
                }
            }
            Bitmap bitmap = (Bitmap) obj;
            boolean z10 = false;
            if (bitmap != null) {
                i10 = bitmap.getAllocationByteCount();
            } else {
                i10 = 0;
            }
            if (i10 == 0) {
                z10 = true;
            }
            this.this$0.toggleImages(z10);
            if (!z10) {
                imageView = this.this$0.imageView;
                imageView.setImageBitmap(bitmap);
            } else {
                LocalImageThumbnailView localImageThumbnailView = this.this$0;
                simpleDraweeView2 = localImageThumbnailView.simpleDraweeView;
                localImageThumbnailView.loadDefaultBitmap(simpleDraweeView2, this.$uri);
            }
        } catch (Exception e10) {
            CrashReporting.addBreadcrumb$default(CrashReporting.INSTANCE, "DCDLocalImageThumbnail - Failed to load thumbnail", o0.m(v.a("exception", e10.toString()), v.a("url", this.$uri.toString())), null, null, false, 28, null);
            this.this$0.toggleImages(true);
            LocalImageThumbnailView localImageThumbnailView2 = this.this$0;
            simpleDraweeView = localImageThumbnailView2.simpleDraweeView;
            localImageThumbnailView2.loadDefaultBitmap(simpleDraweeView, this.$uri);
        }
        return Unit.f33282a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((LocalImageThumbnailView$setLocalImageSource$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
