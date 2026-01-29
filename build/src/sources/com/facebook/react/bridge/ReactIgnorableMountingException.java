package com.facebook.react.bridge;

import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u0003\n\u0002\b\u0004\b\u0000\u0018\u0000 \u000b2\u00060\u0001j\u0002`\u0002:\u0001\u000bB\u0011\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0004¢\u0006\u0004\b\u0005\u0010\u0006B\u0011\b\u0016\u0012\u0006\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\u0005\u0010\tB\u0019\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\b¢\u0006\u0004\b\u0005\u0010\n¨\u0006\f"}, d2 = {"Lcom/facebook/react/bridge/ReactIgnorableMountingException;", "Ljava/lang/RuntimeException;", "Lkotlin/RuntimeException;", "m", "", "<init>", "(Ljava/lang/String;)V", "e", "", "(Ljava/lang/Throwable;)V", "(Ljava/lang/String;Ljava/lang/Throwable;)V", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactIgnorableMountingException extends RuntimeException {
    @NotNull
    public static final Companion Companion = new Companion(null);

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0003\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/bridge/ReactIgnorableMountingException$Companion;", "", "<init>", "()V", "isIgnorable", "", "e", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean isIgnorable(@NotNull Throwable e10) {
            Intrinsics.checkNotNullParameter(e10, "e");
            while (e10 != null) {
                if (e10 instanceof ReactIgnorableMountingException) {
                    return true;
                }
                e10 = e10.getCause();
            }
            return false;
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactIgnorableMountingException(@NotNull String m10) {
        super(m10);
        Intrinsics.checkNotNullParameter(m10, "m");
    }

    public static final boolean isIgnorable(@NotNull Throwable th2) {
        return Companion.isIgnorable(th2);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactIgnorableMountingException(@NotNull Throwable e10) {
        super(e10);
        Intrinsics.checkNotNullParameter(e10, "e");
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactIgnorableMountingException(@NotNull String m10, @NotNull Throwable e10) {
        super(m10, e10);
        Intrinsics.checkNotNullParameter(m10, "m");
        Intrinsics.checkNotNullParameter(e10, "e");
    }
}
