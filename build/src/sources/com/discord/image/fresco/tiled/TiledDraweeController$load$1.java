package com.discord.image.fresco.tiled;

import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.Shader;
import android.graphics.drawable.BitmapDrawable;
import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.imagepipeline.request.ImageRequest;
import gs.g;
import gs.m0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import or.b;
import sa.d;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.image.fresco.tiled.TiledDraweeController$load$1", f = "TiledDraweeController.kt", l = {84}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nTiledDraweeController.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TiledDraweeController.kt\ncom/discord/image/fresco/tiled/TiledDraweeController$load$1\n+ 2 BitmapDrawable.kt\nandroidx/core/graphics/drawable/BitmapDrawableKt\n*L\n1#1,107:1\n27#2:108\n*S KotlinDebug\n*F\n+ 1 TiledDraweeController.kt\ncom/discord/image/fresco/tiled/TiledDraweeController$load$1\n*L\n92#1:108\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TiledDraweeController$load$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    long J$0;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ TiledDraweeController this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TiledDraweeController$load$1(TiledDraweeController tiledDraweeController, Continuation<? super TiledDraweeController$load$1> continuation) {
        super(2, continuation);
        this.this$0 = tiledDraweeController;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        TiledDraweeController$load$1 tiledDraweeController$load$1 = new TiledDraweeController$load$1(this.this$0, continuation);
        tiledDraweeController$load$1.L$0 = obj;
        return tiledDraweeController$load$1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        String str;
        DataSource dataSource;
        Throwable th2;
        long j10;
        sa.e eVar;
        d dVar;
        Bitmap bitmap;
        boolean z10;
        GenericDraweeHierarchy genericDraweeHierarchy;
        Resources resources;
        Shader.TileMode tileMode;
        Shader.TileMode tileMode2;
        Object f10 = b.f();
        int i10 = this.label;
        BitmapDrawable bitmapDrawable = null;
        if (i10 != 0) {
            if (i10 == 1) {
                j10 = this.J$0;
                dataSource = (DataSource) this.L$0;
                try {
                    c.b(obj);
                } catch (Throwable th3) {
                    th2 = th3;
                    dataSource.close();
                    throw th2;
                }
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            c.b(obj);
            long currentTimeMillis = System.currentTimeMillis();
            str = this.this$0.url;
            DataSource k10 = e9.d.a().k(ImageRequest.fromUri(str), (CoroutineScope) this.L$0);
            try {
                CoroutineDispatcher b10 = m0.b();
                TiledDraweeController$load$1$closableImageReference$1 tiledDraweeController$load$1$closableImageReference$1 = new TiledDraweeController$load$1$closableImageReference$1(k10, null);
                this.L$0 = k10;
                this.J$0 = currentTimeMillis;
                this.label = 1;
                Object g10 = g.g(b10, tiledDraweeController$load$1$closableImageReference$1, this);
                if (g10 == f10) {
                    return f10;
                }
                dataSource = k10;
                obj = g10;
                j10 = currentTimeMillis;
            } catch (Throwable th4) {
                dataSource = k10;
                th2 = th4;
                dataSource.close();
                throw th2;
            }
        }
        CloseableReference closeableReference = (CloseableReference) obj;
        this.this$0.myImageReference = closeableReference;
        if (closeableReference != null) {
            eVar = (sa.e) closeableReference.D0();
        } else {
            eVar = null;
        }
        if (eVar instanceof d) {
            dVar = (d) eVar;
        } else {
            dVar = null;
        }
        if (dVar != null) {
            bitmap = dVar.N1();
        } else {
            bitmap = null;
        }
        if (bitmap != null) {
            resources = this.this$0.resources;
            BitmapDrawable bitmapDrawable2 = new BitmapDrawable(resources, bitmap);
            TiledDraweeController tiledDraweeController = this.this$0;
            tileMode = tiledDraweeController.tileMode;
            tileMode2 = tiledDraweeController.tileMode;
            bitmapDrawable2.setTileModeXY(tileMode, tileMode2);
            bitmapDrawable = bitmapDrawable2;
        }
        if (System.currentTimeMillis() - j10 >= 120) {
            z10 = true;
        } else {
            z10 = false;
        }
        genericDraweeHierarchy = this.this$0.hierarchy;
        if (genericDraweeHierarchy != null) {
            genericDraweeHierarchy.e(bitmapDrawable, 1.0f, !z10);
        }
        dataSource.close();
        return Unit.f33282a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((TiledDraweeController$load$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
