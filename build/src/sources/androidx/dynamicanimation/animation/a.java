package androidx.dynamicanimation.animation;

import android.os.SystemClock;
import android.view.Choreographer;
import androidx.collection.SimpleArrayMap;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: g  reason: collision with root package name */
    public static final ThreadLocal f3885g = new ThreadLocal();

    /* renamed from: d  reason: collision with root package name */
    private c f3889d;

    /* renamed from: a  reason: collision with root package name */
    private final SimpleArrayMap f3886a = new SimpleArrayMap();

    /* renamed from: b  reason: collision with root package name */
    final ArrayList f3887b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final C0046a f3888c = new C0046a();

    /* renamed from: e  reason: collision with root package name */
    long f3890e = 0;

    /* renamed from: f  reason: collision with root package name */
    private boolean f3891f = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.dynamicanimation.animation.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0046a {
        C0046a() {
        }

        void a() {
            a.this.f3890e = SystemClock.uptimeMillis();
            a aVar = a.this;
            aVar.c(aVar.f3890e);
            if (a.this.f3887b.size() > 0) {
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
        final C0046a f3893a;

        c(C0046a c0046a) {
            this.f3893a = c0046a;
        }

        abstract void a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends c {

        /* renamed from: b  reason: collision with root package name */
        private final Choreographer f3894b;

        /* renamed from: c  reason: collision with root package name */
        private final Choreographer.FrameCallback f3895c;

        /* renamed from: androidx.dynamicanimation.animation.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class Choreographer$FrameCallbackC0047a implements Choreographer.FrameCallback {
            Choreographer$FrameCallbackC0047a() {
            }

            @Override // android.view.Choreographer.FrameCallback
            public void doFrame(long j10) {
                d.this.f3893a.a();
            }
        }

        d(C0046a c0046a) {
            super(c0046a);
            this.f3894b = Choreographer.getInstance();
            this.f3895c = new Choreographer$FrameCallbackC0047a();
        }

        @Override // androidx.dynamicanimation.animation.a.c
        void a() {
            this.f3894b.postFrameCallback(this.f3895c);
        }
    }

    a() {
    }

    private void b() {
        if (this.f3891f) {
            for (int size = this.f3887b.size() - 1; size >= 0; size--) {
                if (this.f3887b.get(size) == null) {
                    this.f3887b.remove(size);
                }
            }
            this.f3891f = false;
        }
    }

    public static a d() {
        ThreadLocal threadLocal = f3885g;
        if (threadLocal.get() == null) {
            threadLocal.set(new a());
        }
        return (a) threadLocal.get();
    }

    private boolean f(b bVar, long j10) {
        Long l10 = (Long) this.f3886a.get(bVar);
        if (l10 == null) {
            return true;
        }
        if (l10.longValue() < j10) {
            this.f3886a.remove(bVar);
            return true;
        }
        return false;
    }

    public void a(b bVar, long j10) {
        if (this.f3887b.size() == 0) {
            e().a();
        }
        if (!this.f3887b.contains(bVar)) {
            this.f3887b.add(bVar);
        }
        if (j10 > 0) {
            this.f3886a.put(bVar, Long.valueOf(SystemClock.uptimeMillis() + j10));
        }
    }

    void c(long j10) {
        long uptimeMillis = SystemClock.uptimeMillis();
        for (int i10 = 0; i10 < this.f3887b.size(); i10++) {
            b bVar = (b) this.f3887b.get(i10);
            if (bVar != null && f(bVar, uptimeMillis)) {
                bVar.a(j10);
            }
        }
        b();
    }

    c e() {
        if (this.f3889d == null) {
            this.f3889d = new d(this.f3888c);
        }
        return this.f3889d;
    }

    public void g(b bVar) {
        this.f3886a.remove(bVar);
        int indexOf = this.f3887b.indexOf(bVar);
        if (indexOf >= 0) {
            this.f3887b.set(indexOf, null);
            this.f3891f = true;
        }
    }
}
