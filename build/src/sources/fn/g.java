package fn;

import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.FrameLayout;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import bn.a0;
import bn.g;
import bn.j0;
import bn.k0;
import com.squareup.workflow1.ui.WorkflowViewStub;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import or.l;
import or.o;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private final WorkflowViewStub f23174d;

    /* renamed from: e  reason: collision with root package name */
    private List f23175e;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f23176i;

    /* renamed from: o  reason: collision with root package name */
    private final cn.f f23177o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable {
        @NotNull
        public static final a CREATOR = new a(null);

        /* renamed from: d  reason: collision with root package name */
        private final String f23183d;

        /* renamed from: e  reason: collision with root package name */
        private final Bundle f23184e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public b createFromParcel(Parcel parcel) {
                Intrinsics.checkNotNullParameter(parcel, "parcel");
                String readString = parcel.readString();
                Intrinsics.checkNotNull(readString);
                Intrinsics.checkNotNullExpressionValue(readString, "parcel.readString()!!");
                Bundle readBundle = parcel.readBundle(b.class.getClassLoader());
                Intrinsics.checkNotNull(readBundle);
                Intrinsics.checkNotNullExpressionValue(readBundle, "parcel.readBundle(KeyAnd…class.java.classLoader)!!");
                return new b(readString, readBundle);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public b[] newArray(int i10) {
                return new b[i10];
            }

            private a() {
            }
        }

        public b(String compatibilityKey, Bundle bundle) {
            Intrinsics.checkNotNullParameter(compatibilityKey, "compatibilityKey");
            Intrinsics.checkNotNullParameter(bundle, "bundle");
            this.f23183d = compatibilityKey;
            this.f23184e = bundle;
        }

        public final Bundle a() {
            return this.f23184e;
        }

        public final String b() {
            return this.f23183d;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f23183d, bVar.f23183d) && Intrinsics.areEqual(this.f23184e, bVar.f23184e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f23183d.hashCode() * 31) + this.f23184e.hashCode();
        }

        public String toString() {
            return "KeyAndBundle(compatibilityKey=" + this.f23183d + ", bundle=" + this.f23184e + ')';
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            parcel.writeString(this.f23183d);
            parcel.writeBundle(this.f23184e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function0 {
        d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final cn.d invoke() {
            cn.d c10 = cn.d.f7731a.c(g.this);
            if (c10 != null) {
                return c10;
            }
            throw new IllegalStateException(Intrinsics.stringPlus("Expected to find either a ViewTreeLifecycleOwner in the view tree, or for the context to be a LifecycleOwner, in ", g.this).toString());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {
        e() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Lifecycle invoke(View it) {
            Intrinsics.checkNotNullParameter(it, "it");
            Lifecycle lifecycle = g.this.getParentLifecycleOwner().getLifecycle();
            Intrinsics.checkNotNullExpressionValue(lifecycle, "parentLifecycleOwner.lifecycle");
            return lifecycle;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        private final a f23188d;

        /* renamed from: e  reason: collision with root package name */
        private Lifecycle f23189e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ a f23190i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g f23191o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements DefaultLifecycleObserver {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f23192d;

            a(a aVar) {
                this.f23192d = aVar;
            }

            @Override // androidx.lifecycle.DefaultLifecycleObserver
            public void onDestroy(LifecycleOwner owner) {
                Intrinsics.checkNotNullParameter(owner, "owner");
                this.f23192d.c();
            }
        }

        f(a aVar, g gVar) {
            this.f23190i = aVar;
            this.f23191o = gVar;
            this.f23188d = new a(aVar);
        }

        public final a a() {
            return this.f23188d;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            Lifecycle lifecycle = this.f23191o.getParentLifecycleOwner().getLifecycle();
            lifecycle.a(a());
            this.f23189e = lifecycle;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            Lifecycle lifecycle = this.f23189e;
            if (lifecycle != null) {
                lifecycle.d(this.f23188d);
            }
            this.f23189e = null;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        Intrinsics.checkNotNullParameter(context, "context");
        WorkflowViewStub workflowViewStub = new WorkflowViewStub(context, null, 0, 0, 14, null);
        addView(workflowViewStub, new ViewGroup.LayoutParams(-1, -1));
        this.f23174d = workflowViewStub;
        this.f23175e = CollectionsKt.l();
        this.f23176i = l.b(o.f44233i, new d());
        this.f23177o = new cn.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final cn.d getParentLifecycleOwner() {
        return (cn.d) this.f23176i.getValue();
    }

    protected abstract a b(Object obj, a0 a0Var);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c(fn.f newScreen, a0 viewEnvironment) {
        a0 a0Var;
        a b10;
        View b11;
        Intrinsics.checkNotNullParameter(newScreen, "newScreen");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f23174d.c(newScreen.b(), viewEnvironment);
        ArrayList<a> arrayList = new ArrayList();
        int i10 = 0;
        for (Object obj : newScreen.a()) {
            int i11 = i10 + 1;
            if (i10 < this.f23175e.size() && bn.h.a(((a) this.f23175e.get(i10)).f(), obj)) {
                a0Var = viewEnvironment;
                b10 = a.b((a) this.f23175e.get(i10), obj, a0Var, null, null, 12, null);
                d(b10);
            } else {
                a0Var = viewEnvironment;
                b10 = b(obj, a0Var);
                b10.k(bn.g.f6552a.a(obj, String.valueOf(i10)));
                b11 = h.b(b10.d());
                if (b11 != null) {
                    cn.d.f7731a.d(b11, new e());
                    this.f23177o.h(b11, b10.g());
                    b11.addOnAttachStateChangeListener(new f(b10, this));
                }
                b10.d().show();
            }
            arrayList.add(b10);
            i10 = i11;
            viewEnvironment = a0Var;
        }
        for (a aVar : CollectionsKt.H0(this.f23175e, arrayList)) {
            aVar.c();
        }
        cn.f fVar = this.f23177o;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (a aVar2 : arrayList) {
            arrayList2.add(aVar2.g());
        }
        fVar.j(arrayList2);
        this.f23175e = arrayList;
    }

    protected abstract void d(a aVar);

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        Object c10;
        super.onAttachedToWindow();
        u3.f c11 = cn.c.f7730a.c(this);
        g.a aVar = bn.g.f6552a;
        j0 d10 = k0.d(this);
        if (d10 == null) {
            c10 = null;
        } else {
            c10 = d10.c();
        }
        if (c10 == null) {
            c10 = null;
        }
        Intrinsics.checkNotNull(c10);
        this.f23177o.f(g.a.b(aVar, c10, null, 2, null), c11);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        this.f23177o.g();
        super.onDetachedFromWindow();
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable state) {
        c cVar;
        Intrinsics.checkNotNullParameter(state, "state");
        Unit unit = null;
        if (state instanceof c) {
            cVar = (c) state;
        } else {
            cVar = null;
        }
        if (cVar != null) {
            if (cVar.a().size() == this.f23175e.size()) {
                List a10 = cVar.a();
                List list = this.f23175e;
                Iterator it = a10.iterator();
                Iterator it2 = list.iterator();
                ArrayList arrayList = new ArrayList(Math.min(CollectionsKt.w(a10, 10), CollectionsKt.w(list, 10)));
                while (it.hasNext() && it2.hasNext()) {
                    ((a) it2.next()).i((b) it.next());
                    arrayList.add(Unit.f31988a);
                }
            }
            super.onRestoreInstanceState(((c) state).getSuperState());
            unit = Unit.f31988a;
        }
        if (unit == null) {
            super.onRestoreInstanceState(super.onSaveInstanceState());
        }
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        Parcelable onSaveInstanceState = super.onSaveInstanceState();
        Intrinsics.checkNotNull(onSaveInstanceState);
        List<a> list = this.f23175e;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (a aVar : list) {
            arrayList.add(aVar.j());
        }
        return new c(onSaveInstanceState, arrayList);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends View.BaseSavedState {
        @NotNull
        public static final a CREATOR = new a(null);

        /* renamed from: d  reason: collision with root package name */
        private final List f23185d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public c createFromParcel(Parcel source) {
                Intrinsics.checkNotNullParameter(source, "source");
                return new c(source);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public c[] newArray(int i10) {
                return new c[i10];
            }

            private a() {
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Parcelable parcelable, List dialogBundles) {
            super(parcelable);
            Intrinsics.checkNotNullParameter(dialogBundles, "dialogBundles");
            this.f23185d = dialogBundles;
        }

        public final List a() {
            return this.f23185d;
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            super.writeToParcel(out, i10);
            out.writeTypedList(this.f23185d);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Parcel source) {
            super(source);
            Intrinsics.checkNotNullParameter(source, "source");
            ArrayList arrayList = new ArrayList();
            source.readTypedList(arrayList, b.CREATOR);
            this.f23185d = arrayList;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f23178a;

        /* renamed from: b  reason: collision with root package name */
        private final a0 f23179b;

        /* renamed from: c  reason: collision with root package name */
        private final Dialog f23180c;

        /* renamed from: d  reason: collision with root package name */
        private final Object f23181d;

        /* renamed from: e  reason: collision with root package name */
        public String f23182e;

        public a(Object modalRendering, a0 viewEnvironment, Dialog dialog, Object obj) {
            Intrinsics.checkNotNullParameter(modalRendering, "modalRendering");
            Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
            Intrinsics.checkNotNullParameter(dialog, "dialog");
            this.f23178a = modalRendering;
            this.f23179b = viewEnvironment;
            this.f23180c = dialog;
            this.f23181d = obj;
        }

        public static /* synthetic */ a b(a aVar, Object obj, a0 a0Var, Dialog dialog, Object obj2, int i10, Object obj3) {
            if ((i10 & 1) != 0) {
                obj = aVar.f23178a;
            }
            if ((i10 & 2) != 0) {
                a0Var = aVar.f23179b;
            }
            if ((i10 & 4) != 0) {
                dialog = aVar.f23180c;
            }
            if ((i10 & 8) != 0) {
                obj2 = aVar.f23181d;
            }
            return aVar.a(obj, a0Var, dialog, obj2);
        }

        public final a a(Object modalRendering, a0 viewEnvironment, Dialog dialog, Object obj) {
            Intrinsics.checkNotNullParameter(modalRendering, "modalRendering");
            Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
            Intrinsics.checkNotNullParameter(dialog, "dialog");
            a aVar = new a(modalRendering, viewEnvironment, dialog, obj);
            aVar.k(g());
            return aVar;
        }

        public final void c() {
            View b10;
            cn.d c10;
            b10 = h.b(this.f23180c);
            if (b10 != null && (c10 = cn.d.f7731a.c(b10)) != null) {
                c10.d();
            }
            this.f23180c.dismiss();
        }

        public final Dialog d() {
            return this.f23180c;
        }

        public final Object e() {
            return this.f23181d;
        }

        public boolean equals(Object obj) {
            Class<?> cls;
            if (this == obj) {
                return true;
            }
            if (obj == null) {
                cls = null;
            } else {
                cls = obj.getClass();
            }
            if (!Intrinsics.areEqual(a.class, cls)) {
                return false;
            }
            if (obj != null) {
                if (Intrinsics.areEqual(this.f23180c, ((a) obj).f23180c)) {
                    return true;
                }
                return false;
            }
            throw new NullPointerException("null cannot be cast to non-null type com.squareup.workflow1.ui.modal.ModalContainer.DialogRef<*>");
        }

        public final Object f() {
            return this.f23178a;
        }

        public final String g() {
            String str = this.f23182e;
            if (str != null) {
                return str;
            }
            Intrinsics.throwUninitializedPropertyAccessException("savedStateRegistryKey");
            return null;
        }

        public final a0 h() {
            return this.f23179b;
        }

        public int hashCode() {
            return this.f23180c.hashCode();
        }

        public final void i(b keyAndBundle) {
            Intrinsics.checkNotNullParameter(keyAndBundle, "keyAndBundle");
            if (Intrinsics.areEqual(g.a.b(bn.g.f6552a, this.f23178a, null, 2, null), keyAndBundle.b())) {
                Window window = this.f23180c.getWindow();
                Intrinsics.checkNotNull(window);
                window.restoreHierarchyState(keyAndBundle.a());
            }
        }

        public final b j() {
            Window window = this.f23180c.getWindow();
            Intrinsics.checkNotNull(window);
            Bundle saved = window.saveHierarchyState();
            String b10 = g.a.b(bn.g.f6552a, this.f23178a, null, 2, null);
            Intrinsics.checkNotNullExpressionValue(saved, "saved");
            return new b(b10, saved);
        }

        public final void k(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f23182e = str;
        }

        public /* synthetic */ a(Object obj, a0 a0Var, Dialog dialog, Object obj2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(obj, a0Var, dialog, (i10 & 8) != 0 ? null : obj2);
        }
    }
}
