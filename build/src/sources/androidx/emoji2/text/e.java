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
    private static final Object f3947o = new Object();

    /* renamed from: p  reason: collision with root package name */
    private static final Object f3948p = new Object();

    /* renamed from: q  reason: collision with root package name */
    private static volatile e f3949q;

    /* renamed from: b  reason: collision with root package name */
    private final Set f3951b;

    /* renamed from: e  reason: collision with root package name */
    private final b f3954e;

    /* renamed from: f  reason: collision with root package name */
    final h f3955f;

    /* renamed from: g  reason: collision with root package name */
    private final j f3956g;

    /* renamed from: h  reason: collision with root package name */
    final boolean f3957h;

    /* renamed from: i  reason: collision with root package name */
    final boolean f3958i;

    /* renamed from: j  reason: collision with root package name */
    final int[] f3959j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f3960k;

    /* renamed from: l  reason: collision with root package name */
    private final int f3961l;

    /* renamed from: m  reason: collision with root package name */
    private final int f3962m;

    /* renamed from: n  reason: collision with root package name */
    private final InterfaceC0051e f3963n;

    /* renamed from: a  reason: collision with root package name */
    private final ReadWriteLock f3950a = new ReentrantReadWriteLock();

    /* renamed from: c  reason: collision with root package name */
    private volatile int f3952c = 3;

    /* renamed from: d  reason: collision with root package name */
    private final Handler f3953d = new Handler(Looper.getMainLooper());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a extends b {

        /* renamed from: b  reason: collision with root package name */
        private volatile androidx.emoji2.text.h f3964b;

        /* renamed from: c  reason: collision with root package name */
        private volatile m f3965c;

        /* renamed from: androidx.emoji2.text.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class C0050a extends i {
            C0050a() {
            }

            @Override // androidx.emoji2.text.e.i
            public void a(Throwable th2) {
                a.this.f3967a.n(th2);
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
                this.f3967a.f3955f.a(new C0050a());
            } catch (Throwable th2) {
                this.f3967a.n(th2);
            }
        }

        @Override // androidx.emoji2.text.e.b
        CharSequence b(CharSequence charSequence, int i10, int i11, int i12, boolean z10) {
            return this.f3964b.h(charSequence, i10, i11, i12, z10);
        }

        @Override // androidx.emoji2.text.e.b
        void c(EditorInfo editorInfo) {
            editorInfo.extras.putInt("android.support.text.emoji.emojiCompat_metadataVersion", this.f3965c.e());
            editorInfo.extras.putBoolean("android.support.text.emoji.emojiCompat_replaceAll", this.f3967a.f3957h);
        }

        void d(m mVar) {
            if (mVar == null) {
                this.f3967a.n(new IllegalArgumentException("metadataRepo cannot be null"));
                return;
            }
            this.f3965c = mVar;
            m mVar2 = this.f3965c;
            j jVar = this.f3967a.f3956g;
            InterfaceC0051e interfaceC0051e = this.f3967a.f3963n;
            e eVar = this.f3967a;
            this.f3964b = new androidx.emoji2.text.h(mVar2, jVar, interfaceC0051e, eVar.f3958i, eVar.f3959j, androidx.emoji2.text.g.a());
            this.f3967a.o();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        final e f3967a;

        b(e eVar) {
            this.f3967a = eVar;
        }

        abstract void a();

        abstract CharSequence b(CharSequence charSequence, int i10, int i11, int i12, boolean z10);

        abstract void c(EditorInfo editorInfo);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class c {

        /* renamed from: a  reason: collision with root package name */
        final h f3968a;

        /* renamed from: b  reason: collision with root package name */
        j f3969b;

        /* renamed from: c  reason: collision with root package name */
        boolean f3970c;

        /* renamed from: d  reason: collision with root package name */
        boolean f3971d;

        /* renamed from: e  reason: collision with root package name */
        int[] f3972e;

        /* renamed from: f  reason: collision with root package name */
        Set f3973f;

        /* renamed from: g  reason: collision with root package name */
        boolean f3974g;

        /* renamed from: h  reason: collision with root package name */
        int f3975h = -16711936;

        /* renamed from: i  reason: collision with root package name */
        int f3976i = 0;

        /* renamed from: j  reason: collision with root package name */
        InterfaceC0051e f3977j = new androidx.emoji2.text.d();

        /* JADX INFO: Access modifiers changed from: protected */
        public c(h hVar) {
            b2.e.h(hVar, "metadataLoader cannot be null.");
            this.f3968a = hVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public final h a() {
            return this.f3968a;
        }

        public c b(int i10) {
            this.f3976i = i10;
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
    public interface InterfaceC0051e {
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
        private final List f3978d;

        /* renamed from: e  reason: collision with root package name */
        private final Throwable f3979e;

        /* renamed from: i  reason: collision with root package name */
        private final int f3980i;

        g(f fVar, int i10) {
            this(Arrays.asList((f) b2.e.h(fVar, "initCallback cannot be null")), i10, null);
        }

        @Override // java.lang.Runnable
        public void run() {
            int size = this.f3978d.size();
            int i10 = 0;
            if (this.f3980i != 1) {
                while (i10 < size) {
                    ((f) this.f3978d.get(i10)).a(this.f3979e);
                    i10++;
                }
                return;
            }
            while (i10 < size) {
                ((f) this.f3978d.get(i10)).b();
                i10++;
            }
        }

        g(Collection collection, int i10) {
            this(collection, i10, null);
        }

        g(Collection collection, int i10, Throwable th2) {
            b2.e.h(collection, "initCallbacks cannot be null");
            this.f3978d = new ArrayList(collection);
            this.f3980i = i10;
            this.f3979e = th2;
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
        this.f3957h = cVar.f3970c;
        this.f3958i = cVar.f3971d;
        this.f3959j = cVar.f3972e;
        this.f3960k = cVar.f3974g;
        this.f3961l = cVar.f3975h;
        this.f3955f = cVar.f3968a;
        this.f3962m = cVar.f3976i;
        this.f3963n = cVar.f3977j;
        u0.b bVar = new u0.b();
        this.f3951b = bVar;
        j jVar = cVar.f3969b;
        this.f3956g = jVar == null ? new d() : jVar;
        Set set = cVar.f3973f;
        if (set != null && !set.isEmpty()) {
            bVar.addAll(cVar.f3973f);
        }
        this.f3954e = new a(this);
        m();
    }

    public static e c() {
        e eVar;
        boolean z10;
        synchronized (f3947o) {
            eVar = f3949q;
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
        e eVar2 = f3949q;
        if (eVar2 == null) {
            synchronized (f3947o) {
                try {
                    eVar = f3949q;
                    if (eVar == null) {
                        eVar = new e(cVar);
                        f3949q = eVar;
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
        if (f3949q != null) {
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
        this.f3950a.writeLock().lock();
        try {
            if (this.f3962m == 0) {
                this.f3952c = 0;
            }
            this.f3950a.writeLock().unlock();
            if (e() == 0) {
                this.f3954e.a();
            }
        } catch (Throwable th2) {
            this.f3950a.writeLock().unlock();
            throw th2;
        }
    }

    public int d() {
        return this.f3961l;
    }

    public int e() {
        this.f3950a.readLock().lock();
        try {
            return this.f3952c;
        } finally {
            this.f3950a.readLock().unlock();
        }
    }

    public boolean j() {
        return this.f3960k;
    }

    public void l() {
        boolean z10 = true;
        if (this.f3962m != 1) {
            z10 = false;
        }
        b2.e.j(z10, "Set metadataLoadStrategy to LOAD_STRATEGY_MANUAL to execute manual loading");
        if (k()) {
            return;
        }
        this.f3950a.writeLock().lock();
        try {
            if (this.f3952c == 0) {
                return;
            }
            this.f3952c = 0;
            this.f3950a.writeLock().unlock();
            this.f3954e.a();
        } finally {
            this.f3950a.writeLock().unlock();
        }
    }

    void n(Throwable th2) {
        ArrayList arrayList = new ArrayList();
        this.f3950a.writeLock().lock();
        try {
            this.f3952c = 2;
            arrayList.addAll(this.f3951b);
            this.f3951b.clear();
            this.f3950a.writeLock().unlock();
            this.f3953d.post(new g(arrayList, this.f3952c, th2));
        } catch (Throwable th3) {
            this.f3950a.writeLock().unlock();
            throw th3;
        }
    }

    void o() {
        ArrayList arrayList = new ArrayList();
        this.f3950a.writeLock().lock();
        try {
            this.f3952c = 1;
            arrayList.addAll(this.f3951b);
            this.f3951b.clear();
            this.f3950a.writeLock().unlock();
            this.f3953d.post(new g(arrayList, this.f3952c));
        } catch (Throwable th2) {
            this.f3950a.writeLock().unlock();
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
                z14 = this.f3957h;
            }
            z13 = z14;
        } else {
            z13 = true;
        }
        return this.f3954e.b(charSequence, i10, i11, i12, z13);
    }

    public void t(f fVar) {
        b2.e.h(fVar, "initCallback cannot be null");
        this.f3950a.writeLock().lock();
        try {
            if (this.f3952c != 1 && this.f3952c != 2) {
                this.f3951b.add(fVar);
                this.f3950a.writeLock().unlock();
            }
            this.f3953d.post(new g(fVar, this.f3952c));
            this.f3950a.writeLock().unlock();
        } catch (Throwable th2) {
            this.f3950a.writeLock().unlock();
            throw th2;
        }
    }

    public void u(f fVar) {
        b2.e.h(fVar, "initCallback cannot be null");
        this.f3950a.writeLock().lock();
        try {
            this.f3951b.remove(fVar);
        } finally {
            this.f3950a.writeLock().unlock();
        }
    }

    public void v(EditorInfo editorInfo) {
        if (k() && editorInfo != null) {
            if (editorInfo.extras == null) {
                editorInfo.extras = new Bundle();
            }
            this.f3954e.c(editorInfo);
        }
    }
}
