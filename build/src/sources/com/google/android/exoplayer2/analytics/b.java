package com.google.android.exoplayer2.analytics;

import android.util.Base64;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.analytics.d;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Random;
import kotlin.jvm.internal.LongCompanionObject;
import ni.r;
import oe.w0;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements d {

    /* renamed from: i  reason: collision with root package name */
    public static final r f12123i = new r() { // from class: nc.l1
        @Override // ni.r
        public final Object get() {
            String n10;
            n10 = com.google.android.exoplayer2.analytics.b.n();
            return n10;
        }
    };

    /* renamed from: j  reason: collision with root package name */
    private static final Random f12124j = new Random();

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.d f12125a;

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.b f12126b;

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f12127c;

    /* renamed from: d  reason: collision with root package name */
    private final r f12128d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f12129e;

    /* renamed from: f  reason: collision with root package name */
    private Timeline f12130f;

    /* renamed from: g  reason: collision with root package name */
    private String f12131g;

    /* renamed from: h  reason: collision with root package name */
    private long f12132h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f12133a;

        /* renamed from: b  reason: collision with root package name */
        private int f12134b;

        /* renamed from: c  reason: collision with root package name */
        private long f12135c;

        /* renamed from: d  reason: collision with root package name */
        private r.b f12136d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f12137e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f12138f;

        public a(String str, int i10, r.b bVar) {
            long j10;
            this.f12133a = str;
            this.f12134b = i10;
            if (bVar == null) {
                j10 = -1;
            } else {
                j10 = bVar.f47986d;
            }
            this.f12135c = j10;
            if (bVar != null && bVar.b()) {
                this.f12136d = bVar;
            }
        }

        private int l(Timeline timeline, Timeline timeline2, int i10) {
            if (i10 >= timeline.t()) {
                if (i10 >= timeline2.t()) {
                    return -1;
                }
                return i10;
            }
            timeline.r(i10, b.this.f12125a);
            for (int i11 = b.this.f12125a.f12040z; i11 <= b.this.f12125a.A; i11++) {
                int f10 = timeline2.f(timeline.q(i11));
                if (f10 != -1) {
                    return timeline2.j(f10, b.this.f12126b).f12017i;
                }
            }
            return -1;
        }

        public boolean i(int i10, r.b bVar) {
            if (bVar == null) {
                if (i10 != this.f12134b) {
                    return false;
                }
                return true;
            }
            r.b bVar2 = this.f12136d;
            if (bVar2 == null) {
                if (bVar.b() || bVar.f47986d != this.f12135c) {
                    return false;
                }
                return true;
            } else if (bVar.f47986d != bVar2.f47986d || bVar.f47984b != bVar2.f47984b || bVar.f47985c != bVar2.f47985c) {
                return false;
            } else {
                return true;
            }
        }

        public boolean j(AnalyticsListener.EventTime eventTime) {
            r.b bVar = eventTime.f12067d;
            if (bVar == null) {
                if (this.f12134b != eventTime.f12066c) {
                    return true;
                }
                return false;
            }
            long j10 = this.f12135c;
            if (j10 == -1) {
                return false;
            }
            if (bVar.f47986d > j10) {
                return true;
            }
            if (this.f12136d == null) {
                return false;
            }
            int f10 = eventTime.f12065b.f(bVar.f47983a);
            int f11 = eventTime.f12065b.f(this.f12136d.f47983a);
            r.b bVar2 = eventTime.f12067d;
            if (bVar2.f47986d < this.f12136d.f47986d || f10 < f11) {
                return false;
            }
            if (f10 > f11) {
                return true;
            }
            if (bVar2.b()) {
                r.b bVar3 = eventTime.f12067d;
                int i10 = bVar3.f47984b;
                int i11 = bVar3.f47985c;
                r.b bVar4 = this.f12136d;
                int i12 = bVar4.f47984b;
                if (i10 > i12 || (i10 == i12 && i11 > bVar4.f47985c)) {
                    return true;
                }
                return false;
            }
            int i13 = eventTime.f12067d.f47987e;
            if (i13 == -1 || i13 > this.f12136d.f47984b) {
                return true;
            }
            return false;
        }

        public void k(int i10, r.b bVar) {
            if (this.f12135c == -1 && i10 == this.f12134b && bVar != null && bVar.f47986d >= b.this.o()) {
                this.f12135c = bVar.f47986d;
            }
        }

        public boolean m(Timeline timeline, Timeline timeline2) {
            int l10 = l(timeline, timeline2, this.f12134b);
            this.f12134b = l10;
            if (l10 == -1) {
                return false;
            }
            r.b bVar = this.f12136d;
            if (bVar != null && timeline2.f(bVar.f47983a) == -1) {
                return false;
            }
            return true;
        }
    }

    public b() {
        this(f12123i);
    }

    private void m(a aVar) {
        if (aVar.f12135c != -1) {
            this.f12132h = aVar.f12135c;
        }
        this.f12131g = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n() {
        byte[] bArr = new byte[12];
        f12124j.nextBytes(bArr);
        return Base64.encodeToString(bArr, 10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long o() {
        a aVar = (a) this.f12127c.get(this.f12131g);
        if (aVar != null && aVar.f12135c != -1) {
            return aVar.f12135c;
        }
        return this.f12132h + 1;
    }

    private a p(int i10, r.b bVar) {
        int i11;
        a aVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        for (a aVar2 : this.f12127c.values()) {
            aVar2.k(i10, bVar);
            if (aVar2.i(i10, bVar)) {
                long j11 = aVar2.f12135c;
                if (j11 != -1 && j11 >= j10) {
                    if (i11 == 0 && ((a) w0.j(aVar)).f12136d != null && aVar2.f12136d != null) {
                        aVar = aVar2;
                    }
                } else {
                    aVar = aVar2;
                    j10 = j11;
                }
            }
        }
        if (aVar == null) {
            String str = (String) this.f12128d.get();
            a aVar3 = new a(str, i10, bVar);
            this.f12127c.put(str, aVar3);
            return aVar3;
        }
        return aVar;
    }

    private void q(AnalyticsListener.EventTime eventTime) {
        if (eventTime.f12065b.u()) {
            String str = this.f12131g;
            if (str != null) {
                m((a) oe.a.e((a) this.f12127c.get(str)));
                return;
            }
            return;
        }
        a aVar = (a) this.f12127c.get(this.f12131g);
        a p10 = p(eventTime.f12066c, eventTime.f12067d);
        this.f12131g = p10.f12133a;
        d(eventTime);
        r.b bVar = eventTime.f12067d;
        if (bVar != null && bVar.b()) {
            if (aVar == null || aVar.f12135c != eventTime.f12067d.f47986d || aVar.f12136d == null || aVar.f12136d.f47984b != eventTime.f12067d.f47984b || aVar.f12136d.f47985c != eventTime.f12067d.f47985c) {
                r.b bVar2 = eventTime.f12067d;
                this.f12129e.d(eventTime, p(eventTime.f12066c, new r.b(bVar2.f47983a, bVar2.f47986d)).f12133a, p10.f12133a);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String a() {
        return this.f12131g;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public void b(d.a aVar) {
        this.f12129e = aVar;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void c(AnalyticsListener.EventTime eventTime) {
        d.a aVar;
        try {
            String str = this.f12131g;
            if (str != null) {
                m((a) oe.a.e((a) this.f12127c.get(str)));
            }
            Iterator it = this.f12127c.values().iterator();
            while (it.hasNext()) {
                a aVar2 = (a) it.next();
                it.remove();
                if (aVar2.f12137e && (aVar = this.f12129e) != null) {
                    aVar.a(eventTime, aVar2.f12133a, false);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void d(AnalyticsListener.EventTime eventTime) {
        oe.a.e(this.f12129e);
        if (eventTime.f12065b.u()) {
            return;
        }
        r.b bVar = eventTime.f12067d;
        if (bVar != null) {
            if (bVar.f47986d < o()) {
                return;
            }
            a aVar = (a) this.f12127c.get(this.f12131g);
            if (aVar != null && aVar.f12135c == -1 && aVar.f12134b != eventTime.f12066c) {
                return;
            }
        }
        a p10 = p(eventTime.f12066c, eventTime.f12067d);
        if (this.f12131g == null) {
            this.f12131g = p10.f12133a;
        }
        r.b bVar2 = eventTime.f12067d;
        if (bVar2 != null && bVar2.b()) {
            r.b bVar3 = eventTime.f12067d;
            r.b bVar4 = new r.b(bVar3.f47983a, bVar3.f47986d, bVar3.f47984b);
            a p11 = p(eventTime.f12066c, bVar4);
            if (!p11.f12137e) {
                p11.f12137e = true;
                eventTime.f12065b.l(eventTime.f12067d.f47983a, this.f12126b);
                this.f12129e.c(new AnalyticsListener.EventTime(eventTime.f12064a, eventTime.f12065b, eventTime.f12066c, bVar4, Math.max(0L, w0.p1(this.f12126b.i(eventTime.f12067d.f47984b)) + this.f12126b.p()), eventTime.f12069f, eventTime.f12070g, eventTime.f12071h, eventTime.f12072i, eventTime.f12073j), p11.f12133a);
            }
        }
        if (!p10.f12137e) {
            p10.f12137e = true;
            this.f12129e.c(eventTime, p10.f12133a);
        }
        if (p10.f12133a.equals(this.f12131g) && !p10.f12138f) {
            p10.f12138f = true;
            this.f12129e.b(eventTime, p10.f12133a);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String e(Timeline timeline, r.b bVar) {
        return p(timeline.l(bVar.f47983a, this.f12126b).f12017i, bVar).f12133a;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized boolean f(AnalyticsListener.EventTime eventTime, String str) {
        a aVar = (a) this.f12127c.get(str);
        if (aVar == null) {
            return false;
        }
        aVar.k(eventTime.f12066c, eventTime.f12067d);
        return aVar.i(eventTime.f12066c, eventTime.f12067d);
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void g(AnalyticsListener.EventTime eventTime, int i10) {
        boolean z10;
        boolean z11;
        try {
            oe.a.e(this.f12129e);
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            Iterator it = this.f12127c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.j(eventTime)) {
                    it.remove();
                    if (aVar.f12137e) {
                        boolean equals = aVar.f12133a.equals(this.f12131g);
                        if (z10 && equals && aVar.f12138f) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        if (equals) {
                            m(aVar);
                        }
                        this.f12129e.a(eventTime, aVar.f12133a, z11);
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
            oe.a.e(this.f12129e);
            Timeline timeline = this.f12130f;
            this.f12130f = eventTime.f12065b;
            Iterator it = this.f12127c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.m(timeline, this.f12130f) && !aVar.j(eventTime)) {
                }
                it.remove();
                if (aVar.f12137e) {
                    if (aVar.f12133a.equals(this.f12131g)) {
                        m(aVar);
                    }
                    this.f12129e.a(eventTime, aVar.f12133a, false);
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public b(ni.r rVar) {
        this.f12128d = rVar;
        this.f12125a = new Timeline.d();
        this.f12126b = new Timeline.b();
        this.f12127c = new HashMap();
        this.f12130f = Timeline.f12004d;
        this.f12132h = -1L;
    }
}
