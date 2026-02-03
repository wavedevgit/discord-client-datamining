package com.google.android.exoplayer2;

import android.os.Looper;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f12337a;

    /* renamed from: b  reason: collision with root package name */
    private final a f12338b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.e f12339c;

    /* renamed from: d  reason: collision with root package name */
    private final Timeline f12340d;

    /* renamed from: e  reason: collision with root package name */
    private int f12341e;

    /* renamed from: f  reason: collision with root package name */
    private Object f12342f;

    /* renamed from: g  reason: collision with root package name */
    private Looper f12343g;

    /* renamed from: h  reason: collision with root package name */
    private int f12344h;

    /* renamed from: i  reason: collision with root package name */
    private long f12345i = -9223372036854775807L;

    /* renamed from: j  reason: collision with root package name */
    private boolean f12346j = true;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12347k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f12348l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f12349m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f12350n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void e(s1 s1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void n(int i10, Object obj);
    }

    public s1(a aVar, b bVar, Timeline timeline, int i10, ne.e eVar, Looper looper) {
        this.f12338b = aVar;
        this.f12337a = bVar;
        this.f12340d = timeline;
        this.f12343g = looper;
        this.f12339c = eVar;
        this.f12344h = i10;
    }

    public synchronized boolean a(long j10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.g(this.f12347k);
            if (this.f12343g.getThread() != Thread.currentThread()) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            long b10 = this.f12339c.b() + j10;
            while (true) {
                z11 = this.f12349m;
                if (z11 || j10 <= 0) {
                    break;
                }
                this.f12339c.d();
                wait(j10);
                j10 = b10 - this.f12339c.b();
            }
            if (z11) {
            } else {
                throw new TimeoutException("Message delivery timed out.");
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f12348l;
    }

    public boolean b() {
        return this.f12346j;
    }

    public Looper c() {
        return this.f12343g;
    }

    public int d() {
        return this.f12344h;
    }

    public Object e() {
        return this.f12342f;
    }

    public long f() {
        return this.f12345i;
    }

    public b g() {
        return this.f12337a;
    }

    public Timeline h() {
        return this.f12340d;
    }

    public int i() {
        return this.f12341e;
    }

    public synchronized boolean j() {
        return this.f12350n;
    }

    public synchronized void k(boolean z10) {
        this.f12348l = z10 | this.f12348l;
        this.f12349m = true;
        notifyAll();
    }

    public s1 l() {
        ne.a.g(!this.f12347k);
        if (this.f12345i == -9223372036854775807L) {
            ne.a.a(this.f12346j);
        }
        this.f12347k = true;
        this.f12338b.e(this);
        return this;
    }

    public s1 m(Object obj) {
        ne.a.g(!this.f12347k);
        this.f12342f = obj;
        return this;
    }

    public s1 n(int i10) {
        ne.a.g(!this.f12347k);
        this.f12341e = i10;
        return this;
    }
}
