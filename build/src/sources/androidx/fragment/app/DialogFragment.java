package androidx.fragment.app;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import androidx.activity.ComponentDialog;
import androidx.annotation.NonNull;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.Observer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class DialogFragment extends Fragment implements DialogInterface.OnCancelListener, DialogInterface.OnDismissListener {
    private static final String SAVED_BACK_STACK_ID = "android:backStackId";
    private static final String SAVED_CANCELABLE = "android:cancelable";
    private static final String SAVED_DIALOG_STATE_TAG = "android:savedDialogState";
    private static final String SAVED_INTERNAL_DIALOG_SHOWING = "android:dialogShowing";
    private static final String SAVED_SHOWS_DIALOG = "android:showsDialog";
    private static final String SAVED_STYLE = "android:style";
    private static final String SAVED_THEME = "android:theme";
    public static final int STYLE_NORMAL = 0;
    public static final int STYLE_NO_FRAME = 2;
    public static final int STYLE_NO_INPUT = 3;
    public static final int STYLE_NO_TITLE = 1;
    private boolean mCreatingDialog;
    private Dialog mDialog;
    private boolean mDismissed;
    private Handler mHandler;
    private boolean mShownByMe;
    private boolean mViewDestroyed;
    private Runnable mDismissRunnable = new a();
    private DialogInterface.OnCancelListener mOnCancelListener = new b();
    private DialogInterface.OnDismissListener mOnDismissListener = new c();
    private int mStyle = 0;
    private int mTheme = 0;
    private boolean mCancelable = true;
    private boolean mShowsDialog = true;
    private int mBackStackId = -1;
    private Observer mObserver = new d();
    private boolean mDialogCreated = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            DialogFragment.this.mOnDismissListener.onDismiss(DialogFragment.this.mDialog);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements DialogInterface.OnCancelListener {
        b() {
        }

        @Override // android.content.DialogInterface.OnCancelListener
        public void onCancel(DialogInterface dialogInterface) {
            if (DialogFragment.this.mDialog != null) {
                DialogFragment dialogFragment = DialogFragment.this;
                dialogFragment.onCancel(dialogFragment.mDialog);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements DialogInterface.OnDismissListener {
        c() {
        }

        @Override // android.content.DialogInterface.OnDismissListener
        public void onDismiss(DialogInterface dialogInterface) {
            if (DialogFragment.this.mDialog != null) {
                DialogFragment dialogFragment = DialogFragment.this;
                dialogFragment.onDismiss(dialogFragment.mDialog);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d implements Observer {
        d() {
        }

        @Override // androidx.lifecycle.Observer
        /* renamed from: b */
        public void a(LifecycleOwner lifecycleOwner) {
            if (lifecycleOwner != null && DialogFragment.this.mShowsDialog) {
                View requireView = DialogFragment.this.requireView();
                if (requireView.getParent() == null) {
                    if (DialogFragment.this.mDialog != null) {
                        if (FragmentManager.O0(3)) {
                            Log.d("FragmentManager", "DialogFragment " + this + " setting the content view on " + DialogFragment.this.mDialog);
                        }
                        DialogFragment.this.mDialog.setContentView(requireView);
                        return;
                    }
                    return;
                }
                throw new IllegalStateException("DialogFragment can not be attached to a container view");
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class e extends FragmentContainer {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ FragmentContainer f4042d;

        e(FragmentContainer fragmentContainer) {
            this.f4042d = fragmentContainer;
        }

        @Override // androidx.fragment.app.FragmentContainer
        public View c(int i10) {
            if (this.f4042d.d()) {
                return this.f4042d.c(i10);
            }
            return DialogFragment.this.onFindViewById(i10);
        }

        @Override // androidx.fragment.app.FragmentContainer
        public boolean d() {
            if (!this.f4042d.d() && !DialogFragment.this.onHasView()) {
                return false;
            }
            return true;
        }
    }

    private void x(boolean z10, boolean z11, boolean z12) {
        if (this.mDismissed) {
            return;
        }
        this.mDismissed = true;
        this.mShownByMe = false;
        Dialog dialog = this.mDialog;
        if (dialog != null) {
            dialog.setOnDismissListener(null);
            this.mDialog.dismiss();
            if (!z11) {
                if (Looper.myLooper() == this.mHandler.getLooper()) {
                    onDismiss(this.mDialog);
                } else {
                    this.mHandler.post(this.mDismissRunnable);
                }
            }
        }
        this.mViewDestroyed = true;
        if (this.mBackStackId >= 0) {
            if (z12) {
                getParentFragmentManager().g1(this.mBackStackId, 1);
            } else {
                getParentFragmentManager().e1(this.mBackStackId, 1, z10);
            }
            this.mBackStackId = -1;
            return;
        }
        FragmentTransaction r10 = getParentFragmentManager().r();
        r10.t(true);
        r10.m(this);
        if (z12) {
            r10.i();
        } else if (z10) {
            r10.h();
        } else {
            r10.g();
        }
    }

    private void y(Bundle bundle) {
        if (this.mShowsDialog && !this.mDialogCreated) {
            try {
                this.mCreatingDialog = true;
                Dialog onCreateDialog = onCreateDialog(bundle);
                this.mDialog = onCreateDialog;
                if (this.mShowsDialog) {
                    setupDialog(onCreateDialog, this.mStyle);
                    Context context = getContext();
                    if (context instanceof Activity) {
                        this.mDialog.setOwnerActivity((Activity) context);
                    }
                    this.mDialog.setCancelable(this.mCancelable);
                    this.mDialog.setOnCancelListener(this.mOnCancelListener);
                    this.mDialog.setOnDismissListener(this.mOnDismissListener);
                    this.mDialogCreated = true;
                } else {
                    this.mDialog = null;
                }
                this.mCreatingDialog = false;
            } catch (Throwable th2) {
                this.mCreatingDialog = false;
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.fragment.app.Fragment
    @NonNull
    public FragmentContainer createFragmentContainer() {
        return new e(super.createFragmentContainer());
    }

    public void dismiss() {
        x(false, false, false);
    }

    public void dismissAllowingStateLoss() {
        x(true, false, false);
    }

    public void dismissNow() {
        x(false, false, true);
    }

    public Dialog getDialog() {
        return this.mDialog;
    }

    public boolean getShowsDialog() {
        return this.mShowsDialog;
    }

    public int getTheme() {
        return this.mTheme;
    }

    public boolean isCancelable() {
        return this.mCancelable;
    }

    @Override // androidx.fragment.app.Fragment
    @Deprecated
    public void onActivityCreated(Bundle bundle) {
        super.onActivityCreated(bundle);
    }

    @Override // androidx.fragment.app.Fragment
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);
        getViewLifecycleOwnerLiveData().j(this.mObserver);
        if (!this.mShownByMe) {
            this.mDismissed = false;
        }
    }

    @Override // android.content.DialogInterface.OnCancelListener
    public void onCancel(@NonNull DialogInterface dialogInterface) {
    }

    @Override // androidx.fragment.app.Fragment
    public void onCreate(Bundle bundle) {
        boolean z10;
        super.onCreate(bundle);
        this.mHandler = new Handler();
        if (this.mContainerId == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.mShowsDialog = z10;
        if (bundle != null) {
            this.mStyle = bundle.getInt(SAVED_STYLE, 0);
            this.mTheme = bundle.getInt(SAVED_THEME, 0);
            this.mCancelable = bundle.getBoolean(SAVED_CANCELABLE, true);
            this.mShowsDialog = bundle.getBoolean(SAVED_SHOWS_DIALOG, this.mShowsDialog);
            this.mBackStackId = bundle.getInt(SAVED_BACK_STACK_ID, -1);
        }
    }

    public Dialog onCreateDialog(Bundle bundle) {
        if (FragmentManager.O0(3)) {
            Log.d("FragmentManager", "onCreateDialog called for DialogFragment " + this);
        }
        return new ComponentDialog(requireContext(), getTheme());
    }

    @Override // androidx.fragment.app.Fragment
    public void onDestroyView() {
        super.onDestroyView();
        Dialog dialog = this.mDialog;
        if (dialog != null) {
            this.mViewDestroyed = true;
            dialog.setOnDismissListener(null);
            this.mDialog.dismiss();
            if (!this.mDismissed) {
                onDismiss(this.mDialog);
            }
            this.mDialog = null;
            this.mDialogCreated = false;
        }
    }

    @Override // androidx.fragment.app.Fragment
    public void onDetach() {
        super.onDetach();
        if (!this.mShownByMe && !this.mDismissed) {
            this.mDismissed = true;
        }
        getViewLifecycleOwnerLiveData().n(this.mObserver);
    }

    @Override // android.content.DialogInterface.OnDismissListener
    public void onDismiss(DialogInterface dialogInterface) {
        if (!this.mViewDestroyed) {
            if (FragmentManager.O0(3)) {
                Log.d("FragmentManager", "onDismiss called for DialogFragment " + this);
            }
            x(true, true, false);
        }
    }

    View onFindViewById(int i10) {
        Dialog dialog = this.mDialog;
        if (dialog != null) {
            return dialog.findViewById(i10);
        }
        return null;
    }

    @Override // androidx.fragment.app.Fragment
    @NonNull
    public LayoutInflater onGetLayoutInflater(Bundle bundle) {
        LayoutInflater onGetLayoutInflater = super.onGetLayoutInflater(bundle);
        if (this.mShowsDialog && !this.mCreatingDialog) {
            y(bundle);
            if (FragmentManager.O0(2)) {
                Log.d("FragmentManager", "get layout inflater for DialogFragment " + this + " from dialog context");
            }
            Dialog dialog = this.mDialog;
            if (dialog != null) {
                return onGetLayoutInflater.cloneInContext(dialog.getContext());
            }
        } else if (FragmentManager.O0(2)) {
            String str = "getting layout inflater for DialogFragment " + this;
            if (!this.mShowsDialog) {
                Log.d("FragmentManager", "mShowsDialog = false: " + str);
                return onGetLayoutInflater;
            }
            Log.d("FragmentManager", "mCreatingDialog = true: " + str);
        }
        return onGetLayoutInflater;
    }

    boolean onHasView() {
        return this.mDialogCreated;
    }

    @Override // androidx.fragment.app.Fragment
    public void onSaveInstanceState(@NonNull Bundle bundle) {
        super.onSaveInstanceState(bundle);
        Dialog dialog = this.mDialog;
        if (dialog != null) {
            Bundle onSaveInstanceState = dialog.onSaveInstanceState();
            onSaveInstanceState.putBoolean(SAVED_INTERNAL_DIALOG_SHOWING, false);
            bundle.putBundle(SAVED_DIALOG_STATE_TAG, onSaveInstanceState);
        }
        int i10 = this.mStyle;
        if (i10 != 0) {
            bundle.putInt(SAVED_STYLE, i10);
        }
        int i11 = this.mTheme;
        if (i11 != 0) {
            bundle.putInt(SAVED_THEME, i11);
        }
        boolean z10 = this.mCancelable;
        if (!z10) {
            bundle.putBoolean(SAVED_CANCELABLE, z10);
        }
        boolean z11 = this.mShowsDialog;
        if (!z11) {
            bundle.putBoolean(SAVED_SHOWS_DIALOG, z11);
        }
        int i12 = this.mBackStackId;
        if (i12 != -1) {
            bundle.putInt(SAVED_BACK_STACK_ID, i12);
        }
    }

    @Override // androidx.fragment.app.Fragment
    public void onStart() {
        super.onStart();
        Dialog dialog = this.mDialog;
        if (dialog != null) {
            this.mViewDestroyed = false;
            dialog.show();
            View decorView = this.mDialog.getWindow().getDecorView();
            androidx.lifecycle.r0.b(decorView, this);
            androidx.lifecycle.s0.a(decorView, this);
            u3.j.b(decorView, this);
        }
    }

    @Override // androidx.fragment.app.Fragment
    public void onStop() {
        super.onStop();
        Dialog dialog = this.mDialog;
        if (dialog != null) {
            dialog.hide();
        }
    }

    @Override // androidx.fragment.app.Fragment
    public void onViewStateRestored(Bundle bundle) {
        Bundle bundle2;
        super.onViewStateRestored(bundle);
        if (this.mDialog != null && bundle != null && (bundle2 = bundle.getBundle(SAVED_DIALOG_STATE_TAG)) != null) {
            this.mDialog.onRestoreInstanceState(bundle2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.fragment.app.Fragment
    public void performCreateView(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, Bundle bundle) {
        Bundle bundle2;
        super.performCreateView(layoutInflater, viewGroup, bundle);
        if (this.mView == null && this.mDialog != null && bundle != null && (bundle2 = bundle.getBundle(SAVED_DIALOG_STATE_TAG)) != null) {
            this.mDialog.onRestoreInstanceState(bundle2);
        }
    }

    @NonNull
    public final ComponentDialog requireComponentDialog() {
        Dialog requireDialog = requireDialog();
        if (requireDialog instanceof ComponentDialog) {
            return (ComponentDialog) requireDialog;
        }
        throw new IllegalStateException("DialogFragment " + this + " did not return a ComponentDialog instance from requireDialog(). The actual Dialog is " + requireDialog);
    }

    @NonNull
    public final Dialog requireDialog() {
        Dialog dialog = getDialog();
        if (dialog != null) {
            return dialog;
        }
        throw new IllegalStateException("DialogFragment " + this + " does not have a Dialog.");
    }

    public void setCancelable(boolean z10) {
        this.mCancelable = z10;
        Dialog dialog = this.mDialog;
        if (dialog != null) {
            dialog.setCancelable(z10);
        }
    }

    public void setShowsDialog(boolean z10) {
        this.mShowsDialog = z10;
    }

    public void setStyle(int i10, int i11) {
        if (FragmentManager.O0(2)) {
            Log.d("FragmentManager", "Setting style and theme for DialogFragment " + this + " to " + i10 + ", " + i11);
        }
        this.mStyle = i10;
        if (i10 == 2 || i10 == 3) {
            this.mTheme = 16973913;
        }
        if (i11 != 0) {
            this.mTheme = i11;
        }
    }

    public void setupDialog(@NonNull Dialog dialog, int i10) {
        if (i10 != 1 && i10 != 2) {
            if (i10 != 3) {
                return;
            }
            Window window = dialog.getWindow();
            if (window != null) {
                window.addFlags(24);
            }
        }
        dialog.requestWindowFeature(1);
    }

    public void show(@NonNull FragmentManager fragmentManager, String str) {
        this.mDismissed = false;
        this.mShownByMe = true;
        FragmentTransaction r10 = fragmentManager.r();
        r10.t(true);
        r10.e(this, str);
        r10.g();
    }

    public void showNow(@NonNull FragmentManager fragmentManager, String str) {
        this.mDismissed = false;
        this.mShownByMe = true;
        FragmentTransaction r10 = fragmentManager.r();
        r10.t(true);
        r10.e(this, str);
        r10.i();
    }

    public int show(@NonNull FragmentTransaction fragmentTransaction, String str) {
        this.mDismissed = false;
        this.mShownByMe = true;
        fragmentTransaction.e(this, str);
        this.mViewDestroyed = false;
        int g10 = fragmentTransaction.g();
        this.mBackStackId = g10;
        return g10;
    }
}
