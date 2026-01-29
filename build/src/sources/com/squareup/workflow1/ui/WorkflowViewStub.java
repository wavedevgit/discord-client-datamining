package com.squareup.workflow1.ui;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.modules.appstate.AppStateModule;
import com.squareup.workflow1.ui.WorkflowViewStub;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import org.jetbrains.annotations.NotNull;
import u3.f;
import u3.j;
import vm.a0;
import vm.e0;
import vm.f0;
import vm.g0;
import vm.h0;
import vm.r;
import wm.d;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B1\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006\u0012\b\b\u0002\u0010\b\u001a\u00020\u0006¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\r\u001a\u00020\f2\u0006\u0010\u000b\u001a\u00020\u0001H\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u0019\u0010\u0010\u001a\u00020\f2\b\b\u0001\u0010\u000f\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0010\u0010\u0011J\u0017\u0010\u0013\u001a\u00020\f2\u0006\u0010\u0012\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0013\u0010\u0011J\u000f\u0010\u0014\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0014\u0010\u0015J\u0019\u0010\u0018\u001a\u00020\f2\b\u0010\u0017\u001a\u0004\u0018\u00010\u0016H\u0016¢\u0006\u0004\b\u0018\u0010\u0019J\u001d\u0010\u001e\u001a\u00020\u00012\u0006\u0010\u001b\u001a\u00020\u001a2\u0006\u0010\u001d\u001a\u00020\u001c¢\u0006\u0004\b\u001e\u0010\u001fR$\u0010%\u001a\u00020\u00012\u0006\u0010 \u001a\u00020\u00018\u0006@BX\u0086\u000e¢\u0006\f\n\u0004\b!\u0010\"\u001a\u0004\b#\u0010$R\"\u0010-\u001a\u00020&8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b'\u0010(\u001a\u0004\b)\u0010*\"\u0004\b+\u0010,R*\u00103\u001a\u00020\u00062\u0006\u0010.\u001a\u00020\u00068\u0006@FX\u0087\u000e¢\u0006\u0012\n\u0004\b/\u00100\u001a\u0004\b1\u0010\u0015\"\u0004\b2\u0010\u0011R4\u0010<\u001a\u0014\u0012\u0004\u0012\u000205\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\f048\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b6\u00107\u001a\u0004\b8\u00109\"\u0004\b:\u0010;¨\u0006="}, d2 = {"Lcom/squareup/workflow1/ui/WorkflowViewStub;", "Landroid/view/View;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attributeSet", "", "defStyle", "defStyleRes", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;II)V", "newView", "", "b", "(Landroid/view/View;)V", StackTraceHelper.ID_KEY, "setId", "(I)V", "visibility", "setVisibility", "getVisibility", "()I", "Landroid/graphics/drawable/Drawable;", AppStateModule.APP_STATE_BACKGROUND, "setBackground", "(Landroid/graphics/drawable/Drawable;)V", "", "rendering", "Lvm/a0;", "viewEnvironment", "c", "(Ljava/lang/Object;Lvm/a0;)Landroid/view/View;", "<set-?>", "d", "Landroid/view/View;", "getActual", "()Landroid/view/View;", "actual", "", "e", "Z", "getUpdatesVisibility", "()Z", "setUpdatesVisibility", "(Z)V", "updatesVisibility", "value", "i", "I", "getInflatedId", "setInflatedId", "inflatedId", "Lkotlin/Function2;", "Landroid/view/ViewGroup;", "o", "Lkotlin/jvm/functions/Function2;", "getReplaceOldViewInParent", "()Lkotlin/jvm/functions/Function2;", "setReplaceOldViewInParent", "(Lkotlin/jvm/functions/Function2;)V", "replaceOldViewInParent", "wf1-core-android"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class WorkflowViewStub extends View {

    /* renamed from: d  reason: collision with root package name */
    private View f19044d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f19045e;

    /* renamed from: i  reason: collision with root package name */
    private int f19046i;

    /* renamed from: o  reason: collision with root package name */
    private Function2 f19047o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {
        a() {
            super(2);
        }

        public final void a(ViewGroup parent, View newView) {
            Unit unit;
            Intrinsics.checkNotNullParameter(parent, "parent");
            Intrinsics.checkNotNullParameter(newView, "newView");
            int indexOfChild = parent.indexOfChild(WorkflowViewStub.this.getActual());
            parent.removeView(WorkflowViewStub.this.getActual());
            ViewGroup.LayoutParams layoutParams = WorkflowViewStub.this.getActual().getLayoutParams();
            if (layoutParams == null) {
                unit = null;
            } else {
                parent.addView(newView, indexOfChild, layoutParams);
                unit = Unit.f33282a;
            }
            if (unit == null) {
                parent.addView(newView, indexOfChild);
            }
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((ViewGroup) obj, (View) obj2);
            return Unit.f33282a;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public WorkflowViewStub(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 0, 12, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void b(View view) {
        ViewGroup viewGroup;
        f a10 = j.a(this);
        ViewParent parent = getParent();
        f fVar = null;
        if (parent instanceof ViewGroup) {
            viewGroup = (ViewGroup) parent;
        } else {
            viewGroup = null;
        }
        if (viewGroup != null) {
            fVar = j.a(viewGroup);
        }
        if (a10 != fVar) {
            j.b(view, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(View view, Function0 doStart) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(doStart, "doStart");
        d.a.e(d.f52691n, view, null, 2, null);
        doStart.invoke();
    }

    public final View c(Object rendering, a0 viewEnvironment) {
        d c10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        View view = this.f19044d;
        ViewGroup viewGroup = null;
        if (!g0.b(view, rendering)) {
            view = null;
        }
        if (view == null) {
            ViewParent parent = this.f19044d.getParent();
            if (parent instanceof ViewGroup) {
                viewGroup = (ViewGroup) parent;
            }
            ViewGroup viewGroup2 = viewGroup;
            if (viewGroup2 != null) {
                View view2 = this.f19044d;
                if (view2 != this && (c10 = d.f52691n.c(view2)) != null) {
                    c10.d();
                }
                Context context = viewGroup2.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "parent.context");
                View c11 = f0.c((e0) viewEnvironment.a(e0.f51221a), rendering, viewEnvironment, context, viewGroup2, new h0() { // from class: vm.l0
                    @Override // vm.h0
                    public final void a(View view3, Function0 function0) {
                        WorkflowViewStub.d(view3, function0);
                    }
                });
                g0.h(c11);
                if (getInflatedId() != -1) {
                    c11.setId(getInflatedId());
                }
                if (getUpdatesVisibility()) {
                    c11.setVisibility(getVisibility());
                }
                Drawable background = getBackground();
                if (background != null) {
                    c11.setBackground(background);
                }
                b(c11);
                getReplaceOldViewInParent().invoke(viewGroup2, c11);
                this.f19044d = c11;
                return c11;
            }
            throw new IllegalStateException("WorkflowViewStub must have a non-null ViewGroup parent");
        }
        g0.g(view, rendering, viewEnvironment);
        return view;
    }

    @NotNull
    public final View getActual() {
        return this.f19044d;
    }

    public final int getInflatedId() {
        return this.f19046i;
    }

    @NotNull
    public final Function2<ViewGroup, View, Unit> getReplaceOldViewInParent() {
        return this.f19047o;
    }

    public final boolean getUpdatesVisibility() {
        return this.f19045e;
    }

    @Override // android.view.View
    public int getVisibility() {
        View view = this.f19044d;
        if (Intrinsics.areEqual(view, this) || view == null) {
            return super.getVisibility();
        }
        return this.f19044d.getVisibility();
    }

    @Override // android.view.View
    public void setBackground(Drawable drawable) {
        View view;
        super.setBackground(drawable);
        if (!Intrinsics.areEqual(this.f19044d, this) && (view = this.f19044d) != null && drawable != null) {
            view.setBackground(drawable);
        }
    }

    @Override // android.view.View
    public void setId(int i10) {
        if (i10 != -1 && i10 == this.f19046i) {
            throw new IllegalArgumentException(Intrinsics.stringPlus("id must be distinct from inflatedId: ", getResources().getResourceName(i10)).toString());
        }
        super.setId(i10);
    }

    public final void setInflatedId(int i10) {
        if (i10 != -1 && i10 == getId()) {
            throw new IllegalArgumentException(Intrinsics.stringPlus("inflatedId must be distinct from id: ", getResources().getResourceName(getId())).toString());
        }
        this.f19046i = i10;
    }

    public final void setReplaceOldViewInParent(@NotNull Function2<? super ViewGroup, ? super View, Unit> function2) {
        Intrinsics.checkNotNullParameter(function2, "<set-?>");
        this.f19047o = function2;
    }

    public final void setUpdatesVisibility(boolean z10) {
        this.f19045e = z10;
    }

    @Override // android.view.View
    public void setVisibility(int i10) {
        View view;
        super.setVisibility(i10);
        if (!Intrinsics.areEqual(this.f19044d, this) && (view = this.f19044d) != null) {
            view.setVisibility(i10);
        }
    }

    public /* synthetic */ WorkflowViewStub(Context context, AttributeSet attributeSet, int i10, int i11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i12 & 2) != 0 ? null : attributeSet, (i12 & 4) != 0 ? 0 : i10, (i12 & 8) != 0 ? 0 : i11);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public WorkflowViewStub(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f19044d = this;
        this.f19045e = true;
        this.f19046i = -1;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, r.U, i10, i11);
        Intrinsics.checkNotNullExpressionValue(obtainStyledAttributes, "context.obtainStyledAttr…fStyle, defStyleRes\n    )");
        setInflatedId(obtainStyledAttributes.getResourceId(r.V, -1));
        this.f19045e = obtainStyledAttributes.getBoolean(r.W, true);
        obtainStyledAttributes.recycle();
        setWillNotDraw(true);
        this.f19047o = new a();
    }
}
