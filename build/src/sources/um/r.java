package um;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    public static final b f50510a = new b(null);

    /* renamed from: b  reason: collision with root package name */
    private static final a f50511b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends r {
        a() {
        }

        @Override // um.r
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
        private final Object f50512a;

        /* renamed from: b  reason: collision with root package name */
        private Object f50513b;

        /* renamed from: c  reason: collision with root package name */
        private v f50514c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ r f50515d;

        public c(r this$0, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this.f50515d = this$0;
            this.f50512a = obj;
            this.f50513b = obj2;
        }

        public final v a() {
            return this.f50514c;
        }

        public final Object b() {
            return this.f50512a;
        }

        public final Object c() {
            return this.f50513b;
        }

        public final void d(Object obj) {
            this.f50514c = new v(obj);
        }

        public final void e(Object obj) {
            this.f50513b = obj;
        }
    }

    public abstract void a(c cVar);
}
