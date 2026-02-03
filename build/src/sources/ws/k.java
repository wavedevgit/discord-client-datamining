package ws;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    public static final a f53010a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Object a(int i10, Function0 message) {
            Intrinsics.checkNotNullParameter(message, "message");
            return k.b(new i(i10, message));
        }

        public final Object b(int i10) {
            return k.b(Integer.valueOf(i10));
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Object b(Object obj) {
        return obj;
    }
}
