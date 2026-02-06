package hn;

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
import com.squareup.workflow1.ui.WorkflowViewStub;
import dn.a0;
import dn.g;
import dn.j0;
import dn.k0;
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
import org.jetbrains.annotations.NotNull;
import qr.l;
import qr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private final WorkflowViewStub f26199d;

    /* renamed from: e  reason: collision with root package name */
    private List f26200e;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f26201i;

    /* renamed from: o  reason: collision with root package name */
    private final en.f f26202o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements Parcelable {
        @NotNull
        public static final a CREATOR = new a(null);

        /* renamed from: d  reason: collision with root package name */
        private final String f26208d;

        /* renamed from: e  reason: collision with root package name */
        private final Bundle f26209e;

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
            this.f26208d = compatibilityKey;
            this.f26209e = bundle;
        }

        public final Bundle a() {
            return this.f26209e;
        }

        public final String b() {
            return this.f26208d;
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
            if (Intrinsics.areEqual(this.f26208d, bVar.f26208d) && Intrinsics.areEqual(this.f26209e, bVar.f26209e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f26208d.hashCode() * 31) + this.f26209e.hashCode();
        }

        public String toString() {
            return "KeyAndBundle(compatibilityKey=" + this.f26208d + ", bundle=" + this.f26209e + ')';
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            Intrinsics.checkNotNullParameter(parcel, "parcel");
            parcel.writeString(this.f26208d);
            parcel.writeBundle(this.f26209e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function0 {
        d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final en.d invoke() {
            en.d c10 = en.d.f21675f.c(g.this);
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
        private final a f26213d;

        /* renamed from: e  reason: collision with root package name */
        private Lifecycle f26214e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ a f26215i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g f26216o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements DefaultLifecycleObserver {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ a f26217d;

            a(a aVar) {
                this.f26217d = aVar;
            }

            @Override // androidx.lifecycle.DefaultLifecycleObserver
            public void onDestroy(LifecycleOwner owner) {
                Intrinsics.checkNotNullParameter(owner, "owner");
                this.f26217d.c();
            }
        }

        f(a aVar, g gVar) {
            this.f26215i = aVar;
            this.f26216o = gVar;
            this.f26213d = new a(aVar);
        }

        public final a a() {
            return this.f26213d;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            Lifecycle lifecycle = this.f26216o.getParentLifecycleOwner().getLifecycle();
            lifecycle.a(a());
            this.f26214e = lifecycle;
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            Lifecycle lifecycle = this.f26214e;
            if (lifecycle != null) {
                lifecycle.d(this.f26213d);
            }
            this.f26214e = null;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        Intrinsics.checkNotNullParameter(context, "context");
        WorkflowViewStub workflowViewStub = new WorkflowViewStub(context, null, 0, 0, 14, null);
        addView(workflowViewStub, new ViewGroup.LayoutParams(-1, -1));
        this.f26199d = workflowViewStub;
        this.f26200e = CollectionsKt.l();
        this.f26201i = l.b(o.f48045i, new d());
        this.f26202o = new en.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final en.d getParentLifecycleOwner() {
        return (en.d) this.f26201i.getValue();
    }

    protected abstract a b(Object obj, a0 a0Var);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c(hn.f newScreen, a0 viewEnvironment) {
        a0 a0Var;
        a b10;
        View b11;
        Intrinsics.checkNotNullParameter(newScreen, "newScreen");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        this.f26199d.c(newScreen.b(), viewEnvironment);
        ArrayList<a> arrayList = new ArrayList();
        int i10 = 0;
        for (Object obj : newScreen.a()) {
            int i11 = i10 + 1;
            if (i10 < this.f26200e.size() && dn.h.a(((a) this.f26200e.get(i10)).f(), obj)) {
                a0Var = viewEnvironment;
                b10 = a.b((a) this.f26200e.get(i10), obj, a0Var, null, null, 12, null);
                d(b10);
            } else {
                a0Var = viewEnvironment;
                b10 = b(obj, a0Var);
                b10.k(dn.g.f20875a.a(obj, String.valueOf(i10)));
                b11 = h.b(b10.d());
                if (b11 != null) {
                    en.d.f21675f.d(b11, new e());
                    this.f26202o.h(b11, b10.g());
                    b11.addOnAttachStateChangeListener(new f(b10, this));
                }
                b10.d().show();
            }
            arrayList.add(b10);
            i10 = i11;
            viewEnvironment = a0Var;
        }
        for (a aVar : CollectionsKt.H0(this.f26200e, arrayList)) {
            aVar.c();
        }
        en.f fVar = this.f26202o;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (a aVar2 : arrayList) {
            arrayList2.add(aVar2.g());
        }
        fVar.j(arrayList2);
        this.f26200e = arrayList;
    }

    protected abstract void d(a aVar);

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        Object c10;
        super.onAttachedToWindow();
        u3.f c11 = en.c.f21674a.c(this);
        g.a aVar = dn.g.f20875a;
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
        this.f26202o.f(g.a.b(aVar, c10, null, 2, null), c11);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        this.f26202o.g();
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
            if (cVar.a().size() == this.f26200e.size()) {
                List a10 = cVar.a();
                List list = this.f26200e;
                Iterator it = a10.iterator();
                Iterator it2 = list.iterator();
                ArrayList arrayList = new ArrayList(Math.min(CollectionsKt.w(a10, 10), CollectionsKt.w(list, 10)));
                while (it.hasNext() && it2.hasNext()) {
                    ((a) it2.next()).i((b) it.next());
                    arrayList.add(Unit.f32008a);
                }
            }
            super.onRestoreInstanceState(((c) state).getSuperState());
            unit = Unit.f32008a;
        }
        if (unit == null) {
            super.onRestoreInstanceState(super.onSaveInstanceState());
        }
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        Parcelable onSaveInstanceState = super.onSaveInstanceState();
        Intrinsics.checkNotNull(onSaveInstanceState);
        List<a> list = this.f26200e;
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
        private final List f26210d;

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
            this.f26210d = dialogBundles;
        }

        public final List a() {
            return this.f26210d;
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            super.writeToParcel(out, i10);
            out.writeTypedList(this.f26210d);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Parcel source) {
            super(source);
            Intrinsics.checkNotNullParameter(source, "source");
            ArrayList arrayList = new ArrayList();
            source.readTypedList(arrayList, b.CREATOR);
            this.f26210d = arrayList;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f26203a;

        /* renamed from: b  reason: collision with root package name */
        private final a0 f26204b;

        /* renamed from: c  reason: collision with root package name */
        private final Dialog f26205c;

        /* renamed from: d  reason: collision with root package name */
        private final Object f26206d;

        /* renamed from: e  reason: collision with root package name */
        public String f26207e;

        public a(Object modalRendering, a0 viewEnvironment, Dialog dialog, Object obj) {
            Intrinsics.checkNotNullParameter(modalRendering, "modalRendering");
            Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
            Intrinsics.checkNotNullParameter(dialog, "dialog");
            this.f26203a = modalRendering;
            this.f26204b = viewEnvironment;
            this.f26205c = dialog;
            this.f26206d = obj;
        }

        public static /* synthetic */ a b(a aVar, Object obj, a0 a0Var, Dialog dialog, Object obj2, int i10, Object obj3) {
            if ((i10 & 1) != 0) {
                obj = aVar.f26203a;
            }
            if ((i10 & 2) != 0) {
                a0Var = aVar.f26204b;
            }
            if ((i10 & 4) != 0) {
                dialog = aVar.f26205c;
            }
            if ((i10 & 8) != 0) {
                obj2 = aVar.f26206d;
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
            en.d c10;
            b10 = h.b(this.f26205c);
            if (b10 != null && (c10 = en.d.f21675f.c(b10)) != null) {
                c10.d();
            }
            this.f26205c.dismiss();
        }

        public final Dialog d() {
            return this.f26205c;
        }

        public final Object e() {
            return this.f26206d;
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
                if (Intrinsics.areEqual(this.f26205c, ((a) obj).f26205c)) {
                    return true;
                }
                return false;
            }
            throw new NullPointerException("null cannot be cast to non-null type com.squareup.workflow1.ui.modal.ModalContainer.DialogRef<*>");
        }

        public final Object f() {
            return this.f26203a;
        }

        public final String g() {
            String str = this.f26207e;
            if (str != null) {
                return str;
            }
            Intrinsics.throwUninitializedPropertyAccessException("savedStateRegistryKey");
            return null;
        }

        public final a0 h() {
            return this.f26204b;
        }

        public int hashCode() {
            return this.f26205c.hashCode();
        }

        public final void i(b keyAndBundle) {
            Intrinsics.checkNotNullParameter(keyAndBundle, "keyAndBundle");
            if (Intrinsics.areEqual(g.a.b(dn.g.f20875a, this.f26203a, null, 2, null), keyAndBundle.b())) {
                Window window = this.f26205c.getWindow();
                Intrinsics.checkNotNull(window);
                window.restoreHierarchyState(keyAndBundle.a());
            }
        }

        public final b j() {
            Window window = this.f26205c.getWindow();
            Intrinsics.checkNotNull(window);
            Bundle saved = window.saveHierarchyState();
            String b10 = g.a.b(dn.g.f20875a, this.f26203a, null, 2, null);
            Intrinsics.checkNotNullExpressionValue(saved, "saved");
            return new b(b10, saved);
        }

        public final void k(String str) {
            Intrinsics.checkNotNullParameter(str, "<set-?>");
            this.f26207e = str;
        }

        public /* synthetic */ a(Object obj, a0 a0Var, Dialog dialog, Object obj2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(obj, a0Var, dialog, (i10 & 8) != 0 ? null : obj2);
        }
    }
}
