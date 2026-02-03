package vm;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import um.q;
import um.s;
import um.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f51427c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final s f51428a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51429b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(ByteString bytes) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer buffer = new Buffer();
            buffer.a2(bytes);
            return new k(s.f50516f.a(um.j.a(buffer)), um.j.b(buffer));
        }

        private a() {
        }
    }

    public k(s identifier, String name) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f51428a = identifier;
        this.f51429b = name;
    }

    public final s a() {
        return this.f51428a;
    }

    public final String b() {
        return this.f51429b;
    }

    public final boolean c(q otherWorkflow, String otherName) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(otherName, "otherName");
        if (Intrinsics.areEqual(this.f51428a, w.j(otherWorkflow)) && Intrinsics.areEqual(this.f51429b, otherName)) {
            return true;
        }
        return false;
    }

    public final ByteString d() {
        ByteString e10 = this.f51428a.e();
        if (e10 == null) {
            return null;
        }
        Buffer buffer = new Buffer();
        um.j.c(buffer, e10);
        um.j.d(buffer, b());
        return buffer.L1();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (Intrinsics.areEqual(this.f51428a, kVar.f51428a) && Intrinsics.areEqual(this.f51429b, kVar.f51429b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f51428a.hashCode() * 31) + this.f51429b.hashCode();
    }

    public String toString() {
        return "WorkflowNodeId(identifier=" + this.f51428a + ", name=" + this.f51429b + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public k(q workflow, String name) {
        this(w.j(workflow), name);
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(name, "name");
    }
}
