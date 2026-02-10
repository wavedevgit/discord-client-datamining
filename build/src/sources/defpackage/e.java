package defpackage;

import com.facebook.react.uimanager.ViewProps;
import dv.f;
import dv.g;
import dv.h;
import ev.d;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import rr.v;
import xu.b;
import xu.c;
/* renamed from: e  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface e {

    /* renamed from: e$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Function1 f20999a;

        /* renamed from: b  reason: collision with root package name */
        private final Map f21000b = o0.n(v.a("var", c.f55340a), v.a("missing_some", b.f55339a), v.a("missing", xu.a.f55338a), v.a(">", ev.a.f22144a), v.a(">=", ev.b.f22146a), v.a("<", ev.c.f22148a), v.a("<=", d.f22150a), v.a("min", dv.e.f20993a), v.a("max", dv.d.f20991a), v.a("+", dv.a.f20988a), v.a("-", h.f20998a), v.a("*", g.f20996a), v.a("/", dv.b.f20990a), v.a("%", f.f20995a), v.a("==", av.a.f6213a), v.a("!=", av.d.f6217a), v.a("===", bv.b.f7229a), v.a("!==", bv.a.f7227a), v.a("!", zu.d.f56705a), v.a("!!", zu.b.f56703a), v.a("and", zu.a.f56702a), v.a("or", zu.e.f56706a), v.a("if", zu.c.f56704a), v.a("cat", gv.a.f24831a), v.a("substr", gv.c.f24832a), v.a("merge", vu.e.f53001a), v.a("in", uu.d.f52062a));

        /* renamed from: c  reason: collision with root package name */
        private final Map f21001c = o0.n(v.a("map", vu.d.f53000a), v.a(ViewProps.FILTER, vu.c.f52999a), v.a("reduce", vu.g.f53002a), v.a("all", wu.a.f54065a), v.a(ViewProps.NONE, wu.b.f54066a), v.a("some", wu.e.f54071a));

        private final boolean f(String str) {
            if (!this.f21001c.containsKey(str) && !this.f21000b.containsKey(str)) {
                return true;
            }
            return false;
        }

        public final a a(String operationName, tu.a operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f21001c.put(operationName, operation);
            }
            return this;
        }

        public final a b(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                a((String) entry.getKey(), (tu.a) entry.getValue());
            }
            return this;
        }

        public final a c(String operationName, tu.b operation) {
            Intrinsics.checkNotNullParameter(operationName, "operationName");
            Intrinsics.checkNotNullParameter(operation, "operation");
            if (f(operationName)) {
                this.f21000b.put(operationName, operation);
            }
            return this;
        }

        public final a d(Map operations) {
            Intrinsics.checkNotNullParameter(operations, "operations");
            for (Map.Entry entry : operations.entrySet()) {
                c((String) entry.getKey(), (tu.b) entry.getValue());
            }
            return this;
        }

        public final e e() {
            tu.b bVar = (tu.b) this.f21000b.put("log", new uu.e(this.f20999a));
            return new defpackage.a(new er.a(new er.b(this.f21000b, this.f21001c)));
        }
    }

    g a(Map map, Object obj);
}
