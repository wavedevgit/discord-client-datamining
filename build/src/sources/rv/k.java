package rv;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f49264d = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(String mode, j replaceData) {
            Intrinsics.checkNotNullParameter(mode, "mode");
            Intrinsics.checkNotNullParameter(replaceData, "replaceData");
            if (Intrinsics.areEqual(mode, "all")) {
                return new rv.a(replaceData);
            }
            if (StringsKt.toIntOrNull(mode) != null) {
                return new c(replaceData, Integer.parseInt(mode));
            }
            throw new IllegalArgumentException(mode);
        }

        private a() {
        }
    }

    public /* synthetic */ k(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private k() {
    }
}
