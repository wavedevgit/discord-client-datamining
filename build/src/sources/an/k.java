package an;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import zm.q;
import zm.s;
import zm.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f830c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final s f831a;

    /* renamed from: b  reason: collision with root package name */
    private final String f832b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(ByteString bytes) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer buffer = new Buffer();
            buffer.a2(bytes);
            return new k(s.f56104f.a(zm.j.a(buffer)), zm.j.b(buffer));
        }

        private a() {
        }
    }

    public k(s identifier, String name) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f831a = identifier;
        this.f832b = name;
    }

    public final s a() {
        return this.f831a;
    }

    public final String b() {
        return this.f832b;
    }

    public final boolean c(q otherWorkflow, String otherName) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(otherName, "otherName");
        if (Intrinsics.areEqual(this.f831a, w.j(otherWorkflow)) && Intrinsics.areEqual(this.f832b, otherName)) {
            return true;
        }
        return false;
    }

    public final ByteString d() {
        ByteString e10 = this.f831a.e();
        if (e10 == null) {
            return null;
        }
        Buffer buffer = new Buffer();
        zm.j.c(buffer, e10);
        zm.j.d(buffer, b());
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
        if (Intrinsics.areEqual(this.f831a, kVar.f831a) && Intrinsics.areEqual(this.f832b, kVar.f832b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f831a.hashCode() * 31) + this.f832b.hashCode();
    }

    public String toString() {
        return "WorkflowNodeId(identifier=" + this.f831a + ", name=" + this.f832b + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public k(q workflow, String name) {
        this(w.j(workflow), name);
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(name, "name");
    }
}
