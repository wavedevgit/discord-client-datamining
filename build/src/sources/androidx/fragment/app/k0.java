package androidx.fragment.app;

import android.app.Activity;
import android.content.res.Resources;
import android.os.BadParcelableException;
import android.os.Bundle;
import android.os.Parcelable;
import android.util.Log;
import android.util.SparseArray;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.fragment.app.t0;
import androidx.lifecycle.Lifecycle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k0 {

    /* renamed from: a  reason: collision with root package name */
    private final x f4411a;

    /* renamed from: b  reason: collision with root package name */
    private final l0 f4412b;

    /* renamed from: c  reason: collision with root package name */
    private final Fragment f4413c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f4414d = false;

    /* renamed from: e  reason: collision with root package name */
    private int f4415e = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f4416d;

        a(View view) {
            this.f4416d = view;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            this.f4416d.removeOnAttachStateChangeListener(this);
            androidx.core.view.h0.k0(this.f4416d);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f4418a;

        static {
            int[] iArr = new int[Lifecycle.State.values().length];
            f4418a = iArr;
            try {
                iArr[Lifecycle.State.f4521p.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f4418a[Lifecycle.State.f4520o.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f4418a[Lifecycle.State.f4519i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f4418a[Lifecycle.State.f4518e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(x xVar, l0 l0Var, Fragment fragment) {
        this.f4411a = xVar;
        this.f4412b = l0Var;
        this.f4413c = fragment;
    }

    private boolean l(View view) {
        if (view == this.f4413c.mView) {
            return true;
        }
        for (ViewParent parent = view.getParent(); parent != null; parent = parent.getParent()) {
            if (parent == this.f4413c.mView) {
                return true;
            }
        }
        return false;
    }

    void a() {
        Bundle bundle;
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "moveto ACTIVITY_CREATED: " + this.f4413c);
        }
        Bundle bundle2 = this.f4413c.mSavedFragmentState;
        if (bundle2 != null) {
            bundle = bundle2.getBundle("savedInstanceState");
        } else {
            bundle = null;
        }
        this.f4413c.performActivityCreated(bundle);
        this.f4411a.a(this.f4413c, bundle, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        Fragment r02 = FragmentManager.r0(this.f4413c.mContainer);
        Fragment parentFragment = this.f4413c.getParentFragment();
        if (r02 != null && !r02.equals(parentFragment)) {
            Fragment fragment = this.f4413c;
            g3.c.o(fragment, r02, fragment.mContainerId);
        }
        int j10 = this.f4412b.j(this.f4413c);
        Fragment fragment2 = this.f4413c;
        fragment2.mContainer.addView(fragment2.mView, j10);
    }

    void c() {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "moveto ATTACHED: " + this.f4413c);
        }
        Fragment fragment = this.f4413c;
        Fragment fragment2 = fragment.mTarget;
        k0 k0Var = null;
        if (fragment2 != null) {
            k0 n10 = this.f4412b.n(fragment2.mWho);
            if (n10 != null) {
                Fragment fragment3 = this.f4413c;
                fragment3.mTargetWho = fragment3.mTarget.mWho;
                fragment3.mTarget = null;
                k0Var = n10;
            } else {
                throw new IllegalStateException("Fragment " + this.f4413c + " declared target fragment " + this.f4413c.mTarget + " that does not belong to this FragmentManager!");
            }
        } else {
            String str = fragment.mTargetWho;
            if (str != null && (k0Var = this.f4412b.n(str)) == null) {
                throw new IllegalStateException("Fragment " + this.f4413c + " declared target fragment " + this.f4413c.mTargetWho + " that does not belong to this FragmentManager!");
            }
        }
        if (k0Var != null) {
            k0Var.m();
        }
        Fragment fragment4 = this.f4413c;
        fragment4.mHost = fragment4.mFragmentManager.B0();
        Fragment fragment5 = this.f4413c;
        fragment5.mParentFragment = fragment5.mFragmentManager.E0();
        this.f4411a.g(this.f4413c, false);
        this.f4413c.performAttach();
        this.f4411a.b(this.f4413c, false);
    }

    int d() {
        t0.d.a aVar;
        Fragment fragment = this.f4413c;
        if (fragment.mFragmentManager == null) {
            return fragment.mState;
        }
        int i10 = this.f4415e;
        int i11 = b.f4418a[fragment.mMaxState.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 != 4) {
                        i10 = Math.min(i10, -1);
                    } else {
                        i10 = Math.min(i10, 0);
                    }
                } else {
                    i10 = Math.min(i10, 1);
                }
            } else {
                i10 = Math.min(i10, 5);
            }
        }
        Fragment fragment2 = this.f4413c;
        if (fragment2.mFromLayout) {
            if (fragment2.mInLayout) {
                i10 = Math.max(this.f4415e, 2);
                View view = this.f4413c.mView;
                if (view != null && view.getParent() == null) {
                    i10 = Math.min(i10, 2);
                }
            } else {
                i10 = this.f4415e < 4 ? Math.min(i10, fragment2.mState) : Math.min(i10, 1);
            }
        }
        Fragment fragment3 = this.f4413c;
        if (fragment3.mInDynamicContainer && fragment3.mContainer == null) {
            i10 = Math.min(i10, 4);
        }
        if (!this.f4413c.mAdded) {
            i10 = Math.min(i10, 1);
        }
        Fragment fragment4 = this.f4413c;
        ViewGroup viewGroup = fragment4.mContainer;
        if (viewGroup != null) {
            aVar = t0.u(viewGroup, fragment4.getParentFragmentManager()).s(this);
        } else {
            aVar = null;
        }
        if (aVar == t0.d.a.ADDING) {
            i10 = Math.min(i10, 6);
        } else if (aVar == t0.d.a.REMOVING) {
            i10 = Math.max(i10, 3);
        } else {
            Fragment fragment5 = this.f4413c;
            if (fragment5.mRemoving) {
                if (fragment5.isInBackStack()) {
                    i10 = Math.min(i10, 1);
                } else {
                    i10 = Math.min(i10, -1);
                }
            }
        }
        Fragment fragment6 = this.f4413c;
        if (fragment6.mDeferStart && fragment6.mState < 5) {
            i10 = Math.min(i10, 4);
        }
        if (this.f4413c.mTransitioning) {
            i10 = Math.max(i10, 3);
        }
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "computeExpectedState() of " + i10 + " for " + this.f4413c);
        }
        return i10;
    }

    void e() {
        Bundle bundle;
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "moveto CREATED: " + this.f4413c);
        }
        Bundle bundle2 = this.f4413c.mSavedFragmentState;
        if (bundle2 != null) {
            bundle = bundle2.getBundle("savedInstanceState");
        } else {
            bundle = null;
        }
        Fragment fragment = this.f4413c;
        if (!fragment.mIsCreated) {
            this.f4411a.h(fragment, bundle, false);
            this.f4413c.performCreate(bundle);
            this.f4411a.c(this.f4413c, bundle, false);
            return;
        }
        fragment.mState = 1;
        fragment.restoreChildFragmentState();
    }

    void f() {
        Bundle bundle;
        String str;
        if (this.f4413c.mFromLayout) {
            return;
        }
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "moveto CREATE_VIEW: " + this.f4413c);
        }
        Bundle bundle2 = this.f4413c.mSavedFragmentState;
        ViewGroup viewGroup = null;
        if (bundle2 != null) {
            bundle = bundle2.getBundle("savedInstanceState");
        } else {
            bundle = null;
        }
        LayoutInflater performGetLayoutInflater = this.f4413c.performGetLayoutInflater(bundle);
        Fragment fragment = this.f4413c;
        ViewGroup viewGroup2 = fragment.mContainer;
        if (viewGroup2 != null) {
            viewGroup = viewGroup2;
        } else {
            int i10 = fragment.mContainerId;
            if (i10 != 0) {
                if (i10 != -1) {
                    viewGroup = (ViewGroup) fragment.mFragmentManager.x0().c(this.f4413c.mContainerId);
                    if (viewGroup == null) {
                        Fragment fragment2 = this.f4413c;
                        if (!fragment2.mRestored && !fragment2.mInDynamicContainer) {
                            try {
                                str = fragment2.getResources().getResourceName(this.f4413c.mContainerId);
                            } catch (Resources.NotFoundException unused) {
                                str = "unknown";
                            }
                            throw new IllegalArgumentException("No view found for id 0x" + Integer.toHexString(this.f4413c.mContainerId) + " (" + str + ") for fragment " + this.f4413c);
                        }
                    } else if (!(viewGroup instanceof FragmentContainerView)) {
                        g3.c.n(this.f4413c, viewGroup);
                    }
                } else {
                    throw new IllegalArgumentException("Cannot create fragment " + this.f4413c + " for a container view with no id");
                }
            }
        }
        Fragment fragment3 = this.f4413c;
        fragment3.mContainer = viewGroup;
        fragment3.performCreateView(performGetLayoutInflater, viewGroup, bundle);
        if (this.f4413c.mView != null) {
            if (FragmentManager.O0(3)) {
                Log.d("FragmentManager", "moveto VIEW_CREATED: " + this.f4413c);
            }
            this.f4413c.mView.setSaveFromParentEnabled(false);
            Fragment fragment4 = this.f4413c;
            fragment4.mView.setTag(f3.b.f22172a, fragment4);
            if (viewGroup != null) {
                b();
            }
            Fragment fragment5 = this.f4413c;
            if (fragment5.mHidden) {
                fragment5.mView.setVisibility(8);
            }
            if (this.f4413c.mView.isAttachedToWindow()) {
                androidx.core.view.h0.k0(this.f4413c.mView);
            } else {
                View view = this.f4413c.mView;
                view.addOnAttachStateChangeListener(new a(view));
            }
            this.f4413c.performViewCreated();
            x xVar = this.f4411a;
            Fragment fragment6 = this.f4413c;
            xVar.m(fragment6, fragment6.mView, bundle, false);
            int visibility = this.f4413c.mView.getVisibility();
            this.f4413c.setPostOnViewCreatedAlpha(this.f4413c.mView.getAlpha());
            Fragment fragment7 = this.f4413c;
            if (fragment7.mContainer != null && visibility == 0) {
                View findFocus = fragment7.mView.findFocus();
                if (findFocus != null) {
                    this.f4413c.setFocusedView(findFocus);
                    if (FragmentManager.O0(2)) {
                        Log.v("FragmentManager", "requestFocus: Saved focused view " + findFocus + " for Fragment " + this.f4413c);
                    }
                }
                this.f4413c.mView.setAlpha(0.0f);
            }
        }
        this.f4413c.mState = 2;
    }

    void g() {
        boolean z10;
        Fragment f10;
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "movefrom CREATED: " + this.f4413c);
        }
        Fragment fragment = this.f4413c;
        boolean z11 = true;
        if (fragment.mRemoving && !fragment.isInBackStack()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            Fragment fragment2 = this.f4413c;
            if (!fragment2.mBeingSaved) {
                this.f4412b.B(fragment2.mWho, null);
            }
        }
        if (!z10 && !this.f4412b.p().q(this.f4413c)) {
            String str = this.f4413c.mTargetWho;
            if (str != null && (f10 = this.f4412b.f(str)) != null && f10.mRetainInstance) {
                this.f4413c.mTarget = f10;
            }
            this.f4413c.mState = 0;
            return;
        }
        FragmentHostCallback fragmentHostCallback = this.f4413c.mHost;
        if (fragmentHostCallback instanceof androidx.lifecycle.q0) {
            z11 = this.f4412b.p().n();
        } else if (fragmentHostCallback.g() instanceof Activity) {
            z11 = true ^ ((Activity) fragmentHostCallback.g()).isChangingConfigurations();
        }
        if ((z10 && !this.f4413c.mBeingSaved) || z11) {
            this.f4412b.p().f(this.f4413c, false);
        }
        this.f4413c.performDestroy();
        this.f4411a.d(this.f4413c, false);
        for (k0 k0Var : this.f4412b.k()) {
            if (k0Var != null) {
                Fragment k10 = k0Var.k();
                if (this.f4413c.mWho.equals(k10.mTargetWho)) {
                    k10.mTarget = this.f4413c;
                    k10.mTargetWho = null;
                }
            }
        }
        Fragment fragment3 = this.f4413c;
        String str2 = fragment3.mTargetWho;
        if (str2 != null) {
            fragment3.mTarget = this.f4412b.f(str2);
        }
        this.f4412b.s(this);
    }

    void h() {
        View view;
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "movefrom CREATE_VIEW: " + this.f4413c);
        }
        Fragment fragment = this.f4413c;
        ViewGroup viewGroup = fragment.mContainer;
        if (viewGroup != null && (view = fragment.mView) != null) {
            viewGroup.removeView(view);
        }
        this.f4413c.performDestroyView();
        this.f4411a.n(this.f4413c, false);
        Fragment fragment2 = this.f4413c;
        fragment2.mContainer = null;
        fragment2.mView = null;
        fragment2.mViewLifecycleOwner = null;
        fragment2.mViewLifecycleOwnerLiveData.o(null);
        this.f4413c.mInLayout = false;
    }

    void i() {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "movefrom ATTACHED: " + this.f4413c);
        }
        this.f4413c.performDetach();
        this.f4411a.e(this.f4413c, false);
        Fragment fragment = this.f4413c;
        fragment.mState = -1;
        fragment.mHost = null;
        fragment.mParentFragment = null;
        fragment.mFragmentManager = null;
        if ((fragment.mRemoving && !fragment.isInBackStack()) || this.f4412b.p().q(this.f4413c)) {
            if (FragmentManager.O0(3)) {
                Log.d("FragmentManager", "initState called for fragment: " + this.f4413c);
            }
            this.f4413c.initState();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        Bundle bundle;
        Fragment fragment = this.f4413c;
        if (fragment.mFromLayout && fragment.mInLayout && !fragment.mPerformedCreateView) {
            if (FragmentManager.O0(3)) {
                Log.d("FragmentManager", "moveto CREATE_VIEW: " + this.f4413c);
            }
            Bundle bundle2 = this.f4413c.mSavedFragmentState;
            if (bundle2 != null) {
                bundle = bundle2.getBundle("savedInstanceState");
            } else {
                bundle = null;
            }
            Fragment fragment2 = this.f4413c;
            fragment2.performCreateView(fragment2.performGetLayoutInflater(bundle), null, bundle);
            View view = this.f4413c.mView;
            if (view != null) {
                view.setSaveFromParentEnabled(false);
                Fragment fragment3 = this.f4413c;
                fragment3.mView.setTag(f3.b.f22172a, fragment3);
                Fragment fragment4 = this.f4413c;
                if (fragment4.mHidden) {
                    fragment4.mView.setVisibility(8);
                }
                this.f4413c.performViewCreated();
                x xVar = this.f4411a;
                Fragment fragment5 = this.f4413c;
                xVar.m(fragment5, fragment5.mView, bundle, false);
                this.f4413c.mState = 2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Fragment k() {
        return this.f4413c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m() {
        ViewGroup viewGroup;
        ViewGroup viewGroup2;
        ViewGroup viewGroup3;
        if (this.f4414d) {
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Ignoring re-entrant call to moveToExpectedState() for " + k());
                return;
            }
            return;
        }
        try {
            this.f4414d = true;
            boolean z10 = false;
            while (true) {
                int d10 = d();
                Fragment fragment = this.f4413c;
                int i10 = fragment.mState;
                if (d10 != i10) {
                    if (d10 > i10) {
                        switch (i10 + 1) {
                            case 0:
                                c();
                                continue;
                            case 1:
                                e();
                                continue;
                            case 2:
                                j();
                                f();
                                continue;
                            case 3:
                                a();
                                continue;
                            case 4:
                                if (fragment.mView != null && (viewGroup3 = fragment.mContainer) != null) {
                                    t0.u(viewGroup3, fragment.getParentFragmentManager()).j(t0.d.b.e(this.f4413c.mView.getVisibility()), this);
                                }
                                this.f4413c.mState = 4;
                                continue;
                            case 5:
                                t();
                                continue;
                            case 6:
                                fragment.mState = 6;
                                continue;
                            case 7:
                                p();
                                continue;
                            default:
                                continue;
                        }
                    } else {
                        switch (i10 - 1) {
                            case -1:
                                i();
                                continue;
                            case 0:
                                if (fragment.mBeingSaved && this.f4412b.q(fragment.mWho) == null) {
                                    this.f4412b.B(this.f4413c.mWho, q());
                                }
                                g();
                                continue;
                            case 1:
                                h();
                                this.f4413c.mState = 1;
                                continue;
                            case 2:
                                fragment.mInLayout = false;
                                fragment.mState = 2;
                                continue;
                            case 3:
                                if (FragmentManager.O0(3)) {
                                    Log.d("FragmentManager", "movefrom ACTIVITY_CREATED: " + this.f4413c);
                                }
                                Fragment fragment2 = this.f4413c;
                                if (fragment2.mBeingSaved) {
                                    this.f4412b.B(fragment2.mWho, q());
                                } else if (fragment2.mView != null && fragment2.mSavedViewState == null) {
                                    r();
                                }
                                Fragment fragment3 = this.f4413c;
                                if (fragment3.mView != null && (viewGroup2 = fragment3.mContainer) != null) {
                                    t0.u(viewGroup2, fragment3.getParentFragmentManager()).l(this);
                                }
                                this.f4413c.mState = 3;
                                continue;
                            case 4:
                                u();
                                continue;
                            case 5:
                                fragment.mState = 5;
                                continue;
                            case 6:
                                n();
                                continue;
                            default:
                                continue;
                        }
                    }
                    z10 = true;
                } else {
                    if (!z10 && i10 == -1 && fragment.mRemoving && !fragment.isInBackStack() && !this.f4413c.mBeingSaved) {
                        if (FragmentManager.O0(3)) {
                            Log.d("FragmentManager", "Cleaning up state of never attached fragment: " + this.f4413c);
                        }
                        this.f4412b.p().f(this.f4413c, true);
                        this.f4412b.s(this);
                        if (FragmentManager.O0(3)) {
                            Log.d("FragmentManager", "initState called for fragment: " + this.f4413c);
                        }
                        this.f4413c.initState();
                    }
                    Fragment fragment4 = this.f4413c;
                    if (fragment4.mHiddenChanged) {
                        if (fragment4.mView != null && (viewGroup = fragment4.mContainer) != null) {
                            t0 u10 = t0.u(viewGroup, fragment4.getParentFragmentManager());
                            if (this.f4413c.mHidden) {
                                u10.k(this);
                            } else {
                                u10.m(this);
                            }
                        }
                        Fragment fragment5 = this.f4413c;
                        FragmentManager fragmentManager = fragment5.mFragmentManager;
                        if (fragmentManager != null) {
                            fragmentManager.M0(fragment5);
                        }
                        Fragment fragment6 = this.f4413c;
                        fragment6.mHiddenChanged = false;
                        fragment6.onHiddenChanged(fragment6.mHidden);
                        this.f4413c.mChildFragmentManager.N();
                    }
                    this.f4414d = false;
                    return;
                }
            }
        } catch (Throwable th2) {
            this.f4414d = false;
            throw th2;
        }
    }

    void n() {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "movefrom RESUMED: " + this.f4413c);
        }
        this.f4413c.performPause();
        this.f4411a.f(this.f4413c, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(ClassLoader classLoader) {
        Bundle bundle = this.f4413c.mSavedFragmentState;
        if (bundle != null) {
            bundle.setClassLoader(classLoader);
            if (this.f4413c.mSavedFragmentState.getBundle("savedInstanceState") == null) {
                this.f4413c.mSavedFragmentState.putBundle("savedInstanceState", new Bundle());
            }
            try {
                Fragment fragment = this.f4413c;
                fragment.mSavedViewState = fragment.mSavedFragmentState.getSparseParcelableArray("viewState");
                Fragment fragment2 = this.f4413c;
                fragment2.mSavedViewRegistryState = fragment2.mSavedFragmentState.getBundle("viewRegistryState");
                j0 j0Var = (j0) this.f4413c.mSavedFragmentState.getParcelable("state");
                if (j0Var != null) {
                    Fragment fragment3 = this.f4413c;
                    fragment3.mTargetWho = j0Var.f4405x;
                    fragment3.mTargetRequestCode = j0Var.f4406y;
                    Boolean bool = fragment3.mSavedUserVisibleHint;
                    if (bool != null) {
                        fragment3.mUserVisibleHint = bool.booleanValue();
                        this.f4413c.mSavedUserVisibleHint = null;
                    } else {
                        fragment3.mUserVisibleHint = j0Var.f4407z;
                    }
                }
                Fragment fragment4 = this.f4413c;
                if (!fragment4.mUserVisibleHint) {
                    fragment4.mDeferStart = true;
                }
            } catch (BadParcelableException e10) {
                throw new IllegalStateException("Failed to restore view hierarchy state for fragment " + k(), e10);
            }
        }
    }

    void p() {
        String str;
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "moveto RESUMED: " + this.f4413c);
        }
        View focusedView = this.f4413c.getFocusedView();
        if (focusedView != null && l(focusedView)) {
            boolean requestFocus = focusedView.requestFocus();
            if (FragmentManager.O0(2)) {
                StringBuilder sb2 = new StringBuilder();
                sb2.append("requestFocus: Restoring focused view ");
                sb2.append(focusedView);
                sb2.append(" ");
                if (requestFocus) {
                    str = "succeeded";
                } else {
                    str = "failed";
                }
                sb2.append(str);
                sb2.append(" on Fragment ");
                sb2.append(this.f4413c);
                sb2.append(" resulting in focused view ");
                sb2.append(this.f4413c.mView.findFocus());
                Log.v("FragmentManager", sb2.toString());
            }
        }
        this.f4413c.setFocusedView(null);
        this.f4413c.performResume();
        this.f4411a.i(this.f4413c, false);
        this.f4412b.B(this.f4413c.mWho, null);
        Fragment fragment = this.f4413c;
        fragment.mSavedFragmentState = null;
        fragment.mSavedViewState = null;
        fragment.mSavedViewRegistryState = null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bundle q() {
        Bundle bundle;
        Bundle bundle2 = new Bundle();
        Fragment fragment = this.f4413c;
        if (fragment.mState == -1 && (bundle = fragment.mSavedFragmentState) != null) {
            bundle2.putAll(bundle);
        }
        bundle2.putParcelable("state", new j0(this.f4413c));
        if (this.f4413c.mState > -1) {
            Bundle bundle3 = new Bundle();
            this.f4413c.performSaveInstanceState(bundle3);
            if (!bundle3.isEmpty()) {
                bundle2.putBundle("savedInstanceState", bundle3);
            }
            this.f4411a.j(this.f4413c, bundle3, false);
            Bundle bundle4 = new Bundle();
            this.f4413c.mSavedStateRegistryController.e(bundle4);
            if (!bundle4.isEmpty()) {
                bundle2.putBundle("registryState", bundle4);
            }
            Bundle s12 = this.f4413c.mChildFragmentManager.s1();
            if (!s12.isEmpty()) {
                bundle2.putBundle("childFragmentManager", s12);
            }
            if (this.f4413c.mView != null) {
                r();
            }
            SparseArray<Parcelable> sparseArray = this.f4413c.mSavedViewState;
            if (sparseArray != null) {
                bundle2.putSparseParcelableArray("viewState", sparseArray);
            }
            Bundle bundle5 = this.f4413c.mSavedViewRegistryState;
            if (bundle5 != null) {
                bundle2.putBundle("viewRegistryState", bundle5);
            }
        }
        Bundle bundle6 = this.f4413c.mArguments;
        if (bundle6 != null) {
            bundle2.putBundle("arguments", bundle6);
        }
        return bundle2;
    }

    void r() {
        if (this.f4413c.mView != null) {
            if (FragmentManager.O0(2)) {
                Log.v("FragmentManager", "Saving view state for fragment " + this.f4413c + " with view " + this.f4413c.mView);
            }
            SparseArray<Parcelable> sparseArray = new SparseArray<>();
            this.f4413c.mView.saveHierarchyState(sparseArray);
            if (sparseArray.size() > 0) {
                this.f4413c.mSavedViewState = sparseArray;
            }
            Bundle bundle = new Bundle();
            this.f4413c.mViewLifecycleOwner.f(bundle);
            if (!bundle.isEmpty()) {
                this.f4413c.mSavedViewRegistryState = bundle;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(int i10) {
        this.f4415e = i10;
    }

    void t() {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "moveto STARTED: " + this.f4413c);
        }
        this.f4413c.performStart();
        this.f4411a.k(this.f4413c, false);
    }

    void u() {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "movefrom STARTED: " + this.f4413c);
        }
        this.f4413c.performStop();
        this.f4411a.l(this.f4413c, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(x xVar, l0 l0Var, ClassLoader classLoader, u uVar, Bundle bundle) {
        this.f4411a = xVar;
        this.f4412b = l0Var;
        Fragment a10 = ((j0) bundle.getParcelable("state")).a(uVar, classLoader);
        this.f4413c = a10;
        a10.mSavedFragmentState = bundle;
        Bundle bundle2 = bundle.getBundle("arguments");
        if (bundle2 != null) {
            bundle2.setClassLoader(classLoader);
        }
        a10.setArguments(bundle2);
        if (FragmentManager.O0(2)) {
            Log.v("FragmentManager", "Instantiated fragment " + a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(x xVar, l0 l0Var, Fragment fragment, Bundle bundle) {
        this.f4411a = xVar;
        this.f4412b = l0Var;
        this.f4413c = fragment;
        fragment.mSavedViewState = null;
        fragment.mSavedViewRegistryState = null;
        fragment.mBackStackNesting = 0;
        fragment.mInLayout = false;
        fragment.mAdded = false;
        Fragment fragment2 = fragment.mTarget;
        fragment.mTargetWho = fragment2 != null ? fragment2.mWho : null;
        fragment.mTarget = null;
        fragment.mSavedFragmentState = bundle;
        fragment.mArguments = bundle.getBundle("arguments");
    }
}
