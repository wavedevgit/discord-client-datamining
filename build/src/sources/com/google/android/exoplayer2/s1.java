package com.google.android.exoplayer2;

import android.os.Looper;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f13401a;

    /* renamed from: b  reason: collision with root package name */
    private final a f13402b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.e f13403c;

    /* renamed from: d  reason: collision with root package name */
    private final Timeline f13404d;

    /* renamed from: e  reason: collision with root package name */
    private int f13405e;

    /* renamed from: f  reason: collision with root package name */
    private Object f13406f;

    /* renamed from: g  reason: collision with root package name */
    private Looper f13407g;

    /* renamed from: h  reason: collision with root package name */
    private int f13408h;

    /* renamed from: i  reason: collision with root package name */
    private long f13409i = -9223372036854775807L;

    /* renamed from: j  reason: collision with root package name */
    private boolean f13410j = true;

    /* renamed from: k  reason: collision with root package name */
    private boolean f13411k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f13412l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f13413m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f13414n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void e(s1 s1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void o(int i10, Object obj);
    }

    public s1(a aVar, b bVar, Timeline timeline, int i10, oe.e eVar, Looper looper) {
        this.f13402b = aVar;
        this.f13401a = bVar;
        this.f13404d = timeline;
        this.f13407g = looper;
        this.f13403c = eVar;
        this.f13408h = i10;
    }

    public synchronized boolean a(long j10) {
        boolean z10;
        boolean z11;
        try {
            oe.a.g(this.f13411k);
            if (this.f13407g.getThread() != Thread.currentThread()) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            long b10 = this.f13403c.b() + j10;
            while (true) {
                z11 = this.f13413m;
                if (z11 || j10 <= 0) {
                    break;
                }
                this.f13403c.d();
                wait(j10);
                j10 = b10 - this.f13403c.b();
            }
            if (z11) {
            } else {
                throw new TimeoutException("Message delivery timed out.");
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f13412l;
    }

    public boolean b() {
        return this.f13410j;
    }

    public Looper c() {
        return this.f13407g;
    }

    public int d() {
        return this.f13408h;
    }

    public Object e() {
        return this.f13406f;
    }

    public long f() {
        return this.f13409i;
    }

    public b g() {
        return this.f13401a;
    }

    public Timeline h() {
        return this.f13404d;
    }

    public int i() {
        return this.f13405e;
    }

    public synchronized boolean j() {
        return this.f13414n;
    }

    public synchronized void k(boolean z10) {
        this.f13412l = z10 | this.f13412l;
        this.f13413m = true;
        notifyAll();
    }

    public s1 l() {
        oe.a.g(!this.f13411k);
        if (this.f13409i == -9223372036854775807L) {
            oe.a.a(this.f13410j);
        }
        this.f13411k = true;
        this.f13402b.e(this);
        return this;
    }

    public s1 m(Object obj) {
        oe.a.g(!this.f13411k);
        this.f13406f = obj;
        return this;
    }

    public s1 n(int i10) {
        oe.a.g(!this.f13411k);
        this.f13405e = i10;
        return this;
    }
}
