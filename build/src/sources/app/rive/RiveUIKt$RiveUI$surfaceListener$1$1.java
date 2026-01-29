package app.rive;

import android.graphics.SurfaceTexture;
import android.view.Surface;
import android.view.TextureView;
import app.rive.core.CommandQueue;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import w0.p;
import w0.q;
@Metadata(d1 = {"\u0000'\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0005*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J \u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u0007H\u0016J\u0010\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u0005H\u0016J \u0010\f\u001a\u00020\u00032\u0006\u0010\r\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u0007H\u0016J\u0010\u0010\u000e\u001a\u00020\u00032\u0006\u0010\r\u001a\u00020\u0005H\u0016¨\u0006\u000f"}, d2 = {"app/rive/RiveUIKt$RiveUI$surfaceListener$1$1", "Landroid/view/TextureView$SurfaceTextureListener;", "onSurfaceTextureAvailable", "", "newSurfaceTexture", "Landroid/graphics/SurfaceTexture;", "width", "", "height", "onSurfaceTextureDestroyed", "", "destroyedSurfaceTexture", "onSurfaceTextureSizeChanged", "surfaceTexture", "onSurfaceTextureUpdated", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RiveUIKt$RiveUI$surfaceListener$1$1 implements TextureView.SurfaceTextureListener {
    final /* synthetic */ CommandQueue $commandQueue;
    final /* synthetic */ q $surface$delegate;
    final /* synthetic */ p $surfaceHeight$delegate;
    final /* synthetic */ p $surfaceWidth$delegate;

    RiveUIKt$RiveUI$surfaceListener$1$1(CommandQueue commandQueue, q qVar, p pVar, p pVar2) {
        this.$commandQueue = commandQueue;
        this.$surface$delegate = qVar;
        this.$surfaceWidth$delegate = pVar;
        this.$surfaceHeight$delegate = pVar2;
    }

    @Override // android.view.TextureView.SurfaceTextureListener
    public void onSurfaceTextureAvailable(@NotNull SurfaceTexture newSurfaceTexture, int i10, int i11) {
        Intrinsics.checkNotNullParameter(newSurfaceTexture, "newSurfaceTexture");
        this.$surface$delegate.setValue(this.$commandQueue.createRiveSurface(new Surface(newSurfaceTexture)));
        this.$surfaceWidth$delegate.a(i10);
        this.$surfaceHeight$delegate.a(i11);
    }

    @Override // android.view.TextureView.SurfaceTextureListener
    public boolean onSurfaceTextureDestroyed(@NotNull SurfaceTexture destroyedSurfaceTexture) {
        Intrinsics.checkNotNullParameter(destroyedSurfaceTexture, "destroyedSurfaceTexture");
        this.$surface$delegate.setValue(null);
        return true;
    }

    @Override // android.view.TextureView.SurfaceTextureListener
    public void onSurfaceTextureSizeChanged(@NotNull SurfaceTexture surfaceTexture, int i10, int i11) {
        Intrinsics.checkNotNullParameter(surfaceTexture, "surfaceTexture");
        this.$surfaceWidth$delegate.a(i10);
        this.$surfaceHeight$delegate.a(i11);
    }

    @Override // android.view.TextureView.SurfaceTextureListener
    public void onSurfaceTextureUpdated(@NotNull SurfaceTexture surfaceTexture) {
        Intrinsics.checkNotNullParameter(surfaceTexture, "surfaceTexture");
    }
}
