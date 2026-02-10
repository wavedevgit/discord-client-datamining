package com.google.android.exoplayer2;

import android.os.Looper;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f13400a;

    /* renamed from: b  reason: collision with root package name */
    private final a f13401b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.e f13402c;

    /* renamed from: d  reason: collision with root package name */
    private final Timeline f13403d;

    /* renamed from: e  reason: collision with root package name */
    private int f13404e;

    /* renamed from: f  reason: collision with root package name */
    private Object f13405f;

    /* renamed from: g  reason: collision with root package name */
    private Looper f13406g;

    /* renamed from: h  reason: collision with root package name */
    private int f13407h;

    /* renamed from: i  reason: collision with root package name */
    private long f13408i = -9223372036854775807L;

    /* renamed from: j  reason: collision with root package name */
    private boolean f13409j = true;

    /* renamed from: k  reason: collision with root package name */
    private boolean f13410k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f13411l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f13412m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f13413n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void e(s1 s1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void o(int i10, Object obj);
    }

    public s1(a aVar, b bVar, Timeline timeline, int i10, oe.e eVar, Looper looper) {
        this.f13401b = aVar;
        this.f13400a = bVar;
        this.f13403d = timeline;
        this.f13406g = looper;
        this.f13402c = eVar;
        this.f13407h = i10;
    }

    public synchronized boolean a(long j10) {
        boolean z10;
        boolean z11;
        try {
            oe.a.g(this.f13410k);
            if (this.f13406g.getThread() != Thread.currentThread()) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            long b10 = this.f13402c.b() + j10;
            while (true) {
                z11 = this.f13412m;
                if (z11 || j10 <= 0) {
                    break;
                }
                this.f13402c.d();
                wait(j10);
                j10 = b10 - this.f13402c.b();
            }
            if (z11) {
            } else {
                throw new TimeoutException("Message delivery timed out.");
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f13411l;
    }

    public boolean b() {
        return this.f13409j;
    }

    public Looper c() {
        return this.f13406g;
    }

    public int d() {
        return this.f13407h;
    }

    public Object e() {
        return this.f13405f;
    }

    public long f() {
        return this.f13408i;
    }

    public b g() {
        return this.f13400a;
    }

    public Timeline h() {
        return this.f13403d;
    }

    public int i() {
        return this.f13404e;
    }

    public synchronized boolean j() {
        return this.f13413n;
    }

    public synchronized void k(boolean z10) {
        this.f13411l = z10 | this.f13411l;
        this.f13412m = true;
        notifyAll();
    }

    public s1 l() {
        oe.a.g(!this.f13410k);
        if (this.f13408i == -9223372036854775807L) {
            oe.a.a(this.f13409j);
        }
        this.f13410k = true;
        this.f13401b.e(this);
        return this;
    }

    public s1 m(Object obj) {
        oe.a.g(!this.f13410k);
        this.f13405f = obj;
        return this;
    }

    public s1 n(int i10) {
        oe.a.g(!this.f13410k);
        this.f13404e = i10;
        return this;
    }
}
