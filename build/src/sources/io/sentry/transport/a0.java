package io.sentry.transport;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import io.sentry.Hint;
import io.sentry.SentryLevel;
import io.sentry.a1;
import io.sentry.k7;
import io.sentry.l5;
import io.sentry.l6;
import io.sentry.util.f0;
import io.sentry.util.n;
import java.io.Closeable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final p f30305d;

    /* renamed from: e  reason: collision with root package name */
    private final k7 f30306e;

    /* renamed from: i  reason: collision with root package name */
    private final Map f30307i;

    /* renamed from: o  reason: collision with root package name */
    private final List f30308o;

    /* renamed from: p  reason: collision with root package name */
    private Timer f30309p;

    /* renamed from: q  reason: collision with root package name */
    private final io.sentry.util.a f30310q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends TimerTask {
        a() {
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            a0.this.D0();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void E(a0 a0Var);
    }

    public a0(p pVar, k7 k7Var) {
        this.f30307i = new ConcurrentHashMap();
        this.f30308o = new CopyOnWriteArrayList();
        this.f30309p = null;
        this.f30310q = new io.sentry.util.a();
        this.f30305d = pVar;
        this.f30306e = k7Var;
    }

    private void B(io.sentry.j jVar, Date date) {
        Date date2 = (Date) this.f30307i.get(jVar);
        if (date2 == null || date.after(date2)) {
            this.f30307i.put(jVar, date);
            D0();
            a1 a10 = this.f30310q.a();
            try {
                if (this.f30309p == null) {
                    this.f30309p = new Timer(true);
                }
                this.f30309p.schedule(new a(), date);
                if (a10 != null) {
                    a10.close();
                }
            } catch (Throwable th2) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void D0() {
        for (b bVar : this.f30308o) {
            bVar.E(this);
        }
    }

    private long E0(String str) {
        if (str != null) {
            try {
                return (long) (Double.parseDouble(str) * 1000.0d);
            } catch (NumberFormatException unused) {
                return LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE;
            }
        }
        return LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE;
    }

    private List F(String str) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1963501277:
                if (str.equals("attachment")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1639516637:
                if (str.equals("replay_video")) {
                    c10 = 1;
                    break;
                }
                break;
            case -729715625:
                if (str.equals("profile_chunk")) {
                    c10 = 2;
                    break;
                }
                break;
            case -309425751:
                if (str.equals("profile")) {
                    c10 = 3;
                    break;
                }
                break;
            case -191501435:
                if (str.equals("feedback")) {
                    c10 = 4;
                    break;
                }
                break;
            case 107332:
                if (str.equals("log")) {
                    c10 = 5;
                    break;
                }
                break;
            case 96891546:
                if (str.equals("event")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1536888764:
                if (str.equals("check_in")) {
                    c10 = 7;
                    break;
                }
                break;
            case 1984987798:
                if (str.equals("session")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 2141246174:
                if (str.equals("transaction")) {
                    c10 = '\t';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return Collections.singletonList(io.sentry.j.Attachment);
            case 1:
                return Collections.singletonList(io.sentry.j.Replay);
            case 2:
                return Arrays.asList(io.sentry.j.ProfileChunkUi, io.sentry.j.ProfileChunk);
            case 3:
                return Collections.singletonList(io.sentry.j.Profile);
            case 4:
                return Collections.singletonList(io.sentry.j.Feedback);
            case 5:
                return Collections.singletonList(io.sentry.j.LogItem);
            case 6:
                return Collections.singletonList(io.sentry.j.Error);
            case 7:
                return Collections.singletonList(io.sentry.j.Monitor);
            case '\b':
                return Collections.singletonList(io.sentry.j.Session);
            case '\t':
                return Collections.singletonList(io.sentry.j.Transaction);
            default:
                return Collections.singletonList(io.sentry.j.Unknown);
        }
    }

    private boolean V(String str) {
        for (io.sentry.j jVar : F(str)) {
            if (L(jVar)) {
                return true;
            }
        }
        return false;
    }

    public static /* synthetic */ void l(a0 a0Var, io.sentry.hints.f fVar) {
        a0Var.getClass();
        fVar.d();
        a0Var.f30306e.getLogger().c(SentryLevel.DEBUG, "Disk flush envelope fired due to rate limit", new Object[0]);
    }

    private void t0(Hint hint, final boolean z10) {
        io.sentry.util.n.k(hint, io.sentry.hints.p.class, new n.a() { // from class: io.sentry.transport.x
            @Override // io.sentry.util.n.a
            public final void accept(Object obj) {
                ((io.sentry.hints.p) obj).c(false);
            }
        });
        io.sentry.util.n.k(hint, io.sentry.hints.k.class, new n.a() { // from class: io.sentry.transport.y
            @Override // io.sentry.util.n.a
            public final void accept(Object obj) {
                ((io.sentry.hints.k) obj).d(z10);
            }
        });
        io.sentry.util.n.k(hint, io.sentry.hints.f.class, new n.a() { // from class: io.sentry.transport.z
            @Override // io.sentry.util.n.a
            public final void accept(Object obj) {
                a0.l(a0.this, (io.sentry.hints.f) obj);
            }
        });
    }

    public l5 E(l5 l5Var, Hint hint) {
        ArrayList arrayList = null;
        for (l6 l6Var : l5Var.c()) {
            if (V(l6Var.K().b().getItemType())) {
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                arrayList.add(l6Var);
                this.f30306e.getClientReportRecorder().d(io.sentry.clientreport.f.RATELIMIT_BACKOFF, l6Var);
            }
        }
        if (arrayList != null) {
            this.f30306e.getLogger().c(SentryLevel.WARNING, "%d envelope items will be dropped due rate limiting.", Integer.valueOf(arrayList.size()));
            ArrayList arrayList2 = new ArrayList();
            for (l6 l6Var2 : l5Var.c()) {
                if (!arrayList.contains(l6Var2)) {
                    arrayList2.add(l6Var2);
                }
            }
            if (arrayList2.isEmpty()) {
                this.f30306e.getLogger().c(SentryLevel.WARNING, "Envelope discarded due all items rate limited.", new Object[0]);
                t0(hint, false);
                return null;
            }
            return new l5(l5Var.b(), arrayList2);
        }
        return l5Var;
    }

    public void F0(b bVar) {
        this.f30308o.remove(bVar);
    }

    public void G0(String str, String str2, int i10) {
        String[] split;
        if (str != null) {
            for (String str3 : str.split(",", -1)) {
                String[] split2 = str3.replace(" ", "").split(":", -1);
                if (split2.length > 0) {
                    long E0 = E0(split2[0]);
                    if (split2.length > 1) {
                        String str4 = split2[1];
                        Date date = new Date(this.f30305d.a() + E0);
                        if (str4 != null && !str4.isEmpty()) {
                            for (String str5 : str4.split(";", -1)) {
                                io.sentry.j jVar = io.sentry.j.Unknown;
                                try {
                                    String b10 = f0.b(str5);
                                    if (b10 != null) {
                                        jVar = io.sentry.j.valueOf(b10);
                                    } else {
                                        this.f30306e.getLogger().c(SentryLevel.ERROR, "Couldn't capitalize: %s", str5);
                                    }
                                } catch (IllegalArgumentException e10) {
                                    this.f30306e.getLogger().a(SentryLevel.INFO, e10, "Unknown category: %s", str5);
                                }
                                if (!io.sentry.j.Unknown.equals(jVar)) {
                                    B(jVar, date);
                                }
                            }
                        } else {
                            B(io.sentry.j.All, date);
                        }
                    }
                }
            }
        } else if (i10 == 429) {
            B(io.sentry.j.All, new Date(this.f30305d.a() + E0(str2)));
        }
    }

    public boolean L(io.sentry.j jVar) {
        Date date;
        Date date2 = new Date(this.f30305d.a());
        Date date3 = (Date) this.f30307i.get(io.sentry.j.All);
        if (date3 != null && !date2.after(date3)) {
            return true;
        }
        if (io.sentry.j.Unknown.equals(jVar) || (date = (Date) this.f30307i.get(jVar)) == null) {
            return false;
        }
        return !date2.after(date);
    }

    public boolean N() {
        Date date = new Date(this.f30305d.a());
        for (io.sentry.j jVar : this.f30307i.keySet()) {
            Date date2 = (Date) this.f30307i.get(jVar);
            if (date2 != null && !date.after(date2)) {
                return true;
            }
        }
        return false;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a1 a10 = this.f30310q.a();
        try {
            Timer timer = this.f30309p;
            if (timer != null) {
                timer.cancel();
                this.f30309p = null;
            }
            if (a10 != null) {
                a10.close();
            }
            this.f30308o.clear();
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public void x(b bVar) {
        this.f30308o.add(bVar);
    }

    public a0(k7 k7Var) {
        this(n.b(), k7Var);
    }
}
