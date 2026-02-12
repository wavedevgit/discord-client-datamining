package fn;

import en.q;
import en.s;
import en.w;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f23922c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final s f23923a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23924b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(ByteString bytes) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer buffer = new Buffer();
            buffer.e2(bytes);
            return new k(s.f23017f.a(en.j.a(buffer)), en.j.b(buffer));
        }

        private a() {
        }
    }

    public k(s identifier, String name) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f23923a = identifier;
        this.f23924b = name;
    }

    public final s a() {
        return this.f23923a;
    }

    public final String b() {
        return this.f23924b;
    }

    public final boolean c(q otherWorkflow, String otherName) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(otherName, "otherName");
        if (Intrinsics.areEqual(this.f23923a, w.j(otherWorkflow)) && Intrinsics.areEqual(this.f23924b, otherName)) {
            return true;
        }
        return false;
    }

    public final ByteString d() {
        ByteString e10 = this.f23923a.e();
        if (e10 == null) {
            return null;
        }
        Buffer buffer = new Buffer();
        en.j.c(buffer, e10);
        en.j.d(buffer, b());
        return buffer.M1();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (Intrinsics.areEqual(this.f23923a, kVar.f23923a) && Intrinsics.areEqual(this.f23924b, kVar.f23924b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f23923a.hashCode() * 31) + this.f23924b.hashCode();
    }

    public String toString() {
        return "WorkflowNodeId(identifier=" + this.f23923a + ", name=" + this.f23924b + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public k(q workflow, String name) {
        this(w.j(workflow), name);
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(name, "name");
    }
}
