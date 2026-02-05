package app.rive;

import android.content.Context;
import android.graphics.SurfaceTexture;
import android.util.AttributeSet;
import android.view.Surface;
import android.view.TextureView;
import android.widget.FrameLayout;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.p;
import androidx.lifecycle.r0;
import app.rive.core.ArtboardHandle;
import app.rive.core.CommandQueue;
import app.rive.core.RiveSurface;
import app.rive.core.StateMachineHandle;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import ms.i;
import or.q;
import org.jetbrains.annotations.NotNull;
@ExperimentalRiveComposeAPI
@Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0007\u0018\u00002\u00020\u0001B%\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010\bJ\b\u0010\u001c\u001a\u00020\u001dH\u0014J\b\u0010\u001e\u001a\u00020\u001dH\u0014J&\u0010\u001f\u001a\u00020\u001d2\u0006\u0010 \u001a\u00020\f2\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\"2\n\b\u0002\u0010#\u001a\u0004\u0018\u00010$R\u0016\u0010\t\u001a\u0004\u0018\u00010\nX\u0082\u000eø\u0001\u0000ø\u0001\u0001¢\u0006\u0002\n\u0000R\u0010\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0082\u000e¢\u0006\u0002\n\u0000R\"\u0010\u000f\u001a\u0004\u0018\u00010\u000e2\b\u0010\r\u001a\u0004\u0018\u00010\u000e@BX\u0082\u000e¢\u0006\b\n\u0000\"\u0004\b\u0010\u0010\u0011R\u0016\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0082\u000eø\u0001\u0000ø\u0001\u0001¢\u0006\u0002\n\u0000R\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u0015X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0016\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0017\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0011\u0010\u0018\u001a\u00020\u0019¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001b\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b!¨\u0006%"}, d2 = {"Lapp/rive/RiveUIView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyle", "", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "artboardHandle", "Lapp/rive/core/ArtboardHandle;", "riveFile", "Lapp/rive/RiveFile;", "value", "Lapp/rive/core/RiveSurface;", "riveSurface", "setRiveSurface", "(Lapp/rive/core/RiveSurface;)V", "stateMachineHandle", "Lapp/rive/core/StateMachineHandle;", "surface", "Landroid/view/Surface;", "surfaceHeight", "surfaceWidth", "textureView", "Landroid/view/TextureView;", "getTextureView", "()Landroid/view/TextureView;", "onAttachedToWindow", "", "onDetachedFromWindow", "setRiveFile", "file", "artboard", "Lapp/rive/Artboard;", "stateMachineName", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RiveUIView extends FrameLayout {
    public static final int $stable = 8;
    private ArtboardHandle artboardHandle;
    private RiveFile riveFile;
    private RiveSurface riveSurface;
    private StateMachineHandle stateMachineHandle;
    private Surface surface;
    private int surfaceHeight;
    private int surfaceWidth;
    @NotNull
    private final TextureView textureView;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public RiveUIView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public static /* synthetic */ void setRiveFile$default(RiveUIView riveUIView, RiveFile riveFile, Artboard artboard, String str, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            artboard = null;
        }
        if ((i10 & 4) != 0) {
            str = null;
        }
        riveUIView.setRiveFile(riveFile, artboard, str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void setRiveSurface(RiveSurface riveSurface) {
        RiveSurface riveSurface2 = this.riveSurface;
        if (riveSurface2 != null && riveSurface2 != null) {
            riveSurface2.dispose();
        }
        this.riveSurface = riveSurface;
    }

    @NotNull
    public final TextureView getTextureView() {
        return this.textureView;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        CommandQueue commandQueue$kotlin_release;
        super.onAttachedToWindow();
        LifecycleOwner a10 = r0.a(this);
        if (a10 != null) {
            RiveFile riveFile = this.riveFile;
            if (riveFile != null && (commandQueue$kotlin_release = riveFile.getCommandQueue$kotlin_release()) != null) {
                commandQueue$kotlin_release.acquire("RiveUIView");
            }
            i.d(p.a(a10), null, null, new RiveUIView$onAttachedToWindow$1(a10, this, null), 3, null);
            return;
        }
        throw new IllegalStateException("RiveUIView must be hosted under a LifecycleOwner.");
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        CommandQueue commandQueue$kotlin_release;
        super.onDetachedFromWindow();
        RiveFile riveFile = this.riveFile;
        if (riveFile != null && (commandQueue$kotlin_release = riveFile.getCommandQueue$kotlin_release()) != null) {
            commandQueue$kotlin_release.release("RiveUIView", "Detached from window");
        }
    }

    public final void setRiveFile(@NotNull RiveFile file, Artboard artboard, String str) {
        long m111createDefaultArtboard6NrLy0M;
        StateMachineHandle m190boximpl;
        Intrinsics.checkNotNullParameter(file, "file");
        this.riveFile = file;
        if (artboard != null) {
            m111createDefaultArtboard6NrLy0M = artboard.m15getArtboardHandlenSTdbJo$kotlin_release();
        } else {
            m111createDefaultArtboard6NrLy0M = file.getCommandQueue$kotlin_release().m111createDefaultArtboard6NrLy0M(file.m31getFileHandleENT3xMk$kotlin_release());
        }
        this.artboardHandle = ArtboardHandle.m92boximpl(m111createDefaultArtboard6NrLy0M);
        if (str != null) {
            CommandQueue commandQueue$kotlin_release = file.getCommandQueue$kotlin_release();
            ArtboardHandle artboardHandle = this.artboardHandle;
            Intrinsics.checkNotNull(artboardHandle);
            m190boximpl = StateMachineHandle.m190boximpl(commandQueue$kotlin_release.m113createStateMachineByNameItmKBmM(artboardHandle.m98unboximpl(), str));
        } else {
            CommandQueue commandQueue$kotlin_release2 = file.getCommandQueue$kotlin_release();
            ArtboardHandle artboardHandle2 = this.artboardHandle;
            Intrinsics.checkNotNull(artboardHandle2);
            m190boximpl = StateMachineHandle.m190boximpl(commandQueue$kotlin_release2.m112createDefaultStateMachinexY8vNfM(artboardHandle2.m98unboximpl()));
        }
        this.stateMachineHandle = m190boximpl;
        if (this.surface != null && this.riveSurface == null) {
            CommandQueue commandQueue$kotlin_release3 = file.getCommandQueue$kotlin_release();
            Surface surface = this.surface;
            Intrinsics.checkNotNull(surface);
            setRiveSurface(commandQueue$kotlin_release3.createRiveSurface(surface));
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public RiveUIView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ RiveUIView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RiveUIView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        TextureView textureView = new TextureView(context);
        textureView.setLayoutParams(new FrameLayout.LayoutParams(-1, -1));
        textureView.setSurfaceTextureListener(new TextureView.SurfaceTextureListener() { // from class: app.rive.RiveUIView$textureView$1$1
            @Override // android.view.TextureView.SurfaceTextureListener
            public void onSurfaceTextureAvailable(@NotNull SurfaceTexture newSurfaceTexture, int i11, int i12) {
                RiveFile riveFile;
                Surface surface;
                Intrinsics.checkNotNullParameter(newSurfaceTexture, "newSurfaceTexture");
                RiveUIView.this.surface = new Surface(newSurfaceTexture);
                RiveUIView.this.surfaceWidth = i11;
                RiveUIView.this.surfaceHeight = i12;
                riveFile = RiveUIView.this.riveFile;
                if (riveFile != null) {
                    RiveUIView riveUIView = RiveUIView.this;
                    CommandQueue commandQueue$kotlin_release = riveFile.getCommandQueue$kotlin_release();
                    surface = riveUIView.surface;
                    Intrinsics.checkNotNull(surface);
                    riveUIView.setRiveSurface(commandQueue$kotlin_release.createRiveSurface(surface));
                }
            }

            @Override // android.view.TextureView.SurfaceTextureListener
            public boolean onSurfaceTextureDestroyed(@NotNull SurfaceTexture destroyedSurfaceTexture) {
                Intrinsics.checkNotNullParameter(destroyedSurfaceTexture, "destroyedSurfaceTexture");
                RiveUIView.this.setRiveSurface(null);
                RiveUIView.this.surface = null;
                return true;
            }

            @Override // android.view.TextureView.SurfaceTextureListener
            public void onSurfaceTextureSizeChanged(@NotNull SurfaceTexture surfaceTexture, int i11, int i12) {
                Intrinsics.checkNotNullParameter(surfaceTexture, "surfaceTexture");
                throw new q("An operation is not implemented: Not yet implemented");
            }

            @Override // android.view.TextureView.SurfaceTextureListener
            public void onSurfaceTextureUpdated(@NotNull SurfaceTexture surfaceTexture) {
                Intrinsics.checkNotNullParameter(surfaceTexture, "surfaceTexture");
            }
        });
        this.textureView = textureView;
        addView(textureView, new FrameLayout.LayoutParams(-1, -1));
    }
}
