package androidx.fragment.app;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.Intent;
import android.content.IntentSender;
import android.content.res.Configuration;
import android.os.Bundle;
import android.os.Looper;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.activity.BackEventCompat;
import androidx.activity.OnBackPressedCallback;
import androidx.activity.OnBackPressedDispatcher;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.ActivityResultRegistry;
import androidx.activity.result.contract.ActivityResultContract;
import androidx.annotation.NonNull;
import androidx.core.util.Consumer;
import androidx.core.view.MenuProvider;
import androidx.fragment.app.FragmentTransaction;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.ViewModelStore;
import androidx.savedstate.SavedStateRegistry;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import d.e;
import g3.c;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class FragmentManager {
    private static boolean U = false;
    static boolean V = true;
    Fragment A;
    private ActivityResultLauncher F;
    private ActivityResultLauncher G;
    private ActivityResultLauncher H;
    private boolean J;
    private boolean K;
    private boolean L;
    private boolean M;
    private boolean N;
    private ArrayList O;
    private ArrayList P;
    private ArrayList Q;
    private g0 R;
    private c.C0339c S;

    /* renamed from: b  reason: collision with root package name */
    private boolean f4246b;

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f4249e;

    /* renamed from: g  reason: collision with root package name */
    private OnBackPressedDispatcher f4251g;

    /* renamed from: x  reason: collision with root package name */
    private FragmentHostCallback f4268x;

    /* renamed from: y  reason: collision with root package name */
    private FragmentContainer f4269y;

    /* renamed from: z  reason: collision with root package name */
    private Fragment f4270z;

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f4245a = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final l0 f4247c = new l0();

    /* renamed from: d  reason: collision with root package name */
    ArrayList f4248d = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    private final w f4250f = new w(this);

    /* renamed from: h  reason: collision with root package name */
    androidx.fragment.app.a f4252h = null;

    /* renamed from: i  reason: collision with root package name */
    boolean f4253i = false;

    /* renamed from: j  reason: collision with root package name */
    private final OnBackPressedCallback f4254j = new b(false);

    /* renamed from: k  reason: collision with root package name */
    private final AtomicInteger f4255k = new AtomicInteger();

    /* renamed from: l  reason: collision with root package name */
    private final Map f4256l = Collections.synchronizedMap(new HashMap());

    /* renamed from: m  reason: collision with root package name */
    private final Map f4257m = Collections.synchronizedMap(new HashMap());

    /* renamed from: n  reason: collision with root package name */
    private final Map f4258n = Collections.synchronizedMap(new HashMap());

    /* renamed from: o  reason: collision with root package name */
    ArrayList f4259o = new ArrayList();

    /* renamed from: p  reason: collision with root package name */
    private final x f4260p = new x(this);

    /* renamed from: q  reason: collision with root package name */
    private final CopyOnWriteArrayList f4261q = new CopyOnWriteArrayList();

    /* renamed from: r  reason: collision with root package name */
    private final Consumer f4262r = new Consumer() { // from class: androidx.fragment.app.y
        @Override // androidx.core.util.Consumer
        public final void accept(Object obj) {
            FragmentManager.f(FragmentManager.this, (Configuration) obj);
        }
    };

    /* renamed from: s  reason: collision with root package name */
    private final Consumer f4263s = new Consumer() { // from class: androidx.fragment.app.z
        @Override // androidx.core.util.Consumer
        public final void accept(Object obj) {
            FragmentManager.a(FragmentManager.this, (Integer) obj);
        }
    };

    /* renamed from: t  reason: collision with root package name */
    private final Consumer f4264t = new Consumer() { // from class: androidx.fragment.app.a0
        @Override // androidx.core.util.Consumer
        public final void accept(Object obj) {
            FragmentManager.e(FragmentManager.this, (androidx.core.app.h) obj);
        }
    };

    /* renamed from: u  reason: collision with root package name */
    private final Consumer f4265u = new Consumer() { // from class: androidx.fragment.app.b0
        @Override // androidx.core.util.Consumer
        public final void accept(Object obj) {
            FragmentManager.d(FragmentManager.this, (androidx.core.app.v) obj);
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private final MenuProvider f4266v = new c();

    /* renamed from: w  reason: collision with root package name */
    int f4267w = -1;
    private u B = null;
    private u C = new d();
    private u0 D = null;
    private u0 E = new e();
    ArrayDeque I = new ArrayDeque();
    private Runnable T = new f();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements ActivityResultCallback {
        a() {
        }

        @Override // androidx.activity.result.ActivityResultCallback
        /* renamed from: b */
        public void a(Map map) {
            int i10;
            String[] strArr = (String[]) map.keySet().toArray(new String[0]);
            ArrayList arrayList = new ArrayList(map.values());
            int[] iArr = new int[arrayList.size()];
            for (int i11 = 0; i11 < arrayList.size(); i11++) {
                if (((Boolean) arrayList.get(i11)).booleanValue()) {
                    i10 = 0;
                } else {
                    i10 = -1;
                }
                iArr[i11] = i10;
            }
            m mVar = (m) FragmentManager.this.I.pollFirst();
            if (mVar == null) {
                Log.w("FragmentManager", "No permissions were requested for " + this);
                return;
            }
            String str = mVar.f4285d;
            int i12 = mVar.f4286e;
            Fragment i13 = FragmentManager.this.f4247c.i(str);
            if (i13 == null) {
                Log.w("FragmentManager", "Permission request result delivered for unknown Fragment " + str);
                return;
            }
            i13.onRequestPermissionsResult(i12, strArr, iArr);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends OnBackPressedCallback {
        b(boolean z10) {
            super(z10);
        }

        @Override // androidx.activity.OnBackPressedCallback
        public void handleOnBackCancelled() {
            if (FragmentManager.P0(3)) {
                Log.d("FragmentManager", "handleOnBackCancelled. PREDICTIVE_BACK = " + FragmentManager.V + " fragment manager " + FragmentManager.this);
            }
            if (FragmentManager.V) {
                FragmentManager.this.t();
            }
        }

        @Override // androidx.activity.OnBackPressedCallback
        public void handleOnBackPressed() {
            if (FragmentManager.P0(3)) {
                Log.d("FragmentManager", "handleOnBackPressed. PREDICTIVE_BACK = " + FragmentManager.V + " fragment manager " + FragmentManager.this);
            }
            FragmentManager.this.L0();
        }

        @Override // androidx.activity.OnBackPressedCallback
        public void handleOnBackProgressed(BackEventCompat backEventCompat) {
            if (FragmentManager.P0(2)) {
                Log.v("FragmentManager", "handleOnBackProgressed. PREDICTIVE_BACK = " + FragmentManager.V + " fragment manager " + FragmentManager.this);
            }
            FragmentManager fragmentManager = FragmentManager.this;
            if (fragmentManager.f4252h != null) {
                for (t0 t0Var : fragmentManager.A(new ArrayList(Collections.singletonList(FragmentManager.this.f4252h)), 0, 1)) {
                    t0Var.A(backEventCompat);
                }
                Iterator it = FragmentManager.this.f4259o.iterator();
                while (it.hasNext()) {
                    ((o) it.next()).a(backEventCompat);
                }
            }
        }

        @Override // androidx.activity.OnBackPressedCallback
        public void handleOnBackStarted(BackEventCompat backEventCompat) {
            if (FragmentManager.P0(3)) {
                Log.d("FragmentManager", "handleOnBackStarted. PREDICTIVE_BACK = " + FragmentManager.V + " fragment manager " + FragmentManager.this);
            }
            if (FragmentManager.V) {
                FragmentManager.this.d0();
                FragmentManager.this.m1();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements MenuProvider {
        c() {
        }

        @Override // androidx.core.view.MenuProvider
        public void a(Menu menu) {
            FragmentManager.this.Q(menu);
        }

        @Override // androidx.core.view.MenuProvider
        public void b(Menu menu) {
            FragmentManager.this.U(menu);
        }

        @Override // androidx.core.view.MenuProvider
        public boolean c(MenuItem menuItem) {
            return FragmentManager.this.P(menuItem);
        }

        @Override // androidx.core.view.MenuProvider
        public void d(Menu menu, MenuInflater menuInflater) {
            FragmentManager.this.I(menu, menuInflater);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d extends u {
        d() {
        }

        @Override // androidx.fragment.app.u
        public Fragment a(ClassLoader classLoader, String str) {
            return FragmentManager.this.C0().b(FragmentManager.this.C0().g(), str, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class e implements u0 {
        e() {
        }

        @Override // androidx.fragment.app.u0
        public t0 a(ViewGroup viewGroup) {
            return new androidx.fragment.app.f(viewGroup);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f implements Runnable {
        f() {
        }

        @Override // java.lang.Runnable
        public void run() {
            FragmentManager.this.g0(true);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class g implements androidx.lifecycle.m {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f4277d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ i0 f4278e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Lifecycle f4279i;

        g(String str, i0 i0Var, Lifecycle lifecycle) {
            this.f4277d = str;
            this.f4278e = i0Var;
            this.f4279i = lifecycle;
        }

        @Override // androidx.lifecycle.m
        public void i(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
            Bundle bundle;
            if (aVar == Lifecycle.a.ON_START && (bundle = (Bundle) FragmentManager.this.f4257m.get(this.f4277d)) != null) {
                this.f4278e.a(this.f4277d, bundle);
                FragmentManager.this.y(this.f4277d);
            }
            if (aVar == Lifecycle.a.ON_DESTROY) {
                this.f4279i.d(this);
                FragmentManager.this.f4258n.remove(this.f4277d);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class h implements h0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Fragment f4281d;

        h(Fragment fragment) {
            this.f4281d = fragment;
        }

        @Override // androidx.fragment.app.h0
        public void a(FragmentManager fragmentManager, Fragment fragment) {
            this.f4281d.onAttachFragment(fragment);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class i implements ActivityResultCallback {
        i() {
        }

        @Override // androidx.activity.result.ActivityResultCallback
        /* renamed from: b */
        public void a(d.a aVar) {
            m mVar = (m) FragmentManager.this.I.pollLast();
            if (mVar == null) {
                Log.w("FragmentManager", "No Activities were started for result for " + this);
                return;
            }
            String str = mVar.f4285d;
            int i10 = mVar.f4286e;
            Fragment i11 = FragmentManager.this.f4247c.i(str);
            if (i11 == null) {
                Log.w("FragmentManager", "Activity result delivered for unknown Fragment " + str);
                return;
            }
            i11.onActivityResult(i10, aVar.b(), aVar.a());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class j implements ActivityResultCallback {
        j() {
        }

        @Override // androidx.activity.result.ActivityResultCallback
        /* renamed from: b */
        public void a(d.a aVar) {
            m mVar = (m) FragmentManager.this.I.pollFirst();
            if (mVar == null) {
                Log.w("FragmentManager", "No IntentSenders were started for " + this);
                return;
            }
            String str = mVar.f4285d;
            int i10 = mVar.f4286e;
            Fragment i11 = FragmentManager.this.f4247c.i(str);
            if (i11 == null) {
                Log.w("FragmentManager", "Intent Sender result delivered for unknown Fragment " + str);
                return;
            }
            i11.onActivityResult(i10, aVar.b(), aVar.a());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class k extends ActivityResultContract {
        k() {
        }

        @Override // androidx.activity.result.contract.ActivityResultContract
        /* renamed from: a */
        public Intent createIntent(Context context, d.e eVar) {
            Bundle bundleExtra;
            Intent intent = new Intent("androidx.activity.result.contract.action.INTENT_SENDER_REQUEST");
            Intent a10 = eVar.a();
            if (a10 != null && (bundleExtra = a10.getBundleExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE")) != null) {
                intent.putExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE", bundleExtra);
                a10.removeExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE");
                if (a10.getBooleanExtra("androidx.fragment.extra.ACTIVITY_OPTIONS_BUNDLE", false)) {
                    eVar = new e.a(eVar.d()).b(null).c(eVar.c(), eVar.b()).a();
                }
            }
            intent.putExtra("androidx.activity.result.contract.extra.INTENT_SENDER_REQUEST", eVar);
            if (FragmentManager.P0(2)) {
                Log.v("FragmentManager", "CreateIntent created the following intent: " + intent);
            }
            return intent;
        }

        @Override // androidx.activity.result.contract.ActivityResultContract
        /* renamed from: b */
        public d.a parseResult(int i10, Intent intent) {
            return new d.a(i10, intent);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class l {
        @Deprecated
        public void onFragmentActivityCreated(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment, Bundle bundle) {
        }

        public void onFragmentAttached(FragmentManager fragmentManager, Fragment fragment, Context context) {
        }

        public void onFragmentCreated(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment, Bundle bundle) {
        }

        public void onFragmentDestroyed(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment) {
        }

        public void onFragmentDetached(FragmentManager fragmentManager, Fragment fragment) {
        }

        public void onFragmentPaused(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment) {
        }

        public void onFragmentPreAttached(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment, @NonNull Context context) {
        }

        public void onFragmentPreCreated(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment, Bundle bundle) {
        }

        public void onFragmentResumed(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment) {
        }

        public void onFragmentSaveInstanceState(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment, @NonNull Bundle bundle) {
        }

        public void onFragmentStarted(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment) {
        }

        public void onFragmentStopped(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment) {
        }

        public void onFragmentViewCreated(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment, @NonNull View view, Bundle bundle) {
        }

        public void onFragmentViewDestroyed(@NonNull FragmentManager fragmentManager, @NonNull Fragment fragment) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class n implements i0 {

        /* renamed from: a  reason: collision with root package name */
        private final Lifecycle f4287a;

        /* renamed from: b  reason: collision with root package name */
        private final i0 f4288b;

        /* renamed from: c  reason: collision with root package name */
        private final androidx.lifecycle.m f4289c;

        n(Lifecycle lifecycle, i0 i0Var, androidx.lifecycle.m mVar) {
            this.f4287a = lifecycle;
            this.f4288b = i0Var;
            this.f4289c = mVar;
        }

        @Override // androidx.fragment.app.i0
        public void a(String str, Bundle bundle) {
            this.f4288b.a(str, bundle);
        }

        public boolean b(Lifecycle.State state) {
            return this.f4287a.b().d(state);
        }

        public void c() {
            this.f4287a.d(this.f4289c);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface o {
        default void a(BackEventCompat backEventCompat) {
        }

        void b(Fragment fragment, boolean z10);

        default void c(Fragment fragment, boolean z10) {
        }

        default void d() {
        }

        void onBackStackChanged();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface p {
        boolean a(ArrayList arrayList, ArrayList arrayList2);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class q implements p {

        /* renamed from: a  reason: collision with root package name */
        final String f4290a;

        /* renamed from: b  reason: collision with root package name */
        final int f4291b;

        /* renamed from: c  reason: collision with root package name */
        final int f4292c;

        q(String str, int i10, int i11) {
            this.f4290a = str;
            this.f4291b = i10;
            this.f4292c = i11;
        }

        @Override // androidx.fragment.app.FragmentManager.p
        public boolean a(ArrayList arrayList, ArrayList arrayList2) {
            Fragment fragment = FragmentManager.this.A;
            if (fragment != null && this.f4291b < 0 && this.f4290a == null && fragment.getChildFragmentManager().h1()) {
                return false;
            }
            return FragmentManager.this.k1(arrayList, arrayList2, this.f4290a, this.f4291b, this.f4292c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class r implements p {
        r() {
        }

        @Override // androidx.fragment.app.FragmentManager.p
        public boolean a(ArrayList arrayList, ArrayList arrayList2) {
            boolean l12 = FragmentManager.this.l1(arrayList, arrayList2);
            if (!FragmentManager.this.f4259o.isEmpty() && arrayList.size() > 0) {
                boolean booleanValue = ((Boolean) arrayList2.get(arrayList.size() - 1)).booleanValue();
                LinkedHashSet<Fragment> linkedHashSet = new LinkedHashSet();
                Iterator it = arrayList.iterator();
                while (it.hasNext()) {
                    linkedHashSet.addAll(FragmentManager.this.u0((androidx.fragment.app.a) it.next()));
                }
                Iterator it2 = FragmentManager.this.f4259o.iterator();
                while (it2.hasNext()) {
                    o oVar = (o) it2.next();
                    for (Fragment fragment : linkedHashSet) {
                        oVar.c(fragment, booleanValue);
                    }
                }
            }
            return l12;
        }
    }

    private void C1(Fragment fragment) {
        ViewGroup z02 = z0(fragment);
        if (z02 != null && fragment.getEnterAnim() + fragment.getExitAnim() + fragment.getPopEnterAnim() + fragment.getPopExitAnim() > 0) {
            if (z02.getTag(f3.b.f23556c) == null) {
                z02.setTag(f3.b.f23556c, fragment);
            }
            ((Fragment) z02.getTag(f3.b.f23556c)).setPopDirection(fragment.getPopDirection());
        }
    }

    private void E1() {
        for (k0 k0Var : this.f4247c.k()) {
            d1(k0Var);
        }
    }

    private void F1(RuntimeException runtimeException) {
        Log.e("FragmentManager", runtimeException.getMessage());
        Log.e("FragmentManager", "Activity state:");
        PrintWriter printWriter = new PrintWriter(new q0("FragmentManager"));
        FragmentHostCallback fragmentHostCallback = this.f4268x;
        if (fragmentHostCallback != null) {
            try {
                fragmentHostCallback.j("  ", null, printWriter, new String[0]);
            } catch (Exception e10) {
                Log.e("FragmentManager", "Failed dumping state", e10);
            }
        } else {
            try {
                c0("  ", null, printWriter, new String[0]);
            } catch (Exception e11) {
                Log.e("FragmentManager", "Failed dumping state", e11);
            }
        }
        throw runtimeException;
    }

    private void G1() {
        synchronized (this.f4245a) {
            try {
                boolean z10 = true;
                if (!this.f4245a.isEmpty()) {
                    this.f4254j.setEnabled(true);
                    if (P0(3)) {
                        Log.d("FragmentManager", "FragmentManager " + this + " enabling OnBackPressedCallback, caused by non-empty pending actions");
                    }
                    return;
                }
                z10 = (w0() <= 0 || !U0(this.f4270z)) ? false : false;
                if (P0(3)) {
                    Log.d("FragmentManager", "OnBackPressedCallback for FragmentManager " + this + " enabled state is " + z10);
                }
                this.f4254j.setEnabled(z10);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Fragment J0(View view) {
        Object tag = view.getTag(f3.b.f23554a);
        if (tag instanceof Fragment) {
            return (Fragment) tag;
        }
        return null;
    }

    public static boolean P0(int i10) {
        if (!U && !Log.isLoggable("FragmentManager", i10)) {
            return false;
        }
        return true;
    }

    private boolean Q0(Fragment fragment) {
        if ((fragment.mHasMenu && fragment.mMenuVisible) || fragment.mChildFragmentManager.u()) {
            return true;
        }
        return false;
    }

    private void R(Fragment fragment) {
        if (fragment != null && fragment.equals(l0(fragment.mWho))) {
            fragment.performPrimaryNavigationFragmentChanged();
        }
    }

    private boolean R0() {
        Fragment fragment = this.f4270z;
        if (fragment == null) {
            return true;
        }
        if (fragment.isAdded() && this.f4270z.getParentFragmentManager().R0()) {
            return true;
        }
        return false;
    }

    private void Y(int i10) {
        try {
            this.f4246b = true;
            this.f4247c.d(i10);
            a1(i10, false);
            for (t0 t0Var : z()) {
                t0Var.q();
            }
            this.f4246b = false;
            g0(true);
        } catch (Throwable th2) {
            this.f4246b = false;
            throw th2;
        }
    }

    public static /* synthetic */ void a(FragmentManager fragmentManager, Integer num) {
        if (fragmentManager.R0() && num.intValue() == 80) {
            fragmentManager.L(false);
        }
    }

    private void b0() {
        if (this.N) {
            this.N = false;
            E1();
        }
    }

    public static /* synthetic */ void c(FragmentManager fragmentManager) {
        Iterator it = fragmentManager.f4259o.iterator();
        while (it.hasNext()) {
            ((o) it.next()).d();
        }
    }

    public static /* synthetic */ void d(FragmentManager fragmentManager, androidx.core.app.v vVar) {
        if (fragmentManager.R0()) {
            fragmentManager.T(vVar.a(), false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void d0() {
        for (t0 t0Var : z()) {
            t0Var.q();
        }
    }

    public static /* synthetic */ void e(FragmentManager fragmentManager, androidx.core.app.h hVar) {
        if (fragmentManager.R0()) {
            fragmentManager.M(hVar.a(), false);
        }
    }

    public static /* synthetic */ void f(FragmentManager fragmentManager, Configuration configuration) {
        if (fragmentManager.R0()) {
            fragmentManager.F(configuration, false);
        }
    }

    private void f0(boolean z10) {
        if (!this.f4246b) {
            if (this.f4268x == null) {
                if (this.M) {
                    throw new IllegalStateException("FragmentManager has been destroyed");
                }
                throw new IllegalStateException("FragmentManager has not been attached to a host.");
            } else if (Looper.myLooper() == this.f4268x.i().getLooper()) {
                if (!z10) {
                    v();
                }
                if (this.O == null) {
                    this.O = new ArrayList();
                    this.P = new ArrayList();
                    return;
                }
                return;
            } else {
                throw new IllegalStateException("Must be called from main thread of fragment host");
            }
        }
        throw new IllegalStateException("FragmentManager is already executing transactions");
    }

    private static void i0(ArrayList arrayList, ArrayList arrayList2, int i10, int i11) {
        while (i10 < i11) {
            androidx.fragment.app.a aVar = (androidx.fragment.app.a) arrayList.get(i10);
            if (((Boolean) arrayList2.get(i10)).booleanValue()) {
                aVar.w(-1);
                aVar.C();
            } else {
                aVar.w(1);
                aVar.B();
            }
            i10++;
        }
    }

    private void j0(ArrayList arrayList, ArrayList arrayList2, int i10, int i11) {
        boolean z10 = ((androidx.fragment.app.a) arrayList.get(i10)).f4312r;
        ArrayList arrayList3 = this.Q;
        if (arrayList3 == null) {
            this.Q = new ArrayList();
        } else {
            arrayList3.clear();
        }
        this.Q.addAll(this.f4247c.o());
        Fragment G0 = G0();
        boolean z11 = false;
        for (int i12 = i10; i12 < i11; i12++) {
            androidx.fragment.app.a aVar = (androidx.fragment.app.a) arrayList.get(i12);
            if (!((Boolean) arrayList2.get(i12)).booleanValue()) {
                G0 = aVar.D(this.Q, G0);
            } else {
                G0 = aVar.G(this.Q, G0);
            }
            if (!z11 && !aVar.f4303i) {
                z11 = false;
            } else {
                z11 = true;
            }
        }
        this.Q.clear();
        if (!z10 && this.f4267w >= 1) {
            for (int i13 = i10; i13 < i11; i13++) {
                Iterator it = ((androidx.fragment.app.a) arrayList.get(i13)).f4297c.iterator();
                while (it.hasNext()) {
                    Fragment fragment = ((FragmentTransaction.a) it.next()).f4315b;
                    if (fragment != null && fragment.mFragmentManager != null) {
                        this.f4247c.r(B(fragment));
                    }
                }
            }
        }
        i0(arrayList, arrayList2, i10, i11);
        boolean booleanValue = ((Boolean) arrayList2.get(i11 - 1)).booleanValue();
        if (z11 && !this.f4259o.isEmpty()) {
            LinkedHashSet<Fragment> linkedHashSet = new LinkedHashSet();
            Iterator it2 = arrayList.iterator();
            while (it2.hasNext()) {
                linkedHashSet.addAll(u0((androidx.fragment.app.a) it2.next()));
            }
            if (this.f4252h == null) {
                Iterator it3 = this.f4259o.iterator();
                while (it3.hasNext()) {
                    o oVar = (o) it3.next();
                    for (Fragment fragment2 : linkedHashSet) {
                        oVar.c(fragment2, booleanValue);
                    }
                }
                Iterator it4 = this.f4259o.iterator();
                while (it4.hasNext()) {
                    o oVar2 = (o) it4.next();
                    for (Fragment fragment3 : linkedHashSet) {
                        oVar2.b(fragment3, booleanValue);
                    }
                }
            }
        }
        for (int i14 = i10; i14 < i11; i14++) {
            androidx.fragment.app.a aVar2 = (androidx.fragment.app.a) arrayList.get(i14);
            if (booleanValue) {
                for (int size = aVar2.f4297c.size() - 1; size >= 0; size--) {
                    Fragment fragment4 = ((FragmentTransaction.a) aVar2.f4297c.get(size)).f4315b;
                    if (fragment4 != null) {
                        B(fragment4).m();
                    }
                }
            } else {
                Iterator it5 = aVar2.f4297c.iterator();
                while (it5.hasNext()) {
                    Fragment fragment5 = ((FragmentTransaction.a) it5.next()).f4315b;
                    if (fragment5 != null) {
                        B(fragment5).m();
                    }
                }
            }
        }
        a1(this.f4267w, true);
        for (t0 t0Var : A(arrayList, i10, i11)) {
            t0Var.D(booleanValue);
            t0Var.z();
            t0Var.n();
        }
        while (i10 < i11) {
            androidx.fragment.app.a aVar3 = (androidx.fragment.app.a) arrayList.get(i10);
            if (((Boolean) arrayList2.get(i10)).booleanValue() && aVar3.f4331v >= 0) {
                aVar3.f4331v = -1;
            }
            aVar3.F();
            i10++;
        }
        if (z11) {
            s1();
        }
    }

    private boolean j1(String str, int i10, int i11) {
        g0(false);
        f0(true);
        Fragment fragment = this.A;
        if (fragment != null && i10 < 0 && str == null && fragment.getChildFragmentManager().h1()) {
            return true;
        }
        boolean k12 = k1(this.O, this.P, str, i10, i11);
        if (k12) {
            this.f4246b = true;
            try {
                q1(this.O, this.P);
            } finally {
                w();
            }
        }
        G1();
        b0();
        this.f4247c.b();
        return k12;
    }

    private int m0(String str, int i10, boolean z10) {
        if (this.f4248d.isEmpty()) {
            return -1;
        }
        if (str == null && i10 < 0) {
            if (z10) {
                return 0;
            }
            return this.f4248d.size() - 1;
        }
        int size = this.f4248d.size() - 1;
        while (size >= 0) {
            androidx.fragment.app.a aVar = (androidx.fragment.app.a) this.f4248d.get(size);
            if ((str != null && str.equals(aVar.E())) || (i10 >= 0 && i10 == aVar.f4331v)) {
                break;
            }
            size--;
        }
        if (size < 0) {
            return size;
        }
        if (z10) {
            while (size > 0) {
                androidx.fragment.app.a aVar2 = (androidx.fragment.app.a) this.f4248d.get(size - 1);
                if ((str == null || !str.equals(aVar2.E())) && (i10 < 0 || i10 != aVar2.f4331v)) {
                    break;
                }
                size--;
            }
            return size;
        } else if (size == this.f4248d.size() - 1) {
            return -1;
        } else {
            return size + 1;
        }
    }

    public static Fragment n0(View view) {
        Fragment s02 = s0(view);
        if (s02 != null) {
            return s02;
        }
        throw new IllegalStateException("View " + view + " does not have a Fragment set");
    }

    private void q1(ArrayList arrayList, ArrayList arrayList2) {
        if (!arrayList.isEmpty()) {
            if (arrayList.size() == arrayList2.size()) {
                int size = arrayList.size();
                int i10 = 0;
                int i11 = 0;
                while (i10 < size) {
                    if (!((androidx.fragment.app.a) arrayList.get(i10)).f4312r) {
                        if (i11 != i10) {
                            j0(arrayList, arrayList2, i11, i10);
                        }
                        i11 = i10 + 1;
                        if (((Boolean) arrayList2.get(i10)).booleanValue()) {
                            while (i11 < size && ((Boolean) arrayList2.get(i11)).booleanValue() && !((androidx.fragment.app.a) arrayList.get(i11)).f4312r) {
                                i11++;
                            }
                        }
                        j0(arrayList, arrayList2, i10, i11);
                        i10 = i11 - 1;
                    }
                    i10++;
                }
                if (i11 != size) {
                    j0(arrayList, arrayList2, i11, size);
                    return;
                }
                return;
            }
            throw new IllegalStateException("Internal error with the back stack records");
        }
    }

    public static FragmentManager r0(View view) {
        FragmentActivity fragmentActivity;
        Fragment s02 = s0(view);
        if (s02 != null) {
            if (s02.isAdded()) {
                return s02.getChildFragmentManager();
            }
            throw new IllegalStateException("The Fragment " + s02 + " that owns View " + view + " has already been destroyed. Nested fragments should always use the child FragmentManager.");
        }
        Context context = view.getContext();
        while (true) {
            if (context instanceof ContextWrapper) {
                if (context instanceof FragmentActivity) {
                    fragmentActivity = (FragmentActivity) context;
                    break;
                }
                context = ((ContextWrapper) context).getBaseContext();
            } else {
                fragmentActivity = null;
                break;
            }
        }
        if (fragmentActivity != null) {
            return fragmentActivity.getSupportFragmentManager();
        }
        throw new IllegalStateException("View " + view + " is not within a subclass of FragmentActivity.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Fragment s0(View view) {
        while (view != null) {
            Fragment J0 = J0(view);
            if (J0 != null) {
                return J0;
            }
            ViewParent parent = view.getParent();
            if (parent instanceof View) {
                view = (View) parent;
            } else {
                view = null;
            }
        }
        return null;
    }

    private void s1() {
        for (int i10 = 0; i10 < this.f4259o.size(); i10++) {
            ((o) this.f4259o.get(i10)).onBackStackChanged();
        }
    }

    private void t0() {
        for (t0 t0Var : z()) {
            t0Var.r();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int u1(int i10) {
        if (i10 != 4097) {
            if (i10 != 8194) {
                if (i10 != 8197) {
                    if (i10 != 4099) {
                        return i10 != 4100 ? 0 : 8197;
                    }
                    return 4099;
                }
                return 4100;
            }
            return 4097;
        }
        return 8194;
    }

    private void v() {
        if (!W0()) {
            return;
        }
        throw new IllegalStateException("Can not perform this action after onSaveInstanceState");
    }

    private boolean v0(ArrayList arrayList, ArrayList arrayList2) {
        synchronized (this.f4245a) {
            if (this.f4245a.isEmpty()) {
                return false;
            }
            int size = this.f4245a.size();
            boolean z10 = false;
            for (int i10 = 0; i10 < size; i10++) {
                z10 |= ((p) this.f4245a.get(i10)).a(arrayList, arrayList2);
            }
            this.f4245a.clear();
            this.f4268x.i().removeCallbacks(this.T);
            return z10;
        }
    }

    private void w() {
        this.f4246b = false;
        this.P.clear();
        this.O.clear();
    }

    private void x() {
        boolean z10;
        FragmentHostCallback fragmentHostCallback = this.f4268x;
        if (fragmentHostCallback instanceof androidx.lifecycle.q0) {
            z10 = this.f4247c.p().n();
        } else if (fragmentHostCallback.g() instanceof Activity) {
            z10 = !((Activity) this.f4268x.g()).isChangingConfigurations();
        } else {
            z10 = true;
        }
        if (z10) {
            for (androidx.fragment.app.c cVar : this.f4256l.values()) {
                for (String str : cVar.f4349d) {
                    this.f4247c.p().g(str, false);
                }
            }
        }
    }

    private g0 x0(Fragment fragment) {
        return this.R.j(fragment);
    }

    private Set z() {
        HashSet hashSet = new HashSet();
        for (k0 k0Var : this.f4247c.k()) {
            ViewGroup viewGroup = k0Var.k().mContainer;
            if (viewGroup != null) {
                hashSet.add(t0.v(viewGroup, H0()));
            }
        }
        return hashSet;
    }

    private ViewGroup z0(Fragment fragment) {
        ViewGroup viewGroup = fragment.mContainer;
        if (viewGroup != null) {
            return viewGroup;
        }
        if (fragment.mContainerId > 0 && this.f4269y.d()) {
            View c10 = this.f4269y.c(fragment.mContainerId);
            if (c10 instanceof ViewGroup) {
                return (ViewGroup) c10;
            }
        }
        return null;
    }

    Set A(ArrayList arrayList, int i10, int i11) {
        ViewGroup viewGroup;
        HashSet hashSet = new HashSet();
        while (i10 < i11) {
            Iterator it = ((androidx.fragment.app.a) arrayList.get(i10)).f4297c.iterator();
            while (it.hasNext()) {
                Fragment fragment = ((FragmentTransaction.a) it.next()).f4315b;
                if (fragment != null && (viewGroup = fragment.mContainer) != null) {
                    hashSet.add(t0.u(viewGroup, this));
                }
            }
            i10++;
        }
        return hashSet;
    }

    public u A0() {
        u uVar = this.B;
        if (uVar != null) {
            return uVar;
        }
        Fragment fragment = this.f4270z;
        if (fragment != null) {
            return fragment.mFragmentManager.A0();
        }
        return this.C;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A1(Fragment fragment, Lifecycle.State state) {
        if (fragment.equals(l0(fragment.mWho)) && (fragment.mHost == null || fragment.mFragmentManager == this)) {
            fragment.mMaxState = state;
            return;
        }
        throw new IllegalArgumentException("Fragment " + fragment + " is not an active fragment of FragmentManager " + this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0 B(Fragment fragment) {
        k0 n10 = this.f4247c.n(fragment.mWho);
        if (n10 != null) {
            return n10;
        }
        k0 k0Var = new k0(this.f4260p, this.f4247c, fragment);
        k0Var.o(this.f4268x.g().getClassLoader());
        k0Var.s(this.f4267w);
        return k0Var;
    }

    public List B0() {
        return this.f4247c.o();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B1(Fragment fragment) {
        if (fragment != null && (!fragment.equals(l0(fragment.mWho)) || (fragment.mHost != null && fragment.mFragmentManager != this))) {
            throw new IllegalArgumentException("Fragment " + fragment + " is not an active fragment of FragmentManager " + this);
        }
        Fragment fragment2 = this.A;
        this.A = fragment;
        R(fragment2);
        R(this.A);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C(Fragment fragment) {
        if (P0(2)) {
            Log.v("FragmentManager", "detach: " + fragment);
        }
        if (!fragment.mDetached) {
            fragment.mDetached = true;
            if (fragment.mAdded) {
                if (P0(2)) {
                    Log.v("FragmentManager", "remove from detach: " + fragment);
                }
                this.f4247c.u(fragment);
                if (Q0(fragment)) {
                    this.J = true;
                }
                C1(fragment);
            }
        }
    }

    public FragmentHostCallback C0() {
        return this.f4268x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        Y(4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LayoutInflater.Factory2 D0() {
        return this.f4250f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D1(Fragment fragment) {
        if (P0(2)) {
            Log.v("FragmentManager", "show: " + fragment);
        }
        if (fragment.mHidden) {
            fragment.mHidden = false;
            fragment.mHiddenChanged = !fragment.mHiddenChanged;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void E() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        Y(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x E0() {
        return this.f4260p;
    }

    void F(Configuration configuration, boolean z10) {
        if (z10 && (this.f4268x instanceof androidx.core.content.d)) {
            F1(new IllegalStateException("Do not call dispatchConfigurationChanged() on host. Host implements OnConfigurationChangedProvider and automatically dispatches configuration changes to fragments."));
        }
        for (Fragment fragment : this.f4247c.o()) {
            if (fragment != null) {
                fragment.performConfigurationChanged(configuration);
                if (z10) {
                    fragment.mChildFragmentManager.F(configuration, true);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment F0() {
        return this.f4270z;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean G(MenuItem menuItem) {
        if (this.f4267w < 1) {
            return false;
        }
        for (Fragment fragment : this.f4247c.o()) {
            if (fragment != null && fragment.performContextItemSelected(menuItem)) {
                return true;
            }
        }
        return false;
    }

    public Fragment G0() {
        return this.A;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void H() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        Y(1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0 H0() {
        u0 u0Var = this.D;
        if (u0Var != null) {
            return u0Var;
        }
        Fragment fragment = this.f4270z;
        if (fragment != null) {
            return fragment.mFragmentManager.H0();
        }
        return this.E;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean I(Menu menu, MenuInflater menuInflater) {
        if (this.f4267w < 1) {
            return false;
        }
        ArrayList arrayList = null;
        boolean z10 = false;
        for (Fragment fragment : this.f4247c.o()) {
            if (fragment != null && T0(fragment) && fragment.performCreateOptionsMenu(menu, menuInflater)) {
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                arrayList.add(fragment);
                z10 = true;
            }
        }
        if (this.f4249e != null) {
            for (int i10 = 0; i10 < this.f4249e.size(); i10++) {
                Fragment fragment2 = (Fragment) this.f4249e.get(i10);
                if (arrayList == null || !arrayList.contains(fragment2)) {
                    fragment2.onDestroyOptionsMenu();
                }
            }
        }
        this.f4249e = arrayList;
        return z10;
    }

    public c.C0339c I0() {
        return this.S;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J() {
        this.M = true;
        g0(true);
        d0();
        x();
        Y(-1);
        FragmentHostCallback fragmentHostCallback = this.f4268x;
        if (fragmentHostCallback instanceof androidx.core.content.e) {
            ((androidx.core.content.e) fragmentHostCallback).removeOnTrimMemoryListener(this.f4263s);
        }
        FragmentHostCallback fragmentHostCallback2 = this.f4268x;
        if (fragmentHostCallback2 instanceof androidx.core.content.d) {
            ((androidx.core.content.d) fragmentHostCallback2).removeOnConfigurationChangedListener(this.f4262r);
        }
        FragmentHostCallback fragmentHostCallback3 = this.f4268x;
        if (fragmentHostCallback3 instanceof androidx.core.app.s) {
            ((androidx.core.app.s) fragmentHostCallback3).removeOnMultiWindowModeChangedListener(this.f4264t);
        }
        FragmentHostCallback fragmentHostCallback4 = this.f4268x;
        if (fragmentHostCallback4 instanceof androidx.core.app.t) {
            ((androidx.core.app.t) fragmentHostCallback4).removeOnPictureInPictureModeChangedListener(this.f4265u);
        }
        FragmentHostCallback fragmentHostCallback5 = this.f4268x;
        if ((fragmentHostCallback5 instanceof androidx.core.view.n) && this.f4270z == null) {
            ((androidx.core.view.n) fragmentHostCallback5).removeMenuProvider(this.f4266v);
        }
        this.f4268x = null;
        this.f4269y = null;
        this.f4270z = null;
        if (this.f4251g != null) {
            this.f4254j.remove();
            this.f4251g = null;
        }
        ActivityResultLauncher activityResultLauncher = this.F;
        if (activityResultLauncher != null) {
            activityResultLauncher.d();
            this.G.d();
            this.H.d();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K() {
        Y(1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ViewModelStore K0(Fragment fragment) {
        return this.R.m(fragment);
    }

    void L(boolean z10) {
        if (z10 && (this.f4268x instanceof androidx.core.content.e)) {
            F1(new IllegalStateException("Do not call dispatchLowMemory() on host. Host implements OnTrimMemoryProvider and automatically dispatches low memory callbacks to fragments."));
        }
        for (Fragment fragment : this.f4247c.o()) {
            if (fragment != null) {
                fragment.performLowMemory();
                if (z10) {
                    fragment.mChildFragmentManager.L(true);
                }
            }
        }
    }

    void L0() {
        this.f4253i = true;
        g0(true);
        this.f4253i = false;
        if (V && this.f4252h != null) {
            if (!this.f4259o.isEmpty()) {
                LinkedHashSet<Fragment> linkedHashSet = new LinkedHashSet(u0(this.f4252h));
                Iterator it = this.f4259o.iterator();
                while (it.hasNext()) {
                    o oVar = (o) it.next();
                    for (Fragment fragment : linkedHashSet) {
                        oVar.b(fragment, true);
                    }
                }
            }
            Iterator it2 = this.f4252h.f4297c.iterator();
            while (it2.hasNext()) {
                Fragment fragment2 = ((FragmentTransaction.a) it2.next()).f4315b;
                if (fragment2 != null) {
                    fragment2.mTransitioning = false;
                }
            }
            for (t0 t0Var : A(new ArrayList(Collections.singletonList(this.f4252h)), 0, 1)) {
                t0Var.f();
            }
            Iterator it3 = this.f4252h.f4297c.iterator();
            while (it3.hasNext()) {
                Fragment fragment3 = ((FragmentTransaction.a) it3.next()).f4315b;
                if (fragment3 != null && fragment3.mContainer == null) {
                    B(fragment3).m();
                }
            }
            this.f4252h = null;
            G1();
            if (P0(3)) {
                Log.d("FragmentManager", "Op is being set to null");
                Log.d("FragmentManager", "OnBackPressedCallback enabled=" + this.f4254j.isEnabled() + " for  FragmentManager " + this);
            }
        } else if (this.f4254j.isEnabled()) {
            if (P0(3)) {
                Log.d("FragmentManager", "Calling popBackStackImmediate via onBackPressed callback");
            }
            h1();
        } else {
            if (P0(3)) {
                Log.d("FragmentManager", "Calling onBackPressed via onBackPressed callback");
            }
            this.f4251g.l();
        }
    }

    void M(boolean z10, boolean z11) {
        if (z11 && (this.f4268x instanceof androidx.core.app.s)) {
            F1(new IllegalStateException("Do not call dispatchMultiWindowModeChanged() on host. Host implements OnMultiWindowModeChangedProvider and automatically dispatches multi-window mode changes to fragments."));
        }
        for (Fragment fragment : this.f4247c.o()) {
            if (fragment != null) {
                fragment.performMultiWindowModeChanged(z10);
                if (z11) {
                    fragment.mChildFragmentManager.M(z10, true);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M0(Fragment fragment) {
        if (P0(2)) {
            Log.v("FragmentManager", "hide: " + fragment);
        }
        if (!fragment.mHidden) {
            fragment.mHidden = true;
            fragment.mHiddenChanged = true ^ fragment.mHiddenChanged;
            C1(fragment);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N(Fragment fragment) {
        Iterator it = this.f4261q.iterator();
        while (it.hasNext()) {
            ((h0) it.next()).a(this, fragment);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N0(Fragment fragment) {
        if (fragment.mAdded && Q0(fragment)) {
            this.J = true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void O() {
        for (Fragment fragment : this.f4247c.l()) {
            if (fragment != null) {
                fragment.onHiddenChanged(fragment.isHidden());
                fragment.mChildFragmentManager.O();
            }
        }
    }

    public boolean O0() {
        return this.M;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean P(MenuItem menuItem) {
        if (this.f4267w < 1) {
            return false;
        }
        for (Fragment fragment : this.f4247c.o()) {
            if (fragment != null && fragment.performOptionsItemSelected(menuItem)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Q(Menu menu) {
        if (this.f4267w >= 1) {
            for (Fragment fragment : this.f4247c.o()) {
                if (fragment != null) {
                    fragment.performOptionsMenuClosed(menu);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void S() {
        Y(5);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean S0(Fragment fragment) {
        if (fragment == null) {
            return false;
        }
        return fragment.isHidden();
    }

    void T(boolean z10, boolean z11) {
        if (z11 && (this.f4268x instanceof androidx.core.app.t)) {
            F1(new IllegalStateException("Do not call dispatchPictureInPictureModeChanged() on host. Host implements OnPictureInPictureModeChangedProvider and automatically dispatches picture-in-picture mode changes to fragments."));
        }
        for (Fragment fragment : this.f4247c.o()) {
            if (fragment != null) {
                fragment.performPictureInPictureModeChanged(z10);
                if (z11) {
                    fragment.mChildFragmentManager.T(z10, true);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean T0(Fragment fragment) {
        if (fragment == null) {
            return true;
        }
        return fragment.isMenuVisible();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean U(Menu menu) {
        boolean z10 = false;
        if (this.f4267w < 1) {
            return false;
        }
        for (Fragment fragment : this.f4247c.o()) {
            if (fragment != null && T0(fragment) && fragment.performPrepareOptionsMenu(menu)) {
                z10 = true;
            }
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean U0(Fragment fragment) {
        if (fragment == null) {
            return true;
        }
        FragmentManager fragmentManager = fragment.mFragmentManager;
        if (fragment.equals(fragmentManager.G0()) && U0(fragmentManager.f4270z)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V() {
        G1();
        R(this.A);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean V0(int i10) {
        if (this.f4267w >= i10) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        Y(7);
    }

    public boolean W0() {
        if (!this.K && !this.L) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        Y(5);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X0(Fragment fragment, String[] strArr, int i10) {
        if (this.H != null) {
            this.I.addLast(new m(fragment.mWho, i10));
            this.H.b(strArr);
            return;
        }
        this.f4268x.m(fragment, strArr, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y0(Fragment fragment, Intent intent, int i10, Bundle bundle) {
        if (this.F != null) {
            this.I.addLast(new m(fragment.mWho, i10));
            if (bundle != null) {
                intent.putExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE", bundle);
            }
            this.F.b(intent);
            return;
        }
        this.f4268x.o(fragment, intent, i10, bundle);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z() {
        this.L = true;
        this.R.p(true);
        Y(4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z0(Fragment fragment, IntentSender intentSender, int i10, Intent intent, int i11, int i12, int i13, Bundle bundle) {
        if (this.G != null) {
            if (bundle != null) {
                if (intent == null) {
                    intent = new Intent();
                    intent.putExtra("androidx.fragment.extra.ACTIVITY_OPTIONS_BUNDLE", true);
                }
                if (P0(2)) {
                    Log.v("FragmentManager", "ActivityOptions " + bundle + " were added to fillInIntent " + intent + " for fragment " + fragment);
                }
                intent.putExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE", bundle);
            }
            d.e a10 = new e.a(intentSender).b(intent).c(i12, i11).a();
            this.I.addLast(new m(fragment.mWho, i10));
            if (P0(2)) {
                Log.v("FragmentManager", "Fragment " + fragment + "is launching an IntentSender for result ");
            }
            this.G.b(a10);
            return;
        }
        this.f4268x.p(fragment, intentSender, i10, intent, i11, i12, i13, bundle);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a0() {
        Y(2);
    }

    void a1(int i10, boolean z10) {
        FragmentHostCallback fragmentHostCallback;
        if (this.f4268x == null && i10 != -1) {
            throw new IllegalStateException("No activity");
        }
        if (z10 || i10 != this.f4267w) {
            this.f4267w = i10;
            this.f4247c.t();
            E1();
            if (this.J && (fragmentHostCallback = this.f4268x) != null && this.f4267w == 7) {
                fragmentHostCallback.q();
                this.J = false;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b1() {
        if (this.f4268x != null) {
            this.K = false;
            this.L = false;
            this.R.p(false);
            for (Fragment fragment : this.f4247c.o()) {
                if (fragment != null) {
                    fragment.noteStateNotSaved();
                }
            }
        }
    }

    public void c0(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        int size;
        String str2 = str + "    ";
        this.f4247c.e(str, fileDescriptor, printWriter, strArr);
        ArrayList arrayList = this.f4249e;
        if (arrayList != null && (size = arrayList.size()) > 0) {
            printWriter.print(str);
            printWriter.println("Fragments Created Menus:");
            for (int i10 = 0; i10 < size; i10++) {
                printWriter.print(str);
                printWriter.print("  #");
                printWriter.print(i10);
                printWriter.print(": ");
                printWriter.println(((Fragment) this.f4249e.get(i10)).toString());
            }
        }
        int size2 = this.f4248d.size();
        if (size2 > 0) {
            printWriter.print(str);
            printWriter.println("Back Stack:");
            for (int i11 = 0; i11 < size2; i11++) {
                androidx.fragment.app.a aVar = (androidx.fragment.app.a) this.f4248d.get(i11);
                printWriter.print(str);
                printWriter.print("  #");
                printWriter.print(i11);
                printWriter.print(": ");
                printWriter.println(aVar.toString());
                aVar.z(str2, printWriter);
            }
        }
        printWriter.print(str);
        printWriter.println("Back Stack Index: " + this.f4255k.get());
        synchronized (this.f4245a) {
            try {
                int size3 = this.f4245a.size();
                if (size3 > 0) {
                    printWriter.print(str);
                    printWriter.println("Pending Actions:");
                    for (int i12 = 0; i12 < size3; i12++) {
                        printWriter.print(str);
                        printWriter.print("  #");
                        printWriter.print(i12);
                        printWriter.print(": ");
                        printWriter.println((p) this.f4245a.get(i12));
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        printWriter.print(str);
        printWriter.println("FragmentManager misc state:");
        printWriter.print(str);
        printWriter.print("  mHost=");
        printWriter.println(this.f4268x);
        printWriter.print(str);
        printWriter.print("  mContainer=");
        printWriter.println(this.f4269y);
        if (this.f4270z != null) {
            printWriter.print(str);
            printWriter.print("  mParent=");
            printWriter.println(this.f4270z);
        }
        printWriter.print(str);
        printWriter.print("  mCurState=");
        printWriter.print(this.f4267w);
        printWriter.print(" mStateSaved=");
        printWriter.print(this.K);
        printWriter.print(" mStopped=");
        printWriter.print(this.L);
        printWriter.print(" mDestroyed=");
        printWriter.println(this.M);
        if (this.J) {
            printWriter.print(str);
            printWriter.print("  mNeedMenuInvalidate=");
            printWriter.println(this.J);
        }
    }

    public final void c1(FragmentContainerView fragmentContainerView) {
        View view;
        for (k0 k0Var : this.f4247c.k()) {
            Fragment k10 = k0Var.k();
            if (k10.mContainerId == fragmentContainerView.getId() && (view = k10.mView) != null && view.getParent() == null) {
                k10.mContainer = fragmentContainerView;
                k0Var.b();
                k0Var.m();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d1(k0 k0Var) {
        Fragment k10 = k0Var.k();
        if (k10.mDeferStart) {
            if (this.f4246b) {
                this.N = true;
                return;
            }
            k10.mDeferStart = false;
            k0Var.m();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e0(p pVar, boolean z10) {
        if (!z10) {
            if (this.f4268x == null) {
                if (this.M) {
                    throw new IllegalStateException("FragmentManager has been destroyed");
                }
                throw new IllegalStateException("FragmentManager has not been attached to a host.");
            }
            v();
        }
        synchronized (this.f4245a) {
            try {
                if (this.f4268x == null) {
                    if (z10) {
                        return;
                    }
                    throw new IllegalStateException("Activity has been destroyed");
                }
                this.f4245a.add(pVar);
                w1();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void e1() {
        e0(new q(null, -1, 0), false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f1(int i10, int i11, boolean z10) {
        if (i10 >= 0) {
            e0(new q(null, i10, i11), z10);
            return;
        }
        throw new IllegalArgumentException("Bad id: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean g0(boolean z10) {
        androidx.fragment.app.a aVar;
        f0(z10);
        boolean z11 = false;
        if (!this.f4253i && (aVar = this.f4252h) != null) {
            aVar.f4330u = false;
            aVar.x();
            if (P0(3)) {
                Log.d("FragmentManager", "Reversing mTransitioningOp " + this.f4252h + " as part of execPendingActions for actions " + this.f4245a);
            }
            this.f4252h.y(false, false);
            this.f4245a.add(0, this.f4252h);
            Iterator it = this.f4252h.f4297c.iterator();
            while (it.hasNext()) {
                Fragment fragment = ((FragmentTransaction.a) it.next()).f4315b;
                if (fragment != null) {
                    fragment.mTransitioning = false;
                }
            }
            this.f4252h = null;
        }
        while (v0(this.O, this.P)) {
            z11 = true;
            this.f4246b = true;
            try {
                q1(this.O, this.P);
            } finally {
                w();
            }
        }
        G1();
        b0();
        this.f4247c.b();
        return z11;
    }

    public void g1(String str, int i10) {
        e0(new q(str, -1, i10), false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h0(p pVar, boolean z10) {
        if (z10 && (this.f4268x == null || this.M)) {
            return;
        }
        f0(z10);
        androidx.fragment.app.a aVar = this.f4252h;
        boolean z11 = false;
        if (aVar != null) {
            aVar.f4330u = false;
            aVar.x();
            if (P0(3)) {
                Log.d("FragmentManager", "Reversing mTransitioningOp " + this.f4252h + " as part of execSingleAction for action " + pVar);
            }
            this.f4252h.y(false, false);
            boolean a10 = this.f4252h.a(this.O, this.P);
            Iterator it = this.f4252h.f4297c.iterator();
            while (it.hasNext()) {
                Fragment fragment = ((FragmentTransaction.a) it.next()).f4315b;
                if (fragment != null) {
                    fragment.mTransitioning = false;
                }
            }
            this.f4252h = null;
            z11 = a10;
        }
        boolean a11 = pVar.a(this.O, this.P);
        if (z11 || a11) {
            this.f4246b = true;
            try {
                q1(this.O, this.P);
            } finally {
                w();
            }
        }
        G1();
        b0();
        this.f4247c.b();
    }

    public boolean h1() {
        return j1(null, -1, 0);
    }

    public boolean i1(int i10, int i11) {
        if (i10 >= 0) {
            return j1(null, i10, i11);
        }
        throw new IllegalArgumentException("Bad id: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(androidx.fragment.app.a aVar) {
        this.f4248d.add(aVar);
    }

    public boolean k0() {
        boolean g02 = g0(true);
        t0();
        return g02;
    }

    boolean k1(ArrayList arrayList, ArrayList arrayList2, String str, int i10, int i11) {
        boolean z10;
        if ((i11 & 1) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        int m02 = m0(str, i10, z10);
        if (m02 < 0) {
            return false;
        }
        for (int size = this.f4248d.size() - 1; size >= m02; size--) {
            arrayList.add((androidx.fragment.app.a) this.f4248d.remove(size));
            arrayList2.add(Boolean.TRUE);
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0 l(Fragment fragment) {
        String str = fragment.mPreviousWho;
        if (str != null) {
            g3.c.f(fragment, str);
        }
        if (P0(2)) {
            Log.v("FragmentManager", "add: " + fragment);
        }
        k0 B = B(fragment);
        fragment.mFragmentManager = this;
        this.f4247c.r(B);
        if (!fragment.mDetached) {
            this.f4247c.a(fragment);
            fragment.mRemoving = false;
            if (fragment.mView == null) {
                fragment.mHiddenChanged = false;
            }
            if (Q0(fragment)) {
                this.J = true;
            }
        }
        return B;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment l0(String str) {
        return this.f4247c.f(str);
    }

    boolean l1(ArrayList arrayList, ArrayList arrayList2) {
        if (P0(2)) {
            Log.v("FragmentManager", "FragmentManager has the following pending actions inside of prepareBackStackState: " + this.f4245a);
        }
        if (this.f4248d.isEmpty()) {
            Log.i("FragmentManager", "Ignoring call to start back stack pop because the back stack is empty.");
            return false;
        }
        ArrayList arrayList3 = this.f4248d;
        androidx.fragment.app.a aVar = (androidx.fragment.app.a) arrayList3.get(arrayList3.size() - 1);
        this.f4252h = aVar;
        Iterator it = aVar.f4297c.iterator();
        while (it.hasNext()) {
            Fragment fragment = ((FragmentTransaction.a) it.next()).f4315b;
            if (fragment != null) {
                fragment.mTransitioning = true;
            }
        }
        return k1(arrayList, arrayList2, null, -1, 0);
    }

    public void m(h0 h0Var) {
        this.f4261q.add(h0Var);
    }

    void m1() {
        e0(new r(), false);
    }

    public void n(o oVar) {
        this.f4259o.add(oVar);
    }

    public void n1(l lVar, boolean z10) {
        this.f4260p.o(lVar, z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(Fragment fragment) {
        this.R.e(fragment);
    }

    public Fragment o0(int i10) {
        return this.f4247c.g(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o1(Fragment fragment) {
        if (P0(2)) {
            Log.v("FragmentManager", "remove: " + fragment + " nesting=" + fragment.mBackStackNesting);
        }
        boolean isInBackStack = fragment.isInBackStack();
        if (fragment.mDetached && isInBackStack) {
            return;
        }
        this.f4247c.u(fragment);
        if (Q0(fragment)) {
            this.J = true;
        }
        fragment.mRemoving = true;
        C1(fragment);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int p() {
        return this.f4255k.getAndIncrement();
    }

    public Fragment p0(String str) {
        return this.f4247c.h(str);
    }

    public void p1(o oVar) {
        this.f4259o.remove(oVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(FragmentHostCallback fragmentHostCallback, FragmentContainer fragmentContainer, Fragment fragment) {
        String str;
        if (this.f4268x == null) {
            this.f4268x = fragmentHostCallback;
            this.f4269y = fragmentContainer;
            this.f4270z = fragment;
            if (fragment != null) {
                m(new h(fragment));
            } else if (fragmentHostCallback instanceof h0) {
                m((h0) fragmentHostCallback);
            }
            if (this.f4270z != null) {
                G1();
            }
            if (fragmentHostCallback instanceof androidx.activity.z) {
                androidx.activity.z zVar = (androidx.activity.z) fragmentHostCallback;
                OnBackPressedDispatcher onBackPressedDispatcher = zVar.getOnBackPressedDispatcher();
                this.f4251g = onBackPressedDispatcher;
                LifecycleOwner lifecycleOwner = zVar;
                if (fragment != null) {
                    lifecycleOwner = fragment;
                }
                onBackPressedDispatcher.h(lifecycleOwner, this.f4254j);
            }
            if (fragment != null) {
                this.R = fragment.mFragmentManager.x0(fragment);
            } else if (fragmentHostCallback instanceof androidx.lifecycle.q0) {
                this.R = g0.k(((androidx.lifecycle.q0) fragmentHostCallback).getViewModelStore());
            } else {
                this.R = new g0(false);
            }
            this.R.p(W0());
            this.f4247c.A(this.R);
            FragmentHostCallback fragmentHostCallback2 = this.f4268x;
            if ((fragmentHostCallback2 instanceof u3.f) && fragment == null) {
                SavedStateRegistry savedStateRegistry = ((u3.f) fragmentHostCallback2).getSavedStateRegistry();
                savedStateRegistry.c("android:support:fragments", new SavedStateRegistry.b() { // from class: androidx.fragment.app.c0
                    @Override // androidx.savedstate.SavedStateRegistry.b
                    public final Bundle a() {
                        Bundle v12;
                        v12 = FragmentManager.this.v1();
                        return v12;
                    }
                });
                Bundle a10 = savedStateRegistry.a("android:support:fragments");
                if (a10 != null) {
                    t1(a10);
                }
            }
            FragmentHostCallback fragmentHostCallback3 = this.f4268x;
            if (fragmentHostCallback3 instanceof d.d) {
                ActivityResultRegistry activityResultRegistry = ((d.d) fragmentHostCallback3).getActivityResultRegistry();
                if (fragment != null) {
                    str = fragment.mWho + ":";
                } else {
                    str = "";
                }
                String str2 = "FragmentManager:" + str;
                this.F = activityResultRegistry.l(str2 + "StartActivityForResult", new e.a(), new i());
                this.G = activityResultRegistry.l(str2 + "StartIntentSenderForResult", new k(), new j());
                this.H = activityResultRegistry.l(str2 + "RequestPermissions", new androidx.activity.result.contract.f(), new a());
            }
            FragmentHostCallback fragmentHostCallback4 = this.f4268x;
            if (fragmentHostCallback4 instanceof androidx.core.content.d) {
                ((androidx.core.content.d) fragmentHostCallback4).addOnConfigurationChangedListener(this.f4262r);
            }
            FragmentHostCallback fragmentHostCallback5 = this.f4268x;
            if (fragmentHostCallback5 instanceof androidx.core.content.e) {
                ((androidx.core.content.e) fragmentHostCallback5).addOnTrimMemoryListener(this.f4263s);
            }
            FragmentHostCallback fragmentHostCallback6 = this.f4268x;
            if (fragmentHostCallback6 instanceof androidx.core.app.s) {
                ((androidx.core.app.s) fragmentHostCallback6).addOnMultiWindowModeChangedListener(this.f4264t);
            }
            FragmentHostCallback fragmentHostCallback7 = this.f4268x;
            if (fragmentHostCallback7 instanceof androidx.core.app.t) {
                ((androidx.core.app.t) fragmentHostCallback7).addOnPictureInPictureModeChangedListener(this.f4265u);
            }
            FragmentHostCallback fragmentHostCallback8 = this.f4268x;
            if ((fragmentHostCallback8 instanceof androidx.core.view.n) && fragment == null) {
                ((androidx.core.view.n) fragmentHostCallback8).addMenuProvider(this.f4266v);
                return;
            }
            return;
        }
        throw new IllegalStateException("Already attached");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment q0(String str) {
        return this.f4247c.i(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(Fragment fragment) {
        if (P0(2)) {
            Log.v("FragmentManager", "attach: " + fragment);
        }
        if (fragment.mDetached) {
            fragment.mDetached = false;
            if (!fragment.mAdded) {
                this.f4247c.a(fragment);
                if (P0(2)) {
                    Log.v("FragmentManager", "add from attach: " + fragment);
                }
                if (Q0(fragment)) {
                    this.J = true;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r1(Fragment fragment) {
        this.R.o(fragment);
    }

    public FragmentTransaction s() {
        return new androidx.fragment.app.a(this);
    }

    void t() {
        if (P0(3)) {
            Log.d("FragmentManager", "cancelBackStackTransition for transition " + this.f4252h);
        }
        androidx.fragment.app.a aVar = this.f4252h;
        if (aVar != null) {
            aVar.f4330u = false;
            aVar.x();
            this.f4252h.r(true, new Runnable() { // from class: androidx.fragment.app.d0
                @Override // java.lang.Runnable
                public final void run() {
                    FragmentManager.c(FragmentManager.this);
                }
            });
            this.f4252h.h();
            this.f4253i = true;
            k0();
            this.f4253i = false;
            this.f4252h = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t1(Parcelable parcelable) {
        k0 k0Var;
        Bundle bundle;
        Bundle bundle2;
        if (parcelable != null) {
            Bundle bundle3 = (Bundle) parcelable;
            for (String str : bundle3.keySet()) {
                if (str.startsWith("result_") && (bundle2 = bundle3.getBundle(str)) != null) {
                    bundle2.setClassLoader(this.f4268x.g().getClassLoader());
                    this.f4257m.put(str.substring(7), bundle2);
                }
            }
            HashMap hashMap = new HashMap();
            for (String str2 : bundle3.keySet()) {
                if (str2.startsWith("fragment_") && (bundle = bundle3.getBundle(str2)) != null) {
                    bundle.setClassLoader(this.f4268x.g().getClassLoader());
                    hashMap.put(str2.substring(9), bundle);
                }
            }
            this.f4247c.x(hashMap);
            f0 f0Var = (f0) bundle3.getParcelable("state");
            if (f0Var == null) {
                return;
            }
            this.f4247c.v();
            Iterator it = f0Var.f4405d.iterator();
            while (it.hasNext()) {
                Bundle B = this.f4247c.B((String) it.next(), null);
                if (B != null) {
                    Fragment i10 = this.R.i(((j0) B.getParcelable("state")).f4430e);
                    if (i10 != null) {
                        if (P0(2)) {
                            Log.v("FragmentManager", "restoreSaveState: re-attaching retained " + i10);
                        }
                        k0Var = new k0(this.f4260p, this.f4247c, i10, B);
                    } else {
                        k0Var = new k0(this.f4260p, this.f4247c, this.f4268x.g().getClassLoader(), A0(), B);
                    }
                    Fragment k10 = k0Var.k();
                    k10.mSavedFragmentState = B;
                    k10.mFragmentManager = this;
                    if (P0(2)) {
                        Log.v("FragmentManager", "restoreSaveState: active (" + k10.mWho + "): " + k10);
                    }
                    k0Var.o(this.f4268x.g().getClassLoader());
                    this.f4247c.r(k0Var);
                    k0Var.s(this.f4267w);
                }
            }
            for (Fragment fragment : this.R.l()) {
                if (!this.f4247c.c(fragment.mWho)) {
                    if (P0(2)) {
                        Log.v("FragmentManager", "Discarding retained Fragment " + fragment + " that was not found in the set of active Fragments " + f0Var.f4405d);
                    }
                    this.R.o(fragment);
                    fragment.mFragmentManager = this;
                    k0 k0Var2 = new k0(this.f4260p, this.f4247c, fragment);
                    k0Var2.s(1);
                    k0Var2.m();
                    fragment.mRemoving = true;
                    k0Var2.m();
                }
            }
            this.f4247c.w(f0Var.f4406e);
            if (f0Var.f4407i != null) {
                this.f4248d = new ArrayList(f0Var.f4407i.length);
                int i11 = 0;
                while (true) {
                    androidx.fragment.app.b[] bVarArr = f0Var.f4407i;
                    if (i11 >= bVarArr.length) {
                        break;
                    }
                    androidx.fragment.app.a b10 = bVarArr[i11].b(this);
                    if (P0(2)) {
                        Log.v("FragmentManager", "restoreAllState: back stack #" + i11 + " (index " + b10.f4331v + "): " + b10);
                        PrintWriter printWriter = new PrintWriter(new q0("FragmentManager"));
                        b10.A("  ", printWriter, false);
                        printWriter.close();
                    }
                    this.f4248d.add(b10);
                    i11++;
                }
            } else {
                this.f4248d = new ArrayList();
            }
            this.f4255k.set(f0Var.f4408o);
            String str3 = f0Var.f4409p;
            if (str3 != null) {
                Fragment l02 = l0(str3);
                this.A = l02;
                R(l02);
            }
            ArrayList arrayList = f0Var.f4410q;
            if (arrayList != null) {
                for (int i12 = 0; i12 < arrayList.size(); i12++) {
                    this.f4256l.put((String) arrayList.get(i12), (androidx.fragment.app.c) f0Var.f4411r.get(i12));
                }
            }
            this.I = new ArrayDeque(f0Var.f4412s);
        }
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("FragmentManager{");
        sb2.append(Integer.toHexString(System.identityHashCode(this)));
        sb2.append(" in ");
        Fragment fragment = this.f4270z;
        if (fragment != null) {
            sb2.append(fragment.getClass().getSimpleName());
            sb2.append("{");
            sb2.append(Integer.toHexString(System.identityHashCode(this.f4270z)));
            sb2.append("}");
        } else {
            FragmentHostCallback fragmentHostCallback = this.f4268x;
            if (fragmentHostCallback != null) {
                sb2.append(fragmentHostCallback.getClass().getSimpleName());
                sb2.append("{");
                sb2.append(Integer.toHexString(System.identityHashCode(this.f4268x)));
                sb2.append("}");
            } else {
                sb2.append("null");
            }
        }
        sb2.append("}}");
        return sb2.toString();
    }

    boolean u() {
        boolean z10 = false;
        for (Fragment fragment : this.f4247c.l()) {
            if (fragment != null) {
                z10 = Q0(fragment);
                continue;
            }
            if (z10) {
                return true;
            }
        }
        return false;
    }

    Set u0(androidx.fragment.app.a aVar) {
        HashSet hashSet = new HashSet();
        for (int i10 = 0; i10 < aVar.f4297c.size(); i10++) {
            Fragment fragment = ((FragmentTransaction.a) aVar.f4297c.get(i10)).f4315b;
            if (fragment != null && aVar.f4303i) {
                hashSet.add(fragment);
            }
        }
        return hashSet;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle v1() {
        androidx.fragment.app.b[] bVarArr;
        Bundle bundle = new Bundle();
        t0();
        d0();
        g0(true);
        this.K = true;
        this.R.p(true);
        ArrayList y10 = this.f4247c.y();
        HashMap m10 = this.f4247c.m();
        if (m10.isEmpty()) {
            if (P0(2)) {
                Log.v("FragmentManager", "saveAllState: no fragments!");
                return bundle;
            }
        } else {
            ArrayList z10 = this.f4247c.z();
            int size = this.f4248d.size();
            if (size > 0) {
                bVarArr = new androidx.fragment.app.b[size];
                for (int i10 = 0; i10 < size; i10++) {
                    bVarArr[i10] = new androidx.fragment.app.b((androidx.fragment.app.a) this.f4248d.get(i10));
                    if (P0(2)) {
                        Log.v("FragmentManager", "saveAllState: adding back stack #" + i10 + ": " + this.f4248d.get(i10));
                    }
                }
            } else {
                bVarArr = null;
            }
            f0 f0Var = new f0();
            f0Var.f4405d = y10;
            f0Var.f4406e = z10;
            f0Var.f4407i = bVarArr;
            f0Var.f4408o = this.f4255k.get();
            Fragment fragment = this.A;
            if (fragment != null) {
                f0Var.f4409p = fragment.mWho;
            }
            f0Var.f4410q.addAll(this.f4256l.keySet());
            f0Var.f4411r.addAll(this.f4256l.values());
            f0Var.f4412s = new ArrayList(this.I);
            bundle.putParcelable("state", f0Var);
            for (String str : this.f4257m.keySet()) {
                bundle.putBundle("result_" + str, (Bundle) this.f4257m.get(str));
            }
            for (String str2 : m10.keySet()) {
                bundle.putBundle("fragment_" + str2, (Bundle) m10.get(str2));
            }
        }
        return bundle;
    }

    public int w0() {
        int i10;
        int size = this.f4248d.size();
        if (this.f4252h != null) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        return size + i10;
    }

    void w1() {
        synchronized (this.f4245a) {
            try {
                if (this.f4245a.size() == 1) {
                    this.f4268x.i().removeCallbacks(this.T);
                    this.f4268x.i().post(this.T);
                    G1();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x1(Fragment fragment, boolean z10) {
        ViewGroup z02 = z0(fragment);
        if (z02 != null && (z02 instanceof FragmentContainerView)) {
            ((FragmentContainerView) z02).setDrawDisappearingViewsLast(!z10);
        }
    }

    public final void y(String str) {
        this.f4257m.remove(str);
        if (P0(2)) {
            Log.v("FragmentManager", "Clearing fragment result with key " + str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FragmentContainer y0() {
        return this.f4269y;
    }

    public final void y1(String str, Bundle bundle) {
        n nVar = (n) this.f4258n.get(str);
        if (nVar != null && nVar.b(Lifecycle.State.f4556o)) {
            nVar.a(str, bundle);
        } else {
            this.f4257m.put(str, bundle);
        }
        if (P0(2)) {
            Log.v("FragmentManager", "Setting fragment result with key " + str + " and result " + bundle);
        }
    }

    public final void z1(String str, LifecycleOwner lifecycleOwner, i0 i0Var) {
        Lifecycle lifecycle = lifecycleOwner.getLifecycle();
        if (lifecycle.b() == Lifecycle.State.f4553d) {
            return;
        }
        g gVar = new g(str, i0Var, lifecycle);
        n nVar = (n) this.f4258n.put(str, new n(lifecycle, i0Var, gVar));
        if (nVar != null) {
            nVar.c();
        }
        if (P0(2)) {
            Log.v("FragmentManager", "Setting FragmentResultListener with key " + str + " lifecycleOwner " + lifecycle + " and listener " + i0Var);
        }
        lifecycle.a(gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class m implements Parcelable {
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        String f4285d;

        /* renamed from: e  reason: collision with root package name */
        int f4286e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.Creator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public m createFromParcel(Parcel parcel) {
                return new m(parcel);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public m[] newArray(int i10) {
                return new m[i10];
            }
        }

        m(String str, int i10) {
            this.f4285d = str;
            this.f4286e = i10;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f4285d);
            parcel.writeInt(this.f4286e);
        }

        m(Parcel parcel) {
            this.f4285d = parcel.readString();
            this.f4286e = parcel.readInt();
        }
    }
}
