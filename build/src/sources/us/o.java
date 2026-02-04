package us;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a extends o {

        /* renamed from: us.o$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0659a {
            public static /* synthetic */ void a(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f50890e;
                    }
                    aVar.u(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: dayOfMonth");
            }

            public static /* synthetic */ void b(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f50890e;
                    }
                    aVar.v(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: monthNumber");
            }

            public static /* synthetic */ void c(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f50890e;
                    }
                    aVar.p(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: year");
            }
        }

        void c(s sVar);

        void e(f0 f0Var);

        void p(h0 h0Var);

        void t(n nVar);

        void u(h0 h0Var);

        void v(h0 h0Var);
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
                        h0Var = h0.f50890e;
                    }
                    cVar.m(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: hour");
            }

            public static /* synthetic */ void b(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f50890e;
                    }
                    cVar.n(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: minute");
            }

            public static /* synthetic */ void c(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f50890e;
                    }
                    cVar.l(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: second");
            }
        }

        void l(h0 h0Var);

        void m(h0 h0Var);

        void n(h0 h0Var);

        void o(int i10, int i11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface d extends o {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public static /* synthetic */ void a(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f50890e;
                    }
                    dVar.q(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetHours");
            }

            public static /* synthetic */ void b(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f50890e;
                    }
                    dVar.d(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetMinutesOfHour");
            }

            public static /* synthetic */ void c(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f50890e;
                    }
                    dVar.j(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetSecondsOfMinute");
            }
        }

        void d(h0 h0Var);

        void j(h0 h0Var);

        void q(h0 h0Var);

        void r(n nVar);
    }

    void k(String str);
}
