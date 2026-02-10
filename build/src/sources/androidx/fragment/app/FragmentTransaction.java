package androidx.fragment.app;

import android.view.ViewGroup;
import androidx.lifecycle.Lifecycle;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class FragmentTransaction {

    /* renamed from: a  reason: collision with root package name */
    private final u f4295a;

    /* renamed from: b  reason: collision with root package name */
    private final ClassLoader f4296b;

    /* renamed from: d  reason: collision with root package name */
    int f4298d;

    /* renamed from: e  reason: collision with root package name */
    int f4299e;

    /* renamed from: f  reason: collision with root package name */
    int f4300f;

    /* renamed from: g  reason: collision with root package name */
    int f4301g;

    /* renamed from: h  reason: collision with root package name */
    int f4302h;

    /* renamed from: i  reason: collision with root package name */
    boolean f4303i;

    /* renamed from: k  reason: collision with root package name */
    String f4305k;

    /* renamed from: l  reason: collision with root package name */
    int f4306l;

    /* renamed from: m  reason: collision with root package name */
    CharSequence f4307m;

    /* renamed from: n  reason: collision with root package name */
    int f4308n;

    /* renamed from: o  reason: collision with root package name */
    CharSequence f4309o;

    /* renamed from: p  reason: collision with root package name */
    ArrayList f4310p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4311q;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4313s;

    /* renamed from: c  reason: collision with root package name */
    ArrayList f4297c = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    boolean f4304j = true;

    /* renamed from: r  reason: collision with root package name */
    boolean f4312r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        int f4314a;

        /* renamed from: b  reason: collision with root package name */
        Fragment f4315b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4316c;

        /* renamed from: d  reason: collision with root package name */
        int f4317d;

        /* renamed from: e  reason: collision with root package name */
        int f4318e;

        /* renamed from: f  reason: collision with root package name */
        int f4319f;

        /* renamed from: g  reason: collision with root package name */
        int f4320g;

        /* renamed from: h  reason: collision with root package name */
        Lifecycle.State f4321h;

        /* renamed from: i  reason: collision with root package name */
        Lifecycle.State f4322i;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(int i10, Fragment fragment) {
            this.f4314a = i10;
            this.f4315b = fragment;
            this.f4316c = false;
            Lifecycle.State state = Lifecycle.State.f4557p;
            this.f4321h = state;
            this.f4322i = state;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(int i10, Fragment fragment, boolean z10) {
            this.f4314a = i10;
            this.f4315b = fragment;
            this.f4316c = z10;
            Lifecycle.State state = Lifecycle.State.f4557p;
            this.f4321h = state;
            this.f4322i = state;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FragmentTransaction(u uVar, ClassLoader classLoader) {
        this.f4295a = uVar;
        this.f4296b = classLoader;
    }

    public FragmentTransaction b(int i10, Fragment fragment) {
        m(i10, fragment, null, 1);
        return this;
    }

    public FragmentTransaction c(int i10, Fragment fragment, String str) {
        m(i10, fragment, str, 1);
        return this;
    }

    public final FragmentTransaction d(ViewGroup viewGroup, Fragment fragment, String str) {
        fragment.mContainer = viewGroup;
        fragment.mInDynamicContainer = true;
        return c(viewGroup.getId(), fragment, str);
    }

    public FragmentTransaction e(Fragment fragment, String str) {
        m(0, fragment, str, 1);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(a aVar) {
        this.f4297c.add(aVar);
        aVar.f4317d = this.f4298d;
        aVar.f4318e = this.f4299e;
        aVar.f4319f = this.f4300f;
        aVar.f4320g = this.f4301g;
    }

    public FragmentTransaction g(String str) {
        if (this.f4304j) {
            this.f4303i = true;
            this.f4305k = str;
            return this;
        }
        throw new IllegalStateException("This FragmentTransaction is not allowed to be added to the back stack.");
    }

    public abstract int h();

    public abstract int i();

    public abstract void j();

    public abstract void k();

    public FragmentTransaction l() {
        if (!this.f4303i) {
            this.f4304j = false;
            return this;
        }
        throw new IllegalStateException("This transaction is already being added to the back stack");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(int i10, Fragment fragment, String str, int i11) {
        String str2 = fragment.mPreviousWho;
        if (str2 != null) {
            g3.c.f(fragment, str2);
        }
        Class<?> cls = fragment.getClass();
        int modifiers = cls.getModifiers();
        if (!cls.isAnonymousClass() && Modifier.isPublic(modifiers) && (!cls.isMemberClass() || Modifier.isStatic(modifiers))) {
            if (str != null) {
                String str3 = fragment.mTag;
                if (str3 != null && !str.equals(str3)) {
                    throw new IllegalStateException("Can't change tag of fragment " + fragment + ": was " + fragment.mTag + " now " + str);
                }
                fragment.mTag = str;
            }
            if (i10 != 0) {
                if (i10 != -1) {
                    int i12 = fragment.mFragmentId;
                    if (i12 != 0 && i12 != i10) {
                        throw new IllegalStateException("Can't change container ID of fragment " + fragment + ": was " + fragment.mFragmentId + " now " + i10);
                    }
                    fragment.mFragmentId = i10;
                    fragment.mContainerId = i10;
                } else {
                    throw new IllegalArgumentException("Can't add fragment " + fragment + " with tag " + str + " to container view with no id");
                }
            }
            f(new a(i11, fragment));
            return;
        }
        throw new IllegalStateException("Fragment " + cls.getCanonicalName() + " must be a public static class to be  properly recreated from instance state.");
    }

    public FragmentTransaction n(Fragment fragment) {
        f(new a(3, fragment));
        return this;
    }

    public FragmentTransaction o(int i10, Fragment fragment) {
        return p(i10, fragment, null);
    }

    public FragmentTransaction p(int i10, Fragment fragment, String str) {
        if (i10 != 0) {
            m(i10, fragment, str, 2);
            return this;
        }
        throw new IllegalArgumentException("Must use non-zero containerViewId");
    }

    public FragmentTransaction q(Runnable runnable) {
        return r(false, runnable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FragmentTransaction r(boolean z10, Runnable runnable) {
        if (!z10) {
            l();
        }
        if (this.f4313s == null) {
            this.f4313s = new ArrayList();
        }
        this.f4313s.add(runnable);
        return this;
    }

    public FragmentTransaction s(int i10, int i11) {
        return t(i10, i11, 0, 0);
    }

    public FragmentTransaction t(int i10, int i11, int i12, int i13) {
        this.f4298d = i10;
        this.f4299e = i11;
        this.f4300f = i12;
        this.f4301g = i13;
        return this;
    }

    public FragmentTransaction u(Fragment fragment) {
        f(new a(8, fragment));
        return this;
    }

    public FragmentTransaction v(boolean z10) {
        this.f4312r = z10;
        return this;
    }
}
