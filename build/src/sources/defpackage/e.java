package defpackage;

import av.f;
import av.g;
import av.h;
import bv.d;
import com.facebook.react.uimanager.ViewProps;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import or.v;
import uu.b;
import uu.c;
/* renamed from: e  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface e {

    /* renamed from: e$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Function1 f21271a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f21272b = o0.n(v.a("var", c.f51729a), v.a("missing_some", b.f51728a), v.a("missing", uu.a.f51727a), v.a(">", bv.a.f7280a), v.a(">=", bv.b.f7282a), v.a("<", bv.c.f7284a), v.a("<=", d.f7286a), v.a("min", av.e.f6007a), v.a("max", av.d.f6005a), v.a("+", av.a.f6002a), v.a("-", h.f6012a), v.a("*", g.f6010a), v.a("/", av.b.f6004a), v.a("%", f.f6009a), v.a("==", xu.a.f54274a), v.a("!=", xu.d.f54278a), v.a("===", yu.b.f54930a), v.a("!==", yu.a.f54928a), v.a("!", wu.d.f53317a), v.a("!!", wu.b.f53315a), v.a("and", wu.a.f53314a), v.a("or", wu.e.f53318a), v.a("if", wu.c.f53316a), v.a("cat", dv.a.f21269a), v.a("substr", dv.c.f21270a), v.a("merge", su.e.f50247a), v.a("in", ru.d.f49246a));

        /* renamed from: c  reason: collision with root package name */
        private final Map f21273c = o0.n(v.a("map", su.d.f50246a), v.a(ViewProps.FILTER, su.c.f50245a), v.a("reduce", su.g.f50248a), v.a("all", tu.a.f51062a), v.a(ViewProps.NONE, tu.b.f51063a), v.a("some", tu.e.f51068a));

        private final boolean f(String str) {
            if (!this.f21273c.containsKey(str) && !this.f21272b.containsKey(str)) {
                return true;
            }
            return false;
        }

        public final a a(String operationName, qu.a operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f21273c.put(operationName, operation);
            }
            return this;
        }

        public final a b(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                a((String) entry.getKey(), (qu.a) entry.getValue());
            }
            return this;
        }

        public final a c(String operationName, qu.b operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f21272b.put(operationName, operation);
            }
            return this;
        }

        public final a d(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                c((String) entry.getKey(), (qu.b) entry.getValue());
            }
            return this;
        }

        public final e e() {
            qu.b bVar = (qu.b) this.f21272b.put("log", new ru.e(this.f21271a));
            return new defpackage.a(new br.a(new br.b(this.f21272b, this.f21273c)));
        }
    }

    g a(Map map, Object obj);
}
