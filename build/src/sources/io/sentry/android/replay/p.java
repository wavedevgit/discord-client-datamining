package io.sentry.android.replay;

import android.os.Handler;
import android.os.Looper;
import android.view.View;
import io.sentry.a1;
import io.sentry.android.replay.p;
import java.io.Closeable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements Closeable {

    /* renamed from: p  reason: collision with root package name */
    public static final a f29140p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    public static final int f29141q = 8;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f29142d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.util.a f29143e;

    /* renamed from: i  reason: collision with root package name */
    private final CopyOnWriteArrayList f29144i;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayList f29145o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: io.sentry.android.replay.p$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0395a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ p f29146d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0395a(p pVar) {
                super(1);
                this.f29146d = pVar;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final ArrayList invoke(ArrayList mViews) {
                Intrinsics.checkNotNullParameter(mViews, "mViews");
                a1 a10 = this.f29146d.f29143e.a();
                try {
                    ArrayList arrayList = this.f29146d.f29145o;
                    arrayList.addAll(mViews);
                    vr.a.a(a10, null);
                    return arrayList;
                } finally {
                }
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void c(p pVar) {
            if (pVar.f29142d.get()) {
                return;
            }
            u.f29221a.e(new C0395a(pVar));
        }

        public final p b() {
            final p pVar = new p(null);
            new Handler(Looper.getMainLooper()).postAtFrontOfQueue(new Runnable() { // from class: io.sentry.android.replay.o
                @Override // java.lang.Runnable
                public final void run() {
                    p.a.c(p.this);
                }
            });
            return pVar;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends ArrayList {
        b() {
        }

        @Override // java.util.ArrayList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean addAll(Collection elements) {
            Intrinsics.checkNotNullParameter(elements, "elements");
            for (e eVar : p.this.n()) {
                Iterator it = elements.iterator();
                while (it.hasNext()) {
                    eVar.h((View) it.next(), true);
                }
            }
            return super.addAll(elements);
        }

        @Override // java.util.ArrayList, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
        /* renamed from: b */
        public boolean add(View element) {
            Intrinsics.checkNotNullParameter(element, "element");
            for (e eVar : p.this.n()) {
                eVar.h(element, true);
            }
            return super.add(element);
        }

        public /* bridge */ boolean c(View view) {
            return super.contains(view);
        }

        @Override // java.util.ArrayList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public final /* bridge */ boolean contains(Object obj) {
            if (!(obj instanceof View)) {
                return false;
            }
            return c((View) obj);
        }

        public /* bridge */ int d() {
            return super.size();
        }

        public /* bridge */ int e(View view) {
            return super.indexOf(view);
        }

        public /* bridge */ int f(View view) {
            return super.lastIndexOf(view);
        }

        @Override // java.util.ArrayList, java.util.AbstractList, java.util.List
        /* renamed from: g */
        public final /* bridge */ View remove(int i10) {
            return j(i10);
        }

        public /* bridge */ boolean i(View view) {
            return super.remove(view);
        }

        @Override // java.util.ArrayList, java.util.AbstractList, java.util.List
        public final /* bridge */ int indexOf(Object obj) {
            if (!(obj instanceof View)) {
                return -1;
            }
            return e((View) obj);
        }

        public View j(int i10) {
            Object remove = super.remove(i10);
            Intrinsics.checkNotNullExpressionValue(remove, "removeAt(...)");
            View view = (View) remove;
            for (e eVar : p.this.n()) {
                eVar.h(view, false);
            }
            return view;
        }

        @Override // java.util.ArrayList, java.util.AbstractList, java.util.List
        public final /* bridge */ int lastIndexOf(Object obj) {
            if (!(obj instanceof View)) {
                return -1;
            }
            return f((View) obj);
        }

        @Override // java.util.ArrayList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public final /* bridge */ int size() {
            return d();
        }

        @Override // java.util.ArrayList, java.util.AbstractCollection, java.util.Collection, java.util.List
        public final /* bridge */ boolean remove(Object obj) {
            if (obj instanceof View) {
                return i((View) obj);
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends CopyOnWriteArrayList {
        c() {
        }

        @Override // java.util.concurrent.CopyOnWriteArrayList, java.util.List, java.util.Collection
        /* renamed from: b */
        public boolean add(e eVar) {
            a1 a10 = p.this.f29143e.a();
            try {
                for (View view : p.this.f29145o) {
                    if (eVar != null) {
                        eVar.h(view, true);
                    }
                }
                Unit unit = Unit.f33074a;
                vr.a.a(a10, null);
                return super.add(eVar);
            } finally {
            }
        }

        public /* bridge */ boolean c(e eVar) {
            return super.contains(eVar);
        }

        @Override // java.util.concurrent.CopyOnWriteArrayList, java.util.List, java.util.Collection
        public final /* bridge */ boolean contains(Object obj) {
            boolean z10;
            if (obj == null) {
                z10 = true;
            } else {
                z10 = obj instanceof e;
            }
            if (!z10) {
                return false;
            }
            return c((e) obj);
        }

        public /* bridge */ int d() {
            return super.size();
        }

        public /* bridge */ int e(e eVar) {
            return super.indexOf(eVar);
        }

        public /* bridge */ int f(e eVar) {
            return super.lastIndexOf(eVar);
        }

        public /* bridge */ boolean g(e eVar) {
            return super.remove(eVar);
        }

        @Override // java.util.concurrent.CopyOnWriteArrayList, java.util.List
        public final /* bridge */ int indexOf(Object obj) {
            boolean z10;
            if (obj == null) {
                z10 = true;
            } else {
                z10 = obj instanceof e;
            }
            if (!z10) {
                return -1;
            }
            return e((e) obj);
        }

        @Override // java.util.concurrent.CopyOnWriteArrayList, java.util.List
        public final /* bridge */ int lastIndexOf(Object obj) {
            boolean z10;
            if (obj == null) {
                z10 = true;
            } else {
                z10 = obj instanceof e;
            }
            if (!z10) {
                return -1;
            }
            return f((e) obj);
        }

        @Override // java.util.concurrent.CopyOnWriteArrayList, java.util.List, java.util.Collection
        public final /* bridge */ boolean remove(Object obj) {
            boolean z10;
            if (obj == null) {
                z10 = true;
            } else {
                z10 = obj instanceof e;
            }
            if (!z10) {
                return false;
            }
            return g((e) obj);
        }

        @Override // java.util.concurrent.CopyOnWriteArrayList, java.util.List, java.util.Collection
        public final /* bridge */ int size() {
            return d();
        }
    }

    public /* synthetic */ p(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29142d.set(true);
        this.f29144i.clear();
    }

    public final CopyOnWriteArrayList n() {
        return this.f29144i;
    }

    private p() {
        this.f29142d = new AtomicBoolean(false);
        this.f29143e = new io.sentry.util.a();
        this.f29144i = new c();
        this.f29145o = new b();
    }
}
