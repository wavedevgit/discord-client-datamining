package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.y;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class e0 {

    /* renamed from: a  reason: collision with root package name */
    private static final e0 f3709a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final e0 f3710b = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b extends e0 {

        /* renamed from: c  reason: collision with root package name */
        private static final Class f3711c = Collections.unmodifiableList(Collections.EMPTY_LIST).getClass();

        private b() {
            super();
        }

        static List f(Object obj, long j10) {
            return (List) o1.A(obj, j10);
        }

        private static List g(Object obj, long j10, int i10) {
            List arrayList;
            List f10 = f(obj, j10);
            if (f10.isEmpty()) {
                if (f10 instanceof d0) {
                    arrayList = new c0(i10);
                } else if ((f10 instanceof x0) && (f10 instanceof y.b)) {
                    arrayList = ((y.b) f10).I0(i10);
                } else {
                    arrayList = new ArrayList(i10);
                }
                o1.O(obj, j10, arrayList);
                return arrayList;
            } else if (f3711c.isAssignableFrom(f10.getClass())) {
                ArrayList arrayList2 = new ArrayList(f10.size() + i10);
                arrayList2.addAll(f10);
                o1.O(obj, j10, arrayList2);
                return arrayList2;
            } else if (f10 instanceof n1) {
                c0 c0Var = new c0(f10.size() + i10);
                c0Var.addAll((n1) f10);
                o1.O(obj, j10, c0Var);
                return c0Var;
            } else {
                if ((f10 instanceof x0) && (f10 instanceof y.b)) {
                    y.b bVar = (y.b) f10;
                    if (!bVar.E0()) {
                        y.b I0 = bVar.I0(f10.size() + i10);
                        o1.O(obj, j10, I0);
                        return I0;
                    }
                }
                return f10;
            }
        }

        @Override // androidx.datastore.preferences.protobuf.e0
        void c(Object obj, long j10) {
            Object unmodifiableList;
            List list = (List) o1.A(obj, j10);
            if (list instanceof d0) {
                unmodifiableList = ((d0) list).getUnmodifiableView();
            } else if (!f3711c.isAssignableFrom(list.getClass())) {
                if ((list instanceof x0) && (list instanceof y.b)) {
                    y.b bVar = (y.b) list;
                    if (bVar.E0()) {
                        bVar.N();
                        return;
                    }
                    return;
                }
                unmodifiableList = Collections.unmodifiableList(list);
            } else {
                return;
            }
            o1.O(obj, j10, unmodifiableList);
        }

        @Override // androidx.datastore.preferences.protobuf.e0
        void d(Object obj, Object obj2, long j10) {
            List f10 = f(obj2, j10);
            List g10 = g(obj, j10, f10.size());
            int size = g10.size();
            int size2 = f10.size();
            if (size > 0 && size2 > 0) {
                g10.addAll(f10);
            }
            if (size > 0) {
                f10 = g10;
            }
            o1.O(obj, j10, f10);
        }

        @Override // androidx.datastore.preferences.protobuf.e0
        List e(Object obj, long j10) {
            return g(obj, j10, 10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class c extends e0 {
        private c() {
            super();
        }

        static y.b f(Object obj, long j10) {
            return (y.b) o1.A(obj, j10);
        }

        @Override // androidx.datastore.preferences.protobuf.e0
        void c(Object obj, long j10) {
            f(obj, j10).N();
        }

        @Override // androidx.datastore.preferences.protobuf.e0
        void d(Object obj, Object obj2, long j10) {
            y.b f10 = f(obj, j10);
            y.b f11 = f(obj2, j10);
            int size = f10.size();
            int size2 = f11.size();
            if (size > 0 && size2 > 0) {
                if (!f10.E0()) {
                    f10 = f10.I0(size2 + size);
                }
                f10.addAll(f11);
            }
            if (size > 0) {
                f11 = f10;
            }
            o1.O(obj, j10, f11);
        }

        @Override // androidx.datastore.preferences.protobuf.e0
        List e(Object obj, long j10) {
            int i10;
            y.b f10 = f(obj, j10);
            if (!f10.E0()) {
                int size = f10.size();
                if (size == 0) {
                    i10 = 10;
                } else {
                    i10 = size * 2;
                }
                y.b I0 = f10.I0(i10);
                o1.O(obj, j10, I0);
                return I0;
            }
            return f10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static e0 a() {
        return f3709a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static e0 b() {
        return f3710b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void c(Object obj, long j10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void d(Object obj, Object obj2, long j10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract List e(Object obj, long j10);

    private e0() {
    }
}
