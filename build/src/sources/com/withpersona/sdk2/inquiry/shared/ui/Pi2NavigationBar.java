package com.withpersona.sdk2.inquiry.shared.ui;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import mp.k;
import mp.l;
import mp.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u0001B\u001b\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J)\u0010\f\u001a\u00020\u000b2\b\u0010\u0005\u001a\u0004\u0018\u00010\u00042\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\bH\u0002¢\u0006\u0004\b\f\u0010\rJ\u000f\u0010\u000e\u001a\u00020\u000bH\u0014¢\u0006\u0004\b\u000e\u0010\u000fJ3\u0010\u0015\u001a\u00020\u000b2\u0006\u0010\u0011\u001a\u00020\u00102\f\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u000b0\u00122\f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u000b0\u0012H\u0000¢\u0006\u0004\b\u0015\u0010\u0016J\u0017\u0010\u0018\u001a\u00020\u000b2\b\b\u0001\u0010\u0017\u001a\u00020\b¢\u0006\u0004\b\u0018\u0010\u0019R\u0014\u0010\u001d\u001a\u00020\u001a8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u001cR\u0011\u0010!\u001a\u00020\u001e8F¢\u0006\u0006\u001a\u0004\b\u001f\u0010 ¨\u0006\""}, d2 = {"Lcom/withpersona/sdk2/inquiry/shared/ui/Pi2NavigationBar;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "defStyleAttr", "defStyleRes", "", "c", "(Landroid/util/AttributeSet;II)V", "onFinishInflate", "()V", "Lup/a;", "state", "Lkotlin/Function0;", "back", "cancel", "l", "(Lup/a;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", "controlsColor", "setControlsColor", "(I)V", "Lop/c;", "d", "Lop/c;", "binding", "Landroid/view/View;", "getBackButton", "()Landroid/view/View;", "backButton", "shared_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nPi2NavigationBar.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Pi2NavigationBar.kt\ncom/withpersona/sdk2/inquiry/shared/ui/Pi2NavigationBar\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,103:1\n176#2,2:104\n*S KotlinDebug\n*F\n+ 1 Pi2NavigationBar.kt\ncom/withpersona/sdk2/inquiry/shared/ui/Pi2NavigationBar\n*L\n75#1:104,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Pi2NavigationBar extends ConstraintLayout {

    /* renamed from: d  reason: collision with root package name */
    private final op.c f19163d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public Pi2NavigationBar(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        op.c b10 = op.c.b(LayoutInflater.from(getContext()), this);
        Intrinsics.checkNotNullExpressionValue(b10, "inflate(...)");
        this.f19163d = b10;
        c(attributeSet, 0, 0);
    }

    private final void c(AttributeSet attributeSet, int i10, int i11) {
        if (attributeSet != null) {
            TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, p.f39034a, i10, i11);
            Intrinsics.checkNotNullExpressionValue(obtainStyledAttributes, "obtainStyledAttributes(...)");
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i12 = 0; i12 < indexCount; i12++) {
                int index = obtainStyledAttributes.getIndex(i12);
                if (index == p.f39035b) {
                    this.f19163d.f44396b.setImageResource(obtainStyledAttributes.getResourceId(index, l.f38986s));
                } else if (index == p.f39036c) {
                    this.f19163d.f44397c.setImageResource(obtainStyledAttributes.getResourceId(index, l.f38988u));
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(Function0 function0, View view) {
        function0.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(Function0 function0, View view) {
        function0.invoke();
    }

    @NotNull
    public final View getBackButton() {
        ImageView navBarBackButton = this.f19163d.f44396b;
        Intrinsics.checkNotNullExpressionValue(navBarBackButton, "navBarBackButton");
        return navBarBackButton;
    }

    public final void l(up.a state, final Function0 back, final Function0 cancel) {
        int i10;
        Intrinsics.checkNotNullParameter(state, "state");
        Intrinsics.checkNotNullParameter(back, "back");
        Intrinsics.checkNotNullParameter(cancel, "cancel");
        if (!state.d()) {
            this.f19163d.f44396b.setVisibility(8);
            this.f19163d.f44397c.setVisibility(8);
            return;
        }
        ImageView imageView = this.f19163d.f44396b;
        int i11 = 4;
        if (state.b()) {
            i10 = 0;
        } else {
            i10 = 4;
        }
        imageView.setVisibility(i10);
        this.f19163d.f44396b.setOnClickListener(new View.OnClickListener() { // from class: wp.h
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                Pi2NavigationBar.j(Function0.this, view);
            }
        });
        ImageView imageView2 = this.f19163d.f44397c;
        if (state.c()) {
            i11 = 0;
        }
        imageView2.setVisibility(i11);
        this.f19163d.f44397c.setOnClickListener(new View.OnClickListener() { // from class: wp.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                Pi2NavigationBar.k(Function0.this, view);
            }
        });
        this.f19163d.f44396b.setEnabled(state.e());
        this.f19163d.f44397c.setEnabled(state.e());
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        int dimensionPixelOffset = getContext().getResources().getDimensionPixelOffset(k.f38966a);
        setPadding(dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset, dimensionPixelOffset);
    }

    public final void setControlsColor(int i10) {
        this.f19163d.f44396b.setColorFilter(i10);
        this.f19163d.f44397c.setColorFilter(i10);
    }
}
