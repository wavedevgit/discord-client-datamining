package um;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import tm.q;
import tm.s;
import tm.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f50471c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final s f50472a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50473b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(ByteString bytes) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer buffer = new Buffer();
            buffer.a2(bytes);
            return new k(s.f49758f.a(tm.j.a(buffer)), tm.j.b(buffer));
        }

        private a() {
        }
    }

    public k(s identifier, String name) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f50472a = identifier;
        this.f50473b = name;
    }

    public final s a() {
        return this.f50472a;
    }

    public final String b() {
        return this.f50473b;
    }

    public final boolean c(q otherWorkflow, String otherName) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(otherName, "otherName");
        if (Intrinsics.areEqual(this.f50472a, w.j(otherWorkflow)) && Intrinsics.areEqual(this.f50473b, otherName)) {
            return true;
        }
        return false;
    }

    public final ByteString d() {
        ByteString e10 = this.f50472a.e();
        if (e10 == null) {
            return null;
        }
        Buffer buffer = new Buffer();
        tm.j.c(buffer, e10);
        tm.j.d(buffer, b());
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
        if (Intrinsics.areEqual(this.f50472a, kVar.f50472a) && Intrinsics.areEqual(this.f50473b, kVar.f50473b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50472a.hashCode() * 31) + this.f50473b.hashCode();
    }

    public String toString() {
        return "WorkflowNodeId(identifier=" + this.f50472a + ", name=" + this.f50473b + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public k(q workflow, String name) {
        this(w.j(workflow), name);
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(name, "name");
    }
}
