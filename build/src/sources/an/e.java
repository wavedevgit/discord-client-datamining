package an;

import android.os.Parcel;
import android.os.Parcelable;
import android.util.SparseArray;
import android.view.View;
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
import lr.v;
import org.jetbrains.annotations.NotNull;
import ym.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f726a;

    /* renamed from: b  reason: collision with root package name */
    private final zm.f f727b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f729d = new b();

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
        this.f726a = viewStates;
        this.f727b = new zm.f();
    }

    private final void e(Collection collection) {
        CollectionsKt.I(this.f726a.keySet(), x0.j(this.f726a.keySet(), collection));
        this.f727b.j(collection);
    }

    public final void a(String key, u3.f parentOwner) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(parentOwner, "parentOwner");
        this.f727b.f(key, parentOwner);
    }

    public final void b() {
        this.f727b.g();
    }

    public final Map c() {
        return this.f726a;
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
        this.f726a.clear();
        this.f726a.putAll(from.a());
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
        Set a02 = k.a0(k.R(CollectionsKt.b0(retainedRenderings), b.f729d));
        if (retainedRenderings.size() == a02.size()) {
            this.f727b.h(newView, b10);
            g gVar = (g) this.f726a.remove(b10);
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
                    this.f727b.m(b11);
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
        public static final C0012a CREATOR = new C0012a(null);

        /* renamed from: d  reason: collision with root package name */
        private final Map f728d;

        /* renamed from: an.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0012a implements Parcelable.Creator {
            public /* synthetic */ C0012a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0012a() {
            }
        }

        public a(e viewStateCache) {
            Intrinsics.checkNotNullParameter(viewStateCache, "viewStateCache");
            this.f728d = o0.w(viewStateCache.c());
        }

        public final Map a() {
            return this.f728d;
        }

        @Override // android.os.Parcelable
        public int describeContents() {
            return 0;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            out.writeMap(this.f728d);
        }

        public a(Parcel source) {
            Intrinsics.checkNotNullParameter(source, "source");
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            source.readMap(TypeIntrinsics.asMutableMap(linkedHashMap), e.class.getClassLoader());
            this.f728d = o0.w(linkedHashMap);
        }
    }

    public e() {
        this(new LinkedHashMap());
    }
}
