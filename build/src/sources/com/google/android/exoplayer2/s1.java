package com.google.android.exoplayer2;

import android.os.Looper;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f13369a;

    /* renamed from: b  reason: collision with root package name */
    private final a f13370b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.e f13371c;

    /* renamed from: d  reason: collision with root package name */
    private final Timeline f13372d;

    /* renamed from: e  reason: collision with root package name */
    private int f13373e;

    /* renamed from: f  reason: collision with root package name */
    private Object f13374f;

    /* renamed from: g  reason: collision with root package name */
    private Looper f13375g;

    /* renamed from: h  reason: collision with root package name */
    private int f13376h;

    /* renamed from: i  reason: collision with root package name */
    private long f13377i = -9223372036854775807L;

    /* renamed from: j  reason: collision with root package name */
    private boolean f13378j = true;

    /* renamed from: k  reason: collision with root package name */
    private boolean f13379k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f13380l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f13381m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f13382n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void e(s1 s1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void n(int i10, Object obj);
    }

    public s1(a aVar, b bVar, Timeline timeline, int i10, ne.e eVar, Looper looper) {
        this.f13370b = aVar;
        this.f13369a = bVar;
        this.f13372d = timeline;
        this.f13375g = looper;
        this.f13371c = eVar;
        this.f13376h = i10;
    }

    public synchronized boolean a(long j10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.g(this.f13379k);
            if (this.f13375g.getThread() != Thread.currentThread()) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            long b10 = this.f13371c.b() + j10;
            while (true) {
                z11 = this.f13381m;
                if (z11 || j10 <= 0) {
                    break;
                }
                this.f13371c.d();
                wait(j10);
                j10 = b10 - this.f13371c.b();
            }
            if (z11) {
            } else {
                throw new TimeoutException("Message delivery timed out.");
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f13380l;
    }

    public boolean b() {
        return this.f13378j;
    }

    public Looper c() {
        return this.f13375g;
    }

    public int d() {
        return this.f13376h;
    }

    public Object e() {
        return this.f13374f;
    }

    public long f() {
        return this.f13377i;
    }

    public b g() {
        return this.f13369a;
    }

    public Timeline h() {
        return this.f13372d;
    }

    public int i() {
        return this.f13373e;
    }

    public synchronized boolean j() {
        return this.f13382n;
    }

    public synchronized void k(boolean z10) {
        this.f13380l = z10 | this.f13380l;
        this.f13381m = true;
        notifyAll();
    }

    public s1 l() {
        ne.a.g(!this.f13379k);
        if (this.f13377i == -9223372036854775807L) {
            ne.a.a(this.f13378j);
        }
        this.f13379k = true;
        this.f13370b.e(this);
        return this;
    }

    public s1 m(Object obj) {
        ne.a.g(!this.f13379k);
        this.f13374f = obj;
        return this;
    }

    public s1 n(int i10) {
        ne.a.g(!this.f13379k);
        this.f13373e = i10;
        return this;
    }
}
