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
    private static final Object f4059o = new Object();

    /* renamed from: p  reason: collision with root package name */
    private static final Object f4060p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private static volatile e f4061q;

    /* renamed from: b  reason: collision with root package name */
    private final Set f4063b;

    /* renamed from: e  reason: collision with root package name */
    private final b f4066e;

    /* renamed from: f  reason: collision with root package name */
    final h f4067f;

    /* renamed from: g  reason: collision with root package name */
    private final j f4068g;

    /* renamed from: h  reason: collision with root package name */
    final boolean f4069h;

    /* renamed from: i  reason: collision with root package name */
    final boolean f4070i;

    /* renamed from: j  reason: collision with root package name */
    final int[] f4071j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f4072k;

    /* renamed from: l  reason: collision with root package name */
    private final int f4073l;

    /* renamed from: m  reason: collision with root package name */
    private final int f4074m;

    /* renamed from: n  reason: collision with root package name */
    private final InterfaceC0052e f4075n;

    /* renamed from: a  reason: collision with root package name */
    private final ReadWriteLock f4062a = new ReentrantReadWriteLock();

    /* renamed from: c  reason: collision with root package name */
    private volatile int f4064c = 3;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f4065d = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a extends b {

        /* renamed from: b  reason: collision with root package name */
        private volatile androidx.emoji2.text.h f4076b;

        /* renamed from: c  reason: collision with root package name */
        private volatile m f4077c;

        /* renamed from: androidx.emoji2.text.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0051a extends i {
            C0051a() {
            }

            @Override // androidx.emoji2.text.e.i
            public void a(Throwable th2) {
                a.this.f4079a.n(th2);
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
                this.f4079a.f4067f.a(new C0051a());
            } catch (Throwable th2) {
                this.f4079a.n(th2);
            }
        }

        @Override // androidx.emoji2.text.e.b
        CharSequence b(CharSequence charSequence, int i10, int i11, int i12, boolean z10) {
            return this.f4076b.h(charSequence, i10, i11, i12, z10);
        }

        @Override // androidx.emoji2.text.e.b
        void c(EditorInfo editorInfo) {
            editorInfo.extras.putInt("android.support.text.emoji.emojiCompat_metadataVersion", this.f4077c.e());
            editorInfo.extras.putBoolean("android.support.text.emoji.emojiCompat_replaceAll", this.f4079a.f4069h);
        }

        void d(m mVar) {
            if (mVar == null) {
                this.f4079a.n(new IllegalArgumentException("metadataRepo cannot be null"));
                return;
            }
            this.f4077c = mVar;
            m mVar2 = this.f4077c;
            j jVar = this.f4079a.f4068g;
            InterfaceC0052e interfaceC0052e = this.f4079a.f4075n;
            e eVar = this.f4079a;
            this.f4076b = new androidx.emoji2.text.h(mVar2, jVar, interfaceC0052e, eVar.f4070i, eVar.f4071j, androidx.emoji2.text.g.a());
            this.f4079a.o();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        final e f4079a;

        b(e eVar) {
            this.f4079a = eVar;
        }

        abstract void a();

        abstract CharSequence b(CharSequence charSequence, int i10, int i11, int i12, boolean z10);

        abstract void c(EditorInfo editorInfo);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class c {

        /* renamed from: a  reason: collision with root package name */
        final h f4080a;

        /* renamed from: b  reason: collision with root package name */
        j f4081b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4082c;

        /* renamed from: d  reason: collision with root package name */
        boolean f4083d;

        /* renamed from: e  reason: collision with root package name */
        int[] f4084e;

        /* renamed from: f  reason: collision with root package name */
        Set f4085f;

        /* renamed from: g  reason: collision with root package name */
        boolean f4086g;

        /* renamed from: h  reason: collision with root package name */
        int f4087h = -16711936;

        /* renamed from: i  reason: collision with root package name */
        int f4088i = 0;

        /* renamed from: j  reason: collision with root package name */
        InterfaceC0052e f4089j = new androidx.emoji2.text.d();

        /* JADX INFO: Access modifiers changed from: protected */
        public c(h hVar) {
            b2.e.h(hVar, "metadataLoader cannot be null.");
            this.f4080a = hVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public final h a() {
            return this.f4080a;
        }

        public c b(int i10) {
            this.f4088i = i10;
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
    public interface InterfaceC0052e {
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
        private final List f4090d;

        /* renamed from: e  reason: collision with root package name */
        private final Throwable f4091e;

        /* renamed from: i  reason: collision with root package name */
        private final int f4092i;

        g(f fVar, int i10) {
            this(Arrays.asList((f) b2.e.h(fVar, "initCallback cannot be null")), i10, null);
        }

        @Override // java.lang.Runnable
        public void run() {
            int size = this.f4090d.size();
            int i10 = 0;
            if (this.f4092i != 1) {
                while (i10 < size) {
                    ((f) this.f4090d.get(i10)).a(this.f4091e);
                    i10++;
                }
                return;
            }
            while (i10 < size) {
                ((f) this.f4090d.get(i10)).b();
                i10++;
            }
        }

        g(Collection collection, int i10) {
            this(collection, i10, null);
        }

        g(Collection collection, int i10, Throwable th2) {
            b2.e.h(collection, "initCallbacks cannot be null");
            this.f4090d = new ArrayList(collection);
            this.f4092i = i10;
            this.f4091e = th2;
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
        this.f4069h = cVar.f4082c;
        this.f4070i = cVar.f4083d;
        this.f4071j = cVar.f4084e;
        this.f4072k = cVar.f4086g;
        this.f4073l = cVar.f4087h;
        this.f4067f = cVar.f4080a;
        this.f4074m = cVar.f4088i;
        this.f4075n = cVar.f4089j;
        u0.b bVar = new u0.b();
        this.f4063b = bVar;
        j jVar = cVar.f4081b;
        this.f4068g = jVar == null ? new d() : jVar;
        Set set = cVar.f4085f;
        if (set != null && !set.isEmpty()) {
            bVar.addAll(cVar.f4085f);
        }
        this.f4066e = new a(this);
        m();
    }

    public static e c() {
        e eVar;
        boolean z10;
        synchronized (f4059o) {
            eVar = f4061q;
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
        e eVar2 = f4061q;
        if (eVar2 == null) {
            synchronized (f4059o) {
                try {
                    eVar = f4061q;
                    if (eVar == null) {
                        eVar = new e(cVar);
                        f4061q = eVar;
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
        if (f4061q != null) {
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
        this.f4062a.writeLock().lock();
        try {
            if (this.f4074m == 0) {
                this.f4064c = 0;
            }
            this.f4062a.writeLock().unlock();
            if (e() == 0) {
                this.f4066e.a();
            }
        } catch (Throwable th2) {
            this.f4062a.writeLock().unlock();
            throw th2;
        }
    }

    public int d() {
        return this.f4073l;
    }

    public int e() {
        this.f4062a.readLock().lock();
        try {
            return this.f4064c;
        } finally {
            this.f4062a.readLock().unlock();
        }
    }

    public boolean j() {
        return this.f4072k;
    }

    public void l() {
        boolean z10 = true;
        if (this.f4074m != 1) {
            z10 = false;
        }
        b2.e.j(z10, "Set metadataLoadStrategy to LOAD_STRATEGY_MANUAL to execute manual loading");
        if (k()) {
            return;
        }
        this.f4062a.writeLock().lock();
        try {
            if (this.f4064c == 0) {
                return;
            }
            this.f4064c = 0;
            this.f4062a.writeLock().unlock();
            this.f4066e.a();
        } finally {
            this.f4062a.writeLock().unlock();
        }
    }

    void n(Throwable th2) {
        ArrayList arrayList = new ArrayList();
        this.f4062a.writeLock().lock();
        try {
            this.f4064c = 2;
            arrayList.addAll(this.f4063b);
            this.f4063b.clear();
            this.f4062a.writeLock().unlock();
            this.f4065d.post(new g(arrayList, this.f4064c, th2));
        } catch (Throwable th3) {
            this.f4062a.writeLock().unlock();
            throw th3;
        }
    }

    void o() {
        ArrayList arrayList = new ArrayList();
        this.f4062a.writeLock().lock();
        try {
            this.f4064c = 1;
            arrayList.addAll(this.f4063b);
            this.f4063b.clear();
            this.f4062a.writeLock().unlock();
            this.f4065d.post(new g(arrayList, this.f4064c));
        } catch (Throwable th2) {
            this.f4062a.writeLock().unlock();
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
                z14 = this.f4069h;
            }
            z13 = z14;
        } else {
            z13 = true;
        }
        return this.f4066e.b(charSequence, i10, i11, i12, z13);
    }

    public void t(f fVar) {
        b2.e.h(fVar, "initCallback cannot be null");
        this.f4062a.writeLock().lock();
        try {
            if (this.f4064c != 1 && this.f4064c != 2) {
                this.f4063b.add(fVar);
                this.f4062a.writeLock().unlock();
            }
            this.f4065d.post(new g(fVar, this.f4064c));
            this.f4062a.writeLock().unlock();
        } catch (Throwable th2) {
            this.f4062a.writeLock().unlock();
            throw th2;
        }
    }

    public void u(f fVar) {
        b2.e.h(fVar, "initCallback cannot be null");
        this.f4062a.writeLock().lock();
        try {
            this.f4063b.remove(fVar);
        } finally {
            this.f4062a.writeLock().unlock();
        }
    }

    public void v(EditorInfo editorInfo) {
        if (k() && editorInfo != null) {
            if (editorInfo.extras == null) {
                editorInfo.extras = new Bundle();
            }
            this.f4066e.c(editorInfo);
        }
    }
}
