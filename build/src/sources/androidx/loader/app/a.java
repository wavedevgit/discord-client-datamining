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
    static boolean f4583c = false;

    /* renamed from: a  reason: collision with root package name */
    private final LifecycleOwner f4584a;

    /* renamed from: b  reason: collision with root package name */
    private final c f4585b;

    /* renamed from: androidx.loader.app.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0062a extends MutableLiveData implements b.a {

        /* renamed from: l  reason: collision with root package name */
        private final int f4586l;

        /* renamed from: m  reason: collision with root package name */
        private final Bundle f4587m;

        /* renamed from: n  reason: collision with root package name */
        private final n3.b f4588n;

        /* renamed from: o  reason: collision with root package name */
        private LifecycleOwner f4589o;

        /* renamed from: p  reason: collision with root package name */
        private b f4590p;

        /* renamed from: q  reason: collision with root package name */
        private n3.b f4591q;

        C0062a(int i10, Bundle bundle, n3.b bVar, n3.b bVar2) {
            this.f4586l = i10;
            this.f4587m = bundle;
            this.f4588n = bVar;
            this.f4591q = bVar2;
            bVar.r(i10, this);
        }

        @Override // n3.b.a
        public void a(n3.b bVar, Object obj) {
            if (a.f4583c) {
                Log.v("LoaderManager", "onLoadComplete: " + this);
            }
            if (Looper.myLooper() == Looper.getMainLooper()) {
                o(obj);
                return;
            }
            if (a.f4583c) {
                Log.w("LoaderManager", "onLoadComplete was incorrectly called on a background thread");
            }
            m(obj);
        }

        @Override // androidx.lifecycle.LiveData
        protected void k() {
            if (a.f4583c) {
                Log.v("LoaderManager", "  Starting: " + this);
            }
            this.f4588n.u();
        }

        @Override // androidx.lifecycle.LiveData
        protected void l() {
            if (a.f4583c) {
                Log.v("LoaderManager", "  Stopping: " + this);
            }
            this.f4588n.v();
        }

        @Override // androidx.lifecycle.LiveData
        public void n(Observer observer) {
            super.n(observer);
            this.f4589o = null;
            this.f4590p = null;
        }

        @Override // androidx.lifecycle.MutableLiveData, androidx.lifecycle.LiveData
        public void o(Object obj) {
            super.o(obj);
            n3.b bVar = this.f4591q;
            if (bVar != null) {
                bVar.s();
                this.f4591q = null;
            }
        }

        n3.b p(boolean z10) {
            if (a.f4583c) {
                Log.v("LoaderManager", "  Destroying: " + this);
            }
            this.f4588n.b();
            this.f4588n.a();
            b bVar = this.f4590p;
            if (bVar != null) {
                n(bVar);
                if (z10) {
                    bVar.d();
                }
            }
            this.f4588n.w(this);
            if ((bVar != null && !bVar.c()) || z10) {
                this.f4588n.s();
                return this.f4591q;
            }
            return this.f4588n;
        }

        public void q(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
            printWriter.print(str);
            printWriter.print("mId=");
            printWriter.print(this.f4586l);
            printWriter.print(" mArgs=");
            printWriter.println(this.f4587m);
            printWriter.print(str);
            printWriter.print("mLoader=");
            printWriter.println(this.f4588n);
            n3.b bVar = this.f4588n;
            bVar.g(str + "  ", fileDescriptor, printWriter, strArr);
            if (this.f4590p != null) {
                printWriter.print(str);
                printWriter.print("mCallbacks=");
                printWriter.println(this.f4590p);
                b bVar2 = this.f4590p;
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
            return this.f4588n;
        }

        void s() {
            LifecycleOwner lifecycleOwner = this.f4589o;
            b bVar = this.f4590p;
            if (lifecycleOwner != null && bVar != null) {
                super.n(bVar);
                i(lifecycleOwner, bVar);
            }
        }

        n3.b t(LifecycleOwner lifecycleOwner, LoaderManager.a aVar) {
            b bVar = new b(this.f4588n, aVar);
            i(lifecycleOwner, bVar);
            Observer observer = this.f4590p;
            if (observer != null) {
                n(observer);
            }
            this.f4589o = lifecycleOwner;
            this.f4590p = bVar;
            return this.f4588n;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder(64);
            sb2.append("LoaderInfo{");
            sb2.append(Integer.toHexString(System.identityHashCode(this)));
            sb2.append(" #");
            sb2.append(this.f4586l);
            sb2.append(" : ");
            Class<?> cls = this.f4588n.getClass();
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
        private final n3.b f4592a;

        /* renamed from: b  reason: collision with root package name */
        private final LoaderManager.a f4593b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f4594c = false;

        b(n3.b bVar, LoaderManager.a aVar) {
            this.f4592a = bVar;
            this.f4593b = aVar;
        }

        @Override // androidx.lifecycle.Observer
        public void a(Object obj) {
            if (a.f4583c) {
                Log.v("LoaderManager", "  onLoadFinished in " + this.f4592a + ": " + this.f4592a.d(obj));
            }
            this.f4594c = true;
            this.f4593b.b(this.f4592a, obj);
        }

        public void b(String str, PrintWriter printWriter) {
            printWriter.print(str);
            printWriter.print("mDeliveredData=");
            printWriter.println(this.f4594c);
        }

        boolean c() {
            return this.f4594c;
        }

        void d() {
            if (this.f4594c) {
                if (a.f4583c) {
                    Log.v("LoaderManager", "  Resetting: " + this.f4592a);
                }
                this.f4593b.a(this.f4592a);
            }
        }

        public String toString() {
            return this.f4593b.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends n0 {

        /* renamed from: d  reason: collision with root package name */
        private static final ViewModelProvider.Factory f4595d = new C0063a();

        /* renamed from: b  reason: collision with root package name */
        private SparseArrayCompat f4596b = new SparseArrayCompat();

        /* renamed from: c  reason: collision with root package name */
        private boolean f4597c = false;

        /* renamed from: androidx.loader.app.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static class C0063a implements ViewModelProvider.Factory {
            C0063a() {
            }

            @Override // androidx.lifecycle.ViewModelProvider.Factory
            public n0 c(Class cls) {
                return new c();
            }
        }

        c() {
        }

        static c g(ViewModelStore viewModelStore) {
            return (c) new ViewModelProvider(viewModelStore, f4595d).a(c.class);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // androidx.lifecycle.n0
        public void d() {
            super.d();
            int l10 = this.f4596b.l();
            for (int i10 = 0; i10 < l10; i10++) {
                ((C0062a) this.f4596b.m(i10)).p(true);
            }
            this.f4596b.b();
        }

        public void e(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
            if (this.f4596b.l() > 0) {
                printWriter.print(str);
                printWriter.println("Loaders:");
                String str2 = str + "    ";
                for (int i10 = 0; i10 < this.f4596b.l(); i10++) {
                    C0062a c0062a = (C0062a) this.f4596b.m(i10);
                    printWriter.print(str);
                    printWriter.print("  #");
                    printWriter.print(this.f4596b.j(i10));
                    printWriter.print(": ");
                    printWriter.println(c0062a.toString());
                    c0062a.q(str2, fileDescriptor, printWriter, strArr);
                }
            }
        }

        void f() {
            this.f4597c = false;
        }

        C0062a h(int i10) {
            return (C0062a) this.f4596b.e(i10);
        }

        boolean i() {
            return this.f4597c;
        }

        void j() {
            int l10 = this.f4596b.l();
            for (int i10 = 0; i10 < l10; i10++) {
                ((C0062a) this.f4596b.m(i10)).s();
            }
        }

        void k(int i10, C0062a c0062a) {
            this.f4596b.k(i10, c0062a);
        }

        void l() {
            this.f4597c = true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(LifecycleOwner lifecycleOwner, ViewModelStore viewModelStore) {
        this.f4584a = lifecycleOwner;
        this.f4585b = c.g(viewModelStore);
    }

    private n3.b e(int i10, Bundle bundle, LoaderManager.a aVar, n3.b bVar) {
        try {
            this.f4585b.l();
            n3.b c10 = aVar.c(i10, bundle);
            if (c10 != null) {
                if (c10.getClass().isMemberClass() && !Modifier.isStatic(c10.getClass().getModifiers())) {
                    throw new IllegalArgumentException("Object returned from onCreateLoader must not be a non-static inner member class: " + c10);
                }
                C0062a c0062a = new C0062a(i10, bundle, c10, bVar);
                if (f4583c) {
                    Log.v("LoaderManager", "  Created new loader " + c0062a);
                }
                this.f4585b.k(i10, c0062a);
                this.f4585b.f();
                return c0062a.t(this.f4584a, aVar);
            }
            throw new IllegalArgumentException("Object returned from onCreateLoader must not be null");
        } catch (Throwable th2) {
            this.f4585b.f();
            throw th2;
        }
    }

    @Override // androidx.loader.app.LoaderManager
    public void a(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        this.f4585b.e(str, fileDescriptor, printWriter, strArr);
    }

    @Override // androidx.loader.app.LoaderManager
    public n3.b c(int i10, Bundle bundle, LoaderManager.a aVar) {
        if (!this.f4585b.i()) {
            if (Looper.getMainLooper() == Looper.myLooper()) {
                C0062a h10 = this.f4585b.h(i10);
                if (f4583c) {
                    Log.v("LoaderManager", "initLoader in " + this + ": args=" + bundle);
                }
                if (h10 == null) {
                    return e(i10, bundle, aVar, null);
                }
                if (f4583c) {
                    Log.v("LoaderManager", "  Re-using existing loader " + h10);
                }
                return h10.t(this.f4584a, aVar);
            }
            throw new IllegalStateException("initLoader must be called on the main thread");
        }
        throw new IllegalStateException("Called while creating a loader");
    }

    @Override // androidx.loader.app.LoaderManager
    public void d() {
        this.f4585b.j();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("LoaderManager{");
        sb2.append(Integer.toHexString(System.identityHashCode(this)));
        sb2.append(" in ");
        Class<?> cls = this.f4584a.getClass();
        sb2.append(cls.getSimpleName());
        sb2.append("{");
        sb2.append(Integer.toHexString(System.identityHashCode(cls)));
        sb2.append("}}");
        return sb2.toString();
    }
}
