package androidx.loader.app;

import android.os.Bundle;
import android.os.Looper;
import android.util.Log;
import androidx.collection.SparseArrayCompat;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStore;
import androidx.lifecycle.n0;
import androidx.loader.app.LoaderManager;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.lang.reflect.Modifier;
import n3.b;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends LoaderManager {

    /* renamed from: c  reason: collision with root package name */
    static boolean f5024c = false;

    /* renamed from: a  reason: collision with root package name */
    private final LifecycleOwner f5025a;

    /* renamed from: b  reason: collision with root package name */
    private final c f5026b;

    /* renamed from: androidx.loader.app.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0061a extends MutableLiveData implements b.a {

        /* renamed from: l  reason: collision with root package name */
        private final int f5027l;

        /* renamed from: m  reason: collision with root package name */
        private final Bundle f5028m;

        /* renamed from: n  reason: collision with root package name */
        private final n3.b f5029n;

        /* renamed from: o  reason: collision with root package name */
        private LifecycleOwner f5030o;

        /* renamed from: p  reason: collision with root package name */
        private b f5031p;

        /* renamed from: q  reason: collision with root package name */
        private n3.b f5032q;

        C0061a(int i10, Bundle bundle, n3.b bVar, n3.b bVar2) {
            this.f5027l = i10;
            this.f5028m = bundle;
            this.f5029n = bVar;
            this.f5032q = bVar2;
            bVar.r(i10, this);
        }

        @Override // n3.b.a
        public void a(n3.b bVar, Object obj) {
            if (a.f5024c) {
                Log.v("LoaderManager", "onLoadComplete: " + this);
            }
            if (Looper.myLooper() == Looper.getMainLooper()) {
                o(obj);
                return;
            }
            if (a.f5024c) {
                Log.w("LoaderManager", "onLoadComplete was incorrectly called on a background thread");
            }
            m(obj);
        }

        @Override // androidx.lifecycle.LiveData
        protected void k() {
            if (a.f5024c) {
                Log.v("LoaderManager", "  Starting: " + this);
            }
            this.f5029n.u();
        }

        @Override // androidx.lifecycle.LiveData
        protected void l() {
            if (a.f5024c) {
                Log.v("LoaderManager", "  Stopping: " + this);
            }
            this.f5029n.v();
        }

        @Override // androidx.lifecycle.LiveData
        public void n(Observer observer) {
            super.n(observer);
            this.f5030o = null;
            this.f5031p = null;
        }

        @Override // androidx.lifecycle.MutableLiveData, androidx.lifecycle.LiveData
        public void o(Object obj) {
            super.o(obj);
            n3.b bVar = this.f5032q;
            if (bVar != null) {
                bVar.s();
                this.f5032q = null;
            }
        }

        n3.b p(boolean z10) {
            if (a.f5024c) {
                Log.v("LoaderManager", "  Destroying: " + this);
            }
            this.f5029n.b();
            this.f5029n.a();
            b bVar = this.f5031p;
            if (bVar != null) {
                n(bVar);
                if (z10) {
                    bVar.d();
                }
            }
            this.f5029n.w(this);
            if ((bVar != null && !bVar.c()) || z10) {
                this.f5029n.s();
                return this.f5032q;
            }
            return this.f5029n;
        }

        public void q(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
            printWriter.print(str);
            printWriter.print("mId=");
            printWriter.print(this.f5027l);
            printWriter.print(" mArgs=");
            printWriter.println(this.f5028m);
            printWriter.print(str);
            printWriter.print("mLoader=");
            printWriter.println(this.f5029n);
            n3.b bVar = this.f5029n;
            bVar.g(str + "  ", fileDescriptor, printWriter, strArr);
            if (this.f5031p != null) {
                printWriter.print(str);
                printWriter.print("mCallbacks=");
                printWriter.println(this.f5031p);
                b bVar2 = this.f5031p;
                bVar2.b(str + "  ", printWriter);
            }
            printWriter.print(str);
            printWriter.print("mData=");
            printWriter.println(r().d(f()));
            printWriter.print(str);
            printWriter.print("mStarted=");
            printWriter.println(h());
        }

        n3.b r() {
            return this.f5029n;
        }

        void s() {
            LifecycleOwner lifecycleOwner = this.f5030o;
            b bVar = this.f5031p;
            if (lifecycleOwner != null && bVar != null) {
                super.n(bVar);
                i(lifecycleOwner, bVar);
            }
        }

        n3.b t(LifecycleOwner lifecycleOwner, LoaderManager.a aVar) {
            b bVar = new b(this.f5029n, aVar);
            i(lifecycleOwner, bVar);
            Observer observer = this.f5031p;
            if (observer != null) {
                n(observer);
            }
            this.f5030o = lifecycleOwner;
            this.f5031p = bVar;
            return this.f5029n;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder(64);
            sb2.append("LoaderInfo{");
            sb2.append(Integer.toHexString(System.identityHashCode(this)));
            sb2.append(" #");
            sb2.append(this.f5027l);
            sb2.append(" : ");
            Class<?> cls = this.f5029n.getClass();
            sb2.append(cls.getSimpleName());
            sb2.append("{");
            sb2.append(Integer.toHexString(System.identityHashCode(cls)));
            sb2.append("}}");
            return sb2.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements Observer {

        /* renamed from: a  reason: collision with root package name */
        private final n3.b f5033a;

        /* renamed from: b  reason: collision with root package name */
        private final LoaderManager.a f5034b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f5035c = false;

        b(n3.b bVar, LoaderManager.a aVar) {
            this.f5033a = bVar;
            this.f5034b = aVar;
        }

        @Override // androidx.lifecycle.Observer
        public void a(Object obj) {
            if (a.f5024c) {
                Log.v("LoaderManager", "  onLoadFinished in " + this.f5033a + ": " + this.f5033a.d(obj));
            }
            this.f5035c = true;
            this.f5034b.b(this.f5033a, obj);
        }

        public void b(String str, PrintWriter printWriter) {
            printWriter.print(str);
            printWriter.print("mDeliveredData=");
            printWriter.println(this.f5035c);
        }

        boolean c() {
            return this.f5035c;
        }

        void d() {
            if (this.f5035c) {
                if (a.f5024c) {
                    Log.v("LoaderManager", "  Resetting: " + this.f5033a);
                }
                this.f5034b.a(this.f5033a);
            }
        }

        public String toString() {
            return this.f5034b.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends n0 {

        /* renamed from: d  reason: collision with root package name */
        private static final ViewModelProvider.Factory f5036d = new C0062a();

        /* renamed from: b  reason: collision with root package name */
        private SparseArrayCompat f5037b = new SparseArrayCompat();

        /* renamed from: c  reason: collision with root package name */
        private boolean f5038c = false;

        /* renamed from: androidx.loader.app.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class C0062a implements ViewModelProvider.Factory {
            C0062a() {
            }

            @Override // androidx.lifecycle.ViewModelProvider.Factory
            public n0 c(Class cls) {
                return new c();
            }
        }

        c() {
        }

        static c g(ViewModelStore viewModelStore) {
            return (c) new ViewModelProvider(viewModelStore, f5036d).a(c.class);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.lifecycle.n0
        public void d() {
            super.d();
            int l10 = this.f5037b.l();
            for (int i10 = 0; i10 < l10; i10++) {
                ((C0061a) this.f5037b.m(i10)).p(true);
            }
            this.f5037b.b();
        }

        public void e(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
            if (this.f5037b.l() > 0) {
                printWriter.print(str);
                printWriter.println("Loaders:");
                String str2 = str + "    ";
                for (int i10 = 0; i10 < this.f5037b.l(); i10++) {
                    C0061a c0061a = (C0061a) this.f5037b.m(i10);
                    printWriter.print(str);
                    printWriter.print("  #");
                    printWriter.print(this.f5037b.j(i10));
                    printWriter.print(": ");
                    printWriter.println(c0061a.toString());
                    c0061a.q(str2, fileDescriptor, printWriter, strArr);
                }
            }
        }

        void f() {
            this.f5038c = false;
        }

        C0061a h(int i10) {
            return (C0061a) this.f5037b.e(i10);
        }

        boolean i() {
            return this.f5038c;
        }

        void j() {
            int l10 = this.f5037b.l();
            for (int i10 = 0; i10 < l10; i10++) {
                ((C0061a) this.f5037b.m(i10)).s();
            }
        }

        void k(int i10, C0061a c0061a) {
            this.f5037b.k(i10, c0061a);
        }

        void l() {
            this.f5038c = true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(LifecycleOwner lifecycleOwner, ViewModelStore viewModelStore) {
        this.f5025a = lifecycleOwner;
        this.f5026b = c.g(viewModelStore);
    }

    private n3.b e(int i10, Bundle bundle, LoaderManager.a aVar, n3.b bVar) {
        try {
            this.f5026b.l();
            n3.b c10 = aVar.c(i10, bundle);
            if (c10 != null) {
                if (c10.getClass().isMemberClass() && !Modifier.isStatic(c10.getClass().getModifiers())) {
                    throw new IllegalArgumentException("Object returned from onCreateLoader must not be a non-static inner member class: " + c10);
                }
                C0061a c0061a = new C0061a(i10, bundle, c10, bVar);
                if (f5024c) {
                    Log.v("LoaderManager", "  Created new loader " + c0061a);
                }
                this.f5026b.k(i10, c0061a);
                this.f5026b.f();
                return c0061a.t(this.f5025a, aVar);
            }
            throw new IllegalArgumentException("Object returned from onCreateLoader must not be null");
        } catch (Throwable th2) {
            this.f5026b.f();
            throw th2;
        }
    }

    @Override // androidx.loader.app.LoaderManager
    public void a(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        this.f5026b.e(str, fileDescriptor, printWriter, strArr);
    }

    @Override // androidx.loader.app.LoaderManager
    public n3.b c(int i10, Bundle bundle, LoaderManager.a aVar) {
        if (!this.f5026b.i()) {
            if (Looper.getMainLooper() == Looper.myLooper()) {
                C0061a h10 = this.f5026b.h(i10);
                if (f5024c) {
                    Log.v("LoaderManager", "initLoader in " + this + ": args=" + bundle);
                }
                if (h10 == null) {
                    return e(i10, bundle, aVar, null);
                }
                if (f5024c) {
                    Log.v("LoaderManager", "  Re-using existing loader " + h10);
                }
                return h10.t(this.f5025a, aVar);
            }
            throw new IllegalStateException("initLoader must be called on the main thread");
        }
        throw new IllegalStateException("Called while creating a loader");
    }

    @Override // androidx.loader.app.LoaderManager
    public void d() {
        this.f5026b.j();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("LoaderManager{");
        sb2.append(Integer.toHexString(System.identityHashCode(this)));
        sb2.append(" in ");
        Class<?> cls = this.f5025a.getClass();
        sb2.append(cls.getSimpleName());
        sb2.append("{");
        sb2.append(Integer.toHexString(System.identityHashCode(cls)));
        sb2.append("}}");
        return sb2.toString();
    }
}
