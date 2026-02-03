package ss;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface a extends o {

        /* renamed from: ss.o$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0631a {
            public static /* synthetic */ void a(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f49297e;
                    }
                    aVar.m(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: dayOfMonth");
            }

            public static /* synthetic */ void b(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f49297e;
                    }
                    aVar.e(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: monthNumber");
            }

            public static /* synthetic */ void c(a aVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f49297e;
                    }
                    aVar.i(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: year");
            }
        }

        void e(h0 h0Var);

        void g(f0 f0Var);

        void i(h0 h0Var);

        void m(h0 h0Var);

        void p(s sVar);

        void q(n nVar);
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
                        h0Var = h0.f49297e;
                    }
                    cVar.l(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: hour");
            }

            public static /* synthetic */ void b(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f49297e;
                    }
                    cVar.s(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: minute");
            }

            public static /* synthetic */ void c(c cVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f49297e;
                    }
                    cVar.k(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: second");
            }
        }

        void k(h0 h0Var);

        void l(h0 h0Var);

        void r(int i10, int i11);

        void s(h0 h0Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface d extends o {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public static /* synthetic */ void a(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f49297e;
                    }
                    dVar.d(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetHours");
            }

            public static /* synthetic */ void b(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f49297e;
                    }
                    dVar.u(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetMinutesOfHour");
            }

            public static /* synthetic */ void c(d dVar, h0 h0Var, int i10, Object obj) {
                if (obj == null) {
                    if ((i10 & 1) != 0) {
                        h0Var = h0.f49297e;
                    }
                    dVar.t(h0Var);
                    return;
                }
                throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: offsetSecondsOfMinute");
            }
        }

        void d(h0 h0Var);

        void n(n nVar);

        void t(h0 h0Var);

        void u(h0 h0Var);
    }

    void o(String str);
}
