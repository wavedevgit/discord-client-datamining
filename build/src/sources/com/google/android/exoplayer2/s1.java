package com.google.android.exoplayer2;

import android.os.Looper;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f13740a;

    /* renamed from: b  reason: collision with root package name */
    private final a f13741b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.e f13742c;

    /* renamed from: d  reason: collision with root package name */
    private final Timeline f13743d;

    /* renamed from: e  reason: collision with root package name */
    private int f13744e;

    /* renamed from: f  reason: collision with root package name */
    private Object f13745f;

    /* renamed from: g  reason: collision with root package name */
    private Looper f13746g;

    /* renamed from: h  reason: collision with root package name */
    private int f13747h;

    /* renamed from: i  reason: collision with root package name */
    private long f13748i = -9223372036854775807L;

    /* renamed from: j  reason: collision with root package name */
    private boolean f13749j = true;

    /* renamed from: k  reason: collision with root package name */
    private boolean f13750k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f13751l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f13752m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f13753n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void e(s1 s1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void n(int i10, Object obj);
    }

    public s1(a aVar, b bVar, Timeline timeline, int i10, ne.e eVar, Looper looper) {
        this.f13741b = aVar;
        this.f13740a = bVar;
        this.f13743d = timeline;
        this.f13746g = looper;
        this.f13742c = eVar;
        this.f13747h = i10;
    }

    public synchronized boolean a(long j10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.g(this.f13750k);
            if (this.f13746g.getThread() != Thread.currentThread()) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            long b10 = this.f13742c.b() + j10;
            while (true) {
                z11 = this.f13752m;
                if (z11 || j10 <= 0) {
                    break;
                }
                this.f13742c.d();
                wait(j10);
                j10 = b10 - this.f13742c.b();
            }
            if (z11) {
            } else {
                throw new TimeoutException("Message delivery timed out.");
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f13751l;
    }

    public boolean b() {
        return this.f13749j;
    }

    public Looper c() {
        return this.f13746g;
    }

    public int d() {
        return this.f13747h;
    }

    public Object e() {
        return this.f13745f;
    }

    public long f() {
        return this.f13748i;
    }

    public b g() {
        return this.f13740a;
    }

    public Timeline h() {
        return this.f13743d;
    }

    public int i() {
        return this.f13744e;
    }

    public synchronized boolean j() {
        return this.f13753n;
    }

    public synchronized void k(boolean z10) {
        this.f13751l = z10 | this.f13751l;
        this.f13752m = true;
        notifyAll();
    }

    public s1 l() {
        ne.a.g(!this.f13750k);
        if (this.f13748i == -9223372036854775807L) {
            ne.a.a(this.f13749j);
        }
        this.f13750k = true;
        this.f13741b.e(this);
        return this;
    }

    public s1 m(Object obj) {
        ne.a.g(!this.f13750k);
        this.f13745f = obj;
        return this;
    }

    public s1 n(int i10) {
        ne.a.g(!this.f13750k);
        this.f13744e = i10;
        return this;
    }
}
