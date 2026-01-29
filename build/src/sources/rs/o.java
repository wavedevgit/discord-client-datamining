package rs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a extends o {

        /* renamed from: rs.o$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0611a {
            public static /* synthetic */ void a(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f48500e;
                    }
                    aVar.o(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: dayOfMonth");
            }

            public static /* synthetic */ void b(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f48500e;
                    }
                    aVar.u(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: monthNumber");
            }

            public static /* synthetic */ void c(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f48500e;
                    }
                    aVar.i(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: year");
            }
        }

        void f(s sVar);

        void i(h0 h0Var);

        void j(n nVar);

        void o(h0 h0Var);

        void s(f0 f0Var);

        void u(h0 h0Var);
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
                        h0Var = h0.f48500e;
                    }
                    cVar.e(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: hour");
            }

            public static /* synthetic */ void b(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f48500e;
                    }
                    cVar.m(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: minute");
            }

            public static /* synthetic */ void c(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f48500e;
                    }
                    cVar.d(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: second");
            }
        }

        void d(h0 h0Var);

        void e(h0 h0Var);

        void m(h0 h0Var);

        void q(int i10, int i11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface d extends o {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public static /* synthetic */ void a(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f48500e;
                    }
                    dVar.h(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetHours");
            }

            public static /* synthetic */ void b(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f48500e;
                    }
                    dVar.r(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetMinutesOfHour");
            }

            public static /* synthetic */ void c(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f48500e;
                    }
                    dVar.l(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetSecondsOfMinute");
            }
        }

        void h(h0 h0Var);

        void l(h0 h0Var);

        void r(h0 h0Var);

        void t(n nVar);
    }

    void p(String str);
}
