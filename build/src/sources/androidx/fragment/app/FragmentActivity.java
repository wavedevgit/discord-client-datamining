package androidx.fragment.app;

import android.content.Context;
import android.content.Intent;
import android.content.IntentSender;
import android.content.res.Configuration;
import android.os.Bundle;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import androidx.activity.ComponentActivity;
import androidx.activity.OnBackPressedDispatcher;
import androidx.activity.contextaware.OnContextAvailableListener;
import androidx.activity.result.ActivityResultRegistry;
import androidx.annotation.NonNull;
import androidx.core.app.SharedElementCallback;
import androidx.core.app.b;
import androidx.core.util.Consumer;
import androidx.core.view.MenuProvider;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleRegistry;
import androidx.lifecycle.ViewModelStore;
import androidx.loader.app.LoaderManager;
import androidx.savedstate.SavedStateRegistry;
import java.io.FileDescriptor;
import java.io.PrintWriter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FragmentActivity extends ComponentActivity implements b.e {
    static final String LIFECYCLE_TAG = "android:support:lifecycle";
    boolean mCreated;
    boolean mResumed;
    final FragmentController mFragments = FragmentController.b(new a());
    final LifecycleRegistry mFragmentLifecycleRegistry = new LifecycleRegistry(this);
    boolean mStopped = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends FragmentHostCallback implements androidx.core.content.d, androidx.core.content.e, androidx.core.app.s, androidx.core.app.t, androidx.lifecycle.q0, androidx.activity.z, d.d, u3.f, h0, androidx.core.view.n {
        public a() {
            super(FragmentActivity.this);
        }

        @Override // androidx.fragment.app.h0
        public void a(FragmentManager fragmentManager, Fragment fragment) {
            FragmentActivity.this.onAttachFragment(fragment);
        }

        @Override // androidx.core.view.n
        public void addMenuProvider(MenuProvider menuProvider) {
            FragmentActivity.this.addMenuProvider(menuProvider);
        }

        @Override // androidx.core.content.d
        public void addOnConfigurationChangedListener(Consumer consumer) {
            FragmentActivity.this.addOnConfigurationChangedListener(consumer);
        }

        @Override // androidx.core.app.s
        public void addOnMultiWindowModeChangedListener(Consumer consumer) {
            FragmentActivity.this.addOnMultiWindowModeChangedListener(consumer);
        }

        @Override // androidx.core.app.t
        public void addOnPictureInPictureModeChangedListener(Consumer consumer) {
            FragmentActivity.this.addOnPictureInPictureModeChangedListener(consumer);
        }

        @Override // androidx.core.content.e
        public void addOnTrimMemoryListener(Consumer consumer) {
            FragmentActivity.this.addOnTrimMemoryListener(consumer);
        }

        @Override // androidx.fragment.app.FragmentHostCallback, androidx.fragment.app.FragmentContainer
        public View c(int i10) {
            return FragmentActivity.this.findViewById(i10);
        }

        @Override // androidx.fragment.app.FragmentHostCallback, androidx.fragment.app.FragmentContainer
        public boolean e() {
            Window window = FragmentActivity.this.getWindow();
            if (window != null && window.peekDecorView() != null) {
                return true;
            }
            return false;
        }

        @Override // d.d
        public ActivityResultRegistry getActivityResultRegistry() {
            return FragmentActivity.this.getActivityResultRegistry();
        }

        @Override // androidx.lifecycle.LifecycleOwner
        public Lifecycle getLifecycle() {
            return FragmentActivity.this.mFragmentLifecycleRegistry;
        }

        @Override // androidx.activity.z
        public OnBackPressedDispatcher getOnBackPressedDispatcher() {
            return FragmentActivity.this.getOnBackPressedDispatcher();
        }

        @Override // u3.f
        public SavedStateRegistry getSavedStateRegistry() {
            return FragmentActivity.this.getSavedStateRegistry();
        }

        @Override // androidx.lifecycle.q0
        public ViewModelStore getViewModelStore() {
            return FragmentActivity.this.getViewModelStore();
        }

        @Override // androidx.fragment.app.FragmentHostCallback
        public void j(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr) {
            FragmentActivity.this.dump(str, fileDescriptor, printWriter, strArr);
        }

        @Override // androidx.fragment.app.FragmentHostCallback
        public LayoutInflater l() {
            return FragmentActivity.this.getLayoutInflater().cloneInContext(FragmentActivity.this);
        }

        @Override // androidx.fragment.app.FragmentHostCallback
        public boolean n(String str) {
            return androidx.core.app.b.y(FragmentActivity.this, str);
        }

        @Override // androidx.fragment.app.FragmentHostCallback
        public void q() {
            r();
        }

        public void r() {
            FragmentActivity.this.invalidateMenu();
        }

        @Override // androidx.core.view.n
        public void removeMenuProvider(MenuProvider menuProvider) {
            FragmentActivity.this.removeMenuProvider(menuProvider);
        }

        @Override // androidx.core.content.d
        public void removeOnConfigurationChangedListener(Consumer consumer) {
            FragmentActivity.this.removeOnConfigurationChangedListener(consumer);
        }

        @Override // androidx.core.app.s
        public void removeOnMultiWindowModeChangedListener(Consumer consumer) {
            FragmentActivity.this.removeOnMultiWindowModeChangedListener(consumer);
        }

        @Override // androidx.core.app.t
        public void removeOnPictureInPictureModeChangedListener(Consumer consumer) {
            FragmentActivity.this.removeOnPictureInPictureModeChangedListener(consumer);
        }

        @Override // androidx.core.content.e
        public void removeOnTrimMemoryListener(Consumer consumer) {
            FragmentActivity.this.removeOnTrimMemoryListener(consumer);
        }

        @Override // androidx.fragment.app.FragmentHostCallback
        /* renamed from: s */
        public FragmentActivity k() {
            return FragmentActivity.this;
        }
    }

    public FragmentActivity() {
        v();
    }

    public static /* synthetic */ Bundle t(FragmentActivity fragmentActivity) {
        fragmentActivity.markFragmentsCreated();
        fragmentActivity.mFragmentLifecycleRegistry.j(Lifecycle.a.ON_STOP);
        return new Bundle();
    }

    private void v() {
        getSavedStateRegistry().c(LIFECYCLE_TAG, new SavedStateRegistry.b() { // from class: androidx.fragment.app.p
            @Override // androidx.savedstate.SavedStateRegistry.b
            public final Bundle a() {
                return FragmentActivity.t(FragmentActivity.this);
            }
        });
        addOnConfigurationChangedListener(new Consumer() { // from class: androidx.fragment.app.q
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                Configuration configuration = (Configuration) obj;
                FragmentActivity.this.mFragments.m();
            }
        });
        addOnNewIntentListener(new Consumer() { // from class: androidx.fragment.app.r
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                Intent intent = (Intent) obj;
                FragmentActivity.this.mFragments.m();
            }
        });
        addOnContextAvailableListener(new OnContextAvailableListener() { // from class: androidx.fragment.app.s
            @Override // androidx.activity.contextaware.OnContextAvailableListener
            public final void a(Context context) {
                FragmentActivity.this.mFragments.a(null);
            }
        });
    }

    private static boolean w(FragmentManager fragmentManager, Lifecycle.State state) {
        boolean z10 = false;
        for (Fragment fragment : fragmentManager.A0()) {
            if (fragment != null) {
                if (fragment.getHost() != null) {
                    z10 |= w(fragment.getChildFragmentManager(), state);
                }
                FragmentViewLifecycleOwner fragmentViewLifecycleOwner = fragment.mViewLifecycleOwner;
                if (fragmentViewLifecycleOwner != null && fragmentViewLifecycleOwner.getLifecycle().b().d(Lifecycle.State.f4520o)) {
                    fragment.mViewLifecycleOwner.g(state);
                    z10 = true;
                }
                if (fragment.mLifecycleRegistry.b().d(Lifecycle.State.f4520o)) {
                    fragment.mLifecycleRegistry.o(state);
                    z10 = true;
                }
            }
        }
        return z10;
    }

    final View dispatchFragmentsOnCreateView(View view, @NonNull String str, @NonNull Context context, @NonNull AttributeSet attributeSet) {
        return this.mFragments.n(view, str, context, attributeSet);
    }

    @Override // android.app.Activity
    public void dump(@NonNull String str, FileDescriptor fileDescriptor, @NonNull PrintWriter printWriter, String[] strArr) {
        super.dump(str, fileDescriptor, printWriter, strArr);
        if (!shouldDumpInternalState(strArr)) {
            return;
        }
        printWriter.print(str);
        printWriter.print("Local FragmentActivity ");
        printWriter.print(Integer.toHexString(System.identityHashCode(this)));
        printWriter.println(" State:");
        String str2 = str + "  ";
        printWriter.print(str2);
        printWriter.print("mCreated=");
        printWriter.print(this.mCreated);
        printWriter.print(" mResumed=");
        printWriter.print(this.mResumed);
        printWriter.print(" mStopped=");
        printWriter.print(this.mStopped);
        if (getApplication() != null) {
            LoaderManager.b(this).a(str2, fileDescriptor, printWriter, strArr);
        }
        this.mFragments.l().b0(str, fileDescriptor, printWriter, strArr);
    }

    @NonNull
    public FragmentManager getSupportFragmentManager() {
        return this.mFragments.l();
    }

    @NonNull
    @Deprecated
    public LoaderManager getSupportLoaderManager() {
        return LoaderManager.b(this);
    }

    void markFragmentsCreated() {
        do {
        } while (w(getSupportFragmentManager(), Lifecycle.State.f4519i));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.activity.ComponentActivity, android.app.Activity
    public void onActivityResult(int i10, int i11, Intent intent) {
        this.mFragments.m();
        super.onActivityResult(i10, i11, intent);
    }

    @Deprecated
    public void onAttachFragment(@NonNull Fragment fragment) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.mFragmentLifecycleRegistry.j(Lifecycle.a.ON_CREATE);
        this.mFragments.e();
    }

    @Override // android.app.Activity, android.view.LayoutInflater.Factory2
    public View onCreateView(View view, @NonNull String str, @NonNull Context context, @NonNull AttributeSet attributeSet) {
        View dispatchFragmentsOnCreateView = dispatchFragmentsOnCreateView(view, str, context, attributeSet);
        return dispatchFragmentsOnCreateView == null ? super.onCreateView(view, str, context, attributeSet) : dispatchFragmentsOnCreateView;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.app.Activity
    public void onDestroy() {
        super.onDestroy();
        this.mFragments.f();
        this.mFragmentLifecycleRegistry.j(Lifecycle.a.ON_DESTROY);
    }

    @Override // androidx.activity.ComponentActivity, android.app.Activity, android.view.Window.Callback
    public boolean onMenuItemSelected(int i10, MenuItem menuItem) {
        if (super.onMenuItemSelected(i10, menuItem)) {
            return true;
        }
        if (i10 == 6) {
            return this.mFragments.d(menuItem);
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.app.Activity
    public void onPause() {
        super.onPause();
        this.mResumed = false;
        this.mFragments.g();
        this.mFragmentLifecycleRegistry.j(Lifecycle.a.ON_PAUSE);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.app.Activity
    public void onPostResume() {
        super.onPostResume();
        onResumeFragments();
    }

    @Override // androidx.activity.ComponentActivity, android.app.Activity
    public void onRequestPermissionsResult(int i10, @NonNull String[] strArr, @NonNull int[] iArr) {
        this.mFragments.m();
        super.onRequestPermissionsResult(i10, strArr, iArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.app.Activity
    public void onResume() {
        this.mFragments.m();
        super.onResume();
        this.mResumed = true;
        this.mFragments.k();
    }

    protected void onResumeFragments() {
        this.mFragmentLifecycleRegistry.j(Lifecycle.a.ON_RESUME);
        this.mFragments.h();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.app.Activity
    public void onStart() {
        this.mFragments.m();
        super.onStart();
        this.mStopped = false;
        if (!this.mCreated) {
            this.mCreated = true;
            this.mFragments.c();
        }
        this.mFragments.k();
        this.mFragmentLifecycleRegistry.j(Lifecycle.a.ON_START);
        this.mFragments.i();
    }

    @Override // android.app.Activity
    public void onStateNotSaved() {
        this.mFragments.m();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.app.Activity
    public void onStop() {
        super.onStop();
        this.mStopped = true;
        markFragmentsCreated();
        this.mFragments.j();
        this.mFragmentLifecycleRegistry.j(Lifecycle.a.ON_STOP);
    }

    public void setEnterSharedElementCallback(SharedElementCallback sharedElementCallback) {
        androidx.core.app.b.w(this, sharedElementCallback);
    }

    public void setExitSharedElementCallback(SharedElementCallback sharedElementCallback) {
        androidx.core.app.b.x(this, sharedElementCallback);
    }

    public void startActivityFromFragment(@NonNull Fragment fragment, @NonNull Intent intent, int i10) {
        startActivityFromFragment(fragment, intent, i10, (Bundle) null);
    }

    @Deprecated
    public void startIntentSenderFromFragment(@NonNull Fragment fragment, @NonNull IntentSender intentSender, int i10, Intent intent, int i11, int i12, int i13, Bundle bundle) {
        if (i10 == -1) {
            androidx.core.app.b.A(this, intentSender, i10, intent, i11, i12, i13, bundle);
        } else {
            fragment.startIntentSenderForResult(intentSender, i10, intent, i11, i12, i13, bundle);
        }
    }

    public void supportFinishAfterTransition() {
        androidx.core.app.b.s(this);
    }

    public void supportPostponeEnterTransition() {
        androidx.core.app.b.t(this);
    }

    public void supportStartPostponedEnterTransition() {
        androidx.core.app.b.B(this);
    }

    @Override // androidx.core.app.b.e
    @Deprecated
    public final void validateRequestPermissionsRequestCode(int i10) {
    }

    public void startActivityFromFragment(@NonNull Fragment fragment, @NonNull Intent intent, int i10, Bundle bundle) {
        if (i10 == -1) {
            androidx.core.app.b.z(this, intent, -1, bundle);
        } else {
            fragment.startActivityForResult(intent, i10, bundle);
        }
    }

    @Override // android.app.Activity, android.view.LayoutInflater.Factory
    public View onCreateView(@NonNull String str, @NonNull Context context, @NonNull AttributeSet attributeSet) {
        View dispatchFragmentsOnCreateView = dispatchFragmentsOnCreateView(null, str, context, attributeSet);
        return dispatchFragmentsOnCreateView == null ? super.onCreateView(str, context, attributeSet) : dispatchFragmentsOnCreateView;
    }
}
