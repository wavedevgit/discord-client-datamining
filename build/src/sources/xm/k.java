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
    public static final a f53466c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final s f53467a;

    /* renamed from: b  reason: collision with root package name */
    private final String f53468b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(ByteString bytes) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer buffer = new Buffer();
            buffer.a2(bytes);
            return new k(s.f52578f.a(wm.j.a(buffer)), wm.j.b(buffer));
        }

        private a() {
        }
    }

    public k(s identifier, String name) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f53467a = identifier;
        this.f53468b = name;
    }

    public final s a() {
        return this.f53467a;
    }

    public final String b() {
        return this.f53468b;
    }

    public final boolean c(q otherWorkflow, String otherName) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(otherName, "otherName");
        if (Intrinsics.areEqual(this.f53467a, w.j(otherWorkflow)) && Intrinsics.areEqual(this.f53468b, otherName)) {
            return true;
        }
        return false;
    }

    public final ByteString d() {
        ByteString e10 = this.f53467a.e();
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
        if (Intrinsics.areEqual(this.f53467a, kVar.f53467a) && Intrinsics.areEqual(this.f53468b, kVar.f53468b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f53467a.hashCode() * 31) + this.f53468b.hashCode();
    }

    public String toString() {
        return "WorkflowNodeId(identifier=" + this.f53467a + ", name=" + this.f53468b + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public k(q workflow, String name) {
        this(w.j(workflow), name);
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(name, "name");
    }
}
