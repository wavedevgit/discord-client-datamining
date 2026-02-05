package app.rive.runtime.kotlin.core;

import android.content.Context;
import android.util.Log;
import c6.k;
import com.android.volley.o;
import com.android.volley.p;
import com.android.volley.u;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import or.l;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0012\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0017\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u001f\u0010\u000b\u001a\u00020\n2\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\u000b\u0010\fR\u001c\u0010\u000f\u001a\n \u000e*\u0004\u0018\u00010\r0\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000f\u0010\u0010R\u001b\u0010\u0016\u001a\u00020\u00118BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0012\u0010\u0013\u001a\u0004\b\u0014\u0010\u0015¨\u0006\u0017"}, d2 = {"Lapp/rive/runtime/kotlin/core/CDNAssetLoader;", "Lapp/rive/runtime/kotlin/core/FileAssetLoader;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Lapp/rive/runtime/kotlin/core/FileAsset;", "asset", "", "inBandBytes", "", "loadContents", "(Lapp/rive/runtime/kotlin/core/FileAsset;[B)Z", "", "kotlin.jvm.PlatformType", "tag", "Ljava/lang/String;", "Lcom/android/volley/o;", "queue$delegate", "Lkotlin/Lazy;", "getQueue", "()Lcom/android/volley/o;", "queue", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class CDNAssetLoader extends FileAssetLoader {
    public static final int $stable = 8;
    @NotNull
    private final Lazy queue$delegate;
    private final String tag;

    public CDNAssetLoader(@NotNull final Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.tag = getClass().getSimpleName();
        this.queue$delegate = l.a(new Function0<o>() { // from class: app.rive.runtime.kotlin.core.CDNAssetLoader$queue$2
            /* JADX INFO: Access modifiers changed from: package-private */
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final o invoke() {
                return k.a(context);
            }
        });
    }

    private final o getQueue() {
        return (o) this.queue$delegate.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void loadContents$lambda$0(CDNAssetLoader this$0, u uVar) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Log.e(this$0.tag, "onAssetLoaded: loading image failed.");
        uVar.printStackTrace();
    }

    @Override // app.rive.runtime.kotlin.core.FileAssetLoader
    public boolean loadContents(@NotNull final FileAsset asset, @NotNull byte[] inBandBytes) {
        Intrinsics.checkNotNullParameter(asset, "asset");
        Intrinsics.checkNotNullParameter(inBandBytes, "inBandBytes");
        String cdnUrl = asset.getCdnUrl();
        if (cdnUrl.length() == 0) {
            return false;
        }
        getQueue().a(new BytesRequest(cdnUrl, new Function1<byte[], Unit>() { // from class: app.rive.runtime.kotlin.core.CDNAssetLoader$loadContents$request$1
            /* JADX INFO: Access modifiers changed from: package-private */
            {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                invoke((byte[]) obj);
                return Unit.f31988a;
            }

            public final void invoke(@NotNull byte[] bytes) {
                Intrinsics.checkNotNullParameter(bytes, "bytes");
                FileAsset.this.decode(bytes);
            }
        }, new p.a() { // from class: app.rive.runtime.kotlin.core.a
            @Override // com.android.volley.p.a
            public final void a(u uVar) {
                CDNAssetLoader.loadContents$lambda$0(CDNAssetLoader.this, uVar);
            }
        }));
        return true;
    }
}
