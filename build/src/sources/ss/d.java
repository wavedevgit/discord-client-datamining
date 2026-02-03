package ss;

import kotlin.jvm.internal.Intrinsics;
import ss.c;
import ss.f;
import ss.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d extends c, f, o.a, o.c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static void a(d dVar, us.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            dVar.v(structure);
        }

        public static void b(d dVar, us.o structure) {
            Intrinsics.checkNotNullParameter(structure, "structure");
            dVar.v(structure);
        }

        public static void c(d dVar, n format) {
            Intrinsics.checkNotNullParameter(format, "format");
            c.a.a(dVar, format);
        }

        public static void d(d dVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            c.a.b(dVar, padding);
        }

        public static void e(d dVar, s names) {
            Intrinsics.checkNotNullParameter(names, "names");
            c.a.c(dVar, names);
        }

        public static void f(d dVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            f.a.a(dVar, padding);
        }

        public static void g(d dVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            f.a.b(dVar, padding);
        }

        public static void h(d dVar, f0 names) {
            Intrinsics.checkNotNullParameter(names, "names");
            c.a.d(dVar, names);
        }

        public static void i(d dVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            c.a.e(dVar, padding);
        }

        public static void j(d dVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            f.a.c(dVar, padding);
        }

        public static void k(d dVar, int i10, int i11) {
            f.a.d(dVar, i10, i11);
        }

        public static void l(d dVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            c.a.f(dVar, padding);
        }
    }

    void v(us.o oVar);
}
