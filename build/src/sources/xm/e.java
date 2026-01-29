package xm;

import android.os.Parcel;
import android.os.Parcelable;
import android.util.SparseArray;
import android.view.View;
import ir.v;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.sequences.k;
import org.jetbrains.annotations.NotNull;
import vm.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f53460a;

    /* renamed from: b  reason: collision with root package name */
    private final wm.f f53461b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f53463d = new b();

        b() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final String invoke(n it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return it.c();
        }
    }

    public e(Map viewStates) {
        Intrinsics.checkNotNullParameter(viewStates, "viewStates");
        this.f53460a = viewStates;
        this.f53461b = new wm.f();
    }

    private final void e(Collection collection) {
        CollectionsKt.I(this.f53460a.keySet(), x0.j(this.f53460a.keySet(), collection));
        this.f53461b.j(collection);
    }

    public final void a(String key, u3.f parentOwner) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(parentOwner, "parentOwner");
        this.f53461b.f(key, parentOwner);
    }

    public final void b() {
        this.f53461b.g();
    }

    public final Map c() {
        return this.f53460a;
    }

    public final void d(Collection retaining) {
        Intrinsics.checkNotNullParameter(retaining, "retaining");
        Collection<n> collection = retaining;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(collection, 10));
        for (n nVar : collection) {
            arrayList.add(nVar.c());
        }
        e(arrayList);
    }

    public final void f(a from) {
        Intrinsics.checkNotNullParameter(from, "from");
        this.f53460a.clear();
        this.f53460a.putAll(from.a());
    }

    public final a g() {
        return new a(this);
    }

    public final void h(Collection retainedRenderings, View view, View newView) {
        String b10;
        String b11;
        Intrinsics.checkNotNullParameter(retainedRenderings, "retainedRenderings");
        Intrinsics.checkNotNullParameter(newView, "newView");
        b10 = f.b(newView);
        Set a02 = k.a0(k.R(CollectionsKt.b0(retainedRenderings), b.f53463d));
        if (retainedRenderings.size() == a02.size()) {
            this.f53461b.h(newView, b10);
            g gVar = (g) this.f53460a.remove(b10);
            if (gVar != null) {
                newView.restoreHierarchyState(gVar.a());
            }
            if (view != null) {
                b11 = f.b(view);
                if (!a02.contains(b11)) {
                    b11 = null;
                }
                if (b11 != null) {
                    SparseArray<Parcelable> sparseArray = new SparseArray<>();
                    view.saveHierarchyState(sparseArray);
                    Map c10 = c();
                    Pair a10 = v.a(b11, new g(b11, sparseArray));
                    c10.put(a10.c(), a10.d());
                    this.f53461b.m(b11);
                }
            }
            e(x0.m(a02, b10));
            return;
        }
        throw new IllegalArgumentException(("Duplicate entries not allowed in " + retainedRenderings + '.').toString());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Parcelable {
        @NotNull
        public static final C0740a CREATOR = new C0740a(null);

        /* renamed from: d  reason: collision with root package name */
        private final Map f53462d;

        /* renamed from: xm.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0740a implements Parcelable.Creator {
            public /* synthetic */ C0740a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public a createFromParcel(Parcel source) {
                Intrinsics.checkNotNullParameter(source, "source");
                return new a(source);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public a[] newArray(int i10) {
                return new a[i10];
            }

            private C0740a() {
            }
        }

        public a(e viewStateCache) {
            Intrinsics.checkNotNullParameter(viewStateCache, "viewStateCache");
            this.f53462d = o0.w(viewStateCache.c());
        }

        public final Map a() {
            return this.f53462d;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            out.writeMap(this.f53462d);
        }

        public a(Parcel source) {
            Intrinsics.checkNotNullParameter(source, "source");
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            source.readMap(TypeIntrinsics.asMutableMap(linkedHashMap), e.class.getClassLoader());
            this.f53462d = o0.w(linkedHashMap);
        }
    }

    public e() {
        this(new LinkedHashMap());
    }
}
