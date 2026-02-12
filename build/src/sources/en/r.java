package en;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    public static final b f23011a = new b(null);

    /* renamed from: b  reason: collision with root package name */
    private static final a f23012b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends r {
        a() {
        }

        @Override // en.r
        public void a(c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
        }

        public String toString() {
            return "WorkflowAction.noAction()";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class c {

        /* renamed from: a  reason: collision with root package name */
        private final Object f23013a;

        /* renamed from: b  reason: collision with root package name */
        private Object f23014b;

        /* renamed from: c  reason: collision with root package name */
        private v f23015c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ r f23016d;

        public c(r this$0, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this.f23016d = this$0;
            this.f23013a = obj;
            this.f23014b = obj2;
        }

        public final v a() {
            return this.f23015c;
        }

        public final Object b() {
            return this.f23013a;
        }

        public final Object c() {
            return this.f23014b;
        }

        public final void d(Object obj) {
            this.f23015c = new v(obj);
        }

        public final void e(Object obj) {
            this.f23014b = obj;
        }
    }

    public abstract void a(c cVar);
}
