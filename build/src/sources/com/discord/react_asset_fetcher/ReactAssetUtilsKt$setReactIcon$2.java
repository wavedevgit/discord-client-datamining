package com.discord.react_asset_fetcher;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import com.facebook.react.views.imagehelper.ImageSource;
import com.facebook.react.views.imagehelper.ResourceDrawableIdHelper;
import com.google.android.material.button.MaterialButton;
import gs.g;
import gs.m0;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import or.b;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.react_asset_fetcher.ReactAssetUtilsKt$setReactIcon$2", f = "ReactAssetUtils.kt", l = {72}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactAssetUtilsKt$setReactIcon$2 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $assetUrl;
    final /* synthetic */ MaterialButton $this_setReactIcon;
    Object L$0;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/graphics/drawable/Drawable;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.react_asset_fetcher.ReactAssetUtilsKt$setReactIcon$2$1", f = "ReactAssetUtils.kt", l = {}, m = "invokeSuspend")
    @SourceDebugExtension({"SMAP\nReactAssetUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactAssetUtils.kt\ncom/discord/react_asset_fetcher/ReactAssetUtilsKt$setReactIcon$2$1\n+ 2 BitmapDrawable.kt\nandroidx/core/graphics/drawable/BitmapDrawableKt\n*L\n1#1,93:1\n27#2:94\n*S KotlinDebug\n*F\n+ 1 ReactAssetUtils.kt\ncom/discord/react_asset_fetcher/ReactAssetUtilsKt$setReactIcon$2$1\n*L\n86#1:94\n*E\n"})
    /* renamed from: com.discord.react_asset_fetcher.ReactAssetUtilsKt$setReactIcon$2$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Drawable>, Object> {
        final /* synthetic */ String $assetUrl;
        final /* synthetic */ MaterialButton $this_setReactIcon;
        int label;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(MaterialButton materialButton, String str, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.$this_setReactIcon = materialButton;
            this.$assetUrl = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(this.$this_setReactIcon, this.$assetUrl, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            b.f();
            if (this.label == 0) {
                c.b(obj);
                Context context = this.$this_setReactIcon.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                ImageSource imageSource = new ImageSource(context, this.$assetUrl, 0.0d, 0.0d, null, false, 60, null);
                MaterialButton materialButton = this.$this_setReactIcon;
                if (imageSource.isResource()) {
                    ResourceDrawableIdHelper.getInstance();
                    Context context2 = materialButton.getContext();
                    Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                    Drawable resourceDrawable = ResourceDrawableIdHelper.getResourceDrawable(context2, imageSource.getSource());
                    Intrinsics.checkNotNull(resourceDrawable);
                    return resourceDrawable;
                } else if (Intrinsics.areEqual(imageSource.getUri().getScheme(), "file")) {
                    Drawable createFromPath = Drawable.createFromPath(imageSource.getUri().getPath());
                    Intrinsics.checkNotNull(createFromPath);
                    return createFromPath;
                } else {
                    URLConnection openConnection = new URL(imageSource.getSource()).openConnection();
                    Intrinsics.checkNotNull(openConnection, "null cannot be cast to non-null type java.net.HttpURLConnection");
                    HttpURLConnection httpURLConnection = (HttpURLConnection) openConnection;
                    httpURLConnection.connect();
                    Bitmap decodeStream = BitmapFactory.decodeStream(httpURLConnection.getInputStream());
                    Intrinsics.checkNotNull(decodeStream);
                    Resources resources = materialButton.getResources();
                    Intrinsics.checkNotNullExpressionValue(resources, "getResources(...)");
                    return new BitmapDrawable(resources, decodeStream);
                }
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Drawable> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactAssetUtilsKt$setReactIcon$2(MaterialButton materialButton, String str, Continuation<? super ReactAssetUtilsKt$setReactIcon$2> continuation) {
        super(2, continuation);
        this.$this_setReactIcon = materialButton;
        this.$assetUrl = str;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ReactAssetUtilsKt$setReactIcon$2(this.$this_setReactIcon, this.$assetUrl, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        MaterialButton materialButton;
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                materialButton = (MaterialButton) this.L$0;
                c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            c.b(obj);
            MaterialButton materialButton2 = this.$this_setReactIcon;
            CoroutineDispatcher b10 = m0.b();
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.$this_setReactIcon, this.$assetUrl, null);
            this.L$0 = materialButton2;
            this.label = 1;
            Object g10 = g.g(b10, anonymousClass1, this);
            if (g10 == f10) {
                return f10;
            }
            materialButton = materialButton2;
            obj = g10;
        }
        materialButton.setIcon((Drawable) obj);
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((ReactAssetUtilsKt$setReactIcon$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
