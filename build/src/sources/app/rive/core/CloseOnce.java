package app.rive.core;

import app.rive.RiveLog;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0013\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\u0002\u0010\u0005J\b\u0010\b\u001a\u00020\u0004H\u0016R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\t"}, d2 = {"Lapp/rive/core/CloseOnce;", "Ljava/lang/AutoCloseable;", "onClose", "Lkotlin/Function0;", "", "(Lkotlin/jvm/functions/Function0;)V", "closed", "Ljava/util/concurrent/atomic/AtomicBoolean;", "close", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCloseOnce.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CloseOnce.kt\napp/rive/core/CloseOnce\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,23:1\n65#2:24\n*S KotlinDebug\n*F\n+ 1 CloseOnce.kt\napp/rive/core/CloseOnce\n*L\n17#1:24\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CloseOnce implements AutoCloseable {
    public static final int $stable = 8;
    @NotNull
    private final AtomicBoolean closed;
    @NotNull
    private final Function0<Unit> onClose;

    public CloseOnce(@NotNull Function0<Unit> onClose) {
        Intrinsics.checkNotNullParameter(onClose, "onClose");
        this.onClose = onClose;
        this.closed = new AtomicBoolean(false);
    }

    @Override // java.lang.AutoCloseable
    public void close() {
        if (this.closed.getAndSet(true)) {
            RiveLog.INSTANCE.getLogger().w("CloseOnce", new Function0<String>() { // from class: app.rive.core.CloseOnce$close$1
                @Override // kotlin.jvm.functions.Function0
                @NotNull
                public final String invoke() {
                    return "Attempted to close already closed resource. Is this a mistake?";
                }
            });
            return;
        }
        this.onClose.invoke();
    }
}
