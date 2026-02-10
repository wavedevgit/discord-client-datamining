package com.google.android.exoplayer2;

import android.os.Looper;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f12823a;

    /* renamed from: b  reason: collision with root package name */
    private final a f12824b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.e f12825c;

    /* renamed from: d  reason: collision with root package name */
    private final Timeline f12826d;

    /* renamed from: e  reason: collision with root package name */
    private int f12827e;

    /* renamed from: f  reason: collision with root package name */
    private Object f12828f;

    /* renamed from: g  reason: collision with root package name */
    private Looper f12829g;

    /* renamed from: h  reason: collision with root package name */
    private int f12830h;

    /* renamed from: i  reason: collision with root package name */
    private long f12831i = -9223372036854775807L;

    /* renamed from: j  reason: collision with root package name */
    private boolean f12832j = true;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12833k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f12834l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f12835m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f12836n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void e(s1 s1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void o(int i10, Object obj);
    }

    public s1(a aVar, b bVar, Timeline timeline, int i10, oe.e eVar, Looper looper) {
        this.f12824b = aVar;
        this.f12823a = bVar;
        this.f12826d = timeline;
        this.f12829g = looper;
        this.f12825c = eVar;
        this.f12830h = i10;
    }

    public synchronized boolean a(long j10) {
        boolean z10;
        boolean z11;
        try {
            oe.a.g(this.f12833k);
            if (this.f12829g.getThread() != Thread.currentThread()) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            long b10 = this.f12825c.b() + j10;
            while (true) {
                z11 = this.f12835m;
                if (z11 || j10 <= 0) {
                    break;
                }
                this.f12825c.d();
                wait(j10);
                j10 = b10 - this.f12825c.b();
            }
            if (z11) {
            } else {
                throw new TimeoutException("Message delivery timed out.");
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f12834l;
    }

    public boolean b() {
        return this.f12832j;
    }

    public Looper c() {
        return this.f12829g;
    }

    public int d() {
        return this.f12830h;
    }

    public Object e() {
        return this.f12828f;
    }

    public long f() {
        return this.f12831i;
    }

    public b g() {
        return this.f12823a;
    }

    public Timeline h() {
        return this.f12826d;
    }

    public int i() {
        return this.f12827e;
    }

    public synchronized boolean j() {
        return this.f12836n;
    }

    public synchronized void k(boolean z10) {
        this.f12834l = z10 | this.f12834l;
        this.f12835m = true;
        notifyAll();
    }

    public s1 l() {
        oe.a.g(!this.f12833k);
        if (this.f12831i == -9223372036854775807L) {
            oe.a.a(this.f12832j);
        }
        this.f12833k = true;
        this.f12824b.e(this);
        return this;
    }

    public s1 m(Object obj) {
        oe.a.g(!this.f12833k);
        this.f12828f = obj;
        return this;
    }

    public s1 n(int i10) {
        oe.a.g(!this.f12833k);
        this.f12827e = i10;
        return this;
    }
}
