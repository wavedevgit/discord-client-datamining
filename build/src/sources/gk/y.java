package gk;

import gk.u;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class y {

    /* renamed from: a  reason: collision with root package name */
    private static final y f25381a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static final y f25382b = new c();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b extends y {

        /* renamed from: c  reason: collision with root package name */
        private static final Class f25383c = Collections.unmodifiableList(Collections.EMPTY_LIST).getClass();

        private b() {
            super();
        }

        static List f(Object obj, long j10) {
            return (List) h1.A(obj, j10);
        }

        private static List g(Object obj, long j10, int i10) {
            List arrayList;
            List f10 = f(obj, j10);
            if (f10.isEmpty()) {
                if (f10 instanceof x) {
                    arrayList = new w(i10);
                } else if ((f10 instanceof r0) && (f10 instanceof u.b)) {
                    arrayList = ((u.b) f10).z(i10);
                } else {
                    arrayList = new ArrayList(i10);
                }
                h1.O(obj, j10, arrayList);
                return arrayList;
            } else if (f25383c.isAssignableFrom(f10.getClass())) {
                ArrayList arrayList2 = new ArrayList(f10.size() + i10);
                arrayList2.addAll(f10);
                h1.O(obj, j10, arrayList2);
                return arrayList2;
            } else if (f10 instanceof g1) {
                w wVar = new w(f10.size() + i10);
                wVar.addAll((g1) f10);
                h1.O(obj, j10, wVar);
                return wVar;
            } else {
                if ((f10 instanceof r0) && (f10 instanceof u.b)) {
                    u.b bVar = (u.b) f10;
                    if (!bVar.y()) {
                        u.b z10 = bVar.z(f10.size() + i10);
                        h1.O(obj, j10, z10);
                        return z10;
                    }
                }
                return f10;
            }
        }

        @Override // gk.y
        void c(Object obj, long j10) {
            Object unmodifiableList;
            List list = (List) h1.A(obj, j10);
            if (list instanceof x) {
                unmodifiableList = ((x) list).getUnmodifiableView();
            } else if (!f25383c.isAssignableFrom(list.getClass())) {
                if ((list instanceof r0) && (list instanceof u.b)) {
                    u.b bVar = (u.b) list;
                    if (bVar.y()) {
                        bVar.m();
                        return;
                    }
                    return;
                }
                unmodifiableList = Collections.unmodifiableList(list);
            } else {
                return;
            }
            h1.O(obj, j10, unmodifiableList);
        }

        @Override // gk.y
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
            h1.O(obj, j10, f10);
        }

        @Override // gk.y
        List e(Object obj, long j10) {
            return g(obj, j10, 10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c extends y {
        private c() {
            super();
        }

        static u.b f(Object obj, long j10) {
            return (u.b) h1.A(obj, j10);
        }

        @Override // gk.y
        void c(Object obj, long j10) {
            f(obj, j10).m();
        }

        @Override // gk.y
        void d(Object obj, Object obj2, long j10) {
            u.b f10 = f(obj, j10);
            u.b f11 = f(obj2, j10);
            int size = f10.size();
            int size2 = f11.size();
            if (size > 0 && size2 > 0) {
                if (!f10.y()) {
                    f10 = f10.z(size2 + size);
                }
                f10.addAll(f11);
            }
            if (size > 0) {
                f11 = f10;
            }
            h1.O(obj, j10, f11);
        }

        @Override // gk.y
        List e(Object obj, long j10) {
            int i10;
            u.b f10 = f(obj, j10);
            if (!f10.y()) {
                int size = f10.size();
                if (size == 0) {
                    i10 = 10;
                } else {
                    i10 = size * 2;
                }
                u.b z10 = f10.z(i10);
                h1.O(obj, j10, z10);
                return z10;
            }
            return f10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static y a() {
        return f25381a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static y b() {
        return f25382b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void c(Object obj, long j10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void d(Object obj, Object obj2, long j10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract List e(Object obj, long j10);

    private y() {
    }
}
