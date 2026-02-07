package app.rive.runtime.kotlin.renderers;

import app.rive.runtime.kotlin.controllers.RiveFileController;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Artboard;
import app.rive.runtime.kotlin.core.File;
import app.rive.runtime.kotlin.core.Fit;
import app.rive.runtime.kotlin.core.RendererType;
import app.rive.runtime.kotlin.core.Rive;
import com.discord.js_watchdog.SharedPreferencesKey;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0006\b\u0017\u0018\u00002\u00020\u0001B!\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0002\u0010\bJ\u0010\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u0012H\u0017J\b\u0010\u0018\u001a\u00020\u0016H\u0014J\b\u0010\u0019\u001a\u00020\u0016H\u0017J\u0006\u0010\u001a\u001a\u00020\u0016J\b\u0010\u001b\u001a\u00020\u0016H\u0017R\u0014\u0010\t\u001a\u00020\n8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\fR\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\r\u001a\u00020\u000e8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010R\u0014\u0010\u0011\u001a\u00020\u00128BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0013\u0010\u0014¨\u0006\u001c"}, d2 = {"Lapp/rive/runtime/kotlin/renderers/RiveArtboardRenderer;", "Lapp/rive/runtime/kotlin/renderers/Renderer;", SharedPreferencesKey.TRACE, "", "rendererType", "Lapp/rive/runtime/kotlin/core/RendererType;", "controller", "Lapp/rive/runtime/kotlin/controllers/RiveFileController;", "(ZLapp/rive/runtime/kotlin/core/RendererType;Lapp/rive/runtime/kotlin/controllers/RiveFileController;)V", "alignment", "Lapp/rive/runtime/kotlin/core/Alignment;", "getAlignment", "()Lapp/rive/runtime/kotlin/core/Alignment;", "fit", "Lapp/rive/runtime/kotlin/core/Fit;", "getFit", "()Lapp/rive/runtime/kotlin/core/Fit;", "scaleFactor", "", "getScaleFactor", "()F", "advance", "", "elapsed", "disposeDependencies", "draw", "reset", "resizeArtboard", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRiveArtboardRenderer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveArtboardRenderer.kt\napp/rive/runtime/kotlin/renderers/RiveArtboardRenderer\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,99:1\n1#2:100\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RiveArtboardRenderer extends Renderer {
    public static final int $stable = 8;
    @NotNull
    private RiveFileController controller;

    public /* synthetic */ RiveArtboardRenderer(boolean z10, RendererType rendererType, RiveFileController riveFileController, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? Rive.INSTANCE.getDefaultRendererType() : rendererType, riveFileController);
    }

    private final Alignment getAlignment() {
        return this.controller.getAlignment();
    }

    private final Fit getFit() {
        return this.controller.getFit();
    }

    private final float getScaleFactor() {
        return this.controller.getLayoutScaleFactorActive$kotlin_release();
    }

    @Override // app.rive.runtime.kotlin.renderers.Renderer
    public void advance(float f10) {
        if (!getHasCppObject()) {
            return;
        }
        if (this.controller.isActive()) {
            this.controller.advance(f10);
        }
        synchronized (this.controller.getStartStopLock$kotlin_release()) {
            try {
                if (!this.controller.isAdvancing()) {
                    stopThread$kotlin_release();
                }
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // app.rive.runtime.kotlin.renderers.Renderer
    public void disposeDependencies() {
        Object obj;
        File file = this.controller.getFile();
        if (file == null || (obj = file.getLock()) == null) {
            obj = this;
        }
        synchronized (obj) {
            super.disposeDependencies();
            Unit unit = Unit.f32056a;
        }
    }

    @Override // app.rive.runtime.kotlin.renderers.Renderer
    public void draw() {
        ReentrantLock reentrantLock;
        ReentrantLock lock;
        if (this.controller.getRequireArtboardResize$kotlin_release().getAndSet(false)) {
            File file = this.controller.getFile();
            if (file != null && (lock = file.getLock()) != null) {
                reentrantLock = lock;
            } else {
                reentrantLock = this;
            }
            synchronized (reentrantLock) {
                resizeArtboard();
                Unit unit = Unit.f32056a;
            }
        }
        synchronized (getFrameLock()) {
            if (getHasCppObject() && this.controller.isActive()) {
                Artboard activeArtboard = this.controller.getActiveArtboard();
                if (activeArtboard != null) {
                    activeArtboard.draw(getCppPointer(), getFit(), getAlignment(), getScaleFactor());
                    Unit unit2 = Unit.f32056a;
                }
            }
        }
    }

    public final void reset() {
        this.controller.stopAnimations();
        this.controller.reset$kotlin_release();
        stop();
        RiveFileController.selectArtboard$default(this.controller, null, 1, null);
        start();
    }

    public void resizeArtboard() {
        if (getHasCppObject()) {
            if (getFit() == Fit.LAYOUT) {
                float width = getWidth() / getScaleFactor();
                float height = getHeight() / getScaleFactor();
                Artboard activeArtboard = this.controller.getActiveArtboard();
                if (activeArtboard != null) {
                    activeArtboard.setWidth(width);
                    activeArtboard.setHeight(height);
                    return;
                }
                return;
            }
            Artboard activeArtboard2 = this.controller.getActiveArtboard();
            if (activeArtboard2 != null) {
                activeArtboard2.resetArtboardSize();
            }
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RiveArtboardRenderer(boolean z10, @NotNull RendererType rendererType, @NotNull RiveFileController controller) {
        super(rendererType, z10);
        Intrinsics.checkNotNullParameter(rendererType, "rendererType");
        Intrinsics.checkNotNullParameter(controller, "controller");
        this.controller = controller;
        controller.setOnStart(new RiveArtboardRenderer$1$1(this));
        controller.acquire();
        getDependencies().add(controller);
    }
}
