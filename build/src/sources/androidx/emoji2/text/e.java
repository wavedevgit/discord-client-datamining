package androidx.emoji2.text;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.text.Editable;
import android.view.KeyEvent;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputConnection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: o  reason: collision with root package name */
    private static final Object f4388o = new Object();

    /* renamed from: p  reason: collision with root package name */
    private static final Object f4389p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private static volatile e f4390q;

    /* renamed from: b  reason: collision with root package name */
    private final Set f4392b;

    /* renamed from: e  reason: collision with root package name */
    private final b f4395e;

    /* renamed from: f  reason: collision with root package name */
    final h f4396f;

    /* renamed from: g  reason: collision with root package name */
    private final j f4397g;

    /* renamed from: h  reason: collision with root package name */
    final boolean f4398h;

    /* renamed from: i  reason: collision with root package name */
    final boolean f4399i;

    /* renamed from: j  reason: collision with root package name */
    final int[] f4400j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f4401k;

    /* renamed from: l  reason: collision with root package name */
    private final int f4402l;

    /* renamed from: m  reason: collision with root package name */
    private final int f4403m;

    /* renamed from: n  reason: collision with root package name */
    private final InterfaceC0050e f4404n;

    /* renamed from: a  reason: collision with root package name */
    private final ReadWriteLock f4391a = new ReentrantReadWriteLock();

    /* renamed from: c  reason: collision with root package name */
    private volatile int f4393c = 3;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f4394d = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a extends b {

        /* renamed from: b  reason: collision with root package name */
        private volatile androidx.emoji2.text.h f4405b;

        /* renamed from: c  reason: collision with root package name */
        private volatile m f4406c;

        /* renamed from: androidx.emoji2.text.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0049a extends i {
            C0049a() {
            }

            @Override // androidx.emoji2.text.e.i
            public void a(Throwable th2) {
                a.this.f4408a.n(th2);
            }

            @Override // androidx.emoji2.text.e.i
            public void b(m mVar) {
                a.this.d(mVar);
            }
        }

        a(e eVar) {
            super(eVar);
        }

        @Override // androidx.emoji2.text.e.b
        void a() {
            try {
                this.f4408a.f4396f.a(new C0049a());
            } catch (Throwable th2) {
                this.f4408a.n(th2);
            }
        }

        @Override // androidx.emoji2.text.e.b
        CharSequence b(CharSequence charSequence, int i10, int i11, int i12, boolean z10) {
            return this.f4405b.h(charSequence, i10, i11, i12, z10);
        }

        @Override // androidx.emoji2.text.e.b
        void c(EditorInfo editorInfo) {
            editorInfo.extras.putInt("android.support.text.emoji.emojiCompat_metadataVersion", this.f4406c.e());
            editorInfo.extras.putBoolean("android.support.text.emoji.emojiCompat_replaceAll", this.f4408a.f4398h);
        }

        void d(m mVar) {
            if (mVar == null) {
                this.f4408a.n(new IllegalArgumentException("metadataRepo cannot be null"));
                return;
            }
            this.f4406c = mVar;
            m mVar2 = this.f4406c;
            j jVar = this.f4408a.f4397g;
            InterfaceC0050e interfaceC0050e = this.f4408a.f4404n;
            e eVar = this.f4408a;
            this.f4405b = new androidx.emoji2.text.h(mVar2, jVar, interfaceC0050e, eVar.f4399i, eVar.f4400j, androidx.emoji2.text.g.a());
            this.f4408a.o();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        final e f4408a;

        b(e eVar) {
            this.f4408a = eVar;
        }

        abstract void a();

        abstract CharSequence b(CharSequence charSequence, int i10, int i11, int i12, boolean z10);

        abstract void c(EditorInfo editorInfo);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class c {

        /* renamed from: a  reason: collision with root package name */
        final h f4409a;

        /* renamed from: b  reason: collision with root package name */
        j f4410b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4411c;

        /* renamed from: d  reason: collision with root package name */
        boolean f4412d;

        /* renamed from: e  reason: collision with root package name */
        int[] f4413e;

        /* renamed from: f  reason: collision with root package name */
        Set f4414f;

        /* renamed from: g  reason: collision with root package name */
        boolean f4415g;

        /* renamed from: h  reason: collision with root package name */
        int f4416h = -16711936;

        /* renamed from: i  reason: collision with root package name */
        int f4417i = 0;

        /* renamed from: j  reason: collision with root package name */
        InterfaceC0050e f4418j = new androidx.emoji2.text.d();

        /* JADX INFO: Access modifiers changed from: protected */
        public c(h hVar) {
            b2.e.h(hVar, "metadataLoader cannot be null.");
            this.f4409a = hVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public final h a() {
            return this.f4409a;
        }

        public c b(int i10) {
            this.f4417i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d implements j {
        @Override // androidx.emoji2.text.e.j
        public androidx.emoji2.text.i a(o oVar) {
            return new p(oVar);
        }
    }

    /* renamed from: androidx.emoji2.text.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0050e {
        boolean a(CharSequence charSequence, int i10, int i11, int i12);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class f {
        public void a(Throwable th2) {
        }

        public void b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final List f4419d;

        /* renamed from: e  reason: collision with root package name */
        private final Throwable f4420e;

        /* renamed from: i  reason: collision with root package name */
        private final int f4421i;

        g(f fVar, int i10) {
            this(Arrays.asList((f) b2.e.h(fVar, "initCallback cannot be null")), i10, null);
        }

        @Override // java.lang.Runnable
        public void run() {
            int size = this.f4419d.size();
            int i10 = 0;
            if (this.f4421i != 1) {
                while (i10 < size) {
                    ((f) this.f4419d.get(i10)).a(this.f4420e);
                    i10++;
                }
                return;
            }
            while (i10 < size) {
                ((f) this.f4419d.get(i10)).b();
                i10++;
            }
        }

        g(Collection collection, int i10) {
            this(collection, i10, null);
        }

        g(Collection collection, int i10, Throwable th2) {
            b2.e.h(collection, "initCallbacks cannot be null");
            this.f4419d = new ArrayList(collection);
            this.f4421i = i10;
            this.f4420e = th2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface h {
        void a(i iVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class i {
        public abstract void a(Throwable th2);

        public abstract void b(m mVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface j {
        androidx.emoji2.text.i a(o oVar);
    }

    private e(c cVar) {
        this.f4398h = cVar.f4411c;
        this.f4399i = cVar.f4412d;
        this.f4400j = cVar.f4413e;
        this.f4401k = cVar.f4415g;
        this.f4402l = cVar.f4416h;
        this.f4396f = cVar.f4409a;
        this.f4403m = cVar.f4417i;
        this.f4404n = cVar.f4418j;
        u0.b bVar = new u0.b();
        this.f4392b = bVar;
        j jVar = cVar.f4410b;
        this.f4397g = jVar == null ? new d() : jVar;
        Set set = cVar.f4414f;
        if (set != null && !set.isEmpty()) {
            bVar.addAll(cVar.f4414f);
        }
        this.f4395e = new a(this);
        m();
    }

    public static e c() {
        e eVar;
        boolean z10;
        synchronized (f4388o) {
            eVar = f4390q;
            if (eVar != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "EmojiCompat is not initialized.\n\nYou must initialize EmojiCompat prior to referencing the EmojiCompat instance.\n\nThe most likely cause of this error is disabling the EmojiCompatInitializer\neither explicitly in AndroidManifest.xml, or by including\nandroidx.emoji2:emoji2-bundled.\n\nAutomatic initialization is typically performed by EmojiCompatInitializer. If\nyou are not expecting to initialize EmojiCompat manually in your application,\nplease check to ensure it has not been removed from your APK's manifest. You can\ndo this in Android Studio using Build > Analyze APK.\n\nIn the APK Analyzer, ensure that the startup entry for\nEmojiCompatInitializer and InitializationProvider is present in\n AndroidManifest.xml. If it is missing or contains tools:node=\"remove\", and you\nintend to use automatic configuration, verify:\n\n  1. Your application does not include emoji2-bundled\n  2. All modules do not contain an exclusion manifest rule for\n     EmojiCompatInitializer or InitializationProvider. For more information\n     about manifest exclusions see the documentation for the androidx startup\n     library.\n\nIf you intend to use emoji2-bundled, please call EmojiCompat.init. You can\nlearn more in the documentation for BundledEmojiCompatConfig.\n\nIf you intended to perform manual configuration, it is recommended that you call\nEmojiCompat.init immediately on application startup.\n\nIf you still cannot resolve this issue, please open a bug with your specific\nconfiguration to help improve error message.");
        }
        return eVar;
    }

    public static boolean f(InputConnection inputConnection, Editable editable, int i10, int i11, boolean z10) {
        return androidx.emoji2.text.h.b(inputConnection, editable, i10, i11, z10);
    }

    public static boolean g(Editable editable, int i10, KeyEvent keyEvent) {
        return androidx.emoji2.text.h.c(editable, i10, keyEvent);
    }

    public static e h(c cVar) {
        e eVar;
        e eVar2 = f4390q;
        if (eVar2 == null) {
            synchronized (f4388o) {
                try {
                    eVar = f4390q;
                    if (eVar == null) {
                        eVar = new e(cVar);
                        f4390q = eVar;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return eVar;
        }
        return eVar2;
    }

    public static boolean i() {
        if (f4390q != null) {
            return true;
        }
        return false;
    }

    private boolean k() {
        if (e() == 1) {
            return true;
        }
        return false;
    }

    private void m() {
        this.f4391a.writeLock().lock();
        try {
            if (this.f4403m == 0) {
                this.f4393c = 0;
            }
            this.f4391a.writeLock().unlock();
            if (e() == 0) {
                this.f4395e.a();
            }
        } catch (Throwable th2) {
            this.f4391a.writeLock().unlock();
            throw th2;
        }
    }

    public int d() {
        return this.f4402l;
    }

    public int e() {
        this.f4391a.readLock().lock();
        try {
            return this.f4393c;
        } finally {
            this.f4391a.readLock().unlock();
        }
    }

    public boolean j() {
        return this.f4401k;
    }

    public void l() {
        boolean z10 = true;
        if (this.f4403m != 1) {
            z10 = false;
        }
        b2.e.j(z10, "Set metadataLoadStrategy to LOAD_STRATEGY_MANUAL to execute manual loading");
        if (k()) {
            return;
        }
        this.f4391a.writeLock().lock();
        try {
            if (this.f4393c == 0) {
                return;
            }
            this.f4393c = 0;
            this.f4391a.writeLock().unlock();
            this.f4395e.a();
        } finally {
            this.f4391a.writeLock().unlock();
        }
    }

    void n(Throwable th2) {
        ArrayList arrayList = new ArrayList();
        this.f4391a.writeLock().lock();
        try {
            this.f4393c = 2;
            arrayList.addAll(this.f4392b);
            this.f4392b.clear();
            this.f4391a.writeLock().unlock();
            this.f4394d.post(new g(arrayList, this.f4393c, th2));
        } catch (Throwable th3) {
            this.f4391a.writeLock().unlock();
            throw th3;
        }
    }

    void o() {
        ArrayList arrayList = new ArrayList();
        this.f4391a.writeLock().lock();
        try {
            this.f4393c = 1;
            arrayList.addAll(this.f4392b);
            this.f4392b.clear();
            this.f4391a.writeLock().unlock();
            this.f4394d.post(new g(arrayList, this.f4393c));
        } catch (Throwable th2) {
            this.f4391a.writeLock().unlock();
            throw th2;
        }
    }

    public CharSequence p(CharSequence charSequence) {
        int length;
        if (charSequence == null) {
            length = 0;
        } else {
            length = charSequence.length();
        }
        return q(charSequence, 0, length);
    }

    public CharSequence q(CharSequence charSequence, int i10, int i11) {
        return r(charSequence, i10, i11, Integer.MAX_VALUE);
    }

    public CharSequence r(CharSequence charSequence, int i10, int i11, int i12) {
        return s(charSequence, i10, i11, i12, 0);
    }

    public CharSequence s(CharSequence charSequence, int i10, int i11, int i12, int i13) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        b2.e.j(k(), "Not initialized yet");
        b2.e.e(i10, "start cannot be negative");
        b2.e.e(i11, "end cannot be negative");
        b2.e.e(i12, "maxEmojiCount cannot be negative");
        boolean z14 = false;
        if (i10 <= i11) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.b(z10, "start should be <= than end");
        if (charSequence == null) {
            return null;
        }
        if (i10 <= charSequence.length()) {
            z11 = true;
        } else {
            z11 = false;
        }
        b2.e.b(z11, "start should be < than charSequence length");
        if (i11 <= charSequence.length()) {
            z12 = true;
        } else {
            z12 = false;
        }
        b2.e.b(z12, "end should be < than charSequence length");
        if (charSequence.length() == 0 || i10 == i11) {
            return charSequence;
        }
        if (i13 != 1) {
            if (i13 != 2) {
                z14 = this.f4398h;
            }
            z13 = z14;
        } else {
            z13 = true;
        }
        return this.f4395e.b(charSequence, i10, i11, i12, z13);
    }

    public void t(f fVar) {
        b2.e.h(fVar, "initCallback cannot be null");
        this.f4391a.writeLock().lock();
        try {
            if (this.f4393c != 1 && this.f4393c != 2) {
                this.f4392b.add(fVar);
                this.f4391a.writeLock().unlock();
            }
            this.f4394d.post(new g(fVar, this.f4393c));
            this.f4391a.writeLock().unlock();
        } catch (Throwable th2) {
            this.f4391a.writeLock().unlock();
            throw th2;
        }
    }

    public void u(f fVar) {
        b2.e.h(fVar, "initCallback cannot be null");
        this.f4391a.writeLock().lock();
        try {
            this.f4392b.remove(fVar);
        } finally {
            this.f4391a.writeLock().unlock();
        }
    }

    public void v(EditorInfo editorInfo) {
        if (k() && editorInfo != null) {
            if (editorInfo.extras == null) {
                editorInfo.extras = new Bundle();
            }
            this.f4395e.c(editorInfo);
        }
    }
}
