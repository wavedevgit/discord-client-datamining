package zm;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r {

    /* renamed from: a  reason: collision with root package name */
    public static final b f56098a = new b(null);

    /* renamed from: b  reason: collision with root package name */
    private static final a f56099b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends r {
        a() {
        }

        @Override // zm.r
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
        private final Object f56100a;

        /* renamed from: b  reason: collision with root package name */
        private Object f56101b;

        /* renamed from: c  reason: collision with root package name */
        private v f56102c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ r f56103d;

        public c(r this$0, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this.f56103d = this$0;
            this.f56100a = obj;
            this.f56101b = obj2;
        }

        public final v a() {
            return this.f56102c;
        }

        public final Object b() {
            return this.f56100a;
        }

        public final Object c() {
            return this.f56101b;
        }

        public final void d(Object obj) {
            this.f56102c = new v(obj);
        }

        public final void e(Object obj) {
            this.f56101b = obj;
        }
    }

    public abstract void a(c cVar);
}
