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
    public static final r f11699i = new r() { // from class: mc.l1
        @Override // ii.r
        public final Object get() {
            String n10;
            n10 = com.google.android.exoplayer2.analytics.b.n();
            return n10;
        }
    };

    /* renamed from: j  reason: collision with root package name */
    private static final Random f11700j = new Random();

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.d f11701a;

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.b f11702b;

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f11703c;

    /* renamed from: d  reason: collision with root package name */
    private final r f11704d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f11705e;

    /* renamed from: f  reason: collision with root package name */
    private Timeline f11706f;

    /* renamed from: g  reason: collision with root package name */
    private String f11707g;

    /* renamed from: h  reason: collision with root package name */
    private long f11708h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f11709a;

        /* renamed from: b  reason: collision with root package name */
        private int f11710b;

        /* renamed from: c  reason: collision with root package name */
        private long f11711c;

        /* renamed from: d  reason: collision with root package name */
        private r.b f11712d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f11713e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f11714f;

        public a(String str, int i10, r.b bVar) {
            long j10;
            this.f11709a = str;
            this.f11710b = i10;
            if (bVar == null) {
                j10 = -1;
            } else {
                j10 = bVar.f47708d;
            }
            this.f11711c = j10;
            if (bVar != null && bVar.b()) {
                this.f11712d = bVar;
            }
        }

        private int l(Timeline timeline, Timeline timeline2, int i10) {
            if (i10 >= timeline.t()) {
                if (i10 >= timeline2.t()) {
                    return -1;
                }
                return i10;
            }
            timeline.r(i10, b.this.f11701a);
            for (int i11 = b.this.f11701a.f11616z; i11 <= b.this.f11701a.A; i11++) {
                int f10 = timeline2.f(timeline.q(i11));
                if (f10 != -1) {
                    return timeline2.j(f10, b.this.f11702b).f11593i;
                }
            }
            return -1;
        }

        public boolean i(int i10, r.b bVar) {
            if (bVar == null) {
                if (i10 != this.f11710b) {
                    return false;
                }
                return true;
            }
            r.b bVar2 = this.f11712d;
            if (bVar2 == null) {
                if (bVar.b() || bVar.f47708d != this.f11711c) {
                    return false;
                }
                return true;
            } else if (bVar.f47708d != bVar2.f47708d || bVar.f47706b != bVar2.f47706b || bVar.f47707c != bVar2.f47707c) {
                return false;
            } else {
                return true;
            }
        }

        public boolean j(AnalyticsListener.EventTime eventTime) {
            r.b bVar = eventTime.f11643d;
            if (bVar == null) {
                if (this.f11710b != eventTime.f11642c) {
                    return true;
                }
                return false;
            }
            long j10 = this.f11711c;
            if (j10 == -1) {
                return false;
            }
            if (bVar.f47708d > j10) {
                return true;
            }
            if (this.f11712d == null) {
                return false;
            }
            int f10 = eventTime.f11641b.f(bVar.f47705a);
            int f11 = eventTime.f11641b.f(this.f11712d.f47705a);
            r.b bVar2 = eventTime.f11643d;
            if (bVar2.f47708d < this.f11712d.f47708d || f10 < f11) {
                return false;
            }
            if (f10 > f11) {
                return true;
            }
            if (bVar2.b()) {
                r.b bVar3 = eventTime.f11643d;
                int i10 = bVar3.f47706b;
                int i11 = bVar3.f47707c;
                r.b bVar4 = this.f11712d;
                int i12 = bVar4.f47706b;
                if (i10 > i12 || (i10 == i12 && i11 > bVar4.f47707c)) {
                    return true;
                }
                return false;
            }
            int i13 = eventTime.f11643d.f47709e;
            if (i13 == -1 || i13 > this.f11712d.f47706b) {
                return true;
            }
            return false;
        }

        public void k(int i10, r.b bVar) {
            if (this.f11711c == -1 && i10 == this.f11710b && bVar != null && bVar.f47708d >= b.this.o()) {
                this.f11711c = bVar.f47708d;
            }
        }

        public boolean m(Timeline timeline, Timeline timeline2) {
            int l10 = l(timeline, timeline2, this.f11710b);
            this.f11710b = l10;
            if (l10 == -1) {
                return false;
            }
            r.b bVar = this.f11712d;
            if (bVar != null && timeline2.f(bVar.f47705a) == -1) {
                return false;
            }
            return true;
        }
    }

    public b() {
        this(f11699i);
    }

    private void m(a aVar) {
        if (aVar.f11711c != -1) {
            this.f11708h = aVar.f11711c;
        }
        this.f11707g = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n() {
        byte[] bArr = new byte[12];
        f11700j.nextBytes(bArr);
        return Base64.encodeToString(bArr, 10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long o() {
        a aVar = (a) this.f11703c.get(this.f11707g);
        if (aVar != null && aVar.f11711c != -1) {
            return aVar.f11711c;
        }
        return this.f11708h + 1;
    }

    private a p(int i10, r.b bVar) {
        int i11;
        a aVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        for (a aVar2 : this.f11703c.values()) {
            aVar2.k(i10, bVar);
            if (aVar2.i(i10, bVar)) {
                long j11 = aVar2.f11711c;
                if (j11 != -1 && j11 >= j10) {
                    if (i11 == 0 && ((a) w0.j(aVar)).f11712d != null && aVar2.f11712d != null) {
                        aVar = aVar2;
                    }
                } else {
                    aVar = aVar2;
                    j10 = j11;
                }
            }
        }
        if (aVar == null) {
            String str = (String) this.f11704d.get();
            a aVar3 = new a(str, i10, bVar);
            this.f11703c.put(str, aVar3);
            return aVar3;
        }
        return aVar;
    }

    private void q(AnalyticsListener.EventTime eventTime) {
        if (eventTime.f11641b.u()) {
            String str = this.f11707g;
            if (str != null) {
                m((a) ne.a.e((a) this.f11703c.get(str)));
                return;
            }
            return;
        }
        a aVar = (a) this.f11703c.get(this.f11707g);
        a p10 = p(eventTime.f11642c, eventTime.f11643d);
        this.f11707g = p10.f11709a;
        d(eventTime);
        r.b bVar = eventTime.f11643d;
        if (bVar != null && bVar.b()) {
            if (aVar == null || aVar.f11711c != eventTime.f11643d.f47708d || aVar.f11712d == null || aVar.f11712d.f47706b != eventTime.f11643d.f47706b || aVar.f11712d.f47707c != eventTime.f11643d.f47707c) {
                r.b bVar2 = eventTime.f11643d;
                this.f11705e.d(eventTime, p(eventTime.f11642c, new r.b(bVar2.f47705a, bVar2.f47708d)).f11709a, p10.f11709a);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String a() {
        return this.f11707g;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public void b(d.a aVar) {
        this.f11705e = aVar;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void c(AnalyticsListener.EventTime eventTime) {
        d.a aVar;
        try {
            String str = this.f11707g;
            if (str != null) {
                m((a) ne.a.e((a) this.f11703c.get(str)));
            }
            Iterator it = this.f11703c.values().iterator();
            while (it.hasNext()) {
                a aVar2 = (a) it.next();
                it.remove();
                if (aVar2.f11713e && (aVar = this.f11705e) != null) {
                    aVar.a(eventTime, aVar2.f11709a, false);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void d(AnalyticsListener.EventTime eventTime) {
        ne.a.e(this.f11705e);
        if (eventTime.f11641b.u()) {
            return;
        }
        r.b bVar = eventTime.f11643d;
        if (bVar != null) {
            if (bVar.f47708d < o()) {
                return;
            }
            a aVar = (a) this.f11703c.get(this.f11707g);
            if (aVar != null && aVar.f11711c == -1 && aVar.f11710b != eventTime.f11642c) {
                return;
            }
        }
        a p10 = p(eventTime.f11642c, eventTime.f11643d);
        if (this.f11707g == null) {
            this.f11707g = p10.f11709a;
        }
        r.b bVar2 = eventTime.f11643d;
        if (bVar2 != null && bVar2.b()) {
            r.b bVar3 = eventTime.f11643d;
            r.b bVar4 = new r.b(bVar3.f47705a, bVar3.f47708d, bVar3.f47706b);
            a p11 = p(eventTime.f11642c, bVar4);
            if (!p11.f11713e) {
                p11.f11713e = true;
                eventTime.f11641b.l(eventTime.f11643d.f47705a, this.f11702b);
                this.f11705e.c(new AnalyticsListener.EventTime(eventTime.f11640a, eventTime.f11641b, eventTime.f11642c, bVar4, Math.max(0L, w0.p1(this.f11702b.i(eventTime.f11643d.f47706b)) + this.f11702b.p()), eventTime.f11645f, eventTime.f11646g, eventTime.f11647h, eventTime.f11648i, eventTime.f11649j), p11.f11709a);
            }
        }
        if (!p10.f11713e) {
            p10.f11713e = true;
            this.f11705e.c(eventTime, p10.f11709a);
        }
        if (p10.f11709a.equals(this.f11707g) && !p10.f11714f) {
            p10.f11714f = true;
            this.f11705e.b(eventTime, p10.f11709a);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized boolean e(AnalyticsListener.EventTime eventTime, String str) {
        a aVar = (a) this.f11703c.get(str);
        if (aVar == null) {
            return false;
        }
        aVar.k(eventTime.f11642c, eventTime.f11643d);
        return aVar.i(eventTime.f11642c, eventTime.f11643d);
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void f(AnalyticsListener.EventTime eventTime, int i10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.e(this.f11705e);
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            Iterator it = this.f11703c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.j(eventTime)) {
                    it.remove();
                    if (aVar.f11713e) {
                        boolean equals = aVar.f11709a.equals(this.f11707g);
                        if (z10 && equals && aVar.f11714f) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        if (equals) {
                            m(aVar);
                        }
                        this.f11705e.a(eventTime, aVar.f11709a, z11);
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
            ne.a.e(this.f11705e);
            Timeline timeline = this.f11706f;
            this.f11706f = eventTime.f11641b;
            Iterator it = this.f11703c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.m(timeline, this.f11706f) && !aVar.j(eventTime)) {
                }
                it.remove();
                if (aVar.f11713e) {
                    if (aVar.f11709a.equals(this.f11707g)) {
                        m(aVar);
                    }
                    this.f11705e.a(eventTime, aVar.f11709a, false);
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String h(Timeline timeline, r.b bVar) {
        return p(timeline.l(bVar.f47705a, this.f11702b).f11593i, bVar).f11709a;
    }

    public b(ii.r rVar) {
        this.f11704d = rVar;
        this.f11701a = new Timeline.d();
        this.f11702b = new Timeline.b();
        this.f11703c = new HashMap();
        this.f11706f = Timeline.f11580d;
        this.f11708h = -1L;
    }
}
