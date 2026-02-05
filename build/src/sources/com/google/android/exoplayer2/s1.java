package com.google.android.exoplayer2;

import android.os.Looper;
import java.util.concurrent.TimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s1 {

    /* renamed from: a  reason: collision with root package name */
    private final b f12722a;

    /* renamed from: b  reason: collision with root package name */
    private final a f12723b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.e f12724c;

    /* renamed from: d  reason: collision with root package name */
    private final Timeline f12725d;

    /* renamed from: e  reason: collision with root package name */
    private int f12726e;

    /* renamed from: f  reason: collision with root package name */
    private Object f12727f;

    /* renamed from: g  reason: collision with root package name */
    private Looper f12728g;

    /* renamed from: h  reason: collision with root package name */
    private int f12729h;

    /* renamed from: i  reason: collision with root package name */
    private long f12730i = -9223372036854775807L;

    /* renamed from: j  reason: collision with root package name */
    private boolean f12731j = true;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12732k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f12733l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f12734m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f12735n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void e(s1 s1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void n(int i10, Object obj);
    }

    public s1(a aVar, b bVar, Timeline timeline, int i10, ne.e eVar, Looper looper) {
        this.f12723b = aVar;
        this.f12722a = bVar;
        this.f12725d = timeline;
        this.f12728g = looper;
        this.f12724c = eVar;
        this.f12729h = i10;
    }

    public synchronized boolean a(long j10) {
        boolean z10;
        boolean z11;
        try {
            ne.a.g(this.f12732k);
            if (this.f12728g.getThread() != Thread.currentThread()) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            long b10 = this.f12724c.b() + j10;
            while (true) {
                z11 = this.f12734m;
                if (z11 || j10 <= 0) {
                    break;
                }
                this.f12724c.d();
                wait(j10);
                j10 = b10 - this.f12724c.b();
            }
            if (z11) {
            } else {
                throw new TimeoutException("Message delivery timed out.");
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f12733l;
    }

    public boolean b() {
        return this.f12731j;
    }

    public Looper c() {
        return this.f12728g;
    }

    public int d() {
        return this.f12729h;
    }

    public Object e() {
        return this.f12727f;
    }

    public long f() {
        return this.f12730i;
    }

    public b g() {
        return this.f12722a;
    }

    public Timeline h() {
        return this.f12725d;
    }

    public int i() {
        return this.f12726e;
    }

    public synchronized boolean j() {
        return this.f12735n;
    }

    public synchronized void k(boolean z10) {
        this.f12733l = z10 | this.f12733l;
        this.f12734m = true;
        notifyAll();
    }

    public s1 l() {
        ne.a.g(!this.f12732k);
        if (this.f12730i == -9223372036854775807L) {
            ne.a.a(this.f12731j);
        }
        this.f12732k = true;
        this.f12723b.e(this);
        return this;
    }

    public s1 m(Object obj) {
        ne.a.g(!this.f12732k);
        this.f12727f = obj;
        return this;
    }

    public s1 n(int i10) {
        ne.a.g(!this.f12732k);
        this.f12726e = i10;
        return this;
    }
}
