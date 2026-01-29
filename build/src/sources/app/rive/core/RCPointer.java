package app.rive.core;

import app.rive.RiveLog;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0007\u0018\u0000 \u00172\u00020\u0001:\u0001\u0017B)\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0012\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00060\u0005\u0012\u0006\u0010\u0007\u001a\u00020\b¢\u0006\u0002\u0010\tJ\u000e\u0010\u0013\u001a\u00020\u00062\u0006\u0010\u0014\u001a\u00020\bJ\u0018\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0014\u001a\u00020\b2\b\b\u0002\u0010\u0016\u001a\u00020\bR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u001d\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u000e\u001a\u00020\u00038F¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010R\u000e\u0010\u0011\u001a\u00020\u0012X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0018"}, d2 = {"Lapp/rive/core/RCPointer;", "", "cppPointer", "", "onDelete", "Lkotlin/Function1;", "", "label", "", "(JLkotlin/jvm/functions/Function1;Ljava/lang/String;)V", "getLabel", "()Ljava/lang/String;", "getOnDelete", "()Lkotlin/jvm/functions/Function1;", "pointer", "getPointer", "()J", "referenceCount", "Ljava/util/concurrent/atomic/AtomicInteger;", "acquire", "source", "release", "reason", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRCPointer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RCPointer.kt\napp/rive/core/RCPointer\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,81:1\n1#2:82\n53#3:83\n53#3:84\n*S KotlinDebug\n*F\n+ 1 RCPointer.kt\napp/rive/core/RCPointer\n*L\n51#1:83\n69#1:84\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RCPointer {
    @NotNull
    private static final String TAG = "Rive/RCPointer";
    private final long cppPointer;
    @NotNull
    private final String label;
    @NotNull
    private final Function1<Long, Unit> onDelete;
    @NotNull
    private AtomicInteger referenceCount;
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int $stable = 8;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0005"}, d2 = {"Lapp/rive/core/RCPointer$Companion;", "", "()V", "TAG", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public RCPointer(long j10, @NotNull Function1<? super Long, Unit> onDelete, @NotNull String label) {
        Intrinsics.checkNotNullParameter(onDelete, "onDelete");
        Intrinsics.checkNotNullParameter(label, "label");
        this.cppPointer = j10;
        this.onDelete = onDelete;
        this.label = label;
        this.referenceCount = new AtomicInteger(1);
    }

    public static /* synthetic */ void release$default(RCPointer rCPointer, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = "";
        }
        rCPointer.release(str, str2);
    }

    public final void acquire(@NotNull final String source) {
        Intrinsics.checkNotNullParameter(source, "source");
        final int i10 = this.referenceCount.get();
        if (i10 > 0) {
            RiveLog.INSTANCE.getLogger().v(TAG, new Function0<String>() { // from class: app.rive.core.RCPointer$acquire$2
                /* JADX INFO: Access modifiers changed from: package-private */
                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                {
                    super(0);
                }

                @Override // kotlin.jvm.functions.Function0
                @NotNull
                public final String invoke() {
                    String label = RCPointer.this.getLabel();
                    String str = source;
                    int i11 = i10;
                    return "Acquiring " + label + " (source: " + str + "; ref count before acquire: " + i11 + ")";
                }
            });
            this.referenceCount.incrementAndGet();
            return;
        }
        String str = this.label;
        throw new IllegalStateException(("Attempting to acquire a null RCPointer (" + str + ").").toString());
    }

    @NotNull
    public final String getLabel() {
        return this.label;
    }

    @NotNull
    public final Function1<Long, Unit> getOnDelete() {
        return this.onDelete;
    }

    public final long getPointer() {
        if (this.referenceCount.get() > 0) {
            return this.cppPointer;
        }
        String str = this.label;
        throw new IllegalStateException(("Attempting to access a released RCPointer (" + str + ").").toString());
    }

    public final void release(@NotNull final String source, @NotNull String reason) {
        final String str;
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(reason, "reason");
        if (reason.length() == 0) {
            str = "";
        } else {
            str = "reason: " + reason + "; ";
        }
        RiveLog.INSTANCE.getLogger().v(TAG, new Function0<String>() { // from class: app.rive.core.RCPointer$release$1
            /* JADX INFO: Access modifiers changed from: package-private */
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final String invoke() {
                AtomicInteger atomicInteger;
                String label = RCPointer.this.getLabel();
                String str2 = source;
                String str3 = str;
                atomicInteger = RCPointer.this.referenceCount;
                int i10 = atomicInteger.get();
                return "Releasing " + label + " (source: " + str2 + "; " + str3 + "ref count before release: " + i10 + ")";
            }
        });
        int decrementAndGet = this.referenceCount.decrementAndGet();
        if (decrementAndGet >= 0) {
            if (decrementAndGet == 0) {
                this.onDelete.invoke(Long.valueOf(this.cppPointer));
                return;
            }
            return;
        }
        throw new IllegalStateException(("RCPointer (" + this.label + ") released too many times.").toString());
    }
}
