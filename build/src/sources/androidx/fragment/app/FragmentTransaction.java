package androidx.fragment.app;

import android.view.ViewGroup;
import androidx.lifecycle.Lifecycle;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class FragmentTransaction {

    /* renamed from: a  reason: collision with root package name */
    private final u f4178a;

    /* renamed from: b  reason: collision with root package name */
    private final ClassLoader f4179b;

    /* renamed from: d  reason: collision with root package name */
    int f4181d;

    /* renamed from: e  reason: collision with root package name */
    int f4182e;

    /* renamed from: f  reason: collision with root package name */
    int f4183f;

    /* renamed from: g  reason: collision with root package name */
    int f4184g;

    /* renamed from: h  reason: collision with root package name */
    int f4185h;

    /* renamed from: i  reason: collision with root package name */
    boolean f4186i;

    /* renamed from: k  reason: collision with root package name */
    String f4188k;

    /* renamed from: l  reason: collision with root package name */
    int f4189l;

    /* renamed from: m  reason: collision with root package name */
    CharSequence f4190m;

    /* renamed from: n  reason: collision with root package name */
    int f4191n;

    /* renamed from: o  reason: collision with root package name */
    CharSequence f4192o;

    /* renamed from: p  reason: collision with root package name */
    ArrayList f4193p;

    /* renamed from: q  reason: collision with root package name */
    ArrayList f4194q;

    /* renamed from: s  reason: collision with root package name */
    ArrayList f4196s;

    /* renamed from: c  reason: collision with root package name */
    ArrayList f4180c = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    boolean f4187j = true;

    /* renamed from: r  reason: collision with root package name */
    boolean f4195r = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        int f4197a;

        /* renamed from: b  reason: collision with root package name */
        Fragment f4198b;

        /* renamed from: c  reason: collision with root package name */
        boolean f4199c;

        /* renamed from: d  reason: collision with root package name */
        int f4200d;

        /* renamed from: e  reason: collision with root package name */
        int f4201e;

        /* renamed from: f  reason: collision with root package name */
        int f4202f;

        /* renamed from: g  reason: collision with root package name */
        int f4203g;

        /* renamed from: h  reason: collision with root package name */
        Lifecycle.State f4204h;

        /* renamed from: i  reason: collision with root package name */
        Lifecycle.State f4205i;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(int i10, Fragment fragment) {
            this.f4197a = i10;
            this.f4198b = fragment;
            this.f4199c = false;
            Lifecycle.State state = Lifecycle.State.f4440p;
            this.f4204h = state;
            this.f4205i = state;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(int i10, Fragment fragment, boolean z10) {
            this.f4197a = i10;
            this.f4198b = fragment;
            this.f4199c = z10;
            Lifecycle.State state = Lifecycle.State.f4440p;
            this.f4204h = state;
            this.f4205i = state;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FragmentTransaction(u uVar, ClassLoader classLoader) {
        this.f4178a = uVar;
        this.f4179b = classLoader;
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
        this.f4180c.add(aVar);
        aVar.f4200d = this.f4181d;
        aVar.f4201e = this.f4182e;
        aVar.f4202f = this.f4183f;
        aVar.f4203g = this.f4184g;
    }

    public abstract int g();

    public abstract int h();

    public abstract void i();

    public abstract void j();

    public FragmentTransaction k() {
        if (!this.f4186i) {
            this.f4187j = false;
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
        if (this.f4196s == null) {
            this.f4196s = new ArrayList();
        }
        this.f4196s.add(runnable);
        return this;
    }

    public FragmentTransaction r(int i10, int i11) {
        return s(i10, i11, 0, 0);
    }

    public FragmentTransaction s(int i10, int i11, int i12, int i13) {
        this.f4181d = i10;
        this.f4182e = i11;
        this.f4183f = i12;
        this.f4184g = i13;
        return this;
    }

    public FragmentTransaction t(boolean z10) {
        this.f4195r = z10;
        return this;
    }
}
