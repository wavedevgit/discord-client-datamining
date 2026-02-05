package androidx.fragment.app;

import android.view.ViewGroup;
import androidx.lifecycle.Lifecycle;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class FragmentTransaction {

    /* renamed from: a  reason: collision with root package name */
    private final u f4259a;

    /* renamed from: b  reason: collision with root package name */
    private final ClassLoader f4260b;

    /* renamed from: d  reason: collision with root package name */
    int f4262d;

    /* renamed from: e  reason: collision with root package name */
    int f4263e;

    /* renamed from: f  reason: collision with root package name */
    int f4264f;

    /* renamed from: g  reason: collision with root package name */
    int f4265g;

    /* renamed from: h  reason: collision with root package name */
    int f4266h;

    /* renamed from: i  reason: collision with root package name */
    boolean f4267i;

    /* renamed from: k  reason: collision with root package name */
    String f4269k;

    /* renamed from: l  reason: collision with root package name */
    int f4270l;

    /* renamed from: m  reason: collision with root package name */
    CharSequence f4271m;

    /* renamed from: n  reason: collision with root package name */
    int f4272n;

    /* renamed from: o  reason: collision with root package name */
    CharSequence f4273o;

    /* renamed from: p  reason: collision with root package name */
    ArrayList f4274p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4275q;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4277s;

    /* renamed from: c  reason: collision with root package name */
    ArrayList f4261c = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    boolean f4268j = true;

    /* renamed from: r  reason: collision with root package name */
    boolean f4276r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        int f4278a;

        /* renamed from: b  reason: collision with root package name */
        Fragment f4279b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4280c;

        /* renamed from: d  reason: collision with root package name */
        int f4281d;

        /* renamed from: e  reason: collision with root package name */
        int f4282e;

        /* renamed from: f  reason: collision with root package name */
        int f4283f;

        /* renamed from: g  reason: collision with root package name */
        int f4284g;

        /* renamed from: h  reason: collision with root package name */
        Lifecycle.State f4285h;

        /* renamed from: i  reason: collision with root package name */
        Lifecycle.State f4286i;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(int i10, Fragment fragment) {
            this.f4278a = i10;
            this.f4279b = fragment;
            this.f4280c = false;
            Lifecycle.State state = Lifecycle.State.f4521p;
            this.f4285h = state;
            this.f4286i = state;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(int i10, Fragment fragment, boolean z10) {
            this.f4278a = i10;
            this.f4279b = fragment;
            this.f4280c = z10;
            Lifecycle.State state = Lifecycle.State.f4521p;
            this.f4285h = state;
            this.f4286i = state;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FragmentTransaction(u uVar, ClassLoader classLoader) {
        this.f4259a = uVar;
        this.f4260b = classLoader;
    }

    public FragmentTransaction b(int i10, Fragment fragment) {
        l(i10, fragment, null, 1);
        return this;
    }

    public FragmentTransaction c(int i10, Fragment fragment, String str) {
        l(i10, fragment, str, 1);
        return this;
    }

    public final FragmentTransaction d(ViewGroup viewGroup, Fragment fragment, String str) {
        fragment.mContainer = viewGroup;
        fragment.mInDynamicContainer = true;
        return c(viewGroup.getId(), fragment, str);
    }

    public FragmentTransaction e(Fragment fragment, String str) {
        l(0, fragment, str, 1);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(a aVar) {
        this.f4261c.add(aVar);
        aVar.f4281d = this.f4262d;
        aVar.f4282e = this.f4263e;
        aVar.f4283f = this.f4264f;
        aVar.f4284g = this.f4265g;
    }

    public abstract int g();

    public abstract int h();

    public abstract void i();

    public abstract void j();

    public FragmentTransaction k() {
        if (!this.f4267i) {
            this.f4268j = false;
            return this;
        }
        throw new IllegalStateException("This transaction is already being added to the back stack");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(int i10, Fragment fragment, String str, int i11) {
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

    public FragmentTransaction m(Fragment fragment) {
        f(new a(3, fragment));
        return this;
    }

    public FragmentTransaction n(int i10, Fragment fragment) {
        return o(i10, fragment, null);
    }

    public FragmentTransaction o(int i10, Fragment fragment, String str) {
        if (i10 != 0) {
            l(i10, fragment, str, 2);
            return this;
        }
        throw new IllegalArgumentException("Must use non-zero containerViewId");
    }

    public FragmentTransaction p(Runnable runnable) {
        return q(false, runnable);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FragmentTransaction q(boolean z10, Runnable runnable) {
        if (!z10) {
            k();
        }
        if (this.f4277s == null) {
            this.f4277s = new ArrayList();
        }
        this.f4277s.add(runnable);
        return this;
    }

    public FragmentTransaction r(int i10, int i11) {
        return s(i10, i11, 0, 0);
    }

    public FragmentTransaction s(int i10, int i11, int i12, int i13) {
        this.f4262d = i10;
        this.f4263e = i11;
        this.f4264f = i12;
        this.f4265g = i13;
        return this;
    }

    public FragmentTransaction t(boolean z10) {
        this.f4276r = z10;
        return this;
    }
}
