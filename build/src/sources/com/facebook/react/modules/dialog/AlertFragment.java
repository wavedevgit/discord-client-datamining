package com.facebook.react.modules.dialog;

import android.annotation.SuppressLint;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.res.TypedArray;
import android.os.Build;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.appcompat.app.a;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.FragmentActivity;
import com.facebook.react.R;
import com.facebook.react.modules.dialog.DialogModule;
import com.facebook.react.uimanager.ViewProps;
import f.j;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import or.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\b\u0007\u0018\u0000 \u00152\u00020\u00012\u00020\u0002:\u0001\u0015B\t\b\u0016¢\u0006\u0004\b\u0003\u0010\u0004B!\b\u0011\u0012\f\u0010\u0005\u001a\b\u0018\u00010\u0006R\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u0003\u0010\nJ\u0012\u0010\u000b\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\tH\u0016J\u0018\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0016J\u0010\u0010\u0014\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0016R\u0014\u0010\u0005\u001a\b\u0018\u00010\u0006R\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0016"}, d2 = {"Lcom/facebook/react/modules/dialog/AlertFragment;", "Landroidx/fragment/app/DialogFragment;", "Landroid/content/DialogInterface$OnClickListener;", "<init>", "()V", "listener", "Lcom/facebook/react/modules/dialog/DialogModule$AlertFragmentListener;", "Lcom/facebook/react/modules/dialog/DialogModule;", "arguments", "Landroid/os/Bundle;", "(Lcom/facebook/react/modules/dialog/DialogModule$AlertFragmentListener;Landroid/os/Bundle;)V", "onCreateDialog", "Landroid/app/Dialog;", "savedInstanceState", ViewProps.ON_CLICK, "", "dialog", "Landroid/content/DialogInterface;", "which", "", "onDismiss", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"fragment_subclass_nonempty_constructor"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AlertFragment extends DialogFragment implements DialogInterface.OnClickListener {
    @NotNull
    public static final String ARG_BUTTON_NEGATIVE = "button_negative";
    @NotNull
    public static final String ARG_BUTTON_NEUTRAL = "button_neutral";
    @NotNull
    public static final String ARG_BUTTON_POSITIVE = "button_positive";
    @NotNull
    public static final String ARG_ITEMS = "items";
    @NotNull
    public static final String ARG_MESSAGE = "message";
    @NotNull
    public static final String ARG_TITLE = "title";
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final DialogModule.AlertFragmentListener listener;

    @Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J \u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0007J\u0010\u0010\u0013\u001a\u00020\u00142\u0006\u0010\r\u001a\u00020\u000eH\u0002J\u0018\u0010\u0015\u001a\u00020\u00162\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u0017\u001a\u00020\u0005H\u0002J \u0010\u0018\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0002J \u0010\u0019\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000¨\u0006\u001a"}, d2 = {"Lcom/facebook/react/modules/dialog/AlertFragment$Companion;", "", "<init>", "()V", "ARG_TITLE", "", "ARG_MESSAGE", "ARG_BUTTON_POSITIVE", "ARG_BUTTON_NEGATIVE", "ARG_BUTTON_NEUTRAL", "ARG_ITEMS", "createDialog", "Landroid/app/Dialog;", "activityContext", "Landroid/content/Context;", "arguments", "Landroid/os/Bundle;", "fragment", "Landroid/content/DialogInterface$OnClickListener;", "isAppCompatTheme", "", "getAccessibleTitle", "Landroid/view/View;", "titleText", "createAppCompatDialog", "createAppDialog", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Dialog createAppCompatDialog(Context context, Bundle bundle, DialogInterface.OnClickListener onClickListener) {
            a.C0018a c0018a = new a.C0018a(context);
            if (bundle.containsKey("title")) {
                String str = (String) db.a.c(bundle.getString("title"));
                Intrinsics.checkNotNull(str);
                c0018a.b(getAccessibleTitle(context, str));
            }
            if (bundle.containsKey(AlertFragment.ARG_BUTTON_POSITIVE)) {
                c0018a.i(bundle.getString(AlertFragment.ARG_BUTTON_POSITIVE), onClickListener);
            }
            if (bundle.containsKey(AlertFragment.ARG_BUTTON_NEGATIVE)) {
                c0018a.f(bundle.getString(AlertFragment.ARG_BUTTON_NEGATIVE), onClickListener);
            }
            if (bundle.containsKey(AlertFragment.ARG_BUTTON_NEUTRAL)) {
                c0018a.g(bundle.getString(AlertFragment.ARG_BUTTON_NEUTRAL), onClickListener);
            }
            if (bundle.containsKey("message")) {
                c0018a.e(bundle.getString("message"));
            }
            if (bundle.containsKey(AlertFragment.ARG_ITEMS)) {
                c0018a.d(bundle.getCharSequenceArray(AlertFragment.ARG_ITEMS), onClickListener);
            }
            androidx.appcompat.app.a create = c0018a.create();
            Intrinsics.checkNotNullExpressionValue(create, "create(...)");
            return create;
        }

        @c
        private final Dialog createAppDialog(Context context, Bundle bundle, DialogInterface.OnClickListener onClickListener) {
            AlertDialog.Builder builder = new AlertDialog.Builder(context);
            if (bundle.containsKey("title")) {
                String str = (String) db.a.c(bundle.getString("title"));
                Intrinsics.checkNotNull(str);
                builder.setCustomTitle(getAccessibleTitle(context, str));
            }
            if (bundle.containsKey(AlertFragment.ARG_BUTTON_POSITIVE)) {
                builder.setPositiveButton(bundle.getString(AlertFragment.ARG_BUTTON_POSITIVE), onClickListener);
            }
            if (bundle.containsKey(AlertFragment.ARG_BUTTON_NEGATIVE)) {
                builder.setNegativeButton(bundle.getString(AlertFragment.ARG_BUTTON_NEGATIVE), onClickListener);
            }
            if (bundle.containsKey(AlertFragment.ARG_BUTTON_NEUTRAL)) {
                builder.setNeutralButton(bundle.getString(AlertFragment.ARG_BUTTON_NEUTRAL), onClickListener);
            }
            if (bundle.containsKey("message")) {
                builder.setMessage(bundle.getString("message"));
            }
            if (bundle.containsKey(AlertFragment.ARG_ITEMS)) {
                builder.setItems(bundle.getCharSequenceArray(AlertFragment.ARG_ITEMS), onClickListener);
            }
            AlertDialog create = builder.create();
            Intrinsics.checkNotNullExpressionValue(create, "create(...)");
            return create;
        }

        private final View getAccessibleTitle(Context context, String str) {
            View inflate = LayoutInflater.from(context).inflate(R.layout.alert_title_layout, (ViewGroup) null);
            Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
            Object c10 = db.a.c(inflate.findViewById(R.id.alert_title));
            Intrinsics.checkNotNullExpressionValue(c10, "assertNotNull(...)");
            final TextView textView = (TextView) c10;
            textView.setText(str);
            textView.setFocusable(true);
            if (Build.VERSION.SDK_INT >= 28) {
                textView.setAccessibilityHeading(true);
                return inflate;
            }
            h0.n0(textView, new androidx.core.view.a() { // from class: com.facebook.react.modules.dialog.AlertFragment$Companion$getAccessibleTitle$1
                @Override // androidx.core.view.a
                public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat info) {
                    Intrinsics.checkNotNullParameter(view, "view");
                    Intrinsics.checkNotNullParameter(info, "info");
                    super.onInitializeAccessibilityNodeInfo(textView, info);
                    info.H0(true);
                }
            });
            return inflate;
        }

        private final boolean isAppCompatTheme(Context context) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(j.f22156y0);
            Intrinsics.checkNotNullExpressionValue(obtainStyledAttributes, "obtainStyledAttributes(...)");
            boolean hasValue = obtainStyledAttributes.hasValue(j.D0);
            obtainStyledAttributes.recycle();
            return hasValue;
        }

        @NotNull
        public final Dialog createDialog(@NotNull Context activityContext, @NotNull Bundle arguments, @NotNull DialogInterface.OnClickListener fragment) {
            Intrinsics.checkNotNullParameter(activityContext, "activityContext");
            Intrinsics.checkNotNullParameter(arguments, "arguments");
            Intrinsics.checkNotNullParameter(fragment, "fragment");
            if (isAppCompatTheme(activityContext)) {
                return createAppCompatDialog(activityContext, arguments, fragment);
            }
            return createAppDialog(activityContext, arguments, fragment);
        }

        private Companion() {
        }
    }

    public AlertFragment() {
        this.listener = null;
    }

    @NotNull
    public static final Dialog createDialog(@NotNull Context context, @NotNull Bundle bundle, @NotNull DialogInterface.OnClickListener onClickListener) {
        return Companion.createDialog(context, bundle, onClickListener);
    }

    @Override // android.content.DialogInterface.OnClickListener
    public void onClick(@NotNull DialogInterface dialog, int i10) {
        Intrinsics.checkNotNullParameter(dialog, "dialog");
        DialogModule.AlertFragmentListener alertFragmentListener = this.listener;
        if (alertFragmentListener != null) {
            alertFragmentListener.onClick(dialog, i10);
        }
    }

    @Override // androidx.fragment.app.DialogFragment
    @NotNull
    public Dialog onCreateDialog(Bundle bundle) {
        Companion companion = Companion;
        FragmentActivity requireActivity = requireActivity();
        Intrinsics.checkNotNullExpressionValue(requireActivity, "requireActivity(...)");
        Bundle requireArguments = requireArguments();
        Intrinsics.checkNotNullExpressionValue(requireArguments, "requireArguments(...)");
        return companion.createDialog(requireActivity, requireArguments, this);
    }

    @Override // androidx.fragment.app.DialogFragment, android.content.DialogInterface.OnDismissListener
    public void onDismiss(@NotNull DialogInterface dialog) {
        Intrinsics.checkNotNullParameter(dialog, "dialog");
        super.onDismiss(dialog);
        DialogModule.AlertFragmentListener alertFragmentListener = this.listener;
        if (alertFragmentListener != null) {
            alertFragmentListener.onDismiss(dialog);
        }
    }

    @SuppressLint({"ValidFragment"})
    public AlertFragment(DialogModule.AlertFragmentListener alertFragmentListener, Bundle bundle) {
        this.listener = alertFragmentListener;
        setArguments(bundle);
    }
}
