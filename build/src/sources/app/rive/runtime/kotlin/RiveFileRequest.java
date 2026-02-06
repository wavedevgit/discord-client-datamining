package app.rive.runtime.kotlin;

import app.rive.runtime.kotlin.core.File;
import app.rive.runtime.kotlin.core.FileAssetLoader;
import app.rive.runtime.kotlin.core.RendererType;
import c6.e;
import com.android.volley.k;
import com.android.volley.m;
import com.android.volley.n;
import com.android.volley.p;
import java.io.UnsupportedEncodingException;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0007\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B9\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00020\u0007\u0012\u0006\u0010\n\u001a\u00020\t\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u000f\u001a\u00020\u0002H\u0014¢\u0006\u0004\b\u0011\u0010\u0012J\u001f\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00020\u00142\b\u0010\u000f\u001a\u0004\u0018\u00010\u0013H\u0014¢\u0006\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0006\u001a\u00020\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0006\u0010\u0017R\u001a\u0010\b\u001a\b\u0012\u0004\u0012\u00020\u00020\u00078\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\b\u0010\u0018R\u0016\u0010\f\u001a\u0004\u0018\u00010\u000b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0019¨\u0006\u001a"}, d2 = {"Lapp/rive/runtime/kotlin/RiveFileRequest;", "Lcom/android/volley/n;", "Lapp/rive/runtime/kotlin/core/File;", "", "url", "Lapp/rive/runtime/kotlin/core/RendererType;", "rendererType", "Lcom/android/volley/p$b;", "listener", "Lcom/android/volley/p$a;", "errorListener", "Lapp/rive/runtime/kotlin/core/FileAssetLoader;", "assetLoader", "<init>", "(Ljava/lang/String;Lapp/rive/runtime/kotlin/core/RendererType;Lcom/android/volley/p$b;Lcom/android/volley/p$a;Lapp/rive/runtime/kotlin/core/FileAssetLoader;)V", "response", "", "deliverResponse", "(Lapp/rive/runtime/kotlin/core/File;)V", "Lcom/android/volley/k;", "Lcom/android/volley/p;", "parseNetworkResponse", "(Lcom/android/volley/k;)Lcom/android/volley/p;", "Lapp/rive/runtime/kotlin/core/RendererType;", "Lcom/android/volley/p$b;", "Lapp/rive/runtime/kotlin/core/FileAssetLoader;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RiveFileRequest extends n {
    public static final int $stable = 8;
    private final FileAssetLoader assetLoader;
    @NotNull
    private final p.b listener;
    @NotNull
    private final RendererType rendererType;

    public /* synthetic */ RiveFileRequest(String str, RendererType rendererType, p.b bVar, p.a aVar, FileAssetLoader fileAssetLoader, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, rendererType, bVar, aVar, (i10 & 16) != 0 ? null : fileAssetLoader);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.android.volley.n
    @NotNull
    public p parseNetworkResponse(k kVar) {
        byte[] bArr;
        if (kVar != null) {
            try {
                bArr = kVar.f8074b;
            } catch (UnsupportedEncodingException e10) {
                p a10 = p.a(new m(e10));
                Intrinsics.checkNotNull(a10);
                return a10;
            }
        } else {
            bArr = null;
        }
        if (bArr == null) {
            bArr = new byte[0];
        }
        p c10 = p.c(new File(bArr, this.rendererType, this.assetLoader), e.e(kVar));
        Intrinsics.checkNotNull(c10);
        return c10;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RiveFileRequest(@NotNull String url, @NotNull RendererType rendererType, @NotNull p.b listener, @NotNull p.a errorListener, FileAssetLoader fileAssetLoader) {
        super(0, url, errorListener);
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(rendererType, "rendererType");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(errorListener, "errorListener");
        this.rendererType = rendererType;
        this.listener = listener;
        this.assetLoader = fileAssetLoader;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.android.volley.n
    public void deliverResponse(@NotNull File response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.listener.a(response);
    }
}
