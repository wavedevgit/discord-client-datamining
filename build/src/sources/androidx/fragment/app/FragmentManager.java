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
    private c.C0334c S;

    /* renamed from: b  reason: collision with root package name */
    private boolean f4539b;

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f4542e;

    /* renamed from: g  reason: collision with root package name */
    private OnBackPressedDispatcher f4544g;

    /* renamed from: x  reason: collision with root package name */
    private FragmentHostCallback f4561x;

    /* renamed from: y  reason: collision with root package name */
    private FragmentContainer f4562y;

    /* renamed from: z  reason: collision with root package name */
    private Fragment f4563z;

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f4538a = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final l0 f4540c = new l0();

    /* renamed from: d  reason: collision with root package name */
    ArrayList f4541d = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    private final w f4543f = new w(this);

    /* renamed from: h  reason: collision with root package name */
    androidx.fragment.app.a f4545h = null;

    /* renamed from: i  reason: collision with root package name */
    boolean f4546i = false;

    /* renamed from: j  reason: collision with root package name */
    private final OnBackPressedCallback f4547j = new b(false);

    /* renamed from: k  reason: collision with root package name */
    private final AtomicInteger f4548k = new AtomicInteger();

    /* renamed from: l  reason: collision with root package name */
    private final Map f4549l = Collections.synchronizedMap(new HashMap());

    /* renamed from: m  reason: collision with root package name */
    private final Map f4550m = Collections.synchronizedMap(new HashMap());

    /* renamed from: n  reason: collision with root package name */
    private final Map f4551n = Collections.synchronizedMap(new HashMap());

    /* renamed from: o  reason: collision with root package name */
    ArrayList f4552o = new ArrayList();

    /* renamed from: p  reason: collision with root package name */
    private final x f4553p = new x(this);

    /* renamed from: q  reason: collision with root package name */
    private final CopyOnWriteArrayList f4554q = new CopyOnWriteArrayList();

    /* renamed from: r  reason: collision with root package name */
    private final Consumer f4555r = new Consumer() { // from class: androidx.fragment.app.y
        @Override // androidx.core.util.Consumer
        public final void accept(Object obj) {
            FragmentManager.f(FragmentManager.this, (Configuration) obj);
        }
    };

    /* renamed from: s  reason: collision with root package name */
    private final Consumer f4556s = new Consumer() { // from class: androidx.fragment.app.z
        @Override // androidx.core.util.Consumer
        public final void accept(Object obj) {
            FragmentManager.a(FragmentManager.this, (Integer) obj);
        }
    };

    /* renamed from: t  reason: collision with root package name */
    private final Consumer f4557t = new Consumer() { // from class: androidx.fragment.app.a0
        @Override // androidx.core.util.Consumer
        public final void accept(Object obj) {
            FragmentManager.e(FragmentManager.this, (androidx.core.app.h) obj);
        }
    };

    /* renamed from: u  reason: collision with root package name */
    private final Consumer f4558u = new Consumer() { // from class: androidx.fragment.app.b0
        @Override // androidx.core.util.Consumer
        public final void accept(Object obj) {
            FragmentManager.d(FragmentManager.this, (androidx.core.app.v) obj);
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private final MenuProvider f4559v = new c();

    /* renamed from: w  reason: collision with root package name */
    int f4560w = -1;
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
            String str = mVar.f4578d;
            int i12 = mVar.f4579e;
            Fragment i13 = FragmentManager.this.f4540c.i(str);
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
            if (FragmentManager.O0(3)) {
                Log.d("FragmentManager", "handleOnBackCancelled. PREDICTIVE_BACK = " + FragmentManager.V + " fragment manager " + FragmentManager.this);
            }
            if (FragmentManager.V) {
                FragmentManager.this.s();
            }
        }

        @Override // androidx.activity.OnBackPressedCallback
        public void handleOnBackPressed() {
            if (FragmentManager.O0(3)) {
                Log.d("FragmentManager", "handleOnBackPressed. PREDICTIVE_BACK = " + FragmentManager.V + " fragment manager " + FragmentManager.this);
            }
            FragmentManager.this.K0();
        }

        @Override // androidx.activity.OnBackPressedCallback
        public void handleOnBackProgressed(BackEventCompat backEventCompat) {
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "handleOnBackProgressed. PREDICTIVE_BACK = " + FragmentManager.V + " fragment manager " + FragmentManager.this);
            }
            FragmentManager fragmentManager = FragmentManager.this;
            if (fragmentManager.f4545h != null) {
                for (t0 t0Var : fragmentManager.z(new ArrayList(Collections.singletonList(FragmentManager.this.f4545h)), 0, 1)) {
                    t0Var.A(backEventCompat);
                }
                Iterator it = FragmentManager.this.f4552o.iterator();
                if (it.hasNext()) {
                    android.support.v4.media.session.b.a(it.next());
                    throw null;
                }
            }
        }

        @Override // androidx.activity.OnBackPressedCallback
        public void handleOnBackStarted(BackEventCompat backEventCompat) {
            if (FragmentManager.O0(3)) {
                Log.d("FragmentManager", "handleOnBackStarted. PREDICTIVE_BACK = " + FragmentManager.V + " fragment manager " + FragmentManager.this);
            }
            if (FragmentManager.V) {
                FragmentManager.this.c0();
                FragmentManager.this.k1();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements MenuProvider {
        c() {
        }

        @Override // androidx.core.view.MenuProvider
        public void a(Menu menu) {
            FragmentManager.this.P(menu);
        }

        @Override // androidx.core.view.MenuProvider
        public void b(Menu menu) {
            FragmentManager.this.T(menu);
        }

        @Override // androidx.core.view.MenuProvider
        public boolean c(MenuItem menuItem) {
            return FragmentManager.this.O(menuItem);
        }

        @Override // androidx.core.view.MenuProvider
        public void d(Menu menu, MenuInflater menuInflater) {
            FragmentManager.this.H(menu, menuInflater);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d extends u {
        d() {
        }

        @Override // androidx.fragment.app.u
        public Fragment a(ClassLoader classLoader, String str) {
            return FragmentManager.this.B0().b(FragmentManager.this.B0().g(), str, null);
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
            FragmentManager.this.f0(true);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class g implements androidx.lifecycle.m {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f4570d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ i0 f4571e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Lifecycle f4572i;

        g(String str, i0 i0Var, Lifecycle lifecycle) {
            this.f4570d = str;
            this.f4571e = i0Var;
            this.f4572i = lifecycle;
        }

        @Override // androidx.lifecycle.m
        public void k(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
            Bundle bundle;
            if (aVar == Lifecycle.a.ON_START && (bundle = (Bundle) FragmentManager.this.f4550m.get(this.f4570d)) != null) {
                this.f4571e.a(this.f4570d, bundle);
                FragmentManager.this.x(this.f4570d);
            }
            if (aVar == Lifecycle.a.ON_DESTROY) {
                this.f4572i.d(this);
                FragmentManager.this.f4551n.remove(this.f4570d);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class h implements h0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Fragment f4574d;

        h(Fragment fragment) {
            this.f4574d = fragment;
        }

        @Override // androidx.fragment.app.h0
        public void a(FragmentManager fragmentManager, Fragment fragment) {
            this.f4574d.onAttachFragment(fragment);
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
            String str = mVar.f4578d;
            int i10 = mVar.f4579e;
            Fragment i11 = FragmentManager.this.f4540c.i(str);
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
            String str = mVar.f4578d;
            int i10 = mVar.f4579e;
            Fragment i11 = FragmentManager.this.f4540c.i(str);
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
            if (FragmentManager.O0(2)) {
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
        private final Lifecycle f4580a;

        /* renamed from: b  reason: collision with root package name */
        private final i0 f4581b;

        /* renamed from: c  reason: collision with root package name */
        private final androidx.lifecycle.m f4582c;

        n(Lifecycle lifecycle, i0 i0Var, androidx.lifecycle.m mVar) {
            this.f4580a = lifecycle;
            this.f4581b = i0Var;
            this.f4582c = mVar;
        }

        @Override // androidx.fragment.app.i0
        public void a(String str, Bundle bundle) {
            this.f4581b.a(str, bundle);
        }

        public boolean b(Lifecycle.State state) {
            return this.f4580a.b().d(state);
        }

        public void c() {
            this.f4580a.d(this.f4582c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface o {
        boolean a(ArrayList arrayList, ArrayList arrayList2);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class p implements o {

        /* renamed from: a  reason: collision with root package name */
        final String f4583a;

        /* renamed from: b  reason: collision with root package name */
        final int f4584b;

        /* renamed from: c  reason: collision with root package name */
        final int f4585c;

        p(String str, int i10, int i11) {
            this.f4583a = str;
            this.f4584b = i10;
            this.f4585c = i11;
        }

        @Override // androidx.fragment.app.FragmentManager.o
        public boolean a(ArrayList arrayList, ArrayList arrayList2) {
            Fragment fragment = FragmentManager.this.A;
            if (fragment != null && this.f4584b < 0 && this.f4583a == null && fragment.getChildFragmentManager().f1()) {
                return false;
            }
            return FragmentManager.this.i1(arrayList, arrayList2, this.f4583a, this.f4584b, this.f4585c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class q implements o {
        q() {
        }

        @Override // androidx.fragment.app.FragmentManager.o
        public boolean a(ArrayList arrayList, ArrayList arrayList2) {
            boolean j12 = FragmentManager.this.j1(arrayList, arrayList2);
            if (!FragmentManager.this.f4552o.isEmpty() && arrayList.size() > 0) {
                ((Boolean) arrayList2.get(arrayList.size() - 1)).booleanValue();
                LinkedHashSet linkedHashSet = new LinkedHashSet();
                Iterator it = arrayList.iterator();
                while (it.hasNext()) {
                    linkedHashSet.addAll(FragmentManager.this.t0((androidx.fragment.app.a) it.next()));
                }
                Iterator it2 = FragmentManager.this.f4552o.iterator();
                while (it2.hasNext()) {
                    android.support.v4.media.session.b.a(it2.next());
                    Iterator it3 = linkedHashSet.iterator();
                    if (it3.hasNext()) {
                        Fragment fragment = (Fragment) it3.next();
                        throw null;
                    }
                }
            }
            return j12;
        }
    }

    private void B1() {
        for (k0 k0Var : this.f4540c.k()) {
            c1(k0Var);
        }
    }

    private void C1(RuntimeException runtimeException) {
        Log.e("FragmentManager", runtimeException.getMessage());
        Log.e("FragmentManager", "Activity state:");
        PrintWriter printWriter = new PrintWriter(new q0("FragmentManager"));
        FragmentHostCallback fragmentHostCallback = this.f4561x;
        if (fragmentHostCallback != null) {
            try {
                fragmentHostCallback.j("  ", null, printWriter, new String[0]);
            } catch (Exception e10) {
                Log.e("FragmentManager", "Failed dumping state", e10);
            }
        } else {
            try {
                b0("  ", null, printWriter, new String[0]);
            } catch (Exception e11) {
                Log.e("FragmentManager", "Failed dumping state", e11);
            }
        }
        throw runtimeException;
    }

    private void D1() {
        synchronized (this.f4538a) {
            try {
                boolean z10 = true;
                if (!this.f4538a.isEmpty()) {
                    this.f4547j.setEnabled(true);
                    if (O0(3)) {
                        Log.d("FragmentManager", "FragmentManager " + this + " enabling OnBackPressedCallback, caused by non-empty pending actions");
                    }
                    return;
                }
                z10 = (v0() <= 0 || !T0(this.f4563z)) ? false : false;
                if (O0(3)) {
                    Log.d("FragmentManager", "OnBackPressedCallback for FragmentManager " + this + " enabled state is " + z10);
                }
                this.f4547j.setEnabled(z10);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Fragment I0(View view) {
        Object tag = view.getTag(f3.b.f22473a);
        if (tag instanceof Fragment) {
            return (Fragment) tag;
        }
        return null;
    }

    public static boolean O0(int i10) {
        if (!U && !Log.isLoggable("FragmentManager", i10)) {
            return false;
        }
        return true;
    }

    private boolean P0(Fragment fragment) {
        if ((fragment.mHasMenu && fragment.mMenuVisible) || fragment.mChildFragmentManager.t()) {
            return true;
        }
        return false;
    }

    private void Q(Fragment fragment) {
        if (fragment != null && fragment.equals(k0(fragment.mWho))) {
            fragment.performPrimaryNavigationFragmentChanged();
        }
    }

    private boolean Q0() {
        Fragment fragment = this.f4563z;
        if (fragment == null) {
            return true;
        }
        if (fragment.isAdded() && this.f4563z.getParentFragmentManager().Q0()) {
            return true;
        }
        return false;
    }

    private void X(int i10) {
        try {
            this.f4539b = true;
            this.f4540c.d(i10);
            Z0(i10, false);
            for (t0 t0Var : y()) {
                t0Var.q();
            }
            this.f4539b = false;
            f0(true);
        } catch (Throwable th2) {
            this.f4539b = false;
            throw th2;
        }
    }

    public static /* synthetic */ void a(FragmentManager fragmentManager, Integer num) {
        if (fragmentManager.Q0() && num.intValue() == 80) {
            fragmentManager.K(false);
        }
    }

    private void a0() {
        if (this.N) {
            this.N = false;
            B1();
        }
    }

    public static /* synthetic */ void c(FragmentManager fragmentManager) {
        Iterator it = fragmentManager.f4552o.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c0() {
        for (t0 t0Var : y()) {
            t0Var.q();
        }
    }

    public static /* synthetic */ void d(FragmentManager fragmentManager, androidx.core.app.v vVar) {
        if (fragmentManager.Q0()) {
            fragmentManager.S(vVar.a(), false);
        }
    }

    public static /* synthetic */ void e(FragmentManager fragmentManager, androidx.core.app.h hVar) {
        if (fragmentManager.Q0()) {
            fragmentManager.L(hVar.a(), false);
        }
    }

    private void e0(boolean z10) {
        if (!this.f4539b) {
            if (this.f4561x == null) {
                if (this.M) {
                    throw new IllegalStateException("FragmentManager has been destroyed");
                }
                throw new IllegalStateException("FragmentManager has not been attached to a host.");
            } else if (Looper.myLooper() == this.f4561x.i().getLooper()) {
                if (!z10) {
                    u();
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

    public static /* synthetic */ void f(FragmentManager fragmentManager, Configuration configuration) {
        if (fragmentManager.Q0()) {
            fragmentManager.E(configuration, false);
        }
    }

    private static void h0(ArrayList arrayList, ArrayList arrayList2, int i10, int i11) {
        while (i10 < i11) {
            androidx.fragment.app.a aVar = (androidx.fragment.app.a) arrayList.get(i10);
            if (((Boolean) arrayList2.get(i10)).booleanValue()) {
                aVar.u(-1);
                aVar.A();
            } else {
                aVar.u(1);
                aVar.z();
            }
            i10++;
        }
    }

    private boolean h1(String str, int i10, int i11) {
        f0(false);
        e0(true);
        Fragment fragment = this.A;
        if (fragment != null && i10 < 0 && str == null && fragment.getChildFragmentManager().f1()) {
            return true;
        }
        boolean i12 = i1(this.O, this.P, str, i10, i11);
        if (i12) {
            this.f4539b = true;
            try {
                n1(this.O, this.P);
            } finally {
                v();
            }
        }
        D1();
        a0();
        this.f4540c.b();
        return i12;
    }

    private void i0(ArrayList arrayList, ArrayList arrayList2, int i10, int i11) {
        boolean z10 = ((androidx.fragment.app.a) arrayList.get(i10)).f4605r;
        ArrayList arrayList3 = this.Q;
        if (arrayList3 == null) {
            this.Q = new ArrayList();
        } else {
            arrayList3.clear();
        }
        this.Q.addAll(this.f4540c.o());
        Fragment F0 = F0();
        boolean z11 = false;
        for (int i12 = i10; i12 < i11; i12++) {
            androidx.fragment.app.a aVar = (androidx.fragment.app.a) arrayList.get(i12);
            if (!((Boolean) arrayList2.get(i12)).booleanValue()) {
                F0 = aVar.B(this.Q, F0);
            } else {
                F0 = aVar.E(this.Q, F0);
            }
            if (!z11 && !aVar.f4596i) {
                z11 = false;
            } else {
                z11 = true;
            }
        }
        this.Q.clear();
        if (!z10 && this.f4560w >= 1) {
            for (int i13 = i10; i13 < i11; i13++) {
                Iterator it = ((androidx.fragment.app.a) arrayList.get(i13)).f4590c.iterator();
                while (it.hasNext()) {
                    Fragment fragment = ((FragmentTransaction.a) it.next()).f4608b;
                    if (fragment != null && fragment.mFragmentManager != null) {
                        this.f4540c.r(A(fragment));
                    }
                }
            }
        }
        h0(arrayList, arrayList2, i10, i11);
        boolean booleanValue = ((Boolean) arrayList2.get(i11 - 1)).booleanValue();
        if (z11 && !this.f4552o.isEmpty()) {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            Iterator it2 = arrayList.iterator();
            while (it2.hasNext()) {
                linkedHashSet.addAll(t0((androidx.fragment.app.a) it2.next()));
            }
            if (this.f4545h == null) {
                Iterator it3 = this.f4552o.iterator();
                while (it3.hasNext()) {
                    android.support.v4.media.session.b.a(it3.next());
                    Iterator it4 = linkedHashSet.iterator();
                    if (it4.hasNext()) {
                        Fragment fragment2 = (Fragment) it4.next();
                        throw null;
                    }
                }
                Iterator it5 = this.f4552o.iterator();
                while (it5.hasNext()) {
                    android.support.v4.media.session.b.a(it5.next());
                    Iterator it6 = linkedHashSet.iterator();
                    if (it6.hasNext()) {
                        Fragment fragment3 = (Fragment) it6.next();
                        throw null;
                    }
                }
            }
        }
        for (int i14 = i10; i14 < i11; i14++) {
            androidx.fragment.app.a aVar2 = (androidx.fragment.app.a) arrayList.get(i14);
            if (booleanValue) {
                for (int size = aVar2.f4590c.size() - 1; size >= 0; size--) {
                    Fragment fragment4 = ((FragmentTransaction.a) aVar2.f4590c.get(size)).f4608b;
                    if (fragment4 != null) {
                        A(fragment4).m();
                    }
                }
            } else {
                Iterator it7 = aVar2.f4590c.iterator();
                while (it7.hasNext()) {
                    Fragment fragment5 = ((FragmentTransaction.a) it7.next()).f4608b;
                    if (fragment5 != null) {
                        A(fragment5).m();
                    }
                }
            }
        }
        Z0(this.f4560w, true);
        for (t0 t0Var : z(arrayList, i10, i11)) {
            t0Var.D(booleanValue);
            t0Var.z();
            t0Var.n();
        }
        while (i10 < i11) {
            androidx.fragment.app.a aVar3 = (androidx.fragment.app.a) arrayList.get(i10);
            if (((Boolean) arrayList2.get(i10)).booleanValue() && aVar3.f4624v >= 0) {
                aVar3.f4624v = -1;
            }
            aVar3.D();
            i10++;
        }
        if (z11) {
            p1();
        }
    }

    private int l0(String str, int i10, boolean z10) {
        if (this.f4541d.isEmpty()) {
            return -1;
        }
        if (str == null && i10 < 0) {
            if (z10) {
                return 0;
            }
            return this.f4541d.size() - 1;
        }
        int size = this.f4541d.size() - 1;
        while (size >= 0) {
            androidx.fragment.app.a aVar = (androidx.fragment.app.a) this.f4541d.get(size);
            if ((str != null && str.equals(aVar.C())) || (i10 >= 0 && i10 == aVar.f4624v)) {
                break;
            }
            size--;
        }
        if (size < 0) {
            return size;
        }
        if (z10) {
            while (size > 0) {
                androidx.fragment.app.a aVar2 = (androidx.fragment.app.a) this.f4541d.get(size - 1);
                if ((str == null || !str.equals(aVar2.C())) && (i10 < 0 || i10 != aVar2.f4624v)) {
                    break;
                }
                size--;
            }
            return size;
        } else if (size == this.f4541d.size() - 1) {
            return -1;
        } else {
            return size + 1;
        }
    }

    public static Fragment m0(View view) {
        Fragment r02 = r0(view);
        if (r02 != null) {
            return r02;
        }
        throw new IllegalStateException("View " + view + " does not have a Fragment set");
    }

    private void n1(ArrayList arrayList, ArrayList arrayList2) {
        if (!arrayList.isEmpty()) {
            if (arrayList.size() == arrayList2.size()) {
                int size = arrayList.size();
                int i10 = 0;
                int i11 = 0;
                while (i10 < size) {
                    if (!((androidx.fragment.app.a) arrayList.get(i10)).f4605r) {
                        if (i11 != i10) {
                            i0(arrayList, arrayList2, i11, i10);
                        }
                        i11 = i10 + 1;
                        if (((Boolean) arrayList2.get(i10)).booleanValue()) {
                            while (i11 < size && ((Boolean) arrayList2.get(i11)).booleanValue() && !((androidx.fragment.app.a) arrayList.get(i11)).f4605r) {
                                i11++;
                            }
                        }
                        i0(arrayList, arrayList2, i10, i11);
                        i10 = i11 - 1;
                    }
                    i10++;
                }
                if (i11 != size) {
                    i0(arrayList, arrayList2, i11, size);
                    return;
                }
                return;
            }
            throw new IllegalStateException("Internal error with the back stack records");
        }
    }

    private void p1() {
        if (this.f4552o.size() <= 0) {
            return;
        }
        android.support.v4.media.session.b.a(this.f4552o.get(0));
        throw null;
    }

    public static FragmentManager q0(View view) {
        FragmentActivity fragmentActivity;
        Fragment r02 = r0(view);
        if (r02 != null) {
            if (r02.isAdded()) {
                return r02.getChildFragmentManager();
            }
            throw new IllegalStateException("The Fragment " + r02 + " that owns View " + view + " has already been destroyed. Nested fragments should always use the child FragmentManager.");
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
    public static Fragment r0(View view) {
        while (view != null) {
            Fragment I0 = I0(view);
            if (I0 != null) {
                return I0;
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int r1(int i10) {
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

    private void s0() {
        for (t0 t0Var : y()) {
            t0Var.r();
        }
    }

    private void u() {
        if (!V0()) {
            return;
        }
        throw new IllegalStateException("Can not perform this action after onSaveInstanceState");
    }

    private boolean u0(ArrayList arrayList, ArrayList arrayList2) {
        synchronized (this.f4538a) {
            if (this.f4538a.isEmpty()) {
                return false;
            }
            int size = this.f4538a.size();
            boolean z10 = false;
            for (int i10 = 0; i10 < size; i10++) {
                z10 |= ((o) this.f4538a.get(i10)).a(arrayList, arrayList2);
            }
            this.f4538a.clear();
            this.f4561x.i().removeCallbacks(this.T);
            return z10;
        }
    }

    private void v() {
        this.f4539b = false;
        this.P.clear();
        this.O.clear();
    }

    private void w() {
        boolean z10;
        FragmentHostCallback fragmentHostCallback = this.f4561x;
        if (fragmentHostCallback instanceof androidx.lifecycle.q0) {
            z10 = this.f4540c.p().n();
        } else if (fragmentHostCallback.g() instanceof Activity) {
            z10 = !((Activity) this.f4561x.g()).isChangingConfigurations();
        } else {
            z10 = true;
        }
        if (z10) {
            for (androidx.fragment.app.c cVar : this.f4549l.values()) {
                for (String str : cVar.f4642d) {
                    this.f4540c.p().g(str, false);
                }
            }
        }
    }

    private g0 w0(Fragment fragment) {
        return this.R.j(fragment);
    }

    private Set y() {
        HashSet hashSet = new HashSet();
        for (k0 k0Var : this.f4540c.k()) {
            ViewGroup viewGroup = k0Var.k().mContainer;
            if (viewGroup != null) {
                hashSet.add(t0.v(viewGroup, G0()));
            }
        }
        return hashSet;
    }

    private ViewGroup y0(Fragment fragment) {
        ViewGroup viewGroup = fragment.mContainer;
        if (viewGroup != null) {
            return viewGroup;
        }
        if (fragment.mContainerId > 0 && this.f4562y.e()) {
            View c10 = this.f4562y.c(fragment.mContainerId);
            if (c10 instanceof ViewGroup) {
                return (ViewGroup) c10;
            }
        }
        return null;
    }

    private void z1(Fragment fragment) {
        ViewGroup y02 = y0(fragment);
        if (y02 != null && fragment.getEnterAnim() + fragment.getExitAnim() + fragment.getPopEnterAnim() + fragment.getPopExitAnim() > 0) {
            if (y02.getTag(f3.b.f22475c) == null) {
                y02.setTag(f3.b.f22475c, fragment);
            }
            ((Fragment) y02.getTag(f3.b.f22475c)).setPopDirection(fragment.getPopDirection());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0 A(Fragment fragment) {
        k0 n10 = this.f4540c.n(fragment.mWho);
        if (n10 != null) {
            return n10;
        }
        k0 k0Var = new k0(this.f4553p, this.f4540c, fragment);
        k0Var.o(this.f4561x.g().getClassLoader());
        k0Var.s(this.f4560w);
        return k0Var;
    }

    public List A0() {
        return this.f4540c.o();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A1(Fragment fragment) {
        if (O0(2)) {
            Log.v("FragmentManager", "show: " + fragment);
        }
        if (fragment.mHidden) {
            fragment.mHidden = false;
            fragment.mHiddenChanged = !fragment.mHiddenChanged;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B(Fragment fragment) {
        if (O0(2)) {
            Log.v("FragmentManager", "detach: " + fragment);
        }
        if (!fragment.mDetached) {
            fragment.mDetached = true;
            if (fragment.mAdded) {
                if (O0(2)) {
                    Log.v("FragmentManager", "remove from detach: " + fragment);
                }
                this.f4540c.u(fragment);
                if (P0(fragment)) {
                    this.J = true;
                }
                z1(fragment);
            }
        }
    }

    public FragmentHostCallback B0() {
        return this.f4561x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void C() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        X(4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public LayoutInflater.Factory2 C0() {
        return this.f4543f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        X(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x D0() {
        return this.f4553p;
    }

    void E(Configuration configuration, boolean z10) {
        if (z10 && (this.f4561x instanceof androidx.core.content.d)) {
            C1(new IllegalStateException("Do not call dispatchConfigurationChanged() on host. Host implements OnConfigurationChangedProvider and automatically dispatches configuration changes to fragments."));
        }
        for (Fragment fragment : this.f4540c.o()) {
            if (fragment != null) {
                fragment.performConfigurationChanged(configuration);
                if (z10) {
                    fragment.mChildFragmentManager.E(configuration, true);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment E0() {
        return this.f4563z;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean F(MenuItem menuItem) {
        if (this.f4560w < 1) {
            return false;
        }
        for (Fragment fragment : this.f4540c.o()) {
            if (fragment != null && fragment.performContextItemSelected(menuItem)) {
                return true;
            }
        }
        return false;
    }

    public Fragment F0() {
        return this.A;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        X(1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0 G0() {
        u0 u0Var = this.D;
        if (u0Var != null) {
            return u0Var;
        }
        Fragment fragment = this.f4563z;
        if (fragment != null) {
            return fragment.mFragmentManager.G0();
        }
        return this.E;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean H(Menu menu, MenuInflater menuInflater) {
        if (this.f4560w < 1) {
            return false;
        }
        ArrayList arrayList = null;
        boolean z10 = false;
        for (Fragment fragment : this.f4540c.o()) {
            if (fragment != null && S0(fragment) && fragment.performCreateOptionsMenu(menu, menuInflater)) {
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                arrayList.add(fragment);
                z10 = true;
            }
        }
        if (this.f4542e != null) {
            for (int i10 = 0; i10 < this.f4542e.size(); i10++) {
                Fragment fragment2 = (Fragment) this.f4542e.get(i10);
                if (arrayList == null || !arrayList.contains(fragment2)) {
                    fragment2.onDestroyOptionsMenu();
                }
            }
        }
        this.f4542e = arrayList;
        return z10;
    }

    public c.C0334c H0() {
        return this.S;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I() {
        this.M = true;
        f0(true);
        c0();
        w();
        X(-1);
        FragmentHostCallback fragmentHostCallback = this.f4561x;
        if (fragmentHostCallback instanceof androidx.core.content.e) {
            ((androidx.core.content.e) fragmentHostCallback).removeOnTrimMemoryListener(this.f4556s);
        }
        FragmentHostCallback fragmentHostCallback2 = this.f4561x;
        if (fragmentHostCallback2 instanceof androidx.core.content.d) {
            ((androidx.core.content.d) fragmentHostCallback2).removeOnConfigurationChangedListener(this.f4555r);
        }
        FragmentHostCallback fragmentHostCallback3 = this.f4561x;
        if (fragmentHostCallback3 instanceof androidx.core.app.s) {
            ((androidx.core.app.s) fragmentHostCallback3).removeOnMultiWindowModeChangedListener(this.f4557t);
        }
        FragmentHostCallback fragmentHostCallback4 = this.f4561x;
        if (fragmentHostCallback4 instanceof androidx.core.app.t) {
            ((androidx.core.app.t) fragmentHostCallback4).removeOnPictureInPictureModeChangedListener(this.f4558u);
        }
        FragmentHostCallback fragmentHostCallback5 = this.f4561x;
        if ((fragmentHostCallback5 instanceof androidx.core.view.n) && this.f4563z == null) {
            ((androidx.core.view.n) fragmentHostCallback5).removeMenuProvider(this.f4559v);
        }
        this.f4561x = null;
        this.f4562y = null;
        this.f4563z = null;
        if (this.f4544g != null) {
            this.f4547j.remove();
            this.f4544g = null;
        }
        ActivityResultLauncher activityResultLauncher = this.F;
        if (activityResultLauncher != null) {
            activityResultLauncher.d();
            this.G.d();
            this.H.d();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J() {
        X(1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ViewModelStore J0(Fragment fragment) {
        return this.R.m(fragment);
    }

    void K(boolean z10) {
        if (z10 && (this.f4561x instanceof androidx.core.content.e)) {
            C1(new IllegalStateException("Do not call dispatchLowMemory() on host. Host implements OnTrimMemoryProvider and automatically dispatches low memory callbacks to fragments."));
        }
        for (Fragment fragment : this.f4540c.o()) {
            if (fragment != null) {
                fragment.performLowMemory();
                if (z10) {
                    fragment.mChildFragmentManager.K(true);
                }
            }
        }
    }

    void K0() {
        this.f4546i = true;
        f0(true);
        this.f4546i = false;
        if (V && this.f4545h != null) {
            if (!this.f4552o.isEmpty()) {
                LinkedHashSet linkedHashSet = new LinkedHashSet(t0(this.f4545h));
                Iterator it = this.f4552o.iterator();
                while (it.hasNext()) {
                    android.support.v4.media.session.b.a(it.next());
                    Iterator it2 = linkedHashSet.iterator();
                    if (it2.hasNext()) {
                        Fragment fragment = (Fragment) it2.next();
                        throw null;
                    }
                }
            }
            Iterator it3 = this.f4545h.f4590c.iterator();
            while (it3.hasNext()) {
                Fragment fragment2 = ((FragmentTransaction.a) it3.next()).f4608b;
                if (fragment2 != null) {
                    fragment2.mTransitioning = false;
                }
            }
            for (t0 t0Var : z(new ArrayList(Collections.singletonList(this.f4545h)), 0, 1)) {
                t0Var.f();
            }
            Iterator it4 = this.f4545h.f4590c.iterator();
            while (it4.hasNext()) {
                Fragment fragment3 = ((FragmentTransaction.a) it4.next()).f4608b;
                if (fragment3 != null && fragment3.mContainer == null) {
                    A(fragment3).m();
                }
            }
            this.f4545h = null;
            D1();
            if (O0(3)) {
                Log.d("FragmentManager", "Op is being set to null");
                Log.d("FragmentManager", "OnBackPressedCallback enabled=" + this.f4547j.isEnabled() + " for  FragmentManager " + this);
            }
        } else if (this.f4547j.isEnabled()) {
            if (O0(3)) {
                Log.d("FragmentManager", "Calling popBackStackImmediate via onBackPressed callback");
            }
            f1();
        } else {
            if (O0(3)) {
                Log.d("FragmentManager", "Calling onBackPressed via onBackPressed callback");
            }
            this.f4544g.l();
        }
    }

    void L(boolean z10, boolean z11) {
        if (z11 && (this.f4561x instanceof androidx.core.app.s)) {
            C1(new IllegalStateException("Do not call dispatchMultiWindowModeChanged() on host. Host implements OnMultiWindowModeChangedProvider and automatically dispatches multi-window mode changes to fragments."));
        }
        for (Fragment fragment : this.f4540c.o()) {
            if (fragment != null) {
                fragment.performMultiWindowModeChanged(z10);
                if (z11) {
                    fragment.mChildFragmentManager.L(z10, true);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L0(Fragment fragment) {
        if (O0(2)) {
            Log.v("FragmentManager", "hide: " + fragment);
        }
        if (!fragment.mHidden) {
            fragment.mHidden = true;
            fragment.mHiddenChanged = true ^ fragment.mHiddenChanged;
            z1(fragment);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(Fragment fragment) {
        Iterator it = this.f4554q.iterator();
        while (it.hasNext()) {
            ((h0) it.next()).a(this, fragment);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M0(Fragment fragment) {
        if (fragment.mAdded && P0(fragment)) {
            this.J = true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void N() {
        for (Fragment fragment : this.f4540c.l()) {
            if (fragment != null) {
                fragment.onHiddenChanged(fragment.isHidden());
                fragment.mChildFragmentManager.N();
            }
        }
    }

    public boolean N0() {
        return this.M;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean O(MenuItem menuItem) {
        if (this.f4560w < 1) {
            return false;
        }
        for (Fragment fragment : this.f4540c.o()) {
            if (fragment != null && fragment.performOptionsItemSelected(menuItem)) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void P(Menu menu) {
        if (this.f4560w >= 1) {
            for (Fragment fragment : this.f4540c.o()) {
                if (fragment != null) {
                    fragment.performOptionsMenuClosed(menu);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void R() {
        X(5);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean R0(Fragment fragment) {
        if (fragment == null) {
            return false;
        }
        return fragment.isHidden();
    }

    void S(boolean z10, boolean z11) {
        if (z11 && (this.f4561x instanceof androidx.core.app.t)) {
            C1(new IllegalStateException("Do not call dispatchPictureInPictureModeChanged() on host. Host implements OnPictureInPictureModeChangedProvider and automatically dispatches picture-in-picture mode changes to fragments."));
        }
        for (Fragment fragment : this.f4540c.o()) {
            if (fragment != null) {
                fragment.performPictureInPictureModeChanged(z10);
                if (z11) {
                    fragment.mChildFragmentManager.S(z10, true);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean S0(Fragment fragment) {
        if (fragment == null) {
            return true;
        }
        return fragment.isMenuVisible();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean T(Menu menu) {
        boolean z10 = false;
        if (this.f4560w < 1) {
            return false;
        }
        for (Fragment fragment : this.f4540c.o()) {
            if (fragment != null && S0(fragment) && fragment.performPrepareOptionsMenu(menu)) {
                z10 = true;
            }
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean T0(Fragment fragment) {
        if (fragment == null) {
            return true;
        }
        FragmentManager fragmentManager = fragment.mFragmentManager;
        if (fragment.equals(fragmentManager.F0()) && T0(fragmentManager.f4563z)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U() {
        D1();
        Q(this.A);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean U0(int i10) {
        if (this.f4560w >= i10) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        X(7);
    }

    public boolean V0() {
        if (!this.K && !this.L) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W() {
        this.K = false;
        this.L = false;
        this.R.p(false);
        X(5);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void W0(Fragment fragment, String[] strArr, int i10) {
        if (this.H != null) {
            this.I.addLast(new m(fragment.mWho, i10));
            this.H.b(strArr);
            return;
        }
        this.f4561x.m(fragment, strArr, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X0(Fragment fragment, Intent intent, int i10, Bundle bundle) {
        if (this.F != null) {
            this.I.addLast(new m(fragment.mWho, i10));
            if (bundle != null) {
                intent.putExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE", bundle);
            }
            this.F.b(intent);
            return;
        }
        this.f4561x.o(fragment, intent, i10, bundle);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y() {
        this.L = true;
        this.R.p(true);
        X(4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y0(Fragment fragment, IntentSender intentSender, int i10, Intent intent, int i11, int i12, int i13, Bundle bundle) {
        if (this.G != null) {
            if (bundle != null) {
                if (intent == null) {
                    intent = new Intent();
                    intent.putExtra("androidx.fragment.extra.ACTIVITY_OPTIONS_BUNDLE", true);
                }
                if (O0(2)) {
                    Log.v("FragmentManager", "ActivityOptions " + bundle + " were added to fillInIntent " + intent + " for fragment " + fragment);
                }
                intent.putExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE", bundle);
            }
            d.e a10 = new e.a(intentSender).b(intent).c(i12, i11).a();
            this.I.addLast(new m(fragment.mWho, i10));
            if (O0(2)) {
                Log.v("FragmentManager", "Fragment " + fragment + "is launching an IntentSender for result ");
            }
            this.G.b(a10);
            return;
        }
        this.f4561x.p(fragment, intentSender, i10, intent, i11, i12, i13, bundle);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z() {
        X(2);
    }

    void Z0(int i10, boolean z10) {
        FragmentHostCallback fragmentHostCallback;
        if (this.f4561x == null && i10 != -1) {
            throw new IllegalStateException("No activity");
        }
        if (z10 || i10 != this.f4560w) {
            this.f4560w = i10;
            this.f4540c.t();
            B1();
            if (this.J && (fragmentHostCallback = this.f4561x) != null && this.f4560w == 7) {
                fragmentHostCallback.q();
                this.J = false;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a1() {
        if (this.f4561x != null) {
            this.K = false;
            this.L = false;
            this.R.p(false);
            for (Fragment fragment : this.f4540c.o()) {
                if (fragment != null) {
                    fragment.noteStateNotSaved();
                }
            }
        }
    }

    public void b0(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
        int size;
        String str2 = str + "    ";
        this.f4540c.e(str, fileDescriptor, printWriter, strArr);
        ArrayList arrayList = this.f4542e;
        if (arrayList != null && (size = arrayList.size()) > 0) {
            printWriter.print(str);
            printWriter.println("Fragments Created Menus:");
            for (int i10 = 0; i10 < size; i10++) {
                printWriter.print(str);
                printWriter.print("  #");
                printWriter.print(i10);
                printWriter.print(": ");
                printWriter.println(((Fragment) this.f4542e.get(i10)).toString());
            }
        }
        int size2 = this.f4541d.size();
        if (size2 > 0) {
            printWriter.print(str);
            printWriter.println("Back Stack:");
            for (int i11 = 0; i11 < size2; i11++) {
                androidx.fragment.app.a aVar = (androidx.fragment.app.a) this.f4541d.get(i11);
                printWriter.print(str);
                printWriter.print("  #");
                printWriter.print(i11);
                printWriter.print(": ");
                printWriter.println(aVar.toString());
                aVar.x(str2, printWriter);
            }
        }
        printWriter.print(str);
        printWriter.println("Back Stack Index: " + this.f4548k.get());
        synchronized (this.f4538a) {
            try {
                int size3 = this.f4538a.size();
                if (size3 > 0) {
                    printWriter.print(str);
                    printWriter.println("Pending Actions:");
                    for (int i12 = 0; i12 < size3; i12++) {
                        printWriter.print(str);
                        printWriter.print("  #");
                        printWriter.print(i12);
                        printWriter.print(": ");
                        printWriter.println((o) this.f4538a.get(i12));
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
        printWriter.println(this.f4561x);
        printWriter.print(str);
        printWriter.print("  mContainer=");
        printWriter.println(this.f4562y);
        if (this.f4563z != null) {
            printWriter.print(str);
            printWriter.print("  mParent=");
            printWriter.println(this.f4563z);
        }
        printWriter.print(str);
        printWriter.print("  mCurState=");
        printWriter.print(this.f4560w);
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

    public final void b1(FragmentContainerView fragmentContainerView) {
        View view;
        for (k0 k0Var : this.f4540c.k()) {
            Fragment k10 = k0Var.k();
            if (k10.mContainerId == fragmentContainerView.getId() && (view = k10.mView) != null && view.getParent() == null) {
                k10.mContainer = fragmentContainerView;
                k0Var.b();
                k0Var.m();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c1(k0 k0Var) {
        Fragment k10 = k0Var.k();
        if (k10.mDeferStart) {
            if (this.f4539b) {
                this.N = true;
                return;
            }
            k10.mDeferStart = false;
            k0Var.m();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(o oVar, boolean z10) {
        if (!z10) {
            if (this.f4561x == null) {
                if (this.M) {
                    throw new IllegalStateException("FragmentManager has been destroyed");
                }
                throw new IllegalStateException("FragmentManager has not been attached to a host.");
            }
            u();
        }
        synchronized (this.f4538a) {
            try {
                if (this.f4561x == null) {
                    if (z10) {
                        return;
                    }
                    throw new IllegalStateException("Activity has been destroyed");
                }
                this.f4538a.add(oVar);
                t1();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void d1() {
        d0(new p(null, -1, 0), false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e1(int i10, int i11, boolean z10) {
        if (i10 >= 0) {
            d0(new p(null, i10, i11), z10);
            return;
        }
        throw new IllegalArgumentException("Bad id: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f0(boolean z10) {
        androidx.fragment.app.a aVar;
        e0(z10);
        boolean z11 = false;
        if (!this.f4546i && (aVar = this.f4545h) != null) {
            aVar.f4623u = false;
            aVar.v();
            if (O0(3)) {
                Log.d("FragmentManager", "Reversing mTransitioningOp " + this.f4545h + " as part of execPendingActions for actions " + this.f4538a);
            }
            this.f4545h.w(false, false);
            this.f4538a.add(0, this.f4545h);
            Iterator it = this.f4545h.f4590c.iterator();
            while (it.hasNext()) {
                Fragment fragment = ((FragmentTransaction.a) it.next()).f4608b;
                if (fragment != null) {
                    fragment.mTransitioning = false;
                }
            }
            this.f4545h = null;
        }
        while (u0(this.O, this.P)) {
            z11 = true;
            this.f4539b = true;
            try {
                n1(this.O, this.P);
            } finally {
                v();
            }
        }
        D1();
        a0();
        this.f4540c.b();
        return z11;
    }

    public boolean f1() {
        return h1(null, -1, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g0(o oVar, boolean z10) {
        if (z10 && (this.f4561x == null || this.M)) {
            return;
        }
        e0(z10);
        androidx.fragment.app.a aVar = this.f4545h;
        boolean z11 = false;
        if (aVar != null) {
            aVar.f4623u = false;
            aVar.v();
            if (O0(3)) {
                Log.d("FragmentManager", "Reversing mTransitioningOp " + this.f4545h + " as part of execSingleAction for action " + oVar);
            }
            this.f4545h.w(false, false);
            boolean a10 = this.f4545h.a(this.O, this.P);
            Iterator it = this.f4545h.f4590c.iterator();
            while (it.hasNext()) {
                Fragment fragment = ((FragmentTransaction.a) it.next()).f4608b;
                if (fragment != null) {
                    fragment.mTransitioning = false;
                }
            }
            this.f4545h = null;
            z11 = a10;
        }
        boolean a11 = oVar.a(this.O, this.P);
        if (z11 || a11) {
            this.f4539b = true;
            try {
                n1(this.O, this.P);
            } finally {
                v();
            }
        }
        D1();
        a0();
        this.f4540c.b();
    }

    public boolean g1(int i10, int i11) {
        if (i10 >= 0) {
            return h1(null, i10, i11);
        }
        throw new IllegalArgumentException("Bad id: " + i10);
    }

    boolean i1(ArrayList arrayList, ArrayList arrayList2, String str, int i10, int i11) {
        boolean z10;
        if ((i11 & 1) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        int l02 = l0(str, i10, z10);
        if (l02 < 0) {
            return false;
        }
        for (int size = this.f4541d.size() - 1; size >= l02; size--) {
            arrayList.add((androidx.fragment.app.a) this.f4541d.remove(size));
            arrayList2.add(Boolean.TRUE);
        }
        return true;
    }

    public boolean j0() {
        boolean f02 = f0(true);
        s0();
        return f02;
    }

    boolean j1(ArrayList arrayList, ArrayList arrayList2) {
        if (O0(2)) {
            Log.v("FragmentManager", "FragmentManager has the following pending actions inside of prepareBackStackState: " + this.f4538a);
        }
        if (this.f4541d.isEmpty()) {
            Log.i("FragmentManager", "Ignoring call to start back stack pop because the back stack is empty.");
            return false;
        }
        ArrayList arrayList3 = this.f4541d;
        androidx.fragment.app.a aVar = (androidx.fragment.app.a) arrayList3.get(arrayList3.size() - 1);
        this.f4545h = aVar;
        Iterator it = aVar.f4590c.iterator();
        while (it.hasNext()) {
            Fragment fragment = ((FragmentTransaction.a) it.next()).f4608b;
            if (fragment != null) {
                fragment.mTransitioning = true;
            }
        }
        return i1(arrayList, arrayList2, null, -1, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(androidx.fragment.app.a aVar) {
        this.f4541d.add(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment k0(String str) {
        return this.f4540c.f(str);
    }

    void k1() {
        d0(new q(), false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0 l(Fragment fragment) {
        String str = fragment.mPreviousWho;
        if (str != null) {
            g3.c.f(fragment, str);
        }
        if (O0(2)) {
            Log.v("FragmentManager", "add: " + fragment);
        }
        k0 A = A(fragment);
        fragment.mFragmentManager = this;
        this.f4540c.r(A);
        if (!fragment.mDetached) {
            this.f4540c.a(fragment);
            fragment.mRemoving = false;
            if (fragment.mView == null) {
                fragment.mHiddenChanged = false;
            }
            if (P0(fragment)) {
                this.J = true;
            }
        }
        return A;
    }

    public void l1(l lVar, boolean z10) {
        this.f4553p.o(lVar, z10);
    }

    public void m(h0 h0Var) {
        this.f4554q.add(h0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m1(Fragment fragment) {
        if (O0(2)) {
            Log.v("FragmentManager", "remove: " + fragment + " nesting=" + fragment.mBackStackNesting);
        }
        boolean isInBackStack = fragment.isInBackStack();
        if (fragment.mDetached && isInBackStack) {
            return;
        }
        this.f4540c.u(fragment);
        if (P0(fragment)) {
            this.J = true;
        }
        fragment.mRemoving = true;
        z1(fragment);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(Fragment fragment) {
        this.R.e(fragment);
    }

    public Fragment n0(int i10) {
        return this.f4540c.g(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int o() {
        return this.f4548k.getAndIncrement();
    }

    public Fragment o0(String str) {
        return this.f4540c.h(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o1(Fragment fragment) {
        this.R.o(fragment);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(FragmentHostCallback fragmentHostCallback, FragmentContainer fragmentContainer, Fragment fragment) {
        String str;
        if (this.f4561x == null) {
            this.f4561x = fragmentHostCallback;
            this.f4562y = fragmentContainer;
            this.f4563z = fragment;
            if (fragment != null) {
                m(new h(fragment));
            } else if (fragmentHostCallback instanceof h0) {
                m((h0) fragmentHostCallback);
            }
            if (this.f4563z != null) {
                D1();
            }
            if (fragmentHostCallback instanceof androidx.activity.z) {
                androidx.activity.z zVar = (androidx.activity.z) fragmentHostCallback;
                OnBackPressedDispatcher onBackPressedDispatcher = zVar.getOnBackPressedDispatcher();
                this.f4544g = onBackPressedDispatcher;
                LifecycleOwner lifecycleOwner = zVar;
                if (fragment != null) {
                    lifecycleOwner = fragment;
                }
                onBackPressedDispatcher.h(lifecycleOwner, this.f4547j);
            }
            if (fragment != null) {
                this.R = fragment.mFragmentManager.w0(fragment);
            } else if (fragmentHostCallback instanceof androidx.lifecycle.q0) {
                this.R = g0.k(((androidx.lifecycle.q0) fragmentHostCallback).getViewModelStore());
            } else {
                this.R = new g0(false);
            }
            this.R.p(V0());
            this.f4540c.A(this.R);
            FragmentHostCallback fragmentHostCallback2 = this.f4561x;
            if ((fragmentHostCallback2 instanceof u3.f) && fragment == null) {
                SavedStateRegistry savedStateRegistry = ((u3.f) fragmentHostCallback2).getSavedStateRegistry();
                savedStateRegistry.c("android:support:fragments", new SavedStateRegistry.b() { // from class: androidx.fragment.app.c0
                    @Override // androidx.savedstate.SavedStateRegistry.b
                    public final Bundle a() {
                        Bundle s12;
                        s12 = FragmentManager.this.s1();
                        return s12;
                    }
                });
                Bundle a10 = savedStateRegistry.a("android:support:fragments");
                if (a10 != null) {
                    q1(a10);
                }
            }
            FragmentHostCallback fragmentHostCallback3 = this.f4561x;
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
            FragmentHostCallback fragmentHostCallback4 = this.f4561x;
            if (fragmentHostCallback4 instanceof androidx.core.content.d) {
                ((androidx.core.content.d) fragmentHostCallback4).addOnConfigurationChangedListener(this.f4555r);
            }
            FragmentHostCallback fragmentHostCallback5 = this.f4561x;
            if (fragmentHostCallback5 instanceof androidx.core.content.e) {
                ((androidx.core.content.e) fragmentHostCallback5).addOnTrimMemoryListener(this.f4556s);
            }
            FragmentHostCallback fragmentHostCallback6 = this.f4561x;
            if (fragmentHostCallback6 instanceof androidx.core.app.s) {
                ((androidx.core.app.s) fragmentHostCallback6).addOnMultiWindowModeChangedListener(this.f4557t);
            }
            FragmentHostCallback fragmentHostCallback7 = this.f4561x;
            if (fragmentHostCallback7 instanceof androidx.core.app.t) {
                ((androidx.core.app.t) fragmentHostCallback7).addOnPictureInPictureModeChangedListener(this.f4558u);
            }
            FragmentHostCallback fragmentHostCallback8 = this.f4561x;
            if ((fragmentHostCallback8 instanceof androidx.core.view.n) && fragment == null) {
                ((androidx.core.view.n) fragmentHostCallback8).addMenuProvider(this.f4559v);
                return;
            }
            return;
        }
        throw new IllegalStateException("Already attached");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment p0(String str) {
        return this.f4540c.i(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(Fragment fragment) {
        if (O0(2)) {
            Log.v("FragmentManager", "attach: " + fragment);
        }
        if (fragment.mDetached) {
            fragment.mDetached = false;
            if (!fragment.mAdded) {
                this.f4540c.a(fragment);
                if (O0(2)) {
                    Log.v("FragmentManager", "add from attach: " + fragment);
                }
                if (P0(fragment)) {
                    this.J = true;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q1(Parcelable parcelable) {
        k0 k0Var;
        Bundle bundle;
        Bundle bundle2;
        if (parcelable != null) {
            Bundle bundle3 = (Bundle) parcelable;
            for (String str : bundle3.keySet()) {
                if (str.startsWith("result_") && (bundle2 = bundle3.getBundle(str)) != null) {
                    bundle2.setClassLoader(this.f4561x.g().getClassLoader());
                    this.f4550m.put(str.substring(7), bundle2);
                }
            }
            HashMap hashMap = new HashMap();
            for (String str2 : bundle3.keySet()) {
                if (str2.startsWith("fragment_") && (bundle = bundle3.getBundle(str2)) != null) {
                    bundle.setClassLoader(this.f4561x.g().getClassLoader());
                    hashMap.put(str2.substring(9), bundle);
                }
            }
            this.f4540c.x(hashMap);
            f0 f0Var = (f0) bundle3.getParcelable("state");
            if (f0Var == null) {
                return;
            }
            this.f4540c.v();
            Iterator it = f0Var.f4698d.iterator();
            while (it.hasNext()) {
                Bundle B = this.f4540c.B((String) it.next(), null);
                if (B != null) {
                    Fragment i10 = this.R.i(((j0) B.getParcelable("state")).f4723e);
                    if (i10 != null) {
                        if (O0(2)) {
                            Log.v("FragmentManager", "restoreSaveState: re-attaching retained " + i10);
                        }
                        k0Var = new k0(this.f4553p, this.f4540c, i10, B);
                    } else {
                        k0Var = new k0(this.f4553p, this.f4540c, this.f4561x.g().getClassLoader(), z0(), B);
                    }
                    Fragment k10 = k0Var.k();
                    k10.mSavedFragmentState = B;
                    k10.mFragmentManager = this;
                    if (O0(2)) {
                        Log.v("FragmentManager", "restoreSaveState: active (" + k10.mWho + "): " + k10);
                    }
                    k0Var.o(this.f4561x.g().getClassLoader());
                    this.f4540c.r(k0Var);
                    k0Var.s(this.f4560w);
                }
            }
            for (Fragment fragment : this.R.l()) {
                if (!this.f4540c.c(fragment.mWho)) {
                    if (O0(2)) {
                        Log.v("FragmentManager", "Discarding retained Fragment " + fragment + " that was not found in the set of active Fragments " + f0Var.f4698d);
                    }
                    this.R.o(fragment);
                    fragment.mFragmentManager = this;
                    k0 k0Var2 = new k0(this.f4553p, this.f4540c, fragment);
                    k0Var2.s(1);
                    k0Var2.m();
                    fragment.mRemoving = true;
                    k0Var2.m();
                }
            }
            this.f4540c.w(f0Var.f4699e);
            if (f0Var.f4700i != null) {
                this.f4541d = new ArrayList(f0Var.f4700i.length);
                int i11 = 0;
                while (true) {
                    androidx.fragment.app.b[] bVarArr = f0Var.f4700i;
                    if (i11 >= bVarArr.length) {
                        break;
                    }
                    androidx.fragment.app.a b10 = bVarArr[i11].b(this);
                    if (O0(2)) {
                        Log.v("FragmentManager", "restoreAllState: back stack #" + i11 + " (index " + b10.f4624v + "): " + b10);
                        PrintWriter printWriter = new PrintWriter(new q0("FragmentManager"));
                        b10.y("  ", printWriter, false);
                        printWriter.close();
                    }
                    this.f4541d.add(b10);
                    i11++;
                }
            } else {
                this.f4541d = new ArrayList();
            }
            this.f4548k.set(f0Var.f4701o);
            String str3 = f0Var.f4702p;
            if (str3 != null) {
                Fragment k02 = k0(str3);
                this.A = k02;
                Q(k02);
            }
            ArrayList arrayList = f0Var.f4703q;
            if (arrayList != null) {
                for (int i12 = 0; i12 < arrayList.size(); i12++) {
                    this.f4549l.put((String) arrayList.get(i12), (androidx.fragment.app.c) f0Var.f4704r.get(i12));
                }
            }
            this.I = new ArrayDeque(f0Var.f4705s);
        }
    }

    public FragmentTransaction r() {
        return new androidx.fragment.app.a(this);
    }

    void s() {
        if (O0(3)) {
            Log.d("FragmentManager", "cancelBackStackTransition for transition " + this.f4545h);
        }
        androidx.fragment.app.a aVar = this.f4545h;
        if (aVar != null) {
            aVar.f4623u = false;
            aVar.v();
            this.f4545h.q(true, new Runnable() { // from class: androidx.fragment.app.d0
                @Override // java.lang.Runnable
                public final void run() {
                    FragmentManager.c(FragmentManager.this);
                }
            });
            this.f4545h.g();
            this.f4546i = true;
            j0();
            this.f4546i = false;
            this.f4545h = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle s1() {
        androidx.fragment.app.b[] bVarArr;
        Bundle bundle = new Bundle();
        s0();
        c0();
        f0(true);
        this.K = true;
        this.R.p(true);
        ArrayList y10 = this.f4540c.y();
        HashMap m10 = this.f4540c.m();
        if (m10.isEmpty()) {
            if (O0(2)) {
                Log.v("FragmentManager", "saveAllState: no fragments!");
                return bundle;
            }
        } else {
            ArrayList z10 = this.f4540c.z();
            int size = this.f4541d.size();
            if (size > 0) {
                bVarArr = new androidx.fragment.app.b[size];
                for (int i10 = 0; i10 < size; i10++) {
                    bVarArr[i10] = new androidx.fragment.app.b((androidx.fragment.app.a) this.f4541d.get(i10));
                    if (O0(2)) {
                        Log.v("FragmentManager", "saveAllState: adding back stack #" + i10 + ": " + this.f4541d.get(i10));
                    }
                }
            } else {
                bVarArr = null;
            }
            f0 f0Var = new f0();
            f0Var.f4698d = y10;
            f0Var.f4699e = z10;
            f0Var.f4700i = bVarArr;
            f0Var.f4701o = this.f4548k.get();
            Fragment fragment = this.A;
            if (fragment != null) {
                f0Var.f4702p = fragment.mWho;
            }
            f0Var.f4703q.addAll(this.f4549l.keySet());
            f0Var.f4704r.addAll(this.f4549l.values());
            f0Var.f4705s = new ArrayList(this.I);
            bundle.putParcelable("state", f0Var);
            for (String str : this.f4550m.keySet()) {
                bundle.putBundle("result_" + str, (Bundle) this.f4550m.get(str));
            }
            for (String str2 : m10.keySet()) {
                bundle.putBundle("fragment_" + str2, (Bundle) m10.get(str2));
            }
        }
        return bundle;
    }

    boolean t() {
        boolean z10 = false;
        for (Fragment fragment : this.f4540c.l()) {
            if (fragment != null) {
                z10 = P0(fragment);
                continue;
            }
            if (z10) {
                return true;
            }
        }
        return false;
    }

    Set t0(androidx.fragment.app.a aVar) {
        HashSet hashSet = new HashSet();
        for (int i10 = 0; i10 < aVar.f4590c.size(); i10++) {
            Fragment fragment = ((FragmentTransaction.a) aVar.f4590c.get(i10)).f4608b;
            if (fragment != null && aVar.f4596i) {
                hashSet.add(fragment);
            }
        }
        return hashSet;
    }

    void t1() {
        synchronized (this.f4538a) {
            try {
                if (this.f4538a.size() == 1) {
                    this.f4561x.i().removeCallbacks(this.T);
                    this.f4561x.i().post(this.T);
                    D1();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        sb2.append("FragmentManager{");
        sb2.append(Integer.toHexString(System.identityHashCode(this)));
        sb2.append(" in ");
        Fragment fragment = this.f4563z;
        if (fragment != null) {
            sb2.append(fragment.getClass().getSimpleName());
            sb2.append("{");
            sb2.append(Integer.toHexString(System.identityHashCode(this.f4563z)));
            sb2.append("}");
        } else {
            FragmentHostCallback fragmentHostCallback = this.f4561x;
            if (fragmentHostCallback != null) {
                sb2.append(fragmentHostCallback.getClass().getSimpleName());
                sb2.append("{");
                sb2.append(Integer.toHexString(System.identityHashCode(this.f4561x)));
                sb2.append("}");
            } else {
                sb2.append("null");
            }
        }
        sb2.append("}}");
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u1(Fragment fragment, boolean z10) {
        ViewGroup y02 = y0(fragment);
        if (y02 != null && (y02 instanceof FragmentContainerView)) {
            ((FragmentContainerView) y02).setDrawDisappearingViewsLast(!z10);
        }
    }

    public int v0() {
        int i10;
        int size = this.f4541d.size();
        if (this.f4545h != null) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        return size + i10;
    }

    public final void v1(String str, Bundle bundle) {
        n nVar = (n) this.f4551n.get(str);
        if (nVar != null && nVar.b(Lifecycle.State.f4849o)) {
            nVar.a(str, bundle);
        } else {
            this.f4550m.put(str, bundle);
        }
        if (O0(2)) {
            Log.v("FragmentManager", "Setting fragment result with key " + str + " and result " + bundle);
        }
    }

    public final void w1(String str, LifecycleOwner lifecycleOwner, i0 i0Var) {
        Lifecycle lifecycle = lifecycleOwner.getLifecycle();
        if (lifecycle.b() == Lifecycle.State.f4846d) {
            return;
        }
        g gVar = new g(str, i0Var, lifecycle);
        n nVar = (n) this.f4551n.put(str, new n(lifecycle, i0Var, gVar));
        if (nVar != null) {
            nVar.c();
        }
        if (O0(2)) {
            Log.v("FragmentManager", "Setting FragmentResultListener with key " + str + " lifecycleOwner " + lifecycle + " and listener " + i0Var);
        }
        lifecycle.a(gVar);
    }

    public final void x(String str) {
        this.f4550m.remove(str);
        if (O0(2)) {
            Log.v("FragmentManager", "Clearing fragment result with key " + str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FragmentContainer x0() {
        return this.f4562y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x1(Fragment fragment, Lifecycle.State state) {
        if (fragment.equals(k0(fragment.mWho)) && (fragment.mHost == null || fragment.mFragmentManager == this)) {
            fragment.mMaxState = state;
            return;
        }
        throw new IllegalArgumentException("Fragment " + fragment + " is not an active fragment of FragmentManager " + this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y1(Fragment fragment) {
        if (fragment != null && (!fragment.equals(k0(fragment.mWho)) || (fragment.mHost != null && fragment.mFragmentManager != this))) {
            throw new IllegalArgumentException("Fragment " + fragment + " is not an active fragment of FragmentManager " + this);
        }
        Fragment fragment2 = this.A;
        this.A = fragment;
        Q(fragment2);
        Q(this.A);
    }

    Set z(ArrayList arrayList, int i10, int i11) {
        ViewGroup viewGroup;
        HashSet hashSet = new HashSet();
        while (i10 < i11) {
            Iterator it = ((androidx.fragment.app.a) arrayList.get(i10)).f4590c.iterator();
            while (it.hasNext()) {
                Fragment fragment = ((FragmentTransaction.a) it.next()).f4608b;
                if (fragment != null && (viewGroup = fragment.mContainer) != null) {
                    hashSet.add(t0.u(viewGroup, this));
                }
            }
            i10++;
        }
        return hashSet;
    }

    public u z0() {
        u uVar = this.B;
        if (uVar != null) {
            return uVar;
        }
        Fragment fragment = this.f4563z;
        if (fragment != null) {
            return fragment.mFragmentManager.z0();
        }
        return this.C;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class m implements Parcelable {
        public static final Parcelable.Creator<m> CREATOR = new a();

        /* renamed from: d  reason: collision with root package name */
        String f4578d;

        /* renamed from: e  reason: collision with root package name */
        int f4579e;

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
            this.f4578d = str;
            this.f4579e = i10;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            parcel.writeString(this.f4578d);
            parcel.writeInt(this.f4579e);
        }

        m(Parcel parcel) {
            this.f4578d = parcel.readString();
            this.f4579e = parcel.readInt();
        }
    }
}
