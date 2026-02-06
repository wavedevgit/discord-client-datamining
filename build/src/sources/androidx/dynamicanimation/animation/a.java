package androidx.dynamicanimation.animation;

import android.os.SystemClock;
import android.view.Choreographer;
import androidx.collection.SimpleArrayMap;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: g  reason: collision with root package name */
    public static final ThreadLocal f4326g = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private c f4330d;

    /* renamed from: a  reason: collision with root package name */
    private final SimpleArrayMap f4327a = new SimpleArrayMap();

    /* renamed from: b  reason: collision with root package name */
    final ArrayList f4328b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final C0045a f4329c = new C0045a();

    /* renamed from: e  reason: collision with root package name */
    long f4331e = 0;

    /* renamed from: f  reason: collision with root package name */
    private boolean f4332f = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.dynamicanimation.animation.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0045a {
        C0045a() {
        }

        void a() {
            a.this.f4331e = SystemClock.uptimeMillis();
            a aVar = a.this;
            aVar.c(aVar.f4331e);
            if (a.this.f4328b.size() > 0) {
                a.this.e().a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        boolean a(long j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class c {

        /* renamed from: a  reason: collision with root package name */
        final C0045a f4334a;

        c(C0045a c0045a) {
            this.f4334a = c0045a;
        }

        abstract void a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends c {

        /* renamed from: b  reason: collision with root package name */
        private final Choreographer f4335b;

        /* renamed from: c  reason: collision with root package name */
        private final Choreographer.FrameCallback f4336c;

        /* renamed from: androidx.dynamicanimation.animation.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class Choreographer$FrameCallbackC0046a implements Choreographer.FrameCallback {
            Choreographer$FrameCallbackC0046a() {
            }

            @Override // android.view.Choreographer.FrameCallback
            public void doFrame(long j10) {
                d.this.f4334a.a();
            }
        }

        d(C0045a c0045a) {
            super(c0045a);
            this.f4335b = Choreographer.getInstance();
            this.f4336c = new Choreographer$FrameCallbackC0046a();
        }

        @Override // androidx.dynamicanimation.animation.a.c
        void a() {
            this.f4335b.postFrameCallback(this.f4336c);
        }
    }

    a() {
    }

    private void b() {
        if (this.f4332f) {
            for (int size = this.f4328b.size() - 1; size >= 0; size--) {
                if (this.f4328b.get(size) == null) {
                    this.f4328b.remove(size);
                }
            }
            this.f4332f = false;
        }
    }

    public static a d() {
        ThreadLocal threadLocal = f4326g;
        if (threadLocal.get() == null) {
            threadLocal.set(new a());
        }
        return (a) threadLocal.get();
    }

    private boolean f(b bVar, long j10) {
        Long l10 = (Long) this.f4327a.get(bVar);
        if (l10 == null) {
            return true;
        }
        if (l10.longValue() < j10) {
            this.f4327a.remove(bVar);
            return true;
        }
        return false;
    }

    public void a(b bVar, long j10) {
        if (this.f4328b.size() == 0) {
            e().a();
        }
        if (!this.f4328b.contains(bVar)) {
            this.f4328b.add(bVar);
        }
        if (j10 > 0) {
            this.f4327a.put(bVar, Long.valueOf(SystemClock.uptimeMillis() + j10));
        }
    }

    void c(long j10) {
        long uptimeMillis = SystemClock.uptimeMillis();
        for (int i10 = 0; i10 < this.f4328b.size(); i10++) {
            b bVar = (b) this.f4328b.get(i10);
            if (bVar != null && f(bVar, uptimeMillis)) {
                bVar.a(j10);
            }
        }
        b();
    }

    c e() {
        if (this.f4330d == null) {
            this.f4330d = new d(this.f4329c);
        }
        return this.f4330d;
    }

    public void g(b bVar) {
        this.f4327a.remove(bVar);
        int indexOf = this.f4328b.indexOf(bVar);
        if (indexOf >= 0) {
            this.f4328b.set(indexOf, null);
            this.f4332f = true;
        }
    }
}
