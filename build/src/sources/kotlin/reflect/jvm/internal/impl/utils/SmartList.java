package kotlin.reflect.jvm.internal.impl.utils;

import java.lang.reflect.Array;
import java.util.AbstractList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.RandomAccess;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class SmartList<E> extends AbstractList<E> implements RandomAccess {

    /* renamed from: d  reason: collision with root package name */
    private int f36102d;

    /* renamed from: e  reason: collision with root package name */
    private Object f36103e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private static final b f36104d = new b();

        private b() {
        }

        public static b a() {
            return f36104d;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new IllegalStateException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class c extends d {

        /* renamed from: e  reason: collision with root package name */
        private final int f36105e;

        public c() {
            super();
            this.f36105e = ((AbstractList) SmartList.this).modCount;
        }

        @Override // kotlin.reflect.jvm.internal.impl.utils.SmartList.d
        protected void a() {
            if (((AbstractList) SmartList.this).modCount == this.f36105e) {
                return;
            }
            throw new ConcurrentModificationException("ModCount: " + ((AbstractList) SmartList.this).modCount + "; expected: " + this.f36105e);
        }

        @Override // kotlin.reflect.jvm.internal.impl.utils.SmartList.d
        protected Object b() {
            return SmartList.this.f36103e;
        }

        @Override // java.util.Iterator
        public void remove() {
            a();
            SmartList.this.clear();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static abstract class d implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private boolean f36107d;

        private d() {
        }

        protected abstract void a();

        protected abstract Object b();

        @Override // java.util.Iterator
        public final boolean hasNext() {
            return !this.f36107d;
        }

        @Override // java.util.Iterator
        public final Object next() {
            if (!this.f36107d) {
                this.f36107d = true;
                a();
                return b();
            }
            throw new NoSuchElementException();
        }
    }

    private static /* synthetic */ void b(int i10) {
        String str = (i10 == 2 || i10 == 3 || i10 == 5 || i10 == 6 || i10 == 7) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
        Object[] objArr = new Object[(i10 == 2 || i10 == 3 || i10 == 5 || i10 == 6 || i10 == 7) ? 2 : 3];
        switch (i10) {
            case 2:
            case 3:
            case 5:
            case 6:
            case 7:
                objArr[0] = "kotlin/reflect/jvm/internal/impl/utils/SmartList";
                break;
            case 4:
                objArr[0] = "a";
                break;
            default:
                objArr[0] = "elements";
                break;
        }
        if (i10 == 2 || i10 == 3) {
            objArr[1] = "iterator";
        } else if (i10 == 5 || i10 == 6 || i10 == 7) {
            objArr[1] = "toArray";
        } else {
            objArr[1] = "kotlin/reflect/jvm/internal/impl/utils/SmartList";
        }
        switch (i10) {
            case 2:
            case 3:
            case 5:
            case 6:
            case 7:
                break;
            case 4:
                objArr[2] = "toArray";
                break;
            default:
                objArr[2] = "<init>";
                break;
        }
        String format = String.format(str, objArr);
        if (i10 != 2 && i10 != 3 && i10 != 5 && i10 != 6 && i10 != 7) {
            throw new IllegalArgumentException(format);
        }
        throw new IllegalStateException(format);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(E e10) {
        int i10 = this.f36102d;
        if (i10 == 0) {
            this.f36103e = e10;
        } else if (i10 == 1) {
            this.f36103e = new Object[]{this.f36103e, e10};
        } else {
            Object[] objArr = (Object[]) this.f36103e;
            int length = objArr.length;
            if (i10 >= length) {
                int i11 = ((length * 3) / 2) + 1;
                int i12 = i10 + 1;
                if (i11 < i12) {
                    i11 = i12;
                }
                Object[] objArr2 = new Object[i11];
                this.f36103e = objArr2;
                System.arraycopy(objArr, 0, objArr2, 0, length);
                objArr = objArr2;
            }
            objArr[this.f36102d] = e10;
        }
        this.f36102d++;
        ((AbstractList) this).modCount++;
        return true;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        this.f36103e = null;
        this.f36102d = 0;
        ((AbstractList) this).modCount++;
    }

    @Override // java.util.AbstractList, java.util.List
    public E get(int i10) {
        int i11;
        if (i10 >= 0 && i10 < (i11 = this.f36102d)) {
            if (i11 == 1) {
                return (E) this.f36103e;
            }
            return (E) ((Object[]) this.f36103e)[i10];
        }
        throw new IndexOutOfBoundsException("Index: " + i10 + ", Size: " + this.f36102d);
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.List
    @NotNull
    public Iterator<E> iterator() {
        int i10 = this.f36102d;
        if (i10 == 0) {
            b a10 = b.a();
            if (a10 == null) {
                b(2);
            }
            return a10;
        } else if (i10 == 1) {
            return new c();
        } else {
            Iterator<E> it = super.iterator();
            if (it == null) {
                b(3);
            }
            return it;
        }
    }

    @Override // java.util.AbstractList, java.util.List
    public E remove(int i10) {
        int i11;
        E e10;
        if (i10 >= 0 && i10 < (i11 = this.f36102d)) {
            if (i11 == 1) {
                e10 = (E) this.f36103e;
                this.f36103e = null;
            } else {
                Object[] objArr = (Object[]) this.f36103e;
                Object obj = objArr[i10];
                if (i11 == 2) {
                    this.f36103e = objArr[1 - i10];
                } else {
                    int i12 = (i11 - i10) - 1;
                    if (i12 > 0) {
                        System.arraycopy(objArr, i10 + 1, objArr, i10, i12);
                    }
                    objArr[this.f36102d - 1] = null;
                }
                e10 = (E) obj;
            }
            this.f36102d--;
            ((AbstractList) this).modCount++;
            return e10;
        }
        throw new IndexOutOfBoundsException("Index: " + i10 + ", Size: " + this.f36102d);
    }

    @Override // java.util.AbstractList, java.util.List
    public E set(int i10, E e10) {
        int i11;
        if (i10 >= 0 && i10 < (i11 = this.f36102d)) {
            if (i11 == 1) {
                E e11 = (E) this.f36103e;
                this.f36103e = e10;
                return e11;
            }
            Object[] objArr = (Object[]) this.f36103e;
            E e12 = (E) objArr[i10];
            objArr[i10] = e10;
            return e12;
        }
        throw new IndexOutOfBoundsException("Index: " + i10 + ", Size: " + this.f36102d);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f36102d;
    }

    @Override // java.util.List
    public void sort(Comparator<? super E> comparator) {
        int i10 = this.f36102d;
        if (i10 >= 2) {
            Arrays.sort((Object[]) this.f36103e, 0, i10, comparator);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    @NotNull
    public <T> T[] toArray(@NotNull T[] tArr) {
        if (tArr == 0) {
            b(4);
        }
        int length = tArr.length;
        int i10 = this.f36102d;
        if (i10 == 1) {
            if (length != 0) {
                tArr[0] = this.f36103e;
            } else {
                T[] tArr2 = (T[]) ((Object[]) Array.newInstance(tArr.getClass().getComponentType(), 1));
                tArr2[0] = this.f36103e;
                return tArr2;
            }
        } else if (length < i10) {
            T[] tArr3 = (T[]) Arrays.copyOf((Object[]) this.f36103e, i10, tArr.getClass());
            if (tArr3 == null) {
                b(6);
            }
            return tArr3;
        } else if (i10 != 0) {
            System.arraycopy(this.f36103e, 0, tArr, 0, i10);
        }
        int i11 = this.f36102d;
        if (length > i11) {
            tArr[i11] = 0;
        }
        return tArr;
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, E e10) {
        int i11;
        if (i10 >= 0 && i10 <= (i11 = this.f36102d)) {
            if (i11 == 0) {
                this.f36103e = e10;
            } else if (i11 == 1 && i10 == 0) {
                this.f36103e = new Object[]{e10, this.f36103e};
            } else {
                Object[] objArr = new Object[i11 + 1];
                if (i11 == 1) {
                    objArr[0] = this.f36103e;
                } else {
                    Object[] objArr2 = (Object[]) this.f36103e;
                    System.arraycopy(objArr2, 0, objArr, 0, i10);
                    System.arraycopy(objArr2, i10, objArr, i10 + 1, this.f36102d - i10);
                }
                objArr[i10] = e10;
                this.f36103e = objArr;
            }
            this.f36102d++;
            ((AbstractList) this).modCount++;
            return;
        }
        throw new IndexOutOfBoundsException("Index: " + i10 + ", Size: " + this.f36102d);
    }
}
