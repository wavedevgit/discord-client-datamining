package androidx.dynamicanimation.animation;

import android.os.SystemClock;
import android.view.Choreographer;
import androidx.collection.SimpleArrayMap;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: g  reason: collision with root package name */
    public static final ThreadLocal f3872g = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private c f3876d;

    /* renamed from: a  reason: collision with root package name */
    private final SimpleArrayMap f3873a = new SimpleArrayMap();

    /* renamed from: b  reason: collision with root package name */
    final ArrayList f3874b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final C0044a f3875c = new C0044a();

    /* renamed from: e  reason: collision with root package name */
    long f3877e = 0;

    /* renamed from: f  reason: collision with root package name */
    private boolean f3878f = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.dynamicanimation.animation.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0044a {
        C0044a() {
        }

        void a() {
            a.this.f3877e = SystemClock.uptimeMillis();
            a aVar = a.this;
            aVar.c(aVar.f3877e);
            if (a.this.f3874b.size() > 0) {
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
        final C0044a f3880a;

        c(C0044a c0044a) {
            this.f3880a = c0044a;
        }

        abstract void a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends c {

        /* renamed from: b  reason: collision with root package name */
        private final Choreographer f3881b;

        /* renamed from: c  reason: collision with root package name */
        private final Choreographer.FrameCallback f3882c;

        /* renamed from: androidx.dynamicanimation.animation.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class Choreographer$FrameCallbackC0045a implements Choreographer.FrameCallback {
            Choreographer$FrameCallbackC0045a() {
            }

            @Override // android.view.Choreographer.FrameCallback
            public void doFrame(long j10) {
                d.this.f3880a.a();
            }
        }

        d(C0044a c0044a) {
            super(c0044a);
            this.f3881b = Choreographer.getInstance();
            this.f3882c = new Choreographer$FrameCallbackC0045a();
        }

        @Override // androidx.dynamicanimation.animation.a.c
        void a() {
            this.f3881b.postFrameCallback(this.f3882c);
        }
    }

    a() {
    }

    private void b() {
        if (this.f3878f) {
            for (int size = this.f3874b.size() - 1; size >= 0; size--) {
                if (this.f3874b.get(size) == null) {
                    this.f3874b.remove(size);
                }
            }
            this.f3878f = false;
        }
    }

    public static a d() {
        ThreadLocal threadLocal = f3872g;
        if (threadLocal.get() == null) {
            threadLocal.set(new a());
        }
        return (a) threadLocal.get();
    }

    private boolean f(b bVar, long j10) {
        Long l10 = (Long) this.f3873a.get(bVar);
        if (l10 == null) {
            return true;
        }
        if (l10.longValue() < j10) {
            this.f3873a.remove(bVar);
            return true;
        }
        return false;
    }

    public void a(b bVar, long j10) {
        if (this.f3874b.size() == 0) {
            e().a();
        }
        if (!this.f3874b.contains(bVar)) {
            this.f3874b.add(bVar);
        }
        if (j10 > 0) {
            this.f3873a.put(bVar, Long.valueOf(SystemClock.uptimeMillis() + j10));
        }
    }

    void c(long j10) {
        long uptimeMillis = SystemClock.uptimeMillis();
        for (int i10 = 0; i10 < this.f3874b.size(); i10++) {
            b bVar = (b) this.f3874b.get(i10);
            if (bVar != null && f(bVar, uptimeMillis)) {
                bVar.a(j10);
            }
        }
        b();
    }

    c e() {
        if (this.f3876d == null) {
            this.f3876d = new d(this.f3875c);
        }
        return this.f3876d;
    }

    public void g(b bVar) {
        this.f3873a.remove(bVar);
        int indexOf = this.f3874b.indexOf(bVar);
        if (indexOf >= 0) {
            this.f3874b.set(indexOf, null);
            this.f3878f = true;
        }
    }
}
