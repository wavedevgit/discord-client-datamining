package com.withpersona.sdk2.inquiry.shared.ui;

import android.content.Context;
import android.content.res.ColorStateList;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.material.button.MaterialButton;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import lp.d;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\r\n\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0019\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007B\u001b\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\u0006\u0010\nJ\u000f\u0010\f\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\f\u0010\rJ\u001b\u0010\u000f\u001a\u00020\u000e2\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004H\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u000f\u0010\u0011\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\u0011\u0010\rJ\u0019\u0010\u0014\u001a\u00020\u000b2\b\u0010\u0013\u001a\u0004\u0018\u00010\u0012H\u0016¢\u0006\u0004\b\u0014\u0010\u0015J\u0017\u0010\u0018\u001a\u00020\u000b2\u0006\u0010\u0017\u001a\u00020\u0016H\u0016¢\u0006\u0004\b\u0018\u0010\u0019J\u0015\u0010\u001b\u001a\u00020\u000b2\u0006\u0010\u001a\u001a\u00020\u0016¢\u0006\u0004\b\u001b\u0010\u0019R\u0014\u0010\u001f\u001a\u00020\u001c8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0016\u0010\u001a\u001a\u00020\u00168\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b \u0010!R\u0017\u0010&\u001a\u00020\u000e8\u0006¢\u0006\f\n\u0004\b\"\u0010#\u001a\u0004\b$\u0010%R\u0011\u0010*\u001a\u00020'8F¢\u0006\u0006\u001a\u0004\b(\u0010)R$\u00101\u001a\u00020+2\u0006\u0010,\u001a\u00020+8F@FX\u0086\u000e¢\u0006\f\u001a\u0004\b-\u0010.\"\u0004\b/\u00100¨\u00062"}, d2 = {"Lcom/withpersona/sdk2/inquiry/shared/ui/ButtonWithLoadingIndicator;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "", "buttonStyleAttr", "<init>", "(Landroid/content/Context;I)V", "Landroid/util/AttributeSet;", "attrs", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "b", "()V", "Lcom/google/android/material/button/MaterialButton;", "a", "(Ljava/lang/Integer;)Lcom/google/android/material/button/MaterialButton;", "c", "Landroid/view/View$OnClickListener;", "l", "setOnClickListener", "(Landroid/view/View$OnClickListener;)V", "", ViewProps.ENABLED, "setEnabled", "(Z)V", "isLoading", "setIsLoading", "Llp/d;", "d", "Llp/d;", "binding", "e", "Z", "i", "Lcom/google/android/material/button/MaterialButton;", "getButton", "()Lcom/google/android/material/button/MaterialButton;", "button", "Landroid/widget/ProgressBar;", "getProgressBar", "()Landroid/widget/ProgressBar;", "progressBar", "", "value", "getText", "()Ljava/lang/CharSequence;", "setText", "(Ljava/lang/CharSequence;)V", "text", "shared_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ButtonWithLoadingIndicator extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private final d f20545d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20546e;

    /* renamed from: i  reason: collision with root package name */
    private final MaterialButton f20547i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ButtonWithLoadingIndicator(Context context, int i10) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        d b10 = d.b(LayoutInflater.from(getContext()), this);
        Intrinsics.checkNotNullExpressionValue(b10, "inflate(...)");
        this.f20545d = b10;
        this.f20547i = a(Integer.valueOf(i10));
        b();
    }

    private final MaterialButton a(Integer num) {
        MaterialButton materialButton;
        if (num != null && num.intValue() != 0) {
            materialButton = new MaterialButton(getContext(), null, num.intValue());
        } else {
            materialButton = new MaterialButton(getContext());
        }
        addView(materialButton, 0);
        return materialButton;
    }

    private final void b() {
        getProgressBar().setIndeterminateTintList(ColorStateList.valueOf(this.f20547i.getCurrentTextColor()));
    }

    private final void c() {
        if (this.f20546e) {
            this.f20547i.setTextScaleX(0.0f);
            getProgressBar().setVisibility(0);
            return;
        }
        this.f20547i.setTextScaleX(1.0f);
        getProgressBar().setVisibility(8);
    }

    @NotNull
    public final MaterialButton getButton() {
        return this.f20547i;
    }

    @NotNull
    public final ProgressBar getProgressBar() {
        ProgressBar progressBar = this.f20545d.f37435b;
        Intrinsics.checkNotNullExpressionValue(progressBar, "progressBar");
        return progressBar;
    }

    @NotNull
    public final CharSequence getText() {
        CharSequence text = this.f20547i.getText();
        Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
        return text;
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
        if (isEnabled() == z10) {
            return;
        }
        super.setEnabled(z10);
        this.f20547i.setEnabled(z10);
        c();
    }

    public final void setIsLoading(boolean z10) {
        if (this.f20546e == z10) {
            return;
        }
        this.f20546e = z10;
        this.f20547i.setActivated(z10);
        c();
    }

    @Override // android.view.View
    public void setOnClickListener(View.OnClickListener onClickListener) {
        this.f20547i.setOnClickListener(onClickListener);
    }

    public final void setText(@NotNull CharSequence value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f20547i.setText(value);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ButtonWithLoadingIndicator(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        d b10 = d.b(LayoutInflater.from(getContext()), this);
        Intrinsics.checkNotNullExpressionValue(b10, "inflate(...)");
        this.f20545d = b10;
        this.f20547i = a(0);
        b();
    }
}
