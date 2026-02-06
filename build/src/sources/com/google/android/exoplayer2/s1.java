package com.google.android.exoplayer2;

import android.os.Looper;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f12683a;

    /* renamed from: b  reason: collision with root package name */
    private final a f12684b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.e f12685c;

    /* renamed from: d  reason: collision with root package name */
    private final Timeline f12686d;

    /* renamed from: e  reason: collision with root package name */
    private int f12687e;

    /* renamed from: f  reason: collision with root package name */
    private Object f12688f;

    /* renamed from: g  reason: collision with root package name */
    private Looper f12689g;

    /* renamed from: h  reason: collision with root package name */
    private int f12690h;

    /* renamed from: i  reason: collision with root package name */
    private long f12691i = -9223372036854775807L;

    /* renamed from: j  reason: collision with root package name */
    private boolean f12692j = true;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12693k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f12694l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f12695m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f12696n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void e(s1 s1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void n(int i10, Object obj);
    }

    public s1(a aVar, b bVar, Timeline timeline, int i10, ne.e eVar, Looper looper) {
        this.f12684b = aVar;
        this.f12683a = bVar;
        this.f12686d = timeline;
        this.f12689g = looper;
        this.f12685c = eVar;
        this.f12690h = i10;
    }

    public synchronized boolean a(long j10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.g(this.f12693k);
            if (this.f12689g.getThread() != Thread.currentThread()) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            long b10 = this.f12685c.b() + j10;
            while (true) {
                z11 = this.f12695m;
                if (z11 || j10 <= 0) {
                    break;
                }
                this.f12685c.d();
                wait(j10);
                j10 = b10 - this.f12685c.b();
            }
            if (z11) {
            } else {
                throw new TimeoutException("Message delivery timed out.");
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f12694l;
    }

    public boolean b() {
        return this.f12692j;
    }

    public Looper c() {
        return this.f12689g;
    }

    public int d() {
        return this.f12690h;
    }

    public Object e() {
        return this.f12688f;
    }

    public long f() {
        return this.f12691i;
    }

    public b g() {
        return this.f12683a;
    }

    public Timeline h() {
        return this.f12686d;
    }

    public int i() {
        return this.f12687e;
    }

    public synchronized boolean j() {
        return this.f12696n;
    }

    public synchronized void k(boolean z10) {
        this.f12694l = z10 | this.f12694l;
        this.f12695m = true;
        notifyAll();
    }

    public s1 l() {
        ne.a.g(!this.f12693k);
        if (this.f12691i == -9223372036854775807L) {
            ne.a.a(this.f12692j);
        }
        this.f12693k = true;
        this.f12684b.e(this);
        return this;
    }

    public s1 m(Object obj) {
        ne.a.g(!this.f12693k);
        this.f12688f = obj;
        return this;
    }

    public s1 n(int i10) {
        ne.a.g(!this.f12693k);
        this.f12687e = i10;
        return this;
    }
}
