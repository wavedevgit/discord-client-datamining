package com.google.android.exoplayer2.analytics;

import android.util.Base64;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.analytics.d;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Random;
import kotlin.jvm.internal.LongCompanionObject;
import oe.w0;
import pi.r;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements d {

    /* renamed from: i  reason: collision with root package name */
    public static final r f12701i = new r() { // from class: nc.l1
        @Override // pi.r
        public final Object get() {
            String n10;
            n10 = com.google.android.exoplayer2.analytics.b.n();
            return n10;
        }
    };

    /* renamed from: j  reason: collision with root package name */
    private static final Random f12702j = new Random();

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.d f12703a;

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.b f12704b;

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f12705c;

    /* renamed from: d  reason: collision with root package name */
    private final r f12706d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12707e;

    /* renamed from: f  reason: collision with root package name */
    private Timeline f12708f;

    /* renamed from: g  reason: collision with root package name */
    private String f12709g;

    /* renamed from: h  reason: collision with root package name */
    private long f12710h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f12711a;

        /* renamed from: b  reason: collision with root package name */
        private int f12712b;

        /* renamed from: c  reason: collision with root package name */
        private long f12713c;

        /* renamed from: d  reason: collision with root package name */
        private r.b f12714d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f12715e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f12716f;

        public a(String str, int i10, r.b bVar) {
            long j10;
            this.f12711a = str;
            this.f12712b = i10;
            if (bVar == null) {
                j10 = -1;
            } else {
                j10 = bVar.f46441d;
            }
            this.f12713c = j10;
            if (bVar != null && bVar.b()) {
                this.f12714d = bVar;
            }
        }

        private int l(Timeline timeline, Timeline timeline2, int i10) {
            if (i10 >= timeline.t()) {
                if (i10 >= timeline2.t()) {
                    return -1;
                }
                return i10;
            }
            timeline.r(i10, b.this.f12703a);
            for (int i11 = b.this.f12703a.f12618z; i11 <= b.this.f12703a.A; i11++) {
                int f10 = timeline2.f(timeline.q(i11));
                if (f10 != -1) {
                    return timeline2.j(f10, b.this.f12704b).f12595i;
                }
            }
            return -1;
        }

        public boolean i(int i10, r.b bVar) {
            if (bVar == null) {
                if (i10 != this.f12712b) {
                    return false;
                }
                return true;
            }
            r.b bVar2 = this.f12714d;
            if (bVar2 == null) {
                if (bVar.b() || bVar.f46441d != this.f12713c) {
                    return false;
                }
                return true;
            } else if (bVar.f46441d != bVar2.f46441d || bVar.f46439b != bVar2.f46439b || bVar.f46440c != bVar2.f46440c) {
                return false;
            } else {
                return true;
            }
        }

        public boolean j(AnalyticsListener.EventTime eventTime) {
            r.b bVar = eventTime.f12645d;
            if (bVar == null) {
                if (this.f12712b != eventTime.f12644c) {
                    return true;
                }
                return false;
            }
            long j10 = this.f12713c;
            if (j10 == -1) {
                return false;
            }
            if (bVar.f46441d > j10) {
                return true;
            }
            if (this.f12714d == null) {
                return false;
            }
            int f10 = eventTime.f12643b.f(bVar.f46438a);
            int f11 = eventTime.f12643b.f(this.f12714d.f46438a);
            r.b bVar2 = eventTime.f12645d;
            if (bVar2.f46441d < this.f12714d.f46441d || f10 < f11) {
                return false;
            }
            if (f10 > f11) {
                return true;
            }
            if (bVar2.b()) {
                r.b bVar3 = eventTime.f12645d;
                int i10 = bVar3.f46439b;
                int i11 = bVar3.f46440c;
                r.b bVar4 = this.f12714d;
                int i12 = bVar4.f46439b;
                if (i10 > i12 || (i10 == i12 && i11 > bVar4.f46440c)) {
                    return true;
                }
                return false;
            }
            int i13 = eventTime.f12645d.f46442e;
            if (i13 == -1 || i13 > this.f12714d.f46439b) {
                return true;
            }
            return false;
        }

        public void k(int i10, r.b bVar) {
            if (this.f12713c == -1 && i10 == this.f12712b && bVar != null && bVar.f46441d >= b.this.o()) {
                this.f12713c = bVar.f46441d;
            }
        }

        public boolean m(Timeline timeline, Timeline timeline2) {
            int l10 = l(timeline, timeline2, this.f12712b);
            this.f12712b = l10;
            if (l10 == -1) {
                return false;
            }
            r.b bVar = this.f12714d;
            if (bVar != null && timeline2.f(bVar.f46438a) == -1) {
                return false;
            }
            return true;
        }
    }

    public b() {
        this(f12701i);
    }

    private void m(a aVar) {
        if (aVar.f12713c != -1) {
            this.f12710h = aVar.f12713c;
        }
        this.f12709g = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n() {
        byte[] bArr = new byte[12];
        f12702j.nextBytes(bArr);
        return Base64.encodeToString(bArr, 10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long o() {
        a aVar = (a) this.f12705c.get(this.f12709g);
        if (aVar != null && aVar.f12713c != -1) {
            return aVar.f12713c;
        }
        return this.f12710h + 1;
    }

    private a p(int i10, r.b bVar) {
        int i11;
        a aVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        for (a aVar2 : this.f12705c.values()) {
            aVar2.k(i10, bVar);
            if (aVar2.i(i10, bVar)) {
                long j11 = aVar2.f12713c;
                if (j11 != -1 && j11 >= j10) {
                    if (i11 == 0 && ((a) w0.j(aVar)).f12714d != null && aVar2.f12714d != null) {
                        aVar = aVar2;
                    }
                } else {
                    aVar = aVar2;
                    j10 = j11;
                }
            }
        }
        if (aVar == null) {
            String str = (String) this.f12706d.get();
            a aVar3 = new a(str, i10, bVar);
            this.f12705c.put(str, aVar3);
            return aVar3;
        }
        return aVar;
    }

    private void q(AnalyticsListener.EventTime eventTime) {
        if (eventTime.f12643b.u()) {
            String str = this.f12709g;
            if (str != null) {
                m((a) oe.a.e((a) this.f12705c.get(str)));
                return;
            }
            return;
        }
        a aVar = (a) this.f12705c.get(this.f12709g);
        a p10 = p(eventTime.f12644c, eventTime.f12645d);
        this.f12709g = p10.f12711a;
        d(eventTime);
        r.b bVar = eventTime.f12645d;
        if (bVar != null && bVar.b()) {
            if (aVar == null || aVar.f12713c != eventTime.f12645d.f46441d || aVar.f12714d == null || aVar.f12714d.f46439b != eventTime.f12645d.f46439b || aVar.f12714d.f46440c != eventTime.f12645d.f46440c) {
                r.b bVar2 = eventTime.f12645d;
                this.f12707e.d(eventTime, p(eventTime.f12644c, new r.b(bVar2.f46438a, bVar2.f46441d)).f12711a, p10.f12711a);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String a() {
        return this.f12709g;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public void b(d.a aVar) {
        this.f12707e = aVar;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void c(AnalyticsListener.EventTime eventTime) {
        d.a aVar;
        try {
            String str = this.f12709g;
            if (str != null) {
                m((a) oe.a.e((a) this.f12705c.get(str)));
            }
            Iterator it = this.f12705c.values().iterator();
            while (it.hasNext()) {
                a aVar2 = (a) it.next();
                it.remove();
                if (aVar2.f12715e && (aVar = this.f12707e) != null) {
                    aVar.a(eventTime, aVar2.f12711a, false);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void d(AnalyticsListener.EventTime eventTime) {
        oe.a.e(this.f12707e);
        if (eventTime.f12643b.u()) {
            return;
        }
        r.b bVar = eventTime.f12645d;
        if (bVar != null) {
            if (bVar.f46441d < o()) {
                return;
            }
            a aVar = (a) this.f12705c.get(this.f12709g);
            if (aVar != null && aVar.f12713c == -1 && aVar.f12712b != eventTime.f12644c) {
                return;
            }
        }
        a p10 = p(eventTime.f12644c, eventTime.f12645d);
        if (this.f12709g == null) {
            this.f12709g = p10.f12711a;
        }
        r.b bVar2 = eventTime.f12645d;
        if (bVar2 != null && bVar2.b()) {
            r.b bVar3 = eventTime.f12645d;
            r.b bVar4 = new r.b(bVar3.f46438a, bVar3.f46441d, bVar3.f46439b);
            a p11 = p(eventTime.f12644c, bVar4);
            if (!p11.f12715e) {
                p11.f12715e = true;
                eventTime.f12643b.l(eventTime.f12645d.f46438a, this.f12704b);
                this.f12707e.c(new AnalyticsListener.EventTime(eventTime.f12642a, eventTime.f12643b, eventTime.f12644c, bVar4, Math.max(0L, w0.p1(this.f12704b.i(eventTime.f12645d.f46439b)) + this.f12704b.p()), eventTime.f12647f, eventTime.f12648g, eventTime.f12649h, eventTime.f12650i, eventTime.f12651j), p11.f12711a);
            }
        }
        if (!p10.f12715e) {
            p10.f12715e = true;
            this.f12707e.c(eventTime, p10.f12711a);
        }
        if (p10.f12711a.equals(this.f12709g) && !p10.f12716f) {
            p10.f12716f = true;
            this.f12707e.b(eventTime, p10.f12711a);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String e(Timeline timeline, r.b bVar) {
        return p(timeline.l(bVar.f46438a, this.f12704b).f12595i, bVar).f12711a;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized boolean f(AnalyticsListener.EventTime eventTime, String str) {
        a aVar = (a) this.f12705c.get(str);
        if (aVar == null) {
            return false;
        }
        aVar.k(eventTime.f12644c, eventTime.f12645d);
        return aVar.i(eventTime.f12644c, eventTime.f12645d);
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void g(AnalyticsListener.EventTime eventTime, int i10) {
        boolean z10;
        boolean z11;
        try {
            oe.a.e(this.f12707e);
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            Iterator it = this.f12705c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.j(eventTime)) {
                    it.remove();
                    if (aVar.f12715e) {
                        boolean equals = aVar.f12711a.equals(this.f12709g);
                        if (z10 && equals && aVar.f12716f) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        if (equals) {
                            m(aVar);
                        }
                        this.f12707e.a(eventTime, aVar.f12711a, z11);
                    }
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void h(AnalyticsListener.EventTime eventTime) {
        try {
            oe.a.e(this.f12707e);
            Timeline timeline = this.f12708f;
            this.f12708f = eventTime.f12643b;
            Iterator it = this.f12705c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.m(timeline, this.f12708f) && !aVar.j(eventTime)) {
                }
                it.remove();
                if (aVar.f12715e) {
                    if (aVar.f12711a.equals(this.f12709g)) {
                        m(aVar);
                    }
                    this.f12707e.a(eventTime, aVar.f12711a, false);
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public b(pi.r rVar) {
        this.f12706d = rVar;
        this.f12703a = new Timeline.d();
        this.f12704b = new Timeline.b();
        this.f12705c = new HashMap();
        this.f12708f = Timeline.f12582d;
        this.f12710h = -1L;
    }
}
