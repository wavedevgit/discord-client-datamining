package androidx.fragment.app;

import android.view.ViewGroup;
import androidx.lifecycle.Lifecycle;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class FragmentTransaction {

    /* renamed from: a  reason: collision with root package name */
    private final u f4147a;

    /* renamed from: b  reason: collision with root package name */
    private final ClassLoader f4148b;

    /* renamed from: d  reason: collision with root package name */
    int f4150d;

    /* renamed from: e  reason: collision with root package name */
    int f4151e;

    /* renamed from: f  reason: collision with root package name */
    int f4152f;

    /* renamed from: g  reason: collision with root package name */
    int f4153g;

    /* renamed from: h  reason: collision with root package name */
    int f4154h;

    /* renamed from: i  reason: collision with root package name */
    boolean f4155i;

    /* renamed from: k  reason: collision with root package name */
    String f4157k;

    /* renamed from: l  reason: collision with root package name */
    int f4158l;

    /* renamed from: m  reason: collision with root package name */
    CharSequence f4159m;

    /* renamed from: n  reason: collision with root package name */
    int f4160n;

    /* renamed from: o  reason: collision with root package name */
    CharSequence f4161o;

    /* renamed from: p  reason: collision with root package name */
    ArrayList f4162p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4163q;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4165s;

    /* renamed from: c  reason: collision with root package name */
    ArrayList f4149c = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    boolean f4156j = true;

    /* renamed from: r  reason: collision with root package name */
    boolean f4164r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        int f4166a;

        /* renamed from: b  reason: collision with root package name */
        Fragment f4167b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4168c;

        /* renamed from: d  reason: collision with root package name */
        int f4169d;

        /* renamed from: e  reason: collision with root package name */
        int f4170e;

        /* renamed from: f  reason: collision with root package name */
        int f4171f;

        /* renamed from: g  reason: collision with root package name */
        int f4172g;

        /* renamed from: h  reason: collision with root package name */
        Lifecycle.State f4173h;

        /* renamed from: i  reason: collision with root package name */
        Lifecycle.State f4174i;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(int i10, Fragment fragment) {
            this.f4166a = i10;
            this.f4167b = fragment;
            this.f4168c = false;
            Lifecycle.State state = Lifecycle.State.f4409p;
            this.f4173h = state;
            this.f4174i = state;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(int i10, Fragment fragment, boolean z10) {
            this.f4166a = i10;
            this.f4167b = fragment;
            this.f4168c = z10;
            Lifecycle.State state = Lifecycle.State.f4409p;
            this.f4173h = state;
            this.f4174i = state;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FragmentTransaction(u uVar, ClassLoader classLoader) {
        this.f4147a = uVar;
        this.f4148b = classLoader;
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
        this.f4149c.add(aVar);
        aVar.f4169d = this.f4150d;
        aVar.f4170e = this.f4151e;
        aVar.f4171f = this.f4152f;
        aVar.f4172g = this.f4153g;
    }

    public abstract int g();

    public abstract int h();

    public abstract void i();

    public abstract void j();

    public FragmentTransaction k() {
        if (!this.f4155i) {
            this.f4156j = false;
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
        if (this.f4165s == null) {
            this.f4165s = new ArrayList();
        }
        this.f4165s.add(runnable);
        return this;
    }

    public FragmentTransaction r(int i10, int i11) {
        return s(i10, i11, 0, 0);
    }

    public FragmentTransaction s(int i10, int i11, int i12, int i13) {
        this.f4150d = i10;
        this.f4151e = i11;
        this.f4152f = i12;
        this.f4153g = i13;
        return this;
    }

    public FragmentTransaction t(boolean z10) {
        this.f4164r = z10;
        return this;
    }
}
