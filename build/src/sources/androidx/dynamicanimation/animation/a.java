package androidx.dynamicanimation.animation;

import android.os.SystemClock;
import android.view.Choreographer;
import androidx.collection.SimpleArrayMap;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: g  reason: collision with root package name */
    public static final ThreadLocal f3997g = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private c f4001d;

    /* renamed from: a  reason: collision with root package name */
    private final SimpleArrayMap f3998a = new SimpleArrayMap();

    /* renamed from: b  reason: collision with root package name */
    final ArrayList f3999b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final C0047a f4000c = new C0047a();

    /* renamed from: e  reason: collision with root package name */
    long f4002e = 0;

    /* renamed from: f  reason: collision with root package name */
    private boolean f4003f = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.dynamicanimation.animation.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0047a {
        C0047a() {
        }

        void a() {
            a.this.f4002e = SystemClock.uptimeMillis();
            a aVar = a.this;
            aVar.c(aVar.f4002e);
            if (a.this.f3999b.size() > 0) {
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
        final C0047a f4005a;

        c(C0047a c0047a) {
            this.f4005a = c0047a;
        }

        abstract void a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends c {

        /* renamed from: b  reason: collision with root package name */
        private final Choreographer f4006b;

        /* renamed from: c  reason: collision with root package name */
        private final Choreographer.FrameCallback f4007c;

        /* renamed from: androidx.dynamicanimation.animation.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class Choreographer$FrameCallbackC0048a implements Choreographer.FrameCallback {
            Choreographer$FrameCallbackC0048a() {
            }

            @Override // android.view.Choreographer.FrameCallback
            public void doFrame(long j10) {
                d.this.f4005a.a();
            }
        }

        d(C0047a c0047a) {
            super(c0047a);
            this.f4006b = Choreographer.getInstance();
            this.f4007c = new Choreographer$FrameCallbackC0048a();
        }

        @Override // androidx.dynamicanimation.animation.a.c
        void a() {
            this.f4006b.postFrameCallback(this.f4007c);
        }
    }

    a() {
    }

    private void b() {
        if (this.f4003f) {
            for (int size = this.f3999b.size() - 1; size >= 0; size--) {
                if (this.f3999b.get(size) == null) {
                    this.f3999b.remove(size);
                }
            }
            this.f4003f = false;
        }
    }

    public static a d() {
        ThreadLocal threadLocal = f3997g;
        if (threadLocal.get() == null) {
            threadLocal.set(new a());
        }
        return (a) threadLocal.get();
    }

    private boolean f(b bVar, long j10) {
        Long l10 = (Long) this.f3998a.get(bVar);
        if (l10 == null) {
            return true;
        }
        if (l10.longValue() < j10) {
            this.f3998a.remove(bVar);
            return true;
        }
        return false;
    }

    public void a(b bVar, long j10) {
        if (this.f3999b.size() == 0) {
            e().a();
        }
        if (!this.f3999b.contains(bVar)) {
            this.f3999b.add(bVar);
        }
        if (j10 > 0) {
            this.f3998a.put(bVar, Long.valueOf(SystemClock.uptimeMillis() + j10));
        }
    }

    void c(long j10) {
        long uptimeMillis = SystemClock.uptimeMillis();
        for (int i10 = 0; i10 < this.f3999b.size(); i10++) {
            b bVar = (b) this.f3999b.get(i10);
            if (bVar != null && f(bVar, uptimeMillis)) {
                bVar.a(j10);
            }
        }
        b();
    }

    c e() {
        if (this.f4001d == null) {
            this.f4001d = new d(this.f4000c);
        }
        return this.f4001d;
    }

    public void g(b bVar) {
        this.f3998a.remove(bVar);
        int indexOf = this.f3999b.indexOf(bVar);
        if (indexOf >= 0) {
            this.f3999b.set(indexOf, null);
            this.f4003f = true;
        }
    }
}
