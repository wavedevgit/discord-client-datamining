package dn;

import cn.q;
import cn.s;
import cn.w;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f20905c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final s f20906a;

    /* renamed from: b  reason: collision with root package name */
    private final String f20907b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final k a(ByteString bytes) {
            Intrinsics.checkNotNullParameter(bytes, "bytes");
            Buffer buffer = new Buffer();
            buffer.Y1(bytes);
            return new k(s.f7774f.a(cn.j.a(buffer)), cn.j.b(buffer));
        }

        private a() {
        }
    }

    public k(s identifier, String name) {
        Intrinsics.checkNotNullParameter(identifier, "identifier");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f20906a = identifier;
        this.f20907b = name;
    }

    public final s a() {
        return this.f20906a;
    }

    public final String b() {
        return this.f20907b;
    }

    public final boolean c(q otherWorkflow, String otherName) {
        Intrinsics.checkNotNullParameter(otherWorkflow, "otherWorkflow");
        Intrinsics.checkNotNullParameter(otherName, "otherName");
        if (Intrinsics.areEqual(this.f20906a, w.j(otherWorkflow)) && Intrinsics.areEqual(this.f20907b, otherName)) {
            return true;
        }
        return false;
    }

    public final ByteString d() {
        ByteString e10 = this.f20906a.e();
        if (e10 == null) {
            return null;
        }
        Buffer buffer = new Buffer();
        cn.j.c(buffer, e10);
        cn.j.d(buffer, b());
        return buffer.I1();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof k)) {
            return false;
        }
        k kVar = (k) obj;
        if (Intrinsics.areEqual(this.f20906a, kVar.f20906a) && Intrinsics.areEqual(this.f20907b, kVar.f20907b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f20906a.hashCode() * 31) + this.f20907b.hashCode();
    }

    public String toString() {
        return "WorkflowNodeId(identifier=" + this.f20906a + ", name=" + this.f20907b + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public k(q workflow, String name) {
        this(w.j(workflow), name);
        Intrinsics.checkNotNullParameter(workflow, "workflow");
        Intrinsics.checkNotNullParameter(name, "name");
    }
}
