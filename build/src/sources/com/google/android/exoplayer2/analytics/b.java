package com.google.android.exoplayer2.analytics;

import android.util.Base64;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.analytics.d;
import ii.r;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Random;
import kotlin.jvm.internal.LongCompanionObject;
import ne.w0;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements d {

    /* renamed from: i  reason: collision with root package name */
    public static final r f12731i = new r() { // from class: mc.l1
        @Override // ii.r
        public final Object get() {
            String n10;
            n10 = com.google.android.exoplayer2.analytics.b.n();
            return n10;
        }
    };

    /* renamed from: j  reason: collision with root package name */
    private static final Random f12732j = new Random();

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.d f12733a;

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.b f12734b;

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f12735c;

    /* renamed from: d  reason: collision with root package name */
    private final r f12736d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12737e;

    /* renamed from: f  reason: collision with root package name */
    private Timeline f12738f;

    /* renamed from: g  reason: collision with root package name */
    private String f12739g;

    /* renamed from: h  reason: collision with root package name */
    private long f12740h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f12741a;

        /* renamed from: b  reason: collision with root package name */
        private int f12742b;

        /* renamed from: c  reason: collision with root package name */
        private long f12743c;

        /* renamed from: d  reason: collision with root package name */
        private r.b f12744d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f12745e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f12746f;

        public a(String str, int i10, r.b bVar) {
            long j10;
            this.f12741a = str;
            this.f12742b = i10;
            if (bVar == null) {
                j10 = -1;
            } else {
                j10 = bVar.f47558d;
            }
            this.f12743c = j10;
            if (bVar != null && bVar.b()) {
                this.f12744d = bVar;
            }
        }

        private int l(Timeline timeline, Timeline timeline2, int i10) {
            if (i10 >= timeline.t()) {
                if (i10 >= timeline2.t()) {
                    return -1;
                }
                return i10;
            }
            timeline.r(i10, b.this.f12733a);
            for (int i11 = b.this.f12733a.f12648z; i11 <= b.this.f12733a.A; i11++) {
                int f10 = timeline2.f(timeline.q(i11));
                if (f10 != -1) {
                    return timeline2.j(f10, b.this.f12734b).f12625i;
                }
            }
            return -1;
        }

        public boolean i(int i10, r.b bVar) {
            if (bVar == null) {
                if (i10 != this.f12742b) {
                    return false;
                }
                return true;
            }
            r.b bVar2 = this.f12744d;
            if (bVar2 == null) {
                if (bVar.b() || bVar.f47558d != this.f12743c) {
                    return false;
                }
                return true;
            } else if (bVar.f47558d != bVar2.f47558d || bVar.f47556b != bVar2.f47556b || bVar.f47557c != bVar2.f47557c) {
                return false;
            } else {
                return true;
            }
        }

        public boolean j(AnalyticsListener.EventTime eventTime) {
            r.b bVar = eventTime.f12675d;
            if (bVar == null) {
                if (this.f12742b != eventTime.f12674c) {
                    return true;
                }
                return false;
            }
            long j10 = this.f12743c;
            if (j10 == -1) {
                return false;
            }
            if (bVar.f47558d > j10) {
                return true;
            }
            if (this.f12744d == null) {
                return false;
            }
            int f10 = eventTime.f12673b.f(bVar.f47555a);
            int f11 = eventTime.f12673b.f(this.f12744d.f47555a);
            r.b bVar2 = eventTime.f12675d;
            if (bVar2.f47558d < this.f12744d.f47558d || f10 < f11) {
                return false;
            }
            if (f10 > f11) {
                return true;
            }
            if (bVar2.b()) {
                r.b bVar3 = eventTime.f12675d;
                int i10 = bVar3.f47556b;
                int i11 = bVar3.f47557c;
                r.b bVar4 = this.f12744d;
                int i12 = bVar4.f47556b;
                if (i10 > i12 || (i10 == i12 && i11 > bVar4.f47557c)) {
                    return true;
                }
                return false;
            }
            int i13 = eventTime.f12675d.f47559e;
            if (i13 == -1 || i13 > this.f12744d.f47556b) {
                return true;
            }
            return false;
        }

        public void k(int i10, r.b bVar) {
            if (this.f12743c == -1 && i10 == this.f12742b && bVar != null && bVar.f47558d >= b.this.o()) {
                this.f12743c = bVar.f47558d;
            }
        }

        public boolean m(Timeline timeline, Timeline timeline2) {
            int l10 = l(timeline, timeline2, this.f12742b);
            this.f12742b = l10;
            if (l10 == -1) {
                return false;
            }
            r.b bVar = this.f12744d;
            if (bVar != null && timeline2.f(bVar.f47555a) == -1) {
                return false;
            }
            return true;
        }
    }

    public b() {
        this(f12731i);
    }

    private void m(a aVar) {
        if (aVar.f12743c != -1) {
            this.f12740h = aVar.f12743c;
        }
        this.f12739g = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n() {
        byte[] bArr = new byte[12];
        f12732j.nextBytes(bArr);
        return Base64.encodeToString(bArr, 10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long o() {
        a aVar = (a) this.f12735c.get(this.f12739g);
        if (aVar != null && aVar.f12743c != -1) {
            return aVar.f12743c;
        }
        return this.f12740h + 1;
    }

    private a p(int i10, r.b bVar) {
        int i11;
        a aVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        for (a aVar2 : this.f12735c.values()) {
            aVar2.k(i10, bVar);
            if (aVar2.i(i10, bVar)) {
                long j11 = aVar2.f12743c;
                if (j11 != -1 && j11 >= j10) {
                    if (i11 == 0 && ((a) w0.j(aVar)).f12744d != null && aVar2.f12744d != null) {
                        aVar = aVar2;
                    }
                } else {
                    aVar = aVar2;
                    j10 = j11;
                }
            }
        }
        if (aVar == null) {
            String str = (String) this.f12736d.get();
            a aVar3 = new a(str, i10, bVar);
            this.f12735c.put(str, aVar3);
            return aVar3;
        }
        return aVar;
    }

    private void q(AnalyticsListener.EventTime eventTime) {
        if (eventTime.f12673b.u()) {
            String str = this.f12739g;
            if (str != null) {
                m((a) ne.a.e((a) this.f12735c.get(str)));
                return;
            }
            return;
        }
        a aVar = (a) this.f12735c.get(this.f12739g);
        a p10 = p(eventTime.f12674c, eventTime.f12675d);
        this.f12739g = p10.f12741a;
        d(eventTime);
        r.b bVar = eventTime.f12675d;
        if (bVar != null && bVar.b()) {
            if (aVar == null || aVar.f12743c != eventTime.f12675d.f47558d || aVar.f12744d == null || aVar.f12744d.f47556b != eventTime.f12675d.f47556b || aVar.f12744d.f47557c != eventTime.f12675d.f47557c) {
                r.b bVar2 = eventTime.f12675d;
                this.f12737e.d(eventTime, p(eventTime.f12674c, new r.b(bVar2.f47555a, bVar2.f47558d)).f12741a, p10.f12741a);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String a() {
        return this.f12739g;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public void b(d.a aVar) {
        this.f12737e = aVar;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void c(AnalyticsListener.EventTime eventTime) {
        d.a aVar;
        try {
            String str = this.f12739g;
            if (str != null) {
                m((a) ne.a.e((a) this.f12735c.get(str)));
            }
            Iterator it = this.f12735c.values().iterator();
            while (it.hasNext()) {
                a aVar2 = (a) it.next();
                it.remove();
                if (aVar2.f12745e && (aVar = this.f12737e) != null) {
                    aVar.a(eventTime, aVar2.f12741a, false);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void d(AnalyticsListener.EventTime eventTime) {
        ne.a.e(this.f12737e);
        if (eventTime.f12673b.u()) {
            return;
        }
        r.b bVar = eventTime.f12675d;
        if (bVar != null) {
            if (bVar.f47558d < o()) {
                return;
            }
            a aVar = (a) this.f12735c.get(this.f12739g);
            if (aVar != null && aVar.f12743c == -1 && aVar.f12742b != eventTime.f12674c) {
                return;
            }
        }
        a p10 = p(eventTime.f12674c, eventTime.f12675d);
        if (this.f12739g == null) {
            this.f12739g = p10.f12741a;
        }
        r.b bVar2 = eventTime.f12675d;
        if (bVar2 != null && bVar2.b()) {
            r.b bVar3 = eventTime.f12675d;
            r.b bVar4 = new r.b(bVar3.f47555a, bVar3.f47558d, bVar3.f47556b);
            a p11 = p(eventTime.f12674c, bVar4);
            if (!p11.f12745e) {
                p11.f12745e = true;
                eventTime.f12673b.l(eventTime.f12675d.f47555a, this.f12734b);
                this.f12737e.c(new AnalyticsListener.EventTime(eventTime.f12672a, eventTime.f12673b, eventTime.f12674c, bVar4, Math.max(0L, w0.p1(this.f12734b.i(eventTime.f12675d.f47556b)) + this.f12734b.p()), eventTime.f12677f, eventTime.f12678g, eventTime.f12679h, eventTime.f12680i, eventTime.f12681j), p11.f12741a);
            }
        }
        if (!p10.f12745e) {
            p10.f12745e = true;
            this.f12737e.c(eventTime, p10.f12741a);
        }
        if (p10.f12741a.equals(this.f12739g) && !p10.f12746f) {
            p10.f12746f = true;
            this.f12737e.b(eventTime, p10.f12741a);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized boolean e(AnalyticsListener.EventTime eventTime, String str) {
        a aVar = (a) this.f12735c.get(str);
        if (aVar == null) {
            return false;
        }
        aVar.k(eventTime.f12674c, eventTime.f12675d);
        return aVar.i(eventTime.f12674c, eventTime.f12675d);
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void f(AnalyticsListener.EventTime eventTime, int i10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.e(this.f12737e);
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            Iterator it = this.f12735c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.j(eventTime)) {
                    it.remove();
                    if (aVar.f12745e) {
                        boolean equals = aVar.f12741a.equals(this.f12739g);
                        if (z10 && equals && aVar.f12746f) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        if (equals) {
                            m(aVar);
                        }
                        this.f12737e.a(eventTime, aVar.f12741a, z11);
                    }
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void g(AnalyticsListener.EventTime eventTime) {
        try {
            ne.a.e(this.f12737e);
            Timeline timeline = this.f12738f;
            this.f12738f = eventTime.f12673b;
            Iterator it = this.f12735c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.m(timeline, this.f12738f) && !aVar.j(eventTime)) {
                }
                it.remove();
                if (aVar.f12745e) {
                    if (aVar.f12741a.equals(this.f12739g)) {
                        m(aVar);
                    }
                    this.f12737e.a(eventTime, aVar.f12741a, false);
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String h(Timeline timeline, r.b bVar) {
        return p(timeline.l(bVar.f47555a, this.f12734b).f12625i, bVar).f12741a;
    }

    public b(ii.r rVar) {
        this.f12736d = rVar;
        this.f12733a = new Timeline.d();
        this.f12734b = new Timeline.b();
        this.f12735c = new HashMap();
        this.f12738f = Timeline.f12612d;
        this.f12740h = -1L;
    }
}
