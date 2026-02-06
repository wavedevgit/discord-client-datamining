package zs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a extends o {

        /* renamed from: zs.o$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0796a {
            public static /* synthetic */ void a(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f56490e;
                    }
                    aVar.m(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: dayOfMonth");
            }

            public static /* synthetic */ void b(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f56490e;
                    }
                    aVar.s(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: monthNumber");
            }

            public static /* synthetic */ void c(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f56490e;
                    }
                    aVar.f(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: year");
            }
        }

        void f(h0 h0Var);

        void i(s sVar);

        void j(n nVar);

        void m(h0 h0Var);

        void s(h0 h0Var);

        void u(f0 f0Var);
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
                        h0Var = h0.f56490e;
                    }
                    cVar.p(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: hour");
            }

            public static /* synthetic */ void b(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f56490e;
                    }
                    cVar.d(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: minute");
            }

            public static /* synthetic */ void c(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f56490e;
                    }
                    cVar.n(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: second");
            }
        }

        void d(h0 h0Var);

        void n(h0 h0Var);

        void p(h0 h0Var);

        void t(int i10, int i11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface d extends o {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public static /* synthetic */ void a(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f56490e;
                    }
                    dVar.c(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetHours");
            }

            public static /* synthetic */ void b(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f56490e;
                    }
                    dVar.e(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetMinutesOfHour");
            }

            public static /* synthetic */ void c(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f56490e;
                    }
                    dVar.h(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetSecondsOfMinute");
            }
        }

        void c(h0 h0Var);

        void e(h0 h0Var);

        void g(n nVar);

        void h(h0 h0Var);
    }

    void r(String str);
}
