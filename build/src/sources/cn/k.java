package cn;

import bn.q;
import bn.s;
import bn.w;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f7626c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final s f7627a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7628b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(ByteString bytes) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer buffer = new Buffer();
            buffer.Z1(bytes);
            return new k(s.f6933f.a(bn.j.a(buffer)), bn.j.b(buffer));
        }

        private a() {
        }
    }

    public k(s identifier, String name) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f7627a = identifier;
        this.f7628b = name;
    }

    public final s a() {
        return this.f7627a;
    }

    public final String b() {
        return this.f7628b;
    }

    public final boolean c(q otherWorkflow, String otherName) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(otherName, "otherName");
        if (Intrinsics.areEqual(this.f7627a, w.j(otherWorkflow)) && Intrinsics.areEqual(this.f7628b, otherName)) {
            return true;
        }
        return false;
    }

    public final ByteString d() {
        ByteString e10 = this.f7627a.e();
        if (e10 == null) {
            return null;
        }
        Buffer buffer = new Buffer();
        bn.j.c(buffer, e10);
        bn.j.d(buffer, b());
        return buffer.K1();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (Intrinsics.areEqual(this.f7627a, kVar.f7627a) && Intrinsics.areEqual(this.f7628b, kVar.f7628b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f7627a.hashCode() * 31) + this.f7628b.hashCode();
    }

    public String toString() {
        return "WorkflowNodeId(identifier=" + this.f7627a + ", name=" + this.f7628b + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public k(q workflow, String name) {
        this(w.j(workflow), name);
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(name, "name");
    }
}
