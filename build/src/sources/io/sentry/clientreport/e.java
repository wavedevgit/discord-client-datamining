package io.sentry.clientreport;

import io.sentry.SentryLevel;
import io.sentry.k;
import io.sentry.k7;
import io.sentry.l5;
import io.sentry.l6;
import io.sentry.protocol.d0;
import io.sentry.v6;
import io.sentry.z6;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements h {

    /* renamed from: a  reason: collision with root package name */
    private final i f29805a = new b();

    /* renamed from: b  reason: collision with root package name */
    private final k7 f29806b;

    public e(k7 k7Var) {
        this.f29806b = k7Var;
    }

    private io.sentry.j f(v6 v6Var) {
        if (v6.Event.equals(v6Var)) {
            return io.sentry.j.Error;
        }
        if (v6.Session.equals(v6Var)) {
            return io.sentry.j.Session;
        }
        if (v6.Transaction.equals(v6Var)) {
            return io.sentry.j.Transaction;
        }
        if (v6.UserFeedback.equals(v6Var)) {
            return io.sentry.j.UserReport;
        }
        if (v6.Feedback.equals(v6Var)) {
            return io.sentry.j.Feedback;
        }
        if (v6.Profile.equals(v6Var)) {
            return io.sentry.j.Profile;
        }
        if (v6.ProfileChunk.equals(v6Var)) {
            return io.sentry.j.ProfileChunkUi;
        }
        if (v6.Attachment.equals(v6Var)) {
            return io.sentry.j.Attachment;
        }
        if (v6.CheckIn.equals(v6Var)) {
            return io.sentry.j.Monitor;
        }
        if (v6.ReplayVideo.equals(v6Var)) {
            return io.sentry.j.Replay;
        }
        if (v6.Log.equals(v6Var)) {
            return io.sentry.j.LogItem;
        }
        return io.sentry.j.Default;
    }

    private void g(f fVar, io.sentry.j jVar, Long l10) {
        this.f29806b.getOnDiscard();
    }

    private void h(String str, String str2, Long l10) {
        this.f29805a.a(new d(str, str2), l10);
    }

    private void j(c cVar) {
        if (cVar != null) {
            for (g gVar : cVar.a()) {
                h(gVar.c(), gVar.a(), gVar.b());
            }
        }
    }

    @Override // io.sentry.clientreport.h
    public void a(f fVar, io.sentry.j jVar) {
        c(fVar, jVar, 1L);
    }

    @Override // io.sentry.clientreport.h
    public void b(f fVar, l5 l5Var) {
        if (l5Var != null) {
            try {
                for (l6 l6Var : l5Var.c()) {
                    d(fVar, l6Var);
                }
            } catch (Throwable th2) {
                this.f29806b.getLogger().a(SentryLevel.ERROR, th2, "Unable to record lost envelope.", new Object[0]);
            }
        }
    }

    @Override // io.sentry.clientreport.h
    public void c(f fVar, io.sentry.j jVar, long j10) {
        try {
            h(fVar.getReason(), jVar.getCategory(), Long.valueOf(j10));
            g(fVar, jVar, Long.valueOf(j10));
        } catch (Throwable th2) {
            this.f29806b.getLogger().a(SentryLevel.ERROR, th2, "Unable to record lost event.", new Object[0]);
        }
    }

    @Override // io.sentry.clientreport.h
    public void d(f fVar, l6 l6Var) {
        if (l6Var != null) {
            try {
                v6 b10 = l6Var.K().b();
                if (v6.ClientReport.equals(b10)) {
                    try {
                        j(l6Var.H(this.f29806b.getSerializer()));
                        return;
                    } catch (Exception unused) {
                        this.f29806b.getLogger().c(SentryLevel.ERROR, "Unable to restore counts from previous client report.", new Object[0]);
                        return;
                    }
                }
                io.sentry.j f10 = f(b10);
                if (f10.equals(io.sentry.j.Transaction)) {
                    d0 M = l6Var.M(this.f29806b.getSerializer());
                    if (M != null) {
                        List q02 = M.q0();
                        String reason = fVar.getReason();
                        io.sentry.j jVar = io.sentry.j.Span;
                        h(reason, jVar.getCategory(), Long.valueOf(q02.size() + 1));
                        g(fVar, jVar, Long.valueOf(q02.size() + 1));
                    }
                    h(fVar.getReason(), f10.getCategory(), 1L);
                    g(fVar, f10, 1L);
                } else if (f10.equals(io.sentry.j.LogItem)) {
                    z6 L = l6Var.L(this.f29806b.getSerializer());
                    if (L != null) {
                        long size = L.a().size();
                        h(fVar.getReason(), f10.getCategory(), Long.valueOf(size));
                        h(fVar.getReason(), io.sentry.j.LogByte.getCategory(), Long.valueOf(l6Var.I().length));
                        g(fVar, f10, Long.valueOf(size));
                        return;
                    }
                    this.f29806b.getLogger().c(SentryLevel.ERROR, "Unable to parse lost logs envelope item.", new Object[0]);
                } else {
                    h(fVar.getReason(), f10.getCategory(), 1L);
                    g(fVar, f10, 1L);
                }
            } catch (Throwable th2) {
                this.f29806b.getLogger().a(SentryLevel.ERROR, th2, "Unable to record lost envelope item.", new Object[0]);
            }
        }
    }

    @Override // io.sentry.clientreport.h
    public l5 e(l5 l5Var) {
        c i10 = i();
        if (i10 == null) {
            return l5Var;
        }
        try {
            this.f29806b.getLogger().c(SentryLevel.DEBUG, "Attaching client report to envelope.", new Object[0]);
            ArrayList arrayList = new ArrayList();
            for (l6 l6Var : l5Var.c()) {
                arrayList.add(l6Var);
            }
            arrayList.add(l6.A(this.f29806b.getSerializer(), i10));
            return new l5(l5Var.b(), arrayList);
        } catch (Throwable th2) {
            this.f29806b.getLogger().a(SentryLevel.ERROR, th2, "Unable to attach client report to envelope.", new Object[0]);
            return l5Var;
        }
    }

    c i() {
        Date d10 = k.d();
        List b10 = this.f29805a.b();
        if (b10.isEmpty()) {
            return null;
        }
        return new c(d10, b10);
    }
}
