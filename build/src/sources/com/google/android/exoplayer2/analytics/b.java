package com.google.android.exoplayer2.analytics;

import android.util.Base64;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.analytics.d;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Random;
import kotlin.jvm.internal.LongCompanionObject;
import li.r;
import ne.w0;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements d {

    /* renamed from: i  reason: collision with root package name */
    public static final r f12084i = new r() { // from class: mc.l1
        @Override // li.r
        public final Object get() {
            String n10;
            n10 = com.google.android.exoplayer2.analytics.b.n();
            return n10;
        }
    };

    /* renamed from: j  reason: collision with root package name */
    private static final Random f12085j = new Random();

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.d f12086a;

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.b f12087b;

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f12088c;

    /* renamed from: d  reason: collision with root package name */
    private final r f12089d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12090e;

    /* renamed from: f  reason: collision with root package name */
    private Timeline f12091f;

    /* renamed from: g  reason: collision with root package name */
    private String f12092g;

    /* renamed from: h  reason: collision with root package name */
    private long f12093h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f12094a;

        /* renamed from: b  reason: collision with root package name */
        private int f12095b;

        /* renamed from: c  reason: collision with root package name */
        private long f12096c;

        /* renamed from: d  reason: collision with root package name */
        private r.b f12097d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f12098e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f12099f;

        public a(String str, int i10, r.b bVar) {
            long j10;
            this.f12094a = str;
            this.f12095b = i10;
            if (bVar == null) {
                j10 = -1;
            } else {
                j10 = bVar.f47772d;
            }
            this.f12096c = j10;
            if (bVar != null && bVar.b()) {
                this.f12097d = bVar;
            }
        }

        private int l(Timeline timeline, Timeline timeline2, int i10) {
            if (i10 >= timeline.t()) {
                if (i10 >= timeline2.t()) {
                    return -1;
                }
                return i10;
            }
            timeline.r(i10, b.this.f12086a);
            for (int i11 = b.this.f12086a.f12001z; i11 <= b.this.f12086a.A; i11++) {
                int f10 = timeline2.f(timeline.q(i11));
                if (f10 != -1) {
                    return timeline2.j(f10, b.this.f12087b).f11978i;
                }
            }
            return -1;
        }

        public boolean i(int i10, r.b bVar) {
            if (bVar == null) {
                if (i10 != this.f12095b) {
                    return false;
                }
                return true;
            }
            r.b bVar2 = this.f12097d;
            if (bVar2 == null) {
                if (bVar.b() || bVar.f47772d != this.f12096c) {
                    return false;
                }
                return true;
            } else if (bVar.f47772d != bVar2.f47772d || bVar.f47770b != bVar2.f47770b || bVar.f47771c != bVar2.f47771c) {
                return false;
            } else {
                return true;
            }
        }

        public boolean j(AnalyticsListener.EventTime eventTime) {
            r.b bVar = eventTime.f12028d;
            if (bVar == null) {
                if (this.f12095b != eventTime.f12027c) {
                    return true;
                }
                return false;
            }
            long j10 = this.f12096c;
            if (j10 == -1) {
                return false;
            }
            if (bVar.f47772d > j10) {
                return true;
            }
            if (this.f12097d == null) {
                return false;
            }
            int f10 = eventTime.f12026b.f(bVar.f47769a);
            int f11 = eventTime.f12026b.f(this.f12097d.f47769a);
            r.b bVar2 = eventTime.f12028d;
            if (bVar2.f47772d < this.f12097d.f47772d || f10 < f11) {
                return false;
            }
            if (f10 > f11) {
                return true;
            }
            if (bVar2.b()) {
                r.b bVar3 = eventTime.f12028d;
                int i10 = bVar3.f47770b;
                int i11 = bVar3.f47771c;
                r.b bVar4 = this.f12097d;
                int i12 = bVar4.f47770b;
                if (i10 > i12 || (i10 == i12 && i11 > bVar4.f47771c)) {
                    return true;
                }
                return false;
            }
            int i13 = eventTime.f12028d.f47773e;
            if (i13 == -1 || i13 > this.f12097d.f47770b) {
                return true;
            }
            return false;
        }

        public void k(int i10, r.b bVar) {
            if (this.f12096c == -1 && i10 == this.f12095b && bVar != null && bVar.f47772d >= b.this.o()) {
                this.f12096c = bVar.f47772d;
            }
        }

        public boolean m(Timeline timeline, Timeline timeline2) {
            int l10 = l(timeline, timeline2, this.f12095b);
            this.f12095b = l10;
            if (l10 == -1) {
                return false;
            }
            r.b bVar = this.f12097d;
            if (bVar != null && timeline2.f(bVar.f47769a) == -1) {
                return false;
            }
            return true;
        }
    }

    public b() {
        this(f12084i);
    }

    private void m(a aVar) {
        if (aVar.f12096c != -1) {
            this.f12093h = aVar.f12096c;
        }
        this.f12092g = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n() {
        byte[] bArr = new byte[12];
        f12085j.nextBytes(bArr);
        return Base64.encodeToString(bArr, 10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long o() {
        a aVar = (a) this.f12088c.get(this.f12092g);
        if (aVar != null && aVar.f12096c != -1) {
            return aVar.f12096c;
        }
        return this.f12093h + 1;
    }

    private a p(int i10, r.b bVar) {
        int i11;
        a aVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        for (a aVar2 : this.f12088c.values()) {
            aVar2.k(i10, bVar);
            if (aVar2.i(i10, bVar)) {
                long j11 = aVar2.f12096c;
                if (j11 != -1 && j11 >= j10) {
                    if (i11 == 0 && ((a) w0.j(aVar)).f12097d != null && aVar2.f12097d != null) {
                        aVar = aVar2;
                    }
                } else {
                    aVar = aVar2;
                    j10 = j11;
                }
            }
        }
        if (aVar == null) {
            String str = (String) this.f12089d.get();
            a aVar3 = new a(str, i10, bVar);
            this.f12088c.put(str, aVar3);
            return aVar3;
        }
        return aVar;
    }

    private void q(AnalyticsListener.EventTime eventTime) {
        if (eventTime.f12026b.u()) {
            String str = this.f12092g;
            if (str != null) {
                m((a) ne.a.e((a) this.f12088c.get(str)));
                return;
            }
            return;
        }
        a aVar = (a) this.f12088c.get(this.f12092g);
        a p10 = p(eventTime.f12027c, eventTime.f12028d);
        this.f12092g = p10.f12094a;
        d(eventTime);
        r.b bVar = eventTime.f12028d;
        if (bVar != null && bVar.b()) {
            if (aVar == null || aVar.f12096c != eventTime.f12028d.f47772d || aVar.f12097d == null || aVar.f12097d.f47770b != eventTime.f12028d.f47770b || aVar.f12097d.f47771c != eventTime.f12028d.f47771c) {
                r.b bVar2 = eventTime.f12028d;
                this.f12090e.d(eventTime, p(eventTime.f12027c, new r.b(bVar2.f47769a, bVar2.f47772d)).f12094a, p10.f12094a);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String a() {
        return this.f12092g;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public void b(d.a aVar) {
        this.f12090e = aVar;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void c(AnalyticsListener.EventTime eventTime) {
        d.a aVar;
        try {
            String str = this.f12092g;
            if (str != null) {
                m((a) ne.a.e((a) this.f12088c.get(str)));
            }
            Iterator it = this.f12088c.values().iterator();
            while (it.hasNext()) {
                a aVar2 = (a) it.next();
                it.remove();
                if (aVar2.f12098e && (aVar = this.f12090e) != null) {
                    aVar.a(eventTime, aVar2.f12094a, false);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void d(AnalyticsListener.EventTime eventTime) {
        ne.a.e(this.f12090e);
        if (eventTime.f12026b.u()) {
            return;
        }
        r.b bVar = eventTime.f12028d;
        if (bVar != null) {
            if (bVar.f47772d < o()) {
                return;
            }
            a aVar = (a) this.f12088c.get(this.f12092g);
            if (aVar != null && aVar.f12096c == -1 && aVar.f12095b != eventTime.f12027c) {
                return;
            }
        }
        a p10 = p(eventTime.f12027c, eventTime.f12028d);
        if (this.f12092g == null) {
            this.f12092g = p10.f12094a;
        }
        r.b bVar2 = eventTime.f12028d;
        if (bVar2 != null && bVar2.b()) {
            r.b bVar3 = eventTime.f12028d;
            r.b bVar4 = new r.b(bVar3.f47769a, bVar3.f47772d, bVar3.f47770b);
            a p11 = p(eventTime.f12027c, bVar4);
            if (!p11.f12098e) {
                p11.f12098e = true;
                eventTime.f12026b.l(eventTime.f12028d.f47769a, this.f12087b);
                this.f12090e.c(new AnalyticsListener.EventTime(eventTime.f12025a, eventTime.f12026b, eventTime.f12027c, bVar4, Math.max(0L, w0.p1(this.f12087b.i(eventTime.f12028d.f47770b)) + this.f12087b.p()), eventTime.f12030f, eventTime.f12031g, eventTime.f12032h, eventTime.f12033i, eventTime.f12034j), p11.f12094a);
            }
        }
        if (!p10.f12098e) {
            p10.f12098e = true;
            this.f12090e.c(eventTime, p10.f12094a);
        }
        if (p10.f12094a.equals(this.f12092g) && !p10.f12099f) {
            p10.f12099f = true;
            this.f12090e.b(eventTime, p10.f12094a);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized boolean e(AnalyticsListener.EventTime eventTime, String str) {
        a aVar = (a) this.f12088c.get(str);
        if (aVar == null) {
            return false;
        }
        aVar.k(eventTime.f12027c, eventTime.f12028d);
        return aVar.i(eventTime.f12027c, eventTime.f12028d);
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void f(AnalyticsListener.EventTime eventTime, int i10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.e(this.f12090e);
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            Iterator it = this.f12088c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.j(eventTime)) {
                    it.remove();
                    if (aVar.f12098e) {
                        boolean equals = aVar.f12094a.equals(this.f12092g);
                        if (z10 && equals && aVar.f12099f) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        if (equals) {
                            m(aVar);
                        }
                        this.f12090e.a(eventTime, aVar.f12094a, z11);
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
            ne.a.e(this.f12090e);
            Timeline timeline = this.f12091f;
            this.f12091f = eventTime.f12026b;
            Iterator it = this.f12088c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.m(timeline, this.f12091f) && !aVar.j(eventTime)) {
                }
                it.remove();
                if (aVar.f12098e) {
                    if (aVar.f12094a.equals(this.f12092g)) {
                        m(aVar);
                    }
                    this.f12090e.a(eventTime, aVar.f12094a, false);
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String h(Timeline timeline, r.b bVar) {
        return p(timeline.l(bVar.f47769a, this.f12087b).f11978i, bVar).f12094a;
    }

    public b(li.r rVar) {
        this.f12089d = rVar;
        this.f12086a = new Timeline.d();
        this.f12087b = new Timeline.b();
        this.f12088c = new HashMap();
        this.f12091f = Timeline.f11965d;
        this.f12093h = -1L;
    }
}
