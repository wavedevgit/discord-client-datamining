package com.google.android.exoplayer2.analytics;

import android.util.Base64;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.analytics.d;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Random;
import kotlin.jvm.internal.LongCompanionObject;
import mi.r;
import ne.w0;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements d {

    /* renamed from: i  reason: collision with root package name */
    public static final r f11983i = new r() { // from class: mc.l1
        @Override // mi.r
        public final Object get() {
            String n10;
            n10 = com.google.android.exoplayer2.analytics.b.n();
            return n10;
        }
    };

    /* renamed from: j  reason: collision with root package name */
    private static final Random f11984j = new Random();

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.d f11985a;

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.b f11986b;

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f11987c;

    /* renamed from: d  reason: collision with root package name */
    private final r f11988d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f11989e;

    /* renamed from: f  reason: collision with root package name */
    private Timeline f11990f;

    /* renamed from: g  reason: collision with root package name */
    private String f11991g;

    /* renamed from: h  reason: collision with root package name */
    private long f11992h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f11993a;

        /* renamed from: b  reason: collision with root package name */
        private int f11994b;

        /* renamed from: c  reason: collision with root package name */
        private long f11995c;

        /* renamed from: d  reason: collision with root package name */
        private r.b f11996d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f11997e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f11998f;

        public a(String str, int i10, r.b bVar) {
            long j10;
            this.f11993a = str;
            this.f11994b = i10;
            if (bVar == null) {
                j10 = -1;
            } else {
                j10 = bVar.f46868d;
            }
            this.f11995c = j10;
            if (bVar != null && bVar.b()) {
                this.f11996d = bVar;
            }
        }

        private int l(Timeline timeline, Timeline timeline2, int i10) {
            if (i10 >= timeline.t()) {
                if (i10 >= timeline2.t()) {
                    return -1;
                }
                return i10;
            }
            timeline.r(i10, b.this.f11985a);
            for (int i11 = b.this.f11985a.f11900z; i11 <= b.this.f11985a.A; i11++) {
                int f10 = timeline2.f(timeline.q(i11));
                if (f10 != -1) {
                    return timeline2.j(f10, b.this.f11986b).f11877i;
                }
            }
            return -1;
        }

        public boolean i(int i10, r.b bVar) {
            if (bVar == null) {
                if (i10 != this.f11994b) {
                    return false;
                }
                return true;
            }
            r.b bVar2 = this.f11996d;
            if (bVar2 == null) {
                if (bVar.b() || bVar.f46868d != this.f11995c) {
                    return false;
                }
                return true;
            } else if (bVar.f46868d != bVar2.f46868d || bVar.f46866b != bVar2.f46866b || bVar.f46867c != bVar2.f46867c) {
                return false;
            } else {
                return true;
            }
        }

        public boolean j(AnalyticsListener.EventTime eventTime) {
            r.b bVar = eventTime.f11927d;
            if (bVar == null) {
                if (this.f11994b != eventTime.f11926c) {
                    return true;
                }
                return false;
            }
            long j10 = this.f11995c;
            if (j10 == -1) {
                return false;
            }
            if (bVar.f46868d > j10) {
                return true;
            }
            if (this.f11996d == null) {
                return false;
            }
            int f10 = eventTime.f11925b.f(bVar.f46865a);
            int f11 = eventTime.f11925b.f(this.f11996d.f46865a);
            r.b bVar2 = eventTime.f11927d;
            if (bVar2.f46868d < this.f11996d.f46868d || f10 < f11) {
                return false;
            }
            if (f10 > f11) {
                return true;
            }
            if (bVar2.b()) {
                r.b bVar3 = eventTime.f11927d;
                int i10 = bVar3.f46866b;
                int i11 = bVar3.f46867c;
                r.b bVar4 = this.f11996d;
                int i12 = bVar4.f46866b;
                if (i10 > i12 || (i10 == i12 && i11 > bVar4.f46867c)) {
                    return true;
                }
                return false;
            }
            int i13 = eventTime.f11927d.f46869e;
            if (i13 == -1 || i13 > this.f11996d.f46866b) {
                return true;
            }
            return false;
        }

        public void k(int i10, r.b bVar) {
            if (this.f11995c == -1 && i10 == this.f11994b && bVar != null && bVar.f46868d >= b.this.o()) {
                this.f11995c = bVar.f46868d;
            }
        }

        public boolean m(Timeline timeline, Timeline timeline2) {
            int l10 = l(timeline, timeline2, this.f11994b);
            this.f11994b = l10;
            if (l10 == -1) {
                return false;
            }
            r.b bVar = this.f11996d;
            if (bVar != null && timeline2.f(bVar.f46865a) == -1) {
                return false;
            }
            return true;
        }
    }

    public b() {
        this(f11983i);
    }

    private void m(a aVar) {
        if (aVar.f11995c != -1) {
            this.f11992h = aVar.f11995c;
        }
        this.f11991g = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n() {
        byte[] bArr = new byte[12];
        f11984j.nextBytes(bArr);
        return Base64.encodeToString(bArr, 10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long o() {
        a aVar = (a) this.f11987c.get(this.f11991g);
        if (aVar != null && aVar.f11995c != -1) {
            return aVar.f11995c;
        }
        return this.f11992h + 1;
    }

    private a p(int i10, r.b bVar) {
        int i11;
        a aVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        for (a aVar2 : this.f11987c.values()) {
            aVar2.k(i10, bVar);
            if (aVar2.i(i10, bVar)) {
                long j11 = aVar2.f11995c;
                if (j11 != -1 && j11 >= j10) {
                    if (i11 == 0 && ((a) w0.j(aVar)).f11996d != null && aVar2.f11996d != null) {
                        aVar = aVar2;
                    }
                } else {
                    aVar = aVar2;
                    j10 = j11;
                }
            }
        }
        if (aVar == null) {
            String str = (String) this.f11988d.get();
            a aVar3 = new a(str, i10, bVar);
            this.f11987c.put(str, aVar3);
            return aVar3;
        }
        return aVar;
    }

    private void q(AnalyticsListener.EventTime eventTime) {
        if (eventTime.f11925b.u()) {
            String str = this.f11991g;
            if (str != null) {
                m((a) ne.a.e((a) this.f11987c.get(str)));
                return;
            }
            return;
        }
        a aVar = (a) this.f11987c.get(this.f11991g);
        a p10 = p(eventTime.f11926c, eventTime.f11927d);
        this.f11991g = p10.f11993a;
        d(eventTime);
        r.b bVar = eventTime.f11927d;
        if (bVar != null && bVar.b()) {
            if (aVar == null || aVar.f11995c != eventTime.f11927d.f46868d || aVar.f11996d == null || aVar.f11996d.f46866b != eventTime.f11927d.f46866b || aVar.f11996d.f46867c != eventTime.f11927d.f46867c) {
                r.b bVar2 = eventTime.f11927d;
                this.f11989e.d(eventTime, p(eventTime.f11926c, new r.b(bVar2.f46865a, bVar2.f46868d)).f11993a, p10.f11993a);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String a() {
        return this.f11991g;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public void b(d.a aVar) {
        this.f11989e = aVar;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void c(AnalyticsListener.EventTime eventTime) {
        d.a aVar;
        try {
            String str = this.f11991g;
            if (str != null) {
                m((a) ne.a.e((a) this.f11987c.get(str)));
            }
            Iterator it = this.f11987c.values().iterator();
            while (it.hasNext()) {
                a aVar2 = (a) it.next();
                it.remove();
                if (aVar2.f11997e && (aVar = this.f11989e) != null) {
                    aVar.a(eventTime, aVar2.f11993a, false);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void d(AnalyticsListener.EventTime eventTime) {
        ne.a.e(this.f11989e);
        if (eventTime.f11925b.u()) {
            return;
        }
        r.b bVar = eventTime.f11927d;
        if (bVar != null) {
            if (bVar.f46868d < o()) {
                return;
            }
            a aVar = (a) this.f11987c.get(this.f11991g);
            if (aVar != null && aVar.f11995c == -1 && aVar.f11994b != eventTime.f11926c) {
                return;
            }
        }
        a p10 = p(eventTime.f11926c, eventTime.f11927d);
        if (this.f11991g == null) {
            this.f11991g = p10.f11993a;
        }
        r.b bVar2 = eventTime.f11927d;
        if (bVar2 != null && bVar2.b()) {
            r.b bVar3 = eventTime.f11927d;
            r.b bVar4 = new r.b(bVar3.f46865a, bVar3.f46868d, bVar3.f46866b);
            a p11 = p(eventTime.f11926c, bVar4);
            if (!p11.f11997e) {
                p11.f11997e = true;
                eventTime.f11925b.l(eventTime.f11927d.f46865a, this.f11986b);
                this.f11989e.c(new AnalyticsListener.EventTime(eventTime.f11924a, eventTime.f11925b, eventTime.f11926c, bVar4, Math.max(0L, w0.p1(this.f11986b.i(eventTime.f11927d.f46866b)) + this.f11986b.p()), eventTime.f11929f, eventTime.f11930g, eventTime.f11931h, eventTime.f11932i, eventTime.f11933j), p11.f11993a);
            }
        }
        if (!p10.f11997e) {
            p10.f11997e = true;
            this.f11989e.c(eventTime, p10.f11993a);
        }
        if (p10.f11993a.equals(this.f11991g) && !p10.f11998f) {
            p10.f11998f = true;
            this.f11989e.b(eventTime, p10.f11993a);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized boolean e(AnalyticsListener.EventTime eventTime, String str) {
        a aVar = (a) this.f11987c.get(str);
        if (aVar == null) {
            return false;
        }
        aVar.k(eventTime.f11926c, eventTime.f11927d);
        return aVar.i(eventTime.f11926c, eventTime.f11927d);
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void f(AnalyticsListener.EventTime eventTime, int i10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.e(this.f11989e);
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            Iterator it = this.f11987c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.j(eventTime)) {
                    it.remove();
                    if (aVar.f11997e) {
                        boolean equals = aVar.f11993a.equals(this.f11991g);
                        if (z10 && equals && aVar.f11998f) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        if (equals) {
                            m(aVar);
                        }
                        this.f11989e.a(eventTime, aVar.f11993a, z11);
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
            ne.a.e(this.f11989e);
            Timeline timeline = this.f11990f;
            this.f11990f = eventTime.f11925b;
            Iterator it = this.f11987c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.m(timeline, this.f11990f) && !aVar.j(eventTime)) {
                }
                it.remove();
                if (aVar.f11997e) {
                    if (aVar.f11993a.equals(this.f11991g)) {
                        m(aVar);
                    }
                    this.f11989e.a(eventTime, aVar.f11993a, false);
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String h(Timeline timeline, r.b bVar) {
        return p(timeline.l(bVar.f46865a, this.f11986b).f11877i, bVar).f11993a;
    }

    public b(mi.r rVar) {
        this.f11988d = rVar;
        this.f11985a = new Timeline.d();
        this.f11986b = new Timeline.b();
        this.f11987c = new HashMap();
        this.f11990f = Timeline.f11864d;
        this.f11992h = -1L;
    }
}
