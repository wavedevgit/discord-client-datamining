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
    public static final r f12700i = new r() { // from class: nc.l1
        @Override // pi.r
        public final Object get() {
            String n10;
            n10 = com.google.android.exoplayer2.analytics.b.n();
            return n10;
        }
    };

    /* renamed from: j  reason: collision with root package name */
    private static final Random f12701j = new Random();

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.d f12702a;

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.b f12703b;

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f12704c;

    /* renamed from: d  reason: collision with root package name */
    private final r f12705d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12706e;

    /* renamed from: f  reason: collision with root package name */
    private Timeline f12707f;

    /* renamed from: g  reason: collision with root package name */
    private String f12708g;

    /* renamed from: h  reason: collision with root package name */
    private long f12709h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f12710a;

        /* renamed from: b  reason: collision with root package name */
        private int f12711b;

        /* renamed from: c  reason: collision with root package name */
        private long f12712c;

        /* renamed from: d  reason: collision with root package name */
        private r.b f12713d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f12714e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f12715f;

        public a(String str, int i10, r.b bVar) {
            long j10;
            this.f12710a = str;
            this.f12711b = i10;
            if (bVar == null) {
                j10 = -1;
            } else {
                j10 = bVar.f46440d;
            }
            this.f12712c = j10;
            if (bVar != null && bVar.b()) {
                this.f12713d = bVar;
            }
        }

        private int l(Timeline timeline, Timeline timeline2, int i10) {
            if (i10 >= timeline.t()) {
                if (i10 >= timeline2.t()) {
                    return -1;
                }
                return i10;
            }
            timeline.r(i10, b.this.f12702a);
            for (int i11 = b.this.f12702a.f12617z; i11 <= b.this.f12702a.A; i11++) {
                int f10 = timeline2.f(timeline.q(i11));
                if (f10 != -1) {
                    return timeline2.j(f10, b.this.f12703b).f12594i;
                }
            }
            return -1;
        }

        public boolean i(int i10, r.b bVar) {
            if (bVar == null) {
                if (i10 != this.f12711b) {
                    return false;
                }
                return true;
            }
            r.b bVar2 = this.f12713d;
            if (bVar2 == null) {
                if (bVar.b() || bVar.f46440d != this.f12712c) {
                    return false;
                }
                return true;
            } else if (bVar.f46440d != bVar2.f46440d || bVar.f46438b != bVar2.f46438b || bVar.f46439c != bVar2.f46439c) {
                return false;
            } else {
                return true;
            }
        }

        public boolean j(AnalyticsListener.EventTime eventTime) {
            r.b bVar = eventTime.f12644d;
            if (bVar == null) {
                if (this.f12711b != eventTime.f12643c) {
                    return true;
                }
                return false;
            }
            long j10 = this.f12712c;
            if (j10 == -1) {
                return false;
            }
            if (bVar.f46440d > j10) {
                return true;
            }
            if (this.f12713d == null) {
                return false;
            }
            int f10 = eventTime.f12642b.f(bVar.f46437a);
            int f11 = eventTime.f12642b.f(this.f12713d.f46437a);
            r.b bVar2 = eventTime.f12644d;
            if (bVar2.f46440d < this.f12713d.f46440d || f10 < f11) {
                return false;
            }
            if (f10 > f11) {
                return true;
            }
            if (bVar2.b()) {
                r.b bVar3 = eventTime.f12644d;
                int i10 = bVar3.f46438b;
                int i11 = bVar3.f46439c;
                r.b bVar4 = this.f12713d;
                int i12 = bVar4.f46438b;
                if (i10 > i12 || (i10 == i12 && i11 > bVar4.f46439c)) {
                    return true;
                }
                return false;
            }
            int i13 = eventTime.f12644d.f46441e;
            if (i13 == -1 || i13 > this.f12713d.f46438b) {
                return true;
            }
            return false;
        }

        public void k(int i10, r.b bVar) {
            if (this.f12712c == -1 && i10 == this.f12711b && bVar != null && bVar.f46440d >= b.this.o()) {
                this.f12712c = bVar.f46440d;
            }
        }

        public boolean m(Timeline timeline, Timeline timeline2) {
            int l10 = l(timeline, timeline2, this.f12711b);
            this.f12711b = l10;
            if (l10 == -1) {
                return false;
            }
            r.b bVar = this.f12713d;
            if (bVar != null && timeline2.f(bVar.f46437a) == -1) {
                return false;
            }
            return true;
        }
    }

    public b() {
        this(f12700i);
    }

    private void m(a aVar) {
        if (aVar.f12712c != -1) {
            this.f12709h = aVar.f12712c;
        }
        this.f12708g = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n() {
        byte[] bArr = new byte[12];
        f12701j.nextBytes(bArr);
        return Base64.encodeToString(bArr, 10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long o() {
        a aVar = (a) this.f12704c.get(this.f12708g);
        if (aVar != null && aVar.f12712c != -1) {
            return aVar.f12712c;
        }
        return this.f12709h + 1;
    }

    private a p(int i10, r.b bVar) {
        int i11;
        a aVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        for (a aVar2 : this.f12704c.values()) {
            aVar2.k(i10, bVar);
            if (aVar2.i(i10, bVar)) {
                long j11 = aVar2.f12712c;
                if (j11 != -1 && j11 >= j10) {
                    if (i11 == 0 && ((a) w0.j(aVar)).f12713d != null && aVar2.f12713d != null) {
                        aVar = aVar2;
                    }
                } else {
                    aVar = aVar2;
                    j10 = j11;
                }
            }
        }
        if (aVar == null) {
            String str = (String) this.f12705d.get();
            a aVar3 = new a(str, i10, bVar);
            this.f12704c.put(str, aVar3);
            return aVar3;
        }
        return aVar;
    }

    private void q(AnalyticsListener.EventTime eventTime) {
        if (eventTime.f12642b.u()) {
            String str = this.f12708g;
            if (str != null) {
                m((a) oe.a.e((a) this.f12704c.get(str)));
                return;
            }
            return;
        }
        a aVar = (a) this.f12704c.get(this.f12708g);
        a p10 = p(eventTime.f12643c, eventTime.f12644d);
        this.f12708g = p10.f12710a;
        d(eventTime);
        r.b bVar = eventTime.f12644d;
        if (bVar != null && bVar.b()) {
            if (aVar == null || aVar.f12712c != eventTime.f12644d.f46440d || aVar.f12713d == null || aVar.f12713d.f46438b != eventTime.f12644d.f46438b || aVar.f12713d.f46439c != eventTime.f12644d.f46439c) {
                r.b bVar2 = eventTime.f12644d;
                this.f12706e.d(eventTime, p(eventTime.f12643c, new r.b(bVar2.f46437a, bVar2.f46440d)).f12710a, p10.f12710a);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String a() {
        return this.f12708g;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public void b(d.a aVar) {
        this.f12706e = aVar;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void c(AnalyticsListener.EventTime eventTime) {
        d.a aVar;
        try {
            String str = this.f12708g;
            if (str != null) {
                m((a) oe.a.e((a) this.f12704c.get(str)));
            }
            Iterator it = this.f12704c.values().iterator();
            while (it.hasNext()) {
                a aVar2 = (a) it.next();
                it.remove();
                if (aVar2.f12714e && (aVar = this.f12706e) != null) {
                    aVar.a(eventTime, aVar2.f12710a, false);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void d(AnalyticsListener.EventTime eventTime) {
        oe.a.e(this.f12706e);
        if (eventTime.f12642b.u()) {
            return;
        }
        r.b bVar = eventTime.f12644d;
        if (bVar != null) {
            if (bVar.f46440d < o()) {
                return;
            }
            a aVar = (a) this.f12704c.get(this.f12708g);
            if (aVar != null && aVar.f12712c == -1 && aVar.f12711b != eventTime.f12643c) {
                return;
            }
        }
        a p10 = p(eventTime.f12643c, eventTime.f12644d);
        if (this.f12708g == null) {
            this.f12708g = p10.f12710a;
        }
        r.b bVar2 = eventTime.f12644d;
        if (bVar2 != null && bVar2.b()) {
            r.b bVar3 = eventTime.f12644d;
            r.b bVar4 = new r.b(bVar3.f46437a, bVar3.f46440d, bVar3.f46438b);
            a p11 = p(eventTime.f12643c, bVar4);
            if (!p11.f12714e) {
                p11.f12714e = true;
                eventTime.f12642b.l(eventTime.f12644d.f46437a, this.f12703b);
                this.f12706e.c(new AnalyticsListener.EventTime(eventTime.f12641a, eventTime.f12642b, eventTime.f12643c, bVar4, Math.max(0L, w0.p1(this.f12703b.i(eventTime.f12644d.f46438b)) + this.f12703b.p()), eventTime.f12646f, eventTime.f12647g, eventTime.f12648h, eventTime.f12649i, eventTime.f12650j), p11.f12710a);
            }
        }
        if (!p10.f12714e) {
            p10.f12714e = true;
            this.f12706e.c(eventTime, p10.f12710a);
        }
        if (p10.f12710a.equals(this.f12708g) && !p10.f12715f) {
            p10.f12715f = true;
            this.f12706e.b(eventTime, p10.f12710a);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String e(Timeline timeline, r.b bVar) {
        return p(timeline.l(bVar.f46437a, this.f12703b).f12594i, bVar).f12710a;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized boolean f(AnalyticsListener.EventTime eventTime, String str) {
        a aVar = (a) this.f12704c.get(str);
        if (aVar == null) {
            return false;
        }
        aVar.k(eventTime.f12643c, eventTime.f12644d);
        return aVar.i(eventTime.f12643c, eventTime.f12644d);
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void g(AnalyticsListener.EventTime eventTime, int i10) {
        boolean z10;
        boolean z11;
        try {
            oe.a.e(this.f12706e);
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            Iterator it = this.f12704c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.j(eventTime)) {
                    it.remove();
                    if (aVar.f12714e) {
                        boolean equals = aVar.f12710a.equals(this.f12708g);
                        if (z10 && equals && aVar.f12715f) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        if (equals) {
                            m(aVar);
                        }
                        this.f12706e.a(eventTime, aVar.f12710a, z11);
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
            oe.a.e(this.f12706e);
            Timeline timeline = this.f12707f;
            this.f12707f = eventTime.f12642b;
            Iterator it = this.f12704c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.m(timeline, this.f12707f) && !aVar.j(eventTime)) {
                }
                it.remove();
                if (aVar.f12714e) {
                    if (aVar.f12710a.equals(this.f12708g)) {
                        m(aVar);
                    }
                    this.f12706e.a(eventTime, aVar.f12710a, false);
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public b(pi.r rVar) {
        this.f12705d = rVar;
        this.f12702a = new Timeline.d();
        this.f12703b = new Timeline.b();
        this.f12704c = new HashMap();
        this.f12707f = Timeline.f12581d;
        this.f12709h = -1L;
    }
}
