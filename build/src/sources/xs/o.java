package xs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a extends o {

        /* renamed from: xs.o$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0736a {
            public static /* synthetic */ void a(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f54129e;
                    }
                    aVar.w(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: dayOfMonth");
            }

            public static /* synthetic */ void b(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f54129e;
                    }
                    aVar.n(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: monthNumber");
            }

            public static /* synthetic */ void c(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f54129e;
                    }
                    aVar.c(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: year");
            }
        }

        void c(h0 h0Var);

        void e(f0 f0Var);

        void n(h0 h0Var);

        void s(s sVar);

        void t(n nVar);

        void w(h0 h0Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface b extends a, c, d {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface c extends o {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public static /* synthetic */ void a(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f54129e;
                    }
                    cVar.u(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: hour");
            }

            public static /* synthetic */ void b(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f54129e;
                    }
                    cVar.h(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: minute");
            }

            public static /* synthetic */ void c(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f54129e;
                    }
                    cVar.v(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: second");
            }
        }

        void h(h0 h0Var);

        void p(int i10, int i11);

        void u(h0 h0Var);

        void v(h0 h0Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface d extends o {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public static /* synthetic */ void a(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f54129e;
                    }
                    dVar.g(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetHours");
            }

            public static /* synthetic */ void b(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f54129e;
                    }
                    dVar.j(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetMinutesOfHour");
            }

            public static /* synthetic */ void c(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f54129e;
                    }
                    dVar.f(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetSecondsOfMinute");
            }
        }

        void f(h0 h0Var);

        void g(h0 h0Var);

        void j(h0 h0Var);

        void r(n nVar);
    }

    void m(String str);
}
