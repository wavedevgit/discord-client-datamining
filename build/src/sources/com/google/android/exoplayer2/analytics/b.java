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
    public static final r f13102i = new r() { // from class: mc.l1
        @Override // ii.r
        public final Object get() {
            String n10;
            n10 = com.google.android.exoplayer2.analytics.b.n();
            return n10;
        }
    };

    /* renamed from: j  reason: collision with root package name */
    private static final Random f13103j = new Random();

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.d f13104a;

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.b f13105b;

    /* renamed from: c  reason: collision with root package name */
    private final HashMap f13106c;

    /* renamed from: d  reason: collision with root package name */
    private final r f13107d;

    /* renamed from: e  reason: collision with root package name */
    private d.a f13108e;

    /* renamed from: f  reason: collision with root package name */
    private Timeline f13109f;

    /* renamed from: g  reason: collision with root package name */
    private String f13110g;

    /* renamed from: h  reason: collision with root package name */
    private long f13111h;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f13112a;

        /* renamed from: b  reason: collision with root package name */
        private int f13113b;

        /* renamed from: c  reason: collision with root package name */
        private long f13114c;

        /* renamed from: d  reason: collision with root package name */
        private r.b f13115d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f13116e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f13117f;

        public a(String str, int i10, r.b bVar) {
            long j10;
            this.f13112a = str;
            this.f13113b = i10;
            if (bVar == null) {
                j10 = -1;
            } else {
                j10 = bVar.f47303d;
            }
            this.f13114c = j10;
            if (bVar != null && bVar.b()) {
                this.f13115d = bVar;
            }
        }

        private int l(Timeline timeline, Timeline timeline2, int i10) {
            if (i10 >= timeline.t()) {
                if (i10 >= timeline2.t()) {
                    return -1;
                }
                return i10;
            }
            timeline.r(i10, b.this.f13104a);
            for (int i11 = b.this.f13104a.f13019z; i11 <= b.this.f13104a.A; i11++) {
                int f10 = timeline2.f(timeline.q(i11));
                if (f10 != -1) {
                    return timeline2.j(f10, b.this.f13105b).f12996i;
                }
            }
            return -1;
        }

        public boolean i(int i10, r.b bVar) {
            if (bVar == null) {
                if (i10 != this.f13113b) {
                    return false;
                }
                return true;
            }
            r.b bVar2 = this.f13115d;
            if (bVar2 == null) {
                if (bVar.b() || bVar.f47303d != this.f13114c) {
                    return false;
                }
                return true;
            } else if (bVar.f47303d != bVar2.f47303d || bVar.f47301b != bVar2.f47301b || bVar.f47302c != bVar2.f47302c) {
                return false;
            } else {
                return true;
            }
        }

        public boolean j(AnalyticsListener.EventTime eventTime) {
            r.b bVar = eventTime.f13046d;
            if (bVar == null) {
                if (this.f13113b != eventTime.f13045c) {
                    return true;
                }
                return false;
            }
            long j10 = this.f13114c;
            if (j10 == -1) {
                return false;
            }
            if (bVar.f47303d > j10) {
                return true;
            }
            if (this.f13115d == null) {
                return false;
            }
            int f10 = eventTime.f13044b.f(bVar.f47300a);
            int f11 = eventTime.f13044b.f(this.f13115d.f47300a);
            r.b bVar2 = eventTime.f13046d;
            if (bVar2.f47303d < this.f13115d.f47303d || f10 < f11) {
                return false;
            }
            if (f10 > f11) {
                return true;
            }
            if (bVar2.b()) {
                r.b bVar3 = eventTime.f13046d;
                int i10 = bVar3.f47301b;
                int i11 = bVar3.f47302c;
                r.b bVar4 = this.f13115d;
                int i12 = bVar4.f47301b;
                if (i10 > i12 || (i10 == i12 && i11 > bVar4.f47302c)) {
                    return true;
                }
                return false;
            }
            int i13 = eventTime.f13046d.f47304e;
            if (i13 == -1 || i13 > this.f13115d.f47301b) {
                return true;
            }
            return false;
        }

        public void k(int i10, r.b bVar) {
            if (this.f13114c == -1 && i10 == this.f13113b && bVar != null && bVar.f47303d >= b.this.o()) {
                this.f13114c = bVar.f47303d;
            }
        }

        public boolean m(Timeline timeline, Timeline timeline2) {
            int l10 = l(timeline, timeline2, this.f13113b);
            this.f13113b = l10;
            if (l10 == -1) {
                return false;
            }
            r.b bVar = this.f13115d;
            if (bVar != null && timeline2.f(bVar.f47300a) == -1) {
                return false;
            }
            return true;
        }
    }

    public b() {
        this(f13102i);
    }

    private void m(a aVar) {
        if (aVar.f13114c != -1) {
            this.f13111h = aVar.f13114c;
        }
        this.f13110g = null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String n() {
        byte[] bArr = new byte[12];
        f13103j.nextBytes(bArr);
        return Base64.encodeToString(bArr, 10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long o() {
        a aVar = (a) this.f13106c.get(this.f13110g);
        if (aVar != null && aVar.f13114c != -1) {
            return aVar.f13114c;
        }
        return this.f13111h + 1;
    }

    private a p(int i10, r.b bVar) {
        int i11;
        a aVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        for (a aVar2 : this.f13106c.values()) {
            aVar2.k(i10, bVar);
            if (aVar2.i(i10, bVar)) {
                long j11 = aVar2.f13114c;
                if (j11 != -1 && j11 >= j10) {
                    if (i11 == 0 && ((a) w0.j(aVar)).f13115d != null && aVar2.f13115d != null) {
                        aVar = aVar2;
                    }
                } else {
                    aVar = aVar2;
                    j10 = j11;
                }
            }
        }
        if (aVar == null) {
            String str = (String) this.f13107d.get();
            a aVar3 = new a(str, i10, bVar);
            this.f13106c.put(str, aVar3);
            return aVar3;
        }
        return aVar;
    }

    private void q(AnalyticsListener.EventTime eventTime) {
        if (eventTime.f13044b.u()) {
            String str = this.f13110g;
            if (str != null) {
                m((a) ne.a.e((a) this.f13106c.get(str)));
                return;
            }
            return;
        }
        a aVar = (a) this.f13106c.get(this.f13110g);
        a p10 = p(eventTime.f13045c, eventTime.f13046d);
        this.f13110g = p10.f13112a;
        d(eventTime);
        r.b bVar = eventTime.f13046d;
        if (bVar != null && bVar.b()) {
            if (aVar == null || aVar.f13114c != eventTime.f13046d.f47303d || aVar.f13115d == null || aVar.f13115d.f47301b != eventTime.f13046d.f47301b || aVar.f13115d.f47302c != eventTime.f13046d.f47302c) {
                r.b bVar2 = eventTime.f13046d;
                this.f13108e.d(eventTime, p(eventTime.f13045c, new r.b(bVar2.f47300a, bVar2.f47303d)).f13112a, p10.f13112a);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String a() {
        return this.f13110g;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public void b(d.a aVar) {
        this.f13108e = aVar;
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void c(AnalyticsListener.EventTime eventTime) {
        d.a aVar;
        try {
            String str = this.f13110g;
            if (str != null) {
                m((a) ne.a.e((a) this.f13106c.get(str)));
            }
            Iterator it = this.f13106c.values().iterator();
            while (it.hasNext()) {
                a aVar2 = (a) it.next();
                it.remove();
                if (aVar2.f13116e && (aVar = this.f13108e) != null) {
                    aVar.a(eventTime, aVar2.f13112a, false);
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void d(AnalyticsListener.EventTime eventTime) {
        ne.a.e(this.f13108e);
        if (eventTime.f13044b.u()) {
            return;
        }
        r.b bVar = eventTime.f13046d;
        if (bVar != null) {
            if (bVar.f47303d < o()) {
                return;
            }
            a aVar = (a) this.f13106c.get(this.f13110g);
            if (aVar != null && aVar.f13114c == -1 && aVar.f13113b != eventTime.f13045c) {
                return;
            }
        }
        a p10 = p(eventTime.f13045c, eventTime.f13046d);
        if (this.f13110g == null) {
            this.f13110g = p10.f13112a;
        }
        r.b bVar2 = eventTime.f13046d;
        if (bVar2 != null && bVar2.b()) {
            r.b bVar3 = eventTime.f13046d;
            r.b bVar4 = new r.b(bVar3.f47300a, bVar3.f47303d, bVar3.f47301b);
            a p11 = p(eventTime.f13045c, bVar4);
            if (!p11.f13116e) {
                p11.f13116e = true;
                eventTime.f13044b.l(eventTime.f13046d.f47300a, this.f13105b);
                this.f13108e.c(new AnalyticsListener.EventTime(eventTime.f13043a, eventTime.f13044b, eventTime.f13045c, bVar4, Math.max(0L, w0.p1(this.f13105b.i(eventTime.f13046d.f47301b)) + this.f13105b.p()), eventTime.f13048f, eventTime.f13049g, eventTime.f13050h, eventTime.f13051i, eventTime.f13052j), p11.f13112a);
            }
        }
        if (!p10.f13116e) {
            p10.f13116e = true;
            this.f13108e.c(eventTime, p10.f13112a);
        }
        if (p10.f13112a.equals(this.f13110g) && !p10.f13117f) {
            p10.f13117f = true;
            this.f13108e.b(eventTime, p10.f13112a);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized boolean e(AnalyticsListener.EventTime eventTime, String str) {
        a aVar = (a) this.f13106c.get(str);
        if (aVar == null) {
            return false;
        }
        aVar.k(eventTime.f13045c, eventTime.f13046d);
        return aVar.i(eventTime.f13045c, eventTime.f13046d);
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized void f(AnalyticsListener.EventTime eventTime, int i10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.e(this.f13108e);
            if (i10 == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            Iterator it = this.f13106c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.j(eventTime)) {
                    it.remove();
                    if (aVar.f13116e) {
                        boolean equals = aVar.f13112a.equals(this.f13110g);
                        if (z10 && equals && aVar.f13117f) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        if (equals) {
                            m(aVar);
                        }
                        this.f13108e.a(eventTime, aVar.f13112a, z11);
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
            ne.a.e(this.f13108e);
            Timeline timeline = this.f13109f;
            this.f13109f = eventTime.f13044b;
            Iterator it = this.f13106c.values().iterator();
            while (it.hasNext()) {
                a aVar = (a) it.next();
                if (aVar.m(timeline, this.f13109f) && !aVar.j(eventTime)) {
                }
                it.remove();
                if (aVar.f13116e) {
                    if (aVar.f13112a.equals(this.f13110g)) {
                        m(aVar);
                    }
                    this.f13108e.a(eventTime, aVar.f13112a, false);
                }
            }
            q(eventTime);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d
    public synchronized String h(Timeline timeline, r.b bVar) {
        return p(timeline.l(bVar.f47300a, this.f13105b).f12996i, bVar).f13112a;
    }

    public b(ii.r rVar) {
        this.f13107d = rVar;
        this.f13104a = new Timeline.d();
        this.f13105b = new Timeline.b();
        this.f13106c = new HashMap();
        this.f13109f = Timeline.f12983d;
        this.f13111h = -1L;
    }
}
