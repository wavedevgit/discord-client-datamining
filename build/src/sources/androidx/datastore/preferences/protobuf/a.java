package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.o0;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements o0 {
    protected int memoizedHashCode = 0;

    /* renamed from: androidx.datastore.preferences.protobuf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class AbstractC0041a implements o0.a {
        protected static void b(Iterable iterable, List list) {
            y.a(iterable);
            if (iterable instanceof d0) {
                List underlyingElements = ((d0) iterable).getUnderlyingElements();
                d0 d0Var = (d0) list;
                int size = list.size();
                for (Object obj : underlyingElements) {
                    if (obj == null) {
                        String str = "Element at index " + (d0Var.size() - size) + " is null.";
                        for (int size2 = d0Var.size() - 1; size2 >= size; size2--) {
                            d0Var.remove(size2);
                        }
                        throw new NullPointerException(str);
                    } else if (obj instanceof g) {
                        d0Var.I0((g) obj);
                    } else {
                        d0Var.add((String) obj);
                    }
                }
            } else if (iterable instanceof x0) {
                list.addAll((Collection) iterable);
            } else {
                c(iterable, list);
            }
        }

        private static void c(Iterable iterable, List list) {
            if ((list instanceof ArrayList) && (iterable instanceof Collection)) {
                ((ArrayList) list).ensureCapacity(list.size() + ((Collection) iterable).size());
            }
            int size = list.size();
            for (Object obj : iterable) {
                if (obj == null) {
                    String str = "Element at index " + (list.size() - size) + " is null.";
                    for (int size2 = list.size() - 1; size2 >= size; size2--) {
                        list.remove(size2);
                    }
                    throw new NullPointerException(str);
                }
                list.add(obj);
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public static j1 f(o0 o0Var) {
            return new j1(o0Var);
        }

        protected abstract AbstractC0041a d(a aVar);

        @Override // androidx.datastore.preferences.protobuf.o0.a
        /* renamed from: e */
        public AbstractC0041a L(o0 o0Var) {
            if (getDefaultInstanceForType().getClass().isInstance(o0Var)) {
                return d((a) o0Var);
            }
            throw new IllegalArgumentException("mergeFrom(MessageLite) can only merge messages of the same type.");
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static void b(Iterable iterable, List list) {
        AbstractC0041a.b(iterable, list);
    }

    abstract int c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d(d1 d1Var) {
        int c10 = c();
        if (c10 == -1) {
            int e10 = d1Var.e(this);
            f(e10);
            return e10;
        }
        return c10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j1 e() {
        return new j1(this);
    }

    abstract void f(int i10);

    public void g(OutputStream outputStream) {
        j Z = j.Z(outputStream, j.C(getSerializedSize()));
        a(Z);
        Z.W();
    }
}
