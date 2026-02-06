package com.discord.image.fresco;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import com.discord.image.fresco.postprocessors.PostProcessor;
import com.facebook.datasource.DataSource;
import com.facebook.imagepipeline.core.DefaultExecutorSupplier;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import e9.d;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.g;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.e;
import oa.b;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\u001a=\u0010\t\u001a\u00020\u0007*\u00020\u00002\b\u0010\u0002\u001a\u0004\u0018\u00010\u00012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\u0014\u0010\b\u001a\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u0006\u0012\u0004\u0012\u00020\u00070\u0005¢\u0006\u0004\b\t\u0010\n\u001a=\u0010\t\u001a\u00020\u0007*\u00020\u00002\b\u0010\u0002\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\u0014\u0010\b\u001a\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u0006\u0012\u0004\u0012\u00020\u00070\u0005¢\u0006\u0004\b\t\u0010\f\u001a6\u0010\t\u001a\u0004\u0018\u00010\u0006*\u00020\u00002\b\u0010\u0002\u001a\u0004\u0018\u00010\u00012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u000e\u001a\u00020\rH\u0086@¢\u0006\u0004\b\t\u0010\u000f\u001a6\u0010\t\u001a\u0004\u0018\u00010\u0006*\u00020\u00002\b\u0010\u0002\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u000e\u001a\u00020\rH\u0086@¢\u0006\u0004\b\t\u0010\u0010\"\u0014\u0010\u0012\u001a\u00020\u00118\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0013¨\u0006\u0014"}, d2 = {"Landroid/content/Context;", "", "uri", "Lcom/discord/image/fresco/postprocessors/PostProcessor;", "postProcessor", "Lkotlin/Function1;", "Landroid/graphics/Bitmap;", "", "onDecodedImage", "fetchDecodedImage", "(Landroid/content/Context;Ljava/lang/String;Lcom/discord/image/fresco/postprocessors/PostProcessor;Lkotlin/jvm/functions/Function1;)V", "Landroid/net/Uri;", "(Landroid/content/Context;Landroid/net/Uri;Lcom/discord/image/fresco/postprocessors/PostProcessor;Lkotlin/jvm/functions/Function1;)V", "", "copyBitmap", "(Landroid/content/Context;Ljava/lang/String;Lcom/discord/image/fresco/postprocessors/PostProcessor;ZLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "(Landroid/content/Context;Landroid/net/Uri;Lcom/discord/image/fresco/postprocessors/PostProcessor;ZLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Lcom/facebook/imagepipeline/core/DefaultExecutorSupplier;", "executorSupplier", "Lcom/facebook/imagepipeline/core/DefaultExecutorSupplier;", "fresco_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFrescoFetchDecodedImage.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FrescoFetchDecodedImage.kt\ncom/discord/image/fresco/FrescoFetchDecodedImageKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 Uri.kt\nandroidx/core/net/UriKt\n+ 4 CancellableContinuation.kt\nkotlinx/coroutines/CancellableContinuationKt\n*L\n1#1,109:1\n1#2:110\n29#3:111\n29#3:112\n426#4,11:113\n*S KotlinDebug\n*F\n+ 1 FrescoFetchDecodedImage.kt\ncom/discord/image/fresco/FrescoFetchDecodedImageKt\n*L\n28#1:111\n66#1:112\n75#1:113,11\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FrescoFetchDecodedImageKt {
    @NotNull
    private static final DefaultExecutorSupplier executorSupplier = new DefaultExecutorSupplier(3);

    public static final void fetchDecodedImage(@NotNull Context context, String str, PostProcessor postProcessor, @NotNull Function1<? super Bitmap, Unit> onDecodedImage) {
        Object b10;
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(onDecodedImage, "onDecodedImage");
        try {
            Result.a aVar = Result.f32005e;
            b10 = Result.b(str != null ? Uri.parse(str) : null);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32005e;
            b10 = Result.b(c.a(th2));
        }
        fetchDecodedImage(context, Result.g(b10) ? null : b10, postProcessor, onDecodedImage);
    }

    public static /* synthetic */ void fetchDecodedImage$default(Context context, String str, PostProcessor postProcessor, Function1 function1, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            postProcessor = null;
        }
        fetchDecodedImage(context, str, postProcessor, function1);
    }

    public static /* synthetic */ void fetchDecodedImage$default(Context context, Uri uri, PostProcessor postProcessor, Function1 function1, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            postProcessor = null;
        }
        fetchDecodedImage(context, uri, postProcessor, function1);
    }

    public static /* synthetic */ Object fetchDecodedImage$default(Context context, String str, PostProcessor postProcessor, boolean z10, Continuation continuation, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            postProcessor = null;
        }
        if ((i10 & 4) != 0) {
            z10 = false;
        }
        return fetchDecodedImage(context, str, postProcessor, z10, continuation);
    }

    public static /* synthetic */ Object fetchDecodedImage$default(Context context, Uri uri, PostProcessor postProcessor, boolean z10, Continuation continuation, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            postProcessor = null;
        }
        if ((i10 & 4) != 0) {
            z10 = false;
        }
        return fetchDecodedImage(context, uri, postProcessor, z10, continuation);
    }

    public static final void fetchDecodedImage(@NotNull Context context, Uri uri, PostProcessor postProcessor, @NotNull final Function1<? super Bitmap, Unit> onDecodedImage) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(onDecodedImage, "onDecodedImage");
        if (uri == null) {
            onDecodedImage.invoke(null);
        } else {
            d.a().k(ImageRequestBuilder.x(uri).J(postProcessor != null ? postProcessor.create() : null).a(), context).c(new b() { // from class: com.discord.image.fresco.FrescoFetchDecodedImageKt$fetchDecodedImage$2
                @Override // y8.b
                protected void onFailureImpl(DataSource dataSource) {
                    Intrinsics.checkNotNullParameter(dataSource, "dataSource");
                    onDecodedImage.invoke(null);
                }

                @Override // oa.b
                protected void onNewResultImpl(Bitmap bitmap) {
                    onDecodedImage.invoke(bitmap);
                }
            }, executorSupplier.d());
        }
    }

    public static final Object fetchDecodedImage(@NotNull Context context, String str, PostProcessor postProcessor, boolean z10, @NotNull Continuation<? super Bitmap> continuation) {
        Object b10;
        try {
            Result.a aVar = Result.f32005e;
            b10 = Result.b(str != null ? Uri.parse(str) : null);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32005e;
            b10 = Result.b(c.a(th2));
        }
        return fetchDecodedImage(context, Result.g(b10) ? null : b10, postProcessor, z10, continuation);
    }

    public static final Object fetchDecodedImage(@NotNull Context context, Uri uri, PostProcessor postProcessor, final boolean z10, @NotNull Continuation<? super Bitmap> continuation) {
        final e eVar = new e(wr.b.c(continuation), 1);
        eVar.H();
        if (uri == null) {
            eVar.resumeWith(Result.b(null));
        } else {
            final DataSource k10 = d.a().k(ImageRequestBuilder.x(uri).J(postProcessor != null ? postProcessor.create() : null).a(), context);
            k10.c(new b() { // from class: com.discord.image.fresco.FrescoFetchDecodedImageKt$fetchDecodedImage$6$subscriber$1
                @Override // y8.b
                protected void onFailureImpl(DataSource dataSource) {
                    Intrinsics.checkNotNullParameter(dataSource, "dataSource");
                    CancellableContinuation.this.resumeWith(Result.b(null));
                }

                @Override // oa.b
                protected void onNewResultImpl(Bitmap bitmap) {
                    CancellableContinuation cancellableContinuation = CancellableContinuation.this;
                    Result.a aVar = Result.f32005e;
                    if (z10 && bitmap != null) {
                        bitmap = Bitmap.createBitmap(bitmap);
                    }
                    cancellableContinuation.resumeWith(Result.b(bitmap));
                }
            }, executorSupplier.d());
            eVar.c(new Function1<Throwable, Unit>() { // from class: com.discord.image.fresco.FrescoFetchDecodedImageKt$fetchDecodedImage$6$1
                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    invoke((Throwable) obj);
                    return Unit.f32008a;
                }

                public final void invoke(Throwable th2) {
                    DataSource.this.close();
                }
            });
        }
        Object B = eVar.B();
        if (B == wr.b.f()) {
            g.c(continuation);
        }
        return B;
    }
}
