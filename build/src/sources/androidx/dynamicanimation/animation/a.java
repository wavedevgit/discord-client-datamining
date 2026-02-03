package androidx.dynamicanimation.animation;

import android.os.SystemClock;
import android.view.Choreographer;
import androidx.collection.SimpleArrayMap;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: g  reason: collision with root package name */
    public static final ThreadLocal f3916g = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private c f3920d;

    /* renamed from: a  reason: collision with root package name */
    private final SimpleArrayMap f3917a = new SimpleArrayMap();

    /* renamed from: b  reason: collision with root package name */
    final ArrayList f3918b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final C0048a f3919c = new C0048a();

    /* renamed from: e  reason: collision with root package name */
    long f3921e = 0;

    /* renamed from: f  reason: collision with root package name */
    private boolean f3922f = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.dynamicanimation.animation.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0048a {
        C0048a() {
        }

        void a() {
            a.this.f3921e = SystemClock.uptimeMillis();
            a aVar = a.this;
            aVar.c(aVar.f3921e);
            if (a.this.f3918b.size() > 0) {
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
        final C0048a f3924a;

        c(C0048a c0048a) {
            this.f3924a = c0048a;
        }

        abstract void a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends c {

        /* renamed from: b  reason: collision with root package name */
        private final Choreographer f3925b;

        /* renamed from: c  reason: collision with root package name */
        private final Choreographer.FrameCallback f3926c;

        /* renamed from: androidx.dynamicanimation.animation.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class Choreographer$FrameCallbackC0049a implements Choreographer.FrameCallback {
            Choreographer$FrameCallbackC0049a() {
            }

            @Override // android.view.Choreographer.FrameCallback
            public void doFrame(long j10) {
                d.this.f3924a.a();
            }
        }

        d(C0048a c0048a) {
            super(c0048a);
            this.f3925b = Choreographer.getInstance();
            this.f3926c = new Choreographer$FrameCallbackC0049a();
        }

        @Override // androidx.dynamicanimation.animation.a.c
        void a() {
            this.f3925b.postFrameCallback(this.f3926c);
        }
    }

    a() {
    }

    private void b() {
        if (this.f3922f) {
            for (int size = this.f3918b.size() - 1; size >= 0; size--) {
                if (this.f3918b.get(size) == null) {
                    this.f3918b.remove(size);
                }
            }
            this.f3922f = false;
        }
    }

    public static a d() {
        ThreadLocal threadLocal = f3916g;
        if (threadLocal.get() == null) {
            threadLocal.set(new a());
        }
        return (a) threadLocal.get();
    }

    private boolean f(b bVar, long j10) {
        Long l10 = (Long) this.f3917a.get(bVar);
        if (l10 == null) {
            return true;
        }
        if (l10.longValue() < j10) {
            this.f3917a.remove(bVar);
            return true;
        }
        return false;
    }

    public void a(b bVar, long j10) {
        if (this.f3918b.size() == 0) {
            e().a();
        }
        if (!this.f3918b.contains(bVar)) {
            this.f3918b.add(bVar);
        }
        if (j10 > 0) {
            this.f3917a.put(bVar, Long.valueOf(SystemClock.uptimeMillis() + j10));
        }
    }

    void c(long j10) {
        long uptimeMillis = SystemClock.uptimeMillis();
        for (int i10 = 0; i10 < this.f3918b.size(); i10++) {
            b bVar = (b) this.f3918b.get(i10);
            if (bVar != null && f(bVar, uptimeMillis)) {
                bVar.a(j10);
            }
        }
        b();
    }

    c e() {
        if (this.f3920d == null) {
            this.f3920d = new d(this.f3919c);
        }
        return this.f3920d;
    }

    public void g(b bVar) {
        this.f3917a.remove(bVar);
        int indexOf = this.f3918b.indexOf(bVar);
        if (indexOf >= 0) {
            this.f3918b.set(indexOf, null);
            this.f3922f = true;
        }
    }
}
