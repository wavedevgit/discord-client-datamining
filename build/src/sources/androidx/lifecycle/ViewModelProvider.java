package androidx.lifecycle;

import android.app.Application;
import androidx.lifecycle.viewmodel.CreationExtras;
import java.lang.reflect.InvocationTargetException;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ViewModelProvider {

    /* renamed from: b  reason: collision with root package name */
    public static final b f4444b = new b(null);

    /* renamed from: c  reason: collision with root package name */
    public static final CreationExtras.c f4445c;

    /* renamed from: a  reason: collision with root package name */
    private final androidx.lifecycle.viewmodel.b f4446a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface Factory {

        /* renamed from: a  reason: collision with root package name */
        public static final a f4447a = a.f4448a;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            static final /* synthetic */ a f4448a = new a();

            private a() {
            }
        }

        default n0 a(Class modelClass, CreationExtras extras) {
            Intrinsics.checkNotNullParameter(modelClass, "modelClass");
            Intrinsics.checkNotNullParameter(extras, "extras");
            return c(modelClass);
        }

        default n0 b(KClass modelClass, CreationExtras extras) {
            Intrinsics.checkNotNullParameter(modelClass, "modelClass");
            Intrinsics.checkNotNullParameter(extras, "extras");
            return a(vr.a.b(modelClass), extras);
        }

        default n0 c(Class modelClass) {
            Intrinsics.checkNotNullParameter(modelClass, "modelClass");
            return m3.h.f37825a.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ ViewModelProvider c(b bVar, q0 q0Var, Factory factory, CreationExtras creationExtras, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                factory = m3.h.f37825a.b(q0Var);
            }
            if ((i10 & 4) != 0) {
                creationExtras = m3.h.f37825a.a(q0Var);
            }
            return bVar.b(q0Var, factory, creationExtras);
        }

        public final ViewModelProvider a(ViewModelStore store, Factory factory, CreationExtras extras) {
            Intrinsics.checkNotNullParameter(store, "store");
            Intrinsics.checkNotNullParameter(factory, "factory");
            Intrinsics.checkNotNullParameter(extras, "extras");
            return new ViewModelProvider(store, factory, extras);
        }

        public final ViewModelProvider b(q0 owner, Factory factory, CreationExtras extras) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            Intrinsics.checkNotNullParameter(factory, "factory");
            Intrinsics.checkNotNullParameter(extras, "extras");
            return new ViewModelProvider(owner.getViewModelStore(), factory, extras);
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c implements Factory {

        /* renamed from: c  reason: collision with root package name */
        private static c f4454c;

        /* renamed from: b  reason: collision with root package name */
        public static final a f4453b = new a(null);

        /* renamed from: d  reason: collision with root package name */
        public static final CreationExtras.c f4455d = ViewModelProvider.f4445c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final c a() {
                if (c.f4454c == null) {
                    c.f4454c = new c();
                }
                c cVar = c.f4454c;
                Intrinsics.checkNotNull(cVar);
                return cVar;
            }

            private a() {
            }
        }

        @Override // androidx.lifecycle.ViewModelProvider.Factory
        public n0 a(Class modelClass, CreationExtras extras) {
            Intrinsics.checkNotNullParameter(modelClass, "modelClass");
            Intrinsics.checkNotNullParameter(extras, "extras");
            return c(modelClass);
        }

        @Override // androidx.lifecycle.ViewModelProvider.Factory
        public n0 b(KClass modelClass, CreationExtras extras) {
            Intrinsics.checkNotNullParameter(modelClass, "modelClass");
            Intrinsics.checkNotNullParameter(extras, "extras");
            return a(vr.a.b(modelClass), extras);
        }

        @Override // androidx.lifecycle.ViewModelProvider.Factory
        public n0 c(Class modelClass) {
            Intrinsics.checkNotNullParameter(modelClass, "modelClass");
            return m3.e.f37820a.a(modelClass);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {
        public abstract void d(n0 n0Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e implements CreationExtras.c {
    }

    static {
        CreationExtras.a aVar = CreationExtras.f4529b;
        f4445c = new e();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ViewModelProvider(ViewModelStore store, Factory factory) {
        this(store, factory, null, 4, null);
        Intrinsics.checkNotNullParameter(store, "store");
        Intrinsics.checkNotNullParameter(factory, "factory");
    }

    public n0 a(Class modelClass) {
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        return c(vr.a.e(modelClass));
    }

    public final n0 b(String key, KClass modelClass) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        return this.f4446a.d(modelClass, key);
    }

    public final n0 c(KClass modelClass) {
        Intrinsics.checkNotNullParameter(modelClass, "modelClass");
        return androidx.lifecycle.viewmodel.b.e(this.f4446a, modelClass, null, 2, null);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends c {

        /* renamed from: f  reason: collision with root package name */
        public static final C0055a f4449f = new C0055a(null);

        /* renamed from: g  reason: collision with root package name */
        private static a f4450g;

        /* renamed from: h  reason: collision with root package name */
        public static final CreationExtras.c f4451h;

        /* renamed from: e  reason: collision with root package name */
        private final Application f4452e;

        /* renamed from: androidx.lifecycle.ViewModelProvider$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0055a {
            public /* synthetic */ C0055a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final a a(Application application) {
                Intrinsics.checkNotNullParameter(application, "application");
                if (a.f4450g == null) {
                    a.f4450g = new a(application);
                }
                a aVar = a.f4450g;
                Intrinsics.checkNotNull(aVar);
                return aVar;
            }

            private C0055a() {
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b implements CreationExtras.c {
        }

        static {
            CreationExtras.a aVar = CreationExtras.f4529b;
            f4451h = new b();
        }

        private a(Application application, int i10) {
            this.f4452e = application;
        }

        private final n0 h(Class cls, Application application) {
            if (androidx.lifecycle.a.class.isAssignableFrom(cls)) {
                try {
                    n0 n0Var = (n0) cls.getConstructor(Application.class).newInstance(application);
                    Intrinsics.checkNotNull(n0Var);
                    return n0Var;
                } catch (IllegalAccessException e10) {
                    throw new RuntimeException("Cannot create an instance of " + cls, e10);
                } catch (InstantiationException e11) {
                    throw new RuntimeException("Cannot create an instance of " + cls, e11);
                } catch (NoSuchMethodException e12) {
                    throw new RuntimeException("Cannot create an instance of " + cls, e12);
                } catch (InvocationTargetException e13) {
                    throw new RuntimeException("Cannot create an instance of " + cls, e13);
                }
            }
            return super.c(cls);
        }

        @Override // androidx.lifecycle.ViewModelProvider.c, androidx.lifecycle.ViewModelProvider.Factory
        public n0 a(Class modelClass, CreationExtras extras) {
            Intrinsics.checkNotNullParameter(modelClass, "modelClass");
            Intrinsics.checkNotNullParameter(extras, "extras");
            if (this.f4452e != null) {
                return c(modelClass);
            }
            Application application = (Application) extras.a(f4451h);
            if (application != null) {
                return h(modelClass, application);
            }
            if (!androidx.lifecycle.a.class.isAssignableFrom(modelClass)) {
                return super.c(modelClass);
            }
            throw new IllegalArgumentException("CreationExtras must have an application by `APPLICATION_KEY`");
        }

        @Override // androidx.lifecycle.ViewModelProvider.c, androidx.lifecycle.ViewModelProvider.Factory
        public n0 c(Class modelClass) {
            Intrinsics.checkNotNullParameter(modelClass, "modelClass");
            Application application = this.f4452e;
            if (application != null) {
                return h(modelClass, application);
            }
            throw new UnsupportedOperationException("AndroidViewModelFactory constructed with empty constructor works only with create(modelClass: Class<T>, extras: CreationExtras).");
        }

        public a() {
            this(null, 0);
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public a(Application application) {
            this(application, 0);
            Intrinsics.checkNotNullParameter(application, "application");
        }
    }

    private ViewModelProvider(androidx.lifecycle.viewmodel.b bVar) {
        this.f4446a = bVar;
    }

    public /* synthetic */ ViewModelProvider(ViewModelStore viewModelStore, Factory factory, CreationExtras creationExtras, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(viewModelStore, factory, (i10 & 4) != 0 ? CreationExtras.b.f4531c : creationExtras);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ViewModelProvider(ViewModelStore store, Factory factory, CreationExtras defaultCreationExtras) {
        this(new androidx.lifecycle.viewmodel.b(store, factory, defaultCreationExtras));
        Intrinsics.checkNotNullParameter(store, "store");
        Intrinsics.checkNotNullParameter(factory, "factory");
        Intrinsics.checkNotNullParameter(defaultCreationExtras, "defaultCreationExtras");
    }
}
