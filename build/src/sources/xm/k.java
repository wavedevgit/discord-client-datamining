package xm;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
import wm.q;
import wm.s;
import wm.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f53463c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final s f53464a;

    /* renamed from: b  reason: collision with root package name */
    private final String f53465b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(ByteString bytes) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer buffer = new Buffer();
            buffer.a2(bytes);
            return new k(s.f52575f.a(wm.j.a(buffer)), wm.j.b(buffer));
        }

        private a() {
        }
    }

    public k(s identifier, String name) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f53464a = identifier;
        this.f53465b = name;
    }

    public final s a() {
        return this.f53464a;
    }

    public final String b() {
        return this.f53465b;
    }

    public final boolean c(q otherWorkflow, String otherName) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(otherName, "otherName");
        if (Intrinsics.areEqual(this.f53464a, w.j(otherWorkflow)) && Intrinsics.areEqual(this.f53465b, otherName)) {
            return true;
        }
        return false;
    }

    public final ByteString d() {
        ByteString e10 = this.f53464a.e();
        if (e10 == null) {
            return null;
        }
        Buffer buffer = new Buffer();
        wm.j.c(buffer, e10);
        wm.j.d(buffer, b());
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
        if (Intrinsics.areEqual(this.f53464a, kVar.f53464a) && Intrinsics.areEqual(this.f53465b, kVar.f53465b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f53464a.hashCode() * 31) + this.f53465b.hashCode();
    }

    public String toString() {
        return "WorkflowNodeId(identifier=" + this.f53464a + ", name=" + this.f53465b + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public k(q workflow, String name) {
        this(w.j(workflow), name);
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(name, "name");
    }
}
