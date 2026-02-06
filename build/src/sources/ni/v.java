package ni;

import java.util.Collection;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class v {
    public static boolean a(Iterable iterable, mi.n nVar) {
        return w.b(iterable.iterator(), nVar);
    }

    public static Object b(Iterable iterable, Object obj) {
        return w.k(iterable.iterator(), obj);
    }

    public static Object c(Iterable iterable) {
        if (iterable instanceof List) {
            List list = (List) iterable;
            if (!list.isEmpty()) {
                return e(list);
            }
            throw new NoSuchElementException();
        }
        return w.i(iterable.iterator());
    }

    public static Object d(Iterable iterable, Object obj) {
        if (iterable instanceof Collection) {
            if (((Collection) iterable).isEmpty()) {
                return obj;
            }
            if (iterable instanceof List) {
                return e(y.a(iterable));
            }
        }
        return w.j(iterable.iterator(), obj);
    }

    private static Object e(List list) {
        return list.get(list.size() - 1);
    }

    public static boolean f(Iterable iterable, mi.n nVar) {
        if ((iterable instanceof RandomAccess) && (iterable instanceof List)) {
            return g((List) iterable, (mi.n) mi.m.j(nVar));
        }
        return w.o(iterable.iterator(), nVar);
    }

    private static boolean g(List list, mi.n nVar) {
        int i10 = 0;
        int i11 = 0;
        while (i10 < list.size()) {
            Object obj = list.get(i10);
            if (!nVar.apply(obj)) {
                if (i10 > i11) {
                    try {
                        list.set(i11, obj);
                    } catch (IllegalArgumentException unused) {
                        h(list, nVar, i11, i10);
                        return true;
                    } catch (UnsupportedOperationException unused2) {
                        h(list, nVar, i11, i10);
                        return true;
                    }
                }
                i11++;
            }
            i10++;
        }
        list.subList(i11, list.size()).clear();
        if (i10 == i11) {
            return false;
        }
        return true;
    }

    private static void h(List list, mi.n nVar, int i10, int i11) {
        for (int size = list.size() - 1; size > i11; size--) {
            if (nVar.apply(list.get(size))) {
                list.remove(size);
            }
        }
        for (int i12 = i11 - 1; i12 >= i10; i12--) {
            list.remove(i12);
        }
    }
}
