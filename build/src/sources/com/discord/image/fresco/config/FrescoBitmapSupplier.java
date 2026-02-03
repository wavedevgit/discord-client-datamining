package com.discord.image.fresco.config;

import com.facebook.imagepipeline.cache.MemoryCacheParams;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import la.o;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0000\u0018\u0000 \t2\u00020\u0001:\u0001\tB\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u000f\u0010\u0007\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0007\u0010\b¨\u0006\n"}, d2 = {"Lcom/discord/image/fresco/config/FrescoBitmapSupplier;", "Lla/o;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Lcom/facebook/imagepipeline/cache/MemoryCacheParams;", "get", "()Lcom/facebook/imagepipeline/cache/MemoryCacheParams;", "Companion", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FrescoBitmapSupplier extends o {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int MAX_BITMAP_MEM_CACHE_SIZE_RATIO = 3;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/image/fresco/config/FrescoBitmapSupplier$Companion;", "", "<init>", "()V", "MAX_BITMAP_MEM_CACHE_SIZE_RATIO", "", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public FrescoBitmapSupplier(@org.jetbrains.annotations.NotNull android.content.Context r2) {
        /*
            r1 = this;
            java.lang.String r0 = "context"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            java.lang.String r0 = "activity"
            java.lang.Object r2 = r2.getSystemService(r0)
            java.lang.String r0 = "null cannot be cast to non-null type android.app.ActivityManager"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r2, r0)
            android.app.ActivityManager r2 = (android.app.ActivityManager) r2
            r1.<init>(r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.image.fresco.config.FrescoBitmapSupplier.<init>(android.content.Context):void");
    }

    @Override // la.o, com.facebook.common.internal.Supplier
    @NotNull
    public MemoryCacheParams get() {
        MemoryCacheParams memoryCacheParams = super.get();
        int i10 = memoryCacheParams.f11064a;
        return new MemoryCacheParams(i10, memoryCacheParams.f11065b, memoryCacheParams.f11066c, memoryCacheParams.f11067d, i10 / 3, 0L, 32, null);
    }
}
