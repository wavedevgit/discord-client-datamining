package no;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.view.w0;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import com.withpersona.sdk2.inquiry.internal.j;
import com.withpersona.sdk2.inquiry.internal.n;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import cq.f0;
import jp.s;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import yg.f;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u0000 *2\u00020\u0001:\u0001+B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J)\u0010\u000b\u001a\u00020\n2\b\u0010\u0005\u001a\u0004\u0018\u00010\u00042\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u0019\u0010\u0010\u001a\u00020\u000f2\b\u0010\u000e\u001a\u0004\u0018\u00010\rH\u0016¢\u0006\u0004\b\u0010\u0010\u0011J+\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0013\u001a\u00020\u00122\b\u0010\u0015\u001a\u0004\u0018\u00010\u00142\b\u0010\u000e\u001a\u0004\u0018\u00010\rH\u0016¢\u0006\u0004\b\u0017\u0010\u0018J!\u0010\u001a\u001a\u00020\n2\u0006\u0010\u0019\u001a\u00020\u00162\b\u0010\u000e\u001a\u0004\u0018\u00010\rH\u0016¢\u0006\u0004\b\u001a\u0010\u001bR\"\u0010\u0007\u001a\u00020\u00068\u0006@\u0006X\u0086.¢\u0006\u0012\n\u0004\b\u001c\u0010\u001d\u001a\u0004\b\u001e\u0010\u001f\"\u0004\b \u0010!R\u0016\u0010%\u001a\u0004\u0018\u00010\"8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b#\u0010$R\u0016\u0010)\u001a\u0004\u0018\u00010&8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b'\u0010(¨\u0006,"}, d2 = {"Lno/e;", "Lcom/google/android/material/bottomsheet/b;", "<init>", "()V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyle;", "styles", "Loo/a;", "binding", "", "isWrappingButtons", "", "H", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyle;Loo/a;Z)V", "Landroid/os/Bundle;", "savedInstanceState", "Landroid/app/Dialog;", "onCreateDialog", "(Landroid/os/Bundle;)Landroid/app/Dialog;", "Landroid/view/LayoutInflater;", "inflater", "Landroid/view/ViewGroup;", "container", "Landroid/view/View;", "onCreateView", "(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Landroid/os/Bundle;)Landroid/view/View;", "view", "onViewCreated", "(Landroid/view/View;Landroid/os/Bundle;)V", "e", "Loo/a;", "J", "()Loo/a;", "P", "(Loo/a;)V", "Lcom/withpersona/sdk2/inquiry/internal/n$b$a;", "I", "()Lcom/withpersona/sdk2/inquiry/internal/n$b$a;", "args", "Lcom/withpersona/sdk2/inquiry/internal/j;", "K", "()Lcom/withpersona/sdk2/inquiry/internal/j;", "inquiryFragment", "i", "a", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCancelDialogFragment.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CancelDialogFragment.kt\ncom/withpersona/sdk2/inquiry/internal/cancel/CancelDialogFragment\n+ 2 BundleUtils.kt\ncom/withpersona/sdk2/inquiry/shared/BundleUtilsKt\n+ 3 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,154:1\n7#2:155\n327#3,4:156\n327#3,4:160\n*S KotlinDebug\n*F\n+ 1 CancelDialogFragment.kt\ncom/withpersona/sdk2/inquiry/internal/cancel/CancelDialogFragment\n*L\n47#1:155\n117#1:156,4\n120#1:160,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends com.google.android.material.bottomsheet.b {

    /* renamed from: i  reason: collision with root package name */
    public static final a f42037i = new a(null);

    /* renamed from: e  reason: collision with root package name */
    public oo.a f42038e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(FragmentManager fragmentManager, int i10, n.b.a cancelOutput) {
            Intrinsics.checkNotNullParameter(fragmentManager, "fragmentManager");
            Intrinsics.checkNotNullParameter(cancelOutput, "cancelOutput");
            e eVar = new e();
            Bundle bundle = new Bundle();
            bundle.putParcelable("ARGUMENT_CANCEL_OUTPUT", cancelOutput);
            eVar.setArguments(bundle);
            eVar.setStyle(0, i10);
            eVar.show(fragmentManager, "cancel_dialog_fragment");
        }

        private a() {
        }
    }

    private final void H(StepStyle stepStyle, oo.a aVar, boolean z10) {
        ButtonCancelComponentStyle cancelDialogResumeStyleValue;
        ButtonSubmitComponentStyle cancelDialogCloseStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        if (stepStyle != null && (titleStyleValue = stepStyle.getTitleStyleValue()) != null) {
            TextView hintTitle = aVar.f44617f;
            Intrinsics.checkNotNullExpressionValue(hintTitle, "hintTitle");
            f0.n(hintTitle, titleStyleValue, null, 2, null);
        }
        if (stepStyle != null && (textStyleValue = stepStyle.getTextStyleValue()) != null) {
            TextView hintMessage = aVar.f44616e;
            Intrinsics.checkNotNullExpressionValue(hintMessage, "hintMessage");
            f0.n(hintMessage, textStyleValue, null, 2, null);
        }
        if (stepStyle != null && (cancelDialogCloseStyleValue = stepStyle.getCancelDialogCloseStyleValue()) != null) {
            Button closeButton = aVar.f44614c;
            Intrinsics.checkNotNullExpressionValue(closeButton, "closeButton");
            cq.e.f(closeButton, cancelDialogCloseStyleValue, false, !z10, 2, null);
        }
        if (stepStyle != null && (cancelDialogResumeStyleValue = stepStyle.getCancelDialogResumeStyleValue()) != null) {
            Button retryButton = aVar.f44618g;
            Intrinsics.checkNotNullExpressionValue(retryButton, "retryButton");
            cq.e.f(retryButton, cancelDialogResumeStyleValue, false, !z10, 2, null);
        }
    }

    private final n.b.a I() {
        Bundle arguments = getArguments();
        if (arguments != null) {
            return (n.b.a) w1.b.a(arguments, "ARGUMENT_CANCEL_OUTPUT", n.b.a.class);
        }
        return null;
    }

    private final j K() {
        Fragment parentFragment = getParentFragment();
        if (parentFragment instanceof j) {
            return (j) parentFragment;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void L(Dialog dialog, e eVar, DialogInterface dialogInterface) {
        StepStyle stepStyle;
        ViewGroup viewGroup = (ViewGroup) dialog.findViewById(f.f54442f);
        viewGroup.setBackgroundResource(17170445);
        Intrinsics.checkNotNull(viewGroup);
        n.b.a I = eVar.I();
        if (I != null) {
            stepStyle = I.f();
        } else {
            stepStyle = null;
        }
        StepStyle stepStyle2 = stepStyle;
        ConstraintLayout bottomSheetContent = eVar.J().f44613b;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        cq.c.c(viewGroup, stepStyle2, bottomSheetContent, null, 4, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M(oo.a aVar, e eVar, n.b.a aVar2) {
        boolean z10 = true;
        if (aVar.f44614c.getLineCount() <= 1 && aVar.f44618g.getLineCount() <= 1) {
            z10 = false;
        } else {
            Button closeButton = aVar.f44614c;
            Intrinsics.checkNotNullExpressionValue(closeButton, "closeButton");
            ViewGroup.LayoutParams layoutParams = closeButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = aVar.f44615d.getWidth();
                closeButton.setLayoutParams(layoutParams);
                Button retryButton = aVar.f44618g;
                Intrinsics.checkNotNullExpressionValue(retryButton, "retryButton");
                ViewGroup.LayoutParams layoutParams2 = retryButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = aVar.f44615d.getWidth();
                    retryButton.setLayoutParams(layoutParams2);
                    aVar.f44615d.setReferencedIds(new int[]{aVar.f44614c.getId(), aVar.f44618g.getId()});
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        eVar.H(aVar2.f(), aVar, z10);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void N(e eVar, View view) {
        eVar.dismiss();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void O(e eVar, n.b.a aVar, View view) {
        eVar.dismiss();
        j K = eVar.K();
        if (K != null) {
            K.J(aVar);
        }
    }

    public final oo.a J() {
        oo.a aVar = this.f42038e;
        if (aVar != null) {
            return aVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("binding");
        return null;
    }

    public final void P(oo.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<set-?>");
        this.f42038e = aVar;
    }

    @Override // com.google.android.material.bottomsheet.b, androidx.appcompat.app.m, androidx.fragment.app.DialogFragment
    public Dialog onCreateDialog(Bundle bundle) {
        final Dialog onCreateDialog = super.onCreateDialog(bundle);
        Intrinsics.checkNotNullExpressionValue(onCreateDialog, "onCreateDialog(...)");
        onCreateDialog.setOnShowListener(new DialogInterface.OnShowListener() { // from class: no.d
            @Override // android.content.DialogInterface.OnShowListener
            public final void onShow(DialogInterface dialogInterface) {
                e.L(onCreateDialog, this, dialogInterface);
            }
        });
        return onCreateDialog;
    }

    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater inflater, ViewGroup viewGroup, Bundle bundle) {
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        super.onCreateView(inflater, viewGroup, bundle);
        P(oo.a.c(inflater, viewGroup, false));
        ConstraintLayout root = J().getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    @Override // androidx.fragment.app.Fragment
    public void onViewCreated(View view, Bundle bundle) {
        Window window;
        int d10;
        Integer backgroundColorValue;
        Intrinsics.checkNotNullParameter(view, "view");
        super.onViewCreated(view, bundle);
        final n.b.a I = I();
        if (I != null) {
            Dialog dialog = getDialog();
            if (dialog != null && (window = dialog.getWindow()) != null) {
                window.setBackgroundDrawable(null);
                window.setLayout(-1, -1);
                w0.c(window, false);
                StepStyle f10 = I.f();
                if (f10 != null && (backgroundColorValue = f10.getBackgroundColorValue()) != null) {
                    d10 = backgroundColorValue.intValue();
                } else {
                    Context context = window.getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    d10 = s.d(context, yg.b.f54370o, null, false, 6, null);
                }
                jp.f0.a(window, d10);
            }
            final oo.a J = J();
            String g10 = I.g();
            if (g10 != null) {
                J.f44617f.setText(g10);
            }
            String d11 = I.d();
            if (d11 != null) {
                J.f44616e.setText(d11);
            }
            String a10 = I.a();
            if (a10 != null) {
                J.f44614c.setText(a10);
            }
            String e10 = I.e();
            if (e10 != null) {
                J.f44618g.setText(e10);
            }
            J.f44618g.setOnClickListener(new View.OnClickListener() { // from class: no.a
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    e.N(e.this, view2);
                }
            });
            J.f44614c.setOnClickListener(new View.OnClickListener() { // from class: no.b
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    e.O(e.this, I, view2);
                }
            });
            Button closeButton = J.f44614c;
            Intrinsics.checkNotNullExpressionValue(closeButton, "closeButton");
            tp.s.b(closeButton, new Function0() { // from class: no.c
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit M;
                    M = e.M(oo.a.this, this, I);
                    return M;
                }
            });
            return;
        }
        throw new IllegalArgumentException("Required value was null.");
    }
}
